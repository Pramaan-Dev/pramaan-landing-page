# Turns a design's style.json into the UI builder's "look": colours per slot, fonts, radii, density, button and card style.
# The builder applies it as is (lookToDesign in ui-builder.html); style.md stays the fallback for older files.
# Run directly to check every design: python3 scripts/look.py [slug...]
import json, os, re, sys

HEX = re.compile(r'#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b')

def hexok(h):
    return isinstance(h, str) and bool(re.fullmatch(r'#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})', h.strip()))

def full(h):
    h = h.strip().lower()
    return '#' + ''.join(c * 2 for c in h[1:]) if len(h) == 4 else h

def lum(h):
    r, g, b = (int(full(h)[i:i + 2], 16) / 255 for i in (1, 3, 5))
    f = lambda c: c / 12.92 if c <= .03928 else ((c + .055) / 1.055) ** 2.4
    return .2126 * f(r) + .7152 * f(g) + .0722 * f(b)

def contrast(a, b):
    x, y = sorted((lum(a), lum(b)), reverse=True)
    return (x + .05) / (y + .05)

def sat(h):
    c = [int(full(h)[i:i + 2], 16) for i in (1, 3, 5)]
    return max(c) - min(c)

def mix(a, b, t):
    """a moved t of the way to b."""
    A, B = ([int(full(h)[i:i + 2], 16) for i in (1, 3, 5)] for h in (a, b))
    return '#' + ''.join(f'{round(x + (y - x) * t):02x}' for x, y in zip(A, B))

def font_name(s):
    """'Inter 700 with letter-spacing 0.7px' / 'Cormorant Garamond 300, or Libre Baskerville' -> the first font's name."""
    m = re.match(r"\s*['\"]?([A-Za-z][A-Za-z0-9 ]*?)(?=\s*(?:\d|,|\(|['\"]|\bor\b|\bwith\b|$))", s or '')
    return m and m.group(1).strip() or None

def px(v):
    m = re.match(r'\s*([\d.]+)\s*(px|rem|em)?', str(v or ''))
    if not m: return None
    n = float(m.group(1)) * (16 if m.group(2) in ('rem', 'em') else 1)
    return 999 if n >= 99 else round(n)

def first_hex(text, *words):
    """The first colour named next to one of the words ("#000000 fill", "text color is #fff")."""
    for w in words:
        m = re.search(rf'({HEX.pattern})[^.;]{{0,18}}\b{w}|\b{w}\b[^#.;]{{0,40}}({HEX.pattern})', text, re.I)
        if m: return full(m.group(1) or m.group(2))
    return None

def pick(cands, page, lo, hi, *prefer, strongest=False):
    """The colour whose contrast with the page is in [lo, hi]; a role matching an earlier `prefer` pattern wins.
    strongest: within a tier, the highest contrast first (main text over supporting text)."""
    ok = [c for c in cands if lo <= contrast(c['hex'], page) <= hi]
    if strongest: ok.sort(key=lambda c: -contrast(c['hex'], page))
    for p in prefer:
        named = [c for c in ok if re.search(p, c['role'], re.I)]
        if named: return named[0]
    return (ok or [None])[0]

