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
description: "This file implements dynamic and static lighting calculations for Quake's groundbreaking 3D engine, showcasing optimization techniques for hardware constraints of the mid-1990s."

summary:
  - point: "Dynamic lighting updates for real-time effects"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Recursive algorithms for light sampling in BSP trees"
    link: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    link_label: "Binary Space Partitioning"
  - point: "Light animations based on predefined styles"
    link: "https://en.wikipedia.org/wiki/Lightmap"
    link_label: "Lightmap"
  - point: "Optimization for limited memory and CPU power"
    link: "https://en.wikipedia.org/wiki/Intel_80486"
    link_label: "Intel 80486"
  - point: "Influence on modern game engines and lighting techniques"
    link: "https://en.wikipedia.org/wiki/Game_engine"
    link_label: "Game Engine"

enhancements:
  - id: "light-animation-styles"
    line_start: 28
    line_end: 53
    title: "Animating Light with 'a' to 'z' Maps"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lightmap"
    image_url: ""
    image_caption: ""
    content: "The `R_AnimateLight` function processes light animations based on predefined styles, where each style is represented as a sequence of characters ('a' for no light, 'm' for normal light, 'z' for double brightness). This approach allows designers to create dynamic lighting effects by mapping these sequences to time-based indices. At the time, hardware limitations meant that real-time lighting calculations were expensive, so precomputed light styles provided a compromise between visual fidelity and performance. The technique was influenced by earlier games like Doom, which used similar precomputed lighting tricks. This method became a stepping stone for more advanced dynamic lighting systems in later engines, such as Unreal Engine and Unity, which now support fully dynamic light sources and physically-based rendering."
  - id: "dynamic-light-marking"
    line_start: 56
    line_end: 107
    title: "Marking Surfaces for Dynamic Lights"
    wikipedia_url: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    image_url: ""
    image_caption: ""
    content: "The `R_MarkLights` function traverses the BSP tree to identify surfaces affected by a dynamic light source. By calculating the distance of the light from the splitting plane and marking surfaces within its radius, the function ensures that only relevant surfaces are updated for lighting effects. This recursive traversal minimizes computational overhead, which was critical for achieving real-time performance on mid-1990s hardware like the Intel 486 and Pentium processors. The technique reflects id Software's mastery of BSP trees, which were first popularized in Doom. This efficient handling of dynamic lights influenced later engines, including Source and CryEngine, which expanded on these principles to handle more complex lighting scenarios."
  - id: "dynamic-light-propagation"
    line_start: 110
    line_end: 130
    title: "Pushing Dynamic Lights Through the World"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dynamic_lighting"
    image_url: ""
    image_caption: ""
    content: "The `R_PushDlights` function iterates over all dynamic lights in the scene, propagating their influence through the BSP tree using the `R_MarkLights` function. By associating each light with a unique bitmask, the system tracks which surfaces are affected by multiple lights, enabling additive lighting effects. This approach was a clever workaround for hardware constraints, as it avoided the need for per-pixel lighting calculations. Dynamic lighting was a standout feature of Quake, setting it apart from earlier games that relied solely on static lightmaps. The concept of dynamic light propagation laid the groundwork for modern techniques like deferred shading, which allows for hundreds of dynamic lights in scenes without significant performance penalties."
  - id: "recursive-light-sampling"
    line_start: 133
    line_end: 236
    title: "Recursive Sampling for Light Points"
    wikipedia_url: "https://en.wikipedia.org/wiki/Recursive_algorithm"
    image_url: ""
    image_caption: ""
    content: "The `RecursiveLightPoint` function calculates the light intensity at a given point by recursively traversing the BSP tree. It determines the midpoint between the start and end vectors, checks for intersections with surfaces, and computes light contributions from the lightmap. This recursive approach ensures accurate sampling of light data while optimizing for the hierarchical structure of the BSP tree. In the mid-1990s, this method was revolutionary for achieving realistic lighting in real-time 3D environments. The technique influenced later games like Half-Life and Counter-Strike, which used similar recursive algorithms for light sampling. Today, ray tracing has largely replaced such techniques, but the principles of recursive traversal remain foundational in computer graphics."
  - id: "ambient-light-adjustment"
    line_start: 238
    line_end: 259
    title: "Adjusting Light Points for Ambient Levels"
    wikipedia_url: "https://en.wikipedia.org/wiki/Ambient_light"
    image_url: ""
    image_caption: ""
    content: "The `R_LightPoint` function calculates the light intensity at a specific point in the world, adjusting it to ensure a minimum ambient light level. By extending the end vector downward and sampling light data recursively, the function accounts for both direct and indirect lighting contributions. Ambient light adjustments prevent areas from appearing completely dark, enhancing visual clarity and gameplay experience. This technique was crucial for Quake's immersive environments, as it balanced realism with playability. The concept of ambient light persists in modern engines, where it is often implemented as part of global illumination systems. Quake's approach influenced games like Unreal Tournament and Call of Duty, which refined ambient lighting to create more atmospheric scenes."

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

```