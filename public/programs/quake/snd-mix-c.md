---
title: "snd_mix.c"
program: "Quake"
program_slug: "quake"
file_path: "QW/client/snd_mix.c"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/Quake/blob/master/QW/client/snd_mix.c"
year: 1996
author: "John Carmack, Michael Abrash, John Cash"
slug: "snd-mix-c"
order: 17
description: "This file handles sound mixing routines in Quake, showcasing optimization techniques for real-time audio processing on 1990s hardware."

summary:
  - point: "Efficient stereo sound mixing for limited hardware"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Dynamic handling of sound buffers for real-time playback"
    link: "https://en.wikipedia.org/wiki/DirectSound"
    link_label: "DirectSound"
  - point: "Optimized scaling tables for audio volume adjustments"
    link: "https://en.wikipedia.org/wiki/Digital_audio"
    link_label: "Digital Audio"

enhancements:
  - id: "foundation-data-structures"
    line_start: 17
    line_end: 30
    title: "Foundation: Paintbuffer and Scale Tables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Digital_audio"
    image_url: ""
    image_caption: ""
    content: "The opening lines of this file define the foundational data structures for sound mixing in Quake. The `paintbuffer` serves as a temporary storage for mixed audio samples before they are transferred to the sound hardware. The `snd_scaletable` is a precomputed lookup table used to efficiently scale audio volumes, avoiding costly multiplications during runtime. In 1996, real-time audio processing was constrained by the limited computational power of x86 processors, making precomputed tables a common optimization technique. These structures reflect id Software's focus on performance, ensuring Quake could deliver immersive audio experiences without compromising frame rates. The use of fixed-size buffers and integer arithmetic highlights the team's deep understanding of hardware limitations and their ability to work within them."
  - id: "linear-blast-stereo"
    line_start: 36
    line_end: 63
    title: "Linear Blast: Stereo Sound Mixing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Stereo_sound"
    image_url: ""
    image_caption: ""
    content: "The `Snd_WriteLinearBlastStereo16` function is a critical routine for mixing stereo sound samples. It processes audio data by scaling sample values based on volume and clamping them to prevent overflow. This ensures audio fidelity while avoiding distortion. In the mid-1990s, stereo sound was becoming standard in PC gaming, and Quake's ability to deliver high-quality audio contributed to its immersive experience. John Carmack and Michael Abrash, known for their optimization prowess, designed this routine to handle large volumes of audio data efficiently. The use of bitwise operations and integer arithmetic reflects the team's focus on minimizing CPU cycles, a necessity for achieving smooth gameplay on hardware like the Intel Pentium processors of the era."
  - id: "stereo-transfer-routine"
    line_start: 65
    line_end: 137
    title: "Stereo Transfer: Managing Sound Buffers"
    wikipedia_url: "https://en.wikipedia.org/wiki/DirectSound"
    image_url: ""
    image_caption: ""
    content: "The `S_TransferStereo16` function handles the transfer of stereo sound data to the output buffer, ensuring seamless playback. It includes platform-specific code for Windows, leveraging DirectSound APIs to lock and unlock sound buffers. This reflects id Software's commitment to cross-platform compatibility, as Quake was designed to run on both Windows and DOS systems. The function also addresses buffer recirculation issues, a common challenge in real-time audio systems. By carefully managing buffer positions and sizes, the team ensured that audio playback remained smooth even under heavy load. This routine exemplifies the meticulous attention to detail required to deliver a high-performance gaming experience on 1990s hardware."
  - id: "paint-buffer-transfer"
    line_start: 139
    line_end: 251
    title: "Paint Buffer: Multi-format Audio Handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Digital_audio"
    image_url: ""
    image_caption: ""
    content: "The `S_TransferPaintBuffer` function is a versatile routine that handles audio data in multiple formats, including 8-bit and 16-bit samples. It dynamically adjusts its behavior based on the sound hardware's capabilities, ensuring compatibility across a wide range of systems. This flexibility was crucial in 1996, as PC hardware varied significantly in audio capabilities. The function also includes platform-specific optimizations for Windows, highlighting id Software's ability to adapt their code to different environments. By supporting both mono and stereo channels, the routine ensures Quake's audio system can deliver an immersive experience regardless of the user's hardware setup. This adaptability contributed to Quake's widespread success and its reputation as a technical masterpiece."
  - id: "channel-mixing-loop"
    line_start: 261
    line_end: 332
    title: "Channel Mixing: Dynamic Soundscapes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_channel"
    image_url: ""
    image_caption: ""
    content: "The `S_PaintChannels` function is the heart of Quake's sound mixing system, dynamically combining audio channels to create a rich soundscape. It iterates through active sound channels, mixing their samples into the paintbuffer while handling looping and stopping conditions. This routine showcases id Software's ability to manage complex audio interactions in real time, a key feature in creating immersive environments. The function's design reflects the team's deep understanding of game audio, balancing performance with quality. By supporting multiple channels and dynamic effects, Quake set a new standard for audio in gaming, influencing countless titles that followed."
  - id: "scaletable-initialization"
    line_start: 334
    line_end: 344
    title: "Scaletable: Precomputing for Performance"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "The `SND_InitScaletable` function precomputes the `snd_scaletable`, a lookup table used for scaling audio volumes. This optimization reduces the computational overhead during runtime, a critical consideration for real-time audio processing on 1990s hardware. By precomputing values, the routine avoids costly multiplications, ensuring Quake's sound system can operate efficiently even under heavy load. This approach reflects id Software's mastery of low-level optimization techniques, a hallmark of their work. The use of lookup tables was a common strategy in the era, enabling developers to achieve high performance on limited hardware. This routine is a testament to the team's ability to innovate within the constraints of the time."
  - id: "paint-channel-from-8"
    line_start: 346
    line_end: 372
    title: "8-bit Channel Mixing: Compact Audio Processing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Audio_bit_depth"
    image_url: ""
    image_caption: ""
    content: "The `SND_PaintChannelFrom8` function processes audio channels with 8-bit sample data, mixing them into the paintbuffer. It uses precomputed scaling tables to adjust volumes, ensuring efficient processing. In the mid-1990s, 8-bit audio was still common in gaming, especially on lower-end systems. This routine reflects id Software's commitment to supporting a wide range of hardware configurations, ensuring Quake could reach the broadest possible audience. The function's design highlights the team's ability to optimize for performance while maintaining audio quality, a key factor in Quake's success."
  - id: "paint-channel-from-16"
    line_start: 375
    line_end: 397
    title: "16-bit Channel Mixing: High-Fidelity Audio"
    wikipedia_url: "https://en.wikipedia.org/wiki/Audio_bit_depth"
    image_url: ""
    image_caption: ""
    content: "The `SND_PaintChannelFrom16` function handles audio channels with 16-bit sample data, providing higher fidelity sound. It scales sample values based on channel volumes and mixes them into the paintbuffer. By supporting 16-bit audio, Quake delivers a richer and more immersive sound experience, taking advantage of advancements in PC audio hardware. This routine reflects id Software's forward-thinking approach, ensuring Quake could leverage the best technology available. The function's design demonstrates the team's ability to balance quality and performance, a hallmark of their work."

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
// snd_mix.c -- portable code to mix sounds for snd_dma.c

