---
title: "WL_GAME.C"
program: "Wolfenstein 3D"
program_slug: "wolf3d"
file_path: "WOLFSRC/WL_GAME.C"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/wolf3d/blob/master/WOLFSRC/WL_GAME.C"
year: 1992
author: "John Carmack, John Romero, Tom Hall"
slug: "wl-game-c"
order: 12
description: "Wolfenstein 3D's game logic file, showcasing groundbreaking techniques for immersive gameplay in 1992."

summary:
  - point: "Innovative sound positioning algorithm for immersive audio"
    link: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    link_label: "Wolfenstein 3D"
  - point: "Efficient map scanning and actor spawning system"
    link: "https://en.wikipedia.org/wiki/Level_design"
    link_label: "Level Design"
  - point: "Dynamic memory management for demo recording"
    link: "https://en.wikipedia.org/wiki/Demo_(computer_programming)"
    link_label: "Demo Recording"
  - point: "Optimized drawing routines for performance on limited hardware"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Complex enemy spawning logic tied to difficulty levels"
    link: "https://en.wikipedia.org/wiki/Game_AI"
    link_label: "Game AI"

enhancements:
  - id: "boolean-global-variables"
    line_start: 34
    line_end: 38
    title: "Global Variables: The Backbone of State"
    wikipedia_url: "https://en.wikipedia.org/wiki/Global_variable"
    image_url: ""
    image_caption: ""
    content: "This section defines global variables that track the game's state, such as `ingame` and `fizzlein`, which determine whether the game is active and whether a visual transition effect is occurring. In 1992, memory constraints on MS-DOS systems meant that developers had to carefully manage global variables to avoid unnecessary overhead. These variables are central to the game's logic, ensuring that various subsystems can access and modify the game's state efficiently. The use of global variables was a common practice in the era, though it would later be criticized for its potential to create tightly coupled code."
  - id: "sound-positioning-algorithm"
    line_start: 113
    line_end: 169
    title: "Sound Positioning: Immersive Audio in 1992"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_localization"
    image_url: ""
    image_caption: ""
    content: "The `SetSoundLoc` function calculates sound positioning based on the player's location and orientation, adjusting audio channels for a more immersive experience. This algorithm uses trigonometric calculations to determine distances to the left and right ears, storing results in `leftchannel` and `rightchannel`. The accompanying lookup tables (`righttable` and `lefttable`) precompute attenuation values to optimize performance. In 1992, sound hardware was limited, and achieving directional audio required ingenuity. John Carmack and his team implemented this feature to enhance the realism of Wolfenstein 3D, making players feel surrounded by the game's world. This technique influenced future games, setting a standard for immersive audio."
  - id: "map-scanning-and-actor-spawning"
    line_start: 221
    line_end: 623
    title: "Scanning Maps: Bringing Levels to Life"
    wikipedia_url: "https://en.wikipedia.org/wiki/Level_design"
    image_url: ""
    image_caption: ""
    content: "The `ScanInfoPlane` function processes the game's map data to spawn actors and mark special locations. Each tile in the map corresponds to a specific entity or feature, such as guards, doors, or secret areas. The function iterates over the map, using switch statements to determine the appropriate action for each tile. This approach reflects the constraints of early 1990s hardware, where memory and processing power were limited. By encoding game logic directly into map tiles, id Software streamlined level design and ensured efficient execution. This system laid the groundwork for modern level editors and procedural generation techniques."
  - id: "optimized-drawing-routines"
    line_start: 777
    line_end: 866
    title: "Drawing Borders: Performance Meets Aesthetics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_processing_unit"
    image_url: ""
    image_caption: ""
    content: "The `DrawPlayBorderSides` and related functions handle the rendering of the game's borders, ensuring that the play area remains visually distinct and free from graphical glitches. These routines use efficient drawing methods to minimize CPU usage, a critical consideration for MS-DOS systems with limited graphical capabilities. The use of vertical and horizontal lines (`VWB_Vlin` and `VWB_Hlin`) demonstrates id Software's attention to detail in optimizing performance while maintaining visual appeal. This focus on efficient rendering contributed to Wolfenstein 3D's smooth gameplay, a key factor in its success and influence on the first-person shooter genre."
  - id: "demo-recording-system"
    line_start: 914
    line_end: 977
    title: "Recording Demos: Capturing the Action"
    wikipedia_url: "https://en.wikipedia.org/wiki/Demo_(computer_programming)"
    image_url: ""
    image_caption: ""
    content: "The `StartDemoRecord` and `FinishDemoRecord` functions enable players to record gameplay demos, a feature that was both innovative and practical in 1992. Demos allowed players to share their experiences and provided developers with a tool for debugging and showcasing the game. The system dynamically allocates memory for demo data, locking it to prevent accidental overwrites. This careful memory management reflects the challenges of developing on MS-DOS, where resources were scarce. The ability to record and replay gameplay became a staple of PC gaming, influencing competitive gaming and machinima in later years."
  - id: "record-demo-mechanism"
    line_start: 979
    line_end: 1030
    title: "Capturing gameplay: the demo recorder"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `RecordDemo` function is a fascinating insight into how Wolfenstein 3D allowed players to record their gameplay. It begins by prompting the user to select a level, initializing the game state, and setting up the recording environment. This feature was particularly innovative for its time, enabling developers to debug gameplay sequences and players to share their experiences—a precursor to modern streaming and Let's Play videos. In 1992, the concept of recording gameplay was rare, especially on MS-DOS systems with limited memory and processing power. John Carmack's efficient coding ensured that demo recording did not disrupt the game's performance. The function's reliance on caching graphics chunks and managing memory reflects the constraints of the era, where every byte and cycle mattered. This mechanism laid the groundwork for future games to include replay systems and influenced how developers approached debugging and player engagement."
  - id: "play-demo-functionality"
    line_start: 1044
    line_end: 1100
    title: "Replaying the action: demo playback"
    wikipedia_url: "https://en.wikipedia.org/wiki/Gameplay"
    image_url: ""
    image_caption: ""
    content: "The `PlayDemo` function allows recorded gameplay to be replayed, serving as both a debugging tool and a way to showcase the game's mechanics. It loads the demo data, initializes the game state, and seamlessly transitions into playback mode. This feature highlights the technical ingenuity required to manage memory and data streams on MS-DOS hardware. In the early 1990s, such functionality was groundbreaking, as it enabled developers to analyze player behavior and refine game design. The function's ability to lock memory and preload graphics ensured smooth playback, a testament to Carmack's mastery of low-level programming. Demo playback became a staple in later games, evolving into cinematic replays and spectator modes in modern titles. Wolfenstein 3D's implementation was a pioneering step in this direction."
  - id: "death-animation-rotation"
    line_start: 1114
    line_end: 1226
    title: "Facing the attacker: death rotation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Computer_animation"
    image_url: ""
    image_caption: ""
    content: "The `Died` function is a dramatic piece of code that handles the player's death sequence, including a rotation to face the attacker. This involves calculating angles using trigonometry and smoothly animating the rotation. In 1992, such visual effects were rare in games, especially on MS-DOS systems. The use of `atan2` to compute the angle and the iterative adjustment of the player's orientation demonstrates Carmack's ability to extract maximum visual impact from limited hardware. The death sequence also includes fading the screen to red, a visceral touch that heightened the game's intensity. This attention to detail contributed to Wolfenstein 3D's immersive experience and set a standard for dramatic death animations in later games. The rotation mechanic itself became a subtle but influential design element, inspiring similar features in other first-person shooters."
  - id: "game-loop-core"
    line_start: 1238
    line_end: 1483
    title: "The beating heart: Wolfenstein's game loop"
    wikipedia_url: "https://en.wikipedia.org/wiki/Gameplay"
    image_url: ""
    image_caption: ""
    content: "The `GameLoop` function is the central hub of Wolfenstein 3D's gameplay, managing everything from player deaths to level transitions and secret levels. It is a masterclass in efficient game design, handling complex state changes while maintaining smooth performance. The loop includes mechanisms for restarting the game, handling player input, and transitioning between levels. It also integrates secret level mechanics, showcasing Tom Hall's creative level design. In 1992, game loops were a critical component of software engineering, especially on MS-DOS systems with limited resources. Carmack's implementation is both robust and flexible, allowing for dynamic gameplay while adhering to strict memory and processing constraints. The loop's ability to manage transitions and effects, such as fading screens and playing sounds, contributed to the game's immersive quality. This design philosophy influenced countless games that followed, establishing the game loop as a foundational concept in interactive software."

