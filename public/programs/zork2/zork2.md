---
title: "zork2.zil"
program: "Zork II"
program_slug: "zork2"
file_path: "zork2.zil"
language: "ZIL (Zork Implementation Language)"
github_url: "https://github.com/historicalsource/zork2/blob/master/zork2.zil"
year: 1981
author: "Blank, Lebling, Daniels, Anderson"
slug: "zork2"
order: 1
description: "The top-level file: it sets the game number to 2 and includes the shared library and the Zork II files in order."

summary:
  - point: "Setting ZORK-NUMBER to 2 selects Zork II's branch of every conditional in the shared files"
    link: "https://en.wikipedia.org/wiki/Zork_II"
    link_label: "Zork II"
  - point: "The game is assembled by including ten files in a fixed order"
    link: "https://en.wikipedia.org/wiki/Infocom"
    link_label: "Infocom"
  - point: "Three property defaults are declared between the includes"
    link: "https://en.wikipedia.org/wiki/Z-machine"
    link_label: "Z-machine"

enhancements:
  - id: "game-number"
    line_start: 1
    line_end: 13
    title: "One Switch Selects the Game"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "The first lines are the whole identity of this game. The header calls it 'Zork II: The Wizard of Frobozz' and carries a 1983 copyright, which fits the 'Renovated' banner printed a few lines later: this is Zork II as rebuilt on the shared trilogy library. SETG ZORK-NUMBER 2 is the key line. The generic files gmain, gparser, gglobals and gsyntax contain conditionals that test this value when they are compiled, so Zork I, II and III could share them. SET REDEFINE T lets later definitions replace earlier ones. The lines using WBREAKS add the double quote to the set of word-break characters when the code is not being run under the ZILCH compiler, which has a similar effect to the SIBREAKS setting in the parser."
  - id: "banner-and-frequent-words"
    line_start: 15
    line_end: 21
    title: "A Banner for the Compiler"
    wikipedia_url: "https://en.wikipedia.org/wiki/Infocom"
    image_url: ""
    image_caption: ""
    content: "The PRINC form prints a line to the programmer's terminal while the game is being built, not to the player. The test on PREDGEN, a variable that exists only in certain build environments, calls ID with zero. FREQUENT-WORDS? is a compile-time directive; the repository contains a file called zork2freq.xzap, which suggests that it drives the table of frequent words used to compress the game's text. That matters because Zork II's descriptions and replies are a large share of the story file, and the Z-machine stores text in a compressed form with a short abbreviation table. Choosing the most frequent words by analysis of the actual text was an automated way to make the whole game fit in memory."
  - id: "include-order"
    line_start: 23
    line_end: 36
    title: "Ten Files Make One Game"
    wikipedia_url: "https://en.wikipedia.org/wiki/Z-machine"
    image_url: ""
    image_caption: ""
    content: "INSERT-FILE pulls each source file into the compilation in order. Macros come first, because later files use TELL and VERB?. The syntax table is next, then the Zork II dungeon of rooms and objects, then the shared globals, then the clock, the main loop, the parser and the default verbs. Game-specific action routines in 2actions come last, so that they can refer to everything defined before. The three PROPDEF lines in the middle set the default values for the SIZE, CAPACITY and VALUE properties of objects, so an object that does not mention them still has a weight of five, no capacity and no treasure value. Files prefixed with g are the generic library; files prefixed with 2 belong to this game alone. Copying a previous game's directory and changing the 2-files is how Infocom built each new title."
---

```lisp
"ZORK2 for
	        Zork II: The Wizard of Frobozz
	(c) Copyright 1983 Infocom, Inc.  All Rights Reserved."

ON!-INITIAL
OFF!-INITIAL

<SETG ZORK-NUMBER 2>

<SET REDEFINE T>

<OR <GASSIGNED? ZILCH>
    <SETG WBREAKS <STRING !\" !,WBREAKS>>>

<PRINC "Renovated ZORK II: The Wizard of Frobozz
">

<COND (<GASSIGNED? PREDGEN>
       <ID 0>)>

<FREQUENT-WORDS?>

<INSERT-FILE "GMACROS" T>
<INSERT-FILE "GSYNTAX" T>
<INSERT-FILE "2DUNGEON" T>
<INSERT-FILE "GGLOBALS" T>

<PROPDEF SIZE 5>
<PROPDEF CAPACITY 0>
<PROPDEF VALUE 0>

<INSERT-FILE "GCLOCK" T>
<INSERT-FILE "GMAIN" T>
<INSERT-FILE "GPARSER" T>
<INSERT-FILE "GVERBS" T>
<INSERT-FILE "2ACTIONS" T>
```
