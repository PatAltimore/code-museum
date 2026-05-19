---
title: "COLL.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/COLL.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/COLL.S"
year: 1989
author: "Jordan Mechner"
slug: "coll"
order: 7
description: "Collision detection in Prince of Persia, a foundational cinematic platformer"

summary:
  - point: "Uses rotoscoping for realistic animation"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Bank-switched memory to fit in 128K"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Sophisticated collision detection for barriers"
    link: "https://en.wikipedia.org/wiki/Collision_detection"
    link_label: "Collision Detection"
  - point: "Written solo by Jordan Mechner in 6502 assembly"
    link: "https://en.wikipedia.org/wiki/Jordan_Mechner"
    link_label: "Jordan Mechner"
  - point: "Apple II hardware constraints shaped design"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II Series"

enhancements:
  - id: "check-barrier-collision-detection"
    line_start: 72
    line_end: 193
    title: "Barrier collision detection: pixel-perfect precision"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "This subroutine, CHECKBARR, is responsible for detecting collisions between the player character and vertical barriers. It initializes collision flags and checks whether the character is temporarily 'collision-proof' due to specific actions like turning. The routine then gathers data from the current frame and compares it with the previous frame to detect changes that indicate collisions. This pixel-level precision was critical for the game's cinematic realism, ensuring that the character's interactions with the environment felt natural. In 1989, collision detection was a challenging problem, especially on hardware like the Apple IIe/IIc, which had limited memory and processing power. Jordan Mechner had to carefully manage resources, using techniques like bank-switched memory to fit the game into 128K. The approach here reflects Mechner's meticulous attention to detail, ensuring that every pixel mattered in the gameplay. This technique influenced later games in the cinematic platformer genre, such as Another World (1991) and Flashback (1992), which also relied on precise collision detection to create immersive experiences. It set a standard for how platformers handle environmental interactions, a legacy that persists in modern games like Limbo and Inside."
  - id: "get-cdata-buffer-management"
    line_start: 194
    line_end: 266
    title: "Managing frame data for collision checks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The getCData subroutine retrieves 'thisframe' data for a specified block and manages buffers for collision detection. It calculates the edges of barriers and compares them with the character's position to determine potential collisions. Buffer management is a recurring theme in this file, as the game needs to track changes between frames to detect interactions accurately. In the late 1980s, techniques like double buffering were becoming standard for managing dynamic data in games. Mechner's implementation here is tailored to the Apple II's constraints, using clever memory management to ensure smooth gameplay. The subroutine's reliance on precise calculations reflects the game's emphasis on realism and fluidity. This approach influenced later games that required accurate environmental interaction, such as Tomb Raider (1996) and the Uncharted series. It also contributed to the broader adoption of buffer management techniques in game development, which remain essential in modern engines like Unity and Unreal Engine."
  - id: "init-cd-buffers-frame-initialization"
    line_start: 267
    line_end: 343
    title: "Initializing collision detection buffers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The initCDbufs subroutine initializes the SN and CD buffers used for collision detection. It copies data from 'thisframe', 'above', or 'below' buffers into 'lastframe' buffers and sets 'thisframe' buffers to a default value. This ensures that the game has a clean slate for detecting collisions in the current frame. In the context of the Apple II, memory was a precious resource. Mechner's approach to buffer initialization reflects the constraints of the hardware, where every byte had to be carefully managed. The use of multiple buffers allowed the game to track changes between frames efficiently, a necessity for the game's detailed animations and interactions. This technique laid the groundwork for more advanced memory management systems in games. It influenced the development of real-time physics engines and collision systems in later titles, such as Half-Life (1998) and Portal (2007). The concept of maintaining separate buffers for different states is now a standard practice in game development."
  - id: "get-left-bar-barrier-edge-calculation"
    line_start: 344
    line_end: 367
    title: "Calculating the left edge of barriers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The getleftbar subroutine calculates the X-coordinate of the left edge of a barrier. It uses the block ID and barrier code to determine the barrier's position relative to the block's edge. If the block contains no barrier, it returns a default value. This calculation is part of the game's collision detection system, which requires precise measurements to ensure realistic interactions. On the Apple II, such calculations had to be performed efficiently due to the limited processing power and memory. The method used here influenced the design of collision systems in later games, particularly those that required detailed environmental interactions. Games like Prince of Persia: The Sands of Time (2003) and Assassin's Creed (2007) built on these principles, incorporating advanced collision detection to enhance gameplay realism."
  - id: "get-right-bar-barrier-edge-calculation"
    line_start: 368
    line_end: 399
    title: "Determining the right edge of barriers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The getrightbar subroutine calculates the X-coordinate of the right edge of a barrier. Similar to getleftbar, it uses the block ID and barrier code to determine the barrier's position. If the block contains no barrier, it returns a default value. This subroutine complements the game's collision detection system, ensuring that the character's interactions with barriers are accurate and consistent. On the Apple II, such precision was necessary to create the game's immersive experience. The techniques used here influenced the development of collision systems in later games, particularly those in the cinematic platformer genre. The focus on precise calculations helped establish standards for environmental interaction in games like Limbo (2010) and Inside (2016)."
  - id: "collisions-handling-barrier-interactions"
    line_start: 400
    line_end: 439
    title: "Handling collisions with barriers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The COLLISIONS subroutine acts on detected collisions between the character and barriers. It checks for special cases where the character can pass through barriers, such as climbing onto ledges. Depending on the collision type, it redirects to specific subroutines for handling left or right collisions. In 1989, handling collisions dynamically was a novel approach, especially on hardware like the Apple II. Mechner's implementation reflects his commitment to creating a realistic and engaging gameplay experience. The ability to account for special cases adds depth to the game's mechanics, making it more than just a simple platformer. This approach influenced the design of collision systems in later games, particularly those that emphasized environmental interaction. Games like Another World (1991) and Flashback (1992) adopted similar techniques, pushing the boundaries of what platformers could achieve. The legacy of dynamic collision handling is evident in modern titles like Celeste (2018) and Hollow Knight (2017)."
  - id: "right-collision-detection"
    line_start: 440
    line_end: 466
    title: "Detecting collisions on the right side"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The rightcoll subroutine handles collisions with barriers on the right side of the character. It checks whether the character is in fighting mode, which affects the collision logic. If a collision is detected, it calculates the distance to the barrier and redirects to the collide subroutine. This subroutine is part of the game's sophisticated collision detection system, which ensures that interactions with barriers are realistic and responsive. On the Apple II, such detailed calculations were challenging due to hardware limitations, but Mechner's implementation demonstrates his ingenuity. The techniques used here influenced the design of collision systems in later games, particularly those that required dynamic interactions with the environment. The focus on precise calculations helped establish standards for cinematic platformers and beyond, shaping the development of games like Tomb Raider (1996) and Uncharted (2007)."
  - id: "left-collision-detection"
    line_start: 467
    line_end: 494
    title: "Detecting collisions on the left side"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The leftcoll subroutine handles collisions with barriers on the left side of the character. Similar to rightcoll, it checks whether the character is in fighting mode and adjusts the collision logic accordingly. If a collision is detected, it calculates the distance to the barrier and redirects to the collide subroutine. This subroutine complements the game's collision detection system, ensuring that interactions with barriers are accurate and consistent. On the Apple II, such precision was necessary to create the game's immersive experience. The techniques used here influenced the development of collision systems in later games, particularly those in the cinematic platformer genre. The focus on precise calculations helped establish standards for environmental interaction in games like Limbo (2010) and Inside (2016)."
  - id: "check-coll-barrier-pass-through"
    line_start: 527
    line_end: 601
    title: "Handling special cases for barriers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The CHECKCOLL subroutine handles special cases for barriers, such as gates, slicers, and mirrors. It checks whether the character can pass through these barriers based on specific conditions, such as the gate's position or the character's action. In 1989, dynamically adjusting collision logic based on environmental conditions was a sophisticated approach. Mechner's implementation reflects his commitment to creating a realistic and engaging gameplay experience. The ability to account for special cases adds depth to the game's mechanics, making it more than just a simple platformer. This approach influenced the design of collision systems in later games, particularly those that emphasized environmental interaction. Games like Another World (1991) and Flashback (1992) adopted similar techniques, pushing the boundaries of what platformers could achieve. The legacy of dynamic collision handling is evident in modern titles like Celeste (2018) and Hollow Knight (2017)."
  - id: "animchar-animation-sequencing"
    line_start: 994
    line_end: 1161
    title: "Animation sequencing with bytecode-like commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bytecode"
    image_url: ""
    image_caption: ""
    content: "The ANIMCHAR subroutine processes animation sequences for the main character by interpreting a series of bytecode-like commands stored in memory. Each command corresponds to an action, such as changing the character's position (delta-x or delta-y), flipping their facing direction, or triggering specific animations like falling or dying. This approach allows the game to dynamically adjust the character's behavior based on environmental interactions and player input. In 1989, the Apple IIe/IIc hardware imposed strict limitations on memory and processing speed. Jordan Mechner's solution was to encode animations as compact sequences of instructions, minimizing the memory footprint while enabling complex behaviors. The commands are fetched and interpreted in real-time, a technique reminiscent of early virtual machines or bytecode interpreters. This system influenced later games by demonstrating how cinematic gameplay could be achieved on constrained hardware. The concept of encoding animations as instruction sequences became a common practice in game engines, paving the way for scripting systems in modern engines like Unity and Unreal. Mechner's work also inspired developers to explore cinematic storytelling in games, a hallmark of titles like Another World and Flashback."
  - id: "goneupstairs-level-transition"
    line_start: 1162
    line_end: 1185
    title: "Level transition with musical cues"
    wikipedia_url: "https://en.wikipedia.org/wiki/Level_(video_gaming)"
    image_url: ""
    image_caption: ""
    content: "The GoneUpstairs subroutine handles transitions between levels, including playing specific musical cues based on the current level. For example, level 13 skips music entirely, while level 4 triggers a special 'mirror level' theme. This routine also increments the NextLevel counter, preparing the game for the next stage. In the late 1980s, music and sound effects were an integral part of creating immersive gaming experiences, but implementing them on the Apple II required ingenuity. The machine's limited audio capabilities meant that developers had to carefully manage memory and CPU cycles to play music without disrupting gameplay. Mechner's use of musical cues to enhance level transitions contributed to the game's cinematic feel, reinforcing the narrative progression. This technique influenced later games that used dynamic music to heighten emotional impact, such as the Legend of Zelda series. It also showcased how sound design could be integrated into gameplay mechanics, a principle that remains central to modern game development."
  - id: "checkslice-slicer-collision-detection"
    line_start: 1186
    line_end: 1265
    title: "Collision detection with deadly slicers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The CHECKSLICE routine determines whether the character overlaps with a deadly slicer object. It checks the character's position against the current frame's collision data and verifies whether the slicer is closed. If a collision is detected, the routine aligns the character with the slicer and triggers a 'halved' animation sequence, complete with sound effects. Collision detection was a challenging problem on the Apple II due to its limited processing power. Mechner's approach involved precomputing collision data for each frame and storing it in memory, allowing the game to perform real-time checks efficiently. This method ensured smooth gameplay while maintaining the cinematic quality of the animations. The slicer mechanic became a memorable feature of Prince of Persia, adding tension and stakes to the gameplay. It influenced the design of environmental hazards in later platformers, such as the Tomb Raider series. The routine also demonstrated how assembly language could be used to implement complex interactions, inspiring other developers to push the boundaries of what was possible on early hardware."
  - id: "checkgate-gate-collision-handling"
    line_start: 1319
    line_end: 1373
    title: "Handling collisions with closing gates"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The CHECKGATE routine manages collisions between the character and closing gates. It checks whether the character is standing directly under a gate as it shuts, and if so, bumps the character aside to prevent them from being crushed. The routine calculates the direction of the bump based on the character's position relative to the gate. This subroutine reflects Mechner's attention to detail in creating a believable and immersive game world. Gates are not just static obstacles; they interact dynamically with the character, adding a layer of realism to the gameplay. Implementing such mechanics on the Apple II required careful optimization to ensure smooth performance. Dynamic environmental interactions like this became a hallmark of cinematic platformers, influencing games such as Another World and Inside. The routine also highlighted the importance of integrating gameplay mechanics with narrative elements, a principle that continues to shape modern game design."
  - id: "enemycoll-enemy-collision-detection"
    line_start: 1389
    line_end: 1463
    title: "Limited collision detection for enemies"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The ENEMYCOLL subroutine handles collision detection for enemy characters, focusing on scenarios where they back into walls or gates while fighting. It checks the enemy's position and state, ensuring they are on the ground, alive, and in a fighting stance before performing collision checks. If a collision is detected, the routine adjusts the enemy's position to align them with the barrier. Enemy behavior in Prince of Persia was designed to complement the player's actions, creating a dynamic and engaging combat system. Implementing collision detection for enemies required a simplified approach compared to the main character, balancing complexity with performance constraints on the Apple II. This routine contributed to the game's reputation for fluid and realistic animations, influencing the design of enemy AI in later platformers and action games. It demonstrated how assembly language could be used to create nuanced interactions between characters and their environment, inspiring developers to explore similar techniques in their own projects."
  - id: "dbarr2-distance-to-barrier"
    line_start: 1464
    line_end: 1515
    title: "Calculating distance to barriers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The DBarr2 subroutine calculates the distance between the enemy character and nearby barriers, such as walls or gates. It determines whether the barrier is in front of or behind the character and adjusts the character's position accordingly. The routine uses precomputed edge data to perform these calculations efficiently. On the Apple II, spatial calculations like this were challenging due to limited processing power. Mechner's solution involved storing edge data for barriers and using it to perform quick checks during gameplay. This approach ensured smooth interactions between characters and their environment, maintaining the game's cinematic quality. The technique of calculating distances to barriers influenced the design of collision systems in later games, particularly those with complex environments. It showcased how assembly language could be used to implement advanced gameplay mechanics, inspiring developers to push the boundaries of what was possible on early hardware."

