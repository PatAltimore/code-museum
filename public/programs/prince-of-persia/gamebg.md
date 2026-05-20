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
description: "This file contains the graphical routines and animations for Prince of Persia (1989), showcasing Jordan Mechner's innovative use of 6502 assembly to create cinematic visuals on the Apple II."

summary:
  - point: "Bank-switched memory management to fit graphics in 128K"
    link: "https://en.wikipedia.org/wiki/Bank-switching"
    link_label: "Bank-switching"
  - point: "Rotoscoping animation technique traced from live-action footage"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Direct manipulation of Apple II's high-resolution graphics mode"
    link: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    link_label: "Apple II graphics"
  - point: "Innovative use of assembly for cinematic platformer visuals"
    link: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    link_label: "Cinematic platformer"

enhancements:
  - id: "yellow-flag-initialization"
    line_start: 59
    line_end: 68
    title: "Setting the Yellow Flag for Copy Protection"
    wikipedia_url: "https://en.wikipedia.org/wiki/Copy_protection"
    image_url: ""
    image_caption: ""
    content: "This section initializes the 'yellowflag' variable, which is part of the game's copy protection mechanism. By setting this flag, the program ensures that certain routines related to disk verification can proceed. Copy protection was a major concern in the 1980s, as software piracy was rampant. Mechner implemented multiple layers of protection in Prince of Persia, including this check, to ensure the game could not be easily duplicated. This approach reflects the ingenuity required to safeguard intellectual property in an era before widespread internet connectivity. While modern games use DRM and online activation, these early methods laid the groundwork for protecting software assets."
  - id: "hourglass-animation-data"
    line_start: 117
    line_end: 126
    title: "Animating the Hourglass in Princess's Room"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "This section provides the graphical data for the hourglass animation, including the frames for the hourglass and the sand height ('sandht'). The hourglass is a key visual element in the game, symbolizing the passage of time—a central theme in Prince of Persia. Mechner's use of frame-by-frame animation, derived from his rotoscoping technique, adds a cinematic quality to the game. This approach influenced later games that sought to incorporate realistic animations and storytelling elements, such as Another World and Flashback."
  - id: "torch-animation-data"
    line_start: 147
    line_end: 154
    title: "Torch Flame Animation Frames"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "This section defines the animation frames for the torch flames, a recurring visual element in the game. The 'torchflame' and 'ptorchflame' arrays specify the sequence of frames for the animation. Torches create a dynamic atmosphere in the game's dungeons, enhancing the player's immersion. Mechner's attention to environmental details, such as flickering flames, helped establish Prince of Persia as a pioneer in creating mood and ambiance in platformers. This technique inspired later developers to integrate environmental storytelling into their games."
  - id: "time-left-message"
    line_start: 182
    line_end: 268
    title: "Displaying 'Minutes Left' Countdown"
    wikipedia_url: "https://en.wikipedia.org/wiki/Countdown"
    image_url: ""
    image_caption: ""
    content: "This subroutine displays the 'Minutes Left' message, a critical gameplay mechanic that adds urgency to the player's actions. The routine calculates the remaining time in binary-coded decimal (BCD) format and updates the display dynamically. Time constraints were a novel way to increase tension and challenge in games, and Mechner's implementation here underscores the game's cinematic pacing. The countdown mechanic influenced later titles, such as Resident Evil and Dead Rising, where time pressure became a core gameplay element."
  - id: "draw-kid-strength-meter"
    line_start: 491
    line_end: 572
    title: "Rendering the Kid's Strength Meter"
    wikipedia_url: "https://en.wikipedia.org/wiki/Health_(gaming)"
    image_url: ""
    image_caption: ""
    content: "This subroutine draws the player's strength meter at the lower left of the screen. It uses the 'KidStrength' variable to determine the number of bullets to display, dynamically adjusting based on the player's health. The routine includes logic for flashing the meter when health is critically low, adding a visual cue to alert the player. Mechner's implementation of health meters was innovative for its time, providing players with immediate feedback on their status. This concept has since become a staple in gaming, appearing in everything from RPGs to first-person shooters."
  - id: "setup-flask-animation"
    line_start: 661
    line_end: 719
    title: "Preparing the Bubbling Flask Animation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "This subroutine sets up the bubbling flask animation, adjusting parameters based on the type of potion (e.g., mystery, boost). The routine manipulates Y-coordinates and offsets to create the illusion of bubbling liquid. The flask animations contribute to the game's immersive environment, showcasing Mechner's ability to use limited hardware to create visually compelling effects. This technique influenced later games that sought to integrate dynamic environmental animations, such as Diablo's potion effects."
  - id: "twinkle-star-animation"
    line_start: 786
    line_end: 812
    title: "Animating Twinkling Stars Outside the Window"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "This subroutine animates the twinkling stars outside the Princess's window, directly updating the graphics on both screens. The routine uses XOR operations to toggle the star's brightness, creating a simple yet effective animation. The stars add a sense of depth and realism to the game's environment, enhancing its cinematic quality. Mechner's use of direct hires calls to manipulate graphics demonstrates his mastery of the Apple II's hardware. This technique influenced later developers who sought to create atmospheric effects in their games."
  - id: "draw-hourglass-animation"
    line_start: 831
    line_end: 848
    title: "Rendering the Hourglass Animation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "This subroutine renders the hourglass animation in the Princess's room, using the 'glassimg' array to select the appropriate frame based on the hourglass's state. The hourglass is a visual representation of time, a central theme in Prince of Persia. Mechner's use of frame-by-frame animation adds a cinematic touch to the game, making it stand out among other platformers of the era. This approach influenced later games that sought to integrate storytelling through visual elements, such as The Legend of Zelda: Majora's Mask."
  - id: "save-restore-character-vars"
    line_start: 939
    line_end: 956
    title: "Saving and Restoring Character Variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Save_(video_gaming)"
    image_url: ""
    image_caption: ""
    content: "This section contains routines for saving and restoring character variables, ensuring that the game's state can be preserved and manipulated as needed. By storing data in temporary memory locations, the program can maintain consistency across gameplay events. Mechner's implementation reflects the challenges of managing state in assembly language, where memory constraints were significant. This approach laid the groundwork for save systems in later games, influencing titles like Final Fantasy and The Elder Scrolls series."
  - id: "setup-character-comix"
    line_start: 958
    line_end: 1038
    title: "Setting up character 'comix' properties"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This routine, `SETUPCOMIX`, initializes a character's properties such as position, color, and image. It begins by saving and restoring key variables (`saveFChar` and `restoreFChar`) and then calculates coordinates based on the character's state (e.g., crouching, impaled). The routine also assigns default values for collision boundaries and sets the character's image and table pointers. Mechner's approach reflects the constraints of the Apple II hardware, where memory and processing power were limited. By directly manipulating variables and leveraging lookup tables, he optimized performance for real-time gameplay. This setup routine laid the groundwork for the game's fluid animations and responsive controls, which were critical to its cinematic feel. Techniques like these influenced later platformers, including Another World and Flashback, which also emphasized character-driven storytelling and animation."
  - id: "add-character-object"
    line_start: 1040
    line_end: 1096
    title: "Adding a character to the object table"
    wikipedia_url: "https://en.wikipedia.org/wiki/Object-oriented_programming"
    image_url: ""
    image_caption: ""
    content: "The `ADDCHAROBJ` routine inserts a character into the game's object table, a data structure that tracks all active entities. It ensures the table doesn't exceed its maximum size, assigns coordinates, collision boundaries, and image data, and converts screen positions into byte offsets for efficient rendering. This method reflects Mechner's careful resource management on the Apple II, where memory constraints required compact and efficient data structures. The object table concept foreshadowed modern object-oriented programming, where entities are encapsulated with their properties and behaviors. This routine's design influenced later games that relied on similar systems for managing dynamic entities, such as Super Mario Bros. and The Legend of Zelda."
  - id: "set-object-index"
    line_start: 1098
    line_end: 1117
    title: "Assigning object indices for tracking"
    wikipedia_url: "https://en.wikipedia.org/wiki/Index_(database)"
    image_url: ""
    image_caption: ""
    content: "The `SETOBJINDX` routine assigns an index to each object in the table, enabling efficient tracking and retrieval during gameplay. It ensures indices remain within a valid range and updates a buffer for quick access. This indexing mechanism was crucial for managing multiple objects in real-time, a challenge on the Apple II's limited hardware. Mechner's approach demonstrates his ingenuity in overcoming constraints to deliver a seamless gaming experience. The concept of indexing objects for fast lookup became a standard practice in game development, influencing engines like Unity and Unreal, which rely on similar principles for managing game entities."
  - id: "initialize-text-routines"
    line_start: 1119
    line_end: 1141
    title: "Preparing text routines for hi-res overlays"
    wikipedia_url: "https://en.wikipedia.org/wiki/Hi-res_graphics"
    image_url: ""
    image_caption: ""
    content: "The `pretext` routine initializes text rendering by setting up pointers to the background table. Text in Prince of Persia is drawn directly onto the hi-res graphics page, bypassing normal data structures to ensure it appears on top of other elements. This technique highlights Mechner's ability to manipulate the Apple II's graphics system for cinematic effects. By prioritizing text overlays, he ensured critical information like dialogue and instructions remained visible during gameplay. This approach influenced later games that integrated text seamlessly into their visual design, such as Final Fantasy and Metal Gear Solid."
  - id: "set-recheck-pointer"
    line_start: 1146
    line_end: 1152
    title: "Copy-protection via memory pointers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Copy_protection"
    image_url: ""
    image_caption: ""
    content: "The `SETRECHECK0` routine is part of Prince of Persia's copy-protection system, which uses memory pointers to verify the game's integrity. By storing specific values in the `locals` variable, the routine ensures that unauthorized copies fail to execute correctly. Copy-protection was a common concern in the 1980s, as software piracy threatened developers' livelihoods. Mechner's implementation reflects the era's ingenuity in safeguarding intellectual property. While such techniques were eventually replaced by more sophisticated methods like DRM, they represent an important chapter in the history of software development."
  - id: "initialize-screen-layout"
    line_start: 1152
    line_end: 1164
    title: "Setting up screen boundaries and memory banks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bank_switching"
    image_url: ""
    image_caption: ""
    content: "The `INITLAY` routine configures screen boundaries and selects the memory bank for rendering. By setting values for `RIGHTCUT`, `BOTCUT`, `LEFTCUT`, and `TOPCUT`, it ensures the entire screen is utilized for gameplay. The routine also switches to auxiliary memory, a technique known as bank switching, to access additional resources. This method was essential for fitting the game's complex graphics and animations into the Apple II's limited memory. Mechner's use of bank switching influenced later developers working on memory-constrained systems, such as the NES and Sega Genesis, where similar techniques were used to expand capabilities."
  - id: "print-character-to-screen"
    line_start: 1166
    line_end: 1186
    title: "Rendering characters on the hi-res page"
    wikipedia_url: "https://en.wikipedia.org/wiki/Character_generator"
    image_url: ""
    image_caption: ""
    content: "The `prchar` routine renders a single character onto the hi-res graphics page. It calculates the ASCII value, sets opacity, and calls the `lay` subroutine to draw the character. By incrementing the `XCO` coordinate, it prepares for the next character, enabling efficient text rendering. This routine showcases Mechner's mastery of the Apple II's graphics system, where direct manipulation of pixels was required to achieve cinematic effects. The ability to render text dynamically influenced later games that relied on real-time dialogue and instructions, such as Monkey Island and Chrono Trigger."

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