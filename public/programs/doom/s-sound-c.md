---
title: "s_sound.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/s_sound.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/s_sound.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "s-sound-c"
order: 4
description: "This file defines DOOM's sound system, a key component of its immersive gaming experience, showcasing technical ingenuity in handling audio on 1990s hardware."

summary:
  - point: "Dynamic sound attenuation based on distance and stereo separation"
    link: "https://en.wikipedia.org/wiki/Sound_attenuation"
    link_label: "Sound Attenuation"
  - point: "Efficient memory allocation for sound channels using zone memory"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Custom sound prioritization system for limited audio channels"
    link: "https://en.wikipedia.org/wiki/Channel_(audio)"
    link_label: "Audio Channels"
  - point: "Integration of music and sound effects with hardware abstraction"
    link: "https://en.wikipedia.org/wiki/Hardware_abstraction"
    link_label: "Hardware Abstraction"
  - point: "Use of pseudo-Euclidean distance for sound positioning"
    link: "https://en.wikipedia.org/wiki/Euclidean_distance"
    link_label: "Euclidean Distance"

enhancements:
  - id: "sound-system-initialization"
    line_start: 161
    line_end: 192
    title: "Sound System Initialization: A Memory Balancing Act"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Operating_system_placement.svg/330px-Operating_system_placement.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Graph of Operating System placement on computer usage (CC BY-SA 3.0)"
    content: "This section initializes DOOM's sound system, setting up volumes, allocating memory for sound channels, and preparing sound effects for playback. The code uses zone memory allocation, a technique pioneered by id Software to manage memory efficiently on constrained hardware. In 1993, consumer PCs typically had limited RAM, often no more than 4–8 MB. John Carmack, the technical lead, designed DOOM's engine to work within these constraints, ensuring that audio playback wouldn't interfere with the game's performance. The initialization process also highlights the absence of music support in the Linux port, reflecting the challenges of adapting DOOM's sound system to different operating systems. This memory-efficient approach allowed DOOM to deliver a rich audio experience without compromising its groundbreaking graphics, setting a standard for future game engines."
  - id: "level-startup-sound-reset"
    line_start: 202
    line_end: 248
    title: "Resetting Sounds at Level Start: A Practical Decision"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Various_hard_sound_effects_devices.JPG/330px-Various_hard_sound_effects_devices.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Various devices that were used for the production of hard sound effects in theatrical productions of the greek National Radio. (CC BY-SA 3.0)"
    content: "This routine clears all active sounds when a new level begins and sets the stage for the next level's music. In the fast-paced world of DOOM, sound effects often overlap or linger, creating potential chaos if not reset. By killing all sounds at the start of each level, the developers ensured a clean audio slate, enhancing the player's immersion. The music selection logic reflects DOOM's episodic structure, with specific tracks tied to levels and episodes. The inclusion of a special music array for Episode 4 levels demonstrates the game's iterative development, as Episode 4 was added in the Ultimate DOOM release in 1995. This pragmatic approach to sound management highlights id Software's commitment to delivering a polished experience, even under tight deadlines."
  - id: "dynamic-sound-start"
    line_start: 255
    line_end: 395
    title: "Dynamic Sound Playback: Prioritization and Pitch Variation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_effect"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/3D_sound_localization_of_a_large_compressor.png/330px-3D_sound_localization_of_a_large_compressor.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "3D sound localization of a large compressor (CC BY-SA 4.0)"
    content: "This section handles the playback of sound effects, dynamically adjusting parameters like pitch, volume, and stereo separation based on the listener's position and the sound's origin. The code includes clever hacks to vary sound pitches for certain effects, adding a layer of realism to DOOM's audio. For example, chainsaw sounds are randomized slightly to avoid monotony. With only two audio channels available, the system prioritizes sounds based on their importance, ensuring critical effects like enemy attacks are always audible. In 1993, sound cards were still a luxury for many PC users, and DOOM's sound system had to work seamlessly across a wide range of hardware configurations. This adaptability contributed to DOOM's widespread appeal and its reputation as a technical marvel."
  - id: "sound-parameter-adjustment"
    line_start: 753
    line_end: 818
    title: "Adjusting Sound Parameters: Distance and Stereo Effects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_localization"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Audio_signal_processor_rack_1%2C_Choking_Sun_Studio.jpg/330px-Audio_signal_processor_rack_1%2C_Choking_Sun_Studio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Audio signal processor rack 1, Choking Sun Studio (CC BY 2.0)"
    content: "This routine calculates sound parameters like volume and stereo separation based on the listener's position relative to the sound source. It uses a pseudo-Euclidean distance formula to approximate the distance efficiently, a technique inspired by graphics algorithms of the era. Stereo separation is adjusted using trigonometric functions, creating a sense of spatial audio that enhances gameplay immersion. In the early 1990s, spatial audio was still a novel concept in gaming, and DOOM's implementation was ahead of its time. The code also includes special handling for the game's secret level (Map 8), demonstrating the developers' attention to detail. This approach laid the groundwork for more sophisticated audio systems in later games, influencing the evolution of 3D sound in gaming."
  - id: "channel-allocation-priority"
    line_start: 824
    line_end: 875
    title: "Channel Allocation: Managing Limited Audio Resources"
    wikipedia_url: "https://en.wikipedia.org/wiki/Channel_(audio)"
    image_url: ""
    image_caption: ""
    content: "This function allocates audio channels for sound effects, prioritizing higher-importance sounds when channels are scarce. If all channels are occupied, the system replaces the lowest-priority sound with the new one. This design reflects the constraints of 1990s hardware, where sound cards typically supported only a few simultaneous audio streams. The developers had to balance technical limitations with gameplay needs, ensuring critical sounds like enemy attacks or player actions were always audible. The use of priority-based channel allocation was a pragmatic solution that allowed DOOM to deliver a compelling audio experience despite hardware limitations. This technique influenced audio systems in later games, where dynamic resource management became standard practice."

