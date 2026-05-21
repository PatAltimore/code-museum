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
description: "This file defines graphical routines for Prince of Persia, focusing on animations, UI elements, and environmental objects on the Apple II."

summary:
  - point: "Bank-switched memory techniques optimize the Apple II's limited 128K RAM."
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank switching"
  - point: "Routines use direct hires graphics manipulation for cinematic animations."
    link: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    link_label: "Apple II graphics"
  - point: "Rotoscoping-inspired animations bring fluidity to the game's visuals."
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Strength meters and environmental objects are drawn dynamically based on gameplay state."
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Innovative use of assembly language for cinematic platforming on constrained hardware."
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly language"

enhancements:
  - id: "yellow-flag-initialization"
    line_start: 61
    line_end: 68
    title: "Why a Yellow Flag Matters in 1989"
    wikipedia_url: "https://en.wikipedia.org/wiki/Copy_protection"
    image_url: ""
    image_caption: ""
    content: "This section initializes a 'yellow flag' used for copy protection checks. The routine sets a memory location to a specific value, ensuring the game can verify the presence of a valid disk. In the late 1980s, piracy was rampant, and developers like Jordan Mechner had to implement creative solutions to protect their work. The Apple II’s limited hardware meant that such checks had to be lightweight and unobtrusive, often relying on clever tricks like this flag system. While modern games use complex DRM systems, this approach reflects the ingenuity required to enforce copy protection in an era of floppy disks and manual distribution. Mechner’s work here ensured that players experienced the game as intended, and similar techniques were adopted by other developers fighting piracy on early personal computers."
  - id: "hourglass-animation"
    line_start: 122
    line_end: 130
    title: "Animating Time: The Hourglass Frames"
    wikipedia_url: "https://en.wikipedia.org/wiki/Hourglass_(symbol)"
    image_url: ""
    image_caption: ""
    content: "The hourglass animation frames defined here are used to visually represent the passage of time in the Princess's room. Each frame corresponds to a different state of sand height, creating a dynamic visual cue for players. Mechner’s use of animation to convey gameplay mechanics was groundbreaking for the era, as most games relied on static imagery or text. The hourglass serves both as a narrative device and a gameplay element, reinforcing the urgency of the Kid’s mission. This technique of tying animations to game mechanics became a hallmark of cinematic platformers and influenced later titles like Another World and Flashback."
  - id: "torch-animation-frames"
    line_start: 147
    line_end: 154
    title: "How Torches Flickered on the Apple II"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "This section defines the animation frames for torches, creating a flickering effect that adds atmosphere to the game. Each frame corresponds to a different visual state of the flame, simulating movement and light. On the Apple II, achieving such effects required careful manipulation of hires graphics and memory. Mechner’s attention to detail in environmental design helped immerse players in the game’s world, making the Princess’s room feel alive. This use of animation for ambiance influenced later games that sought to create immersive environments, such as the richly detailed levels of Castlevania and the atmospheric lighting of early 3D games like Tomb Raider."
  - id: "time-left-message"
    line_start: 187
    line_end: 273
    title: "Printing Time Left: A Cinematic Countdown"
    wikipedia_url: "https://en.wikipedia.org/wiki/Countdown"
    image_url: ""
    image_caption: ""
    content: "This subroutine dynamically prints the 'Minutes Left' message on the screen, updating it based on gameplay state. It calculates the remaining time, converts it to a readable format, and positions the message to avoid overlapping with the Kid’s sprite. The routine also switches to 'Seconds Left' when time is critically low, heightening tension for players. Mechner’s cinematic approach to game design is evident here, as the countdown reinforces the narrative urgency. This technique of dynamically updating UI elements based on game state became standard in later action and adventure games, influencing titles like Resident Evil and its iconic 'You Are Dead' screen."
  - id: "draw-kid-strength-meter"
    line_start: 491
    line_end: 572
    title: "The Algorithm Behind Health Bullets"
    wikipedia_url: "https://en.wikipedia.org/wiki/Health_(gaming)"
    image_url: ""
    image_caption: ""
    content: "This subroutine draws the Kid’s strength meter at the lower left of the screen, using a combination of precomputed data tables and dynamic calculations. It iterates through the Kid’s current health value, drawing bullets to represent remaining strength and blanks for lost health. The routine includes a flashing effect when the Kid is down to one health point, adding a visual cue for danger. Mechner’s implementation here is a masterclass in efficient graphics rendering on constrained hardware. The visual representation of health became a staple of gaming, influencing everything from RPGs to modern shooters like Halo, where health bars are now ubiquitous."
  - id: "draw-opponent-strength-meter"
    line_start: 579
    line_end: 673
    title: "Mirrored Health Bars for the Opponent"
    wikipedia_url: "https://en.wikipedia.org/wiki/Health_(gaming)"
    image_url: ""
    image_caption: ""
    content: "This subroutine mirrors the Kid’s strength meter logic to draw the opponent’s health bar on the lower right of the screen. It includes special conditions for certain characters, such as the Shadowman, whose health is only displayed on level 12. The mirrored rendering technique minimizes code duplication while maintaining visual symmetry. Mechner’s decision to display health bars for both the Kid and the opponent added a layer of strategy to combat, as players could gauge their enemy’s remaining strength. This dual health bar system influenced later fighting games like Street Fighter, where visible health bars became a core mechanic."
  - id: "setup-flask-animation"
    line_start: 675
    line_end: 734
    title: "Potion Effects: Bubbling Flask Frames"
    wikipedia_url: "https://en.wikipedia.org/wiki/Potion_(gaming)"
    image_url: ""
    image_caption: ""
    content: "This subroutine sets up the animation for bubbling flasks, dynamically adjusting the graphics based on the potion type. It includes special handling for mystery potions, which are drawn taller, and uses precomputed animation frames to simulate bubbling. The visual representation of potion effects added depth to the game’s mechanics, making each potion feel distinct. Mechner’s attention to detail in environmental design helped make Prince of Persia’s world feel alive and interactive. Potion animations like these influenced later RPGs and adventure games, where consumables often have distinct visual effects, such as the glowing potions in Diablo."
  - id: "setup-character-comix"
    line_start: 958
    line_end: 1038
    title: "How Dead Characters Still Shape Gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `SETUPCOMIX` routine initializes a character's position, appearance, and collision boundaries based on their state (alive, dead, impaled, etc.). It uses conditional branching to assign specific coordinates and attributes depending on the character's status. For example, dead characters are positioned differently than crouching or halved ones. This section also calculates the character's color and sets up their visual representation using predefined tables (`starimage` and `startable`). In 1989, the Apple II's hardware was limited to 128K of memory, requiring developers to optimize every byte. Jordan Mechner's approach here reflects his deep understanding of the Apple II's graphical capabilities and memory constraints. By directly manipulating the character's attributes and using lookup tables, he avoided costly runtime calculations, ensuring smooth gameplay. This routine laid the groundwork for cinematic platformers, where characters' animations and states dynamically influenced gameplay. The technique of using conditional logic to adjust visual and collision properties became a standard in later games, influencing titles like Another World (1991) and Flashback (1992). Mechner's attention to detail in character behavior helped establish Prince of Persia as a groundbreaking title in the genre."
  - id: "add-character-object"
    line_start: 1050
    line_end: 1104
    title: "The Object Table That Never Overflows"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `ADDCHAROBJ` routine adds a character to the game's object table, which tracks all active objects in the scene. It first checks if the table is full (`cpx #maxobj`) and gracefully exits if it is. Otherwise, it updates the table with the character's type, position, collision boundaries, image, and other attributes. The routine also converts screen coordinates into byte/offset values using the `cvtx` subroutine, ensuring compatibility with the Apple II's graphics system. In the late 1980s, object management was a critical challenge for game developers working on limited hardware. The Apple II's 6502 processor had no built-in memory management, so developers had to manually track and update objects in real time. Mechner's design here ensures that the object table remains consistent and efficient, even under the constraints of 128K memory. This approach to object management influenced later games that relied on real-time updates for dynamic environments. The concept of an object table became a staple in game engines, appearing in titles like Doom (1993) and Quake (1996). Mechner's careful handling of object limits and attributes demonstrated how to balance complexity with performance on constrained systems."
  - id: "set-object-index"
    line_start: 1098
    line_end: 1117
    title: "Why Every Object Needs an Index"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `SETOBJINDX` routine assigns an index to the current object in the table, ensuring that it can be referenced and updated efficiently during gameplay. It also checks if the index exceeds a certain threshold (`cmp #30`) and adjusts the object buffer accordingly. This routine is a critical part of the game's object management system, allowing characters and items to interact seamlessly. In the era of the Apple II, efficient indexing was essential for real-time games. The 6502 processor's limited instruction set and lack of advanced memory management meant that developers had to design their own systems for tracking objects. Mechner's use of indexing here reflects the ingenuity required to create complex interactions on such constrained hardware. This indexing technique influenced the design of later game engines, where object IDs became a standard feature for managing dynamic entities. It also demonstrated the importance of efficient data structures in real-time applications, a lesson that continues to shape modern game development."
  - id: "pretext-hires-text"
    line_start: 1119
    line_end: 1141
    title: "How Text Routines Bypass Everything"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "The `pretext` routine sets up the game's text rendering system by initializing the background table (`bgtable2`) and bypassing normal data structures to write directly to the Apple II's hi-res graphics page. This ensures that text appears on top of all other graphical elements, maintaining its visibility during gameplay. Direct manipulation of hi-res graphics was a common technique on the Apple II, where developers often had to work around hardware limitations to achieve desired effects. Mechner's decision to bypass standard structures reflects his focus on performance and visual clarity, ensuring that critical text elements like dialogue and instructions are never obscured. This technique influenced later games that prioritized text readability in complex visual environments. It also showcased the flexibility of the Apple II's graphics system, inspiring other developers to experiment with direct memory manipulation for unique effects."
  - id: "copy-protection-yellow"
    line_start: 1143
    line_end: 1152
    title: "The Copy-Protection Routine Hidden in Gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Copy_protection"
    image_url: ""
    image_caption: ""
    content: "The `SETRECHECK0` routine is part of the game's copy-protection system, which checks for specific memory values (`recheck0`) to verify the game's authenticity. If the check fails, certain gameplay elements may be altered or disabled, subtly discouraging piracy without overtly disrupting the experience. Copy protection was a major concern for developers in the 1980s, as software piracy was rampant and could significantly impact sales. Mechner's approach here integrates the protection mechanism into the game's code, making it harder for pirates to identify and bypass. This technique influenced later games that used similar methods to embed copy-protection checks into gameplay. It also highlighted the creative ways developers could combat piracy while maintaining the integrity of their work."
  - id: "initialize-layout-screen"
    line_start: 1152
    line_end: 1164
    title: "Setting the Stage for Full-Screen Action"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "The `INITLAY` routine initializes the screen layout by setting memory bank (`BANK`) and defining the screen boundaries (`RIGHTCUT`, `BOTCUT`, `LEFTCUT`, `TOPCUT`). This ensures that the game uses the full screen for rendering, maximizing the visual impact of the Apple II's hi-res graphics. In the 1980s, full-screen rendering was a technical challenge on systems like the Apple II, which had limited graphics capabilities and memory. Mechner's routine here demonstrates his mastery of the hardware, allowing Prince of Persia to deliver a visually immersive experience despite its constraints. This approach to screen layout influenced later games that sought to maximize graphical fidelity on limited hardware. It also showcased the importance of optimizing screen boundaries for gameplay, a principle that continues to shape modern game design."
  - id: "print-character-hires"
    line_start: 1166
    line_end: 1186
    title: "Printing Characters in Hi-Res Graphics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "The `prchar` routine prints a single character to the screen, using the Apple II's hi-res graphics mode. It calculates the character's image (`IMAGE`) and opacity (`OPACITY`), then calls the `lay` subroutine to render it. The routine also updates the X-coordinate (`XCO`) for the next character, ensuring proper alignment. Text rendering in hi-res graphics was a complex task on the Apple II, requiring precise manipulation of memory and screen coordinates. Mechner's routine here reflects his attention to detail, ensuring that text elements are both visually clear and efficiently rendered. This technique influenced later games that used hi-res graphics for text and UI elements, demonstrating the potential of direct memory manipulation for creating polished visual effects. It also highlighted the importance of efficient text rendering in real-time applications, a principle that remains relevant in modern game development."

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
