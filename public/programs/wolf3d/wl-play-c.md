---
title: "WL_PLAY.C"
program: "Wolfenstein 3D"
program_slug: "wolf3d"
file_path: "WOLFSRC/WL_PLAY.C"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/wolf3d/blob/master/WOLFSRC/WL_PLAY.C"
year: 1992
author: "John Carmack, John Romero, Tom Hall"
slug: "wl-play-c"
order: 7
description: "This file is the heartbeat of Wolfenstein 3D's gameplay, showcasing the mechanics that defined the first-person shooter genre."

summary:
  - point: "Innovative use of palette shifting for visual effects"
    link: "https://en.wikipedia.org/wiki/Palette_swap"
    link_label: "Palette Shifting"
  - point: "Actor-based game loop with linked list management"
    link: "https://en.wikipedia.org/wiki/Game_engine"
    link_label: "Game Engine Design"
  - point: "Support for multiple input devices: keyboard, mouse, joystick"
    link: "https://en.wikipedia.org/wiki/Input_device"
    link_label: "Input Devices"
  - point: "Cheat codes embedded in gameplay logic"
    link: "https://en.wikipedia.org/wiki/Cheat_code"
    link_label: "Cheat Codes"
  - point: "Dynamic music system tied to game state"
    link: "https://en.wikipedia.org/wiki/Video_game_music"
    link_label: "Video Game Music"

enhancements:
  - id: "local-constants-and-global-variables"
    line_start: 7
    line_end: 73
    title: "The scaffolding of Wolfenstein's world"
    wikipedia_url: "https://en.wikipedia.org/wiki/Global_variable"
    image_url: ""
    image_caption: ""
    content: "This section defines the constants and global variables that underpin Wolfenstein 3D's gameplay. From the `madenoise` flag that tracks player actions to the `tilemap` array representing the game world, these variables are the backbone of the game's logic. In 1992, memory constraints were a major concern, and developers had to carefully manage global state to ensure performance on MS-DOS systems with limited RAM. John Carmack's approach to organizing these variables reflects his mastery of efficient programming, a skill honed during the development of earlier titles like Commander Keen. These global variables allowed the game to maintain a consistent state across frames, a necessity for the fast-paced action that Wolfenstein 3D pioneered."
  - id: "poll-controls"
    line_start: 455
    line_end: 579
    title: "Polling for player input across devices"
    wikipedia_url: "https://en.wikipedia.org/wiki/Input_device"
    image_url: ""
    image_caption: ""
    content: "The `PollControls` function is a testament to id Software's commitment to accessibility and player choice. It gathers input from the keyboard, mouse, and joystick, ensuring that players could use their preferred control method. In the early 1990s, hardware diversity was a challenge for game developers, as PCs varied widely in their capabilities. Supporting multiple input devices required careful coding to handle different protocols and quirks. This function also integrates demo playback and recording, showcasing id Software's foresight in creating tools for debugging and marketing. The ability to record gameplay demos was a novel feature at the time, allowing players to share their experiences and developers to analyze player behavior. Today, input polling remains a cornerstone of game development, but the groundwork laid by functions like `PollControls` helped standardize these practices."
  - id: "actor-management"
    line_start: 861
    line_end: 980
    title: "Managing actors in a dynamic game world"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_engine"
    image_url: ""
    image_caption: ""
    content: "The `InitActorList`, `GetNewActor`, and `RemoveObj` functions form the core of Wolfenstein 3D's actor management system. Actors, which include enemies, items, and the player, are stored in a linked list, allowing dynamic addition and removal during gameplay. This design was crucial for handling the game's fast-paced action, where objects needed to react to player input and interact with the environment. John Carmack's use of linked lists reflects his deep understanding of efficient data structures, a skill that would later influence the design of the Quake engine. The actor management system also highlights the constraints of early 1990s hardware, where memory was limited and every byte counted. By reusing memory from removed objects, the game avoided costly allocations and ensured smooth performance. This approach became a standard in game development, influencing how modern engines handle dynamic objects."
  - id: "music-system"
    line_start: 991
    line_end: 1043
    title: "Dynamic music tied to game progression"
    wikipedia_url: "https://en.wikipedia.org/wiki/Video_game_music"
    image_url: ""
    image_caption: ""
    content: "The `StartMusic` and `StopMusic` functions showcase Wolfenstein 3D's dynamic music system, which adjusts the soundtrack based on the player's progress. Music in video games was evolving rapidly in the early 1990s, with the AdLib sound card enabling richer audio experiences. id Software leveraged this technology to create an immersive atmosphere, with tracks that heightened tension during boss battles and secret levels. The music system also reflects the team's resourcefulness, as they had to manage audio data within the constraints of MS-DOS memory limits. By dynamically loading and unloading music tracks, they ensured that the game could run smoothly on a wide range of hardware. This approach to adaptive music would influence later titles, cementing the role of audio as a key component of game design."
  - id: "palette-shifting-effects"
    line_start: 1053
    line_end: 1239
    title: "Visual drama through palette shifting"
    wikipedia_url: "https://en.wikipedia.org/wiki/Palette_swap"
    image_url: ""
    image_caption: ""
    content: "The palette shifting system in Wolfenstein 3D is a brilliant example of achieving visual effects within hardware constraints. Functions like `InitRedShifts` and `UpdatePaletteShifts` manipulate the game's color palette to create flashes of red for damage and white for bonuses. In the early 1990s, graphics cards lacked the ability to render complex effects, so developers had to innovate with techniques like palette swapping. This method allowed id Software to convey dramatic moments without taxing the CPU or memory. John Carmack's implementation is both efficient and visually striking, enhancing the game's immersive quality. Palette shifting became a common technique in early PC games, influencing how developers approached visual effects in an era of limited graphical capabilities."
  - id: "playloop-core"
    line_start: 1368
    line_end: 1471
    title: "The heartbeat of Wolfenstein 3D"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_loop"
    image_url: ""
    image_caption: ""
    content: "The `PlayLoop` function is the central game loop that drives Wolfenstein 3D's gameplay. It coordinates input polling, actor updates, palette shifts, and rendering, ensuring a seamless experience for the player. This function embodies the real-time nature of the game, where every frame must process player actions, enemy behavior, and environmental changes. In 1992, achieving smooth gameplay on MS-DOS systems was a monumental challenge, as developers had to optimize every aspect of their code to run within hardware constraints. John Carmack's mastery of low-level programming is evident here, as the loop balances performance and complexity. The `PlayLoop` function also includes support for virtual reality, a forward-thinking feature that highlights id Software's innovative spirit. The game loop concept pioneered by Wolfenstein 3D remains a fundamental element of game development, influencing countless titles in the decades that followed."

