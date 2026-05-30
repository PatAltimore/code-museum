---
title: "r_sky.c"
program: "Quake"
program_slug: "quake"
file_path: "QW/client/r_sky.c"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/Quake/blob/master/QW/client/r_sky.c"
year: 1996
author: "John Carmack, Michael Abrash, John Cash"
slug: "r-sky-c"
order: 35
description: "This file implements sky rendering for Quake, showcasing innovative techniques to simulate dynamic skies within the constraints of 1996 hardware."

summary:
  - point: "Dynamic sky rendering optimized for limited memory and CPU power"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Use of masking and tiling to create seamless sky textures"
    link: "https://en.wikipedia.org/wiki/Texture_mapping"
    link_label: "Texture Mapping"
  - point: "Introduced modular routines for generating and updating sky tiles"
    link: "https://en.wikipedia.org/wiki/Graphics_pipeline"
    link_label: "Graphics Pipeline"

enhancements:
  - id: "sky-texture-initialization"
    line_start: 49
    line_end: 89
    title: "How Quake Packed Skies into 256 Bytes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Texture_mapping"
    image_url: ""
    image_caption: ""
    content: "The `R_InitSky` function initializes sky textures by packing them into a compact format. The sky texture is split into two parts: the left side contains the main sky texture, while the right side holds a masked overlay. This packing ensures compatibility with low-level rendering routines that require 256-byte scan widths. The function also creates two auxiliary arrays, `bottomsky` and `bottommask`, which store masked and unmasked versions of the sky texture for dynamic rendering. In 1996, memory constraints were a major challenge, especially for real-time 3D games. John Carmack and his team at id Software designed this system to maximize efficiency while maintaining visual fidelity. This approach influenced later games by demonstrating how to handle large textures within tight memory budgets, paving the way for advanced texture mapping techniques in modern engines like Unreal and Unity."
  - id: "dynamic-sky-generation"
    line_start: 92
    line_end: 153
    title: "The Algorithm Behind Quake's Moving Skies"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_pipeline"
    image_url: ""
    image_caption: ""
    content: "The `R_MakeSky` function dynamically generates the sky texture based on the current game time (`skytime`) and speed parameters (`skyspeed`). By shifting the texture coordinates, it creates the illusion of a moving sky. The function uses bitwise operations to combine the `bottomsky` and `bottommask` arrays, ensuring efficient rendering on x86 processors. This technique reflects the ingenuity required to simulate complex visual effects on hardware with limited computational power. The modular design of this routine allowed developers to easily adapt it for different sky effects, influencing future game engines that prioritized modularity and reusability. Games like Half-Life and Counter-Strike inherited similar techniques for environmental rendering."
  - id: "sky-tile-generation"
    line_start: 156
    line_end: 212
    title: "Quake's Modular Sky Tile Generator"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_pipeline"
    image_url: ""
    image_caption: ""
    content: "The `R_GenSkyTile` function generates individual tiles for the sky texture, enabling seamless tiling across the game environment. It calculates offsets based on `skytime` and `skyspeed`, then combines the `bottomsky` and `bottommask` arrays using bitwise operations. This modular approach allowed developers to render dynamic skies efficiently, even on hardware with limited memory and processing power. The function's reliance on unaligned memory access reflects the team's deep understanding of x86 architecture, optimizing performance for the era's processors. This technique influenced later engines that sought to balance visual complexity with computational efficiency, such as the Source engine used in Portal and Team Fortress 2."
  - id: "16-bit-sky-tile-generation"
    line_start: 215
    line_end: 253
    title: "Why Quake Rendered Skies in 16 Bits"
    wikipedia_url: "https://en.wikipedia.org/wiki/Color_depth"
    image_url: ""
    image_caption: ""
    content: "The `R_GenSkyTile16` function adapts the sky tile generation process for 16-bit color depth, converting 8-bit textures into 16-bit using a lookup table (`d_8to16table`). This was crucial for supporting higher color fidelity on systems capable of 16-bit rendering, a feature becoming more common in 1996. The function uses similar logic to `R_GenSkyTile` but adjusts for the increased memory requirements and precision of 16-bit color. By providing support for multiple color depths, id Software ensured Quake could run optimally on a wide range of hardware, from high-end gaming PCs to more modest setups. This flexibility influenced future engines, which prioritized compatibility across diverse hardware configurations."
  - id: "sky-frame-calculation"
    line_start: 256
    line_end: 278
    title: "The Math Behind Quake's Sky Animation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Greatest_common_divisor"
    image_url: ""
    image_caption: ""
    content: "The `R_SetSkyFrame` function calculates the current frame of the sky animation based on the game's elapsed time (`cl.time`) and the greatest common divisor of the sky speeds (`iskyspeed` and `iskyspeed2`). This ensures smooth looping and synchronization of the sky's movement. The use of modular arithmetic to calculate `skytime` reflects the team's mathematical precision and focus on performance. By precomputing values like `skytime`, the function minimizes runtime calculations, a critical optimization for real-time rendering on 1996 hardware. This approach influenced later games that incorporated dynamic environmental effects, such as The Elder Scrolls series, which used similar techniques to simulate day-night cycles."

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
// r_sky.c

#include "quakedef.h"
#include "r_local.h"
#include "d_local.h"


int		iskyspeed = 8;
int		iskyspeed2 = 2;
float	skyspeed, skyspeed2;

float		skytime;

byte		*r_skysource;

int r_skymade;
int r_skydirect;		// not used?


// TODO: clean up these routines

byte	bottomsky[128*131];
byte	bottommask[128*131];
byte	newsky[128*256];	// newsky and topsky both pack in here, 128 bytes
							//  of newsky on the left of each scan, 128 bytes
							//  of topsky on the right, because the low-level
							//  drawers need 256-byte scan widths