---

// WL_GAME.C

#include "WL_DEF.H"
#pragma hdrstop

#ifdef MYPROFILE
#include <TIME.H>
#endif


/*
=============================================================================

						 LOCAL CONSTANTS

=============================================================================
*/


/*
=============================================================================

						 GLOBAL VARIABLES

=============================================================================
*/

boolean		ingame,fizzlein;
unsigned	latchpics[NUMLATCHPICS];
gametype	gamestate;

long		spearx,speary;
unsigned	spearangle;
boolean		spearflag;

//
// ELEVATOR BACK MAPS - REMEMBER (-1)!!
//
int ElevatorBackTo[]={1,1,7,3,5,3};

void ScanInfoPlane (void);
void SetupGameLevel (void);
void DrawPlayScreen (void);
void LoadLatchMem (void);
void GameLoop (void);

/*
=============================================================================

						 LOCAL VARIABLES

=============================================================================
*/



//===========================================================================
//===========================================================================


/*
==========================
=
= SetSoundLoc - Given the location of an object (in terms of global
=	coordinates, held in globalsoundx and globalsoundy), munges the values
=	for an approximate distance from the left and right ear, and puts
=	those values into leftchannel and rightchannel.
=
= JAB
=
==========================
*/

	fixed	globalsoundx,globalsoundy;
	int		leftchannel,rightchannel;
