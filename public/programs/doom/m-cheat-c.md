---
title: "m_cheat.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/m_cheat.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/m_cheat.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "m-cheat-c"
order: 17
description: "This file implements cheat code handling in DOOM, showcasing how developers ingeniously integrated secret sequences into gameplay."

summary:
  - point: "Cheat codes are processed using a sequence validation system."
    link: "https://en.wikipedia.org/wiki/Cheating_in_video_games"
    link_label: "Cheating in video games"
  - point: "The cheat_xlate_table scrambles input keys for validation."
    link: "https://doomwiki.org/wiki/Cheat_codes"
    link_label: "DOOM cheat codes"
  - point: "Cheat codes were an iconic feature of 1990s gaming culture."
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993 video game)"

enhancements:
  - id: "cheat-validation-sequence"
    line_start: 37
    line_end: 74
    title: "How DOOM Validated Cheat Codes"
    wikipedia_url: "https://doomwiki.org/wiki/Cheat_codes"
    image_url: ""
    image_caption: ""
    content: "This function, `cht_CheckCheat`, is responsible for validating cheat code sequences entered by the player. It uses a `cheatseq_t` structure to track the progress of the input sequence and compares each keypress against a scrambled translation table (`cheat_xlate_table`). If the sequence matches, the cheat is activated. In the early 1990s, cheat codes were a popular feature in video games, allowing players to unlock hidden abilities, skip levels, or access debug features. DOOM's implementation was particularly clever: it scrambled the input keys using a macro called `SCRAMBLE`, ensuring that the cheat codes couldn't be easily guessed or exploited without insider knowledge. The function initializes the translation table on its first call, a design choice likely made to optimize memory usage and avoid unnecessary computation during gameplay. The cheat sequence is processed character by character, resetting if the input deviates from the expected sequence. When the end-of-sequence character (`0xff`) is reached, the cheat is successfully activated. This approach reflects the constraints of the era: DOOM had to run efficiently on hardware like the Intel 386 processor with limited memory. By using a simple state machine and a scrambled lookup table, id Software ensured that cheat code handling was both secure and performant. The cheat code system became a hallmark of DOOM, with iconic sequences like \"IDDQD\" (God mode) and \"IDKFA\" (all weapons and keys). These codes were widely shared among players, contributing to the game's cultural impact. Later games, including Quake and other first-person shooters, adopted similar systems for cheat code validation, cementing this technique as a staple of game development."
  - id: "extracting-cheat-parameters"
    line_start: 76
    line_end: 98
    title: "Extracting Parameters from Cheat Codes"
    wikipedia_url: "https://doomwiki.org/wiki/Cheat_codes"
    image_url: ""
    image_caption: ""
    content: "The `cht_GetParam` function is tasked with extracting parameters embedded within cheat code sequences. For example, certain cheats might include additional data, such as a level number or a specific setting. This function reads the sequence stored in the `cheatseq_t` structure and copies the parameter data into a buffer for further processing. The function begins by locating the special marker (`1`) that signifies the start of the parameter data within the sequence. It then iterates through the sequence, copying characters to the buffer until it encounters either a null character (`0`) or the end-of-sequence marker (`0xff`). This ensures that only valid parameter data is extracted, while resetting the sequence for future use. In the context of 1993, embedding parameters within cheat codes was an innovative way to extend their functionality. For instance, a cheat might allow players to warp to a specific level by appending the level number after the main code. This design reflects the ingenuity of id Software's developers, who were constantly pushing the boundaries of what games could do within the constraints of limited hardware. The parameter extraction system influenced later games by demonstrating how cheat codes could be made more versatile. Developers of titles like Duke Nukem 3D and Unreal Tournament adopted similar techniques, enabling players to customize their gameplay experience through detailed cheat inputs. Today, while cheat codes are less common in mainstream games, their legacy lives on in modding communities and debug tools, many of which trace their lineage back to systems like this."

---

```cpp
//-----------------------------------------------------------------------------
//
// $Id:$
//
// Copyright (C) 1993-1996 by id Software, Inc.
//
// This source is available for distribution and/or modification
// only under the terms of the DOOM Source Code License as
// published by id Software. All rights reserved.
//
// The source is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// FITNESS FOR A PARTICULAR PURPOSE. See the DOOM Source Code License
// for more details.
//
// $Log:$
//
// DESCRIPTION:
//	Cheat sequence checking.
//
//-----------------------------------------------------------------------------


static const char
rcsid[] = "$Id: m_cheat.c,v 1.1 1997/02/03 21:24:34 b1 Exp $";

#include "m_cheat.h"

//
// CHEAT SEQUENCE PACKAGE
//

static int		firsttime = 1;
static unsigned char	cheat_xlate_table[256];


//
// Called in st_stuff module, which handles the input.
// Returns a 1 if the cheat was successful, 0 if failed.
//
int
cht_CheckCheat
( cheatseq_t*	cht,
  char		key )
{
    int i;
    int rc = 0;

    if (firsttime)
    {
	firsttime = 0;
	for (i=0;i<256;i++) cheat_xlate_table[i] = SCRAMBLE(i);
    }

    if (!cht->p)
	cht->p = cht->sequence; // initialize if first time

    if (*cht->p == 0)
	*(cht->p++) = key;
    else if
	(cheat_xlate_table[(unsigned char)key] == *cht->p) cht->p++;
    else
	cht->p = cht->sequence;

    if (*cht->p == 1)
	cht->p++;
    else if (*cht->p == 0xff) // end of sequence character
    {
	cht->p = cht->sequence;
	rc = 1;
    }

    return rc;
}

void
cht_GetParam
( cheatseq_t*	cht,
  char*		buffer )
{

    unsigned char *p, c;

    p = cht->sequence;
    while (*(p++) != 1);
    
    do
    {
	c = *p;
	*(buffer++) = c;
	*(p++) = 0;
    }
    while (c && *p!=0xff );

    if (*p==0xff)
	*buffer = 0;

}


```