---

// WL_PLAY.C

#include "WL_DEF.H"
#pragma hdrstop


/*
=============================================================================

						 LOCAL CONSTANTS

=============================================================================
*/

#define sc_Question	0x35

/*
=============================================================================

						 GLOBAL VARIABLES

=============================================================================
*/

boolean		madenoise;					// true when shooting or screaming

exit_t		playstate;

int			DebugOk;

objtype 	objlist[MAXACTORS],*new,*obj,*player,*lastobj,
			*objfreelist,*killerobj;

unsigned	farmapylookup[MAPSIZE];
byte		*nearmapylookup[MAPSIZE];

boolean		singlestep,godmode,noclip;
int			extravbls;

byte		tilemap[MAPSIZE][MAPSIZE];	// wall values only
byte		spotvis[MAPSIZE][MAPSIZE];
objtype		*actorat[MAPSIZE][MAPSIZE];

//
// replacing refresh manager
//
unsigned	mapwidth,mapheight,tics;
boolean		compatability;
byte		*updateptr;
unsigned	mapwidthtable[64];
unsigned	uwidthtable[UPDATEHIGH];
unsigned	blockstarts[UPDATEWIDE*UPDATEHIGH];
byte		update[UPDATESIZE];

//
// control info
//
boolean		mouseenabled,joystickenabled,joypadenabled,joystickprogressive;
int			joystickport;
int			dirscan[4] = {sc_UpArrow,sc_RightArrow,sc_DownArrow,sc_LeftArrow};
int			buttonscan[NUMBUTTONS] =
			{sc_Control,sc_Alt,sc_RShift,sc_Space,sc_1,sc_2,sc_3,sc_4};
int			buttonmouse[4]={bt_attack,bt_strafe,bt_use,bt_nobutton};
int			buttonjoy[4]={bt_attack,bt_strafe,bt_use,bt_run};

int			viewsize;

boolean		buttonheld[NUMBUTTONS];

boolean		demorecord,demoplayback;
char		far *demoptr, far *lastdemoptr;
memptr		demobuffer;

//
// curent user input
//
int			controlx,controly;		// range from -100 to 100 per tic
boolean		buttonstate[NUMBUTTONS];



//===========================================================================


void	CenterWindow(word w,word h);
void 	InitObjList (void);
void 	RemoveObj (objtype *gone);
void 	PollControls (void);
void 	StopMusic(void);
void 	StartMusic(void);
void	PlayLoop (void);

/*
=============================================================================

						 LOCAL VARIABLES

=============================================================================
*/


objtype dummyobj;

