---
title: "m_menu.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/m_menu.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/m_menu.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "m-menu-c"
order: 25
description: "This file implements DOOM's menu system, a critical interface for player interaction in one of gaming's most influential titles."

summary:
  - point: "Defines menu structures for episodes, options, and save/load functionality"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM"
  - point: "Introduces modular menu handling with reusable components"
    link: "https://en.wikipedia.org/wiki/Menu_(computing)"
    link_label: "Menu Systems"
  - point: "Includes clever hacks to handle platform-specific quirks"
    link: "https://en.wikipedia.org/wiki/Software_portability"
    link_label: "Software Portability"

enhancements:
  - id: "menu-data-structures"
    line_start: 137
    line_end: 167
    title: "Reusable menu structures for modular design"
    wikipedia_url: "https://en.wikipedia.org/wiki/Menu_(computing)"
    image_url: ""
    image_caption: ""
    content: "This section defines the `menuitem_t` and `menu_t` structures, which are the backbone of DOOM's menu system. Each menu item (`menuitem_t`) includes attributes like its status, name, associated routine, and hotkey, while the menu itself (`menu_t`) organizes these items into a cohesive interface with properties like position, drawing routine, and navigation links to previous menus. By abstracting menu functionality into reusable structures, DOOM achieves a modular design that simplifies the addition and modification of menus. In 1993, modular design principles were becoming more common in software engineering, influenced by the growing complexity of programs and the need for maintainability. John Carmack's focus on clean, efficient code is evident here, as these structures allow the same menu-handling logic to be applied across different contexts, such as episode selection, game options, and save/load screens. This approach influenced later game engines, including id Software's own Quake engine, which further refined modular UI systems. Today, similar abstractions are standard in game development frameworks like Unity and Unreal Engine."
  - id: "main-menu-definition"
    line_start: 250
    line_end: 269
    title: "Defining DOOM's iconic main menu"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines the main menu of DOOM, including its items like 'New Game', 'Options', 'Load Game', 'Save Game', 'Read This', and 'Quit DOOM'. Each menu item is linked to a specific function, such as `M_NewGame` or `M_Options`, which handle the corresponding action. The menu is positioned at coordinates (97, 64) on the screen, and the `M_DrawMainMenu` routine is responsible for rendering it. In the early 1990s, menus in games were often simple and utilitarian, but DOOM's menu system stood out for its responsiveness and integration with the game's aesthetic. The modular design allowed for easy navigation and quick access to essential functions, enhancing the player's experience. This menu system became a template for many first-person shooters that followed, influencing titles like Quake and Unreal. Its simplicity and effectiveness are still studied in game design courses today."
  - id: "episode-selection-menu"
    line_start: 272
    line_end: 300
    title: "Episode selection: branching narratives"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The episode selection menu allows players to choose between different chapters of the game, such as 'Knee-Deep in the Dead' or 'Thy Flesh Consumed'. Each episode is represented as a menu item linked to the `M_Episode` function, which initiates the selected chapter. The menu is positioned at (48, 63) and rendered using the `M_DrawEpisode` routine. This design reflects DOOM's episodic structure, which was inspired by shareware distribution models prevalent in the early 1990s. Shareware allowed players to try the first episode for free, enticing them to purchase the full game. This approach was highly successful for id Software, helping DOOM reach millions of players and establish its legacy. The episodic format influenced later games like Half-Life, which adopted a similar structure for its expansions and sequels."
  - id: "save-load-system"
    line_start: 507
    line_end: 534
    title: "Reading save game strings: persistence in play"
    wikipedia_url: "https://en.wikipedia.org/wiki/Save_(video_gaming)"
    image_url: ""
    image_caption: ""
    content: "The `M_ReadSaveStrings` function reads save game descriptions from disk, populating the `savegamestrings` array with the names of saved games. If a save file is missing, it assigns a default empty string and disables the corresponding menu item. This function uses platform-specific file handling, such as checking for the `-cdrom` parameter to adjust file paths for CD-ROM installations. In the early 1990s, save systems were a critical feature for games, allowing players to preserve progress in increasingly complex worlds. DOOM's save/load system was robust and user-friendly, contributing to its accessibility and replayability. The concept of save slots became a standard in gaming, influencing titles across genres, from RPGs like Final Fantasy to modern shooters like Call of Duty."
  - id: "quick-save-and-load"
    line_start: 676
    line_end: 743
    title: "Quick save/load: streamlining player experience"
    wikipedia_url: "https://en.wikipedia.org/wiki/Save_(video_gaming)"
    image_url: ""
    image_caption: ""
    content: "The quick save/load system in DOOM allows players to rapidly save and resume their progress with minimal interruption. The `M_QuickSave` function initiates a save operation, prompting the player to confirm the action if a slot has already been selected. Similarly, `M_QuickLoad` retrieves the last quick save, ensuring a seamless return to gameplay. This feature was a significant innovation in 1993, reducing frustration for players navigating challenging levels. Quick save/load systems became a hallmark of PC gaming, appearing in titles like Half-Life and Skyrim. They remain a critical feature in modern games, reflecting DOOM's enduring influence on usability and player-centric design."
  - id: "sound-volume-control"
    line_start: 798
    line_end: 847
    title: "Dynamic sound volume adjustment"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section implements the ability to adjust sound effects and music volume dynamically within the game menu. The functions `M_SfxVol` and `M_MusicVol` allow the player to increase or decrease volume levels, constrained between 0 and 15. The actual volume adjustment is handled by the `S_SetSfxVolume` and `S_SetMusicVolume` functions. In 1993, sound design in games was becoming increasingly important, and DOOM's approach to giving players control over audio settings was ahead of its time. This feature would later become standard in video games, influencing titles across genres. The ability to adjust sound dynamically reflects the developers' focus on user experience and adaptability to different hardware setups."
  - id: "menu-navigation-icons"
    line_start: 853
    line_end: 870
    title: "Rendering menu navigation icons"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bitmap_fonts"
    image_url: ""
    image_caption: ""
    content: "The `M_DrawMainMenu` and `M_DrawNewGame` functions use bitmap patches to render the main menu and new game options. These patches are loaded from the game's WAD file using the `W_CacheLumpName` function. Bitmap fonts and graphics were a common choice for games in the early 1990s due to their simplicity and compatibility with limited hardware. DOOM's menu design was visually striking and easy to navigate, setting a precedent for future games that combined aesthetic appeal with functional design. The use of bitmap patches also highlights the importance of efficient memory management in an era when hardware constraints were a significant challenge."
  - id: "episode-selection"
    line_start: 889
    line_end: 940
    title: "Episode selection and verification"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section handles the episode selection menu, allowing players to choose which campaign episode to play. The `M_Episode` function includes checks for shareware and registered versions of the game, ensuring compatibility with different editions. The `M_VerifyNightmare` function introduces a confirmation dialog for the 'Nightmare' difficulty, emphasizing the game's challenging nature. These features reflect DOOM's modular design, which accommodated various distribution models, including shareware. The episode selection mechanism influenced later games that adopted similar modular approaches, such as expansion packs and downloadable content."
  - id: "menu-options-rendering"
    line_start: 945
    line_end: 965
    title: "Rendering options menu with sliders"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `M_DrawOptions` function renders the options menu, including sliders for mouse sensitivity and screen size. The sliders are drawn using the `M_DrawThermo` function, which creates a visual representation of the current setting. This graphical approach to menu design was innovative for its time, providing a clear and intuitive way for players to adjust settings. The use of sliders in menus became a standard practice in video games, influencing user interface design across the industry. DOOM's options menu demonstrates the developers' attention to usability and player customization."
  - id: "quit-doom-sequence"
    line_start: 1080
    line_end: 1093
    title: "Quit DOOM with randomized sounds"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `M_QuitResponse` function handles the sequence when a player chooses to quit the game. If the game is not in multiplayer mode, it plays a randomized sound effect from the `quitsounds` or `quitsounds2` arrays, depending on the game mode. This playful touch adds personality to the game, making even the act of quitting memorable. The randomized sounds reflect the developers' creativity and attention to detail, ensuring that every aspect of the game contributes to its immersive experience. This feature influenced later games that incorporated humor and personality into their user interfaces."
  - id: "menu-input-handling"
    line_start: 1342
    line_end: 1600
    title: "Handling menu input across devices"
    wikipedia_url: "https://en.wikipedia.org/wiki/Joystick"
    image_url: ""
    image_caption: ""
    content: "The `M_Responder` function processes input from various devices, including keyboards, mice, and joysticks, to navigate the game's menus. It includes logic for handling joystick movements, mouse clicks, and keyboard presses, ensuring compatibility with different input methods. This flexibility was crucial in 1993, as players used a variety of hardware to interact with games. The function also supports special keys for quick actions, such as saving and loading games or toggling gamma correction. DOOM's robust input handling influenced the development of cross-platform games and standardized input processing techniques in game engines like Unity and Unreal Engine."
  - id: "menu-key-navigation"
    line_start: 1608
    line_end: 1715
    title: "Navigating menus with keyboard input"
    wikipedia_url: "https://en.wikipedia.org/wiki/Keyboard_(computing)"
    image_url: ""
    image_caption: ""
    content: "This section implements the logic for navigating DOOM's menus using keyboard input. Keys like the arrow keys, Enter, Escape, and Backspace are mapped to specific actions, such as moving between menu items, selecting an option, or returning to a previous menu. The code includes sound effects for feedback, enhancing the user experience. At the time, keyboard navigation was a standard for PC games, as mice were less commonly used for gaming. John Carmack and the team designed this system to be intuitive, ensuring players could easily interact with the game menus. The approach influenced later games by establishing conventions for menu navigation that persist in modern gaming interfaces."
  - id: "menu-control-panel-initialization"
    line_start: 1720
    line_end: 1732
    title: "Activating the control panel menu"
    wikipedia_url: "https://en.wikipedia.org/wiki/User_interface"
    image_url: ""
    image_caption: ""
    content: "The `M_StartControlPanel` function initializes the main menu when the player presses the Escape key. It sets the active menu to the main menu definition (`MainDef`) and ensures the previously selected item is highlighted. This design reflects the team's focus on usability, allowing players to quickly access the menu without disrupting gameplay. In the early 1990s, such seamless transitions between gameplay and menus were a hallmark of polished game design. The function's simplicity and efficiency influenced subsequent games, which adopted similar methods for menu activation."
  - id: "menu-drawer-rendering"
    line_start: 1735
    line_end: 1805
    title: "Rendering menu graphics and animations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_pipeline"
    image_url: ""
    image_caption: ""
    content: "The `M_Drawer` function handles the rendering of DOOM's menus, including text, menu items, and the animated 'skull cursor.' It calculates positions for centering text and iterates through menu items to draw them using cached assets. The skull cursor animation adds a dynamic element to the menu, making it visually engaging. This approach demonstrates the team's mastery of efficient graphics rendering on limited hardware, as DOOM had to run smoothly on PCs with modest capabilities. The use of cached assets and simple animations influenced later games, which adopted similar techniques to balance visual appeal and performance."
  - id: "menu-clear-functionality"
    line_start: 1808
    line_end: 1816
    title: "Clearing menus and returning to gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Event-driven_programming"
    image_url: ""
    image_caption: ""
    content: "The `M_ClearMenus` function deactivates the menu and prepares the game to resume. It sets the `menuactive` flag to zero, ensuring the game logic no longer processes menu-related events. This functionality is crucial for maintaining a clean separation between gameplay and menu interactions. The design reflects the team's focus on creating a responsive and immersive experience, where players can quickly toggle between menus and gameplay. This method of clearing menus influenced later games, which adopted similar state management techniques to ensure smooth transitions."
  - id: "menu-setup-next-menu"
    line_start: 1821
    line_end: 1828
    title: "Switching to a new menu"
    wikipedia_url: "https://en.wikipedia.org/wiki/State_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The `M_SetupNextMenu` function transitions the user to a new menu. It updates the `currentMenu` pointer and sets the selected item (`itemOn`) to the last selected item in the new menu. This design ensures continuity, allowing players to pick up where they left off. The function highlights the team's attention to detail in crafting a user-friendly interface. Such state management techniques became standard in game development, influencing menu systems in later titles."
  - id: "menu-skull-animation"
    line_start: 1831
    line_end: 1841
    title: "Animating the skull cursor"
    wikipedia_url: "https://en.wikipedia.org/wiki/Computer_animation"
    image_url: ""
    image_caption: ""
    content: "The `M_Ticker` function animates the skull cursor used in DOOM's menus. It toggles between two states (`whichSkull`) every eight ticks, creating a blinking effect. This simple animation adds a dynamic and engaging element to the menu interface. In the early 1990s, such animations were a novel way to enhance user interfaces without taxing hardware. The technique influenced later games, which adopted similar methods to add visual flair to their menus."
  - id: "menu-initialization"
    line_start: 1844
    line_end: 1890
    title: "Initializing menu state and adapting to game modes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Shareware"
    image_url: ""
    image_caption: ""
    content: "The `M_Init` function initializes the menu system and adapts it based on the game's mode (e.g., shareware, retail, commercial). It sets default values for menu state variables, such as the active menu and animation counters, ensuring consistent behavior. The function also includes mode-specific adjustments, like removing unavailable episodes in shareware versions or modifying menu layouts for DOOM II. This adaptability reflects the team's effort to optimize the game for different distribution models and audiences. The approach influenced later games, which adopted similar techniques to tailor content based on licensing or version differences."

