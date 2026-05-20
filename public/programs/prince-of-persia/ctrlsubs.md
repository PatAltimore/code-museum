---
title: "CTRLSUBS.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/CTRLSUBS.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/CTRLSUBS.S"
year: 1989
author: "Jordan Mechner"
slug: "ctrlsubs"
order: 16
description: "This file contains subroutines for character control and movement in the Apple II version of Prince of Persia, showcasing clever memory and hardware management in 6502 assembly."

summary:
  - point: "Uses bank-switched memory to fit within 128KB constraints"
    link: "https://en.wikipedia.org/wiki/Bank-switching"
    link_label: "Bank-switching"
  - point: "Implements rotoscoped animation techniques for cinematic realism"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Optimized routines for handling offscreen blocks and adjacent screens"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Innovative use of lookup tables for spatial calculations"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup table"
  - point: "Introduced cinematic platformer mechanics that influenced later games"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"

enhancements:
  - id: "read-block-object-id"
    line_start: 132
    line_end: 173
    title: "How Blocks Became Objects on Screen"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "The RDBLOCK subroutine converts screen coordinates into object identifiers (objid) by tracing offscreen blocks back to their home screen. This routine is pivotal for managing the game's spatial logic, ensuring that objects interact correctly even when partially offscreen. At the time, the Apple II's limited memory and processing power required developers to think creatively about how to manage spatial relationships. Jordan Mechner's approach here is recursive and efficient, leveraging lookup tables and careful state management. This technique allowed the game to maintain its cinematic feel by ensuring smooth transitions and interactions between screens. The method influenced later games that needed to handle offscreen objects, particularly in the platformer genre."
  - id: "handle-offscreen-blocks"
    line_start: 175
    line_end: 198
    title: "Recursive Offscreen Block Handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Recursion_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The handler subroutine recursively adjusts block coordinates when they fall outside the visible screen area. By calling subroutines like offleft, offright, offtop, and offbot, it ensures that blocks wrap around correctly to adjacent screens. This was a clever solution to the problem of managing a continuous game world on hardware with strict memory constraints. In 1989, recursion in assembly was uncommon due to the risk of stack overflow, but Mechner used it sparingly and effectively. This approach influenced later games that needed to handle edge cases in scrolling worlds, such as Super Mario Bros. and other platformers."
  - id: "adjacent-screen-calculation"
    line_start: 236
    line_end: 266
    title: "Mapping Adjacent Screens with Lookup Tables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "GETLEFT, GETRIGHT, GETUP, and GETDOWN calculate adjacent screen numbers using lookup tables. These routines are essential for determining spatial relationships between screens, enabling smooth transitions as the player moves. The use of lookup tables minimizes computational overhead, a critical consideration on the Apple II's 1MHz processor. This technique reflects the ingenuity required to create immersive worlds on limited hardware. Lookup tables became a standard practice in game development, appearing in titles like Doom and Quake for fast spatial calculations."
  - id: "surrounding-screens-fetch"
    line_start: 276
    line_end: 318
    title: "Fetching Surrounding Screens for Immersion"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tile-based_video_game"
    image_url: ""
    image_caption: ""
    content: "GETSCRNS retrieves the eight surrounding screens from the map and stores them in variables like scrnAbove and scrnBelow. This routine is vital for creating the illusion of a seamless world, as it preloads adjacent screens to avoid visible delays during transitions. In the late 1980s, such techniques were cutting-edge, as most games relied on static screens or simple scrolling. Mechner's approach here laid the groundwork for more advanced tile-based games, influencing titles like The Legend of Zelda and Metroid."
  - id: "base-x-coordinate-calculation"
    line_start: 329
    line_end: 352
    title: "Calculating Character Base X-Coordinates"
    wikipedia_url: "https://en.wikipedia.org/wiki/Coordinate_system"
    image_url: ""
    image_caption: ""
    content: "GETBASEX calculates a character's base X-coordinate by combining frame data and direction (forward or backward). This routine ensures precise positioning, which is crucial for the game's platforming mechanics. In the context of the Apple II, where pixel-perfect accuracy was challenging due to hardware limitations, this subroutine demonstrates Mechner's attention to detail. The technique influenced later platformers that required precise collision detection and character movement, such as Sonic the Hedgehog and Rayman."
  - id: "add-char-x-coordinate"
    line_start: 342
    line_end: 363
    title: "Adding X-Coordinates Based on Facing Direction"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "ADDCHARX adjusts a character's X-coordinate based on their facing direction, flipping the sign of the addition if the character is facing left. This routine is a simple yet effective way to handle mirrored movement, a necessity for creating realistic animations. The approach reflects the constraints of 6502 assembly, where every instruction had to be carefully optimized. This technique became a staple in games with mirrored sprites, influencing titles like Castlevania and Mega Man."
  - id: "setup-character-data"
    line_start: 781
    line_end: 841
    title: "Translating Character Data for Frame Advancement"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "SETUPCHAR translates character data into a format suitable for frame advancement, decoding image numbers and calculating screen coordinates. This routine is a cornerstone of Prince of Persia's cinematic animation system, which relied on rotoscoping to create fluid movements. Mechner's innovative use of encoded data and precise calculations allowed the game to achieve a level of realism that was unprecedented at the time. The technique influenced later games that prioritized animation quality, such as Another World and Flashback."
  - id: "setup-sword-visibility"
    line_start: 843
    line_end: 897
    title: "Making the Sword Visible When Needed"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "SETUPSWORD determines whether a character's sword should be visible based on their state and position. If the sword is visible, it is added to the object table. This routine highlights the game's attention to detail, ensuring that visual elements are contextually accurate. In the late 1980s, sprite management was a complex task due to hardware limitations, and Mechner's approach here is both efficient and elegant. The technique influenced sprite-based games that required dynamic object visibility, such as Street Fighter II and Mortal Kombat."
  - id: "decode-sword-image"
    line_start: 1007
    line_end: 1039
    title: "How Sword Images Are Decoded"
    wikipedia_url: "https://en.wikipedia.org/wiki/6502"
    image_url: ""
    image_caption: ""
    content: "This subroutine, `decodeim`, decodes the sword image and character image data based on bitwise operations and stores the results in `FCharTable` and `FCharImage`. The programmer, Jordan Mechner, was solving the problem of dynamically selecting the correct sprite data for the sword and character during gameplay. In the mid-1980s, sprite handling on the Apple II was constrained by limited memory and processing power. Mechner's approach of using bitwise manipulation to extract table indices was a clever optimization that minimized memory usage while ensuring fast access to sprite data. This technique influenced later sprite-based games, where efficient image decoding became standard practice in resource-constrained environments."
  - id: "get-character-edges"
    line_start: 1057
    line_end: 1159
    title: "The Algorithm That Defines Boundaries"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The `GETEDGES` subroutine calculates the boundaries of the character's image, including left, right, top, and bottom edges. It also determines collision detection boundaries (`CDLeftEj` and `CDRightEj`) and image dimensions (`imheight` and `imwidth`). This was essential for precise collision detection and interaction with the environment. In the 1980s, collision detection was a challenging problem due to hardware constraints. Mechner's approach used efficient arithmetic and logical operations to calculate boundaries dynamically, allowing for smooth gameplay and realistic interactions. This technique became foundational for platformers and influenced games like Another World and Flashback, which expanded on cinematic platforming mechanics."
  - id: "quick-floor-redraw"
    line_start: 1161
    line_end: 1227
    title: "Marking Floors for Redraws"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The `QUICKFLOOR` subroutine identifies floor pieces that need to be redrawn based on the character's position and action. It uses results from `GETEDGES` to determine affected blocks and marks them for redraw. This technique ensured smooth visual updates without redrawing the entire screen, a critical optimization given the Apple II's limited graphical capabilities. Mechner's use of selective redraws minimized flickering and improved performance, a method that prefigured modern double-buffering techniques. This approach influenced later games that relied on partial screen updates to optimize rendering, such as early PC platformers and arcade games."
  - id: "crop-character-boundaries"
    line_start: 1303
    line_end: 1478
    title: "Cropping Characters for Realistic Movement"
    wikipedia_url: "https://en.wikipedia.org/wiki/Clipping_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `CROPCHAR` subroutine adjusts the character's boundaries based on environmental constraints, such as solid floors or panels. It dynamically calculates cropping values (`FCharCU`, `FCharCL`, `FCharCR`, `FCharCD`) to ensure the character interacts realistically with the environment. This was a novel approach to clipping in computer graphics, allowing for precise movement and collision handling. Mechner's attention to detail in these calculations contributed to the game's immersive feel, setting a new standard for platformers. This technique influenced later games that required dynamic adjustments to character boundaries, such as Tomb Raider and Uncharted."
  - id: "compare-space-and-barrier"
    line_start: 1495
    line_end: 1563
    title: "Deciding What’s Passable or Impassable"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The `CMPSPACE` and `CMPBARR` subroutines determine whether a given object is passable (space) or impassable (barrier). These routines use object IDs and predefined rules to classify objects dynamically during gameplay. Mechner's implementation allowed for complex interactions between the character and the environment, such as passing through arches or being blocked by gates. This dynamic classification system was ahead of its time, enabling rich gameplay mechanics. It influenced later games that required nuanced environmental interactions, such as The Legend of Zelda and Metroid."
  - id: "load-save-character-data"
    line_start: 1911
    line_end: 1985
    title: "Preserving Character States Across Frames"
    wikipedia_url: "https://en.wikipedia.org/wiki/Save_(video_gaming)"
    image_url: ""
    image_caption: ""
    content: "The `LOADKID`, `SAVEKID`, `LOADSHAD`, and `SAVESHAD` subroutines manage the loading and saving of character data, including the protagonist and his shadow. These routines ensure that character states are preserved across frames and interactions, a critical feature for maintaining continuity in gameplay. Mechner's implementation reflects the constraints of the Apple II, where memory management was paramount. This approach influenced save systems in later games, where preserving state became a standard feature, such as in RPGs and adventure games like Final Fantasy and Monkey Island."
  - id: "recharge-strength-meter"
    line_start: 2015
    line_end: 2041
    title: "Boosting and Recharging the Strength Meter"
    wikipedia_url: "https://en.wikipedia.org/wiki/Health_(gaming)"
    image_url: ""
    image_caption: ""
    content: "The `RECHARGEMETER` and `BOOSTMETER` subroutines handle the player's strength meter, recharging it to its maximum value or boosting its maximum limit. This mechanic added a layer of strategy to the gameplay, as players had to manage their strength carefully. Mechner's implementation was a precursor to modern health systems in games, where health and stamina meters are integral to character progression. This mechanic influenced later games with similar systems, such as Dark Souls and The Elder Scrolls series."
  - id: "calculate-distance-with-facing-adjustments"
    line_start: 2043
    line_end: 2102
    title: "Calculate Distance with Facing Adjustments"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The GETOPDIST routine calculates the horizontal distance between the player character (Char) and the opponent (Op), factoring in their respective positions, directions, and facing. The logic begins by comparing screen positions to determine if the characters are in the same screen segment. If they are, it calculates the absolute difference between their X coordinates, ensuring the result fits within the 8-bit range of the Apple II's 6502 processor (values ≤ 127). If the player character is facing left, the routine negates the distance value, reflecting the relative orientation. Additionally, if the characters are facing opposite directions, it adjusts the distance by an estimated width of the figure, ensuring accurate collision and interaction detection. In 1989, this type of calculation was crucial for games like Prince of Persia, where precision in character movement and interaction was key to achieving cinematic realism. The Apple II's limited processing power and memory constraints meant that every byte and cycle mattered. Jordan Mechner, working solo, had to devise efficient algorithms to handle these calculations while maintaining smooth gameplay. This approach to distance calculation influenced later platformers and action games, where character interactions needed to account for relative positions and orientations. The technique of adjusting for facing directions and environmental factors became standard in many sprite-based games, laying the groundwork for more complex collision detection systems in modern engines like Unity and Unreal."
  - id: "adjust-character-y-for-environment"
    line_start: 2104
    line_end: 2114
    title: "Adjust Character Y for Environment"
    wikipedia_url: "https://en.wikipedia.org/wiki/Platform_game"
    image_url: ""
    image_caption: ""
    content: "The UNEVENFLOOR routine adjusts the vertical position (Y coordinate) of the player character when interacting with environmental features like pressure plates. It begins by calling a subroutine (getunderft) to identify the type of object directly beneath the character. If the object is a pressure plate (dpressplate), the routine increments the CharY value, simulating the character stepping down slightly to account for the uneven floor. This simple yet effective adjustment highlights the attention to detail in Prince of Persia's design. In the late 1980s, platform games were evolving from simple jump-and-run mechanics to more immersive experiences that incorporated environmental interactions. Mechner's use of rotoscoping to create fluid animations complemented these environmental adjustments, making the game feel more grounded and realistic. The concept of dynamically adjusting character positions based on environmental features became a staple in platform games. Later titles like Another World (1991) and Flashback (1992) built on this idea, integrating environmental physics and interactions into their gameplay. Today, such adjustments are a fundamental part of game physics engines, ensuring characters respond naturally to terrain and objects in their environment."