//
// LIST OF SONGS FOR EACH VERSION
//
int songs[]=
{
#ifndef SPEAR
 //
 // Episode One
 //
 GETTHEM_MUS,
 SEARCHN_MUS,
 POW_MUS,
 SUSPENSE_MUS,
 GETTHEM_MUS,
 SEARCHN_MUS,
 POW_MUS,
 SUSPENSE_MUS,

 WARMARCH_MUS,	// Boss level
 CORNER_MUS,	// Secret level

 //
 // Episode Two
 //
 NAZI_OMI_MUS,
 PREGNANT_MUS,
 GOINGAFT_MUS,
 HEADACHE_MUS,
 NAZI_OMI_MUS,
 PREGNANT_MUS,
 HEADACHE_MUS,
 GOINGAFT_MUS,

 WARMARCH_MUS,	// Boss level
 DUNGEON_MUS,	// Secret level

 //
 // Episode Three
 //
 INTROCW3_MUS,
 NAZI_RAP_MUS,
 TWELFTH_MUS,
 ZEROHOUR_MUS,
 INTROCW3_MUS,
 NAZI_RAP_MUS,
 TWELFTH_MUS,
 ZEROHOUR_MUS,

 ULTIMATE_MUS,	// Boss level
 PACMAN_MUS,	// Secret level

 //
 // Episode Four
 //
 GETTHEM_MUS,
 SEARCHN_MUS,
 POW_MUS,
 SUSPENSE_MUS,
 GETTHEM_MUS,
 SEARCHN_MUS,
 POW_MUS,
 SUSPENSE_MUS,

 WARMARCH_MUS,	// Boss level
 CORNER_MUS,	// Secret level

 //
 // Episode Five
 //
 NAZI_OMI_MUS,
 PREGNANT_MUS,
 GOINGAFT_MUS,
 HEADACHE_MUS,
 NAZI_OMI_MUS,
 PREGNANT_MUS,
 HEADACHE_MUS,
 GOINGAFT_MUS,

 WARMARCH_MUS,	// Boss level
 DUNGEON_MUS,	// Secret level

 //
 // Episode Six
 //
 INTROCW3_MUS,
 NAZI_RAP_MUS,
 TWELFTH_MUS,
 ZEROHOUR_MUS,
 INTROCW3_MUS,
 NAZI_RAP_MUS,
 TWELFTH_MUS,
 ZEROHOUR_MUS,

 ULTIMATE_MUS,	// Boss level
 FUNKYOU_MUS		// Secret level
#else

 //////////////////////////////////////////////////////////////
 //
 // SPEAR OF DESTINY TRACKS
 //
 //////////////////////////////////////////////////////////////
 XTIPTOE_MUS,
 XFUNKIE_MUS,
 XDEATH_MUS,
 XGETYOU_MUS,		// DON'T KNOW
 ULTIMATE_MUS,	// Trans Gr”sse

 DUNGEON_MUS,
 GOINGAFT_MUS,
 POW_MUS,
 TWELFTH_MUS,
 ULTIMATE_MUS,	// Barnacle Wilhelm BOSS

 NAZI_OMI_MUS,
 GETTHEM_MUS,
 SUSPENSE_MUS,
 SEARCHN_MUS,
 ZEROHOUR_MUS,
 ULTIMATE_MUS,	// Super Mutant BOSS

 XPUTIT_MUS,
 ULTIMATE_MUS,	// Death Knight BOSS

 XJAZNAZI_MUS,	// Secret level
 XFUNKIE_MUS,	// Secret level (DON'T KNOW)

 XEVIL_MUS		// Angel of Death BOSS

#endif
};


/*
=============================================================================

						  USER CONTROL

=============================================================================
*/


#define BASEMOVE		35
#define RUNMOVE			70
#define BASETURN		35
#define RUNTURN			70

#define JOYSCALE		2

/*
===================
=
= PollKeyboardButtons
=
===================
*/

void PollKeyboardButtons (void)
{
	int		i;

	for (i=0;i<NUMBUTTONS;i++)
		if (Keyboard[buttonscan[i]])
			buttonstate[i] = true;
}


/*
===================
=
= PollMouseButtons
=
===================
*/

void PollMouseButtons (void)
{
	int	buttons;

	buttons = IN_MouseButtons ();

	if (buttons&1)
		buttonstate[buttonmouse[0]] = true;
	if (buttons&2)
		buttonstate[buttonmouse[1]] = true;
	if (buttons&4)
		buttonstate[buttonmouse[2]] = true;
}



/*
===================
=
= PollJoystickButtons
=
===================
*/

void PollJoystickButtons (void)
{
	int	buttons;

	buttons = IN_JoyButtons ();

	if (joystickport && !joypadenabled)
	{
		if (buttons&4)
			buttonstate[buttonjoy[0]] = true;
		if (buttons&8)
			buttonstate[buttonjoy[1]] = true;
	}
	else
	{
		if (buttons&1)
			buttonstate[buttonjoy[0]] = true;
		if (buttons&2)
			buttonstate[buttonjoy[1]] = true;
		if (joypadenabled)
		{
			if (buttons&4)
				buttonstate[buttonjoy[2]] = true;
			if (buttons&8)
				buttonstate[buttonjoy[3]] = true;
		}
	}
}


