Nov 11, 12:09 · 9 min https://higgsfield.ai/@sanjii/blogs/how-to-make-viral-animated-shorts-in-claude-full-workflow

# How to Make Viral Animated Shorts in Claude (Full Workflow)
@sanjii

## Recreate Everything
What it does: One prompt that runs this whole guide in Claude. With the free skill installed and Higgsfield connected, Claude writes and fact-checks the script, generates the character, the textures, the 3D props, the voice and the music, builds the 3D scene in code, checks it and renders a finished vertical Short.

```
Make me a 60-second animated Short in the @ricksclips3000 style with the ricksclips-short-style skill, the way this guide does it.

1. Suggest 5 topics the channel hasn't covered yet, fact-check the best one and write the script with the formula: a paradox in the first line, escalation, "You see...", a twist in the last line. About four words a second.

2. Generate the main character in Higgsfield in the exact comic proportions, then an emotion sheet with six expressions: happy, nervous, shocked, shouting, confused and neutral. Remove the backgrounds.

3. Slice the character into layers (head, body, arms, legs) and rig it into a puppet.

4. Generate hand-painted comic textures for the ground, the walls and the roofs, a 3D model for each big prop, and one flat painted background for the sky and the distance. Build small props like crates and barrels in code.

5. Generate the voiceover with my Higgsfield voice, energetic and fast, in US English, and a minimal pizzicato music bed. Get the timing of every word.

6. Build the full 3D scene in code: one shot per beat, each starting on a spoken phrase, warm daylight that turns deep blue on "You see", and a camera that glides between shots.

7. Run the stop-frame check, fix everything it flags, then render the Short at 1080x1920 with captions, voice and music, and show me the video.
```

## Why these Shorts break the algorithm
One faceless channel, @ricksclips3000, pulled more than 200 million views in the last 30 days with a single type of Short: flat 2D doodle characters inside a bright 3D world. One Short did 20 million views, another 14 million, another 8 million, all in a single week.

Every one of those is animation, and none of it needs Blender, After Effects or a keyframe touched by hand. This guide covers the whole process, from measuring the style to rendering a finished Short. Claude writes the script, builds the 3D world in code and assembles the video. Higgsfield generates everything that has to be designed. Every prompt is included, ready to copy.

## The money math
Shorts in US-heavy niches pay between $0.12 and $0.32 per thousand views. At a conservative $0.20, 200 million views in 30 days is about $40,000 from ad revenue alone.

200,000,000 views ÷ 1,000 × $0.20 = $40,000

RPM | Revenue on 200M views
$0.12 | $24,000
$0.20 | $40,000
$0.32 | $64,000

It is not easy money, but it has never been this doable: you no longer need a production studio, only two tools.

- Claude writes the script, builds the entire 3D world with code and puts the whole video together.
- Higgsfield generates everything that needs visual design: the characters, the textures, the 3D objects, the voiceover and the music.


## Step 1: Set it up once
It takes two minutes and you never touch it again.

1. In Claude, open Customize → Connectors, click Add → Add custom connector, name it Higgsfield, paste mcp.higgsfield.ai/mcp and log into your Higgsfield account.
2. Download the skill below, open Customize → Skills and upload ricksclips-short-style.skill.
3. In a new chat, click +, open Connectors and turn Higgsfield on.

```
ricksclips-short-style.skill
```

The skill holds the style's entire visual DNA: the measured rules, the prompt templates, the camera math and the scene code. It writes the generation prompts and the scene code for you. From here on, a new video is one prompt with your topic.


## Step 2: Make Claude measure the style
The number one mistake is asking Claude to "analyze these videos and tell me what the style is". It looks at two screenshots, writes a few generic paragraphs about "cartoony animation" and gives you nothing you can build from.

This style lives in details you only catch at 30 frames a second, so the skill was built from the channel's last 20 Shorts, every single frame: about 32,000 frames, condensed into 549 reference sheets and then into numbers.

**What it does:** Makes Claude measure the reference Shorts frame by frame instead of describing them.
```
Analyze all 30 frames per second across 32,000 frames. Measure the lighting angles, the shadow color values, the camera drift speed, and the cut timing.
```

*Tip:*
 never ask an AI what it thinks about a video. Make it measure. You can't replicate an opinion, but you can replicate a number.

The rulebook that came out of it:
- Characters. Completely flat 2D cutouts that live in a real 3D space. Real light hits them and they cast real shadows on the ground.
- Lines. Every object and every character has a bold dark comic outline.
- Colour. Warm sunlight against deep navy-blue shadows, and never pure black: it ruins the cartoon look.
- Camera. Almost zero hard cuts. The camera keeps gliding toward the next point of interest.


## Step 3: Write the script with the formula

Every viral script on this channel follows the same four parts:

1. A paradox in the very first line. No intro, no "hey guys". One bizarre statement that stops the scroll.
2. Rapid escalation. Two or three details that make the situation sound impossible.
3. The pivot: "You see..." The tension breaks and the explanation begins. Listen to ten of their videos in a row: the phrase is there like clockwork.
4. A twist in the last second. One more surprising outcome right before the video loops.

Delivery is strictly four words a second with zero pauses. Before Claude writes a word, it checks which topics already performed on the channel, picks one the channel hasn't covered and fact-checks everything. A wrong fact gets roasted in the comments and your retention drops.

**What it does:** Finds a fresh topic, fact-checks it and writes the script to the formula.
```
Using the ricksclips-short-style skill, suggest 5 topics this channel hasn't covered yet. Fact-check the best one, then write a 60-second script with the channel's formula: paradox first line, escalation, "You see…", twist.
```


