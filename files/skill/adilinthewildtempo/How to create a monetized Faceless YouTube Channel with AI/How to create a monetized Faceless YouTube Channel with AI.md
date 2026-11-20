Nov 11, 04:28 · 9 min https://higgsfield.ai/@adilinthewildtempo/blogs/how-to-create-a-faceless-youtube-channel-with-ai

# How to create a monetized Faceless YouTube Channel with AI
@adilinthewildtempo https://www.youtube.com/watch?v=YP8D2_j3_Hc


We did the research and found AI faceless channels earning an estimated $15,000+ per month, publishing just one video a week. But the most interesting part is that they were created just a couple of months ago.
Their secret is simple: the right high-paying niche and a unique visual style.
In this guide, we’ll recreate the workflow with Claude Fable 5.2 and Higgsfield. Fable researches the topics and writes the scripts, while Higgsfield generates the visuals and audio. You’ll get the four skills and every prompt you need to create your first video and start building a faceless channel.

**Download the four skills**
```
higgsfield-faceless-script.md
```

*Researches the topic and writes the script, from the hook to the outro, with a storyboard.*
```
higgsfield-seedance-prompts.md
```

*Writes the generation prompts, including camera moves, lighting and action.*
```
higgsfield-faceless-production.md
```

*Generates the video, voiceover, music, sound effects and motion graphics through Higgsfield, then edits everything together.*
```
higgsfield-youtube-packaging.md
```


Creates the thumbnails, titles, description and tags.
Download the files above. Recreate opens the prompt; attach the listed skill files and any source video to the chat before sending it. Files already attached in the same conversation do not need to be uploaded again.

You can also install Higgsfield Instant for Chrome to see timestamped steps, prompts and downloadable files beside YouTube videos with a Higgsfield guide. Click Recreate to open Higgsfield with the prompt and model already selected.


## STEP 0: Is YouTube actually demonetizing faceless channels?
Yes, YouTube has cut off monetization for some AI channels. These are the three things to watch out for in its monetization rules:

1. Mass-produced content that offers no educational or creative value.
2. Emotional bait made for clicks, like fake animal rescues.
3. AI versions of real people or fake experts giving advice on health, money or legal issues.

But YouTube allows AI content, and the AI label itself does not reduce your reach or monetization eligibility. So this is an opportunity for anyone who learns the rules and follows this workflow.

Look at The Last Day, Ink Explainer and Tracer Project. 

The Last Day, for example, was created in July. When we recorded this tutorial, vidIQ estimated its monthly earnings at $15.4K, with roughly one video a week. It had already reached 14 million views from 23 uploads. And one video alone had more than five million views, over a third of the channel’s total.

That’s why faceless channels are getting so much attention again. And science topics are evergreen: people keep coming back to them. 

---

## Step 1: What should you make videos about?

YouTube earnings are measured per thousand views. That’s called RPM, and it changes depending on the niche and audience. At a $4.50 RPM, a video with 1.6 million views would bring in about $7,200. From one video.

For this channel, I’m choosing Science and Education, specifically English-language science documentaries. You can explore other niches in Higgsfield Content Factory, but we’ll start with “What if…” videos and explainers.

*"To find a topic, ask Claude Fable which videos have been getting millions of views across different creators over the past five years, what people are watching on other social platforms, and what’s going viral right now. Then ask it for the three best topics:"`*

Attach `Faceless Script (.md)` to the chat, then run this prompt.
```
Use higgsfield-faceless-script. Research three topics for an original five-minute English “What if…” science documentary. Check recurring interest across YouTube over the past five years, recent successful videos, and relevant examples in Higgsfield Content Factory. Read accessible audience comments for unanswered questions. For each topic, give me a clear viewer question, one visual hook, the scientific payoff and direct evidence links with dates and visible metrics. Separate verified evidence from guesses. Recommend one. Do not generate media yet.
```
*Youtube version:*
```
Research which topics got over a million views for different creators again and again over the last 5 years, Then open Higgsfield Content Factory to find 3 most viewed and liked topics there.

