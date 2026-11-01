# Cuts the mascot poses out of their near-white backgrounds and writes small transparent WebPs.
# Run: python3 -I scripts/build-mascot.py <folder of source PNGs>
# Background = everything joined to the image edge that is close to white; the belly stays because
# the dark outline closes it off. Output: public/mascot/<name>.webp, cropped, 2x display height.
import sys, pathlib
from PIL import Image, ImageDraw, ImageFilter

POSES = {  # output name: source file
    'host': 'Penguin event host with teal lanyard-1.png',
    'shopkeeper': 'Penguin Shopkeeper with a Coin Purse-9.png',
    'teacher': 'Penguin teacher with cap, robe, and book-3.png',
    'detective': 'Detective Penguin with Magnifying Glass-7.png',
}
HEIGHT = 440  # 2x the largest display height (220px)
KEY = (255, 0, 255)

src, out = pathlib.Path(sys.argv[1]), pathlib.Path(__file__).resolve().parent.parent / 'public' / 'mascot'
out.mkdir(parents=True, exist_ok=True)
for name, file in POSES.items():
    im = Image.open(src / file).convert('RGB')
    w, h = im.size
    keyed = im.copy()
    for x in range(0, w, 40):
        for y in (0, h - 1):
            if keyed.getpixel((x, y)) != KEY: ImageDraw.floodfill(keyed, (x, y), KEY, thresh=22)
    for y in range(0, h, 40):
        for x in (0, w - 1):
            if keyed.getpixel((x, y)) != KEY: ImageDraw.floodfill(keyed, (x, y), KEY, thresh=22)
    mask = Image.new('L', (w, h), 255)
    kp, mp = keyed.load(), mask.load()
    for y in range(h):
        for x in range(w):
            if kp[x, y] == KEY: mp[x, y] = 0
    mask = mask.filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(1.2))  # soft edge, no white fringe
    im.putalpha(mask)
    im = im.crop(mask.getbbox())
    im = im.resize((round(im.width * HEIGHT / im.height), HEIGHT), Image.LANCZOS)
    im.save(out / f'{name}.webp', quality=86, method=6)
    print(name, im.size, (out / f'{name}.webp').stat().st_size, 'bytes')
