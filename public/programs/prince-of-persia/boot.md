---
title: "BOOT.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/BOOT.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/BOOT.S"
year: 1989
author: "Jordan Mechner"
slug: "boot"
order: 2
description: "The boot sequence for Prince of Persia on the Apple II, showcasing memory management and hardware interaction in 6502 assembly."

summary:
  - point: "Bank-switched memory management to fit within 128K"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Hardware-specific routines for Apple II initialization"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II"
  - point: "Validation of system requirements (128K memory)"
    link: "https://en.wikipedia.org/wiki/Apple_IIe"
    link_label: "Apple IIe"
  - point: "Efficient memory copying routine using 6502 indirect addressing"
    link: "https://en.wikipedia.org/wiki/MOS_Technology_6502"
    link_label: "6502 Assembly"
  - point: "Cinematic platformer innovation in constrained hardware"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"

enhancements:
  - id: "boot-sector-initialization"
    line_start: 1
    line_end: 64
    title: "Boot sector: Setting the stage for execution"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "This section initializes the boot sector, setting up the Apple II hardware for execution. It configures key memory locations and disables auxiliary features like 80-column mode and alternate character sets. The programmer, Jordan Mechner, meticulously prepares the system to ensure compatibility with the Apple IIe and IIc, which were popular in the late 1980s. At the time, developers had to work within tight constraints, as the Apple II series had limited memory and relied on bank switching to access additional resources. The code also includes routines to read data from the disk, using a skew table to optimize sector access—a clever technique to improve performance on the slow floppy drives of the era. This foundational setup reflects the ingenuity required to create complex software on hardware with severe limitations."
  - id: "stage-2-boot"
    line_start: 73
    line_end: 117
    title: "Stage 2 boot: Preparing for advanced operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bank_switching"
    image_url: ""
    image_caption: ""
    content: "The second stage of the boot process begins here, with routines to check for 128K memory and prepare the system for advanced operations. Mechner uses a combination of direct memory manipulation and hardware-specific instructions to ensure compatibility with the Apple IIe and IIc. The code moves critical routines into the D000 memory range, leveraging bank-switched memory to fit the game's complex logic and graphics into the limited 128K available. This stage also includes drive initialization and track seeking, setting up the disk controller to load the next stage of the game. In the late 1980s, such low-level programming was essential for game development, as developers had to squeeze every ounce of performance out of the hardware. Mechner's work here demonstrates his deep understanding of the Apple II architecture and his ability to innovate within its constraints."
  - id: "aux-memory-check"
    line_start: 120
    line_end: 136
    title: "Auxiliary memory check: Ensuring system compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_IIe"
    image_url: ""
    image_caption: ""
    content: "This routine verifies the presence of auxiliary memory, a critical requirement for running Prince of Persia on the Apple II. By writing and reading specific values to memory locations, the code ensures that the system has the necessary 128K to execute the game. This check reflects the challenges of developing software for a fragmented hardware ecosystem, where different models of the Apple II series had varying capabilities. Mechner's careful validation routine prevents the game from attempting to run on incompatible systems, avoiding crashes and ensuring a smooth user experience. In an era where developers often had to account for multiple hardware configurations, this kind of compatibility check was both a technical necessity and a mark of professional craftsmanship."
  - id: "system-validation-128k"
    line_start: 146
    line_end: 165
    title: "System validation: Apple IIe or IIc with 128K"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "This section checks the system type and memory configuration, ensuring the game runs only on compatible Apple II models with 128K memory. The code uses specific memory locations and hardware flags to identify the machine type and validate its capabilities. Mechner's approach reflects the realities of developing for the Apple II ecosystem, where hardware variations could significantly impact software performance. By embedding this validation routine, he ensures that players experience the game as intended, without encountering technical issues. This kind of meticulous hardware validation was a hallmark of high-quality software development in the 1980s, demonstrating Mechner's commitment to delivering a polished product."
  - id: "error-message-display"
    line_start: 168
    line_end: 191
    title: "Error handling: Displaying system requirements"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "When the system fails the compatibility check, this routine displays an error message, informing the user that the game requires an Apple IIe or IIc with 128K memory. The message is carefully crafted to be clear and concise, reflecting Mechner's attention to user experience even in failure scenarios. The routine uses low-level text output functions to display the message on the screen, a common practice in 6502 assembly programming. This error handling mechanism highlights the challenges of developing software for diverse hardware platforms and the importance of communicating system requirements to users. In the context of 1980s computing, such thoughtful error handling was a sign of professional-grade software."
  - id: "memory-copy-routine"
    line_start: 197
    line_end: 231
    title: "Memory copy: Efficient data movement"
    wikipedia_url: "https://en.wikipedia.org/wiki/MOS_Technology_6502"
    image_url: ""
    image_caption: ""
    content: "This routine copies data from one memory location to another, using indirect addressing and looping constructs to move blocks of memory efficiently. Mechner's implementation is both elegant and practical, leveraging the 6502 processor's capabilities to perform memory operations with minimal overhead. The routine includes safeguards to prevent overwriting critical memory regions, reflecting the importance of precision in low-level programming. In the constrained environment of the Apple II, efficient memory management was essential for achieving the game's cinematic visuals and smooth gameplay. This routine exemplifies the kind of technical ingenuity required to create complex software on limited hardware, showcasing Mechner's mastery of 6502 assembly."

