---
title: "wad.c"
program: "Quake"
program_slug: "quake"
file_path: "QW/client/wad.c"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/Quake/blob/master/QW/client/wad.c"
year: 1996
author: "John Carmack, Michael Abrash, John Cash"
slug: "wad-c"
order: 39
description: "This file handles WAD file management in Quake, enabling efficient storage and retrieval of game assets."

summary:
  - point: "Introduces WAD2 format for asset storage"
    link: "https://en.wikipedia.org/wiki/WAD_(file_format)"
    link_label: "WAD file format"
  - point: "Optimizes asset lookup with name cleaning and padding"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Implements byte swapping for cross-platform compatibility"
    link: "https://en.wikipedia.org/wiki/Endianness"
    link_label: "Endianness"

enhancements:
  - id: "wad-foundation-and-name-cleanup"
    line_start: 30
    line_end: 59
    title: "The WAD Variables and Name-Padding Trick That Made Asset Lookups Fast"
    wikipedia_url: "https://en.wikipedia.org/wiki/WAD_(file_format)"
    image_url: ""
    image_caption: ""
    content: "This section establishes the core state for Quake's WAD file system and introduces the small but clever convention that makes every asset lookup efficient. Three global variables form the foundation: `wad_numlumps` holds the count of data blocks in the loaded WAD2 file, `wad_lumps` points to the array of lump metadata structs, and `wad_base` stores the base memory address of the file so that lump offsets can be resolved to actual pointers without arithmetic on every access. On 1996-era PCs with 8–16 MB of RAM, centralizing these pointers rather than passing them as parameters at every call site was a conscious optimization. Alongside these variables, the `W_CleanupName` function enforces a name format that the rest of the system depends on: it lowercases the incoming string, pads it with spaces to fill exactly 16 bytes, and null-terminates it. The space padding is not cosmetic — it means two lump names can be compared as four consecutive 32-bit integer comparisons rather than a character-by-character loop, taking full advantage of the x86 processor's 32-bit registers and eliminating branch-heavy string logic in the hot lookup path. This combination of centralized state and fixed-width padded names influenced later asset systems: the GoldSrc engine used in Half-Life adopted similar name conventions for its own WAD format, and the pattern of normalizing names at load time to enable fast fixed-width comparison appears throughout game engine design to this day."
  - id: "byte-swapping-for-portability"
    line_start: 146
    line_end: 158
    title: "The Byte Swapping That Made Quake Portable Across Architectures"
    wikipedia_url: "https://en.wikipedia.org/wiki/Endianness"
    image_url: ""
    image_caption: ""
    content: "This short but consequential section encapsulates Quake's entire approach to cross-platform data compatibility. The `SwapPic` function takes a `qpic_t` structure — Quake's basic picture format — and runs its width and height fields through the `LittleLong` macro to guarantee they are stored in little-endian byte order. On x86 machines, which are natively little-endian, this is a no-op; on PowerPC or SPARC hardware, it reverses the bytes. The reason this matters is that WAD2 files were authored on x86 workstations and then shipped verbatim. Any big-endian platform reading those files raw would interpret, say, a 64-pixel-wide image as a nonsensical 1073741824 pixels wide, causing immediate crashes or corrupted graphics. By placing `SwapPic` at the point where pictures are loaded from the WAD, the rest of the engine never needs to think about endianness — it always receives values in the expected order. This single-function pattern, applied consistently to every loaded data type across the codebase, was what enabled id Software to port Quake to Linux, Mac OS, and later SGI IRIX within months of the Windows release. Byte-swapping at the data boundary became a standard practice in cross-platform game development, adopted by later engines including GoldSrc, Unreal, and Unity, all of which face the same challenge when shipping assets built on one architecture to players on another."
  - id: "wad-file-loading"
    line_start: 63
    line_end: 99
    title: "Loading WAD Files with Error Handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/WAD_(file_format)"
    image_url: ""
    image_caption: ""
    content: "The `W_LoadWadFile` function loads a WAD file into memory, verifies its format, and initializes lump metadata. It begins by calling `COM_LoadHunkFile`, which loads the file into a memory region managed by Quake's hunk allocator—a system designed to avoid fragmentation and maximize performance. The function then checks the file's identification string to ensure it adheres to the WAD2 format, a successor to Doom's WAD format that supports Quake's more complex asset types. Finally, it processes lump metadata, converting values to little-endian format and cleaning names for efficient lookup. This robust error handling and initialization process set a precedent for file loading routines in later engines, emphasizing reliability and performance."
  - id: "wad-lumpinfo-retrieval"
    line_start: 102
    line_end: 123
    title: "Finding Game Assets by Name"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `W_GetLumpinfo` function retrieves metadata for a lump (asset) by its name. It first cleans the name using `W_CleanupName` to ensure consistent formatting, then iterates through the lump metadata to find a match. If no match is found, it triggers a fatal error using `Sys_Error`. This design prioritizes fast lookups and strict error handling, reflecting the high performance and reliability standards of Quake's engine. By centralizing lump metadata access, this function simplifies asset management and debugging, influencing similar systems in later engines like Source and Unreal."

