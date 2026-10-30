// Builds data/google-fonts.json, the list the UI builder's Font menu searches.
// Run: curl -sL https://fonts.google.com/metadata/fonts -o /tmp/gf-meta.json && node scripts/build-google-fonts.mjs /tmp/gf-meta.json
// Output: [[family, category], ...], most popular first. Category is one letter: s sans, r serif, m mono, d display, h handwriting.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const meta = JSON.parse(readFileSync(process.argv[2] ?? "/tmp/gf-meta.json", "utf8"));
const CAT = { "Sans Serif": "s", Serif: "r", Monospace: "m", Display: "d", Handwriting: "h" };
const list = meta.familyMetadataList
  .filter((f) => f.family && !f.family.includes("Icons") && !f.family.includes("Symbols"))
  .sort((a, b) => (a.popularity ?? 1e9) - (b.popularity ?? 1e9))
  .map((f) => [f.family, CAT[f.category] ?? "s"]);
if (list.length < 1000) throw new Error(`Only ${list.length} fonts found; the metadata format may have changed.`);
writeFileSync(`${root}/public/data/google-fonts.json`, JSON.stringify(list));
console.log(`${list.length} Google fonts written to data/google-fonts.json`);
