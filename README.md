# Pramaan — landing page

Static landing page for Pramaan (HTML + CSS + vanilla JS, no build step), styled with the Monad design system: parchment canvas, serif display type, mono UI, hairline borders, pill buttons.

## Pages

| File | Audience | What it is |
|---|---|---|
| `simple.html` | Non-technical | Plain-language page. Each section has an animated mockup or a rendered video. Footer: `<halftone-footer>`. |
| `index.html` | Non-technical | **Final landing page (home).** Formerly `simple2.html`. Same page; the closing section + footer is `<ticket-stub-footer>` with the coloured ticket removed (`ticket-surface="plain"`), the "pramaan" wordmark drawn as the all-dots halftone word from `simple.html` (`wordmark-style="dots"`), and the Founding Member badge with a `Get badge` CTA to `badge.html?tier=founding`. |
| `badge.html` | Community | Mint a badge (founding member, contributor, provider partner, early tester): live editor, `<lanyard-badge>`, PNG download, share link. |
| `developers.html` | Developers | Capabilities, providers, SDK / MCP / HTTP, pricing math. |
| `superpowers.html` | Everyone | Every superpower (capability), one card per family, grouped into 18 categories with search and a Featured row. A card opens a side panel listing that family's superpowers. `#<Family>` in the URL opens it directly. |
| `missions.html` | Everyone | Every mission (outcome), one card each, same categories. The side panel shows the price cap, approvals and the superpowers it runs, in order. `#<mission.id>` opens it directly. |
| `legal/*.html` | Everyone | Terms, privacy, acceptable use, messaging, refunds, subprocessors, cookies, security. Drafts for legal review, marked "Not in force" and `noindex`. |

The two catalogue pages share `catalogue.css` and `catalogue.js` and load `data/superpowers.json` and `data/missions.json`. Rebuild those after the lists change in capabilities-lab: `node scripts/build-catalogue.mjs` (expects `../capabilities-lab`; pass another path as the first argument). Categories and families live in `data/sorting.json`, sorted by hand per id; the build stops on any id that is not in it, so new ids must be sorted there first.

The legal pages are generated from `docs/legal/*.md` in capabilities-lab: `node scripts/build-legal.mjs ../capabilities-lab/docs/legal`. Reviewer notes (quote blocks) are dropped, and placeholders in square brackets are highlighted. Edit the Markdown there, not the HTML here.

Shared: `styles.css` (design tokens at the top in `:root`), `script.js` (scroll reveal, copy button, mobile nav, catalogue filter, FAQ, rotating example), `favicon.svg`.

## Components

Reusable, dependency-free web components live in `components/` (one `.js` + one `.css` each). Include both files on any page, then use the tag.

### `<halftone-footer>`

Site footer with a giant wordmark printed as halftone dots, cropped by the bottom edge. Dots part around the pointer and warm in colour; a click sends a shock ring through the word. Structure and animation are adapted from the "Halftone Wordmark Footer" React reference; colours and fonts come from the design tokens.

```html
<link rel="stylesheet" href="components/halftone-footer.css" />
<script src="components/halftone-footer.js" defer></script>

<halftone-footer wordmark="pramaan" label="Pramaan" meta="Say what you need. Keep the proof.">
  <nav data-title="Product"><a href="#how">How it works</a><a href="#pricing">Pricing</a></nav>
  <nav data-title="Help"><a href="#faq">FAQ</a></nav>
  <p data-legal>&copy; 2026 Pramaan &middot; <a href="#">Privacy</a></p>
</halftone-footer>
```

- **Columns:** one `<nav data-title>` per column, with real links inside. Without JS they still render as a plain footer.
- **Attributes:** `wordmark`, `label`, `meta`, `back-to-top="false"`, `dot-gap`, `radius`, `crop`, `grain`, `interactive="false"`.
- **Theming:** CSS custom properties `--hwf-bg`, `--hwf-ink`, `--hwf-warm`, `--hwf-font`, `--hwf-weight`, `--hwf-height` (`auto` by default).
- Respects `prefers-reduced-motion`, sleeps when idle or off-screen.

### `<ticket-stub-footer>`

Closing section + footer: numbered section index (follows your scroll), typewriter eyebrow, serif headline, pill CTA, a turning globe you can drag, link columns, and a periwinkle ticket with a punchable stub, a live status, a rolling odometer, a self-decoding blurb and a serif wordmark whose foot dissolves into halftone (pointer lens + click ripple). Adapted from the "Ticket Stub Footer" React reference; colours and fonts come from the design tokens. Used on `index.html`.

```html
<link rel="stylesheet" href="components/ticket-stub-footer.css" />
<script src="components/ticket-stub-footer.js" defer></script>

<ticket-stub-footer id="start" wordmark="pramaan" copyright="&copy; 2026 Pramaan">
  <nav data-slot="sections"><a href="#how">How it works</a><a href="#pricing">Pricing</a></nav>
  <p data-slot="eyebrow">First phrase|Second phrase</p>
  <h2 data-slot="headline">Line one<br>Line two</h2>
  <p data-slot="description">Short line.</p>
  <a data-slot="cta" href="#start">Get early access</a>
  <nav data-slot="links" data-title="Product"><a href="#how">How it works</a></nav>
  <span data-slot="status" data-caption="Early access">Open</span>
  <span data-slot="count" data-value="300">Things you can ask for</span>
  <p data-slot="blurb">Mono paragraph on the ticket.</p>
  <p data-slot="legal"><a href="#">Privacy</a><a href="#">Terms</a></p>
</ticket-stub-footer>
```

