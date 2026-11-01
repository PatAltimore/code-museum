---
title: "vers.c"
program: "Rogue"
program_slug: "rogue"
file_path: "vers.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/vers.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "vers-c"
order: 32
description: "The version strings, and the two key strings for the save-file cipher."

summary:
  - point: "The version number is checked when a save is loaded, so an old save is refused"
    link: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    link_label: "Rogue"
  - point: "The cipher keys sit beside the version number in the source"
    link: "https://en.wikipedia.org/wiki/XOR_cipher"
    link_label: "XOR cipher"

enhancements:
  - id: "vers-header"
    line_start: 1
    line_end: 11
    title: "Why the Keys Live Here"
    wikipedia_url: "https://en.wikipedia.org/wiki/Source_Code_Control_System"
    image_url: ""
    image_caption: ""
    content: "The header comment explains the file's odd purpose. A new version number was meant to be made by checking vers.c out of SCCS, the source control system of the day. The cipher key encstr is declared here so that it is loaded into memory before the version number, which means, as the comment has it, that it is not written into saved games."
  - id: "version-strings"
    line_start: 14
    line_end: 17
    title: "Release, Keys and Version"
    wikipedia_url: "https://en.wikipedia.org/wiki/XOR_cipher"
    image_url: ""
    image_caption: ""
    content: "release is the version of the program, '5.4.4'. encstr and statlist are the two key strings for the XOR cipher of save.c, written as byte values in octal escapes. version is the string that goes at the front of every save file: 'rogue (rogueforge) 09/05/07'. restore compares it with the one it reads back, so a save made by any other build is refused as out of date."
---

```c
/*
 * Version number.  Whenever a new version number is desired, use sccs
 * to get vers.c.  encstr is declared here to force it to be loaded
 * before the version number, and therefore not to be written in saved
 * games.
 *
 * Rogue: Exploring the Dungeons of Doom
 * Copyright (C) 1980-1983, 1985, 1999 Michael Toy, Ken Arnold and Glenn Wichman
 * All rights reserved.
 *
 * See the file LICENSE.TXT for full copyright and licensing information.
 */

char *release = "5.4.4";
char encstr[] = "\300k||`\251Y.'\305\321\201+\277~r\"]\240_\223=1\341)\222\212\241t;\t$\270\314/<#\201\254";
char statlist[] = "\355kl{+\204\255\313idJ\361\214=4:\311\271\341wK<\312\321\213,,7\271/Rk%\b\312\f\246";
char version[] = "rogue (rogueforge) 09/05/07";
```
