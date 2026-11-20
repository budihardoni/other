---
name: painted-2d-film
description: Writes image and video prompts in one fixed look — a fully 2D, hand-painted gouache-on-coarse-paper film (heavy paper grain, dry broken paint, hard stamped edges, flat tone steps, muted palette, soft flat light, deep layered planes, slightly stepped motion). 16 style-anchor images are built in, so no moodboard is needed. Use whenever the user wants a painted / gouache / storybook / "like a hand-drawn animated film" image, character sheet, location, prop, keyframe or video clip in this look, or says a result came out anime, glossy, smooth, 3D, flat or off-style. Works with Higgsfield (Seedream 5 Pro, Soul, Seedance 2.5, Gemini Omni Flash) and any model that takes reference images. Not for 3D, photoreal, anime or vector styles.
---

# Painted 2D film

This skill writes prompts for one look and nothing else: **a 2D film painted in gouache on coarse paper.** No 3D, no anime, no gloss.

Every prompt is built from the ready blocks in this file and is **always sent together with 2–3 style-anchor images** from `assets/style/`. The images carry the look. The words stop the model from "improving" it into anime, gloss or 3D.

---

## 1. How it works — for the user

1. Tell me the idea: a scene, a short story or a script. Add the format if it matters (16:9 film, 9:16 reel, 4:3).
2. Name the characters. A description, a name or a photo is enough. Add any special props.
3. I reply with a ready prompt and a list of which images to attach, in which order. If the Higgsfield connector is on and you say "generate", I generate it myself.

You never pick a style or build a moodboard. The style is fixed and the references are inside.

---

## 2. How it works — for Claude

**Step 1. Ask only what is missing, in one short message:**
- the scene or story;
- the aspect ratio (default 16:9);
- each character (description, name, photo or sheet);
- special props;
- image or video.

Never ask about style.

**Step 2. Build the assets in this order. Do not skip ahead:**
1. **Location** first. It is always empty of people, with an empty centre. Everything else is measured against it.
2. **Character sheets**, painted in the location's technique.
3. **Creature and prop sheets**, if needed.
4. **Keyframe still** for any shot with an exact action or staging. Recommended.
5. **Video.**

A character sheet made before the location makes the style wander.

**Step 3. Write the prompt from the templates in §6.** Keep every ready block word for word. Change only the bracketed parts.

**Step 4. Reply in this exact form:**
1. One line: what this generation is.
2. A numbered table of inputs: `image_N` → file → role.
3. The full prompt in one code block.

On any correction, resend the whole prompt, never a patch. Talk in the user's language; prompts are always in English.

**Step 5. Check each result** against the checklist in §8. When something is wrong, fix its cause using the table in §8. Do not add more adjectives.

**Generating on the user's Higgsfield account:**
1. Say the model and the number of generations, and wait for a yes.
2. Upload the anchor files with `media_upload`: PUT the bytes, then `media_confirm`.
3. Pass the ids as `medias` with the reference role the model lists.

---

## 3. Built-in style anchors (`assets/style/`)

These 16 images are original works in this exact look and are free to use. Attach 2–3 of them to every prompt.

| File | What it is | Attach for |
|---|---|---|
| `loc_forest_clearing.jpg` | overcast autumn forest clearing | default: any daytime outdoor scene, every character sheet |
| `loc_highlands_day.jpg` | green hills and a cliff edge, brighter day | sunny or green scenes |
| `loc_lake_morning.jpg` | still lake, reeds, misty shore | calm scenes, water |
| `loc_fjord.jpg` | water between dark cliffs | rock, canyons, cold palette |
| `loc_coast_storm.jpg` | cliff coast under a storm sky | wind, weather, tension |
| `loc_open_sea.jpg` | grey rolling sea | ships, storms |
| `loc_above_clouds.jpg` | cloud towers over a cloud floor | flight, height, falls |
| `loc_valley_sunset.jpg` | river valley at warm low sun | warm endings, travel |
| `loc_burning_village.jpg` | smoke and fire on the horizon | fire, danger |
| `loc_night_campfire.jpg` | small fire in a night forest | any night scene |
| `prop_fish.jpg` | one object on a grey field | **every** character, creature or prop sheet |
| `prop_shield_sword.jpg` | crafted objects on grey | metal and wood props |
| `prop_ship.jpg` | a wooden ship on grey | vehicles, larger props |
| `char_old_fisherman.jpg` | original character sheet | how people, faces and cloth are painted |
| `char_rain_girl.jpg` | original sheet, modern clothes | modern or city characters |
| `creature_moss_elk.jpg` | original giant creature sheet | animals, fur, horns |

