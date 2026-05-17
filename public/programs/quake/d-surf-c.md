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
description: "This file showcases the surface cache management system in Quake, a critical component for optimizing 3D rendering on limited hardware in 1996."

summary:
  - point: "Surface caching to optimize memory usage"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Guard bytes for memory corruption detection"
    link: "https://en.wikipedia.org/wiki/Memory_corruption"
    link_label: "Memory corruption"
  - point: "Dynamic memory allocation for surface rendering"
    link: "https://en.wikipedia.org/wiki/Dynamic_memory_allocation"
    link_label: "Dynamic memory allocation"
  - point: "Mipmapping for efficient texture rendering"
    link: "https://en.wikipedia.org/wiki/Mipmap"
    link_label: "Mipmapping"

enhancements:
  - id: "surface-cache-size-calculation"
    line_start: 35
    line_end: 53
    title: "Calculating surface cache size dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Binary_num_bitwise_OR.png/330px-Binary_num_bitwise_OR.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Picture shows two binary numbers as inputs and a third binary number which is a result of a bitwise OR operation on the inputs (CC0)"
    content: "This function, `D_SurfaceCacheForRes`, dynamically calculates the size of the surface cache based on the resolution of the game. The surface cache is a critical component for storing precomputed surface data, which speeds up rendering in Quake's 3D environments. The function includes a hardcoded default value for 320x200 resolution, reflecting the common resolution of monitors in 1996. However, it also allows users to specify a custom cache size via a command-line parameter, showcasing id Software's dedication to flexibility and performance optimization. At the time, PCs were transitioning from DOS to Windows 95, and hardware capabilities varied widely. This function reflects the need to adapt to different configurations while ensuring the game could run smoothly on lower-end systems. The approach of dynamically adjusting memory allocation based on resolution was innovative and became a common practice in game development, influencing future titles that required optimization for diverse hardware setups."
  - id: "cache-guard-mechanism"
    line_start: 55
    line_end: 74
    title: "Using guard bytes to detect memory corruption"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_corruption"
    image_url: ""
    image_caption: ""
    content: "The `D_CheckCacheGuard` and `D_ClearCacheGuard` functions implement a safeguard against memory corruption by adding and verifying guard bytes at the end of the allocated surface cache. This technique ensures that the integrity of the memory is maintained during runtime. In the mid-1990s, memory corruption was a common issue due to the lack of robust debugging tools and the direct manipulation of memory in C. By adding a small buffer of predictable values, developers could detect if memory writes exceeded their allocated bounds, preventing hard-to-diagnose crashes. This approach reflects the meticulous attention to stability and reliability that id Software brought to Quake, a game that would be played on a wide variety of hardware configurations. While modern programming languages often abstract memory management, this technique remains a foundational concept in systems programming."
  - id: "cache-initialization"
    line_start: 83
    line_end: 97
    title: "Initializing surface caches for efficient rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `D_InitCaches` function initializes the surface cache system, allocating memory and setting up the cache structure. This is a foundational step in Quake's rendering pipeline, as it ensures that surfaces can be stored and accessed efficiently during gameplay. The function also incorporates the guard byte mechanism to detect memory corruption, highlighting id Software's focus on robustness. In 1996, memory management was a critical concern due to the limited RAM available on consumer PCs, typically ranging from 8 to 16 MB. By carefully managing memory allocation and implementing safeguards, Quake was able to deliver groundbreaking 3D graphics without overwhelming hardware resources. The design of this cache system influenced future game engines, demonstrating the importance of efficient memory management in real-time rendering."
  - id: "cache-flushing"
    line_start: 105
    line_end: 122
    title: "Flushing caches to reclaim memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `D_FlushCaches` function clears the surface cache, freeing memory and resetting the cache structure. This operation is crucial for maintaining performance in Quake's dynamic 3D environments, where surfaces are constantly being updated and reused. By ensuring that unused cache entries are cleared, the function prevents memory fragmentation and thrashing, which could degrade performance. In the mid-1990s, game developers had to contend with limited hardware resources, and efficient memory management was essential for achieving smooth gameplay. The flushing mechanism reflects id Software's expertise in optimizing for constrained environments, a skill honed through their earlier work on Doom and Wolfenstein 3D. This approach to cache management became a standard practice in game development, influencing the design of modern rendering engines."
  - id: "dynamic-cache-allocation"
    line_start: 129
    line_end: 212
    title: "Allocating cache dynamically for surface rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `D_SCAlloc` function dynamically allocates memory for surface caches, adjusting the size and position of cache blocks as needed. This flexibility allows Quake to handle a wide variety of surface sizes and resolutions, ensuring efficient use of memory. The function includes checks for invalid widths and sizes, reflecting the need for robustness in a system that directly manipulates memory. It also incorporates mechanisms to detect and handle cache thrashing, a common issue when memory is overutilized. In 1996, dynamic memory allocation was a challenging task, especially in performance-critical applications like 3D rendering. The design of this function showcases id Software's ability to balance flexibility and efficiency, enabling Quake to deliver its groundbreaking graphics on hardware with limited resources. The principles demonstrated here, such as dynamic allocation and memory fragmentation handling, remain relevant in modern game development."
  - id: "cache-dumping"
    line_start: 220
    line_end: 229
    title: "Debugging with cache dump visualization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugging"
    image_url: ""
    image_caption: ""
    content: "The `D_SCDump` function provides a debugging tool for visualizing the state of the surface cache. By printing the size and width of each cache block, along with the position of the rover, developers can identify issues such as memory fragmentation or thrashing. Debugging tools like this were essential in the mid-1990s, when developers had to optimize for a wide range of hardware configurations without the advanced profiling tools available today. The inclusion of this function reflects id Software's commitment to creating stable and performant software, even under tight deadlines. Debugging techniques like cache visualization have evolved over time, but the principles remain relevant for understanding and optimizing memory usage in complex systems."
  - id: "bitwise-operations"
    line_start: 236
    line_end: 257
    title: "Using bitwise operations for efficient calculations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bitwise_operation"
    image_url: ""
    image_caption: ""
    content: "The `MaskForNum` and `D_log2` functions use bitwise operations to perform efficient calculations related to surface rendering. `MaskForNum` generates a mask for numbers that are powers of two, while `D_log2` calculates the base-2 logarithm of a number. These operations are critical for tasks like mipmapping, where textures are scaled down by powers of two to optimize rendering performance. In the 1990s, bitwise operations were a common technique for achieving high performance on hardware with limited computational power. John Carmack, known for his mastery of low-level programming, often employed such techniques to maximize efficiency in id Software's games. These functions exemplify the ingenuity required to push the boundaries of what was possible in real-time 3D graphics at the time."
  - id: "surface-caching-and-rendering"
    line_start: 267
    line_end: 335
    title: "Caching and rendering dynamic surfaces"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mipmap"
    image_url: ""
    image_caption: ""
    content: "The `D_CacheSurface` function is a cornerstone of Quake's rendering system, responsible for caching and rendering surfaces with dynamic properties like animations and lighting changes. The function checks if a surface's cache is valid and allocates memory if needed, using mipmapping to optimize texture rendering. Mipmapping, a technique that scales textures down by powers of two, was essential for achieving smooth performance on mid-90s hardware, which often featured CPUs like the Intel Pentium and limited RAM. The function also handles dynamic lighting, a feature that added realism to Quake's environments and set it apart from earlier games. This combination of caching, mipmapping, and dynamic lighting was groundbreaking at the time and laid the foundation for modern 3D rendering techniques. The principles demonstrated here continue to influence game development, highlighting the lasting impact of id Software's innovations."

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

