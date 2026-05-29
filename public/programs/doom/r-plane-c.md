---
title: "r_plane.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/r_plane.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/r_plane.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "r-plane-c"
order: 35
description: "This file implements floor and ceiling rendering in DOOM, a groundbreaking technique for real-time 3D graphics on early consumer PCs."

summary:
  - point: "DOOM's floor and ceiling rendering pushed the limits of 1993 hardware"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM"
  - point: "Visplane overflow was a notorious bug tied to this rendering system"
    link: "https://doomwiki.org/wiki/Visplane_overflow"
    link_label: "Visplane Overflow"
  - point: "The span-based rendering approach influenced later engines"
    link: "https://doomwiki.org/wiki/Rendering_engine"
    link_label: "Rendering Engine"

enhancements:
  - id: "initialize-plane-rendering"
    line_start: 96
    line_end: 177
    title: "Why DOOM's planes needed initialization"
    wikipedia_url: "https://doomwiki.org/wiki/Rendering_engine"
    image_url: ""
    image_caption: ""
    content: "The `R_InitPlanes` function is a placeholder for initializing the plane rendering system at game startup. While the function itself is empty, its presence reflects the modular design philosophy of DOOM's codebase, where rendering components are initialized separately to ensure flexibility and maintainability. In the early 1990s, modularity was critical for game engines, as developers often had to adapt their code to different hardware configurations. John Carmack, the lead programmer, was known for his focus on clean, reusable code, which allowed DOOM to be ported to numerous platforms. This initialization step laid the groundwork for the plane rendering system, which handled floors and ceilings efficiently using span-based techniques. These techniques were later studied and adapted by developers of engines like Build (used in Duke Nukem 3D) and Quake, influencing the evolution of real-time graphics."
  - id: "map-plane-span-rendering"
    line_start: 117
    line_end: 177
    title: "How DOOM mapped spans for floors and ceilings"
    wikipedia_url: "https://doomwiki.org/wiki/Rendering_engine"
    image_url: ""
    image_caption: ""
    content: "The `R_MapPlane` function is the core of DOOM's span-based rendering system for floors and ceilings. It calculates texture mapping and lighting for a horizontal span of pixels, using precomputed values like `yslope` and `distscale` to optimize performance. This approach was revolutionary for its time, as it allowed DOOM to render complex 3D environments on hardware with limited processing power. In 1993, most consumer PCs lacked dedicated graphics hardware, so games relied on clever software techniques to achieve real-time rendering. Carmack's use of fixed-point arithmetic and precomputed tables minimized computational overhead, enabling DOOM to run smoothly on machines like the 486. The span-based rendering method influenced later engines, including Quake, which expanded on these ideas with true 3D rendering."
  - id: "clear-plane-frame-start"
    line_start: 180
    line_end: 358
    title: "Resetting planes at the start of each frame"
    wikipedia_url: "https://doomwiki.org/wiki/Rendering_engine"
    image_url: ""
    image_caption: ""
    content: "The `R_ClearPlanes` function resets the plane rendering system at the beginning of each frame. It clears clipping values and initializes texture mapping parameters, ensuring that the rendering process starts with a clean slate. This step is crucial for maintaining performance and avoiding graphical artifacts in DOOM's fast-paced gameplay. In the early 1990s, real-time rendering was constrained by limited memory and processing power, so developers had to carefully manage resources. By resetting planes each frame, Carmack ensured that DOOM's rendering system could handle dynamic environments without slowing down or crashing. This technique of per-frame initialization became standard practice in game engines, influencing the design of later systems like Unreal Engine and Unity."
  - id: "find-plane-reuse"
    line_start: 214
    line_end: 258
    title: "Reusing visplanes for efficient rendering"
    wikipedia_url: "https://doomwiki.org/wiki/Visplane_overflow"
    image_url: ""
    image_caption: ""
    content: "The `R_FindPlane` function searches for an existing visplane that matches the given height, texture, and lighting level. If no match is found, it creates a new visplane. This system was designed to optimize rendering by reusing visplanes whenever possible, reducing memory usage and computational overhead. Visplanes are a key component of DOOM's rendering engine, representing horizontal spans of pixels for floors and ceilings. However, this system was also the source of the infamous \"visplane overflow\" bug, which occurred when too many visplanes were created in complex scenes. Despite this limitation, the visplane system was a clever solution to the constraints of 1993 hardware, and its principles influenced later rendering techniques in games like Quake and Unreal."
  - id: "check-plane-span-merging"
    line_start: 262
    line_end: 323
    title: "Merging spans to avoid redundant visplanes"
    wikipedia_url: "https://doomwiki.org/wiki/Rendering_engine"
    image_url: ""
    image_caption: ""
    content: "The `R_CheckPlane` function attempts to merge spans within a visplane, reducing the need to create new visplanes. By checking for overlap and continuity between spans, this function optimizes memory usage and improves rendering performance. In the early 1990s, memory constraints were a significant challenge for game developers, as most consumer PCs had only a few megabytes of RAM. Carmack's approach to span merging reflects his focus on efficiency and resource management, which were critical for achieving DOOM's groundbreaking graphics. This technique of span optimization influenced later engines, including Build and Quake, which expanded on these ideas to handle more complex environments."
  - id: "make-spans-for-rendering"
    line_start: 329
    line_end: 358
    title: "Generating spans for floor and ceiling rendering"
    wikipedia_url: "https://doomwiki.org/wiki/Rendering_engine"
    image_url: ""
    image_caption: ""
    content: "The `R_MakeSpans` function generates spans for floor and ceiling rendering, dividing horizontal sections into manageable chunks for processing. This function works in tandem with `R_MapPlane` to apply texture mapping and lighting to each span. The span-based approach was a key innovation in DOOM's rendering engine, allowing the game to create immersive 3D environments on hardware with limited capabilities. By breaking rendering tasks into smaller spans, Carmack optimized performance and minimized computational overhead, ensuring smooth gameplay even on low-end PCs. This method of span generation became a foundational concept in real-time graphics, influencing the design of later engines like Quake and Unreal."
  - id: "draw-planes-end-frame"
    line_start: 362
    line_end: 452
    title: "Rendering floors and ceilings at frame end"
    wikipedia_url: "https://doomwiki.org/wiki/Rendering_engine"
    image_url: ""
    image_caption: ""
    content: "The `R_DrawPlanes` function renders floors and ceilings at the end of each frame, processing visplanes and applying texture mapping and lighting. This function handles both sky textures and regular flats, ensuring that DOOM's environments are visually consistent and immersive. The rendering process uses precomputed values like `zlight` and `cachedheight` to optimize performance, reflecting Carmack's focus on efficiency. In 1993, real-time graphics were constrained by the limitations of consumer hardware, so developers had to use innovative techniques to achieve high-quality visuals. The span-based rendering system implemented in `R_DrawPlanes` was a major breakthrough, influencing the design of later engines like Quake and Unreal. This function also highlights the modularity of DOOM's codebase, which allowed developers to adapt and expand the engine for new platforms and features."

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
//	Here is a core component: drawing the floors and ceilings,
//	 while maintaining a per column clipping list only.
//	Moreover, the sky areas have to be determined.
//
//-----------------------------------------------------------------------------


