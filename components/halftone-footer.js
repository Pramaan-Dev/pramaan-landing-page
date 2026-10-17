/*
 * <halftone-footer> — reusable site footer component.
 *
 * The wordmark is set enormous, cropped by the bottom edge and printed as a
 * field of halftone dots (each dot sized by how much of the letter covers its
 * cell). Dots part around the pointer on springs and warm in colour as they are
 * pushed; a click sends a shock ring through the word. Above it: brand line,
 * link columns and a hairline with legal text + back-to-top, over fine grain.
 *
 * Structure/animation adapted from the "Halftone Wordmark Footer" React
 * reference, ported to a dependency-free custom element. Colours and fonts
 * come from the Pramaan design tokens via CSS custom properties (see
 * halftone-footer.css), not from built-in presets.
 *
 * Usage:
 *   <link rel="stylesheet" href="components/halftone-footer.css">
 *   <script src="components/halftone-footer.js" defer></script>
 *
 *   <halftone-footer wordmark="pramaan" label="Pramaan" meta="Say what you need.">
 *     <nav data-title="Product"><a href="#how">How it works</a> ...</nav>
 *     <nav data-title="Help"> ... </nav>
 *     <p data-legal>&copy; 2026 Pramaan &middot; <a href="#">Privacy</a></p>
 *   </halftone-footer>
 *
 * Attributes (all optional):
 *   wordmark      giant dotted word (default "pramaan")
 *   label, meta   brand line and the muted line under it
 *   back-to-top   "false" to hide the back-to-top button
 *   dot-gap       max distance between dot centres in px (default 6; scales down to 3 on narrow screens)
 *   radius        pointer push radius in px (default 80)
 *   crop          share of the word's full height (incl. descenders) hidden below
 *                 the edge, 0–0.6 (default 0.2 = 4/5 visible; 0.25 = 3/4 visible)
 *   grain         print grain 0–1 (default 0.5)
 *   interactive   "false" to disable pointer/click response
 *   layout        "static" (opt-in): the footer's markup is already written in
 *                 the page (a <footer> with .hwf__top / .hwf__rule etc., see
 *                 README), so the script does not touch it and only adds the
 *                 dotted wordmark canvas behind it. A .hwf__fallback element
 *                 (plain large word for no-JS) becomes screen-reader-only once
 *                 the canvas is drawing.
 *
 * Theming (CSS custom properties on the element):
 *   --hwf-bg, --hwf-ink, --hwf-warm, --hwf-font, --hwf-weight,
 *   --hwf-height ("auto" = fit links + visible word; or a fixed length like 560px)
 */
