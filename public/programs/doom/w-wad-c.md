---
title: "w_wad.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/w_wad.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/w_wad.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "w-wad-c"
order: 5
description: "This file implements the core functionality for handling WAD files in DOOM, a format that became central to the game's modding community and legacy."

summary:
  - point: "Introduces the WAD file format, enabling modular content management."
    link: "https://en.wikipedia.org/wiki/WAD_(file_format)"
    link_label: "WAD File Format"
  - point: "Implements caching mechanisms to optimize lump loading and memory usage."
    link: "https://en.wikipedia.org/wiki/Cache_(computing)"
    link_label: "Caching"
  - point: "Supports dynamic reload of WAD files for iterative development and modding."
    link: "https://en.wikipedia.org/wiki/Mod_(video_gaming)"
    link_label: "Game Modding"
  - point: "Handles both IWAD and PWAD file types, distinguishing between core game data and user-created content."
    link: "https://doom.fandom.com/wiki/WAD"
    link_label: "IWAD and PWAD"
  - point: "Efficiently manages lump metadata with custom data structures and memory allocation techniques."
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"

enhancements:
  - id: "wad-file-header-and-global-variables"
    line_start: 56
    line_end: 67
    title: "WAD File Metadata: Organizing the Chaos"
    wikipedia_url: "https://en.wikipedia.org/wiki/WAD_(file_format)"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/String_example.png/330px-String_example.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Example of a string and how it is composed of characters. (CC BY-SA 4.0)"
    content: "These lines define global variables that store metadata about WAD files, including lump locations and counts. The programmer's immediate goal here was to create a structure for managing the modular data that would power DOOM's levels, textures, sounds, and other assets. In 1993, this approach was groundbreaking, as it allowed for easy modification and expansion of the game. The WAD format became a cornerstone of DOOM's modding community, enabling fans to create custom content with relative ease. This modularity was a direct response to the limitations of storage and memory in early PCs, where efficient data management was critical. The lumpinfo_t structure reflects Carmack's obsession with optimization, ensuring that every byte served a purpose. This design decision had lasting consequences, as it inspired similar modular formats in later games and established a precedent for user-generated content in gaming."
  - id: "string-utilities"
    line_start: 69
    line_end: 112
    title: "String Manipulation: A Programmer's Toolkit"
    wikipedia_url: "https://en.wikipedia.org/wiki/String_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "This section introduces utility functions for string manipulation, such as `strupr` for converting strings to uppercase and `ExtractFileBase` for extracting base filenames. These functions were essential for handling lump names in a case-insensitive manner, a practical necessity given the varied naming conventions of user-created WAD files. In the early 1990s, developers often had to implement their own utility functions, as standard libraries were less comprehensive than they are today. The decision to enforce uppercase filenames reflects the era's constraints, where simplicity and consistency were paramount. These utilities also highlight the hands-on approach of id Software's team, who were deeply involved in every aspect of the game's development. While these functions may seem trivial, they are part of the foundational code that enabled DOOM's modular architecture and its thriving modding ecosystem."
  - id: "wad-file-loading"
    line_start: 137
    line_end: 226
    title: "Loading WAD Files: The Heart of DOOM"
    wikipedia_url: "https://en.wikipedia.org/wiki/WAD_(file_format)"
    image_url: ""
    image_caption: ""
    content: "The `W_AddFile` function is responsible for loading WAD files and extracting their contents into memory. It supports both IWAD files, which contain core game data, and PWAD files, which are used for user-created content. The function also includes a mechanism for handling reloadable files, enabling iterative development and modding. In 1993, this level of flexibility was rare, as most games had rigid data structures that were difficult to modify. The reload feature, described as a 'fragile hack,' reflects the team's willingness to experiment and prioritize functionality over perfection. John Carmack's focus on performance and modularity is evident in the use of memory allocation and file handling techniques. This function laid the groundwork for DOOM's enduring legacy as a modding platform, influencing countless games that followed."
  - id: "wad-reloading"
    line_start: 231
    line_end: 275
    title: "Reloading WAD Files: Iterative Development Made Easy"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mod_(video_gaming)"
    image_url: ""
    image_caption: ""
    content: "The `W_Reload` function allows for the dynamic reloading of WAD files, flushing cached lumps and updating the directory. This feature was particularly useful during development, enabling the team to test changes to game assets without restarting the game. In the early 1990s, iterative development tools were limited, and this function represents a clever workaround to streamline the process. The ability to reload WAD files also empowered modders, who could experiment with custom content more efficiently. The function's reliance on file handling and memory management techniques showcases Carmack's engineering prowess, as he balanced flexibility with performance. While described as a 'fragile hack,' this feature contributed to DOOM's reputation as a modding-friendly game, cementing its place in gaming history."
  - id: "wad-initialization"
    line_start: 280
    line_end: 316
    title: "Initializing WAD Files: Modular Content Management"
    wikipedia_url: "https://en.wikipedia.org/wiki/WAD_(file_format)"
    image_url: ""
    image_caption: ""
    content: "The `W_InitMultipleFiles` function initializes the WAD system by loading a list of files and setting up caching mechanisms. This modular approach allowed DOOM to manage multiple sources of game data, including core IWAD files and optional PWAD files. In 1993, this level of modularity was a significant innovation, enabling both developers and players to extend the game with custom content. The function's use of dynamic memory allocation reflects the team's focus on efficiency, a necessity given the hardware limitations of the era. By supporting multiple files and prioritizing later entries, the system ensured flexibility and ease of use. This design decision had lasting implications, influencing the development of other games and establishing DOOM as a pioneer in user-generated content."
  - id: "wad-lump-caching"
    line_start: 473
    line_end: 513
    title: "Caching Lumps: Optimizing Memory Usage"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cache_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `W_CacheLumpNum` and `W_CacheLumpName` functions implement a caching mechanism for WAD lumps, optimizing memory usage by storing frequently accessed data. These functions ensure that lumps are loaded into memory only when needed, reducing disk I/O and improving performance. In the early 1990s, efficient memory management was crucial, as most PCs had limited RAM and storage. John Carmack's expertise in low-level programming is evident in the careful handling of memory allocation and caching. This approach not only enhanced the game's performance but also allowed it to run smoothly on a wide range of hardware. The caching mechanism became a model for other game developers, demonstrating the importance of resource management in real-time applications."
  - id: "wad-profiling"
    line_start: 517
    line_end: 575
    title: "Profiling WAD Usage: Debugging and Optimization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Profiling_(computer_programming)"
    image_url: ""
    image_caption: ""
    content: "The `W_Profile` function provides insights into the usage of WAD lumps, recording data about memory allocation and caching. This profiling tool was invaluable for debugging and optimizing the game's performance, ensuring that resources were used efficiently. In the early 1990s, profiling tools were not as advanced as they are today, so developers often had to create their own solutions. The function outputs data to a text file, allowing the team to analyze lump usage and identify potential bottlenecks. This level of attention to detail reflects Carmack's commitment to performance and reliability, qualities that contributed to DOOM's success. While modern games use more sophisticated profiling tools, this function represents an important step in the evolution of game development practices."

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
//	Handles WAD file header, directory, lump I/O.
//
//-----------------------------------------------------------------------------


