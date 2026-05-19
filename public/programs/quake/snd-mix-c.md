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
description: "This file handles sound mixing in Quake, showcasing advanced techniques for real-time audio processing on constrained hardware."

summary:
  - point: "Optimized sound mixing for stereo output"
    link: "https://en.wikipedia.org/wiki/Sound_card"
    link_label: "Sound card"
  - point: "Dynamic handling of sound buffer locking"
    link: "https://en.wikipedia.org/wiki/DirectSound"
    link_label: "DirectSound"
  - point: "Efficient scaling tables for audio volume control"
    link: "https://en.wikipedia.org/wiki/Audio_signal_processing"
    link_label: "Audio signal processing"
  - point: "Support for multiple audio formats (8-bit and 16-bit)"
    link: "https://en.wikipedia.org/wiki/Audio_bit_depth"
    link_label: "Audio bit depth"
  - point: "Looping and channel management for continuous sound playback"
    link: "https://en.wikipedia.org/wiki/Sound_synthesis"
    link_label: "Sound synthesis"

enhancements:
  - id: "portable-sample-pair-buffer"
    line_start: 20
    line_end: 30
    title: "Portable sound buffer for real-time mixing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_card"
    image_url: ""
    image_caption: ""
    content: "This section defines the foundational data structures and constants for sound mixing in Quake. The `paintbuffer` array is a portable sample pair buffer used to temporarily store mixed audio data before transferring it to the sound hardware. The `snd_scaletable` provides precomputed scaling values for volume adjustment, optimizing performance by avoiding runtime calculations. In 1996, real-time sound mixing was a computationally expensive task, especially on consumer-grade hardware like the x86 processors of the era. By precomputing values and using efficient data structures, id Software ensured smooth audio playback without compromising the game's performance. This approach influenced later game engines, which adopted similar techniques to handle audio mixing efficiently."
  - id: "linear-blast-stereo-mixing"
    line_start: 36
    line_end: 63
    title: "Linear blast stereo mixing routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Audio_signal_processing"
    image_url: ""
    image_caption: ""
    content: "The `Snd_WriteLinearBlastStereo16` function processes audio data for stereo output by scaling and clamping sample values to prevent overflow. This routine iterates through the sound buffer, adjusting each sample's volume based on the global `snd_vol` variable. The clamping ensures that values remain within the valid range for 16-bit audio. In the mid-1990s, sound cards were becoming more common, but their capabilities varied widely. Supporting stereo output was a significant step forward, as many games still relied on mono sound. John Carmack's focus on optimizing performance for all supported hardware ensured Quake's audio system could deliver high-quality sound without excessive CPU usage. This technique laid the groundwork for modern audio engines that prioritize efficiency and compatibility."
  - id: "stereo-transfer-buffer"
    line_start: 65
    line_end: 137
    title: "Handling stereo sound buffer transfers"
    wikipedia_url: "https://en.wikipedia.org/wiki/DirectSound"
    image_url: ""
    image_caption: ""
    content: "The `S_TransferStereo16` function manages the transfer of stereo audio data from the paint buffer to the hardware sound buffer. It includes logic for handling recirculating buffers and dynamically locks and unlocks the DirectSound buffer on Windows systems. This ensures seamless audio playback even when the buffer is partially full or temporarily inaccessible. In the mid-1990s, DirectSound was a relatively new API, introduced with Windows 95. By leveraging DirectSound's capabilities, id Software was able to provide robust audio support for Windows users while maintaining compatibility with other platforms. This approach influenced the development of cross-platform audio systems in later game engines, such as Unreal Engine and Unity."
  - id: "paint-buffer-transfer"
    line_start: 139
    line_end: 247
    title: "Flexible paint buffer transfer for audio formats"
    wikipedia_url: "https://en.wikipedia.org/wiki/Audio_bit_depth"
    image_url: ""
    image_caption: ""
    content: "The `S_TransferPaintBuffer` function handles the transfer of mixed audio data from the paint buffer to the DMA buffer, supporting both 8-bit and 16-bit audio formats. It dynamically adjusts the transfer process based on the current audio configuration, ensuring compatibility with various hardware setups. This flexibility was crucial in 1996, as sound cards varied widely in their capabilities. By supporting multiple bit depths, Quake could deliver high-quality audio on advanced hardware while maintaining compatibility with older systems. This design philosophy of accommodating diverse hardware configurations became a hallmark of id Software's engineering approach and influenced the broader industry, encouraging developers to prioritize accessibility and performance."
  - id: "channel-mixing-loop"
    line_start: 261
    line_end: 332
    title: "Dynamic channel mixing for continuous playback"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_synthesis"
    image_url: ""
    image_caption: ""
    content: "The `S_PaintChannels` function is responsible for mixing audio channels into the paint buffer. It iterates through active channels, applying volume adjustments and looping logic to ensure continuous playback. Channels with looped sounds restart automatically when they reach the end, while non-looped sounds are stopped. This approach allows Quake to handle complex audio scenarios, such as overlapping sound effects and ambient noise, without noticeable interruptions. In the mid-1990s, real-time audio mixing was a challenging task due to limited CPU power and memory. By implementing efficient algorithms and prioritizing performance, id Software set a new standard for dynamic sound systems in games. This technique influenced later engines, such as Source and CryEngine, which adopted similar strategies for managing audio playback."
  - id: "precomputed-volume-scaling"
    line_start: 334
    line_end: 341
    title: "Precomputing volume scaling for efficiency"
    wikipedia_url: "https://en.wikipedia.org/wiki/Audio_signal_processing"
    image_url: ""
    image_caption: ""
    content: "The `SND_InitScaletable` function initializes the `snd_scaletable` with precomputed volume scaling values. This table maps audio sample values to their scaled counterparts based on volume levels, significantly reducing the computational overhead during mixing. In 1996, optimizing performance was critical, as CPUs like the Intel Pentium operated at speeds that would be considered slow by modern standards. Precomputing values allowed Quake to perform real-time audio mixing without burdening the CPU, ensuring smooth gameplay even on lower-end systems. This technique became a common practice in game development, influencing audio processing in engines like Frostbite and Unreal Engine."
  - id: "8-bit-channel-mixing"
    line_start: 344
    line_end: 372
    title: "Mixing 8-bit audio channels efficiently"
    wikipedia_url: "https://en.wikipedia.org/wiki/Audio_bit_depth"
    image_url: ""
    image_caption: ""
    content: "The `SND_PaintChannelFrom8` function mixes 8-bit audio channels into the paint buffer. It uses the precomputed scaling table to adjust sample values based on the channel's volume, ensuring efficient processing. The function also clamps values to prevent overflow, maintaining audio quality. In the mid-1990s, 8-bit audio was still common, especially on older sound cards. By supporting this format, Quake ensured compatibility with a wide range of hardware while delivering high-quality sound on more advanced systems. This approach influenced later games and engines, which continued to support legacy audio formats to maximize accessibility."
  - id: "16-bit-channel-mixing"
    line_start: 375
    line_end: 397
    title: "Mixing 16-bit audio channels for high fidelity"
    wikipedia_url: "https://en.wikipedia.org/wiki/Audio_bit_depth"
    image_url: ""
    image_caption: ""
    content: "The `SND_PaintChannelFrom16` function mixes 16-bit audio channels into the paint buffer, providing higher fidelity sound compared to 8-bit mixing. It scales sample values based on the channel's volume and adds them to the paint buffer, ensuring smooth playback. In 1996, 16-bit audio was becoming the standard for high-quality sound cards, offering a significant improvement in audio fidelity. By supporting this format, Quake delivered immersive soundscapes that complemented its groundbreaking visuals. This focus on high-quality audio influenced the industry, encouraging developers to prioritize sound design as a critical component of the gaming experience."

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
