---
title: "screen.c"
program: "Quake"
program_slug: "quake"
file_path: "QW/client/screen.c"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/Quake/blob/master/QW/client/screen.c"
year: 1996
author: "John Carmack, Michael Abrash, John Cash"
slug: "screen-c"
order: 37
description: "This file orchestrates the rendering of Quake's screen elements, showcasing techniques that defined 3D game development in the 1990s."

summary:
  - point: "Innovative use of center printing for dynamic messaging"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Field of view calculation optimized for hardware constraints"
    link: "https://en.wikipedia.org/wiki/Field_of_view"
    link_label: "Field of View"
  - point: "PCX screenshot functionality that influenced game debugging tools"
    link: "https://en.wikipedia.org/wiki/PCX"
    link_label: "PCX Format"
  - point: "Remote screenshot capability for multiplayer environments"
    link: "https://en.wikipedia.org/wiki/Multiplayer_video_game"
    link_label: "Multiplayer Gaming"
  - point: "Dynamic console resizing based on game state"
    link: "https://en.wikipedia.org/wiki/Console_(video_game)"
    link_label: "Game Console"

enhancements:
  - id: "center-printing-dynamic-messaging"
    line_start: 136
    line_end: 158
    title: "How Quake Made Messages Feel Immediate"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "This section implements dynamic center printing for important messages in Quake. The `SCR_CenterPrint` function stores a message string, calculates its display duration, and determines the number of lines for proper centering. The subsequent functions handle erasing and drawing the message on the screen. At the time, conveying critical information to players in a visually impactful way was a challenge, especially in fast-paced games. John Carmack and Michael Abrash designed this mechanism to ensure messages were prominent without disrupting gameplay. The approach reflects the era's constraints: limited screen space and the need for efficient rendering on hardware like the Intel 486. This technique influenced later games, where center-screen messages became a standard for alerts, objectives, and achievements. Developers studying Quake's source code often adapted this method for their own engines, such as in Unreal Engine and Source Engine."
  - id: "calc-fov-optimal-3d-viewing"
    line_start: 242
    line_end: 264
    title: "The Math Behind Quake's Immersive Views"
    wikipedia_url: "https://en.wikipedia.org/wiki/Field_of_view"
    image_url: ""
    image_caption: ""
    content: "The `CalcFov` function calculates the vertical field of view based on the horizontal field of view and screen dimensions. This ensures that the player's perspective adapts correctly to different resolutions and aspect ratios. In 1996, most players used CRT monitors with varying resolutions, and optimizing the field of view was crucial for maintaining immersion. The formula uses trigonometric functions to derive the vertical FOV, balancing performance and visual fidelity. This approach was groundbreaking for its time, as it allowed Quake to deliver a consistent experience across hardware configurations. The technique influenced later engines, including Unity and Unreal, where dynamic FOV calculations are standard practice. It also laid the groundwork for modern VR applications, where precise FOV calculations are essential for user comfort."
  - id: "dynamic-console-resizing"
    line_start: 506
    line_end: 553
    title: "Quake's Console: Adapting to the Game State"
    wikipedia_url: "https://en.wikipedia.org/wiki/Console_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `SCR_SetUpToDrawConsole` function dynamically adjusts the console's visibility based on the game's state. Whether the player is actively gaming, viewing the console, or in a menu, the function calculates the appropriate height and smoothly transitions the display. This design reflects id Software's commitment to usability, ensuring the console never obstructs gameplay unnecessarily. In the mid-1990s, consoles were essential for debugging and player communication, but their integration into 3D environments posed challenges. Quake's solution influenced later engines, where dynamic UI elements became standard. For instance, the Source Engine and Unreal Engine adopted similar approaches to manage overlays and HUD elements, enhancing user experience across genres."
  - id: "screenshot-pcx-format"
    line_start: 585
    line_end: 650
    title: "Why Quake Saved Screenshots as PCX Files"
    wikipedia_url: "https://en.wikipedia.org/wiki/PCX"
    image_url: ""
    image_caption: ""
    content: "The `WritePCXfile` function enables Quake to save screenshots in the PCX format, a popular choice in the 1990s due to its simplicity and widespread support. The function packs image data and appends a palette for color information, ensuring compatibility with tools like Paint Shop Pro. At the time, developers needed a reliable way to capture and analyze game visuals for debugging and promotional purposes. The choice of PCX reflects the era's focus on formats that balanced file size and ease of implementation. This functionality influenced game development workflows, where screenshot tools became essential for QA and marketing. Modern engines like Unity and Unreal offer similar features, though they use formats like PNG or JPEG. Quake's approach demonstrated the importance of integrating debugging tools directly into the game engine."
  - id: "remote-screenshot-multiplayer"
    line_start: 776
    line_end: 900
    title: "Taking Screenshots in Multiplayer Quake"
    wikipedia_url: "https://en.wikipedia.org/wiki/Multiplayer_video_game"
    image_url: ""
    image_caption: ""
    content: "The `SCR_RSShot_f` function allows remote screenshots in multiplayer sessions, a feature designed to assist server admins and developers in monitoring gameplay. The function scales the screen buffer to a predefined resolution, averages pixel colors, and saves the result as a PCX file. This capability highlights id Software's foresight in addressing multiplayer-specific needs, such as verifying player behavior or capturing moments for promotional use. In 1996, multiplayer gaming was still emerging, and tools like this helped establish best practices for server management. The feature influenced later multiplayer games, where screenshot and replay systems became integral. For example, Valve's Source Engine includes similar functionality for demos and replays, enabling community-driven content creation and competitive analysis."
  - id: "dynamic-screen-update-logic"
    line_start: 996
    line_end: 1165
    title: "How Quake Dynamically Updates the Screen"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "This section implements the main screen update logic in Quake, ensuring the game renders the correct visuals based on player actions, game state, and hardware constraints. The function `SCR_UpdateScreen` begins by checking various conditions, such as whether the screen update should be skipped due to loading or minimization on Windows. It dynamically recalculates the screen's reference definition (`vid.recalc_refdef`) when parameters like field of view (`scr_fov`) or screen size (`scr_viewsize`) change. This recalculation ensures the visuals adapt to gameplay changes without unnecessary rendering overhead. The function also integrates multiple rendering components, including the console, HUD, and game overlays. For example, during intermissions or finales, specific overlays like `Sbar_IntermissionOverlay` or `Sbar_FinaleOverlay` are drawn. The code uses conditional logic to prioritize rendering tasks, such as drawing the console (`SCR_DrawConsole`) or displaying notifications (`SCR_DrawNotifyString`). The back buffer access is enabled and disabled strategically to accommodate hardware limitations, such as linear writes on older adapters. This optimization minimizes the performance impact of rendering operations. Additionally, the function supports clearing the screen entirely (`Draw_TileClear`) during full updates and updates specific screen areas (`VID_Update`) based on the game state. In 1996, hardware constraints like limited memory and processing power on x86 systems required such meticulous optimization. John Carmack and Michael Abrash, known for their expertise in low-level programming and performance tuning, designed these routines to maximize efficiency. Their work influenced later game engines, including id Tech 2 and id Tech 3, which adopted similar rendering pipelines. Techniques like conditional rendering and back buffer management became standard practices in game development, shaping the industry’s approach to real-time graphics."
  - id: "whole-screen-refresh-trigger"
    line_start: 1167
    line_end: 1176
    title: "The Shortcut for Whole-Screen Refreshes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The `SCR_UpdateWholeScreen` function is a concise wrapper that forces a complete screen refresh by resetting the `scr_fullupdate` flag to zero and calling `SCR_UpdateScreen`. This ensures that all screen elements are redrawn, regardless of their previous state. Such functionality is particularly useful during moments when the game requires a visual reset, such as transitioning between levels or recovering from minimized states. This approach reflects the careful design philosophy of id Software during Quake's development. In the mid-1990s, hardware constraints like limited VRAM and slow CPUs meant that unnecessary rendering could severely impact performance. By isolating the logic for full-screen updates, the developers ensured that these operations were only triggered when absolutely necessary. The concept of a forced refresh became a staple in game engines, influencing later systems like Unreal Engine and Unity. It also aligns with modern practices in graphics programming, where selective rendering and efficient state management are critical for performance optimization. This function exemplifies the balance between simplicity and functionality that defined Quake’s codebase, showcasing how small, focused routines can have a significant impact on overall system behavior."
  - id: "final-cleanup-wrapper"
    line_start: 1167
    line_end: 1176
    title: "The Final Cleanup for Screen Updates"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The final lines of the file define a simple wrapper function, `SCR_UpdateWholeScreen`, which resets the `scr_fullupdate` flag and calls `SCR_UpdateScreen`. This design encapsulates the logic for refreshing the entire screen into a single reusable function, ensuring consistency and reducing code duplication. This minimalist approach reflects the programming ethos of John Carmack and his team, who prioritized clarity and efficiency in Quake's codebase. By abstracting the full-screen update process, the developers made it easier to maintain and extend the rendering system. This function also highlights the modularity of Quake's architecture, where small, focused routines interact seamlessly to create a complex and responsive system. The influence of such modular design can be seen in later game engines, which adopted similar principles to manage rendering pipelines. For example, the Source engine and CryEngine both emphasize modularity and encapsulation in their graphics subsystems. This function serves as a reminder of how even the simplest code can contribute to the robustness and longevity of a software project."

