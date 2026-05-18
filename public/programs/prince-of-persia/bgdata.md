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
description: "This file defines the background data and animations for Prince of Persia (1989), laying the foundation for its cinematic platformer gameplay."

summary:
  - point: "Defines piece IDs for background elements"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"
  - point: "Uses compact hex and binary tables for animation frames"
    link: "https://en.wikipedia.org/wiki/6502"
    link_label: "6502 Assembly"
  - point: "Optimizes memory usage for the Apple II's constraints"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II"
  - point: "Implements rotoscoped animations via frame sequences"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Includes clever tricks for bank-switched memory"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"

enhancements:
  - id: "piece-id-definitions"
    line_start: 6
    line_end: 35
    title: "Mapping the World: Piece IDs"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "These lines define the IDs for various background pieces in Prince of Persia, such as floors, gates, spikes, and torches. Each ID corresponds to a specific graphical element or interactive object in the game world. Jordan Mechner meticulously assigned these IDs to ensure consistency and ease of reference throughout the game's code. In 1989, memory was a precious resource on the Apple II, which had only 128K of RAM. By using compact numerical IDs, Mechner could efficiently reference and manipulate these elements without wasting memory. This approach also allowed him to create a modular system where pieces could be swapped or updated easily. The decision to use IDs reflects the constraints of the era and Mechner's ingenuity in working within them. These IDs became the building blocks for the game's iconic levels, enabling the seamless integration of gameplay and cinematic storytelling."
  - id: "maska-and-piecea-tables"
    line_start: 47
    line_end: 54
    title: "Hex Tables: Compact Animation Data"
    wikipedia_url: "https://en.wikipedia.org/wiki/6502"
    image_url: ""
    image_caption: ""
    content: "The `maska` and `piecea` tables store data in hexadecimal format, representing graphical masks and piece attributes. This compact representation was crucial for fitting the game's data into the Apple II's limited memory. Each hex value encodes specific properties, such as visibility or interaction, for background elements. Mechner's use of hex tables reflects the influence of assembly language programming, where efficiency and direct hardware manipulation were paramount. In the mid-1980s, programmers often relied on such techniques to maximize performance and minimize memory usage. These tables are a testament to Mechner's ability to balance technical constraints with creative ambition, enabling the rich visual and interactive experience of Prince of Persia."
  - id: "spike-animation-frames"
    line_start: 115
    line_end: 122
    title: "Animating Danger: Spike Frames"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "The spike animation frames define the movement sequence for one of the game's most iconic hazards. Each frame is represented as a hex value, specifying the visual state of the spikes at a given moment. Mechner's attention to detail in animating these hazards reflects his commitment to creating a cinematic experience. The rotoscoping technique he used for character animations influenced his approach to environmental animations, ensuring smooth transitions and realistic motion. In the late 1980s, such animations were groundbreaking for platformers, setting Prince of Persia apart from its contemporaries. These frames not only added tension to the gameplay but also showcased the potential of the Apple II hardware when pushed to its limits."
  - id: "slicer-animation-data"
    line_start: 125
    line_end: 137
    title: "The Slicer: A Deadly Ballet"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The slicer animation data defines the movement and appearance of another iconic hazard in Prince of Persia. Using hex values and binary tables, Mechner crafted a sequence that conveys the slicer's deadly precision. Each value corresponds to a specific frame, ensuring smooth and consistent motion. This section highlights Mechner's ability to blend technical constraints with artistic vision, creating hazards that feel alive and menacing. In the late 1980s, such dynamic environmental elements were rare in platformers, making Prince of Persia a standout title. The slicer's animation not only added to the game's challenge but also reinforced its cinematic atmosphere, a hallmark of Mechner's design philosophy."
  - id: "loose-floor-animation"
    line_start: 140
    line_end: 150
    title: "Falling Floors: Dynamic Gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The loose floor animation frames define the behavior of collapsing platforms, a key gameplay mechanic in Prince of Persia. Using hex and binary tables, Mechner encoded the visual and positional changes for these dynamic elements. This mechanic added a layer of strategy and urgency to the game, forcing players to time their movements carefully. In the context of 1980s platformers, dynamic environmental elements like falling floors were innovative, enhancing both gameplay and storytelling. Mechner's decision to include such mechanics reflects his ambition to create a game that felt alive and reactive. These animations not only challenged players but also contributed to the game's immersive atmosphere, cementing its legacy as a cinematic platformer."
  - id: "moveparams-and-gravity"
    line_start: 192
    line_end: 195
    title: "Gravity Rules: Movement Parameters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `moveparams` section defines the gravity parameters for Prince of Persia, setting the maximum and minimum values for movement calculations. These values govern how characters and objects interact with the environment, ensuring realistic physics within the game's constraints. Mechner's attention to detail in defining these parameters reflects his commitment to creating a believable and engaging world. In the late 1980s, such physics calculations were rare in platformers, showcasing Mechner's technical prowess. These parameters not only enhanced the gameplay but also contributed to the game's cinematic feel, a defining feature of Prince of Persia. By carefully tuning these values, Mechner ensured that every jump, fall, and collision felt natural, elevating the game's immersive experience."

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