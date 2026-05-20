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
description: "This file implements DOOM's floor and ceiling rendering system, a key innovation in creating immersive 3D environments on limited hardware."

summary:
  - point: "DOOM's visplane system efficiently handles floor and ceiling rendering."
    link: "https://doomwiki.org/wiki/Visplane"
    link_label: "Visplane"
  - point: "Plane rendering uses fixed-point arithmetic for speed on 1990s hardware."
    link: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    link_label: "Fixed-point arithmetic"
  - point: "Sky rendering bypasses lighting calculations for simplicity and performance."
    link: "https://doomwiki.org/wiki/Sky"
    link_label: "Sky rendering in DOOM"
  - point: "Span-based rendering minimizes overdraw and optimizes memory usage."
    link: "https://doomwiki.org/wiki/Span_buffer"
    link_label: "Span buffer"
  - point: "DOOM's rendering system inspired later engines like Quake and Unreal."
    link: "https://en.wikipedia.org/wiki/Quake_engine"
    link_label: "Quake engine"

enhancements:
  - id: "visplane-data-structure"
    line_start: 47
    line_end: 60
    title: "Visplane: Efficient floor and ceiling management"
    wikipedia_url: "https://doomwiki.org/wiki/Visplane"
    image_url: ""
    image_caption: ""
    content: "The visplane data structure is central to DOOM's floor and ceiling rendering system. It tracks regions of the screen where a specific floor or ceiling texture is visible, along with its height and lighting level. By limiting the number of visplanes to 128, the developers ensured that the rendering process remained efficient and manageable on the limited hardware of the early 1990s. This approach allowed DOOM to create visually complex environments without overwhelming the CPU or memory. The visplane system was a clever workaround for the lack of hardware acceleration, and it laid the groundwork for similar techniques in later engines like Quake."
  - id: "plane-texture-mapping"
    line_start: 79
    line_end: 93
    title: "Texture mapping with fixed-point precision"
    wikipedia_url: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    image_url: ""
    image_caption: ""
    content: "DOOM uses fixed-point arithmetic to calculate texture mapping for floors and ceilings. This decision was driven by the need for speed and precision on hardware without floating-point units. The cachedheight, cacheddistance, cachedxstep, and cachedystep arrays store precomputed values to avoid redundant calculations during rendering. Fixed-point arithmetic was a common choice in the era, as it allowed developers to perform mathematical operations quickly and with predictable results. This technique became a staple in game development, influencing engines like Build (used in Duke Nukem 3D) and even modern mobile games where performance is critical."
  - id: "r-mapplane-function"
    line_start: 107
    line_end: 178
    title: "R_MapPlane: Rendering spans for floors and ceilings"
    wikipedia_url: "https://doomwiki.org/wiki/Span_buffer"
    image_url: ""
    image_caption: ""
    content: "The R_MapPlane function is the core of DOOM's floor and ceiling rendering. It calculates texture coordinates and lighting for spans (horizontal strips) of the screen, using precomputed values like yslope and distscale to optimize performance. The function also handles lighting adjustments based on distance, ensuring that floors and ceilings appear correctly lit. This span-based approach minimizes overdraw, a common problem in rendering, and makes efficient use of memory and CPU cycles. The technique was innovative for its time and influenced later engines, including Quake and Unreal, which built on the idea of span buffers and optimized rendering pipelines."
  - id: "r-clearplanes-initialization"
    line_start: 181
    line_end: 209
    title: "R_ClearPlanes: Preparing for a new frame"
    wikipedia_url: "https://doomwiki.org/wiki/Rendering"
    image_url: ""
    image_caption: ""
    content: "R_ClearPlanes initializes the rendering system at the start of each frame. It resets clipping arrays (floorclip and ceilingclip) and clears cached texture heights to prepare for new calculations. This step ensures that the rendering process starts with a clean slate, avoiding artifacts or errors from previous frames. The function also calculates base scaling factors (basexscale and baseyscale) for texture mapping, based on the player's view angle. This meticulous preparation reflects the developers' attention to detail and their commitment to optimizing performance. Similar initialization routines became standard in game engines, ensuring consistent and efficient rendering."
  - id: "sky-rendering-hack"
    line_start: 395
    line_end: 419
    title: "Sky rendering: A bright and simple hack"
    wikipedia_url: "https://doomwiki.org/wiki/Sky"
    image_url: ""
    image_caption: ""
    content: "DOOM's sky rendering system is a clever hack that simplifies lighting calculations. Skies are always drawn at full brightness, using a fixed colormap (colormaps[0]). This decision bypasses the lighting adjustments applied to other textures, reducing computational overhead and ensuring that skies remain visually consistent. The hack also avoids complications with special effects like the invulnerability power-up, which alters lighting for other textures. By prioritizing simplicity and performance, the developers created a visually striking sky that complements the game's fast-paced action. This approach influenced later games, which often used similar hacks for sky rendering to optimize performance."

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