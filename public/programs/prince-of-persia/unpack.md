---
title: "UNPACK.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/UNPACK.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/UNPACK.S"
year: 1989
author: "Jordan Mechner"
slug: "unpack"
order: 14
description: "This file contains the unpacking routines for Prince of Persia's graphics on the Apple II, showcasing ingenious compression techniques and memory management in 6502 assembly."

summary:
  - point: "Uses rotoscoped animation data compressed for Apple II memory constraints"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Bank-switched memory techniques to fit graphics into 128K"
    link: "https://en.wikipedia.org/wiki/Bank-switching"
    link_label: "Bank Switching"
  - point: "Innovative column-based screen expansion algorithms"
    link: "https://en.wikipedia.org/wiki/Graphics_compression"
    link_label: "Graphics Compression"
  - point: "Single programmer effort by Jordan Mechner over four years"
    link: "https://en.wikipedia.org/wiki/Jordan_Mechner"
    link_label: "Jordan Mechner"
  - point: "Compression and expansion routines influenced later cinematic platformers"
    link: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    link_label: "Cinematic Platformer"

enhancements:
  - id: "single-hi-res-screen-unpack"
    line_start: 114
    line_end: 180
    title: "Unpacking a single hi-res screen"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "This subroutine, SNGEXPAND, is responsible for unpacking a single high-resolution screen from compressed data stored in memory. The routine uses auxiliary memory for reading and main memory for writing, leveraging the Apple II's bank-switching capabilities. The code iterates through compressed data, decoding it into pixel information to be displayed on the screen. At the time, memory constraints on the Apple II were severe, with only 128K available, necessitating clever compression and decompression techniques. Jordan Mechner adapted this routine from earlier work by DRAZ, demonstrating the collaborative nature of early game development. The unpacking process allowed Prince of Persia to feature detailed graphics and smooth animations despite hardware limitations. This approach influenced later games on constrained systems, where efficient data handling was critical."
  - id: "double-hi-res-screen-unpack"
    line_start: 245
    line_end: 252
    title: "Unpacking double hi-res screens"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "The DBLEXPAND subroutine is designed to unpack double high-resolution screens, a feature unique to the Apple II's advanced graphics mode. This routine initializes pointers to compressed data and calls WipeRgtExp for further processing. Double hi-res mode was a significant leap in graphical fidelity for the Apple II, allowing for richer visuals in games like Prince of Persia. Robert A. Cook contributed to this section in March 1989, showcasing the collaborative effort behind the game's technical achievements. The ability to handle double hi-res screens efficiently paved the way for cinematic experiences in gaming, influencing titles that sought to blend storytelling with high-quality visuals."
  - id: "wipe-right-expand"
    line_start: 254
    line_end: 277
    title: "Expanding screen columns from right to left"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_compression"
    image_url: ""
    image_caption: ""
    content: "The WipeRgtExp subroutine processes compressed data to expand screen columns sequentially from right to left. It iterates through column positions, calling ExpandClm to decode and render each column. This method was tailored to the Apple II's graphics architecture, where memory and processing power were limited. The routine's design reflects the constraints of the era, requiring efficient algorithms to achieve smooth visual transitions. By focusing on column-based expansion, Mechner optimized the memory access patterns, reducing latency and improving performance. This technique influenced later compression algorithms in games and utilities, where column-based processing became a standard approach for handling graphical data efficiently."
  - id: "delta-expand-compression"
    line_start: 279
    line_end: 357
    title: "Delta-based compression expansion"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_compression"
    image_url: ""
    image_caption: ""
    content: "DeltaExp is a sophisticated routine that expands compressed data using delta encoding, a method where differences between successive values are stored instead of absolute values. This approach minimizes the size of the data while maintaining fidelity during decompression. The routine reads compressed data from auxiliary memory, decodes it, and writes the expanded data to the screen. Delta encoding was a popular choice in the 1980s for its efficiency in handling repetitive patterns, such as those found in graphics. Mechner's implementation showcases his ingenuity in adapting compression techniques to fit the Apple II's limitations. Delta-based compression became a foundational concept in data storage and transmission, influencing formats like PNG and video codecs."
  - id: "expand-column-sequence"
    line_start: 404
    line_end: 435
    title: "Column sequence expansion for graphics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_compression"
    image_url: ""
    image_caption: ""
    content: "ExpClmSeq is a subroutine that expands a single column of compressed graphics data into its full representation on the screen. It takes the column position, screen position, byte pattern, and repeat count as inputs, iterating through the data to render the column. This routine is a critical part of the game's graphical engine, enabling the efficient display of detailed visuals. The column-based approach aligns with the Apple II's memory layout, optimizing access patterns and reducing processing overhead. Mechner's use of this technique reflects his deep understanding of the hardware, allowing Prince of Persia to achieve a level of graphical sophistication that was groundbreaking for its time. The method influenced later games and applications that required efficient rendering of compressed data."
  - id: "invert-y-tables"
    line_start: 535
    line_end: 566
    title: "Inverting Y-tables for screen manipulation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Coordinate_system"
    image_url: ""
    image_caption: ""
    content: "The INVERTY subroutine swaps low and high lines in the Y-coordinate tables, effectively flipping the screen vertically. This manipulation is crucial for certain graphical effects and optimizations in the game's rendering engine. By inverting the Y-tables, Mechner could achieve effects like mirroring or adjusting the perspective of the visuals. The routine demonstrates the creative use of coordinate transformations to enhance the game's cinematic quality. Techniques like this became standard in graphics programming, influencing the development of engines and tools that rely on coordinate system manipulation for rendering effects."
  - id: "fade-in-effect"
    line_start: 673
    line_end: 735
    title: "Creating a cinematic fade-in effect"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_display_resolution"
    image_url: ""
    image_caption: ""
    content: "FADEIN is a visually striking routine that transitions the screen from black to the game's graphics, creating a cinematic fade-in effect. It clears scan line control bytes and sets the palette to black before gradually revealing the image. This effect adds to the game's immersive experience, emphasizing its storytelling and cinematic ambitions. The routine leverages the Apple II's graphics capabilities, including super hires mode, to achieve smooth transitions. Fade-in effects became a hallmark of cinematic platformers, influencing games that sought to blend gameplay with narrative elements. Mechner's attention to detail in crafting such effects contributed to Prince of Persia's reputation as a groundbreaking title."
  - id: "palette-fade-routine"
    line_start: 765
    line_end: 839
    title: "Dynamic palette fading for visual transitions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Color_palette"
    image_url: ""
    image_caption: ""
    content: "PalFade is a sophisticated routine that dynamically transitions the screen's color palette from one state to another. It compares the current palette with the target palette, adjusting each color incrementally to create a smooth fade effect. This technique enhances the game's visual appeal, contributing to its cinematic quality. Palette fading was a common feature in games of the era, used to create mood and emphasize transitions. Mechner's implementation showcases his mastery of the Apple II's graphics hardware, pushing the boundaries of what was possible on the platform. The routine influenced later games and engines that relied on palette manipulation for visual effects."