---

// Emacs style mode select   -*- C++ -*- 
//-----------------------------------------------------------------------------
//
// $Id:$
//
// Copyright (C) 1993-1996 by id Software, Inc.
//
// This source is available for distribution and/or modification
// only under the terms of the DOOM Source Code License as
// published by id Software. All rights reserved.
//
// The source is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// FITNESS FOR A PARTICULAR PURPOSE. See the DOOM Source Code License
// for more details.
//
// $Log:$
//
// DESCRIPTION:  none
//
//-----------------------------------------------------------------------------


static const char
rcsid[] = "$Id: s_sound.c,v 1.6 1997/02/03 22:45:12 b1 Exp $";



#include <stdio.h>
#include <stdlib.h>

#include "i_system.h"
#include "i_sound.h"
#include "sounds.h"
#include "s_sound.h"

#include "z_zone.h"
#include "m_random.h"
#include "w_wad.h"

#include "doomdef.h"
#include "p_local.h"

#include "doomstat.h"


// Purpose?
const char snd_prefixen[]
= { 'P', 'P', 'A', 'S', 'S', 'S', 'M', 'M', 'M', 'S', 'S', 'S' };

#define S_MAX_VOLUME		127

// when to clip out sounds
// Does not fit the large outdoor areas.
#define S_CLIPPING_DIST		(1200*0x10000)

// Distance tp origin when sounds should be maxed out.
// This should relate to movement clipping resolution
// (see BLOCKMAP handling).
// Originally: (200*0x10000).
#define S_CLOSE_DIST		(160*0x10000)


#define S_ATTENUATOR		((S_CLIPPING_DIST-S_CLOSE_DIST)>>FRACBITS)

// Adjustable by menu.
#define NORM_VOLUME    		snd_MaxVolume

#define NORM_PITCH     		128
#define NORM_PRIORITY		64
#define NORM_SEP		128

#define S_PITCH_PERTURB		1
#define S_STEREO_SWING		(96*0x10000)

// percent attenuation from front to back
#define S_IFRACVOL		30

#define NA			0
#define S_NUMCHANNELS		2


// Current music/sfx card - index useless
//  w/o a reference LUT in a sound module.
extern int snd_MusicDevice;
extern int snd_SfxDevice;
// Config file? Same disclaimer as above.
extern int snd_DesiredMusicDevice;
extern int snd_DesiredSfxDevice;



typedef struct
{
    // sound information (if null, channel avail.)
    sfxinfo_t*	sfxinfo;

    // origin of sound
    void*	origin;

    // handle of the sound being played
    int		handle;
    
} channel_t;


// the set of channels available
static channel_t*	channels;

// These are not used, but should be (menu).
// Maximum volume of a sound effect.
// Internal default is max out of 0-15.
int 		snd_SfxVolume = 15;

// Maximum volume of music. Useless so far.
int 		snd_MusicVolume = 15; 



// whether songs are mus_paused
static boolean		mus_paused;	

// music currently being played
static musicinfo_t*	mus_playing=0;

