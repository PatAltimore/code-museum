---
title: "ID_VL.C"
program: "Wolfenstein 3D"
program_slug: "wolf3d"
file_path: "WOLFSRC/ID_VL.C"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/wolf3d/blob/master/WOLFSRC/ID_VL.C"
year: 1992
author: "John Carmack, John Romero, Tom Hall"
slug: "id-vl-c"
order: 15
description: "This file contains the video and graphics routines for Wolfenstein 3D, showcasing the techniques used to manipulate VGA hardware for fast and immersive gameplay."

summary:
  - point: "Direct VGA register manipulation for performance"
    link: "https://en.wikipedia.org/wiki/VGA"
    link_label: "VGA"
  - point: "Palette fading and manipulation techniques"
    link: "https://en.wikipedia.org/wiki/Color_palette"
    link_label: "Color Palette"
  - point: "Optimized memory operations for screen rendering"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Use of inline assembly for hardware-level control"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"
  - point: "Efficient pixel and line drawing algorithms"
    link: "https://en.wikipedia.org/wiki/Computer_graphics"
    link_label: "Computer Graphics"

enhancements:
  - id: "palette-data-structure"
    line_start: 28
    line_end: 32
    title: "Why Palette Data Was Key to VGA"
    wikipedia_url: "https://en.wikipedia.org/wiki/Color_palette"
    image_url: ""
    image_caption: ""
    content: "This section defines two 256x3 arrays, `palette1` and `palette2`, which store RGB color values for VGA graphics. These palettes were critical for controlling the appearance of the game, as VGA hardware allowed only 256 colors to be displayed simultaneously. By manipulating these palettes, the developers could create effects like fading, color transitions, and dynamic lighting. In 1992, VGA was the dominant graphics standard for MS-DOS games, and efficient use of its capabilities was essential for achieving smooth and visually appealing gameplay. The approach here influenced later games that relied on similar palette manipulation techniques for visual effects, including Doom and Quake."
  - id: "vga-plane-mode-switch"
    line_start: 107
    line_end: 122
    title: "Switching VGA to Plane Mode for Speed"
    wikipedia_url: "https://en.wikipedia.org/wiki/VGA"
    image_url: ""
    image_caption: ""
    content: "The `VL_SetVGAPlaneMode` function switches the VGA graphics card into a mode where the screen is divided into four memory planes. This mode allows for more efficient rendering by enabling direct access to specific planes. The function uses BIOS interrupt 0x10 to set the graphics mode and then adjusts VGA registers to optimize rendering. Plane mode was a common technique in the early 1990s for maximizing performance on hardware with limited memory bandwidth. By leveraging this mode, Wolfenstein 3D achieved its signature fast-paced gameplay. This technique influenced other developers working on VGA-based games, setting a standard for efficient graphics programming."
  - id: "clear-video-buffer"
    line_start: 139
    line_end: 172
    title: "Clearing the Video Buffer in One Sweep"
    wikipedia_url: "https://en.wikipedia.org/wiki/Computer_graphics"
    image_url: ""
    image_caption: ""
    content: "The `VL_ClearVideo` function fills the entire video buffer with a single color. It uses inline assembly to manipulate VGA registers directly, ensuring that all four planes are written simultaneously. This approach bypasses the slower BIOS routines and directly accesses hardware, which was crucial for maintaining high frame rates in Wolfenstein 3D. The use of `rep stosw` in assembly highlights the emphasis on speed and efficiency. This technique was a hallmark of id Software's programming style and became a model for other developers seeking to optimize graphics performance on MS-DOS systems."
  - id: "palette-fade-out"
    line_start: 438
    line_end: 489
    title: "How Wolfenstein Faded to Black"
    wikipedia_url: "https://en.wikipedia.org/wiki/Color_palette"
    image_url: ""
    image_caption: ""
    content: "The `VL_FadeOut` function gradually transitions the screen's palette to a single color over a specified number of steps. This effect was used to create dramatic transitions, such as fading to black during level changes or game over screens. The function calculates intermediate palette values for each step and updates the VGA palette accordingly. This technique relied on direct manipulation of VGA registers and careful timing to avoid visual artifacts. Palette fading became a standard feature in games of the era, and its implementation here influenced later titles like Doom and Duke Nukem 3D."
  - id: "pixel-drawing-algorithm"
    line_start: 593
    line_end: 609
    title: "The Algorithm Behind Single Pixel Plotting"
    wikipedia_url: "https://en.wikipedia.org/wiki/Computer_graphics"
    image_url: ""
    image_caption: ""
    content: "The `VL_Plot` function draws a single pixel to the screen at the specified coordinates. It uses a combination of bit masking and direct memory access to manipulate the VGA buffer efficiently. The function ensures that only the relevant plane is updated, minimizing the impact on performance. This low-level approach to pixel manipulation was necessary for creating detailed graphics on hardware with limited capabilities. The techniques used here laid the groundwork for more advanced rendering algorithms in later games and graphics engines."
  - id: "horizontal-line-drawing"
    line_start: 612
    line_end: 654
    title: "Drawing Horizontal Lines with Precision"
    wikipedia_url: "https://en.wikipedia.org/wiki/Computer_graphics"
    image_url: ""
    image_caption: ""
    content: "The `VL_Hlin` function draws a horizontal line on the screen. It calculates the starting and ending positions, applies bit masks for partial bytes, and uses direct memory access to fill the line efficiently. By optimizing for the VGA's memory layout, the function minimizes the number of operations required to render a line. This technique was essential for creating the game's walls and other horizontal elements quickly. The approach demonstrated here influenced the development of more advanced line-drawing algorithms in later graphics engines."
  - id: "memory-to-screen-transfer"
    line_start: 781
    line_end: 811
    title: "Transferring Memory Blocks to the Screen"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `VL_MemToScreen` function transfers a block of data from memory to the screen. It divides the data into planes and uses direct memory access to write each plane to the VGA buffer. This approach was crucial for rendering textures and other graphical elements efficiently. By leveraging the VGA's plane mode, the function achieves high performance while maintaining visual fidelity. The techniques used here were foundational for later games that relied on efficient memory-to-screen transfers, such as Doom and Quake."
  - id: "tile-string-rendering"
    line_start: 952
    line_end: 993
    title: "Rendering Tile-Based Strings on VGA"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tile-based_video_game"
    image_url: ""
    image_caption: ""
    content: "The `VL_DrawTile8String` function renders a string of characters using 8x8 tiles stored in memory. Each character is drawn by copying its corresponding tile data to the VGA buffer, plane by plane. This method was used for displaying text in the game's menus and HUD. By optimizing the rendering process for the VGA's plane mode, the function achieves high performance while maintaining visual clarity. Tile-based rendering was a common technique in early video games and influenced the design of later graphics engines that supported text and UI elements."
  - id: "vga-memory-write-loop"
    line_start: 1051
    line_end: 1060
    title: "How Assembly Made VGA Graphics Fly"
    wikipedia_url: "https://en.wikipedia.org/wiki/VGA"
    image_url: ""
    image_caption: ""
    content: "This section of assembly code directly manipulates VGA memory to render graphics efficiently. The sequence of instructions, including `lodsw`, `mov`, and `add`, is part of a loop that writes pixel data to the screen by transferring data from a source to a destination pointer (`di`). The use of `mov ds, ax` sets the data segment register to point to the stack segment, ensuring proper memory access. At the time, VGA graphics were limited to specific modes and memory layouts, requiring developers to work directly with hardware registers and memory addresses. John Carmack's mastery of assembly allowed Wolfenstein 3D to achieve smooth scrolling and fast rendering, critical for its immersive gameplay. This approach was born out of necessity, as MS-DOS lacked high-level APIs for graphics. By bypassing the operating system and interacting directly with hardware, id Software could push the limits of what VGA could achieve. This technique influenced later games and engines, including Doom and Quake, which continued to leverage low-level optimization for performance."
  - id: "tile-string-dimensions"
    line_start: 1063
    line_end: 1075
    title: "The Math Behind Tile-Based Text Rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tile-based_rendering"
    image_url: ""
    image_caption: ""
    content: "The `VL_SizeTile8String` function calculates the dimensions of a string rendered in an 8x8 tile-based font. It sets the height to a fixed value of 8 pixels and computes the width as 8 times the string's length. This straightforward calculation reflects the tile-based rendering approach used in Wolfenstein 3D, where text and graphics were often aligned to fixed grid sizes for simplicity and performance. At the time, tile-based rendering was a common technique in games, as it allowed developers to optimize memory usage and reduce computational overhead. By predefining tile sizes, the engine could quickly calculate positions and dimensions without complex math. This function exemplifies id Software's focus on efficiency, ensuring that even text rendering adhered to the game's fast-paced nature. The concept of tile-based rendering influenced later engines and games, particularly in the early 1990s, when hardware constraints necessitated clever optimization strategies. Today, similar principles are seen in modern game engines, albeit with far greater flexibility and power."