---

* unpack 3.5
ThreeFive = 1
org = $ea00
 lst off
*-------------------------------
*
*  Sits in main l.c. bank 2
*
*-------------------------------
 org org

 jmp SNGEXPAND
 jmp DBLEXPAND
 jmp DELTAEXPPOP
 jmp INVERTY
 jmp DELTAEXPWIPE

 jmp PURPLE
 jmp PROMPT
 jmp BLACKOUT
 jmp CLR
 jmp TEXT

 jmp SETDHIRES
 jmp FADEIN
 jmp LOADSUPER
 jmp FADEOUT

*-------------------------------
 lst
 put gameeq
 lst
 put eq
 lst off

IOUDISoff = $c07f
IOUDISon = $c07e
DHIRESoff = $c05f
DHIRESon = $c05e
HIRESon = $c057
HIRESoff = $c056
PAGE2on = $c055
PAGE2off = $c054
MIXEDon = $c053
MIXEDoff = $c052
TEXTon = $c051
TEXToff = $c050
ALTCHARon = $c00f
ALTCHARoff = $c00e
ADCOLon = $c00d
ADCOLoff = $c00c
ALTZPon = $c009
ALTZPoff = $c008
RAMWRTaux = $c005
RAMWRTmain = $c004
RAMRDaux = $c003
RAMRDmain = $c002
ADSTOREon = $c001
ADSTOREoff = $c000

RWBANK2 = $c083
RWBANK1 = $c08b

*-------------------------------
* RW18 ID bytes

POPside1 = $a9
POPside2 = $ad

* RW18 zero page vars

slot = $fd
track = $fe
lastrack = $ff

* RW18 commands

DrvOn = $00
DrvOff = $01
Seek = $02
RdSeqErr = $03
RdGrpErr = $04
WrtSeqErr = $05
WrtGrpErr = $06
ModID = $07
RdSeq = $83
RdGrp = $84
WrtSeq = $85
WrtGrp = $86
Inc = $40 ;.Inc to inc track

