---
title: "WL_MAIN.C"
program: "Wolfenstein 3D"
program_slug: "wolf3d"
file_path: "WOLFSRC/WL_MAIN.C"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/wolf3d/blob/master/WOLFSRC/WL_MAIN.C"
year: 1992
author: "John Carmack, John Romero, Tom Hall"
slug: "wl-main-c"
order: 5
description: "The central execution file of Wolfenstein 3D, showcasing foundational game systems and hardware optimizations."

summary:
  - point: "Dynamic configuration handling for hardware compatibility"
    link: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    link_label: "Wolfenstein 3D"
  - point: "Innovative use of projection math for 3D rendering"
    link: "https://en.wikipedia.org/wiki/3D_projection"
    link_label: "3D Projection"
  - point: "Efficient sound mapping for limited hardware"
    link: "https://en.wikipedia.org/wiki/Sound_Blaster"
    link_label: "Sound Blaster"
  - point: "Memory management techniques for constrained environments"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Game save/load system with checksum validation"
    link: "https://en.wikipedia.org/wiki/Data_integrity"
    link_label: "Data Integrity"

enhancements:
  - id: "read-config-dynamic-hardware-detection"
    line_start: 82
    line_end: 182
    title: "Dynamic Config: Adapting to Hardware Limits"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `ReadConfig` function dynamically configures the game based on the available hardware. It reads a configuration file (`CONFIG.`) to set up sound modes, joystick settings, and screen size. If the file is missing, the function defaults to hardware detection, enabling features like AdLib sound if supported. In 1992, hardware compatibility was a major challenge for developers, as MS-DOS systems varied widely in capabilities. This approach ensured Wolfenstein 3D could run smoothly on a broad range of setups, from basic PCs to high-end machines with Sound Blaster cards. By detecting hardware and adjusting settings, id Software avoided alienating players with incompatible configurations. This technique influenced later games, which adopted similar dynamic detection methods to maximize compatibility."
  - id: "write-config-preserving-player-settings"
    line_start: 185
    line_end: 224
    title: "Saving Player Preferences to Disk"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_persistence"
    image_url: ""
    image_caption: ""
    content: "The `WriteConfig` function writes player settings and high scores to disk, ensuring persistence across sessions. It saves sound modes, joystick configurations, and view size, among other parameters. This was a crucial feature in an era when games often lacked save functionality, forcing players to reconfigure settings every time they launched the game. By storing preferences, Wolfenstein 3D enhanced user experience and set a precedent for modern games, where saving configurations is standard. The use of binary file formats for compactness and speed reflects the constraints of early PCs, where disk space and processing power were limited."
  - id: "patch386-optimizing-for-32-bit-cpus"
    line_start: 241
    line_end: 262
    title: "Optimizing for 386 CPUs: A Clever Hack"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_80386"
    image_url: ""
    image_caption: ""
    content: "The `Patch386` function checks if the system is running on a 386 processor and applies optimizations accordingly. The Intel 80386 introduced 32-bit instructions, which significantly improved performance over older 16-bit processors. By detecting this hardware and enabling specific optimizations, id Software ensured Wolfenstein 3D could leverage the capabilities of modern CPUs while remaining compatible with older systems. This dual-path approach was critical in the early '90s, as the gaming market was transitioning from 286 to 386 processors. The technique demonstrated id Software's commitment to performance and influenced other developers to adopt hardware-specific optimizations."
  - id: "save-the-game-checksum-validation"
    line_start: 315
    line_end: 431
    title: "Saving Games with Integrity Checks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_integrity"
    image_url: ""
    image_caption: ""
    content: "The `SaveTheGame` function writes the game's state to disk, including player data, level progress, and object positions. It calculates a checksum for the saved data to ensure integrity during future loads. This approach prevents corrupted or tampered save files from breaking the game. In the early '90s, data corruption was a common issue due to unreliable storage media like floppy disks. By implementing checksum validation, id Software added a layer of robustness to Wolfenstein 3D, enhancing player trust. This technique became a standard in game development, influencing save systems in titles like Doom and Quake."
  - id: "build-tables-precise-math-for-3d-rendering"
    line_start: 586
    line_end: 626
    title: "Building Math Tables for Fast 3D Rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/3D_projection"
    image_url: ""
    image_caption: ""
    content: "The `BuildTables` function precomputes mathematical tables for 3D rendering, including tangent and sine values. These tables allow the game to perform complex calculations quickly during gameplay, avoiding the need for expensive real-time computations. In 1992, CPUs lacked floating-point units, making trigonometric calculations slow. By precomputing values, id Software optimized Wolfenstein 3D for the limited hardware of the time. This technique was instrumental in achieving the game's smooth scrolling and fast-paced action. Precomputed tables became a hallmark of early 3D games, influencing engines like Doom and Unreal."
  - id: "calc-projection-geometry-for-3d-world"
    line_start: 631
    line_end: 690
    title: "Calculating Projection: Geometry Meets Gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/3D_projection"
    image_url: ""
    image_caption: ""
    content: "The `CalcProjection` function calculates the geometric projection of the game world onto the player's screen. Using focal length and view width, it determines scaling factors and pixel angles for rendering. This math is the backbone of Wolfenstein 3D's pseudo-3D environment, where walls and objects appear to recede into the distance. In the early '90s, true 3D rendering was computationally prohibitive, so developers relied on tricks like this to simulate depth. John Carmack's mastery of projection math enabled Wolfenstein 3D to deliver an immersive experience on hardware that was never designed for 3D graphics. The technique laid the groundwork for future engines, including Doom and Quake."
  - id: "init-digi-map-sound-mapping-for-gameplay"
    line_start: 962
    line_end: 1011
    title: "Mapping Sounds to Gameplay Events"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_Blaster"
    image_url: ""
    image_caption: ""
    content: "The `InitDigiMap` function maps sound effects to gameplay events using a lookup table. This allows the game to play specific sounds, such as gunfire or enemy screams, in response to player actions. In the early '90s, sound cards like the Sound Blaster were becoming popular, but their APIs were limited. By creating a custom mapping system, id Software ensured Wolfenstein 3D could deliver rich audio experiences tailored to its gameplay. This approach influenced sound systems in later games, where event-driven audio became standard."
  - id: "dynamic-music-selection-dojukebox"
    line_start: 1012
    line_end: 1131
    title: "Dynamic Music Selection: The DoJukebox Function"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The DoJukebox function allows players to select and play music tracks dynamically during gameplay. It initializes a menu with selectable tracks, caches necessary graphical and sound assets, and handles user input to start and stop music playback. This feature highlights id Software's attention to player immersion, giving users control over the auditory experience. In 1992, dynamic music selection was rare in games, as most titles had static soundtracks. The function also includes platform-specific optimizations, such as different track lists for the 'Spear of Destiny' expansion. By caching and un-caching assets, the developers ensured efficient memory usage on limited MS-DOS systems. This approach influenced later games, where customizable soundtracks became a standard feature, especially in genres like racing and sports."
  - id: "initgame-memory-checks-and-startup"
    line_start: 1135
    line_end: 1266
    title: "InitGame: Memory Checks and Startup Procedures"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The InitGame function is responsible for initializing key systems and verifying hardware capabilities. It checks available memory, ensuring the game can run on systems with at least 235KB (or 257KB for 'Spear of Destiny'). If insufficient memory is detected, an error screen is displayed, and the game exits gracefully. This reflects the constraints of early 1990s PCs, where memory was a scarce resource. InitGame also builds essential tables for gameplay, such as map lookups and screen update pointers, and loads configuration files. The function's modular startup sequence—initializing graphics, input, sound, and memory subsystems—became a blueprint for modern game engines. Its memory checks and fallback mechanisms influenced how later games handled hardware compatibility, ensuring broader accessibility."
  - id: "setviewsize-performance-and-aspect-ratio"
    line_start: 1268
    line_end: 1306
    title: "SetViewSize: Performance and Aspect Ratio Optimization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Aspect_ratio_(image)"
    image_url: ""
    image_caption: ""
    content: "SetViewSize adjusts the game's viewport dimensions, ensuring compatibility with various screen resolutions and optimizing performance. By enforcing divisibility constraints (width by 16, height by 2), the function aligns with hardware requirements for efficient memory access and rendering. It calculates projection constants and trace angles, essential for the game's pseudo-3D perspective. This function exemplifies id Software's meticulous approach to balancing visual fidelity and performance on early PCs. The ability to dynamically adjust view size influenced later games, enabling scalable graphics settings for diverse hardware configurations. Techniques like these laid the groundwork for modern resolution scaling and aspect ratio adjustments in 3D engines."
  - id: "demo-loop-showcasing-gameplay"
    line_start: 1411
    line_end: 1570
    title: "DemoLoop: Showcasing Gameplay and Features"
    wikipedia_url: "https://en.wikipedia.org/wiki/Demo_(computer_program)"
    image_url: ""
    image_caption: ""
    content: "The DemoLoop function orchestrates the game's demo playback cycle, showcasing its features to attract and engage players. It includes title screens, credits, high scores, and gameplay demos, cycling through these elements until user input interrupts. This was a common practice in the early 1990s, where demos served as marketing tools and tutorials. The function integrates memory sorting, asset caching, and user input handling, ensuring smooth transitions between demo segments. By leveraging pre-recorded gameplay sequences, id Software demonstrated the game's capabilities without requiring active participation. DemoLoop influenced the design of attract modes in arcade games and later served as inspiration for tutorial and preview systems in modern titles."
  - id: "main-function-game-orchestration"
    line_start: 1586
    line_end: 1615
    title: "Main Function: Orchestrating Initialization and Gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_engine"
    image_url: ""
    image_caption: ""
    content: "The main function is the entry point of Wolfenstein 3D, tying together initialization routines and the gameplay loop. It checks for beta expiration (in development builds), initializes subsystems via InitGame, and starts the DemoLoop. This structure reflects id Software's organized approach to game development, ensuring modularity and clarity. The main function's simplicity belies its importance, as it establishes the game's execution flow. Its design influenced how modern game engines structure their main loops, emphasizing initialization, resource management, and gameplay orchestration. The modularity seen here became a hallmark of id Software's later engines, including the Doom and Quake series."

