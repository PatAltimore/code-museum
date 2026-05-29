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
description: "This file encapsulates the low-level assembly optimizations that powered Quake's groundbreaking 3D rendering and multiplayer capabilities on 1990s hardware."

summary:
  - point: "Defines assembly-level constants and macros for x86 optimizations"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly language"
  - point: "Includes external references to critical rendering variables"
    link: "https://en.wikipedia.org/wiki/Rendering_(computer_graphics)"
    link_label: "Rendering"
  - point: "Optimized for id386 architecture, targeting Intel processors"
    link: "https://en.wikipedia.org/wiki/Intel_80386"
    link_label: "Intel 80386"
  - point: "Showcases Carmack's and Abrash's mastery of hardware constraints"
    link: "https://en.wikipedia.org/wiki/John_Carmack"
    link_label: "John Carmack"
  - point: "Influenced modern game engines and rendering techniques"
    link: "https://en.wikipedia.org/wiki/Game_engine"
    link_label: "Game engine"

enhancements:
  - id: "quakeasm-header-setup"
    line_start: 1
    line_end: 17
    title: "Why Quake Needed id386-Specific Optimizations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_80386"
    image_url: ""
    image_caption: ""
    content: "This section sets up architecture-specific flags to enable optimizations for Intel's 386 processors, the dominant CPU architecture of the mid-1990s. By defining `id386`, the code ensures that assembly routines tailored for x86 processors are included only when running on compatible hardware. This was crucial for Quake, as its performance depended heavily on low-level optimizations that exploited the specific capabilities of the 386 and later processors, such as pipelining and instruction-level parallelism. In 1996, the gaming industry was transitioning from DOS-based games to Windows-based environments, and developers were grappling with the limitations of early PC hardware. The 386, introduced in 1985, was still widely used, though faster processors like the Pentium were becoming more common. John Carmack and Michael Abrash, both renowned for their deep understanding of hardware, leveraged these constraints to push the boundaries of what was possible. Abrash's work on assembly optimizations and Carmack's expertise in engine design ensured Quake could deliver unprecedented 3D graphics on consumer-grade PCs. This approach influenced later game engines, such as Unreal Engine and Source, which continued to optimize for specific hardware architectures. The practice of tailoring software for hardware capabilities persists in modern development, especially in console and mobile gaming, where understanding the underlying hardware is key to maximizing performance."
  - id: "transparent-color-definition"
    line_start: 4
    line_end: 9
    title: "The Magic Number Behind Transparency"
    wikipedia_url: "https://en.wikipedia.org/wiki/Transparency_(graphic)"
    image_url: ""
    image_caption: ""
    content: "The definition of `TRANSPARENT_COLOR` as 255 is a simple yet critical decision. This constant represents the color value used to denote transparency in Quake's rendering pipeline. By reserving a specific value for transparency, the engine can efficiently handle textures and sprites that require portions to be invisible, such as windows or character models. In the mid-1990s, transparency was a computationally expensive feature, especially on hardware without dedicated graphics acceleration. Quake's software renderer had to manage transparency manually, blending pixels and ensuring that transparent areas did not overwrite the background. This choice of 255 likely stems from its position as the maximum value in an 8-bit color palette, making it easy to identify and process. Transparency handling in Quake laid the groundwork for more sophisticated alpha blending techniques in later games. Modern engines like Unity and Unreal use similar principles but leverage GPU acceleration to handle transparency more efficiently. The concept of reserving specific values for transparency persists in formats like PNG, where alpha channels define pixel opacity."
  - id: "external-variable-references"
    line_start: 19
    line_end: 202
    title: "The Web of Variables That Made Quake Tick"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rendering_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "This section lists external references to critical variables used throughout Quake's rendering pipeline. These variables, such as `d_zistepu`, `r_turb_s`, and `d_viewbuffer`, represent the building blocks of the game's 3D graphics system. They control everything from depth buffering to texture mapping and lighting calculations. In 1996, real-time 3D rendering was still a nascent field. Developers had to invent techniques to simulate depth, perspective, and lighting on hardware that lacked dedicated graphics processors. Quake's software renderer was a marvel of engineering, using these variables to manage complex calculations efficiently. For example, depth buffering (`d_pzbuffer`) ensured that closer objects occluded farther ones, while texture coordinates (`r_turb_s`, `r_turb_t`) enabled detailed surfaces. The modularity of these variables reflects the influence of Michael Abrash, who advocated for clean, reusable code even in assembly-heavy projects. This approach allowed Quake's engine to be adapted for later games like Quake II and influenced the design of modern engines. Developers studying Quake's source code learned how to structure rendering systems, a lesson that resonates in today's industry standards."
  - id: "sound-system-hooks"
    line_start: 4
    line_end: 6
    title: "How Quake's Sound System Kept Pace"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_card"
    image_url: ""
    image_caption: ""
    content: "This section includes external references to variables used in Quake's sound system, such as `snd_scaletable` and `snd_linear_count`. These variables controlled sound playback, volume scaling, and buffer management, ensuring that Quake's audio matched the quality of its visuals. In 1996, sound cards like the Sound Blaster were common, but their capabilities varied widely. Quake's sound system had to accommodate different hardware configurations while delivering immersive audio effects. By using assembly-level hooks, the engine could directly manipulate sound buffers and optimize playback for each system. Quake's approach to sound influenced later games, which continued to prioritize audio quality as a key component of immersion. The modularity of its sound system inspired modern audio engines, such as FMOD and Wwise, which provide similar flexibility and performance optimization. Quake demonstrated that sound was not just an afterthought but an integral part of the gaming experience."

---

```cpp
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
