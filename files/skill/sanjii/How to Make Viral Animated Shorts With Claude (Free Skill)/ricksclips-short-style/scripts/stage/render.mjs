// render.mjs - render a stage scene headless to MP4.
//   node render.mjs scene.json out.mp4
// Serves this folder over http (ES modules can't load from file://), opens
// stage in headless Chromium (WebGL2 via SwiftShader), renders every frame of
// every shot to PNG, then hands the sequences to shortkit.py for transitions,
// captions and H.264 encoding.
import http from 'http';
import fs from 'fs';
import path from 'path';
import { execSync, spawnSync } from 'child_process';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
let pw; try { pw = require('playwright'); } catch { pw = require(execSync('npm root -g').toString().trim() + '/playwright'); }

const [,, scenePath, outPath = 'out.mp4'] = process.argv;
if (!scenePath) { console.log('usage: node render.mjs scene.json out.mp4'); process.exit(1); }
const here = path.dirname(new URL(import.meta.url).pathname);
const spec = JSON.parse(fs.readFileSync(scenePath, 'utf8'));
const work = path.resolve(path.dirname(outPath), path.basename(outPath, '.mp4') + '_frames');
fs.rmSync(work, { recursive: true, force: true }); fs.mkdirSync(work, { recursive: true });

const types = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json' };
const server = http.createServer((req, res) => {
  const f = path.join(here, decodeURIComponent(req.url.split('?')[0]));
  if (!f.startsWith(here) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res);
}).listen(0);
const port = server.address().port;

const browser = await pw.chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
page.on('pageerror', e => { console.error('page error:', e.message); process.exit(2); });
await page.goto(`http://127.0.0.1:${port}/index.html`);
await page.waitForFunction(() => window.ready === true);
const counts = await page.evaluate(s => window.setup(s), spec);
const t0 = Date.now(); let done = 0; const total = counts.reduce((a, b) => a + b, 0);
const shotsOut = [];
for (let k = 0; k < counts.length; k++) {
  const dir = path.join(work, `shot_${String(k).padStart(2, '0')}`); fs.mkdirSync(dir);
  for (let i = 0; i < counts[k]; i++) {
    const url = await page.evaluate(([a, b]) => window.renderFrame(a, b), [k, i]);
    fs.writeFileSync(path.join(dir, `f_${String(i).padStart(4, '0')}.png`), Buffer.from(url.split(',')[1], 'base64'));
    if (++done % 30 === 0) console.log(`${done}/${total} frames, ${((Date.now() - t0) / done).toFixed(0)} ms/frame`);
  }
  const s = spec.shots[k]; shotsOut.push({ frames: dir, out: s.out });
}
await browser.close(); server.close();
const asm = { font: spec.font, captions: spec.captions, words_per_caption: spec.words_per_caption || 1,
              frames_per_caption: spec.frames_per_caption || 10, shots: shotsOut };
const asmPath = path.join(work, 'assemble.json'); fs.writeFileSync(asmPath, JSON.stringify(asm, null, 1));
const r = spawnSync('python3', [path.join(here, 'shortkit.py'), 'build', asmPath, outPath], { stdio: 'inherit' });
process.exit(r.status ?? 1);
