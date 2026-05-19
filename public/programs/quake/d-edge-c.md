---
title: "d_edge.c"
program: "Quake"
program_slug: "quake"
file_path: "QW/client/d_edge.c"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/Quake/blob/master/QW/client/d_edge.c"
year: 1996
author: "John Carmack, Michael Abrash, John Cash"
slug: "d-edge-c"
order: 26
description: "This file contains critical rendering routines for Quake's groundbreaking 3D graphics engine, showcasing optimization techniques for 1990s hardware."

summary:
  - point: "Mipmapping for texture scaling optimization"
    link: "https://en.wikipedia.org/wiki/Mipmap"
    link_label: "Mipmap"
  - point: "Span-based rendering for efficient polygon drawing"
    link: "https://en.wikipedia.org/wiki/Scanline_rendering"
    link_label: "Scanline rendering"
  - point: "Gradient calculations for texture mapping precision"
    link: "https://en.wikipedia.org/wiki/Texture_mapping"
    link_label: "Texture mapping"
  - point: "Handling submodels and frustum transformations"
    link: "https://en.wikipedia.org/wiki/Frustum"
    link_label: "Frustum"
  - point: "Optimized memory access patterns for x86 processors"
    link: "https://en.wikipedia.org/wiki/Intel_80486"
    link_label: "Intel 80486"