---

// Emacs style mode select   -*- C++ -*- 
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
//	DOOM selection menu, options, episode etc.
//	Sliders and icons. Kinda widget stuff.
//
//-----------------------------------------------------------------------------

static const char
rcsid[] = "$Id: m_menu.c,v 1.7 1997/02/03 22:45:10 b1 Exp $";

#include <unistd.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <stdlib.h>
#include <ctype.h>


#include "doomdef.h"
#include "dstrings.h"

#include "d_main.h"

#include "i_system.h"
#include "i_video.h"
#include "z_zone.h"
#include "v_video.h"
#include "w_wad.h"

#include "r_local.h"


#include "hu_stuff.h"

#include "g_game.h"

#include "m_argv.h"
#include "m_swap.h"

#include "s_sound.h"

#include "doomstat.h"

// Data.
#include "sounds.h"

#include "m_menu.h"



extern patch_t*		hu_font[HU_FONTSIZE];
extern boolean		message_dontfuckwithme;

extern boolean		chat_on;		// in heads-up code

//
// defaulted values
//
int			mouseSensitivity;       // has default

// Show messages has default, 0 = off, 1 = on
int			showMessages;
	

// Blocky mode, has default, 0 = high, 1 = normal
int			detailLevel;		
int			screenblocks;		// has default

