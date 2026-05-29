---
title: "d_main.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/d_main.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/d_main.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "d-main-c"
order: 1
description: "Central file for DOOM's engine initialization and gameplay management, showcasing techniques that pushed 1993 hardware to its limits."

summary:
  - point: "Event handling system for asynchronous user inputs"
    link: "https://en.wikipedia.org/wiki/Event-driven_programming"
    link_label: "Event-driven programming"
  - point: "Dynamic display updates with screen wipes and buffered rendering"
    link: "https://en.wikipedia.org/wiki/Double_buffering"
    link_label: "Double buffering"
  - point: "Demo sequence management for seamless transitions"
    link: "https://doomwiki.org/wiki/Demo"
    link_label: "DOOM demo system"
  - point: "Version identification based on WAD file availability"
    link: "https://doomwiki.org/wiki/WAD"
    link_label: "WAD file format"
  - point: "Response file parsing for extended command-line arguments"
    link: "https://en.wikipedia.org/wiki/Command-line_interface"
    link_label: "Command-line interface"

enhancements:
  - id: "event-handling-with-d-postevent"
    line_start: 145
    line_end: 152
    title: "Event Handling with D_PostEvent"
    wikipedia_url: "https://en.wikipedia.org/wiki/Event-driven_programming"
    image_url: ""
    image_caption: ""
    content: "The `D_PostEvent` function is responsible for queuing user input events into a circular buffer. These events include key presses, mouse movements, and other asynchronous inputs from the player. The function ensures that the game can process inputs efficiently without losing any data due to buffer overflow, using a wrap-around mechanism (`MAXEVENTS-1`). In 1993, this approach was critical for maintaining responsive gameplay on hardware with limited processing power. The circular buffer design was a common technique in real-time systems, allowing DOOM to handle multiple inputs while avoiding latency. This event-driven architecture influenced later game engines, including Quake, which expanded on the idea with more sophisticated input handling mechanisms."
  - id: "processing-inputs-with-d-processevents"
    line_start: 156
    line_end: 176
    title: "Processing Inputs with D_ProcessEvents"
    wikipedia_url: "https://en.wikipedia.org/wiki/Event-driven_programming"
    image_url: ""
    image_caption: ""
    content: "The `D_ProcessEvents` function processes all queued events by passing them through responder functions like `M_Responder` (menu handling) and `G_Responder` (game logic). This modular approach allows different parts of the game to handle inputs independently, a design that was ahead of its time. The function also includes a conditional check to ignore inputs during demo recording, ensuring the integrity of pre-recorded sequences. This separation of concerns—handling events, processing logic, and rendering—became a hallmark of modern game engines. The modularity seen here influenced later engines like Unreal Engine, which adopted similar principles for input handling and event propagation."
  - id: "dynamic-display-updates-d-display"
    line_start: 192
    line_end: 344
    title: "Dynamic Display Updates in D_Display"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The `D_Display` function manages screen updates, including transitions between game states and rendering the player's view. It incorporates techniques like screen wipes (`wipe_StartScreen`) and buffered drawing (`I_UpdateNoBlit`) to ensure smooth visual transitions. These methods were essential for creating an immersive experience on hardware with limited graphical capabilities. The use of double buffering minimized flickering and tearing, a common issue in early PC games. This function also handles special cases like drawing the pause screen and updating the border when switching between fullscreen and windowed modes. The visual polish achieved here set a new standard for game graphics, influencing titles like Duke Nukem 3D and later 3D engines that prioritized seamless rendering."
  - id: "game-loop-d-doomloop"
    line_start: 353
    line_end: 406
    title: "The Endless Game Loop in D_DoomLoop"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_engine"
    image_url: ""
    image_caption: ""
    content: "The `D_DoomLoop` function is the heart of DOOM's runtime, executing an infinite loop that drives the game. It synchronizes input processing (`I_StartFrame`), game logic updates (`G_Ticker`), and rendering (`D_Display`). This loop ensures that the game remains responsive and visually consistent, even under heavy computational loads. The function also includes debugging features, such as writing to a debug file, which were invaluable during development. The concept of a main game loop became a cornerstone of game engine design, influencing virtually every engine that followed, including Unity and Godot. DOOM's implementation demonstrated how to balance performance and complexity, a lesson that remains relevant in modern game development."
  - id: "demo-management-d-doadvancedemo"
    line_start: 449
    line_end: 517
    title: "Seamless Demo Management in D_DoAdvanceDemo"
    wikipedia_url: "https://doomwiki.org/wiki/Demo"
    image_url: ""
    image_caption: ""
    content: "The `D_DoAdvanceDemo` function cycles through demo sequences, transitioning between gameplay demos and title screens. It adjusts game state variables like `gamestate` and `demosequence` to ensure smooth transitions. This feature was crucial for showcasing DOOM's capabilities in shareware versions, enticing players to purchase the full game. The function also handles music changes (`S_StartMusic`) and screen updates (`D_PageDrawer`), creating a polished presentation. Demo systems like this became standard in game development, serving as both marketing tools and technical showcases. DOOM's demo management influenced later games, including Quake and Half-Life, which used similar systems to highlight their features."
  - id: "wad-file-detection-identifyversion"
    line_start: 556
    line_end: 716
    title: "WAD File Detection in IdentifyVersion"
    wikipedia_url: "https://doomwiki.org/wiki/WAD"
    image_url: ""
    image_caption: ""
    content: "The `IdentifyVersion` function determines the game's mode (shareware, registered, retail, or commercial) based on the availability of specific WAD files. It uses file access checks (`access`) to locate these files and sets global variables accordingly. This mechanism allowed DOOM to adapt its features dynamically, depending on the user's version. The function also includes humorous comments, such as \"C'est ridicule!\" when handling the French version, reflecting the developers' personality. This approach to version management influenced later games that needed to support multiple editions or expansions, such as StarCraft and The Sims. The modularity of WAD files also laid the groundwork for user-generated content and modding communities."
  - id: "response-file-parsing-findresponsefile"
    line_start: 718
    line_end: 789
    title: "Response File Parsing in FindResponseFile"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The `FindResponseFile` function parses response files, which are text files containing additional command-line arguments. This feature allowed users to specify complex configurations without typing lengthy commands manually. The function reads the file into memory, splits it into individual arguments, and appends them to the existing command-line arguments. This capability was particularly useful for debugging and customizing gameplay. Response files were an innovative solution for managing command-line options, influencing later tools and engines that supported similar features. For example, Unreal Engine and Source Engine adopted comparable mechanisms for handling configuration files and startup parameters."
  - id: "command-line-parameters-flexibility"
    line_start: 792
    line_end: 1139
    title: "Command-Line Arguments, WAD Loading, and Demo Recording"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The D_DoomMain startup routine processes a wide range of command-line arguments that shaped how DOOM was played and modified. Gameplay flags like -nomonsters, -turbo, and -deathmatch let players and server operators tailor sessions without touching the source code, an unusually flexible design for a 1993 retail game. The -file parameter extended this openness to content: it dynamically loaded custom WAD files at startup, which gave rise to the sprawling DOOM modding community and landmark total conversions like Aliens TC and Batman DOOM. Equally influential was the demo system, where -record and -playdemo captured and replayed complete sessions as compact input logs rather than video, making competitive runs easy to share and analyze on the dial-up networks of the era. Together these mechanisms established DOOM as a platform as much as a game, and the pattern of scriptable startup arguments with swappable data files became a template followed by Quake, Half-Life, and virtually every moddable engine that came after."
  - id: "intro-loop-and-title-screen"
    line_start: 1160
    line_end: 1169
    title: "The Loop That Hooked Millions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Video_game_user_interface"
    image_url: ""
    image_caption: ""
    content: "DOOM's intro loop and title screen are initialized here, providing a polished entry point for players. The loop includes animations, music, and demo playback, creating an engaging first impression. In 1993, many games lacked such attention to user experience, often dumping players directly into gameplay. DOOM's cinematic approach set a new standard, influencing titles like Diablo and Half-Life, which prioritized immersive menus and introductory sequences. This design choice helped establish DOOM as not just a game but a complete experience, captivating players from the moment they launched it."

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
//	DOOM main program (D_DoomMain) and game loop (D_DoomLoop),
//	plus functions to determine game mode (shareware, registered),
//	parse command line parameters, configure game parameters (turbo),
//	and call the startup functions.
//
//-----------------------------------------------------------------------------


