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
description: "Collision detection routines from Prince of Persia (1989), showcasing the ingenuity required to create cinematic gameplay on constrained Apple II hardware."

summary:
  - point: "Collision detection optimized for Apple II's memory constraints"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Uses rotoscoped animation data to enhance realism"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Bank-switched memory techniques to fit within 128K"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Innovative handling of barriers and character movement"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"
  - point: "Jordan Mechner's solo development effort"
    link: "https://en.wikipedia.org/wiki/Jordan_Mechner"
    link_label: "Jordan Mechner"

enhancements:
  - id: "check-barrier-collision-detection"
    line_start: 65
    line_end: 185
    title: "How Barriers Blocked the Prince"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The CHECKBARR subroutine is responsible for detecting collisions between the prince and vertical barriers. It initializes collision flags and checks whether the character is temporarily 'collision-proof' due to specific actions like turning. It then processes data from the current frame and adjacent levels (above and below) to determine if a collision has occurred. The subroutine compares 'lastframe' and 'thisframe' data to detect changes that indicate a collision. This approach reflects the constraints of the Apple II hardware, where memory and processing power were limited, requiring clever algorithms to handle real-time gameplay. By breaking down the problem into manageable chunks—processing data for each level and comparing frame-by-frame—Mechner ensured smooth and realistic interactions. This collision detection system influenced later platformers, setting a standard for handling barriers and character movement in constrained environments."
  - id: "get-collision-data"
    line_start: 187
    line_end: 256
    title: "Reading Barrier Data for Each Frame"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The getCData subroutine retrieves collision data ('thisframe') for a specified block and level. It calculates the edges of the block and compares them with the character's position to determine if a collision has occurred. The subroutine uses auxiliary buffers to store screen and collision data, ensuring efficient memory usage. This design reflects the challenges of programming on the Apple II, where developers had to maximize the utility of every byte of memory. By modularizing collision detection into discrete routines, Mechner created a system that was both flexible and reusable, paving the way for more sophisticated collision systems in future games. The technique of using buffers to handle frame-by-frame data influenced later game engines, which adopted similar strategies to manage dynamic environments."
  - id: "initialize-collision-buffers"
    line_start: 258
    line_end: 329
    title: "Resetting the World Every Frame"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The initCDbufs subroutine initializes collision detection buffers by copying data from the previous frame and resetting the current frame's buffers. This ensures that collision detection starts with a clean slate for every frame, a technique akin to double buffering. Mechner's approach reflects the constraints of the Apple II, where memory was limited and performance was critical. By reusing data from adjacent frames, he minimized computational overhead while maintaining accurate collision detection. This method influenced later game development practices, particularly in handling real-time physics and interactions in constrained environments. The concept of resetting buffers for each frame became a standard in game engines, ensuring consistent and reliable gameplay."
  - id: "calculate-left-barrier-edge"
    line_start: 331
    line_end: 359
    title: "Finding the Left Edge of Danger"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The getleftbar subroutine calculates the X-coordinate of the left edge of a barrier. It uses pre-defined distances stored in lookup tables (BarL) to determine the barrier's position relative to the block's edge. This approach reflects the constraints of the Apple II, where lookup tables were a common technique to save processing time and memory. By precomputing barrier distances, Mechner ensured that collision detection was both fast and accurate. This technique influenced later games, where lookup tables became a standard method for handling spatial data efficiently. The use of lookup tables for collision detection highlights the ingenuity required to create complex interactions on limited hardware."
  - id: "calculate-right-barrier-edge"
    line_start: 361
    line_end: 385
    title: "The Right Edge of the Obstacle"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The getrightbar subroutine calculates the X-coordinate of the right edge of a barrier. Similar to getleftbar, it uses lookup tables (BarR) to determine the barrier's position relative to the block's edge. This design reflects the constraints of the Apple II, where computational efficiency was paramount. By precomputing barrier distances, Mechner ensured that collision detection was both fast and accurate. The use of lookup tables for spatial calculations became a standard practice in game development, influencing the design of later engines and frameworks. This subroutine exemplifies the clever use of precomputed data to overcome hardware limitations and deliver a seamless gameplay experience."
  - id: "handle-collisions"
    line_start: 387
    line_end: 433
    title: "What Happens When You Hit a Wall"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The COLLISIONS subroutine determines the appropriate action when a collision is detected. It checks the character's state (e.g., climbing, hanging) to decide whether to allow passage through the barrier. If a collision is confirmed, it directs the program to handle left or right collisions based on the character's position. This subroutine reflects the cinematic nature of Prince of Persia, where gameplay is tightly integrated with the character's animations and actions. By creating a system that dynamically responds to collisions, Mechner ensured that the game felt fluid and realistic. This approach influenced later platformers, where collision handling became a critical component of gameplay design. The ability to integrate character states with collision detection set a new standard for immersive gameplay."
  - id: "right-collision-handling"
    line_start: 440
    line_end: 466
    title: "When the Prince Hits Right"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The rightcoll subroutine handles collisions with barriers on the right side. It checks the character's state (e.g., fighting mode) and calculates the distance to the barrier using the getrightbar subroutine. This design reflects the constraints of the Apple II, where efficient collision handling was essential for smooth gameplay. By modularizing collision handling into discrete routines, Mechner created a system that was both flexible and reusable. This technique influenced later games, where modular collision systems became a standard practice. The ability to handle collisions dynamically based on character states set a new benchmark for platformer design."
  - id: "left-collision-handling"
    line_start: 467
    line_end: 494
    title: "When the Prince Hits Left"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The leftcoll subroutine handles collisions with barriers on the left side. Similar to rightcoll, it checks the character's state and calculates the distance to the barrier using the getleftbar subroutine. This approach reflects the constraints of the Apple II, where efficient collision handling was critical for smooth gameplay. By modularizing collision handling into discrete routines, Mechner ensured that the game could dynamically respond to player actions. This technique influenced later games, where modular collision systems became a standard practice. The ability to handle collisions dynamically based on character states set a new benchmark for platformer design."
  - id: "check-collision-for-block"
    line_start: 495
    line_end: 526
    title: "Testing One Block for Trouble"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The checkcoll1 subroutine checks for collisions within a specific block. It uses the character's position and state to determine whether a collision has occurred. This design reflects the constraints of the Apple II, where collision detection had to be both efficient and accurate. By focusing on individual blocks, Mechner ensured that the game could handle complex interactions without overwhelming the hardware. This technique influenced later games, where block-based collision systems became a standard practice. The ability to handle collisions at a granular level set a new benchmark for platformer design."
  - id: "check-collisions"
    line_start: 517
    line_end: 589
    title: "The Subroutine That Checks Everything"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The CHECKCOLL subroutine is the central routine for collision detection. It checks the type of barrier (e.g., flask, gate, slicer, mirror) and determines whether the character can pass through or if a collision occurs. This subroutine reflects the cinematic nature of Prince of Persia, where gameplay is tightly integrated with the character's animations and actions. By creating a system that dynamically responds to collisions, Mechner ensured that the game felt fluid and realistic. This approach influenced later platformers, where collision handling became a critical component of gameplay design. The ability to integrate character states with collision detection set a new standard for immersive gameplay."
  - id: "animchar-animation-sequence-parser"
    line_start: 985
    line_end: 1156
    title: "How Animation Became Cinematic in 1989"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "The `ANIMCHAR` subroutine parses animation sequences for the Prince's movements, interpreting commands like changing position, flipping direction, or triggering sound effects. Each command is fetched from a sequence table (`seqtab`) and executed to update the character's state. This approach allowed Jordan Mechner to implement fluid and lifelike animations derived from rotoscoping, where he traced real-life footage of his brother performing the Prince's moves. In the late 1980s, most games relied on simple sprite flipping or pre-rendered animations. Mechner's use of rotoscoping was groundbreaking, creating a cinematic feel that matched the game's narrative ambitions. The Apple II's hardware limitations—128K memory and slow disk access—required clever optimizations like this compact sequence parser to fit the game's rich animations and gameplay logic. This technique influenced future cinematic platformers like Flashback and Another World, which also emphasized realistic character movement and storytelling. The animation parser's modular design became a blueprint for handling complex character behaviors in constrained environments, inspiring developers to prioritize fluidity and realism even on limited hardware."
  - id: "goneupstairs-level-transition-music"
    line_start: 1158
    line_end: 1176
    title: "The Music That Defined Level Transitions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "The `GoneUpstairs` subroutine handles level transitions, including triggering music cues for specific levels. It checks the current level and selects a corresponding soundtrack, such as the eerie 'Shadow' theme for the mirror level or the triumphant 'Upstairs' theme for other levels. Level 13 is an exception, with no music played to heighten the tension. On the Apple II, sound generation was limited to basic tones and required careful timing to avoid disrupting gameplay. Mechner's decision to integrate music cues into level transitions added emotional weight to the player's progression, making each level feel distinct and memorable. This approach to dynamic music influenced later games like The Legend of Zelda and Final Fantasy, where music became integral to storytelling and atmosphere. The idea of tying specific soundtracks to gameplay events remains a cornerstone of modern game design, seen in titles like The Last of Us and Red Dead Redemption."
  - id: "checkslice-slicer-collision-detection"
    line_start: 1178
    line_end: 1255
    title: "The Algorithm That Sliced the Prince in Half"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    image_url: ""
    image_caption: ""
    content: "The `CHECKSLICE` subroutine determines whether the Prince collides with a slicer—a deadly trap that cuts him in half if he overlaps with its closed state. It checks character and screen data, verifies the slicer's state, and aligns the Prince's position with the slicer and floor before triggering a gruesome animation and sound effect. This collision detection was a technical feat on the Apple II, where memory and processing power were scarce. Mechner used lookup tables and bitwise operations to minimize computational overhead, ensuring the game ran smoothly despite its complex physics and animations. The visceral impact of the slicer trap became a hallmark of Prince of Persia's realism and tension. It inspired other games to incorporate environmental hazards as integral gameplay elements, such as the spike traps in Tomb Raider or the saw blades in Super Meat Boy. The slicer's dramatic consequences also set a precedent for using failure states to enhance narrative stakes."
  - id: "checkgate-gate-knockback-mechanics"
    line_start: 1311
    line_end: 1367
    title: "What Happens When a Gate Slams Shut?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `CHECKGATE` subroutine handles the Prince's interaction with closing gates. If the character stands directly under a gate as it shuts, the routine calculates whether he should be knocked aside. It checks the gate's state, the Prince's position, and his current action (e.g., standing or crouching) before deciding whether to bump him left or right. This mechanic added realism to the game's physics, emphasizing the dangers of environmental hazards. On the Apple II, implementing such dynamic interactions required precise timing and memory management, as the hardware lacked dedicated physics or collision engines. The gate knockback mechanic influenced later games that featured interactive environments, such as Half-Life's physics-based puzzles and Uncharted's collapsing structures. It demonstrated how small details could enhance immersion and player engagement, a principle that continues to shape game design today."
  - id: "enemycoll-limited-enemy-collision-detection"
    line_start: 1383
    line_end: 1453
    title: "How Enemies Avoid Walls While Fighting"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    image_url: ""
    image_caption: ""
    content: "The `ENEMYCOLL` subroutine implements limited collision detection for enemies during combat. It checks whether an enemy is backing into a wall or gate while fighting, ensuring they remain within the playable area. If a collision is detected, the routine adjusts the enemy's position to align them with the barrier. This feature was essential for maintaining the game's cinematic feel, as enemies needed to behave realistically during combat. On the Apple II, collision detection was challenging due to the lack of hardware support for such calculations. Mechner relied on clever algorithms and data structures to simulate realistic interactions. The concept of enemy behavior tied to environmental constraints influenced later games like Street Fighter and Mortal Kombat, where arenas became integral to gameplay. It also laid the groundwork for AI systems that adapt to surroundings, seen in modern titles like Assassin's Creed and The Witcher 3."
  - id: "dbarr2-distance-to-barrier-calculation"
    line_start: 1455
    line_end: 1509
    title: "The Math Behind Barrier Distances"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "The `DBarr2` subroutine calculates the distance between a character and a barrier, factoring in the character's facing direction and the barrier's position. It uses lookup tables and arithmetic operations to determine whether the barrier is in front or behind the character, returning the result as a signed value. On the Apple II, this calculation had to be efficient due to limited processing power. Mechner's use of precomputed values and modular routines ensured the game could handle complex interactions without slowing down. This technique influenced the development of spatial reasoning in game AI, seen in titles like Doom and Quake, where enemies navigate 3D environments. It also contributed to the evolution of collision detection systems, which remain a critical component of modern game engines like Unity and Unreal Engine."

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