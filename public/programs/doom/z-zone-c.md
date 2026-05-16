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
description: "This file implements DOOM's memory management system, a crucial innovation for performance on limited hardware."

summary:
  - point: "DOOM's memory allocation system avoids fragmentation by ensuring contiguous memory blocks."
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "The use of 'rover' pointers optimizes memory allocation and deallocation."
    link: "https://en.wikipedia.org/wiki/Pointer_(computer_programming)"
    link_label: "Pointer"
  - point: "Tags are used to classify memory blocks for efficient purging and allocation."
    link: "https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)"
    link_label: "Garbage Collection"
  - point: "The system was designed to work on hardware with as little as 4 MB of RAM."
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "Error handling ensures robust memory management, preventing crashes from invalid memory operations."
    link: "https://en.wikipedia.org/wiki/Segmentation_fault"
    link_label: "Segmentation Fault"

enhancements:
  - id: "zone-memory-allocation-overview"
    line_start: 32
    line_end: 41
    title: "Memory Allocation: A Contiguous Strategy"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Operating_system_placement.svg/330px-Operating_system_placement.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Graph of Operating System placement on computer usage (CC BY-SA 3.0)"
    content: "This section introduces DOOM's memory allocation system, which ensures there are no gaps or contiguous free blocks in memory. The goal is to maximize efficiency and minimize fragmentation, a critical concern for performance on 1993-era hardware. At the time, consumer PCs often had only 4–8 MB of RAM, and games like DOOM needed to manage memory carefully to avoid crashes or slowdowns. John Carmack, the technical mastermind behind DOOM, designed this system to handle dynamic memory allocation while maintaining high-speed gameplay. This approach influenced later memory management systems in gaming and beyond, showcasing the importance of efficient allocation in real-time applications."
  - id: "zone-clearzone-initialization"
    line_start: 65
    line_end: 86
    title: "Clearing Memory Zones for Fresh Starts"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Operating_system_placement.svg/330px-Operating_system_placement.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Graph of Operating System placement on computer usage (CC BY-SA 3.0)"
    content: "The `Z_ClearZone` function resets a memory zone, consolidating it into a single free block. This ensures that the zone is ready for new allocations without leftover fragments. In the early 1990s, memory management was a delicate balancing act, especially for games like DOOM that pushed hardware to its limits. By clearing zones efficiently, the developers could guarantee smooth gameplay even as memory was dynamically allocated and freed during runtime. This technique reflects Carmack's meticulous approach to optimization, ensuring that every byte of memory was utilized effectively. The concept of memory zones would later inspire similar systems in other real-time applications, emphasizing the importance of clean initialization."
  - id: "zone-init-mainzone-setup"
    line_start: 91
    line_end: 116
    title: "Initializing the Main Memory Zone"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Operating_system_placement.svg/330px-Operating_system_placement.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Graph of Operating System placement on computer usage (CC BY-SA 3.0)"
    content: "The `Z_Init` function sets up the main memory zone, allocating a single large block that will be subdivided as needed. This design reflects the constraints of early 1990s hardware, where memory was scarce and needed to be managed carefully. By initializing the zone as one contiguous block, Carmack and his team ensured that memory allocation would be fast and predictable, avoiding the pitfalls of fragmentation. This approach was critical for DOOM's performance, allowing it to maintain high frame rates and responsiveness even on modest systems. The concept of a 'main zone' remains relevant in modern memory management, demonstrating the lasting impact of DOOM's innovations."
  - id: "zone-free-memory-deallocation"
    line_start: 120
    line_end: 172
    title: "Freeing Memory: Merging Blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Structure_and_Interpretation_of_Computer_Programs_p.764a.gif/330px-Structure_and_Interpretation_of_Computer_Programs_p.764a.gif?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Structure and Interpretation of Computer Programs p.764a (CC BY-SA 4.0)"
    content: "The `Z_Free` function deallocates memory blocks and merges adjacent free blocks to prevent fragmentation. This merging process is a hallmark of efficient memory management, ensuring that free space is consolidated for future allocations. In the early 1990s, games like DOOM had to handle frequent memory operations during gameplay, making robust deallocation essential. Carmack's design avoids common pitfalls, such as leaving gaps between free blocks, which could lead to wasted memory. This technique reflects the team's deep understanding of hardware limitations and their commitment to squeezing maximum performance from every byte. The merging strategy influenced later memory management systems, highlighting its importance in real-time applications."
  - id: "zone-malloc-dynamic-allocation"
    line_start: 177
    line_end: 288
    title: "Dynamic Memory Allocation with Tags"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Operating_system_placement.svg/330px-Operating_system_placement.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Graph of Operating System placement on computer usage (CC BY-SA 3.0)"
    content: "The `Z_Malloc` function dynamically allocates memory blocks, using tags to classify them for efficient management. Tags allow the system to prioritize certain blocks for purging or retention, a critical feature for a game like DOOM that constantly allocates and frees memory during gameplay. This tagging system reflects Carmack's innovative approach to memory management, balancing performance with flexibility. The function also includes safeguards to prevent invalid allocations, ensuring stability in a fast-paced environment. By designing a system that could handle dynamic allocation seamlessly, the team enabled DOOM to run smoothly on hardware with limited resources. This technique remains influential, showcasing the importance of intelligent allocation strategies in software development."
  - id: "zone-dumpheap-debugging-tool"
    line_start: 323
    line_end: 359
    title: "Debugging Memory with Heap Dumps"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugging"
    image_url: ""
    image_caption: ""
    content: "The `Z_DumpHeap` function provides a detailed view of the memory heap, listing each block's size, user, and tag. This debugging tool was essential for identifying issues in memory management, such as fragmentation or invalid pointers. In the early 1990s, debugging tools were often rudimentary, making functions like this invaluable for developers working on complex systems like DOOM. Carmack's inclusion of heap dumps reflects his commitment to robust development practices, ensuring that the game could be optimized and debugged effectively. The concept of memory dumps remains a staple in modern debugging, underscoring the lasting impact of DOOM's development techniques."
  - id: "zone-checkheap-integrity-check"
    line_start: 397
    line_end: 419
    title: "Ensuring Memory Integrity During Runtime"
    wikipedia_url: "https://en.wikipedia.org/wiki/Segmentation_fault"
    image_url: ""
    image_caption: ""
    content: "The `Z_CheckHeap` function verifies the integrity of the memory heap, checking for issues like overlapping blocks or invalid links. This proactive approach to error detection was critical for a game like DOOM, which relied on stable memory management to maintain performance. In the early 1990s, segmentation faults and memory corruption were common challenges, especially for software running on diverse hardware configurations. Carmack's design includes rigorous checks to prevent these issues, reflecting his meticulous attention to detail. By ensuring memory integrity during runtime, the team minimized crashes and maintained the game's reputation for reliability. This emphasis on stability influenced later software development practices, highlighting the importance of robust error handling."

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
