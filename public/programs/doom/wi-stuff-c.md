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
description: "This file handles the intermission screens in DOOM, showcasing level transitions, statistics, and animations that added depth to the gameplay experience."

summary:
  - point: "Defines intermission animations and their logic"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "Optimizes graphics using patches instead of full-screen frames"
    link: "https://en.wikipedia.org/wiki/Framebuffer"
    link_label: "Framebuffer"
  - point: "Introduces modular animation structures for episodic maps"
    link: "https://en.wikipedia.org/wiki/Animation"
    link_label: "Animation"
  - point: "Handles multiplayer-specific intermission details"
    link: "https://en.wikipedia.org/wiki/Multiplayer_video_game"
    link_label: "Multiplayer gaming"
  - point: "Pushes hardware limits with efficient rendering techniques"
    link: "https://en.wikipedia.org/wiki/Computer_graphics"
    link_label: "Computer graphics"

enhancements:
  - id: "animation-structure-for-intermission-screens"
    line_start: 405
    line_end: 409
    title: "Animation Structure for Intermission Screens"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "This section introduces the `animenum_t` enumeration, which defines three types of animations: `ANIM_ALWAYS`, `ANIM_RANDOM`, and `ANIM_LEVEL`. These categories allow the intermission screens to display dynamic content tailored to the player's progress and the game's episodic structure. At the time, animation systems in games were often hardcoded or limited in flexibility. By creating a modular approach, DOOM's developers ensured that animations could be reused and adapted across different levels and episodes. This innovation influenced later games by encouraging developers to think of animations as modular components rather than static assets. The flexibility of this system also made it easier to port DOOM to various platforms, as the animation logic was abstracted from the hardware-specific rendering details."
  - id: "point-data-for-level-maps"
    line_start: 411
    line_end: 433
    title: "Intermission Screen Data: Coordinates, Animation Structures, and Episode Tables"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "This compact region contains all the static data that drives DOOM's episode intermission screens. The `point_t` struct is simply an (x, y) screen coordinate used to pin level markers and animation cells to specific pixels on the background map graphic. The runtime `anim_t` struct combines an animation type (ANIM_ALWAYS for looping effects, ANIM_RANDOM for occasional flickers, ANIM_LEVEL for progress-tied reveals), a tick period, a frame count, a point_t location, and the loaded patch pointers; every animation cell on an intermission screen is one instance of this struct. Below the structs, three arrays, `epsd0animinfo`, `epsd1animinfo`, and `epsd2animinfo`, hard-code the full animation schedules for the three episodes: Knee-Deep in the Dead, The Shores of Hell, and Inferno. The companion `NUMANIMS` array derives each episode's count with a sizeof divide, avoiding the maintenance hazard of a manually updated constant. Finally, the `anims` pointer array indexes all three episode tables by episode number so that a single runtime expression selects the correct schedule. Together these declarations replaced what could have been a maze of switch statements with a small table-driven system that is easy to read, easy to extend, and entirely content-side, illustrating how id Software separated data from code even under the time pressure of a 1993 ship date."
  - id: "wi-draw-no-state"
    line_start: 811
    line_end: 815
    title: "Why Draw Nothing? A Placeholder Function"
    wikipedia_url: "https://en.wikipedia.org/wiki/Placeholder"
    image_url: ""
    image_caption: ""
    content: "The `WI_drawNoState` function is a simple placeholder that sets a flag (`snl_pointeron`) and calls another function, `WI_drawShowNextLoc`. This function is part of the intermission screen logic but does not perform any significant drawing itself. It serves as a minimal state handler for scenarios where no specific intermission screen needs rendering. In the early 1990s, placeholder functions like this were common in game development, ensuring modularity and allowing future expansion without breaking existing code. This approach reflects John Carmack's emphasis on clean, modular programming. While the function itself is trivial, it contributes to the broader architecture of DOOM's intermission system, which influenced later games like Quake and Unreal Tournament by demonstrating how to handle transitions between gameplay states efficiently."
  - id: "wi-frag-sum"
    line_start: 817
    line_end: 838
    title: "Negative Frags: A Hack for Multiplayer Stats"
    wikipedia_url: "https://en.wikipedia.org/wiki/Multiplayer_video_game"
    image_url: ""
    image_caption: ""
    content: "The `WI_fragSum` function calculates the total frags (kills) for a given player, excluding self-frags. Interestingly, it includes a commented-out hack for handling negative frags, a rare feature in multiplayer games of the era. This reflects the experimental nature of DOOM's multiplayer design, where edge cases like self-inflicted damage were considered. Multiplayer gaming in 1993 was still in its infancy, with DOOM pioneering networked deathmatch gameplay. The ability to track and display frags dynamically was groundbreaking, influencing later games like Quake, which expanded on DOOM's multiplayer innovations. The commented-out code hints at the iterative development process, where features were tested and sometimes abandoned based on player feedback or technical constraints."
  - id: "wi-init-deathmatch-stats"
    line_start: 848
    line_end: 873
    title: "Initializing Deathmatch: Stats from Scratch"
    wikipedia_url: "https://en.wikipedia.org/wiki/Deathmatch_(gaming)"
    image_url: ""
    image_caption: ""
    content: "The `WI_initDeathmatchStats` function sets up the data structures for tracking player stats in deathmatch mode, initializing arrays for frags and totals. This function reflects the modular design philosophy of DOOM, where each game mode has dedicated initialization routines. Deathmatch was a revolutionary concept in 1993, allowing players to compete directly against each other over local networks. The function ensures that all stats are reset at the start of a match, preventing carryover errors. This modular approach influenced later multiplayer games, which adopted similar initialization techniques to manage complex game states efficiently. The inclusion of animated backgrounds (`WI_initAnimatedBack`) adds visual flair, showcasing DOOM's ability to combine technical innovation with engaging aesthetics."
  - id: "wi-update-deathmatch-stats"
    line_start: 877
    line_end: 976
    title: "Dynamic Deathmatch: Updating Frags in Real-Time"
    wikipedia_url: "https://en.wikipedia.org/wiki/Real-time_computing"
    image_url: ""
    image_caption: ""
    content: "The `WI_updateDeathmatchStats` function dynamically updates player stats during deathmatch gameplay. It checks for changes in frags and adjusts totals accordingly, ensuring that the intermission screen reflects the latest game state. This real-time updating was a technical challenge in the early 1990s, given the limited processing power of consumer PCs. The function also includes sound effects (`S_StartSound`) to enhance the player experience, tying visual updates to auditory cues. Real-time stat tracking became a standard feature in multiplayer games, with DOOM setting the precedent. Later games like Counter-Strike and Team Fortress 2 built on this foundation, incorporating more sophisticated algorithms for tracking and displaying player performance."
  - id: "wi-draw-deathmatch-stats"
    line_start: 980
    line_end: 1071
    title: "Drawing Deathmatch Stats: A Visual Breakdown"
    wikipedia_url: "https://en.wikipedia.org/wiki/Computer_graphics"
    image_url: ""
    image_caption: ""
    content: "The `WI_drawDeathmatchStats` function renders the intermission screen for deathmatch mode, displaying player frags and totals in a matrix format. It uses patch graphics (`V_DrawPatch`) to create a visually appealing layout, with icons representing players and their stats. This function highlights DOOM's innovative use of computer graphics to enhance gameplay. The matrix format was a clever way to present complex data in an easily digestible form, a design choice that influenced later games like Unreal Tournament. The function also includes special handling for the local player (`me`), drawing additional icons to indicate their position. This attention to detail reflects the team's commitment to creating an immersive multiplayer experience."
  - id: "wi-init-netgame-stats"
    line_start: 1077
    line_end: 1101
    title: "Netgame Stats: Preparing for Cooperative Play"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cooperative_gameplay"
    image_url: ""
    image_caption: ""
    content: "The `WI_initNetgameStats` function initializes stats for netgame mode, a cooperative multiplayer experience. It resets counters for kills, items, secrets, and frags, ensuring a clean slate for each session. Cooperative gameplay was a unique feature in DOOM, allowing players to work together to complete levels. This function reflects the game's versatility, supporting both competitive and cooperative modes. The modular initialization routine influenced later games like Diablo and Left 4 Dead, which adopted similar techniques to manage multiplayer stats. The inclusion of animated backgrounds (`WI_initAnimatedBack`) adds polish, demonstrating DOOM's ability to combine technical innovation with engaging visual design."
  - id: "wi-update-netgame-stats"
    line_start: 1105
    line_end: 1256
    title: "Cooperative Stats: Tracking Progress Together"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cooperative_gameplay"
    image_url: ""
    image_caption: ""
    content: "The `WI_updateNetgameStats` function updates player stats during netgame mode, tracking kills, items, secrets, and frags. It uses incremental updates to create a sense of progression, with sound effects (`S_StartSound`) enhancing the experience. Cooperative gameplay was a novel concept in 1993, and DOOM's implementation set the standard for future games. The function ensures that stats are updated dynamically, reflecting the team's focus on real-time feedback. This approach influenced later cooperative games like Borderlands, which expanded on DOOM's stat-tracking techniques to create more immersive multiplayer experiences. The function's modular design also highlights the team's commitment to clean, maintainable code."
  - id: "wi-draw-netgame-stats"
    line_start: 1260
    line_end: 1313
    title: "Rendering Cooperative Stats: A Shared Victory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Heads-up_display"
    image_url: ""
    image_caption: ""
    content: "The `WI_drawNetgameStats` function renders the intermission screen for netgame mode, displaying player stats in a visually appealing format. It uses patch graphics (`V_DrawPatch`) and percentage displays (`WI_drawPercent`) to showcase kills, items, secrets, and frags. This function reflects DOOM's innovative use of heads-up displays (HUDs) to enhance gameplay. The layout emphasizes teamwork, highlighting each player's contributions to the group's success. This design choice influenced later cooperative games like Halo and Destiny, which adopted similar HUD techniques to foster collaboration. The function also includes special handling for the local player (`me`), adding visual cues to indicate their position. This attention to detail underscores the team's commitment to creating an engaging multiplayer experience."
  - id: "animation-hacks-for-episode-logic"
    line_start: 1537
    line_end: 1705
    title: "The Animation Hack That Saved Episode 2"
    wikipedia_url: "https://doomwiki.org/wiki/Source_code"
    image_url: ""
    image_caption: ""
    content: "This section of code loads animation data for the intermission screen, with a notable hack for Episode 2's animations. The programmer bypasses a specific animation (index 8) by reusing data from another animation (index 4). This workaround avoids creating redundant resources, saving memory and simplifying logic. At the time, DOOM was designed to run on hardware with limited memory, often as low as 4MB of RAM. Such constraints demanded clever tricks like this to optimize resource usage. John Carmack, known for his technical ingenuity, likely implemented this hack to meet tight deadlines and hardware limitations. This approach reflects the era's pragmatic programming style, where functionality often trumped elegance. The hack underscores the challenges of developing games for heterogeneous PC configurations. Techniques like this influenced later game engines, including id Tech, which continued to prioritize performance optimization. Developers studying DOOM's source code often cite these hacks as examples of resourceful problem-solving under constraints."
  - id: "resource-unloading-for-intermission-screen"
    line_start: 1707
    line_end: 1769
    title: "How DOOM Frees Memory Between Levels"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The WI_unloadData function systematically frees or caches resources used during the intermission screen. It changes memory tags for various assets, ensuring they are available for reuse or safely discarded. This memory management approach was critical for DOOM's performance on low-end PCs. By dynamically managing resources, the game avoided crashes and ensured smooth transitions between levels. In 1993, memory management was a cornerstone of game development, as PCs lacked the abundance of RAM seen in modern systems. Carmack's team leveraged techniques like this to maximize the game's efficiency. The systematic unloading of resources influenced later engines, including Quake and Unreal Engine, which adopted similar strategies to handle large-scale environments. This function exemplifies the meticulous attention to memory optimization that defined early PC gaming."
  - id: "state-based-intermission-drawing"
    line_start: 1771
    line_end: 1792
    title: "Switching States: Drawing Intermission Screens"
    wikipedia_url: "https://en.wikipedia.org/wiki/State_machine"
    image_url: ""
    image_caption: ""
    content: "WI_Drawer uses a state machine to determine which intermission screen to draw based on the current game state. It handles deathmatch stats, network game stats, or single-player stats, depending on the context. State machines were a common programming pattern in the early '90s, especially for games, as they provided a structured way to manage complex behaviors. This design allowed DOOM to support multiple gameplay modes without duplicating code. The use of a state machine here reflects the game's modular architecture, which was ahead of its time. This approach influenced later games and engines, where state-based systems became standard for managing UI and gameplay logic. Developers studying DOOM's source code often point to its state machine implementations as a model for clean, maintainable design."
  - id: "variable-initialization-for-intermission-logic"
    line_start: 1795
    line_end: 1835
    title: "Initializing Variables for Post-Level Stats"
    wikipedia_url: "https://en.wikipedia.org/wiki/Variable_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "WI_initVariables initializes key variables for the intermission screen, including player stats, kill counts, and item totals. It also performs range checks to ensure data integrity. This function reflects the meticulous attention to detail required in game programming, where even minor errors could cause crashes or corrupt data. In the early '90s, debugging tools were limited, so developers often relied on manual checks like these. The range-checking code highlights the team's commitment to stability, even as they pushed the limits of hardware. This initialization routine influenced later games, where robust variable handling became a hallmark of reliable software. DOOM's source code remains a touchstone for developers seeking to understand the foundations of modern game programming."
  - id: "starting-intermission-screen-logic"
    line_start: 1837
    line_end: 1848
    title: "The Function That Starts It All"
    wikipedia_url: "https://en.wikipedia.org/wiki/Function_(computer_programming)"
    image_url: ""
    image_caption: ""
    content: "WI_Start is the entry point for the intermission screen logic. It initializes variables, loads resources, and determines which stats to display based on the gameplay mode. This function encapsulates the modular design philosophy of DOOM, where each component is self-contained and reusable. By separating initialization, resource loading, and mode-specific logic, the developers created a system that was easy to extend and debug. In the context of 1993, this modularity was a significant achievement, as many games of the era relied on monolithic codebases. WI_Start's design influenced later engines, where modularity became a cornerstone of scalability and maintainability. Developers studying DOOM's source code often cite this function as an example of clean, efficient design."

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