---
title: "r_edge.c"
program: "Quake"
program_slug: "quake"
file_path: "QW/client/r_edge.c"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/Quake/blob/master/QW/client/r_edge.c"
year: 1996
author: "John Carmack, Michael Abrash, John Cash"
slug: "r-edge-c"
order: 10
description: "This file implements edge processing and span generation for Quake's software renderer, showcasing advanced techniques for real-time 3D graphics on mid-1990s hardware."

summary:
  - point: "Edge sorting and span generation for visibility determination"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Optimization for x86 processors and memory constraints"
    link: "https://en.wikipedia.org/wiki/X86"
    link_label: "x86 architecture"
  - point: "Innovative use of linked lists for active edge management"
    link: "https://en.wikipedia.org/wiki/Linked_list"
    link_label: "Linked lists"
  - point: "Back-to-front rendering for transparency and depth sorting"
    link: "https://en.wikipedia.org/wiki/Z-buffering"
    link_label: "Z-buffering"
  - point: "Influence on modern game engines and rendering pipelines"
    link: "https://en.wikipedia.org/wiki/Game_engine"
    link_label: "Game engines"

enhancements:
  - id: "r-draw-culled-polys"
    line_start: 79
    line_end: 119
    title: "Back-to-front polygon rendering logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Z-buffering"
    image_url: ""
    image_caption: ""
    content: "This subroutine, `R_DrawCulledPolys`, handles the rendering of polygons based on their visibility and depth order. The function iterates through surfaces either back-to-front or front-to-back, depending on the rendering mode, ensuring proper handling of transparency and occlusion. At the time of Quake's development, hardware lacked dedicated Z-buffering capabilities, making this software-based approach essential for achieving correct visual results. John Carmack and Michael Abrash, renowned for their expertise in graphics programming, developed techniques like this to maximize performance on limited hardware. This approach influenced later game engines, which adopted similar visibility sorting methods before hardware Z-buffering became standard."
  - id: "r-begin-edge-frame"
    line_start: 122
    line_end: 156
    title: "Initializing edge and surface data structures"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `R_BeginEdgeFrame` function sets up the data structures for edge and surface processing, including initializing pointers and flags. This step is critical for organizing the rendering pipeline, as it prepares the linked lists and arrays used for edge sorting and span generation. The decision to use linked lists and arrays reflects the constraints of 1990s hardware, where memory and computational resources were limited. By carefully structuring data, the developers ensured efficient traversal and manipulation during rendering. This initialization routine exemplifies the meticulous optimization required to achieve real-time 3D graphics on systems like the Intel 486 and early Pentium processors."
  - id: "r-insert-new-edges"
    line_start: 163
    line_end: 202
    title: "Edge insertion into active edge table"
    wikipedia_url: "https://en.wikipedia.org/wiki/Linked_list"
    image_url: ""
    image_caption: ""
    content: "The `R_InsertNewEdges` function adds new edges to the active edge table, maintaining their sorted order based on screen position. This linked-list-based approach allows efficient insertion and traversal, which is crucial for real-time rendering. The active edge table represents the edges currently being processed for span generation, a key step in determining visible portions of surfaces. The use of linked lists here reflects the need for dynamic data structures that can adapt to changing scene geometry during rendering. Techniques like this laid the groundwork for more advanced visibility determination methods in later game engines."
  - id: "r-step-active-u"
    line_start: 229
    line_end: 292
    title: "Updating edge positions during scanline processing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Scanline_rendering"
    image_url: ""
    image_caption: ""
    content: "The `R_StepActiveU` function updates the horizontal positions of edges as the renderer processes each scanline. This step ensures that edges remain correctly sorted and aligned with the current scanline, enabling accurate span generation. The function includes logic to handle cases where edges need to be pushed back into the list to maintain order. This meticulous attention to edge sorting and positioning highlights the challenges of implementing a software renderer capable of real-time performance. Techniques like this influenced later rendering systems, which automated similar processes using hardware acceleration."
  - id: "r-cleanup-span"
    line_start: 297
    line_end: 328
    title: "Finalizing spans at the end of scanlines"
    wikipedia_url: "https://en.wikipedia.org/wiki/Span_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `R_CleanupSpan` function emits spans for unfinished surfaces and resets span states for all active surfaces. Spans represent contiguous horizontal segments of surfaces that are visible on the screen. By finalizing spans at the end of each scanline, the renderer ensures that all visible portions of surfaces are accounted for before moving to the next scanline. This approach was a key innovation in software rendering, allowing Quake to achieve high performance and visual fidelity on hardware without dedicated graphics acceleration. The concept of spans continues to influence modern rendering techniques, particularly in rasterization pipelines."
  - id: "r-generate-spans"
    line_start: 583
    line_end: 617
    title: "Span generation for forward rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rasterization_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `R_GenerateSpans` function processes edges to generate spans for visible surfaces, iterating through the active edge table and handling leading and trailing edges. This forward rendering approach calculates spans in a front-to-back order, ensuring proper depth sorting and visibility determination. The function's design reflects the constraints of software rendering, where efficient algorithms were essential to achieve real-time performance. By leveraging linked lists and careful edge processing, the developers created a robust system for span generation that influenced later rasterization techniques in both software and hardware-based renderers."
  - id: "r-scan-edges"
    line_start: 651
    line_end: 768
    title: "Processing edges to generate visible spans"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rasterization_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `R_ScanEdges` function represents the culmination of Quake's edge processing pipeline, iterating through scanlines to generate visible spans for surfaces. It integrates edge insertion, span generation, and cleanup into a cohesive process that determines the visible portions of surfaces for rendering. This function exemplifies the complexity of software rendering, where every step must be carefully optimized to achieve real-time performance on limited hardware. The techniques developed here, including linked-list-based edge management and span processing, influenced the design of modern rendering pipelines, particularly in the transition to hardware-accelerated graphics."

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
// r_edge.c