// following is set
//  by the defaults code in M_misc:
// number of channels available
int			numChannels;	

static int		nextcleanup;



//
// Internals.
//
int
S_getChannel
( void*		origin,
  sfxinfo_t*	sfxinfo );


int
S_AdjustSoundParams
( mobj_t*	listener,
  mobj_t*	source,
  int*		vol,
  int*		sep,
  int*		pitch );

void S_StopChannel(int cnum);



//
// Initializes sound stuff, including volume
// Sets channels, SFX and music volume,
//  allocates channel buffer, sets S_sfx lookup.
//
void S_Init
( int		sfxVolume,
  int		musicVolume )
{  
  int		i;

  fprintf( stderr, "S_Init: default sfx volume %d\n", sfxVolume);

  // Whatever these did with DMX, these are rather dummies now.
  I_SetChannels();
  
  S_SetSfxVolume(sfxVolume);
  // No music with Linux - another dummy.
  S_SetMusicVolume(musicVolume);

  // Allocating the internal channels for mixing
  // (the maximum numer of sounds rendered
  // simultaneously) within zone memory.
  channels =
    (channel_t *) Z_Malloc(numChannels*sizeof(channel_t), PU_STATIC, 0);
  
  // Free all channels for use
  for (i=0 ; i<numChannels ; i++)
    channels[i].sfxinfo = 0;
  
  // no sounds are playing, and they are not mus_paused
  mus_paused = 0;

  // Note that sounds have not been cached (yet).
  for (i=1 ; i<NUMSFX ; i++)
    S_sfx[i].lumpnum = S_sfx[i].usefulness = -1;
}




//
// Per level startup code.
// Kills playing sounds at start of level,
//  determines music if any, changes music.
//
void S_Start(void)
{
  int cnum;
  int mnum;

  // kill all playing sounds at start of level
  //  (trust me - a good idea)
  for (cnum=0 ; cnum<numChannels ; cnum++)
    if (channels[cnum].sfxinfo)
      S_StopChannel(cnum);
  
  // start new music for the level
  mus_paused = 0;
  
  if (gamemode == commercial)
    mnum = mus_runnin + gamemap - 1;
  else
  {
    int spmus[]=
    {
      // Song - Who? - Where?
      
      mus_e3m4,	// American	e4m1
      mus_e3m2,	// Romero	e4m2
      mus_e3m3,	// Shawn	e4m3
      mus_e1m5,	// American	e4m4
      mus_e2m7,	// Tim 	e4m5
      mus_e2m4,	// Romero	e4m6
      mus_e2m6,	// J.Anderson	e4m7 CHIRON.WAD
      mus_e2m5,	// Shawn	e4m8
      mus_e1m9	// Tim		e4m9
    };
    
    if (gameepisode < 4)
      mnum = mus_e1m1 + (gameepisode-1)*9 + gamemap-1;
    else
      mnum = spmus[gamemap-1];
    }	
  
  // HACK FOR COMMERCIAL
  //  if (commercial && mnum > mus_e3m9)	
  //      mnum -= mus_e3m9;
  
  S_ChangeMusic(mnum, true);
  
  nextcleanup = 15;
}	





