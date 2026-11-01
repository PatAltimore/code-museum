---
title: "score.h"
program: "Rogue"
program_slug: "rogue"
file_path: "score.h"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/score.h"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "score-h"
order: 4
description: "The layout of one scoreboard entry and the two functions that read and write the table."

summary:
  - point: "The scoreboard is a fixed array of records in a file"
    link: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    link_label: "Rogue"

enhancements:
  - id: "score-entry"
    line_start: 13
    line_end: 26
    title: "One Line of the Top Ten"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "A scoreboard entry holds the player's user id, score, flags that say how the game ended, the monster that killed them, their name, the level reached and a time. rd_score and wr_score read and write the whole top-ten table at once. Because the entry is a plain C struct, the file is a binary dump of it. Keeping the record fixed is what lets a program at the start of the game read the whole table in one call."
---

```c
/*
 * Score file structure
 *
 * @(#)score.h	4.6 (Berkeley) 02/05/99
 *
 * Rogue: Exploring the Dungeons of Doom
 * Copyright (C) 1980-1983, 1985, 1999 Michael Toy, Ken Arnold and Glenn Wichman
 * All rights reserved.
 *
 * See the file LICENSE.TXT for full copyright and licensing information.
 */

struct sc_ent {
    unsigned int sc_uid;
    int sc_score;
    unsigned int sc_flags;
    unsigned short sc_monster;
    char sc_name[MAXSTR];
    int sc_level;
    unsigned int sc_time;
};

typedef struct sc_ent SCORE;

void	rd_score(SCORE *top_ten);
void	wr_score(SCORE *top_ten);
```
