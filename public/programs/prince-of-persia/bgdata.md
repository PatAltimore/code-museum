---
title: "BGDATA.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/BGDATA.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/BGDATA.S"
year: 1989
author: "Jordan Mechner"
slug: "bgdata"
order: 21
description: "This file defines the graphical and animation data for the background elements of Prince of Persia, a groundbreaking cinematic platformer for the Apple II."

summary:
  - point: "Defines graphical IDs for game objects and animations"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"
  - point: "Uses compact hex and binary data for memory efficiency"
    link: "https://en.wikipedia.org/wiki/6502"
    link_label: "6502 Assembly"
  - point: "Supports rotoscoped animation frames for realism"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"

enhancements:
  - id: "piece-id-indexing"
    line_start: 3
    line_end: 35
    title: "Why Every Background Object Has an ID"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section assigns unique IDs to each type of background object in the game, such as floors, gates, spikes, and torches. These IDs are used to reference graphical and animation data elsewhere in the code. Jordan Mechner designed this system to streamline rendering and interaction logic for the Apple II's limited memory and processing power. By using numeric IDs, the game could efficiently look up properties and behaviors for each object without hardcoding them repeatedly. In the mid-1980s, memory constraints were a defining challenge for game developers. The Apple IIe/IIc had only 128KB of RAM, and Mechner had to fit the entire game—including graphics, animations, and gameplay logic—into this space. Assigning IDs allowed him to use compact lookup tables rather than verbose conditionals, saving both memory and CPU cycles. This approach influenced later games that relied on object-oriented design principles, where entities are defined by IDs and associated properties. It also foreshadows modern game engines like Unity, which use similar systems for managing assets and behaviors. Mechner's work on Prince of Persia demonstrated how careful planning and abstraction could overcome hardware limitations, a lesson that resonates with developers even today."
  - id: "mask-and-piece-data"
    line_start: 37
    line_end: 84
    title: "The Hex Tables That Built a Palace"
    wikipedia_url: "https://en.wikipedia.org/wiki/6502"
    image_url: ""
    image_caption: ""
    content: "This section defines hex tables like `maska`, `piecea`, and `pieceb`, which encode graphical and positional data for background elements. Each table specifies how objects are rendered and positioned relative to the game world. For example, `maska` determines masking patterns for certain objects, while `piecea` and `pieceb` define their graphical representation and offsets. In 1989, storing data in compact hex and binary formats was a necessity due to the Apple II's limited memory. Mechner's use of hex tables reflects the ingenuity required to pack a visually rich game into such constrained hardware. These tables allowed him to define complex scenes with minimal overhead, leveraging the 6502 processor's ability to quickly manipulate memory. This technique became a staple in game development for systems with limited resources. Later games on platforms like the NES and Sega Genesis used similar methods to encode tile-based graphics and animations. Mechner's work on Prince of Persia set a precedent for efficient data-driven design, influencing how developers approached memory management in the years that followed."
  - id: "special-pieces-and-gates"
    line_start: 86
    line_end: 95
    title: "How Gates Became Puzzle Pieces"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines special pieces like gates and their associated properties, including masking and animation data. Gates are central to Prince of Persia's puzzle-solving mechanics, often requiring players to trigger switches or navigate obstacles to open them. The hex values here encode how gates appear and behave in the game. Mechner's design philosophy prioritized cinematic storytelling and immersive gameplay, which meant creating objects that felt dynamic and interactive. The gates' behavior was carefully crafted to enhance the game's sense of progression and challenge. In the context of the Apple II, implementing such mechanics required clever use of memory and efficient coding practices. The concept of interactive environmental elements, like gates and switches, became a hallmark of platformers and puzzle games. Titles like Tomb Raider and The Legend of Zelda expanded on these ideas, incorporating more complex interactions and narratives. Mechner's work laid the foundation for games that blended action with problem-solving, inspiring generations of developers to think beyond simple gameplay loops."
  - id: "spike-animation-frames"
    line_start: 114
    line_end: 122
    title: "Animating Danger: The Spike Frames"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "This section defines animation frames for spikes, one of the game's iconic hazards. The hex tables `spikea` and `spikeb` specify how the spikes extend and retract, creating a dynamic threat for players. The values are carefully chosen to ensure smooth transitions between frames, enhancing the game's realism. Mechner's use of rotoscoping for character animations extended to environmental elements like spikes. By filming real-world movements and translating them into the game, he achieved a level of fluidity rarely seen in 1980s games. On the Apple II, animating hazards like spikes required precise timing and efficient memory usage, as every frame had to fit within the system's constraints. The realistic animation of hazards influenced later games that sought to create immersive environments. Developers of titles like Another World and Flashback adopted similar techniques to blend gameplay with cinematic visuals. Mechner's attention to detail in animating even minor elements helped establish Prince of Persia as a benchmark for quality in game design."
  - id: "slicer-animation-frames"
    line_start: 124
    line_end: 137
    title: "The Blade That Defined Cinematic Danger"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section encodes animation frames for slicers, another iconic hazard in Prince of Persia. The tables `slicerseq`, `slicertop`, and `slicerbot` define how the slicers move and interact with the environment. These hazards are timed to challenge the player's precision and reflexes, adding tension to the gameplay. In the late 1980s, creating realistic hazards on the Apple II required innovative approaches to animation and timing. Mechner's use of compact data tables allowed him to simulate complex movements without exhausting the system's resources. The slicers' behavior exemplifies his commitment to creating a cinematic experience, where every element contributes to the game's atmosphere. The concept of timed hazards influenced countless platformers and action games. Titles like Super Meat Boy and Celeste built on the idea of challenging players with precise, rhythmic obstacles. Mechner's work on slicers demonstrated how environmental design could elevate gameplay, a principle that continues to shape game development today."
  - id: "loose-floor-animation"
    line_start: 139
    line_end: 150
    title: "When Floors Fall: A Memory-Saving Trick"
    wikipedia_url: "https://en.wikipedia.org/wiki/6502"
    image_url: ""
    image_caption: ""
    content: "This section defines animation data for loose floors, which collapse when the player steps on them. The tables `loosea`, `loosed`, and `looseby` specify how the floors behave during their falling animation. These elements add a layer of unpredictability to the gameplay, forcing players to react quickly. On the Apple II, animating destructible environments was a technical challenge. Mechner used compact data tables to encode the floors' behavior, ensuring the animations were smooth and responsive. This approach minimized memory usage while maintaining the game's visual quality. The idea of destructible environments became a staple in later games, from platformers like Rayman to action titles like Red Faction. Mechner's work on loose floors demonstrated how environmental interactions could enhance gameplay, inspiring developers to experiment with dynamic level design."

