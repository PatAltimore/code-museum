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
description: "This file implements dynamic lighting and light sampling in Quake, showcasing advanced techniques for real-time rendering in 1996."

summary:
  - point: "Dynamic lighting calculations optimized for limited hardware"
    link: "https://en.wikipedia.org/wiki/Dynamic_lighting"
    link_label: "Dynamic Lighting"
  - point: "Recursive algorithms for light sampling in 3D environments"
    link: "https://en.wikipedia.org/wiki/Recursion_(computer_science)"
    link_label: "Recursion"
  - point: "Light animations based on predefined styles and player time"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Efficient marking of light effects on surfaces using bit flags"
    link: "https://en.wikipedia.org/wiki/Bit_field"
    link_label: "Bit Flags"
  - point: "Influence on modern game engines and real-time rendering techniques"
    link: "https://en.wikipedia.org/wiki/Game_engine"
    link_label: "Game Engines"

enhancements:
  - id: "foundation-light-frame-counter"
    line_start: 25
    line_end: 25
    title: "Foundation: Light Frame Counter"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines a global counter, `r_dlightframecount`, used to track dynamic lighting updates per frame. By incrementing this counter each frame, Quake ensures that dynamic light effects are recalculated only when necessary, avoiding redundant computations. In 1996, hardware constraints like limited CPU power and memory made such optimizations critical for real-time rendering. John Carmack and his team were deeply aware of these limitations, designing systems that balanced visual fidelity with performance. This approach influenced later game engines, such as Unreal Engine and Source Engine, which adopted similar frame-based update mechanisms for lighting and physics."
  - id: "light-animation-styles"
    line_start: 28
    line_end: 32
    title: "Animating Light Styles Dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dynamic_lighting"
    image_url: ""
    image_caption: ""
    content: "The `R_AnimateLight` function animates light styles based on the game's elapsed time. Light styles are predefined sequences that dictate how lighting changes over time, such as flickering or pulsing effects. This was a novel feature in 1996, as most games relied on static lighting. The function uses a modulo operation to cycle through the light style map, converting characters ('a' to 'z') into brightness levels. This technique, developed by Carmack and Abrash, allowed Quake to simulate dynamic environments without excessive computational overhead. It inspired similar systems in games like Half-Life and Doom 3, where dynamic lighting became a hallmark of immersive gameplay."
  - id: "dynamic-light-marking"
    line_start: 64
    line_end: 68
    title: "Marking Surfaces for Dynamic Lights"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bit_field"
    image_url: ""
    image_caption: ""
    content: "The `R_MarkLights` function propagates dynamic light effects through a node-based world model. It calculates distances between light sources and surfaces, marking affected surfaces with bit flags. This efficient use of bitwise operations minimizes memory usage while enabling complex lighting interactions. In the mid-90s, such techniques were essential for achieving real-time effects on hardware like the Intel Pentium processors. The method laid groundwork for hierarchical scene management in later engines, such as Unity and Unreal, which use similar spatial partitioning to optimize rendering."
  - id: "recursive-light-point"
    line_start: 139
    line_end: 236
    title: "Recursive Light Sampling in 3D Space"
    wikipedia_url: "https://en.wikipedia.org/wiki/Recursion_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The `RecursiveLightPoint` function samples light intensity at a given point in 3D space by traversing a binary tree of nodes. It calculates intersections between a ray and surfaces, checking for lightmap data to determine brightness. This recursive approach ensures accurate lighting calculations while adhering to the constraints of 1996 hardware. The technique was inspired by ray tracing concepts but adapted for real-time performance. It influenced later advancements in global illumination and ray tracing, seen in engines like CryEngine and NVIDIA's RTX technology."
  - id: "ambient-light-adjustment"
    line_start: 238
    line_end: 259
    title: "Ambient Light Adjustment for Realism"
    wikipedia_url: "https://en.wikipedia.org/wiki/Ambient_light"
    image_url: ""
    image_caption: ""
    content: "The `R_LightPoint` function adjusts light intensity at a given point, ensuring it does not fall below a predefined ambient light level. This prevents overly dark areas, maintaining visual clarity and realism. Ambient lighting was a relatively new concept in 1996, as most games relied on uniform brightness levels. By incorporating ambient adjustments, Quake achieved a more natural look, influencing lighting models in modern engines like Unreal and Unity. The function also highlights id Software's commitment to balancing realism with performance, a philosophy that shaped the industry."

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
