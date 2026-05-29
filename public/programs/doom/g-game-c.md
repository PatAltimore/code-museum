---
title: "g_game.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/g_game.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/g_game.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "g-game-c"
order: 7
description: "This file handles core gameplay mechanics and player interactions in DOOM, showcasing techniques that defined the FPS genre."

summary:
  - point: "Introduced ticcmd structures for precise input handling"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "Implemented game state transitions like level loading and intermissions"
    link: "https://en.wikipedia.org/wiki/Game_state"
    link_label: "Game State"
  - point: "Optimized for multiplayer and demo playback"
    link: "https://en.wikipedia.org/wiki/Multiplayer_video_game"
    link_label: "Multiplayer Gaming"
  - point: "Pioneered input abstraction for keyboard, mouse, and joystick"
    link: "https://en.wikipedia.org/wiki/Input_device"
    link_label: "Input Devices"
  - point: "Defined player rebirth and level completion mechanics"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM Mechanics"

enhancements:
  - id: "cmd-checksum-validation"
    line_start: 218
    line_end: 227
    title: "Why DOOM Validates Player Commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Checksum"
    image_url: ""
    image_caption: ""
    content: "The G_CmdChecksum function calculates a checksum for a player's ticcmd structure, ensuring the integrity of player inputs during gameplay. This was crucial in multiplayer settings where data corruption or tampering could disrupt the experience. In 1993, networked multiplayer gaming was still in its infancy, and DOOM's approach to validating commands helped set a precedent for ensuring fair play. By summing the integer values of the ticcmd structure, the game could detect inconsistencies and enforce synchronization between clients. This technique influenced later multiplayer games, which adopted similar integrity checks to prevent cheating and maintain stable connections."
  - id: "input-handling-build-ticcmd"
    line_start: 230
    line_end: 436
    title: "How DOOM Unified Player Input"
    wikipedia_url: "https://en.wikipedia.org/wiki/Input_device"
    image_url: ""
    image_caption: ""
    content: "The G_BuildTiccmd function processes player inputs from various devices—keyboard, mouse, and joystick—and converts them into a unified ticcmd structure. This abstraction allowed DOOM to support multiple input methods seamlessly, a significant innovation at the time. The function handles movement, turning, strafing, and special actions like firing and using items, while also accounting for double-click behaviors and turbo cheats. By normalizing inputs, DOOM ensured consistent gameplay across different hardware setups. This approach influenced later games, which adopted similar input abstraction layers to accommodate diverse control schemes, paving the way for modern input handling in engines like Unity and Unreal."
  - id: "level-loading-sky-textures"
    line_start: 444
    line_end: 496
    title: "The Sky Texture Trick in Level Loading"
    wikipedia_url: "https://en.wikipedia.org/wiki/Texture_mapping"
    image_url: ""
    image_caption: ""
    content: "The G_DoLoadLevel function initializes a new level, including setting up sky textures based on the current episode and game version. DOOM dynamically determines the appropriate sky texture, creating a sense of progression and atmosphere as players advance through episodes. This was a clever use of texture mapping to enhance immersion on limited hardware. The function also resets player states, clears input buffers, and prepares the game for the next stage. This modular approach to level loading influenced later game engines, which adopted similar techniques to manage assets and transitions efficiently. The dynamic sky texture selection became a hallmark of environmental storytelling in games."
  - id: "event-handling-responder"
    line_start: 499
    line_end: 596
    title: "How DOOM Handles Player Events"
    wikipedia_url: "https://en.wikipedia.org/wiki/Event-driven_programming"
    image_url: ""
    image_caption: ""
    content: "The G_Responder function processes player events, such as key presses, mouse movements, and joystick inputs, and determines their impact on gameplay. It handles special cases like spy mode (F12) and menu activation during demos, showcasing DOOM's event-driven programming model. By filtering and routing events to specific subsystems like the automap or status bar, the function ensures responsive and intuitive gameplay. This modular event handling influenced later games, which adopted similar architectures to manage complex input scenarios. The ability to toggle spy mode or pause the game with specific keys demonstrated DOOM's attention to user experience, a principle that remains central to game design."
  - id: "game-loop-ticker"
    line_start: 600
    line_end: 747
    title: "The Heartbeat of DOOM's Game Loop"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_engine"
    image_url: ""
    image_caption: ""
    content: "The G_Ticker function represents the core of DOOM's game loop, processing player commands, updating game state, and handling special actions like saving and pausing. It ensures synchronization between players in multiplayer mode, checks for turbo cheats, and manages consistency checks to prevent desynchronization. The function also invokes subsystems like the automap, intermission screen, and finale sequence based on the current game state. This centralized game loop design became a blueprint for modern game engines, which rely on similar structures to coordinate gameplay mechanics. DOOM's ability to handle multiplayer consistency and special actions within the loop was groundbreaking for its time."
  - id: "player-initialization"
    line_start: 750
    line_end: 770
    title: "How DOOM Prepares Players for Battle"
    wikipedia_url: "https://en.wikipedia.org/wiki/Player_character"
    image_url: ""
    image_caption: ""
    content: "The G_InitPlayer function initializes player structures at the start of the game, setting up saved information and default states. It calls G_PlayerReborn to reset the player's attributes, ensuring a clean slate for gameplay. This function reflects DOOM's modular approach to player management, allowing for easy customization and extension. By separating initialization from gameplay logic, DOOM laid the groundwork for scalable player systems in later games. The concept of rebirth and default states influenced RPGs and multiplayer games, where player initialization is critical to maintaining balance and fairness."
  - id: "level-completion-cleanup"
    line_start: 774
    line_end: 791
    title: "What Happens When You Finish a Level"
    wikipedia_url: "https://en.wikipedia.org/wiki/Level_(video_gaming)"
    image_url: ""
    image_caption: ""
    content: "The G_PlayerFinishLevel function resets player attributes upon completing a level, clearing powers, cards, and temporary effects like invisibility and gun flashes. This ensures players start the next level with a consistent baseline, maintaining balance and fairness. The function also cancels palette changes and bonus counts, reflecting DOOM's attention to detail in player state management. This approach influenced later games, which adopted similar cleanup routines to prepare players for new challenges. By resetting attributes, DOOM ensured a smooth transition between levels, enhancing the player's sense of progression and accomplishment."
  - id: "deathmatch-spawn-logic"
    line_start: 891
    line_end: 918
    title: "How DOOM Made Deathmatch Work"
    wikipedia_url: "https://en.wikipedia.org/wiki/Deathmatch"
    image_url: ""
    image_caption: ""
    content: "The `G_DeathMatchSpawnPlayer` function is responsible for spawning players at random deathmatch spots during level load or after a death. It ensures that players are placed in valid locations by checking each spot with the `G_CheckSpot` function. If no suitable spot is found, the player is spawned at their default starting position, even if it risks getting stuck. This logic was critical for the multiplayer deathmatch mode, a groundbreaking feature of DOOM that popularized competitive online gaming. In 1993, multiplayer gaming was still in its infancy, with most games relying on local area networks or direct modem connections. DOOM's deathmatch mode became a cultural phenomenon, inspiring countless imitators and laying the groundwork for modern competitive gaming. The random spawn mechanic added unpredictability and fairness, ensuring players couldn't memorize spawn points for an unfair advantage. This approach influenced later multiplayer games, including Quake and Unreal Tournament, which refined and expanded upon DOOM's deathmatch concepts."
  - id: "player-rebirth-logic"
    line_start: 920
    line_end: 966
    title: "Respawning: A Second Chance in DOOM"
    wikipedia_url: "https://en.wikipedia.org/wiki/Respawn_(gaming)"
    image_url: ""
    image_caption: ""
    content: "The `G_DoReborn` function handles player respawning after death. In single-player mode, it reloads the level from scratch, while in multiplayer deathmatch mode, it spawns the player at a random spot or their default starting position. The function also dissociates the player's corpse from their character object, ensuring clean respawning. This mechanic was essential for maintaining the fast-paced, action-packed gameplay that defined DOOM. In the early 1990s, respawning was a relatively novel concept, as many games ended upon player death. DOOM's approach allowed players to continue playing without interruption, contributing to its addictive gameplay loop. The respawning logic also supported the game's multiplayer mode, ensuring players could rejoin the action quickly. This technique became a staple in first-person shooters, influencing titles like Halo and Call of Duty, where respawning is integral to gameplay."
  - id: "doom-par-times"
    line_start: 969
    line_end: 983
    title: "The Speedrunning Challenge Hidden in DOOM"
    wikipedia_url: "https://doomwiki.org/wiki/Par_time"
    image_url: ""
    image_caption: ""
    content: "The `pars` array defines par times for DOOM levels, setting a benchmark for players to complete each level. These times were a nod to competitive speedrunning, encouraging players to optimize their gameplay and strive for faster completions. In the early 1990s, speedrunning was an emerging phenomenon, with players sharing their best times through word of mouth or printed magazines. DOOM's inclusion of par times helped formalize the concept, providing a built-in challenge for players to beat. This feature inspired a community of speedrunners who analyzed the game's mechanics to achieve record-breaking times. Today, speedrunning is a major part of gaming culture, with dedicated events like Games Done Quick showcasing players' skills. DOOM's par times were an early example of developers recognizing and supporting this competitive spirit."
  - id: "save-load-game-logic"
    line_start: 1191
    line_end: 1267
    title: "How DOOM Saved Your Progress"
    wikipedia_url: "https://en.wikipedia.org/wiki/Save_game"
    image_url: ""
    image_caption: ""
    content: "The `G_LoadGame` and `G_DoLoadGame` functions implement DOOM's save and load game functionality. They handle reading save files, verifying version compatibility, and restoring game state, including player stats, level progress, and world modifications. This system was crucial for allowing players to pause their adventure and resume later, a feature that became standard in gaming. In 1993, save systems varied widely across games, with some relying on passwords or limited save slots. DOOM's approach, using binary save files with version checks, ensured reliability and prevented corrupted saves. The system also supported the game's episodic structure, allowing players to revisit earlier levels without losing progress. This design influenced later games, including Quake and Half-Life, which expanded save functionality to support autosaves and checkpoints."
  - id: "demo-recording-playback"
    line_start: 1526
    line_end: 1545
    title: "The Feature That Let DOOM Share Itself"
    wikipedia_url: "https://doomwiki.org/wiki/Demo"
    image_url: ""
    image_caption: ""
    content: "The `G_RecordDemo` and `G_BeginRecording` functions implement DOOM's demo recording feature, allowing players to capture gameplay and share it with others. These functions initialize recording, store player inputs, and manage memory allocation for demo data. Demo recording was a groundbreaking feature in 1993, providing a way for players to showcase their skills, share strategies, or debug gameplay issues. At the time, sharing gameplay often required physical media or direct observation, making DOOM's demo system a unique innovation. The feature also supported the game's competitive community, enabling players to analyze each other's techniques and improve their performance. Demo recording became a standard feature in id Software's later games, including Quake, and influenced the development of replay systems in modern games like StarCraft and Overwatch."
  - id: "timedemo-performance-tool"
    line_start: 1621
    line_end: 1633
    title: "The Tool That Measured DOOM’s Speed"
    wikipedia_url: "https://en.wikipedia.org/wiki/Benchmark_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `G_TimeDemo` function is a performance benchmarking tool built directly into DOOM. By enabling the `-nodraw` and `-noblit` parameters, it skips rendering and screen updates, focusing solely on the game engine's ability to process gameplay logic. This allows developers to measure the raw speed of the engine without interference from graphical constraints. At the time, performance testing was critical due to the wide variety of hardware configurations in consumer PCs, ranging from high-end 486 processors to slower 386 machines. John Carmack, known for his obsession with optimization, included this feature to ensure DOOM ran smoothly across as many systems as possible. The function sets the game into a special mode (`timingdemo`) where it plays back a demo file (`defdemoname`) while recording timing data. This approach was innovative for its era, providing developers with a practical way to identify bottlenecks and optimize the engine further. The benchmarking tool influenced later game engines, which adopted similar built-in profiling features. Today, performance profiling is a standard practice in game development, with tools like Unity and Unreal Engine offering integrated solutions for measuring frame rates and resource usage. Carmack's foresight in embedding such functionality directly into the game laid the groundwork for modern performance testing methodologies."
  - id: "demo-cleanup-and-looping"
    line_start: 1636
    line_end: 1686
    title: "How DOOM Managed Demo Playback"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_engine"
    image_url: ""
    image_caption: ""
    content: "The `G_CheckDemoStatus` function handles the cleanup and status checks for demo playback in DOOM. This routine is called after a player dies or completes a level during demo playback, ensuring the game transitions smoothly to the next action. It performs several tasks: timing the demo (`timingdemo`), stopping playback (`demoplayback`), resetting game states like `netgame` and `deathmatch`, and advancing to the next demo (`D_AdvanceDemo`). If the demo is being recorded (`demorecording`), it writes the demo data to a file and frees the memory buffer. This meticulous management of demo states reflects Carmack's engineering philosophy of efficiency and precision. In the early 1990s, demos served multiple purposes: they were used for debugging, performance testing, and showcasing gameplay to players. The ability to record and playback demos was a novel feature that allowed developers to test specific scenarios repeatedly without manual input. This function also highlights DOOM's modular design, where different game states are cleanly separated and managed. The demo system influenced later games, particularly in competitive gaming, where replay systems became essential for analyzing matches. Titles like Quake, Counter-Strike, and StarCraft adopted demo recording and playback as standard features, enabling players to review their performance and share gameplay with others. The concept of game state management seen here remains a cornerstone of modern game engine design, ensuring smooth transitions between different modes and activities."

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
// DESCRIPTION:  none
//
//-----------------------------------------------------------------------------