#define ATABLEMAX 15
byte righttable[ATABLEMAX][ATABLEMAX * 2] = {
{ 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 6, 0, 0, 0, 0, 0, 1, 3, 5, 8, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 6, 4, 0, 0, 0, 0, 0, 2, 4, 6, 8, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 6, 6, 4, 1, 0, 0, 0, 1, 2, 4, 6, 8, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 6, 5, 4, 2, 1, 0, 1, 2, 3, 5, 7, 8, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 6, 5, 4, 3, 2, 2, 3, 3, 5, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 6, 6, 5, 4, 4, 4, 4, 5, 6, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 6, 6, 5, 5, 5, 6, 6, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 6, 6, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8}
};
byte lefttable[ATABLEMAX][ATABLEMAX * 2] = {
{ 8, 8, 8, 8, 8, 8, 8, 8, 5, 3, 1, 0, 0, 0, 0, 0, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 8, 6, 4, 2, 0, 0, 0, 0, 0, 4, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 8, 6, 4, 2, 1, 0, 0, 0, 1, 4, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 8, 7, 5, 3, 2, 1, 0, 1, 2, 4, 5, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 8, 8, 6, 5, 3, 3, 2, 2, 3, 4, 5, 6, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 6, 5, 4, 4, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 6, 6, 5, 5, 5, 6, 6, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 6, 6, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8},
{ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8}
};

void
SetSoundLoc(fixed gx,fixed gy)
{
	fixed	xt,yt;
	int		x,y;

//
// translate point to view centered coordinates
//
	gx -= viewx;
	gy -= viewy;

//
// calculate newx
//
	xt = FixedByFrac(gx,viewcos);
	yt = FixedByFrac(gy,viewsin);
	x = (xt - yt) >> TILESHIFT;

//
// calculate newy
//
	xt = FixedByFrac(gx,viewsin);
	yt = FixedByFrac(gy,viewcos);
	y = (yt + xt) >> TILESHIFT;

	if (y >= ATABLEMAX)
		y = ATABLEMAX - 1;
	else if (y <= -ATABLEMAX)
		y = -ATABLEMAX;
	if (x < 0)
		x = -x;
	if (x >= ATABLEMAX)
		x = ATABLEMAX - 1;
	leftchannel  =  lefttable[x][y + ATABLEMAX];
	rightchannel = righttable[x][y + ATABLEMAX];

#if 0
	CenterWindow(8,1);
	US_PrintSigned(leftchannel);
	US_Print(",");
	US_PrintSigned(rightchannel);
	VW_UpdateScreen();
#endif
}

/*
==========================
=
= SetSoundLocGlobal - Sets up globalsoundx & globalsoundy and then calls
=	UpdateSoundLoc() to transform that into relative channel volumes. Those
=	values are then passed to the Sound Manager so that they'll be used for
=	the next sound played (if possible).
=
= JAB
=
==========================
*/
void PlaySoundLocGlobal(word s,fixed gx,fixed gy)
{
	SetSoundLoc(gx,gy);
	SD_PositionSound(leftchannel,rightchannel);
	if (SD_PlaySound(s))
	{
		globalsoundx = gx;
		globalsoundy = gy;
	}
}

void UpdateSoundLoc(void)
{
	if (SoundPositioned)
	{
		SetSoundLoc(globalsoundx,globalsoundy);
		SD_SetPosition(leftchannel,rightchannel);
	}
}

/*
**	JAB End
*/


/*
==========================
=
= ClearMemory
=
==========================
*/

void ClearMemory (void)
{
	PM_UnlockMainMem();
	SD_StopDigitized();
	MM_SortMem ();
}


/*
==========================
=
= ScanInfoPlane
=
= Spawn all actors and mark down special places
=
==========================
*/

