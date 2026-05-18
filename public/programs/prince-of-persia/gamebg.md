---
title: "GAMEBG.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/GAMEBG.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/GAMEBG.S"
year: 1989
author: "Jordan Mechner"
slug: "gamebg"
order: 20
description: "This file from Prince of Persia (1989) showcases Jordan Mechner's ingenious use of 6502 assembly to create a cinematic platformer on the Apple II, leveraging memory bank-switching and rotoscoped animations."

summary:
  - point: "Bank-switched memory techniques to fit 128K constraints"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Routines for cinematic animations like twinkling stars and flowing sand"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Custom copy-protection mechanisms embedded in the code"
    link: "https://en.wikipedia.org/wiki/Copy_protection"
    link_label: "Copy Protection"
  - point: "Direct manipulation of Apple II hi-res graphics pages"
    link: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    link_label: "Apple II Graphics"
  - point: "Efficient use of lookup tables for animation and game mechanics"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup Table"

enhancements:
  - id: "strength-meters-visual-feedback"
    line_start: 91
    line_end: 97
    title: "Strength meters: visualizing health"
    wikipedia_url: "https://en.wikipedia.org/wiki/Health_(gaming)"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Audio_CD_with_Copy_Protection_%28Back_of_Jewel_Case_%E2%80%93_Focus_on_Technical_Specifications%29.jpg/330px-Audio_CD_with_Copy_Protection_%28Back_of_Jewel_Case_%E2%80%93_Focus_on_Technical_Specifications%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Audio CD with Copy Protection (Back of Jewel Case – Focus on Technical Specifications) (CC0)"
    content: "The strength meters for the Kid and the Opponent are defined here as lookup tables, mapping visual positions and offsets to their respective health states. In the late 1980s, visual feedback was crucial for engaging players, especially in action games like Prince of Persia. Jordan Mechner designed these meters to appear at the bottom of the screen, providing instant clarity about the player's and enemy's health. This approach reflects the era's focus on minimal yet effective UI design, constrained by the Apple II's limited screen resolution and color palette. The tables are compact, leveraging the efficiency of assembly language to minimize memory usage while maintaining visual fidelity. These meters became a staple of platformers and action games, influencing how health is represented in modern gaming."
  - id: "hourglass-animation"
    line_start: 118
    line_end: 127
    title: "Hourglass: time as a visual mechanic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Time_management_game"
    image_url: ""
    image_caption: ""
    content: "The hourglass animation is a brilliant example of tying gameplay mechanics to visual storytelling. Here, Mechner defines the coordinates and images for the hourglass, along with the sand height that changes dynamically as time progresses. The hourglass serves as a constant reminder of the player's limited time to complete the level, adding tension and urgency to the gameplay. In 1989, this was a novel way to integrate time management into a platformer, emphasizing the cinematic nature of Prince of Persia. The flowing sand animation, defined later in the file, complements this mechanic, showcasing Mechner's attention to detail and his ability to leverage the Apple II's graphical capabilities to enhance immersion."
  - id: "torch-animation-frames"
    line_start: 143
    line_end: 148
    title: "Torch animation: dynamic lighting effects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "The torch animation frames are defined here as a sequence of hex values representing different states of the flame. This sequence creates the illusion of a flickering torch, adding atmosphere to the game's environments. In the late 1980s, dynamic lighting effects were rare in games, especially on hardware as limited as the Apple II. Mechner's use of rotoscoping and frame-by-frame animation brought a cinematic quality to Prince of Persia, setting it apart from other platformers of the era. The torch animation not only enhances the visual appeal but also contributes to the game's immersive storytelling, making the environments feel alive and reactive."
  - id: "draw-kid-and-shadowman"
    line_start: 391
    line_end: 415
    title: "Drawing the Kid and Shadowman"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "This section handles the drawing routines for the Kid and his shadow counterpart, Shadowman. The Kid's animations were rotoscoped from footage of Mechner's brother performing the moves, giving them a lifelike quality rarely seen in games of the era. Shadowman, a darker mirror of the Kid, adds a layer of psychological depth to the gameplay. These routines reflect Mechner's cinematic approach to game design, where character animations are not just functional but also expressive. The drawing logic incorporates visual effects like flashing and merging, enhancing the game's storytelling and atmosphere. This technique influenced future platformers, setting a benchmark for character animation in games."
  - id: "setup-flame-animation"
    line_start: 726
    line_end: 755
    title: "Setting up flame animations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "This section sets up the flame animations, preparing the necessary coordinates, image data, and opacity settings. Flames are a recurring visual motif in Prince of Persia, symbolizing danger and vitality. Mechner's meticulous attention to detail ensures that the flames not only look dynamic but also integrate seamlessly into the game's environments. The use of lookup tables and direct manipulation of hi-res graphics pages showcases his mastery of the Apple II's hardware. These animations contribute to the game's cinematic quality, making the environments feel alive and reactive. The flame setup routine is a testament to Mechner's ability to push the boundaries of what was possible on the Apple II."
  - id: "twinkle-stars-princess-window"
    line_start: 787
    line_end: 811
    title: "Twinkling stars outside Princess's window"
    wikipedia_url: "https://en.wikipedia.org/wiki/Parallax_scrolling"
    image_url: ""
    image_caption: ""
    content: "This routine animates stars outside the Princess's window, creating a subtle but impactful visual effect. By updating the star images directly on both hi-res graphics pages, Mechner achieves a twinkling effect that adds depth and atmosphere to the scene. In 1989, such details were rare in platformers, especially on the Apple II, which had limited graphical capabilities. This routine reflects Mechner's cinematic vision for Prince of Persia, where even minor elements contribute to the game's immersive storytelling. The stars' twinkle is a precursor to techniques like parallax scrolling, which became common in later games to simulate depth and movement."
  - id: "copy-protection-yellow-check"
    line_start: 899
    line_end: 908
    title: "Copy protection: the 'Yellow' check"
    wikipedia_url: "https://en.wikipedia.org/wiki/Copy_protection"
    image_url: ""
    image_caption: ""
    content: "This routine is part of Prince of Persia's second-level copy protection mechanism, designed to detect unauthorized copies of the game. The 'Yellow' check involves verifying specific data on the disk, ensuring that the game is running on an original copy. In the late 1980s, piracy was a significant concern for game developers, especially for high-profile titles like Prince of Persia. Mechner implemented multiple layers of copy protection to safeguard his work, reflecting the industry's reliance on such measures during the era. While these techniques were often bypassed by skilled hackers, they represent an important chapter in the history of software development and the ongoing battle against piracy."
  - id: "add-character-object"
    line_start: 1050
    line_end: 1096
    title: "Adding characters to the object table"
    wikipedia_url: "https://en.wikipedia.org/wiki/Object-oriented_programming"
    image_url: ""
    image_caption: ""
    content: "The ADDCHAROBJ routine adds a character to the game's object table, storing its properties like position, image, and type. This modular approach to handling game objects reflects Mechner's efficient use of 6502 assembly to manage complex interactions within the game's world. By defining characters as objects with specific attributes, Mechner laid the groundwork for object-oriented principles in game design. This routine highlights the ingenuity required to implement such systems on hardware as constrained as the Apple II. The modularity and reusability of this approach influenced later games, demonstrating how thoughtful design can overcome technical limitations."

