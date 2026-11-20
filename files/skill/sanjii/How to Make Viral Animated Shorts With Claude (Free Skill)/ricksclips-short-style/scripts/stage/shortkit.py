#!/usr/bin/env python3
"""shortkit - base scene code for @ricksclips3000-style Shorts.

Builds a 1080x1920 / 30 fps Short from stills (or pre-rendered frames) using
the measured house rules:
  camera  : every shot moves; default push-in +6 %/s, 44 px/s median speed,
            "arrive fast, then settle" (first third ~1.57x the rest)
  cuts    : 8-frame dissolves and 10-frame whip (camera-move) transitions,
            no hard cuts
  captions: 1-2 words, centred at (540, 1350), new caption every 10 frames,
            white heavy sans with a plum-black outline
and checks a finished video against the same numbers.

Usage
  python3 shortkit.py build scene.json out.mp4
  python3 shortkit.py check out.mp4 [step]

scene.json
{
  "font": "/path/Montserrat-ExtraBold.ttf",          # any heavy sans
  "captions": "A man snuck into a family's house",    # optional
  "words_per_caption": 1,                             # 1 or 2
  "frames_per_caption": 10,
  "shots": [
    {"image": "shot1.png", "dur": 1.2, "zoom": 6, "pan": [-20, 30], "out": "whip"},
    {"image": "shot2.png", "dur": 1.6, "zoom": -8, "pan": [0, 0],   "out": "dissolve"},
    {"image": "shot3.png", "dur": 2.0}
  ]
}
  frames: folder of PNG frames to use as the shot instead of a still
          (what render.mjs writes from the three.js stage)
  dur   : seconds the shot is on screen, transitions included
  zoom  : %/s, + = push in, - = pull out             (default +6)
  pan   : [x, y] px/s of picture motion at 1080 wide;
          +x = picture moves right (camera pans left), +y = picture moves down
          (default: 44 px/s in a random direction)
  out   : transition into the next shot: "dissolve" (8 fr) | "whip" (10 fr)
          (default: whip in the first 3 s, then dissolve 40% / whip 60%)
"""
import json, math, random, subprocess, sys
import numpy as np
from PIL import Image, ImageDraw, ImageFont
from scipy.ndimage import uniform_filter1d

W, H, FPS = 1080, 1920, 30
LINE_RGB = (39, 25, 37)          # measured line-art colour #271925
CAPTION_Y = 1350                 # measured caption centre (of 1920)
CAPTION_PX = 70                  # font size giving a ~60 px glyph band
DISSOLVE_FR, WHIP_FR = 8, 10     # measured median transition lengths
ARRIVE_GAIN = 0.7                # speed boost early in a shot (58 vs 37 px/s)

# ---------------------------------------------------------------- camera math
def smoothstep(e0, e1, x):
    t = np.clip((x - e0) / (e1 - e0), 0, 1)
    return t * t * (3 - 2 * t)

def speed_profile(n):
    """Per-frame speed multiplier: 1 + 0.7 early, easing to 1.0 by 40% of the
    shot. Median is 1, so the shot's median speed equals the requested speed;
    mean of the first third / rest ~ 1.57, the measured 58/37 px/s ratio."""
    u = (np.arange(n) + 0.5) / n
    return 1 + ARRIVE_GAIN * (1 - smoothstep(0.15, 0.40, u))

def camera_path(n, pan=(0.0, 0.0), zoom_pct_s=6.0):
    """Returns per-frame (dx, dy, scale): picture offset in output px and zoom
    relative to frame 0.  Pan integrates v*m(t)*dt; zoom compounds:
    scale(t) = exp(ln(1 + z/100) * integral m dt)."""
    m = speed_profile(n)
    tt = np.cumsum(m) / FPS - m[0] / FPS          # "profile time", starts at 0
    dx = pan[0] * tt
    dy = pan[1] * tt
    scale = np.exp(math.log1p(zoom_pct_s / 100.0) * tt)
    return dx, dy, scale