void ScanInfoPlane (void)
{
	unsigned	x,y,i,j;
	int			tile;
	unsigned	far	*start;

	start = mapsegs[1];
	for (y=0;y<mapheight;y++)
		for (x=0;x<mapwidth;x++)
		{
			tile = *start++;
			if (!tile)
				continue;

			switch (tile)
			{
			case 19:
			case 20:
			case 21:
			case 22:
				SpawnPlayer(x,y,NORTH+tile-19);
				break;

			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:

			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:

			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:

			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:

			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:

			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:						// TRUCK AND SPEAR!
			case 74:

				SpawnStatic(x,y,tile-23);
				break;

//
// P wall
//
			case 98:
				if (!loadedgame)
				  gamestate.secrettotal++;
				break;

//
// guard
//
			case 180:
			case 181:
			case 182:
			case 183:
				if (gamestate.difficulty<gd_hard)
					break;
				tile -= 36;
			case 144:
			case 145:
			case 146:
			case 147:
				if (gamestate.difficulty<gd_medium)
					break;
				tile -= 36;
			case 108:
			case 109:
			case 110:
			case 111:
				SpawnStand(en_guard,x,y,tile-108);
				break;


			case 184:
			case 185:
			case 186:
			case 187:
				if (gamestate.difficulty<gd_hard)
					break;
				tile -= 36;
			case 148:
			case 149:
			case 150:
			case 151:
				if (gamestate.difficulty<gd_medium)
					break;
				tile -= 36;
			case 112:
			case 113:
			case 114:
			case 115:
				SpawnPatrol(en_guard,x,y,tile-112);
				break;

			case 124:
				SpawnDeadGuard (x,y);
				break;
//
// officer
//
			case 188:
			case 189:
			case 190:
			case 191:
				if (gamestate.difficulty<gd_hard)
					break;
				tile -= 36;
			case 152:
			case 153:
			case 154:
			case 155:
				if (gamestate.difficulty<gd_medium)
					break;
				tile -= 36;
			case 116:
			case 117:
			case 118:
			case 119:
				SpawnStand(en_officer,x,y,tile-116);
				break;


			case 192:
			case 193:
			case 194:
			case 195:
				if (gamestate.difficulty<gd_hard)
					break;
				tile -= 36;
			case 156:
			case 157:
			case 158:
			case 159:
				if (gamestate.difficulty<gd_medium)
					break;
				tile -= 36;
			case 120:
			case 121:
			case 122:
			case 123:
				SpawnPatrol(en_officer,x,y,tile-120);
				break;


//
// ss
//
			case 198:
			case 199:
			case 200:
			case 201:
				if (gamestate.difficulty<gd_hard)
					break;
				tile -= 36;
			case 162:
			case 163:
			case 164:
			case 165:
				if (gamestate.difficulty<gd_medium)
					break;
				tile -= 36;
			case 126:
			case 127:
			case 128:
			case 129:
				SpawnStand(en_ss,x,y,tile-126);
				break;


			case 202:
			case 203:
			case 204:
			case 205:
				if (gamestate.difficulty<gd_hard)
					break;
				tile -= 36;
			case 166:
			case 167:
			case 168:
			case 169:
				if (gamestate.difficulty<gd_medium)
					break;
				tile -= 36;
			case 130:
			case 131:
			case 132:
			case 133:
				SpawnPatrol(en_ss,x,y,tile-130);
				break;

//
// dogs
//
			case 206:
			case 207:
			case 208:
			case 209:
				if (gamestate.difficulty<gd_hard)
					break;
				tile -= 36;
			case 170:
			case 171:
			case 172:
			case 173:
				if (gamestate.difficulty<gd_medium)
					break;
				tile -= 36;
			case 134:
			case 135:
			case 136:
			case 137:
				SpawnStand(en_dog,x,y,tile-134);
				break;


			case 210:
			case 211:
			case 212:
			case 213:
				if (gamestate.difficulty<gd_hard)
					break;
				tile -= 36;
			case 174:
			case 175:
			case 176:
			case 177:
				if (gamestate.difficulty<gd_medium)
					break;
				tile -= 36;
			case 138:
			case 139:
			case 140:
			case 141:
				SpawnPatrol(en_dog,x,y,tile-138);
				break;

//
// boss
//
#ifndef SPEAR
			case 214:
				SpawnBoss (x,y);
				break;
			case 197:
				SpawnGretel (x,y);
				break;
			case 215:
				SpawnGift (x,y);
				break;
			case 179:
				SpawnFat (x,y);
				break;
			case 196:
				SpawnSchabbs (x,y);
				break;
			case 160:
				SpawnFakeHitler (x,y);
				break;
			case 178:
				SpawnHitler (x,y);
				break;
#else
			case 106:
				SpawnSpectre (x,y);
				break;
			case 107:
				SpawnAngel (x,y);
				break;
			case 125:
				SpawnTrans (x,y);
				break;
			case 142:
				SpawnUber (x,y);
				break;
			case 143:
				SpawnWill (x,y);
				break;
			case 161:
				SpawnDeath (x,y);
				break;

#endif

//
// mutants
//
			case 252:
			case 253:
			case 254:
			case 255:
				if (gamestate.difficulty<gd_hard)
					break;
				tile -= 18;
			case 234:
			case 235:
			case 236:
			case 237:
				if (gamestate.difficulty<gd_medium)
					break;
				tile -= 18;
			case 216:
			case 217:
			case 218:
			case 219:
				SpawnStand(en_mutant,x,y,tile-216);
				break;

			case 256:
			case 257:
			case 258:
			case 259:
				if (gamestate.difficulty<gd_hard)
					break;
				tile -= 18;
			case 238:
			case 239:
			case 240:
			case 241:
				if (gamestate.difficulty<gd_medium)
					break;
				tile -= 18;
			case 220:
			case 221:
			case 222:
			case 223:
				SpawnPatrol(en_mutant,x,y,tile-220);
				break;

//
// ghosts
//
#ifndef SPEAR
			case 224:
				SpawnGhosts (en_blinky,x,y);
				break;
			case 225:
				SpawnGhosts (en_clyde,x,y);
				break;
			case 226:
				SpawnGhosts (en_pinky,x,y);
				break;
			case 227:
				SpawnGhosts (en_inky,x,y);
				break;
#endif
			}

		}
}

