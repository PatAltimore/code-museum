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
  - id: "wad-foundation-variables"
    line_start: 1
    line_end: 26
    title: "The Variables That Define WAD Management"
    wikipedia_url: "https://en.wikipedia.org/wiki/WAD_(file_format)"
    image_url: ""
    image_caption: ""
    content: "This section defines the core variables used throughout the WAD file management system: `wad_numlumps`, `wad_lumps`, and `wad_base`. These variables store the number of lumps (individual data blocks), a pointer to the lump metadata, and the base address of the loaded WAD file in memory, respectively. At the time, memory management was a critical concern due to the limited resources of 1996-era PCs, with typical systems featuring 8MB to 16MB of RAM. By centralizing these variables, the developers ensured efficient access and manipulation of game assets stored in the WAD2 format. The WAD file system itself was an evolution of earlier formats used in Doom, designed to handle the more complex requirements of Quake's true 3D environments. This foundational setup influenced asset management in later engines, including the Unreal Engine and Source Engine, which adopted similar centralized structures for handling game resources."
  - id: "swap-pic-byte-ordering"
    line_start: 146
    line_end: 158
    title: "Byte Swapping for Cross-Platform Graphics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Endianness"
    image_url: ""
    image_caption: ""
    content: "The `SwapPic` function ensures that the width and height of a `qpic_t` structure are correctly interpreted regardless of the system's endianness. In the 1990s, endianness was a common challenge as developers worked to make software compatible across different architectures, such as x86 (little-endian) and PowerPC (big-endian). This function uses the `LittleLong` macro to convert values to the little-endian format expected by Quake's engine. This approach reflects id Software's commitment to portability, a forward-thinking move that allowed Quake to be ported to platforms like Linux and Mac OS. Byte swapping techniques like this became standard practice in game engines, influencing later systems such as Unity and Unreal."
  - id: "cleanup-name-padding"
    line_start: 30
    line_end: 59
    title: "Why Asset Names Need Space Padding"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `W_CleanupName` function lowercases asset names, pads them with spaces, and terminates them with a null character to ensure consistent length. This design allows rapid lump name lookups by enabling comparisons of four bytes at a time, leveraging the 32-bit registers of x86 processors for efficiency. Space padding also ensures that names are visually aligned when printed in tables, a small but thoughtful detail for debugging and development. This technique reflects the constraints and priorities of the era, where optimizing for performance and developer usability was paramount. Similar name-cleaning strategies were later adopted in other engines, such as the GoldSrc engine used in Half-Life, which also prioritized efficient asset management."
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
    line_end: 122
    title: "Finding Game Assets by Name"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `W_GetLumpinfo` function retrieves metadata for a lump (asset) by its name. It first cleans the name using `W_CleanupName` to ensure consistent formatting, then iterates through the lump metadata to find a match. If no match is found, it triggers a fatal error using `Sys_Error`. This design prioritizes fast lookups and strict error handling, reflecting the high performance and reliability standards of Quake's engine. By centralizing lump metadata access, this function simplifies asset management and debugging, influencing similar systems in later engines like Source and Unreal."
  - id: "automatic-byte-swapping"
    line_start: 146
    line_end: 158
    title: "Automatic Byte Swapping for Asset Consistency"
    wikipedia_url: "https://en.wikipedia.org/wiki/Endianness"
    image_url: ""
    image_caption: ""
    content: "This section introduces automatic byte swapping to ensure consistent interpretation of asset data across different platforms. Functions like `SwapPic` convert values to the little-endian format expected by Quake's engine, addressing the challenges posed by varying endianness in hardware architectures. This technique was crucial for maintaining cross-platform compatibility, allowing Quake to run on systems with different native byte orders. The emphasis on portability influenced later game engines, which adopted similar byte-swapping strategies to support diverse hardware environments."

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
