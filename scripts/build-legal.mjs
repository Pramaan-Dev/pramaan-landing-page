// Builds legal/*.html from the legal drafts in capabilities-lab (docs/legal/*.md).
// Usage: node scripts/build-legal.mjs <path to docs/legal>
// Reviewer notes (quote blocks) and the "Draft for legal review" line are dropped.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

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
const LINKS = Object.fromEntries(PAGES.map((p) => [p.md, `${p.slug}.html`]));

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function inline(text) {
  const code = [];
  let s = esc(text).replace(/`([^`]+)`/g, (_, c) => `\u0000${code.push(c) - 1}\u0000`);
  s = s
    .replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2">$1</a>')
    .replace(/(^|[\s(])(https?:\/\/[^\s)<]+[^\s)<.,;])/g, '$1<a href="$2">$2</a>')
    .replace(/\b([A-Z][A-Z-]+\.md)\b/g, (m) => (LINKS[m] ? `<a href="${LINKS[m]}">${PAGES.find((p) => p.md === m).nav}</a>` : m))
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]/g, '<mark>[$1]</mark>');
  return s.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${code[i]}</code>`);
}

// Markdown subset used by the drafts: headings, paragraphs, nested lists, tables, quotes.
function render(md) {
  const lines = md.split("\n");
  const out = [];
  let title = "";
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim() || line.startsWith("Draft for legal review")) { i++; continue; }
    if (line.startsWith(">")) { while (i < lines.length && lines[i].startsWith(">")) i++; continue; }
    const h = line.match(/^(#{1,4}) (.*)/);
    if (h) {
      if (h[1] === "#") title = h[2];
      else out.push(`<h${h[1].length}>${inline(h[2])}</h${h[1].length}>`);
      i++; continue;
    }
    if (line.startsWith("|")) {
      const rows = [];
      while (i < lines.length && lines[i].startsWith("|")) rows.push(lines[i++]);
      const cells = (r) => r.slice(1, -1).split("|").map((c) => inline(c.trim()));
      const [head, , ...body] = rows;
      out.push(`<div class="legal-table"><table><thead><tr>${cells(head).map((c) => `<th>${c}</th>`).join("")}</tr></thead><tbody>${body.map((r) => `<tr>${cells(r).map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
      continue;
    }
    if (/^\s*(- |\d+\. )/.test(line)) {
      // Collect items with indent; lines without a marker continue the previous item.
      const items = [];
      while (i < lines.length && lines[i].trim() && !lines[i].startsWith(">") && !/^#|^\|/.test(lines[i])) {
        const m = lines[i].match(/^(\s*)(- |\d+\. )(.*)/);
        if (m) items.push({ indent: m[1].length, ordered: m[2] !== "- ", text: m[3] });
        else items.at(-1).text += " " + lines[i].trim();
        i++;
      }
      out.push(list(items, 0, items.length));
      continue;
    }
    const para = [];
    while (i < lines.length && lines[i].trim() && !/^(#|\||>|\s*- |\s*\d+\. )/.test(lines[i])) para.push(lines[i++].trim());
    out.push(`<p>${inline(para.join(" "))}</p>`);
  }
  return { title, body: out.join("\n") };
}

function list(items, from, to) {
  const base = items[from].indent;
  const tag = items[from].ordered ? "ol" : "ul";
  let html = `<${tag}>`;
  for (let k = from; k < to; ) {
    let end = k + 1;
    while (end < to && items[end].indent > base) end++;
    html += `<li>${inline(items[k].text)}${end > k + 1 ? list(items, k + 1, end) : ""}</li>`;
    k = end;
  }
  return html + `</${tag}>`;
}

const page = (p, title, body) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(title)} | Pramaan</title>
  <meta name="robots" content="noindex" />
  <meta name="theme-color" content="#f6f3f1" />
  <link rel="icon" href="../favicon.svg" type="image/svg+xml" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Newsreader:opsz,wght@6..72,400&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../styles.css" />
  <link rel="stylesheet" href="../catalogue.css" />
  <link rel="stylesheet" href="../legal.css" />
  <link rel="stylesheet" href="../components/ticket-stub-footer.css" />
  <script src="../components/ticket-stub-footer.js" defer></script>
</head>
<body>

  <header class="nav">
    <div class="container nav__inner">
      <a href="../index.html" class="logo" aria-label="Pramaan home">
        <span class="logo__mark" aria-hidden="true"></span>
        <span class="logo__word">pramaan</span>
      </a>
      <nav class="nav__links" aria-label="Primary">
        <a href="../index.html#how">How it works</a>
        <a href="../superpowers.html">Superpowers</a>
        <a href="../missions.html">Missions</a>
        <a href="../index.html#pricing">Pricing</a>
      </nav>
      <div class="nav__actions">
        <a href="../index.html#login" class="btn btn--ghost">Log in</a>
        <a href="../index.html#start" class="btn btn--black">Get early access</a>
      </div>
      <button class="nav__toggle" aria-label="Open menu" aria-expanded="false" data-nav-toggle>
        <span></span><span></span>
      </button>
    </div>
  </header>

  <main>
    <section class="cat-hero">
      <div class="container cat-hero__inner">
        <span class="tag"><span class="tag__dot"></span>Legal</span>
        <h1 class="display display--md">${esc(title.replace(/^Pramaan /, ""))}</h1>
        <p class="legal-draft">Draft for legal review. Not in force.</p>
      </div>
    </section>

    <div class="container cat-layout">
      <aside class="cat-side" aria-label="Legal pages">
        <p class="eyebrow cat-side__title">Legal</p>
        <ul>
${PAGES.map((q) => `          <li><a href="${q.slug}.html"${q === p ? ' aria-current="page"' : ""}>${q.nav}</a></li>`).join("\n")}
        </ul>
      </aside>
      <article class="legal">
${body}
      </article>
    </div>
  </main>

  <ticket-stub-footer wordmark="pramaan" wordmark-style="dots" ticket-surface="plain" copyright="&copy; 2026 Pramaan">
    <nav data-slot="sections">
      <a href="../index.html">Home</a>
      <a href="../superpowers.html">Superpowers</a>
      <a href="../missions.html">Missions</a>
      <a href="../index.html#pricing">Pricing</a>
      <a href="../index.html#faq">FAQ</a>
    </nav>
    <p data-slot="eyebrow">Find a company's work emails|Scrape a page|Send a text|Take a payment</p>
    <h2 data-slot="headline">Say what you need.<br>Keep the proof.</h2>
    <p data-slot="description">$1 free to start. No code. No monthly fee.</p>
    <a data-slot="cta" href="../index.html#start">Get early access</a>
    <nav data-slot="links" data-title="Product"><a href="../superpowers.html">Superpowers</a><a href="../missions.html">Missions</a><a href="../index.html#pricing">Pricing</a><a href="../index.html#faq">FAQ</a></nav>
    <nav data-slot="links" data-title="More"><a href="../developers.html">For developers</a><a href="../index.html#login">Log in</a><a href="security.html">Security</a></nav>
    <span data-slot="status" data-caption="Early access">Open</span>
    <span data-slot="count" data-value="3483">Superpowers</span>
    <p data-slot="blurb">Ask in plain words. Pramaan picks the right tool, does the job and keeps a record of every step. Messages and payments wait for your OK.</p>
    <p data-slot="legal"><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a></p>
  </ticket-stub-footer>

  <script src="../script.js"></script>
</body>
</html>
`;

mkdirSync("legal", { recursive: true });
for (const p of PAGES) {
  const { title, body } = render(readFileSync(join(src, p.md), "utf8"));
  writeFileSync(`legal/${p.slug}.html`, page(p, title, body));
}
console.log(`wrote ${PAGES.length} pages to legal/`);
