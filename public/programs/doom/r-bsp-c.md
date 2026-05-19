---
title: "r_bsp.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/r_bsp.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/r_bsp.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "r-bsp-c"
order: 12
description: "This file implements the Binary Space Partitioning (BSP) traversal for rendering in DOOM, a cornerstone of its revolutionary graphics engine."

summary:
  - point: "BSP traversal optimized for real-time rendering"
    link: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    link_label: "Binary Space Partitioning"
  - point: "Efficient clipping algorithms for visibility determination"
    link: "https://en.wikipedia.org/wiki/Clipping_(computer_graphics)"
    link_label: "Clipping Algorithms"
  - point: "Handling of solid walls and transparent windows in rendering"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "Recursive rendering of BSP nodes for dynamic environments"
    link: "https://en.wikipedia.org/wiki/Recursion_(computer_science)"
    link_label: "Recursion in Computer Science"

enhancements:
  - id: "clear-draw-segments"
    line_start: 68
    line_end: 71
    title: "Resetting the draw segment buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "This function, `R_ClearDrawSegs`, initializes the buffer used to store draw segments, a key structure in DOOM's rendering pipeline. By resetting the pointer `ds_p` to the start of the `drawsegs` array, the game ensures that each frame begins with a clean slate for wall rendering. In 1993, memory management was a critical concern for games like DOOM, which had to run efficiently on hardware with limited RAM and processing power. The simplicity of this function reflects the team's focus on performance and reliability, avoiding unnecessary overhead. This approach allowed DOOM to maintain its fast-paced gameplay and smooth visuals, even on modest machines. The draw segment buffer would later be populated with visible wall segments, forming the backbone of the game's iconic 3D environments."
  - id: "clip-solid-wall-segment"
    line_start: 104
    line_end: 185
    title: "Clipping solid walls for visibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/Clipping_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `R_ClipSolidWallSegment` function handles the clipping of solid walls, ensuring that only visible portions of single-sided LineDefs (walls with middle textures) are rendered. This algorithm works by comparing the wall's coordinates to the current clip list, adjusting the list to account for the new segment. In the early 1990s, real-time visibility determination was a major challenge for 3D games, as hardware lacked dedicated graphics processors. John Carmack's implementation here demonstrates a deep understanding of both geometry and optimization. By efficiently managing the clip list, DOOM could render complex scenes with minimal computational overhead. This technique influenced later games, as developers sought to balance visual fidelity with performance constraints."
  - id: "clip-pass-wall-segment"
    line_start: 197
    line_end: 238
    title: "Handling transparent walls and windows"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `R_ClipPassWallSegment` function deals with walls that have transparent sections, such as windows. Unlike solid walls, these segments are clipped but not added to the clip list, allowing the renderer to account for visibility through the transparent areas. This distinction was crucial for DOOM's immersive environments, where players could see through windows and interact with dynamic spaces. The function's design reflects the game's innovative approach to rendering, combining simplicity with versatility. By treating transparent walls differently, DOOM achieved a level of realism that set it apart from earlier 3D games. This technique laid the groundwork for more advanced rendering systems in future titles."
  - id: "clear-clip-segments"
    line_start: 245
    line_end: 252
    title: "Initializing the clipping list"
    wikipedia_url: "https://en.wikipedia.org/wiki/Clipping_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `R_ClearClipSegs` function initializes the clipping list, setting up the `solidsegs` array with default values that define the visible area. This step is essential for managing visibility during rendering, as it establishes the boundaries within which wall segments can be drawn. In the constrained environment of 1993, where DOOM had to run on hardware like the 386 processor, such initialization routines ensured stability and predictability in the rendering pipeline. This function highlights the team's meticulous attention to detail, as even seemingly minor tasks were optimized for performance. The clipping list would be updated dynamically during gameplay, adapting to the player's perspective and maintaining the illusion of a seamless 3D world."
  - id: "add-line-to-render"
    line_start: 259
    line_end: 356
    title: "Adding visible lines to the rendering list"
    wikipedia_url: "https://en.wikipedia.org/wiki/Back-face_culling"
    image_url: ""
    image_caption: ""
    content: "The `R_AddLine` function determines whether a line segment is visible and, if so, adds it to the rendering list. This process involves back-face culling, clipping to the view edges, and handling special cases like single-sided lines and windows. In the early 1990s, these techniques were cutting-edge, enabling DOOM to render its environments efficiently while maintaining high frame rates. John Carmack's implementation here showcases his mastery of 3D graphics, as he balances complexity with performance. The function's ability to reject invisible lines and optimize rendering was pivotal for DOOM's success, allowing it to deliver immersive gameplay on hardware with limited capabilities. This approach influenced countless games that followed, as developers sought to replicate DOOM's groundbreaking visuals."
  - id: "check-bounding-box"
    line_start: 365
    line_end: 487
    title: "Bounding box visibility checks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    image_url: ""
    image_caption: ""
    content: "The `R_CheckBBox` function checks whether a bounding box might be visible from the player's current viewpoint. This is a critical step in DOOM's BSP traversal, as it allows the renderer to skip entire subtrees that are outside the player's field of view. The function uses geometric calculations and the clip list to determine visibility, optimizing the rendering process by focusing only on potentially visible areas. In the early 1990s, this kind of spatial optimization was essential for real-time 3D graphics, as hardware lacked the power to brute-force render entire scenes. John Carmack's use of BSP trees and bounding box checks revolutionized game development, setting a new standard for efficiency and realism. This technique remains a foundational concept in modern graphics engines."
  - id: "render-subsector"
    line_start: 493
    line_end: 542
    title: "Rendering individual subsectors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Subsector_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `R_Subsector` function handles the rendering of individual subsectors, including floor and ceiling planes, sprites, and line segments. This granular approach allows DOOM to construct its complex environments piece by piece, ensuring that each element is rendered accurately. In 1993, this level of detail was unprecedented, as most games relied on simpler techniques for environment rendering. The function's ability to dynamically determine visibility and handle special cases like sky textures contributed to DOOM's immersive atmosphere. By breaking the world into manageable subsectors, the game achieved a balance between visual fidelity and performance, paving the way for future advancements in 3D graphics."
  - id: "render-bsp-node"
    line_start: 549
    line_end: 578
    title: "Recursive BSP node traversal"
    wikipedia_url: "https://en.wikipedia.org/wiki/Recursion_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The `R_RenderBSPNode` function is the heart of DOOM's BSP traversal, rendering all subsectors below a given node recursively. This approach allows the game to efficiently manage visibility and draw only the parts of the environment that are relevant to the player's perspective. In 1993, recursive algorithms like this were a bold choice, as they required careful management of memory and stack usage. John Carmack's implementation demonstrates a deep understanding of both the theoretical and practical aspects of computer science, as he adapts BSP techniques to the constraints of real-time rendering. This function's recursive traversal laid the groundwork for modern graphics engines, which continue to rely on similar principles for spatial optimization."

