# Uploads the design library to Cloudflare R2 (bucket pramaan-ui-inspo, EU, served at design.pramaan.dev).
# Only what the site uses: _gallery.js, each design's thumbnail, full-page image (or previews) and style.js.
# Keys come from capabilities-lab .env (R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY) and are never printed.
# Usage: python3 scripts/upload-designs.py [--dry-run]
import json, os, shutil, subprocess, sys

DESIGNS = '/Users/yogi/Projects/pramaan-capability-lab/designs'
ENV = '/Users/yogi/Projects/capabilities-lab/.env'
STAGE = '/tmp/designs-upload'
ENDPOINT = 'https://f1e3faf422ed2d3ced52af3e6932336f.eu.r2.cloudflarestorage.com'
BUCKET = 'pramaan-ui-inspo'

env = dict(os.environ)
for line in open(ENV):
    if line.startswith(('R2_ACCESS_KEY_ID=', 'R2_SECRET_ACCESS_KEY=')):
        k, v = line.rstrip('\n').split('=', 1)
        env[k] = v.strip().strip('"')
if not env.get('R2_ACCESS_KEY_ID') or not env.get('R2_SECRET_ACCESS_KEY'):
    sys.exit('R2 keys empty: fill R2_ACCESS_KEY_ID and R2_SECRET_ACCESS_KEY in capabilities-lab .env, then rerun.')
env.update(AWS_ACCESS_KEY_ID=env['R2_ACCESS_KEY_ID'], AWS_SECRET_ACCESS_KEY=env['R2_SECRET_ACCESS_KEY'], AWS_DEFAULT_REGION='auto')

src = open(os.path.join(DESIGNS, '_gallery.js')).read()
D = json.loads(src[src.index('['):src.rindex(']') + 1])
hidden = set(json.load(open(os.path.join(DESIGNS, '_hidden.json'))))

shutil.rmtree(STAGE, ignore_errors=True); os.makedirs(STAGE)
keep = [d for d in D if d['s'] not in hidden]
for d in keep:
    shots = [d['f']] if d.get('f') else (d.get('pv') or [])
    os.makedirs(os.path.join(STAGE, d['s']))
    for f in {d['img'], 'style.js', *shots}:
        os.link(os.path.join(DESIGNS, d['s'], f), os.path.join(STAGE, d['s'], f))
with open(os.path.join(STAGE, '_gallery.js'), 'w') as out:
    out.write('window.DESIGNS = ' + json.dumps(keep, ensure_ascii=False, separators=(',', ':')) + ';\n')
print(f'staged {len(keep)} designs in {STAGE}')

cmd = ['aws', 's3', 'sync', STAGE, f's3://{BUCKET}/', '--endpoint-url', ENDPOINT, '--only-show-errors',
       '--cache-control', 'public, max-age=86400']
if '--dry-run' in sys.argv: cmd.append('--dryrun')
subprocess.run(cmd, env=env, check=True)
print('upload done' + (' (dry run)' if '--dry-run' in sys.argv else ''))
