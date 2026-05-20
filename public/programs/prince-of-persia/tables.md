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
description: "This file defines lookup tables and constants for Prince of Persia's Apple II graphics and physics engine, enabling efficient calculations and memory usage in a constrained environment."

summary:
  - point: "Lookup tables simplify graphics and physics calculations"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup Table"
  - point: "Bank-switched memory techniques used to fit the game in 128KB"
    link: "https://en.wikipedia.org/wiki/Bank-switching"
    link_label: "Bank Switching"
  - point: "Rotoscoping animation influenced table-driven design"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Tables optimized for Apple II hardware constraints"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II"
  - point: "Jordan Mechner's solo development shaped cinematic platformers"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"

enhancements:
  - id: "byte-table-screen-x-to-byte"
    line_start: 44
    line_end: 58
    title: "How Screen X Coordinates Map to Bytes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "This section defines the 'ByteTable,' which maps screen X-coordinates (0–255) to byte numbers (0–36). The table is used to translate pixel positions into memory locations for efficient rendering on the Apple II. The 'lup' directive iterates to populate the table with values, ensuring that each screen coordinate corresponds to a specific byte. This approach minimizes computational overhead during gameplay, as the Apple II lacked advanced graphics hardware. In 1989, the Apple IIe/IIc was a popular home computer, but its hardware was limited compared to arcade machines. Developers often relied on lookup tables to precompute values, trading memory for speed. Jordan Mechner, working solo, designed these tables to optimize performance while fitting the game within 128KB of memory. The ByteTable reflects the precision required to align gameplay mechanics with the constraints of the Apple II's 6502 processor and memory architecture. This technique influenced later games that ran on constrained hardware, where lookup tables became standard for graphics and physics calculations. The concept of precomputing values for efficiency persists in modern game engines, albeit in more sophisticated forms like shader precompilation. Mechner's work demonstrated how careful planning and clever use of memory could overcome hardware limitations, a lesson that resonates with developers even today."
  - id: "offset-table-screen-x-to-offset"
    line_start: 60
    line_end: 71
    title: "Offset Table: Fine-Tuning Pixel Precision"
    wikipedia_url: "https://en.wikipedia.org/wiki/Pixel"
    image_url: ""
    image_caption: ""
    content: "The 'OffsetTable' maps screen X-coordinates to offsets within a byte (0–6). This table complements the ByteTable by providing finer granularity for pixel positioning. The 'lup' directive generates these offsets, ensuring that each pixel within a byte can be accurately addressed. This design is crucial for rendering graphics on the Apple II, where pixel-level precision was necessary to achieve smooth animations and detailed visuals. In the late 1980s, achieving cinematic-quality graphics on home computers was a significant challenge. Mechner's use of rotoscoping—tracing filmed movements frame by frame—required exact pixel placement to preserve the fluidity of character animations. The OffsetTable reflects the meticulous attention to detail that defined Prince of Persia's visual style. This approach influenced subsequent games that sought to push the boundaries of hardware capabilities. The idea of combining coarse and fine-grained tables for efficient rendering can be seen in modern graphics pipelines, where hierarchical data structures like mipmaps and spatial indices optimize performance. Mechner's work on Prince of Persia set a precedent for leveraging precomputed data to achieve artistic goals within technical constraints."
  - id: "block-table-screen-x-to-block"
    line_start: 73
    line_end: 91
    title: "Mapping Screen Coordinates to Game Blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tile-based_video_game"
    image_url: ""
    image_caption: ""
    content: "The 'BlockTable' maps screen X-coordinates to block numbers (-5 to 14). Blocks represent larger units of the game world, such as platforms or obstacles. The table is constructed using iterative loops, with each block spanning multiple screen coordinates. This design simplifies collision detection and level rendering by reducing the need for complex calculations during gameplay. Tile-based design was a common approach in the 1980s, as it allowed developers to create expansive game worlds using limited memory. Mechner's implementation reflects this paradigm, but with a cinematic twist: the blocks are carefully aligned to support the game's fluid animations and dynamic interactions. The BlockTable ensures that the game world is both visually coherent and computationally efficient. This technique influenced the development of tile-based engines in later games, such as Super Mario Bros. and The Legend of Zelda. The concept of dividing the game world into manageable units persists in modern game development, where grid-based systems are used for pathfinding, procedural generation, and physics simulations. Mechner's innovative use of block tables helped establish the cinematic platformer genre, inspiring developers to blend artistic ambition with technical ingenuity."
  - id: "pixel-table-block-to-pixel"
    line_start: 93
    line_end: 107
    title: "Inside the Blocks: Pixel-Level Mapping"
    wikipedia_url: "https://en.wikipedia.org/wiki/Pixel_art"
    image_url: ""
    image_caption: ""
    content: "The 'PixelTable' maps block numbers to pixel positions within each block (0–13). This table provides the granularity needed to render detailed graphics within the constraints of the Apple II. By precomputing pixel positions, the game avoids runtime calculations, ensuring smooth performance during gameplay. In the 1980s, pixel art was the dominant visual style for games, but achieving high-quality graphics on limited hardware required ingenuity. Mechner's use of rotoscoping demanded precise pixel placement to capture the subtleties of human motion. The PixelTable reflects this commitment to visual fidelity, enabling animations that felt lifelike despite the hardware's limitations. This approach influenced the evolution of pixel art and animation techniques in later games. The idea of precomputing pixel positions can be seen in modern sprite-based engines, where optimization techniques ensure high performance without sacrificing visual quality. Mechner's work on Prince of Persia demonstrated that even the simplest tools, like lookup tables, could be used to achieve groundbreaking artistic results."
  - id: "multiplication-tables-mult10-mult7-mult30"
    line_start: 109
    line_end: 140
    title: "Multiplication Without a Math Coprocessor"
    wikipedia_url: "https://en.wikipedia.org/wiki/Arithmetic_logic_unit"
    image_url: ""
    image_caption: ""
    content: "The 'Mult10,' 'Mult7,' and 'Mult30' tables precompute multiplication results for common factors. These tables allow the game to perform multiplication efficiently without relying on the Apple II's limited arithmetic capabilities. By storing precomputed values, the game avoids costly runtime calculations, which would have slowed performance. In the 1980s, most home computers lacked dedicated math coprocessors, making multiplication a computationally expensive operation. Developers often used lookup tables to precompute results for frequently used factors, trading memory for speed. Mechner's implementation reflects this strategy, ensuring that gameplay remains responsive even during complex animations and interactions. This technique influenced the design of early game engines, where precomputed tables were used for physics calculations, graphics transformations, and AI decision-making. The concept of optimizing arithmetic operations persists in modern computing, where techniques like SIMD (Single Instruction, Multiple Data) and GPU acceleration achieve similar goals. Mechner's use of multiplication tables highlights the ingenuity required to overcome hardware limitations and deliver a seamless gaming experience."
  - id: "block-edge-screen-x-left-edge"
    line_start: 143
    line_end: 154
    title: "Finding the Left Edge of Game Blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The 'BlockEdge' table maps block numbers to the screen X-coordinate of their left edge. This table is essential for collision detection and rendering, as it allows the game to determine where each block begins on the screen. By precomputing these values, the game avoids runtime calculations, ensuring smooth performance. Collision detection was a critical challenge in the 1980s, especially for platformers like Prince of Persia. Mechner's implementation reflects the precision required to align gameplay mechanics with the constraints of the Apple II. The BlockEdge table ensures that the game world is both visually coherent and computationally efficient. This approach influenced the development of collision detection systems in later games, where precomputed data structures like bounding boxes and spatial grids optimize performance. The idea of mapping game objects to screen coordinates persists in modern engines, where efficient rendering and physics calculations are essential for immersive gameplay. Mechner's work on Prince of Persia set a precedent for blending artistic ambition with technical ingenuity, inspiring developers to push the boundaries of what was possible on constrained hardware."

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