---

* gamebg
ThreeFive = 1
EditorDisk = 0
org = $4c00
 tr on
 lst off
 lstdo off
*-------------------------------
*
*  PRINCE OF PERSIA
*  Copyright 1989 Jordan Mechner
*
*-------------------------------
 org org

 jmp UPDATEMETERS
 jmp DRAWKIDMETER
 jmp DRAWSWORD
 jmp DRAWKID
 jmp DRAWSHAD

 jmp SETUPFLAME
 jmp CONTINUEMSG
 jmp ADDCHAROBJ
 jmp SETOBJINDX
 jmp PRINTLEVEL

 jmp DRAWOPPMETER
 jmp FLIPDISKMSG
 jmp TIMELEFTMSG
 jmp DRAWGUARD
 jmp DRAWGUARD

 jmp SETUPFLASK
 jmp SETUPCOMIX
 jmp PSETUPFLAME
 jmp DRAWPOST
 jmp DRAWGLASS

 jmp INITLAY
 jmp TWINKLE
 jmp FLOW
 jmp PMASK
 jmp YELLOW

 jmp SETRECHECK0
 jmp RECHECKYEL
 ds 3
 ds 3
 ds 3

*-------------------------------
 lst
 put eq
 lst
 put gameeq
 lst off

*-------------------------------
*
* 2nd level copy protection
* signature check routine
*
*-------------------------------
 do ThreeFive
