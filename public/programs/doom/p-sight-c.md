---
title: "p_sight.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/p_sight.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/p_sight.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "p-sight-c"
order: 32
description: "This file implements line-of-sight checks in DOOM, a foundational mechanic for AI behavior and player interaction in the game."

summary:
  - point: "Uses BSP traversal for efficient visibility checks"
    link: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    link_label: "Binary Space Partitioning"
  - point: "Incorporates REJECT table optimization to skip unnecessary checks"
    link: "https://doomwiki.org/wiki/Reject_table"
    link_label: "REJECT Table"
  - point: "Demonstrates early use of fixed-point arithmetic for performance"
    link: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    link_label: "Fixed-Point Arithmetic"

enhancements:
  - id: "divline-side-classification"
    line_start: 279
    line_end: 284
    title: "How DOOM Decides Which Side You're On"
    wikipedia_url: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    image_url: ""
    image_caption: ""
    content: "This function, `P_DivlineSide`, determines whether a point lies on the front, back, or directly on a dividing line in the game's BSP tree. It uses fixed-point arithmetic to calculate the relative position of a point to a line defined by two coordinates (x, y) and directional vectors (dx, dy). At the time, fixed-point arithmetic was a common optimization in games because it avoided the computational overhead of floating-point operations on hardware like the Intel 486. The BSP tree itself was a revolutionary data structure for games, enabling efficient spatial partitioning and visibility checks. John Carmack adapted this technique from academic papers on computer graphics, tailoring it to DOOM's fast-paced gameplay and the constraints of consumer PCs. The approach influenced countless games that followed, including Quake, which refined BSP trees further for real-time 3D environments."
  - id: "intercept-vector-calculation"
    line_start: 104
    line_end: 127
    title: "The Math Behind Line Intersections in DOOM"
    wikipedia_url: "https://en.wikipedia.org/wiki/Line_intersection"
    image_url: ""
    image_caption: ""
    content: "The `P_InterceptVector2` function calculates the fractional point of intersection between two lines, represented as divlines. This is crucial for determining whether the player's line of sight crosses a particular boundary in the game world. The function uses fixed-point arithmetic for precision and performance, avoiding the pitfalls of floating-point inaccuracies on early PC hardware. This technique was part of DOOM's broader strategy to optimize visibility checks, ensuring smooth gameplay even on systems with limited processing power. By calculating intersections efficiently, DOOM could handle complex environments with numerous walls and objects without significant slowdowns. The method was later studied by developers of other 3D engines, influencing techniques in games like Unreal and Half-Life."
  - id: "cross-subsector-visibility-check"
    line_start: 129
    line_end: 247
    title: "How DOOM Determines If You Can See Through a Room"
    wikipedia_url: "https://doomwiki.org/wiki/Subsector"
    image_url: ""
    image_caption: ""
    content: "`P_CrossSubsector` checks whether the player's line of sight crosses a given subsector in the BSP tree. It iterates through all the lines in the subsector, determining if any block visibility based on their properties, such as floor and ceiling heights. The function uses the REJECT table to skip unnecessary checks, a clever optimization that precomputes visibility relationships between sectors. This approach was critical for DOOM's performance, enabling it to run smoothly on hardware with limited memory and processing power. The subsector-based visibility checks laid the groundwork for efficient spatial partitioning in later games, influencing engines like Quake and Unreal Engine."
  - id: "cross-bsp-node-traversal"
    line_start: 251
    line_end: 289
    title: "The Recursive Algorithm That Powers DOOM's BSP Tree"
    wikipedia_url: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    image_url: ""
    image_caption: ""
    content: "`P_CrossBSPNode` is a recursive function that traverses the BSP tree to determine if the player's line of sight crosses a given node. It uses `P_DivlineSide` to decide which side of the node the line starts on and recursively checks both sides if necessary. This traversal is the backbone of DOOM's visibility system, allowing the game to efficiently determine what the player can see in complex environments. The recursive nature of the function reflects the hierarchical structure of BSP trees, which were adapted from computer graphics research for use in real-time games. The technique became a standard in game development, influencing engines like Source and Unity."
  - id: "reject-table-optimization"
    line_start: 297
    line_end: 345
    title: "The Table That Made DOOM Run Faster"
    wikipedia_url: "https://doomwiki.org/wiki/Reject_table"
    image_url: ""
    image_caption: ""
    content: "`P_CheckSight` uses the REJECT table to quickly determine if visibility checks between two sectors are unnecessary. The table precomputes relationships between sectors, allowing the game to skip expensive line-of-sight calculations for pairs of sectors that cannot possibly be connected. This optimization was essential for DOOM's performance, as it reduced the computational overhead of visibility checks in large and complex maps. The REJECT table exemplifies DOOM's innovative use of preprocessing to overcome hardware limitations, a technique that inspired similar optimizations in later games and engines. Developers studying DOOM's source code have praised this approach for its simplicity and effectiveness."

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
//	LineOfSight/Visibility checks, uses REJECT Lookup Table.
//
//-----------------------------------------------------------------------------

