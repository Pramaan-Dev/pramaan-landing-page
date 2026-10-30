// The UI builder's dropdown, without its font search: each <select> becomes a trigger button and a popover menu.
// The select stays (hidden) and fires change, so the filter code doesn't know the difference.
// Used by ui-inspiration.js; styles in catalogue.css (.ddt, .ddm, .ddi).
const ICON = d => `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
const CHEVRON = ICON('m6 9 6 6 6-6'), CHECK = ICON('M20 6 9 17l-5-5');
function dress(root){
  for (const sel of root.querySelectorAll('select:not([hidden])')){
    sel.hidden = true;
    const name = sel.getAttribute('aria-label') || '', cur = sel.selectedOptions[0]?.textContent || '';
    const t = Object.assign(document.createElement('button'), {type:'button', className:`ddt${sel.classList.contains('set') ? ' set' : ''}`});
    const m = Object.assign(document.createElement('div'), {className:'ddm', popover:'auto'});
    t.setAttribute('aria-haspopup', 'listbox'); t.setAttribute('aria-expanded', 'false'); t.setAttribute('aria-label', cur.startsWith(name) ? cur : `${name}: ${cur}`);
    t.innerHTML = `<span></span>${CHEVRON}`; t.firstChild.textContent = cur.startsWith(name) ? cur : `${name}: ${cur}`;   // "Runs on: Email (40)", not just "Email (40)"
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
