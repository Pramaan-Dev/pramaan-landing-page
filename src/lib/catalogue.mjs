// Data and cross-links for the detail pages, computed once per build.
import { esc, num, slug, toCards, missionDocsUrl } from '../../public/catalogue-render.js';
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

export const firstSentence = (t) => (t.match(/^.*?[.!?](?=\s|$)/s) ?? [t])[0];
