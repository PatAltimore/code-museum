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
description: "This file implements fixed-point arithmetic routines, a critical technique for efficient calculations in DOOM's engine."

summary:
  - point: "Fixed-point arithmetic used to optimize performance on 1990s hardware"
    link: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    link_label: "Fixed-point arithmetic"
  - point: "Avoided floating-point operations for speed and compatibility"
    link: "https://en.wikipedia.org/wiki/Floating-point_arithmetic"
    link_label: "Floating-point arithmetic"
  - point: "Techniques here shaped game engines for years to come"
    link: "https://en.wikipedia.org/wiki/Game_engine"
    link_label: "Game engine"

enhancements:
  - id: "fixedmul-efficient-multiplication"
    line_start: 41
    line_end: 49
    title: "FixedMul: Efficient multiplication for 1990s CPUs"
    wikipedia_url: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    image_url: ""
    image_caption: ""
    content: "The `FixedMul` function performs multiplication using fixed-point arithmetic, a method that represents numbers as integers scaled by a constant factor (here defined by `FRACBITS`). This avoids the computational overhead of floating-point operations, which were slow and inconsistent across hardware in the early 1990s. By shifting the result right by `FRACBITS`, it converts the product back to the fixed-point format. At the time, DOOM targeted consumer PCs with limited processing power, such as Intel 386 and 486 CPUs, where such optimizations were crucial for real-time performance. Fixed-point arithmetic was widely used in game engines of the era, and this implementation directly influenced later engines like Quake and Unreal Engine, which continued to refine these techniques for 3D rendering and physics calculations."
  - id: "fixeddiv-division-with-safety-checks"
    line_start: 53
    line_end: 65
    title: "FixedDiv: Division with safety checks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Division_by_zero"
    image_url: ""
    image_caption: ""
    content: "The `FixedDiv` function provides fixed-point division, with a critical safety check to prevent overflow or division by zero. If the absolute value of the numerator, shifted right by 14 bits, exceeds the denominator, the function returns extreme values (`MININT` or `MAXINT`) based on the sign of the inputs. This ensures stability and avoids catastrophic errors in the game engine. Such precautions were vital for DOOM's fast-paced gameplay, where numerical precision directly impacted collision detection and movement. The approach reflects the meticulous attention to detail required to build reliable software for constrained hardware environments. Later game engines adopted similar safeguards, embedding robust error handling into their core arithmetic routines."
  - id: "fixeddiv2-hybrid-division-approach"
    line_start: 69
    line_end: 87
    title: "FixedDiv2: Hybrid division approach for precision"
    wikipedia_url: "https://en.wikipedia.org/wiki/Numerical_analysis"
    image_url: ""
    image_caption: ""
    content: "The `FixedDiv2` function implements a hybrid approach to fixed-point division, using double-precision floating-point arithmetic for intermediate calculations. This contrasts with the earlier commented-out implementation that relied solely on integer arithmetic. By leveraging floating-point math, `FixedDiv2` achieves higher precision while still converting the result back to fixed-point format (`FRACUNIT`). The function includes a range check to prevent overflow, throwing an error if the result exceeds the bounds of a 32-bit signed integer. This blend of fixed-point and floating-point techniques highlights the pragmatic engineering choices made by DOOM's developers, balancing performance with accuracy. The method influenced subsequent game engines, which often combined fixed-point and floating-point math for tasks like physics simulation and rendering, ensuring both speed and reliability."

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