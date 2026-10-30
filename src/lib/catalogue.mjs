// Data and cross-links for the detail pages, computed once per build.
import { readFileSync } from 'node:fs';
import { esc, num, slug, toCards, missionDocsUrl, docsUrl } from '../../public/catalogue-render.js';
import sp from '../../public/data/superpowers.json';
import ms from '../../public/data/missions.json';
import sk from '../../public/data/skills.json';

export { sp, ms, sk };
export { slug, missionDocsUrl };

const famOf = new Map(sp.families.flatMap((f) => f.items.map((i) => [i.id, f])));
const uniq = (list) => [...new Set(list)];
export const familiesOf = (ids) => uniq(ids.map((id) => famOf.get(id)).filter(Boolean));

// family -> missions / skills that use it, built in one pass
const misByFam = new Map(), sklByFam = new Map();
const push = (map, f, x) => map.set(f, [...(map.get(f) ?? []), x]);
for (const m of ms.missions) for (const f of familiesOf(m.steps.map((s) => s.id))) push(misByFam, f, m);
for (const s of sk.skills) for (const f of familiesOf(s.ids)) push(sklByFam, f, s);
export const missionsUsing = (f) => misByFam.get(f) ?? [];
export const skillsUsing = (f) => sklByFam.get(f) ?? [];
export const skillsRunning = (missionId) => sk.skills.filter((s) => s.ids.includes(missionId));
export const missionsOfSkill = (s) => ms.missions.filter((m) => s.ids.includes(m.id));
export const moreFromAuthor = (s) => sk.skills.filter((x) => x.author === s.author && x !== s);

const cards = (kind, data) => new Map(toCards(kind, data).map((c) => [c.key, c]));
export const panels = { superpowers: cards('superpowers', sp), missions: cards('missions', ms), skills: cards('skills', sk) };
// The panel markup, with its eyebrow + h2 turned into the page's h1
export const detailBody = (kind, key) => panels[kind].get(key).panel().replace(/<span class="eyebrow">[^<]*<\/span>\s*<h2>(.*?)<\/h2>/, '<h1>$1</h1>');

// Side-column link lists, capped at 12
const famItem = (f) => [`/superpowers/${slug(f.name)}`, f.name, `${num(f.items.length)} superpower${f.items.length === 1 ? '' : 's'}`];
const misItem = (m) => [`/missions/${m.id}`, m.name, m.category];
const sklItem = (s) => [`/skills/gtm/${s.name}`, s.title, s.category];
export const items = { fam: (l) => l.map(famItem), mis: (l) => l.map(misItem), skl: (l) => l.map(sklItem) };
export const linkList = (title, list) =>
  list.length
    ? `<div class="detail__rel"><span class="eyebrow">${title}</span><ul>${list
        .slice(0, 12)
        .map(([href, name, sub]) => `<li><a href="${esc(href)}">${esc(name)}</a>${sub ? `<small>${esc(sub)}</small>` : ''}</li>`)
        .join('')}</ul>${list.length > 12 ? `<p class="caption">and ${list.length - 12} more</p>` : ''}</div>`
    : '';

// ---------- Markdown copies of the detail pages (same data as the HTML), served at <page url>.md ----------
const SITE = 'https://www.pramaan.dev';
const SETUP = `Set up Pramaan once: ${SITE}/skill.md`;
const EFF = { read_only: 'read-only', external_reversible: 'acts outside, can be undone', external_irreversible: "acts outside, can't be undone", external_unknown_effect: 'acts outside' };
const facts = (x) =>
  [x.mode === 'async' ? 'background job' : 'instant', EFF[x.effect], x.requiresApproval && 'needs approval', x.needsConnection && "uses the user's account", x.personalData && 'personal data'].filter(Boolean).join(', ');
const mdList = (title, rows) => (rows.length ? `\n## ${title}\n\n${rows.join('\n')}\n` : '');
const flat = (t) => String(t ?? '').replace(/\s+/g, ' ').trim();

export const familyMd = (f) =>
  `# ${f.name}\n\n> ${flat(f.summary)}\n\nCategory: ${f.category}. ${f.items.length} superpower${f.items.length === 1 ? '' : 's'}. ${SETUP}\n\n## Superpowers\n\n${f.items
    .map((i) => `- \`${i.id}\`: ${flat(i.description)} (${facts(i)}). Docs: ${docsUrl(f.name, i.id)}.md`)
    .join('\n')}\n` +
  mdList('Missions that use it', missionsUsing(f).map((m) => `- [${m.name}](${SITE}/missions/${m.id}.md): \`${m.id}\``)) +
  mdList('Skills that use it', skillsUsing(f).map((s) => `- [${s.title}](${SITE}/skills/gtm/${s.name}.md)`));

export const missionMd = (m) =>
  `# ${m.name}\n\n> ${flat(m.description)}\n\nMission id: \`${m.id}\`. Category: ${m.category}. ${facts(m)}.${m.priceMaxMicro > 0 ? ` Costs at most $${(m.priceMaxMicro / 1e6).toFixed(3)} a run.` : ''}\n\n${SETUP}\nRun it with the MCP tool \`run_outcome\` (id \`${m.id}\`) or \`POST https://api.pramaan.dev/v1/outcomes/${m.id}\`.\nFull reference: ${missionDocsUrl(m)}.md\n\n## Steps, in order\n\n${m.steps.map((s, i) => `${i + 1}. \`${s.id}\`${s.description ? `: ${flat(s.description)}` : ''}`).join('\n')}\n`;

export const skillMd = (s) =>
  `# ${s.title}\n\n> ${flat(s.description)}\n\nInstall: \`npx skills add Pramaan-OSS/skills --skill ${s.name}\`\nThen tell your agent: "Run the ${s.name} skill with Pramaan."\n\n${readFileSync(`${process.cwd()}/public/skills/gtm/${s.name}/pramaan.md`, 'utf8').replace(/^---[\s\S]*?---\n/, '')}`;

export const mdResponse = (md) => new Response(md, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });

export const firstSentence = (t) => (t.match(/^.*?[.!?](?=\s|$)/s) ?? [t])[0];
