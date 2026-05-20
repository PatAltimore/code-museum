---
title: "snd_dma.c"
program: "Quake"
program_slug: "quake"
file_path: "QW/client/snd_dma.c"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/Quake/blob/master/QW/client/snd_dma.c"
year: 1996
author: "John Carmack, Michael Abrash, John Cash"
slug: "snd-dma-c"
order: 4
description: "This file showcases how Quake achieved its groundbreaking audio system, blending immersive sound effects with hardware constraints of the mid-1990s."

summary:
  - point: "Dynamic sound channels managed for spatial audio"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Efficient sound precaching for performance optimization"
    link: "https://en.wikipedia.org/wiki/Cache_(computing)"
    link_label: "Cache"
  - point: "DMA sound buffer manipulation for real-time audio"
    link: "https://en.wikipedia.org/wiki/Direct_memory_access"
    link_label: "Direct Memory Access"
  - point: "Ambient sound updates tied to player location"
    link: "https://en.wikipedia.org/wiki/3D_audio_effect"
    link_label: "3D Audio"
  - point: "Sound debugging tools integrated into the engine"
    link: "https://en.wikipedia.org/wiki/Debugging"
    link_label: "Debugging"

enhancements:
  - id: "foundation-sound-initialization"
    line_start: 35
    line_end: 56
    title: "Foundation: Sound Initialization Variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines foundational variables and structures for Quake's sound system, including the `channels` array for managing sound channels and the `snd_initialized` flag to track system readiness. At the time, sound systems in games were often rudimentary, but Quake aimed to create an immersive experience by managing multiple dynamic and ambient sound channels. The use of `volatile dma_t` reflects the direct interaction with hardware buffers, a technique common in the era of limited CPU resources. By establishing these variables, the developers laid the groundwork for a sound engine that could spatialize audio and dynamically allocate resources. This approach influenced subsequent game engines, including Unreal Engine and Source Engine, which adopted similar abstractions for sound management."
  - id: "user-settable-sound-variables"
    line_start: 74
    line_end: 84
    title: "User-Settable Sound Variables: Fine-Tuning Audio"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "This section introduces configurable sound variables, such as `volume`, `ambient_level`, and `bgmvolume`, allowing players to adjust audio settings to their preferences. In the mid-1990s, user customization was becoming a hallmark of PC gaming, and Quake's inclusion of adjustable sound parameters reflected this trend. These variables were registered with the console system, enabling real-time adjustments during gameplay—a feature that enhanced player immersion and control. By exposing these settings, id Software empowered players to tailor their experience, a practice that became standard in modern game engines. Games like Half-Life and Counter-Strike later expanded on this concept, offering even more granular control over audio and other settings."
  - id: "ambient-sound-control"
    line_start: 103
    line_end: 112
    title: "Ambient Sound Control: On and Off Switch"
    wikipedia_url: "https://en.wikipedia.org/wiki/3D_audio_effect"
    image_url: ""
    image_caption: ""
    content: "The `S_AmbientOff` and `S_AmbientOn` functions toggle ambient sound effects, reflecting Quake's focus on creating an immersive environment. Ambient sounds, such as water or wind, were crucial for establishing the game's atmosphere, but they also added computational overhead. By providing these toggles, id Software allowed players to disable ambient sounds if performance issues arose—a practical consideration for hardware of the era, such as Intel Pentium processors and Sound Blaster cards. This feature demonstrated a balance between technical ambition and user accessibility, influencing later games like Doom 3 and Skyrim, which offered similar options to optimize performance."
  - id: "sound-system-startup"
    line_start: 136
    line_end: 162
    title: "Sound System Startup: Initialization Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Direct_memory_access"
    image_url: ""
    image_caption: ""
    content: "The `S_Startup` function initializes the sound system, including the DMA sound buffer via `SNDDMA_Init`. Direct Memory Access (DMA) was a critical technology for real-time audio processing in the 1990s, enabling efficient data transfer between memory and sound hardware without burdening the CPU. This routine checks for successful initialization and gracefully handles failures, ensuring the game can continue running even if sound cannot be started. The reliance on DMA reflects the hardware constraints of the time, where optimizing CPU cycles was paramount. This approach influenced later game engines, which continued to prioritize efficient hardware interaction for audio systems."
  - id: "sound-precaching"
    line_start: 329
    line_end: 347
    title: "Sound Precaching: Loading Audio for Performance"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cache_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `S_PrecacheSound` function ensures that sound effects are loaded into memory before they are needed, reducing latency during gameplay. Precaching was a common technique in the 1990s to optimize performance on systems with limited memory and storage speeds. By caching audio data, Quake minimized delays caused by disk access, enhancing the player's experience. This method was particularly important for multiplayer scenarios, where real-time responsiveness was critical. The concept of precaching extended beyond audio, influencing texture and model loading in later engines like Unreal Engine and Unity."
  - id: "spatialize-sound-channels"
    line_start: 398
    line_end: 430
    title: "Spatialize Sound Channels: 3D Audio Effects"
    wikipedia_url: "https://en.wikipedia.org/wiki/3D_audio_effect"
    image_url: ""
    image_caption: ""
    content: "The `SND_Spatialize` function calculates stereo separation and distance attenuation for sound channels, creating a 3D audio experience. By determining the listener's position and orientation relative to the sound source, the function adjusts left and right volumes to simulate spatial effects. This technique was groundbreaking for its time, leveraging vector math to enhance immersion in Quake's 3D environments. The implementation reflects the influence of Michael Abrash, whose expertise in optimization and graphics extended to audio processing. Spatialized sound became a standard feature in modern engines, shaping the audio design of games like Battlefield and Call of Duty."
  - id: "ambient-sound-updates"
    line_start: 660
    line_end: 714
    title: "Ambient Sound Updates: Dynamic Adjustments"
    wikipedia_url: "https://en.wikipedia.org/wiki/3D_audio_effect"
    image_url: ""
    image_caption: ""
    content: "The `S_UpdateAmbientSounds` function dynamically adjusts ambient sound levels based on the player's location in the game world. By calculating sound levels from the surrounding environment, the function creates a seamless audio experience that responds to player movement. This innovation was part of Quake's effort to integrate audio into its immersive 3D environments. The technique influenced later games like Half-Life, which used similar systems to enhance atmosphere and storytelling through sound."
  - id: "debugging-sound-channels"
    line_start: 792
    line_end: 807
    title: "Debugging Sound Channels: Real-Time Insights"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugging"
    image_url: ""
    image_caption: ""
    content: "This section includes debugging output for sound channels, providing real-time insights into the audio system's state. Developers could use this feature to monitor active channels, their volumes, and associated sound effects, ensuring proper functionality during development and testing. Debugging tools like this were essential for optimizing performance and identifying issues in complex systems. The inclusion of such tools reflects id Software's commitment to robust development practices, influencing the debugging features of later engines like Source and Unreal."
  - id: "end-of-audio-precaching"
    line_start: 1014
    line_end: 1016
    title: "Why a Two-Line Function Matters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "This function, `S_EndPrecaching`, signals the end of audio precaching in Quake's sound system. While it appears empty, its presence is significant: it acts as a marker within the codebase, ensuring that all sound resources have been loaded and are ready for use during gameplay. Precaching was a critical technique in the 1990s, especially for games like Quake that pushed hardware to its limits. By loading assets in advance, developers avoided runtime delays that could disrupt the immersive experience. In the mid-1990s, gaming PCs typically had limited RAM—often 8MB or less—and slow disk access speeds. Precaching allowed developers to preload essential resources, such as textures and audio, into memory before they were needed. This approach minimized stuttering and ensured smooth gameplay. John Carmack and his team were known for their obsession with performance, and functions like this reflect their attention to detail. Even an empty function serves as a placeholder for future extensibility or a clear point in the program's flow. The idea of precaching influenced later game engines, including Unreal Engine and Source Engine, which adopted similar techniques to manage resources efficiently. Today, resource management remains a cornerstone of game development, though modern systems rely on more advanced methods like asynchronous loading and predictive caching. Quake's approach laid the groundwork for these innovations, demonstrating how even small, seemingly trivial functions can play a role in shaping the future of software design."

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
// snd_dma.c -- main control for any streaming sound output device