---

* ctrlsubs
org = $d000
 tr on
 lst off
*-------------------------------
*
*  PRINCE OF PERSIA
*  Copyright 1989 Jordan Mechner
*
*-------------------------------
*
*   Misc. subroutines relating to character control & movement
*
*-------------------------------
 org org

 jmp GETFRAME
 jmp GETSEQ
 jmp GETBASEX
 jmp GETBLOCKX
 jmp GETBLOCKXP

 jmp GETBLOCKY
 jmp GETBLOCKEJ
 jmp ADDCHARX
 jmp GETDIST
 jmp GETDIST1

 jmp GETABOVEBEH
 jmp RDBLOCK
 jmp RDBLOCK1
 jmp SETUPSWORD
 jmp GETSCRNS

 jmp ADDGUARDOBJ
 jmp OPJUMPSEQ
 jmp GETEDGES
 jmp INDEXCHAR
 jmp QUICKFG

 jmp CROPCHAR
 jmp GETLEFT
 jmp GETRIGHT
 jmp GETUP
 jmp GETDOWN

 jmp CMPSPACE
 jmp CMPBARR
 jmp ADDKIDOBJ
 jmp ADDSHADOBJ
 jmp ADDREFLOBJ

 jmp LOADKID
 jmp LOADSHAD
 jmp SAVEKID
 jmp SAVESHAD
 jmp SETUPCHAR

 jmp GETFRAMEINFO
 jmp INDEXBLOCK
 jmp MARKRED
 jmp MARKFRED
 jmp MARKWIPE

 jmp MARKMOVE
 jmp MARKFLOOR
 jmp UNINDEX
 jmp QUICKFLOOR
 jmp UNEVENFLOOR

 jmp MARKHALF
 jmp ADDSWORDOBJ
 jmp GETBLOCKYP
 jmp CHECKLEDGE
 jmp GET2INFRONT

 jmp CHECKSPIKES
 jmp RECHARGEMETER
 jmp ADDFCHARX
 jmp FACEDX
 jmp JUMPSEQ

 jmp GETBASEBLOCK
 jmp LOADKIDWOP
 jmp SAVEKIDWOP
 jmp GETOPDIST
 jmp LOADSHADWOP

 jmp SAVESHADWOP
 jmp BOOSTMETER
 jmp GETUNDERFT
 jmp GETINFRONT
 jmp GETBEHIND

 jmp GETABOVE
 jmp GETABOVEINF
 jmp CMPWALL