// temp for screenblocks (0-9)
int			screenSize;		

// -1 = no quicksave slot picked!
int			quickSaveSlot;          

 // 1 = message to be printed
int			messageToPrint;
// ...and here is the message string!
char*			messageString;		

// message x & y
int			messx;			
int			messy;
int			messageLastMenuActive;

// timed message = no input from user
boolean			messageNeedsInput;     

void    (*messageRoutine)(int response);

#define SAVESTRINGSIZE 	24

char gammamsg[5][26] =
{
    GAMMALVL0,
    GAMMALVL1,
    GAMMALVL2,
    GAMMALVL3,
    GAMMALVL4
};

// we are going to be entering a savegame string
int			saveStringEnter;              
int             	saveSlot;	// which slot to save in
int			saveCharIndex;	// which char we're editing
// old save description before edit
char			saveOldString[SAVESTRINGSIZE];  

boolean			inhelpscreens;
boolean			menuactive;

#define SKULLXOFF		-32
#define LINEHEIGHT		16

extern boolean		sendpause;
char			savegamestrings[10][SAVESTRINGSIZE];

char	endstring[160];


//
// MENU TYPEDEFS
//
typedef struct
{
    // 0 = no cursor here, 1 = ok, 2 = arrows ok
    short	status;
    
    char	name[10];
    
    // choice = menu item #.
    // if status = 2,
    //   choice=0:leftarrow,1:rightarrow
    void	(*routine)(int choice);
    
    // hotkey in menu
    char	alphaKey;			
} menuitem_t;



typedef struct menu_s
{
    short		numitems;	// # of menu items
    struct menu_s*	prevMenu;	// previous menu
    menuitem_t*		menuitems;	// menu items
    void		(*routine)();	// draw routine
    short		x;
    short		y;		// x,y of menu
    short		lastOn;		// last item user was on in menu
} menu_t;

short		itemOn;			// menu item skull is on
short		skullAnimCounter;	// skull animation counter
short		whichSkull;		// which skull to draw

// graphic name of skulls
// warning: initializer-string for array of chars is too long
char    skullName[2][/*8*/9] = {"M_SKULL1","M_SKULL2"};

// current menudef
menu_t*	currentMenu;                          

//
// PROTOTYPES
//
void M_NewGame(int choice);
void M_Episode(int choice);
void M_ChooseSkill(int choice);
void M_LoadGame(int choice);
void M_SaveGame(int choice);
void M_Options(int choice);
void M_EndGame(int choice);
void M_ReadThis(int choice);
void M_ReadThis2(int choice);
void M_QuitDOOM(int choice);

void M_ChangeMessages(int choice);
void M_ChangeSensitivity(int choice);
void M_SfxVol(int choice);
void M_MusicVol(int choice);
void M_ChangeDetail(int choice);
void M_SizeDisplay(int choice);
void M_StartGame(int choice);
void M_Sound(int choice);

void M_FinishReadThis(int choice);
void M_LoadSelect(int choice);
void M_SaveSelect(int choice);
void M_ReadSaveStrings(void);
void M_QuickSave(void);
void M_QuickLoad(void);

void M_DrawMainMenu(void);
void M_DrawReadThis1(void);
void M_DrawReadThis2(void);
void M_DrawNewGame(void);
void M_DrawEpisode(void);
void M_DrawOptions(void);
void M_DrawSound(void);
void M_DrawLoad(void);
void M_DrawSave(void);

void M_DrawSaveLoadBorder(int x,int y);
void M_SetupNextMenu(menu_t *menudef);
void M_DrawThermo(int x,int y,int thermWidth,int thermDot);
void M_DrawEmptyCell(menu_t *menu,int item);
void M_DrawSelCell(menu_t *menu,int item);
void M_WriteText(int x, int y, char *string);
int  M_StringWidth(char *string);
int  M_StringHeight(char *string);
void M_StartControlPanel(void);
void M_StartMessage(char *string,void *routine,boolean input);
void M_StopMessage(void);
void M_ClearMenus (void);




//
// DOOM MENU
//
enum
{
    newgame = 0,
    options,
    loadgame,
    savegame,
    readthis,
    quitdoom,
    main_end
} main_e;

menuitem_t MainMenu[]=
{
    {1,"M_NGAME",M_NewGame,'n'},
    {1,"M_OPTION",M_Options,'o'},
    {1,"M_LOADG",M_LoadGame,'l'},
    {1,"M_SAVEG",M_SaveGame,'s'},
    // Another hickup with Special edition.
    {1,"M_RDTHIS",M_ReadThis,'r'},
    {1,"M_QUITG",M_QuitDOOM,'q'}
};

menu_t  MainDef =
{
    main_end,
    NULL,
    MainMenu,
    M_DrawMainMenu,
    97,64,
    0
};


//
// EPISODE SELECT
//
enum
{
    ep1,
    ep2,
    ep3,
    ep4,
    ep_end
} episodes_e;

menuitem_t EpisodeMenu[]=
{
    {1,"M_EPI1", M_Episode,'k'},
    {1,"M_EPI2", M_Episode,'t'},
    {1,"M_EPI3", M_Episode,'i'},
    {1,"M_EPI4", M_Episode,'t'}
};

menu_t  EpiDef =
{
    ep_end,		// # of menu items
    &MainDef,		// previous menu
    EpisodeMenu,	// menuitem_t ->
    M_DrawEpisode,	// drawing routine ->
    48,63,              // x,y
    ep1			// lastOn
};

//
// NEW GAME
//
enum
{
    killthings,
    toorough,
    hurtme,
    violence,
    nightmare,
    newg_end
} newgame_e;

menuitem_t NewGameMenu[]=
{
    {1,"M_JKILL",	M_ChooseSkill, 'i'},
    {1,"M_ROUGH",	M_ChooseSkill, 'h'},
    {1,"M_HURT",	M_ChooseSkill, 'h'},
    {1,"M_ULTRA",	M_ChooseSkill, 'u'},
    {1,"M_NMARE",	M_ChooseSkill, 'n'}
};

menu_t  NewDef =
{
    newg_end,		// # of menu items
    &EpiDef,		// previous menu
    NewGameMenu,	// menuitem_t ->
    M_DrawNewGame,	// drawing routine ->
    48,63,              // x,y
    hurtme		// lastOn
};



//
// OPTIONS MENU
//
enum
{
    endgame,
    messages,
    detail,
    scrnsize,
    option_empty1,
    mousesens,
    option_empty2,
    soundvol,
    opt_end
} options_e;

