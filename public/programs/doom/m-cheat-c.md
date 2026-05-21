---
title: "quakeasm.h"
program: "Quake"
program_slug: "quake"
file_path: "QW/client/quakeasm.h"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/Quake/blob/master/QW/client/quakeasm.h"
year: 1996
author: "John Carmack, Michael Abrash, John Cash"
slug: "quakeasm-h"
order: 7
description: "This file encapsulates the low-level assembly optimizations that powered Quake's groundbreaking 3D rendering and multiplayer capabilities on 1990s hardware."

summary:
  - point: "Defines assembly-level constants and macros for x86 optimizations"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly language"
  - point: "Includes external references to critical rendering variables"
    link: "https://en.wikipedia.org/wiki/Rendering_(computer_graphics)"
    link_label: "Rendering"
  - point: "Optimized for id386 architecture, targeting Intel processors"
    link: "https://en.wikipedia.org/wiki/Intel_80386"
    link_label: "Intel 80386"
  - point: "Showcases Carmack's and Abrash's mastery of hardware constraints"
    link: "https://en.wikipedia.org/wiki/John_Carmack"
    link_label: "John Carmack"
  - point: "Influenced modern game engines and rendering techniques"
    link: "https://en.wikipedia.org/wiki/Game_engine"
    link_label: "Game engine"

enhancements:
  - id: "quakeasm-header-setup"
    line_start: 1
    line_end: 32
    title: "Why Quake Needed id386-Specific Optimizations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_80386"
    image_url: ""
    image_caption: ""
    content: "This section sets up architecture-specific flags to enable optimizations for Intel's 386 processors, the dominant CPU architecture of the mid-1990s. By defining `id386`, the code ensures that assembly routines tailored for x86 processors are included only when running on compatible hardware. This was crucial for Quake, as its performance depended heavily on low-level optimizations that exploited the specific capabilities of the 386 and later processors, such as pipelining and instruction-level parallelism. In 1996, the gaming industry was transitioning from DOS-based games to Windows-based environments, and developers were grappling with the limitations of early PC hardware. The 386, introduced in 1985, was still widely used, though faster processors like the Pentium were becoming more common. John Carmack and Michael Abrash, both renowned for their deep understanding of hardware, leveraged these constraints to push the boundaries of what was possible. Abrash's work on assembly optimizations and Carmack's expertise in engine design ensured Quake could deliver unprecedented 3D graphics on consumer-grade PCs. This approach influenced later game engines, such as Unreal Engine and Source, which continued to optimize for specific hardware architectures. The practice of tailoring software for hardware capabilities persists in modern development, especially in console and mobile gaming, where understanding the underlying hardware is key to maximizing performance."
  - id: "transparent-color-definition"
    line_start: 34
    line_end: 35
    title: "The Magic Number Behind Transparency"
    wikipedia_url: "https://en.wikipedia.org/wiki/Transparency_(graphic)"
    image_url: ""
    image_caption: ""
    content: "The definition of `TRANSPARENT_COLOR` as 255 is a simple yet critical decision. This constant represents the color value used to denote transparency in Quake's rendering pipeline. By reserving a specific value for transparency, the engine can efficiently handle textures and sprites that require portions to be invisible, such as windows or character models. In the mid-1990s, transparency was a computationally expensive feature, especially on hardware without dedicated graphics acceleration. Quake's software renderer had to manage transparency manually, blending pixels and ensuring that transparent areas did not overwrite the background. This choice of 255 likely stems from its position as the maximum value in an 8-bit color palette, making it easy to identify and process. Transparency handling in Quake laid the groundwork for more sophisticated alpha blending techniques in later games. Modern engines like Unity and Unreal use similar principles but leverage GPU acceleration to handle transparency more efficiently. The concept of reserving specific values for transparency persists in formats like PNG, where alpha channels define pixel opacity."
  - id: "external-variable-references"
    line_start: 37
    line_end: 261
    title: "The Web of Variables That Made Quake Tick"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rendering_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "This section lists external references to critical variables used throughout Quake's rendering pipeline. These variables, such as `d_zistepu`, `r_turb_s`, and `d_viewbuffer`, represent the building blocks of the game's 3D graphics system. They control everything from depth buffering to texture mapping and lighting calculations. In 1996, real-time 3D rendering was still a nascent field. Developers had to invent techniques to simulate depth, perspective, and lighting on hardware that lacked dedicated graphics processors. Quake's software renderer was a marvel of engineering, using these variables to manage complex calculations efficiently. For example, depth buffering (`d_pzbuffer`) ensured that closer objects occluded farther ones, while texture coordinates (`r_turb_s`, `r_turb_t`) enabled detailed surfaces. The modularity of these variables reflects the influence of Michael Abrash, who advocated for clean, reusable code even in assembly-heavy projects. This approach allowed Quake's engine to be adapted for later games like Quake II and influenced the design of modern engines. Developers studying Quake's source code learned how to structure rendering systems, a lesson that resonates in today's industry standards."
  - id: "sound-system-hooks"
    line_start: 263
    line_end: 272
    title: "How Quake's Sound System Kept Pace"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_card"
    image_url: ""
    image_caption: ""
    content: "This section includes external references to variables used in Quake's sound system, such as `snd_scaletable` and `snd_linear_count`. These variables controlled sound playback, volume scaling, and buffer management, ensuring that Quake's audio matched the quality of its visuals. In 1996, sound cards like the Sound Blaster were common, but their capabilities varied widely. Quake's sound system had to accommodate different hardware configurations while delivering immersive audio effects. By using assembly-level hooks, the engine could directly manipulate sound buffers and optimize playback for each system. Quake's approach to sound influenced later games, which continued to prioritize audio quality as a key component of immersion. The modularity of its sound system inspired modern audio engines, such as FMOD and Wwise, which provide similar flexibility and performance optimization. Quake demonstrated that sound was not just an afterthought but an integral part of the gaming experience."

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