#include "quakedef.h"

#ifdef _WIN32
#include "winquake.h"
#endif

void S_Play(void);
void S_PlayVol(void);
void S_SoundList(void);
void S_Update_();
void S_StopAllSounds(qboolean clear);
void S_StopAllSoundsC(void);

// QuakeWorld hack...
#define	viewentity	playernum+1

// =======================================================================
// Internal sound data & structures
// =======================================================================

channel_t   channels[MAX_CHANNELS];
int			total_channels;

int				snd_blocked = 0;
static qboolean	snd_ambient = 1;
qboolean		snd_initialized = false;

// pointer should go away
volatile dma_t  *shm = 0;
volatile dma_t sn;

vec3_t		listener_origin;
vec3_t		listener_forward;
vec3_t		listener_right;
vec3_t		listener_up;
vec_t		sound_nominal_clip_dist=1000.0;

int			soundtime;		// sample PAIRS
int   		paintedtime; 	// sample PAIRS


#define	MAX_SFX		512
sfx_t		*known_sfx;		// hunk allocated [MAX_SFX]
int			num_sfx;

sfx_t		*ambient_sfx[NUM_AMBIENTS];

int 		desired_speed = 11025;
int 		desired_bits = 16;

int sound_started=0;

cvar_t bgmvolume = {"bgmvolume", "1", true};
cvar_t volume = {"volume", "0.7", true};

