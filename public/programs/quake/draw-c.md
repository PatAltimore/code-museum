---
title: "draw.c"
program: "Quake"
program_slug: "quake"
file_path: "QW/client/draw.c"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/Quake/blob/master/QW/client/draw.c"
year: 1996
author: "John Carmack, Michael Abrash, John Cash"
slug: "draw-c"
order: 28
description: "This file contains Quake's rendering routines, showcasing techniques for drawing graphics on constrained hardware."

summary:
  - point: "Optimized routines for drawing characters and images directly to the video buffer"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Techniques for handling transparency and color translation in software rendering"
    link: "https://en.wikipedia.org/wiki/Transparency_(graphic)"
    link_label: "Transparency"
  - point: "Tile-based rendering for efficient screen filling"
    link: "https://en.wikipedia.org/wiki/Tile-based_rendering"
    link_label: "Tile-based rendering"
  - point: "Debugging aids embedded in rendering code"
    link: "https://en.wikipedia.org/wiki/Debugging"
    link_label: "Debugging"
  - point: "Legacy of software rendering influencing later engines and techniques"
    link: "https://en.wikipedia.org/wiki/Software_rendering"
    link_label: "Software rendering"

enhancements:
  - id: "foundation-data-structures"
    line_start: 1
    line_end: 32
    title: "The Data Structures That Grounded Quake"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_structure"
    image_url: ""
    image_caption: ""
    content: "This section defines foundational data structures like `rectdesc_t`, which encapsulates rectangle dimensions and texture data. These structures are critical for managing graphical elements and their placement on the screen. In 1996, hardware constraints like limited memory and processing power meant that every byte and cycle counted. By organizing graphical data into compact, reusable structures, the Quake team optimized rendering efficiency. This approach, while common today, was groundbreaking in its application to real-time 3D environments at the time. These structures influenced later game engines, including Unreal Engine and Source Engine, which adopted similar abstractions for rendering pipelines."
  - id: "cachepic-lookup-system"
    line_start: 59
    line_end: 85
    title: "The Lookup System That Kept Quake Fast"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cache_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `Draw_CachePic` function implements a caching system for graphical assets, ensuring that frequently used textures are quickly accessible. This was vital for maintaining performance on mid-90s hardware, where disk access was slow and memory was limited. The cache avoids redundant file loads by storing assets in memory and checking for existing entries before loading new ones. This technique, pioneered by John Carmack and his team, became a standard in game development, influencing asset management in engines like Unity and Unreal. The error handling (`Sys_Error`) reflects the team's emphasis on robustness, ensuring the game fails gracefully if the cache exceeds its limits."
  - id: "draw-init-graphics-setup"
    line_start: 105
    line_end: 120
    title: "How Quake Prepared Its Graphics Pipeline"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_pipeline"
    image_url: ""
    image_caption: ""
    content: "The `Draw_Init` function initializes essential graphical assets, including character sets (`draw_chars`) and background tiles (`draw_backtile`). This setup phase ensures that all necessary textures are loaded into memory before rendering begins. In the mid-90s, games like Quake had to carefully manage memory to fit within the constraints of consumer-grade PCs. By preloading assets, the game avoided runtime delays caused by disk access. This initialization pattern influenced later engines, which adopted similar practices for preloading textures and shaders to optimize performance."
  - id: "draw-character-rendering"
    line_start: 124
    line_end: 220
    title: "The Routine That Drew Every Letter"
    wikipedia_url: "https://en.wikipedia.org/wiki/Character_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `Draw_Character` function is responsible for rendering individual 8x8 pixel characters on the screen. It includes clipping logic to handle cases where characters are partially off-screen, ensuring graphical consistency. The function supports both 8-bit and 16-bit color modes, reflecting the transitionary period of PC graphics hardware in the mid-90s. This routine demonstrates the team's attention to detail, as efficient text rendering was crucial for console output and in-game messages. The use of lookup tables (`d_8to16table`) for color translation highlights the team's optimization efforts. Techniques like these influenced later text rendering systems in games and operating systems."
  - id: "draw-string-text-rendering"
    line_start: 222
    line_end: 235
    title: "How Quake Rendered Entire Sentences"
    wikipedia_url: "https://en.wikipedia.org/wiki/Text_rendering"
    image_url: ""
    image_caption: ""
    content: "The `Draw_String` function builds on `Draw_Character` to render entire strings of text. By iterating through each character in a string and calling the character rendering routine, it provides a straightforward mechanism for displaying text in the game. This modular approach allowed the team to reuse the character rendering logic across multiple contexts, including menus, console output, and HUD elements. The simplicity and efficiency of this design influenced text rendering in later engines, where modularity and reuse became standard practices."
  - id: "draw-crosshair-aiming"
    line_start: 271
    line_end: 294
    title: "The Crosshair That Defined Precision"
    wikipedia_url: "https://en.wikipedia.org/wiki/Crosshair"
    image_url: ""
    image_caption: ""
    content: "The `Draw_Crosshair` function implements the rendering logic for the player's aiming reticle. It supports multiple styles, including a simple '+' character and a more detailed pixel-based crosshair. This feature reflects the team's focus on gameplay precision, as accurate aiming was critical in Quake's multiplayer matches. The ability to customize the crosshair's position and color demonstrates an early example of user-centric design in games. Crosshairs became a staple of first-person shooters, with later games like Counter-Strike and Call of Duty offering extensive customization options inspired by this approach."
  - id: "draw-console-background"
    line_start: 639
    line_end: 733
    title: "The Console That Anchored Quake's Debugging"
    wikipedia_url: "https://en.wikipedia.org/wiki/Console_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `Draw_ConsoleBackground` function renders the console's background, providing a visually distinct area for debugging and player commands. This feature was essential for developers and players alike, as it facilitated real-time interaction with the game's engine. The inclusion of version information directly in the background image highlights the team's attention to detail and transparency. The console's design influenced debugging tools in later engines, where developer consoles became standard for testing and diagnostics."
  - id: "draw-fade-screen"
    line_start: 954
    line_end: 988
    title: "The Fade Effect That Set the Mood"
    wikipedia_url: "https://en.wikipedia.org/wiki/Fade_(visual_effect)"
    image_url: ""
    image_caption: ""
    content: "The `Draw_FadeScreen` function creates a fade effect by darkening the screen pixel by pixel. This visual transition was used to signal events like game over screens or level transitions. The implementation relies on bitwise operations to achieve the fade, showcasing the team's mastery of low-level graphics manipulation. Fade effects became a common technique in games, influencing visual storytelling and atmosphere in titles like Half-Life and Bioshock."
  - id: "draw-end-disc-rendering-trick"
    line_start: 1007
    line_end: 1019
    title: "Why Quake's Loading Disc Was So Smooth"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `Draw_EndDisc` function is a compact routine that handles the rendering of Quake's 'loading disc' indicator—a small visual cue displayed in the top-right corner of the screen during certain operations. The function calls `D_EndDirectRect`, which directly manipulates a rectangular region of the screen buffer to render the disc. This approach bypasses more complex rendering pipelines, ensuring minimal overhead and maximum responsiveness. In 1996, hardware constraints were a defining factor for game development. Quake targeted x86 processors and relied heavily on software rendering, as dedicated GPUs were not yet standard. Techniques like direct screen buffer manipulation were essential for achieving smooth, real-time updates without taxing the CPU. John Carmack and Michael Abrash, both renowned for their optimization expertise, designed Quake's rendering system to squeeze every ounce of performance from the hardware. Abrash's prior work on graphics programming, including his influential writings in Dr. Dobb's Journal, informed many of these techniques. The 'loading disc' itself became an iconic part of Quake's user experience, symbolizing the game's responsiveness and attention to detail. While modern engines rarely use direct screen manipulation due to the ubiquity of GPUs and advanced APIs like Vulkan and DirectX, the principle of minimizing overhead remains central to rendering optimization. Quake's techniques influenced later id Tech engines and inspired countless developers to prioritize efficiency in their own projects. The legacy of this approach can be seen in modern games that balance visual fidelity with performance, ensuring smooth gameplay even on constrained hardware."

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

