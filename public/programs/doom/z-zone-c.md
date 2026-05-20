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
description: "The memory management system in DOOM was a critical innovation that allowed the game to run efficiently on limited hardware, influencing countless future games and engines."

summary:
  - point: "DOOM's memory allocation system avoided fragmentation by ensuring no contiguous free blocks existed."
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "The 'rover' pointer streamlined allocation by tracking the next free block."
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM"
  - point: "Tags enabled dynamic memory purging, a precursor to modern garbage collection techniques."
    link: "https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)"
    link_label: "Garbage Collection"

enhancements:
  - id: "zone-memory-allocation-overview"
    line_start: 32
    line_end: 41
    title: "Why DOOM Avoided Contiguous Free Blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "This section introduces DOOM's zone memory allocation system, which was designed to minimize fragmentation and maximize performance on constrained hardware. The key insight was ensuring that no two contiguous free memory blocks existed, which avoided costly coalescing operations during runtime. By maintaining a 'rover' pointer to track the next free block, the system streamlined allocation and deallocation. In the early 1990s, consumer PCs typically had limited RAM (often 4–8 MB), making efficient memory management crucial for a game as ambitious as DOOM. John Carmack, the lead programmer, drew inspiration from prior work in systems programming and adapted these techniques to fit the game's real-time requirements. This approach influenced later game engines, including Quake and Unreal, which adopted similar strategies for memory management."
  - id: "clear-zone-initialization"
    line_start: 64
    line_end: 86
    title: "How DOOM Reset Memory Zones"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `Z_ClearZone` function resets a memory zone to a single free block, effectively clearing all allocations. This was a foundational operation for initializing or resetting memory in DOOM. The function sets up the blocklist and rover pointer, ensuring the entire zone is ready for new allocations. In the early 1990s, memory management was often manual, and games needed to handle fragmentation carefully to avoid crashes or performance degradation. Carmack's approach ensured stability and predictability, even under heavy memory usage. This technique laid the groundwork for more sophisticated memory management systems in later engines, where zone-based allocation became a standard practice."
  - id: "zone-initialization"
    line_start: 90
    line_end: 116
    title: "The Function That Starts It All"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `Z_Init` function initializes the main memory zone used by DOOM. It calls `I_ZoneBase` to allocate memory and sets up the blocklist and rover pointer. This function ensures that the entire memory zone starts as a single free block, ready for allocation. At the time, games like DOOM had to run on hardware with very limited resources, often relying on manual memory management to avoid crashes and ensure smooth gameplay. This initialization routine exemplifies Carmack's meticulous approach to performance optimization. The concept of a single contiguous memory zone influenced later game engines, which adopted similar strategies to manage memory efficiently in real-time applications."
  - id: "freeing-memory-blocks"
    line_start: 119
    line_end: 172
    title: "The Art of Freeing Memory Safely"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `Z_Free` function handles the deallocation of memory blocks in DOOM's zone memory system. It verifies the block's integrity using a unique identifier (`ZONEID`) and merges adjacent free blocks to prevent fragmentation. This approach was crucial for maintaining performance on hardware with limited RAM. In the early 1990s, memory management was a complex challenge, especially for real-time applications like games. Carmack's solution ensured stability and efficiency, avoiding the pitfalls of traditional malloc/free systems. The merging of free blocks inspired similar techniques in later engines, where memory fragmentation remained a critical concern."
  - id: "malloc-allocation-strategy"
    line_start: 176
    line_end: 288
    title: "How DOOM Allocated Memory Dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `Z_Malloc` function dynamically allocates memory blocks in DOOM's zone memory system. It scans the blocklist for a free block of sufficient size, purging blocks if necessary. The function also splits oversized blocks to minimize wasted space. This allocation strategy was designed to handle the game's demanding real-time requirements while avoiding fragmentation. In 1993, dynamic memory allocation was a significant challenge for game developers, especially on hardware with limited resources. Carmack's implementation ensured that DOOM could manage memory efficiently without compromising performance. This technique influenced later engines, which adopted similar strategies for dynamic allocation in real-time applications."
  - id: "heap-dump-debugging"
    line_start: 322
    line_end: 359
    title: "Debugging Memory with Heap Dumps"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugging"
    image_url: ""
    image_caption: ""
    content: "The `Z_DumpHeap` function provides a detailed view of the memory zone, listing each block's size, user, and tag. This debugging tool was invaluable for identifying memory issues during development. In the early 1990s, debugging tools were limited, and developers often relied on custom functions like this to diagnose problems. Carmack's inclusion of `Z_DumpHeap` reflects his commitment to robust development practices, ensuring that DOOM's memory system was both efficient and reliable. This approach influenced later engines, where detailed memory debugging became a standard feature."
  - id: "check-heap-integrity"
    line_start: 396
    line_end: 420
    title: "Ensuring Memory Integrity in Real-Time"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `Z_CheckHeap` function verifies the integrity of the memory zone, checking for issues like overlapping blocks or consecutive free blocks. This routine was critical for maintaining stability in DOOM's memory system, especially during long play sessions. In the early 1990s, memory corruption was a common cause of crashes in games, and developers had to implement rigorous checks to prevent it. Carmack's approach ensured that DOOM remained stable even under heavy memory usage, setting a precedent for robust memory management in later engines."

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
