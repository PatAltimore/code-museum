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
description: "This file defines key constants and parameters for object types and movement in Prince of Persia, laying the groundwork for its cinematic platforming mechanics."

summary:
  - point: "Defines object types using symbolic constants for readability and modularity"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Specifies movement parameters for environmental hazards like spikes and slicers"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II hardware"
  - point: "Uses compact memory representation to fit within the constraints of 128K bank-switched memory"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank switching"

enhancements:
  - id: "object-type-symbolic-constants"
    line_start: 4
    line_end: 37
    title: "A dictionary of dangers and scenery"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines symbolic constants for the various object types in Prince of Persia, ranging from environmental hazards like spikes and slicers to decorative elements like torches and windows. Each object is assigned a unique numeric value, making the code more readable and easier to maintain. Jordan Mechner, working solo on this project, was designing for the Apple IIe/IIc, a machine with just 128K of memory and bank-switching to access auxiliary storage. These constants allowed him to modularize object handling, ensuring that each type could be referenced efficiently in the game's logic. In 1985, when Mechner began development, the Apple II was already a mature platform, but its limitations were stark. Developers had to squeeze every ounce of functionality into a tiny memory footprint. Mechner's use of symbolic constants reflects a broader trend in assembly programming at the time: balancing human readability against machine efficiency. The objects defined here would later be animated using rotoscoping, a technique Mechner pioneered by filming his brother performing the game's moves and tracing the frames. This cinematic approach was groundbreaking for a platformer. These constants form the backbone of the game's environmental logic, enabling dynamic interactions like collapsing floors, retracting spikes, and opening gates. The modularity they provide influenced later games, where symbolic constants became standard practice for defining game objects. Without this careful groundwork, the fluidity and complexity of Prince of Persia's gameplay might have been impossible to achieve on the Apple II."
  - id: "hazard-movement-parameters"
    line_start: 40
    line_end: 51
    title: "Timing the traps: spikes and slicers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines timing parameters for environmental hazards like spikes and slicers. Constants such as `spikeExt` and `spikeRet` determine the frames at which spikes extend and retract, while similar values control slicer behavior. These hazards were integral to Prince of Persia's challenge, requiring players to master precise timing and movement. In the mid-1980s, the Apple II's 6502 processor offered limited computational power, and developers had to rely on clever tricks to simulate complex behaviors. Mechner's approach here is a testament to his ingenuity: by defining these parameters upfront, he could ensure consistent hazard behavior across the game's levels without hardcoding individual trap timings. This modularity was crucial for a solo developer working under tight constraints. The timing mechanics introduced here would go on to influence countless platformers, where environmental hazards became a staple of level design. Mechner's work set a precedent for using simple numerical parameters to control complex game dynamics, a technique still in use today. These constants also highlight the game's cinematic roots; the traps’ movements were designed to feel fluid and lifelike, enhancing the sense of immersion. Without this attention to detail, Prince of Persia might not have achieved its reputation as the first cinematic platformer."
  - id: "gravity-movement-parameters"
    line_start: 54
    line_end: 57
    title: "Defining gravity: the fall begins"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This brief section sets parameters for gravity and movement, including `gmaxval` and `gminval`, which define the range of values for vertical movement. The constant `Ffalling` marks the first frame of the falling animation, tying gravity to the game's cinematic presentation. Gravity was a critical element in Prince of Persia's gameplay, as the protagonist's movements had to feel fluid and realistic. Mechner's decision to define these parameters reflects his focus on creating a believable world within the constraints of the Apple II's hardware. The 6502 processor lacked floating-point arithmetic, so all calculations had to be performed using integers, making these constants essential for simulating gravity. In the broader context of 1980s game development, gravity was often implemented as a simple downward force, but Mechner's approach was more nuanced. By tying gravity to animation frames, he ensured that the character's movements felt natural, a key aspect of the game's cinematic style. This attention to detail influenced later platformers, where realistic physics became a hallmark of the genre. Mechner's work here demonstrates how even small decisions, like defining gravity parameters, can have a lasting impact on game design."

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