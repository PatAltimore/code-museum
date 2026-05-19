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
description: "This file defines background data structures for Prince of Persia, a groundbreaking cinematic platformer for the Apple II."

summary:
  - point: "Data tables encode visual elements like gates, spikes, and panels"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Memory-efficient hex and binary formats used for animation and layout"
    link: "https://en.wikipedia.org/wiki/6502_assembly_language"
    link_label: "6502 Assembly Language"
  - point: "Rotoscoping-inspired animations reflected in frame sequences"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Bank-switched memory techniques enabled complex graphics in 128K"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Jordan Mechner's solo development effort shaped the game's unique style"
    link: "https://en.wikipedia.org/wiki/Jordan_Mechner"
    link_label: "Jordan Mechner"

enhancements:
  - id: "maska-data-table"
    line_start: 47
    line_end: 48
    title: "Masking data for visual layering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mask_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `maska` data table defines masking values for visual elements in the game. Each hex value corresponds to a specific mask configuration, likely used to layer graphics or define collision boundaries. In 1989, memory constraints on the Apple II meant that every byte mattered. By encoding masks in compact hex format, Jordan Mechner ensured efficient use of the limited 128K memory available on the Apple IIe and IIc. This approach reflects the ingenuity required to create visually complex games on hardware designed for much simpler applications. Masking techniques like these would later evolve into more sophisticated systems in modern game engines, but here they represent a foundational step in visual design for games."
  - id: "piecea-data-table"
    line_start: 50
    line_end: 51
    title: "Defining game pieces with hex codes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Hexadecimal"
    image_url: ""
    image_caption: ""
    content: "The `piecea` table provides hex-coded definitions for various game pieces, such as floor tiles, gates, and spikes. Each value likely corresponds to a specific graphic or animation frame. In the mid-1980s, game developers often used hex codes to pack visual and functional data into the smallest possible space. For Prince of Persia, this meant encoding the entire game's world into compact tables that could be quickly accessed during gameplay. Mechner's decision to use hex codes reflects the constraints of the Apple II's 6502 processor, which had limited addressing capabilities and required efficient data handling. These tables are a testament to the careful planning and optimization that went into making the game run smoothly on such constrained hardware."
  - id: "pieceay-offsets"
    line_start: 53
    line_end: 54
    title: "Y-offsets for precise positioning"
    wikipedia_url: "https://en.wikipedia.org/wiki/Coordinate_system"
    image_url: ""
    image_caption: ""
    content: "The `pieceay` table defines Y-offsets for game pieces, providing relative positioning data for elements within the game world. These offsets are crucial for aligning graphics correctly, especially in a platformer where precision is key. In the Apple II era, developers had to manually calculate and encode such offsets, as there were no high-level tools or engines to automate these tasks. Mechner's attention to detail in positioning underscores the cinematic quality of Prince of Persia, where every movement and interaction feels deliberate and polished. This meticulous approach to positioning would later influence the design of modern platformers, where spatial accuracy remains a cornerstone of gameplay."
  - id: "bstripe-patterns"
    line_start: 65
    line_end: 69
    title: "Background stripe patterns"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tile-based_video_game"
    image_url: ""
    image_caption: ""
    content: "The `bstripe` table encodes stripe patterns for background elements, using hex values to define visual textures. These patterns contribute to the game's immersive environments, creating a sense of depth and detail despite the Apple II's graphical limitations. In the 1980s, developers often relied on repeating patterns to simulate complexity without consuming excessive memory. Mechner's use of hex-coded stripes reflects this era's ingenuity, where visual richness was achieved through clever reuse of limited resources. These patterns are an early example of tile-based design, a technique that would become standard in later 2D games and persists in modern game development."
  - id: "gate8b-animation"
    line_start: 95
    line_end: 116
    title: "Animating gates with sequential frames"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "The `gate8b` section defines animation frames for gates, using hex values to represent sequential states. This approach allows the game to depict gates opening and closing smoothly, enhancing the cinematic feel of Prince of Persia. Animation on the Apple II required careful planning, as each frame had to fit within the constraints of the system's memory and processing power. Mechner's use of frame sequences reflects his background in film and his desire to bring a sense of realism to the game. This technique, inspired by rotoscoping, laid the groundwork for more sophisticated animations in later games, bridging the gap between static graphics and dynamic storytelling."
  - id: "slicerseq-animation"
    line_start: 128
    line_end: 131
    title: "Slicer animation sequence"
    wikipedia_url: "https://en.wikipedia.org/wiki/Frame_rate"
    image_url: ""
    image_caption: ""
    content: "The `slicerseq` table defines the animation sequence for slicers, a type of obstacle in the game. Each value represents a specific frame, creating the illusion of movement as the slicer swings back and forth. Animation sequences like this were a hallmark of Prince of Persia, where obstacles were not just static hazards but dynamic elements that added tension and challenge. Mechner's ability to encode such sequences in compact tables reflects his mastery of the Apple II's capabilities. These animations contributed to the game's reputation as a cinematic platformer, influencing the design of interactive environments in later titles."
  - id: "loosed-floor"
    line_start: 147
    line_end: 163
    title: "Loose floor mechanics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_mechanics"
    image_url: ""
    image_caption: ""
    content: "The `loosed` section defines the behavior of loose floor tiles, a key gameplay mechanic in Prince of Persia. These tiles collapse when stepped on, adding an element of danger and strategy to the platforming experience. The hex and binary values encode the visual and positional data needed to simulate this effect. In the 1980s, such mechanics were groundbreaking, as they added dynamic interactions to otherwise static environments. Mechner's implementation of loose floors showcases his ability to blend technical constraints with creative design, resulting in gameplay that feels both challenging and cinematic. This mechanic would inspire similar features in later platformers, where environmental hazards became a staple of the genre."
  - id: "panelc-definitions"
    line_start: 166
    line_end: 173
    title: "Panel definitions for background design"
    wikipedia_url: "https://en.wikipedia.org/wiki/Background_(video_games)"
    image_url: ""
    image_caption: ""
    content: "The `panelc` table defines background panels used in the game's environments, providing hex codes for visual elements like walls and arches. These panels contribute to the game's atmospheric design, creating a sense of place and scale. On the Apple II, background design was limited by the system's graphical capabilities, requiring developers to rely on clever encoding and reuse of assets. Mechner's use of compact tables for panel definitions reflects his ability to maximize the visual impact of the game within these constraints. The attention to detail in background design helped establish Prince of Persia as a visually stunning title, influencing the aesthetic standards of future platformers."
  - id: "floorby-offsets"
    line_start: 179
    line_end: 184
    title: "Floor Y-offsets for alignment"
    wikipedia_url: "https://en.wikipedia.org/wiki/Coordinate_system"
    image_url: ""
    image_caption: ""
    content: "The `floorby` table defines Y-offsets for floor tiles, ensuring proper alignment within the game world. These offsets are crucial for maintaining the visual consistency of the environments, especially in a game where precise platforming is essential. In the Apple II era, developers had to manually calculate such offsets, as there were no automated tools to handle spatial alignment. Mechner's meticulous encoding of these values reflects his commitment to creating a polished and immersive experience. This attention to detail in environmental design set a high standard for platformers, influencing the genre's evolution in the years to come."
  - id: "blockfr-solid-blocks"
    line_start: 189
    line_end: 197
    title: "Solid block definitions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tile-based_video_game"
    image_url: ""
    image_caption: ""
    content: "The `blockfr` table defines solid blocks used in the game's environments, providing hex codes for these immovable elements. Solid blocks serve as the foundation of the game's platforming mechanics, creating stable surfaces for the player to navigate. On the Apple II, encoding such elements in compact tables was essential for optimizing memory usage. Mechner's approach to defining solid blocks reflects the technical constraints of the era and his ability to work within them to create compelling gameplay. These blocks are a fundamental part of the game's design, demonstrating how simple elements can be combined to create complex and engaging environments."

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