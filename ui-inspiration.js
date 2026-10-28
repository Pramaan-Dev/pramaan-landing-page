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

// The UI builder's dropdown, without its font search: each <select> becomes a trigger button and a popover menu.
// The select stays (hidden) and fires change, so the filter code doesn't know the difference.
const ICON = d => `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
const CHEVRON = ICON('m6 9 6 6 6-6'), CHECK = ICON('M20 6 9 17l-5-5');
function dress(root){
  for (const sel of root.querySelectorAll('select:not([hidden])')){
    sel.hidden = true;
    const name = sel.getAttribute('aria-label') || '', cur = sel.selectedOptions[0]?.textContent || '';
    const t = Object.assign(document.createElement('button'), {type:'button', className:`ddt${sel.classList.contains('set') ? ' set' : ''}`});
    const m = Object.assign(document.createElement('div'), {className:'ddm', popover:'auto'});
    t.setAttribute('aria-haspopup', 'listbox'); t.setAttribute('aria-expanded', 'false'); t.setAttribute('aria-label', cur.startsWith(name) ? cur : `${name}: ${cur}`);
    t.innerHTML = `<span></span>${CHEVRON}`; t.firstChild.textContent = cur;
    m.setAttribute('role', 'listbox'); m.setAttribute('aria-label', name);
    for (const o of sel.options){
      const b = Object.assign(document.createElement('button'), {type:'button', className:'ddi', innerHTML:`<span class="ddc">${o.selected ? CHECK : ''}</span><span></span>`});
      b.lastChild.textContent = o.textContent; b.dataset.v = o.value; b.setAttribute('role', 'option'); b.setAttribute('aria-selected', o.selected);
      m.append(b); if (o.value === '') m.append(Object.assign(document.createElement('div'), {className:'dds'}));   // "any" sits apart from the real values
    }
    t.popoverTargetElement = m;
    t.onkeydown = e => { if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); m.showPopover(); } };
    m.addEventListener('beforetoggle', e => { if (e.newState !== 'open') return;
      const r = t.getBoundingClientRect(), w = Math.max(160, r.width), want = Math.min(320, sel.options.length * 32 + 10), below = innerHeight - r.bottom - 12, up = below < want && r.top > below;
      Object.assign(m.style, {minWidth: w + 'px', left: Math.max(8, Math.min(r.left, innerWidth - w - 8)) + 'px', maxHeight: Math.min(320, up ? r.top - 12 : below) + 'px',
        top: up ? 'auto' : r.bottom + 4 + 'px', bottom: up ? innerHeight - r.top + 4 + 'px' : 'auto'}); });
    m.addEventListener('toggle', e => { const open = e.newState === 'open'; t.setAttribute('aria-expanded', open);
      if (open) (m.querySelector('[aria-selected="true"]') || m.firstChild).focus(); });
    m.addEventListener('click', e => { const b = e.target.closest('.ddi'); if (!b) return;
      m.hidePopover();
      if (sel.value !== b.dataset.v) { sel.value = b.dataset.v; sel.dispatchEvent(new Event('change', {bubbles:true})); }
      root.querySelector(`select[data-f="${sel.dataset.f}"]`)?.nextElementSibling?.focus(); });   // the redraw replaced the trigger
    m.addEventListener('keydown', e => {
      const items = [...m.querySelectorAll('.ddi')], i = items.indexOf(document.activeElement), n = items.length;
      const to = e.key === 'ArrowDown' ? items[(i + 1) % n] : e.key === 'ArrowUp' ? items[(i - 1 + n) % n] : e.key === 'Home' ? items[0] : e.key === 'End' ? items[n - 1]
        : e.key === 'Tab' ? (m.hidePopover(), t)
        : e.key.length === 1 && e.key !== ' ' ? items.slice(i + 1).concat(items).find(b => b.textContent.trim().toLowerCase().startsWith(e.key.toLowerCase())) : null;
      if (to) { e.preventDefault(); to.focus(); } });
    sel.after(t, m);
  }
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
