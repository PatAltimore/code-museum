---
title: "am_map.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/am_map.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/am_map.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "am-map-c"
order: 19
description: "This file contains the automap code for DOOM, a groundbreaking feature that enhanced navigation and spatial awareness in the game."

summary:
  - point: "Defines automap colors and constants for rendering"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "Introduces player arrow and cheat arrow vector graphics"
    link: "https://en.wikipedia.org/wiki/Automap"
    link_label: "Automap"
  - point: "Implements zoom and pan functionality for the automap"
    link: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    link_label: "Fixed-point arithmetic"
  - point: "Handles user input for automap interaction"
    link: "https://en.wikipedia.org/wiki/Keyboard_input"
    link_label: "Keyboard input"
  - point: "Manages light levels for visual effects in automap mode"
    link: "https://en.wikipedia.org/wiki/Video_game_graphics"
    link_label: "Video game graphics"

enhancements:
  - id: "player-arrow-vector-graphics"
    line_start: 154
    line_end: 168
    title: "Why DOOM's Automap Had Arrows"
    wikipedia_url: "https://en.wikipedia.org/wiki/Automap"
    image_url: ""
    image_caption: ""
    content: "This section defines the vector graphics for the player's arrow in the automap. The arrow consists of multiple line segments, forming a simple yet effective representation of the player's orientation. The design prioritizes clarity, ensuring players can quickly understand their position and direction. In the early 1990s, vector graphics were commonly used for such purposes due to their low computational overhead compared to raster images. John Carmack, known for his optimization prowess, likely chose this approach to maintain performance on the limited hardware of the era, such as 386 and 486 processors. The arrow's design influenced later games that adopted similar automap systems, including titles like Diablo and Baldur's Gate, which used simple graphical cues to orient players within complex environments."
  - id: "cheat-arrow-vector-graphics"
    line_start: 169
    line_end: 190
    title: "The Hidden Cheat Arrow in DOOM"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cheats_in_video_games"
    image_url: ""
    image_caption: ""
    content: "The cheat_player_arrow is a more elaborate version of the player arrow, featuring additional segments and shapes. This graphic is used when the player activates certain cheats, such as revealing the entire map. The inclusion of a distinct visual for cheat mode reflects id Software's attention to detail, ensuring players could differentiate between normal and cheat-enabled states. Cheat codes were a staple of 1990s gaming, often serving as a way for developers to test features or for players to explore games in unconventional ways. The cheat arrow adds a playful touch to DOOM's automap, reinforcing the game's reputation for blending serious technical achievement with fun and accessibility."
  - id: "bounding-box-calculation"
    line_start: 384
    line_end: 422
    title: "How DOOM Found the Map's Edges"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bounding_box"
    image_url: ""
    image_caption: ""
    content: "This routine calculates the bounding box of all vertices in the map, determining the minimum and maximum coordinates. These values are used to set zoom limits, ensuring the automap can scale appropriately for maps of varying sizes. Bounding box calculations were a common technique in computer graphics, used to optimize rendering and collision detection. In DOOM, this approach allowed the automap to dynamically adapt to the geometry of each level, a necessity given the game's modular map design. The technique influenced later games that required dynamic scaling or navigation systems, including Quake and Unreal, which expanded on DOOM's innovations in spatial representation."
  - id: "zoom-and-scale-adjustment"
    line_start: 737
    line_end: 753
    title: "The Math Behind DOOM's Automap Zoom"
    wikipedia_url: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    image_url: ""
    image_caption: ""
    content: "The AM_changeWindowScale function adjusts the automap's zoom level by modifying scaling multipliers. It ensures the zoom stays within predefined limits and updates the map's scale accordingly. Fixed-point arithmetic is used to perform these calculations efficiently, a necessity given the hardware constraints of the early 1990s. This method allowed DOOM to provide smooth zoom transitions without the computational overhead of floating-point operations. The technique was later adopted by other games and systems requiring precise, fast calculations, such as real-time strategy games and embedded systems in robotics."
  - id: "light-level-updates"
    line_start: 780
    line_end: 798
    title: "Dynamic Lighting in DOOM's Automap"
    wikipedia_url: "https://en.wikipedia.org/wiki/Video_game_graphics"
    image_url: ""
    image_caption: ""
    content: "This function updates the automap's light level at regular intervals, creating a strobing effect. The light levels cycle through predefined values, adding a dynamic visual element to the automap. Such effects were rare in early 1990s games, as they required careful optimization to avoid impacting performance. DOOM's use of dynamic lighting in the automap demonstrated id Software's commitment to enhancing the player's experience, even in secondary features like navigation. This approach influenced later games that incorporated dynamic lighting for aesthetic or gameplay purposes, including Half-Life and the Halo series."
  - id: "game-tick-automap-update"
    line_start: 801
    line_end: 826
    title: "What Happens When the Automap Updates?"
    wikipedia_url: "https://doomwiki.org/wiki/Automap"
    image_url: ""
    image_caption: ""
    content: "The `AM_Ticker` function is responsible for updating the automap on each game tick. It checks if the automap is active and increments the internal clock (`amclock`). If the player is in 'follow mode,' the map adjusts to center on the player's position. It also handles zoom changes and panning based on player input. This function reflects DOOM's focus on responsiveness, ensuring the automap remains dynamic and useful during gameplay. In 1993, real-time updates like these were computationally expensive, especially on the limited hardware of the era, but DOOM's efficient design made it possible. The automap's interactivity influenced later games like Diablo and StarCraft, which incorporated dynamic maps to enhance user experience."
  - id: "clear-frame-buffer"
    line_start: 829
    line_end: 835
    title: "How DOOM Clears the Automap Frame Buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Frame_buffer"
    image_url: ""
    image_caption: ""
    content: "The `AM_clearFB` function resets the automap's frame buffer to a uniform color using `memset`. This ensures the map starts with a clean slate before rendering new elements. Frame buffers were a critical part of graphics programming in the early 1990s, as they stored pixel data for rendering on the screen. By directly manipulating memory, DOOM achieved fast and efficient rendering, a necessity given the hardware constraints of the time. This approach laid the groundwork for modern graphics engines, which continue to rely on optimized memory operations for performance."
  - id: "cohen-sutherland-clipping"
    line_start: 838
    line_end: 969
    title: "The Algorithm That Clips the Automap Lines"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm"
    image_url: ""
    image_caption: ""
    content: "The `AM_clipMline` function implements a modified version of the Cohen-Sutherland line clipping algorithm, optimized for DOOM's automap. It determines whether a line segment is within the visible area and clips it accordingly. The algorithm uses precalculated slopes and bitwise operations for efficiency, rejecting lines that are trivially outside the viewport. In 1993, such optimizations were critical for real-time rendering on consumer PCs, which lacked dedicated GPUs. This technique influenced later games and graphics libraries, where efficient clipping remains a cornerstone of rendering pipelines."
  - id: "bresenham-line-drawing"
    line_start: 973
    line_end: 1048
    title: "The Classic Line Algorithm That Powered DOOM"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm"
    image_url: ""
    image_caption: ""
    content: "The `AM_drawFline` function uses Bresenham's line-drawing algorithm to render lines on the automap. This algorithm calculates pixel positions to represent a straight line between two points, minimizing computational overhead by avoiding floating-point arithmetic. DOOM's implementation includes optimizations for speed, reflecting the game's need to render complex environments on limited hardware. Bresenham's algorithm, first developed in the 1960s, remains a fundamental technique in computer graphics, influencing everything from early video games to modern rasterization methods."
  - id: "draw-gridlines-automap"
    line_start: 1067
    line_end: 1110
    title: "How DOOM Draws Its Automap Grid"
    wikipedia_url: "https://doomwiki.org/wiki/Automap"
    image_url: ""
    image_caption: ""
    content: "The `AM_drawGrid` function renders a grid on the automap, aligning lines with the game's floor and ceiling tiles. It calculates the start and end points for vertical and horizontal gridlines based on the player's position and the map's dimensions. This grid helps players orient themselves within the game's complex levels. In the early 1990s, such visual aids were rare in games, but DOOM's automap set a precedent for intuitive navigation systems. Modern games like Minecraft and Civilization continue to use grid-based overlays for similar purposes."
  - id: "draw-walls-automap"
    line_start: 1112
    line_end: 1237
    title: "Rendering Walls on DOOM's Automap"
    wikipedia_url: "https://doomwiki.org/wiki/Automap"
    image_url: ""
    image_caption: ""
    content: "The `AM_drawWalls` function iterates over the game's LineDefs to render visible walls on the automap. It checks flags for secrets, teleporters, and level geometry changes, applying different colors to indicate their properties. This visual differentiation helps players identify key features and navigate efficiently. The automap's ability to convey such detailed information was groundbreaking in 1993, influencing later games like Quake and Unreal, which expanded on the concept of interactive maps."
  - id: "draw-players-automap"
    line_start: 1239
    line_end: 1281
    title: "Multiplayer Positions on DOOM's Automap"
    wikipedia_url: "https://en.wikipedia.org/wiki/Multiplayer_video_game"
    image_url: ""
    image_caption: ""
    content: "The `AM_drawPlayers` function renders player positions on the automap, using different colors to distinguish between them. In single-player mode, it draws an arrow representing the player's orientation. In multiplayer mode, it handles multiple players, reflecting DOOM's innovative support for networked gameplay. This feature helped establish DOOM as a pioneer in multiplayer gaming, influencing titles like Counter-Strike and Halo, which built on its foundation."
  - id: "draw-crosshair-automap"
    line_start: 1325
    line_end: 1329
    title: "The Single Pixel That Guides You"
    wikipedia_url: "https://doomwiki.org/wiki/Automap"
    image_url: ""
    image_caption: ""
    content: "The `AM_drawCrosshair` function places a single pixel at the center of the automap, serving as a crosshair. While simple, this feature underscores DOOM's attention to detail, providing players with a clear reference point for navigation. Such minimalistic design choices contributed to the game's usability and influenced later UI designs in gaming."
  - id: "automap-rendering-loop"
    line_start: 1331
    line_end: 1348
    title: "The Master Function That Draws It All"
    wikipedia_url: "https://doomwiki.org/wiki/Automap"
    image_url: ""
    image_caption: ""
    content: "The `AM_Drawer` function orchestrates the rendering of the automap, calling subroutines to clear the frame buffer, draw the grid, walls, players, and marks, and update the crosshair. It represents the culmination of DOOM's automap system, integrating various components into a cohesive whole. This modular approach to rendering influenced the design of later game engines, including id Tech and Unity, which rely on similar systems to manage complex rendering tasks."

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
//
// $Log:$
//
// DESCRIPTION:  the automap code
//
//-----------------------------------------------------------------------------

