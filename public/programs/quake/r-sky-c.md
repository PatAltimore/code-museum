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
description: "This file implements sky rendering for Quake, showcasing innovative techniques for texture manipulation and optimization under hardware constraints of the mid-1990s."

summary:
  - point: "Sky textures are divided into masked overlays for efficient rendering"
    link: "https://en.wikipedia.org/wiki/Texture_mapping"
    link_label: "Texture Mapping"
  - point: "Unaligned memory access optimizations are used for performance"
    link: "https://en.wikipedia.org/wiki/Memory_alignment"
    link_label: "Memory Alignment"
  - point: "Dynamic sky movement is calculated based on time and speed variables"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Sky rendering routines include fallback paths for hardware compatibility"
    link: "https://en.wikipedia.org/wiki/Backward_compatibility"
    link_label: "Backward Compatibility"
  - point: "The file demonstrates modular design for sky rendering, influencing later game engines"
    link: "https://en.wikipedia.org/wiki/Game_engine"
    link_label: "Game Engine"

enhancements:
  - id: "sky-texture-initialization"
    line_start: 49
    line_end: 89
    title: "How Quake Packed Sky Textures into Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Texture_mapping"
    image_url: ""
    image_caption: ""
    content: "This section initializes the sky texture for Quake, dividing it into two parts: a main texture and a masked overlay. The texture is packed into memory in a way that aligns with the hardware's requirement for 256-byte scan widths. This clever packing ensures efficient access during rendering, minimizing memory fragmentation and maximizing performance. At the time, memory was a scarce resource, and optimizing its use was critical for achieving smooth gameplay. John Carmack and Michael Abrash, known for their expertise in low-level optimization, likely devised this approach to balance visual fidelity with hardware constraints. The technique of dividing textures into overlays influenced later game engines, such as Unreal Engine, which adopted similar methods for texture management."
  - id: "dynamic-sky-generation"
    line_start: 92
    line_end: 153
    title: "The Algorithm Behind Quake's Moving Sky"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `R_MakeSky` function dynamically generates the sky texture based on time and speed variables (`skytime`, `skyspeed`). By shifting texture coordinates, it creates the illusion of a moving sky. This was a groundbreaking feature in 1996, as dynamic environments were rare in games of the era. The function includes optimizations for unaligned memory access, a technique that was crucial for performance on x86 processors. The fallback paths ensure compatibility with systems lacking support for unaligned access. This approach laid the groundwork for dynamic environmental effects in later games, influencing titles like Half-Life and the Source engine."
  - id: "sky-tile-generation"
    line_start: 156
    line_end: 212
    title: "How Quake Generated Sky Tiles on the Fly"
    wikipedia_url: "https://en.wikipedia.org/wiki/Procedural_generation"
    image_url: ""
    image_caption: ""
    content: "The `R_GenSkyTile` function generates individual sky tiles dynamically, using bitwise operations to combine texture data from the `bottomsky` and `bottommask` arrays. This procedural generation technique allows Quake to create visually complex skies without storing every frame as a static texture, saving memory and enabling real-time changes. Procedural generation was a forward-thinking approach in 1996, predating its widespread use in games like Minecraft. The function's reliance on unaligned memory access highlights the team's deep understanding of hardware optimization. This technique influenced later engines that relied on procedural generation for dynamic environments, such as Unity and Unreal Engine."
  - id: "16-bit-sky-tile-generation"
    line_start: 215
    line_end: 253
    title: "16-Bit Sky Tiles and Sky Frame Synchronization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Color_depth"
    image_url: ""
    image_caption: ""
    content: "This section covers R_GenSkyTile16 and R_SetSkyFrame. R_GenSkyTile16 adapts the 8-bit procedural tile generation to 16-bit color by routing each pixel through the d_8to16table lookup, maintaining the same bitwise blend of bottomsky and bottommask while producing the wider output needed by higher-color-depth display modes that were beginning to appear on consumer hardware in 1996. R_SetSkyFrame advances the sky animation by computing the current scroll offset from the game clock and the skyspeed variable, using a GCD-based reduction to keep the offset values from growing without bound over a long session. Together they ensure the sky scrolls smoothly and looks correct at either color depth — a small but visible demonstration of id Software's habit of designing for the near-future hardware while keeping the code mathematically precise."

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