static const char
rcsid[] = "$Id: g_game.c,v 1.8 1997/02/03 22:45:09 b1 Exp $";

#include <string.h>
#include <stdlib.h>

#include "doomdef.h" 
#include "doomstat.h"

#include "z_zone.h"
#include "f_finale.h"
#include "m_argv.h"
#include "m_misc.h"
#include "m_menu.h"
#include "m_random.h"
#include "i_system.h"

#include "p_setup.h"
#include "p_saveg.h"
#include "p_tick.h"

#include "d_main.h"

#include "wi_stuff.h"
#include "hu_stuff.h"
#include "st_stuff.h"
#include "am_map.h"

// Needs access to LFB.
#include "v_video.h"

#include "w_wad.h"

#include "p_local.h" 

#include "s_sound.h"

// Data.
#include "dstrings.h"
#include "sounds.h"

// SKY handling - still the wrong place.
#include "r_data.h"
#include "r_sky.h"



#include "g_game.h"


#define SAVEGAMESIZE	0x2c000
#define SAVESTRINGSIZE	24



boolean	G_CheckDemoStatus (void); 
void	G_ReadDemoTiccmd (ticcmd_t* cmd); 
void	G_WriteDemoTiccmd (ticcmd_t* cmd); 
void	G_PlayerReborn (int player); 
void	G_InitNew (skill_t skill, int episode, int map); 
 
