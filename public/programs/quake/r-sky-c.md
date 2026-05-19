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
description: "This file implements dynamic sky rendering for Quake, showcasing innovative techniques for real-time graphics in 1996."

summary:
  - point: "Dynamic sky rendering using texture manipulation"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Optimized memory layout for constrained hardware"
    link: "https://en.wikipedia.org/wiki/Texture_mapping"
    link_label: "Texture Mapping"
  - point: "Unaligned memory access for performance gains"
    link: "https://en.wikipedia.org/wiki/Memory_alignment"
    link_label: "Memory Alignment"
  - point: "Sky animation synchronized with game time"
    link: "https://en.wikipedia.org/wiki/Game_engine"
    link_label: "Game Engine"
  - point: "Released under GPL, influencing open-source development"
    link: "https://en.wikipedia.org/wiki/GNU_General_Public_License"
    link_label: "GPL"

enhancements:
  - id: "dynamic-sky-texture-initialization"
    line_start: 55
    line_end: 89
    title: "Dynamic Sky Texture Initialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Texture_mapping"
    image_url: ""
    image_caption: ""
    content: "This section initializes the sky texture used in Quake's rendering pipeline. The function `R_InitSky` processes a 256x128 texture, splitting it into two parts: the main sky texture and a masked overlay. The code carefully packs these textures into memory to optimize for the hardware constraints of the era, where memory was limited and alignment was critical for performance. The use of bitwise operations to create the mask and overlay demonstrates the team's deep understanding of low-level graphics programming. In 1996, real-time 3D rendering was still in its infancy, and games like Quake pushed the boundaries of what was possible. John Carmack and Michael Abrash, both renowned for their expertise in optimization and graphics programming, designed this system to ensure smooth performance on x86 processors with limited computational power. The decision to use unaligned memory access, flagged in comments, reflects the trade-offs developers faced between speed and portability. The approach laid the groundwork for dynamic environmental effects in games, influencing later titles like Unreal and Half-Life. The modularity of the sky rendering system also made it easier for modders to create custom skies, contributing to Quake's vibrant modding community. Techniques like these became standard in game engines, evolving into more sophisticated systems for procedural sky generation seen in modern engines like Unity and Unreal Engine."
  - id: "sky-animation-with-time-sync"
    line_start: 96
    line_end: 153
    title: "Sky Animation with Time Synchronization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_engine"
    image_url: ""
    image_caption: ""
    content: "The `R_MakeSky` function animates the sky texture by shifting it based on game time (`skytime`) and predefined speeds (`skyspeed` and `skyspeed2`). This creates the illusion of a moving sky, adding dynamism to the game environment. The function uses modular arithmetic to wrap texture coordinates, ensuring seamless looping without visual artifacts. In the mid-1990s, real-time animation of environmental elements was a novel feature in games. Quake's developers leveraged their expertise to implement this efficiently, ensuring it ran smoothly on the hardware of the time. The comments in the code highlight areas for potential cleanup, indicating the iterative nature of development under tight deadlines. This technique influenced future games by demonstrating how environmental elements could enhance immersion. The idea of time-synchronized animations became a staple in game design, appearing in titles like The Elder Scrolls series and open-world games where dynamic skies are integral to the experience. It also inspired advancements in procedural generation, where similar principles are used to create complex, evolving environments."
  - id: "tile-based-sky-rendering"
    line_start: 160
    line_end: 212
    title: "Tile-Based Sky Rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tile-based_rendering"
    image_url: ""
    image_caption: ""
    content: "The `R_GenSkyTile` function generates a tile of the sky texture for rendering. It combines the base sky texture (`bottomsky`) and a mask (`bottommask`) using bitwise operations, creating a composite image. The function is optimized for performance, with conditional compilation (`UNALIGNED_OK`) allowing faster unaligned memory access on compatible hardware. Tile-based rendering was a practical solution for constrained hardware in the 1990s. By processing smaller sections of the texture, developers could reduce memory usage and improve cache efficiency. This approach reflects the team's commitment to squeezing maximum performance from the available hardware, a hallmark of id Software's programming philosophy. The technique influenced later rendering systems, particularly in mobile and embedded devices where tile-based rendering became standard. It also demonstrated the importance of modular design, allowing developers to adapt and extend the system for different platforms. Modern engines like Unity and Unreal continue to use similar principles, albeit with more advanced algorithms and hardware support."
  - id: "16-bit-sky-tile-generation"
    line_start: 217
    line_end: 253
    title: "16-Bit Sky Tile Generation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Color_depth"
    image_url: ""
    image_caption: ""
    content: "The `R_GenSkyTile16` function adapts the sky tile generation process for 16-bit color depth. It uses a lookup table (`d_8to16table`) to convert 8-bit color values into 16-bit format, ensuring compatibility with higher color fidelity. This reflects the transition from 8-bit to 16-bit graphics, a significant step in the evolution of gaming visuals. In the mid-1990s, 16-bit color depth was becoming the standard for PC gaming, offering a wider range of colors and smoother gradients. Quake's support for this format demonstrated id Software's forward-thinking approach, ensuring the game could take advantage of emerging hardware capabilities. The comments hint at potential optimizations, showing the team's focus on iterative improvement. This adaptation influenced the industry's move toward higher color depths, paving the way for 32-bit and HDR rendering in modern games. It also highlighted the importance of backward compatibility, as developers had to balance support for older hardware with advancements in technology. Techniques like these contributed to the seamless visual experiences we expect from contemporary games."
  - id: "sky-frame-calculation"
    line_start: 258
    line_end: 278
    title: "Sky Frame Calculation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Greatest_common_divisor"
    image_url: ""
    image_caption: ""
    content: "The `R_SetSkyFrame` function calculates the current sky frame based on game time and sky speeds. It uses the greatest common divisor (GCD) to synchronize the animation of multiple sky layers, ensuring smooth transitions and avoiding visual glitches. The calculated `skytime` determines the position of the sky texture, aligning it with the game's internal clock. This mathematical approach reflects the team's ingenuity in solving synchronization challenges. By leveraging the GCD, they created a system that could handle varying speeds without losing coherence. Such techniques were crucial in an era when computational resources were limited, and every optimization mattered. The concept of synchronized animations influenced game engines and tools, enabling developers to create complex, layered effects with minimal overhead. It also demonstrated the value of mathematical rigor in game design, inspiring future developers to explore similar techniques. Modern games like Minecraft and Stardew Valley use time-based systems to create immersive environments, building on ideas pioneered in Quake."

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

