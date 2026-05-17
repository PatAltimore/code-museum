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
description: "This file implements DOOM's memory management system, a critical innovation that allowed the game to run efficiently on limited hardware."

summary:
  - point: "DOOM's memory allocation system avoids fragmentation by ensuring contiguous memory blocks."
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory management"
  - point: "The use of 'tags' in memory blocks allows for efficient categorization and purging of unused memory."
    link: "https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)"
    link_label: "Garbage collection"
  - point: "The 'rover' pointer optimizes allocation by reducing search time for free memory blocks."
    link: "https://en.wikipedia.org/wiki/Linked_list"
    link_label: "Linked list"
  - point: "Error-checking routines ensure the integrity of memory blocks, preventing crashes."
    link: "https://en.wikipedia.org/wiki/Segmentation_fault"
    link_label: "Segmentation fault"
  - point: "DOOM's memory system reflects the constraints of early 1990s PC hardware, where memory was a scarce resource."
    link: "https://en.wikipedia.org/wiki/History_of_computing_hardware"
    link_label: "History of computing hardware"

enhancements:
  - id: "zone-memory-allocation-overview"
    line_start: 32
    line_end: 41
    title: "Zone Memory Allocation: A Game-Changer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Memory_Pool.svg/330px-Memory_Pool.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "A Memory Pool Diagram (CC0)"
    content: "This section introduces DOOM's zone memory allocation system, a method designed to manage memory efficiently on early 1990s hardware. Memory blocks are organized in a linked list, ensuring there are no gaps or contiguous free blocks. This approach minimizes fragmentation, a common problem in memory management, and optimizes performance by keeping the 'rover' pointer ready to allocate memory without extensive searching. In 1993, personal computers typically had 4–8 MB of RAM, and games like DOOM had to make every byte count. John Carmack, the lead programmer, was known for his ability to push hardware to its limits, and this system reflects his ingenuity. Zone memory allocation became a foundational technique in game development, influencing later engines and software systems."
  - id: "memzone-structure-definition"
    line_start: 46
    line_end: 56
    title: "Defining the Memory Zone Structure"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_structure"
    image_url: ""
    image_caption: ""
    content: "Here, the 'memzone_t' structure is defined, encapsulating the memory zone's size, block list, and rover pointer. This structure is the backbone of DOOM's memory management system, enabling efficient allocation and deallocation of memory blocks. The design reflects the constraints of the era, where developers had to carefully manage limited resources. By organizing memory into zones, Carmack and his team ensured that the game could dynamically allocate memory for textures, sounds, and gameplay elements without crashing or slowing down. This structure's simplicity and effectiveness made it a model for future game engines."
  - id: "z-clearzone-initialization"
    line_start: 67
    line_end: 86
    title: "Clearing the Zone: Memory Initialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Initialization_(programming)"
    image_url: ""
    image_caption: ""
    content: "The 'Z_ClearZone' function initializes a memory zone by setting it to a single free block. This operation is crucial for ensuring that the memory zone starts in a clean state, ready for allocation. The function calculates the size of the free block, sets up pointers for the linked list, and marks the block as free. In the early 1990s, initializing memory zones efficiently was vital for performance, as games like DOOM had to run on hardware with limited processing power and memory. This function exemplifies the meticulous attention to detail that characterized Carmack's programming style, laying the groundwork for the game's smooth performance."
  - id: "z-init-mainzone-setup"
    line_start: 93
    line_end: 116
    title: "Setting Up the Main Memory Zone"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The 'Z_Init' function sets up the main memory zone, which serves as the central pool for all memory allocations in DOOM. It calls 'I_ZoneBase' to determine the size of the memory zone and initializes it as a single free block. This setup ensures that the game has a dedicated memory pool to manage resources like textures, sprites, and sound effects. The function reflects the challenges of developing software for early PCs, where memory constraints required innovative solutions. By creating a centralized memory zone, Carmack and his team optimized performance and reliability, enabling DOOM to deliver its groundbreaking gameplay."
  - id: "z-free-memory-deallocation"
    line_start: 122
    line_end: 172
    title: "Freeing Memory: A Delicate Operation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The 'Z_Free' function deallocates memory blocks, marking them as free and merging them with adjacent free blocks to prevent fragmentation. This operation is crucial for maintaining the integrity of the memory zone, ensuring that the game can reuse memory efficiently. The function includes error-checking mechanisms to prevent invalid memory accesses, which could crash the game. In the early 1990s, memory management was a delicate task, as bugs could lead to unpredictable behavior. Carmack's implementation demonstrates a deep understanding of these challenges, creating a robust system that contributed to DOOM's stability and performance."
  - id: "z-malloc-memory-allocation"
    line_start: 183
    line_end: 288
    title: "Dynamic Memory Allocation in Action"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dynamic_memory_allocation"
    image_url: ""
    image_caption: ""
    content: "The 'Z_Malloc' function dynamically allocates memory blocks, scanning the linked list for a free block of sufficient size. If no suitable block is found, it purges blocks marked as 'purgable' to free up space. This function highlights DOOM's innovative approach to memory management, balancing the need for dynamic allocation with the constraints of limited hardware. By using a 'rover' pointer to optimize the search process, Carmack reduced the overhead of memory allocation, enabling the game to run smoothly even during intense gameplay. This technique influenced later game engines, showcasing the lasting impact of DOOM's design."
  - id: "z-dumpheap-memory-debugging"
    line_start: 323
    line_end: 359
    title: "Debugging Memory: The Heap Dump"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugging"
    image_url: ""
    image_caption: ""
    content: "The 'Z_DumpHeap' function provides a detailed report of the memory zone's state, listing each block's address, size, user, and tag. This debugging tool helps developers identify issues such as memory leaks, fragmentation, or invalid pointers. In the early 1990s, debugging tools were limited, and developers often had to create their own solutions. Carmack's decision to include this function reflects his commitment to creating robust, maintainable code. By providing insights into the memory zone's state, 'Z_DumpHeap' enabled the team to optimize performance and ensure stability, contributing to DOOM's reputation as a technical masterpiece."

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
