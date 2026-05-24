---
title: "d_surf.c"
program: "Quake"
program_slug: "quake"
file_path: "QW/client/d_surf.c"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/Quake/blob/master/QW/client/d_surf.c"
year: 1996
author: "John Carmack, Michael Abrash, John Cash"
slug: "d-surf-c"
order: 3
description: "This file demonstrates id Software's innovative surface caching and rendering optimizations in Quake, enabling complex 3D environments on limited hardware."

summary:
  - point: "Introduces surface caching to optimize memory usage"
    link: "https://en.wikipedia.org/wiki/Surface_cache"
    link_label: "Surface Cache"
  - point: "Implements guard bytes to detect memory corruption"
    link: "https://en.wikipedia.org/wiki/Memory_corruption"
    link_label: "Memory Corruption"
  - point: "Dynamic allocation for animated and flashing surfaces"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Optimized for x86 processors and constrained memory"
    link: "https://en.wikipedia.org/wiki/X86"
    link_label: "x86 Architecture"
  - point: "Pioneered techniques influencing later 3D engines"
    link: "https://en.wikipedia.org/wiki/Unreal_Engine"
    link_label: "Unreal Engine"

enhancements:
  - id: "surface-cache-size-calculation"
    line_start: 29
    line_end: 53
    title: "How Quake Calculated Surface Cache Sizes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Surface_cache"
    image_url: ""
    image_caption: ""
    content: "This function calculates the size of the surface cache based on the resolution of the game and optional command-line parameters. The cache size starts with a default value for 320x200 resolution and scales up for higher resolutions, adding memory for larger pixel counts. In 1996, hardware constraints meant developers had to carefully manage memory usage, especially for graphics-intensive applications like Quake. John Carmack and Michael Abrash were known for their meticulous optimization techniques, which allowed Quake to run smoothly on hardware with limited RAM and processing power. This approach influenced later engines, such as Unreal Engine, which adopted similar dynamic resource allocation strategies for textures and surfaces."
  - id: "cache-guard-detection"
    line_start: 55
    line_end: 64
    title: "The Debugging Trick That Prevented Crashes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_corruption"
    image_url: ""
    image_caption: ""
    content: "The `D_CheckCacheGuard` function checks for memory corruption by verifying guard bytes placed at the end of the surface cache. If the guard bytes are altered, the program halts with an error. This technique was critical in an era when debugging tools were rudimentary, and memory corruption bugs could lead to unpredictable crashes. By implementing this safeguard, id Software ensured greater stability in Quake's rendering pipeline. This method became a standard debugging practice, influencing tools like Valgrind and modern memory debugging frameworks."
  - id: "cache-initialization"
    line_start: 79
    line_end: 101
    title: "Initializing Surface Caches for 3D Rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `D_InitCaches` function sets up the surface cache, allocating memory and preparing it for use in rendering. It also clears the guard bytes to prevent false positives during corruption checks. This initialization step was essential for ensuring efficient memory usage and stability in Quake's rendering system. The technique of preallocating and managing memory for graphical elements became a foundational concept in game engine design, influencing engines like Source and Unity."
  - id: "dynamic-cache-allocation"
    line_start: 126
    line_end: 216
    title: "Dynamic Allocation for Surface Caching"
    wikipedia_url: "https://en.wikipedia.org/wiki/Surface_cache"
    image_url: ""
    image_caption: ""
    content: "The `D_SCAlloc` function dynamically allocates memory for surface caches, ensuring that each surface has enough space for its texture data. It handles fragmentation by combining smaller blocks into larger ones and creates new fragments when necessary. This approach was a direct response to the limited memory available on consumer-grade PCs in 1996. By carefully managing memory allocation, id Software enabled Quake to render detailed 3D environments without exceeding hardware limits. This technique influenced later engines, which adopted similar strategies for handling dynamic resource allocation in real-time applications."
  - id: "surface-cache-reuse"
    line_start: 264
    line_end: 336
    title: "Reusing Cached Surfaces for Performance Gains"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `D_CacheSurface` function checks if a surface's cached data can be reused or if new memory needs to be allocated. It ensures that animated and flashing surfaces are updated while static surfaces remain cached for efficiency. This technique reduced redundant calculations and memory allocations, significantly improving rendering performance. In the mid-1990s, such optimizations were crucial for achieving smooth gameplay on hardware with limited processing power. The concept of caching and reusing graphical data became a cornerstone of modern game engine design, influencing systems like texture atlases and GPU memory management in engines such as Unreal and CryEngine."

