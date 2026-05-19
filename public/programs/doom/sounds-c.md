---
title: "sounds.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/sounds.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/sounds.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "sounds-c"
order: 37
description: "This file defines the sound and music assets that gave DOOM its iconic audio atmosphere."

summary:
  - point: "Defines music tracks for all levels and events"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "Lists sound effects with metadata for playback"
    link: "https://en.wikipedia.org/wiki/Sound_effect"
    link_label: "Sound Effect"
  - point: "Demonstrates early use of data-driven design in games"
    link: "https://en.wikipedia.org/wiki/Data-driven_programming"
    link_label: "Data-driven Programming"

enhancements:
  - id: "music-track-definitions"
    line_start: 37
    line_end: 106
    title: "Mapping DOOM's haunting musical score"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `S_music` array defines the music tracks used throughout DOOM's levels and events. Each entry specifies a track name, like 'e1m1' for Episode 1, Mission 1, and a placeholder value for additional metadata. This structure reflects the game's data-driven design philosophy, where assets like music and sound effects are abstracted into tables for easy reference and modification. In 1993, this approach was cutting-edge, allowing developers to iterate quickly without hardcoding every asset. The music itself was composed by Bobby Prince, who drew inspiration from heavy metal bands like Metallica and Slayer. Prince's work gave DOOM its adrenaline-pumping atmosphere, perfectly complementing the fast-paced gameplay. The tracks were stored in MIDI format, a lightweight standard ideal for the limited storage and processing power of early '90s PCs. This table also highlights DOOM's modularity. By separating music definitions from gameplay logic, id Software made it easier to port the game to other platforms and even enabled fan modifications. The influence of this design can be seen in countless games that followed, where asset tables became a staple of game development. Today, DOOM's music is remembered as much for its technical ingenuity as for its cultural impact, with fans still remixing and reinterpreting the tracks decades later."
  - id: "sound-effect-metadata"
    line_start: 114
    line_end: 227
    title: "Cataloging DOOM's visceral sound effects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_effect"
    image_url: ""
    image_caption: ""
    content: "The `S_sfx` array catalogs all the sound effects used in DOOM, from the 'pistol' firing sound to the eerie 'cybsit' of the Cyberdemon. Each entry includes metadata such as the sound's name, priority, and playback properties. This level of detail was crucial for managing audio in a game as fast-paced and chaotic as DOOM. In the early '90s, sound design in games was constrained by hardware limitations. PCs often relied on basic sound cards like the Sound Blaster, which supported limited simultaneous channels and low-quality audio. Despite these constraints, DOOM's sound effects were meticulously crafted to enhance immersion. Many sounds were created by Bobby Prince, who used a combination of synthesized effects and real-world recordings. For example, the chainsaw sound ('sawidl') was derived from actual machinery. The inclusion of a dummy entry ('none') at index 0 is a workaround for quirks in the game's audio system. Such hacks were common in the era, as developers often had to improvise solutions to hardware and software limitations. This table also showcases DOOM's commitment to modularity, allowing sound effects to be easily referenced and modified. DOOM's sound effects became iconic, influencing the audio design of countless shooters that followed. The visceral impact of these sounds contributed to the game's legendary status, proving that audio is as critical to immersion as graphics or gameplay. Even today, the roar of a rocket launcher or the growl of a demon instantly evokes memories of DOOM's hellish corridors."

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
// DESCRIPTION:
//	Created by a sound utility.
//	Kept as a sample, DOOM2 sounds.
//
//-----------------------------------------------------------------------------


static const char 
rcsid[] = "$Id: sounds.c,v 1.3 1997/01/29 22:40:44 b1 Exp $";


#include "doomtype.h"
#include "sounds.h"

//
// Information about all the music
//