// draw.c -- this is the only file outside the refresh that touches the
// vid buffer

#include "quakedef.h"

typedef struct {
	vrect_t	rect;
	int		width;
	int		height;
	byte	*ptexbytes;
	int		rowbytes;
} rectdesc_t;

static rectdesc_t	r_rectdesc;

byte		*draw_chars;				// 8*8 graphic characters
qpic_t		*draw_disc;
qpic_t		*draw_backtile;

//=============================================================================
/* Support Routines */

typedef struct cachepic_s
{
	char		name[MAX_QPATH];
	cache_user_t	cache;
} cachepic_t;

#define	MAX_CACHED_PICS		128
cachepic_t	menu_cachepics[MAX_CACHED_PICS];
int			menu_numcachepics;


qpic_t	*Draw_PicFromWad (char *name)
{
	return W_GetLumpName (name);
}

/*
================
Draw_CachePic
================
*/
qpic_t	*Draw_CachePic (char *path)
{
	cachepic_t	*pic;
	int			i;
	qpic_t		*dat;
	
	for (pic=menu_cachepics, i=0 ; i<menu_numcachepics ; pic++, i++)
		if (!strcmp (path, pic->name))
			break;

	if (i == menu_numcachepics)
	{
		if (menu_numcachepics == MAX_CACHED_PICS)
			Sys_Error ("menu_numcachepics == MAX_CACHED_PICS");
		menu_numcachepics++;
		strcpy (pic->name, path);
	}

	dat = Cache_Check (&pic->cache);

	if (dat)
		return dat;

//
// load the pic from disk
//
	COM_LoadCacheFile (path, &pic->cache);
	
	dat = (qpic_t *)pic->cache.data;
	if (!dat)
	{
		Sys_Error ("Draw_CachePic: failed to load %s", path);
	}

	SwapPic (dat);

	return dat;
}



