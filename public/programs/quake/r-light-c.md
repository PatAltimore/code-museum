---
title: "r_light.c"
program: "Quake"
program_slug: "quake"
file_path: "QW/client/r_light.c"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/Quake/blob/master/QW/client/r_light.c"
year: 1996
author: "John Carmack, Michael Abrash, John Cash"
slug: "r-light-c"
order: 34
description: "This file implements dynamic lighting and light sampling for Quake's revolutionary 3D engine."

summary:
  - point: "Dynamic lighting calculations optimized for 1990s hardware constraints"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Recursive algorithms for light sampling in BSP trees"
    link: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    link_label: "Binary Space Partitioning"
  - point: "Innovative use of lightmaps for realistic lighting effects"
    link: "https://en.wikipedia.org/wiki/Lightmap"
    link_label: "Lightmap"

enhancements:
  - id: "foundation-light-frame-counter"
    line_start: 17
    line_end: 23
    title: "Foundation: Tracking Dynamic Light Frames"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "This section introduces a single integer variable, `r_dlightframecount`, which serves as a counter for dynamic lighting updates. While seemingly simple, this variable is integral to ensuring that dynamic lights are recalculated consistently for each frame. In 1996, real-time lighting was a cutting-edge feature, and Quake's engine had to balance visual fidelity with the constraints of hardware like Intel's Pentium processors. The decision to use a frame counter reflects John Carmack's focus on optimization and precision in rendering. By isolating dynamic light updates to specific frames, the engine avoids redundant calculations, a necessity given the limited computational power of the era."
  - id: "animate-light-style-maps"
    line_start: 30
    line_end: 32
    title: "Animating Light Styles for Atmosphere"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `R_AnimateLight` function processes light animations based on predefined style maps. These maps use characters like 'm', 'a', and 'z' to represent different brightness levels. The function calculates light intensity by mapping these characters to numerical values and scaling them. This approach allowed Quake to simulate flickering torches, pulsating lights, and other atmospheric effects without requiring complex computations. In the mid-1990s, such techniques were essential for creating immersive environments on hardware with limited graphical capabilities. The use of style maps also highlights the influence of Carmack and Abrash's background in optimizing algorithms for real-time performance."
  - id: "dynamic-lights-marking-polygons"
    line_start: 66
    line_end: 68
    title: "Dynamic Lights: Marking Polygons for Illumination"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dynamic_lighting"
    image_url: ""
    image_caption: ""
    content: "The `R_MarkLights` function is a recursive algorithm that propagates dynamic light information through the BSP tree structure of the game world. It calculates whether a light source affects a given node and marks the corresponding polygons for illumination. This method ensures that only relevant surfaces are updated, minimizing computational overhead. The recursive traversal of BSP trees was a hallmark of Quake's engine, enabling efficient spatial partitioning and rendering. At the time, this approach was groundbreaking, as it allowed dynamic lighting to coexist with the game's high-performance requirements. The function reflects id Software's pioneering work in real-time graphics."
  - id: "push-dynamic-lights-frame-update"
    line_start: 112
    line_end: 114
    title: "Pushing Dynamic Lights for Frame Updates"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `R_PushDlights` function iterates through all dynamic lights in the game world and updates their influence on the BSP tree. By incrementing the `r_dlightframecount` variable, the engine ensures that each light's effect is recalculated only once per frame. This optimization was crucial for maintaining performance on mid-1990s hardware, where CPU cycles were precious. The function also filters out expired or inactive lights, further reducing unnecessary computations. This design exemplifies id Software's meticulous attention to detail in balancing visual fidelity with performance constraints, a key factor in Quake's success."
  - id: "recursive-light-point-sampling"
    line_start: 141
    line_end: 236
    title: "Recursive Light Sampling in BSP Trees"
    wikipedia_url: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    image_url: ""
    image_caption: ""
    content: "The `RecursiveLightPoint` function calculates the light intensity at a specific point in the game world by traversing the BSP tree. It uses recursive calls to determine whether the point intersects with light-emitting surfaces and calculates the contribution of each surface's lightmap. This algorithm is a testament to the ingenuity of Quake's developers, who leveraged BSP trees not only for spatial partitioning but also for complex lighting calculations. In 1996, this approach was revolutionary, enabling realistic lighting effects in real-time 3D environments. The function's reliance on lightmaps also highlights the team's focus on precomputed data to optimize performance. This technique influenced countless games and engines in the years that followed."
  - id: "light-point-final-calculation"
    line_start: 238
    line_end: 259
    title: "Final Light Point Calculation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lightmap"
    image_url: ""
    image_caption: ""
    content: "The `R_LightPoint` function serves as the final step in determining the light intensity at a given point. It calls `RecursiveLightPoint` and adjusts the result based on ambient light levels. This ensures that even areas without direct illumination maintain a baseline brightness, preventing overly dark visuals. The function reflects id Software's commitment to creating visually appealing environments while adhering to hardware limitations. By combining recursive sampling with ambient adjustments, the engine achieves a balance between realism and performance. This method became a foundational technique in 3D graphics, influencing how lighting was handled in subsequent games and engines."

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
// r_light.c

#include "quakedef.h"
#include "r_local.h"

int	r_dlightframecount;


