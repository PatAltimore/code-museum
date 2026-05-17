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
description: "The foundational assembly code for Prince of Persia, showcasing ingenious memory management and cinematic design on the Apple II."

summary:
  - point: "Bank-switched memory management for 128K Apple II"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Routines for cinematic animation and gameplay"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Use of rotoscoping for realistic character movement"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Soft switches for hardware control on Apple II"
    link: "https://en.wikipedia.org/wiki/Apple_II_technical_details"
    link_label: "Apple II technical details"
  - point: "Jordan Mechner's solo development effort"
    link: "https://en.wikipedia.org/wiki/Jordan_Mechner"
    link_label: "Jordan Mechner"

enhancements:
  - id: "jump-table-master-section"
    line_start: 18
    line_end: 31
    title: "Jump Table: Organizing the Game's Core"
    wikipedia_url: "https://en.wikipedia.org/wiki/Jump_table"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flow-diagram-computer-booting-sequences.svg/330px-Flow-diagram-computer-booting-sequences.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Describes the process from power button to OS load, from File:Flow-diagram-computer-booting-sequences.jpg (CC BY-SA 4.0)"
    content: "This section defines a jump table, a compact way to organize entry points for core routines like FIRSTBOOT, LOADLEVEL, and ATTRACTMODE. Each 'jmp' instruction points to a specific subroutine, allowing the game to quickly branch to different functionalities. In 1989, memory was at a premium, especially on the Apple II, which had only 128K of RAM. Jordan Mechner used this technique to efficiently manage the game's logic without wasting precious bytes. The jump table reflects the modular design philosophy of the era, enabling easier debugging and updates. This approach persists in modern programming, especially in embedded systems and game engines, where performance and memory efficiency remain critical."
  - id: "rw18-commands"
    line_start: 56
    line_end: 67
    title: "RW18 Commands: Disk Drive Communication"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_Disk_II"
    image_url: ""
    image_caption: ""
    content: "These lines define commands for the RW18 disk drive interface, including operations like turning the drive on/off, seeking tracks, and reading/writing data. The Apple II relied heavily on disk-based storage, and efficient disk I/O was crucial for games like Prince of Persia, which had to load large amounts of data for animations and levels. Mechner's code reflects the low-level nature of programming for the Apple II, where developers directly manipulated hardware registers and memory-mapped I/O. This section highlights the ingenuity required to make the most of limited hardware, a skill that defined the early era of game development."
  - id: "local-vars-memory-allocation"
    line_start: 73
    line_end: 83
    title: "Local Variables: Memory Allocation in Assembly"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zero_page"
    image_url: ""
    image_caption: ""
    content: "Here, Mechner allocates memory for local variables using the 'ds' directive, which reserves space for data storage. Variables like 'dest', 'source', and 'newBGset1' are used to manage graphics and gameplay elements. On the Apple II, memory was divided into pages, with the zero page offering faster access due to shorter addressing. This section demonstrates how Mechner carefully planned memory usage to optimize performance, a necessity given the constraints of the hardware. The practice of efficient memory management remains relevant today, especially in embedded systems and mobile devices."
  - id: "default-level-coordinates"
    line_start: 91
    line_end: 94
    title: "Default Level Coordinates: Setting the Stage"
    wikipedia_url: "https://en.wikipedia.org/wiki/Level_(video_gaming)"
    image_url: ""
    image_caption: ""
    content: "This section defines the default coordinates for the game's starting levels, 'demolevel' and 'firstlevel'. These values determine where the player begins their journey in Prince of Persia. In the late 1980s, level design was a meticulous process, often constrained by hardware limitations. Mechner's choice to hard-code these coordinates reflects the era's reliance on static data structures. This approach ensured consistent gameplay experiences across different Apple II models. The concept of predefined starting points has evolved into dynamic level generation in modern games, but the principle of carefully crafted entry points remains a cornerstone of game design."
  - id: "soft-switches-hardware-control"
    line_start: 133
    line_end: 161
    title: "Soft Switches: Direct Hardware Manipulation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_technical_details"
    image_url: ""
    image_caption: ""
    content: "Soft switches are memory-mapped locations that control hardware features on the Apple II, such as enabling high-resolution graphics or switching between main and auxiliary memory. This section lists the addresses for these switches, which Mechner used to toggle hardware states dynamically during gameplay. In the 1980s, developers often had to interact directly with hardware to achieve desired effects, as operating systems provided minimal abstraction. Mechner's mastery of these low-level techniques allowed him to push the Apple II's capabilities to their limits, creating a visually stunning and responsive game. The use of soft switches exemplifies the hands-on approach of early game programming, a stark contrast to the high-level APIs of today."
  - id: "firstboot-initialization"
    line_start: 186
    line_end: 199
    title: "First Boot: Game Initialization Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: ""
    image_caption: ""
    content: "The FIRSTBOOT routine initializes key game elements, including turning off mixed graphics mode, setting the BBund ID byte, and loading high-resolution tables. This sequence ensures the game starts in a consistent state, ready to display its cinematic visuals. In the late 1980s, boot routines were critical for managing hardware quirks and preparing the system for complex software. Mechner's attention to detail in this routine reflects his commitment to creating a polished experience on the Apple II. Boot routines like this laid the groundwork for modern initialization processes in operating systems and applications, emphasizing reliability and user experience."

---

; excerpt — first 200 lines of 01 POP Source/Source/MASTER.S

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