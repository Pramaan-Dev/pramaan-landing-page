// Checks dist/ for every URL the old site served. Run after `astro build`: node scripts/url-parity.mjs
// URLs that vercel.json redirects or rewrites are checked against their target.
import { readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist', import.meta.url).pathname;
const isFile = (p) => { try { return statSync(p).isFile(); } catch { return false; } };
// A URL exists if it is a file, or a page written as <url>.html (a folder alone does not count).
const has = (u) => isFile(join(dist, u)) || isFile(join(dist, `${u === '/' ? '/index' : u}.html`));

const urls = [
  // old sitemap.xml
  '/', '/superpowers.html', '/missions.html', '/developers.html', '/ui-inspiration', '/skills', '/badge.html', '/llms.txt', '/skill.md', '/skills/index.md', '/catalogue/index.md',
  // root pages with and without .html
  ...['index', 'simple', 'developers', 'badge', 'superpowers', 'missions', 'skills', 'ui-builder', 'ui-inspiration'].flatMap((p) => [`/${p}`, `/${p}.html`]),
  // legal
  ...['terms', 'privacy', 'acceptable-use', 'messaging', 'background-checks', 'refunds', 'subprocessors', 'cookies', 'security'].flatMap((p) => [`/legal/${p}`, `/legal/${p}.html`]),
  // files
  '/skill.md', '/llms.txt', '/robots.txt', '/.well-known/ai-catalog.json', '/.well-known/security.txt', '/.well-known/microsoft-identity-association.json',
  '/data/superpowers.json', '/data/missions.json', '/data/skills.json', '/data/sorting.json', '/data/mission-names.json', '/data/google-fonts.json',
  '/catalogue/index.md', '/catalogue/superpowers/web-tools.md', '/catalogue/missions/advertising.md',
  '/skills/gtm/google-ads-audit/pramaan.md', '/skills/ads-marketing/skill.md', '/media/authors/aditya-sriram.jpg',
  '/styles.css', '/catalogue.css', '/legal.css', '/script.js', '/catalogue.js', '/catalogue-render.js', '/dropdown.js', '/ui-inspiration.js',
  '/components/ticket-stub-footer.js', '/components/halftone-footer.js', '/components/lanyard-badge.js', '/favicon.ico', '/favicon.svg', '/apple-touch-icon.png', '/logo.svg',
  // new pages
  '/skills/gtm/google-ads-audit', '/blog', '/blog/rss.xml', '/sitemap-index.xml', '/404.html',
];
// vercel.json rewrites and redirects: the source is served, so the target must exist
const vercel = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'));
const ruled = [
  ['/SKILL.md', '/skill.md'], ['/security.txt', '/.well-known/security.txt'], ['/legal', '/legal/terms'], ['/sitemap.xml', '/sitemap-index.xml'],
];

let missing = 0;
for (const u of new Set(urls)) if (!has(u)) { missing++; console.error(`MISSING ${u}`); }
const rules = [...(vercel.rewrites ?? []), ...(vercel.redirects ?? [])];
for (const [from, to] of ruled) {
  if (!has(to)) { missing++; console.error(`MISSING ${to} (target of ${from})`); }
  if (!rules.some((r) => r.source.startsWith(from) && r.destination === to)) { missing++; console.error(`vercel.json has no rule ${from} -> ${to}`); }
}
// Every URL in the generated sitemap must exist too
const map = readFileSync(join(dist, 'sitemap-0.xml'), 'utf8');
let n = 0;
for (const [, loc] of map.matchAll(/<loc>https:\/\/www\.pramaan\.dev([^<]*)<\/loc>/g)) {
  n++;
  const p = loc === '/' ? '/index' : loc;
  if (!has(p)) { missing++; console.error(`MISSING sitemap url ${loc}`); }
}
console.log(`${new Set(urls).size} listed URLs and ${n} sitemap URLs checked, ${missing} missing.`);
process.exit(missing ? 1 : 0);
