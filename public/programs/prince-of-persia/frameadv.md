---
title: "FRAMEADV.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/FRAMEADV.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/FRAMEADV.S"
year: 1989
author: "Jordan Mechner"
slug: "frameadv"
order: 12
description: "This file contains the assembly routines for frame advancement and screen rendering in Prince of Persia (1989), showcasing Jordan Mechner's ingenuity in optimizing graphics and gameplay on the Apple II."

summary:
  - point: "Innovative use of bank-switched memory to fit complex graphics into 128K"
    link: "https://en.wikipedia.org/wiki/Bank-switching"
    link_label: "Bank-switching"
  - point: "Rotoscoping animation technique traced from live-action footage"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Efficient partial screen redraw routines to optimize performance"
    link: "https://en.wikipedia.org/wiki/Double_buffering"
    link_label: "Double buffering"
  - point: "Cinematic platformer design influencing later games like Another World"
    link: "https://en.wikipedia.org/wiki/Another_World_(video_game)"
    link_label: "Another World"
  - point: "6502 assembly code pushing the limits of Apple II hardware"
    link: "https://en.wikipedia.org/wiki/MOS_Technology_6502"
    link_label: "6502 processor"

enhancements:
  - id: "initialize-game-settings"
    line_start: 22
    line_end: 42
    title: "How the Game Sets Up Its World"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `initsettings` routine initializes key variables for the game world, including object positions, states, and screen coordinates. These variables act as the backbone for rendering and gameplay logic, ensuring consistency across the game's cinematic platforming experience. In 1989, memory constraints on the Apple II forced programmers to carefully manage every byte, and this initialization routine reflects that discipline. Jordan Mechner, working solo, designed these settings to support the game's fluid animations and intricate level designs. This groundwork enabled Prince of Persia to deliver a seamless experience despite hardware limitations. The approach influenced later games that required similar initialization routines for dynamic environments, such as Another World and Flashback."
  - id: "full-screen-redraw"
    line_start: 44
    line_end: 179
    title: "The Routine That Redraws Everything"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The `SURE` routine performs a complete redraw of the screen, rendering all blocks and objects from scratch. This is necessary when transitioning between screens or resetting the game state. The routine iterates through rows and columns, calculating positions and fetching object data for each block. In the late 1980s, full-screen redraws were computationally expensive, but Mechner optimized this process by leveraging pre-calculated data and efficient memory access patterns. This technique ensured smooth transitions and minimized flickering, a common issue on the Apple II. The method laid the groundwork for modern double-buffering techniques used in graphical applications to prevent screen tearing."
  - id: "partial-screen-redraw"
    line_start: 181
    line_end: 339
    title: "Redrawing Only What Changed"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The `FAST` routine optimizes screen rendering by redrawing only the blocks marked for update in the redraw buffers. This approach significantly reduces the computational load compared to a full-screen redraw, allowing for smoother gameplay and faster transitions. In the constrained environment of the Apple II, this technique was essential for maintaining performance while handling complex animations and interactions. Mechner's implementation demonstrates a deep understanding of the hardware's limitations and the need for efficiency. Partial redraw techniques like this became standard practice in game development, influencing how modern engines handle dynamic scenes."
  - id: "redraw-entire-block"
    line_start: 341
    line_end: 359
    title: "Rebuilding a Block from Scratch"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `RedBlockSure` routine redraws an entire block, including its foreground and background sections. This is used when a block's state changes significantly, such as when an object is moved or destroyed. The routine calls subroutines to render each section of the block (A, B, C, D), ensuring that all layers are updated correctly. Mechner's meticulous attention to detail in handling block rendering allowed Prince of Persia to achieve its cinematic look, with smooth transitions and visually coherent scenes. This approach influenced later games that required precise control over individual screen elements."
  - id: "partial-block-redraw"
    line_start: 376
    line_end: 470
    title: "Selective Block Updates for Speed"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The `RedBlockFast` routine selectively redraws parts of a block based on the state of redraw buffers. By checking flags for wipe, redraw, movement, and floor updates, the routine minimizes unnecessary rendering, focusing only on the elements that have changed. This technique was critical for maintaining performance on the Apple II, where CPU cycles and memory were limited. Mechner's use of selective updates reflects a broader trend in game development toward optimization and efficiency, influencing how modern engines handle dynamic environments with minimal computational overhead."
  - id: "draw-objects"
    line_start: 495
    line_end: 551
    title: "Sorting and Rendering Game Objects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Z-buffering"
    image_url: ""
    image_caption: ""
    content: "The `drawobjs` routine handles the rendering of objects within a block, sorting them into back-to-front order to ensure proper layering. This is an early example of depth sorting, a precursor to modern Z-buffering techniques used in 3D graphics. Mechner's implementation uses a simple sort list to organize objects by their depth, allowing for visually coherent scenes despite the hardware's limitations. This technique was vital for creating the game's cinematic feel, where objects and characters interact seamlessly within the environment. Depth sorting remains a fundamental concept in graphics programming, influencing everything from 2D games to 3D rendering engines."
  - id: "load-object-data"
    line_start: 702
    line_end: 747
    title: "Fetching Object Details from Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `loadobj` routine retrieves detailed information about a specific object from the object table, including its position, image, and interaction properties. This data is used for rendering and gameplay logic, ensuring that each object behaves correctly within the game world. Mechner's design reflects the meticulous planning required to fit complex interactions into the limited memory of the Apple II. By organizing object data efficiently, he enabled Prince of Persia to feature a rich and dynamic environment, setting a standard for object management in later games."
  - id: "check-c-section-visibility"
    line_start: 912
    line_end: 928
    title: "Determining If a Section Should Be Drawn"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `checkc` routine determines whether the C-section of a block is visible based on its object ID and state. This is crucial for optimizing rendering, as hidden sections can be skipped to save processing time. Mechner's approach reflects the constraints of the Apple II, where every CPU cycle mattered. By incorporating visibility checks, he ensured that the game could handle complex scenes without sacrificing performance. This technique influenced later games that required efficient rendering of partially visible elements."
  - id: "drawb-rendering-b-section"
    line_start: 992
    line_end: 1085
    title: "How Prince of Persia Draws 'B' Sections"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "The 'drawb' routine is responsible for rendering the 'B' sections of the game environment, which include background elements and objects. It uses a combination of lookup tables and conditional branching to determine the appropriate graphics to display based on the object ID and preceding state. This section also includes special handling for panels and stripes, ensuring the correct visuals for palace backgrounds. In the mid-1980s, Apple II graphics were limited to 280x192 resolution with a palette of six colors. Developers had to work within these constraints while creating visually engaging environments. Jordan Mechner's approach here demonstrates meticulous optimization, leveraging the 6502 processor's limited instruction set to dynamically adjust visuals based on gameplay context. This technique influenced later games by showcasing how complex environments could be rendered efficiently on constrained hardware."
  - id: "redrawd-drawd-rendering-d-section"
    line_start: 1087
    line_end: 1123
    title: "Rendering 'D' Sections with Precision"
    wikipedia_url: "https://en.wikipedia.org/wiki/6502"
    image_url: ""
    image_caption: ""
    content: "The 'redrawd' and 'drawd' routines handle the rendering of 'D' sections, which include dynamic objects and foreground elements. These routines use masking and opacity settings to ensure proper layering and visual effects. The use of conditional checks for masking demonstrates the game's ability to adapt graphics based on object states and interactions. In the era of 6502 assembly programming, such techniques were essential for creating visually rich experiences on hardware with limited graphical capabilities. Mechner's work here laid the groundwork for dynamic rendering techniques that would become standard in later platformers and adventure games."
  - id: "drawa-rendering-a-section"
    line_start: 1125
    line_end: 1155
    title: "Masking and Rendering 'A' Sections"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_pipeline"
    image_url: ""
    image_caption: ""
    content: "The 'drawa' routine focuses on rendering 'A' sections, which are typically the upper parts of objects or structures. It includes logic for masking and blending graphics based on adjacent sections, ensuring seamless transitions between elements. This approach reflects Mechner's attention to detail in creating a visually cohesive environment. By dynamically adjusting rendering based on the object's state and position, the game achieves a level of graphical sophistication that was rare for its time. Techniques like these influenced the development of more advanced graphics pipelines in later games."
  - id: "drawhalf-special-floor-rendering"
    line_start: 1261
    line_end: 1317
    title: "Special Floor Rendering for Climbing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Platform_game"
    image_url: ""
    image_caption: ""
    content: "The 'drawhalf' routine is a specialized version of 'drawfloor,' tailored for scenarios where the player character is climbing. It includes logic to mask and render half-pieces of the floor, ensuring accurate visuals during climbing animations. This routine highlights Mechner's ingenuity in adapting rendering techniques to specific gameplay mechanics. In the late 1980s, such attention to detail was uncommon in platformers, making Prince of Persia a standout title. The game's ability to dynamically adjust visuals based on player actions influenced the design of later cinematic platformers, such as Another World and Flashback."
  - id: "drawspikea-drawspikeb-spike-rendering"
    line_start: 1450
    line_end: 1488
    title: "Animating Spikes with State-Based Logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Video_game_animation"
    image_url: ""
    image_caption: ""
    content: "The 'drawspikea' and 'drawspikeb' routines handle the rendering of spikes, a critical gameplay element in Prince of Persia. These routines use state-based logic to determine whether spikes are extended or retracted, dynamically adjusting their visuals. This approach ensures that the spikes' animations are synchronized with gameplay mechanics, adding tension and challenge to the player's experience. Mechner's use of state-based rendering for environmental hazards was innovative for its time, influencing the design of interactive and dynamic environments in later games."
  - id: "drawexitb-stairs-and-door-rendering"
    line_start: 1613
    line_end: 1696
    title: "Drawing Stairs and Doors: A Cinematic Touch"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The 'drawexitb' routine is responsible for rendering stairs and doors, key elements of Prince of Persia's cinematic platforming experience. It includes logic to dynamically adjust the visuals based on the player's position and the environment's state. This routine exemplifies Mechner's commitment to creating a visually immersive world, where every detail contributes to the game's narrative and atmosphere. By seamlessly integrating environmental elements with gameplay, Prince of Persia set a new standard for platformers, inspiring titles like Tomb Raider and Uncharted."
  - id: "drawgatec-drawgatebf-drawgateb-gate-rendering"
    line_start: 1698
    line_end: 1730
    title: "Rendering Gates: Bottom to Top Precision"
    wikipedia_url: "https://en.wikipedia.org/wiki/Platform_game"
    image_url: ""
    image_caption: ""
    content: "The 'drawgatec,' 'drawgatebf,' and 'drawgateb' routines handle the rendering of gates, a recurring element in Prince of Persia's levels. These routines use a bottom-to-top approach, dynamically adjusting the gate's appearance based on its state and position. The logic includes masking and layering techniques to ensure accurate visuals as the gate rises or falls. Mechner's implementation of gates demonstrates his ability to create interactive and visually engaging environments within the constraints of the Apple II hardware. This approach influenced the design of dynamic level elements in later platformers."
  - id: "drawobjx-object-rendering"
    line_start: 1929
    line_end: 1964
    title: "Rendering Objects: A Modular Approach"
    wikipedia_url: "https://en.wikipedia.org/wiki/Video_game_engine"
    image_url: ""
    image_caption: ""
    content: "The 'drawobjx' routine is a modular rendering system for game objects, allowing different types of objects to be drawn based on their type and state. This routine includes logic to handle various object types, such as the player character, enemies, and interactive items. Mechner's modular approach to object rendering reflects his foresight in creating reusable and adaptable systems, a concept that would later become central to game engine design. By organizing rendering logic into distinct routines, Prince of Persia paved the way for more sophisticated object management systems in modern games."
  - id: "drawff-animation-layering"
    line_start: 1966
    line_end: 2027
    title: "How Prince of Persia Layers Animation Frames"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "The subroutine 'DrawFF' is responsible for layering animation frames to create the illusion of smooth motion. It manipulates variables such as 'FCharFace', 'FCharImage', and 'FCharY' to determine the character's position and appearance. The code uses a series of operations to adjust coordinates (e.g., subtracting or adding offsets) and applies masks to control opacity and layering effects. The 'addmid' function is called multiple times to integrate these layers into the final rendered frame. In 1989, this approach was cutting-edge for the Apple II, a machine with limited graphical capabilities. Jordan Mechner used rotoscoping to trace live-action footage of his brother performing the game's moves, translating them into pixel-perfect animations. This subroutine ensures that these animations are displayed correctly, even within the constraints of the 6502 processor and the Apple II's memory limitations. The layering technique seen here influenced later games that sought to achieve cinematic realism. Developers studying Prince of Persia adopted similar methods for sprite manipulation and layering, particularly in games like Flashback (1992) and Another World (1991). These techniques also laid the groundwork for modern 2D animation engines, where layering and opacity are fundamental."
  - id: "getobjid-object-identification"
    line_start: 2029
    line_end: 2043
    title: "Identifying Objects on the Screen"
    wikipedia_url: "https://en.wikipedia.org/wiki/Finite-state_machine"
    image_url: ""
    image_caption: ""
    content: "The 'getobjid' subroutine retrieves the identifier of an object on the screen based on its blueprint and state. It checks the current screen number ('SCRNUM') and branches accordingly. If the screen is null, it skips further processing since no objects exist there. This routine reflects the game's use of finite state machines to manage object interactions. Each object has a unique identifier and state, allowing the game to dynamically adjust behaviors based on player actions or environmental changes. For example, pressure plates and gates change state when activated, which is handled by subsequent routines. This modular approach to object management became a staple in game development, influencing titles like Super Mario Bros. and later platformers. By separating object identification from state handling, Mechner's code demonstrates an early example of clean, maintainable design in assembly language."
  - id: "getobjid1-pressplate-handling"
    line_start: 2045
    line_end: 2098
    title: "Handling Pressplates and Their States"
    wikipedia_url: "https://en.wikipedia.org/wiki/Finite-state_machine"
    image_url: ""
    image_caption: ""
    content: "The 'getobjid1' subroutine expands on object identification by handling specific object types, such as pressplates and upressplates. It uses bitwise operations and conditional branches to determine whether a plate is depressed or raised and adjusts its state accordingly. In the late 1980s, game developers often faced challenges in simulating interactive environments with limited hardware. Mechner's solution here is efficient, using minimal instructions to handle complex interactions. The use of 'LINKMAP' and bit masking reflects a deep understanding of the Apple II's memory architecture. This technique influenced the design of interactive objects in later games, such as The Legend of Zelda and Metroid, where object states are integral to gameplay. The modular handling of states seen here also parallels modern game engines' use of state machines for object behavior."
  - id: "sortlist-object-sorting-algorithm"
    line_start: 2129
    line_end: 2172
    title: "Sorting Objects for Back-to-Front Rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Painter%27s_algorithm"
    image_url: ""
    image_caption: ""
    content: "The 'sortlist' subroutine sorts objects in the game world into back-to-front order, ensuring correct rendering of overlapping sprites. It uses a bubble sort algorithm, repeatedly comparing adjacent objects and swapping them if necessary. The 'switches' variable tracks whether any swaps were made during a pass, determining whether another pass is needed. Sorting objects for rendering was a common challenge in the era of 2D graphics. The Apple II lacked hardware support for depth sorting, so developers had to implement software solutions. Mechner's choice of bubble sort reflects the constraints of the 6502 processor, where simplicity often outweighed efficiency. This approach is an early example of the painter's algorithm, a concept that remains relevant in computer graphics today. While modern systems use more sophisticated sorting techniques, the principles established here influenced the development of rendering pipelines in game engines like Unity and Unreal."
  - id: "compare-depth-checking"
    line_start: 2174
    line_end: 2206
    title: "Depth Checking for Object Sorting"
    wikipedia_url: "https://en.wikipedia.org/wiki/Z-buffering"
    image_url: ""
    image_caption: ""
    content: "The 'compare' subroutine determines the relative depth of two objects, deciding whether they should be swapped during sorting. It compares the vertical positions ('objY') of the objects and prioritizes enemies ('TypeShad') to always appear in front. Depth checking was a critical part of rendering in 2D games, where overlapping sprites could create visual confusion. Mechner's implementation ensures that gameplay-critical objects, like enemies, are always visible to the player. This prioritization reflects the game's cinematic design, emphasizing clarity and drama. The principles of depth checking seen here evolved into more advanced techniques like Z-buffering, used in 3D graphics to handle occlusion. While the specifics differ, the underlying goal of ensuring correct visual representation remains unchanged."
  - id: "getinitobj1-initial-object-states"
    line_start: 2221
    line_end: 2249
    title: "Setting Initial States for Objects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Finite-state_machine"
    image_url: ""
    image_caption: ""
    content: "The 'getinitobj1' subroutine initializes the state of objects based on their type and blueprint specifications. It handles gates, loose floors, and flasks, using bitwise operations and conditional branches to set their initial conditions. This routine highlights the game's use of predefined settings to create a consistent and interactive world. By defining initial states, Mechner ensures that objects behave predictably, allowing players to intuitively interact with them. The use of compact bitwise operations reflects the constraints of the Apple II's memory and processing power. This approach influenced later games with complex environments, such as SimCity and Civilization, where initial states play a crucial role in gameplay. The modular design seen here also parallels modern object-oriented programming, where objects are initialized with specific properties."
  - id: "mbsub-buffer-merging"
    line_start: 2251
    line_end: 2261
    title: "Merging Buffers for Final Rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The 'mbsub' subroutine merges multiple buffers ('redbuf', 'floorbuf', 'halfbuf', 'fredbuf', 'wipebuf') to create the final rendered frame. By combining these layers, the game achieves a cohesive visual output. Buffer merging was a common technique in the era of limited graphical hardware. The Apple II lacked dedicated graphics processors, so developers had to manually combine layers to produce the final image. Mechner's implementation here is efficient, using the 'ora' instruction to overlay buffers. This technique is an early precursor to double buffering, a standard practice in modern graphics programming. By ensuring smooth transitions between frames, it paved the way for the fluid animations seen in later games like Sonic the Hedgehog and Rayman."

