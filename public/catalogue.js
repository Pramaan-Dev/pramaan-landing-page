// Superpowers, missions and skills pages. <body data-kind="superpowers" | "missions" | "skills"> picks the data file.
// Cards are grouped by category; the sidebar filters, the search box narrows, a card opens the panel.
// The cards are already in the HTML (scripts/prerender-catalogue.mjs); this adds search and the panel.

import { toCards, groupsHtml, sideHtml } from './catalogue-render.js';

const kind = document.body.dataset.kind;
const data = await fetch(`data/${kind}.json`).then((r) => {
  if (!r.ok) throw new Error(`data/${kind}.json did not load (HTTP ${r.status}).`);
  return r.json();
});

const cards = toCards(kind, data);
const byKey = new Map(cards.map((c) => [c.key, c]));

// Only draw the cards if the page was served without them.
const groupsEl = document.querySelector('[data-groups]');
if (!groupsEl.children.length) groupsEl.innerHTML = groupsHtml(data, cards);
const side = document.querySelector('[data-cats]');
if (!side.children.length) side.innerHTML = sideHtml(data);

// ---------- Filter and search ----------

const groups = [...document.querySelectorAll('.cat-group')];
const search = document.querySelector('[data-search]');
// Phones get the short placeholder; the long one with examples doesn't fit.
const phone = matchMedia('(max-width: 600px)');
const fullHint = search.placeholder;
const setHint = () => (search.placeholder = phone.matches ? search.dataset.short : fullHint);
setHint();
phone.addEventListener('change', setHint);
let category = 'All';

function apply() {
  const words = search.value.toLowerCase().split(/\s+/).filter(Boolean);
  let shown = 0;
  for (const g of groups) {
    const isFeatured = g.dataset.group === 'Featured';
    if (isFeatured) {
      g.hidden = category !== 'All' || words.length > 0;
      continue;
    }
    let visible = 0;
    if (category === 'All' || g.dataset.group === category) {
      for (const el of g.querySelectorAll('.card')) {
        const hit = words.every((w) => byKey.get(el.dataset.key).search.includes(w));
        el.hidden = !hit;
        visible += hit;
      }
    }
    g.hidden = visible === 0;
    shown += visible;
  }
  document.querySelector('[data-empty]').hidden = shown > 0;
}

side.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-cat]');
  if (!btn) return;
  category = btn.dataset.cat;
  side.querySelectorAll('[data-cat]').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
  apply();
  document.querySelector('.cat-layout').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
search.addEventListener('input', apply);

// ---------- Side panel ----------

const panel = document.querySelector('[data-panel]');
const scrim = document.querySelector('[data-scrim]');
const body = panel.querySelector('[data-panel-body]');
let opener = null;

function open(key, from) {
  const c = byKey.get(key);
  if (!c) return;
  opener = from ?? null;
  body.innerHTML = c.panel();
  panel.hidden = scrim.hidden = false;
  requestAnimationFrame(() => {
    panel.classList.add('is-open');
    scrim.classList.add('is-open');
  });
  panel.scrollTop = 0;
  document.body.classList.add('panel-open');
  history.replaceState(null, '', `#${encodeURIComponent(key)}`);
  panel.querySelector('[data-close]').focus();
}

function close() {
  if (panel.hidden) return;
  panel.classList.remove('is-open');
  scrim.classList.remove('is-open');
  document.body.classList.remove('panel-open');
  history.replaceState(null, '', location.pathname + location.search);
  setTimeout(() => (panel.hidden = scrim.hidden = true), 300);
  opener?.focus();
}

document.querySelector('[data-groups]').addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  if (card) open(card.dataset.key, card);
});
panel.querySelector('[data-close]').addEventListener('click', close);
scrim.addEventListener('click', close);
document.addEventListener('keydown', (e) => e.key === 'Escape' && close());
panel.addEventListener('click', async (e) => {
  const btn = e.target.closest('[data-copy-id]');
  if (!btn) return;
  const label = btn.dataset.label ?? (btn.dataset.label = btn.textContent);
  try {
    await navigator.clipboard.writeText(btn.dataset.copyId);
    btn.textContent = 'Copied';
  } catch {
    btn.textContent = 'Press ⌘C';
  }
  setTimeout(() => (btn.textContent = label), 1600);
});

// Opening a link like superpowers.html#TikTok shows that card's panel.
if (location.hash) open(decodeURIComponent(location.hash.slice(1)));
