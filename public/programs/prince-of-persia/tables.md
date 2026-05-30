---
title: "TABLES.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/TABLES.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/TABLES.S"
year: 1989
author: "Jordan Mechner"
slug: "tables"
order: 28
description: "This file defines critical lookup tables for Prince of Persia's Apple II graphics and gameplay logic, showcasing Jordan Mechner's ingenuity in optimizing for constrained hardware."

summary:
  - point: "Defines lookup tables for screen coordinates, block positions, and pixel offsets"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup Table"
  - point: "Uses precomputed multiplication tables to avoid runtime calculations"
    link: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    link_label: "Fixed-Point Arithmetic"
  - point: "Optimizes memory usage with compact data structures for 128K Apple II systems"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II"
  - point: "Maps screen coordinates to game blocks for seamless animation and collision detection"
    link: "https://en.wikipedia.org/wiki/Collision_detection"
    link_label: "Collision Detection"
  - point: "Highlights the constraints of programming cinematic platformers in assembly"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"

enhancements:
  - id: "byte-table-screen-coordinates"
    line_start: 13
    line_end: 58
    title: "How Screen Coordinates Map to Bytes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "The ByteTable maps real screen X-coordinates (0–255) to byte numbers (0–36), effectively segmenting the screen into manageable chunks for rendering. This table is precomputed to optimize performance, avoiding the need for runtime calculations. In the constrained environment of the Apple II, where every CPU cycle mattered, lookup tables like this were essential for maintaining smooth gameplay. Jordan Mechner, working solo on Prince of Persia, had to fit the entire game into 128K of memory while ensuring it ran efficiently on a 1MHz 6502 processor. The ByteTable reflects this constraint, breaking down the screen into byte-sized units that could be processed quickly. Mechner's approach was influenced by techniques used in earlier Apple II games, but he pushed them further to achieve the cinematic fluidity that defined Prince of Persia. This mapping technique became a standard practice in games of the era, influencing how developers thought about screen rendering and memory management. Later games, such as Another World (1991), adopted similar strategies to handle complex graphics on limited hardware. The use of lookup tables for rendering persists in modern game engines, albeit in more sophisticated forms, showcasing the enduring legacy of Mechner's work."
  - id: "offset-table-fine-grained-rendering"
    line_start: 60
    line_end: 71
    title: "Offset Table: Fine-Grained Pixel Rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Pixel_art"
    image_url: ""
    image_caption: ""
    content: "The OffsetTable complements the ByteTable by providing sub-byte offsets (0–6) for finer control over pixel rendering. This allows the game to precisely position elements on the screen, ensuring the smooth animations and detailed visuals that Prince of Persia is known for. In 1989, the Apple II's graphics capabilities were limited to low-resolution modes with a fixed color palette. Mechner's use of the OffsetTable demonstrates his mastery of the hardware, enabling him to create a visually rich experience despite these constraints. The table's precomputed values saved precious CPU cycles, a necessity given the 1MHz clock speed of the Apple II. This technique influenced later developers working on constrained systems, showing how precomputed data could be leveraged to achieve high-quality visuals. Games like Flashback (1992) and early console titles borrowed similar strategies to optimize rendering. Today, pixel-perfect rendering remains a cornerstone of retro-inspired game design, connecting modern developers to Mechner's pioneering work."
  - id: "block-table-game-world-mapping"
    line_start: 73
    line_end: 91
    title: "Mapping Screen Coordinates to Game Blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The BlockTable maps screen X-coordinates to game block numbers (-5 to 14), defining the spatial layout of the game world. This mapping is crucial for collision detection, level design, and animation, ensuring that the Prince interacts seamlessly with the environment. Mechner's approach reflects the challenges of creating a cinematic platformer on the Apple II. By precomputing these mappings, he avoided runtime calculations that would have slowed down gameplay. The BlockTable also highlights the game's modular design, where each block represents a distinct piece of the level. This modular approach influenced later platformers, such as Super Mario Bros. (1985) and Sonic the Hedgehog (1991), which used similar techniques to manage complex game worlds. The concept of mapping screen coordinates to game objects persists in modern game engines, forming the basis of spatial partitioning systems used in 3D environments."
  - id: "mult-tables-avoiding-runtime-multiplication"
    line_start: 13
    line_end: 19
    title: "Precomputed Multiplication Tables: Speed Over Cycles"
    wikipedia_url: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    image_url: ""
    image_caption: ""
    content: "The Mult10, Mult7, and Mult30 tables provide precomputed multiplication results for common factors, avoiding the need for runtime calculations. This technique was a common optimization on systems like the Apple II, where multiplication was computationally expensive. Jordan Mechner used these tables to streamline gameplay logic, ensuring that calculations involving movement, animation, and collision detection could be performed quickly. The tables reflect the constraints of the 6502 processor, which lacked hardware multiplication and required software-based solutions. Precomputed multiplication tables became a staple of game development on constrained hardware, influencing how developers approached optimization. While modern processors handle multiplication efficiently, the principle of precomputing data to save runtime cycles remains relevant, especially in graphics programming and real-time simulation."
  - id: "block-edge-screen-coordinates"
    line_start: 21
    line_end: 153
    title: "Defining Block Edges for Precise Interaction"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The BlockEdge table maps block numbers (-5 to 14) to their corresponding screen X-coordinates, defining the left edge of each block. This mapping is essential for collision detection and ensuring that the Prince interacts correctly with the environment. Mechner's use of this table reflects his attention to detail in creating a believable game world. By precomputing these values, he ensured that the game's physics and animations could run smoothly on the Apple II's limited hardware. The concept of defining object edges for collision detection influenced later games and engines, forming the basis of bounding box and hitbox systems used in modern game development. Mechner's work laid the groundwork for these techniques, demonstrating how careful planning and optimization could overcome hardware limitations."
  - id: "block-top-bottom-floor-y"
    line_start: 154
    line_end: 194
    title: "Vertical Mapping: Blocks, Floors, and Heights"
    wikipedia_url: "https://en.wikipedia.org/wiki/Platform_game"
    image_url: ""
    image_caption: ""
    content: "The BlockTop, BlockBot, and FloorY tables define vertical positions for blocks and floors, mapping block numbers to their corresponding screen Y-coordinates. These mappings are crucial for rendering the game world and ensuring accurate collision detection. In the Apple II's constrained environment, where vertical resolution was limited, Mechner's use of these tables allowed him to create a visually rich and interactive game world. The precomputed values saved CPU cycles, enabling smooth gameplay and animations. This vertical mapping technique influenced later platformers, such as Castlevania (1986) and Mega Man (1987), which used similar approaches to define their game worlds. The concept of mapping objects to screen coordinates persists in modern game engines, showcasing the enduring impact of Mechner's work."