/*
===================
=
= PollKeyboardMove
=
===================
*/

void PollKeyboardMove (void)
{
	if (buttonstate[bt_run])
	{
		if (Keyboard[dirscan[di_north]])
			controly -= RUNMOVE*tics;
		if (Keyboard[dirscan[di_south]])
			controly += RUNMOVE*tics;
		if (Keyboard[dirscan[di_west]])
			controlx -= RUNMOVE*tics;
		if (Keyboard[dirscan[di_east]])
			controlx += RUNMOVE*tics;
	}
	else
	{
		if (Keyboard[dirscan[di_north]])
			controly -= BASEMOVE*tics;
		if (Keyboard[dirscan[di_south]])
			controly += BASEMOVE*tics;
		if (Keyboard[dirscan[di_west]])
			controlx -= BASEMOVE*tics;
		if (Keyboard[dirscan[di_east]])
			controlx += BASEMOVE*tics;
	}
}


/*
===================
=
= PollMouseMove
=
===================
*/

void PollMouseMove (void)
{
	int	mousexmove,mouseymove;

	Mouse(MDelta);
	mousexmove = _CX;
	mouseymove = _DX;

	controlx += mousexmove*10/(13-mouseadjustment);
	controly += mouseymove*20/(13-mouseadjustment);
}



/*
===================
=
= PollJoystickMove
=
===================
*/

void PollJoystickMove (void)
{
	int	joyx,joyy;

	INL_GetJoyDelta(joystickport,&joyx,&joyy);

	if (joystickprogressive)
	{
		if (joyx > 64)
			controlx += (joyx-64)*JOYSCALE*tics;
		else if (joyx < -64)
			controlx -= (-joyx-64)*JOYSCALE*tics;
		if (joyy > 64)
			controlx += (joyy-64)*JOYSCALE*tics;
		else if (joyy < -64)
			controly -= (-joyy-64)*JOYSCALE*tics;
	}
	else if (buttonstate[bt_run])
	{
		if (joyx > 64)
			controlx += RUNMOVE*tics;
		else if (joyx < -64)
			controlx -= RUNMOVE*tics;
		if (joyy > 64)
			controly += RUNMOVE*tics;
		else if (joyy < -64)
			controly -= RUNMOVE*tics;
	}
	else
	{
		if (joyx > 64)
			controlx += BASEMOVE*tics;
		else if (joyx < -64)
			controlx -= BASEMOVE*tics;
		if (joyy > 64)
			controly += BASEMOVE*tics;
		else if (joyy < -64)
			controly -= BASEMOVE*tics;
	}
}


/*
===================
=
= PollControls
=
= Gets user or demo input, call once each frame
=
= controlx		set between -100 and 100 per tic
= controly
= buttonheld[]	the state of the buttons LAST frame
= buttonstate[]	the state of the buttons THIS frame
=
===================
*/

void PollControls (void)
{
	int		max,min,i;
	byte	buttonbits;

//
// get timing info for last frame
//
	if (demoplayback)
	{
		while (TimeCount<lasttimecount+DEMOTICS)
		;
		TimeCount = lasttimecount + DEMOTICS;
		lasttimecount += DEMOTICS;
		tics = DEMOTICS;
	}
	else if (demorecord)			// demo recording and playback needs
	{								// to be constant
//
// take DEMOTICS or more tics, and modify Timecount to reflect time taken
//
		while (TimeCount<lasttimecount+DEMOTICS)
		;
		TimeCount = lasttimecount + DEMOTICS;
		lasttimecount += DEMOTICS;
		tics = DEMOTICS;
	}
	else
		CalcTics ();

	controlx = 0;
	controly = 0;
	memcpy (buttonheld,buttonstate,sizeof(buttonstate));
	memset (buttonstate,0,sizeof(buttonstate));

	if (demoplayback)
	{
	//
	// read commands from demo buffer
	//
		buttonbits = *demoptr++;
		for (i=0;i<NUMBUTTONS;i++)
		{
			buttonstate[i] = buttonbits&1;
			buttonbits >>= 1;
		}

		controlx = *demoptr++;
		controly = *demoptr++;

		if (demoptr == lastdemoptr)
			playstate = ex_completed;		// demo is done

		controlx *= (int)tics;
		controly *= (int)tics;

		return;
	}


//
// get button states
//
	PollKeyboardButtons ();

	if (mouseenabled)
		PollMouseButtons ();

	if (joystickenabled)
		PollJoystickButtons ();

//
// get movements
//
	PollKeyboardMove ();

	if (mouseenabled)
		PollMouseMove ();

	if (joystickenabled)
		PollJoystickMove ();

//
// bound movement to a maximum
//
	max = 100*tics;
	min = -max;
	if (controlx > max)
		controlx = max;
	else if (controlx < min)
		controlx = min;

	if (controly > max)
		controly = max;
	else if (controly < min)
		controly = min;

	if (demorecord)
	{
	//
	// save info out to demo buffer
	//
		controlx /= (int)tics;
		controly /= (int)tics;

		buttonbits = 0;

		for (i=NUMBUTTONS-1;i>=0;i--)
		{
			buttonbits <<= 1;
			if (buttonstate[i])
				buttonbits |= 1;
		}

		*demoptr++ = buttonbits;
		*demoptr++ = controlx;
		*demoptr++ = controly;

		if (demoptr >= lastdemoptr)
			Quit ("Demo buffer overflowed!");

		controlx *= (int)tics;
		controly *= (int)tics;
	}
}