menuitem_t OptionsMenu[]=
{
    {1,"M_ENDGAM",	M_EndGame,'e'},
    {1,"M_MESSG",	M_ChangeMessages,'m'},
    {1,"M_DETAIL",	M_ChangeDetail,'g'},
    {2,"M_SCRNSZ",	M_SizeDisplay,'s'},
    {-1,"",0},
    {2,"M_MSENS",	M_ChangeSensitivity,'m'},
    {-1,"",0},
    {1,"M_SVOL",	M_Sound,'s'}
};

menu_t  OptionsDef =
{
    opt_end,
    &MainDef,
    OptionsMenu,
    M_DrawOptions,
    60,37,
    0
};

//
// Read This! MENU 1 & 2
//
enum
{
    rdthsempty1,
    read1_end
} read_e;

menuitem_t ReadMenu1[] =
{
    {1,"",M_ReadThis2,0}
};

menu_t  ReadDef1 =
{
    read1_end,
    &MainDef,
    ReadMenu1,
    M_DrawReadThis1,
    280,185,
    0
};

enum
{
    rdthsempty2,
    read2_end
} read_e2;

menuitem_t ReadMenu2[]=
{
    {1,"",M_FinishReadThis,0}
};

menu_t  ReadDef2 =
{
    read2_end,
    &ReadDef1,
    ReadMenu2,
    M_DrawReadThis2,
    330,175,
    0
};

//
// SOUND VOLUME MENU
//
enum
{
    sfx_vol,
    sfx_empty1,
    music_vol,
    sfx_empty2,
    sound_end
} sound_e;

menuitem_t SoundMenu[]=
{
    {2,"M_SFXVOL",M_SfxVol,'s'},
    {-1,"",0},
    {2,"M_MUSVOL",M_MusicVol,'m'},
    {-1,"",0}
};

menu_t  SoundDef =
{
    sound_end,
    &OptionsDef,
    SoundMenu,
    M_DrawSound,
    80,64,
    0
};

//
// LOAD GAME MENU
//
enum
{
    load1,
    load2,
    load3,
    load4,
    load5,
    load6,
    load_end
} load_e;

menuitem_t LoadMenu[]=
{
    {1,"", M_LoadSelect,'1'},
    {1,"", M_LoadSelect,'2'},
    {1,"", M_LoadSelect,'3'},
    {1,"", M_LoadSelect,'4'},
    {1,"", M_LoadSelect,'5'},
    {1,"", M_LoadSelect,'6'}
};

menu_t  LoadDef =
{
    load_end,
    &MainDef,
    LoadMenu,
    M_DrawLoad,
    80,54,
    0
};

//
// SAVE GAME MENU
//
menuitem_t SaveMenu[]=
{
    {1,"", M_SaveSelect,'1'},
    {1,"", M_SaveSelect,'2'},
    {1,"", M_SaveSelect,'3'},
    {1,"", M_SaveSelect,'4'},
    {1,"", M_SaveSelect,'5'},
    {1,"", M_SaveSelect,'6'}
};

menu_t  SaveDef =
{
    load_end,
    &MainDef,
    SaveMenu,
    M_DrawSave,
    80,54,
    0
};


//
// M_ReadSaveStrings
//  read the strings from the savegame files
//
void M_ReadSaveStrings(void)
{
    int             handle;
    int             count;
    int             i;
    char    name[256];
	
    for (i = 0;i < load_end;i++)
    {
	if (M_CheckParm("-cdrom"))
	    sprintf(name,"c:\\doomdata\\"SAVEGAMENAME"%d.dsg",i);
	else
	    sprintf(name,SAVEGAMENAME"%d.dsg",i);

	handle = open (name, O_RDONLY | 0, 0666);
	if (handle == -1)
	{
	    strcpy(&savegamestrings[i][0],EMPTYSTRING);
	    LoadMenu[i].status = 0;
	    continue;
	}
	count = read (handle, &savegamestrings[i], SAVESTRINGSIZE);
	close (handle);
	LoadMenu[i].status = 1;
    }
}


//
// M_LoadGame & Cie.
//
void M_DrawLoad(void)
{
    int             i;
	
    V_DrawPatchDirect (72,28,0,W_CacheLumpName("M_LOADG",PU_CACHE));
    for (i = 0;i < load_end; i++)
    {
	M_DrawSaveLoadBorder(LoadDef.x,LoadDef.y+LINEHEIGHT*i);
	M_WriteText(LoadDef.x,LoadDef.y+LINEHEIGHT*i,savegamestrings[i]);
    }
}



//
// Draw border for the savegame description
//
void M_DrawSaveLoadBorder(int x,int y)
{
    int             i;
	
    V_DrawPatchDirect (x-8,y+7,0,W_CacheLumpName("M_LSLEFT",PU_CACHE));
	
    for (i = 0;i < 24;i++)
    {
	V_DrawPatchDirect (x,y+7,0,W_CacheLumpName("M_LSCNTR",PU_CACHE));
	x += 8;
    }

    V_DrawPatchDirect (x,y+7,0,W_CacheLumpName("M_LSRGHT",PU_CACHE));
}



//
// User wants to load this game
//
void M_LoadSelect(int choice)
{
    char    name[256];
	
    if (M_CheckParm("-cdrom"))
	sprintf(name,"c:\\doomdata\\"SAVEGAMENAME"%d.dsg",choice);
    else
	sprintf(name,SAVEGAMENAME"%d.dsg",choice);
    G_LoadGame (name);
    M_ClearMenus ();
}

//
// Selected from DOOM menu
//
void M_LoadGame (int choice)
{
    if (netgame)
    {
	M_StartMessage(LOADNET,NULL,false);
	return;
    }
	
    M_SetupNextMenu(&LoadDef);
    M_ReadSaveStrings();
}


//
//  M_SaveGame & Cie.
//
void M_DrawSave(void)
{
    int             i;
	
    V_DrawPatchDirect (72,28,0,W_CacheLumpName("M_SAVEG",PU_CACHE));
    for (i = 0;i < load_end; i++)
    {
	M_DrawSaveLoadBorder(LoadDef.x,LoadDef.y+LINEHEIGHT*i);
	M_WriteText(LoadDef.x,LoadDef.y+LINEHEIGHT*i,savegamestrings[i]);
    }
	
    if (saveStringEnter)
    {
	i = M_StringWidth(savegamestrings[saveSlot]);
	M_WriteText(LoadDef.x + i,LoadDef.y+LINEHEIGHT*saveSlot,"_");
    }
}

//
// M_Responder calls this when user is finished
//
void M_DoSave(int slot)
{
    G_SaveGame (slot,savegamestrings[slot]);
    M_ClearMenus ();

    // PICK QUICKSAVE SLOT YET?
    if (quickSaveSlot == -2)
	quickSaveSlot = slot;
}

//
// User wants to save. Start string input for M_Responder
//
void M_SaveSelect(int choice)
{
    // we are going to be intercepting all chars
    saveStringEnter = 1;
    
    saveSlot = choice;
    strcpy(saveOldString,savegamestrings[choice]);
    if (!strcmp(savegamestrings[choice],EMPTYSTRING))
	savegamestrings[choice][0] = 0;
    saveCharIndex = strlen(savegamestrings[choice]);
}

