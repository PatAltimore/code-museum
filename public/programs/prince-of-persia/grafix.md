---
title: "GRAFIX.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/GRAFIX.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/GRAFIX.S"
year: 1989
author: "Jordan Mechner"
slug: "grafix"
order: 8
description: "Graphics routines for Prince of Persia's Apple II version, showcasing cinematic animation and memory-efficient techniques."

summary:
  - point: "Innovative use of rotoscoping for character animation"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Bank-switched memory to fit graphics in 128K"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank switching"
  - point: "Optimized graphics routines for Apple II hardware"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Layered image lists for cinematic effects"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"
  - point: "Custom routines for drawing wipes, backgrounds, and characters"
    link: "https://en.wikipedia.org/wiki/6502"
    link_label: "6502 Assembly"

enhancements:
  - id: "vbl-interrupt-handler"
    line_start: 110
    line_end: 112
    title: "How Vertical Blank Timing Drives Graphics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Vertical_blank_interrupt"
    image_url: ""
    image_caption: ""
    content: "The VBLvect routine sets up the vertical blank interrupt handler, a critical mechanism for synchronizing graphics updates with the Apple II's display refresh cycle. Vertical blanking occurs when the CRT monitor's electron beam resets to the top of the screen, providing a brief window to update graphics without visible tearing. Mechner uses this interrupt to manage time-sensitive tasks like refreshing image lists and ensuring smooth animation. In 1989, leveraging the vertical blank was standard practice for achieving fluid graphics on systems with limited processing power. The Apple II's 1MHz 6502 CPU and lack of dedicated graphics hardware made this synchronization essential. By adapting this technique, Mechner ensured Prince of Persia's cinematic visuals ran seamlessly on hardware designed for far simpler applications. This approach influenced later game developers working on constrained systems, embedding the importance of timing in game design."
  - id: "addback-image-management"
    line_start: 191
    line_end: 224
    title: "Adding Images to the Background List"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The ADDBACK routine adds images to the background list, a key part of Prince of Persia's layered graphics system. It takes parameters like X and Y coordinates, image code, and opacity, storing them in a list for rendering. This modular approach allows dynamic updates to the background without redrawing the entire screen, a technique akin to modern double buffering. In the late 1980s, this was a clever workaround for the Apple II's limited memory and processing power. Mechner's focus on efficient image management helped create the game's fluid animations and layered visuals, which were groundbreaking for the time. This technique laid the groundwork for more sophisticated graphics engines in later games, influencing titles like Another World and Flashback."
  - id: "addmsg-message-layering"
    line_start: 257
    line_end: 286
    title: "How Messages Became Part of the Scene"
    wikipedia_url: "https://en.wikipedia.org/wiki/Overlay_(programming)"
    image_url: ""
    image_caption: ""
    content: "ADDMSG integrates text or graphical messages into the game's visuals, treating them as part of the background layer. This routine uses parameters like X and Y coordinates, offsets, and opacity to position and render messages dynamically. By embedding messages into the graphics pipeline, Mechner avoided the need for separate text rendering routines, saving memory and CPU cycles. This approach reflects the constraints of the Apple II, where every byte and clock cycle mattered. The technique of overlaying messages directly onto graphical layers influenced later games that sought to blend UI elements seamlessly into their environments, a practice now common in cinematic and immersive games."
  - id: "drawall-master-rendering"
    line_start: 475
    line_end: 507
    title: "The Routine That Draws Everything"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_pipeline"
    image_url: ""
    image_caption: ""
    content: "DRAWALL is the master rendering routine that orchestrates the drawing of all image layers—background, middle, foreground, wipes, and messages. It calls subroutines like DOGEN, DRAWWIPE, and DRAWBACK to manage each layer efficiently. This modular design mirrors a modern graphics pipeline, where different stages handle specific tasks. On the Apple II, this structure was essential for managing the limited resources of the 6502 CPU and ensuring smooth animation. Mechner's approach to layering and rendering influenced the development of graphics engines in later games, particularly those aiming for cinematic effects on constrained hardware."
  - id: "drawmid-character-and-floor-rendering"
    line_start: 672
    line_end: 752
    title: "Rendering Characters and Floors with Precision"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tile-based_video_game"
    image_url: ""
    image_caption: ""
    content: "DRAWMID handles the rendering of middle-layer images, including characters and floor tiles. It uses parameters like image type, table number, and opacity to determine how each element is drawn. The routine supports advanced features like mirroring and cropping, allowing for dynamic character animations and seamless floor transitions. Mechner's focus on precision and flexibility in rendering was crucial for achieving the game's cinematic feel. This technique influenced later tile-based games and graphics engines, demonstrating how careful management of layers and parameters could create visually rich environments on limited hardware."
  - id: "setbgimg-background-image-setup"
    line_start: 809
    line_end: 841
    title: "Decoding Background Images for Rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The setbgimg routine decodes a coded image number to determine its table and memory bank, preparing it for rendering. This process ensures that background images are fetched from the correct location in the Apple II's bank-switched memory. By abstracting the complexity of memory management, Mechner made it easier to handle dynamic graphics updates. This technique reflects the constraints of the Apple II, where developers had to manually manage memory banks to fit large games into limited RAM. The routine's efficiency influenced later practices in memory management and graphics rendering, particularly in systems with constrained resources."
  - id: "cvt-x-coordinate-conversion"
    line_start: 885
    line_end: 959
    title: "Converting Coordinates for Apple II Graphics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Coordinate_system"
    image_url: ""
    image_caption: ""
    content: "The CVTX routine converts X-coordinates into byte and offset values for single and double high-resolution modes on the Apple II. It handles input ranges from -32767 to 32767, ensuring accurate results even for offscreen values. This conversion is essential for positioning graphics correctly on the screen, given the Apple II's unique memory layout and graphics capabilities. Mechner's attention to detail in coordinate handling allowed for precise placement of images, contributing to the game's polished visual presentation. This routine showcases the ingenuity required to work within the Apple II's constraints and influenced later graphics systems that prioritized accuracy and efficiency."
  - id: "zeropeel-memory-cleanup"
    line_start: 989
    line_end: 1015
    title: "Clearing Peel Buffers for Smooth Animation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "ZEROPEEL clears the peel list and buffer for the current page, ensuring that old image data does not interfere with new frames. It sets the buffer pointer to the beginning of the appropriate memory area and resets the image count. This cleanup is crucial for maintaining smooth animation and avoiding graphical glitches. On the Apple II, where memory was limited and manually managed, routines like ZEROPEEL were essential for optimizing performance. Mechner's approach to memory cleanup influenced later practices in double buffering and graphics management, highlighting the importance of efficient resource handling in game development."
  - id: "joystick-input-handling"
    line_start: 1017
    line_end: 1062
    title: "How Joystick Input Was Decoded"
    wikipedia_url: "https://en.wikipedia.org/wiki/Joystick"
    image_url: ""
    image_caption: ""
    content: "This section decodes joystick input by reading the joystick's X and Y axes and button states, storing them in memory for use by the game logic. The routine includes support for reversing axis directions based on configuration flags. In the mid-1980s, joystick input was a common feature in games but required direct hardware interaction, as there was no standardized API. Jordan Mechner's implementation reflects the need for precise control over input devices to ensure smooth gameplay. This approach influenced later games, as joystick handling became a staple of platformers and action games, eventually leading to more sophisticated input libraries in modern game engines like Unity and Unreal."
  - id: "button-input-handling"
    line_start: 1117
    line_end: 1169
    title: "Reading Buttons: A Hardware-Level Hack"
    wikipedia_url: "https://en.wikipedia.org/wiki/Input_device"
    image_url: ""
    image_caption: ""
    content: "The BUTTONS routine reads and processes button states directly from hardware registers, allowing the game to distinguish between raw and processed button inputs. This was necessary on the Apple II due to the lack of abstraction layers for input devices. Mechner's code demonstrates a deep understanding of the Apple II's hardware, leveraging memory-mapped I/O to interact with the joystick and keyboard. This low-level approach was typical of the era but required meticulous testing to ensure compatibility across different Apple II models. The technique paved the way for more abstracted input handling in later systems, such as the DirectInput API in Windows."
  - id: "memory-move-routine"
    line_start: 1272
    line_end: 1301
    title: "The Memory Move That Could Wipe 64K"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "MOVEMEM is a routine for copying blocks of memory, a common task in graphics and game logic. It uses indexed addressing to move data byte by byte, but includes a warning: if the source and destination ranges overlap improperly, it could overwrite 64K of memory. This highlights the risks of low-level programming, where a single mistake could crash the system. Mechner's careful implementation reflects the constraints of the Apple II, where memory was precious and errors were unforgiving. Memory manipulation routines like this became foundational in later game engines, influencing techniques for efficient asset loading and texture management."
  - id: "sound-generation-routines"
    line_start: 1303
    line_end: 1358
    title: "Generating Sound Without a Sound Card"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_card"
    image_url: ""
    image_caption: ""
    content: "The GTONE, WHOOP, and tone routines generate sound directly by toggling the Apple II's speaker. This was a common technique in the absence of dedicated sound hardware. By manipulating pitch and duration values, the game could produce simple sound effects to enhance gameplay. Mechner's use of sound reflects the era's ingenuity, where developers had to extract every ounce of capability from the hardware. These routines laid the groundwork for more sophisticated sound systems in later games, eventually leading to the integration of MIDI and digital audio in the 1990s."
  - id: "random-number-generator"
    line_start: 1379
    line_end: 1395
    title: "The Math Behind Randomness in Games"
    wikipedia_url: "https://en.wikipedia.org/wiki/Random_number_generation"
    image_url: ""
    image_caption: ""
    content: "The RND routine implements a simple linear congruential generator to produce random numbers, a critical feature for gameplay mechanics like enemy behavior and item placement. The formula `(5 * seed + 23) mod 256` ensures a predictable yet varied sequence of numbers. Random number generation was essential for creating dynamic and replayable experiences, especially in an era when games were constrained by limited storage and processing power. This technique influenced later developments in procedural generation, seen in games like Minecraft and No Man's Sky."
  - id: "vertical-blank-synchronization"
    line_start: 1938
    line_end: 1984
    title: "Synchronizing Graphics with Vertical Blank"
    wikipedia_url: "https://en.wikipedia.org/wiki/Vertical_blank_interrupt"
    image_url: ""
    image_caption: ""
    content: "The VBLANK routines synchronize graphics updates with the vertical blank interval, a brief period when the screen is not actively drawing. This prevents visual artifacts like tearing and ensures smooth animation. On the Apple II, this required precise timing and direct hardware interaction. Mechner's implementation reflects the challenges of programming for early computers, where developers had to manage every detail of the hardware. Vertical blank synchronization became standard practice in game development, influencing techniques like double buffering and vsync in modern graphics engines."
  - id: "iigs-detection-and-optimization"
    line_start: 2004
    line_end: 2039
    title: "Detecting and Optimizing for the Apple IIGS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_IIGS"
    image_url: ""
    image_caption: ""
    content: "The CHECKIIGS routine detects whether the game is running on an Apple IIGS and adjusts settings accordingly, including initializing the vertical blank routine. The IIGS was a more advanced model with enhanced graphics and sound capabilities, and Mechner's code takes advantage of these features while maintaining compatibility with older Apple II systems. This forward-thinking approach ensured that Prince of Persia could run optimally on a range of hardware, a practice that influenced later cross-platform development strategies."
  - id: "temporary-fast-speed-mode"
    line_start: 2041
    line_end: 2053
    title: "The Speed Boost for Apple IIGS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_IIGS"
    image_url: ""
    image_caption: ""
    content: "The FASTSPEED routine temporarily sets the Apple IIGS to fast speed mode, leveraging its advanced capabilities for smoother gameplay. This optimization reflects Mechner's attention to detail and willingness to push hardware to its limits. By detecting the IIGS and enabling fast mode, the game could deliver a better experience on newer hardware while remaining compatible with older models. This technique foreshadowed the adaptive optimizations seen in modern games, where performance is tailored to the player's system."
  - id: "normal-speed-black-border"
    line_start: 2055
    line_end: 2076
    title: "How a Black Border Set the Speed"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "This routine, NORMSPEED, adjusts the Apple II's display settings and ensures the game runs at normal speed. It begins by checking if the program is running on an Apple IIGS, a later model in the Apple II series, and exits early if not. For compatible systems, it manipulates hardware registers ($c034 and $c022) to set a black border and a black background with white text. The key operation here is the TRB (Test and Reset Bits) instruction applied to $c036, which toggles the speed setting back to normal. This section highlights the direct manipulation of memory-mapped hardware registers, a common technique in 1980s assembly programming. In 1989, the Apple IIe and IIc were still widely used, but developers like Mechner were beginning to account for the newer Apple IIGS, which introduced enhanced graphics and sound capabilities. The NORMSPEED routine reflects this transitional period, where backward compatibility was essential. Mechner's careful handling of hardware quirks ensured the game could run smoothly across multiple Apple II models. This approach influenced later developers working on cross-platform compatibility in assembly. The direct manipulation of hardware registers became a hallmark of early game programming, especially for systems with limited abstraction layers. Techniques like this were studied by programmers working on subsequent systems, such as the Commodore 64 and early IBM PCs, where similar constraints existed. NORMSPEED exemplifies the ingenuity required to balance hardware-specific optimizations with broader compatibility."
  - id: "read-control-panel-parameter"
    line_start: 2078
    line_end: 2103
    title: "Reading Settings from the Apple IIGS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_IIGS"
    image_url: ""
    image_caption: ""
    content: "The getparam routine reads a control panel parameter from the Apple IIGS, a machine with advanced capabilities compared to earlier Apple II models. It begins by checking if the program is running on an IIGS and exits if not. For IIGS systems, it saves the current processor state, switches to native mode (via the XCE and REP instructions), and calls a system routine (E10000) using the JSL (Jump to Subroutine Long) instruction. This retrieves the desired parameter based on the location specified in the Y register and returns it in the accumulator (A). By 1989, the Apple IIGS had introduced a 16-bit processor (the 65C816), which required different handling compared to the 8-bit 6502 used in earlier Apple II models. Mechner's inclusion of routines like getparam reflects his attention to detail and willingness to support newer hardware. The use of native mode and long subroutine calls demonstrates an understanding of the IIGS's expanded instruction set and memory model. This routine laid the groundwork for future developers working on multi-platform software. The ability to query system parameters dynamically became a standard practice in later operating systems and game engines. For example, the concept of reading hardware-specific settings influenced APIs like DirectX and OpenGL, which abstracted hardware queries for developers. Mechner's work on the Apple IIGS helped bridge the gap between low-level assembly programming and the higher-level abstractions that followed."
  - id: "set-control-panel-parameter"
    line_start: 2105
    line_end: 2123
    title: "Writing Settings to the Apple IIGS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_IIGS"
    image_url: ""
    image_caption: ""
    content: "The setparam routine writes a control panel parameter to the Apple IIGS, complementing the getparam routine. It begins by saving the processor state and switching to native mode, similar to getparam. The desired value (in the accumulator) and the parameter location (in the Y register) are pushed onto the stack, and a system routine (E10000) is called using JSL to update the setting. Afterward, the processor state is restored, ensuring compatibility with the rest of the program. This routine showcases Mechner's ability to leverage the Apple IIGS's advanced features while maintaining compatibility with earlier Apple II models. The use of native mode and stack operations reflects the challenges of programming for a hybrid 8-bit/16-bit environment. By 1989, developers were increasingly tasked with supporting diverse hardware configurations, and routines like setparam demonstrate the meticulous planning required to achieve this. The concept of dynamically setting hardware parameters influenced later software development practices. Game engines like Unity and Unreal now provide high-level APIs for adjusting system settings, but the underlying principles—querying and updating hardware states—remain similar. Mechner's work on the Apple IIGS contributed to the evolution of these practices, showing how low-level assembly routines could pave the way for more sophisticated abstractions. The setparam routine is a testament to the ingenuity required to navigate the constraints of early computing."

