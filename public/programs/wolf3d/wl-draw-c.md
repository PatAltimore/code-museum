---
title: "WL_DRAW.C"
program: "Wolfenstein 3D"
program_slug: "wolf3d"
file_path: "WOLFSRC/WL_DRAW.C"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/wolf3d/blob/master/WOLFSRC/WL_DRAW.C"
year: 1992
author: "John Carmack, John Romero, Tom Hall"
slug: "wl-draw-c"
order: 6
description: "This file showcases the ingenious rendering techniques used in Wolfenstein 3D to achieve pseudo-3D graphics on limited hardware."

summary:
  - point: "Fixed-point arithmetic for fast calculations"
    link: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    link_label: "Fixed-point arithmetic"
  - point: "Raycasting for wall and object rendering"
    link: "https://en.wikipedia.org/wiki/Ray_casting"
    link_label: "Raycasting"
  - point: "Optimized VGA screen clearing routines"
    link: "https://en.wikipedia.org/wiki/VGA"
    link_label: "VGA"
  - point: "Efficient scaling of wall textures"
    link: "https://en.wikipedia.org/wiki/Texture_mapping"
    link_label: "Texture mapping"
  - point: "Handling dynamic elements like doors and pushable walls"
    link: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    link_label: "Wolfenstein 3D"

