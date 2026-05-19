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
description: "This file handles WAD file management in Quake, enabling efficient access to game assets stored in a structured binary format."

summary:
  - point: "Implements WAD file parsing for asset management"
    link: "https://en.wikipedia.org/wiki/WAD_(file_format)"
    link_label: "WAD File Format"
  - point: "Introduces byte-swapping for cross-platform compatibility"
    link: "https://en.wikipedia.org/wiki/Endianness"
    link_label: "Endianness"
  - point: "Optimizes lump name lookups for rapid asset retrieval"
    link: "https://en.wikipedia.org/wiki/Hash_table"
    link_label: "Hash Table"
  - point: "Demonstrates modular design for asset handling"
    link: "https://en.wikipedia.org/wiki/Modular_programming"
    link_label: "Modular Programming"

enhancements:
  - id: "wad-file-foundation"
    line_start: 22
    line_end: 26
    title: "Foundation: WAD File Management Basics"
    wikipedia_url: "https://en.wikipedia.org/wiki/WAD_(file_format)"
    image_url: ""
    image_caption: ""
    content: "This section sets up the foundational variables for WAD file handling, including the number of lumps, lump metadata, and the base pointer to the file's binary data. WAD files were introduced by id Software in Doom (1993) as a way to store game assets like textures, sounds, and maps in a structured format. By the time Quake was developed, the WAD2 format evolved to accommodate the game's true 3D environments and more complex assets. These variables are central to the file's operations, enabling efficient parsing and retrieval of data. The modular design reflects the industry's shift toward reusable and maintainable code, a hallmark of id Software's programming philosophy. This foundational setup influenced asset management in later engines, including Unreal Engine and Source Engine, both of which adopted similar structured formats for game resources."
  - id: "wad-name-cleanup"
    line_start: 30
    line_end: 59
    title: "Name Cleanup for Rapid Lookups"
    wikipedia_url: "https://en.wikipedia.org/wiki/Hash_table"
    image_url: ""
    image_caption: ""
    content: "The `W_CleanupName` function ensures that lump names are standardized by converting uppercase letters to lowercase and padding the names to a fixed length. This normalization allows for rapid comparisons during lump lookups, as names can be compared in chunks of four bytes rather than character-by-character. In the mid-1990s, performance optimization was critical due to hardware constraints like limited CPU power and memory. John Carmack and Michael Abrash were renowned for their ability to squeeze maximum efficiency out of the hardware, and this function exemplifies their attention to detail. The technique of normalizing and padding names for efficient lookups has since been adopted in various applications, including database indexing and file system design."
  - id: "wad-load-file"
    line_start: 63
    line_end: 99
    title: "Loading WAD Files: Parsing Binary Structures"
    wikipedia_url: "https://en.wikipedia.org/wiki/WAD_(file_format)"
    image_url: ""
    image_caption: ""
    content: "The `W_LoadWadFile` function parses a WAD file, verifying its identification header and extracting metadata about its lumps. This includes converting data from little-endian format to the host machine's format, ensuring compatibility across different hardware architectures. The function also cleans up lump names and prepares them for efficient access. During the 1990s, cross-platform compatibility was a growing concern, as developers increasingly targeted multiple operating systems and hardware configurations. Byte-swapping techniques like those used here became standard practice for handling binary data. The approach laid the groundwork for asset management in later engines, influencing formats like PK3 in Quake III Arena and VPK in Valve's Source Engine."
  - id: "wad-lumpinfo-retrieval"
    line_start: 102
    line_end: 123
    title: "Retrieving Lump Metadata"
    wikipedia_url: "https://en.wikipedia.org/wiki/WAD_(file_format)"
    image_url: ""
    image_caption: ""
    content: "The `W_GetLumpinfo` function retrieves metadata for a specific lump by name. It first normalizes the name using `W_CleanupName` and then searches through the lump metadata for a match. If no match is found, the function triggers an error. This design prioritizes fast lookups and error handling, ensuring that asset retrieval is both efficient and robust. The function reflects the modular programming principles championed by id Software, where each component is designed to perform a specific task efficiently. The concept of metadata-driven asset management has since become a cornerstone of game development, influencing formats like Unity's asset bundles and Unreal Engine's package files."
  - id: "wad-byte-swapping"
    line_start: 154
    line_end: 158
    title: "Automatic Byte Swapping for Images"
    wikipedia_url: "https://en.wikipedia.org/wiki/Endianness"
    image_url: ""
    image_caption: ""
    content: "The `SwapPic` function converts image dimensions from little-endian to the host machine's format. This ensures that image data stored in WAD files is correctly interpreted regardless of the system's native endianness. Byte-swapping was a common technique in the 1990s, as developers increasingly faced the challenge of supporting multiple hardware architectures. The function highlights id Software's commitment to cross-platform compatibility, a forward-thinking approach that contributed to Quake's widespread adoption. Byte-swapping techniques like those used here have since become standard practice in software development, influencing libraries like SDL and OpenGL, which handle similar issues in graphics programming."

---

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