YELLOW lda #$80
 sta yellowflag
 rts

 else
 put ryellow1
 fin

*-------------------------------
 lst
 put movedata
 lst off

*-------------------------------
 dum locals

xsave ds 1
addr ds 2
temp ds 1

 dend

tempsave ds $10

*-------------------------------
* Strength meters

KidStrX db 00,01,02,03,04,05,06,08,09,10,11,12
KidStrOFF db 00,01,02,03,04,05,06,00,01,02,03,04

OppStrX db 39,38,37,36,35,34,32,31,30,29,28,27
OppStrOFF db 05,04,03,02,01,00,06,05,04,03,02,01

bullet = $88 ;in bgtable2
blank = $8c
bline hex 89,8a,8b

*-------------------------------
* Post in Princess's room

postx = 31
posty = 152
postimg = $c ;chtable6

*-------------------------------
* Stars outside Princess's window

starx = 2
stary hex 62,65,6d,72
stari hex 2a,2b,2b,2a ;chtable6

*-------------------------------
* Hourglass

glassx = 19
glassy = 151
glassimg hex 15,0d,0e,0f,10,11,12,13,14 ;chtable6
sandht db 0,1,2,3,4,5,6,7

flowx = glassx+1
flowy = glassy-2
flowimg hex 16,17,18 ;chtable6

*-------------------------------
* Masks for Princess's face & hair

pmaskdx hex 00,00
pmaskdy db -4,-33
pmaski hex 2c,22

*-------------------------------
* Comix

starimage = $41
startable = 0 ;chtable1

*-------------------------------
* Torch animation frames
*               0  1  2  3  4  5  6  7  8  9 10 11
*              12 13 14 15 16 17

torchflame hex 52,53,54,55,56,61,62,63,64,52,54,56
 hex 63,61,55,53,64,62

ptorchflame db 1,2,3,4,5,6,7,8,9,3,5,7,1,4,9,2,8,6

*-------------------------------
* Bubbling flask frames
*               0  1  2  3  4  5  6  7  8  9 10 11

bubble hex b2,af,b0,b1,b0,af,b1,b0,af

*-------------------------------
* Message data: YCO, XCO, OFFSET, IMAGE

my = 90
lowmy = 153
hiconty = 73
lowconty = 168

contbox db hiconty,13,0,$7c ;Press button to continue
msgbox db my,15,0,$7b ;Empty message box
levelmsg db my-5,16,3,$7a ;"Level"
flipbox db my-1,13,0,$7e ;Turn disk over
timeleft db my,11,0,$7d ;Minutes left
seconds db my-5,14,0,$7f ;"Seconds"

*-------------------------------
* Numbers (0-12)

digit1 hex 00,00,00,00,00,00,00,00,00,00
 hex 71,71,71

digit2 hex 70,71,72,73,74,75,76,77,78,79
 hex 70,71,72

*-------------------------------
* Print "XX Minutes Left"
*-------------------------------
]rts rts

TIMELEFTMSG
 lda #timeleft
 ldx #>timeleft
 jsr setupimage

 lda MinLeft
 cmp #2
 bcs :ok
 lda KidAction
 cmp #3
 beq :ok
 cmp #4
 beq :ok ;falling
 lda KidBlockY
 cmp #1
 bne :ok
 lda #lowmy
 sta YCO ;keep msg box out of kid's way
:ok jsr superim1

 lda YCO
 sec
 sbc #5
 sta YCO

 lda XCO
 clc
 adc #1
 sta XCO
 lda #0
 sta OPACITY

 lda #ora
 sta OPACITY

 jsr getminleft

 lda MinLeft ;BCD byte (e.g., $55 = 55 minutes)
 cmp #2
 bcs :1
 lda SecLeft
:1 sta temp
 lsr
 lsr
 lsr
 lsr
 beq :skip1st
 tax
 lda digit2,x ;1st digit
 sta IMAGE

 jsr addmsg

:skip1st lda XCO
 clc
 adc #1
 sta XCO

 lda temp
 and #$f
 tax
 lda digit2,x ;2nd digit
 sta IMAGE

 jsr addmsg

