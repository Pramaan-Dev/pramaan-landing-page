"""Build data/skills.json from a GTM Skills clone plus our skills/gtm/<skill>/pramaan.md files.

Usage: python3 scripts/gtm-skills.py <clone-dir> [--check | --export <dir> | --avatars]
--avatars downloads each author's photo (avatarUrl in author.md) to media/authors/<author>.jpg, 160px.
--check only validates: every pramaan.md id must exist in catalogue/*.md.
--export writes the GTM part of the Pramaan-OSS/skills repo into <dir>/skills/gtm: each skill folder with its
SKILL.md (plus a pointer to pramaan.md), references/, the author's author.md and our pramaan.md; no swan.md.
After writing data/skills.json, run `node scripts/prerender-catalogue.mjs skills:skills` to put the cards in skills.html.
"""
import json, re, shutil, subprocess, sys, urllib.request
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


# Swan's workspace audit only makes sense inside Swan. Its other default skills stay; three of them
# (clear-my-desk, skillify, inbox-zero) are rewritten for Pramaan in skills/gtm/<name>/SKILL.md.
SKIP = {"audit-swan"}


def skill_text(sk):
    """Our adapted SKILL.md when there is one, else the original."""
    ours = ROOT / "skills" / "gtm" / sk.parent.name / "SKILL.md"
    return (ours if ours.exists() else sk).read_text()


def tidy(desc):
    """Card text: drop the trigger list and the "Use this skill" opener every skill repeats."""
    d = desc.split(" Triggers:")[0]
    d = re.sub(r"^Use (?:this skill|it) ", "", d)
    return d[:1].upper() + d[1:]


def authors(clone):
    """Public profile per author slug: name, title, LinkedIn, company, our copy of the photo. No email."""
    out = {}
    for f in sorted(clone.glob("skills/*/author.md")):
        a, slug = front(f.read_text()), f.parent.name
        photo = ROOT / "media" / "authors" / f"{slug}.jpg"
        out[slug] = {"name": a.get("name", slug), "title": a.get("title", ""), "linkedin": a.get("linkedinUrl", ""),
                     "photo": f"media/authors/{slug}.jpg" if photo.exists() else "", "avatarUrl": a.get("avatarUrl", "")}
    return out


def download_avatars(people):
    (ROOT / "media" / "authors").mkdir(parents=True, exist_ok=True)
    got = 0
    for slug, a in people.items():
        dst = ROOT / "media" / "authors" / f"{slug}.jpg"
        if not a["avatarUrl"] or dst.exists():
            continue
        try:
            req = urllib.request.Request(a["avatarUrl"], headers={"User-Agent": "pramaan-skills"})
            dst.write_bytes(urllib.request.urlopen(req, timeout=20).read())
            subprocess.run(["sips", "-Z", "160", "-s", "format", "jpeg", str(dst), "--out", str(dst)], capture_output=True, check=True)
            got += 1
        except Exception as e:  # a missing photo falls back to initials on the page
            dst.unlink(missing_ok=True)
            print(f"  no photo for {slug}: {e}")
    print(f"downloaded {got} photos")


def map_parts(text):
    """From a pramaan.md: the fastest-path paragraph, the step table rows, and the 'agent does' line."""
    fast = re.search(r"## Fastest path\n\n(.+?)\n\n##", text, re.S)
    rows = [[c.strip() for c in line.strip().strip("|").split("|")] for line in text.splitlines()
            if line.startswith("|") and not re.match(r"^\|[\s|:-]+\|$", line)]
    own = re.search(r"^(The agent does .+)$", text, re.M)
    return {"fast": fast.group(1).replace("\n", " ") if fast else "", "steps": [r[:3] for r in rows[1:] if len(r) >= 3],
            "own": own.group(1) if own else ""}


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
        if author.startswith(".") or name in SKIP:  # skills/.system holds the repo's own submit helper
            continue
        meta = front(skill_text(sk))
        pm = ROOT / "skills" / "gtm" / name / "pramaan.md"
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
            "description": tidy(meta.get("description") or ""),
            "pramaan": pmeta.get("pramaan_skills", []), "ids": pmeta.get("ids", []),
            "approval": [i for i in pmeta.get("ids", []) if i in approval],
            **(map_parts(pm.read_text()) if pm.exists() else {}),
        })
    print(f"{len(skills)} skills, {len(skills) - len(missing)} with pramaan.md, {len(bad)} with unknown ids")
    for n, u in bad.items():
        print(f"  {n}: {', '.join(u)}")
    if missing and len(missing) <= 10:
        print("  missing:", ", ".join(missing))
    if check or bad:
        sys.exit(1 if bad else 0)
    if "--avatars" in sys.argv:
        download_avatars(authors(clone))
        return
    if "--export" in sys.argv:
        export(clone, Path(sys.argv[sys.argv.index("--export") + 1]), skills)
        return
    # Same shape as data/superpowers.json so catalogue.js and catalogue-render.js draw the page
    count = {}
    for s in skills:
        count[s["category"]] = count.get(s["category"], 0) + 1
    cats = [{"name": c, "blurb": BLURBS.get(c, ""), "count": n} for c, n in sorted(count.items(), key=lambda x: -x[1])]
    people = {k: {f: v for f, v in a.items() if f != "avatarUrl"} for k, a in authors(clone).items() if any(s["author"] == k for s in skills)}
    data = {"total": len(skills), "categories": cats, "featured": [f for f in FEATURED if any(s["name"] == f for s in skills)],
            "authors": people, "skills": skills}
    (ROOT / "data" / "skills.json").write_text(json.dumps(data, separators=(",", ":")))