//
// Selected from DOOM menu
//
void M_SaveGame (int choice)
{
    if (!usergame)
    {
	M_StartMessage(SAVEDEAD,NULL,false);
	return;
    }
	
    if (gamestate != GS_LEVEL)
	return;
	
    M_SetupNextMenu(&SaveDef);
    M_ReadSaveStrings();
}



//
//      M_QuickSave
//
char    tempstring[80];

void M_QuickSaveResponse(int ch)
{
    if (ch == 'y')
    {
	M_DoSave(quickSaveSlot);
	S_StartSound(NULL,sfx_swtchx);
    }
}

void M_QuickSave(void)
{
    if (!usergame)
    {
	S_StartSound(NULL,sfx_oof);
	return;
    }

    if (gamestate != GS_LEVEL)
	return;
	
    if (quickSaveSlot < 0)
    {
	M_StartControlPanel();
	M_ReadSaveStrings();
	M_SetupNextMenu(&SaveDef);
	quickSaveSlot = -2;	// means to pick a slot now
	return;
    }
    sprintf(tempstring,QSPROMPT,savegamestrings[quickSaveSlot]);
    M_StartMessage(tempstring,M_QuickSaveResponse,true);
}



//
// M_QuickLoad
//
void M_QuickLoadResponse(int ch)
{
    if (ch == 'y')
    {
	M_LoadSelect(quickSaveSlot);
	S_StartSound(NULL,sfx_swtchx);
    }
}


void M_QuickLoad(void)
{
    if (netgame)
    {
	M_StartMessage(QLOADNET,NULL,false);
	return;
    }
	
    if (quickSaveSlot < 0)
    {
	M_StartMessage(QSAVESPOT,NULL,false);
	return;
    }
    sprintf(tempstring,QLPROMPT,savegamestrings[quickSaveSlot]);
    M_StartMessage(tempstring,M_QuickLoadResponse,true);
}




//
// Read This Menus
// Had a "quick hack to fix romero bug"
//
void M_DrawReadThis1(void)
{
    inhelpscreens = true;
    switch ( gamemode )
    {
      case commercial:
	V_DrawPatchDirect (0,0,0,W_CacheLumpName("HELP",PU_CACHE));
	break;
      case shareware:
      case registered:
      case retail:
	V_DrawPatchDirect (0,0,0,W_CacheLumpName("HELP1",PU_CACHE));
	break;
      default:
	break;
    }
    return;
}



//
// Read This Menus - optional second page.
//
void M_DrawReadThis2(void)
{
    inhelpscreens = true;
    switch ( gamemode )
    {
      case retail:
      case commercial:
	// This hack keeps us from having to change menus.
	V_DrawPatchDirect (0,0,0,W_CacheLumpName("CREDIT",PU_CACHE));
	break;
      case shareware:
      case registered:
	V_DrawPatchDirect (0,0,0,W_CacheLumpName("HELP2",PU_CACHE));
	break;
      default:
	break;
    }
    return;
}


//
// Change Sfx & Music volumes
//
void M_DrawSound(void)
{
    V_DrawPatchDirect (60,38,0,W_CacheLumpName("M_SVOL",PU_CACHE));

    M_DrawThermo(SoundDef.x,SoundDef.y+LINEHEIGHT*(sfx_vol+1),
		 16,snd_SfxVolume);

    M_DrawThermo(SoundDef.x,SoundDef.y+LINEHEIGHT*(music_vol+1),
		 16,snd_MusicVolume);
}

void M_Sound(int choice)
{
    M_SetupNextMenu(&SoundDef);
}

void M_SfxVol(int choice)
{
    switch(choice)
    {
      case 0:
	if (snd_SfxVolume)
	    snd_SfxVolume--;
	break;
      case 1:
	if (snd_SfxVolume < 15)
	    snd_SfxVolume++;
	break;
    }
	
    S_SetSfxVolume(snd_SfxVolume /* *8 */);
}

void M_MusicVol(int choice)
{
    switch(choice)
    {
      case 0:
	if (snd_MusicVolume)
	    snd_MusicVolume--;
	break;
      case 1:
	if (snd_MusicVolume < 15)
	    snd_MusicVolume++;
	break;
    }
	
    S_SetMusicVolume(snd_MusicVolume /* *8 */);
}




//
// M_DrawMainMenu
//
void M_DrawMainMenu(void)
{
    V_DrawPatchDirect (94,2,0,W_CacheLumpName("M_DOOM",PU_CACHE));
}




//
// M_NewGame
//
void M_DrawNewGame(void)
{
    V_DrawPatchDirect (96,14,0,W_CacheLumpName("M_NEWG",PU_CACHE));
    V_DrawPatchDirect (54,38,0,W_CacheLumpName("M_SKILL",PU_CACHE));
}

void M_NewGame(int choice)
{
    if (netgame && !demoplayback)
    {
	M_StartMessage(NEWGAME,NULL,false);
	return;
    }
	
    if ( gamemode == commercial )
	M_SetupNextMenu(&NewDef);
    else
	M_SetupNextMenu(&EpiDef);
}


//
//      M_Episode
//
int     epi;

void M_DrawEpisode(void)
{
    V_DrawPatchDirect (54,38,0,W_CacheLumpName("M_EPISOD",PU_CACHE));
}

void M_VerifyNightmare(int ch)
{
    if (ch != 'y')
	return;
		
    G_DeferedInitNew(nightmare,epi+1,1);
    M_ClearMenus ();
}

void M_ChooseSkill(int choice)
{
    if (choice == nightmare)
    {
	M_StartMessage(NIGHTMARE,M_VerifyNightmare,true);
	return;
    }
	
    G_DeferedInitNew(choice,epi+1,1);
    M_ClearMenus ();
}

void M_Episode(int choice)
{
    if ( (gamemode == shareware)
	 && choice)
    {
	M_StartMessage(SWSTRING,NULL,false);
	M_SetupNextMenu(&ReadDef1);
	return;
    }

    // Yet another hack...
    if ( (gamemode == registered)
	 && (choice > 2))
    {
      fprintf( stderr,
	       "M_Episode: 4th episode requires UltimateDOOM\n");
      choice = 0;
    }
	 
    epi = choice;
    M_SetupNextMenu(&NewDef);
}



//
// M_Options
//
char    detailNames[2][9]	= {"M_GDHIGH","M_GDLOW"};
char	msgNames[2][9]		= {"M_MSGOFF","M_MSGON"};


void M_DrawOptions(void)
{
    V_DrawPatchDirect (108,15,0,W_CacheLumpName("M_OPTTTL",PU_CACHE));
	
    V_DrawPatchDirect (OptionsDef.x + 175,OptionsDef.y+LINEHEIGHT*detail,0,
		       W_CacheLumpName(detailNames[detailLevel],PU_CACHE));

    V_DrawPatchDirect (OptionsDef.x + 120,OptionsDef.y+LINEHEIGHT*messages,0,
		       W_CacheLumpName(msgNames[showMessages],PU_CACHE));

    M_DrawThermo(OptionsDef.x,OptionsDef.y+LINEHEIGHT*(mousesens+1),
		 10,mouseSensitivity);
	
    M_DrawThermo(OptionsDef.x,OptionsDef.y+LINEHEIGHT*(scrnsize+1),
		 9,screenSize);
}