#include "quakedef.h"
#include "r_local.h"

#if 0
// FIXME
the complex cases add new polys on most lines, so dont optimize for keeping them the same
have multiple free span lists to try to get better coherence?
low depth complexity -- 1 to 3 or so

this breaks spans at every edge, even hidden ones (bad)

have a sentinal at both ends?
#endif


edge_t	*auxedges;
edge_t	*r_edges, *edge_p, *edge_max;

surf_t	*surfaces, *surface_p, *surf_max;

// surfaces are generated in back to front order by the bsp, so if a surf
// pointer is greater than another one, it should be drawn in front
// surfaces[1] is the background, and is used as the active surface stack

edge_t	*newedges[MAXHEIGHT];
edge_t	*removeedges[MAXHEIGHT];

espan_t	*span_p, *max_span_p;

int		r_currentkey;

extern	int	screenwidth;

int	current_iv;

int	edge_head_u_shift20, edge_tail_u_shift20;

static void (*pdrawfunc)(void);

edge_t	edge_head;
edge_t	edge_tail;
edge_t	edge_aftertail;
edge_t	edge_sentinel;

float	fv;

void R_GenerateSpans (void);
void R_GenerateSpansBackward (void);

void R_LeadingEdge (edge_t *edge);
void R_LeadingEdgeBackwards (edge_t *edge);
void R_TrailingEdge (surf_t *surf, edge_t *edge);


//=============================================================================


/*
==============
R_DrawCulledPolys
==============
*/
void R_DrawCulledPolys (void)
{
	surf_t			*s;
	msurface_t		*pface;

	currententity = &r_worldentity;

	if (r_worldpolysbacktofront)
	{
		for (s=surface_p-1 ; s>&surfaces[1] ; s--)
		{
			if (!s->spans)
				continue;

			if (!(s->flags & SURF_DRAWBACKGROUND))
			{
				pface = (msurface_t *)s->data;
				R_RenderPoly (pface, 15);
			}
		}
	}
	else
	{
		for (s = &surfaces[1] ; s<surface_p ; s++)
		{
			if (!s->spans)
				continue;

			if (!(s->flags & SURF_DRAWBACKGROUND))
			{
				pface = (msurface_t *)s->data;
				R_RenderPoly (pface, 15);
			}
		}
	}
}


