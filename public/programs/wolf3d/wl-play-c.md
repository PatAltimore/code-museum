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
description: "This file implements core gameplay mechanics and user input handling for Wolfenstein 3D, showcasing innovative techniques for real-time interaction in early 1990s gaming."

summary:
  - point: "Dynamic actor list management for real-time gameplay"
    link: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    link_label: "Wolfenstein 3D"
  - point: "Cheat codes and debug modes embedded for testing and fun"
    link: "https://en.wikipedia.org/wiki/Cheat_code"
    link_label: "Cheat code"
  - point: "Multi-device input polling for keyboard, mouse, and joystick"
    link: "https://en.wikipedia.org/wiki/Joystick"
    link_label: "Joystick"
  - point: "Efficient memory management for music and sound assets"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory management"
  - point: "Innovative player control scaling based on input device"
    link: "https://en.wikipedia.org/wiki/Input_device"
    link_label: "Input device"

enhancements:
  - id: "multi-device-input-polling"
    line_start: 246
    line_end: 268
    title: "Multi-Device Input: Keyboard, Mouse, Joystick"
    wikipedia_url: "https://en.wikipedia.org/wiki/Input_device"
    image_url: ""
    image_caption: ""
    content: "Wolfenstein 3D's input polling system is a masterclass in accommodating diverse hardware setups. The code handles input from keyboards, mice, and joysticks, ensuring that players can interact with the game using their preferred device. Functions like `PollKeyboardButtons`, `PollMouseButtons`, and `PollJoystickButtons` check the state of each input device, updating the game's internal control variables accordingly. In 1992, hardware diversity was a significant challenge for developers. MS-DOS systems supported a wide range of peripherals, each with its quirks. The id Software team, led by John Carmack, designed this input system to abstract away hardware differences, providing a consistent gameplay experience regardless of the device used. This approach influenced later games and game engines, where multi-device input handling became a standard feature. Modern engines like Unity and Unreal Engine include robust input systems that trace their lineage back to innovations like this. The ability to seamlessly integrate various input methods remains a cornerstone of game development."
  - id: "cheat-codes-and-debug-modes"
    line_start: 606
    line_end: 835
    title: "Cheat Codes: Fun and Functional Debugging"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cheat_code"
    image_url: ""
    image_caption: ""
    content: "The `CheckKeys` function implements cheat codes and debug modes, a hallmark of early PC gaming. Players could activate cheats like god mode or infinite ammo by pressing specific key combinations, such as 'TAB-G-F10' or 'MLI'. These codes served dual purposes: they provided entertainment for players and allowed developers to test the game more efficiently. Cheat codes were a common feature in the early 1990s, reflecting the era's playful approach to software development. John Romero, known for his sense of humor, likely contributed to the inclusion of these Easter eggs. Debug modes, on the other hand, were essential for testing complex interactions and ensuring stability in a game as ambitious as Wolfenstein 3D. The legacy of cheat codes persists in modern gaming, where they often appear as unlockable features or developer tools. Debug modes have evolved into sophisticated debugging tools integrated into game engines, enabling developers to test and optimize their creations with unprecedented precision."
  - id: "dynamic-actor-list-management"
    line_start: 875
    line_end: 901
    title: "Dynamic Actor List: Real-Time Gameplay Innovation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `InitActorList` function initializes a dynamic linked list to manage actors in the game world. This list starts with the player object and expands as new actors are spawned. The linked list design ensures that newly spawned actors can immediately react within the same frame, a critical feature for maintaining the fast-paced, immersive gameplay of Wolfenstein 3D. In 1992, memory constraints on MS-DOS systems required developers to implement efficient data structures like this to handle dynamic entities without exhausting resources. The linked list approach was influenced by prior work in game development, where dynamic object management was becoming standard for real-time simulations. John Carmack and the id Software team adapted this technique to suit the specific needs of Wolfenstein 3D, ensuring seamless interactions between player and AI-controlled enemies. This technique laid the groundwork for more sophisticated object management systems in later games, such as Doom and Quake, where dynamic entities became even more complex. The concept of actor lists continues to be used in modern game engines like Unity and Unreal Engine, albeit with more advanced memory management and threading capabilities."
  - id: "efficient-music-memory-management"
    line_start: 991
    line_end: 1010
    title: "Efficient Music Management: Memory Constraints"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `StopMusic` and `StartMusic` functions manage the game's music assets, ensuring efficient use of memory. When music is stopped, the code purges and unlocks memory segments associated with audio data, freeing up resources for other tasks. This approach was critical in 1992, when MS-DOS systems had limited RAM and developers had to carefully balance memory usage. John Carmack's expertise in optimizing software for constrained hardware environments is evident here. By dynamically managing audio assets, id Software ensured that Wolfenstein 3D could deliver a rich auditory experience without compromising performance. This technique influenced later games and engines, where dynamic asset management became a standard practice. Modern engines like Unity and Unreal Engine use similar principles to handle audio, textures, and other assets, albeit with far greater memory and processing power at their disposal."
  - id: "start-music-handler"
    line_start: 1015
    line_end: 1043
    title: "How Wolfenstein 3D Controlled Its Music"
    wikipedia_url: "https://en.wikipedia.org/wiki/AdLib"
    image_url: ""
    image_caption: ""
    content: "This subroutine, `StartMusic`, handles the initialization and playback of music in Wolfenstein 3D. It begins by turning off any currently playing music and selecting the appropriate track based on the player's current map and episode. The routine uses the AdLib sound card, a popular choice for PC gaming in the early 1990s, to deliver high-quality synthesized music. The code ensures error handling through the `MM_BombOnError` function, preventing crashes if audio resources fail to load. Once the audio chunk is successfully cached, the music is locked in memory and played using the `SD_StartMusic` function. In 1992, sound cards like the AdLib were becoming standard for PC gaming, enabling richer audio experiences compared to the basic PC speaker. John Carmack and the id Software team leveraged this hardware to enhance immersion in Wolfenstein 3D. The modular design of this routine allowed easy adaptation for different hardware configurations, a necessity given the fragmented PC market. This approach influenced later games, including Doom, which expanded on dynamic music systems to react to gameplay intensity. The use of modular audio handling became a standard in game development, laying the groundwork for modern audio engines like FMOD and Wwise."
  - id: "palette-shifting-effects"
    line_start: 1070
    line_end: 1118
    title: "The Palette Shifting That Simulated Damage"
    wikipedia_url: "https://en.wikipedia.org/wiki/Color_palette"
    image_url: ""
    image_caption: ""
    content: "The `InitRedShifts` subroutine creates color palette shifts to simulate visual effects like damage and bonus flashes. It generates intermediate palettes by fading the base game palette toward red or white, creating the illusion of intensity. Each shift is calculated by interpolating color values over predefined steps, ensuring smooth transitions. In the early 1990s, palette manipulation was a common technique for creating visual effects on limited hardware. PCs of the era often had fixed palettes, and changing colors dynamically was a clever way to simulate effects without requiring additional graphical assets. This technique was particularly effective for Wolfenstein 3D, where hardware constraints limited the complexity of visual effects. Palette shifting became a hallmark of early PC games, influencing titles like Doom and Quake, which used similar techniques for environmental lighting and damage indicators. Modern graphics engines have largely replaced palette manipulation with shaders and dynamic lighting, but the principles of efficient visual effects remain rooted in innovations like this."
  - id: "actor-state-management"
    line_start: 1252
    line_end: 1353
    title: "How Wolfenstein 3D Made Actors Think"
    wikipedia_url: "https://en.wikipedia.org/wiki/Finite-state_machine"
    image_url: ""
    image_caption: ""
    content: "The `DoActor` subroutine is responsible for managing the behavior of game actors, including enemies and interactive objects. It uses a finite-state machine approach, where each actor has a current state that determines its actions. The routine checks whether the actor is active and visible to the player, then processes its logic based on the state. Transitional states, such as animations or timed actions, are handled by decrementing a timer (`ticcount`) and advancing to the next state when the timer expires. Finite-state machines were a popular choice for game AI in the early 1990s due to their simplicity and efficiency. Wolfenstein 3D's implementation allowed for dynamic interactions, such as enemies reacting to player actions or transitioning between patrol and attack modes. This design was influenced by earlier arcade games and adapted to fit the constraints of PC hardware. The actor logic in Wolfenstein 3D laid the groundwork for more complex AI systems in Doom and Quake, where states became more nuanced and included pathfinding and environmental awareness. Today, finite-state machines are still used in game development, often as part of larger AI frameworks."
  - id: "play-loop-core"
    line_start: 1368
    line_end: 1471
    title: "The Play Loop That Defined FPS Games"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_loop"
    image_url: ""
    image_caption: ""
    content: "The `PlayLoop` subroutine is the heart of Wolfenstein 3D's gameplay. It continuously updates the game state, processes player input, moves actors, and refreshes the screen. The loop begins by initializing variables and clearing palette shifts, ensuring a clean slate for each frame. It then polls controls, updates actor states, and handles visual effects like palette shifts. The routine also includes a humorous feature where BJ Blazkowicz makes a funny face if the player remains idle for too long. Game loops like this were a fundamental part of early game programming, ensuring smooth gameplay on hardware with limited processing power. Wolfenstein 3D's loop was optimized to handle real-time input and rendering while maintaining a consistent frame rate, a critical achievement for the fast-paced action of an FPS. This design influenced countless games, including Doom, which refined the game loop to support more complex environments and mechanics. The concept of a central game loop remains essential in modern game engines like Unity and Unreal Engine, demonstrating the enduring legacy of this approach."

---

```cpp
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
```
