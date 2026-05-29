---
title: "f_wipe.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/f_wipe.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/f_wipe.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "f-wipe-c"
order: 18
description: "This file implements DOOM's screen wipe effects, a visual transition between game states that added polish and immersion to the experience."

summary:
  - point: "Introduces column-major transformations for faster memory access"
    link: "https://en.wikipedia.org/wiki/Column-major_order"
    link_label: "Column-major order"
  - point: "Uses randomized initial positions for dynamic visual effects"
    link: "https://en.wikipedia.org/wiki/Random_number_generation"
    link_label: "Random number generation"
  - point: "Implements modular screen wipe routines for flexibility"
    link: "https://en.wikipedia.org/wiki/Modular_programming"
    link_label: "Modular programming"
  - point: "Optimizes memory allocation for constrained hardware"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory management"
  - point: "Pioneered visual transitions in early 3D games"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM"

enhancements:
  - id: "shitty-col-major-transform"
    line_start: 276
    line_end: 285
    title: "Why DOOM Called This 'Shitty' Transform"
    wikipedia_url: "https://en.wikipedia.org/wiki/Column-major_order"
    image_url: ""
    image_caption: ""
    content: "This function, humorously named `wipe_shittyColMajorXform`, converts a 2D array from row-major to column-major order. The transformation rearranges memory layout to optimize access patterns for certain operations, particularly in graphics rendering. At the time, DOOM's developers were working on machines with limited memory and CPU power, where even small optimizations could have significant impacts. John Carmack, known for his technical prowess, often experimented with unconventional solutions to squeeze performance out of hardware. The name reflects the developers' frustration with the complexity or inelegance of the solution, but it was effective. Column-major order is still relevant in modern computing, particularly in scientific computing and graphics APIs like OpenGL. This function demonstrates the team's willingness to embrace low-level optimizations to achieve their goals."
  - id: "color-xform-initialization"
    line_start: 170
    line_end: 223
    title: "Initializing the Color and Melt Screen Transitions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Color_mapping"
    image_url: ""
    image_caption: ""
    content: "This region contains the init functions for both of DOOM's screen-wipe modes. `wipe_initColorXForm` simply copies the starting screen into the working buffer so that the subsequent per-pixel color interpolation begins from a clean baseline. `wipe_initMelt` does considerably more: it copies the start screen, runs both the start and end buffers through the column-major reformat for cache-friendly access, then seeds each screen column with a random negative offset so columns begin their downward slide at slightly different times, producing the organic dripping look. Randomness was cheap to generate and made the effect feel handcrafted rather than mechanical. Together the two init routines reflect id Software's pragmatic design philosophy: the color transform was a straightforward palette blend that cost little to initialize, while the melt demanded upfront setup work that paid for itself by enabling the more visually striking effect DOOM became famous for."
  - id: "color-xform-transition"
    line_start: 71
    line_end: 125
    title: "How DOOM Made Colors Melt Together"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `wipe_doColorXForm` function performs the actual color transformation between two screens. It iterates through each pixel, adjusting its value incrementally toward the target screen's pixel value. This creates a smooth, melting effect as one screen transitions into another. The algorithm uses a simple comparison and adjustment mechanism, ensuring that the transition is visually coherent and avoids abrupt changes. In the early 1990s, this kind of effect was computationally expensive, but DOOM's developers optimized it to run efficiently on hardware like the Intel 486. The technique inspired similar effects in later games, contributing to the evolution of graphical transitions in interactive media."
  - id: "melt-transition"
    line_start: 127
    line_end: 168
    title: "Simulating Pixel Columns Dripping Down"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `wipe_doMelt` function executes the melt effect, moving columns of pixels downward to reveal the target screen. It uses a combination of incremental adjustments and memory copying to simulate the dripping motion. The algorithm dynamically adjusts the speed of each column based on its position, creating a visually engaging effect. This kind of transition was rare in early 3D games, as hardware constraints often limited graphical complexity. DOOM's implementation demonstrated how careful optimization and creative algorithms could achieve impressive results on modest hardware. The melt effect became a signature visual transition, influencing later games and even inspiring similar effects in modern UI design."
  - id: "screen-wipe-controller"
    line_start: 225
    line_end: 274
    title: "The Function That Tied It All Together"
    wikipedia_url: "https://en.wikipedia.org/wiki/Modular_programming"
    image_url: ""
    image_caption: ""
    content: "The `wipe_ScreenWipe` function serves as the central controller for DOOM's screen wipe effects. It uses a modular approach, selecting the appropriate wipe routine based on the input parameters. This design allowed developers to easily add or modify wipe effects without disrupting the overall system. Modular programming was a forward-thinking approach in the early 1990s, enabling greater flexibility and maintainability. The function also handles initialization, execution, and cleanup, ensuring that transitions are seamless and free of artifacts. This architecture influenced later game engines, where modular systems became standard practice for managing graphical effects and other subsystems."

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
//	Mission begin melt/wipe screen special effect.
//
//-----------------------------------------------------------------------------


static const char rcsid[] = "$Id: f_wipe.c,v 1.2 1997/02/03 22:45:09 b1 Exp $";



#include "z_zone.h"
#include "i_video.h"
#include "v_video.h"
#include "m_random.h"

#include "doomdef.h"

#include "f_wipe.h"

//
//                       SCREEN WIPE PACKAGE
//

// when zero, stop the wipe
static boolean	go = 0;

