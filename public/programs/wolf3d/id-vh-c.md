---
title: "ID_VH.C"
program: "Wolfenstein 3D"
program_slug: "wolf3d"
file_path: "WOLFSRC/ID_VH.C"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/wolf3d/blob/master/WOLFSRC/ID_VH.C"
year: 1992
author: "John Carmack, John Romero, Tom Hall"
slug: "id-vh-c"
order: 21
description: "This file contains graphical rendering routines for Wolfenstein 3D, showcasing the ingenuity behind its fast-paced visuals and efficient use of hardware."

summary:
  - point: "Proportional font rendering optimized for VGA"
    link: "https://en.wikipedia.org/wiki/VGA"
    link_label: "VGA"
  - point: "Double-buffering techniques for smooth updates"
    link: "https://en.wikipedia.org/wiki/Double_buffering"
    link_label: "Double Buffering"
  - point: "Randomized pixel effects for transitions"
    link: "https://en.wikipedia.org/wiki/Fade_(graphics)"
    link_label: "Fade Effects"
  - point: "Efficient memory management for graphics chunks"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Assembly optimizations for pixel manipulation"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"

enhancements:
  - id: "proportional-font-rendering"
    line_start: 38
    line_end: 93
    title: "Proportional Font Rendering on VGA"
    wikipedia_url: "https://en.wikipedia.org/wiki/VGA"
    image_url: ""
    image_caption: ""
    content: "The `VW_DrawPropString` function is responsible for rendering proportional-width fonts on the VGA screen. It calculates the width of each character dynamically based on font metadata and uses assembly instructions to manipulate pixels directly. This approach was necessary for achieving high performance on the limited hardware of the time, where VGA graphics required precise control over memory-mapped video buffers. In 1992, VGA was the dominant graphics standard, offering 256 colors and resolutions up to 640x480. John Carmack's use of assembly here reflects his obsession with squeezing every ounce of performance from the hardware. This technique influenced later games that needed fast text rendering, especially in dialogue-heavy RPGs and strategy games."
  - id: "color-prop-string-rendering"
    line_start: 96
    line_end: 156
    title: "Dynamic Color Shifting in Text Rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Color_palette"
    image_url: ""
    image_caption: ""
    content: "The `VW_DrawColorPropString` function extends the functionality of `VW_DrawPropString` by introducing dynamic color shifts during rendering. As each character is drawn, the font color is incremented, creating a gradient effect. This was a clever way to add visual flair without requiring additional graphics assets. In the early 1990s, color manipulation was a popular technique for enhancing visuals on hardware with limited graphical capabilities. By leveraging assembly language, Carmack ensured that this effect was both fast and memory-efficient. This approach inspired similar techniques in later games, such as dynamic lighting effects and palette cycling, which became staples in 2D game engines."
  - id: "image-munging-for-performance"
    line_start: 162
    line_end: 204
    title: "Image Munging: Packing Pixels for Speed"
    wikipedia_url: "https://en.wikipedia.org/wiki/Pixel"
    image_url: ""
    image_caption: ""
    content: "The `VL_MungePic` function rearranges image data to optimize rendering performance. It divides the image into four planes and reorganizes the pixel data to align with VGA's planar memory model. This preprocessing step ensures that subsequent rendering operations can access data more efficiently. In the early 1990s, developers often had to adapt their graphics routines to the quirks of hardware like VGA, which stored pixel data in separate planes. This technique highlights Carmack's deep understanding of hardware constraints and his ability to work within them. Similar preprocessing methods were later used in sprite-based games and image compression algorithms."
  - id: "double-buffer-update-blocks"
    line_start: 235
    line_end: 289
    title: "Marking Update Blocks for Double Buffering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The `VW_MarkUpdateBlock` function identifies which portions of the screen need to be updated during rendering. By dividing the screen into blocks and marking only those that have changed, the game minimizes the amount of data sent to the VGA buffer. This technique is a form of double buffering, which reduces flickering and improves visual smoothness. In the constrained environment of MS-DOS, where CPU cycles and memory were precious, this approach was essential for maintaining high frame rates. Double buffering became a standard practice in game development and is still used in modern graphics engines to ensure smooth rendering."
  - id: "latch-memory-loading"
    line_start: 387
    line_end: 455
    title: "Loading Graphics into Latch Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `LoadLatchMem` function loads graphical assets into a special area of memory called latch memory. This memory is used to store preprocessed graphics, such as tiles and sprites, for quick access during gameplay. By caching these assets in latch memory, the game avoids the overhead of recalculating or reloading them during rendering. This technique reflects the constraints of MS-DOS systems, where memory management was a critical aspect of performance optimization. The use of latch memory influenced later game engines, which adopted similar caching strategies to handle large graphical assets efficiently."
  - id: "randomized-fizzle-fade"
    line_start: 471
    line_end: 547
    title: "Randomized Pixel Effects: FizzleFade"
    wikipedia_url: "https://en.wikipedia.org/wiki/Fade_(graphics)"
    image_url: ""
    image_caption: ""
    content: "The `FizzleFade` function creates a randomized fade effect by copying pixels from one buffer to another in a pseudo-random order. This effect was used during transitions, such as level changes or game over screens, to add visual interest. The randomness is generated using a simple algorithm that advances through a sequence of pseudo-random values. In the early 1990s, such effects were a novel way to enhance immersion without requiring additional hardware capabilities. The concept of randomized transitions inspired similar effects in later games, including particle systems and procedural animations."