* Minutes or seconds?

 lda MinLeft
 cmp #2
 bcs ]rts

 lda YCO
 pha
 lda #seconds
 ldx #>seconds
 jsr setupimage
 pla
 sta YCO
 lda #sta
 sta OPACITY
 jmp addmsg ;replace "minutes" with "seconds"

*-------------------------------
* Print "Level XX"
*-------------------------------
]rts rts

PRINTLEVEL
 lda #msgbox
 ldx #>msgbox
 jsr superimage

 lda #levelmsg
 ldx #>levelmsg
 jsr setupimage

 jsr getlevelno
 cpx #10
 bcc :1
 lda #0
 sta OFFSET
:1
 lda #ora
 sta OPACITY
 jsr addmsg

 lda XCO
 clc
 adc #6
 sta XCO

 jsr getlevelno ;X = level # (0-12)
 lda digit1,x ;1st digit
 beq :skip1st
 sta IMAGE

 lda #ora
 sta OPACITY
 jsr addmsg

 lda XCO
 clc
 adc #1
 sta XCO

 jsr getlevelno
:skip1st lda digit2,x ;2nd digit
 sta IMAGE

 lda #ora
 sta OPACITY
 jmp addmsg

*-------------------------------
getlevelno
 ldx level
 cpx #13
 bcc :ok
 ldx #12
:ok
]rts rts

*-------------------------------
* Superimpose "Press button to continue" message
*-------------------------------
CONTINUEMSG
 lda #contbox
 ldx #>contbox
 jsr setupimage

 lda KidBlockX
 and #1
 bne :1
 lda #lowconty
 sta YCO
:1 jmp superim1

*-------------------------------
* Superimpose "Turn disk over" message
*-------------------------------
FLIPDISKMSG
 lda #flipbox
 ldx #>flipbox
 jmp superimage

*-------------------------------
* Superimpose image (using layrsave)
*-------------------------------
superimage
 jsr setupimage
superim1
 lda #sta.$40
 sta OPACITY
 jmp addmsg

*-------------------------------
* Set up image
*
* In: A-X = image data addr
* Out: XCO, YCO, IMAGE
*-------------------------------
setupimage
 sta addr
 stx addr+1

 ldy #0
 lda (addr),y
 sta YCO
 iny
 lda (addr),y
 sta XCO
 iny
 lda (addr),y
 sta OFFSET
 iny
 lda (addr),y
 sta IMAGE
]rts
:rts rts

*-------------------------------
* Draw Kid
*-------------------------------
DRAWKID
 lda backtolife
 beq :2
 lda PAGE
 beq ]rts ;flash when coming back to life

:2 lda mergetimer
 bmi :1
 and #1
 beq :1
 jmp DrawEored ;flash between kid & shadowman

:1 jmp DrawNormal

*-------------------------------
* Draw Sword
*-------------------------------
DRAWSWORD
 jmp DrawNormal

*-------------------------------
* Draw Shadowman
*-------------------------------
DRAWSHAD
 jmp DrawEored

*-------------------------------
* Draw Guard
*-------------------------------
DRAWGUARD
 do EditorDisk
 lda #EditorDisk
 cmp #2
 beq DrawNormal
 fin

 lda GuardColor ;set by "ADDGUARD" in AUTO
 beq DrawNormal
 bne DrawShifted

*-------------------------------
DrawNormal
 lda #mask
 sta OPACITY

 lda #UseLayrsave.$80
 jmp addmid

]rts rts

*-------------------------------
DrawShifted
 lda #1
 jsr chgoffset

 lda #mask
 sta OPACITY

 lda #UseLayrsave.$80
 jmp addmid

*-------------------------------
DrawEored
 lda #eor
 sta OPACITY

 lda #UseLayrsave.$80
 jmp addmid

*-------------------------------
chgoffset
 clc
 adc OFFSET
 cmp #7
 bcc :1

 inc XCO
 sec
 sbc #7

:1 sta OFFSET
 rts

*-------------------------------
*
* Update strength meters
*
*-------------------------------
UPDATEMETERS
 lda redkidmeter
 beq :1

 jsr DrawKidMeter

:1 lda redoppmeter
 beq ]rts

 jmp DrawOppMeter
]rts rts

*-------------------------------
*
* Draw kid's strength meter at lower left
*
*-------------------------------
DRAWKIDMETER
 lda inbuilder
 bne ]rts

 lda #191
 sta YCO
 lda #sta
 sta OPACITY

 ldx #0
 stx xsave ;# of bullets drawn so far