static const char rcsid[] = "$Id: am_map.c,v 1.4 1997/02/03 21:24:33 b1 Exp $";

#include <stdio.h>


#include "z_zone.h"
#include "doomdef.h"
#include "st_stuff.h"
#include "p_local.h"
#include "w_wad.h"

#include "m_cheat.h"
#include "i_system.h"

// Needs access to LFB.
#include "v_video.h"

// State.
#include "doomstat.h"
#include "r_state.h"

// Data.
#include "dstrings.h"

#include "am_map.h"


// For use if I do walls with outsides/insides
#define REDS		(256-5*16)
#define REDRANGE	16
#define BLUES		(256-4*16+8)
#define BLUERANGE	8
#define GREENS		(7*16)
#define GREENRANGE	16
#define GRAYS		(6*16)
#define GRAYSRANGE	16
#define BROWNS		(4*16)
#define BROWNRANGE	16
#define YELLOWS		(256-32+7)
#define YELLOWRANGE	1
#define BLACK		0
#define WHITE		(256-47)

// Automap colors
#define BACKGROUND	BLACK
#define YOURCOLORS	WHITE
#define YOURRANGE	0
#define WALLCOLORS	REDS
#define WALLRANGE	REDRANGE
#define TSWALLCOLORS	GRAYS
#define TSWALLRANGE	GRAYSRANGE
#define FDWALLCOLORS	BROWNS
#define FDWALLRANGE	BROWNRANGE
#define CDWALLCOLORS	YELLOWS
#define CDWALLRANGE	YELLOWRANGE
#define THINGCOLORS	GREENS
#define THINGRANGE	GREENRANGE
#define SECRETWALLCOLORS WALLCOLORS
#define SECRETWALLRANGE WALLRANGE
#define GRIDCOLORS	(GRAYS + GRAYSRANGE/2)
#define GRIDRANGE	0
#define XHAIRCOLORS	GRAYS