/*
===============
Draw_Init
===============
*/
void Draw_Init (void)
{
	draw_chars = W_GetLumpName ("conchars");
	draw_disc = W_GetLumpName ("disc");
	draw_backtile = W_GetLumpName ("backtile");

	r_rectdesc.width = draw_backtile->width;
	r_rectdesc.height = draw_backtile->height;
	r_rectdesc.ptexbytes = draw_backtile->data;
	r_rectdesc.rowbytes = draw_backtile->width;
}



/*
================
Draw_Character

Draws one 8*8 graphics character with 0 being transparent.
It can be clipped to the top of the screen to allow the console to be
smoothly scrolled off.
================
*/
void Draw_Character (int x, int y, int num)
{
	byte			*dest;
	byte			*source;
	unsigned short	*pusdest;
	int				drawline;	
	int				row, col;

	num &= 255;
	
	if (y <= -8)
		return;			// totally off screen

	if (y > vid.height - 8 || x < 0 || x > vid.width - 8)
		return;
	if (num < 0 || num > 255)
		return;

	row = num>>4;
	col = num&15;
	source = draw_chars + (row<<10) + (col<<3);

	if (y < 0)
	{	// clipped
		drawline = 8 + y;
		source -= 128*y;
		y = 0;
	}
	else
		drawline = 8;


	if (r_pixbytes == 1)
	{
		dest = vid.conbuffer + y*vid.conrowbytes + x;
	
		while (drawline--)
		{
			if (source[0])
				dest[0] = source[0];
			if (source[1])
				dest[1] = source[1];
			if (source[2])
				dest[2] = source[2];
			if (source[3])
				dest[3] = source[3];
			if (source[4])
				dest[4] = source[4];
			if (source[5])
				dest[5] = source[5];
			if (source[6])
				dest[6] = source[6];
			if (source[7])
				dest[7] = source[7];
			source += 128;
			dest += vid.conrowbytes;
		}
	}
	else
	{
	// FIXME: pre-expand to native format?
		pusdest = (unsigned short *)
				((byte *)vid.conbuffer + y*vid.conrowbytes + (x<<1));

		while (drawline--)
		{
			if (source[0])
				pusdest[0] = d_8to16table[source[0]];
			if (source[1])
				pusdest[1] = d_8to16table[source[1]];
			if (source[2])
				pusdest[2] = d_8to16table[source[2]];
			if (source[3])
				pusdest[3] = d_8to16table[source[3]];
			if (source[4])
				pusdest[4] = d_8to16table[source[4]];
			if (source[5])
				pusdest[5] = d_8to16table[source[5]];
			if (source[6])
				pusdest[6] = d_8to16table[source[6]];
			if (source[7])
				pusdest[7] = d_8to16table[source[7]];

			source += 128;
			pusdest += (vid.conrowbytes >> 1);
		}
	}
}