static const char rcsid[] = "$Id: d_main.c,v 1.8 1997/02/03 22:45:09 b1 Exp $";

#define	BGCOLOR		7
#define	FGCOLOR		8


#ifdef NORMALUNIX
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#endif


#include "doomdef.h"
#include "doomstat.h"

#include "dstrings.h"
#include "sounds.h"


#include "z_zone.h"
#include "w_wad.h"
#include "s_sound.h"
#include "v_video.h"

#include "f_finale.h"
#include "f_wipe.h"

#include "m_argv.h"
#include "m_misc.h"
#include "m_menu.h"

#include "i_system.h"
#include "i_sound.h"
#include "i_video.h"

#include "g_game.h"

#include "hu_stuff.h"
#include "wi_stuff.h"
#include "st_stuff.h"
#include "am_map.h"

#include "p_setup.h"
#include "r_local.h"


#include "d_main.h"

//
// D-DoomLoop()
// Not a globally visible function,
//  just included for source reference,
//  called by D_DoomMain, never exits.
// Manages timing and IO,
//  calls all ?_Responder, ?_Ticker, and ?_Drawer,
//  calls I_GetTime, I_StartFrame, and I_StartTic
//
void D_DoomLoop (void);


char*		wadfiles[MAXWADFILES];


boolean		devparm;	// started game with -devparm
boolean         nomonsters;	// checkparm of -nomonsters
boolean         respawnparm;	// checkparm of -respawn
boolean         fastparm;	// checkparm of -fast

