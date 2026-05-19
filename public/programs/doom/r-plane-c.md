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
description: "This file contains the code responsible for rendering floors and ceilings in DOOM, a groundbreaking game that defined the FPS genre and pushed the limits of 1990s hardware."

summary:
  - point: "The visplane technique was used to efficiently render floors and ceilings."
    link: "https://doomwiki.org/wiki/Visplane"
    link_label: "Visplane"
  - point: "DOOM's rendering system was optimized for low-end hardware of the early 1990s."
    link: "https://en.wikipedia.org/wiki/DOOM"
    link_label: "DOOM"
  - point: "The code includes clever hacks to handle sky rendering and lighting effects."
    link: "https://doomwiki.org/wiki/Sky_rendering"
    link_label: "Sky Rendering"

enhancements:
  - id: "visplane-data-structure"
    line_start: 51
    line_end: 56
    title: "Visplane: A clever rendering shortcut"
    wikipedia_url: "https://doomwiki.org/wiki/Visplane"
    image_url: ""
    image_caption: ""
    content: "The visplane data structure is central to DOOM's floor and ceiling rendering system. It represents a collection of spans (horizontal strips) that share the same height, texture, and lighting properties. By grouping pixels this way, the game avoids the need to individually calculate every pixel in a floor or ceiling, dramatically improving performance on the limited hardware of the early 1990s. This technique was devised by John Carmack, whose innovative approaches to rendering were instrumental in making DOOM run smoothly on machines with just 4MB of RAM and processors like the Intel 486. The visplane method was a response to the constraints of the era, where memory and processing power were scarce, and every optimization mattered. It became a hallmark of DOOM's engine, influencing later games and engines."
  - id: "r-mapplane-subroutine"
    line_start: 120
    line_end: 178
    title: "Mapping planes for efficient rendering"
    wikipedia_url: "https://doomwiki.org/wiki/Rendering"
    image_url: ""
    image_caption: ""
    content: "The `R_MapPlane` function is a critical piece of DOOM's rendering pipeline. It calculates the texture mapping for a horizontal span of a floor or ceiling, using precomputed values for distance scaling and lighting. This subroutine relies heavily on fixed-point arithmetic, a necessity for performance on early 1990s hardware. At the time, floating-point operations were prohibitively slow, so developers like John Carmack used fixed-point math to perform calculations efficiently. The function also incorporates lighting adjustments based on distance, creating the illusion of depth and atmosphere. This combination of mathematical precision and clever optimization allowed DOOM to render immersive environments at high speed, setting a benchmark for future 3D games."
  - id: "r-clearplanes-initialization"
    line_start: 182
    line_end: 209
    title: "Preparing planes for a new frame"
    wikipedia_url: "https://doomwiki.org/wiki/Rendering"
    image_url: ""
    image_caption: ""
    content: "The `R_ClearPlanes` function initializes the rendering state at the beginning of each frame. It resets clipping arrays, clears cached heights, and calculates texture scaling factors based on the player's view angle. This setup ensures that the rendering pipeline starts with a clean slate, ready to process the next frame's geometry. In the early 1990s, games like DOOM had to manage every aspect of rendering manually, as hardware acceleration was nonexistent. The function's reliance on precomputed values and efficient memory management reflects the constraints of the era, where developers had to wring every ounce of performance from the CPU."
  - id: "r-findplane-sky-handling"
    line_start: 215
    line_end: 258
    title: "Sky rendering: A unique challenge"
    wikipedia_url: "https://doomwiki.org/wiki/Sky_rendering"
    image_url: ""
    image_caption: ""
    content: "The `R_FindPlane` function includes a special case for rendering skies, treating them differently from regular floors and ceilings. Skies are always drawn at full brightness and are unaffected by lighting changes, creating a consistent backdrop for the game's environments. This approach simplifies the rendering process and ensures that the sky remains visually distinct, contributing to DOOM's atmospheric design. The handling of skies reflects the game's focus on performance and visual impact, as developers prioritized techniques that would run efficiently while maintaining the game's immersive feel."
  - id: "r-drawplanes-final-rendering"
    line_start: 367
    line_end: 452
    title: "Drawing planes: The final step"
    wikipedia_url: "https://doomwiki.org/wiki/Rendering"
    image_url: ""
    image_caption: ""
    content: "The `R_DrawPlanes` function is the culmination of DOOM's floor and ceiling rendering process. It iterates through the visplanes, calculating spans and applying textures and lighting. For sky textures, it uses a simplified rendering path that ensures consistent brightness and visual clarity. The function also includes error checks to prevent overflows in the visplane and opening arrays, a testament to the meticulous attention to detail in DOOM's codebase. This final step in the rendering pipeline demonstrates the game's ability to balance complexity and performance, delivering visually rich environments on hardware that was considered modest even in 1993."

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