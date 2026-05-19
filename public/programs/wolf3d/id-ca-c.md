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
description: "This file showcases id Software's innovative caching system, which dynamically managed memory for assets in Wolfenstein 3D, a groundbreaking first-person shooter."

summary:
  - point: "Introduces a Huffman-based compression system for graphics and audio assets"
    link: "https://en.wikipedia.org/wiki/Huffman_coding"
    link_label: "Huffman coding"
  - point: "Demonstrates efficient file I/O and memory management on MS-DOS systems"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Implements Carmack's RLE compression for map data"
    link: "https://en.wikipedia.org/wiki/Run-length_encoding"
    link_label: "Run-length encoding"
  - point: "Optimizes asset loading through linked headers and caching"
    link: "https://en.wikipedia.org/wiki/Cache_(computing)"
    link_label: "Cache"
  - point: "Exemplifies assembly language integration for performance-critical routines"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly language"

enhancements:
  - id: "id-software-caching-manager"
    line_start: 8
    line_end: 9
    title: "Id Software's Caching Manager Overview"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "This section introduces the caching manager, a critical component of Wolfenstein 3D's asset management system. Designed to operate before the memory manager, it ensures that headers are loaded into the data segment early in the program's execution. In 1992, memory constraints on MS-DOS systems required developers to carefully manage resources, as typical PCs had only 640 KB of conventional memory. John Carmack and the id Software team developed this system to dynamically load and unload assets, enabling the game to run smoothly despite its demanding graphical and audio requirements. The caching manager's principles influenced later game engines, including id Tech 1, used in Doom."
  - id: "huffman-node-definition"
    line_start: 105
    line_end: 108
    title: "Huffman Node Structure for Compression"
    wikipedia_url: "https://en.wikipedia.org/wiki/Huffman_coding"
    image_url: ""
    image_caption: ""
    content: "This section defines the Huffman node structure, a key element in the game's compression system. Huffman coding is a lossless data compression algorithm that assigns shorter codes to more frequent data values. By using this structure, Wolfenstein 3D efficiently stores graphics and audio assets, reducing their memory footprint. In the early 1990s, compression techniques like Huffman coding were essential for fitting large amounts of data into limited storage and memory. The approach here laid the groundwork for similar systems in later games, including Doom and Quake, where efficient asset management remained crucial."
  - id: "debug-file-handling"
    line_start: 171
    line_end: 175
    title: "Opening and Closing Debug Files"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "These routines handle the opening and closing of a debug file, 'DEBUG.TXT', used for logging during development. By creating and writing to this file, the developers could monitor program behavior and diagnose issues. Debugging tools were less sophisticated in the early 1990s, so manual logging was a common practice. This approach reflects the hands-on debugging methods employed by id Software during Wolfenstein 3D's development. The use of debug files became a standard practice in software development, influencing debugging techniques in modern game engines and programming environments."
  - id: "graphics-chunk-length-calculation"
    line_start: 195
    line_end: 211
    title: "Calculating Graphics Chunk Lengths"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "This subroutine calculates the length of a graphics chunk by reading its explicit length and determining the compressed size. It positions the file pointer for subsequent data reads, ensuring efficient access to compressed assets. In the constrained environment of MS-DOS, precise file handling was necessary to manage limited memory and storage. This technique allowed Wolfenstein 3D to dynamically load graphical assets, contributing to its smooth gameplay and fast-paced action. Similar methods were adopted in later games, where dynamic asset loading became a hallmark of efficient game design."
  - id: "huffman-table-optimization"
    line_start: 387
    line_end: 416
    title: "Optimizing Huffman Tables for Expansion"
    wikipedia_url: "https://en.wikipedia.org/wiki/Huffman_coding"
    image_url: ""
    image_caption: ""
    content: "This routine optimizes a Huffman table by converting node numbers into actual memory addresses. It prepares the table for efficient data expansion during runtime. Huffman coding was a popular choice for compression in the early 1990s due to its simplicity and effectiveness. By optimizing the table, id Software ensured that decompression routines could operate quickly, minimizing performance overhead. The technique demonstrated here influenced compression strategies in later games and software, where similar optimizations were used to balance memory efficiency and runtime speed."
  - id: "carmack-expand-routine"
    line_start: 609
    line_end: 675
    title: "Carmack's RLE Compression Expansion"
    wikipedia_url: "https://en.wikipedia.org/wiki/Run-length_encoding"
    image_url: ""
    image_caption: ""
    content: "This routine implements Carmack's RLE (Run-Length Encoding) expansion algorithm, decompressing map data stored in a compact format. RLE is a simple compression technique that replaces sequences of repeated values with a single value and a count. John Carmack adapted this method to efficiently store and retrieve map data, enabling Wolfenstein 3D to handle complex levels within the constraints of MS-DOS memory. The algorithm's simplicity and effectiveness made it a staple in game development, influencing compression techniques in Doom, Quake, and beyond."
  - id: "graphics-file-setup"
    line_start: 861
    line_end: 940
    title: "Setting Up Graphics File Handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "This routine initializes graphics file handling by loading Huffman dictionaries and data offsets, then opening the graphics file for continuous access during gameplay. It also decompresses and loads picture headers into memory. By keeping the graphics file open, the game minimizes file I/O overhead, ensuring smooth asset loading. This approach reflects id Software's ingenuity in managing resources on MS-DOS systems, where disk access was slow and memory was limited. The techniques demonstrated here influenced asset management in later game engines, including id Tech 1 and id Tech 2."
  - id: "map-file-setup"
    line_start: 942
    line_end: 1024
    title: "Initializing Map File Handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Run-length_encoding"
    image_url: ""
    image_caption: ""
    content: "This routine sets up map file handling by loading offsets and tile information, opening the map data file, and allocating memory for map planes. It uses Carmack's RLE compression to store and retrieve map data efficiently. The ability to handle large, complex maps within the constraints of MS-DOS memory was a key innovation in Wolfenstein 3D. This routine exemplifies id Software's mastery of compression and memory management, techniques that became standard in later games like Doom and Quake, where complex level design demanded efficient data handling."
  - id: "setup-audio-file-loading"
    line_start: 1026
    line_end: 1081
    title: "Loading audio files dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "This section initializes the audio file setup for Wolfenstein 3D, dynamically loading audio headers and data files. The code distinguishes between linked and standalone audio headers, optimizing memory usage based on the configuration. In the early 1990s, PCs were limited by small amounts of RAM and slow disk access. Developers like John Carmack had to design systems that could load and unload assets dynamically to fit within these constraints. This approach ensured that audio data could be efficiently accessed without consuming excessive memory. The dynamic loading system laid the groundwork for future games that required similar techniques to handle large amounts of data. Techniques like these influenced subsequent game engines, including id Tech, which continued to refine asset management strategies."
  - id: "startup-and-shutdown-procedures"
    line_start: 1083
    line_end: 1132
    title: "Startup and shutdown: managing resources"
    wikipedia_url: "https://en.wikipedia.org/wiki/Resource_management_(computing)"
    image_url: ""
    image_caption: ""
    content: "The CA_Startup and CA_Shutdown routines handle the initialization and cleanup of resources, including opening and closing files for maps, graphics, and audio. These routines reflect the meticulous attention to resource management required in the era of MS-DOS, where improper handling of file descriptors or memory could crash the system. The startup routine ensures all necessary files are loaded, while the shutdown routine closes them to prevent resource leaks. This pattern of resource management became a standard practice in software development, influencing how modern applications handle initialization and cleanup."
  - id: "audio-chunk-caching"
    line_start: 1134
    line_end: 1226
    title: "Caching audio chunks for real-time playback"
    wikipedia_url: "https://en.wikipedia.org/wiki/Audio_data"
    image_url: ""
    image_caption: ""
    content: "The CA_CacheAudioChunk and CA_LoadAllSounds routines manage the caching of audio data, ensuring that sound effects are available for real-time playback. By dynamically loading and decompressing audio chunks, the system avoids keeping all audio data in memory, which would be infeasible on early PCs. The use of Huffman compression reduces the size of audio files, and the code includes logic to handle both small and large buffers efficiently. This approach to audio management influenced later game engines, which adopted similar techniques to handle increasingly complex soundscapes."
  - id: "graphics-chunk-expansion"
    line_start: 1261
    line_end: 1379
    title: "Expanding and caching graphics chunks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics"
    image_url: ""
    image_caption: ""
    content: "The CAL_ExpandGrChunk and CA_CacheGrChunk routines handle the decompression and caching of graphics data. The system uses Huffman compression to store graphics efficiently and decompresses them on demand. The code includes logic to handle sparse tiles, ensuring that only necessary data is loaded into memory. This technique allowed Wolfenstein 3D to display detailed graphics while operating within the constraints of early PC hardware. The use of real-time decompression and caching influenced the design of later game engines, which continued to refine these techniques to handle increasingly complex visual assets."
  - id: "screen-caching-and-map-handling"
    line_start: 1381
    line_end: 1504
    title: "Caching screens and specialized map handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tile-based_video_game"
    image_url: ""
    image_caption: ""
    content: "The CA_CacheScreen and CA_CacheMap routines manage the caching of screen and map data. The map caching system is specialized for Wolfenstein 3D's 64x64 map size, using techniques like RLEW (Run-Length Encoded Word) compression to store map data efficiently. The screen caching routine decompresses graphics directly onto the screen, enabling fast updates during gameplay. These routines highlight the innovative approaches id Software used to handle large amounts of data on constrained hardware. The map handling system influenced the design of later games with tile-based maps, including Doom and other id Software titles."
  - id: "level-management-and-purging"
    line_start: 1506
    line_end: 1619
    title: "Managing levels and purging memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The CA_UpLevel, CA_DownLevel, CA_ClearMarks, and CA_ClearAllMarks routines manage memory purging and level transitions. By marking assets as purgable or non-purgable, the system ensures that only necessary data remains in memory. This approach was critical for maintaining performance on early PCs, where memory constraints were a constant challenge. The level management system allowed Wolfenstein 3D to handle transitions smoothly, influencing the design of memory management systems in later games and engines."
  - id: "cache-marks-and-error-handling"
    line_start: 1621
    line_end: 1768
    title: "Caching marks and handling errors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "The CA_CacheMarks routine handles the caching of marked graphics chunks, ensuring that necessary assets are loaded into memory. The CA_CannotOpen routine provides error handling for file operations, displaying an error message and terminating the program if a file cannot be opened. These routines reflect the robust design principles id Software employed to handle asset management and error conditions gracefully. The caching system influenced the design of later game engines, which adopted similar techniques to manage large amounts of data efficiently."

---

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