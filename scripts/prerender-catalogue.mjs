// Writes the superpowers and missions cards into superpowers.html and missions.html, between the
// <!-- cats --> and <!-- groups --> markers, so the lists are in the page without JavaScript.
// Run: node scripts/prerender-catalogue.mjs (build-catalogue.mjs runs it at the end).

import { readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { toCards, groupsHtml, sideHtml } from "../catalogue-render.js";

const root = dirname(dirname(fileURLToPath(import.meta.url)));

for (const kind of ["superpowers", "missions"]) {
  const data = JSON.parse(readFileSync(`${root}/data/${kind}.json`, "utf8"));
  const file = `${root}/${kind}.html`;
  let html = readFileSync(file, "utf8");
  const put = (name, inner) => {
    const re = new RegExp(`<!-- ${name} -->[\\s\\S]*<!-- /${name} -->`);
    if (!re.test(html)) throw new Error(`${kind}.html has no <!-- ${name} --> markers.`);
    html = html.replace(re, () => `<!-- ${name} -->${inner}<!-- /${name} -->`);
  };
  put("cats", sideHtml(data));
  put("groups", groupsHtml(data, toCards(kind, data)));
  writeFileSync(file, html);
  console.log(`${kind}.html: cards written.`);
}
