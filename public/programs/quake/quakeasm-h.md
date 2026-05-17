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
description: "This header file encapsulates the assembly-level optimizations and definitions that powered Quake's groundbreaking performance on 1990s hardware."

summary:
  - point: "Assembly optimizations tailored for x86 processors"
    link: "https://en.wikipedia.org/wiki/X86"
    link_label: "x86 architecture"
  - point: "Definitions for transparent color handling in rendering"
    link: "https://en.wikipedia.org/wiki/Transparency_(graphic)"
    link_label: "Transparency in graphics"
  - point: "External references to critical rendering variables"
    link: "https://en.wikipedia.org/wiki/Rendering_(computer_graphics)"
    link_label: "Rendering techniques"
  - point: "Conditional compilation for platform-specific assembly code"
    link: "https://en.wikipedia.org/wiki/Conditional_compilation"
    link_label: "Conditional compilation"
  - point: "Optimization tables for reciprocal calculations and edge rasterization"
    link: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    link_label: "Fixed-point arithmetic"

enhancements:
  - id: "platform-specific-assembly-setup"
    line_start: 24
    line_end: 32
    title: "Platform-specific assembly setup for x86"
    wikipedia_url: "https://en.wikipedia.org/wiki/X86"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Animation30.gif?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "Color rotation animation on spheroid (CC BY-SA 3.0)"
    content: "These lines establish conditional definitions to enable assembly optimizations specific to x86 processors. By defining `__i386__` and `id386` macros, the code ensures that the assembly instructions are tailored for systems running on 32-bit Intel architecture. In the mid-1990s, x86 processors dominated the PC gaming market, with Intel's Pentium series being the standard for high-performance gaming. John Carmack and his team at id Software were acutely aware of this hardware landscape, crafting Quake to exploit every ounce of computational power available. This setup reflects the team's commitment to squeezing maximum performance out of widely available hardware, a necessity given the limited processing power and memory constraints of the era. The decision to optimize for x86 would influence countless other developers, as Quake's source code became a benchmark for performance-oriented programming."
  - id: "transparent-color-definition"
    line_start: 34
    line_end: 35
    title: "Transparent color definition for rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Transparency_(graphic)"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Glasses_800_edit.png/330px-Glasses_800_edit.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "This image using POV-Ray 3.6 with Radiosity. The glasses, ashtray and pitcher were modeled with Rhino and the dice with Cinema 4D. (Public domain)"
    content: "The `TRANSPARENT_COLOR` macro defines the value 255 as the transparent color in rendering operations. Transparency was a critical feature in Quake's graphics engine, enabling effects like water and glass that added depth to the game's 3D environments. In 1996, achieving such effects required careful management of color palettes and memory, as hardware acceleration for transparency was not yet standard. By assigning a specific color value to represent transparency, the developers could efficiently handle these visual elements without taxing the limited resources of contemporary hardware. This approach demonstrates the ingenuity required to deliver cutting-edge visuals on machines with constrained capabilities, and it laid the groundwork for more advanced transparency handling in future engines."
  - id: "external-variable-references"
    line_start: 39
    line_end: 261
    title: "External references to rendering variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rendering_(computer_graphics)"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/KL_Creative_Labs_Soundblaster_Live_Value_CT4670_%28cropped_and_transparent%29.png/330px-KL_Creative_Labs_Soundblaster_Live_Value_CT4670_%28cropped_and_transparent%29.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Creative Labs Sound Blaster Live! Value (CT4670) (GFDL)"
    content: "This section lists external references to a vast array of variables used in Quake's rendering pipeline. These variables include everything from `d_zistepu` for depth buffer calculations to `r_turb_t` for turbulence effects. By declaring these variables as external, the code ensures they are accessible across different modules, enabling seamless integration of assembly-level optimizations with higher-level C code. The sheer number of variables highlights the complexity of Quake's rendering system, which had to manage tasks like perspective correction, lighting, texture mapping, and clipping in real-time. In the mid-1990s, achieving this level of graphical fidelity required not only innovative algorithms but also an intimate understanding of hardware capabilities. The inclusion of variables for light calculations, texture coordinates, and edge rasterization underscores the team's focus on delivering a visually stunning and immersive experience. These external references would later serve as a blueprint for other game engines, influencing the development of rendering systems for years to come."
  - id: "sound-buffer-variables"
    line_start: 263
    line_end: 272
    title: "Sound buffer variables for audio processing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_card"
    image_url: ""
    image_caption: ""
    content: "This section declares external references to variables used in Quake's audio system, such as `snd_scaletable`, `paintbuffer`, and `snd_vol`. Audio processing in games during the mid-1990s was a challenging task, as sound cards were less advanced and often required specific optimizations to achieve real-time playback. Quake's audio engine had to handle multiple sound effects simultaneously, ensuring synchronization with the game's visuals and maintaining performance. The inclusion of these variables highlights the team's holistic approach to game development, where audio was given as much attention as graphics and gameplay. By optimizing sound processing at the assembly level, id Software ensured that Quake delivered an immersive auditory experience, complementing its groundbreaking visuals. This focus on audio quality set a standard for future games, where sound design became an integral part of the gaming experience."

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