---

* grafix
CopyProtect = 1
EditorDisk = 0
org = $400
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

 jmp GR
 jmp DRAWALL
 jmp CONTROLLER
 jmp dispversion
 jmp SAVEBLUE

 jmp RELOADBLUE
 jmp MOVEMEM
 jmp BUTTONS ;ed
 jmp GTONE
 jmp SETCENTER

 jmp DIMCHAR
 jmp CVTX
 jmp ZEROPEEL
 jmp ZEROPEELS
 jmp PREAD

 jmp ADDPEEL
 jmp COPYSCRN
 jmp SNGPEEL
 jmp RND
 jmp CLS

 jmp LAY
 jmp FASTLAY
 jmp LAYRSAVE
 jmp LRCLS
 jmp FASTMASK

 jmp FASTBLACK
 jmp PEEL
 jmp GETWIDTH
 jmp COPY2000
 jmp COPY2000MA

 jmp SETFASTAUX
 jmp SETFASTMAIN
 jmp LOADLEVEL
 jmp ATTRACTMODE
 jmp XMINIT

 jmp XMPLAY
 jmp CUTPRINCESS
 jmp XTITLE
 jmp COPY2000AM
 jmp RELOAD

 jmp LOADSTAGE2
 jmp RELOAD
 jmp GETSELECT
 jmp GETDESEL
 jmp EDREBOOT ;ed

 jmp GOBUILD ;ed
 jmp GOGAME ;ed
 jmp WRITEDIR ;ed
 jmp READDIR ;ed
 jmp SAVELEVEL ;ed

 jmp SAVELEVELG ;ed
 jmp ADDBACK
 jmp ADDFORE
 jmp ADDMID
 jmp ADDMIDEZ

 jmp ADDWIPE
 jmp ADDMSG
 jmp SAVEGAME
 jmp LOADGAME
 jmp ZEROLSTS

 jmp SCREENDUMP
 jmp MINIT
 jmp MPLAY
 jmp SAVEBINFO
 jmp RELOADBINFO

 jmp INVERTY
 jmp NORMSPEED
 jmp ADDMIDEZO
 jmp CALCBLUE
 jmp ZERORED

 jmp XPLAYCUT
 jmp CHECKIIGS
 jmp FASTSPEED
 jmp MUSICKEYS
 jmp DOSTARTGAME

 jmp EPILOG
 jmp LOADALTSET
 jmp XMOVEMUSIC
 jmp WHOOP
