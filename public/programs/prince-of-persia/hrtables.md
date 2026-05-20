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
description: "This file defines lookup tables and routines for manipulating graphics data on the Apple II, enabling the cinematic animation style of Prince of Persia."

summary:
  - point: "Uses precomputed tables for efficient graphics manipulation"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup Table"
  - point: "Optimized for Apple II's 6502 assembly and memory constraints"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II Series"
  - point: "Supports rotoscoped animation by enabling pixel shifts and mirroring"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Bank-switched memory techniques to fit within 128KB"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Influenced later cinematic platformers and animation techniques"
    link: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    link_label: "Cinematic Platformer"

enhancements:
  - id: "ylo-yhi-lookup-tables"
    line_start: 16
    line_end: 56
    title: "How Screen Coordinates Map to Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "The YLO and YHI tables define mappings from screen Y-coordinates (0–191) to memory addresses on the Apple II's high-resolution graphics pages. Each entry in YLO and YHI corresponds to a base address in memory, allowing the program to quickly calculate where a specific row of pixels resides. This is crucial for the Apple II's graphics system, which uses a non-linear memory layout due to its hardware constraints. In the mid-1980s, the Apple II was one of the most popular home computers, but its graphics capabilities were limited. Programmers had to work around the machine's peculiar memory layout for high-resolution graphics, which split the screen into \"pages\" and required careful calculations to locate pixel data. Jordan Mechner leveraged lookup tables like YLO and YHI to simplify these calculations, ensuring that his game could access and manipulate graphics data efficiently. This approach was not unique to Prince of Persia but was a common technique among Apple II developers. However, Mechner's implementation stands out for its role in supporting the game's smooth, cinematic animations. The efficiency of these tables allowed the game to perform complex graphical operations in real-time, contributing to its groundbreaking visual style. Later games and systems adopted similar techniques for optimizing graphics access, particularly in environments with constrained hardware capabilities."
  - id: "shift-carry-tables"
    line_start: 46
    line_end: 205
    title: "Pixel Shifting Without a Graphics Coprocessor"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bitwise_operation"
    image_url: ""
    image_caption: ""
    content: "The SHIFTn and CARRYn tables precompute values for shifting pixel data right by 0–6 bits. SHIFTn returns the shifted byte with the high bit set, while CARRYn calculates the carryover to the next byte. These tables are essential for manipulating graphics data on the Apple II, which lacks hardware support for such operations. In the 1980s, hardware constraints forced programmers to find clever ways to perform operations that modern systems handle with dedicated hardware. The Apple II's 6502 CPU had no built-in graphics coprocessor, so pixel manipulation had to be done entirely in software. By precomputing these values in lookup tables, Mechner avoided the performance hit of calculating shifts and carries dynamically, enabling faster graphics rendering. This technique was critical for Prince of Persia's smooth animations, particularly the rotoscoped movements of the protagonist. The game's ability to shift and carry pixel data efficiently contributed to its fluid visual style, which set it apart from other games of the era. The use of precomputed tables for graphics manipulation influenced later developers working on constrained systems, including early console games and handheld devices."
  - id: "mirror-table"
    line_start: 207
    line_end: 224
    title: "Mirroring Pixels for Symmetry"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mirroring_(graphics)"
    image_url: ""
    image_caption: ""
    content: "The MIRROR table precomputes mirrored values for byte-sized pixel data. Given a byte with the high bit cleared, the table returns its mirrored counterpart with the high bit set. This is used to flip graphics horizontally, a common operation in platformers for rendering characters facing left or right. Horizontal mirroring was a common requirement for games in the 1980s, especially platformers where characters often needed to face both directions. On the Apple II, performing this operation dynamically would have been computationally expensive, so Mechner precomputed the mirrored values in a lookup table. This allowed the game to flip sprites instantly, maintaining its smooth animation and responsiveness. The MIRROR table's efficiency contributed to Prince of Persia's ability to render complex animations without sacrificing performance. This technique became standard practice in game development, influencing sprite manipulation in later games and systems. Developers on early consoles like the NES and Sega Genesis often used similar approaches to optimize graphics rendering."
  - id: "masktab-bitwise-masks"
    line_start: 217
    line_end: 253
    title: "Masks for Precision Pixel Manipulation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bit_mask"
    image_url: ""
    image_caption: ""
    content: "The MASKTAB table provides precomputed bitwise masks for manipulating pixel data. Each entry corresponds to a specific byte value, enabling precise control over which bits are affected during graphics operations. The masks are used to isolate or modify specific pixels within a byte, a crucial capability for rendering detailed animations. Bitwise masking was a common technique for graphics manipulation on systems like the Apple II, where memory and processing power were limited. By precomputing these masks, Mechner ensured that his game could perform complex graphical operations efficiently. This was particularly important for Prince of Persia's detailed animations, which required precise control over individual pixels. The use of bitwise masks influenced later game development, particularly on systems with constrained hardware. Techniques like this were used extensively in early console games, where developers had to optimize every aspect of graphics rendering to achieve smooth performance."
  - id: "shift-carry-address-tables"
    line_start: 255
    line_end: 294
    title: "Addressing Tables for Shifts and Carries"
    wikipedia_url: "https://en.wikipedia.org/wiki/Pointer_(computer_programming)"
    image_url: ""
    image_caption: ""
    content: "The SHIFTL, SHIFTH, CARRYL, and CARRYH tables provide addresses for the corresponding SHIFTn and CARRYn tables based on bit offsets. These tables act as pointers, allowing the program to quickly locate the correct precomputed values for pixel shifts and carries. Pointer tables like these were a common optimization technique in assembly programming, where direct addressing was often faster than calculating addresses dynamically. On the Apple II, this approach was particularly valuable due to the system's limited processing power and memory. By organizing the SHIFTn and CARRYn tables in this way, Mechner streamlined the game's graphics operations, ensuring that pixel manipulation could be performed efficiently. This technique influenced later developers working on constrained systems, where pointer tables were used to optimize various operations. The concept of precomputed addressing remains relevant today, particularly in performance-critical applications like graphics rendering and game engines."
  - id: "amasks-bmasks-bit-offset-masks"
    line_start: 287
    line_end: 319
    title: "Masks for Bit Offset Calculations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bitwise_operation"
    image_url: ""
    image_caption: ""
    content: "The AMASKS and BMASKS tables define masks for bit offset calculations, enabling precise manipulation of pixel data. AMASKS provides masks for setting bits, while BMASKS provides masks for clearing bits. These tables are indexed by bit offsets (0–6), making them essential for rendering graphics on the Apple II. In the 1980s, graphics programming often required low-level manipulation of pixel data. The Apple II's high-resolution graphics mode presented unique challenges due to its memory layout and lack of hardware support for advanced operations. By precomputing these masks, Mechner ensured that his game could perform bit-level operations efficiently, supporting the detailed animations that defined Prince of Persia. The use of precomputed masks for bit offset calculations influenced later game development, particularly on systems with constrained hardware. Similar techniques were used in early console games and handheld devices, where developers had to optimize every aspect of graphics rendering to achieve smooth performance."
  - id: "opcode-self-modifying-code"
    line_start: 321
    line_end: 331
    title: "Self-Modifying Code for Graphics Operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Self-modifying_code"
    image_url: ""
    image_caption: ""
    content: "The OPCODE table defines opcodes for self-modifying code used in graphics operations. Each entry corresponds to a specific level of opacity, allowing the program to dynamically modify its behavior based on graphical requirements. Self-modifying code was a powerful technique for optimizing performance on systems like the Apple II. In the 1980s, self-modifying code was often used to overcome hardware limitations. By changing instructions at runtime, programmers could tailor their code to specific conditions, reducing the need for branching and improving execution speed. Mechner used this technique to optimize graphics rendering in Prince of Persia, ensuring that the game could handle complex animations without sacrificing performance. The use of self-modifying code in graphics operations influenced later developers working on constrained systems. While the technique fell out of favor due to its complexity and potential for bugs, it remains an important part of programming history, showcasing the ingenuity of early game developers."

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