static const char
rcsid[] = "$Id: p_sight.c,v 1.3 1997/01/28 22:08:28 b1 Exp $";


#include "doomdef.h"

#include "i_system.h"
#include "p_local.h"

// State.
#include "r_state.h"

//
// P_CheckSight
//
fixed_t		sightzstart;		// eye z of looker
fixed_t		topslope;
fixed_t		bottomslope;		// slopes to top and bottom of target

divline_t	strace;			// from t1 to t2
fixed_t		t2x;
fixed_t		t2y;

int		sightcounts[2];


//
// P_DivlineSide
// Returns side 0 (front), 1 (back), or 2 (on).
//
int
P_DivlineSide
( fixed_t	x,
  fixed_t	y,
  divline_t*	node )
{
    fixed_t	dx;
    fixed_t	dy;
    fixed_t	left;
    fixed_t	right;

    if (!node->dx)
    {
	if (x==node->x)
	    return 2;
	
	if (x <= node->x)
	    return node->dy > 0;

	return node->dy < 0;
    }
    
    if (!node->dy)
    {
	if (x==node->y)
	    return 2;

	if (y <= node->y)
	    return node->dx < 0;

	return node->dx > 0;
    }
	
    dx = (x - node->x);
    dy = (y - node->y);

    left =  (node->dy>>FRACBITS) * (dx>>FRACBITS);
    right = (dy>>FRACBITS) * (node->dx>>FRACBITS);
	
    if (right < left)
	return 0;	// front side
    
    if (left == right)
	return 2;
    return 1;		// back side
}


//
// P_InterceptVector2
// Returns the fractional intercept point
// along the first divline.
// This is only called by the addthings and addlines traversers.
//
fixed_t
P_InterceptVector2
( divline_t*	v2,
  divline_t*	v1 )
{
    fixed_t	frac;
    fixed_t	num;
    fixed_t	den;
	
    den = FixedMul (v1->dy>>8,v2->dx) - FixedMul(v1->dx>>8,v2->dy);

    if (den == 0)
	return 0;
    //	I_Error ("P_InterceptVector: parallel");
    
    num = FixedMul ( (v1->x - v2->x)>>8 ,v1->dy) + 
	FixedMul ( (v2->y - v1->y)>>8 , v1->dx);
    frac = FixedDiv (num , den);

    return frac;
}

