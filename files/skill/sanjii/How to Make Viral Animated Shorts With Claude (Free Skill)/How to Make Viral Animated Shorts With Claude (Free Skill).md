Nov 9, 19:15 · 5 min https://higgsfield.ai/@sanjii/blogs/how-to-make-viral-animated-shorts-with-claude-free-skill

# How to Make Viral Animated Shorts With Claude (Free Skill)
@sanjii

One faceless channel pulled more than 235 million views in the last 30 days with a single type of Short: flat 2D doodle characters inside a bright, stylized 3D world. So I made my own — a 58-second Short about the 1902 rat-tail bounty in Hanoi — without leaving Claude. Claude wrote and fact-checked the script and drove Higgsfield through the connector for every character, set, keyframe and clip. Everything it learned about the style is in one free skill below.

v8_final.jpg
The last shot of our Short: the rat that beat the bounty.

**The free skill**
ricksclips-short-style is a Claude skill with the measured style rules, the camera math and the workflow, so Claude makes every new Short in the same style.

SKILL.md — the four core rules and the full workflow
references/rules.json — every measured number, from 34,359 frames
scripts/stage — a three.js stage, a renderer and a rule checker
examples — a test scene and a verified test render
```
ricksclips-short-style.skill
```


## Step 1: Set it up once
1. In Claude, open Customize → Connectors, click Add → Add custom connector, name it Higgsfield, paste mcp.higgsfield.ai/mcp and log into your Higgsfield account.
2. Open Customize → Skills and upload ricksclips-short-style.skill.
3. In a new chat, click +, open Connectors and turn Higgsfield on.

Claude writes the script and plans every shot. Higgsfield generates everything you see and hear: the characters, the sets, the keyframes, the animation, the voice and the music.


## Step 2: Make Claude measure the style
Ask Claude to "analyze a video" and it samples a few frames. This style lives in details you only catch at 30 frames per second: a slow camera push, a tinted shadow, a quick move between shots. So the skill comes from the channel's 20 most recent Shorts, every single frame: 34,359 frames, condensed into 549 shot reference sheets and then into numbers.
```
Download the 20 most recent Shorts from this channel. Watch every frame at 30 fps, not a sample. Turn every 2 seconds into a reference sheet, measure the lighting, contrast, shadow colour, camera movement and cuts, and write it all into a rulebook with the numbers.
```

*Tip:* don't ask Claude what it thinks of a video. Make it measure. You can't recreate an opinion, you can recreate a number.

**The four core rules**
- Character. One doodle figure whose round, outlined off-white head fills about a fifth of the frame width. Characters are in 77% of shots.
- Line. An even, thick outline, never pure black.
- Colour. Warm orange-red against cool blue; shadows tinted red-brown, blue or violet and lifted off black.
- Camera. It moves in almost every shot, mostly pushing in: arrive fast, then settle. Hard cuts are under 1%.


## Step 3: Write the script with the channel's formula
1. A paradox in the very first line. No intro, no setup.
2. Escalate.
3. "You see…" — the pivot into the real reason.
4. The twist in the last line.

Delivery is almost four words a second with no dead air. Before Claude writes a word, have it fact-check every date and number, and check the channel hasn't already covered the topic. Ours: in 1902 the French administration in Hanoi paid a bounty for every rat tail — so people cut the tails off and let the rats go, to breed more.

```
Using the ricksclips-short-style skill, suggest 5 topics this channel hasn't covered yet. Fact-check the best one, then write a 60-second script with the channel's formula: paradox first line, escalation, "You see…", twist.
```


## Step 4: Cast the characters
Every character is its own Nano Banana Pro image (2:3, 2K) with two or three style reference frames attached: one figure, full body, on a plain warm-grey backdrop with a soft contact shadow. Spell out the design language every time — round off-white head, dot eyes, thick eyebrows, stick limbs — and only change the costume and the props. Our cast: the colonial official, the clerk, a townsman with scissors, a woman with a bucket of tails, the rat catcher, the farmer, the rat and the rat without a tail.

Upload: `v8_cast.jpg`
```
Exact same art style as the reference images (same character design language, same line weight, same shading); the third reference shows the exact asset format to copy: one character on a plain flat backdrop. 2D cartoon doodle character: a big round off-white head about as wide as the body, with a soft grey cel-shadow on one side, tiny solid black dot eyes, thick expressive black eyebrows, tiny simple line mouth, no nose, no ears; thick uniform black outline. Body is a soft rounded bean-shaped torso covered by simple flat-colored clothing with one soft shadow tone; arms are thin solid black stick lines ending in small round black dot hands; legs are two thin solid black stick lines with no trousers, no feet and no shoes drawn, coming straight out of the bottom of the torso. Clean vector lines, flat colors, no texture. Character asset: ONE character, full body, standing, centered, whole figure visible from the top of the head to the tips of the stick legs, on a solid uniform light warm-grey backdrop with a soft contact shadow; sharp focus everywhere, no environment, no fog, no blur, no gradient, no fade at the bottom. Character: a smug French colonial official from 1902 — white pith helmet with a thin tan band, thin curled black mustache, half-closed smug eyes with one raised eyebrow, the torso wears a crisp white linen colonial jacket with small brass buttons and a narrow black necktie, stick arms clasped behind his back. No text, no labels, no captions, no extra characters, no color swatches.
```


