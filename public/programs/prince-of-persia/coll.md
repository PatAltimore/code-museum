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
description: "Collision detection routines for Prince of Persia's cinematic platforming on the Apple II, showcasing the ingenuity required to fit complex gameplay into 6502 assembly."

summary:
  - point: "Collision detection relies on comparing frame-by-frame data stored in buffers."
    link: "https://en.wikipedia.org/wiki/Collision_detection"
    link_label: "Collision detection"
  - point: "Memory constraints shaped the use of bank-switched memory and compact data structures."
    link: "https://en.wikipedia.org/wiki/Bank-switching"
    link_label: "Bank-switching"
  - point: "Rotoscoping animation influenced the precision of collision mechanics."
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "The game uses a pixel-perfect approach to barriers and edges."
    link: "https://en.wikipedia.org/wiki/Pixel_art"
    link_label: "Pixel art"
  - point: "Jordan Mechner's solo development required balancing technical constraints and artistic vision."
    link: "https://en.wikipedia.org/wiki/Jordan_Mechner"
    link_label: "Jordan Mechner"

enhancements:
  - id: "jump-table-organization"
    line_start: 13
    line_end: 25
    title: "Jump Table: Organizing Collision Logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Jump_table"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg/330px-Hash_table_3_1_1_0_1_0_0_SP.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Hash table 3 1 1 0 1 0 0 SP (CC BY-SA 3.0)"
    content: "This section begins with a jump table, a common technique in assembly programming to organize and quickly access subroutines. Each `jmp` instruction points to a specific collision-related routine, such as `CHECKBARR` for vertical barriers or `ENEMYCOLL` for enemy collisions. In the constrained environment of the Apple II, where every byte mattered, jump tables were a way to structure code efficiently and reduce branching overhead. Jordan Mechner, working solo on Prince of Persia, needed to ensure that the game could handle complex interactions like character movement, enemy behavior, and environmental obstacles within the limited 128K memory available. This jump table reflects his effort to modularize the code for clarity and reuse. The approach survives in modern programming, where function pointers or virtual tables serve similar purposes in higher-level languages."
  - id: "barrier-data-table"
    line_start: 55
    line_end: 56
    title: "Barrier Data Table: Mapping the Environment"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_structure"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Fighter_hitbox.svg/330px-Fighter_hitbox.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Fighter hitbox (CC BY 3.0)"
    content: "The `BarL` and `BarR` tables define the distances in pixels from the edges of blocks to barriers, indexed by barrier type. This compact representation allows the game to quickly determine collision boundaries for different objects, such as gates, flasks, and slicers. In the late 1980s, memory was precious, and every data structure had to be as small and efficient as possible. Mechner's design reflects the constraints of the Apple II's 6502 processor, which had limited addressing capabilities and no built-in support for complex data structures. By encoding environmental details in small tables, he ensured the game could handle dynamic interactions without exceeding memory limits. This technique of using indexed tables for environmental logic remains a foundational approach in game development."
  - id: "check-barrier-collision"
    line_start: 72
    line_end: 185
    title: "Pixel-Perfect Collision Detection"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The `CHECKBARR` routine is a cornerstone of Prince of Persia's gameplay. It checks for collisions with vertical barriers by comparing frame-by-frame data stored in buffers (`thisframe` and `lastframe`). The routine begins by setting a 'no-collision' flag and verifying whether the character is temporarily immune to collisions, such as during a turning animation. It then calculates the range of blocks to check, retrieves collision data for the current frame, and compares it with the previous frame. If a change from 0 to 1 is detected in the data, a collision is registered. This pixel-perfect approach was essential for the game's precise platforming mechanics, where the player's movements had to align seamlessly with the environment. In 1989, such precision was rare, especially on hardware as limited as the Apple II. Mechner's background in film and his use of rotoscoping influenced this meticulous attention to detail, ensuring the game felt fluid and cinematic. The collision detection system set a standard for platformers, influencing future titles that sought to achieve similar levels of realism."
  - id: "get-collision-data"
    line_start: 194
    line_end: 200
    title: "Fetching Frame Data for Collision Checks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The `getCData` subroutine retrieves collision data for the current frame, using the `blocky` variable to determine the vertical position and the `begrange` variable for the horizontal range. It modifies specific memory locations (`:smodSN` and `:smodCD`) to point to the relevant data buffers. This routine is part of the larger collision detection system, which relies on comparing data across frames to identify changes that indicate collisions. In the context of the Apple II's limited processing power and memory, this approach was both innovative and necessary. By precomputing and storing frame data, Mechner reduced the computational overhead during gameplay, allowing the game to run smoothly despite the hardware constraints. This method of using buffers to manage dynamic data is still widely used in modern programming, particularly in real-time applications like video games."

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