**How to pick:**
- One anchor nearest the scene's light and mood.
- One anchor for the subject type: a character, prop or creature sheet.
- Optionally a third to nudge the palette.

**Rules for anchors:**
- The anchors' **content is never copied**. The prompt always says so.
- The anchor characters are not cast in the user's story unless the user asks.
- Once the user's own first location and sheets exist, they become the main anchors for the project. Keep one built-in anchor in the mix to stop drift.
- **Soul users** can upload all 16 images once as a Soul moodboard + style preset. See §7.

---

## 4. Hard rules

1. **Fully 2D painted.** Every prompt carries the SURFACE and NOT blocks (§5).
2. **In video prompts never write** "cartoon", "animation", "animated film", "hand-drawn", "anime", "cel" or "on twos". These words switch video models to their own glossy anime. Write instead: "every frame must look as if it were lifted straight out of the attached images". The word anime may appear only in the DO-NOT list.
3. **Surface first.** The paper-and-paint paragraph is the most important instruction and comes before light and palette.
4. **No outlines, no black linework.** Forms are separated by tone and hard painted edges.
5. **Tone in a few flat steps.** Never write "soft shading" or "one soft step of shading", which reads as cel shading.
6. **Light comes only from the location image.** Never add rim light, glow, bloom, lens flare, sunbeams or lamps.
7. **Depth in five planes**, with a near-black cropped foreground. Never use bokeh, blur, vignette or fog to fake depth.
8. **Video:** one continuous shot with no cuts unless the user asks for cuts. The first frame is already the middle of the event. At most 5 beats per clip.
9. **No music** in video prompts unless the user asks for it. Use a SOUND block with real sounds only, ending with "NO MUSIC OF ANY KIND".
10. **Original characters only.** Never write the signature look of a famous film, game or cartoon character, not even to describe the user's own creature. A character or creature the user gives as a sheet gets **no visual words at all**, only: "THIS SHEET IS THE ONLY SOURCE OF ITS APPEARANCE. ADD NOTHING. INVENT NOTHING. CHANGE NOTHING." Add: "Original characters from an original story. Everything is defined only by the attached sheets." If asked to copy a specific copyrighted character or film scene, offer an original scene in the same spirit.
11. **Scale is absolute and tied to a person.** For example: "its shoulder at the height of a standing adult's head". Add "IGNORE the size it is drawn at on the sheet" and a negative such as "not pony-sized".
12. **Describe what IS there.** Naming a thing summons it: "no eye" draws an eye. Put the banned word only in the final NOT list.
13. **Real people** appear only from the user's own photo, with consent. Never a public figure.

---

## 5. Ready blocks — copy word for word

### 5.1 SURFACE (images)
> THE SURFACE — THE MOST IMPORTANT INSTRUCTION: the whole image is gouache on coarse paper. A heavy paper tooth runs across every part of the picture, equally over the background and over the figures. Colour is laid in dry, broken passes: the pigment skips and breaks over the grain, leaving speckles, gaps and scattered flecks; long dry-brush drags run down [the folds of cloth, the trunks, the fur]; edges are hard and stamped, with small ragged chips and blots where the brush lifted; a few faint pencil construction lines show through [at the shoulders and the hem]. Tone moves in a few posterised steps, never in a smooth ramp. No outlines drawn around the forms, no black linework. Every material — [skin, hair, wool, leather, metal, rock, water] — carries this same grain and the same broken pigment.

### 5.2 NOT (images)
> ABSOLUTELY NOT, ANYWHERE IN THE IMAGE: no smooth gradients; no airbrushed or blended shading; no soft glossy highlights; no shiny individually drawn hair strands; no clean vector-like flat fills; no crisp uniform digital outline; no glassy reflective eyes; no catchlights; no bloom, glow or rim light; no cast shadow on the background; no photoreal skin; no 3D or CGI surfaces; no anime, manga or Japanese animation look; no oil-painting look; no polished digital illustration finish of any kind. If any area looks smooth and clean, it is wrong.