void	G_DoReborn (int playernum); 
 
void	G_DoLoadLevel (void); 
void	G_DoNewGame (void); 
void	G_DoLoadGame (void); 
void	G_DoPlayDemo (void); 
void	G_DoCompleted (void); 
void	G_DoVictory (void); 
void	G_DoWorldDone (void); 
void	G_DoSaveGame (void); 
 
 
gameaction_t    gameaction; 
gamestate_t     gamestate; 
skill_t         gameskill; 
boolean		respawnmonsters;
int             gameepisode; 
int             gamemap; 
 
boolean         paused; 
boolean         sendpause;             	// send a pause event next tic 
boolean         sendsave;             	// send a save event next tic 
boolean         usergame;               // ok to save / end game 
 
boolean         timingdemo;             // if true, exit with report on completion 
boolean         nodrawers;              // for comparative timing purposes 
boolean         noblit;                 // for comparative timing purposes 
int             starttime;          	// for comparative timing purposes  	 
 
boolean         viewactive; 
 
boolean         deathmatch;           	// only if started as net death 
boolean         netgame;                // only true if packets are broadcast 
boolean         playeringame[MAXPLAYERS]; 
player_t        players[MAXPLAYERS]; 
 
int             consoleplayer;          // player taking events and displaying 
int             displayplayer;          // view being displayed 
int             gametic; 
int             levelstarttic;          // gametic at level start 
int             totalkills, totalitems, totalsecret;    // for intermission 
 
char            demoname[32]; 
boolean         demorecording; 
boolean         demoplayback; 
boolean		netdemo; 
byte*		demobuffer;
byte*		demo_p;
byte*		demoend; 
boolean         singledemo;            	// quit after playing a demo from cmdline 
 
boolean         precache = true;        // if true, load all graphics at start 
 
wbstartstruct_t wminfo;               	// parms for world map / intermission 
 
short		consistancy[MAXPLAYERS][BACKUPTICS]; 
 
byte*		savebuffer;
 
 
// 
// controls (have defaults) 
// 
int             key_right;
int		key_left;

int		key_up;
int		key_down; 
int             key_strafeleft;
int		key_straferight; 
int             key_fire;
int		key_use;
int		key_strafe;
int		key_speed; 
 
int             mousebfire; 
int             mousebstrafe; 
int             mousebforward; 
 
int             joybfire; 
int             joybstrafe; 
int             joybuse; 
int             joybspeed; 
 
 
 
#define MAXPLMOVE		(forwardmove[1]) 
 
#define TURBOTHRESHOLD	0x32

fixed_t		forwardmove[2] = {0x19, 0x32}; 
fixed_t		sidemove[2] = {0x18, 0x28}; 
fixed_t		angleturn[3] = {640, 1280, 320};	// + slow turn 

#define SLOWTURNTICS	6 
 
#define NUMKEYS		256 

boolean         gamekeydown[NUMKEYS]; 
int             turnheld;				// for accelerative turning 
 
boolean		mousearray[4]; 
boolean*	mousebuttons = &mousearray[1];		// allow [-1]

// mouse values are used once 
int             mousex;
int		mousey;         

int             dclicktime;
int		dclickstate;
int		dclicks; 
int             dclicktime2;
int		dclickstate2;
int		dclicks2;

// joystick values are repeated 
int             joyxmove;
int		joyymove;
boolean         joyarray[5]; 
boolean*	joybuttons = &joyarray[1];		// allow [-1] 
 
int		savegameslot; 
char		savedescription[32]; 
 
 
#define	BODYQUESIZE	32

mobj_t*		bodyque[BODYQUESIZE]; 
int		bodyqueslot; 
 
void*		statcopy;				// for statistics driver
 
 
 
int G_CmdChecksum (ticcmd_t* cmd) 
{ 
    int		i;
    int		sum = 0; 
	 
    for (i=0 ; i< sizeof(*cmd)/4 - 1 ; i++) 
	sum += ((int *)cmd)[i]; 
		 
    return sum; 
} 
 

//
// G_BuildTiccmd
// Builds a ticcmd from all of the available inputs
// or reads it from the demo buffer. 
// If recording a demo, write it out 
// 
void G_BuildTiccmd (ticcmd_t* cmd) 
{ 
    int		i; 
    boolean	strafe;
    boolean	bstrafe; 
    int		speed;
    int		tspeed; 
    int		forward;
    int		side;
    
    ticcmd_t*	base;

    base = I_BaseTiccmd ();		// empty, or external driver
    memcpy (cmd,base,sizeof(*cmd)); 
	
    cmd->consistancy = 
	consistancy[consoleplayer][maketic%BACKUPTICS]; 

 
    strafe = gamekeydown[key_strafe] || mousebuttons[mousebstrafe] 
	|| joybuttons[joybstrafe]; 
    speed = gamekeydown[key_speed] || joybuttons[joybspeed];
 
    forward = side = 0;
    
    // use two stage accelerative turning
    // on the keyboard and joystick
    if (joyxmove < 0
	|| joyxmove > 0  
	|| gamekeydown[key_right]
	|| gamekeydown[key_left]) 
	turnheld += ticdup; 
    else 
	turnheld = 0; 

    if (turnheld < SLOWTURNTICS) 
	tspeed = 2;             // slow turn 
    else 
	tspeed = speed;
    
    // let movement keys cancel each other out
    if (strafe) 
    { 
	if (gamekeydown[key_right]) 
	{
	    // fprintf(stderr, "strafe right\n");
	    side += sidemove[speed]; 
	}
	if (gamekeydown[key_left]) 
	{
	    //	fprintf(stderr, "strafe left\n");
	    side -= sidemove[speed]; 
	}
	if (joyxmove > 0) 
	    side += sidemove[speed]; 
	if (joyxmove < 0) 
	    side -= sidemove[speed]; 
 
    } 
    else 
    { 
	if (gamekeydown[key_right]) 
	    cmd->angleturn -= angleturn[tspeed]; 
	if (gamekeydown[key_left]) 
	    cmd->angleturn += angleturn[tspeed]; 
	if (joyxmove > 0) 
	    cmd->angleturn -= angleturn[tspeed]; 
	if (joyxmove < 0) 
	    cmd->angleturn += angleturn[tspeed]; 
    } 
 
    if (gamekeydown[key_up]) 
    {
	// fprintf(stderr, "up\n");
	forward += forwardmove[speed]; 
    }
    if (gamekeydown[key_down]) 
    {
	// fprintf(stderr, "down\n");
	forward -= forwardmove[speed]; 
    }
    if (joyymove < 0) 
	forward += forwardmove[speed]; 
    if (joyymove > 0) 
	forward -= forwardmove[speed]; 
    if (gamekeydown[key_straferight]) 
	side += sidemove[speed]; 
    if (gamekeydown[key_strafeleft]) 
	side -= sidemove[speed];
    
    // buttons
    cmd->chatchar = HU_dequeueChatChar(); 
 
    if (gamekeydown[key_fire] || mousebuttons[mousebfire] 
	|| joybuttons[joybfire]) 
	cmd->buttons |= BT_ATTACK; 
 
    if (gamekeydown[key_use] || joybuttons[joybuse] ) 
    { 
	cmd->buttons |= BT_USE;
	// clear double clicks if hit use button 
	dclicks = 0;                   
    } 

    // chainsaw overrides 
    for (i=0 ; i<NUMWEAPONS-1 ; i++)        
	if (gamekeydown['1'+i]) 
	{ 
	    cmd->buttons |= BT_CHANGE; 
	    cmd->buttons |= i<<BT_WEAPONSHIFT; 
	    break; 
	}
    
    // mouse
    if (mousebuttons[mousebforward]) 
	forward += forwardmove[speed];
    
    // forward double click
    if (mousebuttons[mousebforward] != dclickstate && dclicktime > 1 ) 
    { 
	dclickstate = mousebuttons[mousebforward]; 
	if (dclickstate) 
	    dclicks++; 
	if (dclicks == 2) 
	{ 
	    cmd->buttons |= BT_USE; 
	    dclicks = 0; 
	} 
	else 
	    dclicktime = 0; 
    } 
    else 
    { 
	dclicktime += ticdup; 
	if (dclicktime > 20) 
	{ 
	    dclicks = 0; 
	    dclickstate = 0; 
	} 
    }
    
    // strafe double click
    bstrafe =
	mousebuttons[mousebstrafe] 
	|| joybuttons[joybstrafe]; 
    if (bstrafe != dclickstate2 && dclicktime2 > 1 ) 
    { 
	dclickstate2 = bstrafe; 
	if (dclickstate2) 
	    dclicks2++; 
	if (dclicks2 == 2) 
	{ 
	    cmd->buttons |= BT_USE; 
	    dclicks2 = 0; 
	} 
	else 
	    dclicktime2 = 0; 
    } 
    else 
    { 
	dclicktime2 += ticdup; 
	if (dclicktime2 > 20) 
	{ 
	    dclicks2 = 0; 
	    dclickstate2 = 0; 
	} 
    } 
 
    forward += mousey; 
    if (strafe) 
	side += mousex*2; 
    else 
	cmd->angleturn -= mousex*0x8; 

    mousex = mousey = 0; 
	 
    if (forward > MAXPLMOVE) 
	forward = MAXPLMOVE; 
    else if (forward < -MAXPLMOVE) 
	forward = -MAXPLMOVE; 
    if (side > MAXPLMOVE) 
	side = MAXPLMOVE; 
    else if (side < -MAXPLMOVE) 
	side = -MAXPLMOVE; 
 
    cmd->forwardmove += forward; 
    cmd->sidemove += side;
    
    // special buttons
    if (sendpause) 
    { 
	sendpause = false; 
	cmd->buttons = BT_SPECIAL | BTS_PAUSE; 
    } 
 
    if (sendsave) 
    { 
	sendsave = false; 
	cmd->buttons = BT_SPECIAL | BTS_SAVEGAME | (savegameslot<<BTS_SAVESHIFT); 
    } 
} 
 