cvar_t nosound = {"nosound", "0"};
cvar_t precache = {"precache", "1"};
cvar_t loadas8bit = {"loadas8bit", "0"};
cvar_t bgmbuffer = {"bgmbuffer", "4096"};
cvar_t ambient_level = {"ambient_level", "0.3"};
cvar_t ambient_fade = {"ambient_fade", "100"};
cvar_t snd_noextraupdate = {"snd_noextraupdate", "0"};
cvar_t snd_show = {"snd_show", "0"};
cvar_t _snd_mixahead = {"_snd_mixahead", "0.1", true};


// ====================================================================
// User-setable variables
// ====================================================================


//
// Fake dma is a synchronous faking of the DMA progress used for
// isolating performance in the renderer.  The fakedma_updates is
// number of times S_Update() is called per second.
//

qboolean fakedma = false;
int fakedma_updates = 15;


void S_AmbientOff (void)
{
	snd_ambient = false;
}


void S_AmbientOn (void)
{
	snd_ambient = true;
}


void S_SoundInfo_f(void)
{
	if (!sound_started || !shm)
	{
		Con_Printf ("sound system not started\n");
		return;
	}
	
    Con_Printf("%5d stereo\n", shm->channels - 1);
    Con_Printf("%5d samples\n", shm->samples);
    Con_Printf("%5d samplepos\n", shm->samplepos);
    Con_Printf("%5d samplebits\n", shm->samplebits);
    Con_Printf("%5d submission_chunk\n", shm->submission_chunk);
    Con_Printf("%5d speed\n", shm->speed);
    Con_Printf("0x%x dma buffer\n", shm->buffer);
	Con_Printf("%5d total_channels\n", total_channels);
}


/*
================
S_Startup
================
*/

void S_Startup (void)
{
	int		rc;

	if (!snd_initialized)
		return;

	if (!fakedma)
	{
		rc = SNDDMA_Init();

		if (!rc)
		{
#ifndef	_WIN32
			Con_Printf("S_Startup: SNDDMA_Init failed.\n");
#endif
			sound_started = 0;
			return;
		}
	}

	sound_started = 1;
}


