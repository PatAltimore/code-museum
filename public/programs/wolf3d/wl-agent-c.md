---
title: "WL_AGENT.C"
program: "Wolfenstein 3D"
program_slug: "wolf3d"
file_path: "WOLFSRC/WL_AGENT.C"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/wolf3d/blob/master/WOLFSRC/WL_AGENT.C"
year: 1992
author: "John Carmack, John Romero, Tom Hall"
slug: "wl-agent-c"
order: 11
description: "This file implements player actions, movement, and status updates in Wolfenstein 3D, showcasing techniques that defined early FPS game design."

summary:
  - point: "Innovative player movement mechanics with strafing and angle adjustments"
    link: "https://en.wikipedia.org/wiki/Strafing_(gaming)"
    link_label: "Strafing"
  - point: "Dynamic status updates for health, score, and inventory"
    link: "https://en.wikipedia.org/wiki/Heads-up_display_(video_games)"
    link_label: "HUD in video games"
  - point: "Efficient collision detection using tile-based checks"
    link: "https://en.wikipedia.org/wiki/Tile-based_video_game"
    link_label: "Tile-based game design"
  - point: "Bonus item interactions that reward exploration"
    link: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    link_label: "Wolfenstein 3D"
  - point: "Early implementation of victory and progression mechanics"
    link: "https://en.wikipedia.org/wiki/Level_(video_gaming)"
    link_label: "Level progression"

