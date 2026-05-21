---
title: "HIRES.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/HIRES.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/HIRES.S"
year: 1989
author: "Jordan Mechner"
slug: "hires"
order: 9
description: "The HIRES.S file from Prince of Persia (1989) defines the graphics routines for rendering the game's cinematic animations on the Apple IIe/IIc, a groundbreaking achievement in assembly programming."

summary:
  - point: "Bank-switched memory management to fit 128K constraints"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Rotoscoping animation technique traced into assembly routines"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Optimized graphics routines for Apple II hi-res mode"
    link: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    link_label: "Apple II Graphics"
  - point: "Innovative edge-clipping and bit-shifting algorithms"
    link: "https://en.wikipedia.org/wiki/Bitwise_operations"
    link_label: "Bitwise Operations"
  - point: "Influenced future cinematic platformers and animation techniques"
    link: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    link_label: "Cinematic Platformer"

enhancements:
  - id: "ztemp-local-variable-allocation"
    line_start: 43
    line_end: 80
    title: "Why Allocate Variables at $F0 and $18?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zero_page"
    image_url: ""
    image_caption: ""
    content: "This section defines local variables in two distinct memory areas: $F0 and $18. These addresses are part of the Apple II's zero-page memory, which allows faster access due to shorter instruction lengths. By allocating variables here, Mechner optimized the game's performance, ensuring critical operations like screen rendering and animation updates could execute quickly. In the 1980s, zero-page memory was a precious resource, often reserved for high-frequency tasks. Mechner's careful allocation reflects his deep understanding of the Apple II hardware and the constraints of 6502 assembly programming. This technique influenced later developers working on constrained systems, emphasizing the importance of efficient memory use in performance-critical applications."
  - id: "cls-clear-hires-screen"
    line_start: 82
    line_end: 91
    title: "Clearing the Hi-Res Screen in Two Steps"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "The `cls` subroutine clears the high-resolution screen by switching to main memory, calling the `CLS` routine, and returning to auxiliary memory. This dual-memory approach is necessary because the Apple IIe/IIc uses bank-switched memory to manage its limited 128K RAM. The `CLS` routine itself writes black pixels across the entire screen, ensuring a clean slate for rendering. This method reflects the hardware constraints of the era, where direct memory manipulation was the only way to achieve graphical effects. Mechner's approach was later studied by developers working on other bank-switched systems, influencing techniques for managing graphical buffers in constrained environments."
  - id: "lay-general-image-rendering"
    line_start: 93
    line_end: 95
    title: "Laying Down Images with Precision"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_rendering"
    image_url: ""
    image_caption: ""
    content: "The `lay` subroutine is a general-purpose routine for rendering images on the hi-res screen. It switches to main memory, calls the `LAY` routine, and returns to auxiliary memory. This modular design allows for flexible image rendering, including edge-clipping, bit-shifting, and mirroring. Mechner's choice to separate rendering logic into distinct routines demonstrates a clear understanding of the complexity involved in cinematic animation. This modularity influenced later game engines, where separating rendering logic became standard practice for handling diverse graphical effects efficiently."
  - id: "auxmem-bank-switching"
    line_start: 144
    line_end: 147
    title: "The Trick That Made 128K Work"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bank_switching"
    image_url: ""
    image_caption: ""
    content: "The `auxmem` and `mainmem` routines manage the Apple II's bank-switched memory, toggling between auxiliary and main memory banks. This technique was essential for fitting Prince of Persia's complex animations and logic into the Apple II's limited 128K RAM. By carefully controlling memory access, Mechner ensured the game could handle high-resolution graphics and smooth animations without exceeding hardware limits. Bank switching was a common technique for Apple II developers, but Mechner's implementation stands out for its efficiency and reliability. This approach influenced memory management techniques in later systems, including early PC games and embedded devices."
  - id: "cls-hires-clear-routine"
    line_start: 153
    line_end: 240
    title: "Clearing Hi-Res Graphics with Assembly Loops"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "The `CLS` routine clears the hi-res screen by writing black pixels across two memory pages. Using nested loops, it iterates through each byte of the screen memory, ensuring every pixel is set to black. This routine is optimized for the Apple II's graphics architecture, which divides the screen into two memory pages. Mechner's use of assembly loops reflects the constraints of 6502 programming, where every instruction had to be carefully chosen for speed and efficiency. This routine became a template for similar screen-clearing operations in other games and applications, demonstrating the enduring influence of Mechner's techniques."
  - id: "crop-image-clipping"
    line_start: 352
    line_end: 516
    title: "The Algorithm That Handles Offscreen Images"
    wikipedia_url: "https://en.wikipedia.org/wiki/Clipping_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `CROP` routine calculates the visible portion of an image based on screen boundaries and image dimensions. It adjusts the image's coordinates and dimensions to ensure only the visible part is rendered. This routine is critical for handling edge cases where images extend beyond the screen's edges, a common scenario in cinematic platformers. Mechner's implementation uses precise arithmetic and conditional branching to optimize performance. This clipping algorithm influenced later graphics engines, where efficient edge handling became essential for rendering complex scenes without wasting resources."
  - id: "layrsave-background-preservation"
    line_start: 527
    line_end: 639
    title: "Saving Backgrounds for Smooth Animation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The `LAYRSAVE` routine preserves the background behind animated characters by saving it to a peel buffer. This technique allows the game to restore the original background after an animation frame is rendered, ensuring smooth transitions between frames. Mechner's use of a peel buffer reflects his commitment to creating cinematic animations on hardware with limited graphical capabilities. This approach is an early example of double buffering, a technique that became standard in modern graphics programming to reduce flickering and improve visual quality."
  - id: "lay-general-image-rendering-2"
    line_start: 641
    line_end: 680
    title: "The Subroutine That Handles Mirroring"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mirroring_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `LAY` routine is a general-purpose image rendering subroutine that handles edge-clipping, bit-shifting, and mirroring. It calls specialized routines (`LayGen`, `LayMask`, `LayXOR`) based on the image's opacity and mirroring settings. This modular design allows for flexible rendering, accommodating the diverse graphical effects required for Prince of Persia's cinematic animations. Mechner's implementation of mirroring was particularly innovative, enabling the game to reuse animations for characters facing opposite directions without duplicating data. This technique influenced later games, where mirroring became a common optimization for reducing memory usage."
  - id: "layxor-graphics-xor-rendering"
    line_start: 1000
    line_end: 1170
    title: "How XOR Made Graphics Fast and Flexible"
    wikipedia_url: "https://en.wikipedia.org/wiki/Exclusive_or"
    image_url: ""
    image_caption: ""
    content: "The `LayXOR` routine is responsible for rendering graphics using XOR operations, a clever technique that allowed for efficient manipulation of sprite data. XOR (exclusive OR) is used here to combine image data with the background, enabling effects like transparency and inversion without requiring additional memory or complex calculations. The routine carefully sets up memory addresses and uses lookup tables (`SHIFTL`, `SHIFTH`, `CARRYL`, `CARRYH`) to manage carry bits and offsets for pixel alignment. At the time, the Apple II's 6502 processor had limited computational power and memory, so techniques like XOR were essential for achieving dynamic visuals without slowing down gameplay. Mechner's use of XOR here reflects a deep understanding of the hardware's constraints. This approach influenced later games and graphics engines, as XOR became a standard method for sprite manipulation in early computer graphics, particularly in systems with limited resources."
  - id: "mlay-mirroring-graphics"
    line_start: 1172
    line_end: 1195
    title: "Mirroring Sprites: A Graphics Shortcut"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mirroring_(graphics)"
    image_url: ""
    image_caption: ""
    content: "The `MLAY` routine introduces mirroring, a technique used to flip sprites horizontally or vertically. This was particularly useful for animations where symmetrical movements (like running left versus right) could be achieved without duplicating sprite data. The routine checks the opacity mode and redirects to specialized subroutines (`MLayXOR`, `MLayMask`, or `MLayGen`) based on the rendering requirements. Mirroring saved memory and development time, as artists only needed to create one set of sprites. In the context of the Apple II, this was a critical optimization, given the constraints of 128KB of memory and the need to bank-switch between auxiliary and main memory. Mirroring techniques like this became common in 2D games, influencing titles on later platforms like the NES and Sega Genesis."
  - id: "mlaygen-general-rendering"
    line_start: 1197
    line_end: 1348
    title: "General Rendering: AND, OR, and Store"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bitwise_operation"
    image_url: ""
    image_caption: ""
    content: "The `MLayGen` routine handles general rendering operations, including AND, OR, and direct storage of sprite data. These bitwise operations allow for precise control over how sprite pixels interact with the background, enabling effects like masking and blending. The routine sets up memory pointers and uses lookup tables (`AMASKS`, `BMASKS`, `OPCODE`) to determine how each pixel should be processed. This flexibility was crucial for creating the detailed and dynamic visuals of Prince of Persia, which relied on blending sprites seamlessly into the environment. The use of bitwise operations was a hallmark of efficient programming on the 6502 processor, as it allowed developers to perform complex graphics manipulations with minimal computational overhead. Techniques from `MLayGen` influenced later graphics engines, particularly in the realm of 2D platformers and adventure games."
  - id: "mlaymask-mask-and-or"
    line_start: 1350
    line_end: 1533
    title: "Masking Sprites: Precision Graphics Control"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mask_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `MLayMask` routine focuses on masking sprites, a technique used to selectively render parts of an image while preserving transparency or blending effects. This routine combines masking with OR operations, allowing sprites to be layered over the background without overwriting existing pixels. It uses lookup tables (`MASKTAB`, `AMASKS`, `BMASKS`) to manage how each pixel is processed. Masking was essential for creating the intricate visuals of Prince of Persia, where characters and objects needed to interact dynamically with the environment. On the Apple II, this required careful management of memory and processor cycles, as the 6502 had limited capabilities. Masking techniques like those in `MLayMask` became standard practice in 2D game development, influencing later titles on more advanced systems."
  - id: "mlayxor-special-xor"
    line_start: 1535
    line_end: 1714
    title: "Special XOR: Advanced Sprite Manipulation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bitwise_operation"
    image_url: ""
    image_caption: ""
    content: "The `MLayXOR` routine builds on the XOR technique introduced in `LayXOR`, providing advanced capabilities for sprite manipulation. This routine uses XOR to create visual effects like inversion and transparency, which were groundbreaking for the Apple II's limited graphics capabilities. By leveraging lookup tables (`SHIFTL`, `SHIFTH`, `CARRYL`, `CARRYH`) and carefully managing memory addresses, Mechner was able to achieve cinematic visuals that pushed the boundaries of what the Apple II could do. The use of XOR in `MLayXOR` reflects a deep understanding of both the hardware and the artistic requirements of the game. This technique influenced later graphics engines, particularly in the realm of 2D games where efficient sprite manipulation was critical."
  - id: "peel-simple-graphics-call"
    line_start: 1716
    line_end: 1725
    title: "Peel: A Simple Graphics Shortcut"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_rendering"
    image_url: ""
    image_caption: ""
    content: "The `PEEL` routine serves as a streamlined entry point to the `fastlaySTA` routine, bypassing complex setup steps for faster rendering. This shortcut reflects Mechner's focus on optimizing performance, ensuring that the game could handle rapid graphics updates without lag. By directly calling `fastlaySTA`, `PEEL` avoids unnecessary calculations, making it ideal for situations where speed was more important than precision. This kind of optimization was critical for the Apple II, where processor cycles were limited and every instruction counted. Techniques like `PEEL` influenced later game developers, who adopted similar shortcuts to improve rendering performance in resource-constrained environments."
  - id: "fastlay-high-speed-rendering"
    line_start: 1727
    line_end: 1824
    title: "Fastlay: The Speed-First Graphics Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_rendering"
    image_url: ""
    image_caption: ""
    content: "The `FASTLAY` routine is a stripped-down version of the `LAY` routine, designed for maximum speed at the expense of features like clipping, masking, and mirroring. This routine directly manipulates memory to render sprites as quickly as possible, making it ideal for scenarios where performance was critical. Mechner notes that `FASTLAY` may crash if overtaxed, highlighting the trade-offs involved in optimizing for speed. On the Apple II, where processor cycles were precious, routines like `FASTLAY` were essential for maintaining smooth gameplay. This approach influenced later graphics engines, particularly in arcade-style games where rendering speed was paramount."
  - id: "fastmask-streamlined-mask-rendering"
    line_start: 1887
    line_end: 1969
    title: "Fastmask: Masking at Lightning Speed"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mask_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `FASTMASK` routine combines the speed of `FASTLAY` with masking capabilities, allowing sprites to be rendered quickly while preserving transparency and blending effects. This routine uses lookup tables (`MASKTAB`) and direct memory manipulation to achieve high-speed rendering without sacrificing visual quality. On the Apple II, this was a critical optimization, as the 6502 processor had limited computational power and memory. By streamlining masking operations, Mechner was able to create dynamic visuals that pushed the boundaries of what the Apple II could achieve. Techniques like `FASTMASK` influenced later graphics engines, particularly in the realm of 2D games where efficient masking was essential."
  - id: "setfastmain-aux-memory-switching"
    line_start: 1971
    line_end: 1988
    title: "SetFastMain/Aux: Switching Memory Banks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bank_switching"
    image_url: ""
    image_caption: ""
    content: "The `SETFASTMAIN` and `SETFASTAUX` routines modify the `FASTLAY` routines to expect image tables in either main or auxiliary memory. This flexibility was crucial for the Apple II, which relied on bank-switched memory to fit large programs into 128KB. By allowing the graphics routines to switch between memory banks, Mechner ensured that the game could handle complex visuals without running out of space. Bank switching was a common technique on early computers, but Mechner's implementation here is particularly elegant, reflecting his deep understanding of the Apple II's architecture. This approach influenced later games and systems, where memory management continued to be a critical challenge."
  - id: "fastblack-clear-screen-region"
    line_start: 1994
    line_end: 2048
    title: "How FASTBLACK Clears Screen Regions in Seconds"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "The FASTBLACK routine is designed to clear a specific region of the screen by directly writing values to memory. It calculates the starting position and dimensions of the region using parameters like `XCO`, `YCO`, `width`, and `height`. The routine then iterates over the calculated memory addresses, writing a predefined color value (`$80`) to each pixel. This approach bypasses higher-level abstractions, enabling rapid updates to the screen. In the mid-1980s, the Apple IIe/IIc's graphics capabilities were limited to a 280x192 resolution with a fixed color palette. Memory was bank-switched, meaning developers had to carefully manage which memory bank was active. FASTBLACK reflects Jordan Mechner's deep understanding of the hardware, as he leveraged direct memory manipulation to achieve performance gains. The technique was likely influenced by earlier arcade games, where speed was critical. This routine set the stage for efficient screen updates in cinematic platformers. By clearing regions quickly, Mechner could implement dynamic animations without noticeable lag. The method influenced later games on similar hardware, such as Karateka and early NES titles, where direct memory writes became standard practice for performance-critical tasks."
  - id: "copyscrn-screen-buffer-transfer"
    line_start: 2050
    line_end: 2093
    title: "The Routine Behind Smooth Screen Transitions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "COPYSCRN is a routine that copies screen data from one memory region to another, enabling smooth transitions and animations. It takes two inputs: the source screen (`IMAGE`) and the destination screen (`IMAGE+1`). Using a loop, it transfers blocks of 256 bytes from the source to the destination, incrementing the memory addresses after each transfer. This ensures that the entire screen is updated without tearing or artifacts. In the Apple II era, double buffering was a common technique to avoid flickering during screen updates. By preparing the next frame in a hidden buffer and then copying it to the visible screen, developers could create seamless animations. Mechner's implementation in COPYSCRN demonstrates his mastery of this technique, which was crucial for the cinematic feel of Prince of Persia. This approach became a cornerstone of game development, influencing not only Apple II games but also titles on the Commodore 64 and early PC platforms. It laid the groundwork for modern graphics engines, where double buffering is still a fundamental concept. Developers like John Carmack later refined these techniques in games like Commander Keen and Doom, pushing the boundaries of smooth animation and screen rendering."
  - id: "inverty-y-coordinate-table-swap"
    line_start: 2095
    line_end: 2126
    title: "How INVERTY Flips Animation Tables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "The INVERTY routine swaps and mirrors Y-coordinate tables, a technique used to create inverted animations or reflections. It starts by loading the highest and lowest Y-coordinates (`YLO` and `YHI`) and swaps their values using stack operations (`PHA` and `PLA`). The routine then moves the coordinates closer to the center, effectively flipping the table. This technique was essential for Prince of Persia's fluid animations, which were based on rotoscoping. Mechner filmed his brother performing various moves and traced the frames to create realistic character motion. By manipulating Y-coordinate tables, he could reuse animation data for mirrored movements, saving memory and development time. INVERTY's approach to table manipulation influenced later games that relied on efficient animation techniques. The ability to flip and reuse data became a standard practice in sprite-based games, appearing in titles like Super Mario Bros. and Castlevania. It also foreshadowed modern game engines, where data-driven animation systems allow developers to create complex character movements with minimal overhead."