---

* bgdata
 tr on
*-------------------------------
* Indexed by PIECE ID#:

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
* A & B sections have l.l. of (X = BlockLeft, Y = BlockBot-3)
* C & D sections have l.l. of (X = BlockLeft, Y = BlockBot)
* All x & y offsets are relative to these values
* (Front pieces are relative to A)

*-------------------------------
*               0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15
*              16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31

maska hex 00,03,03,03,03,03,03,03,03,00,03,03,00,03,03,03
 hex 03,00,00,03,00,03,00,03,00,03,00,00,00,00

piecea hex 00,01,05,07,0a,01,01,0a,10,00,01,00,00,14,20,4b
 hex 01,00,00,01,00,97,00,01,00,a7,a9,aa,ac,ad

pieceay hex 00,00,00,00,00,01,00,00,00,00,00,00,00,00,00,00
 dfb 00,00,00,00,00,00,00,00,00,00,00,-4,-4,-4

maskb hex 00,04,04,04,04,04,04,00,04,00,04,00,00,04,04,04
 hex 00,04,04,04,04,04,04,00,04,04,00,00,00,00

pieceb hex 00,02,06,08,0b,1b,02,9e,1a,1c,02,00,9e,4a,21,1b
 hex 4d,4e,02,51,84,98,02,91,92,02,00,00,00,00

