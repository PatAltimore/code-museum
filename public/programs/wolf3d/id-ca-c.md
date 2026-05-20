---
title: "ID_CA.C"
program: "Wolfenstein 3D"
program_slug: "wolf3d"
file_path: "WOLFSRC/ID_CA.C"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/wolf3d/blob/master/WOLFSRC/ID_CA.C"
year: 1992
author: "John Carmack, John Romero, Tom Hall"
slug: "id-ca-c"
order: 2
description: "Efficient caching and asset management in Wolfenstein 3D's memory-constrained environment"

summary:
  - point: "Innovative use of Huffman compression for graphics and audio"
    link: "https://en.wikipedia.org/wiki/Huffman_coding"
    link_label: "Huffman Coding"
  - point: "Dynamic asset loading tailored for MS-DOS memory constraints"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Optimized routines for reading and writing large files"
    link: "https://en.wikipedia.org/wiki/File_system"
    link_label: "File System"

enhancements:
  - id: "id-software-caching-manager"
    line_start: 1
    line_end: 15
    title: "Why Caching Was Critical for Wolfenstein"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "This brief section introduces the caching manager, a foundational system for Wolfenstein 3D. The caching manager was designed to handle the game's assets dynamically, ensuring that critical data like graphics and audio headers were loaded into memory before the memory manager initialized. This approach was necessary because early PCs, particularly those running MS-DOS, had severe memory limitations. By structuring the asset management system this way, id Software could maximize the use of available memory while maintaining the game's fast-paced action. The caching manager became a template for asset management in later games, influencing systems in Doom and Quake."
  - id: "huffman-node-structure"
    line_start: 33
    line_end: 36
    title: "The Huffman Node Structure That Saved Space"
    wikipedia_url: "https://en.wikipedia.org/wiki/Huffman_coding"
    image_url: ""
    image_caption: ""
    content: "This structure defines a Huffman node, a key component of the compression system used in Wolfenstein 3D. Huffman coding is a method of lossless data compression that represents frequently used data with shorter codes. The node structure here uses two fields, `bit0` and `bit1`, which either point to another node or represent a character. This efficient representation allowed id Software to compress large amounts of data, such as graphics and audio, into a format that could fit within the limited memory of early PCs. Huffman coding was not new—it was invented in 1952—but its application in real-time game asset management was groundbreaking. This technique influenced compression systems in later games and software."
  - id: "grfilepos-three-byte-offsets"
    line_start: 129
    line_end: 147
    title: "The Trick That Made 3 Bytes Do the Work of 4"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "This section implements a clever optimization: using three-byte offsets instead of four-byte offsets to reference data in the graphics file. By masking and manipulating the offsets, id Software reduced the memory footprint of the `grstarts` array, which stored positions of chunks in the graphics file. This was critical in an era where every byte of memory mattered. The technique reflects the ingenuity required to work within the constraints of MS-DOS systems, where memory was often limited to 640KB. This approach influenced later game engines, which adopted similar tricks to optimize memory usage."
  - id: "debug-file-management"
    line_start: 148
    line_end: 180
    title: "Debugging with Persistent File Logs"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugging"
    image_url: ""
    image_caption: ""
    content: "The `CA_OpenDebug` and `CA_CloseDebug` functions manage a debug file, `DEBUG.TXT`, which logs information during execution. This was a practical debugging tool in the early 1990s, when interactive debugging tools were less common. By writing debug information to a file, developers could analyze program behavior after crashes or unexpected results. This approach was widely used in game development at the time and influenced debugging practices in later software projects, where persistent logs became standard."
  - id: "carmack-expand-compression"
    line_start: 596
    line_end: 665
    title: "Carmack's Compression: A Game-Changing Algorithm"
    wikipedia_url: "https://en.wikipedia.org/wiki/John_Carmack"
    image_url: ""
    image_caption: ""
    content: "The `CAL_CarmackExpand` function is named after John Carmack, id Software's lead programmer. It implements a custom compression algorithm that expands data stored in a compact format. The algorithm uses tags (`NEARTAG` and `FARTAG`) to identify repeated sequences and offsets, allowing efficient decompression. This was crucial for fitting Wolfenstein 3D's assets into the limited storage and memory available on early PCs. Carmack's compression techniques became legendary in game development, influencing not only id Software's later titles like Doom and Quake but also the broader industry. Developers studied these techniques to optimize their own games, and Carmack's name became synonymous with technical innovation."
  - id: "setup-graphics-file"
    line_start: 853
    line_end: 929
    title: "How Wolfenstein Loaded Its Graphics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_file_formats"
    image_url: ""
    image_caption: ""
    content: "The `CAL_SetupGrFile` function initializes the graphics file system for Wolfenstein 3D. It loads Huffman dictionaries, data offsets, and headers for graphics assets, ensuring they are ready for use during gameplay. This setup process reflects the meticulous planning required to manage large amounts of graphical data on memory-constrained systems. By keeping the graphics file open throughout the game, id Software avoided the overhead of repeatedly opening and closing files, improving performance. This approach influenced asset management in later game engines, where preloading and persistent file handles became common practices."
  - id: "setup-map-file"
    line_start: 934
    line_end: 1012
    title: "Mapping the World: Efficient Level Loading"
    wikipedia_url: "https://en.wikipedia.org/wiki/Level_design"
    image_url: ""
    image_caption: ""
    content: "The `CAL_SetupMapFile` function prepares the map file system, loading offsets, tile information, and headers for game levels. It allocates memory for map planes and ensures they are locked in memory during gameplay. This was essential for Wolfenstein 3D's fast-paced action, as levels needed to be accessible without delays. The function also supports sparse maps, a feature that allowed id Software to optimize memory usage further. This level-loading system influenced the design of later games, where efficient map management became a cornerstone of performance optimization."
  - id: "setup-audio-file-handling"
    line_start: 1018
    line_end: 1068
    title: "How Audio Files Were Loaded in 1992"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "This section initializes audio file handling by loading metadata and opening the audio data file. The code supports two modes: linked audio headers (where metadata is embedded in the executable) and external audio headers (stored in separate files). The programmer's goal was to ensure compatibility across different setups while managing memory efficiently. In 1992, MS-DOS systems had severe memory constraints, often limited to 640KB of conventional memory. Developers had to carefully manage file I/O and memory allocation to avoid crashes. John Carmack's approach here reflects his mastery of low-level optimization, using techniques like Huffman coding for compression and dynamic allocation for audio data. This method influenced asset management in later id Software engines, such as id Tech 1 and 2, where dynamic loading and memory-efficient formats became standard practice."
  - id: "startup-initialization"
    line_start: 1073
    line_end: 1098
    title: "The Routine That Starts It All"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `CA_Startup` function initializes the game's asset management system by opening files and loading headers for maps, graphics, and audio. This routine is critical for preparing the game environment before gameplay begins. In the early 1990s, game developers often had to write custom file handling and initialization routines due to the lack of standardized libraries. The use of conditional compilation (`#ifdef PROFILE`) reflects the team's focus on debugging and performance profiling during development. This modular initialization approach became a hallmark of id Software's coding style, influencing how game engines like Doom and Quake handled asset loading and initialization."
  - id: "shutdown-cleanup"
    line_start: 1103
    line_end: 1122
    title: "Closing Files: The Art of Cleanup"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `CA_Shutdown` function ensures all open files are closed when the game exits, preventing resource leaks. This routine reflects the meticulous attention to detail required in an era when operating systems provided limited safeguards against improper resource management. MS-DOS did not automatically close files or free memory on program termination, so developers had to handle cleanup explicitly. This practice of careful resource management influenced later game development, where robust shutdown routines became standard to ensure stability and portability across platforms."
  - id: "cache-audio-chunk"
    line_start: 1124
    line_end: 1194
    title: "Loading Audio: One Chunk at a Time"
    wikipedia_url: "https://en.wikipedia.org/wiki/Huffman_coding"
    image_url: ""
    image_caption: ""
    content: "The `CA_CacheAudioChunk` function dynamically loads and decompresses audio chunks into memory. It uses Huffman coding for compression and supports both small and large buffers, depending on the chunk size. This flexibility was crucial for handling varying asset sizes within the constraints of early PCs. Huffman coding, a lossless compression algorithm, was widely used in the 1990s for its efficiency in reducing file sizes without sacrificing quality. Carmack's implementation here demonstrates his ability to adapt theoretical algorithms to practical game development needs. This technique influenced audio handling in later games, where dynamic loading and decompression became standard for managing large sound libraries."
  - id: "load-all-sounds"
    line_start: 1196
    line_end: 1246
    title: "Switching Sound Modes on the Fly"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_card"
    image_url: ""
    image_caption: ""
    content: "The `CA_LoadAllSounds` function purges old sounds and loads new ones based on the selected sound mode (e.g., PC speaker or AdLib). This routine reflects the challenges of supporting multiple audio hardware configurations in the early 1990s. Sound cards were not standardized, and developers had to write custom code to handle different devices. By dynamically switching modes and caching sounds, id Software ensured compatibility and optimized memory usage. This approach influenced future game engines, which adopted similar strategies for handling diverse hardware environments."
  - id: "expand-graphics-chunk"
    line_start: 1251
    line_end: 1305
    title: "Decompressing Graphics: A Chunk-by-Chunk Approach"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_compression"
    image_url: ""
    image_caption: ""
    content: "The `CAL_ExpandGrChunk` function decompresses graphics chunks using Huffman coding and allocates memory for the expanded data. It handles both implicit and explicit chunk sizes, reflecting the diverse formats used for storing game assets. In the early 1990s, efficient graphics compression was essential for fitting detailed visuals into limited storage and memory. Carmack's implementation here showcases his ability to balance compression efficiency with runtime performance. This technique influenced graphics handling in later id Software games, where advanced compression and decompression algorithms became integral to delivering high-quality visuals."
  - id: "cache-screen"
    line_start: 1369
    line_end: 1414
    title: "Direct-to-Screen Decompression: How It Worked"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_display_resolution"
    image_url: ""
    image_caption: ""
    content: "The `CA_CacheScreen` function decompresses a graphics chunk directly onto the screen, bypassing intermediate buffers. This technique minimizes memory usage and speeds up rendering, which was critical for achieving smooth gameplay on early PCs. The use of Huffman coding and direct memory manipulation reflects the low-level optimization required to push hardware limits. This approach influenced later game engines, where direct-to-screen rendering became a common technique for improving performance."
  - id: "cache-map-data"
    line_start: 1416
    line_end: 1491
    title: "Caching Maps for 64x64 Worlds"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `CA_CacheMap` function loads map data into memory, handling compression and decompression using techniques like Huffman coding and RLEW (Run-Length Encoded Words). This routine is specialized for Wolfenstein 3D's 64x64 map size, reflecting the game's grid-based level design. Efficient map caching was essential for maintaining fast gameplay and reducing load times. The use of multiple compression techniques highlights Carmack's ability to adapt algorithms to specific game requirements. This approach influenced level data handling in later games, where grid-based designs and dynamic loading remained popular."
  - id: "cache-marks"
    line_start: 1640
    line_end: 1758
    title: "Marking and Caching: Managing Graphics Efficiently"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `CA_CacheMarks` function manages graphics caching by marking needed chunks and making unneeded ones purgable. It uses a buffer to optimize disk reads, loading multiple chunks at once when possible. This routine reflects the challenges of managing large asset libraries within the constraints of early PCs. By prioritizing needed assets and freeing memory for others, id Software ensured smooth gameplay without exceeding memory limits. This approach influenced memory management in later game engines, where dynamic caching became standard for handling large-scale assets."
  - id: "cannot-open-error"
    line_start: 1760
    line_end: 1768
    title: "Error Handling: When Files Won't Open"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "The `CA_CannotOpen` function handles file opening errors by displaying an error message and terminating the program. This routine reflects the importance of robust error handling in early game development, where missing files or incorrect configurations could cause crashes. By providing clear error messages, id Software ensured users could diagnose and resolve issues. This approach influenced error handling in later games, where informative messages and graceful exits became standard practice."