---

```asm
* hires
org = $ee00
 tr on
 lst off
*-------------------------------
*
*  PRINCE OF PERSIA
*  Copyright 1989 Jordan Mechner
*
*-------------------------------
 org org

 jmp boot3
 jmp cls
 jmp lay
 jmp fastlay
 jmp layrsave

 jmp lrcls
 jmp fastmask
 jmp fastblack
 jmp peel
 jmp getwidth

 jmp copyscrnMM
 jmp copyscrnAA
 jmp SETFASTAUX
 jmp SETFASTMAIN
 jmp copyscrnMA

 jmp copyscrnAM
 jmp INVERTY

*-------------------------------
 put hrparams

*-------------------------------
boot3 = $f880 ;stage 3 boot

peelbuf1 = $d000
peelbuf2 = $d600

* Local vars

locals = $f0
locals2 = $18

 dum locals

BASE ds 2
IMSAVE ds 2
XSAVE ds 1
YSAVE ds 1
WIDTH ds 1
HEIGHT ds 1
TOPEDGE ds 1
OFFLEFT ds 1
OFFRIGHT ds 1
YREG ds 1
CARRY ds 1

 dum locals2
index
ztemp
AMASK ds 1
BMASK ds 1
VISWIDTH ds 1
RMOST ds 1
carryim ds 1
imbyte ds 1

 dend

* OPACITY codes

and = 0
ora = 1
sta = 2
eor = 3 ;OR/shift/XOR
mask = 4 ;mask/OR

*-------------------------------
*
* Assume hires routines are called from auxmem
* (Exit with RAMRD, RAMWRT, ALTZP on)
*
*-------------------------------

cls jsr mainmem
 jsr CLS
 jmp auxmem

lay jsr mainmem
 jsr LAY
 jmp auxmem

fastlay
 jsr FASTLAY
 jmp auxmem

layrsave jsr mainmem
 jsr LAYRSAVE
 jmp auxmem

lrcls jsr mainmem
 jsr LRCLS
 jmp auxmem

fastmask
  jsr FASTMASK
 jmp auxmem

fastblack jsr mainmem
 jsr FASTBLACK
 jmp auxmem

peel
 jsr PEEL
 jmp auxmem

getwidth jsr mainmem
 jsr GETWIDTH
 jmp auxmem

copyscrnMM
 jsr mainmem ;r/w main
]copyscrn jsr COPYSCRN
 jmp auxmem

copyscrnAA
 jsr auxmem ;r/w aux
 jmp ]copyscrn

copyscrnMA
 sta $c002 ;read main
 sta $c005 ;write aux
 jmp ]copyscrn

copyscrnAM
 sta $c003 ;read aux
 sta $c004 ;write main
 jmp ]copyscrn

*-------------------------------
mainmem sta $c004 ;RAMWRT off
 sta $c002 ;RAMRD off
 rts

auxmem sta $c005 ;RAMWRT on
 sta $c003 ;RAMRD on
 rts

*-------------------------------
*
*  Parameters passed to hires routines:
*
*  PAGE        $00 = hires page 1, $20 = hires page 2
*  XCO         Screen X-coord (0=left, 39=right)
*  YCO         Screen Y-coord (0=top, 191=bottom)
*  OFFSET      # of bits to shift image right (0-6)
*  IMAGE       Image # in table (1-127)
*  TABLE       Starting address of image table (2 bytes)
*  BANK        Memory bank of table (2 = main, 3 = aux)
*  OPACITY     Bits 0-6:
*                0    AND
*                1    OR
*                2    STA
*                3    special XOR (OR/shift/XOR)
*                4    mask/OR
*              Bit 7: 0 = normal, 1 = mirror
*  LEFTCUT     Left edge of usable screen area
*                (0 for full screen)
*  RIGHTCUT    Right edge +1 of usable screen area
*                (40 for full screen)
*  TOPCUT      Top edge of usable screen area
*                (0 for full screen)
*  BOTCUT      Bottom edge +1 of usable screen area
*                (192 for full screen)
*
*-------------------------------
*
*  Image table format:
*
*  Byte 0:    width (# of bytes)
*  Byte 1:    height (# of lines)
*  Byte 2-n:  image bytes (read left-right, top-bottom)
*
*-------------------------------
*
*  To preserve the background behind an animated character,
*  call LAYERSAVE before LAYing down each character image.
*  Afterwards, call PEEL to "peel off" the character &
*  restore the original background.
*
*  Peel buffer stores background images sequentially, in
*  normal image table format, & is cleared after every frame.
*
*-------------------------------
*
*  C L S
*
*  Clear hi-res screen to black2
*
*-------------------------------

CLS lda PAGE ;00 = page 1; 20 = page 2
 clc
 adc #$20
 sta :loop+2
 adc #$10
 sta :smod+2

 lda #$80 ;black2

 ldx #$10

 ldy #0

:loop sta $2000,y
:smod sta $3000,y
 iny
 bne :loop

 inc :loop+2
 inc :smod+2

 dex
 bne :loop

 rts

*-------------------------------
*
*  L O - R E S   C L S
*
*  Clear lo-res/text screen (page 1)
*
*  In: A = color
*
*-------------------------------

LRCLS LDY #$F7
:2 STA $400,Y
 STA $500,Y
 STA $600,Y
 STA $700,Y
 DEY
 CPY #$7F
 BNE :3
 LDY #$77
:3 CPY #$FF
 BNE :2
 RTS

*-------------------------------
*
*  S E T   I M A G E
*
*  In: TABLE (2 bytes), IMAGE (image #)
*  Out: IMAGE = image start address (2 bytes)
*
*-------------------------------

setimage lda IMAGE
 asl
 sec
 sbc #1

 tay
 lda (TABLE),y
 sta IMAGE

 iny
 lda (TABLE),y
 sta IMAGE+1

 rts

*-------------------------------
*
*  G E T   W I D T H
*
*  In: BANK, TABLE, IMAGE
*  Out: A = width, X = height
*
*-------------------------------
GETWIDTH
 lda BANK
 sta :RAMRD+1

:RAMRD sta $c003

 jsr setimage

 ldy #1
 lda (IMAGE),y ;height
 tax

 dey
 lda (IMAGE),y ;width
 rts

*-------------------------------
*
*  P R E P R E P
*
*  In: IMAGE, XCO, YCO
*
*-------------------------------

PREPREP

* Save IMAGE, XCO, YCO

 LDA IMAGE
 STA IMSAVE
 LDA XCO
 STA XSAVE
 LDA YCO
 STA YSAVE

* Get image data start address

 lda BANK
 sta :RAMRD+1

:RAMRD sta $c003

 jsr setimage

* Read first two bytes (width, height) of image table

 LDY #0
 LDA (IMAGE),Y
 STA WIDTH

 INY
 LDA (IMAGE),Y
 STA HEIGHT

 LDA IMAGE
 CLC
 ADC #2
 STA IMAGE
 BCC :3
 INC IMAGE+1

:3 sta $c002 ;RAMRD off (read mainmem)

]rts rts

*-------------------------------
*
*  C R O P
*
*  In:  Results of PREPREP (XCO, YCO, HEIGHT, WIDTH)
*       Screen area cutoffs (LEFTCUT, RIGHTCUT, TOPCUT, BOTCUT)
*
*  Out:
*
*  TOPEDGE   Top line -1
*  VISWIDTH  Width, in bytes, of visible (onscreen) portion
*               of image
*  XCO       X-coord of leftmost visible byte of image
*               (must be 0-39)
*  YCO       Y-coord of lowest visible line of image
*               (must be 0-191)
*  OFFLEFT   # of bytes off left edge
*  OFFRIGHT  # of bytes off right edge (including carry byte)
*  RMOST     # of bytes off right edge (excluding carry byte)
*
*  Return - if entire image is offscreen, else +
*
*-------------------------------
CROP

* (1) Crop top & bottom

 lda YCO
 cmp BOTCUT
 bcs :botoff ;Bottom o.s.

* Bottom is onscreen--check top

 sec
 sbc HEIGHT ;top line -1
 cmp #191
 bcc :topok ;Top is onscreen

 lda TOPCUT ;Top is offscreen
 sec
 sbc #1
 sta TOPEDGE
 jmp :done

:topok sta TOPEDGE ;Top line -1 (0-191)

 lda TOPCUT ;top line of image area (forced mask)
 beq :done ;no top cutoff

 sec
 sbc #1
 cmp TOPEDGE
 bcc :done

 sta TOPEDGE
 bcs :done

* Bottom is o.s.--advance IMAGE pointer past o.s. portion

:botoff ;A = YCO
 sec
 sbc HEIGHT
 clc
 adc #1 ;top line
 cmp BOTCUT
 bcs :cancel ;Entire shape is o.s.
 sec
 sbc #1
 sta TOPEDGE ;top line -1

 ldx YCO
:loop
 lda IMAGE
 clc
 adc WIDTH
 sta IMAGE
 bcc :1
 inc IMAGE+1
:1
 dex
 cpx BOTCUT
 bcs :loop

 stx YCO

* (2) Crop sides

:done
 lda XCO
 bmi :leftoff
 cmp LEFTCUT
 bcs :leftok ;XCO >= LEFTCUT

* XCO < LEFTCUT: left edge is offscreen

:leftoff
 lda LEFTCUT
 sec
 sbc XCO
 sta OFFLEFT ;Width of o.s. portion

 lda WIDTH
 sec
 sbc OFFLEFT
 bmi :cancel ;Entire image is o.s. -- skip it
 sta VISWIDTH ;Width of onscreen portion (can be 0)

 lda LEFTCUT
 sta XCO

* Assume image is <=40 bytes wide --> right edge is onscreen

 lda #0
 sta OFFRIGHT
 sta RMOST
 rts

* Left edge is onscreen; what about right edge?

:leftok ;A = XCO
 cmp RIGHTCUT ;normally 40
 bcs :cancel ;Entire image is o.s. - skip it

 clc
 adc WIDTH ;rightmost byte +1
 cmp RIGHTCUT
 bcc :bothok ;Entire image is onscreen

 sec
 sbc RIGHTCUT
 sta RMOST ;Width of o.s. portion

 clc
 adc #1
 sta OFFRIGHT ;+1

 lda RIGHTCUT
 sec
 sbc XCO
 sta VISWIDTH ;Width of onscreen portion

 lda #0
 sta OFFLEFT
 rts

:bothok lda WIDTH
 sta VISWIDTH

 lda #0
 sta OFFLEFT
 sta OFFRIGHT
 sta RMOST
 rts

:cancel lda #-1 ;Entire image is o.s. - skip it
]rts rts

*-------------------------------
*
* Shift offset 1 bit right or left
* (for special XOR)
*
* In/out: X = offset
*
*-------------------------------
shiftoffset
 cpx #6
 bcs :left

 inx
 rts

:left dex
]rts rts

*-------------------------------
*
*  L A Y E R S A V E
*
*  In:  Same as for LAY, plus PEELBUF (2 bytes)
*  Out: PEELBUF (updated), PEELIMG (2 bytes), PEELXCO, PEELYCO
*
*  PEELIMG is 2-byte pointer to beginning of image table.
*  (Hi byte = 0 means no image has been stored.)
*
*  PEELBUF is 2-byte pointer to first available byte in
*  peel buffer.
*
*-------------------------------

LAYRSAVE
 jsr PREPREP

 lda OPACITY
 bpl :normal

 LDA XCO
 SEC
 SBC WIDTH
 STA XCO

:normal
 inc WIDTH ;extra byte to cover shift right

 jsr CROP
 bmi SKIPIT

 lda PEELBUF ;PEELBUF: 2-byte pointer to 1st
 sta PEELIMG ;available byte in peel buffer
 lda PEELBUF+1
 sta PEELIMG+1

 lda XCO
 sta PEELXCO
 sta :smXCO+1

 lda YCO
 sta PEELYCO

 lda PAGE ;spend 7 cycles now --
 sta :smPAGE+1 ;save 1 in loop

 ldy #0

 lda VISWIDTH
 beq SKIPIT
 sta (PEELBUF),y
 sta :smWIDTH+1

 sec
 sbc #1
 sta :smSTART+1

* Continue

:cont iny

 LDA YCO
 SEC
 SBC TOPEDGE
 STA (PEELBUF),y ;Height of onscreen portion ("VISHEIGHT")

 LDA PEELBUF
 CLC
 ADC #2
 STA PEELBUF
 BCC :ok
 INC PEELBUF+1
:ok

* Like FASTLAY in reverse

 ldx YCO

:loop LDA YLO,X
 CLC
:smXCO ADC #0 ;XCO
 STA :smBASE+1

 LDA YHI,X
:smPAGE ADC #0 ;PAGE
 STA :smBASE+2

:smSTART ldy #0 ;VISWIDTH-1

:inloop
:smBASE lda $2000,y
 STA (PEELBUF),Y

 dey
 bpl :inloop

:smWIDTH LDA #0 ;VISWIDTH
 ADC PEELBUF ;assume cc
 STA PEELBUF
 BCC :2
 INC PEELBUF+1
:2
 DEX
 CPX TOPEDGE
 BNE :loop

 JMP DONE

SKIPIT lda #0
 sta PEELIMG+1 ;signal that peelbuf is empty

 JMP DONE

*-------------------------------
*
*  L A Y
*
*  General routine to lay down an image on hi-res screen
*  (Handles edge-clipping, bit-shifting, & mirroring)
*
*  Calls one of the following routines:
*
*    LayGen    General (OR, AND, STA)
*    LayMask   Mask & OR
*    LayXOR    Special XOR
*
*  Transfers control to MLAY if image is to be mirrored
*
*-------------------------------

LAY
 lda OPACITY
 bpl :notmirr

 and #$7f
 sta OPACITY
 jmp MLAY

:notmirr cmp #eor
 bne :1
 jmp LayXOR

:1 cmp #mask
 bcc :2
 jmp LayMask

:2 jmp LayGen

*-------------------------------
*
*   General (AND/OR/STORE)
*
*-------------------------------
LayGen
 jsr PREPREP

 jsr CROP
 bpl :cont
 jmp DONE
:cont
 lda BANK
 sta :RAMRD1+1
 sta :RAMRD2+1

 LDX OFFSET

 LDA SHIFTL,X
 STA :91+1
 LDA SHIFTH,X
 STA :91+2

 LDA CARRYL,X
 STA :90+1
 STA :92+1
 LDA CARRYH,X
 STA :90+2
 STA :92+2

 LDA AMASKS,X
 STA :AMASK+1
 LDA BMASKS,X
 STA :BMASK+1

 LDX OPACITY
 LDA OPCODE,X
 STA :80
 STA :81

* Preparation completed -- Lay down shape

 LDY YCO

:nextline
 LDA YLO,Y
 CLC
 ADC XCO
 STA BASE

 LDA YHI,Y
 ADC PAGE
 STA BASE+1

 LDY OFFLEFT
 BEQ :2

* (a) Left edge of image is offscreen
* Take initial carry byte from image table

 DEY

:RAMRD1 sta $c003 ;aux/main
 lda (IMAGE),y
 sta $c002 ;main

 TAX
:90 LDA $FFFF,X ;CARRYn
 STA CARRY

 LDA IMAGE
 CLC
 ADC OFFLEFT
 STA IMAGE
 BCC :1
 INC IMAGE+1
:1
 LDY #0

 LDA VISWIDTH
 STA WIDTH
 BNE :3
 BEQ :4 ;Zero width

* (b) Left edge of image is onscreen
* Take initial carry byte from screen

:2 LDA (BASE),Y
:AMASK AND #0
 STA CARRY

* Lay line down left-to-right fast as you can

:3
:RAMRD2 sta $c003 ;aux/main
 lda (IMAGE),y
 sta $c002 ;main

 TAX
:91 LDA $FFFF,X ;SHIFTn
 ORA CARRY ;Combine with carryover from previous byte

:80 STA (BASE),Y ;STA/ORA/AND/EOR depending on OPACITY
 STA (BASE),Y

:92 LDA $FFFF,X ;CARRYn
 STA CARRY ;Carry over to next byte

 INY
 CPY VISWIDTH
 BCC :3

*  Extra byte on right (carryover)

 LDA OFFRIGHT
 BNE :5 ;Rightmost byte is offscreen

:4 LDA (BASE),Y

:BMASK AND #0
 ORA CARRY
:81 STA (BASE),Y
 STA (BASE),Y

*  Next line up

:5 LDA WIDTH
 CLC
 ADC IMAGE
 STA IMAGE
 BCC :6
 INC IMAGE+1

:6 DEC YCO
 LDY YCO
 CPY TOPEDGE
 BNE :nextline

*  Restore parameters

DONE LDA IMSAVE
 STA IMAGE

 LDA XSAVE
 STA XCO
 LDA YSAVE
 STA YCO

 RTS

*-------------------------------
*
*  Mask, then OR
*
*-------------------------------
]done jmp DONE

LayMask
 ldx OPACITY ;4 = mask, 5 = visible mask
 lda OPCODE,x ;4 = and, 5 = sta
 sta :masksm1
 sta :masksm2

 jsr PREPREP

 jsr CROP
 bmi ]done

 lda BANK
 sta :RAMRD1+1
 sta :RAMRD2+1

 LDX OFFSET

 LDA SHIFTL,X
 STA :91+1
 sta :93+1

 LDA SHIFTH,X
 STA :91+2
 sta :93+2

 LDA CARRYL,X
 STA :90+1
 STA :92+1
 sta :94+1
 sta :96+1

 LDA CARRYH,X
 STA :90+2
 STA :92+2
 sta :94+2
 sta :96+2

 LDA AMASKS,X
 STA :AMASK+1

 LDA BMASKS,X
 STA :BMASK+1

 LDY YCO

:nextline
 LDA YLO,Y
 CLC
 ADC XCO
 STA BASE

 LDA YHI,Y
 ADC PAGE
 STA BASE+1

 LDY OFFLEFT
 BEQ :2

* (a) Left edge of image is offscreen
* Take initial carry byte from image table

 dey

:RAMRD1 sta $c003
 lda (IMAGE),y
; eor #$ff ;TEMP
; ora #$80 ;TEMP
 sta $c002

 tax
:96 lda $FFFF,x ;CARRYn
 sta carryim

 lda MASKTAB-$80,x
 tax
:90 lda $FFFF,x ;CARRYn
 sta CARRY

 LDA IMAGE
 CLC
 ADC OFFLEFT
 STA IMAGE
 BCC :1
 INC IMAGE+1
:1
 ldy #0

 LDA VISWIDTH
 STA WIDTH
 BNE :inloop
 BEQ :4 ;Zero width

* (b) Left edge of image is onscreen
* Take initial carry byte from screen

:2
:AMASK lda #0 ;AMASK
 sta CARRY

 and (BASE),y
 sta carryim

* Lay line down left-to-right fast as you can

:inloop

:RAMRD2 sta $c003
 lda (IMAGE),y
; eor #$ff ;TEMP
; ora #$80 ;TEMP
 sta $c002

 tax

:93 lda $FFFF,x ;SHIFTn
 ora carryim
 sta imbyte ;shifted image byte

:94 lda $FFFF,x ;CARRYn
 sta carryim

 lda MASKTAB-$80,x
 tax

:91 lda $FFFF,x ;SHIFTn
 ora CARRY
:masksm1 and (BASE),y ;AND with mask byte
 ora imbyte ;OR with original image byte
 sta (BASE),y

:92 lda $FFFF,x ;CARRYn
 sta CARRY ;Carry over to next byte

 iny
 cpy VISWIDTH
 bcc :inloop

*  Extra byte on right (carryover)

 lda OFFRIGHT
 bne :5 ;Rightmost byte is offscreen

:4
:BMASK lda #0 ;BMASK
 ora CARRY
:masksm2 and (BASE),y
 ora carryim
 sta (BASE),y

*  Next line up

:5 LDA WIDTH
 CLC
 ADC IMAGE
 STA IMAGE
 BCC :6
 INC IMAGE+1

:6 DEC YCO
 LDY YCO
 CPY TOPEDGE
 beq :done

 jmp :nextline

:done jmp DONE

*-------------------------------
*
*  Special XOR
*
*  (OR, then shift 1 bit and XOR)
*
*-------------------------------

LayXOR
 JSR PREPREP

 jsr CROP
 bpl :cont
 jmp DONE
:cont
 lda BANK
 sta :RAMRD1+1
 sta :RAMRD2+1

 LDX OFFSET

 LDA SHIFTL,X
 STA :91+1
 LDA SHIFTH,X
 STA :91+2

 LDA CARRYL,X
 STA :90+1
 STA :92+1
 LDA CARRYH,X
 STA :90+2
 STA :92+2

 jsr shiftoffset ;shift 1 bit right

 lda SHIFTL,x
 sta :s1+1
 lda SHIFTH,x
 sta :s1+2

 lda CARRYL,x
 sta :c1+1
 sta :c2+1
 lda CARRYH,x
 sta :c1+2
 sta :c2+2

 LDA AMASKS,X
 STA :AMASK+1

* Omit opcode setting

 LDY YCO

:0 LDA YLO,Y
 CLC
 ADC XCO
 STA BASE

 LDA YHI,Y
 ADC PAGE
 STA BASE+1

 LDY OFFLEFT
 BEQ :2

*  (a) Left edge offscreen
*  Take CARRY from off left edge

 DEY

:RAMRD1 sta $c003
 lda (IMAGE),y
 sta $c002

 TAX
:c2 lda $FFFF,x ;CARRYn+1
 sta carryim

:90 LDA $FFFF,X ;CARRYn
 STA CARRY

 LDA IMAGE
 CLC
 ADC OFFLEFT
 STA IMAGE
 BCC :1
 INC IMAGE+1

:1 LDY #0

 LDA VISWIDTH
 STA WIDTH
 BNE :inloop
 BEQ :4 ;Zero width

* (b) Left edge onscreen
* Start a new line at left edge

:2 lda (BASE),y
:AMASK and #0 ;AMASK
 sta CARRY

 lda #0 ;0 XOR X == X
 sta carryim

* Lay line down left-to-right fast as you can

:inloop

:RAMRD2 sta $c003
 lda (IMAGE),y
 sta $c002

 tax

:s1 lda $FFFF,x ;SHIFTn+1
 ora carryim
 sta imbyte

:c1 lda $FFFF,x ;CARRYn+1
 sta carryim

:91 lda $FFFF,x ;SHIFTn
 ora CARRY ;Combine with carryover from previous byte

 ora (BASE),y
 eor imbyte

 ora #$80 ;set hibit
 sta (BASE),y

:92 LDA $FFFF,X ;CARRYn
 STA CARRY ;Carry over to next byte

 INY
 CPY VISWIDTH
 BCC :inloop

*  Extra byte on right (carryover)

 LDA OFFRIGHT
 BNE :5 ;Rightmost byte is offscreen

:4 lda CARRY ;0's in unused part of byte

 ora (BASE),y
 eor carryim

 ora #$80
 sta (BASE),y

*  Next line up

:5 LDA WIDTH
 CLC
 ADC IMAGE
 STA IMAGE
 BCC :6
 INC IMAGE+1

:6 DEC YCO
 LDY YCO
 CPY TOPEDGE
 beq :done

 jmp :0

*  Restore parameters

:done jmp DONE

*-------------------------------
*
*  M I R R O R    L A Y
*
*  Called by LAY
*
*  Specified starting byte (XCO, YCO) is image's bottom
*  right corner, not bottom left; bytes are read off image
*  table R-L, T-B and mirrored before printing.
*
*  In:  A = OPACITY, sans bit 7
*
*-------------------------------

MLAY ;A = OPACITY
 cmp #eor
 bne :1
 jmp MLayXOR

:1 cmp #mask
 bcc :2
 jmp MLayMask

:2 jmp MLayGen

*-------------------------------
*
*  General (AND/OR/STORE)
*
*-------------------------------
MLayGen
 JSR PREPREP

 LDA XCO
 SEC
 SBC WIDTH
 STA XCO

 jsr CROP
 bpl :cont
 jmp DONE
:cont
 lda BANK
 sta :RAMRD1+1
 sta :RAMRD2+1

 LDX OFFSET

 LDA SHIFTL,X
 STA :91+1
 LDA SHIFTH,X
 STA :91+2

 LDA CARRYL,X
 STA :90+1
 STA :92+1
 LDA CARRYH,X
 STA :90+2
 STA :92+2

 LDA AMASKS,X
 STA AMASK
 LDA BMASKS,X
 STA BMASK

 LDX OPACITY
 LDA OPCODE,X
 STA :80
 STA :81

* Lay on

 LDY YCO

:0 LDA YLO,Y
 STA BASE

 LDA YHI,Y
 CLC
 ADC PAGE
 STA BASE+1

 LDY OFFLEFT
 BEQ :2

* Take CARRY from off left edge

 LDY VISWIDTH

:RAMRD1 sta $c003
 lda (IMAGE),y
 sta $c002

 TAX

 LDA MIRROR-$80,X
 TAX

:90 LDA $FFFF,X ;CARRYn
 STA CARRY

:1 DEY
 BPL :3
 BMI :4

* Start a new line at left edge

:2 LDY XCO
 LDA (BASE),Y
 AND AMASK
 STA CARRY

 LDY WIDTH
 DEY

* Lay line down left-to-right fast as you can

:3 STY YREG

:RAMRD2 sta $c003
 lda (IMAGE),y
 sta $c002

 TAX

 LDA MIRROR-$80,X
 TAX

:91 LDA $FFFF,X ;SHIFTn
 ORA CARRY ;Combine with carryover from previous byte

 LDY XCO
:80 STA (BASE),Y ;STA/ORA/AND/EOR depending on OPACITY
 STA (BASE),Y

:92 LDA $FFFF,X ;CARRYn
 STA CARRY ;Carry over to next byte

 INC BASE

 LDY YREG
 CPY RMOST
 BEQ :7

 DEY
 BPL :3

*  Extra byte on right (carryover)

:7 LDA OFFRIGHT
 BNE :5 ;Rightmost byte is offscreen

:4 LDY XCO
 LDA (BASE),Y

 AND BMASK
 ORA CARRY
:81 STA (BASE),Y
 STA (BASE),Y

*  Next line up

:5 LDA WIDTH
 CLC
 ADC IMAGE
 STA IMAGE
 BCC :6
 INC IMAGE+1

:6 DEC YCO
 LDY YCO
 CPY TOPEDGE

 beq :done
 jmp :0

:done JMP DONE

*-------------------------------
*
*  Mask, then OR
*
*-------------------------------

MLayMask
 ldx OPACITY ;4 = mask, 5 = visible mask
 lda OPCODE,x ;4 = and, 5 = sta
 sta :masksm1
 sta :masksm2

 JSR PREPREP

 LDA XCO
 SEC
 SBC WIDTH
 STA XCO

 jsr CROP
 bpl :cont
 jmp DONE
:cont
 lda BANK
 sta :RAMRD1+1
 sta :RAMRD2+1

 LDX OFFSET

 LDA SHIFTL,X
 STA :91+1
 sta :93+1

 LDA SHIFTH,X
 STA :91+2
 sta :93+2

 LDA CARRYL,X
 STA :90+1
 STA :92+1
 sta :94+1
 sta :96+1

 LDA CARRYH,X
 STA :90+2
 STA :92+2
 sta :94+2
 sta :96+2

 LDA AMASKS,X
 STA :AMASK+1
 LDA BMASKS,X
 STA :BMASK+1

* Lay on

 LDY YCO

:0 LDA YLO,Y
 STA BASE

 LDA YHI,Y
 CLC
 ADC PAGE
 STA BASE+1

 LDY OFFLEFT
 BEQ :2

* (a) Left edge offscreen
* Take CARRY from off left edge

 LDY VISWIDTH

:RAMRD1 sta $c003
 lda (IMAGE),y
; eor #$ff ;TEMP
; ora #$80 ;TEMP
 sta $c002

 TAX
 LDA MIRROR-$80,X
 TAX

:96 lda $FFFF,x ;CARRYn
 sta carryim

 lda MASKTAB-$80,x
 tax
:90 LDA $FFFF,X ;CARRYn
 STA CARRY

:1 DEY
 BPL :3
 BMI :4

* (b) Left edge onscreen
* Start a new line at left edge

:2 LDY XCO
:AMASK lda #0 ;AMASK
 sta CARRY

 and (BASE),y
 sta carryim

 LDY WIDTH
 DEY

* Lay line down left-to-right fast as you can

:3 STY YREG

:RAMRD2 sta $c003
 lda (IMAGE),y
; eor #$ff ;TEMP
; ora #$80 ;TEMP
 sta $c002

 TAX
 LDA MIRROR-$80,X
 TAX

:93 lda $FFFF,x ;SHIFTn
 ora carryim
 sta imbyte

:94 lda $FFFF,x ;CARRYn
 sta carryim

 lda MASKTAB-$80,x
 tax

:91 LDA $FFFF,X ;SHIFTn
 ORA CARRY ;Combine with carryover from previous byte

 LDY XCO
:masksm1 and (BASE),y
 ora imbyte
 STA (BASE),Y

:92 LDA $FFFF,X ;CARRYn
 STA CARRY ;Carry over to next byte

 INC BASE

 LDY YREG
 CPY RMOST
 BEQ :7

 DEY
 BPL :3

*  Extra byte on right (carryover)

:7 LDA OFFRIGHT
 BNE :5 ;Rightmost byte is offscreen

:4 LDY XCO
 LDA (BASE),Y

:BMASK AND #0 ;BMASK
 ORA CARRY
:masksm2 and (BASE),y
 ora carryim
 STA (BASE),Y

*  Next line up

:5 LDA WIDTH
 CLC
 ADC IMAGE
 STA IMAGE
 BCC :6
 INC IMAGE+1

:6 DEC YCO
 LDY YCO
 CPY TOPEDGE
 beq :done

 jmp :0

:done jmp DONE

*-------------------------------
*
*  Special XOR
*
*-------------------------------

MLayXOR
 JSR PREPREP

 LDA XCO
 SEC
 SBC WIDTH
 STA XCO

 jsr CROP
 bpl :cont
 jmp DONE
:cont
 lda BANK
 sta :RAMRD1+1
 sta :RAMRD2+1

 LDX OFFSET

 LDA SHIFTL,X
 STA :91+1
 LDA SHIFTH,X
 STA :91+2

 LDA CARRYL,X
 STA :90+1
 STA :92+1
 LDA CARRYH,X
 STA :90+2
 STA :92+2

 jsr shiftoffset

 lda SHIFTL,x
 sta :s1+1
 lda SHIFTH,x
 sta :s1+2

 lda CARRYL,x
 sta :c1+1
 sta :c2+1
 lda CARRYH,x
 sta :c1+2
 sta :c2+2

 LDA AMASKS,X
 STA :AMASK+1

* Lay on

 LDY YCO

:0 LDA YLO,Y
 STA BASE

 LDA YHI,Y
 CLC
 ADC PAGE
 STA BASE+1

 LDY OFFLEFT
 BEQ :2

* (a) Left edge offscreen
* Take CARRY from off left edge

 LDY VISWIDTH

:RAMRD1 sta $c003
 lda (IMAGE),y
 sta $c002

 TAX
 LDA MIRROR-$80,X
 TAX

:c2 lda $FFFF,x ;CARRYn+1
 sta carryim

:90 LDA $FFFF,X ;CARRYn
 STA CARRY

:1 DEY
 BPL :3
 BMI :4

* (b) Left edge onscreen
* Start a new line at left edge

:2 ldy XCO
:AMASK lda #0 ;AMASK
 and (BASE),y
 sta CARRY

 lda #0
 sta carryim

 LDY WIDTH
 DEY

* Lay line down left-to-right fast as you can

:3 STY YREG

:RAMRD2 sta $c003
 lda (IMAGE),y
 sta $c002

 TAX

 LDA MIRROR-$80,X
 TAX

:s1 lda $FFFF,x ;SHIFTn
 ora carryim
 sta imbyte

:c1 lda $FFFF,x ;CARRYn
 sta carryim

:91 LDA $FFFF,X ;SHIFTn
 ORA CARRY ;Combine with carryover from previous byte

 LDY XCO

 ora (BASE),y
 eor imbyte

 ora #$80
 sta (BASE),Y

:92 LDA $FFFF,X ;CARRYn
 STA CARRY ;Carry over to next byte

 INC BASE

 LDY YREG
 CPY RMOST
 BEQ :7

 DEY
 BPL :3

*  Extra byte on right (carryover)

:7 LDA OFFRIGHT
 BNE :5 ;Rightmost byte is offscreen

:4 LDY XCO

 lda CARRY

 ora (BASE),Y
 eor carryim

 ora #$80
 STA (BASE),Y

*  Next line up

:5 LDA WIDTH
 CLC
 ADC IMAGE
 STA IMAGE
 BCC :6
 INC IMAGE+1

:6 DEC YCO
 LDY YCO
 CPY TOPEDGE
 beq :done

 jmp :0

:done JMP DONE

*-------------------------------
*
* Peel
*
*-------------------------------
PEEL
 sta $c004
]ramrd1 sta $c003

 jmp fastlaySTA

*-------------------------------
*
*  F A S T L A Y
*
*  Streamlined LAY routine
*
*  No offset - no clipping - no mirroring - no masking -
*  no EOR - trashes IMAGE - may crash if overtaxed -
*  but it's fast.
*
*  10/3/88: OK for images to protrude PARTLY off top
*
*-------------------------------
FASTLAY
 sta $c004 ;RAMWRT main
]ramrd2 sta $c003 ;RAMRD aux

 jsr setimage

 ldx OPACITY ;hi bit off!
 cpx #sta
 beq fastlaySTA

 lda OPCODE,x
 sta  :smod

 lda PAGE
 sta :smPAGE+1

 lda XCO
 sta  :smXCO+1

 ldy #0
 lda (IMAGE),y
 sta :smWIDTH+1

 sec
 sbc #1
 sta :smSTART+1

 lda YCO
 tax
 iny
 sbc (IMAGE),y
 bcs :ok
 lda #-1 ;limited Y-clipping
:ok sta  :smTOP+1

 lda IMAGE
 clc
 adc #2
 sta IMAGE
 bcc :1
 inc IMAGE+1
:1

:outloop
 lda YLO,x
 clc
:smXCO adc #0
 sta BASE

 lda YHI,x
:smPAGE adc #$20
 sta BASE+1

:smSTART ldy #3

:inloop
]ramrd3 sta $c003 ;RAMRD aux

 lda (IMAGE),y

 sta $c002 ;RAMRD main

:smod ora (BASE),y
 sta (BASE),y

 dey
 bpl :inloop

:smWIDTH lda #4
 adc IMAGE ;assume cc
 sta IMAGE
 bcc :2
 inc IMAGE+1
:2
 dex
:smTOP cpx #$ff
 bne :outloop

 rts

*-------------------------------
*
*  Still more streamlined version of FASTLAY (STA only)
*
*-------------------------------
fastlaySTA
 lda PAGE
 sta :smPAGE+1

 lda XCO
 sta  :smXCO+1

 ldy #0
 lda (IMAGE),y
 sta :smWIDTH+1

 sec
 sbc #1
 sta :smSTART+1

 lda YCO
 tax
 iny
 sbc (IMAGE),y
 bcs :ok
 lda #-1 ;limited Y-clipping
:ok sta  :smTOP+1

 lda IMAGE
 clc
 adc #2
 sta IMAGE
 bcc :1
 inc IMAGE+1
:1

:outloop
 lda YLO,x
 clc
:smXCO adc #0
 sta :smod+1

 lda YHI,x
:smPAGE adc #$20
 sta :smod+2

:smSTART ldy #3

:inloop
 lda (IMAGE),y
:smod sta $2000,y ;BASE

 dey
 bpl :inloop

:smWIDTH lda #4
 adc IMAGE ;cc
 sta IMAGE
 bcc :2
 inc IMAGE+1
:2
 dex
:smTOP cpx #$ff
 bne :outloop

 rts

*-------------------------------
*
*  F A S T M A S K
*
*-------------------------------
FASTMASK
 sta $c004 ;RAMWRT main
]ramrd4 sta $c003 ;RAMRD aux

 jsr setimage

 lda PAGE
 sta :smPAGE+1

 lda XCO
 sta  :smXCO+1

 ldy #0
 lda (IMAGE),y
 sta :smWIDTH+1

 sec
 sbc #1
 sta :smSTART+1

 lda YCO
 tax
 iny
 sbc (IMAGE),y
 bcs :ok
 lda #-1 ;limited Y-clipping
:ok sta  :smTOP+1

 lda IMAGE
 clc
 adc #2
 sta IMAGE
 bcc :1
 inc IMAGE+1
:1

:outloop
 stx index

 lda YLO,x
 clc
:smXCO adc #0
 sta BASE

 lda YHI,x
:smPAGE adc #$20
 sta BASE+1

:smSTART ldy #3

:inloop
]ramrd5 sta $c003 ;RAMRD aux

 lda (IMAGE),y

 sta $c002 ;RAMRD main

 tax
 lda MASKTAB-$80,X

 and (BASE),Y
 sta (BASE),y

 dey
 bpl :inloop

:smWIDTH lda #4
 adc IMAGE ;cc
 sta IMAGE
 bcc :2
 inc IMAGE+1
:2
 ldx index
 dex
:smTOP cpx #$ff
 bne :outloop

 rts

*-------------------------------
*
*  S E T F A S T   M A I N / A U X
*
*  Modify FASTLAY routines to expect image tables to
*  be in main/auxmem.  SETFAST need be called only once
*  (e.g., when switching between game & builder).
*
*-------------------------------
SETFASTMAIN
 lda #$02 ;RAMRD main
]setfast
 sta ]ramrd1+1
 sta ]ramrd2+1
 sta ]ramrd3+1
 sta ]ramrd4+1
 sta ]ramrd5+1
 rts

SETFASTAUX
 lda #$03 ;RAMRD aux
 bne ]setfast

*-------------------------------
*
*  F A S T B L A C K
*
*  Wipe a rectangular area to black2
*
*  Width/height passed in IMAGE/IMAGE+1
*  (width in bytes, height in pixels)
*
*-------------------------------

FASTBLACK
 lda color
 sta :smCOLOR+1

 lda PAGE
 sta :smPAGE+1

 lda XCO
 sta  :smXCO+1

 lda width
 sec
 sbc #1
 sta :smSTART+1

 lda YCO
 tax
 sbc height ;cs
 sta :smTOP+1

:outloop
 lda YLO,x
 clc
:smXCO adc #0
 sta :smod+1

 lda YHI,x
:smPAGE adc #$20
 sta :smod+2

:smCOLOR lda #$80

:smSTART ldy #3

:inloop
:smod sta $2000,y ;BASE
 dey
 bpl :inloop

 dex
:smTOP cpx #$ff
 bne :outloop

 rts

*-------------------------------
*
*  C O P Y   S C R E E N
*
*  Copy $2000 bytes
*
*  In: IMAGE+1 = dest scrn, IMAGE = org scrn
*      (use hi byte of actual memory address)
*
*-------------------------------
COPYSCRN
 lda IMAGE+1
 sta :dst1+2
 clc
 adc #$10
 sta :dst2+2

 lda IMAGE
 sta :org1+2
 adc #$10
 sta :org2+2

 ldx #$10

 ldy #0
:loop
:org1 lda $2000,y
:dst1 sta $4000,y

:org2 lda $3000,y
:dst2 sta $5000,y

 iny
 bne :loop

 inc :org1+2
 inc :org2+2
 inc :dst1+2
 inc :dst2+2

 dex
 bne :loop

 rts

*-------------------------------
* Invert Y-tables
*-------------------------------
INVERTY
 ldx #191 ;low line
 ldy #0 ;high line

* Switch low & high lines

:loop lda YLO,x
 pha
 lda YLO,y
 sta YLO,x
 pla
 sta YLO,y

 lda YHI,x
 pha
 lda YHI,y
 sta YHI,x
 pla
 sta YHI,y

* Move 1 line closer to ctr

 dex
 iny
 cpy #96
 bcc :loop
]rts rts

*-------------------------------
 lst
 ds 1
 usr $a9,1,$0000,*-org
 lst off
```