---

* coll
org = $4500
 tr on
 lst off
*-------------------------------
*
*  PRINCE OF PERSIA
*  Copyright 1989 Jordan Mechner
*
*-------------------------------
 org org

 jmp CHECKBARR
 jmp COLLISIONS
 jmp GETFWDDIST
 jmp CHECKCOLL
 jmp ANIMCHAR

 jmp CHECKSLICE
 jmp CHECKSLICE2
 jmp markmeters ;temp
 jmp CHECKGATE
 jmp firstguard ;temp

 jmp ENEMYCOLL

*-------------------------------
 lst
 put eq
 lst
 put gameeq
 lst
 put seqdata
 lst
 put soundnames
 lst
 put movedata
 lst off

 dum $f0
ztemp ds 1
CollFace ds 1
tempobjid ds 1
tempstate ds 1
 dend

*-------------------------------
*  Distance in pixels from either edge of block to barrier
*  BarL + BarR + BarWidth == 14
*
*  Indexed by barrier code:
*  0 = clear, 1 = panel/gate, 2 = flask, 3 = mirror/slicer
*  4 = block

BarL db 0,12,2,0,0
BarR db 0,0,9,11,0

*-------------------------------
DeathVelocity = 33
OofVelocity = 22

gatemargin = 6 ;higher = more generous

]rts rts
*-------------------------------
*
*  C H E C K  B A R R I E R
*
*  Check for collisions with vertical barriers
*
*-------------------------------
CHECKBARR
 lda #-1 ;"no-collision" flag
 sta collideL
 sta collideR