---

```asm
* frameadv
EditorDisk = 0 ;1 = dunj, 2 = palace
org = $1290
 lst off
 tr on
*-------------------------------
 org org

 jmp SURE
 jmp FAST
 jmp GETINITOBJ

*-------------------------------
 lst
 put eq
 lst
 put gameeq
 lst off
 put bgdata
 lst off

initsettings
 db gmaxval,gminval

 dum locals
index ds 1
rowno ds 1
colno ds 1
yindex ds 1
objid ds 1
state ds 1
Ay ds 1
Dy ds 1
gateposn ds 1
gatebot ds 1
xsave ds 1
blockxco ds 1
switches ds 1
obj1 ds 1
obj2 ds 1
blockthr ds 1
 dend

*-------------------------------
*
*  Draw entire 10 x 3 screen from scratch
*
*-------------------------------
SURE
 lda #1
 sta genCLS ;clear screen

 jsr setback ;draw on bg plane

 jsr getprev ;get 3 rightmost blocks of screen to left

 lda SCRNUM
 jsr calcblue ;get blueprint base addr

*  Draw 3 rows of 10 blocks (L-R, T-B)

 ldy #2
:row sty rowno ;0 = top row, 2 = bottom row

 lda BlockBot+1,y
 sta Dy ;get Y-coord for bottom of D-section
 sec
 sbc #3
 sta Ay ;& A-section

 lda Mult10,y
 sta yindex ;block # (0-29)

 lda PREV,y
 sta PRECED
 lda sprev,y
 sta spreced ;get objid & state of preceding block

 jsr getbelow ;get 10 topmost blocks of screen below

 lda #0
 sta colno ;0 = leftmost column, 9 = rightmost
:loop asl
 asl
 sta XCO
 sta blockxco ;get X-coord for A-section

 ldy yindex
 jsr getobjid
 sta objid ;get object id# of current block

 jsr RedBlockSure ;Redraw entire block

 lda objid
 sta PRECED
 lda state
 sta spreced ;Move on to next block

 inc yindex
 inc colno

 lda colno
 cmp #10
 bcc :loop ;...until we've done 10 blocks

:nextln ldy rowno
 beq :done
 dey
 jmp :row ;...and 3 rows

* Now draw bottom row of screen above (D-sections only)

:done ldy #2 ;bottom row of scrn above
 sty rowno

 lda #2
 sta Dy
 lda #-1
 sta Ay ;get screen Y-coords

 lda Mult10,y
 sta yindex

 lda #0
 sta PRECED

 lda scrnBelow
 pha
 lda scrnBelowL
 pha ;save current values on stack

 lda SCRNUM
 sta scrnBelow
 lda scrnLeft
 sta scrnBelowL ;& pretend we're on screen above

* Draw 10 blocks, L-R

 jsr getbelow

 lda scrnAbove
 jsr calcblue

 lda #0
 sta colno
:dloop
 asl
 asl
 sta XCO
 sta blockxco

 lda scrnAbove
 bne :1
 lda #floor ;If screen above is null screen,
 bne :2 ;draw a row of solid floorpieces

:1 ldy yindex
 jsr getobjid1
:2 sta objid

 jsr RedDSure ;Draw D-section

 lda objid
 sta PRECED
 lda state
 sta spreced

 inc yindex
 inc colno

 lda colno
 cmp #10
 bcc :dloop

 pla ;Restore original screen values
 sta scrnBelowL
 pla
 sta scrnBelow
]rts rts

*-------------------------------
*
*  Fast screen redraw
*
*  Same general structure as SURE, but redraws only those
*  blocks specified by redraw buffers.
*
*-------------------------------
FAST
 jsr getprev

 lda SCRNUM
 jsr calcblue

 lda #0
 ldy #20
 jsr metbufs3 ;If strength meter is in danger of
 sta redkidmeter ;being overwritten, mark it for redraw

 lda #0
 ldy #28
 jsr metbufs2
 sta redoppmeter ;opponent meter too

 lda #30
 sta yindex
 jsr drawobjs ;Draw o.s. characters first

*  Draw 3 rows of 10 blocks (L-R, T-B)

 ldy #2
:row sty rowno

 lda BlockBot+1,y
 sta Dy
 sec
 sbc #3
 sta Ay

 lda Mult10,y
 sta yindex

 lda PREV,y
 sta PRECED
 lda sprev,y
 sta spreced

 jsr getbelow

 lda #0
 sta colno

:loop asl
 asl
 sta XCO
 sta blockxco

 ldy yindex
 jsr getobjid
 sta objid

 jsr RedBlockFast

 lda objid
 sta PRECED
 lda state
 sta spreced

 inc yindex
 inc colno

 lda colno
 cmp #10
 bcs :nextln
 jmp :loop

:nextln ldy rowno
 beq :cont
 dey
 jmp :row

* Now draw bottom row of screen above (D-sections only)

:cont jsr setback

 ldy #2
 sty rowno

 lda #2
 sta Dy
 lda #-1
 sta Ay

 lda Mult10,y
 sta yindex

 lda #0
 sta PRECED

 lda scrnBelow
 pha
 lda scrnBelowL
 pha

 lda SCRNUM
 sta scrnBelow
 lda scrnLeft
 sta scrnBelowL

 jsr getbelow

 lda scrnAbove
 beq :done
 jsr calcblue

 lda #0
 sta colno
:dloop
 asl
 asl
 sta blockxco
 sta XCO

 ldy yindex
 jsr getobjid1
 sta objid

 jsr RedDFast

 lda objid
 sta PRECED
 lda state
 sta spreced

 inc yindex
 inc colno

 lda colno
 cmp #10
 bcc :dloop

:done
 pla
 sta scrnBelowL
 pla
 sta scrnBelow

* Now draw comix (impact stars) & strength meters

 lda #$ff
 sta yindex
 jsr drawobjs ;draw comix (index = -1)

 do EditorDisk
 lda inbuilder
 bne ]rts
 fin

 jmp updatemeters

*-------------------------------
*
*  Redraw entire block
*
*-------------------------------
RedBlockSure
 jsr drawc ;C-section of piece below & to left
 jsr drawmc

 jsr drawb ;B-section of piece to left
 jsr drawmb

 jsr drawd ;D-section
 jsr drawmd

 jsr drawa ;A-section
 jsr drawma

 jmp drawfrnt ;A-section frontpiece
;(Note: This is necessary in case we do a
;layersave before we get to f.g. plane)

*-------------------------------
*
* Redraw entire D-section
*
*-------------------------------
RedDSure
 jsr drawc
 jsr drawmc
 jsr drawb
 jsr drawd
 jsr drawmd
 jmp drawfrnt

*-------------------------------
*
*  Partial block redraw (as specified by redraw buffers)
*
*-------------------------------
RedBlockFast
 lda wipebuf,y ;is wipebuf marked?
 beq :skipwipe ;no--skip it
 sec
 sbc #1
 sta wipebuf,y ;decrement wipebuf

 jsr wipesq ;& wipe this block!

 ldy yindex

:skipwipe
 lda redbuf,y
 beq :skipred
 sec
 sbc #1
 sta redbuf,y

 jsr setback
 jsr RedBlockSure

 ldy yindex
 bpl :skipmove

:skipred
 lda movebuf,y
 beq :skipmove
 sec
 sbc #1
 sta movebuf,y

 jsr setback
 jsr drawmc
 jsr drawmb
 jsr drawma

 ldy yindex

:skipmove
 lda floorbuf,y
 beq :skipfloor
 sec
 sbc #1
 sta floorbuf,y

 jsr setmid
 jsr drawfloor

 ldy yindex
 bpl :skiphalf

:skipfloor
 lda halfbuf,y
 beq :skiphalf
 sec
 sbc #1
 sta halfbuf,y

 jsr setmid
 jsr drawhalf

 ldy yindex

:skiphalf
 lda objbuf,y
 beq :skipobj

 lda #0
 sta objbuf,y

 jsr drawobjs ;draw all objects in this block

 lda blockxco
 sta XCO

 ldy yindex

:skipobj
 lda fredbuf,y
 beq :skipfred
 sec
 sbc #1
 sta fredbuf,y

 jsr drawfrnt

 ldy yindex

:skipfred
]rts rts

*-------------------------------
*
*  Partial D-section redraw
*
*-------------------------------
RedDFast
 ldy colno
 lda topbuf,y ;is topbuf marked?
 beq :skip ;no--skip it
 sec
 sbc #1
 sta topbuf,y

 jsr wiped
 jsr drawc
 jsr drawmc
 jsr drawb
 jsr redrawd ;(both bg and fg)
 jsr drawmd
 jsr drawfrnt
:skip
]rts rts

*-------------------------------
*
*  Draw objects
*
*  Draw object/s with index # = yindex
*  (Add appropriate images to mid list)
*
*-------------------------------
drawobjs

* Go through obj list looking for objINDX = yindex

 lda objX
 beq :rts

 ldy #0 ;y = sort list index
 ldx #1 ;x = object list index

:loop lda objINDX,x
 cmp yindex
 bne :next
;Found a match--add object to sort list
 txa
 iny
 sta sortX,y

:next inx
 cpx objX
 bcc :loop
 beq :loop

 cpy #0
 beq :rts
 sty sortX ;# of objects in sort list

* Sort them into back-to-front order

 jsr sortlist

* Transfer sorted objects from obj list to mid list

 ldx #1
:loop2
 stx xsave

 lda sortX,x
 tax ;obj list index

 jsr drawobjx ;draw object #x

 ldx xsave
 inx
 cpx sortX
 bcc :loop2
 beq :loop2
;Done
:rts rts

*-------------------------------
*
*  Get objids & states of 3 rightmost blocks
*  of left-neighboring screen
*
*  Out: PREV/sprev [0-2]
*
*-------------------------------
getprev lda SCRNUM
 beq :null

 lda scrnLeft
 beq :blackscrn

:cont jsr calcblue ;screen to left

 ldy #9
 jsr getobjid1
 sta PREV
 lda state
 sta sprev

 ldy #19
 jsr getobjid1
 sta PREV+1
 lda state
 sta sprev+1

 ldy #29
 jsr getobjid1
 sta PREV+2
 lda state
 sta sprev+2

 rts

:null ;this scrn is null screen
 lda scrnLeft
 bne :cont

:blackscrn ;screen to left is null scrn
 lda #block
 sta PREV
 sta PREV+1
 sta PREV+2
 lda #0
 sta sprev
 sta sprev+1
 sta sprev+2
 rts

*-------------------------------
*
*  Get objids & states of 10 blocks in row below,
*  1 block to left
*
*  In:  rowno
*  Out: BELOW/SBELOW [0-9]
*
*  Use getbelow1 to look at screens other than scrnBelow
*  (In: A = scrn #)
*
*-------------------------------
getbelow
 ldx rowno
 cpx #2
 bcc :onscr

* Looking below bottom row

 lda scrnBelow
 beq :belowblack ;screen below is black
 jsr calcblue

 ldy #8 ;skip rmost
:loop
 jsr getobjid

 sta BELOW+1,y
 lda state
 sta SBELOW+1,y
 dey
 bpl :loop
:cont1
 lda scrnBelowL
 beq :llblack ;screen to l.l. is black
 jsr calcblue

 ldy #9 ;u.r. block
 jsr getobjid
 sta BELOW
 lda state
 sta SBELOW
:done
 lda SCRNUM
 jsr calcblue ;restore SCRNUM
 rts

* "ONSCREEN": Looking below top or middle row

:onscr lda PREV+1,x
 sta BELOW
 lda sprev+1,x
 sta SBELOW

 lda yindex
 clc
 adc #10
 tay

 ldx #1

:loop1 stx xsave
 jsr getobjid
 ldx xsave

 sta BELOW,x

 lda state
 sta SBELOW,x

 iny
 inx
 cpx #10
 bcc :loop1

 rts

* Look below null screen

:belowblack
 lda #1
 tax
:loop2 sta BELOW,x
 inx
 cpx #10
 bcc :loop2
 bcs :cont1

:llblack
 lda level
 cmp #12
 beq :2 ;sorry Lance!
 lda #block
:1 sta BELOW
 bpl :done
:2 lda #space
 bpl :1

*-------------------------------
*
*  L O A D   O B J E C T
*
*  Load vars with object data
*
*  In:  x = object table index
*       X, OFF, Y, IMG, FACE, TYP, CU, CD, CL, CR, TAB
*
*  Out: XCO, OFFSET, YCO, IMAGE, TABLE
*       FCharFace, FCharCU-CD-CL-CR
*       A = objTYP
*
*-------------------------------
loadobj
 lda objX,x
 sta FCharX
 sta XCO

 lda objOFF,x
 sta OFFSET

 lda objY,x
 sta FCharY
 sta YCO

 lda objIMG,x
 sta IMAGE

 lda objTAB,x
 sta TABLE

 lda objFACE,x
 sta FCharFace

 lda objCU,x
 sta FCharCU
 lda objCD,x
 sta FCharCD
 lda objCL,x
 sta FCharCL
 lda objCR,x
 sta FCharCR

 lda objTYP,x
]rts rts

*-------------------------------
*
*  D R A W   F R O N T
*
*-------------------------------
drawfrnt
 ldx PRECED
 cpx #gate
 bne :a
 jsr DrawGateBF? ;special case

:a ldx objid
 cpx #slicer
 bne :11
 jmp drawslicerf
:11 cpx #flask
 bne :1
 lda state
 and #%11100000
 cmp #%10100000 ;5
 beq :1
 cmp #%01000000 ;2
 bcc :1
 lda #specialflask
 bne :12

:1 ldx objid
 lda fronti,x
 beq ]rts
:12 sta IMAGE

 lda Ay
 clc
 adc fronty,x
 sta YCO

 lda blockxco
 clc
 adc frontx,x
 sta XCO

 cpx #archtop2
 bcs :sta

 do EditorDisk
 lda #EditorDisk
 cmp #2
 beq :ndunj
 fin

 lda BGset1
 cmp #1 ;pal
 beq :ndunj

 cpx #posts
 beq :sta ;for dungeon bg set
:ndunj cpx #block
 beq :block

 jmp maddfore

* Special handling for block

:block ldy state
 cpy #numblox
 bcc :2
 ldy #0
:2 lda blockfr,y
 sta IMAGE

* Pieces that go to byte boundaries can be STA'd w/o masking

:sta ldx #sta
 stx OPACITY
 jmp addfore

*-------------------------------
* Draw Gate B Front?
* (only if kid is to the left of bars)
*-------------------------------
DrawGateBF?
 lda rowno
 cmp KidBlockY
 bne ]rts

 ldx colno
 dex
 cpx KidBlockX ;is kid in gate block?
 bne ]rts
 lda scrnRight
 cmp KidScrn
 beq ]rts

 jmp drawgatebf ;draw gate bars over char

*-------------------------------
*
*  D R A W   M O V A B L E   ' B '
*
*-------------------------------
drawmb
 lda PRECED

 cmp #gate ;check for special cases
 bne :1
 jmp drawgateb ;draw B-section of moving gate

:1 cmp #spikes
 bne :2
 jmp drawspikeb

:2 cmp #loose
 bne :3
 jmp drawlooseb

:3 cmp #torch
 bne :4
 jmp drawtorchb
:4
:5 cmp #exit
 bne :6
 jmp drawexitb

:6
]rts rts

*-------------------------------
*
*  D R A W  M O V A B L E  ' C '
*
*-------------------------------
drawmc
 lda objid ;is there a piece here?
 cmp #space
 beq :ok
 cmp #panelwof
 beq :ok
 cmp #pillartop
 beq :ok

 bne ]rts ;if yes, its A-section will cover up
;the C-section of the piece below
:ok
 ldx colno
 lda BELOW,x ;objid of piece below & to left

 cmp #gate
 bne ]rts

 ;That piece is a gate--
 jmp drawgatec ;special case (movable c)

*-------------------------------
*
*  Draw C-section (if visible)
*
*-------------------------------
drawc
 jsr checkc
 bcc ]rts
 jsr dodrawc ;OR C-section of piece below & to left
 jmp domaskb ;Mask B-section of piece to left

*-------------------------------
*
*  Return cs if C-section is visible, cc if hidden
*
*-------------------------------
checkc
 lda objid ;Does this space contain solid floorpiece?
 beq :vis
 cmp #pillartop
 beq :vis
 cmp #panelwof
 beq :vis
 cmp #archtop1
 bcs :vis
 bcc ]rts ;C-section is hidden
:vis sec ;C-section is visible
]rts rts

*-------------------------------
*
*  Draw C-section of piece below & to left
*
*-------------------------------
dodrawc
 ldx colno
 lda BELOW,x ;objid of piece below & to left
 tax
 cpx #block
 beq :block
 lda piecec,x
 beq ]rts ;piece has no c-section
 cmp #panelc0
 beq :panel ;special panel handling
:cont sta IMAGE
 lda blockxco
 sta XCO
 lda Dy
 sta YCO
 lda #ora
 sta OPACITY
 jmp add

* Special panel handling

:panel ldx colno
 lda SBELOW,x
 tay
 cpy #numpans ;# of different panels
 bcs ]rts
 lda panelc,y
 bne :cont
 rts

:block ldx colno
 lda SBELOW,x
 tay
 cpy #numblox
 bcc :1
 ldy #0
:1 lda blockc,y
 bne :cont
]rts rts

*-------------------------------
*
*  Mask B-section of piece to left
*
*-------------------------------
domaskb
 ldx PRECED
 lda maskb,x
 beq ]rts
 sta IMAGE

 lda Dy
 sta YCO
 lda #and
 sta OPACITY
 jmp add

*-------------------------------
*
*  Draw B-section of piece to left
*
*-------------------------------
drawb
 lda objid
 cmp #block
 beq ]rts ;B-section hidden by solid block

 ldx PRECED
 cpx #space
 beq :space
 cpx #floor
 beq :floor
 cpx #block
 beq :block
 lda pieceb,x
 beq :stripe
 cmp #panelb0
 beq :panel ;special panel handling

* draw regular B-section

 jsr :cont1

* Add stripe (palace bg set only)

:stripe do EditorDisk
 lda #EditorDisk
 cmp #2
 beq :stripe
 fin

 lda BGset1
 cmp #1 ;pal
 bne ]rts

:str1 ldx PRECED
 lda bstripe,x
 beq ]rts
 sta IMAGE
 lda Ay
 sec
 sbc #32
 jmp :cont2

* Special panel handling

:panel ldy spreced
 cpy #numpans
 bcs ]rts
 lda panelb,y
 bne :cont1
]rts rts

:block ldy spreced
 cpy #numblox
 bcc :1
 ldy #0
:1 lda blockb,y
 bne :cont1

:floor ldy spreced
 cpy #numbpans+1
 bcc :3
 ldy #0
:3 lda floorb,y
 beq ]rts
 sta IMAGE
 lda floorby,y
 jmp :cont

:space ldy spreced
 cpy #numbpans+1
 bcs ]rts
 lda spaceb,y
 beq ]rts
 sta IMAGE
 lda spaceby,y
 jmp :cont

* Draw regular B-section

:cont1 sta IMAGE
 lda pieceby,x
:cont clc
 adc Ay
:cont2 sta YCO
 lda blockxco
 sta XCO
 lda #ora
 sta OPACITY
 jmp add

*-------------------------------
*
*  Draw D-section
*
*-------------------------------
redrawd jsr drawd
 beq ]rts
 jmp addfore

drawd lda #sta
 sta OPACITY
 ldx objid
 cpx #block
 beq :block
 cpx #panelwof ;Do we need to mask this D-section?
 bne :cont ;no
:mask lda #ora
 sta OPACITY
:cont lda pieced,x
 beq ]rts
:cont1 sta IMAGE
 lda blockxco
 sta XCO
 lda Dy
 sta YCO
 jsr add
 lda #$ff
]rts rts

* Block handling

:block ldy state
 cpy #numblox
 bcc :1
 ldy #0
:1 lda blockd,y
 bne :cont1

*-------------------------------
*
*  D R A W   ' A '
*
*  (1) If piece to left has intrusive B-section (e.g., panel):
*      MASK A-section
*  (2) OR A-section
*
*-------------------------------
drawa
 lda PRECED
 cmp #archtop1
 beq :special
 cmp #panelwif
 beq :needmask
 cmp #panelwof
 beq :needmask
 cmp #pillartop
 beq :needmask
 cmp #block
 bne :nomask

:needmask jsr addamask

:nomask jmp adda

:special ldx objid
 cpx #panelwof
 bne :nomask
 lda #archpanel ;arch ends to L of panel
 jmp adda1

*-------------------------------
addmidezfast
 lda #UseFastlay
 jmp addmidez
add
]add jmp addback ;self-mod

setback lda #addback
 sta ]add+1
 lda #>addback
 sta ]add+2
 rts

setmid lda #addmidezfast
 sta ]add+1
 lda #>addmidezfast
 sta ]add+2
]rts rts

maddfore ldx #mask
 stx OPACITY
 jsr addfore
 ldx #ora
 stx OPACITY
 jmp addfore

addamask ldx objid
 lda maska,x
 beq ]rts
 sta IMAGE
 lda blockxco
 sta XCO
 lda Ay
 sta YCO
 lda #and
 sta OPACITY
 jmp add

adda ldx objid
 jsr getpiecea
 beq ]rts ;nothing here
adda1 sta IMAGE
 lda blockxco
 sta XCO
 lda Ay
 clc
 adc pieceay,x
 sta YCO
 lda #ora
 sta OPACITY
 jmp add

*-------------------------------
*
*  D R A W   M O V A B L E   ' A '
*
*-------------------------------
drawma
 lda objid
 cmp #spikes
 bne :2
 jmp drawspikea

:2 cmp #slicer
 bne :3
 jmp drawslicera

:3 cmp #flask
 bne :4
 jmp drawflaska

:4 cmp #sword
 bne :5
 jmp drawsworda
:5
]rts rts

*-------------------------------
*
* D R A W   M O V A B L E  ' D '
*
*-------------------------------
drawmd
 lda objid
 cmp #loose
 bne :1
 jmp drawloosed

:1
]rts rts
*-------------------------------
*
*  D R A W   F L O O R
*
*-------------------------------
drawfloor
 lda PRECED ;empty space to left?
 bne ]rts
]drawflr
 jsr addamask
 jsr adda
 jsr drawma
 jmp drawd

*-------------------------------
*
*  D R A W   H A L F
*
*  Special version of "drawfloor" for climbup
*
*-------------------------------
drawhalf
 lda PRECED
 bne ]rts

* empty space to left -- mask & draw "A" section

 ldx objid
 cpx #floor
 beq :flr
 cpx #torch
 beq :flr
 cpx #dpressplate
 beq :flr
 cpx #exit
 beq :flr

 lda BGset1
 cmp #1 ;pal?
 bne ]drawflr ;if there's no halfpiece for this objid,
;redraw full floorpiece
 cpx #posts
 beq :post
 cpx #archbot
 bne ]drawflr

:post jsr :sub
 lda #CUpost
 bne :cont

:flr jsr :sub
 lda #CUpiece
:cont sta IMAGE
 lda #ora
 sta OPACITY
 jsr add
 jmp drawd

:sub lda #CUmask
 sta IMAGE
 lda blockxco
 sta XCO
 lda Ay
 sta YCO
 ldx objid
 cpx #dpressplate
 bne :1
 inc YCO ;quick trick for dpressplate
:1 lda #and
 sta OPACITY
 jmp add

*-------------------------------
*
*  S H O R T   W I P E
*
*  In: Y = buffer index
*
*-------------------------------
wipesq
 lda whitebuf,y
]wipe sta height

 lda #4
 sta width

 lda blockxco
 sta XCO

 lda Dy
 sta YCO

 lda #$80
 jmp addwipe
]rts rts

*-------------------------------
*
* Wipe D-section
*
*-------------------------------
wiped
 lda objid
 cmp #pillartop
 beq ]rts
 cmp #panelwif
 beq ]rts
 cmp #panelwof
 beq ]rts
 cmp #block
 beq ]rts

 lda #3
 jmp ]wipe

*-------------------------------
*  D R A W  L O O S E  F L O O R  " D "
*-------------------------------
drawloosed
 lda state
 jsr getloosey

 lda loosed,y
 beq :rts
 sta IMAGE

 lda blockxco
 sta XCO
 lda Dy
 sta YCO

 lda #sta
 sta OPACITY

 jmp add
]rts
:rts rts

*-------------------------------
*  D R A W  L O O S E  F L O O R  " B "
*-------------------------------
drawlooseb
 lda spreced
 jsr getloosey

 lda #looseb
 sta IMAGE

 lda Ay
 clc
 adc looseby,y
 sta YCO

 lda #ora
 sta OPACITY

 jmp add

*-------------------------------
*
* Get piece "A"
*
* In: state; X = objid
* Out: A = A-section image #
*
*-------------------------------
getpiecea
 cpx #loose
 beq :loose

 lda piecea,x
]rts rts

:loose lda state
 jsr getloosey
 lda loosea,y
 rts

*-------------------------------
*
* Get loose floor index
*
* In: A = state
* Out: Y = index
*
*-------------------------------
getloosey
 do EditorDisk
 ldy inbuilder
 beq :1
 ldy #1
 rts
 fin

:1 tay ;state
 bpl ]rts
 and #$7f
 cmp #Ffalling+1
 bcc :ok
 lda #1
:ok tay
]rts rts

*-------------------------------
*  Draw spikes A
*-------------------------------
drawspikea
 ldx state
 bpl :1 ;hibit clear --> frame #
 ldx #spikeExt ;hibit set --> spikes extended
:1 lda spikea,x
 beq ]rts
 sta IMAGE
 lda blockxco
 sta XCO
 lda Ay
 sec
 sbc #1
 sta YCO
 lda #ora
 sta OPACITY
 jmp add

*-------------------------------
*  Draw spikes B
*-------------------------------
drawspikeb
 ldx spreced
 bpl :1 ;hibit clear --> frame #
 ldx #spikeExt ;hibit set --> spikes extended
:1 lda spikeb,x
 beq ]rts
 sta IMAGE
 lda blockxco
 sta XCO
 lda Ay
 sec
 sbc #1
 sta YCO
 lda #ora
 sta OPACITY
 jmp add

*-------------------------------
*  Draw torch B (flame)
*-------------------------------
drawtorchb
 do EditorDisk
 lda inbuilder
 bne ]rts
 fin

 lda blockxco
 beq ]rts ;no flame on leftmost torch
 sta XCO
 lda Ay
 sta YCO
 ldx spreced
 jsr setupflame ;in gamebg
 jmp addback
]rts rts

*-------------------------------
*  Draw flask A (bubbles)
*-------------------------------
drawflaska
 do EditorDisk
 lda inbuilder
 bne ]rts
 fin

 lda blockxco
 sta XCO
 lda Ay
 sta YCO
 ldx state
 jsr setupflask
 lda #UseLay
 jmp addmidezo

*-------------------------------
*  Draw sword A
*-------------------------------
drawsworda
 lda #swordgleam0
 ldx state
 cpx #1
 bne :0
 lda #swordgleam1
:0 sta IMAGE
 lda blockxco
 sta XCO
 lda Ay
 sta YCO
 lda #sta
 sta OPACITY
 jmp add

*-------------------------------
*  Draw slicer A
*-------------------------------
drawslicera
 lda state
 and #$7f
 tax
 cpx #slicerRet
 bcc :1
 ldx #slicerRet ;fully retracted
:1 lda slicerseq,x
 tax
 dex
 stx xsave

 lda blockxco
 sta XCO
 lda Ay
 sta YCO
 lda state ;hibit set = smeared
 bpl :clean
 lda slicerbot2,x
 bne :3
:clean lda slicerbot,x
 beq :2
:3 sta IMAGE
 lda #ora
 sta OPACITY
 jsr add
 ldx xsave

:2 lda slicertop,x
 beq ]rts
 sta IMAGE
 lda Ay
 sec
 sbc slicergap,x
 sta YCO
 lda #ora
 sta OPACITY
 jmp add

*-------------------------------
* Draw slicer front
*-------------------------------
drawslicerf
 lda state
 and #$7f
 tax
 cpx #slicerRet
 bcc :1
 ldx #slicerRet ;fully retracted
:1 lda slicerseq,x
 tax
 dex
 stx xsave

 lda blockxco
 sta XCO
 lda Ay
 sta YCO
 lda slicerfrnt,x
 beq :2
 sta IMAGE
 jmp maddfore
:2
]rts rts

*-------------------------------
* Draw exit "b" (stairs)
*-------------------------------
drawexitb
 lda #stairs
 sta IMAGE

 lda Ay
 sec
 sbc #12
 sta YCO

 lda blockxco
 cmp #36
 bcs ]rts ;can't protrude off R
 clc
 adc #1
 sta XCO

 lda #sta
 sta OPACITY

 lda SCRNUM
 cmp KidStartScrn
 beq :nostairs ;assume it's an entrance
 jsr add
:nostairs

* draw door, bottom to top

 lda Dy
 sec
 sbc #67
 cmp #192
 bcs ]rts
 sta blockthr ;topmost usable line

 lda spreced
 lsr
 lsr
 sta gateposn ;gateposn := spreced/4

 lda Ay
 sec
 sbc #14
 sbc gateposn
 sta doortop ;for CROPCHAR
:loop sta YCO

 lda #doormask
 sta IMAGE
 lda #and
 sta OPACITY
 jsr add

 lda #door
 sta IMAGE
 lda #ora
 sta OPACITY
 jsr add

 lda YCO
 sec
 sbc #4
 cmp blockthr
 bcs :loop

* repair top

 lda Ay
 sec
 sbc #64 ;Technically part of C-section
 cmp #192 ;but who cares
 bcs ]rts

 sta YCO

 lda #toprepair
 sta IMAGE
 lda #sta
 sta OPACITY
 jmp add

]rts rts

*-------------------------------
*  D R A W   G A T E   " C "
*-------------------------------
drawgatec
 lda Dy
 sta YCO
 lda #gatecmask
 sta IMAGE
 lda #and
 sta OPACITY
 jsr add ;mask out triangular area

 ldx colno
 lda SBELOW,x ;gate state
 cmp #gmaxval
 bcc :1
 lda #gmaxval
:1 lsr
 lsr
 sta gateposn
 and #$f8
 eor #$ff
 clc
 adc #1
 clc
 adc gateposn
 tay ;Y:= (state/4) mod 8
 lda gate8c,y
 sta IMAGE

 lda #ora
 sta OPACITY
 jmp add

*-------------------------------
*
*  D R A W   G A T E   " B "
*
*  Lay down (STA) the gate in sections, bottom
*  to top.  The bottom piece has two blank lines that
*  erase its trail as the gate rises.
*  Topmost section has 8 separate shapes, 1-8 pixels high.
*
*-------------------------------
setupdgb
 lda Dy
 sec
 sbc #62
 sta blockthr ;topmost line of B-section

 lda spreced
 cmp #gmaxval
 bcc :1
 lda #gmaxval
:1 lsr
 lsr
 clc
 adc #1
 sta gateposn ;gateposn:= state/4 + 1
;(gatebottom height off floor)
 lda Ay
 sec
 sbc gateposn
 sta gatebot ;gatebottom YCO
]rts rts

*-------------------------------
drawgatebf
 jsr setupdgb

* Gate bottom

 lda #ora
 sta OPACITY

 lda gatebot
 sec
 sbc #2
 sta YCO ;no 2 blank lines at bottom

 lda #gatebotORA
 sta IMAGE

 jsr addfore

* Middle pieces

:cont
 lda #gateB1
 sta IMAGE

 lda gatebot
 sec
 sbc #12

:loop sta YCO
 cmp #192
 bcs ]rts

 sec
 sbc #7 ;grill mid piece is 8 lines high--
 bcc :done ;will it stick up out of block area?
 cmp blockthr
 bcc :done
;no, we're still safe--keep going
 jsr addfore

 lda YCO
 sec
 sbc #8
 bne :loop
:done
 ;Skip top piece to save a little time
]rts rts

*-------------------------------
drawgateb
 jsr setupdgb

*  First, draw bottom piece

 clc
 adc #12
 cmp Ay ;over floor/wall boundary?
 bcc :storit

* Bottom piece is partly below floor line -- STA won't work.
* We need to redraw b.g., then OR gate bottom on top.

:orit
 jsr restorebot

 lda gatebot
 sec
 sbc #2
 sta YCO ;no 2 blank lines at bottom

 lda #gatebotORA
 sta IMAGE

 lda #ora
 sta OPACITY

 jsr addback

 jmp :cont

*  Gate is above floor line -- STA it

:storit lda gatebot
 sta YCO

 lda #gatebotSTA
 sta IMAGE

 lda #sta
 sta OPACITY

 jsr addback

*  Next, draw as many middle pieces as we need to make
*  up rest of grill

:cont
 lda #sta
 sta OPACITY

 lda #gateB1
 sta IMAGE

 lda gatebot
 sec
 sbc #12

:loop sta YCO
 cmp #192
 bcs :rts

 sec
 sbc #7 ;grill mid piece is 8 lines high--
 bcc :done ;will it stick up out of block area?
 cmp blockthr
 bcc :done
;no, we're still safe--keep going
 jsr addback

 lda YCO
 sec
 sbc #8
 bne :loop

* now add final piece at top

:done lda YCO
 sec
 sbc blockthr
 clc
 adc #1 ;desired height (0-8 pixels)

 beq :rts
 cmp #9
 bcs :rts

 tay
 lda gate8b-1,y
 sta IMAGE

 jsr addback

:rts rts

*-------------------------------
restorebot
 ldx #gate
 lda pieceb,x
 sta IMAGE
 lda pieceby,x
 clc
 adc Ay
 sta YCO
 lda blockxco
 sta XCO
 lda #sta
 sta OPACITY
 jsr add

 jsr checkc
 bcc :1
 jsr dodrawc
:1 jmp drawa

*-------------------------------
*
*  Draw object #x
*  (Add appropriate images to mid table)
*
*  In: x = object table index
*
*-------------------------------
drawobjx
 jsr loadobj ;Load vars with object data
;A = object type
 cmp #TypeKid
 beq :kid
 cmp #TypeReflect
 bne :1
:kid jmp DrawKid

:1 cmp #TypeShad
 bne :2
 jmp DrawShad

:2 cmp #TypeFF
 bne :3
 jmp DrawFF

:3 cmp #TypeSword
 beq :5
 cmp #TypeComix
 bne :4
:5 jmp DrawSword

:4 cmp #TypeGd
 bne :6
 jmp DrawGuard
:6
]rts rts

*-------------------------------
* Draw Falling Floor
*-------------------------------
DrawFF
 lda #-1 ;normal
 sta FCharFace

 lda IMAGE ;mobframe #
 sta FCharImage ;use as temp store

* A-section

 lda FCharY
 sec
 sbc #3
 sta YCO
 ldx #floor
 lda maska,x
 sta IMAGE
 lda #and
 sta OPACITY
 lda #UseLayrsave
 jsr addmid

 ldx FCharImage
 lda loosea,x
 sta IMAGE
 lda #ora
 sta OPACITY
 lda #UseLay
 jsr addmid

* D-section

 ldx FCharImage
 lda loosed,x
 sta IMAGE
 lda FCharY
 sta YCO
 lda #sta
 sta OPACITY
 lda #UseLayrsave
 jsr addmid

* B-section

 lda FCharX
 clc
 adc #4
 sta XCO

 lda FCharY
 sec
 sbc #4
 sta YCO

 lda #looseb
 sta IMAGE
 lda #ora
 sta OPACITY
 lda #UseLayrsave
 jmp addmid

*-------------------------------
*
*  Get objid & state
*
*  In: BlueType/Spec,Y
*
*  Out: A = objid
*       state = state
*
*  Preserves X & Y
*
*-------------------------------
getobjid
 lda SCRNUM
 beq GOnull ;null scrn has no blueprint

* Use getobjid1 for screen #s other than SCRNUM

getobjid1
 do EditorDisk
 lda inbuilder
 bne getobjbldr
 fin

 lda (BlueSpec),y
 sta state

 lda (BlueType),y
 and #idmask

 cmp #pressplate
 beq :plate

 cmp #upressplate
 beq :upp

 rts

* Handle depressed pressplate

:plate lda state ;LINKLOC index
 tax
 lda LINKMAP,x

 and #%00011111 ;bits 0-4
 cmp #2
 bcc :up

 lda #dpressplate ;plate depressed
 rts

:up lda #pressplate ;plate up
 rts

* Handle depressed upressplate

:upp lda state
 tax
 lda LINKMAP,x
 and #%00011111
 cmp #2
 bcc :up1

 lda #0
 sta state
 lda #floor ;depressed upp looks just like floor
 rts

:up1 lda #upressplate
 rts

* Null screen is black

GOnull
 do EditorDisk
 lda inmenu
 bne getobjbldr
 fin

 lda #space
 rts

*-------------------------------
*
* In builder: BlueSpec contains initial gadget settings
*
*-------------------------------
 do EditorDisk
getobjbldr
 lda (BlueType),y
 and #idmask
 pha
 jsr getinitobj1
 bcs :ok
 lda (BlueSpec),y
:ok sta state
 pla
 rts
 fin

*-------------------------------
*
*  Sort objects in sort list into back-to-front order
*  (Foremost object should be at bottom of list)
*
*-------------------------------
sortlist

:newpass
 lda #0
 sta switches ;no switches yet this pass

 ldx sortX ;start at bottom of list

:loop cpx #1 ;at top of list?
 beq :attop ;yes--pass complated

 stx xsave

 jsr compare ;Is obj[X] in front of obj[X-1]?

 ldx xsave

 bcc :ok ;Yes--continue
;No--switch objects
 lda sortX,x
 pha
 lda sortX-1,x
 sta sortX,x
 pla
 sta sortX-1,x ;switch [X] with [X-1]

:ok dex
 bne :loop ;move up in list

* At top of list--pass completed

:attop
 lda switches ;Any switches this pass?
 bne :newpass ;Yes--do it again

* No switches made--objects are in order

:rts rts

*-------------------------------
*
*  Compare object [xsave] with object [xsave-1]
*
*  If X is IN FRONT OF X-1, or if it doesn't matter, return cc;
*  If X is BEHIND X-1, return cs (switch 'em).
*
*-------------------------------
compare
 lda sortX,x
 sta obj1 ;obj index [X]
 lda sortX-1,x
 sta obj2 ;obj index [X-1]

 ldx obj1
 ldy obj2

 lda objTYP,x
 cmp #TypeShad
 beq :xinfront ;enemy is always in front

 lda objY,x
 cmp objY,y
 beq :same
 bcc :xinfront
 bcs :yinfront

:same
:xinfront clc
 rts

:yinfront sec
 rts

*-------------------------------
*
*  Get initial state of object
*
*  In: BlueType, BlueSpec, Y
*
*  Return cs if it matters, else cc
*
*-------------------------------
GETINITOBJ
 lda (BlueType),y
 and #idmask ;get objid

getinitobj1
 cmp #gate
 beq :okgate
 cmp #loose
 beq :okloose
 cmp #flask
 beq :okflask
 bne :skip ;if it isn't a gadget, leave it alone

:okgate lda (BlueSpec),y ;1=gate up, 2=gate down, etc.
 tax
 lda initsettings-1,x
 sec
 rts

:okloose lda #0 ;loose floor
 rts

:okflask lda (BlueSpec),y
 asl
 asl
 asl
 asl
 asl ;5x
 sec
 rts

:skip clc
]rts rts

*-------------------------------
metbufs3 jsr mbsub
 iny
metbufs2 jsr mbsub
 iny
mbsub ora redbuf,y
 ora floorbuf,y
 ora halfbuf,y
 ora fredbuf,y
 ora wipebuf,y
 rts

*-------------------------------
 lst
 ds 1
 usr $a9,3,$490,*-org
 lst off
```