### 5.3 SIMPLIFICATION (locations)
> SIMPLIFICATION — A BACKGROUND PLATE FROM A PAINTED FILM, NOT A FINE-ART PAINTING: everything is reduced to big, simple, flat shapes with only the detail needed to read them. [Walls are flat planes with two or three tone steps, windows are small flat marks, stones a few broken strokes, water a few flat horizontal bands, trees simple vertical strokes.] No fine realistic rendering, no architectural detail, no photographic texture.

### 5.4 STYLE LOCK (video)
> THE STYLE — LOCKED TO <<<image_1>>> AND <<<image_2>>>, THIS IS THE MOST IMPORTANT INSTRUCTION: every frame must look as if it were lifted straight out of those images. Gouache on coarse paper, with a heavy paper tooth running through every part of every frame — [skin, cloth, hide, rock, water, sky] alike. Colour laid in dry broken passes, the pigment skipping over the grain leaving speckles and gaps; dry-brush drags; mottled uneven fills; hard stamped edges with small ragged chips. Tone in a few flat hard-edged steps, never a smooth ramp. Match the exact muted palette and nothing more saturated. Faces drawn as flat planes with quiet features and no rendering. Motion stepped and slightly held, not silky.
> DO NOT INTRODUCE ANY OTHER VISUAL STYLE AT ANY POINT. No anime or manga look, no glossy cel shading, no speed lines, no photoreal [skin, rock, water, fire], no 3D or CGI surfaces, no smooth gradients, no airbrushed shading, no glowing rim light, no bloom, no lens flare, no depth-of-field blur, no oil-painting look, no polished digital finish. Nothing in any frame may look smoother, cleaner or more rendered than the attached images. The style must not drift — the last frame is painted exactly like the first.

### 5.5 DEPTH (locations, keyframes, video)
> THE DEPTH — ALWAYS SEPARATE PLANES, NEVER ONE FLAT LAYER:
> PLANE 1, nearest and darkest: [close grass / a branch / a post], hard-cropped by the frame edge, near-black with one lighter step on top, its painted edges slightly softened.
> PLANE 2: [the subject] — the sharpest and most contrasted thing in the picture.
> PLANE 3: [middle distance].
> PLANE 4: [further], paler and flatter.
> PLANE 5: [far distance], dissolving into flat pale grey with no detail.
> ATMOSPHERIC PERSPECTIVE: each plane lighter, cooler and lower in contrast than the one in front. Nothing far is as dark as anything near.
> OVERLAP: every plane overlaps the one behind it with a hard painted edge.
> NO FAKE DEPTH: no bokeh, no lens blur, no vignette, no fog filter.

In video add: "PARALLAX: the near plane moves far more than the far plane." A slow sideways camera drift is the easiest way to make a shot feel deep.

### 5.6 LIGHT
- **Default:** "THE LIGHT: flat, soft and directionless, from a completely overcast sky. No sun, no sunbeams, no shafts of light, no warm patches, no hard shadows anywhere."
- **Sheets:** "soft, even and directionless. Shade in one or two posterised steps with hard edges. No rim light, no glow, no bloom, no specular highlights, no cast shadow on the background."
- **Low sun (only if asked):** "warm low sun from [side]; any rays painted as soft flat bands of paler colour, never rendered glows."
- **Fire:** "THE FIRE IS PAINTED, NOT RENDERED: flat bands of warm colour stepping from deep red to pale amber with hard painted edges between the steps. No bloom, no glow halo, no lens flare, no sparkle, no glowing particles." Firelight reaches two or three steps from the flame, no further.
- **Night:** "Properly dark, but READABLE — never a black rectangle."
- **Video:** "THE LIGHT — NOTHING ARTIFICIAL, NOTHING ADDED: the only sources are the ones already in <<<image_N>>>. No lamp, no torch, no rim light, no fill light, no glow from nowhere."