*-------------------------------
 lst
 put eq
 lst
 put gameeq
 lst
 put movedata
 lst
 put seqdata
 lst
 put soundnames
 lst off

*-------------------------------
 dum locals

tempright ds 1
ztemp ds 2
tempstate ds 1
]cutdir ds 1

 dend

*-------------------------------
*  Misc. data

plus1 db -1,1
minus1 db 1,-1

maxmaxstr = 10 ;strength meter maximum

thinner = 3

*-------------------------------
*
*  R E A D   B L O C K
*
*  In:  A = screen #
*       X = block x (0-9 onscreen)
*       Y = block y (0-2 onscreen)
*
*  Out: A,X = objid
*       Y = block # (0-29)
*       BlueType, BlueSpec set
*       tempscrn,tempblockx,tempblocky = onscreen block coords
*
*  - Offscreen block values are traced to their home screen
*  - Screen 0 is treated as a solid mass
*
*-------------------------------
RDBLOCK
 sta tempscrn
 stx tempblockx
 sty tempblocky

RDBLOCK1
 jsr handler ;handle offscreen references

 lda tempscrn
 beq :nullscrn ;screen 0
 jsr calcblue ;returns BlueType/Spec

 ldy tempblocky
 lda Mult10,y
 clc
 adc tempblockx
 tay
 lda (BlueType),y
 and #idmask
 tax ;return result in X & A
 rts

:nullscrn lda #block
 tax
 rts

*-------------------------------
*  Handle offscreen block references (recursive)

handler lda tempblockx
 bpl :1
 jsr offleft
 jmp handler

:1 cmp #10
 bcc :2
 jsr offrt
 jmp handler

:2 lda tempblocky
 bpl :3
 jsr offtop
 jmp handler

:3 cmp #3
 bcc :rts
 jsr offbot
 jmp handler

:rts rts

offtop clc
 adc #3
 sta tempblocky

 lda tempscrn
 jsr GETUP
 sta tempscrn
 rts

offbot sec
 sbc #3
 sta tempblocky

 lda tempscrn
 jsr GETDOWN
 sta tempscrn
 rts

offleft clc
 adc #10
 sta tempblockx

 lda tempscrn
 jsr GETLEFT
 sta tempscrn
 rts

offrt sec
 sbc #10
 sta tempblockx

 lda tempscrn
 jsr GETRIGHT
 sta tempscrn
]rts rts

*-------------------------------
*
*  Get adjacent screen numbers
*
*  In:  A = original screen #
*  Out: A = adjacent screen #
*
*-------------------------------
GETLEFT
 beq ]rts
 asl
 asl
 tax
 lda MAP-4,x
]rts rts

GETRIGHT
 beq ]rts
 asl
 asl
 tax
 lda MAP-3,x
 rts

GETUP
 beq ]rts
 asl
 asl
 tax
 lda MAP-2,x
 rts

GETDOWN
 beq ]rts
 asl
 asl
 tax
 lda MAP-1,x
 rts

*-------------------------------
*
*  G E T   S C R E E N S
*
*  Get VisScrn's 8 surrounding screens from map
*  (Store in scrnAbove, scrnBelow, etc.)
*
*-------------------------------
GETSCRNS
 lda VisScrn
 jsr GETLEFT
 sta scrnLeft

 lda VisScrn
 jsr GETRIGHT
 sta scrnRight

 lda VisScrn
 jsr GETUP
 sta scrnAbove

 lda VisScrn
 jsr GETDOWN
 sta scrnBelow

* and diagonals

 lda scrnBelow
 jsr GETLEFT
 sta scrnBelowL

 lda scrnBelow
 jsr GETRIGHT
 sta scrnBelowR

 lda scrnAbove
 jsr GETLEFT
 sta scrnAboveL

 lda scrnAbove
 jsr GETRIGHT
 sta scrnAboveR
]rts rts

