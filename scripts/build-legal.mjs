// Writes src/content/legal/*.md from the legal drafts in capabilities-lab (docs/legal/*.md).
// Usage: node scripts/build-legal.mjs <path to docs/legal>
// Astro renders the Markdown with the shared layout (src/pages/legal/[slug].astro).
// Reviewer notes (quote blocks) and the "Draft for legal review" line are dropped; placeholders in
// square brackets are highlighted with <mark>. Tables must be written as raw HTML inside <div class="legal-table">.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const src = process.argv[2];
if (!src) throw new Error("Give the path to docs/legal, e.g. node scripts/build-legal.mjs ../capabilities-lab/docs/legal");

const PAGES = [
  { md: "TERMS.md", slug: "terms", nav: "Terms of Service" },
  { md: "PRIVACY.md", slug: "privacy", nav: "Privacy Policy" },
  { md: "ACCEPTABLE-USE.md", slug: "acceptable-use", nav: "Acceptable Use" },
  { md: "SMS-POLICY.md", slug: "messaging", nav: "Messaging and SMS" },
  { md: "BACKGROUND-CHECKS-ADDENDUM.md", slug: "background-checks", nav: "Background checks" },
  { md: "REFUNDS.md", slug: "refunds", nav: "Credit and refunds" },
  { md: "SUBPROCESSORS.md", slug: "subprocessors", nav: "Subprocessors" },
  { md: "COOKIES.md", slug: "cookies", nav: "Cookies" },
  { md: "SECURITY.md", slug: "security", nav: "Security" },
];
// Company details filled into the drafts' placeholders.
const FILL = { "COMPANY LEGAL NAME": "Pramaan", "REGISTERED ADDRESS": "66 Paul St, London EC2A 4NA" };
const LINKS = Object.fromEntries(PAGES.map((p) => [p.md, p]));

function clean(md) {
  let title = "";
  const out = [];
  for (const line of md.split("\n")) {
    if (line.startsWith(">") || line.startsWith("Draft for legal review")) continue;
    const h1 = line.match(/^# (.*)/);
    if (h1) { title = h1[1]; continue; }
    out.push(line);
  }
  const body = out
    .join("\n")
    .replace(/\[([A-Z ]+)\]/g, (m, k) => FILL[k] ?? `<mark>${m}</mark>`)
    .replace(/\b([A-Z][A-Z-]+\.md)\b/g, (m) => (LINKS[m] ? `[${LINKS[m].nav}](/legal/${LINKS[m].slug})` : m))
    .replace(/\n{3,}/g, "\n\n");
  return { title, body: body.trim() };
}

// Relative to this script, not the folder it's run from
const out = fileURLToPath(new URL("../src/content/legal", import.meta.url));
mkdirSync(out, { recursive: true });
PAGES.forEach((p, i) => {
  const { title, body } = clean(readFileSync(join(src, p.md), "utf8"));
  const fm = `---\ntitle: ${JSON.stringify(title)}\nnav: ${JSON.stringify(p.nav)}\norder: ${i + 1}\n---\n\n`;
  writeFileSync(join(out, `${p.slug}.md`), `${fm}${body}\n`);
});
console.log(`wrote ${PAGES.length} pages to src/content/legal/`);
