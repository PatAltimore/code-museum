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
description: "This file implements the screen wipe effects for DOOM, a hallmark of its immersive transitions between gameplay and menus."

summary:
  - point: "Implements two distinct screen wipe effects: color transformation and melt"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "Uses column-major transformations to optimize memory layout for certain effects"
    link: "https://en.wikipedia.org/wiki/Column-major_order"
    link_label: "Column-major order"
  - point: "Relies on the Z_Malloc memory allocation system from DOOM's engine"
    link: "https://doomwiki.org/wiki/Z_zone_memory_allocator"
    link_label: "Z_zone memory allocator"
  - point: "Demonstrates early use of procedural screen transitions in games"
    link: "https://en.wikipedia.org/wiki/Procedural_generation"
    link_label: "Procedural generation"
  - point: "Highlights Carmack's focus on optimizing performance for limited hardware"
    link: "https://en.wikipedia.org/wiki/John_Carmack"
    link_label: "John Carmack"

enhancements:
  - id: "shitty-col-major-transform"
    line_start: 50
    line_end: 70
    title: "Column-major transformation for screen wipes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Column-major_order"
    image_url: ""
    image_caption: ""
    content: "The `wipe_shittyColMajorXform` function rearranges a 2D array from row-major to column-major order. This transformation optimizes memory access patterns for certain screen wipe effects, particularly the 'melt' effect. The function allocates a temporary buffer using DOOM's custom memory allocator (`Z_Malloc`) and performs the transformation by iterating through the array's elements. While the name of the function humorously reflects dissatisfaction with the approach, it demonstrates Carmack's pragmatic focus on performance optimization. In 1993, PCs typically had limited memory and processing power, making such optimizations crucial for smooth transitions. This technique influenced later game engines, which adopted similar memory layout strategies to improve rendering performance."
  - id: "init-color-xform"
    line_start: 72
    line_end: 80
    title: "Initializing color transformation wipe"
    wikipedia_url: "https://en.wikipedia.org/wiki/Procedural_generation"
    image_url: ""
    image_caption: ""
    content: "The `wipe_initColorXForm` function initializes the color transformation wipe effect by copying the starting screen buffer (`wipe_scr_start`) to the working buffer (`wipe_scr`). This sets up the initial state for the transition. Procedural screen transitions like this were groundbreaking in the early 1990s, as they added visual polish to games without requiring pre-rendered animations. By leveraging procedural techniques, DOOM's developers could create dynamic effects that were computationally efficient and adaptable to various screen resolutions. This approach paved the way for more sophisticated procedural effects in later games, including those in the Quake and Unreal series."
  - id: "do-color-xform"
    line_start: 82
    line_end: 124
    title: "Dynamic color interpolation for screen wipes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interpolation"
    image_url: ""
    image_caption: ""
    content: "The `wipe_doColorXForm` function performs the actual color transformation by interpolating pixel values between the starting and ending screens. It iterates through each pixel, adjusting its value incrementally based on the `ticks` parameter. This creates a smooth transition effect. The function uses a straightforward algorithm to determine whether a pixel's value should increase or decrease, ensuring that the transition progresses uniformly. This technique reflects Carmack's ability to balance simplicity and efficiency, a hallmark of DOOM's codebase. The interpolation method used here influenced later games that employed similar techniques for fading effects and transitions, including titles developed with the Unity and Unreal engines."
  - id: "init-melt-effect"
    line_start: 141
    line_end: 168
    title: "Setting up the melt screen wipe effect"
    wikipedia_url: "https://en.wikipedia.org/wiki/Procedural_generation"
    image_url: ""
    image_caption: ""
    content: "The `wipe_initMelt` function initializes the 'melt' screen wipe effect by transforming the start and end screen buffers into column-major order and setting up initial column positions. The column positions are randomized to create a staggered melting effect, where columns appear to drip down the screen at varying speeds. This effect is visually striking and was a novel feature in 1993. The use of procedural randomness adds a dynamic element to the transition, making it feel organic and less predictable. This technique inspired similar effects in later games, particularly those that sought to create immersive transitions between gameplay and menus."
  - id: "do-melt-effect"
    line_start: 172
    line_end: 222
    title: "Executing the melt screen wipe effect"
    wikipedia_url: "https://en.wikipedia.org/wiki/Procedural_generation"
    image_url: ""
    image_caption: ""
    content: "The `wipe_doMelt` function executes the 'melt' screen wipe effect by incrementally moving columns of pixels downward. It uses the column positions initialized by `wipe_initMelt` and adjusts them based on the `ticks` parameter, creating the appearance of melting. The function carefully handles edge cases, such as columns reaching the bottom of the screen, to ensure a smooth transition. This effect showcases Carmack's ingenuity in creating visually compelling effects with minimal computational overhead. The melt effect became a memorable part of DOOM's presentation and influenced the design of transitions in later games, including titles in the Quake series and other first-person shooters."
  - id: "screen-wipe-manager"
    line_start: 262
    line_end: 300
    title: "Managing screen wipe effects"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `wipe_ScreenWipe` function serves as the central manager for screen wipe effects, coordinating initialization, execution, and cleanup. It uses an array of function pointers to dynamically select the appropriate wipe effect based on the `wipeno` parameter. This modular design allows for easy addition of new effects and reflects Carmack's emphasis on extensibility and code reuse. By centralizing the logic for screen wipes, the function simplifies the integration of these effects into DOOM's engine. This design pattern influenced later game engines, which adopted similar modular approaches to manage visual effects and transitions."

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