enhancements:
  - id: "fixed-point-multiplication-trick"
    line_start: 128
    line_end: 181
    title: "The Fixed-Point Multiplication Trick"
    wikipedia_url: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    image_url: ""
    image_caption: ""
    content: "The `FixedByFrac` function performs fixed-point multiplication, a technique crucial for fast calculations in Wolfenstein 3D. Fixed-point arithmetic was used instead of floating-point because early CPUs like the Intel 386 lacked hardware support for floating-point operations, making them slow and impractical for real-time graphics. This function multiplies a 16.16 fixed-point number by a 16-bit fraction, leveraging assembly language for efficiency. By carefully managing signs and using 32-bit registers for intermediate results, the function avoids overflow and ensures precision. This approach was inspired by techniques used in earlier games like Commander Keen, also developed by id Software. Fixed-point arithmetic became a staple in game development for years, influencing engines like Doom and Quake, which further refined these methods for increasingly complex 3D environments."
  - id: "actor-transformation-to-screen"
    line_start: 207
    line_end: 262
    title: "Transforming Actors to Screen Coordinates"
    wikipedia_url: "https://en.wikipedia.org/wiki/Ray_casting"
    image_url: ""
    image_caption: ""
    content: "The `TransformActor` function calculates the screen position and size of game objects based on the player's viewpoint. It uses trigonometric calculations (via fixed-point arithmetic) to project global coordinates into screen space. This function is part of the raycasting engine that powers Wolfenstein 3D's pseudo-3D graphics. By translating world coordinates relative to the player's position and angle, it determines whether an object is visible and calculates its perspective-correct size. This method was groundbreaking in 1992, enabling immersive first-person gameplay on hardware with limited graphical capabilities. The techniques developed here directly influenced later games like Doom, which expanded on raycasting to create more complex environments and dynamic lighting."
  - id: "tile-transformation-distance-check"
    line_start: 264
    line_end: 343
    title: "Transforming Tiles and Checking Reachability"
    wikipedia_url: "https://en.wikipedia.org/wiki/Ray_casting"
    image_url: ""
    image_caption: ""
    content: "The `TransformTile` function projects tile coordinates into screen space and determines whether a tile is within the player's reach. This routine is essential for handling interactions like picking up items or triggering events. It uses similar fixed-point trigonometric calculations as `TransformActor`, but adds logic to check proximity and visibility. The ability to interact with tiles in real-time was a key feature of Wolfenstein 3D, enhancing gameplay by allowing dynamic actions within the environment. This approach laid the groundwork for more sophisticated interaction systems in later games, such as Doom's switches and Quake's physics-based objects."
  - id: "scaling-wall-textures-vga"
    line_start: 400
    line_end: 458
    title: "Scaling Wall Textures for VGA Rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/VGA"
    image_url: ""
    image_caption: ""
    content: "The `ScalePost` function scales wall textures to match their projected height on the screen. It uses VGA-specific assembly instructions to manipulate the screen buffer directly, ensuring fast and efficient rendering. This routine calculates the height of a vertical strip of wall and draws it pixel by pixel, adjusting for perspective. The use of VGA hardware registers and bitmasking demonstrates deep knowledge of the graphics hardware, allowing Wolfenstein 3D to achieve smooth scrolling and detailed textures. This technique influenced the development of texture mapping in later 3D engines, paving the way for games like Doom and Quake to deliver even more visually impressive experiences."
  - id: "dynamic-door-handling"
    line_start: 610
    line_end: 676
    title: "Dynamic Door Rendering and Interaction"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `HitHorizDoor` function handles the rendering and interaction logic for horizontal doors. It calculates the texture offset based on the door's position and state, ensuring that doors appear correctly as they open and close. This routine also optimizes rendering by grouping consecutive pixels into wider strips when possible. Doors were a dynamic element in Wolfenstein 3D, adding complexity to the environment and enhancing the sense of immersion. The techniques developed here influenced later games, where dynamic elements like moving platforms and destructible objects became standard features in 3D environments."
  - id: "vga-screen-clear"
    line_start: 962
    line_end: 1012
    title: "Clearing the Screen with VGA Registers"
    wikipedia_url: "https://en.wikipedia.org/wiki/VGA"
    image_url: ""
    image_caption: ""
    content: "The `VGAClearScreen` function clears the screen using VGA-specific assembly instructions. It writes directly to the screen buffer, filling the top half with a ceiling texture and the bottom half with a floor texture. This routine demonstrates id Software's mastery of VGA hardware, achieving efficient rendering by bypassing higher-level APIs. By directly manipulating VGA registers, the developers ensured consistent performance across a wide range of hardware. This low-level optimization was crucial for Wolfenstein 3D's fast-paced gameplay and influenced the development of other performance-critical routines in games like Doom and Quake."
  - id: "calc-rotate-sprite-orientation"
    line_start: 1014
    line_end: 1048
    title: "The Eight-Angle Sprite Rotation Shortcut"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `CalcRotate` function determines the correct sprite orientation based on the player's view angle and the object's direction. By simplifying rotation calculations to eight discrete angles, the developers avoided expensive trigonometric operations, which were computationally prohibitive on early 1990s hardware. This approach was 'close enough' for the fast-paced gameplay of Wolfenstein 3D, where precision was less critical than speed. At the time, sprite-based graphics were common, but handling rotations efficiently was a challenge. John Carmack's decision to use this approximation reflects his focus on performance optimization. This technique influenced later games that used similar shortcuts for sprite rotation, particularly in the FPS genre, where speed was paramount."
  - id: "draw-scaleds-object-rendering"
    line_start: 1072
    line_end: 1184
    title: "Sorting and Rendering Objects by Depth"
    wikipedia_url: "https://en.wikipedia.org/wiki/Z-buffering"
    image_url: ""
    image_caption: ""
    content: "The `DrawScaleds` function is responsible for rendering visible objects in the game world, sorted by their distance from the player. This ensures that objects farther away are drawn first, allowing closer objects to overlap them correctly. The function uses a visibility list (`vislist`) to track objects and their attributes, such as view height and position. By iterating through static and active objects, it determines visibility and applies transformations to prepare them for rendering. The sorting mechanism, while not a true Z-buffer, achieves similar results by manually finding the farthest object and drawing it first. This approach was a clever workaround for the lack of hardware support for Z-buffering on VGA systems. It laid the groundwork for depth-sorting techniques in later 3D engines, influencing games like Doom and Quake."
  - id: "draw-player-weapon-hud-rendering"
    line_start: 1201
    line_end: 1222
    title: "Rendering the Player's Weapon as a HUD Element"
    wikipedia_url: "https://en.wikipedia.org/wiki/Heads-up_display_(video_games)"
    image_url: ""
    image_caption: ""
    content: "The `DrawPlayerWeapon` function renders the player's weapon as a static HUD element, centered at the bottom of the screen. This technique, popularized by Wolfenstein 3D, became a defining feature of first-person shooters. The function selects the appropriate sprite based on the player's current weapon and animation frame, ensuring smooth transitions during gameplay. By decoupling the weapon rendering from the game world, the developers maintained consistent performance and visual clarity. This approach influenced countless FPS titles, including Doom and Half-Life, where weapon visibility became an essential part of the player's experience."
  - id: "calc-tics-adaptive-timing"
    line_start: 1228
    line_end: 1267
    title: "Adaptive Timing for Smooth Gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Frame_rate"
    image_url: ""
    image_caption: ""
    content: "The `CalcTics` function calculates the number of 'tics' (time units) since the last frame, ensuring consistent gameplay timing regardless of hardware speed. By adapting to the system's clock, the game could run smoothly on a wide range of machines, from high-end PCs to slower, budget systems. This was critical in the early 1990s, when hardware performance varied widely. The function also prevents excessive tics accumulation during long pauses, ensuring the game remains responsive. This adaptive timing mechanism was a precursor to modern frame rate management techniques, influencing game engines that prioritize consistent user experience across diverse platforms."
  - id: "wall-refresh-pseudo-3d-rendering"
    line_start: 1290
    line_end: 1324
    title: "Raycasting Walls for Pseudo-3D Graphics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Raycasting"
    image_url: ""
    image_caption: ""
    content: "The `WallRefresh` function sets up the player's view and calculates the necessary parameters for rendering walls using raycasting. By tracing rays from the player's perspective, it determines the visible portions of walls and their distances, enabling the game to draw them with correct scaling and perspective. This technique was a cornerstone of Wolfenstein 3D's pseudo-3D graphics, allowing immersive environments on hardware incapable of true 3D rendering. Raycasting became a foundational technique for early FPS games, influencing titles like Doom and inspiring the development of more advanced rendering algorithms in later years."
  - id: "three-d-refresh-full-screen-rendering"
    line_start: 1326
    line_end: 1399
    title: "Combining Walls, Objects, and HUD in One Frame"
    wikipedia_url: "https://en.wikipedia.org/wiki/VGA"
    image_url: ""
    image_caption: ""
    content: "The `ThreeDRefresh` function orchestrates the rendering of an entire frame, combining wall rendering, object scaling, and HUD elements like the player's weapon. It begins by clearing the screen and resetting visibility arrays, then calls `WallRefresh` to draw the environment, followed by `DrawScaleds` and `DrawPlayerWeapon` for interactive elements. The function also manages VGA memory directly, ensuring smooth updates and transitions. This level of control over hardware was essential for achieving Wolfenstein 3D's performance and visual fidelity. The techniques demonstrated here influenced later game engines, which continued to optimize rendering pipelines for immersive gameplay."

---