* Check for situations where character is temporarily
* "collision-proof"

 lda CharAction
 cmp #7 ;turning?
 beq ]rts

* Initialize CD/SN buffers
* (Copy "lastframe" data from "thisframe", "above", or "below";
* init "thisframe" with FF)

 lda CharBlockY
 sta BlockYthis

 jsr initCDbufs

 lda BlockYthis
 sta BlockYlast

* Get beginning & end of range

 lda CDRightEj
 jsr getblockxp
 clc
 adc #2
 cmp #11
 bcc :ok
 lda #11
  ;Last (rightmost) block in range +1
:ok sta endrange

 lda CDLeftEj
 jsr getblockxp
 tax
 dex ;First (leftmost) block in range
 stx begrange

* Get CD & SN data for every block in range [begrange..endrange]
* on this level (BlockYthis) and on levels below & above

* This level...

 lda BlockYthis
 sta blocky

 lda #SNthisframe
 ldx #CDthisframe
 jsr getCData

* Level below...

 lda BlockYthis
 clc
 adc #1
 sta blocky

 lda #SNbelow
 ldx #CDbelow
 jsr getCData

* ...and level above

 lda BlockYthis
 sec
 sbc #1
 sta blocky

 lda #SNabove
 ldx #CDabove
 jsr getCData