/*
================
Draw_String
================
*/
void Draw_String (int x, int y, char *str)
{
	while (*str)
	{
		Draw_Character (x, y, *str);
		str++;
		x += 8;
	}
}

/*
================
Draw_Alt_String
================
*/
void Draw_Alt_String (int x, int y, char *str)
{
	while (*str)
	{
		Draw_Character (x, y, (*str) | 0x80);
		str++;
		x += 8;
	}
}

void Draw_Pixel(int x, int y, byte color)
{
	byte			*dest;
	unsigned short	*pusdest;

	if (r_pixbytes == 1)
	{
		dest = vid.conbuffer + y*vid.conrowbytes + x;
		*dest = color;
	}
	else
	{
	// FIXME: pre-expand to native format?
		pusdest = (unsigned short *)
				((byte *)vid.conbuffer + y*vid.conrowbytes + (x<<1));
		*pusdest = d_8to16table[color];
	}
}

void Draw_Crosshair(void)
{
	int x, y;
	extern cvar_t crosshair, cl_crossx, cl_crossy, crosshaircolor;
	extern vrect_t		scr_vrect;
	byte c = (byte)crosshaircolor.value;

	if (crosshair.value == 2) {
		x = scr_vrect.x + scr_vrect.width/2 + cl_crossx.value; 
		y = scr_vrect.y + scr_vrect.height/2 + cl_crossy.value;
		Draw_Pixel(x - 1, y, c);
		Draw_Pixel(x - 3, y, c);
		Draw_Pixel(x + 1, y, c);
		Draw_Pixel(x + 3, y, c);
		Draw_Pixel(x, y - 1, c);
		Draw_Pixel(x, y - 3, c);
		Draw_Pixel(x, y + 1, c);
		Draw_Pixel(x, y + 3, c);
	} else if (crosshair.value)
		Draw_Character (
			scr_vrect.x + scr_vrect.width/2-4 + cl_crossx.value, 
			scr_vrect.y + scr_vrect.height/2-4 + cl_crossy.value, 
			'+');
}

/*
================
Draw_DebugChar

Draws a single character directly to the upper right corner of the screen.
This is for debugging lockups by drawing different chars in different parts
of the code.
================
*/
void Draw_DebugChar (char num)
{
	byte			*dest;
	byte			*source;
	int				drawline;	
	extern byte		*draw_chars;
	int				row, col;

	if (!vid.direct)
		return;		// don't have direct FB access, so no debugchars...

	drawline = 8;

	row = num>>4;
	col = num&15;
	source = draw_chars + (row<<10) + (col<<3);

	dest = vid.direct + 312;

	while (drawline--)
	{
		dest[0] = source[0];
		dest[1] = source[1];
		dest[2] = source[2];
		dest[3] = source[3];
		dest[4] = source[4];
		dest[5] = source[5];
		dest[6] = source[6];
		dest[7] = source[7];
		source += 128;
		dest += 320;
	}
}

/*
=============
Draw_Pic
=============
*/
void Draw_Pic (int x, int y, qpic_t *pic)
{
	byte			*dest, *source;
	unsigned short	*pusdest;
	int				v, u;

	if ((x < 0) ||
		(x + pic->width > vid.width) ||
		(y < 0) ||
		(y + pic->height > vid.height))
	{
		Sys_Error ("Draw_Pic: bad coordinates");
	}

	source = pic->data;

	if (r_pixbytes == 1)
	{
		dest = vid.buffer + y * vid.rowbytes + x;

		for (v=0 ; v<pic->height ; v++)
		{
			Q_memcpy (dest, source, pic->width);
			dest += vid.rowbytes;
			source += pic->width;
		}
	}
	else
	{
	// FIXME: pretranslate at load time?
		pusdest = (unsigned short *)vid.buffer + y * (vid.rowbytes >> 1) + x;

		for (v=0 ; v<pic->height ; v++)
		{
			for (u=0 ; u<pic->width ; u++)
			{
				pusdest[u] = d_8to16table[source[u]];
			}

			pusdest += vid.rowbytes >> 1;
			source += pic->width;
		}
	}
}


