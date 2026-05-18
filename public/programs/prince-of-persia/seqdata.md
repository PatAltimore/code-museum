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
description: "The sequence data file for Prince of Persia (1989) defines the animations and behaviors that bring the game's cinematic platforming to life."

summary:
  - point: "Defines animation sequence entry points for character actions"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Uses compact numeric identifiers to fit in memory constraints of the Apple II"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II series"
  - point: "Rotoscoping-inspired animation sequences are mapped to specific actions"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"

enhancements:
  - id: "sequence-entry-points"
    line_start: 9
    line_end: 112
    title: "Mapping cinematic moves to memory-efficient codes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section of the file defines numeric identifiers for each animation sequence in Prince of Persia. From 'startrun' to 'Mraise,' these codes correspond to specific character actions, such as running, jumping, climbing, and fighting. Each identifier is mapped to a unique number, enabling the game engine to reference and execute animations efficiently. Jordan Mechner, working solo on the Apple II's limited hardware, needed to fit complex gameplay into just 128KB of memory. By using compact numeric codes, he ensured that the animation system could operate within these constraints. In 1985, when Mechner began development, the Apple IIe and IIc were among the most popular home computers, but their hardware was far from forgiving. The 6502 processor offered only 8-bit instructions, and memory was bank-switched to access auxiliary storage. Every byte mattered, and Mechner's decision to use numeric codes reflects the ingenuity required to create a cinematic experience on such limited hardware. His rotoscoping technique, where he filmed his brother performing moves and traced each frame, added realism to the animations. These sequences were then encoded into the game, creating fluid and lifelike motion. The consequence of this design decision is profound. Mechner's approach to animation and memory management influenced not only Prince of Persia but also the broader genre of cinematic platformers. Games like Another World and Flashback borrowed heavily from his techniques, and the use of compact identifiers for animation sequences remains a standard practice in game development today. This section of code is a testament to how creativity and technical constraints can converge to produce groundbreaking results."
  - id: "instruction-codes"
    line_start: 114
    line_end: 130
    title: "Instruction codes for dynamic gameplay transitions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The instruction codes defined here provide the logic for transitioning between animation sequences. Each code, such as 'goto,' 'aboutface,' or 'die,' represents a specific action or condition that alters the game's state. These instructions act as the connective tissue between animations, enabling the character to respond dynamically to player input and environmental changes. In the mid-1980s, game developers faced significant challenges in creating responsive gameplay on limited hardware. The Apple II's 6502 assembly language required developers to think in terms of low-level operations, often working directly with memory addresses and processor registers. Mechner's instruction codes encapsulate these operations into a higher-level abstraction, making it easier to manage complex interactions like jumping, climbing, or fighting. This design choice reflects Mechner's dual role as both programmer and storyteller. By creating a system where animations could transition seamlessly, he ensured that the game's cinematic quality was preserved. The instruction codes also highlight the game's modularity, allowing for easy expansion or modification of sequences—a feature that would prove useful in later ports and adaptations. The legacy of these instruction codes is evident in modern game development. The concept of state-based transitions between animations is now a standard feature in game engines like Unity and Unreal. Mechner's work on Prince of Persia laid the groundwork for these advancements, demonstrating that even on constrained hardware, it was possible to create gameplay that felt fluid and immersive."

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