static const char
rcsid[] = "$Id: w_wad.c,v 1.5 1997/02/03 16:47:57 b1 Exp $";


#ifdef NORMALUNIX
#include <ctype.h>
#include <sys/types.h>
#include <string.h>
#include <unistd.h>
#include <malloc.h>
#include <fcntl.h>
#include <sys/stat.h>
#include <alloca.h>
#define O_BINARY		0
#endif

#include "doomtype.h"
#include "m_swap.h"
#include "i_system.h"
#include "z_zone.h"

#ifdef __GNUG__
#pragma implementation "w_wad.h"
#endif
#include "w_wad.h"






//
// GLOBALS
//

// Location of each lump on disk.
lumpinfo_t*		lumpinfo;		
int			numlumps;

void**			lumpcache;


#define strcmpi	strcasecmp

void strupr (char* s)
{
    while (*s) { *s = toupper(*s); s++; }
}

int filelength (int handle) 
{ 
    struct stat	fileinfo;
    
    if (fstat (handle,&fileinfo) == -1)
	I_Error ("Error fstating");

    return fileinfo.st_size;
}


void
ExtractFileBase
( char*		path,
  char*		dest )
{
    char*	src;
    int		length;

    src = path + strlen(path) - 1;
    
    // back up until a \ or the start
    while (src != path
	   && *(src-1) != '\\'
	   && *(src-1) != '/')
    {
	src--;
    }
    
    // copy up to eight characters
    memset (dest,0,8);
    length = 0;
    
    while (*src && *src != '.')
    {
	if (++length == 9)
	    I_Error ("Filename base of %s >8 chars",path);

	*dest++ = toupper((int)*src++);
    }
}





//
// LUMP BASED ROUTINES.
//

//
// W_AddFile
// All files are optional, but at least one file must be
//  found (PWAD, if all required lumps are present).
// Files with a .wad extension are wadlink files
//  with multiple lumps.
// Other files are single lumps with the base filename
//  for the lump name.
//
// If filename starts with a tilde, the file is handled
//  specially to allow map reloads.
// But: the reload feature is a fragile hack...

int			reloadlump;
char*			reloadname;


