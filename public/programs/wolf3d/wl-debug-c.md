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
description: "Debugging tools in Wolfenstein 3D reveal the ingenuity behind its development and the constraints of early 1990s game programming."

summary:
  - point: "Debugging tools provided insights into memory usage and object counts."
    link: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    link_label: "Wolfenstein 3D"
  - point: "Code reflects the constraints of MS-DOS and VGA hardware."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Innovative use of assembly and C for performance-critical routines."
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly language"
  - point: "Debugging features were likely used during development to refine gameplay."
    link: "https://en.wikipedia.org/wiki/John_Carmack"
    link_label: "John Carmack"
  - point: "The debugging tools hint at the modularity of the game's engine."
    link: "https://en.wikipedia.org/wiki/Game_engine"
    link_label: "Game engine"

enhancements:
  - id: "debug-memory-usage"
    line_start: 54
    line_end: 74
    title: "Tracking Memory Usage in Real Time"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "This section of code implements a debugging tool to display memory usage statistics, including total memory, free memory, and memory available after purging. In the early 1990s, memory management was a critical concern for game developers working on MS-DOS systems, which often had limited resources. The tool uses functions like `MM_UnusedMemory()` and `MM_TotalFree()` to retrieve memory information and displays it in a user-friendly format. This debugging feature would have been invaluable during development, allowing the team to ensure their game ran smoothly within the constraints of the hardware. At the time, id Software was pioneering techniques to maximize performance on consumer-grade PCs. John Carmack, the lead programmer, was known for his deep understanding of hardware and his ability to write highly optimized code. This memory debugging tool reflects the team's meticulous attention to resource management, a necessity for achieving the fast-paced gameplay and smooth graphics that defined Wolfenstein 3D. The concept of real-time memory tracking has evolved significantly since then, but the principles demonstrated here—monitoring resource usage and optimizing performance—remain fundamental to software development. This tool exemplifies the practical ingenuity required to push the boundaries of technology in an era of severe hardware limitations."
  - id: "counting-game-objects"
    line_start: 86
    line_end: 125
    title: "Counting Objects for Debugging"
    wikipedia_url: "https://en.wikipedia.org/wiki/Object-oriented_programming"
    image_url: ""
    image_caption: ""
    content: "The `CountObjects` function provides a detailed breakdown of the game's objects, including static objects, doors, and actors. It iterates through lists of objects and counts active and inactive entities, offering developers a snapshot of the game's state at any given moment. This debugging tool was likely used to verify the integrity of object management and ensure the game engine handled entities correctly. In 1992, game engines were still in their infancy, and developers often had to build custom solutions for managing game objects. Wolfenstein 3D's engine, developed by id Software, was a precursor to the more advanced engines that would follow, such as the Doom engine. The ability to count and categorize objects reflects the modular design of the engine and the team's focus on debugging and optimization. This function also highlights the challenges of working within the constraints of MS-DOS and VGA hardware. Efficient object management was crucial for maintaining performance, especially in a game as fast-paced as Wolfenstein 3D. The techniques demonstrated here laid the groundwork for future advancements in game development, influencing how developers approached object-oriented programming and debugging in subsequent years."
  - id: "picture-pause-vga"
    line_start: 137
    line_end: 202
    title: "Pausing Without Disrupting the Screen"
    wikipedia_url: "https://en.wikipedia.org/wiki/VGA"
    image_url: ""
    image_caption: ""
    content: "The `PicturePause` function implements a unique pause feature that preserves the screen's current state while halting gameplay. This was achieved by directly interacting with VGA hardware, copying the screen buffer to memory, and restoring it when the pause ended. The function also includes assembly instructions (`mov ax,0x13` and `int 0x10`) to switch video modes, showcasing the blend of C and assembly used to optimize performance. In the early 1990s, VGA graphics were the standard for PC gaming, but developers had to work directly with hardware to achieve effects like this. John Carmack's expertise in low-level programming allowed id Software to push the limits of what was possible on consumer-grade PCs. This pause feature reflects the team's commitment to creating a seamless and immersive experience, even in moments of inactivity. The technique of preserving the screen state during a pause has since become standard in gaming, but its implementation here is a testament to the ingenuity required to work within the constraints of the era. By combining assembly and C, id Software demonstrated how careful optimization could enhance the user experience, setting a precedent for future game development."
  - id: "shape-test-debugging"
    line_start: 221
    line_end: 399
    title: "Debugging Sprites, Walls, and Sounds"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sprite_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `ShapeTest` function is a comprehensive debugging tool that allows developers to inspect and test various game assets, including walls, sprites, and sounds. It provides detailed information about each asset, such as its memory location, type, and last access time. The function also includes code for rendering walls and sprites directly on the screen, enabling developers to visually verify their appearance and behavior. This level of debugging was essential for ensuring the quality and consistency of game assets in Wolfenstein 3D. At the time, id Software was pioneering techniques for real-time rendering and asset management, and tools like `ShapeTest` were critical for refining these systems. The function's ability to interact with both memory and graphics hardware reflects the team's deep understanding of the underlying technology. The modular design of this debugging tool hints at the flexibility of the game's engine, which would later influence the development of more advanced engines like those used in Doom and Quake. The techniques demonstrated here laid the groundwork for modern debugging practices, emphasizing the importance of tools that provide both detailed information and visual feedback."
  - id: "debug-keys-cheats"
    line_start: 415
    line_end: 599
    title: "Debug Keys: Cheats and Testing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cheat_code"
    image_url: ""
    image_caption: ""
    content: "The `DebugKeys` function implements a series of keyboard shortcuts for debugging and testing the game. These shortcuts include cheats like god mode, item boosts, and level warping, as well as tools for inspecting memory usage and object counts. The function also includes toggles for features like slow motion and no clipping, providing developers with a versatile set of tools for testing gameplay mechanics. Cheat codes and debugging shortcuts were common in games of this era, serving both as development aids and as hidden features for players. In Wolfenstein 3D, these tools reflect the team's iterative approach to development, allowing them to quickly test and refine various aspects of the game. The inclusion of cheats like god mode also hints at the game's roots in arcade-style gameplay, where such features were often used to enhance replayability. The concept of debug keys has evolved significantly since the early 1990s, but their legacy can be traced back to games like Wolfenstein 3D. By providing developers with a flexible and efficient way to test their work, tools like `DebugKeys` helped shape the development process for future games, influencing how debugging and testing are approached in modern game development."

---

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
