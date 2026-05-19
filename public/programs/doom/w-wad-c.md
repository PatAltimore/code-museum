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
description: "This file defines the WAD file handling system, a cornerstone of DOOM's modding ecosystem and efficient content management."

summary:
  - point: "Introduced the WAD file format for modular game content"
    link: "https://en.wikipedia.org/wiki/WAD_(file_format)"
    link_label: "WAD file format"
  - point: "Implemented caching for efficient lump management"
    link: "https://en.wikipedia.org/wiki/Cache_(computing)"
    link_label: "Cache"
  - point: "Supported reloadable lumps for dynamic map updates"
    link: "https://doomwiki.org/wiki/WAD"
    link_label: "Reloadable lumps"
  - point: "Optimized lump searching with backward precedence"
    link: "https://doomwiki.org/wiki/Lump"
    link_label: "Lump searching"
  - point: "Enabled profiling of lump usage for debugging"
    link: "https://doomwiki.org/wiki/DOOM_source_code"
    link_label: "DOOM source code"

enhancements:
  - id: "wad-file-initialization"
    line_start: 60
    line_end: 62
    title: "Global variables for lump management"
    wikipedia_url: "https://en.wikipedia.org/wiki/WAD_(file_format)"
    image_url: ""
    image_caption: ""
    content: "These global variables form the backbone of DOOM's WAD file handling system. `lumpinfo` stores metadata about each lump, while `numlumps` tracks the total count. `lumpcache` provides a mechanism for caching lumps in memory, reducing disk I/O and improving performance. In 1993, memory management was critical due to the limited RAM available on consumer PCs, often ranging from 4MB to 16MB. By centralizing lump metadata and caching, id Software ensured that DOOM could efficiently load and manage game assets, even on modest hardware. This design decision directly contributed to the game's ability to run smoothly and paved the way for the WAD format's enduring legacy in modding communities."
  - id: "string-manipulation-functions"
    line_start: 69
    line_end: 72
    title: "Simplified string manipulation for filenames"
    wikipedia_url: "https://en.wikipedia.org/wiki/String_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The `strupr` function converts a string to uppercase, ensuring case-insensitivity in filename comparisons. This was a practical solution for handling filenames across different operating systems like MS-DOS and UNIX, which had varying case sensitivity rules. In the early 1990s, cross-platform compatibility was a significant challenge for developers. By standardizing string comparisons, id Software avoided potential bugs and inconsistencies in file handling. This small but essential utility reflects the team's attention to detail and their commitment to robust code."
  - id: "extract-file-base"
    line_start: 85
    line_end: 114
    title: "Extracting base filenames for lump naming"
    wikipedia_url: "https://en.wikipedia.org/wiki/Filename"
    image_url: ""
    image_caption: ""
    content: "The `ExtractFileBase` function isolates the base name of a file, stripping away directory paths and extensions. This ensures that lump names are concise and standardized, adhering to the 8-character limit imposed by the WAD format. In the early 1990s, file naming conventions were influenced by the limitations of FAT file systems, which supported short filenames. By enforcing this restriction, id Software maintained compatibility with existing systems while optimizing lump identification. This function exemplifies the team's ability to balance technical constraints with practical needs, enabling efficient asset management in DOOM."
  - id: "wad-file-addition"
    line_start: 141
    line_end: 226
    title: "Adding WAD files and lumps dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/WAD_(file_format)"
    image_url: ""
    image_caption: ""
    content: "The `W_AddFile` function dynamically loads WAD files and their lumps into memory. It supports both single lump files and multi-lump WAD files, distinguishing between IWADs (core game assets) and PWADs (custom levels and mods). This flexibility was crucial for DOOM's modding community, allowing users to create and load custom content seamlessly. The function also includes a reload mechanism for dynamic map updates, though the developers themselves acknowledged its fragility. In 1993, this approach was groundbreaking, as it empowered players to extend the game's lifespan through user-generated content. The WAD format became a cornerstone of DOOM's legacy, influencing game design and modding for decades."
  - id: "wad-reload-mechanism"
    line_start: 236
    line_end: 274
    title: "Reloading lumps for dynamic updates"
    wikipedia_url: "https://doomwiki.org/wiki/WAD"
    image_url: ""
    image_caption: ""
    content: "The `W_Reload` function flushes reloadable lumps from memory and reloads their metadata. This feature was designed to facilitate dynamic updates to game maps, enabling developers and modders to iterate quickly. However, the reload mechanism was described as a 'fragile hack,' reflecting the experimental nature of this feature. In the early 1990s, dynamic content updates were rare in gaming, as most titles relied on static assets. By implementing this capability, id Software pushed the boundaries of what was possible, laying the groundwork for more sophisticated modding tools in future games."
  - id: "multiple-file-initialization"
    line_start: 292
    line_end: 316
    title: "Initializing multiple WAD files"
    wikipedia_url: "https://doomwiki.org/wiki/WAD"
    image_url: ""
    image_caption: ""
    content: "The `W_InitMultipleFiles` function initializes the WAD handling system with a list of files. It supports backward precedence in lump searching, ensuring that later files override earlier ones. This design choice was critical for modding, as it allowed users to layer custom content over the base game. In the early 1990s, this level of flexibility was rare, as most games did not support user modifications. By enabling multiple file initialization, id Software empowered players to personalize their experience, fostering a vibrant modding community that remains active to this day."
  - id: "lump-caching-system"
    line_start: 476
    line_end: 500
    title: "Efficient caching for lump data"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cache_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `W_CacheLumpNum` function implements a caching system for lump data, reducing redundant disk reads and improving performance. If a lump is not already cached, it is loaded into memory; otherwise, its memory tag is updated. In 1993, efficient memory management was essential due to the limited resources of consumer PCs. By caching lumps, id Software ensured that DOOM could deliver fast-paced gameplay without interruptions. This technique reflects the team's deep understanding of hardware constraints and their ability to optimize for performance, contributing to DOOM's reputation as a technical marvel."
  - id: "wad-profiling-tool"
    line_start: 522
    line_end: 575
    title: "Profiling lump usage for debugging"
    wikipedia_url: "https://doomwiki.org/wiki/DOOM_source_code"
    image_url: ""
    image_caption: ""
    content: "The `W_Profile` function provides a profiling tool for lump usage, outputting data to a text file for analysis. It tracks whether lumps are static ('S') or purgeable ('P'), helping developers identify memory management issues. In the early 1990s, debugging tools were less sophisticated than they are today, so custom solutions like this were invaluable. By profiling lump usage, id Software could optimize performance and ensure stability, even on low-end hardware. This function highlights the team's commitment to quality and their willingness to innovate in pursuit of better debugging practices."

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

