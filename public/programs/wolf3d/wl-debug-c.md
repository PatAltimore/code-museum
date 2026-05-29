---
title: "WL_DEBUG.C"
program: "Wolfenstein 3D"
program_slug: "wolf3d"
file_path: "WOLFSRC/WL_DEBUG.C"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/wolf3d/blob/master/WOLFSRC/WL_DEBUG.C"
year: 1992
author: "John Carmack, John Romero, Tom Hall"
slug: "wl-debug-c"
order: 19
description: "Debugging utilities in Wolfenstein 3D's source code reveal the ingenuity behind its development."

summary:
  - point: "Includes debugging tools for memory usage and object counts"
    link: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    link_label: "Wolfenstein 3D"
  - point: "Demonstrates techniques for interacting with VGA hardware"
    link: "https://en.wikipedia.org/wiki/VGA"
    link_label: "VGA"
  - point: "Contains experimental code for visualizing game data structures"
    link: "https://en.wikipedia.org/wiki/Debugging"
    link_label: "Debugging"
  - point: "Introduces developer cheat keys for testing gameplay features"
    link: "https://en.wikipedia.org/wiki/Cheat_code"
    link_label: "Cheat code"
  - point: "Highlights the constraints of early 1990s PC hardware"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"

enhancements:
  - id: "debug-memory-usage"
    line_start: 44
    line_end: 74
    title: "How Debugging Memory Saved the Day"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugging"
    image_url: ""
    image_caption: ""
    content: "The `DebugMemory` function provides a snapshot of memory usage during gameplay. It displays total memory available, free memory, and memory that could be freed by purging unused resources. This was crucial for debugging on early PCs, where memory constraints were a constant challenge. In 1992, MS-DOS systems typically had limited RAM, often less than 640KB available for applications. Developers had to carefully manage memory to avoid crashes and ensure smooth gameplay. The function uses `MM_UnusedMemory` and `MM_TotalFree` to calculate memory statistics, leveraging id Software's custom memory management routines. This approach influenced later debugging tools in game engines, such as Unreal Engine and Unity, which provide detailed memory profiling capabilities. The function also highlights the importance of user-friendly debugging interfaces, a concept that has become standard in modern development environments."
  - id: "count-game-objects"
    line_start: 76
    line_end: 125
    title: "Counting Game Objects in Real Time"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugging"
    image_url: ""
    image_caption: ""
    content: "The `CountObjects` function tallies various game objects, including static objects, doors, and actors, providing developers with insights into the game's state during runtime. This was particularly useful for debugging levels and ensuring proper object placement. At the time, debugging tools were often rudimentary, and developers had to create their own utilities to monitor game behavior. The function iterates through object lists and counts active and inactive actors, a technique that reflects the manual nature of debugging in the early 1990s. This method of real-time object tracking influenced later game development practices, where debugging tools became more sophisticated and integrated into development environments. For example, modern engines like Unity and Unreal provide built-in object inspectors that allow developers to monitor and manipulate game objects during runtime."
  - id: "picture-pause-vga-trick"
    line_start: 127
    line_end: 202
    title: "The VGA Trick Behind Picture Pause"
    wikipedia_url: "https://en.wikipedia.org/wiki/VGA"
    image_url: ""
    image_caption: ""
    content: "The `PicturePause` function manipulates VGA hardware to freeze the screen and display a static image, a technique that showcases the low-level programming required in the early 1990s. It uses direct memory access to copy the screen buffer into a temporary location and then restores it later. The function interacts with the VGA's read and write maps, a feature of the hardware that allowed developers to control how data was stored and retrieved from video memory. This approach was necessary because high-level abstractions for graphics manipulation were not yet common. The function also demonstrates the use of assembly language (`mov` and `int` instructions) for direct hardware interaction, a skill that was essential for game developers of the era. Techniques like these laid the groundwork for modern graphics APIs, such as DirectX and OpenGL, which abstract hardware details while providing powerful tools for rendering."
  - id: "shape-test-debugging"
    line_start: 208
    line_end: 399
    title: "ShapeTest: Debugging Sprites and Sounds"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `ShapeTest` function is a versatile debugging tool that allows developers to inspect game assets, including walls, sprites, and sounds. It provides detailed information about memory pages, addresses, and the last hit data for each asset. This function reflects the challenges of managing resources in a game with limited hardware capabilities. Developers needed to ensure that assets were correctly loaded and displayed, as errors could lead to graphical glitches or crashes. The function's ability to visualize assets directly on the screen was a precursor to modern debugging tools that offer real-time visualization of game states. For example, Unity's scene view and asset inspectors provide similar functionality, allowing developers to inspect and manipulate game assets during development. The `ShapeTest` function also highlights the importance of efficient resource management, a concept that remains relevant in game development today."
  - id: "debug-keys-cheat-codes"
    line_start: 407
    line_end: 599
    title: "Debug Keys: Cheat Codes for Developers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cheat_code"
    image_url: ""
    image_caption: ""
    content: "The `DebugKeys` function implements a set of cheat codes designed for developers to test various aspects of the game. These include toggling god mode, warping to levels, and enabling slow motion. Cheat codes were a common feature in games of the era, often used for debugging and testing purposes. They provided a quick way to bypass gameplay mechanics and focus on specific features or issues. The function's implementation reflects the ingenuity of id Software's developers in creating tools that were both functional and entertaining. Cheat codes like these became a cultural phenomenon, with players discovering and sharing them as part of the gaming experience. The concept of cheat codes has evolved over time, with modern games offering developer consoles and debug menus that provide similar functionality. The `DebugKeys` function is a reminder of the creative problem-solving that defined early game development."
  - id: "overhead-refresh-map-view"
    line_start: 602
    line_end: 657
    title: "OverheadRefresh: Visualizing the Map"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tile-based_video_game"
    image_url: ""
    image_caption: ""
    content: "The `OverheadRefresh` function renders an overhead view of the game map, providing developers with a visual representation of the game's tile-based layout. This was an essential debugging tool for ensuring that levels were correctly designed and implemented. The function iterates through tiles and draws them on the screen, using different rendering techniques for walls, actors, and other elements. Tile-based rendering was a common approach in early games, as it allowed developers to create complex environments with limited resources. The function's ability to display tile data directly on the screen influenced later development tools, such as level editors and map viewers. These tools have become standard in modern game development, enabling designers to create and test levels with greater efficiency. The `OverheadRefresh` function highlights the importance of visual debugging in game development, a concept that remains relevant today."
  - id: "view-map-user-navigation"
    line_start: 658
    line_end: 720
    title: "ViewMap: Letting Developers Pan the World"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugging"
    image_url: ""
    image_caption: ""
    content: "The `ViewMap` function allows developers to pan around the game map and inspect different areas. It calculates the map's origin based on the player's position and updates the view as the developer navigates. This was a valuable tool for debugging levels and ensuring that gameplay elements were correctly placed. The function's implementation reflects the challenges of working with limited hardware, as developers had to manually calculate and render map data. The ability to pan around the map influenced later development tools, such as level editors and debugging interfaces, which provide similar functionality. For example, modern engines like Unity and Unreal allow developers to navigate and inspect game worlds in real time, making it easier to identify and fix issues. The `ViewMap` function is a testament to the creativity and resourcefulness of id Software's developers in creating tools that enhanced their workflow."

