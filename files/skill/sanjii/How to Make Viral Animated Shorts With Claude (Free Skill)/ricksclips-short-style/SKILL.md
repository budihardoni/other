---
name: ricksclips-short-style
description: Build or check vertical Shorts in the @ricksclips3000 house style - measured style rules, camera math, and a three.js stage that renders 2D cutout characters in a sunlit 3D set to MP4.
---

# @ricksclips3000 Short style

Use this skill to plan, build, render or QA a vertical Short that looks and moves like the 20 most recent @ricksclips3000 Shorts.

Every number here was measured frame by frame from those videos: 34,359 frames at 1080x1920 and 30 fps, condensed into 549 shot reference sheets. A number marked *observed* is a visual observation instead.

`references/rules.json` holds every number in machine-readable form.

## What's in the package

| Path | What it is |
| --- | --- |
| `SKILL.md` | This file: the rules, the camera math and how to run the stage |
| `references/rules.json` | All measured numbers |
| `scripts/stage/stage.js` | three.js stage: cutout characters, sun with shadows, tinted fill, measured camera glide |
| `scripts/stage/index.html` | Page that loads the stage |
| `scripts/stage/render.mjs` | Headless renderer: Chromium/WebGL to PNG frames to MP4 |
| `scripts/stage/shortkit.py` | Assembler (dissolves, whips, captions, H.264) and rule checker; also animates plain stills |
| `scripts/stage/package.json` | Node dependencies (three 0.170.0, playwright) |
| `examples/example_scene.json` | Test scene with two placeholder characters |
| `examples/test_render.mp4`, `test_render_frames.jpg` | The verified test render (also reproduced from a clean unzip + fresh install: 37.3 px/s, +6.01 %/s) |

## Setup

```bash
cd scripts/stage
npm install                      # three + playwright
npx playwright install chromium
pip install numpy pillow scipy opencv-python
# ffmpeg must be on PATH
# optional: put Montserrat-ExtraBold.ttf (Google Fonts, OFL) in scripts/stage/fonts/
node render.mjs ../../examples/example_scene.json out.mp4
python3 shortkit.py check out.mp4
```

If `npx playwright install` reports a read-only browser folder, set `PLAYWRIGHT_BROWSERS_PATH` to a writable folder first. Headless Chromium renders WebGL2 in software (SwiftShader); `render.mjs` passes the flags. Expect about 0.45 s per 1080x1920 frame with 4096 px shadow maps on one CPU core.

## Workflow

1. **Script and plan shots.**
   - One shot per ~1.2 s; faster shots (0.8 s) in the first 3 s.
   - Change view about every 1.4 s.
   - Every shot moves.
2. **Write a scene JSON** (format below): characters, props, sun and shots.
3. **Render** with `node render.mjs scene.json out.mp4`. It renders every frame, then `shortkit.py` adds transitions and captions and encodes.
4. **Check** with `python3 shortkit.py check out.mp4`, then go through the QA checklist.

## The four core rules

### 1. Character
Put one stick figure on screen whose round, outlined white head fills about a fifth of the frame width.
- Characters are in 77% of shots. Of those shots, 57% have one character, 21% two, 11% three, 6% four and 4% a crowd.
- Largest head: median 20% of frame width (~216 px at 1080); middle half 12-30%.
- A round, outlined white or cream head in 94% of character shots. Thin stick limbs; costume and props carry the role (observed).
- Method: a by-eye count of 61 sampled shots, good to about +/-5 points; automated head detection failed on this footage.
- **Stage:** `"headWidth": 0.20` on a shot frames its target's head at 20% of the frame width.