---

```cpp
// ID_VH.C

#include "ID_HEADS.H"

#define	SCREENWIDTH		80
#define CHARWIDTH		2
#define TILEWIDTH		4
#define GRPLANES		4
#define BYTEPIXELS		4

#define SCREENXMASK		(~3)
#define SCREENXPLUS		(3)
#define SCREENXDIV		(4)

#define VIEWWIDTH		80

#define PIXTOBLOCK		4		// 16 pixels to an update block

#define UNCACHEGRCHUNK(chunk)	{MM_FreePtr(&grsegs[chunk]);grneeded[chunk]&=~ca_levelbit;}

byte	update[UPDATEHIGH][UPDATEWIDE];

//==========================================================================

pictabletype	_seg *pictable;


int	px,py;
byte	fontcolor,backcolor;
int	fontnumber;
int bufferwidth,bufferheight;


//==========================================================================

void	VWL_UpdateScreenBlocks (void);

//==========================================================================

void VW_DrawPropString (char far *string)
{
	fontstruct	far	*font;
	int		width,step,height,i;
	byte	far *source, far *dest, far *origdest;
	byte	ch,mask;

	font = (fontstruct far *)grsegs[STARTFONT+fontnumber];
	height = bufferheight = font->height;
	dest = origdest = MK_FP(SCREENSEG,bufferofs+ylookup[py]+(px>>2));
	mask = 1<<(px&3);


	while ((ch = *string++)!=0)
	{
		width = step = font->width[ch];
		source = ((byte far *)font)+font->location[ch];
		while (width--)
		{
			VGAMAPMASK(mask);

asm	mov	ah,[BYTE PTR fontcolor]
asm	mov	bx,[step]
asm	mov	cx,[height]
asm	mov	dx,[linewidth]
asm	lds	si,[source]
asm	les	di,[dest]

vertloop:
asm	mov	al,[si]
asm	or	al,al
asm	je	next
asm	mov	[es:di],ah			// draw color

next:
asm	add	si,bx
asm	add	di,dx
asm	loop	vertloop
asm	mov	ax,ss
asm	mov	ds,ax

			source++;
			px++;
			mask <<= 1;
			if (mask == 16)
			{
				mask = 1;
				dest++;
			}
		}
	}
bufferheight = height;
bufferwidth = ((dest+1)-origdest)*4;
}


void VW_DrawColorPropString (char far *string)
{
	fontstruct	far	*font;
	int		width,step,height,i;
	byte	far *source, far *dest, far *origdest;
	byte	ch,mask;

	font = (fontstruct far *)grsegs[STARTFONT+fontnumber];
	height = bufferheight = font->height;
	dest = origdest = MK_FP(SCREENSEG,bufferofs+ylookup[py]+(px>>2));
	mask = 1<<(px&3);


	while ((ch = *string++)!=0)
	{
		width = step = font->width[ch];
		source = ((byte far *)font)+font->location[ch];
		while (width--)
		{
			VGAMAPMASK(mask);

asm	mov	ah,[BYTE PTR fontcolor]
asm	mov	bx,[step]
asm	mov	cx,[height]
asm	mov	dx,[linewidth]
asm	lds	si,[source]
asm	les	di,[dest]

vertloop:
asm	mov	al,[si]
asm	or	al,al
asm	je	next
asm	mov	[es:di],ah			// draw color

next:
asm	add	si,bx
asm	add	di,dx

asm rcr cx,1				// inc font color
asm jc  cont
asm	inc ah

cont:
asm rcl cx,1
asm	loop	vertloop
asm	mov	ax,ss
asm	mov	ds,ax

			source++;
			px++;
			mask <<= 1;
			if (mask == 16)
			{
				mask = 1;
				dest++;
			}
		}
	}
bufferheight = height;
bufferwidth = ((dest+1)-origdest)*4;
}


//==========================================================================


/*
=================
=
= VL_MungePic
=
=================
*/

void VL_MungePic (byte far *source, unsigned width, unsigned height)
{
	unsigned	x,y,plane,size,pwidth;
	byte		_seg *temp, far *dest, far *srcline;

	size = width*height;

	if (width&3)
		MS_Quit ("VL_MungePic: Not divisable by 4!");

//
// copy the pic to a temp buffer
//
	MM_GetPtr (&(memptr)temp,size);
	_fmemcpy (temp,source,size);

//
// munge it back into the original buffer
//
	dest = source;
	pwidth = width/4;

	for (plane=0;plane<4;plane++)
	{
		srcline = temp;
		for (y=0;y<height;y++)
		{
			for (x=0;x<pwidth;x++)
				*dest++ = *(srcline+x*4+plane);
			srcline+=width;
		}
	}

	MM_FreePtr (&(memptr)temp);
}

void VWL_MeasureString (char far *string, word *width, word *height
	, fontstruct _seg *font)
{
	*height = font->height;
	for (*width = 0;*string;string++)
		*width += font->width[*((byte far *)string)];	// proportional width
}

void	VW_MeasurePropString (char far *string, word *width, word *height)
{
	VWL_MeasureString(string,width,height,(fontstruct _seg *)grsegs[STARTFONT+fontnumber]);
}

void	VW_MeasureMPropString  (char far *string, word *width, word *height)
{
	VWL_MeasureString(string,width,height,(fontstruct _seg *)grsegs[STARTFONTM+fontnumber]);
}



/*
=============================================================================

				Double buffer management routines

=============================================================================
*/


/*
=======================
=
= VW_MarkUpdateBlock
=
= Takes a pixel bounded block and marks the tiles in bufferblocks
= Returns 0 if the entire block is off the buffer screen
=
=======================
*/

int VW_MarkUpdateBlock (int x1, int y1, int x2, int y2)
{
	int	x,y,xt1,yt1,xt2,yt2,nextline;
	byte *mark;

	xt1 = x1>>PIXTOBLOCK;
	yt1 = y1>>PIXTOBLOCK;

	xt2 = x2>>PIXTOBLOCK;
	yt2 = y2>>PIXTOBLOCK;

	if (xt1<0)
		xt1=0;
	else if (xt1>=UPDATEWIDE)
		return 0;

	if (yt1<0)
		yt1=0;
	else if (yt1>UPDATEHIGH)
		return 0;

	if (xt2<0)
		return 0;
	else if (xt2>=UPDATEWIDE)
		xt2 = UPDATEWIDE-1;

	if (yt2<0)
		return 0;
	else if (yt2>=UPDATEHIGH)
		yt2 = UPDATEHIGH-1;

	mark = updateptr + uwidthtable[yt1] + xt1;
	nextline = UPDATEWIDE - (xt2-xt1) - 1;

	for (y=yt1;y<=yt2;y++)
	{
		for (x=xt1;x<=xt2;x++)
			*mark++ = 1;			// this tile will need to be updated

		mark += nextline;
	}

	return 1;
}

void VWB_DrawTile8 (int x, int y, int tile)
{
	if (VW_MarkUpdateBlock (x,y,x+7,y+7))
		LatchDrawChar(x,y,tile);
}

void VWB_DrawTile8M (int x, int y, int tile)
{
	if (VW_MarkUpdateBlock (x,y,x+7,y+7))
		VL_MemToScreen (((byte far *)grsegs[STARTTILE8M])+tile*64,8,8,x,y);
}


void VWB_DrawPic (int x, int y, int chunknum)
{
	int	picnum = chunknum - STARTPICS;
	unsigned width,height;

	x &= ~7;

	width = pictable[picnum].width;
	height = pictable[picnum].height;

	if (VW_MarkUpdateBlock (x,y,x+width-1,y+height-1))
		VL_MemToScreen (grsegs[chunknum],width,height,x,y);
}



void VWB_DrawPropString	 (char far *string)
{
	int x;
	x=px;
	VW_DrawPropString (string);
	VW_MarkUpdateBlock(x,py,px-1,py+bufferheight-1);
}


void VWB_Bar (int x, int y, int width, int height, int color)
{
	if (VW_MarkUpdateBlock (x,y,x+width,y+height-1) )
		VW_Bar (x,y,width,height,color);
}

void VWB_Plot (int x, int y, int color)
{
	if (VW_MarkUpdateBlock (x,y,x,y))
		VW_Plot(x,y,color);
}

void VWB_Hlin (int x1, int x2, int y, int color)
{
	if (VW_MarkUpdateBlock (x1,y,x2,y))
		VW_Hlin(x1,x2,y,color);
}

void VWB_Vlin (int y1, int y2, int x, int color)
{
	if (VW_MarkUpdateBlock (x,y1,x,y2))
		VW_Vlin(y1,y2,x,color);
}

void VW_UpdateScreen (void)
{
	VH_UpdateScreen ();
}


/*
=============================================================================

						WOLFENSTEIN STUFF

=============================================================================
*/

/*
=====================
=
= LatchDrawPic
=
=====================
*/

void LatchDrawPic (unsigned x, unsigned y, unsigned picnum)
{
	unsigned wide, height, source;

	wide = pictable[picnum-STARTPICS].width;
	height = pictable[picnum-STARTPICS].height;
	source = latchpics[2+picnum-LATCHPICS_LUMP_START];

	VL_LatchToScreen (source,wide/4,height,x*8,y);
}


//==========================================================================

/*
===================
=
= LoadLatchMem
=
===================
*/

void LoadLatchMem (void)
{
	int	i,j,p,m,width,height,start,end;
	byte	far *src;
	unsigned	destoff;

//
// tile 8s
//
	latchpics[0] = freelatch;
	CA_CacheGrChunk (STARTTILE8);
	src = (byte _seg *)grsegs[STARTTILE8];
	destoff = freelatch;

	for (i=0;i<NUMTILE8;i++)
	{
		VL_MemToLatch (src,8,8,destoff);
		src += 64;
		destoff +=16;
	}
	UNCACHEGRCHUNK (STARTTILE8);

#if 0	// ran out of latch space!
//
// tile 16s
//
	src = (byte _seg *)grsegs[STARTTILE16];
	latchpics[1] = destoff;

	for (i=0;i<NUMTILE16;i++)
	{
		CA_CacheGrChunk (STARTTILE16+i);
		src = (byte _seg *)grsegs[STARTTILE16+i];
		VL_MemToLatch (src,16,16,destoff);
		destoff+=64;
		if (src)
			UNCACHEGRCHUNK (STARTTILE16+i);
	}
#endif

//
// pics
//
	start = LATCHPICS_LUMP_START;
	end = LATCHPICS_LUMP_END;

	for (i=start;i<=end;i++)
	{
		latchpics[2+i-start] = destoff;
		CA_CacheGrChunk (i);
		width = pictable[i-STARTPICS].width;
		height = pictable[i-STARTPICS].height;
		VL_MemToLatch (grsegs[i],width,height,destoff);
		destoff += width/4 *height;
		UNCACHEGRCHUNK(i);
	}

	EGAMAPMASK(15);
}

//==========================================================================

/*
===================
=
= FizzleFade
=
= returns true if aborted
=
===================
*/

extern	ControlInfo	c;

boolean FizzleFade (unsigned source, unsigned dest,
	unsigned width,unsigned height, unsigned frames, boolean abortable)
{
	int			pixperframe;
	unsigned	drawofs,pagedelta;
	byte 		mask,maskb[8] = {1,2,4,8};
	unsigned	x,y,p,frame;
	long		rndval;

	pagedelta = dest-source;
	rndval = 1;
	y = 0;
	pixperframe = 64000/frames;

	IN_StartAck ();

	TimeCount=frame=0;
	do	// while (1)
	{
		if (abortable && IN_CheckAck () )
			return true;

		asm	mov	es,[screenseg]

		for (p=0;p<pixperframe;p++)
		{
			//
			// seperate random value into x/y pair
			//
			asm	mov	ax,[WORD PTR rndval]
			asm	mov	dx,[WORD PTR rndval+2]
			asm	mov	bx,ax
			asm	dec	bl
			asm	mov	[BYTE PTR y],bl			// low 8 bits - 1 = y xoordinate
			asm	mov	bx,ax
			asm	mov	cx,dx
			asm	mov	[BYTE PTR x],ah			// next 9 bits = x xoordinate
			asm	mov	[BYTE PTR x+1],dl
			//
			// advance to next random element
			//
			asm	shr	dx,1
			asm	rcr	ax,1
			asm	jnc	noxor
			asm	xor	dx,0x0001
			asm	xor	ax,0x2000
noxor:
			asm	mov	[WORD PTR rndval],ax
			asm	mov	[WORD PTR rndval+2],dx

			if (x>width || y>height)
				continue;
			drawofs = source+ylookup[y] + (x>>2);

			//
			// copy one pixel
			//
			mask = x&3;
			VGAREADMAP(mask);
			mask = maskb[mask];
			VGAMAPMASK(mask);

			asm	mov	di,[drawofs]
			asm	mov	al,[es:di]
			asm add	di,[pagedelta]
			asm	mov	[es:di],al

			if (rndval == 1)		// entire sequence has been completed
				return false;
		}
		frame++;
		while (TimeCount<frame)		// don't go too fast
		;
	} while (1);


}
```