static byte*	wipe_scr_start;
static byte*	wipe_scr_end;
static byte*	wipe_scr;


void
wipe_shittyColMajorXform
( short*	array,
  int		width,
  int		height )
{
    int		x;
    int		y;
    short*	dest;

    dest = (short*) Z_Malloc(width*height*2, PU_STATIC, 0);

    for(y=0;y<height;y++)
	for(x=0;x<width;x++)
	    dest[x*height+y] = array[y*width+x];

    memcpy(array, dest, width*height*2);

    Z_Free(dest);

}

int
wipe_initColorXForm
( int	width,
  int	height,
  int	ticks )
{
    memcpy(wipe_scr, wipe_scr_start, width*height);
    return 0;
}

int
wipe_doColorXForm
( int	width,
  int	height,
  int	ticks )
{
    boolean	changed;
    byte*	w;
    byte*	e;
    int		newval;

    changed = false;
    w = wipe_scr;
    e = wipe_scr_end;
    
    while (w!=wipe_scr+width*height)
    {
	if (*w != *e)
	{
	    if (*w > *e)
	    {
		newval = *w - ticks;
		if (newval < *e)
		    *w = *e;
		else
		    *w = newval;
		changed = true;
	    }
	    else if (*w < *e)
	    {
		newval = *w + ticks;
		if (newval > *e)
		    *w = *e;
		else
		    *w = newval;
		changed = true;
	    }
	}
	w++;
	e++;
    }

    return !changed;

}

int
wipe_exitColorXForm
( int	width,
  int	height,
  int	ticks )
{
    return 0;
}


static int*	y;

int
wipe_initMelt
( int	width,
  int	height,
  int	ticks )
{
    int i, r;
    
    // copy start screen to main screen
    memcpy(wipe_scr, wipe_scr_start, width*height);
    
    // makes this wipe faster (in theory)
    // to have stuff in column-major format
    wipe_shittyColMajorXform((short*)wipe_scr_start, width/2, height);
    wipe_shittyColMajorXform((short*)wipe_scr_end, width/2, height);
    
    // setup initial column positions
    // (y<0 => not ready to scroll yet)
    y = (int *) Z_Malloc(width*sizeof(int), PU_STATIC, 0);
    y[0] = -(M_Random()%16);
    for (i=1;i<width;i++)
    {
	r = (M_Random()%3) - 1;
	y[i] = y[i-1] + r;
	if (y[i] > 0) y[i] = 0;
	else if (y[i] == -16) y[i] = -15;
    }

    return 0;
}

int
wipe_doMelt
( int	width,
  int	height,
  int	ticks )
{
    int		i;
    int		j;
    int		dy;
    int		idx;
    
    short*	s;
    short*	d;
    boolean	done = true;

    width/=2;

    while (ticks--)
    {
	for (i=0;i<width;i++)
	{
	    if (y[i]<0)
	    {
		y[i]++; done = false;
	    }
	    else if (y[i] < height)
	    {
		dy = (y[i] < 16) ? y[i]+1 : 8;
		if (y[i]+dy >= height) dy = height - y[i];
		s = &((short *)wipe_scr_end)[i*height+y[i]];
		d = &((short *)wipe_scr)[y[i]*width+i];
		idx = 0;
		for (j=dy;j;j--)
		{
		    d[idx] = *(s++);
		    idx += width;
		}
		y[i] += dy;
		s = &((short *)wipe_scr_start)[i*height];
		d = &((short *)wipe_scr)[y[i]*width+i];
		idx = 0;
		for (j=height-y[i];j;j--)
		{
		    d[idx] = *(s++);
		    idx += width;
		}
		done = false;
	    }
	}
    }

    return done;

}

int
wipe_exitMelt
( int	width,
  int	height,
  int	ticks )
{
    Z_Free(y);
    return 0;
}

int
wipe_StartScreen
( int	x,
  int	y,
  int	width,
  int	height )
{
    wipe_scr_start = screens[2];
    I_ReadScreen(wipe_scr_start);
    return 0;
}

int
wipe_EndScreen
( int	x,
  int	y,
  int	width,
  int	height )
{
    wipe_scr_end = screens[3];
    I_ReadScreen(wipe_scr_end);
    V_DrawBlock(x, y, 0, width, height, wipe_scr_start); // restore start scr.
    return 0;
}

int
wipe_ScreenWipe
( int	wipeno,
  int	x,
  int	y,
  int	width,
  int	height,
  int	ticks )
{
    int rc;
    static int (*wipes[])(int, int, int) =
    {
	wipe_initColorXForm, wipe_doColorXForm, wipe_exitColorXForm,
	wipe_initMelt, wipe_doMelt, wipe_exitMelt
    };

    void V_MarkRect(int, int, int, int);

    // initial stuff
    if (!go)
    {
	go = 1;
	// wipe_scr = (byte *) Z_Malloc(width*height, PU_STATIC, 0); // DEBUG
	wipe_scr = screens[0];
	(*wipes[wipeno*3])(width, height, ticks);
    }

    // do a piece of wipe-in
    V_MarkRect(0, 0, width, height);
    rc = (*wipes[wipeno*3+1])(width, height, ticks);
    //  V_DrawBlock(x, y, 0, width, height, wipe_scr); // DEBUG

    // final stuff
    if (rc)
    {
	go = 0;
	(*wipes[wipeno*3+2])(width, height, ticks);
    }

    return !go;

}
```