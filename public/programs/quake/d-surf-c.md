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
description: "This file showcases the surface cache management system in Quake, a critical optimization for rendering complex 3D environments on limited 1990s hardware."

summary:
  - point: "Surface cache thrashing detection and prevention"
    link: "https://en.wikipedia.org/wiki/Thrashing_(computer_science)"
    link_label: "Thrashing"
  - point: "Guard bytes for memory corruption detection"
    link: "https://en.wikipedia.org/wiki/Memory_corruption"
    link_label: "Memory corruption"
  - point: "Dynamic surface cache allocation based on resolution"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Mipmapping and light adjustment for rendering optimization"
    link: "https://en.wikipedia.org/wiki/Mipmap"
    link_label: "Mipmapping"
  - point: "Debugging tools for cache visualization and diagnostics"
    link: "https://en.wikipedia.org/wiki/Debugging"
    link_label: "Debugging"

enhancements:
  - id: "foundation-surface-cache-variables"
    line_start: 17
    line_end: 24
    title: "Foundation: Surface Cache Variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "This section establishes the foundational variables for surface cache management in Quake. The variables `surfscale` and `r_cache_thrash` are critical for tracking rendering scale and detecting cache thrashing, respectively. Cache thrashing—a state where memory swapping becomes excessive—was a significant concern in the mid-1990s, especially on systems with limited RAM and slow disk I/O. By monitoring and addressing thrashing, the Quake engine could maintain smooth gameplay even under constrained conditions. The inclusion of these variables reflects id Software's deep understanding of hardware limitations and their commitment to optimizing performance for a wide range of PC configurations."
  - id: "surfcache-t-structure"
    line_start: 30
    line_end: 32
    title: "Surfcache_t: The Heart of Surface Caching"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_structure"
    image_url: ""
    image_caption: ""
    content: "The `surfcache_t` structure is the backbone of Quake's surface caching system. It organizes cached surfaces, linking them with pointers for efficient traversal. In the mid-1990s, memory management was a delicate art, requiring careful structuring to avoid fragmentation and ensure rapid access. By designing a linked list of surface caches, id Software ensured that the engine could dynamically allocate and free memory as needed, adapting to the demands of complex 3D environments. This approach was both innovative and necessary, given the hardware constraints of the era."
  - id: "dynamic-surface-cache-allocation"
    line_start: 35
    line_end: 53
    title: "Dynamic Surface Cache Allocation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `D_SurfaceCacheForRes` function dynamically calculates the required surface cache size based on screen resolution. This adaptability was crucial in 1996, as Quake needed to run on a wide range of hardware, from high-end gaming PCs to more modest setups. By scaling the cache size with resolution and providing a command-line override (`-surfcachesize`), id Software empowered users to optimize performance for their specific systems. This flexibility reflects the team's commitment to accessibility and their understanding of the diverse PC market of the time."
  - id: "cache-guard-bytes"
    line_start: 55
    line_end: 64
    title: "Cache Guard Bytes: A Debugging Safeguard"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_corruption"
    image_url: ""
    image_caption: ""
    content: "The `D_CheckCacheGuard` function introduces guard bytes to detect memory corruption—a common issue in low-level programming. By appending a small buffer (`GUARDSIZE`) to the end of the surface cache and verifying its integrity, id Software implemented a simple yet effective debugging tool. If the guard bytes are altered, the program halts with an error, preventing silent corruption from causing unpredictable behavior. This technique highlights the team's meticulous approach to debugging and their awareness of the challenges posed by direct memory manipulation in C."
  - id: "cache-initialization"
    line_start: 79
    line_end: 82
    title: "D_InitCaches: Preparing for Rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `D_InitCaches` function initializes the surface cache, setting up the memory buffer and linking the first cache block. This step is foundational for Quake's rendering pipeline, ensuring that surfaces can be efficiently stored and retrieved during gameplay. The function also clears the guard bytes, preparing the cache for safe use. In the mid-1990s, such initialization routines were critical for managing limited system resources, and their careful design reflects id Software's expertise in optimizing for constrained environments."
  - id: "dynamic-cache-allocation"
    line_start: 129
    line_end: 208
    title: "D_SCAlloc: Dynamic Cache Allocation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `D_SCAlloc` function dynamically allocates memory for surface caches, ensuring that rendering operations can proceed smoothly. This routine handles edge cases like insufficient memory and fragmented blocks, combining smaller caches into larger ones as needed. The function also creates fragments from leftover memory, maximizing utilization. In 1996, this level of dynamic memory management was cutting-edge, enabling Quake to handle complex 3D environments on hardware with limited RAM. The careful handling of memory allocation and fragmentation reflects id Software's deep understanding of system-level programming and their commitment to performance optimization."
  - id: "cache-surface-rendering"
    line_start: 267
    line_end: 336
    title: "D_CacheSurface: Rendering with Precision"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mipmap"
    image_url: ""
    image_caption: ""
    content: "The `D_CacheSurface` function is a masterstroke of rendering optimization. It checks if a surface is already cached, flushing outdated entries and allocating memory for new ones as needed. The function also adjusts mipmapping levels and light styles, ensuring that textures are rendered with appropriate detail and lighting. By dynamically managing surface caches and integrating rendering parameters, id Software achieved a balance between visual fidelity and performance. This approach was critical for Quake's groundbreaking 3D graphics, setting a new standard for real-time rendering in video games."

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