//
// G_DoLoadLevel 
//
extern  gamestate_t     wipegamestate; 
 
void G_DoLoadLevel (void) 
{ 
    int             i; 

    // Set the sky map.
    // First thing, we have a dummy sky texture name,
    //  a flat. The data is in the WAD only because
    //  we look for an actual index, instead of simply
    //  setting one.
    skyflatnum = R_FlatNumForName ( SKYFLATNAME );

    // DOOM determines the sky texture to be used
    // depending on the current episode, and the game version.
    if ( (gamemode == commercial)
	 || ( gamemode == pack_tnt )
	 || ( gamemode == pack_plut ) )
    {
	skytexture = R_TextureNumForName ("SKY3");
	if (gamemap < 12)
	    skytexture = R_TextureNumForName ("SKY1");
	else
	    if (gamemap < 21)
		skytexture = R_TextureNumForName ("SKY2");
    }

    levelstarttic = gametic;        // for time calculation
    
    if (wipegamestate == GS_LEVEL) 
	wipegamestate = -1;             // force a wipe 

    gamestate = GS_LEVEL; 

    for (i=0 ; i<MAXPLAYERS ; i++) 
    { 
	if (playeringame[i] && players[i].playerstate == PST_DEAD) 
	    players[i].playerstate = PST_REBORN; 
	memset (players[i].frags,0,sizeof(players[i].frags)); 
    } 
		 
    P_SetupLevel (gameepisode, gamemap, 0, gameskill);    
    displayplayer = consoleplayer;		// view the guy you are playing    
    starttime = I_GetTime (); 
    gameaction = ga_nothing; 
    Z_CheckHeap ();
    
    // clear cmd building stuff
    memset (gamekeydown, 0, sizeof(gamekeydown)); 
    joyxmove = joyymove = 0; 
    mousex = mousey = 0; 
    sendpause = sendsave = paused = false; 
    memset (mousebuttons, 0, sizeof(mousebuttons)); 
    memset (joybuttons, 0, sizeof(joybuttons)); 
} 
 
 
//
// G_Responder  
// Get info needed to make ticcmd_ts for the players.
// 
boolean G_Responder (event_t* ev) 
{ 
    // allow spy mode changes even during the demo
    if (gamestate == GS_LEVEL && ev->type == ev_keydown 
	&& ev->data1 == KEY_F12 && (singledemo || !deathmatch) )
    {
	// spy mode 
	do 
	{ 
	    displayplayer++; 
	    if (displayplayer == MAXPLAYERS) 
		displayplayer = 0; 
	} while (!playeringame[displayplayer] && displayplayer != consoleplayer); 
	return true; 
    }
    
    // any other key pops up menu if in demos
    if (gameaction == ga_nothing && !singledemo && 
	(demoplayback || gamestate == GS_DEMOSCREEN) 
	) 
    { 
	if (ev->type == ev_keydown ||  
	    (ev->type == ev_mouse && ev->data1) || 
	    (ev->type == ev_joystick && ev->data1) ) 
	{ 
	    M_StartControlPanel (); 
	    return true; 
	} 
	return false; 
    } 
 
    if (gamestate == GS_LEVEL) 
    { 
#if 0 
	if (devparm && ev->type == ev_keydown && ev->data1 == ';') 
	{ 
	    G_DeathMatchSpawnPlayer (0); 
	    return true; 
	} 
#endif 
	if (HU_Responder (ev)) 
	    return true;	// chat ate the event 
	if (ST_Responder (ev)) 
	    return true;	// status window ate it 
	if (AM_Responder (ev)) 
	    return true;	// automap ate it 
    } 
	 
    if (gamestate == GS_FINALE) 
    { 
	if (F_Responder (ev)) 
	    return true;	// finale ate the event 
    } 
	 
    switch (ev->type) 
    { 
      case ev_keydown: 
	if (ev->data1 == KEY_PAUSE) 
	{ 
	    sendpause = true; 
	    return true; 
	} 
	if (ev->data1 <NUMKEYS) 
	    gamekeydown[ev->data1] = true; 
	return true;    // eat key down events 
 
      case ev_keyup: 
	if (ev->data1 <NUMKEYS) 
	    gamekeydown[ev->data1] = false; 
	return false;   // always let key up events filter down 
		 
      case ev_mouse: 
	mousebuttons[0] = ev->data1 & 1; 
	mousebuttons[1] = ev->data1 & 2; 
	mousebuttons[2] = ev->data1 & 4; 
	mousex = ev->data2*(mouseSensitivity+5)/10; 
	mousey = ev->data3*(mouseSensitivity+5)/10; 
	return true;    // eat events 
 
      case ev_joystick: 
	joybuttons[0] = ev->data1 & 1; 
	joybuttons[1] = ev->data1 & 2; 
	joybuttons[2] = ev->data1 & 4; 
	joybuttons[3] = ev->data1 & 8; 
	joyxmove = ev->data2; 
	joyymove = ev->data3; 
	return true;    // eat events 
 
      default: 
	break; 
    } 
 
    return false; 
} 
 
 
 