// drawing stuff
#define	FB		0

#define AM_PANDOWNKEY	KEY_DOWNARROW
#define AM_PANUPKEY	KEY_UPARROW
#define AM_PANRIGHTKEY	KEY_RIGHTARROW
#define AM_PANLEFTKEY	KEY_LEFTARROW
#define AM_ZOOMINKEY	'='
#define AM_ZOOMOUTKEY	'-'
#define AM_STARTKEY	KEY_TAB
#define AM_ENDKEY	KEY_TAB
#define AM_GOBIGKEY	'0'
#define AM_FOLLOWKEY	'f'
#define AM_GRIDKEY	'g'
#define AM_MARKKEY	'm'
#define AM_CLEARMARKKEY	'c'

#define AM_NUMMARKPOINTS 10

// scale on entry
#define INITSCALEMTOF (.2*FRACUNIT)
// how much the automap moves window per tic in frame-buffer coordinates
// moves 140 pixels in 1 second
#define F_PANINC	4
// how much zoom-in per tic
// goes to 2x in 1 second
#define M_ZOOMIN        ((int) (1.02*FRACUNIT))
// how much zoom-out per tic
// pulls out to 0.5x in 1 second
#define M_ZOOMOUT       ((int) (FRACUNIT/1.02))

// translates between frame-buffer and map distances
#define FTOM(x) FixedMul(((x)<<16),scale_ftom)
#define MTOF(x) (FixedMul((x),scale_mtof)>>16)
// translates between frame-buffer and map coordinates
#define CXMTOF(x)  (f_x + MTOF((x)-m_x))
#define CYMTOF(y)  (f_y + (f_h - MTOF((y)-m_y)))

// the following is crap
#define LINE_NEVERSEE ML_DONTDRAW

typedef struct
{
    int x, y;
} fpoint_t;

typedef struct
{
    fpoint_t a, b;
} fline_t;

typedef struct
{
    fixed_t		x,y;
} mpoint_t;

typedef struct
{
    mpoint_t a, b;
} mline_t;

typedef struct
{
    fixed_t slp, islp;
} islope_t;



//
// The vector graphics for the automap.
//  A line drawing of the player pointing right,
//   starting from the middle.
//
#define R ((8*PLAYERRADIUS)/7)
mline_t player_arrow[] = {
    { { -R+R/8, 0 }, { R, 0 } }, // -----
    { { R, 0 }, { R-R/2, R/4 } },  // ----->
    { { R, 0 }, { R-R/2, -R/4 } },
    { { -R+R/8, 0 }, { -R-R/8, R/4 } }, // >---->
    { { -R+R/8, 0 }, { -R-R/8, -R/4 } },
    { { -R+3*R/8, 0 }, { -R+R/8, R/4 } }, // >>--->
    { { -R+3*R/8, 0 }, { -R+R/8, -R/4 } }
};
#undef R
#define NUMPLYRLINES (sizeof(player_arrow)/sizeof(mline_t))

#define R ((8*PLAYERRADIUS)/7)
mline_t cheat_player_arrow[] = {
    { { -R+R/8, 0 }, { R, 0 } }, // -----
    { { R, 0 }, { R-R/2, R/6 } },  // ----->
    { { R, 0 }, { R-R/2, -R/6 } },
    { { -R+R/8, 0 }, { -R-R/8, R/6 } }, // >----->
    { { -R+R/8, 0 }, { -R-R/8, -R/6 } },
    { { -R+3*R/8, 0 }, { -R+R/8, R/6 } }, // >>----->
    { { -R+3*R/8, 0 }, { -R+R/8, -R/6 } },
    { { -R/2, 0 }, { -R/2, -R/6 } }, // >>-d--->
    { { -R/2, -R/6 }, { -R/2+R/6, -R/6 } },
    { { -R/2+R/6, -R/6 }, { -R/2+R/6, R/4 } },
    { { -R/6, 0 }, { -R/6, -R/6 } }, // >>-dd-->
    { { -R/6, -R/6 }, { 0, -R/6 } },
    { { 0, -R/6 }, { 0, R/4 } },
    { { R/6, R/4 }, { R/6, -R/7 } }, // >>-ddt->
    { { R/6, -R/7 }, { R/6+R/32, -R/7-R/32 } },
    { { R/6+R/32, -R/7-R/32 }, { R/6+R/10, -R/7 } }
};
#undef R
#define NUMCHEATPLYRLINES (sizeof(cheat_player_arrow)/sizeof(mline_t))

#define R (FRACUNIT)
mline_t triangle_guy[] = {
    { { -.867*R, -.5*R }, { .867*R, -.5*R } },
    { { .867*R, -.5*R } , { 0, R } },
    { { 0, R }, { -.867*R, -.5*R } }
};
#undef R
#define NUMTRIANGLEGUYLINES (sizeof(triangle_guy)/sizeof(mline_t))

#define R (FRACUNIT)
mline_t thintriangle_guy[] = {
    { { -.5*R, -.7*R }, { R, 0 } },
    { { R, 0 }, { -.5*R, .7*R } },
    { { -.5*R, .7*R }, { -.5*R, -.7*R } }
};
#undef R
#define NUMTHINTRIANGLEGUYLINES (sizeof(thintriangle_guy)/sizeof(mline_t))




static int 	cheating = 0;
static int 	grid = 0;

static int 	leveljuststarted = 1; 	// kluge until AM_LevelInit() is called