/*
================
S_Init
================
*/
void S_Init (void)
{

//	Con_Printf("\nSound Initialization\n");

	if (COM_CheckParm("-nosound"))
		return;

	if (COM_CheckParm("-simsound"))
		fakedma = true;

	Cmd_AddCommand("play", S_Play);
	Cmd_AddCommand("playvol", S_PlayVol);
	Cmd_AddCommand("stopsound", S_StopAllSoundsC);
	Cmd_AddCommand("soundlist", S_SoundList);
	Cmd_AddCommand("soundinfo", S_SoundInfo_f);

	Cvar_RegisterVariable(&nosound);
	Cvar_RegisterVariable(&volume);
	Cvar_RegisterVariable(&precache);
	Cvar_RegisterVariable(&loadas8bit);
	Cvar_RegisterVariable(&bgmvolume);
	Cvar_RegisterVariable(&bgmbuffer);
	Cvar_RegisterVariable(&ambient_level);
	Cvar_RegisterVariable(&ambient_fade);
	Cvar_RegisterVariable(&snd_noextraupdate);
	Cvar_RegisterVariable(&snd_show);
	Cvar_RegisterVariable(&_snd_mixahead);

	if (host_parms.memsize < 0x800000)
	{
		Cvar_Set ("loadas8bit", "1");
		Con_Printf ("loading all sounds as 8bit\n");
	}



	snd_initialized = true;

	S_Startup ();

	SND_InitScaletable ();

	known_sfx = Hunk_AllocName (MAX_SFX*sizeof(sfx_t), "sfx_t");
	num_sfx = 0;

// create a piece of DMA memory

	if (fakedma)
	{
		shm = (void *) Hunk_AllocName(sizeof(*shm), "shm");
		shm->splitbuffer = 0;
		shm->samplebits = 16;
		shm->speed = 22050;
		shm->channels = 2;
		shm->samples = 32768;
		shm->samplepos = 0;
		shm->soundalive = true;
		shm->gamealive = true;
		shm->submission_chunk = 1;
		shm->buffer = Hunk_AllocName(1<<16, "shmbuf");
	}

//	Con_Printf ("Sound sampling rate: %i\n", shm->speed);

	// provides a tick sound until washed clean

//	if (shm->buffer)
//		shm->buffer[4] = shm->buffer[5] = 0x7f;	// force a pop for debugging

	ambient_sfx[AMBIENT_WATER] = S_PrecacheSound ("ambience/water1.wav");
	ambient_sfx[AMBIENT_SKY] = S_PrecacheSound ("ambience/wind2.wav");

	S_StopAllSounds (true);
}


// =======================================================================
// Shutdown sound engine
// =======================================================================

void S_Shutdown(void)
{

	if (!sound_started)
		return;

	if (shm)
		shm->gamealive = 0;

	shm = 0;
	sound_started = 0;

	if (!fakedma)
	{
		SNDDMA_Shutdown();
	}
}


// =======================================================================
// Load a sound
// =======================================================================

/*
==================
S_FindName

==================
*/
sfx_t *S_FindName (char *name)
{
	int		i;
	sfx_t	*sfx;

	if (!name)
		Sys_Error ("S_FindName: NULL\n");

	if (Q_strlen(name) >= MAX_QPATH)
		Sys_Error ("Sound name too long: %s", name);

// see if already loaded
	for (i=0 ; i < num_sfx ; i++)
		if (!Q_strcmp(known_sfx[i].name, name))
		{
			return &known_sfx[i];
		}

	if (num_sfx == MAX_SFX)
		Sys_Error ("S_FindName: out of sfx_t");
	
	sfx = &known_sfx[i];
	strcpy (sfx->name, name);

	num_sfx++;
	
	return sfx;
}


/*
==================
S_TouchSound

==================
*/
void S_TouchSound (char *name)
{
	sfx_t	*sfx;
	
	if (!sound_started)
		return;

	sfx = S_FindName (name);
	Cache_Check (&sfx->cache);
}

/*
==================
S_PrecacheSound

==================
*/
sfx_t *S_PrecacheSound (char *name)
{
	sfx_t	*sfx;

	if (!sound_started || nosound.value)
		return NULL;

	sfx = S_FindName (name);
	
// cache it in
	if (precache.value)
		S_LoadSound (sfx);
	
	return sfx;
}


//=============================================================================

