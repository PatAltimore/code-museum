---
title: "SEQDATA.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/SEQDATA.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/SEQDATA.S"
year: 1989
author: "Jordan Mechner"
slug: "seqdata"
order: 26
description: "This file defines the animation sequences and instruction codes for Prince of Persia (1989), laying the groundwork for its groundbreaking cinematic platformer gameplay."

summary:
  - point: "Sequence table maps animations to gameplay states"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Rotoscoping-inspired animations are encoded as numerical identifiers"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Bank-switched memory constraints shaped the compact design"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"

enhancements:
  - id: "animation-sequence-table"
    line_start: 9
    line_end: 112
    title: "Mapping movements to cinematic animation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines the sequence table for Prince of Persia's animations, assigning numerical identifiers to each movement or action the protagonist can perform. From 'startrun' (1) to 'Mraise' (114), these entries map directly to gameplay states, allowing the game engine to trigger specific animations based on player input and environmental conditions. The table reflects Jordan Mechner's meticulous attention to detail, as he sought to create fluid, lifelike movement inspired by rotoscoping techniques. Mechner filmed his brother performing various actions, then traced the frames to achieve unprecedented realism for the Apple II. In 1989, the Apple IIe/IIc was nearing the end of its dominance, yet it remained a favorite among developers for its accessibility and installed user base. With only 128K of memory available, Mechner had to optimize every byte, using techniques like bank-switched memory to fit the game's complex animations and logic. The sequence table's compact design exemplifies this constraint-driven ingenuity, as each identifier serves as a pointer to pre-defined animation data stored elsewhere. The consequence of this design is profound. By encoding animations as numerical identifiers, Mechner created a modular system that could be reused and expanded in future games. This approach influenced later cinematic platformers and even modern game engines, where state-driven animation systems are standard. Mechner's work on Prince of Persia demonstrated that storytelling and gameplay could be seamlessly integrated, setting a benchmark for narrative-driven games."
  - id: "instruction-code-table"
    line_start: 114
    line_end: 130
    title: "Instruction codes: compact gameplay logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/6502_assembly_language"
    image_url: ""
    image_caption: ""
    content: "The instruction codes defined here represent the logic behind the animation sequences. Each code, from 'goto' (-1) to 'nextlevel' (-15), corresponds to a specific action or condition that the game engine interprets during runtime. For example, 'goto' directs the sequence to jump to another animation, while 'die' triggers the protagonist's death animation. These codes act as a bridge between the player's input, the game's environment, and the animations defined earlier. In the mid-1980s, programming for the Apple II required developers to think economically. The 6502 assembly language, while powerful, demanded concise and efficient coding practices due to the limited memory and processing power of the hardware. Mechner's use of negative integers for instruction codes is a clever workaround to distinguish them from positive animation identifiers, ensuring the game engine could parse them quickly and reliably. This compact logic system allowed Prince of Persia to achieve a level of interactivity and responsiveness that was groundbreaking for its time. The modularity of these codes also made it easier to debug and refine the gameplay during development. Today, similar systems are found in state machines used by modern game engines, showing how Mechner's design choices have endured and evolved over decades."

---

 tr on
 lst off

* seqdata

fcheckmark = %01000000
fcentermark = %00011111

*  Sequence table entry points

startrun = 1
stand = 2
standjump = 3
runjump = 4
turn = 5
runturn = 6
stepfall = 7
jumphangMed = 8
hang = 9
climbup = 10
hangdrop = 11
freefall = 12
runstop = 13
jumpup = 14
fallhang = 15
jumpbackhang = 16
softland = 17
jumpfall = 18
stepfall2 = 19
medland = 20
rjumpfall = 21
hardland = 22
hangfall = 23
jumphangLong = 24
hangstraight = 25
rdiveroll = 26
sdiveroll = 27
highjump = 28
stepfwd1 = 29
;stepfwd 1 thru 14 = 29 thru 42
turnrun = 43
testfoot = 44
bumpfall = 45
hardbump = 46
bump = 47
superhijump = 48
standup = 49
stoop = 50
impale = 51
crush = 52
deadfall = 53
halve = 54
engarde = 55
advance = 56
retreat = 57
strike = 58
flee = 59
turnengarde = 60
strikeblock = 61
readyblock = 62
landengarde = 63
bumpengfwd = 64
bumpengback = 65
blocktostrike = 66
strikeadv = 67
climbdown = 68
blockedstrike = 69
climbstairs = 70
dropdead = 71
stepback = 72
climbfail = 73
stabbed = 74
faststrike = 75
strikeret = 76
alertstand = 77
drinkpotion = 78
crawl = 79
alertturn = 80
fightfall = 81
efightfall = 82
efightfallfwd = 83
running = 84
stabkill = 85
fastadvance = 86
goalertstand = 87
arise = 88
turndraw = 89
guardengarde = 90
pickupsword = 91
resheathe = 92
fastsheathe = 93
Pstand = 94
Vstand = 95
Vapproach = 96
Vstop = 97
Palert = 98
Pback = 99
Vexit = 100
Mclimb = 101
Vraise = 102
Plie = 103
patchfall = 104
Mscurry = 105
Mstop = 106
Mleave = 107
Pembrace = 108
Pwaiting = 109
Pstroke = 110
Prise = 111
Pcrouch = 112
Pslump = 113
Mraise = 114

* Sequence table instruction codes

goto = -1
aboutface = -2
up = -3
down = -4
chx = -5
chy = -6
act = -7
setfall = -8
ifwtless = -9
die = -10
jaru = -11
jard = -12
effect = -13
tap = -14
nextlevel = -15

 lst off