boolean    	automapactive = false;
static int 	finit_width = SCREENWIDTH;
static int 	finit_height = SCREENHEIGHT - 32;

// location of window on screen
static int 	f_x;
static int	f_y;

// size of window on screen
static int 	f_w;
static int	f_h;

static int 	lightlev; 		// used for funky strobing effect
static byte*	fb; 			// pseudo-frame buffer
static int 	amclock;

static mpoint_t m_paninc; // how far the window pans each tic (map coords)
static fixed_t 	mtof_zoommul; // how far the window zooms in each tic (map coords)
static fixed_t 	ftom_zoommul; // how far the window zooms in each tic (fb coords)

static fixed_t 	m_x, m_y;   // LL x,y where the window is on the map (map coords)
static fixed_t 	m_x2, m_y2; // UR x,y where the window is on the map (map coords)

//
// width/height of window on map (map coords)
//
static fixed_t 	m_w;
static fixed_t	m_h;

// based on level size
static fixed_t 	min_x;
static fixed_t	min_y; 
static fixed_t 	max_x;
static fixed_t  max_y;

static fixed_t 	max_w; // max_x-min_x,
static fixed_t  max_h; // max_y-min_y

// based on player size
static fixed_t 	min_w;
static fixed_t  min_h;


static fixed_t 	min_scale_mtof; // used to tell when to stop zooming out
static fixed_t 	max_scale_mtof; // used to tell when to stop zooming in

// old stuff for recovery later
static fixed_t old_m_w, old_m_h;
static fixed_t old_m_x, old_m_y;

// old location used by the Follower routine
static mpoint_t f_oldloc;

// used by MTOF to scale from map-to-frame-buffer coords
static fixed_t scale_mtof = INITSCALEMTOF;
// used by FTOM to scale from frame-buffer-to-map coords (=1/scale_mtof)
static fixed_t scale_ftom;

static player_t *plr; // the player represented by an arrow

static patch_t *marknums[10]; // numbers used for marking by the automap
static mpoint_t markpoints[AM_NUMMARKPOINTS]; // where the points are
static int markpointnum = 0; // next point to be assigned

static int followplayer = 1; // specifies whether to follow the player around

static unsigned char cheat_amap_seq[] = { 0xb2, 0x26, 0x26, 0x2e, 0xff };
static cheatseq_t cheat_amap = { cheat_amap_seq, 0 };

static boolean stopped = true;

extern boolean viewactive;
//extern byte screens[][SCREENWIDTH*SCREENHEIGHT];



void
V_MarkRect
( int	x,
  int	y,
  int	width,
  int	height );

// Calculates the slope and slope according to the x-axis of a line
// segment in map coordinates (with the upright y-axis n' all) so
// that it can be used with the brain-dead drawing stuff.

void
AM_getIslope
( mline_t*	ml,
  islope_t*	is )
{
    int dx, dy;

    dy = ml->a.y - ml->b.y;
    dx = ml->b.x - ml->a.x;
    if (!dy) is->islp = (dx<0?-MAXINT:MAXINT);
    else is->islp = FixedDiv(dx, dy);
    if (!dx) is->slp = (dy<0?-MAXINT:MAXINT);
    else is->slp = FixedDiv(dy, dx);

}

//
//
//
void AM_activateNewScale(void)
{
    m_x += m_w/2;
    m_y += m_h/2;
    m_w = FTOM(f_w);
    m_h = FTOM(f_h);
    m_x -= m_w/2;
    m_y -= m_h/2;
    m_x2 = m_x + m_w;
    m_y2 = m_y + m_h;
}

//
//
//
void AM_saveScaleAndLoc(void)
{
    old_m_x = m_x;
    old_m_y = m_y;
    old_m_w = m_w;
    old_m_h = m_h;
}

//
//
//
void AM_restoreScaleAndLoc(void)
{

    m_w = old_m_w;
    m_h = old_m_h;
    if (!followplayer)
    {
	m_x = old_m_x;
	m_y = old_m_y;
    } else {
	m_x = plr->mo->x - m_w/2;
	m_y = plr->mo->y - m_h/2;
    }
    m_x2 = m_x + m_w;
    m_y2 = m_y + m_h;

    // Change the scaling multipliers
    scale_mtof = FixedDiv(f_w<<FRACBITS, m_w);
    scale_ftom = FixedDiv(FRACUNIT, scale_mtof);
}

//
// adds a marker at the current location
//
void AM_addMark(void)
{
    markpoints[markpointnum].x = m_x + m_w/2;
    markpoints[markpointnum].y = m_y + m_h/2;
    markpointnum = (markpointnum + 1) % AM_NUMMARKPOINTS;

}

//
// Determines bounding box of all vertices,
// sets global variables controlling zoom range.
//
void AM_findMinMaxBoundaries(void)
{
    int i;
    fixed_t a;
    fixed_t b;

    min_x = min_y =  MAXINT;
    max_x = max_y = -MAXINT;
  
    for (i=0;i<numvertexes;i++)
    {
	if (vertexes[i].x < min_x)
	    min_x = vertexes[i].x;
	else if (vertexes[i].x > max_x)
	    max_x = vertexes[i].x;
    
	if (vertexes[i].y < min_y)
	    min_y = vertexes[i].y;
	else if (vertexes[i].y > max_y)
	    max_y = vertexes[i].y;
    }
  
    max_w = max_x - min_x;
    max_h = max_y - min_y;

    min_w = 2*PLAYERRADIUS; // const? never changed?
    min_h = 2*PLAYERRADIUS;

    a = FixedDiv(f_w<<FRACBITS, max_w);
    b = FixedDiv(f_h<<FRACBITS, max_h);
  
    min_scale_mtof = a < b ? a : b;
    max_scale_mtof = FixedDiv(f_h<<FRACBITS, 2*PLAYERRADIUS);

}


