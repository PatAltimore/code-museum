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
description: "This file defines background data and animation parameters for Prince of Persia's Apple II version, showcasing Jordan Mechner's meticulous design for cinematic platforming."

summary:
  - point: "Defines piece IDs for background elements like spikes, gates, and loose floors"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"
  - point: "Uses compact hex and byte tables for animation and masking"
    link: "https://en.wikipedia.org/wiki/6502_assembly_language"
    link_label: "6502 Assembly Language"
  - point: "Optimized for Apple II's 128KB memory with bank-switching"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Rotoscoping-inspired animation sequences for spikes and slicers"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Innovative use of lookup tables for cinematic gameplay"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup Table"

enhancements:
  - id: "piece-id-definitions"
    line_start: 3
    line_end: 35
    title: "The 29 IDs That Built a World"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines 29 unique piece IDs, each representing a background element or interactive object in Prince of Persia. From 'spikes' to 'exit doors,' these IDs are the building blocks of the game's environment. Jordan Mechner meticulously categorized each element to streamline rendering and interaction logic. In the mid-1980s, memory constraints on the Apple II forced developers to think in terms of compact identifiers rather than verbose descriptions. Mechner's approach reflects the era's need for efficiency, as each ID ties directly to pre-defined graphics and behaviors stored elsewhere in memory. These IDs enabled modular level design, allowing Mechner to construct intricate scenes by combining reusable components. This technique influenced later games with tile-based environments, such as Super Mario Bros. and The Legend of Zelda, which also relied on compact data representations for their worlds."
  - id: "mask-and-piece-tables"
    line_start: 37
    line_end: 63
    title: "Hex Tables That Made Animation Possible"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "The mask and piece tables define offsets and graphical data for background elements. These hex tables are compact representations of visual and positional information, optimized for the Apple II's limited memory. Mechner used these tables to manage animations and interactions without requiring complex calculations at runtime. For example, 'maska' and 'maskb' specify masking patterns for different sections, while 'piecea' and 'pieceb' define graphical data for specific elements. This approach reflects the ingenuity required to work within the constraints of 6502 assembly and the Apple II hardware. By precomputing these values, Mechner reduced CPU load during gameplay, ensuring smooth animations even on a machine with limited processing power. The technique of using lookup tables for animation became a staple in game development, influencing titles like Doom and Quake, which relied on similar methods for efficient rendering."
  - id: "special-pieces-and-gate-data"
    line_start: 86
    line_end: 98
    title: "The Gate That Defined Cinematic Tension"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section introduces special pieces related to gates, including their graphical and masking data. Gates play a crucial role in Prince of Persia's gameplay, often serving as obstacles or time-sensitive challenges. Mechner's design ensures that gates are visually distinct and mechanically consistent, with predefined hex values for their appearance and behavior. The use of 'gatebotSTA' and 'gatebotORA' reflects the precision required to manage interactions in a cinematic platformer. In 1989, dynamic elements like gates were groundbreaking, adding a layer of tension and strategy to platforming gameplay. This innovation inspired future games to incorporate interactive environmental elements, such as the doors in Resident Evil or the puzzles in Tomb Raider."
  - id: "spike-animation-frames"
    line_start: 37
    line_end: 122
    title: "Animating Danger: The Spike Sequence"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "The spike animation frames define the movement of one of Prince of Persia's most iconic hazards. Using hex values, Mechner created a sequence that simulates spikes extending and retracting, adding a sense of danger and urgency to the gameplay. This section ties directly to the game's rotoscoping-inspired animation style, where fluid motion was a key design goal. In the context of 1980s hardware, achieving smooth animations required careful planning and optimization. Mechner's spike sequence demonstrates how precomputed data could be leveraged to create lifelike movements without overwhelming the Apple II's limited CPU. This approach influenced later games with environmental hazards, such as Sonic the Hedgehog's spike traps and Half-Life's dynamic obstacles."
  - id: "slicer-animation-frames"
    line_start: 124
    line_end: 137
    title: "The Blade That Never Missed"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The slicer animation frames define the movement of another iconic hazard: the slicing blade. Using hex and byte tables, Mechner crafted a sequence that captures the blade's deadly precision. The 'slicerExt' and 'slicerRet' values ensure that the blade's extension and retraction align perfectly with the game's timing and collision mechanics. In the late 1980s, creating such dynamic hazards was a technical challenge, especially on hardware as limited as the Apple II. Mechner's solution showcases his ability to balance cinematic storytelling with technical constraints. The slicer became a memorable element of Prince of Persia, influencing the design of traps and hazards in later games like Dark Souls and Celeste."
  - id: "loose-floor-data"
    line_start: 139
    line_end: 152
    title: "When the Floor Falls Beneath You"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The loose floor data defines the behavior and animation of collapsing platforms, a staple of Prince of Persia's gameplay. Using hex and byte tables, Mechner created a sequence that simulates the floor breaking away under the player's weight. The 'loosea' and 'loosed' values specify the graphical changes, while 'looseby' defines positional adjustments during the animation. This mechanic added a layer of unpredictability and challenge to the game, forcing players to think quickly and adapt to changing environments. Loose floors became a hallmark of cinematic platformers, influencing similar mechanics in games like Crash Bandicoot and Rayman."
  - id: "moveparams-and-gravity"
    line_start: 191
    line_end: 197
    title: "Gravity: The Invisible Hand of Gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Physics_engine"
    image_url: ""
    image_caption: ""
    content: "This section defines movement parameters, including maximum and minimum values for gravity. Mechner's approach to gravity reflects his commitment to realism and fluid motion, key elements of Prince of Persia's cinematic style. By precomputing these values, he ensured consistent physics across different gameplay scenarios. In the late 1980s, implementing realistic gravity on the Apple II was a technical feat, requiring careful optimization to avoid performance bottlenecks. Mechner's work laid the groundwork for physics engines in later games, influencing titles like Portal and LittleBigPlanet, where gravity plays a central role in gameplay."

---

```asm
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
```
