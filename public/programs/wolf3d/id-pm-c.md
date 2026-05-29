---
title: "ID_PM.C"
program: "Wolfenstein 3D"
program_slug: "wolf3d"
file_path: "WOLFSRC/ID_PM.C"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/wolf3d/blob/master/WOLFSRC/ID_PM.C"
year: 1992
author: "John Carmack, John Romero, Tom Hall"
slug: "id-pm-c"
order: 20
description: "This file implements the Page Manager for Wolfenstein 3D, showcasing memory management techniques for constrained hardware environments."

summary:
  - point: "Innovative use of EMS and XMS memory for efficient paging"
    link: "https://en.wikipedia.org/wiki/Expanded_memory"
    link_label: "Expanded Memory Specification"
  - point: "Dynamic memory allocation strategies to optimize limited resources"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Efficient page replacement algorithms for real-time gameplay"
    link: "https://en.wikipedia.org/wiki/Page_replacement_algorithm"
    link_label: "Page Replacement Algorithm"

enhancements:
  - id: "ems-page-mapping"
    line_start: 48
    line_end: 68
    title: "Mapping EMS Pages: A Hardware Dance"
    wikipedia_url: "https://en.wikipedia.org/wiki/Expanded_memory"
    image_url: ""
    image_caption: ""
    content: "This function, PML_MapEMS, maps a logical memory page to a physical EMS page using low-level assembly instructions. At the time, EMS (Expanded Memory Specification) was a workaround for the 640KB memory limit imposed by MS-DOS. By invoking an interrupt (INT 67h), the function communicates with the EMS driver to perform the mapping. If the operation fails, the program terminates with an error message. This approach reflects the challenges of working with segmented memory models and the reliance on hardware-specific APIs. EMS was critical for enabling larger and more complex programs on early PCs, and this function exemplifies the ingenuity required to leverage it effectively."
  - id: "ems-initialization"
    line_start: 81
    line_end: 166
    title: "Starting Up EMS: Memory Beyond Limits"
    wikipedia_url: "https://en.wikipedia.org/wiki/Expanded_memory"
    image_url: ""
    image_caption: ""
    content: "PML_StartupEMS initializes the EMS system, verifying the presence of an EMS driver and hardware, and ensuring compatibility with EMS version 3.2 or later. The function allocates EMS pages and sets up a mapping cache. In the early 1990s, EMS was a vital tool for overcoming the memory limitations of MS-DOS, allowing programs like Wolfenstein 3D to store large amounts of data such as textures and sprites. The initialization process demonstrates the meticulous checks required to ensure compatibility across diverse hardware setups. This technique influenced later memory management systems in games and operating systems, paving the way for more sophisticated virtual memory implementations."
  - id: "xms-initialization"
    line_start: 184
    line_end: 237
    title: "XMS: Unlocking Extended Memory Potential"
    wikipedia_url: "https://en.wikipedia.org/wiki/Extended_memory"
    image_url: ""
    image_caption: ""
    content: "PML_StartupXMS sets up the XMS (Extended Memory Specification) system, checking for an XMS driver and ensuring that at least two pages of memory are available. XMS provided access to memory beyond the 1MB barrier imposed by the Intel 8086 architecture, using a protected mode interface. This function allocates XMS pages and updates the memory manager's statistics. The reliance on XMS reflects the growing need for efficient memory management in games as they became more graphically and computationally demanding. Techniques like these laid the groundwork for modern memory management practices in gaming engines and operating systems."
  - id: "page-file-management"
    line_start: 481
    line_end: 529
    title: "Opening the Page File: Data on Demand"
    wikipedia_url: "https://en.wikipedia.org/wiki/Virtual_memory"
    image_url: ""
    image_caption: ""
    content: "PML_OpenPageFile opens the game's page file (typically VSWAP), reads its header information, and sets up the page list. This file contains the game's resources, such as textures and sounds, stored in a paginated format for efficient access. By dynamically loading pages as needed, the game minimizes memory usage while maintaining performance. This technique is an early example of virtual memory management in gaming, allowing Wolfenstein 3D to deliver rich content despite hardware constraints. The concept of paging influenced later game engines and operating systems, where virtual memory became a standard feature."
  - id: "lru-page-replacement"
    line_start: 641
    line_end: 670
    title: "Finding the Least Recently Used Page"
    wikipedia_url: "https://en.wikipedia.org/wiki/Page_replacement_algorithm"
    image_url: ""
    image_caption: ""
    content: "PML_GiveLRUPage implements a Least Recently Used (LRU) algorithm to identify the page that can be replaced. It scans through the page list to find the one with the oldest 'lastHit' timestamp that is unlocked and present in memory. This ensures that memory is used efficiently while minimizing the impact on gameplay performance. LRU algorithms are a cornerstone of memory management, widely used in caching systems and virtual memory implementations. The use of LRU in Wolfenstein 3D reflects the game's innovative approach to managing limited resources, influencing later games and systems that adopted similar strategies."
  - id: "page-loading"
    line_start: 853
    line_end: 867
    title: "Loading Pages: On-Demand Resource Management"
    wikipedia_url: "https://en.wikipedia.org/wiki/Virtual_memory"
    image_url: ""
    image_caption: ""
    content: "PML_LoadPage loads a page from the page file into memory, either main memory or EMS, depending on availability. This function ensures that resources are loaded only when needed, reducing memory usage and improving performance. By dynamically managing resources, Wolfenstein 3D achieves a balance between rich content and hardware constraints. This approach to resource management became a standard in gaming, influencing the design of modern engines like Unreal and Unity, which also rely on dynamic loading to handle large assets efficiently."
  - id: "page-access"
    line_start: 869
    line_end: 923
    title: "Getting Pages: A Multi-Tiered Memory Strategy"
    wikipedia_url: "https://en.wikipedia.org/wiki/Virtual_memory"
    image_url: ""
    image_caption: ""
    content: "PM_GetPage retrieves the address of a page, loading it into memory if necessary. It first checks main memory and EMS, then XMS, and finally loads the page from the page file if it's not already cached. This multi-tiered approach to memory management ensures efficient use of resources while maintaining performance. The function's design reflects the challenges of working with constrained hardware and the ingenuity required to overcome them. Techniques like these influenced later games and systems, where multi-tiered memory strategies became essential for handling complex resource requirements."
  - id: "pm-preload-memory-allocation"
    line_start: 942
    line_end: 1055
    title: "How Wolfenstein Juggled EMS and XMS Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Expanded_memory"
    image_url: ""
    image_caption: ""
    content: "The `PM_Preload` function is responsible for preloading game data into memory, dynamically allocating pages across main memory, EMS (Expanded Memory Specification), and XMS (Extended Memory Specification). The function first calculates available memory in each category and then iterates through the game's data chunks, deciding where to place each chunk based on availability. It prioritizes main memory, then falls back to XMS if necessary. In 1992, PCs often had limited memory, with EMS and XMS providing ways to extend beyond the 640KB conventional memory limit. EMS used bank-switching techniques, while XMS provided linear access to extended memory. This function reflects the challenges developers faced in squeezing performance out of hardware with fragmented and constrained memory architectures. The approach taken here influenced memory management in later games, particularly those developed by id Software. Doom (1993) and Quake (1996) further refined these techniques, and the concepts of memory paging and caching remain relevant in modern game engines, albeit abstracted by operating systems and high-level APIs. This function also highlights the manual optimization required in an era before virtual memory became ubiquitous."
  - id: "pm-nextframe-thrashing-avoidance"
    line_start: 1057
    line_end: 1108
    title: "Thrashing Avoidance in Real-Time Gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Thrashing_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The `PM_NextFrame` function implements a mechanism to avoid memory thrashing during gameplay. Thrashing occurs when the system spends more time swapping data in and out of memory than executing useful work, leading to severe performance degradation. This function tracks frame counts and adjusts variables to mitigate thrashing, entering a 'panic mode' when thresholds are exceeded. In the early 1990s, thrashing was a common problem due to limited memory and slow disk access speeds. Wolfenstein 3D's developers had to ensure smooth gameplay despite these constraints. By introducing a mechanism to detect and recover from thrashing, they ensured the game could maintain its fast-paced action without stuttering or freezing. This approach laid the groundwork for more sophisticated memory management techniques in later games. The concept of monitoring resource usage and adapting dynamically is now standard practice in game engines, where it is implemented at higher levels of abstraction. The thrashing avoidance here is a direct precursor to modern resource management systems in engines like Unreal Engine and Unity."
  - id: "pm-reset-initializing-caching-structures"
    line_start: 1110
    line_end: 1136
    title: "Resetting Memory for Efficient Caching"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `PM_Reset` function initializes the caching structures used by the Page Manager. It calculates the number of pages available in EMS and XMS memory, resets usage counters, and sets up the page list by marking all pages as unused. This ensures a clean slate for memory management when the game starts or resets. In the early 1990s, manual memory management was a necessity for game developers. Systems like MS-DOS lacked sophisticated memory management, requiring developers to write their own routines to handle allocation, caching, and cleanup. This function reflects the meticulous attention to detail required to manage memory efficiently in such an environment. The techniques used here influenced later games and engines, which adopted similar initialization routines to prepare memory for use. While modern systems abstract much of this complexity, the principles of efficient memory allocation and initialization remain foundational in software development."
  - id: "pm-startup-memory-subsystem-initialization"
    line_start: 1138
    line_end: 1182
    title: "Starting Up Wolfenstein's Memory Manager"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `PM_Startup` function initializes the Page Manager, setting up memory subsystems based on the hardware and command-line parameters. It opens the page file, starts EMS and XMS subsystems if available, and ensures that at least one memory type is present. Finally, it calls `PM_Reset` to prepare the caching structures. This function highlights the challenges of developing for MS-DOS, where hardware configurations varied widely. Developers had to account for systems with different memory types and capacities, gracefully handling cases where certain subsystems were unavailable. The use of command-line parameters to disable specific memory types reflects the flexibility required to support diverse setups. The modular initialization approach seen here influenced later game engines, which adopted similar techniques to detect and configure hardware at runtime. This function's emphasis on robustness and adaptability ensured Wolfenstein 3D could run on a wide range of PCs, contributing to its commercial success and setting a precedent for cross-platform compatibility in gaming."
  - id: "pm-shutdown-cleaning-up-memory-subsystems"
    line_start: 1184
    line_end: 1199
    title: "How Wolfenstein Cleaned Up After Itself"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `PM_Shutdown` function gracefully shuts down the Page Manager, releasing resources allocated to EMS, XMS, and main memory. It ensures the page file is closed and memory subsystems are properly shut down, preventing resource leaks and ensuring the system remains stable after the game exits. In the early 1990s, resource cleanup was critical for software running on MS-DOS. Without proper shutdown routines, memory leaks and file corruption could occur, leading to system instability. This function demonstrates id Software's commitment to writing robust code that respected the limitations of the operating system. The principles of resource cleanup seen here are still relevant today, forming the basis of modern practices like RAII (Resource Acquisition Is Initialization) in C++ and garbage collection in managed languages. By ensuring clean shutdowns, Wolfenstein 3D set a standard for reliability in gaming software, influencing the development of later titles and engines."