boolean         drone;

boolean		singletics = false; // debug flag to cancel adaptiveness



//extern int soundVolume;
//extern  int	sfxVolume;
//extern  int	musicVolume;

extern  boolean	inhelpscreens;

skill_t		startskill;
int             startepisode;
int		startmap;
boolean		autostart;

FILE*		debugfile;

boolean		advancedemo;




char		wadfile[1024];		// primary wad file
char		mapdir[1024];           // directory of development maps
char		basedefault[1024];      // default file


void D_CheckNetGame (void);
void D_ProcessEvents (void);
void G_BuildTiccmd (ticcmd_t* cmd);
void D_DoAdvanceDemo (void);


//
// EVENT HANDLING
//
// Events are asynchronous inputs generally generated by the game user.
// Events can be discarded if no responder claims them
//
event_t         events[MAXEVENTS];
int             eventhead;
int 		eventtail;


//
// D_PostEvent
// Called by the I/O functions when input is detected
//
void D_PostEvent (event_t* ev)
{
    events[eventhead] = *ev;
    eventhead = (++eventhead)&(MAXEVENTS-1);
}


//
// D_ProcessEvents
// Send all the events of the given timestamp down the responder chain
//
void D_ProcessEvents (void)
{
    event_t*	ev;
	
    // IF STORE DEMO, DO NOT ACCEPT INPUT
    if ( ( gamemode == commercial )
	 && (W_CheckNumForName("map01")<0) )
      return;
	
    for ( ; eventtail != eventhead ; eventtail = (++eventtail)&(MAXEVENTS-1) )
    {
	ev = &events[eventtail];
	if (M_Responder (ev))
	    continue;               // menu ate the event
	G_Responder (ev);
    }
}




//
// D_Display
//  draw current display, possibly wiping it from the previous
//

// wipegamestate can be set to -1 to force a wipe on the next draw
gamestate_t     wipegamestate = GS_DEMOSCREEN;
extern  boolean setsizeneeded;
extern  int             showMessages;
void R_ExecuteSetViewSize (void);

void D_Display (void)
{
    static  boolean		viewactivestate = false;
    static  boolean		menuactivestate = false;
    static  boolean		inhelpscreensstate = false;
    static  boolean		fullscreen = false;
    static  gamestate_t		oldgamestate = -1;
    static  int			borderdrawcount;
    int				nowtime;
    int				tics;
    int				wipestart;
    int				y;
    boolean			done;
    boolean			wipe;
    boolean			redrawsbar;

    if (nodrawers)
	return;                    // for comparative timing / profiling
		
    redrawsbar = false;
    
    // change the view size if needed
    if (setsizeneeded)
    {
	R_ExecuteSetViewSize ();
	oldgamestate = -1;                      // force background redraw
	borderdrawcount = 3;
    }

    // save the current screen if about to wipe
    if (gamestate != wipegamestate)
    {
	wipe = true;
	wipe_StartScreen(0, 0, SCREENWIDTH, SCREENHEIGHT);
    }
    else
	wipe = false;

    if (gamestate == GS_LEVEL && gametic)
	HU_Erase();
    
    // do buffered drawing
    switch (gamestate)
    {
      case GS_LEVEL:
	if (!gametic)
	    break;
	if (automapactive)
	    AM_Drawer ();
	if (wipe || (viewheight != 200 && fullscreen) )
	    redrawsbar = true;
	if (inhelpscreensstate && !inhelpscreens)
	    redrawsbar = true;              // just put away the help screen
	ST_Drawer (viewheight == 200, redrawsbar );
	fullscreen = viewheight == 200;
	break;

      case GS_INTERMISSION:
	WI_Drawer ();
	break;

      case GS_FINALE:
	F_Drawer ();
	break;

      case GS_DEMOSCREEN:
	D_PageDrawer ();
	break;
    }
    
    // draw buffered stuff to screen
    I_UpdateNoBlit ();
    
    // draw the view directly
    if (gamestate == GS_LEVEL && !automapactive && gametic)
	R_RenderPlayerView (&players[displayplayer]);

    if (gamestate == GS_LEVEL && gametic)
	HU_Drawer ();
    
    // clean up border stuff
    if (gamestate != oldgamestate && gamestate != GS_LEVEL)
	I_SetPalette (W_CacheLumpName ("PLAYPAL",PU_CACHE));

    // see if the border needs to be initially drawn
    if (gamestate == GS_LEVEL && oldgamestate != GS_LEVEL)
    {
	viewactivestate = false;        // view was not active
	R_FillBackScreen ();    // draw the pattern into the back screen
    }

    // see if the border needs to be updated to the screen
    if (gamestate == GS_LEVEL && !automapactive && scaledviewwidth != 320)
    {
	if (menuactive || menuactivestate || !viewactivestate)
	    borderdrawcount = 3;
	if (borderdrawcount)
	{
	    R_DrawViewBorder ();    // erase old menu stuff
	    borderdrawcount--;
	}

    }

    menuactivestate = menuactive;
    viewactivestate = viewactive;
    inhelpscreensstate = inhelpscreens;
    oldgamestate = wipegamestate = gamestate;
    
    // draw pause pic
    if (paused)
    {
	if (automapactive)
	    y = 4;
	else
	    y = viewwindowy+4;
	V_DrawPatchDirect(viewwindowx+(scaledviewwidth-68)/2,
			  y,0,W_CacheLumpName ("M_PAUSE", PU_CACHE));
    }


    // menus go directly to the screen
    M_Drawer ();          // menu is drawn even on top of everything
    NetUpdate ();         // send out any new accumulation


    // normal update
    if (!wipe)
    {
	I_FinishUpdate ();              // page flip or blit buffer
	return;
    }
    
    // wipe update
    wipe_EndScreen(0, 0, SCREENWIDTH, SCREENHEIGHT);

    wipestart = I_GetTime () - 1;

    do
    {
	do
	{
	    nowtime = I_GetTime ();
	    tics = nowtime - wipestart;
	} while (!tics);
	wipestart = nowtime;
	done = wipe_ScreenWipe(wipe_Melt
			       , 0, 0, SCREENWIDTH, SCREENHEIGHT, tics);
	I_UpdateNoBlit ();
	M_Drawer ();                            // menu is drawn even on top of wipes
	I_FinishUpdate ();                      // page flip or blit buffer
    } while (!done);
}