### 5.7 PALETTES (pick one per project)
- **Cold north:** near-black wet trunks and rock, very dark desaturated green, dull ochre-brown and rust, cold pale grey mist and sky, bone grey. "Greens muted and earthy, never bright. No blue sky, nothing saturated."
- **Winter:** near-black, cold slate grey, pale bone grey, flat white snow and sky, one faint dull ochre.
- **Green summer:** "living greens, never neon, never candy-bright", warm ochre grass, chalky blue-grey distance.
- **Rainy city:** wet slate, warm brick, faded denim, off-white, one chalky muted accent (a yellow coat, a red door).
- One warm note per frame reads better than several.

### 5.8 FACES
- "Faces drawn as flat planes with quiet, plain features and no rendering. Small simple eyes with no whites showing, natural brows, a plain nose, a calm mouth. Hair painted as broken masses with dry-brush streaks, never glossy strands."
- In the NOT list add: no big round eyes, no blush, no freckles, no button nose, no pouty lips, no generic pretty cartoon face.

### 5.9 MOTION (video)
> THE MOTION: stepped rather than smoothly interpolated — the picture holds briefly on each drawing with a slight visible stutter, and fast actions carry smeared, stretched in-between frames. Nothing glides with mechanical smoothness. The backgrounds behave as painted plates that slide and scale behind the figures.

- **Comedy:** "violent bursts, then hard dead holds".
- **Big animals:** "every step lands heavily, the ground answers".

### 5.10 CAMERA (video only — never in locations or sheets)
These moves work in this look:
- **Handheld:** "a constant live jitter, the horizon rolling and correcting".
- **Slow sideways drift** for parallax.
- **Quarter-orbit** around a pair.
- **POV with one soft foreground edge:** "THE ONLY SOFT THING IN THE PICTURE IS [the hood edge]".
- **True 90° top shot:** "no sky, no horizon".
- **Extreme wide** with tiny figures.
- **Flight "as if carried by another flier"**, with a lurch on every beat.

Always add "never a smooth gimbal glide, never a zoom" unless the user asks for one.

---

## 6. Templates

**Image model:** Seedream 5 Pro (`seedream_v5_pro`) at 2k, in the project's aspect ratio. It holds the gouache surface best. Nano Banana tends to slide into smooth digital, and Seedream 4.5 adds outlines.

**Video model:** Seedance 2.5 in omni-reference mode, with up to 5 inputs tagged `<<<image_N>>>`. When staging or an action must be exact, use image-to-video from a keyframe instead. Seedance or Gemini Omni Flash 1.2 both work; give a start frame plus an end frame if the model keeps inventing the action.

**Every image prompt opens with this roles line:**
> THE ATTACHED IMAGES ARE THE DRAWING TECHNIQUE AND SURFACE ONLY. Copy nothing of their content — no [what is in them]. Take from them only how the picture is painted: the medium, the paper, the way colour is laid, the muted palette and the flat soft light.

### 6.1 Location
**Attach:** 2–3 location anchors.

```
[ROLES LINE]

A wide background painting of [place] on [weather / time]. No people, no animals, no text.

THE PLACE: [4–6 concrete sentences: ground, surfaces, objects, what encloses the space].
[5.5 DEPTH]
THE AIR: [mist, damp, wind].
THE SKY: [plain pale grey overcast / …].
[5.6 LIGHT]
THE MOOD: [two or three words].
THE PALETTE: [one family from 5.7, spelled out]. Nothing saturated.
[5.1 SURFACE]
NOT: smooth gradients, airbrushed shading, glossy highlights, bloom, photoreal [grass, rock, water], 3D or CGI, anime styling, oil-painting look, polished digital finish.
[5.3 SIMPLIFICATION]
COMPOSITION: [wide / tall], [horizon position]. The centre and foreground are left EMPTY and uncluttered, so characters can be placed there later. Generous negative space.
```

### 6.2 Character sheet
**Attach:** `prop_fish.jpg` plus 1–2 locations (later, also the first approved sheet).

