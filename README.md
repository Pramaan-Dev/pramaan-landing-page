# Pramaan — landing page

Static landing page for Pramaan (HTML + CSS + vanilla JS, no build step), styled with the Monad design system: parchment canvas, serif display type, mono UI, hairline borders, pill buttons.

## Pages

| File | Audience | What it is |
|---|---|---|
| `simple.html` | Non-technical | Plain-language page. Each section has an animated mockup or a rendered video. |
| `index.html` | Developers | Capabilities, providers, SDK / MCP / HTTP, pricing math. |

Shared: `styles.css` (design tokens at the top in `:root`), `script.js` (scroll reveal, copy button, mobile nav, catalogue filter, FAQ, rotating example), `favicon.svg`.

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