(() => {
  if (customElements.get("halftone-footer")) return;

  // ---- pure helpers -------------------------------------------------------

  /** "#rgb" / "#rrggbb" → [r, g, b], or null. */
  const hexToRgb = (hex) => {
    const m = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec((hex || "").trim());
    if (!m) return null;
    const h = m[1].length === 3 ? m[1].replace(/./g, (c) => c + c) : m[1];
    return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  };

  /** Dot radius for a cell coverage in [0, 1]; area-true so tone stays even. */
  const dotRadius = (coverage, gap) =>
    Math.sqrt(Math.min(1, Math.max(0, coverage))) * gap * 0.56;

  /** One spring step home, plus the push from a pointer at (px, py) within r. */
  const springStep = (x, y, vx, vy, hx, hy, px, py, r) => {
    const dx = x - px;
    const dy = y - py;
    const d2 = dx * dx + dy * dy;
    if (r > 0 && d2 < r * r) {
      const d = Math.sqrt(d2) + 0.001;
      const f = (1 - d / r) * 2.6;
      vx += (dx / d) * f;
      vy += (dy / d) * f;
    }
    vx = (vx + (hx - x) * 0.05) * 0.84;
    vy = (vy + (hy - y) * 0.05) * 0.84;
    return [x + vx, y + vy, vx, vy];
  };

  /** 0 at home, 1 once a dot is `span` px or more away. */
  const warmth = (x, y, hx, hy, span) =>
    span > 0 ? Math.min(1, Math.hypot(x - hx, y - hy) / span) : 0;

  /** Font size that makes a word measured at 100px fill `width`. */
  const fitSize = (measured, width) => (measured > 0 ? (width / measured) * 100 : 0);

  const num = (el, name, fallback) => {
    const v = parseFloat(el.getAttribute(name));
    return Number.isFinite(v) ? v : fallback;
  };

  // ---- element ------------------------------------------------------------

  class HalftoneFooter extends HTMLElement {
    connectedCallback() {
      if (!this._built) this._build();
      this._start();
    }

    disconnectedCallback() {
      if (this._stop) this._stop();
    }

    /** Turn the light-DOM <nav data-title> / [data-legal] children into the footer layout. */
    _build() {
      this._built = true;
      this._static = this.getAttribute("layout") === "static";

      // Static layout: server-delivered markup stays as written (its own
      // <footer> is the landmark); the script only adds the dots canvas.
      if (this._static) {
        const canvas = document.createElement("canvas");
        canvas.className = "hwf__canvas";
        canvas.setAttribute("aria-hidden", "true");
        this.prepend(canvas);
        this._canvas = canvas;
        return;
      }

      this.setAttribute("role", "contentinfo");

      const wordmark = this.getAttribute("wordmark") || "pramaan";
      const label = this.getAttribute("label") || "";
      const meta = this.getAttribute("meta") || "";
      const navs = [...this.querySelectorAll(":scope > nav[data-title]")];
      const legal = this.querySelector(":scope > [data-legal]");

      const canvas = document.createElement("canvas");
      canvas.className = "hwf__canvas";
      canvas.setAttribute("aria-hidden", "true");

      const sr = document.createElement("span");
      sr.className = "hwf__sr";
      sr.textContent = wordmark;

      const top = document.createElement("div");
      top.className = "hwf__top";
      top.style.setProperty("--hwf-cols", String(Math.max(1, navs.length)));

      const brand = document.createElement("div");
      brand.className = "hwf__brand";
      if (label) {
        const strong = document.createElement("strong");
        strong.textContent = label;
        brand.append(strong);
      }
      if (meta) {
        const span = document.createElement("span");
        span.textContent = meta;
        brand.append(span);
      }
      top.append(brand);

      for (const nav of navs) {
        nav.classList.add("hwf__col");
        nav.setAttribute("aria-label", nav.dataset.title);
        const h = document.createElement("h3");
        h.textContent = nav.dataset.title;
        const ul = document.createElement("ul");
        for (const a of [...nav.querySelectorAll("a")]) {
          a.classList.add("hwf__link");
          const li = document.createElement("li");
          li.append(a);
          ul.append(li);
        }
        nav.replaceChildren(h, ul);
        top.append(nav);
      }

      const rule = document.createElement("div");
      rule.className = "hwf__rule";
      const left = document.createElement("div");
      left.className = "hwf__legal";
      if (legal) {
        legal.querySelectorAll("a").forEach((a) => a.classList.add("hwf__link"));
        left.append(legal);
      }
      rule.append(left);
      if (this.getAttribute("back-to-top") !== "false") {
        const up = document.createElement("button");
        up.type = "button";
        up.className = "hwf__link hwf__up";
        up.textContent = "Back to top ↑";
        up.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
        rule.append(up);
      }

      this.replaceChildren(canvas, sr, top, rule);
      this._canvas = canvas;
    }

    /** Read tokens + attributes each layout so theme changes are picked up. */
    _options() {
      const cs = getComputedStyle(this);
      const prop = (n, f) => cs.getPropertyValue(n).trim() || f;
      return {
        wordmark: this.getAttribute("wordmark") || "pramaan",
        bg: prop("--hwf-bg", "#f6f3f1"),
        ink: prop("--hwf-ink", "#242424"),
        warm: prop("--hwf-warm", "#ff9473"),
        font: prop("--hwf-font", "Georgia, serif"),
        weight: prop("--hwf-weight", "400"),
        height: prop("--hwf-height", "auto"),
        gap: Math.max(3, num(this, "dot-gap", 6)),
        radius: Math.max(0, num(this, "radius", 80)),
        crop: Math.min(0.6, Math.max(0, num(this, "crop", 0.2))),
        grain: Math.min(1, Math.max(0, num(this, "grain", 0.5))),
        interactive: this.getAttribute("interactive") !== "false",
      };
    }

    _start() {
      if (this._stop) this._stop();
      const root = this;
      const canvas = this._canvas;
      const ctx = canvas && canvas.getContext("2d");
      if (!ctx) return;
      this.setAttribute("data-enhanced", "");

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let o = this._options();
      let ink = hexToRgb(o.ink) || [36, 36, 36];
      let warm = hexToRgb(o.warm) || [255, 148, 115];
      let w = 0, h = 0, dpr = 1;
      let px = -1e5, py = -1e5;
      let raf = 0, visible = true, awake = true;
      let ring = { x: 0, y: 0, t: -1 };
      let dots = new Float32Array(0); // x, y, vx, vy, hx, hy, r per dot
      let count = 0;
      let grainPattern = null;

      const layout = () => {
        o = this._options();
        ink = hexToRgb(o.ink) || ink;
        warm = hexToRgb(o.warm) || warm;
        const rect = root.getBoundingClientRect();
        w = Math.max(1, Math.round(rect.width));

        // Measure the word at the size that fills the width.
        const mask = document.createElement("canvas");
        const m = mask.getContext("2d", { willReadFrequently: true });
        if (!m) return;
        const word = o.wordmark || " ";
        m.font = `${o.weight} 100px ${o.font}`;
        const size = fitSize(m.measureText(word).width, w * 1.02);
        m.font = `${o.weight} ${size}px ${o.font}`;
        const probe = m.measureText(word);
        const asc = probe.actualBoundingBoxAscent || size * 0.72;
        const desc = probe.actualBoundingBoxDescent || 0;
        // Crop is a share of the word's full ink height (descenders included),
        // so crop 0.2 shows 4/5 of the word and 0.25 shows 3/4.
        const visible = (asc + desc) * (1 - o.crop);

        // Auto height: the links block, a breath of space, then the visible
        // part of the word. A fixed --hwf-height (e.g. 560px) skips this.
        if (o.height === "auto") {
          const rule = root.querySelector(".hwf__rule");
          const above = rule ? rule.getBoundingClientRect().bottom - rect.top : 0;
          const want = Math.round(above + Math.max(24, asc * 0.18) + visible + 2);
          if (Math.abs(want - rect.height) > 1) root.style.height = want + "px";
          h = want;
        } else {
          root.style.height = "";
          h = Math.max(1, Math.round(root.getBoundingClientRect().height));
        }

        dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        mask.width = w;
        mask.height = h;
        m.font = `${o.weight} ${size}px ${o.font}`;
        const box = m.measureText(word);
        m.fillStyle = "#000";
        m.textBaseline = "alphabetic";
        m.fillText(word, (w - box.width) / 2, h - visible + asc);
        const img = m.getImageData(0, 0, w, h).data;

        // Finer dots on narrow screens so a small word stays legible.
        const gap = Math.max(3, Math.min(o.gap, w / 130));
        const cols = Math.ceil(w / gap);
        const rows = Math.ceil(h / gap);
        const tmp = [];
        for (let gy = 0; gy < rows; gy++) {
          for (let gx = 0; gx < cols; gx++) {
            // Coverage: average alpha over a 3×3 sample of the cell.
            let sum = 0;
            for (let sy = 0; sy < 3; sy++) {
              for (let sx = 0; sx < 3; sx++) {
                const x = Math.min(w - 1, Math.floor(gx * gap + ((sx + 0.5) * gap) / 3));
                const y = Math.min(h - 1, Math.floor(gy * gap + ((sy + 0.5) * gap) / 3));
                sum += img[(y * w + x) * 4 + 3];
              }
            }
            const cov = sum / (9 * 255);
            if (cov < 0.06) continue;
            const hx = gx * gap + gap / 2;
            const hy = gy * gap + gap / 2;
            tmp.push(hx, hy, 0, 0, hx, hy, dotRadius(cov, gap));
          }
        }
        dots = new Float32Array(tmp);
        count = tmp.length / 7;

        // A fixed tile of print grain, laid over every frame.
        const tile = document.createElement("canvas");
        tile.width = tile.height = 256;
        const g = tile.getContext("2d");
        if (g) {
          const id = g.createImageData(256, 256);
          for (let i = 0; i < id.data.length; i += 4) {
            const v = Math.random() * 255;
            id.data[i] = id.data[i + 1] = id.data[i + 2] = v;
            id.data[i + 3] = Math.random() < 0.5 ? 0 : 255;
          }
          g.putImageData(id, 0, 0);
          grainPattern = ctx.createPattern(tile, "repeat");
        }
        awake = true;
      };

      const draw = (now) => {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.fillStyle = o.bg;
        ctx.fillRect(0, 0, w, h);

        const r = o.interactive && !reduced ? o.radius : 0;
        const ringAge = ring.t < 0 ? 1e9 : now - ring.t;
        const ringR = ringAge * 0.9;
        let moving = false;

        for (let i = 0; i < count; i++) {
          const j = i * 7;
          let x = dots[j], y = dots[j + 1], vx = dots[j + 2], vy = dots[j + 3];
          const hx = dots[j + 4], hy = dots[j + 5];
          if (!reduced) {
            if (ringAge < 900) {
              const dx = hx - ring.x;
              const dy = hy - ring.y;
              const d = Math.sqrt(dx * dx + dy * dy) + 0.001;
              const band = 1 - Math.min(1, Math.abs(d - ringR) / 26);
              if (band > 0) {
                const f = band * 3.2 * (1 - ringAge / 900);
                vx += (dx / d) * f;
                vy += (dy / d) * f;
              }
            }
            [x, y, vx, vy] = springStep(x, y, vx, vy, hx, hy, px, py, r);
            if (Math.abs(vx) + Math.abs(vy) > 0.02 || Math.abs(x - hx) + Math.abs(y - hy) > 0.05) {
              moving = true;
            } else {
              x = hx; y = hy; vx = 0; vy = 0;
            }
            dots[j] = x; dots[j + 1] = y; dots[j + 2] = vx; dots[j + 3] = vy;
          }
          const k = warmth(x, y, hx, hy, 28);
          ctx.fillStyle = k > 0.02
            ? `rgb(${Math.round(ink[0] + (warm[0] - ink[0]) * k)},${Math.round(ink[1] + (warm[1] - ink[1]) * k)},${Math.round(ink[2] + (warm[2] - ink[2]) * k)})`
            : o.ink;
          ctx.beginPath();
          ctx.arc(x, y, dots[j + 6], 0, Math.PI * 2);
          ctx.fill();
        }

        if (grainPattern && o.grain > 0) {
          ctx.globalAlpha = o.grain * 0.09;
          ctx.globalCompositeOperation = "overlay";
          ctx.fillStyle = grainPattern;
          ctx.fillRect(0, 0, w, h);
          ctx.globalAlpha = 1;
          ctx.globalCompositeOperation = "source-over";
        }
        // Sleep once everything is home and nothing is pushing.
        awake = moving || ringAge < 900 || px > -1e4;
      };

      const loop = (now) => {
        raf = 0;
        if (!visible) return;
        draw(now);
        if (awake) raf = requestAnimationFrame(loop);
      };
      const wake = () => {
        awake = true;
        if (!raf && visible) raf = requestAnimationFrame(loop);
      };

      const local = (e) => {
        const b = canvas.getBoundingClientRect();
        return [e.clientX - b.left, e.clientY - b.top];
      };
      const onMove = (e) => {
        if (!o.interactive) return;
        [px, py] = local(e);
        wake();
      };
      const onLeave = () => {
        px = py = -1e5;
        wake();
      };
      const onDown = (e) => {
        if (!o.interactive || reduced) return;
        if (e.target.closest("a,button,lanyard-badge")) return;
        const [x, y] = local(e);
        ring = { x, y, t: performance.now() };
        wake();
      };

      layout();
      draw(performance.now());
      wake();

      root.addEventListener("pointermove", onMove);
      root.addEventListener("pointerleave", onLeave);
      root.addEventListener("pointerdown", onDown);
      // Static layout: the page's own content can change height (web fonts,
      // a badge that upgrades late) while the root height is pinned, so it is
      // watched too, and the re-fit waits for the next frame (re-sizing the
      // root inside the observer callback would trip a ResizeObserver loop).
      let refit = 0;
      const ro = new ResizeObserver(this._static
        ? () => { if (!refit) refit = requestAnimationFrame(() => { refit = 0; layout(); wake(); }); }
        : () => { layout(); wake(); });
      ro.observe(root);
      if (this._static) {
        for (const el of root.children) if (el !== canvas) ro.observe(el);
      }
      const io = new IntersectionObserver((entries) => {
        visible = entries[0] ? entries[0].isIntersecting : true;
        if (visible) wake();
      });
      io.observe(root);

      // A web font that lands late re-sets the word in its real face.
      let alive = true;
      if (document.fonts) {
        document.fonts.load(`${o.weight} 100px ${o.font}`).catch(() => {}).then(() => document.fonts.ready).then(() => {
          if (!alive) return;
          layout();
          wake();
        });
      }

      this._stop = () => {
        alive = false;
        cancelAnimationFrame(raf);
        cancelAnimationFrame(refit);
        ro.disconnect();
        io.disconnect();
        root.removeEventListener("pointermove", onMove);
        root.removeEventListener("pointerleave", onLeave);
        root.removeEventListener("pointerdown", onDown);
        this._stop = null;
      };
    }
  }

  customElements.define("halftone-footer", HalftoneFooter);
})();
