---
title: "SEQTABLE.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/SEQTABLE.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/SEQTABLE.S"
year: 1989
author: "Jordan Mechner"
slug: "seqtable"
order: 3
description: "The sequence table for Prince of Persia (1989) defines the game's cinematic animations in 6502 assembly, showcasing Jordan Mechner's ingenuity in crafting fluid motion on constrained Apple II hardware."

summary:
  - point: "Defines animation sequences as data-driven routines"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"
  - point: "Uses compact encoding to fit animations into memory"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II series"
  - point: "Demonstrates rotoscoping-inspired animation logic"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Innovative use of bank-switched memory for 128K systems"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank switching"
  - point: "Sequence table reflects cinematic platformer design"
    link: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    link_label: "Cinematic platformer"

enhancements:
  - id: "sequence-table-instructions"
    line_start: 8
    line_end: 25
    title: "Mapping Actions to Compact Codes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/US_patent_1242674_figure_3.png/330px-US_patent_1242674_figure_3.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Patent drawing for Fleischer's original rotoscope. (Public domain)"
    content: "This section defines compact numeric codes for various player actions, such as 'goto', 'aboutface', and 'die'. These codes are later referenced in animation sequences, making the game's logic data-driven. In 1989, memory constraints on the Apple II meant every byte mattered. Jordan Mechner, working solo, had to encode complex animations and gameplay mechanics into a mere 128K of bank-switched memory. By using small integers to represent actions, he minimized the footprint of the game's logic while keeping it flexible. This approach allowed him to focus on the cinematic quality of the animations, inspired by rotoscoping techniques. The compact encoding here reflects the game's innovative design, where fluid motion and storytelling were prioritized despite hardware limitations. This data-driven approach influenced later games, where animation systems became increasingly modular and reusable."
  - id: "sequence-table-animation-entries"
    line_start: 28
    line_end: 147
    title: "Defining the Cinematic Moves"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Prince_of_Persia_1_-_MS-DOS_-_Gameplay.gif?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "Game play animation of the IBM PC version of Prince of Persia. (CC BY-SA 4.0)"
    content: "Here, Mechner defines the sequence table that maps animations to routines. Each entry, such as 'startrun', 'standjump', and 'impale', corresponds to a specific movement or action in the game. The table is a direct result of Mechner's rotoscoping process, where he filmed his brother performing moves and traced them frame by frame. In the mid-1980s, this technique was groundbreaking for video games, as it brought a level of realism and fluidity rarely seen before. The Apple II's limited graphics capabilities required Mechner to be highly efficient in encoding these animations, using direct memory references and compact routines. This table is the backbone of Prince of Persia's cinematic platformer experience, ensuring that every jump, fall, and sword strike feels lifelike. The influence of this design can be seen in modern animation systems, where motion capture and data-driven tables are standard practice."
  - id: "running-animation-sequence"
    line_start: 149
    line_end: 155
    title: "Looping the Running Cycle"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Prince_of_Persia_1_-_MS-DOS_-_Gameplay.gif?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "Game play animation of the IBM PC version of Prince of Persia. (CC BY-SA 4.0)"
    content: "The 'running' sequence defines the logic for the protagonist's continuous running animation. It uses a looped cycle ('runcyc1') to create the illusion of smooth, uninterrupted motion. On the Apple II, achieving fluid animation was a challenge due to the hardware's limited processing power and memory. Mechner's solution was to encode the animation as a series of discrete frames, each tied to specific player actions or states. This approach reflects the constraints of the era, where developers had to balance realism with performance. The running sequence is a testament to Mechner's ability to create lifelike movement within tight technical limits. It set a standard for platformers, influencing how character motion was handled in subsequent games."
  - id: "start-run-sequence"
    line_start: 157
    line_end: 178
    title: "Transitioning into Motion"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The 'startrun' sequence handles the transition from standing to running. It begins with discrete steps ('runstt1' to 'runstt6') before looping into the running cycle ('runcyc1'). This smooth transition is a hallmark of Prince of Persia's cinematic style, where every movement feels deliberate and natural. In 1989, most platformers had abrupt, mechanical animations, but Mechner's rotoscoping-inspired approach brought a new level of realism. The sequence reflects his attention to detail, ensuring that the protagonist's movements mirrored human motion. This innovation contributed to the game's immersive quality, setting it apart from other titles of the era. The concept of smooth transitions between states has since become a staple in animation systems across genres."
  - id: "stand-animation-sequence"
    line_start: 180
    line_end: 187
    title: "Stillness as a Cinematic Choice"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    image_url: ""
    image_caption: ""
    content: "The 'stand' sequence defines the protagonist's idle state, where no action is performed. While seemingly simple, this sequence is crucial for maintaining the game's cinematic feel. In traditional platformers of the 1980s, idle states were often overlooked or static, but Mechner's approach treated every frame as part of the storytelling. The idle animation adds to the game's realism, making the character feel alive even when stationary. This design choice reflects Mechner's background in filmmaking, where every moment contributes to the narrative. The 'stand' sequence is a small but significant part of Prince of Persia's legacy, influencing how idle states are handled in modern games."
  - id: "alert-stand-sequence"
    line_start: 189
    line_end: 197
    title: "Heightened Awareness in Animation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The 'alert stand' sequence represents a heightened state of awareness for the protagonist. This animation is triggered in moments of tension, such as when enemies are nearby. By encoding this state separately, Mechner added a layer of emotional depth to the character's behavior. In 1989, such nuanced animations were rare in video games, where characters typically had limited states. The 'alert stand' reflects Mechner's cinematic vision, where the protagonist's movements convey his inner state. This innovation contributed to the game's immersive storytelling, influencing how character animations are used to express emotion in modern games."

---

; excerpt — first 200 lines of 01 POP Source/Source/SEQTABLE.S

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

*-------------------------------
*  s t a n d
*-------------------------------
stand
 db act,0
 db 15
 db goto
 dw stand

*-------------------------------
* a l e r t   s t a n d
*-------------------------------
goalertstand
 db act,1
alertstand
:loop db 166
 db goto
 dw :loop

*-------------------------------
* a r i s e (skeleton)
*-------------------------------