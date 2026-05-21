---
title: "m_cheat.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/m_cheat.c"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/m_cheat.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "m-cheat-c"
order: 17
description: "This file implements cheat code handling in DOOM, showcasing clever techniques for input validation and sequence recognition."

summary:
  - point: "Implements cheat code sequence validation"
    link: "https://en.wikipedia.org/wiki/Cheat_code"
    link_label: "Cheat Code"
  - point: "Uses a scrambled translation table for input mapping"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM"
  - point: "Demonstrates modular design for input handling"
    link: "https://en.wikipedia.org/wiki/Modular_programming"
    link_label: "Modular Programming"

enhancements:
  - id: "scrambled-input-mapping-table"
    line_start: 28
    line_end: 35
    title: "The Scrambled Table That Hid Cheat Codes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cheat_code"
    image_url: ""
    image_caption: ""
    content: "Lines 34–35 define a scrambled translation table (`cheat_xlate_table`) used to map user input into a predefined sequence for cheat code validation. This table is initialized with scrambled values derived from the `SCRAMBLE` macro, which obfuscates the mapping. The purpose of this approach was to prevent players from easily guessing or brute-forcing cheat codes by analyzing the game's input handling. At the time, cheat codes were a popular feature in games, offering players secret abilities or shortcuts. However, developers often sought ways to make these codes less predictable to maintain the sense of discovery. This technique reflects the ingenuity of DOOM's developers in balancing accessibility with challenge. The scrambled table approach influenced later games, where obfuscation techniques were used to protect sensitive data or prevent tampering. It also foreshadows modern practices in cryptography and input validation."
  - id: "cheat-code-sequence-validation"
    line_start: 38
    line_end: 75
    title: "How DOOM Checked Your Cheat Codes"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "Lines 42–75 implement the `cht_CheckCheat` function, which validates user input against predefined cheat code sequences. The function uses the scrambled translation table to match keystrokes to the expected sequence. If the sequence is completed successfully, the cheat is activated. This routine cleverly handles edge cases, such as resetting the sequence if an incorrect key is pressed, and initializing the sequence pointer (`cht->p`) on first use. In 1993, cheat codes were a hallmark of gaming culture, often serving as Easter eggs or developer tools. DOOM's implementation was notable for its robustness and modularity, allowing the cheat system to integrate seamlessly with the game's input handling. The technique of sequence validation influenced later games, where cheat codes evolved into unlockable achievements or developer modes. It also highlights the meticulous attention to detail that defined DOOM's programming, contributing to its reputation as a technical masterpiece."
  - id: "extracting-cheat-code-parameters"
    line_start: 77
    line_end: 99
    title: "The Function That Read Cheat Code Secrets"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cheat_code"
    image_url: ""
    image_caption: ""
    content: "Lines 77–99 define the `cht_GetParam` function, which extracts parameters embedded within cheat code sequences. This function scans the sequence for a special marker (`1`) indicating the start of parameters, then copies the subsequent characters into a buffer. Parameters could represent numeric values, strings, or other data used to customize the cheat's effect. For example, a cheat might unlock a specific level or grant a set amount of resources. This design reflects the flexibility of DOOM's cheat system, allowing developers to encode complex behaviors within simple sequences. In the early 1990s, such functionality was rare, as most games used hardcoded cheats with fixed effects. DOOM's approach influenced later games that implemented parameterized cheats, enabling more dynamic and user-driven gameplay. It also demonstrates the game's modular architecture, where input handling, cheat validation, and parameter extraction were cleanly separated into distinct functions."

---

```cpp
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
```