#include "quakedef.h"

#ifdef _WIN32
#include "winquake.h"
#else
#define DWORD	unsigned long
#endif

#define	PAINTBUFFER_SIZE	512
portable_samplepair_t paintbuffer[PAINTBUFFER_SIZE];
int		snd_scaletable[32][256];
int 	*snd_p, snd_linear_count, snd_vol;
short	*snd_out;

void Snd_WriteLinearBlastStereo16 (void);

#if	!id386
void Snd_WriteLinearBlastStereo16 (void)
{
	int		i;
	int		val;

	for (i=0 ; i<snd_linear_count ; i+=2)
	{
		val = (snd_p[i]*snd_vol)>>8;
		if (val > 0x7fff)
			snd_out[i] = 0x7fff;
		else if (val < (short)0x8000)
			snd_out[i] = (short)0x8000;
		else
			snd_out[i] = val;

		val = (snd_p[i+1]*snd_vol)>>8;
		if (val > 0x7fff)
			snd_out[i+1] = 0x7fff;
		else if (val < (short)0x8000)
			snd_out[i+1] = (short)0x8000;
		else
			snd_out[i+1] = val;
	}
}
#endif

void S_TransferStereo16 (int endtime)
{
	int		lpos;
	int		lpaintedtime;
	DWORD	*pbuf;
#ifdef _WIN32
	int		reps;
	DWORD	dwSize,dwSize2;
	DWORD	*pbuf2;
	HRESULT	hresult;
#endif
	
	snd_vol = volume.value*256;

	snd_p = (int *) paintbuffer;
	lpaintedtime = paintedtime;

#ifdef _WIN32
	if (pDSBuf)
	{
		reps = 0;

		while ((hresult = pDSBuf->lpVtbl->Lock(pDSBuf, 0, gSndBufSize, &pbuf, &dwSize, 
									   &pbuf2, &dwSize2, 0)) != DS_OK)
		{
			if (hresult != DSERR_BUFFERLOST)
			{
				Con_Printf ("S_TransferStereo16: DS::Lock Sound Buffer Failed\n");
				S_Shutdown ();
				S_Startup ();
				return;
			}

			if (++reps > 10000)
			{
				Con_Printf ("S_TransferStereo16: DS: couldn't restore buffer\n");
				S_Shutdown ();
				S_Startup ();
				return;
			}
		}
	}
	else
#endif
	{
		pbuf = (DWORD *)shm->buffer;
	}

	while (lpaintedtime < endtime)
	{
	// handle recirculating buffer issues
		lpos = lpaintedtime & ((shm->samples>>1)-1);

		snd_out = (short *) pbuf + (lpos<<1);

		snd_linear_count = (shm->samples>>1) - lpos;
		if (lpaintedtime + snd_linear_count > endtime)
			snd_linear_count = endtime - lpaintedtime;

		snd_linear_count <<= 1;

	// write a linear blast of samples
		Snd_WriteLinearBlastStereo16 ();

		snd_p += snd_linear_count;
		lpaintedtime += (snd_linear_count>>1);
	}

#ifdef _WIN32
	if (pDSBuf)
		pDSBuf->lpVtbl->Unlock(pDSBuf, pbuf, dwSize, NULL, 0);
#endif
}