*-------------------------------
*
*  Unpack single hi-res screen into page 1
*  (Sorry about the code--it's lifted directly from DRAZ)
*
*-------------------------------
 dum $00

PAC ds 2
PIC ds 2
V2 ds 1
V3 ds 1
V4 ds 1
V5 ds 1
V8 ds 1
V9 ds 1
VA ds 1
VB ds 1
VC ds 1

 dend

*-------------------------------
SNGEXPAND
 sta RAMRDaux
 sta RAMWRTmain

 STA PAC+1 ;org addr

 LDA #$20
 STA PIC+1 ;dest addr

 LDA #0
 STA PAC
 STA PIC

 LDA #$FE
 STA V8
 LDA #0
 STA VA
 LDY #$27
:4 LDA #$78
 STA V2
 LDA #$20
 STA V3
:0 LDA V2
 SEC
 SBC #$28
 STA V2
 BCS :1
 DEC V3
:1 LDA V2
 STA V4
 LDA V3
 CLC
 ADC #4
 STA V5
:2 LDA V4
 SEC
 SBC #$80
 STA V4
 BCS :3
 DEC V5
:3 LDA V4
 STA PIC
 LDA V5
 CLC
 ADC #$20
 STA PIC+1
:5 LDA PIC+1
 SEC
 SBC #4
 STA PIC+1
 CLC
 BCC :6
:13 LDA PIC+1
 CMP V5
 BNE :5
 LDA V4
 CMP V2
 BNE :2
 LDA V5
 CMP V3
 BNE :2
 LDA V2
 BNE :0
 DEY
 BPL :4
 RTS
:6 BIT VA
 BMI :11
 LDX #0
 LDA (PAC,X)
 STA VB
 CMP V8
 BNE :10
 INC PAC
 BNE :7
 INC PAC+1
:7 LDA (PAC,X)
 STA V9
 INC PAC
 BNE :8
 INC PAC+1
:8 LDA (PAC,X)
 STA VB
 INC PAC
 BNE :9
 INC PAC+1
:9 LDA #$80
 STA VA
 CLC
 BCC :11
:10 LDA VB
 ORA #$80
 STA (PIC),Y
 INC PAC
 BNE :12
 INC PAC+1
:12 CLC
 BCC :13
:11 LDA VB
 ORA #$80
 STA (PIC),Y
 DEC V9
 BNE :13
 LDA #0
 STA VA
 BEQ :13

*-------------------------------
*
*  Unpack crunched double hi-res screen
*
*  Robert A. Cook 3/89
*
*  In: A = hi byte of crunched data address
*      RAMRD set to main/aux depending on where crunched
*        data is stored
*
*-------------------------------

 dum $f0

CrnDatPtr ds 2
XClmPos ds 1
YScrPos ds 1
ByteHld ds 1
RepeatCdn ds 1
ScrBasPtr ds 2

 dend

*-------------------------------
DBLEXPAND
 sta CrnDatPtr+1

 lda #1
 sta CrnDatPtr
;(CrnDatPtr),0 is crunch type (unused)
 jmp WipeRgtExp

*-------------------------------
*
*  Wipe Right Expand
*
*-------------------------------
WipeRgtExp
 lda #0
 sta XClmPos

:Loop lda #0
 sta YScrPos
 jsr ExpandClm

 lda #1
 sta YScrPos
 jsr ExpandClm

 inc XClmPos

 lda XClmPos
 cmp #80
 bne :Loop

]rts rts

*-------------------------------
*
*  Delta Expand
*
*  In: A = hi byte of crunched data address (in auxmem)
*
*-------------------------------
DeltaExp
 sta RAMRDaux

 sta CrnDatPtr+1

 lda #0
 sta CrnDatPtr

 sta XClmPos

:Loop ldy #0
 lda (CrnDatPtr),y
 cmp #-1
 beq :Done

 sta ByteHld
 and #$80
 beq :ExpandOne

 lda ByteHld
 and #$7f
 beq :NewCoord

 tax

 ldy #1
 lda (CrnDatPtr),y
 jsr ExpClmSeq1

 clc
 lda CrnDatPtr
 adc #2
 sta CrnDatPtr
 bcc :a4
 inc CrnDatPtr+1
:a4
 jmp :Next

:NewCoord
 ldy #1
 lda (CrnDatPtr),y
 sta XClmPos

 ldy #2
 lda (CrnDatPtr),y
 sta YScrPos

 clc
 lda CrnDatPtr
 adc #3
 sta CrnDatPtr
 bcc :a7
 inc CrnDatPtr+1
