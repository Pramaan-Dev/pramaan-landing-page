// Superpowers and missions pages. <body data-kind="superpowers" | "missions"> picks the data file.
// Cards are grouped by category; the sidebar filters, the search box narrows, a card opens the panel.

const kind = document.body.dataset.kind;
const data = await fetch(`data/${kind}.json`).then((r) => {
  if (!r.ok) throw new Error(`data/${kind}.json did not load (HTTP ${r.status}).`);
  return r.json();
});

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
const num = (n) => n.toLocaleString('en-US');
const usd = (micro) => {
  const v = micro / 1e6;
  return '$' + (v >= 1 ? v.toFixed(2) : String(+v.toPrecision(2)));
};
const EFFECT = {
  read_only: 'Read-only',
  external_reversible: 'Acts outside, can be undone',
  external_irreversible: "Acts outside, can't be undone",
  external_unknown_effect: 'Acts outside',
};
const pills = (x) =>
  [
    x.mode === 'async' ? 'Background job' : 'Instant',
    EFFECT[x.effect],
    x.requiresApproval && ['Waits for your OK', 'warn'],
    x.needsConnection && 'Uses your account',
    x.personalData && 'Personal data',
  ]
    .filter(Boolean)
    .map((p) => (Array.isArray(p) ? `<span class="pill pill--${p[1]}">${p[0]}</span>` : `<span class="pill">${p}</span>`))
    .join('');

// One shape for both pages: { key, name, category, summary, foot, search, panel() }
const cards =
  kind === 'superpowers'
    ? data.families.map((f) => ({
        key: f.name,
        name: f.name,
        category: f.category,
        summary: f.summary,
        foot: `<span class="pill pill--dark">${num(f.items.length)} superpower${f.items.length === 1 ? '' : 's'}</span>`,
        search: [f.name, f.summary, ...f.items.map((i) => `${i.id} ${i.description}`)].join(' ').toLowerCase(),
        panel: () => `
          <span class="eyebrow">${esc(f.category)}</span>
          <h2>${esc(f.name)}</h2>
          <p class="panel__lead">${esc(f.summary)}</p>
          <p class="caption">${num(f.items.length)} superpower${f.items.length === 1 ? '' : 's'}</p>
          <ul class="panel__list">${f.items
            .map(
              (i) => `<li id="${esc(i.id)}"><code>${esc(i.id)}</code><p>${esc(i.description)}</p><div class="panel__facts">${pills(i)}</div></li>`
            )
            .join('')}</ul>`,
      }))
    : data.missions.map((m) => ({
        key: m.id,
        name: m.name,
        category: m.category,
        summary: m.description,
        foot: [m.priceMaxMicro > 0 && `<span class="pill pill--dark">Up to ${usd(m.priceMaxMicro)}</span>`, m.requiresApproval && '<span class="pill pill--warn">Waits for your OK</span>']
          .filter(Boolean)
          .join(''),
        search: [m.id, m.name, m.description, ...m.steps.map((s) => s.id)].join(' ').toLowerCase(),
        panel: () => `
          <span class="eyebrow">${esc(m.category)}</span>
          <h2>${esc(m.name)}</h2>
          <p class="panel__lead">${esc(m.description)}</p>
          <div class="panel__facts">${m.priceMaxMicro > 0 ? `<span class="pill pill--dark">Up to ${usd(m.priceMaxMicro)} a run</span>` : ''}${pills(m)}</div>
          <div class="panel__id"><code>${esc(m.id)}</code><button type="button" data-copy-id="${esc(m.id)}">Copy id</button></div>
          <div>
            <span class="eyebrow">The superpowers it uses, in order</span>
            <ol class="panel__list panel__steps">${m.steps
              .map((s) => `<li><code>${esc(s.id)}</code>${s.description ? `<p>${esc(s.description)}</p>` : ''}</li>`)
              .join('')}</ol>
          </div>`,
      }));
const byKey = new Map(cards.map((c) => [c.key, c]));

// ---------- Render ----------

const cardHtml = (c) => `
  <button type="button" class="card" data-key="${esc(c.key)}">
    <span class="card__name">${esc(c.name)}</span>
    <span class="card__summary">${esc(c.summary)}</span>
    <span class="card__foot">${c.foot}</span>
  </button>`;

const groupHtml = (id, title, blurb, list) => `
  <section class="cat-group" data-group="${esc(id)}">
    <div class="cat-group__head"><h2>${esc(title)}</h2>${blurb ? `<p>${esc(blurb)}</p>` : ''}</div>
    <div class="cards">${list.map(cardHtml).join('')}</div>
  </section>`;

const featured = data.featured.map((k) => byKey.get(k)).filter(Boolean);
document.querySelector('[data-groups]').innerHTML =
  (featured.length ? groupHtml('Featured', 'Featured', 'Where most people start.', featured) : '') +
  data.categories
    .filter((cat) => cat.count)
    .map((cat) => groupHtml(cat.name, cat.name, cat.blurb, cards.filter((c) => c.category === cat.name)))
    .join('') +
  '<p class="cat-empty" hidden data-empty>Nothing matches. Try fewer words, or pick All.</p>';

const side = document.querySelector('[data-cats]');
side.innerHTML = [{ name: 'All', count: data.total }, ...data.categories.filter((c) => c.count)]
  .map(
    (c) =>
      `<li><button type="button" data-cat="${esc(c.name)}" aria-pressed="${c.name === 'All'}"><span>${esc(c.name)}</span><span>${num(c.count)}</span></button></li>`
  )
  .join('');

// ---------- Filter and search ----------

const groups = [...document.querySelectorAll('.cat-group')];
const search = document.querySelector('[data-search]');
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
  try {
    await navigator.clipboard.writeText(btn.dataset.copyId);
    btn.textContent = 'Copied';
  } catch {
    btn.textContent = 'Press ⌘C';
  }
  setTimeout(() => (btn.textContent = 'Copy id'), 1600);
});

// Opening a link like superpowers.html#TikTok shows that card's panel.
if (location.hash) open(decodeURIComponent(location.hash.slice(1)));