enhancements:
  - id: "player-state-management"
    line_start: 32
    line_end: 43
    title: "How Wolfenstein Tracked Player State"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "This section defines the `objtype` structure, which tracks the state of the player and other objects in the game. The `LastAttacker` variable records the last entity that damaged the player, enabling contextual responses such as displaying the attacker’s face in the HUD. In 1992, games like Wolfenstein 3D were pioneering ways to make player interactions feel personal and immersive. Tracking state was critical for implementing features like health updates, weapon changes, and damage feedback. This approach influenced later games that relied on object-oriented designs for managing entities and interactions, such as Doom and Quake."
  - id: "attack-info-table"
    line_start: 61
    line_end: 73
    title: "The Lookup Table Behind Player Attacks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "The `attackinfo` table is a compact lookup structure that defines the timing, type, and animation frames for player attacks. By organizing attack data in this way, the developers could easily adjust weapon behaviors without rewriting code. This technique was essential in an era when memory was limited and performance was paramount. Lookup tables like this became a staple in game development, appearing in later titles for managing animations, AI behaviors, and physics calculations. The influence of such data-driven design can be seen in modern game engines like Unity and Unreal, where configuration files and tables drive much of the gameplay logic."
  - id: "player-movement-control"
    line_start: 134
    line_end: 225
    title: "The Algorithm That Made Strafing Possible"
    wikipedia_url: "https://en.wikipedia.org/wiki/Strafing_(gaming)"
    image_url: ""
    image_caption: ""
    content: "The `ControlMovement` function handles player movement, including strafing and angle adjustments. It uses variables like `controlx` and `controly` to determine movement direction and speed, applying trigonometric calculations to update the player’s position. The function also includes a hack to mitigate rounding errors at high frame rates, showcasing the developers’ attention to precision. In 1992, strafing was a novel mechanic that added depth to first-person gameplay, allowing players to dodge and maneuver effectively. This innovation influenced countless FPS titles, from Doom to Counter-Strike, and remains a fundamental feature in the genre."
  - id: "status-window-draw"
    line_start: 236
    line_end: 259
    title: "How Wolfenstein Updated Its HUD"
    wikipedia_url: "https://en.wikipedia.org/wiki/Heads-up_display_(video_games)"
    image_url: ""
    image_caption: ""
    content: "The `StatusDrawPic` function updates the game’s heads-up display (HUD) by drawing status elements like health, ammo, and keys. It uses the `bufferofs` variable to manage screen buffers, ensuring smooth updates across different display pages. This approach was crucial for maintaining performance on hardware with limited graphical capabilities. The HUD design in Wolfenstein 3D set a precedent for visualizing player status in real-time, influencing later games like Doom and Half-Life. The concept of a dynamic HUD has evolved into modern UI systems, where overlays and interactive elements provide players with critical information."
  - id: "damage-and-healing"
    line_start: 378
    line_end: 443
    title: "The Code That Made BJ Bleed"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `TakeDamage` and `HealSelf` functions manage the player’s health, updating the HUD and triggering visual feedback. When BJ takes significant damage, his face changes to reflect pain, adding a visceral connection to gameplay. This mechanic was groundbreaking in 1992, as it provided players with immediate, emotional feedback. The concept of dynamic health representation influenced later games, such as Doom’s face animations and modern titles like Dead Space, where visual cues enhance immersion. These functions also highlight the developers’ focus on creating a responsive and engaging experience."
  - id: "bonus-item-interactions"
    line_start: 660
    line_end: 788
    title: "How Wolfenstein Rewarded Exploration"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `GetBonus` function handles interactions with collectible items, such as health packs, ammo, and treasure. Each item triggers specific effects, like increasing health or awarding points, and plays a corresponding sound. This system encouraged players to explore levels thoroughly, rewarding curiosity and persistence. In 1992, such mechanics were relatively new, as most games focused on linear progression. Wolfenstein 3D’s emphasis on exploration and rewards influenced later titles like Doom and Duke Nukem 3D, where secret areas and collectibles became integral to gameplay."
  - id: "collision-detection"
    line_start: 791
    line_end: 855
    title: "The Tile-Based Collision System"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tile-based_video_game"
    image_url: ""
    image_caption: ""
    content: "The `TryMove` function implements collision detection by checking the player’s position against solid walls and other actors within a tile-based grid. This approach was efficient and suited the hardware limitations of the time, as it avoided complex geometric calculations. Tile-based collision systems were common in early games, but Wolfenstein 3D’s implementation stood out for its speed and reliability. This technique influenced later FPS titles and game engines, where grid-based systems remain a popular choice for level design and pathfinding."
  - id: "player-thrust-mechanics"
    line_start: 920
    line_end: 963
    title: "The Code That Made BJ Move"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `Thrust` function calculates player movement based on angle and speed, using trigonometric functions to determine x and y offsets. It also updates the player’s tile position and checks for victory conditions, such as reaching an exit tile. This function showcases the developers’ ability to optimize movement calculations for smooth gameplay on limited hardware. The thrust mechanics in Wolfenstein 3D laid the groundwork for movement systems in later FPS games, influencing titles like Doom and Quake, where fluid motion became a hallmark of the genre."
  - id: "cmd-use-player-direction"
    line_start: 998
    line_end: 1080
    title: "How Player Direction Shapes Interaction"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "This section defines the `Cmd_Use` function, which determines the player's interaction with the environment based on their facing direction. The code calculates the cardinal direction the player is facing and checks the tile in front of them for interactive objects like doors, elevators, or pushable walls. The function handles different scenarios, such as flipping elevator switches or opening doors, and plays corresponding sound effects to enhance immersion. In 1992, real-time interaction with the environment was a cutting-edge feature in games, especially on hardware like the IBM PC with limited processing power. John Carmack's efficient use of lookup tables and bitwise operations ensured smooth gameplay even on machines without dedicated graphics hardware. This approach influenced later games by demonstrating how to optimize player-environment interactions in constrained systems. Games like Doom and Quake built on these principles, further refining real-time interactivity."
  - id: "spawn-player-initialization"
    line_start: 1092
    line_end: 1118
    title: "The Code That Places You in the World"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `SpawnPlayer` function initializes the player's position, state, and attributes when the game begins or a level starts. It calculates the player's coordinates, sets their initial angle based on the starting direction, and assigns flags to manage their behavior. This routine also calls `InitAreas`, which prepares the game's spatial awareness system. In the early '90s, initializing player states efficiently was crucial for games like Wolfenstein 3D, where fast-paced action demanded quick transitions between levels. Carmack's use of bit-shifting for coordinate calculations highlights his mastery of low-level optimization techniques. This function laid the groundwork for player initialization routines in later first-person shooters, ensuring seamless gameplay and consistent player experience."
  - id: "knife-attack-close-combat"
    line_start: 1121
    line_end: 1164
    title: "The Algorithm for Close Combat"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `KnifeAttack` function handles close-range combat by identifying the nearest shootable enemy within a specific range. It iterates through visible objects, calculates their distance, and determines the closest target. If an enemy is within striking distance, it applies damage using a random number generator. This mechanic added tension and strategy to the gameplay, as players had to manage proximity and timing during knife attacks. In the early '90s, implementing such mechanics on limited hardware required ingenious design. Carmack's approach to object visibility and distance checks influenced later games, including Doom, which expanded on these ideas with more complex enemy behaviors and weapon systems."
  - id: "gun-attack-targeting"
    line_start: 1168
    line_end: 1243
    title: "How Wolfenstein 3D Aimed and Fired"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `GunAttack` function is responsible for ranged combat, finding targets and calculating damage based on distance. It iterates through potential enemies, checks visibility, and traces a line to ensure the shot is unobstructed. Damage is scaled based on proximity, adding realism to the shooting mechanics. This function also plays sound effects for different weapons, enhancing the player's experience. In 1992, simulating realistic gunfire on limited hardware was a technical challenge. Carmack's use of efficient loops and conditional checks ensured smooth gameplay without sacrificing performance. This targeting system influenced later FPS games, including Doom and Quake, which expanded on these mechanics with more sophisticated physics and AI."
  - id: "victory-spin-celebration"
    line_start: 1245
    line_end: 1280
    title: "The Code Behind Victory Spins"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `VictorySpin` function animates the player's celebratory spin upon completing a level. It adjusts the player's angle and position incrementally to create a smooth spinning effect. This visual flair added a sense of accomplishment and style to the game, rewarding players for their progress. In the early '90s, such animations were rare in games due to hardware limitations, but id Software prioritized player satisfaction and immersion. This function exemplifies their attention to detail, influencing later games to include celebratory animations and effects as part of the gameplay experience."
  - id: "t-attack-player-actions"
    line_start: 1283
    line_end: 1379
    title: "The Heart of Player Combat"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `T_Attack` function orchestrates the player's combat actions, including weapon handling, ammo management, and attack animations. It updates the player's state based on their chosen weapon and tracks the attack frame to determine when to fire or strike. This function integrates multiple systems, such as sound playback, damage calculation, and visual updates, to create a cohesive combat experience. In 1992, combining these elements into a seamless routine was a technical achievement, showcasing id Software's ability to push the boundaries of real-time gameplay. The modular design of this function influenced later FPS engines, enabling developers to create dynamic and responsive combat systems."
  - id: "t-player-movement-and-actions"
    line_start: 1383
    line_end: 1419
    title: "The Code That Moves the Player"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `T_Player` function handles the player's movement and interactions during gameplay. It checks for victory conditions, updates the player's face animation, and processes input for actions like using objects or attacking. This function also recalculates the player's position and tile coordinates, ensuring accurate collision detection and interaction. In the early '90s, real-time player control was a novel feature, requiring efficient algorithms to handle input and movement seamlessly. Carmack's implementation set a standard for FPS games, influencing titles like Doom and Quake, which expanded on these mechanics with more complex environments and player abilities."

