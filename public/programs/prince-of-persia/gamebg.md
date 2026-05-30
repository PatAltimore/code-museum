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
description: "This file contains key routines for rendering and animating objects in Prince of Persia (1989), a groundbreaking cinematic platformer for the Apple II."

summary:
  - point: "Routines for rendering objects like hourglasses, flames, and strength meters"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Innovative use of 6502 assembly to manage animations and memory constraints"
    link: "https://en.wikipedia.org/wiki/MOS_Technology_6502"
    link_label: "MOS Technology 6502"
  - point: "Bank-switched memory techniques to fit complex animations into 128KB"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank switching"

enhancements:
  - id: "yellow-flag-for-copy-protection"
    line_start: 59
    line_end: 80
    title: "Why a Yellow Flag Prevents Piracy"
    wikipedia_url: "https://en.wikipedia.org/wiki/Copy_protection"
    image_url: ""
    image_caption: ""
    content: "The `YELLOW` routine sets a flag in memory to indicate successful passage of the game's copy protection check. This was part of a multi-layered strategy to prevent unauthorized duplication of Prince of Persia disks. In the late 1980s, piracy was rampant, and developers often implemented creative measures to safeguard their work. The Apple II's limited hardware capabilities meant that copy protection schemes had to be clever and lightweight. Jordan Mechner's approach here ties the flag to specific routines that would fail if the flag wasn't set correctly, subtly integrating copy protection into the game's logic. This technique influenced other developers to embed similar checks directly into gameplay-critical code, making them harder to bypass."
  - id: "strength-meter-animation"
    line_start: 90
    line_end: 97
    title: "Animating Strength Meters with Lookup Tables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "The strength meters for the Kid and Opponent are animated using pre-defined lookup tables (`KidStrX`, `KidStrOFF`, `OppStrX`, `OppStrOFF`). These tables map positions and offsets for graphical elements, allowing the game to efficiently render the meters without recalculating positions dynamically. In the constrained environment of the Apple II, where CPU cycles and memory were precious, lookup tables were a common optimization technique. Mechner's use of this method ensured smooth animations while keeping the code compact. This approach became a standard for rendering UI elements in games, influencing later titles on more advanced systems."
  - id: "hourglass-animation"
    line_start: 122
    line_end: 123
    title: "Hourglass Sand: A Cinematic Detail"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "The hourglass animation (`glassimg`, `flowimg`) showcases Mechner's attention to cinematic detail. The sand flowing through the hourglass is represented by a series of frames stored in memory and updated dynamically. This visual element reinforces the game's theme of time running out, adding tension to the gameplay. Mechner's background in filmmaking influenced his decision to include such details, making Prince of Persia one of the first games to prioritize visual storytelling. This technique of using frame-based animations for objects later became a staple in games, particularly in the cinematic platformer genre."
  - id: "torch-flame-animation"
    line_start: 142
    line_end: 148
    title: "Animating Flames with Hexadecimal Frames"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "The `torchflame` data block defines the animation frames for torches using hexadecimal values. These frames are cycled to create the illusion of flickering flames. On the Apple II, where hardware sprites were not available, such animations had to be manually managed in software. Mechner's use of pre-defined frames allowed him to create visually compelling effects without taxing the system's limited resources. This technique was widely adopted by other developers working on similar hardware, influencing the way animations were handled in early games."
  - id: "time-left-message"
    line_start: 187
    line_end: 273
    title: "How 'Minutes Left' Adds Urgency"
    wikipedia_url: "https://en.wikipedia.org/wiki/Heads-up_display_(video_games)"
    image_url: ""
    image_caption: ""
    content: "The `TIMELEFTMSG` routine dynamically displays the remaining time in the game, updating the message based on the player's actions and the game's state. This feature adds urgency and reinforces the narrative theme of racing against the clock. The routine uses binary-coded decimal (BCD) arithmetic to handle the time values, a common technique in 6502 assembly for dealing with human-readable numbers. By integrating the message directly into the gameplay, Mechner created a seamless experience that heightened tension. This approach influenced later games that used dynamic HUD elements to convey critical information."
  - id: "level-display-routine"
    line_start: 275
    line_end: 319
    title: "Printing 'Level XX' with Assembly Precision"
    wikipedia_url: "https://en.wikipedia.org/wiki/Video_game_levels"
    image_url: ""
    image_caption: ""
    content: "The `PRINTLEVEL` routine displays the current level number on the screen. It uses a combination of lookup tables (`digit1`, `digit2`) and arithmetic to render the digits correctly. This routine exemplifies the meticulous attention to detail required when working in 6502 assembly, where every operation had to be explicitly managed. By ensuring the level number was visually clear and accurate, Mechner enhanced the player's sense of progression. This technique of dynamically rendering text based on game state became a foundational practice in game development."
  - id: "setup-image-routine"
    line_start: 363
    line_end: 386
    title: "Setting Up Images for Efficient Rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_rendering"
    image_url: ""
    image_caption: ""
    content: "The `setupimage` routine initializes the coordinates and attributes for graphical elements to be rendered. By preloading values into specific memory locations, the routine minimizes the overhead of rendering objects during gameplay. This optimization was crucial on the Apple II, where CPU cycles were limited. Mechner's approach here reflects the broader trend of using precomputed data to streamline rendering, a technique that influenced graphics programming in later systems."
  - id: "draw-kid-routine"
    line_start: 388
    line_end: 403
    title: "Drawing the Kid: Flashing Between States"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "The `DRAWKID` routine handles the rendering of the protagonist, including transitions between normal and shadow states. This visual effect, achieved by alternating between `DrawNormal` and `DrawEored`, adds a cinematic flair to the gameplay. Mechner's use of rotoscoping to trace real-life movements is reflected in the fluidity of the Kid's animations. This technique set a new standard for character animation in games, influencing titles like Another World and Flashback."
  - id: "setupcomix-animation-logic"
    line_start: 958
    line_end: 1038
    title: "Animation Logic: Mapping Moves to Coordinates"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "This routine, SETUPCOMIX, calculates the coordinates, color, and image for a character based on its current state. It uses conditional checks to determine the character's vertical position (e.g., crouching, impaled) and adjusts the x and y coordinates accordingly. The routine also assigns color based on the character's ID and sets up image and collision boundaries. Mechner's approach here reflects the influence of rotoscoping, where he traced filmed movements to create realistic animations. The conditional logic ensures that the character's position aligns with the cinematic movements he captured. In 1989, programming for the Apple II meant working within severe hardware constraints: 128KB of memory and a 1MHz CPU. Mechner's decision to calculate positions dynamically rather than preloading them into memory was likely driven by these limitations. The routine also demonstrates his focus on realism, a hallmark of Prince of Persia's gameplay, which set it apart from other platformers of the era. This technique influenced later cinematic platformers like Another World (1991) and Flashback (1992), which also prioritized fluid, lifelike animations. The logic for dynamically adjusting positions and attributes based on state became a standard in games that sought to blend gameplay with storytelling."
  - id: "addcharobj-object-management"
    line_start: 1040
    line_end: 1096
    title: "Adding Characters to the Object Table"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "ADDCHAROBJ is responsible for adding a character to the game's object table, which tracks all active entities. It checks if the table has space, assigns the character's type, and stores its coordinates, collision boundaries, image, and other attributes. The routine converts screen coordinates into byte/offset pairs, a technique optimized for the Apple II's graphics architecture. In the late 1980s, object management was a critical challenge for game developers working on memory-limited systems. Mechner's implementation ensures efficient use of the object table, preventing overflows while maintaining fast access to character data. His use of direct memory manipulation reflects the low-level programming style required for the Apple II. This approach laid the groundwork for object-oriented design in games, influencing titles like Doom (1993), which used similar tables to manage entities in its 3D environments. The efficient handling of objects in constrained systems remains a foundational concept in game development."
  - id: "setobjindx-indexing-objects"
    line_start: 1098
    line_end: 1117
    title: "Indexing Objects for Fast Access"
    wikipedia_url: "https://en.wikipedia.org/wiki/Index_(computing)"
    image_url: ""
    image_caption: ""
    content: "SETOBJINDX assigns an index to the newly added object in the table, ensuring it can be quickly referenced during gameplay. It checks if the index exceeds a certain threshold and updates a buffer accordingly. This routine exemplifies Mechner's focus on performance optimization, as indexing allows for rapid lookups in the object table. In the context of 1980s computing, indexing was a common technique to manage data efficiently, especially on systems with limited processing power. Mechner's implementation ensures that the game can handle multiple objects simultaneously without slowing down. This indexing strategy influenced later game engines, such as the Unreal Engine, which use similar techniques to manage entities in complex environments. The concept of object indexing remains a cornerstone of game development, enabling fast and efficient gameplay mechanics."
  - id: "pretext-hi-res-text"
    line_start: 1119
    line_end: 1141
    title: "Writing Text Directly to Graphics Pages"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "The pretext routine initializes the text rendering system by setting up pointers to the background table. Unlike other routines, it bypasses normal data structures and writes directly to the hi-res graphics page. This ensures that text overlays appear on top of all other graphical elements, maintaining the game's cinematic presentation. Direct manipulation of graphics pages was a common technique on the Apple II, where developers had to work within the constraints of the machine's limited graphics capabilities. Mechner's decision to prioritize text overlays reflects his emphasis on storytelling and player immersion. This approach influenced later games that integrated text into gameplay, such as The Secret of Monkey Island (1990). The ability to overlay text on graphics remains a standard feature in modern game engines, highlighting the enduring impact of Mechner's techniques."
  - id: "setrecheck0-copy-protection"
    line_start: 1143
    line_end: 1150
    title: "Copy-Protection Embedded in Gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Copy_protection"
    image_url: ""
    image_caption: ""
    content: "SETRECHECK0 is part of Prince of Persia's copy-protection system, which checks for specific memory values to verify the game's authenticity. It sets pointers to the recheck0 routine, ensuring that unauthorized copies fail to execute correctly. This technique embeds copy-protection directly into gameplay routines, making it harder for pirates to bypass. In the 1980s, software piracy was a significant concern for developers. Mechner's integration of copy-protection into the game's logic reflects the creative solutions programmers employed to safeguard their work. The use of memory checks was a common strategy, as it exploited the unique characteristics of the Apple II's architecture. While modern games use more sophisticated DRM systems, the principles behind Mechner's approach influenced early copy-protection methods in PC gaming. The integration of security measures into core routines remains a relevant topic in software development."
  - id: "initlay-screen-boundaries"
    line_start: 1152
    line_end: 1164
    title: "Setting Screen Boundaries for Gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "INITLAY configures the screen boundaries by setting values for the left, right, top, and bottom cuts. This ensures that gameplay elements are displayed within the visible area of the screen. The routine also switches memory banks to access auxiliary memory, a technique used to extend the Apple II's capabilities. Bank-switched memory was a common workaround for the Apple II's limited RAM. Mechner's use of this technique demonstrates his deep understanding of the hardware and his ability to push its limits. By dynamically adjusting screen boundaries, he ensured that the game could adapt to different scenarios without compromising performance. This method influenced later games that required dynamic screen adjustments, such as platformers on the NES and SNES. The ability to manage screen boundaries efficiently remains a critical aspect of game design, especially in titles with scrolling or cinematic elements."
  - id: "prchar-rendering-characters"
    line_start: 1166
    line_end: 1186
    title: "Rendering Characters on the Screen"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "The prchar routine renders individual characters on the screen by calculating their image and opacity, then calling the lay routine to place them. It increments the x-coordinate after rendering, preparing for the next character. This routine is essential for displaying text and graphical elements during gameplay. In the Apple II era, rendering characters required precise manipulation of graphics memory. Mechner's implementation ensures that characters are displayed correctly and efficiently, contributing to the game's polished presentation. The use of opacity settings reflects his attention to detail, as it allows for more visually appealing graphics. This technique influenced later games that prioritized graphical fidelity, such as early PC titles with VGA graphics. The ability to render characters efficiently remains a fundamental aspect of game development, enabling the creation of visually rich experiences."

---

```asm
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
```