def look(j):
    cols = [dict(c, hex=full(c['hex']), role=f"{c.get('name', '')} {c.get('role', '')}") for c in j.get('colors') or [] if hexok(c.get('hex'))]
    surf = [dict(s, hex=full(s['hex']), role=f"{s.get('name', '')} {s.get('purpose', '')}") for s in j.get('surfaces') or [] if hexok(s.get('hex'))]
    neut = [c for c in cols if c.get('group') == 'neutral'] or cols
    if not cols: return None
    src = {}
    # Page: the file's lowest surface, else a neutral named as the page, else the extreme neutral for the theme;
    # each only if it suits the theme (some files call a mid-grey photo overlay their "canvas").
    th = j.get('theme')
    fits = lambda c: th not in ('light', 'dark') and (lum(c['hex']) < .18 or lum(c['hex']) > .4) or (lum(c['hex']) < .18 if th == 'dark' else lum(c['hex']) > .4)
    page = next((s for s in sorted(surf, key=lambda s: s.get('level', 9)) if fits(s)), None) if surf and fits(min(surf, key=lambda s: s.get('level', 9))) else None
    page = page or next((c for c in neut if re.search(r'\b(page|canvas|background|backdrop|ground)\b', c['role'], re.I) and fits(c)), None) \
        or (min if th == 'dark' else max)(neut, key=lambda c: lum(c['hex']))
    P = page['hex']; src['bg'] = page; dark = lum(P) < .18
    main_text = r'\b(main|primary|base) text', r'\bbody text|headings? and (body|text)|\bheadline text|\bheading text'
    # a coloured main text (plum, navy) counts when the file says so; otherwise only neutrals are text
    lesser = lambda c: re.search(r'\b(subdued|muted|secondary|supporting|hint|tertiary|third|quiet|faint)\b', c['role'][:50], re.I)
    text = pick([c for c in cols if re.search('|'.join(main_text), c['role'], re.I) and not lesser(c)], P, 4.5, 99, *main_text, strongest=True) \
        or pick(neut, P, 4.5, 99, r'\b(text|heading|body|copy|ink|type)\b', strongest=True)
    card = pick([s for s in surf if s.get('level', 0) > 0] + neut, P, 1.0, 1.35, r'\bcards?\b', r'modal|panel|container|elevated|raised|surface')
    if card and card['hex'] == P:   # same as the page: fine (borders separate cards), but only if the file says cards
        card = card if re.search(r'\bcards?\b', card['role'], re.I) else None
    taken = lambda *cs: {P, *(c['hex'] for c in cs if c)}
    line = pick([c for c in neut if c['hex'] not in taken(card)], P, 1.1, 3.2, r'border|divider|outline|stroke|separator|hairline', r'\brule|\bline')
    soft = pick([c for c in surf[1:] + neut if c['hex'] not in taken(card, line)], P, 1.02, 1.5, r'subtle|soft|hover|muted fill|wash|tint', r'second|secondary surface|section')
    muted = pick([c for c in neut if c['hex'] not in taken(text)], P, 3.0, 9.0, r'secondary|muted|supporting|caption|subtle|meta|label|quiet|placeholder', r'second|third')
    for k, v in (('text', text), ('card', card), ('soft', soft), ('line', line), ('muted', muted)):
        if v: src[k] = v
    # Primary: the main button's fill, else a colour named for calls to action, else an outline button's colour,
    # else the brand colour, else an accent, else the text colour (monochrome sites).
    # Only buttons the file describes with a colour count; the main one is named primary / CTA / main action.
    btns = [c for c in j.get('components') or [] if re.search(r'button|\bcta\b', c.get('name', ''), re.I) and HEX.search(c.get('description', ''))]
    main = next((b for b in btns if re.search(r'primary|\bcta\b|main|call to action|sign ?up|get started', f"{b.get('name')} {b.get('role')}", re.I)), None)
    desc = (main or {}).get('description', '')
    nofill = re.search(r'transparent|no fill|without (a )?fill|no background', desc, re.I)
    fill = None if nofill else first_hex(desc, 'fill', 'filled', 'background', 'bg')
    outline = bool(main) and not (fill and fill != P) and bool(nofill or re.search(r'outline|ghost|text only', main['name'], re.I))
    fg = first_hex(desc, 'text', 'label', 'color')
    prim, why = None, ''
    # A black/grey main button loses to a brand colour the file says is for buttons or actions (orange "action colour").
    act = next((c for c in cols if c.get('group') == 'brand' and sat(c['hex']) > 40 and contrast(c['hex'], P) >= 1.1
                and re.search(r'button|\baction|\bcta\b|call[- ]to[- ]action', c['role'], re.I)), None)
    # any fill that isn't the page counts: a lime button on a pale page stands out by colour, not lightness
    if fill and fill != P and not (act and sat(fill) < 20): prim, why = fill, f"{main['name']}: {desc[:110]}"
    if not prim and act: prim, why = act['hex'], f"{act['name']}: {act['role'][len(act.get('name', '')):].strip()[:110]}"
    if not prim and outline and fg and contrast(fg, P) >= 3: prim, why = fg, f"{main['name']}: {desc[:110]}"
    else: outline = outline and prim == fg
    if not prim:   # a colour the file names as the call-to-action colour (lime on white counts: the label goes dark)
        c = next((c for c in cols if c.get('group') != 'neutral' and c['hex'] != P
                  and re.search(r'call[- ]to[- ]action|\bcta\b|primary (button|action)|main action', c['role'], re.I)), None)
        if c: prim, why = c['hex'], f"{c['name']}: {c['role'][len(c.get('name', '')):].strip()[:110]}"
    if not prim:
        for g in ('brand', 'accent'):
            c = max((c for c in cols if c.get('group') == g and contrast(c['hex'], P) >= 1.1), key=lambda c: sat(c['hex']), default=None)
            if c: prim, why = c['hex'], f"{c['name']}: {c['role'][len(c.get('name', '')):].strip()[:110]}"; break
    if not prim and text: prim, why = text['hex'], 'Text colour (no brand colour in the file)'
    pal = {k: v['hex'] for k, v in src.items()}
    srcs = {('page' if k == 'bg' else k): f"{v.get('name', '')}: {v['role'][len(v.get('name', '')):].strip()}"[:140] for k, v in src.items()}
    # Slots the file doesn't name are mixed from its own page and text colours, so they match its tone
    # (the builder's stock greys look grafted on next to a warm or tinted palette).
    T = pal.get('text') or ('#ffffff' if dark else '#000000')
    for k, v in (('card', mix(P, '#ffffff', .06) if dark else P if lum(P) > .9 else mix(P, '#ffffff', .55)),
                 ('soft', mix(P, T, .06)), ('line', mix(P, T, .14)), ('muted', mix(T, P, .38))):
        if k not in pal: pal[k] = v; srcs[k] = 'Mixed from the page and text colours (not in the file)'
    if prim:
        pal['primary'] = prim; srcs['primary'] = why[:140]
        if fill and not outline and fg and prim == fill and contrast(fg, prim) >= 3: pal['primaryFg'] = fg
        if outline: pal['primaryFg'] = prim
    # Fonts: body = the font whose role names body/UI text (else the first); heading = one whose role names display/headings.
    ty = [t for t in j.get('typography') or [] if t.get('family')]
    body = next((t for t in ty if re.search(r'\bbody|interface|\bui\b|paragraph|running text|navigation|most', t.get('role', ''), re.I)), ty[0] if ty else None)
    head = next((t for t in ty if t is not body and re.search(r'display|heading|headline|title|hero', t.get('role', ''), re.I)), None)
    if not head and body and re.search(r'display|heading|headline', body.get('role', ''), re.I): head = body
    w = lambda t: next((int(n) for n in re.findall(r'\d{3}', str(t.get('weight', '')))), None) if t else None
    track = None
    if head:   # letter spacing at the largest heading size, as em
        m = re.findall(r'(-?[\d.]+)em at (\d+)px', head.get('letterSpacing') or '')
        if m: track = float(max(m, key=lambda x: int(x[1]))[0])
    # Radii: per element where the file gives them; "default/all/general" fills the rest.
    R = {k.lower(): px(v) for k, v in ((j.get('spacing') or {}).get('radius') or {}).items()}
    get = lambda *ks: next((R[k] for k in ks if R.get(k) is not None), None)
    base = get('default', 'all', 'general', 'base', 'cards', 'card', 'buttons', 'button')
    radius = {'base': base, 'btn': get('buttons', 'button', 'cta'), 'card': get('cards', 'card', 'panels', 'containers'),
              'input': get('inputs', 'input', 'fields', 'form'), 'tag': get('tags', 'tag', 'badges', 'badge', 'chips', 'pills', 'pill')}
    cards = ' '.join(c.get('description', '') for c in j.get('components') or [] if re.search(r'card', c.get('name', ''), re.I))
    shadow = None if not cards else not re.search(r'no (box[- ])?shadow|without (a )?shadow|flat', cards, re.I) and bool(re.search(r'shadow', cards, re.I))
    return {
        'mode': 'dark' if dark else 'light', 'pal': pal, 'src': srcs,
        'font': body and body['family'], 'sub': body and font_name(body.get('substitute')), 'bodyWeight': w(body),
        'head': head and head is not body and head['family'] or None, 'headSub': head and font_name(head.get('substitute')),
        'headWeight': w(head), 'headTrack': track,
        'radius': {k: v for k, v in radius.items() if v is not None},
        'density': {'compact': .88, 'comfortable': 1, 'spacious': 1.12}.get((j.get('spacing') or {}).get('density'), 1),
        'btn': 'outline' if outline else 'filled', 'cardShadow': shadow,
    }