//
//
//
void AM_changeWindowLoc(void)
{
    if (m_paninc.x || m_paninc.y)
    {
	followplayer = 0;
	f_oldloc.x = MAXINT;
    }

    m_x += m_paninc.x;
    m_y += m_paninc.y;

    if (m_x + m_w/2 > max_x)
	m_x = max_x - m_w/2;
    else if (m_x + m_w/2 < min_x)
	m_x = min_x - m_w/2;
  
    if (m_y + m_h/2 > max_y)
	m_y = max_y - m_h/2;
    else if (m_y + m_h/2 < min_y)
	m_y = min_y - m_h/2;

    m_x2 = m_x + m_w;
    m_y2 = m_y + m_h;
}


//
//
//
void AM_initVariables(void)
{
    int pnum;
    static event_t st_notify = { ev_keyup, AM_MSGENTERED };

    automapactive = true;
    fb = screens[0];

    f_oldloc.x = MAXINT;
    amclock = 0;
    lightlev = 0;

    m_paninc.x = m_paninc.y = 0;
    ftom_zoommul = FRACUNIT;
    mtof_zoommul = FRACUNIT;

    m_w = FTOM(f_w);
    m_h = FTOM(f_h);

    // find player to center on initially
    if (!playeringame[pnum = consoleplayer])
	for (pnum=0;pnum<MAXPLAYERS;pnum++)
	    if (playeringame[pnum])
		break;
  
    plr = &players[pnum];
    m_x = plr->mo->x - m_w/2;
    m_y = plr->mo->y - m_h/2;
    AM_changeWindowLoc();

    // for saving & restoring
    old_m_x = m_x;
    old_m_y = m_y;
    old_m_w = m_w;
    old_m_h = m_h;

    // inform the status bar of the change
    ST_Responder(&st_notify);

}

//
// 
//
void AM_loadPics(void)
{
    int i;
    char namebuf[9];
  
    for (i=0;i<10;i++)
    {
	sprintf(namebuf, "AMMNUM%d", i);
	marknums[i] = W_CacheLumpName(namebuf, PU_STATIC);
    }

}

void AM_unloadPics(void)
{
    int i;
  
    for (i=0;i<10;i++)
	Z_ChangeTag(marknums[i], PU_CACHE);

}

void AM_clearMarks(void)
{
    int i;

    for (i=0;i<AM_NUMMARKPOINTS;i++)
	markpoints[i].x = -1; // means empty
    markpointnum = 0;
}

//
// should be called at the start of every level
// right now, i figure it out myself
//
void AM_LevelInit(void)
{
    leveljuststarted = 0;

    f_x = f_y = 0;
    f_w = finit_width;
    f_h = finit_height;

    AM_clearMarks();

    AM_findMinMaxBoundaries();
    scale_mtof = FixedDiv(min_scale_mtof, (int) (0.7*FRACUNIT));
    if (scale_mtof > max_scale_mtof)
	scale_mtof = min_scale_mtof;
    scale_ftom = FixedDiv(FRACUNIT, scale_mtof);
}




//
//
//
void AM_Stop (void)
{
    static event_t st_notify = { 0, ev_keyup, AM_MSGEXITED };

    AM_unloadPics();
    automapactive = false;
    ST_Responder(&st_notify);
    stopped = true;
}

//
//
//
void AM_Start (void)
{
    static int lastlevel = -1, lastepisode = -1;

    if (!stopped) AM_Stop();
    stopped = false;
    if (lastlevel != gamemap || lastepisode != gameepisode)
    {
	AM_LevelInit();
	lastlevel = gamemap;
	lastepisode = gameepisode;
    }
    AM_initVariables();
    AM_loadPics();
}

//
// set the window scale to the maximum size
//
void AM_minOutWindowScale(void)
{
    scale_mtof = min_scale_mtof;
    scale_ftom = FixedDiv(FRACUNIT, scale_mtof);
    AM_activateNewScale();
}

//
// set the window scale to the minimum size
//
void AM_maxOutWindowScale(void)
{
    scale_mtof = max_scale_mtof;
    scale_ftom = FixedDiv(FRACUNIT, scale_mtof);
    AM_activateNewScale();
}


//
// Handle events (user inputs) in automap mode
//
boolean
AM_Responder
( event_t*	ev )
{

    int rc;
    static int cheatstate=0;
    static int bigstate=0;
    static char buffer[20];

    rc = false;

    if (!automapactive)
    {
	if (ev->type == ev_keydown && ev->data1 == AM_STARTKEY)
	{
	    AM_Start ();
	    viewactive = false;
	    rc = true;
	}
    }

    else if (ev->type == ev_keydown)
    {

	rc = true;
	switch(ev->data1)
	{
	  case AM_PANRIGHTKEY: // pan right
	    if (!followplayer) m_paninc.x = FTOM(F_PANINC);
	    else rc = false;
	    break;
	  case AM_PANLEFTKEY: // pan left
	    if (!followplayer) m_paninc.x = -FTOM(F_PANINC);
	    else rc = false;
	    break;
	  case AM_PANUPKEY: // pan up
	    if (!followplayer) m_paninc.y = FTOM(F_PANINC);
	    else rc = false;
	    break;
	  case AM_PANDOWNKEY: // pan down
	    if (!followplayer) m_paninc.y = -FTOM(F_PANINC);
	    else rc = false;
	    break;
	  case AM_ZOOMOUTKEY: // zoom out
	    mtof_zoommul = M_ZOOMOUT;
	    ftom_zoommul = M_ZOOMIN;
	    break;
	  case AM_ZOOMINKEY: // zoom in
	    mtof_zoommul = M_ZOOMIN;
	    ftom_zoommul = M_ZOOMOUT;
	    break;
	  case AM_ENDKEY:
	    bigstate = 0;
	    viewactive = true;
	    AM_Stop ();
	    break;
	  case AM_GOBIGKEY:
	    bigstate = !bigstate;
	    if (bigstate)
	    {
		AM_saveScaleAndLoc();
		AM_minOutWindowScale();
	    }
	    else AM_restoreScaleAndLoc();
	    break;
	  case AM_FOLLOWKEY:
	    followplayer = !followplayer;
	    f_oldloc.x = MAXINT;
	    plr->message = followplayer ? AMSTR_FOLLOWON : AMSTR_FOLLOWOFF;
	    break;
	  case AM_GRIDKEY:
	    grid = !grid;
	    plr->message = grid ? AMSTR_GRIDON : AMSTR_GRIDOFF;
	    break;
	  case AM_MARKKEY:
	    sprintf(buffer, "%s %d", AMSTR_MARKEDSPOT, markpointnum);
	    plr->message = buffer;
	    AM_addMark();
	    break;
	  case AM_CLEARMARKKEY:
	    AM_clearMarks();
	    plr->message = AMSTR_MARKSCLEARED;
	    break;
	  default:
	    cheatstate=0;
	    rc = false;
	}
	if (!deathmatch && cht_CheckCheat(&cheat_amap, ev->data1))
	{
	    rc = false;
	    cheating = (cheating+1) % 3;
	}
    }

    else if (ev->type == ev_keyup)
    {
	rc = false;
	switch (ev->data1)
	{
	  case AM_PANRIGHTKEY:
	    if (!followplayer) m_paninc.x = 0;
	    break;
	  case AM_PANLEFTKEY:
	    if (!followplayer) m_paninc.x = 0;
	    break;
	  case AM_PANUPKEY:
	    if (!followplayer) m_paninc.y = 0;
	    break;
	  case AM_PANDOWNKEY:
	    if (!followplayer) m_paninc.y = 0;
	    break;
	  case AM_ZOOMOUTKEY:
	  case AM_ZOOMINKEY:
	    mtof_zoommul = FRACUNIT;
	    ftom_zoommul = FRACUNIT;
	    break;
	}
    }

    return rc;

}


