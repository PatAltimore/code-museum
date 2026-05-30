---
title: "d_scan.c"
program: "Quake"
program_slug: "quake"
file_path: "QW/client/d_scan.c"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/Quake/blob/master/QW/client/d_scan.c"
year: 1996
author: "John Carmack, Michael Abrash, John Cash"
slug: "d-scan-c"
order: 27
description: "This file contains critical rasterization routines for Quake's groundbreaking rendering engine, showcasing optimization techniques for hardware constraints of the mid-1990s."

summary:
  - point: "Introduces sine wave-based screen warping for visual effects"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Optimized span drawing for turbulent textures and depth buffering"
    link: "https://en.wikipedia.org/wiki/Rasterisation"
    link_label: "Rasterization"
  - point: "Demonstrates fixed-point arithmetic for performance on x86 CPUs"
    link: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    link_label: "Fixed-point arithmetic"

enhancements:
  - id: "warp-screen-effect"
    line_start: 36
    line_end: 89
    title: "The Warp Effect That Defined Quake"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `D_WarpScreen` function creates Quake's signature screen-warping effect, a visual distortion that compresses and waves the screen based on sine wave calculations. This effect is achieved by precomputing lookup tables (`rowptr` and `column`) to map screen coordinates to warped positions, ensuring efficient pixel manipulation during runtime. The function uses time-dependent sine wave offsets (`intsintable`) to create dynamic distortions, adding a surreal quality to the game's visuals. In 1996, the hardware landscape was dominated by x86 CPUs with limited floating-point performance and constrained memory. John Carmack and Michael Abrash, known for their mastery of optimization, leveraged fixed-point arithmetic and precomputed tables to minimize computational overhead. The technique reflects their philosophy of squeezing maximum performance from available hardware, a necessity for achieving real-time 3D rendering on consumer-grade PCs. The warp effect became iconic, influencing later games and engines that sought to replicate Quake's immersive atmosphere. It demonstrated how visual effects could enhance gameplay without requiring specialized hardware. Developers studying Quake's source code after its GPL release in 1999 adapted similar techniques for distortion effects in titles like Half-Life and Unreal Tournament, cementing its legacy in game development."
  - id: "turbulent-span-drawing"
    line_start: 92
    line_end: 111
    title: "Span Drawing Meets Sine Wave Turbulence"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rasterisation"
    image_url: ""
    image_caption: ""
    content: "The `D_DrawTurbulent8Span` function is a low-level routine for rendering spans of turbulent textures, a hallmark of Quake's dynamic visual style. Each span is distorted using sine wave offsets (`r_turb_turb`), creating a rippling effect. The function iterates over pixels in the span, calculating texture coordinates (`sturb` and `tturb`) based on precomputed sine values, and retrieves the corresponding texture data. This approach reflects the constraints of mid-1990s hardware, where CPU cycles were precious and GPUs were rudimentary. By using fixed-point arithmetic and precomputed sine tables, the developers avoided costly floating-point operations, ensuring the game ran smoothly on mainstream PCs. The technique was likely influenced by earlier work in rasterization and texture mapping, which Abrash had explored extensively in his writings. The turbulent texture effect became a staple in game engines, inspiring similar implementations in later titles. It showcased how mathematical elegance could be harnessed to create visually striking effects with minimal computational cost. The technique influenced not only games but also graphics programming paradigms, encouraging developers to think creatively within hardware limitations."
  - id: "turbulent-span-algorithm"
    line_start: 113
    line_end: 245
    title: "How Quake Rendered Rippling Worlds"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_engine"
    image_url: ""
    image_caption: ""
    content: "The `Turbulent8` function is the core algorithm for rendering spans of turbulent textures, combining fixed-point arithmetic, precomputed sine wave tables, and careful clamping to ensure visual fidelity. It calculates texture coordinates (`s` and `t`) for each pixel in a span, adjusting them dynamically based on sine wave offsets. The function also handles edge cases, such as rounding errors, to prevent artifacts like texture overstepping. In 1996, real-time 3D rendering was still in its infancy, and developers had to work within severe hardware constraints. Carmack and Abrash's decision to use fixed-point arithmetic and precomputed tables reflects their deep understanding of x86 architecture and their commitment to performance optimization. The function's design also highlights their attention to detail, ensuring robust handling of edge cases despite the complexity of the calculations. The turbulent rendering technique became a defining feature of Quake's visual style, influencing later engines like Source and Unreal. It demonstrated how mathematical precision and algorithmic ingenuity could overcome hardware limitations, setting a benchmark for real-time graphics programming. The technique remains a valuable case study for developers seeking to balance performance and visual quality."
  - id: "span-drawing-optimization"
    line_start: 248
    line_end: 381
    title: "Optimizing Texture Mapping for x86 CPUs"
    wikipedia_url: "https://en.wikipedia.org/wiki/Texture_mapping"
    image_url: ""
    image_caption: ""
    content: "The `D_DrawSpans8` function is a general-purpose span renderer for 8-bit textures, optimized for the hardware constraints of the era. It calculates texture coordinates (`s` and `t`) for each pixel, using fixed-point arithmetic to avoid costly floating-point operations. The function divides spans into smaller chunks, ensuring efficient processing and minimizing rounding errors. In the mid-1990s, texture mapping was a computationally expensive operation, especially on consumer-grade x86 CPUs. Carmack and Abrash's use of fixed-point arithmetic and precomputed steps reflects their expertise in squeezing performance from limited hardware. The function also incorporates clamping and biasing techniques to handle edge cases, ensuring robust rendering even under extreme conditions. This span drawing technique influenced later engines, providing a foundation for efficient texture mapping in real-time graphics. It demonstrated how careful algorithm design could overcome hardware limitations, paving the way for more advanced rendering techniques in games like Half-Life and Unreal. The function remains a testament to the ingenuity of Quake's developers and their ability to push the boundaries of real-time graphics."
  - id: "depth-buffering-trick"
    line_start: 386
    line_end: 444
    title: "The Depth Buffer Hack That Worked"
    wikipedia_url: "https://en.wikipedia.org/wiki/Depth_buffer"
    image_url: ""
    image_caption: ""
    content: "The `D_DrawZSpans` function handles depth buffering, a critical component of Quake's rendering pipeline. It calculates depth values (`zi`) for each pixel in a span, using fixed-point arithmetic to ensure precision and performance. The function also includes optimizations for writing depth values in batches, reducing memory access overhead. Depth buffering was a relatively new concept in 1996, and implementing it efficiently on x86 hardware was a significant challenge. Carmack and Abrash's use of fixed-point arithmetic and batch processing reflects their deep understanding of hardware constraints and their commitment to real-time performance. The function also relies on the assumption that floating-point exceptions are disabled, a clever workaround to avoid range issues. This depth buffering technique became a cornerstone of real-time graphics, influencing later engines and APIs like OpenGL and DirectX. It demonstrated how careful optimization could make advanced rendering techniques feasible on consumer-grade hardware, setting a precedent for future game engines. The function remains a valuable example of how Quake's developers pushed the boundaries of what was possible in real-time 3D graphics."

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
// d_scan.c
//
// Portable C scan-level rasterization code, all pixel depths.

