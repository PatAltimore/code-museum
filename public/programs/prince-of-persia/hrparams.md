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
description: "A foundational data structure for cinematic animation in Prince of Persia (1989)"

summary:
  - point: "Defines memory layout for animation tables"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Uses bank-switched memory to fit within 128K"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Rotoscoping-inspired animation parameters"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"

enhancements:
  - id: "animation-data-structure-foundation"
    line_start: 1
    line_end: 40
    title: "Animation tables: the game's visual heartbeat"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The first section of this file defines the memory layout for animation tables, a critical component of Prince of Persia's groundbreaking visuals. Each `ds` directive reserves memory for specific arrays, such as `SHIFT0` through `SHIFT6` and `CARRY0` through `CARRY6`, which likely store data for sprite positioning and movement. These tables are essential for managing the fluid, lifelike animations that became the hallmark of the game. In 1989, the Apple IIe and IIc were constrained by 128K of memory, requiring clever techniques like bank switching to fit complex programs. Jordan Mechner, working solo, designed these tables to optimize memory usage while supporting cinematic animation. The rotoscoping technique—tracing live-action footage frame by frame—demanded precise control over sprite rendering, which these tables facilitated. Mechner filmed his brother performing the protagonist's moves, then translated those into data structures like these. This memory layout reflects the constraints and ingenuity of programming for the Apple II. The 6502 assembly language provided direct control over hardware but required meticulous planning to avoid exceeding memory limits. Mechner's approach here laid the groundwork for the game's fluid animations, which influenced platformers and cinematic games for decades. The significance of these tables extends beyond Prince of Persia. They represent a moment when technical limitations inspired creative solutions, shaping the evolution of game design. The techniques pioneered here—efficient memory management, precise animation control—became foundational in an era when every byte mattered."
  - id: "animation-parameters-for-rotoscoping"
    line_start: 43
    line_end: 70
    title: "Parameters for cinematic sprite rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "The second section of this file defines parameters for sprite rendering, such as `PAGE`, `XCO`, `YCO`, and `IMAGE`. These variables control the position, dimensions, and appearance of sprites on the screen, enabling the cinematic platforming experience that Prince of Persia pioneered. The `PEELBUF` and `PEELIMG` parameters suggest mechanisms for handling sprite layers or peeling effects, adding depth to the visuals. In the mid-1980s, sprite rendering was a technical challenge on systems like the Apple II. The hardware lacked dedicated graphics processors, so every visual effect had to be carefully orchestrated in software. Mechner's rotoscoping technique demanded precise control over sprite placement and movement, which these parameters provide. The inclusion of `TOPCUT`, `LEFTCUT`, `RIGHTCUT`, and `BOTCUT` hints at clipping mechanisms to manage sprite boundaries, ensuring smooth transitions and avoiding graphical glitches. These parameters reflect Mechner's meticulous attention to detail. By defining these variables in a centralized structure, he ensured that the game's animations could be adjusted and optimized without rewriting large portions of code. This modular approach was ahead of its time, anticipating practices that would become standard in later game development. The legacy of these parameters is evident in the cinematic platformers that followed. Games like Another World and Flashback built on the foundation Mechner established, pushing the boundaries of storytelling and animation in gaming. The careful planning visible in this code demonstrates how technical constraints can inspire innovation, leading to timeless works of art."

---

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