* Got new data... now compare thisframe with lastframe
* If a nybble has changed from 0 to 1, we have a collision.

 ldx #9
:loop2
 lda SNthisframe,x
 bmi :no ;ff = no data for this frame
 cmp SNlastframe,x
 bne :no ;no corresponding data for last frame

 lda CDlastframe,x
 and #$0f ;low nybble first (L edge of barr)
 bne :noL

 lda CDthisframe,x
 and #$0f
 beq :noL

 stx collideL ;We have collision w/ L edge
;x = block # (0-9)

:noL lda CDlastframe,x
 and #$f0 ;hi nybble (R edge of barr)
 bne :noR

 lda CDthisframe,x
 and #$f0
 beq :noR

 stx collideR ;collision w/ R edge
:noR
:no dex
 bpl :loop2

 ldx collideL
 ldy collideR

]rts rts

*-------------------------------
*
*  G E T  C D A T A
*
*  Get "thisframe" data for specified blocky
*
*-------------------------------
getCData
 sta :smodSN+1
 stx :smodCD+1

 lda begrange
 jsr getblockej ;left edge of block
 clc
 adc #angle ;perspective
 sta blockedge

 ldx begrange
:loop stx bufindex

* First compare L edge of barr with R edge of char

 lda CharScrn
 ldx bufindex
 ldy blocky
 jsr getleftbar ;Get left edge of barrier

 cmp CDRightEj
 bcc :RofL
 ;= means L of L
:LofL lda #0
 beq :cont1

:RofL lda #$f
:cont1 sta ztemp

* Now compare R edge of barr with L edge of char

 lda CharScrn
 ldx bufindex
 ldy blocky
 jsr getrightbar ;Get right edge of barrier

 cmp CDLeftEj
 bcc :RofR
 beq :RofR ;= means R of R

:LofR lda #$f0
 bne :cont2

:RofR lda #0
:cont2 ora ztemp

 ldx tempblockx ;guaranteed 0-9 by rdblock
:smodCD sta CDthisframe,x

 lda tempscrn
:smodSN sta SNthisframe,x ;screen #

 lda blockedge
 clc
 adc #14
 sta blockedge

 ldx bufindex
 inx
 cpx endrange
 bne :loop

]rts rts

*-------------------------------
*
*  I N I T   C D B U F S
*
*  Initialize SN and CD buffers
*  (Take "lastframe" data from "thisframe", "above", or "below";
*  init "thisframe" with FF)
*
*-------------------------------
initCDbufs
 lda BlockYthis
 cmp BlockYlast ;same BlockY as last frame?
 beq :usethis ;yes--copy data from "thisframe"

 clc
 adc #3
 cmp BlockYlast
 beq :usethis

 sec
 sbc #6
 cmp BlockYlast
 beq :usethis

* BlockY has changed--copy data from "above" or "below"

 lda BlockYthis
 clc
 adc #1
 cmp BlockYlast
 beq :useabove
 sec
 sbc #3
 cmp BlockYlast
 beq :useabove

:usebelow
 lda #SNbelow
 ldx #CDbelow
 jmp :cont

:useabove lda #SNabove
 ldx #CDabove
 jmp :cont

:usethis lda #SNthisframe
 ldx #CDthisframe

:cont sta :smodSN+1
 stx :smodCD+1

* Copy contents of appropriate SN & CD buffers (thisframe,
* below, or above) into lastframe buffers...
* and initialize SN buffers with $ff

 ldx #9
:zloop
:smodSN lda SNbelow,x
 sta SNlastframe,x

:smodCD lda CDbelow,x
 sta CDlastframe,x

 lda #$ff
 sta SNthisframe,x
 sta SNabove,x
 sta SNbelow,x

 dex
 bpl :zloop

]rts rts

*-------------------------------
*
*  G E T   L E F T   B A R
*
*  Get X-coord of left edge of barrier
*
*  In:  X/Y/A = blockx/blocky/scrn
*       blockedge
*
*  Out: A = screen X-coord (140)
*       Return A = 255 if this block is no barrier
*
*-------------------------------
getleftbar
 jsr rdblock ;get block ID

 jsr cmpbarr ;return A = barrier code #
 beq :clear ;or -1 if clear
 tay

 lda blockedge
 clc
 adc BarL,y ;barr dist from L edge of block
 sec
 rts