VBLvect jmp VBLANK ;changed by InitVBLANK if IIc

 jmp VBLI ;VBL interrupt

*-------------------------------
 lst
 put eq
 lst
 put gameeq
 lst
 put soundnames
 lst off
*-------------------------------
 dum locals
]temp
]dest ds 2
]source ds 2
]endsourc ds 2
index ds 1

 dend

*-------------------------------
*  Apple soft switches

IOUDISoff = $c07f
IOUDISon = $c07e
DHIRESoff = $c05f
DHIRESon = $c05e
HIRESon = $c057
HIRESoff = $c056
PAGE2on = $c055
PAGE2off = $c054
MIXEDon = $c053
MIXEDoff = $c052
TEXTon = $c051
TEXToff = $c050
ALTCHARon = $c00f
ALTCHARoff = $c00e
ADCOLon = $c00d
ADCOLoff = $c00c
ALTZPon = $c009
ALTZPoff = $c008
RAMWRTaux = $c005
RAMWRTmain = $c004
RAMRDaux = $c003
RAMRDmain = $c002
ADSTOREon = $c001
ADSTOREoff = $c000
RWBANK2 = $c083
RWBANK1 = $c08b
USEROM = $c082

*-------------------------------
*  Key equates

CTRL = $60
ESC = $9b
DELETE = $7f
SHIFT = $20

ksound = "s"-CTRL
kmusic = "n"-CTRL

*-------------------------------
*  Joystick "center" width (increase for bigger center)

cwidthx = 10 ;15
cwidthy = 15 ;21

*-------------------------------
*  Addresses of character image tables
*  (Bank: 2 = main, 3 = aux)

chtabbank db 2,2,2,3,2,3,3

chtablist db #>chtable1,#>chtable2,#>chtable3,#>chtable4
 db #>chtable5,#>chtable6,#>chtable7

dummy db maxpeel,maxpeel

*-------------------------------
*
*  A D D B A C K
*
*  Add an image to BACKGROUND image list
*
*  In: XCO, YCO, IMAGE (coded), OPACITY
*
*  IMAGE bit 7 specifies image table (0 = bgtable1,
*  1 = bgtable2); low 6 bits = image # within table
*
*-------------------------------
ADDBACK ldx bgX ;# images already in list
 inx
 cpx #maxback
 bcs :rts ;list full (shouldn't happen)

 lda XCO
 sta bgX,x

 lda YCO
 cmp #192
 bcs :rts
 sta bgY,X

 lda IMAGE
 sta bgIMG,X

 lda OPACITY
 sta bgOP,X

 stx bgX
:rts
]rts rts

*-------------------------------
*
*  A D D F O R E
*
*  Add an image to FOREGROUND image list
*
*  In: same as ADDBACK
*
*-------------------------------
ADDFORE ldx fgX
 inx
 cpx #maxfore
 bcs ]rts

 lda XCO
 sta fgX,X

 lda YCO
 cmp #192
 bcs ]rts
 sta fgY,X

 lda IMAGE
 sta fgIMG,X

 lda OPACITY
 sta fgOP,X

 stx fgX
]rts rts