/*
==================
R_AnimateLight
==================
*/
void R_AnimateLight (void)
{
	int			i,j,k;
	
//
// light animations
// 'm' is normal light, 'a' is no light, 'z' is double bright
	i = (int)(cl.time*10);
	for (j=0 ; j<MAX_LIGHTSTYLES ; j++)
	{
		if (!cl_lightstyle[j].length)
		{
			d_lightstylevalue[j] = 256;
			continue;
		}
		k = i % cl_lightstyle[j].length;
		k = cl_lightstyle[j].map[k] - 'a';
		k = k*22;
		d_lightstylevalue[j] = k;
	}	
}


/*
=============================================================================

DYNAMIC LIGHTS

=============================================================================
*/

/*
=============
R_MarkLights
=============
*/
void R_MarkLights (dlight_t *light, int bit, mnode_t *node)
{
	mplane_t	*splitplane;
	float		dist;
	msurface_t	*surf;
	int			i;
	
	if (node->contents < 0)
		return;

	splitplane = node->plane;
	dist = DotProduct (light->origin, splitplane->normal) - splitplane->dist;
	
	if (dist > light->radius)
	{
		R_MarkLights (light, bit, node->children[0]);
		return;
	}
	if (dist < -light->radius)
	{
		R_MarkLights (light, bit, node->children[1]);
		return;
	}
		
// mark the polygons
	surf = cl.worldmodel->surfaces + node->firstsurface;
	for (i=0 ; i<node->numsurfaces ; i++, surf++)
	{
		if (surf->dlightframe != r_dlightframecount)
		{
			surf->dlightbits = 0;
			surf->dlightframe = r_dlightframecount;
		}
		surf->dlightbits |= bit;
	}

	R_MarkLights (light, bit, node->children[0]);
	R_MarkLights (light, bit, node->children[1]);
}


/*
=============
R_PushDlights
=============
*/
void R_PushDlights (void)
{
	int		i;
	dlight_t	*l;

	r_dlightframecount = r_framecount + 1;	// because the count hasn't
											//  advanced yet for this frame
	l = cl_dlights;

	for (i=0 ; i<MAX_DLIGHTS ; i++, l++)
	{
		if (l->die < cl.time || !l->radius)
			continue;
		R_MarkLights ( l, 1<<i, cl.worldmodel->nodes );
	}
}


/*
=============================================================================

LIGHT SAMPLING

=============================================================================
*/

int RecursiveLightPoint (mnode_t *node, vec3_t start, vec3_t end)
{
	int			r;
	float		front, back, frac;
	int			side;
	mplane_t	*plane;
	vec3_t		mid;
	msurface_t	*surf;
	int			s, t, ds, dt;
	int			i;
	mtexinfo_t	*tex;
	byte		*lightmap;
	unsigned	scale;
	int			maps;

	if (node->contents < 0)
		return -1;		// didn't hit anything
	
// calculate mid point

// FIXME: optimize for axial
	plane = node->plane;
	front = DotProduct (start, plane->normal) - plane->dist;
	back = DotProduct (end, plane->normal) - plane->dist;
	side = front < 0;
	
	if ( (back < 0) == side)
		return RecursiveLightPoint (node->children[side], start, end);
	
	frac = front / (front-back);
	mid[0] = start[0] + (end[0] - start[0])*frac;
	mid[1] = start[1] + (end[1] - start[1])*frac;
	mid[2] = start[2] + (end[2] - start[2])*frac;
	
// go down front side	
	r = RecursiveLightPoint (node->children[side], start, mid);
	if (r >= 0)
		return r;		// hit something
		
	if ( (back < 0) == side )
		return -1;		// didn't hit anuthing
		
// check for impact on this node

	surf = cl.worldmodel->surfaces + node->firstsurface;
	for (i=0 ; i<node->numsurfaces ; i++, surf++)
	{
		if (surf->flags & SURF_DRAWTILED)
			continue;	// no lightmaps

		tex = surf->texinfo;
		
		s = DotProduct (mid, tex->vecs[0]) + tex->vecs[0][3];
		t = DotProduct (mid, tex->vecs[1]) + tex->vecs[1][3];;

		if (s < surf->texturemins[0] ||
		t < surf->texturemins[1])
			continue;
		
		ds = s - surf->texturemins[0];
		dt = t - surf->texturemins[1];
		
		if ( ds > surf->extents[0] || dt > surf->extents[1] )
			continue;

		if (!surf->samples)
			return 0;

		ds >>= 4;
		dt >>= 4;

		lightmap = surf->samples;
		r = 0;
		if (lightmap)
		{

			lightmap += dt * ((surf->extents[0]>>4)+1) + ds;

			for (maps = 0 ; maps < MAXLIGHTMAPS && surf->styles[maps] != 255 ;
					maps++)
			{
				scale = d_lightstylevalue[surf->styles[maps]];
				r += *lightmap * scale;
				lightmap += ((surf->extents[0]>>4)+1) *
						((surf->extents[1]>>4)+1);
			}
			
			r >>= 8;
		}
		
		return r;
	}

// go down back side
	return RecursiveLightPoint (node->children[!side], mid, end);
}

int R_LightPoint (vec3_t p)
{
	vec3_t		end;
	int			r;
	
	if (!cl.worldmodel->lightdata)
		return 255;
	
	end[0] = p[0];
	end[1] = p[1];
	end[2] = p[2] - 2048;
	
	r = RecursiveLightPoint (cl.worldmodel->nodes, p, end);
	
	if (r == -1)
		r = 0;

	if (r < r_refdef.ambientlight)
		r = r_refdef.ambientlight;

	return r;
}