//==========================================================================

/*
==================
=
= SetupGameLevel
=
==================
*/

void SetupGameLevel (void)
{
	int	x,y,i;
	unsigned	far *map,tile,spot;


	if (!loadedgame)
	{
	 gamestate.TimeCount=
	 gamestate.secrettotal=
	 gamestate.killtotal=
	 gamestate.treasuretotal=
	 gamestate.secretcount=
	 gamestate.killcount=
	 gamestate.treasurecount=0;
	}

	if (demoplayback || demorecord)
		US_InitRndT (false);
	else
		US_InitRndT (true);

//
// load the level
//
	CA_CacheMap (gamestate.mapon+10*gamestate.episode);
	mapon-=gamestate.episode*10;

	mapwidth = mapheaderseg[mapon]->width;
	mapheight = mapheaderseg[mapon]->height;

	if (mapwidth != 64 || mapheight != 64)
		Quit ("Map not 64*64!");


//
// copy the wall data to a data segment array
//
	memset (tilemap,0,sizeof(tilemap));
	memset (actorat,0,sizeof(actorat));
	map = mapsegs[0];
	for (y=0;y<mapheight;y++)
		for (x=0;x<mapwidth;x++)
		{
			tile = *map++;
			if (tile<AREATILE)
			{
			// solid wall
				tilemap[x][y] = tile;
				(unsigned)actorat[x][y] = tile;
			}
			else
			{
			// area floor
				tilemap[x][y] = 0;
				(unsigned)actorat[x][y] = 0;
			}
		}

//
// spawn doors
//
	InitActorList ();			// start spawning things with a clean slate
	InitDoorList ();
	InitStaticList ();

	map = mapsegs[0];
	for (y=0;y<mapheight;y++)
		for (x=0;x<mapwidth;x++)
		{
			tile = *map++;
			if (tile >= 90 && tile <= 101)
			{
			// door
				switch (tile)
				{
				case 90:
				case 92:
				case 94:
				case 96:
				case 98:
				case 100:
					SpawnDoor (x,y,1,(tile-90)/2);
					break;
				case 91:
				case 93:
				case 95:
				case 97:
				case 99:
				case 101:
					SpawnDoor (x,y,0,(tile-91)/2);
					break;
				}
			}
		}

//
// spawn actors
//
	ScanInfoPlane ();

//
// take out the ambush markers
//
	map = mapsegs[0];
	for (y=0;y<mapheight;y++)
		for (x=0;x<mapwidth;x++)
		{
			tile = *map++;
			if (tile == AMBUSHTILE)
			{
				tilemap[x][y] = 0;
				if ( (unsigned)actorat[x][y] == AMBUSHTILE)
					actorat[x][y] = NULL;

				if (*map >= AREATILE)
					tile = *map;
				if (*(map-1-mapwidth) >= AREATILE)
					tile = *(map-1-mapwidth);
				if (*(map-1+mapwidth) >= AREATILE)
					tile = *(map-1+mapwidth);
				if ( *(map-2) >= AREATILE)
					tile = *(map-2);

				*(map-1) = tile;
			}
		}



//
// have the caching manager load and purge stuff to make sure all marks
// are in memory
//
	CA_LoadAllSounds ();

}


//==========================================================================


/*
===================
=
= DrawPlayBorderSides
=
= To fix window overwrites
=
===================
*/

void DrawPlayBorderSides (void)
{
	int	xl,yl;

	xl = 160-viewwidth/2;
	yl = (200-STATUSLINES-viewheight)/2;

	VWB_Bar (0,0,xl-1,200-STATUSLINES,127);
	VWB_Bar (xl+viewwidth+1,0,xl-2,200-STATUSLINES,127);

	VWB_Vlin (yl-1,yl+viewheight,xl-1,0);
	VWB_Vlin (yl-1,yl+viewheight,xl+viewwidth,125);
}


/*
===================
=
= DrawAllPlayBorderSides
=
===================
*/

void DrawAllPlayBorderSides (void)
{
	unsigned	i,temp;

	temp = bufferofs;
	for (i=0;i<3;i++)
	{
		bufferofs = screenloc[i];
		DrawPlayBorderSides ();
	}
	bufferofs = temp;
}

