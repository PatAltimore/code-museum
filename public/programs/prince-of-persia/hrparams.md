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
description: "This file defines key tables and parameters for handling sprite rendering and animation in Prince of Persia's Apple II version."

summary:
  - point: "Defines memory tables for sprite manipulation"
    link: "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"
    link_label: "Sprite Graphics"
  - point: "Uses bank-switched memory to fit within 128K constraints"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Supports cinematic animation via rotoscoping techniques"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Optimized for Apple II hardware limitations"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II Series"
  - point: "Introduces modular design for sprite rendering parameters"
    link: "https://en.wikipedia.org/wiki/Modular_programming"
    link_label: "Modular Programming"

enhancements:
  - id: "sprite-rendering-tables"
    line_start: 6
    line_end: 40
    title: "Sprite rendering tables: modular memory layout"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "This section defines memory tables used for sprite rendering in Prince of Persia. The tables include arrays for vertical and horizontal positions (`YLO`, `YHI`), shift values (`SHIFT0` to `SHIFT6`), carry values (`CARRY0` to `CARRY6`), and masks (`MIRROR`, `MASKTAB`). These tables are essential for calculating sprite positions, handling animation frames, and applying transformations like mirroring. The modular design allows efficient access to sprite-related data, which is critical given the Apple II's limited memory and processing power. In the mid-1980s, the Apple IIe and IIc were popular home computers, but their hardware imposed strict constraints: a 1 MHz 6502 processor and 128K of memory (with bank-switching to access auxiliary memory). Jordan Mechner, working solo, had to design systems that maximized performance within these limitations. The tables here are laid out in contiguous blocks to simplify addressing and reduce the overhead of calculations during gameplay. This modular approach to sprite rendering influenced later games on constrained hardware, where similar table-driven designs were used to optimize performance. The techniques seen here can be traced forward to games like Another World (1991), which also emphasized cinematic animation and relied on efficient memory layouts to achieve its visual style. Mechner's work on Prince of Persia demonstrated how careful planning of data structures could enable complex animations on hardware that seemed incapable of such feats."
  - id: "sprite-parameters-definition"
    line_start: 42
    line_end: 64
    title: "Sprite parameters: defining animation attributes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "This section defines parameters for individual sprites, such as their position (`XCO`, `YCO`), image data (`IMAGE`), opacity (`OPACITY`), and memory bank (`BANK`). These parameters are the building blocks for rendering and animating sprites in Prince of Persia. For example, `IMAGE` points to the sprite's graphical data, while `OFFSET` adjusts its position on the screen. The `PEELBUF` and `PEELIMG` parameters appear to support double-buffering or temporary storage for sprite manipulation. Jordan Mechner developed Prince of Persia using rotoscoping techniques, where he filmed his brother performing movements and traced the frames to create realistic animations. These parameters are designed to support the smooth transitions and dynamic movements that define the game's cinematic platforming style. On the Apple II, achieving such fluidity required precise control over sprite attributes and efficient memory management. The modular definition of sprite parameters here influenced later game engines, particularly those designed for 2D animation. Games like Flashback (1992) and early versions of the GameMaker engine adopted similar practices for handling sprite attributes. Mechner's approach also prefigured modern animation systems, where attributes like opacity and position are manipulated programmatically to create dynamic effects. His work demonstrates how careful parameterization can unlock creative possibilities even on limited hardware."

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