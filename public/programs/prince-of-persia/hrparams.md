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
description: "This file defines hardware parameters and lookup tables for sprite manipulation in Prince of Persia, enabling cinematic animations on constrained Apple II hardware."

summary:
  - point: "Defines memory tables for sprite transformations"
    link: "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"
    link_label: "Sprite Graphics"
  - point: "Uses bank-switched memory to fit within 128K"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Optimized for Apple IIe/IIc hardware constraints"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II Series"

enhancements:
  - id: "sprite-transformation-tables"
    line_start: 6
    line_end: 40
    title: "How Lookup Tables Made Animation Fast"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "This section defines a series of memory tables used for sprite transformations, including shifts, carries, mirrors, and masks. These tables are essential for manipulating sprite graphics efficiently on the Apple II, which lacked dedicated graphics hardware. By precomputing values for operations like shifting and masking, the game could perform complex transformations in real-time without taxing the 6502 CPU. In the mid-1980s, the Apple IIe/IIc was a popular home computer, but its graphics capabilities were limited to a 280x192 resolution with a restricted color palette. Developers had to rely on clever software techniques to achieve smooth animations. Jordan Mechner, working solo on Prince of Persia, designed these tables to support the game's cinematic platforming style, where fluid character movement was paramount. The use of lookup tables for sprite manipulation was not unique to Prince of Persia but was a hallmark of efficient programming on constrained systems. Mechner's implementation, however, was tailored to the game's rotoscoped animations, which required precise pixel-level transformations. This approach influenced later games on similar hardware, such as Karateka (also by Mechner) and other early platformers. It also demonstrated the power of precomputed data in real-time graphics, a technique still used in modern game engines for tasks like lighting and physics calculations."
  - id: "hardware-parameters-for-sprites"
    line_start: 42
    line_end: 64
    title: "The Parameters Behind Cinematic Sprites"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "This section defines hardware parameters for sprite manipulation, including coordinates (XCO, YCO), offsets, image references, opacity, and memory banks. These parameters act as the interface between the game's logic and the Apple II hardware, enabling dynamic sprite rendering and animation. In the late 1980s, programming for the Apple II required intimate knowledge of its memory architecture, including bank switching and the use of auxiliary memory. Mechner's design reflects this expertise, with parameters like BANK and OFFSET facilitating access to different memory regions. The inclusion of cut parameters (TOPCUT, LEFTCUT, etc.) suggests optimization for partial sprite rendering, a technique to save processing time by only drawing visible portions of a sprite. These hardware parameters were critical for achieving the smooth, lifelike animations that defined Prince of Persia. They allowed the game to manage sprite data efficiently, even within the constraints of a 128K memory limit. This approach influenced subsequent games on the Apple II and other systems with similar limitations, showcasing how careful parameter design could unlock new levels of graphical fidelity. Modern game engines continue to use similar abstractions for sprite and texture management, albeit on vastly more powerful hardware."

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