musicinfo_t S_music[] =
{
    { 0 },
    { "e1m1", 0 },
    { "e1m2", 0 },
    { "e1m3", 0 },
    { "e1m4", 0 },
    { "e1m5", 0 },
    { "e1m6", 0 },
    { "e1m7", 0 },
    { "e1m8", 0 },
    { "e1m9", 0 },
    { "e2m1", 0 },
    { "e2m2", 0 },
    { "e2m3", 0 },
    { "e2m4", 0 },
    { "e2m5", 0 },
    { "e2m6", 0 },
    { "e2m7", 0 },
    { "e2m8", 0 },
    { "e2m9", 0 },
    { "e3m1", 0 },
    { "e3m2", 0 },
    { "e3m3", 0 },
    { "e3m4", 0 },
    { "e3m5", 0 },
    { "e3m6", 0 },
    { "e3m7", 0 },
    { "e3m8", 0 },
    { "e3m9", 0 },
    { "inter", 0 },
    { "intro", 0 },
    { "bunny", 0 },
    { "victor", 0 },
    { "introa", 0 },
    { "runnin", 0 },
    { "stalks", 0 },
    { "countd", 0 },
    { "betwee", 0 },
    { "doom", 0 },
    { "the_da", 0 },
    { "shawn", 0 },
    { "ddtblu", 0 },
    { "in_cit", 0 },
    { "dead", 0 },
    { "stlks2", 0 },
    { "theda2", 0 },
    { "doom2", 0 },
    { "ddtbl2", 0 },
    { "runni2", 0 },
    { "dead2", 0 },
    { "stlks3", 0 },
    { "romero", 0 },
    { "shawn2", 0 },
    { "messag", 0 },
    { "count2", 0 },
    { "ddtbl3", 0 },
    { "ampie", 0 },
    { "theda3", 0 },
    { "adrian", 0 },
    { "messg2", 0 },
    { "romer2", 0 },
    { "tense", 0 },
    { "shawn3", 0 },
    { "openin", 0 },
    { "evil", 0 },
    { "ultima", 0 },
    { "read_m", 0 },
    { "dm2ttl", 0 },
    { "dm2int", 0 } 
};


//
// Information about all the sfx
//