---

```asm
* tables
org = $e00
 tr on
 lst off
*-------------------------------
*
*  PRINCE OF PERSIA
*  Copyright 1989 Jordan Mechner
*
*-------------------------------
 dum org

ByteTable ds $100
OffsetTable ds $100
BlockTable ds $100
PixelTable ds $100
Mult10 ds $10
Mult7 ds $10
Mult30 ds $40

BlockEdge ds 20
BlockTop ds 5
BlockBot ds 5
FloorY ds 5
BlockAy ds 5

 dend
*-------------------------------
 org org
*-------------------------------
ScrnLeft = 58
ScrnTop = 0
ScrnBot = 191

VertDist = 10 ;from bottom of block to center plane
BlockHeight = 63
DHeight = 3 ;floorpiece thickness

Blox1 = BlockHeight
Blox2 = 2*BlockHeight
Blox3 = 3*BlockHeight
Blox4 = 4*BlockHeight

*-------------------------------
* ByteTable
*
* Index:  Real screen X-coord (0-255)
* Yields: Byte # (0-36)
*-------------------------------

 ds ByteTable-*

]byte = 0
 lup 36
 db ]byte,]byte,]byte,]byte,]byte,]byte,]byte
]byte = ]byte+1
 --^
 db 36,36,36,36

*-------------------------------
* OffsetTable
*
* Index:  Same as ByteTable
* Yields: Offset (0-6)
*-------------------------------
 ds OffsetTable-*

 lup 36
 db 0,1,2,3,4,5,6
 --^
 db 0,1,2,3

*-------------------------------
* BlockTable
*
* Index:  Screen X-coord (0 to 255)
* Yields: Block # (-5 to 14)
*-------------------------------
 ds BlockTable-*

]byte = -5
 db ]byte,]byte

 lup 18
]byte = ]byte+1
 db ]byte,]byte,]byte,]byte,]byte,]byte,]byte
 db ]byte,]byte,]byte,]byte,]byte,]byte,]byte
 --^

]byte = ]byte+1
 db ]byte,]byte

*-------------------------------
* PixelTable
*
* Index:  Same as BlockTable
* Yields: Pixel # within block (0 to 13)
*-------------------------------
 ds PixelTable-*

 db 12,13

 lup 18
 db 0,1,2,3,4,5,6,7,8,9,10,11,12,13
 --^

 db 0,1

*-------------------------------
* Mult10
*-------------------------------
 ds Mult10-*

]byte = 0
 lup 16
 db ]byte
]byte = ]byte+10
 --^

*-------------------------------
* Mult7
*-------------------------------
 ds Mult7-*

]byte = 0
 lup 16
 db ]byte
]byte = ]byte+7
 --^

*-------------------------------
* Mult30
*-------------------------------
 ds Mult30-*

]word = 0
 lup 32
 dw ]word
]word = ]word+30
 --^

*-------------------------------
* BlockEdge
*
* Index:  Block X (-5 to 14) + 5
* Yields: Screen X-coord of left edge of block
*-------------------------------
 ds BlockEdge-*

]byte = -12
 lup 20
 db ]byte
]byte = ]byte+14
 --^

*-------------------------------
* BlockTop, BlockBot, FloorY
*
* Index:  Block Y (-1 to 3) + 1

 ds BlockTop-*

 db ScrnBot+1-Blox4
 db ScrnBot+1-Blox3
 db ScrnBot+1-Blox2
 db ScrnBot+1-Blox1
 db ScrnBot+1

*-------------------------------
 ds BlockBot-*

 db ScrnBot-Blox3
 db ScrnBot-Blox2
 db ScrnBot-Blox1
 db ScrnBot
 db ScrnBot+Blox1

*-------------------------------
 ds FloorY-*

 db ScrnBot-Blox3-VertDist
 db ScrnBot-Blox2-VertDist
 db ScrnBot-Blox1-VertDist
 db ScrnBot-VertDist
 db ScrnBot+Blox1-VertDist

*-------------------------------
 ds BlockAy-*

 db ScrnBot-Blox3-DHeight
 db ScrnBot-Blox2-DHeight
 db ScrnBot-Blox1-DHeight
 db ScrnBot-DHeight
 db ScrnBot+Blox1-DHeight

*-------------------------------
 lst
eof ds 1
 usr $a9,3,$000,*-org
 lst off
```