---

```cpp
/*
Copyright (C) 1996-1997 Id Software, Inc.

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  

See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

*/
// screen.c -- master for refresh, status bar, console, chat, notify, etc

#include "quakedef.h"
#include "r_local.h"

#include <time.h>

/*

background clear
rendering
turtle/net/ram icons
sbar
centerprint / slow centerprint
notify lines
intermission / finale overlay
loading plaque
console
menu

required background clears
required update regions


syncronous draw mode or async
One off screen buffer, with updates either copied or xblited
Need to double buffer?


async draw will require the refresh area to be cleared, because it will be
xblited, but sync draw can just ignore it.

sync
draw

CenterPrint ()
SlowPrint ()
Screen_Update ();
Con_Printf ();

net 
turn off messages option

the refresh is allways rendered, unless the console is full screen


console is:
	notify lines
	half
	full
	

*/


// only the refresh window will be updated unless these variables are flagged 
int			scr_copytop;
int			scr_copyeverything;

float		scr_con_current;
float		scr_conlines;		// lines of console to display

float		oldscreensize, oldfov;
float		oldsbar;
cvar_t		scr_viewsize = {"viewsize","100", true};
cvar_t		scr_fov = {"fov","90"};	// 10 - 170
cvar_t		scr_conspeed = {"scr_conspeed","300"};
cvar_t		scr_centertime = {"scr_centertime","2"};
cvar_t		scr_showram = {"showram","1"};
cvar_t		scr_showturtle = {"showturtle","0"};
cvar_t		scr_showpause = {"showpause","1"};
cvar_t		scr_printspeed = {"scr_printspeed","8"};
cvar_t		scr_allowsnap = {"scr_allowsnap", "1"};

qboolean	scr_initialized;		// ready to draw

qpic_t		*scr_ram;
qpic_t		*scr_net;
qpic_t		*scr_turtle;

int			scr_fullupdate;

int			clearconsole;
int			clearnotify;

int			sb_lines;

viddef_t	vid;				// global video state

vrect_t		*pconupdate;
vrect_t		scr_vrect;

qboolean	scr_disabled_for_loading;

qboolean	scr_skipupdate;

qboolean	block_drawing;

void SCR_ScreenShot_f (void);
void SCR_RSShot_f (void);

/*
===============================================================================

CENTER PRINTING

===============================================================================
*/

char		scr_centerstring[1024];
float		scr_centertime_start;	// for slow victory printing
float		scr_centertime_off;
int			scr_center_lines;
int			scr_erase_lines;
int			scr_erase_center;

/*
==============
SCR_CenterPrint

Called for important messages that should stay in the center of the screen
for a few moments
==============
*/
void SCR_CenterPrint (char *str)
{
	strncpy (scr_centerstring, str, sizeof(scr_centerstring)-1);
	scr_centertime_off = scr_centertime.value;
	scr_centertime_start = cl.time;

// count the number of lines for centering
	scr_center_lines = 1;
	while (*str)
	{
		if (*str == '\n')
			scr_center_lines++;
		str++;
	}
}

void SCR_EraseCenterString (void)
{
	int		y;

	if (scr_erase_center++ > vid.numpages)
	{
		scr_erase_lines = 0;
		return;
	}

	if (scr_center_lines <= 4)
		y = vid.height*0.35;
	else
		y = 48;

	scr_copytop = 1;
	Draw_TileClear (0, y, vid.width, min(8*scr_erase_lines, vid.height - y - 1));
}

void SCR_DrawCenterString (void)
{
	char	*start;
	int		l;
	int		j;
	int		x, y;
	int		remaining;

// the finale prints the characters one at a time
	if (cl.intermission)
		remaining = scr_printspeed.value * (cl.time - scr_centertime_start);
	else
		remaining = 9999;

	scr_erase_center = 0;
	start = scr_centerstring;

	if (scr_center_lines <= 4)
		y = vid.height*0.35;
	else
		y = 48;

	do	
	{
	// scan the width of the line
		for (l=0 ; l<40 ; l++)
			if (start[l] == '\n' || !start[l])
				break;
		x = (vid.width - l*8)/2;
		for (j=0 ; j<l ; j++, x+=8)
		{
			Draw_Character (x, y, start[j]);	
			if (!remaining--)
				return;
		}
			
		y += 8;

		while (*start && *start != '\n')
			start++;

		if (!*start)
			break;
		start++;		// skip the \n
	} while (1);
}

void SCR_CheckDrawCenterString (void)
{
	scr_copytop = 1;
	if (scr_center_lines > scr_erase_lines)
		scr_erase_lines = scr_center_lines;

	scr_centertime_off -= host_frametime;
	
	if (scr_centertime_off <= 0 && !cl.intermission)
		return;
	if (key_dest != key_game)
		return;

	SCR_DrawCenterString ();
}

//=============================================================================

/*
====================
CalcFov
====================
*/
float CalcFov (float fov_x, float width, float height)
{
        float   a;
        float   x;

        if (fov_x < 1 || fov_x > 179)
                Sys_Error ("Bad fov: %f", fov_x);

        x = width/tan(fov_x/360*M_PI);

        a = atan (height/x);

        a = a*360/M_PI;

        return a;
}

/*
=================
SCR_CalcRefdef

Must be called whenever vid changes
Internal use only
=================
*/
static void SCR_CalcRefdef (void)
{
	vrect_t		vrect;
	float		size;

	scr_fullupdate = 0;		// force a background redraw
	vid.recalc_refdef = 0;

// force the status bar to redraw
	Sbar_Changed ();

//========================================
	
// bound viewsize
	if (scr_viewsize.value < 30)
		Cvar_Set ("viewsize","30");
	if (scr_viewsize.value > 120)
		Cvar_Set ("viewsize","120");

// bound field of view
	if (scr_fov.value < 10)
		Cvar_Set ("fov","10");
	if (scr_fov.value > 170)
		Cvar_Set ("fov","170");

	r_refdef.fov_x = scr_fov.value;
	r_refdef.fov_y = CalcFov (r_refdef.fov_x, r_refdef.vrect.width, r_refdef.vrect.height);

// intermission is always full screen	
	if (cl.intermission)
		size = 120;
	else
		size = scr_viewsize.value;

	if (size >= 120)
		sb_lines = 0;		// no status bar at all
	else if (size >= 110)
		sb_lines = 24;		// no inventory
	else
		sb_lines = 24+16+8;

// these calculations mirror those in R_Init() for r_refdef, but take no
// account of water warping
	vrect.x = 0;
	vrect.y = 0;
	vrect.width = vid.width;
	vrect.height = vid.height;

	R_SetVrect (&vrect, &scr_vrect, sb_lines);

// guard against going from one mode to another that's less than half the
// vertical resolution
	if (scr_con_current > vid.height)
		scr_con_current = vid.height;

// notify the refresh of the change
	R_ViewChanged (&vrect, sb_lines, vid.aspect);
}


/*
=================
SCR_SizeUp_f

Keybinding command
=================
*/
void SCR_SizeUp_f (void)
{
	if (scr_viewsize.value < 120) {
	Cvar_SetValue ("viewsize",scr_viewsize.value+10);
	vid.recalc_refdef = 1;
	}
}


/*
=================
SCR_SizeDown_f

Keybinding command
=================
*/
void SCR_SizeDown_f (void)
{
	Cvar_SetValue ("viewsize",scr_viewsize.value-10);
	vid.recalc_refdef = 1;
}

//============================================================================

/*
==================
SCR_Init
==================
*/
void SCR_Init (void)
{
	Cvar_RegisterVariable (&scr_fov);
	Cvar_RegisterVariable (&scr_viewsize);
	Cvar_RegisterVariable (&scr_conspeed);
	Cvar_RegisterVariable (&scr_showram);
	Cvar_RegisterVariable (&scr_showturtle);
	Cvar_RegisterVariable (&scr_showpause);
	Cvar_RegisterVariable (&scr_centertime);
	Cvar_RegisterVariable (&scr_printspeed);
	Cvar_RegisterVariable (&scr_allowsnap);

//
// register our commands
//
	Cmd_AddCommand ("screenshot",SCR_ScreenShot_f);
	Cmd_AddCommand ("snap",SCR_RSShot_f);
	Cmd_AddCommand ("sizeup",SCR_SizeUp_f);
	Cmd_AddCommand ("sizedown",SCR_SizeDown_f);

	scr_ram = W_GetLumpName ("ram");
	scr_net = W_GetLumpName ("net");
	scr_turtle = W_GetLumpName ("turtle");

	scr_initialized = true;
}



/*
==============
SCR_DrawRam
==============
*/
void SCR_DrawRam (void)
{
	if (!scr_showram.value)
		return;

	if (!r_cache_thrash)
		return;

	Draw_Pic (scr_vrect.x+32, scr_vrect.y, scr_ram);
}

/*
==============
SCR_DrawTurtle
==============
*/
void SCR_DrawTurtle (void)
{
	static int	count;
	
	if (!scr_showturtle.value)
		return;

	if (host_frametime < 0.1)
	{
		count = 0;
		return;
	}

	count++;
	if (count < 3)
		return;

	Draw_Pic (scr_vrect.x, scr_vrect.y, scr_turtle);
}

/*
==============
SCR_DrawNet
==============
*/
void SCR_DrawNet (void)
{
	if (cls.netchan.outgoing_sequence - cls.netchan.incoming_acknowledged < UPDATE_BACKUP-1)
		return;
	if (cls.demoplayback)
		return;

	Draw_Pic (scr_vrect.x+64, scr_vrect.y, scr_net);
}

void SCR_DrawFPS (void)
{
	extern cvar_t show_fps;
	static double lastframetime;
	double t;
	extern int fps_count;
	static lastfps;
	int x, y;
	char st[80];

	if (!show_fps.value)
		return;

	t = Sys_DoubleTime();
	if ((t - lastframetime) >= 1.0) {
		lastfps = fps_count;
		fps_count = 0;
		lastframetime = t;
	}

	sprintf(st, "%3d FPS", lastfps);
	x = vid.width - strlen(st) * 8 - 8;
	y = vid.height - sb_lines - 8;
//	Draw_TileClear(x, y, strlen(st) * 8, 8);
	Draw_String(x, y, st);
}

/*
==============
DrawPause
==============
*/
void SCR_DrawPause (void)
{
	qpic_t	*pic;

	if (!scr_showpause.value)		// turn off for screenshots
		return;

	if (!cl.paused)
		return;

	pic = Draw_CachePic ("gfx/pause.lmp");
	Draw_Pic ( (vid.width - pic->width)/2, 
		(vid.height - 48 - pic->height)/2, pic);
}


//=============================================================================


/*
==================
SCR_SetUpToDrawConsole
==================
*/
void SCR_SetUpToDrawConsole (void)
{
	Con_CheckResize ();
	
// decide on the height of the console
	if (cls.state != ca_active)
	{
		scr_conlines = vid.height;		// full screen
		scr_con_current = scr_conlines;
	}
	else if (key_dest == key_console)
		scr_conlines = vid.height/2;	// half screen
	else
		scr_conlines = 0;				// none visible
	
	if (scr_conlines < scr_con_current)
	{
		scr_con_current -= scr_conspeed.value*host_frametime;
		if (scr_conlines > scr_con_current)
			scr_con_current = scr_conlines;

	}
	else if (scr_conlines > scr_con_current)
	{
		scr_con_current += scr_conspeed.value*host_frametime;
		if (scr_conlines < scr_con_current)
			scr_con_current = scr_conlines;
	}

	if (clearconsole++ < vid.numpages)
	{
		scr_copytop = 1;
		Draw_TileClear (0,(int)scr_con_current,vid.width, vid.height - (int)scr_con_current);
		Sbar_Changed ();
	}
	else if (clearnotify++ < vid.numpages)
	{
		scr_copytop = 1;
		Draw_TileClear (0,0,vid.width, con_notifylines);
	}
	else
		con_notifylines = 0;
}
	
/*
==================
SCR_DrawConsole
==================
*/
void SCR_DrawConsole (void)
{
	if (scr_con_current)
	{
		scr_copyeverything = 1;
		Con_DrawConsole (scr_con_current);
		clearconsole = 0;
	}
	else
	{
		if (key_dest == key_game || key_dest == key_message)
			Con_DrawNotify ();	// only draw notify in game
	}
}


/* 
============================================================================== 
 
						SCREEN SHOTS 
 
============================================================================== 
*/ 


/* 
============== 
WritePCXfile 
============== 
*/ 
void WritePCXfile (char *filename, byte *data, int width, int height,
	int rowbytes, byte *palette, qboolean upload) 
{
	int		i, j, length;
	pcx_t	*pcx;
	byte		*pack;
	  
	pcx = Hunk_TempAlloc (width*height*2+1000);
	if (pcx == NULL)
	{
		Con_Printf("SCR_ScreenShot_f: not enough memory\n");
		return;
	} 
 
	pcx->manufacturer = 0x0a;	// PCX id
	pcx->version = 5;			// 256 color
 	pcx->encoding = 1;		// uncompressed
	pcx->bits_per_pixel = 8;		// 256 color
	pcx->xmin = 0;
	pcx->ymin = 0;
	pcx->xmax = LittleShort((short)(width-1));
	pcx->ymax = LittleShort((short)(height-1));
	pcx->hres = LittleShort((short)width);
	pcx->vres = LittleShort((short)height);
	Q_memset (pcx->palette,0,sizeof(pcx->palette));
	pcx->color_planes = 1;		// chunky image
	pcx->bytes_per_line = LittleShort((short)width);
	pcx->palette_type = LittleShort(2);		// not a grey scale
	Q_memset (pcx->filler,0,sizeof(pcx->filler));

// pack the image
	pack = &pcx->data;
	
	for (i=0 ; i<height ; i++)
	{
		for (j=0 ; j<width ; j++)
		{
			if ( (*data & 0xc0) != 0xc0)
				*pack++ = *data++;
			else
			{
				*pack++ = 0xc1;
				*pack++ = *data++;
			}
		}

		data += rowbytes - width;
	}
			
// write the palette
	*pack++ = 0x0c;	// palette ID byte
	for (i=0 ; i<768 ; i++)
		*pack++ = *palette++;
		
// write output file 
	length = pack - (byte *)pcx;
	if (upload)
		CL_StartUpload((void *)pcx, length);
	else
		COM_WriteFile (filename, pcx, length);
} 
 


/* 
================== 
SCR_ScreenShot_f
================== 
*/  
void SCR_ScreenShot_f (void) 
{ 
	int     i; 
	char		pcxname[80]; 
	char		checkname[MAX_OSPATH];

// 
// find a file name to save it to 
// 
	strcpy(pcxname,"quake00.pcx");
		
	for (i=0 ; i<=99 ; i++) 
	{ 
		pcxname[5] = i/10 + '0'; 
		pcxname[6] = i%10 + '0'; 
		sprintf (checkname, "%s/%s", com_gamedir, pcxname);
		if (Sys_FileTime(checkname) == -1)
			break;	// file doesn't exist
	} 
	if (i==100) 
	{
		Con_Printf ("SCR_ScreenShot_f: Couldn't create a PCX"); 
		return;
	}
 
// 
// save the pcx file 
// 
	D_EnableBackBufferAccess ();	// enable direct drawing of console to back
									//  buffer

	WritePCXfile (pcxname, vid.buffer, vid.width, vid.height, vid.rowbytes,
				  host_basepal, false);

	D_DisableBackBufferAccess ();	// for adapters that can't stay mapped in
									//  for linear writes all the time

	Con_Printf ("Wrote %s\n", pcxname);
} 

/*
Find closest color in the palette for named color
*/
int MipColor(int r, int g, int b)
{
	int i;
	float dist;
	int best;
	float bestdist;
	int r1, g1, b1;
	static int lr = -1, lg = -1, lb = -1;
	static int lastbest;

	if (r == lr && g == lg && b == lb)
		return lastbest;

	bestdist = 256*256*3;

	for (i = 0; i < 256; i++) {
		r1 = host_basepal[i*3] - r;
		g1 = host_basepal[i*3+1] - g;
		b1 = host_basepal[i*3+2] - b;
		dist = r1*r1 + g1*g1 + b1*b1;
		if (dist < bestdist) {
			bestdist = dist;
			best = i;
		}
	}
	lr = r; lg = g; lb = b;
	lastbest = best;
	return best;
}

// in draw.c
extern byte		*draw_chars;				// 8*8 graphic characters

void SCR_DrawCharToSnap (int num, byte *dest, int width)
{
	int		row, col;
	byte	*source;
	int		drawline;
	int		x;

	row = num>>4;
	col = num&15;
	source = draw_chars + (row<<10) + (col<<3);

	drawline = 8;

	while (drawline--)
	{
		for (x=0 ; x<8 ; x++)
			if (source[x])
				dest[x] = source[x];
			else
				dest[x] = 98;
		source += 128;
		dest += width;
	}

}

void SCR_DrawStringToSnap (const char *s, byte *buf, int x, int y, int width)
{
	byte *dest;
	const unsigned char *p;

	dest = buf + ((y * width) + x);

	p = (const unsigned char *)s;
	while (*p) {
		SCR_DrawCharToSnap(*p++, dest, width);
		dest += 8;
	}
}


/* 
================== 
SCR_RSShot_f
================== 
*/  
void SCR_RSShot_f (void) 
{ 
	int     i, x, y;
	unsigned char		*src, *dest;
	char		pcxname[80]; 
	char		checkname[MAX_OSPATH];
	unsigned char		*newbuf, *srcbuf;
	int srcrowbytes;
	int w, h;
	int dx, dy, dex, dey, nx;
	int r, b, g;
	int count;
	float fracw, frach;
	char st[80];
	time_t now;

	if (CL_IsUploading())
		return; // already one pending

	if (cls.state < ca_onserver)
		return; // gotta be connected

	if (!scr_allowsnap.value) {
		MSG_WriteByte (&cls.netchan.message, clc_stringcmd);
		SZ_Print (&cls.netchan.message, "snap\n");
		Con_Printf("Refusing remote screen shot request.\n");
		return;
	}

	Con_Printf("Remote screen shot requested.\n");

#if 0
// 
// find a file name to save it to 
// 
	strcpy(pcxname,"mquake00.pcx");
		
	for (i=0 ; i<=99 ; i++) 
	{ 
		pcxname[6] = i/10 + '0'; 
		pcxname[7] = i%10 + '0'; 
		sprintf (checkname, "%s/%s", com_gamedir, pcxname);
		if (Sys_FileTime(checkname) == -1)
			break;	// file doesn't exist
	} 
	if (i==100) 
	{
		Con_Printf ("SCR_ScreenShot_f: Couldn't create a PCX"); 
		return;
	}
#endif
 
// 
// save the pcx file 
// 
	D_EnableBackBufferAccess ();	// enable direct drawing of console to back
									//  buffer

	w = (vid.width < RSSHOT_WIDTH) ? vid.width : RSSHOT_WIDTH;
	h = (vid.height < RSSHOT_HEIGHT) ? vid.height : RSSHOT_HEIGHT;

	fracw = (float)vid.width / (float)w;
	frach = (float)vid.height / (float)h;

	newbuf = malloc(w*h);

	for (y = 0; y < h; y++) {
		dest = newbuf + (w * y);

		for (x = 0; x < w; x++) {
			r = g = b = 0;

			dx = x * fracw;
			dex = (x + 1) * fracw;
			if (dex == dx) dex++; // at least one
			dy = y * frach;
			dey = (y + 1) * frach;
			if (dey == dy) dey++; // at least one

			count = 0;
			for (/* */; dy < dey; dy++) {
				src = vid.buffer + (vid.rowbytes * dy) + dx;
				for (nx = dx; nx < dex; nx++) {
					r += host_basepal[*src * 3];
					g += host_basepal[*src * 3+1];
					b += host_basepal[*src * 3+2];
					src++;
					count++;
				}
			}
			r /= count;
			g /= count;
			b /= count;
			*dest++ = MipColor(r, g, b);
		}
	}

	time(&now);
	strcpy(st, ctime(&now));
	st[strlen(st) - 1] = 0;
	SCR_DrawStringToSnap (st, newbuf, w - strlen(st)*8, 0, w);

	strncpy(st, cls.servername, sizeof(st));
	st[sizeof(st) - 1] = 0;
	SCR_DrawStringToSnap (st, newbuf, w - strlen(st)*8, 10, w);

	strncpy(st, name.string, sizeof(st));
	st[sizeof(st) - 1] = 0;
	SCR_DrawStringToSnap (st, newbuf, w - strlen(st)*8, 20, w);

	WritePCXfile (pcxname, newbuf, w, h, w, host_basepal, true);

	free(newbuf);

	D_DisableBackBufferAccess ();	// for adapters that can't stay mapped in
									//  for linear writes all the time

//	Con_Printf ("Wrote %s\n", pcxname);
	Con_Printf ("Sending shot to server...\n");
} 


//=============================================================================

char	*scr_notifystring;
qboolean	scr_drawdialog;

void SCR_DrawNotifyString (void)
{
	char	*start;
	int		l;
	int		j;
	int		x, y;

	start = scr_notifystring;

	y = vid.height*0.35;

	do	
	{
	// scan the width of the line
		for (l=0 ; l<40 ; l++)
			if (start[l] == '\n' || !start[l])
				break;
		x = (vid.width - l*8)/2;
		for (j=0 ; j<l ; j++, x+=8)
			Draw_Character (x, y, start[j]);	
			
		y += 8;

		while (*start && *start != '\n')
			start++;

		if (!*start)
			break;
		start++;		// skip the \n
	} while (1);
}

/*
==================
SCR_ModalMessage

Displays a text string in the center of the screen and waits for a Y or N
keypress.  
==================
*/
int SCR_ModalMessage (char *text)
{
	scr_notifystring = text;
 
// draw a fresh screen
	scr_fullupdate = 0;
	scr_drawdialog = true;
	SCR_UpdateScreen ();
	scr_drawdialog = false;
	
	S_ClearBuffer ();		// so dma doesn't loop current sound

	do
	{
		key_count = -1;		// wait for a key down and up
		Sys_SendKeyEvents ();
	} while (key_lastpress != 'y' && key_lastpress != 'n' && key_lastpress != K_ESCAPE);

	scr_fullupdate = 0;
	SCR_UpdateScreen ();

	return key_lastpress == 'y';
}


//=============================================================================

/*
===============
SCR_BringDownConsole

Brings the console down and fades the palettes back to normal
================
*/
void SCR_BringDownConsole (void)
{
	int		i;
	
	scr_centertime_off = 0;
	
	for (i=0 ; i<20 && scr_conlines != scr_con_current ; i++)
		SCR_UpdateScreen ();

	cl.cshifts[0].percent = 0;		// no area contents palette on next frame
	VID_SetPalette (host_basepal);
}


/*
==================
SCR_UpdateScreen

This is called every frame, and can also be called explicitly to flush
text to the screen.

WARNING: be very careful calling this from elsewhere, because the refresh
needs almost the entire 256k of stack space!
==================
*/
void SCR_UpdateScreen (void)
{
	static float	oldscr_viewsize;
	vrect_t		vrect;

	if (scr_skipupdate || block_drawing)
		return;

	if (scr_disabled_for_loading)
		return;

#ifdef _WIN32
	{	// don't suck up any cpu if minimized
		extern int Minimized;

		if (Minimized)
			return;
	}
#endif

	scr_copytop = 0;
	scr_copyeverything = 0;

	if (!scr_initialized || !con_initialized)
		return;				// not initialized yet

	if (scr_viewsize.value != oldscr_viewsize)
	{
		oldscr_viewsize = scr_viewsize.value;
		vid.recalc_refdef = 1;
	}
	
//
// check for vid changes
//
	if (oldfov != scr_fov.value)
	{
		oldfov = scr_fov.value;
		vid.recalc_refdef = true;
	}
	
	if (oldscreensize != scr_viewsize.value)
	{
		oldscreensize = scr_viewsize.value;
		vid.recalc_refdef = true;
	}

	if (oldsbar != cl_sbar.value)
	{
		oldsbar = cl_sbar.value;
		vid.recalc_refdef = true;
	}
	
	if (vid.recalc_refdef)
	{
		// something changed, so reorder the screen
		SCR_CalcRefdef ();
	}

//
// do 3D refresh drawing, and then update the screen
//
	D_EnableBackBufferAccess ();	// of all overlay stuff if drawing directly

	if (scr_fullupdate++ < vid.numpages)
	{	// clear the entire screen
		scr_copyeverything = 1;
		Draw_TileClear (0,0,vid.width,vid.height);
		Sbar_Changed ();
	}

	pconupdate = NULL;


	SCR_SetUpToDrawConsole ();
	SCR_EraseCenterString ();
	
	D_DisableBackBufferAccess ();	// for adapters that can't stay mapped in
									//  for linear writes all the time

	VID_LockBuffer ();
	V_RenderView ();
	VID_UnlockBuffer ();

	D_EnableBackBufferAccess ();	// of all overlay stuff if drawing directly

	if (scr_drawdialog)
	{
		Sbar_Draw ();
		Draw_FadeScreen ();
		SCR_DrawNotifyString ();
		scr_copyeverything = true;
	}
	else if (cl.intermission == 1 && key_dest == key_game)
	{
		Sbar_IntermissionOverlay ();
	}
	else if (cl.intermission == 2 && key_dest == key_game)
	{
		Sbar_FinaleOverlay ();
		SCR_CheckDrawCenterString ();
	}
	else
	{
		SCR_DrawRam ();
		SCR_DrawNet ();
		SCR_DrawTurtle ();
		SCR_DrawPause ();
		SCR_DrawFPS ();
		SCR_CheckDrawCenterString ();
		Sbar_Draw ();
		SCR_DrawConsole ();	
		M_Draw ();
	}


	D_DisableBackBufferAccess ();	// for adapters that can't stay mapped in
									//  for linear writes all the time
	if (pconupdate)
	{
		D_UpdateRects (pconupdate);
	}

	V_UpdatePalette ();

//
// update one of three areas
//
	if (scr_copyeverything)
	{
		vrect.x = 0;
		vrect.y = 0;
		vrect.width = vid.width;
		vrect.height = vid.height;
		vrect.pnext = 0;
	
		VID_Update (&vrect);
	}
	else if (scr_copytop)
	{
		vrect.x = 0;
		vrect.y = 0;
		vrect.width = vid.width;
		vrect.height = vid.height - sb_lines;
		vrect.pnext = 0;
	
		VID_Update (&vrect);
	}	
	else
	{
		vrect.x = scr_vrect.x;
		vrect.y = scr_vrect.y;
		vrect.width = scr_vrect.width;
		vrect.height = scr_vrect.height;
		vrect.pnext = 0;
	
		VID_Update (&vrect);
	}	
}

/*
==================
SCR_UpdateWholeScreen
==================
*/
void SCR_UpdateWholeScreen (void)
{
	scr_fullupdate = 0;
	SCR_UpdateScreen ();
}
```
