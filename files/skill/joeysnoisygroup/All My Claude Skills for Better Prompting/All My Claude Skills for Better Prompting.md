Sep 25, 03:20 · 13 min

# All My Claude Skills for Better Prompting
@joeysnoisygroup

https://www.youtube.com/watch?v=5dWgZDka3Ww

**The 6 Claude Skills I use in my AI Video Workflow (updated November 13, 2026)**
If you came here from one of my videos, thanks for being here! If you didn't, the short version is that I'm a full-time filmmaker in the real world who has been building AI films for about 6 months, and everything I make runs through a set of Claude skills I've written, broken, rewritten, and rebuilt more times than I can count. Today I'm giving you all of them for free. Some of them you have already downloaded but I've updated them and given them a new name. You'll see which ones are new and which ones have been renamed.

(Note: Many have reworked these skills for Chat-GPT Codex and say it works just as well)

I've always believed that tools shouldn't be a secret. When I started, most of what I found was either locked behind a paywall, vague on purpose, or built to pump out the same slop everyone's already scrolling past. I didn't want to make that, and I didn't want to learn from people who were gatekeeping the parts that actually mattered, so I figured it out the long way... prompt by prompt, generation by generation, and 100% failure by failure. These skills are what that process turned into.

Each one does a specific job and it's important to know how each one works.

They work on their own, but they work best together. Build the world, lock your cast, set the scene, and make that film. That's the pipeline I use on my own original projects, and it's the one I'm sharing on my YouTube channel for free to whoever is starting out.

Below you'll find what each skill does, how they run, and exactly what to ask your LLM for to get the best results out of them. Download them, install them, take them apart, and make them yours. And if you make something with them, I want to see it! Shoot me a DM on Instagram.

Peace, love, and ai.
— Joey


# HOW TO INSTALL THESE SKILLS
Download each .zip file to your local computer
Do not extract
Open the 'Settings' in Claude
Find 'Customize' in the sidebar
Click over at the 'Skills' tab and make sure 'Yours' is selected
Click the '+Add' button and upload the entire .zip file
You can turn on or off any skill you'd like to use or not use 


## Voicesheet v1: Voice Consistency Prompt Engine
*(newest skill as of Nov 13, 2026)*

```
voicesheet-v1.zip
```

What it does: Voicesheet walks you from nothing to a finished video character reference: one short Seedance 2.5 clip that locks your character’s face, outfit, voice and the way they perform dialogue. The clip has two panels on a flat gray field. The left panel is a montage of full-body turns and tight inserts of the outfit details. The right panel is one unbroken close-up of the face, lipsyncing a phonetic pangram in the character’s own voice, with the head turning through the full emotional range. Save that clip as an Element, and every later generation knows how your character looks, sounds and emotes. There’s also an optional second prompt, a prop scale reference that locks the size of anything your character carries (a weapon, a bag, a phone), so it stops drifting from shot to shot.


**How it works:** this process runs in stages for the best results.
1. Language and pangram. First it asks what language your character speaks, because every language has its own sounds. It uses a phonetic pangram, which covers every sound the language makes, not just every letter. For every language, it builds one and shows you a coverage table of every sound and the word where it appears.
2. Personality and tags. Next, give it two or three adjectives for who your character is: shy, cool, bratty, aggressive. It tags the pangram with ElevenLabs emotion tags across the full range (curious, playful, a laugh, a whisper, a gasp, a shout, a sigh), each one shaped to the personality. It also writes a voice design description you can paste into ElevenLabs.
3. Voice clip. It walks you through generating the audio in ElevenLabs and downloading it.
4. Voice video. Drop the audio on a black frame in any editor, set the length in whole seconds, and export at 720p. That file is your voice reference.
5. Character sheet. Use your own 3-panel sheet, or build one with Castkit (skill below) first.
6. Character intake. It confirms the personality, the tagged pangram you actually used, and the clip length.
7. The reference prompt. It hands off to Shotcaller to write the two-panel prompt, with every head turn and facial beat mapped to the voice tags so the face and the voice match.

IMO: use Eleven v4 or whatever the newest tag-capable model is. Models without tag support read the brackets out loud or ignore them. Generate several takes and pick the one where every emotion actually lands, because regenerating is cheaper than settling. If you’re building a pangram for a language you don’t speak, have a native speaker read it once before it goes into the voice model.