//
// Zooming
//
void AM_changeWindowScale(void)
{

    // Change the scaling multipliers
    scale_mtof = FixedMul(scale_mtof, mtof_zoommul);
    scale_ftom = FixedDiv(FRACUNIT, scale_mtof);

    if (scale_mtof < min_scale_mtof)
	AM_minOutWindowScale();
    else if (scale_mtof > max_scale_mtof)
	AM_maxOutWindowScale();
    else
	AM_activateNewScale();
}


//
//
//
void AM_doFollowPlayer(void)
{

    if (f_oldloc.x != plr->mo->x || f_oldloc.y != plr->mo->y)
    {
	m_x = FTOM(MTOF(plr->mo->x)) - m_w/2;
	m_y = FTOM(MTOF(plr->mo->y)) - m_h/2;
	m_x2 = m_x + m_w;
	m_y2 = m_y + m_h;
	f_oldloc.x = plr->mo->x;
	f_oldloc.y = plr->mo->y;

	//  m_x = FTOM(MTOF(plr->mo->x - m_w/2));
	//  m_y = FTOM(MTOF(plr->mo->y - m_h/2));
	//  m_x = plr->mo->x - m_w/2;
	//  m_y = plr->mo->y - m_h/2;

    }

}

//
//
//
void AM_updateLightLev(void)
{
    static nexttic = 0;
    //static int litelevels[] = { 0, 3, 5, 6, 6, 7, 7, 7 };
    static int litelevels[] = { 0, 4, 7, 10, 12, 14, 15, 15 };
    static int litelevelscnt = 0;
   
    // Change light level
    if (amclock>nexttic)
    {
	lightlev = litelevels[litelevelscnt++];
	if (litelevelscnt == sizeof(litelevels)/sizeof(int)) litelevelscnt = 0;
	nexttic = amclock + 6 - (amclock % 6);
    }

}


//
// Updates on Game Tick
//
void AM_Ticker (void)
{

    if (!automapactive)
	return;

    amclock++;

    if (followplayer)
	AM_doFollowPlayer();

    // Change the zoom if necessary
    if (ftom_zoommul != FRACUNIT)
	AM_changeWindowScale();

    // Change x,y location
    if (m_paninc.x || m_paninc.y)
	AM_changeWindowLoc();

    // Update light level
    // AM_updateLightLev();

}


//
// Clear automap frame buffer.
//
void AM_clearFB(int color)
{
    memset(fb, color, f_w*f_h);
}


