---
title: "wi_stuff.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/wi_stuff.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/wi_stuff.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "wi-stuff-c"
order: 40
description: "This file handles the intermission screens in DOOM, including animations, statistics, and map displays."

summary:
  - point: "Defines animation structures for intermission screens"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "Introduces pixel-perfect positioning for graphics"
    link: "https://en.wikipedia.org/wiki/Computer_graphics"
    link_label: "Computer Graphics"
  - point: "Optimizes intermission rendering using patches instead of full-screen frames"
    link: "https://en.wikipedia.org/wiki/Framebuffer"
    link_label: "Framebuffer"

enhancements:
  - id: "intermission-screen-constants"
    line_start: 59
    line_end: 108
    title: "Constants That Define Intermission Layout"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines constants that control the layout and positioning of elements on the intermission screens. These include coordinates for single-player statistics, net game results, and deathmatch matrices. By using predefined constants, the developers ensured consistent rendering across different game modes and screen resolutions. In the early 1990s, screen resolutions varied widely, and DOOM's reliance on fixed pixel coordinates reflects the era's approach to graphics programming. This design choice allowed DOOM to achieve visually appealing layouts on modest hardware without requiring dynamic scaling or resolution independence. Later games, such as Quake and Unreal Tournament, would adopt more flexible systems, but DOOM's hardcoded approach remains a snapshot of early graphical design practices."
  - id: "animation-data-structures"
    line_start: 113
    line_end: 173
    title: "How DOOM Handles Animations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "This section introduces the data structures used to manage animations on intermission screens. The `anim_t` structure encapsulates details such as animation type, frame count, location, and timing. Animations are categorized into 'always', 'random', and 'level-specific', reflecting the game's need to balance dynamic visuals with performance constraints. In 1993, animations were a luxury on consumer-grade PCs, and DOOM's implementation showcases clever optimization. By using patches (small graphical elements) instead of full-screen frames, DOOM reduced memory usage and improved rendering speed. This technique influenced later games, which adopted similar strategies to manage animations efficiently."
  - id: "world-map-node-locations"
    line_start: 176
    line_end: 217
    title: "Mapping Levels to World Coordinates"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines the coordinates for level nodes on the world map for each episode. Each node corresponds to a level's position on the intermission screen, allowing players to visualize their progress. The coordinates are hardcoded, reflecting the static nature of DOOM's map design. This approach was typical of games in the early 1990s, where dynamic map generation was rare due to hardware limitations. The concept of visualizing level progression influenced later games, such as Diablo and StarCraft, which used similar techniques to enhance player immersion."
  - id: "animated-background-initialization"
    line_start: 502
    line_end: 529
    title: "Initializing Animated Intermission Backgrounds"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "This function initializes the animated backgrounds for intermission screens based on the current episode. It sets up timing and state variables for each animation, ensuring smooth transitions and consistent behavior. The use of randomization in 'ANIM_RANDOM' animations adds variety, enhancing the visual appeal. In the context of 1993 hardware, this approach was innovative, as it balanced complexity with performance constraints. The technique of precomputing animation states influenced later games, which adopted similar methods to optimize rendering pipelines."
  - id: "animated-background-rendering"
    line_start: 582
    line_end: 601
    title: "Rendering Animated Backgrounds"
    wikipedia_url: "https://en.wikipedia.org/wiki/Computer_graphics"
    image_url: ""
    image_caption: ""
    content: "This function renders the animated backgrounds during intermission screens. It iterates through the animations for the current episode, drawing the appropriate patch for each frame. The use of patches instead of full-screen images reflects DOOM's focus on efficiency, minimizing memory usage and maximizing rendering speed. This technique was crucial for achieving smooth animations on hardware with limited graphical capabilities. The idea of modular rendering influenced later engines, such as Unreal Engine, which adopted similar strategies to manage complex scenes."
  - id: "drawing-level-completion-time"
    line_start: 682
    line_end: 719
    title: "Displaying Level Completion Time"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "This function displays the player's completion time for a level, along with the par time or a 'sucks' message if the time exceeds a certain threshold. The use of modular rendering techniques, such as drawing individual digits and symbols, reflects DOOM's optimization for limited hardware. By avoiding full-screen redraws, the game achieved high performance on early PCs. The concept of displaying performance metrics influenced later games, which adopted similar features to enhance player engagement and replayability."
  - id: "deathmatch-stats-initialization"
    line_start: 848
    line_end: 873
    title: "How DOOM Tracks Deathmatch Frags"
    wikipedia_url: "https://en.wikipedia.org/wiki/Deathmatch"
    image_url: ""
    image_caption: ""
    content: "This section initializes the data structures required for tracking deathmatch statistics, including individual frags between players and total scores. At the time, deathmatch was a novel concept, popularized by DOOM itself. The code ensures that all players in the game are accounted for and sets up a matrix to track frags between every pair of players. This approach reflects the game's focus on competitive multiplayer, which was groundbreaking in 1993. The initialization also includes a call to set up an animated background, adding visual flair to the intermission screens. This system laid the foundation for multiplayer stat tracking in later games, influencing titles like Quake and Unreal Tournament."
  - id: "deathmatch-stats-update"
    line_start: 877
    line_end: 976
    title: "Dynamic Deathmatch Stats with Sound Cues"
    wikipedia_url: "https://doomwiki.org/wiki/Deathmatch"
    image_url: ""
    image_caption: ""
    content: "This section updates deathmatch statistics dynamically during intermission screens. It uses sound effects like 'barexp' and 'pistol' to signal transitions and changes, enhancing player engagement. The code iterates through players and updates the frag matrix and totals, ensuring that changes are reflected in real-time. It also caps scores at ±99 to prevent overflow, a practical safeguard given the hardware constraints of the era. The use of sound cues and real-time updates was innovative, creating a more immersive experience. This technique influenced later multiplayer games, where dynamic scoreboards and sound effects became standard features."
  - id: "netgame-stats-initialization"
    line_start: 1077
    line_end: 1101
    title: "Setting Up Netgame Stats for Co-op Play"
    wikipedia_url: "https://doomwiki.org/wiki/Cooperative_gameplay"
    image_url: ""
    image_caption: ""
    content: "This section initializes statistics for netgame modes, focusing on cooperative gameplay. It tracks kills, items, secrets, and frags for each player, ensuring that all aspects of performance are recorded. The code also calculates whether frags are relevant for the current game mode, optimizing memory usage. Cooperative modes were less common in 1993, but DOOM's implementation showcased its versatility in multiplayer design. This initialization routine influenced later co-op games, where detailed stat tracking became a key feature for enhancing teamwork and competition."
  - id: "netgame-stats-update"
    line_start: 1105
    line_end: 1255
    title: "Real-Time Updates for Cooperative Stats"
    wikipedia_url: "https://doomwiki.org/wiki/Cooperative_gameplay"
    image_url: ""
    image_caption: ""
    content: "This section dynamically updates netgame statistics during intermission screens. It uses incremental counters to animate the display of kills, items, secrets, and frags, creating a sense of progression. Sound effects like 'pistol' and 'barexp' signal changes, adding auditory feedback to the visual updates. The code ensures that stats are capped at their maximum values, preventing anomalies. This real-time update system was ahead of its time, adding depth to cooperative gameplay. It influenced later games with similar modes, such as Left 4 Dead and Borderlands, where detailed stat tracking and dynamic updates are integral to the experience."
  - id: "single-player-stats-initialization"
    line_start: 1317
    line_end: 1326
    title: "Preparing Stats for Solo Missions"
    wikipedia_url: "https://doomwiki.org/wiki/Single-player"
    image_url: ""
    image_caption: ""
    content: "This section sets up statistics for single-player missions, including kills, items, secrets, and time. It initializes counters to -1, a common practice to indicate uninitialized values. The code also sets up an animated background, maintaining the visual consistency of intermission screens. Single-player modes were the core of DOOM's appeal, and this initialization routine ensured that players received detailed feedback on their performance. The focus on stats influenced later single-player games, where performance tracking became a staple feature."
  - id: "single-player-stats-update"
    line_start: 1329
    line_end: 1431
    title: "Animating Single-Player Stats with Precision"
    wikipedia_url: "https://doomwiki.org/wiki/Single-player"
    image_url: ""
    image_caption: ""
    content: "This section updates single-player statistics during intermission screens, animating the display of kills, items, secrets, and time. It uses incremental counters to create a sense of progression and employs sound effects like 'pistol' and 'barexp' for auditory feedback. The code ensures that stats are capped at their maximum values and synchronizes time and par values for accurate display. This attention to detail enhanced the single-player experience, making players feel rewarded for their performance. The technique influenced later games with similar stat tracking, such as Resident Evil and Dark Souls."
  - id: "check-for-accelerate"
    line_start: 1469
    line_end: 1497
    title: "Skipping Delays with Button Presses"
    wikipedia_url: "https://doomwiki.org/wiki/Controls"
    image_url: ""
    image_caption: ""
    content: "This section checks for button presses to accelerate intermission screens, allowing players to skip delays. It monitors the 'attack' and 'use' buttons, setting flags to bypass animations. This feature reflects DOOM's responsiveness to player input, prioritizing user experience. The ability to skip delays became a standard feature in later games, allowing players to control pacing during transitions. It influenced titles like Half-Life and Portal, where user control over transitions enhances immersion."
  - id: "load-intermission-data"
    line_start: 1537
    line_end: 1623
    title: "Loading Graphics for Intermission Screens"
    wikipedia_url: "https://doomwiki.org/wiki/Intermission_screen"
    image_url: ""
    image_caption: ""
    content: "This section loads the graphics and patches required for intermission screens, including background images and 'you are here' markers. It uses memory allocation techniques to optimize resource usage, reflecting the constraints of 1993 hardware. The code dynamically selects assets based on the game mode and episode, ensuring that intermission screens are visually consistent. This approach influenced later games, where dynamic asset loading became a key technique for optimizing performance and enhancing visual fidelity."
  - id: "animation-data-loading-hacks"
    line_start: 1601
    line_end: 1619
    title: "The Animation Hack That Saved DOOM"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section loads animation data for the intermission screens, with a notable hack to reuse animation assets for Episode 1, Level 8. The code bypasses standard loading logic by directly referencing assets from Episode 1, Level 4. This 'MONDO HACK' reflects the practical constraints of 1993 hardware, where memory was precious and reusing assets was a necessity. John Carmack and the team often prioritized performance and resource efficiency over pristine code. This approach allowed DOOM to run smoothly on consumer-grade PCs while delivering visually rich intermission screens. Such hacks were common in early game development, where developers had to creatively work around hardware limitations. The technique of reusing assets influenced later games, especially in the era of sprite-based graphics, where memory optimization was critical."
  - id: "intermission-text-and-symbol-loading"
    line_start: 1625
    line_end: 1703
    title: "How DOOM Loaded Its Intermission Symbols"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section loads various text and symbols used in the intermission screens, such as numbers, percent signs, and phrases like 'finished' and 'entering.' Each element is cached using the W_CacheLumpName function, ensuring efficient memory usage. The intermission screens were a crucial part of DOOM's storytelling, providing players with a sense of progression and accomplishment. The choice to cache these assets reflects the team's focus on performance, as reloading these elements repeatedly would have slowed down the game. The inclusion of specific assets like 'sucks' and 'par' also highlights DOOM's irreverent tone, which resonated with its audience. This method of caching graphical assets became standard practice in game development, influencing engines like Quake and Unreal."
  - id: "multiplayer-statistics-loading"
    line_start: 1694
    line_end: 1703
    title: "Multiplayer Stats: DOOM's Competitive Edge"
    wikipedia_url: "https://en.wikipedia.org/wiki/Multiplayer_video_game"
    image_url: ""
    image_caption: ""
    content: "This section loads player-specific assets for multiplayer modes, including icons and statistics. The use of sprintf to dynamically generate asset names allowed DOOM to support up to four players in deathmatch mode. Multiplayer was a groundbreaking feature in DOOM, setting the stage for competitive gaming. The ability to track individual player stats and display them visually on intermission screens added depth to the multiplayer experience. This feature was a precursor to modern multiplayer stat tracking, seen in games like Counter-Strike and Call of Duty. By laying the groundwork for competitive gaming, DOOM's multiplayer innovations helped define an entire genre."
  - id: "data-unloading-and-memory-management"
    line_start: 1707
    line_end: 1768
    title: "How DOOM Freed Memory for the Next Level"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "This section unloads intermission data and changes memory tags to PU_CACHE, preparing the system for the next level. Efficient memory management was critical for DOOM, as PCs in 1993 had limited RAM. By freeing unused assets and caching others, the game ensured smooth transitions between levels. The Z_ChangeTag function reflects the team's deep understanding of hardware constraints and their ability to optimize for performance. This approach influenced later game engines, which adopted similar memory management techniques to handle complex assets. The practice of dynamically managing memory tags became a hallmark of efficient game design, seen in engines like Unity and Unreal."
  - id: "intermission-screen-drawing"
    line_start: 1771
    line_end: 1792
    title: "Drawing DOOM's Intermission Screens"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section handles the drawing logic for intermission screens, switching between different states like StatCount, ShowNextLoc, and NoState. The intermission screens were a key part of DOOM's pacing, giving players a brief respite while providing crucial information about their performance. The modular design of WI_Drawer allowed the game to adapt its intermission logic based on the mode (single-player, deathmatch, or netgame). This flexibility was ahead of its time, showcasing the team's foresight in designing systems that could accommodate diverse gameplay scenarios. The modular approach to screen drawing influenced later games, encouraging developers to separate logic into manageable states for easier maintenance and expansion."
  - id: "variable-initialization-for-intermissions"
    line_start: 1795
    line_end: 1835
    title: "Setting Up DOOM's Intermission Variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section initializes variables for intermission screens, ensuring all data structures are properly set up before rendering. The code includes range-checking logic, which prevents out-of-bounds errors—a critical feature in a time when debugging tools were limited. The initialization process reflects the team's meticulous attention to detail, ensuring the game could handle edge cases like missing kill counts or secret items. By standardizing variable setup, the team created a robust foundation for intermission logic. This practice of thorough initialization became a best practice in game development, influencing later engines and frameworks."
  - id: "intermission-start-sequence"
    line_start: 1837
    line_end: 1849
    title: "How DOOM Began Its Intermissions"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section starts the intermission sequence by initializing variables, loading data, and determining the appropriate stats logic based on the game mode. The intermission screens were a vital part of DOOM's storytelling, providing players with a sense of progression and accomplishment. By dynamically adapting the sequence to the game mode, the team ensured a seamless experience for both single-player and multiplayer scenarios. The modular design of WI_Start reflects the team's ability to balance complexity and performance, a hallmark of DOOM's development. This approach influenced later games, encouraging developers to create adaptable systems that could handle diverse gameplay scenarios."