//
//  D_DoomLoop
//
extern  boolean         demorecording;

void D_DoomLoop (void)
{
    if (demorecording)
	G_BeginRecording ();
		
    if (M_CheckParm ("-debugfile"))
    {
	char    filename[20];
	sprintf (filename,"debug%i.txt",consoleplayer);
	printf ("debug output to: %s\n",filename);
	debugfile = fopen (filename,"w");
    }
	
    I_InitGraphics ();

    while (1)
    {
	// frame syncronous IO operations
	I_StartFrame ();                
	
	// process one or more tics
	if (singletics)
	{
	    I_StartTic ();
	    D_ProcessEvents ();
	    G_BuildTiccmd (&netcmds[consoleplayer][maketic%BACKUPTICS]);
	    if (advancedemo)
		D_DoAdvanceDemo ();
	    M_Ticker ();
	    G_Ticker ();
	    gametic++;
	    maketic++;
	}
	else
	{
	    TryRunTics (); // will run at least one tic
	}
		
	S_UpdateSounds (players[consoleplayer].mo);// move positional sounds

	// Update display, next frame, with current state.
	D_Display ();

#ifndef SNDSERV
	// Sound mixing for the buffer is snychronous.
	I_UpdateSound();
#endif	
	// Synchronous sound output is explicitly called.
#ifndef SNDINTR
	// Update sound output.
	I_SubmitSound();
#endif
    }
}



//
//  DEMO LOOP
//
int             demosequence;
int             pagetic;
char                    *pagename;


//
// D_PageTicker
// Handles timing for warped projection
//
void D_PageTicker (void)
{
    if (--pagetic < 0)
	D_AdvanceDemo ();
}



//
// D_PageDrawer
//
void D_PageDrawer (void)
{
    V_DrawPatch (0,0, 0, W_CacheLumpName(pagename, PU_CACHE));
}


//
// D_AdvanceDemo
// Called after each demo or intro demosequence finishes
//
void D_AdvanceDemo (void)
{
    advancedemo = true;
}


