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
description: "This file defines key lookup tables and constants for Prince of Persia's Apple II graphics and gameplay logic, showcasing the ingenuity required to fit cinematic platforming into 128K of memory."

summary:
  - point: "Defines lookup tables for screen coordinates and block positions"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup Table"
  - point: "Uses memory-efficient techniques to precompute values for gameplay"
    link: "https://en.wikipedia.org/wiki/Precomputation"
    link_label: "Precomputation"
  - point: "Illustrates early use of assembly for cinematic platforming"
    link: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    link_label: "Cinematic Platformer"
  - point: "Optimized for Apple II bank-switched memory constraints"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Jordan Mechner's solo development effort shaped modern game design"
    link: "https://en.wikipedia.org/wiki/Jordan_Mechner"
    link_label: "Jordan Mechner"

enhancements:
  - id: "byte-table-screen-x-to-byte-number"
    line_start: 44
    line_end: 58
    title: "Mapping screen X-coordinates to byte numbers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "The ByteTable maps real screen X-coordinates (0–255) to byte numbers (0–36), effectively compressing the screen's horizontal resolution into manageable chunks. This table is used to quickly calculate which byte in memory corresponds to a given screen position. At the time, memory and processing power were extremely limited on the Apple II, so precomputing these values allowed the game to perform faster calculations during gameplay. Jordan Mechner designed this table to optimize rendering and collision detection, ensuring smooth gameplay despite the constraints of 6502 assembly and the Apple II's hardware. This approach influenced later games by demonstrating how lookup tables could be used to simplify complex calculations in real-time graphics rendering."
  - id: "offset-table-screen-x-to-offset"
    line_start: 60
    line_end: 71
    title: "Offset table for fine-grained screen positioning"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "The OffsetTable complements the ByteTable by providing finer-grained offsets within each byte. For each screen X-coordinate, it yields an offset (0–6) that specifies the exact position within the byte. This was critical for the game's graphics rendering, as it allowed precise placement of pixels within the limited resolution of the Apple II. Mechner's use of this table reflects the meticulous attention to detail required to achieve cinematic visuals on hardware with severe limitations. The concept of combining coarse and fine-grained lookup tables became a common technique in graphics programming, influencing later systems and engines that needed to balance precision with performance."
  - id: "block-table-screen-x-to-block-number"
    line_start: 73
    line_end: 91
    title: "Screen X-coordinates mapped to block numbers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tile-based_video_game"
    image_url: ""
    image_caption: ""
    content: "The BlockTable maps screen X-coordinates to block numbers, ranging from -5 to 14. Blocks represent discrete sections of the game world, such as platforms or walls. This table is used to determine which block a given screen position corresponds to, enabling efficient collision detection and level rendering. In the 1980s, tile-based game design was a common method for organizing game worlds, and Mechner's implementation here exemplifies how developers optimized these systems for constrained hardware. This table laid the groundwork for modern tile-based engines, influencing games like Super Mario Bros. and later level editors used in indie game development."
  - id: "pixel-table-block-to-pixel-number"
    line_start: 93
    line_end: 107
    title: "Mapping blocks to pixel positions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Pixel_art"
    image_url: ""
    image_caption: ""
    content: "The PixelTable maps blocks to pixel positions within each block, ranging from 0 to 13. This table allows the game to determine the exact pixel within a block for rendering or collision detection. By precomputing these values, Mechner ensured that the game could handle pixel-perfect interactions, which were essential for the precise movements and animations of Prince of Persia. This technique highlights the importance of precomputed data in achieving high-quality visuals and gameplay on limited hardware. The focus on pixel-level accuracy influenced later games that prioritized smooth animations and detailed environments."
  - id: "multiplication-tables-for-10-7-and-30"
    line_start: 109
    line_end: 140
    title: "Precomputed multiplication tables for speed"
    wikipedia_url: "https://en.wikipedia.org/wiki/Precomputation"
    image_url: ""
    image_caption: ""
    content: "The Mult10, Mult7, and Mult30 tables precompute multiplication results for the numbers 10, 7, and 30, respectively. These tables were used to avoid the computational expense of performing multiplications in real-time on the Apple II's 6502 processor, which lacked a dedicated multiplier. By storing these values in memory, Mechner ensured faster calculations during gameplay, particularly for physics and movement logic. This approach reflects the ingenuity required to work within the constraints of early microprocessors. Precomputed tables like these became standard practice in game development, influencing techniques used in later systems with limited processing power."
  - id: "block-edge-screen-x-coordinates"
    line_start: 143
    line_end: 154
    title: "Calculating block edges for screen rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tile-based_video_game"
    image_url: ""
    image_caption: ""
    content: "The BlockEdge table calculates the screen X-coordinates of the left edges of blocks, ranging from -12 to 14. This table is essential for rendering the game world, as it defines the boundaries of each block on the screen. By precomputing these values, Mechner ensured efficient rendering and collision detection, allowing the game to maintain its cinematic feel despite hardware limitations. The use of edge tables influenced later tile-based rendering systems, which relied on similar techniques to optimize performance and simplify level design."
  - id: "block-top-bottom-floor-y-coordinates"
    line_start: 154
    line_end: 185
    title: "Defining vertical positions for blocks and floors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Coordinate_system"
    image_url: ""
    image_caption: ""
    content: "The BlockTop, BlockBot, and FloorY tables define vertical positions for blocks and floors, using precomputed values based on screen coordinates and block dimensions. These tables are crucial for rendering and collision detection, as they establish the game's vertical layout. Mechner's careful calculation of these values ensured that the game world felt consistent and realistic, a key aspect of Prince of Persia's cinematic platforming. The use of precomputed vertical positions influenced later games that required precise control over character movement and level design, such as Another World and Flashback."

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