---
title: "HRTABLES.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/HRTABLES.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/HRTABLES.S"
year: 1989
author: "Jordan Mechner"
slug: "hrtables"
order: 24
description: "This file defines critical lookup tables for pixel manipulation in Prince of Persia, enabling smooth animation and precise graphics rendering on the Apple II."

summary:
  - point: "Lookup tables for pixel shifts and carries"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup table"
  - point: "Bank-switched memory techniques for Apple II"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Rotoscoping-inspired animation precision"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Self-modifying code for dynamic graphics"
    link: "https://en.wikipedia.org/wiki/Self-modifying_code"
    link_label: "Self-modifying code"
  - point: "Efficient use of 6502 assembly for cinematic platforming"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"

enhancements:
  - id: "ylo-hires-page-addressing"
    line_start: 16
    line_end: 29
    title: "Mapping Screen Y-Coordinates to Memory Pages"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "The YLO table defines base addresses for screen Y-coordinates on the Apple II's high-resolution graphics mode. Each entry corresponds to a specific row on the screen, mapping the vertical position to memory locations. This table is essential for rendering graphics efficiently, as it allows the program to calculate pixel positions without performing complex arithmetic during runtime. In 1989, the Apple II was nearing the end of its dominance, but its graphics capabilities were still being pushed to their limits by games like Prince of Persia. The high-resolution mode, introduced with the Apple IIe, provided 280x192 pixels, but programmers had to manage memory manually, including switching between pages and banks. Jordan Mechner, working solo, devised this table to streamline the process of drawing graphics on the screen. This approach to memory mapping was a necessity for the Apple II's constrained hardware. With only 128K of RAM and no dedicated graphics processor, every byte and cycle mattered. The YLO table reflects Mechner's ingenuity in optimizing the system for smooth animation and gameplay. Similar techniques were used in other Apple II games but rarely with the cinematic precision seen here. The consequence of this design is a game that feels fluid and responsive despite the limitations of the hardware. The memory mapping technique seen in YLO influenced later games on similar systems and remains a fascinating example of early graphics programming ingenuity."
  - id: "yhi-hires-page-addressing"
    line_start: 31
    line_end: 56
    title: "High Byte Addressing for Screen Rows"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "The YHI table complements YLO by providing the high byte of the memory address for each screen row. Together, these tables allow the program to calculate the full address of a pixel's position in memory, enabling efficient rendering of graphics. This dual-table approach minimizes runtime calculations, which is critical for maintaining performance on the Apple II's 1 MHz 6502 processor. Jordan Mechner's decision to precompute these values reflects the constraints of the era. In the mid-1980s, the Apple II was competing with newer systems like the Commodore 64 and IBM PC, but its simplicity and affordability kept it popular among hobbyists and schools. Developers had to work within its limitations, including a lack of hardware acceleration for graphics. The YHI table is a testament to Mechner's meticulous optimization. By splitting the address into high and low bytes, he ensured that the game could access memory locations quickly, a necessity for the smooth animations and precise controls that define Prince of Persia. This technique was not unique to his game but was implemented here with exceptional care. The legacy of this design lies in its influence on other developers working with constrained hardware. The precomputed addressing seen in YHI and YLO tables is an early example of optimizing for performance, a principle that continues to shape game development today."
  - id: "shift-tables-pixel-manipulation"
    line_start: 58
    line_end: 126
    title: "Pixel Shifting for Smooth Animation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "The SHIFT tables define precomputed values for shifting pixel data by 0 to 6 positions. These tables are used to manipulate graphics at the byte level, enabling smooth transitions and animations. Each table corresponds to a specific shift amount, allowing the program to adjust pixel positions without recalculating them during runtime. In the late 1980s, animation in games was often limited by hardware constraints. Prince of Persia broke new ground by using rotoscoping, a technique where live-action footage is traced frame by frame to create realistic movement. To implement this on the Apple II, Jordan Mechner had to ensure that the animations were not only visually accurate but also computationally efficient. The SHIFT tables are a direct response to these constraints. By precomputing shifted values, Mechner reduced the computational load during gameplay, freeing up the 6502 processor for other tasks. This approach reflects the ingenuity required to create cinematic experiences on hardware that was never designed for such ambitions. The impact of these tables is evident in the game's fluid animations, which set a new standard for platformers. The concept of precomputing data for performance optimization remains relevant, influencing techniques in modern game development and graphics programming."
  - id: "carry-tables-byte-overflow"
    line_start: 128
    line_end: 205
    title: "Handling Byte Overflow for Graphics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Carry_flag"
    image_url: ""
    image_caption: ""
    content: "The CARRY tables handle the overflow of pixel data when shifting bytes. Each table corresponds to a specific shift amount, providing precomputed values for the carryover to the next byte. This ensures that graphics remain consistent and accurate even when pixel data spans multiple memory locations. In the Apple II's high-resolution mode, graphics are stored as a series of bytes, with each byte representing a group of pixels. Manipulating these bytes often results in overflow, where data spills into adjacent memory locations. Jordan Mechner addressed this challenge by creating the CARRY tables, which precompute the necessary adjustments. This solution reflects the limitations of the Apple II's hardware. With no dedicated graphics processor, all pixel manipulation had to be done in software. Mechner's approach minimized the computational overhead, allowing the game to maintain its smooth animations and responsive controls. The CARRY tables are a key part of Prince of Persia's graphics engine, enabling the detailed and fluid animations that define the game. This technique influenced other developers working on similar systems, showcasing the importance of precomputed data in overcoming hardware constraints."
  - id: "mirror-byte-reversal"
    line_start: 207
    line_end: 224
    title: "Mirroring Pixels for Symmetry"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mirroring_(graphics)"
    image_url: ""
    image_caption: ""
    content: "The MIRROR table provides precomputed values for reversing the order of bits in a byte, effectively mirroring pixel data. This is used to create symmetrical graphics, such as flipping sprites horizontally. In the era of the Apple II, memory and processing power were limited, making it impractical to store separate graphics for mirrored versions of sprites. Instead, developers often used bit manipulation to achieve the same effect. Jordan Mechner's MIRROR table is a prime example of this approach, precomputing the reversed values to save time during gameplay. This technique was inspired by the need for efficiency in early game development. By precomputing mirrored values, Mechner reduced the computational load on the 6502 processor, allowing the game to run smoothly despite the hardware constraints. The MIRROR table highlights the ingenuity required to create complex graphics on simple systems. It remains a fascinating example of optimization, influencing similar techniques in later games and systems."
  - id: "masktab-graphics-masking"
    line_start: 226
    line_end: 253
    title: "Masking Bytes for Graphics Precision"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mask_(computing)"
    image_url: ""
    image_caption: ""
    content: "The MASKTAB table defines precomputed mask bytes used to isolate or modify specific bits in pixel data. This is essential for precise graphics manipulation, such as blending or overlaying sprites. Graphics masking was a common technique in the 1980s, used to handle transparency and layering in games. On the Apple II, this required careful management of memory and processing power. Jordan Mechner's MASKTAB table precomputes the necessary masks, reducing the computational load during gameplay. This approach reflects the constraints of the Apple II's hardware. With no dedicated graphics processor, all masking had to be done in software. Mechner's solution ensured that the game could handle complex graphics operations efficiently. The MASKTAB table is a key part of Prince of Persia's graphics engine, enabling the detailed and cinematic visuals that set the game apart. This technique influenced other developers working on similar systems, showcasing the importance of precomputed data in overcoming hardware limitations."
  - id: "shift-carry-addressing"
    line_start: 255
    line_end: 277
    title: "Dynamic Addressing for Shift and Carry Tables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Pointer_(computer_programming)"
    image_url: ""
    image_caption: ""
    content: "The SHIFTL, SHIFTH, CARRYL, and CARRYH tables provide dynamic addressing for the shift and carry tables. By storing offsets to these tables, the program can access the appropriate data based on the current bit offset. In the late 1980s, pointer-based addressing was a common technique for managing data in constrained systems. On the Apple II, this allowed developers to handle complex graphics operations efficiently. Jordan Mechner's use of dynamic addressing reflects his deep understanding of the system's capabilities and limitations. This technique was inspired by the need for flexibility in early game development. By storing offsets instead of direct values, Mechner reduced the memory footprint of the program, leaving more room for graphics and gameplay logic. The SHIFTL, SHIFTH, CARRYL, and CARRYH tables are a key part of Prince of Persia's graphics engine, enabling the detailed and fluid animations that define the game. This approach influenced other developers working on similar systems, showcasing the importance of dynamic addressing in overcoming hardware constraints."
  - id: "amasks-bmasks-bit-offset-masks"
    line_start: 296
    line_end: 319
    title: "Bit Offset Masks for Graphics Manipulation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bitwise_operation"
    image_url: ""
    image_caption: ""
    content: "The AMASKS and BMASKS tables define masks for specific bit offsets, used to manipulate pixel data with precision. These masks are essential for operations like blending, transparency, and layering in graphics. In the era of the Apple II, bitwise operations were a cornerstone of graphics programming. With limited memory and processing power, developers had to rely on clever techniques to achieve complex visuals. Jordan Mechner's AMASKS and BMASKS tables reflect this ingenuity, precomputing the necessary masks to save time during gameplay. This approach was inspired by the constraints of early game development. By precomputing masks, Mechner reduced the computational load on the 6502 processor, allowing the game to run smoothly despite the hardware limitations. The AMASKS and BMASKS tables are a key part of Prince of Persia's graphics engine, enabling the detailed and cinematic visuals that set the game apart. This technique influenced other developers working on similar systems, showcasing the importance of precomputed data in overcoming hardware constraints."
  - id: "opcode-self-modifying-code"
    line_start: 321
    line_end: 331
    title: "Self-Modifying Code for Graphics Operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Self-modifying_code"
    image_url: ""
    image_caption: ""
    content: "The OPCODE table defines opcodes for self-modifying code, allowing the program to dynamically adjust its behavior based on the current graphics operation. This technique is used to optimize performance and flexibility in the game's graphics engine. Self-modifying code was a controversial but effective technique in the 1980s, used to overcome the limitations of constrained systems like the Apple II. By dynamically changing the program's instructions, developers could achieve complex operations without wasting memory or processing power. Jordan Mechner's use of this technique reflects his deep understanding of the system's capabilities and limitations. This approach was inspired by the need for efficiency in early game development. By using self-modifying code, Mechner reduced the overhead of handling graphics operations, allowing the game to maintain its smooth animations and responsive controls. The OPCODE table is a key part of Prince of Persia's graphics engine, enabling the detailed and cinematic visuals that define the game. This technique influenced other developers working on similar systems, showcasing the importance of innovation in overcoming hardware constraints."