*-------------------------------
*
*  G E T   B A S E   X
*
*  In: Char data; frame data
*
*  Out: A = character's base X-coord
*
*-------------------------------
GETBASEX
 lda Fcheck
 and #Ffootmark
  ;# pixels to count in from left edge of image
 eor #$ff
 clc
 adc #1 ;- Fcheck

 clc
 adc Fdx ;Fdx (+ = fwd, - = bkwd)

 jmp ADDCHARX ;Add to CharX in direction char is facing

*-------------------------------
*
*  Add A to CharX in direction char is facing
*
*  In: A = # pixels to add (+ = fwd, - = bkwd)
*      CharX = original char X-coord
*      CharFace = direction char is facing
*
*  Out: A = new char X-coord
*
*-------------------------------
ADDCHARX
 bit CharFace ;-1 = left (normal)
 bpl :right ;0 = right (mirrored)

 eor #$ff
 clc
 adc #1 ;A := -A

:right clc
 adc CharX
 rts

*-------------------------------
*
* Add A to FCharX
* (A range: -127 to 127)
*
* In: A; FChar data
* Out: FCharX
*
*-------------------------------
ADDFCHARX
 sta ztemp
 bpl :1 ;hibit clr

 lda #0
 sec
 sbc ztemp
 sta ztemp ;make it posititve

 lda #$ff ;hibit set
:1 eor FCharFace
 bmi :left

 lda ztemp
 clc
 adc FCharX
 sta FCharX

 lda FCharX+1
 adc #0
 sta FCharX+1
 rts

:left lda FCharX
 sec
 sbc ztemp
 sta FCharX

 lda FCharX+1
 sbc #0
 sta FCharX+1
 rts

*-------------------------------
*
* In: CharFace,CharBlockX,CharBlockY,CharScrn
*
* Out: Results of RDBLOCK for block underfoot/in front/etc.
*
*-------------------------------
GETUNDERFT
 ldx CharBlockX
 ldy CharBlockY
 lda CharScrn
 jmp RDBLOCK

GETINFRONT
 ldx CharFace
 inx
 lda CharBlockX
 clc
 adc plus1,x
 sta infrontx
 tax

 ldy CharBlockY
 lda CharScrn
 jmp RDBLOCK

GET2INFRONT
 ldx CharFace
 inx
 lda CharBlockX
 clc
 adc plus1,x
 clc
 adc plus1,x
 tax

 ldy CharBlockY
 lda CharScrn
 jmp RDBLOCK

GETBEHIND
 ldx CharFace
 inx
 lda CharBlockX
 clc
 adc minus1,x
 sta behindx
 tax

 ldy CharBlockY
 lda CharScrn
 jmp RDBLOCK

GETABOVE
 ldy CharBlockY
 dey
 sty abovey

 ldx CharBlockX
 lda CharScrn
 jmp RDBLOCK

GETABOVEINF
 ldx CharFace
 inx
 lda CharBlockX
 clc
 adc plus1,x
 sta infrontx
 tax

 ldy CharBlockY
 dey
 sty abovey

 lda CharScrn
 jmp RDBLOCK

GETABOVEBEH
 ldx CharFace
 inx
 lda CharBlockX
 clc
 adc minus1,x
 sta behindx
 tax

 ldy CharBlockY
 dey
 sty abovey

 lda CharScrn
 jmp RDBLOCK

*-------------------------------
*
*  G E T   D I S T A N C E
*
*  In: Char data
*
*  Out: A = # of pixels (0-13) to add to CharX to move
*       char base X-coord to end of current block
*
*-------------------------------
GETDIST
 jsr GETBASEX ;returns A = base X-coord

GETDIST1
 jsr GETBLOCKXP ;returns A = block #, OFFSET = pixel #

 lda CharFace ;0=right, -1=left
 beq :facingright

:facingleft
 lda OFFSET
 rts

:facingright
 lda #13
 sec
 sbc OFFSET
 rts

*-------------------------------
*
*  G E T   B L O C K   E D G E
*
*  In:  A = block # (-5 to 14)
*  Out: A = screen X-coord of left edge
*
*-------------------------------
GETBLOCKEJ
 clc
 adc #5
 tax
 lda BlockEdge,x
 rts

*-------------------------------
*
*  G E T   B L O C K   X
*
*  In:  A = X-coord
*
*  Out: A = # of the 14-pixel-wide block within which
*           this pixel falls (0-9 onscreen)
*
*       OFFSET = pixel within this block
*
*  - Use GETBLOCKXP for objects on center plane
*  - Use GETBLOCKX for absolute X-coords & foreground plane
*
*-------------------------------
GETBLOCKXP
 sec
 sbc #angle

GETBLOCKX
 tay

 lda PixelTable,y
 sta OFFSET

 lda BlockTable,y
 rts

*-------------------------------
*
*  G E T   B L O C K   Y
*
*  In: A = screen Y-coord (0-255)
*
*  Out: A = block y (3 = o.s.)
*
*  - Use GETBLOCKYP for objects on center plane
*  - Use GETBLOCKY for absolute Y-coords & foreground plane
*
*-------------------------------
GETBLOCKY
 ldx #3
:loop cmp BlockTop+1,x
 bcs :gotY
 dex
 bpl :loop
:gotY txa
 rts


GETBLOCKYP
 ldx #3
:loop cmp FloorY+1,x
 bcs :gotY
 dex
 bpl :loop
:gotY txa
]rts rts

*-------------------------------
*
*  I N D E X   B L O C K
*
*  Index (tempblockx,tempblocky)
*
*  Return y = block # (0-29) and cc if block is onscreen
*         y = 0 to 9 and cs if block is on screen above
*         y = 30 and cs if block is o.s.
*
*-------------------------------
INDEXBLOCK
 ldy tempblocky
 bmi :above
 cpy #3
 bcs :os

 lda tempblockx
 cmp #10
 bcs :os ;0 <= tempblockx <= 9

 clc
 adc Mult10,y

 tay ;return y = block #
 clc ;and carry clr
 rts

:os ldy #30
 sec ;and carry set
 rts

:above ldy tempblockx
 sec
]rts rts

*-------------------------------
*
*  U N I N D E X
*
*  In: A = block index (0-29)
*  Out: A = blockx, X = blocky
*
*-------------------------------
UNINDEX
 ldx #0
:loop cmp #10
 bcc ]rts
 sec
 sbc #10
 inx
 bne :loop
]rts rts

*-------------------------------
*
*  G E T   B A S E   B L O C K
*
*  In: Char data
*  Out: CharBlockX
*
*-------------------------------
GETBASEBLOCK
 jsr getbasex
 jsr getblockxp
 sta CharBlockX
]rts rts