```
[ROLES LINE] The object image shows how a subject sits on the grey field: copy exactly that treatment for the figure.

An original character: [age, build, plain face, hair, every garment with colour and material, shoes, props].

LAYOUT: a character sheet on a flat, visibly brushed neutral mid-grey field. Two panels side by side, no text, no labels, no borders, no gutters.
LEFT PANEL: the whole figure standing straight, front view, from the top of the head to the soles of the feet, drawn small enough that there is clear empty grey above the head and below the feet.
RIGHT PANEL: the same character from mid-chest up, THE ENTIRE HEAD INSIDE THE PANEL with a clear band of empty grey above it.

[5.1 SURFACE]
[5.8 FACES]
[5.6 LIGHT — sheets]
PALETTE: neutral grey field, [costume colours]. Nothing saturated.
[5.2 NOT]
```

**Creature sheet:** the same, with these changes:
- LEFT PANEL: "the whole animal in side view, nose to tail".
- RIGHT PANEL: "head and neck in three-quarter view".
- Design it from plain anatomy words only.

**Character from a real person's photo (with consent):** first make the sheet, then fix the face with §6.5.

### 6.3 Prop
**Attach:** `prop_fish.jpg` plus a location.

```
[ROLES LINE]

One single [object] on a flat, visibly brushed, uneven neutral grey field. One only — no second one, no panels, no text, no borders.
THE [OBJECT]: [size compared with a person, shape, parts, state, view], filling most of the picture with empty grey around it.
KEEP IT SIMPLE AND FLAT — a prop from a painted film, not a technical illustration. [Detail suggested by a few broken strokes.]
[5.1 SURFACE]
ABSOLUTELY NOT: smooth gradients, glossy highlights, wet shine, vector fills, a crisp digital outline, bloom, photoreal [object], 3D, anime look.
THE LIGHT: soft, even, directionless; one or two hard-edged tone steps; no cast shadow.
POSITIVE LOCKS: [the 3–4 facts that must be true].
```

### 6.4 Keyframe still
**Attach:** the character sheet(s), the location, a creature or prop sheet.

```
A single frame from a painted film. [ratio].

<<<image_1>>> = [CHARACTER] — looks, costume, props. Take nothing of the grey field or the sheet layout.
<<<image_2>>> = THE PLACE — the only source of the location, the palette and ALL the light.
<<<image_3>>> = [CREATURE / PROP] — THIS SHEET IS THE ONLY SOURCE OF ITS APPEARANCE. ADD NOTHING. INVENT NOTHING. CHANGE NOTHING. IGNORE the size it is drawn at.
Original characters from an original story. Everything is defined only by the attached sheets.

THE MOMENT: [one frozen instant: body positions, left / right, who looks where].
SCALE: [absolute, compared with a person].
[5.5 DEPTH]
THE LIGHT: only what is already in <<<image_2>>>. Nothing added.
[5.1 SURFACE] The figures are painted on the same sheet as the place, not pasted onto it.
[5.2 NOT]
```

### 6.5 Face fix (Seedream 5 Pro, two references)
Use this when a sheet has the right painting but the wrong face. Only for a person who agreed.

Before running it, make a painted portrait of the person: their photo is the face reference, and a location anchor gives the painting technique.

```
Two references, two different jobs.
REFERENCE ONE is the master. It supplies the entire image: layout, paper, texture, figure, framing, hair, costume, palette, light and the whole painting technique — flat shapes, hard stamped edges, few flat tones, visible grain, speckled pigment, no outlines.
REFERENCE TWO supplies ONE thing only: whose face it is — the facial structure, the features and their proportions. Take nothing else from it.
Produce reference one with reference two's face, painted in reference one's technique. The join must be invisible: the face sits on the same paper, under the same light, made of the same paint.
```

If the face still looks generic, say exactly what is wrong. For example: "the eyes are too big, there is blush; face height ≈ 1.5× width".