---

// Emacs style mode select   -*- C++ -*- 
//-----------------------------------------------------------------------------
//
// $Id:$
//
// Copyright (C) 1993-1996 by id Software, Inc.
//
// This source is available for distribution and/or modification
// only under the terms of the DOOM Source Code License as
// published by id Software. All rights reserved.
//
// The source is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// FITNESS FOR A PARTICULAR PURPOSE. See the DOOM Source Code License
// for more details.
//
// $Log:$
//
// DESCRIPTION:
//	BSP traversal, handling of LineSegs for rendering.
//
//-----------------------------------------------------------------------------


static const char
rcsid[] = "$Id: r_bsp.c,v 1.4 1997/02/03 22:45:12 b1 Exp $";


#include "doomdef.h"

#include "m_bbox.h"

#include "i_system.h"

#include "r_main.h"
#include "r_plane.h"
#include "r_things.h"

// State.
#include "doomstat.h"
#include "r_state.h"

//#include "r_local.h"



seg_t*		curline;
side_t*		sidedef;
line_t*		linedef;
sector_t*	frontsector;
sector_t*	backsector;

drawseg_t	drawsegs[MAXDRAWSEGS];
drawseg_t*	ds_p;


void
R_StoreWallRange
( int	start,
  int	stop );




//
// R_ClearDrawSegs
//
void R_ClearDrawSegs (void)
{
    ds_p = drawsegs;
}