---

```cpp
//
//	ID_PM.C
//	Id Engine's Page Manager v1.0
//	Primary coder: Jason Blochowiak
//

#include "ID_HEADS.H"
#pragma hdrstop

//	Main Mem specific variables
	boolean			MainPresent;
	memptr			MainMemPages[PMMaxMainMem];
	PMBlockAttr		MainMemUsed[PMMaxMainMem];
	int				MainPagesAvail;

//	EMS specific variables
	boolean			EMSPresent;
	word			EMSAvail,EMSPagesAvail,EMSHandle,
					EMSPageFrame,EMSPhysicalPage;
	EMSListStruct	EMSList[EMSFrameCount];

//	XMS specific variables
	boolean			XMSPresent;
	word			XMSAvail,XMSPagesAvail,XMSHandle;
	longword		XMSDriver;
	int				XMSProtectPage = -1;

//	File specific variables
	char			PageFileName[13] = {"VSWAP."};
	int				PageFile = -1;
	word			ChunksInFile;
	word			PMSpriteStart,PMSoundStart;

//	General usage variables
	boolean			PMStarted,
					PMPanicMode,
					PMThrashing;
	word			XMSPagesUsed,
					EMSPagesUsed,
					MainPagesUsed,
					PMNumBlocks;
	long			PMFrameCount;
	PageListStruct	far *PMPages,
					_seg *PMSegPages;

static	char		*ParmStrings[] = {"nomain","noems","noxms",nil};

/////////////////////////////////////////////////////////////////////////////
//
//	EMS Management code
//
/////////////////////////////////////////////////////////////////////////////

//
//	PML_MapEMS() - Maps a logical page to a physical page
//
void
PML_MapEMS(word logical,word physical)
{
	_AL = physical;
	_BX = logical;
	_DX = EMSHandle;
	_AH = EMS_MAPPAGE;
asm	int	EMS_INT

	if (_AH)
		Quit("PML_MapEMS: Page mapping failed");
}

//
//	PML_StartupEMS() - Sets up EMS for Page Mgr's use
//		Checks to see if EMS driver is present
//      Verifies that EMS hardware is present
//		Make sure that EMS version is 3.2 or later
//		If there's more than our minimum (2 pages) available, allocate it (up
//			to the maximum we need)
//

	char	EMMDriverName[9] = "EMMXXXX0";

boolean
PML_StartupEMS(void)
{
	int		i;
	long	size;

	EMSPresent = false;			// Assume that we'll fail
	EMSAvail = 0;

	_DX = (word)EMMDriverName;
	_AX = 0x3d00;
	geninterrupt(0x21);			// try to open EMMXXXX0 device
asm	jnc	gothandle
	goto error;

gothandle:
	_BX = _AX;
	_AX = 0x4400;
	geninterrupt(0x21);			// get device info
asm	jnc	gotinfo;
	goto error;

gotinfo:
asm	and	dx,0x80
	if (!_DX)
		goto error;

	_AX = 0x4407;
	geninterrupt(0x21);			// get status
asm	jc	error
	if (!_AL)
		goto error;

	_AH = 0x3e;
	geninterrupt(0x21);			// close handle

	_AH = EMS_STATUS;
	geninterrupt(EMS_INT);
	if (_AH)
		goto error;				// make sure EMS hardware is present

	_AH = EMS_VERSION;
	geninterrupt(EMS_INT);
	if (_AH || (_AL < 0x32))	// only work on EMS 3.2 or greater (silly, but...)
		goto error;

	_AH = EMS_GETFRAME;
	geninterrupt(EMS_INT);
	if (_AH)
		goto error;				// find the page frame address
	EMSPageFrame = _BX;

	_AH = EMS_GETPAGES;
	geninterrupt(EMS_INT);
	if (_AH)
		goto error;
	if (_BX < 2)
		goto error;         	// Require at least 2 pages (32k)
	EMSAvail = _BX;

	// Don't hog all available EMS
	size = EMSAvail * (long)EMSPageSize;
	if (size - (EMSPageSize * 2) > (ChunksInFile * (long)PMPageSize))
	{
		size = (ChunksInFile * (long)PMPageSize) + EMSPageSize;
		EMSAvail = size / EMSPageSize;
	}

	_AH = EMS_ALLOCPAGES;
	_BX = EMSAvail;
	geninterrupt(EMS_INT);
	if (_AH)
		goto error;
	EMSHandle = _DX;

	mminfo.EMSmem += EMSAvail * (long)EMSPageSize;

	// Initialize EMS mapping cache
	for (i = 0;i < EMSFrameCount;i++)
		EMSList[i].baseEMSPage = -1;

	EMSPresent = true;			// We have EMS

error:
	return(EMSPresent);
}

//
//	PML_ShutdownEMS() - If EMS was used, deallocate it
//
void
PML_ShutdownEMS(void)
{
	if (EMSPresent)
	{
	asm	mov	ah,EMS_FREEPAGES
	asm	mov	dx,[EMSHandle]
	asm	int	EMS_INT
		if (_AH)
			Quit ("PML_ShutdownEMS: Error freeing EMS");
	}
}

/////////////////////////////////////////////////////////////////////////////
//
//	XMS Management code
//
/////////////////////////////////////////////////////////////////////////////

//
//	PML_StartupXMS() - Starts up XMS for the Page Mgr's use
//		Checks for presence of an XMS driver
//		Makes sure that there's at least a page of XMS available
//		Allocates any remaining XMS (rounded down to the nearest page size)
//
boolean
PML_StartupXMS(void)
{
	XMSPresent = false;					// Assume failure
	XMSAvail = 0;

asm	mov	ax,0x4300
asm	int	XMS_INT         				// Check for presence of XMS driver
	if (_AL != 0x80)
		goto error;


asm	mov	ax,0x4310
asm	int	XMS_INT							// Get address of XMS driver
asm	mov	[WORD PTR XMSDriver],bx
asm	mov	[WORD PTR XMSDriver+2],es		// function pointer to XMS driver

	XMS_CALL(XMS_QUERYFREE);			// Find out how much XMS is available
	XMSAvail = _AX;
	if (!_AX)				// AJR: bugfix 10/8/92
		goto error;

	XMSAvail &= ~(PMPageSizeKB - 1);	// Round off to nearest page size
	if (XMSAvail < (PMPageSizeKB * 2))	// Need at least 2 pages
		goto error;

	_DX = XMSAvail;
	XMS_CALL(XMS_ALLOC);				// And do the allocation
	XMSHandle = _DX;

	if (!_AX)				// AJR: bugfix 10/8/92
	{
		XMSAvail = 0;
		goto error;
	}

	mminfo.XMSmem += XMSAvail * 1024;

	XMSPresent = true;
error:
	return(XMSPresent);
}

//
//	PML_XMSCopy() - Copies a main/EMS page to or from XMS
//		Will round an odd-length request up to the next even value
//
void
PML_XMSCopy(boolean toxms,byte far *addr,word xmspage,word length)
{
	longword	xoffset;
	struct
	{
		longword	length;
		word		source_handle;
		longword	source_offset;
		word		target_handle;
		longword	target_offset;
	} copy;

	if (!addr)
		Quit("PML_XMSCopy: zero address");

	xoffset = (longword)xmspage * PMPageSize;

	copy.length = (length + 1) & ~1;
	copy.source_handle = toxms? 0 : XMSHandle;
	copy.source_offset = toxms? (long)addr : xoffset;
	copy.target_handle = toxms? XMSHandle : 0;
	copy.target_offset = toxms? xoffset : (long)addr;

asm	push si
	_SI = (word)&copy;
	XMS_CALL(XMS_MOVE);
asm	pop	si
	if (!_AX)
		Quit("PML_XMSCopy: Error on copy");
}

#if 1
#define	PML_CopyToXMS(s,t,l)	PML_XMSCopy(true,(s),(t),(l))
#define	PML_CopyFromXMS(t,s,l)	PML_XMSCopy(false,(t),(s),(l))
#else
//
//	PML_CopyToXMS() - Copies the specified number of bytes from the real mode
//		segment address to the specified XMS page
//
void
PML_CopyToXMS(byte far *source,int targetpage,word length)
{
	PML_XMSCopy(true,source,targetpage,length);
}

//
//	PML_CopyFromXMS() - Copies the specified number of bytes from an XMS
//		page to the specified real mode address
//
void
PML_CopyFromXMS(byte far *target,int sourcepage,word length)
{
	PML_XMSCopy(false,target,sourcepage,length);
}
#endif

//
//	PML_ShutdownXMS()
//
void
PML_ShutdownXMS(void)
{
	if (XMSPresent)
	{
		_DX = XMSHandle;
		XMS_CALL(XMS_FREE);
		if (_BL)
			Quit("PML_ShutdownXMS: Error freeing XMS");
	}
}

/////////////////////////////////////////////////////////////////////////////
//
//	Main memory code
//
/////////////////////////////////////////////////////////////////////////////

//
//	PM_SetMainMemPurge() - Sets the purge level for all allocated main memory
//		blocks. This shouldn't be called directly - the PM_LockMainMem() and
//		PM_UnlockMainMem() macros should be used instead.
//
void
PM_SetMainMemPurge(int level)
{
	int	i;

	for (i = 0;i < PMMaxMainMem;i++)
		if (MainMemPages[i])
			MM_SetPurge(&MainMemPages[i],level);
}

//
//	PM_CheckMainMem() - If something besides the Page Mgr makes requests of
//		the Memory Mgr, some of the Page Mgr's blocks may have been purged,
//		so this function runs through the block list and checks to see if
//		any of the blocks have been purged. If so, it marks the corresponding
//		page as purged & unlocked, then goes through the block list and
//		tries to reallocate any blocks that have been purged.
//	This routine now calls PM_LockMainMem() to make sure that any allocation
//		attempts made during the block reallocation sweep don't purge any
//		of the other blocks. Because PM_LockMainMem() is called,
//		PM_UnlockMainMem() needs to be called before any other part of the
//		program makes allocation requests of the Memory Mgr.
//
void
PM_CheckMainMem(void)
{
	boolean			allocfailed;
	int				i,n;
	memptr			*p;
	PMBlockAttr		*used;
	PageListStruct	far *page;

	if (!MainPresent)
		return;

	for (i = 0,page = PMPages;i < ChunksInFile;i++,page++)
	{
		n = page->mainPage;
		if (n != -1)						// Is the page using main memory?
		{
			if (!MainMemPages[n])			// Yep, was the block purged?
			{
				page->mainPage = -1;		// Yes, mark page as purged & unlocked
				page->locked = pml_Unlocked;
			}
		}
	}

	// Prevent allocation attempts from purging any of our other blocks
	PM_LockMainMem();
	allocfailed = false;
	for (i = 0,p = MainMemPages,used = MainMemUsed;i < PMMaxMainMem;i++,p++,used++)
	{
		if (!*p)							// If the page got purged
		{
			if (*used & pmba_Allocated)		// If it was allocated
			{
				*used &= ~pmba_Allocated;	// Mark as unallocated
				MainPagesAvail--;			// and decrease available count
			}

			if (*used & pmba_Used)			// If it was used
			{
				*used &= ~pmba_Used;		// Mark as unused
				MainPagesUsed--;			// and decrease used count
			}

			if (!allocfailed)
			{
				MM_BombOnError(false);
				MM_GetPtr(p,PMPageSize);		// Try to reallocate
				if (mmerror)					// If it failed,
					allocfailed = true;			//  don't try any more allocations
				else							// If it worked,
				{
					*used |= pmba_Allocated;	// Mark as allocated
					MainPagesAvail++;			// and increase available count
				}
				MM_BombOnError(true);
			}
		}
	}
	if (mmerror)
		mmerror = false;
}

//
//	PML_StartupMainMem() - Allocates as much main memory as is possible for
//		the Page Mgr. The memory is allocated as non-purgeable, so if it's
//		necessary to make requests of the Memory Mgr, PM_UnlockMainMem()
//		needs to be called.
//
void
PML_StartupMainMem(void)
{
	int		i,n;
	memptr	*p;

	MainPagesAvail = 0;
	MM_BombOnError(false);
	for (i = 0,p = MainMemPages;i < PMMaxMainMem;i++,p++)
	{
		MM_GetPtr(p,PMPageSize);
		if (mmerror)
			break;

		MainPagesAvail++;
		MainMemUsed[i] = pmba_Allocated;
	}
	MM_BombOnError(true);
	if (mmerror)
		mmerror = false;
	if (MainPagesAvail < PMMinMainMem)
		Quit("PM_SetupMainMem: Not enough main memory");
	MainPresent = true;
}

//
//	PML_ShutdownMainMem() - Frees all of the main memory blocks used by the
//		Page Mgr.
//
void
PML_ShutdownMainMem(void)
{
	int		i;
	memptr	*p;

	// DEBUG - mark pages as unallocated & decrease page count as appropriate
	for (i = 0,p = MainMemPages;i < PMMaxMainMem;i++,p++)
		if (*p)
			MM_FreePtr(p);
}

/////////////////////////////////////////////////////////////////////////////
//
//	File management code
//
/////////////////////////////////////////////////////////////////////////////

//
//	PML_ReadFromFile() - Reads some data in from the page file
//
void
PML_ReadFromFile(byte far *buf,long offset,word length)
{
	if (!buf)
		Quit("PML_ReadFromFile: Null pointer");
	if (!offset)
		Quit("PML_ReadFromFile: Zero offset");
	if (lseek(PageFile,offset,SEEK_SET) != offset)
		Quit("PML_ReadFromFile: Seek failed");
	if (!CA_FarRead(PageFile,buf,length))
		Quit("PML_ReadFromFile: Read failed");
}

//
//	PML_OpenPageFile() - Opens the page file and sets up the page info
//
void
PML_OpenPageFile(void)
{
	int				i;
	long			size;
	void			_seg *buf;
	longword		far *offsetptr;
	word			far *lengthptr;
	PageListStruct	far *page;

	PageFile = open(PageFileName,O_RDONLY + O_BINARY);
	if (PageFile == -1)
		Quit("PML_OpenPageFile: Unable to open page file");

	// Read in header variables
	read(PageFile,&ChunksInFile,sizeof(ChunksInFile));
	read(PageFile,&PMSpriteStart,sizeof(PMSpriteStart));
	read(PageFile,&PMSoundStart,sizeof(PMSoundStart));

	// Allocate and clear the page list
	PMNumBlocks = ChunksInFile;
	MM_GetPtr(&(memptr)PMSegPages,sizeof(PageListStruct) * PMNumBlocks);
	MM_SetLock(&(memptr)PMSegPages,true);
	PMPages = (PageListStruct far *)PMSegPages;
	_fmemset(PMPages,0,sizeof(PageListStruct) * PMNumBlocks);

	// Read in the chunk offsets
	size = sizeof(longword) * ChunksInFile;
	MM_GetPtr(&buf,size);
	if (!CA_FarRead(PageFile,(byte far *)buf,size))
		Quit("PML_OpenPageFile: Offset read failed");
	offsetptr = (longword far *)buf;
	for (i = 0,page = PMPages;i < ChunksInFile;i++,page++)
		page->offset = *offsetptr++;
	MM_FreePtr(&buf);

	// Read in the chunk lengths
	size = sizeof(word) * ChunksInFile;
	MM_GetPtr(&buf,size);
	if (!CA_FarRead(PageFile,(byte far *)buf,size))
		Quit("PML_OpenPageFile: Length read failed");
	lengthptr = (word far *)buf;
	for (i = 0,page = PMPages;i < ChunksInFile;i++,page++)
		page->length = *lengthptr++;
	MM_FreePtr(&buf);
}

//
//  PML_ClosePageFile() - Closes the page file
//
void
PML_ClosePageFile(void)
{
	if (PageFile != -1)
		close(PageFile);
	if (PMSegPages)
	{
		MM_SetLock(&(memptr)PMSegPages,false);
		MM_FreePtr(&(void _seg *)PMSegPages);
	}
}

/////////////////////////////////////////////////////////////////////////////
//
//	Allocation, etc., code
//
/////////////////////////////////////////////////////////////////////////////

//
//	PML_GetEMSAddress()
//
// 		Page is in EMS, so figure out which EMS physical page should be used
//  		to map our page in. If normal page, use EMS physical page 3, else
//  		use the physical page specified by the lock type
//
#if 1
#pragma argsused	// DEBUG - remove lock parameter
memptr
PML_GetEMSAddress(int page,PMLockType lock)
{
	int		i,emspage;
	word	emsoff,emsbase,offset;

	emsoff = page & (PMEMSSubPage - 1);
	emsbase = page - emsoff;

	emspage = -1;
	// See if this page is already mapped in
	for (i = 0;i < EMSFrameCount;i++)
	{
		if (EMSList[i].baseEMSPage == emsbase)
		{
			emspage = i;	// Yep - don't do a redundant remapping
			break;
		}
	}

	// If page isn't already mapped in, find LRU EMS frame, and use it
	if (emspage == -1)
	{
		longword last = MAXLONG;
		for (i = 0;i < EMSFrameCount;i++)
		{
			if (EMSList[i].lastHit < last)
			{
				emspage = i;
				last = EMSList[i].lastHit;
			}
		}

		EMSList[emspage].baseEMSPage = emsbase;
		PML_MapEMS(page / PMEMSSubPage,emspage);
	}

	if (emspage == -1)
		Quit("PML_GetEMSAddress: EMS find failed");

	EMSList[emspage].lastHit = PMFrameCount;
	offset = emspage * EMSPageSizeSeg;
	offset += emsoff * PMPageSizeSeg;
	return((memptr)(EMSPageFrame + offset));
}
#else
memptr
PML_GetEMSAddress(int page,PMLockType lock)
{
	word	emspage;

	emspage = (lock < pml_EMSLock)? 3 : (lock - pml_EMSLock);

	PML_MapEMS(page / PMEMSSubPage,emspage);

	return((memptr)(EMSPageFrame + (emspage * EMSPageSizeSeg)
			+ ((page & (PMEMSSubPage - 1)) * PMPageSizeSeg)));
}
#endif

//
//	PM_GetPageAddress() - Returns the address of a given page
//		Maps in EMS if necessary
//		Returns nil if block isn't cached into Main Memory or EMS
//
//
memptr
PM_GetPageAddress(int pagenum)
{
	PageListStruct	far *page;

	page = &PMPages[pagenum];
	if (page->mainPage != -1)
		return(MainMemPages[page->mainPage]);
	else if (page->emsPage != -1)
		return(PML_GetEMSAddress(page->emsPage,page->locked));
	else
		return(nil);
}

//
//	PML_GiveLRUPage() - Returns the page # of the least recently used
//		present & unlocked main/EMS page (or main page if mainonly is true)
//
int
PML_GiveLRUPage(boolean mainonly)
{
	int				i,lru;
	long			last;
	PageListStruct	far *page;

	for (i = 0,page = PMPages,lru = -1,last = MAXLONG;i < ChunksInFile;i++,page++)
	{
		if
		(
			(page->lastHit < last)
		&&	((page->emsPage != -1) || (page->mainPage != -1))
		&& 	(page->locked == pml_Unlocked)
		&&	(!(mainonly && (page->mainPage == -1)))
		)
		{
			last = page->lastHit;
			lru = i;
		}
	}

	if (lru == -1)
		Quit("PML_GiveLRUPage: LRU Search failed");
	return(lru);
}

//
//	PML_GiveLRUXMSPage() - Returns the page # of the least recently used
//		(and present) XMS page.
//	This routine won't return the XMS page protected (by XMSProtectPage)
//
int
PML_GiveLRUXMSPage(void)
{
	int				i,lru;
	long			last;
	PageListStruct	far *page;

	for (i = 0,page = PMPages,lru = -1,last = MAXLONG;i < ChunksInFile;i++,page++)
	{
		if
		(
			(page->xmsPage != -1)
		&&	(page->lastHit < last)
		&&	(i != XMSProtectPage)
		)
		{
			last = page->lastHit;
			lru = i;
		}
	}
	return(lru);
}

//
//	PML_PutPageInXMS() - If page isn't in XMS, find LRU XMS page and replace
//		it with the main/EMS page
//
void
PML_PutPageInXMS(int pagenum)
{
	int				usexms;
	PageListStruct	far *page;

	if (!XMSPresent)
		return;

	page = &PMPages[pagenum];
	if (page->xmsPage != -1)
		return;					// Already in XMS

	if (XMSPagesUsed < XMSPagesAvail)
		page->xmsPage = XMSPagesUsed++;
	else
	{
		usexms = PML_GiveLRUXMSPage();
		if (usexms == -1)
			Quit("PML_PutPageInXMS: No XMS LRU");
		page->xmsPage = PMPages[usexms].xmsPage;
		PMPages[usexms].xmsPage = -1;
	}
	PML_CopyToXMS(PM_GetPageAddress(pagenum),page->xmsPage,page->length);
}

//
//	PML_TransferPageSpace() - A page is being replaced, so give the new page
//		the old one's address space. Returns the address of the new page.
//
memptr
PML_TransferPageSpace(int orig,int new)
{
	memptr			addr;
	PageListStruct	far *origpage,far *newpage;

	if (orig == new)
		Quit("PML_TransferPageSpace: Identity replacement");

	origpage = &PMPages[orig];
	newpage = &PMPages[new];

	if (origpage->locked != pml_Unlocked)
		Quit("PML_TransferPageSpace: Killing locked page");

	if ((origpage->emsPage == -1) && (origpage->mainPage == -1))
		Quit("PML_TransferPageSpace: Reusing non-existent page");

	// Copy page that's about to be purged into XMS
	PML_PutPageInXMS(orig);

	// Get the address, and force EMS into a physical page if necessary
	addr = PM_GetPageAddress(orig);

	// Steal the address
	newpage->emsPage = origpage->emsPage;
	newpage->mainPage = origpage->mainPage;

	// Mark replaced page as purged
	origpage->mainPage = origpage->emsPage = -1;

	if (!addr)
		Quit("PML_TransferPageSpace: Zero replacement");

	return(addr);
}

//
//	PML_GetAPageBuffer() - A page buffer is needed. Either get it from the
//		main/EMS free pool, or use PML_GiveLRUPage() to find which page to
//		steal the buffer from. Returns a far pointer to the page buffer, and
//		sets the fields inside the given page structure appropriately.
//		If mainonly is true, free EMS will be ignored, and only main pages
//		will be looked at by PML_GiveLRUPage().
//
byte far *
PML_GetAPageBuffer(int pagenum,boolean mainonly)
{
	byte			far *addr = nil;
	int				i,n;
	PMBlockAttr		*used;
	PageListStruct	far *page;

	page = &PMPages[pagenum];
	if ((EMSPagesUsed < EMSPagesAvail) && !mainonly)
	{
		// There's remaining EMS - use it
		page->emsPage = EMSPagesUsed++;
		addr = PML_GetEMSAddress(page->emsPage,page->locked);
	}
	else if (MainPagesUsed < MainPagesAvail)
	{
		// There's remaining main memory - use it
		for (i = 0,n = -1,used = MainMemUsed;i < PMMaxMainMem;i++,used++)
		{
			if ((*used & pmba_Allocated) && !(*used & pmba_Used))
			{
				n = i;
				*used |= pmba_Used;
				break;
			}
		}
		if (n == -1)
			Quit("PML_GetPageBuffer: MainPagesAvail lied");
		addr = MainMemPages[n];
		if (!addr)
			Quit("PML_GetPageBuffer: Purged main block");
		page->mainPage = n;
		MainPagesUsed++;
	}
	else
		addr = PML_TransferPageSpace(PML_GiveLRUPage(mainonly),pagenum);

	if (!addr)
		Quit("PML_GetPageBuffer: Search failed");
	return(addr);
}

//
//	PML_GetPageFromXMS() - If page is in XMS, find LRU main/EMS page and
//		replace it with the page from XMS. If mainonly is true, will only
//		search for LRU main page.
//	XMSProtectPage is set to the page to be retrieved from XMS, so that if
//		the page from which we're stealing the main/EMS from isn't in XMS,
//		it won't copy over the page that we're trying to get from XMS.
//		(pages that are being purged are copied into XMS, if possible)
//
memptr
PML_GetPageFromXMS(int pagenum,boolean mainonly)
{
	byte			far *checkaddr;
	memptr			addr = nil;
	PageListStruct	far *page;

	page = &PMPages[pagenum];
	if (XMSPresent && (page->xmsPage != -1))
	{
		XMSProtectPage = pagenum;
		checkaddr = PML_GetAPageBuffer(pagenum,mainonly);
		if (FP_OFF(checkaddr))
			Quit("PML_GetPageFromXMS: Non segment pointer");
		addr = (memptr)FP_SEG(checkaddr);
		PML_CopyFromXMS(addr,page->xmsPage,page->length);
		XMSProtectPage = -1;
	}

	return(addr);
}

//
//	PML_LoadPage() - A page is not in main/EMS memory, and it's not in XMS.
//		Load it into either main or EMS. If mainonly is true, the page will
//		only be loaded into main.
//
void
PML_LoadPage(int pagenum,boolean mainonly)
{
	byte			far *addr;
	PageListStruct	far *page;

	addr = PML_GetAPageBuffer(pagenum,mainonly);
	page = &PMPages[pagenum];
	PML_ReadFromFile(addr,page->offset,page->length);
}

//
//	PM_GetPage() - Returns the address of the page, loading it if necessary
//		First, check if in Main Memory or EMS
//		Then, check XMS
//		If not in XMS, load into Main Memory or EMS
//
#pragma warn -pia
memptr
PM_GetPage(int pagenum)
{
	memptr	result;

	if (pagenum >= ChunksInFile)
		Quit("PM_GetPage: Invalid page request");

#if 0	// for debugging
asm	mov	dx,STATUS_REGISTER_1
asm	in	al,dx
asm	mov	dx,ATR_INDEX
asm	mov	al,ATR_OVERSCAN
asm	out	dx,al
asm	mov	al,10	// bright green
asm	out	dx,al
#endif

	if (!(result = PM_GetPageAddress(pagenum)))
	{
		boolean mainonly = (pagenum >= PMSoundStart);
if (!PMPages[pagenum].offset)	// JDC: sparse page
	Quit ("Tried to load a sparse page!");
		if (!(result = PML_GetPageFromXMS(pagenum,mainonly)))
		{
			if (PMPages[pagenum].lastHit == PMFrameCount)
				PMThrashing++;

			PML_LoadPage(pagenum,mainonly);
			result = PM_GetPageAddress(pagenum);
		}
	}
	PMPages[pagenum].lastHit = PMFrameCount;

#if 0	// for debugging
asm	mov	dx,STATUS_REGISTER_1
asm	in	al,dx
asm	mov	dx,ATR_INDEX
asm	mov	al,ATR_OVERSCAN
asm	out	dx,al
asm	mov	al,3	// blue
asm	out	dx,al
asm	mov	al,0x20	// normal
asm	out	dx,al
#endif

	return(result);
}
#pragma warn +pia

//
//	PM_SetPageLock() - Sets the lock type on a given page
//		pml_Unlocked: Normal, page can be purged
//		pml_Locked: Cannot be purged
//		pml_EMS?: Same as pml_Locked, but if in EMS, use the physical page
//					specified when returning the address. For sound stuff.
//
void
PM_SetPageLock(int pagenum,PMLockType lock)
{
	if (pagenum < PMSoundStart)
		Quit("PM_SetPageLock: Locking/unlocking non-sound page");

	PMPages[pagenum].locked = lock;
}

//
//	PM_Preload() - Loads as many pages as possible into all types of memory.
//		Calls the update function after each load, indicating the current
//		page, and the total pages that need to be loaded (for thermometer).
//
void
PM_Preload(boolean (*update)(word current,word total))
{
	int				i,j,
					page,oogypage;
	word			current,total,
					totalnonxms,totalxms,
					mainfree,maintotal,
					emsfree,emstotal,
					xmsfree,xmstotal;
	memptr			addr;
	PageListStruct	far *p;

	mainfree = (MainPagesAvail - MainPagesUsed) + (EMSPagesAvail - EMSPagesUsed);
	xmsfree = (XMSPagesAvail - XMSPagesUsed);

	xmstotal = maintotal = 0;

	for (i = 0;i < ChunksInFile;i++)
	{
		if (!PMPages[i].offset)
			continue;			// sparse

		if ( PMPages[i].emsPage != -1 || PMPages[i].mainPage != -1 )
			continue;			// already in main mem

		if ( mainfree )
		{
			maintotal++;
			mainfree--;
		}
		else if ( xmsfree && (PMPages[i].xmsPage == -1) )
		{
			xmstotal++;
			xmsfree--;
		}
	}


	total = maintotal + xmstotal;

	if (!total)
		return;

	page = 0;
	current = 0;

//
// cache main/ems blocks
//
	while (maintotal)
	{
		while ( !PMPages[page].offset || PMPages[page].mainPage != -1
			||	PMPages[page].emsPage != -1 )
			page++;

		if (page >= ChunksInFile)
			Quit ("PM_Preload: Pages>=ChunksInFile");

		PM_GetPage(page);

		page++;
		current++;
		maintotal--;
		update(current,total);
	}

//
// load stuff to XMS
//
	if (xmstotal)
	{
		for (oogypage = 0 ; PMPages[oogypage].mainPage == -1 ; oogypage++)
		;
		addr = PM_GetPage(oogypage);
		if (!addr)
			Quit("PM_Preload: XMS buffer failed");

		while (xmstotal)
		{
			while ( !PMPages[page].offset || PMPages[page].xmsPage != -1 )
				page++;

			if (page >= ChunksInFile)
				Quit ("PM_Preload: Pages>=ChunksInFile");

			p = &PMPages[page];

			p->xmsPage = XMSPagesUsed++;
			if (XMSPagesUsed > XMSPagesAvail)
				Quit("PM_Preload: Exceeded XMS pages");
			if (p->length > PMPageSize)
				Quit("PM_Preload: Page too long");

			PML_ReadFromFile((byte far *)addr,p->offset,p->length);
			PML_CopyToXMS((byte far *)addr,p->xmsPage,p->length);

			page++;
			current++;
			xmstotal--;
			update(current,total);
		}

		p = &PMPages[oogypage];
		PML_ReadFromFile((byte far *)addr,p->offset,p->length);
	}

	update(total,total);
}

/////////////////////////////////////////////////////////////////////////////
//
//	General code
//
/////////////////////////////////////////////////////////////////////////////

//
//	PM_NextFrame() - Increments the frame counter and adjusts the thrash
//		avoidence variables
//
//		If currently in panic mode (to avoid thrashing), check to see if the
//			appropriate number of frames have passed since the last time that
//			we would have thrashed. If so, take us out of panic mode.
//
//
void
PM_NextFrame(void)
{
	int	i;

	// Frame count overrun - kill the LRU hit entries & reset frame count
	if (++PMFrameCount >= MAXLONG - 4)
	{
		for (i = 0;i < PMNumBlocks;i++)
			PMPages[i].lastHit = 0;
		PMFrameCount = 0;
	}

#if 0
	for (i = 0;i < PMSoundStart;i++)
	{
		if (PMPages[i].locked)
		{
			char buf[40];
			sprintf(buf,"PM_NextFrame: Page %d is locked",i);
			Quit(buf);
		}
	}
#endif

	if (PMPanicMode)
	{
		// DEBUG - set border color
		if ((!PMThrashing) && (!--PMPanicMode))
		{
			// DEBUG - reset border color
		}
	}
	if (PMThrashing >= PMThrashThreshold)
		PMPanicMode = PMUnThrashThreshold;
	PMThrashing = false;
}

//
//	PM_Reset() - Sets up caching structures
//
void
PM_Reset(void)
{
	int				i;
	PageListStruct	far *page;

	XMSPagesAvail = XMSAvail / PMPageSizeKB;

	EMSPagesAvail = EMSAvail * (EMSPageSizeKB / PMPageSizeKB);
	EMSPhysicalPage = 0;

	MainPagesUsed = EMSPagesUsed = XMSPagesUsed = 0;

	PMPanicMode = false;

	// Initialize page list
	for (i = 0,page = PMPages;i < PMNumBlocks;i++,page++)
	{
		page->mainPage = -1;
		page->emsPage = -1;
		page->xmsPage = -1;
		page->locked = false;
	}
}

//
//	PM_Startup() - Start up the Page Mgr
//
void
PM_Startup(void)
{
	boolean	nomain,noems,noxms;
	int		i;

	if (PMStarted)
		return;

	nomain = noems = noxms = false;
	for (i = 1;i < _argc;i++)
	{
		switch (US_CheckParm(_argv[i],ParmStrings))
		{
		case 0:
			nomain = true;
			break;
		case 1:
			noems = true;
			break;
		case 2:
			noxms = true;
			break;
		}
	}

	PML_OpenPageFile();

	if (!noems)
		PML_StartupEMS();
	if (!noxms)
		PML_StartupXMS();

	if (nomain && !EMSPresent)
		Quit("PM_Startup: No main or EMS");
	else
		PML_StartupMainMem();

	PM_Reset();

	PMStarted = true;
}

//
//	PM_Shutdown() - Shut down the Page Mgr
//
void
PM_Shutdown(void)
{
	PML_ShutdownXMS();
	PML_ShutdownEMS();

	if (!PMStarted)
		return;

	PML_ClosePageFile();

	PML_ShutdownMainMem();
}
```