Check what's getting attention on other social media platforms and what's going viral right now, Give me the 3 best topics for a 5-minute "What if..." science video, with proof for each one.
```

---

## Step 2: Choose the visual style

Before we generate anything, let’s talk visuals. There are plenty of styles to choose from, but we need one that grabs attention.

Go to `Higgsfield Content Factory.` Here, you can see which styles and topics get the most views and likes. That’s your signal for what visually grabs people. Or you can upload your own reference.

Look at the on-screen text and motion graphics in the examples. They help hook viewers and keep them watching, and Higgsfield can add them to your video too.

For this video, I’m going with realism. I want the visual hook to be the asteroid hitting Earth. Before generating the full video, you can ask for a moodboard and storyboard to see what you’re going to get and avoid spending credits blindly.

---

## Step 3: Write the script and generate the video

Give Fable the skill and ask it to write a script on our topic. It uses my structure: hook, intro, body, recap and outro. For this format, the hook usually starts with “What if…”.

Keep `Faceless Script (.md)` attached and continue in the same chat. If you open a new chat, attach the file again and include your topic research.
```
Use higgsfield-faceless-script. Write a roughly five-minute English “What if…” documentary about a hypothetical Apophis impact. Verify the science and make the hypothetical premise unmistakable. Research relevant questions and accessible audience comments before writing.

Use hook, intro, body, recap and outro. Open with the impact, then rewind to explain the asteroid, the sequence of consequences, what changes at different distances, and how early detection could change the outcome. Give each section a question and a payoff. Include a storyboard with narration, visual action, graphics and sound cues. Use faster visual changes in the opening minute, then let clear explanations breathe. Flag any uncertain numbers for review.
```
*Youtube Version:*
```
Let's go with Apophis. Use the faceless script skill. Write a script for a 5-minute "What if..." documentary about what would happen if Apophis hit Earth.
Before writing, research the topic and read the comments under popular faceless videos about it: what people care about, what's missing, what grabs them.
Structure: hook, intro, body, recap, outro. The hook starts with "What if...".
In the first minute, the shots change every 5–10 seconds. After that, switch to 30-second one-shots.
```

Now connect `Higgsfield MCP` and add the Seedance Prompts and Faceless Production skills. They handle the camera moves, lighting, storyboard, sound and editing. We’re using `Seedance 2.5` at 1080p for the video.

What If Apophis Hit Earth? · 4:33
Before running this prompt, attach these three files: `Faceless Script (.md)`, `Seedance Prompts (.md)` and `Faceless Production (.md)`.

```
Use the attached Higgsfield Faceless Script, Higgsfield Faceless Production, and Higgsfield Seedance Prompts skills to recreate the documentary below as one finished video through the connected Higgsfield MCP.

Generate and edit the actual media in Higgsfield. Use Seedance 2.5 for the video shots at 1080p, 16:9. Use the connected Higgsfield image and audio tools for references, narration, music and sound effects. Deliver a downloadable 1920 × 1080 MP4 with the full edit and mixed audio; do not stop at a script, an HTML animation, a storyboard or a set of separate clips. If a required Higgsfield tool or model is unavailable, say which one is missing before substituting anything.

VISUAL DIRECTION
Photorealistic science documentary: believable scale, physically coherent action, natural lighting, restrained color and detailed environments. Start with an asteroid approaching Earth and reach the impact within the opening ten seconds. Keep one consistent asteroid shape, one consistent city and the same people across related shots. Generate and reuse reference images before the video shots. Show a compact moodboard and storyboard first, then produce the shots and assemble the complete film. Use varied shot lengths, with faster changes in the opening minute and longer takes when an explanation needs room. Use the fixed truck/garage escape scene, with clear screen direction and coherent movement.

NARRATION AND SOUND
Use one natural adult documentary voice: calm, curious and clear. The reference project used Max through ElevenLabs; use that voice if it is available through the connected tools, otherwise ask me to select an available replacement. Give numbers room to land and align the explanation with the shot. Build tension into the hypothetical impact, pull the music back for the rewind and explanation, then resolve the score during the safe flyby. Add localized impact, debris, glass, traffic and room sounds where the scene calls for them; keep the narration intelligible. Do not put an effect on every cut.