//
// G_Ticker
// Make ticcmd_ts for the players.
//
void G_Ticker (void) 
{ 
    int		i;
    int		buf; 
    ticcmd_t*	cmd;
    
    // do player reborns if needed
    for (i=0 ; i<MAXPLAYERS ; i++) 
	if (playeringame[i] && players[i].playerstate == PST_REBORN) 
	    G_DoReborn (i);
    
    // do things to change the game state
    while (gameaction != ga_nothing) 
    { 
	switch (gameaction) 
	{ 
	  case ga_loadlevel: 
	    G_DoLoadLevel (); 
	    break; 
	  case ga_newgame: 
	    G_DoNewGame (); 
	    break; 
	  case ga_loadgame: 
	    G_DoLoadGame (); 
	    break; 
	  case ga_savegame: 
	    G_DoSaveGame (); 
	    break; 
	  case ga_playdemo: 
	    G_DoPlayDemo (); 
	    break; 
	  case ga_completed: 
	    G_DoCompleted (); 
	    break; 
	  case ga_victory: 
	    F_StartFinale (); 
	    break; 
	  case ga_worlddone: 
	    G_DoWorldDone (); 
	    break; 
	  case ga_screenshot: 
	    M_ScreenShot (); 
	    gameaction = ga_nothing; 
	    break; 
	  case ga_nothing: 
	    break; 
	} 
    }
    
    // get commands, check consistancy,
    // and build new consistancy check
    buf = (gametic/ticdup)%BACKUPTICS; 
 
    for (i=0 ; i<MAXPLAYERS ; i++)
    {
	if (playeringame[i]) 
	{ 
	    cmd = &players[i].cmd; 
 
	    memcpy (cmd, &netcmds[i][buf], sizeof(ticcmd_t)); 
 
	    if (demoplayback) 
		G_ReadDemoTiccmd (cmd); 
	    if (demorecording) 
		G_WriteDemoTiccmd (cmd);
	    
	    // check for turbo cheats
	    if (cmd->forwardmove > TURBOTHRESHOLD 
		&& !(gametic&31) && ((gametic>>5)&3) == i )
	    {
		static char turbomessage[80];
		extern char *player_names[4];
		sprintf (turbomessage, "%s is turbo!",player_names[i]);
		players[consoleplayer].message = turbomessage;
	    }
			
	    if (netgame && !netdemo && !(gametic%ticdup) ) 
	    { 
		if (gametic > BACKUPTICS 
		    && consistancy[i][buf] != cmd->consistancy) 
		{ 
		    I_Error ("consistency failure (%i should be %i)",
			     cmd->consistancy, consistancy[i][buf]); 
		} 
		if (players[i].mo) 
		    consistancy[i][buf] = players[i].mo->x; 
		else 
		    consistancy[i][buf] = rndindex; 
	    } 
	}
    }
    
    // check for special buttons
    for (i=0 ; i<MAXPLAYERS ; i++)
    {
	if (playeringame[i]) 
	{ 
	    if (players[i].cmd.buttons & BT_SPECIAL) 
	    { 
		switch (players[i].cmd.buttons & BT_SPECIALMASK) 
		{ 
		  case BTS_PAUSE: 
		    paused ^= 1; 
		    if (paused) 
			S_PauseSound (); 
		    else 
			S_ResumeSound (); 
		    break; 
					 
		  case BTS_SAVEGAME: 
		    if (!savedescription[0]) 
			strcpy (savedescription, "NET GAME"); 
		    savegameslot =  
			(players[i].cmd.buttons & BTS_SAVEMASK)>>BTS_SAVESHIFT; 
		    gameaction = ga_savegame; 
		    break; 
		} 
	    } 
	}
    }
    
    // do main actions
    switch (gamestate) 
    { 
      case GS_LEVEL: 
	P_Ticker (); 
	ST_Ticker (); 
	AM_Ticker (); 
	HU_Ticker ();            
	break; 
	 
      case GS_INTERMISSION: 
	WI_Ticker (); 
	break; 
			 
      case GS_FINALE: 
	F_Ticker (); 
	break; 
 
      case GS_DEMOSCREEN: 
	D_PageTicker (); 
	break; 
    }        
} 
 
 
//
// PLAYER STRUCTURE FUNCTIONS
// also see P_SpawnPlayer in P_Things
//

//
// G_InitPlayer 
// Called at the start.
// Called by the game initialization functions.
//
void G_InitPlayer (int player) 
{ 
    player_t*	p; 
 
    // set up the saved info         
    p = &players[player]; 
	 
    // clear everything else to defaults 
    G_PlayerReborn (player); 
	 
} 
 
 

//
// G_PlayerFinishLevel
// Can when a player completes a level.
//
void G_PlayerFinishLevel (int player) 
{ 
    player_t*	p; 
	 
    p = &players[player]; 
	 
    memset (p->powers, 0, sizeof (p->powers)); 
    memset (p->cards, 0, sizeof (p->cards)); 
    p->mo->flags &= ~MF_SHADOW;		// cancel invisibility 
    p->extralight = 0;			// cancel gun flashes 
    p->fixedcolormap = 0;		// cancel ir gogles 
    p->damagecount = 0;			// no palette changes 
    p->bonuscount = 0; 
} 
 

//
// G_PlayerReborn
// Called after a player dies 
// almost everything is cleared and initialized 
//
void G_PlayerReborn (int player) 
{ 
    player_t*	p; 
    int		i; 
    int		frags[MAXPLAYERS]; 
    int		killcount;
    int		itemcount;
    int		secretcount; 
	 
    memcpy (frags,players[player].frags,sizeof(frags)); 
    killcount = players[player].killcount; 
    itemcount = players[player].itemcount; 
    secretcount = players[player].secretcount; 
	 
    p = &players[player]; 
    memset (p, 0, sizeof(*p)); 
 
    memcpy (players[player].frags, frags, sizeof(players[player].frags)); 
    players[player].killcount = killcount; 
    players[player].itemcount = itemcount; 
    players[player].secretcount = secretcount; 
 
    p->usedown = p->attackdown = true;	// don't do anything immediately 
    p->playerstate = PST_LIVE;       
    p->health = MAXHEALTH; 
    p->readyweapon = p->pendingweapon = wp_pistol; 
    p->weaponowned[wp_fist] = true; 
    p->weaponowned[wp_pistol] = true; 
    p->ammo[am_clip] = 50; 
	 
    for (i=0 ; i<NUMAMMO ; i++) 
	p->maxammo[i] = maxammo[i]; 
		 
}

//
// G_CheckSpot  
// Returns false if the player cannot be respawned
// at the given mapthing_t spot  
// because something is occupying it 
//
void P_SpawnPlayer (mapthing_t* mthing); 
 