**How to prompt it in your LLM:**
- Say what language your character speaks and who they are in two or three adjectives, not their backstory. “Korean, cool and controlled, a little dry” is enough.
- Tell it where you’re starting. If you already have a voice clip or a character sheet, say so and it skips ahead to the next stage.
- Give it the exact length of your voice video in whole seconds. Every timing in the prompt is built from that number.
- Tell it your reference tags. Say whether you’re using Element handles or want plain @imageN tags, and upload your character sheet so it can read every garment and detail.
- For a prop scale reference, attach an image of the item, give its real size, and say how your character carries it: one hand, two hands, slung, holstered.
- Once the render is done, save it as an Element in Higgsfield. From then on, tell Shotcaller it’s a video character reference sheet whenever you tag it, and it’ll lock look, voice and performance all at once.

**Example asks:** “Build a voicesheet for my character. She speaks Korean, she’s bratty and chaotic.” Or: “I already have my voice clip, it’s 12 seconds, here’s my character sheet.” Or: “Make a pangram for a Spanish-speaking character.” Or: “Prop scale reference for her katana, 100cm, held in two hands.”


## Shotcaller v2: Seedance Prompt Engine
(last updated Nov 9, 2026)

```
shotcaller-v2.zip
```

**What it does:** Previously Joey's "Cinema Director Skill," Shotcaller writes production-grade Seedance 2.0 and 2.5 video prompts on a locked 16-slot structure. That structure covers the header, style, no-on-screen-text block, critical blocks, assets, geometry map, first frame, lens locks in FOV degrees, camera, light, atmosphere, timecoded action, physics, acting, audio, and locks. It handles action, choreography, product shots, performance, strobe, lipsync to an attached track, silent scenes, dialogue, and video extensions.

**How it works:** First it asks which Seedance version you're on, because that sets the limits. Version 2.0 allows 9 references and 15 seconds. Version 2.5 allows 50 references and 30 seconds. IMO: Seedance 2.5 has the best color and renderings, but you run into audio issues regardless of how you prompt (possibilities of background music). The best way to remove the background audio is through moises.ai I've found.

Next it gives you a short pre-prompt check listing your references, scene, dialogue, camera, audio, and runtime. After you approve, it delivers three things: a numbered list of references in the order you attach them, a titled prompt with the runtime, and one code block you can paste. Once a prompt is approved, tweaks come back as the full revised prompt without another check. Anything longer than the version's runtime cap gets split into separate prompts.

**How to prompt it your LLM:**
- Give the version up front, attach your references, and describe the scene in plain language: who's in it, where it happens, what happens, etc.
- Be sure to mention up front if you're using element tags or you want it to just use numbered @imageN tags
For dialogue, paste the script with speaker labels. It will write every line word for word and assign it to the right speaker, with the delivery written separately.
- For lipsync, say the audio track is attached. It becomes the only audio source.
- For extensions, say "extend this clip" and describe what happens next.

Example asks: `"Seedance 2.5, 12 seconds, two characters arguing in a kitchen, here's the script." Or: "Break this scene into shots." Or: "Lipsync performance shot, track attached."`


## Castkit v1: Character Prompt Engine
```
castkit-v1.zip
```

What it does: Previously "Banana Pro Director" – now its own skill, Castkit builds reusable character reference images, photoreal or animated, for Nano Banana Pro and other image models (Seedream, Chat-GPT). Every image renders on a flat 18% neutral gray background with shadowless light, so no lighting gets baked in and carried into later shots.

**How it works:** The skill is organized into five stations, and you move through them in order:
1. Face lock: creates the character's canonical chest-up image.
2. Additions: changes hair, adds piercings, tattoos, or scars, builds expression sets, or re-locks the face.
3. Outfit build: puts a look on the locked character as one full-body image, after you approve a text proposal of the outfit.
4. Outfit replacement: swaps your character onto an outfit that already exists on someone else, using two references.
5. Character sheet: turns an approved outfit image into a sheet. The default is 3 panels (headless front, full rear, tight face), all shot straight on; 6 panels are available on request.

It won't skip ahead: an outfit needs a locked face first, and a sheet needs an approved outfit.




**How to prompt it:**
- Say whether the character is photoreal or animated. For animated, describe the style in your own words. If you don't have one, it offers three: graphic realism, stylized 3D, or 2D hand-drawn.
- To create a new character, describe the face and identity markers, or attach inspiration. For outfits, attach garment references.
- Already have a photoreal character? Attach it and ask for the animated version. The face and proportions stay the same; only the rendering style changes.