/*
==============
R_BeginEdgeFrame
==============
*/
void R_BeginEdgeFrame (void)
{
	int		v;

	edge_p = r_edges;
	edge_max = &r_edges[r_numallocatededges];

	surface_p = &surfaces[2];	// background is surface 1,
								//  surface 0 is a dummy
	surfaces[1].spans = NULL;	// no background spans yet
	surfaces[1].flags = SURF_DRAWBACKGROUND;

// put the background behind everything in the world
	if (r_draworder.value)
	{
		pdrawfunc = R_GenerateSpansBackward;
		surfaces[1].key = 0;
		r_currentkey = 1;
	}
	else
	{
		pdrawfunc = R_GenerateSpans;
		surfaces[1].key = 0x7FFFFFFF;
		r_currentkey = 0;
	}

// FIXME: set with memset
	for (v=r_refdef.vrect.y ; v<r_refdef.vrectbottom ; v++)
	{
		newedges[v] = removeedges[v] = NULL;
	}
}


#if	!id386

/*
==============
R_InsertNewEdges

Adds the edges in the linked list edgestoadd, adding them to the edges in the
linked list edgelist.  edgestoadd is assumed to be sorted on u, and non-empty (this is actually newedges[v]).  edgelist is assumed to be sorted on u, with a
sentinel at the end (actually, this is the active edge table starting at
edge_head.next).
==============
*/
void R_InsertNewEdges (edge_t *edgestoadd, edge_t *edgelist)
{
	edge_t	*next_edge;

	do
	{
		next_edge = edgestoadd->next;
edgesearch:
		if (edgelist->u >= edgestoadd->u)
			goto addedge;
		edgelist=edgelist->next;
		if (edgelist->u >= edgestoadd->u)
			goto addedge;
		edgelist=edgelist->next;
		if (edgelist->u >= edgestoadd->u)
			goto addedge;
		edgelist=edgelist->next;
		if (edgelist->u >= edgestoadd->u)
			goto addedge;
		edgelist=edgelist->next;
		goto edgesearch;

	// insert edgestoadd before edgelist
addedge:
		edgestoadd->next = edgelist;
		edgestoadd->prev = edgelist->prev;
		edgelist->prev->next = edgestoadd;
		edgelist->prev = edgestoadd;
	} while ((edgestoadd = next_edge) != NULL);
}

#endif	// !id386
	

#if	!id386

/*
==============
R_RemoveEdges
==============
*/
void R_RemoveEdges (edge_t *pedge)
{

	do
	{
		pedge->next->prev = pedge->prev;
		pedge->prev->next = pedge->next;
	} while ((pedge = pedge->nextremove) != NULL);
}

#endif	// !id386


#if	!id386

/*
==============
R_StepActiveU
==============
*/
void R_StepActiveU (edge_t *pedge)
{
	edge_t		*pnext_edge, *pwedge;

	while (1)
	{
nextedge:
		pedge->u += pedge->u_step;
		if (pedge->u < pedge->prev->u)
			goto pushback;
		pedge = pedge->next;
			
		pedge->u += pedge->u_step;
		if (pedge->u < pedge->prev->u)
			goto pushback;
		pedge = pedge->next;
			
		pedge->u += pedge->u_step;
		if (pedge->u < pedge->prev->u)
			goto pushback;
		pedge = pedge->next;
			
		pedge->u += pedge->u_step;
		if (pedge->u < pedge->prev->u)
			goto pushback;
		pedge = pedge->next;
			
		goto nextedge;		
		
pushback:
		if (pedge == &edge_aftertail)
			return;
			
	// push it back to keep it sorted		
		pnext_edge = pedge->next;

	// pull the edge out of the edge list
		pedge->next->prev = pedge->prev;
		pedge->prev->next = pedge->next;

	// find out where the edge goes in the edge list
		pwedge = pedge->prev->prev;

		while (pwedge->u > pedge->u)
		{
			pwedge = pwedge->prev;
		}

	// put the edge back into the edge list
		pedge->next = pwedge->next;
		pedge->prev = pwedge;
		pedge->next->prev = pedge;
		pwedge->next = pedge;

		pedge = pnext_edge;
		if (pedge == &edge_tail)
			return;
	}
}

