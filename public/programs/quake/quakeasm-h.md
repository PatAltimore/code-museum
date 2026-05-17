---
title: "quakeasm.h"
program: "Quake"
program_slug: "quake"
file_path: "QW/client/quakeasm.h"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/Quake/blob/master/QW/client/quakeasm.h"
year: 1996
author: "John Carmack, Michael Abrash, John Cash"
slug: "quakeasm-h"
order: 7
description: "This header file from Quake's source code showcases the low-level assembly optimizations that allowed the game to perform efficiently on 1990s hardware."

summary:
  - point: "Defines platform-specific macros for x86 optimization"
    link: "https://en.wikipedia.org/wiki/Intel_80386"
    link_label: "Intel 80386"
  - point: "Centralized constants for graphics rendering, such as TRANSPARENT_COLOR"
    link: "https://en.wikipedia.org/wiki/Transparency_(graphic)"
    link_label: "Transparency in graphics"
  - point: "Assembly-level external references for rendering and audio processing"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly language"
  - point: "Optimized tables for reciprocal calculations and texture mapping"
    link: "https://en.wikipedia.org/wiki/Texture_mapping"
    link_label: "Texture mapping"
  - point: "Illustrates the challenges of cross-platform development in the mid-1990s"
    link: "https://en.wikipedia.org/wiki/Cross-platform_software"
    link_label: "Cross-platform software"

enhancements:
  - id: "platform-specific-macros-x86-optimization"
    line_start: 24
    line_end: 32
    title: "Platform-specific macros for x86 optimization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_80386"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/A80386DX-25_SX218.jpg/330px-A80386DX-25_SX218.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "A80386DX-25 SX218 (CC BY-SA 4.0)"
    content: "These lines define macros that enable platform-specific optimizations for x86 processors, specifically targeting the Intel 80386 architecture. By checking for the presence of the `__i386__` macro, the code ensures that certain assembly-level optimizations are only applied when running on compatible hardware. In 1996, x86 processors dominated the PC gaming market, but developers still had to account for variations in hardware capabilities and operating systems, such as Windows and NeXTSTEP. John Carmack and his team at id Software were known for their meticulous attention to performance, and this conditional compilation reflects their commitment to squeezing every ounce of power from the hardware. These optimizations were crucial for achieving the groundbreaking 3D graphics and real-time rendering that made Quake a landmark in gaming history. Today, similar techniques are still used in performance-critical applications, though modern compilers and hardware abstraction layers have reduced the need for such manual interventions."
  - id: "transparent-color-constant"
    line_start: 34
    line_end: 35
    title: "Defining TRANSPARENT_COLOR for rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Transparency_(graphic)"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Animation30.gif?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "Color rotation animation on spheroid (CC BY-SA 3.0)"
    content: "The TRANSPARENT_COLOR constant is set to 255, a value likely used to represent transparency in Quake's rendering pipeline. Transparency was a challenging feature to implement efficiently on 1990s hardware, as it required blending or masking operations that could be computationally expensive. By defining this constant, the developers ensured consistency across different parts of the codebase, particularly in graphics routines that handled transparent textures or sprites. In the mid-1990s, graphics cards were still relatively primitive, and software rendering had to handle most of the workload. This constant highlights the careful planning that went into Quake's rendering system, enabling features like transparent water and particle effects that contributed to the game's immersive atmosphere. The concept of a dedicated transparency value persists in modern graphics APIs, though hardware acceleration has made such operations far more efficient."
  - id: "cross-platform-challenges"
    line_start: 37
    line_end: 261
    title: "Navigating cross-platform development in the 1990s"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cross-platform_software"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/About_VirtualBox_OSE.png/330px-About_VirtualBox_OSE.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "About VirtualBox OSE (GPL)"
    content: "This section of the code includes conditional compilation directives and assembly-level references that highlight the challenges of cross-platform development during the mid-1990s. Quake was designed to run on multiple operating systems, including Windows and NeXTSTEP, each with its own quirks and hardware constraints. The developers had to account for differences in processor architecture, memory management, and graphics capabilities, often resorting to platform-specific optimizations to ensure consistent performance. The use of conditional directives like `#ifdef` allowed the code to adapt dynamically, enabling features like assembly-level optimizations on x86 systems while maintaining compatibility with other platforms. This flexibility was crucial for reaching a broad audience in an era when PC gaming was rapidly evolving. The lessons learned from Quake's cross-platform development influenced future game engines, including id Software's own id Tech series, which became a standard for multi-platform gaming. Today, cross-platform development is facilitated by advanced tools and frameworks, but the foundational techniques seen here remain relevant for understanding how to build software that performs well across diverse environments."

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