/*
=================
SND_PickChannel
=================
*/
channel_t *SND_PickChannel(int entnum, int entchannel)
{
    int ch_idx;
    int first_to_die;
    int life_left;

// Check for replacement sound, or find the best one to replace
    first_to_die = -1;
    life_left = 0x7fffffff;
    for (ch_idx=NUM_AMBIENTS ; ch_idx < NUM_AMBIENTS + MAX_DYNAMIC_CHANNELS ; ch_idx++)
    {
		if (entchannel != 0		// channel 0 never overrides
		&& channels[ch_idx].entnum == entnum
		&& (channels[ch_idx].entchannel == entchannel || entchannel == -1) )
		{	// allways override sound from same entity
			first_to_die = ch_idx;
			break;
		}

		// don't let monster sounds override player sounds
		if (channels[ch_idx].entnum == cl.viewentity && entnum != cl.viewentity && channels[ch_idx].sfx)
			continue;

		if (channels[ch_idx].end - paintedtime < life_left)
		{
			life_left = channels[ch_idx].end - paintedtime;
			first_to_die = ch_idx;
		}
   }

	if (first_to_die == -1)
		return NULL;

	if (channels[first_to_die].sfx)
		channels[first_to_die].sfx = NULL;

    return &channels[first_to_die];    
}       

/*
=================
SND_Spatialize
=================
*/
void SND_Spatialize(channel_t *ch)
{
    vec_t dot;
    vec_t dist;
    vec_t lscale, rscale, scale;
    vec3_t source_vec;
	sfx_t *snd;

// anything coming from the view entity will allways be full volume
	if (ch->entnum == cl.viewentity)
	{
		ch->leftvol = ch->master_vol;
		ch->rightvol = ch->master_vol;
		return;
	}

// calculate stereo seperation and distance attenuation

	snd = ch->sfx;
	VectorSubtract(ch->origin, listener_origin, source_vec);
	
	dist = VectorNormalize(source_vec) * ch->dist_mult;
	
	dot = DotProduct(listener_right, source_vec);

	if (shm->channels == 1)
	{
		rscale = 1.0;
		lscale = 1.0;
	}
	else
	{
		rscale = 1.0 + dot;
		lscale = 1.0 - dot;
	}

// add in distance effect
	scale = (1.0 - dist) * rscale;
	ch->rightvol = (int) (ch->master_vol * scale);
	if (ch->rightvol < 0)
		ch->rightvol = 0;

	scale = (1.0 - dist) * lscale;
	ch->leftvol = (int) (ch->master_vol * scale);
	if (ch->leftvol < 0)
		ch->leftvol = 0;
}           


// =======================================================================
// Start a sound effect
// =======================================================================

void S_StartSound(int entnum, int entchannel, sfx_t *sfx, vec3_t origin, float fvol, float attenuation)
{
	channel_t *target_chan, *check;
	sfxcache_t	*sc;
	int		vol;
	int		ch_idx;
	int		skip;

	if (!sound_started)
		return;

	if (!sfx)
		return;

	if (nosound.value)
		return;

	vol = fvol*255;

// pick a channel to play on
	target_chan = SND_PickChannel(entnum, entchannel);
	if (!target_chan)
		return;
		
// spatialize
	memset (target_chan, 0, sizeof(*target_chan));
	VectorCopy(origin, target_chan->origin);
	target_chan->dist_mult = attenuation / sound_nominal_clip_dist;
	target_chan->master_vol = vol;
	target_chan->entnum = entnum;
	target_chan->entchannel = entchannel;
	SND_Spatialize(target_chan);

	if (!target_chan->leftvol && !target_chan->rightvol)
		return;		// not audible at all

// new channel
	sc = S_LoadSound (sfx);
	if (!sc)
	{
		target_chan->sfx = NULL;
		return;		// couldn't load the sound's data
	}

	target_chan->sfx = sfx;
	target_chan->pos = 0.0;
    target_chan->end = paintedtime + sc->length;	

// if an identical sound has also been started this frame, offset the pos
// a bit to keep it from just making the first one louder
	check = &channels[NUM_AMBIENTS];
    for (ch_idx=NUM_AMBIENTS ; ch_idx < NUM_AMBIENTS + MAX_DYNAMIC_CHANNELS ; ch_idx++, check++)
    {
		if (check == target_chan)
			continue;
		if (check->sfx == sfx && !check->pos)
		{
			skip = rand () % (int)(0.1*shm->speed);
			if (skip >= target_chan->end)
				skip = target_chan->end - 1;
			target_chan->pos += skip;
			target_chan->end -= skip;
			break;
		}
		
	}
}