//==========================================================================



///////////////////////////////////////////////////////////////////////////
//
//	CenterWindow() - Generates a window of a given width & height in the
//		middle of the screen
//
///////////////////////////////////////////////////////////////////////////

#define MAXX	320
#define MAXY	160

void	CenterWindow(word w,word h)
{
	FixOfs ();
	US_DrawWindow(((MAXX / 8) - w) / 2,((MAXY / 8) - h) / 2,w,h);
}

//===========================================================================


/*
=====================
=
= CheckKeys
=
=====================
*/

void CheckKeys (void)
{
	int		i;
	byte	scan;
	unsigned	temp;


	if (screenfaded || demoplayback)	// don't do anything with a faded screen
		return;

	scan = LastScan;


	#ifdef SPEAR
	//
	// SECRET CHEAT CODE: TAB-G-F10
	//
	if (Keyboard[sc_Tab] &&
		Keyboard[sc_G] &&
		Keyboard[sc_F10])
	{
		WindowH = 160;
		if (godmode)
		{
			Message ("God mode OFF");
			SD_PlaySound (NOBONUSSND);
		}
		else
		{
			Message ("God mode ON");
			SD_PlaySound (ENDBONUS2SND);
		}

		IN_Ack();
		godmode ^= 1;
		DrawAllPlayBorderSides ();
		IN_ClearKeysDown();
		return;
	}
	#endif


	//
	// SECRET CHEAT CODE: 'MLI'
	//
	if (Keyboard[sc_M] &&
		Keyboard[sc_L] &&
		Keyboard[sc_I])
	{
		gamestate.health = 100;
		gamestate.ammo = 99;
		gamestate.keys = 3;
		gamestate.score = 0;
		gamestate.TimeCount += 42000L;
		GiveWeapon (wp_chaingun);

		DrawWeapon();
		DrawHealth();
		DrawKeys();
		DrawAmmo();
		DrawScore();

		ClearMemory ();
		CA_CacheGrChunk (STARTFONT+1);
		ClearSplitVWB ();
		VW_ScreenToScreen (displayofs,bufferofs,80,160);

		Message(STR_CHEATER1"\n"
				STR_CHEATER2"\n\n"
				STR_CHEATER3"\n"
				STR_CHEATER4"\n"
				STR_CHEATER5);

		UNCACHEGRCHUNK(STARTFONT+1);
		PM_CheckMainMem ();
		IN_ClearKeysDown();
		IN_Ack();

		DrawAllPlayBorder ();
	}

	//
	// OPEN UP DEBUG KEYS
	//
#ifndef SPEAR
	if (Keyboard[sc_BackSpace] &&
		Keyboard[sc_LShift] &&
		Keyboard[sc_Alt] &&
		MS_CheckParm("goobers"))
#else
	if (Keyboard[sc_BackSpace] &&
		Keyboard[sc_LShift] &&
		Keyboard[sc_Alt] &&
		MS_CheckParm("debugmode"))
#endif
	{
	 ClearMemory ();
	 CA_CacheGrChunk (STARTFONT+1);
	 ClearSplitVWB ();
	 VW_ScreenToScreen (displayofs,bufferofs,80,160);

	 Message("Debugging keys are\nnow available!");
	 UNCACHEGRCHUNK(STARTFONT+1);
	 PM_CheckMainMem ();
	 IN_ClearKeysDown();
	 IN_Ack();

	 DrawAllPlayBorderSides ();
	 DebugOk=1;
	}

	//
	// TRYING THE KEEN CHEAT CODE!
	//
	if (Keyboard[sc_B] &&
		Keyboard[sc_A] &&
		Keyboard[sc_T])
	{
	 ClearMemory ();
	 CA_CacheGrChunk (STARTFONT+1);
	 ClearSplitVWB ();
	 VW_ScreenToScreen (displayofs,bufferofs,80,160);

	 Message("Commander Keen is also\n"
			 "available from Apogee, but\n"
			 "then, you already know\n"
			 "that - right, Cheatmeister?!");

	 UNCACHEGRCHUNK(STARTFONT+1);
	 PM_CheckMainMem ();
	 IN_ClearKeysDown();
	 IN_Ack();

	 DrawAllPlayBorder ();
	}

//
// pause key weirdness can't be checked as a scan code
//
	if (Paused)
	{
		bufferofs = displayofs;
		LatchDrawPic (20-4,80-2*8,PAUSEDPIC);
		SD_MusicOff();
		IN_Ack();
		IN_ClearKeysDown ();
		SD_MusicOn();
		Paused = false;
		if (MousePresent)
			Mouse(MDelta);	// Clear accumulated mouse movement
		return;
	}


//
// F1-F7/ESC to enter control panel
//
	if (
#ifndef DEBCHECK
		scan == sc_F10 ||
#endif
		scan == sc_F9 ||
		scan == sc_F7 ||
		scan == sc_F8)			// pop up quit dialog
	{
		ClearMemory ();
		ClearSplitVWB ();
		VW_ScreenToScreen (displayofs,bufferofs,80,160);
		US_ControlPanel(scan);

		 DrawAllPlayBorderSides ();

		if (scan == sc_F9)
		  StartMusic ();

		PM_CheckMainMem ();
		SETFONTCOLOR(0,15);
		IN_ClearKeysDown();
		return;
	}

	if ( (scan >= sc_F1 && scan <= sc_F9) || scan == sc_Escape)
	{
		StopMusic ();
		ClearMemory ();
		VW_FadeOut ();

		US_ControlPanel(scan);

		SETFONTCOLOR(0,15);
		IN_ClearKeysDown();
		DrawPlayScreen ();
		if (!startgame && !loadedgame)
		{
			VW_FadeIn ();
			StartMusic ();
		}
		if (loadedgame)
			playstate = ex_abort;
		lasttimecount = TimeCount;
		if (MousePresent)
			Mouse(MDelta);	// Clear accumulated mouse movement
		PM_CheckMainMem ();
		return;
	}

//
// TAB-? debug keys
//
	if (Keyboard[sc_Tab] && DebugOk)
	{
		CA_CacheGrChunk (STARTFONT);
		fontnumber=0;
		SETFONTCOLOR(0,15);
		DebugKeys();
		if (MousePresent)
			Mouse(MDelta);	// Clear accumulated mouse movement
		lasttimecount = TimeCount;
		return;
	}

}


