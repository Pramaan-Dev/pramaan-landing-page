// HTML for the superpowers and missions pages. Shared by catalogue.js (browser) and
// scripts/prerender-catalogue.mjs, which writes the same markup into the HTML so agents and
// crawlers that don't run JavaScript still see every card.

export const esc = (s) => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
export const num = (n) => n.toLocaleString('en-US');
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

// Docs page for a superpower: Mintlify slugs the family (tag) and the id (operation).
const docsUrl = (family, id) =>
  `https://docs.pramaan.dev/superpowers/${family.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-')}/${id.toLowerCase().replace(/[^a-z0-9-]/g, '')}`;

// Docs page for a mission: the category slug keeps its "&" ("crypto-&-defi"); the id loses its dots.
export const missionDocsUrl = (m) =>
  `https://docs.pramaan.dev/missions/${m.category.toLowerCase().replace(/\s+/g, '-')}/${m.id.replace(/\./g, '')}`;

// One shape for both pages: { key, name, category, summary, foot, search, panel() }
export const toCards = (kind, data) =>
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
              (i) => `<li id="${esc(i.id)}"><code>${esc(i.id)}</code><p>${esc(i.description)}</p><div class="panel__facts">${pills(i)}</div><a class="panel__docs" href="${docsUrl(f.name, i.id)}" target="_blank" rel="noopener">API docs &rarr;</a></li>`
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
          <a class="panel__docs" href="${esc(missionDocsUrl(m))}" target="_blank" rel="noopener">API docs &rarr;</a>
          <div>
            <span class="eyebrow">The superpowers it uses, in order</span>
            <ol class="panel__list panel__steps">${m.steps
              .map((s) => `<li><code>${esc(s.id)}</code>${s.description ? `<p>${esc(s.description)}</p>` : ''}</li>`)
              .join('')}</ol>
          </div>`,
      }));

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

export const groupsHtml = (data, cards) => {
  const byKey = new Map(cards.map((c) => [c.key, c]));
  const featured = data.featured.map((k) => byKey.get(k)).filter(Boolean);
  return (
    (featured.length ? groupHtml('Featured', 'Featured', 'Where most people start.', featured) : '') +
    data.categories
      .filter((cat) => cat.count)
      .map((cat) => groupHtml(cat.name, cat.name, cat.blurb, cards.filter((c) => c.category === cat.name)))
      .join('') +
    '<p class="cat-empty" hidden data-empty>Nothing matches. Try fewer words, or pick All.</p>'
  );
};

export const sideHtml = (data) =>
  [{ name: 'All', count: data.total }, ...data.categories.filter((c) => c.count)]
    .map(
      (c) =>
        `<li><button type="button" data-cat="${esc(c.name)}" aria-pressed="${c.name === 'All'}"><span>${esc(c.name)}</span><span>${num(c.count)}</span></button></li>`
    )
    .join('');