static const char
rcsid[] = "$Id: r_plane.c,v 1.4 1997/02/03 16:47:55 b1 Exp $";

#include <stdlib.h>

#include "i_system.h"
#include "z_zone.h"
#include "w_wad.h"

#include "doomdef.h"
#include "doomstat.h"

#include "r_local.h"
#include "r_sky.h"



planefunction_t		floorfunc;
planefunction_t		ceilingfunc;

//
// opening
//

// Here comes the obnoxious "visplane".
#define MAXVISPLANES	128
visplane_t		visplanes[MAXVISPLANES];
visplane_t*		lastvisplane;
visplane_t*		floorplane;
visplane_t*		ceilingplane;

// ?
#define MAXOPENINGS	SCREENWIDTH*64
short			openings[MAXOPENINGS];
short*			lastopening;


//
// Clip values are the solid pixel bounding the range.
//  floorclip starts out SCREENHEIGHT
//  ceilingclip starts out -1
//
short			floorclip[SCREENWIDTH];
short			ceilingclip[SCREENWIDTH];

//
// spanstart holds the start of a plane span
// initialized to 0 at start
//
int			spanstart[SCREENHEIGHT];
int			spanstop[SCREENHEIGHT];

//
// texture mapping
//
lighttable_t**		planezlight;
fixed_t			planeheight;

