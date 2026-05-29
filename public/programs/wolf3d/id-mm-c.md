---
title: "ID_MM.C"
program: "Wolfenstein 3D"
program_slug: "wolf3d"
file_path: "WOLFSRC/ID_MM.C"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/wolf3d/blob/master/WOLFSRC/ID_MM.C"
year: 1992
author: "John Carmack, John Romero, Tom Hall"
slug: "id-mm-c"
order: 14
description: "Memory management routines for Wolfenstein 3D, showcasing innovative techniques for handling constrained resources on early PCs."

summary:
  - point: "Introduced a custom memory manager to handle conventional, EMS, and XMS memory efficiently."
    link: "https://en.wikipedia.org/wiki/Expanded_memory"
    link_label: "Expanded Memory"
  - point: "Used assembly language for direct hardware interaction, such as querying XMS drivers."
    link: "https://en.wikipedia.org/wiki/Extended_memory"
    link_label: "Extended Memory"
  - point: "Implemented purgeable memory blocks to optimize memory usage dynamically."
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Designed to support fast-paced gameplay by ensuring memory availability for critical tasks."
    link: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    link_label: "Wolfenstein 3D"
  - point: "Influenced later game engines, including Doom and Quake, by demonstrating efficient memory handling."
    link: "https://en.wikipedia.org/wiki/Doom_(1993_video_game)"
    link_label: "Doom"

