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
description: "This file implements the rendering of floors and ceilings in DOOM, a groundbreaking technique that contributed to the game's immersive environments and efficient 3D graphics."

summary:
  - point: "DOOM's visplane algorithm optimized floor and ceiling rendering"
    link: "https://doomwiki.org/wiki/Visplane"
    link_label: "Visplane Algorithm"
  - point: "Efficient texture mapping enabled real-time rendering on 1993 hardware"
    link: "https://en.wikipedia.org/wiki/Texture_mapping"
    link_label: "Texture Mapping"
  - point: "Sky rendering was handled separately for brightness consistency"
    link: "https://doomwiki.org/wiki/Sky"
    link_label: "Sky Rendering in DOOM"

enhancements:
  - id: "visplane-data-structure"
    line_start: 47
    line_end: 56
    title: "The Data Structure That Solved Overdraw"
    wikipedia_url: "https://doomwiki.org/wiki/Visplane"
    image_url: ""
    image_caption: ""
    content: "The visplane data structure is central to DOOM's floor and ceiling rendering. It tracks regions of the screen that correspond to a specific height, texture, and light level. By grouping pixels into contiguous spans, visplanes prevent redundant rendering of overlapping areas, a problem known as overdraw. In 1993, consumer PCs were limited by slow CPUs and no dedicated GPUs, making efficient algorithms critical. John Carmack devised the visplane system to minimize computational overhead while maintaining visual fidelity. This approach allowed DOOM to render complex 3D environments in real time on hardware like the Intel 486. The visplane concept influenced later engines, including Quake, and remains a foundational idea in optimizing rasterization for real-time graphics."
  - id: "r-mapplane-function"
    line_start: 107
    line_end: 178
    title: "Mapping Pixels to World Coordinates"
    wikipedia_url: "https://en.wikipedia.org/wiki/Texture_mapping"
    image_url: ""
    image_caption: ""
    content: "The `R_MapPlane` function calculates texture mapping for floor and ceiling spans. It uses precomputed values like `yslope` and `distscale` to determine the distance from the viewer to each pixel, enabling accurate perspective correction. This was a critical innovation in DOOM's rendering pipeline, as it allowed textures to appear correctly aligned and scaled despite the lack of hardware acceleration. Carmack's use of fixed-point arithmetic ensured precision while avoiding the performance hit of floating-point calculations. This function exemplifies the ingenuity required to deliver immersive graphics on early PCs. Techniques from `R_MapPlane` influenced later advancements in texture mapping, including mipmapping and anisotropic filtering in modern GPUs."
  - id: "r-clearplanes-function"
    line_start: 181
    line_end: 209
    title: "Resetting the Frame for Efficient Rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Frame_buffer"
    image_url: ""
    image_caption: ""
    content: "The `R_ClearPlanes` function initializes data structures at the start of each frame, including `floorclip` and `ceilingclip` arrays that define the visible bounds of floors and ceilings. It also resets cached height values and calculates texture scaling based on the player's view angle. This setup ensures that rendering begins with a clean slate, avoiding artifacts and maintaining performance. In the early 1990s, memory management was a critical concern, as PCs had limited RAM and no virtual memory. By efficiently resetting and reusing buffers, DOOM could maintain high frame rates even in complex scenes. This approach influenced later real-time rendering systems, including those in Quake and Unreal Engine."
  - id: "r-findplane-function"
    line_start: 214
    line_end: 259
    title: "Grouping Pixels by Height and Texture"
    wikipedia_url: "https://doomwiki.org/wiki/Visplane"
    image_url: ""
    image_caption: ""
    content: "The `R_FindPlane` function searches for an existing visplane that matches the specified height, texture, and light level. If no match is found, it creates a new visplane. This grouping mechanism is key to DOOM's efficient rendering, as it minimizes redundant calculations for areas of the screen that share visual properties. By consolidating spans into visplanes, the engine reduces memory usage and computational overhead. This technique was groundbreaking in 1993, when real-time 3D rendering was still in its infancy. The visplane system inspired similar optimizations in later engines, helping to establish best practices for rasterization and span-based rendering."
  - id: "r-drawplanes-function"
    line_start: 363
    line_end: 453
    title: "Rendering Floors, Ceilings, and Skies"
    wikipedia_url: "https://doomwiki.org/wiki/Rendering"
    image_url: ""
    image_caption: ""
    content: "The `R_DrawPlanes` function is responsible for rendering all floor and ceiling spans at the end of each frame. It iterates through visplanes, calculates lighting and texture scaling, and invokes the span drawing function. Sky textures are handled separately, using a fixed brightness to ensure visual consistency. This separation of sky rendering from other spans was a clever hack to simplify lighting calculations. The function also includes range checks to prevent buffer overflows, a common concern in early PC programming. DOOM's ability to render floors, ceilings, and skies in real time was a major technical achievement, paving the way for more advanced rendering techniques in Quake and beyond."

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
