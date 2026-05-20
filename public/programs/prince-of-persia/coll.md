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
description: "Collision detection and handling routines from Prince of Persia's Apple II assembly code, showcasing ingenious solutions to hardware constraints."

summary:
  - point: "Collision detection optimized for cinematic gameplay"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Bank-switched memory techniques for 128K Apple II"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Rotoscoping animation integrated into gameplay logic"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"

enhancements:
  - id: "check-barrier-collision-detection"
    line_start: 65
    line_end: 185
    title: "Collision Detection: Barriers and Edge Cases"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The CHECKBARR subroutine is responsible for detecting collisions between the player character and vertical barriers in the game world. It begins by initializing collision flags to indicate no collision. The routine then checks if the character is in a 'collision-proof' state, such as during a turning animation. Using buffers to store frame-by-frame data, it compares the current frame's collision data with the previous frame's data to identify changes that signify a collision. This approach is a clever use of limited memory and processing power, leveraging the Apple II's capabilities to deliver smooth gameplay. In 1989, collision detection was a critical challenge for game developers working on hardware like the Apple II, which had limited graphical and computational resources. Jordan Mechner's solution reflects the constraints of the era, where every byte of memory and every clock cycle mattered. By using frame-by-frame comparisons and pre-calculated barrier data, Mechner ensured that the game could handle complex interactions without sacrificing performance. This technique influenced later games by demonstrating how to implement efficient collision detection in resource-constrained environments. Developers of cinematic platformers and other genres studied Prince of Persia's code to learn how to balance gameplay complexity with hardware limitations. The game's collision logic also contributed to the immersive experience, allowing players to feel the consequences of their movements in a realistic way."
  - id: "get-cdata-buffer-initialization"
    line_start: 187
    line_end: 256
    title: "Buffer Initialization for Collision Data"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The getCData subroutine retrieves collision data for the current frame and initializes buffers for processing. It calculates the edges of the range of blocks the character interacts with, then iterates through these blocks to gather collision data for the current level and adjacent levels (above and below). This ensures that the game can accurately detect collisions regardless of the character's vertical position. In the late 1980s, managing data across multiple levels of a game world was a significant challenge, especially on systems like the Apple II with limited memory. Mechner's approach of using buffers to store and compare collision data was innovative, allowing the game to handle complex interactions without overwhelming the hardware. This method of buffer initialization and data retrieval became a foundational technique in game development, influencing how later games managed collision detection and other real-time calculations. The concept of double buffering, where data from one frame is used to inform the next, is still widely used in modern game engines to ensure smooth and accurate gameplay."
  - id: "initialize-collision-data-buffers"
    line_start: 258
    line_end: 329
    title: "Recycling Collision Data Across Frames"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The initCDbufs subroutine initializes collision data buffers by copying data from the previous frame or adjacent levels. If the character's vertical position changes significantly, the routine adjusts the source of the data to ensure accurate collision detection. It also resets buffers for the current frame to a default state, preparing them for new data. This technique reflects the constraints of programming on the Apple II, where memory was limited and data had to be reused efficiently. By recycling collision data across frames, Mechner minimized the computational overhead while maintaining the game's responsiveness. The approach used here influenced memory management techniques in later games, particularly those developed for similarly constrained systems. It demonstrated how to optimize resource usage without compromising gameplay quality, a lesson that remains relevant in modern game development for mobile and embedded platforms."
  - id: "calculate-barrier-left-edge"
    line_start: 331
    line_end: 359
    title: "Calculating Barrier Edges: Left Side"
    wikipedia_url: "https://en.wikipedia.org/wiki/Coordinate_system"
    image_url: ""
    image_caption: ""
    content: "The getleftbar subroutine calculates the X-coordinate of the left edge of a barrier within a block. It uses pre-defined data tables (BarL) to determine the distance from the block's left edge to the barrier, ensuring accurate collision detection. If the block contains no barrier, the routine returns a special value indicating this. In the context of 1980s game development, precise calculations like these were essential for creating immersive and believable game worlds. The Apple II's limited graphical capabilities required developers to use mathematical techniques to simulate depth and perspective. This method of calculating barrier edges influenced how later games handled collision detection and spatial calculations. By using pre-defined data tables and efficient arithmetic, Mechner demonstrated how to achieve accuracy without sacrificing performance, a principle that continues to guide game development today."
  - id: "calculate-barrier-right-edge"
    line_start: 361
    line_end: 385
    title: "Calculating Barrier Edges: Right Side"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The getrightbar subroutine calculates the X-coordinate of the right edge of a barrier within a block. Similar to getleftbar, it uses pre-defined data tables (BarR) to determine the distance from the block's right edge to the barrier. If the block contains no barrier, the routine returns a value indicating this. This subroutine complements the left-edge calculation, ensuring that the game can accurately detect collisions on both sides of the character. In the constrained environment of the Apple II, such precision was necessary to create a seamless gameplay experience. The techniques used here influenced later games by demonstrating how to handle collision detection efficiently. The use of data tables to pre-calculate barrier positions became a common practice, allowing developers to focus on gameplay mechanics rather than low-level calculations."
  - id: "handle-collision-events"
    line_start: 387
    line_end: 433
    title: "Handling Collisions: Gameplay Consequences"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_mechanics"
    image_url: ""
    image_caption: ""
    content: "The COLLISIONS subroutine determines the gameplay consequences of a detected collision. It checks whether the character is in a state that allows them to pass through barriers, such as climbing or hanging. If a collision is confirmed, the routine directs the game to handle it appropriately, either by calling leftcoll or rightcoll subroutines. In cinematic platformers like Prince of Persia, collision handling is not just a technical necessity but a core part of the gameplay experience. Mechner's approach ensures that collisions feel natural and contribute to the game's narrative and challenge. This subroutine influenced later games by showing how to integrate collision detection with gameplay mechanics. It demonstrated that technical solutions could enhance storytelling and player immersion, a principle that has shaped the design of modern platformers and action-adventure games."
  - id: "check-right-collision"
    line_start: 440
    line_end: 466
    title: "Right Collisions: Swordplay and Movement"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The rightcoll subroutine handles collisions on the right side of the character. It checks whether the character is in fighting mode, allowing them to bypass certain requirements. If a collision is confirmed, the routine calculates the distance to the barrier and calls the collide subroutine to process the interaction. This subroutine reflects the game's emphasis on fluid movement and realistic swordplay. By tailoring collision handling to the character's state, Mechner ensured that the gameplay felt responsive and immersive. The techniques used here influenced how later games integrated combat mechanics with environmental interactions. Prince of Persia's collision handling demonstrated that technical solutions could enhance gameplay depth and realism, inspiring developers to create more dynamic and engaging game worlds."
  - id: "check-left-collision"
    line_start: 467
    line_end: 494
    title: "Left Collisions: Facing the Barrier"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The leftcoll subroutine handles collisions on the left side of the character. It checks whether the character is facing the barrier and whether they are in fighting mode. If a collision is confirmed, the routine calculates the distance to the barrier and calls the collide subroutine to process the interaction. This subroutine complements rightcoll, ensuring that collisions are handled consistently regardless of direction. It reflects Mechner's attention to detail and commitment to creating a seamless gameplay experience. The approach used here influenced later games by demonstrating how to handle directional collisions effectively. It showed that collision detection could be tailored to enhance gameplay mechanics, a principle that continues to shape the design of modern platformers and action-adventure games."
  - id: "check-collision-for-block"
    line_start: 488
    line_end: 526
    title: "Checking Collisions for Specific Blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The checkcoll1 subroutine checks for collisions within a specific block. It calculates the block's coordinates and retrieves collision data for the current frame. If a collision is detected, the routine directs the game to handle it appropriately. This subroutine reflects the game's emphasis on precise collision detection, which was essential for creating a believable and immersive game world. By focusing on individual blocks, Mechner ensured that the game's interactions felt natural and responsive. The techniques used here influenced later games by demonstrating how to handle collisions at a granular level. It showed that precise calculations could enhance gameplay realism, inspiring developers to create more detailed and engaging game worlds."
  - id: "check-collision-main-handler"
    line_start: 527
    line_end: 601
    title: "Main Collision Handling Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The CHECKCOLL subroutine serves as the main handler for collision detection. It checks the type of object the character is interacting with, such as gates, slicers, or mirrors, and determines whether a collision should occur. For example, mirrors allow passage under specific conditions, while slicers and gates have their own rules. This subroutine reflects the game's emphasis on dynamic interactions and environmental storytelling. By tailoring collision handling to the type of object, Mechner ensured that the gameplay felt varied and engaging. The approach used here influenced later games by demonstrating how to integrate collision detection with environmental mechanics. It showed that technical solutions could enhance gameplay depth and narrative complexity, inspiring developers to create more dynamic and immersive game worlds."
  - id: "animchar-animation-sequence-decoder"
    line_start: 985
    line_end: 1156
    title: "How Animation Sequences Come to Life"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "The ANIMCHAR subroutine decodes animation sequences for the protagonist, translating encoded instructions into character movements. Each instruction in the sequence specifies an action, such as changing the character's position, flipping their facing direction, or triggering specific effects like sound or environmental interactions. This routine is central to the game's fluid animation, which was achieved using rotoscoping—a technique where Jordan Mechner filmed his brother performing the moves and traced each frame. At the time, this approach was groundbreaking, as most games relied on rigid, sprite-based animations. The subroutine's design reflects the constraints of the Apple II, where memory was scarce and every byte mattered. By encoding animations as compact sequences, Mechner could fit the game's cinematic movements into the limited 128KB memory. This technique influenced later games like Another World and Flashback, which adopted similar cinematic animation styles. Today, the legacy of rotoscoping lives on in motion capture technology used in modern games."
  - id: "goneupstairs-level-transition-handler"
    line_start: 1158
    line_end: 1176
    title: "The Subroutine That Climbs Levels"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "GoneUpstairs handles transitions between levels, including special cases like the mirror level and level 13, which lack music cues. This routine increments the level counter and triggers the appropriate background music. The Apple II's sound capabilities were limited, relying on simple tones and sequences. Mechner's use of cuesong demonstrates his ability to create an immersive experience despite hardware constraints. This level transition mechanic added to the game's cinematic quality, making each level feel distinct and purposeful. The idea of level-specific transitions and music cues became standard in later platformers and adventure games, influencing titles like Tomb Raider and Uncharted."
  - id: "checkslice-slicer-collision-detection"
    line_start: 1186
    line_end: 1265
    title: "What Happens When You Touch a Slicer?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "CHECKSLICE determines whether the protagonist overlaps with a slicer—a deadly environmental obstacle. If a collision is detected, the subroutine aligns the character with the slicer's position and triggers a dramatic animation sequence where the character is sliced in half. This gruesome detail added tension and realism to the game, emphasizing the stakes of precise movement. The subroutine uses clever tricks to check for collisions within the Apple II's limited processing power, such as comparing screen coordinates and object states. This approach to environmental hazards influenced later games like Dark Souls, where precise collision detection and punishing consequences became hallmarks of the genre."
  - id: "checkslice2-enemy-slicer-collision"
    line_start: 1266
    line_end: 1318
    title: "Enemies Meet Their Match with Slicers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "CHECKSLICE2 is a variation of CHECKSLICE designed for enemy characters, who lack the protagonist's detailed collision data. This routine checks whether an enemy overlaps with a slicer and handles the consequences, including alignment and animation. By separating enemy collision logic, Mechner optimized the game's performance, ensuring smooth gameplay even with multiple characters on screen. This modular approach to collision detection influenced later game engines, where distinct routines for player and NPC interactions became standard practice. Games like Diablo and StarCraft built on these principles to manage complex interactions efficiently."
  - id: "checkgate-closing-gate-collision"
    line_start: 1311
    line_end: 1367
    title: "The Gate That Pushes You Aside"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "CHECKGATE handles collisions with closing gates, ensuring the protagonist is pushed aside rather than crushed. This subroutine checks the character's position relative to the gate and calculates the direction of the push. The logic reflects Mechner's attention to detail, creating a realistic interaction with the environment. Gates were a recurring obstacle in Prince of Persia, adding to the game's puzzle-like platforming. This mechanic inspired similar environmental interactions in games like The Legend of Zelda, where moving objects and obstacles became integral to gameplay."
  - id: "enemycoll-limited-enemy-collision"
    line_start: 1389
    line_end: 1463
    title: "Enemies Backing Into Barriers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "ENEMYCOLL handles limited collision detection for enemies during combat, such as backing into walls or gates. The routine checks the enemy's position and adjusts their movement to prevent unrealistic behavior. This subroutine highlights Mechner's commitment to realism, ensuring enemies interact with the environment believably. The concept of environmental awareness in enemy AI influenced later games like Metal Gear Solid, where NPCs react dynamically to their surroundings."
  - id: "dbarr2-enemy-barrier-distance"
    line_start: 1455
    line_end: 1509
    title: "Calculating Distance to Barriers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "DBarr2 calculates the distance between an enemy and a barrier, determining whether the barrier is behind or in front of the character. This routine is a specialized version of DBarr, optimized for enemy interactions. By handling edge cases like reversed directions, Mechner ensured smooth gameplay and consistent collision logic. This technique influenced later games with complex environmental interactions, such as Half-Life, where precise calculations are used to manage NPC and player interactions with the world."

---

```asm
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
```
