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
description: "This file defines key data tables and parameters for handling high-resolution graphics in Prince of Persia on the Apple II."

summary:
  - point: "Defines memory layout for high-resolution graphics tables"
    link: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    link_label: "Apple II Graphics"
  - point: "Includes lookup tables for shifting and masking pixel data"
    link: "https://en.wikipedia.org/wiki/Bitwise_operation"
    link_label: "Bitwise Operations"
  - point: "Optimized for 128K bank-switched memory constraints"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Supports cinematic animation techniques like rotoscoping"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Sets up parameters for sprite manipulation and rendering"
    link: "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"
    link_label: "Sprites"

enhancements:
  - id: "high-resolution-graphics-tables"
    line_start: 9
    line_end: 36
    title: "How Lookup Tables Made Graphics Fast"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "This section defines a series of lookup tables used for high-resolution graphics manipulation on the Apple II. The tables include pixel shift values (`SHIFT0` through `SHIFT6`), carry values (`CARRY0` through `CARRY6`), and masks (`MIRROR`, `MASKTAB`). These tables were essential for efficiently rendering sprites and animations within the constraints of the Apple II's limited graphics hardware. The Apple II's high-resolution mode allowed for 280x192 pixels, but manipulating individual pixels required precise bit-level operations due to the machine's 6-color palette and memory layout. By precomputing values for common operations like shifting and masking, Jordan Mechner reduced the computational overhead during runtime, enabling smoother animations and faster rendering. At the time, this approach was a clever workaround for the lack of dedicated graphics hardware. Mechner's use of lookup tables reflects the ingenuity required to push the Apple II's capabilities to their limits. This technique influenced later games on similar hardware, as developers increasingly relied on precomputed data to optimize performance. The tables also supported Mechner's rotoscoping-based animation, where smooth transitions between frames were critical. The lookup table approach became a staple in game development, appearing in titles like Karateka (Mechner's earlier work) and inspiring techniques in modern game engines for efficient rendering."
  - id: "sprite-manipulation-parameters"
    line_start: 45
    line_end: 62
    title: "The Parameters Behind Cinematic Animation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "This section defines parameters for sprite manipulation and rendering, including coordinates (`XCO`, `YCO`), offsets (`OFFSET`), image data (`IMAGE`), opacity (`OPACITY`), and cutting boundaries (`TOPCUT`, `LEFTCUT`, `RIGHTCUT`, `BOTCUT`). These parameters were used to control how sprites were drawn on the screen, allowing for precise placement, layering, and clipping. The Apple II's memory constraints meant that sprites had to be carefully managed to avoid exceeding the available 128K of RAM. Mechner's design ensured that animations could be displayed seamlessly, even as the player character interacted with complex environments. The inclusion of cutting boundaries allowed for partial rendering of sprites, a technique often used to handle collisions or edge cases where sprites overlapped the screen boundaries. These parameters also supported the game's cinematic style, where fluid character movement and dynamic environments were central to the experience. Mechner's attention to detail in defining these parameters helped establish Prince of Persia as a groundbreaking title in the cinematic platformer genre. The techniques developed here influenced later games, including Another World and Flashback, which similarly emphasized smooth animation and immersive environments. Mechner's work demonstrated how careful parameterization could overcome hardware limitations and deliver a visually compelling experience."

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
