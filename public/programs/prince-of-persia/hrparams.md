---
title: "HRPARAMS.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/HRPARAMS.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/HRPARAMS.S"
year: 1989
author: "Jordan Mechner"
slug: "hrparams"
order: 23
description: "Memory layout for sprite handling in Prince of Persia, defining tables and parameters for animation and rendering."

summary:
  - point: "Defines sprite-related memory tables for animation and rendering"
    link: "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"
    link_label: "Sprites"
  - point: "Uses bank-switched memory to fit within Apple II's 128K constraints"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank switching"
  - point: "Supports cinematic rotoscoped animation, a hallmark of Prince of Persia"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"

enhancements:
  - id: "sprite-memory-tables"
    line_start: 9
    line_end: 36
    title: "How Tables Made Sprites Move Smoothly"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "This section defines memory tables used for sprite manipulation and animation in Prince of Persia. Each table, such as `YLO`, `YHI`, `SHIFT0` through `SHIFT6`, and `CARRY0` through `CARRY6`, allocates specific memory regions for handling sprite positioning, shifting, and carry operations. These tables are essential for managing the complex movements and transitions of the game's rotoscoped characters. Jordan Mechner designed these tables to support smooth animation on the Apple II's limited hardware. In the mid-1980s, the Apple IIe and IIc were constrained by 128K of memory, split between main and auxiliary banks. Developers often employed bank-switching techniques to maximize available space. Mechner's approach here reflects careful planning to ensure sprite operations could be performed efficiently within these constraints. The use of dedicated tables for shifts and carries suggests a focus on optimizing calculations for sprite rendering, avoiding costly runtime computation. The cinematic animation style of Prince of Persia, achieved through rotoscoping, required precise control over sprite positioning and transitions. These tables were instrumental in enabling the fluidity of the protagonist's movements, from running and jumping to sword fighting. Mechner's work influenced later games that sought to replicate the cinematic platformer genre, such as Another World (1991) and Flashback (1992). The techniques demonstrated here also informed sprite handling in subsequent 2D game engines, laying groundwork for innovations in animation and rendering on constrained hardware."
  - id: "sprite-parameters"
    line_start: 45
    line_end: 64
    title: "The Parameters That Defined a Cinematic Hero"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "This section defines parameters for individual sprites, including `PAGE`, `XCO`, `YCO`, `OFFSET`, `IMAGE`, `OPACITY`, and `TABLE`. These variables control the position, appearance, and rendering behavior of sprites on the screen. Additional parameters like `PEELBUF`, `PEELIMG`, `PEELXCO`, and `PEELYCO` appear to support specific rendering operations, possibly related to layering or masking effects. In the Apple II era, memory management was a critical challenge. Each byte had to be allocated with precision, especially for graphics-heavy games like Prince of Persia. Mechner's parameter definitions reflect a deep understanding of the hardware's limitations and capabilities. By assigning single-byte or two-byte memory regions to key sprite attributes, he ensured efficient use of the Apple II's 128K memory while enabling the detailed control required for cinematic animation. These parameters were pivotal in realizing the game's rotoscoped animation style. By filming his brother performing the protagonist's movements and tracing each frame, Mechner created lifelike animations that were groundbreaking for the time. The parameters defined here allowed the game engine to translate these animations into smooth, responsive gameplay. This approach influenced not only the cinematic platformer genre but also the broader field of game animation. Developers studying Prince of Persia's techniques applied similar parameter-driven designs in later games, contributing to the evolution of sprite-based animation systems in 2D and early 3D games."

---

```asm
 tr on
* hrparams

hrtables = $e000
hrparams = $00
*-------------------------------
 dum hrtables

YLO ds $c0
YHI ds $c0

SHIFT0 ds $80
SHIFT1 ds $80
SHIFT2 ds $80
SHIFT3 ds $80
SHIFT4 ds $80
SHIFT5 ds $80
SHIFT6 ds $80

CARRY0 ds $80
CARRY1 ds $80
CARRY2 ds $80
CARRY3 ds $80
CARRY4 ds $80
CARRY5 ds $80
CARRY6 ds $80

MIRROR ds $80
MASKTAB ds $80

SHIFTL ds 7
SHIFTH ds 7
CARRYL ds 7
CARRYH ds 7
AMASKS ds 7
BMASKS ds 7

OPCODE ds 6

endtabs dend

*-------------------------------
 dum hrparams

PAGE ds 1
XCO ds 1
YCO ds 1
OFFSET ds 1
IMAGE ds 2
OPACITY ds 1
TABLE ds 2

PEELBUF ds 2
PEELIMG ds 2
PEELXCO ds 1
PEELYCO ds 1

TOPCUT ds 1
LEFTCUT ds 1
RIGHTCUT ds 1
BANK ds 1
BOTCUT ds 1

 dend

height = IMAGE
width = IMAGE+1
color = OPACITY

 lst off
```