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
description: "This file implements DOOM's iconic screen wipe effects, a visual flourish that marked transitions between gameplay and menus, showcasing the game's technical prowess."

summary:
  - point: "Implements multiple screen wipe effects for transitions"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "Uses column-major transformations for optimized memory access"
    link: "https://en.wikipedia.org/wiki/Column-major_order"
    link_label: "Column-major order"
  - point: "Demonstrates clever use of memory allocation and manipulation"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory management"

enhancements:
  - id: "shitty-col-major-transform"
    line_start: 50
    line_end: 70
    title: "A self-deprecating name hides clever optimization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Column-major_order"
    image_url: ""
    image_caption: ""
    content: "The function `wipe_shittyColMajorXform` is humorously named, but its purpose is serious: it transforms a 2D array from row-major to column-major order. This change optimizes memory access patterns for the subsequent screen wipe operations. In the early 1990s, memory bandwidth was a precious resource, especially on consumer-grade hardware like the Intel 486 or early Pentium processors. By reorganizing the data, the developers ensured faster access during rendering. John Carmack, known for his technical ingenuity, often prioritized performance optimizations like this, even in seemingly minor features. The choice to use column-major order reflects a deep understanding of hardware constraints and the desire to squeeze every ounce of speed from the system. This technique, while specific to DOOM's screen wipes, echoes broader trends in game development at the time: clever tricks to overcome hardware limitations. Today, such transformations are less common, as modern hardware and APIs abstract away these concerns. However, studying this code reveals the ingenuity required in an era when every byte and cycle mattered."
  - id: "color-xform-initialization"
    line_start: 72
    line_end: 80
    title: "Setting the stage for color transitions"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `wipe_initColorXForm` function initializes the data for a color transition effect, copying the starting screen into a working buffer. This marks the beginning of a visual effect that smoothly interpolates between two images. In 1993, such effects were rare in games, as they required careful manipulation of pixel data and efficient algorithms to avoid performance bottlenecks. The use of direct memory copying (`memcpy`) reflects the low-level programming style that defined DOOM's development. Carmack and his team were working on hardware with limited graphical capabilities, where every frame had to be carefully managed to maintain the game's legendary speed. This initialization step is a testament to the team's ability to balance visual flair with technical constraints. The color wipe effect, while simple by today's standards, added a layer of polish that contributed to DOOM's immersive experience."
  - id: "color-xform-transition"
    line_start: 82
    line_end: 124
    title: "Pixel-by-pixel interpolation for smooth wipes"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `wipe_doColorXForm` function performs the actual transition between two screens, interpolating pixel values frame by frame. Each pixel's value is adjusted incrementally, either increasing or decreasing toward its target value. This creates a smooth fade effect that was visually striking in 1993. The algorithm is straightforward but effective, iterating through each pixel and adjusting its value based on the `ticks` parameter, which controls the speed of the transition. The function's design reflects the constraints of the era: limited CPU power and no hardware acceleration for graphics. By implementing this effect in software, the DOOM team demonstrated their mastery of low-level programming. The interpolation technique used here influenced later games, which adopted similar approaches for screen transitions and effects. While modern engines often rely on shaders and GPU acceleration for such tasks, the principles of gradual interpolation remain relevant."
  - id: "melt-effect-initialization"
    line_start: 141
    line_end: 168
    title: "Randomized column positions for dynamic melting"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `wipe_initMelt` function sets up the iconic 'melt' screen wipe effect, where the image appears to drip downward in columns. This initialization step involves copying the start screen and transforming its data into column-major format for optimized processing. It also generates random initial positions for each column, adding a dynamic and chaotic feel to the effect. The randomness is achieved using the `M_Random` function, which ensures that each transition feels unique. This effect showcases DOOM's ability to blend technical precision with artistic creativity. In the early 1990s, such effects were groundbreaking, as they required significant computational effort on hardware like the Intel 486. The melt effect became one of DOOM's signature visual flourishes, contributing to the game's polished and professional feel. It also highlighted the team's ability to innovate within the constraints of the time, using randomness and clever data manipulation to create memorable experiences."
  - id: "melt-effect-execution"
    line_start: 172
    line_end: 222
    title: "Column-by-column dripping animation"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `wipe_doMelt` function executes the 'melt' screen wipe effect, animating each column as it drips downward. The algorithm iterates through each column, adjusting its position and copying pixel data from the end screen to the working buffer. The effect is achieved by incrementally moving each column downward, with varying speeds based on its initial position. This creates a visually dynamic and chaotic transition that feels organic and fluid. The function's complexity reflects the challenges of implementing such effects on early 1990s hardware. By carefully managing memory and processing each column independently, the DOOM team ensured that the effect was both visually impressive and performant. The melt effect became one of DOOM's most recognizable transitions, influencing later games and demonstrating the potential of software-rendered graphics. While modern engines achieve similar effects using GPU shaders, the principles of column-based animation remain relevant in certain contexts."
  - id: "screen-wipe-controller"
    line_start: 262
    line_end: 300
    title: "A unified interface for screen transitions"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `wipe_ScreenWipe` function serves as the central controller for DOOM's screen wipe effects, managing initialization, execution, and cleanup. It uses a function pointer array to dynamically select the appropriate wipe effect based on the `wipeno` parameter. This modular design allows for easy addition of new effects and ensures that the code remains organized and maintainable. The function also handles the transition's lifecycle, ensuring that resources are allocated and freed appropriately. This design reflects the team's focus on flexibility and extensibility, traits that were essential in an era of rapid game development. By centralizing the logic for screen wipes, the DOOM team created a system that could be reused and expanded in future projects. The modular approach influenced later game engines, which adopted similar techniques for managing visual effects. Today, such systems are often implemented using object-oriented principles, but the underlying idea of modularity remains the same."

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