//
// ClipWallSegment
// Clips the given range of columns
// and includes it in the new clip list.
//
typedef	struct
{
    int	first;
    int last;
    
} cliprange_t;


#define MAXSEGS		32

// newend is one past the last valid seg
cliprange_t*	newend;
cliprange_t	solidsegs[MAXSEGS];




//
// R_ClipSolidWallSegment
// Does handle solid walls,
//  e.g. single sided LineDefs (middle texture)
//  that entirely block the view.
// 
void
R_ClipSolidWallSegment
( int			first,
  int			last )
{
    cliprange_t*	next;
    cliprange_t*	start;

    // Find the first range that touches the range
    //  (adjacent pixels are touching).
    start = solidsegs;
    while (start->last < first-1)
	start++;

    if (first < start->first)
    {
	if (last < start->first-1)
	{
	    // Post is entirely visible (above start),
	    //  so insert a new clippost.
	    R_StoreWallRange (first, last);
	    next = newend;
	    newend++;
	    
	    while (next != start)
	    {
		*next = *(next-1);
		next--;
	    }
	    next->first = first;
	    next->last = last;
	    return;
	}
		
	// There is a fragment above *start.
	R_StoreWallRange (first, start->first - 1);
	// Now adjust the clip size.
	start->first = first;	
    }

    // Bottom contained in start?
    if (last <= start->last)
	return;			
		
    next = start;
    while (last >= (next+1)->first-1)
    {
	// There is a fragment between two posts.
	R_StoreWallRange (next->last + 1, (next+1)->first - 1);
	next++;
	
	if (last <= next->last)
	{
	    // Bottom is contained in next.
	    // Adjust the clip size.
	    start->last = next->last;	
	    goto crunch;
	}
    }
	
    // There is a fragment after *next.
    R_StoreWallRange (next->last + 1, last);
    // Adjust the clip size.
    start->last = last;
	
    // Remove start+1 to next from the clip list,
    // because start now covers their area.
  crunch:
    if (next == start)
    {
	// Post just extended past the bottom of one post.
	return;
    }
    

    while (next++ != newend)
    {
	// Remove a post.
	*++start = *next;
    }

    newend = start+1;
}



//
// R_ClipPassWallSegment
// Clips the given range of columns,
//  but does not includes it in the clip list.
// Does handle windows,
//  e.g. LineDefs with upper and lower texture.
//
void
R_ClipPassWallSegment
( int	first,
  int	last )
{
    cliprange_t*	start;

    // Find the first range that touches the range
    //  (adjacent pixels are touching).
    start = solidsegs;
    while (start->last < first-1)
	start++;

    if (first < start->first)
    {
	if (last < start->first-1)
	{
	    // Post is entirely visible (above start).
	    R_StoreWallRange (first, last);
	    return;
	}
		
	// There is a fragment above *start.
	R_StoreWallRange (first, start->first - 1);
    }

    // Bottom contained in start?
    if (last <= start->last)
	return;			
		
    while (last >= (start+1)->first-1)
    {
	// There is a fragment between two posts.
	R_StoreWallRange (start->last + 1, (start+1)->first - 1);
	start++;
	
	if (last <= start->last)
	    return;
    }
	
    // There is a fragment after *next.
    R_StoreWallRange (start->last + 1, last);
}



//
// R_ClearClipSegs
//
void R_ClearClipSegs (void)
{
    solidsegs[0].first = -0x7fffffff;
    solidsegs[0].last = -1;
    solidsegs[1].first = viewwidth;
    solidsegs[1].last = 0x7fffffff;
    newend = solidsegs+2;
}

