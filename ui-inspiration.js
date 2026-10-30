// UI inspiration: browse the design library (window.DESIGNS from the designs host) and open one in the UI builder.
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
const list = window.DESIGNS || [];
const G = {q:'', th:'all', i:'', c:'', r:'', n:48};
const FILTERS = [['i', 'Industry', v => v[0].toUpperCase() + v.slice(1)], ['c', 'Colour', v => v === 'neutral' ? 'Black and white' : v[0].toUpperCase() + v.slice(1)],
  ['r', 'Corners', v => ({sharp:'Sharp', soft:'Soft', round:'Round', pill:'Pill'})[v] || v]];
// Same matching as the builder's design browser: every word must appear; name hits rank above labels, above description
const labelsOf = d => `${d.i} ${d.th} ${d.c === 'neutral' ? 'black white monochrome neutral' : d.c} ${({sharp:'sharp square', soft:'soft', round:'round rounded', pill:'pill rounded'})[d.r] || ''}`;
const score = (d, words) => { let s = 0; const name = `${d.t} ${d.d}`.toLowerCase(), lab = labelsOf(d).toLowerCase(), rest = `${d.ns} ${d.fo} ${d.k} ${d.x}`.toLowerCase();
  for (const w of words) { if (name.includes(w)) s += 8; else if (lab.split(' ').includes(w)) s += 4; else if (rest.includes(w)) s += 1; else return 0; } return s || 1; };
const pass = (d, skip) => (G.th === 'all' || d.th === G.th) && FILTERS.every(([k]) => k === skip || !G[k] || d[k] === G[k]);

// A fresh order each visit so people see different designs first
const order = list.slice();
for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }

function draw(){
  if (!list.length) { $('[data-grid]').innerHTML = '<p>The design library could not load. Refresh the page to try again.</p>'; return; }
  const words = G.q.toLowerCase().split(/\s+/).filter(Boolean);
  let hits = order.filter(d => pass(d)).map(d => [score(d, words), d]).filter(([s]) => s > 0);
  if (words.length) hits.sort((a, b) => b[0] - a[0]);
  hits = hits.map(([, d]) => d);
  $('[data-bar]').innerHTML = ['all', 'light', 'dark'].map(v => `<button type="button" data-th="${v}" aria-pressed="${G.th === v}">${v[0].toUpperCase() + v.slice(1)}</button>`).join('')
    + FILTERS.map(([k, label, nice]) => { const n = {};
      for (const d of order) if (d[k] && pass(d, k) && (!words.length || score(d, words))) n[d[k]] = (n[d[k]] || 0) + 1;
      return `<select data-f="${k}" class="${G[k] ? 'set' : ''}" aria-label="${label}"><option value="">${label}: any</option>`
        + Object.keys(n).sort((a, b) => n[b] - n[a]).map(v => `<option value="${esc(v)}" ${G[k] === v ? 'selected' : ''}>${esc(nice(v))} (${n[v]})</option>`).join('') + '</select>'; }).join('')
    + `<span class="insp-count">${hits.length.toLocaleString()} of ${list.length.toLocaleString()} designs</span>`;
  dress($('[data-bar]'));
  $('[data-grid]').innerHTML = hits.slice(0, G.n).map(d => `<article class="insp-card">
    <a class="insp-shot" href="${DB}${esc(d.s)}/${esc(d.f || d.img)}" target="_blank" rel="noopener" aria-label="Full page of ${esc(d.d || d.t)}"><img loading="lazy" alt="" src="${DB}${esc(d.s)}/${esc(d.img)}"></a>
    <div class="insp-body"><b>${esc(d.d || d.t)}</b><small>${esc([d.th, d.i, d.fo].filter(Boolean).join(' · '))}</small>
      <p>${esc(d.ns)}</p>
      ${d.sw && d.sw.length ? `<span class="insp-sw">${d.sw.slice(0, 6).map(c => `<i title="${esc(c)}" style="background:${esc(c)}"></i>`).join('')}</span>` : ''}
      <a class="btn btn--black insp-go" href="ui-builder?design=${encodeURIComponent(d.s)}">Open in UI builder &rarr;</a></div></article>`).join('')
    || '<p>No designs match. Try fewer words, or clear a filter.</p>';
  $('[data-more]').hidden = hits.length <= G.n;
}

$('[data-q]').oninput = e => { G.q = e.target.value; G.n = 48; draw(); };
$('[data-bar]').onclick = e => { const v = e.target.closest('[data-th]')?.dataset.th; if (v) { G.th = v; G.n = 48; draw(); } };
$('[data-bar]').onchange = e => { const k = e.target.dataset.f; if (k) { G[k] = e.target.value; G.n = 48; draw(); } };
$('[data-more]').onclick = () => { G.n += 48; draw(); };
// Phones get the short placeholder, as on the catalogue pages
const phone = matchMedia('(max-width: 600px)'), q = $('[data-q]'), fullHint = q.placeholder;
const setHint = () => (q.placeholder = phone.matches ? q.dataset.short : fullHint);
setHint(); phone.addEventListener('change', setHint);
draw();