:a7
 jmp :Next

:ExpandOne
 lda ByteHld
 ldx #1
 jsr ExpClmSeq1

 inc CrnDatPtr
 bne :sysi8
 inc CrnDatPtr+1
:sysi8

:Next lda XClmPos
 cmp #$80
 bne :Loop

:Done sta RAMRDmain
]rts rts

*-------------------------------
*
*  Expand Column
*
*-------------------------------
ExpandClm

:Loop ldy #0
 lda (CrnDatPtr),y
 sta ByteHld
 and #$80
 beq :ExpandOne

 ldy #1
 lda (CrnDatPtr),y
 tax
 lda ByteHld
 and #$7f
 jsr ExpClmSeq

 clc
 lda CrnDatPtr
 adc #2
 sta CrnDatPtr
 bcc :a4
 inc CrnDatPtr+1
:a4
 jmp :Next

:ExpandOne
 lda ByteHld
 ldx #1
 jsr ExpClmSeq

 inc CrnDatPtr
 bne :sysi5
 inc CrnDatPtr+1
:sysi5

:Next lda YScrPos
 cmp #192
 bcc :Loop

 rts

*-------------------------------
*
*  Expand Column Sequence
*
*-------------------------------
*
*  In: XClmPos
*      YScrPos
*      A (byte pattern)
*      X (repeat count)
*
*  Out: YScrPos (modified)
*
*-------------------------------
ExpClmSeq
 sta ByteHld
 stx RepeatCdn

:Loop ldx XClmPos
 ldy YScrPos
 lda ByteHld
 jsr PutScrByte

 lda YScrPos
 clc
 adc #2
 sta YScrPos

 dec RepeatCdn
 bne :Loop

 rts

*-------------------------------
*
* Expand Column Sequence 1
*
*-------------------------------
ExpClmSeq1
 sta ByteHld
 stx RepeatCdn

:Loop ldx XClmPos
 ldy YScrPos
 lda ByteHld
 bmi :Next

 jsr PutScrByte

:Next inc YScrPos

 lda YScrPos
 cmp #192
 bne :SkipXInc

 lda #0
 sta YScrPos

 inc XClmPos

:SkipXInc
 dec RepeatCdn
 bne :Loop

 rts

*-------------------------------
*
*  Put DHires Byte Value
*
*-------------------------------
*
*  In:  X (XClmPos)
*       Y (YScrPos)
*       A (Byte value)
*
*-------------------------------
PutScrByte
 sta ByteHld
 ;YScrPos in Y
 lda YLO,y
 sta ScrBasPtr
 lda YHI,y
 ora #$20 ;DHires page 1
 sta ScrBasPtr+1

 txa ;XClmPos in X
 lsr
 tay
 bcs NoAuxSet

 sta RAMWRTaux

NoAuxSet lda ByteHld
 sta (ScrBasPtr),y

 sta RAMWRTmain

]rts rts

*-------------------------------
*
* P U R P L E
*
*-------------------------------
 do ThreeFive
PURPLE rts

 else
 put purple
 fin

*-------------------------------
*
*  Delta Expand (Pop or Wipe)
*
*  In: A = hi byte of crunched data address (in auxmem)
*
*-------------------------------
DELTAEXPPOP
 sta PAGE2on
]DE jsr DeltaExp
 sta PAGE2off
 sta RAMRDaux
 sta RAMWRTaux
]rts rts

DELTAEXPWIPE
 sta PAGE2off
 jmp ]DE

*-------------------------------
*
* Invert Y-tables
*
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
*
* Prompt user to insert correct disk side
*
*-------------------------------
 do ThreeFive
msg1 asc "    Insert Prince of Persia Disk@"
 else
msg1 asc "Insert Prince of Persia Disk, Side "
 fin

msg2 asc "C@"

*-------------------------------
PROMPT
 lda #"A"
 ldx BBundID
 cpx #POPside1
 beq :1
 lda #"B"
:1 sta msg2 ;side A or B?

 jsr blackout

 sta RAMWRTmain

 ldx #0
:loop lda msg1,x
 cmp #"@"
 beq :done
 sta $528+2,x ;midscrn
 inx
 bpl :loop

:done sta RAMWRTaux
 jsr whoop ;whoop spkr

:wloop lda $c000
 ora $c061
 ora $c062
 bpl :wloop
 sta $c010

 jmp clr ;clear screen

*-------------------------------
CLR bit RWBANK2
 bit RWBANK2

 sta $c010

 lda #" "
 jmp _lrcls ;in hires