enhancements:
  - id: "foundation-initial-setup"
    line_start: 17
    line_end: 23
    title: "Foundation: Initial Setup Variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "This section initializes key variables used throughout the rendering pipeline, including screen width and mip level. These variables are foundational to the rendering process, enabling efficient scaling and memory management. In 1996, developers were acutely aware of hardware limitations, such as the Intel 80486 processor and limited RAM, and structured their code to minimize computational overhead. John Carmack, known for his meticulous optimization, ensured that every variable served a purpose, avoiding unnecessary complexity. These initial setups reflect the careful planning required to achieve real-time 3D rendering on consumer hardware of the era."
  - id: "vec3t-transformed-modelorg"
    line_start: 36
    line_end: 39
    title: "vec3_t: Transforming Model Origin"
    wikipedia_url: "https://en.wikipedia.org/wiki/Vector_(mathematics_and_physics)"
    image_url: ""
    image_caption: ""
    content: "The `vec3_t` structure represents a three-dimensional vector, a cornerstone of 3D graphics. Here, it is used to store the transformed model origin, a critical step in aligning objects within the game world. In the mid-1990s, vector mathematics was becoming increasingly important in game development as engines moved from 2D to true 3D environments. This transformation process highlights the mathematical rigor behind Quake's rendering engine, which had to account for player movement, object rotation, and perspective projection—all in real time. The use of vectors was inspired by advancements in computer graphics research, and their implementation in Quake set a standard for future engines."
  - id: "d-drawpoly-placeholder"
    line_start: 40
    line_end: 43
    title: "D_DrawPoly: A Placeholder for Polygons"
    wikipedia_url: "https://en.wikipedia.org/wiki/Polygon_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `D_DrawPoly` function is a placeholder, indicating that the rendering driver processes spans rather than polygons directly. This decision reflects a deliberate optimization strategy. Span-based rendering breaks polygons into horizontal lines, simplifying the process of filling pixels on the screen. In 1996, this approach was critical for achieving high performance on hardware with limited processing power. By focusing on spans, the Quake engine avoided the computational overhead of handling entire polygons, a technique borrowed from earlier scanline rendering methods. This placeholder hints at the modularity of the engine, allowing for future enhancements or alternative rendering methods."
  - id: "d-miplevelforscale"
    line_start: 52
    line_end: 54
    title: "D_MipLevelForScale: Choosing Texture Detail"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mipmap"
    image_url: ""
    image_caption: ""
    content: "This function determines the appropriate mipmap level based on the scale of a texture. Mipmapping was a revolutionary technique in the 1990s, reducing aliasing and improving performance by using lower-resolution textures for distant objects. The logic here ensures that textures are scaled efficiently, balancing visual fidelity with rendering speed. The concept of mipmaps originated in academic research but was popularized in gaming by titles like Quake. By dynamically selecting mip levels, the engine minimized memory bandwidth usage—a critical consideration for hardware like the Intel Pentium processors of the era. This technique became a staple in 3D graphics, influencing countless engines and applications."
  - id: "d-drawsolidsurface"
    line_start: 77
    line_end: 81
    title: "D_DrawSolidSurface: Filling Polygons with Color"
    wikipedia_url: "https://en.wikipedia.org/wiki/Scanline_rendering"
    image_url: ""
    image_caption: ""
    content: "The `D_DrawSolidSurface` function fills polygons with a solid color, using span-based rendering to efficiently process each horizontal line. This method was essential for achieving real-time performance on mid-1990s hardware. The function includes optimizations like grouping memory writes for better cache utilization, a technique inspired by low-level programming practices common in assembly language. The emphasis on spans reflects the engine's focus on speed and simplicity, avoiding the complexity of more advanced shading techniques. This approach laid the groundwork for later innovations in rendering, including texture mapping and lighting models, which would build on the solid foundation established here."
  - id: "d-calcgradients"
    line_start: 120
    line_end: 122
    title: "D_CalcGradients: Precision in Texture Mapping"
    wikipedia_url: "https://en.wikipedia.org/wiki/Texture_mapping"
    image_url: ""
    image_caption: ""
    content: "This function calculates gradients for texture mapping, ensuring that textures are applied accurately to surfaces. Gradient calculations are a mathematical process that determines how texture coordinates change across a polygon, enabling smooth transitions and reducing artifacts. In the 1990s, texture mapping was a cutting-edge technique, and Quake's implementation pushed the boundaries of what was possible on consumer hardware. The gradients calculated here are used to interpolate texture coordinates, a process inspired by research in computer graphics. This level of precision was a hallmark of Quake's engine, setting it apart from competitors and influencing future developments in 3D rendering."
  - id: "d-drawsurfaces"
    line_start: 171
    line_end: 173
    title: "D_DrawSurfaces: Rendering the World"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rendering_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `D_DrawSurfaces` function is the heart of the rendering pipeline, responsible for drawing all visible surfaces in the game world. It handles various surface types, including flat, textured, and turbulent surfaces, applying optimizations like mipmapping and caching. This function reflects the modular design of Quake's engine, allowing different rendering techniques to coexist and adapt to the game's needs. In 1996, rendering a 3D world in real time was a monumental achievement, requiring careful management of memory, processing power, and graphics hardware. The techniques used here influenced not only games but also broader applications in computer graphics, from simulations to virtual reality."

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
// d_edge.c

#include "quakedef.h"
#include "d_local.h"

static int	miplevel;

float		scale_for_mip;
int			screenwidth;
int			ubasestep, errorterm, erroradjustup, erroradjustdown;
int			vstartscan;

// FIXME: should go away
extern void			R_RotateBmodel (void);
extern void			R_TransformFrustum (void);

vec3_t		transformed_modelorg;

/*
==============
D_DrawPoly

==============
*/
void D_DrawPoly (void)
{
// this driver takes spans, not polygons
}


/*
=============
D_MipLevelForScale
=============
*/
int D_MipLevelForScale (float scale)
{
	int		lmiplevel;

	if (scale >= d_scalemip[0] )
		lmiplevel = 0;
	else if (scale >= d_scalemip[1] )
		lmiplevel = 1;
	else if (scale >= d_scalemip[2] )
		lmiplevel = 2;
	else
		lmiplevel = 3;

	if (lmiplevel < d_minmip)
		lmiplevel = d_minmip;

	return lmiplevel;
}


/*
==============
D_DrawSolidSurface
==============
*/

// FIXME: clean this up

