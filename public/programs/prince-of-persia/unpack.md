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
description: "The decompression routines of Prince of Persia (1989), showcasing Jordan Mechner's ingenuity in fitting cinematic visuals into the constraints of the Apple II."

summary:
  - point: "Bank-switched memory techniques for Apple II"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Routines for unpacking compressed graphics data"
    link: "https://en.wikipedia.org/wiki/Data_compression"
    link_label: "Data Compression"
  - point: "Use of rotoscoping for animation"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Clever memory manipulation for high-res graphics"
    link: "https://en.wikipedia.org/wiki/Graphics_processing_unit"
    link_label: "Graphics Processing"
  - point: "Solo development by Jordan Mechner"
    link: "https://en.wikipedia.org/wiki/Jordan_Mechner"
    link_label: "Jordan Mechner"

enhancements:
  - id: "single-screen-unpack"
    line_start: 115
    line_end: 245
    title: "Unpacking a single hi-res screen"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_compression"
    image_url: ""
    image_caption: ""
    content: "This routine, labeled `SNGEXPAND`, is responsible for unpacking compressed graphics data into a single high-resolution screen on the Apple II. The code initializes memory pointers and iteratively processes compressed data, expanding it into a usable format. At the time, the Apple II's 128K memory was a tight constraint, especially for a game as visually ambitious as Prince of Persia. Jordan Mechner borrowed this routine from an earlier program, 'DRAZ,' showcasing the collaborative and iterative nature of programming in the 1980s. The unpacking process involves careful manipulation of memory registers and auxiliary/main memory banks, a hallmark of Apple II programming. This routine allowed the game to display cinematic visuals that were groundbreaking for the era, setting a new standard for platformers and inspiring future developers to push hardware limits."
  - id: "double-screen-unpack"
    line_start: 246
    line_end: 258
    title: "Unpacking a double hi-res screen"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "The `DBLEXPAND` routine handles the unpacking of double high-resolution screens, a feature unique to the Apple II's graphics capabilities. This section begins by setting up pointers to the compressed data and then delegates the actual expansion process to the `WipeRgtExp` routine. Double hi-res graphics were a technical marvel on the Apple II, requiring precise control of memory banks and screen buffers. Robert A. Cook contributed to this routine in March 1989, highlighting the collaborative efforts behind Prince of Persia's development. The ability to display double hi-res screens was critical for the game's cinematic feel, allowing for smoother animations and more detailed environments. This routine exemplifies the ingenuity required to deliver cutting-edge visuals on limited hardware."
  - id: "wipe-right-expand"
    line_start: 259
    line_end: 285
    title: "Expanding graphics column by column"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_processing_unit"
    image_url: ""
    image_caption: ""
    content: "The `WipeRgtExp` routine is a clever implementation of column-by-column graphics expansion. It iterates over screen columns, unpacking compressed data and rendering it sequentially. This approach minimizes memory overhead and ensures efficient use of the Apple II's limited processing power. The routine's name, 'Wipe Right Expand,' suggests a visual effect akin to a curtain being drawn across the screen—a fitting metaphor for the cinematic aspirations of Prince of Persia. Column-based rendering was a practical choice, as it allowed the game to dynamically update parts of the screen without requiring a full redraw. This technique contributed to the game's fluid animations and immersive environments, which were revolutionary for the time."
  - id: "delta-expand"
    line_start: 286
    line_end: 363
    title: "Delta compression for efficient storage"
    wikipedia_url: "https://en.wikipedia.org/wiki/Delta_encoding"
    image_url: ""
    image_caption: ""
    content: "The `DeltaExp` routine implements delta compression, a technique that stores only the differences between successive frames or data points. This method is ideal for animations, where changes between frames are often minimal. In Prince of Persia, delta compression allowed Jordan Mechner to fit the game's detailed animations into the Apple II's constrained memory. The routine processes compressed data stored in auxiliary memory, expanding it into screen columns and rows. Delta compression was inspired by similar techniques used in early video and image processing, reflecting Mechner's background in film and his desire to create a cinematic experience. This routine is a testament to the creative problem-solving required to deliver high-quality visuals on limited hardware."
  - id: "expand-column"
    line_start: 364
    line_end: 417
    title: "Column-based graphics expansion"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_processing_unit"
    image_url: ""
    image_caption: ""
    content: "The `ExpandClm` routine focuses on expanding individual columns of graphics data. It processes compressed data byte by byte, applying transformations to reconstruct the original visuals. Column-based expansion was a practical choice for the Apple II, as it allowed for efficient memory usage and reduced processing time. This routine is part of a larger system that enabled Prince of Persia's smooth animations and detailed environments. By breaking down the screen into manageable chunks, Mechner could optimize the game's performance and deliver a visually stunning experience. This technique influenced later games, demonstrating the potential of clever algorithms to overcome hardware limitations."
  - id: "fade-in-effect"
    line_start: 681
    line_end: 741
    title: "Creating cinematic fade-in effects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Visual_effects"
    image_url: ""
    image_caption: ""
    content: "The `FADEIN` routine creates a cinematic fade-in effect, transitioning from a blank screen to a fully rendered image. This visual flourish was part of Jordan Mechner's effort to make Prince of Persia feel like a movie. The routine clears scan line control bytes and initializes the palette to black before gradually revealing the graphics. Fade-in effects were rare on the Apple II, as they required precise manipulation of memory and screen buffers. Mechner's implementation showcases his attention to detail and commitment to creating an immersive experience. This routine set a precedent for visual storytelling in games, influencing the design of future cinematic platformers."
  - id: "fade-out-effect"
    line_start: 742
    line_end: 763
    title: "Ending scenes with a fade-out"
    wikipedia_url: "https://en.wikipedia.org/wiki/Visual_effects"
    image_url: ""
    image_caption: ""
    content: "The `FADEOUT` routine complements the `FADEIN` routine, providing a smooth transition from a rendered image to a blank screen. This effect was used to signal the end of a scene or level, enhancing the game's cinematic quality. Like the fade-in effect, the fade-out required careful control of memory and screen buffers, showcasing Mechner's mastery of the Apple II's hardware. Fade-out effects added a layer of polish to Prince of Persia, making it stand out among other games of the era. This routine reflects Mechner's background in film and his desire to bring cinematic techniques to video games."
  - id: "palette-fade"
    line_start: 765
    line_end: 848
    title: "Dynamic palette fading for transitions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Color_palette"
    image_url: ""
    image_caption: ""
    content: "The `PalFade` routine dynamically transitions between color palettes, creating smooth visual effects for scene changes. This technique was used to enhance the game's cinematic feel, making transitions more engaging and immersive. Palette fading required precise manipulation of the Apple II's graphics registers, a challenging task given the hardware's limitations. Mechner's implementation demonstrates his ability to push the boundaries of what was possible on the Apple II. This routine contributed to the game's reputation as a technical masterpiece, inspiring future developers to experiment with visual effects in their own games."
  - id: "load-super-hires"
    line_start: 849
    line_end: 865
    title: "Loading super hi-res graphics data"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "The `LOADSUPER` routine loads super high-resolution graphics data into memory, preparing it for display. This process involved reading data from disk and storing it in the appropriate memory banks. Super hi-res graphics were a defining feature of Prince of Persia, allowing for detailed animations and environments that set the game apart from its contemporaries. The routine highlights the challenges of working with the Apple II's limited memory and storage capabilities. Mechner's ability to overcome these constraints was key to the game's success, demonstrating the power of creative problem-solving in game development."
  - id: "load-screen-data"
    line_start: 866
    line_end: 883
    title: "Loading screen data from disk"
    wikipedia_url: "https://en.wikipedia.org/wiki/Floppy_disk"
    image_url: ""
    image_caption: ""
    content: "The `loadscrn` routine reads screen data from disk and loads it into memory, enabling the display of detailed graphics. Disk-based storage was a necessity for games like Prince of Persia, which required more data than the Apple II's memory could hold. This routine showcases the interplay between storage and memory management, a critical aspect of game development in the 1980s. Mechner's efficient implementation ensured that the game could deliver its cinematic visuals without compromising performance. This routine reflects the ingenuity required to create complex games on limited hardware, paving the way for future advancements in game design."

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