# Pramaan — landing page

Static landing page for Pramaan (HTML + CSS + vanilla JS, no build step), styled with the Monad design system: parchment canvas, serif display type, mono UI, hairline borders, pill buttons.

## Pages

| File | Audience | What it is |
|---|---|---|
| `simple.html` | Non-technical | Plain-language page. Each section has an animated mockup or a rendered video. Footer: `<halftone-footer>`. |
| `simple2.html` | Non-technical | Same page, closing section + footer replaced by `<ticket-stub-footer>`. |
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

### `<ticket-stub-footer>`

Closing section + footer: numbered section index (follows your scroll), typewriter eyebrow, serif headline, pill CTA, a turning globe you can drag, link columns, and a periwinkle ticket with a punchable stub, a live status, a rolling odometer, a self-decoding blurb and a serif wordmark whose foot dissolves into halftone (pointer lens + click ripple). Adapted from the "Ticket Stub Footer" React reference; colours and fonts come from the design tokens. Used on `simple2.html`.

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
