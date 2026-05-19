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
description: "This file implements the memory management system for Wolfenstein 3D, showcasing innovative techniques for handling constrained memory environments in early PC gaming."

summary:
  - point: "Efficient memory block management using linked lists"
    link: "https://en.wikipedia.org/wiki/Linked_list"
    link_label: "Linked List"
  - point: "Integration of EMS and XMS memory standards"
    link: "https://en.wikipedia.org/wiki/Expanded_memory"
    link_label: "Expanded Memory"
  - point: "Dynamic memory allocation tailored to MS-DOS constraints"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Use of assembly for direct hardware interaction"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"
  - point: "Memory visualization for debugging purposes"
    link: "https://en.wikipedia.org/wiki/Debugging"
    link_label: "Debugging"

enhancements:
  - id: "quit-error-handling"
    line_start: 13
    line_end: 13
    title: "Simple error handling with Quit function"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "The Quit function provides a straightforward mechanism to handle fatal errors by terminating the program and displaying an error message. This approach reflects the simplicity required in early PC software development, where robustness was often sacrificed for performance. John Carmack and his team prioritized fast execution and minimal overhead, aligning with the constraints of MS-DOS systems. This method influenced later game engines, where error handling evolved to include logging and recovery mechanisms."
  - id: "mm-sizeptr-resize-memory"
    line_start: 18
    line_end: 20
    title: "MM_SizePtr: Resizing memory blocks dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dynamic_memory_allocation"
    image_url: ""
    image_caption: ""
    content: "The MM_SizePtr function is designed to dynamically resize memory blocks, a critical feature for managing limited resources in MS-DOS environments. This technique allowed Wolfenstein 3D to adapt memory usage to the game's needs, ensuring smooth gameplay despite hardware constraints. Dynamic memory allocation was a relatively new concept in the early 1990s, and its implementation here showcases id Software's ingenuity. This approach laid the groundwork for more sophisticated memory management systems in later engines like Quake and Unreal."
  - id: "ems-memory-management"
    line_start: 22
    line_end: 70
    title: "EMS: Expanded Memory Management"
    wikipedia_url: "https://en.wikipedia.org/wiki/Expanded_memory"
    image_url: ""
    image_caption: ""
    content: "The EMS section handles expanded memory, a standard introduced to overcome the 640KB conventional memory limit of MS-DOS. By interacting directly with the EMS driver via assembly instructions, this code enables Wolfenstein 3D to utilize additional memory for game data. This was crucial for achieving the game's groundbreaking performance and graphics. The use of EMS reflects id Software's mastery of hardware-specific optimizations, a skill that became a hallmark of their development process. EMS support influenced other developers to adopt similar techniques, pushing the boundaries of PC gaming."
  - id: "mml-checkforxms"
    line_start: 129
    line_end: 131
    title: "MML_CheckForXMS: Detecting Extended Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Extended_memory"
    image_url: ""
    image_caption: ""
    content: "This function checks for the presence of an XMS (Extended Memory Specification) driver, enabling the game to utilize memory beyond the 1MB boundary of conventional MS-DOS systems. By querying the interrupt vector table, the code determines whether XMS is available, showcasing the low-level programming expertise of John Carmack and his team. The ability to leverage XMS was a significant advancement, allowing Wolfenstein 3D to store more complex data structures and improve performance. This technique influenced other developers to integrate extended memory support into their software."
  - id: "mml-setupxms"
    line_start: 156
    line_end: 158
    title: "MML_SetupXMS: Allocating Upper Memory Blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management#Upper_memory_blocks"
    image_url: ""
    image_caption: ""
    content: "The MML_SetupXMS function attempts to allocate upper memory blocks (UMBs), which are segments of memory located between 640KB and 1MB. By interacting directly with the XMS driver, the code maximizes the available memory for game data. This approach reflects the ingenuity required to optimize memory usage on constrained MS-DOS systems. The allocation of UMBs was a common technique in the early 1990s, and its implementation here demonstrates id Software's commitment to pushing hardware limits. This method influenced later games to adopt similar strategies for memory management."
  - id: "mm-sortmem-compress-memory"
    line_start: 666
    line_end: 770
    title: "MM_SortMem: Compressing memory blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "MM_SortMem is responsible for compressing memory blocks by removing purgable data and consolidating movable blocks. This ensures efficient utilization of memory space, a critical requirement for running Wolfenstein 3D on systems with limited resources. The function also locks memory associated with active sounds, demonstrating the game's real-time considerations. This technique reflects the team's deep understanding of memory management and their ability to optimize performance under strict constraints. The concept of memory compression influenced later game engines, where similar techniques were used to manage dynamic assets."
  - id: "mm-showmemory-debugging-tool"
    line_start: 772
    line_end: 820
    title: "MM_ShowMemory: Visualizing memory usage"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugging"
    image_url: ""
    image_caption: ""
    content: "MM_ShowMemory provides a graphical representation of memory usage, helping developers debug and optimize the game's memory management. By plotting memory blocks on the screen, the function highlights locked, purgable, and free segments, offering insights into the game's runtime behavior. This tool reflects id Software's focus on debugging and performance tuning, which were essential for achieving Wolfenstein 3D's groundbreaking gameplay. Memory visualization tools like this influenced the development of modern debugging utilities, which provide detailed insights into memory and resource usage."
  - id: "mm-dumpdata-memory-diagnostics"
    line_start: 822
    line_end: 887
    title: "MM_DumpData: Memory diagnostics and logging"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "MM_DumpData creates a detailed log of memory blocks, including their attributes and sizes, and writes it to a file for analysis. This function serves as a diagnostic tool, helping developers identify memory allocation issues and optimize performance. The creation of a memory dump reflects id Software's commitment to debugging and their systematic approach to problem-solving. Tools like MM_DumpData influenced the development of modern profiling and diagnostic utilities, which are now standard in software development."
  - id: "mm-unusedmemory-free-space-calculation"
    line_start: 889
    line_end: 917
    title: "MM_UnusedMemory: Calculating free space"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "MM_UnusedMemory calculates the total free space available without purging memory blocks. This function provides a snapshot of the game's memory usage, helping developers understand resource constraints during runtime. The ability to calculate free space reflects the team's focus on optimizing memory management, a critical aspect of early PC game development. This technique influenced later games and engines, where memory usage metrics became essential for performance tuning and debugging."
  - id: "mm-totalfree-memory-optimization"
    line_start: 919
    line_end: 946
    title: "MM_TotalFree: Maximizing memory availability"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "MM_TotalFree calculates the total free space available, including purgable memory blocks. By identifying and freeing purgable blocks, the function maximizes memory availability for new allocations. This approach demonstrates id Software's commitment to optimizing memory usage, ensuring smooth gameplay on constrained hardware. The concept of purgable memory influenced later engines, where dynamic memory management became a standard practice for handling large and complex game assets."

---

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

