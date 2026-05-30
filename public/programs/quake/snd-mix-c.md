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
description: "This file handles sound mixing for Quake, showcasing optimization techniques for real-time audio on constrained hardware."

summary:
  - point: "Introduces scalable sound mixing for stereo audio"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Uses lookup tables to optimize audio scaling"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup Table"
  - point: "Handles multiple audio formats (8-bit and 16-bit)"
    link: "https://en.wikipedia.org/wiki/Digital_audio"
    link_label: "Digital Audio"
  - point: "Employs platform-specific DirectSound integration for Windows"
    link: "https://en.wikipedia.org/wiki/DirectSound"
    link_label: "DirectSound"
  - point: "Manages sound channels dynamically for real-time mixing"
    link: "https://en.wikipedia.org/wiki/Sound_channel"
    link_label: "Sound Channel"

enhancements:
  - id: "linear-blast-stereo16"
    line_start: 38
    line_end: 62
    title: "The Algorithm That Prevents Audio Clipping"
    wikipedia_url: "https://en.wikipedia.org/wiki/Clipping_(audio)"
    image_url: ""
    image_caption: ""
    content: "This function, `Snd_WriteLinearBlastStereo16`, processes stereo audio samples to prevent clipping, a common issue in digital sound mixing where values exceed the maximum range. The algorithm scales audio samples by a volume factor and clamps them within the permissible range of -32768 to 32767 (16-bit signed integers). At the time, real-time audio processing had to be efficient due to limited CPU power, especially on x86 processors. John Carmack and Michael Abrash, known for their expertise in optimization, likely designed this routine to ensure smooth audio playback without introducing distortion. The technique of clamping values to avoid clipping became a standard practice in audio programming and is still widely used in modern game engines and audio libraries."
  - id: "transfer-stereo16-buffer"
    line_start: 63
    line_end: 137
    title: "How Quake Mixed Stereo Audio in Real Time"
    wikipedia_url: "https://en.wikipedia.org/wiki/Stereo_sound"
    image_url: ""
    image_caption: ""
    content: "The `S_TransferStereo16` function transfers audio data from the paint buffer to the output buffer for playback. It integrates platform-specific features like DirectSound on Windows, ensuring compatibility with hardware sound buffers. This routine handles recirculating audio buffers, a technique required to manage continuous sound playback on constrained memory systems. By locking and unlocking sound buffers, it ensures synchronization between the game engine and the audio hardware. This approach reflects the challenges of real-time sound mixing in the mid-1990s, where developers had to balance performance with hardware limitations. The method influenced later game engines, including id Tech derivatives and other real-time audio systems."
  - id: "transfer-paint-buffer"
    line_start: 139
    line_end: 247
    title: "Dynamic Sound Buffer Management for Multiple Formats"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_card"
    image_url: ""
    image_caption: ""
    content: "The `S_TransferPaintBuffer` function dynamically handles sound data transfer for different audio formats, including 8-bit and 16-bit samples. It adjusts the output based on the number of channels and sample bits, ensuring compatibility with various sound cards. This flexibility was crucial in the 1990s, as PC hardware varied widely in capabilities. The function also integrates error handling for buffer locking, a necessary safeguard against hardware quirks. By supporting multiple formats, Quake set a precedent for adaptable audio systems in games, influencing engines like Unreal Engine and Unity, which continue to support diverse audio configurations."
  - id: "paint-channels"
    line_start: 261
    line_end: 332
    title: "Mixing Multiple Sound Channels in Real Time"
    wikipedia_url: "https://en.wikipedia.org/wiki/Audio_multichannel"
    image_url: ""
    image_caption: ""
    content: "The `S_PaintChannels` function mixes audio from multiple sound channels into a single paint buffer for playback. It iterates through active channels, applying volume scaling and looping logic to ensure seamless sound effects. This routine supports dynamic channel management, allowing sounds to start, stop, or loop based on game events. In 1996, this level of audio sophistication was groundbreaking, enabling immersive soundscapes in Quake's 3D environments. The technique of real-time channel mixing became a cornerstone of game audio design, influencing subsequent engines like Source and CryEngine."
  - id: "init-scaletable"
    line_start: 334
    line_end: 341
    title: "The Lookup Table That Speeds Up Audio Scaling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "The `SND_InitScaletable` function initializes a lookup table for fast audio scaling. Each entry precomputes the scaled value for a given volume and sample, reducing the computational overhead during playback. This optimization was critical for achieving real-time performance on 1990s hardware, where CPU cycles were precious. Lookup tables like this were a hallmark of Michael Abrash's optimization philosophy, emphasizing precomputation to save runtime costs. The technique remains relevant today, appearing in areas like graphics rendering and signal processing."
  - id: "paint-channel-from8"
    line_start: 344
    line_end: 370
    title: "Optimizing 8-Bit Sound Mixing with Precomputed Scaling"
    wikipedia_url: "https://en.wikipedia.org/wiki/8-bit_audio"
    image_url: ""
    image_caption: ""
    content: "The `SND_PaintChannelFrom8` function mixes 8-bit audio samples into the paint buffer using precomputed scaling values from the lookup table. By leveraging the `snd_scaletable`, it minimizes the computational cost of volume adjustments during playback. This approach reflects the constraints of 8-bit audio, which was still common in PC gaming during the mid-1990s. The function's efficiency allowed Quake to deliver high-quality sound effects without compromising performance, influencing audio handling in later engines and games."
  - id: "paint-channel-from16"
    line_start: 375
    line_end: 397
    title: "Precision Mixing for 16-Bit Audio Channels"
    wikipedia_url: "https://en.wikipedia.org/wiki/16-bit_audio"
    image_url: ""
    image_caption: ""
    content: "The `SND_PaintChannelFrom16` function processes 16-bit audio samples, applying precise volume scaling to mix them into the paint buffer. This routine handles higher-resolution audio, which was becoming more common in gaming by the mid-1990s. Its design ensures that sound effects retain their fidelity while adapting to dynamic volume changes. The function highlights id Software's commitment to leveraging emerging audio standards, paving the way for modern engines that prioritize sound quality alongside graphical fidelity."

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