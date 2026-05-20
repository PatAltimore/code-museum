---
title: "WL_MENU.C"
program: "Wolfenstein 3D"
program_slug: "wolf3d"
file_path: "WOLFSRC/WL_MENU.C"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/wolf3d/blob/master/WOLFSRC/WL_MENU.C"
year: 1992
author: "John Carmack, John Romero, Tom Hall"
slug: "wl-menu-c"
order: 8
description: "The menu system in Wolfenstein 3D, a foundational FPS game, showcases clever design choices that balanced user experience and hardware constraints."

summary:
  - point: "Dynamic menu text based on game versions and localization"
    link: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    link_label: "Wolfenstein 3D"
  - point: "Easter egg detection using specific key combinations"
    link: "https://en.wikipedia.org/wiki/Easter_egg_(media)"
    link_label: "Easter egg"
  - point: "Memory management for caching and purging assets"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory management"
  - point: "Integration of quick-save and quick-load functionality"
    link: "https://en.wikipedia.org/wiki/Save_(video_gaming)"
    link_label: "Save system"
  - point: "Custom control panel for in-game settings and navigation"
    link: "https://en.wikipedia.org/wiki/User_interface"
    link_label: "User interface"

enhancements:
  - id: "dynamic-menu-text"
    line_start: 15
    line_end: 50
    title: "Dynamic Menu Text for Localization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Localization_(video_games)"
    image_url: ""
    image_caption: ""
    content: "This section defines dynamic menu text strings, which change based on the version of the game (e.g., 'SPEAR' or 'GOODTIMES') and localization settings. The text includes humorous prompts for quitting, such as 'Press N to save the world. Press Y to abandon it.' These strings highlight id Software's attention to player engagement and humor, even in mundane actions like quitting the game. In 1992, localization in games was still relatively rare, and this approach demonstrated forward-thinking design. It influenced later games to incorporate dynamic text and localization, paving the way for global accessibility in gaming."
  - id: "menu-item-configuration"
    line_start: 52
    line_end: 61
    title: "Menu Item Configuration"
    wikipedia_url: "https://en.wikipedia.org/wiki/Menu_(computing)"
    image_url: ""
    image_caption: ""
    content: "Here, the menu item configurations are defined, specifying positions, dimensions, and starting states for various menus. This modular design allowed for easy customization and expansion, a necessity given the hardware constraints of early 1990s PCs. By abstracting menu properties into reusable structures, id Software demonstrated an early example of object-oriented thinking in C. This approach influenced later game engines, such as the Quake engine, which adopted similar modular systems for UI and gameplay elements."
  - id: "control-panel-setup"
    line_start: 327
    line_end: 532
    title: "Custom Control Panel Setup"
    wikipedia_url: "https://en.wikipedia.org/wiki/User_interface"
    image_url: ""
    image_caption: ""
    content: "This section defines the control panel interface, including handling function keys for in-game settings like sound, controls, and saving/loading. The code demonstrates a thoughtful design that prioritizes user accessibility, allowing players to adjust settings without exiting the game. In the early 1990s, such features were rare, as most games had static menus with limited interactivity. The control panel's flexibility influenced later games to adopt dynamic, in-game settings menus, seen in titles like Doom and Quake, which expanded on this concept."
  - id: "quick-save-load"
    line_start: 642
    line_end: 856
    title: "Quick-Save and Quick-Load Functionality"
    wikipedia_url: "https://en.wikipedia.org/wiki/Save_(video_gaming)"
    image_url: ""
    image_caption: ""
    content: "The code here implements quick-save and quick-load features, allowing players to save or load their progress with minimal interruption. This was a significant innovation in 1992, as many games required navigating through cumbersome menus to save or load. By streamlining this process, Wolfenstein 3D enhanced the player's experience and set a precedent for future games. Quick-save/load became a standard feature in PC gaming, influencing titles like Half-Life and Skyrim, which rely on similar systems for seamless gameplay."
  - id: "high-score-viewing"
    line_start: 888
    line_end: 918
    title: "Viewing High Scores with Music Integration"
    wikipedia_url: "https://en.wikipedia.org/wiki/High_score"
    image_url: ""
    image_caption: ""
    content: "This routine handles the display of high scores, accompanied by music to enhance the experience. High scores were a staple of arcade culture, and their inclusion in Wolfenstein 3D reflects the game's roots in that tradition. The integration of music adds emotional weight to the achievement, a technique that became common in later games. Titles like Unreal Tournament and Halo adopted similar approaches, using music to underscore player accomplishments and create memorable moments."
  - id: "episode-selection-menu"
    line_start: 935
    line_end: 1042
    title: "The Menu That Sold Episodes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "This section implements the episode selection menu, a critical part of Wolfenstein 3D's shareware model. Players could select episodes, but only the first was freely available; the others required purchase. The menu dynamically checks availability and displays a message encouraging users to order additional episodes from Apogee Software. This approach was pivotal in the shareware distribution model of the early 1990s, where games were partially free to play but monetized through additional content. The integration of sound effects and user prompts made the experience engaging while subtly driving sales. This model influenced later games like Doom and Quake, which adopted similar distribution strategies."
  - id: "draw-new-episode-menu"
    line_start: 1045
    line_end: 1080
    title: "Rendering Menus with Pixel Precision"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_display_resolution"
    image_url: ""
    image_caption: ""
    content: "The `DrawNewEpisode` function handles the rendering of the episode selection menu. It uses low-level graphics calls to draw windows, text, and images, ensuring compatibility with the limited graphical capabilities of early 1990s PCs. The function includes localization support, displaying messages in Spanish or Japanese based on the user's configuration. This attention to detail reflects id Software's commitment to creating immersive and accessible experiences despite hardware constraints. Techniques like these laid the groundwork for modern UI frameworks in games, which now handle localization and dynamic rendering seamlessly."
  - id: "sound-menu-handling"
    line_start: 1130
    line_end: 1245
    title: "Customizing Sound for Every Player"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_Blaster"
    image_url: ""
    image_caption: ""
    content: "The `CP_Sound` function allows players to configure sound settings, including sound effects, digitized sound, and music. It supports multiple sound modes, such as AdLib and Sound Blaster, reflecting the diverse hardware landscape of the era. The menu dynamically disables options based on hardware availability, ensuring a smooth user experience. This adaptability was crucial in the early 1990s, when PC configurations varied widely. The function's modular design influenced later games, which adopted similar approaches to hardware detection and configuration."
  - id: "save-game-functionality"
    line_start: 1368
    line_end: 1655
    title: "Saving Progress in the Age of DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Save_game"
    image_url: ""
    image_caption: ""
    content: "The `CP_LoadGame` and `CP_SaveGame` functions implement the game's save and load system. They interact directly with the file system, using DOS-specific calls to read and write save data. The menu provides a user-friendly interface for managing save slots, including overwrite confirmation and quicksave functionality. This system was a significant innovation at a time when many games lacked robust save features. The ability to save progress became a standard expectation in gaming, influencing titles across genres and platforms."
  - id: "joystick-calibration"
    line_start: 1658
    line_end: 1753
    title: "Calibrating Joysticks for Precision Control"
    wikipedia_url: "https://en.wikipedia.org/wiki/Joystick"
    image_url: ""
    image_caption: ""
    content: "The `CalibrateJoystick` function ensures accurate input from joystick devices. It prompts the user to move the joystick to its extremes, capturing minimum and maximum values for calibration. This process was essential for games like Wolfenstein 3D, where precise control could mean the difference between victory and defeat. The function's design reflects id Software's attention to player experience, accommodating a wide range of hardware. Joystick calibration routines became a staple in gaming, appearing in titles from flight simulators to racing games."
  - id: "mouse-sensitivity-adjustment"
    line_start: 1831
    line_end: 1955
    title: "Fine-Tuning the Mouse for FPS Mastery"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mouse_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `MouseSensitivity` function allows players to adjust mouse sensitivity, tailoring the game's controls to their preferences. It uses a graphical slider to represent sensitivity levels, providing immediate visual feedback. This feature was particularly important for first-person shooters, where precise aiming is critical. The function's intuitive design set a precedent for control customization in games, influencing titles like Half-Life and Counter-Strike. Today, sensitivity adjustment is a standard feature in FPS games, reflecting the legacy of innovations like this."
  - id: "draw-control-screen-menu"
    line_start: 1958
    line_end: 2037
    title: "Dynamic menus based on hardware detection"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "This section draws the control configuration screen, dynamically enabling menu options based on detected hardware like joysticks and mice. The code uses conditional compilation to adapt the menu's appearance for different regions, such as Japan. In 1992, hardware detection was a critical feature for PC games, as peripherals varied widely. By enabling or disabling menu options based on hardware presence, id Software ensured a seamless experience for players regardless of their setup. This approach influenced later games, which adopted similar techniques for dynamic UI adjustments based on hardware capabilities."
  - id: "customize-controls"
    line_start: 2040
    line_end: 2082
    title: "Customizing controls for every player"
    wikipedia_url: "https://en.wikipedia.org/wiki/Joystick"
    image_url: ""
    image_caption: ""
    content: "The `CustomControls` function allows players to redefine input mappings for mouse, joystick, and keyboard. This level of customization was rare in 1992 but became a hallmark of PC gaming. The function calls specific routines to handle input remapping for each device, ensuring flexibility. John Carmack and Tom Hall prioritized player agency, allowing users to tailor controls to their preferences. This feature set a precedent for modern games, where customizable controls are expected, especially in competitive genres like first-person shooters."
  - id: "enter-control-data"
    line_start: 2131
    line_end: 2362
    title: "How Wolfenstein handled input remapping"
    wikipedia_url: "https://en.wikipedia.org/wiki/Input/output"
    image_url: ""
    image_caption: ""
    content: "The `EnterCtrlData` function processes input remapping for various control types, including mouse, joystick, and keyboard. It uses a combination of loops and conditional checks to allow players to assign actions to specific buttons or keys. This function also includes visual feedback, such as flashing cursors, to guide the user through the remapping process. In the early '90s, input remapping was a technical challenge due to the diversity of hardware interfaces. Carmack's implementation was robust, ensuring compatibility across devices. This technique influenced later games, particularly in the FPS genre, where precise control mapping is crucial."
  - id: "change-view-size"
    line_start: 2731
    line_end: 2807
    title: "Adjusting screen size for performance"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_display_resolution"
    image_url: ""
    image_caption: ""
    content: "The `CP_ChangeView` function allows players to adjust the viewing size of the game screen, balancing graphical fidelity and performance. Smaller view sizes reduce rendering load, which was essential for running Wolfenstein 3D on lower-end hardware. This feature reflects id Software's commitment to accessibility, ensuring the game was playable on a wide range of systems. The ability to dynamically adjust resolution influenced later games, particularly in the era of 3D graphics, where performance optimization became a key consideration."
  - id: "intro-screen-memory-visualization"
    line_start: 2877
    line_end: 2953
    title: "Visualizing system memory for configuration"
    wikipedia_url: "https://en.wikipedia.org/wiki/Extended_memory"
    image_url: ""
    image_caption: ""
    content: "The `IntroScreen` function visually represents the system's memory configuration, including main memory, EMS, and XMS. It uses bar charts to display available resources, helping players understand their system's capabilities. In 1992, memory management was a critical aspect of PC gaming, as systems varied widely in configuration. This visualization was not only informative but also a clever way to engage players in the technical aspects of their hardware. The concept of memory visualization influenced system configuration screens in later games and operating systems, making technical data more accessible to users."
  - id: "clear-menu-screen"
    line_start: 2956
    line_end: 2975
    title: "Clearing the screen with style"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_pipeline"
    image_url: ""
    image_caption: ""
    content: "The `ClearMScreen` function clears the menu screen, either to a solid color or a backdrop image, depending on the game version. This routine ensures a clean slate for rendering new menu elements. In the early '90s, efficient screen clearing was crucial for maintaining performance, especially on systems with limited graphics capabilities. The use of conditional compilation to adapt the function for different versions demonstrates id Software's attention to detail. This technique influenced later games, where efficient graphics handling became standard practice."
  - id: "cache-graphics-lump"
    line_start: 2979
    line_end: 2990
    title: "Caching graphics for faster menus"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_pipeline"
    image_url: ""
    image_caption: ""
    content: "The `CacheLump` function caches a range of graphics chunks, ensuring that menu elements are quickly accessible during rendering. This approach minimizes disk access and improves performance, which was critical for games running on floppy disks or slow hard drives. By preloading graphics, id Software optimized the menu system for speed and responsiveness. This technique became a standard in game development, influencing asset management in modern engines like Unity and Unreal."
  - id: "uncache-lump-dynamic-asset-management"
    line_start: 2993
    line_end: 3007
    title: "Dynamic asset management for constrained memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `UnCacheLump` function dynamically removes graphical assets from memory when they are no longer needed. This was crucial for Wolfenstein 3D, as it operated within the strict memory constraints of early 1990s PCs, often limited to 640KB of conventional memory. By uncaching assets, the game ensured that memory was available for other operations, such as rendering new scenes or loading sounds. This approach reflects the ingenuity required to manage resources in an era before widespread virtual memory and modern operating systems. Techniques like these influenced later games, particularly those developed for similarly constrained platforms like the Super Nintendo Entertainment System (SNES)."
  - id: "draw-window-menu-visuals"
    line_start: 3003
    line_end: 3012
    title: "Drawing menus with visual flair"
    wikipedia_url: "https://en.wikipedia.org/wiki/Video_game_user_interface"
    image_url: ""
    image_caption: ""
    content: "The `DrawWindow` function creates a visually distinct menu window by combining a solid background color with an outlined border. This design choice helped Wolfenstein 3D's menus stand out, making them easier to navigate and aesthetically pleasing. The use of `VWB_Bar` and `DrawOutline` reflects the game's commitment to leveraging graphical primitives efficiently. At the time, menu systems were often utilitarian, but Wolfenstein 3D's approach demonstrated how thoughtful design could enhance user experience. This influenced later first-person shooters, including Doom, which further refined menu aesthetics."
  - id: "setup-control-panel-save-game-management"
    line_start: 3024
    line_end: 3081
    title: "Save game metadata and control panel setup"
    wikipedia_url: "https://en.wikipedia.org/wiki/Save_game"
    image_url: ""
    image_caption: ""
    content: "The `SetupControlPanel` function initializes the control panel, including caching assets and loading save game metadata. It scans for available save files, reads their contents, and populates the menu with descriptive names. This streamlined approach to save game management was ahead of its time, offering players a clear and organized way to resume their progress. The function also centers the mouse cursor, ensuring intuitive navigation. Such attention to detail influenced later games, which adopted similar methods for handling save files and user settings."
  - id: "handle-menu-dynamic-cursor-animation"
    line_start: 3101
    line_end: 3346
    title: "Dynamic cursor animations for menu navigation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Video_game_user_interface"
    image_url: ""
    image_caption: ""
    content: "The `HandleMenu` function manages menu navigation, including dynamic cursor animations that alternate between two shapes (`C_CURSOR1PIC` and `C_CURSOR2PIC`). This visual feedback helped players understand their current selection, enhancing the game's usability. The function also supports keyboard shortcuts for quick navigation, a feature that was relatively rare in early 1990s games. By combining visual and functional elements, Wolfenstein 3D set a standard for intuitive menu systems in first-person shooters. This approach was later refined in Doom and other id Software titles."
  - id: "read-any-control-multi-input-support"
    line_start: 3484
    line_end: 3584
    title: "Multi-input support: mouse, keyboard, joystick"
    wikipedia_url: "https://en.wikipedia.org/wiki/Input_device"
    image_url: ""
    image_caption: ""
    content: "The `ReadAnyControl` function integrates input from multiple devices, including mouse, keyboard, and joystick. It interprets directional movements and button presses, ensuring seamless gameplay regardless of the player's preferred input method. This flexibility was a hallmark of Wolfenstein 3D, accommodating a wide range of hardware configurations. The function's ability to detect subtle movements and button states reflects the game's commitment to precision and responsiveness. Multi-input support became a standard feature in later games, influencing titles like Quake and Unreal."
  - id: "confirm-localized-menu-responses"
    line_start: 3587
    line_end: 3660
    title: "Localized menu responses for global audiences"
    wikipedia_url: "https://en.wikipedia.org/wiki/Localization_(video_games)"
    image_url: ""
    image_caption: ""
    content: "The `Confirm` function handles yes/no prompts in the menu, with localized responses for different languages. For example, Spanish versions use 'S' and 'N' instead of 'Y' and 'N'. This attention to localization reflects id Software's awareness of its growing international audience. By adapting menu interactions to cultural norms, Wolfenstein 3D set a precedent for global accessibility in gaming. Localization became increasingly important as the industry expanded, influencing games like Half-Life and The Sims."
  - id: "message-dynamic-window-sizing"
    line_start: 3719
    line_end: 3756
    title: "Dynamic window sizing for text messages"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `Message` function dynamically sizes a window to fit the text content, ensuring that messages are displayed clearly and efficiently. This technique avoids wasted screen space and enhances readability, a crucial consideration for conveying important information to players. The function calculates dimensions based on font metrics and adjusts the window accordingly. Such dynamic UI elements were innovative for the time and influenced later games that sought to optimize screen real estate, including RPGs like Baldur's Gate."
  - id: "start-cp-music-audio-management"
    line_start: 3766
    line_end: 3787
    title: "Efficient audio management for menu music"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `StartCPMusic` function manages menu music, ensuring that audio assets are loaded and freed efficiently. It prevents memory leaks by freeing previously cached music chunks before loading new ones. This meticulous approach to resource management was essential for maintaining performance on hardware with limited memory. The function also handles error states gracefully, ensuring that music playback does not disrupt the game. Such techniques influenced later titles, including Doom, which further refined audio management for immersive experiences."
  - id: "in-get-scan-name-keyboard-mapping"
    line_start: 3796
    line_end: 3813
    title: "Keyboard scan code mapping made simple"
    wikipedia_url: "https://en.wikipedia.org/wiki/Keyboard_layout"
    image_url: ""
    image_caption: ""
    content: "The `IN_GetScanName` function maps keyboard scan codes to human-readable names, simplifying the process of interpreting user input. This was particularly useful for debugging and localization, as it provided a clear way to identify key presses. The function's design reflects id Software's commitment to creating robust and adaptable systems. Keyboard mapping became a standard feature in game engines, influencing titles like Unreal Tournament and the Unity engine."
  - id: "draw-stripes-screen-title-decoration"
    line_start: 3855
    line_end: 3869
    title: "Decorative stripes for screen titles"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `DrawStripes` function adds decorative stripes to screen titles, enhancing the visual appeal of menus and transitions. This small but impactful detail contributed to the game's polished presentation, setting it apart from other titles of the era. By using graphical primitives like `VWB_Bar` and `VWB_Hlin`, the function demonstrates how simple techniques can create a striking effect. Such attention to aesthetics influenced later games, including Doom, which continued to refine visual design in menus and interfaces."
  - id: "dynamic-game-data-detection"
    line_start: 3877
    line_end: 3986
    title: "How Wolfenstein 3D Adapted to Multiple Versions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "This section of code, `CheckForEpisodes`, is responsible for detecting which game data files are present and configuring the game accordingly. It uses the `findfirst` function to query the file system for specific file extensions that correspond to different versions of Wolfenstein 3D, including localized Japanese versions and expansions like Spear of Destiny. Depending on the detected files, it sets up the appropriate configuration strings and enables specific menu options and episodes. In 1992, when Wolfenstein 3D was developed, games often shipped in multiple versions to accommodate different markets and expansions. Localization was a growing concern, especially for Japanese audiences, who had distinct preferences for game content and presentation. The developers at id Software, including John Carmack and John Romero, designed this system to ensure the game could adapt dynamically to the data files available, rather than hard-coding configurations for each version. This approach reduced the complexity of maintaining separate codebases for different versions and allowed for easier distribution of demo versions and expansions. The use of file system queries to detect game data was both practical and innovative for its time. It allowed the game to handle missing or incorrect files gracefully, displaying error messages when necessary. This technique influenced how later games managed modular content and expansions. For example, the modular design of game engines like Unreal Engine and Unity owes some of its philosophy to early practices like these, where dynamic detection and configuration were key to supporting diverse game versions. Wolfenstein 3D's ability to adapt to multiple versions and expansions helped establish it as a global phenomenon. The modular approach seen here laid groundwork for future games to support localization, expansions, and downloadable content, shaping the industry's approach to game distribution and customization."

