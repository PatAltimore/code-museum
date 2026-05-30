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
description: "This file handles the loading, management, and retrieval of data from WAD files, a format used for storing game assets in Quake."

summary:
  - point: "Implements WAD file parsing for efficient asset management"
    link: "https://en.wikipedia.org/wiki/WAD_(file_format)"
    link_label: "WAD File Format"
  - point: "Introduces byte-swapping for cross-platform compatibility"
    link: "https://en.wikipedia.org/wiki/Endianness"
    link_label: "Endianness"
  - point: "Optimizes asset lookup using cleaned and padded names"
    link: "https://en.wikipedia.org/wiki/Hash_table"
    link_label: "Lookup Optimization"

enhancements:
  - id: "cleanup-name-padding-for-fast-lookups"
    line_start: 30
    line_end: 59
    title: "Why Pad Names with Spaces for Fast Lookups?"
    wikipedia_url: "https://en.wikipedia.org/wiki/String_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The `W_CleanupName` function processes asset names by converting uppercase letters to lowercase and padding them with spaces up to a fixed length of 16 characters. This ensures that names are consistently formatted and aligned for rapid comparison during asset lookups. By standardizing the names, the function avoids costly string operations and enables comparisons to be performed four bytes at a time, leveraging the efficiency of aligned memory operations on x86 processors. In 1996, memory and CPU constraints were significant concerns for developers. Quake was designed to run on hardware like the Intel 486 and early Pentium processors, where every cycle mattered. John Carmack and Michael Abrash, known for their expertise in optimization, likely devised this approach to minimize overhead in asset management while maintaining human-readable names for debugging and tools. This technique influenced later game engines and asset management systems, where standardized naming conventions and memory alignment became common practice. Developers of engines like Unreal and Source adopted similar strategies to optimize asset lookup and retrieval, ensuring smooth performance even as game worlds grew more complex."
  - id: "wad-file-loading-and-validation"
    line_start: 63
    line_end: 99
    title: "How Quake Validates and Loads WAD Files"
    wikipedia_url: "https://en.wikipedia.org/wiki/WAD_(file_format)"
    image_url: ""
    image_caption: ""
    content: "The `W_LoadWadFile` function is responsible for loading WAD files, which store game assets like textures and models. It begins by loading the file into memory and verifying its identification header to ensure it matches the expected 'WAD2' format. This validation step prevents corrupted or incompatible files from being used, which could crash the game. Once validated, the function reads the number of lumps (individual assets) and their metadata, converting values from little-endian format to the system's native format using the `LittleLong` function. This byte-swapping ensures compatibility across platforms with different endianness. The lump names are cleaned and standardized using `W_CleanupName`, and assets of type `TYP_QPIC` are further processed by the `SwapPic` function to adjust their dimensions. In the mid-1990s, file formats like WAD were essential for organizing game assets efficiently, especially in an era of limited storage and memory. The modular design of WAD files allowed developers to update and manage assets without recompiling the entire game. This approach influenced later formats like PK3 (used in Quake III) and VPK (used in Source engine games), which continued the tradition of modular asset management."
  - id: "asset-lookup-by-name"
    line_start: 102
    line_end: 123
    title: "Finding Game Assets by Name in Quake"
    wikipedia_url: "https://en.wikipedia.org/wiki/Hash_table"
    image_url: ""
    image_caption: ""
    content: "The `W_GetLumpinfo` function retrieves metadata for a specific asset (lump) by its name. It first cleans the input name using `W_CleanupName` to ensure consistent formatting, then iterates through the list of lumps to find a match. If no match is found, the function triggers a fatal error, halting the game. This linear search approach was sufficient for Quake's relatively small asset libraries, but it highlights the constraints of the era. With limited memory and processing power, more complex data structures like hash tables were often avoided due to their overhead. Instead, developers optimized simpler algorithms to meet performance requirements. The concept of asset lookup by name became a staple in game development, evolving into more sophisticated systems in later engines. For example, modern engines use hash tables or binary search trees to enable faster lookups for larger asset libraries. Quake's approach laid the groundwork for these advancements, demonstrating the importance of efficient asset management in real-time applications."
  - id: "byte-swapping-for-cross-platform-compatibility"
    line_start: 146
    line_end: 158
    title: "The Byte-Swapping Trick for Cross-Platform Assets"
    wikipedia_url: "https://en.wikipedia.org/wiki/Endianness"
    image_url: ""
    image_caption: ""
    content: "The `SwapPic` function adjusts the width and height of a `qpic_t` structure by converting them from little-endian format to the system's native format using the `LittleLong` function. This ensures that asset dimensions are correctly interpreted regardless of the platform's endianness. In the 1990s, cross-platform compatibility was a growing concern as games began to target multiple operating systems, including DOS, Windows, and Linux. Endianness differences between architectures like x86 (little-endian) and others (big-endian) could lead to corrupted data if not handled properly. Byte-swapping functions like `SwapPic` were a simple yet effective solution to this problem. This technique became standard practice in game development and influenced the design of asset formats in later engines. Developers of engines like Unity and Unreal continue to use similar methods to ensure compatibility across diverse hardware and operating systems. Quake's handling of endianness demonstrated the importance of anticipating platform differences in a rapidly evolving industry."

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