EDIT AND GRAPHICS
Build motion graphics and readable contextual labels for size, speed, energy, distance, elapsed time and orbital deflection. Time each label to the sentence that explains it. Keep graphic text out of the generated footage and composite it in the edit. Use a visible HYPOTHETICAL SCENARIO label for the imagined impact and REAL 2029 FLYBY for the safe encounter. Keep those two timelines unmistakably separate. All footage and illustrations should be original or properly licensed.

Check the science before generating. The real Apophis encounter is a safe flyby. Treat the impact speed, energy, crater size and damage zones below as scenario assumptions and estimates, not as an actual forecast; if a number is unsupported, flag it and use a supported explanation. Preserve the hook, rewind, personal consequences, planetary-defense payoff and intact-city ending.

Use this complete script and visual plan:

# What If Apophis Hit Earth?

Target runtime: approximately 4 minutes 33 seconds. Use varied shot lengths that fit the narration.

## 01 · HOOK & INTRO · 0:00–0:55.25

What if Apophis hit Earth on April 13th, 2029? A hundred kilometers away, the light arrives first. Everything else is still on its way.

**Scene dialogue:** “…get in the car! Leave it!”

Okay, let's rewind.

To be clear, the real Apophis will miss us. NASA has ruled out any impact for at least the next hundred years. But in this scenario, it doesn't miss.

**Visual direction:** Open on Apophis, accelerate into the impact, then stay with people in its path. Reverse the disaster at 0:36.50. Reveal the real safe flyby at 0:39.83, then return to the hypothetical question.

## 02 · BODY — SIZE, SPEED & ENERGY · 0:55.25–1:25.04

Apophis is a stony asteroid, probably shaped like a peanut. On average, it's 340 meters across, about the height of the Eiffel Tower. But size is only half the story. In our scenario, it reaches the atmosphere at about 13 kilometers per second, fast enough to cross from New York to Washington in under half a minute. At that speed, it carries roughly 1,000 megatons of energy, about 20 times the most powerful nuclear bomb ever tested.

**Visual direction:** Use one consistent asteroid design. Build the scale, speed and energy comparisons over the asteroid/Earth shots. Let each number appear as the narration explains it.

## 03 · BODY — IMPACT & THE CITY 100 KM AWAY · 1:25.04–2:16.54

Back to April 13th. As it plunges into the atmosphere, the air in front of it is compressed so violently that it glows. About 56 kilometers up, the rock starts to crack apart. But it's too big and too fast to break up in time. From the first glow to the ground, about 10 seconds. On impact, rock vaporizes. A fireball several kilometers wide rises over the plains. In under a minute, a crater opens. About 4.5 kilometers across, nearly half a kilometer deep.

Debris rains down across the region. From orbit, it's a single point of light and a plume of dust that keeps growing. In our city, 100 kilometers away, the flash is blinding, but too distant to burn. 20 seconds later, the ground shakes. And almost four minutes after the flash, the air blast arrives. Windows across the city shatter.

**Visual direction:** Follow entry, fragmentation, impact and crater formation. At 2:02.00, cut to the city 100 km away. Separate the flash, ground shock and delayed air blast with the timing graphic.

## 04 · BODY — AFTERMATH & THE OTHER SIDE OF EARTH · 2:16.54–3:04.04

Closer in, within about 20 kilometers, almost nothing is left standing. Fires break out. Out to about 50 kilometers, many houses collapse. In the city, the shaking stops. The power doesn't come back. Phone networks overload. Roads out are blocked by debris and traffic. Rescue teams have to come from outside the region, under a sky full of dust. But here's the strangest part. On the other side of the planet, it's just another night.

People sleep. Trains run. Within about 20 minutes, seismometers around the world pick up the shock. One moment. Two completely different realities. This is a regional catastrophe. Not the end of the world, but for everyone in its path, everything changes.