void W_AddFile (char *filename)
{
    wadinfo_t		header;
    lumpinfo_t*		lump_p;
    unsigned		i;
    int			handle;
    int			length;
    int			startlump;
    filelump_t*		fileinfo;
    filelump_t		singleinfo;
    int			storehandle;
    
    // open the file and add to directory

    // handle reload indicator.
    if (filename[0] == '~')
    {
	filename++;
	reloadname = filename;
	reloadlump = numlumps;
    }
		
    if ( (handle = open (filename,O_RDONLY | O_BINARY)) == -1)
    {
	printf (" couldn't open %s\n",filename);
	return;
    }

    printf (" adding %s\n",filename);
    startlump = numlumps;
	
    if (strcmpi (filename+strlen(filename)-3 , "wad" ) )
    {
	// single lump file
	fileinfo = &singleinfo;
	singleinfo.filepos = 0;
	singleinfo.size = LONG(filelength(handle));
	ExtractFileBase (filename, singleinfo.name);
	numlumps++;
    }
    else 
    {
	// WAD file
	read (handle, &header, sizeof(header));
	if (strncmp(header.identification,"IWAD",4))
	{
	    // Homebrew levels?
	    if (strncmp(header.identification,"PWAD",4))
	    {
		I_Error ("Wad file %s doesn't have IWAD "
			 "or PWAD id\n", filename);
	    }
	    
	    // ???modifiedgame = true;		
	}
	header.numlumps = LONG(header.numlumps);
	header.infotableofs = LONG(header.infotableofs);
	length = header.numlumps*sizeof(filelump_t);
	fileinfo = alloca (length);
	lseek (handle, header.infotableofs, SEEK_SET);
	read (handle, fileinfo, length);
	numlumps += header.numlumps;
    }

    
    // Fill in lumpinfo
    lumpinfo = realloc (lumpinfo, numlumps*sizeof(lumpinfo_t));

    if (!lumpinfo)
	I_Error ("Couldn't realloc lumpinfo");

    lump_p = &lumpinfo[startlump];
	
    storehandle = reloadname ? -1 : handle;
	
    for (i=startlump ; i<numlumps ; i++,lump_p++, fileinfo++)
    {
	lump_p->handle = storehandle;
	lump_p->position = LONG(fileinfo->filepos);
	lump_p->size = LONG(fileinfo->size);
	strncpy (lump_p->name, fileinfo->name, 8);
    }
	
    if (reloadname)
	close (handle);
}




//
// W_Reload
// Flushes any of the reloadable lumps in memory
//  and reloads the directory.
//
void W_Reload (void)
{
    wadinfo_t		header;
    int			lumpcount;
    lumpinfo_t*		lump_p;
    unsigned		i;
    int			handle;
    int			length;
    filelump_t*		fileinfo;
	
    if (!reloadname)
	return;
		
    if ( (handle = open (reloadname,O_RDONLY | O_BINARY)) == -1)
	I_Error ("W_Reload: couldn't open %s",reloadname);

    read (handle, &header, sizeof(header));
    lumpcount = LONG(header.numlumps);
    header.infotableofs = LONG(header.infotableofs);
    length = lumpcount*sizeof(filelump_t);
    fileinfo = alloca (length);
    lseek (handle, header.infotableofs, SEEK_SET);
    read (handle, fileinfo, length);
    
    // Fill in lumpinfo
    lump_p = &lumpinfo[reloadlump];
	
    for (i=reloadlump ;
	 i<reloadlump+lumpcount ;
	 i++,lump_p++, fileinfo++)
    {
	if (lumpcache[i])
	    Z_Free (lumpcache[i]);

	lump_p->position = LONG(fileinfo->filepos);
	lump_p->size = LONG(fileinfo->size);
    }
	
    close (handle);
}



//
// W_InitMultipleFiles
// Pass a null terminated list of files to use.
// All files are optional, but at least one file
//  must be found.
// Files with a .wad extension are idlink files
//  with multiple lumps.
// Other files are single lumps with the base filename
//  for the lump name.
// Lump names can appear multiple times.
// The name searcher looks backwards, so a later file
//  does override all earlier ones.
//
void W_InitMultipleFiles (char** filenames)
{	
    int		size;
    
    // open all the files, load headers, and count lumps
    numlumps = 0;

    // will be realloced as lumps are added
    lumpinfo = malloc(1);	

    for ( ; *filenames ; filenames++)
	W_AddFile (*filenames);

    if (!numlumps)
	I_Error ("W_InitFiles: no files found");
    
    // set up caching
    size = numlumps * sizeof(*lumpcache);
    lumpcache = malloc (size);
    
    if (!lumpcache)
	I_Error ("Couldn't allocate lumpcache");

    memset (lumpcache,0, size);
}




//
// W_InitFile
// Just initialize from a single file.
//
void W_InitFile (char* filename)
{
    char*	names[2];

    names[0] = filename;
    names[1] = NULL;
    W_InitMultipleFiles (names);
}