fixed_t			yslope[SCREENHEIGHT];
fixed_t			distscale[SCREENWIDTH];
fixed_t			basexscale;
fixed_t			baseyscale;

fixed_t			cachedheight[SCREENHEIGHT];
fixed_t			cacheddistance[SCREENHEIGHT];
fixed_t			cachedxstep[SCREENHEIGHT];
fixed_t			cachedystep[SCREENHEIGHT];



//
// R_InitPlanes
// Only at game startup.
//
void R_InitPlanes (void)
{
  // Doh!
}


//
// R_MapPlane
//
// Uses global vars:
//  planeheight
//  ds_source
//  basexscale
//  baseyscale
//  viewx
//  viewy
//
// BASIC PRIMITIVE
//
void
R_MapPlane
( int		y,
  int		x1,
  int		x2 )
{
    angle_t	angle;
    fixed_t	distance;
    fixed_t	length;
    unsigned	index;
	
#ifdef RANGECHECK
    if (x2 < x1
	|| x1<0
	|| x2>=viewwidth
	|| (unsigned)y>viewheight)
    {
	I_Error ("R_MapPlane: %i, %i at %i",x1,x2,y);
    }
#endif

    if (planeheight != cachedheight[y])
    {
	cachedheight[y] = planeheight;
	distance = cacheddistance[y] = FixedMul (planeheight, yslope[y]);
	ds_xstep = cachedxstep[y] = FixedMul (distance,basexscale);
	ds_ystep = cachedystep[y] = FixedMul (distance,baseyscale);
    }
    else
    {
	distance = cacheddistance[y];
	ds_xstep = cachedxstep[y];
	ds_ystep = cachedystep[y];
    }
	
    length = FixedMul (distance,distscale[x1]);
    angle = (viewangle + xtoviewangle[x1])>>ANGLETOFINESHIFT;
    ds_xfrac = viewx + FixedMul(finecosine[angle], length);
    ds_yfrac = -viewy - FixedMul(finesine[angle], length);

    if (fixedcolormap)
	ds_colormap = fixedcolormap;
    else
    {
	index = distance >> LIGHTZSHIFT;
	
	if (index >= MAXLIGHTZ )
	    index = MAXLIGHTZ-1;

	ds_colormap = planezlight[index];
    }
	
    ds_y = y;
    ds_x1 = x1;
    ds_x2 = x2;

    // high or low detail
    spanfunc ();	
}


//
// R_ClearPlanes
// At begining of frame.
//
void R_ClearPlanes (void)
{
    int		i;
    angle_t	angle;
    
    // opening / clipping determination
    for (i=0 ; i<viewwidth ; i++)
    {
	floorclip[i] = viewheight;
	ceilingclip[i] = -1;
    }

    lastvisplane = visplanes;
    lastopening = openings;
    
    // texture calculation
    memset (cachedheight, 0, sizeof(cachedheight));

    // left to right mapping
    angle = (viewangle-ANG90)>>ANGLETOFINESHIFT;
	
    // scale will be unit scale at SCREENWIDTH/2 distance
    basexscale = FixedDiv (finecosine[angle],centerxfrac);
    baseyscale = -FixedDiv (finesine[angle],centerxfrac);
}




//
// R_FindPlane
//
visplane_t*
R_FindPlane
( fixed_t	height,
  int		picnum,
  int		lightlevel )
{
    visplane_t*	check;
	
    if (picnum == skyflatnum)
    {
	height = 0;			// all skys map together
	lightlevel = 0;
    }
	
    for (check=visplanes; check<lastvisplane; check++)
    {
	if (height == check->height
	    && picnum == check->picnum
	    && lightlevel == check->lightlevel)
	{
	    break;
	}
    }
    
			
    if (check < lastvisplane)
	return check;
		
    if (lastvisplane - visplanes == MAXVISPLANES)
	I_Error ("R_FindPlane: no more visplanes");
		
    lastvisplane++;

    check->height = height;
    check->picnum = picnum;
    check->lightlevel = lightlevel;
    check->minx = SCREENWIDTH;
    check->maxx = -1;
    
    memset (check->top,0xff,sizeof(check->top));
		
    return check;
}


