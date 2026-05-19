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
description: "This file implements cheat code handling for DOOM, allowing players to input sequences for special game effects."

summary:
  - point: "Implements cheat code recognition using sequence matching"
    link: "https://en.wikipedia.org/wiki/Cheat_code"
    link_label: "Cheat Code"
  - point: "Uses a scramble table for input validation"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM"
  - point: "Introduces modular handling of input sequences"
    link: "https://en.wikipedia.org/wiki/Modular_programming"
    link_label: "Modular Programming"

enhancements:
  - id: "cheat-code-sequence-checking"
    line_start: 42
    line_end: 75
    title: "Cheat Code Sequence Recognition"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cheat_code"
    image_url: ""
    image_caption: ""
    content: "This section implements the core logic for recognizing cheat code sequences entered by the player. The function `cht_CheckCheat` validates input against predefined cheat sequences, using a scrambled translation table to ensure that inputs are processed securely and consistently. The function initializes the translation table on its first invocation, mapping each character to a scrambled equivalent using the `SCRAMBLE` macro. This ensures that cheat sequences are matched correctly, even if the input is obfuscated. In 1993, cheat codes were a popular feature in games, offering players hidden functionality or shortcuts. DOOM's implementation reflects the era's focus on enhancing replayability and player engagement. The translation table adds a layer of robustness, preventing accidental activation of cheats and ensuring deliberate input. John Carmack and the team at id Software designed this system to balance accessibility with technical precision. The cheat code system in DOOM became iconic, with sequences like \"IDDQD\" (god mode) and \"IDKFA\" (all weapons and ammo) entering gaming folklore. This approach influenced later games, which adopted similar systems for cheat recognition and input validation. Developers studying DOOM's source code often cite this section as a model for handling player input securely and efficiently. The modular design also reflects id Software's broader philosophy of creating reusable and maintainable code, a principle that shaped modern game development practices."
  - id: "extracting-cheat-code-parameters"
    line_start: 77
    line_end: 99
    title: "Extracting Parameters from Cheat Codes"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `cht_GetParam` function retrieves parameters embedded within cheat code sequences. This allows cheat codes to carry additional data, such as specific values or settings. The function scans the sequence until it encounters a special marker (value `1`), then copies subsequent characters into a buffer. It continues until it reaches the end-of-sequence marker (`0xff`) or a null character. In the early 1990s, games often included cheat codes with parameters to provide fine-grained control over gameplay features. For example, a cheat might unlock a specific level or grant a precise amount of resources. DOOM's implementation reflects this trend, enabling developers to create versatile cheats without hardcoding individual effects. The modular design of `cht_GetParam` ensures that parameter extraction is handled consistently, reducing the risk of errors. This technique influenced later games, which expanded on the idea of parameterized cheats to include complex debugging tools and developer shortcuts. The function's simplicity and efficiency make it a valuable reference for programmers exploring input handling and sequence parsing. DOOM's cheat system, including parameter extraction, remains a touchstone for game developers, demonstrating how thoughtful design can enhance both player experience and code maintainability."

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