#endif	// !id386


/*
==============
R_CleanupSpan
==============
*/
void R_CleanupSpan ()
{
	surf_t	*surf;
	int		iu;
	espan_t	*span;

// now that we've reached the right edge of the screen, we're done with any
// unfinished surfaces, so emit a span for whatever's on top
	surf = surfaces[1].next;
	iu = edge_tail_u_shift20;
	if (iu > surf->last_u)
	{
		span = span_p++;
		span->u = surf->last_u;
		span->count = iu - span->u;
		span->v = current_iv;
		span->pnext = surf->spans;
		surf->spans = span;
	}

// reset spanstate for all surfaces in the surface stack
	do
	{
		surf->spanstate = 0;
		surf = surf->next;
	} while (surf != &surfaces[1]);
}


/*
==============
R_LeadingEdgeBackwards
==============
*/
void R_LeadingEdgeBackwards (edge_t *edge)
{
	espan_t			*span;
	surf_t			*surf, *surf2;
	int				iu;

// it's adding a new surface in, so find the correct place
	surf = &surfaces[edge->surfs[1]];

// don't start a span if this is an inverted span, with the end
// edge preceding the start edge (that is, we've already seen the
// end edge)
	if (++surf->spanstate == 1)
	{
		surf2 = surfaces[1].next;

		if (surf->key > surf2->key)
			goto newtop;

	// if it's two surfaces on the same plane, the one that's already
	// active is in front, so keep going unless it's a bmodel
		if (surf->insubmodel && (surf->key == surf2->key))
		{
		// must be two bmodels in the same leaf; don't care, because they'll
		// never be farthest anyway
			goto newtop;
		}

continue_search:

		do
		{
			surf2 = surf2->next;
		} while (surf->key < surf2->key);

		if (surf->key == surf2->key)
		{
		// if it's two surfaces on the same plane, the one that's already
		// active is in front, so keep going unless it's a bmodel
			if (!surf->insubmodel)
				goto continue_search;

		// must be two bmodels in the same leaf; don't care which is really
		// in front, because they'll never be farthest anyway
		}

		goto gotposition;

newtop:
	// emit a span (obscures current top)
		iu = edge->u >> 20;

		if (iu > surf2->last_u)
		{
			span = span_p++;
			span->u = surf2->last_u;
			span->count = iu - span->u;
			span->v = current_iv;
			span->pnext = surf2->spans;
			surf2->spans = span;
		}

		// set last_u on the new span
		surf->last_u = iu;
				
gotposition:
	// insert before surf2
		surf->next = surf2;
		surf->prev = surf2->prev;
		surf2->prev->next = surf;
		surf2->prev = surf;
	}
}


/*
==============
R_TrailingEdge
==============
*/
void R_TrailingEdge (surf_t *surf, edge_t *edge)
{
	espan_t			*span;
	int				iu;

// don't generate a span if this is an inverted span, with the end
// edge preceding the start edge (that is, we haven't seen the
// start edge yet)
	if (--surf->spanstate == 0)
	{
		if (surf->insubmodel)
			r_bmodelactive--;

		if (surf == surfaces[1].next)
		{
		// emit a span (current top going away)
			iu = edge->u >> 20;
			if (iu > surf->last_u)
			{
				span = span_p++;
				span->u = surf->last_u;
				span->count = iu - span->u;
				span->v = current_iv;
				span->pnext = surf->spans;
				surf->spans = span;
			}

		// set last_u on the surface below
			surf->next->last_u = iu;
		}

		surf->prev->next = surf->next;
		surf->next->prev = surf->prev;
	}
}


#if	!id386