//
// This cycles through the demo sequences.
// FIXME - version dependend demo numbers?
//
 void D_DoAdvanceDemo (void)
{
    players[consoleplayer].playerstate = PST_LIVE;  // not reborn
    advancedemo = false;
    usergame = false;               // no save / end game here
    paused = false;
    gameaction = ga_nothing;

    if ( gamemode == retail )
      demosequence = (demosequence+1)%7;
    else
      demosequence = (demosequence+1)%6;
    
    switch (demosequence)
    {
      case 0:
	if ( gamemode == commercial )
	    pagetic = 35 * 11;
	else
	    pagetic = 170;
	gamestate = GS_DEMOSCREEN;
	pagename = "TITLEPIC";
	if ( gamemode == commercial )
	  S_StartMusic(mus_dm2ttl);
	else
	  S_StartMusic (mus_intro);
	break;
      case 1:
	G_DeferedPlayDemo ("demo1");
	break;
      case 2:
	pagetic = 200;
	gamestate = GS_DEMOSCREEN;
	pagename = "CREDIT";
	break;
      case 3:
	G_DeferedPlayDemo ("demo2");
	break;
      case 4:
	gamestate = GS_DEMOSCREEN;
	if ( gamemode == commercial)
	{
	    pagetic = 35 * 11;
	    pagename = "TITLEPIC";
	    S_StartMusic(mus_dm2ttl);
	}
	else
	{
	    pagetic = 200;

	    if ( gamemode == retail )
	      pagename = "CREDIT";
	    else
	      pagename = "HELP2";
	}
	break;
      case 5:
	G_DeferedPlayDemo ("demo3");
	break;
        // THE DEFINITIVE DOOM Special Edition demo
      case 6:
	G_DeferedPlayDemo ("demo4");
	break;
    }
}



//
// D_StartTitle
//
void D_StartTitle (void)
{
    gameaction = ga_nothing;
    demosequence = -1;
    D_AdvanceDemo ();
}




//      print title for every printed line
char            title[128];



//
// D_AddFile
//
void D_AddFile (char *file)
{
    int     numwadfiles;
    char    *newfile;
	
    for (numwadfiles = 0 ; wadfiles[numwadfiles] ; numwadfiles++)
	;

    newfile = malloc (strlen(file)+1);
    strcpy (newfile, file);
	
    wadfiles[numwadfiles] = newfile;
}

//
// IdentifyVersion
// Checks availability of IWAD files by name,
// to determine whether registered/commercial features
// should be executed (notably loading PWAD's).
//
void IdentifyVersion (void)
{

    char*	doom1wad;
    char*	doomwad;
    char*	doomuwad;
    char*	doom2wad;

    char*	doom2fwad;
    char*	plutoniawad;
    char*	tntwad;

#ifdef NORMALUNIX
    char *home;
    char *doomwaddir;
    doomwaddir = getenv("DOOMWADDIR");
    if (!doomwaddir)
	doomwaddir = ".";

    // Commercial.
    doom2wad = malloc(strlen(doomwaddir)+1+9+1);
    sprintf(doom2wad, "%s/doom2.wad", doomwaddir);

    // Retail.
    doomuwad = malloc(strlen(doomwaddir)+1+8+1);
    sprintf(doomuwad, "%s/doomu.wad", doomwaddir);
    
    // Registered.
    doomwad = malloc(strlen(doomwaddir)+1+8+1);
    sprintf(doomwad, "%s/doom.wad", doomwaddir);
    
    // Shareware.
    doom1wad = malloc(strlen(doomwaddir)+1+9+1);
    sprintf(doom1wad, "%s/doom1.wad", doomwaddir);

     // Bug, dear Shawn.
    // Insufficient malloc, caused spurious realloc errors.
    plutoniawad = malloc(strlen(doomwaddir)+1+/*9*/12+1);
    sprintf(plutoniawad, "%s/plutonia.wad", doomwaddir);

    tntwad = malloc(strlen(doomwaddir)+1+9+1);
    sprintf(tntwad, "%s/tnt.wad", doomwaddir);


    // French stuff.
    doom2fwad = malloc(strlen(doomwaddir)+1+10+1);
    sprintf(doom2fwad, "%s/doom2f.wad", doomwaddir);

    home = getenv("HOME");
    if (!home)
      I_Error("Please set $HOME to your home directory");
    sprintf(basedefault, "%s/.doomrc", home);
#endif

    if (M_CheckParm ("-shdev"))
    {
	gamemode = shareware;
	devparm = true;
	D_AddFile (DEVDATA"doom1.wad");
	D_AddFile (DEVMAPS"data_se/texture1.lmp");
	D_AddFile (DEVMAPS"data_se/pnames.lmp");
	strcpy (basedefault,DEVDATA"default.cfg");
	return;
    }

    if (M_CheckParm ("-regdev"))
    {
	gamemode = registered;
	devparm = true;
	D_AddFile (DEVDATA"doom.wad");
	D_AddFile (DEVMAPS"data_se/texture1.lmp");
	D_AddFile (DEVMAPS"data_se/texture2.lmp");
	D_AddFile (DEVMAPS"data_se/pnames.lmp");
	strcpy (basedefault,DEVDATA"default.cfg");
	return;
    }

    if (M_CheckParm ("-comdev"))
    {
	gamemode = commercial;
	devparm = true;
	/* I don't bother
	if(plutonia)
	    D_AddFile (DEVDATA"plutonia.wad");
	else if(tnt)
	    D_AddFile (DEVDATA"tnt.wad");
	else*/
	    D_AddFile (DEVDATA"doom2.wad");
	    
	D_AddFile (DEVMAPS"cdata/texture1.lmp");
	D_AddFile (DEVMAPS"cdata/pnames.lmp");
	strcpy (basedefault,DEVDATA"default.cfg");
	return;
    }

    if ( !access (doom2fwad,R_OK) )
    {
	gamemode = commercial;
	// C'est ridicule!
	// Let's handle languages in config files, okay?
	language = french;
	printf("French version\n");
	D_AddFile (doom2fwad);
	return;
    }

    if ( !access (doom2wad,R_OK) )
    {
	gamemode = commercial;
	D_AddFile (doom2wad);
	return;
    }

    if ( !access (plutoniawad, R_OK ) )
    {
      gamemode = commercial;
      D_AddFile (plutoniawad);
      return;
    }

    if ( !access ( tntwad, R_OK ) )
    {
      gamemode = commercial;
      D_AddFile (tntwad);
      return;
    }

    if ( !access (doomuwad,R_OK) )
    {
      gamemode = retail;
      D_AddFile (doomuwad);
      return;
    }

    if ( !access (doomwad,R_OK) )
    {
      gamemode = registered;
      D_AddFile (doomwad);
      return;
    }

    if ( !access (doom1wad,R_OK) )
    {
      gamemode = shareware;
      D_AddFile (doom1wad);
      return;
    }

    printf("Game mode indeterminate.\n");
    gamemode = indetermined;

    // We don't abort. Let's see what the PWAD contains.
    //exit(1);
    //I_Error ("Game mode indeterminate\n");
}

