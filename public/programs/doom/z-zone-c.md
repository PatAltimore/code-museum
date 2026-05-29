---
title: "z_zone.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/z_zone.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/z_zone.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "z-zone-c"
order: 6
description: "This file showcases DOOM's innovative memory management system, which optimized performance on limited hardware."

summary:
  - point: "DOOM's memory allocation system ensured efficient use of limited RAM."
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "Zone-based memory management avoided fragmentation and improved performance."
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Techniques here influenced later game engines and memory systems."
    link: "https://en.wikipedia.org/wiki/Game_engine"
    link_label: "Game Engine"

enhancements:
  - id: "memzone-structure-definition"
    line_start: 63
    line_end: 85
    title: "memzone_t and Z_ClearZone: The Foundation of DOOM's Memory Arena"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The memzone_t structure is a minimal arena header: it stores the total byte size of the zone, a sentinel blocklist node that anchors the doubly-linked free/used block ring, and a rover pointer that remembers where the last allocation left off so subsequent searches start nearby rather than always from the beginning. Z_ClearZone resets any memzone_t to a pristine state by collapsing the entire allocatable region into one large free block linked through the sentinel, which allows the allocator to restart cleanly between levels without calling the OS allocator again. Consumer PCs in 1993 commonly had 4 MB of RAM, and DOS memory models made reliable dynamic allocation fragile; by reserving a single large slab at startup via I_ZoneBase and then self-managing it entirely, DOOM sidestepped system-allocator fragmentation and unpredictable latency. This arena pattern predated DOOM (it appeared in earlier id Software titles) but DOOM's clean implementation became the reference that Quake, Quake II, and many subsequent open-source game engines inherited almost unchanged."
  - id: "z-init-zone-setup"
    line_start: 89
    line_end: 115
    title: "The Function That Prepared DOOM's Memory Zones"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "`Z_Init` initializes the main memory zone by calling `I_ZoneBase` to allocate memory and then setting up the zone's blocklist and rover pointer. This function is the starting point for DOOM's memory management system, ensuring that the game has a contiguous block of memory to work with. In the early 1990s, developers often had to write their own memory allocators to bypass the limitations of standard libraries and operating systems. John Carmack's decision to implement a custom zone-based system allowed DOOM to handle dynamic memory allocation efficiently, even on hardware with limited resources. This initialization routine laid the groundwork for the game's fast-paced performance, influencing memory allocation strategies in later games like Half-Life and Deus Ex."
  - id: "z-free-memory-deallocation"
    line_start: 118
    line_end: 359
    title: "How DOOM Freed Memory Without Fragmentation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "`Z_Free` deallocates a memory block and merges adjacent free blocks to prevent fragmentation. This function checks the block's ID to ensure it belongs to the zone, clears the user's mark, and updates the linked list to merge contiguous free blocks. Memory fragmentation was a common problem in the 1990s, especially for programs that frequently allocated and deallocated memory. DOOM's approach ensured that free memory remained contiguous, improving allocation speed and reducing overhead. This technique influenced memory management in later game engines, particularly those designed for real-time applications, where performance is critical."
  - id: "z-malloc-dynamic-allocation"
    line_start: 182
    line_end: 288
    title: "The Algorithm That Made DOOM's Memory Dynamic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "`Z_Malloc` dynamically allocates memory within a zone, scanning for a free block of sufficient size and purging blocks if necessary. The function ensures that allocations align to 4 bytes and splits larger blocks to minimize wasted space. In the early 1990s, dynamic memory allocation was a challenge due to limited hardware resources and the lack of robust standard libraries. DOOM's custom allocator allowed the game to manage memory efficiently, even as it loaded new levels or assets. This algorithm inspired similar techniques in later game engines, such as Unreal Engine, which adopted zone-based allocation to handle complex scenes and dynamic objects."
  - id: "z-dumpheap-debugging-tool"
    line_start: 322
    line_end: 359
    title: "The Debugging Tool That Kept DOOM Stable"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugging"
    image_url: ""
    image_caption: ""
    content: "`Z_DumpHeap` prints the state of the memory zone to the console, showing block sizes, tags, and user pointers. This function was a critical debugging tool for identifying memory corruption and fragmentation issues during development. Debugging memory allocation was notoriously difficult in the 1990s, especially in performance-critical applications like games. By providing detailed insights into the memory state, `Z_DumpHeap` helped developers ensure stability and optimize performance. Similar debugging tools became standard practice in game development, influencing tools like Valgrind and custom memory profilers in modern engines."
  - id: "z-checkheap-integrity-check"
    line_start: 395
    line_end: 419
    title: "How DOOM Ensured Its Memory Stayed Intact"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "`Z_CheckHeap` verifies the integrity of the memory zone, checking that block sizes and links are consistent. If any errors are found, the function halts execution with an error message. Memory corruption was a common issue in the 1990s, especially in programs that performed frequent dynamic allocations. By implementing rigorous integrity checks, DOOM minimized the risk of crashes and ensured reliable performance. This approach influenced later games and engines, which adopted similar checks to maintain stability in complex systems."
  - id: "z-freememory-calculation"
    line_start: 447
    line_end: 465
    title: "How DOOM Calculated Free Memory in Real Time"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "`Z_FreeMemory` calculates the total amount of free memory in the zone by summing the sizes of free blocks and purgable blocks. This function provided developers with real-time insights into memory usage, helping them optimize performance. In the early 1990s, tools for monitoring memory were limited, and developers often had to write their own utilities. DOOM's ability to calculate free memory dynamically influenced later engines, which incorporated similar features to optimize resource usage in real-time applications."

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
//	Zone Memory Allocation. Neat.
//
//-----------------------------------------------------------------------------