### 6.6 Video — skeleton (fixed order)
1. `[N] SECONDS. ONE SINGLE CONTINUOUS SHOT, NO CUTS, NO EDITS. [ratio], the picture filling the whole frame edge to edge.` Then one sentence on what happens.
2. `Original characters from an original story. Everything is defined only by the attached sheets.`
3. **ACTIVE REFERENCES**, one line per input:
   - **Character:** `<<<image_1>>> = [WHO], AND THE STYLE OF THE WHOLE VIDEO. [face, hair, costume, props]. [Anything that must stay on, said positively: "THE HOOD IS UP IN EVERY FRAME".] Take nothing of the grey field or the sheet layout.`
   - **Place:** `<<<image_2>>> = THE PLACE, AND THE STYLE OF THE WHOLE VIDEO. The only source of this location and of ALL the light: [the landmarks the action uses, with left/right], the exact palette and the exact light.`
   - **Creature or second character:** `<<<image_3>>> = THE [ANIMAL] — THIS SHEET IS THE ONLY SOURCE OF ITS APPEARANCE. ADD NOTHING. INVENT NOTHING. CHANGE NOTHING. ITS SIZE — IGNORE the scale it is drawn at: [absolute scale].`
   - **Extra anchor**, when fewer than two inputs carry the style: `<<<image_N>>> = THE DRAWING TECHNIQUE ONLY. Copy nothing of its content.`
4. **SCALE**, with a negative.
5. **STAGING:** who is where, left / right, eye-lines. Any contact between hands and things is one fixed sentence, repeated word for word in every related prompt.
6. **THE SHOT:** timed beats `0.0–1.5s — …`. At most 5 beats, each a cause and its effect. The first beat is already mid-event.
7. **THE CAMERA** (5.10).
8. **THE DEPTH** (5.5) + PARALLAX.
9. **THE LIGHT** (5.6, video line).
10. **THE STYLE** (5.4), which includes the stepped motion.
11. **THE SOUND:** real sounds only, concrete and timed, ending with `NO MUSIC OF ANY KIND`.
12. **POSITIVE LOCKS:** restate duration, one shot, who is where, the order of events, light from the location only, style unchanged to the last frame, no music.

### 6.7 Video — full example (6 s, campfire)
**Inputs:**
1. `char_old_fisherman.jpg`
2. `loc_night_campfire.jpg`
3. `char_rain_girl.jpg`

Swap in the user's own sheets and location.

