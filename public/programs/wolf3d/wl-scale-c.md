---
title: "WL_SCALE.C"
program: "Wolfenstein 3D"
program_slug: "wolf3d"
file_path: "WOLFSRC/WL_SCALE.C"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/wolf3d/blob/master/WOLFSRC/WL_SCALE.C"
year: 1992
author: "John Carmack, John Romero, Tom Hall"
slug: "wl-scale-c"
order: 13
description: "This file contains the scaling routines for Wolfenstein 3D, enabling smooth and efficient rendering of scaled sprites in the game's first-person perspective."

summary:
  - point: "Introduces compiled scaling routines for sprite rendering"
    link: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    link_label: "Wolfenstein 3D"
  - point: "Optimizes memory usage with dynamic allocation and locking"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Uses inline assembly for performance-critical operations"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"
  - point: "Implements multi-byte scaling masks for pixel manipulation"
    link: "https://en.wikipedia.org/wiki/Graphics_processing_unit"
    link_label: "Graphics Processing"
  - point: "Handles clipping and visibility checks for rendering efficiency"
    link: "https://en.wikipedia.org/wiki/Clipping_(computer_graphics)"
    link_label: "Clipping in Graphics"

enhancements:
  - id: "bad-scale-error-handler"
    line_start: 36
    line_end: 49
    title: "Why 'BadScale' Exists in the Code"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "The `BadScale` function is a simple error handler that terminates the program when an invalid scale height is encountered. It calls the `Quit` function with a descriptive error message, ensuring that developers are immediately alerted to the issue during debugging. In the early 1990s, error handling in games was often rudimentary, as performance constraints left little room for complex error recovery mechanisms. By halting execution, this approach avoids undefined behavior that could corrupt memory or crash the system. While modern error handling favors exceptions or logging, this direct method reflects the urgency of debugging during Wolfenstein 3D's rapid development cycle. This function underscores the importance of robust error detection in performance-critical software, influencing later practices in game engine development."
  - id: "setup-scaling-memory-optimization"
    line_start: 52
    line_end: 129
    title: "How Scaling Routines Save Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `SetupScaling` function initializes the scaling system by dynamically allocating memory for compiled scaler objects. It first frees any previously allocated scalers, sorts memory to compact it, and then builds new scalers for each height, optimizing memory usage by double-stepping for larger heights. This approach reflects the constraints of early 1990s hardware, where RAM was limited and fragmentation could severely impact performance. By locking down memory after allocation, the function ensures that critical data remains accessible during gameplay. The use of compiled scalers, which precompute scaling operations, was a novel technique that significantly improved rendering speed. This memory management strategy influenced later game engines, including id Software's Doom and Quake, which continued to push the boundaries of efficient resource handling."
  - id: "build-comp-scale-precompiled-scaling"
    line_start: 131
    line_end: 228
    title: "Precompiled Scaling: A Speed Boost for Sprites"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `BuildCompScale` function generates precompiled scaler objects that scale a 64-pixel-tall sprite to a specified height. It calculates the necessary pixel widths and compiles assembly instructions for efficient rendering. By precomputing these operations, the function minimizes runtime calculations, allowing Wolfenstein 3D to achieve smooth sprite scaling on limited hardware. The use of inline assembly ensures that the generated code is highly optimized for the x86 architecture, a critical consideration given the performance constraints of early 1990s PCs. This technique was a precursor to modern GPU-based scaling, where precompiled shaders perform similar tasks. The concept of precomputing operations for performance influenced subsequent game engines, including those used in Doom and Quake, which relied on similar optimization strategies."
  - id: "scale-line-inline-assembly"
    line_start: 249
    line_end: 394
    title: "Inline Assembly: Scaling Pixels at Warp Speed"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "The `ScaleLine` function uses inline assembly to perform pixel scaling operations directly on the CPU. It manipulates registers and memory to scale individual lines of a sprite, handling cases where scaling spans one, two, or three bytes. This low-level approach was essential for achieving real-time performance on early PCs, which lacked dedicated graphics hardware. The function patches and unpatches return instructions (`RETF`) to dynamically adjust the scaler's behavior, a clever trick that minimizes overhead. Inline assembly was a hallmark of id Software's programming style, allowing them to extract maximum performance from the hardware. Techniques like these laid the groundwork for later innovations in graphics programming, including the use of SIMD instructions and GPU acceleration in modern engines."
  - id: "scale-shape-clipping-and-visibility"
    line_start: 421
    line_end: 597
    title: "Clipping Shapes for Efficient Rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Clipping_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `ScaleShape` function renders a compiled shape at a specified height, performing clipping and visibility checks to optimize rendering. It scales the shape's left and right sides, ensuring that only visible pixels are drawn. By comparing the shape's height to the `wallheight` array, the function avoids rendering obscured portions, saving valuable CPU cycles. This approach reflects the constraints of early 1990s hardware, where every optimization mattered. The function's ability to handle multi-pixel lines and adjust scaling dynamically was a significant advancement in sprite rendering. Techniques like these influenced later game engines, including Doom, which expanded on the concept of visibility checks to handle complex 3D environments efficiently."
  - id: "simple-scale-shape-no-clipping"
    line_start: 601
    line_end: 688
    title: "Scaling Without Clipping: A Simpler Approach"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `SimpleScaleShape` function provides a streamlined alternative to `ScaleShape`, rendering a compiled shape without performing clipping or visibility checks. This simplicity makes it faster but less efficient, as it may draw pixels that are off-screen or obscured. The function scales the shape's left and right sides, relying on precompiled scaler objects for efficient rendering. While less sophisticated than its counterpart, this approach was useful for scenarios where clipping was unnecessary, such as rendering background elements. The trade-off between simplicity and efficiency in this function highlights the design decisions developers faced when optimizing for limited hardware. Similar techniques can be seen in modern engines, where simplified rendering paths are used for non-critical elements."
  - id: "scaling-masks-for-pixel-manipulation"
    line_start: 700
    line_end: 727
    title: "Scaling Masks: The Secret to Pixel Precision"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_processing_unit"
    image_url: ""
    image_caption: ""
    content: "The scaling masks defined in this section (`mapmasks1`, `mapmasks2`, `mapmasks3`, and `wordmasks`) are used to manipulate pixel data during scaling operations. These masks control how pixels are drawn, enabling precise scaling across one, two, or three bytes. By precomputing these masks, the code avoids runtime calculations, improving performance. This technique reflects the ingenuity required to achieve smooth graphics on early PCs, which lacked dedicated GPUs. The masks are a precursor to modern graphics techniques, such as texture mapping and pixel shaders, which rely on similar principles to manipulate image data. The use of precomputed masks influenced later game engines, including those used in Doom and Quake, which expanded on these ideas to handle more complex graphics."