static const char
rcsid[] = "$Id: z_zone.c,v 1.4 1997/02/03 16:47:58 b1 Exp $";

#include "z_zone.h"
#include "i_system.h"
#include "doomdef.h"


//
// ZONE MEMORY ALLOCATION
//
// There is never any space between memblocks,
//  and there will never be two contiguous free memblocks.
// The rover can be left pointing at a non-empty block.
//
// It is of no value to free a cachable block,
//  because it will get overwritten automatically if needed.
// 
 
#define ZONEID	0x1d4a11


typedef struct
{
    // total bytes malloced, including header
    int		size;

    // start / end cap for linked list
    memblock_t	blocklist;
    
    memblock_t*	rover;
    
} memzone_t;



memzone_t*	mainzone;



//
// Z_ClearZone
//
void Z_ClearZone (memzone_t* zone)
{
    memblock_t*		block;
	
    // set the entire zone to one free block
    zone->blocklist.next =
	zone->blocklist.prev =
	block = (memblock_t *)( (byte *)zone + sizeof(memzone_t) );
    
    zone->blocklist.user = (void *)zone;
    zone->blocklist.tag = PU_STATIC;
    zone->rover = block;
	
    block->prev = block->next = &zone->blocklist;
    
    // NULL indicates a free block.
    block->user = NULL;	

    block->size = zone->size - sizeof(memzone_t);
}



//
// Z_Init
//
void Z_Init (void)
{
    memblock_t*	block;
    int		size;

    mainzone = (memzone_t *)I_ZoneBase (&size);
    mainzone->size = size;

    // set the entire zone to one free block
    mainzone->blocklist.next =
	mainzone->blocklist.prev =
	block = (memblock_t *)( (byte *)mainzone + sizeof(memzone_t) );

    mainzone->blocklist.user = (void *)mainzone;
    mainzone->blocklist.tag = PU_STATIC;
    mainzone->rover = block;
	
    block->prev = block->next = &mainzone->blocklist;

    // NULL indicates a free block.
    block->user = NULL;
    
    block->size = mainzone->size - sizeof(memzone_t);
}