## Step 5: Build the sets
Sets are generated the same way, as empty location plates: Nano Banana Pro, 9:16, the same style references, and no people, animals or text in the frame. Eight sets carry the whole Short — the boulevard with the manhole, the sewer, the office window, the café, the alley, the rice fields, the barn and the official's office.

Upload: `v8_sets.jpg`
```
Exact same rendering style as the reference images: a clean, bright, stylized 3D cartoon environment like a modern animated game render — simplified geometry with soft rounded bevels, clean smooth textures with very little detail (no grime, no cracks, no realistic wear), crisp edges, bright even ambient light with soft colored bounce light, simple crisp shadows, light bloom on bright areas, saturated but soft colors, only a touch of haze, not photorealistic, no film grain. Location plate: an empty set with NO people, NO characters, NO animals, no text, no captions, no letters on any sign. Vertical 9:16 frame. Location: a quiet colonial-era boulevard in Hanoi in 1902 on a sunny afternoon — clean cream-yellow French colonial two-storey buildings with green wooden shutters and terracotta tile roofs, round stylized tamarind trees, a clean cobbled road, a round cast-iron sewer manhole cover in the center foreground, and on the right a plain plastered wall with an empty wooden notice board. Low camera at street level looking down the boulevard.
```


## Step 6: Compose start and end keyframes
Each shot is two images: a start frame and an end frame. Attach the set, the character sheets and one style frame, and Nano Banana Pro draws the flat characters into the 3D set with matching light and shadows.

*Tip:* for a camera push-in, crop the start frame closer and have Nano generate the end frame from the crop. The video model then glides between the two.

`v8_lyuk_start_end.jpg`
For action, draw the end state into the end frame: the official mid-spit, the tea spilling, the rat already passing. Put small characters into both frames, so the video model doesn't lose them halfway.

`v8_kafe_start_end.jpg`


## Step 7: Animate between the keyframes
Every clip is start frame → end frame plus a prompt timed second by second: Wan 3.0 Prime (1080p, 5 s, 9:16, sound off, thinking on) or Kling 3.0 (pro, sound off). Keep the camera static when the action is the point.
```
Polished 2D cartoon animation in the exact style of the start frame: flat doodle characters with clean thick black outlines, tiny black dot eyes, thin black stick limbs, soft cel shading and soft cast shadows, inside the clean stylized 3D street at dusk with warm lamp light. Static camera. 0–2s: the colonial official in the white pith helmet calmly sips his tea with his pinky out, his eyes tiny calm black dots, not noticing anything. 1–3.5s: the small grey rat with a very short white-bandaged tail stub runs from the left edge across the cobblestones in the foreground toward the right, the same rat in every frame. 3–5s: the official notices it, his dot eyes pop into huge round eyes, he spits out his tea in a spray, the cup tips and the tea spills across the table and drips off the edge; the rat glances back with a sheepish grin near the right edge. Snappy, clean cartoon timing. Characters keep their exact shapes and proportions in every frame: no morphing, no warping, no melting, crisp stable outlines. The official does not talk. No new characters, no text, no captions.
```

*Tip:* keep the "no morphing, no warping, crisp stable outlines" line in every video prompt. If one detail drops out — on our final push-in the rat's eyebrows vanished — generate a short add-on pass for that moment instead of re-rolling the whole shot.


## Step 8: Voice, music and the edit
Generate the voiceover with your Higgsfield voice clone — energetic, fast, punchy — and lock the language to English (US): the first time, YouTube handed Claude the German dub of a reference video. Add a minimal pizzicato string bed under the voice and cut the clips to the narration. Ours is 14 shots in 58 seconds.


## Step 9: One script = one Short
The characters, the sets and the style are a library you build once. Put them in a Claude Project with one instruction, and every new Short is a new chat with nothing but the script.

```
Shorts for our channel. When I paste a script and nothing else, build the finished vertical Short end to end with the ricksclips-short-style skill: reuse our cast and sets, compose the keyframes, animate every shot, voice it with our Higgsfield voice and show me the video. Don't ask me questions first.
```

Everything in this guide — every rule, every number and the workflow — is in the skill above, free. I'll keep updating it as new models drop.
