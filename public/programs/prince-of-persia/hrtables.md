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
description: "This file contains lookup tables and routines critical to the graphical rendering of Prince of Persia on the Apple II, showcasing the ingenuity required to achieve cinematic visuals in 6502 assembly."

summary:
  - point: "Uses lookup tables for efficient pixel manipulation"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup Table"
  - point: "Optimized for Apple II's 128K memory constraints"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II"
  - point: "Supports rotoscoped animation techniques"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"

enhancements:
  - id: "ylo-yhi-coordinate-mapping"
    line_start: 7
    line_end: 44
    title: "How Screen Coordinates Map to Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "The YLO and YHI tables map screen Y-coordinates (0–191) to base memory addresses on the Apple II's high-resolution graphics pages. YLO provides the low byte, while YHI provides the high byte of the address. This mapping is essential for rendering graphics efficiently, as it allows the program to calculate pixel positions without expensive arithmetic operations. At the time, the Apple II's graphics system was notoriously difficult to work with due to its non-linear memory layout, which required developers to account for gaps and irregularities in the address space. Jordan Mechner's approach here reflects a deep understanding of the Apple II hardware and a commitment to performance. These tables enabled the smooth scrolling and precise animations that defined Prince of Persia's groundbreaking visual style. Later games and engines borrowed similar techniques for efficient memory addressing, especially on constrained systems like the NES and Commodore 64."
  - id: "shift-carry-pixel-manipulation"
    line_start: 46
    line_end: 196
    title: "The Tables That Shift Pixels"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bitwise_operation"
    image_url: ""
    image_caption: ""
    content: "The SHIFTn and CARRYn tables handle pixel shifting, a critical operation for rendering sprites and animations. SHIFTn shifts a byte's pixels to the right by 'n' positions, while CARRYn calculates the carryover pixels that spill into the next byte. These tables are precomputed to avoid runtime calculations, saving precious CPU cycles on the Apple II's 1 MHz 6502 processor. The need for such optimization arose from the hardware's limitations: the Apple II lacked dedicated graphics hardware, so all rendering had to be done in software. Mechner's use of lookup tables for pixel manipulation was innovative and allowed for the fluid animations that made Prince of Persia stand out. This technique influenced later developers working on similarly constrained systems, and the concept of precomputed tables remains a staple in graphics programming today."
  - id: "mirror-byte-reflection"
    line_start: 198
    line_end: 215
    title: "Mirroring Bytes for Sprite Symmetry"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The MIRROR table reflects a byte's bits horizontally, effectively flipping a sprite. This operation is crucial for rendering symmetrical animations, such as the Prince's movements when facing left versus right. By precomputing these mirrored values, the game avoids the need for complex bitwise operations during runtime. This approach was particularly important on the Apple II, where CPU resources were scarce. Mechner's decision to include a dedicated MIRROR table reflects his focus on performance and visual fidelity. The technique of precomputing mirrored sprites became common in later games, especially on systems like the NES and Sega Genesis, where developers faced similar constraints."
  - id: "masktab-bit-masking"
    line_start: 217
    line_end: 244
    title: "Masks for Precise Pixel Control"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bit_mask"
    image_url: ""
    image_caption: ""
    content: "The MASKTAB table provides precomputed bit masks for manipulating individual pixels within a byte. Each mask corresponds to a specific bit offset, enabling precise control over which pixels are affected during rendering operations. This is particularly useful for tasks like sprite transparency and collision detection. On the Apple II, where graphics operations had to be performed manually in software, such masks were indispensable. Mechner's use of MASKTAB demonstrates his attention to detail and his ability to extract maximum performance from limited hardware. The concept of bit masking remains fundamental in graphics programming, and similar tables can be found in the rendering systems of many early consoles and computers."
  - id: "shift-carry-addressing"
    line_start: 246
    line_end: 294
    title: "Dynamic Addressing for Shift and Carry Tables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The SHIFTL, SHIFTH, CARRYL, and CARRYH tables provide dynamic addressing for the SHIFTn and CARRYn tables. By indexing these tables with a bit offset, the program can quickly locate the appropriate shift or carry table for a given operation. This design minimizes the overhead of table lookups and streamlines the rendering process. On the Apple II, where memory and CPU cycles were at a premium, such optimizations were critical. Mechner's approach here reflects his deep understanding of the hardware and his ability to design systems that balance flexibility with performance. This dynamic addressing technique influenced later graphics engines, where similar methods were used to manage texture and sprite data efficiently."
  - id: "opacity-opcode-self-modifying-code"
    line_start: 312
    line_end: 329
    title: "Self-Modifying Code for Opacity Effects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Self-modifying_code"
    image_url: ""
    image_caption: ""
    content: "The OPCODE table provides opcodes for self-modifying code, enabling dynamic changes to rendering behavior based on sprite opacity. Each entry corresponds to a specific operation, such as AND or ORA, which is inserted into the code at runtime. This technique allows the game to adjust sprite blending and transparency effects without branching or conditional logic, saving CPU cycles. Self-modifying code was a common optimization on systems like the Apple II, where performance constraints often outweighed concerns about code maintainability. Mechner's use of this technique highlights his ingenuity in overcoming hardware limitations to achieve cinematic visuals. While self-modifying code fell out of favor in later years due to its complexity and security risks, it remains an important part of programming history, especially in the context of early game development."

---

```asm
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
```
