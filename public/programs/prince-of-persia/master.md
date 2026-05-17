---
title: "MASTER.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/MASTER.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/MASTER.S"
year: 1989
author: "Jordan Mechner"
slug: "master"
order: 4
description: "The master assembly file for Prince of Persia (1989), showcasing memory management, hardware interaction, and cinematic storytelling techniques on the Apple II."
is_excerpt: true
excerpt_lines: 200

summary:
  - point: "Bank-switched memory management to fit the game into 128K"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank switching"
  - point: "Use of rotoscoping for animation, a groundbreaking technique for video games"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Direct hardware interaction with Apple II soft switches for graphics and sound"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Custom routines for loading levels and managing game states"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Single-handed development by Jordan Mechner over four years"
    link: "https://en.wikipedia.org/wiki/Jordan_Mechner"
    link_label: "Jordan Mechner"

enhancements:
  - id: "jump-table-master-routines"
    line_start: 16
    line_end: 31
    title: "Jump table for core game routines"
    wikipedia_url: "https://en.wikipedia.org/wiki/Jump_table"
    image_url: ""
    image_caption: ""
    content: "This section defines a jump table, a common technique in assembly programming to organize and quickly access subroutines. Each `jmp` instruction points to a key routine in the game, such as `FIRSTBOOT`, `LOADLEVEL`, or `ATTRACTMODE`. The programmer, Jordan Mechner, uses this table to centralize control over the game's main operations. In 1989, memory constraints on the Apple II required careful organization of code, and jump tables provided a way to efficiently manage control flow without wasting precious bytes. This design reflects the meticulous planning needed to fit a complex game like Prince of Persia into the limited 128K memory of the Apple II. The jump table also highlights the modular nature of Mechner's code, allowing for easy navigation and debugging. This pattern would later influence game development practices, as modularity became a cornerstone of software engineering."
  - id: "rw18-disk-commands"
    line_start: 43
    line_end: 67
    title: "Disk commands for RW18 interface"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_Disk_II"
    image_url: ""
    image_caption: ""
    content: "Here, Mechner defines commands for the RW18 disk interface, which is responsible for reading and writing data to the Apple II's floppy disk system. Each command is represented by a hexadecimal code, such as `$00` for turning the drive on (`DrvOn`) or `$02` for seeking a track (`Seek`). These commands were essential for loading game levels, saving progress, and managing data on the limited storage medium of floppy disks. In the late 1980s, floppy disks were the primary storage medium for personal computers, and developers had to work within their constraints, such as slow read/write speeds and limited capacity. Mechner's direct interaction with the disk controller showcases his deep understanding of the Apple II hardware. This low-level control allowed him to optimize disk operations, ensuring smooth gameplay despite the hardware limitations. The RW18 interface is a testament to the ingenuity required to create immersive experiences on early computers."
  - id: "soft-switches-apple-ii"
    line_start: 133
    line_end: 161
    title: "Soft switches for Apple II hardware control"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "This section lists the memory addresses for the Apple II's soft switches, which control hardware features like graphics modes, text display, and memory bank switching. For example, `$c05e` enables double high-resolution graphics (`DHIRESon`), while `$c004` switches the RAM to main memory (`RAMWRTmain`). These soft switches were a unique feature of the Apple II, allowing software to directly manipulate hardware settings without requiring additional hardware components. In the 1980s, this level of control was both a blessing and a challenge for developers. It enabled advanced features like the cinematic visuals in Prince of Persia but demanded a deep understanding of the machine's architecture. Mechner's use of these switches demonstrates his mastery of the Apple II platform and his ability to push its capabilities to the limit. The techniques used here laid the groundwork for future generations of game developers, who continued to explore the boundaries of hardware through creative programming."
  - id: "firstboot-initialization"
    line_start: 186
    line_end: 199
    title: "FirstBoot: Initializing the game environment"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: ""
    image_caption: ""
    content: "The `FIRSTBOOT` routine is the entry point for initializing the game environment when Prince of Persia starts. It begins by disabling mixed graphics mode (`MIXEDoff`) and setting the auxiliary memory bank (`setaux`). The routine then sets the `BBundID` byte to identify the disk side being used and loads high-resolution graphics tables and routines into main memory. This sequence is critical for preparing the Apple II to display the game's cinematic visuals and manage its complex gameplay. In the late 1980s, bootstrapping a program on the Apple II involved direct manipulation of hardware registers and memory banks, as operating systems were minimal and offered little abstraction. Mechner's careful orchestration of these steps reflects the challenges of working on a machine with limited resources. The `FIRSTBOOT` routine is not just a technical necessity; it's the foundation for the game's immersive experience, ensuring that the hardware is ready to deliver the groundbreaking animation and storytelling that Prince of Persia is known for."

---

* master 3.5
DemoDisk = 0
FinalDisk = 1

org = $f880
 lst off
*-------------------------------
*
*  M  A  S  T  E  R
*
*  (3.5" version)
*
*  Sits in main l.c.
*
*-------------------------------
 org org

 jmp FIRSTBOOT
 jmp LOADLEVEL
 jmp RELOAD
 jmp LoadStage2
 jmp RELOAD

 jmp ATTRACTMODE
 jmp CUTPRINCESS
 jmp SAVEGAME
 jmp LOADGAME
 jmp DOSTARTGAME

 jmp EPILOG
 jmp LOADALTSET

*-------------------------------
 lst
 put eq
 lst
 put gameeq
 lst off

Tmoveauxlc = moveauxlc-$b000

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
* Local vars

 dum locals

]dest ds 2
]source ds 2
]endsourc ds 2

newBGset1 ds 1
newBGset2 ds 1
newCHset ds 1

 dend

*-------------------------------
* Passed params

params = $3f0

*-------------------------------
* Coordinates of default load-in level

demolevel db 33,0
firstlevel db 33,1

*-------------------------------
* Hi bytes of crunch data
* Double hi-res (stage 1)

pacSplash = $40
delPresents = $70
delByline = $72
delTitle = $74
pacProlog = $7c
pacSumup = $60 ;mainmem
pacEpilog = $76 ;side B

* Single hires (stage 2)

pacProom = $84

*-------------------------------
* Music song #s
* Set 1 (title)

s_Presents = 1
s_Byline = 2
s_Title = 3
s_Prolog = 4
s_Sumup = 5
s_Princess = 7
s_Squeek = 8
s_Vizier = 9
s_Buildup = 10
s_Magic = 11

* Set 2 (epilog)

s_Epilog = 1
s_Curtain = 2

*-------------------------------
* Soft switches

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
kprincess = "p"-$60 ;temp!
kdemo = "d"-$60 ;temp!
krestart = "r"-$60
kresume = "l"-$60

*-------------------------------
*
* Notes:
*
* Game code sits in auxmem & aux l.c. and uses aux z.p.
*
* Routines in main l.c. (including MASTER and HIRES)
* are called via intermediary routines in GRAFIX (in auxmem).
*
* RW18 sits in bank 1 of main language card;
* driveon switches it in, driveoff switches it out.
*
*-------------------------------
*
*  F I R S T B O O T
*
*-------------------------------
FIRSTBOOT
 lda MIXEDoff
 jsr setaux

* Set BBund ID byte

 lda #POPside1
 sta BBundID

* Load hires tables & add'l hires routines

 sta RAMWRTmain
 lda #2
 sta track
 jsr rw18