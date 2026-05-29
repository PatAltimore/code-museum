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
description: "This file implements fixed-point arithmetic routines, a critical technique for performance optimization in DOOM's rendering engine."

summary:
  - point: "Fixed-point arithmetic replaced floating-point calculations for speed on 1990s hardware"
    link: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    link_label: "Fixed-point arithmetic"
  - point: "DOOM's source code popularized fixed-point math in game development"
    link: "https://doomwiki.org/wiki/Source_code"
    link_label: "DOOM source code"
  - point: "These routines were tailored to handle precision and overflow constraints"
    link: "https://en.wikipedia.org/wiki/Integer_overflow"
    link_label: "Integer overflow"

enhancements:
  - id: "fixed-multiplication-optimization"
    line_start: 39
    line_end: 47
    title: "How DOOM Multiplied Without Floating Point"
    wikipedia_url: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    image_url: ""
    image_caption: ""
    content: "This section implements `FixedMul`, a function that performs fixed-point multiplication. Fixed-point arithmetic uses integers to represent fractional values, avoiding the computational overhead of floating-point math. In this routine, two fixed-point numbers are multiplied as 64-bit integers (`long long`), and the result is shifted right by `FRACBITS` to scale it back to the fixed-point domain. At the time DOOM was developed, consumer PCs often lacked hardware floating-point units, and even when available, floating-point operations were slower than integer math. John Carmack, DOOM's lead programmer, favored fixed-point arithmetic for its speed and predictability, enabling the game to run smoothly on modest hardware like the 386 and 486 processors. This approach was crucial for real-time rendering, where every millisecond counted. Fixed-point math became a staple in game development during the 1990s, influencing engines like Quake and Unreal. While modern hardware has made floating-point math ubiquitous, fixed-point techniques remain relevant in embedded systems and mobile devices, where performance and power efficiency are critical."
  - id: "fixed-division-overflow-handling"
    line_start: 56
    line_end: 64
    title: "Preventing Overflow in Fixed-Point Division"
    wikipedia_url: "https://en.wikipedia.org/wiki/Integer_overflow"
    image_url: ""
    image_caption: ""
    content: "The `FixedDiv` function performs fixed-point division while guarding against overflow. It first checks whether the absolute value of the numerator, shifted right by 14 bits, exceeds the denominator. If so, the result would overflow the fixed-point range, and the function returns the maximum or minimum integer value depending on the sign of the inputs. This safeguard reflects the constraints of fixed-point arithmetic, where precision is limited by the number of bits allocated to the fractional part. Overflow was a common concern in 1990s game programming, as developers worked within tight hardware limits. By incorporating these checks, Carmack ensured DOOM's calculations remained stable, even under extreme conditions. This meticulous attention to edge cases contributed to the game's reputation for reliability and performance. Techniques like this influenced later engines, including Quake, which continued to refine fixed-point math for real-time applications. Today, overflow handling remains a critical aspect of software development, especially in systems programming and embedded applications."
  - id: "fixed-division-with-double-precision"
    line_start: 68
    line_end: 86
    title: "Switching to Double Precision for Stability"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_precision_floating-point_format"
    image_url: ""
    image_caption: ""
    content: "The `FixedDiv2` function provides an alternative implementation of fixed-point division, using double-precision floating-point arithmetic for intermediate calculations. By casting the inputs to `double`, the routine avoids the precision and overflow issues inherent in integer math. The result is scaled back to fixed-point format by multiplying by `FRACUNIT`. This approach sacrifices some of the performance benefits of fixed-point arithmetic but ensures greater stability and accuracy. The inclusion of this routine reflects the pragmatic mindset of DOOM's developers, who balanced performance with reliability. Double precision was less common in real-time applications at the time due to its computational cost, but Carmack's willingness to use it in specific cases highlights his focus on delivering a robust experience. The error check for division by zero further underscores this commitment to stability. While fixed-point math dominated early game engines, the gradual adoption of floating-point techniques paved the way for modern graphics programming, where GPUs handle floating-point operations efficiently. This transition influenced successors like Quake and Unreal, which embraced floating-point math as hardware capabilities improved."

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