void M_Options(int choice)
{
    M_SetupNextMenu(&OptionsDef);
}



//
//      Toggle messages on/off
//
void M_ChangeMessages(int choice)
{
    // warning: unused parameter `int choice'
    choice = 0;
    showMessages = 1 - showMessages;
	
    if (!showMessages)
	players[consoleplayer].message = MSGOFF;
    else
	players[consoleplayer].message = MSGON ;

    message_dontfuckwithme = true;
}


//
// M_EndGame
//
void M_EndGameResponse(int ch)
{
    if (ch != 'y')
	return;
		
    currentMenu->lastOn = itemOn;
    M_ClearMenus ();
    D_StartTitle ();
}

void M_EndGame(int choice)
{
    choice = 0;
    if (!usergame)
    {
	S_StartSound(NULL,sfx_oof);
	return;
    }
	
    if (netgame)
    {
	M_StartMessage(NETEND,NULL,false);
	return;
    }
	
    M_StartMessage(ENDGAME,M_EndGameResponse,true);
}




//
// M_ReadThis
//
void M_ReadThis(int choice)
{
    choice = 0;
    M_SetupNextMenu(&ReadDef1);
}

void M_ReadThis2(int choice)
{
    choice = 0;
    M_SetupNextMenu(&ReadDef2);
}

void M_FinishReadThis(int choice)
{
    choice = 0;
    M_SetupNextMenu(&MainDef);
}




//
// M_QuitDOOM
//
int     quitsounds[8] =
{
    sfx_pldeth,
    sfx_dmpain,
    sfx_popain,
    sfx_slop,
    sfx_telept,
    sfx_posit1,
    sfx_posit3,
    sfx_sgtatk
};

int     quitsounds2[8] =
{
    sfx_vilact,
    sfx_getpow,
    sfx_boscub,
    sfx_slop,
    sfx_skeswg,
    sfx_kntdth,
    sfx_bspact,
    sfx_sgtatk
};



void M_QuitResponse(int ch)
{
    if (ch != 'y')
	return;
    if (!netgame)
    {
	if (gamemode == commercial)
	    S_StartSound(NULL,quitsounds2[(gametic>>2)&7]);
	else
	    S_StartSound(NULL,quitsounds[(gametic>>2)&7]);
	I_WaitVBL(105);
    }
    I_Quit ();
}




void M_QuitDOOM(int choice)
{
  // We pick index 0 which is language sensitive,
  //  or one at random, between 1 and maximum number.
  if (language != english )
    sprintf(endstring,"%s\n\n"DOSY, endmsg[0] );
  else
    sprintf(endstring,"%s\n\n"DOSY, endmsg[ (gametic%(NUM_QUITMESSAGES-2))+1 ]);
  
  M_StartMessage(endstring,M_QuitResponse,true);
}




void M_ChangeSensitivity(int choice)
{
    switch(choice)
    {
      case 0:
	if (mouseSensitivity)
	    mouseSensitivity--;
	break;
      case 1:
	if (mouseSensitivity < 9)
	    mouseSensitivity++;
	break;
    }
}




void M_ChangeDetail(int choice)
{
    choice = 0;
    detailLevel = 1 - detailLevel;

    // FIXME - does not work. Remove anyway?
    fprintf( stderr, "M_ChangeDetail: low detail mode n.a.\n");

    return;
    
    /*R_SetViewSize (screenblocks, detailLevel);

    if (!detailLevel)
	players[consoleplayer].message = DETAILHI;
    else
	players[consoleplayer].message = DETAILLO;*/
}




void M_SizeDisplay(int choice)
{
    switch(choice)
    {
      case 0:
	if (screenSize > 0)
	{
	    screenblocks--;
	    screenSize--;
	}
	break;
      case 1:
	if (screenSize < 8)
	{
	    screenblocks++;
	    screenSize++;
	}
	break;
    }
	

    R_SetViewSize (screenblocks, detailLevel);
}




//
//      Menu Functions
//
void
M_DrawThermo
( int	x,
  int	y,
  int	thermWidth,
  int	thermDot )
{
    int		xx;
    int		i;

    xx = x;
    V_DrawPatchDirect (xx,y,0,W_CacheLumpName("M_THERML",PU_CACHE));
    xx += 8;
    for (i=0;i<thermWidth;i++)
    {
	V_DrawPatchDirect (xx,y,0,W_CacheLumpName("M_THERMM",PU_CACHE));
	xx += 8;
    }
    V_DrawPatchDirect (xx,y,0,W_CacheLumpName("M_THERMR",PU_CACHE));

    V_DrawPatchDirect ((x+8) + thermDot*8,y,
		       0,W_CacheLumpName("M_THERMO",PU_CACHE));
}



void
M_DrawEmptyCell
( menu_t*	menu,
  int		item )
{
    V_DrawPatchDirect (menu->x - 10,        menu->y+item*LINEHEIGHT - 1, 0,
		       W_CacheLumpName("M_CELL1",PU_CACHE));
}

void
M_DrawSelCell
( menu_t*	menu,
  int		item )
{
    V_DrawPatchDirect (menu->x - 10,        menu->y+item*LINEHEIGHT - 1, 0,
		       W_CacheLumpName("M_CELL2",PU_CACHE));
}


void
M_StartMessage
( char*		string,
  void*		routine,
  boolean	input )
{
    messageLastMenuActive = menuactive;
    messageToPrint = 1;
    messageString = string;
    messageRoutine = routine;
    messageNeedsInput = input;
    menuactive = true;
    return;
}



void M_StopMessage(void)
{
    menuactive = messageLastMenuActive;
    messageToPrint = 0;
}



//
// Find string width from hu_font chars
//
int M_StringWidth(char* string)
{
    int             i;
    int             w = 0;
    int             c;
	
    for (i = 0;i < strlen(string);i++)
    {
	c = toupper(string[i]) - HU_FONTSTART;
	if (c < 0 || c >= HU_FONTSIZE)
	    w += 4;
	else
	    w += SHORT (hu_font[c]->width);
    }
		
    return w;
}



//
//      Find string height from hu_font chars
//
int M_StringHeight(char* string)
{
    int             i;
    int             h;
    int             height = SHORT(hu_font[0]->height);
	
    h = height;
    for (i = 0;i < strlen(string);i++)
	if (string[i] == '\n')
	    h += height;
		
    return h;
}


//
//      Write a string using the hu_font
//
void
M_WriteText
( int		x,
  int		y,
  char*		string)
{
    int		w;
    char*	ch;
    int		c;
    int		cx;
    int		cy;
		

    ch = string;
    cx = x;
    cy = y;
	
    while(1)
    {
	c = *ch++;
	if (!c)
	    break;
	if (c == '\n')
	{
	    cx = x;
	    cy += 12;
	    continue;
	}
		
	c = toupper(c) - HU_FONTSTART;
	if (c < 0 || c>= HU_FONTSIZE)
	{
	    cx += 4;
	    continue;
	}
		
	w = SHORT (hu_font[c]->width);
	if (cx+w > SCREENWIDTH)
	    break;
	V_DrawPatchDirect(cx, cy, 0, hu_font[c]);
	cx+=w;
    }
}



