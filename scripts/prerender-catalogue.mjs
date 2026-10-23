// Writes the superpowers and missions cards into superpowers.html and missions.html, between the
// <!-- cats --> and <!-- groups --> markers, so the lists are in the page without JavaScript.
// It also writes a markdown copy of both lists under catalogue/, one file per category, so agents
// can read every id without parsing HTML.
// Run: node scripts/prerender-catalogue.mjs (build-catalogue.mjs runs it at the end).

import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
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

// Markdown copy.
const site = "https://www.pramaan.dev";
const slug = (name) => name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const flat = (text) => (text ?? "").replace(/\s+/g, " ").trim();
const flags = (x) => [x.requiresApproval && "needs approval", x.needsConnection && "needs a connected account"].filter(Boolean);
const line = (id, text, extra) => `- \`${id}\`: ${flat(text)}${extra.length ? ` (${extra.join("; ")})` : ""}`;
const out = `${root}/catalogue`;
rmSync(out, { recursive: true, force: true });
const index = ["# Pramaan catalogue", "", "Every superpower (single action) and mission (multi-step job), one file per category. Ids are what you pass to the API, SDK or MCP server. Setup: " + `${site}/skill.md`, ""];

for (const kind of ["superpowers", "missions"]) {
  const data = JSON.parse(readFileSync(`${root}/data/${kind}.json`, "utf8"));
  mkdirSync(`${out}/${kind}`, { recursive: true });
  index.push(`## ${kind === "superpowers" ? "Superpowers" : "Missions"} (${data.total})`, "");
  for (const cat of data.categories) {
    if (!cat.count) continue;
    const md = [`# ${kind === "superpowers" ? "Superpowers" : "Missions"}: ${cat.name}`, "", cat.blurb, ""];
    if (kind === "superpowers") {
      for (const fam of data.families.filter((f) => f.category === cat.name)) {
        md.push(`## ${fam.name}`, "", flat(fam.summary), "", ...fam.items.map((i) => line(i.id, i.description, flags(i))), "");
      }
    } else {
      for (const m of data.missions.filter((x) => x.category === cat.name)) {
        const steps = m.steps.length ? [`steps: ${m.steps.map((s) => s.id).join(", ")}`] : [];
        md.push(line(m.id, `${m.name}. ${m.description}`, [...flags(m), ...steps]));
      }
      md.push("");
    }
    const path = `catalogue/${kind}/${slug(cat.name)}.md`;
    writeFileSync(`${root}/${path}`, md.join("\n"));
    index.push(`- [${cat.name}](${site}/${path}): ${cat.count}`);
  }
  index.push("");
}
writeFileSync(`${out}/index.md`, index.join("\n"));
console.log("catalogue/: markdown written.");