void S_StopSound(int entnum, int entchannel)
{
	int i;

	for (i=0 ; i<MAX_DYNAMIC_CHANNELS ; i++)
	{
		if (channels[i].entnum == entnum
			&& channels[i].entchannel == entchannel)
		{
			channels[i].end = 0;
			channels[i].sfx = NULL;
			return;
		}
	}
}

void S_StopAllSounds(qboolean clear)
{
	int		i;

	if (!sound_started)
		return;

	total_channels = MAX_DYNAMIC_CHANNELS + NUM_AMBIENTS;	// no statics

	for (i=0 ; i<MAX_CHANNELS ; i++)
		if (channels[i].sfx)
			channels[i].sfx = NULL;

	Q_memset(channels, 0, MAX_CHANNELS * sizeof(channel_t));

	if (clear)
		S_ClearBuffer ();
}

void S_StopAllSoundsC (void)
{
	S_StopAllSounds (true);
}

void S_ClearBuffer (void)
{
	int		clear;
		
#ifdef _WIN32
	if (!sound_started || !shm || (!shm->buffer && !pDSBuf))
#else
	if (!sound_started || !shm || !shm->buffer)
#endif
		return;

	if (shm->samplebits == 8)
		clear = 0x80;
	else
		clear = 0;

#ifdef _WIN32
	if (pDSBuf)
	{
		DWORD	dwSize;
		DWORD	*pData;
		int		reps;
		HRESULT	hresult;

		reps = 0;

		while ((hresult = pDSBuf->lpVtbl->Lock(pDSBuf, 0, gSndBufSize, &pData, &dwSize, NULL, NULL, 0)) != DS_OK)
		{
			if (hresult != DSERR_BUFFERLOST)
			{
				Con_Printf ("S_ClearBuffer: DS::Lock Sound Buffer Failed\n");
				S_Shutdown ();
				return;
			}

			if (++reps > 10000)
			{
				Con_Printf ("S_ClearBuffer: DS: couldn't restore buffer\n");
				S_Shutdown ();
				return;
			}
		}

		Q_memset(pData, clear, shm->samples * shm->samplebits/8);

		pDSBuf->lpVtbl->Unlock(pDSBuf, pData, dwSize, NULL, 0);
	
	}
	else
#endif
	{
		Q_memset(shm->buffer, clear, shm->samples * shm->samplebits/8);
	}
}


/*
=================
S_StaticSound
=================
*/
void S_StaticSound (sfx_t *sfx, vec3_t origin, float vol, float attenuation)
{
	channel_t	*ss;
	sfxcache_t		*sc;

	if (!sfx)
		return;

	if (total_channels == MAX_CHANNELS)
	{
		Con_Printf ("total_channels == MAX_CHANNELS\n");
		return;
	}

	ss = &channels[total_channels];
	total_channels++;

	sc = S_LoadSound (sfx);
	if (!sc)
		return;

	if (sc->loopstart == -1)
	{
		Con_Printf ("Sound %s not looped\n", sfx->name);
		return;
	}
	
	ss->sfx = sfx;
	VectorCopy (origin, ss->origin);
	ss->master_vol = vol;
	ss->dist_mult = (attenuation/64) / sound_nominal_clip_dist;
    ss->end = paintedtime + sc->length;	
	
	SND_Spatialize (ss);
}


//=============================================================================