*-------------------------------
*
*  A D D M S G
*
*  Add an image to MESSAGE image list (uses bg tables)
*
*  In:  XCO, OFFSET, YCO, IMAGE (coded), OPACITY (bit 6 coded)
*
*-------------------------------
ADDMSG ldx msgX
 inx
 cpx #maxmsg
 bcs ]rts

 lda XCO
 sta msgX,X
 lda OFFSET
 sta msgOFF,X

 lda YCO
 sta msgY,X

 lda IMAGE
 sta msgIMG,X

 lda OPACITY
 sta msgOP,X

 stx msgX
]rts rts

*-------------------------------
*
*  A D D  W I P E
*
*  Add image to wipe list
*
*  In: XCO, YCO, height, width; A = color
*
*-------------------------------
ADDWIPE ldx wipeX
 inx
 cpx #maxwipe
 bcs ]rts

 sta wipeCOL,x
 lda blackflag ;TEMP
 beq :1 ;
 lda #$ff ;
 sta wipeCOL,x ;
:1
 lda XCO
 sta wipeX,x
 lda YCO
 sta wipeY,x

 lda height
 sta wipeH,x
 lda width
 sta wipeW,x

 stx wipeX
]rts rts

*-------------------------------
*
*  A D D   M I D
*
*  Add an image to mid table
*
*  In:  XCO, OFFSET, YCO, IMAGE, TABLE, OPACITY
*       FCharFace, FCharCU-CD-CL-CR
*       A = midTYP
*
*  midTYP bit 7: 1 = char tables, 0 = bg tables
*  midTYP bits 0-6:
*    0 = use fastlay (normal for floorpieces)
*    1 = use lay alone
*    2 = use lay with layrsave (normal for characters)
*
*  For char tables: IMAGE = image #, TABLE = table #
*  For bg tables: IMAGE bits 0-6 = image #, bit 7 = table #
*
*-------------------------------
ADDMID ldx midX
 inx
 cpx #maxmid
 bcs ]rts

 sta midTYP,x

 lda XCO
 sta midX,x
 lda OFFSET
 sta midOFF,x

 lda YCO
 sta midY,x

 lda IMAGE
 sta midIMG,x

 lda TABLE
 sta midTAB,x

 lda FCharFace ;- left, + right
 eor #$ff ;+ normal, - mirror
 and #$80
 ora OPACITY
 sta midOP,x

 lda FCharCU
 sta midCU,x
 lda FCharCD
 sta midCD,x
 lda FCharCL
 sta midCL,x
 lda FCharCR
 sta midCR,x

 stx midX
]rts rts

*-------------------------------
*
*  ADDMID "E-Z" version
*
*  No offset, no mirroring, no cropping
*
*  In: XCO, YCO, IMAGE, TABLE, OPACITY
*      A = midTYP
*
*-------------------------------
ADDMIDEZ lda #0
 sta OFFSET
ADDMIDEZO
 ldx midX
 inx
 cpx #maxmid
 bcs ]rts

 sta midTYP,x

 lda XCO
 sta midX,x
 lda OFFSET
 sta midOFF,x

 lda YCO
 sta midY,x

 lda IMAGE
 sta midIMG,x

 lda TABLE
 sta midTAB,x

 lda OPACITY
 sta midOP,x

 lda #0
 sta midCU,x
 sta midCL,x
 lda #40
 sta midCR,x
 lda #192
 sta midCD,x

 stx midX
]rts rts

*-------------------------------
*
*  A D D P E E L
*
*  (Call immediately after layrsave)
*  Add newly generated image to peel list
*
*-------------------------------
ADDPEEL lda PEELIMG+1
 beq ]rts ;0 is layersave's signal to skip it

 lda PAGE
 beq :1

 do CopyProtect
 ldx purpleflag ;should be 1!
 lda dummy,x

 else
 lda #maxpeel
 fin

:1 sta :sm+1 ;self-mod

 tax
 lda peelX,x ;# of images in peel list
 clc
 adc #1
 cmp #maxpeel
 bcs ]rts
 sta peelX,x
 clc
:sm adc #0 ;0/maxpeel
 tax

 lda PEELXCO
 sta peelX,x
 lda PEELYCO
 sta peelY,x ;x & y coords of saved image

 lda PEELIMG
 sta peelIMGL,x
 lda PEELIMG+1
 sta peelIMGH,x ;2-byte image address (in peel buffer)

]rts rts

*-------------------------------
*
*  D R A W A L L
*
*  Draw everything in image lists
*
*  This is the only routine that calls HIRES routines.
*
*-------------------------------
DRAWALL
 jsr DOGEN ;Do general stuff like cls

 lda blackflag ;TEMP
 bne :1 ;

 jsr SNGPEEL ;"Peel off" characters
;(using the peel list we
;set up 2 frames ago)

:1 jsr ZEROPEEL ;Zero just-used peel list

 jsr DRAWWIPE ;Draw wipes

 jsr DRAWBACK ;Draw background plane images

 jsr DRAWMID ;Draw middle plane images
;(& save underlayers to now-clear peel list)

 jsr DRAWFORE ;Draw foreground plane images

 jmp DRAWMSG ;Draw messages

*-------------------------------
*
*  D O  G E N
*
*  Do general stuff like clear screen
*
*-------------------------------
DOGEN
 lda genCLS
 beq :1
 jsr cls

* purple copy-protection

:1 ldx BGset1
 cpx #1
 bne ]rts
 lda #0
 sta dummy-1,x

]rts rts

*-------------------------------
*
*  D R A W W I P E
*
*  Draw wipe list (using "fastblack")
*
*-------------------------------
DRAWWIPE
 lda wipeX ;# of images in list
 beq ]rts ;list is empty

 lda #1 ;start with image #1
:loop pha
 tax

 lda wipeH,x
 sta IMAGE ;height
 lda wipeW,x
 sta IMAGE+1 ;width
 lda wipeX,X
 sta XCO ;x-coord
 lda wipeY,X
 sta YCO ;y-coord
 lda wipeCOL,X
 sta OPACITY ;color
 jsr fastblack

 pla
 clc
 adc #1
 cmp wipeX
 bcc :loop
 beq :loop
]rts rts

*-------------------------------
*
*  D R A W B A C K
*
*  Draw b.g. list (using fastlay)
*
*-------------------------------
DRAWBACK lda bgX ;# of images in list
 beq ]rts

 ldx #1
:loop stx index

 lda bgIMG,x
 sta IMAGE ;coded image #
 jsr setbgimg ;extract TABLE, BANK, IMAGE

 lda bgX,x
 sta XCO
 lda bgY,X
 sta YCO
 lda bgOP,x
 sta OPACITY
 jsr fastlay

 ldx index
 inx
 cpx bgX
 bcc :loop
 beq :loop
]rts rts

*-------------------------------
*
*  D R A W F O R E
*
*  Draw foreground list (using fastmask/fastlay)
*
*-------------------------------
DRAWFORE lda fgX
 beq ]rts

 ldx #1