boolean
G_CheckSpot
( int		playernum,
  mapthing_t*	mthing ) 
{ 
    fixed_t		x;
    fixed_t		y; 
    subsector_t*	ss; 
    unsigned		an; 
    mobj_t*		mo; 
    int			i;
	
    if (!players[playernum].mo)
    {
	// first spawn of level, before corpses
	for (i=0 ; i<playernum ; i++)
	    if (players[i].mo->x == mthing->x << FRACBITS
		&& players[i].mo->y == mthing->y << FRACBITS)
		return false;	
	return true;
    }
		
    x = mthing->x << FRACBITS; 
    y = mthing->y << FRACBITS; 
	 
    if (!P_CheckPosition (players[playernum].mo, x, y) ) 
	return false; 
 
    // flush an old corpse if needed 
    if (bodyqueslot >= BODYQUESIZE) 
	P_RemoveMobj (bodyque[bodyqueslot%BODYQUESIZE]); 
    bodyque[bodyqueslot%BODYQUESIZE] = players[playernum].mo; 
    bodyqueslot++; 
	
    // spawn a teleport fog 
    ss = R_PointInSubsector (x,y); 
    an = ( ANG45 * (mthing->angle/45) ) >> ANGLETOFINESHIFT; 
 
    mo = P_SpawnMobj (x+20*finecosine[an], y+20*finesine[an] 
		      , ss->sector->floorheight 
		      , MT_TFOG); 
	 
    if (players[consoleplayer].viewz != 1) 
	S_StartSound (mo, sfx_telept);	// don't start sound on first frame 
 
    return true; 
} 


//
// G_DeathMatchSpawnPlayer 
// Spawns a player at one of the random death match spots 
// called at level load and each death 
//
void G_DeathMatchSpawnPlayer (int playernum) 
{ 
    int             i,j; 
    int				selections; 
	 
    selections = deathmatch_p - deathmatchstarts; 
    if (selections < 4) 
	I_Error ("Only %i deathmatch spots, 4 required", selections); 
 
    for (j=0 ; j<20 ; j++) 
    { 
	i = P_Random() % selections; 
	if (G_CheckSpot (playernum, &deathmatchstarts[i]) ) 
	{ 
	    deathmatchstarts[i].type = playernum+1; 
	    P_SpawnPlayer (&deathmatchstarts[i]); 
	    return; 
	} 
    } 
 
    // no good spot, so the player will probably get stuck 
    P_SpawnPlayer (&playerstarts[playernum]); 
} 

//
// G_DoReborn 
// 
void G_DoReborn (int playernum) 
{ 
    int                             i; 
	 
    if (!netgame)
    {
	// reload the level from scratch
	gameaction = ga_loadlevel;  
    }
    else 
    {
	// respawn at the start

	// first dissasociate the corpse 
	players[playernum].mo->player = NULL;   
		 
	// spawn at random spot if in death match 
	if (deathmatch) 
	{ 
	    G_DeathMatchSpawnPlayer (playernum); 
	    return; 
	} 
		 
	if (G_CheckSpot (playernum, &playerstarts[playernum]) ) 
	{ 
	    P_SpawnPlayer (&playerstarts[playernum]); 
	    return; 
	}
	
	// try to spawn at one of the other players spots 
	for (i=0 ; i<MAXPLAYERS ; i++)
	{
	    if (G_CheckSpot (playernum, &playerstarts[i]) ) 
	    { 
		playerstarts[i].type = playernum+1;	// fake as other player 
		P_SpawnPlayer (&playerstarts[i]); 
		playerstarts[i].type = i+1;		// restore 
		return; 
	    }	    
	    // he's going to be inside something.  Too bad.
	}
	P_SpawnPlayer (&playerstarts[playernum]); 
    } 
} 
 
 
void G_ScreenShot (void) 
{ 
    gameaction = ga_screenshot; 
} 
 


// DOOM Par Times
int pars[4][10] = 
{ 
    {0}, 
    {0,30,75,120,90,165,180,180,30,165}, 
    {0,90,90,90,120,90,360,240,30,170}, 
    {0,90,45,90,150,90,90,165,30,135} 
}; 

// DOOM II Par Times
int cpars[32] =
{
    30,90,120,120,90,150,120,120,270,90,	//  1-10
    210,150,150,150,210,150,420,150,210,150,	// 11-20
    240,150,180,150,150,300,330,420,300,180,	// 21-30
    120,30					// 31-32
};
 

//
// G_DoCompleted 
//
boolean		secretexit; 
extern char*	pagename; 
 
void G_ExitLevel (void) 
{ 
    secretexit = false; 
    gameaction = ga_completed; 
} 

// Here's for the german edition.
void G_SecretExitLevel (void) 
{ 
    // IF NO WOLF3D LEVELS, NO SECRET EXIT!
    if ( (gamemode == commercial)
      && (W_CheckNumForName("map31")<0))
	secretexit = false;
    else
	secretexit = true; 
    gameaction = ga_completed; 
} 
 
void G_DoCompleted (void) 
{ 
    int             i; 
	 
    gameaction = ga_nothing; 
 
    for (i=0 ; i<MAXPLAYERS ; i++) 
	if (playeringame[i]) 
	    G_PlayerFinishLevel (i);        // take away cards and stuff 
	 
    if (automapactive) 
	AM_Stop (); 
	
    if ( gamemode != commercial)
	switch(gamemap)
	{
	  case 8:
	    gameaction = ga_victory;
	    return;
	  case 9: 
	    for (i=0 ; i<MAXPLAYERS ; i++) 
		players[i].didsecret = true; 
	    break;
	}
		
//#if 0  Hmmm - why?
    if ( (gamemap == 8)
	 && (gamemode != commercial) ) 
    {
	// victory 
	gameaction = ga_victory; 
	return; 
    } 
	 
    if ( (gamemap == 9)
	 && (gamemode != commercial) ) 
    {
	// exit secret level 
	for (i=0 ; i<MAXPLAYERS ; i++) 
	    players[i].didsecret = true; 
    } 
//#endif
    
	 
    wminfo.didsecret = players[consoleplayer].didsecret; 
    wminfo.epsd = gameepisode -1; 
    wminfo.last = gamemap -1;
    
    // wminfo.next is 0 biased, unlike gamemap
    if ( gamemode == commercial)
    {
	if (secretexit)
	    switch(gamemap)
	    {
	      case 15: wminfo.next = 30; break;
	      case 31: wminfo.next = 31; break;
	    }
	else
	    switch(gamemap)
	    {
	      case 31:
	      case 32: wminfo.next = 15; break;
	      default: wminfo.next = gamemap;
	    }
    }
    else
    {
	if (secretexit) 
	    wminfo.next = 8; 	// go to secret level 
	else if (gamemap == 9) 
	{
	    // returning from secret level 
	    switch (gameepisode) 
	    { 
	      case 1: 
		wminfo.next = 3; 
		break; 
	      case 2: 
		wminfo.next = 5; 
		break; 
	      case 3: 
		wminfo.next = 6; 
		break; 
	      case 4:
		wminfo.next = 2;
		break;
	    }                
	} 
	else 
	    wminfo.next = gamemap;          // go to next level 
    }
		 
    wminfo.maxkills = totalkills; 
    wminfo.maxitems = totalitems; 
    wminfo.maxsecret = totalsecret; 
    wminfo.maxfrags = 0; 
    if ( gamemode == commercial )
	wminfo.partime = 35*cpars[gamemap-1]; 
    else
	wminfo.partime = 35*pars[gameepisode][gamemap]; 
    wminfo.pnum = consoleplayer; 
 
    for (i=0 ; i<MAXPLAYERS ; i++) 
    { 
	wminfo.plyr[i].in = playeringame[i]; 
	wminfo.plyr[i].skills = players[i].killcount; 
	wminfo.plyr[i].sitems = players[i].itemcount; 
	wminfo.plyr[i].ssecret = players[i].secretcount; 
	wminfo.plyr[i].stime = leveltime; 
	memcpy (wminfo.plyr[i].frags, players[i].frags 
		, sizeof(wminfo.plyr[i].frags)); 
    } 
 
    gamestate = GS_INTERMISSION; 
    viewactive = false; 
    automapactive = false; 
 
    if (statcopy)
	memcpy (statcopy, &wminfo, sizeof(wminfo));
	
    WI_Start (&wminfo); 
} 


