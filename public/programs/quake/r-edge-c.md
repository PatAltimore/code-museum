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
description: "Advanced edge rendering techniques in Quake's 3D engine"

summary:
  - point: "Innovative edge and span rendering for 3D environments"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Optimized for 1996 hardware constraints like x86 processors"
    link: "https://en.wikipedia.org/wiki/X86"
    link_label: "x86 architecture"
  - point: "Introduced techniques influencing modern graphics engines"
    link: "https://en.wikipedia.org/wiki/Graphics_engine"
    link_label: "Graphics engine"

enhancements:
  - id: "r-draw-culled-polys"
    line_start: 81
    line_end: 83
    title: "Back-to-front surface rendering logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Painter%27s_algorithm"
    image_url: ""
    image_caption: ""
    content: "This subroutine, `R_DrawCulledPolys`, implements a back-to-front rendering approach, a technique derived from the painter's algorithm. The function iterates over surfaces and renders them based on their depth order. In 1996, hardware lacked advanced depth-buffering capabilities, so developers often relied on algorithms like this to ensure correct visibility of overlapping polygons. John Carmack and Michael Abrash, both renowned for their expertise in graphics programming, were instrumental in designing Quake's rendering pipeline. Their work pushed the limits of what was possible on consumer-grade hardware, such as Intel's Pentium processors. This function reflects their meticulous attention to performance and visual accuracy, ensuring that Quake's groundbreaking 3D environments were rendered seamlessly. The painter's algorithm, while less common today due to modern GPUs, remains a foundational concept in computer graphics."
  - id: "r-begin-edge-frame"
    line_start: 124
    line_end: 126
    title: "Setting up edge rendering for a frame"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rendering_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `R_BeginEdgeFrame` function initializes the edge rendering process for a new frame. It sets up crucial data structures, such as the active edge list and background surface, and determines the drawing order based on user settings. In the mid-1990s, real-time rendering was constrained by limited memory and processing power, requiring developers to carefully manage resources. This function reflects id Software's approach to optimizing edge-based rendering, ensuring that surfaces are processed efficiently and in the correct order. The choice between forward and backward span generation demonstrates the flexibility of Quake's engine, allowing it to adapt to different rendering scenarios. This initialization step is a precursor to the detailed edge and span processing that follows, showcasing the layered complexity of Quake's graphics pipeline."
  - id: "r-insert-new-edges"
    line_start: 173
    line_end: 179
    title: "Sorting edges into active lists"
    wikipedia_url: "https://en.wikipedia.org/wiki/Active_edge_table"
    image_url: ""
    image_caption: ""
    content: "The `R_InsertNewEdges` function inserts new edges into the active edge list, maintaining a sorted order based on their screen-space position. This is a critical step in edge-based rendering, where the active edge table (AET) is used to track which edges are currently visible and need processing. In the context of Quake, this sorting ensures that spans are generated correctly, preserving the visual integrity of the 3D scene. The algorithm's efficiency was paramount, as it had to handle complex scenes with multiple overlapping surfaces on hardware with limited computational power. By leveraging sorted lists and sentinel edges, id Software's developers optimized the rendering pipeline to minimize unnecessary calculations. This technique influenced later graphics engines, which refined and expanded upon the concept of active edge tables."
  - id: "r-step-active-u"
    line_start: 231
    line_end: 233
    title: "Updating edge positions during rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Scanline_rendering"
    image_url: ""
    image_caption: ""
    content: "The `R_StepActiveU` function updates the positions of active edges as the rendering process moves across the screen. This step is part of the scanline rendering approach, where edges are incrementally adjusted to match their projected positions. In Quake, this function ensures that edges remain correctly sorted and aligned, enabling accurate span generation. The algorithm handles edge movement efficiently, minimizing computational overhead while maintaining visual fidelity. In the mid-1990s, scanline rendering was a common technique for real-time graphics, balancing performance and quality on limited hardware. This function exemplifies the careful optimization that defined Quake's engine, allowing it to deliver groundbreaking 3D visuals on consumer-grade systems. The principles behind this edge-stepping logic continue to inform modern rendering techniques, especially in software-based graphics solutions."
  - id: "r-generate-spans"
    line_start: 585
    line_end: 587
    title: "Generating visible spans from edges"
    wikipedia_url: "https://en.wikipedia.org/wiki/Span_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `R_GenerateSpans` function is responsible for generating visible spans from the active edge list. Spans represent horizontal segments of surfaces that are visible on the screen, and their generation is a key step in the rendering pipeline. This function processes each edge, determining whether it adds or removes a surface from the active list. In 1996, this approach was a cutting-edge solution for real-time 3D rendering, enabling Quake to display complex environments with high visual fidelity. The span generation logic reflects id Software's deep understanding of graphics algorithms and their ability to optimize for the constraints of contemporary hardware. By carefully managing spans and edges, the engine achieves efficient rendering without sacrificing quality. This technique laid the groundwork for more advanced rendering methods, influencing the development of modern graphics engines."
  - id: "r-scan-edges"
    line_start: 663
    line_end: 768
    title: "Processing scanlines for edge rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Scanline_rendering"
    image_url: ""
    image_caption: ""
    content: "The `R_ScanEdges` function processes scanlines to render edges and generate spans for visible surfaces. This function represents the culmination of Quake's edge-based rendering pipeline, combining edge insertion, span generation, and active edge updates. Each scanline is processed sequentially, ensuring that surfaces are rendered in the correct order and with accurate visibility. In the mid-1990s, scanline rendering was a practical choice for real-time graphics, balancing performance and complexity on hardware like Intel's Pentium processors. The meticulous design of this function reflects id Software's commitment to pushing the boundaries of 3D rendering, enabling Quake to deliver immersive environments and dynamic visuals. The scanline approach, while less common today, remains a foundational concept in computer graphics, influencing techniques like rasterization and GPU-based rendering."

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

