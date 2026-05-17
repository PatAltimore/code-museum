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
description: "The animation sequence table for Prince of Persia (1989), defining the game's cinematic movements and transitions."

summary:
  - point: "Defines animation sequences for Prince's movements"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Uses compact data structures to fit within Apple II memory constraints"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II series"
  - point: "Rotoscoping-inspired sequences mapped to assembly routines"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Bank-switched memory techniques for 128K Apple II"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank switching"

enhancements:
  - id: "sequence-table-instructions"
    line_start: 8
    line_end: 24
    title: "Mapping game actions to numeric codes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/US_patent_1242674_figure_3.png/330px-US_patent_1242674_figure_3.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Patent drawing for Fleischer's original rotoscope. (Public domain)"
    content: "This section defines numeric codes for various actions and events in the game, such as 'goto', 'aboutface', 'up', 'down', and 'die'. These codes serve as shorthand for animation sequences and gameplay mechanics, enabling compact representation in memory. In 1989, Jordan Mechner faced the challenge of fitting an ambitious cinematic platformer into the limited memory of the Apple IIe/IIc, which had only 128K of RAM. By using numeric codes, Mechner could efficiently reference actions without duplicating large blocks of data. This approach reflects the ingenuity required to work within hardware constraints of the era. These codes would later be referenced throughout the sequence table, forming the backbone of Prince's fluid movements and interactions. The compactness of this system allowed Mechner to implement a wide range of animations while leaving room for other game logic, a critical factor in achieving the game's groundbreaking cinematic quality."
  - id: "sequence-table-animation-mapping"
    line_start: 33
    line_end: 146
    title: "Defining animation sequences for Prince's movements"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Still_Waters%2C_Silent_Watcher.jpg/330px-Still_Waters%2C_Silent_Watcher.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Still Waters, Silent Watcher (CC BY-SA 4.0)"
    content: "This section maps numeric codes to specific animation routines, such as 'startrun', 'stand', 'runjump', and 'impale'. Each routine corresponds to a distinct movement or action performed by the Prince, creating the game's signature fluidity. Mechner used rotoscoping to trace animations from footage of his brother performing the moves, ensuring lifelike motion. The Apple II's limited graphical capabilities required these animations to be encoded efficiently, with each routine represented by a small set of instructions. This mapping is a testament to Mechner's ability to translate cinematic ideas into technical implementations. The result was a game that felt alive, with realistic character movements that set a new standard for the platformer genre. These sequences became iconic, influencing later games and demonstrating the potential of animation-driven storytelling in video games."
  - id: "running-sequence"
    line_start: 151
    line_end: 154
    title: "The running sequence: fluid motion in assembly"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The 'running' sequence is a key animation in Prince of Persia, encapsulating the fluid motion that defines the game's aesthetic. This section uses compact data structures to specify the actions and transitions involved in running, including references to 'runcyc1', which details the cyclical movement of the Prince's legs. Mechner's rotoscoping technique ensured that even this basic action felt lifelike, a significant achievement given the limitations of the Apple II's graphical capabilities. The running sequence is a microcosm of the game's design philosophy: prioritizing realism and cinematic quality within tight technical constraints. This approach influenced the development of future platformers, which sought to replicate the seamless animation and immersive gameplay pioneered by Prince of Persia."
  - id: "start-run-sequence"
    line_start: 159
    line_end: 177
    title: "Starting the run: building momentum"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The 'startrun' sequence captures the initial movements of the Prince as he begins to run. This section includes a series of 'db' (define byte) instructions that specify the frames and transitions required to build momentum. Each frame is carefully crafted to ensure a smooth transition from standing to running, reflecting Mechner's commitment to realism. The use of 'chx' commands to adjust the character's horizontal position demonstrates the meticulous attention to detail in creating lifelike movement. In the late 1980s, such fluid transitions were rare in video games, especially on hardware as limited as the Apple II. Mechner's innovative use of assembly language allowed him to overcome these limitations, setting a new standard for animation in platformers. The 'startrun' sequence is a foundational element of the game's dynamic movement system, influencing the design of countless action games that followed."
  - id: "stand-sequence"
    line_start: 182
    line_end: 186
    title: "Standing still: a moment of calm"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The 'stand' sequence represents the Prince in a neutral, stationary pose. While seemingly simple, this sequence is crucial for transitions between actions, serving as a baseline state. The 'db act,0' instruction indicates no active movement, while the 'goto' command loops back to the same state, ensuring the Prince remains idle until another input is received. In the context of the Apple II's limited processing power, even this basic sequence required careful optimization to avoid unnecessary memory usage. Mechner's attention to detail ensured that every frame, even those depicting inactivity, contributed to the game's cinematic feel. The 'stand' sequence exemplifies the balance between technical efficiency and artistic expression that defines Prince of Persia."
  - id: "alert-stand-sequence"
    line_start: 191
    line_end: 196
    title: "Alert stand: tension in stillness"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The 'alert stand' sequence portrays the Prince in a heightened state of readiness, adding a layer of tension to the gameplay. This section uses a loop to maintain the alert pose, with the 'db goto' command cycling back to the same state. The subtle difference between 'stand' and 'alert stand' reflects Mechner's cinematic approach to game design, where even minor variations in posture contribute to the narrative. In 1989, such attention to detail was groundbreaking, as most games focused on functional rather than expressive animations. By incorporating these nuances, Mechner elevated Prince of Persia beyond a typical platformer, creating a game that felt alive and immersive. The 'alert stand' sequence is a small but significant example of how Mechner's background in filmmaking influenced his approach to game development."

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