void S_TransferPaintBuffer(int endtime)
{
	int 	out_idx;
	int 	count;
	int 	out_mask;
	int 	*p;
	int 	step;
	int		val;
	int		snd_vol;
	DWORD	*pbuf;
#ifdef _WIN32
	int		reps;
	DWORD	dwSize,dwSize2;
	DWORD	*pbuf2;
	HRESULT	hresult;
#endif

	if (shm->samplebits == 16 && shm->channels == 2)
	{
		S_TransferStereo16 (endtime);
		return;
	}
	
	p = (int *) paintbuffer;
	count = (endtime - paintedtime) * shm->channels;
	out_mask = shm->samples - 1; 
	out_idx = paintedtime * shm->channels & out_mask;
	step = 3 - shm->channels;
	snd_vol = volume.value*256;

#ifdef _WIN32
	if (pDSBuf)
	{
		reps = 0;

		while ((hresult = pDSBuf->lpVtbl->Lock(pDSBuf, 0, gSndBufSize, &pbuf, &dwSize, 
									   &pbuf2,&dwSize2, 0)) != DS_OK)
		{
			if (hresult != DSERR_BUFFERLOST)
			{
				Con_Printf ("S_TransferPaintBuffer: DS::Lock Sound Buffer Failed\n");
				S_Shutdown ();
				S_Startup ();
				return;
			}

			if (++reps > 10000)
			{
				Con_Printf ("S_TransferPaintBuffer: DS: couldn't restore buffer\n");
				S_Shutdown ();
				S_Startup ();
				return;
			}
		}
	}
	else
#endif
	{
		pbuf = (DWORD *)shm->buffer;
	}

	if (shm->samplebits == 16)
	{
		short *out = (short *) pbuf;
		while (count--)
		{
			val = (*p * snd_vol) >> 8;
			p+= step;
			if (val > 0x7fff)
				val = 0x7fff;
			else if (val < (short)0x8000)
				val = (short)0x8000;
			out[out_idx] = val;
			out_idx = (out_idx + 1) & out_mask;
		}
	}
	else if (shm->samplebits == 8)
	{
		unsigned char *out = (unsigned char *) pbuf;
		while (count--)
		{
			val = (*p * snd_vol) >> 8;
			p+= step;
			if (val > 0x7fff)
				val = 0x7fff;
			else if (val < (short)0x8000)
				val = (short)0x8000;
			out[out_idx] = (val>>8) + 128;
			out_idx = (out_idx + 1) & out_mask;
		}
	}

#ifdef _WIN32
	if (pDSBuf) {
		DWORD dwNewpos, dwWrite;
		int il = paintedtime;
		int ir = endtime - paintedtime;
		
		ir += il;

		pDSBuf->lpVtbl->Unlock(pDSBuf, pbuf, dwSize, NULL, 0);

		pDSBuf->lpVtbl->GetCurrentPosition(pDSBuf, &dwNewpos, &dwWrite);

//		if ((dwNewpos >= il) && (dwNewpos <= ir))
//			Con_Printf("%d-%d p %d c\n", il, ir, dwNewpos);
	}
#endif
}