//
// R_CheckPlane
//
visplane_t*
R_CheckPlane
( visplane_t*	pl,
  int		start,
  int		stop )
{
    int		intrl;
    int		intrh;
    int		unionl;
    int		unionh;
    int		x;
	
    if (start < pl->minx)
    {
	intrl = pl->minx;
	unionl = start;
    }
    else
    {
	unionl = pl->minx;
	intrl = start;
    }
	
    if (stop > pl->maxx)
    {
	intrh = pl->maxx;
	unionh = stop;
    }
    else
    {
	unionh = pl->maxx;
	intrh = stop;
    }

    for (x=intrl ; x<= intrh ; x++)
	if (pl->top[x] != 0xff)
	    break;

    if (x > intrh)
    {
	pl->minx = unionl;
	pl->maxx = unionh;

	// use the same one
	return pl;		
    }
	
    // make a new visplane
    lastvisplane->height = pl->height;
    lastvisplane->picnum = pl->picnum;
    lastvisplane->lightlevel = pl->lightlevel;
    
    pl = lastvisplane++;
    pl->minx = start;
    pl->maxx = stop;

    memset (pl->top,0xff,sizeof(pl->top));
		
    return pl;
}


//
// R_MakeSpans
//
void
R_MakeSpans
( int		x,
  int		t1,
  int		b1,
  int		t2,
  int		b2 )
{
    while (t1 < t2 && t1<=b1)
    {
	R_MapPlane (t1,spanstart[t1],x-1);
	t1++;
    }
    while (b1 > b2 && b1>=t1)
    {
	R_MapPlane (b1,spanstart[b1],x-1);
	b1--;
    }
	
    while (t2 < t1 && t2<=b2)
    {
	spanstart[t2] = x;
	t2++;
    }
    while (b2 > b1 && b2>=t2)
    {
	spanstart[b2] = x;
	b2--;
    }
}



//
// R_DrawPlanes
// At the end of each frame.
//
void R_DrawPlanes (void)
{
    visplane_t*		pl;
    int			light;
    int			x;
    int			stop;
    int			angle;
				
#ifdef RANGECHECK
    if (ds_p - drawsegs > MAXDRAWSEGS)
	I_Error ("R_DrawPlanes: drawsegs overflow (%i)",
		 ds_p - drawsegs);
    
    if (lastvisplane - visplanes > MAXVISPLANES)
	I_Error ("R_DrawPlanes: visplane overflow (%i)",
		 lastvisplane - visplanes);
    
    if (lastopening - openings > MAXOPENINGS)
	I_Error ("R_DrawPlanes: opening overflow (%i)",
		 lastopening - openings);
#endif

    for (pl = visplanes ; pl < lastvisplane ; pl++)
    {
	if (pl->minx > pl->maxx)
	    continue;

	
	// sky flat
	if (pl->picnum == skyflatnum)
	{
	    dc_iscale = pspriteiscale>>detailshift;
	    
	    // Sky is allways drawn full bright,
	    //  i.e. colormaps[0] is used.
	    // Because of this hack, sky is not affected
	    //  by INVUL inverse mapping.
	    dc_colormap = colormaps;
	    dc_texturemid = skytexturemid;
	    for (x=pl->minx ; x <= pl->maxx ; x++)
	    {
		dc_yl = pl->top[x];
		dc_yh = pl->bottom[x];

		if (dc_yl <= dc_yh)
		{
		    angle = (viewangle + xtoviewangle[x])>>ANGLETOSKYSHIFT;
		    dc_x = x;
		    dc_source = R_GetColumn(skytexture, angle);
		    colfunc ();
		}
	    }
	    continue;
	}
	
	// regular flat
	ds_source = W_CacheLumpNum(firstflat +
				   flattranslation[pl->picnum],
				   PU_STATIC);
	
	planeheight = abs(pl->height-viewz);
	light = (pl->lightlevel >> LIGHTSEGSHIFT)+extralight;

	if (light >= LIGHTLEVELS)
	    light = LIGHTLEVELS-1;

	if (light < 0)
	    light = 0;

	planezlight = zlight[light];

	pl->top[pl->maxx+1] = 0xff;
	pl->top[pl->minx-1] = 0xff;
		
	stop = pl->maxx + 1;

	for (x=pl->minx ; x<= stop ; x++)
	{
	    R_MakeSpans(x,pl->top[x-1],
			pl->bottom[x-1],
			pl->top[x],
			pl->bottom[x]);
	}
	
	Z_ChangeTag (ds_source, PU_CACHE);
    }
}
```