---

* hires tables
org = $e000
 tr on
 lst off
*-------------------------------
 org org
*-------------------------------
*
* YLO/YHI
*
* Index: Screen Y-coord (0-191, 0 = top)
* Returns base address on hires page 1 (add $2000 for page 2)
*
*-------------------------------

YLO hex 00000000000000008080808080808080
 hex 00000000000000008080808080808080
 hex 00000000000000008080808080808080
 hex 00000000000000008080808080808080

 hex 2828282828282828A8A8A8A8A8A8A8A8
 hex 2828282828282828A8A8A8A8A8A8A8A8
 hex 2828282828282828A8A8A8A8A8A8A8A8
 hex 2828282828282828A8A8A8A8A8A8A8A8

 hex 5050505050505050D0D0D0D0D0D0D0D0
 hex 5050505050505050D0D0D0D0D0D0D0D0
 hex 5050505050505050D0D0D0D0D0D0D0D0
 hex 5050505050505050D0D0D0D0D0D0D0D0

YHI hex 2024282C3034383C2024282C3034383C
 hex 2125292D3135393D2125292D3135393D
 hex 22262A2E32363A3E22262A2E32363A3E
 hex 23272B2F33373B3F23272B2F33373B3F

 hex 2024282C3034383C2024282C3034383C
 hex 2125292D3135393D2125292D3135393D
 hex 22262A2E32363A3E22262A2E32363A3E
 hex 23272B2F33373B3F23272B2F33373B3F

 hex 2024282C3034383C2024282C3034383C
 hex 2125292D3135393D2125292D3135393D
 hex 22262A2E32363A3E22262A2E32363A3E
 hex 23272B2F33373B3F23272B2F33373B3F

