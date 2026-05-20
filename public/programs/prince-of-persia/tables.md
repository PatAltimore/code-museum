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
description: "This file defines lookup tables and constants for Prince of Persia's Apple II graphics and gameplay logic, showcasing clever memory-efficient techniques in 6502 assembly."

summary:
  - point: "Defines lookup tables for screen coordinates, block positions, and pixel offsets"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup Table"
  - point: "Uses compact data structures to fit within the constraints of 128KB memory"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Encodes game physics and level geometry using precomputed tables"
    link: "https://en.wikipedia.org/wiki/Game_physics"
    link_label: "Game Physics"
  - point: "Demonstrates the use of rotoscoping-inspired precision in block positioning"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Jordan Mechner's solo development approach influenced cinematic platformers"
    link: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    link_label: "Cinematic Platformer"

enhancements:
  - id: "byte-table-screen-x-to-byte"
    line_start: 44
    line_end: 58
    title: "How Screen X Coordinates Map to Bytes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "This section defines the `ByteTable`, a lookup table mapping screen X-coordinates (0–255) to byte numbers (0–36). The table uses a compact representation, with each byte corresponding to a specific range of screen pixels. This design allows the game to quickly translate graphical positions into memory addresses for rendering. The use of precomputed tables like this was essential in the Apple II's constrained environment, where computational power was limited, and real-time calculations were expensive. Jordan Mechner likely adopted this approach to ensure smooth gameplay and precise animations, leveraging the Apple II's 128KB memory and bank-switching capabilities. This technique influenced later games that relied on similar precomputed tables for efficient rendering, particularly in the era of 8-bit and 16-bit consoles."
  - id: "offset-table-byte-to-offset"
    line_start: 60
    line_end: 71
    title: "From Byte to Offset: A Second Layer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "The `OffsetTable` maps the same screen X-coordinates as the `ByteTable` but provides offsets (0–6) within each byte. This second layer of indirection allows the game to pinpoint exact pixel positions within a byte, essential for rendering fine details in the Apple II's low-resolution graphics. By separating byte and offset calculations, Mechner optimized memory usage and computational efficiency, ensuring the game could handle complex animations and interactions without slowing down. This dual-table approach reflects the ingenuity required to work within the constraints of 6502 assembly and limited hardware resources. Similar techniques appeared in later games for systems like the NES and Commodore 64, which also relied on lookup tables for efficient graphics handling."
  - id: "block-table-screen-x-to-block"
    line_start: 73
    line_end: 91
    title: "Mapping Screen X to Game Blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_engine"
    image_url: ""
    image_caption: ""
    content: "The `BlockTable` maps screen X-coordinates to block numbers (-5 to 14), defining the spatial layout of the game's levels. Blocks represent discrete segments of the environment, such as platforms or walls, and are central to the game's physics and collision detection. This table enables the game engine to quickly determine which block a character or object is interacting with, a critical feature for the game's platforming mechanics. Mechner's use of precomputed block mappings reflects his focus on precision and efficiency, inspired by his rotoscoping technique for animation. This approach influenced later platformers, where block-based level design became a standard practice, particularly in games like Super Mario Bros. and Sonic the Hedgehog."
  - id: "pixel-table-block-to-pixel"
    line_start: 93
    line_end: 107
    title: "Pixel Precision Within Blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Pixel_art"
    image_url: ""
    image_caption: ""
    content: "The `PixelTable` maps block numbers to pixel positions within each block (0–13). This table provides fine-grained control over rendering, ensuring that characters and objects align perfectly with the game's environment. By precomputing pixel positions, Mechner avoided costly real-time calculations, a necessity given the Apple II's limited processing power. This level of precision was crucial for the game's cinematic feel, as it allowed smooth transitions and realistic movements. The technique highlights the intersection of technical constraints and artistic ambition, a hallmark of Mechner's work. Later games adopted similar methods to achieve pixel-perfect rendering, particularly in the era of 2D platformers and adventure games."
  - id: "mult10-multiplication-table"
    line_start: 109
    line_end: 118
    title: "A Multiplication Table for Tens"
    wikipedia_url: "https://en.wikipedia.org/wiki/Multiplication_table"
    image_url: ""
    image_caption: ""
    content: "The `Mult10` table precomputes multiples of 10 (0, 10, 20, ..., 150), enabling fast multiplication without relying on the Apple II's limited arithmetic capabilities. Multiplication was expensive on 6502 processors, which lacked dedicated hardware for such operations. By storing results in a table, Mechner ensured that calculations involving multiples of 10 could be performed instantly, a significant optimization for gameplay mechanics like physics and scoring. This technique exemplifies the resourcefulness required to work within the constraints of early microprocessors. Precomputed multiplication tables became a common practice in assembly programming, influencing the design of game engines and embedded systems."
  - id: "block-edge-left-coordinates"
    line_start: 140
    line_end: 154
    title: "Where Blocks Begin: Left Edges"
    wikipedia_url: "https://en.wikipedia.org/wiki/Coordinate_system"
    image_url: ""
    image_caption: ""
    content: "The `BlockEdge` table defines the screen X-coordinates of the left edges of blocks, mapping block numbers (-5 to 14) to their starting positions. This table is essential for rendering and collision detection, as it allows the game engine to determine where each block begins on the screen. Mechner's decision to precompute these values reflects his focus on efficiency and precision, ensuring that the game could handle complex interactions without sacrificing performance. The use of precomputed edge coordinates influenced later games that relied on grid-based level design, such as Tetris and SimCity, where spatial relationships are central to gameplay."
  - id: "block-top-bottom-floor-y"
    line_start: 157
    line_end: 185
    title: "Vertical Geometry: Tops, Bottoms, and Floors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "This section defines vertical positions for blocks (`BlockTop`, `BlockBot`) and floors (`FloorY`), mapping block numbers to their respective screen Y-coordinates. These tables are critical for collision detection and character movement, ensuring that the game's physics align with its visual representation. Mechner's attention to detail in defining these values reflects his commitment to creating a realistic and immersive experience, inspired by his rotoscoping technique. The precomputed vertical geometry allowed the game to handle complex interactions, such as jumping and falling, with precision. This approach influenced later platformers and adventure games, where vertical positioning became a key aspect of gameplay mechanics."

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
