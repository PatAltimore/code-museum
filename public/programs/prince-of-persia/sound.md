---
title: "SOUND.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/SOUND.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/SOUND.S"
year: 1989
author: "Jordan Mechner"
slug: "sound"
order: 1
description: "The sound system for Prince of Persia (1989), showcasing Jordan Mechner's ingenuity in crafting cinematic audio on constrained Apple II hardware."

summary:
  - point: "Self-modifying code used for sound playback"
    link: "https://en.wikipedia.org/wiki/Self-modifying_code"
    link_label: "Self-modifying code"
  - point: "Lookup table maps sound effects to routines"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup table"
  - point: "Direct manipulation of Apple II speaker hardware"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Routines for cinematic sound effects tied to gameplay events"
    link: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    link_label: "Cinematic platformer"
  - point: "Efficient sound generation using pitch and duration parameters"
    link: "https://en.wikipedia.org/wiki/Sound_synthesis"
    link_label: "Sound synthesis"

enhancements:
  - id: "sound-lookup-table"
    line_start: 30
    line_end: 55
    title: "Mapping gameplay events to sound effects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Electronic_Dream_Plant_Wasp_Synthesizer.jpg/330px-Electronic_Dream_Plant_Wasp_Synthesizer.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Electronic Dream Plant Wasp Synthesizer (CC BY-SA 2.5)"
    content: "This section defines the lookup table that maps gameplay events to specific sound routines. Each entry in the table corresponds to a sound effect, such as the clang of a gate hitting the floor or the crack of a mirror. The table is implemented using `dw` (define word) instructions, which store the memory addresses of the sound routines. In the late 1980s, lookup tables were a common technique for efficient data retrieval, especially in resource-constrained environments like the Apple II. Jordan Mechner used this approach to ensure that sound effects could be triggered quickly during gameplay without complex logic. The table's design reflects the cinematic ambitions of Prince of Persia, where sound effects were tightly integrated with visual and gameplay events to enhance immersion. This method of organizing sound routines would later influence similar systems in other games, demonstrating the lasting impact of Mechner's work."
  - id: "zero-sound-table"
    line_start: 64
    line_end: 67
    title: "Clearing the sound table for new events"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_synthesis"
    image_url: ""
    image_caption: ""
    content: "The `ZEROSOUND` routine is a simple yet essential function that clears the sound table by setting the number of sounds to zero. This ensures that the table is ready to accept new sound effects during gameplay. The Apple II's limited memory required careful management of resources, and routines like this were critical for maintaining performance. By resetting the sound table, Mechner could dynamically adapt the audio experience to the player's actions, a key feature of the game's cinematic style. This approach highlights the meticulous attention to detail required to create immersive experiences on early hardware."
  - id: "add-sound-to-table"
    line_start: 79
    line_end: 91
    title: "Adding sound effects dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_synthesis"
    image_url: ""
    image_caption: ""
    content: "The `ADDSOUND` routine allows the game to dynamically add sound effects to the sound table during gameplay. It first checks if the table is full, ensuring that new sounds do not overwrite existing ones. If there is space, the sound effect is added to the table, and the number of sounds is updated. This routine demonstrates the constraints of working within the Apple II's limited memory, where dynamic allocation and careful bookkeeping were necessary to manage resources effectively. Mechner's design reflects his ability to balance technical limitations with the need for a rich and responsive audio experience, a hallmark of Prince of Persia's groundbreaking approach to game design."
  - id: "playback-sound-table"
    line_start: 100
    line_end: 118
    title: "Sequencing sound effects for gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_synthesis"
    image_url: ""
    image_caption: ""
    content: "The `PLAYBACK` routine is responsible for playing all the sounds listed in the sound table. It checks if sound is enabled and if the table contains any entries, then iterates through the table to play each sound using the `makesound` subroutine. This design reflects the cinematic aspirations of Prince of Persia, where sound effects were carefully timed to enhance the drama of gameplay. The routine's efficiency was crucial given the Apple II's limited processing power, ensuring that audio playback did not interfere with the game's smooth animation and controls. Mechner's use of a sound table and playback loop showcases his ingenuity in creating a responsive audio system within the constraints of 1980s hardware."
  - id: "self-modifying-code-for-sound"
    line_start: 127
    line_end: 140
    title: "Self-modifying code for sound playback"
    wikipedia_url: "https://en.wikipedia.org/wiki/Self-modifying_code"
    image_url: ""
    image_caption: ""
    content: "The `makesound` routine employs self-modifying code to dynamically jump to the appropriate sound routine based on the sound number. After calculating the address of the routine using the lookup table, the code modifies itself to replace the placeholder jump instruction (`jmp $ffff`) with the actual address. Self-modifying code was a daring technique, often used in assembly programming to optimize performance on systems with limited resources. On the Apple II, where every byte and cycle mattered, this approach allowed Mechner to implement a flexible and efficient sound system. While self-modifying code is rarely used today due to its complexity and potential for errors, it was a testament to the ingenuity required to push the boundaries of early computing hardware."
  - id: "tone-generation"
    line_start: 331
    line_end: 352
    title: "Generating tones with direct hardware control"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_synthesis"
    image_url: ""
    image_caption: ""
    content: "The `tone` routine generates sound by directly manipulating the Apple II's speaker hardware at address `$c030`. It uses nested loops to create a waveform based on pitch and duration parameters passed in registers. This low-level approach reflects the constraints of the Apple II, which lacked dedicated sound hardware and required programmers to interact directly with the speaker. Mechner's implementation is both efficient and flexible, allowing a wide range of tones to be produced for different gameplay events. The routine's simplicity belies its importance in creating the immersive audio experience that defined Prince of Persia's cinematic style. By working within the limitations of the Apple II, Mechner demonstrated how creativity and technical skill could transform hardware constraints into artistic achievements."