:loop stx index

 lda fgIMG,x
 sta IMAGE
 jsr setbgimg

 lda fgX,x
 sta XCO
 lda fgY,x
 sta YCO

 lda fgOP,x ;opacity
 cmp #mask
 bne :1
 jsr fastmask
 jmp :cont

:1 sta OPACITY ;fastlay for everything else
 jsr fastlay

:cont ldx index
 inx
 cpx fgX
 bcc :loop
 beq :loop
]rts rts

*-------------------------------
*
*  S N G   P E E L
*
*  Draw peel list (in reverse order) using "peel" (fastlay)
*
*-------------------------------
SNGPEEL
 ldx PAGE
 beq :1
 ldx #maxpeel
:1 stx :sm+1
 lda peelX,x ;# of images in list
 beq ]rts

:loop pha
 clc
:sm adc #0 ;self-mod: 0 or maxpeel
 tax

 lda peelIMGL,x
 sta IMAGE
 lda peelIMGH,x
 sta IMAGE+1
 lda peelX,x
 sta XCO
 lda peelY,x
 sta YCO
 lda #sta
 sta OPACITY
 jsr peel

 pla
 sec
 sbc #1
 bne :loop
]rts rts

*-------------------------------
*
*  D R A W M I D
*
*  Draw middle list (floorpieces & characters)
*
*-------------------------------
DRAWMID
 lda midX ;# of images in list
 beq ]rts

 ldx #1
:loop stx index

 lda midIMG,x
 sta IMAGE
 lda midTAB,x
 sta TABLE
 lda midX,x
 sta XCO
 lda midY,x
 sta YCO
 lda midOP,x
 sta OPACITY

 lda midTYP,x ;+ use bg tables
 bmi :UseChar ;- use char tables
 jsr setbgimg ;protects A,X
 jmp :GotTable

:UseChar jsr setcharimg ;protects A,X

:GotTable ;A = midTYP,x
 and #$7f ;low 7 bits: 0 = fastlay, 1 = lay, 2 = layrsave
 beq :fastlay
 cmp #1
 beq :lay
 cmp #2
 beq :layrsave

:Done ldx index
 inx
 cpx midX
 bcc :loop
 beq :loop
]rts rts

* midTYP values:
*    0 = use fastlay (normal for floorpieces)
*    1 = use lay alone
*    2 = use lay with layrsave (normal for characters)

:fastlay
 jsr fastlay
 jmp :Done

:layrsave
 jsr :setaddl ;set additional params for lay

 jsr layrsave ;save underlayer in peel buffer
 jsr ADDPEEL ;& add to peel list

 jsr lay ;then lay down image

 jmp :Done

:lay jsr :setaddl
 jsr lay
 jmp :Done

:setaddl lda midOFF,x
 sta OFFSET
 lda midCL,x
 sta LEFTCUT
 lda midCR,x
 sta RIGHTCUT
 lda midCU,x
 sta TOPCUT
 lda midCD,x
 sta BOTCUT
 rts

*-------------------------------
*
*  D R A W M S G
*
*  Draw message list (using bg tables & lay)
*
*  OPACITY bit 6: 1 = layrsave, 0 = no layrsave
*
*-------------------------------
DRAWMSG
 lda msgX
 beq ]rts

 ldx #1
:loop stx index

 lda msgIMG,x
 sta IMAGE
 jsr setbgimg

 lda msgX,x
 sta XCO
 lda msgOFF,x
 sta OFFSET
 lda msgY,x
 sta YCO

 lda #0
 sta LEFTCUT
 sta TOPCUT
 lda #40
 sta RIGHTCUT
 lda #192
 sta BOTCUT

 lda msgOP,x
 sta OPACITY
 and #%01000000
 beq :1
 lda OPACITY
 and #%10111111 ;bit 6 set: use layrsave
 sta OPACITY

 jsr layrsave
 jsr ADDPEEL

:1 jsr lay

 ldx index
 inx
 cpx msgX
 bcc :loop
 beq :loop
]rts rts

*-------------------------------
*
*  S E T   B  G   I M A G E
*
*  In: IMAGE = coded image #
*  Out: BANK, TABLE, IMAGE set for hires call
*
*  Protect A,X
*
*-------------------------------
setbgimg
 tay

 lda #3 ;auxmem
 sta BANK

 lda #0
 sta TABLE

 lda IMAGE ;Bit 7: 0 = bgtable1, 1 = bgtable2
 bpl :bg1

 and #$7f
 sta IMAGE

 lda #>bgtable2
 bne :ok

:bg1 lda #>bgtable1
:ok sta TABLE+1

 tya
 rts

*-------------------------------
*
*  S E T   C H A R   I M A G E
*
*  In: TABLE = chtable # (0-7)
*  Out: BANK, TABLE set for hires call
*
*  Protect A,X
*
*-------------------------------
setcharimg
 pha

 ldy TABLE
 lda chtabbank,y
 sta BANK

 lda #0
 sta TABLE
 lda chtablist,y
 sta TABLE+1

 pla
 rts

*-------------------------------
*
*  D I M C H A R
*
*  Get dimensions of character
*  (Misc. routine for use by CTRL)
*
*  In: A = image #, X = table #
*  Out: A = width, X = height
*
*-------------------------------
DIMCHAR
 sta IMAGE
 stx TABLE
 jsr setcharimg
 jmp getwidth

*-------------------------------
*
*  C V T X
*
*  Convert X-coord to byte & offset
*  Works for both single & double hires
*
*  In: XCO/OFFSET = X-coord (2 bytes)
*  Out: XCO/OFFSET = byte/offset
*
*  Hires scrn: X-coord range 0-279, byte range 0-39
*  Dbl hires scrn: X-coord range 0-559, byte range 0-79
*
*  Trashes Y-register
*
*  Returns accurate results for all input (-32767 to 32767)
*  but wildly offscreen values will slow it down
*
*-------------------------------
]XL = XCO
]XH = OFFSET

range = 36*7 ;largest multiple of 7 under 256

CVTX
 lda #0
 sta ]temp

 lda ]XH
 bmi :negative ;X < 0
 beq :ok ;0 <= X <= 255

:loop lda ]temp
 clc
 adc #36
 sta ]temp

 lda ]XL
 sec
 sbc #range
 sta ]XL

 lda ]XH
 sbc #0
 sta ]XH

 bne :loop

:ok ldy ]XL
 lda ByteTable,y
 clc
 adc ]temp
 sta XCO

 lda OffsetTable,y
 sta OFFSET
 rts

:negative
 lda ]temp
 sec
 sbc #36
 sta ]temp

 lda ]XL
 clc
 adc #range
 sta ]XL

 lda ]XH
 adc #0
 sta ]XH
 bne :negative
 beq :ok
]rts rts

*-------------------------------
*
*  Z E R O L I S T S
*
*  Zero image lists (except peel lists)
*
*-------------------------------
ZEROLSTS lda #0
 sta genCLS
 sta wipeX
 sta bgX
 sta midX
 sta objX
 sta fgX
 sta msgX
 rts

*-------------------------------
*
*  Zero both peel lists
*
*-------------------------------
ZEROPEELS
 lda #0
 sta peelX
 sta peelX+maxpeel
]rts rts