:clear lda #255
 clc
 rts

*-------------------------------
*
*  G E T   R I G H T   B A R
*
*  Get right edge of barrier, 0 if clear
*
*-------------------------------
getrightbar
 jsr rdblock

 jsr cmpbarr
 beq :clear
 tay

 lda blockedge
 clc
 adc #13
 sec
 sbc BarR,y ;barr dist from R edge of block
 sec
 rts

:clear lda #0
 clc
]rts rts

*-------------------------------
*
*  C O L L I S I O N S
*
*  If a collision was detected, act on it
*
*  In: collideL/R: - if no coll, 0-9 refers to block in
*      which collision occurred
*
*  (CollideL is collision with LEFT EDGE of barrier
*  CollideR is collision with RIGHT EDGE of barrier)
*
*-------------------------------
COLLISIONS
 lda AMtimer ;antimatter timer
 beq :cont
 lda $c030
 dec AMtimer
 rts
:cont

* Check for situations where we let character
* pass thru barrier (e.g., climbing up onto ledge)

 lda CharAction
 cmp #2 ;hanging?
 beq ]rts
 cmp #6 ;hanging?
 beq ]rts
 lda CharPosn
 cmp #135
 bcc :cont2
 cmp #149
 bcc ]rts ;climbing?

:cont2
 ldx collideL
 bmi :noL
 stx collX
 jmp leftcoll

:noL ldx collideR
 bmi :noR
 stx collX
 jmp rightcoll
:noR
]rts rts

*-------------------------------
*
*  R I G H T   C O L L I S I O N
*
*-------------------------------
rightcoll
 lda CharSword
 cmp #2 ;if in fighting mode,
 beq :1 ;waive front-facing requirement

 lda CharFace
 bpl ]rts
:1
 jsr checkcoll1
 bcc ]rts

 lda tempscrn
 ldx tempblockx
 ldy tempblocky

 jsr getrightbar ;edge of barr
 sec
 sbc CDLeftEj ;dist to char

 ldx #0 ;right
 jmp collide

*-------------------------------
*
*  L E F T   C O L L I S I O N
*
*-------------------------------
leftcoll
 lda CharSword
 cmp #2
 beq :1

 lda CharFace
 bne ]rts
:1
 jsr checkcoll1
 bcc ]rts

 lda tempscrn
 ldx tempblockx
 ldy tempblocky
 jsr getleftbar
 sec
 sbc CDRightEj ;- dist to char

 ldx #-1 ;left
 jmp collide

*-------------------------------
*
* Call CHECKCOLL for block #X
*
* In: CD data; X = blockx
*
*-------------------------------
checkcoll1
 stx tempblockx

 lda CharBlockY
 bpl :2
 clc
 adc #3
 bne :1

:2 cmp #3
 bcc :1
 sec
 sbc #3
:1 sta tempblocky

 lda SNthisframe,x
 sta tempscrn

 jsr rdblock1

 jmp CHECKCOLL

*-------------------------------
*
*  C H E C K   C O L L
*
*  In: RDBLOCK results (A = objid)
*
*  Out: tempblockx,tempblocky,tempscrn
*       cs if collision, cc if not
*
*-------------------------------
CHECKCOLL
 cmp #flask
 beq :no ;flask is not really a barrier

 cmp #gate
 beq :gate

 cmp #slicer
 beq :slicer

 cmp #mirror
 beq :mirror
 bne :c1

* You can pass thru mirror from R only if you take a
* running jump

:mirror
 lda CharID
 bne :c1 ;must be kid
 lda CharPosn
 cmp #39
 bcc :c1
 cmp #44
 bcs :c1
 lda CharFace
 bpl :c1

 jsr smashmirror
 lda #$ff
 sta createshad ;set flag

 clc
 rts

* Is slicer closed?

:slicer lda (BlueSpec),y
 cmp #slicerExt
 bne :no ;no--pass thru
 beq :c1

* Is gate low enough to bar you?

:gate jsr gatebarr? ;return cc if gate bars you
 bcc :c1

* no collision--pass thru barrier

:no clc
 rts

* Yes, collision--get blockedge & return cs

:c1
 lda tempblockx
 jsr getblockej
 jsr AdjustScrn
 clc
 adc #angle
 sta blockedge
:yes sec
]rts rts

*-------------------------------
*
* AdjustScrn
*
* In:  tempscrn, VisScrn
*      scrnLeft/Right/BelowL/BelowR
*      A = X-coord on tempscrn
*
* Out: A = X=coord on VisScrn
*
*-------------------------------
AdjustScrn
 ldx tempscrn
 cpx VisScrn
 beq ]rts
 cpx scrnLeft
 beq :osL
 cpx scrnBelowL
 beq :osL
 cpx scrnRight
 beq :osR
 cpx scrnBelowR
 beq :osR
 rts
:osR clc
 adc #ScrnWidth
 rts
:osL sec
 sbc #ScrnWidth
]rts rts

*-------------------------------
*
*  C O L L I D E
*
*  In: A = distance from barrier to character
*      X = coll direction (-1 = left, 0 = right)
*      tempblockx,y,scrn set for collision block
*
*-------------------------------
collide
 stx CollFace ;temp var

 ldx CharLife ;dead?
 bpl ]rts ;yes--let him finish falling (or whatever)

 ldx CharPosn
 cpx #177 ;impaled?
 beq ]rts ;yes--ignore collision

 clc
 adc CharX
 sta CharX