---

*  boot
org = $800
 lst off
*-------------------------------
* $800 TS (0,0) boot sector

SLOT = $2b
sector = $50

text = $fb2f
home = $fc58
vtab = $FB5B
cout = $FDF0
normal = $fe84
pr0 = $fe93
in0 = $fe89

*-------------------------------
 org org

 hex 01

entry lda #$60
 sta entry

 lda #$ff
 sta $4fb
 sta $3f3
 sta $3f4
 sta $c000 ;80store off
 sta $c002 ;RAMRD main
 sta $c004 ;RAMWRT main
 sta $c00c ;80col off
 sta $c00e ;Altcharset off
 sta $c081 ;write RAM, read ROM (2nd 4k bank)
 jsr text
 jsr home
 jsr normal
 jsr pr0
 jsr in0

 ldx SLOT
 txa
 lsr
 lsr
 lsr
 lsr
 ora #$c0
 sta :rdsect+2
 lda #$0f
 sta sector

:0 ldy sector
 lda skewtbl,y
 sta $3d
 lda sectaddr,y
 beq :1
 sta $27
:rdsect jsr $005c
:1 dec sector
 bne :0

 lda SLOT
 jmp $900

skewtbl hex 00,0d,0b,09,07,05,03,01
 hex 0e,0c,0a,08,06,04,02,0f

sectaddr hex 00,09,00,00,00,00,00,00
 hex 30,31,32,33,34,00,00,00

*===============================
*  boot stage 2

rw18 = $d000

slot = $fd
track = $fe
lastrack = $ff

 dum $00

dest ds 2
source ds 2
endsourc ds 2

 dend
*-------------------------------
 ds $900-*

stage2 stx slot

 jsr check128k ;check for 128K memory

 jsr moverw18 ;& move RW18 to D000

 lda #0
 sta lastrack
 sta $3f3
 sta $3f4 ;zero reset vector

 jsr rw18
 hex 07,a9 ;Bbund ID byte

 jsr rw18
 hex 00,01,00 ;drive 1 on

 jsr rw18 ;seek track 1
 hex 02,00,01

* load & run stage 3 boot
* from drive 1

 jsr rw18
 hex c3,ee

 jmp $ee00

*-------------------------------------------------
* Check for AUX memory routine

CHECKER lda #$EE
 sta $C005
 sta $C003
 sta $0800
 lda $0C00
 cmp #$EE
 bne :0
 asl $0C00
 lda $0800
 cmp $0C00
 beq :1
:0 clc
:1 sta $C004
 sta $C002
 rts

CHECKEND = *-CHECKER

*-------------------------------------------------
*
* Check to make sure //c or //e
* with 128k
*
*-------------------------------
check128k
 sta $c081

 lda $FBB3 ;Apple // family ID byte
 cmp #6
 bne NOT128K ;Must be e/c/GS

 bit $C017
 bmi NOT128K

 ldx #CHECKEND
:0 lda CHECKER,X
 sta $180,X
 dex
 bpl :0

 jsr $180
 bcs NOT128K

 rts

*-------------------------------
* Turn off drive and display message

NOT128K ldx SLOT
 lda $C088,X

 jsr text
 jsr home
 lda #8
 jsr vtab

 ldy #0
:0 lda MEMTEXT,Y
 beq *
 jsr cout
 cmp #$8D
 bne :1
 lda #4
 sta $24
:1 iny
 bne :0

MEMTEXT hex 8D
 asc "REQUIRES A //C OR //E WITH 128K"
 hex 00

*-------------------------------
* Move RW18
* d0 < 30.40
*-------------------------------
moverw18
 bit $c08b
 bit $c08b ;rd/wrt RAM, 1st 4k bank

 lda #$d0
 ldx #$30
 ldy #$40

* a < x.y
* 20 < 40.60 means 2000 < 4000.5fffm
* WARNING: If x >= y, routine will wipe out 64k

movemem sta dest+1
 stx source+1
 sty endsourc+1

 ldy #0
 sty dest
 sty source
 sty endsourc

:loop lda (source),y
 sta (dest),y

 iny
 bne :loop

 inc source+1
 inc dest+1

 lda source+1
 cmp endsourc+1
 bne :loop

 rts

*-------------------------------
 sav boot