## Step 4: Build the character

Most attempts at this style look like stock clipart pasted on a random image: the characters don't fit the background, float in mid-air and look dead. Three requests fix that.

**The main character**
Main Character

*What it does:* Generates the main character as a flat comic cutout, right inside the chat. Above is our character in the finished Short.

```
Using the channel skill, generate our main character in the exact comic proportions.
```

Our first render looked broken: the head was 40% too small and the legs bent backwards like a folding chair. We had assumed realistic anatomy. The channel uses a 1-to-2 ratio, with the head almost as big as the whole torso. Once that ratio went into the skill, the character matched.

**The emotion sheet**
Emotion Sheet

*What it does:* Generates one head with a full set of expressions, and Higgsfield strips the background clean. Above are the faces as they appear in our Short.

```
Now generate an emotion sheet for this character: one head with six different facial expressions—happy, nervous, shocked, shouting, and confused.
```

**The puppet**
Character Puppet

*What it does:* Slices the cutout into separate layers and rigs them into a puppet controlled entirely by code. Above are three moments of the puppet acting in our Short.

```
Take this cutout, slice the character into separate layers—head, body, arms, and legs—and rig it into a digital puppet.
```
The code adds micro-movements: subtle breathing, slight shoulder bobs and small eye twitches. That is what makes the character feel alive instead of frozen.


## Step 5: Build the world in three layers

The world around the character has three visual layers, and the third one is the real secret.

**Layer 1: Textures**
Textures

*What it does:* Generates comic-style, hand-painted textures for the surfaces of the world. Above are surfaces from our Short.
```
Generate comic-style, hand-painted textures for wood planks, stone walls, roof shingles, and dirt paths using Higgsfield.
```
Painted textures in place of flat colours are what make the final video look like a high-budget production.

**Layer 2: Hero objects**
Hero Objects

*What it does:* Creates a lightweight 3D model of each big prop straight from the prompt, and Claude places it into the code scene. Above are props from our Short.

```
Generate a 3D model of a windmill and a horse cart.
```

**Layer 3: The background**
The secret: the sky and the distant scenery need no geometry at all. Ask Claude to generate them as one flat 2D image in Higgsfield and place it behind the scene with a soft blur.

Tiny props like crates and barrels need no generation either. Tell Claude to write them as basic 3D primitives in code. It takes seconds.



## Step 6: Voice, music and timing
Ask Claude to generate the voiceover with your Higgsfield voice clone: energetic, fast-paced and punchy. Then a background track: minimal cartoon pizzicato strings that build tension without overpowering the voice.

Once the voice track is ready, Claude tags the timing of every word in the script, so every visual action syncs to the speech.

*Tip:*
 always check the audio language. YouTube once served us a German dub of a reference video. Lock the output to English (US).


## Step 7: Build the scene in code
Build the Scene

*What it does:* Sets up the virtual 3D stage, places the camera and the lights, and drops in the puppets and the 3D objects. Above is our finished Short with stills from four of its scenes.
```
Build the full 3D scene in code.
```

Setting | Value
Frame  | 1080x1920, 30 fps
Light | Warm golden sun on the hook, deep blue from "You see..."
Camera move | Eased in and out over about 0.8 seconds
Hard cuts | Almost none
Captions | One or two words, changing on the word

The camera never jerks or snaps. It glides forward like it is on a real studio dolly track.

*Tip:*
 always have Claude run a stop-frame check before the full render. Our first big render wasted 20 minutes on a camera placed inside the wall of a house: 30 seconds of grey brick. Three snapshot frames per shot catch that before it costs you a render.


## Step 8: What broke and how we fixed it
Put your test render next to the original and ask Claude to compare the two frames with numbers, not by eye: contrast and shadow depth. Two bugs came up for us.

- Floating characters. Our character looked like he hovered two inches above the road. The original has a dark, soft contact shadow right under the boots, what 3D artists call ambient occlusion. With it the character is pinned to the ground.
- Agents overwriting each other. We ran 12 Claude sub-agents at once. Three of them edited the same scene code in the same second, overwrote each other's coordinates, and half the buildings vanished.

*Tip:*
 when you run several agents, split the files, not only the jobs. One agent owns the lighting, one the camera, one the assets, and none of them touches another's file.

## Step 9: One script = one Short

The first video takes testing, debugging and building assets. After that, the characters, the textures and the 3D props are a permanent library that you generate once.

For the second, fifth and twentieth video you don't rebuild the world. Give Claude a brand-new script: it grabs the existing set, places the character, changes the camera path and renders a finished Short in under 10 minutes. Two or three Shorts a day is realistic without opening an animation app.

**The whole formula on one screen**
Screenshot this table; it is the entire playbook.

Part | What to do
Tools | Claude plus Higgsfield, connected once, with the free skill
Style | Measure 20 Shorts frame by frame; four rules for characters, lines, colour and camera
Script | Paradox, escalation, "You see...", twist; four words a second
Character | utout in 1-to-2 proportions, emotion sheet, puppet rigged in code
World | Painted textures, 3D hero objects, one flat blurred background
Sound | Cloned voice, pizzicato bed, every word timed
Build | Scene in code, stop-frame check, numbers comparison, render
Scale | ne asset library, a new script per video

Everything in this guide, every rule, every number and the workflow, is in the free skill above, and it gets updated as new models drop. The same framework clones any visual style on YouTube: measure the reference, build the assets once, and let Claude assemble every video in code.