---

```asm
// WL_AGENT.C

#include "WL_DEF.H"
#pragma hdrstop


/*
=============================================================================

						 LOCAL CONSTANTS

=============================================================================
*/

#define MAXMOUSETURN	10


#define MOVESCALE		150l
#define BACKMOVESCALE	100l
#define ANGLESCALE		20

/*
=============================================================================

						 GLOBAL VARIABLES

=============================================================================
*/



//
// player state info
//
boolean		running;
long		thrustspeed;

unsigned	plux,pluy;			// player coordinates scaled to unsigned

int			anglefrac;
int			gotgatgun;	// JR

objtype		*LastAttacker;

/*
=============================================================================

						 LOCAL VARIABLES

=============================================================================
*/


void	T_Player (objtype *ob);
void	T_Attack (objtype *ob);

statetype s_player = {false,0,0,T_Player,NULL,NULL};
statetype s_attack = {false,0,0,T_Attack,NULL,NULL};


long	playerxmove,playerymove;

struct atkinf
{
	char	tics,attack,frame;		// attack is 1 for gun, 2 for knife
} attackinfo[4][14] =

{
{ {6,0,1},{6,2,2},{6,0,3},{6,-1,4} },
{ {6,0,1},{6,1,2},{6,0,3},{6,-1,4} },
{ {6,0,1},{6,1,2},{6,3,3},{6,-1,4} },
{ {6,0,1},{6,1,2},{6,4,3},{6,-1,4} },
};


int	strafeangle[9] = {0,90,180,270,45,135,225,315,0};

void DrawWeapon (void);
void GiveWeapon (int weapon);
void	GiveAmmo (int ammo);

//===========================================================================

//----------

void Attack (void);
void Use (void);
void Search (objtype *ob);
void SelectWeapon (void);
void SelectItem (void);

//----------

boolean TryMove (objtype *ob);
void T_Player (objtype *ob);

void ClipMove (objtype *ob, long xmove, long ymove);

/*
=============================================================================

						CONTROL STUFF

=============================================================================
*/

/*
======================
=
= CheckWeaponChange
=
= Keys 1-4 change weapons
=
======================
*/

void CheckWeaponChange (void)
{
	int	i,buttons;

	if (!gamestate.ammo)		// must use knife with no ammo
		return;

	for (i=wp_knife ; i<=gamestate.bestweapon ; i++)
		if (buttonstate[bt_readyknife+i-wp_knife])
		{
			gamestate.weapon = gamestate.chosenweapon = i;
			DrawWeapon ();
			return;
		}
}


/*
=======================
=
= ControlMovement
=
= Takes controlx,controly, and buttonstate[bt_strafe]
=
= Changes the player's angle and position
=
= There is an angle hack because when going 70 fps, the roundoff becomes
= significant
=
=======================
*/

void ControlMovement (objtype *ob)
{
	long	oldx,oldy;
	int		angle,maxxmove;
	int		angleunits;
	long	speed;

	thrustspeed = 0;

	oldx = player->x;
	oldy = player->y;

//
// side to side move
//
	if (buttonstate[bt_strafe])
	{
	//
	// strafing
	//
	//
		if (controlx > 0)
		{
			angle = ob->angle - ANGLES/4;
			if (angle < 0)
				angle += ANGLES;
			Thrust (angle,controlx*MOVESCALE);	// move to left
		}
		else if (controlx < 0)
		{
			angle = ob->angle + ANGLES/4;
			if (angle >= ANGLES)
				angle -= ANGLES;
			Thrust (angle,-controlx*MOVESCALE);	// move to right
		}
	}
	else
	{
	//
	// not strafing
	//
		anglefrac += controlx;
		angleunits = anglefrac/ANGLESCALE;
		anglefrac -= angleunits*ANGLESCALE;
		ob->angle -= angleunits;

		if (ob->angle >= ANGLES)
			ob->angle -= ANGLES;
		if (ob->angle < 0)
			ob->angle += ANGLES;

	}

//
// forward/backwards move
//
	if (controly < 0)
	{
		Thrust (ob->angle,-controly*MOVESCALE);	// move forwards
	}
	else if (controly > 0)
	{
		angle = ob->angle + ANGLES/2;
		if (angle >= ANGLES)
			angle -= ANGLES;
		Thrust (angle,controly*BACKMOVESCALE);		// move backwards
	}

	if (gamestate.victoryflag)		// watching the BJ actor
		return;

//
// calculate total move
//
	playerxmove = player->x - oldx;
	playerymove = player->y - oldy;
}

/*
=============================================================================

					STATUS WINDOW STUFF

=============================================================================
*/


/*
==================
=
= StatusDrawPic
=
==================
*/

void StatusDrawPic (unsigned x, unsigned y, unsigned picnum)
{
	unsigned	temp;

	temp = bufferofs;
	bufferofs = 0;

	bufferofs = PAGE1START+(200-STATUSLINES)*SCREENWIDTH;
	LatchDrawPic (x,y,picnum);
	bufferofs = PAGE2START+(200-STATUSLINES)*SCREENWIDTH;
	LatchDrawPic (x,y,picnum);
	bufferofs = PAGE3START+(200-STATUSLINES)*SCREENWIDTH;
	LatchDrawPic (x,y,picnum);

	bufferofs = temp;
}


/*
==================
=
= DrawFace
=
==================
*/

void DrawFace (void)
{
	if (gamestate.health)
	{
		#ifdef SPEAR
		if (godmode)
			StatusDrawPic (17,4,GODMODEFACE1PIC+gamestate.faceframe);
		else
		#endif
		StatusDrawPic (17,4,FACE1APIC+3*((100-gamestate.health)/16)+gamestate.faceframe);
	}
	else
	{
#ifndef SPEAR
	 if (LastAttacker->obclass == needleobj)
	   StatusDrawPic (17,4,MUTANTBJPIC);
	 else
#endif
	   StatusDrawPic (17,4,FACE8APIC);
	}
}


/*
===============
=
= UpdateFace
=
= Calls draw face if time to change
=
===============
*/

#define FACETICS	70

int	facecount;

void	UpdateFace (void)
{

	if (SD_SoundPlaying() == GETGATLINGSND)
	  return;

	facecount += tics;
	if (facecount > US_RndT())
	{
		gamestate.faceframe = (US_RndT()>>6);
		if (gamestate.faceframe==3)
			gamestate.faceframe = 1;

		facecount = 0;
		DrawFace ();
	}
}



/*
===============
=
= LatchNumber
=
= right justifies and pads with blanks
=
===============
*/

void	LatchNumber (int x, int y, int width, long number)
{
	unsigned	length,c;
	char	str[20];

	ltoa (number,str,10);

	length = strlen (str);

	while (length<width)
	{
		StatusDrawPic (x,y,N_BLANKPIC);
		x++;
		width--;
	}

	c= length <= width ? 0 : length-width;

	while (c<length)
	{
		StatusDrawPic (x,y,str[c]-'0'+ N_0PIC);
		x++;
		c++;
	}
}


/*
===============
=
= DrawHealth
=
===============
*/

void	DrawHealth (void)
{
	LatchNumber (21,16,3,gamestate.health);
}


/*
===============
=
= TakeDamage
=
===============
*/

void	TakeDamage (int points,objtype *attacker)
{
	LastAttacker = attacker;

	if (gamestate.victoryflag)
		return;
	if (gamestate.difficulty==gd_baby)
	  points>>=2;

	if (!godmode)
		gamestate.health -= points;

	if (gamestate.health<=0)
	{
		gamestate.health = 0;
		playstate = ex_died;
		killerobj = attacker;
	}

	StartDamageFlash (points);

	gotgatgun=0;

	DrawHealth ();
	DrawFace ();

	//
	// MAKE BJ'S EYES BUG IF MAJOR DAMAGE!
	//
	#ifdef SPEAR
	if (points > 30 && gamestate.health!=0 && !godmode)
	{
		StatusDrawPic (17,4,BJOUCHPIC);
		facecount = 0;
	}
	#endif

}


/*
===============
=
= HealSelf
=
===============
*/

void	HealSelf (int points)
{
	gamestate.health += points;
	if (gamestate.health>100)
		gamestate.health = 100;

	DrawHealth ();
	gotgatgun = 0;	// JR
	DrawFace ();
}


//===========================================================================


/*
===============
=
= DrawLevel
=
===============
*/

void	DrawLevel (void)
{
#ifdef SPEAR
	if (gamestate.mapon == 20)
		LatchNumber (2,16,2,18);
	else
#endif
	LatchNumber (2,16,2,gamestate.mapon+1);
}

//===========================================================================


/*
===============
=
= DrawLives
=
===============
*/

void	DrawLives (void)
{
	LatchNumber (14,16,1,gamestate.lives);
}


/*
===============
=
= GiveExtraMan
=
===============
*/

void	GiveExtraMan (void)
{
	if (gamestate.lives<9)
		gamestate.lives++;
	DrawLives ();
	SD_PlaySound (BONUS1UPSND);
}

//===========================================================================

/*
===============
=
= DrawScore
=
===============
*/

void	DrawScore (void)
{
	LatchNumber (6,16,6,gamestate.score);
}

/*
===============
=
= GivePoints
=
===============
*/

void	GivePoints (long points)
{
	gamestate.score += points;
	while (gamestate.score >= gamestate.nextextra)
	{
		gamestate.nextextra += EXTRAPOINTS;
		GiveExtraMan ();
	}
	DrawScore ();
}

//===========================================================================

/*
==================
=
= DrawWeapon
=
==================
*/

void DrawWeapon (void)
{
	StatusDrawPic (32,8,KNIFEPIC+gamestate.weapon);
}


/*
==================
=
= DrawKeys
=
==================
*/

void DrawKeys (void)
{
	if (gamestate.keys & 1)
		StatusDrawPic (30,4,GOLDKEYPIC);
	else
		StatusDrawPic (30,4,NOKEYPIC);

	if (gamestate.keys & 2)
		StatusDrawPic (30,20,SILVERKEYPIC);
	else
		StatusDrawPic (30,20,NOKEYPIC);
}



/*
==================
=
= GiveWeapon
=
==================
*/

void GiveWeapon (int weapon)
{
	GiveAmmo (6);

	if (gamestate.bestweapon<weapon)
		gamestate.bestweapon = gamestate.weapon
		= gamestate.chosenweapon = weapon;

	DrawWeapon ();
}


//===========================================================================

/*
===============
=
= DrawAmmo
=
===============
*/

void	DrawAmmo (void)
{
	LatchNumber (27,16,2,gamestate.ammo);
}


/*
===============
=
= GiveAmmo
=
===============
*/

void	GiveAmmo (int ammo)
{
	if (!gamestate.ammo)				// knife was out
	{
		if (!gamestate.attackframe)
		{
			gamestate.weapon = gamestate.chosenweapon;
			DrawWeapon ();
		}
	}
	gamestate.ammo += ammo;
	if (gamestate.ammo > 99)
		gamestate.ammo = 99;
	DrawAmmo ();
}

//===========================================================================

/*
==================
=
= GiveKey
=
==================
*/

void GiveKey (int key)
{
	gamestate.keys |= (1<<key);
	DrawKeys ();
}



/*
=============================================================================

							MOVEMENT

=============================================================================
*/


/*
===================
=
= GetBonus
=
===================
*/
void GetBonus (statobj_t *check)
{
	switch (check->itemnumber)
	{
	case	bo_firstaid:
		if (gamestate.health == 100)
			return;

		SD_PlaySound (HEALTH2SND);
		HealSelf (25);
		break;

	case	bo_key1:
	case	bo_key2:
	case	bo_key3:
	case	bo_key4:
		GiveKey (check->itemnumber - bo_key1);
		SD_PlaySound (GETKEYSND);
		break;

	case	bo_cross:
		SD_PlaySound (BONUS1SND);
		GivePoints (100);
		gamestate.treasurecount++;
		break;
	case	bo_chalice:
		SD_PlaySound (BONUS2SND);
		GivePoints (500);
		gamestate.treasurecount++;
		break;
	case	bo_bible:
		SD_PlaySound (BONUS3SND);
		GivePoints (1000);
		gamestate.treasurecount++;
		break;
	case	bo_crown:
		SD_PlaySound (BONUS4SND);
		GivePoints (5000);
		gamestate.treasurecount++;
		break;

	case	bo_clip:
		if (gamestate.ammo == 99)
			return;

		SD_PlaySound (GETAMMOSND);
		GiveAmmo (8);
		break;
	case	bo_clip2:
		if (gamestate.ammo == 99)
			return;

		SD_PlaySound (GETAMMOSND);
		GiveAmmo (4);
		break;

#ifdef SPEAR
	case	bo_25clip:
		if (gamestate.ammo == 99)
		  return;

		SD_PlaySound (GETAMMOBOXSND);
		GiveAmmo (25);
		break;
#endif

	case	bo_machinegun:
		SD_PlaySound (GETMACHINESND);
		GiveWeapon (wp_machinegun);
		break;
	case	bo_chaingun:
		SD_PlaySound (GETGATLINGSND);
		GiveWeapon (wp_chaingun);

		StatusDrawPic (17,4,GOTGATLINGPIC);
		facecount = 0;
		gotgatgun = 1;
		break;

	case	bo_fullheal:
		SD_PlaySound (BONUS1UPSND);
		HealSelf (99);
		GiveAmmo (25);
		GiveExtraMan ();
		gamestate.treasurecount++;
		break;

	case	bo_food:
		if (gamestate.health == 100)
			return;

		SD_PlaySound (HEALTH1SND);
		HealSelf (10);
		break;

	case	bo_alpo:
		if (gamestate.health == 100)
			return;

		SD_PlaySound (HEALTH1SND);
		HealSelf (4);
		break;

	case	bo_gibs:
		if (gamestate.health >10)
			return;

		SD_PlaySound (SLURPIESND);
		HealSelf (1);
		break;

	case	bo_spear:
		spearflag = true;
		spearx = player->x;
		speary = player->y;
		spearangle = player->angle;
		playstate = ex_completed;
	}

	StartBonusFlash ();
	check->shapenum = -1;			// remove from list
}


/*
===================
=
= TryMove
=
= returns true if move ok
= debug: use pointers to optimize
===================
*/

boolean TryMove (objtype *ob)
{
	int			xl,yl,xh,yh,x,y;
	objtype		*check;
	long		deltax,deltay;

	xl = (ob->x-PLAYERSIZE) >>TILESHIFT;
	yl = (ob->y-PLAYERSIZE) >>TILESHIFT;

	xh = (ob->x+PLAYERSIZE) >>TILESHIFT;
	yh = (ob->y+PLAYERSIZE) >>TILESHIFT;

//
// check for solid walls
//
	for (y=yl;y<=yh;y++)
		for (x=xl;x<=xh;x++)
		{
			check = actorat[x][y];
			if (check && check<objlist)
				return false;
		}

//
// check for actors
//
	if (yl>0)
		yl--;
	if (yh<MAPSIZE-1)
		yh++;
	if (xl>0)
		xl--;
	if (xh<MAPSIZE-1)
		xh++;

	for (y=yl;y<=yh;y++)
		for (x=xl;x<=xh;x++)
		{
			check = actorat[x][y];
			if (check > objlist
			&& (check->flags & FL_SHOOTABLE) )
			{
				deltax = ob->x - check->x;
				if (deltax < -MINACTORDIST || deltax > MINACTORDIST)
					continue;
				deltay = ob->y - check->y;
				if (deltay < -MINACTORDIST || deltay > MINACTORDIST)
					continue;

				return false;
			}
		}

	return true;
}


/*
===================
=
= ClipMove
=
===================
*/

void ClipMove (objtype *ob, long xmove, long ymove)
{
	long	basex,basey;

	basex = ob->x;
	basey = ob->y;

	ob->x = basex+xmove;
	ob->y = basey+ymove;
	if (TryMove (ob))
		return;

	if (noclip && ob->x > 2*TILEGLOBAL && ob->y > 2*TILEGLOBAL &&
	ob->x < (((long)(mapwidth-1))<<TILESHIFT)
	&& ob->y < (((long)(mapheight-1))<<TILESHIFT) )
		return;		// walk through walls

	if (!SD_SoundPlaying())
		SD_PlaySound (HITWALLSND);

	ob->x = basex+xmove;
	ob->y = basey;
	if (TryMove (ob))
		return;

	ob->x = basex;
	ob->y = basey+ymove;
	if (TryMove (ob))
		return;

	ob->x = basex;
	ob->y = basey;
}

//==========================================================================

/*
===================
=
= VictoryTile
=
===================
*/

void VictoryTile (void)
{
#ifndef SPEAR
	SpawnBJVictory ();
#endif

	gamestate.victoryflag = true;
}


/*
===================
=
= Thrust
=
===================
*/

void Thrust (int angle, long speed)
{
	long xmove,ymove;
	long	slowmax;
	unsigned	offset;


	//
	// ZERO FUNNY COUNTER IF MOVED!
	//
	#ifdef SPEAR
	if (speed)
		funnyticount = 0;
	#endif

	thrustspeed += speed;
//
// moving bounds speed
//
	if (speed >= MINDIST*2)
		speed = MINDIST*2-1;

	xmove = FixedByFrac(speed,costable[angle]);
	ymove = -FixedByFrac(speed,sintable[angle]);

	ClipMove(player,xmove,ymove);

	player->tilex = player->x >> TILESHIFT;		// scale to tile values
	player->tiley = player->y >> TILESHIFT;

	offset = farmapylookup[player->tiley]+player->tilex;
	player->areanumber = *(mapsegs[0] + offset) -AREATILE;

	if (*(mapsegs[1] + offset) == EXITTILE)
		VictoryTile ();
}


/*
=============================================================================

								ACTIONS

=============================================================================
*/


/*
===============
=
= Cmd_Fire
=
===============
*/

void Cmd_Fire (void)
{
	buttonheld[bt_attack] = true;

	gamestate.weaponframe = 0;

	player->state = &s_attack;

	gamestate.attackframe = 0;
	gamestate.attackcount =
		attackinfo[gamestate.weapon][gamestate.attackframe].tics;
	gamestate.weaponframe =
		attackinfo[gamestate.weapon][gamestate.attackframe].frame;
}

//===========================================================================

/*
===============
=
= Cmd_Use
=
===============
*/

void Cmd_Use (void)
{
	objtype 	*check;
	int			checkx,checky,doornum,dir;
	boolean		elevatorok;


//
// find which cardinal direction the player is facing
//
	if (player->angle < ANGLES/8 || player->angle > 7*ANGLES/8)
	{
		checkx = player->tilex + 1;
		checky = player->tiley;
		dir = di_east;
		elevatorok = true;
	}
	else if (player->angle < 3*ANGLES/8)
	{
		checkx = player->tilex;
		checky = player->tiley-1;
		dir = di_north;
		elevatorok = false;
	}
	else if (player->angle < 5*ANGLES/8)
	{
		checkx = player->tilex - 1;
		checky = player->tiley;
		dir = di_west;
		elevatorok = true;
	}
	else
	{
		checkx = player->tilex;
		checky = player->tiley + 1;
		dir = di_south;
		elevatorok = false;
	}

	doornum = tilemap[checkx][checky];
	if (*(mapsegs[1]+farmapylookup[checky]+checkx) == PUSHABLETILE)
	{
	//
	// pushable wall
	//

		PushWall (checkx,checky,dir);
		return;
	}
	if (!buttonheld[bt_use] && doornum == ELEVATORTILE && elevatorok)
	{
	//
	// use elevator
	//
		buttonheld[bt_use] = true;

		tilemap[checkx][checky]++;		// flip switch
		if (*(mapsegs[0]+farmapylookup[player->tiley]+player->tilex) == ALTELEVATORTILE)
			playstate = ex_secretlevel;
		else
			playstate = ex_completed;
		SD_PlaySound (LEVELDONESND);
		SD_WaitSoundDone();
	}
	else if (!buttonheld[bt_use] && doornum & 0x80)
	{
		buttonheld[bt_use] = true;
		OperateDoor (doornum & ~0x80);
	}
	else
		SD_PlaySound (DONOTHINGSND);

}

/*
=============================================================================

						   PLAYER CONTROL

=============================================================================
*/



/*
===============
=
= SpawnPlayer
=
===============
*/

void SpawnPlayer (int tilex, int tiley, int dir)
{
	player->obclass = playerobj;
	player->active = true;
	player->tilex = tilex;
	player->tiley = tiley;
	player->areanumber =
		*(mapsegs[0] + farmapylookup[player->tiley]+player->tilex);
	player->x = ((long)tilex<<TILESHIFT)+TILEGLOBAL/2;
	player->y = ((long)tiley<<TILESHIFT)+TILEGLOBAL/2;
	player->state = &s_player;
	player->angle = (1-dir)*90;
	if (player->angle<0)
		player->angle += ANGLES;
	player->flags = FL_NEVERMARK;
	Thrust (0,0);				// set some variables

	InitAreas ();
}


//===========================================================================

/*
===============
=
= T_KnifeAttack
=
= Update player hands, and try to do damage when the proper frame is reached
=
===============
*/

void	KnifeAttack (objtype *ob)
{
	objtype *check,*closest;
	long	dist;

	SD_PlaySound (ATKKNIFESND);
// actually fire
	dist = 0x7fffffff;
	closest = NULL;
	for (check=ob->next ; check ; check=check->next)
		if ( (check->flags & FL_SHOOTABLE)
		&& (check->flags & FL_VISABLE)
		&& abs (check->viewx-centerx) < shootdelta
		)
		{
			if (check->transx < dist)
			{
				dist = check->transx;
				closest = check;
			}
		}

	if (!closest || dist> 0x18000l)
	{
	// missed

		return;
	}

// hit something
	DamageActor (closest,US_RndT() >> 4);
}



void	GunAttack (objtype *ob)
{
	objtype *check,*closest,*oldclosest;
	int		damage;
	int		dx,dy,dist;
	long	viewdist;

	switch (gamestate.weapon)
	{
	case wp_pistol:
		SD_PlaySound (ATKPISTOLSND);
		break;
	case wp_machinegun:
		SD_PlaySound (ATKMACHINEGUNSND);
		break;
	case wp_chaingun:
		SD_PlaySound (ATKGATLINGSND);
		break;
	}

	madenoise = true;

//
// find potential targets
//
	viewdist = 0x7fffffffl;
	closest = NULL;

	while (1)
	{
		oldclosest = closest;

		for (check=ob->next ; check ; check=check->next)
			if ( (check->flags & FL_SHOOTABLE)
			&& (check->flags & FL_VISABLE)
			&& abs (check->viewx-centerx) < shootdelta
			)
			{
				if (check->transx < viewdist)
				{
					viewdist = check->transx;
					closest = check;
				}
			}

		if (closest == oldclosest)
			return;						// no more targets, all missed

	//
	// trace a line from player to enemey
	//
		if (CheckLine(closest))
			break;

	}

//
// hit something
//
	dx = abs(closest->tilex - player->tilex);
	dy = abs(closest->tiley - player->tiley);
	dist = dx>dy ? dx:dy;

	if (dist<2)
		damage = US_RndT() / 4;
	else if (dist<4)
		damage = US_RndT() / 6;
	else
	{
		if ( (US_RndT() / 12) < dist)		// missed
			return;
		damage = US_RndT() / 6;
	}

	DamageActor (closest,damage);
}

//===========================================================================

/*
===============
=
= VictorySpin
=
===============
*/

void VictorySpin (void)
{
	long	desty;

	if (player->angle > 270)
	{
		player->angle -= tics * 3;
		if (player->angle < 270)
			player->angle = 270;
	}
	else if (player->angle < 270)
	{
		player->angle += tics * 3;
		if (player->angle > 270)
			player->angle = 270;
	}

	desty = (((long)player->tiley-5)<<TILESHIFT)-0x3000;

	if (player->y > desty)
	{
		player->y -= tics*4096;
		if (player->y < desty)
			player->y = desty;
	}
}


//===========================================================================

/*
===============
=
= T_Attack
=
===============
*/

void	T_Attack (objtype *ob)
{
	struct	atkinf	*cur;

	UpdateFace ();

	if (gamestate.victoryflag)		// watching the BJ actor
	{
		VictorySpin ();
		return;
	}

	if ( buttonstate[bt_use] && !buttonheld[bt_use] )
		buttonstate[bt_use] = false;

	if ( buttonstate[bt_attack] && !buttonheld[bt_attack])
		buttonstate[bt_attack] = false;

	ControlMovement (ob);
	if (gamestate.victoryflag)		// watching the BJ actor
		return;

	plux = player->x >> UNSIGNEDSHIFT;			// scale to fit in unsigned
	pluy = player->y >> UNSIGNEDSHIFT;
	player->tilex = player->x >> TILESHIFT;		// scale to tile values
	player->tiley = player->y >> TILESHIFT;

//
// change frame and fire
//
	gamestate.attackcount -= tics;
	while (gamestate.attackcount <= 0)
	{
		cur = &attackinfo[gamestate.weapon][gamestate.attackframe];
		switch (cur->attack)
		{
		case -1:
			ob->state = &s_player;
			if (!gamestate.ammo)
			{
				gamestate.weapon = wp_knife;
				DrawWeapon ();
			}
			else
			{
				if (gamestate.weapon != gamestate.chosenweapon)
				{
					gamestate.weapon = gamestate.chosenweapon;
					DrawWeapon ();
				}
			};
			gamestate.attackframe = gamestate.weaponframe = 0;
			return;

		case 4:
			if (!gamestate.ammo)
				break;
			if (buttonstate[bt_attack])
				gamestate.attackframe -= 2;
		case 1:
			if (!gamestate.ammo)
			{	// can only happen with chain gun
				gamestate.attackframe++;
				break;
			}
			GunAttack (ob);
			gamestate.ammo--;
			DrawAmmo ();
			break;

		case 2:
			KnifeAttack (ob);
			break;

		case 3:
			if (gamestate.ammo && buttonstate[bt_attack])
				gamestate.attackframe -= 2;
			break;
		}

		gamestate.attackcount += cur->tics;
		gamestate.attackframe++;
		gamestate.weaponframe =
			attackinfo[gamestate.weapon][gamestate.attackframe].frame;
	}

}



//===========================================================================

/*
===============
=
= T_Player
=
===============
*/

void	T_Player (objtype *ob)
{
	if (gamestate.victoryflag)		// watching the BJ actor
	{
		VictorySpin ();
		return;
	}

	UpdateFace ();
	CheckWeaponChange ();

	if ( buttonstate[bt_use] )
		Cmd_Use ();

	if ( buttonstate[bt_attack] && !buttonheld[bt_attack])
		Cmd_Fire ();

	ControlMovement (ob);
	if (gamestate.victoryflag)		// watching the BJ actor
		return;


	plux = player->x >> UNSIGNEDSHIFT;			// scale to fit in unsigned
	pluy = player->y >> UNSIGNEDSHIFT;
	player->tilex = player->x >> TILESHIFT;		// scale to tile values
	player->tiley = player->y >> TILESHIFT;
}
```
