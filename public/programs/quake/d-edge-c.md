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
description: "This file contains critical rendering routines for Quake's groundbreaking 3D graphics engine, showcasing optimization techniques for hardware of the mid-1990s."

summary:
  - point: "Mipmapping logic for texture scaling"
    link: "https://en.wikipedia.org/wiki/Mipmap"
    link_label: "Mipmap"
  - point: "Gradient calculation for texture mapping"
    link: "https://en.wikipedia.org/wiki/Texture_mapping"
    link_label: "Texture Mapping"
  - point: "Span-based rendering optimization"
    link: "https://en.wikipedia.org/wiki/Scanline_rendering"
    link_label: "Scanline Rendering"
  - point: "Handling submodels in 3D environments"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Dynamic surface drawing techniques"
    link: "https://en.wikipedia.org/wiki/Surface_(computer_graphics)"
    link_label: "Surface Rendering"

enhancements:
  - id: "foundation-initial-setup"
    line_start: 17
    line_end: 23
    title: "Foundation: Initial Setup for Rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "This section sets up foundational variables for rendering, including screen width and error adjustment parameters. These values are critical for ensuring that subsequent rendering routines operate correctly. In the mid-1990s, hardware constraints such as limited memory and processing power demanded careful initialization of global variables to avoid performance bottlenecks. John Carmack and his team were known for their meticulous attention to such details, often pushing hardware beyond its perceived limits. This groundwork paved the way for efficient span-based rendering, a technique that became synonymous with Quake's performance. The principles established here influenced later game engines, including Unreal Engine, which adopted similar optimization strategies."
  - id: "vec3t-transformed-modelorg"
    line_start: 36
    line_end: 36
    title: "vec3_t: Transforming Model Origins"
    wikipedia_url: "https://en.wikipedia.org/wiki/Vector_space"
    image_url: ""
    image_caption: ""
    content: "The vec3_t structure represents a three-dimensional vector, used here to store the transformed model origin. This transformation is a key step in aligning 3D models with the player's perspective. In 1996, real-time 3D transformations were computationally expensive, requiring innovative techniques to minimize overhead. The use of vectors for spatial calculations was inspired by advancements in computer graphics research during the late 1980s and early 1990s. By leveraging vector math, Quake achieved smooth and accurate transformations, setting a standard for 3D engines. Modern engines like Unity and Unreal continue to use similar vector-based approaches for spatial computations."
  - id: "d-drawpoly-span-rendering"
    line_start: 38
    line_end: 47
    title: "D_DrawPoly: Span-Based Rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Scanline_rendering"
    image_url: ""
    image_caption: ""
    content: "The D_DrawPoly function is a placeholder for span-based rendering, a technique where polygons are broken into horizontal spans for efficient drawing. This approach was crucial for Quake's performance, as it allowed the engine to process only visible portions of polygons, reducing computational load. Span rendering was a common optimization in the era of fixed-function graphics pipelines, where every CPU cycle mattered. By focusing on spans rather than entire polygons, Quake achieved real-time rendering on hardware like the Intel Pentium. This technique influenced later engines and contributed to the evolution of rasterization methods in modern GPUs."
  - id: "d-miplevelforscale-mipmapping"
    line_start: 50
    line_end: 72
    title: "D_MipLevelForScale: Mipmapping Logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mipmap"
    image_url: ""
    image_caption: ""
    content: "This function determines the appropriate mipmap level based on the scale of a texture. Mipmapping, introduced in the 1980s, involves precomputing multiple levels of texture detail to optimize rendering performance and reduce aliasing. Quake's implementation dynamically selects the mipmap level, balancing visual fidelity and computational efficiency. This was particularly important in 1996, when hardware lacked dedicated texture filtering capabilities. The technique became a standard in graphics programming, influencing APIs like OpenGL and DirectX. Today, mipmapping is a fundamental feature in game development, ensuring smooth texture transitions across varying distances."
  - id: "d-drawsolidsurface-flat-shading"
    line_start: 75
    line_end: 115
    title: "D_DrawSolidSurface: Flat Shading Optimization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Flat_shading"
    image_url: ""
    image_caption: ""
    content: "This routine draws solid-colored surfaces using flat shading, where each polygon is rendered with a single color. Flat shading was a common technique in the 1990s to simplify rendering and improve performance. The function includes optimizations for memory alignment and loop unrolling, minimizing the cost of drawing spans. These techniques reflect the team's deep understanding of x86 assembly and hardware constraints. While flat shading is less common today, the optimization strategies employed here laid the groundwork for more advanced shading techniques, such as Gouraud and Phong shading, which became standard in later 3D engines."
  - id: "d-calcgradients-texture-mapping"
    line_start: 118
    line_end: 166
    title: "D_CalcGradients: Precision Texture Mapping"
    wikipedia_url: "https://en.wikipedia.org/wiki/Texture_mapping"
    image_url: ""
    image_caption: ""
    content: "This function calculates gradients for texture mapping, ensuring accurate alignment of textures on 3D surfaces. Gradients are computed based on the surface's plane and texture vectors, accounting for mipmap scaling and perspective correction. In the mid-1990s, texture mapping was a computationally intensive process, requiring innovative solutions to achieve real-time performance. Quake's gradient calculations were a significant advancement, enabling detailed and realistic textures on complex geometry. These techniques influenced later engines, such as Source and CryEngine, which built on Quake's approach to texture mapping and perspective correction."
  - id: "d-drawsurfaces-dynamic-surface-rendering"
    line_start: 169
    line_end: 173
    title: "D_DrawSurfaces: Dynamic Surface Rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Surface_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "This routine handles the rendering of dynamic surfaces, including skyboxes, backgrounds, and turbulent textures. It incorporates logic for handling submodels, such as rotating entities within the world. The function demonstrates Quake's versatility in rendering diverse surface types, a key feature of its 3D engine. By dynamically adjusting rendering parameters based on surface flags, Quake achieved a level of visual complexity that was unprecedented in 1996. This approach influenced later engines, such as Unreal Engine and Frostbite, which adopted similar techniques for dynamic surface rendering and entity management."
  - id: "d-drawsurfaces-main-rendering-loop"
    line_start: 174
    line_end: 335
    title: "D_DrawSurfaces: Main Rendering Loop"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "This section contains the main rendering loop for surfaces, iterating through visible spans and applying appropriate rendering techniques based on surface flags. It includes logic for flat shading, sky rendering, background gradients, and turbulent textures. The loop also manages submodels, restoring the drawing state after rendering entities. This comprehensive approach reflects the team's commitment to maximizing visual fidelity within hardware constraints. The main rendering loop is a cornerstone of Quake's engine, influencing the design of subsequent engines like Doom 3 and Unity. Its modular structure and optimization strategies remain relevant in modern game development."

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
