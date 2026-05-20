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
description: "Sequence data definitions for Prince of Persia's cinematic animations"

summary:
  - point: "Defines animation sequences for every character action"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Uses compact numerical codes to fit within memory constraints"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II hardware"
  - point: "Rotoscoping-inspired animations mapped to sequence IDs"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"

enhancements:
  - id: "sequence-table-entry-points"
    line_start: 9
    line_end: 112
    title: "The Animation Table That Made It Cinematic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines the sequence table for Prince of Persia's animations, mapping each character action to a numerical ID. These IDs are used throughout the game to trigger specific animations, such as running, jumping, hanging, or fighting. The table includes 114 entries, covering both player and enemy actions, as well as environmental interactions like climbing stairs or drinking potions. Jordan Mechner designed these sequences to bring a fluid, lifelike quality to the game's movement, inspired by his use of rotoscoping. By filming his brother performing the game's actions and tracing the frames, Mechner created animations that felt cinematic and realistic—a stark contrast to the rigid, blocky movements typical of games in the mid-1980s. The numerical codes allowed the animations to be referenced efficiently in the game's logic, a necessity given the Apple II's limited memory and processing power. In 1989, the Apple IIe/IIc was nearing the end of its commercial life, but it remained a popular platform for developers who had mastered its quirks. Memory constraints were a constant challenge, and Mechner's use of compact numerical codes exemplifies the ingenuity required to fit complex games into 128KB of RAM. The sequence table also reflects the game's emphasis on storytelling and character-driven gameplay, a departure from the arcade-style design that dominated earlier Apple II titles. This approach influenced later cinematic platformers, such as Another World (1991) and Flashback (1992), which similarly prioritized fluid animation and narrative depth. Mechner's work also set a precedent for using rotoscoping in games, a technique later adopted by studios like Blizzard Entertainment for titles such as Diablo II. The sequence table remains a testament to how technical constraints can inspire creative solutions, shaping the evolution of game design."
  - id: "sequence-table-instruction-codes"
    line_start: 114
    line_end: 130
    title: "Compact Codes for Complex Character Logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines instruction codes for controlling character behavior in Prince of Persia. Each code represents a specific action or condition, such as 'goto' (-1) for jumping to another sequence, 'up' (-3) for climbing, or 'die' (-10) for triggering a death animation. These codes are used in conjunction with the sequence table to manage transitions between animations and handle game logic. The Apple II's 6502 processor required developers to think carefully about efficiency, as every byte of memory and every CPU cycle mattered. By encoding instructions as compact numerical values, Jordan Mechner streamlined the game's logic, enabling complex behaviors to be implemented within the constraints of the hardware. This design also made it easier to debug and modify the game's behavior, as each instruction was clearly defined and reusable across multiple sequences. In the late 1980s, game developers were experimenting with ways to create more dynamic and responsive characters. Mechner's instruction codes contributed to this effort by enabling nuanced control over animations and interactions. The codes reflect his background as both a programmer and a filmmaker, combining technical precision with an understanding of cinematic storytelling. This system influenced the development of scripting languages and state machines in later games, providing a foundation for more sophisticated character AI and animation systems. Modern game engines like Unity and Unreal use similar concepts to manage animation states and transitions, demonstrating the lasting impact of Mechner's work on game design. The instruction codes also highlight the ingenuity required to overcome hardware limitations, a recurring theme in the history of early video game development."

---

```asm
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
```