*-------------------------------
*
* SHIFTn/CARRYn
*
* n = # of pixels to shift right (0-6)
* Index: byte value w/hibit clr (0-127)
*
* SHIFT returns shifted byte w/hibit set
* CARRY returns carryover to next byte w/hibit clr
*
*-------------------------------

SHIFT0 hex 808182838485868788898A8B8C8D8E8F
 hex 909192939495969798999A9B9C9D9E9F
 hex A0A1A2A3A4A5A6A7A8A9AAABACADAEAF
 hex B0B1B2B3B4B5B6B7B8B9BABBBCBDBEBF

 hex C0C1C2C3C4C5C6C7C8C9CACBCCCDCECF
 hex D0D1D2D3D4D5D6D7D8D9DADBDCDDDEDF
 hex E0E1E2E3E4E5E6E7E8E9EAEBECEDEEEF
 hex F0F1F2F3F4F5F6F7F8F9FAFBFCFDFEFF

SHIFT1 hex 80828486888A8C8E90929496989A9C9E
 hex A0A2A4A6A8AAACAEB0B2B4B6B8BABCBE
 hex C0C2C4C6C8CACCCED0D2D4D6D8DADCDE
 hex E0E2E4E6E8EAECEEF0F2F4F6F8FAFCFE

 hex 80828486888A8C8E90929496989A9C9E
 hex A0A2A4A6A8AAACAEB0B2B4B6B8BABCBE
 hex C0C2C4C6C8CACCCED0D2D4D6D8DADCDE
 hex E0E2E4E6E8EAECEEF0F2F4F6F8FAFCFE