//
// Z_Free
//
void Z_Free (void* ptr)
{
    memblock_t*		block;
    memblock_t*		other;
	
    block = (memblock_t *) ( (byte *)ptr - sizeof(memblock_t));

    if (block->id != ZONEID)
	I_Error ("Z_Free: freed a pointer without ZONEID");
		
    if (block->user > (void **)0x100)
    {
	// smaller values are not pointers
	// Note: OS-dependend?
	
	// clear the user's mark
	*block->user = 0;
    }

    // mark as free
    block->user = NULL;	
    block->tag = 0;
    block->id = 0;
	
    other = block->prev;

    if (!other->user)
    {
	// merge with previous free block
	other->size += block->size;
	other->next = block->next;
	other->next->prev = other;

	if (block == mainzone->rover)
	    mainzone->rover = other;

	block = other;
    }
	
    other = block->next;
    if (!other->user)
    {
	// merge the next free block onto the end
	block->size += other->size;
	block->next = other->next;
	block->next->prev = block;

	if (other == mainzone->rover)
	    mainzone->rover = block;
    }
}



//
// Z_Malloc
// You can pass a NULL user if the tag is < PU_PURGELEVEL.
//
#define MINFRAGMENT		64


void*
Z_Malloc
( int		size,
  int		tag,
  void*		user )
{
    int		extra;
    memblock_t*	start;
    memblock_t* rover;
    memblock_t* newblock;
    memblock_t*	base;

    size = (size + 3) & ~3;
    
    // scan through the block list,
    // looking for the first free block
    // of sufficient size,
    // throwing out any purgable blocks along the way.

    // account for size of block header
    size += sizeof(memblock_t);
    
    // if there is a free block behind the rover,
    //  back up over them
    base = mainzone->rover;
    
    if (!base->prev->user)
	base = base->prev;
	
    rover = base;
    start = base->prev;
	
    do
    {
	if (rover == start)
	{
	    // scanned all the way around the list
	    I_Error ("Z_Malloc: failed on allocation of %i bytes", size);
	}
	
	if (rover->user)
	{
	    if (rover->tag < PU_PURGELEVEL)
	    {
		// hit a block that can't be purged,
		//  so move base past it
		base = rover = rover->next;
	    }
	    else
	    {
		// free the rover block (adding the size to base)

		// the rover can be the base block
		base = base->prev;
		Z_Free ((byte *)rover+sizeof(memblock_t));
		base = base->next;
		rover = base->next;
	    }
	}
	else
	    rover = rover->next;
    } while (base->user || base->size < size);

    
    // found a block big enough
    extra = base->size - size;
    
    if (extra >  MINFRAGMENT)
    {
	// there will be a free fragment after the allocated block
	newblock = (memblock_t *) ((byte *)base + size );
	newblock->size = extra;
	
	// NULL indicates free block.
	newblock->user = NULL;	
	newblock->tag = 0;
	newblock->prev = base;
	newblock->next = base->next;
	newblock->next->prev = newblock;

	base->next = newblock;
	base->size = size;
    }
	
    if (user)
    {
	// mark as an in use block
	base->user = user;			
	*(void **)user = (void *) ((byte *)base + sizeof(memblock_t));
    }
    else
    {
	if (tag >= PU_PURGELEVEL)
	    I_Error ("Z_Malloc: an owner is required for purgable blocks");

	// mark as in use, but unowned	
	base->user = (void *)2;		
    }
    base->tag = tag;

    // next allocation will start looking here
    mainzone->rover = base->next;	
	
    base->id = ZONEID;
    
    return (void *) ((byte *)base + sizeof(memblock_t));
}



