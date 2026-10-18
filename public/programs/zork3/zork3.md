---
title: "zork3.zil"
program: "Zork III"
program_slug: "zork3"
file_path: "zork3.zil"
language: "ZIL (Zork Implementation Language)"
github_url: "https://github.com/historicalsource/zork3/blob/master/zork3.zil"
year: 1982
author: "Blank, Lebling, Daniels, Anderson"
slug: "zork3"
order: 1
description: "The top-level file: it sets the game number to 3 and includes the nine files that make up the shipped game."

summary:
  - point: "ZORK-NUMBER 3 selects Zork III's branch in every conditional of the shared library"
    link: "https://en.wikipedia.org/wiki/Zork_III"
    link_label: "Zork III"
  - point: "Seven of the nine included files are the generic library; only 3dungeon and 3actions are Zork III's own"
    link: "https://en.wikipedia.org/wiki/Infocom"
    link_label: "Infocom"

enhancements:
  - id: "game-number"
    line_start: 1
    line_end: 20
    title: "One Number Picks the Game"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_III"
    image_url: ""
    image_caption: ""
    content: "The header names the game 'Zork III: The Dungeon Master' with a 1982 copyright, a year earlier than Zork II's file. SETG ZORK-NUMBER 3 is the decisive line, because the generic files test that value when they compile and keep only the branch for the right game. SNAME evidently names the story 'ZORK3'. As in the Zork II top file, REDEFINE and the WBREAKS line prepare the compiler, and the banner printed during the build calls this a 'Renovated' Zork III, which fits a game rebuilt on the shared trilogy library. PREDGEN and FREQUENT-WORDS? are the same build-time directives as in the Zork II file, and the repository's zork3freq.xzap suggests the second one writes a table of frequent words."
  - id: "include-list"
    line_start: 22
    line_end: 34
    title: "Nine Files and Three Defaults"
    wikipedia_url: "https://en.wikipedia.org/wiki/Infocom"
    image_url: ""
    image_caption: ""
    content: "INSERT-FILE brings in the generic syntax, macros, clock, main loop and parser first, then 3DUNGEON, then the generic globals and verbs, and finally 3ACTIONS, the long file of Zork III's puzzles. The order differs a little from Zork II, which put the dungeon and globals before the clock and left the PROPDEF defaults in the middle. Here the three PROPDEF lines, giving every object a default SIZE of 5 and a CAPACITY and VALUE of 0, come last. The 3-files hold everything that is about this game alone, from the Royal Puzzle to the final test. The rest of the repository, including eleven files that this list does not include, shows what the game looked like earlier in 1982."
---

```lisp
"ZORK3 for
		     Zork III: The Dungeon Master
	(c) Copyright 1982 Infocom, Inc.  All Rights Reserved."

<SETG ZORK-NUMBER 3>

<SNAME "ZORK3">

<SET REDEFINE T>

<OR <GASSIGNED? ZILCH>
    <SETG WBREAKS <STRING !\" !,WBREAKS>>>

<PRINC "Renovated ZORK III: The Dungeon Master
">

<COND (<GASSIGNED? PREDGEN>
       <ID 0>)>

<FREQUENT-WORDS?>

<INSERT-FILE "GSYNTAX" T>
<INSERT-FILE "GMACROS" T>
<INSERT-FILE "GCLOCK" T>
<INSERT-FILE "GMAIN" T>
<INSERT-FILE "GPARSER" T>
<INSERT-FILE "3DUNGEON" T>
<INSERT-FILE "GGLOBALS" T>
<INSERT-FILE "GVERBS" T>
<INSERT-FILE "3ACTIONS" T>

<PROPDEF SIZE 5>
<PROPDEF CAPACITY 0>
<PROPDEF VALUE 0>
```