SHIFT2 hex 8084888C9094989CA0A4A8ACB0B4B8BC
 hex C0C4C8CCD0D4D8DCE0E4E8ECF0F4F8FC
 hex 8084888C9094989CA0A4A8ACB0B4B8BC
 hex C0C4C8CCD0D4D8DCE0E4E8ECF0F4F8FC

 hex 8084888C9094989CA0A4A8ACB0B4B8BC
 hex C0C4C8CCD0D4D8DCE0E4E8ECF0F4F8FC
 hex 8084888C9094989CA0A4A8ACB0B4B8BC
 hex C0C4C8CCD0D4D8DCE0E4E8ECF0F4F8FC

SHIFT3 hex 80889098A0A8B0B8C0C8D0D8E0E8F0F8
 hex 80889098A0A8B0B8C0C8D0D8E0E8F0F8
 hex 80889098A0A8B0B8C0C8D0D8E0E8F0F8
 hex 80889098A0A8B0B8C0C8D0D8E0E8F0F8

 hex 80889098A0A8B0B8C0C8D0D8E0E8F0F8
 hex 80889098A0A8B0B8C0C8D0D8E0E8F0F8
 hex 80889098A0A8B0B8C0C8D0D8E0E8F0F8
 hex 80889098A0A8B0B8C0C8D0D8E0E8F0F8

SHIFT4 hex 8090A0B0C0D0E0F08090A0B0C0D0E0F0
 hex 8090A0B0C0D0E0F08090A0B0C0D0E0F0
 hex 8090A0B0C0D0E0F08090A0B0C0D0E0F0
 hex 8090A0B0C0D0E0F08090A0B0C0D0E0F0

 hex 8090A0B0C0D0E0F08090A0B0C0D0E0F0
 hex 8090A0B0C0D0E0F08090A0B0C0D0E0F0
 hex 8090A0B0C0D0E0F08090A0B0C0D0E0F0
 hex 8090A0B0C0D0E0F08090A0B0C0D0E0F0

