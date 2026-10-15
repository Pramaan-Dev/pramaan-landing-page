/*
 * <lanyard-badge> — reusable badge on a lanyard.
 *
 * Two strands come down from above and meet at a side-release buckle; a short
 * strap and a split ring hold the card. The strap is a verlet rope drawn as a
 * printed ribbon on a 2D canvas. The card is turned in 3D with CSS; both faces
 * are drawn on canvas from the badge details, so what you see is exactly what
 * the PNG export produces.
 *
 * Drag the card and the strap pulls taut; flick it and it spins on the ring;
 * tap it (or press Enter) to flip it over.
 *
 * Structure/physics adapted from the "Lanyard Badge" React reference, ported
 * to a dependency-free custom element. Colours and fonts come from the
 * Pramaan design tokens; the ornament is the Pramaan ring-and-dot mark.
 *
 * Usage:
 *   <link rel="stylesheet" href="components/lanyard-badge.css">
 *   <script src="components/lanyard-badge.js" defer></script>
 *   <lanyard-badge heading="Founding Member" name="Asha Rao" role="Product"
 *                  number="7" year="2026" wash="gold,coral" ink="gold"></lanyard-badge>
 *
 * Attributes (all optional, all live):
 *   heading (badge title, e.g. "Founding Member"), name, role, number, year
 *   strap-text   serif line printed along the strap (default "keep the proof")
 *   strap-label  mono label on the strap (default "<TITLE> · <YEAR>")
 *   wash         one or two palette token names for the front wash (e.g. "gold,coral")
 *   ink          palette token name for the strap print (default "parchment")
 *   ornament     "seal" (Pramaan mark, halftone) or "mandala" (line-art mandala)
 *   card-width   px (default 260; height is 3:2)
 *   flip-button  "false" hides the Show back / Show front button
 *
 * Methods: flip(), badgeId(), toBlob(face = "front", scale = 4) → Promise<Blob>,
 *          download(face, filename)
 * Events:  "badgeflip" (detail: { back: boolean })
 */
