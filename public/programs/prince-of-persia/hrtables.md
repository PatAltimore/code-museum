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
description: "This file defines essential lookup tables and constants for graphical manipulation in Prince of Persia (1989), enabling the game's cinematic animations on the Apple II."

summary:
  - point: "Defines Y-coordinate to memory address mapping for Apple II's high-resolution graphics mode"
    link: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    link_label: "Apple II Graphics"
  - point: "Includes pixel-shifting and carryover tables for efficient sprite manipulation"
    link: "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"
    link_label: "Sprite Manipulation"
  - point: "Implements bitmask tables for graphical operations like opacity and masking"
    link: "https://en.wikipedia.org/wiki/Bitwise_operation"
    link_label: "Bitwise Operations"
  - point: "Uses self-modifying code for dynamic opcode generation"
    link: "https://en.wikipedia.org/wiki/Self-modifying_code"
    link_label: "Self-Modifying Code"
  - point: "Optimized for Apple II's 128K memory constraints and bank-switching"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"

enhancements:
  - id: "ylo-yhi-hires-address-mapping"
    line_start: 16
    line_end: 44
    title: "Mapping Screen Y-coordinates to Memory Addresses"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Binary_num_bitwise_OR.png/330px-Binary_num_bitwise_OR.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Picture shows two binary numbers as inputs and a third binary number which is a result of a bitwise OR operation on the inputs (CC0)"
    content: "This section defines the `YLO` and `YHI` tables, which map screen Y-coordinates (0–191) to memory addresses in the Apple II's high-resolution graphics mode. The Apple II's graphics system divides the screen into pages, and these tables provide the base address for each Y-coordinate on page 1, with an offset for page 2. In 1989, Jordan Mechner was working within the constraints of the Apple II's memory architecture, which required careful planning to fit the game's cinematic visuals into the limited 128K memory. The tables are precomputed to avoid costly runtime calculations, a necessity given the 6502 processor's limited speed and lack of hardware multiplication. This approach reflects Mechner's meticulous optimization, ensuring smooth animations and gameplay. These tables were critical for rendering the game's fluid movements, derived from rotoscoped animations. The technique of mapping screen coordinates to memory addresses remains foundational in graphics programming, though modern systems automate much of this process."
  - id: "shift-carry-pixel-manipulation"
    line_start: 58
    line_end: 196
    title: "Efficient Pixel Shifting and Carryover Tables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `SHIFTn` and `CARRYn` tables enable precise pixel manipulation for sprites, allowing shifts of 0–6 pixels to the right. Each `SHIFT` table returns the shifted byte with the high bit set, while `CARRY` tables calculate the carryover to the next byte with the high bit cleared. This design is tailored to the Apple II's graphics mode, where pixels are packed into bytes, and shifting requires careful handling of carryover between adjacent bytes. In the late 1980s, sprite manipulation was a cornerstone of game development, and Mechner's approach demonstrates a deep understanding of the Apple II's hardware. By precomputing these tables, he avoided the performance hit of calculating shifts dynamically, a critical optimization given the 6502 processor's limited clock speed. These tables supported the game's signature smooth animations, a key feature that set Prince of Persia apart from other platformers of the era. The concept of precomputed tables for graphical operations persists in modern systems, though often implemented in hardware or higher-level APIs."
  - id: "mirror-byte-reflection"
    line_start: 207
    line_end: 215
    title: "Mirroring Bytes for Sprite Reflection"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `MIRROR` table provides precomputed values for mirroring bytes, enabling sprite reflection. Each entry takes a byte value with the high bit cleared and returns its mirrored counterpart with the high bit set. This functionality was essential for flipping sprites horizontally, a common requirement in platformers where characters or objects needed to face different directions. Mechner's use of precomputed tables reflects the constraints of the Apple II's 6502 processor, which lacked native support for bitwise reflection operations. By offloading this computation to lookup tables, he ensured that sprite reflection could be performed efficiently during gameplay. This technique highlights the ingenuity required to achieve advanced graphical effects on limited hardware. Sprite mirroring remains a fundamental operation in game development, though modern systems handle it with far greater ease."
  - id: "masktab-bitwise-masking"
    line_start: 226
    line_end: 244
    title: "Bitwise Masks for Graphical Operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bitwise_operation"
    image_url: ""
    image_caption: ""
    content: "The `MASKTAB` table defines bitwise masks for graphical operations, with each entry corresponding to a byte value. These masks are used to manipulate individual pixels or groups of pixels on the screen, enabling effects such as opacity and masking. In the context of Prince of Persia, these masks likely played a role in rendering sprites and handling transparency. Mechner's decision to precompute these masks reflects the limitations of the Apple II's hardware, where runtime calculations were costly and avoided whenever possible. The use of bitwise operations for graphical effects was a common technique in the 1980s, and this table exemplifies how developers optimized their code to achieve visually impressive results within tight constraints. Bitwise masking continues to be a critical tool in graphics programming, though modern systems often abstract these operations into higher-level APIs."
  - id: "opcode-self-modifying-code"
    line_start: 321
    line_end: 326
    title: "Dynamic Opcode Generation for Self-Modifying Code"
    wikipedia_url: "https://en.wikipedia.org/wiki/Self-modifying_code"
    image_url: ""
    image_caption: ""
    content: "The `OPCODE` table defines opcodes for self-modifying code, with each entry corresponding to a specific graphical operation based on opacity levels. Self-modifying code was a daring and advanced technique, allowing programs to alter their own instructions during runtime. In Prince of Persia, this approach enabled dynamic adjustments to graphical rendering, such as blending sprites with varying levels of opacity. Mechner's use of self-modifying code reflects his deep understanding of the Apple II's architecture and his willingness to push the boundaries of what the hardware could achieve. While self-modifying code is rarely used in modern programming due to its complexity and potential for errors, it was a powerful tool for squeezing maximum performance out of limited systems. This section showcases Mechner's ingenuity and the lengths he went to create a visually stunning game on the Apple II."

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