/*
==============
R_LeadingEdge
==============
*/
void R_LeadingEdge (edge_t *edge)
{
	espan_t			*span;
	surf_t			*surf, *surf2;
	int				iu;
	double			fu, newzi, testzi, newzitop, newzibottom;

	if (edge->surfs[1])
	{
	// it's adding a new surface in, so find the correct place
		surf = &surfaces[edge->surfs[1]];

	// don't start a span if this is an inverted span, with the end
	// edge preceding the start edge (that is, we've already seen the
	// end edge)
		if (++surf->spanstate == 1)
		{
			if (surf->insubmodel)
				r_bmodelactive++;

			surf2 = surfaces[1].next;

			if (surf->key < surf2->key)
				goto newtop;

		// if it's two surfaces on the same plane, the one that's already
		// active is in front, so keep going unless it's a bmodel
			if (surf->insubmodel && (surf->key == surf2->key))
			{
			// must be two bmodels in the same leaf; sort on 1/z
				fu = (float)(edge->u - 0xFFFFF) * (1.0 / 0x100000);
				newzi = surf->d_ziorigin + fv*surf->d_zistepv +
						fu*surf->d_zistepu;
				newzibottom = newzi * 0.99;

				testzi = surf2->d_ziorigin + fv*surf2->d_zistepv +
						fu*surf2->d_zistepu;

				if (newzibottom >= testzi)
				{
					goto newtop;
				}

				newzitop = newzi * 1.01;
				if (newzitop >= testzi)
				{
					if (surf->d_zistepu >= surf2->d_zistepu)
					{
						goto newtop;
					}
				}
			}

continue_search:

			do
			{
				surf2 = surf2->next;
			} while (surf->key > surf2->key);

			if (surf->key == surf2->key)
			{
			// if it's two surfaces on the same plane, the one that's already
			// active is in front, so keep going unless it's a bmodel
				if (!surf->insubmodel)
					goto continue_search;

			// must be two bmodels in the same leaf; sort on 1/z
				fu = (float)(edge->u - 0xFFFFF) * (1.0 / 0x100000);
				newzi = surf->d_ziorigin + fv*surf->d_zistepv +
						fu*surf->d_zistepu;
				newzibottom = newzi * 0.99;

				testzi = surf2->d_ziorigin + fv*surf2->d_zistepv +
						fu*surf2->d_zistepu;

				if (newzibottom >= testzi)
				{
					goto gotposition;
				}

				newzitop = newzi * 1.01;
				if (newzitop >= testzi)
				{
					if (surf->d_zistepu >= surf2->d_zistepu)
					{
						goto gotposition;
					}
				}

				goto continue_search;
			}

			goto gotposition;

newtop:
		// emit a span (obscures current top)
			iu = edge->u >> 20;

			if (iu > surf2->last_u)
			{
				span = span_p++;
				span->u = surf2->last_u;
				span->count = iu - span->u;
				span->v = current_iv;
				span->pnext = surf2->spans;
				surf2->spans = span;
			}

			// set last_u on the new span
			surf->last_u = iu;
				
gotposition:
		// insert before surf2
			surf->next = surf2;
			surf->prev = surf2->prev;
			surf2->prev->next = surf;
			surf2->prev = surf;
		}
	}
}


/*
==============
R_GenerateSpans
==============
*/
void R_GenerateSpans (void)
{
	edge_t			*edge;
	surf_t			*surf;

	r_bmodelactive = 0;

// clear active surfaces to just the background surface
	surfaces[1].next = surfaces[1].prev = &surfaces[1];
	surfaces[1].last_u = edge_head_u_shift20;

// generate spans
	for (edge=edge_head.next ; edge != &edge_tail; edge=edge->next)
	{			
		if (edge->surfs[0])
		{
		// it has a left surface, so a surface is going away for this span
			surf = &surfaces[edge->surfs[0]];

			R_TrailingEdge (surf, edge);

			if (!edge->surfs[1])
				continue;
		}

		R_LeadingEdge (edge);
	}

	R_CleanupSpan ();
}

#endif	// !id386