/*
===================
S_UpdateAmbientSounds
===================
*/
void S_UpdateAmbientSounds (void)
{
	mleaf_t		*l;
	float		vol;
	int			ambient_channel;
	channel_t	*chan;

	if (!snd_ambient)
		return;

// calc ambient sound levels
	if (!cl.worldmodel)
		return;

	l = Mod_PointInLeaf (listener_origin, cl.worldmodel);
	if (!l || !ambient_level.value)
	{
		for (ambient_channel = 0 ; ambient_channel< NUM_AMBIENTS ; ambient_channel++)
			channels[ambient_channel].sfx = NULL;
		return;
	}

	for (ambient_channel = 0 ; ambient_channel< NUM_AMBIENTS ; ambient_channel++)
	{
		chan = &channels[ambient_channel];	
		chan->sfx = ambient_sfx[ambient_channel];
	
		vol = ambient_level.value * l->ambient_sound_level[ambient_channel];
		if (vol < 8)
			vol = 0;

	// don't adjust volume too fast
		if (chan->master_vol < vol)
		{
			chan->master_vol += host_frametime * ambient_fade.value;
			if (chan->master_vol > vol)
				chan->master_vol = vol;
		}
		else if (chan->master_vol > vol)
		{
			chan->master_vol -= host_frametime * ambient_fade.value;
			if (chan->master_vol < vol)
				chan->master_vol = vol;
		}
		
		chan->leftvol = chan->rightvol = chan->master_vol;
	}
}


/*
============
S_Update

Called once each time through the main loop
============
*/
void S_Update(vec3_t origin, vec3_t forward, vec3_t right, vec3_t up)
{
	int			i, j;
	int			total;
	channel_t	*ch;
	channel_t	*combine;

	if (!sound_started || (snd_blocked > 0))
		return;

	VectorCopy(origin, listener_origin);
	VectorCopy(forward, listener_forward);
	VectorCopy(right, listener_right);
	VectorCopy(up, listener_up);
	
// update general area ambient sound sources
	S_UpdateAmbientSounds ();

	combine = NULL;

// update spatialization for static and dynamic sounds	
	ch = channels+NUM_AMBIENTS;
	for (i=NUM_AMBIENTS ; i<total_channels; i++, ch++)
	{
		if (!ch->sfx)
			continue;
		SND_Spatialize(ch);         // respatialize channel
		if (!ch->leftvol && !ch->rightvol)
			continue;

	// try to combine static sounds with a previous channel of the same
	// sound effect so we don't mix five torches every frame
	
		if (i >= MAX_DYNAMIC_CHANNELS + NUM_AMBIENTS)
		{
		// see if it can just use the last one
			if (combine && combine->sfx == ch->sfx)
			{
				combine->leftvol += ch->leftvol;
				combine->rightvol += ch->rightvol;
				ch->leftvol = ch->rightvol = 0;
				continue;
			}
		// search for one
			combine = channels+MAX_DYNAMIC_CHANNELS + NUM_AMBIENTS;
			for (j=MAX_DYNAMIC_CHANNELS + NUM_AMBIENTS ; j<i; j++, combine++)
				if (combine->sfx == ch->sfx)
					break;
					
			if (j == total_channels)
			{
				combine = NULL;
			}
			else
			{
				if (combine != ch)
				{
					combine->leftvol += ch->leftvol;
					combine->rightvol += ch->rightvol;
					ch->leftvol = ch->rightvol = 0;
				}
				continue;
			}
		}
		
		
	}

//
// debugging output
//
	if (snd_show.value)
	{
		total = 0;
		ch = channels;
		for (i=0 ; i<total_channels; i++, ch++)
			if (ch->sfx && (ch->leftvol || ch->rightvol) )
			{
				//Con_Printf ("%3i %3i %s\n", ch->leftvol, ch->rightvol, ch->sfx->name);
				total++;
			}
		
		Con_Printf ("----(%i)----\n", total);
	}

// mix some sound
	S_Update_();
}

void GetSoundtime(void)
{
	int		samplepos;
	static	int		buffers;
	static	int		oldsamplepos;
	int		fullsamples;
	
	fullsamples = shm->samples / shm->channels;

// it is possible to miscount buffers if it has wrapped twice between
// calls to S_Update.  Oh well.
	samplepos = SNDDMA_GetDMAPos();

	if (samplepos < oldsamplepos)
	{
		buffers++;					// buffer wrapped
		
		if (paintedtime > 0x40000000)
		{	// time to chop things off to avoid 32 bit limits
			buffers = 0;
			paintedtime = fullsamples;
			S_StopAllSounds (true);
		}
	}
	oldsamplepos = samplepos;

	soundtime = buffers*fullsamples + samplepos/shm->channels;
}