```
6 SECONDS. ONE SINGLE CONTINUOUS SHOT, NO CUTS, NO EDITS. 16:9, the picture filling the whole frame edge to edge. Two travellers at a small night fire; a gust kills the flame and the old man brings it back.

Original characters from an original story. Everything is defined only by the attached sheets.

ACTIVE REFERENCES:
<<<image_1>>> = THE OLD MAN, AND THE STYLE OF THE WHOLE VIDEO. His weathered face and short grey beard, the dark green knitted cap, the mustard oilskin coat, the cream scarf, the dark trousers and tall black boots. Take nothing of the grey panel field or the sheet layout.
<<<image_2>>> = THE PLACE, AND THE STYLE OF THE WHOLE VIDEO. The only source of this location and of ALL the light in it: the night forest floor, the small fire of crossed branches on bare ground, the fallen log on the RIGHT of the fire, the open ground on the LEFT, the dark gnarled trees closing in, the pale scraps of sky between the branches, the exact muted palette and the exact way it is lit.
<<<image_3>>> = THE GIRL — THIS SHEET IS THE ONLY SOURCE OF HER APPEARANCE: her dark bob, the yellow raincoat, the striped jumper, the jeans and red sneakers. Take nothing of the grey field or the sheet layout.

THE STAGING — a wide, almost straight-on view of the camp, the camera at sitting height, the fire in the centre: the old man sits on the log on the RIGHT, forearms on his knees, leaning toward the warmth. The girl sits on the bare ground on the LEFT, knees pulled up inside her raincoat. They face each other across the small flame.

THE SHOT (0.0–6.0s):
0.0–1.2s — STILL. The flame breathes; the warm light shifts on both faces. She stares into it. He rubs his hands slowly.
1.2–2.4s — THE GUST. A hard gust comes through the wood from behind the camera: branches overhead lash sideways, dead leaves tear across the ground, her hair is blown across her face, his scarf ends whip out. The flame is flattened almost horizontal.
2.4–3.4s — IT GOES OUT. The flame is torn off the branches and gone; a puff of ash is whipped away low across the ground. THE WARM LIGHT VANISHES. The frame drops to cold blue-grey and near-black, both of them dim shapes, only a few dull orange coals left in the bed.
3.4–4.8s — HE LEANS IN. The old man gets down on one knee, cups his hands round the coals and blows, long and steady. A small orange glow grows under his hands and climbs onto the twigs.
4.8–6.0s — IT CATCHES. The branches take, the fire comes back up livelier than before, and the warm pool floods back across the ground, the log and both their faces. She laughs, pushing the hair off her face. The shot ends there.

THE CAMERA: ONE unbroken handheld shot. A slight natural breathing wobble, a small push of the frame when the gust hits, a slow sideways drift for parallax. No cut, no zoom, no orbit, no slow motion.

THE DEPTH — ALWAYS SEPARATE PLANES, NEVER ONE FLAT LAYER:
PLANE 1, nearest and darkest, cropped by the bottom and side edges: near-black grass and one dark branch crossing the corner, dragged sideways by the wind.
PLANE 2: the two figures and the log — the sharpest things in the picture.
PLANE 3: the fire and the lit patch of ground.
PLANE 4: the first rank of gnarled trunks.
PLANE 5: the deep wood going to flat black, and the cold scraps of sky.
ATMOSPHERIC PERSPECTIVE, REVERSED BY THE FIRE, and PARALLAX: the near plane moves far more than the far wood.

THE LIGHT — NOTHING ARTIFICIAL, NOTHING ADDED: only the small fire and the weak cold sky light already in <<<image_2>>>. No lamp, no torch, no rim light, no fill light, no glow from nowhere. When the fire is out, THE SHOT REALLY GOES DARK — dark but readable, never a black rectangle. THE FIRE IS PAINTED, NOT RENDERED: flat bands of warm colour stepping from deep red to pale amber with hard edges; no bloom, no glow halo, no sparks storm.

THE STYLE — LOCKED TO <<<image_1>>> AND <<<image_2>>>: every frame must look as if it were lifted straight out of those images. Gouache on coarse paper, with a heavy paper tooth running through every part of every frame — skin, cloth, bark, flame, ash and sky alike. Colour laid in dry broken passes, the pigment skipping over the grain leaving speckles and gaps; dry-brush drags; mottled uneven fills; hard stamped edges with small ragged chips. Tone in a few flat hard-edged steps, never a smooth ramp. Faces drawn as flat planes with quiet features. Motion stepped and slightly held, not silky.
DO NOT INTRODUCE ANY OTHER VISUAL STYLE. No anime or manga look, no glossy cel shading, no speed lines, no photoreal fire, bark or skin, no 3D or CGI surfaces, no smooth gradients, no airbrushed shading, no glowing rim light, no bloom, no lens flare, no polished digital finish. The last frame is painted exactly like the first.

THE SOUND — NO MUSIC: the quiet crackle of the small fire, a far night bird. The gust arriving as a long rising rush through the branches, leaves scraping, the flame tearing. Near-silence when it goes out. His long steady breath on the coals, the soft pop as the twigs catch, crackling again, her short laugh. Nobody speaks. NO MUSIC OF ANY KIND.

POSITIVE LOCKS: one single continuous shot, no cuts, 16:9, 6 seconds. The place is exactly <<<image_2>>>. The old man on the log on the RIGHT, the girl on the ground on the LEFT, the fire between them. Order: still → gust → the fire goes OUT and the frame goes dark → he blows on the coals → the fire catches, the warm light floods back and she laughs. Only the light already in the location image. The drawing style is identical to the attached images throughout and never drifts. NO MUSIC OF ANY KIND.
```

**Shot ideas that suit the look:**
- A gust kills a fire and something brings it back.
- A hand held out palm up and a big muzzle settling into it.
- A clumsy panic, then a laugh in close-up.
- A small boat in a storm.
- Tiny figures crossing a huge landscape.
- A 90° top shot beside a wounded animal.
- A POV offering food to a wary animal.
- A flight bursting out of a cloud.

---

## 7. Soul mode (Higgsfield Soul)

Upload all 16 anchors once as a moodboard and make a style preset from it. This gives the most stylised locations.

Then:
- Soul prompts have **no image inputs** and no `<<<image_N>>>` tags.
- Keep only a short surface line: "gouache on coarse paper, heavy paper tooth, dry broken pigment, hard stamped edges, posterised tone". Long style blocks only weaken the moodboard.
- With a Soul character ID, keep the face line short: "their own face, unchanged; do not enlarge the eyes, no freckles, no blush".

