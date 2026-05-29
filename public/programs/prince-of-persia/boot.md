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
description: "The boot sequence of Prince of Persia for the Apple II, showcasing clever memory management and hardware-specific routines to initialize the game environment."

summary:
  - point: "Uses bank-switched memory to fit within Apple II's 128K constraints"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Includes routines to verify hardware compatibility and memory availability"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Demonstrates early cinematic platformer techniques in assembly code"
    link: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    link_label: "Cinematic Platformer"
  - point: "Employs direct hardware manipulation for memory and display setup"
    link: "https://en.wikipedia.org/wiki/6502"
    link_label: "6502 Microprocessor"
  - point: "Contains a memory copy routine with warnings about potential data loss"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"

enhancements:
  - id: "boot-sector-initialization"
    line_start: 23
    line_end: 64
    title: "Boot Sector Setup: The Game's First Steps"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: ""
    image_caption: ""
    content: "This section initializes the boot sector, setting up the Apple II environment for the game. It begins by configuring memory and display settings, such as turning off auxiliary memory and alternate character sets. The code then prepares the disk slot and sector for reading, using a skew table to optimize disk access. This was critical for loading the game efficiently on the Apple II's limited hardware. In the mid-1980s, bootstrapping a program was a delicate task, requiring precise manipulation of hardware registers to ensure compatibility across different Apple II models. Jordan Mechner's approach here reflects his deep understanding of the platform, gained through years of solo development. The skew table technique, borrowed from disk optimization practices, allowed faster access to game data, reducing load times. This careful attention to hardware constraints laid the groundwork for the game's seamless experience. Later games and systems would adopt similar techniques for efficient disk access, influencing the design of early operating systems and game engines."
  - id: "skew-table-for-disk-access"
    line_start: 66
    line_end: 70
    title: "The Skew Table: Faster Disk Reads"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_sector"
    image_url: ""
    image_caption: ""
    content: "The skew table defines the order in which disk sectors are read, optimizing access speed by accounting for the physical layout of data on the disk. This technique was common in the era of floppy disks, where sequential reading could be slowed by the rotational latency of the disk. By reordering sector access, Mechner ensured that the game loaded efficiently despite the Apple II's modest hardware. This optimization was vital for maintaining the game's fluidity, especially given its cinematic ambitions. The skew table reflects the ingenuity required to overcome hardware limitations, a hallmark of 1980s programming. Similar techniques were later used in file systems like FAT and early CD-ROM drivers, influencing how data was retrieved in consumer computing."
  - id: "stage-two-boot-process"
    line_start: 91
    line_end: 117
    title: "Stage Two: Preparing for Game Execution"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: ""
    image_caption: ""
    content: "This section transitions the boot process to stage two, initializing key memory regions and preparing the system for the game's main execution. It checks for 128K of memory, a requirement for running Prince of Persia, and sets up the disk drive for further data loading. The code includes routines to zero out reset vectors and seek the first track on the disk, ensuring a clean slate for the game. In the mid-1980s, memory constraints were a constant challenge, and developers often had to write custom routines to verify and manage available resources. Mechner's careful handling of these tasks reflects the precision required to make ambitious games like Prince of Persia work on limited hardware. This stage of the boot process showcases the meticulous planning behind the game's technical foundation, influencing later developers who sought to push the boundaries of early home computers."
  - id: "memory-checker-routine"
    line_start: 119
    line_end: 136
    title: "Memory Checker: Ensuring Compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The CHECKER routine verifies the presence of auxiliary memory, a critical requirement for running Prince of Persia on the Apple II. It writes and reads test values to specific memory locations, ensuring that the system meets the game's 128K memory requirement. This was a necessary step in an era when hardware configurations varied widely, even within the same family of computers. Mechner's routine reflects the challenges of developing for the Apple II, where compatibility checks were essential to avoid crashes or unpredictable behavior. This approach influenced later software, where pre-launch hardware diagnostics became standard practice. Developers of operating systems and games for early PCs often included similar routines to ensure their programs could run reliably on diverse hardware setups."
  - id: "hardware-compatibility-check"
    line_start: 140
    line_end: 165
    title: "Checking for Apple IIe/IIc Compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "This section verifies that the system is an Apple IIe or IIc with 128K of memory, rejecting incompatible models. It reads the family ID byte and checks specific hardware flags to ensure the game can run. If the system fails these checks, the code branches to an error routine that displays a message to the user. This compatibility check reflects the fragmented nature of the Apple II ecosystem in the 1980s, where developers had to account for variations in hardware capabilities. Mechner's careful handling of these checks ensured that Prince of Persia could run smoothly on supported systems, avoiding frustration for players. This approach influenced later software development, where compatibility checks became a standard feature of installers and boot routines, ensuring reliable operation across diverse hardware."
  - id: "error-message-for-incompatible-systems"
    line_start: 167
    line_end: 187
    title: "What Happens When the Hardware Fails"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_message"
    image_url: ""
    image_caption: ""
    content: "The NOT128K routine handles the case where the system fails the compatibility check, displaying an error message to the user. It turns off the disk drive and prints \"REQUIRES A //C OR //E WITH 128K\" on the screen, ensuring players understand why the game cannot run. This user-friendly approach reflects Mechner's focus on providing clear feedback, even in failure scenarios. In the 1980s, error handling was often overlooked in game development, leading to cryptic crashes or silent failures. By including a clear message, Mechner set a standard for better user communication, influencing later developers to prioritize transparency in error handling. This routine exemplifies the attention to detail that made Prince of Persia a polished and professional product."
  - id: "memory-copy-routine"
    line_start: 193
    line_end: 203
    title: "The Memory Copy Routine That Could Wipe Out 64K"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The moverm18 and movemem routines copy memory from one location to another, a common task in assembly programming. The code includes a warning about potential data loss if the source and destination ranges overlap, highlighting the risks of low-level memory manipulation. This routine reflects the challenges of working with constrained hardware, where developers had to write their own memory management functions. Mechner's careful documentation of the risks involved shows his awareness of the pitfalls of assembly programming. Memory copy routines like this one became standard in later programming languages and operating systems, influencing the design of functions like memcpy in C and similar utilities in modern software development. The warning included here serves as a reminder of the precision required in early programming, where a single mistake could lead to catastrophic data loss."

---

```asm
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
```