/*
===================
=
= DrawPlayBorder
=
===================
*/
void DrawAllPlayBorder (void)
{
	unsigned	i,temp;

	temp = bufferofs;
	for (i=0;i<3;i++)
	{
		bufferofs = screenloc[i];
		DrawPlayBorder ();
	}
	bufferofs = temp;
}

/*
===================
=
= DrawPlayBorder
=
===================
*/

void DrawPlayBorder (void)
{
	int	xl,yl;

	VWB_Bar (0,0,320,200-STATUSLINES,127);

	xl = 160-viewwidth/2;
	yl = (200-STATUSLINES-viewheight)/2;
	VWB_Bar (xl,yl,viewwidth,viewheight,0);

	VWB_Hlin (xl-1,xl+viewwidth,yl-1,0);
	VWB_Hlin (xl-1,xl+viewwidth,yl+viewheight,125);
	VWB_Vlin (yl-1,yl+viewheight,xl-1,0);
	VWB_Vlin (yl-1,yl+viewheight,xl+viewwidth,125);
	VWB_Plot (xl-1,yl+viewheight,124);
}



/*
===================
=
= DrawPlayScreen
=
===================
*/

void DrawPlayScreen (void)
{
	int	i,j,p,m;
	unsigned	temp;

	VW_FadeOut ();

	temp = bufferofs;

	CA_CacheGrChunk (STATUSBARPIC);

	for (i=0;i<3;i++)
	{
		bufferofs = screenloc[i];
		DrawPlayBorder ();
		VWB_DrawPic (0,200-STATUSLINES,STATUSBARPIC);
	}

	bufferofs = temp;

	UNCACHEGRCHUNK (STATUSBARPIC);

	DrawFace ();
	DrawHealth ();
	DrawLives ();
	DrawLevel ();
	DrawAmmo ();
	DrawKeys ();
	DrawWeapon ();
	DrawScore ();
}



//==========================================================================

/*
==================
=
= StartDemoRecord
=
==================
*/

#define MAXDEMOSIZE	8192

void StartDemoRecord (int levelnumber)
{
	MM_GetPtr (&demobuffer,MAXDEMOSIZE);
	MM_SetLock (&demobuffer,true);
	demoptr = (char far *)demobuffer;
	lastdemoptr = demoptr+MAXDEMOSIZE;

	*demoptr = levelnumber;
	demoptr += 4;				// leave space for length
	demorecord = true;
}


/*
==================
=
= FinishDemoRecord
=
==================
*/

char	demoname[13] = "DEMO?.";

void FinishDemoRecord (void)
{
	long	length,level;

	demorecord = false;

	length = demoptr - (char far *)demobuffer;

	demoptr = ((char far *)demobuffer)+1;
	*(unsigned far *)demoptr = length;

	CenterWindow(24,3);
	PrintY+=6;
	US_Print(" Demo number (0-9):");
	VW_UpdateScreen();

	if (US_LineInput (px,py,str,NULL,true,2,0))
	{
		level = atoi (str);
		if (level>=0 && level<=9)
		{
			demoname[4] = '0'+level;
			CA_WriteFile (demoname,(void far *)demobuffer,length);
		}
	}


	MM_FreePtr (&demobuffer);
}

//==========================================================================

/*
==================
=
= RecordDemo
=
= Fades the screen out, then starts a demo.  Exits with the screen faded
=
==================
*/

void RecordDemo (void)
{
	int level,esc;

	CenterWindow(26,3);
	PrintY+=6;
	CA_CacheGrChunk(STARTFONT);
	fontnumber=0;
	US_Print("  Demo which level(1-10):");
	VW_UpdateScreen();
	VW_FadeIn ();
	esc = !US_LineInput (px,py,str,NULL,true,2,0);
	if (esc)
		return;

	level = atoi (str);
	level--;

	SETFONTCOLOR(0,15);
	VW_FadeOut ();

#ifndef SPEAR
	NewGame (gd_hard,level/10);
	gamestate.mapon = level%10;
#else
	NewGame (gd_hard,0);
	gamestate.mapon = level;
#endif

	StartDemoRecord (level);

	DrawPlayScreen ();
	VW_FadeIn ();

	startgame = false;
	demorecord = true;

	SetupGameLevel ();
	StartMusic ();
	PM_CheckMainMem ();
	fizzlein = true;

	PlayLoop ();

	demoplayback = false;

	StopMusic ();
	VW_FadeOut ();
	ClearMemory ();

	FinishDemoRecord ();
}

//==========================================================================

/*
==================
=
= PlayDemo
=
= Fades the screen out, then starts a demo.  Exits with the screen faded
=
==================
*/

