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
description: "This file showcases critical rendering techniques used in Quake's groundbreaking 3D engine, balancing hardware constraints and visual fidelity."

summary:
  - point: "Introduces mipmapping for texture scaling"
    link: "https://en.wikipedia.org/wiki/Mipmap"
    link_label: "Mipmap"
  - point: "Optimizes rendering with span-based drawing"
    link: "https://en.wikipedia.org/wiki/Span_buffer"
    link_label: "Span Buffer"
  - point: "Calculates texture gradients for perspective correction"
    link: "https://en.wikipedia.org/wiki/Texture_mapping"
    link_label: "Texture Mapping"
  - point: "Handles dynamic submodels for complex scenes"
    link: "https://en.wikipedia.org/wiki/Quake_engine"
    link_label: "Quake Engine"
  - point: "Demonstrates early use of software-based Z-buffering"
    link: "https://en.wikipedia.org/wiki/Z-buffering"
    link_label: "Z-buffering"

enhancements:
  - id: "polygon-span-draw"
    line_start: 38
    line_end: 47
    title: "Why Quake Avoided Drawing Polygons Directly"
    wikipedia_url: "https://en.wikipedia.org/wiki/Span_buffer"
    image_url: ""
    image_caption: ""
    content: "The `D_DrawPoly` function is a placeholder that highlights a key design decision in Quake: it avoids drawing polygons directly and instead relies on spans. Spans are horizontal lines of pixels that represent a portion of a polygon, enabling efficient rendering by skipping empty spaces between spans. This approach was crucial for performance on mid-1990s hardware, where CPUs lacked dedicated graphics acceleration. By focusing on spans, Quake minimized the computational overhead of rasterizing polygons pixel-by-pixel. John Carmack and Michael Abrash were heavily influenced by techniques from earlier games like Doom, but Quake took this further by adapting span-based rendering to true 3D environments. This decision laid the groundwork for techniques used in later engines, including Unreal Engine and Source Engine, which optimized rendering pipelines for increasingly complex scenes."
  - id: "mip-level-selection"
    line_start: 50
    line_end: 72
    title: "How Quake Picked the Right Texture Detail"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mipmap"
    image_url: ""
    image_caption: ""
    content: "The `D_MipLevelForScale` function determines the appropriate mipmap level based on the scale of a texture. Mipmaps are precomputed, lower-resolution versions of a texture, used to improve performance and reduce aliasing when rendering distant objects. This function selects a mipmap level by comparing the scale against predefined thresholds (`d_scalemip`) and ensures the level does not fall below a minimum (`d_minmip`). In 1996, this was a cutting-edge optimization, as memory and processing power were limited on consumer-grade hardware. By dynamically adjusting texture detail, Quake maintained high frame rates without sacrificing visual quality. This technique became a standard in 3D graphics, influencing APIs like OpenGL and DirectX, and remains a cornerstone of rendering pipelines in modern engines such as Unity and Unreal."
  - id: "solid-surface-drawing"
    line_start: 75
    line_end: 115
    title: "The Hack That Made Solid Colors Fast"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_engine"
    image_url: ""
    image_caption: ""
    content: "The `D_DrawSolidSurface` function handles the rendering of solid-colored surfaces, such as flat walls or backgrounds. It uses a clever optimization: packing the color into a 32-bit integer (`pix`) and writing it directly to memory in chunks of four pixels at a time. This reduces the number of memory writes and leverages the alignment of modern CPUs, which were optimized for handling 32-bit operations. The function also includes fallback logic for spans shorter than eight pixels, ensuring correctness without sacrificing speed. This approach reflects the constraints of the era, where every cycle counted on processors like the Intel Pentium. The technique inspired similar optimizations in later engines, particularly in handling flat shading and background rendering efficiently."
  - id: "gradient-calculation"
    line_start: 118
    line_end: 166
    title: "The Math Behind Quake's Perspective Textures"
    wikipedia_url: "https://en.wikipedia.org/wiki/Texture_mapping"
    image_url: ""
    image_caption: ""
    content: "The `D_CalcGradients` function calculates texture gradients for perspective-correct mapping, a technique that ensures textures appear correctly on surfaces at varying angles and distances. It transforms texture vectors (`p_saxis` and `p_taxis`) into screen space and computes step values (`d_sdivzstepu`, `d_tdivzstepu`) for interpolation. This ensures that textures do not distort as they recede into the distance—a common issue in early 3D games. The function also adjusts for mipmap scaling and texture extents, preventing artifacts at the edges. Perspective correction was a major leap forward in rendering realism, and Quake's implementation influenced later engines, including those used in Half-Life and Unreal Tournament. The technique remains foundational in modern graphics programming."
  - id: "surface-rendering-loop"
    line_start: 169
    line_end: 335
    title: "Rendering Quake's World, One Surface at a Time"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_engine"
    image_url: ""
    image_caption: ""
    content: "The `D_DrawSurfaces` function is the heart of Quake's rendering pipeline, iterating through all visible surfaces and drawing them based on their type. It handles flat shading, skyboxes, background gradients, and turbulent water effects, dynamically adjusting rendering parameters for each. For submodels (e.g., moving objects), it recalculates transformations to account for their position and orientation. This modular approach allowed Quake to render complex scenes efficiently, even on hardware with limited processing power. The function also integrates Z-buffering to handle depth correctly, ensuring surfaces are drawn in the right order. This level of detail and flexibility set a new standard for game engines, influencing the design of successors like the Source Engine and Unreal Engine. The modular rendering loop remains a key concept in modern graphics programming, enabling dynamic and diverse visual effects."

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

```