/*
=============
R_InitSky

A sky texture is 256*128, with the right side being a masked overlay
==============
*/
void R_InitSky (texture_t *mt)
{
	int			i, j;
	byte		*src;

	src = (byte *)mt + mt->offsets[0];

	for (i=0 ; i<128 ; i++)
	{
		for (j=0 ; j<128 ; j++)
		{
			newsky[(i*256) + j + 128] = src[i*256 + j + 128];
		}
	}

	for (i=0 ; i<128 ; i++)
	{
		for (j=0 ; j<131 ; j++)
		{
			if (src[i*256 + (j & 0x7F)])
			{
				bottomsky[(i*131) + j] = src[i*256 + (j & 0x7F)];
				bottommask[(i*131) + j] = 0;
			}
			else
			{
				bottomsky[(i*131) + j] = 0;
				bottommask[(i*131) + j] = 0xff;
			}
		}
	}
	
	r_skysource = newsky;
}


/*
=================
R_MakeSky
=================
*/
void R_MakeSky (void)
{
	int			x, y;
	int			ofs, baseofs;
	int			xshift, yshift;
	unsigned	*pnewsky;
	static int	xlast = -1, ylast = -1;

	xshift = skytime*skyspeed;
	yshift = skytime*skyspeed;

	if ((xshift == xlast) && (yshift == ylast))
		return;

	xlast = xshift;
	ylast = yshift;
	
	pnewsky = (unsigned *)&newsky[0];

	for (y=0 ; y<SKYSIZE ; y++)
	{
		baseofs = ((y+yshift) & SKYMASK) * 131;

// FIXME: clean this up
#if UNALIGNED_OK

		for (x=0 ; x<SKYSIZE ; x += 4)
		{
			ofs = baseofs + ((x+xshift) & SKYMASK);

		// PORT: unaligned dword access to bottommask and bottomsky

			*pnewsky = (*(pnewsky + (128 / sizeof (unsigned))) &
						*(unsigned *)&bottommask[ofs]) |
						*(unsigned *)&bottomsky[ofs];
			pnewsky++;
		}

#else

		for (x=0 ; x<SKYSIZE ; x++)
		{
			ofs = baseofs + ((x+xshift) & SKYMASK);

			*(byte *)pnewsky = (*((byte *)pnewsky + 128) &
						*(byte *)&bottommask[ofs]) |
						*(byte *)&bottomsky[ofs];
			pnewsky = (unsigned *)((byte *)pnewsky + 1);
		}

#endif

		pnewsky += 128 / sizeof (unsigned);
	}

	r_skymade = 1;
}


/*
=================
R_GenSkyTile
=================
*/
void R_GenSkyTile (void *pdest)
{
	int			x, y;
	int			ofs, baseofs;
	int			xshift, yshift;
	unsigned	*pnewsky;
	unsigned	*pd;

	xshift = skytime*skyspeed;
	yshift = skytime*skyspeed;

	pnewsky = (unsigned *)&newsky[0];
	pd = (unsigned *)pdest;

	for (y=0 ; y<SKYSIZE ; y++)
	{
		baseofs = ((y+yshift) & SKYMASK) * 131;

// FIXME: clean this up
#if UNALIGNED_OK

		for (x=0 ; x<SKYSIZE ; x += 4)
		{
			ofs = baseofs + ((x+xshift) & SKYMASK);

		// PORT: unaligned dword access to bottommask and bottomsky

			*pd = (*(pnewsky + (128 / sizeof (unsigned))) &
				   *(unsigned *)&bottommask[ofs]) |
				   *(unsigned *)&bottomsky[ofs];
			pnewsky++;
			pd++;
		}

#else

		for (x=0 ; x<SKYSIZE ; x++)
		{
			ofs = baseofs + ((x+xshift) & SKYMASK);

			*(byte *)pd = (*((byte *)pnewsky + 128) &
						*(byte *)&bottommask[ofs]) |
						*(byte *)&bottomsky[ofs];
			pnewsky = (unsigned *)((byte *)pnewsky + 1);
			pd = (unsigned *)((byte *)pd + 1);
		}

#endif

		pnewsky += 128 / sizeof (unsigned);
	}
}


/*
=================
R_GenSkyTile16
=================
*/
void R_GenSkyTile16 (void *pdest)
{
	int				x, y;
	int				ofs, baseofs;
	int				xshift, yshift;
	byte			*pnewsky;
	unsigned short	*pd;

	xshift = skytime * skyspeed;
	yshift = skytime * skyspeed;

	pnewsky = (byte *)&newsky[0];
	pd = (unsigned short *)pdest;

	for (y=0 ; y<SKYSIZE ; y++)
	{
		baseofs = ((y+yshift) & SKYMASK) * 131;

// FIXME: clean this up
// FIXME: do faster unaligned version?
		for (x=0 ; x<SKYSIZE ; x++)
		{
			ofs = baseofs + ((x+xshift) & SKYMASK);

			*pd = d_8to16table[(*(pnewsky + 128) &
					*(byte *)&bottommask[ofs]) |
					*(byte *)&bottomsky[ofs]];
			pnewsky++;
			pd++;
		}

		pnewsky += TILE_SIZE;
	}
}


/*
=============
R_SetSkyFrame
==============
*/
void R_SetSkyFrame (void)
{
	int		g, s1, s2;
	float	temp;

	skyspeed = iskyspeed;
	skyspeed2 = iskyspeed2;

	g = GreatestCommonDivisor (iskyspeed, iskyspeed2);
	s1 = iskyspeed / g;
	s2 = iskyspeed2 / g;
	temp = SKYSIZE * s1 * s2;

	skytime = cl.time - ((int)(cl.time / temp) * temp);
	

	r_skymade = 0;
}


```