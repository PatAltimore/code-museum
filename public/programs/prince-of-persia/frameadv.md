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
description: "This file contains the assembly code for frame advancement and rendering routines in Prince of Persia (1989), showcasing the game's innovative approach to cinematic platforming on constrained hardware."

summary:
  - point: "Bank-switched memory techniques to fit within 128K"
    link: "https://en.wikipedia.org/wiki/Bank-switching"
    link_label: "Bank-switching"
  - point: "Rotoscoping animation traced from filmed footage"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Efficient screen redraw algorithms for Apple II"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Object sorting and rendering for cinematic effects"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"
  - point: "Innovative handling of movable objects and sections"
    link: "https://en.wikipedia.org/wiki/Platform_game"
    link_label: "Platform game"

enhancements:
  - id: "initsettings-data-table"
    line_start: 22
    line_end: 48
    title: "Initialization: Setting the stage for gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section initializes key variables and data structures needed for the game's rendering and logic. It defines local variables such as `rowno`, `colno`, and `objid`, which are essential for tracking the player's position and the state of objects on the screen. Jordan Mechner was working within the constraints of the Apple II's 128K memory, requiring careful management of every byte. By predefining these variables, the game could efficiently handle object interactions and screen updates. This approach reflects the meticulous planning required to create a seamless gaming experience on limited hardware. The initialization routines laid the groundwork for the game's cinematic platforming mechanics, influencing later titles like Another World and Flashback."
  - id: "sure-full-screen-redraw"
    line_start: 49
    line_end: 188
    title: "SURE: Drawing the entire screen from scratch"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The `SURE` subroutine is responsible for redrawing the entire 10x3 screen from scratch, including all blocks and objects. It uses nested loops to iterate through rows and columns, calculating coordinates and fetching object IDs for each block. This method ensures that the screen is fully updated, even in complex scenarios where objects move or interact dynamically. Mechner's approach was inspired by techniques like double buffering, which minimizes flicker during screen updates. The routine also handles special cases, such as drawing the bottom row of the screen above, demonstrating the game's attention to detail in creating a cinematic experience. This technique influenced later games that required efficient rendering on constrained hardware, such as early DOS platformers."
  - id: "fast-partial-screen-redraw"
    line_start: 189
    line_end: 345
    title: "FAST: Optimized redraw for dynamic gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Algorithmic_efficiency"
    image_url: ""
    image_caption: ""
    content: "The `FAST` subroutine provides an optimized method for redrawing only the blocks specified by redraw buffers, significantly improving performance during gameplay. Unlike `SURE`, which redraws the entire screen, `FAST` focuses on updating areas affected by player movement or interactions. This selective redraw technique was crucial for maintaining smooth gameplay on the Apple II, where CPU cycles were limited. Mechner's implementation reflects a deep understanding of algorithmic efficiency, balancing visual fidelity with hardware constraints. The use of redraw buffers became a common practice in game development, influencing techniques in games like Commander Keen and early SNES titles."
  - id: "redblocksure-full-block-redraw"
    line_start: 346
    line_end: 367
    title: "RedBlockSure: Comprehensive block rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_pipeline"
    image_url: ""
    image_caption: ""
    content: "The `RedBlockSure` subroutine is tasked with redrawing an entire block, including its A, B, C, and D sections. This comprehensive rendering ensures that each block is visually consistent and properly layered. The routine calls other subroutines like `drawc`, `drawmc`, and `drawfrnt` to handle specific sections, demonstrating a modular approach to graphics rendering. Mechner's design mirrors concepts from the graphics pipeline, where different stages process visual elements before final output. This modularity allowed for easier debugging and adaptation, influencing later game engines that prioritized reusable components, such as Unity and Unreal Engine."
  - id: "redblockfast-partial-block-redraw"
    line_start: 381
    line_end: 476
    title: "RedBlockFast: Efficient block updates"
    wikipedia_url: "https://en.wikipedia.org/wiki/Optimization_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The `RedBlockFast` subroutine optimizes block rendering by focusing on specific sections marked in redraw buffers. It checks flags like `wipebuf`, `redbuf`, and `movebuf` to determine which parts of the block need updates, skipping unnecessary operations. This technique minimizes CPU usage while maintaining visual accuracy, a critical balance for the Apple II's limited processing power. Mechner's use of conditional rendering reflects broader principles of optimization in computer science, where resources are allocated based on need. This approach influenced later games that required dynamic updates, such as SimCity and Civilization."
  - id: "drawobjs-object-rendering"
    line_start: 503
    line_end: 560
    title: "drawobjs: Sorting and rendering objects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Z-buffering"
    image_url: ""
    image_caption: ""
    content: "The `drawobjs` subroutine handles the sorting and rendering of objects on the screen, ensuring they appear in the correct order for a cinematic effect. It uses a sorting algorithm to arrange objects back-to-front based on their indices, then transfers them to the mid list for rendering. This approach is reminiscent of Z-buffering, where depth information determines the rendering order. Mechner's implementation was groundbreaking for its time, creating a sense of depth and realism on the Apple II. The technique influenced later games with complex object interactions, such as The Legend of Zelda and Super Mario Bros. 3."
  - id: "getprev-rightmost-blocks"
    line_start: 561
    line_end: 615
    title: "getprev: Fetching neighboring screen data"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tile-based_video_game"
    image_url: ""
    image_caption: ""
    content: "The `getprev` subroutine retrieves the object IDs and states of the three rightmost blocks from the left-neighboring screen. This data is crucial for seamless transitions between screens, ensuring that objects align correctly during gameplay. Mechner's use of tile-based rendering reflects the constraints of the Apple II, where memory and processing power limited the complexity of graphics. By preloading neighboring screen data, the game achieves smooth scrolling and transitions, a technique later refined in titles like Sonic the Hedgehog and Metroid."
  - id: "loadobj-object-data-loading"
    line_start: 716
    line_end: 753
    title: "loadobj: Preparing object variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Object-oriented_programming"
    image_url: ""
    image_caption: ""
    content: "The `loadobj` subroutine loads variables with data from the object table, including coordinates, image indices, and interaction flags. This routine is essential for handling dynamic objects like gates, spikes, and torches. Mechner's approach resembles early object-oriented programming principles, where data and behavior are encapsulated within objects. By centralizing object data, the game simplifies interactions and rendering, paving the way for more sophisticated systems in games like Ultima and Baldur's Gate."
  - id: "drawb-section-rendering"
    line_start: 997
    line_end: 1091
    title: "Rendering 'B' sections dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The 'drawb' subroutine is responsible for rendering 'B' sections of the game environment, such as blocks, panels, and stripes. It dynamically determines the type of object to render based on the current game state and object identifiers. This section includes logic for masking, layering, and special handling for palace backgrounds and panels. In 1989, memory constraints on the Apple II required developers to optimize rendering routines to fit within 128K of memory using bank-switching techniques. Mechner's approach here demonstrates his ability to balance visual fidelity with hardware limitations. The logic for masking and layering sprites influenced later games that required complex environmental rendering, such as Another World (1991) and Flashback (1992)."
  - id: "drawd-section-rendering"
    line_start: 1096
    line_end: 1133
    title: "Handling 'D' sections with masking"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mask_(computing)"
    image_url: ""
    image_caption: ""
    content: "The 'drawd' subroutine handles the rendering of 'D' sections, which are masked and layered parts of the environment. It includes logic to determine whether masking is required based on the object type and state. This section highlights Mechner's use of sprite masking to create visually distinct layers, a technique that was critical for the cinematic platformer genre. At the time, sprite masking was a relatively advanced feature, allowing developers to overlay graphics without overwriting background details. This technique became standard in later games, influencing titles like Super Mario World (1990) and Sonic the Hedgehog (1991)."
  - id: "drawa-section-rendering"
    line_start: 1134
    line_end: 1157
    title: "Rendering 'A' sections with conditional masking"
    wikipedia_url: "https://en.wikipedia.org/wiki/Video_game_graphics"
    image_url: ""
    image_caption: ""
    content: "The 'drawa' subroutine is responsible for rendering 'A' sections, which include architectural elements and panels. It uses conditional logic to apply masking when adjacent sections intrude visually. This approach ensures seamless integration of overlapping elements, a hallmark of cinematic platformers. Mechner's implementation reflects the challenges of rendering complex environments on limited hardware. The conditional masking logic laid the groundwork for more sophisticated rendering systems in later games, such as Tomb Raider (1996), which relied heavily on layered environments and dynamic object interactions."
  - id: "drawfloor-and-drawhalf"
    line_start: 1252
    line_end: 1325
    title: "Floor rendering and climbable sections"
    wikipedia_url: "https://en.wikipedia.org/wiki/Platform_game"
    image_url: ""
    image_caption: ""
    content: "The 'drawfloor' and 'drawhalf' subroutines handle rendering of floor sections and climbable areas. These routines include logic for masking and layering to create visually distinct platforms and transitions. Mechner's attention to detail in these routines ensures smooth gameplay and visual consistency, critical for the immersive experience of Prince of Persia. The climbable sections introduced here influenced later platformers, such as Castlevania: Symphony of the Night (1997), which expanded on the concept of interactive environments."
  - id: "drawspikea-and-drawspikeb"
    line_start: 1453
    line_end: 1492
    title: "Animating spikes dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "The 'drawspikea' and 'drawspikeb' subroutines animate spikes, a key environmental hazard in Prince of Persia. These routines use state-based logic to determine whether spikes are extended or retracted, adding dynamic elements to the gameplay. Mechner's use of state-based animation reflects his cinematic approach to game design, where environmental elements are as dynamic as the characters. This technique influenced later games with interactive hazards, such as Donkey Kong Country (1994) and Limbo (2010)."
  - id: "drawgatec-and-drawgateb"
    line_start: 1701
    line_end: 1909
    title: "Rendering gates with dynamic movement"
    wikipedia_url: "https://en.wikipedia.org/wiki/Scrolling_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The 'drawgatec' and 'drawgateb' subroutines render gates, including their dynamic movement as they rise or fall. These routines use intricate logic to handle masking, layering, and animation, ensuring gates interact seamlessly with the environment. Mechner's implementation demonstrates his ability to create visually compelling and functional game elements within the constraints of the Apple II hardware. The dynamic gate rendering influenced later games with moving environmental elements, such as The Legend of Zelda: Ocarina of Time (1998)."
  - id: "restorebot-and-drawobjx"
    line_start: 1910
    line_end: 1968
    title: "Restoring backgrounds and drawing objects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The 'restorebot' and 'drawobjx' subroutines handle background restoration and object rendering. These routines ensure that objects are drawn correctly without overwriting critical background details, using techniques akin to double buffering. Mechner's meticulous implementation reflects the challenges of rendering dynamic objects on limited hardware. The object rendering logic influenced later games with complex environments, such as Half-Life (1998), which relied on similar techniques for seamless object integration."
  - id: "drawff-frame-rendering"
    line_start: 1969
    line_end: 2040
    title: "Rendering frames with layered opacity"
    wikipedia_url: "https://en.wikipedia.org/wiki/Alpha_compositing"
    image_url: ""
    image_caption: ""
    content: "The `DrawFF` routine is responsible for rendering frames by combining character images with layered opacity settings. It uses a combination of subtraction and addition operations to adjust coordinates (`FCharX` and `FCharY`) and applies masks and opacity settings to create visually distinct layers. This approach ensures that characters and objects are rendered with proper depth and transparency, critical for the cinematic feel of Prince of Persia. In the mid-1980s, achieving such effects on the Apple II required clever manipulation of limited graphical capabilities, as the machine lacked hardware support for advanced graphics. Mechner's approach borrows concepts from alpha compositing, adapted to the constraints of 6502 assembly. This technique influenced later games that sought to create visually rich environments on similarly constrained hardware."
  - id: "getobjid-object-identification"
    line_start: 2041
    line_end: 2045
    title: "Identifying objects on the game screen"
    wikipedia_url: "https://en.wikipedia.org/wiki/Object-oriented_programming"
    image_url: ""
    image_caption: ""
    content: "The `getobjid` subroutine retrieves the identifier of an object based on the current screen number (`SCRNUM`). If the screen is null, it redirects to `GOnull`, which handles empty screens. This routine is an early example of object-oriented thinking applied in assembly language, where objects are identified and manipulated based on their state and type. Mechner's use of such techniques reflects the growing influence of structured programming paradigms in game development during the 1980s. This approach laid the groundwork for more sophisticated object management systems in later games and engines, such as those seen in the Unity and Unreal engines."
  - id: "getobjid1-object-state-handling"
    line_start: 2047
    line_end: 2100
    title: "Handling object states dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/Finite-state_machine"
    image_url: ""
    image_caption: ""
    content: "The `getobjid1` routine expands on `getobjid` by incorporating state handling for objects, including press plates and upress plates. It uses bitwise operations and conditional checks to determine the object's state and adjust gameplay accordingly. This logic is reminiscent of finite-state machines, where objects transition between states based on player interaction or environmental triggers. Mechner's implementation demonstrates how state-driven gameplay mechanics can be achieved on hardware with limited processing power. This technique influenced the design of interactive environments in later platformers and adventure games, where object states play a crucial role in puzzle-solving and progression."
  - id: "sortlist-object-sorting"
    line_start: 2135
    line_end: 2181
    title: "Sorting objects for depth perception"
    wikipedia_url: "https://en.wikipedia.org/wiki/Z-buffering"
    image_url: ""
    image_caption: ""
    content: "The `sortlist` routine sorts objects in back-to-front order, ensuring that the foremost object appears at the bottom of the list. This is achieved through a bubble sort-like algorithm, where objects are compared and swapped based on their depth. While computationally expensive, this approach was necessary to simulate depth perception on the Apple II, which lacked hardware support for z-buffering. Mechner's use of sorting algorithms to manage object rendering influenced later games that required efficient depth management, such as the isometric perspective seen in Diablo (1996). The routine showcases how developers adapted general-purpose algorithms to fit the constraints of early game hardware."
  - id: "compare-depth-comparison"
    line_start: 2182
    line_end: 2216
    title: "Comparing object depths for rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Depth_buffer"
    image_url: ""
    image_caption: ""
    content: "The `compare` subroutine determines the relative depth of two objects by comparing their Y-coordinates and types. Objects are categorized based on their type (`TypeShad` for enemies) and position, ensuring that enemies are always rendered in front. This logic mimics depth-buffering techniques used in modern graphics rendering, albeit implemented manually in assembly. Mechner's approach highlights the ingenuity required to simulate advanced graphical effects on hardware without dedicated graphics processors. The principles demonstrated here influenced the development of depth management systems in later 2D and 3D games, bridging the gap between early platformers and modern rendering techniques."
  - id: "getinitobj1-object-initialization"
    line_start: 2221
    line_end: 2251
    title: "Initializing object states for gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Initialization_(programming)"
    image_url: ""
    image_caption: ""
    content: "The `getinitobj1` routine initializes the state of objects based on their type and specifications (`BlueType` and `BlueSpec`). It handles various object types, such as gates, loose floors, and flasks, setting their initial conditions for gameplay. This initialization logic is crucial for creating a consistent and interactive game world, where objects behave predictably based on their predefined states. Mechner's use of initialization routines reflects the importance of structured programming in game design, ensuring that objects are ready for interaction as soon as the game begins. This technique influenced the design of initialization systems in later games, where object states are often precomputed to optimize runtime performance."
  - id: "mbsub-buffer-merging"
    line_start: 2256
    line_end: 2267
    title: "Merging buffers for graphical effects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The `mbsub` routine merges multiple buffers (`redbuf`, `floorbuf`, `halfbuf`, `fredbuf`, and `wipebuf`) to create composite graphical effects. This technique is akin to double buffering, where multiple layers are combined to produce a seamless visual output. Mechner's implementation showcases how graphical effects can be achieved through careful manipulation of memory buffers, a common practice on systems with limited graphical capabilities. The merging of buffers influenced later techniques in graphical programming, where layering and compositing became standard practices for creating visually rich environments."

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