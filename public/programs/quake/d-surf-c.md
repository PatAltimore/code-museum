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
description: "This file showcases Quake's surface caching system, a key optimization for rendering complex 3D environments on limited hardware."

summary:
  - point: "Surface caching minimizes memory thrashing during rendering"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Dynamic memory allocation tailored for 3D textures"
    link: "https://en.wikipedia.org/wiki/Texture_mapping"
    link_label: "Texture Mapping"
  - point: "Guard bytes ensure memory integrity in constrained environments"
    link: "https://en.wikipedia.org/wiki/Memory_safety"
    link_label: "Memory Safety"

enhancements:
  - id: "foundation-surface-cache-vars"
    line_start: 20
    line_end: 24
    title: "Foundation: Surface Cache Variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines key variables for managing the surface cache, such as `surfscale` and `r_cache_thrash`. These variables are central to Quake's rendering system, which dynamically allocates memory for textures and surfaces during gameplay. At the time, hardware constraints like limited RAM and slow processors meant that efficient memory management was critical. John Carmack and Michael Abrash, known for their expertise in optimization, designed this system to reduce memory thrashing and ensure smooth gameplay. The concept of caching surfaces influenced later game engines, including Unreal Engine and Source Engine, which adopted similar strategies for texture management."
  - id: "surface-cache-resolution"
    line_start: 35
    line_end: 53
    title: "Calculating Surface Cache for Resolution"
    wikipedia_url: "https://en.wikipedia.org/wiki/Resolution_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "This function, `D_SurfaceCacheForRes`, calculates the size of the surface cache based on screen resolution. It uses a base size for 320x200 resolution and scales it for larger resolutions, adding extra memory for higher pixel counts. In 1996, resolutions above 640x480 were rare, but Quake's scalable approach ensured compatibility with future hardware. The use of command-line parameters (`-surfcachesize`) allowed advanced users to tweak memory allocation, showcasing id Software's commitment to flexibility. This technique laid the groundwork for modern game engines that dynamically adjust resource allocation based on hardware capabilities."
  - id: "cache-guard-integrity-check"
    line_start: 55
    line_end: 64
    title: "Cache Guard: Ensuring Memory Integrity"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_safety"
    image_url: ""
    image_caption: ""
    content: "The `D_CheckCacheGuard` function verifies the integrity of the surface cache by checking guard bytes. These bytes act as a boundary marker, ensuring that memory writes do not overflow into adjacent areas. This was a critical safeguard in the mid-1990s, when memory corruption could easily crash a program. The technique reflects Michael Abrash's influence, as he often emphasized robust debugging and error prevention in his writings. Guard bytes remain a standard practice in modern programming, particularly in embedded systems and high-performance applications."
  - id: "initialize-surface-cache"
    line_start: 77
    line_end: 97
    title: "Initializing the Surface Cache"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `D_InitCaches` function initializes the surface cache, setting up the base memory block and establishing guard bytes. This function ensures that the cache is properly aligned and ready for dynamic allocation during rendering. In the mid-1990s, efficient initialization routines were essential for games like Quake, which pushed hardware to its limits. The method of pre-allocating a large memory block and subdividing it dynamically influenced later game engines, which adopted similar approaches to manage textures and geometry efficiently."
  - id: "dynamic-cache-allocation"
    line_start: 124
    line_end: 212
    title: "Dynamic Allocation: Surface Cache Blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dynamic_memory_allocation"
    image_url: ""
    image_caption: ""
    content: "The `D_SCAlloc` function dynamically allocates memory for surface cache blocks, ensuring efficient use of the pre-allocated cache. It handles fragmentation by merging adjacent blocks and creates new fragments when necessary. This approach minimizes wasted memory and ensures that textures fit within the available cache. In 1996, dynamic allocation was a sophisticated technique, especially for real-time applications like Quake. The method influenced later systems, such as DirectX and OpenGL, which adopted similar strategies for managing GPU memory."
  - id: "logarithmic-utility-functions"
    line_start: 232
    line_end: 258
    title: "Logarithmic Utility Functions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Logarithm"
    image_url: ""
    image_caption: ""
    content: "The utility functions `MaskForNum` and `D_log2` calculate bit masks and logarithms, respectively, for use in surface caching and rendering. These functions are optimized for performance, using bitwise operations to avoid costly division or multiplication. In the mid-1990s, such optimizations were crucial for achieving real-time performance on hardware like the Intel 486 and Pentium processors. These techniques are still relevant today, particularly in graphics programming and shader development, where efficiency is paramount."
  - id: "cache-surface-rendering"
    line_start: 260
    line_end: 336
    title: "Caching and Rendering Surfaces"
    wikipedia_url: "https://en.wikipedia.org/wiki/Texture_mapping"
    image_url: ""
    image_caption: ""
    content: "The `D_CacheSurface` function manages the caching and rendering of surfaces, ensuring that textures are properly allocated and lit. It checks for animation or flashing effects, allocates memory dynamically, and applies lighting adjustments. This function exemplifies Quake's advanced rendering system, which combined dynamic memory management with real-time lighting and texture animation. The techniques used here influenced later engines, such as Unreal Engine and Unity, which adopted similar methods for handling complex 3D scenes."

---

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

