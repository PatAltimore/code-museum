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
description: "This file defines lookup tables and constants for Prince of Persia's Apple II graphics engine, enabling efficient calculations for screen coordinates, block positions, and pixel rendering."

summary:
  - point: "Defines lookup tables for screen coordinates and block geometry"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup Table"
  - point: "Uses compact memory-efficient data structures to fit within Apple II constraints"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II"
  - point: "Supports cinematic platformer gameplay with precise block and pixel calculations"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"

enhancements:
  - id: "byte-table-screen-coordinates"
    line_start: 45
    line_end: 58
    title: "Mapping screen coordinates to byte indices"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Multiplication_table_to_scale.svg/330px-Multiplication_table_to_scale.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Multiplication table to scale (CC BY-SA 4.0)"
    content: "The ByteTable maps real screen X-coordinates (0–255) to byte indices (0–36), enabling efficient access to screen data. This lookup table is a critical optimization for the Apple II's limited processing power. By precomputing these mappings, the game avoids costly runtime calculations, ensuring smooth animations and gameplay. In 1989, Jordan Mechner was working with a machine that had only 128K of memory and a 1 MHz processor. Every cycle mattered, and this approach reflects the ingenuity required to deliver cinematic platformer gameplay on such constrained hardware. The ByteTable's structure, with repeated values for certain ranges, mirrors the Apple II's graphics layout, where multiple pixels are packed into single bytes. This table would later inspire similar optimizations in other games designed for memory-constrained systems."
  - id: "offset-table-pixel-offsets"
    line_start: 61
    line_end: 71
    title: "Precomputing pixel offsets within bytes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Offset_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The OffsetTable complements the ByteTable by providing pixel offsets within each byte. For each screen X-coordinate, it yields an offset (0–6) that specifies the exact pixel within the byte. This design reflects the Apple II's graphics system, where multiple pixels are stored in a single byte. By precomputing these offsets, Mechner eliminates the need for runtime bit-shifting operations, which would have been prohibitively slow on the Apple II's 1 MHz processor. The OffsetTable is another example of how Mechner's code balances precision and performance, enabling the fluid animations that define Prince of Persia's gameplay. This table is a testament to the meticulous planning required to optimize for the Apple II's unique hardware constraints."
  - id: "block-table-screen-blocks"
    line_start: 74
    line_end: 91
    title: "Mapping screen coordinates to block numbers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tile-based_video_game"
    image_url: ""
    image_caption: ""
    content: "The BlockTable maps screen X-coordinates (0–255) to block numbers (-5 to 14). Blocks are the fundamental units of Prince of Persia's level design, representing individual tiles that compose the game's environment. This table ensures that the game can quickly determine which block corresponds to a given screen position, a necessity for collision detection and rendering. In the late 1980s, tile-based systems were a common solution for managing game environments on limited hardware. Mechner's implementation is notable for its simplicity and efficiency, using precomputed values to avoid runtime calculations. The BlockTable's range of values reflects the game's scrolling mechanics, where blocks can move on and off the screen. This approach laid the groundwork for many future platformers, which adopted similar techniques for managing tile-based worlds."
  - id: "pixel-table-block-pixels"
    line_start: 94
    line_end: 107
    title: "Mapping block coordinates to pixel positions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Pixel"
    image_url: ""
    image_caption: ""
    content: "The PixelTable maps block coordinates to pixel positions within each block. For each block, it provides a sequence of pixel indices (0–13), corresponding to the individual pixels that make up the block. This table is crucial for rendering the game's detailed environments, ensuring that each pixel is drawn in the correct position. In 1989, pixel-level precision was rare in games, but it was essential for Prince of Persia's cinematic style. Mechner's use of precomputed tables reflects his commitment to delivering smooth animations and visually rich environments, even on the Apple II's limited hardware. The PixelTable's design anticipates the needs of modern games, where pixel-perfect rendering is a standard feature."
  - id: "multiplication-tables"
    line_start: 110
    line_end: 140
    title: "Precomputed multiplication tables for speed"
    wikipedia_url: "https://en.wikipedia.org/wiki/Multiplication_table"
    image_url: ""
    image_caption: ""
    content: "The Mult10, Mult7, and Mult30 tables provide precomputed multiplication results for common factors. These tables eliminate the need for runtime multiplication, which would have been slow on the Apple II's 6502 processor. Instead, the game can simply look up the result in the table, saving valuable CPU cycles. This technique reflects the constraints of 1980s hardware, where arithmetic operations were often a bottleneck. Mechner's decision to include these tables shows his deep understanding of the Apple II's limitations and his ability to work within them. Precomputed multiplication tables were a common optimization in early game development, but their use in Prince of Persia is particularly notable for the game's complexity and ambition."
  - id: "block-edge-screen-coordinates"
    line_start: 143
    line_end: 154
    title: "Calculating block edges for rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_pipeline"
    image_url: ""
    image_caption: ""
    content: "The BlockEdge table calculates the screen X-coordinates of the left edges of blocks. For each block, it provides the position where the block begins on the screen. This table is essential for rendering the game's environments, ensuring that blocks are drawn in the correct positions. In the late 1980s, games often used similar techniques to manage tile-based graphics, but Prince of Persia's implementation is notable for its precision and efficiency. Mechner's use of precomputed values reflects his commitment to delivering smooth gameplay and visually rich environments, even on the Apple II's limited hardware. The BlockEdge table is a key part of the game's graphics pipeline, enabling the cinematic style that defines Prince of Persia."
  - id: "block-top-bottom-floor-y"
    line_start: 157
    line_end: 185
    title: "Defining block heights and floor positions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Platform_game"
    image_url: ""
    image_caption: ""
    content: "The BlockTop, BlockBot, and FloorY tables define the vertical positions of blocks and floors. These tables ensure that the game's environments are rendered correctly, with blocks and floors appearing in the right places. In 1989, platform games were just beginning to explore complex environments, and Prince of Persia was at the forefront of this trend. Mechner's use of precomputed tables reflects his commitment to delivering visually rich environments and precise gameplay. These tables are a testament to the meticulous planning required to optimize for the Apple II's unique hardware constraints. They also highlight the game's cinematic style, with carefully designed environments that enhance the player's experience."

---

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