* In midair or on the ground?

 jsr rdblock1

 ldx CollFace
 bpl :faceL

 cmp #block ;If this block has no floor,
 beq :2 ;use the one in front of it
 bne :1

:2 dec tempblockx
 jmp :3

:faceL cmp #panelwof ;Panelwof is only a problem
 beq :4 ;when facing L
 cmp #panelwif
 beq :4
 cmp #block
 bne :1

:4 inc tempblockx
 lda tempscrn
 bne :3
 lda tempblockx
 cmp #10
 bne :3
 lda CharScrn
 sta tempscrn
 lda #0
 sta tempblockx ;screen 0 block 10 = CharScrn block 0

:3 jsr rdblock1

:1 jsr cmpspace
 bne GroundBump

*-------------------------------
* Bump into barrier w/o floor

AirBump
 lda #-4
 jsr addcharx
 sta CharX

 lda CharAction
 cmp #4 ;already falling?
 bne :3
;yes--just rebound off wall
 lda #0
 sta CharXVel
 beq :smackwall

:3 lda #bumpfall
 jsr jumpseq
 jsr animchar

:smackwall

BumpSound
 lda #1
 sta alertguard
 lda #SmackWall
 jmp addsound

*-------------------------------
* Bump into barrier w/floor

GroundBump
 ldx CharBlockY

 lda CharSword
 cmp #2
 beq :skipair ;no airbump if en garde

 lda FloorY+1,x
 sec
 sbc CharY
 cmp #15 ;constant
 bcs AirBump
:skipair
 lda FloorY+1,x
 sta CharY

 lda CharYVel
 cmp #OofVelocity
 bcc :okvel
 lda #-5
 jsr addcharx
 sta CharX
 rts ;let checkfloor take care of it

:okvel lda #0
 sta CharYVel

 lda CharLife
 beq :deadbump

* Is he en garde?

 lda CharSword
 cmp #2
 beq :CollideEng ;yes--collide en garde

* Should it be a hard or a soft bump?

:normal
 ldx CharPosn ;last frame

 cpx #24
 beq :hard
 cpx #25
 beq :hard ;standjump-->hard

 cpx #40
 bcc :1
 cpx #43
 bcc :hard ;runjump-->hard

:1 cpx #102
 bcc :2
 cpx #107
 bcc :hard ;freefall-->hard

:2

:soft lda #bump
 jsr jumpseq
 jsr BumpSound ;soft bump sound?
 jmp animchar

:hard lda #hardbump
:doit jsr jumpseq
 jsr animchar

 jmp BumpSound

* dead when he hits the wall

:deadbump
]rts rts

*-------------------------------
* Collide en garde

:CollideEng
 lda CollFace
 cmp CharFace
 beq :collback

 lda #bumpengfwd
 bne :doit

* Char is en garde & trying to back into barrier

:collback
 lda #bumpengback
 jsr jumpseq
 jsr animchar ;get new frame

 lda #1
 jsr addcharx
 sta CharX
 rts

*-------------------------------
*
*  G E T   F W D   D I S T
*
*  In: Char data
*
*  Out: A = size of "careful step" forward (0-14 pixels)
*       X = what you're stepping up to
*           (0 = edge, 1 = barrier, 2 = clear)
*       RDBLOCK results for that block
*
*-------------------------------
GETFWDDIST

* Get edges

 jsr GetBaseBlock
 jsr setupchar
 jsr getedges

* If this block contains barrier, get distance

 jsr getunderft ;read block underfoot
 sta tempobjid

 jsr cmpbarr
 beq :nextb ;This block is clear

 lda CharBlockX
 sta tempblockx
 jsr DBarr ;returns A = dist to barrier
 tax
 bpl :tobarr

* If next block contains barrier, get distance

:nextb
 jsr getinfront
 sta tempobjid
 cmp #panelwof
 bne :99 ;Panelwof is special case
 ldx CharFace ;if you're facing R
 bpl :toEOB

:99 jsr cmpbarr
 beq :nobarr

 lda infrontx
 sta tempblockx
 jsr DBarr
 tax
 bpl :tobarr

* If next block is dangerous (e.g., empty space)
* or sword or potion, step to end of this block

:nobarr
 jsr getinfront ;read block in front
 sta tempobjid

  cmp #loose
 beq :toEOB ;step to end of block

 cmp #pressplate
 beq :toEOB1

 cmp #sword
 beq :toEOB1
 cmp #flask
 beq :toEOB1

 jsr cmpspace
 beq :toEOB

* All clear--take a full step forward

:fullstep lda #11 ;natural step size

 ldx #2 ;clear
 bne :done

* Step to end of block (no "testfoot")

:toEOB1 jsr getdist
 beq :fullstep
 ldx #0
 beq :done

* Step to end of block

:toEOB jsr getdist ;returns # pixels to end of block (0-13)

 ldx #0 ;edge

:done ldy tempobjid
]rts rts

* Step up to barrier

:tobarr
 cmp #14
 bcs :fullstep

 ldx #1 ;barrier
 bne :done

*-------------------------------
*
* Get distance to barrier
*
* In: rdblock results; tempobjid
*     Must have called setupchar/getedges
* Out: A = distance to barrier (- if barr is behind char)
*
*-------------------------------
DBarr
 lda tempobjid
 cmp #gate
 bne :ok