*-------------------------------
*
*  Z E R O P E E L
*
*  Zero peel list & buffer for whichever page we're on
*
*  (Point PEELBUF to beginning of appropriate peel buffer
*  & set #-of-images byte to zero)
*
*-------------------------------
ZEROPEEL
 lda #0
 ldx PAGE
 beq :page1
:page2 sta peelX+maxpeel
 lda #peelbuf2
 sta PEELBUF
 lda #>peelbuf2
 sta PEELBUF+1
 rts

:page1 sta peelX
 lda #peelbuf1
 sta PEELBUF
 lda #>peelbuf1
 sta PEELBUF+1
 rts

*-------------------------------
*
*  Joystick/keyboard routines
*
*-------------------------------
*
*  Get input from selected/deselected device
*
*  In: kbdX, kbdY, joyX, joyY, BTN0, BTN1, ManCtrl
*
*  Out: JSTKX, JSTKY, btn
*
*-------------------------------
GETSELECT
 lda joyon ;joystick selected?
 bne getjoy ;yes--use jstk
 beq getkbd ;no--use kbd

GETDESEL
 lda joyon
 bne getkbd
 beq getjoy

getjoy lda joyX
 sta JSTKX
 lda joyY
 sta JSTKY

 lda BTN1
 ldx ManCtrl ;When manual ctrl is on, btn 0 belongs
 bmi :1 ;to kbd and btn 1 to jstk.  With manual ctrl
 ora BTN0 ;off, btns can be used interchangeably.
:1 sta btn
 rts

getkbd lda kbdX
 sta JSTKX
 lda kbdY
 sta JSTKY

 lda BTN0
 ldx ManCtrl
 bmi :1
 ora BTN1
:1 sta btn
]rts rts

*-------------------------------
*
*  Read controller (jstk & buttons)
*
*  Out: joyX-Y, BTN0-1
*
*-------------------------------
CONTROLLER
 jsr JREAD ;read jstk

 jmp BREAD ;& btns

*-------------------------------
*
*  Read joystick
*
*  Out: joyX-Y
*
*  joyX: -1 = left, 0 = center, +1 = right
*  joyY: -1 = up, 0 = center, +1 = down
*
*-------------------------------
JREAD
 lda joyon
 beq ]rts
 jsr PREAD ;read game pots

 ldx #0
 jsr cvtpdl
 inx
 jsr cvtpdl

* Reverse joyY?

 lda jvert
 beq :1

 lda #0
 sec
 sbc joyY
 sta joyY

* Reverse joyX?

:1 lda jhoriz
 beq ]rts

 lda #0
 sec
 sbc joyX
 sta joyX
]rts rts

*-------------------------------
*
*  Read buttons
*
*  Out: BTN0-1
*
*-------------------------------
BREAD
 lda jbtns
 bne :1 ;buttons switched

 lda $c061
 ldx $c062
:2 sta BTN0
 stx BTN1
 rts

:1 ldx $c062
 lda $c061
 jmp :2

*-------------------------------
*
*  (Temp routine--for builder only)
*
*-------------------------------
BUTTONS
 do EditorDisk
 ldx BTN0 ;"raw"
 lda #0
 sta BUTT0
 lda b0down ;last button value
 stx b0down
 and #$80
 bne :rdbtn1
 stx BUTT0

:rdbtn1 ldx BTN1
 lda #0
 sta BUTT1
 lda b1down
 stx b1down
 and #$80
 bne :rdjup
 stx BUTT1

:rdjup lda joyY
 bmi ]rts
 lda #0
 sta JSTKUP ;jstk is not up--clear JSTKUP
 fin

]rts rts

*-------------------------------
*
*  Convert raw counter value (approx. 0-70) to -1/0/1
*
*  In: X = paddle # (0 = horiz, 1 = vert)
*
*-------------------------------
cvtpdl
 lda joyX,x
 cmp jthres1x,x
 bcs :1
 lda #-1
 bne :3
:1 cmp jthres2x,x
 bcs :2
 lda #0
 beq :3
:2 lda #1
:3 sta joyX,x
]rts rts

*-------------------------------
*
*  Read game pots
*
*  Out: Raw counter values (approx. 0-70) in joyX-Y
*
*-------------------------------
PREAD
 lda #0
 sta joyX
 sta joyY

 lda $c070 ;Reset timers

:loop ldx #1
:1 lda $c064,x ;Check timer input
 bpl :beat
 inc joyX,x ;Still high; increment counter
:nextpdl dex
 bpl :1

 lda $C064
 ora $C065
 bpl ]rts ;Both inputs low: we're done

 lda joyX
 ora joyY
 bpl :loop ;Do it again
]rts rts

:beat nop
 bpl :nextpdl ;Kill time

*-------------------------------
*
*  Select jstk & define current joystick posn as center
*
*  Out: jthres1-2x, jthres1-2y
*
*-------------------------------
SETCENTER
 jsr normspeed ;IIGS

 lda #$ff
 sta joyon ;Joystick on

 lda #0
 sta jvert
 sta jhoriz
 sta jbtns ;set normal params

 jsr PREAD ;get raw jstk values

 lda joyX
 ora joyY
 bmi :nojoy ;No joystick connected

 lda joyX
 sec
 sbc #cwidthx
 sta jthres1x
 lda joyX
 clc
 adc #cwidthx
 sta jthres2x

 lda joyY
 sec
 sbc #cwidthy
 sta jthres1y
 lda joyY
 clc
 adc #cwidthy
 sta jthres2y
 rts

:nojoy lda #0
 sta joyon
]rts rts

*-------------------------------
*
*  Move a block of memory
*
*  In: A < X.Y
*
*  20 < 40.60 means 2000 < 4000.5fffm
*  WARNING: If x >= y, routine will wipe out 64k
*
*-------------------------------
MOVEMEM sta ]dest+1
 stx ]source+1
 sty ]endsourc+1

 ldy #0
 sty ]dest
 sty ]source
 sty ]endsourc

:loop lda (]source),y
 sta (]dest),y
 iny
 bne :loop

 inc ]source+1
 inc ]dest+1
 lda ]source+1
 cmp ]endsourc+1
 bne :loop
 rts

*-------------------------------
*
*  G  T  O  N  E
*
*  Call this routine to confirm special-key presses
*  & any other time we want to bypass normal sound interface
*
*-------------------------------
SK1Pitch = 15
SK1Dur = 50

GTONE ldy #SK1Pitch
 ldx #>SK1Pitch
 lda #SK1Dur
 jmp tone

*-------------------------------
*
*  Whoop speaker (like RW18)
*
*-------------------------------
WHOOP
 ldy #0
:1 tya
 bit $c030
:2 sec
 sbc #1
 bne :2
 dey
 bne :1
]rts rts

*-------------------------------
*
*  Produce tone
*
*  In: y-x = pitch lo-hi
*      a = duration
*
*-------------------------------
tone
 sty :pitch
 stx :pitch+1
:outloop bit $c030
 ldx #0
:midloop ldy #0
:inloop iny
 cpy :pitch
 bcc :inloop
 inx
 cpx :pitch+1
 bcc :midloop
 sec
 sbc #1
 bne :outloop
 rts

:pitch ds 2

