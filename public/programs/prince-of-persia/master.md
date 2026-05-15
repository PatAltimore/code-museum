---
title: "MASTER.S (excerpt)"
program: "Prince of Persia (Apple II)"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/MASTER.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01%20POP%20Source/Source/MASTER.S"
year: 1989
author: "Jordan Mechner"
slug: "master"
order: 4
description: "The top-level game controller — boot sequence, attract mode, save/load, music cues, level loading, and the complete Apple II memory map in comments."

summary:
  - point: "MASTER.S is the entry point after BOOT.S hands off control — it orchestrates every major game system"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "The soft-switch address table documents the entire Apple II memory architecture in one place"
    link: "https://en.wikipedia.org/wiki/Apple_II_series#Addressing"
    link_label: "Apple II addressing"
  - point: "Music song numbers, disk track assignments, and memory addresses are all named constants — readable as documentation"

enhancements:
  - id: "jump-table"
    line_start: 1
    line_end: 22
    title: "The Master Jump Table"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dispatch_table"
    image_url: ""
    image_caption: ""
    content: "MASTER.S starts with a jump table — a list of jmp instructions at known offsets. Any other module that needs to call LOADLEVEL, SAVEGAME, ATTRACTMODE, or CUTPRINCESS does so by jumping to a fixed address in this table, not to the implementation directly. This indirection means the implementations can move anywhere in memory during development without breaking callers. It's the same pattern used in ROM firmware. The table also documents the entire high-level architecture of the game at a glance: FIRSTBOOT, LOADLEVEL, RELOAD, LoadStage2, ATTRACTMODE, CUTPRINCESS, SAVEGAME, LOADGAME, DOSTARTGAME, EPILOG, LOADALTSET."

  - id: "rw18-commands"
    line_start: 48
    line_end: 82
    title: "The RW18 Custom Disk Format"
    wikipedia_url: "https://en.wikipedia.org/wiki/Copy_protection"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Floppy_disk_2009_G1.jpg/320px-Floppy_disk_2009_G1.jpg"
    image_caption: "A 5.25-inch floppy disk of the era. Prince of Persia squeezed 18 sectors per track onto these — 12.5% more than standard. Public domain."
    content: "RW18 was Prince of Persia's custom disk I/O driver, written to pack 18 sectors per track onto a standard 5.25-inch floppy instead of the usual 16. The named constants here — RdSeq, RdGrp, WrtSeq, WrtGrp, Seek, DrvOn, DrvOff — are the command bytes sent to the driver. The Inc flag (0x40) ORed onto a command means 'increment the track counter after reading.' This protocol effectively replaced Apple DOS for all disk access. Beyond storage efficiency, the custom format also served as copy protection: conventional disk copy tools couldn't handle 18-sector tracks, so unauthorized duplicates would fail to boot."

  - id: "soft-switches"
    line_start: 130
    line_end: 170
    title: "Mapping the Apple II Memory Architecture"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory-mapped_I/O"
    image_url: ""
    image_caption: ""
    content: "This block of constants is a nearly complete map of the Apple II's memory-mapped I/O space. Every address from $C000 to $C08B controls a hardware feature by being read or written: text/graphics mode, page flipping, double hi-res, auxiliary memory banking, the language card RAM banks. The Apple II had no I/O registers in the conventional sense — hardware was controlled entirely through these 'soft switches,' addresses that triggered state changes on access. Mechner named every one of them. Reading this list is reading the hardware architecture of the Apple IIe. RWBANK1 and RWBANK2 at $C08B/$C083 control which bank of language card RAM is active — crucial for fitting the game into 128K."

  - id: "firstboot"
    line_start: 185
    line_end: 205
    title: "FIRSTBOOT: The Game Wakes Up"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)#Development"
    image_url: ""
    image_caption: ""
    content: "FIRSTBOOT is where control arrives after the two-stage boot loader finishes. The first thing it does is hit MIXEDoff — switching off the mixed text/graphics mode to go full graphics. Then it writes the POPside1 ID byte ($A9) to BBundID, a disk bundling identifier used to verify the correct disk is inserted. The comment 'Load hires tables & add'l hires routines' followed by rw18 calls with track/group parameters reveals the architecture: Prince of Persia streams its graphics data from disk on demand, loading high-resolution screen data track by track. With only 128K of RAM, nothing could be held in memory that wasn't immediately needed."
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
 db RdGrp.Inc
 hex e0,e1,e2,e3,e4,e5,e6,e7,e8
 hex e9,ea,eb,ec,ed,00,00,00,00