**Visual direction:** Move from the destruction zones to failed infrastructure and rescue teams. Then contrast that region with an ordinary night on the other side of Earth. End on a person searching the rubble.

## 05 · BODY — COULD WE STOP IT? · 3:04.04–3:56.63

So, could we stop it? Rewind again. Not minutes. Years. First, you have to find it early. Apophis was discovered in 2004, nearly 25 years before its close approach. At first, astronomers couldn't rule out an impact in 2029. More observations did, and we've already tested a way to push an asteroid. In 2022, NASA's DART spacecraft crashed into Dimorphos, a small moonlet orbiting a larger asteroid. Its orbit got about 33 minutes shorter. It proved the method works.

But one spacecraft is not a guarantee. It depends on the asteroid, and above all, on time. A nudge of one centimeter per second, ten years ahead, can shift its path by thousands of kilometers. The same nudge one week ahead barely moves it at all. In planetary defense, the most powerful tool isn't a rocket. It's time.

**Visual direction:** Rewind to discovery and observations. Show DART’s approach and impact, then the changed orbit. Use a simple deflection graphic to make the difference between ten years and one week visible.

## 06 · RECAP & OUTRO — THE REAL 2029 FLYBY · 3:56.63–4:33.33

Now, the real April 13th, 2029. Apophis will pass about 32,000 kilometers above Earth's surface, closer than the satellites in geostationary orbit. Across the eastern hemisphere, people should be able to see it without a telescope. Two spacecraft, NASA's OSIRIS-APEX and Europe’s Ramses, are set to study it up close. The city stays whole. Ordinary life goes on. This time, the most important event will be the one that never happens.

**Visual direction:** Return to the real date. Show the safe passage, the satellite-orbit comparison, people watching the sky and the spacecraft study. Finish on the intact city and hold the ending through 4:33.33.

Finish with a quality check: consistent asteroid and geography, coherent human movement, correct graphics, narration in sync, no clipping or accidental silent gaps, and the actual finished MP4 attached. Keep the script, reusable references and timeline available so I can request a later shot correction without rebuilding the whole film.
```

---

## Step 4: Make two more videos

Okay, we’ve got our first video. That’s a good start, but we need more if we want to build a channel.

So now let’s turn this into a content machine with one simple prompt. Make two more five-minute videos on the other two topics: “What if Earth’s oceans vanished?” and “What if the Moon broke apart?” Keep the same realistic style and narrator voice.

Continue in the same chat to keep the first film’s style and narrator. In a new chat, attach `Faceless Script (.md)`, `Seedance Prompts (.md)` and `Faceless Production (.md)`, plus your first film, and specify the voice you used. To follow our example, download and attach the `Apophis documentary (.mp4)`.

```
Use the attached Higgsfield Faceless Script, Higgsfield Faceless Production and Higgsfield Seedance Prompts skills to make two more complete five-minute science documentaries through Higgsfield MCP:

1. What if Earth’s oceans vanished? Open on an enormous cargo ship stranded on the exposed seabed. Establish the emptied harbor, the scale of the missing water and the effect on marine life. Build the explanation around the consequences for life, weather and the water cycle.
2. What if the Moon broke apart? Open with the Moon above Earth, then a visible fracture and fragments lifting away. Explain how the outcome depends on the size, speed and orbits of the fragments, then explore debris and tides. Do not present a stable ring or inevitable impacts as the only possible outcome.

Research each topic separately, check the science and clearly label each premise as a thought experiment. Use the same realistic visual direction and the same narrator voice as our first documentary, but write a new hook, story and ending for each topic. Structure each as hook, intro, body, recap and outro. Make the first minute visually active, then let the shot length follow the explanation.