SHIFT5 hex 80A0C0E080A0C0E080A0C0E080A0C0E0
 hex 80A0C0E080A0C0E080A0C0E080A0C0E0
 hex 80A0C0E080A0C0E080A0C0E080A0C0E0
 hex 80A0C0E080A0C0E080A0C0E080A0C0E0

 hex 80A0C0E080A0C0E080A0C0E080A0C0E0
 hex 80A0C0E080A0C0E080A0C0E080A0C0E0
 hex 80A0C0E080A0C0E080A0C0E080A0C0E0
 hex 80A0C0E080A0C0E080A0C0E080A0C0E0

SHIFT6 hex 80C080C080C080C080C080C080C080C0
 hex 80C080C080C080C080C080C080C080C0
 hex 80C080C080C080C080C080C080C080C0
 hex 80C080C080C080C080C080C080C080C0

 hex 80C080C080C080C080C080C080C080C0
 hex 80C080C080C080C080C080C080C080C0
 hex 80C080C080C080C080C080C080C080C0
 hex 80C080C080C080C080C080C080C080C0

CARRY0 hex 00000000000000000000000000000000
 hex 00000000000000000000000000000000
 hex 00000000000000000000000000000000
 hex 00000000000000000000000000000000

 hex 00000000000000000000000000000000
 hex 00000000000000000000000000000000
 hex 00000000000000000000000000000000
 hex 00000000000000000000000000000000

CARRY1 hex 00000000000000000000000000000000
 hex 00000000000000000000000000000000
 hex 00000000000000000000000000000000
 hex 00000000000000000000000000000000

 hex 01010101010101010101010101010101
 hex 01010101010101010101010101010101
 hex 01010101010101010101010101010101
 hex 01010101010101010101010101010101

CARRY2 hex 00000000000000000000000000000000
 hex 00000000000000000000000000000000
 hex 01010101010101010101010101010101
 hex 01010101010101010101010101010101

 hex 02020202020202020202020202020202
 hex 02020202020202020202020202020202
 hex 03030303030303030303030303030303
 hex 03030303030303030303030303030303

CARRY3 hex 00000000000000000000000000000000
 hex 01010101010101010101010101010101
 hex 02020202020202020202020202020202
 hex 03030303030303030303030303030303

 hex 04040404040404040404040404040404
 hex 05050505050505050505050505050505
 hex 06060606060606060606060606060606
 hex 07070707070707070707070707070707

CARRY4 hex 00000000000000000101010101010101
 hex 02020202020202020303030303030303
 hex 04040404040404040505050505050505
 hex 06060606060606060707070707070707

 hex 08080808080808080909090909090909
 hex 0A0A0A0A0A0A0A0A0B0B0B0B0B0B0B0B
 hex 0C0C0C0C0C0C0C0C0D0D0D0D0D0D0D0D
 hex 0E0E0E0E0E0E0E0E0F0F0F0F0F0F0F0F

CARRY5 hex 00000000010101010202020203030303
 hex 04040404050505050606060607070707
 hex 08080808090909090A0A0A0A0B0B0B0B
 hex 0C0C0C0C0D0D0D0D0E0E0E0E0F0F0F0F

 hex 10101010111111111212121213131313
 hex 14141414151515151616161617171717
 hex 18181818191919191A1A1A1A1B1B1B1B
 hex 1C1C1C1C1D1D1D1D1E1E1E1E1F1F1F1F

CARRY6 hex 00000101020203030404050506060707
 hex 080809090A0A0B0B0C0C0D0D0E0E0F0F
 hex 10101111121213131414151516161717
 hex 181819191A1A1B1B1C1C1D1D1E1E1F1F

 hex 20202121222223232424252526262727
 hex 282829292A2A2B2B2C2C2D2D2E2E2F2F
 hex 30303131323233333434353536363737
 hex 383839393A3A3B3B3C3C3D3D3E3E3F3F