//
// Z_FreeTags
//
void
Z_FreeTags
( int		lowtag,
  int		hightag )
{
    memblock_t*	block;
    memblock_t*	next;
	
    for (block = mainzone->blocklist.next ;
	 block != &mainzone->blocklist ;
	 block = next)
    {
	// get link before freeing
	next = block->next;

	// free block?
	if (!block->user)
	    continue;
	
	if (block->tag >= lowtag && block->tag <= hightag)
	    Z_Free ( (byte *)block+sizeof(memblock_t));
    }
}



//
// Z_DumpHeap
// Note: TFileDumpHeap( stdout ) ?
//
void
Z_DumpHeap
( int		lowtag,
  int		hightag )
{
    memblock_t*	block;
	
    printf ("zone size: %i  location: %p\n",
	    mainzone->size,mainzone);
    
    printf ("tag range: %i to %i\n",
	    lowtag, hightag);
	
    for (block = mainzone->blocklist.next ; ; block = block->next)
    {
	if (block->tag >= lowtag && block->tag <= hightag)
	    printf ("block:%p    size:%7i    user:%p    tag:%3i\n",
		    block, block->size, block->user, block->tag);
		
	if (block->next == &mainzone->blocklist)
	{
	    // all blocks have been hit
	    break;
	}
	
	if ( (byte *)block + block->size != (byte *)block->next)
	    printf ("ERROR: block size does not touch the next block\n");

	if ( block->next->prev != block)
	    printf ("ERROR: next block doesn't have proper back link\n");

	if (!block->user && !block->next->user)
	    printf ("ERROR: two consecutive free blocks\n");
    }
}


//
// Z_FileDumpHeap
//
void Z_FileDumpHeap (FILE* f)
{
    memblock_t*	block;
	
    fprintf (f,"zone size: %i  location: %p\n",mainzone->size,mainzone);
	
    for (block = mainzone->blocklist.next ; ; block = block->next)
    {
	fprintf (f,"block:%p    size:%7i    user:%p    tag:%3i\n",
		 block, block->size, block->user, block->tag);
		
	if (block->next == &mainzone->blocklist)
	{
	    // all blocks have been hit
	    break;
	}
	
	if ( (byte *)block + block->size != (byte *)block->next)
	    fprintf (f,"ERROR: block size does not touch the next block\n");

	if ( block->next->prev != block)
	    fprintf (f,"ERROR: next block doesn't have proper back link\n");

	if (!block->user && !block->next->user)
	    fprintf (f,"ERROR: two consecutive free blocks\n");
    }
}



//
// Z_CheckHeap
//
void Z_CheckHeap (void)
{
    memblock_t*	block;
	
    for (block = mainzone->blocklist.next ; ; block = block->next)
    {
	if (block->next == &mainzone->blocklist)
	{
	    // all blocks have been hit
	    break;
	}
	
	if ( (byte *)block + block->size != (byte *)block->next)
	    I_Error ("Z_CheckHeap: block size does not touch the next block\n");

	if ( block->next->prev != block)
	    I_Error ("Z_CheckHeap: next block doesn't have proper back link\n");

	if (!block->user && !block->next->user)
	    I_Error ("Z_CheckHeap: two consecutive free blocks\n");
    }
}




//
// Z_ChangeTag
//
void
Z_ChangeTag2
( void*		ptr,
  int		tag )
{
    memblock_t*	block;
	
    block = (memblock_t *) ( (byte *)ptr - sizeof(memblock_t));

    if (block->id != ZONEID)
	I_Error ("Z_ChangeTag: freed a pointer without ZONEID");

    if (tag >= PU_PURGELEVEL && (unsigned)block->user < 0x100)
	I_Error ("Z_ChangeTag: an owner is required for purgable blocks");

    block->tag = tag;
}



//
// Z_FreeMemory
//
int Z_FreeMemory (void)
{
    memblock_t*		block;
    int			free;
	
    free = 0;
    
    for (block = mainzone->blocklist.next ;
	 block != &mainzone->blocklist;
	 block = block->next)
    {
	if (!block->user || block->tag >= PU_PURGELEVEL)
	    free += block->size;
    }
    return free;
}

```