---

```asm
// ID_VL.C

#include <dos.h>
#include <alloc.h>
#include <mem.h>
#include <string.h>
#include "ID_HEAD.H"
#include "ID_VL.H"
#pragma hdrstop

//
// SC_INDEX is expected to stay at SC_MAPMASK for proper operation
//

unsigned	bufferofs;
unsigned	displayofs,pelpan;

unsigned	screenseg=SCREENSEG;		// set to 0xa000 for asm convenience

unsigned	linewidth;
unsigned	ylookup[MAXSCANLINES];

boolean		screenfaded;
unsigned	bordercolor;

boolean		fastpalette;				// if true, use outsb to set

byte		far	palette1[256][3],far palette2[256][3];

//===========================================================================

// asm

int	 VL_VideoID (void);
void VL_SetCRTC (int crtc);
void VL_SetScreen (int crtc, int pelpan);
void VL_WaitVBL (int vbls);

//===========================================================================


/*
=======================
=
= VL_Startup
=
=======================
*/

#if 0
void	VL_Startup (void)
{
	if ( !MS_CheckParm ("HIDDENCARD") && VL_VideoID () != 5)
		MS_Quit ("You need a VGA graphics card to run this!");

	asm	cld;				// all string instructions assume forward
}

#endif

/*
=======================
=
= VL_Startup	// WOLFENSTEIN HACK
=
=======================
*/

static	char *ParmStrings[] = {"HIDDENCARD",""};

void	VL_Startup (void)
{
	int i,videocard;

	asm	cld;

	videocard = VL_VideoID ();
	for (i = 1;i < _argc;i++)
		if (US_CheckParm(_argv[i],ParmStrings) == 0)
		{
			videocard = 5;
			break;
		}

	if (videocard != 5)
Quit ("Improper video card!  If you really have a VGA card that I am not \n"
	  "detecting, use the -HIDDENCARD command line parameter!");

}



/*
=======================
=
= VL_Shutdown
=
=======================
*/

void	VL_Shutdown (void)
{
	VL_SetTextMode ();
}


/*
=======================
=
= VL_SetVGAPlaneMode
=
=======================
*/

void	VL_SetVGAPlaneMode (void)
{
asm	mov	ax,0x13
asm	int	0x10
	VL_DePlaneVGA ();
	VGAMAPMASK(15);
	VL_SetLineWidth (40);
}


/*
=======================
=
= VL_SetTextMode
=
=======================
*/

void	VL_SetTextMode (void)
{
asm	mov	ax,3
asm	int	0x10
}

//===========================================================================

/*
=================
=
= VL_ClearVideo
=
= Fill the entire video buffer with a given color
=
=================
*/

void VL_ClearVideo (byte color)
{
asm	mov	dx,GC_INDEX
asm	mov	al,GC_MODE
asm	out	dx,al
asm	inc	dx
asm	in	al,dx
asm	and	al,0xfc				// write mode 0 to store directly to video
asm	out	dx,al

asm	mov	dx,SC_INDEX
asm	mov	ax,SC_MAPMASK+15*256
asm	out	dx,ax				// write through all four planes

asm	mov	ax,SCREENSEG
asm	mov	es,ax
asm	mov	al,[color]
asm	mov	ah,al
asm	mov	cx,0x8000			// 0x8000 words, clearing 8 video bytes/word
asm	xor	di,di
asm	rep	stosw
}


/*
=============================================================================

			VGA REGISTER MANAGEMENT ROUTINES

=============================================================================
*/


/*
=================
=
= VL_DePlaneVGA
=
=================
*/

void VL_DePlaneVGA (void)
{

//
// change CPU addressing to non linear mode
//

//
// turn off chain 4 and odd/even
//
	outportb (SC_INDEX,SC_MEMMODE);
	outportb (SC_INDEX+1,(inportb(SC_INDEX+1)&~8)|4);

	outportb (SC_INDEX,SC_MAPMASK);		// leave this set throughought

//
// turn off odd/even and set write mode 0
//
	outportb (GC_INDEX,GC_MODE);
	outportb (GC_INDEX+1,inportb(GC_INDEX+1)&~0x13);

//
// turn off chain
//
	outportb (GC_INDEX,GC_MISCELLANEOUS);
	outportb (GC_INDEX+1,inportb(GC_INDEX+1)&~2);

//
// clear the entire buffer space, because int 10h only did 16 k / plane
//
	VL_ClearVideo (0);

//
// change CRTC scanning from doubleword to byte mode, allowing >64k scans
//
	outportb (CRTC_INDEX,CRTC_UNDERLINE);
	outportb (CRTC_INDEX+1,inportb(CRTC_INDEX+1)&~0x40);

	outportb (CRTC_INDEX,CRTC_MODE);
	outportb (CRTC_INDEX+1,inportb(CRTC_INDEX+1)|0x40);
}

//===========================================================================

/*
====================
=
= VL_SetLineWidth
=
= Line witdh is in WORDS, 40 words is normal width for vgaplanegr
=
====================
*/

void VL_SetLineWidth (unsigned width)
{
	int i,offset;

//
// set wide virtual screen
//
	outport (CRTC_INDEX,CRTC_OFFSET+width*256);

//
// set up lookup tables
//
	linewidth = width*2;

	offset = 0;

	for (i=0;i<MAXSCANLINES;i++)
	{
		ylookup[i]=offset;
		offset += linewidth;
	}
}

/*
====================
=
= VL_SetSplitScreen
=
====================
*/

void VL_SetSplitScreen (int linenum)
{
	VL_WaitVBL (1);
	linenum=linenum*2-1;
	outportb (CRTC_INDEX,CRTC_LINECOMPARE);
	outportb (CRTC_INDEX+1,linenum % 256);
	outportb (CRTC_INDEX,CRTC_OVERFLOW);
	outportb (CRTC_INDEX+1, 1+16*(linenum/256));
	outportb (CRTC_INDEX,CRTC_MAXSCANLINE);
	outportb (CRTC_INDEX+1,inportb(CRTC_INDEX+1) & (255-64));
}


/*
=============================================================================

						PALETTE OPS

		To avoid snow, do a WaitVBL BEFORE calling these

=============================================================================
*/


/*
=================
=
= VL_FillPalette
=
=================
*/

void VL_FillPalette (int red, int green, int blue)
{
	int	i;

	outportb (PEL_WRITE_ADR,0);
	for (i=0;i<256;i++)
	{
		outportb (PEL_DATA,red);
		outportb (PEL_DATA,green);
		outportb (PEL_DATA,blue);
	}
}

//===========================================================================

/*
=================
=
= VL_SetColor
=
=================
*/

void VL_SetColor	(int color, int red, int green, int blue)
{
	outportb (PEL_WRITE_ADR,color);
	outportb (PEL_DATA,red);
	outportb (PEL_DATA,green);
	outportb (PEL_DATA,blue);
}

//===========================================================================

/*
=================
=
= VL_GetColor
=
=================
*/

void VL_GetColor	(int color, int *red, int *green, int *blue)
{
	outportb (PEL_READ_ADR,color);
	*red = inportb (PEL_DATA);
	*green = inportb (PEL_DATA);
	*blue = inportb (PEL_DATA);
}

//===========================================================================

/*
=================
=
= VL_SetPalette
=
= If fast palette setting has been tested for, it is used
= (some cards don't like outsb palette setting)
=
=================
*/

void VL_SetPalette (byte far *palette)
{
	int	i;

//	outportb (PEL_WRITE_ADR,0);
//	for (i=0;i<768;i++)
//		outportb(PEL_DATA,*palette++);

	asm	mov	dx,PEL_WRITE_ADR
	asm	mov	al,0
	asm	out	dx,al
	asm	mov	dx,PEL_DATA
	asm	lds	si,[palette]

	asm	test	[ss:fastpalette],1
	asm	jz	slowset
//
// set palette fast for cards that can take it
//
	asm	mov	cx,768
	asm	rep outsb
	asm	jmp	done

//
// set palette slowly for some video cards
//
slowset:
	asm	mov	cx,256
setloop:
	asm	lodsb
	asm	out	dx,al
	asm	lodsb
	asm	out	dx,al
	asm	lodsb
	asm	out	dx,al
	asm	loop	setloop

done:
	asm	mov	ax,ss
	asm	mov	ds,ax

}


//===========================================================================

/*
=================
=
= VL_GetPalette
=
= This does not use the port string instructions,
= due to some incompatabilities
=
=================
*/

void VL_GetPalette (byte far *palette)
{
	int	i;

	outportb (PEL_READ_ADR,0);
	for (i=0;i<768;i++)
		*palette++ = inportb(PEL_DATA);
}


//===========================================================================

/*
=================
=
= VL_FadeOut
=
= Fades the current palette to the given color in the given number of steps
=
=================
*/

void VL_FadeOut (int start, int end, int red, int green, int blue, int steps)
{
	int		i,j,orig,delta;
	byte	far *origptr, far *newptr;

	VL_WaitVBL(1);
	VL_GetPalette (&palette1[0][0]);
	_fmemcpy (palette2,palette1,768);

//
// fade through intermediate frames
//
	for (i=0;i<steps;i++)
	{
		origptr = &palette1[start][0];
		newptr = &palette2[start][0];
		for (j=start;j<=end;j++)
		{
			orig = *origptr++;
			delta = red-orig;
			*newptr++ = orig + delta * i / steps;
			orig = *origptr++;
			delta = green-orig;
			*newptr++ = orig + delta * i / steps;
			orig = *origptr++;
			delta = blue-orig;
			*newptr++ = orig + delta * i / steps;
		}

		VL_WaitVBL(1);
		VL_SetPalette (&palette2[0][0]);
	}

//
// final color
//
	VL_FillPalette (red,green,blue);

	screenfaded = true;
}


/*
=================
=
= VL_FadeIn
=
=================
*/

void VL_FadeIn (int start, int end, byte far *palette, int steps)
{
	int		i,j,delta;

	VL_WaitVBL(1);
	VL_GetPalette (&palette1[0][0]);
	_fmemcpy (&palette2[0][0],&palette1[0][0],sizeof(palette1));

	start *= 3;
	end = end*3+2;

//
// fade through intermediate frames
//
	for (i=0;i<steps;i++)
	{
		for (j=start;j<=end;j++)
		{
			delta = palette[j]-palette1[0][j];
			palette2[0][j] = palette1[0][j] + delta * i / steps;
		}

		VL_WaitVBL(1);
		VL_SetPalette (&palette2[0][0]);
	}

//
// final color
//
	VL_SetPalette (palette);
	screenfaded = false;
}



/*
=================
=
= VL_TestPaletteSet
=
= Sets the palette with outsb, then reads it in and compares
= If it compares ok, fastpalette is set to true.
=
=================
*/

void VL_TestPaletteSet (void)
{
	int	i;

	for (i=0;i<768;i++)
		palette1[0][i] = i;

	fastpalette = true;
	VL_SetPalette (&palette1[0][0]);
	VL_GetPalette (&palette2[0][0]);
	if (_fmemcmp (&palette1[0][0],&palette2[0][0],768))
		fastpalette = false;
}


/*
==================
=
= VL_ColorBorder
=
==================
*/

void VL_ColorBorder (int color)
{
	_AH=0x10;
	_AL=1;
	_BH=color;
	geninterrupt (0x10);
	bordercolor = color;
}



/*
=============================================================================

							PIXEL OPS

=============================================================================
*/

byte	pixmasks[4] = {1,2,4,8};
byte	leftmasks[4] = {15,14,12,8};
byte	rightmasks[4] = {1,3,7,15};


/*
=================
=
= VL_Plot
=
=================
*/

void VL_Plot (int x, int y, int color)
{
	byte mask;

	mask = pixmasks[x&3];
	VGAMAPMASK(mask);
	*(byte far *)MK_FP(SCREENSEG,bufferofs+(ylookup[y]+(x>>2))) = color;
	VGAMAPMASK(15);
}


/*
=================
=
= VL_Hlin
=
=================
*/

void VL_Hlin (unsigned x, unsigned y, unsigned width, unsigned color)
{
	unsigned		xbyte;
	byte			far *dest;
	byte			leftmask,rightmask;
	int				midbytes;

	xbyte = x>>2;
	leftmask = leftmasks[x&3];
	rightmask = rightmasks[(x+width-1)&3];
	midbytes = ((x+width+3)>>2) - xbyte - 2;

	dest = MK_FP(SCREENSEG,bufferofs+ylookup[y]+xbyte);

	if (midbytes<0)
	{
	// all in one byte
		VGAMAPMASK(leftmask&rightmask);
		*dest = color;
		VGAMAPMASK(15);
		return;
	}

	VGAMAPMASK(leftmask);
	*dest++ = color;

	VGAMAPMASK(15);
	_fmemset (dest,color,midbytes);
	dest+=midbytes;

	VGAMAPMASK(rightmask);
	*dest = color;

	VGAMAPMASK(15);
}


/*
=================
=
= VL_Vlin
=
=================
*/

void VL_Vlin (int x, int y, int height, int color)
{
	byte	far *dest,mask;

	mask = pixmasks[x&3];
	VGAMAPMASK(mask);

	dest = MK_FP(SCREENSEG,bufferofs+ylookup[y]+(x>>2));

	while (height--)
	{
		*dest = color;
		dest += linewidth;
	}

	VGAMAPMASK(15);
}


/*
=================
=
= VL_Bar
=
=================
*/

void VL_Bar (int x, int y, int width, int height, int color)
{
	byte	far *dest;
	byte	leftmask,rightmask;
	int		midbytes,linedelta;

	leftmask = leftmasks[x&3];
	rightmask = rightmasks[(x+width-1)&3];
	midbytes = ((x+width+3)>>2) - (x>>2) - 2;
	linedelta = linewidth-(midbytes+1);

	dest = MK_FP(SCREENSEG,bufferofs+ylookup[y]+(x>>2));

	if (midbytes<0)
	{
	// all in one byte
		VGAMAPMASK(leftmask&rightmask);
		while (height--)
		{
			*dest = color;
			dest += linewidth;
		}
		VGAMAPMASK(15);
		return;
	}

	while (height--)
	{
		VGAMAPMASK(leftmask);
		*dest++ = color;

		VGAMAPMASK(15);
		_fmemset (dest,color,midbytes);
		dest+=midbytes;

		VGAMAPMASK(rightmask);
		*dest = color;

		dest+=linedelta;
	}

	VGAMAPMASK(15);
}

/*
============================================================================

							MEMORY OPS

============================================================================
*/

/*
=================
=
= VL_MemToLatch
=
=================
*/

void VL_MemToLatch (byte far *source, int width, int height, unsigned dest)
{
	unsigned	count;
	byte	plane,mask;

	count = ((width+3)/4)*height;
	mask = 1;
	for (plane = 0; plane<4 ; plane++)
	{
		VGAMAPMASK(mask);
		mask <<= 1;

asm	mov	cx,count
asm mov ax,SCREENSEG
asm mov es,ax
asm	mov	di,[dest]
asm	lds	si,[source]
asm	rep movsb
asm mov	ax,ss
asm	mov	ds,ax

		source+= count;
	}
}


//===========================================================================


/*
=================
=
= VL_MemToScreen
=
= Draws a block of data to the screen.
=
=================
*/

void VL_MemToScreen (byte far *source, int width, int height, int x, int y)
{
	byte    far *screen,far *dest,mask;
	int		plane;

	width>>=2;
	dest = MK_FP(SCREENSEG,bufferofs+ylookup[y]+(x>>2) );
	mask = 1 << (x&3);

	for (plane = 0; plane<4; plane++)
	{
		VGAMAPMASK(mask);
		mask <<= 1;
		if (mask == 16)
			mask = 1;

		screen = dest;
		for (y=0;y<height;y++,screen+=linewidth,source+=width)
			_fmemcpy (screen,source,width);
	}
}

//==========================================================================


/*
=================
=
= VL_MaskedToScreen
=
= Masks a block of main memory to the screen.
=
=================
*/

void VL_MaskedToScreen (byte far *source, int width, int height, int x, int y)
{
	byte    far *screen,far *dest,mask;
	byte	far *maskptr;
	int		plane;

	width>>=2;
	dest = MK_FP(SCREENSEG,bufferofs+ylookup[y]+(x>>2) );
//	mask = 1 << (x&3);

//	maskptr = source;

	for (plane = 0; plane<4; plane++)
	{
		VGAMAPMASK(mask);
		mask <<= 1;
		if (mask == 16)
			mask = 1;

		screen = dest;
		for (y=0;y<height;y++,screen+=linewidth,source+=width)
			_fmemcpy (screen,source,width);
	}
}

//==========================================================================

/*
=================
=
= VL_LatchToScreen
=
=================
*/

void VL_LatchToScreen (unsigned source, int width, int height, int x, int y)
{
	VGAWRITEMODE(1);
	VGAMAPMASK(15);

asm	mov	di,[y]				// dest = bufferofs+ylookup[y]+(x>>2)
asm	shl	di,1
asm	mov	di,[WORD PTR ylookup+di]
asm	add	di,[bufferofs]
asm	mov	ax,[x]
asm	shr	ax,2
asm	add	di,ax

asm	mov	si,[source]
asm	mov	ax,[width]
asm	mov	bx,[linewidth]
asm	sub	bx,ax
asm	mov	dx,[height]
asm	mov	cx,SCREENSEG
asm	mov	ds,cx
asm	mov	es,cx

drawline:
asm	mov	cx,ax
asm	rep movsb
asm	add	di,bx
asm	dec	dx
asm	jnz	drawline

asm	mov	ax,ss
asm	mov	ds,ax

	VGAWRITEMODE(0);
}


//===========================================================================

#if 0

/*
=================
=
= VL_ScreenToScreen
=
=================
*/

void VL_ScreenToScreen (unsigned source, unsigned dest,int width, int height)
{
	VGAWRITEMODE(1);
	VGAMAPMASK(15);

asm	mov	si,[source]
asm	mov	di,[dest]
asm	mov	ax,[width]
asm	mov	bx,[linewidth]
asm	sub	bx,ax
asm	mov	dx,[height]
asm	mov	cx,SCREENSEG
asm	mov	ds,cx
asm	mov	es,cx

drawline:
asm	mov	cx,ax
asm	rep movsb
asm	add	si,bx
asm	add	di,bx
asm	dec	dx
asm	jnz	drawline

asm	mov	ax,ss
asm	mov	ds,ax

	VGAWRITEMODE(0);
}


#endif

/*
=============================================================================

						STRING OUTPUT ROUTINES

=============================================================================
*/




/*
===================
=
= VL_DrawTile8String
=
===================
*/

void VL_DrawTile8String (char *str, char far *tile8ptr, int printx, int printy)
{
	int		i;
	unsigned	far *dest,far *screen,far *src;

	dest = MK_FP(SCREENSEG,bufferofs+ylookup[printy]+(printx>>2));

	while (*str)
	{
		src = (unsigned far *)(tile8ptr + (*str<<6));
		// each character is 64 bytes

		VGAMAPMASK(1);
		screen = dest;
		for (i=0;i<8;i++,screen+=linewidth)
			*screen = *src++;
		VGAMAPMASK(2);
		screen = dest;
		for (i=0;i<8;i++,screen+=linewidth)
			*screen = *src++;
		VGAMAPMASK(4);
		screen = dest;
		for (i=0;i<8;i++,screen+=linewidth)
			*screen = *src++;
		VGAMAPMASK(8);
		screen = dest;
		for (i=0;i<8;i++,screen+=linewidth)
			*screen = *src++;

		str++;
		printx += 8;
		dest+=2;
	}
}



/*
===================
=
= VL_DrawLatch8String
=
===================
*/

void VL_DrawLatch8String (char *str, unsigned tile8ptr, int printx, int printy)
{
	int		i;
	unsigned	src,dest;

	dest = bufferofs+ylookup[printy]+(printx>>2);

	VGAWRITEMODE(1);
	VGAMAPMASK(15);

	while (*str)
	{
		src = tile8ptr + (*str<<4);		// each character is 16 latch bytes

asm	mov	si,[src]
asm	mov	di,[dest]
asm	mov	dx,[linewidth]

asm	mov	ax,SCREENSEG
asm	mov	ds,ax

asm	lodsw
asm	mov	[di],ax
asm	add	di,dx
asm	lodsw
asm	mov	[di],ax
asm	add	di,dx
asm	lodsw
asm	mov	[di],ax
asm	add	di,dx
asm	lodsw
asm	mov	[di],ax
asm	add	di,dx
asm	lodsw
asm	mov	[di],ax
asm	add	di,dx
asm	lodsw
asm	mov	[di],ax
asm	add	di,dx
asm	lodsw
asm	mov	[di],ax
asm	add	di,dx
asm	lodsw
asm	mov	[di],ax
asm	add	di,dx

asm	mov	ax,ss
asm	mov	ds,ax

		str++;
		printx += 8;
		dest+=2;
	}

	VGAWRITEMODE(0);
}


/*
===================
=
= VL_SizeTile8String
=
===================
*/

void VL_SizeTile8String (char *str, int *width, int *height)
{
	*height = 8;
	*width = 8*strlen(str);
}
```