---

```asm
// ID_CA.C

// this has been customized for WOLF

/*
=============================================================================

Id Software Caching Manager
---------------------------

Must be started BEFORE the memory manager, because it needs to get the headers
loaded into the data segment

=============================================================================
*/

#include "ID_HEADS.H"
#pragma hdrstop

#pragma warn -pro
#pragma warn -use

#define THREEBYTEGRSTARTS

/*
=============================================================================

						 LOCAL CONSTANTS

=============================================================================
*/

typedef struct
{
  unsigned bit0,bit1;	// 0-255 is a character, > is a pointer to a node
} huffnode;


typedef struct
{
	unsigned	RLEWtag;
	long		headeroffsets[100];
	byte		tileinfo[];
} mapfiletype;


/*
=============================================================================

						 GLOBAL VARIABLES

=============================================================================
*/

byte 		_seg	*tinf;
int			mapon;

unsigned	_seg	*mapsegs[MAPPLANES];
maptype		_seg	*mapheaderseg[NUMMAPS];
byte		_seg	*audiosegs[NUMSNDCHUNKS];
void		_seg	*grsegs[NUMCHUNKS];

byte		far	grneeded[NUMCHUNKS];
byte		ca_levelbit,ca_levelnum;

int			profilehandle,debughandle;

char		audioname[13]="AUDIO.";

/*
=============================================================================

						 LOCAL VARIABLES

=============================================================================
*/

extern	long	far	CGAhead;
extern	long	far	EGAhead;
extern	byte	CGAdict;
extern	byte	EGAdict;
extern	byte	far	maphead;
extern	byte	mapdict;
extern	byte	far	audiohead;
extern	byte	audiodict;


char extension[5],	// Need a string, not constant to change cache files
     gheadname[10]=GREXT"HEAD.",
     gfilename[10]=GREXT"GRAPH.",
     gdictname[10]=GREXT"DICT.",
     mheadname[10]="MAPHEAD.",
     mfilename[10]="MAPTEMP.",
     aheadname[10]="AUDIOHED.",
     afilename[10]="AUDIOT.";

void CA_CannotOpen(char *string);

long		_seg *grstarts;	// array of offsets in egagraph, -1 for sparse
long		_seg *audiostarts;	// array of offsets in audio / audiot

#ifdef GRHEADERLINKED
huffnode	*grhuffman;
#else
huffnode	grhuffman[255];
#endif

#ifdef AUDIOHEADERLINKED
huffnode	*audiohuffman;
#else
huffnode	audiohuffman[255];
#endif


int			grhandle;		// handle to EGAGRAPH
int			maphandle;		// handle to MAPTEMP / GAMEMAPS
int			audiohandle;	// handle to AUDIOT / AUDIO

long		chunkcomplen,chunkexplen;

SDMode		oldsoundmode;



void	CAL_CarmackExpand (unsigned far *source, unsigned far *dest,
		unsigned length);


#ifdef THREEBYTEGRSTARTS
#define FILEPOSSIZE	3
//#define	GRFILEPOS(c) (*(long far *)(((byte far *)grstarts)+(c)*3)&0xffffff)
long GRFILEPOS(int c)
{
	long value;
	int	offset;

	offset = c*3;

	value = *(long far *)(((byte far *)grstarts)+offset);

	value &= 0x00ffffffl;

	if (value == 0xffffffl)
		value = -1;

	return value;
};
#else
#define FILEPOSSIZE	4
#define	GRFILEPOS(c) (grstarts[c])
#endif

/*
=============================================================================

					   LOW LEVEL ROUTINES

=============================================================================
*/

/*
============================
=
= CA_OpenDebug / CA_CloseDebug
=
= Opens a binary file with the handle "debughandle"
=
============================
*/

void CA_OpenDebug (void)
{
	unlink ("DEBUG.TXT");
	debughandle = open("DEBUG.TXT", O_CREAT | O_WRONLY | O_TEXT);
}

void CA_CloseDebug (void)
{
	close (debughandle);
}



/*
============================
=
= CAL_GetGrChunkLength
=
= Gets the length of an explicit length chunk (not tiles)
= The file pointer is positioned so the compressed data can be read in next.
=
============================
*/

void CAL_GetGrChunkLength (int chunk)
{
	lseek(grhandle,GRFILEPOS(chunk),SEEK_SET);
	read(grhandle,&chunkexplen,sizeof(chunkexplen));
	chunkcomplen = GRFILEPOS(chunk+1)-GRFILEPOS(chunk)-4;
}


/*
==========================
=
= CA_FarRead
=
= Read from a file to a far pointer
=
==========================
*/

boolean CA_FarRead (int handle, byte far *dest, long length)
{
	if (length>0xffffl)
		Quit ("CA_FarRead doesn't support 64K reads yet!");

asm		push	ds
asm		mov	bx,[handle]
asm		mov	cx,[WORD PTR length]
asm		mov	dx,[WORD PTR dest]
asm		mov	ds,[WORD PTR dest+2]
asm		mov	ah,0x3f				// READ w/handle
asm		int	21h
asm		pop	ds
asm		jnc	good
	errno = _AX;
	return	false;
good:
asm		cmp	ax,[WORD PTR length]
asm		je	done
	errno = EINVFMT;			// user manager knows this is bad read
	return	false;
done:
	return	true;
}


/*
==========================
=
= CA_SegWrite
=
= Write from a file to a far pointer
=
==========================
*/

boolean CA_FarWrite (int handle, byte far *source, long length)
{
	if (length>0xffffl)
		Quit ("CA_FarWrite doesn't support 64K reads yet!");

asm		push	ds
asm		mov	bx,[handle]
asm		mov	cx,[WORD PTR length]
asm		mov	dx,[WORD PTR source]
asm		mov	ds,[WORD PTR source+2]
asm		mov	ah,0x40			// WRITE w/handle
asm		int	21h
asm		pop	ds
asm		jnc	good
	errno = _AX;
	return	false;
good:
asm		cmp	ax,[WORD PTR length]
asm		je	done
	errno = ENOMEM;				// user manager knows this is bad write
	return	false;

done:
	return	true;
}


/*
==========================
=
= CA_ReadFile
=
= Reads a file into an allready allocated buffer
=
==========================
*/

boolean CA_ReadFile (char *filename, memptr *ptr)
{
	int handle;
	long size;

	if ((handle = open(filename,O_RDONLY | O_BINARY, S_IREAD)) == -1)
		return false;

	size = filelength (handle);
	if (!CA_FarRead (handle,*ptr,size))
	{
		close (handle);
		return false;
	}
	close (handle);
	return true;
}


/*
==========================
=
= CA_WriteFile
=
= Writes a file from a memory buffer
=
==========================
*/

boolean CA_WriteFile (char *filename, void far *ptr, long length)
{
	int handle;
	long size;

	handle = open(filename,O_CREAT | O_BINARY | O_WRONLY,
				S_IREAD | S_IWRITE | S_IFREG);

	if (handle == -1)
		return false;

	if (!CA_FarWrite (handle,ptr,length))
	{
		close (handle);
		return false;
	}
	close (handle);
	return true;
}



/*
==========================
=
= CA_LoadFile
=
= Allocate space for and load a file
=
==========================
*/

boolean CA_LoadFile (char *filename, memptr *ptr)
{
	int handle;
	long size;

	if ((handle = open(filename,O_RDONLY | O_BINARY, S_IREAD)) == -1)
		return false;

	size = filelength (handle);
	MM_GetPtr (ptr,size);
	if (!CA_FarRead (handle,*ptr,size))
	{
		close (handle);
		return false;
	}
	close (handle);
	return true;
}

/*
============================================================================

		COMPRESSION routines, see JHUFF.C for more

============================================================================
*/



/*
===============
=
= CAL_OptimizeNodes
=
= Goes through a huffman table and changes the 256-511 node numbers to the
= actular address of the node.  Must be called before CAL_HuffExpand
=
===============
*/

void CAL_OptimizeNodes (huffnode *table)
{
  huffnode *node;
  int i;

  node = table;

  for (i=0;i<255;i++)
  {
	if (node->bit0 >= 256)
	  node->bit0 = (unsigned)(table+(node->bit0-256));
	if (node->bit1 >= 256)
	  node->bit1 = (unsigned)(table+(node->bit1-256));
	node++;
  }
}



/*
======================
=
= CAL_HuffExpand
=
= Length is the length of the EXPANDED data
= If screenhack, the data is decompressed in four planes directly
= to the screen
=
======================
*/

void CAL_HuffExpand (byte huge *source, byte huge *dest,
  long length,huffnode *hufftable, boolean screenhack)
{
//  unsigned bit,byte,node,code;
  unsigned sourceseg,sourceoff,destseg,destoff,endoff;
  huffnode *headptr;
  byte		mapmask;
//  huffnode *nodeon;

  headptr = hufftable+254;	// head node is allways node 254

  source++;	// normalize
  source--;
  dest++;
  dest--;

  if (screenhack)
  {
	mapmask = 1;
asm	mov	dx,SC_INDEX
asm	mov	ax,SC_MAPMASK + 256
asm	out	dx,ax
	length >>= 2;
  }

  sourceseg = FP_SEG(source);
  sourceoff = FP_OFF(source);
  destseg = FP_SEG(dest);
  destoff = FP_OFF(dest);
  endoff = destoff+length;

//
// ds:si source
// es:di dest
// ss:bx node pointer
//

	if (length <0xfff0)
	{

//--------------------------
// expand less than 64k of data
//--------------------------

asm mov	bx,[headptr]

asm	mov	si,[sourceoff]
asm	mov	di,[destoff]
asm	mov	es,[destseg]
asm	mov	ds,[sourceseg]
asm	mov	ax,[endoff]

asm	mov	ch,[si]				// load first byte
asm	inc	si
asm	mov	cl,1

expandshort:
asm	test	ch,cl			// bit set?
asm	jnz	bit1short
asm	mov	dx,[ss:bx]			// take bit0 path from node
asm	shl	cl,1				// advance to next bit position
asm	jc	newbyteshort
asm	jnc	sourceupshort

bit1short:
asm	mov	dx,[ss:bx+2]		// take bit1 path
asm	shl	cl,1				// advance to next bit position
asm	jnc	sourceupshort

newbyteshort:
asm	mov	ch,[si]				// load next byte
asm	inc	si
asm	mov	cl,1				// back to first bit

sourceupshort:
asm	or	dh,dh				// if dx<256 its a byte, else move node
asm	jz	storebyteshort
asm	mov	bx,dx				// next node = (huffnode *)code
asm	jmp	expandshort

storebyteshort:
asm	mov	[es:di],dl
asm	inc	di					// write a decopmpressed byte out
asm	mov	bx,[headptr]		// back to the head node for next bit

asm	cmp	di,ax				// done?
asm	jne	expandshort

//
// perform screenhack if needed
//
asm	test	[screenhack],1
asm	jz	notscreen
asm	shl	[mapmask],1
asm	mov	ah,[mapmask]
asm	cmp	ah,16
asm	je	notscreen			// all four planes done
asm	mov	dx,SC_INDEX
asm	mov	al,SC_MAPMASK
asm	out	dx,ax
asm	mov	di,[destoff]
asm	mov	ax,[endoff]
asm	jmp	expandshort

notscreen:;
	}
	else
	{

//--------------------------
// expand more than 64k of data
//--------------------------

  length--;

asm mov	bx,[headptr]
asm	mov	cl,1

asm	mov	si,[sourceoff]
asm	mov	di,[destoff]
asm	mov	es,[destseg]
asm	mov	ds,[sourceseg]

asm	lodsb			// load first byte

expand:
asm	test	al,cl		// bit set?
asm	jnz	bit1
asm	mov	dx,[ss:bx]	// take bit0 path from node
asm	jmp	gotcode
bit1:
asm	mov	dx,[ss:bx+2]	// take bit1 path

gotcode:
asm	shl	cl,1		// advance to next bit position
asm	jnc	sourceup
asm	lodsb
asm	cmp	si,0x10		// normalize ds:si
asm  	jb	sinorm
asm	mov	cx,ds
asm	inc	cx
asm	mov	ds,cx
asm	xor	si,si
sinorm:
asm	mov	cl,1		// back to first bit

sourceup:
asm	or	dh,dh		// if dx<256 its a byte, else move node
asm	jz	storebyte
asm	mov	bx,dx		// next node = (huffnode *)code
asm	jmp	expand

storebyte:
asm	mov	[es:di],dl
asm	inc	di		// write a decopmpressed byte out
asm	mov	bx,[headptr]	// back to the head node for next bit

asm	cmp	di,0x10		// normalize es:di
asm  	jb	dinorm
asm	mov	dx,es
asm	inc	dx
asm	mov	es,dx
asm	xor	di,di
dinorm:

asm	sub	[WORD PTR ss:length],1
asm	jnc	expand
asm  	dec	[WORD PTR ss:length+2]
asm	jns	expand		// when length = ffff ffff, done

	}

asm	mov	ax,ss
asm	mov	ds,ax

}


/*
======================
=
= CAL_CarmackExpand
=
= Length is the length of the EXPANDED data
=
======================
*/

#define NEARTAG	0xa7
#define FARTAG	0xa8

void CAL_CarmackExpand (unsigned far *source, unsigned far *dest, unsigned length)
{
	unsigned	ch,chhigh,count,offset;
	unsigned	far *copyptr, far *inptr, far *outptr;

	length/=2;

	inptr = source;
	outptr = dest;

	while (length)
	{
		ch = *inptr++;
		chhigh = ch>>8;
		if (chhigh == NEARTAG)
		{
			count = ch&0xff;
			if (!count)
			{				// have to insert a word containing the tag byte
				ch |= *((unsigned char far *)inptr)++;
				*outptr++ = ch;
				length--;
			}
			else
			{
				offset = *((unsigned char far *)inptr)++;
				copyptr = outptr - offset;
				length -= count;
				while (count--)
					*outptr++ = *copyptr++;
			}
		}
		else if (chhigh == FARTAG)
		{
			count = ch&0xff;
			if (!count)
			{				// have to insert a word containing the tag byte
				ch |= *((unsigned char far *)inptr)++;
				*outptr++ = ch;
				length --;
			}
			else
			{
				offset = *inptr++;
				copyptr = dest + offset;
				length -= count;
				while (count--)
					*outptr++ = *copyptr++;
			}
		}
		else
		{
			*outptr++ = ch;
			length --;
		}
	}
}



/*
======================
=
= CA_RLEWcompress
=
======================
*/

long CA_RLEWCompress (unsigned huge *source, long length, unsigned huge *dest,
  unsigned rlewtag)
{
  long complength;
  unsigned value,count,i;
  unsigned huge *start,huge *end;

  start = dest;

  end = source + (length+1)/2;

//
// compress it
//
  do
  {
	count = 1;
	value = *source++;
	while (*source == value && source<end)
	{
	  count++;
	  source++;
	}
	if (count>3 || value == rlewtag)
	{
    //
    // send a tag / count / value string
    //
      *dest++ = rlewtag;
      *dest++ = count;
      *dest++ = value;
    }
    else
    {
    //
    // send word without compressing
    //
      for (i=1;i<=count;i++)
	*dest++ = value;
	}

  } while (source<end);

  complength = 2*(dest-start);
  return complength;
}


/*
======================
=
= CA_RLEWexpand
= length is EXPANDED length
=
======================
*/

void CA_RLEWexpand (unsigned huge *source, unsigned huge *dest,long length,
  unsigned rlewtag)
{
//  unsigned value,count,i;
  unsigned huge *end;
  unsigned sourceseg,sourceoff,destseg,destoff,endseg,endoff;


//
// expand it
//
#if 0
  do
  {
	value = *source++;
	if (value != rlewtag)
	//
	// uncompressed
	//
	  *dest++=value;
	else
	{
	//
	// compressed string
	//
	  count = *source++;
	  value = *source++;
	  for (i=1;i<=count;i++)
	*dest++ = value;
	}
  } while (dest<end);
#endif

  end = dest + (length)/2;
  sourceseg = FP_SEG(source);
  sourceoff = FP_OFF(source);
  destseg = FP_SEG(dest);
  destoff = FP_OFF(dest);
  endseg = FP_SEG(end);
  endoff = FP_OFF(end);


//
// ax = source value
// bx = tag value
// cx = repeat counts
// dx = scratch
//
// NOTE: A repeat count that produces 0xfff0 bytes can blow this!
//

asm	mov	bx,rlewtag
asm	mov	si,sourceoff
asm	mov	di,destoff
asm	mov	es,destseg
asm	mov	ds,sourceseg

expand:
asm	lodsw
asm	cmp	ax,bx
asm	je	repeat
asm	stosw
asm	jmp	next

repeat:
asm	lodsw
asm	mov	cx,ax		// repeat count
asm	lodsw			// repeat value
asm	rep stosw

next:

asm	cmp	si,0x10		// normalize ds:si
asm  	jb	sinorm
asm	mov	ax,si
asm	shr	ax,1
asm	shr	ax,1
asm	shr	ax,1
asm	shr	ax,1
asm	mov	dx,ds
asm	add	dx,ax
asm	mov	ds,dx
asm	and	si,0xf
sinorm:
asm	cmp	di,0x10		// normalize es:di
asm  	jb	dinorm
asm	mov	ax,di
asm	shr	ax,1
asm	shr	ax,1
asm	shr	ax,1
asm	shr	ax,1
asm	mov	dx,es
asm	add	dx,ax
asm	mov	es,dx
asm	and	di,0xf
dinorm:

asm	cmp     di,ss:endoff
asm	jne	expand
asm	mov	ax,es
asm	cmp	ax,ss:endseg
asm	jb	expand

asm	mov	ax,ss
asm	mov	ds,ax

}



/*
=============================================================================

					 CACHE MANAGER ROUTINES

=============================================================================
*/


/*
======================
=
= CAL_SetupGrFile
=
======================
*/

void CAL_SetupGrFile (void)
{
	char fname[13];
	int handle;
	memptr compseg;

#ifdef GRHEADERLINKED

	grhuffman = (huffnode *)&EGAdict;
	grstarts = (long _seg *)FP_SEG(&EGAhead);

	CAL_OptimizeNodes (grhuffman);

#else

//
// load ???dict.ext (huffman dictionary for graphics files)
//

	strcpy(fname,gdictname);
	strcat(fname,extension);

	if ((handle = open(fname,
		 O_RDONLY | O_BINARY, S_IREAD)) == -1)
		CA_CannotOpen(fname);

	read(handle, &grhuffman, sizeof(grhuffman));
	close(handle);
	CAL_OptimizeNodes (grhuffman);
//
// load the data offsets from ???head.ext
//
	MM_GetPtr (&(memptr)grstarts,(NUMCHUNKS+1)*FILEPOSSIZE);

	strcpy(fname,gheadname);
	strcat(fname,extension);

	if ((handle = open(fname,
		 O_RDONLY | O_BINARY, S_IREAD)) == -1)
		CA_CannotOpen(fname);

	CA_FarRead(handle, (memptr)grstarts, (NUMCHUNKS+1)*FILEPOSSIZE);

	close(handle);


#endif

//
// Open the graphics file, leaving it open until the game is finished
//
	strcpy(fname,gfilename);
	strcat(fname,extension);

	grhandle = open(fname, O_RDONLY | O_BINARY);
	if (grhandle == -1)
		CA_CannotOpen(fname);


//
// load the pic and sprite headers into the arrays in the data segment
//
	MM_GetPtr(&(memptr)pictable,NUMPICS*sizeof(pictabletype));
	CAL_GetGrChunkLength(STRUCTPIC);		// position file pointer
	MM_GetPtr(&compseg,chunkcomplen);
	CA_FarRead (grhandle,compseg,chunkcomplen);
	CAL_HuffExpand (compseg, (byte huge *)pictable,NUMPICS*sizeof(pictabletype),grhuffman,false);
	MM_FreePtr(&compseg);
}

//==========================================================================


/*
======================
=
= CAL_SetupMapFile
=
======================
*/

void CAL_SetupMapFile (void)
{
	int	i;
	int handle;
	long length,pos;
	char fname[13];

//
// load maphead.ext (offsets and tileinfo for map file)
//
#ifndef MAPHEADERLINKED
	strcpy(fname,mheadname);
	strcat(fname,extension);

	if ((handle = open(fname,
		 O_RDONLY | O_BINARY, S_IREAD)) == -1)
		CA_CannotOpen(fname);

	length = filelength(handle);
	MM_GetPtr (&(memptr)tinf,length);
	CA_FarRead(handle, tinf, length);
	close(handle);
#else

	tinf = (byte _seg *)FP_SEG(&maphead);

#endif

//
// open the data file
//
#ifdef CARMACIZED
	strcpy(fname,"GAMEMAPS.");
	strcat(fname,extension);

	if ((maphandle = open(fname,
		 O_RDONLY | O_BINARY, S_IREAD)) == -1)
		CA_CannotOpen(fname);
#else
	strcpy(fname,mfilename);
	strcat(fname,extension);

	if ((maphandle = open(fname,
		 O_RDONLY | O_BINARY, S_IREAD)) == -1)
		CA_CannotOpen(fname);
#endif

//
// load all map header
//
	for (i=0;i<NUMMAPS;i++)
	{
		pos = ((mapfiletype	_seg *)tinf)->headeroffsets[i];
		if (pos<0)						// $FFFFFFFF start is a sparse map
			continue;

		MM_GetPtr(&(memptr)mapheaderseg[i],sizeof(maptype));
		MM_SetLock(&(memptr)mapheaderseg[i],true);
		lseek(maphandle,pos,SEEK_SET);
		CA_FarRead (maphandle,(memptr)mapheaderseg[i],sizeof(maptype));
	}

//
// allocate space for 3 64*64 planes
//
	for (i=0;i<MAPPLANES;i++)
	{
		MM_GetPtr (&(memptr)mapsegs[i],64*64*2);
		MM_SetLock (&(memptr)mapsegs[i],true);
	}
}


//==========================================================================


/*
======================
=
= CAL_SetupAudioFile
=
======================
*/

void CAL_SetupAudioFile (void)
{
	int handle;
	long length;
	char fname[13];

//
// load maphead.ext (offsets and tileinfo for map file)
//
#ifndef AUDIOHEADERLINKED
	strcpy(fname,aheadname);
	strcat(fname,extension);

	if ((handle = open(fname,
		 O_RDONLY | O_BINARY, S_IREAD)) == -1)
		CA_CannotOpen(fname);

	length = filelength(handle);
	MM_GetPtr (&(memptr)audiostarts,length);
	CA_FarRead(handle, (byte far *)audiostarts, length);
	close(handle);
#else
	audiohuffman = (huffnode *)&audiodict;
	CAL_OptimizeNodes (audiohuffman);
	audiostarts = (long _seg *)FP_SEG(&audiohead);
#endif

//
// open the data file
//
#ifndef AUDIOHEADERLINKED
	strcpy(fname,afilename);
	strcat(fname,extension);

	if ((audiohandle = open(fname,
		 O_RDONLY | O_BINARY, S_IREAD)) == -1)
		CA_CannotOpen(fname);
#else
	if ((audiohandle = open("AUDIO."EXTENSION,
		 O_RDONLY | O_BINARY, S_IREAD)) == -1)
		Quit ("Can't open AUDIO."EXTENSION"!");
#endif
}

//==========================================================================


/*
======================
=
= CA_Startup
=
= Open all files and load in headers
=
======================
*/

void CA_Startup (void)
{
#ifdef PROFILE
	unlink ("PROFILE.TXT");
	profilehandle = open("PROFILE.TXT", O_CREAT | O_WRONLY | O_TEXT);
#endif

	CAL_SetupMapFile ();
	CAL_SetupGrFile ();
	CAL_SetupAudioFile ();

	mapon = -1;
	ca_levelbit = 1;
	ca_levelnum = 0;

}

//==========================================================================


/*
======================
=
= CA_Shutdown
=
= Closes all files
=
======================
*/

void CA_Shutdown (void)
{
#ifdef PROFILE
	close (profilehandle);
#endif

	close (maphandle);
	close (grhandle);
	close (audiohandle);
}

//===========================================================================

/*
======================
=
= CA_CacheAudioChunk
=
======================
*/

void CA_CacheAudioChunk (int chunk)
{
	long	pos,compressed;
#ifdef AUDIOHEADERLINKED
	long	expanded;
	memptr	bigbufferseg;
	byte	far *source;
#endif

	if (audiosegs[chunk])
	{
		MM_SetPurge (&(memptr)audiosegs[chunk],0);
		return;							// allready in memory
	}

//
// load the chunk into a buffer, either the miscbuffer if it fits, or allocate
// a larger buffer
//
	pos = audiostarts[chunk];
	compressed = audiostarts[chunk+1]-pos;

	lseek(audiohandle,pos,SEEK_SET);

#ifndef AUDIOHEADERLINKED

	MM_GetPtr (&(memptr)audiosegs[chunk],compressed);
	if (mmerror)
		return;

	CA_FarRead(audiohandle,audiosegs[chunk],compressed);

#else

	if (compressed<=BUFFERSIZE)
	{
		CA_FarRead(audiohandle,bufferseg,compressed);
		source = bufferseg;
	}
	else
	{
		MM_GetPtr(&bigbufferseg,compressed);
		if (mmerror)
			return;
		MM_SetLock (&bigbufferseg,true);
		CA_FarRead(audiohandle,bigbufferseg,compressed);
		source = bigbufferseg;
	}

	expanded = *(long far *)source;
	source += 4;			// skip over length
	MM_GetPtr (&(memptr)audiosegs[chunk],expanded);
	if (mmerror)
		goto done;
	CAL_HuffExpand (source,audiosegs[chunk],expanded,audiohuffman,false);

done:
	if (compressed>BUFFERSIZE)
		MM_FreePtr(&bigbufferseg);
#endif
}

//===========================================================================

/*
======================
=
= CA_LoadAllSounds
=
= Purges all sounds, then loads all new ones (mode switch)
=
======================
*/

void CA_LoadAllSounds (void)
{
	unsigned	start,i;

	switch (oldsoundmode)
	{
	case sdm_Off:
		goto cachein;
	case sdm_PC:
		start = STARTPCSOUNDS;
		break;
	case sdm_AdLib:
		start = STARTADLIBSOUNDS;
		break;
	}

	for (i=0;i<NUMSOUNDS;i++,start++)
		if (audiosegs[start])
			MM_SetPurge (&(memptr)audiosegs[start],3);		// make purgable

cachein:

	switch (SoundMode)
	{
	case sdm_Off:
		return;
	case sdm_PC:
		start = STARTPCSOUNDS;
		break;
	case sdm_AdLib:
		start = STARTADLIBSOUNDS;
		break;
	}

	for (i=0;i<NUMSOUNDS;i++,start++)
		CA_CacheAudioChunk (start);

	oldsoundmode = SoundMode;
}

//===========================================================================


/*
======================
=
= CAL_ExpandGrChunk
=
= Does whatever is needed with a pointer to a compressed chunk
=
======================
*/

void CAL_ExpandGrChunk (int chunk, byte far *source)
{
	long	expanded;


	if (chunk >= STARTTILE8 && chunk < STARTEXTERNS)
	{
	//
	// expanded sizes of tile8/16/32 are implicit
	//

#define BLOCK		64
#define MASKBLOCK	128

		if (chunk<STARTTILE8M)			// tile 8s are all in one chunk!
			expanded = BLOCK*NUMTILE8;
		else if (chunk<STARTTILE16)
			expanded = MASKBLOCK*NUMTILE8M;
		else if (chunk<STARTTILE16M)	// all other tiles are one/chunk
			expanded = BLOCK*4;
		else if (chunk<STARTTILE32)
			expanded = MASKBLOCK*4;
		else if (chunk<STARTTILE32M)
			expanded = BLOCK*16;
		else
			expanded = MASKBLOCK*16;
	}
	else
	{
	//
	// everything else has an explicit size longword
	//
		expanded = *(long far *)source;
		source += 4;			// skip over length
	}

//
// allocate final space, decompress it, and free bigbuffer
// Sprites need to have shifts made and various other junk
//
	MM_GetPtr (&grsegs[chunk],expanded);
	if (mmerror)
		return;
	CAL_HuffExpand (source,grsegs[chunk],expanded,grhuffman,false);
}


/*
======================
=
= CA_CacheGrChunk
=
= Makes sure a given chunk is in memory, loadiing it if needed
=
======================
*/

void CA_CacheGrChunk (int chunk)
{
	long	pos,compressed;
	memptr	bigbufferseg;
	byte	far *source;
	int		next;

	grneeded[chunk] |= ca_levelbit;		// make sure it doesn't get removed
	if (grsegs[chunk])
	{
		MM_SetPurge (&grsegs[chunk],0);
		return;							// allready in memory
	}

//
// load the chunk into a buffer, either the miscbuffer if it fits, or allocate
// a larger buffer
//
	pos = GRFILEPOS(chunk);
	if (pos<0)							// $FFFFFFFF start is a sparse tile
	  return;

	next = chunk +1;
	while (GRFILEPOS(next) == -1)		// skip past any sparse tiles
		next++;

	compressed = GRFILEPOS(next)-pos;

	lseek(grhandle,pos,SEEK_SET);

	if (compressed<=BUFFERSIZE)
	{
		CA_FarRead(grhandle,bufferseg,compressed);
		source = bufferseg;
	}
	else
	{
		MM_GetPtr(&bigbufferseg,compressed);
		MM_SetLock (&bigbufferseg,true);
		CA_FarRead(grhandle,bigbufferseg,compressed);
		source = bigbufferseg;
	}

	CAL_ExpandGrChunk (chunk,source);

	if (compressed>BUFFERSIZE)
		MM_FreePtr(&bigbufferseg);
}



//==========================================================================

/*
======================
=
= CA_CacheScreen
=
= Decompresses a chunk from disk straight onto the screen
=
======================
*/

void CA_CacheScreen (int chunk)
{
	long	pos,compressed,expanded;
	memptr	bigbufferseg;
	byte	far *source;
	int		next;

//
// load the chunk into a buffer
//
	pos = GRFILEPOS(chunk);
	next = chunk +1;
	while (GRFILEPOS(next) == -1)		// skip past any sparse tiles
		next++;
	compressed = GRFILEPOS(next)-pos;

	lseek(grhandle,pos,SEEK_SET);

	MM_GetPtr(&bigbufferseg,compressed);
	MM_SetLock (&bigbufferseg,true);
	CA_FarRead(grhandle,bigbufferseg,compressed);
	source = bigbufferseg;

	expanded = *(long far *)source;
	source += 4;			// skip over length

//
// allocate final space, decompress it, and free bigbuffer
// Sprites need to have shifts made and various other junk
//
	CAL_HuffExpand (source,MK_FP(SCREENSEG,bufferofs),expanded,grhuffman,true);
	VW_MarkUpdateBlock (0,0,319,199);
	MM_FreePtr(&bigbufferseg);
}

//==========================================================================

/*
======================
=
= CA_CacheMap
=
= WOLF: This is specialized for a 64*64 map size
=
======================
*/

void CA_CacheMap (int mapnum)
{
	long	pos,compressed;
	int		plane;
	memptr	*dest,bigbufferseg;
	unsigned	size;
	unsigned	far	*source;
#ifdef CARMACIZED
	memptr	buffer2seg;
	long	expanded;
#endif

	mapon = mapnum;

//
// load the planes into the allready allocated buffers
//
	size = 64*64*2;

	for (plane = 0; plane<MAPPLANES; plane++)
	{
		pos = mapheaderseg[mapnum]->planestart[plane];
		compressed = mapheaderseg[mapnum]->planelength[plane];

		dest = &(memptr)mapsegs[plane];

		lseek(maphandle,pos,SEEK_SET);
		if (compressed<=BUFFERSIZE)
			source = bufferseg;
		else
		{
			MM_GetPtr(&bigbufferseg,compressed);
			MM_SetLock (&bigbufferseg,true);
			source = bigbufferseg;
		}

		CA_FarRead(maphandle,(byte far *)source,compressed);
#ifdef CARMACIZED
		//
		// unhuffman, then unRLEW
		// The huffman'd chunk has a two byte expanded length first
		// The resulting RLEW chunk also does, even though it's not really
		// needed
		//
		expanded = *source;
		source++;
		MM_GetPtr (&buffer2seg,expanded);
		CAL_CarmackExpand (source, (unsigned far *)buffer2seg,expanded);
		CA_RLEWexpand (((unsigned far *)buffer2seg)+1,*dest,size,
		((mapfiletype _seg *)tinf)->RLEWtag);
		MM_FreePtr (&buffer2seg);

#else
		//
		// unRLEW, skipping expanded length
		//
		CA_RLEWexpand (source+1, *dest,size,
		((mapfiletype _seg *)tinf)->RLEWtag);
#endif

		if (compressed>BUFFERSIZE)
			MM_FreePtr(&bigbufferseg);
	}
}

//===========================================================================

/*
======================
=
= CA_UpLevel
=
= Goes up a bit level in the needed lists and clears it out.
= Everything is made purgable
=
======================
*/

void CA_UpLevel (void)
{
	int	i;

	if (ca_levelnum==7)
		Quit ("CA_UpLevel: Up past level 7!");

	for (i=0;i<NUMCHUNKS;i++)
		if (grsegs[i])
			MM_SetPurge (&(memptr)grsegs[i],3);
	ca_levelbit<<=1;
	ca_levelnum++;
}

//===========================================================================

/*
======================
=
= CA_DownLevel
=
= Goes down a bit level in the needed lists and recaches
= everything from the lower level
=
======================
*/

void CA_DownLevel (void)
{
	if (!ca_levelnum)
		Quit ("CA_DownLevel: Down past level 0!");
	ca_levelbit>>=1;
	ca_levelnum--;
	CA_CacheMarks();
}

//===========================================================================

/*
======================
=
= CA_ClearMarks
=
= Clears out all the marks at the current level
=
======================
*/

void CA_ClearMarks (void)
{
	int i;

	for (i=0;i<NUMCHUNKS;i++)
		grneeded[i]&=~ca_levelbit;
}


//===========================================================================

/*
======================
=
= CA_ClearAllMarks
=
= Clears out all the marks on all the levels
=
======================
*/

void CA_ClearAllMarks (void)
{
	_fmemset (grneeded,0,sizeof(grneeded));
	ca_levelbit = 1;
	ca_levelnum = 0;
}


//===========================================================================


/*
======================
=
= CA_FreeGraphics
=
======================
*/


void CA_SetGrPurge (void)
{
	int i;

//
// free graphics
//
	CA_ClearMarks ();

	for (i=0;i<NUMCHUNKS;i++)
		if (grsegs[i])
			MM_SetPurge (&(memptr)grsegs[i],3);
}



/*
======================
=
= CA_SetAllPurge
=
= Make everything possible purgable
=
======================
*/

void CA_SetAllPurge (void)
{
	int i;


//
// free sounds
//
	for (i=0;i<NUMSNDCHUNKS;i++)
		if (audiosegs[i])
			MM_SetPurge (&(memptr)audiosegs[i],3);

//
// free graphics
//
	CA_SetGrPurge ();
}


//===========================================================================

/*
======================
=
= CA_CacheMarks
=
======================
*/
#define MAXEMPTYREAD	1024

void CA_CacheMarks (void)
{
	int 	i,next,numcache;
	long	pos,endpos,nextpos,nextendpos,compressed;
	long	bufferstart,bufferend;	// file position of general buffer
	byte	far *source;
	memptr	bigbufferseg;

	numcache = 0;
//
// go through and make everything not needed purgable
//
	for (i=0;i<NUMCHUNKS;i++)
		if (grneeded[i]&ca_levelbit)
		{
			if (grsegs[i])					// its allready in memory, make
				MM_SetPurge(&grsegs[i],0);	// sure it stays there!
			else
				numcache++;
		}
		else
		{
			if (grsegs[i])					// not needed, so make it purgeable
				MM_SetPurge(&grsegs[i],3);
		}

	if (!numcache)			// nothing to cache!
		return;


//
// go through and load in anything still needed
//
	bufferstart = bufferend = 0;		// nothing good in buffer now

	for (i=0;i<NUMCHUNKS;i++)
		if ( (grneeded[i]&ca_levelbit) && !grsegs[i])
		{
			pos = GRFILEPOS(i);
			if (pos<0)
				continue;

			next = i +1;
			while (GRFILEPOS(next) == -1)		// skip past any sparse tiles
				next++;

			compressed = GRFILEPOS(next)-pos;
			endpos = pos+compressed;

			if (compressed<=BUFFERSIZE)
			{
				if (bufferstart<=pos
				&& bufferend>= endpos)
				{
				// data is allready in buffer
					source = (byte _seg *)bufferseg+(pos-bufferstart);
				}
				else
				{
				// load buffer with a new block from disk
				// try to get as many of the needed blocks in as possible
					while ( next < NUMCHUNKS )
					{
						while (next < NUMCHUNKS &&
						!(grneeded[next]&ca_levelbit && !grsegs[next]))
							next++;
						if (next == NUMCHUNKS)
							continue;

						nextpos = GRFILEPOS(next);
						while (GRFILEPOS(++next) == -1)	// skip past any sparse tiles
							;
						nextendpos = GRFILEPOS(next);
						if (nextpos - endpos <= MAXEMPTYREAD
						&& nextendpos-pos <= BUFFERSIZE)
							endpos = nextendpos;
						else
							next = NUMCHUNKS;			// read pos to posend
					}

					lseek(grhandle,pos,SEEK_SET);
					CA_FarRead(grhandle,bufferseg,endpos-pos);
					bufferstart = pos;
					bufferend = endpos;
					source = bufferseg;
				}
			}
			else
			{
			// big chunk, allocate temporary buffer
				MM_GetPtr(&bigbufferseg,compressed);
				if (mmerror)
					return;
				MM_SetLock (&bigbufferseg,true);
				lseek(grhandle,pos,SEEK_SET);
				CA_FarRead(grhandle,bigbufferseg,compressed);
				source = bigbufferseg;
			}

			CAL_ExpandGrChunk (i,source);
			if (mmerror)
				return;

			if (compressed>BUFFERSIZE)
				MM_FreePtr(&bigbufferseg);

		}
}

void CA_CannotOpen(char *string)
{
 char str[30];

 strcpy(str,"Can't open ");
 strcat(str,string);
 strcat(str,"!\n");
 Quit (str);
}
```