if __name__ == '__main__':
    R = '/Users/yogi/Projects/pramaan-capability-lab/designs/'
    slugs = sys.argv[1:] or [d for d in sorted(os.listdir(R)) if os.path.exists(R + d + '/style.json')]
    n = bad = 0; miss = {}
    for s in slugs:
        L = look(json.load(open(R + s + '/style.json')))
        if len(sys.argv) > 1: print(s, json.dumps(L, indent=1)); continue
        n += 1
        if not L: bad += 1; continue
        for k in ('text', 'card', 'line', 'muted', 'soft', 'primary', 'primaryFg'):
            if k not in L['pal'] or k in L['src'] and L['src'][k].startswith('Mixed'): miss[k] = miss.get(k, 0) + 1
        assert L['sub'] is None or re.fullmatch(r'[A-Za-z][A-Za-z0-9 ]*', L['sub']), (s, L['sub'])
        p = L['pal']
        if 'text' in p and contrast(p['text'], p['bg']) < 4.5: bad += 1
    if len(sys.argv) == 1:
        print(f'{n} designs | no look or unreadable text: {bad} | slot not in the file (mixed, or builder default): {miss}')
        assert font_name('Inter 700 with letter-spacing 0.7px') == 'Inter' and font_name('Cormorant Garamond 300, or Libre') == 'Cormorant Garamond'
        assert mix('#000000', '#ffffff', .5) == '#808080'