void D_DrawSolidSurface (surf_t *surf, int color)
{
	espan_t	*span;
	byte	*pdest;
	int		u, u2, pix;
	
	pix = (color<<24) | (color<<16) | (color<<8) | color;
	for (span=surf->spans ; span ; span=span->pnext)
	{
		pdest = (byte *)d_viewbuffer + screenwidth*span->v;
		u = span->u;
		u2 = span->u + span->count - 1;
		((byte *)pdest)[u] = pix;

		if (u2 - u < 8)
		{
			for (u++ ; u <= u2 ; u++)
				((byte *)pdest)[u] = pix;
		}
		else
		{
			for (u++ ; u & 3 ; u++)
				((byte *)pdest)[u] = pix;

			u2 -= 4;
			for ( ; u <= u2 ; u+=4)
				*(int *)((byte *)pdest + u) = pix;
			u2 += 4;
			for ( ; u <= u2 ; u++)
				((byte *)pdest)[u] = pix;
		}
	}
}


/*
==============
D_CalcGradients
==============
*/
void D_CalcGradients (msurface_t *pface)
{
	mplane_t	*pplane;
	float		mipscale;
	vec3_t		p_temp1;
	vec3_t		p_saxis, p_taxis;
	float		t;

	pplane = pface->plane;

	mipscale = 1.0 / (float)(1 << miplevel);

	TransformVector (pface->texinfo->vecs[0], p_saxis);
	TransformVector (pface->texinfo->vecs[1], p_taxis);

	t = xscaleinv * mipscale;
	d_sdivzstepu = p_saxis[0] * t;
	d_tdivzstepu = p_taxis[0] * t;

	t = yscaleinv * mipscale;
	d_sdivzstepv = -p_saxis[1] * t;
	d_tdivzstepv = -p_taxis[1] * t;

	d_sdivzorigin = p_saxis[2] * mipscale - xcenter * d_sdivzstepu -
			ycenter * d_sdivzstepv;
	d_tdivzorigin = p_taxis[2] * mipscale - xcenter * d_tdivzstepu -
			ycenter * d_tdivzstepv;

	VectorScale (transformed_modelorg, mipscale, p_temp1);

	t = 0x10000*mipscale;
	sadjust = ((fixed16_t)(DotProduct (p_temp1, p_saxis) * 0x10000 + 0.5)) -
			((pface->texturemins[0] << 16) >> miplevel)
			+ pface->texinfo->vecs[0][3]*t;
	tadjust = ((fixed16_t)(DotProduct (p_temp1, p_taxis) * 0x10000 + 0.5)) -
			((pface->texturemins[1] << 16) >> miplevel)
			+ pface->texinfo->vecs[1][3]*t;

//
// -1 (-epsilon) so we never wander off the edge of the texture
//
	bbextents = ((pface->extents[0] << 16) >> miplevel) - 1;
	bbextentt = ((pface->extents[1] << 16) >> miplevel) - 1;
}


