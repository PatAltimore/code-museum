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
description: "The HIRES.S file from Prince of Persia (1989) showcases advanced techniques for manipulating graphics on the Apple II, pushing the limits of 6502 assembly programming."

summary:
  - point: "Bank-switched memory techniques to fit graphics into 128K"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Routines for edge-clipping, bit-shifting, and mirroring images"
    link: "https://en.wikipedia.org/wiki/Graphics_pipeline"
    link_label: "Graphics Pipeline"
  - point: "Use of rotoscoping for realistic animation"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Optimized routines for clearing and manipulating hi-res and lo-res screens"
    link: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    link_label: "Apple II Graphics"
  - point: "Sophisticated handling of off-screen images and partial visibility"
    link: "https://en.wikipedia.org/wiki/Clipping_(computer_graphics)"
    link_label: "Clipping"

enhancements:
  - id: "ztemp-local-vars"
    line_start: 43
    line_end: 87
    title: "Why These Variables Are Packed So Tight"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zero_page"
    image_url: ""
    image_caption: ""
    content: "This section defines several local variables, including masks and dimensions, stored in tightly packed memory locations. On the 6502, zero-page memory (addresses $00-$FF) allows faster access via single-byte instructions, which is critical for performance. Jordan Mechner uses this space to store frequently accessed variables like AMASK, BMASK, and VISWIDTH, ensuring minimal overhead during graphics operations. In 1989, optimizing for speed was paramount, as the Apple IIe/IIc had limited processing power (1 MHz). These variables are foundational for later routines that handle edge-clipping and bit-shifting, enabling the game's smooth animations and precise graphics rendering. This approach influenced later developers working on constrained hardware, emphasizing the importance of zero-page optimization."
  - id: "cls-hires-screen-clear"
    line_start: 89
    line_end: 91
    title: "Clearing the Hi-Res Screen in Two Steps"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "The `cls` subroutine clears the hi-res screen by switching to the main memory bank, calling the `CLS` routine, and then returning to auxiliary memory. This ensures the screen is reset to black while maintaining the correct memory bank configuration. The Apple II's bank-switched memory required careful management, as graphics operations often toggled between main and auxiliary banks. Mechner's approach reflects the constraints of the Apple II hardware, where every operation had to be explicitly managed due to the lack of hardware abstraction. This routine sets the stage for subsequent graphics rendering, ensuring a clean slate for each frame. Techniques like this became standard practice for graphics programming on early computers, influencing later systems with similar memory constraints."
  - id: "auxmem-bank-switching"
    line_start: 149
    line_end: 151
    title: "The Memory Bank Switch That Made It Possible"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bank_switching"
    image_url: ""
    image_caption: ""
    content: "The `auxmem` and `mainmem` routines toggle between auxiliary and main memory banks on the Apple II. By writing specific values to memory-mapped registers ($C003-$C005), Mechner enables seamless transitions between the two banks. This technique was crucial for fitting the game's graphics and logic into the Apple II's limited 128K memory. Bank switching allowed developers to access more memory than the CPU could directly address, effectively expanding the system's capabilities. Mechner's implementation showcases the ingenuity required to work within hardware constraints, paving the way for similar techniques in later systems like the NES and SNES. Modern game engines still echo this principle, using memory management techniques to optimize performance."
  - id: "cls-hires-clear-routine"
    line_start: 200
    line_end: 230
    title: "How Black Pixels Were Painted in Bulk"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "The `CLS` routine clears the hi-res screen by writing black pixels across the entire display memory. It uses a loop to fill each line of the screen with the color black, leveraging the Apple II's memory-mapped graphics system. This routine is optimized for speed, with carefully calculated increments and loop conditions to minimize CPU cycles. In the late 1980s, clearing the screen efficiently was a critical task, as it directly impacted the frame rate of graphics-intensive games like Prince of Persia. Mechner's approach reflects the meticulous attention to performance required for cinematic platformers, where smooth transitions and visual clarity were paramount. This technique influenced later graphics programming, emphasizing the importance of efficient screen management."
  - id: "crop-image-clipping"
    line_start: 352
    line_end: 507
    title: "The Algorithm That Cropped the Prince"
    wikipedia_url: "https://en.wikipedia.org/wiki/Clipping_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `CROP` routine handles edge-clipping for images, ensuring that only the visible portion of a graphic is rendered on-screen. It calculates the top, bottom, left, and right edges of the image relative to the screen boundaries, adjusting coordinates and dimensions as needed. If an image is entirely off-screen, the routine exits early, saving processing time. This functionality was critical for Prince of Persia, where characters and objects often moved partially off-screen during gameplay. Mechner's implementation reflects the constraints of the Apple II's graphics system, which lacked hardware support for clipping. The routine's efficiency and precision influenced later games, where similar algorithms became standard for handling partial visibility in 2D and 3D graphics."
  - id: "layrsave-background-preservation"
    line_start: 527
    line_end: 639
    title: "How the Background Was Saved Frame by Frame"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "The `LAYRSAVE` routine preserves the background behind animated characters by storing it in a peel buffer. Before rendering a character, the routine saves the visible portion of the background, allowing it to be restored later using the `PEEL` routine. This technique was essential for creating the game's smooth animations, as it ensured that characters could move seamlessly without disrupting the surrounding graphics. Mechner's use of a peel buffer reflects the influence of rotoscoping, where animation frames are traced over live-action footage. This approach set a precedent for handling dynamic graphics in games, influencing later titles that required similar background preservation techniques."
  - id: "lay-image-rendering"
    line_start: 641
    line_end: 680
    title: "The Routine That Brought the Prince to Life"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_pipeline"
    image_url: ""
    image_caption: ""
    content: "The `LAY` routine is the central method for rendering images on the hi-res screen. It handles edge-clipping, bit-shifting, and mirroring, calling specialized subroutines like `LayGen`, `LayMask`, and `LayXOR` based on the image's opacity and other parameters. This routine is a testament to Mechner's ingenuity, as it encapsulates the complexity of graphics rendering within the constraints of 6502 assembly. By dynamically adjusting rendering techniques based on image properties, `LAY` ensures that the game's animations are smooth and visually consistent. This method influenced later graphics engines, where modular rendering pipelines became standard practice for handling diverse visual effects."
  - id: "laygen-general-rendering"
    line_start: 681
    line_end: 814
    title: "The General Routine for Image Rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_pipeline"
    image_url: ""
    image_caption: ""
    content: "The `LayGen` subroutine handles general image rendering tasks, including AND, OR, and STORE operations. It prepares the image data, calculates offsets, and processes each line of the image, ensuring that it is rendered correctly on the hi-res screen. This routine is optimized for speed and flexibility, allowing it to handle various rendering scenarios. Mechner's implementation reflects the challenges of working with the Apple II's limited graphics capabilities, where every operation had to be carefully planned to achieve smooth animations. The techniques used in `LayGen` influenced later graphics programming, highlighting the importance of modular and efficient rendering pipelines."
  - id: "laymask-mask-and-or"
    line_start: 827
    line_end: 1006
    title: "Masking and Combining Graphics on the Fly"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bitwise_operation"
    image_url: ""
    image_caption: ""
    content: "The `LayMask` routine combines masking and OR operations to render images with complex visual effects. It uses bitwise operations to apply a mask to the image data, ensuring that only specific portions of the graphic are rendered. This technique was crucial for handling transparency and layering in Prince of Persia, where characters and objects often overlapped. Mechner's use of masking reflects the influence of early graphics programming, where bitwise operations were a common solution for achieving visual effects within hardware constraints. The principles demonstrated in `LayMask` became foundational for later graphics engines, influencing how transparency and layering were handled in 2D and 3D games."
  - id: "layxor-bitwise-rendering"
    line_start: 1008
    line_end: 1184
    title: "Bitwise Rendering: XOR for Graphics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bitwise_operation"
    image_url: ""
    image_caption: ""
    content: "The LayXOR routine is a foundational graphics rendering function that uses XOR operations to manipulate pixel data. This approach allows efficient rendering by combining existing screen data with new image data, producing visual effects like transparency or inversion. At the time, the Apple II's limited graphics capabilities required developers to maximize efficiency, and XOR was a clever way to achieve dynamic visuals without additional hardware. Jordan Mechner designed this routine to handle edge cases like offscreen pixels and carryover bytes, ensuring smooth transitions and accurate rendering. This technique influenced later games that used similar bitwise operations for sprite manipulation, particularly in systems with constrained memory and processing power."
  - id: "mlay-mirroring-graphics"
    line_start: 1172
    line_end: 1201
    title: "Mirroring Graphics for Cinematic Effects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mirror_image"
    image_url: ""
    image_caption: ""
    content: "The MLAY routine introduces mirroring capabilities, allowing graphics to be flipped horizontally or vertically. This was essential for creating symmetrical animations and enhancing the cinematic feel of Prince of Persia. By reading image data from right to left and top to bottom, Mechner could reuse assets efficiently while maintaining visual consistency. Mirroring was a common technique in early games to save memory and development time, but here it is implemented with precision to support the game's smooth animations. This routine paved the way for more sophisticated graphics manipulation in later platformers and action games."
  - id: "mlaygen-general-rendering"
    line_start: 1202
    line_end: 1354
    title: "General Rendering: AND, OR, and STORE"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bitwise_operation"
    image_url: ""
    image_caption: ""
    content: "MLayGen is a versatile rendering routine that supports multiple operations, including AND, OR, and direct storage of pixel data. This flexibility allowed Mechner to adapt the rendering process to different visual needs, such as masking or blending layers. The routine includes careful handling of offscreen edges and carryover bytes, ensuring that graphics remain consistent even when partially clipped. By incorporating these operations, Mechner could achieve effects like transparency and layering without additional hardware. This approach influenced later graphics engines, where similar techniques became standard for handling complex visual effects efficiently."
  - id: "mlaymask-layered-masking"
    line_start: 1356
    line_end: 1539
    title: "Layered Masking for Precise Graphics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mask_(computing)"
    image_url: ""
    image_caption: ""
    content: "MLayMask focuses on masking operations, allowing specific parts of an image to be rendered while others are excluded. This technique was crucial for creating layered visuals, such as overlapping sprites or background elements. Mechner's implementation uses bitwise AND and OR operations to combine image data with predefined masks, ensuring that only the desired pixels are displayed. This routine also handles edge cases like offscreen pixels and carryover bytes, maintaining visual integrity across frames. Masking became a standard practice in graphics programming, influencing later engines and tools that relied on similar methods for sprite manipulation and layering."
  - id: "mlayxor-special-xor-effects"
    line_start: 1535
    line_end: 1714
    title: "Special XOR Effects for Dynamic Graphics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bitwise_operation"
    image_url: ""
    image_caption: ""
    content: "MLayXOR builds on the LayXOR routine, introducing specialized XOR operations for dynamic graphics effects. This routine is optimized for scenarios where transparency or inversion is required, allowing sprites to interact visually with the background. Mechner's use of XOR here demonstrates his deep understanding of the Apple II's graphics capabilities, leveraging bitwise operations to achieve effects that would otherwise require more powerful hardware. The routine's efficiency and precision influenced later games that used XOR for similar purposes, particularly in systems with limited resources."
  - id: "fastlay-streamlined-rendering"
    line_start: 1727
    line_end: 1818
    title: "Streamlined Rendering for Speed"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_rendering"
    image_url: ""
    image_caption: ""
    content: "FASTLAY is a highly optimized rendering routine designed for speed. By removing features like offset, clipping, mirroring, and masking, this routine sacrifices flexibility for raw performance. It is intended for scenarios where rendering speed is critical, such as fast-moving animations or large-scale graphics updates. Mechner's decision to include such a streamlined routine reflects the constraints of the Apple II hardware, where every cycle counted. This approach influenced later graphics engines, where similar trade-offs were made to balance performance and visual quality."
  - id: "fastmask-optimized-masking"
    line_start: 1887
    line_end: 1969
    title: "Optimized Masking for High-Speed Rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mask_(computing)"
    image_url: ""
    image_caption: ""
    content: "FASTMASK is an optimized masking routine that prioritizes speed over flexibility. By focusing on essential masking operations and removing features like clipping and mirroring, this routine achieves high performance for rendering masked graphics. Mechner designed FASTMASK to handle scenarios where rapid updates to the screen were required, such as during gameplay. This routine demonstrates how constraints can drive innovation, influencing later graphics engines that adopted similar techniques for efficient rendering."
  - id: "setfastmain-aux-memory-switching"
    line_start: 1971
    line_end: 1988
    title: "Switching Between Main and Auxiliary Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bank_switching"
    image_url: ""
    image_caption: ""
    content: "SETFASTMAIN and SETFASTAUX are routines for switching between main and auxiliary memory banks, a critical feature for managing the Apple II's limited memory. By modifying the FASTLAY routines to expect image tables in different memory banks, Mechner could optimize memory usage and adapt to the game's changing needs. This technique was essential for fitting the game's graphics and logic into the Apple II's constrained environment. Bank switching became a common practice in early computing, influencing memory management techniques in later systems."
  - id: "fastblack-clear-screen-memory"
    line_start: 1994
    line_end: 2048
    title: "How FASTBLACK Clears the Screen in Seconds"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "The FASTBLACK subroutine is designed to clear a specific region of the screen by directly manipulating memory addresses. It calculates the starting and ending points of the region based on parameters like color, page, X and Y coordinates, width, and height. Using nested loops, it iterates over the calculated memory range and writes blank values to the screen memory. This approach bypasses higher-level abstractions, ensuring maximum speed—a necessity for the Apple II's limited graphical capabilities. In 1989, the Apple IIe/IIc were nearing the end of their commercial life, but their graphics capabilities were still being pushed to their limits by developers like Jordan Mechner. The FASTBLACK routine reflects the constraints of the era: programmers had to work directly with hardware registers and memory-mapped graphics to achieve acceptable performance. The Apple II's bank-switched memory added complexity, requiring routines like this to carefully manage memory access. FASTBLACK's efficiency influenced later game programming techniques, especially in the realm of real-time graphics manipulation. Similar direct memory access routines appeared in other cinematic platformers and early graphical adventure games. The concept of optimizing screen clearing routines for speed became standard practice in game engines, including those used in early console development."
  - id: "copyscrn-memory-copy"
    line_start: 2050
    line_end: 2093
    title: "The Screen Copy Routine That Saved Time"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_copy"
    image_url: ""
    image_caption: ""
    content: "COPYSCRN is a memory copy routine that transfers screen data from one region to another. It takes the source and destination screen addresses as input and uses nested loops to copy $2000 bytes of data, iterating through memory in blocks. The routine is optimized for the Apple II's hardware, leveraging direct memory access to ensure fast execution. In the late 1980s, memory manipulation was a critical skill for game developers working on constrained hardware like the Apple II. The COPYSCRN routine exemplifies the low-level programming techniques required to achieve smooth graphical transitions and animations in games like Prince of Persia. By avoiding higher-level abstractions, Mechner ensured that the routine would execute quickly, a necessity for maintaining the game's cinematic feel. This approach to memory copying influenced later game engines and programming practices. The concept of block-based memory manipulation became a staple in performance-critical applications, from early console games to modern graphics engines. COPYSCRN's efficiency likely inspired similar routines in other Apple II games and contributed to the development of optimized memory handling techniques in the gaming industry."
  - id: "inverty-y-coordinate-swap"
    line_start: 2095
    line_end: 2124
    title: "Why INVERTY Reorders Y-Coordinates"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "The INVERTY subroutine swaps and reorders Y-coordinate tables, effectively flipping or transforming graphical data. It iterates through the YLO and YHI tables, swapping values between low and high lines to create a mirrored effect. The routine also adjusts the indices to move closer to the center of the table, ensuring a smooth transformation. This technique was critical for implementing the rotoscoped animations in Prince of Persia. Mechner filmed his brother performing the game's iconic moves and traced the frames to create realistic animations. Transforming and manipulating coordinate tables allowed the game to display these animations dynamically, adapting them to different screen configurations and gameplay scenarios. INVERTY's approach to graphical transformations influenced later games that relied on table-based graphics manipulation. The use of precomputed tables for animation and graphical effects became standard practice in the industry, appearing in games across platforms like the NES and Sega Genesis. Mechner's innovative use of rotoscoping and coordinate manipulation set a precedent for cinematic realism in games, inspiring titles like Another World and Flashback."

---

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