//
// W_NumLumps
//
int W_NumLumps (void)
{
    return numlumps;
}



//
// W_CheckNumForName
// Returns -1 if name not found.
//

int W_CheckNumForName (char* name)
{
    union {
	char	s[9];
	int	x[2];
	
    } name8;
    
    int		v1;
    int		v2;
    lumpinfo_t*	lump_p;

    // make the name into two integers for easy compares
    strncpy (name8.s,name,8);

    // in case the name was a fill 8 chars
    name8.s[8] = 0;

    // case insensitive
    strupr (name8.s);		

    v1 = name8.x[0];
    v2 = name8.x[1];


    // scan backwards so patch lump files take precedence
    lump_p = lumpinfo + numlumps;

    while (lump_p-- != lumpinfo)
    {
	if ( *(int *)lump_p->name == v1
	     && *(int *)&lump_p->name[4] == v2)
	{
	    return lump_p - lumpinfo;
	}
    }

    // TFB. Not found.
    return -1;
}




//
// W_GetNumForName
// Calls W_CheckNumForName, but bombs out if not found.
//
int W_GetNumForName (char* name)
{
    int	i;

    i = W_CheckNumForName (name);
    
    if (i == -1)
      I_Error ("W_GetNumForName: %s not found!", name);
      
    return i;
}


//
// W_LumpLength
// Returns the buffer size needed to load the given lump.
//
int W_LumpLength (int lump)
{
    if (lump >= numlumps)
	I_Error ("W_LumpLength: %i >= numlumps",lump);

    return lumpinfo[lump].size;
}



//
// W_ReadLump
// Loads the lump into the given buffer,
//  which must be >= W_LumpLength().
//
void
W_ReadLump
( int		lump,
  void*		dest )
{
    int		c;
    lumpinfo_t*	l;
    int		handle;
	
    if (lump >= numlumps)
	I_Error ("W_ReadLump: %i >= numlumps",lump);

    l = lumpinfo+lump;
	
    // ??? I_BeginRead ();
	
    if (l->handle == -1)
    {
	// reloadable file, so use open / read / close
	if ( (handle = open (reloadname,O_RDONLY | O_BINARY)) == -1)
	    I_Error ("W_ReadLump: couldn't open %s",reloadname);
    }
    else
	handle = l->handle;
		
    lseek (handle, l->position, SEEK_SET);
    c = read (handle, dest, l->size);

    if (c < l->size)
	I_Error ("W_ReadLump: only read %i of %i on lump %i",
		 c,l->size,lump);	

    if (l->handle == -1)
	close (handle);
		
    // ??? I_EndRead ();
}




//
// W_CacheLumpNum
//
void*
W_CacheLumpNum
( int		lump,
  int		tag )
{
    byte*	ptr;

    if ((unsigned)lump >= numlumps)
	I_Error ("W_CacheLumpNum: %i >= numlumps",lump);
		
    if (!lumpcache[lump])
    {
	// read the lump in
	
	//printf ("cache miss on lump %i\n",lump);
	ptr = Z_Malloc (W_LumpLength (lump), tag, &lumpcache[lump]);
	W_ReadLump (lump, lumpcache[lump]);
    }
    else
    {
	//printf ("cache hit on lump %i\n",lump);
	Z_ChangeTag (lumpcache[lump],tag);
    }
	
    return lumpcache[lump];
}



//
// W_CacheLumpName
//
void*
W_CacheLumpName
( char*		name,
  int		tag )
{
    return W_CacheLumpNum (W_GetNumForName(name), tag);
}


//
// W_Profile
//
int		info[2500][10];
int		profilecount;

void W_Profile (void)
{
    int		i;
    memblock_t*	block;
    void*	ptr;
    char	ch;
    FILE*	f;
    int		j;
    char	name[9];
	
	
    for (i=0 ; i<numlumps ; i++)
    {	
	ptr = lumpcache[i];
	if (!ptr)
	{
	    ch = ' ';
	    continue;
	}
	else
	{
	    block = (memblock_t *) ( (byte *)ptr - sizeof(memblock_t));
	    if (block->tag < PU_PURGELEVEL)
		ch = 'S';
	    else
		ch = 'P';
	}
	info[i][profilecount] = ch;
    }
    profilecount++;
	
    f = fopen ("waddump.txt","w");
    name[8] = 0;

    for (i=0 ; i<numlumps ; i++)
    {
	memcpy (name,lumpinfo[i].name,8);

	for (j=0 ; j<8 ; j++)
	    if (!name[j])
		break;

	for ( ; j<8 ; j++)
	    name[j] = ' ';

	fprintf (f,"%s ",name);

	for (j=0 ; j<profilecount ; j++)
	    fprintf (f,"    %c",info[i][j]);

	fprintf (f,"\n");
    }
    fclose (f);
}