//
// R_AddLine
// Clips the given segment
// and adds any visible pieces to the line list.
//
void R_AddLine (seg_t*	line)
{
    int			x1;
    int			x2;
    angle_t		angle1;
    angle_t		angle2;
    angle_t		span;
    angle_t		tspan;
    
    curline = line;

    // OPTIMIZE: quickly reject orthogonal back sides.
    angle1 = R_PointToAngle (line->v1->x, line->v1->y);
    angle2 = R_PointToAngle (line->v2->x, line->v2->y);
    
    // Clip to view edges.
    // OPTIMIZE: make constant out of 2*clipangle (FIELDOFVIEW).
    span = angle1 - angle2;
    
    // Back side? I.e. backface culling?
    if (span >= ANG180)
	return;		

    // Global angle needed by segcalc.
    rw_angle1 = angle1;
    angle1 -= viewangle;
    angle2 -= viewangle;
	
    tspan = angle1 + clipangle;
    if (tspan > 2*clipangle)
    {
	tspan -= 2*clipangle;

	// Totally off the left edge?
	if (tspan >= span)
	    return;
	
	angle1 = clipangle;
    }
    tspan = clipangle - angle2;
    if (tspan > 2*clipangle)
    {
	tspan -= 2*clipangle;

	// Totally off the left edge?
	if (tspan >= span)
	    return;	
	angle2 = -clipangle;
    }
    
    // The seg is in the view range,
    // but not necessarily visible.
    angle1 = (angle1+ANG90)>>ANGLETOFINESHIFT;
    angle2 = (angle2+ANG90)>>ANGLETOFINESHIFT;
    x1 = viewangletox[angle1];
    x2 = viewangletox[angle2];

    // Does not cross a pixel?
    if (x1 == x2)
	return;				
	
    backsector = line->backsector;

    // Single sided line?
    if (!backsector)
	goto clipsolid;		

    // Closed door.
    if (backsector->ceilingheight <= frontsector->floorheight
	|| backsector->floorheight >= frontsector->ceilingheight)
	goto clipsolid;		

    // Window.
    if (backsector->ceilingheight != frontsector->ceilingheight
	|| backsector->floorheight != frontsector->floorheight)
	goto clippass;	
		
    // Reject empty lines used for triggers
    //  and special events.
    // Identical floor and ceiling on both sides,
    // identical light levels on both sides,
    // and no middle texture.
    if (backsector->ceilingpic == frontsector->ceilingpic
	&& backsector->floorpic == frontsector->floorpic
	&& backsector->lightlevel == frontsector->lightlevel
	&& curline->sidedef->midtexture == 0)
    {
	return;
    }
    
				
  clippass:
    R_ClipPassWallSegment (x1, x2-1);	
    return;
		
  clipsolid:
    R_ClipSolidWallSegment (x1, x2-1);
}


//
// R_CheckBBox
// Checks BSP node/subtree bounding box.
// Returns true
//  if some part of the bbox might be visible.
//
int	checkcoord[12][4] =
{
    {3,0,2,1},
    {3,0,2,0},
    {3,1,2,0},
    {0},
    {2,0,2,1},
    {0,0,0,0},
    {3,1,3,0},
    {0},
    {2,0,3,1},
    {2,1,3,1},
    {2,1,3,0}
};


