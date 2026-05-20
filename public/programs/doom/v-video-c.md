---
title: "v_video.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/v_video.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/v_video.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "v-video-c"
order: 39
description: "This file handles video-related operations in DOOM, including gamma correction, drawing patches, and managing screen buffers."

summary:
  - point: "Introduces gamma correction tables for visual adjustments"
    link: "https://en.wikipedia.org/wiki/Gamma_correction"
    link_label: "Gamma Correction"
  - point: "Implements efficient screen buffer manipulation routines"
    link: "https://en.wikipedia.org/wiki/Framebuffer"
    link_label: "Framebuffer"
  - point: "Optimizes drawing operations for low-level graphics"
    link: "https://en.wikipedia.org/wiki/Graphics_processing_unit"
    link_label: "Graphics Processing Unit"
  - point: "Uses memory allocation techniques tailored for DOS systems"
    link: "https://en.wikipedia.org/wiki/DOS_memory_management"
    link_label: "DOS Memory Management"
  - point: "Includes range-checking for robust error handling"
    link: "https://en.wikipedia.org/wiki/Error_handling"
    link_label: "Error Handling"

enhancements:
  - id: "gamma-correction-lut"
    line_start: 50
    line_end: 133
    title: "The Gamma Tables That Brightened DOOM"
    wikipedia_url: "https://en.wikipedia.org/wiki/Gamma_correction"
    image_url: ""
    image_caption: ""
    content: "This section defines gamma correction lookup tables (LUTs) that adjust the brightness of the game's visuals. Gamma correction is crucial for ensuring consistent visual output across different monitors, which varied widely in brightness and color reproduction in the early 1990s. The tables provide predefined mappings for pixel brightness levels, allowing players to select from five levels of gamma correction. This was a practical solution to hardware inconsistencies, as monitors of the era lacked standardized brightness controls. The tables are hardcoded, reflecting the era's preference for performance over flexibility. Gamma correction in DOOM influenced later games, which adopted similar techniques for visual customization. Today, gamma adjustment is a standard feature in graphics settings, but DOOM's implementation was among the earliest examples in gaming."
  - id: "mark-dirty-rectangles"
    line_start: 139
    line_end: 151
    title: "Marking Dirty Rectangles for Efficiency"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dirty_rectangle"
    image_url: ""
    image_caption: ""
    content: "The `V_MarkRect` function marks rectangular regions of the screen that need to be updated. This technique, known as dirty rectangle management, minimizes the computational cost of redrawing the entire screen by focusing only on areas that have changed. In DOOM, this was critical for maintaining high frame rates on hardware with limited processing power, such as 386 and 486 PCs. By marking and tracking these regions, the game could optimize rendering operations, ensuring smooth gameplay without unnecessary overhead. This approach was widely adopted in subsequent games and graphical applications, influencing techniques in modern rendering engines like Unity and Unreal Engine."
  - id: "copy-rectangles-between-screens"
    line_start: 154
    line_end: 196
    title: "Copying Rectangles Across Screen Buffers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Framebuffer"
    image_url: ""
    image_caption: ""
    content: "The `V_CopyRect` function copies rectangular blocks of pixels from one screen buffer to another. This operation is essential for managing multiple screen buffers, which DOOM uses to handle different views or layers of graphics. The function includes range-checking to prevent out-of-bounds errors, ensuring robust handling of screen dimensions. By leveraging memory manipulation techniques like `memcpy`, the function achieves high performance, a necessity for real-time rendering on early PCs. Screen buffer management became a foundational concept in graphics programming, influencing later developments in framebuffers and GPU architectures."
  - id: "draw-patch-to-screen"
    line_start: 199
    line_end: 263
    title: "Drawing Patches: DOOM's Modular Graphics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `V_DrawPatch` function renders graphical patches (sprites) onto the screen. Patches in DOOM are modular graphic elements, such as textures or UI components, stored in a column-based format. This function iterates through columns and posts within a patch, drawing pixel data directly to the screen buffer. The modular design of patches allowed DOOM to efficiently manage and render complex scenes, a key innovation in its graphics engine. The function also includes range-checking to handle errors gracefully. DOOM's patch-based rendering influenced sprite handling in later 2D and 3D games, paving the way for modular asset systems in modern engines."
  - id: "draw-patch-flipped"
    line_start: 265
    line_end: 327
    title: "Flipping Patches: Mirroring Graphics in DOOM"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mirroring_(graphics)"
    image_url: ""
    image_caption: ""
    content: "The `V_DrawPatchFlipped` function renders patches to the screen while flipping them horizontally. This capability is useful for creating mirrored graphics, such as symmetrical UI elements or character sprites. The function adjusts column offsets to reverse the drawing order, ensuring the patch appears flipped. Mirroring graphics was a clever way to reuse assets without duplicating data, saving memory and storage space on constrained hardware. This technique became a standard practice in game development, influencing asset optimization strategies in later games and engines."
  - id: "initialize-screen-buffers"
    line_start: 479
    line_end: 493
    title: "Allocating Screen Buffers in Low DOS Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOS_memory_management"
    image_url: ""
    image_caption: ""
    content: "The `V_Init` function initializes screen buffers by allocating memory in low DOS memory. This was a deliberate choice to optimize memory usage on PCs running MS-DOS, which had strict memory constraints. By allocating a contiguous block of memory for screen buffers, DOOM ensured efficient access and reduced fragmentation. The function divides the allocated memory into four buffers, corresponding to different views or layers in the game. Memory management was a critical aspect of programming for DOS systems, and DOOM's approach influenced techniques in other games of the era. Today, memory allocation strategies have evolved, but the principles of efficient buffer management remain relevant in modern graphics programming."