Create a moodboard and storyboard for each. Use Seedance 2.5 at 1080p, 16:9 for the video shots; generate the references, voiceover, music and sound effects through connected Higgsfield tools. Add contextual motion graphics, then edit and export two separate finished 1920 × 1080 MP4s. Return the actual videos, not just the scripts, image boards or a browser animation. If the required Higgsfield tools are unavailable, tell me before choosing another route.
```

Fable researches each topic individually, so each video gets its own script and visuals. While Higgsfield generates them, **let’s package our first video.**

---

## Step 5: Make the thumbnails and upload your video

I’m starting with thumbnails. YouTube has a built-in A/B test. You upload three different thumbnails, and YouTube tests them on real viewers to find the winner.

Your first impression doesn’t tell you which one will win. The winning thumbnail is the one people click and actually stay to watch. So to create strong options for that test, I follow three simple rules:

First, the thumbnail should look like a moment frozen in action.

Second, keep the text to four or five words max. You have less than a second to grab someone’s attention.

Third, it needs to match what the video is about, but still leave that curiosity gap that makes people want to click.

I’ve put these rules into the thumbnail guide below. Give it to Fable with the Packaging skill, then use this prompt to create three thumbnail and title options for our video.
```
Guide Claude.pdf
```

Attach YouTube `Packaging (.md)`, `the Thumbnail Guide (.pdf)` and the `Apophis documentary (.mp4)` to the chat before sending this prompt. You can use your own finished video instead.

```
Use higgsfield-youtube-packaging and the attached Higgsfield Thumbnail Frameworks guide (Guide Claude.pdf). Package our finished “What If Apophis Hit Earth?” documentary for YouTube. The film explores a hypothetical impact, then explains the real safe flyby.

Create three distinct thumbnail/title pairs using frameworks from the guide: the moment before impact, the contrast between near and far, and the question of stopping the asteroid. Keep the hypothetical framing clear. Each thumbnail needs one strong focal point, a moment frozen in action and no more than four or five words. The title should add to the image, not repeat its text.

Generate all three actual thumbnail images through connected Higgsfield image tools in 16:9. Do not substitute an HTML mockup or stop at image prompts. Check spelling and readability at phone size. Return each generated image with its paired title, an accurate video description and a relevant tag list within 500 characters. If a required Higgsfield tool is unavailable, tell me before substituting another route.
```

Higgsfield MCP generates the thumbnails, title options, description and tags. All that’s left is to upload the video, add the thumbnail and details, and select “Yes” under “AI use” in YouTube Studio for our realistic AI-generated film.

And remember the two videos we started earlier? They’re ready too.

**What if Earth’s oceans vanished?**
Full video · 5:00

Attach `Ocean documentary (.mp4)`, `Faceless Script (.md)`, `Seedance Prompts (.md)` and `Faceless Production (.md)` to the chat, then run the consolidated recreation prompt below. If the skills are already attached in this chat, add only the example video.

```
Use the attached Higgsfield Faceless Script, Higgsfield Faceless Production and Higgsfield Seedance Prompts skills to create one complete five-minute English science documentary, “What If Earth’s Oceans Vanished?”, through the connected Higgsfield MCP.

First, inspect the entire attached ocean documentary. Extract its actual storyline, narration structure, visual progression, important graphics, pacing and ending. Use those observations as the reference for this recreation. Do not infer the full film from its opening frame or invent missing scenes, dialogue or timestamps. If you cannot inspect the reference, tell me before generating.

Research the topic and fact-check the explanation before writing an original script. Preserve the reference’s central question and explanatory progression, correcting unsupported claims. Structure the story as a hook, intro, connected body, recap and outro. Clearly present the premise as a thought experiment.

The opening visual sequence should establish an enormous cargo ship grounded on exposed seabed, a stranded whale on shallow coastal mud, the emptied harbor and people among the stranded marine life. Develop the rest of the story from the inspected reference, then resolve its opening question with a clear ending.

Create a moodboard and a complete storyboard, then generate the video through Higgsfield. Use Seedance 2.5, 1080p, 16:9 for the video shots. Generate and reuse consistent references for recurring locations and subjects. Keep the imagery photographic, with natural light, convincing scale, coherent anatomy and physically grounded objects. Let each camera move or cut reveal useful information; vary shot lengths with the explanation.

Generate a natural English documentary voiceover, music and sound effects through Higgsfield. Match the reference’s narration style and audio progression using an available voice preset. Keep the voice clear above the music. Add contextual motion graphics, labels and captions in the edit, synchronized to the narration.