*-------------------------------
*
* Copy one hires page to the other
*
* In: PAGE = dest scrn (00/20)
*
*-------------------------------
COPYSCRN
 lda PAGE
 clc
 adc #$20
 sta IMAGE+1 ;dest addr
 eor #$60
 sta IMAGE ;org addr

 jmp copy2000

*-------------------------------
*
*  Generate random number
*
*  RNDseed := (5 * RNDseed + 23) mod 256
*
*-------------------------------
RND
 lda RNDseed
 asl
 asl
 clc
 adc RNDseed
 clc
 adc #23
 sta RNDseed
]rts rts

*-------------------------------
*
*  Calls to hires & master routines
*
*  Hires & master routines are in main lc & use main zp;
*  rest of code uses aux lc, zp.
*
*-------------------------------
*
*  Master
*
*-------------------------------
LOADLEVEL sta ALTZPoff ;main l.c.
 jsr _loadlevel
 sta ALTZPon ;aux l.c.
 rts

ATTRACTMODE sta ALTZPoff
 jsr _attractmode
 sta ALTZPon
 rts

CUTPRINCESS sta ALTZPoff
 jsr _cutprincess
 sta ALTZPon
 rts

RELOAD sta ALTZPoff
 jsr _reload
 sta ALTZPon
 rts

LOADSTAGE2 sta ALTZPoff
 jsr _loadstage2
 sta ALTZPon
 rts

SAVEGAME sta ALTZPoff
 jsr _savegame
 sta ALTZPon
 rts

LOADGAME sta ALTZPoff
 jsr _loadgame
 sta ALTZPon
 rts

DOSTARTGAME sta ALTZPoff
 jmp _dostartgame

EPILOG sta ALTZPoff
 jmp _epilog

LOADALTSET sta ALTZPoff
 jsr _loadaltset
 sta ALTZPon
 rts

SCREENDUMP sta ALTZPoff
 jsr _screendump
 sta ALTZPon
 rts

*-------------------------------
*
* Edmaster (editor disk only)
*
*-------------------------------
 do EditorDisk

SAVELEVEL sta ALTZPoff
 jsr _savelevel
 sta ALTZPon
 rts

SAVELEVELG sta ALTZPoff
 jsr _savelevelg
 sta ALTZPon
 rts

READDIR sta ALTZPoff
 jsr _readdir
 sta ALTZPon
 rts

WRITEDIR sta ALTZPoff
 jsr _writedir
 sta ALTZPon
 rts

GOBUILD sta ALTZPoff
 jsr _gobuild
 sta ALTZPon
 rts

GOGAME sta ALTZPoff
 jsr _gogame
 sta ALTZPon
 rts

EDREBOOT sta ALTZPoff
 jsr _edreboot
 sta ALTZPon
 rts

 else
SAVELEVEL
SAVELEVELG
READDIR
WRITEDIR
GOBUILD
GOGAME
EDREBOOT rts
 fin

*-------------------------------
*
*  Hires
*
*-------------------------------
CLS jsr prehr
 sta ALTZPoff
 jsr _cls
 sta ALTZPon
 rts

LAY jsr prehr
 sta ALTZPoff
 jsr _lay
 sta ALTZPon
 rts

FASTLAY jsr prehr
 sta ALTZPoff
 jsr _fastlay
 sta ALTZPon
 rts

LAYRSAVE jsr prehr
 sta ALTZPoff
 jsr _layrsave
 sta ALTZPon
 jmp posthr

LRCLS sta scrncolor ;In: A = screen color
 sta ALTZPoff
 jsr _lrcls
 sta ALTZPon
 rts

FASTMASK jsr prehr
 sta ALTZPoff
 jsr _fastmask
 sta ALTZPon
 rts

FASTBLACK jsr prehr
 sta ALTZPoff
 jsr _fastblack
 sta ALTZPon
 rts

PEEL jsr prehr
 sta ALTZPoff
 jsr _peel
 sta ALTZPon
 rts

GETWIDTH jsr prehr
 sta ALTZPoff
 jsr _getwidth
 sta ALTZPon
 rts

COPY2000 jsr prehr
 sta ALTZPoff
 jsr _copy2000
 sta ALTZPon
 rts

COPY2000AM jsr prehr
 sta ALTZPoff
 jsr _copy2000am
 sta ALTZPon
 rts

COPY2000MA jsr prehr
 sta ALTZPoff
 jsr _copy2000ma
 sta ALTZPon
 rts

SETFASTAUX
 sta ALTZPoff
 jsr _setfastaux
 sta ALTZPon
 rts

SETFASTMAIN
 sta ALTZPoff
 jsr _setfastmain
 sta ALTZPon
 rts

INVERTY
 sta ALTZPoff
 jsr _inverty
 sta ALTZPon
 rts

*-------------------------------
*
*  Call sound routines (in aux l.c. bank 1)
*  Exit with bank 2 switched in
*
*-------------------------------
]bank1in bit RWBANK1
 bit RWBANK1
 rts

MINIT jsr ]bank1in
 jsr CALLMINIT
]bank2in bit RWBANK2
 bit RWBANK2
 rts

MPLAY jsr ]bank1in
 jsr CALLMPLAY
 jmp ]bank2in

*-------------------------------
*
*  Call aux l.c. routines from MASTER (main l.c.)
*
*-------------------------------
XMINIT sta ALTZPon
 jsr MINIT
 sta ALTZPoff
 rts

XMPLAY sta ALTZPon
 jsr MPLAY
 sta ALTZPoff
 rts

XTITLE sta ALTZPon
 jsr titlescreen
 sta ALTZPoff
 rts

XPLAYCUT sta ALTZPon
 jsr playcut ;in subs
 sta ALTZPoff
 rts

XMOVEMUSIC sta ALTZPon
 jsr movemusic ;in misc
 sta ALTZPoff
 rts

*-------------------------------
*
* Copy hires params from aux to main z.p.
*
* (Enter & exit w/ ALTZP on)
*
*-------------------------------
prehr
 ldx #$17
:loop sta ALTZPon ;aux zp
 lda $00,x
 sta ALTZPoff ;main zp
 sta $00,x
 dex
 bpl :loop
 sta ALTZPon
 rts

*-------------------------------
*
* Copy hires params from main to aux z.p.
*
* (Enter & exit w/ ALTZP on)
*
*-------------------------------
posthr
 ldx #$17
:loop sta ALTZPoff
 lda $00,x
 sta ALTZPon
 sta $00,x
 dex
 bpl :loop
]rts rts

*-------------------------------
*
*  Save master copy of blueprint in l.c. bank 1
*
*-------------------------------
SAVEBLUE
 jsr ]bank1in
 lda #>$d700
 ldx #>$b700
 ldy #>$b700+$900
 jsr movemem
 jmp ]bank2in

SAVEBINFO
 jsr ]bank1in
 lda #>$d000
 ldx #>$a600
 ldy #>$a600+$600
 jsr movemem
 jmp ]bank2in

*-------------------------------
*
* Reload master copy of blueprint from l.c. bank 1
*
*-------------------------------
RELOADBLUE
 jsr ]bank1in
 lda #>$b700
 ldx #>$d700
 ldy #>$d700+$900
 jsr movemem
 jmp ]bank2in