---

```asm
////////////////////////////////////////////////////////////////////
//
// WL_MENU.C
// by John Romero (C) 1992 Id Software, Inc.
//
////////////////////////////////////////////////////////////////////
#include "wl_def.h"
#pragma hdrstop

//
// PRIVATE PROTOTYPES
//
void CP_ReadThis(void);

#ifdef SPEAR
#define STARTITEM	newgame

#else
#ifdef GOODTIMES
#define STARTITEM	newgame

#else
#define STARTITEM	readthis
#endif
#endif

char far endStrings[9][80]=
{
#ifndef SPEAR
	{"Dost thou wish to\nleave with such hasty\nabandon?"},
	{"Chickening out...\nalready?"},
	{"Press N for more carnage.\nPress Y to be a weenie."},
	{"So, you think you can\nquit this easily, huh?"},
	{"Press N to save the world.\nPress Y to abandon it in\nits hour of need."},
	{"Press N if you are brave.\nPress Y to cower in shame."},
	{"Heroes, press N.\nWimps, press Y."},
	{"You are at an intersection.\nA sign says, 'Press Y to quit.'\n>"},
	{"For guns and glory, press N.\nFor work and worry, press Y."}
#else
	ENDSTR1,
	ENDSTR2,
	ENDSTR3,
	ENDSTR4,
	ENDSTR5,
	ENDSTR6,
	ENDSTR7,
	ENDSTR8,
	ENDSTR9
#endif
};

CP_iteminfo
	MainItems={MENU_X,MENU_Y,10,STARTITEM,24},
	SndItems={SM_X,SM_Y1,12,0,52},
	LSItems={LSM_X,LSM_Y,10,0,24},
	CtlItems={CTL_X,CTL_Y,6,-1,56},
	CusItems={8,CST_Y+13*2,9,-1,0},
	NewEitems={NE_X,NE_Y,11,0,88},
	NewItems={NM_X,NM_Y,4,2,24};

#pragma warn -sus
CP_itemtype far
MainMenu[]=
{
#ifdef JAPAN
	{1,"",CP_NewGame},
	{1,"",CP_Sound},
	{1,"",CP_Control},
	{1,"",CP_LoadGame},
	{0,"",CP_SaveGame},
	{1,"",CP_ChangeView},
	{2,"",CP_ReadThis},
	{1,"",CP_ViewScores},
	{1,"",0},
	{1,"",0}
#else

	{1,STR_NG,CP_NewGame},
	{1,STR_SD,CP_Sound},
	{1,STR_CL,CP_Control},
	{1,STR_LG,CP_LoadGame},
	{0,STR_SG,CP_SaveGame},
	{1,STR_CV,CP_ChangeView},

#ifndef GOODTIMES
#ifndef SPEAR

	#ifdef SPANISH
	{2,"Ve esto!",CP_ReadThis},
	#else
	{2,"Read This!",CP_ReadThis},
	#endif

#endif
#endif

	{1,STR_VS,CP_ViewScores},
	{1,STR_BD,0},
	{1,STR_QT,0}
#endif
},

far SndMenu[]=
{
#ifdef JAPAN
	{1,"",0},
	{1,"",0},
	{1,"",0},
	{0,"",0},
	{0,"",0},
	{1,"",0},
	{1,"",0},
	{1,"",0},
	{0,"",0},
	{0,"",0},
	{1,"",0},
	{1,"",0},
#else
	{1,STR_NONE,0},
	{1,STR_PC,0},
	{1,STR_ALSB,0},
	{0,"",0},
	{0,"",0},
	{1,STR_NONE,0},
	{1,STR_DISNEY,0},
	{1,STR_SB,0},
	{0,"",0},
	{0,"",0},
	{1,STR_NONE,0},
	{1,STR_ALSB,0}
#endif
},

far CtlMenu[]=
{
#ifdef JAPAN
	{0,"",0},
	{0,"",0},
	{0,"",0},
	{0,"",0},
	{0,"",MouseSensitivity},
	{1,"",CustomControls}
#else
	{0,STR_MOUSEEN,0},
	{0,STR_JOYEN,0},
	{0,STR_PORT2,0},
	{0,STR_GAMEPAD,0},
	{0,STR_SENS,MouseSensitivity},
	{1,STR_CUSTOM,CustomControls}
#endif
},

#pragma warn +sus

#ifndef SPEAR
far NewEmenu[]=
{
#ifdef JAPAN
#ifdef JAPDEMO
	{1,"",0},
	{0,"",0},
	{0,"",0},
	{0,"",0},
	{0,"",0},
	{0,"",0},
	{0,"",0},
	{0,"",0},
	{0,"",0},
	{0,"",0},
	{0,"",0},
	{0,"",0},
#else
	{1,"",0},
	{0,"",0},
	{1,"",0},
	{0,"",0},
	{1,"",0},
	{0,"",0},
	{1,"",0},
	{0,"",0},
	{1,"",0},
	{0,"",0},
	{1,"",0},
	{0,"",0}
#endif
#else
	#ifdef SPANISH
	{1,"Episodio 1\n"
	   "Fuga desde Wolfenstein",0},
	{0,"",0},
	{3,"Episodio 2\n"
		   "Operacion Eisenfaust",0},
	{0,"",0},
	{3,"Episodio 3\n"
		   "Muere, Fuhrer, Muere!",0},
	{0,"",0},
	{3,"Episodio 4\n"
		  "Un Negro Secreto",0},
	{0,"",0},
	{3,"Episodio 5\n"
		  "Huellas del Loco",0},
	{0,"",0},
	{3,"Episodio 6\n"
		  "Confrontacion",0}
	#else
	{1,"Episode 1\n"
	   "Escape from Wolfenstein",0},
	{0,"",0},
	{3,"Episode 2\n"
		   "Operation: Eisenfaust",0},
	{0,"",0},
	{3,"Episode 3\n"
		   "Die, Fuhrer, Die!",0},
	{0,"",0},
	{3,"Episode 4\n"
		  "A Dark Secret",0},
	{0,"",0},
	{3,"Episode 5\n"
		  "Trail of the Madman",0},
	{0,"",0},
	{3,"Episode 6\n"
		  "Confrontation",0}
	#endif
#endif
},
#endif


far NewMenu[]=
{
#ifdef JAPAN
	{1,"",0},
	{1,"",0},
	{1,"",0},
	{1,"",0}
#else
	{1,STR_DADDY,0},
	{1,STR_HURTME,0},
	{1,STR_BRINGEM,0},
	{1,STR_DEATH,0}
#endif
},

far LSMenu[]=
{
	{1,"",0},
	{1,"",0},
	{1,"",0},
	{1,"",0},
	{1,"",0},
	{1,"",0},
	{1,"",0},
	{1,"",0},
	{1,"",0},
	{1,"",0}
},

far CusMenu[]=
{
	{1,"",0},
	{0,"",0},
	{0,"",0},
	{1,"",0},
	{0,"",0},
	{0,"",0},
	{1,"",0},
	{0,"",0},
	{1,"",0}
}
;


int color_hlite[]={
   DEACTIVE,
   HIGHLIGHT,
   READHCOLOR,
   0x67
   },

   color_norml[]={
   DEACTIVE,
   TEXTCOLOR,
   READCOLOR,
   0x6b
   };

int EpisodeSelect[6]={1};


int SaveGamesAvail[10],StartGame,SoundStatus=1,pickquick;
char SaveGameNames[10][32],SaveName[13]="SAVEGAM?.";


////////////////////////////////////////////////////////////////////
//
// INPUT MANAGER SCANCODE TABLES
//
////////////////////////////////////////////////////////////////////
static byte
					*ScanNames[] =		// Scan code names with single chars
					{
	"?","?","1","2","3","4","5","6","7","8","9","0","-","+","?","?",
	"Q","W","E","R","T","Y","U","I","O","P","[","]","|","?","A","S",
	"D","F","G","H","J","K","L",";","\"","?","?","?","Z","X","C","V",
	"B","N","M",",",".","/","?","?","?","?","?","?","?","?","?","?",
	"?","?","?","?","?","?","?","?","\xf","?","-","\x15","5","\x11","+","?",
	"\x13","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?",
	"?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?",
	"?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?"
					},	// DEBUG - consolidate these
					far ExtScanCodes[] =	// Scan codes with >1 char names
					{
	1,0xe,0xf,0x1d,0x2a,0x39,0x3a,0x3b,0x3c,0x3d,0x3e,
	0x3f,0x40,0x41,0x42,0x43,0x44,0x57,0x59,0x46,0x1c,0x36,
	0x37,0x38,0x47,0x49,0x4f,0x51,0x52,0x53,0x45,0x48,
	0x50,0x4b,0x4d,0x00
					},
					*ExtScanNames[] =	// Names corresponding to ExtScanCodes
					{
	"Esc","BkSp","Tab","Ctrl","LShft","Space","CapsLk","F1","F2","F3","F4",
	"F5","F6","F7","F8","F9","F10","F11","F12","ScrlLk","Enter","RShft",
	"PrtSc","Alt","Home","PgUp","End","PgDn","Ins","Del","NumLk","Up",
	"Down","Left","Right",""
					};


////////////////////////////////////////////////////////////////////
//
// Wolfenstein Control Panel!  Ta Da!
//
////////////////////////////////////////////////////////////////////
void US_ControlPanel(byte scancode)
{
	int which,i,start;


	if (ingame)
		if (CP_CheckQuick(scancode))
			return;

	StartCPMusic(MENUSONG);
	SetupControlPanel();

	//
	// F-KEYS FROM WITHIN GAME
	//
	switch(scancode)
	{
		case sc_F1:
			#ifdef SPEAR
			BossKey();
			#else
			#ifdef GOODTIMES
			BossKey();
			#else
			HelpScreens();
			#endif
			#endif
			goto finishup;

		case sc_F2:
			CP_SaveGame(0);
			goto finishup;

		case sc_F3:
			CP_LoadGame(0);
			goto finishup;

		case sc_F4:
			CP_Sound();
			goto finishup;

		case sc_F5:
			CP_ChangeView();
			goto finishup;

		case sc_F6:
			CP_Control();
			goto finishup;

		finishup:
			CleanupControlPanel();
			#ifdef SPEAR
			UnCacheLump (OPTIONS_LUMP_START,OPTIONS_LUMP_END);
			#endif
			return;
	}

#ifdef SPEAR
	CacheLump (OPTIONS_LUMP_START,OPTIONS_LUMP_END);
#endif

	DrawMainMenu();
	MenuFadeIn();
	StartGame=0;

	//
	// MAIN MENU LOOP
	//
	do
	{
		which=HandleMenu(&MainItems,&MainMenu[0],NULL);

		#ifdef SPEAR
		#ifndef SPEARDEMO
		//
		// EASTER EGG FOR SPEAR OF DESTINY!
		//
		if (Keyboard[sc_I] && Keyboard[sc_D])
		{
			VW_FadeOut();
			StartCPMusic (XJAZNAZI_MUS);
			UnCacheLump(OPTIONS_LUMP_START,OPTIONS_LUMP_END);
			UnCacheLump(BACKDROP_LUMP_START,BACKDROP_LUMP_END);
			MM_SortMem ();
			ClearMemory ();


			CA_CacheGrChunk (IDGUYS1PIC);
			VWB_DrawPic(0,0,IDGUYS1PIC);
			UNCACHEGRCHUNK(IDGUYS1PIC);

			CA_CacheGrChunk (IDGUYS2PIC);
			VWB_DrawPic(0,80,IDGUYS2PIC);
			UNCACHEGRCHUNK(IDGUYS2PIC);

			VW_UpdateScreen();

			CA_CacheGrChunk (IDGUYSPALETTE);
			VL_FadeIn(0,255,grsegs[IDGUYSPALETTE],30);
			UNCACHEGRCHUNK(IDGUYSPALETTE);

			while (Keyboard[sc_I] || Keyboard[sc_D]);
			IN_ClearKeysDown();
			IN_Ack();

			VW_FadeOut();

			CacheLump(BACKDROP_LUMP_START,BACKDROP_LUMP_END);
			CacheLump(OPTIONS_LUMP_START,OPTIONS_LUMP_END);
			DrawMainMenu();
			StartCPMusic (MENUSONG);
			MenuFadeIn();
		}
		#endif
		#endif

		switch(which)
		{
			case viewscores:
				if (MainMenu[viewscores].routine == NULL)
					if (CP_EndGame())
						StartGame=1;

				DrawMainMenu();
				MenuFadeIn();
				break;

			case backtodemo:
				#ifdef SPEAR
				if (!ingame)
				{
					//
					// DEALLOCATE ALL SOUNDS!
					//
					switch (SoundMode)
					{
						case sdm_PC:
							start = STARTPCSOUNDS;
							break;
						case sdm_AdLib:
							start = STARTADLIBSOUNDS;
							break;
					}

					if (SoundMode != sdm_Off)
						for (i=0;i<NUMSOUNDS;i++,start++)
							if (audiosegs[start])
								MM_SetPurge (&(memptr)audiosegs[start],3);		// make purgable
				}
				#endif

				MM_SortMem();
				StartGame=1;
				if (!ingame)
					StartCPMusic(INTROSONG);
				VL_FadeOut(0,255,0,0,0,10);
				break;

			case -1:
			case quit:
				CP_Quit();
				break;

			default:
				if (!StartGame)
				{
					DrawMainMenu();
					MenuFadeIn();
				}
		}

	//
	// "EXIT OPTIONS" OR "NEW GAME" EXITS
	//
	} while(!StartGame);

	//
	// DEALLOCATE EVERYTHING
	//
	CleanupControlPanel();

	//
	// CHANGE MAINMENU ITEM
	//
	if (startgame || loadedgame)
	{
		#pragma warn -sus
		MainMenu[viewscores].routine = NULL;
		#ifndef JAPAN
		_fstrcpy(MainMenu[viewscores].string,STR_EG);
		#endif
		#pragma warn +sus
	}

	// RETURN/START GAME EXECUTION

#ifdef SPEAR
	UnCacheLump (OPTIONS_LUMP_START,OPTIONS_LUMP_END);
	MM_SortMem ();
#endif
}


////////////////////////
//
// DRAW MAIN MENU SCREEN
//
void DrawMainMenu(void)
{
#ifdef JAPAN
	CA_CacheScreen(S_OPTIONSPIC);
#else
	ClearMScreen();

	VWB_DrawPic(112,184,C_MOUSELBACKPIC);
	DrawStripes(10);
	VWB_DrawPic(84,0,C_OPTIONSPIC);

	#ifdef SPANISH
	DrawWindow(MENU_X-8,MENU_Y-3,MENU_W+8,MENU_H,BKGDCOLOR);
	#else
	DrawWindow(MENU_X-8,MENU_Y-3,MENU_W,MENU_H,BKGDCOLOR);
	#endif
#endif

	//
	// CHANGE "GAME" AND "DEMO"
	//
	if (ingame)
	{
		#ifndef JAPAN

		#ifdef SPANISH
		_fstrcpy(&MainMenu[backtodemo].string,STR_GAME);
		#else
		_fstrcpy(&MainMenu[backtodemo].string[8],STR_GAME);
		#endif

		#else
		CA_CacheGrChunk(C_MRETGAMEPIC);
		VWB_DrawPic(12*8,20*8,C_MRETGAMEPIC);
		UNCACHEGRCHUNK(C_MRETGAMEPIC);
		CA_CacheGrChunk(C_MENDGAMEPIC);
		VWB_DrawPic(12*8,18*8,C_MENDGAMEPIC);
		UNCACHEGRCHUNK(C_MENDGAMEPIC);
		#endif
		MainMenu[backtodemo].active=2;
	}
	else
	{
		#ifndef JAPAN
		#ifdef SPANISH
		_fstrcpy(&MainMenu[backtodemo].string,STR_BD);
		#else
		_fstrcpy(&MainMenu[backtodemo].string[8],STR_DEMO);
		#endif
		#else
		CA_CacheGrChunk(C_MRETDEMOPIC);
		VWB_DrawPic(12*8,20*8,C_MRETDEMOPIC);
		UNCACHEGRCHUNK(C_MRETDEMOPIC);
		CA_CacheGrChunk(C_MSCORESPIC);
		VWB_DrawPic(12*8,18*8,C_MSCORESPIC);
		UNCACHEGRCHUNK(C_MSCORESPIC);
		#endif
		MainMenu[backtodemo].active=1;
	}

	DrawMenu(&MainItems,&MainMenu[0]);
	VW_UpdateScreen();
}

#ifndef GOODTIMES
#ifndef SPEAR
////////////////////////////////////////////////////////////////////
//
// READ THIS!
//
////////////////////////////////////////////////////////////////////
void CP_ReadThis(void)
{
	StartCPMusic(CORNER_MUS);
	HelpScreens();
	StartCPMusic(MENUSONG);
}
#endif
#endif

#ifndef SPEAR
#ifndef GOODTIMES
#else
////////////////////////////////////////////////////////////////////
//
// BOSS KEY
//
////////////////////////////////////////////////////////////////////
void BossKey(void)
{
	SD_MusicOff();
	_AX = 3;
	geninterrupt(0x10);
	printf("C>");
	while (!Keyboard[sc_Escape])
	IN_ClearKeysDown();

	SD_MusicOn();
	VL_SetVGAPlaneMode ();
	VL_TestPaletteSet ();
	VL_SetPalette (&gamepal);
	LoadLatchMem();
}
#endif
#endif

////////////////////////////////////////////////////////////////////
//
// CHECK QUICK-KEYS & QUIT (WHILE IN A GAME)
//
////////////////////////////////////////////////////////////////////
int CP_CheckQuick(unsigned scancode)
{
	switch(scancode)
	{
		//
		// END GAME
		//
		case sc_F7:
			CA_CacheGrChunk(STARTFONT+1);

			WindowH=160;
			#ifdef JAPAN
			if (GetYorN(7,8,C_JAPQUITPIC))
			#else
			if (Confirm(ENDGAMESTR))
			#endif
			{
				playstate = ex_died;
				pickquick = gamestate.lives = 0;
			}

			DrawAllPlayBorder();
			WindowH=200;
			fontnumber=0;
			MainMenu[savegame].active = 0;
			return 1;

		//
		// QUICKSAVE
		//
		case sc_F8:
			if (SaveGamesAvail[LSItems.curpos] && pickquick)
			{
				CA_CacheGrChunk(STARTFONT+1);
				fontnumber = 1;
				Message(STR_SAVING"...");
				CP_SaveGame(1);
				fontnumber=0;
			}
			else
			{
				#ifndef SPEAR
				CA_CacheGrChunk(STARTFONT+1);
				CA_CacheGrChunk(C_CURSOR1PIC);
				CA_CacheGrChunk(C_CURSOR2PIC);
				CA_CacheGrChunk(C_DISKLOADING1PIC);
				CA_CacheGrChunk(C_DISKLOADING2PIC);
				CA_CacheGrChunk(C_SAVEGAMEPIC);
				CA_CacheGrChunk(C_MOUSELBACKPIC);
				#else
				CacheLump (BACKDROP_LUMP_START,BACKDROP_LUMP_END);
				CA_CacheGrChunk(C_CURSOR1PIC);
				#endif

				VW_FadeOut ();

				StartCPMusic(MENUSONG);
				pickquick=CP_SaveGame(0);

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

				#ifndef SPEAR
				UNCACHEGRCHUNK(C_CURSOR1PIC);
				UNCACHEGRCHUNK(C_CURSOR2PIC);
				UNCACHEGRCHUNK(C_DISKLOADING1PIC);
				UNCACHEGRCHUNK(C_DISKLOADING2PIC);
				UNCACHEGRCHUNK(C_SAVEGAMEPIC);
				UNCACHEGRCHUNK(C_MOUSELBACKPIC);
				#else
				UnCacheLump (BACKDROP_LUMP_START,BACKDROP_LUMP_END);
				#endif
			}
			return 1;

		//
		// QUICKLOAD
		//
		case sc_F9:
			if (SaveGamesAvail[LSItems.curpos] && pickquick)
			{
				char string[100]=STR_LGC;


				CA_CacheGrChunk(STARTFONT+1);
				fontnumber = 1;

				strcat(string,SaveGameNames[LSItems.curpos]);
				strcat(string,"\"?");

				if (Confirm(string))
					CP_LoadGame(1);

				DrawAllPlayBorder();
				fontnumber=0;
			}
			else
			{
				#ifndef SPEAR
				CA_CacheGrChunk(STARTFONT+1);
				CA_CacheGrChunk(C_CURSOR1PIC);
				CA_CacheGrChunk(C_CURSOR2PIC);
				CA_CacheGrChunk(C_DISKLOADING1PIC);
				CA_CacheGrChunk(C_DISKLOADING2PIC);
				CA_CacheGrChunk(C_LOADGAMEPIC);
				CA_CacheGrChunk(C_MOUSELBACKPIC);
				#else
				CA_CacheGrChunk(C_CURSOR1PIC);
				CacheLump (BACKDROP_LUMP_START,BACKDROP_LUMP_END);
				#endif

				VW_FadeOut ();

				StartCPMusic(MENUSONG);
				pickquick=CP_LoadGame(0);

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

				#ifndef SPEAR
				UNCACHEGRCHUNK(C_CURSOR1PIC);
				UNCACHEGRCHUNK(C_CURSOR2PIC);
				UNCACHEGRCHUNK(C_DISKLOADING1PIC);
				UNCACHEGRCHUNK(C_DISKLOADING2PIC);
				UNCACHEGRCHUNK(C_LOADGAMEPIC);
				UNCACHEGRCHUNK(C_MOUSELBACKPIC);
				#else
				UnCacheLump (BACKDROP_LUMP_START,BACKDROP_LUMP_END);
				#endif
			}
			return 1;

		//
		// QUIT
		//
		case sc_F10:
			CA_CacheGrChunk(STARTFONT+1);

			WindowX=WindowY=0;
			WindowW=320;
			WindowH=160;
			#ifdef JAPAN
			if (GetYorN(7,8,C_QUITMSGPIC))
			#else
				#ifdef SPANISH
			if (Confirm(ENDGAMESTR))
				#else
			if (Confirm(endStrings[US_RndT()&0x7+(US_RndT()&1)]))
				#endif
			#endif
			{
				int i;


				VW_UpdateScreen();
				SD_MusicOff();
				SD_StopSound();
				MenuFadeOut();

				//
				// SHUT-UP THE ADLIB
				//
				for (i=1;i<=0xf5;i++)
					alOut(i,0);
				Quit(NULL);
			}

			DrawAllPlayBorder();
			WindowH=200;
			fontnumber=0;
			return 1;
		}

	return 0;
}


////////////////////////////////////////////////////////////////////
//
// END THE CURRENT GAME
//
////////////////////////////////////////////////////////////////////
int CP_EndGame(void)
{
#ifdef JAPAN
	if (!GetYorN(7,8,C_JAPQUITPIC))
#else
	if (!Confirm(ENDGAMESTR))
#endif
		return 0;

	pickquick = gamestate.lives = 0;
	playstate = ex_died;

	#pragma warn -sus
	MainMenu[savegame].active = 0;
	MainMenu[viewscores].routine=CP_ViewScores;
	#ifndef JAPAN
	_fstrcpy(MainMenu[viewscores].string,STR_VS);
	#endif
	#pragma warn +sus

	return 1;
}


////////////////////////////////////////////////////////////////////
//
// VIEW THE HIGH SCORES
//
////////////////////////////////////////////////////////////////////
void CP_ViewScores(void)
{
	fontnumber=0;

#ifdef SPEAR
	UnCacheLump (OPTIONS_LUMP_START,OPTIONS_LUMP_END);
	StartCPMusic (XAWARD_MUS);
#else
	StartCPMusic (ROSTER_MUS);
#endif

	DrawHighScores ();
	VW_UpdateScreen ();
	MenuFadeIn();
	fontnumber=1;

	IN_Ack();

	StartCPMusic(MENUSONG);
	MenuFadeOut();

#ifdef SPEAR
	CacheLump (BACKDROP_LUMP_START,BACKDROP_LUMP_END);
	CacheLump (OPTIONS_LUMP_START,OPTIONS_LUMP_END);
#endif
}


////////////////////////////////////////////////////////////////////
//
// START A NEW GAME
//
////////////////////////////////////////////////////////////////////
void CP_NewGame(void)
{
	int which,episode;

#ifdef SPEAR
	UnCacheLump (OPTIONS_LUMP_START,OPTIONS_LUMP_END);
#endif


#ifndef SPEAR
firstpart:

	DrawNewEpisode();
	do
	{
		which=HandleMenu(&NewEitems,&NewEmenu[0],NULL);
		switch(which)
		{
			case -1:
				MenuFadeOut();
				return;

			default:
				if (!EpisodeSelect[which/2])
				{
					SD_PlaySound (NOWAYSND);
					Message("Please select \"Read This!\"\n"
							"from the Options menu to\n"
							"find out how to order this\n"
							"episode from Apogee.");
					IN_ClearKeysDown();
					IN_Ack();
					DrawNewEpisode();
					which = 0;
				}
				else
				{
					episode = which/2;
					which = 1;
				}
				break;
		}

	} while (!which);

	ShootSnd();

	//
	// ALREADY IN A GAME?
	//
	if (ingame)
		#ifdef JAPAN
		if (!GetYorN(7,8,C_JAPNEWGAMEPIC))
		#else
		if (!Confirm(CURGAME))
		#endif
		{
			MenuFadeOut();
			return;
		}

	MenuFadeOut();

#else
	episode = 0;

	//
	// ALREADY IN A GAME?
	//
	CacheLump (NEWGAME_LUMP_START,NEWGAME_LUMP_END);
	DrawNewGame();
	if (ingame)
		if (!Confirm(CURGAME))
		{
			MenuFadeOut();
			UnCacheLump (NEWGAME_LUMP_START,NEWGAME_LUMP_END);
			CacheLump (OPTIONS_LUMP_START,OPTIONS_LUMP_END);
			return;
		}

#endif

	DrawNewGame();
	which=HandleMenu(&NewItems,&NewMenu[0],DrawNewGameDiff);
	if (which<0)
	{
		MenuFadeOut();
		#ifndef SPEAR
		goto firstpart;
		#else
		UnCacheLump (NEWGAME_LUMP_START,NEWGAME_LUMP_END);
		CacheLump (OPTIONS_LUMP_START,OPTIONS_LUMP_END);
		return;
		#endif
	}

	ShootSnd();
	NewGame(which,episode);
	StartGame=1;
	MenuFadeOut();

	//
	// CHANGE "READ THIS!" TO NORMAL COLOR
	//
	#ifndef SPEAR
	#ifndef GOODTIMES
	MainMenu[readthis].active=1;
	#endif
	#endif

	pickquick = 0;

#ifdef SPEAR
	UnCacheLump (NEWGAME_LUMP_START,NEWGAME_LUMP_END);
	CacheLump (OPTIONS_LUMP_START,OPTIONS_LUMP_END);
#endif
}


#ifndef SPEAR
/////////////////////
//
// DRAW NEW EPISODE MENU
//
void DrawNewEpisode(void)
{
	int i;

#ifdef JAPAN
	CA_CacheScreen(S_EPISODEPIC);
#else
	ClearMScreen();
	VWB_DrawPic(112,184,C_MOUSELBACKPIC);

	DrawWindow(NE_X-4,NE_Y-4,NE_W+8,NE_H+8,BKGDCOLOR);
	SETFONTCOLOR(READHCOLOR,BKGDCOLOR);
	PrintY=2;
	WindowX=0;
	#ifdef SPANISH
	US_CPrint("Cual episodio jugar?");
	#else
	US_CPrint("Which episode to play?");
	#endif
#endif

	SETFONTCOLOR(TEXTCOLOR,BKGDCOLOR);
	DrawMenu(&NewEitems,&NewEmenu[0]);

	for (i=0;i<6;i++)
		VWB_DrawPic(NE_X+32,NE_Y+i*26,C_EPISODE1PIC+i);

	VW_UpdateScreen();
	MenuFadeIn();
	WaitKeyUp();
}
#endif

/////////////////////
//
// DRAW NEW GAME MENU
//
void DrawNewGame(void)
{
#ifdef JAPAN
	CA_CacheScreen(S_SKILLPIC);
#else
	ClearMScreen();
	VWB_DrawPic(112,184,C_MOUSELBACKPIC);

	SETFONTCOLOR(READHCOLOR,BKGDCOLOR);
	PrintX=NM_X+20;
	PrintY=NM_Y-32;

#ifndef SPEAR
	#ifdef SPANISH
	US_Print("Eres macho?");
	#else
	US_Print("How tough are you?");
	#endif
#else
	VWB_DrawPic (PrintX,PrintY,C_HOWTOUGHPIC);
#endif

	DrawWindow(NM_X-5,NM_Y-10,NM_W,NM_H,BKGDCOLOR);
#endif

	DrawMenu(&NewItems,&NewMenu[0]);
	DrawNewGameDiff(NewItems.curpos);
	VW_UpdateScreen();
	MenuFadeIn();
	WaitKeyUp();
}


////////////////////////
//
// DRAW NEW GAME GRAPHIC
//
void DrawNewGameDiff(int w)
{
	VWB_DrawPic(NM_X+185,NM_Y+7,w+C_BABYMODEPIC);
}


////////////////////////////////////////////////////////////////////
//
// HANDLE SOUND MENU
//
////////////////////////////////////////////////////////////////////
void CP_Sound(void)
{
	int which,i;


#ifdef SPEAR
	UnCacheLump (OPTIONS_LUMP_START,OPTIONS_LUMP_END);
	CacheLump (SOUND_LUMP_START,SOUND_LUMP_END);
#endif

	DrawSoundMenu();
	MenuFadeIn();
	WaitKeyUp();

	do
	{
		which=HandleMenu(&SndItems,&SndMenu[0],NULL);
		//
		// HANDLE MENU CHOICES
		//
		switch(which)
		{
			//
			// SOUND EFFECTS
			//
			case 0:
				if (SoundMode!=sdm_Off)
				{
					SD_WaitSoundDone();
					SD_SetSoundMode(sdm_Off);
					DrawSoundMenu();
				}
				break;
			case 1:
				if (SoundMode!=sdm_PC)
				{
					SD_WaitSoundDone();
					SD_SetSoundMode(sdm_PC);
					CA_LoadAllSounds();
					DrawSoundMenu();
					ShootSnd();
				}
				break;
			case 2:
				if (SoundMode!=sdm_AdLib)
				{
					SD_WaitSoundDone();
					SD_SetSoundMode(sdm_AdLib);
					CA_LoadAllSounds();
					DrawSoundMenu();
					ShootSnd();
				}
				break;

			//
			// DIGITIZED SOUND
			//
			case 5:
				if (DigiMode!=sds_Off)
				{
					SD_SetDigiDevice(sds_Off);
					DrawSoundMenu();
				}
				break;
			case 6:
				if (DigiMode!=sds_SoundSource)
				{
					SD_SetDigiDevice(sds_SoundSource);
					DrawSoundMenu();
					ShootSnd();
				}
				break;
			case 7:
				if (DigiMode!=sds_SoundBlaster)
				{
					SD_SetDigiDevice(sds_SoundBlaster);
					DrawSoundMenu();
					ShootSnd();
				}
				break;

			//
			// MUSIC
			//
			case 10:
				if (MusicMode!=smm_Off)
				{
					SD_SetMusicMode(smm_Off);
					DrawSoundMenu();
					ShootSnd();
				}
				break;
			case 11:
				if (MusicMode!=smm_AdLib)
				{
					SD_SetMusicMode(smm_AdLib);
					DrawSoundMenu();
					ShootSnd();
					StartCPMusic(MENUSONG);
				}
				break;
		}
	} while(which>=0);

	MenuFadeOut();

#ifdef SPEAR
	UnCacheLump (SOUND_LUMP_START,SOUND_LUMP_END);
	CacheLump (OPTIONS_LUMP_START,OPTIONS_LUMP_END);
#endif
}


//////////////////////
//
// DRAW THE SOUND MENU
//
void DrawSoundMenu(void)
{
	int i,on;


#ifdef JAPAN
	CA_CacheScreen(S_SOUNDPIC);
#else
	//
	// DRAW SOUND MENU
	//
	ClearMScreen();
	VWB_DrawPic(112,184,C_MOUSELBACKPIC);

	DrawWindow(SM_X-8,SM_Y1-3,SM_W,SM_H1,BKGDCOLOR);
	DrawWindow(SM_X-8,SM_Y2-3,SM_W,SM_H2,BKGDCOLOR);
	DrawWindow(SM_X-8,SM_Y3-3,SM_W,SM_H3,BKGDCOLOR);
#endif

	//
	// IF NO ADLIB, NON-CHOOSENESS!
	//
	if (!AdLibPresent && !SoundBlasterPresent)
	{
		SndMenu[2].active=SndMenu[10].active=SndMenu[11].active=0;
	}

	if (!SoundSourcePresent)
		SndMenu[6].active=0;

	if (!SoundBlasterPresent)
		SndMenu[7].active=0;

	if (!SoundSourcePresent && !SoundBlasterPresent)
		SndMenu[5].active=0;

	DrawMenu(&SndItems,&SndMenu[0]);
#ifndef JAPAN
	VWB_DrawPic(100,SM_Y1-20,C_FXTITLEPIC);
	VWB_DrawPic(100,SM_Y2-20,C_DIGITITLEPIC);
	VWB_DrawPic(100,SM_Y3-20,C_MUSICTITLEPIC);
#endif

	for (i=0;i<SndItems.amount;i++)
#ifdef JAPAN
		if (i!=3 && i!=4 && i!=8 && i!=9)
#else
		if (SndMenu[i].string[0])
#endif
		{
			//
			// DRAW SELECTED/NOT SELECTED GRAPHIC BUTTONS
			//
			on=0;
			switch(i)
			{
				//
				// SOUND EFFECTS
				//
				case 0: if (SoundMode==sdm_Off) on=1; break;
				case 1: if (SoundMode==sdm_PC) on=1; break;
				case 2: if (SoundMode==sdm_AdLib) on=1; break;

				//
				// DIGITIZED SOUND
				//
				case 5: if (DigiMode==sds_Off) on=1; break;
				case 6: if (DigiMode==sds_SoundSource) on=1; break;
				case 7: if (DigiMode==sds_SoundBlaster) on=1; break;

				//
				// MUSIC
				//
				case 10: if (MusicMode==smm_Off) on=1; break;
				case 11: if (MusicMode==smm_AdLib) on=1; break;
			}

			if (on)
				VWB_DrawPic(SM_X+24,SM_Y1+i*13+2,C_SELECTEDPIC);
			else
				VWB_DrawPic(SM_X+24,SM_Y1+i*13+2,C_NOTSELECTEDPIC);
		}

	DrawMenuGun(&SndItems);
	VW_UpdateScreen();
}


//
// DRAW LOAD/SAVE IN PROGRESS
//
void DrawLSAction(int which)
{
	#define LSA_X	96
	#define LSA_Y	80
	#define LSA_W	130
	#define LSA_H	42

	DrawWindow(LSA_X,LSA_Y,LSA_W,LSA_H,TEXTCOLOR);
	DrawOutline(LSA_X,LSA_Y,LSA_W,LSA_H,0,HIGHLIGHT);
	VWB_DrawPic(LSA_X+8,LSA_Y+5,C_DISKLOADING1PIC);

	fontnumber=1;
	SETFONTCOLOR(0,TEXTCOLOR);
	PrintX=LSA_X+46;
	PrintY=LSA_Y+13;

	if (!which)
		US_Print(STR_LOADING"...");
	else
		US_Print(STR_SAVING"...");

	VW_UpdateScreen();
}


////////////////////////////////////////////////////////////////////
//
// LOAD SAVED GAMES
//
////////////////////////////////////////////////////////////////////
int CP_LoadGame(int quick)
{
	int handle,which,exit=0;
	char name[13];


	strcpy(name,SaveName);

	//
	// QUICKLOAD?
	//
	if (quick)
	{
		which=LSItems.curpos;

		if (SaveGamesAvail[which])
		{
			name[7]=which+'0';
			handle=open(name,O_BINARY);
			lseek(handle,32,SEEK_SET);
			loadedgame=true;
			LoadTheGame(handle,0,0);
			loadedgame=false;
			close(handle);

			DrawFace ();
			DrawHealth ();
			DrawLives ();
			DrawLevel ();
			DrawAmmo ();
			DrawKeys ();
			DrawWeapon ();
			DrawScore ();
			return 1;
		}
	}


#ifdef SPEAR
	UnCacheLump (OPTIONS_LUMP_START,OPTIONS_LUMP_END);
	CacheLump (LOADSAVE_LUMP_START,LOADSAVE_LUMP_END);
#endif

	DrawLoadSaveScreen(0);

	do
	{
		which=HandleMenu(&LSItems,&LSMenu[0],TrackWhichGame);
		if (which>=0 && SaveGamesAvail[which])
		{
			ShootSnd();
			name[7]=which+'0';

			handle=open(name,O_BINARY);
			lseek(handle,32,SEEK_SET);

			DrawLSAction(0);
			loadedgame=true;

			LoadTheGame(handle,LSA_X+8,LSA_Y+5);
			close(handle);

			StartGame=1;
			ShootSnd();
			//
			// CHANGE "READ THIS!" TO NORMAL COLOR
			//

			#ifndef SPEAR
			#ifndef GOODTIMES
			MainMenu[readthis].active=1;
			#endif
			#endif

			exit=1;
			break;
		}

	} while(which>=0);

	MenuFadeOut();

#ifdef SPEAR
	UnCacheLump (LOADSAVE_LUMP_START,LOADSAVE_LUMP_END);
	CacheLump (OPTIONS_LUMP_START,OPTIONS_LUMP_END);
#endif

	return exit;
}


///////////////////////////////////
//
// HIGHLIGHT CURRENT SELECTED ENTRY
//
void TrackWhichGame(int w)
{
	static int lastgameon=0;

	PrintLSEntry(lastgameon,TEXTCOLOR);
	PrintLSEntry(w,HIGHLIGHT);

	lastgameon=w;
}


////////////////////////////
//
// DRAW THE LOAD/SAVE SCREEN
//
void DrawLoadSaveScreen(int loadsave)
{
	#define DISKX	100
	#define DISKY	0

	int i;


	ClearMScreen();
	fontnumber=1;
	VWB_DrawPic(112,184,C_MOUSELBACKPIC);
	DrawWindow(LSM_X-10,LSM_Y-5,LSM_W,LSM_H,BKGDCOLOR);
	DrawStripes(10);

	if (!loadsave)
		VWB_DrawPic(60,0,C_LOADGAMEPIC);
	else
		VWB_DrawPic(60,0,C_SAVEGAMEPIC);

	for (i=0;i<10;i++)
		PrintLSEntry(i,TEXTCOLOR);

	DrawMenu(&LSItems,&LSMenu[0]);
	VW_UpdateScreen();
	MenuFadeIn();
	WaitKeyUp();
}


///////////////////////////////////////////
//
// PRINT LOAD/SAVE GAME ENTRY W/BOX OUTLINE
//
void PrintLSEntry(int w,int color)
{
	SETFONTCOLOR(color,BKGDCOLOR);
	DrawOutline(LSM_X+LSItems.indent,LSM_Y+w*13,LSM_W-LSItems.indent-15,11,color,color);
	PrintX=LSM_X+LSItems.indent+2;
	PrintY=LSM_Y+w*13+1;
	fontnumber=0;

	if (SaveGamesAvail[w])
		US_Print(SaveGameNames[w]);
	else
		US_Print("      - "STR_EMPTY" -");

	fontnumber=1;
}


////////////////////////////////////////////////////////////////////
//
// SAVE CURRENT GAME
//
////////////////////////////////////////////////////////////////////
int CP_SaveGame(int quick)
{
	int handle,which,exit=0;
	unsigned nwritten;
	char name[13],input[32];


	strcpy(name,SaveName);

	//
	// QUICKSAVE?
	//
	if (quick)
	{
		which=LSItems.curpos;

		if (SaveGamesAvail[which])
		{
			name[7]=which+'0';
			unlink(name);
			handle=creat(name,S_IREAD|S_IWRITE);

			strcpy(input,&SaveGameNames[which][0]);

			_dos_write(handle,(void far *)input,32,&nwritten);
			lseek(handle,32,SEEK_SET);
			SaveTheGame(handle,0,0);
			close(handle);

			return 1;
		}
	}


#ifdef SPEAR
	UnCacheLump (OPTIONS_LUMP_START,OPTIONS_LUMP_END);
	CacheLump (LOADSAVE_LUMP_START,LOADSAVE_LUMP_END);
#endif

	DrawLoadSaveScreen(1);

	do
	{
		which=HandleMenu(&LSItems,&LSMenu[0],TrackWhichGame);
		if (which>=0)
		{
			//
			// OVERWRITE EXISTING SAVEGAME?
			//
			if (SaveGamesAvail[which])
				#ifdef JAPAN
				if (!GetYorN(7,8,C_JAPSAVEOVERPIC))
				#else
				if (!Confirm(GAMESVD))
				#endif
				{
					DrawLoadSaveScreen(1);
					continue;
				}
				else
				{
					DrawLoadSaveScreen(1);
					PrintLSEntry(which,HIGHLIGHT);
					VW_UpdateScreen();
				}

			ShootSnd();

			strcpy(input,&SaveGameNames[which][0]);
			name[7]=which+'0';

			fontnumber=0;
			if (!SaveGamesAvail[which])
				VWB_Bar(LSM_X+LSItems.indent+1,LSM_Y+which*13+1,LSM_W-LSItems.indent-16,10,BKGDCOLOR);
			VW_UpdateScreen();

			if (US_LineInput(LSM_X+LSItems.indent+2,LSM_Y+which*13+1,input,input,true,31,LSM_W-LSItems.indent-30))
			{
				SaveGamesAvail[which]=1;
				strcpy(&SaveGameNames[which][0],input);

				unlink(name);
				handle=creat(name,S_IREAD|S_IWRITE);
				_dos_write(handle,(void far *)input,32,&nwritten);
				lseek(handle,32,SEEK_SET);

				DrawLSAction(1);
				SaveTheGame(handle,LSA_X+8,LSA_Y+5);

				close(handle);

				ShootSnd();
				exit=1;
			}
			else
			{
				VWB_Bar(LSM_X+LSItems.indent+1,LSM_Y+which*13+1,LSM_W-LSItems.indent-16,10,BKGDCOLOR);
				PrintLSEntry(which,HIGHLIGHT);
				VW_UpdateScreen();
				SD_PlaySound(ESCPRESSEDSND);
				continue;
			}

			fontnumber=1;
			break;
		}

	} while(which>=0);

	MenuFadeOut();

#ifdef SPEAR
	UnCacheLump (LOADSAVE_LUMP_START,LOADSAVE_LUMP_END);
	CacheLump (OPTIONS_LUMP_START,OPTIONS_LUMP_END);
#endif

	return exit;
}


////////////////////////////////////////////////////////////////////
//
// CALIBRATE JOYSTICK
//
////////////////////////////////////////////////////////////////////
int CalibrateJoystick(void)
{
	#define CALX	85
	#define CALY	40
	#define CALW	158
	#define CALH	140

	unsigned xmin,ymin,xmax,ymax,jb;



	#ifdef JAPAN
	VWB_DrawPic(CALX,CALY,C_JOY0PIC);
	#else
	DrawWindow(CALX-5,CALY-5,CALW,CALH,TEXTCOLOR);
	DrawOutline(CALX-5,CALY-5,CALW,CALH,0,HIGHLIGHT);
	SETFONTCOLOR(0,TEXTCOLOR);

	WindowX = PrintX = CALX;
	WindowW = CALW;
	WindowH = CALH;
	WindowY = PrintY = CALY;
	US_Print("    "STR_CALIB"\n    "STR_JOYST"\n");
	VWB_DrawPic(CALX+40,CALY+30,C_JOY1PIC);
	PrintY = CALY+80;
	US_Print(STR_MOVEJOY);
	SETFONTCOLOR(BKGDCOLOR,TEXTCOLOR);
	US_Print("   "STR_ESCEXIT);
	#endif
	VW_UpdateScreen();

	do
	{
		jb=IN_JoyButtons();
		if (Keyboard[sc_Escape])
			return 0;
		#ifndef SPEAR
		if (Keyboard[sc_Tab] && Keyboard[sc_P] && MS_CheckParm("goobers"))
			PicturePause();
		#endif

	} while(!(jb&1));

	SD_PlaySound(SHOOTSND);
	IN_GetJoyAbs(joystickport,&xmin,&ymin);


	#ifdef JAPAN
	VWB_DrawPic(CALX,CALY,C_JOY1PIC);
	#else
	DrawWindow(CALX-5,CALY-5,CALW,CALH,TEXTCOLOR);
	DrawOutline(CALX-5,CALY-5,CALW,CALH,0,HIGHLIGHT);
	SETFONTCOLOR(0,TEXTCOLOR);

	PrintX = CALX;
	PrintY = CALY;
	US_Print("    "STR_CALIB"\n    "STR_JOYST"\n");
	VWB_DrawPic(CALX+40,CALY+30,C_JOY2PIC);
	PrintY = CALY+80;
	US_Print(STR_MOVEJOY2);
	SETFONTCOLOR(BKGDCOLOR,TEXTCOLOR);
	US_Print("   "STR_ESCEXIT);
	#endif
	VW_UpdateScreen();

	do
	{
		jb=IN_JoyButtons();
		if (Keyboard[sc_Escape])
			return 0;
		#ifndef SPEAR
		if (Keyboard[sc_Tab] && Keyboard[sc_P] && MS_CheckParm("goobers"))
			PicturePause();
		#endif
	} while(!(jb&2));

	IN_GetJoyAbs(joystickport,&xmax,&ymax);
	SD_PlaySound(SHOOTSND);

	while (IN_JoyButtons());

	//
	// ASSIGN ACTUAL VALUES HERE
	//
	if ((xmin != xmax) && (ymin != ymax))
		IN_SetupJoy(joystickport,xmin,xmax,ymin,ymax);
	else
		return 0;

	return 1;
}


////////////////////////////////////////////////////////////////////
//
// DEFINE CONTROLS
//
////////////////////////////////////////////////////////////////////
void CP_Control(void)
{
	#define CTL_SPC	70
	enum {MOUSEENABLE,JOYENABLE,USEPORT2,PADENABLE,MOUSESENS,CUSTOMIZE};
	int i,which;


#ifdef SPEAR
	UnCacheLump (OPTIONS_LUMP_START,OPTIONS_LUMP_END);
	CacheLump (CONTROL_LUMP_START,CONTROL_LUMP_END);
#endif

	DrawCtlScreen();
	MenuFadeIn();
	WaitKeyUp();

	do
	{
		which=HandleMenu(&CtlItems,&CtlMenu[0],NULL);
		switch(which)
		{
			case MOUSEENABLE:
				mouseenabled^=1;
				_CX=_DX=CENTER;
				Mouse(4);
				DrawCtlScreen();
				CusItems.curpos=-1;
				ShootSnd();
				break;

			case JOYENABLE:
				joystickenabled^=1;
				if (joystickenabled)
					if (!CalibrateJoystick())
						joystickenabled = 0;
				DrawCtlScreen();
				CusItems.curpos=-1;
				ShootSnd();
				break;

			case USEPORT2:
				joystickport^=1;
				DrawCtlScreen();
				ShootSnd();
				break;

			case PADENABLE:
				joypadenabled^=1;
				DrawCtlScreen();
				ShootSnd();
				break;

			case MOUSESENS:
			case CUSTOMIZE:
				DrawCtlScreen();
				MenuFadeIn();
				WaitKeyUp();
				break;
		}
	} while(which>=0);

	MenuFadeOut();

#ifdef SPEAR
	UnCacheLump (CONTROL_LUMP_START,CONTROL_LUMP_END);
	CacheLump (OPTIONS_LUMP_START,OPTIONS_LUMP_END);
#endif
}


////////////////////////////////
//
// DRAW MOUSE SENSITIVITY SCREEN
//
void DrawMouseSens(void)
{
#ifdef JAPAN
	CA_CacheScreen(S_MOUSESENSPIC);
#else
	ClearMScreen();
	VWB_DrawPic(112,184,C_MOUSELBACKPIC);
	#ifdef SPANISH
	DrawWindow(10,80,300,43,BKGDCOLOR);
	#else
	DrawWindow(10,80,300,30,BKGDCOLOR);
	#endif

	WindowX=0;
	WindowW=320;
	PrintY=82;
	SETFONTCOLOR(READCOLOR,BKGDCOLOR);
	US_CPrint(STR_MOUSEADJ);

	SETFONTCOLOR(TEXTCOLOR,BKGDCOLOR);
	#ifdef SPANISH
	PrintX=14;
	PrintY=95+13;
	US_Print(STR_SLOW);
	PrintX=252;
	US_Print(STR_FAST);
	#else
	PrintX=14;
	PrintY=95;
	US_Print(STR_SLOW);
	PrintX=269;
	US_Print(STR_FAST);
	#endif
#endif

	VWB_Bar(60,97,200,10,TEXTCOLOR);
	DrawOutline(60,97,200,10,0,HIGHLIGHT);
	DrawOutline(60+20*mouseadjustment,97,20,10,0,READCOLOR);
	VWB_Bar(61+20*mouseadjustment,98,19,9,READHCOLOR);

	VW_UpdateScreen();
	MenuFadeIn();
}


///////////////////////////
//
// ADJUST MOUSE SENSITIVITY
//
void MouseSensitivity(void)
{
	ControlInfo ci;
	int exit=0,oldMA;


	oldMA=mouseadjustment;
	DrawMouseSens();
	do
	{
		ReadAnyControl(&ci);
		switch(ci.dir)
		{
			case dir_North:
			case dir_West:
				if (mouseadjustment)
				{
					mouseadjustment--;
					VWB_Bar(60,97,200,10,TEXTCOLOR);
					DrawOutline(60,97,200,10,0,HIGHLIGHT);
					DrawOutline(60+20*mouseadjustment,97,20,10,0,READCOLOR);
					VWB_Bar(61+20*mouseadjustment,98,19,9,READHCOLOR);
					VW_UpdateScreen();
					SD_PlaySound(MOVEGUN1SND);
					while(Keyboard[sc_LeftArrow]);
					WaitKeyUp();
				}
				break;

			case dir_South:
			case dir_East:
				if (mouseadjustment<9)
				{
					mouseadjustment++;
					VWB_Bar(60,97,200,10,TEXTCOLOR);
					DrawOutline(60,97,200,10,0,HIGHLIGHT);
					DrawOutline(60+20*mouseadjustment,97,20,10,0,READCOLOR);
					VWB_Bar(61+20*mouseadjustment,98,19,9,READHCOLOR);
					VW_UpdateScreen();
					SD_PlaySound(MOVEGUN1SND);
					while(Keyboard[sc_RightArrow]);
					WaitKeyUp();
				}
				break;
		}

		#ifndef SPEAR
		if (Keyboard[sc_Tab] && Keyboard[sc_P] && MS_CheckParm("goobers"))
		#else
		if (Keyboard[sc_Tab] && Keyboard[sc_P] && MS_CheckParm("debugmode"))
		#endif
			PicturePause();

		if (ci.button0 || Keyboard[sc_Space] || Keyboard[sc_Enter])
			exit=1;
		else
		if (ci.button1 || Keyboard[sc_Escape])
			exit=2;

	} while(!exit);

	if (exit==2)
	{
		mouseadjustment=oldMA;
		SD_PlaySound(ESCPRESSEDSND);
	}
	else
		SD_PlaySound(SHOOTSND);

	WaitKeyUp();
	MenuFadeOut();
}


///////////////////////////
//
// DRAW CONTROL MENU SCREEN
//
void DrawCtlScreen(void)
{
 int i,x,y;


#ifdef JAPAN
	CA_CacheScreen(S_CONTROLPIC);
#else
 ClearMScreen();
 DrawStripes(10);
 VWB_DrawPic(80,0,C_CONTROLPIC);
 VWB_DrawPic(112,184,C_MOUSELBACKPIC);
 DrawWindow(CTL_X-8,CTL_Y-5,CTL_W,CTL_H,BKGDCOLOR);
#endif
 WindowX=0;
 WindowW=320;
 SETFONTCOLOR(TEXTCOLOR,BKGDCOLOR);

 if (JoysPresent[0])
   CtlMenu[1].active=
   CtlMenu[2].active=
   CtlMenu[3].active=1;

 CtlMenu[2].active=CtlMenu[3].active=joystickenabled;

 if (MousePresent)
 {
  CtlMenu[4].active=
  CtlMenu[0].active=1;
 }

 CtlMenu[4].active=mouseenabled;


 DrawMenu(&CtlItems,&CtlMenu[0]);


 x=CTL_X+CtlItems.indent-24;
 y=CTL_Y+3;
 if (mouseenabled)
   VWB_DrawPic(x,y,C_SELECTEDPIC);
 else
   VWB_DrawPic(x,y,C_NOTSELECTEDPIC);

 y=CTL_Y+16;
 if (joystickenabled)
   VWB_DrawPic(x,y,C_SELECTEDPIC);
 else
   VWB_DrawPic(x,y,C_NOTSELECTEDPIC);

 y=CTL_Y+29;
 if (joystickport)
   VWB_DrawPic(x,y,C_SELECTEDPIC);
 else
   VWB_DrawPic(x,y,C_NOTSELECTEDPIC);

 y=CTL_Y+42;
 if (joypadenabled)
   VWB_DrawPic(x,y,C_SELECTEDPIC);
 else
   VWB_DrawPic(x,y,C_NOTSELECTEDPIC);

 //
 // PICK FIRST AVAILABLE SPOT
 //
 if (CtlItems.curpos<0 || !CtlMenu[CtlItems.curpos].active)
   for (i=0;i<6;i++)
	 if (CtlMenu[i].active)
	 {
	  CtlItems.curpos=i;
	  break;
	 }

 DrawMenuGun(&CtlItems);
 VW_UpdateScreen();
}


////////////////////////////////////////////////////////////////////
//
// CUSTOMIZE CONTROLS
//
////////////////////////////////////////////////////////////////////
enum {FIRE,STRAFE,RUN,OPEN};
char mbarray[4][3]={"b0","b1","b2","b3"},
	   order[4]={RUN,OPEN,FIRE,STRAFE};


void CustomControls(void)
{
 int which;


 DrawCustomScreen();
 do
 {
  which=HandleMenu(&CusItems,&CusMenu[0],FixupCustom);
  switch(which)
  {
   case 0:
	 DefineMouseBtns();
	 DrawCustMouse(1);
	 break;
   case 3:
	 DefineJoyBtns();
	 DrawCustJoy(0);
	 break;
   case 6:
	 DefineKeyBtns();
	 DrawCustKeybd(0);
	 break;
   case 8:
	 DefineKeyMove();
	 DrawCustKeys(0);
  }
 } while(which>=0);



 MenuFadeOut();
}


////////////////////////
//
// DEFINE THE MOUSE BUTTONS
//
void DefineMouseBtns(void)
{
 CustomCtrls mouseallowed={0,1,1,1};
 EnterCtrlData(2,&mouseallowed,DrawCustMouse,PrintCustMouse,MOUSE);
}


////////////////////////
//
// DEFINE THE JOYSTICK BUTTONS
//
void DefineJoyBtns(void)
{
 CustomCtrls joyallowed={1,1,1,1};
 EnterCtrlData(5,&joyallowed,DrawCustJoy,PrintCustJoy,JOYSTICK);
}


////////////////////////
//
// DEFINE THE KEYBOARD BUTTONS
//
void DefineKeyBtns(void)
{
 CustomCtrls keyallowed={1,1,1,1};
 EnterCtrlData(8,&keyallowed,DrawCustKeybd,PrintCustKeybd,KEYBOARDBTNS);
}


////////////////////////
//
// DEFINE THE KEYBOARD BUTTONS
//
void DefineKeyMove(void)
{
	CustomCtrls keyallowed={1,1,1,1};
	EnterCtrlData(10,&keyallowed,DrawCustKeys,PrintCustKeys,KEYBOARDMOVE);
}


////////////////////////
//
// ENTER CONTROL DATA FOR ANY TYPE OF CONTROL
//
enum {FWRD,RIGHT,BKWD,LEFT};
int moveorder[4]={LEFT,RIGHT,FWRD,BKWD};

void EnterCtrlData(int index,CustomCtrls *cust,void (*DrawRtn)(int),void (*PrintRtn)(int),int type)
{
 int j,exit,tick,redraw,which,x,picked;
 ControlInfo ci;


 ShootSnd();
 PrintY=CST_Y+13*index;
 IN_ClearKeysDown();
 exit=0;
 redraw=1;
 //
 // FIND FIRST SPOT IN ALLOWED ARRAY
 //
 for (j=0;j<4;j++)
   if (cust->allowed[j])
   {
	which=j;
	break;
   }

 do
 {
  if (redraw)
  {
   x=CST_START+CST_SPC*which;
   DrawWindow(5,PrintY-1,310,13,BKGDCOLOR);

   DrawRtn(1);
   DrawWindow(x-2,PrintY,CST_SPC,11,TEXTCOLOR);
   DrawOutline(x-2,PrintY,CST_SPC,11,0,HIGHLIGHT);
   SETFONTCOLOR(0,TEXTCOLOR);
   PrintRtn(which);
   PrintX=x;
   SETFONTCOLOR(TEXTCOLOR,BKGDCOLOR);
   VW_UpdateScreen();
   WaitKeyUp();
   redraw=0;
  }

  ReadAnyControl(&ci);

  if (type==MOUSE || type==JOYSTICK)
	if (IN_KeyDown(sc_Enter)||IN_KeyDown(sc_Control)||IN_KeyDown(sc_Alt))
	{
	 IN_ClearKeysDown();
	 ci.button0=ci.button1=false;
	}

  //
  // CHANGE BUTTON VALUE?
  //
  if ((ci.button0|ci.button1|ci.button2|ci.button3)||
	  ((type==KEYBOARDBTNS||type==KEYBOARDMOVE) && LastScan==sc_Enter))
  {
   tick=TimeCount=picked=0;
   SETFONTCOLOR(0,TEXTCOLOR);

   do
   {
	int button,result=0;


	if (type==KEYBOARDBTNS||type==KEYBOARDMOVE)
	  IN_ClearKeysDown();

	//
	// FLASH CURSOR
	//
	if (TimeCount>10)
	{
	 switch(tick)
	 {
	  case 0:
	VWB_Bar(x,PrintY+1,CST_SPC-2,10,TEXTCOLOR);
	break;
	  case 1:
	PrintX=x;
	US_Print("?");
	SD_PlaySound(HITWALLSND);
	 }
	 tick^=1;
	 TimeCount=0;
	 VW_UpdateScreen();
	}

	//
	// WHICH TYPE OF INPUT DO WE PROCESS?
	//
	switch(type)
	{
	 case MOUSE:
	   Mouse(3);
	   button=_BX;
	   switch(button)
	   {
	case 1: result=1; break;
	case 2: result=2; break;
	case 4: result=3; break;
	   }

	   if (result)
	   {
	int z;


	for (z=0;z<4;z++)
	  if (order[which]==buttonmouse[z])
	  {
	   buttonmouse[z]=bt_nobutton;
	   break;
	  }

	buttonmouse[result-1]=order[which];
	picked=1;
	SD_PlaySound(SHOOTDOORSND);
	   }
	   break;

	 case JOYSTICK:
	   if (ci.button0) result=1;
	   else
	   if (ci.button1) result=2;
	   else
	   if (ci.button2) result=3;
	   else
	   if (ci.button3) result=4;

	   if (result)
	   {
	int z;


	for (z=0;z<4;z++)
	  if (order[which]==buttonjoy[z])
	  {
	   buttonjoy[z]=bt_nobutton;
	   break;
	  }

	buttonjoy[result-1]=order[which];
	picked=1;
	SD_PlaySound(SHOOTDOORSND);
	   }
	   break;

	 case KEYBOARDBTNS:
	   if (LastScan)
	   {
	buttonscan[order[which]]=LastScan;
	picked=1;
	ShootSnd();
	IN_ClearKeysDown();
	   }
	   break;

	 case KEYBOARDMOVE:
	   if (LastScan)
	   {
	dirscan[moveorder[which]]=LastScan;
	picked=1;
	ShootSnd();
	IN_ClearKeysDown();
	   }
	   break;
	}

	//
	// EXIT INPUT?
	//
	if (IN_KeyDown(sc_Escape))
	{
	 picked=1;
	 continue;
	}

   } while(!picked);

   SETFONTCOLOR(TEXTCOLOR,BKGDCOLOR);
   redraw=1;
   WaitKeyUp();
   continue;
  }

  if (ci.button1 || IN_KeyDown(sc_Escape))
	exit=1;

  //
  // MOVE TO ANOTHER SPOT?
  //
  switch(ci.dir)
  {
   case dir_West:
	 do
	 {
	  which--;
	  if (which<0)
	which=3;
	 } while(!cust->allowed[which]);
	 redraw=1;
	 SD_PlaySound(MOVEGUN1SND);
	 while(ReadAnyControl(&ci),ci.dir!=dir_None);
	 IN_ClearKeysDown();
	 break;

   case dir_East:
	 do
	 {
	  which++;
	  if (which>3)
	which=0;
	 } while(!cust->allowed[which]);
	 redraw=1;
	 SD_PlaySound(MOVEGUN1SND);
	 while(ReadAnyControl(&ci),ci.dir!=dir_None);
	 IN_ClearKeysDown();
	 break;
   case dir_North:
   case dir_South:
	 exit=1;
  }
 } while(!exit);

 SD_PlaySound(ESCPRESSEDSND);
 WaitKeyUp();
 DrawWindow(5,PrintY-1,310,13,BKGDCOLOR);
}


////////////////////////
//
// FIXUP GUN CURSOR OVERDRAW SHIT
//
void FixupCustom(int w)
{
	static int lastwhich=-1;
	int y=CST_Y+26+w*13;


	VWB_Hlin(7,32,y-1,DEACTIVE);
	VWB_Hlin(7,32,y+12,BORD2COLOR);
#ifndef SPEAR
	VWB_Hlin(7,32,y-2,BORDCOLOR);
	VWB_Hlin(7,32,y+13,BORDCOLOR);
#else
	VWB_Hlin(7,32,y-2,BORD2COLOR);
	VWB_Hlin(7,32,y+13,BORD2COLOR);
#endif

	switch(w)
	{
		case 0: DrawCustMouse(1); break;
		case 3: DrawCustJoy(1); break;
		case 6: DrawCustKeybd(1); break;
		case 8: DrawCustKeys(1);
	}


	if (lastwhich>=0)
	{
		y=CST_Y+26+lastwhich*13;
		VWB_Hlin(7,32,y-1,DEACTIVE);
		VWB_Hlin(7,32,y+12,BORD2COLOR);
#ifndef SPEAR
		VWB_Hlin(7,32,y-2,BORDCOLOR);
		VWB_Hlin(7,32,y+13,BORDCOLOR);
#else
		VWB_Hlin(7,32,y-2,BORD2COLOR);
		VWB_Hlin(7,32,y+13,BORD2COLOR);
#endif

		if (lastwhich!=w)
			switch(lastwhich)
			{
				case 0: DrawCustMouse(0); break;
				case 3: DrawCustJoy(0); break;
				case 6: DrawCustKeybd(0); break;
				case 8: DrawCustKeys(0);
			}
	}

	lastwhich=w;
}


////////////////////////
//
// DRAW CUSTOMIZE SCREEN
//
void DrawCustomScreen(void)
{
	int i;


#ifdef JAPAN
	CA_CacheScreen(S_CUSTOMPIC);
	fontnumber=1;

	PrintX=CST_START;
	PrintY = CST_Y+26;
	DrawCustMouse(0);

	PrintX=CST_START;
	US_Print("\n\n\n");
	DrawCustJoy(0);

	PrintX=CST_START;
	US_Print("\n\n\n");
	DrawCustKeybd(0);

	PrintX=CST_START;
	US_Print("\n\n\n");
	DrawCustKeys(0);
#else
	ClearMScreen();
	WindowX=0;
	WindowW=320;
	VWB_DrawPic(112,184,C_MOUSELBACKPIC);
	DrawStripes(10);
	VWB_DrawPic(80,0,C_CUSTOMIZEPIC);

	//
	// MOUSE
	//
	SETFONTCOLOR(READCOLOR,BKGDCOLOR);
	WindowX=0;
	WindowW=320;

#ifndef SPEAR
	PrintY=CST_Y;
	US_CPrint("Mouse\n");
#else
	PrintY = CST_Y+13;
	VWB_DrawPic (128,48,C_MOUSEPIC);
#endif

	SETFONTCOLOR(TEXTCOLOR,BKGDCOLOR);
	#ifdef SPANISH
	PrintX=CST_START-16;
	US_Print(STR_CRUN);
	PrintX=CST_START-16+CST_SPC*1;
	US_Print(STR_COPEN);
	PrintX=CST_START-16+CST_SPC*2;
	US_Print(STR_CFIRE);
	PrintX=CST_START-16+CST_SPC*3;
	US_Print(STR_CSTRAFE"\n");
	#else
	PrintX=CST_START;
	US_Print(STR_CRUN);
	PrintX=CST_START+CST_SPC*1;
	US_Print(STR_COPEN);
	PrintX=CST_START+CST_SPC*2;
	US_Print(STR_CFIRE);
	PrintX=CST_START+CST_SPC*3;
	US_Print(STR_CSTRAFE"\n");
	#endif

	DrawWindow(5,PrintY-1,310,13,BKGDCOLOR);
	DrawCustMouse(0);
	US_Print("\n");


	//
	// JOYSTICK/PAD
	//
#ifndef SPEAR
	SETFONTCOLOR(READCOLOR,BKGDCOLOR);
	US_CPrint("Joystick/Gravis GamePad\n");
#else
	PrintY += 13;
	VWB_DrawPic (40,88,C_JOYSTICKPIC);
#endif

#ifdef SPEAR
	VWB_DrawPic (112,120,C_KEYBOARDPIC);
#endif

	SETFONTCOLOR(TEXTCOLOR,BKGDCOLOR);
	#ifdef SPANISH
	PrintX=CST_START-16;
	US_Print(STR_CRUN);
	PrintX=CST_START-16+CST_SPC*1;
	US_Print(STR_COPEN);
	PrintX=CST_START-16+CST_SPC*2;
	US_Print(STR_CFIRE);
	PrintX=CST_START-16+CST_SPC*3;
	US_Print(STR_CSTRAFE"\n");
	#else
	PrintX=CST_START;
	US_Print(STR_CRUN);
	PrintX=CST_START+CST_SPC*1;
	US_Print(STR_COPEN);
	PrintX=CST_START+CST_SPC*2;
	US_Print(STR_CFIRE);
	PrintX=CST_START+CST_SPC*3;
	US_Print(STR_CSTRAFE"\n");
	#endif
	DrawWindow(5,PrintY-1,310,13,BKGDCOLOR);
	DrawCustJoy(0);
	US_Print("\n");


	//
	// KEYBOARD
	//
#ifndef SPEAR
	SETFONTCOLOR(READCOLOR,BKGDCOLOR);
	US_CPrint("Keyboard\n");
#else
	PrintY += 13;
#endif
	SETFONTCOLOR(TEXTCOLOR,BKGDCOLOR);
	#ifdef SPANISH
	PrintX=CST_START-16;
	US_Print(STR_CRUN);
	PrintX=CST_START-16+CST_SPC*1;
	US_Print(STR_COPEN);
	PrintX=CST_START-16+CST_SPC*2;
	US_Print(STR_CFIRE);
	PrintX=CST_START-16+CST_SPC*3;
	US_Print(STR_CSTRAFE"\n");
	#else
	PrintX=CST_START;
	US_Print(STR_CRUN);
	PrintX=CST_START+CST_SPC*1;
	US_Print(STR_COPEN);
	PrintX=CST_START+CST_SPC*2;
	US_Print(STR_CFIRE);
	PrintX=CST_START+CST_SPC*3;
	US_Print(STR_CSTRAFE"\n");
	#endif
	DrawWindow(5,PrintY-1,310,13,BKGDCOLOR);
	DrawCustKeybd(0);
	US_Print("\n");


	//
	// KEYBOARD MOVE KEYS
	//
	SETFONTCOLOR(TEXTCOLOR,BKGDCOLOR);
	#ifdef SPANISH
	PrintX=4;
	US_Print(STR_LEFT);
	US_Print("/");
	US_Print(STR_RIGHT);
	US_Print("/");
	US_Print(STR_FRWD);
	US_Print("/");
	US_Print(STR_BKWD"\n");
	#else
	PrintX=CST_START;
	US_Print(STR_LEFT);
	PrintX=CST_START+CST_SPC*1;
	US_Print(STR_RIGHT);
	PrintX=CST_START+CST_SPC*2;
	US_Print(STR_FRWD);
	PrintX=CST_START+CST_SPC*3;
	US_Print(STR_BKWD"\n");
	#endif
	DrawWindow(5,PrintY-1,310,13,BKGDCOLOR);
	DrawCustKeys(0);
#endif
	//
	// PICK STARTING POINT IN MENU
	//
	if (CusItems.curpos<0)
		for (i=0;i<CusItems.amount;i++)
			if (CusMenu[i].active)
			{
				CusItems.curpos=i;
				break;
			}


	VW_UpdateScreen();
	MenuFadeIn();
}


void PrintCustMouse(int i)
{
	int j;

	for (j=0;j<4;j++)
		if (order[i]==buttonmouse[j])
		{
			PrintX=CST_START+CST_SPC*i;
			US_Print(mbarray[j]);
			break;
		}
}

void DrawCustMouse(int hilight)
{
	int i,color;


	color=TEXTCOLOR;
	if (hilight)
		color=HIGHLIGHT;
	SETFONTCOLOR(color,BKGDCOLOR);

	if (!mouseenabled)
	{
		SETFONTCOLOR(DEACTIVE,BKGDCOLOR);
		CusMenu[0].active=0;
	}
	else
		CusMenu[0].active=1;

	PrintY=CST_Y+13*2;
	for (i=0;i<4;i++)
		PrintCustMouse(i);
}

void PrintCustJoy(int i)
{
	int j;

	for (j=0;j<4;j++)
		if (order[i]==buttonjoy[j])
		{
			PrintX=CST_START+CST_SPC*i;
			US_Print(mbarray[j]);
			break;
		}
}

void DrawCustJoy(int hilight)
{
	int i,color;


	color=TEXTCOLOR;
	if (hilight)
		color=HIGHLIGHT;
	SETFONTCOLOR(color,BKGDCOLOR);

	if (!joystickenabled)
	{
		SETFONTCOLOR(DEACTIVE,BKGDCOLOR);
		CusMenu[3].active=0;
	}
	else
		CusMenu[3].active=1;

	PrintY=CST_Y+13*5;
	for (i=0;i<4;i++)
		PrintCustJoy(i);
}


void PrintCustKeybd(int i)
{
	PrintX=CST_START+CST_SPC*i;
	US_Print(IN_GetScanName(buttonscan[order[i]]));
}

void DrawCustKeybd(int hilight)
{
	int i,color;


	color=TEXTCOLOR;
	if (hilight)
		color=HIGHLIGHT;
	SETFONTCOLOR(color,BKGDCOLOR);

	PrintY=CST_Y+13*8;
	for (i=0;i<4;i++)
		PrintCustKeybd(i);
}

void PrintCustKeys(int i)
{
	PrintX=CST_START+CST_SPC*i;
	US_Print(IN_GetScanName(dirscan[moveorder[i]]));
}

void DrawCustKeys(int hilight)
{
	int i,color;


	color=TEXTCOLOR;
	if (hilight)
		color=HIGHLIGHT;
	SETFONTCOLOR(color,BKGDCOLOR);

	PrintY=CST_Y+13*10;
	for (i=0;i<4;i++)
		PrintCustKeys(i);
}


////////////////////////////////////////////////////////////////////
//
// CHANGE SCREEN VIEWING SIZE
//
////////////////////////////////////////////////////////////////////
void CP_ChangeView(void)
{
	int exit=0,oldview,newview;
	ControlInfo ci;


	WindowX=WindowY=0;
	WindowW=320;
	WindowH=200;
	newview=oldview=viewwidth/16;
	DrawChangeView(oldview);

	do
	{
		CheckPause();
		ReadAnyControl(&ci);
		switch(ci.dir)
		{
		case dir_South:
		case dir_West:
			newview--;
			if (newview<4)
				newview=4;
			ShowViewSize(newview);
			VW_UpdateScreen();
			SD_PlaySound(HITWALLSND);
			TicDelay(10);
			break;

		case dir_North:
		case dir_East:
			newview++;
			if (newview>19)
				newview=19;
			ShowViewSize(newview);
			VW_UpdateScreen();
			SD_PlaySound(HITWALLSND);
			TicDelay(10);
			break;
		}

		#ifndef SPEAR
		if (Keyboard[sc_Tab] && Keyboard[sc_P] && MS_CheckParm("goobers"))
		#else
		if (Keyboard[sc_Tab] && Keyboard[sc_P] && MS_CheckParm("debugmode"))
		#endif
			PicturePause();

		if (ci.button0 || Keyboard[sc_Enter])
			exit=1;
		else
		if (ci.button1 || Keyboard[sc_Escape])
		{
			viewwidth=oldview*16;
			SD_PlaySound(ESCPRESSEDSND);
			MenuFadeOut();
			return;
		}

	} while(!exit);


	if (oldview!=newview)
	{
		SD_PlaySound (SHOOTSND);
		Message(STR_THINK"...");
		NewViewSize(newview);
	}

	ShootSnd();
	MenuFadeOut();
}


/////////////////////////////
//
// DRAW THE CHANGEVIEW SCREEN
//
void DrawChangeView(int view)
{
#ifdef JAPAN
	CA_CacheScreen(S_CHANGEPIC);

	ShowViewSize(view);
#else
	VWB_Bar(0,160,320,40,VIEWCOLOR);
	ShowViewSize(view);

	PrintY=161;
	WindowX=0;
	WindowY=320;
	SETFONTCOLOR(HIGHLIGHT,BKGDCOLOR);

	US_CPrint(STR_SIZE1"\n");
	US_CPrint(STR_SIZE2"\n");
	US_CPrint(STR_SIZE3);
#endif
	VW_UpdateScreen();

	MenuFadeIn();
}


////////////////////////////////////////////////////////////////////
//
// QUIT THIS INFERNAL GAME!
//
////////////////////////////////////////////////////////////////////
void CP_Quit(void)
{
	int i;


	#ifdef JAPAN
	if (GetYorN(7,11,C_QUITMSGPIC))
	#else

	#ifdef SPANISH
	if (Confirm(ENDGAMESTR))
	#else
	if (Confirm(endStrings[US_RndT()&0x7+(US_RndT()&1)]))
	#endif

	#endif
	{
		VW_UpdateScreen();
		SD_MusicOff();
		SD_StopSound();
		MenuFadeOut();
		//
		// SHUT-UP THE ADLIB
		//
		for (i=1;i<=0xf5;i++)
			alOut(i,0);
		Quit(NULL);
	}

	DrawMainMenu();
}


////////////////////////////////////////////////////////////////////
//
// HANDLE INTRO SCREEN (SYSTEM CONFIG)
//
////////////////////////////////////////////////////////////////////
void IntroScreen(void)
{
#ifdef SPEAR

#define MAINCOLOR	0x4f
#define EMSCOLOR	0x4f
#define XMSCOLOR	0x4f

#else

#define MAINCOLOR	0x6c
#define EMSCOLOR	0x6c
#define XMSCOLOR	0x6c

#endif
#define FILLCOLOR	14

	long memory,emshere,xmshere;
	int i,num,ems[10]={100,200,300,400,500,600,700,800,900,1000},
		xms[10]={100,200,300,400,500,600,700,800,900,1000},
		main[10]={32,64,96,128,160,192,224,256,288,320};


	//
	// DRAW MAIN MEMORY
	//
	memory=(1023l+mminfo.nearheap+mminfo.farheap)/1024l;
	for (i=0;i<10;i++)
		if (memory>=main[i])
			VWB_Bar(49,163-8*i,6,5,MAINCOLOR-i);


	//
	// DRAW EMS MEMORY
	//
	if (EMSPresent)
	{
		emshere=4l*EMSPagesAvail;
		for (i=0;i<10;i++)
			if (emshere>=ems[i])
				VWB_Bar(89,163-8*i,6,5,EMSCOLOR-i);
	}

	//
	// DRAW XMS MEMORY
	//
	if (XMSPresent)
	{
		xmshere=4l*XMSPagesAvail;
		for (i=0;i<10;i++)
			if (xmshere>=xms[i])
				VWB_Bar(129,163-8*i,6,5,XMSCOLOR-i);
	}

	//
	// FILL BOXES
	//
	if (MousePresent)
		VWB_Bar(164,82,12,2,FILLCOLOR);

	if (JoysPresent[0] || JoysPresent[1])
		VWB_Bar(164,105,12,2,FILLCOLOR);

	if (AdLibPresent && !SoundBlasterPresent)
		VWB_Bar(164,128,12,2,FILLCOLOR);

	if (SoundBlasterPresent)
		VWB_Bar(164,151,12,2,FILLCOLOR);

	if (SoundSourcePresent)
		VWB_Bar(164,174,12,2,FILLCOLOR);
}


////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
//
// SUPPORT ROUTINES
//
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
//
// Clear Menu screens to dark red
//
////////////////////////////////////////////////////////////////////
void ClearMScreen(void)
{
#ifndef SPEAR
	VWB_Bar(0,0,320,200,BORDCOLOR);
#else
	VWB_DrawPic(0,0,C_BACKDROPPIC);
#endif
}


////////////////////////////////////////////////////////////////////
//
// Un/Cache a LUMP of graphics
//
////////////////////////////////////////////////////////////////////
void CacheLump(int lumpstart,int lumpend)
{
 int i;

 for (i=lumpstart;i<=lumpend;i++)
   CA_CacheGrChunk(i);
}


void UnCacheLump(int lumpstart,int lumpend)
{
 int i;

 for (i=lumpstart;i<=lumpend;i++)
	if (grsegs[i])
		UNCACHEGRCHUNK(i);
}


////////////////////////////////////////////////////////////////////
//
// Draw a window for a menu
//
////////////////////////////////////////////////////////////////////
void DrawWindow(int x,int y,int w,int h,int wcolor)
{
	VWB_Bar(x,y,w,h,wcolor);
	DrawOutline(x,y,w,h,BORD2COLOR,DEACTIVE);
}


void DrawOutline(int x,int y,int w,int h,int color1,int color2)
{
	VWB_Hlin(x,x+w,y,color2);
	VWB_Vlin(y,y+h,x,color2);
	VWB_Hlin(x,x+w,y+h,color1);
	VWB_Vlin(y,y+h,x+w,color1);
}


////////////////////////////////////////////////////////////////////
//
// Setup Control Panel stuff - graphics, etc.
//
////////////////////////////////////////////////////////////////////
void SetupControlPanel(void)
{
	struct ffblk f;
	char name[13];
	int which,i;


	//
	// CACHE GRAPHICS & SOUNDS
	//
	CA_CacheGrChunk(STARTFONT+1);
#ifndef SPEAR
	CacheLump(CONTROLS_LUMP_START,CONTROLS_LUMP_END);
#else
	CacheLump(BACKDROP_LUMP_START,BACKDROP_LUMP_END);
#endif

	SETFONTCOLOR(TEXTCOLOR,BKGDCOLOR);
	fontnumber=1;
	WindowH=200;

	if (!ingame)
		CA_LoadAllSounds();
	else
		MainMenu[savegame].active=1;

	//
	// SEE WHICH SAVE GAME FILES ARE AVAILABLE & READ STRING IN
	//
	strcpy(name,SaveName);
	if (!findfirst(name,&f,0))
		do
		{
			which=f.ff_name[7]-'0';
			if (which<10)
			{
				int handle;
				char temp[32];

				SaveGamesAvail[which]=1;
				handle=open(f.ff_name,O_BINARY);
				read(handle,temp,32);
				close(handle);
				strcpy(&SaveGameNames[which][0],temp);
			}
		} while(!findnext(&f));

	//
	// CENTER MOUSE
	//
	_CX=_DX=CENTER;
	Mouse(4);
}


////////////////////////////////////////////////////////////////////
//
// Clean up all the Control Panel stuff
//
////////////////////////////////////////////////////////////////////
void CleanupControlPanel(void)
{
#ifndef SPEAR
	UnCacheLump(CONTROLS_LUMP_START,CONTROLS_LUMP_END);
#else
	UnCacheLump (BACKDROP_LUMP_START,BACKDROP_LUMP_END);
#endif

	fontnumber = 0;
}


////////////////////////////////////////////////////////////////////
//
// Handle moving gun around a menu
//
////////////////////////////////////////////////////////////////////
int HandleMenu(CP_iteminfo *item_i,CP_itemtype far *items,void (*routine)(int w))
{
	char key;
	static int redrawitem=1,lastitem=-1;
	int i,x,y,basey,exit,which,shape,timer;
	ControlInfo ci;


	which=item_i->curpos;
	x=item_i->x&-8;
	basey=item_i->y-2;
	y=basey+which*13;

	VWB_DrawPic(x,y,C_CURSOR1PIC);
	SetTextColor(items+which,1);
	if (redrawitem)
	{
		PrintX=item_i->x+item_i->indent;
		PrintY=item_i->y+which*13;
		US_Print((items+which)->string);
	}
	//
	// CALL CUSTOM ROUTINE IF IT IS NEEDED
	//
	if (routine)
		routine(which);
	VW_UpdateScreen();

	shape=C_CURSOR1PIC;
	timer=8;
	exit=0;
	TimeCount=0;
	IN_ClearKeysDown();


	do
	{
		//
		// CHANGE GUN SHAPE
		//
		if (TimeCount>timer)
		{
			TimeCount=0;
			if (shape==C_CURSOR1PIC)
			{
				shape=C_CURSOR2PIC;
				timer=8;
			}
			else
			{
				shape=C_CURSOR1PIC;
				timer=70;
			}
			VWB_DrawPic(x,y,shape);
			if (routine)
				routine(which);
			VW_UpdateScreen();
		}

		CheckPause();

		//
		// SEE IF ANY KEYS ARE PRESSED FOR INITIAL CHAR FINDING
		//
		key=LastASCII;
		if (key)
		{
			int ok=0;

			//
			// CHECK FOR SCREEN CAPTURE
			//
			#ifndef SPEAR
			if (Keyboard[sc_Tab] && Keyboard[sc_P] && MS_CheckParm("goobers"))
			#else
			if (Keyboard[sc_Tab] && Keyboard[sc_P] && MS_CheckParm("debugmode"))
			#endif
				PicturePause();


			if (key>='a')
				key-='a'-'A';

			for (i=which+1;i<item_i->amount;i++)
				if ((items+i)->active && (items+i)->string[0]==key)
				{
					EraseGun(item_i,items,x,y,which);
					which=i;
					DrawGun(item_i,items,x,&y,which,basey,routine);
					ok=1;
					IN_ClearKeysDown();
					break;
				}

			//
			// DIDN'T FIND A MATCH FIRST TIME THRU. CHECK AGAIN.
			//
			if (!ok)
			{
				for (i=0;i<which;i++)
					if ((items+i)->active && (items+i)->string[0]==key)
					{
						EraseGun(item_i,items,x,y,which);
						which=i;
						DrawGun(item_i,items,x,&y,which,basey,routine);
						IN_ClearKeysDown();
						break;
					}
			}
		}

		//
		// GET INPUT
		//
		ReadAnyControl(&ci);
		switch(ci.dir)
		{
			////////////////////////////////////////////////
			//
			// MOVE UP
			//
			case dir_North:

			EraseGun(item_i,items,x,y,which);

			//
			// ANIMATE HALF-STEP
			//
			if (which && (items+which-1)->active)
			{
				y-=6;
				DrawHalfStep(x,y);
			}

			//
			// MOVE TO NEXT AVAILABLE SPOT
			//
			do
			{
				if (!which)
					which=item_i->amount-1;
				else
					which--;
			} while(!(items+which)->active);

			DrawGun(item_i,items,x,&y,which,basey,routine);
			//
			// WAIT FOR BUTTON-UP OR DELAY NEXT MOVE
			//
			TicDelay(20);
			break;

			////////////////////////////////////////////////
			//
			// MOVE DOWN
			//
			case dir_South:

			EraseGun(item_i,items,x,y,which);
			//
			// ANIMATE HALF-STEP
			//
			if (which!=item_i->amount-1 && (items+which+1)->active)
			{
				y+=6;
				DrawHalfStep(x,y);
			}

			do
			{
				if (which==item_i->amount-1)
					which=0;
				else
					which++;
			} while(!(items+which)->active);

			DrawGun(item_i,items,x,&y,which,basey,routine);

			//
			// WAIT FOR BUTTON-UP OR DELAY NEXT MOVE
			//
			TicDelay(20);
			break;
		}

		if (ci.button0 ||
			Keyboard[sc_Space] ||
			Keyboard[sc_Enter])
				exit=1;

		if (ci.button1 ||
			Keyboard[sc_Escape])
				exit=2;

	} while(!exit);


	IN_ClearKeysDown();

	//
	// ERASE EVERYTHING
	//
	if (lastitem!=which)
	{
		VWB_Bar(x-1,y,25,16,BKGDCOLOR);
		PrintX=item_i->x+item_i->indent;
		PrintY=item_i->y+which*13;
		US_Print((items+which)->string);
		redrawitem=1;
	}
	else
		redrawitem=0;

	if (routine)
		routine(which);
	VW_UpdateScreen();

	item_i->curpos=which;

	lastitem=which;
	switch(exit)
	{
		case 1:
			//
			// CALL THE ROUTINE
			//
			if ((items+which)->routine!=NULL)
			{
				ShootSnd();
				MenuFadeOut();
				(items+which)->routine(0);
			}
			return which;

		case 2:
			SD_PlaySound(ESCPRESSEDSND);
			return -1;
	}

	return 0; // JUST TO SHUT UP THE ERROR MESSAGES!
}


//
// ERASE GUN & DE-HIGHLIGHT STRING
//
void EraseGun(CP_iteminfo *item_i,CP_itemtype far *items,int x,int y,int which)
{
	VWB_Bar(x-1,y,25,16,BKGDCOLOR);
	SetTextColor(items+which,0);

	PrintX=item_i->x+item_i->indent;
	PrintY=item_i->y+which*13;
	US_Print((items+which)->string);
	VW_UpdateScreen();
}


//
// DRAW HALF STEP OF GUN TO NEXT POSITION
//
void DrawHalfStep(int x,int y)
{
	VWB_DrawPic(x,y,C_CURSOR1PIC);
	VW_UpdateScreen();
	SD_PlaySound(MOVEGUN1SND);
	TimeCount=0;
	while(TimeCount<8);
}


//
// DRAW GUN AT NEW POSITION
//
void DrawGun(CP_iteminfo *item_i,CP_itemtype far *items,int x,int *y,int which,int basey,void (*routine)(int w))
{
	VWB_Bar(x-1,*y,25,16,BKGDCOLOR);
	*y=basey+which*13;
	VWB_DrawPic(x,*y,C_CURSOR1PIC);
	SetTextColor(items+which,1);

	PrintX=item_i->x+item_i->indent;
	PrintY=item_i->y+which*13;
	US_Print((items+which)->string);

	//
	// CALL CUSTOM ROUTINE IF IT IS NEEDED
	//
	if (routine)
		routine(which);
	VW_UpdateScreen();
	SD_PlaySound(MOVEGUN2SND);
}

////////////////////////////////////////////////////////////////////
//
// DELAY FOR AN AMOUNT OF TICS OR UNTIL CONTROLS ARE INACTIVE
//
////////////////////////////////////////////////////////////////////
void TicDelay(int count)
{
	ControlInfo ci;


	TimeCount=0;
	do
	{
		ReadAnyControl(&ci);
	} while(TimeCount<count && ci.dir!=dir_None);
}


////////////////////////////////////////////////////////////////////
//
// Draw a menu
//
////////////////////////////////////////////////////////////////////
void DrawMenu(CP_iteminfo *item_i,CP_itemtype far *items)
{
	int i,which=item_i->curpos;


	WindowX=PrintX=item_i->x+item_i->indent;
	WindowY=PrintY=item_i->y;
	WindowW=320;
	WindowH=200;

	for (i=0;i<item_i->amount;i++)
	{
		SetTextColor(items+i,which==i);

		PrintY=item_i->y+i*13;
		if ((items+i)->active)
			US_Print((items+i)->string);
		else
		{
			SETFONTCOLOR(DEACTIVE,BKGDCOLOR);
			US_Print((items+i)->string);
			SETFONTCOLOR(TEXTCOLOR,BKGDCOLOR);
		}

		US_Print("\n");
	}
}


////////////////////////////////////////////////////////////////////
//
// SET TEXT COLOR (HIGHLIGHT OR NO)
//
////////////////////////////////////////////////////////////////////
void SetTextColor(CP_itemtype far *items,int hlight)
{
	if (hlight)
		{SETFONTCOLOR(color_hlite[items->active],BKGDCOLOR);}
	else
		{SETFONTCOLOR(color_norml[items->active],BKGDCOLOR);}
}


////////////////////////////////////////////////////////////////////
//
// WAIT FOR CTRLKEY-UP OR BUTTON-UP
//
////////////////////////////////////////////////////////////////////
void WaitKeyUp(void)
{
	ControlInfo ci;
	while(ReadAnyControl(&ci),	ci.button0|
								ci.button1|
								ci.button2|
								ci.button3|
								Keyboard[sc_Space]|
								Keyboard[sc_Enter]|
								Keyboard[sc_Escape]);
}


////////////////////////////////////////////////////////////////////
//
// READ KEYBOARD, JOYSTICK AND MOUSE FOR INPUT
//
////////////////////////////////////////////////////////////////////
void ReadAnyControl(ControlInfo *ci)
{
	int mouseactive=0;


	IN_ReadControl(0,ci);

	if (mouseenabled)
	{
		int mousey,mousex;


		// READ MOUSE MOTION COUNTERS
		// RETURN DIRECTION
		// HOME MOUSE
		// CHECK MOUSE BUTTONS

		Mouse(3);
		mousex=_CX;
		mousey=_DX;

		if (mousey<CENTER-SENSITIVE)
		{
			ci->dir=dir_North;
			_CX=_DX=CENTER;
			Mouse(4);
			mouseactive=1;
		}
		else
		if (mousey>CENTER+SENSITIVE)
		{
			ci->dir=dir_South;
			_CX=_DX=CENTER;
			Mouse(4);
			mouseactive=1;
		}

		if (mousex<CENTER-SENSITIVE)
		{
			ci->dir=dir_West;
			_CX=_DX=CENTER;
			Mouse(4);
			mouseactive=1;
		}
		else
		if (mousex>CENTER+SENSITIVE)
		{
			ci->dir=dir_East;
			_CX=_DX=CENTER;
			Mouse(4);
			mouseactive=1;
		}

		if (IN_MouseButtons())
		{
			ci->button0=IN_MouseButtons()&1;
			ci->button1=IN_MouseButtons()&2;
			ci->button2=IN_MouseButtons()&4;
			ci->button3=false;
			mouseactive=1;
		}
	}

	if (joystickenabled && !mouseactive)
	{
		int jx,jy,jb;


		INL_GetJoyDelta(joystickport,&jx,&jy);
		if (jy<-SENSITIVE)
			ci->dir=dir_North;
		else
		if (jy>SENSITIVE)
			ci->dir=dir_South;

		if (jx<-SENSITIVE)
			ci->dir=dir_West;
		else
		if (jx>SENSITIVE)
			ci->dir=dir_East;

		jb=IN_JoyButtons();
		if (jb)
		{
			ci->button0=jb&1;
			ci->button1=jb&2;
			if (joypadenabled)
			{
				ci->button2=jb&4;
				ci->button3=jb&8;
			}
			else
				ci->button2=ci->button3=false;
		}
	}
}


////////////////////////////////////////////////////////////////////
//
// DRAW DIALOG AND CONFIRM YES OR NO TO QUESTION
//
////////////////////////////////////////////////////////////////////
int Confirm(char far *string)
{
	int xit=0,i,x,y,tick=0,time,whichsnd[2]={ESCPRESSEDSND,SHOOTSND};


	Message(string);
	IN_ClearKeysDown();

	//
	// BLINK CURSOR
	//
	x=PrintX;
	y=PrintY;
	TimeCount=0;

	do
	{
		if (TimeCount>=10)
		{
			switch(tick)
			{
				case 0:
					VWB_Bar(x,y,8,13,TEXTCOLOR);
					break;
				case 1:
					PrintX=x;
					PrintY=y;
					US_Print("_");
			}
			VW_UpdateScreen();
			tick^=1;
			TimeCount=0;
		}

		#ifndef SPEAR
		if (Keyboard[sc_Tab] && Keyboard[sc_P] && MS_CheckParm("goobers"))
			PicturePause();
		#endif

	#ifdef SPANISH
	} while(!Keyboard[sc_S] && !Keyboard[sc_N] && !Keyboard[sc_Escape]);
	#else
	} while(!Keyboard[sc_Y] && !Keyboard[sc_N] && !Keyboard[sc_Escape]);
	#endif

	#ifdef SPANISH
	if (Keyboard[sc_S])
	{
		xit=1;
		ShootSnd();
	}

	while(Keyboard[sc_S] || Keyboard[sc_N] || Keyboard[sc_Escape]);

	#else

	if (Keyboard[sc_Y])
	{
		xit=1;
		ShootSnd();
	}

	while(Keyboard[sc_Y] || Keyboard[sc_N] || Keyboard[sc_Escape]);
	#endif

	IN_ClearKeysDown();
	SD_PlaySound(whichsnd[xit]);
	return xit;
}

#ifdef JAPAN
////////////////////////////////////////////////////////////////////
//
// DRAW MESSAGE & GET Y OR N
//
////////////////////////////////////////////////////////////////////
int GetYorN(int x,int y,int pic)
{
	int xit=0,whichsnd[2]={ESCPRESSEDSND,SHOOTSND};


	CA_CacheGrChunk(pic);
	VWB_DrawPic(x * 8,y * 8,pic);
	UNCACHEGRCHUNK(pic);
	VW_UpdateScreen();
	IN_ClearKeysDown();

	do
	{
		#ifndef SPEAR
		if (Keyboard[sc_Tab] && Keyboard[sc_P] && MS_CheckParm("goobers"))
			PicturePause();
		#endif

	#ifdef SPANISH
	} while(!Keyboard[sc_S] && !Keyboard[sc_N] && !Keyboard[sc_Escape]);
	#else
	} while(!Keyboard[sc_Y] && !Keyboard[sc_N] && !Keyboard[sc_Escape]);
	#endif

	#ifdef SPANISH
	if (Keyboard[sc_S])
	{
		xit=1;
		ShootSnd();
	}

	while(Keyboard[sc_S] || Keyboard[sc_N] || Keyboard[sc_Escape]);

	#else

	if (Keyboard[sc_Y])
	{
		xit=1;
		ShootSnd();
	}

	while(Keyboard[sc_Y] || Keyboard[sc_N] || Keyboard[sc_Escape]);
	#endif

	IN_ClearKeysDown();
	SD_PlaySound(whichsnd[xit]);
	return xit;
}
#endif


////////////////////////////////////////////////////////////////////
//
// PRINT A MESSAGE IN A WINDOW
//
////////////////////////////////////////////////////////////////////
void Message(char far *string)
{
	int h=0,w=0,mw=0,i,x,y,time;
	fontstruct _seg *font;


	CA_CacheGrChunk (STARTFONT+1);
	fontnumber=1;
	font=grsegs[STARTFONT+fontnumber];
	h=font->height;
	for (i=0;i<_fstrlen(string);i++)
		if (string[i]=='\n')
		{
			if (w>mw)
				mw=w;
			w=0;
			h+=font->height;
		}
		else
			w+=font->width[string[i]];

	if (w+10>mw)
		mw=w+10;

	PrintY=(WindowH/2)-h/2;
	PrintX=WindowX=160-mw/2;

	DrawWindow(WindowX-5,PrintY-5,mw+10,h+10,TEXTCOLOR);
	DrawOutline(WindowX-5,PrintY-5,mw+10,h+10,0,HIGHLIGHT);
	SETFONTCOLOR(0,TEXTCOLOR);
	US_Print(string);
	VW_UpdateScreen();
}


////////////////////////////////////////////////////////////////////
//
// THIS MAY BE FIXED A LITTLE LATER...
//
////////////////////////////////////////////////////////////////////
static	int	lastmusic;

void StartCPMusic(int song)
{
	musicnames	chunk;

	if (audiosegs[STARTMUSIC + lastmusic])	// JDC
		MM_FreePtr ((memptr *)&audiosegs[STARTMUSIC + lastmusic]);
	lastmusic = song;

	SD_MusicOff();
	chunk =	song;

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

void FreeMusic (void)
{
	if (audiosegs[STARTMUSIC + lastmusic])	// JDC
		MM_FreePtr ((memptr *)&audiosegs[STARTMUSIC + lastmusic]);
}


///////////////////////////////////////////////////////////////////////////
//
//	IN_GetScanName() - Returns a string containing the name of the
//		specified scan code
//
///////////////////////////////////////////////////////////////////////////
byte *
IN_GetScanName(ScanCode scan)
{
	byte		**p;
	ScanCode	far *s;

	for (s = ExtScanCodes,p = ExtScanNames;*s;p++,s++)
		if (*s == scan)
			return(*p);

	return(ScanNames[scan]);
}


///////////////////////////////////////////////////////////////////////////
//
// CHECK FOR PAUSE KEY (FOR MUSIC ONLY)
//
///////////////////////////////////////////////////////////////////////////
void CheckPause(void)
{
	if (Paused)
	{
		switch(SoundStatus)
		{
			case 0: SD_MusicOn(); break;
			case 1: SD_MusicOff(); break;
		}

		SoundStatus^=1;
		VW_WaitVBL(3);
		IN_ClearKeysDown();
		Paused=false;
 }
}


///////////////////////////////////////////////////////////////////////////
//
// DRAW GUN CURSOR AT CORRECT POSITION IN MENU
//
///////////////////////////////////////////////////////////////////////////
void DrawMenuGun(CP_iteminfo *iteminfo)
{
	int x,y;


	x=iteminfo->x;
	y=iteminfo->y+iteminfo->curpos*13-2;
	VWB_DrawPic(x,y,C_CURSOR1PIC);
}


///////////////////////////////////////////////////////////////////////////
//
// DRAW SCREEN TITLE STRIPES
//
///////////////////////////////////////////////////////////////////////////
void DrawStripes(int y)
{
#ifndef SPEAR
	VWB_Bar(0,y,320,24,0);
	VWB_Hlin(0,319,y+22,STRIPE);
#else
	VWB_Bar(0,y,320,22,0);
	VWB_Hlin(0,319,y+23,0);
#endif
}

void ShootSnd(void)
{
	SD_PlaySound(SHOOTSND);
}


///////////////////////////////////////////////////////////////////////////
//
// CHECK FOR EPISODES
//
///////////////////////////////////////////////////////////////////////////
void CheckForEpisodes(void)
{
	struct ffblk f;

//
// JAPANESE VERSION
//
#ifdef JAPAN
#ifdef JAPDEMO
	if (!findfirst("*.WJ1",&f,FA_ARCH))
	{
		strcpy(extension,"WJ1");
#else
	if (!findfirst("*.WJ6",&f,FA_ARCH))
	{
		strcpy(extension,"WJ6");
#endif
		strcat(configname,extension);
		strcat(SaveName,extension);
		strcat(PageFileName,extension);
		strcat(audioname,extension);
		strcat(demoname,extension);
		EpisodeSelect[1] =
		EpisodeSelect[2] =
		EpisodeSelect[3] =
		EpisodeSelect[4] =
		EpisodeSelect[5] = 1;
	}
	else
		Quit("NO JAPANESE WOLFENSTEIN 3-D DATA FILES to be found!");
#else

//
// ENGLISH
//
#ifndef UPLOAD
#ifndef SPEAR
	if (!findfirst("*.WL6",&f,FA_ARCH))
	{
		strcpy(extension,"WL6");
		NewEmenu[2].active =
		NewEmenu[4].active =
		NewEmenu[6].active =
		NewEmenu[8].active =
		NewEmenu[10].active =
		EpisodeSelect[1] =
		EpisodeSelect[2] =
		EpisodeSelect[3] =
		EpisodeSelect[4] =
		EpisodeSelect[5] = 1;
	}
	else
	if (!findfirst("*.WL3",&f,FA_ARCH))
	{
		strcpy(extension,"WL3");
		NewEmenu[2].active =
		NewEmenu[4].active =
		EpisodeSelect[1] =
		EpisodeSelect[2] = 1;
	}
	else
#endif
#endif



#ifdef SPEAR
#ifndef SPEARDEMO
	if (!findfirst("*.SOD",&f,FA_ARCH))
	{
		strcpy(extension,"SOD");
	}
	else
		Quit("NO SPEAR OF DESTINY DATA FILES TO BE FOUND!");
#else
	if (!findfirst("*.SDM",&f,FA_ARCH))
	{
		strcpy(extension,"SDM");
	}
	else
		Quit("NO SPEAR OF DESTINY DEMO DATA FILES TO BE FOUND!");
#endif

#else
	if (!findfirst("*.WL1",&f,FA_ARCH))
	{
		strcpy(extension,"WL1");
	}
	else
		Quit("NO WOLFENSTEIN 3-D DATA FILES to be found!");
#endif

	strcat(configname,extension);
	strcat(SaveName,extension);
	strcat(PageFileName,extension);
	strcat(audioname,extension);
	strcat(demoname,extension);
#ifndef SPEAR
#ifndef GOODTIMES
	strcat(helpfilename,extension);
#endif
	strcat(endfilename,extension);
#endif
#endif
}
```