Edit and export one finished 1920×1080 MP4, approximately five minutes long. Check visual continuity, factual framing, caption legibility and audio balance. Return the actual downloadable film and retain the editable project. Do not substitute a script, storyboard or browser animation. If the required Higgsfield tools or Seedance 2.5 are unavailable, explain that before switching workflows.
```

**What if the Moon broke apart?**
Full video · 5:00

Attach `Moon documentary (.mp4)`, `Faceless Script (.md)`, `Seedance Prompts (.md)` and `Faceless Production (.md)` to the chat, then run the consolidated recreation prompt below. If the skills are already attached in this chat, add only the example video.

```
Use the attached Higgsfield Faceless Script, Higgsfield Faceless Production and Higgsfield Seedance Prompts skills to create one complete five-minute English science documentary, “What If the Moon Broke Apart?”, through the connected Higgsfield MCP.

First, inspect the entire attached Moon documentary. Extract its actual storyline, narration structure, visual progression, important graphics, pacing and ending. Use those observations as the reference for this recreation. Do not infer the full film from its opening frame or invent missing scenes, dialogue or timestamps. If you cannot inspect the reference, tell me before generating.

Research the topic and fact-check the explanation before writing an original script. Preserve the reference’s central question and explanatory progression, correcting unsupported claims. Structure the story as a hook, intro, connected body, recap and outro. Clearly present the breakup as a hypothetical scenario. Check the assumptions behind any claims about debris, rings, impacts, gravity or tides; distinguish conditional outcomes from inevitable ones.

Open with the Moon beside Earth, then reveal a spreading fracture, boulders separating from the lunar surface and dust streaming from its edge. Develop the rest of the story from the inspected reference, then resolve its opening question with a clear ending.

Create a moodboard and a complete storyboard, then generate the video through Higgsfield. Use Seedance 2.5, 1080p, 16:9 for the video shots. Generate and reuse consistent references for the Moon, Earth and recurring fragments. Keep the imagery photographic, with detailed lunar terrain, directional sunlight, deep shadows, convincing scale and smooth camera movement. Maintain consistent planetary geography and lighting. Let explanatory diagrams clarify the narration; vary shot lengths with the story.

Generate a natural English documentary voiceover, music and sound effects through Higgsfield. Match the reference’s narration style and audio progression using an available voice preset. Keep the voice clear above the music. Add contextual motion graphics, labels and captions in the edit, synchronized to the narration.

Edit and export one finished 1920×1080 MP4, approximately five minutes long. Check visual continuity, factual framing, diagram consistency, caption legibility and audio balance. Return the actual downloadable film and retain the editable project. Do not substitute a script, storyboard or browser animation. If the required Higgsfield tools or Seedance 2.5 are unavailable, explain that before switching workflows.
```

---

## Step 6: Make Shorts

Now let’s make Shorts. They’re cheaper to produce, and one that takes off can bring a whole new audience to your channel. There are two ways to make them.

**The first way: cut Shorts from our video**
Ask Higgsfield MCP to make three Shorts from our video: 9:16, 15–30 seconds each, each one with a strong hook.

Download the `Apophis documentary (.mp4)` and attach it to the chat with `Faceless Production (.md)` before sending this prompt. To make Shorts from a different film, attach your own finished MP4 instead.

```
Use Higgsfield MCP to cut three standalone Shorts from the finished documentary attached above. Work from its existing footage and audio; do not regenerate the full documentary.

Create one Short about the city 100 km from the impact, one about life on the other side of Earth, and one about whether we could stop the asteroid. Each needs its own immediate hook, a clear consequence and a complete ending. Preserve the distinction between the hypothetical impact and the real safe flyby.

