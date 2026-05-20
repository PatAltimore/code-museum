---
title: "MOVEDATA.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/MOVEDATA.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/MOVEDATA.S"
year: 1989
author: "Jordan Mechner"
slug: "movedata"
order: 25
description: "Defines object types and movement parameters for Prince of Persia's cinematic platforming on the Apple II."

summary:
  - point: "Object types mapped to numeric constants for efficient reference"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Movement parameters tailored to rotoscoped animations"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Memory constraints of the Apple II shaped data organization"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"

enhancements:
  - id: "object-type-constants"
    line_start: 4
    line_end: 37
    title: "Why Objects Are Numbers, Not Words"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines numeric constants for various game objects, such as 'floor', 'spikes', and 'torch'. Each object is assigned a unique number, starting from 0 for 'space' and incrementing sequentially. This approach allows the game to reference objects efficiently in memory-constrained environments like the Apple II, where every byte counts. By using numbers instead of strings, Mechner reduced the memory footprint and sped up comparisons during gameplay. In 1985–1989, the Apple II was a popular home computer but had severe limitations: only 128KB of RAM and a 1MHz 6502 processor. Developers had to optimize every aspect of their code. Mechner, working solo, adopted this numeric mapping to ensure the game could handle complex scenes without exhausting system resources. This decision also aligns with the broader practice of using lookup tables in assembly programming, a technique common in the era. The numeric constants defined here directly influenced the game's ability to render diverse environments and interactable objects. Later games, including platformers like Another World (1991), borrowed similar techniques for object management. The efficiency of this approach contributed to Prince of Persia's fluid gameplay and cinematic feel, setting a standard for future platformers and inspiring developers to think creatively within hardware constraints."
  - id: "misc-values-bgdata"
    line_start: 39
    line_end: 51
    title: "The Numbers Behind Spikes and Slicers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines specific values for game mechanics, such as the extension and retraction states of spikes and slicers. For example, 'spikeExt' is set to 5, representing the frame where spikes are fully extended, and 'spikeRet' is set to 9, marking their retracted state. Similarly, slicer values ('slicerExt' and 'slicerRet') define the frames for the slicer's movement. These values are critical for synchronizing animations with gameplay. Mechner's rotoscoping technique, which involved tracing real-life movements frame by frame, required precise timing to ensure the animations felt natural. By hardcoding these values, Mechner could guarantee consistent behavior across different game scenarios. In the late 1980s, animation in games was often rudimentary, limited by hardware capabilities. Prince of Persia's smooth transitions and realistic movements were groundbreaking, thanks to Mechner's meticulous attention to detail. These values also highlight the interplay between technical constraints and creative ambition. The game's innovative approach to animation influenced later titles like Flashback (1992) and the Tomb Raider series, which prioritized lifelike character movements."
  - id: "moveparams-gravity-values"
    line_start: 53
    line_end: 57
    title: "Gravity: A Cinematic Platformer’s Secret Ingredient"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines gravity-related parameters, including 'gmaxval' and 'gminval'. 'gmaxval' is set to 47*4, representing the maximum velocity during a fall, while 'gminval' is set to 0, indicating the starting velocity. These values control how the protagonist accelerates and decelerates during jumps and falls, ensuring smooth and realistic motion. In the mid-1980s, most platformers featured rigid, grid-based movement. Mechner broke away from this convention, aiming to create a cinematic experience where the character's movements mirrored real-life physics. The gravity parameters were fine-tuned to match the rotoscoped animations, making the protagonist's jumps and falls feel weighty and believable. This innovation had a lasting impact on the genre. Games like Another World and Inside (2016) adopted similar approaches to character physics, emphasizing realism and immersion. Mechner's work demonstrated that even on limited hardware, thoughtful design could push the boundaries of what games could achieve."

---

```asm
 tr on
 lst off

* movedata
*-------------------------------
* objnames

space = 0
floor = 1
spikes = 2
posts = 3
gate = 4
dpressplate = 5 ;down
pressplate = 6 ;up
panelwif = 7 ;w/floor
pillarbottom = 8
pillartop = 9
flask = 10
loose = 11
panelwof = 12 ;w/o floor
mirror = 13
rubble = 14
upressplate = 15
exit = 16
exit2 = 17
slicer = 18
torch = 19
block = 20
bones = 21
sword = 22
window = 23
window2 = 24
archbot = 25
archtop1 = 26
archtop2 = 27
archtop3 = 28
archtop4 = 29

*-------------------------------
* misc. values from BGDATA

torchLast = 17
bubbLast = 8

spikeExt = 5
spikeRet = 9

slicerExt = 2
slicerRet = 6

Ffalling = 10 ;1st "falling" frame

*-------------------------------
* moveparams

gmaxval = 47*4
gminval = 0

 lst off
```