---

```c
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
//	Gamma correction LUT stuff.
//	Functions to draw patches (by post) directly to screen.
//	Functions to blit a block to the screen.
//
//-----------------------------------------------------------------------------


static const char
rcsid[] = "$Id: v_video.c,v 1.5 1997/02/03 22:45:13 b1 Exp $";


#include "i_system.h"
#include "r_local.h"

#include "doomdef.h"
#include "doomdata.h"

#include "m_bbox.h"
#include "m_swap.h"

#include "v_video.h"


// Each screen is [SCREENWIDTH*SCREENHEIGHT]; 
byte*				screens[5];	
 
int				dirtybox[4]; 



// Now where did these came from?
byte gammatable[5][256] =
{
    {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,
     17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,
     33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,
     49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,
     65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,
     81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,
     97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,
     113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,
     128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,
     144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,
     160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,
     176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,
     192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,
     208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,
     224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,
     240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255},

    {2,4,5,7,8,10,11,12,14,15,16,18,19,20,21,23,24,25,26,27,29,30,31,
     32,33,34,36,37,38,39,40,41,42,44,45,46,47,48,49,50,51,52,54,55,
     56,57,58,59,60,61,62,63,64,65,66,67,69,70,71,72,73,74,75,76,77,
     78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,
     99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,
     115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,129,
     130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,
     146,147,148,148,149,150,151,152,153,154,155,156,157,158,159,160,
     161,162,163,163,164,165,166,167,168,169,170,171,172,173,174,175,
     175,176,177,178,179,180,181,182,183,184,185,186,186,187,188,189,
     190,191,192,193,194,195,196,196,197,198,199,200,201,202,203,204,
     205,205,206,207,208,209,210,211,212,213,214,214,215,216,217,218,
     219,220,221,222,222,223,224,225,226,227,228,229,230,230,231,232,
     233,234,235,236,237,237,238,239,240,241,242,243,244,245,245,246,
     247,248,249,250,251,252,252,253,254,255},

    {4,7,9,11,13,15,17,19,21,22,24,26,27,29,30,32,33,35,36,38,39,40,42,
     43,45,46,47,48,50,51,52,54,55,56,57,59,60,61,62,63,65,66,67,68,69,
     70,72,73,74,75,76,77,78,79,80,82,83,84,85,86,87,88,89,90,91,92,93,
     94,95,96,97,98,100,101,102,103,104,105,106,107,108,109,110,111,112,
     113,114,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,
     129,130,131,132,133,133,134,135,136,137,138,139,140,141,142,143,144,
     144,145,146,147,148,149,150,151,152,153,153,154,155,156,157,158,159,
     160,160,161,162,163,164,165,166,166,167,168,169,170,171,172,172,173,
     174,175,176,177,178,178,179,180,181,182,183,183,184,185,186,187,188,
     188,189,190,191,192,193,193,194,195,196,197,197,198,199,200,201,201,
     202,203,204,205,206,206,207,208,209,210,210,211,212,213,213,214,215,
     216,217,217,218,219,220,221,221,222,223,224,224,225,226,227,228,228,
     229,230,231,231,232,233,234,235,235,236,237,238,238,239,240,241,241,
     242,243,244,244,245,246,247,247,248,249,250,251,251,252,253,254,254,
     255},

    {8,12,16,19,22,24,27,29,31,34,36,38,40,41,43,45,47,49,50,52,53,55,
     57,58,60,61,63,64,65,67,68,70,71,72,74,75,76,77,79,80,81,82,84,85,
     86,87,88,90,91,92,93,94,95,96,98,99,100,101,102,103,104,105,106,107,
     108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,
     125,126,127,128,129,130,131,132,133,134,135,135,136,137,138,139,140,
     141,142,143,143,144,145,146,147,148,149,150,150,151,152,153,154,155,
     155,156,157,158,159,160,160,161,162,163,164,165,165,166,167,168,169,
     169,170,171,172,173,173,174,175,176,176,177,178,179,180,180,181,182,
     183,183,184,185,186,186,187,188,189,189,190,191,192,192,193,194,195,
     195,196,197,197,198,199,200,200,201,202,202,203,204,205,205,206,207,
     207,208,209,210,210,211,212,212,213,214,214,215,216,216,217,218,219,
     219,220,221,221,222,223,223,224,225,225,226,227,227,228,229,229,230,
     231,231,232,233,233,234,235,235,236,237,237,238,238,239,240,240,241,
     242,242,243,244,244,245,246,246,247,247,248,249,249,250,251,251,252,
     253,253,254,254,255},

    {16,23,28,32,36,39,42,45,48,50,53,55,57,60,62,64,66,68,69,71,73,75,76,
     78,80,81,83,84,86,87,89,90,92,93,94,96,97,98,100,101,102,103,105,106,
     107,108,109,110,112,113,114,115,116,117,118,119,120,121,122,123,124,
     125,126,128,128,129,130,131,132,133,134,135,136,137,138,139,140,141,
     142,143,143,144,145,146,147,148,149,150,150,151,152,153,154,155,155,
     156,157,158,159,159,160,161,162,163,163,164,165,166,166,167,168,169,
     169,170,171,172,172,173,174,175,175,176,177,177,178,179,180,180,181,
     182,182,183,184,184,185,186,187,187,188,189,189,190,191,191,192,193,
     193,194,195,195,196,196,197,198,198,199,200,200,201,202,202,203,203,
     204,205,205,206,207,207,208,208,209,210,210,211,211,212,213,213,214,
     214,215,216,216,217,217,218,219,219,220,220,221,221,222,223,223,224,
     224,225,225,226,227,227,228,228,229,229,230,230,231,232,232,233,233,
     234,234,235,235,236,236,237,237,238,239,239,240,240,241,241,242,242,
     243,243,244,244,245,245,246,246,247,247,248,248,249,249,250,250,251,
     251,252,252,253,254,254,255,255}
};



int	usegamma;
			 
//
// V_MarkRect 
// 
void
V_MarkRect
( int		x,
  int		y,
  int		width,
  int		height ) 
{ 
    M_AddToBox (dirtybox, x, y); 
    M_AddToBox (dirtybox, x+width-1, y+height-1); 
} 
 

//
// V_CopyRect 
// 
void
V_CopyRect
( int		srcx,
  int		srcy,
  int		srcscrn,
  int		width,
  int		height,
  int		destx,
  int		desty,
  int		destscrn ) 
{ 
    byte*	src;
    byte*	dest; 
	 
#ifdef RANGECHECK 
    if (srcx<0
	||srcx+width >SCREENWIDTH
	|| srcy<0
	|| srcy+height>SCREENHEIGHT 
	||destx<0||destx+width >SCREENWIDTH
	|| desty<0
	|| desty+height>SCREENHEIGHT 
	|| (unsigned)srcscrn>4
	|| (unsigned)destscrn>4)
    {
	I_Error ("Bad V_CopyRect");
    }
#endif 
    V_MarkRect (destx, desty, width, height); 
	 
    src = screens[srcscrn]+SCREENWIDTH*srcy+srcx; 
    dest = screens[destscrn]+SCREENWIDTH*desty+destx; 

    for ( ; height>0 ; height--) 
    { 
	memcpy (dest, src, width); 
	src += SCREENWIDTH; 
	dest += SCREENWIDTH; 
    } 
} 
 

//
// V_DrawPatch
// Masks a column based masked pic to the screen. 
//
void
V_DrawPatch
( int		x,
  int		y,
  int		scrn,
  patch_t*	patch ) 
{ 

    int		count;
    int		col; 
    column_t*	column; 
    byte*	desttop;
    byte*	dest;
    byte*	source; 
    int		w; 
	 
    y -= SHORT(patch->topoffset); 
    x -= SHORT(patch->leftoffset); 
#ifdef RANGECHECK 
    if (x<0
	||x+SHORT(patch->width) >SCREENWIDTH
	|| y<0
	|| y+SHORT(patch->height)>SCREENHEIGHT 
	|| (unsigned)scrn>4)
    {
      fprintf( stderr, "Patch at %d,%d exceeds LFB\n", x,y );
      // No I_Error abort - what is up with TNT.WAD?
      fprintf( stderr, "V_DrawPatch: bad patch (ignored)\n");
      return;
    }
#endif 
 
    if (!scrn)
	V_MarkRect (x, y, SHORT(patch->width), SHORT(patch->height)); 

    col = 0; 
    desttop = screens[scrn]+y*SCREENWIDTH+x; 
	 
    w = SHORT(patch->width); 

    for ( ; col<w ; x++, col++, desttop++)
    { 
	column = (column_t *)((byte *)patch + LONG(patch->columnofs[col])); 
 
	// step through the posts in a column 
	while (column->topdelta != 0xff ) 
	{ 
	    source = (byte *)column + 3; 
	    dest = desttop + column->topdelta*SCREENWIDTH; 
	    count = column->length; 
			 
	    while (count--) 
	    { 
		*dest = *source++; 
		dest += SCREENWIDTH; 
	    } 
	    column = (column_t *)(  (byte *)column + column->length 
				    + 4 ); 
	} 
    }			 
} 
 
//
// V_DrawPatchFlipped 
// Masks a column based masked pic to the screen.
// Flips horizontally, e.g. to mirror face.
//
void
V_DrawPatchFlipped
( int		x,
  int		y,
  int		scrn,
  patch_t*	patch ) 
{ 

    int		count;
    int		col; 
    column_t*	column; 
    byte*	desttop;
    byte*	dest;
    byte*	source; 
    int		w; 
	 
    y -= SHORT(patch->topoffset); 
    x -= SHORT(patch->leftoffset); 
#ifdef RANGECHECK 
    if (x<0
	||x+SHORT(patch->width) >SCREENWIDTH
	|| y<0
	|| y+SHORT(patch->height)>SCREENHEIGHT 
	|| (unsigned)scrn>4)
    {
      fprintf( stderr, "Patch origin %d,%d exceeds LFB\n", x,y );
      I_Error ("Bad V_DrawPatch in V_DrawPatchFlipped");
    }
#endif 
 
    if (!scrn)
	V_MarkRect (x, y, SHORT(patch->width), SHORT(patch->height)); 

    col = 0; 
    desttop = screens[scrn]+y*SCREENWIDTH+x; 
	 
    w = SHORT(patch->width); 

    for ( ; col<w ; x++, col++, desttop++) 
    { 
	column = (column_t *)((byte *)patch + LONG(patch->columnofs[w-1-col])); 
 
	// step through the posts in a column 
	while (column->topdelta != 0xff ) 
	{ 
	    source = (byte *)column + 3; 
	    dest = desttop + column->topdelta*SCREENWIDTH; 
	    count = column->length; 
			 
	    while (count--) 
	    { 
		*dest = *source++; 
		dest += SCREENWIDTH; 
	    } 
	    column = (column_t *)(  (byte *)column + column->length 
				    + 4 ); 
	} 
    }			 
} 
 


//
// V_DrawPatchDirect
// Draws directly to the screen on the pc. 
//
void
V_DrawPatchDirect
( int		x,
  int		y,
  int		scrn,
  patch_t*	patch ) 
{
    V_DrawPatch (x,y,scrn, patch); 

    /*
    int		count;
    int		col; 
    column_t*	column; 
    byte*	desttop;
    byte*	dest;
    byte*	source; 
    int		w; 
	 
    y -= SHORT(patch->topoffset); 
    x -= SHORT(patch->leftoffset); 

#ifdef RANGECHECK 
    if (x<0
	||x+SHORT(patch->width) >SCREENWIDTH
	|| y<0
	|| y+SHORT(patch->height)>SCREENHEIGHT 
	|| (unsigned)scrn>4)
    {
	I_Error ("Bad V_DrawPatchDirect");
    }
#endif 
 
    //	V_MarkRect (x, y, SHORT(patch->width), SHORT(patch->height)); 
    desttop = destscreen + y*SCREENWIDTH/4 + (x>>2); 
	 
    w = SHORT(patch->width); 
    for ( col = 0 ; col<w ; col++) 
    { 
	outp (SC_INDEX+1,1<<(x&3)); 
	column = (column_t *)((byte *)patch + LONG(patch->columnofs[col])); 
 
	// step through the posts in a column 
	 
	while (column->topdelta != 0xff ) 
	{ 
	    source = (byte *)column + 3; 
	    dest = desttop + column->topdelta*SCREENWIDTH/4; 
	    count = column->length; 
 
	    while (count--) 
	    { 
		*dest = *source++; 
		dest += SCREENWIDTH/4; 
	    } 
	    column = (column_t *)(  (byte *)column + column->length 
				    + 4 ); 
	} 
	if ( ((++x)&3) == 0 ) 
	    desttop++;	// go to next byte, not next plane 
    }*/ 
} 
 


//
// V_DrawBlock
// Draw a linear block of pixels into the view buffer.
//
void
V_DrawBlock
( int		x,
  int		y,
  int		scrn,
  int		width,
  int		height,
  byte*		src ) 
{ 
    byte*	dest; 
	 
#ifdef RANGECHECK 
    if (x<0
	||x+width >SCREENWIDTH
	|| y<0
	|| y+height>SCREENHEIGHT 
	|| (unsigned)scrn>4 )
    {
	I_Error ("Bad V_DrawBlock");
    }
#endif 
 
    V_MarkRect (x, y, width, height); 
 
    dest = screens[scrn] + y*SCREENWIDTH+x; 

    while (height--) 
    { 
	memcpy (dest, src, width); 
	src += width; 
	dest += SCREENWIDTH; 
    } 
} 
 


//
// V_GetBlock
// Gets a linear block of pixels from the view buffer.
//
void
V_GetBlock
( int		x,
  int		y,
  int		scrn,
  int		width,
  int		height,
  byte*		dest ) 
{ 
    byte*	src; 
	 
#ifdef RANGECHECK 
    if (x<0
	||x+width >SCREENWIDTH
	|| y<0
	|| y+height>SCREENHEIGHT 
	|| (unsigned)scrn>4 )
    {
	I_Error ("Bad V_DrawBlock");
    }
#endif 
 
    src = screens[scrn] + y*SCREENWIDTH+x; 

    while (height--) 
    { 
	memcpy (dest, src, width); 
	src += SCREENWIDTH; 
	dest += width; 
    } 
} 




//
// V_Init
// 
void V_Init (void) 
{ 
    int		i;
    byte*	base;
		
    // stick these in low dos memory on PCs

    base = I_AllocLow (SCREENWIDTH*SCREENHEIGHT*4);

    for (i=0 ; i<4 ; i++)
	screens[i] = base + i*SCREENWIDTH*SCREENHEIGHT;
}
```
