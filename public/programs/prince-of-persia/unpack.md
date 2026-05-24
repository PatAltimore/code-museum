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
description: "This file contains routines for unpacking and manipulating graphics data in Prince of Persia (1989), showcasing clever techniques to work within the constraints of the Apple II hardware."

summary:
  - point: "Uses bank-switched memory to fit graphics into 128K"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II hardware"
  - point: "Routines for unpacking compressed graphics data"
    link: "https://en.wikipedia.org/wiki/Data_compression"
    link_label: "Data compression"
  - point: "Innovative use of rotoscoping for animation"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Cinematic platformer genre pioneered by this game"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"
  - point: "Optimized assembly code for graphics manipulation"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly language"

enhancements:
  - id: "single-screen-unpack"
    line_start: 114
    line_end: 243
    title: "How One Routine Unpacks a Screen"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_compression"
    image_url: ""
    image_caption: ""
    content: "The SNGEXPAND routine unpacks a single high-resolution screen from compressed data stored in memory. It uses auxiliary memory for reading and main memory for writing, leveraging the Apple II's bank-switching capabilities. The routine iterates through compressed data, performing arithmetic operations to decode and write pixel data to the screen buffer. This section demonstrates the challenges of working with limited memory and processing power on the Apple II, where every byte and cycle mattered. In 1989, the Apple IIe/IIc was already considered outdated compared to newer machines like the IBM PC and Macintosh, but its affordability and established user base made it a viable platform for games. Jordan Mechner, the game's creator, adapted techniques from earlier Apple II games and his own prior work to maximize graphical fidelity within the constraints. The use of compressed graphics allowed Prince of Persia to include detailed animations and backgrounds without exceeding the 128K memory limit. This unpacking technique influenced later games on constrained platforms, such as the NES and Sega Genesis, where similar methods were used to decompress graphics on-the-fly. It also laid groundwork for modern real-time decompression algorithms used in game engines like Unity and Unreal, where compressed textures are unpacked dynamically to save storage space."
  - id: "double-screen-unpack"
    line_start: 245
    line_end: 252
    title: "Unpacking Double Hi-Res Screens"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "The DBLEXPAND routine handles the unpacking of double high-resolution screens, a feature unique to later Apple II models. This mode allowed for higher graphical detail by combining two memory pages into a single display. The routine initializes pointers and jumps to the WipeRgtExp subroutine, which processes the compressed data column by column. Double hi-res graphics were a major selling point of the Apple IIe/IIc, introduced in the early 1980s. By 1989, developers like Mechner were pushing the limits of this capability to create visually stunning games. The technique used here reflects the ingenuity required to deliver cinematic visuals on hardware that lacked dedicated graphics processors. This approach to handling double hi-res screens influenced other developers working on the Apple II and similar systems, inspiring techniques for managing multi-page graphics buffers. It also foreshadowed the use of tiled rendering in modern GPUs, where large textures are processed in smaller chunks to optimize memory usage."
  - id: "wipe-right-expand"
    line_start: 254
    line_end: 277
    title: "Column-by-Column Graphics Expansion"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_pipeline"
    image_url: ""
    image_caption: ""
    content: "The WipeRgtExp routine processes compressed graphics data column by column, expanding it into the screen buffer. It loops through each column, calling the ExpandClm subroutine to decode and write pixel data. This columnar approach was a practical solution for the Apple II's memory layout, where screen data was stored in interleaved rows and columns. In the late 1980s, developers often had to work around hardware limitations by designing algorithms tailored to the quirks of specific machines. The Apple II's graphics memory was notoriously difficult to work with, requiring careful manipulation of pointers and offsets. Mechner's solution here reflects a deep understanding of the hardware and a commitment to optimizing performance. This technique of column-by-column processing influenced later games on similar hardware, including the Commodore 64 and ZX Spectrum. It also parallels modern graphics pipelines, where data is processed in chunks to improve efficiency. The routine's focus on memory optimization and real-time processing remains relevant in today's game development, particularly for mobile and embedded systems."
  - id: "delta-expand"
    line_start: 279
    line_end: 357
    title: "Delta Compression: Saving Bytes, Adding Complexity"
    wikipedia_url: "https://en.wikipedia.org/wiki/Delta_encoding"
    image_url: ""
    image_caption: ""
    content: "DeltaExp is a routine that unpacks graphics data compressed using delta encoding, a method where only changes between successive data points are stored. This technique reduces the size of the data but requires additional computation to reconstruct the original image. The routine reads compressed data from auxiliary memory, decodes it, and writes it to the screen buffer column by column. Delta encoding was a popular compression method in the 1980s, especially for graphics and audio data. It was well-suited to systems like the Apple II, where memory and storage were limited. Mechner's implementation here reflects the trade-offs developers faced: sacrificing CPU cycles for reduced memory usage. This routine's use of delta compression influenced later games and applications that needed to store large amounts of data in limited space. The technique is still used today in video codecs like H.264 and VP9, where delta encoding helps compress successive frames. Mechner's work on Prince of Persia demonstrates how early game developers anticipated modern data compression strategies."
  - id: "invert-y-tables"
    line_start: 535
    line_end: 579
    title: "Flipping the Screen: Y-Table Inversion"
    wikipedia_url: "https://en.wikipedia.org/wiki/Coordinate_system"
    image_url: ""
    image_caption: ""
    content: "The INVERTY routine swaps the top and bottom halves of the screen by inverting the Y-coordinate lookup tables. This operation is performed by iterating through the tables and swapping values until the center is reached. The routine is used to create visual effects, such as flipping the screen during transitions or animations. In the Apple II era, developers often manipulated lookup tables to achieve graphical effects without directly modifying the screen buffer. This approach was faster and more memory-efficient, as the tables could be precomputed and reused. Mechner's use of Y-table inversion reflects his understanding of the Apple II's graphics architecture and his ability to exploit it for creative purposes. The technique of table-based transformations influenced later games and graphics engines, where lookup tables are used for effects like texture mapping and lighting. It also parallels modern shader programming, where transformations are applied to vertices and pixels using precomputed data. Mechner's work here highlights the enduring value of lookup tables in graphics programming."
  - id: "fade-in-out"
    line_start: 673
    line_end: 842
    title: "The Art of Fading: Smooth Transitions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Fade_(audio/visual)"
    image_url: ""
    image_caption: ""
    content: "The FADEIN and FADEOUT routines create smooth transitions by gradually changing the screen's palette. FADEIN initializes the palette to black and then fades it to the desired colors, while FADEOUT does the reverse. These routines use the PalFade subroutine to interpolate between the current and target palettes. Smooth transitions were a hallmark of cinematic platformers like Prince of Persia, where visual effects were used to enhance storytelling and immersion. On the Apple II, achieving these effects required careful manipulation of hardware registers and memory. Mechner's implementation reflects his focus on creating a polished and cinematic experience despite the limitations of the platform. The concept of fading palettes influenced later games and graphics engines, where transitions are used to create mood and guide the player's attention. It also parallels modern techniques like alpha blending and gradient interpolation, which are used in shaders and graphical user interfaces. Mechner's work on fading routines demonstrates how early game developers anticipated the needs of modern graphics programming."
  - id: "load-super-hires"
    line_start: 844
    line_end: 880
    title: "Loading Super Hi-Res: A Graphics Breakthrough"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "The LOADSUPER routine loads super high-resolution graphics data into memory, preparing it for display. It uses the rw18 subroutine to read data from the disk and stores it in the appropriate memory pages. This routine is critical for handling the detailed visuals of Prince of Persia, which were a major selling point of the game. Super hi-res graphics were introduced in later Apple II models, allowing for greater detail and color depth. Mechner's use of this mode reflects his commitment to pushing the limits of the hardware to deliver a visually stunning experience. The routine's reliance on disk-based data highlights the challenges of working with limited memory and storage. The technique of loading and managing super hi-res graphics influenced later games on similar platforms, where developers sought to maximize visual fidelity. It also parallels modern graphics engines, where textures and models are streamed from disk to memory to optimize performance. Mechner's work here demonstrates how early game developers laid the groundwork for modern graphics programming."

---

```asm
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
```
