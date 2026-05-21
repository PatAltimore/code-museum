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
description: "Debugging tools and cheats in Wolfenstein 3D reveal the ingenuity behind its development."

summary:
  - point: "Debugging tools provided insights into memory usage and object counts."
    link: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    link_label: "Wolfenstein 3D"
  - point: "Cheat codes like God Mode and item cheats were implemented for testing and debugging."
    link: "https://en.wikipedia.org/wiki/Cheat_code"
    link_label: "Cheat codes"
  - point: "Memory management routines highlight the constraints of early 1990s hardware."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Visual debugging tools like ShapeTest helped developers validate graphics and sprites."
    link: "https://en.wikipedia.org/wiki/Computer_graphics"
    link_label: "Computer graphics"
  - point: "Interactive map viewing tools showcase the developers' attention to detail."
    link: "https://en.wikipedia.org/wiki/Video_game_design"
    link_label: "Video game design"

enhancements:
  - id: "debug-memory-usage"
    line_start: 44
    line_end: 74
    title: "How Wolfenstein Debugged Memory on MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This subroutine, `DebugMemory`, provides a snapshot of memory usage in the game. It displays total memory, free memory, and memory available after purging unused resources, all calculated in kilobytes. The function uses helper routines like `MM_UnusedMemory` and `MM_TotalFree` to query the memory manager. The output is presented in a centered window on the screen, with user acknowledgment required to proceed. In the early 1990s, memory constraints were a significant challenge for developers. Wolfenstein 3D ran on MS-DOS, which often limited programs to 640KB of conventional memory. Efficient memory management was critical for ensuring smooth gameplay. John Carmack, known for his technical brilliance, designed systems to optimize memory usage, including purging unused resources dynamically. This approach influenced later game engines, such as the Doom engine, which further refined memory management techniques. It also set a precedent for debugging tools in game development, helping developers understand and optimize resource usage in real-time. Modern game engines like Unity and Unreal Engine include similar profiling tools, tracing their lineage back to innovations like this."
  - id: "counting-game-objects"
    line_start: 76
    line_end: 125
    title: "Counting Actors, Doors, and Statics in Real-Time"
    wikipedia_url: "https://en.wikipedia.org/wiki/Computer_graphics"
    image_url: ""
    image_caption: ""
    content: "The `CountObjects` function provides a detailed breakdown of game objects, including static objects, doors, and actors. It iterates through lists of objects and counts active and inactive actors, displaying the results in a debug window. This routine was essential for validating the game's object management system during development. In 1992, Wolfenstein 3D's fast-paced gameplay required efficient handling of numerous objects in memory. The game's developers, including John Romero and Tom Hall, used routines like this to ensure the game could handle complex levels without performance degradation. Debugging tools like `CountObjects` allowed them to identify bottlenecks and optimize object handling. This technique influenced later games, including Doom and Quake, where object management became even more critical due to increased complexity. It also contributed to the development of debugging practices in modern game engines, where real-time object tracking is a standard feature."
  - id: "picture-pause-vga-trick"
    line_start: 127
    line_end: 205
    title: "The VGA Trick Behind PicturePause"
    wikipedia_url: "https://en.wikipedia.org/wiki/VGA"
    image_url: ""
    image_caption: ""
    content: "The `PicturePause` routine implements a unique pause feature that preserves the screen's visual state. It uses VGA-specific operations to read and write screen memory, ensuring the display remains unchanged during the pause. The function also manipulates the VGA palette and memory buffers to achieve this effect. In the early 1990s, VGA graphics were the standard for PC gaming, offering a resolution of 320x200 pixels with 256 colors. Direct manipulation of VGA memory was common practice, as it allowed developers to achieve effects not supported by higher-level APIs. John Carmack's mastery of low-level graphics programming is evident in this routine, which demonstrates his ability to push hardware to its limits. This technique influenced later games that relied on direct hardware manipulation for performance and visual effects. It also inspired graphics programming practices in modern engines, where developers often use shaders and low-level APIs like DirectX and OpenGL to achieve similar results."
  - id: "shape-test-debugging"
    line_start: 208
    line_end: 404
    title: "ShapeTest: Debugging Sprites and Walls"
    wikipedia_url: "https://en.wikipedia.org/wiki/Computer_graphics"
    image_url: ""
    image_caption: ""
    content: "The `ShapeTest` function is a visual debugging tool that allows developers to inspect and validate graphics assets, including walls, sprites, and sounds. It displays detailed information about each asset, such as memory location, page type, and last access time. The routine also includes code for rendering walls and sprites directly on the screen. During Wolfenstein 3D's development, debugging graphical assets was a critical task. The game's immersive environments relied on accurate rendering of walls and sprites, which were stored in memory as pages. Tools like `ShapeTest` enabled developers to identify and fix issues with asset loading and rendering. This approach influenced debugging practices in later games, where visual tools became standard for validating graphics and animations. Modern game engines include similar features, such as asset inspectors and real-time rendering previews, which trace their origins to innovations like this."
  - id: "debug-keys-cheat-system"
    line_start: 407
    line_end: 598
    title: "DebugKeys: The Cheat System Developers Loved"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cheat_code"
    image_url: ""
    image_caption: ""
    content: "The `DebugKeys` function implements a suite of debugging tools and cheat codes, including God Mode, item cheats, and level warping. Each keypress triggers a specific action, such as displaying memory info, toggling slow motion, or enabling no-clipping mode. These tools were invaluable for testing and debugging the game during development. Cheat codes have a long history in gaming, often originating as debugging tools used by developers. In Wolfenstein 3D, they served dual purposes: facilitating testing and providing players with hidden features. John Romero, known for his playful approach to game design, embraced cheat codes as a way to enhance player engagement. This system influenced the inclusion of cheat codes in later games, such as Doom and Quake, where they became iconic features. It also contributed to the development of debugging tools in modern game engines, where developers use similar systems to test gameplay mechanics and debug issues efficiently."

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