---

```cpp
/*
Copyright (C) 1996-1997 Id Software, Inc.

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  

See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

*/
// d_surf.c: rasterization driver surface heap manager

#include "quakedef.h"
#include "d_local.h"
#include "r_local.h"

float           surfscale;
qboolean        r_cache_thrash;         // set if surface cache is thrashing

int                                     sc_size;
surfcache_t                     *sc_rover, *sc_base;

#define GUARDSIZE       4


int     D_SurfaceCacheForRes (int width, int height)
{
	int             size, pix;

	if (COM_CheckParm ("-surfcachesize"))
	{
		size = Q_atoi(com_argv[COM_CheckParm("-surfcachesize")+1]) * 1024;
		return size;
	}
	
	size = SURFCACHE_SIZE_AT_320X200;

	pix = width*height;
	if (pix > 64000)
		size += (pix-64000)*3;
		

	return size;
}

void D_CheckCacheGuard (void)
{
	byte    *s;
	int             i;

	s = (byte *)sc_base + sc_size;
	for (i=0 ; i<GUARDSIZE ; i++)
		if (s[i] != (byte)i)
			Sys_Error ("D_CheckCacheGuard: failed");
}

void D_ClearCacheGuard (void)
{
	byte    *s;
	int             i;
	
	s = (byte *)sc_base + sc_size;
	for (i=0 ; i<GUARDSIZE ; i++)
		s[i] = (byte)i;
}


/*
================
D_InitCaches

================
*/
void D_InitCaches (void *buffer, int size)
{
//	if (!msg_suppress_1)
//		Con_Printf ("%ik surface cache\n", size/1024);

	sc_size = size - GUARDSIZE;
	sc_base = (surfcache_t *)buffer;
	sc_rover = sc_base;
	
	sc_base->next = NULL;
	sc_base->owner = NULL;
	sc_base->size = sc_size;
	
	D_ClearCacheGuard ();
}


/*
==================
D_FlushCaches
==================
*/
void D_FlushCaches (void)
{
	surfcache_t     *c;
	
	if (!sc_base)
		return;

	for (c = sc_base ; c ; c = c->next)
	{
		if (c->owner)
			*c->owner = NULL;
	}
	
	sc_rover = sc_base;
	sc_base->next = NULL;
	sc_base->owner = NULL;
	sc_base->size = sc_size;
}

/*
=================
D_SCAlloc
=================
*/
surfcache_t     *D_SCAlloc (int width, int size)
{
	surfcache_t             *new;
	qboolean                wrapped_this_time;

	if ((width < 0) || (width > 256))
		Sys_Error ("D_SCAlloc: bad cache width %d\n", width);

	if ((size <= 0) || (size > 0x10000))
		Sys_Error ("D_SCAlloc: bad cache size %d\n", size);
	
#ifdef __alpha__
	size = (int)((long)&((surfcache_t *)0)->data[size]);
#else
	size = (int)&((surfcache_t *)0)->data[size];
#endif
	size = (size + 3) & ~3;
	if (size > sc_size)
		Sys_Error ("D_SCAlloc: %i > cache size",size);

// if there is not size bytes after the rover, reset to the start
	wrapped_this_time = false;

	if ( !sc_rover || (byte *)sc_rover - (byte *)sc_base > sc_size - size)
	{
		if (sc_rover)
		{
			wrapped_this_time = true;
		}
		sc_rover = sc_base;
	}
		
// colect and free surfcache_t blocks until the rover block is large enough
	new = sc_rover;
	if (sc_rover->owner)
		*sc_rover->owner = NULL;
	
	while (new->size < size)
	{
	// free another
		sc_rover = sc_rover->next;
		if (!sc_rover)
			Sys_Error ("D_SCAlloc: hit the end of memory");
		if (sc_rover->owner)
			*sc_rover->owner = NULL;
			
		new->size += sc_rover->size;
		new->next = sc_rover->next;
	}

// create a fragment out of any leftovers
	if (new->size - size > 256)
	{
		sc_rover = (surfcache_t *)( (byte *)new + size);
		sc_rover->size = new->size - size;
		sc_rover->next = new->next;
		sc_rover->width = 0;
		sc_rover->owner = NULL;
		new->next = sc_rover;
		new->size = size;
	}
	else
		sc_rover = new->next;
	
	new->width = width;
// DEBUG
	if (width > 0)
		new->height = (size - sizeof(*new) + sizeof(new->data)) / width;

	new->owner = NULL;              // should be set properly after return

	if (d_roverwrapped)
	{
		if (wrapped_this_time || (sc_rover >= d_initial_rover))
			r_cache_thrash = true;
	}
	else if (wrapped_this_time)
	{       
		d_roverwrapped = true;
	}

D_CheckCacheGuard ();   // DEBUG
	return new;
}


/*
=================
D_SCDump
=================
*/
void D_SCDump (void)
{
	surfcache_t             *test;

	for (test = sc_base ; test ; test = test->next)
	{
		if (test == sc_rover)
			Sys_Printf ("ROVER:\n");
		printf ("%p : %i bytes     %i width\n",test, test->size, test->width);
	}
}

//=============================================================================

// if the num is not a power of 2, assume it will not repeat

int     MaskForNum (int num)
{
	if (num==128)
		return 127;
	if (num==64)
		return 63;
	if (num==32)
		return 31;
	if (num==16)
		return 15;
	return 255;
}

int D_log2 (int num)
{
	int     c;
	
	c = 0;
	
	while (num>>=1)
		c++;
	return c;
}

//=============================================================================

/*
================
D_CacheSurface
================
*/
surfcache_t *D_CacheSurface (msurface_t *surface, int miplevel)
{
	surfcache_t     *cache;

//
// if the surface is animating or flashing, flush the cache
//
	r_drawsurf.texture = R_TextureAnimation (surface->texinfo->texture);
	r_drawsurf.lightadj[0] = d_lightstylevalue[surface->styles[0]];
	r_drawsurf.lightadj[1] = d_lightstylevalue[surface->styles[1]];
	r_drawsurf.lightadj[2] = d_lightstylevalue[surface->styles[2]];
	r_drawsurf.lightadj[3] = d_lightstylevalue[surface->styles[3]];
	
//
// see if the cache holds apropriate data
//
	cache = surface->cachespots[miplevel];

	if (cache && !cache->dlight && surface->dlightframe != r_framecount
			&& cache->texture == r_drawsurf.texture
			&& cache->lightadj[0] == r_drawsurf.lightadj[0]
			&& cache->lightadj[1] == r_drawsurf.lightadj[1]
			&& cache->lightadj[2] == r_drawsurf.lightadj[2]
			&& cache->lightadj[3] == r_drawsurf.lightadj[3] )
		return cache;

//
// determine shape of surface
//
	surfscale = 1.0 / (1<<miplevel);
	r_drawsurf.surfmip = miplevel;
	r_drawsurf.surfwidth = surface->extents[0] >> miplevel;
	r_drawsurf.rowbytes = r_drawsurf.surfwidth;
	r_drawsurf.surfheight = surface->extents[1] >> miplevel;
	
//
// allocate memory if needed
//
	if (!cache)     // if a texture just animated, don't reallocate it
	{
		cache = D_SCAlloc (r_drawsurf.surfwidth,
						   r_drawsurf.surfwidth * r_drawsurf.surfheight);
		surface->cachespots[miplevel] = cache;
		cache->owner = &surface->cachespots[miplevel];
		cache->mipscale = surfscale;
	}
	
	if (surface->dlightframe == r_framecount)
		cache->dlight = 1;
	else
		cache->dlight = 0;

	r_drawsurf.surfdat = (pixel_t *)cache->data;
	
	cache->texture = r_drawsurf.texture;
	cache->lightadj[0] = r_drawsurf.lightadj[0];
	cache->lightadj[1] = r_drawsurf.lightadj[1];
	cache->lightadj[2] = r_drawsurf.lightadj[2];
	cache->lightadj[3] = r_drawsurf.lightadj[3];

//
// draw and light the surface texture
//
	r_drawsurf.surf = surface;

	c_surf++;
	R_DrawSurface ();

	return surface->cachespots[miplevel];
}
```