:loop lda KidStrength
 sec
 sbc xsave ;# of bullets left to draw
 beq :darkpart
 cmp #4
 bcs :draw3
 cmp #3
 bcs :draw2
 cmp #2
 bcc :drawlast
;Draw 1 bullet
:draw1 ldy #1
 bne :drline
 ;Draw 2 bullets
:draw2 ldy #2
 bne :drline
;Draw 3 bullets
:draw3 ldy #3
 bne :drline

:drawlast lda KidStrength
 cmp #2
 bcs :steady
 lda PAGE
 beq :skip ;flashes when down to 1
:steady lda #bullet
 ldy #1
 jsr :draw
:skip jmp :darkpart

* Draw line of 1-3 bullets

:drline lda bline-1,y ;image #
 jsr :draw
 jmp :loop

:draw sta IMAGE
 ldx xsave
 tya
 clc
 adc xsave
 sta xsave

* In: IMAGE; x = unit # (0 = leftmost)

:drawimg lda KidStrX,x
 sta XCO
 lda KidStrOFF,x
 sta OFFSET
 jmp addmsg

* Draw blanks to limit of MaxKidStr

:darkpart
 lda #and
 sta OPACITY
 lda #blank
 sta IMAGE
:dloop ldx xsave
 cpx MaxKidStr
 bcs ]rts
 jsr :drawimg
 inc xsave
 bne :dloop
]rts rts

*-------------------------------
*
* Draw opp's strength meter at lower right
*
*-------------------------------
DRAWOPPMETER
 lda inbuilder
 bne ]rts

 lda OppStrength
 beq ]rts

 lda ShadID
 cmp #24 ;mouse
 beq ]rts
 cmp #4 ;skel
 beq ]rts
 cmp #1 ;shadow
 bne :1
 lda level
 cmp #12
 bne ]rts ;shad strength shows only on level 12
:1
 lda #191
 sta YCO
 lda #sta.$80 ;mirror
 sta OPACITY

 ldx #0
 stx xsave ;# of bullets drawn so far

:loop lda OppStrength
 sec
 sbc xsave ;# of bullets left to draw
 beq :darkpart
 cmp #4
 bcs :draw3
 cmp #3
 bcs :draw2
 cmp #2
 bcc :drawlast
;Draw 1 bullet
:draw1 ldy #1
 bne :drline
 ;Draw 2 bullets
:draw2 ldy #2
 bne :drline
;Draw 3 bullets
:draw3 ldy #3
 bne :drline

:drawlast lda OppStrength
 cmp #2
 bcs :steady
 lda PAGE
 beq :darkpart ;flashes when down to 1
:steady lda #bullet
 ldy #1
 jmp :draw

* Draw line of 1-3 bullets

:drline lda bline-1,y ;image #
 jsr :draw
 jmp :loop

:draw sta IMAGE
 ldx xsave
 tya
 clc
 adc xsave
 sta xsave

:drawimg lda OppStrX,x
 sta XCO
 lda OppStrOFF,x
 sta OFFSET
 jmp addmsg

:darkpart
 lda #and.$80
 sta OPACITY
 lda #blank
 sta IMAGE
 ldx xsave
 jmp :drawimg

*-------------------------------
*
* Set up to draw bubbling flask
*
* In/out: same as SETUPFLAME
*
*-------------------------------
EmptyPot = 0
RefreshPot = %00100000
BoostPot = %01000000
MystPot = %01100000

boffset = 2

SETUPFLASK
 lda #boffset
 sta OFFSET

 txa
 and #%11100000
 cmp #EmptyPot
 beq :0
 cmp #BoostPot
 beq :tall ;special flask (taller)
 bcc :cont

 inc OFFSET ;mystery potion (blue)

:tall lda YCO
 sec
 sbc #4
 sta YCO

:cont txa
 and #%00011111
 tax
 cpx #bubbLast+1
 bcc :ok
 ldx #0
:ok lda bubble,x
 sta IMAGE

 inc XCO
 inc XCO

 lda YCO
 sec
 sbc #14
 sta YCO

 lda #sta
 sta OPACITY

 lda #bgtable2
 sta TABLE
 lda #>bgtable2
 sta TABLE+1

]rts rts

:0 ldx #0
 beq :ok