void
S_StartSoundAtVolume
( void*		origin_p,
  int		sfx_id,
  int		volume )
{

  int		rc;
  int		sep;
  int		pitch;
  int		priority;
  sfxinfo_t*	sfx;
  int		cnum;
  
  mobj_t*	origin = (mobj_t *) origin_p;
  
  
  // Debug.
  /*fprintf( stderr,
  	   "S_StartSoundAtVolume: playing sound %d (%s)\n",
  	   sfx_id, S_sfx[sfx_id].name );*/
  
  // check for bogus sound #
  if (sfx_id < 1 || sfx_id > NUMSFX)
    I_Error("Bad sfx #: %d", sfx_id);
  
  sfx = &S_sfx[sfx_id];
  
  // Initialize sound parameters
  if (sfx->link)
  {
    pitch = sfx->pitch;
    priority = sfx->priority;
    volume += sfx->volume;
    
    if (volume < 1)
      return;
    
    if (volume > snd_SfxVolume)
      volume = snd_SfxVolume;
  }	
  else
  {
    pitch = NORM_PITCH;
    priority = NORM_PRIORITY;
  }


  // Check to see if it is audible,
  //  and if not, modify the params
  if (origin && origin != players[consoleplayer].mo)
  {
    rc = S_AdjustSoundParams(players[consoleplayer].mo,
			     origin,
			     &volume,
			     &sep,
			     &pitch);
	
    if ( origin->x == players[consoleplayer].mo->x
	 && origin->y == players[consoleplayer].mo->y)
    {	
      sep 	= NORM_SEP;
    }
    
    if (!rc)
      return;
  }	
  else
  {
    sep = NORM_SEP;
  }
  
  // hacks to vary the sfx pitches
  if (sfx_id >= sfx_sawup
      && sfx_id <= sfx_sawhit)
  {	
    pitch += 8 - (M_Random()&15);
    
    if (pitch<0)
      pitch = 0;
    else if (pitch>255)
      pitch = 255;
  }
  else if (sfx_id != sfx_itemup
	   && sfx_id != sfx_tink)
  {
    pitch += 16 - (M_Random()&31);
    
    if (pitch<0)
      pitch = 0;
    else if (pitch>255)
      pitch = 255;
  }

  // kill old sound
  S_StopSound(origin);

  // try to find a channel
  cnum = S_getChannel(origin, sfx);
  
  if (cnum<0)
    return;

  //
  // This is supposed to handle the loading/caching.
  // For some odd reason, the caching is done nearly
  //  each time the sound is needed?
  //
  
  // get lumpnum if necessary
  if (sfx->lumpnum < 0)
    sfx->lumpnum = I_GetSfxLumpNum(sfx);

#ifndef SNDSRV
  // cache data if necessary
  if (!sfx->data)
  {
    fprintf( stderr,
	     "S_StartSoundAtVolume: 16bit and not pre-cached - wtf?\n");

    // DOS remains, 8bit handling
    //sfx->data = (void *) W_CacheLumpNum(sfx->lumpnum, PU_MUSIC);
    // fprintf( stderr,
    //	     "S_StartSoundAtVolume: loading %d (lump %d) : 0x%x\n",
    //       sfx_id, sfx->lumpnum, (int)sfx->data );
    
  }
#endif
  
  // increase the usefulness
  if (sfx->usefulness++ < 0)
    sfx->usefulness = 1;
  
  // Assigns the handle to one of the channels in the
  //  mix/output buffer.
  channels[cnum].handle = I_StartSound(sfx_id,
				       /*sfx->data,*/
				       volume,
				       sep,
				       pitch,
				       priority);
}	

void
S_StartSound
( void*		origin,
  int		sfx_id )
{
#ifdef SAWDEBUG
    // if (sfx_id == sfx_sawful)
    // sfx_id = sfx_itemup;
#endif
  
    S_StartSoundAtVolume(origin, sfx_id, snd_SfxVolume);


    // UNUSED. We had problems, had we not?
#ifdef SAWDEBUG
{
    int i;
    int n;
	
    static mobj_t*      last_saw_origins[10] = {1,1,1,1,1,1,1,1,1,1};
    static int		first_saw=0;
    static int		next_saw=0;
	
    if (sfx_id == sfx_sawidl
	|| sfx_id == sfx_sawful
	|| sfx_id == sfx_sawhit)
    {
	for (i=first_saw;i!=next_saw;i=(i+1)%10)
	    if (last_saw_origins[i] != origin)
		fprintf(stderr, "old origin 0x%lx != "
			"origin 0x%lx for sfx %d\n",
			last_saw_origins[i],
			origin,
			sfx_id);
	    
	last_saw_origins[next_saw] = origin;
	next_saw = (next_saw + 1) % 10;
	if (next_saw == first_saw)
	    first_saw = (first_saw + 1) % 10;
	    
	for (n=i=0; i<numChannels ; i++)
	{
	    if (channels[i].sfxinfo == &S_sfx[sfx_sawidl]
		|| channels[i].sfxinfo == &S_sfx[sfx_sawful]
		|| channels[i].sfxinfo == &S_sfx[sfx_sawhit]) n++;
	}
	    
	if (n>1)
	{
	    for (i=0; i<numChannels ; i++)
	    {
		if (channels[i].sfxinfo == &S_sfx[sfx_sawidl]
		    || channels[i].sfxinfo == &S_sfx[sfx_sawful]
		    || channels[i].sfxinfo == &S_sfx[sfx_sawhit])
		{
		    fprintf(stderr,
			    "chn: sfxinfo=0x%lx, origin=0x%lx, "
			    "handle=%d\n",
			    channels[i].sfxinfo,
			    channels[i].origin,
			    channels[i].handle);
		}
	    }
	    fprintf(stderr, "\n");
	}
    }
}
#endif
 
}