#include "quakedef.h"
#include "r_local.h"
#include "d_local.h"

unsigned char	*r_turb_pbase, *r_turb_pdest;
fixed16_t		r_turb_s, r_turb_t, r_turb_sstep, r_turb_tstep;
int				*r_turb_turb;
int				r_turb_spancount;

void D_DrawTurbulent8Span (void);


/*
=============
D_WarpScreen

// this performs a slight compression of the screen at the same time as
// the sine warp, to keep the edges from wrapping
=============
*/
void D_WarpScreen (void)
{
	int		w, h;
	int		u,v;
	byte	*dest;
	int		*turb;
	int		*col;
	byte	**row;
	byte	*rowptr[1024];
	int		column[1280];
	float	wratio, hratio;

	w = r_refdef.vrect.width;
	h = r_refdef.vrect.height;

	wratio = w / (float)scr_vrect.width;
	hratio = h / (float)scr_vrect.height;

	for (v=0 ; v<scr_vrect.height+AMP2*2 ; v++)
	{
		rowptr[v] = d_viewbuffer + (r_refdef.vrect.y * screenwidth) +
				 (screenwidth * (int)((float)v * hratio * h / (h + AMP2 * 2)));
	}

	for (u=0 ; u<scr_vrect.width+AMP2*2 ; u++)
	{
		column[u] = r_refdef.vrect.x +
				(int)((float)u * wratio * w / (w + AMP2 * 2));
	}

	turb = intsintable + ((int)(cl.time*SPEED)&(CYCLE-1));
	dest = vid.buffer + scr_vrect.y * vid.rowbytes + scr_vrect.x;

	for (v=0 ; v<scr_vrect.height ; v++, dest += vid.rowbytes)
	{
		col = &column[turb[v]];
		row = &rowptr[v];
		for (u=0 ; u<scr_vrect.width ; u+=4)
		{
			dest[u+0] = row[turb[u+0]][col[u+0]];
			dest[u+1] = row[turb[u+1]][col[u+1]];
			dest[u+2] = row[turb[u+2]][col[u+2]];
			dest[u+3] = row[turb[u+3]][col[u+3]];
		}
	}
}


