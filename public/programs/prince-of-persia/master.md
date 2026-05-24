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
description: "The source code for Prince of Persia (1989) reveals the intricate assembly-level programming required to create one of the first cinematic platformers on the Apple II."

summary:
  - point: "Bank-switched memory used to fit 128K constraints"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Rotoscoping animation technique traced filmed movements"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Disk-based level and music loading routines"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Self-running attract mode showcases cinematic storytelling"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"
  - point: "Custom routines for double hi-res graphics manipulation"
    link: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    link_label: "Apple II Graphics"

enhancements:
  - id: "firstboot-initializes-game-environment"
    line_start: 169
    line_end: 227
    title: "FirstBoot: Initializes Game Environment"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "The FIRSTBOOT routine sets up the game environment when the program is first loaded. It disables mixed graphics mode, initializes auxiliary memory, and loads essential hires tables and routines. It also checks for the presence of an Apple IIGS, a more advanced model in the Apple II family, and starts the attract loop. In 1989, programming for the Apple II required careful management of memory and hardware states due to its limited resources. Jordan Mechner used auxiliary memory and bank-switching techniques to fit the game into the 128K constraints. This initialization routine is critical for ensuring the game runs correctly across different Apple II models. The attract loop, which follows, showcases the cinematic storytelling that sets Prince of Persia apart from other games of its time. This approach influenced later games like Another World and Flashback, which also emphasized cinematic experiences."
  - id: "reload-temp-development-routine"
    line_start: 229
    line_end: 243
    title: "Reload: Temp Development Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugging"
    image_url: ""
    image_caption: ""
    content: "The RELOAD routine is a temporary function used during development to reload code and images. It switches the disk drive on, loads permanent data, and then loads stage-specific data before turning the drive off. Debugging and iterative development were challenging in the 1980s due to limited tools and hardware constraints. Developers often included temporary routines like this to streamline testing and debugging. This routine highlights the practical challenges of developing complex games on early hardware. While temporary, routines like RELOAD reflect the iterative process that shaped the final game. Debugging techniques from this era laid the groundwork for modern development practices, including automated testing and continuous integration."
  - id: "loadmusic1-title-screen-music"
    line_start: 245
    line_end: 261
    title: "LoadMusic1: Title Screen Music"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_sound"
    image_url: ""
    image_caption: ""
    content: "The loadmusic1 routine loads the first set of music data for the title screen. It reads data from the disk into main memory and then moves it to auxiliary memory. Music in Prince of Persia plays a significant role in creating its cinematic atmosphere. The Apple II's sound capabilities were limited, relying on simple tones and basic sound effects. Mechner's decision to include music required careful planning to fit audio data alongside graphics and code within the 128K memory limit. This routine showcases the technical ingenuity required to incorporate music into the game. The use of music to enhance storytelling influenced later games, including those on more advanced platforms like the SNES and Sega Genesis."
  - id: "driveon-switches-memory-bank"
    line_start: 291
    line_end: 326
    title: "DriveOn: Switches Memory Bank"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bank_switching"
    image_url: ""
    image_caption: ""
    content: "The driveon1 routine activates the disk drive and switches the memory bank to access data stored in bank 1. It sets auxiliary memory and initializes the drive with the correct ID byte. Bank-switching was a common technique on the Apple II to overcome its limited memory. By switching between memory banks, developers could access more data without exceeding hardware constraints. This routine is a clear example of how Mechner managed the Apple II's hardware limitations to create a complex game. Bank-switching techniques like this were widely used in the 1980s and influenced memory management in later systems, including early consoles like the NES and Sega Master System."
  - id: "savegame-persists-player-progress"
    line_start: 386
    line_end: 413
    title: "SaveGame: Persists Player Progress"
    wikipedia_url: "https://en.wikipedia.org/wiki/Save_(video_gaming)"
    image_url: ""
    image_caption: ""
    content: "The SAVEGAME routine writes 256 bytes of player progress data to the disk. It uses track 23 on side 2, ensuring the game state can be restored later. Saving game progress was a relatively novel feature in the 1980s, as many games relied on passwords or required players to start over each time. Mechner's implementation of a save system reflects his focus on creating a cinematic and immersive experience. By allowing players to save their progress, Prince of Persia encouraged longer play sessions and deeper engagement. Save systems became standard in video games, influencing titles like The Legend of Zelda and later RPGs."
  - id: "loadlevel-loads-game-level-data"
    line_start: 451
    line_end: 481
    title: "LoadLevel: Loads Game Level Data"
    wikipedia_url: "https://en.wikipedia.org/wiki/Level_(video_gaming)"
    image_url: ""
    image_caption: ""
    content: "The LOADLEVEL routine loads level data into the working blueprint buffer in auxiliary memory. It ensures that background and character sets are correctly loaded before gameplay begins. Level loading on the Apple II required careful coordination between disk operations and memory management due to the system's limited resources. Mechner's use of auxiliary memory and backup copies demonstrates his deep understanding of the hardware. This routine exemplifies the technical challenges of creating dynamic and visually rich levels on early computers. Techniques for loading and managing level data evolved significantly, influencing later games like Doom and Quake, which relied on efficient level streaming."
  - id: "attractloop-self-running-demo-mode"
    line_start: 679
    line_end: 709
    title: "AttractLoop: Self-Running Demo Mode"
    wikipedia_url: "https://en.wikipedia.org/wiki/Demo_mode"
    image_url: ""
    image_caption: ""
    content: "The AttractLoop routine creates a self-running demo mode that showcases the game's cinematic storytelling. It cycles through title screens, prologues, and gameplay scenes, providing a preview of the game's experience. Demo modes were a common feature in arcade games to attract players, but their use in home computer games was less frequent. Mechner's inclusion of an attract mode reflects his focus on creating a polished and engaging product. This routine highlights the game's cinematic qualities and serves as a marketing tool to draw players in. Attract modes became a staple in video games, influencing titles across genres and platforms."
  - id: "superepilog-iigs-exclusive-ending"
    line_start: 921
    line_end: 950
    title: "SuperEpilog: IIGS Exclusive Ending"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_IIGS"
    image_url: ""
    image_caption: ""
    content: "The SuperEpilog routine provides a special ending for players using the Apple IIGS, which supported super hi-res graphics. It fades between screens and plays music to create a cinematic conclusion. The Apple IIGS was a more advanced model in the Apple II family, offering improved graphics and sound capabilities. Mechner's decision to include an exclusive ending for IIGS users reflects his commitment to leveraging the best features of the hardware. This routine showcases the game's adaptability across different Apple II models. The use of hardware-specific features influenced later games, which often included enhanced versions for more powerful systems."
  - id: "start-game-logic"
    line_start: 1015
    line_end: 1060
    title: "How Prince of Persia Starts a New Game"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section initializes the game by loading the routines for Stage 3, setting the first level, and preparing auxiliary memory. It includes logic to resume a saved game or start a new one, depending on user input. At the time, handling game states like this was critical for creating a seamless user experience, especially on systems like the Apple II, which lacked modern conveniences like non-volatile memory for saving progress. Mechner's decision to include a resume feature reflects his focus on player immersion and continuity. This approach influenced later games, where saving and resuming became standard features."
  - id: "load-permanent-data"
    line_start: 1062
    line_end: 1166
    title: "The Permanent Data That Powers the Game"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "This routine loads permanent code and data into memory, ensuring critical assets are available throughout the game. It uses bank-switching techniques to manage the limited memory of the Apple II, a constraint that shaped much of the game's design. The hex data blocks represent pre-defined sequences and graphics groups, which are loaded into specific memory tracks. This kind of memory management was a hallmark of 1980s programming, where developers had to squeeze every byte of functionality from hardware. The techniques here influenced later developers working on constrained systems, such as handheld consoles like the Game Boy."
  - id: "reload-auxiliary-memory"
    line_start: 1210
    line_end: 1238
    title: "Recovering Memory After Graphics Wipes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "This routine reloads auxiliary memory that gets wiped during high-resolution title sequences. High-resolution graphics on the Apple II often consumed large portions of memory, requiring developers to reload critical data afterward. Mechner's solution ensures the game can seamlessly transition from cinematic sequences back to gameplay. This approach highlights the challenges of managing memory on early computers, where every graphical flourish came at a cost. Techniques like this laid the groundwork for memory management strategies in later systems, such as the dynamic memory allocation seen in modern game engines."
  - id: "stage-3-loading"
    line_start: 1308
    line_end: 1367
    title: "Loading Stage 3: Full Animation and Gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "This routine loads the data for Stage 3, which features full animation and gameplay. It carefully manages both auxiliary and main memory, loading character animations and background graphics. The use of rotoscoping for animations—where Mechner traced filmed footage of his brother—required precise memory handling to ensure smooth playback. This section exemplifies the cinematic ambition of Prince of Persia, which aimed to deliver fluid, lifelike motion on hardware that was not designed for such feats. The game's animation techniques influenced later titles like Another World and Flashback, which also pursued cinematic realism."
  - id: "play-song-routines"
    line_start: 1369
    line_end: 1406
    title: "Interruptible and Non-Interruptible Music Playback"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "These routines handle music playback, offering both interruptible and non-interruptible modes. The non-interruptible mode plays music continuously, ignoring sound toggles, while the interruptible mode checks for user input and pauses if necessary. Music was a key part of the immersive experience in Prince of Persia, and Mechner's implementation reflects the importance of audio in creating atmosphere. The ability to interrupt music playback was particularly useful for integrating gameplay events with sound. This technique influenced later games, where dynamic audio systems became standard, adapting music to player actions in real time."
  - id: "disk-error-handling"
    line_start: 1429
    line_end: 1444
    title: "What Happens When the Wrong Disk Is Inserted"
    wikipedia_url: "https://en.wikipedia.org/wiki/Floppy_disk"
    image_url: ""
    image_caption: ""
    content: "This routine handles disk errors by prompting the user to insert the correct disk side and waiting for a keypress. Disk swapping was a common requirement for larger games on floppy disk systems, and handling errors gracefully was critical for maintaining player engagement. Mechner's approach ensures the game can recover from user mistakes without crashing or losing progress. This kind of user-centric error handling became a hallmark of well-designed software, influencing later games and operating systems that prioritized clear, actionable error messages."

