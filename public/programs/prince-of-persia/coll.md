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
description: "Collision detection routines for Prince of Persia (1989), showcasing cinematic platformer innovations."
is_excerpt: true
excerpt_lines: 200

summary:
  - point: "Bank-switched memory techniques to fit complex game logic into 128K"
    link: "https://en.wikipedia.org/wiki/Bank-switching"
    link_label: "Bank-switching"
  - point: "Rotoscoping animation inspired by Jordan Mechner's brother's movements"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Collision detection using pixel-level precision"
    link: "https://en.wikipedia.org/wiki/Collision_detection"
    link_label: "Collision Detection"
  - point: "Apple II hardware constraints shaped game design"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II Series"
  - point: "Solo development by Jordan Mechner over four years"
    link: "https://en.wikipedia.org/wiki/Jordan_Mechner"
    link_label: "Jordan Mechner"

enhancements:
  - id: "jmp-table-for-collision-routines"
    line_start: 13
    line_end: 25
    title: "Jump Table: Routing Collision Logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Jump_table"
    image_url: ""
    image_caption: ""
    content: "The jump table here provides a centralized way to route execution to various collision-related routines, such as `CHECKBARR`, `COLLISIONS`, and `GETFWDDIST`. This design allows the programmer to efficiently organize and access subroutines without hardcoding specific calls throughout the program. In the mid-1980s, memory and processing power were precious commodities on machines like the Apple IIe, which had a 1 MHz 6502 processor and limited RAM. By using a jump table, Jordan Mechner could ensure that the game logic remained modular and adaptable, even as the complexity of Prince of Persia's cinematic gameplay grew. This technique, though common in assembly programming, was particularly vital for a solo developer managing an ambitious project. The jump table also reflects the influence of structured programming principles, which were gaining traction during this era. Its modularity would later inspire similar designs in other games and systems, as developers sought to balance performance with maintainability."
  - id: "barrier-distance-data-table"
    line_start: 55
    line_end: 56
    title: "Barrier Distance Table: Precision Collisions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The `BarL` and `BarR` tables define the pixel distances from the edges of various barriers, such as gates, flasks, and slicers. This data is indexed by barrier type and plays a critical role in the game's collision detection system. In the late 1980s, pixel-perfect collision detection was a groundbreaking feature, especially for a platformer. It enabled the fluid and precise interactions that defined Prince of Persia's gameplay, such as narrowly avoiding traps or interacting with objects. Mechner's decision to implement this level of detail reflects his commitment to creating a cinematic experience, where every movement and interaction feels intentional. The reliance on data tables like these also highlights the constraints of the Apple II hardware, where memory efficiency was paramount. By precomputing and storing values, the game could quickly access and use them during runtime, avoiding costly calculations. This approach influenced later games, which adopted similar techniques to achieve precision in collision detection."
  - id: "check-barrier-collision"
    line_start: 72
    line_end: 185
    title: "Collision Logic: Navigating Barriers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The `CHECKBARR` routine is a cornerstone of Prince of Persia's collision detection system. It checks for interactions between the protagonist and vertical barriers, such as walls and gates. The routine begins by initializing collision flags (`collideL` and `collideR`) to a 'no-collision' state. It then evaluates whether the character is temporarily 'collision-proof,' such as during specific animations like turning. Next, it initializes buffers and calculates the range of blocks to check, ensuring that collision detection covers the relevant area of the screen. The routine retrieves collision data (`CD`) and screen data (`SN`) for the current frame, as well as for levels above and below the character. Finally, it compares the data from the current and previous frames to detect changes that indicate a collision. This approach, while computationally intensive, allowed Mechner to achieve the fluid and responsive gameplay that defined Prince of Persia. The routine exemplifies the challenges of programming for the Apple II, where every byte and cycle mattered. Mechner's meticulous attention to detail ensured that the game could handle complex interactions without sacrificing performance. This collision logic set a standard for platformers, influencing future titles that sought to replicate its precision and realism."
  - id: "get-collision-data"
    line_start: 194
    line_end: 200
    title: "Fetching Collision Data for Frames"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The `getCData` routine retrieves collision data for a specific block and frame, ensuring that the game can accurately detect interactions between the character and the environment. It uses the `begrange` variable to determine the left edge of the block and calls `getblockej` to fetch the necessary data. This routine is part of a larger system that handles collision detection across multiple levels and frames, enabling the game to maintain its cinematic and immersive feel. In the context of the Apple II hardware, this level of detail was a remarkable achievement. The machine's limited processing power and memory required developers to optimize every aspect of their code. Mechner's implementation demonstrates his ability to balance technical constraints with creative ambition, resulting in a game that felt ahead of its time. The techniques used here would later influence collision detection systems in other games, as developers sought to replicate the precision and responsiveness of Prince of Persia."

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