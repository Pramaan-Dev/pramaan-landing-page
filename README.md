# Pramaan — landing page

Static landing page for Pramaan (HTML + CSS + vanilla JS, no build step), styled with the Monad design system: parchment canvas, serif display type, mono UI, hairline borders, pill buttons.

## Pages

| File | Audience | What it is |
|---|---|---|
| `simple.html` | Non-technical | Plain-language page. Each section has an animated mockup or a rendered video. Footer: `<halftone-footer>`. |
| `simple2.html` | Non-technical | **Final landing page.** Closing section + footer is plain HTML in the page, styled like the `simple.html` footer: `<halftone-footer layout="static">` wrapping a real `<footer>` with the closing headline + CTA, the Founding Member `<lanyard-badge>` with a `Get badge` CTA to `badge.html?tier=founding`, link columns, early-access facts, legal row and the giant dotted "pramaan" wordmark. Reads as a plain footer without JS. |
| `badge.html` | Community | Mint a badge (founding member, contributor, provider partner, early tester): live editor, `<lanyard-badge>`, PNG download, share link. |
| `index.html` | Developers | Capabilities, providers, SDK / MCP / HTTP, pricing math. |

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

- **`layout="static"` (opt-in, used on `simple2.html`):** write the whole footer as HTML yourself; the script then leaves the markup alone and only paints the dotted wordmark behind it (so the content is server-delivered, and without JS it still lays out as the same footer). Structure:

```html
<halftone-footer id="start" layout="static" wordmark="pramaan">
  <footer class="hwf__inner">
    <div class="hwf__close">                       <!-- optional closing block -->
      <div class="hwf__close-copy"><h2 class="display display--md">…</h2><p class="lead">…</p><a class="btn btn--blue" href="#start">…</a></div>
      <div class="hwf__badge"><lanyard-badge …></lanyard-badge><a class="btn btn--ghost" href="badge.html?tier=founding">Get badge</a></div>
    </div>
    <div class="hwf__top" style="--hwf-cols: 3">
      <div class="hwf__brand"><strong>Pramaan</strong><p>…</p></div>
      <nav class="hwf__col" aria-labelledby="x"><h3 id="x">Product</h3><ul><li><a class="hwf__link" href="#how">…</a></li></ul></nav>
      <dl class="hwf__facts"><div><dt>Early access</dt><dd><span class="hwf__dot" aria-hidden="true"></span>Open</dd></div></dl>
    </div>
    <div class="hwf__rule"><p class="hwf__legal">&copy; 2026 Pramaan &middot; <a class="hwf__link" href="#">Privacy</a></p><a class="hwf__link hwf__up" href="#">Back to top &uarr;</a></div>
    <p class="hwf__fallback">pramaan</p>          <!-- plain large word without JS; screen-reader-only once the dots draw -->
  </footer>
</halftone-footer>
```

  The badge strap hangs from the footer's top edge beside the headline (stacked under it below 720px; stage height `--hwf-badge-stage`, 440px / 420px). Without JS the badge column shows only its link. Small captions use graphite (`--hwf-muted` is overridden for contrast). The script also re-fits the height when the content changes size (fonts, the badge upgrading). Without the attribute the component behaves exactly as before.

### `<ticket-stub-footer>`

Closing section + footer: numbered section index (follows your scroll), typewriter eyebrow, serif headline, pill CTA, a turning globe you can drag, link columns, and a periwinkle ticket with a punchable stub, a live status, a rolling odometer, a self-decoding blurb and a serif wordmark whose foot dissolves into halftone (pointer lens + click ripple). Adapted from the "Ticket Stub Footer" React reference; colours and fonts come from the design tokens. No longer used on `simple2.html` (kept for reuse).

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

### `<lanyard-badge>`

A badge hanging from a printed lanyard (verlet-rope strap, side-release buckle, split ring). Drag to swing, flick to spin, tap or press Enter to flip. Both faces are drawn on canvas from the badge details, so the PNG export matches the screen exactly. Adapted from the "Lanyard Badge" React reference; colours and fonts come from the design tokens. Used on `badge.html` and in the footer of `simple2.html`.

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

Open `/simple.html` or `/index.html`. Any static host works (e.g. `vercel --prod` from this folder).

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
