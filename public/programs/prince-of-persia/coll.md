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
description: "Collision detection and response routines for Prince of Persia (1989), showcasing Jordan Mechner's ingenuity in crafting cinematic gameplay on the Apple II."

summary:
  - point: "Collision detection optimized for Apple II hardware constraints"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Routines for handling barriers, slicers, and gates"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Use of rotoscoping-inspired animation logic"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Bank-switched memory techniques to fit within 128K"
    link: "https://en.wikipedia.org/wiki/Bank-switching"
    link_label: "Bank-switching"
  - point: "Collision detection tailored for cinematic platforming gameplay"
    link: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    link_label: "Cinematic platformer"

enhancements:
  - id: "collision-jump-table"
    line_start: 13
    line_end: 25
    title: "Jump Table for Collision Subroutines"
    wikipedia_url: "https://en.wikipedia.org/wiki/Jump_table"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Fighter_hitbox.svg/330px-Fighter_hitbox.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Fighter hitbox (CC BY 3.0)"
    content: "This section defines a jump table, a common technique in assembly programming to efficiently redirect execution to different subroutines. Each `jmp` instruction points to a specific collision-related routine, such as `CHECKBARR` for barrier checks or `ENEMYCOLL` for enemy-specific collision handling. In the constrained environment of the Apple II, where memory and processing power were limited, jump tables minimized overhead and allowed for modular design. Jordan Mechner used this structure to organize the game's collision logic, ensuring that each type of interaction—whether with barriers, gates, or enemies—was handled efficiently. This approach reflects the meticulous optimization required to fit complex gameplay mechanics into the Apple II's 128K memory."
  - id: "barrier-data-table"
    line_start: 55
    line_end: 56
    title: "Barrier Data Table: Distances and Codes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "The `BarL` and `BarR` tables define pixel distances from the edges of blocks to barriers, indexed by barrier type. This compact representation allowed the game to quickly determine collision boundaries for different objects, such as gates, flasks, and slicers. In 1989, memory efficiency was paramount, and lookup tables like this were a staple of assembly programming. Mechner's use of these tables highlights his ability to balance precision and performance, ensuring smooth gameplay while adhering to the Apple II's hardware constraints."
  - id: "check-barrier-collision"
    line_start: 72
    line_end: 185
    title: "Collision Detection with Vertical Barriers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The `CHECKBARR` subroutine is a cornerstone of Prince of Persia's collision detection system. It checks for interactions between the player character and vertical barriers, such as walls or gates. The routine begins by setting a 'no-collision' flag and then evaluates whether the character is temporarily 'collision-proof' due to actions like turning. It proceeds to gather data from the current frame and compares it with the previous frame to detect changes indicating a collision. This method leverages the Apple II's limited processing power by focusing only on relevant data changes. Mechner's implementation reflects the ingenuity required to create responsive gameplay on hardware with minimal computational resources."
  - id: "get-collision-data"
    line_start: 194
    line_end: 254
    title: "Fetching Collision Data for Current Frame"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The `getCData` routine retrieves collision data for the current frame, focusing on the blocks within the character's range. It calculates the edges of barriers relative to the character's position and stores this information in buffers for further processing. This routine exemplifies Mechner's meticulous attention to detail, ensuring that the game could accurately detect collisions while maintaining real-time performance. By precomputing barrier edges and leveraging lookup tables, Mechner optimized the collision system to fit within the Apple II's constraints, enabling the cinematic platforming experience that defined Prince of Persia."
  - id: "animate-character-frame"
    line_start: 994
    line_end: 1156
    title: "Animating the Prince: Frame-by-Frame Logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "The `ANIMCHAR` routine is responsible for advancing the prince's animation frame by frame, based on the sequence table. It interprets specific instructions, such as moving the character's position (`chx`, `chy`), flipping his direction (`aboutface`), or triggering special effects (`tap`, `die`). This logic is directly tied to Mechner's rotoscoping technique, where he traced his brother's movements to create lifelike animations. The routine's design reflects the game's emphasis on fluid, cinematic motion, a groundbreaking achievement on the Apple II. By combining technical precision with artistic vision, Mechner set a new standard for animation in video games."
  - id: "check-slicer-collision"
    line_start: 1186
    line_end: 1255
    title: "Slicer Collision: Precision and Drama"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The `CHECKSLICE` routine handles one of Prince of Persia's most iconic gameplay elements: the slicer traps. It checks whether the character overlaps with a closed slicer and, if so, triggers the dramatic slicing animation. Mechner's implementation carefully aligns the character with the slicer block and floor, ensuring visual and gameplay precision. This routine showcases the game's cinematic aspirations, blending technical ingenuity with dramatic storytelling. The slicer traps became a memorable feature of the game, emphasizing the perilous nature of the prince's journey and the precision required to navigate it."
  - id: "check-gate-collision"
    line_start: 1319
    line_end: 1367
    title: "Gate Collision: Dynamic Interactions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The `CHECKGATE` routine handles interactions with gates, including scenarios where the character is knocked aside by a closing gate. This dynamic collision logic adds a layer of realism to the gameplay, making barriers feel active and responsive rather than static obstacles. Mechner's attention to detail in handling edge cases, such as crouching or standing directly under a gate, reflects his commitment to creating a believable and immersive game world. This routine is a testament to the game's innovative design, blending technical complexity with cinematic storytelling."
  - id: "enemy-collision-detection"
    line_start: 1389
    line_end: 1453
    title: "Enemy Collision: Simplified Detection Logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The `ENEMYCOLL` routine provides a streamlined collision detection system for enemies, focusing on interactions with walls and gates during combat. Unlike the player character, enemies have limited collision data, reflecting the constraints of the Apple II's memory and processing power. This routine ensures that enemies behave realistically, backing into barriers when appropriate and responding dynamically to the environment. Mechner's ability to balance complexity and efficiency is evident here, as he crafted a system that supports the game's cinematic combat sequences without overwhelming the hardware."

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