//
// CONTROL PANEL
//

//
// M_Responder
//
boolean M_Responder (event_t* ev)
{
    int             ch;
    int             i;
    static  int     joywait = 0;
    static  int     mousewait = 0;
    static  int     mousey = 0;
    static  int     lasty = 0;
    static  int     mousex = 0;
    static  int     lastx = 0;
	
    ch = -1;
	
    if (ev->type == ev_joystick && joywait < I_GetTime())
    {
	if (ev->data3 == -1)
	{
	    ch = KEY_UPARROW;
	    joywait = I_GetTime() + 5;
	}
	else if (ev->data3 == 1)
	{
	    ch = KEY_DOWNARROW;
	    joywait = I_GetTime() + 5;
	}
		
	if (ev->data2 == -1)
	{
	    ch = KEY_LEFTARROW;
	    joywait = I_GetTime() + 2;
	}
	else if (ev->data2 == 1)
	{
	    ch = KEY_RIGHTARROW;
	    joywait = I_GetTime() + 2;
	}
		
	if (ev->data1&1)
	{
	    ch = KEY_ENTER;
	    joywait = I_GetTime() + 5;
	}
	if (ev->data1&2)
	{
	    ch = KEY_BACKSPACE;
	    joywait = I_GetTime() + 5;
	}
    }
    else
    {
	if (ev->type == ev_mouse && mousewait < I_GetTime())
	{
	    mousey += ev->data3;
	    if (mousey < lasty-30)
	    {
		ch = KEY_DOWNARROW;
		mousewait = I_GetTime() + 5;
		mousey = lasty -= 30;
	    }
	    else if (mousey > lasty+30)
	    {
		ch = KEY_UPARROW;
		mousewait = I_GetTime() + 5;
		mousey = lasty += 30;
	    }
		
	    mousex += ev->data2;
	    if (mousex < lastx-30)
	    {
		ch = KEY_LEFTARROW;
		mousewait = I_GetTime() + 5;
		mousex = lastx -= 30;
	    }
	    else if (mousex > lastx+30)
	    {
		ch = KEY_RIGHTARROW;
		mousewait = I_GetTime() + 5;
		mousex = lastx += 30;
	    }
		
	    if (ev->data1&1)
	    {
		ch = KEY_ENTER;
		mousewait = I_GetTime() + 15;
	    }
			
	    if (ev->data1&2)
	    {
		ch = KEY_BACKSPACE;
		mousewait = I_GetTime() + 15;
	    }
	}
	else
	    if (ev->type == ev_keydown)
	    {
		ch = ev->data1;
	    }
    }
    
    if (ch == -1)
	return false;

    
    // Save Game string input
    if (saveStringEnter)
    {
	switch(ch)
	{
	  case KEY_BACKSPACE:
	    if (saveCharIndex > 0)
	    {
		saveCharIndex--;
		savegamestrings[saveSlot][saveCharIndex] = 0;
	    }
	    break;
				
	  case KEY_ESCAPE:
	    saveStringEnter = 0;
	    strcpy(&savegamestrings[saveSlot][0],saveOldString);
	    break;
				
	  case KEY_ENTER:
	    saveStringEnter = 0;
	    if (savegamestrings[saveSlot][0])
		M_DoSave(saveSlot);
	    break;
				
	  default:
	    ch = toupper(ch);
	    if (ch != 32)
		if (ch-HU_FONTSTART < 0 || ch-HU_FONTSTART >= HU_FONTSIZE)
		    break;
	    if (ch >= 32 && ch <= 127 &&
		saveCharIndex < SAVESTRINGSIZE-1 &&
		M_StringWidth(savegamestrings[saveSlot]) <
		(SAVESTRINGSIZE-2)*8)
	    {
		savegamestrings[saveSlot][saveCharIndex++] = ch;
		savegamestrings[saveSlot][saveCharIndex] = 0;
	    }
	    break;
	}
	return true;
    }
    
    // Take care of any messages that need input
    if (messageToPrint)
    {
	if (messageNeedsInput == true &&
	    !(ch == ' ' || ch == 'n' || ch == 'y' || ch == KEY_ESCAPE))
	    return false;
		
	menuactive = messageLastMenuActive;
	messageToPrint = 0;
	if (messageRoutine)
	    messageRoutine(ch);
			
	menuactive = false;
	S_StartSound(NULL,sfx_swtchx);
	return true;
    }
	
    if (devparm && ch == KEY_F1)
    {
	G_ScreenShot ();
	return true;
    }
		
    
    // F-Keys
    if (!menuactive)
	switch(ch)
	{
	  case KEY_MINUS:         // Screen size down
	    if (automapactive || chat_on)
		return false;
	    M_SizeDisplay(0);
	    S_StartSound(NULL,sfx_stnmov);
	    return true;
				
	  case KEY_EQUALS:        // Screen size up
	    if (automapactive || chat_on)
		return false;
	    M_SizeDisplay(1);
	    S_StartSound(NULL,sfx_stnmov);
	    return true;
				
	  case KEY_F1:            // Help key
	    M_StartControlPanel ();

	    if ( gamemode == retail )
	      currentMenu = &ReadDef2;
	    else
	      currentMenu = &ReadDef1;
	    
	    itemOn = 0;
	    S_StartSound(NULL,sfx_swtchn);
	    return true;
				
	  case KEY_F2:            // Save
	    M_StartControlPanel();
	    S_StartSound(NULL,sfx_swtchn);
	    M_SaveGame(0);
	    return true;
				
	  case KEY_F3:            // Load
	    M_StartControlPanel();
	    S_StartSound(NULL,sfx_swtchn);
	    M_LoadGame(0);
	    return true;
				
	  case KEY_F4:            // Sound Volume
	    M_StartControlPanel ();
	    currentMenu = &SoundDef;
	    itemOn = sfx_vol;
	    S_StartSound(NULL,sfx_swtchn);
	    return true;
				
	  case KEY_F5:            // Detail toggle
	    M_ChangeDetail(0);
	    S_StartSound(NULL,sfx_swtchn);
	    return true;
				
	  case KEY_F6:            // Quicksave
	    S_StartSound(NULL,sfx_swtchn);
	    M_QuickSave();
	    return true;
				
	  case KEY_F7:            // End game
	    S_StartSound(NULL,sfx_swtchn);
	    M_EndGame(0);
	    return true;
				
	  case KEY_F8:            // Toggle messages
	    M_ChangeMessages(0);
	    S_StartSound(NULL,sfx_swtchn);
	    return true;
				
	  case KEY_F9:            // Quickload
	    S_StartSound(NULL,sfx_swtchn);
	    M_QuickLoad();
	    return true;
				
	  case KEY_F10:           // Quit DOOM
	    S_StartSound(NULL,sfx_swtchn);
	    M_QuitDOOM(0);
	    return true;
				
	  case KEY_F11:           // gamma toggle
	    usegamma++;
	    if (usegamma > 4)
		usegamma = 0;
	    players[consoleplayer].message = gammamsg[usegamma];
	    I_SetPalette (W_CacheLumpName ("PLAYPAL",PU_CACHE));
	    return true;
				
	}

    
    // Pop-up menu?
    if (!menuactive)
    {
	if (ch == KEY_ESCAPE)
	{
	    M_StartControlPanel ();
	    S_StartSound(NULL,sfx_swtchn);
	    return true;
	}
	return false;
    }

    
    // Keys usable within menu
    switch (ch)
    {
      case KEY_DOWNARROW:
	do
	{
	    if (itemOn+1 > currentMenu->numitems-1)
		itemOn = 0;
	    else itemOn++;
	    S_StartSound(NULL,sfx_pstop);
	} while(currentMenu->menuitems[itemOn].status==-1);
	return true;
		
      case KEY_UPARROW:
	do
	{
	    if (!itemOn)
		itemOn = currentMenu->numitems-1;
	    else itemOn--;
	    S_StartSound(NULL,sfx_pstop);
	} while(currentMenu->menuitems[itemOn].status==-1);
	return true;

      case KEY_LEFTARROW:
	if (currentMenu->menuitems[itemOn].routine &&
	    currentMenu->menuitems[itemOn].status == 2)
	{
	    S_StartSound(NULL,sfx_stnmov);
	    currentMenu->menuitems[itemOn].routine(0);
	}
	return true;
		
      case KEY_RIGHTARROW:
	if (currentMenu->menuitems[itemOn].routine &&
	    currentMenu->menuitems[itemOn].status == 2)
	{
	    S_StartSound(NULL,sfx_stnmov);
	    currentMenu->menuitems[itemOn].routine(1);
	}
	return true;

      case KEY_ENTER:
	if (currentMenu->menuitems[itemOn].routine &&
	    currentMenu->menuitems[itemOn].status)
	{
	    currentMenu->lastOn = itemOn;
	    if (currentMenu->menuitems[itemOn].status == 2)
	    {
		currentMenu->menuitems[itemOn].routine(1);      // right arrow
		S_StartSound(NULL,sfx_stnmov);
	    }
	    else
	    {
		currentMenu->menuitems[itemOn].routine(itemOn);
		S_StartSound(NULL,sfx_pistol);
	    }
	}
	return true;
		
      case KEY_ESCAPE:
	currentMenu->lastOn = itemOn;
	M_ClearMenus ();
	S_StartSound(NULL,sfx_swtchx);
	return true;
		
      case KEY_BACKSPACE:
	currentMenu->lastOn = itemOn;
	if (currentMenu->prevMenu)
	{
	    currentMenu = currentMenu->prevMenu;
	    itemOn = currentMenu->lastOn;
	    S_StartSound(NULL,sfx_swtchn);
	}
	return true;
	
      default:
	for (i = itemOn+1;i < currentMenu->numitems;i++)
	    if (currentMenu->menuitems[i].alphaKey == ch)
	    {
		itemOn = i;
		S_StartSound(NULL,sfx_pstop);
		return true;
	    }
	for (i = 0;i <= itemOn;i++)
	    if (currentMenu->menuitems[i].alphaKey == ch)
	    {
		itemOn = i;
		S_StartSound(NULL,sfx_pstop);
		return true;
	    }
	break;
	
    }

    return false;
}