void PlayDemo (int demonumber)
{
	int length;

#ifdef DEMOSEXTERN
// debug: load chunk
#ifndef SPEARDEMO
	int dems[4]={T_DEMO0,T_DEMO1,T_DEMO2,T_DEMO3};
#else
	int dems[1]={T_DEMO0};
#endif

	CA_CacheGrChunk(dems[demonumber]);
	demoptr = grsegs[dems[demonumber]];
	MM_SetLock (&grsegs[dems[demonumber]],true);
#else
	demoname[4] = '0'+demonumber;
	CA_LoadFile (demoname,&demobuffer);
	MM_SetLock (&demobuffer,true);
	demoptr = (char far *)demobuffer;
#endif

	NewGame (1,0);
	gamestate.mapon = *demoptr++;
	gamestate.difficulty = gd_hard;
	length = *((unsigned far *)demoptr)++;
	demoptr++;
	lastdemoptr = demoptr-4+length;

	VW_FadeOut ();

	SETFONTCOLOR(0,15);
	DrawPlayScreen ();
	VW_FadeIn ();

	startgame = false;
	demoplayback = true;

	SetupGameLevel ();
	StartMusic ();
	PM_CheckMainMem ();
	fizzlein = true;

	PlayLoop ();

#ifdef DEMOSEXTERN
	UNCACHEGRCHUNK(dems[demonumber]);
#else
	MM_FreePtr (&demobuffer);
#endif

	demoplayback = false;

	StopMusic ();
	VW_FadeOut ();
	ClearMemory ();
}

//==========================================================================

/*
==================
=
= Died
=
==================
*/

#define DEATHROTATE 2

void Died (void)
{
	float	fangle;
	long	dx,dy;
	int		iangle,curangle,clockwise,counter,change;

	gamestate.weapon = -1;			// take away weapon
	SD_PlaySound (PLAYERDEATHSND);
//
// swing around to face attacker
//
	dx = killerobj->x - player->x;
	dy = player->y - killerobj->y;

	fangle = atan2(dy,dx);			// returns -pi to pi
	if (fangle<0)
		fangle = M_PI*2+fangle;

	iangle = fangle/(M_PI*2)*ANGLES;

	if (player->angle > iangle)
	{
		counter = player->angle - iangle;
		clockwise = ANGLES-player->angle + iangle;
	}
	else
	{
		clockwise = iangle - player->angle;
		counter = player->angle + ANGLES-iangle;
	}

	curangle = player->angle;

	if (clockwise<counter)
	{
	//
	// rotate clockwise
	//
		if (curangle>iangle)
			curangle -= ANGLES;
		do
		{
			change = tics*DEATHROTATE;
			if (curangle + change > iangle)
				change = iangle-curangle;

			curangle += change;
			player->angle += change;
			if (player->angle >= ANGLES)
				player->angle -= ANGLES;

			ThreeDRefresh ();
			CalcTics ();
		} while (curangle != iangle);
	}
	else
	{
	//
	// rotate counterclockwise
	//
		if (curangle<iangle)
			curangle += ANGLES;
		do
		{
			change = -tics*DEATHROTATE;
			if (curangle + change < iangle)
				change = iangle-curangle;

			curangle += change;
			player->angle += change;
			if (player->angle < 0)
				player->angle += ANGLES;

			ThreeDRefresh ();
			CalcTics ();
		} while (curangle != iangle);
	}

//
// fade to red
//
	FinishPaletteShifts ();

	bufferofs += screenofs;
	VW_Bar (0,0,viewwidth,viewheight,4);
	IN_ClearKeysDown ();
	FizzleFade(bufferofs,displayofs+screenofs,viewwidth,viewheight,70,false);
	bufferofs -= screenofs;
	IN_UserInput(100);
	SD_WaitSoundDone ();

	if (tedlevel == false)	// SO'S YA DON'T GET KILLED WHILE LAUNCHING!
	  gamestate.lives--;

	if (gamestate.lives > -1)
	{
		gamestate.health = 100;
		gamestate.weapon = gamestate.bestweapon
			= gamestate.chosenweapon = wp_pistol;
		gamestate.ammo = STARTAMMO;
		gamestate.keys = 0;
		gamestate.attackframe = gamestate.attackcount =
		gamestate.weaponframe = 0;

		DrawKeys ();
		DrawWeapon ();
		DrawAmmo ();
		DrawHealth ();
		DrawFace ();
		DrawLives ();
	}

}

//==========================================================================

/*
===================
=
= GameLoop
=
===================
*/

