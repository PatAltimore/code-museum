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
description: "This file implements BSP traversal and rendering, a key innovation in DOOM's real-time 3D graphics engine."

summary:
  - point: "Introduced BSP traversal for efficient rendering"
    link: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    link_label: "Binary Space Partitioning"
  - point: "Optimized wall clipping using solid segment lists"
    link: "https://doomwiki.org/wiki/Rendering_engine"
    link_label: "DOOM Rendering Engine"
  - point: "Handled subsector rendering and sprite addition"
    link: "https://doomwiki.org/wiki/Subsector"
    link_label: "Subsector Rendering"
  - point: "Recursive BSP traversal for spatial division"
    link: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    link_label: "BSP Trees"
  - point: "Efficient visibility checks using bounding boxes"
    link: "https://doomwiki.org/wiki/Rendering_engine"
    link_label: "Bounding Box Checks"

enhancements:
  - id: "clear-draw-segments"
    line_start: 65
    line_end: 71
    title: "Why DOOM Clears Draw Segments Before Rendering"
    wikipedia_url: "https://doomwiki.org/wiki/Rendering_engine"
    image_url: ""
    image_caption: ""
    content: "This function, `R_ClearDrawSegs`, resets the draw segment pointer (`ds_p`) to the beginning of the `drawsegs` array. Draw segments represent portions of walls that need to be rendered, and clearing them ensures that no stale data from previous frames interferes with the current rendering pass. In 1993, memory management was critical due to hardware constraints—DOOM had to run efficiently on machines with as little as 4MB of RAM. By reusing pre-allocated arrays like `drawsegs`, the developers avoided costly dynamic memory allocation during gameplay. This approach influenced later game engines, which adopted similar strategies for managing render lists and minimizing frame-to-frame overhead."
  - id: "clip-solid-wall-segment"
    line_start: 97
    line_end: 185
    title: "How DOOM Handles Solid Wall Clipping"
    wikipedia_url: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    image_url: ""
    image_caption: ""
    content: "The `R_ClipSolidWallSegment` function processes solid walls that block the player's view entirely. It uses a list of clip ranges (`solidsegs`) to track visible portions of the screen and inserts new segments when necessary. The algorithm ensures efficient rendering by avoiding redundant calculations for occluded areas. At the time, this was a novel solution to the problem of visibility determination in 3D environments. John Carmack's implementation of BSP trees and clipping algorithms in DOOM set a precedent for real-time rendering in games, influencing engines like Quake and Unreal. The technique also became a staple in computer graphics education, demonstrating how spatial partitioning can optimize rendering pipelines."
  - id: "clip-pass-wall-segment"
    line_start: 189
    line_end: 238
    title: "Clipping Windows: DOOM's Pass Wall Segments"
    wikipedia_url: "https://doomwiki.org/wiki/Rendering_engine"
    image_url: ""
    image_caption: ""
    content: "The `R_ClipPassWallSegment` function handles walls that act as windows, allowing partial visibility through textures. Unlike solid walls, these segments are not added to the clip list but are processed for rendering. This distinction between solid and passable walls was crucial for creating DOOM's immersive environments, where players could see through windows or openings while maintaining performance. The function's design reflects the game's reliance on efficient algorithms to manage complex scenes on limited hardware. This approach influenced later games that needed to balance visual fidelity with computational constraints, especially in early 3D engines."
  - id: "check-bounding-box"
    line_start: 359
    line_end: 487
    title: "The Bounding Box Trick That Saved DOOM's Frame Rate"
    wikipedia_url: "https://doomwiki.org/wiki/Rendering_engine"
    image_url: ""
    image_caption: ""
    content: "The `R_CheckBBox` function determines whether a bounding box might be visible from the player's viewpoint. It uses precomputed coordinates and angles to quickly reject portions of the scene that are outside the field of view. This optimization was essential for DOOM's performance, as it reduced the number of subsectors and walls that needed to be processed during rendering. Bounding box checks were a direct response to the hardware limitations of the era, where CPUs lacked the power to handle exhaustive visibility calculations. The technique influenced later engines, including Quake, which built on DOOM's spatial partitioning and visibility determination methods to enable even more complex 3D environments."
  - id: "render-bsp-node"
    line_start: 547
    line_end: 578
    title: "Recursive BSP Traversal: DOOM's Rendering Backbone"
    wikipedia_url: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    image_url: ""
    image_caption: ""
    content: "The `R_RenderBSPNode` function is the heart of DOOM's BSP-based rendering system. It recursively traverses the BSP tree, rendering subsectors and checking visibility using bounding boxes. This approach allowed DOOM to efficiently divide the game world into manageable chunks, ensuring that only visible portions were processed. BSP trees were a groundbreaking innovation in 1993, enabling real-time 3D graphics on hardware that lacked dedicated GPUs. John Carmack adapted the technique from academic research and earlier games like Wolfenstein 3D, refining it to handle DOOM's more complex environments. The success of BSP traversal in DOOM directly influenced the development of Quake and other 3D engines, solidifying its place in the history of computer graphics."