---

```cpp
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
//	Intermission screens.
//
//-----------------------------------------------------------------------------

static const char
rcsid[] = "$Id: wi_stuff.c,v 1.7 1997/02/03 22:45:13 b1 Exp $";

#include <stdio.h>

#include "z_zone.h"

#include "m_random.h"
#include "m_swap.h"

#include "i_system.h"

#include "w_wad.h"

#include "g_game.h"

#include "r_local.h"
#include "s_sound.h"

#include "doomstat.h"

// Data.
#include "sounds.h"

// Needs access to LFB.
#include "v_video.h"

#include "wi_stuff.h"

//
// Data needed to add patches to full screen intermission pics.
// Patches are statistics messages, and animations.
// Loads of by-pixel layout and placement, offsets etc.
//


//
// Different vetween registered DOOM (1994) and
//  Ultimate DOOM - Final edition (retail, 1995?).
// This is supposedly ignored for commercial
//  release (aka DOOM II), which had 34 maps
//  in one episode. So there.
#define NUMEPISODES	4
#define NUMMAPS		9


// in tics
//U #define PAUSELEN		(TICRATE*2) 
//U #define SCORESTEP		100
//U #define ANIMPERIOD		32
// pixel distance from "(YOU)" to "PLAYER N"
//U #define STARDIST		10 
//U #define WK 1


// GLOBAL LOCATIONS
#define WI_TITLEY		2
#define WI_SPACINGY    		33

// SINGPLE-PLAYER STUFF
#define SP_STATSX		50
#define SP_STATSY		50

#define SP_TIMEX		16
#define SP_TIMEY		(SCREENHEIGHT-32)


// NET GAME STUFF
#define NG_STATSY		50
#define NG_STATSX		(32 + SHORT(star->width)/2 + 32*!dofrags)

#define NG_SPACINGX    		64


// DEATHMATCH STUFF
#define DM_MATRIXX		42
#define DM_MATRIXY		68

#define DM_SPACINGX		40

#define DM_TOTALSX		269

#define DM_KILLERSX		10
#define DM_KILLERSY		100
#define DM_VICTIMSX    		5
#define DM_VICTIMSY		50




typedef enum
{
    ANIM_ALWAYS,
    ANIM_RANDOM,
    ANIM_LEVEL

} animenum_t;

typedef struct
{
    int		x;
    int		y;
    
} point_t;


//
// Animation.
// There is another anim_t used in p_spec.
//
typedef struct
{
    animenum_t	type;

    // period in tics between animations
    int		period;

    // number of animation frames
    int		nanims;

    // location of animation
    point_t	loc;

    // ALWAYS: n/a,
    // RANDOM: period deviation (<256),
    // LEVEL: level
    int		data1;

    // ALWAYS: n/a,
    // RANDOM: random base period,
    // LEVEL: n/a
    int		data2; 

    // actual graphics for frames of animations
    patch_t*	p[3]; 

    // following must be initialized to zero before use!

    // next value of bcnt (used in conjunction with period)
    int		nexttic;

    // last drawn animation frame
    int		lastdrawn;

    // next frame number to animate
    int		ctr;
    
    // used by RANDOM and LEVEL when animating
    int		state;  

} anim_t;


static point_t lnodes[NUMEPISODES][NUMMAPS] =
{
    // Episode 0 World Map
    {
	{ 185, 164 },	// location of level 0 (CJ)
	{ 148, 143 },	// location of level 1 (CJ)
	{ 69, 122 },	// location of level 2 (CJ)
	{ 209, 102 },	// location of level 3 (CJ)
	{ 116, 89 },	// location of level 4 (CJ)
	{ 166, 55 },	// location of level 5 (CJ)
	{ 71, 56 },	// location of level 6 (CJ)
	{ 135, 29 },	// location of level 7 (CJ)
	{ 71, 24 }	// location of level 8 (CJ)
    },

    // Episode 1 World Map should go here
    {
	{ 254, 25 },	// location of level 0 (CJ)
	{ 97, 50 },	// location of level 1 (CJ)
	{ 188, 64 },	// location of level 2 (CJ)
	{ 128, 78 },	// location of level 3 (CJ)
	{ 214, 92 },	// location of level 4 (CJ)
	{ 133, 130 },	// location of level 5 (CJ)
	{ 208, 136 },	// location of level 6 (CJ)
	{ 148, 140 },	// location of level 7 (CJ)
	{ 235, 158 }	// location of level 8 (CJ)
    },

    // Episode 2 World Map should go here
    {
	{ 156, 168 },	// location of level 0 (CJ)
	{ 48, 154 },	// location of level 1 (CJ)
	{ 174, 95 },	// location of level 2 (CJ)
	{ 265, 75 },	// location of level 3 (CJ)
	{ 130, 48 },	// location of level 4 (CJ)
	{ 279, 23 },	// location of level 5 (CJ)
	{ 198, 48 },	// location of level 6 (CJ)
	{ 140, 25 },	// location of level 7 (CJ)
	{ 281, 136 }	// location of level 8 (CJ)
    }

};


//
// Animation locations for episode 0 (1).
// Using patches saves a lot of space,
//  as they replace 320x200 full screen frames.
//
static anim_t epsd0animinfo[] =
{
    { ANIM_ALWAYS, TICRATE/3, 3, { 224, 104 } },
    { ANIM_ALWAYS, TICRATE/3, 3, { 184, 160 } },
    { ANIM_ALWAYS, TICRATE/3, 3, { 112, 136 } },
    { ANIM_ALWAYS, TICRATE/3, 3, { 72, 112 } },
    { ANIM_ALWAYS, TICRATE/3, 3, { 88, 96 } },
    { ANIM_ALWAYS, TICRATE/3, 3, { 64, 48 } },
    { ANIM_ALWAYS, TICRATE/3, 3, { 192, 40 } },
    { ANIM_ALWAYS, TICRATE/3, 3, { 136, 16 } },
    { ANIM_ALWAYS, TICRATE/3, 3, { 80, 16 } },
    { ANIM_ALWAYS, TICRATE/3, 3, { 64, 24 } }
};

static anim_t epsd1animinfo[] =
{
    { ANIM_LEVEL, TICRATE/3, 1, { 128, 136 }, 1 },
    { ANIM_LEVEL, TICRATE/3, 1, { 128, 136 }, 2 },
    { ANIM_LEVEL, TICRATE/3, 1, { 128, 136 }, 3 },
    { ANIM_LEVEL, TICRATE/3, 1, { 128, 136 }, 4 },
    { ANIM_LEVEL, TICRATE/3, 1, { 128, 136 }, 5 },
    { ANIM_LEVEL, TICRATE/3, 1, { 128, 136 }, 6 },
    { ANIM_LEVEL, TICRATE/3, 1, { 128, 136 }, 7 },
    { ANIM_LEVEL, TICRATE/3, 3, { 192, 144 }, 8 },
    { ANIM_LEVEL, TICRATE/3, 1, { 128, 136 }, 8 }
};

static anim_t epsd2animinfo[] =
{
    { ANIM_ALWAYS, TICRATE/3, 3, { 104, 168 } },
    { ANIM_ALWAYS, TICRATE/3, 3, { 40, 136 } },
    { ANIM_ALWAYS, TICRATE/3, 3, { 160, 96 } },
    { ANIM_ALWAYS, TICRATE/3, 3, { 104, 80 } },
    { ANIM_ALWAYS, TICRATE/3, 3, { 120, 32 } },
    { ANIM_ALWAYS, TICRATE/4, 3, { 40, 0 } }
};

static int NUMANIMS[NUMEPISODES] =
{
    sizeof(epsd0animinfo)/sizeof(anim_t),
    sizeof(epsd1animinfo)/sizeof(anim_t),
    sizeof(epsd2animinfo)/sizeof(anim_t)
};

static anim_t *anims[NUMEPISODES] =
{
    epsd0animinfo,
    epsd1animinfo,
    epsd2animinfo
};


//
// GENERAL DATA
//

//
// Locally used stuff.
//
#define FB 0


// States for single-player
#define SP_KILLS		0
#define SP_ITEMS		2
#define SP_SECRET		4
#define SP_FRAGS		6 
#define SP_TIME			8 
#define SP_PAR			ST_TIME

#define SP_PAUSE		1

// in seconds
#define SHOWNEXTLOCDELAY	4
//#define SHOWLASTLOCDELAY	SHOWNEXTLOCDELAY


// used to accelerate or skip a stage
static int		acceleratestage;

// wbs->pnum
static int		me;

 // specifies current state
static stateenum_t	state;

// contains information passed into intermission
static wbstartstruct_t*	wbs;

static wbplayerstruct_t* plrs;  // wbs->plyr[]

// used for general timing
static int 		cnt;  

// used for timing of background animation
static int 		bcnt;

// signals to refresh everything for one frame
static int 		firstrefresh; 

static int		cnt_kills[MAXPLAYERS];
static int		cnt_items[MAXPLAYERS];
static int		cnt_secret[MAXPLAYERS];
static int		cnt_time;
static int		cnt_par;
static int		cnt_pause;

// # of commercial levels
static int		NUMCMAPS; 


//
//	GRAPHICS
//

// background (map of levels).
static patch_t*		bg;

// You Are Here graphic
static patch_t*		yah[2]; 

// splat
static patch_t*		splat;

// %, : graphics
static patch_t*		percent;
static patch_t*		colon;

// 0-9 graphic
static patch_t*		num[10];

// minus sign
static patch_t*		wiminus;

// "Finished!" graphics
static patch_t*		finished;

// "Entering" graphic
static patch_t*		entering; 

// "secret"
static patch_t*		sp_secret;

 // "Kills", "Scrt", "Items", "Frags"
static patch_t*		kills;
static patch_t*		secret;
static patch_t*		items;
static patch_t*		frags;

// Time sucks.
static patch_t*		time;
static patch_t*		par;
static patch_t*		sucks;

// "killers", "victims"
static patch_t*		killers;
static patch_t*		victims; 

// "Total", your face, your dead face
static patch_t*		total;
static patch_t*		star;
static patch_t*		bstar;

// "red P[1..MAXPLAYERS]"
static patch_t*		p[MAXPLAYERS];

// "gray P[1..MAXPLAYERS]"
static patch_t*		bp[MAXPLAYERS];

 // Name graphics of each level (centered)
static patch_t**	lnames;

//
// CODE
//

// slam background
// UNUSED static unsigned char *background=0;


void WI_slamBackground(void)
{
    memcpy(screens[0], screens[1], SCREENWIDTH * SCREENHEIGHT);
    V_MarkRect (0, 0, SCREENWIDTH, SCREENHEIGHT);
}

// The ticker is used to detect keys
//  because of timing issues in netgames.
boolean WI_Responder(event_t* ev)
{
    return false;
}


// Draws "<Levelname> Finished!"
void WI_drawLF(void)
{
    int y = WI_TITLEY;

    // draw <LevelName> 
    V_DrawPatch((SCREENWIDTH - SHORT(lnames[wbs->last]->width))/2,
		y, FB, lnames[wbs->last]);

    // draw "Finished!"
    y += (5*SHORT(lnames[wbs->last]->height))/4;
    
    V_DrawPatch((SCREENWIDTH - SHORT(finished->width))/2,
		y, FB, finished);
}



// Draws "Entering <LevelName>"
void WI_drawEL(void)
{
    int y = WI_TITLEY;

    // draw "Entering"
    V_DrawPatch((SCREENWIDTH - SHORT(entering->width))/2,
		y, FB, entering);

    // draw level
    y += (5*SHORT(lnames[wbs->next]->height))/4;

    V_DrawPatch((SCREENWIDTH - SHORT(lnames[wbs->next]->width))/2,
		y, FB, lnames[wbs->next]);

}

void
WI_drawOnLnode
( int		n,
  patch_t*	c[] )
{

    int		i;
    int		left;
    int		top;
    int		right;
    int		bottom;
    boolean	fits = false;

    i = 0;
    do
    {
	left = lnodes[wbs->epsd][n].x - SHORT(c[i]->leftoffset);
	top = lnodes[wbs->epsd][n].y - SHORT(c[i]->topoffset);
	right = left + SHORT(c[i]->width);
	bottom = top + SHORT(c[i]->height);

	if (left >= 0
	    && right < SCREENWIDTH
	    && top >= 0
	    && bottom < SCREENHEIGHT)
	{
	    fits = true;
	}
	else
	{
	    i++;
	}
    } while (!fits && i!=2);

    if (fits && i<2)
    {
	V_DrawPatch(lnodes[wbs->epsd][n].x, lnodes[wbs->epsd][n].y,
		    FB, c[i]);
    }
    else
    {
	// DEBUG
	printf("Could not place patch on level %d", n+1); 
    }
}



void WI_initAnimatedBack(void)
{
    int		i;
    anim_t*	a;

    if (gamemode == commercial)
	return;

    if (wbs->epsd > 2)
	return;

    for (i=0;i<NUMANIMS[wbs->epsd];i++)
    {
	a = &anims[wbs->epsd][i];

	// init variables
	a->ctr = -1;

	// specify the next time to draw it
	if (a->type == ANIM_ALWAYS)
	    a->nexttic = bcnt + 1 + (M_Random()%a->period);
	else if (a->type == ANIM_RANDOM)
	    a->nexttic = bcnt + 1 + a->data2+(M_Random()%a->data1);
	else if (a->type == ANIM_LEVEL)
	    a->nexttic = bcnt + 1;
    }

}

void WI_updateAnimatedBack(void)
{
    int		i;
    anim_t*	a;

    if (gamemode == commercial)
	return;

    if (wbs->epsd > 2)
	return;

    for (i=0;i<NUMANIMS[wbs->epsd];i++)
    {
	a = &anims[wbs->epsd][i];

	if (bcnt == a->nexttic)
	{
	    switch (a->type)
	    {
	      case ANIM_ALWAYS:
		if (++a->ctr >= a->nanims) a->ctr = 0;
		a->nexttic = bcnt + a->period;
		break;

	      case ANIM_RANDOM:
		a->ctr++;
		if (a->ctr == a->nanims)
		{
		    a->ctr = -1;
		    a->nexttic = bcnt+a->data2+(M_Random()%a->data1);
		}
		else a->nexttic = bcnt + a->period;
		break;
		
	      case ANIM_LEVEL:
		// gawd-awful hack for level anims
		if (!(state == StatCount && i == 7)
		    && wbs->next == a->data1)
		{
		    a->ctr++;
		    if (a->ctr == a->nanims) a->ctr--;
		    a->nexttic = bcnt + a->period;
		}
		break;
	    }
	}

    }

}

void WI_drawAnimatedBack(void)
{
    int			i;
    anim_t*		a;

    if (commercial)
	return;

    if (wbs->epsd > 2)
	return;

    for (i=0 ; i<NUMANIMS[wbs->epsd] ; i++)
    {
	a = &anims[wbs->epsd][i];

	if (a->ctr >= 0)
	    V_DrawPatch(a->loc.x, a->loc.y, FB, a->p[a->ctr]);
    }

}

//
// Draws a number.
// If digits > 0, then use that many digits minimum,
//  otherwise only use as many as necessary.
// Returns new x position.
//

int
WI_drawNum
( int		x,
  int		y,
  int		n,
  int		digits )
{

    int		fontwidth = SHORT(num[0]->width);
    int		neg;
    int		temp;

    if (digits < 0)
    {
	if (!n)
	{
	    // make variable-length zeros 1 digit long
	    digits = 1;
	}
	else
	{
	    // figure out # of digits in #
	    digits = 0;
	    temp = n;

	    while (temp)
	    {
		temp /= 10;
		digits++;
	    }
	}
    }

    neg = n < 0;
    if (neg)
	n = -n;

    // if non-number, do not draw it
    if (n == 1994)
	return 0;

    // draw the new number
    while (digits--)
    {
	x -= fontwidth;
	V_DrawPatch(x, y, FB, num[ n % 10 ]);
	n /= 10;
    }

    // draw a minus sign if necessary
    if (neg)
	V_DrawPatch(x-=8, y, FB, wiminus);

    return x;

}

void
WI_drawPercent
( int		x,
  int		y,
  int		p )
{
    if (p < 0)
	return;

    V_DrawPatch(x, y, FB, percent);
    WI_drawNum(x, y, p, -1);
}



//
// Display level completion time and par,
//  or "sucks" message if overflow.
//
void
WI_drawTime
( int		x,
  int		y,
  int		t )
{

    int		div;
    int		n;

    if (t<0)
	return;

    if (t <= 61*59)
    {
	div = 1;

	do
	{
	    n = (t / div) % 60;
	    x = WI_drawNum(x, y, n, 2) - SHORT(colon->width);
	    div *= 60;

	    // draw
	    if (div==60 || t / div)
		V_DrawPatch(x, y, FB, colon);
	    
	} while (t / div);
    }
    else
    {
	// "sucks"
	V_DrawPatch(x - SHORT(sucks->width), y, FB, sucks); 
    }
}


void WI_End(void)
{
    void WI_unloadData(void);
    WI_unloadData();
}

void WI_initNoState(void)
{
    state = NoState;
    acceleratestage = 0;
    cnt = 10;
}

void WI_updateNoState(void) {

    WI_updateAnimatedBack();

    if (!--cnt)
    {
	WI_End();
	G_WorldDone();
    }

}

static boolean		snl_pointeron = false;


void WI_initShowNextLoc(void)
{
    state = ShowNextLoc;
    acceleratestage = 0;
    cnt = SHOWNEXTLOCDELAY * TICRATE;

    WI_initAnimatedBack();
}

void WI_updateShowNextLoc(void)
{
    WI_updateAnimatedBack();

    if (!--cnt || acceleratestage)
	WI_initNoState();
    else
	snl_pointeron = (cnt & 31) < 20;
}

void WI_drawShowNextLoc(void)
{

    int		i;
    int		last;

    WI_slamBackground();

    // draw animated background
    WI_drawAnimatedBack(); 

    if ( gamemode != commercial)
    {
  	if (wbs->epsd > 2)
	{
	    WI_drawEL();
	    return;
	}
	
	last = (wbs->last == 8) ? wbs->next - 1 : wbs->last;

	// draw a splat on taken cities.
	for (i=0 ; i<=last ; i++)
	    WI_drawOnLnode(i, &splat);

	// splat the secret level?
	if (wbs->didsecret)
	    WI_drawOnLnode(8, &splat);

	// draw flashing ptr
	if (snl_pointeron)
	    WI_drawOnLnode(wbs->next, yah); 
    }

    // draws which level you are entering..
    if ( (gamemode != commercial)
	 || wbs->next != 30)
	WI_drawEL();  

}

void WI_drawNoState(void)
{
    snl_pointeron = true;
    WI_drawShowNextLoc();
}

int WI_fragSum(int playernum)
{
    int		i;
    int		frags = 0;
    
    for (i=0 ; i<MAXPLAYERS ; i++)
    {
	if (playeringame[i]
	    && i!=playernum)
	{
	    frags += plrs[playernum].frags[i];
	}
    }

	
    // JDC hack - negative frags.
    frags -= plrs[playernum].frags[playernum];
    // UNUSED if (frags < 0)
    // 	frags = 0;

    return frags;
}



static int		dm_state;
static int		dm_frags[MAXPLAYERS][MAXPLAYERS];
static int		dm_totals[MAXPLAYERS];



void WI_initDeathmatchStats(void)
{

    int		i;
    int		j;

    state = StatCount;
    acceleratestage = 0;
    dm_state = 1;

    cnt_pause = TICRATE;

    for (i=0 ; i<MAXPLAYERS ; i++)
    {
	if (playeringame[i])
	{
	    for (j=0 ; j<MAXPLAYERS ; j++)
		if (playeringame[j])
		    dm_frags[i][j] = 0;

	    dm_totals[i] = 0;
	}
    }
    
    WI_initAnimatedBack();
}



void WI_updateDeathmatchStats(void)
{

    int		i;
    int		j;
    
    boolean	stillticking;

    WI_updateAnimatedBack();

    if (acceleratestage && dm_state != 4)
    {
	acceleratestage = 0;

	for (i=0 ; i<MAXPLAYERS ; i++)
	{
	    if (playeringame[i])
	    {
		for (j=0 ; j<MAXPLAYERS ; j++)
		    if (playeringame[j])
			dm_frags[i][j] = plrs[i].frags[j];

		dm_totals[i] = WI_fragSum(i);
	    }
	}
	

	S_StartSound(0, sfx_barexp);
	dm_state = 4;
    }

    
    if (dm_state == 2)
    {
	if (!(bcnt&3))
	    S_StartSound(0, sfx_pistol);
	
	stillticking = false;

	for (i=0 ; i<MAXPLAYERS ; i++)
	{
	    if (playeringame[i])
	    {
		for (j=0 ; j<MAXPLAYERS ; j++)
		{
		    if (playeringame[j]
			&& dm_frags[i][j] != plrs[i].frags[j])
		    {
			if (plrs[i].frags[j] < 0)
			    dm_frags[i][j]--;
			else
			    dm_frags[i][j]++;

			if (dm_frags[i][j] > 99)
			    dm_frags[i][j] = 99;

			if (dm_frags[i][j] < -99)
			    dm_frags[i][j] = -99;
			
			stillticking = true;
		    }
		}
		dm_totals[i] = WI_fragSum(i);

		if (dm_totals[i] > 99)
		    dm_totals[i] = 99;
		
		if (dm_totals[i] < -99)
		    dm_totals[i] = -99;
	    }
	    
	}
	if (!stillticking)
	{
	    S_StartSound(0, sfx_barexp);
	    dm_state++;
	}

    }
    else if (dm_state == 4)
    {
	if (acceleratestage)
	{
	    S_StartSound(0, sfx_slop);

	    if ( gamemode == commercial)
		WI_initNoState();
	    else
		WI_initShowNextLoc();
	}
    }
    else if (dm_state & 1)
    {
	if (!--cnt_pause)
	{
	    dm_state++;
	    cnt_pause = TICRATE;
	}
    }
}



void WI_drawDeathmatchStats(void)
{

    int		i;
    int		j;
    int		x;
    int		y;
    int		w;
    
    int		lh;	// line height

    lh = WI_SPACINGY;

    WI_slamBackground();
    
    // draw animated background
    WI_drawAnimatedBack(); 
    WI_drawLF();

    // draw stat titles (top line)
    V_DrawPatch(DM_TOTALSX-SHORT(total->width)/2,
		DM_MATRIXY-WI_SPACINGY+10,
		FB,
		total);
    
    V_DrawPatch(DM_KILLERSX, DM_KILLERSY, FB, killers);
    V_DrawPatch(DM_VICTIMSX, DM_VICTIMSY, FB, victims);

    // draw P?
    x = DM_MATRIXX + DM_SPACINGX;
    y = DM_MATRIXY;

    for (i=0 ; i<MAXPLAYERS ; i++)
    {
	if (playeringame[i])
	{
	    V_DrawPatch(x-SHORT(p[i]->width)/2,
			DM_MATRIXY - WI_SPACINGY,
			FB,
			p[i]);
	    
	    V_DrawPatch(DM_MATRIXX-SHORT(p[i]->width)/2,
			y,
			FB,
			p[i]);

	    if (i == me)
	    {
		V_DrawPatch(x-SHORT(p[i]->width)/2,
			    DM_MATRIXY - WI_SPACINGY,
			    FB,
			    bstar);

		V_DrawPatch(DM_MATRIXX-SHORT(p[i]->width)/2,
			    y,
			    FB,
			    star);
	    }
	}
	else
	{
	    // V_DrawPatch(x-SHORT(bp[i]->width)/2,
	    //   DM_MATRIXY - WI_SPACINGY, FB, bp[i]);
	    // V_DrawPatch(DM_MATRIXX-SHORT(bp[i]->width)/2,
	    //   y, FB, bp[i]);
	}
	x += DM_SPACINGX;
	y += WI_SPACINGY;
    }

    // draw stats
    y = DM_MATRIXY+10;
    w = SHORT(num[0]->width);

    for (i=0 ; i<MAXPLAYERS ; i++)
    {
	x = DM_MATRIXX + DM_SPACINGX;

	if (playeringame[i])
	{
	    for (j=0 ; j<MAXPLAYERS ; j++)
	    {
		if (playeringame[j])
		    WI_drawNum(x+w, y, dm_frags[i][j], 2);

		x += DM_SPACINGX;
	    }
	    WI_drawNum(DM_TOTALSX+w, y, dm_totals[i], 2);
	}
	y += WI_SPACINGY;
    }
}

static int	cnt_frags[MAXPLAYERS];
static int	dofrags;
static int	ng_state;

void WI_initNetgameStats(void)
{

    int i;

    state = StatCount;
    acceleratestage = 0;
    ng_state = 1;

    cnt_pause = TICRATE;

    for (i=0 ; i<MAXPLAYERS ; i++)
    {
	if (!playeringame[i])
	    continue;

	cnt_kills[i] = cnt_items[i] = cnt_secret[i] = cnt_frags[i] = 0;

	dofrags += WI_fragSum(i);
    }

    dofrags = !!dofrags;

    WI_initAnimatedBack();
}



void WI_updateNetgameStats(void)
{

    int		i;
    int		fsum;
    
    boolean	stillticking;

    WI_updateAnimatedBack();

    if (acceleratestage && ng_state != 10)
    {
	acceleratestage = 0;

	for (i=0 ; i<MAXPLAYERS ; i++)
	{
	    if (!playeringame[i])
		continue;

	    cnt_kills[i] = (plrs[i].skills * 100) / wbs->maxkills;
	    cnt_items[i] = (plrs[i].sitems * 100) / wbs->maxitems;
	    cnt_secret[i] = (plrs[i].ssecret * 100) / wbs->maxsecret;

	    if (dofrags)
		cnt_frags[i] = WI_fragSum(i);
	}
	S_StartSound(0, sfx_barexp);
	ng_state = 10;
    }

    if (ng_state == 2)
    {
	if (!(bcnt&3))
	    S_StartSound(0, sfx_pistol);

	stillticking = false;

	for (i=0 ; i<MAXPLAYERS ; i++)
	{
	    if (!playeringame[i])
		continue;

	    cnt_kills[i] += 2;

	    if (cnt_kills[i] >= (plrs[i].skills * 100) / wbs->maxkills)
		cnt_kills[i] = (plrs[i].skills * 100) / wbs->maxkills;
	    else
		stillticking = true;
	}
	
	if (!stillticking)
	{
	    S_StartSound(0, sfx_barexp);
	    ng_state++;
	}
    }
    else if (ng_state == 4)
    {
	if (!(bcnt&3))
	    S_StartSound(0, sfx_pistol);

	stillticking = false;

	for (i=0 ; i<MAXPLAYERS ; i++)
	{
	    if (!playeringame[i])
		continue;

	    cnt_items[i] += 2;
	    if (cnt_items[i] >= (plrs[i].sitems * 100) / wbs->maxitems)
		cnt_items[i] = (plrs[i].sitems * 100) / wbs->maxitems;
	    else
		stillticking = true;
	}
	if (!stillticking)
	{
	    S_StartSound(0, sfx_barexp);
	    ng_state++;
	}
    }
    else if (ng_state == 6)
    {
	if (!(bcnt&3))
	    S_StartSound(0, sfx_pistol);

	stillticking = false;

	for (i=0 ; i<MAXPLAYERS ; i++)
	{
	    if (!playeringame[i])
		continue;

	    cnt_secret[i] += 2;

	    if (cnt_secret[i] >= (plrs[i].ssecret * 100) / wbs->maxsecret)
		cnt_secret[i] = (plrs[i].ssecret * 100) / wbs->maxsecret;
	    else
		stillticking = true;
	}
	
	if (!stillticking)
	{
	    S_StartSound(0, sfx_barexp);
	    ng_state += 1 + 2*!dofrags;
	}
    }
    else if (ng_state == 8)
    {
	if (!(bcnt&3))
	    S_StartSound(0, sfx_pistol);

	stillticking = false;

	for (i=0 ; i<MAXPLAYERS ; i++)
	{
	    if (!playeringame[i])
		continue;

	    cnt_frags[i] += 1;

	    if (cnt_frags[i] >= (fsum = WI_fragSum(i)))
		cnt_frags[i] = fsum;
	    else
		stillticking = true;
	}
	
	if (!stillticking)
	{
	    S_StartSound(0, sfx_pldeth);
	    ng_state++;
	}
    }
    else if (ng_state == 10)
    {
	if (acceleratestage)
	{
	    S_StartSound(0, sfx_sgcock);
	    if ( gamemode == commercial )
		WI_initNoState();
	    else
		WI_initShowNextLoc();
	}
    }
    else if (ng_state & 1)
    {
	if (!--cnt_pause)
	{
	    ng_state++;
	    cnt_pause = TICRATE;
	}
    }
}



void WI_drawNetgameStats(void)
{
    int		i;
    int		x;
    int		y;
    int		pwidth = SHORT(percent->width);

    WI_slamBackground();
    
    // draw animated background
    WI_drawAnimatedBack(); 

    WI_drawLF();

    // draw stat titles (top line)
    V_DrawPatch(NG_STATSX+NG_SPACINGX-SHORT(kills->width),
		NG_STATSY, FB, kills);

    V_DrawPatch(NG_STATSX+2*NG_SPACINGX-SHORT(items->width),
		NG_STATSY, FB, items);

    V_DrawPatch(NG_STATSX+3*NG_SPACINGX-SHORT(secret->width),
		NG_STATSY, FB, secret);
    
    if (dofrags)
	V_DrawPatch(NG_STATSX+4*NG_SPACINGX-SHORT(frags->width),
		    NG_STATSY, FB, frags);

    // draw stats
    y = NG_STATSY + SHORT(kills->height);

    for (i=0 ; i<MAXPLAYERS ; i++)
    {
	if (!playeringame[i])
	    continue;

	x = NG_STATSX;
	V_DrawPatch(x-SHORT(p[i]->width), y, FB, p[i]);

	if (i == me)
	    V_DrawPatch(x-SHORT(p[i]->width), y, FB, star);

	x += NG_SPACINGX;
	WI_drawPercent(x-pwidth, y+10, cnt_kills[i]);	x += NG_SPACINGX;
	WI_drawPercent(x-pwidth, y+10, cnt_items[i]);	x += NG_SPACINGX;
	WI_drawPercent(x-pwidth, y+10, cnt_secret[i]);	x += NG_SPACINGX;

	if (dofrags)
	    WI_drawNum(x, y+10, cnt_frags[i], -1);

	y += WI_SPACINGY;
    }

}

static int	sp_state;

void WI_initStats(void)
{
    state = StatCount;
    acceleratestage = 0;
    sp_state = 1;
    cnt_kills[0] = cnt_items[0] = cnt_secret[0] = -1;
    cnt_time = cnt_par = -1;
    cnt_pause = TICRATE;

    WI_initAnimatedBack();
}

void WI_updateStats(void)
{

    WI_updateAnimatedBack();

    if (acceleratestage && sp_state != 10)
    {
	acceleratestage = 0;
	cnt_kills[0] = (plrs[me].skills * 100) / wbs->maxkills;
	cnt_items[0] = (plrs[me].sitems * 100) / wbs->maxitems;
	cnt_secret[0] = (plrs[me].ssecret * 100) / wbs->maxsecret;
	cnt_time = plrs[me].stime / TICRATE;
	cnt_par = wbs->partime / TICRATE;
	S_StartSound(0, sfx_barexp);
	sp_state = 10;
    }

    if (sp_state == 2)
    {
	cnt_kills[0] += 2;

	if (!(bcnt&3))
	    S_StartSound(0, sfx_pistol);

	if (cnt_kills[0] >= (plrs[me].skills * 100) / wbs->maxkills)
	{
	    cnt_kills[0] = (plrs[me].skills * 100) / wbs->maxkills;
	    S_StartSound(0, sfx_barexp);
	    sp_state++;
	}
    }
    else if (sp_state == 4)
    {
	cnt_items[0] += 2;

	if (!(bcnt&3))
	    S_StartSound(0, sfx_pistol);

	if (cnt_items[0] >= (plrs[me].sitems * 100) / wbs->maxitems)
	{
	    cnt_items[0] = (plrs[me].sitems * 100) / wbs->maxitems;
	    S_StartSound(0, sfx_barexp);
	    sp_state++;
	}
    }
    else if (sp_state == 6)
    {
	cnt_secret[0] += 2;

	if (!(bcnt&3))
	    S_StartSound(0, sfx_pistol);

	if (cnt_secret[0] >= (plrs[me].ssecret * 100) / wbs->maxsecret)
	{
	    cnt_secret[0] = (plrs[me].ssecret * 100) / wbs->maxsecret;
	    S_StartSound(0, sfx_barexp);
	    sp_state++;
	}
    }

    else if (sp_state == 8)
    {
	if (!(bcnt&3))
	    S_StartSound(0, sfx_pistol);

	cnt_time += 3;

	if (cnt_time >= plrs[me].stime / TICRATE)
	    cnt_time = plrs[me].stime / TICRATE;

	cnt_par += 3;

	if (cnt_par >= wbs->partime / TICRATE)
	{
	    cnt_par = wbs->partime / TICRATE;

	    if (cnt_time >= plrs[me].stime / TICRATE)
	    {
		S_StartSound(0, sfx_barexp);
		sp_state++;
	    }
	}
    }
    else if (sp_state == 10)
    {
	if (acceleratestage)
	{
	    S_StartSound(0, sfx_sgcock);

	    if (gamemode == commercial)
		WI_initNoState();
	    else
		WI_initShowNextLoc();
	}
    }
    else if (sp_state & 1)
    {
	if (!--cnt_pause)
	{
	    sp_state++;
	    cnt_pause = TICRATE;
	}
    }

}

void WI_drawStats(void)
{
    // line height
    int lh;	

    lh = (3*SHORT(num[0]->height))/2;

    WI_slamBackground();

    // draw animated background
    WI_drawAnimatedBack();
    
    WI_drawLF();

    V_DrawPatch(SP_STATSX, SP_STATSY, FB, kills);
    WI_drawPercent(SCREENWIDTH - SP_STATSX, SP_STATSY, cnt_kills[0]);

    V_DrawPatch(SP_STATSX, SP_STATSY+lh, FB, items);
    WI_drawPercent(SCREENWIDTH - SP_STATSX, SP_STATSY+lh, cnt_items[0]);

    V_DrawPatch(SP_STATSX, SP_STATSY+2*lh, FB, sp_secret);
    WI_drawPercent(SCREENWIDTH - SP_STATSX, SP_STATSY+2*lh, cnt_secret[0]);

    V_DrawPatch(SP_TIMEX, SP_TIMEY, FB, time);
    WI_drawTime(SCREENWIDTH/2 - SP_TIMEX, SP_TIMEY, cnt_time);

    if (wbs->epsd < 3)
    {
	V_DrawPatch(SCREENWIDTH/2 + SP_TIMEX, SP_TIMEY, FB, par);
	WI_drawTime(SCREENWIDTH - SP_TIMEX, SP_TIMEY, cnt_par);
    }

}

void WI_checkForAccelerate(void)
{
    int   i;
    player_t  *player;

    // check for button presses to skip delays
    for (i=0, player = players ; i<MAXPLAYERS ; i++, player++)
    {
	if (playeringame[i])
	{
	    if (player->cmd.buttons & BT_ATTACK)
	    {
		if (!player->attackdown)
		    acceleratestage = 1;
		player->attackdown = true;
	    }
	    else
		player->attackdown = false;
	    if (player->cmd.buttons & BT_USE)
	    {
		if (!player->usedown)
		    acceleratestage = 1;
		player->usedown = true;
	    }
	    else
		player->usedown = false;
	}
    }
}



// Updates stuff each tick
void WI_Ticker(void)
{
    // counter for general background animation
    bcnt++;  

    if (bcnt == 1)
    {
	// intermission music
  	if ( gamemode == commercial )
	  S_ChangeMusic(mus_dm2int, true);
	else
	  S_ChangeMusic(mus_inter, true); 
    }

    WI_checkForAccelerate();

    switch (state)
    {
      case StatCount:
	if (deathmatch) WI_updateDeathmatchStats();
	else if (netgame) WI_updateNetgameStats();
	else WI_updateStats();
	break;
	
      case ShowNextLoc:
	WI_updateShowNextLoc();
	break;
	
      case NoState:
	WI_updateNoState();
	break;
    }

}

void WI_loadData(void)
{
    int		i;
    int		j;
    char	name[9];
    anim_t*	a;

    if (gamemode == commercial)
	strcpy(name, "INTERPIC");
    else 
	sprintf(name, "WIMAP%d", wbs->epsd);
    
    if ( gamemode == retail )
    {
      if (wbs->epsd == 3)
	strcpy(name,"INTERPIC");
    }

    // background
    bg = W_CacheLumpName(name, PU_CACHE);    
    V_DrawPatch(0, 0, 1, bg);


    // UNUSED unsigned char *pic = screens[1];
    // if (gamemode == commercial)
    // {
    // darken the background image
    // while (pic != screens[1] + SCREENHEIGHT*SCREENWIDTH)
    // {
    //   *pic = colormaps[256*25 + *pic];
    //   pic++;
    // }
    //}

    if (gamemode == commercial)
    {
	NUMCMAPS = 32;								
	lnames = (patch_t **) Z_Malloc(sizeof(patch_t*) * NUMCMAPS,
				       PU_STATIC, 0);
	for (i=0 ; i<NUMCMAPS ; i++)
	{								
	    sprintf(name, "CWILV%2.2d", i);
	    lnames[i] = W_CacheLumpName(name, PU_STATIC);
	}					
    }
    else
    {
	lnames = (patch_t **) Z_Malloc(sizeof(patch_t*) * NUMMAPS,
				       PU_STATIC, 0);
	for (i=0 ; i<NUMMAPS ; i++)
	{
	    sprintf(name, "WILV%d%d", wbs->epsd, i);
	    lnames[i] = W_CacheLumpName(name, PU_STATIC);
	}

	// you are here
	yah[0] = W_CacheLumpName("WIURH0", PU_STATIC);

	// you are here (alt.)
	yah[1] = W_CacheLumpName("WIURH1", PU_STATIC);

	// splat
	splat = W_CacheLumpName("WISPLAT", PU_STATIC); 
	
	if (wbs->epsd < 3)
	{
	    for (j=0;j<NUMANIMS[wbs->epsd];j++)
	    {
		a = &anims[wbs->epsd][j];
		for (i=0;i<a->nanims;i++)
		{
		    // MONDO HACK!
		    if (wbs->epsd != 1 || j != 8) 
		    {
			// animations
			sprintf(name, "WIA%d%.2d%.2d", wbs->epsd, j, i);  
			a->p[i] = W_CacheLumpName(name, PU_STATIC);
		    }
		    else
		    {
			// HACK ALERT!
			a->p[i] = anims[1][4].p[i]; 
		    }
		}
	    }
	}
    }

    // More hacks on minus sign.
    wiminus = W_CacheLumpName("WIMINUS", PU_STATIC); 

    for (i=0;i<10;i++)
    {
	 // numbers 0-9
	sprintf(name, "WINUM%d", i);     
	num[i] = W_CacheLumpName(name, PU_STATIC);
    }

    // percent sign
    percent = W_CacheLumpName("WIPCNT", PU_STATIC);

    // "finished"
    finished = W_CacheLumpName("WIF", PU_STATIC);

    // "entering"
    entering = W_CacheLumpName("WIENTER", PU_STATIC);

    // "kills"
    kills = W_CacheLumpName("WIOSTK", PU_STATIC);   

    // "scrt"
    secret = W_CacheLumpName("WIOSTS", PU_STATIC);

     // "secret"
    sp_secret = W_CacheLumpName("WISCRT2", PU_STATIC);

    // Yuck. 
    if (french)
    {
	// "items"
	if (netgame && !deathmatch)
	    items = W_CacheLumpName("WIOBJ", PU_STATIC);    
  	else
	    items = W_CacheLumpName("WIOSTI", PU_STATIC);
    } else
	items = W_CacheLumpName("WIOSTI", PU_STATIC);

    // "frgs"
    frags = W_CacheLumpName("WIFRGS", PU_STATIC);    

    // ":"
    colon = W_CacheLumpName("WICOLON", PU_STATIC); 

    // "time"
    time = W_CacheLumpName("WITIME", PU_STATIC);   

    // "sucks"
    sucks = W_CacheLumpName("WISUCKS", PU_STATIC);  

    // "par"
    par = W_CacheLumpName("WIPAR", PU_STATIC);   

    // "killers" (vertical)
    killers = W_CacheLumpName("WIKILRS", PU_STATIC);

    // "victims" (horiz)
    victims = W_CacheLumpName("WIVCTMS", PU_STATIC);

    // "total"
    total = W_CacheLumpName("WIMSTT", PU_STATIC);   

    // your face
    star = W_CacheLumpName("STFST01", PU_STATIC);

    // dead face
    bstar = W_CacheLumpName("STFDEAD0", PU_STATIC);    

    for (i=0 ; i<MAXPLAYERS ; i++)
    {
	// "1,2,3,4"
	sprintf(name, "STPB%d", i);      
	p[i] = W_CacheLumpName(name, PU_STATIC);

	// "1,2,3,4"
	sprintf(name, "WIBP%d", i+1);     
	bp[i] = W_CacheLumpName(name, PU_STATIC);
    }

}

void WI_unloadData(void)
{
    int		i;
    int		j;

    Z_ChangeTag(wiminus, PU_CACHE);

    for (i=0 ; i<10 ; i++)
	Z_ChangeTag(num[i], PU_CACHE);
    
    if (gamemode == commercial)
    {
  	for (i=0 ; i<NUMCMAPS ; i++)
	    Z_ChangeTag(lnames[i], PU_CACHE);
    }
    else
    {
	Z_ChangeTag(yah[0], PU_CACHE);
	Z_ChangeTag(yah[1], PU_CACHE);

	Z_ChangeTag(splat, PU_CACHE);

	for (i=0 ; i<NUMMAPS ; i++)
	    Z_ChangeTag(lnames[i], PU_CACHE);
	
	if (wbs->epsd < 3)
	{
	    for (j=0;j<NUMANIMS[wbs->epsd];j++)
	    {
		if (wbs->epsd != 1 || j != 8)
		    for (i=0;i<anims[wbs->epsd][j].nanims;i++)
			Z_ChangeTag(anims[wbs->epsd][j].p[i], PU_CACHE);
	    }
	}
    }
    
    Z_Free(lnames);

    Z_ChangeTag(percent, PU_CACHE);
    Z_ChangeTag(colon, PU_CACHE);
    Z_ChangeTag(finished, PU_CACHE);
    Z_ChangeTag(entering, PU_CACHE);
    Z_ChangeTag(kills, PU_CACHE);
    Z_ChangeTag(secret, PU_CACHE);
    Z_ChangeTag(sp_secret, PU_CACHE);
    Z_ChangeTag(items, PU_CACHE);
    Z_ChangeTag(frags, PU_CACHE);
    Z_ChangeTag(time, PU_CACHE);
    Z_ChangeTag(sucks, PU_CACHE);
    Z_ChangeTag(par, PU_CACHE);

    Z_ChangeTag(victims, PU_CACHE);
    Z_ChangeTag(killers, PU_CACHE);
    Z_ChangeTag(total, PU_CACHE);
    //  Z_ChangeTag(star, PU_CACHE);
    //  Z_ChangeTag(bstar, PU_CACHE);
    
    for (i=0 ; i<MAXPLAYERS ; i++)
	Z_ChangeTag(p[i], PU_CACHE);

    for (i=0 ; i<MAXPLAYERS ; i++)
	Z_ChangeTag(bp[i], PU_CACHE);
}

void WI_Drawer (void)
{
    switch (state)
    {
      case StatCount:
	if (deathmatch)
	    WI_drawDeathmatchStats();
	else if (netgame)
	    WI_drawNetgameStats();
	else
	    WI_drawStats();
	break;
	
      case ShowNextLoc:
	WI_drawShowNextLoc();
	break;
	
      case NoState:
	WI_drawNoState();
	break;
    }
}


void WI_initVariables(wbstartstruct_t* wbstartstruct)
{

    wbs = wbstartstruct;

#ifdef RANGECHECKING
    if (gamemode != commercial)
    {
      if ( gamemode == retail )
	RNGCHECK(wbs->epsd, 0, 3);
      else
	RNGCHECK(wbs->epsd, 0, 2);
    }
    else
    {
	RNGCHECK(wbs->last, 0, 8);
	RNGCHECK(wbs->next, 0, 8);
    }
    RNGCHECK(wbs->pnum, 0, MAXPLAYERS);
    RNGCHECK(wbs->pnum, 0, MAXPLAYERS);
#endif

    acceleratestage = 0;
    cnt = bcnt = 0;
    firstrefresh = 1;
    me = wbs->pnum;
    plrs = wbs->plyr;

    if (!wbs->maxkills)
	wbs->maxkills = 1;

    if (!wbs->maxitems)
	wbs->maxitems = 1;

    if (!wbs->maxsecret)
	wbs->maxsecret = 1;

    if ( gamemode != retail )
      if (wbs->epsd > 2)
	wbs->epsd -= 3;
}

void WI_Start(wbstartstruct_t* wbstartstruct)
{

    WI_initVariables(wbstartstruct);
    WI_loadData();

    if (deathmatch)
	WI_initDeathmatchStats();
    else if (netgame)
	WI_initNetgameStats();
    else
	WI_initStats();
}
```