#if	!id386

/*
=============
D_DrawTurbulent8Span
=============
*/
void D_DrawTurbulent8Span (void)
{
	int		sturb, tturb;

	do
	{
		sturb = ((r_turb_s + r_turb_turb[(r_turb_t>>16)&(CYCLE-1)])>>16)&63;
		tturb = ((r_turb_t + r_turb_turb[(r_turb_s>>16)&(CYCLE-1)])>>16)&63;
		*r_turb_pdest++ = *(r_turb_pbase + (tturb<<6) + sturb);
		r_turb_s += r_turb_sstep;
		r_turb_t += r_turb_tstep;
	} while (--r_turb_spancount > 0);
}

#endif	// !id386

/*
=============
Turbulent8
=============
*/
void Turbulent8 (espan_t *pspan)
{
	int				count;
	fixed16_t		snext, tnext;
	float			sdivz, tdivz, zi, z, du, dv, spancountminus1;
	float			sdivz16stepu, tdivz16stepu, zi16stepu;
	
	r_turb_turb = sintable + ((int)(cl.time*SPEED)&(CYCLE-1));

	r_turb_sstep = 0;	// keep compiler happy
	r_turb_tstep = 0;	// ditto

	r_turb_pbase = (unsigned char *)cacheblock;

	sdivz16stepu = d_sdivzstepu * 16;
	tdivz16stepu = d_tdivzstepu * 16;
	zi16stepu = d_zistepu * 16;

	do
	{
		r_turb_pdest = (unsigned char *)((byte *)d_viewbuffer +
				(screenwidth * pspan->v) + pspan->u);

		count = pspan->count;

	// calculate the initial s/z, t/z, 1/z, s, and t and clamp
		du = (float)pspan->u;
		dv = (float)pspan->v;

		sdivz = d_sdivzorigin + dv*d_sdivzstepv + du*d_sdivzstepu;
		tdivz = d_tdivzorigin + dv*d_tdivzstepv + du*d_tdivzstepu;
		zi = d_ziorigin + dv*d_zistepv + du*d_zistepu;
		z = (float)0x10000 / zi;	// prescale to 16.16 fixed-point

		r_turb_s = (int)(sdivz * z) + sadjust;
		if (r_turb_s > bbextents)
			r_turb_s = bbextents;
		else if (r_turb_s < 0)
			r_turb_s = 0;

		r_turb_t = (int)(tdivz * z) + tadjust;
		if (r_turb_t > bbextentt)
			r_turb_t = bbextentt;
		else if (r_turb_t < 0)
			r_turb_t = 0;

		do
		{
		// calculate s and t at the far end of the span
			if (count >= 16)
				r_turb_spancount = 16;
			else
				r_turb_spancount = count;

			count -= r_turb_spancount;

			if (count)
			{
			// calculate s/z, t/z, zi->fixed s and t at far end of span,
			// calculate s and t steps across span by shifting
				sdivz += sdivz16stepu;
				tdivz += tdivz16stepu;
				zi += zi16stepu;
				z = (float)0x10000 / zi;	// prescale to 16.16 fixed-point

				snext = (int)(sdivz * z) + sadjust;
				if (snext > bbextents)
					snext = bbextents;
				else if (snext < 16)
					snext = 16;	// prevent round-off error on <0 steps from
								//  from causing overstepping & running off the
								//  edge of the texture

				tnext = (int)(tdivz * z) + tadjust;
				if (tnext > bbextentt)
					tnext = bbextentt;
				else if (tnext < 16)
					tnext = 16;	// guard against round-off error on <0 steps

				r_turb_sstep = (snext - r_turb_s) >> 4;
				r_turb_tstep = (tnext - r_turb_t) >> 4;
			}
			else
			{
			// calculate s/z, t/z, zi->fixed s and t at last pixel in span (so
			// can't step off polygon), clamp, calculate s and t steps across
			// span by division, biasing steps low so we don't run off the
			// texture
				spancountminus1 = (float)(r_turb_spancount - 1);
				sdivz += d_sdivzstepu * spancountminus1;
				tdivz += d_tdivzstepu * spancountminus1;
				zi += d_zistepu * spancountminus1;
				z = (float)0x10000 / zi;	// prescale to 16.16 fixed-point
				snext = (int)(sdivz * z) + sadjust;
				if (snext > bbextents)
					snext = bbextents;
				else if (snext < 16)
					snext = 16;	// prevent round-off error on <0 steps from
								//  from causing overstepping & running off the
								//  edge of the texture

				tnext = (int)(tdivz * z) + tadjust;
				if (tnext > bbextentt)
					tnext = bbextentt;
				else if (tnext < 16)
					tnext = 16;	// guard against round-off error on <0 steps

				if (r_turb_spancount > 1)
				{
					r_turb_sstep = (snext - r_turb_s) / (r_turb_spancount - 1);
					r_turb_tstep = (tnext - r_turb_t) / (r_turb_spancount - 1);
				}
			}

			r_turb_s = r_turb_s & ((CYCLE<<16)-1);
			r_turb_t = r_turb_t & ((CYCLE<<16)-1);

			D_DrawTurbulent8Span ();

			r_turb_s = snext;
			r_turb_t = tnext;

		} while (count > 0);

	} while ((pspan = pspan->pnext) != NULL);
}