*-------------------------------
*
* MIRROR
*
* Index: byte value w/hibit clr (0-127)
* Returns mirrored byte w/hibit set
*
*-------------------------------

MIRROR hex 80C0A0E090D0B0F088C8A8E898D8B8F8
 hex 84C4A4E494D4B4F48CCCACEC9CDCBCFC
 hex 82C2A2E292D2B2F28ACAAAEA9ADABAFA
 hex 86C6A6E696D6B6F68ECEAEEE9EDEBEFE

 hex 81C1A1E191D1B1F189C9A9E999D9B9F9
 hex 85C5A5E595D5B5F58DCDADED9DDDBDFD
 hex 83C3A3E393D3B3F38BCBABEB9BDBBBFB
 hex 87C7A7E797D7B7F78FCFAFEF9FDFBFFF

*-------------------------------
*
* MASKTAB
*
* Index: byte value w/hibit clr (0-127)
* Returns mask byte w/hibit set
*
*-------------------------------

MASKTAB HEX FF,FC,F8,F8,F1,F0,F0,F0
 HEX E3,E0,E0,E0,E1,E0,E0,E0
 HEX C7,C4,C0,C0,C1,C0,C0,C0
 HEX C3,C0,C0,C0,C1,C0,C0,C0

 HEX 8F,8C,88,88,81,80,80,80
 HEX 83,80,80,80,81,80,80,80
 HEX 87,84,80,80,81,80,80,80
 HEX 83,80,80,80,81,80,80,80

 HEX 9F,9C,98,98,91,90,90,90
 HEX 83,80,80,80,81,80,80,80
 HEX 87,84,80,80,81,80,80,80
 HEX 83,80,80,80,81,80,80,80

 HEX 8F,8C,88,88,81,80,80,80
 HEX 83,80,80,80,81,80,80,80
 HEX 87,84,80,80,81,80,80,80
 HEX 83,80,80,80,81,80,80,80

*-------------------------------
*
* SHIFTL-H/CARRYL-H
*
* Index: Bit offset (0-6)
* Returns address of corresponding shift/carry table
*
*-------------------------------

SHIFTL dfb #SHIFT0-$80
 dfb #SHIFT1-$80
 dfb #SHIFT2-$80
 dfb #SHIFT3-$80
 dfb #SHIFT4-$80
 dfb #SHIFT5-$80
 dfb #SHIFT6-$80

SHIFTH dfb >SHIFT0-$80
 dfb >SHIFT1-$80
 dfb >SHIFT2-$80
 dfb >SHIFT3-$80
 dfb >SHIFT4-$80
 dfb >SHIFT5-$80
 dfb >SHIFT6-$80

CARRYL dfb #CARRY0-$80
 dfb #CARRY1-$80
 dfb #CARRY2-$80
 dfb #CARRY3-$80
 dfb #CARRY4-$80
 dfb #CARRY5-$80
 dfb #CARRY6-$80

CARRYH dfb >CARRY0-$80
 dfb >CARRY1-$80
 dfb >CARRY2-$80
 dfb >CARRY3-$80
 dfb >CARRY4-$80
 dfb >CARRY5-$80
 dfb >CARRY6-$80

*-------------------------------
*
* AMASKS/BMASKS
*
* Index: Bit offset (0-6)
* Returns appropriate mask bytes
*
*-------------------------------

AMASKS dfb %10000000
 dfb %10000001
 dfb %10000011
 dfb %10000111
 dfb %10001111
 dfb %10011111
 dfb %10111111

BMASKS dfb %11111111
 dfb %11111110
 dfb %11111100
 dfb %11111000
 dfb %11110000
 dfb %11100000
 dfb %11000000

*-------------------------------
*
* OPCODE
*
* Index: OPACITY (0-5)
* Returns opcode to put in self-mod code
*
*-------------------------------

OPCODE dfb $31 ;and (oper),Y
 dfb $11 ;ora
 dfb $91 ;sta
 dfb $51 ;eor
 dfb $31 ;and
 dfb $91 ;sta

*-------------------------------
 lst
 usr $a9,2,$0000,*-org
 lst off