Example asks: `"Build me a new character: sharp jaw, bleached buzz cut, septum ring, photoreal." Or: "Put these three garments on my locked character." Or: "Make a character sheet from this approved outfit." Or: "Turn this photoreal character into graphic-realism animated."`


## Scenecraft v1: Scene Plate Prompt Engine
```
scenecraft-v1.zip
```

What it does: Previously "Banana Pro Director" – now its own skill, Scenecraft writes photoreal environment and location images ("plates") for Nano Banana Pro, Seedream 5.0 Pro, or any other image model. It plans the composition silently first, then writes the prompt as five paragraphs of prose in a cinematographer's voice. Light is described by direction, quality, and temperature. Atmosphere fills the whole frame, with no fog.


**How it works:** There are four plate types:
A, Environment: an empty location. This is the default.
B, People in scene: characters placed into a location, which also works as a first frame for video.
C, Coverage set: several angles of the same location that agree on geometry and light.
D, Plate edit: changes an existing image while protecting everything else.
It adjusts the prompt for whichever model you name. For example, on Seedream it uses HEX colors and puts in-world text in quotes.



**How to prompt it**:
- Name the model, describe the location, time of day, and mood, and attach any location, mood, or character references.
- It helps to say what each reference is for, like "this one is palette only."
- For coverage, ask for reverse angles or "a wide and a medium of the same room."
- For edits, attach the plate and say exactly what changes.

Example asks: `"Abandoned subway platform at 3am, practical light only."  Or: "Put these two characters into this diner as a first frame." Or: "Change this plate from day to dusk, keep everything else."`


## Motiondojo v1: Genjutsu Prompt Engine (motion transfer)
```
motiondojo-v1-SKILL.md
```

What it does: Motiondojo writes lean prompts for Higgsfield Genjutsu. It takes the movement from a reference video and puts it on new characters in a new world, with real gravity and bodyweight in every move.

**How it works:** It writes one of three forms:
1. Body Copy: your characters copy the exact motion, and the camera matches the video.
2. Camera Copy: only the video's camera path carries over into a new scene.
3. Body Copy, New Camera: the exact motion stays, with a rebuilt handheld camera that moves naturally around it.

Every prompt opens with a hard mouth lock, which is one of three settings: mouths closed, the exact words spoken in the video, or mouths matching the video's movement. The motion video is attached separately and never tagged in the prompt. All other references use `<<<image_N>>>` tags. There's no audio block, since Genjutsu doesn't generate sound.


**How to prompt it:**
- Attach a screenshot of your motion video and your character and location references.
- Say which form you want, in plain language if you like. "Same moves, same shot" means Body Copy. "Use that camera move on my scene" means Camera Copy. "Same dance, but make the camera feel alive" means Body Copy, New Camera.
- Tell it which character maps to which performer (left, center, right).
- If anyone speaks in the video, paste the exact transcript.

Example asks: `"Put these two characters into this dance video, left and right, same camera, rooftop at golden hour, no one talks." Or: "Take the camera move from this clip and use it on my alley scene."`


## Story Bible Builder: Canon document interviewer
```
story-bible-builder.zip
```

**What it does:** Story Bible Builder interviews you about your story world and assembles everything into one dense SKILL.md file that you install as your own custom skill. From then on, every Claude session knows your world: premise, thesis, timeline, aesthetic eras, factions, locations, rules, characters, relationships, plot engines, and production rules. The character sections include voice, movement, and stillness descriptors that are ready to paste into prompts.

**How it works:** It starts with a quick scope check covering title, number of characters, genre, how much already exists, and which tools you'll use. Then it walks through the world section by section, with characters as the biggest section. The finished bible works two ways. It can stand alone for writing, lyrics, and image prompts. Or it can sit next to a video director like Shotcaller and feed it voice, movement, era, and locked visual traits that a reference image can't carry.

**How to prompt it:**
- Say "build me a story bible" and give it the working title and a rough pitch.
- Answer the interview honestly, including the parts you haven't figured out yet; it helps build those with you.
- If you only need part of it, say so. For example, "just lock my characters" jumps straight to the character section.
- To update an existing bible, paste it in and say what changed.

Example asks: `"Build a story bible for my sci-fi series, four main characters, I'll be using Seedance 2.5." Or: "I just want to lock my characters' voices and movement." Or: "Here's my existing bible, add a new faction."`