# ---------------------------------------------------------------- rendering
def render_shot(img, n, pan, zoom):
    """Render n frames of a camera move over a still. A global cover scale g
    is raised until every frame's window stays inside the image."""
    img = img.convert("RGB")
    iw, ih = img.size
    dx, dy, s = camera_path(n, pan, zoom)
    g = max(W / iw, H / ih)
    for _ in range(200):
        ok = True
        for i in range(n):
            k = g * s[i]
            ww, wh = W / k, H / k
            cx = iw / 2 - dx[i] / k
            cy = ih / 2 - dy[i] / k
            if cx - ww / 2 < 0 or cy - wh / 2 < 0 or cx + ww / 2 > iw or cy + wh / 2 > ih:
                ok = False; break
        if ok: break
        g *= 1.02
    frames = []
    for i in range(n):
        k = g * s[i]
        cx = iw / 2 - dx[i] / k
        cy = ih / 2 - dy[i] / k
        # output (x, y) -> source (x/k + cx - W/2k, y/k + cy - H/2k)
        a = (1 / k, 0, cx - W / (2 * k), 0, 1 / k, cy - H / (2 * k))
        frames.append(np.asarray(img.transform((W, H), Image.AFFINE, a, Image.BICUBIC)))
    return frames

def dissolve(a, b):
    """Cross-dissolve the last DISSOLVE_FR frames of a into the first of b."""
    n = min(DISSOLVE_FR, len(a), len(b))
    out = []
    for i in range(n):
        t = (i + 1) / (n + 1)
        out.append((a[len(a) - n + i] * (1 - t) + b[i] * t).astype(np.uint8))
    return a[:len(a) - n] + out + b[n:]

def whip(a, b, direction=(1, 0)):
    """Camera-move transition: both shots slide past with eased motion and a
    directional blur, WHIP_FR frames overlapped."""
    n = min(WHIP_FR, len(a), len(b))
    out = []
    ddx, ddy = direction
    for i in range(n):
        t = smoothstep(0, 1, (i + 1) / (n + 1))
        off_a = (-ddx * t * W, -ddy * t * H)
        off_b = (ddx * (1 - t) * W, ddy * (1 - t) * H)
        canvas = Image.new("RGB", (W, H))
        for fr, off in ((a[len(a) - n + i], off_a), (b[i], off_b)):
            canvas.paste(Image.fromarray(fr), (int(off[0]), int(off[1])))
        blur = int(4 + 60 * math.sin(math.pi * (i + 1) / (n + 1)))
        arr = np.asarray(canvas).astype(np.float32)
        arr = uniform_filter1d(arr, size=blur, axis=1 if ddx else 0)
        out.append(arr.clip(0, 255).astype(np.uint8))
    return a[:len(a) - n] + out + b[n:]

