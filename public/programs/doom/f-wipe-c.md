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
description: "This file implements the screen wipe effects in DOOM, a visual transition technique that added polish and immersion to the game's level changes."

summary:
  - point: "Introduces column-major transformations for faster memory access during wipes"
    link: "https://en.wikipedia.org/wiki/Column-major_order"
    link_label: "Column-major order"
  - point: "Demonstrates a modular approach to screen wipe effects with reusable routines"
    link: "https://en.wikipedia.org/wiki/Modular_programming"
    link_label: "Modular programming"
  - point: "Uses randomization to create visually dynamic transitions"
    link: "https://en.wikipedia.org/wiki/Random_number_generation"
    link_label: "Random number generation"

enhancements:
  - id: "shitty-col-major-transform"
    line_start: 276
    line_end: 285
    title: "Why Call It 'ShittyColMajorXform'?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Column-major_order"
    image_url: ""
    image_caption: ""
    content: "This function performs a column-major transformation on a 2D array, rearranging its memory layout to optimize access patterns for certain operations. The name 'shittyColMajorXform' reflects a candid, informal naming style often seen in development teams under pressure. At the time, DOOM's developers were working on hardware with limited memory bandwidth and CPU power, so optimizing memory access was critical. Column-major order, while less intuitive for row-major programmers, could reduce cache misses and improve performance in specific scenarios. The function uses dynamic memory allocation to create a temporary buffer, performs the transformation, and then copies the result back to the original array. This technique, though labeled 'shitty,' was effective enough to be used in the game's wipe effects, demonstrating the pragmatic trade-offs developers made to meet deadlines. The approach influenced later games and engines, where memory layout optimization became a standard practice in high-performance graphics programming."
  - id: "color-xform-initialization"
    line_start: 225
    line_end: 233
    title: "Setting Up for a Smooth Transition"
    wikipedia_url: "https://en.wikipedia.org/wiki/Screen_transition"
    image_url: ""
    image_caption: ""
    content: "The `wipe_initColorXForm` function initializes the color transformation wipe effect by copying the starting screen into a working buffer. This setup ensures that the wipe effect begins with a clean slate, ready to interpolate between the start and end screens. In 1993, screen transitions were a novel way to enhance the visual experience of games, making level changes feel more fluid and immersive. DOOM's developers leveraged this technique to mask loading times and maintain the game's fast-paced rhythm. The function's simplicity reflects the constraints of the era, where memory and CPU cycles were precious resources. By preloading the start screen into a buffer, the game could perform incremental updates without re-reading data, a technique that influenced later real-time graphics systems."
  - id: "color-xform-execution"
    line_start: 225
    line_end: 233
    title: "Pixel by Pixel: How DOOM Wipes Screens"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The `wipe_doColorXForm` function executes the color transformation wipe effect, gradually interpolating pixel values between the start and end screens. It uses a loop to traverse each pixel, adjusting its value based on the difference between the current and target states. If the current pixel is brighter or darker than its target, it increments or decrements the value by a fixed amount (`ticks`), ensuring a smooth transition. This approach was a clever workaround for the lack of hardware acceleration in 1993, relying entirely on CPU calculations to produce visually appealing effects. The algorithm's simplicity and efficiency were critical for DOOM's performance on consumer-grade PCs. Later graphics engines adopted similar techniques, often enhanced with hardware support, to create seamless transitions in games and applications."
  - id: "melt-initialization"
    line_start: 225
    line_end: 233
    title: "Randomized Melt: A Dynamic Screen Transition"
    wikipedia_url: "https://en.wikipedia.org/wiki/Screen_transition"
    image_url: ""
    image_caption: ""
    content: "The `wipe_initMelt` function initializes the 'melt' screen wipe effect, setting up column positions and randomizing their starting states. This randomness adds a dynamic, organic feel to the transition, making it visually distinct from other wipes. The function also converts the start and end screens to column-major format, optimizing memory access for the subsequent operations. Randomization was a hallmark of DOOM's design philosophy, used not just for gameplay but also for visual effects, creating an unpredictable and engaging experience. By combining randomness with memory layout optimization, the developers achieved a balance between aesthetic appeal and performance. The melt effect became iconic, influencing later games that sought to replicate DOOM's immersive transitions."
  - id: "melt-execution"
    line_start: 225
    line_end: 233
    title: "Melting Pixels: A Column-Based Transition"
    wikipedia_url: "https://en.wikipedia.org/wiki/Screen_transition"
    image_url: ""
    image_caption: ""
    content: "The `wipe_doMelt` function executes the 'melt' screen wipe effect, simulating columns of pixels sliding downward to reveal the next screen. It uses a combination of incremental updates and memory manipulation to achieve the effect. Each column's position is tracked, and pixels are copied from the end screen to the working buffer as the column progresses downward. The function also handles the transition from the start screen to the working buffer, ensuring a seamless visual effect. This technique was a testament to DOOM's developers' ingenuity, as they created visually striking effects with limited hardware capabilities. The melt effect became a memorable part of DOOM's aesthetic, inspiring similar transitions in later games and multimedia applications."
  - id: "screenwipe-controller"
    line_start: 225
    line_end: 233
    title: "The Master Switch for Screen Wipes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Screen_transition"
    image_url: ""
    image_caption: ""
    content: "The `wipe_ScreenWipe` function serves as the central controller for all screen wipe effects, managing their initialization, execution, and cleanup. It uses a modular approach, with an array of function pointers to handle different wipe types. This design allows for easy addition of new effects, demonstrating the developers' foresight in creating extensible systems. The function also integrates with DOOM's rendering pipeline, marking the screen area for updates and ensuring smooth transitions. Modular programming was a key principle in DOOM's development, enabling rapid iteration and experimentation. The screen wipe system, with its clean separation of concerns, influenced later game engines, where modularity became a cornerstone of design."

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