#if	!id386

/*
=============
D_DrawSpans8
=============
*/
void D_DrawSpans8 (espan_t *pspan)
{
	int				count, spancount;
	unsigned char	*pbase, *pdest;
	fixed16_t		s, t, snext, tnext, sstep, tstep;
	float			sdivz, tdivz, zi, z, du, dv, spancountminus1;
	float			sdivz8stepu, tdivz8stepu, zi8stepu;

	sstep = 0;	// keep compiler happy
	tstep = 0;	// ditto

	pbase = (unsigned char *)cacheblock;

	sdivz8stepu = d_sdivzstepu * 8;
	tdivz8stepu = d_tdivzstepu * 8;
	zi8stepu = d_zistepu * 8;

	do
	{
		pdest = (unsigned char *)((byte *)d_viewbuffer +
				(screenwidth * pspan->v) + pspan->u);

		count = pspan->count;

	// calculate the initial s/z, t/z, 1/z, s, and t and clamp
		du = (float)pspan->u;
		dv = (float)pspan->v;

		sdivz = d_sdivzorigin + dv*d_sdivzstepv + du*d_sdivzstepu;
		tdivz = d_tdivzorigin + dv*d_tdivzstepv + du*d_tdivzstepu;
		zi = d_ziorigin + dv*d_zistepv + du*d_zistepu;
		z = (float)0x10000 / zi;	// prescale to 16.16 fixed-point

		s = (int)(sdivz * z) + sadjust;
		if (s > bbextents)
			s = bbextents;
		else if (s < 0)
			s = 0;

		t = (int)(tdivz * z) + tadjust;
		if (t > bbextentt)
			t = bbextentt;
		else if (t < 0)
			t = 0;

		do
		{
		// calculate s and t at the far end of the span
			if (count >= 8)
				spancount = 8;
			else
				spancount = count;

			count -= spancount;

			if (count)
			{
			// calculate s/z, t/z, zi->fixed s and t at far end of span,
			// calculate s and t steps across span by shifting
				sdivz += sdivz8stepu;
				tdivz += tdivz8stepu;
				zi += zi8stepu;
				z = (float)0x10000 / zi;	// prescale to 16.16 fixed-point

				snext = (int)(sdivz * z) + sadjust;
				if (snext > bbextents)
					snext = bbextents;
				else if (snext < 8)
					snext = 8;	// prevent round-off error on <0 steps from
								//  from causing overstepping & running off the
								//  edge of the texture

				tnext = (int)(tdivz * z) + tadjust;
				if (tnext > bbextentt)
					tnext = bbextentt;
				else if (tnext < 8)
					tnext = 8;	// guard against round-off error on <0 steps

				sstep = (snext - s) >> 3;
				tstep = (tnext - t) >> 3;
			}
			else
			{
			// calculate s/z, t/z, zi->fixed s and t at last pixel in span (so
			// can't step off polygon), clamp, calculate s and t steps across
			// span by division, biasing steps low so we don't run off the
			// texture
				spancountminus1 = (float)(spancount - 1);
				sdivz += d_sdivzstepu * spancountminus1;
				tdivz += d_tdivzstepu * spancountminus1;
				zi += d_zistepu * spancountminus1;
				z = (float)0x10000 / zi;	// prescale to 16.16 fixed-point
				snext = (int)(sdivz * z) + sadjust;
				if (snext > bbextents)
					snext = bbextents;
				else if (snext < 8)
					snext = 8;	// prevent round-off error on <0 steps from
								//  from causing overstepping & running off the
								//  edge of the texture

				tnext = (int)(tdivz * z) + tadjust;
				if (tnext > bbextentt)
					tnext = bbextentt;
				else if (tnext < 8)
					tnext = 8;	// guard against round-off error on <0 steps

				if (spancount > 1)
				{
					sstep = (snext - s) / (spancount - 1);
					tstep = (tnext - t) / (spancount - 1);
				}
			}

			do
			{
				*pdest++ = *(pbase + (s >> 16) + (t >> 16) * cachewidth);
				s += sstep;
				t += tstep;
			} while (--spancount > 0);

			s = snext;
			t = tnext;

		} while (count > 0);

	} while ((pspan = pspan->pnext) != NULL);
}