### 2. Line
Outline every drawn element with an even 10 px stroke (at 1080 wide) in plum-black, never pure black.
- Width: median 10 px (0.9% of frame width); middle half 7-12 px; range 6-16 px.
- Colour: median RGB 39/25/37 (#271925). Pure black appears in 2.8% of shots.
- The 3D set carries no outline (observed).
- **Stage:** the cutout outline is 10/216 = 4.6% of head diameter, so a head at 20% of frame width gets a 10 px line. Test render: 9 px of exactly #271925 plus 1 px of anti-aliasing on a 20.6% head.

### 3. Colour
Set warm orange-red against cool blue in a muted palette, and tint every shadow red-brown, blue or violet, lifted off black.
- Shadow hue: red-brown 40%, blue 32%, violet 25%. Neutral grey only 6%. Median shadow saturation 0.51.
- Shadow value: median 76 of 255 (range 42-129). Overall median shadow #342838.
- Palette by area: warm 48.7%, blue 34.6%, magenta 9.4%, green 7.2%. Median saturation 0.37; at most 2 strongly saturated colours in 84% of shots.
- Mid-key exposure: mean brightness per shot 120 of 255 (range 72-160).
- **Stage:**
  - Shadows get their colour from the hemisphere `fill`; violet ground fill and blue sky fill by default.
  - The sky dome runs blue at the top to warm at the horizon.
  - The cutouts skip tone mapping, so their flat colours stay exact.
  - Test render shadow: hue 272, saturation 0.38, value 53.

### 4. Camera
Keep the camera moving in every shot, usually pushing in: arrive fast, then settle.
- Locked shots at most 8.7%.
- 58% of shots push in (above +1 %/s) and 29% pull out. Median zoom +2.6 %/s; range -15.5 to +26.2 %/s.
- Speed: median 44 px/s; middle half 13-118 px/s; 90th percentile 255 px/s.
- 58 px/s in a shot's first third, 37 px/s after.
- Pan direction is free.
- **Stage:** each shot's `zoom` (%/s) and `pan` ([x, y] px/s) run through the camera math below.

## Supporting rules

**Format.** 1080x1920, 30 fps, 56-66 s (median 61.8 s).

**Pacing.**
- Shot length: median 1.17 s, with 80% of shots between 0.33 and 3.87 s.
- First change of view at ~1.2 s.
- 30 transitions a minute (17-41 per video).

**Transitions.**
- Camera-move transitions are 61%, median 10 frames (4-16). `shortkit` uses a 10-frame whip.
- Dissolves are 38%, median 8 frames (4-12).
- Hard cuts are 0.7%, at most 1 per video.
- In the first 3 s, 86% of transitions are camera moves.

**Captions.**
- Always on screen; 1-2 words each.
- Centred at x 540, y 1350 (70% down); one line with a ~60 px glyph band.
- New caption every 10 frames (2.77 a second).
- Style: white heavy sans with a dark outline (observed).

**Lighting.**
- Bright side of the frame toward the top in 65.6% of shots.
- Direction steady within a shot (R = 0.98).
- **Stage:** keep sun `elevation` at 40-65 degrees so light reads from above.

## Camera math

Units: output pixels at 1080x1920, seconds, fps = 30.

**Speed profile** for an n-frame shot, with u = (i + 0.5) / n:

    m(u) = 1 + 0.7 * (1 - smoothstep(0.15, 0.40, u))

The median is 1, so the shot's median speed equals the requested speed, and the first third averages ~1.57x the rest (measured 58/37).

**Profile time:** `T_i = sum_{k<=i} m_k / fps - m_0 / fps`

**Picture motion:**
- `dx_i = pan_x * T_i`, `dy_i = pan_y * T_i`. +x means the picture moves right (camera turns left); +y means the picture moves down (camera tilts up).
- `scale_i = exp(ln(1 + zoom/100) * T_i)`

**Framing:** the camera distance that puts the target head at fraction f of the frame width is

    d0 = headDiameter / (f * 2*tan(fov/2) * 1080/1920)

**Lens glide** (`"glide": "lens"`, the default; reproduces the measured whole-frame motion):
- The camera holds position at d0.
- `fov_i = 2*atan(tan(fov/2) / scale_i)`
- `yaw_i = atan(dx_i * 2*tan(fov_i/2) / 1920)`
- `pitch_i = atan(dy_i * 2*tan(fov_i/2) / 1920)`

**Dolly glide** (`"glide": "dolly"`; physical move with parallax):
- `d_i = d0 / scale_i`
- Truck by `-dx_i * w` and pedestal by `+dy_i * w`, where `w = 2*d_i*tan(fov/2) / 1920` world units per pixel.
- The numbers hold at the anchor's depth. The background moves less, so a whole-frame check reads lower.

**Transitions:**
- Dissolve: 8 overlapped frames with alpha = (i+1)/9.
- Whip: 10 overlapped frames sliding one frame-width with smoothstep easing, plus a directional box blur of 4 + 60*sin(pi*t) px.

**Checker:**
- Farneback flow on 270x480 grey frames over an 8 px grid, keeping only textured points (gradient above 20).
- Fit `flow = t + (s-1)*(p - centre)` with 4 rounds of trimming to the 70th percentile.
- speed = |t| x 4 x 30 / step px/s; zoom = (s-1) x 30 x 100 / step %/s.

## Scene JSON

```json
{
 "font": "fonts/Montserrat-ExtraBold.ttf",
 "captions": "A man waited outside his own house",
 "sun":    {"azimuth": 35, "elevation": 50, "color": "#ffe0b5", "intensity": 2.4},
 "sky":    {"top": "#5f86d8", "horizon": "#f2b98a"},
 "fill":   {"sky": "#8ea2ff", "ground": "#6a3b6e", "intensity": 1.1},
 "ground": {"color": "#c98a55"},
 "characters": [{"id": "hero", "pos": [0,0,0], "height": 1.8, "shirt": "#e0603a",
                 "head": "#f4f1e8", "hair": "#4a2f25", "smile": true}],
 "props": [{"type": "house", "pos": [-2.5,0,-7], "size": [5,3.2,4], "color": "#d9c3a0", "roof": "#8a3b35"},
           {"type": "tree", "pos": [4.5,0,-6], "scale": 1.6},
           {"type": "post", "pos": [2.6,0,1.5], "h": 2.4}],
 "shots": [{"target": "hero", "dur": 1.5, "headWidth": 0.20, "yaw": 18, "pitch": 6,
            "frameX": 0, "frameY": 0.12, "fov": 40, "zoom": 6, "pan": [-30, 10],
            "glide": "lens", "out": "whip"}]
}
```

**Shot fields:**
- `target`: character id; the anchor is its head (or give `anchor` as [x, y, z]).
- `headWidth`: head as a fraction of frame width; or give `distance`.
- `yaw` / `pitch`: camera direction around the anchor, in degrees.
- `frameX` / `frameY`: where the anchor sits, as a fraction from the centre (+y = up). The default 0.12 keeps faces above the caption band.
- `out`: transition into the next shot, `whip` or `dissolve`.

**Prop types:** `house`, `box`, `tree`, `post`.

**Characters:** drawn as flat canvas cutouts. They billboard around the vertical axis toward the camera and cast silhouette shadows; the ground and props receive them.

## QA checklist

| Parameter | Target | Acceptable |
| --- | --- | --- |
| Length | 62 s | 56-66 s |
| Frame | 1080x1920, 30 fps | no exceptions |
| Caption centre | x 540, y 1350 | y 1348-1356 |
| Caption change | every 10 frames | 4-18 frames |
| Shot length | 1.17 s | 0.33-3.87 s |
| Transitions per minute | 30 | 17-41 |
| Hard cuts | 0 | at most 1 |
| Dissolve / whip | 8 / 10 frames | 4-12 / 4-16 |
| Camera speed (median) | 44 px/s | 13-118 px/s |
| Zoom | push in on most shots | locked at most 9% of shots |
| Head size | 20% of width | 12-30% |
| Line | 10 px #271925 | 6-16 px, never pure black |
| Shadows | tinted, value ~76 | under 10% neutral grey |

## Verified test (examples/test_render.mp4)

- **Render:** 3 shots and 138 rendered frames, giving 120 frames (4.0 s) after transitions. 1080x1920 at 30 fps; about 0.42 s per frame.
- **Zoom:** commanded vs measured head scale per shot was 1.143 vs 1.148, 0.898 vs 0.900, and 1.114 vs 1.118.
- **Pan:** horizontal moves were exact (-52.0 and +69.3 px).
- **Checker:** 36.8 px/s median speed and +6.05 %/s median zoom, against commanded pans of 32/40/30 px/s and zooms of +8/-6/+6 %/s.
- **Outline:** 9-10 px of #271925 on a head 20.6% of frame width.
- **Shadow:** hue 272, saturation 0.38, value 53.

## Limits

- The rules describe these 20 videos, not what performs best; there is no engagement data behind them.
- Characters are static cutouts: no walk cycles or lip sync. For character acting, swap in a sprite sheet per frame or use generated clips (`shortkit.py` takes a `frames` folder or a still per shot).
- The source footage has shallow depth of field (observed); the stage doesn't, yet. A three.js BokehPass would add it, at extra render time.
- Character numbers come from a 61-shot sample.
- Transition lengths are accurate to about +/-2 frames.
- Reference frames from the source videos are not included in this public package.