/*
=============
Draw_SubPic
=============
*/
void Draw_SubPic(int x, int y, qpic_t *pic, int srcx, int srcy, int width, int height)
{
	byte			*dest, *source;
	unsigned short	*pusdest;
	int				v, u;

	if ((x < 0) ||
		(x + width > vid.width) ||
		(y < 0) ||
		(y + height > vid.height))
	{
		Sys_Error ("Draw_Pic: bad coordinates");
	}

	source = pic->data + srcy * pic->width + srcx;

	if (r_pixbytes == 1)
	{
		dest = vid.buffer + y * vid.rowbytes + x;

		for (v=0 ; v<height ; v++)
		{
			Q_memcpy (dest, source, width);
			dest += vid.rowbytes;
			source += pic->width;
		}
	}
	else
	{
	// FIXME: pretranslate at load time?
		pusdest = (unsigned short *)vid.buffer + y * (vid.rowbytes >> 1) + x;

		for (v=0 ; v<height ; v++)
		{
			for (u=srcx ; u<(srcx+width) ; u++)
			{
				pusdest[u] = d_8to16table[source[u]];
			}

			pusdest += vid.rowbytes >> 1;
			source += pic->width;
		}
	}
}


/*
=============
Draw_TransPic
=============
*/
void Draw_TransPic (int x, int y, qpic_t *pic)
{
	byte	*dest, *source, tbyte;
	unsigned short	*pusdest;
	int				v, u;

	if (x < 0 || (unsigned)(x + pic->width) > vid.width || y < 0 ||
		 (unsigned)(y + pic->height) > vid.height)
	{
		Sys_Error ("Draw_TransPic: bad coordinates");
	}
		
	source = pic->data;

	if (r_pixbytes == 1)
	{
		dest = vid.buffer + y * vid.rowbytes + x;

		if (pic->width & 7)
		{	// general
			for (v=0 ; v<pic->height ; v++)
			{
				for (u=0 ; u<pic->width ; u++)
					if ( (tbyte=source[u]) != TRANSPARENT_COLOR)
						dest[u] = tbyte;
	
				dest += vid.rowbytes;
				source += pic->width;
			}
		}
		else
		{	// unwound
			for (v=0 ; v<pic->height ; v++)
			{
				for (u=0 ; u<pic->width ; u+=8)
				{
					if ( (tbyte=source[u]) != TRANSPARENT_COLOR)
						dest[u] = tbyte;
					if ( (tbyte=source[u+1]) != TRANSPARENT_COLOR)
						dest[u+1] = tbyte;
					if ( (tbyte=source[u+2]) != TRANSPARENT_COLOR)
						dest[u+2] = tbyte;
					if ( (tbyte=source[u+3]) != TRANSPARENT_COLOR)
						dest[u+3] = tbyte;
					if ( (tbyte=source[u+4]) != TRANSPARENT_COLOR)
						dest[u+4] = tbyte;
					if ( (tbyte=source[u+5]) != TRANSPARENT_COLOR)
						dest[u+5] = tbyte;
					if ( (tbyte=source[u+6]) != TRANSPARENT_COLOR)
						dest[u+6] = tbyte;
					if ( (tbyte=source[u+7]) != TRANSPARENT_COLOR)
						dest[u+7] = tbyte;
				}
				dest += vid.rowbytes;
				source += pic->width;
			}
		}
	}
	else
	{
	// FIXME: pretranslate at load time?
		pusdest = (unsigned short *)vid.buffer + y * (vid.rowbytes >> 1) + x;

		for (v=0 ; v<pic->height ; v++)
		{
			for (u=0 ; u<pic->width ; u++)
			{
				tbyte = source[u];

				if (tbyte != TRANSPARENT_COLOR)
				{
					pusdest[u] = d_8to16table[tbyte];
				}
			}

			pusdest += vid.rowbytes >> 1;
			source += pic->width;
		}
	}
}