def draw_captions(frames, text, font_path, words_per=1, frames_per=10):
    if not text: return frames
    import os
    cands = [font_path, os.path.join(os.path.dirname(os.path.abspath(__file__)), "fonts", "Montserrat-ExtraBold.ttf"),
             "/usr/share/fonts/truetype/montserrat/Montserrat-ExtraBold.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"]
    path = next((c for c in cands if c and os.path.exists(c)), None)
    font = ImageFont.truetype(path, CAPTION_PX) if path else ImageFont.load_default(CAPTION_PX)
    words = text.split()
    groups = [" ".join(words[i:i + words_per]) for i in range(0, len(words), words_per)]
    out = []
    for i, fr in enumerate(frames):
        g = groups[min(i // frames_per, len(groups) - 1)]
        im = Image.fromarray(fr); d = ImageDraw.Draw(im)
        d.text((W // 2, CAPTION_Y), g, font=font, fill=(255, 255, 255), anchor="mm",
               stroke_width=8, stroke_fill=LINE_RGB)
        out.append(np.asarray(im))
    return out

def encode(frames, path):
    p = subprocess.Popen(["ffmpeg", "-y", "-v", "error", "-f", "rawvideo", "-pix_fmt", "rgb24",
                          "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-", "-c:v", "libx264",
                          "-preset", "veryfast", "-crf", "18", "-pix_fmt", "yuv420p", path],
                         stdin=subprocess.PIPE)
    for f in frames: p.stdin.write(np.ascontiguousarray(f).tobytes())
    p.stdin.close(); p.wait()
    if p.returncode: sys.exit("ffmpeg failed")

def build(scene_path, out_path, seed=7):
    sc = json.load(open(scene_path)); rnd = random.Random(seed)
    shots = sc["shots"]; t0 = 0.0; video = []
    for k, s in enumerate(shots):
        n = max(8, round(s.get("dur", 1.2) * FPS))
        if "pan" in s: pan = s["pan"]
        else:
            a = rnd.uniform(0, 2 * math.pi); pan = (44 * math.cos(a), 44 * math.sin(a))
        if "frames" in s:   # a pre-rendered sequence (e.g. from the three.js stage)
            import glob as _g
            fr = [np.asarray(Image.open(f).convert("RGB")) for f in sorted(_g.glob(s["frames"] + "/*.png"))]
        else:
            fr = render_shot(Image.open(s["image"]), n, pan, s.get("zoom", 6.0))
        if not video: video = fr
        else:
            kind = shots[k - 1].get("out") or ("whip" if t0 < 3 or rnd.random() < 0.6 else "dissolve")
            video = whip(video, fr, rnd.choice([(1, 0), (-1, 0), (0, 1), (0, -1)])) if kind == "whip" else dissolve(video, fr)
        t0 = len(video) / FPS
    video = draw_captions(video, sc.get("captions"), sc.get("font"), sc.get("words_per_caption", 1),
                          sc.get("frames_per_caption", 10))
    encode(video, out_path)
    print(f"wrote {out_path}: {len(video)} frames, {len(video) / FPS:.2f} s")

# ---------------------------------------------------------------- checker
TARGETS = {"pan_speed_med_px_s": (13, 118), "zoom_med_pct_s": (-15.5, 26.2), "locked_shot_pct_max": 9}

def check(video_path, step=1):
    """Measure camera speed and zoom per frame (Farneback flow fitted to pan +
    uniform zoom, as in the rulebook, on textured grid points only) and report
    against the rule ranges. step > 1 measures flow across that many frames
    and divides back down, which steadies very slow sub-pixel moves; on the
    test renders step 1 and 4 agree within 3 px/s."""
    import cv2
    cap = cv2.VideoCapture(video_path); gs = []; sp = []; zm = []
    ys, xs = np.mgrid[8:472:8, 8:262:8]; px = (xs - 134.5).ravel(); py = (ys - 239.5).ravel()
    while True:
        ok, f = cap.read()
        if not ok: break
        gs.append(cv2.cvtColor(cv2.resize(f, (270, 480), interpolation=cv2.INTER_AREA), cv2.COLOR_BGR2GRAY))
    for i in range(step, len(gs)):
        prev, g = gs[i - step], gs[i]
        fl = cv2.calcOpticalFlowFarneback(prev, g, None, 0.5, 4, 21, 3, 5, 1.1, 0)
        fx = fl[ys, xs, 0].ravel(); fy = fl[ys, xs, 1].ravel()
        # only trust grid points with visible texture: flat CG colour fields
        # (sky, untextured ground) report zero flow whether or not the camera moves
        gm = cv2.magnitude(cv2.Sobel(prev, cv2.CV_32F, 1, 0, ksize=3), cv2.Sobel(prev, cv2.CV_32F, 0, 1, ksize=3))
        gm = cv2.dilate(gm, np.ones((7, 7), np.uint8))[ys, xs].ravel()
        keep = gm > 20
        if keep.sum() < 30: keep = np.ones(fx.size, bool)
        for _ in range(4):
            A = np.zeros((2 * keep.sum(), 3)); A[0::2, 0] = 1; A[1::2, 1] = 1
            A[0::2, 2] = px[keep]; A[1::2, 2] = py[keep]
            y = np.empty(2 * keep.sum()); y[0::2] = fx[keep]; y[1::2] = fy[keep]
            sol = np.linalg.lstsq(A, y, rcond=None)[0]
            res = np.hypot(fx - (sol[0] + sol[2] * px), fy - (sol[1] + sol[2] * py))
            keep = keep & (res <= max(np.percentile(res[keep], 70), 0.25))
        sp.append(math.hypot(sol[0], sol[1]) * 4 * FPS / step); zm.append(sol[2] * FPS * 100 / step)
    sp = np.array(sp); zm = np.array(zm)
    r = {"frames": len(gs), "step": step, "pan_speed_med_px_s": round(float(np.median(sp)), 1),
         "zoom_med_pct_s": round(float(np.median(zm)), 2),
         "static_frames_pct": round(float((sp < 15).mean() * 100), 1)}
    lo, hi = TARGETS["pan_speed_med_px_s"]
    r["pan_speed_ok"] = lo <= r["pan_speed_med_px_s"] <= hi
    lo, hi = TARGETS["zoom_med_pct_s"]
    r["zoom_ok"] = lo <= r["zoom_med_pct_s"] <= hi
    print(json.dumps(r, indent=1)); return r

if __name__ == "__main__":
    if len(sys.argv) >= 4 and sys.argv[1] == "build": build(sys.argv[2], sys.argv[3])
    elif len(sys.argv) >= 3 and sys.argv[1] == "check":
        check(sys.argv[2], int(sys.argv[3]) if len(sys.argv) > 3 else 1)
    else: print(__doc__)