*-------------------------------
*
*  F A C E   D X
*
*  In: CharFace; A = DX
*
*  Out: DX if char is facing right, -DX if facing left
*
*-------------------------------
FACEDX
 bit CharFace
 bmi ]rts

 eor #$ff
 clc
 adc #1 ;negate

]rts rts

*-------------------------------
*
*  J U M P S E Q
*
*  Jump to some other point in sequence table
*
*  In: A = sequence # (1-127)
*
*-------------------------------
JUMPSEQ
 sec
 sbc #1
 asl
 tax ;x = 2(a-1)

 lda seqtab,x
 sta CharSeq

 lda seqtab+1,x
 sta CharSeq+1
]rts rts

*-------------------------------
*
*  Similar routine for Opponent
*
*-------------------------------
OPJUMPSEQ
 sec
 sbc #1
 asl
 tax ;x = 2(a-1)

 lda seqtab,x
 sta OpSeq

 lda seqtab+1,x
 sta OpSeq+1
]rts rts

*-------------------------------
*
*  I N D E X   C H A R
*
*  In: Char data; GETEDGES results
*
*  Out: FCharIndex = character block index
*
*-------------------------------
INDEXCHAR
 lda CharAction
 cmp #1
 bne :4
;If CharAction = 1 (on solid ground)
;use leftblock/bottomblock
 lda bottomblock
 sta tempblocky

 lda leftblock
:1 sta tempblockx

 lda CharPosn
 cmp #135
 bcc :2
 cmp #149
 bcc :climbup

:2 cmp #2
 beq :fall
 cmp #3
 beq :fall
 cmp #4
 beq :fall
 cmp #6
 bne :3
:fall
:climbup dec tempblockx  ;if falling or climbing up

:3 jsr indexblock
 sty FCharIndex
 rts

* else use CharBlockX/Y

:4 lda CharBlockY
 sta tempblocky

 lda CharBlockX
 jmp :1

*-------------------------------
*
*  S E T   U P   C H A R
*
*  Set up character for FRAMEADV
*
*  In: Char data
*  Out: FChar data
*
*  Translate char data into the form "addchar" expects
*  (Decode image #; get actual 280 x 192 screen coords)
*
*-------------------------------
SETUPCHAR
 jsr zerocrop ;(can call cropchar later)

 jsr GETFRAMEINFO

 lda CharFace
 sta FCharFace

 jsr decodeim ;get FCharImage & Table from
 ;encoded Fimage & Fsword data
 lda #0
 sta FCharX+1

 lda Fdx
 jsr addcharx ;A := CharX + Fdx
 sec
 sbc #ScrnLeft ;different coord system
 sta FCharX

 asl FCharX
 rol FCharX+1
 beq :pos

 lda FCharX
 cmp #$f0
 bcc :pos
 lda #$ff
 sta FCharX+1
:pos  ;X := 2X
 lda Fdy
 clc
 adc CharY
 sec
 sbc #ScrnTop
 sta FCharY

 lda Fcheck
 eor FCharFace ;Look only at the hibits
 bmi :ok ;They don't match-->even X-coord
;They match-->odd X-coord
 lda FCharX
 clc
 adc #1
 sta FCharX
 bcc :ok
 inc FCharX+1
:ok
]rts rts

*-------------------------------
*
*  S E T   U P   S W O R D
*
*  In: Char & FChar data
*
*  If character's sword is visible, add it to obj table
*
*-------------------------------
SETUPSWORD
 lda CharID
 cmp #2
 bne :3
 lda CharLife
 bmi :2 ;live guard's sword is always visible

:3 lda CharPosn
 cmp #229
 bcc :1
 cmp #238
 bcc :2 ;sheathing
:1 lda CharSword
 beq ]rts
:2
 lda Fsword
 and #$3f ;frame #
 beq ]rts ;no sword for this frame

 jsr getswordframe

 ldy #0
 lda (framepoint),y
 beq ]rts

 jsr decodeswim ;get FCharImage & Table

 iny
 lda (framepoint),y
 sta Fdx

 iny
 lda (framepoint),y
 sta Fdy

 lda Fdx
 jsr ADDFCHARX ;A := FCharX + Fdx

 lda Fdy
 clc
 adc FCharY
 sta FCharY

 jmp ADDSWORDOBJ

*-------------------------------
*
*  G E T   F R A M E
*
*  In: A = frame # (1-192)
*  Out: framepoint = 2-byte pointer to frame def table
*
*-------------------------------
GETFRAME ;Kid uses main char set
 jsr getfindex
 lda framepoint
 clc
 adc #Fdef
 sta framepoint
 lda framepoint+1
 adc #>Fdef
 sta framepoint+1
 rts

*-------------------------------
getaltframe1 ;Enemy uses alt set 1
 jsr getfindex
 lda framepoint
 clc
 adc #altset1
 sta framepoint
 lda framepoint+1
 adc #>altset1
 sta framepoint+1
 rts

*-------------------------------
getaltframe2 ;Princess & Vizier use alt set 2
 jsr getfindex
 lda framepoint
 clc
 adc #altset2
 sta framepoint
 lda framepoint+1
 adc #>altset2
 sta framepoint+1
 rts

*-------------------------------
getfindex
 sec
 sbc #1
 sta ztemp
 sta framepoint

 lda #0
 sta ztemp+1
 sta framepoint+1

 asl framepoint
 rol framepoint+1
 asl framepoint
 rol framepoint+1 ;2-byte multiply by 4

 lda framepoint
 clc
 adc ztemp
 sta framepoint

 lda framepoint+1
 adc ztemp+1
 sta framepoint+1 ;make it x5
 rts

*-------------------------------
*
* getswordframe
*
* In: A = frame #
* Out: framepoint
*
*-------------------------------
getswordframe
 sec
 sbc #1
 sta ztemp
 sta framepoint

 lda #0
 sta ztemp+1
 sta framepoint+1

 asl framepoint
 rol framepoint+1 ;x2

 lda framepoint
 clc
 adc ztemp
 sta framepoint

 lda framepoint+1
 adc ztemp+1
 sta framepoint+1 ;+1 is 3

 lda framepoint
 clc
 adc #swordtab
 sta framepoint

 lda framepoint+1
 adc #>swordtab
 sta framepoint+1

 rts

