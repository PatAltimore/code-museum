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
description: "This file handles the WAD file format, a cornerstone of DOOM's modding ecosystem, enabling custom levels and content."

summary:
  - point: "Implements WAD file handling routines for reading and caching game data"
    link: "https://en.wikipedia.org/wiki/WAD_(file_format)"
    link_label: "WAD file format"
  - point: "Introduces lump-based caching to optimize memory usage on limited hardware"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "Supports reloadable lumps, a feature aiding iterative map development"
    link: "https://en.wikipedia.org/wiki/John_Carmack"
    link_label: "John Carmack"
  - point: "Defines routines for profiling memory usage of WAD lumps"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory management"

enhancements:
  - id: "wad-file-header-and-directory"
    line_start: 19
    line_end: 20
    title: "WAD: The DNA of DOOM's Modding Revolution"
    wikipedia_url: "https://en.wikipedia.org/wiki/WAD_(file_format)"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Dir_command_in_Windows_Command_Prompt.png/330px-Dir_command_in_Windows_Command_Prompt.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Computer directory listing in a Microsoft Windows command shell. (Public domain)"
    content: "The WAD file format, introduced in DOOM, is a container for game assets like textures, sounds, and level data. These lines describe the purpose of the file: managing WAD headers, directories, and lump I/O. In 1993, this format was revolutionary, enabling players to modify the game extensively. John Carmack and John Romero envisioned DOOM as more than just a game—it was a platform. By creating a modular asset system, they empowered a generation of modders. The WAD format's simplicity and accessibility ensured its longevity, becoming a staple in the gaming community. Today, it remains a symbol of DOOM's legacy, influencing modern game engines and modding practices."
  - id: "extract-file-base"
    line_start: 85
    line_end: 114
    title: "Extracting Filenames: A Constraint of the Era"
    wikipedia_url: "https://en.wikipedia.org/wiki/Filename"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/2014_Modding_komputera_01.jpg/330px-2014_Modding_komputera_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Computer modding, wires reacting in UV light (CC BY 3.0)"
    content: "This routine extracts the base name of a file, ensuring it adheres to an 8-character limit. In the early 1990s, file systems like FAT12 and FAT16 imposed strict naming conventions, requiring programmers to work within these constraints. The function converts filenames to uppercase and truncates them if necessary, reflecting the era's hardware limitations. This approach, while simple, was crucial for compatibility across platforms. Carmack's pragmatic coding style shines here—he prioritized functionality over elegance, ensuring DOOM could run on a wide range of systems. The 8-character limit may seem archaic now, but it was a practical necessity in the early days of PC gaming."
  - id: "wad-add-file"
    line_start: 141
    line_end: 226
    title: "Adding Files: Modular Design for Modding"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mod_(video_games)"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/TestingCup-Polish-Championship-in-Software-Testing-Katowice-2016.jpg/330px-TestingCup-Polish-Championship-in-Software-Testing-Katowice-2016.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "TestingCup Polish Championship in Software Testing in Katowice, Spodek, May 2016 (CC BY-SA 3.0)"
    content: "The `W_AddFile` function is a cornerstone of DOOM's modular architecture. It allows the game to load WAD files, which contain multiple lumps (data blocks) or single lumps for standalone assets. This modularity was intentional, enabling players to add custom content without modifying the base game. The function also includes a reload feature—a hack to facilitate iterative map development during testing. In 1993, this design decision was groundbreaking, fostering a vibrant modding community. Carmack and Romero understood the importance of player creativity, embedding it into the game's DNA. This function laid the groundwork for countless mods, ensuring DOOM's enduring popularity."
  - id: "wad-reload"
    line_start: 236
    line_end: 275
    title: "Reloadable Lumps: Iterative Development Made Easy"
    wikipedia_url: "https://en.wikipedia.org/wiki/Software_testing"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Cache%2Cbasic.svg/330px-Cache%2Cbasic.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Diagram of the basic operation of a cache (CC BY-SA 3.0)"
    content: "The `W_Reload` function flushes reloadable lumps from memory and reloads the directory. This feature was a boon for developers, allowing them to iterate on map designs without restarting the game. In the early 1990s, iterative development was often hindered by slow hardware and limited debugging tools. By implementing reloadable lumps, Carmack streamlined the testing process, saving valuable time during DOOM's development. This function reflects the team's focus on efficiency and their deep understanding of the development workflow. While the feature is described as a 'fragile hack,' it underscores the team's willingness to innovate under constraints."
  - id: "wad-init-multiple-files"
    line_start: 292
    line_end: 316
    title: "Initializing Files: Building the Asset Pipeline"
    wikipedia_url: "https://en.wikipedia.org/wiki/Asset_pipeline"
    image_url: ""
    image_caption: ""
    content: "The `W_InitMultipleFiles` function initializes a list of WAD files, setting up the game's asset pipeline. It ensures that at least one file is found, reallocating memory as lumps are added. This dynamic approach was critical for DOOM's flexibility, allowing players to load custom WADs seamlessly. In 1993, memory management was a delicate art, especially on systems with limited RAM. Carmack's code reflects a deep understanding of these constraints, balancing performance with functionality. This function exemplifies the modular philosophy of DOOM, enabling the game to adapt to user-created content and laying the foundation for its enduring legacy."
  - id: "wad-cache-lump-num"
    line_start: 476
    line_end: 500
    title: "Caching Lumps: Optimizing Memory on Limited Hardware"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cache_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `W_CacheLumpNum` function implements a caching mechanism for WAD lumps, optimizing memory usage on hardware with limited resources. If a lump is not already cached, it is loaded into memory; otherwise, the tag is updated. In the early 1990s, consumer PCs often had less than 4MB of RAM, making efficient memory management essential. Carmack's approach reflects his mastery of low-level optimization, ensuring DOOM could run smoothly on modest systems. This caching strategy was not only practical but forward-thinking, influencing future game engines and their handling of dynamic assets. It highlights the team's ability to innovate within the constraints of the era."
  - id: "wad-profile"
    line_start: 522
    line_end: 575
    title: "Profiling Memory: Insights into Performance"
    wikipedia_url: "https://en.wikipedia.org/wiki/Profiling_(computer_programming)"
    image_url: ""
    image_caption: ""
    content: "The `W_Profile` function provides a mechanism to profile memory usage of WAD lumps, writing the results to a file for analysis. Profiling was a crucial tool for optimizing performance, especially on the limited hardware of the early 1990s. By tracking memory allocation and usage, Carmack and his team could identify bottlenecks and refine the game's resource management. This function reflects the team's meticulous approach to performance tuning, ensuring DOOM ran efficiently on a wide range of systems. Profiling remains a vital practice in modern software development, and this function offers a glimpse into its early implementation in the gaming industry."

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

