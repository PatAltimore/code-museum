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
description: "This file defines background data and animation parameters for Prince of Persia's Apple II version, showcasing the intricate design and optimization required for cinematic platforming on limited hardware."

summary:
  - point: "Defines piece IDs for various game elements like spikes, gates, and loose floors"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Uses hex and relative offsets to encode spatial relationships and animations"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II series"
  - point: "Includes animation sequences for dynamic elements like spikes and slicers"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Optimizes memory usage through compact data tables and relative addressing"
    link: "https://en.wikipedia.org/wiki/6502"
    link_label: "6502 microprocessor"
  - point: "Establishes foundational techniques for cinematic platformers"
    link: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    link_label: "Cinematic platformer"

enhancements:
  - id: "piece-id-definitions"
    line_start: 6
    line_end: 35
    title: "Mapping the world: Piece ID definitions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines numeric IDs for various game elements, such as 'floor', 'spikes', 'gate', and 'torch'. These IDs serve as references for the game's rendering and interaction logic, enabling efficient lookup and manipulation of objects in the game world. Jordan Mechner, working solo on Prince of Persia, needed a way to organize the game's intricate environment within the constraints of the Apple II's 128K memory. By assigning IDs and using them as indices in data tables, he could encode spatial relationships and behaviors compactly. At the time, this approach was critical for optimizing performance on the 6502 microprocessor, which had limited computational power. These mappings influenced later games by demonstrating how to abstract complex environments into manageable data structures. The technique of using IDs for game objects became standard in game development, appearing in engines like id Tech and Unity."
  - id: "relative-offsets-for-layout"
    line_start: 38
    line_end: 41
    title: "Relative offsets: A spatial trick"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "This brief section explains how spatial offsets are calculated relative to predefined anchor points (e.g., 'BlockLeft' and 'BlockBot'). By encoding positions as offsets, Mechner could save memory and simplify calculations for rendering and collision detection. This technique was particularly valuable on the Apple II, where memory and processing power were scarce. Relative addressing reduced the need for absolute coordinates, allowing the game to dynamically adjust layouts without recalculating every position. This approach influenced later game engines, which often use relative positioning for modular level design. It also reflects the ingenuity required to create immersive worlds on early hardware."
  - id: "animation-masks-and-frames"
    line_start: 47
    line_end: 63
    title: "Animation masks: Breathing life into pixels"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "The 'maska', 'piecea', 'pieceay', 'maskb', 'pieceb', and 'pieceby' tables define animation masks and frame data for various game elements. These hex and 'dfb' values encode how objects appear and move, such as gates opening or spikes retracting. Mechner used rotoscoping to trace real-world movements, translating them into these compact data structures. On the Apple II, animations had to be efficient, as the hardware could not handle complex graphics processing. By precomputing masks and frames, Mechner ensured smooth animations while conserving memory. This approach laid the groundwork for cinematic platformers, influencing games like Another World and Flashback, which similarly emphasized fluid, lifelike motion."
  - id: "spike-animation-sequence"
    line_start: 115
    line_end: 122
    title: "Spikes in motion: Animation sequencing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The 'spikea' and 'spikeb' tables define the animation frames for the game's iconic spike traps. Each hex value corresponds to a visual state of the spikes, progressing from retracted to extended and back. Mechner meticulously designed these sequences to create tension and danger, aligning with the game's cinematic tone. The Apple II's hardware limitations required animations to be precomputed and stored as compact tables, ensuring smooth transitions without taxing the CPU. These spike animations became a hallmark of Prince of Persia's gameplay, influencing trap design in later platformers and action-adventure games. The concept of precomputed animation sequences remains a staple in game development, especially for resource-constrained systems."
  - id: "slicer-animation-parameters"
    line_start: 125
    line_end: 137
    title: "Slicer traps: Precision and peril"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    image_url: ""
    image_caption: ""
    content: "The 'slicerseq', 'slicertop', 'slicerbot', and related tables define the animation and spatial parameters for slicer traps, another iconic hazard in Prince of Persia. These traps require precise timing and positioning, adding to the game's challenge. Mechner encoded their behavior using hex values and relative offsets, ensuring consistent movement and interaction. On the Apple II, such dynamic elements had to be carefully optimized to avoid performance bottlenecks. The slicer traps exemplify the game's blend of cinematic tension and technical ingenuity, influencing similar mechanics in later platformers like Tomb Raider and Limbo. Their design highlights how early developers balanced gameplay complexity with hardware constraints."
  - id: "loose-floor-mechanics"
    line_start: 140
    line_end: 149
    title: "Loose floors: A collapsing challenge"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The 'loosea', 'looseby', and 'loosed' tables define the behavior of loose floors, which collapse under the player's weight. These mechanics add an element of urgency and danger, forcing players to react quickly. Mechner encoded the collapsing animation and spatial adjustments using hex values and relative offsets, ensuring seamless integration into the game's physics. On the Apple II, simulating such dynamic interactions required clever use of precomputed data and efficient memory management. Loose floors became a staple of platformer design, appearing in games like Sonic the Hedgehog and Super Mario Bros. Their inclusion in Prince of Persia showcases Mechner's ability to create engaging gameplay within technical constraints."
  - id: "solid-block-data"
    line_start: 182
    line_end: 189
    title: "Solid blocks: Building the foundation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "The 'blockb', 'blockc', 'blockd', and 'blockfr' tables define the visual and spatial properties of solid blocks, which form the foundation of the game's levels. These blocks are static elements that players interact with, such as standing or climbing. Mechner encoded their attributes using compact hex tables, optimizing memory usage on the Apple II. Solid blocks are a fundamental component of platformer design, providing stability and structure to levels. Their implementation in Prince of Persia influenced later games by demonstrating how to create modular, reusable assets for complex environments. This approach remains a cornerstone of level design in modern game engines."

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