void S_ExtraUpdate (void)
{

#ifdef _WIN32
	IN_Accumulate ();
#endif

	if (snd_noextraupdate.value)
		return;		// don't pollute timings
	S_Update_();
}



void S_Update_(void)
{
	unsigned        endtime;
	int				samps;
	
	if (!sound_started || (snd_blocked > 0))
		return;

// Updates DMA time
	GetSoundtime();

// check to make sure that we haven't overshot
	if (paintedtime < soundtime)
	{
		//Con_Printf ("S_Update_ : overflow\n");
		paintedtime = soundtime;
	}

// mix ahead of current position
	endtime = soundtime + _snd_mixahead.value * shm->speed;
	samps = shm->samples >> (shm->channels-1);
	if (endtime - soundtime > samps)
		endtime = soundtime + samps;

#ifdef _WIN32
// if the buffer was lost or stopped, restore it and/or restart it
	{
		DWORD	dwStatus;

		if (pDSBuf)
		{
			if (pDSBuf->lpVtbl->GetStatus (pDSBuf, &dwStatus) != DD_OK)
				Con_Printf ("Couldn't get sound buffer status\n");
			
			if (dwStatus & DSBSTATUS_BUFFERLOST)
				pDSBuf->lpVtbl->Restore (pDSBuf);
			
			if (!(dwStatus & DSBSTATUS_PLAYING))
				pDSBuf->lpVtbl->Play(pDSBuf, 0, 0, DSBPLAY_LOOPING);
		}
	}
#endif

	S_PaintChannels (endtime);

	SNDDMA_Submit ();
}

/*
===============================================================================

console functions

===============================================================================
*/

void S_Play(void)
{
	static int hash=345;
	int 	i;
	char name[256];
	sfx_t	*sfx;
	
	i = 1;
	while (i<Cmd_Argc())
	{
		if (!Q_strrchr(Cmd_Argv(i), '.'))
		{
			Q_strcpy(name, Cmd_Argv(i));
			Q_strcat(name, ".wav");
		}
		else
			Q_strcpy(name, Cmd_Argv(i));
		sfx = S_PrecacheSound(name);
		S_StartSound(hash++, 0, sfx, listener_origin, 1.0, 1.0);
		i++;
	}
}

void S_PlayVol(void)
{
	static int hash=543;
	int i;
	float vol;
	char name[256];
	sfx_t	*sfx;
	
	i = 1;
	while (i<Cmd_Argc())
	{
		if (!Q_strrchr(Cmd_Argv(i), '.'))
		{
			Q_strcpy(name, Cmd_Argv(i));
			Q_strcat(name, ".wav");
		}
		else
			Q_strcpy(name, Cmd_Argv(i));
		sfx = S_PrecacheSound(name);
		vol = Q_atof(Cmd_Argv(i+1));
		S_StartSound(hash++, 0, sfx, listener_origin, vol, 1.0);
		i+=2;
	}
}

void S_SoundList(void)
{
	int		i;
	sfx_t	*sfx;
	sfxcache_t	*sc;
	int		size, total;

	total = 0;
	for (sfx=known_sfx, i=0 ; i<num_sfx ; i++, sfx++)
	{
		sc = Cache_Check (&sfx->cache);
		if (!sc)
			continue;
		size = sc->length*sc->width*(sc->stereo+1);
		total += size;
		if (sc->loopstart >= 0)
			Con_Printf ("L");
		else
			Con_Printf (" ");
		Con_Printf("(%2db) %6i : %s\n",sc->width*8,  size, sfx->name);
	}
	Con_Printf ("Total resident: %i\n", total);
}


void S_LocalSound (char *sound)
{
	sfx_t	*sfx;

	if (nosound.value)
		return;
	if (!sound_started)
		return;
		
	sfx = S_PrecacheSound (sound);
	if (!sfx)
	{
		Con_Printf ("S_LocalSound: can't cache %s\n", sound);
		return;
	}
	S_StartSound (cl.viewentity, -1, sfx, vec3_origin, 1, 1);
}


void S_ClearPrecache (void)
{
}


void S_BeginPrecaching (void)
{
}


void S_EndPrecaching (void)
{
}
```
