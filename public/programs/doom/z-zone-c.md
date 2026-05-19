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
description: "This file implements DOOM's memory management system, a critical component for optimizing performance on limited hardware."

summary:
  - point: "DOOM's memory allocation system avoids fragmentation by ensuring contiguous memory blocks."
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "The use of tags allows for efficient categorization and purging of memory blocks."
    link: "https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)"
    link_label: "Garbage Collection"
  - point: "The 'rover' pointer facilitates dynamic memory allocation by scanning for free blocks."
    link: "https://en.wikipedia.org/wiki/Dynamic_memory_allocation"
    link_label: "Dynamic Memory Allocation"
  - point: "DOOM's memory system was designed to run efficiently on 1990s consumer hardware."
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "This file influenced memory management techniques in later game engines."
    link: "https://en.wikipedia.org/wiki/Game_engine"
    link_label: "Game Engine"

enhancements:
  - id: "zone-memory-allocation-overview"
    line_start: 33
    line_end: 41
    title: "Zone Memory Allocation: A Compact System"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "This section introduces DOOM's zone memory allocation system, which ensures efficient use of memory by maintaining contiguous memory blocks and avoiding fragmentation. The system uses a 'rover' pointer to dynamically allocate memory as needed, scanning for free blocks and purging cacheable blocks when necessary. In the early 1990s, memory was a scarce resource, especially on consumer-grade PCs with limited RAM. John Carmack and the id Software team designed this system to maximize performance while minimizing memory overhead. The concept of zone-based allocation influenced later game engines, including Quake and Unreal Engine, and remains a foundational technique in memory management for real-time applications."
  - id: "z-clearzone-initialization"
    line_start: 65
    line_end: 86
    title: "Z_ClearZone: Resetting Memory Zones"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The Z_ClearZone function resets a memory zone to a single free block, effectively clearing it for reuse. This is achieved by linking the blocklist's next and previous pointers to a newly initialized block and setting its size to the entire zone's available memory. In the early 1990s, efficient memory reuse was critical for games like DOOM, which had to perform well on machines with as little as 4 MB of RAM. By consolidating memory into a single free block, Carmack ensured that allocation operations could proceed without unnecessary fragmentation. This approach influenced memory management practices in subsequent game engines, particularly those requiring high performance in constrained environments."
  - id: "z-init-memory-zone-setup"
    line_start: 91
    line_end: 116
    title: "Z_Init: Setting Up the Memory Zone"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dynamic_memory_allocation"
    image_url: ""
    image_caption: ""
    content: "The Z_Init function initializes the main memory zone by allocating a contiguous block of memory and setting up the blocklist structure. This function calls I_ZoneBase to determine the size of the memory zone, ensuring compatibility with the underlying system. The blocklist is then configured to represent a single free block spanning the entire zone. This setup was crucial for DOOM's performance, as it provided a predictable and efficient memory allocation system. The concept of initializing memory zones in this manner became a standard practice in game development, influencing engines like Quake and others that followed."
  - id: "z-free-memory-deallocation"
    line_start: 120
    line_end: 172
    title: "Z_Free: Memory Deallocation with Merging"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The Z_Free function deallocates memory blocks and merges adjacent free blocks to prevent fragmentation. When a block is freed, its user pointer is cleared, and its size is added to neighboring free blocks if possible. This merging process ensures that the memory zone remains contiguous, optimizing future allocations. In the constrained hardware environment of the early 1990s, this technique was essential for maintaining performance and stability. By preventing fragmentation, Carmack's approach allowed DOOM to run smoothly even on low-end PCs. This method of memory deallocation and merging influenced later game engines and remains relevant in modern memory management systems."
  - id: "z-malloc-dynamic-allocation"
    line_start: 177
    line_end: 288
    title: "Z_Malloc: Dynamic Memory Allocation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dynamic_memory_allocation"
    image_url: ""
    image_caption: ""
    content: "The Z_Malloc function dynamically allocates memory blocks within the zone, scanning for free blocks of sufficient size and purging cacheable blocks if necessary. It uses a rover pointer to traverse the blocklist, ensuring efficient allocation. If a block is larger than needed, it splits the block into allocated and free fragments. This approach was innovative for its time, as it balanced performance with memory efficiency. By dynamically managing memory in this way, DOOM could handle complex scenes and gameplay mechanics without exceeding hardware limitations. The technique influenced memory allocation strategies in later game engines, including Quake and Unreal Engine."
  - id: "z-dumpheap-debugging-tool"
    line_start: 323
    line_end: 359
    title: "Z_DumpHeap: Debugging Memory Zones"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugging"
    image_url: ""
    image_caption: ""
    content: "The Z_DumpHeap function provides a detailed view of the memory zone, listing all blocks and their attributes. It checks for errors such as overlapping blocks, improper links, or consecutive free blocks, which could indicate memory corruption. Debugging tools like this were vital for ensuring the stability of DOOM's memory management system, especially during development. By identifying and resolving memory issues early, Carmack and the team ensured that the game could run reliably on a wide range of hardware. This function exemplifies the importance of robust debugging tools in software development, influencing practices in game engine design and beyond."
  - id: "z-checkheap-integrity-validation"
    line_start: 397
    line_end: 419
    title: "Z_CheckHeap: Validating Memory Integrity"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The Z_CheckHeap function validates the integrity of the memory zone by ensuring that blocks are correctly linked and do not overlap. It checks for errors such as consecutive free blocks or improper block sizes, which could lead to crashes or instability. This function reflects the meticulous attention to detail that characterized DOOM's development. By regularly validating memory integrity, Carmack ensured that the game could maintain high performance and stability even under heavy load. This practice influenced the development of debugging and validation tools in later game engines, emphasizing the importance of memory management in real-time applications."
  - id: "z-freememory-calculating-available-space"
    line_start: 449
    line_end: 466
    title: "Z_FreeMemory: Calculating Free Space"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The Z_FreeMemory function calculates the total amount of free memory in the zone by summing the sizes of free blocks and purgable blocks. This provides a quick way to assess available memory, which is crucial for optimizing performance and avoiding allocation failures. In the constrained hardware environment of the 1990s, knowing the available memory at any given time was essential for maintaining stability and performance. This function highlights the importance of efficient memory tracking in game development, influencing similar features in later engines and tools."

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