/*
==============
D_DrawSurfaces
==============
*/
void D_DrawSurfaces (void)
{
	surf_t			*s;
	msurface_t		*pface;
	surfcache_t		*pcurrentcache;
	vec3_t			world_transformed_modelorg;
	vec3_t			local_modelorg;

	currententity = &r_worldentity;
	TransformVector (modelorg, transformed_modelorg);
	VectorCopy (transformed_modelorg, world_transformed_modelorg);

// TODO: could preset a lot of this at mode set time
	if (r_drawflat.value)
	{
		for (s = &surfaces[1] ; s<surface_p ; s++)
		{
			if (!s->spans)
				continue;

			d_zistepu = s->d_zistepu;
			d_zistepv = s->d_zistepv;
			d_ziorigin = s->d_ziorigin;

#ifdef __alpha__
			D_DrawSolidSurface (s, (int)((long)s->data & 0xFF));
#else
			D_DrawSolidSurface (s, (int)s->data & 0xFF);
#endif
			D_DrawZSpans (s->spans);
		}
	}
	else
	{
		for (s = &surfaces[1] ; s<surface_p ; s++)
		{
			if (!s->spans)
				continue;

			r_drawnpolycount++;

			d_zistepu = s->d_zistepu;
			d_zistepv = s->d_zistepv;
			d_ziorigin = s->d_ziorigin;

			if (s->flags & SURF_DRAWSKY)
			{
				if (!r_skymade)
				{
					R_MakeSky ();
				}

				D_DrawSkyScans8 (s->spans);
				D_DrawZSpans (s->spans);
			}
			else if (s->flags & SURF_DRAWBACKGROUND)
			{
			// set up a gradient for the background surface that places it
			// effectively at infinity distance from the viewpoint
				d_zistepu = 0;
				d_zistepv = 0;
				d_ziorigin = -0.9;

				D_DrawSolidSurface (s, (int)r_clearcolor.value & 0xFF);
				D_DrawZSpans (s->spans);
			}
			else if (s->flags & SURF_DRAWTURB)
			{
				pface = s->data;
				miplevel = 0;
				cacheblock = (pixel_t *)
						((byte *)pface->texinfo->texture +
						pface->texinfo->texture->offsets[0]);
				cachewidth = 64;

				if (s->insubmodel)
				{
				// FIXME: we don't want to do all this for every polygon!
				// TODO: store once at start of frame
					currententity = s->entity;	//FIXME: make this passed in to
												// R_RotateBmodel ()
					VectorSubtract (r_origin, currententity->origin,
							local_modelorg);
					TransformVector (local_modelorg, transformed_modelorg);

					R_RotateBmodel ();	// FIXME: don't mess with the frustum,
										// make entity passed in
				}

				D_CalcGradients (pface);

				Turbulent8 (s->spans);
				D_DrawZSpans (s->spans);

				if (s->insubmodel)
				{
				//
				// restore the old drawing state
				// FIXME: we don't want to do this every time!
				// TODO: speed up
				//
					currententity = &r_worldentity;
					VectorCopy (world_transformed_modelorg,
								transformed_modelorg);
					VectorCopy (base_vpn, vpn);
					VectorCopy (base_vup, vup);
					VectorCopy (base_vright, vright);
					VectorCopy (base_modelorg, modelorg);
					R_TransformFrustum ();
				}
			}
			else
			{
				if (s->insubmodel)
				{
				// FIXME: we don't want to do all this for every polygon!
				// TODO: store once at start of frame
					currententity = s->entity;	//FIXME: make this passed in to
												// R_RotateBmodel ()
					VectorSubtract (r_origin, currententity->origin, local_modelorg);
					TransformVector (local_modelorg, transformed_modelorg);

					R_RotateBmodel ();	// FIXME: don't mess with the frustum,
										// make entity passed in
				}

				pface = s->data;
				miplevel = D_MipLevelForScale (s->nearzi * scale_for_mip
				* pface->texinfo->mipadjust);

			// FIXME: make this passed in to D_CacheSurface
				pcurrentcache = D_CacheSurface (pface, miplevel);

				cacheblock = (pixel_t *)pcurrentcache->data;
				cachewidth = pcurrentcache->width;

				D_CalcGradients (pface);

				(*d_drawspans) (s->spans);

				D_DrawZSpans (s->spans);

				if (s->insubmodel)
				{
				//
				// restore the old drawing state
				// FIXME: we don't want to do this every time!
				// TODO: speed up
				//
					VectorCopy (world_transformed_modelorg,
								transformed_modelorg);
					VectorCopy (base_vpn, vpn);
					VectorCopy (base_vup, vup);
					VectorCopy (base_vright, vright);
					VectorCopy (base_modelorg, modelorg);
					R_TransformFrustum ();
					currententity = &r_worldentity;
				}
			}
		}
	}
}