/*
=============
Draw_TransPicTranslate
=============
*/
void Draw_TransPicTranslate (int x, int y, qpic_t *pic, byte *translation)
{
	byte	*dest, *source, tbyte;
	unsigned short	*pusdest;
	int				v, u;

	if (x < 0 || (unsigned)(x + pic->width) > vid.width || y < 0 ||
		 (unsigned)(y + pic->height) > vid.height)
	{
		Sys_Error ("Draw_TransPic: bad coordinates");
	}
		
	source = pic->data;

	if (r_pixbytes == 1)
	{
		dest = vid.buffer + y * vid.rowbytes + x;

		if (pic->width & 7)
		{	// general
			for (v=0 ; v<pic->height ; v++)
			{
				for (u=0 ; u<pic->width ; u++)
					if ( (tbyte=source[u]) != TRANSPARENT_COLOR)
						dest[u] = translation[tbyte];

				dest += vid.rowbytes;
				source += pic->width;
			}
		}
		else
		{	// unwound
			for (v=0 ; v<pic->height ; v++)
			{
				for (u=0 ; u<pic->width ; u+=8)
				{
					if ( (tbyte=source[u]) != TRANSPARENT_COLOR)
						dest[u] = translation[tbyte];
					if ( (tbyte=source[u+1]) != TRANSPARENT_COLOR)
						dest[u+1] = translation[tbyte];
					if ( (tbyte=source[u+2]) != TRANSPARENT_COLOR)
						dest[u+2] = translation[tbyte];
					if ( (tbyte=source[u+3]) != TRANSPARENT_COLOR)
						dest[u+3] = translation[tbyte];
					if ( (tbyte=source[u+4]) != TRANSPARENT_COLOR)
						dest[u+4] = translation[tbyte];
					if ( (tbyte=source[u+5]) != TRANSPARENT_COLOR)
						dest[u+5] = translation[tbyte];
					if ( (tbyte=source[u+6]) != TRANSPARENT_COLOR)
						dest[u+6] = translation[tbyte];
					if ( (tbyte=source[u+7]) != TRANSPARENT_COLOR)
						dest[u+7] = translation[tbyte];
				}
				dest += vid.rowbytes;
				source += pic->width;
			}
		}
	}
	else
	{
	// FIXME: pretranslate at load time?
		pusdest = (unsigned short *)vid.buffer + y * (vid.rowbytes >> 1) + x;

		for (v=0 ; v<pic->height ; v++)
		{
			for (u=0 ; u<pic->width ; u++)
			{
				tbyte = source[u];

				if (tbyte != TRANSPARENT_COLOR)
				{
					pusdest[u] = d_8to16table[tbyte];
				}
			}

			pusdest += vid.rowbytes >> 1;
			source += pic->width;
		}
	}
}


void Draw_CharToConback (int num, byte *dest)
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
				dest[x] = 0x60 + source[x];
		source += 128;
		dest += 320;
	}

}

