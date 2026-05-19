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
description: "Memory tables and parameters for sprite handling in Prince of Persia (1989), a groundbreaking cinematic platformer."

summary:
  - point: "Defines memory tables for sprite manipulation"
    link: "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"
    link_label: "Sprite"
  - point: "Uses bank-switched memory techniques to fit within 128K"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Rotoscoping-inspired animation data structure"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"

enhancements:
  - id: "sprite-memory-tables"
    line_start: 9
    line_end: 38
    title: "Sprite Memory Tables: Precision in Motion"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "This section defines memory tables that underpin the sprite manipulation system in Prince of Persia. Each table, such as YLO, YHI, SHIFT0-6, and CARRY0-6, represents specific attributes or transformations applied to sprites during gameplay. For example, SHIFT tables likely handle pixel shifts for smooth animation, while CARRY tables manage overflow or carry operations during calculations. These tables are allocated in contiguous memory blocks, ensuring efficient access during runtime. In 1989, the Apple IIe/IIc hardware presented significant constraints. With only 128K of memory, developers had to carefully manage resources, often resorting to techniques like bank switching to access additional memory. Jordan Mechner, working solo, designed these tables to support the fluid, lifelike animations that defined Prince of Persia. His use of rotoscoping—tracing live-action footage frame by frame—required precise handling of sprite transformations to achieve cinematic realism. The impact of this design is profound. By structuring sprite data in this way, Mechner created a system that could handle complex animations on hardware with limited processing power. This approach influenced future platformers and animation systems, demonstrating that careful engineering could overcome hardware limitations. The sprite manipulation tables here are a testament to Mechner's ingenuity and the enduring legacy of Prince of Persia as a technical and artistic achievement."
  - id: "sprite-parameters"
    line_start: 45
    line_end: 64
    title: "Sprite Parameters: Building Cinematic Frames"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "This section defines individual parameters for sprite rendering, such as PAGE, XCO, YCO, OFFSET, IMAGE, OPACITY, and TABLE. These variables control the positioning, appearance, and behavior of sprites on the screen. For instance, XCO and YCO likely represent the sprite's coordinates, while OPACITY might manage transparency effects. IMAGE and TABLE point to the sprite's graphical data and associated lookup tables. In the late 1980s, sprite-based games were evolving rapidly, but achieving cinematic realism on the Apple IIe/IIc was a unique challenge. Mechner's rotoscoping technique required precise control over each frame of animation. These parameters allowed him to manipulate sprites dynamically, ensuring smooth transitions and lifelike movements. The inclusion of PEELBUF, PEELIMG, and PEELXCO hints at additional layers of sprite manipulation, possibly for handling overlapping or peeling effects during gameplay. The consequences of this design are far-reaching. By meticulously defining these parameters, Mechner laid the groundwork for sprite systems in future games. His approach demonstrated the potential of assembly language to create visually stunning experiences on limited hardware. The cinematic platformer genre owes much to the innovations seen in this section, as it enabled a new level of storytelling and immersion in video games."

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