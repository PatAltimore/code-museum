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
description: "Collision detection and handling routines from Prince of Persia (1989), showcasing innovative techniques for cinematic platforming on constrained hardware."

summary:
  - point: "Uses rotoscoping-based animation data for collision detection"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Implements collision-proof states for specific character actions"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Handles barriers dynamically based on character position and state"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Optimized memory usage through bank switching and buffer initialization"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Introduced cinematic collision handling, influencing later platformers"
    link: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    link_label: "Cinematic Platformer"

enhancements:
  - id: "check-barrier-collision"
    line_start: 65
    line_end: 185
    title: "Collision-proof states: a clever safety net"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The CHECKBARR subroutine is tasked with detecting collisions between the player character and vertical barriers. It begins by setting flags indicating no collision, then checks whether the character is in a 'collision-proof' state, such as turning or climbing, allowing them to bypass barriers temporarily. This was a critical feature for ensuring smooth gameplay and avoiding frustrating interruptions during animations. The routine then initializes buffers to store collision data for the current frame and compares it with the previous frame. If any data changes from 'no barrier' to 'barrier,' a collision is flagged. In 1989, collision detection was a challenging problem, especially on hardware like the Apple IIe, which had limited memory and processing power. Jordan Mechner's approach relied on precomputed animation data and efficient memory management, including the use of auxiliary buffers to track changes frame by frame. This method was influenced by the cinematic nature of the game, where fluid animations and realistic interactions were paramount. The technique of collision-proof states and frame-by-frame comparison became a hallmark of cinematic platformers, influencing titles like Flashback and Another World. By allowing characters to bypass barriers during specific actions, Mechner created a gameplay experience that felt intuitive and immersive, setting a standard for future games in the genre."
  - id: "get-collision-data"
    line_start: 187
    line_end: 256
    title: "How barriers become data points"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The getCData subroutine retrieves collision data for a specific block and level, translating physical barriers into actionable data for the game engine. It calculates the edges of barriers relative to the character's position and stores this information in buffers for further processing. The routine also handles perspective adjustments, ensuring that barriers align visually with the game's cinematic presentation. In the late 1980s, translating visual elements into collision data was a novel challenge. Mechner's solution involved breaking down the game world into discrete blocks and using lookup tables to define barrier properties. This approach was heavily influenced by the constraints of the Apple IIe, which required efficient use of memory and processing cycles. By precomputing barrier positions and storing them in buffers, Mechner minimized real-time calculations, allowing the game to run smoothly despite hardware limitations. This method of handling collision data laid the groundwork for more advanced systems in later games. The concept of precomputing environmental properties and using lookup tables became standard practice in game development, influencing titles like Super Mario World and Sonic the Hedgehog. Mechner's work demonstrated that even on constrained hardware, it was possible to create complex and immersive interactions between characters and their environments."
  - id: "initialize-collision-buffers"
    line_start: 258
    line_end: 329
    title: "The trick to seamless frame transitions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The initCDbufs subroutine initializes collision data buffers by copying data from the previous frame or adjacent levels. If the character has moved to a new level, the routine selects the appropriate buffer (above or below) and resets the current frame's data. This ensures that collision detection remains accurate even as the character transitions between levels. In the context of the Apple IIe, memory constraints were a significant challenge. Mechner's use of buffers to store collision data was an efficient solution, reducing the need for real-time calculations and enabling smooth transitions between frames. This technique was inspired by double buffering, a common method in graphics programming to prevent flickering and ensure continuity. The use of buffer initialization became a standard technique in game development, particularly for platformers and action games. By ensuring that collision data remained consistent across frames, developers could create fluid animations and responsive gameplay. Mechner's implementation in Prince of Persia influenced later titles like Castlevania and Metroid, which adopted similar techniques to handle complex interactions in dynamic environments."
  - id: "calculate-barrier-edges"
    line_start: 331
    line_end: 385
    title: "Barriers decoded: left and right edges"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The getleftbar and getrightbar subroutines calculate the X-coordinates of the left and right edges of barriers within a block. These routines use lookup tables to determine the distance from the block's edge to the barrier, factoring in perspective adjustments. If no barrier exists, the routines return predefined values indicating a clear path. In 1989, handling barriers as discrete entities was a novel approach. Mechner's use of lookup tables allowed the game to quickly retrieve barrier properties without complex calculations. This was crucial for the Apple IIe, where processing power was limited. The perspective adjustments ensured that barriers aligned visually with the game's cinematic presentation, enhancing immersion. This method of calculating barrier edges influenced later games that required precise collision detection, such as Tomb Raider and Crash Bandicoot. By treating barriers as data points with defined edges, developers could create more complex environments and interactions. Mechner's work demonstrated that even on constrained hardware, it was possible to achieve a high level of detail and realism."
  - id: "handle-collisions"
    line_start: 387
    line_end: 589
    title: "When barriers meet the player"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The COLLISIONS subroutine determines the appropriate response when a collision occurs. It checks whether the character is in a state that allows them to bypass barriers, such as climbing or hanging. If not, the routine directs the program to handle collisions with either the left or right edge of the barrier, based on the collision flags set earlier. In the late 1980s, collision handling was a critical aspect of game design, particularly for platformers. Mechner's approach involved checking character states and positions to determine whether a collision should be ignored or acted upon. This allowed for more dynamic interactions, such as climbing onto ledges or passing through barriers during specific actions. The dynamic collision handling in Prince of Persia influenced later games like Another World and Flashback, which adopted similar techniques to create immersive and responsive gameplay. By allowing characters to bypass barriers during certain actions, Mechner set a precedent for intuitive and cinematic platforming experiences."
  - id: "adjust-screen-coordinates"
    line_start: 591
    line_end: 620
    title: "Aligning barriers with the visible world"
    wikipedia_url: "https://en.wikipedia.org/wiki/Coordinate_system"
    image_url: ""
    image_caption: ""
    content: "The AdjustScrn subroutine aligns barrier coordinates with the visible screen, ensuring that collisions are calculated accurately based on the character's position. It adjusts the X-coordinates of barriers relative to the screen's edges, accounting for perspective and screen transitions. On the Apple IIe, screen alignment was a complex task due to the hardware's limited resolution and memory. Mechner's solution involved calculating screen coordinates dynamically, allowing the game to handle collisions seamlessly as the character moved between screens. This was essential for maintaining the cinematic feel of the game. The technique of adjusting screen coordinates became a standard practice in game development, particularly for side-scrolling and platforming games. By ensuring that barriers aligned visually with the screen, developers could create more immersive and responsive gameplay. Mechner's implementation in Prince of Persia influenced later titles like Sonic the Hedgehog and Rayman, which adopted similar methods to handle dynamic environments."
  - id: "calculate-forward-distance"
    line_start: 810
    line_end: 914
    title: "How far can the prince step?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The GETFWDDIST subroutine calculates the distance the character can step forward, considering barriers and environmental hazards. It checks the current block and the block in front of the character, determining whether a barrier, empty space, or other obstacle is present. Based on this data, the routine calculates the step size and updates the character's position accordingly. In 1989, dynamic movement calculations were a cutting-edge feature for platformers. Mechner's approach involved reading block data and using lookup tables to determine step sizes, allowing the character to navigate the environment realistically. This was influenced by the game's cinematic design, where fluid and precise movements were essential. The concept of dynamic movement calculations influenced later games like Prince of Persia: The Sands of Time and Assassin's Creed, which expanded on Mechner's techniques to create more complex and realistic character interactions. By calculating step sizes based on environmental data, Mechner set a standard for responsive and immersive gameplay in platformers."
  - id: "animchar-animation-bytecode"
    line_start: 985
    line_end: 1156
    title: "Animation Bytecode: A Language for Movement"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bytecode"
    image_url: ""
    image_caption: ""
    content: "The ANIMCHAR routine interprets a sequence of instructions stored in memory to control the character's animations and movements. Each instruction corresponds to a specific action, such as changing the character's position (delta-x or delta-y), flipping their facing direction, or triggering sound effects. This design resembles a bytecode interpreter, where compact instructions are fetched, decoded, and executed. Mechner used this approach to efficiently manage animations and interactions within the limited memory and processing power of the Apple II. In 1989, cinematic platformers were a nascent genre, and the Apple II hardware imposed severe constraints. With only 128KB of memory and no dedicated graphics processor, Mechner had to innovate. The bytecode-like system allowed him to store complex animation sequences in a compact format, reducing memory usage while enabling fluid, lifelike movements. This was crucial for achieving the game's cinematic feel, inspired by rotoscoping techniques. This method influenced later games and engines that adopted similar compact instruction sets for animation and scripting. The idea of using bytecode for game logic became standard in many game engines, including those for early 3D games. Today, scripting languages like Lua and Python in modern engines trace their lineage back to these early innovations in compact, interpretable instruction sets."
  - id: "goneupstairs-level-transition-music"
    line_start: 1158
    line_end: 1176
    title: "Level Transition: Music and Logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The GoneUpstairs routine handles the transition between levels, including playing special music cues. It checks the current level number to determine whether to play a unique track, such as the shadow theme for the mirror level, or the standard 'upstairs' theme. For level 13, no music is played, reflecting its unique significance in the game's narrative. At the time, the Apple II's sound capabilities were rudimentary, relying on software-driven sound synthesis. Mechner's decision to integrate music cues into gameplay transitions added a layer of emotional resonance, enhancing the cinematic experience. This was part of his broader effort to make Prince of Persia feel like an interactive movie. The use of music cues during transitions influenced later games, where audio became integral to storytelling and atmosphere. Games like The Legend of Zelda and Final Fantasy adopted similar techniques to signal narrative shifts or emotional beats. Mechner's work demonstrated how sound could elevate gameplay, a principle that remains central to game design today."
  - id: "checkslice-slicer-collision"
    line_start: 1178
    line_end: 1255
    title: "The Slicer: A Brutal Collision Mechanic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The CHECKSLICE routine determines whether the character overlaps with a slicer—a deadly environmental hazard. It checks collision data and verifies whether the slicer is closed. If the character is caught, the routine aligns the character's position with the slicer and triggers a dramatic animation sequence where the character is sliced in half. In the late 1980s, environmental hazards in games were often simple static obstacles. Mechner's slicer mechanic was groundbreaking in its dynamism and brutality, adding tension and stakes to the gameplay. The Apple II's limited hardware required careful optimization to handle collision detection efficiently, especially for hazards as complex as the slicer. This mechanic influenced the design of environmental hazards in later games, particularly in cinematic platformers like Another World and Flashback. The dramatic, animated consequences of failure became a hallmark of the genre, emphasizing the player's vulnerability and the game's realism."
  - id: "checkgate-knock-aside-mechanic"
    line_start: 1311
    line_end: 1381
    title: "Knocked Aside: Gates as Dynamic Obstacles"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The CHECKGATE routine handles situations where the character stands directly under a closing gate. If the gate shuts, it knocks the character aside, preventing them from being crushed. The routine calculates the direction and distance of the knockback based on the character's position relative to the gate. Dynamic obstacles like this were rare in 1989, as most games relied on static hazards. Mechner's implementation added a layer of realism and interactivity, making the environment feel alive and responsive. The Apple II's limited processing power meant that such mechanics had to be carefully optimized to avoid performance issues. This approach influenced later games that incorporated dynamic environmental interactions, such as the collapsing platforms in Sonic the Hedgehog or the shifting terrain in Tomb Raider. Mechner's work demonstrated how environmental hazards could be more than mere obstacles—they could actively interact with the player, enhancing immersion."
  - id: "enemycoll-limited-collision-detection"
    line_start: 1383
    line_end: 1453
    title: "Enemy Collision: Fighting Against Constraints"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "The ENEMYCOLL routine handles limited collision detection for enemies, focusing on scenarios where they back into walls or gates while fighting. It checks the enemy's position, action state, and life status before determining whether a collision occurs. If a collision is detected, the routine adjusts the enemy's position to align with the barrier. Collision detection was a significant challenge on the Apple II due to its limited memory and processing power. Mechner's solution was to simplify the checks and focus on specific scenarios, ensuring that the game remained responsive without overloading the hardware. This technique influenced the design of collision systems in later games, particularly those on similarly constrained hardware like the NES. By prioritizing essential interactions and optimizing checks, developers could create responsive gameplay even within tight technical limits. Mechner's work exemplified how ingenuity could overcome hardware constraints to deliver compelling experiences."
  - id: "dbarr2-distance-to-barrier"
    line_start: 1455
    line_end: 1509
    title: "Distance to Barrier: Precision in Collision"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The DBarr2 routine calculates the distance between the character and a barrier, taking into account the character's facing direction. It adjusts the calculation based on whether the barrier is in front or behind the character, ensuring precise positioning during collisions. Precise collision detection was rare in 1989, as most games relied on simpler bounding box checks. Mechner's approach allowed for more nuanced interactions, such as aligning the character with the edge of a barrier or triggering specific animations based on proximity. This level of precision influenced the development of collision systems in later games, particularly those that required detailed interactions with the environment. Games like Super Mario 64 and Half-Life built on these principles to create immersive worlds where objects and characters interacted seamlessly. Mechner's work laid the groundwork for the sophisticated collision systems that are now standard in modern game engines."

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