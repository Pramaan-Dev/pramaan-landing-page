"""Build data/gtm-skills.json from a GTM Skills clone plus our gtm-skills/<skill>/pramaan.md files.

Usage: python3 scripts/gtm-skills.py <clone-dir> [--check]
--check only validates: every pramaan.md id must exist in catalogue/*.md.
"""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FRONT = re.compile(r"^---\n(.*?)\n---\n", re.S)


def front(text):
    m = FRONT.match(text)
    out = {}
    if not m:
        return out
    lines = m.group(1).split("\n")
    i = 0
    while i < len(lines):
        k, _, v = lines[i].partition(":")
        v = v.strip()
        if v in ("|", ">", "|-", ">-"):  # block scalar
            buf = []
            while i + 1 < len(lines) and (lines[i + 1].startswith(" ") or not lines[i + 1]):
                i += 1
                buf.append(lines[i].strip())
            v = " ".join(b for b in buf if b)
        elif v.startswith("[") and v.endswith("]"):
            v = [x.strip().strip("\"'") for x in v[1:-1].split(",") if x.strip()]
        else:
            v = v.strip("\"'")
        if k.strip() and not k.startswith(" "):
            out[k.strip()] = v
        i += 1
    return out


def catalogue_ids():
    """All ids, and the ones the catalogue marks (needs approval)."""
    ids, approval = set(), set()
    for f in (ROOT / "catalogue").glob("*/*.md"):
        for i, rest in re.findall(r"^- `([^`]+)`(.*)$", f.read_text(), re.M):
            ids.add(i)
            if "(needs approval" in rest:
                approval.add(i)
    return ids, approval


def main():
    clone, check = Path(sys.argv[1]), "--check" in sys.argv
    known, approval = catalogue_ids()
    skills, missing, bad = [], [], {}
    for sk in sorted(clone.glob("skills/*/*/SKILL.md")):
        author, name = sk.parent.parent.name, sk.parent.name
        if author.startswith("."):  # skills/.system holds the repo's own submit helper, not a GTM skill
            continue
        meta = front(sk.read_text())
        pm = ROOT / "gtm-skills" / name / "pramaan.md"
        pmeta = front(pm.read_text()) if pm.exists() else {}
        if not pm.exists():
            missing.append(name)
        unknown = [i for i in pmeta.get("ids", []) if i not in known]
        if unknown:
            bad[name] = unknown
        skills.append({
            "name": name, "author": author,
            "title": meta.get("title") or name.replace("-", " ").capitalize(),
            "category": meta.get("category") or "Other",
            "description": (meta.get("description") or "").split(" Triggers:")[0],
            "pramaan": pmeta.get("pramaan_skills", []), "ids": pmeta.get("ids", []),
            "approval": [i for i in pmeta.get("ids", []) if i in approval],
            "hasPramaan": pm.exists(),
        })
    print(f"{len(skills)} skills, {len(skills) - len(missing)} with pramaan.md, {len(bad)} with unknown ids")
    for n, u in bad.items():
        print(f"  {n}: {', '.join(u)}")
    if missing and len(missing) <= 10:
        print("  missing:", ", ".join(missing))
    if check:
        sys.exit(1 if bad else 0)
    (ROOT / "data" / "gtm-skills.json").write_text(json.dumps(skills, separators=(",", ":")))


if __name__ == "__main__":
    assert front("---\nname: a\ndescription: |\n  x\n  y\nids: [p.q, r]\n---\n") == {"name": "a", "description": "x y", "ids": ["p.q", "r"]}
    main()