//
// Automap clipping of lines.
//
// Based on Cohen-Sutherland clipping algorithm but with a slightly
// faster reject and precalculated slopes.  If the speed is needed,
// use a hash algorithm to handle  the common cases.
//
boolean
AM_clipMline
( mline_t*	ml,
  fline_t*	fl )
{
    enum
    {
	LEFT	=1,
	RIGHT	=2,
	BOTTOM	=4,
	TOP	=8
    };
    
    register	outcode1 = 0;
    register	outcode2 = 0;
    register	outside;
    
    fpoint_t	tmp;
    int		dx;
    int		dy;

    
#define DOOUTCODE(oc, mx, my) \
    (oc) = 0; \
    if ((my) < 0) (oc) |= TOP; \
    else if ((my) >= f_h) (oc) |= BOTTOM; \
    if ((mx) < 0) (oc) |= LEFT; \
    else if ((mx) >= f_w) (oc) |= RIGHT;

    
    // do trivial rejects and outcodes
    if (ml->a.y > m_y2)
	outcode1 = TOP;
    else if (ml->a.y < m_y)
	outcode1 = BOTTOM;

    if (ml->b.y > m_y2)
	outcode2 = TOP;
    else if (ml->b.y < m_y)
	outcode2 = BOTTOM;
    
    if (outcode1 & outcode2)
	return false; // trivially outside

    if (ml->a.x < m_x)
	outcode1 |= LEFT;
    else if (ml->a.x > m_x2)
	outcode1 |= RIGHT;
    
    if (ml->b.x < m_x)
	outcode2 |= LEFT;
    else if (ml->b.x > m_x2)
	outcode2 |= RIGHT;
    
    if (outcode1 & outcode2)
	return false; // trivially outside

    // transform to frame-buffer coordinates.
    fl->a.x = CXMTOF(ml->a.x);
    fl->a.y = CYMTOF(ml->a.y);
    fl->b.x = CXMTOF(ml->b.x);
    fl->b.y = CYMTOF(ml->b.y);

    DOOUTCODE(outcode1, fl->a.x, fl->a.y);
    DOOUTCODE(outcode2, fl->b.x, fl->b.y);

    if (outcode1 & outcode2)
	return false;

    while (outcode1 | outcode2)
    {
	// may be partially inside box
	// find an outside point
	if (outcode1)
	    outside = outcode1;
	else
	    outside = outcode2;
	
	// clip to each side
	if (outside & TOP)
	{
	    dy = fl->a.y - fl->b.y;
	    dx = fl->b.x - fl->a.x;
	    tmp.x = fl->a.x + (dx*(fl->a.y))/dy;
	    tmp.y = 0;
	}
	else if (outside & BOTTOM)
	{
	    dy = fl->a.y - fl->b.y;
	    dx = fl->b.x - fl->a.x;
	    tmp.x = fl->a.x + (dx*(fl->a.y-f_h))/dy;
	    tmp.y = f_h-1;
	}
	else if (outside & RIGHT)
	{
	    dy = fl->b.y - fl->a.y;
	    dx = fl->b.x - fl->a.x;
	    tmp.y = fl->a.y + (dy*(f_w-1 - fl->a.x))/dx;
	    tmp.x = f_w-1;
	}
	else if (outside & LEFT)
	{
	    dy = fl->b.y - fl->a.y;
	    dx = fl->b.x - fl->a.x;
	    tmp.y = fl->a.y + (dy*(-fl->a.x))/dx;
	    tmp.x = 0;
	}

	if (outside == outcode1)
	{
	    fl->a = tmp;
	    DOOUTCODE(outcode1, fl->a.x, fl->a.y);
	}
	else
	{
	    fl->b = tmp;
	    DOOUTCODE(outcode2, fl->b.x, fl->b.y);
	}
	
	if (outcode1 & outcode2)
	    return false; // trivially outside
    }

    return true;
}
#undef DOOUTCODE


//
// Classic Bresenham w/ whatever optimizations needed for speed
//
void
AM_drawFline
( fline_t*	fl,
  int		color )
{
    register int x;
    register int y;
    register int dx;
    register int dy;
    register int sx;
    register int sy;
    register int ax;
    register int ay;
    register int d;
    
    static fuck = 0;

    // For debugging only
    if (      fl->a.x < 0 || fl->a.x >= f_w
	   || fl->a.y < 0 || fl->a.y >= f_h
	   || fl->b.x < 0 || fl->b.x >= f_w
	   || fl->b.y < 0 || fl->b.y >= f_h)
    {
	fprintf(stderr, "fuck %d \r", fuck++);
	return;
    }

#define PUTDOT(xx,yy,cc) fb[(yy)*f_w+(xx)]=(cc)

    dx = fl->b.x - fl->a.x;
    ax = 2 * (dx<0 ? -dx : dx);
    sx = dx<0 ? -1 : 1;

    dy = fl->b.y - fl->a.y;
    ay = 2 * (dy<0 ? -dy : dy);
    sy = dy<0 ? -1 : 1;

    x = fl->a.x;
    y = fl->a.y;

    if (ax > ay)
    {
	d = ay - ax/2;
	while (1)
	{
	    PUTDOT(x,y,color);
	    if (x == fl->b.x) return;
	    if (d>=0)
	    {
		y += sy;
		d -= ax;
	    }
	    x += sx;
	    d += ay;
	}
    }
    else
    {
	d = ax - ay/2;
	while (1)
	{
	    PUTDOT(x, y, color);
	    if (y == fl->b.y) return;
	    if (d >= 0)
	    {
		x += sx;
		d -= ay;
	    }
	    y += sy;
	    d += ax;
	}
    }
}


//
// Clip lines, draw visible part sof lines.
//
void
AM_drawMline
( mline_t*	ml,
  int		color )
{
    static fline_t fl;

    if (AM_clipMline(ml, &fl))
	AM_drawFline(&fl, color); // draws it on frame buffer using fb coords
}



//
// Draws flat (floor/ceiling tile) aligned grid lines.
//
void AM_drawGrid(int color)
{
    fixed_t x, y;
    fixed_t start, end;
    mline_t ml;

    // Figure out start of vertical gridlines
    start = m_x;
    if ((start-bmaporgx)%(MAPBLOCKUNITS<<FRACBITS))
	start += (MAPBLOCKUNITS<<FRACBITS)
	    - ((start-bmaporgx)%(MAPBLOCKUNITS<<FRACBITS));
    end = m_x + m_w;

    // draw vertical gridlines
    ml.a.y = m_y;
    ml.b.y = m_y+m_h;
    for (x=start; x<end; x+=(MAPBLOCKUNITS<<FRACBITS))
    {
	ml.a.x = x;
	ml.b.x = x;
	AM_drawMline(&ml, color);
    }

    // Figure out start of horizontal gridlines
    start = m_y;
    if ((start-bmaporgy)%(MAPBLOCKUNITS<<FRACBITS))
	start += (MAPBLOCKUNITS<<FRACBITS)
	    - ((start-bmaporgy)%(MAPBLOCKUNITS<<FRACBITS));
    end = m_y + m_h;

    // draw horizontal gridlines
    ml.a.x = m_x;
    ml.b.x = m_x + m_w;
    for (y=start; y<end; y+=(MAPBLOCKUNITS<<FRACBITS))
    {
	ml.a.y = y;
	ml.b.y = y;
	AM_drawMline(&ml, color);
    }

}