boolean R_CheckBBox (fixed_t*	bspcoord)
{
    int			boxx;
    int			boxy;
    int			boxpos;

    fixed_t		x1;
    fixed_t		y1;
    fixed_t		x2;
    fixed_t		y2;
    
    angle_t		angle1;
    angle_t		angle2;
    angle_t		span;
    angle_t		tspan;
    
    cliprange_t*	start;

    int			sx1;
    int			sx2;
    
    // Find the corners of the box
    // that define the edges from current viewpoint.
    if (viewx <= bspcoord[BOXLEFT])
	boxx = 0;
    else if (viewx < bspcoord[BOXRIGHT])
	boxx = 1;
    else
	boxx = 2;
		
    if (viewy >= bspcoord[BOXTOP])
	boxy = 0;
    else if (viewy > bspcoord[BOXBOTTOM])
	boxy = 1;
    else
	boxy = 2;
		
    boxpos = (boxy<<2)+boxx;
    if (boxpos == 5)
	return true;
	
    x1 = bspcoord[checkcoord[boxpos][0]];
    y1 = bspcoord[checkcoord[boxpos][1]];
    x2 = bspcoord[checkcoord[boxpos][2]];
    y2 = bspcoord[checkcoord[boxpos][3]];
    
    // check clip list for an open space
    angle1 = R_PointToAngle (x1, y1) - viewangle;
    angle2 = R_PointToAngle (x2, y2) - viewangle;
	
    span = angle1 - angle2;

    // Sitting on a line?
    if (span >= ANG180)
	return true;
    
    tspan = angle1 + clipangle;

    if (tspan > 2*clipangle)
    {
	tspan -= 2*clipangle;

	// Totally off the left edge?
	if (tspan >= span)
	    return false;	

	angle1 = clipangle;
    }
    tspan = clipangle - angle2;
    if (tspan > 2*clipangle)
    {
	tspan -= 2*clipangle;

	// Totally off the left edge?
	if (tspan >= span)
	    return false;
	
	angle2 = -clipangle;
    }


    // Find the first clippost
    //  that touches the source post
    //  (adjacent pixels are touching).
    angle1 = (angle1+ANG90)>>ANGLETOFINESHIFT;
    angle2 = (angle2+ANG90)>>ANGLETOFINESHIFT;
    sx1 = viewangletox[angle1];
    sx2 = viewangletox[angle2];

    // Does not cross a pixel.
    if (sx1 == sx2)
	return false;			
    sx2--;
	
    start = solidsegs;
    while (start->last < sx2)
	start++;
    
    if (sx1 >= start->first
	&& sx2 <= start->last)
    {
	// The clippost contains the new span.
	return false;
    }

    return true;
}



//
// R_Subsector
// Determine floor/ceiling planes.
// Add sprites of things in sector.
// Draw one or more line segments.
//
void R_Subsector (int num)
{
    int			count;
    seg_t*		line;
    subsector_t*	sub;
	
#ifdef RANGECHECK
    if (num>=numsubsectors)
	I_Error ("R_Subsector: ss %i with numss = %i",
		 num,
		 numsubsectors);
#endif

    sscount++;
    sub = &subsectors[num];
    frontsector = sub->sector;
    count = sub->numlines;
    line = &segs[sub->firstline];

    if (frontsector->floorheight < viewz)
    {
	floorplane = R_FindPlane (frontsector->floorheight,
				  frontsector->floorpic,
				  frontsector->lightlevel);
    }
    else
	floorplane = NULL;
    
    if (frontsector->ceilingheight > viewz 
	|| frontsector->ceilingpic == skyflatnum)
    {
	ceilingplane = R_FindPlane (frontsector->ceilingheight,
				    frontsector->ceilingpic,
				    frontsector->lightlevel);
    }
    else
	ceilingplane = NULL;
		
    R_AddSprites (frontsector);	

    while (count--)
    {
	R_AddLine (line);
	line++;
    }
}




//
// RenderBSPNode
// Renders all subsectors below a given node,
//  traversing subtree recursively.
// Just call with BSP root.
void R_RenderBSPNode (int bspnum)
{
    node_t*	bsp;
    int		side;

    // Found a subsector?
    if (bspnum & NF_SUBSECTOR)
    {
	if (bspnum == -1)			
	    R_Subsector (0);
	else
	    R_Subsector (bspnum&(~NF_SUBSECTOR));
	return;
    }
		
    bsp = &nodes[bspnum];
    
    // Decide which side the view point is on.
    side = R_PointOnSide (viewx, viewy, bsp);

    // Recursively divide front space.
    R_RenderBSPNode (bsp->children[side]); 

    // Possibly divide back space.
    if (R_CheckBBox (bsp->bbox[side^1]))	
	R_RenderBSPNode (bsp->children[side^1]);
}