/*
==============
R_GenerateSpansBackward
==============
*/
void R_GenerateSpansBackward (void)
{
	edge_t			*edge;

	r_bmodelactive = 0;

// clear active surfaces to just the background surface
	surfaces[1].next = surfaces[1].prev = &surfaces[1];
	surfaces[1].last_u = edge_head_u_shift20;

// generate spans
	for (edge=edge_head.next ; edge != &edge_tail; edge=edge->next)
	{			
		if (edge->surfs[0])
			R_TrailingEdge (&surfaces[edge->surfs[0]], edge);

		if (edge->surfs[1])
			R_LeadingEdgeBackwards (edge);
	}

	R_CleanupSpan ();
}


/*
==============
R_ScanEdges

Input: 
newedges[] array
	this has links to edges, which have links to surfaces

Output:
Each surface has a linked list of its visible spans
==============
*/
void R_ScanEdges (void)
{
	int		iv, bottom;
	byte	basespans[MAXSPANS*sizeof(espan_t)+CACHE_SIZE];
	espan_t	*basespan_p;
	surf_t	*s;

	basespan_p = (espan_t *)
			((long)(basespans + CACHE_SIZE - 1) & ~(CACHE_SIZE - 1));
	max_span_p = &basespan_p[MAXSPANS - r_refdef.vrect.width];

	span_p = basespan_p;

// clear active edges to just the background edges around the whole screen
// FIXME: most of this only needs to be set up once
	edge_head.u = r_refdef.vrect.x << 20;
	edge_head_u_shift20 = edge_head.u >> 20;
	edge_head.u_step = 0;
	edge_head.prev = NULL;
	edge_head.next = &edge_tail;
	edge_head.surfs[0] = 0;
	edge_head.surfs[1] = 1;
	
	edge_tail.u = (r_refdef.vrectright << 20) + 0xFFFFF;
	edge_tail_u_shift20 = edge_tail.u >> 20;
	edge_tail.u_step = 0;
	edge_tail.prev = &edge_head;
	edge_tail.next = &edge_aftertail;
	edge_tail.surfs[0] = 1;
	edge_tail.surfs[1] = 0;
	
	edge_aftertail.u = -1;		// force a move
	edge_aftertail.u_step = 0;
	edge_aftertail.next = &edge_sentinel;
	edge_aftertail.prev = &edge_tail;

// FIXME: do we need this now that we clamp x in r_draw.c?
	edge_sentinel.u = 2000 << 24;		// make sure nothing sorts past this
	edge_sentinel.prev = &edge_aftertail;

//	
// process all scan lines
//
	bottom = r_refdef.vrectbottom - 1;

	for (iv=r_refdef.vrect.y ; iv<bottom ; iv++)
	{
		current_iv = iv;
		fv = (float)iv;

	// mark that the head (background start) span is pre-included
		surfaces[1].spanstate = 1;

		if (newedges[iv])
		{
			R_InsertNewEdges (newedges[iv], edge_head.next);
		}

		(*pdrawfunc) ();

	// flush the span list if we can't be sure we have enough spans left for
	// the next scan
		if (span_p > max_span_p)
		{
			VID_UnlockBuffer ();
			S_ExtraUpdate ();	// don't let sound get messed up if going slow
			VID_LockBuffer ();
		
			if (r_drawculledpolys)
				R_DrawCulledPolys ();
			else
				D_DrawSurfaces ();

		// clear the surface span pointers
			for (s = &surfaces[1] ; s<surface_p ; s++)
				s->spans = NULL;

			span_p = basespan_p;
		}

		if (removeedges[iv])
			R_RemoveEdges (removeedges[iv]);

		if (edge_head.next != &edge_tail)
			R_StepActiveU (edge_head.next);
	}

// do the last scan (no need to step or sort or remove on the last scan)

	current_iv = iv;
	fv = (float)iv;

// mark that the head (background start) span is pre-included
	surfaces[1].spanstate = 1;

	if (newedges[iv])
		R_InsertNewEdges (newedges[iv], edge_head.next);

	(*pdrawfunc) ();

// draw whatever's left in the span list
	if (r_drawculledpolys)
		R_DrawCulledPolys ();
	else
		D_DrawSurfaces ();
}