/*
================
Draw_ConsoleBackground

================
*/
void Draw_ConsoleBackground (int lines)
{
	int				x, y, v;
	byte			*src, *dest;
	unsigned short	*pusdest;
	int				f, fstep;
	qpic_t			*conback;
	char			ver[100];
	static			char saveback[320*8];

	conback = Draw_CachePic ("gfx/conback.lmp");

// hack the version number directly into the pic

	//sprintf (ver, "start commands with a \\ character %4.2f", VERSION);

	if (cls.download) {
		sprintf (ver, "%4.2f", VERSION);
		dest = conback->data + 320 + 320*186 - 11 - 8*strlen(ver);
	} else {
#if defined(__linux__)
		sprintf (ver, "Linux (%4.2f) QuakeWorld %4.2f", LINUX_VERSION, VERSION);
#else
		sprintf (ver, "QuakeWorld %4.2f", VERSION);
#endif
		dest = conback->data + 320 - (strlen(ver)*8 + 11) + 320*186;
	}

	memcpy(saveback, conback->data + 320*186, 320*8);
	for (x=0 ; x<strlen(ver) ; x++)
		Draw_CharToConback (ver[x], dest+(x<<3));
	
// draw the pic
	if (r_pixbytes == 1)
	{
		dest = vid.conbuffer;

		for (y=0 ; y<lines ; y++, dest += vid.conrowbytes)
		{
			v = (vid.conheight - lines + y)*200/vid.conheight;
			src = conback->data + v*320;
			if (vid.conwidth == 320)
				memcpy (dest, src, vid.conwidth);
			else
			{
				f = 0;
				fstep = 320*0x10000/vid.conwidth;
				for (x=0 ; x<vid.conwidth ; x+=4)
				{
					dest[x] = src[f>>16];
					f += fstep;
					dest[x+1] = src[f>>16];
					f += fstep;
					dest[x+2] = src[f>>16];
					f += fstep;
					dest[x+3] = src[f>>16];
					f += fstep;
				}
			}
		}
	}
	else
	{
		pusdest = (unsigned short *)vid.conbuffer;

		for (y=0 ; y<lines ; y++, pusdest += (vid.conrowbytes >> 1))
		{
		// FIXME: pre-expand to native format?
		// FIXME: does the endian switching go away in production?
			v = (vid.conheight - lines + y)*200/vid.conheight;
			src = conback->data + v*320;
			f = 0;
			fstep = 320*0x10000/vid.conwidth;
			for (x=0 ; x<vid.conwidth ; x+=4)
			{
				pusdest[x] = d_8to16table[src[f>>16]];
				f += fstep;
				pusdest[x+1] = d_8to16table[src[f>>16]];
				f += fstep;
				pusdest[x+2] = d_8to16table[src[f>>16]];
				f += fstep;
				pusdest[x+3] = d_8to16table[src[f>>16]];
				f += fstep;
			}
		}
	}
	// put it back
	memcpy(conback->data + 320*186, saveback, 320*8);
}


/*
==============
R_DrawRect8
==============
*/
void R_DrawRect8 (vrect_t *prect, int rowbytes, byte *psrc,
	int transparent)
{
	byte	t;
	int		i, j, srcdelta, destdelta;
	byte	*pdest;

	pdest = vid.buffer + (prect->y * vid.rowbytes) + prect->x;

	srcdelta = rowbytes - prect->width;
	destdelta = vid.rowbytes - prect->width;

	if (transparent)
	{
		for (i=0 ; i<prect->height ; i++)
		{
			for (j=0 ; j<prect->width ; j++)
			{
				t = *psrc;
				if (t != TRANSPARENT_COLOR)
				{
					*pdest = t;
				}

				psrc++;
				pdest++;
			}

			psrc += srcdelta;
			pdest += destdelta;
		}
	}
	else
	{
		for (i=0 ; i<prect->height ; i++)
		{
			memcpy (pdest, psrc, prect->width);
			psrc += rowbytes;
			pdest += vid.rowbytes;
		}
	}
}


/*
==============
R_DrawRect16
==============
*/
void R_DrawRect16 (vrect_t *prect, int rowbytes, byte *psrc,
	int transparent)
{
	byte			t;
	int				i, j, srcdelta, destdelta;
	unsigned short	*pdest;

// FIXME: would it be better to pre-expand native-format versions?

	pdest = (unsigned short *)vid.buffer +
			(prect->y * (vid.rowbytes >> 1)) + prect->x;

	srcdelta = rowbytes - prect->width;
	destdelta = (vid.rowbytes >> 1) - prect->width;

	if (transparent)
	{
		for (i=0 ; i<prect->height ; i++)
		{
			for (j=0 ; j<prect->width ; j++)
			{
				t = *psrc;
				if (t != TRANSPARENT_COLOR)
				{
					*pdest = d_8to16table[t];
				}

				psrc++;
				pdest++;
			}

			psrc += srcdelta;
			pdest += destdelta;
		}
	}
	else
	{
		for (i=0 ; i<prect->height ; i++)
		{
			for (j=0 ; j<prect->width ; j++)
			{
				*pdest = d_8to16table[*psrc];
				psrc++;
				pdest++;
			}

			psrc += srcdelta;
			pdest += destdelta;
		}
	}
}