//===========================================================================

/*
#############################################################################

				  The objlist data structure

#############################################################################

objlist containt structures for every actor currently playing.  The structure
is accessed as a linked list starting at *player, ending when ob->next ==
NULL.  GetNewObj inserts a new object at the end of the list, meaning that
if an actor spawn another actor, the new one WILL get to think and react the
same frame.  RemoveObj unlinks the given object and returns it to the free
list, but does not damage the objects ->next pointer, so if the current object
removes itself, a linked list following loop can still safely get to the
next element.

<backwardly linked free list>

#############################################################################
*/


/*
=========================
=
= InitActorList
=
= Call to clear out the actor object lists returning them all to the free
= list.  Allocates a special spot for the player.
=
=========================
*/

int	objcount;

void InitActorList (void)
{
	int	i;

//
// init the actor lists
//
	for (i=0;i<MAXACTORS;i++)
	{
		objlist[i].prev = &objlist[i+1];
		objlist[i].next = NULL;
	}

	objlist[MAXACTORS-1].prev = NULL;

	objfreelist = &objlist[0];
	lastobj = NULL;

	objcount = 0;

//
// give the player the first free spots
//
	GetNewActor ();
	player = new;

}

//===========================================================================

/*
=========================
=
= GetNewActor
=
= Sets the global variable new to point to a free spot in objlist.
= The free spot is inserted at the end of the liked list
=
= When the object list is full, the caller can either have it bomb out ot
= return a dummy object pointer that will never get used
=
=========================
*/

void GetNewActor (void)
{
	if (!objfreelist)
		Quit ("GetNewActor: No free spots in objlist!");

	new = objfreelist;
	objfreelist = new->prev;
	memset (new,0,sizeof(*new));

	if (lastobj)
		lastobj->next = new;
	new->prev = lastobj;	// new->next is allready NULL from memset

	new->active = false;
	lastobj = new;

	objcount++;
}

//===========================================================================

/*
=========================
=
= RemoveObj
=
= Add the given object back into the free list, and unlink it from it's
= neighbors
=
=========================
*/

