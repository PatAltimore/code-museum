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
description: "The FRAMEADV.S file from Prince of Persia (1989) contains assembly routines for screen rendering and object management on the Apple II, showcasing innovative techniques for cinematic platforming within severe hardware constraints."

summary:
  - point: "Uses bank-switched memory to fit within 128K"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Routines manage screen redraws with partial and full updates"
    link: "https://en.wikipedia.org/wiki/Double_buffering"
    link_label: "Double Buffering"
  - point: "Object rendering leverages rotoscoped animations"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Optimized for Apple II hardware constraints"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Introduced cinematic platforming techniques"
    link: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    link_label: "Cinematic Platformer"

enhancements:
  - id: "initialize-game-settings"
    line_start: 22
    line_end: 42
    title: "How Prince of Persia Sets Up Its World"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `initsettings` routine initializes key variables and memory locations that define the game state, including object positions, states, and screen layout. This setup ensures the game world is ready for rendering and interaction. In the mid-1980s, memory constraints on the Apple II required careful planning to fit all game logic and data into 128KB, necessitating routines like this to organize data efficiently. Jordan Mechner, working solo on Prince of Persia, had to balance cinematic ambitions with technical limitations, using techniques like rotoscoping to create lifelike animations while optimizing memory usage. This initialization routine laid the groundwork for the game's dynamic screen updates and object handling, influencing later games that adopted similar approaches to memory-efficient world-building."
  - id: "full-screen-redraw"
    line_start: 44
    line_end: 179
    title: "The Routine That Redraws the Entire Screen"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The `SURE` routine performs a full-screen redraw, clearing the screen and drawing all blocks row by row. It calculates positions and retrieves object states for each block, ensuring the visual representation matches the game state. This approach was essential for maintaining the illusion of fluid animation on the Apple II, where hardware limitations made real-time rendering challenging. Mechner's decision to redraw the entire screen reflects the influence of cinematic storytelling, where visual continuity is paramount. The technique of full-screen redraws, combined with partial updates in other routines, became a precursor to modern double-buffering methods used in graphics programming to prevent flickering and tearing."
  - id: "partial-screen-redraw"
    line_start: 189
    line_end: 345
    title: "Redrawing Only What’s Necessary"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The `FAST` routine optimizes screen redraws by updating only the blocks marked for changes in redraw buffers. This selective approach minimizes processing time, crucial for maintaining performance on the Apple II's limited hardware. By combining partial and full redraw techniques, Mechner achieved a balance between visual fidelity and computational efficiency. This method of selective rendering influenced later games and engines, where dynamic updates to specific screen regions became standard practice for performance optimization in real-time graphics."
  - id: "redraw-entire-block"
    line_start: 341
    line_end: 359
    title: "Rebuilding a Block, Pixel by Pixel"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tile-based_video_game"
    image_url: ""
    image_caption: ""
    content: "The `RedBlockSure` routine redraws an entire block, including its background and foreground sections. Blocks are the fundamental units of the game's tile-based design, and this routine ensures each block is visually consistent with its state. Mechner's use of tile-based rendering reflects the influence of earlier games like Super Mario Bros., but with an added focus on cinematic detail. This approach allowed for modular design, where individual blocks could be reused and recombined to create diverse environments. The modularity of tile-based systems remains a cornerstone of game development, enabling efficient level design and rendering."
  - id: "draw-objects"
    line_start: 495
    line_end: 551
    title: "Rendering Characters and Props in Real Time"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "The `drawobjs` routine handles the rendering of objects such as characters and props, sorting them back-to-front to maintain visual layering. Objects are drawn based on their index, with animations derived from rotoscoped footage. Mechner's innovative use of rotoscoping brought unprecedented realism to character movements, setting Prince of Persia apart from other platformers of the era. This technique influenced later games and animation systems, where realistic motion capture and layering became standard for creating immersive experiences."
  - id: "load-object-data"
    line_start: 702
    line_end: 747
    title: "Loading Object Data for Dynamic Worlds"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `loadobj` routine loads data for individual objects, including their position, image, and interaction properties. This modular approach to object management allowed Mechner to create a dynamic world where objects could interact seamlessly. By abstracting object properties into a table-driven system, the game achieved flexibility in level design and behavior. This method of object management influenced later games and engines, where table-driven systems became a common way to handle dynamic entities in complex environments."
  - id: "check-c-section-visibility"
    line_start: 912
    line_end: 928
    title: "Is This Section Visible or Hidden?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tile-based_video_game"
    image_url: ""
    image_caption: ""
    content: "The `checkc` routine determines whether the C-section of a block is visible or hidden, based on its type and state. This visibility check ensures that only relevant sections are rendered, optimizing performance and maintaining visual consistency. Mechner's use of sectional rendering reflects the constraints of the Apple II, where every byte of memory and processor cycle had to be carefully managed. This technique of selective visibility checks influenced later tile-based games, where rendering efficiency became a key consideration in level design."
  - id: "mask-b-section"
    line_start: 975
    line_end: 990
    title: "Masking Sections for Layered Rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The `domaskb` routine masks the B-section of a block to ensure proper layering in the game's visual hierarchy. This masking technique allowed Mechner to achieve cinematic effects, where foreground and background elements interacted dynamically. By leveraging masking and layering, Prince of Persia created a visually rich environment that felt alive and responsive. This approach influenced later games and graphics engines, where layered rendering became a standard technique for creating depth and realism in 2D and 3D environments."
  - id: "drawb-section-rendering"
    line_start: 992
    line_end: 1085
    title: "How 'B-Section' Graphics Were Drawn"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The 'drawb' routine is responsible for rendering the 'B-section' of game objects, which includes background elements and certain sprites. The code checks the object type and applies specific rendering logic based on its attributes, such as whether it is a solid block, floor, or panel. It uses lookup tables like 'pieceb' and 'bstripe' to fetch the correct sprite data. This section also includes special handling for palace backgrounds, adding stripes for aesthetic detail. In the mid-1980s, the Apple II's graphical capabilities were limited, with only 6 colors available in high-resolution mode. Mechner had to carefully design routines like this to maximize visual fidelity while staying within memory constraints. The use of conditional jumps and table-driven rendering allowed him to create a visually rich environment without overloading the hardware. This technique influenced later games, as sprite-based rendering became a standard approach for 2D platformers and cinematic games."
  - id: "redrawd-d-section-rendering"
    line_start: 1087
    line_end: 1094
    title: "Redrawing 'D-Section': A Shortcut"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The 'redrawd' routine is a shortcut that calls 'drawd' to redraw the 'D-section' of objects. This section handles elements like shadows or overlays that require masking or blending. By reusing the 'drawd' logic, Mechner avoided duplicating code, which was critical given the memory constraints of the Apple II. Double-buffering techniques, though not explicitly mentioned, are hinted at in the way these routines manage overlapping graphics. This approach ensured smooth animations and transitions, a hallmark of Prince of Persia's cinematic style. The efficiency of these routines inspired other developers working on constrained systems, leading to more modular and reusable graphics code in future games."
  - id: "drawa-a-section-rendering"
    line_start: 1125
    line_end: 1155
    title: "Masking and Rendering 'A-Section' Graphics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mask_(computing)"
    image_url: ""
    image_caption: ""
    content: "The 'drawa' routine focuses on rendering the 'A-section' of objects, which includes foreground elements like arches and pillars. It checks adjacent pieces to determine if masking is required, ensuring seamless integration with the background. The use of masking ('addamask') and logical operations like OR ('adda') highlights Mechner's attention to detail in creating visually cohesive scenes. Masking was a common technique in assembly programming to handle transparency and layering, especially on systems like the Apple II that lacked dedicated graphics hardware. This routine showcases Mechner's ability to simulate advanced graphical effects using minimal resources, setting a precedent for other developers working on cinematic games."
  - id: "drawhalf-climbup-special-case"
    line_start: 1261
    line_end: 1317
    title: "Special Handling for Climbing Animation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "The 'drawhalf' routine is a specialized version of 'drawfloor,' designed for the climbing animation. It masks and draws only the necessary sections of the floor, ensuring smooth transitions during the character's movement. This routine includes checks for specific object types like torches and exit doors, adapting the rendering logic accordingly. The climbing animation was one of Prince of Persia's standout features, showcasing fluid movement that felt realistic. Mechner's use of rotoscoping to trace his brother's movements was groundbreaking, and routines like 'drawhalf' ensured these animations were seamlessly integrated into the game world. This approach influenced later platformers, which prioritized realistic character movement and interaction with the environment."
  - id: "drawspikea-spike-rendering"
    line_start: 1450
    line_end: 1468
    title: "Animating Spikes: A Deadly Detail"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The 'drawspikea' routine handles the rendering of spikes, a key obstacle in Prince of Persia. It checks the state of the spikes (retracted or extended) and adjusts their position and opacity accordingly. This routine uses logical operations and lookup tables to create dynamic animations that respond to the player's actions. Spikes were not just a visual element but also a gameplay mechanic, requiring precise collision detection and timing. Mechner's implementation ensured that these obstacles felt fair yet challenging, adding to the game's tension. The concept of interactive obstacles influenced later games, where environmental hazards became integral to level design."
  - id: "drawexitb-stairs-and-door-rendering"
    line_start: 1613
    line_end: 1696
    title: "Drawing Stairs and Doors: Cinematic Precision"
    wikipedia_url: "https://en.wikipedia.org/wiki/Level_design"
    image_url: ""
    image_caption: ""
    content: "The 'drawexitb' routine is responsible for rendering stairs and doors, key elements in Prince of Persia's level transitions. It calculates positions dynamically based on screen and object data, ensuring that these elements align perfectly with the environment. The routine includes logic for masking and repairing top sections, reflecting Mechner's meticulous attention to detail. Stairs and doors were not just functional but also cinematic, contributing to the game's immersive atmosphere. This level of precision in rendering influenced the design of later platformers, where environmental elements became integral to storytelling and gameplay."
  - id: "drawgateb-complex-gate-rendering"
    line_start: 1813
    line_end: 1907
    title: "Rendering Rising Gates: A Technical Feat"
    wikipedia_url: "https://en.wikipedia.org/wiki/Scrolling"
    image_url: ""
    image_caption: ""
    content: "The 'drawgateb' routine handles the complex task of rendering rising gates, a dynamic element in Prince of Persia. It calculates the gate's position and height based on its state, ensuring smooth animations as it moves. The routine includes logic for masking, layering, and repairing background sections, showcasing Mechner's ability to simulate advanced graphical effects on the Apple II. Rising gates were a memorable feature, adding to the game's cinematic feel and sense of progression. This technique influenced later games with dynamic environmental elements, pushing the boundaries of what was possible on constrained hardware."
  - id: "drawobjx-dynamic-object-rendering"
    line_start: 1929
    line_end: 1964
    title: "Rendering Dynamic Objects: Kid, Shadow, and More"
    wikipedia_url: "https://en.wikipedia.org/wiki/Object-oriented_programming"
    image_url: ""
    image_caption: ""
    content: "The 'drawobjx' routine is a general-purpose function for rendering dynamic objects like the Kid, Shadow, and guards. It uses the object's type to determine the appropriate rendering logic, calling specialized routines like 'DrawKid' and 'DrawGuard.' This modular approach reflects Mechner's ability to manage complexity in a large assembly program. Dynamic objects were central to Prince of Persia's gameplay, driving the narrative and creating memorable encounters. The modular design of this routine influenced later games, where object-oriented programming became standard practice for managing complex interactions and behaviors."
  - id: "drawff-character-rendering"
    line_start: 1966
    line_end: 2027
    title: "How Prince of Persia Drew Its Characters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "The DrawFF routine is responsible for rendering characters on the screen. It manipulates various parameters such as character position (X and Y coordinates), image opacity, and layering to achieve a visually coherent representation. By breaking the rendering process into sections (A, D, B), Mechner ensures modular handling of different aspects of character drawing, such as masking and overlaying. This approach reflects the constraints of the Apple II hardware, where every pixel and byte of memory had to be meticulously managed. The use of rotoscoping—tracing filmed movements frame by frame—allowed Mechner to achieve fluid animations that were groundbreaking for the time. This technique influenced not only the cinematic platformer genre but also modern motion capture methods used in games like Assassin's Creed and The Last of Us."
  - id: "getobjid-object-identification"
    line_start: 2029
    line_end: 2045
    title: "The Routine That Identifies Objects"
    wikipedia_url: "https://en.wikipedia.org/wiki/State_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The getobjid routine determines the object ID and state based on the current screen number. This is a crucial part of the game's logic, as it ensures that objects behave correctly depending on their context. Mechner's decision to separate this logic into a dedicated routine reflects the modular design principles necessary for managing complexity in assembly programming. By preserving registers X and Y, the routine minimizes side effects, a hallmark of careful low-level programming. This approach laid the groundwork for object-oriented principles in later game engines, where encapsulation and modularity became standard."
  - id: "getobjid1-object-state-handling"
    line_start: 2047
    line_end: 2100
    title: "Handling Object States: Plates and Floors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Finite-state_machine"
    image_url: ""
    image_caption: ""
    content: "The getobjid1 routine expands on object identification by handling specific states like press plates and floors. It uses bitwise operations and conditional branching to determine whether an object is depressed or elevated. This granular control over object states is a precursor to finite-state machines, which are now ubiquitous in game development for managing complex behaviors. Mechner's implementation demonstrates a deep understanding of the Apple II's limitations, using efficient techniques to simulate dynamic environments. The handling of plates influenced later games that relied on environmental interactions, such as Tomb Raider and Uncharted."
  - id: "sortlist-object-sorting"
    line_start: 2135
    line_end: 2181
    title: "Sorting Objects for Cinematic Depth"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bubble_sort"
    image_url: ""
    image_caption: ""
    content: "The sortlist routine organizes objects in back-to-front order, ensuring proper rendering of overlapping elements. This is achieved through a bubble sort algorithm, where objects are repeatedly compared and swapped until the list is sorted. While bubble sort is computationally expensive, its simplicity made it a practical choice for the limited processing power of the Apple II. This technique was essential for creating the game's cinematic feel, where depth and layering played a significant role. The concept of sorting for visual depth influenced later rendering pipelines in 3D engines like Unity and Unreal."
  - id: "compare-object-comparison"
    line_start: 2174
    line_end: 2206
    title: "Comparing Objects for Visual Priority"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_pipeline"
    image_url: ""
    image_caption: ""
    content: "The compare routine evaluates the relative positions of two objects to determine their rendering order. It checks attributes like type and Y-coordinate, prioritizing certain objects (e.g., enemies) to appear in front. This low-level manipulation of rendering priorities was a clever workaround for the Apple II's lack of hardware support for z-buffering. Mechner's approach demonstrates how ingenuity can overcome hardware constraints, a theme that resonates throughout early game development. The principles of object comparison for rendering influenced modern graphics pipelines, where depth sorting is handled by GPUs."
  - id: "getinitobj1-initial-object-states"
    line_start: 2221
    line_end: 2251
    title: "Initializing Objects: Gates, Floors, and Flasks"
    wikipedia_url: "https://en.wikipedia.org/wiki/State_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The getinitobj1 routine initializes objects based on their type and specifications. It handles gates, loose floors, and flasks, setting their initial states using bitwise operations and conditional logic. This routine exemplifies Mechner's meticulous attention to detail, ensuring that every object behaves correctly from the moment it appears. The use of initialization routines became a standard practice in game engines, influencing systems like Unity's prefab system. By abstracting initialization logic, Mechner paved the way for scalable object management in larger, more complex games."
  - id: "mbsub-buffer-merging"
    line_start: 2256
    line_end: 2261
    title: "Merging Buffers for Composite Graphics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The mbsub routine merges multiple buffers (redbuf, floorbuf, halfbuf, fredbuf, wipebuf) to create composite graphics. This technique allowed Mechner to simulate complex visual effects on the Apple II, which lacked dedicated graphics hardware. Buffer merging is a precursor to double buffering, a technique now standard in rendering pipelines to prevent flickering and tearing. Mechner's innovative use of buffers influenced later games that relied on similar techniques for smooth animations and transitions, such as the early entries in the Final Fantasy series."

---

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