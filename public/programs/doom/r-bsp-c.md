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
description: "This file contains the BSP traversal and rendering logic for DOOM, a foundational piece of its groundbreaking 3D graphics engine."

summary:
  - point: "Implements BSP traversal for efficient rendering"
    link: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    link_label: "Binary Space Partitioning"
  - point: "Optimizes visibility checks with clipping techniques"
    link: "https://en.wikipedia.org/wiki/Clipping_(computer_graphics)"
    link_label: "Clipping in Computer Graphics"
  - point: "Pushes the limits of 1993-era consumer hardware"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "Introduces recursive BSP traversal for real-time rendering"
    link: "https://en.wikipedia.org/wiki/DOOM_engine"
    link_label: "DOOM Engine"
  - point: "Influenced modern game engines like Unreal and Unity"
    link: "https://en.wikipedia.org/wiki/Game_engine"
    link_label: "Game Engine"

enhancements:
  - id: "clear-drawsegs-initializes-rendering-buffer"
    line_start: 64
    line_end: 237
    title: "Clear DrawSegs: Initializes Rendering Buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "This function resets the draw segment buffer (`drawsegs`) by pointing the buffer pointer (`ds_p`) to the start of the array. This simple initialization step is crucial for ensuring that each frame starts with a clean slate for rendering visible line segments. In 1993, memory management was a critical concern due to limited hardware resources, and this approach reflects the careful attention to efficiency required in DOOM's design. By clearing the buffer before rendering, DOOM avoids artifacts and ensures consistent visuals. This technique of resetting buffers before use became a standard practice in graphics programming, influencing later engines like Unreal and Unity."
  - id: "clip-solid-wall-segment-handles-occlusion"
    line_start: 96
    line_end: 184
    title: "ClipSolidWallSegment: Handles Occlusion Efficiently"
    wikipedia_url: "https://en.wikipedia.org/wiki/Visibility_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "This function clips solid wall segments, ensuring that only visible portions of walls are rendered. It uses a range-based approach to determine visibility and updates the clipping list accordingly. In the early 1990s, visibility determination was a major challenge in real-time graphics due to the lack of hardware acceleration. John Carmack's implementation here is a masterclass in efficiency, leveraging binary space partitioning (BSP) to minimize rendering overhead. The function's careful handling of edge cases, such as overlapping or adjacent segments, reflects the precision required to achieve DOOM's smooth performance on hardware like the 486 processor. This approach influenced later games and engines, embedding BSP-based visibility checks into the DNA of real-time rendering."
  - id: "clip-pass-wall-segment-renders-windows"
    line_start: 192
    line_end: 237
    title: "ClipPassWallSegment: Renders Transparent Windows"
    wikipedia_url: "https://en.wikipedia.org/wiki/Transparency_(graphic)"
    image_url: ""
    image_caption: ""
    content: "This function clips wall segments that represent windows or other transparent surfaces. Unlike solid walls, these segments allow partial visibility of objects behind them. The function ensures that only the visible portions of these segments are rendered, avoiding unnecessary computations for occluded areas. In DOOM, this technique enabled the creation of complex environments with varied textures and transparency effects, a significant leap forward in immersive game design. The handling of transparent surfaces here laid the groundwork for more advanced techniques in later engines, such as alpha blending and shader-based transparency in modern 3D graphics."
  - id: "clear-clipsegs-initializes-clipping-list"
    line_start: 241
    line_end: 251
    title: "ClearClipSegs: Initializes Clipping List"
    wikipedia_url: "https://en.wikipedia.org/wiki/Clipping_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "This function initializes the clipping list (`solidsegs`) with two default segments: one representing the leftmost edge of the screen and the other the rightmost edge. This setup ensures that all subsequent clipping operations are bounded within the visible area. In DOOM, efficient clipping was essential for maintaining high performance on limited hardware. By predefining these bounds, the engine avoids unnecessary checks and simplifies the logic for handling visibility. This approach to clipping initialization became a common optimization in real-time rendering systems, influencing techniques used in later games and engines."
  - id: "add-line-clips-and-renders-visible-segments"
    line_start: 253
    line_end: 355
    title: "AddLine: Clips and Renders Visible Segments"
    wikipedia_url: "https://en.wikipedia.org/wiki/Backface_culling"
    image_url: ""
    image_caption: ""
    content: "The `R_AddLine` function clips a line segment to the player's view and adds any visible portions to the rendering list. It incorporates backface culling to exclude segments facing away from the player, optimizing rendering performance. This function also handles special cases like doors and windows, ensuring that only relevant geometry is processed. In the context of 1993 hardware, these optimizations were critical for achieving DOOM's fast-paced gameplay. The use of backface culling and view clipping here influenced later engines, embedding these techniques as standard practices in real-time 3D graphics."
  - id: "check-bbox-tests-visibility-of-subtrees"
    line_start: 380
    line_end: 486
    title: "CheckBBox: Tests Visibility of BSP Subtrees"
    wikipedia_url: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    image_url: ""
    image_caption: ""
    content: "The `R_CheckBBox` function determines whether a bounding box in the BSP tree might be visible from the player's viewpoint. It uses angle calculations and clipping checks to efficiently reject invisible subtrees, reducing the number of polygons processed during rendering. This technique was pivotal in DOOM's ability to render complex environments on limited hardware. By leveraging BSP traversal and bounding box checks, the engine minimized computational overhead, enabling smooth gameplay even on early PCs. The concept of bounding box visibility testing became a cornerstone of real-time rendering, influencing techniques in engines like Quake and Unreal."
  - id: "subsector-handles-floor-ceiling-and-sprites"
    line_start: 490
    line_end: 541
    title: "Subsector: Handles Floor, Ceiling, and Sprites"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_engine"
    image_url: ""
    image_caption: ""
    content: "The `R_Subsector` function processes a single subsector in the BSP tree, determining floor and ceiling planes, adding sprites, and rendering line segments. This function encapsulates the core rendering logic for DOOM's environments, combining geometry, textures, and objects into a seamless visual experience. In 1993, this level of integration was groundbreaking, enabling DOOM to create immersive 3D worlds on consumer hardware. The subsector-based rendering approach influenced later engines, including Quake, which expanded on these ideas to support fully 3D environments."
  - id: "render-bsp-node-recursive-traversal-for-rendering"
    line_start: 546
    line_end: 577
    title: "RenderBSPNode: Recursive Traversal for Rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    image_url: ""
    image_caption: ""
    content: "The `R_RenderBSPNode` function recursively traverses the BSP tree, rendering all subsectors below a given node. It uses visibility checks (`R_CheckBBox`) to avoid processing occluded subtrees, optimizing performance. This recursive approach was a key innovation in DOOM's engine, enabling efficient rendering of complex environments on limited hardware. The use of BSP traversal for real-time rendering became a defining feature of the DOOM engine, influencing subsequent engines like Quake and Unreal, which expanded on these ideas to support more advanced graphics and physics."

---

```cpp
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


```