/*
===============================================================================

CHANNEL MIXING

===============================================================================
*/

void SND_PaintChannelFrom8 (channel_t *ch, sfxcache_t *sc, int endtime);
void SND_PaintChannelFrom16 (channel_t *ch, sfxcache_t *sc, int endtime);

void S_PaintChannels(int endtime)
{
	int 	i;
	int 	end;
	channel_t *ch;
	sfxcache_t	*sc;
	int		ltime, count;

	while (paintedtime < endtime)
	{
	// if paintbuffer is smaller than DMA buffer
		end = endtime;
		if (endtime - paintedtime > PAINTBUFFER_SIZE)
			end = paintedtime + PAINTBUFFER_SIZE;

	// clear the paint buffer
		Q_memset(paintbuffer, 0, (end - paintedtime) * sizeof(portable_samplepair_t));

	// paint in the channels.
		ch = channels;
		for (i=0; i<total_channels ; i++, ch++)
		{
			if (!ch->sfx)
				continue;
			if (!ch->leftvol && !ch->rightvol)
				continue;
			sc = S_LoadSound (ch->sfx);
			if (!sc)
				continue;

			ltime = paintedtime;

			while (ltime < end)
			{	// paint up to end
				if (ch->end < end)
					count = ch->end - ltime;
				else
					count = end - ltime;

				if (count > 0)
				{	
					if (sc->width == 1)
						SND_PaintChannelFrom8(ch, sc, count);
					else
						SND_PaintChannelFrom16(ch, sc, count);
	
					ltime += count;
				}

			// if at end of loop, restart
				if (ltime >= ch->end)
				{
					if (sc->loopstart >= 0)
					{
						ch->pos = sc->loopstart;
						ch->end = ltime + sc->length - ch->pos;
					}
					else				
					{	// channel just stopped
						ch->sfx = NULL;
						break;
					}
				}
			}
															  
		}

	// transfer out according to DMA format
		S_TransferPaintBuffer(end);
		paintedtime = end;
	}
}

void SND_InitScaletable (void)
{
	int		i, j;
	
	for (i=0 ; i<32 ; i++)
		for (j=0 ; j<256 ; j++)
			snd_scaletable[i][j] = ((signed char)j) * i * 8;
}


#if	!id386

void SND_PaintChannelFrom8 (channel_t *ch, sfxcache_t *sc, int count)
{
	int 	data;
	int		*lscale, *rscale;
	unsigned char *sfx;
	int		i;

	if (ch->leftvol > 255)
		ch->leftvol = 255;
	if (ch->rightvol > 255)
		ch->rightvol = 255;
		
	lscale = snd_scaletable[ch->leftvol >> 3];
	rscale = snd_scaletable[ch->rightvol >> 3];
	sfx = (signed char *)sc->data + ch->pos;

	for (i=0 ; i<count ; i++)
	{
		data = sfx[i];
		paintbuffer[i].left += lscale[data];
		paintbuffer[i].right += rscale[data];
	}
	
	ch->pos += count;
}

#endif	// !id386


void SND_PaintChannelFrom16 (channel_t *ch, sfxcache_t *sc, int count)
{
	int data;
	int left, right;
	int leftvol, rightvol;
	signed short *sfx;
	int	i;

	leftvol = ch->leftvol;
	rightvol = ch->rightvol;
	sfx = (signed short *)sc->data + ch->pos;

	for (i=0 ; i<count ; i++)
	{
		data = sfx[i];
		left = (data * leftvol) >> 8;
		right = (data * rightvol) >> 8;
		paintbuffer[i].left += left;
		paintbuffer[i].right += right;
	}

	ch->pos += count;
}