---

```cpp
// WL_DEBUG.C

#include "WL_DEF.H"
#pragma hdrstop
#include <BIOS.H>

/*
=============================================================================

						 LOCAL CONSTANTS

=============================================================================
*/

#define VIEWTILEX	(viewwidth/16)
#define VIEWTILEY	(viewheight/16)

/*
=============================================================================

						 GLOBAL VARIABLES

=============================================================================
*/


int DebugKeys (void);

/*
=============================================================================

						 LOCAL VARIABLES

=============================================================================
*/


int	maporgx;
int	maporgy;
enum {mapview,tilemapview,actoratview,visview}	viewtype;

void ViewMap (void);

//===========================================================================

/*
==================
=
= DebugMemory
=
==================
*/

void DebugMemory (void)
{
	int	i;
	char    scratch[80],str[10];
	long	mem;
	spritetype _seg	*block;

	CenterWindow (16,7);

	US_CPrint ("Memory Usage");
	US_CPrint ("------------");
	US_Print ("Total     :");
	US_PrintUnsigned (mminfo.mainmem/1024);
	US_Print ("k\nFree      :");
	US_PrintUnsigned (MM_UnusedMemory()/1024);
	US_Print ("k\nWith purge:");
	US_PrintUnsigned (MM_TotalFree()/1024);
	US_Print ("k\n");
	VW_UpdateScreen();
	IN_Ack ();
}

//===========================================================================

/*
==================
=
= CountObjects
=
==================
*/

void CountObjects (void)
{
	int	i,total,count,active,inactive,doors;
	objtype	*obj;

	CenterWindow (16,7);
	active = inactive = count = doors = 0;

	US_Print ("Total statics :");
	total = laststatobj-&statobjlist[0];
	US_PrintUnsigned (total);

	US_Print ("\nIn use statics:");
	for (i=0;i<total;i++)
		if (statobjlist[i].shapenum != -1)
			count++;
		else
			doors++;	//debug
	US_PrintUnsigned (count);

	US_Print ("\nDoors         :");
	US_PrintUnsigned (doornum);

	for (obj=player->next;obj;obj=obj->next)
	{
		if (obj->active)
			active++;
		else
			inactive++;
	}

	US_Print ("\nTotal actors  :");
	US_PrintUnsigned (active+inactive);

	US_Print ("\nActive actors :");
	US_PrintUnsigned (active);

	VW_UpdateScreen();
	IN_Ack ();
}

//===========================================================================

/*
================
=
= PicturePause
=
================
*/

void PicturePause (void)
{
	int			i;
	byte		p;
	unsigned	x;
	byte		far	*dest,far *src;
	memptr		buffer;

	VW_ColorBorder (15);
	FinishPaletteShifts ();

	LastScan = 0;
	while (!LastScan)
	;
	if (LastScan != sc_Enter)
	{
		VW_ColorBorder (0);
		return;
	}

	VW_ColorBorder (1);
	VW_SetScreen (0,0);
//
// vga stuff...
//

	ClearMemory ();
	CA_SetAllPurge();
	MM_GetPtr (&buffer,64000);
	for (p=0;p<4;p++)
	{
	   src = MK_FP(0xa000,displayofs);
	   dest = (byte far *)buffer+p;
	   VGAREADMAP(p);
	   for (x=0;x<16000;x++,dest+=4)
		   *dest = *src++;
	}


#if 0
	for (p=0;p<4;p++)
	{
		src = MK_FP(0xa000,0);
		dest = (byte far *)buffer+51200+p;
		VGAREADMAP(p);
		for (x=0;x<3200;x++,dest+=4)
			*dest = *src++;
	}
#endif

	asm	mov	ax,0x13
	asm	int	0x10

	dest = MK_FP(0xa000,0);
	_fmemcpy (dest,buffer,64000);

	VL_SetPalette (&gamepal);


	IN_Shutdown ();

	VW_WaitVBL(70);
	bioskey(0);
	VW_WaitVBL(70);
	Quit (NULL);
}


//===========================================================================


/*
================
=
= ShapeTest
=
================
*/

#pragma warn -pia
void ShapeTest (void)
{
extern	word	NumDigi;
extern	word	_seg *DigiList;
static	char	buf[10];

	boolean			done;
	ScanCode		scan;
	int				i,j,k,x;
	longword		l;
	memptr			addr;
	PageListStruct	far *page;

	CenterWindow(20,16);
	VW_UpdateScreen();
	for (i = 0,done = false;!done;)
	{
		US_ClearWindow();
//		sound = -1;

		page = &PMPages[i];
		US_Print(" Page #");
		US_PrintUnsigned(i);
		if (i < PMSpriteStart)
			US_Print(" (Wall)");
		else if (i < PMSoundStart)
			US_Print(" (Sprite)");
		else if (i == ChunksInFile - 1)
			US_Print(" (Sound Info)");
		else
			US_Print(" (Sound)");

		US_Print("\n XMS: ");
		if (page->xmsPage != -1)
			US_PrintUnsigned(page->xmsPage);
		else
			US_Print("No");

		US_Print("\n Main: ");
		if (page->mainPage != -1)
			US_PrintUnsigned(page->mainPage);
		else if (page->emsPage != -1)
		{
			US_Print("EMS ");
			US_PrintUnsigned(page->emsPage);
		}
		else
			US_Print("No");

		US_Print("\n Last hit: ");
		US_PrintUnsigned(page->lastHit);

		US_Print("\n Address: ");
		addr = PM_GetPageAddress(i);
		sprintf(buf,"0x%04x",(word)addr);
		US_Print(buf);

		if (addr)
		{
			if (i < PMSpriteStart)
			{
			//
			// draw the wall
			//
				bufferofs += 32*SCREENWIDTH;
				postx = 128;
				postwidth = 1;
				postsource = ((long)((unsigned)addr))<<16;
				for (x=0;x<64;x++,postx++,postsource+=64)
				{
					wallheight[postx] = 256;
					FarScalePost ();
				}
				bufferofs -= 32*SCREENWIDTH;
			}
			else if (i < PMSoundStart)
			{
			//
			// draw the sprite
			//
				bufferofs += 32*SCREENWIDTH;
				SimpleScaleShape (160, i-PMSpriteStart, 64);
				bufferofs -= 32*SCREENWIDTH;
			}
			else if (i == ChunksInFile - 1)
			{
				US_Print("\n\n Number of sounds: ");
				US_PrintUnsigned(NumDigi);
				for (l = j = k = 0;j < NumDigi;j++)
				{
					l += DigiList[(j * 2) + 1];
					k += (DigiList[(j * 2) + 1] + (PMPageSize - 1)) / PMPageSize;
				}
				US_Print("\n Total bytes: ");
				US_PrintUnsigned(l);
				US_Print("\n Total pages: ");
				US_PrintUnsigned(k);
			}
			else
			{
				byte far *dp = (byte far *)MK_FP(addr,0);
				for (j = 0;j < NumDigi;j++)
				{
					k = (DigiList[(j * 2) + 1] + (PMPageSize - 1)) / PMPageSize;
					if
					(
						(i >= PMSoundStart + DigiList[j * 2])
					&&	(i < PMSoundStart + DigiList[j * 2] + k)
					)
						break;
				}
				if (j < NumDigi)
				{
//					sound = j;
					US_Print("\n Sound #");
					US_PrintUnsigned(j);
					US_Print("\n Segment #");
					US_PrintUnsigned(i - PMSoundStart - DigiList[j * 2]);
				}
				for (j = 0;j < page->length;j += 32)
				{
					byte v = dp[j];
					int v2 = (unsigned)v;
					v2 -= 128;
					v2 /= 4;
					if (v2 < 0)
						VWB_Vlin(WindowY + WindowH - 32 + v2,
								WindowY + WindowH - 32,
								WindowX + 8 + (j / 32),BLACK);
					else
						VWB_Vlin(WindowY + WindowH - 32,
								WindowY + WindowH - 32 + v2,
								WindowX + 8 + (j / 32),BLACK);
				}
			}
		}

		VW_UpdateScreen();

		while (!(scan = LastScan))
			SD_Poll();

		IN_ClearKey(scan);
		switch (scan)
		{
		case sc_LeftArrow:
			if (i)
				i--;
			break;
		case sc_RightArrow:
			if (++i >= ChunksInFile)
				i--;
			break;
		case sc_W:	// Walls
			i = 0;
			break;
		case sc_S:	// Sprites
			i = PMSpriteStart;
			break;
		case sc_D:	// Digitized
			i = PMSoundStart;
			break;
		case sc_I:	// Digitized info
			i = ChunksInFile - 1;
			break;
		case sc_L:	// Load all pages
			for (j = 0;j < ChunksInFile;j++)
				PM_GetPage(j);
			break;
		case sc_P:
//			if (sound != -1)
//				SD_PlayDigitized(sound);
			break;
		case sc_Escape:
			done = true;
			break;
		case sc_Enter:
			PM_GetPage(i);
			break;
		}
	}
	SD_StopDigitized();
}
#pragma warn +pia



//===========================================================================


/*
================
=
= DebugKeys
=
================
*/

int DebugKeys (void)
{
	boolean esc;
	int level,i;

	if (Keyboard[sc_B])		// B = border color
	{
		CenterWindow(24,3);
		PrintY+=6;
		US_Print(" Border color (0-15):");
		VW_UpdateScreen();
		esc = !US_LineInput (px,py,str,NULL,true,2,0);
		if (!esc)
		{
			level = atoi (str);
			if (level>=0 && level<=15)
				VW_ColorBorder (level);
		}
		return 1;
	}

	if (Keyboard[sc_C])		// C = count objects
	{
		CountObjects();
		return 1;
	}

	if (Keyboard[sc_E])		// E = quit level
	{
		if (tedlevel)
			Quit (NULL);
		playstate = ex_completed;
//		gamestate.mapon++;
	}

	if (Keyboard[sc_F])		// F = facing spot
	{
		CenterWindow (14,4);
		US_Print ("X:");
		US_PrintUnsigned (player->x);
		US_Print ("\nY:");
		US_PrintUnsigned (player->y);
		US_Print ("\nA:");
		US_PrintUnsigned (player->angle);
		VW_UpdateScreen();
		IN_Ack();
		return 1;
	}

	if (Keyboard[sc_G])		// G = god mode
	{
		CenterWindow (12,2);
		if (godmode)
		  US_PrintCentered ("God mode OFF");
		else
		  US_PrintCentered ("God mode ON");
		VW_UpdateScreen();
		IN_Ack();
		godmode ^= 1;
		return 1;
	}
	if (Keyboard[sc_H])		// H = hurt self
	{
		IN_ClearKeysDown ();
		TakeDamage (16,NULL);
	}
	else if (Keyboard[sc_I])			// I = item cheat
	{
		CenterWindow (12,3);
		US_PrintCentered ("Free items!");
		VW_UpdateScreen();
		GivePoints (100000);
		HealSelf (99);
		if (gamestate.bestweapon<wp_chaingun)
			GiveWeapon (gamestate.bestweapon+1);
		gamestate.ammo += 50;
		if (gamestate.ammo > 99)
			gamestate.ammo = 99;
		DrawAmmo ();
		IN_Ack ();
		return 1;
	}
	else if (Keyboard[sc_M])			// M = memory info
	{
		DebugMemory();
		return 1;
	}
#ifdef SPEAR
	else if (Keyboard[sc_N])			// N = no clip
	{
		noclip^=1;
		CenterWindow (18,3);
		if (noclip)
			US_PrintCentered ("No clipping ON");
		else
			US_PrintCentered ("No clipping OFF");
		VW_UpdateScreen();
		IN_Ack ();
		return 1;
	}
#endif
#if 0
	else if (Keyboard[sc_O])			// O = overhead
	{
		ViewMap();
		return 1;
	}
#endif
	else if (Keyboard[sc_P])			// P = pause with no screen disruptioon
	{
		PicturePause ();
		return 1;
	}
	else if (Keyboard[sc_Q])			// Q = fast quit
		Quit (NULL);
	else if (Keyboard[sc_S])			// S = slow motion
	{
		singlestep^=1;
		CenterWindow (18,3);
		if (singlestep)
			US_PrintCentered ("Slow motion ON");
		else
			US_PrintCentered ("Slow motion OFF");
		VW_UpdateScreen();
		IN_Ack ();
		return 1;
	}
	else if (Keyboard[sc_T])			// T = shape test
	{
		ShapeTest ();
		return 1;
	}
	else if (Keyboard[sc_V])			// V = extra VBLs
	{
		CenterWindow(30,3);
		PrintY+=6;
		US_Print("  Add how many extra VBLs(0-8):");
		VW_UpdateScreen();
		esc = !US_LineInput (px,py,str,NULL,true,2,0);
		if (!esc)
		{
			level = atoi (str);
			if (level>=0 && level<=8)
				extravbls = level;
		}
		return 1;
	}
	else if (Keyboard[sc_W])			// W = warp to level
	{
		CenterWindow(26,3);
		PrintY+=6;
#ifndef SPEAR
		US_Print("  Warp to which level(1-10):");
#else
		US_Print("  Warp to which level(1-21):");
#endif
		VW_UpdateScreen();
		esc = !US_LineInput (px,py,str,NULL,true,2,0);
		if (!esc)
		{
			level = atoi (str);
#ifndef SPEAR
			if (level>0 && level<11)
#else
			if (level>0 && level<22)
#endif
			{
				gamestate.mapon = level-1;
				playstate = ex_warped;
			}
		}
		return 1;
	}
	else if (Keyboard[sc_X])			// X = item cheat
	{
		CenterWindow (12,3);
		US_PrintCentered ("Extra stuff!");
		VW_UpdateScreen();
		// DEBUG: put stuff here
		IN_Ack ();
		return 1;
	}

	return 0;
}


#if 0
/*
===================
=
= OverheadRefresh
=
===================
*/

void OverheadRefresh (void)
{
	unsigned	x,y,endx,endy,sx,sy;
	unsigned	tile;


	endx = maporgx+VIEWTILEX;
	endy = maporgy+VIEWTILEY;

	for (y=maporgy;y<endy;y++)
		for (x=maporgx;x<endx;x++)
		{
			sx = (x-maporgx)*16;
			sy = (y-maporgy)*16;

			switch (viewtype)
			{
#if 0
			case mapview:
				tile = *(mapsegs[0]+farmapylookup[y]+x);
				break;

			case tilemapview:
				tile = tilemap[x][y];
				break;

			case visview:
				tile = spotvis[x][y];
				break;
#endif
			case actoratview:
				tile = (unsigned)actorat[x][y];
				break;
			}

			if (tile<MAXWALLTILES)
				LatchDrawTile(sx,sy,tile);
			else
			{
				LatchDrawChar(sx,sy,NUMBERCHARS+((tile&0xf000)>>12));
				LatchDrawChar(sx+8,sy,NUMBERCHARS+((tile&0x0f00)>>8));
				LatchDrawChar(sx,sy+8,NUMBERCHARS+((tile&0x00f0)>>4));
				LatchDrawChar(sx+8,sy+8,NUMBERCHARS+(tile&0x000f));
			}
		}

}
#endif

#if 0
/*
===================
=
= ViewMap
=
===================
*/

void ViewMap (void)
{
	boolean		button0held;

	viewtype = actoratview;
//	button0held = false;


	maporgx = player->tilex - VIEWTILEX/2;
	if (maporgx<0)
		maporgx = 0;
	if (maporgx>MAPSIZE-VIEWTILEX)
		maporgx=MAPSIZE-VIEWTILEX;
	maporgy = player->tiley - VIEWTILEY/2;
	if (maporgy<0)
		maporgy = 0;
	if (maporgy>MAPSIZE-VIEWTILEY)
		maporgy=MAPSIZE-VIEWTILEY;

	do
	{
//
// let user pan around
//
		PollControls ();
		if (controlx < 0 && maporgx>0)
			maporgx--;
		if (controlx > 0 && maporgx<mapwidth-VIEWTILEX)
			maporgx++;
		if (controly < 0 && maporgy>0)
			maporgy--;
		if (controly > 0 && maporgy<mapheight-VIEWTILEY)
			maporgy++;

#if 0
		if (c.button0 && !button0held)
		{
			button0held = true;
			viewtype++;
			if (viewtype>visview)
				viewtype = mapview;
		}
		if (!c.button0)
			button0held = false;
#endif

		OverheadRefresh ();

	} while (!Keyboard[sc_Escape]);

	IN_ClearKeysDown ();
}
#endif

```