Export three separate 1080 × 1920 MP4s. Aim for 15–30 seconds each; if a complete explanation needs longer, propose the exact cut and runtime rather than cutting off the payoff. Reframe each shot for 9:16, rebuild the motion graphics for the vertical composition and add accurate captions in short readable groups. Keep the subject and graphics clear of the interface areas, with no stretched footage or text cut off at the sides. Balance the narration, music and sound effects, then return the actual finished Shorts.
```

A cut from our documentary · 39 seconds
**The second way: generate new Shorts in Content Factory**
You can also generate brand-new Shorts inside H`iggsfield Content Factory`. This lets you test different topics too: space, nature, everyday physics. Here are three examples you can recreate:

**What if Earth had rings?**
Style: Gas Giant
```
/content-factory Use Higgsfield Content Factory and select the Gas Giant style. Generate the finished video through the connected Higgsfield tools using the complete recipe below. If the selected route is unavailable, say so before substituting it.

Create an original 30s 9:16 English science Short in the selected Gas Giant template: dark, high-contrast moving 3D; sparse bold labels.

0-4s: Frame n=0 is a BLUE EARTH with its COMPLETE bright rocky rings, fully visible for first 2s. Fit the full steeply diagonal ring ellipse in portrait. Fast orbital arc creates depth parallax; no static opening.

4-9s: Virtual dive toward Earth, hard match-cut to an equatorial rooftop looking EAST. Camera slides past a foreground antenna; ring is a thin line rising through the sky. Large 0°.

9-13s: Cut close to the ring edge. Rocky particles pass foreground as camera glides alongside the thin plane; Earth behind. No falling debris.

13-18s: Whole Earth again. Hold ring geometry fixed. Animate ONE observer dot from equator to 35°N and its sightlines toward ring edges. 0° changes to 35°N.

18-24s: Dive-cut to 35°N, looking SOUTH at summer sunset. Brisk lateral move past a detailed rooftop reveals a BROAD ring arc over layered 3D city. Strong foreground parallax; no flat silhouettes.

24-30s: Match-cut back to the whole ringed Earth; continue orbital arc, two observer dots show the same unchanged ring. SAME RINGS; hold last 1s.

Thin rocky equatorial ring, inner/outer radii 1.5/2.5 Earth radii from center. At 35°N nearest edges 15-36° above southern horizon; never zenith/clouds. Virtual camera; travel time illustrative.

Exact VO:
What if Earth had rings? From space: a giant halo. From the equator: almost a line. Why? A thin band of rock lies around the equator, and you’re looking along its edge. Move to thirty-five degrees north. Now the same ring opens across the southern sky. The ring never changed shape. You changed where you stood.

Editorial motion graphics and verbatim word-by-word captions. HYPOTHETICAL. Text x8-88%; labels y12-60%; captions y68-78%,3-5 words,max 2 lines,white/gold,dark outline; replace, never overlap. Key labels lead VO. Curious VO by 28s; quiet score, short whooshes.
```


**What if you were ant-sized?**
Style: Offline Grid
```
/content-factory Use Higgsfield Content Factory and select the Offline Grid style. Generate the finished video through the connected Higgsfield tools using the complete recipe below. If the selected route is unavailable, say so before substituting it.

30s 9:16 English Nature Short. Use selected Offline Grid: true 3D isometric geometry, rapid reveals, clean animated labels. Adapt to a macro lotus leaf: navy shadows, green veins, one yellow adult mannequin, clear cyan water. Strong depth and parallax.

Same 2mm adult and 2mm drop; water-repellent leaf slopes screen-right. Six shots:
0-4s: Frame zero: huge rolling drop left, adult right, both full-height in close low view. Adult immediately dodges toward foreground, plants both feet clear, watches water pass. Keep visible dry gap, no contact.

4-9s: Cut high isometric; camera tracks right with bead, revealing the adult safely behind its path. Brief 2 mm brackets compare sizes; then clear.

9-13s: Cut liquid closeup, track the moving bead; its silhouette and footprint squash, wobble and recover. Transparent liquid, not a rigid glass ball.

13-18s: Cut wider isometric, arc 30 degrees to reveal downhill rim. For 3s two short animated arrows follow the deforming liquid surface: SURFACE TENSION. Clear overlay; roll continues.