**If Soul blocks a generation**, remove these first:
- body-cut wording such as "no head" or "cut at the neck". Write "framed like a cropped garment photo that begins at the collarbones" instead.
- weapon words, even negated ones;
- "not from any film";
- age next to body words. Write "young adult".

---

## 8. When something goes wrong

| You see | Why | Fix |
|---|---|---|
| Glossy **anime** motion | "cartoon", "animation", "hand-drawn" or "on twos" is in the prompt | Delete those words and use the 5.4 lock. Anime goes only in the DO-NOT list. |
| Video **smoother than the stills** | The sheets are smoother than the location, and the model copies the biggest thing in frame. Video models also smooth grain. | Remake the sheets in the location's technique and label each input "AND THE STYLE OF THE WHOLE VIDEO". Optionally add a still paper-grain overlay in the edit. |
| Looks like **cel shading** | "flat colour shapes with crisp edges, one soft step of shading" | Use the 5.1 surface: posterised steps and broken pigment. |
| Crude **thick-paint poster** | "thick brush strokes", "impasto", "five colours" | "a richly textured painting on coarse paper, not thick impasto". |
| **Outlines** appear | The model's ink habit | "No outlines, no black linework, no crisp digital outline". Use Seedream 5 Pro. |
| Location looks like a **gallery painting** | Too much detail asked | Add 5.3 SIMPLIFICATION and cut the description to 4–5 key shapes, or use Soul mode. |
| **Flat** frame | No depth structure | The 5.5 planes, a dark cropped foreground and a sideways drift. |
| **Generic pretty face** | The model's default | 5.8. Name each default trait in the NOT list. Use 6.5 for a real person. |
| **Photo face** pasted onto a painted body | A photo was used directly | Make a painted portrait first, then 6.5. |
| **Head or boots cropped** on a sheet | The figure is too big | "THE ENTIRE HEAD INSIDE THE PANEL… drawn small enough, empty grey above and below". |
| **Extra light**: glow, rays, a lamp from nowhere | No light ownership | "the only source of ALL the light" plus "NOTHING ARTIFICIAL, NOTHING ADDED". |
| Night is a **black rectangle** | Darkness with no floor | "Properly dark, but READABLE". |
| A creature looks like a **famous film creature** | Its look was described in words | Remove every visual word about it and use the "ONLY SOURCE OF ITS APPEARANCE" line. If its sheet was made from that look, redesign it with different traits. |
| **Copyright rejection** | A film still or famous design among the inputs | Never upload film stills. Remove inputs one at a time to find the culprit. |
| Creature **pet-sized or house-sized** | Relative scale | Absolute scale tied to a person, "IGNORE the size it is drawn at", plus a negative. |
| A banned thing **appears** | Naming it summons it, or a stray "without X" in the prompt | Describe what IS there. Search your prompt for "no [item]" or "without [item]". |
| A hand or contact **changes between shots** | Described differently each time | One fixed sentence, repeated word for word. |
| **Mushy** action, beats skipped | Too many beats | At most 5 beats per 8–12 s, each a cause and its effect. |
| **Slow start** | An establishing beat | Start mid-event. |
| An object **does something invented** (closes, vanishes, appears) | The model fills the gap | Lock the camera and use a start frame plus an end frame. |
| Unwanted **snow** | Palette words imply winter | "NO SNOW anywhere" and name the season. |
| **Music** in the clip | No sound block | A SOUND block with real sounds only, ending "NO MUSIC OF ANY KIND". |

**Check every result:**
- [ ] Paper grain and broken paint are on the figures, not only on the background.
- [ ] No outlines, gloss, smooth gradients, rim light or bloom.
- [ ] Faces are flat and quiet: no anime eyes, no blush.
- [ ] At least three readable depth planes, with a dark cropped foreground.
- [ ] Light only from what is in the frame or the location.
- [ ] Scale is right next to a person.
- [ ] Costume items are present in every frame, and nothing appears from nowhere.
- [ ] Video: the style holds to the last frame and the motion is slightly stepped.
- [ ] Sound is real sounds only, unless music was asked for.