*-------------------------------
*
* Decode char image
*
* In:  Fimage, Fsword (encoded)
*
* Out: FCharImage (image #, 0-127)
*      FCharTable (table #, 0-7)
*
*-------------------------------
decodeim
 lda Fimage
 and #%10000000 ;bit 2 of table #
 sta ztemp

 lda Fsword
 and #%11000000 ;bits 0-1 of table #

 lsr
 adc ztemp
 lsr
 lsr
 lsr
 lsr
 lsr
 sta FCharTable

 lda Fimage
 and #$7f
 ora timebomb ;must be 0!
 sta FCharImage

 rts

*-------------------------------
*
* Decode sword image
*
* In: A = image #
*
* Out: FCharImage, FCharTable
*
*-------------------------------
decodeswim
 sta FCharImage ;image #

 lda #2 ;chtable3
 sta FCharTable
 rts

*-------------------------------
*
*  G E T   E D G E S
*
*  Get edges of character image
*
*  In: FChar data as set by "setframe"
*
*  Out: leftej/rightej/topej = boundaries of image (140-res)
*       leftblock, rightblock, topblock, bottomblock
*       CDLeftEj, CDRightEj (for coll detection)
*       imheight, imwidth
*
*-------------------------------
GETEDGES
 lda FCharImage
 ldx FCharTable
 jsr dimchar ;return A = image width, x = height
 stx imheight

 tax ;image width in bytes
 lda Mult7,x ;in 1/2 pixels
 clc
 adc #1 ;add 1/2 pixel
 lsr ;and divide by 2
 sta imwidth ;to get width in pixels

 lda FCharX+1
 lsr
 lda FCharX
 ror
 clc
 adc #ScrnLeft ;convert back to 140-res

* (If facing LEFT, X-coord is leftmost pixel of LEFTMOST byte
* of image; if facing RIGHT, leftmost pixel of RIGHTMOST byte.)

 ldx CharFace
 bmi :ok ;facing L
;facing R
 sec
 sbc imwidth

:ok sta leftej
 clc
 adc imwidth
 sta rightej

 lda FCharY
 sec
 sbc imheight
 clc
 adc #1

 cmp #192
 bcc :ok2
 lda #0

:ok2 sta topej

 jsr getblocky

 cmp #3
 bne :1
 lda #-1 ;if o.s., call it -1

:1 sta topblock

 lda FCharY
 jsr getblocky ;if o.s., call it 3
 sta bottomblock

 lda leftej
 jsr getblockx ;leftmost affected block
 sta leftblock

 lda rightej
 jsr getblockx ;rightmost affected block
 sta rightblock

* get leading edge (for collision detection)

 lda #0
 sta ztemp

 lda Fcheck
 and #Fthinmark
 beq :nothin

 lda #thinner ;make character 3 bits thinner
 sta ztemp ;on both sides

:nothin lda leftej
 clc
 adc ztemp
 sta CDLeftEj

 lda rightej
 sec
 sbc ztemp
 sta CDRightEj

]rts rts

*===============================
*
*  Q U I C K   F L O O R
*
*  Mark for redraw whatever floorpieces character might be
*  impinging on
*
*  In: CharData; GETEDGES results
*
*-------------------------------
QUICKFLOOR
 lda CharPosn
 cmp #135
 bcc :2
 cmp #149
 bcc :climbup

:2 lda CharAction
 cmp #1
 bne :1

 lda CharPosn
 cmp #78
 bcc ]rts
 cmp #80
 bcc :fall
]rts rts

:1 cmp #2
 beq :fall
 cmp #3
 beq :fall
 cmp #4
 beq :fall
 cmp #6
 bne ]rts

:fall lda #markfloor
 ldx #>markfloor
 bne :cont1

:climbup
 lda #markhalf
 ldx #>markhalf

* Mark floorbuf/halfbuf for up to 6 affected blocks
* Start with rightblock, work left to leftblock

:cont1
 sta marksm1+1
 sta marksm2+1
 stx marksm1+2
 stx marksm2+2

 lda rightblock
:loop sta tempblockx

 jsr markul

 lda tempblockx
 cmp leftblock
 beq ]rts
 sec
 sbc #1
 bpl :loop

]rts rts

* mark upper & lower blocks for this blockx

markul
 lda bottomblock
 sta tempblocky

 jsr indexblock ;lower block
 lda #2
marksm1 jsr markhalf

 lda topblock
 cmp bottomblock
 beq ]rts
 sta tempblocky

 jsr indexblock ;upper block
 lda #2
marksm2 jmp markhalf

*-------------------------------
*
*  Q U I C K  F G
*
*  Mark for redraw any f.g. elements char (or his sword)
*  might be impinging on
*
*  In: Char data; left/right/top/bottomblock
*
*-------------------------------
QUICKFG

* Quick fix to cover sword

 lda CharSword
 cmp #2
 bcc :cont

 lda CharFace
 bpl :faceR
 dec leftblock
 jmp :cont

:faceR inc rightblock

* Continue

:cont lda bottomblock
:outloop
 sta tempblocky

 lda rightblock
:loop sta tempblockx

 jsr indexblock
 lda #3
 jsr MARKFRED

 lda tempblockx
 cmp leftblock
 beq :end
 sec
 sbc #1
 bpl :loop
:end
 lda tempblocky
 cmp topblock
 beq ]rts
 sec
 sbc #1
 bpl :outloop
 rts

]bug jmp showpage

*-------------------------------
*
*  C R O P   C H A R A C T E R
*
*  In: FChar data as set by "setframe"
*      leftej,rightej, etc. as set by "getedges"
*
*  Out: FCharCL/CR/CU/CD
*
*-------------------------------
CROPCHAR

* If char is climbing stairs, mask door

 lda CharPosn
 cmp #224
 bcc :nost
 cmp #229
 bcs :nost
 lda doortop ;set by drawexitb
 clc
 adc #2
 cmp FCharY
 bcs :bug ;temp!
 sta FCharCU
]rts rts
:bug ldy #$F0
 jsr showpage
:nost

* If char is under solid (a&b) floor, crop top

 ldx leftblock
 ldy topblock
 lda CharScrn
 jsr rdblock
 cmp #block
 beq :1
 jsr cmpspace
 beq :not

* Special case (more lenient): if char is jumping
* up to touch ceiling

:1 lda CharAction
 bne :10
 lda CharPosn
 cmp #79
 beq :2
 cmp #81
 bne :10
 beq :2

* Otherwise, both left & right topblocks must be solid

:10 ldx rightblock
 ldy topblock
 lda CharScrn
 jsr rdblock
 cmp #block
 beq :2
 jsr cmpspace
 beq  :not