*-------------------------------
*
* Setup to draw flame
*
* In: XCO = blockxco
*     YCO = Ay
*     X   = spreced
*
* Out: ready to call ADDBACK (or FASTLAY)
*
*-------------------------------
SETUPFLAME
 cpx #torchLast+1
 bcs ]rts

 lda torchflame,x
 sta IMAGE

 inc XCO

 lda YCO
 sec
 sbc #43
 sta YCO

 lda #sta
 sta OPACITY

 lda #bgtable1
 sta TABLE
 lda #>bgtable1
 sta TABLE+1

]rts rts

*-------------------------------
*
* Setup to draw flame (Princess's room)
*
* In: XCO, YCO; X = frame #
* Out: Ready to call ADDMID or LAY
*
*-------------------------------
PSETUPFLAME
 cpx #torchLast+1
 bcs ]rts

 lda ptorchflame,x
 sta IMAGE

 lda #sta
 sta OPACITY

 jsr initlay

]setch6 lda #chtable6
 sta TABLE
 lda #>chtable6
 sta TABLE+1

]rts rts

*-------------------------------
*
* Twinkle one of the stars outside Princess's window
* (Update it directly on both screens)
*
* In: X = star # (0-3)
*
*-------------------------------
TWINKLE
 lda #starx
 sta XCO
 lda stary,x
 sta YCO
 lda stari,x
 sta IMAGE
 lda #eor
 sta OPACITY
 jsr ]setch6
 jsr fastlay ;<--DIRECT HIRES CALL
 lda PAGE
 eor #$20
 sta PAGE ;& on other page
 jsr fastlay
 lda PAGE
 eor #$20
 sta PAGE
 rts

*-------------------------------
*
* Draw big white post in Princess's room
*
*-------------------------------
DRAWPOST
 lda #postx
 sta XCO
 lda #posty
 sta YCO
 lda #postimg
 sta IMAGE
 lda #ora
 sta OPACITY
 jsr ]setch6
 jmp addfore

*-------------------------------
*
* Draw hourglass in Princess's room
*
* In: X = glass state (0-8, 0 = full)
*
*-------------------------------
DRAWGLASS
 lda #glassx
 sta XCO
 lda #glassy
 sta YCO
 lda glassimg,x
 sta IMAGE
 lda #sta
 sta OPACITY
 jsr ]setch6
 jmp addback

*-------------------------------
*
* Mask princess's face & hair for certain CharPosns
*
* (Called after ADDCHAROBJ)
*
*-------------------------------
PMASK
 ldx CharPosn
 cpx #19 ;plie
 bne :1
 ldx #0
 bpl :mask
:1 cpx #1 ;pslump-1
 beq :m1
 cpx #18 ;pslump-2
 bne :2
:m1 ldx #1
 bpl :mask
:2

]rts rts

:mask
 lda FCharY
 clc
 adc pmaskdy,x
 sta YCO

 lda XCO
 clc
 adc pmaskdx,x
 sta XCO

 lda pmaski,x
 sta IMAGE

 lda #5 ;chtable6
 sta TABLE

 lda #and
 sta OPACITY
 lda #UseLayrsave.$80
 jmp addmid

*-------------------------------
* If failed copy prot check due to disk not in drive, recheck
* In: a = 0 (Call after setrecheck0)
*-------------------------------
RECHECKYEL
 sta tempblockx
 sta tempblocky
 jsr indexblock ;set y = 0
 lda (locals),y ;All of this just to hide "lda recheck0"!
 beq ]rts
 ldx #5
 jsr yellow
 lda #$ff
 rts

*-------------------------------
*
* Draw sand flowing through hourglass
*
* In: X = frame # (0-3)
*     Y = hourglass state (0-8)
*
*-------------------------------
FLOW
 cpy #8
 bcs ]rts ;glass is empty
 jsr initlay
 lda #glassy
 sec
 sbc sandht,y
 sta BOTCUT
 lda flowimg,x
 sta IMAGE
 lda #flowx
 sta XCO
 lda #0
 sta OFFSET
 lda #flowy
 sta YCO
 lda #sta
 sta OPACITY
 jsr ]setch6
 jmp lay ;<---DIRECT HIRES CALL

*-------------------------------
* Save/restore FCharVars

saveFChar
 ldx #$f
:loop lda FCharVars,x
 sta tempsave,x
 dex
 bpl :loop
 rts