---

```cpp
// WL_SCALE.C

#include "WL_DEF.H"
#pragma hdrstop

#define OP_RETF	0xcb

/*
=============================================================================

						  GLOBALS

=============================================================================
*/

t_compscale _seg *scaledirectory[MAXSCALEHEIGHT+1];
long			fullscalefarcall[MAXSCALEHEIGHT+1];

int			maxscale,maxscaleshl2;

boolean	insetupscaling;

/*
=============================================================================

						  LOCALS

=============================================================================
*/

t_compscale 	_seg *work;
unsigned BuildCompScale (int height, memptr *finalspot);

int			stepbytwo;

//===========================================================================

/*
==============
=
= BadScale
=
==============
*/

void far BadScale (void)
{
	Quit ("BadScale called!");
}


/*
==========================
=
= SetupScaling
=
==========================
*/

void SetupScaling (int maxscaleheight)
{
	int		i,x,y;
	byte	far *dest;

	insetupscaling = true;

	maxscaleheight/=2;			// one scaler every two pixels

	maxscale = maxscaleheight-1;
	maxscaleshl2 = maxscale<<2;

//
// free up old scalers
//
	for (i=1;i<MAXSCALEHEIGHT;i++)
	{
		if (scaledirectory[i])
			MM_FreePtr (&(memptr)scaledirectory[i]);
		if (i>=stepbytwo)
			i += 2;
	}
	memset (scaledirectory,0,sizeof(scaledirectory));

	MM_SortMem ();

//
// build the compiled scalers
//
	stepbytwo = viewheight/2;	// save space by double stepping
	MM_GetPtr (&(memptr)work,20000);

	for (i=1;i<=maxscaleheight;i++)
	{
		BuildCompScale (i*2,&(memptr)scaledirectory[i]);
		if (i>=stepbytwo)
			i+= 2;
	}
	MM_FreePtr (&(memptr)work);

//
// compact memory and lock down scalers
//
	MM_SortMem ();
	for (i=1;i<=maxscaleheight;i++)
	{
		MM_SetLock (&(memptr)scaledirectory[i],true);
		fullscalefarcall[i] = (unsigned)scaledirectory[i];
		fullscalefarcall[i] <<=16;
		fullscalefarcall[i] += scaledirectory[i]->codeofs[0];
		if (i>=stepbytwo)
		{
			scaledirectory[i+1] = scaledirectory[i];
			fullscalefarcall[i+1] = fullscalefarcall[i];
			scaledirectory[i+2] = scaledirectory[i];
			fullscalefarcall[i+2] = fullscalefarcall[i];
			i+=2;
		}
	}
	scaledirectory[0] = scaledirectory[1];
	fullscalefarcall[0] = fullscalefarcall[1];

//
// check for oversize wall drawing
//
	for (i=maxscaleheight;i<MAXSCALEHEIGHT;i++)
		fullscalefarcall[i] = (long)BadScale;

	insetupscaling = false;
}

//===========================================================================

/*
========================
=
= BuildCompScale
=
= Builds a compiled scaler object that will scale a 64 tall object to
= the given height (centered vertically on the screen)
=
= height should be even
=
= Call with
= ---------
= DS:SI		Source for scale
= ES:DI		Dest for scale
=
= Calling the compiled scaler only destroys AL
=
========================
*/

unsigned BuildCompScale (int height, memptr *finalspot)
{
	byte		far *code;

	int			i;
	long		fix,step;
	unsigned	src,totalscaled,totalsize;
	int			startpix,endpix,toppix;


	step = ((long)height<<16) / 64;
	code = &work->code[0];
	toppix = (viewheight-height)/2;
	fix = 0;

	for (src=0;src<=64;src++)
	{
		startpix = fix>>16;
		fix += step;
		endpix = fix>>16;

		if (endpix>startpix)
			work->width[src] = endpix-startpix;
		else
			work->width[src] = 0;

//
// mark the start of the code
//
		work->codeofs[src] = FP_OFF(code);

//
// compile some code if the source pixel generates any screen pixels
//
		startpix+=toppix;
		endpix+=toppix;

		if (startpix == endpix || endpix < 0 || startpix >= viewheight || src == 64)
			continue;

	//
	// mov al,[si+src]
	//
		*code++ = 0x8a;
		*code++ = 0x44;
		*code++ = src;

		for (;startpix<endpix;startpix++)
		{
			if (startpix >= viewheight)
				break;						// off the bottom of the view area
			if (startpix < 0)
				continue;					// not into the view area

		//
		// mov [es:di+heightofs],al
		//
			*code++ = 0x26;
			*code++ = 0x88;
			*code++ = 0x85;
			*((unsigned far *)code)++ = startpix*SCREENBWIDE;
		}

	}

//
// retf
//
	*code++ = 0xcb;

	totalsize = FP_OFF(code);
	MM_GetPtr (finalspot,totalsize);
	_fmemcpy ((byte _seg *)(*finalspot),(byte _seg *)work,totalsize);

	return totalsize;
}


/*
=======================
=
= ScaleLine
=
= linescale should have the high word set to the segment of the scaler
=
=======================
*/

extern	int			slinex,slinewidth;
extern	unsigned	far *linecmds;
extern	long		linescale;
extern	unsigned	maskword;

byte	mask1,mask2,mask3;


void near ScaleLine (void)
{
asm	mov	cx,WORD PTR [linescale+2]
asm	mov	es,cx						// segment of scaler

asm	mov bp,WORD PTR [linecmds]
asm	mov	dx,SC_INDEX+1				// to set SC_MAPMASK

asm	mov	bx,[slinex]
asm	mov	di,bx
asm	shr	di,2						// X in bytes
asm	add	di,[bufferofs]
asm	and	bx,3
asm	shl	bx,3
asm	add	bx,[slinewidth]				// bx = (pixel*8+pixwidth)
asm	mov	al,BYTE [mapmasks3-1+bx]	// -1 because pixwidth of 1 is first
asm	mov	ds,WORD PTR [linecmds+2]
asm	or	al,al
asm	jz	notthreebyte				// scale across three bytes
asm	jmp	threebyte
notthreebyte:
asm	mov	al,BYTE PTR ss:[mapmasks2-1+bx]	// -1 because pixwidth of 1 is first
asm	or	al,al
asm	jnz	twobyte						// scale across two bytes

//
// one byte scaling
//
asm	mov	al,BYTE PTR ss:[mapmasks1-1+bx]	// -1 because pixwidth of 1 is first
asm	out	dx,al						// set map mask register

scalesingle:

asm	mov	bx,[ds:bp]					// table location of rtl to patch
asm	or	bx,bx
asm	jz	linedone					// 0 signals end of segment list
asm	mov	bx,[es:bx]
asm	mov	dl,[es:bx]					// save old value
asm	mov	BYTE PTR es:[bx],OP_RETF	// patch a RETF in
asm	mov	si,[ds:bp+4]				// table location of entry spot
asm	mov	ax,[es:si]
asm	mov	WORD PTR ss:[linescale],ax	// call here to start scaling
asm	mov	si,[ds:bp+2]				// corrected top of shape for this segment
asm	add	bp,6						// next segment list

asm	mov	ax,SCREENSEG
asm	mov	es,ax
asm	call ss:[linescale]				// scale the segment of pixels

asm	mov	es,cx						// segment of scaler
asm	mov	BYTE PTR es:[bx],dl			// unpatch the RETF
asm	jmp	scalesingle					// do the next segment


//
// done
//
linedone:
asm	mov	ax,ss
asm	mov	ds,ax
return;

//
// two byte scaling
//
twobyte:
asm	mov	ss:[mask2],al
asm	mov	al,BYTE PTR ss:[mapmasks1-1+bx]	// -1 because pixwidth of 1 is first
asm	mov	ss:[mask1],al

scaledouble:

asm	mov	bx,[ds:bp]					// table location of rtl to patch
asm	or	bx,bx
asm	jz	linedone					// 0 signals end of segment list
asm	mov	bx,[es:bx]
asm	mov	cl,[es:bx]					// save old value
asm	mov	BYTE PTR es:[bx],OP_RETF	// patch a RETF in
asm	mov	si,[ds:bp+4]				// table location of entry spot
asm	mov	ax,[es:si]
asm	mov	WORD PTR ss:[linescale],ax	// call here to start scaling
asm	mov	si,[ds:bp+2]				// corrected top of shape for this segment
asm	add	bp,6						// next segment list

asm	mov	ax,SCREENSEG
asm	mov	es,ax
asm	mov	al,ss:[mask1]
asm	out	dx,al						// set map mask register
asm	call ss:[linescale]				// scale the segment of pixels
asm	inc	di
asm	mov	al,ss:[mask2]
asm	out	dx,al						// set map mask register
asm	call ss:[linescale]				// scale the segment of pixels
asm	dec	di

asm	mov	es,WORD PTR ss:[linescale+2] // segment of scaler
asm	mov	BYTE PTR es:[bx],cl			// unpatch the RETF
asm	jmp	scaledouble					// do the next segment


//
// three byte scaling
//
threebyte:
asm	mov	ss:[mask3],al
asm	mov	al,BYTE PTR ss:[mapmasks2-1+bx]	// -1 because pixwidth of 1 is first
asm	mov	ss:[mask2],al
asm	mov	al,BYTE PTR ss:[mapmasks1-1+bx]	// -1 because pixwidth of 1 is first
asm	mov	ss:[mask1],al

scaletriple:

asm	mov	bx,[ds:bp]					// table location of rtl to patch
asm	or	bx,bx
asm	jz	linedone					// 0 signals end of segment list
asm	mov	bx,[es:bx]
asm	mov	cl,[es:bx]					// save old value
asm	mov	BYTE PTR es:[bx],OP_RETF	// patch a RETF in
asm	mov	si,[ds:bp+4]				// table location of entry spot
asm	mov	ax,[es:si]
asm	mov	WORD PTR ss:[linescale],ax	// call here to start scaling
asm	mov	si,[ds:bp+2]				// corrected top of shape for this segment
asm	add	bp,6						// next segment list

asm	mov	ax,SCREENSEG
asm	mov	es,ax
asm	mov	al,ss:[mask1]
asm	out	dx,al						// set map mask register
asm	call ss:[linescale]				// scale the segment of pixels
asm	inc	di
asm	mov	al,ss:[mask2]
asm	out	dx,al						// set map mask register
asm	call ss:[linescale]				// scale the segment of pixels
asm	inc	di
asm	mov	al,ss:[mask3]
asm	out	dx,al						// set map mask register
asm	call ss:[linescale]				// scale the segment of pixels
asm	dec	di
asm	dec	di

asm	mov	es,WORD PTR ss:[linescale+2] // segment of scaler
asm	mov	BYTE PTR es:[bx],cl			// unpatch the RETF
asm	jmp	scaletriple					// do the next segment


}


/*
=======================
=
= ScaleShape
=
= Draws a compiled shape at [scale] pixels high
=
= each vertical line of the shape has a pointer to segment data:
= 	end of segment pixel*2 (0 terminates line) used to patch rtl in scaler
= 	top of virtual line with segment in proper place
=	start of segment pixel*2, used to jsl into compiled scaler
=	<repeat>
=
= Setup for call
= --------------
= GC_MODE			read mode 1, write mode 2
= GC_COLORDONTCARE  set to 0, so all reads from video memory return 0xff
= GC_INDEX			pointing at GC_BITMASK
=
=======================
*/

static	long		longtemp;

void ScaleShape (int xcenter, int shapenum, unsigned height)
{
	t_compshape	_seg *shape;
	t_compscale _seg *comptable;
	unsigned	scale,srcx,stopx,tempx;
	int			t;
	unsigned	far *cmdptr;
	boolean		leftvis,rightvis;


	shape = PM_GetSpritePage (shapenum);

	scale = height>>3;						// low three bits are fractional
	if (!scale || scale>maxscale)
		return;								// too close or far away
	comptable = scaledirectory[scale];

	*(((unsigned *)&linescale)+1)=(unsigned)comptable;	// seg of far call
	*(((unsigned *)&linecmds)+1)=(unsigned)shape;		// seg of shape

//
// scale to the left (from pixel 31 to shape->leftpix)
//
	srcx = 32;
	slinex = xcenter;
	stopx = shape->leftpix;
	cmdptr = &shape->dataofs[31-stopx];

	while ( --srcx >=stopx && slinex>0)
	{
		(unsigned)linecmds = *cmdptr--;
		if ( !(slinewidth = comptable->width[srcx]) )
			continue;

		if (slinewidth == 1)
		{
			slinex--;
			if (slinex<viewwidth)
			{
				if (wallheight[slinex] >= height)
					continue;		// obscured by closer wall
				ScaleLine ();
			}
			continue;
		}

		//
		// handle multi pixel lines
		//
		if (slinex>viewwidth)
		{
			slinex -= slinewidth;
			slinewidth = viewwidth-slinex;
			if (slinewidth<1)
				continue;		// still off the right side
		}
		else
		{
			if (slinewidth>slinex)
				slinewidth = slinex;
			slinex -= slinewidth;
		}


		leftvis = (wallheight[slinex] < height);
		rightvis = (wallheight[slinex+slinewidth-1] < height);

		if (leftvis)
		{
			if (rightvis)
				ScaleLine ();
			else
			{
				while (wallheight[slinex+slinewidth-1] >= height)
					slinewidth--;
				ScaleLine ();
			}
		}
		else
		{
			if (!rightvis)
				continue;		// totally obscured

			while (wallheight[slinex] >= height)
			{
				slinex++;
				slinewidth--;
			}
			ScaleLine ();
			break;			// the rest of the shape is gone
		}
	}


//
// scale to the right
//
	slinex = xcenter;
	stopx = shape->rightpix;
	if (shape->leftpix<31)
	{
		srcx = 31;
		cmdptr = &shape->dataofs[32-shape->leftpix];
	}
	else
	{
		srcx = shape->leftpix-1;
		cmdptr = &shape->dataofs[0];
	}
	slinewidth = 0;

	while ( ++srcx <= stopx && (slinex+=slinewidth)<viewwidth)
	{
		(unsigned)linecmds = *cmdptr++;
		if ( !(slinewidth = comptable->width[srcx]) )
			continue;

		if (slinewidth == 1)
		{
			if (slinex>=0 && wallheight[slinex] < height)
			{
				ScaleLine ();
			}
			continue;
		}

		//
		// handle multi pixel lines
		//
		if (slinex<0)
		{
			if (slinewidth <= -slinex)
				continue;		// still off the left edge

			slinewidth += slinex;
			slinex = 0;
		}
		else
		{
			if (slinex + slinewidth > viewwidth)
				slinewidth = viewwidth-slinex;
		}


		leftvis = (wallheight[slinex] < height);
		rightvis = (wallheight[slinex+slinewidth-1] < height);

		if (leftvis)
		{
			if (rightvis)
			{
				ScaleLine ();
			}
			else
			{
				while (wallheight[slinex+slinewidth-1] >= height)
					slinewidth--;
				ScaleLine ();
				break;			// the rest of the shape is gone
			}
		}
		else
		{
			if (rightvis)
			{
				while (wallheight[slinex] >= height)
				{
					slinex++;
					slinewidth--;
				}
				ScaleLine ();
			}
			else
				continue;		// totally obscured
		}
	}
}



/*
=======================
=
= SimpleScaleShape
=
= NO CLIPPING, height in pixels
=
= Draws a compiled shape at [scale] pixels high
=
= each vertical line of the shape has a pointer to segment data:
= 	end of segment pixel*2 (0 terminates line) used to patch rtl in scaler
= 	top of virtual line with segment in proper place
=	start of segment pixel*2, used to jsl into compiled scaler
=	<repeat>
=
= Setup for call
= --------------
= GC_MODE			read mode 1, write mode 2
= GC_COLORDONTCARE  set to 0, so all reads from video memory return 0xff
= GC_INDEX			pointing at GC_BITMASK
=
=======================
*/

void SimpleScaleShape (int xcenter, int shapenum, unsigned height)
{
	t_compshape	_seg *shape;
	t_compscale _seg *comptable;
	unsigned	scale,srcx,stopx,tempx;
	int			t;
	unsigned	far *cmdptr;
	boolean		leftvis,rightvis;


	shape = PM_GetSpritePage (shapenum);

	scale = height>>1;
	comptable = scaledirectory[scale];

	*(((unsigned *)&linescale)+1)=(unsigned)comptable;	// seg of far call
	*(((unsigned *)&linecmds)+1)=(unsigned)shape;		// seg of shape

//
// scale to the left (from pixel 31 to shape->leftpix)
//
	srcx = 32;
	slinex = xcenter;
	stopx = shape->leftpix;
	cmdptr = &shape->dataofs[31-stopx];

	while ( --srcx >=stopx )
	{
		(unsigned)linecmds = *cmdptr--;
		if ( !(slinewidth = comptable->width[srcx]) )
			continue;

		slinex -= slinewidth;
		ScaleLine ();
	}


//
// scale to the right
//
	slinex = xcenter;
	stopx = shape->rightpix;
	if (shape->leftpix<31)
	{
		srcx = 31;
		cmdptr = &shape->dataofs[32-shape->leftpix];
	}
	else
	{
		srcx = shape->leftpix-1;
		cmdptr = &shape->dataofs[0];
	}
	slinewidth = 0;

	while ( ++srcx <= stopx )
	{
		(unsigned)linecmds = *cmdptr++;
		if ( !(slinewidth = comptable->width[srcx]) )
			continue;

		ScaleLine ();
		slinex+=slinewidth;
	}
}




//
// bit mask tables for drawing scaled strips up to eight pixels wide
//
// down here so the STUPID inline assembler doesn't get confused!
//


byte	mapmasks1[4][8] = {
{1 ,3 ,7 ,15,15,15,15,15},
{2 ,6 ,14,14,14,14,14,14},
{4 ,12,12,12,12,12,12,12},
{8 ,8 ,8 ,8 ,8 ,8 ,8 ,8} };

byte	mapmasks2[4][8] = {
{0 ,0 ,0 ,0 ,1 ,3 ,7 ,15},
{0 ,0 ,0 ,1 ,3 ,7 ,15,15},
{0 ,0 ,1 ,3 ,7 ,15,15,15},
{0 ,1 ,3 ,7 ,15,15,15,15} };

byte	mapmasks3[4][8] = {
{0 ,0 ,0 ,0 ,0 ,0 ,0 ,0},
{0 ,0 ,0 ,0 ,0 ,0 ,0 ,1},
{0 ,0 ,0 ,0 ,0 ,0 ,1 ,3},
{0 ,0 ,0 ,0 ,0 ,1 ,3 ,7} };


unsigned	wordmasks[8][8] = {
{0x0080,0x00c0,0x00e0,0x00f0,0x00f8,0x00fc,0x00fe,0x00ff},
{0x0040,0x0060,0x0070,0x0078,0x007c,0x007e,0x007f,0x807f},
{0x0020,0x0030,0x0038,0x003c,0x003e,0x003f,0x803f,0xc03f},
{0x0010,0x0018,0x001c,0x001e,0x001f,0x801f,0xc01f,0xe01f},
{0x0008,0x000c,0x000e,0x000f,0x800f,0xc00f,0xe00f,0xf00f},
{0x0004,0x0006,0x0007,0x8007,0xc007,0xe007,0xf007,0xf807},
{0x0002,0x0003,0x8003,0xc003,0xe003,0xf003,0xf803,0xfc03},
{0x0001,0x8001,0xc001,0xe001,0xf001,0xf801,0xfc01,0xfe01} };

int			slinex,slinewidth;
unsigned	far *linecmds;
long		linescale;
unsigned	maskword;

```