void S_StopSound(void *origin)
{

    int cnum;

    for (cnum=0 ; cnum<numChannels ; cnum++)
    {
	if (channels[cnum].sfxinfo && channels[cnum].origin == origin)
	{
	    S_StopChannel(cnum);
	    break;
	}
    }
}









//
// Stop and resume music, during game PAUSE.
//
void S_PauseSound(void)
{
    if (mus_playing && !mus_paused)
    {
	I_PauseSong(mus_playing->handle);
	mus_paused = true;
    }
}

void S_ResumeSound(void)
{
    if (mus_playing && mus_paused)
    {
	I_ResumeSong(mus_playing->handle);
	mus_paused = false;
    }
}


//
// Updates music & sounds
//
void S_UpdateSounds(void* listener_p)
{
    int		audible;
    int		cnum;
    int		volume;
    int		sep;
    int		pitch;
    sfxinfo_t*	sfx;
    channel_t*	c;
    
    mobj_t*	listener = (mobj_t*)listener_p;


    
    // Clean up unused data.
    // This is currently not done for 16bit (sounds cached static).
    // DOS 8bit remains. 
    /*if (gametic > nextcleanup)
    {
	for (i=1 ; i<NUMSFX ; i++)
	{
	    if (S_sfx[i].usefulness < 1
		&& S_sfx[i].usefulness > -1)
	    {
		if (--S_sfx[i].usefulness == -1)
		{
		    Z_ChangeTag(S_sfx[i].data, PU_CACHE);
		    S_sfx[i].data = 0;
		}
	    }
	}
	nextcleanup = gametic + 15;
    }*/
    
    for (cnum=0 ; cnum<numChannels ; cnum++)
    {
	c = &channels[cnum];
	sfx = c->sfxinfo;

	if (c->sfxinfo)
	{
	    if (I_SoundIsPlaying(c->handle))
	    {
		// initialize parameters
		volume = snd_SfxVolume;
		pitch = NORM_PITCH;
		sep = NORM_SEP;

		if (sfx->link)
		{
		    pitch = sfx->pitch;
		    volume += sfx->volume;
		    if (volume < 1)
		    {
			S_StopChannel(cnum);
			continue;
		    }
		    else if (volume > snd_SfxVolume)
		    {
			volume = snd_SfxVolume;
		    }
		}

		// check non-local sounds for distance clipping
		//  or modify their params
		if (c->origin && listener_p != c->origin)
		{
		    audible = S_AdjustSoundParams(listener,
						  c->origin,
						  &volume,
						  &sep,
						  &pitch);
		    
		    if (!audible)
		    {
			S_StopChannel(cnum);
		    }
		    else
			I_UpdateSoundParams(c->handle, volume, sep, pitch);
		}
	    }
	    else
	    {
		// if channel is allocated but sound has stopped,
		//  free it
		S_StopChannel(cnum);
	    }
	}
    }
    // kill music if it is a single-play && finished
    // if (	mus_playing
    //      && !I_QrySongPlaying(mus_playing->handle)
    //      && !mus_paused )
    // S_StopMusic();
}


void S_SetMusicVolume(int volume)
{
    if (volume < 0 || volume > 127)
    {
	I_Error("Attempt to set music volume at %d",
		volume);
    }    

    I_SetMusicVolume(127);
    I_SetMusicVolume(volume);
    snd_MusicVolume = volume;
}



void S_SetSfxVolume(int volume)
{

    if (volume < 0 || volume > 127)
	I_Error("Attempt to set sfx volume at %d", volume);

    snd_SfxVolume = volume;

}

//
// Starts some music with the music id found in sounds.h.
//
void S_StartMusic(int m_id)
{
    S_ChangeMusic(m_id, false);
}

void
S_ChangeMusic
( int			musicnum,
  int			looping )
{
    musicinfo_t*	music;
    char		namebuf[9];

    if ( (musicnum <= mus_None)
	 || (musicnum >= NUMMUSIC) )
    {
	I_Error("Bad music number %d", musicnum);
    }
    else
	music = &S_music[musicnum];

    if (mus_playing == music)
	return;

    // shutdown old music
    S_StopMusic();

    // get lumpnum if neccessary
    if (!music->lumpnum)
    {
	sprintf(namebuf, "d_%s", music->name);
	music->lumpnum = W_GetNumForName(namebuf);
    }

    // load & register it
    music->data = (void *) W_CacheLumpNum(music->lumpnum, PU_MUSIC);
    music->handle = I_RegisterSong(music->data);

    // play it
    I_PlaySong(music->handle, looping);

    mus_playing = music;
}


