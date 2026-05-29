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
description: "This file showcases the video layer routines that powered Wolfenstein 3D's groundbreaking graphics on early VGA hardware."

summary:
  - point: "Direct VGA register manipulation for performance"
    link: "https://en.wikipedia.org/wiki/VGA"
    link_label: "VGA"
  - point: "Palette fading techniques for immersive transitions"
    link: "https://en.wikipedia.org/wiki/Color_palette"
    link_label: "Color Palette"
  - point: "Optimized memory-to-screen operations for fast rendering"
    link: "https://en.wikipedia.org/wiki/Framebuffer"
    link_label: "Framebuffer"
  - point: "Efficient string rendering using tile-based graphics"
    link: "https://en.wikipedia.org/wiki/Tile-based_graphics"
    link_label: "Tile-Based Graphics"
  - point: "Use of assembly language for critical performance sections"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"

enhancements:
  - id: "vga-detection-and-startup"
    line_start: 42
    line_end: 98
    title: "How Wolfenstein Checked for VGA Cards"
    wikipedia_url: "https://en.wikipedia.org/wiki/VGA"
    image_url: ""
    image_caption: ""
    content: "The `VL_Startup` function checks whether the system has a VGA-compatible graphics card, a critical requirement for Wolfenstein 3D's advanced graphics. It uses the `VL_VideoID` function to identify the video card and validates this against the game's requirements. If the card is not VGA-compatible, the program exits with an error message. This was a common practice in the early 1990s, as VGA was the standard for high-resolution graphics but not universally available. The fallback mechanism allows users to override detection with a command-line parameter (`-HIDDENCARD`) if the card is misidentified. This approach reflects the era's reliance on hardware-specific optimizations, as developers often had to account for quirks in video card implementations. By ensuring VGA compatibility, id Software could leverage features like 256-color palettes and fast memory access, enabling the game's smooth scrolling and detailed environments. This detection mechanism influenced later games that similarly required specific hardware capabilities, paving the way for standardized graphics APIs like DirectX."
  - id: "vga-plane-mode-setup"
    line_start: 107
    line_end: 122
    title: "Setting VGA Plane Mode for Graphics"
    wikipedia_url: "https://en.wikipedia.org/wiki/VGA"
    image_url: ""
    image_caption: ""
    content: "The `VL_SetVGAPlaneMode` function initializes the VGA graphics mode (mode 0x13) and configures the system for planar memory access. VGA's planar mode divides video memory into four planes, allowing efficient manipulation of pixel data. This function sets up the memory mode, mask registers, and line width for rendering. The use of assembly instructions (`mov`, `int`) highlights the low-level control required to interact with VGA hardware directly. In 1992, this approach was necessary to achieve the performance needed for real-time rendering on limited hardware. By enabling planar mode, id Software could optimize memory usage and rendering speed, crucial for Wolfenstein 3D's fast-paced gameplay. This technique influenced later graphics engines, which adopted similar methods for hardware-specific optimizations before standardized APIs like OpenGL and DirectX became prevalent."
  - id: "palette-fading-effects"
    line_start: 438
    line_end: 489
    title: "The Magic Behind Smooth Palette Fades"
    wikipedia_url: "https://en.wikipedia.org/wiki/Color_palette"
    image_url: ""
    image_caption: ""
    content: "The `VL_FadeOut` and `VL_FadeIn` functions implement smooth transitions by gradually adjusting the VGA palette. These routines calculate intermediate colors between the current palette and the target palette over a specified number of steps, creating a fading effect. This technique was used extensively in Wolfenstein 3D to enhance immersion during scene changes or game events. The use of direct palette manipulation reflects the constraints of VGA hardware, where colors were defined by a 256-entry palette. By leveraging this capability, id Software achieved visually striking effects without taxing the CPU or memory. Palette fading became a hallmark of early VGA games and influenced later graphical engines, which adopted similar techniques for transitions and effects. The concept persists today in modern engines, albeit implemented through shaders and higher-level APIs."
  - id: "pixel-drawing-operations"
    line_start: 593
    line_end: 609
    title: "Drawing Pixels, Lines, and Bars Directly"
    wikipedia_url: "https://en.wikipedia.org/wiki/Framebuffer"
    image_url: ""
    image_caption: ""
    content: "The `VL_Plot`, `VL_Hlin`, `VL_Vlin`, and `VL_Bar` functions provide low-level routines for drawing pixels, horizontal lines, vertical lines, and rectangular bars directly to the screen. These functions manipulate VGA memory using planar addressing, ensuring efficient rendering. For example, `VL_Plot` calculates the memory offset for a single pixel, while `VL_Hlin` and `VL_Vlin` handle contiguous spans of pixels. The use of masks (`pixmasks`, `leftmasks`, `rightmasks`) ensures precise control over individual planes. This level of detail was necessary in 1992 to achieve real-time graphics performance on hardware with limited processing power. These routines formed the foundation for Wolfenstein 3D's rendering engine, enabling the creation of its iconic environments. The techniques demonstrated here influenced later engines, including those used in Doom and Quake, where similar low-level optimizations were applied to achieve groundbreaking visuals."
  - id: "tile-based-string-rendering"
    line_start: 952
    line_end: 993
    title: "Rendering Text with Tile Graphics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tile-based_graphics"
    image_url: ""
    image_caption: ""
    content: "The `VL_DrawTile8String` and `VL_DrawLatch8String` functions render text using tile-based graphics, where each character is represented as an 8x8 pixel tile. These routines calculate the memory offset for each character and draw it to the screen using planar addressing. By leveraging VGA's ability to manipulate individual planes, the functions achieve efficient rendering of text in real-time. This approach reflects the constraints of early VGA hardware, where direct memory access was the fastest way to update the screen. Tile-based rendering was a common technique in early games, allowing developers to reuse graphical assets and optimize memory usage. In Wolfenstein 3D, these routines were used for in-game messages, menus, and HUD elements, contributing to the game's polished presentation. The concept of tile-based rendering persists in modern game development, particularly in 2D engines and retro-inspired games."

---

```cpp
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