---

```asm
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
//
// quakeasm.h: general asm header file
//

#ifdef _WIN32
#define __i386__	1
#endif

#ifdef	__i386__
#define id386	1
#else
#define id386	0
#endif

// !!! must be kept the same as in d_iface.h !!!
#define TRANSPARENT_COLOR	255

#ifndef NeXT
#ifndef GLQUAKE
	.extern C(d_zistepu)
	.extern C(d_pzbuffer)
	.extern C(d_zistepv)
	.extern C(d_zrowbytes)
	.extern C(d_ziorigin)
	.extern C(r_turb_s)
	.extern C(r_turb_t)
	.extern C(r_turb_pdest)
	.extern C(r_turb_spancount)
	.extern C(r_turb_turb)
	.extern C(r_turb_pbase)
	.extern C(r_turb_sstep)
	.extern C(r_turb_tstep)
	.extern	C(r_bmodelactive)
	.extern	C(d_sdivzstepu)
	.extern	C(d_tdivzstepu)
	.extern	C(d_sdivzstepv)
	.extern	C(d_tdivzstepv)
	.extern	C(d_sdivzorigin)
	.extern	C(d_tdivzorigin)
	.extern	C(sadjust)
	.extern	C(tadjust)
	.extern	C(bbextents)
	.extern	C(bbextentt)
	.extern	C(cacheblock)
	.extern	C(d_viewbuffer)
	.extern	C(cachewidth)
	.extern	C(d_pzbuffer)
	.extern	C(d_zrowbytes)
	.extern	C(d_zwidth)
	.extern C(d_scantable)
	.extern C(r_lightptr)
	.extern C(r_numvblocks)
	.extern C(prowdestbase)
	.extern C(pbasesource)
	.extern C(r_lightwidth)
	.extern C(lightright)
	.extern C(lightrightstep)
	.extern C(lightdeltastep)
	.extern C(lightdelta)
	.extern C(lightright)
	.extern C(lightdelta)
	.extern C(sourcetstep)
	.extern C(surfrowbytes)
	.extern C(lightrightstep)
	.extern C(lightdeltastep)
	.extern C(r_sourcemax)
	.extern C(r_stepback)
	.extern C(colormap)
	.extern C(blocksize)
	.extern C(sourcesstep)
	.extern C(lightleft)
	.extern C(blockdivshift)
	.extern C(blockdivmask)
	.extern C(lightleftstep)
	.extern C(r_origin)
	.extern C(r_ppn)
	.extern C(r_pup)
	.extern C(r_pright)
	.extern C(ycenter)
	.extern C(xcenter)
	.extern C(d_vrectbottom_particle)
	.extern C(d_vrectright_particle)
	.extern C(d_vrecty)
	.extern C(d_vrectx)
	.extern C(d_pix_shift)
	.extern C(d_pix_min)
	.extern C(d_pix_max)
	.extern C(d_y_aspect_shift)
	.extern C(screenwidth)
	.extern C(r_leftclipped)
	.extern C(r_leftenter)
	.extern C(r_rightclipped)
	.extern C(r_rightenter)
	.extern C(modelorg)
	.extern C(xscale)
	.extern C(r_refdef)
	.extern C(yscale)
	.extern C(r_leftexit)
	.extern C(r_rightexit)
	.extern C(r_lastvertvalid)
	.extern C(cacheoffset)
	.extern C(newedges)
	.extern C(removeedges)
	.extern C(r_pedge)
	.extern C(r_framecount)
	.extern C(r_u1)
	.extern C(r_emitted)
	.extern C(edge_p)
	.extern C(surface_p)
	.extern C(surfaces)
	.extern C(r_lzi1)
	.extern C(r_v1)
	.extern C(r_ceilv1)
	.extern C(r_nearzi)
	.extern C(r_nearzionly)
	.extern C(edge_aftertail)
	.extern C(edge_tail)
	.extern C(current_iv)
	.extern C(edge_head_u_shift20)
	.extern C(span_p)
	.extern C(edge_head)
	.extern C(fv)
	.extern C(edge_tail_u_shift20)
	.extern C(r_apverts)
	.extern C(r_anumverts)
	.extern C(aliastransform)
	.extern C(r_avertexnormals)
	.extern C(r_plightvec)
	.extern C(r_ambientlight)
	.extern C(r_shadelight)
	.extern C(aliasxcenter)
	.extern C(aliasycenter)
	.extern C(a_sstepxfrac)
	.extern C(r_affinetridesc)
	.extern C(acolormap)
	.extern C(d_pcolormap)
	.extern C(r_affinetridesc)
	.extern C(d_sfrac)
	.extern C(d_ptex)
	.extern C(d_pedgespanpackage)
	.extern C(d_tfrac)
	.extern C(d_light)
	.extern C(d_zi)
	.extern C(d_pdest)
	.extern C(d_pz)
	.extern C(d_aspancount)
	.extern C(erroradjustup)
	.extern C(errorterm)
	.extern C(d_xdenom)
	.extern C(r_p0)
	.extern C(r_p1)
	.extern C(r_p2)
	.extern C(a_tstepxfrac)
	.extern C(r_sstepx)
	.extern C(r_tstepx)
	.extern C(a_ststepxwhole)
	.extern C(zspantable)
	.extern C(skintable)
	.extern C(r_zistepx)
	.extern C(erroradjustdown)
	.extern C(d_countextrastep)
	.extern C(ubasestep)
	.extern C(a_ststepxwhole)
	.extern C(a_tstepxfrac)
	.extern C(r_lstepx)
	.extern C(a_spans)
	.extern C(erroradjustdown)
	.extern C(d_pdestextrastep)
	.extern C(d_pzextrastep)
	.extern C(d_sfracextrastep)
	.extern C(d_ptexextrastep)
	.extern C(d_countextrastep)
	.extern C(d_tfracextrastep)
	.extern C(d_lightextrastep)
	.extern C(d_ziextrastep)
	.extern C(d_pdestbasestep)
	.extern C(d_pzbasestep)
	.extern C(d_sfracbasestep)
	.extern C(d_ptexbasestep)
	.extern C(ubasestep)
	.extern C(d_tfracbasestep)
	.extern C(d_lightbasestep)
	.extern C(d_zibasestep)
	.extern C(zspantable)
	.extern C(r_lstepy)
	.extern C(r_sstepy)
	.extern C(r_tstepy)
	.extern C(r_zistepy)
	.extern C(D_PolysetSetEdgeTable)
	.extern C(D_RasterizeAliasPolySmooth)

	.extern float_point5
	.extern Float2ToThe31nd
	.extern izistep
	.extern izi
	.extern FloatMinus2ToThe31nd
	.extern float_1
	.extern float_particle_z_clip
	.extern float_minus_1
	.extern float_0
	.extern fp_16
	.extern fp_64k
	.extern fp_1m
	.extern fp_1m_minus_1
	.extern fp_8 
	.extern entryvec_table
	.extern advancetable
	.extern sstep
	.extern tstep
	.extern pspantemp
	.extern counttemp
	.extern jumptemp
	.extern reciprocal_table
	.extern DP_Count
	.extern DP_u
	.extern DP_v
	.extern DP_32768
	.extern DP_Color
	.extern DP_Pix
	.extern DP_EntryTable
	.extern	pbase
	.extern s
	.extern t
	.extern sfracf
	.extern tfracf
	.extern snext
	.extern tnext
	.extern	spancountminus1
	.extern zi16stepu
	.extern sdivz16stepu
	.extern tdivz16stepu
	.extern	zi8stepu
	.extern sdivz8stepu
	.extern tdivz8stepu
	.extern reciprocal_table_16
	.extern entryvec_table_16
	.extern ceil_cw
	.extern single_cw
	.extern fp_64kx64k
	.extern pz
	.extern spr8entryvec_table
#endif

	.extern C(snd_scaletable)
	.extern C(paintbuffer)
	.extern C(snd_linear_count)
	.extern C(snd_p)
	.extern C(snd_vol)
	.extern C(snd_out)
	.extern C(vright)
	.extern C(vup)
	.extern C(vpn)
	.extern C(BOPS_Error)

#endif
```