//
// P_CrossSubsector
// Returns true
//  if strace crosses the given subsector successfully.
//
boolean P_CrossSubsector (int num)
{
    seg_t*		seg;
    line_t*		line;
    int			s1;
    int			s2;
    int			count;
    subsector_t*	sub;
    sector_t*		front;
    sector_t*		back;
    fixed_t		opentop;
    fixed_t		openbottom;
    divline_t		divl;
    vertex_t*		v1;
    vertex_t*		v2;
    fixed_t		frac;
    fixed_t		slope;
	
#ifdef RANGECHECK
    if (num>=numsubsectors)
	I_Error ("P_CrossSubsector: ss %i with numss = %i",
		 num,
		 numsubsectors);
#endif

    sub = &subsectors[num];
    
    // check lines
    count = sub->numlines;
    seg = &segs[sub->firstline];

    for ( ; count ; seg++, count--)
    {
	line = seg->linedef;

	// allready checked other side?
	if (line->validcount == validcount)
	    continue;
	
	line->validcount = validcount;
		
	v1 = line->v1;
	v2 = line->v2;
	s1 = P_DivlineSide (v1->x,v1->y, &strace);
	s2 = P_DivlineSide (v2->x, v2->y, &strace);

	// line isn't crossed?
	if (s1 == s2)
	    continue;
	
	divl.x = v1->x;
	divl.y = v1->y;
	divl.dx = v2->x - v1->x;
	divl.dy = v2->y - v1->y;
	s1 = P_DivlineSide (strace.x, strace.y, &divl);
	s2 = P_DivlineSide (t2x, t2y, &divl);

	// line isn't crossed?
	if (s1 == s2)
	    continue;	

	// stop because it is not two sided anyway
	// might do this after updating validcount?
	if ( !(line->flags & ML_TWOSIDED) )
	    return false;
	
	// crosses a two sided line
	front = seg->frontsector;
	back = seg->backsector;

	// no wall to block sight with?
	if (front->floorheight == back->floorheight
	    && front->ceilingheight == back->ceilingheight)
	    continue;	

	// possible occluder
	// because of ceiling height differences
	if (front->ceilingheight < back->ceilingheight)
	    opentop = front->ceilingheight;
	else
	    opentop = back->ceilingheight;

	// because of ceiling height differences
	if (front->floorheight > back->floorheight)
	    openbottom = front->floorheight;
	else
	    openbottom = back->floorheight;
		
	// quick test for totally closed doors
	if (openbottom >= opentop)	
	    return false;		// stop
	
	frac = P_InterceptVector2 (&strace, &divl);
		
	if (front->floorheight != back->floorheight)
	{
	    slope = FixedDiv (openbottom - sightzstart , frac);
	    if (slope > bottomslope)
		bottomslope = slope;
	}
		
	if (front->ceilingheight != back->ceilingheight)
	{
	    slope = FixedDiv (opentop - sightzstart , frac);
	    if (slope < topslope)
		topslope = slope;
	}
		
	if (topslope <= bottomslope)
	    return false;		// stop				
    }
    // passed the subsector ok
    return true;		
}



//
// P_CrossBSPNode
// Returns true
//  if strace crosses the given node successfully.
//
boolean P_CrossBSPNode (int bspnum)
{
    node_t*	bsp;
    int		side;

    if (bspnum & NF_SUBSECTOR)
    {
	if (bspnum == -1)
	    return P_CrossSubsector (0);
	else
	    return P_CrossSubsector (bspnum&(~NF_SUBSECTOR));
    }
		
    bsp = &nodes[bspnum];
    
    // decide which side the start point is on
    side = P_DivlineSide (strace.x, strace.y, (divline_t *)bsp);
    if (side == 2)
	side = 0;	// an "on" should cross both sides

    // cross the starting side
    if (!P_CrossBSPNode (bsp->children[side]) )
	return false;
	
    // the partition plane is crossed here
    if (side == P_DivlineSide (t2x, t2y,(divline_t *)bsp))
    {
	// the line doesn't touch the other side
	return true;
    }
    
    // cross the ending side		
    return P_CrossBSPNode (bsp->children[side^1]);
}


//
// P_CheckSight
// Returns true
//  if a straight line between t1 and t2 is unobstructed.
// Uses REJECT.
//
boolean
P_CheckSight
( mobj_t*	t1,
  mobj_t*	t2 )
{
    int		s1;
    int		s2;
    int		pnum;
    int		bytenum;
    int		bitnum;
    
    // First check for trivial rejection.

    // Determine subsector entries in REJECT table.
    s1 = (t1->subsector->sector - sectors);
    s2 = (t2->subsector->sector - sectors);
    pnum = s1*numsectors + s2;
    bytenum = pnum>>3;
    bitnum = 1 << (pnum&7);

    // Check in REJECT table.
    if (rejectmatrix[bytenum]&bitnum)
    {
	sightcounts[0]++;

	// can't possibly be connected
	return false;	
    }

    // An unobstructed LOS is possible.
    // Now look from eyes of t1 to any part of t2.
    sightcounts[1]++;

    validcount++;
	
    sightzstart = t1->z + t1->height - (t1->height>>2);
    topslope = (t2->z+t2->height) - sightzstart;
    bottomslope = (t2->z) - sightzstart;
	
    strace.x = t1->x;
    strace.y = t1->y;
    t2x = t2->x;
    t2y = t2->y;
    strace.dx = t2->x - t1->x;
    strace.dy = t2->y - t1->y;

    // the head node is the last node output
    return P_CrossBSPNode (numnodes-1);	
}


```