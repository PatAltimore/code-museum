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
description: "This file showcases the graphical routines and optimizations that powered Wolfenstein 3D's groundbreaking visuals."

summary:
  - point: "Proportional font rendering optimized for VGA hardware"
    link: "https://en.wikipedia.org/wiki/VGA"
    link_label: "VGA"
  - point: "Double-buffering techniques for smooth graphics updates"
    link: "https://en.wikipedia.org/wiki/Double_buffering"
    link_label: "Double Buffering"
  - point: "Randomized pixel effects used in transitions"
    link: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    link_label: "Wolfenstein 3D"
  - point: "Efficient memory management for graphical assets"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Assembly language optimizations for pixel manipulation"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"

enhancements:
  - id: "byte-array-update-grid"
    line_start: 1
    line_end: 23
    title: "The Grid That Tracks Screen Updates"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "This section defines a two-dimensional byte array named `update`, which serves as a grid to track which parts of the screen need to be refreshed during gameplay. By marking tiles in this grid, the game avoids unnecessary redraws, optimizing performance on hardware with limited processing power. In 1992, MS-DOS games often relied on such techniques to achieve smooth graphics updates without overloading the CPU. This approach was particularly important for Wolfenstein 3D, which aimed to deliver fast-paced action at a consistent frame rate. The concept of marking update regions influenced later games, where similar techniques were used in engines like Doom and Quake to manage rendering efficiently."
  - id: "proportional-font-rendering"
    line_start: 38
    line_end: 93
    title: "How Wolfenstein Drew Proportional Fonts"
    wikipedia_url: "https://en.wikipedia.org/wiki/VGA"
    image_url: ""
    image_caption: ""
    content: "The `VW_DrawPropString` function handles the rendering of proportional fonts, where each character has a variable width. This was a departure from fixed-width fonts and added a touch of polish to the game's text displays. The routine uses VGA-specific hardware instructions to manipulate pixels directly, ensuring that the text is drawn efficiently. At the time, VGA graphics were state-of-the-art, and leveraging its capabilities required deep knowledge of assembly language and hardware quirks. John Carmack's mastery of these techniques allowed Wolfenstein 3D to stand out visually. The use of proportional fonts became standard in later games, enhancing readability and aesthetics in user interfaces."
  - id: "assembly-optimized-color-string"
    line_start: 96
    line_end: 156
    title: "Assembly Optimizations for Colorful Text"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "The `VW_DrawColorPropString` function builds on the previous routine by adding color variation to the rendered text. Using assembly language, the routine manipulates VGA registers to increment the font color dynamically as each character is drawn. This technique showcases Carmack's ability to push hardware to its limits, creating visually engaging effects with minimal performance overhead. Assembly optimizations like these were crucial for achieving smooth gameplay on early PCs, where every CPU cycle mattered. This approach influenced later game engines, which continued to use low-level optimizations for graphical effects, particularly in resource-constrained environments like mobile devices."
  - id: "vl-munge-pic-data-reorganization"
    line_start: 162
    line_end: 204
    title: "Reorganizing Image Data for Performance"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `VL_MungePic` function reorganizes image data into a format optimized for VGA's planar memory layout. By copying the image into a temporary buffer and then rearranging its pixels, the routine ensures that the data aligns with VGA's requirements for efficient rendering. This technique reflects the constraints of early PC graphics hardware, where developers often had to adapt their data structures to fit the quirks of the display system. Such optimizations were common in the era and laid the groundwork for more sophisticated memory management techniques in later game engines. The concept of preprocessing graphical assets for performance remains relevant in modern game development."
  - id: "vw-mark-update-block"
    line_start: 235
    line_end: 289
    title: "Marking Tiles for Redraw Efficiency"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The `VW_MarkUpdateBlock` function calculates which tiles on the screen need to be updated based on their coordinates. By marking these tiles in the `update` grid, the routine minimizes the amount of rendering required, focusing only on areas that have changed. This technique was essential for maintaining high performance on hardware with limited graphical capabilities. It reflects the broader trend in game development of optimizing rendering pipelines to achieve smooth gameplay. The idea of marking regions for redraw influenced later engines like Unreal Engine, where similar principles are applied in modern rendering systems to optimize performance."
  - id: "fizzle-fade-transition-effect"
    line_start: 469
    line_end: 516
    title: "The Randomized Pixel Transition Effect"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `FizzleFade` function creates a transition effect by randomly copying pixels from one buffer to another. This visually striking effect was used for screen fades and transitions, adding a layer of polish to the game's presentation. The routine employs assembly language to generate random coordinates and manipulate VGA memory directly, showcasing Carmack's expertise in low-level programming. Such effects were rare in early games, as they required both technical skill and a willingness to experiment with hardware capabilities. The concept of randomized transitions influenced later games and engines, where similar effects are used to enhance visual storytelling and immersion."

---

```asm
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
