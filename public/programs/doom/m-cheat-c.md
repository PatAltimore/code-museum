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
description: "This file implements cheat code handling for DOOM, enabling players to input sequences for special effects or gameplay alterations."

summary:
  - point: "DOOM's cheat system uses scrambled input sequences for validation."
    link: "https://en.wikipedia.org/wiki/Cheating_in_video_games"
    link_label: "Cheating in video games"
  - point: "The cheat_xlate_table scrambles input keys to prevent simple guessing."
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993 video game)"
  - point: "Cheat sequences are managed as stateful structures, tracking progress through the sequence."
    link: "https://en.wikipedia.org/wiki/State_machine"
    link_label: "State machine"

enhancements:
  - id: "cheat-sequence-initialization"
    line_start: 34
    line_end: 35
    title: "Initializing cheat sequence translation table"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The cheat_xlate_table is a critical part of DOOM's cheat code system. It scrambles input keys using the SCRAMBLE macro, ensuring cheat codes cannot be easily guessed or brute-forced. This approach reflects the era's focus on protecting game integrity while still allowing developers to embed hidden features for debugging or player enjoyment. In the early 1990s, cheat codes were a popular way to enhance replayability and engage players, often serving as Easter eggs or developer tools. John Carmack and the team at id Software were known for their technical ingenuity, and this table exemplifies their ability to balance accessibility with security. The scramble mechanism also highlights the constraints of the time, where computational resources were limited, and clever tricks were needed to optimize performance. This design choice persisted in many games of the era, influencing cheat systems in subsequent titles."
  - id: "check-cheat-sequence"
    line_start: 42
    line_end: 74
    title: "Validating cheat code sequences"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The cht_CheckCheat function is the heart of DOOM's cheat system. It validates player input against predefined cheat sequences, advancing through the sequence or resetting progress based on the scrambled key translation. This mechanism ensures that only exact sequences trigger cheats, preventing accidental activation. In the early 1990s, cheat codes were both a secretive delight for players and a practical tool for developers during testing. DOOM's implementation reflects id Software's meticulous attention to detail, ensuring cheats were robust yet accessible. The use of a stateful structure to track progress through the sequence is a clever solution, minimizing memory usage while maintaining functionality. This function also underscores the team's ability to innovate within the constraints of the hardware, as DOOM was designed to run on modest PCs with limited processing power. The cheat system became iconic, with codes like 'IDDQD' and 'IDKFA' entering gaming lore and influencing cheat code designs in later games."
  - id: "extract-cheat-parameters"
    line_start: 77
    line_end: 99
    title: "Retrieving parameters from cheat sequences"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The cht_GetParam function extracts additional parameters embedded within cheat sequences. This allows cheats to carry contextual information, such as specific values or settings, enhancing their versatility. For example, a cheat might unlock a specific level or grant a precise amount of ammunition. In the early 1990s, games often used simple input methods to trigger cheats, but DOOM's system was more sophisticated, reflecting id Software's pioneering approach. By embedding parameters within sequences, the developers could create dynamic cheats that adapted to player needs or debugging requirements. This function also demonstrates the team's ability to optimize memory usage, as parameters are cleared from the sequence after extraction. The inclusion of parameterized cheats added depth to the system, making it more than just a collection of static codes. This design influenced cheat systems in later games, inspiring developers to think creatively about how cheats could enhance gameplay and debugging."

---

// Emacs style mode select   -*- C++ -*- 
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

