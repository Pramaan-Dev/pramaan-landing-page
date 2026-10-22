// Builds data/superpowers.json and data/missions.json for superpowers.html and missions.html.
// Run: node scripts/build-catalogue.mjs [path-to-capabilities-lab]
// Ids, descriptions and steps come from capabilities-lab. Categories and families come from
// data/sorting.json, where every id was sorted by hand into one category (and, for a
// superpower, one family). An id missing from it stops the build so nothing is guessed.
// Mission card titles come from data/mission-names.json; a missing one falls back to the id.

import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const lab = resolve(process.argv[2] ?? resolve(root, "../capabilities-lab"));
const { CATALOG } = await import(`${lab}/packages/sdk/src/generated/catalog.ts`);
const { OUTCOMES } = await import(`${lab}/packages/sdk/src/generated/outcomes.ts`);
// Missions the owner hid everywhere: never on this site, not even in data files.
const { HIDDEN_OUTCOME_IDS } = await import(`${lab}/apps/api/src/outcomes-registry.ts`);
const visible = Object.values(OUTCOMES).filter((o) => !HIDDEN_OUTCOME_IDS.has(o.id));
const sorting = JSON.parse(readFileSync(`${root}/data/sorting.json`, "utf8"));
const missionNames = JSON.parse(readFileSync(`${root}/data/mission-names.json`, "utf8"));

export const CATEGORIES = [
  ["Data", "Companies, people and contacts: research, lead lists, work emails and company signals."],
  ["Social media", "Posts, profiles, comments and trends on every network, and posting from your accounts."],
  ["AI search and SEO", "Rankings, keywords, backlinks, and how AI answer engines see your brand."],
  ["Advertising", "Your ad accounts, competitors' ads, audiences and creator deals."],
  ["News", "Headlines, articles and news feeds on any topic, company or market."],
  ["Research", "Deep research, academic papers and answers that cite their sources."],
  ["Legal", "Courts, cases, dockets, judges and statutes."],
  ["Web tools", "Read, scrape and watch any website, or drive a real browser."],
  ["E-commerce", "Products, prices, reviews and marketplaces, through to shipping and tracking."],
  ["Travel & places", "Maps, places, addresses, property, routes, weather and travel."],
  ["Finance", "Take payments, run billing, move money, handle tax and read the markets."],
  ["Crypto & DeFi", "Tokens, wallets, chains, DeFi yields and on-chain data."],
  ["Gen AI", "Make images, video, voice and music, and call language models."],
  ["Email & calendar", "Send and read email, and book, run and sum up meetings."],
  ["Phone & messaging", "Calls, AI phone agents, SMS, WhatsApp, chat and one-time codes."],
  ["Hiring & assessments", "Jobs, pay, candidates and proctored tests."],
  ["Identity & security", "Verify people, stop fraud, run sign-in and check for threats."],
  ["Developer tools", "Code, deploys, storage, databases, workflows and documents."],
].map(([name, blurb]) => ({ name, blurb }));
const known = new Set(CATEGORIES.map((c) => c.name));

const place = (id) => {
  const s = sorting.items[id];
  if (!s) throw new Error(`${id} has no category in data/sorting.json. Sort it, then rebuild.`);
  if (!known.has(s.c)) throw new Error(`${id} has unknown category "${s.c}".`);
  return s;
};
const UPPER = new Set("ai aeo seo sms gst kyc kyb dns url api pdf ip crm csv json ev fx ugc otp rcs sip vat iban tls ssl llm b2b id ux qr hs eu us uk".split(" "));
const nameOf = (id) => {
  const words = id.split(/[.\-_]/).map((w) => (UPPER.has(w) ? w.toUpperCase() : w));
  const name = words.join(" ");
  return name.charAt(0).toUpperCase() + name.slice(1);
};
const firstSentence = (text) => text.match(/^.*?[.!?](?=\s|$)/)?.[0] ?? text;

// Superpowers: one card per family.
const families = new Map();
for (const c of Object.values(CATALOG)) {
  const { c: category, f } = place(c.id);
  if (!f) throw new Error(`${c.id} has no family in data/sorting.json.`);
  const fam = sorting.families[f];
  if (!fam) throw new Error(`Family "${f}" (from ${c.id}) has no summary in data/sorting.json.`);
  if (!families.has(f)) families.set(f, { name: f, category: fam.c, summary: fam.summary, items: [] });
  if (families.get(f).category !== category) throw new Error(`${c.id} is in "${category}" but its family "${f}" is in "${fam.c}".`);
  families.get(f).items.push({
    id: c.id,
    description: c.description,
    mode: c.mode,
    effect: c.effectClass,
    needsConnection: !!c.needsConnection,
    requiresApproval: !!c.requiresApproval,
  });
}

// Missions: one card each, with their steps from docs/OUTCOMES.md.
const steps = {};
for (const line of readFileSync(`${lab}/docs/OUTCOMES.md`, "utf8").split("\n")) {
  const m = line.match(/^\| `([^`]+)` \| .* \| ((?:`[^`]+`(?:, )?)+) \| [a-z_]+ \| (?:yes|no) \|$/);
  if (m) steps[m[1]] = m[2].replaceAll("`", "").split(", ");
}
const missions = visible.map((o) => ({
  id: o.id,
  name: missionNames[o.id] ?? nameOf(o.id),
  category: place(o.id).c,
  description: o.description,
  mode: o.mode,
  effect: o.effectClass,
  priceMaxMicro: o.priceMaxMicro,
  personalData: !!o.personalData,
  requiresApproval: !!o.requiresApproval,
  steps: (steps[o.id] ?? []).map((id) => ({
    id,
    description: CATALOG[id] ? firstSentence(CATALOG[id].description) : "",
  })),
}));

const byName = (a, b) => a.name.localeCompare(b.name);
const count = (list, n) => CATEGORIES.map((c) => ({ ...c, count: list.filter((x) => x.category === c.name).reduce((s, x) => s + n(x), 0) }));
const fams = [...families.values()].sort(byName);

writeFileSync(`${root}/data/superpowers.json`, JSON.stringify({
  total: Object.keys(CATALOG).length,
  categories: count(fams, (f) => f.items.length),
  featured: sorting.featured.superpowers.filter((f) => families.has(f)),
  families: fams,
}));
writeFileSync(`${root}/data/missions.json`, JSON.stringify({
  total: missions.length,
  categories: count(missions, () => 1),
  featured: sorting.featured.missions.filter((id) => OUTCOMES[id] && !HIDDEN_OUTCOME_IDS.has(id)),
  missions: missions.sort(byName),
}));
console.log(`${Object.keys(CATALOG).length} superpowers in ${fams.length} families, ${missions.length} missions.`);
await import("./prerender-catalogue.mjs");