void RemoveObj (objtype *gone)
{
	objtype **spotat;

	if (gone == player)
		Quit ("RemoveObj: Tried to remove the player!");

	gone->state = NULL;

//
// fix the next object's back link
//
	if (gone == lastobj)
		lastobj = (objtype *)gone->prev;
	else
		gone->next->prev = gone->prev;

//
// fix the previous object's forward link
//
	gone->prev->next = gone->next;

//
// add it back in to the free list
//
	gone->prev = objfreelist;
	objfreelist = gone;

	objcount--;
}

/*
=============================================================================

						MUSIC STUFF

=============================================================================
*/


/*
=================
=
= StopMusic
=
=================
*/

void StopMusic(void)
{
	int	i;

	SD_MusicOff();
	for (i = 0;i < LASTMUSIC;i++)
		if (audiosegs[STARTMUSIC + i])
		{
			MM_SetPurge(&((memptr)audiosegs[STARTMUSIC + i]),3);
			MM_SetLock(&((memptr)audiosegs[STARTMUSIC + i]),false);
		}
}

//==========================================================================


/*
=================
=
= StartMusic
=
=================
*/

void StartMusic(void)
{
	musicnames	chunk;

	SD_MusicOff();
	chunk = songs[gamestate.mapon+gamestate.episode*10];

//	if ((chunk == -1) || (MusicMode != smm_AdLib))
//DEBUG control panel		return;

	MM_BombOnError (false);
	CA_CacheAudioChunk(STARTMUSIC + chunk);
	MM_BombOnError (true);
	if (mmerror)
		mmerror = false;
	else
	{
		MM_SetLock(&((memptr)audiosegs[STARTMUSIC + chunk]),true);
		SD_StartMusic((MusicGroup far *)audiosegs[STARTMUSIC + chunk]);
	}
}


/*
=============================================================================

					PALETTE SHIFTING STUFF

=============================================================================
*/

#define NUMREDSHIFTS	6
#define REDSTEPS		8

#define NUMWHITESHIFTS	3
#define WHITESTEPS		20
#define WHITETICS		6


byte	far redshifts[NUMREDSHIFTS][768];
byte	far whiteshifts[NUMREDSHIFTS][768];

int		damagecount,bonuscount;
boolean	palshifted;

extern 	byte	far	gamepal;

/*
=====================
=
= InitRedShifts
=
=====================
*/

void InitRedShifts (void)
{
	byte	far *workptr, far *baseptr;
	int		i,j,delta;


//
// fade through intermediate frames
//
	for (i=1;i<=NUMREDSHIFTS;i++)
	{
		workptr = (byte far *)&redshifts[i-1][0];
		baseptr = &gamepal;

		for (j=0;j<=255;j++)
		{
			delta = 64-*baseptr;
			*workptr++ = *baseptr++ + delta * i / REDSTEPS;
			delta = -*baseptr;
			*workptr++ = *baseptr++ + delta * i / REDSTEPS;
			delta = -*baseptr;
			*workptr++ = *baseptr++ + delta * i / REDSTEPS;
		}
	}

	for (i=1;i<=NUMWHITESHIFTS;i++)
	{
		workptr = (byte far *)&whiteshifts[i-1][0];
		baseptr = &gamepal;

		for (j=0;j<=255;j++)
		{
			delta = 64-*baseptr;
			*workptr++ = *baseptr++ + delta * i / WHITESTEPS;
			delta = 62-*baseptr;
			*workptr++ = *baseptr++ + delta * i / WHITESTEPS;
			delta = 0-*baseptr;
			*workptr++ = *baseptr++ + delta * i / WHITESTEPS;
		}
	}
}


/*
=====================
=
= ClearPaletteShifts
=
=====================
*/

void ClearPaletteShifts (void)
{
	bonuscount = damagecount = 0;
}


/*
=====================
=
= StartBonusFlash
=
=====================
*/

void StartBonusFlash (void)
{
	bonuscount = NUMWHITESHIFTS*WHITETICS;		// white shift palette
}


/*
=====================
=
= StartDamageFlash
=
=====================
*/

void StartDamageFlash (int damage)
{
	damagecount += damage;
}


/*
=====================
=
= UpdatePaletteShifts
=
=====================
*/

void UpdatePaletteShifts (void)
{
	int	red,white;

	if (bonuscount)
	{
		white = bonuscount/WHITETICS +1;
		if (white>NUMWHITESHIFTS)
			white = NUMWHITESHIFTS;
		bonuscount -= tics;
		if (bonuscount < 0)
			bonuscount = 0;
	}
	else
		white = 0;


	if (damagecount)
	{
		red = damagecount/10 +1;
		if (red>NUMREDSHIFTS)
			red = NUMREDSHIFTS;

		damagecount -= tics;
		if (damagecount < 0)
			damagecount = 0;
	}
	else
		red = 0;

	if (red)
	{
		VW_WaitVBL(1);
		VL_SetPalette (redshifts[red-1]);
		palshifted = true;
	}
	else if (white)
	{
		VW_WaitVBL(1);
		VL_SetPalette (whiteshifts[white-1]);
		palshifted = true;
	}
	else if (palshifted)
	{
		VW_WaitVBL(1);
		VL_SetPalette (&gamepal);		// back to normal
		palshifted = false;
	}
}


