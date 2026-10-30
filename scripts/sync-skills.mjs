// Copies the agent skill files from the product repo, at the commit the live API serves, into public/,
// then checks llms.txt counts. Syncing ahead of the API would list ids it doesn't serve yet.
// After each API deploy, update DEPLOYED (or run once with SKILLS_REF=<commit>).
//   node scripts/sync-skills.mjs [path to capabilities-lab]   (default ../capabilities-lab, next to this repo)
//   node scripts/sync-skills.mjs --check                      (llms.txt counts only, no product repo needed)
// Sources: docs/skills/pramaan-capabilities/SKILL.md -> public/skill.md,
//          docs/skills/categories/<cat>/SKILL.md -> public/skills/<cat>/skill.md,
//          docs/skills/categories/README.md -> public/skills/index.md.
// Copies are verbatim (as the 2026-10-20/21 hand copies were) apart from the hidden-mission filter and FIXES below.
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const pub = `${root}/public`;
const site = 'https://www.pramaan.dev';
const fail = (msg) => { console.error(`sync-skills: ${msg}`); process.exit(1); };

// Missions kept off the public site, and any background-check wording.
const HIDDEN = ['candidate.background.check', 'candidate.employment.verify', 'worker.registration.verify', 'candidate.profile.authenticity', 'candidate.dev.profile'];
const isHidden = (line) => HIDDEN.some((id) => line.includes(id)) || /background[\s-]*(check|screen)/i.test(line);

// Safety fixes applied after the copy, until the product repo carries them. Each must still match, or the run fails.
// [file, exact text, replacement, why]
const FIXES = [
  ['skill.md', 'before the workspace accepted the background-checks addendum.', 'before the workspace accepted the required addendum.',
    'keeps the addendum_required error row without background-check wording'],
];

const slug = (name) => name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function checkLlms() {
  const llms = readFileSync(`${pub}/llms.txt`, 'utf8');
  const errors = [];
  for (const kind of ['superpowers', 'missions']) {
    const data = JSON.parse(readFileSync(`${pub}/data/${kind}.json`, 'utf8'));
    for (const cat of data.categories.filter((c) => c.count)) {
      const url = `${site}/catalogue/${kind}/${slug(cat.name)}.md`;
      const m = llms.match(new RegExp(`\\(${url.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&')}\\): (\\d+)`));
      if (!m) errors.push(`missing ${url}`);
      else if (+m[1] !== cat.count) errors.push(`${url} says ${m[1]}, data says ${cat.count}`);
    }
    const total = llms.match(new RegExp(`## ${kind[0].toUpperCase()}${kind.slice(1)} by category \\((\\d+)\\)`));
    if (!total || +total[1] !== data.total) errors.push(`${kind} total says ${total?.[1]}, data says ${data.total}`);
  }
  const skills = JSON.parse(readFileSync(`${pub}/data/skills.json`, 'utf8')).total;
  for (const [, n] of llms.matchAll(/(\d+) (?:open )?go-to-market skills/g)) if (+n !== skills) errors.push(`skills count says ${n}, data says ${skills}`);
  if (errors.length) fail(`llms.txt counts drifted from public/data:\n${errors.join('\n')}`);
  console.log('llms.txt counts match public/data.');
}

if (process.argv[2] === '--check') { checkLlms(); process.exit(0); }

const DEPLOYED = '096d2d59c'; // live API commit, 2026-10-30 (from the orchestrator)
const REF = process.env.SKILLS_REF || DEPLOYED;
const lab = resolve(root, process.argv[2] ?? '../capabilities-lab');
const show = (path) => execFileSync('git', ['-C', lab, 'show', `${REF}:${path}`], { encoding: 'utf8', maxBuffer: 64 << 20 });
const sha = execFileSync('git', ['-C', lab, 'rev-parse', '--short', REF], { encoding: 'utf8' }).trim();

const catDir = 'docs/skills/categories';
const cats = execFileSync('git', ['-C', lab, 'ls-tree', '--name-only', `${REF}:${catDir}`], { encoding: 'utf8' })
  .split('\n').filter((n) => n && !n.includes('.'));
const files = [
  ['docs/skills/pramaan-capabilities/SKILL.md', 'skill.md'],
  ...cats.map((c) => [`${catDir}/${c}/SKILL.md`, `skills/${c}/skill.md`]),
  [`${catDir}/README.md`, 'skills/index.md'],
];

// The index must link every category skill and nothing else.
const indexLinks = new Set([...show(`${catDir}/README.md`).matchAll(/https:\/\/www\.pramaan\.dev\/skills\/([a-z-]+)\/skill\.md/g)].map((m) => m[1]));
if ([...indexLinks].sort().join() !== [...cats].sort().join()) fail(`index lists ${[...indexLinks]} but categories are ${cats}`);

for (const [src, dest] of files) {
  let text = show(src);
  for (const [file, from, to] of FIXES) {
    if (file !== dest) continue;
    if (!text.includes(from)) fail(`fix for ${dest} no longer matches; check the source and drop or update it:\n${from}`);
    text = text.replaceAll(from, to);
  }
  let dropped = 0;
  text = text.split('\n').filter((line) => {
    if (!isHidden(line)) return true;
    // Only whole table rows or list items can go without breaking the text around them.
    if (!/^\s*(\||[-*] )/.test(line)) fail(`${src}: hidden mission or background-check wording in running text, fix it at the source:\n${line}`);
    dropped++;
    return false;
  }).join('\n');
  if (text.split('\n').some(isHidden)) fail(`${dest}: hidden wording remains after filtering`);
  mkdirSync(dirname(`${pub}/${dest}`), { recursive: true });
  writeFileSync(`${pub}/${dest}`, text);
  console.log(`${dest}: ${text.length} bytes${dropped ? `, ${dropped} hidden lines dropped` : ''}`);
}
console.log(`Synced ${files.length} files from capabilities-lab ${sha}${REF === DEPLOYED ? ' (the deployed API commit)' : ''}.`);
checkLlms();