---

```cpp
/*
Copyright (C) 1996-1997 Id Software, Inc.

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  

See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

*/
// wad.c

#include "quakedef.h"

int			wad_numlumps;
lumpinfo_t	*wad_lumps;
byte		*wad_base;

void SwapPic (qpic_t *pic);

/*
==================
W_CleanupName

Lowercases name and pads with spaces and a terminating 0 to the length of
lumpinfo_t->name.
Used so lumpname lookups can proceed rapidly by comparing 4 chars at a time
Space padding is so names can be printed nicely in tables.
Can safely be performed in place.
==================
*/
void W_CleanupName (char *in, char *out)
{
	int		i;
	int		c;
	
	for (i=0 ; i<16 ; i++ )
	{
		c = in[i];
		if (!c)
			break;
			
		if (c >= 'A' && c <= 'Z')
			c += ('a' - 'A');
		out[i] = c;
	}
	
	for ( ; i< 16 ; i++ )
		out[i] = 0;
}



/*
====================
W_LoadWadFile
====================
*/
void W_LoadWadFile (char *filename)
{
	lumpinfo_t		*lump_p;
	wadinfo_t		*header;
	unsigned		i;
	int				infotableofs;
	
	wad_base = COM_LoadHunkFile (filename);
	if (!wad_base)
		Sys_Error ("W_LoadWadFile: couldn't load %s", filename);

	header = (wadinfo_t *)wad_base;
	
	if (header->identification[0] != 'W'
	|| header->identification[1] != 'A'
	|| header->identification[2] != 'D'
	|| header->identification[3] != '2')
		Sys_Error ("Wad file %s doesn't have WAD2 id\n",filename);
		
	wad_numlumps = LittleLong(header->numlumps);
	infotableofs = LittleLong(header->infotableofs);
	wad_lumps = (lumpinfo_t *)(wad_base + infotableofs);
	
	for (i=0, lump_p = wad_lumps ; i<wad_numlumps ; i++,lump_p++)
	{
		lump_p->filepos = LittleLong(lump_p->filepos);
		lump_p->size = LittleLong(lump_p->size);
		W_CleanupName (lump_p->name, lump_p->name);
		if (lump_p->type == TYP_QPIC)
			SwapPic ( (qpic_t *)(wad_base + lump_p->filepos));
	}
}


/*
=============
W_GetLumpinfo
=============
*/
lumpinfo_t	*W_GetLumpinfo (char *name)
{
	int		i;
	lumpinfo_t	*lump_p;
	char	clean[16];
	
	W_CleanupName (name, clean);
	
	for (lump_p=wad_lumps, i=0 ; i<wad_numlumps ; i++,lump_p++)
	{
		if (!strcmp(clean, lump_p->name))
			return lump_p;
	}
	
	Sys_Error ("W_GetLumpinfo: %s not found", name);
	return NULL;
}

void *W_GetLumpName (char *name)
{
	lumpinfo_t	*lump;
	
	lump = W_GetLumpinfo (name);
	
	return (void *)(wad_base + lump->filepos);
}

void *W_GetLumpNum (int num)
{
	lumpinfo_t	*lump;
	
	if (num < 0 || num > wad_numlumps)
		Sys_Error ("W_GetLumpNum: bad number: %i", num);
		
	lump = wad_lumps + num;
	
	return (void *)(wad_base + lump->filepos);
}

/*
=============================================================================

automatic byte swapping

=============================================================================
*/

void SwapPic (qpic_t *pic)
{
	pic->width = LittleLong(pic->width);
	pic->height = LittleLong(pic->height);	
}
```
