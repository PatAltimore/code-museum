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
description: "This file implements the WAD file handling system, a cornerstone of DOOM's modding ecosystem and data management."

summary:
  - point: "Introduces the WAD file format for modular game data storage"
    link: "https://en.wikipedia.org/wiki/Doom_WAD"
    link_label: "Doom WAD"
  - point: "Implements caching for efficient lump access"
    link: "https://en.wikipedia.org/wiki/Cache_(computing)"
    link_label: "Cache"
  - point: "Supports dynamic reloading of game data for development and modding"
    link: "https://en.wikipedia.org/wiki/Mod_(video_games)"
    link_label: "Game Modding"
  - point: "Handles both IWAD and PWAD file types for base game and custom content"
    link: "https://doomwiki.org/wiki/IWAD"
    link_label: "IWAD and PWAD"
  - point: "Provides profiling tools for analyzing lump usage"
    link: "https://doomwiki.org/wiki/W_Profile"
    link_label: "W_Profile"

enhancements:
  - id: "toupper-utility-function"
    line_start: 67
    line_end: 72
    title: "Simple string uppercase conversion"
    wikipedia_url: "https://en.wikipedia.org/wiki/C_string_handling"
    image_url: ""
    image_caption: ""
    content: "The `strupr` function converts a string to uppercase by iterating through each character and applying the `toupper` function. This utility is used throughout the file to ensure case-insensitive comparisons, particularly for lump names in WAD files. In the early 1990s, ensuring compatibility across different systems often required manual handling of string cases, as file systems like MS-DOS were case-insensitive, while Unix systems were case-sensitive. This function reflects the pragmatic approach of DOOM's developers to handle cross-platform compatibility efficiently. The technique of converting strings to uppercase for comparisons remains a common practice in programming, especially in legacy systems and file handling."
  - id: "extract-file-base"
    line_start: 85
    line_end: 114
    title: "Extracting filename base for lump naming"
    wikipedia_url: "https://en.wikipedia.org/wiki/Filename"
    image_url: ""
    image_caption: ""
    content: "The `ExtractFileBase` function isolates the base name of a file, stripping away directory paths and extensions, and converts it to uppercase for consistency. This is crucial for naming lumps in single lump files, ensuring that lump names adhere to the 8-character limit imposed by the WAD format. In the early 1990s, file naming conventions were heavily influenced by the constraints of FAT file systems, which supported short filenames. By enforcing an 8-character limit, DOOM's developers ensured compatibility with these systems while maintaining a standardized naming convention. This approach laid the groundwork for the modularity of WAD files, enabling the creation of custom levels and assets. The function's simplicity and reliability contributed to DOOM's success in fostering a vibrant modding community."
  - id: "wad-file-loading"
    line_start: 120
    line_end: 225
    title: "Loading and validating WAD files"
    wikipedia_url: "https://en.wikipedia.org/wiki/Doom_WAD"
    image_url: ""
    image_caption: ""
    content: "The `W_AddFile` function is responsible for loading WAD files, validating their headers, and populating the lump directory. It supports both IWAD files (base game data) and PWAD files (custom content), ensuring modularity and extensibility. The function checks the file's identification string to distinguish between IWAD and PWAD formats, a critical step for maintaining compatibility with DOOM's data structure. This modular approach to game data storage was revolutionary in 1993, allowing players and developers to easily add new levels, textures, and other assets. The WAD format became a standard in the gaming industry, influencing later games like Quake and spawning a thriving modding community. The ability to dynamically reload data also facilitated rapid iteration during development, showcasing id Software's commitment to efficiency and innovation."
  - id: "dynamic-reloading"
    line_start: 231
    line_end: 275
    title: "Dynamic lump reloading for development"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mod_(video_games)"
    image_url: ""
    image_caption: ""
    content: "The `W_Reload` function enables dynamic reloading of lumps, flushing cached data and reloading the directory from disk. This feature was primarily designed for development purposes, allowing developers to modify WAD files and see changes without restarting the game. While described as a 'fragile hack' in the comments, it reflects id Software's iterative development process and their focus on rapid prototyping. Dynamic reloading also benefits modders, enabling them to test custom content efficiently. This capability underscores DOOM's role in pioneering user-generated content in gaming, laying the foundation for modern modding ecosystems. The technique of dynamically reloading assets has since become a standard feature in game engines, facilitating real-time development workflows."
  - id: "lump-caching-system"
    line_start: 472
    line_end: 512
    title: "Efficient lump caching for performance"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cache_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `W_CacheLumpNum` and `W_CacheLumpName` functions implement a caching system for WAD lumps, ensuring efficient access to frequently used game data. By storing lumps in memory and tagging them for reuse, the system minimizes disk I/O operations, improving performance on the limited hardware of the early 1990s. This caching mechanism is a testament to DOOM's optimization strategies, which allowed the game to run smoothly on machines with as little as 4 MB of RAM. The concept of caching data for performance optimization has since become ubiquitous in software development, influencing modern game engines and operating systems. DOOM's approach to lump caching exemplifies the ingenuity of its developers in overcoming hardware constraints while delivering a seamless gaming experience."
  - id: "profiling-lump-usage"
    line_start: 516
    line_end: 575
    title: "Profiling lump usage for optimization"
    wikipedia_url: "https://doomwiki.org/wiki/W_Profile"
    image_url: ""
    image_caption: ""
    content: "The `W_Profile` function provides tools for analyzing lump usage, generating a report on which lumps are cached and their memory tags. This profiling capability was likely used during development to optimize memory usage and identify bottlenecks in the caching system. By outputting data to a file (`waddump.txt`), developers could study lump access patterns and refine the game's performance. Profiling tools like this were uncommon in early 1990s game development, highlighting id Software's forward-thinking approach to optimization. The insights gained from profiling contributed to DOOM's ability to run efficiently on modest hardware, setting a benchmark for performance in the gaming industry. Modern game engines continue to use profiling tools to analyze resource usage and optimize performance, a practice that owes much to the pioneering work of DOOM's developers."

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