//
// M_StartControlPanel
//
void M_StartControlPanel (void)
{
    // intro might call this repeatedly
    if (menuactive)
	return;
    
    menuactive = 1;
    currentMenu = &MainDef;         // JDC
    itemOn = currentMenu->lastOn;   // JDC
}


//
// M_Drawer
// Called after the view has been rendered,
// but before it has been blitted.
//
void M_Drawer (void)
{
    static short	x;
    static short	y;
    short		i;
    short		max;
    char		string[40];
    int			start;

    inhelpscreens = false;

    
    // Horiz. & Vertically center string and print it.
    if (messageToPrint)
    {
	start = 0;
	y = 100 - M_StringHeight(messageString)/2;
	while(*(messageString+start))
	{
	    for (i = 0;i < strlen(messageString+start);i++)
		if (*(messageString+start+i) == '\n')
		{
		    memset(string,0,40);
		    strncpy(string,messageString+start,i);
		    start += i+1;
		    break;
		}
				
	    if (i == strlen(messageString+start))
	    {
		strcpy(string,messageString+start);
		start += i;
	    }
				
	    x = 160 - M_StringWidth(string)/2;
	    M_WriteText(x,y,string);
	    y += SHORT(hu_font[0]->height);
	}
	return;
    }

    if (!menuactive)
	return;

    if (currentMenu->routine)
	currentMenu->routine();         // call Draw routine
    
    // DRAW MENU
    x = currentMenu->x;
    y = currentMenu->y;
    max = currentMenu->numitems;

    for (i=0;i<max;i++)
    {
	if (currentMenu->menuitems[i].name[0])
	    V_DrawPatchDirect (x,y,0,
			       W_CacheLumpName(currentMenu->menuitems[i].name ,PU_CACHE));
	y += LINEHEIGHT;
    }

    
    // DRAW SKULL
    V_DrawPatchDirect(x + SKULLXOFF,currentMenu->y - 5 + itemOn*LINEHEIGHT, 0,
		      W_CacheLumpName(skullName[whichSkull],PU_CACHE));

}


//
// M_ClearMenus
//
void M_ClearMenus (void)
{
    menuactive = 0;
    // if (!netgame && usergame && paused)
    //       sendpause = true;
}




//
// M_SetupNextMenu
//
void M_SetupNextMenu(menu_t *menudef)
{
    currentMenu = menudef;
    itemOn = currentMenu->lastOn;
}


//
// M_Ticker
//
void M_Ticker (void)
{
    if (--skullAnimCounter <= 0)
    {
	whichSkull ^= 1;
	skullAnimCounter = 8;
    }
}


//
// M_Init
//
void M_Init (void)
{
    currentMenu = &MainDef;
    menuactive = 0;
    itemOn = currentMenu->lastOn;
    whichSkull = 0;
    skullAnimCounter = 10;
    screenSize = screenblocks - 3;
    messageToPrint = 0;
    messageString = NULL;
    messageLastMenuActive = menuactive;
    quickSaveSlot = -1;

    // Here we could catch other version dependencies,
    //  like HELP1/2, and four episodes.

  
    switch ( gamemode )
    {
      case commercial:
	// This is used because DOOM 2 had only one HELP
        //  page. I use CREDIT as second page now, but
	//  kept this hack for educational purposes.
	MainMenu[readthis] = MainMenu[quitdoom];
	MainDef.numitems--;
	MainDef.y += 8;
	NewDef.prevMenu = &MainDef;
	ReadDef1.routine = M_DrawReadThis1;
	ReadDef1.x = 330;
	ReadDef1.y = 165;
	ReadMenu1[0].routine = M_FinishReadThis;
	break;
      case shareware:
	// Episode 2 and 3 are handled,
	//  branching to an ad screen.
      case registered:
	// We need to remove the fourth episode.
	EpiDef.numitems--;
	break;
      case retail:
	// We are fine.
      default:
	break;
    }
    
}