18-23s: Cut low at rim. Bead arrives, stretches over edge and falls out of frame. Adult remains on dry leaf behind.

23-30s: Cut above leaf, accelerate upward then ease out: veins resolve into one ordinary lotus leaf among leaves on a pond; adult shrinks to a yellow speck. Hold final 2s.

Exact natural, curious VO; start at once, finish by28s:
What if you were ant-sized? Step aside. In this thought experiment, you're two millimeters tall. So is that water drop. Watch it wobble. Surface tension shapes small drops more than gravity does, keeping them rounded. On a water-repellent lotus leaf, the bead rolls past. Now pull back. The drop was ordinary. You were standing on a leaf.

Small VISUAL THOUGHT EXPERIMENT throughout. Verbatim word-by-word lower-third captions, 3-5 words, max2 lines; graphics above, never overlap. Keywords lead voice by3 frames. Quiet pulse music, soft liquid/footstep sounds.
```

**What if your shoes had zero friction?**
Style: Mannequin Commute
```
/content-factory Use Higgsfield Content Factory and select the Mannequin Commute style. Generate the finished video through the connected Higgsfield tools using the complete recipe below. If the selected route is unavailable, say so before substituting it.

30s 9:16 English science Short. Use selected Mannequin Commute reference: restrained grey 3D architecture, faceless mannequin with amber accent, deep station concourse, tiled LEVEL floor, columns and a long FIXED handrail within reach, parallel to his path. One hero. Soft overhead light. Dynamic spatial camera, six clear shots; no intro.

Only shoe-floor friction is zero; gravity, support and hand grip remain. Start at rest. Preserve left-to-right travel and visible floor landmarks.

0-5s: First frame feet already stepping rapidly, torso stays at a fixed red floor tick, hands free. Low side camera arcs 25 degrees; columns show parallax. Big PROGRESS: 0.
5-9s: Cut closer side full body; two futile steps, then stillness. Tilt from soles to handrail. SHOE-FLOOR FRICTION: 0.
9-14s: Palm visibly grips rail, pushes LEFT; elbow extends, body moves RIGHT only after contact. Side dolly reveals anchored rail posts. One rightward FORCE arrow during push.
14-19s: Cut wider, lift hand clearly OFF. Slow constant-speed glide past tiles; lateral camera eases to a stop to reveal travel. Only blue MOTION arrow.
19-24s: Closer three-quarter view, fingers wrap rail BEFORE slowing; elbow bends, glide decelerates to rest. Only leftward FORCE arrow; remove at rest.
24-30s: Still gripping, one useless shoe step. Camera pushes from shoes toward gripping hand; single BRAKE pointer. Hold final 0.5s.

VO exact, actions sync to words:
What if your shoes had zero friction? Your feet race, but you go nowhere. Gravity still works. The floor still holds you up. Push against this fixed rail. Now you're moving. Let go. Your shoes can't slow the glide. Grab the rail, and your hand brings you to a stop. Your feet are passengers. Your hand is the brake.

Composite sparse motion graphics and exact subtitles: 3-5 words, max2 lines, bold white/dark outline, amber emphasis. x8-88%; captions y70-80%, action above. Quiet beat, hand taps; natural VO.
```


YouTube’s A/B test doesn’t work on Shorts. Here, you test by posting different hooks and topics and seeing which ones people watch. And yes, sometimes researching those topics means scrolling TikTok or Reels. That counts as work too.

When you find a format that consistently works, bring the reference back into `Content Factory` and use it for a new topic. You can take the same Shorts to Instagram and TikTok too.

And by the way, the channel we looked at in the beginning doesn’t go viral with every video. Judge your channel by ten videos, not one, and don’t give up if the first video doesn’t take off. That’s normal.

That’s why faceless is so popular: YouTube channels, Instagram accounts, TikTok pages. You can experiment, get creative and build a channel around the topics you’re interested in.

Now it’s your turn. Pick a topic you want to build a YouTube channel around, create your account, and upload your first video with Fable and Higgsfield. You have all the skills, prompts and the thumbnail guide right here.

