---
title: "m_fixed.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/m_fixed.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/m_fixed.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "m-fixed-c"
order: 15
description: "This file implements fixed-point arithmetic routines, a critical technique for achieving fast calculations on hardware without floating-point support."

summary:
  - point: "Fixed-point arithmetic was used to bypass the lack of floating-point hardware on early PCs."
    link: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    link_label: "Fixed-point arithmetic"
  - point: "DOOM's performance relied heavily on efficient mathematical operations."
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "These routines highlight Carmack's focus on optimization and hardware constraints."
    link: "https://en.wikipedia.org/wiki/John_Carmack"
    link_label: "John Carmack"

enhancements:
  - id: "fixed-multiplication-optimization"
    line_start: 41
    line_end: 49
    title: "How DOOM Multiplied Without Floating-Point"
    wikipedia_url: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    image_url: ""
    image_caption: ""
    content: "The `FixedMul` function performs multiplication using fixed-point arithmetic, a technique where numbers are represented as integers scaled by a constant factor (here defined by `FRACBITS`). This avoids the need for floating-point operations, which were slow or unavailable on consumer hardware in the early 1990s. By shifting the result right by `FRACBITS`, the function scales the product back to the fixed-point range. In 1993, most PCs lacked dedicated floating-point units (FPUs), and software-based floating-point calculations were prohibitively slow. John Carmack and the id Software team designed DOOM to run efficiently on such hardware, leveraging fixed-point arithmetic for critical calculations like rendering and physics. This approach was inspired by earlier games and graphics techniques but refined to meet DOOM's demanding performance goals. The use of fixed-point arithmetic in DOOM influenced countless other games and engines of the era. Developers studying DOOM's source code adopted similar techniques for their own projects, ensuring compatibility with low-cost hardware. Even today, fixed-point arithmetic remains relevant in embedded systems, mobile devices, and performance-critical applications where floating-point operations are costly or unavailable."
  - id: "fixed-division-edge-case-handling"
    line_start: 53
    line_end: 65
    title: "The Division That Prevented Crashes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    image_url: ""
    image_caption: ""
    content: "The `FixedDiv` function handles division in fixed-point arithmetic, but with added safeguards to prevent catastrophic errors. If the absolute value of the numerator (`a`) shifted right by 14 bits exceeds the denominator (`b`), the function returns a predefined minimum or maximum integer value based on the signs of `a` and `b`. This prevents division by zero or overflow errors, which could crash the game. In the early 1990s, error handling was a critical concern for game developers. PCs of the era lacked robust operating systems capable of gracefully recovering from crashes, and a single unhandled exception could force players to reboot their machines. Carmack's meticulous attention to edge cases ensured DOOM's stability, even under extreme conditions. This defensive programming approach became a hallmark of id Software's coding style and influenced other developers who studied DOOM's source code. Modern game engines continue to incorporate similar safeguards, ensuring reliability across diverse hardware and software environments."
  - id: "fixed-division-with-floating-point"
    line_start: 69
    line_end: 87
    title: "When Fixed-Point Needed Floating-Point"
    wikipedia_url: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    image_url: ""
    image_caption: ""
    content: "The `FixedDiv2` function provides an alternative implementation of fixed-point division, using floating-point arithmetic for intermediate calculations. By casting the numerator and denominator to `double` and scaling the result by `FRACUNIT`, the function achieves higher precision than purely integer-based methods. However, it includes a critical error check: if the result exceeds the range of a 32-bit signed integer, the function triggers an error. This hybrid approach reflects the evolving hardware landscape of the mid-1990s. By the time DOOM's source code was released, many PCs included FPUs, making floating-point calculations feasible for certain operations. Carmack's decision to incorporate floating-point arithmetic here demonstrates his pragmatism: while fixed-point was essential for performance-critical routines, floating-point offered a simpler solution for less frequent calculations. The inclusion of floating-point arithmetic in DOOM's code foreshadowed its increasing adoption in later games and engines. As hardware improved, developers transitioned away from fixed-point techniques, leveraging FPUs for more complex simulations and rendering. This shift paved the way for modern game engines like Unreal Engine and Unity, which rely heavily on floating-point math for their physics and graphics systems."

---

```c
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
//	Fixed point implementation.
//
//-----------------------------------------------------------------------------


static const char
rcsid[] = "$Id: m_bbox.c,v 1.1 1997/02/03 22:45:10 b1 Exp $";

#include "stdlib.h"

#include "doomtype.h"
#include "i_system.h"

#ifdef __GNUG__
#pragma implementation "m_fixed.h"
#endif
#include "m_fixed.h"




// Fixme. __USE_C_FIXED__ or something.

fixed_t
FixedMul
( fixed_t	a,
  fixed_t	b )
{
    return ((long long) a * (long long) b) >> FRACBITS;
}



//
// FixedDiv, C version.
//

fixed_t
FixedDiv
( fixed_t	a,
  fixed_t	b )
{
    if ( (abs(a)>>14) >= abs(b))
	return (a^b)<0 ? MININT : MAXINT;
    return FixedDiv2 (a,b);
}



fixed_t
FixedDiv2
( fixed_t	a,
  fixed_t	b )
{
#if 0
    long long c;
    c = ((long long)a<<16) / ((long long)b);
    return (fixed_t) c;
#endif

    double c;

    c = ((double)a) / ((double)b) * FRACUNIT;

    if (c >= 2147483648.0 || c < -2147483648.0)
	I_Error("FixedDiv: divide by zero");
    return (fixed_t) c;
}
```
