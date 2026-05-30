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
description: "This file defines the background data and animation parameters for Prince of Persia's iconic Apple II graphics, showcasing intricate memory management and clever design for cinematic gameplay."

summary:
  - point: "Defines piece IDs for background elements"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Uses hex tables for animation frames and masking"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Optimizes memory usage with bank-switching techniques"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank switching"
  - point: "Encodes animation sequences for spikes and slicers"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Manages loose floor and special flask animations"
    link: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    link_label: "Cinematic platformer"

enhancements:
  - id: "piece-id-definitions"
    line_start: 3
    line_end: 34
    title: "Why Every Background Piece Has an ID"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section assigns unique IDs to each background element in the game, such as 'floor', 'spikes', 'gate', and 'torch'. These IDs act as references for rendering and interaction logic. Jordan Mechner designed this system to simplify the handling of diverse elements within the Apple II's constrained memory environment. By indexing pieces numerically, the game could efficiently reference and manipulate them during gameplay. At the time, memory constraints on the Apple IIe/IIc were severe, with only 128KB available, necessitating such compact and systematic approaches. This ID system influenced later games that relied on similar techniques for modular level design, including platformers like Another World and Flashback."
  - id: "animation-mask-tables"
    line_start: 37
    line_end: 81
    title: "Hex Tables: Animation Masks and Offsets"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "This section defines hex tables for animation masks and offsets, such as 'maska', 'piecea', and 'pieceay'. These tables encode the visual and positional data for background elements, allowing the game to animate them efficiently. For example, 'pieceay' includes vertical offsets for elements, ensuring proper alignment during rendering. Mechner's use of hex tables reflects the need to optimize for the Apple II's limited processing power and memory. Hexadecimal encoding was a common technique in assembly programming, enabling compact representation of data. This approach laid the groundwork for efficient animation systems in later games, influencing techniques used in early console and PC titles."
  - id: "special-pieces-and-gates"
    line_start: 86
    line_end: 94
    title: "Special Pieces: Gates and Their Masks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bank_switching"
    image_url: ""
    image_caption: ""
    content: "This section defines special pieces like gates and their associated masks, such as 'gatebotSTA' and 'gatecmask'. These elements play a crucial role in the game's interactive puzzles and progression. Gates are animated and masked to create the illusion of movement and interaction, a technique that required precise memory management on the Apple II. Mechner's implementation demonstrates his mastery of bank-switching, a method used to extend the effective memory of the system. This technique influenced later games that required dynamic interaction with background elements, such as The Lost Vikings and Lemmings."
  - id: "spike-animation-frames"
    line_start: 114
    line_end: 121
    title: "Animating Spikes: A Frame-by-Frame Approach"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "This section encodes animation frames for spikes using hex tables 'spikea' and 'spikeb'. Each frame represents a stage in the spikes' extension and retraction, creating a dynamic hazard for the player. Mechner's approach to animation was influenced by rotoscoping, a technique he used to trace real-life movements for character animations. By encoding animations in hex, he achieved smooth transitions within the Apple II's hardware limitations. This method of frame-based animation became a hallmark of cinematic platformers, inspiring games like Oddworld: Abe's Oddysee and Limbo."
  - id: "slicer-animation-sequences"
    line_start: 124
    line_end: 136
    title: "Slicers: The Deadly Dance of Blades"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    image_url: ""
    image_caption: ""
    content: "This section defines animation sequences for slicers, including their frames ('slicerseq') and positional data ('slicergap'). Slicers are one of the game's most memorable hazards, requiring precise timing to avoid. Mechner encoded their movement using compact data tables, ensuring smooth and predictable animations. The slicers' design reflects the cinematic platformer genre's emphasis on tension and timing. This approach to hazard animation influenced later games with similar mechanics, such as Super Meat Boy and Celeste."
  - id: "loose-floor-animation"
    line_start: 139
    line_end: 147
    title: "Loose Floors: Falling Into Danger"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section encodes animation data for loose floors, including hex tables 'loosea' and 'loosed'. Loose floors are a dynamic element that collapse when stepped on, adding an element of surprise and danger. Mechner's implementation uses compact data encoding to manage the animation frames and offsets. This feature exemplifies the game's cinematic approach, creating moments of tension and drama. Loose floors became a staple of platformer design, appearing in games like Tomb Raider and Rayman."
  - id: "solid-blocks-and-panels"
    line_start: 181
    line_end: 188
    title: "Solid Blocks: Building the World"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "This section defines solid blocks and panels, such as 'blockb' and 'panelb'. These elements form the backbone of the game's level design, providing structure and boundaries. Mechner's use of compact hex tables reflects the need to optimize memory usage on the Apple II. Solid blocks and panels were essential for creating the game's intricate levels, influencing the design of later platformers like Super Mario Bros. and Sonic the Hedgehog."

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