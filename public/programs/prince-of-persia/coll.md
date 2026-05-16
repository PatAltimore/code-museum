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
description: "Collision detection in Prince of Persia's Apple II assembly code"

summary:
  - point: "Bank-switched memory usage to fit within 128K constraints"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Rotoscoping animation technique traced from filmed movements"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Collision detection optimized for cinematic platforming gameplay"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Use of data buffers for frame-by-frame collision checks"
    link: "https://en.wikipedia.org/wiki/Double_buffering"
    link_label: "Double Buffering"
  - point: "Vertical barrier collision logic tailored to Apple II hardware"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II Series"

enhancements:
  - id: "jump-table-for-subroutine-dispatch"
    line_start: 13
    line_end: 26
    title: "Jump Table: Efficient Subroutine Dispatch"
    wikipedia_url: "https://en.wikipedia.org/wiki/Jump_table"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Fighter_hitbox.svg/330px-Fighter_hitbox.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Fighter hitbox (CC BY 3.0)"
    content: "This section defines a jump table, a common technique in assembly programming to efficiently dispatch subroutines. Each `jmp` instruction points to a specific routine handling a distinct aspect of gameplay, such as collision detection (`CHECKCOLL`), animation (`ANIMCHAR`), or interactions with barriers (`CHECKBARR`). In 1989, Jordan Mechner was working within the constraints of the Apple II's 6502 processor, which lacked advanced control flow mechanisms. Jump tables allowed rapid branching without the overhead of conditional checks, a necessity for maintaining smooth gameplay on hardware with limited processing power. This approach reflects Mechner's deep understanding of the Apple II's architecture and his ability to optimize for performance. The jump table structure would later influence programming patterns in other resource-constrained systems, demonstrating the enduring utility of this technique."
  - id: "barrier-distance-data-table"
    line_start: 55
    line_end: 56
    title: "Barrier Distance Table: Precise Collision Zones"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The `BarL` and `BarR` tables define the distances from the edges of a block to vertical barriers, indexed by barrier type. This data is crucial for collision detection, ensuring that the prince interacts accurately with gates, slicers, and other obstacles. In the late 1980s, precision in collision detection was a hallmark of high-quality games, especially in platformers where gameplay depended on tight control and responsiveness. Mechner's decision to encode these distances as a lookup table reflects the constraints of the Apple II's limited memory and processing power. By precomputing these values, the game avoids expensive calculations during runtime, enabling smoother gameplay. This technique exemplifies the ingenuity required to deliver cinematic experiences on early home computers."
  - id: "check-barrier-collision"
    line_start: 72
    line_end: 185
    title: "Vertical Barrier Collision: Frame-by-Frame Precision"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The `CHECKBARR` routine is the heart of vertical barrier collision detection in Prince of Persia. It begins by initializing flags to indicate no collision, then checks whether the character is temporarily collision-proof (e.g., while turning). The routine uses frame-by-frame data buffers (`thisframe` and `lastframe`) to detect changes in barrier states, comparing low and high nibbles of collision data to determine interactions with the left and right edges of barriers. In the mid-1980s, collision detection was a challenging problem due to the Apple II's limited computational resources. Mechner's approach leverages precomputed data and efficient bitwise operations to minimize processing overhead. This method allowed the game to deliver responsive and realistic interactions, critical for its cinematic platforming gameplay. The reliance on frame-by-frame comparisons highlights the influence of animation techniques like rotoscoping, where fluid motion was paramount. This routine laid the groundwork for more sophisticated collision systems in later games."
  - id: "get-collision-data"
    line_start: 194
    line_end: 200
    title: "Fetching Collision Data: Modular Design"
    wikipedia_url: "https://en.wikipedia.org/wiki/Modular_programming"
    image_url: ""
    image_caption: ""
    content: "The `getCData` routine retrieves collision data for the current frame, using modular subroutine calls to handle specific blocks and levels. By storing the range of blocks (`begrange` and `endrange`) and using indexed addressing, the routine efficiently processes collision data for the current level, as well as levels above and below. This modular design reflects Mechner's careful planning to manage the Apple II's limited memory and processing power. Modular programming was a growing trend in the 1980s, as developers sought ways to create reusable and maintainable code. Mechner's implementation demonstrates how this principle could be applied even in assembly language, paving the way for more structured programming practices in game development. The ability to fetch and process collision data dynamically contributed to the game's fluid gameplay and immersive experience."

---

; excerpt — first 200 lines of 01 POP Source/Source/COLL.S

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