sfxinfo_t S_sfx[] =
{
  // S_sfx[0] needs to be a dummy for odd reasons.
  { "none", false,  0, 0, -1, -1, 0 },

  { "pistol", false, 64, 0, -1, -1, 0 },
  { "shotgn", false, 64, 0, -1, -1, 0 },
  { "sgcock", false, 64, 0, -1, -1, 0 },
  { "dshtgn", false, 64, 0, -1, -1, 0 },
  { "dbopn", false, 64, 0, -1, -1, 0 },
  { "dbcls", false, 64, 0, -1, -1, 0 },
  { "dbload", false, 64, 0, -1, -1, 0 },
  { "plasma", false, 64, 0, -1, -1, 0 },
  { "bfg", false, 64, 0, -1, -1, 0 },
  { "sawup", false, 64, 0, -1, -1, 0 },
  { "sawidl", false, 118, 0, -1, -1, 0 },
  { "sawful", false, 64, 0, -1, -1, 0 },
  { "sawhit", false, 64, 0, -1, -1, 0 },
  { "rlaunc", false, 64, 0, -1, -1, 0 },
  { "rxplod", false, 70, 0, -1, -1, 0 },
  { "firsht", false, 70, 0, -1, -1, 0 },
  { "firxpl", false, 70, 0, -1, -1, 0 },
  { "pstart", false, 100, 0, -1, -1, 0 },
  { "pstop", false, 100, 0, -1, -1, 0 },
  { "doropn", false, 100, 0, -1, -1, 0 },
  { "dorcls", false, 100, 0, -1, -1, 0 },
  { "stnmov", false, 119, 0, -1, -1, 0 },
  { "swtchn", false, 78, 0, -1, -1, 0 },
  { "swtchx", false, 78, 0, -1, -1, 0 },
  { "plpain", false, 96, 0, -1, -1, 0 },
  { "dmpain", false, 96, 0, -1, -1, 0 },
  { "popain", false, 96, 0, -1, -1, 0 },
  { "vipain", false, 96, 0, -1, -1, 0 },
  { "mnpain", false, 96, 0, -1, -1, 0 },
  { "pepain", false, 96, 0, -1, -1, 0 },
  { "slop", false, 78, 0, -1, -1, 0 },
  { "itemup", true, 78, 0, -1, -1, 0 },
  { "wpnup", true, 78, 0, -1, -1, 0 },
  { "oof", false, 96, 0, -1, -1, 0 },
  { "telept", false, 32, 0, -1, -1, 0 },
  { "posit1", true, 98, 0, -1, -1, 0 },
  { "posit2", true, 98, 0, -1, -1, 0 },
  { "posit3", true, 98, 0, -1, -1, 0 },
  { "bgsit1", true, 98, 0, -1, -1, 0 },
  { "bgsit2", true, 98, 0, -1, -1, 0 },
  { "sgtsit", true, 98, 0, -1, -1, 0 },
  { "cacsit", true, 98, 0, -1, -1, 0 },
  { "brssit", true, 94, 0, -1, -1, 0 },
  { "cybsit", true, 92, 0, -1, -1, 0 },
  { "spisit", true, 90, 0, -1, -1, 0 },
  { "bspsit", true, 90, 0, -1, -1, 0 },
  { "kntsit", true, 90, 0, -1, -1, 0 },
  { "vilsit", true, 90, 0, -1, -1, 0 },
  { "mansit", true, 90, 0, -1, -1, 0 },
  { "pesit", true, 90, 0, -1, -1, 0 },
  { "sklatk", false, 70, 0, -1, -1, 0 },
  { "sgtatk", false, 70, 0, -1, -1, 0 },
  { "skepch", false, 70, 0, -1, -1, 0 },
  { "vilatk", false, 70, 0, -1, -1, 0 },
  { "claw", false, 70, 0, -1, -1, 0 },
  { "skeswg", false, 70, 0, -1, -1, 0 },
  { "pldeth", false, 32, 0, -1, -1, 0 },
  { "pdiehi", false, 32, 0, -1, -1, 0 },
  { "podth1", false, 70, 0, -1, -1, 0 },
  { "podth2", false, 70, 0, -1, -1, 0 },
  { "podth3", false, 70, 0, -1, -1, 0 },
  { "bgdth1", false, 70, 0, -1, -1, 0 },
  { "bgdth2", false, 70, 0, -1, -1, 0 },
  { "sgtdth", false, 70, 0, -1, -1, 0 },
  { "cacdth", false, 70, 0, -1, -1, 0 },
  { "skldth", false, 70, 0, -1, -1, 0 },
  { "brsdth", false, 32, 0, -1, -1, 0 },
  { "cybdth", false, 32, 0, -1, -1, 0 },
  { "spidth", false, 32, 0, -1, -1, 0 },
  { "bspdth", false, 32, 0, -1, -1, 0 },
  { "vildth", false, 32, 0, -1, -1, 0 },
  { "kntdth", false, 32, 0, -1, -1, 0 },
  { "pedth", false, 32, 0, -1, -1, 0 },
  { "skedth", false, 32, 0, -1, -1, 0 },
  { "posact", true, 120, 0, -1, -1, 0 },
  { "bgact", true, 120, 0, -1, -1, 0 },
  { "dmact", true, 120, 0, -1, -1, 0 },
  { "bspact", true, 100, 0, -1, -1, 0 },
  { "bspwlk", true, 100, 0, -1, -1, 0 },
  { "vilact", true, 100, 0, -1, -1, 0 },
  { "noway", false, 78, 0, -1, -1, 0 },
  { "barexp", false, 60, 0, -1, -1, 0 },
  { "punch", false, 64, 0, -1, -1, 0 },
  { "hoof", false, 70, 0, -1, -1, 0 },
  { "metal", false, 70, 0, -1, -1, 0 },
  { "chgun", false, 64, &S_sfx[sfx_pistol], 150, 0, 0 },
  { "tink", false, 60, 0, -1, -1, 0 },
  { "bdopn", false, 100, 0, -1, -1, 0 },
  { "bdcls", false, 100, 0, -1, -1, 0 },
  { "itmbk", false, 100, 0, -1, -1, 0 },
  { "flame", false, 32, 0, -1, -1, 0 },
  { "flamst", false, 32, 0, -1, -1, 0 },
  { "getpow", false, 60, 0, -1, -1, 0 },
  { "bospit", false, 70, 0, -1, -1, 0 },
  { "boscub", false, 70, 0, -1, -1, 0 },
  { "bossit", false, 70, 0, -1, -1, 0 },
  { "bospn", false, 70, 0, -1, -1, 0 },
  { "bosdth", false, 70, 0, -1, -1, 0 },
  { "manatk", false, 70, 0, -1, -1, 0 },
  { "mandth", false, 70, 0, -1, -1, 0 },
  { "sssit", false, 70, 0, -1, -1, 0 },
  { "ssdth", false, 70, 0, -1, -1, 0 },
  { "keenpn", false, 70, 0, -1, -1, 0 },
  { "keendt", false, 70, 0, -1, -1, 0 },
  { "skeact", false, 70, 0, -1, -1, 0 },
  { "skesit", false, 70, 0, -1, -1, 0 },
  { "skeatk", false, 70, 0, -1, -1, 0 },
  { "radio", false, 60, 0, -1, -1, 0 } 
};
