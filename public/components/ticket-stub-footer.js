/*
 * <ticket-stub-footer> — reusable closing section + footer component.
 *
 * A hairline-ruled closing section: a numbered section index (with scroll
 * spy), a hero (typewriter eyebrow, serif headline, pill CTA), a slowly
 * turning globe of meridians with tickets flying over it, link columns, and a
 * ticket with a punchable stub, a live status, a rolling odometer, a mono
 * blurb that decodes itself in, and a full-width serif wordmark whose foot
 * dissolves into a halftone (pointer lens + click ripple).
 *
 * Structure/animation adapted from the "Ticket Stub Footer" React reference,
 * ported to a dependency-free custom element. Colours and fonts come from the
 * Pramaan design tokens (see ticket-stub-footer.css).
 *
 * Content is plain light-DOM markup with data-slot attributes, so it stays
 * readable without JS:
 *
 *   <ticket-stub-footer wordmark="pramaan" copyright="&copy; 2026 Pramaan">
 *     <nav data-slot="sections"><a href="#how">How it works</a> ...</nav>
 *     <p data-slot="eyebrow">Phrase one|Phrase two|Phrase three</p>
 *     <h2 data-slot="headline">Line one<br>Line two</h2>
 *     <p data-slot="description">...</p>
 *     <a data-slot="cta" href="#start">Get early access</a>
 *     <nav data-slot="links" data-title="Product"><a href="#">...</a></nav>
 *     <span data-slot="status" data-caption="Early access">Open</span>
 *     <span data-slot="count" data-value="300">Things you can ask for</span>
 *     <p data-slot="blurb">...</p>
 *     <p data-slot="legal"><a href="#">Privacy</a> <a href="#">Terms</a></p>
 *     <figure data-slot="art">...</figure>   (optional: full-width band above the grid, or add
 *                                            data-mode="background" to run it behind the whole footer)
 *     <div data-slot="badge">...</div>       (optional: e.g. a <lanyard-badge> + its CTA, hung from the
 *                                            top edge of the footer to the right of the link columns)
 *   </ticket-stub-footer>
 *
 * Attributes: wordmark, copyright, halftone="false" (solid wordmark),
 *   wordmark-style="dots" (opt-in: the ticket's wordmark is printed entirely as
 *   halftone dots, as in <halftone-footer>: dots part around the pointer and warm
 *   in colour, a click sends a shock ring through the word), with optional
 *   dot-gap (px, default 6) and dot-crop (share hidden below the edge, default 0.2).
 */