/*
=====================
=
= FinishPaletteShifts
=
= Resets palette to normal if needed
=
=====================
*/

void FinishPaletteShifts (void)
{
	if (palshifted)
	{
		palshifted = 0;
		VW_WaitVBL(1);
		VL_SetPalette (&gamepal);
	}
}


/*
=============================================================================

						CORE PLAYLOOP

=============================================================================
*/


/*
=====================
=
= DoActor
=
=====================
*/

void DoActor (objtype *ob)
{
	void (*think)(objtype *);

	if (!ob->active && !areabyplayer[ob->areanumber])
		return;

	if (!(ob->flags&(FL_NONMARK|FL_NEVERMARK)) )
		actorat[ob->tilex][ob->tiley] = NULL;

//
// non transitional object
//

	if (!ob->ticcount)
	{
		think =	ob->state->think;
		if (think)
		{
			think (ob);
			if (!ob->state)
			{
				RemoveObj (ob);
				return;
			}
		}

		if (ob->flags&FL_NEVERMARK)
			return;

		if ( (ob->flags&FL_NONMARK) && actorat[ob->tilex][ob->tiley])
			return;

		actorat[ob->tilex][ob->tiley] = ob;
		return;
	}

//
// transitional object
//
	ob->ticcount-=tics;
	while ( ob->ticcount <= 0)
	{
		think = ob->state->action;			// end of state action
		if (think)
		{
			think (ob);
			if (!ob->state)
			{
				RemoveObj (ob);
				return;
			}
		}

		ob->state = ob->state->next;

		if (!ob->state)
		{
			RemoveObj (ob);
			return;
		}

		if (!ob->state->tictime)
		{
			ob->ticcount = 0;
			goto think;
		}

		ob->ticcount += ob->state->tictime;
	}

think:
	//
	// think
	//
	think =	ob->state->think;
	if (think)
	{
		think (ob);
		if (!ob->state)
		{
			RemoveObj (ob);
			return;
		}
	}

	if (ob->flags&FL_NEVERMARK)
		return;

	if ( (ob->flags&FL_NONMARK) && actorat[ob->tilex][ob->tiley])
		return;

	actorat[ob->tilex][ob->tiley] = ob;
}

//==========================================================================


/*
===================
=
= PlayLoop
=
===================
*/
long funnyticount;


void PlayLoop (void)
{
	int		give;
	int	helmetangle;

	playstate = TimeCount = lasttimecount = 0;
	frameon = 0;
	running = false;
	anglefrac = 0;
	facecount = 0;
	funnyticount = 0;
	memset (buttonstate,0,sizeof(buttonstate));
	ClearPaletteShifts ();

	if (MousePresent)
		Mouse(MDelta);	// Clear accumulated mouse movement

	if (demoplayback)
		IN_StartAck ();

	do
	{
		if (virtualreality)
		{
			helmetangle = peek (0x40,0xf0);
			player->angle += helmetangle;
			if (player->angle >= ANGLES)
				player->angle -= ANGLES;
		}


		PollControls();

//
// actor thinking
//
		madenoise = false;

		MoveDoors ();
		MovePWalls ();

		for (obj = player;obj;obj = obj->next)
			DoActor (obj);

		UpdatePaletteShifts ();

		ThreeDRefresh ();

		//
		// MAKE FUNNY FACE IF BJ DOESN'T MOVE FOR AWHILE
		//
		#ifdef SPEAR
		funnyticount += tics;
		if (funnyticount > 30l*70)
		{
			funnyticount = 0;
			StatusDrawPic (17,4,BJWAITING1PIC+(US_RndT()&1));
			facecount = 0;
		}
		#endif

		gamestate.TimeCount+=tics;

		SD_Poll ();
		UpdateSoundLoc();	// JAB

		if (screenfaded)
			VW_FadeIn ();

		CheckKeys();

//
// debug aids
//
		if (singlestep)
		{
			VW_WaitVBL(14);
			lasttimecount = TimeCount;
		}
		if (extravbls)
			VW_WaitVBL(extravbls);

		if (demoplayback)
		{
			if (IN_CheckAck ())
			{
				IN_ClearKeysDown ();
				playstate = ex_abort;
			}
		}


		if (virtualreality)
		{
			player->angle -= helmetangle;
			if (player->angle < 0)
				player->angle += ANGLES;
		}

	}while (!playstate && !startgame);

	if (playstate != ex_died)
		FinishPaletteShifts ();
}
