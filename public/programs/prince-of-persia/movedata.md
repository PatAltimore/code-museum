---
title: "MOVEDATA.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/MOVEDATA.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/MOVEDATA.S"
year: 1989
author: "Jordan Mechner"
slug: "movedata"
order: 25
description: "Defines object types and movement parameters for Prince of Persia's cinematic platforming gameplay."

summary:
  - point: "Object type constants map gameplay elements to numeric identifiers."
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"
  - point: "Movement parameters establish physics-like rules for spikes and slicers."
    link: "https://en.wikipedia.org/wiki/Physics_engine"
    link_label: "Physics engine"
  - point: "Bank-switched memory enables fitting complex animations into limited hardware."
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank switching"

enhancements:
  - id: "object-type-definitions"
    line_start: 4
    line_end: 37
    title: "Mapping gameplay objects to numeric constants"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines constants for the various objects and environmental features in Prince of Persia, such as 'spikes', 'gate', 'torch', and 'sword'. Each object is assigned a numeric identifier, which is used throughout the game's code to reference and manipulate these elements. Jordan Mechner designed this system to simplify object management in a memory-constrained environment. By using numeric constants, the program can efficiently store and retrieve information about objects without requiring verbose descriptions or complex data structures. In 1989, the Apple IIe/IIc hardware imposed severe limitations, including a maximum of 128K memory and a 1 MHz processor. Mechner's approach reflects the ingenuity required to work within these constraints. The numeric identifiers allow quick lookups and compact storage, essential for a game with cinematic animations and detailed environments. Mechner's background in film influenced his focus on creating a visually immersive experience, which required careful optimization of every byte. This technique became a standard in game development, influencing how later games structured their internal object representations. Numeric constants for object types are still common in modern game engines, such as Unity and Unreal Engine, where they serve as identifiers for prefabs and assets. Mechner's work on Prince of Persia demonstrated how thoughtful design could overcome hardware limitations, paving the way for more ambitious games on constrained platforms."
  - id: "movement-parameters"
    line_start: 40
    line_end: 57
    title: "Defining physics-like movement parameters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Physics_engine"
    image_url: ""
    image_caption: ""
    content: "This section establishes movement parameters for specific gameplay elements, such as spikes and slicers, as well as general values like 'falling' frames. These parameters dictate how objects behave during gameplay, simulating physics-like interactions. For example, 'spikeExt' and 'spikeRet' define the extension and retraction states of spikes, while 'slicerExt' and 'slicerRet' control the slicer's motion. The 'Ffalling' constant marks the first frame of the falling animation, ensuring smooth transitions between states. In the late 1980s, physics engines were not yet a standard feature in games. Developers like Mechner had to manually encode movement rules and animations to create believable interactions. The Apple II's hardware constraints meant that every calculation had to be efficient, with no room for unnecessary complexity. Mechner's approach combines pre-defined constants with clever programming to achieve dynamic and responsive gameplay. The principles established here influenced the development of physics engines in later games. The idea of defining states and transitions for objects became a cornerstone of game design, appearing in titles like Another World (1991) and Flashback (1992), which also emphasized cinematic gameplay. Today, modern engines like Unity and Unreal automate much of this process, but the foundational concepts remain rooted in the work of early pioneers like Mechner."

---

 tr on
 lst off

* movedata
*-------------------------------
* objnames

space = 0
floor = 1
spikes = 2
posts = 3
gate = 4
dpressplate = 5 ;down
pressplate = 6 ;up
panelwif = 7 ;w/floor
pillarbottom = 8
pillartop = 9
flask = 10
loose = 11
panelwof = 12 ;w/o floor
mirror = 13
rubble = 14
upressplate = 15
exit = 16
exit2 = 17
slicer = 18
torch = 19
block = 20
bones = 21
sword = 22
window = 23
window2 = 24
archbot = 25
archtop1 = 26
archtop2 = 27
archtop3 = 28
archtop4 = 29

*-------------------------------
* misc. values from BGDATA

torchLast = 17
bubbLast = 8

spikeExt = 5
spikeRet = 9

slicerExt = 2
slicerRet = 6

Ffalling = 10 ;1st "falling" frame

*-------------------------------
* moveparams

gmaxval = 47*4
gminval = 0

 lst off