enhancements:
  - id: "check-for-xms-driver"
    line_start: 117
    line_end: 143
    title: "How Wolfenstein Detected Extended Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Extended_memory"
    image_url: ""
    image_caption: ""
    content: "This routine checks for the presence of an Extended Memory Specification (XMS) driver by invoking interrupt 0x2F with function 0x4300. If the driver is installed, the function returns true; otherwise, it returns false. At the time, XMS was a standard for accessing memory beyond the 640KB conventional memory limit on MS-DOS systems. John Carmack's use of this technique reflects the necessity of squeezing every bit of performance out of limited hardware. By detecting XMS, the game could utilize upper memory blocks (UMBs) for non-critical data, freeing conventional memory for gameplay-critical tasks. This approach was crucial for running a complex game like Wolfenstein 3D on early PCs with constrained resources. The technique influenced later games and engines by demonstrating the importance of dynamic memory management in performance-critical applications."
  - id: "setup-upper-memory-blocks"
    line_start: 146
    line_end: 197
    title: "Allocating Upper Memory Blocks for Efficiency"
    wikipedia_url: "https://en.wikipedia.org/wiki/Upper_memory_block"
    image_url: ""
    image_caption: ""
    content: "This routine attempts to allocate all available Upper Memory Blocks (UMBs) using XMS calls. UMBs were segments of memory located between 640KB and 1MB, often used for storing non-critical data. The code iteratively requests the largest available UMBs, marking them as usable by the memory manager. This technique allowed Wolfenstein 3D to maximize the memory available for gameplay while adhering to the limitations of MS-DOS systems. The use of assembly language for direct interaction with the XMS driver highlights the low-level optimization required to achieve smooth performance. This approach influenced later game engines by demonstrating how to effectively manage memory in constrained environments, paving the way for more sophisticated memory management techniques in games like Doom and Quake."
  - id: "shutdown-xms-memory"
    line_start: 200
    line_end: 221
    title: "Releasing Extended Memory on Shutdown"
    wikipedia_url: "https://en.wikipedia.org/wiki/Extended_memory"
    image_url: ""
    image_caption: ""
    content: "This routine frees all allocated Upper Memory Blocks (UMBs) during the game's shutdown process. By iterating through the list of allocated UMBs and invoking the XMS_FREEUMB function, the code ensures that memory is properly released back to the system. This meticulous cleanup reflects the importance of responsible resource management in an era when memory leaks could severely impact system stability. John Carmack's attention to detail in memory handling set a standard for game developers, emphasizing the need for robust shutdown procedures. This approach influenced later game engines, which adopted similar practices to ensure stability and reliability in complex software systems."
  - id: "marking-memory-as-usable"
    line_start: 223
    line_end: 284
    title: "Claiming Memory Blocks for the Game"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "This routine marks a range of memory segments as usable by the game's memory manager. It modifies the linked list of memory blocks to reflect the newly allocated space, ensuring that the memory manager can efficiently track and utilize available resources. The code includes checks to prevent overlapping segments and handles edge cases where a segment spans multiple blocks. This level of precision was necessary to optimize memory usage on early PCs with limited resources. By dynamically adjusting memory allocation, Wolfenstein 3D could maintain high performance and responsiveness during gameplay. This technique influenced later game engines by demonstrating the importance of flexible and efficient memory management in real-time applications."
  - id: "dynamic-memory-compression"
    line_start: 654
    line_end: 759
    title: "Compressing Memory for Performance Gains"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "This routine compresses memory by throwing out purgeable blocks and moving non-purgeable blocks to consolidate free space. The code includes special handling for locked blocks and dynamically adjusts memory allocation to optimize usage. By compressing memory, Wolfenstein 3D could ensure that sufficient resources were available for critical tasks, such as rendering and audio playback. This technique reflects the ingenuity required to manage memory on early PCs, where hardware constraints often dictated software design. The approach influenced later game engines by demonstrating how to dynamically adapt to changing memory requirements, a principle that remains relevant in modern game development."
  - id: "memory-visualization-tool"
    line_start: 762
    line_end: 810
    title: "Visualizing Memory Usage in Real-Time"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "This routine provides a graphical representation of memory usage, displaying blocks as colored segments on the screen. Locked blocks are shown in red, purgeable blocks in purple, and non-purgeable blocks in blue. Free memory is represented in black. The visualization helps developers understand how memory is being allocated and identify potential issues, such as fragmentation or corruption. This tool reflects John Carmack's commitment to transparency and debugging, enabling the team to optimize memory usage during development. The concept of visualizing memory influenced later debugging tools and development environments, which adopted similar techniques to provide insights into resource management."
  - id: "memory-dump-for-debugging"
    line_start: 812
    line_end: 874
    title: "Dumping Memory Data to a File"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugging"
    image_url: ""
    image_caption: ""
    content: "This routine creates a detailed dump of memory data, writing information about each block to a file named 'MMDUMP.TXT'. The dump includes attributes such as lock and purge status, as well as the block's length and owner. This debugging tool was invaluable for diagnosing issues with memory allocation and ensuring the stability of the game. By providing a clear view of memory usage, the routine helped developers identify and resolve problems quickly. The concept of memory dumps influenced later debugging practices, becoming a standard feature in development tools and operating systems."
  - id: "unused-memory-calculation"
    line_start: 879
    line_end: 904
    title: "Calculating Free Memory Without Purging"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "This routine calculates the total amount of free memory without purging any blocks. By iterating through the linked list of memory blocks, the code sums up the gaps between allocated segments. This calculation was essential for understanding the game's memory usage and ensuring that sufficient resources were available for gameplay. The technique reflects the meticulous attention to resource management required in an era of constrained hardware. It influenced later systems by demonstrating the importance of tracking and optimizing memory usage in real-time applications."
  - id: "total-free-memory-with-purging"
    line_start: 909
    line_end: 936
    title: "Finding Maximum Free Memory with Purging"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "This routine calculates the total amount of free memory, including space that could be reclaimed by purging blocks. It iterates through the linked list of memory blocks, summing up gaps and the lengths of purgeable blocks. This calculation was crucial for optimizing memory usage and ensuring that the game could adapt to changing resource requirements. The technique highlights the dynamic nature of memory management in Wolfenstein 3D, where every byte counted. It influenced later game engines by demonstrating how to balance performance and resource utilization effectively."

---