FEATURED = ["meeting-prep", "account-research-brief", "cold-email-strategist", "signal-sourcer", "competitor-monitoring", "icp-lookalike-expansion"]
BLURBS = {
    "RevOps": "CRM hygiene, forecasting, pipeline reviews and the systems behind them.",
    "Outreach": "Cold email, LinkedIn and calls: sequences, copy and personalisation.",
    "Ads": "Audit and run Google, Meta and LinkedIn ads.",
    "Signals": "Spot buying signals and act on them while they are fresh.",
    "Prospecting": "Build lists of the right companies and people.",
    "Deals": "Score, qualify and move open deals and accounts.",
    "ABM": "Pick target accounts and work them across channels.",
    "Influencers": "Find, brief and measure creators and advocates.",
    "Newsletters": "Grow, write and report on newsletters.",
    "Sales": "Discovery, demos, meetings and the sales process.",
    "Research": "Research companies, people and markets before you act.",
    "Positioning": "Messaging, positioning and copy that sounds human.",
    "Events": "Plan, work and follow up on conferences and events.",
    "SEO": "Keyword research, content and search rankings.",
    "Reddit": "Find threads, join in safely and track what Reddit brings.",
    "Leadership": "Run the GTM team: planning, hiring and operating rhythm.",
    "AEO": "Show up in AI answers: ChatGPT, Perplexity and Google AI.",
    "Pricing": "Price and package the product.",
    "Hiring": "Hire and ramp the go-to-market team.",
    "Affiliates": "Run an affiliate or partner programme.",
}


POINTER = """

## Run it with Pramaan

`pramaan.md` in this folder maps each step of this skill to Pramaan superpowers and missions, and says which ones wait for the user's yes. Read it before running the skill. Setup: https://www.pramaan.dev/skill.md
"""


def export(clone, out, skills):
    """Rewrite <out>/skills/gtm from scratch, with gtm's LICENSE (Swan's MIT notice) and README.
    Other skill sets (legal, recruiting...) sit beside it in skills/ and are left alone."""
    base = out / "skills" / "gtm"
    shutil.rmtree(base, ignore_errors=True)
    for s in skills:
        src, dst = clone / "skills" / s["author"] / s["name"], base / s["author"] / s["name"]
        shutil.copytree(src, dst, ignore=shutil.ignore_patterns("swan.md"))
        (dst / "SKILL.md").write_text(skill_text(src / "SKILL.md").rstrip() + POINTER)
        shutil.copy(ROOT / "skills" / "gtm" / s["name"] / "pramaan.md", dst / "pramaan.md")
        author_md = clone / "skills" / s["author"] / "author.md"
        if author_md.exists():
            shutil.copy(author_md, dst.parent / "author.md")
    shutil.copy(clone / "LICENSE", base / "LICENSE")
    rev = subprocess.run(["git", "-C", str(clone), "rev-parse", "--short", "HEAD"], capture_output=True, text=True).stdout.strip()
    (base / "README.md").write_text(GTM_README.format(n=len(skills), authors=len({s["author"] for s in skills}), rev=rev))
    if not (out / "README.md").exists():
        (out / "README.md").write_text(README)
    print(f"exported {len(skills)} skills to {base}")


README = """# Pramaan skills

Open skills for AI agents, each with a `pramaan.md` that maps its steps to the [Pramaan](https://www.pramaan.dev) superpowers and missions that run them.

Browse them at **[pramaan.dev/skills](https://www.pramaan.dev/skills)**.

## Install

```bash
# one skill
npx skills add Pramaan-OSS/skills --skill meeting-prep

# pick from the whole library
npx skills add Pramaan-OSS/skills
```

Add `-a claude-code`, `-a cursor`, `-a codex` and so on to target one agent. Then set up Pramaan once: tell your agent to read https://www.pramaan.dev/skill.md.

## Sets

| Set | Skills | Folder |
|---|---|---|
| Go-to-market | prospecting, signals, outreach, research, ads, RevOps and more | [skills/gtm](skills/gtm) |

Each skill folder holds:

```
<skill>/
  SKILL.md       # the skill, with a closing "Run it with Pramaan" section
  pramaan.md     # which Pramaan ids do each step, and which wait for the user's yes
  references/    # deeper material the skill routes to (when it has any)
```

Each set says where its skills come from and how they are licensed in its own README.
"""

GTM_README = """# Go-to-market skills

{n} skills by {authors} GTM operators: prospecting, signals, outreach, research, ads, RevOps and more. Layout: `<author>/author.md` for who wrote them, `<author>/<skill>/` for each skill.

## Where they come from

Collected by Swan in [swan-gtm/gtm-skills](https://github.com/swan-gtm/gtm-skills) (this copy: `{rev}`), under the MIT licence in this folder. Credit for each skill stays with its author in `author.md`. To suggest a change to a skill, contribute it there; changes to a `pramaan.md` are welcome here.

This folder is generated. Don't edit it by hand.
"""


if __name__ == "__main__":
    assert front("---\nname: a\ndescription: |\n  x\n  y\nids: [p.q, r]\n---\n") == {"name": "a", "description": "x y", "ids": ["p.q", "r"]}
    assert tidy("Use this skill when a deal stalls. Triggers: x") == "When a deal stalls."
    assert map_parts("## Fastest path\n\nUse `m`.\n\n## Step by step\n\n| Skill step | Pramaan id | Notes |\n|---|---|---|\n| 1. Find | `a`, `b` | x |\n\nThe agent does 2.\n") == \
        {"fast": "Use `m`.", "steps": [["1. Find", "`a`, `b`", "x"]], "own": "The agent does 2."}
    main()