//
// Determines visible lines, draws them.
// This is LineDef based, not LineSeg based.
//
void AM_drawWalls(void)
{
    int i;
    static mline_t l;

    for (i=0;i<numlines;i++)
    {
	l.a.x = lines[i].v1->x;
	l.a.y = lines[i].v1->y;
	l.b.x = lines[i].v2->x;
	l.b.y = lines[i].v2->y;
	if (cheating || (lines[i].flags & ML_MAPPED))
	{
	    if ((lines[i].flags & LINE_NEVERSEE) && !cheating)
		continue;
	    if (!lines[i].backsector)
	    {
		AM_drawMline(&l, WALLCOLORS+lightlev);
	    }
	    else
	    {
		if (lines[i].special == 39)
		{ // teleporters
		    AM_drawMline(&l, WALLCOLORS+WALLRANGE/2);
		}
		else if (lines[i].flags & ML_SECRET) // secret door
		{
		    if (cheating) AM_drawMline(&l, SECRETWALLCOLORS + lightlev);
		    else AM_drawMline(&l, WALLCOLORS+lightlev);
		}
		else if (lines[i].backsector->floorheight
			   != lines[i].frontsector->floorheight) {
		    AM_drawMline(&l, FDWALLCOLORS + lightlev); // floor level change
		}
		else if (lines[i].backsector->ceilingheight
			   != lines[i].frontsector->ceilingheight) {
		    AM_drawMline(&l, CDWALLCOLORS+lightlev); // ceiling level change
		}
		else if (cheating) {
		    AM_drawMline(&l, TSWALLCOLORS+lightlev);
		}
	    }
	}
	else if (plr->powers[pw_allmap])
	{
	    if (!(lines[i].flags & LINE_NEVERSEE)) AM_drawMline(&l, GRAYS+3);
	}
    }
}


//
// Rotation in 2D.
// Used to rotate player arrow line character.
//
void
AM_rotate
( fixed_t*	x,
  fixed_t*	y,
  angle_t	a )
{
    fixed_t tmpx;

    tmpx =
	FixedMul(*x,finecosine[a>>ANGLETOFINESHIFT])
	- FixedMul(*y,finesine[a>>ANGLETOFINESHIFT]);
    
    *y   =
	FixedMul(*x,finesine[a>>ANGLETOFINESHIFT])
	+ FixedMul(*y,finecosine[a>>ANGLETOFINESHIFT]);

    *x = tmpx;
}

void
AM_drawLineCharacter
( mline_t*	lineguy,
  int		lineguylines,
  fixed_t	scale,
  angle_t	angle,
  int		color,
  fixed_t	x,
  fixed_t	y )
{
    int		i;
    mline_t	l;

    for (i=0;i<lineguylines;i++)
    {
	l.a.x = lineguy[i].a.x;
	l.a.y = lineguy[i].a.y;

	if (scale)
	{
	    l.a.x = FixedMul(scale, l.a.x);
	    l.a.y = FixedMul(scale, l.a.y);
	}

	if (angle)
	    AM_rotate(&l.a.x, &l.a.y, angle);

	l.a.x += x;
	l.a.y += y;

	l.b.x = lineguy[i].b.x;
	l.b.y = lineguy[i].b.y;

	if (scale)
	{
	    l.b.x = FixedMul(scale, l.b.x);
	    l.b.y = FixedMul(scale, l.b.y);
	}

	if (angle)
	    AM_rotate(&l.b.x, &l.b.y, angle);
	
	l.b.x += x;
	l.b.y += y;

	AM_drawMline(&l, color);
    }
}

void AM_drawPlayers(void)
{
    int		i;
    player_t*	p;
    static int 	their_colors[] = { GREENS, GRAYS, BROWNS, REDS };
    int		their_color = -1;
    int		color;

    if (!netgame)
    {
	if (cheating)
	    AM_drawLineCharacter
		(cheat_player_arrow, NUMCHEATPLYRLINES, 0,
		 plr->mo->angle, WHITE, plr->mo->x, plr->mo->y);
	else
	    AM_drawLineCharacter
		(player_arrow, NUMPLYRLINES, 0, plr->mo->angle,
		 WHITE, plr->mo->x, plr->mo->y);
	return;
    }

    for (i=0;i<MAXPLAYERS;i++)
    {
	their_color++;
	p = &players[i];

	if ( (deathmatch && !singledemo) && p != plr)
	    continue;

	if (!playeringame[i])
	    continue;

	if (p->powers[pw_invisibility])
	    color = 246; // *close* to black
	else
	    color = their_colors[their_color];
	
	AM_drawLineCharacter
	    (player_arrow, NUMPLYRLINES, 0, p->mo->angle,
	     color, p->mo->x, p->mo->y);
    }

}

void
AM_drawThings
( int	colors,
  int 	colorrange)
{
    int		i;
    mobj_t*	t;

    for (i=0;i<numsectors;i++)
    {
	t = sectors[i].thinglist;
	while (t)
	{
	    AM_drawLineCharacter
		(thintriangle_guy, NUMTHINTRIANGLEGUYLINES,
		 16<<FRACBITS, t->angle, colors+lightlev, t->x, t->y);
	    t = t->snext;
	}
    }
}

void AM_drawMarks(void)
{
    int i, fx, fy, w, h;

    for (i=0;i<AM_NUMMARKPOINTS;i++)
    {
	if (markpoints[i].x != -1)
	{
	    //      w = SHORT(marknums[i]->width);
	    //      h = SHORT(marknums[i]->height);
	    w = 5; // because something's wrong with the wad, i guess
	    h = 6; // because something's wrong with the wad, i guess
	    fx = CXMTOF(markpoints[i].x);
	    fy = CYMTOF(markpoints[i].y);
	    if (fx >= f_x && fx <= f_w - w && fy >= f_y && fy <= f_h - h)
		V_DrawPatch(fx, fy, FB, marknums[i]);
	}
    }

}

void AM_drawCrosshair(int color)
{
    fb[(f_w*(f_h+1))/2] = color; // single point for now

}

void AM_Drawer (void)
{
    if (!automapactive) return;

    AM_clearFB(BACKGROUND);
    if (grid)
	AM_drawGrid(GRIDCOLORS);
    AM_drawWalls();
    AM_drawPlayers();
    if (cheating==2)
	AM_drawThings(THINGCOLORS, THINGRANGE);
    AM_drawCrosshair(XHAIRCOLORS);

    AM_drawMarks();

    V_MarkRect(f_x, f_y, f_w, f_h);

}
```