(() => {
  if (customElements.get("lanyard-badge")) return;

  // ---- physics ------------------------------------------------------------

  /** Verlet step. `w` is inverse mass; 0 pins a point. */
  const integrate = (pts, dt, gravity, damping) => {
    for (const p of pts) {
      if (!p.w) continue;
      const vx = (p.x - p.px) * damping;
      const vy = (p.y - p.py) * damping;
      p.px = p.x;
      p.py = p.y;
      p.x += vx;
      p.y += vy + gravity * dt * dt;
    }
  };

  /** Relax distance constraints, heavier points moving less. */
  const solve = (pts, links, iterations) => {
    for (let k = 0; k < iterations; k++) {
      for (const [i, j, rest] of links) {
        const a = pts[i];
        const b = pts[j];
        const ws = a.w + b.w;
        if (!ws) continue;
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const d = Math.hypot(dx, dy) || 1e-6;
        const f = (d - rest) / (d * ws);
        a.x += dx * f * a.w;
        a.y += dy * f * a.w;
        b.x -= dx * f * b.w;
        b.y -= dy * f * b.w;
      }
    }
  };

  /** The card's turn on the ring: a spring back to `target`, plus `drive`. */
  const spinStep = (s, target, dt, drive) => {
    s.v += (-(s.a - target) * 18 - s.v * 3.2 + drive) * dt;
    s.a += s.v * dt;
  };

  const swingAngle = (top, bottom) => Math.atan2(bottom.x - top.x, bottom.y - top.y);

  // ---- helpers ------------------------------------------------------------

  const B32 = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  /** Deterministic badge ID from the details (FNV-1a, two rounds). A checksum, not a signature. */
  const badgeId = (s) => {
    let h1 = 0x811c9dc5;
    let h2 = 0x01000193;
    for (let i = 0; i < s.length; i++) {
      const c = s.charCodeAt(i);
      h1 = Math.imul(h1 ^ c, 0x01000193) >>> 0;
      h2 = Math.imul(h2 ^ (c + i), 0x85ebca6b) >>> 0;
    }
    let out = "";
    for (const h of [h1, h2]) for (let i = 0; i < 4; i++) out += B32[(h >>> (i * 5)) & 31];
    return "PRM-" + out.slice(0, 4) + "-" + out.slice(4);
  };

  const hexToRgb = (hex) => {
    const m = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec((hex || "").trim());
    if (!m) return [0, 0, 0];
    const h = m[1].length === 3 ? m[1].replace(/./g, (c) => c + c) : m[1];
    return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  };
  const rgba = (hex, a) => "rgba(" + hexToRgb(hex).join(",") + "," + a + ")";

  /** Greedy word wrap. */
  const wrap = (ctx, text, maxW) => {
    const words = String(text || "").split(/\s+/).filter(Boolean);
    const lines = [];
    let line = "";
    for (const w of words) {
      const next = line ? line + " " + w : w;
      if (line && ctx.measureText(next).width > maxW) {
        lines.push(line);
        line = w;
      } else line = next;
    }
    if (line) lines.push(line);
    return lines;
  };

  /** The Pramaan mark: ring + dot. */
  const seal = (ctx, cx, cy, r, color) => {
    ctx.save();
    ctx.strokeStyle = ctx.fillStyle = color;
    ctx.lineWidth = r * 0.22;
    ctx.beginPath();
    ctx.arc(cx, cy, r * 0.89, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy, r * 0.36, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };

  /** The reference's mandala: rings, petals, a bead circle and a flower in the middle. */
  const mandala = (ctx, cx, cy, r) => {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.lineWidth = Math.max(0.8, r * 0.018);
    for (const k of [1, 0.9, 0.62, 0.26]) {
      ctx.beginPath();
      ctx.arc(0, 0, r * k, 0, Math.PI * 2);
      ctx.stroke();
    }
    for (let i = 0; i < 16; i++) {
      ctx.save();
      ctx.rotate((i / 16) * Math.PI * 2);
      ctx.beginPath();
      ctx.ellipse(0, -r * 0.76, r * 0.07, r * 0.13, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.rotate(Math.PI / 16);
      ctx.beginPath();
      ctx.arc(0, -r * 0.95, r * 0.018, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    for (let i = 0; i < 8; i++) {
      ctx.save();
      ctx.rotate((i / 8) * Math.PI * 2);
      ctx.beginPath();
      ctx.moveTo(0, -r * 0.26);
      ctx.bezierCurveTo(r * 0.12, -r * 0.4, r * 0.1, -r * 0.52, 0, -r * 0.6);
      ctx.bezierCurveTo(-r * 0.1, -r * 0.52, -r * 0.12, -r * 0.4, 0, -r * 0.26);
      ctx.stroke();
      ctx.restore();
    }
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.07, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };

  /** The mark printed as halftone dots (cropped by the card edge). */
  const halftoneSeal = (ctx, w, h, cx, cy, r, gap, color) => {
    const mw = Math.ceil(w);
    const mh = Math.ceil(h);
    const mask = document.createElement("canvas");
    mask.width = mw;
    mask.height = mh;
    const m = mask.getContext("2d", { willReadFrequently: true });
    seal(m, cx, cy, r, "#000");
    const img = m.getImageData(0, 0, mw, mh).data;
    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    for (let y = gap / 2; y < h; y += gap) {
      for (let x = gap / 2; x < w; x += gap) {
        let sum = 0;
        for (const [ox, oy] of [[-0.25, -0.25], [0.25, -0.25], [-0.25, 0.25], [0.25, 0.25]]) {
          const sx = Math.min(mw - 1, Math.max(0, Math.round(x + ox * gap)));
          const sy = Math.min(mh - 1, Math.max(0, Math.round(y + oy * gap)));
          sum += img[(sy * mw + sx) * 4 + 3];
        }
        const cov = sum / (4 * 255);
        if (cov < 0.05) continue;
        const rr = Math.sqrt(cov) * gap * 0.56;
        ctx.moveTo(x + rr, y);
        ctx.arc(x, y, rr, 0, Math.PI * 2);
      }
    }
    ctx.fill();
    ctx.restore();
  };

  /** The printed strap, laid out along the canvas height; returns device-px canvas. */
  const makeStrap = (length, width, dpr, o) => {
    const c = document.createElement("canvas");
    c.width = Math.max(1, Math.round(width * dpr));
    c.height = Math.max(1, Math.round(length * dpr));
    const ctx = c.getContext("2d");
    // strap space: x runs down the strap, y runs across it
    ctx.setTransform(0, dpr, -dpr, 0, c.width, 0);
    ctx.fillStyle = o.color;
    ctx.fillRect(0, 0, length, width);
    ctx.strokeStyle = ctx.fillStyle = o.ink;
    if (!o.plain) {
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, length, width);
      ctx.clip();
      ctx.textBaseline = "middle";
      const serif = "400 " + Math.round(width * 0.52) + "px " + o.serif;
      const mono = "500 " + Math.round(width * 0.3) + "px " + o.mono;
      ctx.font = serif;
      const textW = ctx.measureText(o.text).width;
      ctx.font = mono;
      const label = o.label ? "·  " + o.label + "  ·" : "";
      const labelW = label ? ctx.measureText(label).width : 0;
      const gap = width * 0.7;
      let x = width * 0.6;
      let flip = 1;
      while (x < length) {
        if (o.ornament === "mandala") {
          // a mandala too big for the strap, so only an arc of it shows
          ctx.globalAlpha = 0.55;
          mandala(ctx, x + width * 1.3, width * (0.5 + flip * 0.28), width * 1.35);
          x += width * 2.8;
          flip = -flip;
        } else {
          ctx.globalAlpha = 0.9;
          seal(ctx, x + width * 0.3, width / 2, width * 0.28, o.ink);
          x += width * 0.6 + gap;
        }
        ctx.globalAlpha = 0.95;
        ctx.font = serif;
        ctx.fillText(o.text, x, width * 0.5);
        x += textW + gap;
        if (label) {
          ctx.font = mono;
          ctx.fillText(label, x, width * 0.53);
          x += labelW + gap;
        }
      }
      ctx.restore();
    }
    // woven edges catch a little light
    ctx.globalAlpha = 0.35;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, 1.5);
    ctx.lineTo(length, 1.5);
    ctx.moveTo(0, width - 1.5);
    ctx.lineTo(length, width - 1.5);
    ctx.stroke();
    return c;
  };

  // ---- card faces (logical px; caller scales) -------------------------------

  const drawFront = (ctx, w, h, d, col, f) => {
    const pad = w * 0.085;
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(0, 0, w, h, w * 0.06);
    ctx.clip();
    ctx.fillStyle = col.card;
    ctx.fillRect(0, 0, w, h);

    // pastel washes (decorative, from the palette)
    const spots = [[w * 0.98, h * 0.08, w * 0.8], [w * 0.02, h * 0.98, w * 0.85]];
    d.wash.forEach((c, i) => {
      const [x, y, r] = spots[i % 2];
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, rgba(c, 0.75));
      g.addColorStop(1, rgba(c, 0));
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    });

    if (d.ornament === "mandala") {
      // line-art mandalas, cropped by the edges
      ctx.save();
      ctx.strokeStyle = ctx.fillStyle = rgba(col.ink, 0.85);
      mandala(ctx, w * 1.02, h * 0.7, w * 0.5);
      ctx.globalAlpha = 0.55;
      mandala(ctx, -w * 0.04, h * 1.02, w * 0.3);
      ctx.restore();
    } else {
      // the proof seal, printed in halftone and cropped by the edge
      halftoneSeal(ctx, w, h, w * 0.84, h * 0.76, w * 0.4, w / 44, rgba(col.ink, 0.9));
    }

    // header: mark + wordmark, number
    const hy = h * 0.135;
    seal(ctx, pad + w * 0.03, hy, w * 0.03, col.ink);
    ctx.fillStyle = col.ink;
    ctx.textBaseline = "middle";
    ctx.font = "400 " + w * 0.068 + "px " + f.serif;
    ctx.fillText("pramaan", pad + w * 0.075, hy + w * 0.002);
    ctx.font = "500 " + w * 0.04 + "px " + f.mono;
    ctx.textAlign = "right";
    ctx.fillText(d.number ? "NO. " + d.number : "", w - pad, hy);
    ctx.textAlign = "left";

    // title
    ctx.textBaseline = "alphabetic";
    const ts = w * 0.135;
    ctx.font = "400 " + ts + "px " + f.serif;
    const lines = wrap(ctx, d.title, w - pad * 2);
    let y = h * 0.3;
    for (const line of lines.slice(0, 3)) {
      ctx.fillText(line, pad, y);
      y += ts * 1.05;
    }
    ctx.font = "500 " + w * 0.036 + "px " + f.mono;
    ctx.fillStyle = col.graphite;
    ctx.fillText("ISSUED BY PRAMAAN · " + (d.year || ""), pad, y + w * 0.01);

    // footer: a short rule and the line (the ornament owns the right corner;
    // the badge ID lives on the back)
    ctx.fillStyle = col.ink;
    ctx.fillRect(pad, h * 0.9, w * 0.32, 1);
    ctx.font = "500 " + w * 0.036 + "px " + f.mono;
    ctx.textBaseline = "middle";
    ctx.fillText("KEEP THE PROOF", pad, h * 0.945);
    ctx.restore();
  };

  const drawBack = (ctx, w, h, d, col, f) => {
    const pad = w * 0.085;
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(0, 0, w, h, w * 0.06);
    ctx.clip();
    ctx.fillStyle = col.back;
    ctx.fillRect(0, 0, w, h);
    if (d.ornament === "mandala") {
      ctx.save();
      ctx.strokeStyle = ctx.fillStyle = rgba(col.ink, 0.35);
      mandala(ctx, w * 0.96, h * 0.13, w * 0.3);
      ctx.restore();
    }

    ctx.fillStyle = col.graphite;
    ctx.textBaseline = "alphabetic";
    ctx.font = "500 " + w * 0.036 + "px " + f.mono;
    ctx.fillText("ISSUED TO", pad, h * 0.19);

    ctx.fillStyle = col.ink;
    const ns = w * 0.115;
    ctx.font = "400 " + ns + "px " + f.serif;
    let y = h * 0.19 + ns * 1.15;
    for (const line of wrap(ctx, d.name || "Your name", w - pad * 2).slice(0, 2)) {
      ctx.fillText(line, pad, y);
      y += ns * 1.05;
    }
    ctx.font = "400 " + w * 0.048 + "px " + f.mono;
    ctx.fillStyle = col.graphite;
    for (const line of wrap(ctx, d.role, w - pad * 2).slice(0, 2)) {
      ctx.fillText(line, pad, y + w * 0.005);
      y += w * 0.062;
    }

    // receipt rows
    const rows = [
      ["TIER", d.title],
      ["MEMBER NO.", d.number ? "#" + d.number : "—"],
      ["SINCE", d.year || "—"],
      ["BADGE ID", d.id],
    ];
    let ry = Math.max(y + w * 0.06, h * 0.5);
    const rh = h * 0.062;
    ctx.textBaseline = "middle";
    for (const [k, v] of rows) {
      ctx.fillStyle = col.graphite;
      ctx.font = "500 " + w * 0.034 + "px " + f.mono;
      ctx.textAlign = "left";
      ctx.fillText(k, pad, ry + rh / 2);
      ctx.fillStyle = col.ink;
      ctx.font = "400 " + w * 0.042 + "px " + f.mono;
      ctx.textAlign = "right";
      ctx.fillText(v, w - pad, ry + rh / 2);
      ctx.strokeStyle = rgba(col.ink, 0.25);
      ctx.setLineDash([2, 3]);
      ctx.beginPath();
      ctx.moveTo(pad, ry + rh);
      ctx.lineTo(w - pad, ry + rh);
      ctx.stroke();
      ctx.setLineDash([]);
      ry += rh;
    }
    ctx.textAlign = "left";

    // closing band
    const by = h * 0.84;
    ctx.fillStyle = col.ink;
    ctx.fillRect(0, by, w, h - by);
    ctx.fillStyle = col.card;
    ctx.font = "400 " + w * 0.07 + "px " + f.serif;
    ctx.fillText("Keep the proof.", pad, by + (h - by) / 2);
    seal(ctx, w - pad - w * 0.035, by + (h - by) / 2, w * 0.035, col.card);
    ctx.restore();
  };

  // ---- element ------------------------------------------------------------

  class LanyardBadge extends HTMLElement {
    static get observedAttributes() {
      return ["heading", "name", "role", "number", "year", "strap-text", "strap-label", "wash", "ink", "ornament", "card-width", "flip-button"];
    }

    connectedCallback() {
      if (!this._built) this._build();
      this._start();
    }

    disconnectedCallback() {
      if (this._stop) this._stop();
    }

    attributeChangedCallback(name) {
      if (!this._built || !this.isConnected) return;
      if (name === "card-width") {
        this._build();
        this._start();
        return;
      }
      if (name === "flip-button") this._flipBtn.hidden = this.getAttribute("flip-button") === "false";
      this._paintFaces();
      if (this._restrap) this._restrap();
    }

    /** Palette colours resolved from the design tokens. */
    _colors() {
      const cs = getComputedStyle(this);
      const t = (n, fb) => cs.getPropertyValue("--color-" + n).trim() || fb;
      return {
        t,
        card: t("parchment", "#f6f3f1"),
        back: t("periwinkle-mist", "#cfdaf5"),
        ink: t("off-black", "#242424"),
        graphite: t("graphite", "#4e4d4d"),
      };
    }

    _fonts() {
      const cs = getComputedStyle(this);
      return {
        serif: cs.getPropertyValue("--font-serif").trim() || "Georgia, serif",
        mono: cs.getPropertyValue("--font-mono").trim() || "ui-monospace, monospace",
      };
    }

    _data() {
      const a = (n, fb = "") => (this.getAttribute(n) ?? fb).trim();
      const col = this._colors();
      const title = a("heading", "Founding Member");
      const year = a("year", String(new Date().getFullYear()));
      const number = a("number").replace(/^#/, "");
      const name = a("name");
      const d = {
        title,
        name,
        role: a("role"),
        number: number ? number.padStart(4, "0") : "",
        year,
        strapText: a("strap-text", "keep the proof"),
        strapLabel: a("strap-label", (title + " · " + year).toUpperCase()),
        wash: a("wash", "gold,coral").split(",").map((s) => s.trim()).filter(Boolean).slice(0, 2).map((n) => col.t(n, "#ecda98")),
        ink: col.t(a("ink", "parchment"), "#f6f3f1"),
        ornament: a("ornament", "seal") === "mandala" ? "mandala" : "seal",
      };
      d.id = badgeId([title, name, d.number, year].join("|").toLowerCase());
      return d;
    }

    badgeId() {
      return this._data().id;
    }

    _build() {
      if (this._stop) this._stop();
      this._built = true;
      const cw = Math.max(160, parseInt(this.getAttribute("card-width"), 10) || 260);
      const ch = Math.round(cw * 1.5);
      const ringR = Math.max(7, Math.round(cw * 0.036));
      const clipH = Math.round(cw * 0.1);
      this._dims = { cw, ch, ringR, clipH };
      this.style.setProperty("--lyd-cw", cw + "px");
      this.style.setProperty("--lyd-ch", ch + "px");
      this.style.setProperty("--lyd-ring", ringR + "px");
      this.style.setProperty("--lyd-clip", clipH + "px");

      this.innerHTML =
        '<canvas class="lyd-canvas" aria-hidden="true"></canvas>' +
        '<div class="lyd-card" role="button" tabindex="0" aria-pressed="false">' +
        '<span class="lyd-clip" aria-hidden="true"></span>' +
        '<div class="lyd-inner">' +
        '<div class="lyd-face lyd-front"><canvas></canvas><span class="lyd-slot"></span><span class="lyd-shade"></span></div>' +
        '<div class="lyd-face lyd-back"><canvas></canvas><span class="lyd-slot"></span><span class="lyd-shade"></span></div>' +
        "</div></div>" +
        '<button type="button" class="lyd-flip" aria-pressed="false">' +
        '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"/><path d="M3 21v-5h5"/></svg>' +
        "<span>Show back</span></button>";
      this._canvas = this.querySelector(".lyd-canvas");
      this._card = this.querySelector(".lyd-card");
      this._inner = this.querySelector(".lyd-inner");
      this._faceCanvas = {
        front: this.querySelector(".lyd-front canvas"),
        back: this.querySelector(".lyd-back canvas"),
      };
      this._flipBtn = this.querySelector(".lyd-flip");
      this._flipBtn.hidden = this.getAttribute("flip-button") === "false";
      this._flipBtn.addEventListener("click", () => this.flip());
      this._card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.flip();
        }
      });
      this._back = !!this._back;
      this._paintFaces();
    }

    /** Draw one face into a canvas at `scale` device px per css px. */
    _renderFace(canvas, face, scale) {
      const { cw, ch } = this._dims;
      canvas.width = Math.round(cw * scale);
      canvas.height = Math.round(ch * scale);
      const ctx = canvas.getContext("2d");
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      ctx.clearRect(0, 0, cw, ch);
      const d = this._data();
      (face === "back" ? drawBack : drawFront)(ctx, cw, ch, d, this._colors(), this._fonts());
      return d;
    }

    _paintFaces() {
      if (!this._faceCanvas) return;
      const scale = Math.min(window.devicePixelRatio || 1, 2) * 1.5;
      this._renderFace(this._faceCanvas.front, "front", scale);
      const d = this._renderFace(this._faceCanvas.back, "back", scale);
      this._card.setAttribute(
        "aria-label",
        d.title + " badge" + (d.name ? " for " + d.name : "") + (d.role ? ", " + d.role : "") +
          (d.number ? ", member " + d.number : "") + ". Badge ID " + d.id + ". Drag to swing, press Enter to flip."
      );
    }

    /** PNG of one face (front/back) at `scale` × card size. */
    toBlob(face = "front", scale = 4) {
      const c = document.createElement("canvas");
      this._renderFace(c, face, scale);
      return new Promise((resolve) => c.toBlob(resolve, "image/png"));
    }

    async download(face = "front", filename) {
      const blob = await this.toBlob(face);
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename || "pramaan-badge-" + face + ".png";
      document.body.append(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    flip() {
      this._back = !this._back;
      if (this._setSpinTarget) this._setSpinTarget(this._back ? Math.PI : 0);
      this._card.setAttribute("aria-pressed", String(this._back));
      this._flipBtn.setAttribute("aria-pressed", String(this._back));
      this._flipBtn.querySelector("span").textContent = this._back ? "Show front" : "Show back";
      this.dispatchEvent(new CustomEvent("badgeflip", { detail: { back: this._back } }));
    }

    _start() {
      if (this._stop) this._stop();
      const root = this;
      const canvas = this._canvas;
      const card = this._card;
      const inner = this._inner;
      const ctx = canvas.getContext("2d");
      const { cw, ch, ringR, clipH } = this._dims;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const sw = Math.max(14, Math.round(cw * 0.1)); // strap width
      const lowLen = sw * 2.2; // buckle to ring
      const arm = ringR * 2 + clipH + ch * 0.55; // ring to the card's centre of mass
      const N = 14;
      const STEP = 1 / 120;
      const GRAVITY = 2400;
      const ITER = 18;

      let pts = [];
      let links = [];
      let left = [], right = [], low = [];
      let iB = 0, iT = 0, iC = 0;
      let strandRest = 1;
      let dpr = 1, W = 1, H = 1;
      let strapTex = null, plainTex = null;
      const spin = { a: this._back ? Math.PI : 0, v: 0 };
      let spinTarget = spin.a;
      this._setSpinTarget = (t) => { spinTarget = t; };

      const add = (x, y, w) => {
        pts.push({ x, y, px: x, py: y, w });
        return pts.length - 1;
      };
      const strand = (from, to, n, slack) => {
        const a = pts[from];
        const b = pts[to];
        const rest = (Math.hypot(b.x - a.x, b.y - a.y) * slack) / n;
        const ids = [from];
        for (let i = 1; i < n; i++) ids.push(add(a.x + ((b.x - a.x) * i) / n, a.y + ((b.y - a.y) * i) / n, 1));
        ids.push(to);
        for (let i = 0; i < n; i++) links.push([ids[i], ids[i + 1], rest]);
        return { ids, rest };
      };

      const restrap = () => {
        const d = this._data();
        const col = this._colors();
        const f = this._fonts();
        const opts = { color: col.ink, ink: d.ink, text: d.strapText, label: d.strapLabel, serif: f.serif, mono: f.mono, ornament: d.ornament };
        strapTex = makeStrap(strandRest * N + 4, sw, dpr, opts);
        plainTex = makeStrap(lowLen + 4, sw * 0.8, dpr, { ...opts, plain: true });
      };
      this._restrap = () => { restrap(); draw(); };

      const build = () => {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        W = Math.max(1, root.clientWidth);
        H = Math.max(1, root.clientHeight);
        canvas.width = Math.round(W * dpr);
        canvas.height = Math.round(H * dpr);
        pts = [];
        links = [];
        const cx = W / 2;
        const spread = Math.min(W * 0.16, cw * 0.55);
        const top = -sw * 2;
        const bY = Math.max(H * 0.16, Math.min(H * 0.42, H - (lowLen + ringR * 2 + clipH + ch) - 28));
        const aL = add(cx - spread, top, 0);
        iB = add(cx, bY, 1.4);
        const l = strand(aL, iB, N, 1.03);
        const aR = add(cx + spread, top, 0);
        const r = strand(aR, iB, N, 1.03);
        iT = add(cx, bY + lowLen, 0.8);
        const lo = strand(iB, iT, 3, 1);
        iC = add(cx, bY + lowLen + arm, 0.25);
        links.push([iT, iC, arm]);
        left = l.ids;
        right = r.ids;
        low = lo.ids;
        strandRest = l.rest;
        restrap();
        if (reduced) {
          for (let i = 0; i < 900; i++) {
            integrate(pts, STEP, GRAVITY, 0.98);
            solve(pts, links, ITER);
          }
        } else {
          // enter mid-swing, as if someone just let go of it
          pts[iC].x += cw * 0.55;
          pts[iC].px = pts[iC].x - 2;
          spin.v = 5;
        }
      };

      // ---- drawing
      const ribbon = (ids, tex, rest, light) => {
        const Wt = tex.width;
        for (let i = 0; i < ids.length - 1; i++) {
          const a = pts[ids[i]];
          const b = pts[ids[i + 1]];
          const dx = (b.x - a.x) * dpr;
          const dy = (b.y - a.y) * dpr;
          const len = Math.hypot(dx, dy) || 1e-6;
          const tx = dx / len;
          const ty = dy / len;
          const nx = ty;
          const ny = -tx;
          const v0 = i * rest * dpr;
          const dv = rest * dpr;
          const k = len / dv;
          ctx.setTransform(nx, ny, tx * k, ty * k, a.x * dpr - (nx * Wt) / 2 - tx * k * v0, a.y * dpr - (ny * Wt) / 2 - ty * k * v0);
          const src = Math.min(dv + 1.5, tex.height - v0);
          if (src > 0) ctx.drawImage(tex, 0, v0, Wt, src, 0, v0, Wt, src);
          const shade = 0.22 * (1 - Math.max(0, nx * light));
          ctx.fillStyle = "rgba(0,0,0," + shade.toFixed(3) + ")";
          ctx.fillRect(0, v0, Wt, dv + 1);
        }
      };

      const metal = (x0, y0, x1, y1) => {
        const g = ctx.createLinearGradient(x0, y0, x1, y1);
        g.addColorStop(0, "#f4efe4");
        g.addColorStop(0.45, "#b9b0a0");
        g.addColorStop(0.55, "#8f8778");
        g.addColorStop(1, "#ece6da");
        return g;
      };

      const draw = () => {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (!strapTex || !plainTex || !pts.length) return;
        ctx.imageSmoothingEnabled = true;
        ribbon(left, strapTex, strandRest, -1);
        ribbon(right, strapTex, strandRest, 1);
        ribbon(low, plainTex, lowLen / 3, 0);

        // side-release buckle, turned to follow the short strap
        const B = pts[iB];
        const T = pts[iT];
        const ang = Math.atan2(T.x - B.x, T.y - B.y);
        const u = sw / 20;
        ctx.setTransform(dpr, 0, 0, dpr, B.x * dpr, B.y * dpr);
        ctx.rotate(-ang);
        ctx.shadowColor = "rgba(0,0,0,0.25)";
        ctx.shadowBlur = 6 * dpr;
        ctx.shadowOffsetY = 2 * dpr;
        ctx.fillStyle = metal(-16 * u, 0, 16 * u, 0);
        ctx.beginPath();
        ctx.roundRect(-15 * u, -14 * u, 30 * u, 17 * u, 3 * u);
        ctx.fill();
        ctx.beginPath();
        ctx.roundRect(-11 * u, 1 * u, 22 * u, 15 * u, [2 * u, 2 * u, 6 * u, 6 * u]);
        ctx.fill();
        ctx.shadowColor = "transparent";
        ctx.fillStyle = "rgba(40,36,30,0.55)";
        ctx.fillRect(-10 * u, -9 * u, 20 * u, 2.2 * u);
        ctx.fillRect(-5 * u, 6 * u, 10 * u, 3 * u);
        ctx.strokeStyle = "rgba(255,255,255,0.6)";
        ctx.lineWidth = 0.8 * u;
        ctx.beginPath();
        ctx.moveTo(-13 * u, -12.5 * u);
        ctx.lineTo(13 * u, -12.5 * u);
        ctx.stroke();

        // split ring
        ctx.setTransform(dpr, 0, 0, dpr, T.x * dpr, (T.y + ringR * 0.8) * dpr);
        ctx.lineWidth = Math.max(2.5, ringR * 0.38);
        ctx.strokeStyle = metal(-ringR, -ringR, ringR, ringR);
        ctx.beginPath();
        ctx.arc(0, 0, ringR, 0, Math.PI * 2);
        ctx.stroke();
      };

      const place = () => {
        const T = pts[iT];
        const C = pts[iC];
        const swing = swingAngle(T, C);
        card.style.transform =
          "translate3d(" + (T.x - cw / 2).toFixed(2) + "px," + (T.y + ringR).toFixed(2) + "px,0) rotate(" + (-swing).toFixed(4) + "rad)";
        inner.style.transform = "perspective(1100px) rotateY(" + spin.a.toFixed(4) + "rad)";
        const edge = 1 - Math.abs(Math.cos(spin.a));
        inner.style.setProperty("--lyd-dim", (edge * 0.5).toFixed(3));
        inner.style.setProperty("--lyd-shine", (50 + Math.sin(spin.a) * 70 + swing * 90).toFixed(1) + "%");
      };

      // ---- interaction
      let drag = null;
      const local = (e) => {
        const r = root.getBoundingClientRect();
        return [e.clientX - r.left, e.clientY - r.top];
      };
      const onDown = (e) => {
        if (e.button > 0) return;
        const [x, y] = local(e);
        const T = pts[iT];
        drag = { id: e.pointerId, ox: T.x - x, oy: T.y - y, tx: T.x, ty: T.y, sx: x, sy: y, moved: false };
        pts[iT].w = 0;
        card.setPointerCapture(e.pointerId);
        card.style.cursor = "grabbing";
      };
      const onMove = (e) => {
        if (!drag || e.pointerId !== drag.id) return;
        const [x, y] = local(e);
        drag.tx = x + drag.ox;
        drag.ty = y + drag.oy;
        if (Math.hypot(x - drag.sx, y - drag.sy) > 5) drag.moved = true;
      };
      const onUp = (e) => {
        if (!drag || e.pointerId !== drag.id) return;
        if (!drag.moved) this.flip();
        drag = null;
        pts[iT].w = 0.8;
        card.style.cursor = "grab";
      };
      card.addEventListener("pointerdown", onDown);
      card.addEventListener("pointermove", onMove);
      card.addEventListener("pointerup", onUp);
      card.addEventListener("pointercancel", onUp);

      // ---- loop (paused while off screen)
      let raf = 0;
      let acc = 0;
      let last = performance.now();
      let t = 0;
      let visible = true;
      const tick = (now) => {
        raf = 0;
        acc += Math.min(0.05, (now - last) / 1000);
        last = now;
        let steps = 0;
        while (acc >= STEP && steps < 8) {
          acc -= STEP;
          steps++;
          t += STEP;
          if (drag) {
            const T = pts[iT];
            T.px = T.x;
            T.py = T.y;
            T.x += (drag.tx - T.x) * 0.35;
            T.y += (drag.ty - T.y) * 0.35;
          }
          const C = pts[iC];
          if (!reduced && !drag) {
            // a draught in the room, so the badge is never perfectly still
            C.x += (22 * Math.sin(t * 0.7) + 12 * Math.sin(t * 1.9)) * STEP * STEP;
          }
          integrate(pts, STEP, GRAVITY, 0.992);
          solve(pts, links, ITER);
          const vx = (C.x - C.px) / STEP;
          spinStep(spin, spinTarget, STEP, vx * 0.03 + (reduced ? 0 : 0.6 * Math.sin(t * 0.5)));
        }
        draw();
        place();
        if (visible) raf = requestAnimationFrame(tick);
      };
      const wake = () => {
        if (!raf && visible) {
          last = performance.now();
          raf = requestAnimationFrame(tick);
        }
      };

      build();
      draw();
      place();
      wake();

      const ro = new ResizeObserver(() => {
        if (Math.abs(root.clientWidth - W) < 1 && Math.abs(root.clientHeight - H) < 1) return;
        build();
        draw();
        place();
      });
      ro.observe(root);
      const io = new IntersectionObserver(([e]) => {
        visible = e ? e.isIntersecting : true;
        if (visible) wake();
      });
      io.observe(root);

      let alive = true;
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
          if (!alive) return;
          this._paintFaces();
          restrap();
          draw();
        });
      }

      this._stop = () => {
        alive = false;
        cancelAnimationFrame(raf);
        ro.disconnect();
        io.disconnect();
        card.removeEventListener("pointerdown", onDown);
        card.removeEventListener("pointermove", onMove);
        card.removeEventListener("pointerup", onUp);
        card.removeEventListener("pointercancel", onUp);
        this._restrap = null;
        this._setSpinTarget = null;
        this._stop = null;
      };
    }
  }

  customElements.define("lanyard-badge", LanyardBadge);
})();
