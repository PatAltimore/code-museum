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
description: "Sound effects system for Prince of Persia on the Apple II, showcasing clever sound synthesis and memory-efficient design."

summary:
  - point: "Self-modifying code for dynamic sound playback"
    link: "https://en.wikipedia.org/wiki/Self-modifying_code"
    link_label: "Self-modifying code"
  - point: "Lookup table for sound routines optimized for 6502 assembly"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup table"
  - point: "Efficient sound synthesis using minimal hardware resources"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II hardware"
  - point: "Bank-switched memory to fit complex routines in limited space"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank switching"
  - point: "Cinematic sound effects enhancing the immersive platformer experience"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"

enhancements:
  - id: "sound-routine-lookup-table"
    line_start: 23
    line_end: 51
    title: "The Lookup Table That Mapped Sound to Action"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "This section defines a lookup table mapping sound routines to specific game events. Each entry in the table corresponds to a subroutine that generates a unique sound effect, such as the clang of a gate or the clash of swords. The table is indexed by sound numbers, allowing the program to quickly jump to the appropriate routine during gameplay. In the mid-1980s, memory constraints were a major challenge for developers working on the Apple II, which had only 128KB of RAM. Jordan Mechner designed this table to minimize the overhead of sound management, ensuring that the game could deliver a rich auditory experience without consuming excessive resources. Lookup tables were a common technique in assembly programming, as they provided a fast and efficient way to access data or routines. This approach influenced later game development by demonstrating how to optimize sound effects in resource-limited environments. Similar techniques appeared in other cinematic platformers and even early RPGs, where sound played a crucial role in creating immersive worlds. The concept of mapping actions to sound effects became standard practice, eventually evolving into more sophisticated audio engines in modern games."
  - id: "zero-sound-initialization"
    line_start: 57
    line_end: 67
    title: "How Zeroing the Sound Table Prevented Chaos"
    wikipedia_url: "https://en.wikipedia.org/wiki/Initialization_(programming)"
    image_url: ""
    image_caption: ""
    content: "The ZEROSOUND routine initializes the sound table by setting the number of sounds to zero. This ensures that no residual data from previous gameplay sessions interferes with the current sound playback. By clearing the table at the start, the program avoids potential bugs or unintended behaviors caused by leftover sound entries. In the 1980s, developers often had to write their own initialization routines because hardware and software environments lacked robust memory management. Mechner's careful attention to initialization reflects the meticulous programming required to make complex games run smoothly on the Apple II. The routine is simple but essential, highlighting the importance of clean state management in assembly programming. This technique remains relevant today, as initializing data structures is a fundamental practice in programming. While modern languages automate much of this process, the principle of ensuring a clean slate before execution continues to be a cornerstone of reliable software development."
  - id: "add-sound-to-table"
    line_start: 69
    line_end: 91
    title: "The Routine That Made Sounds Modular"
    wikipedia_url: "https://en.wikipedia.org/wiki/Modular_programming"
    image_url: ""
    image_caption: ""
    content: "ADDSOUND allows new sound effects to be added to the sound table dynamically during gameplay. It checks whether the table is full, increments the sound count, and stores the sound number in the table. This modular approach enables the game to manage a variety of sound effects without hardcoding them into the main program logic. In the Apple II era, modular programming was a forward-thinking concept. By separating sound management into distinct routines, Mechner made it easier to update or expand the game's audio capabilities. This design also helped conserve memory, as only active sounds were stored in the table. The modularity demonstrated here influenced later game audio systems, which adopted similar principles to manage sound libraries. Modern engines like Unity and Unreal use modular audio components to handle complex soundscapes, a direct evolution of techniques pioneered in games like Prince of Persia."
  - id: "playback-sound-table"
    line_start: 93
    line_end: 118
    title: "How Prince of Persia Played Sounds in Sequence"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_effect"
    image_url: ""
    image_caption: ""
    content: "The PLAYBACK routine iterates through the sound table and plays each sound listed. It checks whether sound is enabled and whether the table is empty before entering a loop that calls the makesound routine for each sound number. This ensures that all queued sounds are played in sequence, creating a cohesive auditory experience. In the context of 1980s gaming, sound playback was often limited by hardware constraints. The Apple II's speaker was a simple device, and generating complex sound effects required clever programming. Mechner's routine demonstrates how to maximize the capabilities of basic hardware, delivering a cinematic experience that complemented the game's visual storytelling. Sequential sound playback became a standard feature in later games, influencing the design of audio engines that handle layered sound effects and dynamic music. The ability to queue and play sounds in order laid the groundwork for more advanced systems that synchronize audio with gameplay events."
  - id: "self-modifying-code-for-sound"
    line_start: 120
    line_end: 140
    title: "The Self-Modifying Code That Made Sounds Dynamic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Self-modifying_code"
    image_url: ""
    image_caption: ""
    content: "The makesound routine uses self-modifying code to dynamically jump to the appropriate sound routine based on the sound number. It calculates the address of the routine from the lookup table and modifies the jump instruction to point to that address. This technique allows the program to handle a wide range of sound effects without hardcoding each jump. Self-modifying code was a controversial but ingenious solution to the limitations of early hardware. On the Apple II, where memory and processing power were scarce, this approach enabled dynamic behavior that would otherwise be difficult to implement. Mechner's use of self-modifying code reflects his deep understanding of the 6502 architecture and his willingness to push its boundaries. While self-modifying code is rarely used in modern programming due to security concerns and the availability of better alternatives, it remains an important historical technique. It influenced the development of dynamic dispatch mechanisms in object-oriented programming and inspired creative solutions in other resource-constrained environments."
  - id: "tone-generation-routine"
    line_start: 323
    line_end: 357
    title: "The Algorithm That Synthesized Sound on the Apple II"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_synthesis"
    image_url: ""
    image_caption: ""
    content: "The tone routine generates sound by toggling the Apple II's speaker at specific intervals. It calculates the pitch and duration from input parameters and uses nested loops to produce the desired sound frequency. The routine directly interacts with the hardware, demonstrating the low-level programming required to create audio effects on early computers. Sound synthesis on the Apple II was a challenging task due to the simplicity of its speaker, which could only produce square wave tones. Mechner's routine exemplifies the ingenuity of 1980s developers, who had to write efficient algorithms to achieve complex results. By carefully timing the speaker toggles, he created a wide range of sound effects that enhanced the game's atmosphere. This approach influenced the design of sound synthesis algorithms in later games and music software. While modern systems use advanced techniques like digital signal processing, the principles of frequency and duration manipulation remain foundational. Mechner's work on Prince of Persia helped establish the importance of sound in creating immersive gaming experiences."

---

```asm
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
```