```cpp
// WL_DRAW.C

#include "WL_DEF.H"
#include <DOS.H>
#pragma hdrstop

//#define DEBUGWALLS
//#define DEBUGTICS

/*
=============================================================================

						 LOCAL CONSTANTS

=============================================================================
*/

// the door is the last picture before the sprites
#define DOORWALL	(PMSpriteStart-8)

#define ACTORSIZE	0x4000

/*
=============================================================================

						 GLOBAL VARIABLES

=============================================================================
*/


#ifdef DEBUGWALLS
unsigned screenloc[3]= {0,0,0};
#else
unsigned screenloc[3]= {PAGE1START,PAGE2START,PAGE3START};
#endif
unsigned freelatch = FREESTART;

long 	lasttimecount;
long 	frameon;

unsigned	wallheight[MAXVIEWWIDTH];

fixed	tileglobal	= TILEGLOBAL;
fixed	mindist		= MINDIST;


//
// math tables
//
int			pixelangle[MAXVIEWWIDTH];
long		far finetangent[FINEANGLES/4];
fixed 		far sintable[ANGLES+ANGLES/4],far *costable = sintable+(ANGLES/4);

//
// refresh variables
//
fixed	viewx,viewy;			// the focal point
int		viewangle;
fixed	viewsin,viewcos;



fixed	FixedByFrac (fixed a, fixed b);
void	TransformActor (objtype *ob);
void	BuildTables (void);
void	ClearScreen (void);
int		CalcRotate (objtype *ob);
void	DrawScaleds (void);
void	CalcTics (void);
void	FixOfs (void);
void	ThreeDRefresh (void);



//
// wall optimization variables
//
int		lastside;		// true for vertical
long	lastintercept;
int		lasttilehit;


//
// ray tracing variables
//
int			focaltx,focalty,viewtx,viewty;

int			midangle,angle;
unsigned	xpartial,ypartial;
unsigned	xpartialup,xpartialdown,ypartialup,ypartialdown;
unsigned	xinttile,yinttile;

unsigned	tilehit;
unsigned	pixx;

int		xtile,ytile;
int		xtilestep,ytilestep;
long	xintercept,yintercept;
long	xstep,ystep;

int		horizwall[MAXWALLTILES],vertwall[MAXWALLTILES];


/*
=============================================================================

						 LOCAL VARIABLES

=============================================================================
*/


void AsmRefresh (void);			// in WL_DR_A.ASM

/*
============================================================================

			   3 - D  DEFINITIONS

============================================================================
*/


//==========================================================================


/*
========================
=
= FixedByFrac
=
= multiply a 16/16 bit, 2's complement fixed point number by a 16 bit
= fraction, passed as a signed magnitude 32 bit number
=
========================
*/

#pragma warn -rvl			// I stick the return value in with ASMs

fixed FixedByFrac (fixed a, fixed b)
{
//
// setup
//
asm	mov	si,[WORD PTR b+2]	// sign of result = sign of fraction

asm	mov	ax,[WORD PTR a]
asm	mov	cx,[WORD PTR a+2]

asm	or	cx,cx
asm	jns	aok:				// negative?
asm	neg	cx
asm	neg	ax
asm	sbb	cx,0
asm	xor	si,0x8000			// toggle sign of result
aok:

//
// multiply  cx:ax by bx
//
asm	mov	bx,[WORD PTR b]
asm	mul	bx					// fraction*fraction
asm	mov	di,dx				// di is low word of result
asm	mov	ax,cx				//
asm	mul	bx					// units*fraction
asm add	ax,di
asm	adc	dx,0

//
// put result dx:ax in 2's complement
//
asm	test	si,0x8000		// is the result negative?
asm	jz	ansok:
asm	neg	dx
asm	neg	ax
asm	sbb	dx,0

ansok:;

}

#pragma warn +rvl

//==========================================================================

/*
========================
=
= TransformActor
=
= Takes paramaters:
=   gx,gy		: globalx/globaly of point
=
= globals:
=   viewx,viewy		: point of view
=   viewcos,viewsin	: sin/cos of viewangle
=   scale		: conversion from global value to screen value
=
= sets:
=   screenx,transx,transy,screenheight: projected edge location and size
=
========================
*/


//
// transform actor
//
void TransformActor (objtype *ob)
{
	int ratio;
	fixed gx,gy,gxt,gyt,nx,ny;
	long	temp;

//
// translate point to view centered coordinates
//
	gx = ob->x-viewx;
	gy = ob->y-viewy;

//
// calculate newx
//
	gxt = FixedByFrac(gx,viewcos);
	gyt = FixedByFrac(gy,viewsin);
	nx = gxt-gyt-ACTORSIZE;		// fudge the shape forward a bit, because
								// the midpoint could put parts of the shape
								// into an adjacent wall

//
// calculate newy
//
	gxt = FixedByFrac(gx,viewsin);
	gyt = FixedByFrac(gy,viewcos);
	ny = gyt+gxt;

//
// calculate perspective ratio
//
	ob->transx = nx;
	ob->transy = ny;

	if (nx<mindist)			// too close, don't overflow the divide
	{
	  ob->viewheight = 0;
	  return;
	}

	ob->viewx = centerx + ny*scale/nx;	// DEBUG: use assembly divide

//
// calculate height (heightnumerator/(nx>>8))
//
	asm	mov	ax,[WORD PTR heightnumerator]
	asm	mov	dx,[WORD PTR heightnumerator+2]
	asm	idiv	[WORD PTR nx+1]			// nx>>8
	asm	mov	[WORD PTR temp],ax
	asm	mov	[WORD PTR temp+2],dx

	ob->viewheight = temp;
}

//==========================================================================

/*
========================
=
= TransformTile
=
= Takes paramaters:
=   tx,ty		: tile the object is centered in
=
= globals:
=   viewx,viewy		: point of view
=   viewcos,viewsin	: sin/cos of viewangle
=   scale		: conversion from global value to screen value
=
= sets:
=   screenx,transx,transy,screenheight: projected edge location and size
=
= Returns true if the tile is withing getting distance
=
========================
*/

boolean TransformTile (int tx, int ty, int *dispx, int *dispheight)
{
	int ratio;
	fixed gx,gy,gxt,gyt,nx,ny;
	long	temp;

//
// translate point to view centered coordinates
//
	gx = ((long)tx<<TILESHIFT)+0x8000-viewx;
	gy = ((long)ty<<TILESHIFT)+0x8000-viewy;

//
// calculate newx
//
	gxt = FixedByFrac(gx,viewcos);
	gyt = FixedByFrac(gy,viewsin);
	nx = gxt-gyt-0x2000;		// 0x2000 is size of object

//
// calculate newy
//
	gxt = FixedByFrac(gx,viewsin);
	gyt = FixedByFrac(gy,viewcos);
	ny = gyt+gxt;


//
// calculate perspective ratio
//
	if (nx<mindist)			// too close, don't overflow the divide
	{
		*dispheight = 0;
		return false;
	}

	*dispx = centerx + ny*scale/nx;	// DEBUG: use assembly divide

//
// calculate height (heightnumerator/(nx>>8))
//
	asm	mov	ax,[WORD PTR heightnumerator]
	asm	mov	dx,[WORD PTR heightnumerator+2]
	asm	idiv	[WORD PTR nx+1]			// nx>>8
	asm	mov	[WORD PTR temp],ax
	asm	mov	[WORD PTR temp+2],dx

	*dispheight = temp;

//
// see if it should be grabbed
//
	if (nx<TILEGLOBAL && ny>-TILEGLOBAL/2 && ny<TILEGLOBAL/2)
		return true;
	else
		return false;
}

//==========================================================================

/*
====================
=
= CalcHeight
=
= Calculates the height of xintercept,yintercept from viewx,viewy
=
====================
*/

#pragma warn -rvl			// I stick the return value in with ASMs

int	CalcHeight (void)
{
	int	transheight;
	int ratio;
	fixed gxt,gyt,nx,ny;
	long	gx,gy;

	gx = xintercept-viewx;
	gxt = FixedByFrac(gx,viewcos);

	gy = yintercept-viewy;
	gyt = FixedByFrac(gy,viewsin);

	nx = gxt-gyt;

  //
  // calculate perspective ratio (heightnumerator/(nx>>8))
  //
	if (nx<mindist)
		nx=mindist;			// don't let divide overflow

	asm	mov	ax,[WORD PTR heightnumerator]
	asm	mov	dx,[WORD PTR heightnumerator+2]
	asm	idiv	[WORD PTR nx+1]			// nx>>8
}


//==========================================================================

/*
===================
=
= ScalePost
=
===================
*/

long		postsource;
unsigned	postx;
unsigned	postwidth;

void	near ScalePost (void)		// VGA version
{
	asm	mov	ax,SCREENSEG
	asm	mov	es,ax

	asm	mov	bx,[postx]
	asm	shl	bx,1
	asm	mov	bp,WORD PTR [wallheight+bx]		// fractional height (low 3 bits frac)
	asm	and	bp,0xfff8				// bp = heightscaler*4
	asm	shr	bp,1
	asm	cmp	bp,[maxscaleshl2]
	asm	jle	heightok
	asm	mov	bp,[maxscaleshl2]
heightok:
	asm	add	bp,OFFSET fullscalefarcall
	//
	// scale a byte wide strip of wall
	//
	asm	mov	bx,[postx]
	asm	mov	di,bx
	asm	shr	di,2						// X in bytes
	asm	add	di,[bufferofs]

	asm	and	bx,3
	asm	shl	bx,3						// bx = pixel*8+pixwidth
	asm	add	bx,[postwidth]

	asm	mov	al,BYTE PTR [mapmasks1-1+bx]	// -1 because no widths of 0
	asm	mov	dx,SC_INDEX+1
	asm	out	dx,al						// set bit mask register
	asm	lds	si,DWORD PTR [postsource]
	asm	call DWORD PTR [bp]				// scale the line of pixels

	asm	mov	al,BYTE PTR [ss:mapmasks2-1+bx]   // -1 because no widths of 0
	asm	or	al,al
	asm	jz	nomore

	//
	// draw a second byte for vertical strips that cross two bytes
	//
	asm	inc	di
	asm	out	dx,al						// set bit mask register
	asm	call DWORD PTR [bp]				// scale the line of pixels

	asm	mov	al,BYTE PTR [ss:mapmasks3-1+bx]	// -1 because no widths of 0
	asm	or	al,al
	asm	jz	nomore
	//
	// draw a third byte for vertical strips that cross three bytes
	//
	asm	inc	di
	asm	out	dx,al						// set bit mask register
	asm	call DWORD PTR [bp]				// scale the line of pixels


nomore:
	asm	mov	ax,ss
	asm	mov	ds,ax
}

void  FarScalePost (void)				// just so other files can call
{
	ScalePost ();
}


/*
====================
=
= HitVertWall
=
= tilehit bit 7 is 0, because it's not a door tile
= if bit 6 is 1 and the adjacent tile is a door tile, use door side pic
=
====================
*/

void HitVertWall (void)
{
	int			wallpic;
	unsigned	texture;

	texture = (yintercept>>4)&0xfc0;
	if (xtilestep == -1)
	{
		texture = 0xfc0-texture;
		xintercept += TILEGLOBAL;
	}
	wallheight[pixx] = CalcHeight();

	if (lastside==1 && lastintercept == xtile && lasttilehit == tilehit)
	{
		// in the same wall type as last time, so check for optimized draw
		if (texture == (unsigned)postsource)
		{
		// wide scale
			postwidth++;
			wallheight[pixx] = wallheight[pixx-1];
			return;
		}
		else
		{
			ScalePost ();
			(unsigned)postsource = texture;
			postwidth = 1;
			postx = pixx;
		}
	}
	else
	{
	// new wall
		if (lastside != -1)				// if not the first scaled post
			ScalePost ();

		lastside = true;
		lastintercept = xtile;

		lasttilehit = tilehit;
		postx = pixx;
		postwidth = 1;

		if (tilehit & 0x40)
		{								// check for adjacent doors
			ytile = yintercept>>TILESHIFT;
			if ( tilemap[xtile-xtilestep][ytile]&0x80 )
				wallpic = DOORWALL+3;
			else
				wallpic = vertwall[tilehit & ~0x40];
		}
		else
			wallpic = vertwall[tilehit];

		*( ((unsigned *)&postsource)+1) = (unsigned)PM_GetPage(wallpic);
		(unsigned)postsource = texture;

	}
}


/*
====================
=
= HitHorizWall
=
= tilehit bit 7 is 0, because it's not a door tile
= if bit 6 is 1 and the adjacent tile is a door tile, use door side pic
=
====================
*/

void HitHorizWall (void)
{
	int			wallpic;
	unsigned	texture;

	texture = (xintercept>>4)&0xfc0;
	if (ytilestep == -1)
		yintercept += TILEGLOBAL;
	else
		texture = 0xfc0-texture;
	wallheight[pixx] = CalcHeight();

	if (lastside==0 && lastintercept == ytile && lasttilehit == tilehit)
	{
		// in the same wall type as last time, so check for optimized draw
		if (texture == (unsigned)postsource)
		{
		// wide scale
			postwidth++;
			wallheight[pixx] = wallheight[pixx-1];
			return;
		}
		else
		{
			ScalePost ();
			(unsigned)postsource = texture;
			postwidth = 1;
			postx = pixx;
		}
	}
	else
	{
	// new wall
		if (lastside != -1)				// if not the first scaled post
			ScalePost ();

		lastside = 0;
		lastintercept = ytile;

		lasttilehit = tilehit;
		postx = pixx;
		postwidth = 1;

		if (tilehit & 0x40)
		{								// check for adjacent doors
			xtile = xintercept>>TILESHIFT;
			if ( tilemap[xtile][ytile-ytilestep]&0x80 )
				wallpic = DOORWALL+2;
			else
				wallpic = horizwall[tilehit & ~0x40];
		}
		else
			wallpic = horizwall[tilehit];

		*( ((unsigned *)&postsource)+1) = (unsigned)PM_GetPage(wallpic);
		(unsigned)postsource = texture;
	}

}

//==========================================================================

/*
====================
=
= HitHorizDoor
=
====================
*/

void HitHorizDoor (void)
{
	unsigned	texture,doorpage,doornum;

	doornum = tilehit&0x7f;
	texture = ( (xintercept-doorposition[doornum]) >> 4) &0xfc0;

	wallheight[pixx] = CalcHeight();

	if (lasttilehit == tilehit)
	{
	// in the same door as last time, so check for optimized draw
		if (texture == (unsigned)postsource)
		{
		// wide scale
			postwidth++;
			wallheight[pixx] = wallheight[pixx-1];
			return;
		}
		else
		{
			ScalePost ();
			(unsigned)postsource = texture;
			postwidth = 1;
			postx = pixx;
		}
	}
	else
	{
		if (lastside != -1)				// if not the first scaled post
			ScalePost ();			// draw last post
	// first pixel in this door
		lastside = 2;
		lasttilehit = tilehit;
		postx = pixx;
		postwidth = 1;

		switch (doorobjlist[doornum].lock)
		{
		case dr_normal:
			doorpage = DOORWALL;
			break;
		case dr_lock1:
		case dr_lock2:
		case dr_lock3:
		case dr_lock4:
			doorpage = DOORWALL+6;
			break;
		case dr_elevator:
			doorpage = DOORWALL+4;
			break;
		}

		*( ((unsigned *)&postsource)+1) = (unsigned)PM_GetPage(doorpage);
		(unsigned)postsource = texture;
	}
}

//==========================================================================

/*
====================
=
= HitVertDoor
=
====================
*/

void HitVertDoor (void)
{
	unsigned	texture,doorpage,doornum;

	doornum = tilehit&0x7f;
	texture = ( (yintercept-doorposition[doornum]) >> 4) &0xfc0;

	wallheight[pixx] = CalcHeight();

	if (lasttilehit == tilehit)
	{
	// in the same door as last time, so check for optimized draw
		if (texture == (unsigned)postsource)
		{
		// wide scale
			postwidth++;
			wallheight[pixx] = wallheight[pixx-1];
			return;
		}
		else
		{
			ScalePost ();
			(unsigned)postsource = texture;
			postwidth = 1;
			postx = pixx;
		}
	}
	else
	{
		if (lastside != -1)				// if not the first scaled post
			ScalePost ();			// draw last post
	// first pixel in this door
		lastside = 2;
		lasttilehit = tilehit;
		postx = pixx;
		postwidth = 1;

		switch (doorobjlist[doornum].lock)
		{
		case dr_normal:
			doorpage = DOORWALL;
			break;
		case dr_lock1:
		case dr_lock2:
		case dr_lock3:
		case dr_lock4:
			doorpage = DOORWALL+6;
			break;
		case dr_elevator:
			doorpage = DOORWALL+4;
			break;
		}

		*( ((unsigned *)&postsource)+1) = (unsigned)PM_GetPage(doorpage+1);
		(unsigned)postsource = texture;
	}
}

//==========================================================================


/*
====================
=
= HitHorizPWall
=
= A pushable wall in action has been hit
=
====================
*/

void HitHorizPWall (void)
{
	int			wallpic;
	unsigned	texture,offset;

	texture = (xintercept>>4)&0xfc0;
	offset = pwallpos<<10;
	if (ytilestep == -1)
		yintercept += TILEGLOBAL-offset;
	else
	{
		texture = 0xfc0-texture;
		yintercept += offset;
	}

	wallheight[pixx] = CalcHeight();

	if (lasttilehit == tilehit)
	{
		// in the same wall type as last time, so check for optimized draw
		if (texture == (unsigned)postsource)
		{
		// wide scale
			postwidth++;
			wallheight[pixx] = wallheight[pixx-1];
			return;
		}
		else
		{
			ScalePost ();
			(unsigned)postsource = texture;
			postwidth = 1;
			postx = pixx;
		}
	}
	else
	{
	// new wall
		if (lastside != -1)				// if not the first scaled post
			ScalePost ();

		lasttilehit = tilehit;
		postx = pixx;
		postwidth = 1;

		wallpic = horizwall[tilehit&63];

		*( ((unsigned *)&postsource)+1) = (unsigned)PM_GetPage(wallpic);
		(unsigned)postsource = texture;
	}

}


/*
====================
=
= HitVertPWall
=
= A pushable wall in action has been hit
=
====================
*/

void HitVertPWall (void)
{
	int			wallpic;
	unsigned	texture,offset;

	texture = (yintercept>>4)&0xfc0;
	offset = pwallpos<<10;
	if (xtilestep == -1)
	{
		xintercept += TILEGLOBAL-offset;
		texture = 0xfc0-texture;
	}
	else
		xintercept += offset;

	wallheight[pixx] = CalcHeight();

	if (lasttilehit == tilehit)
	{
		// in the same wall type as last time, so check for optimized draw
		if (texture == (unsigned)postsource)
		{
		// wide scale
			postwidth++;
			wallheight[pixx] = wallheight[pixx-1];
			return;
		}
		else
		{
			ScalePost ();
			(unsigned)postsource = texture;
			postwidth = 1;
			postx = pixx;
		}
	}
	else
	{
	// new wall
		if (lastside != -1)				// if not the first scaled post
			ScalePost ();

		lasttilehit = tilehit;
		postx = pixx;
		postwidth = 1;

		wallpic = vertwall[tilehit&63];

		*( ((unsigned *)&postsource)+1) = (unsigned)PM_GetPage(wallpic);
		(unsigned)postsource = texture;
	}

}

//==========================================================================

//==========================================================================

#if 0
/*
=====================
=
= ClearScreen
=
=====================
*/

void ClearScreen (void)
{
 unsigned floor=egaFloor[gamestate.episode*10+mapon],
	  ceiling=egaCeiling[gamestate.episode*10+mapon];

  //
  // clear the screen
  //
asm	mov	dx,GC_INDEX
asm	mov	ax,GC_MODE + 256*2		// read mode 0, write mode 2
asm	out	dx,ax
asm	mov	ax,GC_BITMASK + 255*256
asm	out	dx,ax

asm	mov	dx,40
asm	mov	ax,[viewwidth]
asm	shr	ax,3
asm	sub	dx,ax					// dx = 40-viewwidth/8

asm	mov	bx,[viewwidth]
asm	shr	bx,4					// bl = viewwidth/16
asm	mov	bh,BYTE PTR [viewheight]
asm	shr	bh,1					// half height

asm	mov	ax,[ceiling]
asm	mov	es,[screenseg]
asm	mov	di,[bufferofs]

toploop:
asm	mov	cl,bl
asm	rep	stosw
asm	add	di,dx
asm	dec	bh
asm	jnz	toploop

asm	mov	bh,BYTE PTR [viewheight]
asm	shr	bh,1					// half height
asm	mov	ax,[floor]

bottomloop:
asm	mov	cl,bl
asm	rep	stosw
asm	add	di,dx
asm	dec	bh
asm	jnz	bottomloop


asm	mov	dx,GC_INDEX
asm	mov	ax,GC_MODE + 256*10		// read mode 1, write mode 2
asm	out	dx,ax
asm	mov	al,GC_BITMASK
asm	out	dx,al

}
#endif
//==========================================================================

unsigned vgaCeiling[]=
{
#ifndef SPEAR
 0x1d1d,0x1d1d,0x1d1d,0x1d1d,0x1d1d,0x1d1d,0x1d1d,0x1d1d,0x1d1d,0xbfbf,
 0x4e4e,0x4e4e,0x4e4e,0x1d1d,0x8d8d,0x4e4e,0x1d1d,0x2d2d,0x1d1d,0x8d8d,
 0x1d1d,0x1d1d,0x1d1d,0x1d1d,0x1d1d,0x2d2d,0xdddd,0x1d1d,0x1d1d,0x9898,

 0x1d1d,0x9d9d,0x2d2d,0xdddd,0xdddd,0x9d9d,0x2d2d,0x4d4d,0x1d1d,0xdddd,
 0x7d7d,0x1d1d,0x2d2d,0x2d2d,0xdddd,0xd7d7,0x1d1d,0x1d1d,0x1d1d,0x2d2d,
 0x1d1d,0x1d1d,0x1d1d,0x1d1d,0xdddd,0xdddd,0x7d7d,0xdddd,0xdddd,0xdddd
#else
 0x6f6f,0x4f4f,0x1d1d,0xdede,0xdfdf,0x2e2e,0x7f7f,0x9e9e,0xaeae,0x7f7f,
 0x1d1d,0xdede,0xdfdf,0xdede,0xdfdf,0xdede,0xe1e1,0xdcdc,0x2e2e,0x1d1d,0xdcdc
#endif
};

/*
=====================
=
= VGAClearScreen
=
=====================
*/

void VGAClearScreen (void)
{
 unsigned ceiling=vgaCeiling[gamestate.episode*10+mapon];

  //
  // clear the screen
  //
asm	mov	dx,SC_INDEX
asm	mov	ax,SC_MAPMASK+15*256	// write through all planes
asm	out	dx,ax

asm	mov	dx,80
asm	mov	ax,[viewwidth]
asm	shr	ax,2
asm	sub	dx,ax					// dx = 40-viewwidth/2

asm	mov	bx,[viewwidth]
asm	shr	bx,3					// bl = viewwidth/8
asm	mov	bh,BYTE PTR [viewheight]
asm	shr	bh,1					// half height

asm	mov	es,[screenseg]
asm	mov	di,[bufferofs]
asm	mov	ax,[ceiling]

toploop:
asm	mov	cl,bl
asm	rep	stosw
asm	add	di,dx
asm	dec	bh
asm	jnz	toploop

asm	mov	bh,BYTE PTR [viewheight]
asm	shr	bh,1					// half height
asm	mov	ax,0x1919

bottomloop:
asm	mov	cl,bl
asm	rep	stosw
asm	add	di,dx
asm	dec	bh
asm	jnz	bottomloop
}

//==========================================================================

/*
=====================
=
= CalcRotate
=
=====================
*/

int	CalcRotate (objtype *ob)
{
	int	angle,viewangle;

	// this isn't exactly correct, as it should vary by a trig value,
	// but it is close enough with only eight rotations

	viewangle = player->angle + (centerx - ob->viewx)/8;

	if (ob->obclass == rocketobj || ob->obclass == hrocketobj)
		angle =  (viewangle-180)- ob->angle;
	else
		angle =  (viewangle-180)- dirangle[ob->dir];

	angle+=ANGLES/16;
	while (angle>=ANGLES)
		angle-=ANGLES;
	while (angle<0)
		angle+=ANGLES;

	if (ob->state->rotate == 2)             // 2 rotation pain frame
		return 4*(angle/(ANGLES/2));        // seperated by 3 (art layout...)

	return angle/(ANGLES/8);
}


/*
=====================
=
= DrawScaleds
=
= Draws all objects that are visable
=
=====================
*/

#define MAXVISABLE	50

typedef struct
{
	int	viewx,
		viewheight,
		shapenum;
} visobj_t;

visobj_t	vislist[MAXVISABLE],*visptr,*visstep,*farthest;

void DrawScaleds (void)
{
	int 		i,j,least,numvisable,height;
	memptr		shape;
	byte		*tilespot,*visspot;
	int			shapenum;
	unsigned	spotloc;

	statobj_t	*statptr;
	objtype		*obj;

	visptr = &vislist[0];

//
// place static objects
//
	for (statptr = &statobjlist[0] ; statptr !=laststatobj ; statptr++)
	{
		if ((visptr->shapenum = statptr->shapenum) == -1)
			continue;						// object has been deleted

		if (!*statptr->visspot)
			continue;						// not visable

		if (TransformTile (statptr->tilex,statptr->tiley
			,&visptr->viewx,&visptr->viewheight) && statptr->flags & FL_BONUS)
		{
			GetBonus (statptr);
			continue;
		}

		if (!visptr->viewheight)
			continue;						// to close to the object

		if (visptr < &vislist[MAXVISABLE-1])	// don't let it overflow
			visptr++;
	}

//
// place active objects
//
	for (obj = player->next;obj;obj=obj->next)
	{
		if (!(visptr->shapenum = obj->state->shapenum))
			continue;						// no shape

		spotloc = (obj->tilex<<6)+obj->tiley;	// optimize: keep in struct?
		visspot = &spotvis[0][0]+spotloc;
		tilespot = &tilemap[0][0]+spotloc;

		//
		// could be in any of the nine surrounding tiles
		//
		if (*visspot
		|| ( *(visspot-1) && !*(tilespot-1) )
		|| ( *(visspot+1) && !*(tilespot+1) )
		|| ( *(visspot-65) && !*(tilespot-65) )
		|| ( *(visspot-64) && !*(tilespot-64) )
		|| ( *(visspot-63) && !*(tilespot-63) )
		|| ( *(visspot+65) && !*(tilespot+65) )
		|| ( *(visspot+64) && !*(tilespot+64) )
		|| ( *(visspot+63) && !*(tilespot+63) ) )
		{
			obj->active = true;
			TransformActor (obj);
			if (!obj->viewheight)
				continue;						// too close or far away

			visptr->viewx = obj->viewx;
			visptr->viewheight = obj->viewheight;
			if (visptr->shapenum == -1)
				visptr->shapenum = obj->temp1;	// special shape

			if (obj->state->rotate)
				visptr->shapenum += CalcRotate (obj);

			if (visptr < &vislist[MAXVISABLE-1])	// don't let it overflow
				visptr++;
			obj->flags |= FL_VISABLE;
		}
		else
			obj->flags &= ~FL_VISABLE;
	}

//
// draw from back to front
//
	numvisable = visptr-&vislist[0];

	if (!numvisable)
		return;									// no visable objects

	for (i = 0; i<numvisable; i++)
	{
		least = 32000;
		for (visstep=&vislist[0] ; visstep<visptr ; visstep++)
		{
			height = visstep->viewheight;
			if (height < least)
			{
				least = height;
				farthest = visstep;
			}
		}
		//
		// draw farthest
		//
		ScaleShape(farthest->viewx,farthest->shapenum,farthest->viewheight);

		farthest->viewheight = 32000;
	}

}

//==========================================================================

/*
==============
=
= DrawPlayerWeapon
=
= Draw the player's hands
=
==============
*/

int	weaponscale[NUMWEAPONS] = {SPR_KNIFEREADY,SPR_PISTOLREADY
	,SPR_MACHINEGUNREADY,SPR_CHAINREADY};

void DrawPlayerWeapon (void)
{
	int	shapenum;

#ifndef SPEAR
	if (gamestate.victoryflag)
	{
		if (player->state == &s_deathcam && (TimeCount&32) )
			SimpleScaleShape(viewwidth/2,SPR_DEATHCAM,viewheight+1);
		return;
	}
#endif

	if (gamestate.weapon != -1)
	{
		shapenum = weaponscale[gamestate.weapon]+gamestate.weaponframe;
		SimpleScaleShape(viewwidth/2,shapenum,viewheight+1);
	}

	if (demorecord || demoplayback)
		SimpleScaleShape(viewwidth/2,SPR_DEMO,viewheight+1);
}


//==========================================================================


/*
=====================
=
= CalcTics
=
=====================
*/

void CalcTics (void)
{
	long	newtime,oldtimecount;

//
// calculate tics since last refresh for adaptive timing
//
	if (lasttimecount > TimeCount)
		TimeCount = lasttimecount;		// if the game was paused a LONG time

	do
	{
		newtime = TimeCount;
		tics = newtime-lasttimecount;
	} while (!tics);			// make sure at least one tic passes

	lasttimecount = newtime;

#ifdef FILEPROFILE
		strcpy (scratch,"\tTics:");
		itoa (tics,str,10);
		strcat (scratch,str);
		strcat (scratch,"\n");
		write (profilehandle,scratch,strlen(scratch));
#endif

	if (tics>MAXTICS)
	{
		TimeCount -= (tics-MAXTICS);
		tics = MAXTICS;
	}
}


//==========================================================================


/*
========================
=
= FixOfs
=
========================
*/

void	FixOfs (void)
{
	VW_ScreenToScreen (displayofs,bufferofs,viewwidth/8,viewheight);
}


//==========================================================================


/*
====================
=
= WallRefresh
=
====================
*/

void WallRefresh (void)
{
//
// set up variables for this view
//
	viewangle = player->angle;
	midangle = viewangle*(FINEANGLES/ANGLES);
	viewsin = sintable[viewangle];
	viewcos = costable[viewangle];
	viewx = player->x - FixedByFrac(focallength,viewcos);
	viewy = player->y + FixedByFrac(focallength,viewsin);

	focaltx = viewx>>TILESHIFT;
	focalty = viewy>>TILESHIFT;

	viewtx = player->x >> TILESHIFT;
	viewty = player->y >> TILESHIFT;

	xpartialdown = viewx&(TILEGLOBAL-1);
	xpartialup = TILEGLOBAL-xpartialdown;
	ypartialdown = viewy&(TILEGLOBAL-1);
	ypartialup = TILEGLOBAL-ypartialdown;

	lastside = -1;			// the first pixel is on a new wall
	AsmRefresh ();
	ScalePost ();			// no more optimization on last post
}

//==========================================================================

/*
========================
=
= ThreeDRefresh
=
========================
*/

void	ThreeDRefresh (void)
{
	int tracedir;

// this wouldn't need to be done except for my debugger/video wierdness
	outportb (SC_INDEX,SC_MAPMASK);

//
// clear out the traced array
//
asm	mov	ax,ds
asm	mov	es,ax
asm	mov	di,OFFSET spotvis
asm	xor	ax,ax
asm	mov	cx,2048							// 64*64 / 2
asm	rep stosw

	bufferofs += screenofs;

//
// follow the walls from there to the right, drawwing as we go
//
	VGAClearScreen ();

	WallRefresh ();

//
// draw all the scaled images
//
	DrawScaleds();			// draw scaled stuff
	DrawPlayerWeapon ();	// draw player's hands

//
// show screen and time last cycle
//
	if (fizzlein)
	{
		FizzleFade(bufferofs,displayofs+screenofs,viewwidth,viewheight,20,false);
		fizzlein = false;

		lasttimecount = TimeCount = 0;		// don't make a big tic count

	}

	bufferofs -= screenofs;
	displayofs = bufferofs;

	asm	cli
	asm	mov	cx,[displayofs]
	asm	mov	dx,3d4h		// CRTC address register
	asm	mov	al,0ch		// start address high register
	asm	out	dx,al
	asm	inc	dx
	asm	mov	al,ch
	asm	out	dx,al   	// set the high byte
	asm	sti

	bufferofs += SCREENSIZE;
	if (bufferofs > PAGE3START)
		bufferofs = PAGE1START;

	frameon++;
	PM_NextFrame();
}


//===========================================================================

```