//
// Find a Response File
//
void FindResponseFile (void)
{
    int             i;
#define MAXARGVS        100
	
    for (i = 1;i < myargc;i++)
	if (myargv[i][0] == '@')
	{
	    FILE *          handle;
	    int             size;
	    int             k;
	    int             index;
	    int             indexinfile;
	    char    *infile;
	    char    *file;
	    char    *moreargs[20];
	    char    *firstargv;
			
	    // READ THE RESPONSE FILE INTO MEMORY
	    handle = fopen (&myargv[i][1],"rb");
	    if (!handle)
	    {
		printf ("\nNo such response file!");
		exit(1);
	    }
	    printf("Found response file %s!\n",&myargv[i][1]);
	    fseek (handle,0,SEEK_END);
	    size = ftell(handle);
	    fseek (handle,0,SEEK_SET);
	    file = malloc (size);
	    fread (file,size,1,handle);
	    fclose (handle);
			
	    // KEEP ALL CMDLINE ARGS FOLLOWING @RESPONSEFILE ARG
	    for (index = 0,k = i+1; k < myargc; k++)
		moreargs[index++] = myargv[k];
			
	    firstargv = myargv[0];
	    myargv = malloc(sizeof(char *)*MAXARGVS);
	    memset(myargv,0,sizeof(char *)*MAXARGVS);
	    myargv[0] = firstargv;
			
	    infile = file;
	    indexinfile = k = 0;
	    indexinfile++;  // SKIP PAST ARGV[0] (KEEP IT)
	    do
	    {
		myargv[indexinfile++] = infile+k;
		while(k < size &&
		      ((*(infile+k)>= ' '+1) && (*(infile+k)<='z')))
		    k++;
		*(infile+k) = 0;
		while(k < size &&
		      ((*(infile+k)<= ' ') || (*(infile+k)>'z')))
		    k++;
	    } while(k < size);
			
	    for (k = 0;k < index;k++)
		myargv[indexinfile++] = moreargs[k];
	    myargc = indexinfile;
	
	    // DISPLAY ARGS
	    printf("%d command-line args:\n",myargc);
	    for (k=1;k<myargc;k++)
		printf("%s\n",myargv[k]);

	    break;
	}
}


