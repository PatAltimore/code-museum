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
description: "The FRAMEADV.S file orchestrates screen rendering and object handling in Prince of Persia, showcasing Jordan Mechner's mastery of Apple II assembly to create a cinematic platformer."

summary:
  - point: "Innovative use of bank-switched memory to fit 128K constraints"
    link: "https://en.wikipedia.org/wiki/Bank-switching"
    link_label: "Bank-switching"
  - point: "Rotoscoping-based animation system integrated into rendering routines"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Complex screen redraw logic optimized for Apple II hardware"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Handling of movable gates and spikes as special cases in rendering"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"
  - point: "Efficient object sorting and rendering techniques for cinematic gameplay"
    link: "https://en.wikipedia.org/wiki/Sorting_algorithm"
    link_label: "Sorting algorithms"

enhancements:
  - id: "initsettings-data-setup"
    line_start: 22
    line_end: 42
    title: "Why Every Game Needs a Setup Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Initialization_(programming)"
    image_url: ""
    image_caption: ""
    content: "The `initsettings` section initializes key variables that define the game's state, such as object positions, gate coordinates, and screen dimensions. This setup routine is critical for ensuring the game starts with consistent and predictable behavior. In the mid-1980s, programming for the Apple II required meticulous memory management due to the 128K RAM constraint. Jordan Mechner's approach reflects the era's emphasis on efficiency and precision. By allocating memory for essential variables upfront, the game avoids runtime errors and ensures smooth transitions between screens. This initialization technique influenced later games, where structured setup routines became standard practice in game engines like Unity and Unreal Engine."
  - id: "sure-full-screen-redraw"
    line_start: 49
    line_end: 179
    title: "The Trick Behind Full-Screen Redraws"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The `SURE` routine redraws the entire screen from scratch, a process that involves clearing the screen, calculating object positions, and rendering rows and columns of blocks. This method ensures visual consistency but is computationally intensive. On the Apple II, where CPU cycles were precious, Mechner's decision to redraw the entire screen reflects his commitment to cinematic quality. The technique borrows from double-buffering principles, minimizing flicker by preparing the screen off-screen before displaying it. This approach laid the groundwork for modern rendering pipelines in games, where full-screen redraws are optimized using GPU acceleration."
  - id: "fast-partial-redraw"
    line_start: 189
    line_end: 337
    title: "How Partial Redraws Save the Day"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dirty_rectangle"
    image_url: ""
    image_caption: ""
    content: "The `FAST` routine optimizes screen rendering by redrawing only the blocks marked for update. This technique, known as dirty rectangle rendering, was a clever solution to the Apple II's limited processing power. By tracking changes in redraw buffers, Mechner avoided unnecessary computations, enabling smoother gameplay. This method became a staple in 2D game development, influencing engines like SDL and frameworks like DirectX. It demonstrates how constraints can inspire innovation, leading to techniques that endure across decades of game development."
  - id: "redblocksure-full-block-redraw"
    line_start: 346
    line_end: 359
    title: "The Anatomy of a Block Redraw"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tile-based_video_game"
    image_url: ""
    image_caption: ""
    content: "The `RedBlockSure` routine redraws an entire block, including its A, B, C, and D sections. Blocks are the fundamental unit of the game's tile-based design, representing floors, walls, and other environmental elements. Mechner's meticulous handling of block sections ensures seamless transitions between tiles, a critical aspect of the game's cinematic feel. This tile-based approach influenced later platformers like Super Mario Bros. and The Legend of Zelda, where efficient block management enabled expansive worlds within limited hardware."
  - id: "drawobjs-object-rendering"
    line_start: 503
    line_end: 551
    title: "Sorting Objects for Cinematic Depth"
    wikipedia_url: "https://en.wikipedia.org/wiki/Z-buffering"
    image_url: ""
    image_caption: ""
    content: "The `drawobjs` routine sorts and renders objects based on their depth, creating a sense of visual hierarchy. Mechner's implementation predates modern Z-buffering but achieves similar results by manually sorting objects into a back-to-front order. This technique enhances the game's cinematic quality, ensuring characters and objects appear in the correct visual layers. It influenced later games and engines, where depth sorting became automated and optimized through hardware acceleration."
  - id: "getprev-screen-edge-handling"
    line_start: 561
    line_end: 602
    title: "What Happens at the Screen's Edge?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Scrolling_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `getprev` routine retrieves object IDs and states from the rightmost blocks of the screen to the left. This logic is crucial for handling transitions between screens, ensuring continuity in gameplay. On the Apple II, where memory was bank-switched and screens were rendered in discrete chunks, edge handling required careful planning. Mechner's solution influenced scrolling techniques in later games, where seamless transitions became a hallmark of immersive experiences."
  - id: "loadobj-object-data-loading"
    line_start: 702
    line_end: 747
    title: "Loading Objects: A Programmer's Puzzle"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data-driven_programming"
    image_url: ""
    image_caption: ""
    content: "The `loadobj` routine loads variables with object data, including coordinates, images, and collision properties. This data-driven approach simplifies object management, allowing Mechner to define behaviors and appearances in a centralized table. In the 1980s, this technique was revolutionary, enabling dynamic gameplay without hardcoding every object. It influenced modern game development, where data-driven design is a cornerstone of flexible and scalable systems."
  - id: "drawfrnt-special-object-rendering"
    line_start: 749
    line_end: 828
    title: "Special Cases: Gates, Slicers, and Flasks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `drawfrnt` routine handles special cases in object rendering, such as gates, slicers, and flasks. These objects require unique logic to ensure their animations and interactions align with the game's cinematic style. Mechner's attention to detail in handling these edge cases reflects his commitment to creating a polished experience. This approach influenced sprite-based games, where special objects often require tailored rendering logic."
  - id: "checkc-c-section-visibility"
    line_start: 912
    line_end: 928
    title: "Is This Section Visible or Hidden?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Visibility_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `checkc` routine determines whether the C-section of a block is visible or hidden. Visibility checks are essential for optimizing rendering, ensuring only necessary sections are drawn. On the Apple II, where every CPU cycle mattered, Mechner's approach minimized overhead while maintaining visual fidelity. This logic influenced visibility determination in later games, where efficient rendering remains a priority."
  - id: "domaskb-b-section-masking"
    line_start: 975
    line_end: 990
    title: "Masking: The Art of Layering Graphics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Alpha_compositing"
    image_url: ""
    image_caption: ""
    content: "The `domaskb` routine masks the B-section of a block to the left, ensuring proper layering in the game's visuals. Masking techniques like this were critical for achieving the cinematic look of Prince of Persia on hardware with no native support for transparency or layering. Mechner's solution demonstrates ingenuity in overcoming hardware limitations, influencing later games where alpha compositing became standard."
  - id: "drawb-rendering-b-section"
    line_start: 992
    line_end: 1085
    title: "How B-Sections Were Rendered on Apple II"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "The 'drawb' routine handles rendering the B-section of graphical objects, including blocks, panels, and palace stripes. It begins by checking the object ID and the preceding state to determine the appropriate rendering path. For example, if the object is a block, the routine skips rendering entirely, as blocks obscure the B-section. Special handling is included for palace stripes and panels, which require unique masking and opacity settings. This routine exemplifies the complexity of managing layered graphics on the Apple II, where memory constraints and the lack of hardware acceleration demanded meticulous programming. Jordan Mechner's approach here reflects the broader challenge of creating cinematic visuals on a machine originally designed for text-based applications. The techniques used in 'drawb' influenced later games by demonstrating how to achieve nuanced graphical effects on constrained hardware."
  - id: "redrawd-drawd-d-section-rendering"
    line_start: 1087
    line_end: 1133
    title: "Rendering D-Sections: Masking and Opacity Tricks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Transparency_(graphic)"
    image_url: ""
    image_caption: ""
    content: "The 'redrawd' and 'drawd' routines focus on rendering the D-section of objects, which often requires masking and opacity adjustments. The code checks whether the D-section needs to be masked based on the object's type and state, applying an 'OR' operation to blend the graphics appropriately. This level of detail highlights Mechner's commitment to creating visually cohesive environments, even when working within the constraints of the Apple II's graphical capabilities. The masking logic here is particularly notable, as it ensures that overlapping graphical elements appear seamless, a technique that would later become standard in sprite-based games. These routines also demonstrate how assembly language can be used to manipulate graphical properties directly, a skill that was essential for game developers in the 1980s."
  - id: "drawa-rendering-a-section"
    line_start: 1134
    line_end: 1157
    title: "A-Section Rendering: Handling Intrusive Graphics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The 'drawa' routine is responsible for rendering the A-section of objects, with special handling for cases where adjacent graphics intrude. For example, if the object to the left has an intrusive B-section, the routine applies a mask to ensure proper layering. This approach reflects the challenges of creating visually complex scenes on the Apple II, where overlapping graphics could easily become a visual mess. Mechner's solution involves precise checks and conditional masking, ensuring that each graphical element is rendered correctly. This routine is a testament to the ingenuity required to create cinematic visuals on hardware with limited graphical capabilities. The techniques used here influenced later games by demonstrating how to manage complex graphical interactions in real-time."
  - id: "drawhalf-special-floor-rendering"
    line_start: 1261
    line_end: 1325
    title: "Special Floor Rendering for Climbing Animations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "The 'drawhalf' routine is a specialized version of 'drawfloor,' designed for scenarios where the player character climbs up. It includes logic for masking and rendering half-pieces of the floor, ensuring that the animation appears smooth and realistic. This routine exemplifies Mechner's attention to detail, as it addresses a specific gameplay scenario that could easily be overlooked. By creating a separate routine for climbing animations, Mechner ensured that the game's visuals remained consistent and cinematic, even during complex movements. This approach influenced later platformers by highlighting the importance of tailoring graphical routines to specific gameplay mechanics."
  - id: "drawspikea-drawspikeb-rendering-spikes"
    line_start: 1450
    line_end: 1492
    title: "Rendering Spikes: Dynamic Graphics for Hazards"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The 'drawspikea' and 'drawspikeb' routines handle the rendering of spikes, a key hazard in Prince of Persia. These routines dynamically adjust the graphics based on the state of the spikes, whether extended or retracted, ensuring that the visual representation matches the gameplay mechanics. This level of detail is crucial for creating a cohesive and immersive experience, as it ties the game's visuals directly to its interactive elements. Mechner's approach here reflects his broader philosophy of integrating graphics and gameplay seamlessly, a principle that would influence countless games in the years to come."
  - id: "drawgateb-rendering-gates"
    line_start: 1813
    line_end: 1909
    title: "Rendering Gates: Layered Graphics for Moving Objects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Scrolling_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The 'drawgateb' routine is responsible for rendering gates, which are complex moving objects in Prince of Persia. This routine includes logic for drawing the bottom piece of the gate, followed by middle pieces, and finally the top piece, ensuring that the gate appears to rise smoothly. The code also handles cases where the gate overlaps with the floor, applying masking and opacity adjustments to maintain visual consistency. This routine showcases Mechner's ability to manage layered graphics effectively, a skill that was essential for creating dynamic environments on the Apple II. The techniques used here influenced later games by demonstrating how to handle moving objects with precision and elegance."
  - id: "restorebot-repairing-bottom-graphics"
    line_start: 1910
    line_end: 1936
    title: "Repairing Bottom Graphics After Gate Movement"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The 'restorebot' routine repairs the bottom graphics after a gate has moved, ensuring that the visual elements remain consistent. This routine includes logic for restoring the background and redrawing the A-section of the gate, a process that requires careful coordination to avoid graphical glitches. Mechner's approach here reflects the challenges of managing dynamic graphics on the Apple II, where memory constraints and limited hardware capabilities demanded meticulous programming. The techniques used in 'restorebot' influenced later games by demonstrating how to handle graphical repairs efficiently, a principle that would become standard in sprite-based games."
  - id: "drawobjx-dynamic-object-rendering"
    line_start: 1929
    line_end: 1968
    title: "Dynamic Object Rendering: Handling Multiple Types"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The 'drawobjx' routine handles the rendering of dynamic objects, including the player character, guards, and various hazards. This routine begins by loading object data and determining the type of object to render, branching to specific routines for each type. This approach reflects Mechner's commitment to creating a diverse and visually rich environment, where each object is rendered with care and precision. The techniques used in 'drawobjx' influenced later games by demonstrating how to manage a wide variety of graphical elements efficiently, a principle that would become standard in game development."
  - id: "drawff-animation-layering"
    line_start: 1969
    line_end: 2027
    title: "How Animation Layers Were Drawn"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "This subroutine, `DrawFF`, handles the drawing of animation frames for the main character using a layered approach. It manipulates the character's image and opacity settings, applying masks and offsets to position the sprite correctly. The routine divides the process into sections (A, B, D) that correspond to different parts of the animation frame, ensuring that each layer is drawn with the correct opacity and blending mode. Mechner's use of rotoscoping—tracing live-action footage frame by frame—was groundbreaking for its time, lending the game a cinematic quality. On the Apple II, with its limited graphical capabilities, this layering technique allowed for smoother animations and more lifelike movement. The approach influenced later games that sought to replicate realistic character motion, such as Another World (1991) and Flashback (1992)."
  - id: "getobjid-object-identification"
    line_start: 2029
    line_end: 2100
    title: "Identifying Objects in a Screen"
    wikipedia_url: "https://en.wikipedia.org/wiki/Finite-state_machine"
    image_url: ""
    image_caption: ""
    content: "The `getobjid` and `getobjid1` routines determine the identity and state of objects within the current screen. By checking the screen number and accessing object blueprints stored in memory, the code retrieves the object's type and state. It includes special handling for pressplates and upressplates, which are interactive elements in the game. This logic is part of a larger finite-state machine design that governs object interactions and behaviors. Mechner's meticulous attention to detail ensured that every object behaved consistently, whether it was a gate, a loose floor, or a flask. This approach laid the groundwork for complex object interactions in later platformers and adventure games, such as Tomb Raider (1996) and the Uncharted series."
  - id: "gonull-null-screen-handler"
    line_start: 2102
    line_end: 2116
    title: "Handling the Null Screen"
    wikipedia_url: "https://en.wikipedia.org/wiki/Video_game_graphics"
    image_url: ""
    image_caption: ""
    content: "The `GOnull` routine handles the rendering of a null screen, ensuring it appears as a blank space. This is a fallback mechanism for screens that lack defined objects or graphics. On the Apple II, where memory was scarce, such routines were essential for managing edge cases without consuming additional resources. The null screen concept is a precursor to modern game design practices, where placeholder or default states are used to simplify rendering pipelines. It reflects Mechner's careful planning to optimize performance and memory usage while maintaining visual consistency."
  - id: "sortlist-object-sorting-algorithm"
    line_start: 2129
    line_end: 2172
    title: "Sorting Objects for Proper Rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Painter%27s_algorithm"
    image_url: ""
    image_caption: ""
    content: "The `sortlist` routine implements a sorting algorithm to arrange objects in back-to-front order for rendering. This ensures that objects closer to the camera appear on top of those farther away, adhering to the painter's algorithm. The routine repeatedly compares adjacent objects in the list and swaps them if necessary, continuing until no further swaps are needed. This approach was critical for achieving visual depth on the Apple II, which lacked hardware support for z-buffering. Mechner's implementation influenced later games that required efficient sorting for 2D and pseudo-3D environments, such as Doom (1993) and Diablo (1996)."
  - id: "compare-object-comparison"
    line_start: 2174
    line_end: 2216
    title: "Comparing Object Positions and Types"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sorting_algorithm"
    image_url: ""
    image_caption: ""
    content: "The `compare` routine determines the relative positions of two objects in the sort list. It checks their types and Y-coordinates to decide whether one object should be rendered in front of the other. Special rules prioritize certain object types, such as shadows, which are always rendered in front. This logic is a key part of the sorting mechanism that ensures visual coherence in the game. The routine's simplicity and efficiency were necessary for the Apple II's limited processing power, and it exemplifies the ingenuity required to create complex visual effects on early hardware."
  - id: "getinitobj-object-initialization"
    line_start: 2217
    line_end: 2251
    title: "Initializing Object States"
    wikipedia_url: "https://en.wikipedia.org/wiki/Finite-state_machine"
    image_url: ""
    image_caption: ""
    content: "The `GETINITOBJ` and `getinitobj1` routines initialize the state of objects based on their type and blueprint specifications. This includes setting gates to their initial positions, marking loose floors, and configuring flasks. The routines use a combination of direct memory access and bitwise operations to extract and apply settings efficiently. Mechner's design ensures that objects start in consistent states, which is crucial for gameplay logic and player expectations. This initialization process influenced later games with dynamic environments, such as The Legend of Zelda: A Link to the Past (1991) and Metroid Prime (2002)."
  - id: "mbsub-memory-buffer-manipulation"
    line_start: 2251
    line_end: 2261
    title: "Combining Buffers for Graphics Effects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The `mbsub` routine combines multiple memory buffers to create graphical effects. It performs bitwise OR operations on buffers representing different layers, such as redbuf, floorbuf, and wipebuf, to produce the final image. This technique allowed Mechner to simulate complex visuals on the Apple II's limited hardware. By blending buffers dynamically, the game achieves effects like shadows and transparency. This approach foreshadowed modern techniques like double buffering and alpha blending, which are now standard in graphics programming. It demonstrates how creative coding can overcome hardware limitations to deliver visually impressive results."

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