---

```asm
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

* Load as much of Stage 3 as we can keep

 jsr loadperm

* Turn off drive

 jsr driveoff

* Check for IIGS

 jsr checkIIGS ;returns IIGS

* Start attract loop

 jsr initsystem ;in topctrl

 lda #0
 sta invert ;rightside up Y tables

 lda #1
 sta soundon ;Sound on

 jmp AttractLoop

*-------------------------------
*
*   Reload code & images
*   (Temp routine for game development)
*
*-------------------------------
RELOAD
 do 0
 jsr driveon

 jsr loadperm
 jsr LoadStage3

 jmp driveoff
 fin

*-------------------------------
*
* Load music (1K)
*
* Load at $5000 mainmem & move to aux l.c.
*
*-------------------------------
* Load music set 1 (title)

loadmusic1
 jsr setmain
 lda #34
 sta track
 jsr rw18
 db RdSeq,$4e ;we only want $50-53
]mm jsr setaux
 jmp xmovemusic

*-------------------------------
* Load music set 2 (game)

loadmusic2
 jsr setmain
 lda #20
 sta track
 jsr rw18
 db RdGrp.Inc
 hex 50,51,52,53,00,00,00,00,00
 hex 00,00,00,00,00,00,00,00,00
 jmp ]mm

*-------------------------------
* Load music set 3 (epilog)

loadmusic3
 jmp loadmusic1

*-------------------------------
setaux sta RAMRDaux
 sta RAMWRTaux
 rts

setmain sta RAMRDmain
 sta RAMWRTmain
 rts

*-------------------------------
*
*  D R I V E   O N
*
*  In: A = delay
*      BBundID
*
*  Sets auxmem
*
*-------------------------------
driveon lda #0
driveon1 sta :delay

 jsr setaux ;set auxmem

* switch in bank 1 (RW18)

 bit RWBANK1
 bit RWBANK1 ;1st 4k bank

* set Bbund ID

 lda BBundID
 sta :IDbyte

 jsr rw18
 db ModID
:IDbyte hex a9 ;Bbund ID byte

* turn on drive 1

 jsr rw18
 db DrvOn
:drive hex 01
:delay hex 00
 rts

*-------------------------------
*
*  D R I V E   O F F
*
*-------------------------------
driveoff jsr rw18
 db DrvOff

* switch in bank 2

 bit RWBANK2
 bit RWBANK2 ;2nd 4k bank

 sta $c010 ;clr kbd

 jmp setaux ;& set auxmem

*-------------------------------
*
*  Set first level/demo level
*
*-------------------------------
set1stlevel
 lda firstlevel
 ldx firstlevel+1
SetLevel sta params
 stx params+1
]rts rts

setdemolevel
 lda demolevel
 ldx demolevel+1
 jmp SetLevel

*-------------------------------
*
* Check track 22 to make sure it's the right disk
*
* (Scratch page 2 mainmem--return w/mainmem set)
*
*-------------------------------
checkdisk
 jsr setaux
 ldx #POPside2
 stx BBundID

 jsr driveon
:loop jsr setmain
 lda #22
 sta track
 jsr rw18
 db RdGrpErr.Inc
 hex 02,00,00,00,00,00,00,00,00
 hex 00,00,00,00,00,00,00,00,00
 bcc ]rts
 jsr error
 jmp :loop

*-------------------------------
*
* Save/load game
*
* Write/read 256 bytes of data: sector 0, track 23, side 2
* We scorch an entire track, but on side 2 we can afford it
*
*-------------------------------
SAVEGAME
 jsr checkdisk ;sets main

 sta RAMRDaux
 ldx #15
:loop lda savedgame,x ;aux
 sta $200,x ;main
 dex
 bpl :loop
 sta RAMRDmain

 lda #23
 sta track
 jsr rw18
 db WrtGrpErr
 hex 02,00,00,00,00,00,00,00,00
 hex 00,00,00,00,00,00,00,00,00
 bcc :ok
 jsr whoop
:ok jmp driveoff

*-------------------------------
LOADGAME
 jsr checkdisk ;sets main

 lda #23
 sta track
 jsr rw18
 db RdGrp
 hex 02,00,00,00,00,00,00,00,00
 hex 00,00,00,00,00,00,00,00,00

 sta RAMWRTaux
 ldx #15
:loop lda $200,x ;main
 sta savedgame,x ;aux
 dex
 bpl :loop

 jmp driveoff

*-------------------------------
*
* Load alt. character set (chtable4)
*
* In: Y = CHset4
*
*-------------------------------
LOADALTSET
 sty newCHset

 jsr driveon

 jsr rdch4

 jmp driveoff

*-------------------------------
*
* L O A D   L E V E L
*
* In: bluepTRK, bluepREG
*       TRK = track # (1-33)
*       REG = region on track (0-1)
*     A = BGset1; X = BGset2; Y = CHset4
*
* Load level into "working blueprint" buffer in auxmem;
* game code will make a "backup copy" into aux l.c.
* (which we can't reach from here).
*
* If bg & char sets in memory aren't right, load them in
*
*-------------------------------
LOADLEVEL
 sta newBGset1
 stx newBGset2
 sty newCHset

 jsr driveon

 jsr rdbluep ;blueprint
 jsr rdbg1 ;bg set 1
 jsr rdbg2 ;bg set 2
 jsr rdch4 ;char set 4

 jsr vidstuff

 jmp driveoff

*-------------------------------
setbluep
 lda bluepTRK
 sta track
 lda bluepREG
]rts rts

*-------------------------------
vidstuff
 lda BBundID
 cmp #POPside2
 bne ]rts
 lda $c000
 cmp #"^"
 bne ]rts

 jsr setmain
 lda #12
 sta track
 jsr rw18
 db RdGrp.Inc
 hex 00,00,00,00,00,00,00,00,00
 hex 00,00,00,0c,0d,0e,0f,10,11
:loop jsr rw18
 db RdSeq.Inc
:sm hex 12
 lda :sm
 clc
 adc #$12
 sta :sm
 cmp #$6c
 bcc :loop
 jsr driveoff
 jsr setmain
 jmp $c00

*-------------------------------
* Track data for alt bg/char sets
*
* Set #:        0  1  2  3  4  5  6

bg1trk hex 05,00,07
bg2trk hex 12,02,09
ch4trk hex 0d,03,04,05,0a,0b
ch4off hex 0c,00,06,0c,00,06

*-------------------------------
rdbg1 ldx newBGset1
 cpx BGset1 ;already in memory?
 beq :rts ;yes--no need to load
 stx BGset1
 lda bg1trk,x
 sta track
 jsr rw18
 db RdSeq.Inc,$60
 jsr rw18
 db RdSeq.Inc,$72
]rts
:rts rts

rdbg2 ldx newBGset2
 cpx BGset2
 beq ]rts
 stx BGset2
 lda bg2trk,x
 sta track
 jsr rw18
 db RdSeq.Inc,$84
 rts

rdch4 ldx newCHset
 cpx CHset
 beq ]rts
 stx CHset
 lda ch4trk,x
 sta track
 lda ch4off,x
 beq :off0
 cmp #6
 beq :off6
 cmp #12
 beq :off12
 rts

:off12 jsr rw18
 db RdGrp.Inc
 hex 00,00,00,00,00,00,00,00,00
 hex 00,00,00,96,97,98,99,9a,9b
 jsr rw18
 db RdSeq.Inc,$9c
 rts

:off6 jsr rw18
 db RdGrp.Inc
 hex 00,00,00,00,00,00,96,97,98
 hex 99,9a,9b,9c,9d,9e,9f,a0,a1
 jsr rw18
 db RdGrp.Inc
 hex a2,a3,a4,a5,a6,a7,a8,a9,aa
 hex ab,ac,ad,00,00,00,00,00,00
 rts

:off0 jsr rw18
 db RdSeq.Inc,$96
 jsr rw18
 db RdGrp.Inc
 hex a8,a9,aa,ab,ac,ad,00,00,00
 hex 00,00,00,00,00,00,00,00,00
]rts rts

*-------------------------------
*
* read blueprint
*
*-------------------------------
rdbluep
 jsr setbluep
 bne :reg1

:reg0 jsr rw18
 db RdGrpErr
 hex b7,b8,b9,ba,bb,bc,bd,be,bf
 hex 00,00,00,00,00,00,00,00,00
 bcc ]rts
 jsr error
 jmp :reg0

:reg1 jsr rw18
 db RdGrpErr
 hex 00,00,00,00,00,00,00,00,00
 hex b7,b8,b9,ba,bb,bc,bd,be,bf
 bcc ]rts
 jsr error
 jmp :reg1

*-------------------------------
*
* Copy one DHires page to another
*
*-------------------------------
copy1to2
 lda #$40 ;dest
 ldx #$20 ;org
 bne copydhires

copy2to1
 lda #$20
 ldx #$40

copydhires
 sta IMAGE+1 ;dest
 stx IMAGE ;org

 jsr _copy2000aux
 jmp _copy2000 ;in hires

*-------------------------------
*
*  Cut to princess screen
*
*-------------------------------
CUTPRINCESS
 jsr blackout
 lda #1 ;seek track 0
cutprincess1
 jsr LoadStage2 ;displaces bgtab1-2, chtab4

 lda #pacProom
 jsr SngExpand

 lda #$40
 sta IMAGE+1
 lda #$20
 sta IMAGE ;copy page 1 to page 2
 jmp _copy2000 ;in HIRES

*-------------------------------
*
*  Epilog (You Win)
*
*-------------------------------
EPILOG
 lda #1
 sta soundon
 sta musicon
 jsr blackout
 jsr LoadStage1B

 jsr Epilog

 lda #POPside1
 sta BBundID
 sta $c010
:loop lda $c000
 bpl :loop ;fall thru

*-------------------------------
*
*  A  T  T  R  A  C  T
*
*  Self-running "attract mode"
*
*-------------------------------
ATTRACTMODE
AttractLoop
 lda #1
 sta musicon

 jsr SetupDHires

 jsr PubCredit

 jsr AuthorCredit

 jsr TitleScreen

 jsr Prolog1
]princess
 jsr PrincessScene

 jsr SetupDHires

 jsr Prolog2

 jsr SilentTitle

 jmp Demo

*-------------------------------
*
* Set up double hi-res
*
*-------------------------------
SetupDHires

* Show black lo-res scrn

 jsr blackout

* Load in Stage 1 data

 jmp LoadStage1A

*-------------------------------
*
* "Broderbund Software Presents"
*
*-------------------------------
PubCredit

* Unpack splash screen into DHires page 1

 jsr unpacksplash

* Show DHires page 1

 jsr setdhires

* Copy to DHires page 2

 jsr copy1to2

 lda #44
 jsr tpause

* Unpack "Broderbund Presents" onto page 1

 lda #delPresents
 jsr DeltaExpPop

 ldx #80
 lda #s_Presents
 jsr PlaySongI

 jmp CleanScreen

*-------------------------------
*
* Credit line disappears
*
*-------------------------------
CleanScreen

* Switch to DHires page 2
* (credit line disappears)

 lda PAGE2on

* Copy DHires page 2 back to hidden page 1

 jsr copy2to1

* Display page 1

 lda PAGE2off
]rts rts

*-------------------------------
*
* "A Game by Jordan Mechner"
*
*-------------------------------
AuthorCredit

 lda #42
 jsr tpause

* Unpack byline onto page 1

 lda #delByline
 jsr DeltaExpPop

 ldx #80
 lda #s_Byline
 jsr PlaySongI

* Credit line disappears

 jmp CleanScreen

*-------------------------------
*
* "Prince of Persia"
*
*-------------------------------
SilentTitle
 jsr unpacksplash

 jsr copy1to2

 lda #20
 jsr tpause

 lda #delTitle
 jsr DeltaExpPop

 lda #160
 jmp tpause

*-------------------------------
TitleScreen
 lda #38
 jsr tpause

* Unpack title onto page 1

 lda #delTitle
 jsr DeltaExpPop

 ldx #140
 lda #s_Title
 jsr PlaySongI

* Credit line disappears

 jmp CleanScreen

*-------------------------------
*
*  Prologue, part 1
*
*-------------------------------
Prolog1
 lda #pacProlog
 sta RAMRDaux
 jsr DblExpand

 ldx #250
 lda #s_Prolog
 jmp PlaySongI

*-------------------------------
*
*  Princess's room: Vizier starts hourglass
*
*-------------------------------
PrincessScene
 jsr blackout

 jsr ReloadStuff ;wiped out by dhires titles

 lda #0 ;don't seek track 0
 jsr cutprincess1

 lda #0 ;cut #0 (intro)
 jmp xplaycut ;aux l.c. via grafix

*-------------------------------
*
*  Prologue, part 2
*
*-------------------------------
Prolog2
 lda #pacSumup
 sta RAMRDmain
 jsr DblExpand

 jsr setdhires

 ldx #250
 lda #s_Sumup
 jmp PlaySongI

*-------------------------------
*
* Epilog
*
*-------------------------------
Epilog
 lda IIGS
 bne SuperEpilog ;super hi-res ending if IIGS

 lda #pacEpilog
 sta RAMRDaux
 jsr DblExpand

 jsr setdhires

 lda #s_Epilog
 jsr PlaySongNI
 lda #15
 jsr pauseNI
 jsr unpacksplash
 lda #75
 jsr pauseNI

 lda #s_Curtain
 jsr PlaySongNI
 lda #60
 jsr pauseNI

 jmp blackout

unpacksplash
 lda #pacSplash
 sta RAMRDaux
 jmp DblExpand

*-------------------------------
*
* Super hi-res epilog (IIGS only)
*
*-------------------------------
SuperEpilog
 lda #1 ;aux
 jsr fadein ;fade in epilog screen
 jsr setaux

 lda #s_Epilog
 jsr PlaySongNI

 jsr fadeout
 lda #0 ;main
 jsr fadein ;fade to palace screen
 jsr setaux

 lda #80
 jsr pauseNI

 lda #s_Curtain
 jsr PlaySongNI

 lda #255
 jsr pauseNI

 jsr fadeout ;...and fade to black

 jmp * ;and hang (because it's too much
;trouble to restart)

*-------------------------------
*
*  Demo sequence
*
*-------------------------------
Demo
 jsr blackout

 jsr LoadStage3

 jsr setdemolevel
 jsr rdbluep

 jsr driveoff

* Go to TOPCTRL

 lda #0
 jmp start

*-------------------------------
* non-interruptible pause

pauseNI
:loop sta pausetemp
 ldy #20
:loop1 ldx #0
:loop2 dex
 bne :loop2
 dey
 bne :loop1

 lda pausetemp
 sec
 sbc #1
 bne :loop
]rts rts

*-------------------------------
*
*  Start game? (if key or button pressed)
*
*-------------------------------
StartGame?
 jsr musickeys
 cmp #$80 ;key or button press?
 bcc ]rts ;no

 do FinalDisk
 else
 cmp #kdemo ;temp!
 bne :1
 jmp Demo
:1 cmp #kprincess ;temp!
 bne :2
 jmp ]princess
 fin

:2 cmp #krestart
 bne :3
 jmp AttractLoop
:3 ;fall thru to DOSTARTGAME
*-------------------------------
*
*  Start a game
*
*-------------------------------
DOSTARTGAME
 jsr blackout

* Turn on drive & load Stage 3 routines

:1 jsr LoadStage3

* Load 1st level

 jsr set1stlevel

 jsr rdbluep

* Turn off drive & set aux

 jsr driveoff

* Go to TOPCTRL

 lda #1
 sta musicon

 do DemoDisk
 else

 lda keypress
 cmp #kresume
 bne :newgame

* Resume old game

 lda #4 ;arbitrary
 jmp startresume

 fin

* Start new game

:newgame
 lda #1
 jmp start

*-------------------------------
*
* Load permanent code & data
* (only once)
*
*-------------------------------
loadperm
 lda #3
 sta track

 jsr setaux

 jsr rw18
 db RdSeq.Inc,$0e

 jsr rw18
 db RdGrp.Inc
 hex 04,05,06,07,08,09,0a,0b,0c
 hex 0d,20,21,22,23,24,25,26,27

 jsr setmain
 lda #9
 sta track
 jsr rw18
 db RdSeq.Inc,$84
 jsr rw18
 db RdSeq.Inc,$96

 jsr rw18
 db RdSeq.Inc,$08

 jsr rw18
 db RdGrp.Inc
 hex 1a,1b,1c,1d,1e,1f,a8,a9,aa
 hex ab,ac,ad,ae,af,b0,b1,b2,b3

 jsr rw18
 db RdGrp.Inc
 hex b4,b5,b6,b7,b8,b9,ba,bb,bc
 hex bd,be,bf,00,00,00,00,00,00

*-------------------------------
*
* Load aux l.c. stuff (tracks 19-21 & 34)
* (includes music set 1)
*
* Load into main hires area & move to aux l.c.
*
*-------------------------------
 lda #19
 sta track

 jsr rw18
 db RdGrp.Inc
 hex 00,00,20,21,22,23,24,25,26
 hex 27,28,29,2a,2b,2c,2d,2e,2f

 jsr rw18
 db RdGrp.Inc
 hex 00,00,00,00,30,31,32,33,34
 hex 35,36,37,38,39,3a,3b,3c,3d
 jsr rw18
 db RdSeq.Inc,$3e

 lda #34
 sta track
 jsr rw18
 db RdGrp.Inc
 hex 00,00,50,51,52,53,54,55,56
 hex 57,58,59,5a,5b,5c,5d,5e,5f

 jsr setaux
 lda #1
 sta MSset

 jsr setmain
 jmp Tmoveauxlc

*-------------------------------
*
*  Stage 1: static dbl hires screens -- no animation
*  Stage 2: character animation only (bg is unpacked)
*  Stage 3: full game animation
*
*-------------------------------
*
* Load Stage 1 data (sida A)
*
*-------------------------------
]lsub sta track
:test jsr rw18
 db RdSeqErr.Inc,$40
 bcc :ok
 jsr error
 jmp :test
:ok
 jsr rw18
 db RdSeq.Inc,$52
 jsr rw18
 db RdSeq.Inc,$64
 jsr rw18
 db RdSeq.Inc,$76
 jsr rw18
 db RdSeq.Inc,$88
 rts

LoadStage1A
 jsr driveon

 lda #22
 jsr ]lsub

 jsr setmain
 jsr rw18
 db RdSeq.Inc,$60
 jsr rw18
 db RdSeq.Inc,$72

 jsr loadmusic1

 jsr setaux
 lda #$ff
 sta BGset1
 sta BGset2
 sta CHset

 jmp driveoff

*-------------------------------
*
*  Load stage 1 (side B)
*
*-------------------------------
LoadStage1B
 jsr driveon

 jsr loadmusic3 ;epilog

 lda IIGS
 bne :shires ;Super hi-res ending only if IIGS

 lda #18
 jsr ]lsub
 jmp driveoff

:shires jsr loadsuper ;in unpack
 jmp driveoff

*-------------------------------
*
* Reload 2000-6000 auxmem
* (wiped out by dhires titles)
*
*-------------------------------
ReloadStuff
 jsr driveon

:test lda #4
 sta track
 jsr rw18
 db RdGrpErr
 hex 00,00,00,00,00,00,00,00,00
 hex 00,20,21,22,23,24,25,26,27
 bcc :ok
 jsr error
 jmp :test
:ok
 lda #15
 sta track
 jsr rw18
 db RdSeq.Inc,$28
 jsr rw18
 db RdSeq.Inc,$3a
 jsr rw18
 db RdSeq.Inc,$4c

 jmp driveoff

*-------------------------------
*
*  Load stage 2 data (6000-a800)
*
*-------------------------------
LoadStage2
 ldx BBundID
 cpx #POPside2
 beq LoadStage2B

LoadStage2A
 jsr driveon

 lda #0
 jsr loadch7 ;side A only

 lda #29
]ls2 sta track

:test jsr rw18
 db RdSeqErr.Inc,$60
 bcc :ok
 jsr error
 jmp :test
:ok
 jsr rw18
 db RdSeq.Inc,$72
 jsr rw18
 db RdSeq.Inc,$84
 jsr rw18
 db RdGrp.Inc
 hex 96,97,98,99,9a,9b,9c,9d,9e
 hex 00,00,00,00,00,00,00,00,00

 lda #$ff
 sta BGset1
 sta BGset2
 sta CHset

 jmp driveoff

* Load chtable7 (side A only)

loadch7
 sta recheck0
:test lda #28
 sta track
 jsr rw18
 db RdGrpErr.Inc
 hex 00,00,00,00,00,00,00,00,00
 hex 00,00,00,00,9f,a0,a1,a2,a3
 bcc :ok
 jsr error
 jmp :test
:ok
]rts rts

*-------------------------------
*
*  Load stage 2 routines (side B)
*
*-------------------------------
LoadStage2B
 jsr driveon

 lda #24
 bne ]ls2

*-------------------------------
*
*  Load stage 3
*  Full version (from stage 1)
*
*  Reload 2000-AC00 auxmem, 6000-7200 mainmem
*
*-------------------------------
LoadStage3
 jsr driveon

 lda #4
 sta track

:loop jsr rw18
 db RdGrpErr.Inc
 hex 00,00,00,00,00,00,00,00,00
 hex 00,20,21,22,23,24,25,26,27
 bcc :ok
 jsr error
 jmp :loop
:ok
 jsr rw18
 db RdSeq.Inc,$60
 jsr rw18
 db RdSeq.Inc,$72 ;bgtable1

 jsr setmain
 jsr rw18
 db RdSeq.Inc,$60
 jsr rw18
 db RdSeq.Inc,$72

 jsr setaux

 lda #13
 sta track
 jsr rw18
 db RdGrp.Inc
 hex 00,00,00,00,00,00,00,00,00
 hex 00,00,00,96,97,98,99,9a,9b
 jsr rw18
 db RdSeq.Inc,$9c ;chtable4
 jsr rw18
 db RdSeq.Inc,$28
 jsr rw18
 db RdSeq.Inc,$3a
 jsr rw18
 db RdSeq.Inc,$4c
 jsr rw18
 db RdSeq.Inc,$84 ;bgtable2

 lda #0
 sta BGset1
 sta BGset2
 sta CHset

 jsr loadmusic2

 jmp setaux

*-------------------------------
*
* Play song--interruptible & non-interruptible
*
* (Enter & exit w/ bank 2 switched in)
*
* In: A = song #
*     X = length to pause if sound is turned off
*
*-------------------------------
PlaySongNI ;non-interruptible
;(& ignores sound/music toggles)
 jsr setaux
 jsr xminit
:loop jsr xmplay
 cmp #0
 bne :loop
]rts rts

*-------------------------------
PlaySongI ;interruptible
 jsr setaux
 beq ]rts

 tay
 lda musicon
 and soundon
 beq :pause

 tya
 jsr xminit
:loop jsr StartGame?
 jsr xmplay
 cmp #0
 bne :loop
]rts rts

:pause txa ;falls thru to tpause
*-------------------------------
*
*  In: A = delay (max = 255)
*
*-------------------------------
tpause
:loop sta pausetemp

 ldy #2
:loop1 ldx #0
:loop2 jsr StartGame?
 dex
 bne :loop2
 dey
 bne :loop1

 lda pausetemp
 sec
 sbc #1
 bne :loop
]rts rts

*-------------------------------
*
* Disk error
*
* Prompt user for correct disk side & wait for keypress
*
*-------------------------------
error
 jsr driveoff

 jsr prompt

 jmp driveon

*-------------------------------
 lst
eof ds 1
 usr $a9,1,$a80,*-org
 lst off
```