;treat gate as barrier only if down
 jsr gatebarr? ;returns cs if open
 bcs :clr

:ok lda tempblockx
 jsr getblockej
 clc
 adc #angle
 sta blockedge ;L edge of this block

 lda CharFace
 bmi :checkL

* Char facing R -- get distance to barrier

:checkR
 lda tempobjid ;block ID

 jsr cmpbarr ;return A = barrier code #
 beq :clr
 tay

 lda blockedge
 clc
 adc BarL,y
 sta ztemp ;left edge of barr

 sec
 sbc CDRightEj
 rts ;If -, barr is behind char

:clr lda #-1
 rts

* Char facing L -- get distance to barr

:checkL
 lda tempobjid

 jsr cmpbarr
 beq :clr
 tay

 lda blockedge
 clc
 adc #13
 sec
 sbc BarR,y
 sta ztemp ;R edge of barr

 lda CDLeftEj
 sec
 sbc ztemp

]rts rts

*-------------------------------
*
*  A N I M   C H A R
*
*  Get next frame from sequence table;
*  update char data accordingly.
*  We're now ready to draw this frame.
*
*-------------------------------
ANIMCHAR

:next jsr getseq ;get next byte from seqtab
 ;& increment CharSeq

 cmp #chx ;"change x" instruction?
 bne :no1

 jsr getseq ;next byte is delta-x

 jsr addcharx
 sta CharX

 jmp :next

*-------------------------------
:no1 cmp #chy
 bne :no2

 jsr getseq

 clc
 adc CharY
 sta CharY

 jmp :next

*-------------------------------
:no2 cmp #aboutface
 bne :no3

 lda CharFace
 eor #$ff
 sta CharFace

 jmp :next

*-------------------------------
:no3 cmp #goto
 bne :no4

:goto jsr getseq ;low byte of address
 pha

 jsr getseq ;high byte

 sta CharSeq+1
 pla
 sta CharSeq

 jmp :next

*-------------------------------
:no4 cmp #up
 bne :no5

 dec CharBlockY

 jsr addslicers

 jmp :next

*-------------------------------
:no5 cmp #down
 bne :no6

 inc CharBlockY

 jsr addslicers

 jmp :next

*-------------------------------
:no6 cmp #act
 bne :no7

 jsr getseq
 sta CharAction

 jmp :next

:no7 cmp #setfall
 bne :no8

 jsr getseq
 sta CharXVel

 jsr getseq
 sta CharYVel

 jmp :next

:no8 cmp #ifwtless
 bne :no9

 lda weightless ;weightless?
 bne :goto ;yes--branch

 jsr getseq
 jsr getseq ;skip 2 bytes
 jmp :next ;& continue

:no9 cmp #die
 bne :no10
 jmp :next

:no10 cmp #jaru
 bne :no11

 lda #1
 sta jarabove ;jar floorboards above
 jmp :next

:no11 cmp #jard
 bne :no12

 lda #-1
 sta jarabove ;jar floorboards below
 jmp :next

*-------------------------------
:no12 cmp #tap
 bne :no13

 jsr getseq ;sound #
 cmp #0 ;0: alert guard
 beq :0

 cmp #1 ;1: footstep
 bne :1
 lda #Footstep
:tap jsr addsound
:0 lda #1
 sta alertguard
 jmp :next

:1 cmp #2 ;2: smack wall
 bne :2
 lda #SmackWall
 bne :tap
:2 jmp :next

:no13 cmp #nextlevel
 bne :no14

 jsr GoneUpstairs
 jmp :next

:no14 cmp #effect
 bne :no15

 jsr getseq ;effect #
 cmp #1
 bne :fx0

 jsr potioneffect
:fx0 jmp :next

:no15
*-------------------------------
 sta CharPosn ;frame #

]rts rts

*-------------------------------
* Char has gone upstairs
* What do we do?
*-------------------------------
GoneUpstairs
 lda level
 cmp #13
 beq :ok ;no music for level 13
 cmp #4
 bne :1 ;mirror level is special
:3 lda #s_Shadow
 bne :2

:1 lda #s_Upstairs
:2 ldx #25
 jsr cuesong

:ok inc NextLevel
 rts

*-------------------------------
*
*  Sliced by slicer? (Does CD buf show char overlapping
*  with a closed slicer?)
*
*  In: Char data, CD data
*
*-------------------------------
CHECKSLICE
 lda CharBlockY
 sta tempblocky

 ldx #9

:loop stx tempblockx

 lda CDthisframe,x
 cmp #$ff ;char overlapping barr?
 bne :ok ;no

* Yes--is it a slicer?

 lda SNthisframe,x
 sta tempscrn

 jsr rdblock1
 cmp #slicer
 bne :ok

 lda (BlueSpec),y
 and #$7f
 cmp #slicerExt ;slicer closed?
 beq :slice ;yes--slice!

* No--keep checking

:ok ldx tempblockx
 dex
 bpl :loop
]rts rts

* Slice!
* In: rdblock results for slicer block

:slice
]slice
 lda (BlueSpec),y
 ora #$80
 sta (BlueSpec),y ;set hibit (smear)