void GameLoop (void)
{
	int i,xl,yl,xh,yh;
	char num[20];
	boolean	died;
#ifdef MYPROFILE
	clock_t start,end;
#endif

restartgame:
	ClearMemory ();
	SETFONTCOLOR(0,15);
	DrawPlayScreen ();
	died = false;
restart:
	do
	{
		if (!loadedgame)
		  gamestate.score = gamestate.oldscore;
		DrawScore();

		startgame = false;
		if (loadedgame)
			loadedgame = false;
		else
			SetupGameLevel ();

#ifdef SPEAR
		if (gamestate.mapon == 20)	// give them the key allways
		{
			gamestate.keys |= 1;
			DrawKeys ();
		}
#endif

		ingame = true;
		StartMusic ();
		PM_CheckMainMem ();
		if (!died)
			PreloadGraphics ();
		else
			died = false;

		fizzlein = true;
		DrawLevel ();

startplayloop:
		PlayLoop ();

#ifdef SPEAR
		if (spearflag)
		{
			SD_StopSound();
			SD_PlaySound(GETSPEARSND);
			if (DigiMode != sds_Off)
			{
				long lasttimecount = TimeCount;

				while(TimeCount < lasttimecount+150)
				//while(DigiPlaying!=false)
					SD_Poll();
			}
			else
				SD_WaitSoundDone();

			ClearMemory ();
			gamestate.oldscore = gamestate.score;
			gamestate.mapon = 20;
			SetupGameLevel ();
			StartMusic ();
			PM_CheckMainMem ();
			player->x = spearx;
			player->y = speary;
			player->angle = spearangle;
			spearflag = false;
			Thrust (0,0);
			goto startplayloop;
		}
#endif

		StopMusic ();
		ingame = false;

		if (demorecord && playstate != ex_warped)
			FinishDemoRecord ();

		if (startgame || loadedgame)
			goto restartgame;

		switch (playstate)
		{
		case ex_completed:
		case ex_secretlevel:
			gamestate.keys = 0;
			DrawKeys ();
			VW_FadeOut ();

			ClearMemory ();

			LevelCompleted ();		// do the intermission
#ifdef SPEARDEMO
			if (gamestate.mapon == 1)
			{
				died = true;			// don't "get psyched!"

				VW_FadeOut ();

				ClearMemory ();

				CheckHighScore (gamestate.score,gamestate.mapon+1);

				#pragma warn -sus
				#ifndef JAPAN
				_fstrcpy(MainMenu[viewscores].string,STR_VS);
				#endif
				MainMenu[viewscores].routine = CP_ViewScores;
				#pragma warn +sus

				return;
			}
#endif

#ifdef JAPDEMO
			if (gamestate.mapon == 3)
			{
				died = true;			// don't "get psyched!"

				VW_FadeOut ();

				ClearMemory ();

				CheckHighScore (gamestate.score,gamestate.mapon+1);

				#pragma warn -sus
				#ifndef JAPAN
				_fstrcpy(MainMenu[viewscores].string,STR_VS);
				#endif
				MainMenu[viewscores].routine = CP_ViewScores;
				#pragma warn +sus

				return;
			}
#endif

			gamestate.oldscore = gamestate.score;

#ifndef SPEAR
			//
			// COMING BACK FROM SECRET LEVEL
			//
			if (gamestate.mapon == 9)
				gamestate.mapon = ElevatorBackTo[gamestate.episode];	// back from secret
			else
			//
			// GOING TO SECRET LEVEL
			//
			if (playstate == ex_secretlevel)
				gamestate.mapon = 9;
#else

#define FROMSECRET1		3
#define FROMSECRET2		11

			//
			// GOING TO SECRET LEVEL
			//
			if (playstate == ex_secretlevel)
				switch(gamestate.mapon)
				{
				 case FROMSECRET1: gamestate.mapon = 18; break;
				 case FROMSECRET2: gamestate.mapon = 19; break;
				}
			else
			//
			// COMING BACK FROM SECRET LEVEL
			//
			if (gamestate.mapon == 18 || gamestate.mapon == 19)
				switch(gamestate.mapon)
				{
				 case 18: gamestate.mapon = FROMSECRET1+1; break;
				 case 19: gamestate.mapon = FROMSECRET2+1; break;
				}
#endif
			else
			//
			// GOING TO NEXT LEVEL
			//
				gamestate.mapon++;


			break;

		case ex_died:
			Died ();
			died = true;			// don't "get psyched!"

			if (gamestate.lives > -1)
				break;				// more lives left

			VW_FadeOut ();

			ClearMemory ();

			CheckHighScore (gamestate.score,gamestate.mapon+1);

			#pragma warn -sus
			#ifndef JAPAN
			_fstrcpy(MainMenu[viewscores].string,STR_VS);
			#endif
			MainMenu[viewscores].routine = CP_ViewScores;
			#pragma warn +sus

			return;

		case ex_victorious:

#ifndef SPEAR
			VW_FadeOut ();
#else
			VL_FadeOut (0,255,0,17,17,300);
#endif
			ClearMemory ();

			Victory ();

			ClearMemory ();

			CheckHighScore (gamestate.score,gamestate.mapon+1);

			#pragma warn -sus
			#ifndef JAPAN
			_fstrcpy(MainMenu[viewscores].string,STR_VS);
			#endif
			MainMenu[viewscores].routine = CP_ViewScores;
			#pragma warn +sus

			return;

		default:
			ClearMemory ();
			break;
		}

	} while (1);

}