void S_StopMusic(void)
{
    if (mus_playing)
    {
	if (mus_paused)
	    I_ResumeSong(mus_playing->handle);

	I_StopSong(mus_playing->handle);
	I_UnRegisterSong(mus_playing->handle);
	Z_ChangeTag(mus_playing->data, PU_CACHE);
	
	mus_playing->data = 0;
	mus_playing = 0;
    }
}




void S_StopChannel(int cnum)
{

    int		i;
    channel_t*	c = &channels[cnum];

    if (c->sfxinfo)
    {
	// stop the sound playing
	if (I_SoundIsPlaying(c->handle))
	{
#ifdef SAWDEBUG
	    if (c->sfxinfo == &S_sfx[sfx_sawful])
		fprintf(stderr, "stopped\n");
#endif
	    I_StopSound(c->handle);
	}

	// check to see
	//  if other channels are playing the sound
	for (i=0 ; i<numChannels ; i++)
	{
	    if (cnum != i
		&& c->sfxinfo == channels[i].sfxinfo)
	    {
		break;
	    }
	}
	
	// degrade usefulness of sound data
	c->sfxinfo->usefulness--;

	c->sfxinfo = 0;
    }
}



//
// Changes volume, stereo-separation, and pitch variables
//  from the norm of a sound effect to be played.
// If the sound is not audible, returns a 0.
// Otherwise, modifies parameters and returns 1.
//
int
S_AdjustSoundParams
( mobj_t*	listener,
  mobj_t*	source,
  int*		vol,
  int*		sep,
  int*		pitch )
{
    fixed_t	approx_dist;
    fixed_t	adx;
    fixed_t	ady;
    angle_t	angle;

    // calculate the distance to sound origin
    //  and clip it if necessary
    adx = abs(listener->x - source->x);
    ady = abs(listener->y - source->y);

    // From _GG1_ p.428. Appox. eucledian distance fast.
    approx_dist = adx + ady - ((adx < ady ? adx : ady)>>1);
    
    if (gamemap != 8
	&& approx_dist > S_CLIPPING_DIST)
    {
	return 0;
    }
    
    // angle of source to listener
    angle = R_PointToAngle2(listener->x,
			    listener->y,
			    source->x,
			    source->y);

    if (angle > listener->angle)
	angle = angle - listener->angle;
    else
	angle = angle + (0xffffffff - listener->angle);

    angle >>= ANGLETOFINESHIFT;

    // stereo separation
    *sep = 128 - (FixedMul(S_STEREO_SWING,finesine[angle])>>FRACBITS);

    // volume calculation
    if (approx_dist < S_CLOSE_DIST)
    {
	*vol = snd_SfxVolume;
    }
    else if (gamemap == 8)
    {
	if (approx_dist > S_CLIPPING_DIST)
	    approx_dist = S_CLIPPING_DIST;

	*vol = 15+ ((snd_SfxVolume-15)
		    *((S_CLIPPING_DIST - approx_dist)>>FRACBITS))
	    / S_ATTENUATOR;
    }
    else
    {
	// distance effect
	*vol = (snd_SfxVolume
		* ((S_CLIPPING_DIST - approx_dist)>>FRACBITS))
	    / S_ATTENUATOR; 
    }
    
    return (*vol > 0);
}




//
// S_getChannel :
//   If none available, return -1.  Otherwise channel #.
//
int
S_getChannel
( void*		origin,
  sfxinfo_t*	sfxinfo )
{
    // channel number to use
    int		cnum;
    
    channel_t*	c;

    // Find an open channel
    for (cnum=0 ; cnum<numChannels ; cnum++)
    {
	if (!channels[cnum].sfxinfo)
	    break;
	else if (origin &&  channels[cnum].origin ==  origin)
	{
	    S_StopChannel(cnum);
	    break;
	}
    }

    // None available
    if (cnum == numChannels)
    {
	// Look for lower priority
	for (cnum=0 ; cnum<numChannels ; cnum++)
	    if (channels[cnum].sfxinfo->priority >= sfxinfo->priority) break;

	if (cnum == numChannels)
	{
	    // FUCK!  No lower priority.  Sorry, Charlie.    
	    return -1;
	}
	else
	{
	    // Otherwise, kick out lower priority.
	    S_StopChannel(cnum);
	}
    }

    c = &channels[cnum];

    // channel is decided to be cnum.
    c->sfxinfo = sfxinfo;
    c->origin = origin;

    return cnum;
}