//
// G_WorldDone 
//
void G_WorldDone (void) 
{ 
    gameaction = ga_worlddone; 

    if (secretexit) 
	players[consoleplayer].didsecret = true; 

    if ( gamemode == commercial )
    {
	switch (gamemap)
	{
	  case 15:
	  case 31:
	    if (!secretexit)
		break;
	  case 6:
	  case 11:
	  case 20:
	  case 30:
	    F_StartFinale ();
	    break;
	}
    }
} 
 
void G_DoWorldDone (void) 
{        
    gamestate = GS_LEVEL; 
    gamemap = wminfo.next+1; 
    G_DoLoadLevel (); 
    gameaction = ga_nothing; 
    viewactive = true; 
} 
 


//
// G_InitFromSavegame
// Can be called by the startup code or the menu task. 
//
extern boolean setsizeneeded;
void R_ExecuteSetViewSize (void);

char	savename[256];

void G_LoadGame (char* name) 
{ 
    strcpy (savename, name); 
    gameaction = ga_loadgame; 
} 
 
#define VERSIONSIZE		16 


void G_DoLoadGame (void) 
{ 
    int		length; 
    int		i; 
    int		a,b,c; 
    char	vcheck[VERSIONSIZE]; 
	 
    gameaction = ga_nothing; 
	 
    length = M_ReadFile (savename, &savebuffer); 
    save_p = savebuffer + SAVESTRINGSIZE;
    
    // skip the description field 
    memset (vcheck,0,sizeof(vcheck)); 
    sprintf (vcheck,"version %i",VERSION); 
    if (strcmp (save_p, vcheck)) 
	return;				// bad version 
    save_p += VERSIONSIZE; 
			 
    gameskill = *save_p++; 
    gameepisode = *save_p++; 
    gamemap = *save_p++; 
    for (i=0 ; i<MAXPLAYERS ; i++) 
	playeringame[i] = *save_p++; 

    // load a base level 
    G_InitNew (gameskill, gameepisode, gamemap); 
 
    // get the times 
    a = *save_p++; 
    b = *save_p++; 
    c = *save_p++; 
    leveltime = (a<<16) + (b<<8) + c; 
	 
    // dearchive all the modifications
    P_UnArchivePlayers (); 
    P_UnArchiveWorld (); 
    P_UnArchiveThinkers (); 
    P_UnArchiveSpecials (); 
 
    if (*save_p != 0x1d) 
	I_Error ("Bad savegame");
    
    // done 
    Z_Free (savebuffer); 
 
    if (setsizeneeded)
	R_ExecuteSetViewSize ();
    
    // draw the pattern into the back screen
    R_FillBackScreen ();   
} 
 

//
// G_SaveGame
// Called by the menu task.
// Description is a 24 byte text string 
//
void
G_SaveGame
( int	slot,
  char*	description ) 
{ 
    savegameslot = slot; 
    strcpy (savedescription, description); 
    sendsave = true; 
} 
 
void G_DoSaveGame (void) 
{ 
    char	name[100]; 
    char	name2[VERSIONSIZE]; 
    char*	description; 
    int		length; 
    int		i; 
	
    if (M_CheckParm("-cdrom"))
	sprintf(name,"c:\\doomdata\\"SAVEGAMENAME"%d.dsg",savegameslot);
    else
	sprintf (name,SAVEGAMENAME"%d.dsg",savegameslot); 
    description = savedescription; 
	 
    save_p = savebuffer = screens[1]+0x4000; 
	 
    memcpy (save_p, description, SAVESTRINGSIZE); 
    save_p += SAVESTRINGSIZE; 
    memset (name2,0,sizeof(name2)); 
    sprintf (name2,"version %i",VERSION); 
    memcpy (save_p, name2, VERSIONSIZE); 
    save_p += VERSIONSIZE; 
	 
    *save_p++ = gameskill; 
    *save_p++ = gameepisode; 
    *save_p++ = gamemap; 
    for (i=0 ; i<MAXPLAYERS ; i++) 
	*save_p++ = playeringame[i]; 
    *save_p++ = leveltime>>16; 
    *save_p++ = leveltime>>8; 
    *save_p++ = leveltime; 
 
    P_ArchivePlayers (); 
    P_ArchiveWorld (); 
    P_ArchiveThinkers (); 
    P_ArchiveSpecials (); 
	 
    *save_p++ = 0x1d;		// consistancy marker 
	 
    length = save_p - savebuffer; 
    if (length > SAVEGAMESIZE) 
	I_Error ("Savegame buffer overrun"); 
    M_WriteFile (name, savebuffer, length); 
    gameaction = ga_nothing; 
    savedescription[0] = 0;		 
	 
    players[consoleplayer].message = GGSAVED; 

    // draw the pattern into the back screen
    R_FillBackScreen ();	
} 
 

//
// G_InitNew
// Can be called by the startup code or the menu task,
// consoleplayer, displayplayer, playeringame[] should be set. 
//
skill_t	d_skill; 
int     d_episode; 
int     d_map; 
 
void
G_DeferedInitNew
( skill_t	skill,
  int		episode,
  int		map) 
{ 
    d_skill = skill; 
    d_episode = episode; 
    d_map = map; 
    gameaction = ga_newgame; 
} 


void G_DoNewGame (void) 
{
    demoplayback = false; 
    netdemo = false;
    netgame = false;
    deathmatch = false;
    playeringame[1] = playeringame[2] = playeringame[3] = 0;
    respawnparm = false;
    fastparm = false;
    nomonsters = false;
    consoleplayer = 0;
    G_InitNew (d_skill, d_episode, d_map); 
    gameaction = ga_nothing; 
} 

// The sky texture to be used instead of the F_SKY1 dummy.
extern  int	skytexture; 