pieceby dfb 00,00,00,00,00,01,00,03,00,03,00,00,03,00,00,-1
 dfb 00,00,00,-1,02,00,00,00,00,00,00,00,00,00

bstripe hex 00,47,47,00,00,47,47,00,00,00,47,47,00,00,47,47
 hex 00,00,47,00,00,00,47,00,00,47,00,00,00,00

*               0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15
*              16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31

piecec hex 00,00,00,09,0c,00,00,9f,00,1d,00,00,9f,00,00,00
 hex 4f,50,00,00,85,00,00,93,94,00,00,00,00,00

pieced hex 00,15,15,15,15,18,19,16,15,00,15,00,17,15,2e,4c
 hex 15,15,15,15,86,15,15,15,15,15,ab,00,00,00

fronti hex 00,00,00,45,46,00,00,46,48,49,87,00,46,0f,13,00
 hex 00,00,00,00,83,00,00,00,00,a8,00,ae,ae,ae

fronty dfb 00,00,00,-1,00,00,00,00,-1,03,-3,00,00,-1,00,00
 dfb 00,00,00,00,00,00,00,00,00,-1,0,-36,-36,-36

frontx hex 00,00,00,01,03,00,00,03,01,01,02,00,03,01,00,00
 hex 00,00,00,00,00,00,00,00,00,01,00,00,00,00

*-------------------------------
* special pieces

gatebotSTA = $43
gatebotORA = $44
gateB1 = $37
gatecmask = $0d

gate8c hex 2f,30,31,32,33,34,35,36
gate8b hex 3e,3d,3c,3b,3a,39,38,37

*-------------------------------
* Climbup masking

CUmask = $11
CUpiece = $12
CUpost = $0e

*-------------------------------
* Exit

stairs = $6b
door = $6c
doormask = $6d
toprepair = $6e

archtop3sp = $a1

*-------------------------------
* Spike animation frames
*               0  1  2  3  4  5  6  7  8  9 10 11

spikea hex 00,22,24,26,28,2a,28,24,22,00
spikeb hex 00,23,25,27,29,2b,29,25,23,00

spikeExt = 5 ;
spikeRet = 9 ;must match MOVEDATA

*-------------------------------
* Slicer animation frames
*               0  1  2  3  4  5  6  7  8  9 10 11

slicerseq dfb 04,03,01,02,05,04,04

slicerExt = 2
slicerRet = 6 ;must match MOVEDATA

slicertop hex 00,58,5a,5c,5e
slicerbot hex 57,59,5b,5d,5f
slicerbot2 hex 8e,8f,90,5d,5f ;smeared
slicergap dfb 00,38,46,53,55
slicerfrnt hex 65,66,67,68,69

*-------------------------------
* Loose floor
*               0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15

looseb = $1b

loosea hex 01,1e,01,1f,1f,01,01,01,1f,1f,1f
looseby dfb 00,01,00,-1,-1,00,00,00,-1,-1,-1
loosed hex 15,2c,15,2d,2d,15,15,15,2d,2d,2d

Ffalling = 10 ;1st "falling" frame
;must match MOVEDATA

*-------------------------------
specialflask = $95

swordgleam1 = $b3
swordgleam0 = $99

*-------------------------------
* panels

panelb0 = $9e
panelc0 = $9f
numpans = 3

panelb hex 9e,9a,81
panelc hex 9f,9b,82

archpanel = $a1

*-------------------------------
* back wall panels for space & floor

numbpans = 3

spaceb hex 00,a3,a5,a6
spaceby dfb 0,-20,-20,0

floorb hex 02,a2,a4,a4
floorby dfb 00,00,00,00

*-------------------------------
* solid blocks

numblox = 2

blockb hex 84,6f
blockc hex 85,85
blockd hex 86,86
blockfr hex 83,83

*-------------------------------
* moveparams

gmaxval = 47*4
gminval = 0

*-------------------------------
eof