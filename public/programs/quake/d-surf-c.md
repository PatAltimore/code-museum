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
description: "This file demonstrates advanced surface caching techniques used in Quake's rendering pipeline to optimize memory usage and performance on limited hardware."

summary:
  - point: "Dynamic surface cache allocation tailored to resolution"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Guard bytes used for memory corruption detection"
    link: "https://en.wikipedia.org/wiki/Memory_corruption"
    link_label: "Memory corruption"
  - point: "Efficient logarithmic calculations for mipmapping"
    link: "https://en.wikipedia.org/wiki/Mipmap"
    link_label: "Mipmapping"
  - point: "Surface cache flushing and reuse strategies"
    link: "https://en.wikipedia.org/wiki/Cache_(computing)"
    link_label: "Cache"
  - point: "Animation-aware surface caching for dynamic textures"
    link: "https://en.wikipedia.org/wiki/Texture_mapping"
    link_label: "Texture mapping"

enhancements:
  - id: "dynamic-cache-sizing"
    line_start: 35
    line_end: 53
    title: "Dynamic Cache Sizing for Screen Resolution"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `D_SurfaceCacheForRes` function dynamically calculates the required size for the surface cache based on screen resolution. If a command-line argument specifies a custom cache size, it uses that; otherwise, it calculates a default size based on the resolution. This approach allowed Quake to adapt its memory usage to different hardware configurations, a critical feature in an era when PCs varied widely in capabilities. By scaling the cache size for resolutions exceeding 320x200, the function ensured that higher resolutions didn't exhaust memory, enabling smoother gameplay. This technique was particularly important in 1996, when hardware constraints were a major bottleneck for 3D games. It influenced later games and engines by demonstrating how to balance performance and memory usage dynamically."
  - id: "cache-guard-bytes"
    line_start: 55
    line_end: 64
    title: "Guard Bytes: Detecting Memory Corruption"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_corruption"
    image_url: ""
    image_caption: ""
    content: "The `D_CheckCacheGuard` function verifies the integrity of memory by checking guard bytes placed at the end of the surface cache. These bytes are initialized with specific values by `D_ClearCacheGuard` and checked for corruption during runtime. This was a clever debugging tool to detect memory overwrites, a common issue in C programming due to manual memory management. In the mid-1990s, debugging tools were limited, so techniques like this were essential for ensuring stability in complex systems. The use of guard bytes influenced debugging practices in later software development, particularly in embedded systems and game engines where memory corruption could lead to crashes or unpredictable behavior."
  - id: "surface-cache-initialization"
    line_start: 77
    line_end: 97
    title: "Initializing the Surface Cache"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cache_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `D_InitCaches` function sets up the surface cache by allocating memory and initializing its metadata. It ensures the cache is ready for use by setting up pointers and sizes, and it places guard bytes to detect corruption later. This initialization step was crucial for Quake's performance, as it allowed the engine to reuse memory efficiently during rendering. In the context of 1996 hardware, where RAM was limited and expensive, this kind of careful memory management was a necessity. The technique of preallocating and initializing caches became a standard practice in game engines, influencing successors like Unreal Engine and Source Engine."
  - id: "cache-flushing-strategy"
    line_start: 100
    line_end: 122
    title: "Flushing the Surface Cache for Reuse"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cache_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `D_FlushCaches` function clears the surface cache, resetting it for reuse. It iterates through all cache blocks and nullifies their owners, ensuring that no stale data remains. This approach prevented memory fragmentation and allowed the cache to be reused efficiently, a critical optimization for rendering dynamic 3D environments. In the mid-1990s, game engines had to manage memory carefully to avoid performance degradation on hardware with limited resources. This flushing strategy influenced later engines by demonstrating how to handle dynamic memory allocation and reuse in real-time applications."
  - id: "surface-cache-allocation"
    line_start: 124
    line_end: 212
    title: "Allocating Memory for Dynamic Surfaces"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `D_SCAlloc` function is responsible for allocating memory for surfaces in the cache. It ensures that the requested size and width are valid, aligns the size to a 4-byte boundary, and splits or merges cache blocks as needed to fit the allocation. This dynamic memory management allowed Quake to handle varying surface sizes efficiently, a necessity for rendering complex 3D environments. The function also tracks whether the cache has wrapped around, setting flags that indicate potential thrashing. This level of detail in memory management was groundbreaking for its time and influenced later game engines by showcasing how to optimize memory allocation for real-time rendering."
  - id: "logarithmic-calculation"
    line_start: 249
    line_end: 258
    title: "Efficient Logarithmic Calculation for Mipmapping"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mipmap"
    image_url: ""
    image_caption: ""
    content: "The `D_log2` function calculates the base-2 logarithm of a number using bitwise operations. This is used in mipmapping, where textures are scaled down by powers of two to improve performance and reduce aliasing. By using a simple loop with bit-shifting, the function avoids the computational overhead of floating-point arithmetic, which was expensive on the x86 processors of the time. This efficient approach to logarithmic calculation was critical for Quake's performance and influenced later graphics engines by demonstrating how to optimize mathematical operations for real-time applications."
  - id: "surface-caching-dynamic-textures"
    line_start: 260
    line_end: 336
    title: "Caching Dynamic Textures for Animation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Texture_mapping"
    image_url: ""
    image_caption: ""
    content: "The `D_CacheSurface` function manages the caching of surfaces, taking into account dynamic textures and lighting changes. If a surface's texture or lighting has changed, the cache is flushed and reallocated. This ensures that animations and flashing textures are rendered correctly without artifacts. The function also calculates mipmapping levels and allocates memory for the surface texture dynamically. This level of detail in surface caching was critical for Quake's ability to render complex, dynamic environments smoothly. It influenced later engines by demonstrating how to handle dynamic textures and lighting efficiently, paving the way for more advanced rendering techniques in games like Half-Life and Unreal."

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