void
G_InitNew
( skill_t	skill,
  int		episode,
  int		map ) 
{ 
    int             i; 
	 
    if (paused) 
    { 
	paused = false; 
	S_ResumeSound (); 
    } 
	

    if (skill > sk_nightmare) 
	skill = sk_nightmare;


    // This was quite messy with SPECIAL and commented parts.
    // Supposedly hacks to make the latest edition work.
    // It might not work properly.
    if (episode < 1)
      episode = 1; 

    if ( gamemode == retail )
    {
      if (episode > 4)
	episode = 4;
    }
    else if ( gamemode == shareware )
    {
      if (episode > 1) 
	   episode = 1;	// only start episode 1 on shareware
    }  
    else
    {
      if (episode > 3)
	episode = 3;
    }
    

  
    if (map < 1) 
	map = 1;
    
    if ( (map > 9)
	 && ( gamemode != commercial) )
      map = 9; 
		 
    M_ClearRandom (); 
	 
    if (skill == sk_nightmare || respawnparm )
	respawnmonsters = true;
    else
	respawnmonsters = false;
		
    if (fastparm || (skill == sk_nightmare && gameskill != sk_nightmare) )
    { 
	for (i=S_SARG_RUN1 ; i<=S_SARG_PAIN2 ; i++) 
	    states[i].tics >>= 1; 
	mobjinfo[MT_BRUISERSHOT].speed = 20*FRACUNIT; 
	mobjinfo[MT_HEADSHOT].speed = 20*FRACUNIT; 
	mobjinfo[MT_TROOPSHOT].speed = 20*FRACUNIT; 
    } 
    else if (skill != sk_nightmare && gameskill == sk_nightmare) 
    { 
	for (i=S_SARG_RUN1 ; i<=S_SARG_PAIN2 ; i++) 
	    states[i].tics <<= 1; 
	mobjinfo[MT_BRUISERSHOT].speed = 15*FRACUNIT; 
	mobjinfo[MT_HEADSHOT].speed = 10*FRACUNIT; 
	mobjinfo[MT_TROOPSHOT].speed = 10*FRACUNIT; 
    } 
	 
			 
    // force players to be initialized upon first level load         
    for (i=0 ; i<MAXPLAYERS ; i++) 
	players[i].playerstate = PST_REBORN; 
 
    usergame = true;                // will be set false if a demo 
    paused = false; 
    demoplayback = false; 
    automapactive = false; 
    viewactive = true; 
    gameepisode = episode; 
    gamemap = map; 
    gameskill = skill; 
 
    viewactive = true;
    
    // set the sky map for the episode
    if ( gamemode == commercial)
    {
	skytexture = R_TextureNumForName ("SKY3");
	if (gamemap < 12)
	    skytexture = R_TextureNumForName ("SKY1");
	else
	    if (gamemap < 21)
		skytexture = R_TextureNumForName ("SKY2");
    }
    else
	switch (episode) 
	{ 
	  case 1: 
	    skytexture = R_TextureNumForName ("SKY1"); 
	    break; 
	  case 2: 
	    skytexture = R_TextureNumForName ("SKY2"); 
	    break; 
	  case 3: 
	    skytexture = R_TextureNumForName ("SKY3"); 
	    break; 
	  case 4:	// Special Edition sky
	    skytexture = R_TextureNumForName ("SKY4");
	    break;
	} 
 
    G_DoLoadLevel (); 
} 
 

//
// DEMO RECORDING 
// 
#define DEMOMARKER		0x80


void G_ReadDemoTiccmd (ticcmd_t* cmd) 
{ 
    if (*demo_p == DEMOMARKER) 
    {
	// end of demo data stream 
	G_CheckDemoStatus (); 
	return; 
    } 
    cmd->forwardmove = ((signed char)*demo_p++); 
    cmd->sidemove = ((signed char)*demo_p++); 
    cmd->angleturn = ((unsigned char)*demo_p++)<<8; 
    cmd->buttons = (unsigned char)*demo_p++; 
} 


void G_WriteDemoTiccmd (ticcmd_t* cmd) 
{ 
    if (gamekeydown['q'])           // press q to end demo recording 
	G_CheckDemoStatus (); 
    *demo_p++ = cmd->forwardmove; 
    *demo_p++ = cmd->sidemove; 
    *demo_p++ = (cmd->angleturn+128)>>8; 
    *demo_p++ = cmd->buttons; 
    demo_p -= 4; 
    if (demo_p > demoend - 16)
    {
	// no more space 
	G_CheckDemoStatus (); 
	return; 
    } 
	
    G_ReadDemoTiccmd (cmd);         // make SURE it is exactly the same 
} 
 
 
 
//
// G_RecordDemo 
// 
void G_RecordDemo (char* name) 
{ 
    int             i; 
    int				maxsize;
	
    usergame = false; 
    strcpy (demoname, name); 
    strcat (demoname, ".lmp"); 
    maxsize = 0x20000;
    i = M_CheckParm ("-maxdemo");
    if (i && i<myargc-1)
	maxsize = atoi(myargv[i+1])*1024;
    demobuffer = Z_Malloc (maxsize,PU_STATIC,NULL); 
    demoend = demobuffer + maxsize;
	
    demorecording = true; 
} 
 
 
void G_BeginRecording (void) 
{ 
    int             i; 
		
    demo_p = demobuffer;
	
    *demo_p++ = VERSION;
    *demo_p++ = gameskill; 
    *demo_p++ = gameepisode; 
    *demo_p++ = gamemap; 
    *demo_p++ = deathmatch; 
    *demo_p++ = respawnparm;
    *demo_p++ = fastparm;
    *demo_p++ = nomonsters;
    *demo_p++ = consoleplayer;
	 
    for (i=0 ; i<MAXPLAYERS ; i++) 
	*demo_p++ = playeringame[i]; 		 
} 
 

//
// G_PlayDemo 
//

char*	defdemoname; 
 
void G_DeferedPlayDemo (char* name) 
{ 
    defdemoname = name; 
    gameaction = ga_playdemo; 
} 
 
void G_DoPlayDemo (void) 
{ 
    skill_t skill; 
    int             i, episode, map; 
	 
    gameaction = ga_nothing; 
    demobuffer = demo_p = W_CacheLumpName (defdemoname, PU_STATIC); 
    if ( *demo_p++ != VERSION)
    {
      fprintf( stderr, "Demo is from a different game version!\n");
      gameaction = ga_nothing;
      return;
    }
    
    skill = *demo_p++; 
    episode = *demo_p++; 
    map = *demo_p++; 
    deathmatch = *demo_p++;
    respawnparm = *demo_p++;
    fastparm = *demo_p++;
    nomonsters = *demo_p++;
    consoleplayer = *demo_p++;
	
    for (i=0 ; i<MAXPLAYERS ; i++) 
	playeringame[i] = *demo_p++; 
    if (playeringame[1]) 
    { 
	netgame = true; 
	netdemo = true; 
    }

    // don't spend a lot of time in loadlevel 
    precache = false;
    G_InitNew (skill, episode, map); 
    precache = true; 

    usergame = false; 
    demoplayback = true; 
} 

//
// G_TimeDemo 
//
void G_TimeDemo (char* name) 
{ 	 
    nodrawers = M_CheckParm ("-nodraw"); 
    noblit = M_CheckParm ("-noblit"); 
    timingdemo = true; 
    singletics = true; 

    defdemoname = name; 
    gameaction = ga_playdemo; 
} 
 
 
/* 
=================== 
= 
= G_CheckDemoStatus 
= 
= Called after a death or level completion to allow demos to be cleaned up 
= Returns true if a new demo loop action will take place 
=================== 
*/ 
 
boolean G_CheckDemoStatus (void) 
{ 
    int             endtime; 
	 
    if (timingdemo) 
    { 
	endtime = I_GetTime (); 
	I_Error ("timed %i gametics in %i realtics",gametic 
		 , endtime-starttime); 
    } 
	 
    if (demoplayback) 
    { 
	if (singledemo) 
	    I_Quit (); 
			 
	Z_ChangeTag (demobuffer, PU_CACHE); 
	demoplayback = false; 
	netdemo = false;
	netgame = false;
	deathmatch = false;
	playeringame[1] = playeringame[2] = playeringame[3] = 0;
	respawnparm = false;
	fastparm = false;
	nomonsters = false;
	consoleplayer = 0;
	D_AdvanceDemo (); 
	return true; 
    } 
 
    if (demorecording) 
    { 
	*demo_p++ = DEMOMARKER; 
	M_WriteFile (demoname, demobuffer, demo_p - demobuffer); 
	Z_Free (demobuffer); 
	demorecording = false; 
	I_Error ("Demo %s recorded",demoname); 
    } 
	 
    return false; 
} 
 
 
 
```