---

* sound
org = $ea00
 lst off
*-------------------------------
*
*   S  O  U  N  D
*
*-------------------------------
 org org

 jmp PLAYBACK

*-------------------------------
savex ds 1

spkr = $c030

*-------------------------------
 put soundnames
 put gameeq
 put eq

*-------------------------------
*
*  L O O K U P
*
*  Sound routine lookup table
*
*-------------------------------
lookup

:0 dw DoPlateDown
:1 dw DoPlateUp
:2 dw DoGateDown
:3 dw DoSpecialKey1
:4 dw DoSpecialKey2
:5 dw DoSplat
:6 dw DoMirrorCrack
:7 dw DoLooseCrash
:8 dw DoGotKey
:9 dw DoFootstep
:10 dw DoRaisingExit
:11 dw DoRaisingGate
:12 dw DoLowerGate
:13 dw DoSmackWall
:14 dw DoImpaled
:15 dw DoGateSlam
:16 dw DoFlashMsg
:17 dw DoSwordClash1
:18 dw DoSwordClash2
:19 dw DoJawsClash

endlook

maxaddr = endlook-lookup

*-------------------------------
*
*  Z E R O S O U N D
*
*  Zero sound table
*
*-------------------------------
ZEROSOUND
 lda #0 ;# sounds in table
 sta soundtable
 rts

*-------------------------------
*
*  A D D S O U N D
*
*  Add sound to sound table
*  (preserve registers)
*
*  In: A = sound #
*
*-------------------------------
ADDSOUND
 stx savex

 ldx soundtable
 cpx #maxsfx
 bcs :rts ;sound table full

 inx
 sta soundtable,x
 stx soundtable ;# sounds in table

:rts ldx savex
 rts

*-------------------------------
*
*  P L A Y B A C K
*
*  Playback all sounds listed in sound table
*
*-------------------------------
PLAYBACK
 lda soundon
 beq :rts ;sound switched off?

 ldx soundtable
 beq :rts ;sound table empty?

:loop lda soundtable,x

 stx savex

 jsr makesound ;make sound #A
;(may destroy registers)
 ldx savex

 dex
 bne :loop

:rts rts

*-------------------------------
*
*  M A K E S O U N D
*
*  In: A = sound # (0-127)
*
*-------------------------------
makesound
 asl
 cmp #maxaddr
 bcs :rts ;don't exceed lookup table

 tax
 lda lookup,x
 sta :sm+1
 lda lookup+1,x
 sta :sm+2

:sm jmp $ffff ;self-modifying code

:rts rts

*-------------------------------
*
*  S O U N D   R O U T I N E S
*
*-------------------------------
* Kid steps on pressplate

DoPlateDown
 ldy #70
 ldx #0
 lda #4
 jmp tone

*-------------------------------
* Pressplate pops back up

DoPlateUp
 ldy #90
 ldx #0
 lda #4
 jmp tone

*-------------------------------
* Gate hits stone floor with an ominous CLANG

DoGateDown
 ldy #70
 ldx #0
 lda #4
 jmp tone

*-------------------------------
* Jaws clash

DoJawsClash
 ldy #10
 ldx #0
 lda #50
 jmp tone

*-------------------------------
* Acknowledge special keypress

SK1Pitch = 15
SK1Dur = 50

SK2Pitch = 40
SK2Dur = 50

DoSpecialKey1
DoSwordClash1
DoSwordClash2
 ldy #SK1Pitch
 ldx #>SK1Pitch
 lda #SK1Dur
 jmp tone

DoSpecialKey2
 ldy #SK2Pitch
 ldx #>SK2Pitch
 lda #SK2Dur
 jmp tone

*-------------------------------
* Splat

SplatPitch = 1000
SplatDur = 3

DoSplat
 ldy #SplatPitch
 ldx #>SplatPitch
 lda #SplatDur
 jmp tone

*-------------------------------
* Mirror Crack

DoMirrorCrack
 jmp DoSplat
 rts

*-------------------------------
* Loose Floor Crash

DoLooseCrash
 jmp DoSplat

*-------------------------------
* Flash message

]HiPitch = 100
]HiDur = 25
]LoPitch = 500
]LoDur = 15

DoGotKey
DoFlashMsg
 lda #2
:loop pha

 ldy #]LoPitch
 ldx #>]LoPitch
 lda #]LoDur
 jsr tone

 ldy #]HiPitch
 ldx #>]HiPitch
 lda #]HiDur
 jsr tone

 pla
 sec
 sbc #1
 bne :loop

 rts

*-------------------------------
* Footstep

DoFootstep
 ldy #35
 ldx #0
 lda #3
 jmp tone

*-------------------------------
* Raising Exit

DoRaisingExit
 ldy #40
 ldx #0
 lda #6
 jmp tone

*-------------------------------
* Raising Gate

DoRaisingGate
 ldy #20
 ldx #0
 lda #2
 jmp tone

*-------------------------------
* Lowering Gate

DoLowerGate
 ldy #7
 ldx #0
 lda #8
 jmp tone

*-------------------------------
* Smack Wall

SWPitch = 1000
SWDur = 3

DoSmackWall
 ldy #SWPitch
 ldx #>SWPitch
 lda #SWDur
 jmp tone

]rts rts

*-------------------------------
* Impaled

DoImpaled
 jmp DoSmackWall

*-------------------------------
* Gate Slam

DoGateSlam
 jmp DoSmackWall


*-------------------------------
*
*  T O N E
*
*  In: y-x = pitch lo-hi
*      a = duration
*
*-------------------------------
tone
 sty :pitch
 stx :pitch+1

:outloop bit spkr

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
 lst
eof ds 1
 usr $a9,20,$e00,*-org
 lst off