- Section links point at element ids on the page; the index highlights whichever section is in view.
- Theming: `--tsf-bg`, `--tsf-ink`, `--tsf-ticket`, `--tsf-deep`, `--tsf-accent`, `--tsf-cta`, `--tsf-serif`, `--tsf-mono`. `halftone="false"` prints the wordmark solid.
- Respects `prefers-reduced-motion`; animation only runs while on screen.
- `wordmark-style="dots"` (opt-in): the ticket's wordmark is printed entirely as halftone dots, like `<halftone-footer>`: dots part around the pointer and warm in colour, a press sends a shock ring through the word, the foot is cropped by the ticket edge. Optional `dot-gap` (px, default 6) and `dot-crop` (0–0.6, default 0.2). Colours: `--tsf-dot-ink` (default `--tsf-aink`), `--tsf-dot-warm` (default `--tsf-accent`). Without the attribute the default solid-serif wordmark with the halftone foot is unchanged.
- `data-slot="badge"` (optional): a hanging badge and its CTA, e.g. `<div data-slot="badge"><lanyard-badge heading="Founding Member" card-width="168" flip-button="false" …></lanyard-badge><a class="btn btn--ghost" href="badge.html?tier=founding">Get badge …</a></div>`. Wide: the strap comes down from the footer's top edge on the right, the card hangs beside the link columns (which tighten to make room). Mid widths: a band of its own above the ticket. Stacked: right after the headline block. Stage height: `--tsf-badge-stage` (480px wide / 440px mid / 420px stacked).
- Respects `prefers-reduced-motion`; animation only runs while on screen.
- `ticket-surface="plain"` (opt-in): no coloured ticket. The ticket row keeps its layout, hairlines, stub hatch and text but sits directly on the footer surface. Without the attribute the periwinkle ticket is unchanged.

### `<lanyard-badge>`

A badge hanging from a printed lanyard (verlet-rope strap, side-release buckle, split ring). Drag to swing, flick to spin, tap or press Enter to flip. Both faces are drawn on canvas from the badge details, so the PNG export matches the screen exactly. Adapted from the "Lanyard Badge" React reference; colours and fonts come from the design tokens. Used on `badge.html` and in the footer of `index.html`.

```html
<link rel="stylesheet" href="components/lanyard-badge.css" />
<script src="components/lanyard-badge.js" defer></script>

<lanyard-badge heading="Founding Member" name="Asha Rao" role="Product"
               number="7" year="2026" wash="gold,coral" ink="gold" ornament="seal"></lanyard-badge>
```

- **Attributes (live):** `heading`, `name`, `role`, `number`, `year`, `strap-text`, `strap-label`, `wash` (palette token names), `ink` (strap print token), `ornament` (`seal` = halftone Pramaan mark, `mandala` = line-art mandala), `card-width`, `flip-button="false"`.
- **Methods:** `flip()`, `badgeId()`, `toBlob(face, scale)`, `download(face, filename)`. **Event:** `badgeflip`.
- **Badge ID** (`PRM-XXXX-XXXX`) is a checksum of tier, name, number and year. Anyone can recompute it; it is not stored or signed.
- Stage height: `--lyd-height` (default 640px).

## Run locally

```bash
npx serve .        # or: python3 -m http.server 8000
```

Open `/` (home), `/simple.html` or `/developers.html`. Any static host works (e.g. `vercel --prod` from this folder).

## Videos

All videos are built with [HyperFrames](https://github.com/heygen-com/hyperframes) (HTML → MP4). Rendered files used by the page live in `media/`; the editable source projects live in `video/`.

| Video | Length | Used in | Source project |
|---|---|---|---|
| `media/watch-it-work-v2.*` | 51.5 s | `simple.html` — "Watch it work" | `video/watch-it-work-v2` |
| `media/clip-research.*` | 10 s | "Ask in plain words" card | `video/clip-research` |
| `media/clip-approval.*` | 10 s | "Nothing happens without your OK" card | `video/clip-approval` |
| `media/clip-more.*` | 18 s | "What you can do" band (coming-soon ideas) | `video/clip-more` |
| `media/watch-it-work.*` | 12 s | Not used (first version, kept for reference) | `video/watch-it-work` |

Each video ships as `.webm` (VP9), `.mp4` (H.264, faststart) and a `.jpg` poster. Each project has a `BRIEF.md`, `index.html` and a full-quality master in `renders/`.

Edit and re-render a video:

```bash
cd video/clip-research
npx hyperframes preview     # opens the Studio editor in the browser
npx hyperframes check
npx hyperframes render
```

Then re-encode into `media/` (settings used: MP4 `libx264 -preset slow -crf 20–26 -pix_fmt yuv420p -movflags +faststart -an`; WebM `libvpx-vp9 -crf 33–40 -b:v 0`; poster = frame 0).

## Notes

- Costs and times shown in videos are examples (marked "e.g.").
- Items marked "Coming soon" are not live yet.
- Fonts: Newsreader and JetBrains Mono (Google Fonts) stand in for Untitled Serif and ABC Diatype Mono.