```cpp
// NEWMM.C

/*
=============================================================================

		   ID software memory manager
		   --------------------------

Primary coder: John Carmack

RELIES ON
---------
Quit (char *error) function


WORK TO DO
----------
MM_SizePtr to change the size of a given pointer

Multiple purge levels utilized

EMS / XMS unmanaged routines

=============================================================================
*/

#include "ID_HEADS.H"
#pragma hdrstop

#pragma warn -pro
#pragma warn -use

/*
=============================================================================

							LOCAL INFO

=============================================================================
*/

#define LOCKBIT		0x80	// if set in attributes, block cannot be moved
#define PURGEBITS	3		// 0-3 level, 0= unpurgable, 3= purge first
#define PURGEMASK	0xfffc
#define BASEATTRIBUTES	0	// unlocked, non purgable

#define MAXUMBS		10

typedef struct mmblockstruct
{
	unsigned	start,length;
	unsigned	attributes;
	memptr		*useptr;	// pointer to the segment start
	struct mmblockstruct far *next;
} mmblocktype;


//#define GETNEWBLOCK {if(!(mmnew=mmfree))Quit("MM_GETNEWBLOCK: No free blocks!")\
//	;mmfree=mmfree->next;}

#define GETNEWBLOCK {if(!mmfree)MML_ClearBlock();mmnew=mmfree;mmfree=mmfree->next;}

#define FREEBLOCK(x) {*x->useptr=NULL;x->next=mmfree;mmfree=x;}

/*
=============================================================================

						 GLOBAL VARIABLES

=============================================================================
*/

mminfotype	mminfo;
memptr		bufferseg;
boolean		mmerror;

void		(* beforesort) (void);
void		(* aftersort) (void);

/*
=============================================================================

						 LOCAL VARIABLES

=============================================================================
*/

boolean		mmstarted;

void far	*farheap;
void		*nearheap;

mmblocktype	far mmblocks[MAXBLOCKS]
			,far *mmhead,far *mmfree,far *mmrover,far *mmnew;

boolean		bombonerror;

//unsigned	totalEMSpages,freeEMSpages,EMSpageframe,EMSpagesmapped,EMShandle;

void		(* XMSaddr) (void);		// far pointer to XMS driver

unsigned	numUMBs,UMBbase[MAXUMBS];

//==========================================================================

//
// local prototypes
//

boolean		MML_CheckForEMS (void);
void 		MML_ShutdownEMS (void);
void 		MM_MapEMS (void);
boolean 	MML_CheckForXMS (void);
void 		MML_ShutdownXMS (void);
void		MML_UseSpace (unsigned segstart, unsigned seglength);
void 		MML_ClearBlock (void);

//==========================================================================

/*
======================
=
= MML_CheckForXMS
=
= Check for XMM driver
=
=======================
*/

boolean MML_CheckForXMS (void)
{
	numUMBs = 0;

asm {
	mov	ax,0x4300
	int	0x2f				// query status of installed diver
	cmp	al,0x80
	je	good
	}

	return false;
good:
	return true;
}


/*
======================
=
= MML_SetupXMS
=
= Try to allocate all upper memory block
=
=======================
*/

void MML_SetupXMS (void)
{
	unsigned	base,size;

asm	{
	mov	ax,0x4310
	int	0x2f
	mov	[WORD PTR XMSaddr],bx
	mov	[WORD PTR XMSaddr+2],es		// function pointer to XMS driver
	}

getmemory:
asm	{
	mov	ah,XMS_ALLOCUMB
	mov	dx,0xffff					// try for largest block possible
	call	[DWORD PTR XMSaddr]
	or	ax,ax
	jnz	gotone

	cmp	bl,0xb0						// error: smaller UMB is available
	jne	done;

	mov	ah,XMS_ALLOCUMB
	call	[DWORD PTR XMSaddr]		// DX holds largest available UMB
	or	ax,ax
	jz	done						// another error...
	}

gotone:
asm	{
	mov	[base],bx
	mov	[size],dx
	}
	MML_UseSpace (base,size);
	mminfo.XMSmem += size*16;
	UMBbase[numUMBs] = base;
	numUMBs++;
	if (numUMBs < MAXUMBS)
		goto getmemory;

done:;
}


/*
======================
=
= MML_ShutdownXMS
=
======================
*/

void MML_ShutdownXMS (void)
{
	int	i;
	unsigned	base;

	for (i=0;i<numUMBs;i++)
	{
		base = UMBbase[i];

asm	mov	ah,XMS_FREEUMB
asm	mov	dx,[base]
asm	call	[DWORD PTR XMSaddr]
	}
}

//==========================================================================

/*
======================
=
= MML_UseSpace
=
= Marks a range of paragraphs as usable by the memory manager
= This is used to mark space for the near heap, far heap, ems page frame,
= and upper memory blocks
=
======================
*/

void MML_UseSpace (unsigned segstart, unsigned seglength)
{
	mmblocktype far *scan,far *last;
	unsigned	oldend;
	long		extra;

	scan = last = mmhead;
	mmrover = mmhead;		// reset rover to start of memory

//
// search for the block that contains the range of segments
//
	while (scan->start+scan->length < segstart)
	{
		last = scan;
		scan = scan->next;
	}

//
// take the given range out of the block
//
	oldend = scan->start + scan->length;
	extra = oldend - (segstart+seglength);
	if (extra < 0)
		Quit ("MML_UseSpace: Segment spans two blocks!");

	if (segstart == scan->start)
	{
		last->next = scan->next;			// unlink block
		FREEBLOCK(scan);
		scan = last;
	}
	else
		scan->length = segstart-scan->start;	// shorten block

	if (extra > 0)
	{
		GETNEWBLOCK;
		mmnew->useptr = NULL;

		mmnew->next = scan->next;
		scan->next = mmnew;
		mmnew->start = segstart+seglength;
		mmnew->length = extra;
		mmnew->attributes = LOCKBIT;
	}

}

//==========================================================================

/*
====================
=
= MML_ClearBlock
=
= We are out of blocks, so free a purgable block
=
====================
*/

void MML_ClearBlock (void)
{
	mmblocktype far *scan,far *last;

	scan = mmhead->next;

	while (scan)
	{
		if (!(scan->attributes&LOCKBIT) && (scan->attributes&PURGEBITS) )
		{
			MM_FreePtr(scan->useptr);
			return;
		}
		scan = scan->next;
	}

	Quit ("MM_ClearBlock: No purgable blocks!");
}


//==========================================================================

/*
===================
=
= MM_Startup
=
= Grabs all space from turbo with malloc/farmalloc
= Allocates bufferseg misc buffer
=
===================
*/

static	char *ParmStrings[] = {"noems","noxms",""};

void MM_Startup (void)
{
	int i;
	unsigned 	long length;
	void far 	*start;
	unsigned 	segstart,seglength,endfree;

	if (mmstarted)
		MM_Shutdown ();


	mmstarted = true;
	bombonerror = true;
//
// set up the linked list (everything in the free list;
//
	mmhead = NULL;
	mmfree = &mmblocks[0];
	for (i=0;i<MAXBLOCKS-1;i++)
		mmblocks[i].next = &mmblocks[i+1];
	mmblocks[i].next = NULL;

//
// locked block of all memory until we punch out free space
//
	GETNEWBLOCK;
	mmhead = mmnew;				// this will allways be the first node
	mmnew->start = 0;
	mmnew->length = 0xffff;
	mmnew->attributes = LOCKBIT;
	mmnew->next = NULL;
	mmrover = mmhead;


//
// get all available near conventional memory segments
//
	length=coreleft();
	start = (void far *)(nearheap = malloc(length));

	length -= 16-(FP_OFF(start)&15);
	length -= SAVENEARHEAP;
	seglength = length / 16;			// now in paragraphs
	segstart = FP_SEG(start)+(FP_OFF(start)+15)/16;
	MML_UseSpace (segstart,seglength);
	mminfo.nearheap = length;

//
// get all available far conventional memory segments
//
	length=farcoreleft();
	start = farheap = farmalloc(length);
	length -= 16-(FP_OFF(start)&15);
	length -= SAVEFARHEAP;
	seglength = length / 16;			// now in paragraphs
	segstart = FP_SEG(start)+(FP_OFF(start)+15)/16;
	MML_UseSpace (segstart,seglength);
	mminfo.farheap = length;
	mminfo.mainmem = mminfo.nearheap + mminfo.farheap;

//
// allocate the misc buffer
//
	mmrover = mmhead;		// start looking for space after low block

	MM_GetPtr (&bufferseg,BUFFERSIZE);
}

//==========================================================================

/*
====================
=
= MM_Shutdown
=
= Frees all conventional, EMS, and XMS allocated
=
====================
*/

void MM_Shutdown (void)
{
  if (!mmstarted)
	return;

  farfree (farheap);
  free (nearheap);
//  MML_ShutdownXMS ();
}

//==========================================================================

/*
====================
=
= MM_GetPtr
=
= Allocates an unlocked, unpurgable block
=
====================
*/

void MM_GetPtr (memptr *baseptr,unsigned long size)
{
	mmblocktype far *scan,far *lastscan,far *endscan
				,far *purge,far *next;
	int			search;
	unsigned	needed,startseg;

	needed = (size+15)/16;		// convert size from bytes to paragraphs

	GETNEWBLOCK;				// fill in start and next after a spot is found
	mmnew->length = needed;
	mmnew->useptr = baseptr;
	mmnew->attributes = BASEATTRIBUTES;

tryagain:
	for (search = 0; search<3; search++)
	{
	//
	// first search:	try to allocate right after the rover, then on up
	// second search: 	search from the head pointer up to the rover
	// third search:	compress memory, then scan from start
		if (search == 1 && mmrover == mmhead)
			search++;

		switch (search)
		{
		case 0:
			lastscan = mmrover;
			scan = mmrover->next;
			endscan = NULL;
			break;
		case 1:
			lastscan = mmhead;
			scan = mmhead->next;
			endscan = mmrover;
			break;
		case 2:
			MM_SortMem ();
			lastscan = mmhead;
			scan = mmhead->next;
			endscan = NULL;
			break;
		}

		startseg = lastscan->start + lastscan->length;

		while (scan != endscan)
		{
			if (scan->start - startseg >= needed)
			{
			//
			// got enough space between the end of lastscan and
			// the start of scan, so throw out anything in the middle
			// and allocate the new block
			//
				purge = lastscan->next;
				lastscan->next = mmnew;
				mmnew->start = *(unsigned *)baseptr = startseg;
				mmnew->next = scan;
				while ( purge != scan)
				{	// free the purgable block
					next = purge->next;
					FREEBLOCK(purge);
					purge = next;		// purge another if not at scan
				}
				mmrover = mmnew;
				return;	// good allocation!
			}

			//
			// if this block is purge level zero or locked, skip past it
			//
			if ( (scan->attributes & LOCKBIT)
				|| !(scan->attributes & PURGEBITS) )
			{
				lastscan = scan;
				startseg = lastscan->start + lastscan->length;
			}


			scan=scan->next;		// look at next line
		}
	}

	if (bombonerror)
	{

extern char configname[];
extern	boolean	insetupscaling;
extern	int	viewsize;
boolean SetViewSize (unsigned width, unsigned height);
#define HEIGHTRATIO		0.50
//
// wolf hack -- size the view down
//
		if (!insetupscaling && viewsize>10)
		{
mmblocktype	far *savedmmnew;
			savedmmnew = mmnew;
			viewsize -= 2;
			SetViewSize (viewsize*16,viewsize*16*HEIGHTRATIO);
			mmnew = savedmmnew;
			goto tryagain;
		}

//		unlink(configname);
		Quit ("MM_GetPtr: Out of memory!");
	}
	else
		mmerror = true;
}

//==========================================================================

/*
====================
=
= MM_FreePtr
=
= Deallocates an unlocked, purgable block
=
====================
*/

void MM_FreePtr (memptr *baseptr)
{
	mmblocktype far *scan,far *last;

	last = mmhead;
	scan = last->next;

	if (baseptr == mmrover->useptr)	// removed the last allocated block
		mmrover = mmhead;

	while (scan->useptr != baseptr && scan)
	{
		last = scan;
		scan = scan->next;
	}

	if (!scan)
		Quit ("MM_FreePtr: Block not found!");

	last->next = scan->next;

	FREEBLOCK(scan);
}
//==========================================================================

/*
=====================
=
= MM_SetPurge
=
= Sets the purge level for a block (locked blocks cannot be made purgable)
=
=====================
*/

void MM_SetPurge (memptr *baseptr, int purge)
{
	mmblocktype far *start;

	start = mmrover;

	do
	{
		if (mmrover->useptr == baseptr)
			break;

		mmrover = mmrover->next;

		if (!mmrover)
			mmrover = mmhead;
		else if (mmrover == start)
			Quit ("MM_SetPurge: Block not found!");

	} while (1);

	mmrover->attributes &= ~PURGEBITS;
	mmrover->attributes |= purge;
}

//==========================================================================

/*
=====================
=
= MM_SetLock
=
= Locks / unlocks the block
=
=====================
*/

void MM_SetLock (memptr *baseptr, boolean locked)
{
	mmblocktype far *start;

	start = mmrover;

	do
	{
		if (mmrover->useptr == baseptr)
			break;

		mmrover = mmrover->next;

		if (!mmrover)
			mmrover = mmhead;
		else if (mmrover == start)
			Quit ("MM_SetLock: Block not found!");

	} while (1);

	mmrover->attributes &= ~LOCKBIT;
	mmrover->attributes |= locked*LOCKBIT;
}

//==========================================================================

/*
=====================
=
= MM_SortMem
=
= Throws out all purgable stuff and compresses movable blocks
=
=====================
*/

void MM_SortMem (void)
{
	mmblocktype far *scan,far *last,far *next;
	unsigned	start,length,source,dest;
	int			playing;

	//
	// lock down a currently playing sound
	//
	playing = SD_SoundPlaying ();
	if (playing)
	{
		switch (SoundMode)
		{
		case sdm_PC:
			playing += STARTPCSOUNDS;
			break;
		case sdm_AdLib:
			playing += STARTADLIBSOUNDS;
			break;
		}
		MM_SetLock(&(memptr)audiosegs[playing],true);
	}


	SD_StopSound();

	if (beforesort)
		beforesort();

	scan = mmhead;

	last = NULL;		// shut up compiler warning

	while (scan)
	{
		if (scan->attributes & LOCKBIT)
		{
		//
		// block is locked, so try to pile later blocks right after it
		//
			start = scan->start + scan->length;
		}
		else
		{
			if (scan->attributes & PURGEBITS)
			{
			//
			// throw out the purgable block
			//
				next = scan->next;
				FREEBLOCK(scan);
				last->next = next;
				scan = next;
				continue;
			}
			else
			{
			//
			// push the non purgable block on top of the last moved block
			//
				if (scan->start != start)
				{
					length = scan->length;
					source = scan->start;
					dest = start;
					while (length > 0xf00)
					{
						movedata(source,0,dest,0,0xf00*16);
						length -= 0xf00;
						source += 0xf00;
						dest += 0xf00;
					}
					movedata(source,0,dest,0,length*16);

					scan->start = start;
					*(unsigned *)scan->useptr = start;
				}
				start = scan->start + scan->length;
			}
		}

		last = scan;
		scan = scan->next;		// go to next block
	}

	mmrover = mmhead;

	if (aftersort)
		aftersort();

	if (playing)
		MM_SetLock(&(memptr)audiosegs[playing],false);
}


//==========================================================================

/*
=====================
=
= MM_ShowMemory
=
=====================
*/

void MM_ShowMemory (void)
{
	mmblocktype far *scan;
	unsigned color,temp,x,y;
	long	end,owner;
	char    scratch[80],str[10];

	temp = bufferofs;
	bufferofs = displayofs;
	scan = mmhead;

	end = -1;

	while (scan)
	{
		if (scan->attributes & PURGEBITS)
			color = 5;		// dark purple = purgable
		else
			color = 9;		// medium blue = non purgable
		if (scan->attributes & LOCKBIT)
			color = 12;		// red = locked
		if (scan->start<=end)
			Quit ("MM_ShowMemory: Memory block order currupted!");
		end = scan->length-1;
		y = scan->start/320;
		x = scan->start%320;
		VW_Hlin(x,x+end,y,color);
		VW_Plot(x,y,15);
		if (scan->next && scan->next->start > end+1)
			VW_Hlin(x+end+1,x+(scan->next->start-scan->start),y,0);	// black = free

		scan = scan->next;
	}

	VW_FadeIn ();
	IN_Ack();

	bufferofs = temp;
}

//==========================================================================

/*
=====================
=
= MM_DumpData
=
=====================
*/

void MM_DumpData (void)
{
	mmblocktype far *scan,far *best;
	long	lowest,oldlowest;
	unsigned	owner;
	char	lock,purge;
	FILE	*dumpfile;


	free (nearheap);
	dumpfile = fopen ("MMDUMP.TXT","w");
	if (!dumpfile)
		Quit ("MM_DumpData: Couldn't open MMDUMP.TXT!");

	lowest = -1;
	do
	{
		oldlowest = lowest;
		lowest = 0xffff;

		scan = mmhead;
		while (scan)
		{
			owner = (unsigned)scan->useptr;

			if (owner && owner<lowest && owner > oldlowest)
			{
				best = scan;
				lowest = owner;
			}

			scan = scan->next;
		}

		if (lowest != 0xffff)
		{
			if (best->attributes & PURGEBITS)
				purge = 'P';
			else
				purge = '-';
			if (best->attributes & LOCKBIT)
				lock = 'L';
			else
				lock = '-';
			fprintf (dumpfile,"0x%p (%c%c) = %u\n"
			,(unsigned)lowest,lock,purge,best->length);
		}

	} while (lowest != 0xffff);

	fclose (dumpfile);
	Quit ("MMDUMP.TXT created.");
}

//==========================================================================


/*
======================
=
= MM_UnusedMemory
=
= Returns the total free space without purging
=
======================
*/

long MM_UnusedMemory (void)
{
	unsigned free;
	mmblocktype far *scan;

	free = 0;
	scan = mmhead;

	while (scan->next)
	{
		free += scan->next->start - (scan->start + scan->length);
		scan = scan->next;
	}

	return free*16l;
}

//==========================================================================


/*
======================
=
= MM_TotalFree
=
= Returns the total free space with purging
=
======================
*/

long MM_TotalFree (void)
{
	unsigned free;
	mmblocktype far *scan;

	free = 0;
	scan = mmhead;

	while (scan->next)
	{
		if ((scan->attributes&PURGEBITS) && !(scan->attributes&LOCKBIT))
			free += scan->length;
		free += scan->next->start - (scan->start + scan->length);
		scan = scan->next;
	}

	return free*16l;
}

//==========================================================================

/*
=====================
=
= MM_BombOnError
=
=====================
*/

void MM_BombOnError (boolean bomb)
{
	bombonerror = bomb;
}


```