#endif


#if	!id386

/*
=============
D_DrawZSpans
=============
*/
void D_DrawZSpans (espan_t *pspan)
{
	int				count, doublecount, izistep;
	int				izi;
	short			*pdest;
	unsigned		ltemp;
	double			zi;
	float			du, dv;

// FIXME: check for clamping/range problems
// we count on FP exceptions being turned off to avoid range problems
	izistep = (int)(d_zistepu * 0x8000 * 0x10000);

	do
	{
		pdest = d_pzbuffer + (d_zwidth * pspan->v) + pspan->u;

		count = pspan->count;

	// calculate the initial 1/z
		du = (float)pspan->u;
		dv = (float)pspan->v;

		zi = d_ziorigin + dv*d_zistepv + du*d_zistepu;
	// we count on FP exceptions being turned off to avoid range problems
		izi = (int)(zi * 0x8000 * 0x10000);

		if ((long)pdest & 0x02)
		{
			*pdest++ = (short)(izi >> 16);
			izi += izistep;
			count--;
		}

		if ((doublecount = count >> 1) > 0)
		{
			do
			{
				ltemp = izi >> 16;
				izi += izistep;
				ltemp |= izi & 0xFFFF0000;
				izi += izistep;
				*(int *)pdest = ltemp;
				pdest += 2;
			} while (--doublecount > 0);
		}

		if (count & 1)
			*pdest = (short)(izi >> 16);

	} while ((pspan = pspan->pnext) != NULL);
}

#endif
```