*-------------------------------
*
* Show black screen (text page 1)
*
*-------------------------------
BLACKOUT
 jsr CLR

TEXT sta RAMRDaux
 jsr vblank
 sta TEXTon
 sta ADCOLoff
 sta PAGE2off
]rts rts

*-------------------------------
* Set dbl hires
*-------------------------------
SETDHIRES
 sta RAMRDaux
 sta RAMWRTaux
 jsr vblank
 sta ADCOLon
 bit HIRESon

 bit DHIRESon
 bit DHIRESoff
 bit DHIRESon
 bit DHIRESoff
 bit DHIRESon ;for old Apple RGB card

 sta TEXToff
 rts

**************************************************
**************************************************
**************************************************
 xc
 xc

stlx mac bank;addr
 hex 9f
 da ]2
 db ]1
 <<<
ldlx mac bank;addr
 hex bf
 da ]2
 db ]1
 <<<

*-------------------------------
*
* FADE IN
*
* In: s-hires data in $2000.9FFF
*     A = 0 main, 1 aux
*
*-------------------------------
FADEIN
 sta RAMRDmain
 sta :sm1+2
 sta :sm2+2

 clc
 xce

 sep $30 ;axy

 lda #%00011110
 sta $C035 ;shadow reg
 lda #$41
 sta $C029 ;SH reg

 rep $30 ;AXY

* Clear scan line control byte table
* and palette 0 to black

 lda #$0000
 ldx #$011E
:scbclr dex
 dex
 stlx $E1;$9D00
 bne :scbclr

* Now move data over

 ldx #$2000
 ldy #$2000
 lda #32000-1
 phb
:sm1 mvn $E1,1 ;main/aux
 plb

* Turn on Super Hires mode

 sep $20
 lda #$C1
 sta $C029
 rep $20

* Move desired palette over to PalFade area

 ldx #$9D00 ;aux mem
 ldy #new_palette
 lda #32-1
 phb
:sm2 mvn 0,1 ;aux to main/aux
 plb

* Now fade in the picture

 bra PalFade ;switches back to e-mode

*-------------------------------
*
* FADE OUT
*
*-------------------------------
FADEOUT
 mx 3

* Clear the "destination" palette back to zero

 ldx #31
 lda #$00
:palclr sta new_palette,x
 dex
 bpl :palclr

* Now fade out

 bra PalFade ;switches back to e-mode

*------------------------------------------------- PalFade
*
* Given current palette at $E19E00.1F, fade to
* new palette given in new_palette
*

new_palette ds 32

PalFade dum 0
:green ds 1
:blue ds 1
 dend

 sec
 xce

 bit $C019
 bmi *-3

 ldy #16

:fadein ldx #3

:fadein2 bit $C019
 bpl *-3

 bit $C019
 bmi *-3

 dex
 bne :fadein2

 ldx #30
:palloop ldlx $E1;$9E01
 and #$0f
 cmp new_palette+1,x
 beq :red_ok
 inc
 blt :red_ok
 dec
 dec

:red_ok stlx $E1;$9E01

 lda new_palette,x
 and #$F0
 sta :green

 ldlx $E1;$9E00
 and #$F0
 cmp :green
 beq :green_ok
 blt :grn_add
 sbc #$20
:grn_add clc
 adc #$10

:green_ok sta :green

 lda new_palette,x
 and #$0F
 sta :blue

 ldlx $E1;$9E00
 and #$0F
 cmp :blue
 beq :blue_ok
 inc
 blt :blue_ok
 dec
 dec

:blue_ok ora :green
 stlx $E1;$9E00

 dex
 dex
 bpl :palloop

 dey
 bpl :fadein

 rts

 xc off
 mx 3

*===============================
*
* Load super hi-res data
*
*-------------------------------
LOADSUPER
 jsr rw18
 db ModID,$79 ;set "side C"

 lda #0
 sta track
 sta RAMWRTmain
 jsr loadscrn ;"Tracks" 0-6: palace (mainmem)

 sta RAMWRTaux
 jmp loadscrn ;"Tracks" 7-13: epilog (auxmem)

*-------------------------------
*
* Load super hi-res screen into $2000.9FFF
*
*-------------------------------
loadscrn
 lda #$20
:loop sta :sm
 jsr rw18
 db RdSeq.Inc
:sm db $20
 lda :sm
 clc
 adc #$12
 cmp #$9e
 bcc :loop ;load 7 tracks
]rts rts

*-------------------------------
 lst
eof ds 1
 usr $a9,2,$a00,*-org
 lst off