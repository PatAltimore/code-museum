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
description: "This file contains the lighting routines for Quake, showcasing innovative techniques for dynamic and static light rendering in a 3D environment."

summary:
  - point: "Introduces dynamic lighting calculations for real-time 3D environments"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Recursive algorithms for light sampling in BSP trees"
    link: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    link_label: "Binary Space Partitioning"
  - point: "Optimized light animations using precomputed styles and maps"
    link: "https://en.wikipedia.org/wiki/Lightmap"
    link_label: "Lightmap"
  - point: "Pushes hardware limits of 1996-era x86 processors"
    link: "https://en.wikipedia.org/wiki/Intel_80486"
    link_label: "Intel 80486"
  - point: "Code influenced modern game engines like Unreal and Source"
    link: "https://en.wikipedia.org/wiki/Game_engine"
    link_label: "Game engine"

enhancements:
  - id: "foundation-lighting-in-quake"
    line_start: 1
    line_end: 25
    title: "Foundation: Lighting in Quake"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "This section sets up the groundwork for lighting calculations in Quake by defining a global variable `r_dlightframecount`. This variable tracks the frame count for dynamic lights, ensuring that lighting updates are synchronized with the game's rendering loop. In 1996, real-time lighting was a cutting-edge feature, and Quake's implementation aimed to balance visual fidelity with the hardware constraints of x86 processors. By using a frame-based counter, id Software optimized lighting updates to avoid redundant calculations, a necessity given the limited computational power of the Intel 486 and Pentium processors of the era. This foundational approach influenced later games and engines, which adopted similar strategies for managing dynamic effects efficiently."
  - id: "light-animation-with-character-maps"
    line_start: 28
    line_end: 53
    title: "Light Animation with Character Maps"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lightmap"
    image_url: ""
    image_caption: ""
    content: "The `R_AnimateLight` function implements light animations using precomputed character maps. Each light style is represented as a sequence of characters, where 'm' indicates normal light, 'a' represents no light, and 'z' signifies double brightness. By indexing into these maps based on the game's time variable, Quake achieves dynamic light animations without recalculating brightness values every frame. This technique reflects the era's emphasis on precomputing data to save CPU cycles. John Carmack and Michael Abrash were known for their focus on optimization, and this approach exemplifies their philosophy of leveraging precomputed data to enhance performance. The concept of light styles and animations became a staple in game development, influencing engines like Unreal and Source, which expanded on these ideas to create more complex lighting systems."
  - id: "dynamic-light-marking-in-bsp-trees"
    line_start: 64
    line_end: 107
    title: "Dynamic Light Marking in BSP Trees"
    wikipedia_url: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    image_url: ""
    image_caption: ""
    content: "The `R_MarkLights` function is a recursive routine that propagates dynamic light information through a Binary Space Partitioning (BSP) tree. BSP trees were a cornerstone of Quake's rendering engine, allowing efficient traversal and visibility determination in complex 3D environments. This function calculates the distance between a light source and the BSP node's splitting plane to decide whether to traverse the front or back child nodes. Surfaces within the node are then marked with dynamic light bits, enabling real-time lighting effects. In the mid-90s, BSP trees were considered state-of-the-art for 3D rendering, and Quake's use of them for dynamic lighting set a precedent for future engines. The recursive approach influenced later games like Half-Life and Counter-Strike, which relied on BSP-based techniques for both rendering and gameplay mechanics."
  - id: "recursive-light-point-sampling"
    line_start: 133
    line_end: 236
    title: "Recursive Light Point Sampling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lightmap"
    image_url: ""
    image_caption: ""
    content: "The `RecursiveLightPoint` function samples light intensity at a given point by traversing the BSP tree recursively. It calculates the midpoint between the start and end points, checks for intersections with surfaces, and evaluates lightmaps to determine the final light value. This algorithm is a testament to Quake's innovative use of BSP trees for spatial queries. Lightmaps, precomputed arrays of brightness values, were a critical optimization for achieving realistic lighting effects on limited hardware. By combining recursive traversal with lightmap sampling, id Software created a system that balanced accuracy and performance. This technique influenced modern engines, which continue to use variations of lightmaps and spatial partitioning for efficient rendering. The recursive approach also inspired algorithms in ray tracing and global illumination, fields that have since evolved to leverage GPU acceleration."
  - id: "ambient-light-adjustment"
    line_start: 238
    line_end: 259
    title: "Ambient Light Adjustment"
    wikipedia_url: "https://en.wikipedia.org/wiki/Ambient_light"
    image_url: ""
    image_caption: ""
    content: "The `R_LightPoint` function calculates the light intensity at a specific point in the game world, incorporating ambient light adjustments to ensure minimum brightness levels. If no light is detected at the sampled point, the function defaults to the ambient light value defined in the rendering settings. This ensures that players can always see their surroundings, even in areas with no direct lighting. Ambient light was a practical solution for the hardware limitations of the 1990s, as fully dynamic lighting was computationally expensive. By blending dynamic and ambient light sources, Quake achieved a visually consistent experience without overburdening the CPU. This approach influenced later games, which adopted ambient lighting as a standard feature to enhance visibility and realism in 3D environments."

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