:2 ldx CharBlockY
 inx
 cpx #1
 beq :ok

 lda BlockTop,x
 cmp FCharY
 bcs :not

 sec
 sbc #floorheight
 cmp topej
 bcs :not

:ok lda BlockTop,x
 sta FCharCU
 sta topej
:not

* If char is standing left of a panel, crop R
* Char is considered "left" if CDLeftEj falls within
* panel block

 lda CDLeftEj
 jsr getblockx
 sta blockx

 tax
 ldy CharBlockY
 lda CharScrn
 jsr rdblock

 cmp #panelwof
 beq :r
 cmp #panelwif
 bne :nor

* Char's foot is within panel block
* Special case: If character is hanging R, we don't
* need to check his head

:r lda CharFace
 bmi :cont

 lda CharAction
 cmp #2
 beq :r2 ;yes--hanging R

* Check block to right of char's head

:cont
 ldx blockx
 ldy topblock
 lda CharScrn
 jsr rdblock

 cmp #block
 beq :r2
 cmp #panelwof
 beq :r2
 cmp #panelwif
 bne :nor

* Also a panel -- make a wall

:r2 lda tempblockx
 asl
 asl
 clc
 adc #4
 sta FCharCR
 rts

* Is char standing to L of solid block?
* (i.e. does CDRightEj fall within block?)

:nor
 lda CDRightEj
 jsr getblockx
 sta blockx

 tax
 ldy CharBlockY
 lda CharScrn
 jsr rdblock

 cmp #block
 bne :nob

* Foot is under block--what about head?

 ldx blockx
 ldy topblock
 lda CharScrn
 jsr rdblock

 cmp #block
 bne :nob

* Also a panel -- make a wall

:yescrop
 lda tempscrn
 cmp CharScrn
 bne :nob

 lda tempblockx
 asl
 asl
 sta FCharCR
:nob
 rts

*-------------------------------
*
*  Z E R O   C R O P
*
*-------------------------------
zerocrop
 lda #0
 sta FCharCU
 sta FCharCL
 lda #40
 sta FCharCR
 lda #192
 sta FCharCD
 rts

*===============================
*
*  C O M P A R E   S P A C E
*
*  Is it a space (can you pass thru)?
*  NOTE: Solid block is considered a space (it has no floor)
*
*  In: A = objid
*  Out: 0 = space, 1 = floor
*
*-------------------------------
CMPSPACE
 cmp #space
 beq :space
 cmp #pillartop
 beq :space
 cmp #panelwof
 beq :space
 cmp #block
 beq :space
 cmp #archtop1
 bcs :space

 lda #1
 rts

:space lda #0
 rts

*-------------------------------
*
*  C O M P A R E   B A R R I E R
*
*  Is it a barrier?
*
*  Return A = 0 if clear, else A = barrier code #
*
*-------------------------------
CMPBARR
 cmp #panelwif
 beq :b1
 cmp #panelwof
 beq :b1
 cmp #gate
 bne :2

:b1 lda #1 ;panel/gate
 rts

:2 cmp #mirror
 beq :yes3

 cmp #slicer
 bne :3

:yes3 lda #3 ;mirror/slicer
 rts

:3 cmp #block
 bne :4

 lda #4 ;block
 rts
:4
:clear lda #0
:rts rts

:barr lda #1
]rts rts

*-------------------------------
*
* Is it a wall? Return 0 if yes, 1 if no
* (Solid block, or panel if you're facing L)
*
*-------------------------------
CMPWALL
 cmp #block
 beq :yes
 ldx CharFace
 bpl :no
 cmp #panelwif
 beq :yes
 cmp #panelwof
 beq :yes
:no lda #1
 rts
:yes lda #0
 rts

*-------------------------------
*
*  Add kid/reflection/shadowman/guard to object table
*
*  In: FChar data
*
*-------------------------------
ADDKIDOBJ
 lda #TypeKid
 jmp addcharobj

*-------------------------------
ADDREFLOBJ
 lda #TypeReflect
 jmp addcharobj

*-------------------------------
ADDSHADOBJ
 lda #TypeShad
 jmp addcharobj

*-------------------------------
ADDGUARDOBJ
 lda #TypeGd
 jmp addcharobj

*-------------------------------
*
* Add sword to object table
* In: FChar data for character holding sword
*
*-------------------------------
ADDSWORDOBJ
 lda #TypeSword
 jmp addcharobj

*-------------------------------
*
*  G E T   S E Q
*
*  Get next byte from seqtable & advance CharSeq
*  (2-byte pointer to sequence table)
*
*-------------------------------
GETSEQ
 ldy #0
 lda (CharSeq),y
 pha

 inc CharSeq
 bne :done
 inc CharSeq+1

:done pla
 rts

*-------------------------------
*
*  G E T   F R A M E   I N F O
*
*  Get frame info for char (based on CharPosn)
*
*-------------------------------
GETFRAMEINFO
 lda CharPosn
 jsr GETFRAME ;set framepoint

 jsr usealtsets ;if appropriate

 ldy #0
 lda (framepoint),y
 sta Fimage

 iny
 lda (framepoint),y
 sta Fsword

 iny
 lda (framepoint),y
 sta Fdx

 iny
 lda (framepoint),y
 sta Fdy

 iny
 lda (framepoint),y
 sta Fcheck

]rts rts

*-------------------------------
*
* Use alternate character image sets
* (if appropriate)
*
* In: Char data; framepoint
* Out: framepoint
*
*-------------------------------
usealtsets
 ldx CharID
 beq ]rts ;kid uses main set, enemy uses alt set 1
 cpx #24
 beq ]rts ;mouse uses main set
 cpx #5
 bcs :usealt2 ;princess & vizier use alt set 2

 lda CharPosn
 cpx #2
 bcc :1
 cmp #102
 bcc ]rts
 cmp #107
 bcs :1
 ;frames 102-106 (falling): substitute 172-176 altset
 clc
 adc #70

:1 cmp #150
 bcc ]rts
 cmp #190
 bcs ]rts
;frames 150-189: use altset
 sec
 sbc #149
 jmp getaltframe1

:usealt2
 lda CharPosn
 jmp getaltframe2

*===============================
*
*  M A R K
*
*  In: A = mark value (usually 2)
*      Results of INDEXBLOCK:
*      Y = block #; carry set or clear
*
*  Out: Preserve A, Y, carry
*
*-------------------------------
]os cpy #10 ;top line from scrn above?
 bcs ]rts ;no
 sta topbuf,y
 sec ;preserve cs
]rts rts

MARKRED
 bcs ]os
 sta redbuf,y
 rts

