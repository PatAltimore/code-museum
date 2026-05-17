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
description: "Animation sequence table for Prince of Persia's cinematic platforming"
is_excerpt: true
excerpt_lines: 200

summary:
  - point: "Sequence table defines animation states and transitions"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"
  - point: "Rotoscoping inspired realistic character movement"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Bank-switched memory used to fit animations into 128K"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"

enhancements:
  - id: "seqtable-instructions"
    line_start: 10
    line_end: 24
    title: "Command shortcuts for animation logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ranger-Idle.gif/330px-Ranger-Idle.gif?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Character animation, video game sprite made using Adobe Animate CC0 Public Domain (CC0)"
    content: "These lines define symbolic constants for various animation commands, such as `goto`, `up`, `down`, and `die`. Each constant is assigned a negative numerical value, which will later be used to encode sequences of actions in the animation system. In 1989, Jordan Mechner was working within the constraints of the Apple II's 6502 processor, which had limited memory and processing power. By using symbolic constants, he could make the code more readable and manageable while ensuring efficient execution. This approach reflects the careful planning required to fit a cinematic platformer into the Apple II's 128K memory. These constants were used to control the transitions between animation states, enabling fluid and realistic character movement. The use of negative values was likely a deliberate choice to distinguish commands from other data types in the sequence table."
  - id: "sequence-table-data"
    line_start: 33
    line_end: 146
    title: "Mapping animation states to routines"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines the sequence table, which maps animation states to their corresponding routines. Each state is represented by a label (e.g., `:1`, `:2`) and a pointer to the routine that handles it (e.g., `dw startrun`, `dw stand`). The table includes a wide range of animations, from basic movements like running and jumping to complex actions like sword fighting and drinking potions. Mechner's use of rotoscoping—tracing live-action footage of his brother performing these moves—allowed him to create realistic animations that were groundbreaking for the time. The sequence table is a testament to Mechner's meticulous attention to detail, as he had to manually encode each animation and ensure smooth transitions between states. This system laid the foundation for the game's cinematic feel, which was a major innovation in platforming games. The table also highlights the constraints of the Apple II, as Mechner had to fit all these animations into the limited memory available."
  - id: "running-animation"
    line_start: 151
    line_end: 154
    title: "Defining the running animation cycle"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "The `running` routine defines the animation cycle for the character's running motion. It uses a combination of commands (`act`, `goto`) and pointers (`dw runcyc1`) to orchestrate the sequence of frames. Running is a fundamental action in Prince of Persia, as the game's platforming challenges often require precise timing and movement. Mechner's design ensures that the running animation is smooth and responsive, enhancing the player's immersion. The use of a separate routine for running reflects the modular nature of the game's animation system, which allowed Mechner to reuse and adapt routines for different contexts. This approach was crucial for fitting the game's complex animations into the Apple II's limited memory."
  - id: "start-run-animation"
    line_start: 159
    line_end: 177
    title: "Transitioning into a running state"
    wikipedia_url: "https://en.wikipedia.org/wiki/Video_game_animation"
    image_url: ""
    image_caption: ""
    content: "The `startrun` routine handles the transition from a standing state to a running state. It defines a sequence of frames (`runstt1` to `runstt6`) that gradually accelerate the character into full motion. This attention to detail was part of Mechner's effort to create realistic animations that mirrored human movement. The routine also includes the running cycle (`runcyc1` to `runcyc8`), which loops to sustain the running motion. In 1989, animation systems like this were rare in video games, as most platformers used simple, repetitive sprites. Mechner's approach was inspired by his background in filmmaking, where he learned the importance of timing and fluidity in motion. The `startrun` routine exemplifies how Mechner combined technical ingenuity with artistic vision to push the boundaries of what was possible on the Apple II."
  - id: "stand-animation"
    line_start: 182
    line_end: 186
    title: "Idle animation for standing still"
    wikipedia_url: "https://en.wikipedia.org/wiki/Idle_animation"
    image_url: ""
    image_caption: ""
    content: "The `stand` routine defines the animation for the character standing still. It uses a simple sequence (`db act,0`, `db 15`) to maintain the idle state. While seemingly trivial, idle animations like this add a layer of realism to the game, making the character feel alive even when not in motion. In the context of the Apple II, where every byte of memory was precious, including an idle animation was a deliberate choice that reflected Mechner's commitment to creating a cinematic experience. The routine also loops back to itself (`dw stand`), ensuring that the character remains in the idle state until another action is triggered. This design decision highlights the modularity of Mechner's animation system, which allowed him to create complex behaviors with minimal code."
  - id: "alert-stand-animation"
    line_start: 191
    line_end: 196
    title: "Alert stance for heightened tension"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "The `goalertstand` routine transitions the character into an alert stance, signaling heightened tension or readiness. This animation is triggered in situations where the character needs to be prepared for immediate action, such as encountering an enemy or navigating a dangerous environment. The routine loops back to itself (`dw :loop`), maintaining the alert state until interrupted. Mechner's inclusion of an alert stance reflects his cinematic approach to game design, where character animations convey emotion and narrative context. In 1989, this level of detail was rare in video games, as most characters had limited animations that did not change based on context. The `goalertstand` routine demonstrates how Mechner used animation to enhance the storytelling and immersion of Prince of Persia."

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