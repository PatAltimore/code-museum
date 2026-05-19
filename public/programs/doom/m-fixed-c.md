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
description: "This file implements fixed-point arithmetic routines for DOOM, enabling efficient calculations on hardware without floating-point support."

summary:
  - point: "Fixed-point arithmetic was crucial for performance on 1990s consumer PCs."
    link: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    link_label: "Fixed-point arithmetic"
  - point: "DOOM's source code was released under a special license, fostering community contributions."
    link: "https://en.wikipedia.org/wiki/Source_code_of_Doom"
    link_label: "DOOM source code"
  - point: "The use of fixed-point math avoided costly floating-point operations, critical for real-time gameplay."
    link: "https://en.wikipedia.org/wiki/Floating-point_arithmetic"
    link_label: "Floating-point arithmetic"

enhancements:
  - id: "fixedmul-efficient-multiplication"
    line_start: 43
    line_end: 49
    title: "Efficient multiplication using fixed-point math"
    wikipedia_url: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    image_url: ""
    image_caption: ""
    content: "The `FixedMul` function performs multiplication using fixed-point arithmetic, a technique that represents fractional numbers as integers scaled by a constant factor. Here, the scaling factor is defined by `FRACBITS`, which determines the precision of the fixed-point representation. By shifting the result right by `FRACBITS`, the function effectively converts the scaled product back into the fixed-point format. In 1993, consumer PCs often lacked hardware support for floating-point operations, making fixed-point math a necessity for real-time applications like DOOM. John Carmack, the technical mastermind behind DOOM, leveraged this approach to ensure the game could run smoothly on hardware as modest as a 386 processor. Fixed-point arithmetic was not unique to DOOM but was a common practice in the era, especially in gaming and embedded systems. The efficiency of `FixedMul` contributed to DOOM's fast-paced gameplay, allowing complex calculations to be performed without sacrificing performance. This technique persisted in later games and systems, though it gradually became less critical as floating-point hardware became ubiquitous."
  - id: "fixeddiv-handling-division-edge-cases"
    line_start: 57
    line_end: 65
    title: "Handling division edge cases in FixedDiv"
    wikipedia_url: "https://en.wikipedia.org/wiki/Division_by_zero"
    image_url: ""
    image_caption: ""
    content: "The `FixedDiv` function implements division in fixed-point arithmetic while addressing edge cases that could lead to errors. Specifically, it checks whether the absolute value of `a` shifted right by 14 exceeds the absolute value of `b`. If so, the function returns the maximum or minimum integer value based on the signs of `a` and `b`, effectively preventing overflow. This safeguard reflects the meticulous attention to detail required when working with fixed-point math, where precision and range limitations are constant challenges. In the early 1990s, these constraints were dictated by the hardware capabilities of consumer PCs, which lacked the computational power for floating-point operations. Carmack's implementation demonstrates a pragmatic approach to ensuring stability and reliability in DOOM's calculations. While fixed-point math has largely been supplanted by floating-point arithmetic in modern systems, the principles of handling edge cases and ensuring robustness remain relevant in software development today."
  - id: "fixeddiv2-mixing-approaches-for-division"
    line_start: 69
    line_end: 87
    title: "Mixing integer and floating-point approaches in FixedDiv2"
    wikipedia_url: "https://en.wikipedia.org/wiki/Floating-point_arithmetic"
    image_url: ""
    image_caption: ""
    content: "The `FixedDiv2` function provides an alternative implementation of fixed-point division, blending integer and floating-point arithmetic. While an integer-based approach is commented out, the active code uses double-precision floating-point calculations to perform the division and scale the result by `FRACUNIT`. This hybrid approach highlights the trade-offs faced by developers in the early 1990s. Floating-point operations were slower on the hardware of the time, but they offered greater precision and simplicity for certain calculations. Carmack's decision to include both implementations reflects his adaptability and willingness to experiment with different techniques to achieve the best performance. The function also includes a check to ensure the result remains within the bounds of a 32-bit integer, throwing an error if the division is invalid (e.g., divide by zero). This careful error handling underscores the importance of reliability in DOOM's engine, where mathematical errors could disrupt gameplay. The inclusion of floating-point math in a predominantly fixed-point system illustrates the transitional nature of the era, as developers began to embrace the growing capabilities of consumer hardware."

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