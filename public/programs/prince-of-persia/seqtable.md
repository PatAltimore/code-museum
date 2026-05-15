---
title: "SEQTABLE.S"
program: "Prince of Persia (Apple II)"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/SEQTABLE.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01%20POP%20Source/Source/SEQTABLE.S"
year: 1989
author: "Jordan Mechner"
slug: "seqtable"
order: 3
description: "The animation state machine — 114 named movement sequences, each one a byte stream encoding frames filmed from real human motion."

summary:
  - point: "114 movement sequences cover every action: running, jumping, sword fighting, dying, drinking a potion"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Mechner filmed his brother David performing moves, then traced every frame into sprite data"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "The sequence byte stream uses a tiny virtual machine: goto, chx, chy, act, die, nextlevel"

enhancements:
  - id: "seq-opcodes"
    line_start: 1
    line_end: 22
    title: "A Tiny Animation Virtual Machine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Virtual_machine"
    image_url: ""
    image_caption: ""
    content: "Before the sequence data comes the instruction set for the animation interpreter — a tiny virtual machine with 15 opcodes, all stored as negative byte values so they can be distinguished from positive frame indices. goto jumps to another sequence. chx and chy adjust the character's position. act triggers a game-logic action. die kills the character. nextlevel advances to the next dungeon level. The interpreter that consumes these byte streams is elsewhere in the codebase, but the vocabulary is defined right here. It's a domain-specific language for cinematic movement, invented in 1985."

  - id: "sequence-index"
    line_start: 29
    line_end: 117
    title: "114 Movements: A Game Design in Names"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Popap2.png/220px-Popap2.png"
    image_caption: "Prince of Persia on the Apple II. The fluid animation was unlike anything else in 1989. Fair use."
    content: "The dispatch table at the top of the file is an index of every movement in the game. Read the names as a design document: startrun, standjump, runjump, stepfall, jumphangMed, climbup, hangdrop, freefall. The combat system: engarde, advance, retreat, strike, flee, strikeblock, readyblock, blocktostrike, stabkill. The deaths: impale, crush, deadfall, halve. The story: drinkpotion, climbstairs, Pembrace, Pwaiting, Pstroke, Pslump. Every name corresponds to real film footage of David Mechner (Jordan's younger brother) performing the move in a parking lot wearing white clothing, shot with a consumer VHS camera."

  - id: "run-cycle"
    line_start: 118
    line_end: 160
    title: "The Run Cycle: 14 Frames of Rotoscoped Film"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Muybridge_race_horse_animated.gif/320px-Muybridge_race_horse_animated.gif"
    image_caption: "Eadweard Muybridge's motion studies (1878) pioneered the frame-by-frame analysis that Mechner applied to human movement. Public domain."
    content: "The running animation is split into startrun (the acceleration) and runcyc1 through runcyc8 (the looping cycle). Each db line is one animation frame — a sprite index — followed by chx commands that move the character horizontally by the right number of pixels. The tap command triggers a footstep sound at the right frame. The goto at the end loops back to runcyc1. Jordan Mechner spent months calibrating these offsets to match the filmed footage: the run cycle has 14 frames where competing games had 2 or 3. Players in 1989 described it as 'watching a cartoon.' It was unlike anything they had seen in a game."
---
* seqtable
org = $3000
 tr on ;TABS 15,20,40
 lst off
 lstdo off

*-------------------------------
* Seq table instructions:

goto = -1
aboutface = -2
up = -3
down = -4
chx = -5
chy = -6
act = -7
setfall = -8
ifwtless = -9
die = -10
jaru = -11
jard = -12
effect = -13
tap = -14
nextlevel = -15

*-------------------------------
*
*  S E Q U E N C E   T A B L E
*
*-------------------------------
 org org

:1 dw startrun
:2 dw stand
:3 dw standjump
:4 dw runjump
:5 dw turn
:6 dw runturn
:7 dw stepfall
:8 dw jumphangMed
:9 dw hang
:10 dw climbup
:11 dw hangdrop
:12 dw freefall
:13 dw runstop
:14 dw jumpup
:15 dw fallhang
:16 dw jumpbackhang
:17 dw softland
:18 dw jumpfall
:19 dw stepfall2
:20 dw medland
:21 dw rjumpfall
:22 dw hardland
:23 dw hangfall
:24 dw jumphangLong
:25 dw hangstraight
:26 dw rdiveroll
:27 dw sdiveroll
:28 dw highjump
:29 dw step1
:30 dw step2
:31 dw step3
:32 dw step4
:33 dw step5
:34 dw step6
:35 dw step7
:36 dw step8
:37 dw step9
:38 dw step10
:39 dw step11
:40 dw step12
:41 dw step13
:42 dw fullstep
:43 dw turnrun
:44 dw testfoot
:45 dw bumpfall
:46 dw hardbump
:47 dw bump
:48 dw superhijump
:49 dw standup
:50 dw stoop
:51 dw impale
:52 dw crush
:53 dw deadfall
:54 dw halve
:55 dw engarde
:56 dw advance
:57 dw retreat
:58 dw strike
:59 dw flee
:60 dw turnengarde
:61 dw strikeblock
:62 dw readyblock
:63 dw landengarde
:64 dw bumpengfwd
:65 dw bumpengback
:66 dw blocktostrike
:67 dw strikeadv
:68 dw climbdown
:69 dw blockedstrike
:70 dw climbstairs
:71 dw dropdead
:72 dw stepback
:73 dw climbfail
:74 dw stabbed
:75 dw faststrike
:76 dw strikeret
:77 dw alertstand
:78 dw drinkpotion
:79 dw crawl
:80 dw alertturn
:81 dw fightfall
:82 dw efightfall
:83 dw efightfallfwd
:84 dw running
:85 dw stabkill
:86 dw fastadvance
:87 dw goalertstand
:88 dw arise
:89 dw turndraw
:90 dw guardengarde
:91 dw pickupsword
:92 dw resheathe
:93 dw fastsheathe
:94 dw Pstand
:95 dw Vstand
:96 dw Vwalk
:97 dw Vstop
:98 dw Palert
:99 dw Pback
:100 dw Vexit
:101 dw Mclimb
:102 dw Vraise
:103 dw Plie
:104 dw patchfall
:105 dw Mscurry
:106 dw Mstop
:107 dw Mleave
:108 dw Pembrace
:109 dw Pwaiting
:110 dw Pstroke
:111 dw Prise
:112 dw Pcrouch
:113 dw Pslump
:114 dw Mraise

*-------------------------------
* r u n n i n g
*-------------------------------
running
 db act,1
 db goto
 dw runcyc1

*-------------------------------
* s t a r t r u n
*-------------------------------
startrun
 db act,1
runstt1 db 1
runstt2 db 2
runstt3 db 3
runstt4 db 4,chx,8
runstt5 db 5,chx,3
runstt6 db 6,chx,3

runcyc1 db 7,chx,5
runcyc2 db 8,chx,1
runcyc3 db tap,1,9,chx,2
runcyc4 db 10,chx,4
runcyc5 db 11,chx,5
runcyc6 db 12,chx,2
runcyc7 db tap,1,13,chx,3
runcyc8 db 14,chx,4
 db goto
 dw runcyc1