---

```cpp
// WL_MAIN.C

#include <conio.h>
#include "WL_DEF.H"
#pragma hdrstop


/*
=============================================================================

						   WOLFENSTEIN 3-D

					  An Id Software production

						   by John Carmack

=============================================================================
*/

/*
=============================================================================

						 LOCAL CONSTANTS

=============================================================================
*/


#define FOCALLENGTH     (0x5700l)               // in global coordinates
#define VIEWGLOBAL      0x10000                 // globals visable flush to wall

#define VIEWWIDTH       256                     // size of view window
#define VIEWHEIGHT      144

/*
=============================================================================

						 GLOBAL VARIABLES

=============================================================================
*/

char            str[80],str2[20];
int				tedlevelnum;
boolean         tedlevel;
boolean         nospr;
boolean         IsA386;
int                     dirangle[9] = {0,ANGLES/8,2*ANGLES/8,3*ANGLES/8,4*ANGLES/8,
	5*ANGLES/8,6*ANGLES/8,7*ANGLES/8,ANGLES};

//
// proejection variables
//
fixed           focallength;
unsigned        screenofs;
int             viewwidth;
int             viewheight;
int             centerx;
int             shootdelta;                     // pixels away from centerx a target can be
fixed           scale,maxslope;
long            heightnumerator;
int                     minheightdiv;


void            Quit (char *error);

boolean         startgame,loadedgame,virtualreality;
int             mouseadjustment;

char	configname[13]="CONFIG.";


/*
=============================================================================

						 LOCAL VARIABLES

=============================================================================
*/


/*
====================
=
= ReadConfig
=
====================
*/

void ReadConfig(void)
{
	int                     file;
	SDMode          sd;
	SMMode          sm;
	SDSMode         sds;


	if ( (file = open(configname,O_BINARY | O_RDONLY)) != -1)
	{
	//
	// valid config file
	//
		read(file,Scores,sizeof(HighScore) * MaxScores);

		read(file,&sd,sizeof(sd));
		read(file,&sm,sizeof(sm));
		read(file,&sds,sizeof(sds));

		read(file,&mouseenabled,sizeof(mouseenabled));
		read(file,&joystickenabled,sizeof(joystickenabled));
		read(file,&joypadenabled,sizeof(joypadenabled));
		read(file,&joystickprogressive,sizeof(joystickprogressive));
		read(file,&joystickport,sizeof(joystickport));

		read(file,&dirscan,sizeof(dirscan));
		read(file,&buttonscan,sizeof(buttonscan));
		read(file,&buttonmouse,sizeof(buttonmouse));
		read(file,&buttonjoy,sizeof(buttonjoy));

		read(file,&viewsize,sizeof(viewsize));
		read(file,&mouseadjustment,sizeof(mouseadjustment));

		close(file);

		if (sd == sdm_AdLib && !AdLibPresent && !SoundBlasterPresent)
		{
			sd = sdm_PC;
			sd = smm_Off;
		}

		if ((sds == sds_SoundBlaster && !SoundBlasterPresent) ||
			(sds == sds_SoundSource && !SoundSourcePresent))
			sds = sds_Off;

		if (!MousePresent)
			mouseenabled = false;
		if (!JoysPresent[joystickport])
			joystickenabled = false;

		MainMenu[6].active=1;
		MainItems.curpos=0;
	}
	else
	{
	//
	// no config file, so select by hardware
	//
		if (SoundBlasterPresent || AdLibPresent)
		{
			sd = sdm_AdLib;
			sm = smm_AdLib;
		}
		else
		{
			sd = sdm_PC;
			sm = smm_Off;
		}

		if (SoundBlasterPresent)
			sds = sds_SoundBlaster;
		else if (SoundSourcePresent)
			sds = sds_SoundSource;
		else
			sds = sds_Off;

		if (MousePresent)
			mouseenabled = true;

		joystickenabled = false;
		joypadenabled = false;
		joystickport = 0;
		joystickprogressive = false;

		viewsize = 15;
		mouseadjustment=5;
	}

	SD_SetMusicMode (sm);
	SD_SetSoundMode (sd);
	SD_SetDigiDevice (sds);

}


/*
====================
=
= WriteConfig
=
====================
*/

void WriteConfig(void)
{
	int                     file;

	file = open(configname,O_CREAT | O_BINARY | O_WRONLY,
				S_IREAD | S_IWRITE | S_IFREG);

	if (file != -1)
	{
		write(file,Scores,sizeof(HighScore) * MaxScores);

		write(file,&SoundMode,sizeof(SoundMode));
		write(file,&MusicMode,sizeof(MusicMode));
		write(file,&DigiMode,sizeof(DigiMode));

		write(file,&mouseenabled,sizeof(mouseenabled));
		write(file,&joystickenabled,sizeof(joystickenabled));
		write(file,&joypadenabled,sizeof(joypadenabled));
		write(file,&joystickprogressive,sizeof(joystickprogressive));
		write(file,&joystickport,sizeof(joystickport));

		write(file,&dirscan,sizeof(dirscan));
		write(file,&buttonscan,sizeof(buttonscan));
		write(file,&buttonmouse,sizeof(buttonmouse));
		write(file,&buttonjoy,sizeof(buttonjoy));

		write(file,&viewsize,sizeof(viewsize));
		write(file,&mouseadjustment,sizeof(mouseadjustment));

		close(file);
	}
}


//===========================================================================


/*
========================
=
= Patch386
=
= Patch ldiv to use 32 bit instructions
=
========================
*/

char    *JHParmStrings[] = {"no386",nil};
void Patch386 (void)
{
extern void far jabhack2(void);
extern int far  CheckIs386(void);

	int     i;

	for (i = 1;i < _argc;i++)
		if (US_CheckParm(_argv[i],JHParmStrings) == 0)
		{
			IsA386 = false;
			return;
		}

	if (CheckIs386())
	{
		IsA386 = true;
		jabhack2();
	}
	else
		IsA386 = false;
}

//===========================================================================

/*
=====================
=
= NewGame
=
= Set up new game to start from the beginning
=
=====================
*/

void NewGame (int difficulty,int episode)
{
	memset (&gamestate,0,sizeof(gamestate));
	gamestate.difficulty = difficulty;
	gamestate.weapon = gamestate.bestweapon
		= gamestate.chosenweapon = wp_pistol;
	gamestate.health = 100;
	gamestate.ammo = STARTAMMO;
	gamestate.lives = 3;
	gamestate.nextextra = EXTRAPOINTS;
	gamestate.episode=episode;

	startgame = true;
}

//===========================================================================

void DiskFlopAnim(int x,int y)
{
 static char which=0;
 if (!x && !y)
   return;
 VWB_DrawPic(x,y,C_DISKLOADING1PIC+which);
 VW_UpdateScreen();
 which^=1;
}


long DoChecksum(byte far *source,unsigned size,long checksum)
{
 unsigned i;

 for (i=0;i<size-1;i++)
   checksum += source[i]^source[i+1];

 return checksum;
}


/*
==================
=
= SaveTheGame
=
==================
*/

boolean SaveTheGame(int file,int x,int y)
{
	struct diskfree_t dfree;
	long avail,size,checksum;
	objtype *ob,nullobj;


	if (_dos_getdiskfree(0,&dfree))
	  Quit("Error in _dos_getdiskfree call");

	avail = (long)dfree.avail_clusters *
			dfree.bytes_per_sector *
			dfree.sectors_per_cluster;

	size = 0;
	for (ob = player; ob ; ob=ob->next)
	  size += sizeof(*ob);
	size += sizeof(nullobj);

	size += sizeof(gamestate) +
			sizeof(LRstruct)*8 +
			sizeof(tilemap) +
			sizeof(actorat) +
			sizeof(laststatobj) +
			sizeof(statobjlist) +
			sizeof(doorposition) +
			sizeof(pwallstate) +
			sizeof(pwallx) +
			sizeof(pwally) +
			sizeof(pwalldir) +
			sizeof(pwallpos);

	if (avail < size)
	{
	 Message(STR_NOSPACE1"\n"
			 STR_NOSPACE2);
	 return false;
	}

	checksum = 0;


	DiskFlopAnim(x,y);
	CA_FarWrite (file,(void far *)&gamestate,sizeof(gamestate));
	checksum = DoChecksum((byte far *)&gamestate,sizeof(gamestate),checksum);

	DiskFlopAnim(x,y);
#ifdef SPEAR
	CA_FarWrite (file,(void far *)&LevelRatios[0],sizeof(LRstruct)*20);
	checksum = DoChecksum((byte far *)&LevelRatios[0],sizeof(LRstruct)*20,checksum);
#else
	CA_FarWrite (file,(void far *)&LevelRatios[0],sizeof(LRstruct)*8);
	checksum = DoChecksum((byte far *)&LevelRatios[0],sizeof(LRstruct)*8,checksum);
#endif

	DiskFlopAnim(x,y);
	CA_FarWrite (file,(void far *)tilemap,sizeof(tilemap));
	checksum = DoChecksum((byte far *)tilemap,sizeof(tilemap),checksum);
	DiskFlopAnim(x,y);
	CA_FarWrite (file,(void far *)actorat,sizeof(actorat));
	checksum = DoChecksum((byte far *)actorat,sizeof(actorat),checksum);

	CA_FarWrite (file,(void far *)areaconnect,sizeof(areaconnect));
	CA_FarWrite (file,(void far *)areabyplayer,sizeof(areabyplayer));

	for (ob = player ; ob ; ob=ob->next)
	{
	 DiskFlopAnim(x,y);
	 CA_FarWrite (file,(void far *)ob,sizeof(*ob));
	}
	nullobj.active = ac_badobject;          // end of file marker
	DiskFlopAnim(x,y);
	CA_FarWrite (file,(void far *)&nullobj,sizeof(nullobj));



	DiskFlopAnim(x,y);
	CA_FarWrite (file,(void far *)&laststatobj,sizeof(laststatobj));
	checksum = DoChecksum((byte far *)&laststatobj,sizeof(laststatobj),checksum);
	DiskFlopAnim(x,y);
	CA_FarWrite (file,(void far *)statobjlist,sizeof(statobjlist));
	checksum = DoChecksum((byte far *)statobjlist,sizeof(statobjlist),checksum);

	DiskFlopAnim(x,y);
	CA_FarWrite (file,(void far *)doorposition,sizeof(doorposition));
	checksum = DoChecksum((byte far *)doorposition,sizeof(doorposition),checksum);
	DiskFlopAnim(x,y);
	CA_FarWrite (file,(void far *)doorobjlist,sizeof(doorobjlist));
	checksum = DoChecksum((byte far *)doorobjlist,sizeof(doorobjlist),checksum);

	DiskFlopAnim(x,y);
	CA_FarWrite (file,(void far *)&pwallstate,sizeof(pwallstate));
	checksum = DoChecksum((byte far *)&pwallstate,sizeof(pwallstate),checksum);
	CA_FarWrite (file,(void far *)&pwallx,sizeof(pwallx));
	checksum = DoChecksum((byte far *)&pwallx,sizeof(pwallx),checksum);
	CA_FarWrite (file,(void far *)&pwally,sizeof(pwally));
	checksum = DoChecksum((byte far *)&pwally,sizeof(pwally),checksum);
	CA_FarWrite (file,(void far *)&pwalldir,sizeof(pwalldir));
	checksum = DoChecksum((byte far *)&pwalldir,sizeof(pwalldir),checksum);
	CA_FarWrite (file,(void far *)&pwallpos,sizeof(pwallpos));
	checksum = DoChecksum((byte far *)&pwallpos,sizeof(pwallpos),checksum);

	//
	// WRITE OUT CHECKSUM
	//
	CA_FarWrite (file,(void far *)&checksum,sizeof(checksum));

	return(true);
}

//===========================================================================

/*
==================
=
= LoadTheGame
=
==================
*/

boolean LoadTheGame(int file,int x,int y)
{
	long checksum,oldchecksum;
	objtype *ob,nullobj;


	checksum = 0;

	DiskFlopAnim(x,y);
	CA_FarRead (file,(void far *)&gamestate,sizeof(gamestate));
	checksum = DoChecksum((byte far *)&gamestate,sizeof(gamestate),checksum);

	DiskFlopAnim(x,y);
#ifdef SPEAR
	CA_FarRead (file,(void far *)&LevelRatios[0],sizeof(LRstruct)*20);
	checksum = DoChecksum((byte far *)&LevelRatios[0],sizeof(LRstruct)*20,checksum);
#else
	CA_FarRead (file,(void far *)&LevelRatios[0],sizeof(LRstruct)*8);
	checksum = DoChecksum((byte far *)&LevelRatios[0],sizeof(LRstruct)*8,checksum);
#endif

	DiskFlopAnim(x,y);
	SetupGameLevel ();

	DiskFlopAnim(x,y);
	CA_FarRead (file,(void far *)tilemap,sizeof(tilemap));
	checksum = DoChecksum((byte far *)tilemap,sizeof(tilemap),checksum);
	DiskFlopAnim(x,y);
	CA_FarRead (file,(void far *)actorat,sizeof(actorat));
	checksum = DoChecksum((byte far *)actorat,sizeof(actorat),checksum);

	CA_FarRead (file,(void far *)areaconnect,sizeof(areaconnect));
	CA_FarRead (file,(void far *)areabyplayer,sizeof(areabyplayer));



	InitActorList ();
	DiskFlopAnim(x,y);
	CA_FarRead (file,(void far *)player,sizeof(*player));

	while (1)
	{
	 DiskFlopAnim(x,y);
		CA_FarRead (file,(void far *)&nullobj,sizeof(nullobj));
		if (nullobj.active == ac_badobject)
			break;
		GetNewActor ();
	 // don't copy over the links
		memcpy (new,&nullobj,sizeof(nullobj)-4);
	}



	DiskFlopAnim(x,y);
	CA_FarRead (file,(void far *)&laststatobj,sizeof(laststatobj));
	checksum = DoChecksum((byte far *)&laststatobj,sizeof(laststatobj),checksum);
	DiskFlopAnim(x,y);
	CA_FarRead (file,(void far *)statobjlist,sizeof(statobjlist));
	checksum = DoChecksum((byte far *)statobjlist,sizeof(statobjlist),checksum);

	DiskFlopAnim(x,y);
	CA_FarRead (file,(void far *)doorposition,sizeof(doorposition));
	checksum = DoChecksum((byte far *)doorposition,sizeof(doorposition),checksum);
	DiskFlopAnim(x,y);
	CA_FarRead (file,(void far *)doorobjlist,sizeof(doorobjlist));
	checksum = DoChecksum((byte far *)doorobjlist,sizeof(doorobjlist),checksum);

	DiskFlopAnim(x,y);
	CA_FarRead (file,(void far *)&pwallstate,sizeof(pwallstate));
	checksum = DoChecksum((byte far *)&pwallstate,sizeof(pwallstate),checksum);
	CA_FarRead (file,(void far *)&pwallx,sizeof(pwallx));
	checksum = DoChecksum((byte far *)&pwallx,sizeof(pwallx),checksum);
	CA_FarRead (file,(void far *)&pwally,sizeof(pwally));
	checksum = DoChecksum((byte far *)&pwally,sizeof(pwally),checksum);
	CA_FarRead (file,(void far *)&pwalldir,sizeof(pwalldir));
	checksum = DoChecksum((byte far *)&pwalldir,sizeof(pwalldir),checksum);
	CA_FarRead (file,(void far *)&pwallpos,sizeof(pwallpos));
	checksum = DoChecksum((byte far *)&pwallpos,sizeof(pwallpos),checksum);

	CA_FarRead (file,(void far *)&oldchecksum,sizeof(oldchecksum));

	if (oldchecksum != checksum)
	{
	 Message(STR_SAVECHT1"\n"
			 STR_SAVECHT2"\n"
			 STR_SAVECHT3"\n"
			 STR_SAVECHT4);

	 IN_ClearKeysDown();
	 IN_Ack();

	 gamestate.score = 0;
	 gamestate.lives = 1;
	 gamestate.weapon =
	   gamestate.chosenweapon =
	   gamestate.bestweapon = wp_pistol;
	 gamestate.ammo = 8;
	}

	return true;
}

//===========================================================================

/*
==========================
=
= ShutdownId
=
= Shuts down all ID_?? managers
=
==========================
*/

void ShutdownId (void)
{
	US_Shutdown ();
	SD_Shutdown ();
	PM_Shutdown ();
	IN_Shutdown ();
	VW_Shutdown ();
	CA_Shutdown ();
	MM_Shutdown ();
}


//===========================================================================

/*
==================
=
= BuildTables
=
= Calculates:
=
= scale                 projection constant
= sintable/costable     overlapping fractional tables
=
==================
*/

const   float   radtoint = (float)FINEANGLES/2/PI;

void BuildTables (void)
{
  int           i;
  float         angle,anglestep;
  double        tang;
  fixed         value;


//
// calculate fine tangents
//

	for (i=0;i<FINEANGLES/8;i++)
	{
		tang = tan( (i+0.5)/radtoint);
		finetangent[i] = tang*TILEGLOBAL;
		finetangent[FINEANGLES/4-1-i] = 1/tang*TILEGLOBAL;
	}

//
// costable overlays sintable with a quarter phase shift
// ANGLES is assumed to be divisable by four
//
// The low word of the value is the fraction, the high bit is the sign bit,
// bits 16-30 should be 0
//

  angle = 0;
  anglestep = PI/2/ANGLEQUAD;
  for (i=0;i<=ANGLEQUAD;i++)
  {
	value=GLOBAL1*sin(angle);
	sintable[i]=
	  sintable[i+ANGLES]=
	  sintable[ANGLES/2-i] = value;
	sintable[ANGLES-i]=
	  sintable[ANGLES/2+i] = value | 0x80000000l;
	angle += anglestep;
  }

}

//===========================================================================


/*
====================
=
= CalcProjection
=
= Uses focallength
=
====================
*/

void CalcProjection (long focal)
{
	int             i;
	long            intang;
	float   angle;
	double  tang;
	double  planedist;
	double  globinhalf;
	int             halfview;
	double  halfangle,facedist;


	focallength = focal;
	facedist = focal+MINDIST;
	halfview = viewwidth/2;                                 // half view in pixels

//
// calculate scale value for vertical height calculations
// and sprite x calculations
//
	scale = halfview*facedist/(VIEWGLOBAL/2);

//
// divide heightnumerator by a posts distance to get the posts height for
// the heightbuffer.  The pixel height is height>>2
//
	heightnumerator = (TILEGLOBAL*scale)>>6;
	minheightdiv = heightnumerator/0x7fff +1;

//
// calculate the angle offset from view angle of each pixel's ray
//

	for (i=0;i<halfview;i++)
	{
	// start 1/2 pixel over, so viewangle bisects two middle pixels
		tang = (long)i*VIEWGLOBAL/viewwidth/facedist;
		angle = atan(tang);
		intang = angle*radtoint;
		pixelangle[halfview-1-i] = intang;
		pixelangle[halfview+i] = -intang;
	}

//
// if a point's abs(y/x) is greater than maxslope, the point is outside
// the view area
//
	maxslope = finetangent[pixelangle[0]];
	maxslope >>= 8;
}



//===========================================================================

/*
===================
=
= SetupWalls
=
= Map tile values to scaled pics
=
===================
*/

void SetupWalls (void)
{
	int     i;

	for (i=1;i<MAXWALLTILES;i++)
	{
		horizwall[i]=(i-1)*2;
		vertwall[i]=(i-1)*2+1;
	}
}

//===========================================================================

/*
==========================
=
= SignonScreen
=
==========================
*/

void SignonScreen (void)                        // VGA version
{
	unsigned        segstart,seglength;

	VL_SetVGAPlaneMode ();
	VL_TestPaletteSet ();
	VL_SetPalette (&gamepal);

	if (!virtualreality)
	{
		VW_SetScreen(0x8000,0);
		VL_MungePic (&introscn,320,200);
		VL_MemToScreen (&introscn,320,200,0,0);
		VW_SetScreen(0,0);
	}

//
// reclaim the memory from the linked in signon screen
//
	segstart = FP_SEG(&introscn);
	seglength = 64000/16;
	if (FP_OFF(&introscn))
	{
		segstart++;
		seglength--;
	}
	MML_UseSpace (segstart,seglength);
}


/*
==========================
=
= FinishSignon
=
==========================
*/

void FinishSignon (void)
{

#ifndef SPEAR
	VW_Bar (0,189,300,11,peekb(0xa000,0));
	WindowX = 0;
	WindowW = 320;
	PrintY = 190;

	#ifndef JAPAN
	SETFONTCOLOR(14,4);

	#ifdef SPANISH
	US_CPrint ("Oprima una tecla");
	#else
	US_CPrint ("Press a key");
	#endif

	#endif

	if (!NoWait)
		IN_Ack ();

	#ifndef JAPAN
	VW_Bar (0,189,300,11,peekb(0xa000,0));

	PrintY = 190;
	SETFONTCOLOR(10,4);

	#ifdef SPANISH
	US_CPrint ("pensando...");
	#else
	US_CPrint ("Working...");
	#endif

	#endif

	SETFONTCOLOR(0,15);
#else
	if (!NoWait)
		VW_WaitVBL(3*70);
#endif
}

//===========================================================================

/*
=================
=
= MS_CheckParm
=
=================
*/

boolean MS_CheckParm (char far *check)
{
	int             i;
	char    *parm;

	for (i = 1;i<_argc;i++)
	{
		parm = _argv[i];

		while ( !isalpha(*parm) )       // skip - / \ etc.. in front of parm
			if (!*parm++)
				break;                          // hit end of string without an alphanum

		if ( !_fstricmp(check,parm) )
			return true;
	}

	return false;
}

//===========================================================================

/*
=====================
=
= InitDigiMap
=
=====================
*/

static  int     wolfdigimap[] =
		{
			// These first sounds are in the upload version
#ifndef SPEAR
			HALTSND,                0,
			DOGBARKSND,             1,
			CLOSEDOORSND,           2,
			OPENDOORSND,            3,
			ATKMACHINEGUNSND,       4,
			ATKPISTOLSND,           5,
			ATKGATLINGSND,          6,
			SCHUTZADSND,            7,
			GUTENTAGSND,            8,
			MUTTISND,               9,
			BOSSFIRESND,            10,
			SSFIRESND,              11,
			DEATHSCREAM1SND,        12,
			DEATHSCREAM2SND,        13,
			DEATHSCREAM3SND,        13,
			TAKEDAMAGESND,          14,
			PUSHWALLSND,            15,

			LEBENSND,               20,
			NAZIFIRESND,            21,
			SLURPIESND,             22,

			YEAHSND,				32,

#ifndef UPLOAD
			// These are in all other episodes
			DOGDEATHSND,            16,
			AHHHGSND,               17,
			DIESND,                 18,
			EVASND,                 19,

			TOT_HUNDSND,            23,
			MEINGOTTSND,            24,
			SCHABBSHASND,           25,
			HITLERHASND,            26,
			SPIONSND,               27,
			NEINSOVASSND,           28,
			DOGATTACKSND,           29,
			LEVELDONESND,           30,
			MECHSTEPSND,			31,

			SCHEISTSND,				33,
			DEATHSCREAM4SND,		34,		// AIIEEE
			DEATHSCREAM5SND,		35,		// DEE-DEE
			DONNERSND,				36,		// EPISODE 4 BOSS DIE
			EINESND,				37,		// EPISODE 4 BOSS SIGHTING
			ERLAUBENSND,			38,		// EPISODE 6 BOSS SIGHTING
			DEATHSCREAM6SND,		39,		// FART
			DEATHSCREAM7SND,		40,		// GASP
			DEATHSCREAM8SND,		41,		// GUH-BOY!
			DEATHSCREAM9SND,		42,		// AH GEEZ!
			KEINSND,				43,		// EPISODE 5 BOSS SIGHTING
			MEINSND,				44,		// EPISODE 6 BOSS DIE
			ROSESND,				45,		// EPISODE 5 BOSS DIE

#endif
#else
//
// SPEAR OF DESTINY DIGISOUNDS
//
			HALTSND,                0,
			CLOSEDOORSND,           2,
			OPENDOORSND,            3,
			ATKMACHINEGUNSND,       4,
			ATKPISTOLSND,           5,
			ATKGATLINGSND,          6,
			SCHUTZADSND,            7,
			BOSSFIRESND,            8,
			SSFIRESND,              9,
			DEATHSCREAM1SND,        10,
			DEATHSCREAM2SND,        11,
			TAKEDAMAGESND,          12,
			PUSHWALLSND,            13,
			AHHHGSND,               15,
			LEBENSND,               16,
			NAZIFIRESND,            17,
			SLURPIESND,             18,
			LEVELDONESND,           22,
			DEATHSCREAM4SND,		23,		// AIIEEE
			DEATHSCREAM3SND,        23,		// DOUBLY-MAPPED!!!
			DEATHSCREAM5SND,		24,		// DEE-DEE
			DEATHSCREAM6SND,		25,		// FART
			DEATHSCREAM7SND,		26,		// GASP
			DEATHSCREAM8SND,		27,		// GUH-BOY!
			DEATHSCREAM9SND,		28,		// AH GEEZ!
			GETGATLINGSND,			38,		// Got Gat replacement

#ifndef SPEARDEMO
			DOGBARKSND,             1,
			DOGDEATHSND,            14,
			SPIONSND,               19,
			NEINSOVASSND,           20,
			DOGATTACKSND,           21,
			TRANSSIGHTSND,			29,		// Trans Sight
			TRANSDEATHSND,			30,		// Trans Death
			WILHELMSIGHTSND,		31,		// Wilhelm Sight
			WILHELMDEATHSND,		32,		// Wilhelm Death
			UBERDEATHSND,			33,		// Uber Death
			KNIGHTSIGHTSND,			34,		// Death Knight Sight
			KNIGHTDEATHSND,			35,		// Death Knight Death
			ANGELSIGHTSND,			36,		// Angel Sight
			ANGELDEATHSND,			37,		// Angel Death
			GETSPEARSND,			39,		// Got Spear replacement
#endif
#endif
			LASTSOUND
		};


void InitDigiMap (void)
{
	int                     *map;

	for (map = wolfdigimap;*map != LASTSOUND;map += 2)
		DigiMap[map[0]] = map[1];


}


#ifndef SPEAR
CP_iteminfo	MusicItems={CTL_X,CTL_Y,6,0,32};
CP_itemtype far MusicMenu[]=
	{
		{1,"Get Them!",0},
		{1,"Searching",0},
		{1,"P.O.W.",0},
		{1,"Suspense",0},
		{1,"War March",0},
		{1,"Around The Corner!",0},

		{1,"Nazi Anthem",0},
		{1,"Lurking...",0},
		{1,"Going After Hitler",0},
		{1,"Pounding Headache",0},
		{1,"Into the Dungeons",0},
		{1,"Ultimate Conquest",0},

		{1,"Kill the S.O.B.",0},
		{1,"The Nazi Rap",0},
		{1,"Twelfth Hour",0},
		{1,"Zero Hour",0},
		{1,"Ultimate Conquest",0},
		{1,"Wolfpack",0}
	};
#else
CP_iteminfo MusicItems={CTL_X,CTL_Y-20,9,0,32};
CP_itemtype far MusicMenu[]=
   {
		{1,"Funky Colonel Bill",0},
		{1,"Death To The Nazis",0},
		{1,"Tiptoeing Around",0},
		{1,"Is This THE END?",0},
		{1,"Evil Incarnate",0},
		{1,"Jazzin' Them Nazis",0},
		{1,"Puttin' It To The Enemy",0},
		{1,"The SS Gonna Get You",0},
		{1,"Towering Above",0}
	};
#endif

#ifndef SPEARDEMO
void DoJukebox(void)
{
	int which,lastsong=-1;
	unsigned start,songs[]=
		{
#ifndef SPEAR
			GETTHEM_MUS,
			SEARCHN_MUS,
			POW_MUS,
			SUSPENSE_MUS,
			WARMARCH_MUS,
			CORNER_MUS,

			NAZI_OMI_MUS,
			PREGNANT_MUS,
			GOINGAFT_MUS,
			HEADACHE_MUS,
			DUNGEON_MUS,
			ULTIMATE_MUS,

			INTROCW3_MUS,
			NAZI_RAP_MUS,
			TWELFTH_MUS,
			ZEROHOUR_MUS,
			ULTIMATE_MUS,
			PACMAN_MUS
#else
			XFUNKIE_MUS,             // 0
			XDEATH_MUS,              // 2
			XTIPTOE_MUS,             // 4
			XTHEEND_MUS,             // 7
			XEVIL_MUS,               // 17
			XJAZNAZI_MUS,            // 18
			XPUTIT_MUS,              // 21
			XGETYOU_MUS,             // 22
			XTOWER2_MUS              // 23
#endif
		};
	struct dostime_t time;



	IN_ClearKeysDown();
	if (!AdLibPresent && !SoundBlasterPresent)
		return;


	MenuFadeOut();

#ifndef SPEAR
#ifndef UPLOAD
	_dos_gettime(&time);
	start = (time.hsecond%3)*6;
#else
	start = 0;
#endif
#else
	start = 0;
#endif


	CA_CacheGrChunk (STARTFONT+1);
#ifdef SPEAR
	CacheLump (BACKDROP_LUMP_START,BACKDROP_LUMP_END);
#else
	CacheLump (CONTROLS_LUMP_START,CONTROLS_LUMP_END);
#endif
	CA_LoadAllSounds ();

	fontnumber=1;
	ClearMScreen ();
	VWB_DrawPic(112,184,C_MOUSELBACKPIC);
	DrawStripes (10);
	SETFONTCOLOR (TEXTCOLOR,BKGDCOLOR);

#ifndef SPEAR
	DrawWindow (CTL_X-2,CTL_Y-6,280,13*7,BKGDCOLOR);
#else
	DrawWindow (CTL_X-2,CTL_Y-26,280,13*10,BKGDCOLOR);
#endif

	DrawMenu (&MusicItems,&MusicMenu[start]);

	SETFONTCOLOR (READHCOLOR,BKGDCOLOR);
	PrintY=15;
	WindowX = 0;
	WindowY = 320;
	US_CPrint ("Robert's Jukebox");

	SETFONTCOLOR (TEXTCOLOR,BKGDCOLOR);
	VW_UpdateScreen();
	MenuFadeIn();

	do
	{
		which = HandleMenu(&MusicItems,&MusicMenu[start],NULL);
		if (which>=0)
		{
			if (lastsong >= 0)
				MusicMenu[start+lastsong].active = 1;

			StartCPMusic(songs[start + which]);
			MusicMenu[start+which].active = 2;
			DrawMenu (&MusicItems,&MusicMenu[start]);
			VW_UpdateScreen();
			lastsong = which;
		}
	} while(which>=0);

	MenuFadeOut();
	IN_ClearKeysDown();
#ifdef SPEAR
	UnCacheLump (BACKDROP_LUMP_START,BACKDROP_LUMP_END);
#else
	UnCacheLump (CONTROLS_LUMP_START,CONTROLS_LUMP_END);
#endif
}
#endif


/*
==========================
=
= InitGame
=
= Load a few things right away
=
==========================
*/

void InitGame (void)
{
	int                     i,x,y;
	unsigned        *blockstart;

	if (MS_CheckParm ("virtual"))
		virtualreality = true;
	else
		virtualreality = false;

	MM_Startup ();                  // so the signon screen can be freed

	SignonScreen ();

	VW_Startup ();
	IN_Startup ();
	PM_Startup ();
	PM_UnlockMainMem ();
	SD_Startup ();
	CA_Startup ();
	US_Startup ();


#ifndef SPEAR
	if (mminfo.mainmem < 235000L)
#else
	if (mminfo.mainmem < 257000L && !MS_CheckParm("debugmode"))
#endif
	{
		memptr screen;

		CA_CacheGrChunk (ERRORSCREEN);
		screen = grsegs[ERRORSCREEN];
		ShutdownId();
		movedata ((unsigned)screen,7+7*160,0xb800,0,17*160);
		gotoxy (1,23);
		exit(1);
	}


//
// build some tables
//
	InitDigiMap ();

	for (i=0;i<MAPSIZE;i++)
	{
		nearmapylookup[i] = &tilemap[0][0]+MAPSIZE*i;
		farmapylookup[i] = i*64;
	}

	for (i=0;i<PORTTILESHIGH;i++)
		uwidthtable[i] = UPDATEWIDE*i;

	blockstart = &blockstarts[0];
	for (y=0;y<UPDATEHIGH;y++)
		for (x=0;x<UPDATEWIDE;x++)
			*blockstart++ = SCREENWIDTH*16*y+x*TILEWIDTH;

	updateptr = &update[0];

	bufferofs = 0;
	displayofs = 0;
	ReadConfig ();


//
// HOLDING DOWN 'M' KEY?
//
#ifndef SPEARDEMO
	if (Keyboard[sc_M])
	  DoJukebox();
	else
#endif
//
// draw intro screen stuff
//
	if (!virtualreality)
		IntroScreen ();

//
// load in and lock down some basic chunks
//

	CA_CacheGrChunk(STARTFONT);
	MM_SetLock (&grsegs[STARTFONT],true);

	LoadLatchMem ();
	BuildTables ();          // trig tables
	SetupWalls ();

#if 0
{
int temp,i;
temp = viewsize;
	profilehandle = open("SCALERS.TXT", O_CREAT | O_WRONLY | O_TEXT);
for (i=1;i<20;i++)
	NewViewSize(i);
viewsize = temp;
close(profilehandle);
}
#endif

	NewViewSize (viewsize);


//
// initialize variables
//
	InitRedShifts ();
	if (!virtualreality)
		FinishSignon();

	displayofs = PAGE1START;
	bufferofs = PAGE2START;

	if (virtualreality)
	{
		NoWait = true;
		geninterrupt(0x60);
	}
}

//===========================================================================

/*
==========================
=
= SetViewSize
=
==========================
*/

boolean SetViewSize (unsigned width, unsigned height)
{
	viewwidth = width&~15;                  // must be divisable by 16
	viewheight = height&~1;                 // must be even
	centerx = viewwidth/2-1;
	shootdelta = viewwidth/10;
	screenofs = ((200-STATUSLINES-viewheight)/2*SCREENWIDTH+(320-viewwidth)/8);

//
// calculate trace angles and projection constants
//
	CalcProjection (FOCALLENGTH);

//
// build all needed compiled scalers
//
//	MM_BombOnError (false);
	SetupScaling (viewwidth*1.5);
#if 0
	MM_BombOnError (true);
	if (mmerror)
	{
		Quit ("Can't build scalers!");
		mmerror = false;
		return false;
	}
#endif
	return true;
}


void ShowViewSize (int width)
{
	int     oldwidth,oldheight;

	oldwidth = viewwidth;
	oldheight = viewheight;

	viewwidth = width*16;
	viewheight = width*16*HEIGHTRATIO;
	DrawPlayBorder ();

	viewheight = oldheight;
	viewwidth = oldwidth;
}


void NewViewSize (int width)
{
	CA_UpLevel ();
	MM_SortMem ();
	viewsize = width;
	SetViewSize (width*16,width*16*HEIGHTRATIO);
	CA_DownLevel ();
}



//===========================================================================

/*
==========================
=
= Quit
=
==========================
*/

void Quit (char *error)
{
	unsigned        finscreen;
	memptr	screen;

	if (virtualreality)
		geninterrupt(0x61);

	ClearMemory ();
	if (!*error)
	{
	 #ifndef JAPAN
	 CA_CacheGrChunk (ORDERSCREEN);
	 screen = grsegs[ORDERSCREEN];
	 #endif
	 WriteConfig ();
	}
	else
	{
	 CA_CacheGrChunk (ERRORSCREEN);
	 screen = grsegs[ERRORSCREEN];
	}

	ShutdownId ();

	if (error && *error)
	{
	  movedata ((unsigned)screen,7,0xb800,0,7*160);
	  gotoxy (10,4);
	  puts(error);
	  gotoxy (1,8);
	  exit(1);
	}
	else
	if (!error || !(*error))
	{
		clrscr();
		#ifndef JAPAN
		movedata ((unsigned)screen,7,0xb800,0,4000);
		gotoxy(1,24);
		#endif
//asm	mov	bh,0
//asm	mov	dh,23	// row
//asm	mov	dl,0	// collumn
//asm	mov ah,2
//asm	int	0x10
	}

	exit(0);
}

//===========================================================================



/*
=====================
=
= DemoLoop
=
=====================
*/

static  char *ParmStrings[] = {"baby","easy","normal","hard",""};

void    DemoLoop (void)
{
	static int LastDemo;
	int     i,level;
	long nsize;
	memptr	nullblock;

//
// check for launch from ted
//
	if (tedlevel)
	{
		NoWait = true;
		NewGame(1,0);

		for (i = 1;i < _argc;i++)
		{
			if ( (level = US_CheckParm(_argv[i],ParmStrings)) != -1)
			{
			 gamestate.difficulty=level;
			 break;
			}
		}

#ifndef SPEAR
		gamestate.episode = tedlevelnum/10;
		gamestate.mapon = tedlevelnum%10;
#else
		gamestate.episode = 0;
		gamestate.mapon = tedlevelnum;
#endif
		GameLoop();
		Quit (NULL);
	}


//
// main game cycle
//


//	nsize = (long)40*1024;
//	MM_GetPtr(&nullblock,nsize);

#ifndef DEMOTEST

	#ifndef UPLOAD

		#ifndef GOODTIMES
		#ifndef SPEAR
		#ifndef JAPAN
		if (!NoWait)
			NonShareware();
		#endif
		#else

			#ifndef GOODTIMES
			#ifndef SPEARDEMO
			CopyProtection();
			#endif
			#endif

		#endif
		#endif
	#endif

	StartCPMusic(INTROSONG);

#ifndef JAPAN
	if (!NoWait)
		PG13 ();
#endif

#endif

	while (1)
	{
		while (!NoWait)
		{
//
// title page
//
			MM_SortMem ();
#ifndef DEMOTEST

#ifdef SPEAR
			CA_CacheGrChunk (TITLEPALETTE);

			CA_CacheGrChunk (TITLE1PIC);
			VWB_DrawPic (0,0,TITLE1PIC);
			UNCACHEGRCHUNK (TITLE1PIC);

			CA_CacheGrChunk (TITLE2PIC);
			VWB_DrawPic (0,80,TITLE2PIC);
			UNCACHEGRCHUNK (TITLE2PIC);
			VW_UpdateScreen ();
			VL_FadeIn(0,255,grsegs[TITLEPALETTE],30);

			UNCACHEGRCHUNK (TITLEPALETTE);
#else
			CA_CacheScreen (TITLEPIC);
			VW_UpdateScreen ();
			VW_FadeIn();
#endif
			if (IN_UserInput(TickBase*15))
				break;
			VW_FadeOut();
//
// credits page
//
			CA_CacheScreen (CREDITSPIC);
			VW_UpdateScreen();
			VW_FadeIn ();
			if (IN_UserInput(TickBase*10))
				break;
			VW_FadeOut ();
//
// high scores
//
			DrawHighScores ();
			VW_UpdateScreen ();
			VW_FadeIn ();

			if (IN_UserInput(TickBase*10))
				break;
#endif
//
// demo
//

			#ifndef SPEARDEMO
			PlayDemo (LastDemo++%4);
			#else
			PlayDemo (0);
			#endif

			if (playstate == ex_abort)
				break;
			StartCPMusic(INTROSONG);
		}

		VW_FadeOut ();

#ifndef SPEAR
		if (Keyboard[sc_Tab] && MS_CheckParm("goobers"))
#else
		if (Keyboard[sc_Tab] && MS_CheckParm("debugmode"))
#endif
			RecordDemo ();
		else
			US_ControlPanel (0);

		if (startgame || loadedgame)
		{
			GameLoop ();
			VW_FadeOut();
			StartCPMusic(INTROSONG);
		}
	}
}


//===========================================================================


/*
==========================
=
= main
=
==========================
*/

char    *nosprtxt[] = {"nospr",nil};

void main (void)
{
	int     i;


#ifdef BETA
	//
	// THIS IS FOR BETA ONLY!
	//
	struct dosdate_t d;

	_dos_getdate(&d);
	if (d.year > YEAR ||
		(d.month >= MONTH && d.day >= DAY))
	{
	 printf("Sorry, BETA-TESTING is over. Thanks for you help.\n");
	 exit(1);
	}
#endif

	CheckForEpisodes();

	Patch386 ();

	InitGame ();

	DemoLoop();

	Quit("Demo loop exited???");
}

```