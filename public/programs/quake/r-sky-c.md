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
description: "This file handles sky rendering in Quake, showcasing innovative techniques for creating dynamic and immersive 3D environments under tight hardware constraints."

summary:
  - point: "Dynamic sky rendering optimized for 1990s hardware"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Efficient use of memory with packed textures"
    link: "https://en.wikipedia.org/wiki/Texture_mapping"
    link_label: "Texture Mapping"
  - point: "Unaligned memory access for performance gains"
    link: "https://en.wikipedia.org/wiki/Memory_alignment"
    link_label: "Memory Alignment"

enhancements:
  - id: "sky-texture-initialization"
    line_start: 56
    line_end: 93
    title: "Packing textures for efficient sky rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Texture_mapping"
    image_url: ""
    image_caption: ""
    content: "This section initializes the sky texture, a critical element of Quake's visual atmosphere. The sky texture is packed into memory with the right side serving as a masked overlay, allowing for dynamic effects. The code carefully organizes data into arrays (`newsky`, `bottomsky`, and `bottommask`) to optimize rendering performance on 1990s hardware, where memory and processing power were severely limited. The decision to use bitwise operations (`&` and `|`) reflects the need for speed and efficiency in manipulating pixel data. In 1996, John Carmack and the team at id Software were pioneering techniques to push the boundaries of what was possible in real-time 3D graphics. This initialization routine laid the groundwork for Quake's iconic skies, which contributed to the game's immersive realism. The approach of packing textures and using masks influenced later games, as developers sought to balance visual fidelity with hardware constraints."
  - id: "dynamic-sky-shifting"
    line_start: 97
    line_end: 157
    title: "Creating dynamic sky movement"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `R_MakeSky` function introduces dynamic sky movement, a subtle yet impactful feature that enhances the game's realism. By calculating shifts (`xshift` and `yshift`) based on the game's time variable (`skytime`), the sky texture appears to move, simulating natural motion. This was a novel technique in 1996, as most games relied on static backgrounds. The code includes conditional checks to avoid unnecessary recalculations, a hallmark of optimization for limited CPU cycles. The use of unaligned memory access (`UNALIGNED_OK`) demonstrates id Software's willingness to exploit hardware quirks for performance gains. At the time, such techniques were cutting-edge, reflecting the team's deep understanding of x86 architecture. Dynamic skies became a standard feature in later games, but Quake's implementation remains a testament to the ingenuity required to achieve groundbreaking effects within tight constraints."
  - id: "sky-tile-generation"
    line_start: 161
    line_end: 216
    title: "Generating sky tiles for seamless rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tile-based_rendering"
    image_url: ""
    image_caption: ""
    content: "The `R_GenSkyTile` function generates individual tiles for the sky texture, ensuring seamless rendering across the game's 3D environment. By iterating over the texture data and applying bitwise operations with masks (`bottommask`) and overlays (`bottomsky`), the code constructs tiles that fit perfectly into the larger sky. This modular approach was essential for handling the limited memory and processing power of mid-1990s PCs. The function includes preprocessor directives (`#if UNALIGNED_OK`) to optimize performance on hardware that supports unaligned memory access, showcasing id Software's commitment to squeezing every ounce of efficiency from the x86 architecture. Tile-based rendering was not unique to Quake, but the game's implementation pushed the technique to new heights, influencing future engines and games. The modularity of this approach also made it easier to adapt the code for different platforms, contributing to Quake's widespread impact."
  - id: "16-bit-sky-tile-generation"
    line_start: 217
    line_end: 257
    title: "Adapting sky tiles for 16-bit color"
    wikipedia_url: "https://en.wikipedia.org/wiki/Color_depth"
    image_url: ""
    image_caption: ""
    content: "The `R_GenSkyTile16` function adapts sky tile generation for 16-bit color depth, a feature that catered to higher-end graphics hardware of the era. By converting 8-bit color data into 16-bit using a lookup table (`d_8to16table`), the code achieves richer visual detail while maintaining performance. This function reflects the transition from 8-bit to 16-bit graphics that was occurring in the mid-1990s, as gamers demanded more realistic visuals. The use of a lookup table is a clever optimization, allowing for fast color conversion without complex calculations. This section highlights id Software's foresight in designing Quake to scale across different hardware configurations, ensuring the game could run on a wide range of systems. The move to 16-bit color became standard in later games, but Quake's implementation was among the first to demonstrate its potential in real-time 3D rendering."
  - id: "sky-frame-calculation"
    line_start: 258
    line_end: 278
    title: "Calculating sky frame timing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Frame_rate"
    image_url: ""
    image_caption: ""
    content: "The `R_SetSkyFrame` function calculates the timing for sky frame updates, ensuring smooth transitions and synchronization with the game's overall timing. By determining the greatest common divisor (`GreatestCommonDivisor`) of sky speeds and using it to calculate a repeating cycle (`skytime`), the code creates a predictable yet dynamic sky animation. This mathematical approach reflects the precision required to achieve visual effects that feel natural to players. In 1996, real-time animation was still a developing field, and id Software's use of mathematical techniques to control timing was ahead of its time. The function also resets flags (`r_skymade`) to signal when updates are needed, a detail that underscores the team's focus on efficiency. Sky frame calculations like these became a standard feature in later engines, but Quake's implementation remains a foundational example of how to blend mathematics with artistry in game design."

---

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

