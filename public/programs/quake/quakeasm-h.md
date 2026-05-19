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
description: "A glimpse into Quake's low-level optimizations for 1990s hardware."

summary:
  - point: "Extensive use of assembly language for performance-critical routines"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"
  - point: "Optimization for x86 processors, reflecting hardware constraints of the era"
    link: "https://en.wikipedia.org/wiki/X86"
    link_label: "x86 Architecture"
  - point: "Integration of 3D rendering techniques with direct hardware manipulation"
    link: "https://en.wikipedia.org/wiki/3D_computer_graphics"
    link_label: "3D Computer Graphics"
  - point: "Defines constants and external references for rendering and sound systems"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Demonstrates id Software's pioneering approach to game engine development"
    link: "https://en.wikipedia.org/wiki/Id_Software"
    link_label: "id Software"

enhancements:
  - id: "quakeasm-architecture-switch"
    line_start: 24
    line_end: 32
    title: "Switching architectures: x86 optimization"
    wikipedia_url: "https://en.wikipedia.org/wiki/X86"
    image_url: ""
    image_caption: ""
    content: "This section of the code establishes architecture-specific definitions, specifically targeting the x86 platform. By defining `id386` based on the presence of the `__i386__` macro, the code ensures compatibility and optimization for Intel's 386 processors, which were widely used in PCs during the mid-1990s. The decision to focus on x86 reflects the dominance of this architecture in consumer hardware at the time, as well as id Software's commitment to squeezing every ounce of performance from the available hardware. John Carmack and his team were renowned for their ability to optimize code for specific platforms, leveraging assembly language and architecture-specific features to achieve groundbreaking performance in games like Quake. This approach laid the groundwork for future game engines, many of which continued to prioritize hardware-specific optimizations. The reliance on x86 also highlights the constraints developers faced in the era, where memory and processing power were limited, and every cycle counted."
  - id: "transparent-color-definition"
    line_start: 34
    line_end: 35
    title: "Defining transparency in software rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Transparency_(graphic)"
    image_url: ""
    image_caption: ""
    content: "The constant `TRANSPARENT_COLOR` is defined here as 255, a value used to represent transparency in Quake's software rendering pipeline. Transparency was a critical feature in creating immersive 3D environments, allowing objects like water or glass to appear see-through. In the mid-1990s, achieving transparency required clever tricks in software rendering, as hardware acceleration for 3D graphics was still in its infancy. This definition ties directly to Quake's rendering system, where the color index 255 would be reserved for transparent pixels. The choice of a single value for transparency reflects the simplicity and efficiency required in an era of limited computational resources. Quake's rendering innovations, including transparency, influenced future game engines and graphics APIs, which later incorporated more sophisticated methods for handling transparency and blending."
  - id: "external-references-for-rendering"
    line_start: 37
    line_end: 261
    title: "Mapping the rendering pipeline: external references"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rendering_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "This extensive section lists external references to variables and functions used throughout Quake's rendering pipeline. These include parameters for z-buffering (`d_pzbuffer`), texture mapping (`d_ptex`), lighting (`r_lightptr`), and geometric transformations (`aliastransform`). By declaring these as external, the assembly code can interface seamlessly with the C codebase, enabling highly optimized routines to access critical data structures. The sheer number of references underscores the complexity of Quake's rendering system, which had to manage 3D transformations, lighting, and texture mapping in real-time on hardware with limited processing power. John Carmack and Michael Abrash, both masters of low-level optimization, designed these systems to push the boundaries of what was possible in 1996. The modularity of these references also highlights id Software's forward-thinking approach to engine design, paving the way for future modular game engines. Many of these techniques, such as z-buffering and texture mapping, became standard in 3D graphics engines."
  - id: "sound-system-references"
    line_start: 263
    line_end: 272
    title: "Integrating sound: external references for audio"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_card"
    image_url: ""
    image_caption: ""
    content: "This section lists external references related to Quake's sound system, such as `snd_scaletable`, `paintbuffer`, and `snd_linear_count`. These variables and functions are integral to managing audio playback and mixing, ensuring that sound effects and music are synchronized with the game's visuals. In the mid-1990s, sound cards like Creative's Sound Blaster were becoming standard in PCs, enabling developers to incorporate richer audio experiences into their games. Quake's sound system reflects this trend, leveraging hardware capabilities to deliver immersive soundscapes. The inclusion of sound-related references in an assembly header file highlights the importance of performance optimization even in audio processing, as sound mixing and playback had to occur in real-time alongside rendering and gameplay logic. This integration of sound and graphics set a precedent for modern game engines, where audio is treated as an equally critical component of the gaming experience."

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