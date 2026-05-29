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
description: "This file defines the handling of WAD files, a format central to DOOM's modding ecosystem and efficient data management."

summary:
  - point: "Introduced the WAD file format for modular game data storage"
    link: "https://en.wikipedia.org/wiki/WAD_(file_format)"
    link_label: "WAD File Format"
  - point: "Implemented caching and reload mechanisms for game assets"
    link: "https://en.wikipedia.org/wiki/Cache_(computing)"
    link_label: "Caching"
  - point: "Optimized lump-based data access for performance on 1990s hardware"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM"

enhancements:
  - id: "toupper-string-conversion"
    line_start: 66
    line_end: 70
    title: "Why DOOM Converts Strings to Uppercase"
    wikipedia_url: "https://en.wikipedia.org/wiki/Case_sensitivity"
    image_url: ""
    image_caption: ""
    content: "The `strupr` function converts a string to uppercase, ensuring case-insensitive comparisons. This was crucial for DOOM's lump-based data system, where lump names had to be matched regardless of case. In the early 1990s, case sensitivity was a common source of bugs in software, especially when dealing with file systems that varied in their handling of case (e.g., MS-DOS vs. UNIX). By standardizing all names to uppercase, DOOM avoided mismatches and ensured consistent behavior across platforms. This approach influenced later game engines, which often adopted similar case-insensitivity strategies for asset management."
  - id: "file-length-calculation"
    line_start: 73
    line_end: 137
    title: "How DOOM Measured File Sizes Efficiently"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The `filelength` function retrieves the size of a file using `fstat`. This was a direct and efficient method to determine the size of game asset files, which were often small and accessed frequently. In the constrained environment of 1993, where memory and disk I/O were bottlenecks, minimizing overhead in file operations was critical. By relying on system calls like `fstat`, DOOM ensured compatibility with various operating systems while maintaining performance. This technique became a staple in game development, influencing asset loading strategies in later engines like Quake and Unreal."
  - id: "extract-file-base"
    line_start: 140
    line_end: 225
    title: "MS-DOS Filename Extraction and Dynamic WAD File Loading"
    wikipedia_url: "https://en.wikipedia.org/wiki/8.3_filename"
    image_url: ""
    image_caption: ""
    content: "This range contains two tightly coupled utilities. `ExtractFileBase` strips a full path down to the bare filename stem, truncated to eight uppercase characters to conform to the MS-DOS 8.3 naming convention. Because WAD lump names were derived from filenames at build time, enforcing this limit at runtime meant that a patch WAD named e1m1extra.wad was guaranteed to produce a lump called E1M1EXTR rather than silently failing or overflowing an eight-byte name field. `W_AddFile` uses the extracted base name as part of its work: it opens a file, determines whether it is a standalone single-lump resource or a proper multi-lump WAD by inspecting the four-byte magic identifier, then appends the appropriate directory entries to the global lump table. A reload-capable path for wad files prefixed with a tilde was deliberately described in the comments as a fragile hack, a rare moment of candor that reveals the pressures of id Software's shipping schedule. Together the two functions explain why DOOM's modding scene was built around strict naming conventions and why WAD files remained backward-compatible across patches and expansion packs: the engine simply concatenated lump tables and let later entries shadow earlier ones, a scheme so effective that it survived essentially unchanged through Quake and into the Source engine."
  - id: "wad-reload-mechanism"
    line_start: 230
    line_end: 274
    title: "The Reload Hack That Enabled Map Editing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mod_(video_games)"
    image_url: ""
    image_caption: ""
    content: "The `W_Reload` function flushes reloadable lumps from memory and reloads their directory. This feature was crucial for developers and modders, as it allowed changes to map files without restarting the game. However, the comments acknowledge its fragility, highlighting the challenges of implementing dynamic asset reloading in an era of limited memory and disk speed. Despite its imperfections, this mechanism empowered the early DOOM modding community, laying the groundwork for the vibrant ecosystem of custom levels and total conversions that followed."
  - id: "multiple-file-initialization"
    line_start: 278
    line_end: 315
    title: "How DOOM Handled Multiple WAD Files"
    wikipedia_url: "https://en.wikipedia.org/wiki/WAD_(file_format)"
    image_url: ""
    image_caption: ""
    content: "The `W_InitMultipleFiles` function initializes DOOM's lump system from a list of WAD files. It supports overriding lumps from earlier files, enabling modular asset management. This backward search mechanism ensured that patches or updates could replace existing assets without modifying the original files. The function's design reflects id Software's focus on flexibility and extensibility, which became a hallmark of their engines. This approach influenced later game engines, where modular file systems became standard practice for handling downloadable content and user-generated mods."
  - id: "lump-name-checking"
    line_start: 345
    line_end: 389
    title: "The Backward Search for Lump Names"
    wikipedia_url: "https://en.wikipedia.org/wiki/Hash_table"
    image_url: ""
    image_caption: ""
    content: "The `W_CheckNumForName` function searches for a lump by name, scanning backward through the lump directory. This ensures that later entries take precedence, allowing patches or custom WADs to override earlier assets. The function converts names to uppercase and splits them into integers for efficient comparison, reflecting the era's emphasis on performance optimization. This backward search mechanism became a standard in game engines, influencing asset management strategies in titles like Quake and Unreal Tournament."
  - id: "wad-profiling"
    line_start: 521
    line_end: 574
    title: "Tracking Lump Usage for Performance Insights"
    wikipedia_url: "https://en.wikipedia.org/wiki/Profiling_(computer_programming)"
    image_url: ""
    image_caption: ""
    content: "The `W_Profile` function tracks the usage of lumps in memory, categorizing them as static ('S') or purgeable ('P'). This profiling data is written to a file, providing insights into memory allocation and asset usage. In the constrained environment of 1993, understanding memory behavior was critical for optimizing performance on consumer PCs. This profiling approach reflects id Software's meticulous attention to detail, ensuring DOOM ran smoothly despite its ambitious graphics and gameplay. Profiling tools like this influenced later engines, where memory management became increasingly sophisticated."

---

```cpp
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


```