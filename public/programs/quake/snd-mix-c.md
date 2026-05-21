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
description: "This file handles sound mixing for Quake, showcasing techniques for real-time audio processing on constrained hardware."

summary:
  - point: "Efficient stereo sound mixing using linear sample blasts"
    link: "https://en.wikipedia.org/wiki/Sound_card"
    link_label: "Sound Card"
  - point: "Dynamic handling of audio buffers for real-time playback"
    link: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    link_label: "Buffer"
  - point: "Optimization for both 8-bit and 16-bit audio formats"
    link: "https://en.wikipedia.org/wiki/Audio_bit_depth"
    link_label: "Audio Bit Depth"
  - point: "Scaletable lookup for fast volume adjustments"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup Table"
  - point: "Support for looping sound effects in channels"
    link: "https://en.wikipedia.org/wiki/Audio_signal_processing"
    link_label: "Audio Signal Processing"

enhancements:
  - id: "foundation-sound-buffer-definition"
    line_start: 1
    line_end: 34
    title: "Why Define a Paint Buffer at 512?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_card"
    image_url: ""
    image_caption: ""
    content: "This section defines the paint buffer size and initializes key variables for sound mixing. The paint buffer, set to 512 samples, serves as a temporary workspace for audio data before being transferred to the DMA buffer. This choice balances memory constraints with the need for smooth audio playback. In 1996, sound cards often operated with limited memory and processing power, requiring developers to optimize every aspect of audio handling. By precomputing volume adjustments in a scaletable, the code avoids expensive runtime calculations, a technique inspired by lookup tables used in graphics rendering. This foundational setup enabled Quake to deliver immersive audio experiences despite hardware limitations, influencing later game engines like Unreal Engine and Source Engine."
  - id: "linear-blast-stereo-mixing"
    line_start: 38
    line_end: 62
    title: "The Linear Blast That Mixed Stereo Sound"
    wikipedia_url: "https://en.wikipedia.org/wiki/Stereo"
    image_url: ""
    image_caption: ""
    content: "This routine, `Snd_WriteLinearBlastStereo16`, processes stereo audio samples by scaling them to the desired volume and clamping values to prevent overflow. The loop iterates through the paint buffer, applying volume adjustments and ensuring the values remain within the valid range for 16-bit audio. In the mid-90s, sound cards like Creative Labs' Sound Blaster were common, and developers had to work around their quirks. This routine exemplifies Carmack's focus on efficiency, using bitwise shifts for scaling instead of slower division operations. The technique ensured Quake's audio remained crisp and responsive, setting a standard for real-time audio processing in games. Modern engines still use similar principles for audio mixing, albeit with more advanced hardware."
  - id: "stereo-transfer-buffer-lock"
    line_start: 63
    line_end: 137
    title: "Locking Buffers for Stereo Sound Transfer"
    wikipedia_url: "https://en.wikipedia.org/wiki/DirectSound"
    image_url: ""
    image_caption: ""
    content: "The `S_TransferStereo16` function handles the transfer of stereo sound data to the DMA buffer, ensuring smooth playback. On Windows, it uses DirectSound's `Lock` method to access the sound buffer, retrying if the buffer is lost—a common issue with DirectSound in the 90s. This robust error handling reflects the challenges of programming for varied hardware configurations. The function also manages recirculating buffers, a technique to wrap audio data seamlessly within limited memory. This approach allowed Quake to deliver uninterrupted sound even on systems with constrained resources. The use of DirectSound here influenced how later games interfaced with audio APIs, paving the way for modern frameworks like OpenAL and FMOD."
  - id: "paint-buffer-transfer"
    line_start: 139
    line_end: 247
    title: "Painting the Buffer: Mixing Channels Dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/Audio_signal_processing"
    image_url: ""
    image_caption: ""
    content: "The `S_TransferPaintBuffer` function dynamically mixes audio channels into the paint buffer, accommodating different sample rates and bit depths. It supports both 8-bit and 16-bit audio, reflecting the diverse hardware landscape of the 90s. The function adjusts volume and clamps values to prevent distortion, ensuring high-quality sound output. By supporting multiple audio formats, Quake could run on a wide range of systems, from high-end gaming PCs to more modest setups. This adaptability contributed to its widespread popularity and set a precedent for cross-platform audio handling in games. Techniques from this function influenced later engines, including Unity and Unreal, which prioritize compatibility and performance."
  - id: "scaletable-initialization"
    line_start: 334
    line_end: 341
    title: "Precomputing Volume Adjustments for Speed"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "The `SND_InitScaletable` function initializes a lookup table for volume adjustments, precomputing values to avoid runtime calculations. This optimization leverages the principle of trading memory for speed, a common strategy in 90s game development. By storing scaled values for different volume levels, the code can quickly retrieve adjustments during audio mixing, reducing CPU overhead. This approach was inspired by similar techniques in graphics rendering, where lookup tables were used for color and lighting calculations. The scaletable's efficiency contributed to Quake's ability to deliver real-time audio on constrained hardware, influencing later engines and frameworks that adopted similar optimizations."
  - id: "channel-mixing-from-8-bit-samples"
    line_start: 344
    line_end: 370
    title: "Mixing Channels from 8-Bit Audio Data"
    wikipedia_url: "https://en.wikipedia.org/wiki/Audio_bit_depth"
    image_url: ""
    image_caption: ""
    content: "The `SND_PaintChannelFrom8` function mixes audio channels using 8-bit sample data, scaling values based on channel volume and adding them to the paint buffer. This routine ensures compatibility with lower-quality audio formats, reflecting the diverse hardware landscape of the 90s. By supporting 8-bit samples, Quake could run on systems with limited sound card capabilities, broadening its accessibility. The function's use of precomputed scaletable values exemplifies the game's focus on efficiency, enabling real-time audio mixing without taxing the CPU. Techniques from this routine influenced later games that prioritized performance and compatibility, including Half-Life and Counter-Strike."
  - id: "channel-mixing-from-16-bit-samples"
    line_start: 375
    line_end: 397
    title: "High-Fidelity Mixing with 16-Bit Samples"
    wikipedia_url: "https://en.wikipedia.org/wiki/Audio_bit_depth"
    image_url: ""
    image_caption: ""
    content: "The `SND_PaintChannelFrom16` function processes 16-bit audio samples, scaling them based on channel volume and adding them to the paint buffer. This routine delivers higher fidelity sound, catering to systems with advanced sound cards. By supporting both 8-bit and 16-bit formats, Quake ensured compatibility across a wide range of hardware configurations. The function's efficient scaling and mixing techniques allowed the game to maintain immersive audio experiences without compromising performance. This dual-format support influenced later engines that prioritized adaptability, including the Source Engine and CryEngine, which continue to support varied audio formats for cross-platform development."

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
```