RELOADBINFO
 jsr ]bank1in
 lda #>$a600
 ldx #>$d000
 ldy #>$d000+$600
 jsr movemem
 jmp ]bank2in

*-------------------------------
*
*  Display lo-res page 1
*
*-------------------------------
GR jmp gtone ;temp!

*-------------------------------
* The following routines properly belong to FRAMEADV
* but have been moved here for lack of space
*-------------------------------
*
*  C A L C   B L U E
*
*  Given:  screen #, 1-24 (in acc)
*  Return: start of BLUETYPE table (in BlueType)
*          start of BLUESPEC table (in BlueSpec)
*
*  If A = 0...
*    In game: returns garbage
*    In builder: returns menu data
*
*-------------------------------
CALCBLUE
 cmp #0
 beq calcmenu

 sec
 sbc #1 ;reduce to 0-23
 asl
 tax ;x2

 lda Mult30,x
 clc
 adc #blueprnt
 sta BlueType

 lda Mult30+1,x
 adc #>blueprnt
 sta BlueType+1

 lda BlueType
 clc
 adc #24*30
 sta BlueSpec

 lda BlueType+1
 adc #>24*30
 sta BlueSpec+1

]rts rts

calcmenu
 lda #menutype
 sta BlueType
 lda #>menutype
 sta BlueType+1

 lda #menuspec
 sta BlueSpec
 lda #>menuspec
 sta BlueSpec+1
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
 sta halfbuf,y
 sta wipebuf,y
 sta movebuf,y
 sta objbuf,y
 dey
 bpl :loop

 ldy #9
:loop2 sta topbuf,y
 dey
 bpl :loop2

 rts

*-------------------------------
*
*  Routines to interface with MSYS (Music System II)
*
*-------------------------------
*
* Switch zero page
*
*-------------------------------
switchzp
 ldx #31
:loop ldy savezp,x
 lda $00,x
 sta savezp,x
 tya
 sta $00,x
 dex
 bpl :loop
 rts

*-------------------------------
*
*  Call MINIT
*
*  In: A = song #
*
*-------------------------------
CALLMINIT
 pha
 jsr switchzp
 pla
 jsr _minit
 jmp switchzp

*-------------------------------
*
*  Call MPLAY
*
*  Out: A = song #
*  (Most songs set song # = 0 when finished)
*
*-------------------------------
CALLMPLAY
 lda soundon
 and musicon
 beq :silent

 jsr switchzp
 jsr _mplay ;returns INDEX
 pha
 jsr switchzp
 pla
 rts

:silent lda #0
]rts rts

*-------------------------------
*
*  M U S I C   K E Y S
*
*  Call while music is playing
*
*  Esc to pause, Ctrl-S to turn sound off
*  Return A = ASCII value (FF for button)
*  Clear hibit if it's a key we've handled
*
*-------------------------------
MUSICKEYS
 lda $c000
 sta keypress
 bpl :nokey
 sta $c010

 cmp #ESC
 bne :cont
:froze lda $c000
 sta keypress
 bpl :froze
 sta $c010
 cmp #ESC
 bne :cont
 and #$7f
 rts

:cont cmp #ksound
 bne :3
 lda soundon
 eor #1
 sta soundon
:21 beq :2
 jsr gtone
:2 lda #0
 rts

:3 cmp #kmusic
 bne :1
 lda musicon
 eor #1
 sta musicon
 jmp :21

:nobtn lda keypress
 rts
:1
:nokey lda $c061
 ora $c062
 bpl :nobtn
 lda #$ff
]rts rts

*===============================
vblflag ds 1
*-------------------------------
*
* Wait for vertical blank (IIe/IIGS)
*
*-------------------------------
VBLANK
:loop1 lda $c019
 bpl :loop1
:loop lda $c019
 bmi :loop ;wait for beginning of VBL interval
]rts rts

*-------------------------------
*
* Wait for vertical blank (IIc)
*
*-------------------------------
VBLANKIIc
 cli ;enable interrupts

:loop1 bit vblflag
 bpl :loop1 ;wait for vblflag = 1
 lsr vblflag ;...& set vblflag = 0

:loop2 bit vblflag
 bpl :loop2
 lsr vblflag

 sei
 rts

* Interrupt jumps to ($FFFE) which points back to VBLI

VBLI
 bit $c019
 sta $c079 ;enable IOU access
 sta $c05b ;enable VBL int
 sta $c078 ;disable IOU access
 sec
 ror vblflag ;set hibit
:notvbl rti

*-------------------------------
*
* Initialize VBLANK vector with correct routine
* depending on whether or not machine is IIc
*
*-------------------------------
InitVBLANK
 lda $FBC0
 bne ]rts ;not a IIc--use VBLANK

 sta RAMWRTaux

 lda #VBLANKIIc
 sta VBLvect+1
 lda #>VBLANKIIc
 sta VBLvect+2

 sei ;disable interrupts
 sta $c079 ;enable IOU access
 sta $c05b ;enable VBL int
 sta $c078 ;disable IOU access

]rts rts

*-------------------------------
*
*  Is this a IIGS?
*
*  Out: IIGS (0 = no, 1 = yes)
*       If yes, set control panel to default settings
*       Exit w/RAM bank 2 switched in
*
*  Also initializes VBLANK routine
*
*-------------------------------
CHECKIIGS
 do EditorDisk
 else

 bit USEROM
 bit USEROM

 lda $FBB3
 cmp #6
 bne * ;II/II+/III--we shouldn't even be here
 sec
 jsr $FE1F
 bcs :notGS

 lda #1
 bne :set

:notGS lda #0
:set sta IIGS

 jsr InitVBLANK

 bit RWBANK2
 bit RWBANK2
]rts rts

*-------------------------------
*
*  Temporarily set fast speed (IIGS)
*
*-------------------------------
 xc
FASTSPEED
 lda IIGS
 beq ]rts

 lda #$80
 tsb $C036 ;fast speed
]rts rts

*-------------------------------
*
* Restore speed to normal (& bg & border to black)
*
*-------------------------------
NORMSPEED
 lda IIGS
 beq ]rts

 xc
 lda $c034
 and #$f0
 sta $c034 ;black border

 lda #$f0
 sta $c022 ;black bg, white text

 lda #$80
 trb $c036 ;normal speed
 xc off

 rts

*-------------------------------
*
*  Read control panel parameter (IIGS)
*
*  In: Y = location
*  Out: A = current setting
*
*-------------------------------
 xc
 xc
getparam
 lda IIGS
 beq ]rts

 clc
 xce
 rep $30
 pha
 phy
 ldx #$0C03
 hex 22,00,00,E1 ;jsl E10000
 pla
 sec
 xce
 tay
 rts

*-------------------------------
*
* Set control panel parameter (IIGS only)
*
* In: A = desired value, Y = location
*
*-------------------------------
setparam
 clc
 xce
 rep $30
 and #$ff
 pha
 phy
 ldx #$B03
 hex 22,00,00,E1 ;jsl E10000
 sec
 xce
 rts

 xc off

*-------------------------------
 lst
eof ds 1
 usr $a9,4,$0000,*-org
 lst off