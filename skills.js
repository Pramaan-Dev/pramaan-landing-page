// Skills: browse GTM Skills (data/gtm-skills.json, built by scripts/gtm-skills.py) and how to run each one on Pramaan.
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
const SITE = 'https://www.pramaan.dev', REPO = 'https://github.com/swan-gtm/gtm-skills/tree/main/skills';
const G = {q:'', c:'', p:'', n:48};
const FILTERS = [['c', 'Category'], ['p', 'Runs on']];
const NICE = {'people-companies':'People & companies', 'web-search':'Web & search', 'email':'Email', 'texting-calls':'Texting & calls', 'social-media':'Social media',
  'ads-marketing':'Ads & marketing', 'payments-money':'Payments & money', 'documents-files':'Documents & files', 'media':'Media', 'ai-models':'AI models',
  'apps-connections':'Apps & connections', 'developer-tools':'Developer tools', 'identity-checks':'Identity & checks'};
const nice = (k, v) => k === 'p' ? NICE[v] || v : v;
const author = s => s.author.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
const val = (s, k) => k === 'c' ? [s.category] : s.pramaan;
const pass = (s, skip) => FILTERS.every(([k]) => k === skip || !G[k] || val(s, k).includes(G[k]));
// Every word must appear; title hits rank above category and author, above description
const score = (s, words) => { let n = 0; const t = `${s.title} ${s.name}`.toLowerCase(), lab = `${s.category} ${s.author}`.toLowerCase(), rest = `${s.description} ${s.ids.join(' ')}`.toLowerCase();
  for (const w of words) { if (t.includes(w)) n += 8; else if (lab.includes(w)) n += 4; else if (rest.includes(w)) n += 1; else return 0; } return n || 1; };
let list = [];

function draw(){
  const words = G.q.toLowerCase().split(/\s+/).filter(Boolean);
  let hits = list.filter(s => pass(s)).map(s => [score(s, words), s]).filter(([n]) => n > 0);
  if (words.length) hits.sort((a, b) => b[0] - a[0]);
  hits = hits.map(([, s]) => s);
  $('[data-bar]').innerHTML = FILTERS.map(([k, label]) => { const n = {};
      for (const s of list) if (pass(s, k) && (!words.length || score(s, words))) for (const v of val(s, k)) n[v] = (n[v] || 0) + 1;
      return `<select data-f="${k}" class="${G[k] ? 'set' : ''}" aria-label="${label}"><option value="">${label}: any</option>`
        + Object.keys(n).sort((a, b) => n[b] - n[a]).map(v => `<option value="${esc(v)}" ${G[k] === v ? 'selected' : ''}>${esc(nice(k, v))} (${n[v]})</option>`).join('') + '</select>'; }).join('')
    + `<span class="sk-count">${hits.length} of ${list.length} skills</span>`;
  dress($('[data-bar]'));
  $('[data-grid]').innerHTML = hits.slice(0, G.n).map(s => `<button type="button" class="sk-card" data-open="${esc(s.name)}">
    <b>${esc(s.title)}</b><small>${esc(s.category)} · by ${esc(author(s))}</small><p>${esc(s.description)}</p>
    <span class="sk-runs">${s.ids.length ? `Runs on ${s.ids.length} Pramaan ${s.ids.length === 1 ? 'superpower' : 'superpowers'}` : 'Thinking and writing only'}</span></button>`).join('')
    || '<p>No skills match. Try fewer words, or clear a filter.</p>';
  $('[data-more]').hidden = hits.length <= G.n;
}

function open(name){
  const s = list.find(x => x.name === name); if (!s) return;
  const install = `npx skills add swan-gtm/gtm-skills --skill ${s.name}`;
  const run = `Read ${SITE}/gtm-skills/${s.name}/pramaan.md and run the ${s.name} skill with Pramaan.`;
  const cmd = t => `<div class="sk-cmd"><code>${esc(t)}</code><button type="button" data-copy="${esc(t)}">Copy</button></div>`;
  const d = $('[data-dlg]');
  d.innerHTML = `<button type="button" class="sk-x" aria-label="Close" data-close>&times;</button>
    <h2 id="sk-title">${esc(s.title)}</h2><small>${esc(s.category)} · by <a href="${REPO}/${esc(s.author)}">${esc(author(s))}</a></small>
    <p>${esc(s.description)}</p>
    <h3>1. Add the skill to your agent</h3>${cmd(install)}
    <h3>2. Tell your agent to run it with Pramaan</h3>${cmd(run)}
    <p>Set up Pramaan once with <a href="skill.md">the agent skill</a>. Anything that sends, books or pays waits for your OK.</p>
    ${s.ids.length ? `<h3>Pramaan superpowers and missions it uses</h3><div class="sk-ids">${s.ids.map(i => `<code>${esc(i)}</code>`).join('')}</div>` : ''}
    ${s.approval?.length ? `<p>These wait for your yes before they run: ${s.approval.map(i => `<code>${esc(i)}</code>`).join(', ')}.</p>` : ''}
    <div class="sk-links"><a href="gtm-skills/${esc(s.name)}/pramaan.md">Step-by-step map (pramaan.md)</a><a href="${REPO}/${esc(s.author)}/${esc(s.name)}/SKILL.md">Full skill on GitHub</a></div>`;
  d.showModal();
  history.replaceState(null, '', `#${encodeURIComponent(name)}`);
}

$('[data-q]').oninput = e => { G.q = e.target.value; G.n = 48; draw(); };
$('[data-bar]').onchange = e => { const k = e.target.dataset.f; if (k) { G[k] = e.target.value; G.n = 48; draw(); } };
$('[data-more]').onclick = () => { G.n += 48; draw(); };
$('[data-grid]').onclick = e => { const b = e.target.closest('[data-open]'); if (b) open(b.dataset.open); };
$('[data-dlg]').onclick = async e => {
  if (e.target === e.currentTarget || e.target.closest('[data-close]')) return e.currentTarget.close();   // click on the backdrop or the x
  const b = e.target.closest('[data-copy]'); if (!b) return;
  try { await navigator.clipboard.writeText(b.dataset.copy); b.textContent = 'Copied'; } catch { b.textContent = 'Press ⌘C'; }
  setTimeout(() => (b.textContent = 'Copy'), 1600);
};
$('[data-dlg]').addEventListener('close', () => history.replaceState(null, '', location.pathname + location.search));
// Phones get the short placeholder, as on the catalogue pages
const phone = matchMedia('(max-width: 600px)'), q = $('[data-q]'), fullHint = q.placeholder;
const setHint = () => (q.placeholder = phone.matches ? q.dataset.short : fullHint);
setHint(); phone.addEventListener('change', setHint);

fetch('data/gtm-skills.json').then(r => r.json()).then(d => { list = d; draw(); if (location.hash) open(decodeURIComponent(location.hash.slice(1))); })
  .catch(() => { $('[data-grid]').innerHTML = '<p>The skills could not load. Refresh the page to try again.</p>'; });