MARKFRED
 bcs ]rts
 sta fredbuf,y
 rts

MARKWIPE
 bcs ]rts
 pha
 lda wipebuf,y
 beq :2
 lda height
 cmp whitebuf,y ;if wipebuf is already marked,
 bcc :1 ;use larger of 2 whitebuf values
:2 lda height
 sta whitebuf,y
:1 pla
 sta wipebuf,y
 clc ;return with cc
 rts

MARKMOVE
 bcs ]os
 sta movebuf,y
 rts

MARKFLOOR
 bcs ]os
 sta floorbuf,y
 rts

MARKHALF
 bcs ]os
 sta halfbuf,y
 rts

*-------------------------------
*
*  Z E R O   R E D
*
*  zero redraw buffers
*
*-------------------------------
ZERORED
 lda #0

 ldy #29

:loop sta redbuf,y
 sta fredbuf,y
 sta floorbuf,y
 sta wipebuf,y
 sta movebuf,y
 sta objbuf,y
 sta halfbuf,y

 dey
 bpl :loop

 ldy #9
:dloop sta topbuf,y
 dey
 bpl :dloop

 rts

*-------------------------------
*
*  C H E C K L E D G E
*
*  In: blockid = block that must be clear;
*      A = RDBLOCK results for block that must be ledge
*
*  Out: A = 1 if grabbable, 0 if not
*
*-------------------------------
CHECKLEDGE
 sta ztemp

 lda (BlueSpec),y
 sta tempstate

 lda blockid ;must be clear

 cmp #block
 beq :no

 cmp #panelwof ;CMPSPACE considers panel w/o floor
  bne :cont ;to be clear--

 bit CharFace ;but it isn't if char wants to grab
 bpl :no ;floorpiece to right
:cont
 jsr cmpspace
 bne :no

* Clear above -- is there a ledge in front?

 lda ztemp ;must be a solid floorpiece
;with exposed ledge
 cmp #loose
 bne :notloose

 bit tempstate
 bne :no ;floor is already loose

:notloose
 cmp #panelwif
 bne :cont2 ;panel w/floor can be grabbed
;only if facing right
 bit CharFace
 bmi :no

:cont2 jsr cmpspace
 beq :no

:yes lda #1
 rts

:no lda #0
]rts rts

*-------------------------------
*
*  C H E C K   S P I K E S
*
*  Spikes spring out when char passes over them (at any
*  height).
*
*-------------------------------
CHECKSPIKES
 lda rightej
 jsr getblockxp
 bmi ]rts
 sta tempright

* for blockx = leftblock to rightblock

 lda leftej
 jsr getblockxp
:loop sta blockx

 jsr sub

 lda blockx
 cmp tempright
 beq ]rts
 clc
 adc #1
 jmp :loop

sub sta tempblockx
 lda CharBlockY
 sta tempblocky
 lda CharScrn
 sta tempscrn
:loop jsr rdblock1

 cmp #spikes
 bne :again
 jmp trigspikes

:again jsr cmpspace
 bne ]rts

 lda tempscrn
 beq ]rts ;null scrn
 cmp CharScrn
 bne ]rts ;wait till he's on same screen

 inc tempblocky
 jmp :loop ;check 1 level below

*===============================
*
*  Load/save kid/shad vars
*
*-------------------------------
numvars = 16

LOADKID
 ldx #numvars-1

:loop lda Kid,x
 sta Char,x

 dex
 bpl :loop
]rts rts

SAVEKID
 ldx #numvars-1

:loop lda Char,x
 sta Kid,x

 dex
 bpl :loop
]rts rts

LOADSHAD
 ldx #numvars-1

:loop lda Shad,x
 sta Char,x

 dex
 bpl :loop
]rts rts


SAVESHAD
 ldx #numvars-1

:loop lda Char,x
 sta Shad,x

 dex
 bpl :loop
 rts

*  Load kid w/ opponent

LOADKIDWOP
 ldx #numvars-1

:loop lda Kid,x
 sta Char,x

 lda Shad,x
 sta Op,x

 dex
 bpl :loop
 rts

SAVEKIDWOP
 ldx #numvars-1

:loop lda Char,x
 sta Kid,x

 lda Op,x
 sta Shad,x

 dex
 bpl :loop
 rts

* Load shadowman w/ opponent

LOADSHADWOP
 ldx #numvars-1

:loop lda Shad,x
 sta Char,x

 lda Kid,x
 sta Op,x

 dex
 bpl :loop
 rts

SAVESHADWOP
 ldx #numvars-1

:loop lda Char,x
 sta Shad,x

 lda Op,x
 sta Kid,x

 dex
 bpl :loop
 rts

*-------------------------------
*
* Recharge strength meter to max
*
*-------------------------------
RECHARGEMETER
 lda MaxKidStr
 sec
 sbc KidStrength
 sta ChgKidStr
]rts rts

*-------------------------------
*
* Boost strength meter max by 1 and recharge
*
*-------------------------------
BOOSTMETER
 lda MaxKidStr
 cmp #maxmaxstr
 bcs :1

 clc
 adc #1
 sta MaxKidStr

:1 jmp RECHARGEMETER

*-------------------------------
*
* Get distance between char & opponent
* (# pixels char must move fwd to reach opponent)
* If dist is greater than 127, return 127 (+ or -)
*
*-------------------------------
estwidth = 13 ;rough est of char width

GETOPDIST
 lda CharScrn
 cmp OpScrn
 bne :safe

* First, get A = OpX-CharX (abs. value <= 127)

 lda OpX
 cmp CharX
 bcc :neg
 sec
 sbc CharX
 bpl :got
 lda #127
 bpl :got

:neg lda CharX
 sec
 sbc OpX
 bpl :1
 lda #127
:1 eor #$ff
 clc
 adc #1 ;negate

* If CharFace = left, negate

:got ldx CharFace
 bpl :cont
 eor #$ff
 clc
 adc #1

* If chars are facing in opposite directions,
* adjust by estimate of width of figure

:cont tax
 lda CharFace
 eor OpFace
 bpl :done
 txa
 cmp #127-estwidth
 bcs :done2
 clc
 adc #estwidth
:done2 tax
 rts

:safe ldx #127 ;arbitrary large dist.
:done txa ;return value in A
]rts rts

*-------------------------------
*
*  Adjust CharY for uneven floor
*
*-------------------------------
UNEVENFLOOR
 jsr getunderft
 cmp #dpressplate
 bne ]rts
 inc CharY
]rts rts

*-------------------------------
 lst
 ds 1
 usr $a9,19,$200,*-org
 lst off