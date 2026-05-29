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
description: "This file showcases advanced rendering techniques used in Quake to optimize for hardware constraints of the mid-1990s, contributing to its groundbreaking 3D graphics."

summary:
  - point: "Introduces mipmapping for texture scaling"
    link: "https://en.wikipedia.org/wiki/Mipmap"
    link_label: "Mipmap"
  - point: "Optimizes rendering with span-based drawing"
    link: "https://en.wikipedia.org/wiki/Scanline_rendering"
    link_label: "Scanline rendering"
  - point: "Handles gradients for texture mapping"
    link: "https://en.wikipedia.org/wiki/Texture_mapping"
    link_label: "Texture mapping"
  - point: "Includes submodel transformations for dynamic objects"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Demonstrates early use of modular rendering pipelines"
    link: "https://en.wikipedia.org/wiki/Rendering_(computer_graphics)"
    link_label: "Rendering"

enhancements:
  - id: "foundation-initialization-variables"
    line_start: 38
    line_end: 47
    title: "Rendering Setup Variables and Why Polygons Became Spans"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "This section declares the global variables that underpin the entire rendering pipeline: miplevel and scale_for_mip drive texture LOD selection, screenwidth ties pixel addresses to scan rows, and transformed_modelorg holds the viewer-space origin of the current submodel so that texture gradients can be computed correctly for brush entities. The stub D_DrawPoly function makes the architecture explicit — this driver works with horizontal spans, not polygons. Span-based rendering was a key optimization on mid-1990s x86 hardware, allowing the innermost drawing loops to advance linearly through memory rather than performing per-polygon setup for every pixel. Preloading these values at the start of the frame and sharing them across the draw-surfaces functions was a typical Carmack tactic for minimizing redundant computation, a pattern that propagated into later software-rendered and hardware-accelerated engines alike."
  - id: "d-miplevelforscale-mipmapping"
    line_start: 50
    line_end: 72
    title: "How Mipmapping Saved the Day"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mipmap"
    image_url: ""
    image_caption: ""
    content: "The 'D_MipLevelForScale' function determines the appropriate mipmap level based on the scale of a texture. Mipmapping, introduced in the 1980s, became a staple in 3D graphics by the mid-1990s. It involves precomputing multiple levels of texture detail, allowing the renderer to select the best level based on the object's distance from the camera. This reduces aliasing and improves performance by avoiding unnecessary high-resolution texture sampling. Quake's implementation of mipmapping was a key factor in its ability to render complex scenes smoothly on hardware like the Pentium processors of the era. The technique remains a cornerstone of modern graphics engines."
  - id: "d-drawsolidsurface-span-optimization"
    line_start: 75
    line_end: 115
    title: "The Span Loop That Sped Up Rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rendering_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The 'D_DrawSolidSurface' function draws solid surfaces using a span-based loop. It optimizes rendering by grouping pixels into spans and processing them in batches, reducing the overhead of individual pixel operations. The function includes clever tricks like aligning spans to 4-byte boundaries for faster memory access, leveraging the x86 architecture's strengths. This approach was critical for achieving high frame rates on mid-1990s hardware, where memory bandwidth and processing power were limited. The span-based optimization influenced later engines, including Doom 3 and Half-Life, which adapted similar techniques for more advanced graphics pipelines."
  - id: "d-calcgradients-texture-mapping"
    line_start: 118
    line_end: 166
    title: "The Math Behind Texture Gradients"
    wikipedia_url: "https://en.wikipedia.org/wiki/Texture_mapping"
    image_url: ""
    image_caption: ""
    content: "The 'D_CalcGradients' function calculates gradients for texture mapping, ensuring that textures are correctly aligned and scaled across surfaces. It uses vector transformations and scaling factors to compute texture coordinates, a process that was computationally intensive on 1990s hardware. The function's reliance on fixed-point arithmetic reflects the era's constraints, where floating-point operations were expensive. This technique allowed Quake to render detailed textures with minimal distortion, setting a new standard for visual fidelity in games. The gradient calculations influenced later engines, which adopted similar methods for handling texture mapping in complex 3D environments."
  - id: "d-drawsurfaces-modular-rendering"
    line_start: 169
    line_end: 203
    title: "The Modular Pipeline That Changed Everything"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rendering_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The 'D_DrawSurfaces' function represents the modular rendering pipeline of Quake, processing surfaces based on their type and flags. It handles solid surfaces, skyboxes, and turbulent textures, applying different rendering techniques to each. This modularity was a significant innovation, allowing developers to extend the pipeline for new surface types without rewriting core rendering logic. The function also integrates submodel transformations, enabling dynamic objects to interact seamlessly with the environment. This approach influenced modern engines like Unity and Unreal, which use modular pipelines to support diverse rendering techniques and dynamic environments."

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