(() => {
  if (customElements.get("ticket-stub-footer")) return;

  // ---- pure helpers -------------------------------------------------------

  const clamp01 = (v) => (v > 0 ? (v > 1 ? 1 : v) : 0);

  const smoothstep = (a, b, x) => {
    if (a === b) return x < a ? 0 : 1;
    const t = clamp01((x - a) / (b - a));
    return t * t * (3 - 2 * t);
  };

  /** 12745 → "12,745". */
  const formatCount = (n, sep = ",") => {
    const v = Number.isFinite(n) && n > 0 ? Math.floor(n) : 0;
    return String(v).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  };

  const TYPE = { type: 55, hold: 2600, erase: 22, gap: 420 };

  /** Where a looping typewriter is after `ms`: type, hold, erase, pause, next. */
  const typeFrame = (phrases, ms, k = TYPE) => {
    const list = phrases.filter((p) => p.length > 0);
    if (!list.length) return "";
    const spans = list.map((p) => p.length * k.type + k.hold + p.length * k.erase + k.gap);
    const total = spans.reduce((a, b) => a + b, 0);
    let t = Number.isFinite(ms) && total > 0 ? ((ms % total) + total) % total : 0;
    let i = 0;
    while (i < list.length - 1 && t >= spans[i]) t -= spans[i++];
    const p = list[i];
    const typing = p.length * k.type;
    if (t < typing) return p.slice(0, Math.floor(t / k.type) + 1);
    t -= typing;
    if (t < k.hold) return p;
    t -= k.hold;
    const erasing = p.length * k.erase;
    if (t < erasing) return p.slice(0, p.length - Math.floor(t / k.erase));
    return "";
  };

  /** Small integer hash → [0, 1). */
  const hash = (n) => {
    let x = Math.imul((n | 0) ^ 0x9e3779b9, 0x85ebca6b);
    x ^= x >>> 13;
    x = Math.imul(x, 0xc2b2ae35);
    x ^= x >>> 16;
    return (x >>> 0) / 4294967296;
  };

  const NOISE = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#%&*+=/<>";

  /** Text decoding itself left to right; length and spaces never change. */
  const scramble = (text, p, tick) => {
    if (!(p < 1)) return text;
    const n = text.length;
    let out = "";
    for (let i = 0; i < n; i++) {
      const ch = text[i];
      if (/\s/.test(ch) || p * 1.3 - 0.3 > i / n) out += ch;
      else out += NOISE[Math.floor(hash(i * 131 + tick * 7919) * NOISE.length)];
    }
    return out;
  };

  /** How much ink a halftone cell at (x, y) keeps, 0 → 1. */
  const coverage = (x, y, w, h, s) => {
    const ny = y / h;
    let c = 1 - smoothstep(s.fade, 1.04, ny) * s.depth;
    if (s.wave) c += s.wave * Math.sin((x / w) * 11 + s.time * 1.3 + ny * 4) * smoothstep(s.fade - 0.1, 1, ny);
    if (s.lens > 0) {
      const dx = x - s.lensX;
      const dy = y - s.lensY;
      c *= 1 - s.lens * Math.exp(-(dx * dx + dy * dy) / (s.lensR * s.lensR));
    }
    for (const g of s.rings) {
      const d = Math.hypot(x - g.x, y - g.y) - g.r;
      c *= 1 - g.a * Math.exp(-(d * d) / (s.ringW * s.ringW));
    }
    c *= clamp01(s.reveal * 1.6 - (x / w) * 0.6);
    return clamp01(c);
  };

  /** Dot radius for a coverage on staggered rows (0.66 cell closes every gap). */
  const dotRadius = (c, cell) => cell * 0.66 * Math.sqrt(clamp01(c));

  /** A point on the unit sphere along meridian `lon`, tipped and leant. */
  const project = (theta, lon, tilt, roll) => {
    const x0 = Math.cos(theta) * Math.sin(lon);
    const y0 = Math.sin(theta);
    const z0 = Math.cos(theta) * Math.cos(lon);
    const ct = Math.cos(tilt), st = Math.sin(tilt);
    const y1 = y0 * ct - z0 * st;
    const z1 = y0 * st + z0 * ct;
    const cr = Math.cos(roll), sr = Math.sin(roll);
    return [x0 * cr - y1 * sr, x0 * sr + y1 * cr, z1];
  };

  /** Visible (front) half of one meridian as SVG path data. */
  const meridianPath = (lon, tilt, roll, cx, cy, r, steps = 96) => {
    let d = "";
    let pen = false;
    for (let i = 0; i <= steps; i++) {
      const [x, y, z] = project((i / steps) * Math.PI * 2, lon, tilt, roll);
      if (z < 0) { pen = false; continue; }
      d += (pen ? "L" : "M") + (cx + r * x).toFixed(1) + " " + (cy - r * y).toFixed(1);
      pen = true;
    }
    return d;
  };

  /** Font size + extra tracking so a word fills `w` without standing taller than `maxH`. */
  const fitWord = (ink100, asc100, w, maxH, letters) => {
    if (!(ink100 > 0) || !(w > 0)) return { size: 0, extra: 0 };
    let size = (100 * w) / ink100;
    let extra = 0;
    if (asc100 > 0 && maxH > 0 && (asc100 * size) / 100 > maxH) {
      size = (100 * maxH) / asc100;
      if (letters > 1) extra = (w - (ink100 * size) / 100) / (letters - 1);
    }
    return { size, extra };
  };

  // ---- dot-field wordmark (wordmark-style="dots"), after <halftone-footer> ----

  /** "#rgb" / "#rrggbb" / "rgb(r, g, b)" → [r, g, b], or null. */
  const toRgb = (s) => {
    const v = (s || "").trim();
    const m = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(v);
    if (m) {
      const h = m[1].length === 3 ? m[1].replace(/./g, (c) => c + c) : m[1];
      return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
    }
    const r = /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(v);
    return r ? [+r[1], +r[2], +r[3]] : null;
  };

  /** Dot radius for a cell coverage in [0, 1]; area-true so tone stays even. */
  const fieldDot = (c, gap) => Math.sqrt(clamp01(c)) * gap * 0.56;

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
  const warmth = (x, y, hx, hy, span) => (span > 0 ? Math.min(1, Math.hypot(x - hx, y - hy) / span) : 0);

  const numAttr = (node, name, fallback) => {
    const v = parseFloat(node.getAttribute(name));
    return Number.isFinite(v) ? v : fallback;
  };

  const MAX_CAP = 0.2;
  const MERIDIANS = 12;
  const TILT = 0.34;
  const ROLL = -1.36;
  const SVGNS = "http://www.w3.org/2000/svg";

  const el = (tag, cls, attrs) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (attrs) for (const k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  };
  const svgEl = (tag, attrs) => {
    const e = document.createElementNS(SVGNS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  };

  // Pramaan mark: red braces around a node graph (same drawing as logo.svg).
  const MARK =
    '<svg viewBox="110 110 1034 1034" aria-hidden="true" focusable="false"><g fill="#e40532"><path id="tsf-brace" d="M425 178H345C270 178 220 235 220 300V490C220 545 180 585 135 588V660C180 663 220 700 220 750V950C220 1015 270 1075 345 1075H427V1005H385C357 1005 337 980 337 955V745C337 690 295 640 238 622C295 600 335 555 335 495V295C335 268 357 245 385 245H425Z"/><use href="#tsf-brace" transform="translate(1254 0) scale(-1 1)"/></g><path d="M742 263L573 362L415 666L573 820L753 1007L573 362M742 263L750 583L573 820" fill="none" stroke="currentColor" stroke-width="22" stroke-linecap="round"/><g fill="currentColor"><circle cx="742" cy="263" r="52"/><circle cx="573" cy="362" r="36"/><circle cx="750" cy="583" r="36"/><circle cx="415" cy="666" r="56"/><circle cx="573" cy="820" r="36"/><circle cx="753" cy="1007" r="40"/></g></svg>';
  const ARROW =
    '<svg viewBox="0 0 14 14" aria-hidden="true" focusable="false"><path d="M1 7h11M7.5 2.5 12 7l-4.5 4.5" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>';

  // ---- element ------------------------------------------------------------

  class TicketStubFooter extends HTMLElement {
    connectedCallback() {
      if (!this._built) this._build();
      this._start();
    }

    disconnectedCallback() {
      if (this._stop) this._stop();
    }

    _build() {
      this._built = true;
      const slot = (n) => this.querySelector(`:scope > [data-slot="${n}"]`);
      const slots = (n) => [...this.querySelectorAll(`:scope > [data-slot="${n}"]`)];

      this._word = this.getAttribute("wordmark") || "pramaan";
      const copyright = this.getAttribute("copyright") || "";
      const sectionLinks = [...((slot("sections") || {}).querySelectorAll ? slot("sections").querySelectorAll("a") : [])];
      const eyebrowEl = slot("eyebrow");
      this._phrases = eyebrowEl ? eyebrowEl.textContent.split("|").map((s) => s.trim()).filter(Boolean) : [];
      const headlineEl = slot("headline");
      const lines = headlineEl ? headlineEl.innerHTML.split(/<br\s*\/?>/i).map((s) => s.trim()).filter(Boolean) : [];
      const descEl = slot("description");
      const ctaEl = slot("cta");
      const linkNavs = slots("links");
      const statusEl = slot("status");
      const countEl = slot("count");
      const blurbEl = slot("blurb");
      const legalEl = slot("legal");
      const badgeEl = slot("badge");

      const grid = el("div", "tsf-grid");
      for (const c of [2, 3, 4, 5, 6, 7]) {
        const v = el("span", "tsf-vl", { "aria-hidden": "true" });
        v.style.gridColumn = c;
        grid.append(v);
      }
      for (const r of [2, 3, 4, 5, 6]) {
        const h = el("span", "tsf-hl", { "aria-hidden": "true" });
        h.style.gridRow = r;
        grid.append(h);
      }

      // Section index
      const nav = el("nav", "tsf-nav", { "aria-label": "Sections" });
      const ol = el("ol");
      sectionLinks.forEach((a, i) => {
        const label = a.textContent.trim();
        a.className = "tsf-nav-item";
        a.textContent = "";
        const num = el("span");
        num.textContent = String(i + 1).padStart(2, "0");
        const lab = el("span");
        lab.textContent = label;
        a.append(num, lab);
        a.addEventListener("click", () => this._pick(i));
        const li = el("li");
        li.append(a);
        ol.append(li);
      });
      const bar = el("span", "tsf-nav-bar", { "aria-hidden": "true" });
      nav.append(ol, bar);
      this._navItems = sectionLinks;
      this._bar = bar;

      // Hero
      const hero = el("div", "tsf-hero");
      const eb = el("div", "tsf-eyebrow");
      eb.innerHTML = '<svg viewBox="0 0 12 12" aria-hidden="true" focusable="false"><circle cx="6" cy="6" r="4.6" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="6" cy="6" r="1.7" fill="currentColor"/></svg>';
      const ebSr = el("span", "tsf-sr");
      ebSr.textContent = this._phrases[0] || "";
      const type = el("span", "tsf-type", { "aria-hidden": "true" });
      this._typeText = el("span");
      this._caret = el("span", "tsf-caret");
      type.append(this._typeText, this._caret);
      eb.append(ebSr, type, el("span", "tsf-dots", { "aria-hidden": "true" }));
      hero.append(eb);
      if (lines.length) {
        const h2 = el("h2", "tsf-h");
        lines.forEach((line, i) => {
          const outer = el("span");
          const inner = el("span");
          inner.innerHTML = line;
          inner.style.transitionDelay = 0.12 + i * 0.1 + "s";
          outer.append(inner);
          h2.append(outer);
        });
        hero.append(h2);
      }
      if (descEl) {
        descEl.className = "tsf-p";
        hero.append(descEl);
      }
      if (ctaEl) {
        const label = ctaEl.textContent.trim();
        ctaEl.className = "tsf-cta";
        ctaEl.textContent = "";
        const s = el("span");
        s.textContent = label;
        ctaEl.append(s);
        ctaEl.insertAdjacentHTML("beforeend", ARROW);
        ctaEl.addEventListener("click", () => this._launch());
        hero.append(ctaEl);
      }

      // Side: globe + link columns
      const side = el("div", "tsf-side");
      const orbit = el("div", "tsf-orbit", { "aria-hidden": "true" });
      const svg = svgEl("svg", { preserveAspectRatio: "none", focusable: "false" });
      this._paths = [];
      this._dots = [];
      for (let k = 0; k < MERIDIANS; k++) {
        const p = svgEl("path", { fill: "none", stroke: "currentColor", "stroke-opacity": "0.55", "stroke-width": "1", "vector-effect": "non-scaling-stroke" });
        svg.append(p);
        this._paths.push(p);
      }
      for (let i = 0; i < 7; i++) {
        const c = svgEl("circle", { r: i === 0 ? "2.6" : "3.2", class: "tsf-packet", opacity: "0" });
        svg.append(c);
        this._dots.push(c);
      }
      orbit.append(svg);
      this._orbit = orbit;
      this._svg = svg;
      const links = el("div", "tsf-links");
      links.style.setProperty("--cols", String(Math.max(1, linkNavs.length)));
      for (const n of linkNavs) {
        const g = el("div");
        const h3 = el("h3");
        h3.textContent = n.dataset.title || "";
        const ul = el("ul");
        for (const a of [...n.querySelectorAll("a")]) {
          a.className = "tsf-link";
          const li = el("li");
          li.append(a);
          ul.append(li);
        }
        g.append(h3, ul);
        links.append(g);
      }
      side.append(orbit, links);

      // Ticket
      const ticket = el("div", "tsf-ticket");
      const stub = el("button", "tsf-stub", { type: "button", "aria-label": "Punch the ticket" });
      stub.innerHTML = MARK + '<span class="tsf-stub-tip" aria-hidden="true">Punch</span>';
      stub.addEventListener("click", () => this._punch());
      this._stub = stub;
      const main = el("div", "tsf-main");
      const stats = el("div", "tsf-stats");
      if (statusEl) {
        const st = el("div", "tsf-stat");
        const v = el("span", "tsf-stat-v");
        v.append(document.createTextNode(statusEl.textContent.trim()), el("span", "tsf-pulse", { "aria-hidden": "true" }));
        const c = el("span", "tsf-stat-c");
        c.textContent = statusEl.dataset.caption || "";
        st.append(v, c);
        stats.append(st);
      }
      if (countEl) {
        this._count = parseInt(countEl.dataset.value, 10) || 0;
        const st = el("div", "tsf-stat");
        const v = el("span", "tsf-stat-v");
        this._odoWrap = el("span");
        this._odo = this._buildOdometer(formatCount(this._count));
        this._odoWrap.append(this._odo);
        const sr = el("span", "tsf-sr");
        sr.textContent = formatCount(this._count);
        v.append(this._odoWrap, sr);
        const c = el("span", "tsf-stat-c");
        c.textContent = countEl.textContent.trim();
        st.append(v, c);
        stats.append(st);
      }
      main.append(stats, el("span", "tsf-gutcell", { "aria-hidden": "true" }));
      if (blurbEl) {
        this._blurbText = blurbEl.textContent.trim();
        const p = el("p", "tsf-blurb");
        const sr = el("span", "tsf-sr");
        sr.textContent = this._blurbText;
        this._blurbShown = el("span", "", { "aria-hidden": "true" });
        this._blurbShown.textContent = this._blurbText;
        p.append(sr, this._blurbShown);
        main.append(p);
      }
      const srWord = el("p", "tsf-sr");
      srWord.textContent = this._word;
      const word = el("div", "tsf-word", { "aria-hidden": "true" });
      const canvas = el("canvas");
      word.append(canvas);
      main.append(srWord, word);
      this._wordBox = word;
      this._canvas = canvas;
      ticket.append(stub, main);

      // Footer row
      const foot = el("div", "tsf-foot");
      const copy = el("span", "tsf-copy");
      copy.innerHTML = copyright;
      const footL = el("span", "tsf-foot-l", { "aria-hidden": "true" });
      footL.append(el("span", "tsf-dots"));
      const footR = el("div", "tsf-foot-r");
      if (legalEl) for (const a of [...legalEl.querySelectorAll("a")]) footR.append(a);
      footR.append(el("span", "tsf-dots", { "aria-hidden": "true" }));
      const top = el("button", "tsf-top", { type: "button", "aria-label": "Back to top" });
      top.innerHTML = MARK;
      top.addEventListener("click", () =>
        window.scrollTo({ top: 0, behavior: this._reduced ? "auto" : "smooth" })
      );
      foot.append(copy, footL, footR, top);

      // Optional hanging badge: its own grid cell, after the hero so it follows
      // the headline when the layout stacks (placement lives in the CSS).
      if (badgeEl) {
        badgeEl.classList.add("tsf-badge");
        this.toggleAttribute("data-badge", true);
        grid.append(nav, hero, badgeEl, side, ticket, foot);
      } else {
        grid.append(nav, hero, side, ticket, foot);
      }
      const artEl = slot("art");
      if (artEl) {
        // data-mode="background": the art sits behind the whole footer instead of forming a band above it
        const asBg = artEl.dataset.mode === "background";
        const band = el("div", asBg ? "tsf-art tsf-art--bg" : "tsf-art");
        if (asBg) {
          band.setAttribute("aria-hidden", "true");
          this.setAttribute("data-art", "background");
        }
        band.append(artEl);
        this.replaceChildren(band, grid);
      } else {
        this.replaceChildren(grid);
      }
      this.classList.add("tsf");
      this.dataset.seen = "0";
      this._pick(0, true);
    }

    /** Rolling digits; each digit is a column of 0–9 moved by transform. */
    _buildOdometer(s) {
      const wrap = el("span", "tsf-odo", { "aria-hidden": "true" });
      this._odoCols = [];
      for (const ch of s) {
        if (/\d/.test(ch)) {
          const d = el("span", "tsf-odo-d");
          const col = el("span", "tsf-odo-s");
          for (let n = 0; n < 10; n++) {
            const s2 = el("span");
            s2.textContent = String(n);
            col.append(s2);
          }
          col.dataset.digit = ch;
          d.append(col);
          wrap.append(d);
          this._odoCols.push(col);
        } else {
          const sep = el("span");
          sep.textContent = ch;
          wrap.append(sep);
        }
      }
      return wrap;
    }

    /** Roll every digit to 0, then to its value (or straight to value when reduced). */
    _rollOdometer() {
      if (!this._odoCols) return;
      const set = (zero) =>
        this._odoCols.forEach((c) => {
          c.style.transform = "translateY(" + -(zero ? 0 : Number(c.dataset.digit)) * 10 + "%)";
        });
      if (this._reduced) return set(false);
      set(true);
      requestAnimationFrame(() => requestAnimationFrame(() => set(false)));
    }

    _pick(i, silent) {
      this._section = i;
      (this._navItems || []).forEach((a, j) => {
        if (j === i) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
      if (this._bar) this._bar.style.setProperty("--i", String(i));
      if (!silent && this._wake) this._wake();
    }

    _addPacket() {
      const s = this._orbitState;
      if (!s || s.packets.length >= 7) return;
      s.packets.push({ k: Math.floor(Math.random() * MERIDIANS), theta: -1.6, speed: 0.9 + Math.random() * 0.5, life: 1 });
      if (this._wake) this._wake();
    }

    _launch() {
      this._addPacket();
    }

    _punch() {
      this._addPacket();
      this._rollOdometer();
      if (this._odoWrap) {
        this._odoWrap.classList.remove("tsf-bump");
        void this._odoWrap.offsetWidth;
        this._odoWrap.classList.add("tsf-bump");
      }
      const svg = this._stub.querySelector("svg");
      svg.classList.remove("tsf-pop");
      void svg.getBoundingClientRect();
      svg.classList.add("tsf-pop");
    }

    _start() {
      if (this._stop) this._stop();
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      this._reduced = reduced;
      const halftone = this.getAttribute("halftone") !== "false";
      const dotMode = this.getAttribute("wordmark-style") === "dots";
      let visible = false;
      let raf = 0;
      let alive = true;

      // ---- orbit state
      const os = (this._orbitState = this._orbitState || {
        spin: 0.4, vel: 0.14, drag: false, lastX: 0, lastT: 0, w: 1, h: 1,
        packets: [{ k: 3, theta: -1.2, speed: 0.32, life: Infinity }],
      });
      const paintOrbit = () => {
        const { w, h } = os;
        const cx = w * 0.56;
        const cy = h * 1.5;
        const r = Math.min(h * 1.42, w * 0.62);
        for (let k = 0; k < MERIDIANS; k++) {
          this._paths[k].setAttribute("d", meridianPath(os.spin + (k * Math.PI) / MERIDIANS, TILT, ROLL, cx, cy, r));
        }
        for (let i = 0; i < 7; i++) {
          const c = this._dots[i];
          const p = os.packets[i];
          if (!p) { c.setAttribute("opacity", "0"); continue; }
          const [x, y, z] = project(p.theta, os.spin + (p.k * Math.PI) / MERIDIANS, TILT, ROLL);
          const Y = cy - r * y;
          c.setAttribute("cx", (cx + r * x).toFixed(1));
          c.setAttribute("cy", Y.toFixed(1));
          c.setAttribute("opacity", z > 0 && Y < h - 1 ? "1" : "0");
        }
      };
      const measureOrbit = () => {
        os.w = this._svg.clientWidth || 1;
        os.h = this._svg.clientHeight || 1;
        this._svg.setAttribute("viewBox", "0 0 " + os.w + " " + os.h);
        paintOrbit();
      };

      // ---- wordmark state
      const ws = (this._wordState = this._wordState || {
        lens: 0, lensTarget: 0, lx: 0, ly: 0, rings: [], reveal: 0, time: 0,
      });
      const canvas = this._canvas;
      const ctx = canvas.getContext("2d");
      const g = { w: 1, h: 1, dpr: 1, font: "", size: 0, track: 0, x0: 0, base: 0, cell: 6, color: "#242424" };
      const cs = () => getComputedStyle(this);
      const setFont = (font, weight, px, track) => {
        ctx.font = weight + " " + px + "px " + font;
        if ("letterSpacing" in ctx) ctx.letterSpacing = track.toFixed(2) + "px";
      };
      const word = this._word;

      const measureWord = () => {
        const w = this._wordBox.clientWidth;
        if (!w) return;
        const style = cs();
        const font = style.getPropertyValue("--tsf-serif").trim() || "Georgia, serif";
        const weight = style.getPropertyValue("--tsf-serif-weight").trim() || "400";
        g.color = style.getPropertyValue("--tsf-aink").trim() || "#242424";
        setFont(font, weight, 100, -3);
        const m100 = ctx.measureText(word);
        const ink100 = m100.actualBoundingBoxLeft + m100.actualBoundingBoxRight || m100.width;
        const fit = fitWord(ink100, m100.actualBoundingBoxAscent || 72, w * 0.995, w * MAX_CAP, word.length);
        const size = fit.size || 1;
        g.size = size;
        g.track = -0.03 * size;
        if (fit.extra) {
          setFont(font, weight, size, g.track);
          const m0 = ctx.measureText(word);
          const ink0 = m0.actualBoundingBoxLeft + m0.actualBoundingBoxRight;
          if (word.length > 1 && ink0 > 0) g.track += (w * 0.995 - ink0) / (word.length - 1);
        }
        setFont(font, weight, size, g.track);
        g.font = ctx.font;
        const m = ctx.measureText(word);
        const asc = m.actualBoundingBoxAscent || size * 0.72;
        const desc = m.actualBoundingBoxDescent || 0;
        g.x0 = m.actualBoundingBoxLeft;
        // Whole word, descenders included; the halftone foot dissolves them.
        const h = Math.ceil(asc + desc + size * 0.04);
        g.base = asc + size * 0.02;
        g.w = w;
        g.h = h;
        g.dpr = Math.min(2, window.devicePixelRatio || 1);
        g.cell = Math.max(3.5, Math.min(9, w / 170));
        canvas.width = Math.round(w * g.dpr);
        canvas.height = Math.round(h * g.dpr);
        this._wordBox.style.height = h + "px";
        drawWord();
      };

      const drawWord = () => {
        const { w, h, dpr, cell } = g;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.globalCompositeOperation = "source-over";
        ctx.clearRect(0, 0, w, h);
        if ("letterSpacing" in ctx) ctx.letterSpacing = g.track.toFixed(2) + "px";
        ctx.font = g.font;
        ctx.textBaseline = "alphabetic";
        if (halftone) {
          const tone = {
            // Height includes descenders, so start the dissolve higher than
            // the reference to reach the letters' feet.
            fade: 0.3, depth: 0.9,
            lensX: ws.lx, lensY: ws.ly, lensR: w * 0.09, lens: ws.lens * 0.95,
            reveal: ws.reveal, wave: reduced ? 0 : 0.06, time: ws.time,
            rings: ws.rings, ringW: w * 0.02,
          };
          ctx.beginPath();
          const half = cell / 2;
          for (let j = 0, y = half; y < h + half; j++, y += cell) {
            const off = j % 2 ? half : 0;
            for (let x = off; x < w + half; x += cell) {
              const c = coverage(x, y, w, h, tone);
              if (c < 0.01) continue;
              if (c > 0.995) {
                ctx.rect(x - half - 0.3, y - half - 0.3, cell + 0.6, cell + 0.6);
                continue;
              }
              const r = dotRadius(c, cell);
              ctx.moveTo(x + r, y);
              ctx.arc(x, y, r, 0, Math.PI * 2);
            }
          }
          ctx.fillStyle = "#000";
          ctx.fill();
          ctx.globalCompositeOperation = "source-in";
        }
        ctx.fillStyle = g.color;
        ctx.fillText(word, g.x0, g.base);
        ctx.globalCompositeOperation = "source-over";
      };

      // ---- dot-field wordmark (wordmark-style="dots"): the word sampled into
      // halftone dots on springs, as in <halftone-footer>, on a transparent
      // canvas so the ticket shows through. Off unless the attribute is set.
      const dm = {
        w: 1, h: 1, dpr: 1, dots: new Float32Array(0), count: 0,
        px: -1e5, py: -1e5, ring: { x: 0, y: 0, t: -1 },
        ink: [36, 36, 36], warm: [255, 148, 115], inkCss: "#242424", grain: null,
      };

      const measureDots = () => {
        const w = Math.round(this._wordBox.clientWidth);
        if (!w) return;
        const style = cs();
        const prop = (n, f) => style.getPropertyValue(n).trim() || f;
        const font = prop("--tsf-serif", "Georgia, serif");
        const weight = prop("--tsf-serif-weight", "400");
        dm.inkCss = prop("--tsf-dot-ink", "#242424");
        dm.ink = toRgb(dm.inkCss) || dm.ink;
        dm.warm = toRgb(prop("--tsf-dot-warm", "#ff9473")) || dm.warm;
        const crop = Math.min(0.6, Math.max(0, numAttr(this, "dot-crop", 0.2)));

        // Set the word to fill the width, then crop its foot at the ticket edge.
        const mask = document.createElement("canvas");
        const m = mask.getContext("2d", { willReadFrequently: true });
        if (!m) return;
        m.font = weight + " 100px " + font;
        const adv = m.measureText(word).width;
        // Inside the ticket the whole word stays on the card (the page-wide
        // <halftone-footer> lets it bleed at 1.02).
        const size = adv > 0 ? (w * 0.97 * 100) / adv : 1;
        m.font = weight + " " + size + "px " + font;
        const probe = m.measureText(word);
        const asc = probe.actualBoundingBoxAscent || size * 0.72;
        const desc = probe.actualBoundingBoxDescent || 0;
        const shown = (asc + desc) * (1 - crop);
        const h = Math.max(1, Math.round(Math.max(14, asc * 0.14) + shown));
        mask.width = w;
        mask.height = h;
        m.font = weight + " " + size + "px " + font;
        m.fillStyle = "#000";
        m.textBaseline = "alphabetic";
        m.fillText(word, (w - m.measureText(word).width) / 2, h - shown + asc);
        const img = m.getImageData(0, 0, w, h).data;

        // Finer dots on narrow screens so a small word stays legible.
        const gap = Math.max(3, Math.min(Math.max(3, numAttr(this, "dot-gap", 6)), w / 130));
        const cols = Math.ceil(w / gap);
        const rows = Math.ceil(h / gap);
        const tmp = [];
        for (let gy = 0; gy < rows; gy++) {
          for (let gx = 0; gx < cols; gx++) {
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
            tmp.push(hx, hy, 0, 0, hx, hy, fieldDot(cov, gap));
          }
        }
        dm.dots = new Float32Array(tmp);
        dm.count = tmp.length / 7;
        dm.w = w;
        dm.h = h;
        dm.dpr = Math.min(2, window.devicePixelRatio || 1);

        // A fixed tile of print grain, laid over the dots only.
        const tile = document.createElement("canvas");
        tile.width = tile.height = 128;
        const tg = tile.getContext("2d");
        if (tg) {
          const id = tg.createImageData(128, 128);
          for (let i = 0; i < id.data.length; i += 4) {
            const v = Math.random() * 255;
            id.data[i] = id.data[i + 1] = id.data[i + 2] = v;
            id.data[i + 3] = Math.random() < 0.5 ? 0 : 255;
          }
          tg.putImageData(id, 0, 0);
          dm.grain = ctx.createPattern(tile, "repeat");
        }
        canvas.width = Math.round(w * dm.dpr);
        canvas.height = Math.round(h * dm.dpr);
        this._wordBox.style.height = h + "px";
        drawDots();
      };

      const drawDots = () => {
        const { w, h, dpr, dots, count, ink, warm } = dm;
        const now = performance.now();
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.globalCompositeOperation = "source-over";
        ctx.globalAlpha = 1;
        ctx.clearRect(0, 0, w, h);
        const r = reduced ? 0 : Math.min(80, w * 0.16);
        const ringAge = dm.ring.t < 0 ? 1e9 : now - dm.ring.t;
        const ringR = ringAge * 0.9;
        const hot = [];
        ctx.beginPath();
        for (let i = 0; i < count; i++) {
          const j = i * 7;
          let x = dots[j], y = dots[j + 1], vx = dots[j + 2], vy = dots[j + 3];
          const hx = dots[j + 4], hy = dots[j + 5], rad = dots[j + 6];
          if (!reduced) {
            if (ringAge < 900) {
              const dx = hx - dm.ring.x;
              const dy = hy - dm.ring.y;
              const d = Math.sqrt(dx * dx + dy * dy) + 0.001;
              const band = 1 - Math.min(1, Math.abs(d - ringR) / 26);
              if (band > 0) {
                const f = band * 3.2 * (1 - ringAge / 900);
                vx += (dx / d) * f;
                vy += (dy / d) * f;
              }
            }
            [x, y, vx, vy] = springStep(x, y, vx, vy, hx, hy, dm.px, dm.py, r);
            if (!(Math.abs(vx) + Math.abs(vy) > 0.02 || Math.abs(x - hx) + Math.abs(y - hy) > 0.05)) {
              x = hx; y = hy; vx = 0; vy = 0;
            }
            dots[j] = x; dots[j + 1] = y; dots[j + 2] = vx; dots[j + 3] = vy;
          }
          const k = warmth(x, y, hx, hy, 28);
          if (k > 0.02) {
            hot.push(x, y, rad, k);
            continue;
          }
          ctx.moveTo(x + rad, y);
          ctx.arc(x, y, rad, 0, Math.PI * 2);
        }
        ctx.fillStyle = dm.inkCss;
        ctx.fill();
        // Pushed dots warm towards the accent, one by one.
        for (let i = 0; i < hot.length; i += 4) {
          const k = hot[i + 3];
          ctx.fillStyle = "rgb(" + Math.round(ink[0] + (warm[0] - ink[0]) * k) + "," + Math.round(ink[1] + (warm[1] - ink[1]) * k) + "," + Math.round(ink[2] + (warm[2] - ink[2]) * k) + ")";
          ctx.beginPath();
          ctx.arc(hot[i], hot[i + 1], hot[i + 2], 0, Math.PI * 2);
          ctx.fill();
        }
        if (dm.grain) {
          ctx.globalAlpha = 0.06;
          ctx.globalCompositeOperation = "source-atop";
          ctx.fillStyle = dm.grain;
          ctx.fillRect(0, 0, w, h);
          ctx.globalAlpha = 1;
          ctx.globalCompositeOperation = "source-over";
        }
      };

      const measureMark = dotMode ? measureDots : measureWord;
      const drawMark = dotMode ? drawDots : drawWord;

      // ---- one loop for globe + wordmark while on screen
      let last = 0;
      const loop = (now) => {
        raf = 0;
        const dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
        last = now;
        if (!os.drag) {
          os.vel += (0.14 - os.vel) * (1 - Math.exp(-dt * 1.6));
          os.spin += os.vel * dt;
        }
        for (const p of os.packets) p.theta += p.speed * dt;
        os.packets = os.packets.filter((p) => p.life === Infinity || p.theta < Math.PI * 1.5);
        for (const p of os.packets) if (p.life === Infinity && p.theta > Math.PI * 1.5) p.theta -= Math.PI * 2;
        paintOrbit();

        ws.time += dt;
        if (!halftone) {
          ws.reveal = 1;
        } else {
          ws.reveal = Math.min(1, ws.reveal + dt / 1.5);
          ws.lens += (ws.lensTarget - ws.lens) * (1 - Math.exp(-dt * 7));
          for (const r of ws.rings) {
            r.r += g.w * 0.75 * dt;
            r.a *= Math.exp(-dt * 1.4);
          }
          ws.rings = ws.rings.filter((r) => r.a > 0.02);
        }
        drawMark();
        if (visible && alive) raf = requestAnimationFrame(loop);
        else last = 0;
      };
      const wake = () => {
        if (reduced) { paintOrbit(); drawMark(); return; }
        if (!raf && visible && alive) raf = requestAnimationFrame(loop);
      };
      this._wake = wake;

      if (reduced) {
        ws.reveal = 1;
        ws.rings = [];
      }

      // ---- typewriter + blurb
      let typeTimer = 0;
      let typeT0 = 0;
      const startType = () => {
        if (reduced || typeTimer || !this._phrases.length) return;
        typeT0 = performance.now() - (this._typeMs || 0);
        typeTimer = window.setInterval(() => {
          this._typeMs = performance.now() - typeT0;
          this._typeText.textContent = typeFrame(this._phrases, this._typeMs);
        }, 40);
      };
      const stopType = () => {
        clearInterval(typeTimer);
        typeTimer = 0;
      };
      if (reduced) {
        this._typeText.textContent = this._phrases[0] || "";
        this._caret.hidden = true;
      }
      let blurbRaf = 0;
      const decodeBlurb = () => {
        if (!this._blurbShown || this._blurbDone) return;
        this._blurbDone = true;
        if (reduced) return;
        const t0 = performance.now();
        const step = (now) => {
          const p = (now - t0) / 1400;
          this._blurbShown.textContent = scramble(this._blurbText, p, Math.floor((now - t0) / 45));
          if (p < 1 && alive) blurbRaf = requestAnimationFrame(step);
        };
        blurbRaf = requestAnimationFrame(step);
      };

      // ---- visibility
      const io = new IntersectionObserver(
        ([e]) => {
          visible = e.isIntersecting;
          if (visible) {
            if (this.dataset.seen !== "1") {
              this.dataset.seen = "1";
              this._rollOdometer();
            }
            decodeBlurb();
            startType();
            wake();
          } else {
            stopType();
          }
        },
        { threshold: 0.05 }
      );
      io.observe(this);

      // ---- scroll spy on the section index
      const targets = (this._navItems || [])
        .map((a, i) => {
          const id = (a.getAttribute("href") || "").replace(/^#/, "");
          const t = id && document.getElementById(id);
          return t ? { t, i } : null;
        })
        .filter(Boolean);
      const spy = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            const hit = targets.find((x) => x.t === e.target);
            if (hit) this._pick(hit.i, true);
          }
        },
        { rootMargin: "-45% 0px -50% 0px" }
      );
      targets.forEach((x) => spy.observe(x.t));

      // ---- globe drag
      const orbit = this._orbit;
      const onDown = (e) => {
        os.drag = true;
        os.lastX = e.clientX;
        os.lastT = performance.now();
        os.vel = 0;
        orbit.setPointerCapture(e.pointerId);
      };
      const onMove = (e) => {
        if (!os.drag) return;
        const now = performance.now();
        const d = ((e.clientX - os.lastX) / os.w) * 2.4;
        os.spin += d;
        os.vel = d / Math.max(0.008, (now - os.lastT) / 1000);
        os.lastX = e.clientX;
        os.lastT = now;
        if (reduced) paintOrbit();
      };
      const onUp = () => {
        os.drag = false;
        os.vel = Math.max(-6, Math.min(6, os.vel));
      };
      orbit.addEventListener("pointerdown", onDown);
      orbit.addEventListener("pointermove", onMove);
      orbit.addEventListener("pointerup", onUp);
      orbit.addEventListener("pointercancel", onUp);

      // ---- wordmark lens + ripple
      const box = this._wordBox;
      const local = (e) => {
        const r = box.getBoundingClientRect();
        return [e.clientX - r.left, e.clientY - r.top];
      };
      const onWordMove = (e) => {
        [ws.lx, ws.ly] = local(e);
        ws.lensTarget = halftone && e.pointerType !== "touch" ? 1 : 0;
        wake();
      };
      const onWordLeave = () => {
        ws.lensTarget = 0;
        wake();
      };
      const onWordClick = (e) => {
        if (halftone && !reduced) {
          const [x, y] = local(e);
          ws.rings.push({ x, y, r: 0, a: 0.9 });
        }
        wake();
      };
      // dots mode: push dots around the pointer; a press sends a shock ring
      const onDotMove = (e) => {
        if (reduced) return;
        [dm.px, dm.py] = local(e);
        wake();
      };
      const onDotLeave = () => {
        dm.px = dm.py = -1e5;
        wake();
      };
      const onDotDown = (e) => {
        if (reduced) return;
        const [x, y] = local(e);
        dm.ring = { x, y, t: performance.now() };
        wake();
      };
      const wordEvents = dotMode
        ? [["pointermove", onDotMove], ["pointerleave", onDotLeave], ["pointerdown", onDotDown]]
        : [["pointermove", onWordMove], ["pointerleave", onWordLeave], ["click", onWordClick]];
      for (const [type, fn] of wordEvents) box.addEventListener(type, fn);

      const ro = new ResizeObserver(() => {
        measureOrbit();
        measureMark();
      });
      ro.observe(this._svg);
      ro.observe(box);
      measureOrbit();
      measureMark();
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => alive && measureMark());

      this._stop = () => {
        alive = false;
        cancelAnimationFrame(raf);
        cancelAnimationFrame(blurbRaf);
        stopType();
        io.disconnect();
        spy.disconnect();
        ro.disconnect();
        orbit.removeEventListener("pointerdown", onDown);
        orbit.removeEventListener("pointermove", onMove);
        orbit.removeEventListener("pointerup", onUp);
        orbit.removeEventListener("pointercancel", onUp);
        for (const [type, fn] of wordEvents) box.removeEventListener(type, fn);
        this._wake = null;
        this._stop = null;
      };
    }
  }

  customElements.define("ticket-stub-footer", TicketStubFooter);
})();
