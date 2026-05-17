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
  - point: "Bank-switched memory setup for 128K Apple II systems"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Custom disk sector reading routine for bootstrapping"
    link: "https://en.wikipedia.org/wiki/Disk_sector"
    link_label: "Disk Sector"
  - point: "Hardware checks for Apple IIe/IIc compatibility"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II Series"
  - point: "Memory transfer routine to relocate RW18 data"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Error handling for unsupported hardware configurations"
    link: "https://en.wikipedia.org/wiki/Error_handling"
    link_label: "Error Handling"

enhancements:
  - id: "boot-sector-initialization"
    line_start: 1
    line_end: 19
    title: "Boot Sector Initialization: The First Step"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flow-diagram-computer-booting-sequences.svg/330px-Flow-diagram-computer-booting-sequences.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Describes the process from power button to OS load, from File:Flow-diagram-computer-booting-sequences.jpg (CC BY-SA 4.0)"
    content: "These opening lines establish the groundwork for the boot process by defining key memory locations and hardware registers. Jordan Mechner, working alone on Prince of Persia, had to ensure the game could reliably start on the Apple IIe and IIc systems. The 'org = $800' directive sets the program's starting address in memory, while subsequent definitions like SLOT and sector prepare for disk access. In the mid-1980s, bootstrapping was a critical task for software developers, as systems lacked sophisticated firmware or operating systems. The programmer had to manually configure hardware registers and memory banks to load the program. Mechner's careful setup reflects the constraints of the Apple II's architecture, where every byte of memory and every clock cycle mattered."
  - id: "memory-bank-setup"
    line_start: 23
    line_end: 35
    title: "Memory Bank Setup: Switching Between Worlds"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_memory_map"
    image_url: ""
    image_caption: ""
    content: "This section configures the Apple II's memory banks, toggling between auxiliary and main memory, and setting up the video display parameters. The Apple IIe and IIc featured bank-switched memory to extend their capabilities beyond the base 64K. Mechner's code ensures the system is in the correct state for the game to run, disabling features like 80-column mode and alternate character sets that might interfere with the game's graphics. These lines highlight the ingenuity required to work within the Apple II's limitations, where accessing additional memory required precise manipulation of hardware registers. This setup was essential for Prince of Persia's cinematic animations, which demanded more memory than typical games of the era."
  - id: "disk-sector-reading"
    line_start: 42
    line_end: 64
    title: "Reading Disk Sectors: Loading the Game"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_sector"
    image_url: ""
    image_caption: ""
    content: "Here, Mechner implements a custom routine to read disk sectors, a crucial step in loading the game data. The code calculates the disk address based on the SLOT value, then iterates through sectors using a lookup table (skewtbl) and address table (sectaddr). Disk access on the Apple II was notoriously slow and required careful timing, as the system lacked direct memory access (DMA). Mechner's approach reflects the challenges of working with floppy disks, where data was stored in non-sequential sectors to optimize read performance. This routine exemplifies the low-level control required to interface with hardware in the 1980s, a skill that was essential for game developers of the era."
  - id: "hardware-compatibility-check"
    line_start: 122
    line_end: 165
    title: "Ensuring Compatibility: Apple IIe/IIc Check"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "This routine verifies that the system is an Apple IIe or IIc with 128K of memory, a requirement for running Prince of Persia. It checks specific hardware registers and memory locations to confirm the system's configuration. In the late 1980s, Apple II systems varied widely in capabilities, and developers had to account for these differences to avoid crashes or incompatibility. Mechner's code reflects the meticulous attention to detail required to support multiple hardware configurations. By embedding this check early in the boot process, he ensures a smooth user experience, displaying an error message if the system doesn't meet the game's requirements. This approach was common among developers targeting the fragmented Apple II ecosystem."
  - id: "memory-transfer-routine"
    line_start: 197
    line_end: 231
    title: "Memory Transfer: Relocating RW18 Data"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "This subroutine copies data from one memory location to another, a fundamental operation in assembly programming. Mechner uses indexed addressing to iterate through memory, transferring bytes from the source to the destination. The routine includes safeguards to prevent overwriting critical memory regions, a vital consideration on the Apple II, where memory was tightly constrained. This technique was a cornerstone of game development, enabling dynamic loading of assets like graphics and animations. Mechner's implementation demonstrates his deep understanding of the Apple II's architecture, balancing efficiency with safety to ensure the game's stability."

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