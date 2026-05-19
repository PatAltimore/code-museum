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
description: "This file defines essential lookup tables for Prince of Persia's Apple II graphics and gameplay logic, showcasing Jordan Mechner's ingenuity in optimizing for constrained hardware."

summary:
  - point: "Lookup tables for efficient graphics and gameplay calculations"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup Table"
  - point: "Bank-switched memory techniques to fit within Apple II's 128K limit"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Rotoscoping-inspired animation data integration"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Clever use of precomputed multiplication tables for speed"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Screen coordinate mapping tailored to Apple II's graphics constraints"
    link: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    link_label: "Apple II Graphics"

enhancements:
  - id: "byte-table-screen-x-to-byte-number"
    line_start: 44
    line_end: 58
    title: "Mapping Screen X to Byte Numbers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "The ByteTable is a lookup table that maps screen X-coordinates (0–255) to byte numbers (0–36). This mapping is crucial for translating the Apple II's graphical memory layout into manageable chunks for rendering. In this moment, Jordan Mechner is solving the problem of efficiently accessing screen data without recalculating offsets repeatedly during gameplay. By precomputing these values, the game can quickly determine which byte corresponds to any given X-coordinate, saving precious CPU cycles. In 1989, the Apple II was nearing the end of its commercial life, but it remained a popular platform for games due to its affordability and widespread adoption. The Apple II's graphics capabilities were limited, with a resolution of 280x192 pixels and a quirky memory layout that required programmers to think creatively. Mechner, working solo, had to optimize every aspect of his code to fit within the constraints of the 6502 processor and the 128K memory limit, which included bank-switched memory. This table exemplifies the ingenuity required to work within such constraints. The precomputed values allowed the game to maintain its fluid animations and responsive controls, hallmarks of Prince of Persia's groundbreaking gameplay. The use of lookup tables like ByteTable became a common technique in game development, influencing later games on more advanced platforms. Mechner's meticulous attention to detail in crafting these tables ensured the game could perform complex graphical operations efficiently, setting a standard for cinematic platformers."
  - id: "offset-table-screen-x-to-offset"
    line_start: 61
    line_end: 71
    title: "Offset Calculation Simplified"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "The OffsetTable maps screen X-coordinates to offsets within bytes, ranging from 0 to 6. This table complements the ByteTable by providing finer granularity for pixel-level operations. Mechner is addressing the challenge of efficiently accessing individual pixels within a byte, a necessity given the Apple II's peculiar graphics memory organization. The Apple II's graphics system stored pixels in groups within bytes, requiring programmers to calculate offsets manually or use precomputed tables like this one. In the late 1980s, such optimizations were vital for achieving smooth gameplay and animation. Mechner's decision to precompute offsets reflects his understanding of the hardware and his commitment to delivering a polished gaming experience. This table's impact extends beyond Prince of Persia. It demonstrates the importance of precomputed data in game development, a technique that persists in modern programming. By reducing the computational overhead during runtime, Mechner ensured the game could focus on delivering its groundbreaking animations and gameplay. This table is a small but essential piece of the puzzle that made Prince of Persia a technical marvel on the Apple II."
  - id: "block-table-screen-x-to-block-number"
    line_start: 74
    line_end: 91
    title: "Screen X to Block Number Mapping"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "The BlockTable maps screen X-coordinates to block numbers, ranging from -5 to 14. Blocks represent larger units of the game's graphical layout, such as platforms or walls. Mechner is solving the problem of translating screen coordinates into gameplay elements efficiently. In 1989, the Apple II's graphical limitations required developers to think in terms of blocks rather than individual pixels. This approach simplified collision detection and rendering while adhering to the constraints of the 6502 processor. Mechner's use of negative block numbers (-5) reflects his careful handling of off-screen elements, ensuring smooth transitions and accurate gameplay mechanics. The BlockTable is a testament to Mechner's ingenuity in optimizing for the Apple II's hardware. By precomputing block numbers, the game could quickly determine the graphical and gameplay properties of any given screen region. This technique influenced later games, showcasing the value of precomputed data in resource-constrained environments. Mechner's attention to detail in crafting these tables contributed to Prince of Persia's reputation as a technical and artistic achievement."
  - id: "pixel-table-screen-x-to-pixel-within-block"
    line_start: 94
    line_end: 107
    title: "Pixel-Level Precision Within Blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "The PixelTable maps screen X-coordinates to pixel numbers within blocks, ranging from 0 to 13. This table provides the fine detail necessary for rendering individual pixels within larger graphical blocks. Mechner is addressing the challenge of achieving pixel-level precision on the Apple II's limited hardware. The Apple II's graphics system required developers to manage pixels within blocks manually, a labor-intensive process that demanded careful planning. Mechner's decision to precompute pixel numbers reflects his commitment to optimizing every aspect of the game's performance. By using this table, the game could render detailed animations and environments efficiently. This table highlights the importance of precomputed data in game development, a technique that remains relevant today. Mechner's attention to detail ensured Prince of Persia could deliver its groundbreaking visuals and gameplay on the Apple II. The PixelTable is a small but vital component of the game's technical foundation, showcasing Mechner's mastery of 6502 assembly and his dedication to creating a cinematic platformer."
  - id: "multiplication-tables-mult10-mult7-mult30"
    line_start: 110
    line_end: 140
    title: "Precomputed Multiplication Tables for Speed"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "The Mult10, Mult7, and Mult30 tables provide precomputed multiplication results for 10, 7, and 30, respectively. These tables are essential for performing arithmetic operations efficiently on the Apple II's 6502 processor, which lacks dedicated multiplication instructions. Mechner is solving the problem of performing frequent multiplications without sacrificing performance. In the late 1980s, game developers often relied on precomputed tables to overcome the limitations of early microprocessors. The 6502 processor was powerful for its time but required creative solutions to handle complex calculations. Mechner's use of multiplication tables reflects his deep understanding of the hardware and his commitment to optimizing the game's performance. These tables are a reminder of the ingenuity required to develop games on early computers. By precomputing multiplication results, Mechner ensured the game could perform calculations quickly, contributing to its smooth gameplay and animations. This technique influenced later games, showcasing the value of precomputed data in resource-constrained environments. Mechner's attention to detail in crafting these tables is a testament to his technical skill and dedication to creating a cinematic platformer."

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