/*
=============
Draw_TileClear

This repeats a 64*64 tile graphic to fill the screen around a sized down
refresh window.
=============
*/
void Draw_TileClear (int x, int y, int w, int h)
{
	int				width, height, tileoffsetx, tileoffsety;
	byte			*psrc;
	vrect_t			vr;

	r_rectdesc.rect.x = x;
	r_rectdesc.rect.y = y;
	r_rectdesc.rect.width = w;
	r_rectdesc.rect.height = h;

	vr.y = r_rectdesc.rect.y;
	height = r_rectdesc.rect.height;

	tileoffsety = vr.y % r_rectdesc.height;

	while (height > 0)
	{
		vr.x = r_rectdesc.rect.x;
		width = r_rectdesc.rect.width;

		if (tileoffsety != 0)
			vr.height = r_rectdesc.height - tileoffsety;
		else
			vr.height = r_rectdesc.height;

		if (vr.height > height)
			vr.height = height;

		tileoffsetx = vr.x % r_rectdesc.width;

		while (width > 0)
		{
			if (tileoffsetx != 0)
				vr.width = r_rectdesc.width - tileoffsetx;
			else
				vr.width = r_rectdesc.width;

			if (vr.width > width)
				vr.width = width;

			psrc = r_rectdesc.ptexbytes +
					(tileoffsety * r_rectdesc.rowbytes) + tileoffsetx;

			if (r_pixbytes == 1)
			{
				R_DrawRect8 (&vr, r_rectdesc.rowbytes, psrc, 0);
			}
			else
			{
				R_DrawRect16 (&vr, r_rectdesc.rowbytes, psrc, 0);
			}

			vr.x += vr.width;
			width -= vr.width;
			tileoffsetx = 0;	// only the left tile can be left-clipped
		}

		vr.y += vr.height;
		height -= vr.height;
		tileoffsety = 0;		// only the top tile can be top-clipped
	}
}


/*
=============
Draw_Fill

Fills a box of pixels with a single color
=============
*/
void Draw_Fill (int x, int y, int w, int h, int c)
{
	byte			*dest;
	unsigned short	*pusdest;
	unsigned		uc;
	int				u, v;

	if (x < 0 || x + w > vid.width ||
		y < 0 || y + h > vid.height) {
		Con_Printf("Bad Draw_Fill(%d, %d, %d, %d, %c)\n",
			x, y, w, h, c);
		return;
	}

	if (r_pixbytes == 1)
	{
		dest = vid.buffer + y*vid.rowbytes + x;
		for (v=0 ; v<h ; v++, dest += vid.rowbytes)
			for (u=0 ; u<w ; u++)
				dest[u] = c;
	}
	else
	{
		uc = d_8to16table[c];

		pusdest = (unsigned short *)vid.buffer + y * (vid.rowbytes >> 1) + x;
		for (v=0 ; v<h ; v++, pusdest += (vid.rowbytes >> 1))
			for (u=0 ; u<w ; u++)
				pusdest[u] = uc;
	}
}
//=============================================================================

/*
================
Draw_FadeScreen

================
*/
void Draw_FadeScreen (void)
{
	int			x,y;
	byte		*pbuf;

	VID_UnlockBuffer ();
	S_ExtraUpdate ();
	VID_LockBuffer ();

	for (y=0 ; y<vid.height ; y++)
	{
		int	t;

		pbuf = (byte *)(vid.buffer + vid.rowbytes*y);
		t = (y & 1) << 1;

		for (x=0 ; x<vid.width ; x++)
		{
			if ((x & 3) != t)
				pbuf[x] = 0;
		}
	}

	VID_UnlockBuffer ();
	S_ExtraUpdate ();
	VID_LockBuffer ();
}

//=============================================================================

/*
================
Draw_BeginDisc

Draws the little blue disc in the corner of the screen.
Call before beginning any disc IO.
================
*/
void Draw_BeginDisc (void)
{

	D_BeginDirectRect (vid.width - 24, 0, draw_disc->data, 24, 24);
}


/*
================
Draw_EndDisc

Erases the disc icon.
Call after completing any disc IO
================
*/
void Draw_EndDisc (void)
{

	D_EndDirectRect (vid.width - 24, 0, 24, 24);
}
```