:cont lda CharPosn
 cmp #178 ;if already cut in half (e.g. by another slicer),
 beq ]rts ;leave him alone

 lda tempblockx
 jsr getblockej ;edge of slicer block
 clc
 adc #7
 sta CharX

 lda #8
 jsr addcharx
 sta CharX ;align char w/slicer

 ldx CharBlockY
 inx
 lda FloorY,x
 sta CharY ;align char w/floor

 lda #100
 jsr decstr

 lda #Splat
 jsr addsound

 lda #halve
 jsr jumpseq
 jmp animchar

*-------------------------------
*
*  Sliced by slicer?
*
*  (Use this routine for enemy, who has no CD data)
*
*  In: Char data; GETEDGES results
*
*-------------------------------
CHECKSLICE2
 jsr getunderft
 jsr :slice? ;return cs if sliced
 bcs ]rts

 inc tempblockx
 jsr rdblock1

:slice?
 cmp #slicer
 bne :safe
 lda (BlueSpec),y
 and #$7f
 cmp #slicerExt
 bne :safe ;slicer open

 lda tempblockx
 jsr getblockej
 clc
 adc #angle
 sta blockedge

 lda tempscrn
 ldx tempblockx
 ldy tempblocky
 jsr getleftbar
 cmp CDRightEj
 bcs :safe

 lda tempscrn
 ldx tempblockx
 ldy tempblocky
 jsr getrightbar
 cmp CDLeftEj
 bcc :safe
 beq :safe

 jsr rdblock1
 jsr ]slice
 sec
 rts

:safe clc
]rts rts

*-------------------------------
*
* Special situation: If char is standing directly under closing
* gate, it knocks him aside when it shuts.
*
* In: Char data, CD data
*
*-------------------------------
CHECKGATE
 lda CharAction
 cmp #7 ;turning
 beq :1
 lda CharPosn
 cmp #15 ;standing?
 beq :1
 cmp #108
 bcc ]rts
 cmp #111 ;crouching?
 bcs ]rts
:1
 jsr getunderft
 cmp #gate
 beq :check

 dec tempblockx
 jsr rdblock1
 cmp #gate
 bne ]rts
:check
 ldx tempblockx
 lda CDthisframe,x
 and CDlastframe,x
 cmp #$ff
 bne ]rts

 jsr gatebarr?
 bcs ]rts

 jsr BumpSound

* bump him left or right?

 lda tempblockx
 sta collX
 jsr getunderft
 lda tempblockx
 cmp collX
 beq :left
 bcs :right

:left lda #-5
 bne :10
:right lda #5
:10 clc
 adc CharX
 sta CharX
]rts rts

*-------------------------------
*
* Return cc if gate bars you, cs if clear
*
*-------------------------------
gatebarr?
 lda (BlueSpec),y
 lsr
 lsr
 clc
 adc #gatemargin
 cmp imheight
]rts rts

*-------------------------------
*
* Limited collision detection for enemies
* (backing into wall or gate while fighting)
*
*-------------------------------
ENEMYCOLL
 lda AMtimer ;antimatter timer
 bne ]rts

 lda CharAction
 cmp #1
 bne ]rts ;must be on ground
 lda CharLife
 bpl ]rts ;& alive
 lda CharSword
 cmp #2
 bcc ]rts ;& en garde

 jsr getunderft
 cmp #block
 beq :collide
 cmp #panelwif
 beq :collide
 cmp #gate
 bne :1
 jsr gatebarr?
 bcc :collide

* If facing R, check block behind too

:1 lda CharFace
 bmi ]rts
 dec tempblockx
 jsr rdblock1
 cmp #panelwif
 beq :collide
 cmp #gate
 bne ]rts
 jsr gatebarr?
 bcc :collide
]rts rts

* Char is en garde & trying to back into barrier
* Put him right at edge

:collide
 jsr setupchar
 jsr getedges ;get edges

 lda tempscrn
 ldx tempblockx
 ldy tempblocky
 jsr rdblock
 sta tempobjid
 jsr checkcoll
 bcc ]rts

 jsr DBarr2 ;get A = dist to barrier
 tax
 bpl ]rts
 eor #$ff
 clc
 adc #1
 jsr addcharx
 sta CharX

 lda #bumpengback
 jsr jumpseq
 jsr animchar ;get new frame
 jmp rereadblocks

*-------------------------------
*
* Special version of DBarr for enemy collisions
*
* In: checkcoll results; tempobjid
*     Must have called setupchar/getedges
* Out: A = distance to barrier (- if barr is behind char)
*
*-------------------------------
DBarr2
 lda CharFace
 bpl :checkL ;Note: reversed from DBarr

* Char's back facing R -- get distance to barrier

:checkR
 lda tempobjid ;block ID

 jsr cmpbarr ;return A = barrier code #
 beq :clr
 tay

 lda blockedge
 clc
 adc BarL,y
 sta ztemp ;left edge of barr

 sec
 sbc CDRightEj
 rts ;If -, barr is behind char

:clr lda #-1
 rts

* Char facing L -- get distance to barr

:checkL
 lda tempobjid

 jsr cmpbarr
 beq :clr
 tay

 lda blockedge
 clc
 adc #13
 sec
 sbc BarR,y
 sta ztemp ;R edge of barr

 lda CDLeftEj
 sec
 sbc ztemp

]rts rts

*-------------------------------
 lst
 ds 1
 usr $a9,16,$b00,*-org
 lst off