restoreFChar
 ldx #$f
:loop lda tempsave,x
 sta FCharVars,x
 dex
 bpl :loop
]rts rts

*-------------------------------
*
* Draw "comix" star
*
* In: Char data
*
*-------------------------------
SETUPCOMIX
 jsr saveFChar
 jsr :sub
 jmp restoreFChar

:sub lda #$ff
 sta FCharIndex

* Get y-coord

 lda CharPosn
 cmp #185 ;dead
 beq :low
 cmp #177 ;impaled
 beq :imp
 cmp #106
 bcc :80
 cmp #111 ;crouching
 bcc :low
:80 cmp #178 ;halved
 beq ]rts

 lda #-15
 ldx CharID
 beq :3
 lda #-11 ;kid strikes lower than opponent
:3 clc
 adc FCharY
 sta FCharY
 jmp :8

:low lda #4
 clc
 adc FCharY
 sta FCharY
 jmp :8

* Get x-coord

:imp lda #-5 impaled
 bne :9
:8 lda #5
:9 jsr addfcharx

* Get color (kid red, opps blue)

 lda CharID
 beq :2 ;kid: 0
 lda #1 ;opponents: 1
:2
 eor FCharX
 eor FCharFace
 and #1 ;look only at low bits
 bne :1
 inc FCharX
 bne :1
 inc FCharX+1
:1
 lda #starimage
 sta FCharImage
 lda #startable
 sta FCharTable

 lda #0
 sta FCharCU
 sta FCharCL
 lda #40
 sta FCharCR
 lda #192
 sta FCharCD

 lda #TypeComix
 jmp addcharobj
]rts rts

*-------------------------------
*
*  A D D   C H A R   O B J
*
*  Add a character to object table
*
*  In: FCharVars
*      A = object type
*
*-------------------------------
ADDCHAROBJ
 ldx objX ;# objects already in list
 inx
 cpx #maxobj
 bcs ]rts ;list full (shouldn't happen)
 stx objX

 sta objTYP,x

 lda FCharX
 sta XCO
 lda FCharX+1
 sta OFFSET

 txa
 pha
 jsr cvtx ;from 280-res to byte/offset
 pla
 tax

 lda XCO
 sta objX,x
 lda OFFSET
 sta objOFF,x

 lda FCharY
 sta objY,x

 lda FCharCU
 sta objCU,x
 lda FCharCL
 sta objCL,x
 lda FCharCR
 sta objCR,x
 lda FCharCD
 sta objCD,x

 lda FCharImage
 sta objIMG,x

 lda FCharTable
 sta objTAB,x

 lda FCharFace
 sta objFACE,x

 jmp SETOBJINDX

*-------------------------------
*
*  S E T  O B J  I N D X
*
*  Set object index
*
*-------------------------------
SETOBJINDX
 lda FCharIndex
 sta objINDX,x

 cmp #30
 bcs :os

 tax

 lda #1
 sta objbuf,x
:os
 rts

*-------------------------------
*
* Text routines
*
* NOTE: These routines bypass normal data structures
* & write directly to hi-res page.
*
* Call at end of DRAWALL to make sure text goes on top
* of everything else.
*
*-------------------------------
*
* Call once before using other text routines
*
*-------------------------------
pretext
 jsr initlay

 lda #bgtable2
 sta TABLE
 lda #>bgtable2
 sta TABLE+1
 rts

*-------------------------------
* Part of "Yellow" copy-protection

SETRECHECK0
 lda #recheck0
 sta locals
 lda #>recheck0
 sta locals+1 ;fall thru (& return A = 0)

*-------------------------------
INITLAY
 lda #3 ;auxmem
 sta BANK

 lda #40
 sta RIGHTCUT
 lda #192
 sta BOTCUT ;use full screen
 lda #0
 sta LEFTCUT
 sta TOPCUT
 rts

*-------------------------------
*
* Print character
*
* In: PAGE, XCO/OFFSET, YCO
*     a = ASCII value of character
* Out: XCO/OFFSET (modified)
*
*-------------------------------
prchar
 sec
 sbc #"/" ;"0" = 1
 sta IMAGE

 lda #ora
 sta OPACITY

 jsr lay

 inc XCO
 rts

*-------------------------------
 lst
 ds 1
 usr $a9,17,$00,*-org
 lst off