//
// D_DoomMain
//
void D_DoomMain (void)
{
    int             p;
    char                    file[256];

    FindResponseFile ();
	
    IdentifyVersion ();
	
    setbuf (stdout, NULL);
    modifiedgame = false;
	
    nomonsters = M_CheckParm ("-nomonsters");
    respawnparm = M_CheckParm ("-respawn");
    fastparm = M_CheckParm ("-fast");
    devparm = M_CheckParm ("-devparm");
    if (M_CheckParm ("-altdeath"))
	deathmatch = 2;
    else if (M_CheckParm ("-deathmatch"))
	deathmatch = 1;

    switch ( gamemode )
    {
      case retail:
	sprintf (title,
		 "                         "
		 "The Ultimate DOOM Startup v%i.%i"
		 "                           ",
		 VERSION/100,VERSION%100);
	break;
      case shareware:
	sprintf (title,
		 "                            "
		 "DOOM Shareware Startup v%i.%i"
		 "                           ",
		 VERSION/100,VERSION%100);
	break;
      case registered:
	sprintf (title,
		 "                            "
		 "DOOM Registered Startup v%i.%i"
		 "                           ",
		 VERSION/100,VERSION%100);
	break;
      case commercial:
	sprintf (title,
		 "                         "
		 "DOOM 2: Hell on Earth v%i.%i"
		 "                           ",
		 VERSION/100,VERSION%100);
	break;
/*FIXME
       case pack_plut:
	sprintf (title,
		 "                   "
		 "DOOM 2: Plutonia Experiment v%i.%i"
		 "                           ",
		 VERSION/100,VERSION%100);
	break;
      case pack_tnt:
	sprintf (title,
		 "                     "
		 "DOOM 2: TNT - Evilution v%i.%i"
		 "                           ",
		 VERSION/100,VERSION%100);
	break;
*/
      default:
	sprintf (title,
		 "                     "
		 "Public DOOM - v%i.%i"
		 "                           ",
		 VERSION/100,VERSION%100);
	break;
    }
    
    printf ("%s\n",title);

    if (devparm)
	printf(D_DEVSTR);
    
    if (M_CheckParm("-cdrom"))
    {
	printf(D_CDROM);
	mkdir("c:\\doomdata",0);
	strcpy (basedefault,"c:/doomdata/default.cfg");
    }	
    
    // turbo option
    if ( (p=M_CheckParm ("-turbo")) )
    {
	int     scale = 200;
	extern int forwardmove[2];
	extern int sidemove[2];
	
	if (p<myargc-1)
	    scale = atoi (myargv[p+1]);
	if (scale < 10)
	    scale = 10;
	if (scale > 400)
	    scale = 400;
	printf ("turbo scale: %i%%\n",scale);
	forwardmove[0] = forwardmove[0]*scale/100;
	forwardmove[1] = forwardmove[1]*scale/100;
	sidemove[0] = sidemove[0]*scale/100;
	sidemove[1] = sidemove[1]*scale/100;
    }
    
    // add any files specified on the command line with -file wadfile
    // to the wad list
    //
    // convenience hack to allow -wart e m to add a wad file
    // prepend a tilde to the filename so wadfile will be reloadable
    p = M_CheckParm ("-wart");
    if (p)
    {
	myargv[p][4] = 'p';     // big hack, change to -warp

	// Map name handling.
	switch (gamemode )
	{
	  case shareware:
	  case retail:
	  case registered:
	    sprintf (file,"~"DEVMAPS"E%cM%c.wad",
		     myargv[p+1][0], myargv[p+2][0]);
	    printf("Warping to Episode %s, Map %s.\n",
		   myargv[p+1],myargv[p+2]);
	    break;
	    
	  case commercial:
	  default:
	    p = atoi (myargv[p+1]);
	    if (p<10)
	      sprintf (file,"~"DEVMAPS"cdata/map0%i.wad", p);
	    else
	      sprintf (file,"~"DEVMAPS"cdata/map%i.wad", p);
	    break;
	}
	D_AddFile (file);
    }
	
    p = M_CheckParm ("-file");
    if (p)
    {
	// the parms after p are wadfile/lump names,
	// until end of parms or another - preceded parm
	modifiedgame = true;            // homebrew levels
	while (++p != myargc && myargv[p][0] != '-')
	    D_AddFile (myargv[p]);
    }

    p = M_CheckParm ("-playdemo");

    if (!p)
	p = M_CheckParm ("-timedemo");

    if (p && p < myargc-1)
    {
	sprintf (file,"%s.lmp", myargv[p+1]);
	D_AddFile (file);
	printf("Playing demo %s.lmp.\n",myargv[p+1]);
    }
    
    // get skill / episode / map from parms
    startskill = sk_medium;
    startepisode = 1;
    startmap = 1;
    autostart = false;

		
    p = M_CheckParm ("-skill");
    if (p && p < myargc-1)
    {
	startskill = myargv[p+1][0]-'1';
	autostart = true;
    }

    p = M_CheckParm ("-episode");
    if (p && p < myargc-1)
    {
	startepisode = myargv[p+1][0]-'0';
	startmap = 1;
	autostart = true;
    }
	
    p = M_CheckParm ("-timer");
    if (p && p < myargc-1 && deathmatch)
    {
	int     time;
	time = atoi(myargv[p+1]);
	printf("Levels will end after %d minute",time);
	if (time>1)
	    printf("s");
	printf(".\n");
    }

    p = M_CheckParm ("-avg");
    if (p && p < myargc-1 && deathmatch)
	printf("Austin Virtual Gaming: Levels will end after 20 minutes\n");

    p = M_CheckParm ("-warp");
    if (p && p < myargc-1)
    {
	if (gamemode == commercial)
	    startmap = atoi (myargv[p+1]);
	else
	{
	    startepisode = myargv[p+1][0]-'0';
	    startmap = myargv[p+2][0]-'0';
	}
	autostart = true;
    }
    
    // init subsystems
    printf ("V_Init: allocate screens.\n");
    V_Init ();

    printf ("M_LoadDefaults: Load system defaults.\n");
    M_LoadDefaults ();              // load before initing other systems

    printf ("Z_Init: Init zone memory allocation daemon. \n");
    Z_Init ();

    printf ("W_Init: Init WADfiles.\n");
    W_InitMultipleFiles (wadfiles);
    

    // Check for -file in shareware
    if (modifiedgame)
    {
	// These are the lumps that will be checked in IWAD,
	// if any one is not present, execution will be aborted.
	char name[23][8]=
	{
	    "e2m1","e2m2","e2m3","e2m4","e2m5","e2m6","e2m7","e2m8","e2m9",
	    "e3m1","e3m3","e3m3","e3m4","e3m5","e3m6","e3m7","e3m8","e3m9",
	    "dphoof","bfgga0","heada1","cybra1","spida1d1"
	};
	int i;
	
	if ( gamemode == shareware)
	    I_Error("\nYou cannot -file with the shareware "
		    "version. Register!");

	// Check for fake IWAD with right name,
	// but w/o all the lumps of the registered version. 
	if (gamemode == registered)
	    for (i = 0;i < 23; i++)
		if (W_CheckNumForName(name[i])<0)
		    I_Error("\nThis is not the registered version.");
    }
    
    // Iff additonal PWAD files are used, print modified banner
    if (modifiedgame)
    {
	/*m*/printf (
	    "===========================================================================\n"
	    "ATTENTION:  This version of DOOM has been modified.  If you would like to\n"
	    "get a copy of the original game, call 1-800-IDGAMES or see the readme file.\n"
	    "        You will not receive technical support for modified games.\n"
	    "                      press enter to continue\n"
	    "===========================================================================\n"
	    );
	getchar ();
    }
	

    // Check and print which version is executed.
    switch ( gamemode )
    {
      case shareware:
      case indetermined:
	printf (
	    "===========================================================================\n"
	    "                                Shareware!\n"
	    "===========================================================================\n"
	);
	break;
      case registered:
      case retail:
      case commercial:
	printf (
	    "===========================================================================\n"
	    "                 Commercial product - do not distribute!\n"
	    "         Please report software piracy to the SPA: 1-800-388-PIR8\n"
	    "===========================================================================\n"
	);
	break;
	
      default:
	// Ouch.
	break;
    }

    printf ("M_Init: Init miscellaneous info.\n");
    M_Init ();

    printf ("R_Init: Init DOOM refresh daemon - ");
    R_Init ();

    printf ("\nP_Init: Init Playloop state.\n");
    P_Init ();

    printf ("I_Init: Setting up machine state.\n");
    I_Init ();

    printf ("D_CheckNetGame: Checking network game status.\n");
    D_CheckNetGame ();

    printf ("S_Init: Setting up sound.\n");
    S_Init (snd_SfxVolume /* *8 */, snd_MusicVolume /* *8*/ );

    printf ("HU_Init: Setting up heads up display.\n");
    HU_Init ();

    printf ("ST_Init: Init status bar.\n");
    ST_Init ();

    // check for a driver that wants intermission stats
    p = M_CheckParm ("-statcopy");
    if (p && p<myargc-1)
    {
	// for statistics driver
	extern  void*	statcopy;                            

	statcopy = (void*)atoi(myargv[p+1]);
	printf ("External statistics registered.\n");
    }
    
    // start the apropriate game based on parms
    p = M_CheckParm ("-record");

    if (p && p < myargc-1)
    {
	G_RecordDemo (myargv[p+1]);
	autostart = true;
    }
	
    p = M_CheckParm ("-playdemo");
    if (p && p < myargc-1)
    {
	singledemo = true;              // quit after one demo
	G_DeferedPlayDemo (myargv[p+1]);
	D_DoomLoop ();  // never returns
    }
	
    p = M_CheckParm ("-timedemo");
    if (p && p < myargc-1)
    {
	G_TimeDemo (myargv[p+1]);
	D_DoomLoop ();  // never returns
    }
	
    p = M_CheckParm ("-loadgame");
    if (p && p < myargc-1)
    {
	if (M_CheckParm("-cdrom"))
	    sprintf(file, "c:\\doomdata\\"SAVEGAMENAME"%c.dsg",myargv[p+1][0]);
	else
	    sprintf(file, SAVEGAMENAME"%c.dsg",myargv[p+1][0]);
	G_LoadGame (file);
    }
	

    if ( gameaction != ga_loadgame )
    {
	if (autostart || netgame)
	    G_InitNew (startskill, startepisode, startmap);
	else
	    D_StartTitle ();                // start up intro loop

    }

    D_DoomLoop ();  // never returns
}
```