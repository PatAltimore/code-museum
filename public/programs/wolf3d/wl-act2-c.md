---
title: "WL_ACT2.C"
program: "Wolfenstein 3D"
program_slug: "wolf3d"
file_path: "WOLFSRC/WL_ACT2.C"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/wolf3d/blob/master/WOLFSRC/WL_ACT2.C"
year: 1992
author: "John Carmack, John Romero, Tom Hall"
slug: "wl-act2-c"
order: 10
description: "This file defines enemy behaviors and spawning logic in Wolfenstein 3D, showcasing the modular design of AI states and interactions."

summary:
  - point: "Defines AI states for enemies like guards, mutants, and bosses"
    link: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    link_label: "Wolfenstein 3D"
  - point: "Introduces state-driven AI using `statetype` structures"
    link: "https://en.wikipedia.org/wiki/Finite-state_machine"
    link_label: "Finite State Machine"
  - point: "Implements difficulty scaling through hitpoints and behaviors"
    link: "https://en.wikipedia.org/wiki/Game_difficulty"
    link_label: "Game Difficulty"
  - point: "Optimized for MS-DOS hardware constraints"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Modular spawning routines for enemies and bosses"
    link: "https://en.wikipedia.org/wiki/Video_game_AI"
    link_label: "Video Game AI"

enhancements:
  - id: "dirtable-direction-lookup"
    line_start: 30
    line_end: 40
    title: "Compact direction lookup table"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "The `dirtable` array defines directional constants for enemy movement, including cardinal and diagonal directions. This compact lookup table allows the game to quickly reference movement directions without complex calculations. At the time, efficient memory usage was paramount due to the limited resources of MS-DOS systems. The table reflects id Software's focus on performance optimization, ensuring smooth gameplay even on lower-end hardware. Lookup tables like this became a staple in game development, influencing later titles that needed similar efficient direction handling."
  - id: "starthitpoints-difficulty-scaling"
    line_start: 42
    line_end: 156
    title: "Difficulty scaling through hitpoints"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_difficulty"
    image_url: ""
    image_caption: ""
    content: "The `starthitpoints` array provides initial health values for enemies across four difficulty levels. This design ensures that gameplay remains challenging for players of varying skill levels. By scaling enemy hitpoints, id Software created a dynamic experience that catered to both casual and hardcore audiences. The concept of difficulty scaling was not new but was implemented here with precision, balancing the game for different player preferences. This approach influenced later games, where difficulty settings became a standard feature, allowing developers to expand their audience without compromising game design."
  - id: "a-smoke-effect-handler"
    line_start: 231
    line_end: 252
    title: "Smoke effects for projectiles"
    wikipedia_url: "https://en.wikipedia.org/wiki/Particle_system"
    image_url: ""
    image_caption: ""
    content: "The `A_Smoke` function handles the creation of smoke effects for projectiles, adding visual feedback to the player's actions. By spawning new actors with specific states, the game simulates smoke trails, enhancing immersion. This technique demonstrates id Software's attention to detail, creating a more engaging experience despite hardware limitations. Particle effects like these became a hallmark of graphical fidelity in games, influencing the development of more advanced particle systems in later titles such as Quake and Unreal."
  - id: "projectiletrymove-collision-check"
    line_start: 262
    line_end: 290
    title: "Collision detection for projectiles"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The `ProjectileTryMove` function checks whether a projectile's movement is valid, ensuring it does not pass through walls or other solid objects. This routine iterates over tiles in the projectile's path, verifying their solidity. Efficient collision detection was critical in Wolfenstein 3D, where fast-paced gameplay demanded real-time responsiveness. The method used here laid the groundwork for more sophisticated collision systems in later games, influencing engines like id Tech and others that prioritized performance in dynamic environments."
  - id: "t-projectile-movement-and-damage"
    line_start: 300
    line_end: 369
    title: "Projectile movement and player interaction"
    wikipedia_url: "https://en.wikipedia.org/wiki/Projectile"
    image_url: ""
    image_caption: ""
    content: "The `T_Projectile` function manages the movement and interaction of projectiles, including collision detection and damage calculation. Projectiles move based on their speed and angle, using trigonometric functions for precise trajectories. If a projectile collides with the player, damage is calculated based on its type, adding variety to gameplay. This routine exemplifies id Software's mastery of integrating physics and game mechanics within hardware constraints. The approach influenced subsequent FPS games, where projectile dynamics became increasingly complex and realistic."
  - id: "spawnstand-enemy-initialization"
    line_start: 845
    line_end: 907
    title: "Modular enemy spawning routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Video_game_AI"
    image_url: ""
    image_caption: ""
    content: "The `SpawnStand` function initializes enemies based on their type, position, and direction. It assigns attributes like speed, hitpoints, and flags, ensuring each enemy behaves appropriately. This modular design simplifies the addition of new enemy types, showcasing id Software's foresight in creating extensible systems. The routine also handles ambush scenarios, adding depth to enemy behavior. Modular spawning routines like this became a standard in game development, influencing engines such as Unity and Unreal, where reusable components streamline AI creation."
  - id: "spawnboss-boss-initialization"
    line_start: 927
    line_end: 949
    title: "Boss initialization with ambush mechanics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Boss_(video_gaming)"
    image_url: ""
    image_caption: ""
    content: "The `SpawnBoss` function sets up boss enemies with attributes like hitpoints, direction, and ambush flags. Bosses are a central element of Wolfenstein 3D, providing climactic challenges that test the player's skills. By integrating ambush mechanics, id Software added unpredictability to encounters, heightening tension. This approach influenced later games, where boss fights became more dynamic and cinematic, evolving into set-piece battles seen in titles like Doom and Dark Souls."
  - id: "spawngretel-character-specific-spawning"
    line_start: 951
    line_end: 972
    title: "Character-specific spawning for Gretel"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `SpawnGretel` function initializes Gretel, a unique boss character, with attributes tailored to her role in the game. By assigning specific hitpoints and ambush flags, the routine ensures Gretel provides a distinct challenge. This character-specific spawning highlights id Software's attention to detail, creating memorable encounters that resonate with players. The technique influenced later games, where unique enemy behaviors and attributes became standard, enriching the diversity of gameplay experiences."
  - id: "spawn-patrol-enemy-movement"
    line_start: 975
    line_end: 1049
    title: "Dynamic patrol spawning for enemy AI"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "This routine dynamically spawns patrolling enemies based on their type, position, and direction. It assigns attributes such as speed, hit points, and shootable flags, ensuring each enemy behaves according to its predefined characteristics. Written in 1992, this code reflects the need for efficient AI management in constrained environments like MS-DOS, where memory and processing power were limited. John Carmack's focus on speed and simplicity is evident here, as the routine avoids unnecessary complexity while delivering varied gameplay. This approach to spawning and managing AI influenced later FPS titles, including Doom and Quake, which expanded on these principles with more sophisticated enemy behaviors and pathfinding systems."
  - id: "death-scream-sound-effects"
    line_start: 1053
    line_end: 1163
    title: "Custom death screams for immersive gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_Blaster"
    image_url: ""
    image_caption: ""
    content: "The A_DeathScream function plays unique sound effects for enemies upon their death, adding a layer of personality to the game. Depending on the enemy type and map conditions, different screams are triggered, ranging from generic sounds to specific phrases like 'Mein Gott!' for bosses. This use of audio was groundbreaking in 1992, leveraging the Sound Blaster card to enhance immersion. The technique set a precedent for integrating sound into gameplay, influencing titles like Doom and Half-Life, where audio cues became integral to player experience and storytelling."
  - id: "spawn-trans-boss-characteristics"
    line_start: 1244
    line_end: 1259
    title: "Spawning Trans: A formidable boss"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "SpawnTrans initializes the 'Trans' boss character, setting attributes like hit points and flags for ambush and shootability. The routine adjusts timing based on audio hardware availability, showcasing id Software's attention to hardware compatibility. The inclusion of bosses like Trans added depth to Wolfenstein 3D's gameplay, creating memorable encounters that challenged players and set the stage for epic boss battles in later FPS games such as Doom and Quake."
  - id: "uber-boss-spawning"
    line_start: 1319
    line_end: 1340
    title: "SpawnUber: Introducing the ultimate challenge"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "SpawnUber sets up the 'Uber' boss character, a high-difficulty enemy designed to test players' skills. Attributes like hit points and ambush flags are tailored to the game's difficulty setting, ensuring a challenging experience. This routine exemplifies id Software's ability to balance gameplay difficulty dynamically, a concept that became a cornerstone in later titles like Doom, where difficulty scaling and boss encounters were refined further."
  - id: "launch-projectile-dynamic-angles"
    line_start: 1616
    line_end: 1683
    title: "T_Launch: Dynamic projectile targeting"
    wikipedia_url: "https://en.wikipedia.org/wiki/Projectile_motion"
    image_url: ""
    image_caption: ""
    content: "The T_Launch function calculates projectile trajectories based on the player's position, using trigonometric functions to determine angles. This dynamic targeting system allowed enemies to fire accurately at the player, adding realism and challenge to the gameplay. The use of mathematical calculations for in-game mechanics was innovative for its time, influencing later games that employed physics-based systems for projectiles and interactions, such as Half-Life and Portal."
  - id: "spectre-spawning-and-behavior"
    line_start: 1905
    line_end: 1923
    title: "SpawnSpectre: Ghostly ambush mechanics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "SpawnSpectre initializes the 'Spectre' enemy, a ghost-like character with ambush capabilities. The routine sets attributes like hit points and flags, ensuring the Spectre's behavior aligns with its eerie, unpredictable nature. This type of enemy introduced psychological tension into Wolfenstein 3D, paving the way for horror elements in FPS games like Doom 3 and Dead Space, where enemy unpredictability became a key gameplay feature."
  - id: "dormant-state-activation"
    line_start: 1926
    line_end: 1972
    title: "A_Dormant: Awakening the Spectre"
    wikipedia_url: "https://en.wikipedia.org/wiki/Finite-state_machine"
    image_url: ""
    image_caption: ""
    content: "The A_Dormant function transitions the Spectre enemy from a dormant state to active ambush mode based on proximity to the player. This state-based behavior exemplifies the use of finite-state machines in game AI, a technique that allowed for complex and responsive enemy interactions. The concept of state-driven AI influenced countless games, including Doom and Quake, where enemies exhibited varied behaviors depending on player actions and environmental triggers."
  - id: "spawn-ghosts-enemy-logic"
    line_start: 1983
    line_end: 2021
    title: "SpawnGhosts: Pac-Man homage in enemy design"
    wikipedia_url: "https://en.wikipedia.org/wiki/Pac-Man"
    image_url: ""
    image_caption: ""
    content: "This routine spawns ghost enemies named Blinky, Pinky, Clyde, and Inky—an homage to the iconic characters from Pac-Man. Each ghost is initialized with specific attributes, including speed, direction, and ambush flags. The programmer, John Carmack, was leveraging a playful nod to gaming history while creating distinct enemy types for Wolfenstein 3D. At the time, enemy variety was crucial for maintaining player engagement in first-person shooters. The ghosts' attributes, such as ambush behavior, reflect the game's emphasis on dynamic AI. This approach influenced later games by encouraging developers to incorporate diverse enemy behaviors and thematic references into their designs."
  - id: "schabbs-state-machine"
    line_start: 2061
    line_end: 2085
    title: "Schabbs AI: State machine-driven animations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Finite-state_machine"
    image_url: ""
    image_caption: ""
    content: "This section defines the state machine for Dr. Schabbs, one of Wolfenstein 3D's memorable bosses. Each state corresponds to a specific animation frame and behavior, such as chasing, shooting, or dying. The use of state machines allowed id Software to efficiently manage complex enemy behaviors within the constraints of 1992 hardware. State machines were a common technique in early game development, enabling smooth transitions between actions without excessive computational overhead. This design influenced later games by demonstrating how to implement sophisticated enemy AI using simple, modular structures. Developers of titles like Doom and Quake expanded on this concept to create even more dynamic and responsive enemies."
  - id: "t-schabb-throw-projectile"
    line_start: 2291
    line_end: 2329
    title: "T_SchabbThrow: Precision projectile mechanics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Projectile_motion"
    image_url: ""
    image_caption: ""
    content: "This routine handles Dr. Schabbs' ability to throw needles at the player. Using trigonometric calculations, it determines the angle and trajectory of the projectile based on the player's position relative to the enemy. The use of atan2 for angle computation showcases Carmack's mathematical prowess and attention to detail in gameplay mechanics. Projectile-based attacks added depth to enemy interactions, forcing players to adapt their strategies. This technique became a staple in first-person shooters, influencing games like Half-Life and Unreal, where projectile physics played a critical role in combat dynamics."
  - id: "t-gift-throw-rocket"
    line_start: 2331
    line_end: 2368
    title: "T_GiftThrow: Rocket-based enemy attacks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rocket_launcher"
    image_url: ""
    image_caption: ""
    content: "This function enables the Gift enemy to launch rockets at the player, using similar trigonometric calculations as T_SchabbThrow. Rockets are initialized with specific attributes, including speed and sound effects, enhancing the game's immersive experience. The inclusion of sound effects tied to enemy actions was a forward-thinking design choice, emphasizing the importance of audio in gameplay. This mechanic influenced later games by highlighting the value of combining visual and auditory cues to create impactful enemy interactions. Titles like Call of Duty and Battlefield adopted similar approaches to enhance realism and player engagement."
  - id: "t-schabb-ai-movement"
    line_start: 2372
    line_end: 2459
    title: "T_Schabb: AI-driven movement and dodging"
    wikipedia_url: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games"
    image_url: ""
    image_caption: ""
    content: "This routine governs Dr. Schabbs' movement and decision-making during gameplay. It includes logic for dodging player attacks, selecting chase directions, and navigating around obstacles. The AI calculates distances and evaluates whether the enemy has a clear line of sight to the player, dynamically adjusting its behavior. This level of sophistication was rare in 1992, showcasing id Software's commitment to creating challenging and engaging enemies. The techniques used here influenced the development of smarter AI in later games, such as Doom and Quake, where enemies exhibited more complex behaviors and adaptive strategies."
  - id: "spawn-hitler-and-morph"
    line_start: 2848
    line_end: 2903
    title: "SpawnHitler and A_HitlerMorph: Transformative boss mechanics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Boss_(video_gaming)"
    image_url: ""
    image_caption: ""
    content: "These routines define the spawning and transformation mechanics for Adolf Hitler, the game's final boss. Initially appearing in a mech suit, Hitler morphs into a faster, more dangerous form upon defeat. This multi-phase boss design added dramatic tension and challenge, a hallmark of id Software's approach to boss encounters. The transformation mechanic, where attributes like speed and hitpoints are dynamically adjusted, influenced later games by introducing the concept of evolving bosses. Titles like Dark Souls and Sekiro built on this idea, creating multi-phase boss fights that kept players on edge."
  - id: "t-fake-fire-flamethrower"
    line_start: 2925
    line_end: 2962
    title: "T_FakeFire: Flamethrower mechanics and sound integration"
    wikipedia_url: "https://en.wikipedia.org/wiki/Flamethrower"
    image_url: ""
    image_caption: ""
    content: "This routine enables the Fake Hitler enemy to use a flamethrower attack, calculating the trajectory and initializing the fire projectile. The integration of sound effects, such as the flamethrower sound, enhances the player's sensory experience. Flamethrower mechanics were a novel addition to first-person shooters, providing a visually striking and strategically challenging weapon. This approach influenced games like Team Fortress 2, where flamethrowers became iconic weapons tied to specific character classes, showcasing the lasting impact of Wolfenstein 3D's innovative enemy design."
  - id: "fake-actor-dodge-and-attack"
    line_start: 2966
    line_end: 3027
    title: "Fake Actor: Dodge and Attack Logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games"
    image_url: ""
    image_caption: ""
    content: "The `T_Fake` function defines the behavior of a 'fake' enemy actor in the game. It checks whether the player is in line of sight (`CheckLine`) and decides whether to attack or dodge based on random chance (`US_RndT`). The function also handles movement logic, ensuring the actor adjusts its position and selects a new direction when reaching a goal tile. This routine exemplifies the use of simple AI decision-making to create dynamic and unpredictable enemy behavior. At the time, such techniques were groundbreaking, as they allowed for more immersive gameplay compared to static or predictable enemies. The logic here reflects the constraints of early 1990s hardware, where computational resources were limited, and AI routines had to be efficient. This approach influenced subsequent AI systems in games like Doom and Quake, where dynamic enemy behavior became a hallmark of id Software's design."
  - id: "stand-behavior-simple-sight-check"
    line_start: 3039
    line_end: 3050
    title: "Stand Behavior: Simple Sight Check"
    wikipedia_url: "https://en.wikipedia.org/wiki/Finite-state_machine"
    image_url: ""
    image_caption: ""
    content: "The `T_Stand` function represents a minimal AI state where an enemy actor stands still and checks if the player is visible (`SightPlayer`). This state is part of the finite-state machine design that governs enemy behaviors in Wolfenstein 3D. By isolating this behavior into a simple function, the developers ensured modularity and ease of debugging. At the time, finite-state machines were a common pattern for game AI, balancing complexity and performance. This modular approach laid the groundwork for more sophisticated AI systems in later games, where states could transition dynamically based on player actions and environmental factors."
  - id: "chase-behavior-dynamic-pathfinding"
    line_start: 3053
    line_end: 3196
    title: "Chase Behavior: Dynamic Pathfinding and Attack"
    wikipedia_url: "https://en.wikipedia.org/wiki/Pathfinding"
    image_url: ""
    image_caption: ""
    content: "The `T_Chase` function handles the behavior of enemies actively pursuing the player. It includes logic for checking line of sight (`CheckLine`), calculating distance, and determining attack chances based on proximity and random factors (`US_RndT`). The function also incorporates pathfinding and obstacle avoidance, selecting new directions when blocked (`SelectChaseDir`). This routine demonstrates how Wolfenstein 3D's AI system created tension and unpredictability, as enemies could dynamically adapt to the player's movements. The pathfinding logic here is an early example of grid-based navigation, a technique that became standard in many subsequent games. By balancing computational efficiency with engaging gameplay, id Software set a precedent for AI design in first-person shooters, influencing titles like Doom and Half-Life."
  - id: "ghosts-behavior-simple-chase"
    line_start: 3199
    line_end: 3247
    title: "Ghosts Behavior: Simplified Chase Logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `T_Ghosts` function defines the movement behavior for ghost enemies. Unlike other actors, ghosts rely on a simplified chase logic, focusing solely on pursuing the player without additional attack or dodge mechanics. This streamlined behavior reflects the game's design philosophy of tailoring AI routines to fit the thematic and gameplay needs of specific enemy types. Ghosts add variety to the game's challenges, forcing players to adapt their strategies. This approach to differentiated enemy behavior influenced later games, where unique AI profiles became a staple for creating diverse gameplay experiences."
  - id: "dog-chase-and-jump-attack"
    line_start: 3249
    line_end: 3319
    title: "Dog Chase: Jump Attack Mechanic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games"
    image_url: ""
    image_caption: ""
    content: "The `T_DogChase` function governs the behavior of dog enemies, incorporating a unique jump attack mechanic. Dogs chase the player using a dodge-based pathfinding routine (`SelectDodgeDir`) and check proximity to determine if a jump attack should be initiated (`NewState`). This behavior adds a layer of unpredictability, as dogs can bypass obstacles and close distances rapidly. The jump attack mechanic showcases id Software's creativity in designing enemies that challenge players in distinct ways. This type of specialized enemy behavior influenced later games, where developers sought to create memorable and varied adversaries, such as the imps in Doom or the headcrabs in Half-Life."
  - id: "bj-victory-sequence"
    line_start: 3562
    line_end: 3716
    title: "BJ Victory Sequence: Cinematic Finale"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The BJ Victory sequence, implemented through functions like `SpawnBJVictory`, `T_BJRun`, and `T_BJJump`, provides a cinematic conclusion to the game. This scripted sequence transitions BJ Blazkowicz into a celebratory state, running and jumping to signify triumph. The use of predefined states (`statetype`) and animations reflects the game's reliance on finite-state machines for both gameplay and narrative moments. At the time, such sequences were rare in games, as most titles focused solely on gameplay mechanics. By incorporating a victory sequence, id Software elevated the player's sense of accomplishment and set a precedent for cinematic storytelling in games. This approach influenced later titles like Doom and Quake, where scripted events became integral to the experience."
  - id: "check-position-collision-detection"
    line_start: 3723
    line_end: 3754
    title: "Check Position: Collision Detection Logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The `CheckPosition` function implements collision detection for actors within the game's grid-based map. It checks the surrounding tiles for solid walls or other actors, ensuring that movement and placement are valid. This routine is crucial for maintaining the game's spatial integrity, preventing actors from overlapping or entering invalid positions. Collision detection was a fundamental challenge in early game development, particularly for grid-based systems like Wolfenstein 3D. The efficiency of this routine reflects the constraints of MS-DOS hardware, where performance was a critical concern. The techniques used here influenced later games, where collision detection became more complex and integrated with physics engines, as seen in titles like Half-Life and Unreal."
  - id: "death-cam-sequence-for-boss-fights"
    line_start: 3757
    line_end: 3870
    title: "Death cam sequence for boss fights"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "This section implements the 'death cam' feature, a cinematic sequence triggered during boss fights in Wolfenstein 3D. The function `A_StartDeathCam` aligns the player's camera to focus on the defeated boss, creating a dramatic moment of victory. It begins by finalizing palette shifts and waiting for vertical blanking to ensure smooth transitions. If the player has already achieved victory, the game exits; otherwise, it sets the victory flag and displays a fade effect using the `FizzleFade` function. The function then manages memory by unlocking and caching necessary resources, ensuring efficient use of limited MS-DOS memory. It calculates the angle between the player and the boss using the `atan2` function, converting the result into the game's internal angle representation. This precise alignment ensures that the camera focuses directly on the boss. To avoid placing the player in a wall, the function iteratively adjusts the player's position using trigonometric calculations and checks for valid positions with `CheckPosition`. Once the camera is correctly positioned, the game updates the screen and restores the play border. The final part of the function transitions to specific death animations for different boss types, such as Schabbs, Hitler, and others, emphasizing the unique personalities of each boss. This attention to detail reflects id Software's commitment to creating immersive experiences. The 'death cam' technique influenced later games by demonstrating the importance of cinematic sequences in enhancing gameplay. Titles like Doom and Quake expanded on this concept, integrating dramatic camera movements and transitions into their storytelling. Today, cinematic sequences are a staple in modern games, showcasing the lasting impact of id Software's innovations in Wolfenstein 3D."

---

// WL_ACT2.C

#include "WL_DEF.H"
#pragma hdrstop

/*
=============================================================================

						 LOCAL CONSTANTS

=============================================================================
*/

#define PROJECTILESIZE	0xc000l

#define BJRUNSPEED	2048
#define BJJUMPSPEED	680


/*
=============================================================================

						 GLOBAL VARIABLES

=============================================================================
*/



/*
=============================================================================

						 LOCAL VARIABLES

=============================================================================
*/


dirtype dirtable[9] = {northwest,north,northeast,west,nodir,east,
	southwest,south,southeast};

int	starthitpoints[4][NUMENEMIES] =
	 //
	 // BABY MODE
	 //
	 {
	 {25,	// guards
	  50,	// officer
	  100,	// SS
	  1,	// dogs
	  850,	// Hans
	  850,	// Schabbs
	  200,	// fake hitler
	  800,	// mecha hitler
	  45,	// mutants
	  25,	// ghosts
	  25,	// ghosts
	  25,	// ghosts
	  25,	// ghosts

	  850,	// Gretel
	  850,	// Gift
	  850,	// Fat
	  5,	// en_spectre,
	  1450,	// en_angel,
	  850,	// en_trans,
	  1050,	// en_uber,
	  950,	// en_will,
	  1250	// en_death
	  },
	 //
	 // DON'T HURT ME MODE
	 //
	 {25,	// guards
	  50,	// officer
	  100,	// SS
	  1,	// dogs
	  950,	// Hans
	  950,	// Schabbs
	  300,	// fake hitler
	  950,	// mecha hitler
	  55,	// mutants
	  25,	// ghosts
	  25,	// ghosts
	  25,	// ghosts
	  25,	// ghosts

	  950,	// Gretel
	  950,	// Gift
	  950,	// Fat
	  10,	// en_spectre,
	  1550,	// en_angel,
	  950,	// en_trans,
	  1150,	// en_uber,
	  1050,	// en_will,
	  1350	// en_death
	  },
	 //
	 // BRING 'EM ON MODE
	 //
	 {25,	// guards
	  50,	// officer
	  100,	// SS
	  1,	// dogs

	  1050,	// Hans
	  1550,	// Schabbs
	  400,	// fake hitler
	  1050,	// mecha hitler

	  55,	// mutants
	  25,	// ghosts
	  25,	// ghosts
	  25,	// ghosts
	  25,	// ghosts

	  1050,	// Gretel
	  1050,	// Gift
	  1050,	// Fat
	  15,	// en_spectre,
	  1650,	// en_angel,
	  1050,	// en_trans,
	  1250,	// en_uber,
	  1150,	// en_will,
	  1450	// en_death
	  },
	 //
	 // DEATH INCARNATE MODE
	 //
	 {25,	// guards
	  50,	// officer
	  100,	// SS
	  1,	// dogs

	  1200,	// Hans
	  2400,	// Schabbs
	  500,	// fake hitler
	  1200,	// mecha hitler

	  65,	// mutants
	  25,	// ghosts
	  25,	// ghosts
	  25,	// ghosts
	  25,	// ghosts

	  1200,	// Gretel
	  1200,	// Gift
	  1200,	// Fat
	  25,	// en_spectre,
	  2000,	// en_angel,
	  1200,	// en_trans,
	  1400,	// en_uber,
	  1300,	// en_will,
	  1600	// en_death
	  }}
	  ;

void	A_StartDeathCam (objtype *ob);


void	T_Path (objtype *ob);
void	T_Shoot (objtype *ob);
void	T_Bite (objtype *ob);
void	T_DogChase (objtype *ob);
void	T_Chase (objtype *ob);
void	T_Projectile (objtype *ob);
void	T_Stand (objtype *ob);

void A_DeathScream (objtype *ob);

extern	statetype s_rocket;
extern	statetype s_smoke1;
extern	statetype s_smoke2;
extern	statetype s_smoke3;
extern	statetype s_smoke4;
extern	statetype s_boom2;
extern	statetype s_boom3;

void A_Smoke (objtype *ob);

statetype s_rocket	 	= {true,SPR_ROCKET_1,3,T_Projectile,A_Smoke,&s_rocket};
statetype s_smoke1	 	= {false,SPR_SMOKE_1,3,NULL,NULL,&s_smoke2};
statetype s_smoke2	 	= {false,SPR_SMOKE_2,3,NULL,NULL,&s_smoke3};
statetype s_smoke3	 	= {false,SPR_SMOKE_3,3,NULL,NULL,&s_smoke4};
statetype s_smoke4	 	= {false,SPR_SMOKE_4,3,NULL,NULL,NULL};

statetype s_boom1	 	= {false,SPR_BOOM_1,6,NULL,NULL,&s_boom2};
statetype s_boom2	 	= {false,SPR_BOOM_2,6,NULL,NULL,&s_boom3};
statetype s_boom3	 	= {false,SPR_BOOM_3,6,NULL,NULL,NULL};

#ifdef SPEAR

extern	statetype s_hrocket;
extern	statetype s_hsmoke1;
extern	statetype s_hsmoke2;
extern	statetype s_hsmoke3;
extern	statetype s_hsmoke4;
extern	statetype s_hboom2;
extern	statetype s_hboom3;

void A_Smoke (objtype *ob);

statetype s_hrocket	 	= {true,SPR_HROCKET_1,3,T_Projectile,A_Smoke,&s_hrocket};
statetype s_hsmoke1	 	= {false,SPR_HSMOKE_1,3,NULL,NULL,&s_hsmoke2};
statetype s_hsmoke2	 	= {false,SPR_HSMOKE_2,3,NULL,NULL,&s_hsmoke3};
statetype s_hsmoke3	 	= {false,SPR_HSMOKE_3,3,NULL,NULL,&s_hsmoke4};
statetype s_hsmoke4	 	= {false,SPR_HSMOKE_4,3,NULL,NULL,NULL};

statetype s_hboom1	 	= {false,SPR_HBOOM_1,6,NULL,NULL,&s_hboom2};
statetype s_hboom2	 	= {false,SPR_HBOOM_2,6,NULL,NULL,&s_hboom3};
statetype s_hboom3	 	= {false,SPR_HBOOM_3,6,NULL,NULL,NULL};

#endif

void	T_Schabb (objtype *ob);
void	T_SchabbThrow (objtype *ob);
void	T_Fake (objtype *ob);
void	T_FakeFire (objtype *ob);
void	T_Ghosts (objtype *ob);

void A_Slurpie (objtype *ob);
void A_HitlerMorph (objtype *ob);
void A_MechaSound (objtype *ob);

/*
=================
=
= A_Smoke
=
=================
*/

void A_Smoke (objtype *ob)
{
	GetNewActor ();
#ifdef SPEAR
	if (ob->obclass == hrocketobj)
		new->state = &s_hsmoke1;
	else
#endif
		new->state = &s_smoke1;
	new->ticcount = 6;

	new->tilex = ob->tilex;
	new->tiley = ob->tiley;
	new->x = ob->x;
	new->y = ob->y;
	new->obclass = inertobj;
	new->active = true;

	new->flags = FL_NEVERMARK;
}


/*
===================
=
= ProjectileTryMove
=
= returns true if move ok
===================
*/

#define PROJSIZE	0x2000

boolean ProjectileTryMove (objtype *ob)
{
	int			xl,yl,xh,yh,x,y;
	objtype		*check;
	long		deltax,deltay;

	xl = (ob->x-PROJSIZE) >>TILESHIFT;
	yl = (ob->y-PROJSIZE) >>TILESHIFT;

	xh = (ob->x+PROJSIZE) >>TILESHIFT;
	yh = (ob->y+PROJSIZE) >>TILESHIFT;

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

	return true;
}



/*
=================
=
= T_Projectile
=
=================
*/

void T_Projectile (objtype *ob)
{
	long	deltax,deltay;
	int		damage;
	long	speed;

	speed = (long)ob->speed*tics;

	deltax = FixedByFrac(speed,costable[ob->angle]);
	deltay = -FixedByFrac(speed,sintable[ob->angle]);

	if (deltax>0x10000l)
		deltax = 0x10000l;
	if (deltay>0x10000l)
		deltay = 0x10000l;

	ob->x += deltax;
	ob->y += deltay;

	deltax = LABS(ob->x - player->x);
	deltay = LABS(ob->y - player->y);

	if (!ProjectileTryMove (ob))
	{
		if (ob->obclass == rocketobj)
		{
			PlaySoundLocActor(MISSILEHITSND,ob);
			ob->state = &s_boom1;
		}
#ifdef SPEAR
		else if (ob->obclass == hrocketobj)
		{
			PlaySoundLocActor(MISSILEHITSND,ob);
			ob->state = &s_hboom1;
		}
#endif
		else
			ob->state = NULL;		// mark for removal

		return;
	}

	if (deltax < PROJECTILESIZE && deltay < PROJECTILESIZE)
	{	// hit the player
		switch (ob->obclass)
		{
		case needleobj:
			damage = (US_RndT() >>3) + 20;
			break;
		case rocketobj:
		case hrocketobj:
		case sparkobj:
			damage = (US_RndT() >>3) + 30;
			break;
		case fireobj:
			damage = (US_RndT() >>3);
			break;
		}

		TakeDamage (damage,ob);
		ob->state = NULL;		// mark for removal
		return;
	}

	ob->tilex = ob->x >> TILESHIFT;
	ob->tiley = ob->y >> TILESHIFT;

}




/*
=============================================================================

							GUARD

=============================================================================
*/

//
// guards
//

extern	statetype s_grdstand;

extern	statetype s_grdpath1;
extern	statetype s_grdpath1s;
extern	statetype s_grdpath2;
extern	statetype s_grdpath3;
extern	statetype s_grdpath3s;
extern	statetype s_grdpath4;

extern	statetype s_grdpain;
extern	statetype s_grdpain1;

extern	statetype s_grdgiveup;

extern	statetype s_grdshoot1;
extern	statetype s_grdshoot2;
extern	statetype s_grdshoot3;
extern	statetype s_grdshoot4;

extern	statetype s_grdchase1;
extern	statetype s_grdchase1s;
extern	statetype s_grdchase2;
extern	statetype s_grdchase3;
extern	statetype s_grdchase3s;
extern	statetype s_grdchase4;

extern	statetype s_grddie1;
extern	statetype s_grddie1d;
extern	statetype s_grddie2;
extern	statetype s_grddie3;
extern	statetype s_grddie4;

statetype s_grdstand	= {true,SPR_GRD_S_1,0,T_Stand,NULL,&s_grdstand};

statetype s_grdpath1 	= {true,SPR_GRD_W1_1,20,T_Path,NULL,&s_grdpath1s};
statetype s_grdpath1s 	= {true,SPR_GRD_W1_1,5,NULL,NULL,&s_grdpath2};
statetype s_grdpath2 	= {true,SPR_GRD_W2_1,15,T_Path,NULL,&s_grdpath3};
statetype s_grdpath3 	= {true,SPR_GRD_W3_1,20,T_Path,NULL,&s_grdpath3s};
statetype s_grdpath3s 	= {true,SPR_GRD_W3_1,5,NULL,NULL,&s_grdpath4};
statetype s_grdpath4 	= {true,SPR_GRD_W4_1,15,T_Path,NULL,&s_grdpath1};

statetype s_grdpain 	= {2,SPR_GRD_PAIN_1,10,NULL,NULL,&s_grdchase1};
statetype s_grdpain1 	= {2,SPR_GRD_PAIN_2,10,NULL,NULL,&s_grdchase1};

statetype s_grdshoot1 	= {false,SPR_GRD_SHOOT1,20,NULL,NULL,&s_grdshoot2};
statetype s_grdshoot2 	= {false,SPR_GRD_SHOOT2,20,NULL,T_Shoot,&s_grdshoot3};
statetype s_grdshoot3 	= {false,SPR_GRD_SHOOT3,20,NULL,NULL,&s_grdchase1};

statetype s_grdchase1 	= {true,SPR_GRD_W1_1,10,T_Chase,NULL,&s_grdchase1s};
statetype s_grdchase1s 	= {true,SPR_GRD_W1_1,3,NULL,NULL,&s_grdchase2};
statetype s_grdchase2 	= {true,SPR_GRD_W2_1,8,T_Chase,NULL,&s_grdchase3};
statetype s_grdchase3 	= {true,SPR_GRD_W3_1,10,T_Chase,NULL,&s_grdchase3s};
statetype s_grdchase3s 	= {true,SPR_GRD_W3_1,3,NULL,NULL,&s_grdchase4};
statetype s_grdchase4 	= {true,SPR_GRD_W4_1,8,T_Chase,NULL,&s_grdchase1};

statetype s_grddie1		= {false,SPR_GRD_DIE_1,15,NULL,A_DeathScream,&s_grddie2};
statetype s_grddie2		= {false,SPR_GRD_DIE_2,15,NULL,NULL,&s_grddie3};
statetype s_grddie3		= {false,SPR_GRD_DIE_3,15,NULL,NULL,&s_grddie4};
statetype s_grddie4		= {false,SPR_GRD_DEAD,0,NULL,NULL,&s_grddie4};


#ifndef SPEAR
//
// ghosts
//
extern	statetype s_blinkychase1;
extern	statetype s_blinkychase2;
extern	statetype s_inkychase1;
extern	statetype s_inkychase2;
extern	statetype s_pinkychase1;
extern	statetype s_pinkychase2;
extern	statetype s_clydechase1;
extern	statetype s_clydechase2;

statetype s_blinkychase1 	= {false,SPR_BLINKY_W1,10,T_Ghosts,NULL,&s_blinkychase2};
statetype s_blinkychase2 	= {false,SPR_BLINKY_W2,10,T_Ghosts,NULL,&s_blinkychase1};

statetype s_inkychase1 		= {false,SPR_INKY_W1,10,T_Ghosts,NULL,&s_inkychase2};
statetype s_inkychase2 		= {false,SPR_INKY_W2,10,T_Ghosts,NULL,&s_inkychase1};

statetype s_pinkychase1 	= {false,SPR_PINKY_W1,10,T_Ghosts,NULL,&s_pinkychase2};
statetype s_pinkychase2 	= {false,SPR_PINKY_W2,10,T_Ghosts,NULL,&s_pinkychase1};

statetype s_clydechase1 	= {false,SPR_CLYDE_W1,10,T_Ghosts,NULL,&s_clydechase2};
statetype s_clydechase2 	= {false,SPR_CLYDE_W2,10,T_Ghosts,NULL,&s_clydechase1};
#endif

//
// dogs
//

extern	statetype s_dogpath1;
extern	statetype s_dogpath1s;
extern	statetype s_dogpath2;
extern	statetype s_dogpath3;
extern	statetype s_dogpath3s;
extern	statetype s_dogpath4;

extern	statetype s_dogjump1;
extern	statetype s_dogjump2;
extern	statetype s_dogjump3;
extern	statetype s_dogjump4;
extern	statetype s_dogjump5;

extern	statetype s_dogchase1;
extern	statetype s_dogchase1s;
extern	statetype s_dogchase2;
extern	statetype s_dogchase3;
extern	statetype s_dogchase3s;
extern	statetype s_dogchase4;

extern	statetype s_dogdie1;
extern	statetype s_dogdie1d;
extern	statetype s_dogdie2;
extern	statetype s_dogdie3;
extern	statetype s_dogdead;

statetype s_dogpath1 	= {true,SPR_DOG_W1_1,20,T_Path,NULL,&s_dogpath1s};
statetype s_dogpath1s 	= {true,SPR_DOG_W1_1,5,NULL,NULL,&s_dogpath2};
statetype s_dogpath2 	= {true,SPR_DOG_W2_1,15,T_Path,NULL,&s_dogpath3};
statetype s_dogpath3 	= {true,SPR_DOG_W3_1,20,T_Path,NULL,&s_dogpath3s};
statetype s_dogpath3s 	= {true,SPR_DOG_W3_1,5,NULL,NULL,&s_dogpath4};
statetype s_dogpath4 	= {true,SPR_DOG_W4_1,15,T_Path,NULL,&s_dogpath1};

statetype s_dogjump1 	= {false,SPR_DOG_JUMP1,10,NULL,NULL,&s_dogjump2};
statetype s_dogjump2 	= {false,SPR_DOG_JUMP2,10,NULL,T_Bite,&s_dogjump3};
statetype s_dogjump3 	= {false,SPR_DOG_JUMP3,10,NULL,NULL,&s_dogjump4};
statetype s_dogjump4 	= {false,SPR_DOG_JUMP1,10,NULL,NULL,&s_dogjump5};
statetype s_dogjump5 	= {false,SPR_DOG_W1_1,10,NULL,NULL,&s_dogchase1};

statetype s_dogchase1 	= {true,SPR_DOG_W1_1,10,T_DogChase,NULL,&s_dogchase1s};
statetype s_dogchase1s 	= {true,SPR_DOG_W1_1,3,NULL,NULL,&s_dogchase2};
statetype s_dogchase2 	= {true,SPR_DOG_W2_1,8,T_DogChase,NULL,&s_dogchase3};
statetype s_dogchase3 	= {true,SPR_DOG_W3_1,10,T_DogChase,NULL,&s_dogchase3s};
statetype s_dogchase3s 	= {true,SPR_DOG_W3_1,3,NULL,NULL,&s_dogchase4};
statetype s_dogchase4 	= {true,SPR_DOG_W4_1,8,T_DogChase,NULL,&s_dogchase1};

statetype s_dogdie1		= {false,SPR_DOG_DIE_1,15,NULL,A_DeathScream,&s_dogdie2};
statetype s_dogdie2		= {false,SPR_DOG_DIE_2,15,NULL,NULL,&s_dogdie3};
statetype s_dogdie3		= {false,SPR_DOG_DIE_3,15,NULL,NULL,&s_dogdead};
statetype s_dogdead		= {false,SPR_DOG_DEAD,15,NULL,NULL,&s_dogdead};


//
// officers
//

extern	statetype s_ofcstand;

extern	statetype s_ofcpath1;
extern	statetype s_ofcpath1s;
extern	statetype s_ofcpath2;
extern	statetype s_ofcpath3;
extern	statetype s_ofcpath3s;
extern	statetype s_ofcpath4;

extern	statetype s_ofcpain;
extern	statetype s_ofcpain1;

extern	statetype s_ofcgiveup;

extern	statetype s_ofcshoot1;
extern	statetype s_ofcshoot2;
extern	statetype s_ofcshoot3;
extern	statetype s_ofcshoot4;

extern	statetype s_ofcchase1;
extern	statetype s_ofcchase1s;
extern	statetype s_ofcchase2;
extern	statetype s_ofcchase3;
extern	statetype s_ofcchase3s;
extern	statetype s_ofcchase4;

extern	statetype s_ofcdie1;
extern	statetype s_ofcdie2;
extern	statetype s_ofcdie3;
extern	statetype s_ofcdie4;
extern	statetype s_ofcdie5;

statetype s_ofcstand	= {true,SPR_OFC_S_1,0,T_Stand,NULL,&s_ofcstand};

statetype s_ofcpath1 	= {true,SPR_OFC_W1_1,20,T_Path,NULL,&s_ofcpath1s};
statetype s_ofcpath1s 	= {true,SPR_OFC_W1_1,5,NULL,NULL,&s_ofcpath2};
statetype s_ofcpath2 	= {true,SPR_OFC_W2_1,15,T_Path,NULL,&s_ofcpath3};
statetype s_ofcpath3 	= {true,SPR_OFC_W3_1,20,T_Path,NULL,&s_ofcpath3s};
statetype s_ofcpath3s 	= {true,SPR_OFC_W3_1,5,NULL,NULL,&s_ofcpath4};
statetype s_ofcpath4 	= {true,SPR_OFC_W4_1,15,T_Path,NULL,&s_ofcpath1};

statetype s_ofcpain 	= {2,SPR_OFC_PAIN_1,10,NULL,NULL,&s_ofcchase1};
statetype s_ofcpain1 	= {2,SPR_OFC_PAIN_2,10,NULL,NULL,&s_ofcchase1};

statetype s_ofcshoot1 	= {false,SPR_OFC_SHOOT1,6,NULL,NULL,&s_ofcshoot2};
statetype s_ofcshoot2 	= {false,SPR_OFC_SHOOT2,20,NULL,T_Shoot,&s_ofcshoot3};
statetype s_ofcshoot3 	= {false,SPR_OFC_SHOOT3,10,NULL,NULL,&s_ofcchase1};

statetype s_ofcchase1 	= {true,SPR_OFC_W1_1,10,T_Chase,NULL,&s_ofcchase1s};
statetype s_ofcchase1s 	= {true,SPR_OFC_W1_1,3,NULL,NULL,&s_ofcchase2};
statetype s_ofcchase2 	= {true,SPR_OFC_W2_1,8,T_Chase,NULL,&s_ofcchase3};
statetype s_ofcchase3 	= {true,SPR_OFC_W3_1,10,T_Chase,NULL,&s_ofcchase3s};
statetype s_ofcchase3s 	= {true,SPR_OFC_W3_1,3,NULL,NULL,&s_ofcchase4};
statetype s_ofcchase4 	= {true,SPR_OFC_W4_1,8,T_Chase,NULL,&s_ofcchase1};

statetype s_ofcdie1		= {false,SPR_OFC_DIE_1,11,NULL,A_DeathScream,&s_ofcdie2};
statetype s_ofcdie2		= {false,SPR_OFC_DIE_2,11,NULL,NULL,&s_ofcdie3};
statetype s_ofcdie3		= {false,SPR_OFC_DIE_3,11,NULL,NULL,&s_ofcdie4};
statetype s_ofcdie4		= {false,SPR_OFC_DIE_4,11,NULL,NULL,&s_ofcdie5};
statetype s_ofcdie5		= {false,SPR_OFC_DEAD,0,NULL,NULL,&s_ofcdie5};


//
// mutant
//

extern	statetype s_mutstand;

extern	statetype s_mutpath1;
extern	statetype s_mutpath1s;
extern	statetype s_mutpath2;
extern	statetype s_mutpath3;
extern	statetype s_mutpath3s;
extern	statetype s_mutpath4;

extern	statetype s_mutpain;
extern	statetype s_mutpain1;

extern	statetype s_mutgiveup;

extern	statetype s_mutshoot1;
extern	statetype s_mutshoot2;
extern	statetype s_mutshoot3;
extern	statetype s_mutshoot4;

extern	statetype s_mutchase1;
extern	statetype s_mutchase1s;
extern	statetype s_mutchase2;
extern	statetype s_mutchase3;
extern	statetype s_mutchase3s;
extern	statetype s_mutchase4;

extern	statetype s_mutdie1;
extern	statetype s_mutdie2;
extern	statetype s_mutdie3;
extern	statetype s_mutdie4;
extern	statetype s_mutdie5;

statetype s_mutstand	= {true,SPR_MUT_S_1,0,T_Stand,NULL,&s_mutstand};

statetype s_mutpath1 	= {true,SPR_MUT_W1_1,20,T_Path,NULL,&s_mutpath1s};
statetype s_mutpath1s 	= {true,SPR_MUT_W1_1,5,NULL,NULL,&s_mutpath2};
statetype s_mutpath2 	= {true,SPR_MUT_W2_1,15,T_Path,NULL,&s_mutpath3};
statetype s_mutpath3 	= {true,SPR_MUT_W3_1,20,T_Path,NULL,&s_mutpath3s};
statetype s_mutpath3s 	= {true,SPR_MUT_W3_1,5,NULL,NULL,&s_mutpath4};
statetype s_mutpath4 	= {true,SPR_MUT_W4_1,15,T_Path,NULL,&s_mutpath1};

statetype s_mutpain 	= {2,SPR_MUT_PAIN_1,10,NULL,NULL,&s_mutchase1};
statetype s_mutpain1 	= {2,SPR_MUT_PAIN_2,10,NULL,NULL,&s_mutchase1};

statetype s_mutshoot1 	= {false,SPR_MUT_SHOOT1,6,NULL,T_Shoot,&s_mutshoot2};
statetype s_mutshoot2 	= {false,SPR_MUT_SHOOT2,20,NULL,NULL,&s_mutshoot3};
statetype s_mutshoot3 	= {false,SPR_MUT_SHOOT3,10,NULL,T_Shoot,&s_mutshoot4};
statetype s_mutshoot4 	= {false,SPR_MUT_SHOOT4,20,NULL,NULL,&s_mutchase1};

statetype s_mutchase1 	= {true,SPR_MUT_W1_1,10,T_Chase,NULL,&s_mutchase1s};
statetype s_mutchase1s 	= {true,SPR_MUT_W1_1,3,NULL,NULL,&s_mutchase2};
statetype s_mutchase2 	= {true,SPR_MUT_W2_1,8,T_Chase,NULL,&s_mutchase3};
statetype s_mutchase3 	= {true,SPR_MUT_W3_1,10,T_Chase,NULL,&s_mutchase3s};
statetype s_mutchase3s 	= {true,SPR_MUT_W3_1,3,NULL,NULL,&s_mutchase4};
statetype s_mutchase4 	= {true,SPR_MUT_W4_1,8,T_Chase,NULL,&s_mutchase1};

statetype s_mutdie1		= {false,SPR_MUT_DIE_1,7,NULL,A_DeathScream,&s_mutdie2};
statetype s_mutdie2		= {false,SPR_MUT_DIE_2,7,NULL,NULL,&s_mutdie3};
statetype s_mutdie3		= {false,SPR_MUT_DIE_3,7,NULL,NULL,&s_mutdie4};
statetype s_mutdie4		= {false,SPR_MUT_DIE_4,7,NULL,NULL,&s_mutdie5};
statetype s_mutdie5		= {false,SPR_MUT_DEAD,0,NULL,NULL,&s_mutdie5};


//
// SS
//

extern	statetype s_ssstand;

extern	statetype s_sspath1;
extern	statetype s_sspath1s;
extern	statetype s_sspath2;
extern	statetype s_sspath3;
extern	statetype s_sspath3s;
extern	statetype s_sspath4;

extern	statetype s_sspain;
extern	statetype s_sspain1;

extern	statetype s_ssshoot1;
extern	statetype s_ssshoot2;
extern	statetype s_ssshoot3;
extern	statetype s_ssshoot4;
extern	statetype s_ssshoot5;
extern	statetype s_ssshoot6;
extern	statetype s_ssshoot7;
extern	statetype s_ssshoot8;
extern	statetype s_ssshoot9;

extern	statetype s_sschase1;
extern	statetype s_sschase1s;
extern	statetype s_sschase2;
extern	statetype s_sschase3;
extern	statetype s_sschase3s;
extern	statetype s_sschase4;

extern	statetype s_ssdie1;
extern	statetype s_ssdie2;
extern	statetype s_ssdie3;
extern	statetype s_ssdie4;

statetype s_ssstand	= {true,SPR_SS_S_1,0,T_Stand,NULL,&s_ssstand};

statetype s_sspath1 	= {true,SPR_SS_W1_1,20,T_Path,NULL,&s_sspath1s};
statetype s_sspath1s 	= {true,SPR_SS_W1_1,5,NULL,NULL,&s_sspath2};
statetype s_sspath2 	= {true,SPR_SS_W2_1,15,T_Path,NULL,&s_sspath3};
statetype s_sspath3 	= {true,SPR_SS_W3_1,20,T_Path,NULL,&s_sspath3s};
statetype s_sspath3s 	= {true,SPR_SS_W3_1,5,NULL,NULL,&s_sspath4};
statetype s_sspath4 	= {true,SPR_SS_W4_1,15,T_Path,NULL,&s_sspath1};

statetype s_sspain 		= {2,SPR_SS_PAIN_1,10,NULL,NULL,&s_sschase1};
statetype s_sspain1 	= {2,SPR_SS_PAIN_2,10,NULL,NULL,&s_sschase1};

statetype s_ssshoot1 	= {false,SPR_SS_SHOOT1,20,NULL,NULL,&s_ssshoot2};
statetype s_ssshoot2 	= {false,SPR_SS_SHOOT2,20,NULL,T_Shoot,&s_ssshoot3};
statetype s_ssshoot3 	= {false,SPR_SS_SHOOT3,10,NULL,NULL,&s_ssshoot4};
statetype s_ssshoot4 	= {false,SPR_SS_SHOOT2,10,NULL,T_Shoot,&s_ssshoot5};
statetype s_ssshoot5 	= {false,SPR_SS_SHOOT3,10,NULL,NULL,&s_ssshoot6};
statetype s_ssshoot6 	= {false,SPR_SS_SHOOT2,10,NULL,T_Shoot,&s_ssshoot7};
statetype s_ssshoot7  	= {false,SPR_SS_SHOOT3,10,NULL,NULL,&s_ssshoot8};
statetype s_ssshoot8  	= {false,SPR_SS_SHOOT2,10,NULL,T_Shoot,&s_ssshoot9};
statetype s_ssshoot9  	= {false,SPR_SS_SHOOT3,10,NULL,NULL,&s_sschase1};

statetype s_sschase1 	= {true,SPR_SS_W1_1,10,T_Chase,NULL,&s_sschase1s};
statetype s_sschase1s 	= {true,SPR_SS_W1_1,3,NULL,NULL,&s_sschase2};
statetype s_sschase2 	= {true,SPR_SS_W2_1,8,T_Chase,NULL,&s_sschase3};
statetype s_sschase3 	= {true,SPR_SS_W3_1,10,T_Chase,NULL,&s_sschase3s};
statetype s_sschase3s 	= {true,SPR_SS_W3_1,3,NULL,NULL,&s_sschase4};
statetype s_sschase4 	= {true,SPR_SS_W4_1,8,T_Chase,NULL,&s_sschase1};

statetype s_ssdie1		= {false,SPR_SS_DIE_1,15,NULL,A_DeathScream,&s_ssdie2};
statetype s_ssdie2		= {false,SPR_SS_DIE_2,15,NULL,NULL,&s_ssdie3};
statetype s_ssdie3		= {false,SPR_SS_DIE_3,15,NULL,NULL,&s_ssdie4};
statetype s_ssdie4		= {false,SPR_SS_DEAD,0,NULL,NULL,&s_ssdie4};


#ifndef SPEAR
//
// hans
//
extern	statetype s_bossstand;

extern	statetype s_bosschase1;
extern	statetype s_bosschase1s;
extern	statetype s_bosschase2;
extern	statetype s_bosschase3;
extern	statetype s_bosschase3s;
extern	statetype s_bosschase4;

extern	statetype s_bossdie1;
extern	statetype s_bossdie2;
extern	statetype s_bossdie3;
extern	statetype s_bossdie4;

extern	statetype s_bossshoot1;
extern	statetype s_bossshoot2;
extern	statetype s_bossshoot3;
extern	statetype s_bossshoot4;
extern	statetype s_bossshoot5;
extern	statetype s_bossshoot6;
extern	statetype s_bossshoot7;
extern	statetype s_bossshoot8;


statetype s_bossstand	= {false,SPR_BOSS_W1,0,T_Stand,NULL,&s_bossstand};

statetype s_bosschase1 	= {false,SPR_BOSS_W1,10,T_Chase,NULL,&s_bosschase1s};
statetype s_bosschase1s	= {false,SPR_BOSS_W1,3,NULL,NULL,&s_bosschase2};
statetype s_bosschase2 	= {false,SPR_BOSS_W2,8,T_Chase,NULL,&s_bosschase3};
statetype s_bosschase3 	= {false,SPR_BOSS_W3,10,T_Chase,NULL,&s_bosschase3s};
statetype s_bosschase3s	= {false,SPR_BOSS_W3,3,NULL,NULL,&s_bosschase4};
statetype s_bosschase4 	= {false,SPR_BOSS_W4,8,T_Chase,NULL,&s_bosschase1};

statetype s_bossdie1	= {false,SPR_BOSS_DIE1,15,NULL,A_DeathScream,&s_bossdie2};
statetype s_bossdie2	= {false,SPR_BOSS_DIE2,15,NULL,NULL,&s_bossdie3};
statetype s_bossdie3	= {false,SPR_BOSS_DIE3,15,NULL,NULL,&s_bossdie4};
statetype s_bossdie4	= {false,SPR_BOSS_DEAD,0,NULL,NULL,&s_bossdie4};

statetype s_bossshoot1 	= {false,SPR_BOSS_SHOOT1,30,NULL,NULL,&s_bossshoot2};
statetype s_bossshoot2 	= {false,SPR_BOSS_SHOOT2,10,NULL,T_Shoot,&s_bossshoot3};
statetype s_bossshoot3 	= {false,SPR_BOSS_SHOOT3,10,NULL,T_Shoot,&s_bossshoot4};
statetype s_bossshoot4 	= {false,SPR_BOSS_SHOOT2,10,NULL,T_Shoot,&s_bossshoot5};
statetype s_bossshoot5 	= {false,SPR_BOSS_SHOOT3,10,NULL,T_Shoot,&s_bossshoot6};
statetype s_bossshoot6 	= {false,SPR_BOSS_SHOOT2,10,NULL,T_Shoot,&s_bossshoot7};
statetype s_bossshoot7 	= {false,SPR_BOSS_SHOOT3,10,NULL,T_Shoot,&s_bossshoot8};
statetype s_bossshoot8 	= {false,SPR_BOSS_SHOOT1,10,NULL,NULL,&s_bosschase1};


//
// gretel
//
extern	statetype s_gretelstand;

extern	statetype s_gretelchase1;
extern	statetype s_gretelchase1s;
extern	statetype s_gretelchase2;
extern	statetype s_gretelchase3;
extern	statetype s_gretelchase3s;
extern	statetype s_gretelchase4;

extern	statetype s_greteldie1;
extern	statetype s_greteldie2;
extern	statetype s_greteldie3;
extern	statetype s_greteldie4;

extern	statetype s_gretelshoot1;
extern	statetype s_gretelshoot2;
extern	statetype s_gretelshoot3;
extern	statetype s_gretelshoot4;
extern	statetype s_gretelshoot5;
extern	statetype s_gretelshoot6;
extern	statetype s_gretelshoot7;
extern	statetype s_gretelshoot8;


statetype s_gretelstand	= {false,SPR_GRETEL_W1,0,T_Stand,NULL,&s_gretelstand};

statetype s_gretelchase1 	= {false,SPR_GRETEL_W1,10,T_Chase,NULL,&s_gretelchase1s};
statetype s_gretelchase1s	= {false,SPR_GRETEL_W1,3,NULL,NULL,&s_gretelchase2};
statetype s_gretelchase2 	= {false,SPR_GRETEL_W2,8,T_Chase,NULL,&s_gretelchase3};
statetype s_gretelchase3 	= {false,SPR_GRETEL_W3,10,T_Chase,NULL,&s_gretelchase3s};
statetype s_gretelchase3s	= {false,SPR_GRETEL_W3,3,NULL,NULL,&s_gretelchase4};
statetype s_gretelchase4 	= {false,SPR_GRETEL_W4,8,T_Chase,NULL,&s_gretelchase1};

statetype s_greteldie1	= {false,SPR_GRETEL_DIE1,15,NULL,A_DeathScream,&s_greteldie2};
statetype s_greteldie2	= {false,SPR_GRETEL_DIE2,15,NULL,NULL,&s_greteldie3};
statetype s_greteldie3	= {false,SPR_GRETEL_DIE3,15,NULL,NULL,&s_greteldie4};
statetype s_greteldie4	= {false,SPR_GRETEL_DEAD,0,NULL,NULL,&s_greteldie4};

statetype s_gretelshoot1 	= {false,SPR_GRETEL_SHOOT1,30,NULL,NULL,&s_gretelshoot2};
statetype s_gretelshoot2 	= {false,SPR_GRETEL_SHOOT2,10,NULL,T_Shoot,&s_gretelshoot3};
statetype s_gretelshoot3 	= {false,SPR_GRETEL_SHOOT3,10,NULL,T_Shoot,&s_gretelshoot4};
statetype s_gretelshoot4 	= {false,SPR_GRETEL_SHOOT2,10,NULL,T_Shoot,&s_gretelshoot5};
statetype s_gretelshoot5 	= {false,SPR_GRETEL_SHOOT3,10,NULL,T_Shoot,&s_gretelshoot6};
statetype s_gretelshoot6 	= {false,SPR_GRETEL_SHOOT2,10,NULL,T_Shoot,&s_gretelshoot7};
statetype s_gretelshoot7 	= {false,SPR_GRETEL_SHOOT3,10,NULL,T_Shoot,&s_gretelshoot8};
statetype s_gretelshoot8 	= {false,SPR_GRETEL_SHOOT1,10,NULL,NULL,&s_gretelchase1};
#endif


/*
===============
=
= SpawnStand
=
===============
*/

void SpawnStand (enemy_t which, int tilex, int tiley, int dir)
{
	unsigned	far *map,tile;

	switch (which)
	{
	case en_guard:
		SpawnNewObj (tilex,tiley,&s_grdstand);
		new->speed = SPDPATROL;
		if (!loadedgame)
		  gamestate.killtotal++;
		break;

	case en_officer:
		SpawnNewObj (tilex,tiley,&s_ofcstand);
		new->speed = SPDPATROL;
		if (!loadedgame)
		  gamestate.killtotal++;
		break;

	case en_mutant:
		SpawnNewObj (tilex,tiley,&s_mutstand);
		new->speed = SPDPATROL;
		if (!loadedgame)
		  gamestate.killtotal++;
		break;

	case en_ss:
		SpawnNewObj (tilex,tiley,&s_ssstand);
		new->speed = SPDPATROL;
		if (!loadedgame)
		  gamestate.killtotal++;
		break;
	}


	map = mapsegs[0]+farmapylookup[tiley]+tilex;
	if (*map == AMBUSHTILE)
	{
		tilemap[tilex][tiley] = 0;

		if (*(map+1) >= AREATILE)
			tile = *(map+1);
		if (*(map-mapwidth) >= AREATILE)
			tile = *(map-mapwidth);
		if (*(map+mapwidth) >= AREATILE)
			tile = *(map+mapwidth);
		if ( *(map-1) >= AREATILE)
			tile = *(map-1);

		*map = tile;
		new->areanumber = tile-AREATILE;

		new->flags |= FL_AMBUSH;
	}

	new->obclass = guardobj+which;
	new->hitpoints = starthitpoints[gamestate.difficulty][which];
	new->dir = dir*2;
	new->flags |= FL_SHOOTABLE;
}



/*
===============
=
= SpawnDeadGuard
=
===============
*/

void SpawnDeadGuard (int tilex, int tiley)
{
	SpawnNewObj (tilex,tiley,&s_grddie4);
	new->obclass = inertobj;
}



#ifndef SPEAR
/*
===============
=
= SpawnBoss
=
===============
*/

void SpawnBoss (int tilex, int tiley)
{
	unsigned	far *map,tile;

	SpawnNewObj (tilex,tiley,&s_bossstand);
	new->speed = SPDPATROL;

	new->obclass = bossobj;
	new->hitpoints = starthitpoints[gamestate.difficulty][en_boss];
	new->dir = south;
	new->flags |= FL_SHOOTABLE|FL_AMBUSH;
	if (!loadedgame)
	  gamestate.killtotal++;
}

/*
===============
=
= SpawnGretel
=
===============
*/

void SpawnGretel (int tilex, int tiley)
{
	unsigned	far *map,tile;

	SpawnNewObj (tilex,tiley,&s_gretelstand);
	new->speed = SPDPATROL;

	new->obclass = gretelobj;
	new->hitpoints = starthitpoints[gamestate.difficulty][en_gretel];
	new->dir = north;
	new->flags |= FL_SHOOTABLE|FL_AMBUSH;
	if (!loadedgame)
	  gamestate.killtotal++;
}
#endif

/*
===============
=
= SpawnPatrol
=
===============
*/

void SpawnPatrol (enemy_t which, int tilex, int tiley, int dir)
{
	switch (which)
	{
	case en_guard:
		SpawnNewObj (tilex,tiley,&s_grdpath1);
		new->speed = SPDPATROL;
		if (!loadedgame)
		  gamestate.killtotal++;
		break;

	case en_officer:
		SpawnNewObj (tilex,tiley,&s_ofcpath1);
		new->speed = SPDPATROL;
		if (!loadedgame)
		  gamestate.killtotal++;
		break;

	case en_ss:
		SpawnNewObj (tilex,tiley,&s_sspath1);
		new->speed = SPDPATROL;
		if (!loadedgame)
		  gamestate.killtotal++;
		break;

	case en_mutant:
		SpawnNewObj (tilex,tiley,&s_mutpath1);
		new->speed = SPDPATROL;
		if (!loadedgame)
		  gamestate.killtotal++;
		break;

	case en_dog:
		SpawnNewObj (tilex,tiley,&s_dogpath1);
		new->speed = SPDDOG;
		if (!loadedgame)
		  gamestate.killtotal++;
		break;
	}

	new->obclass = guardobj+which;
	new->dir = dir*2;
	new->hitpoints = starthitpoints[gamestate.difficulty][which];
	new->distance = tileglobal;
	new->flags |= FL_SHOOTABLE;
	new->active = true;

	actorat[new->tilex][new->tiley] = NULL;		// don't use original spot

	switch (dir)
	{
	case 0:
		new->tilex++;
		break;
	case 1:
		new->tiley--;
		break;
	case 2:
		new->tilex--;
		break;
	case 3:
		new->tiley++;
		break;
	}

	actorat[new->tilex][new->tiley] = new;
}



/*
==================
=
= A_DeathScream
=
==================
*/

void A_DeathScream (objtype *ob)
{
#ifndef UPLOAD
#ifndef SPEAR
	if (mapon==9 && !US_RndT())
#else
	if ((mapon==18 || mapon==19) && !US_RndT())
#endif
	{
	 switch(ob->obclass)
	 {
	  case mutantobj:
	  case guardobj:
	  case officerobj:
	  case ssobj:
	  case dogobj:
		PlaySoundLocActor(DEATHSCREAM6SND,ob);
		return;
	 }
	}
#endif

	switch (ob->obclass)
	{
	case mutantobj:
		PlaySoundLocActor(AHHHGSND,ob);
		break;

	case guardobj:
		{
		 int sounds[9]={ DEATHSCREAM1SND,
				 DEATHSCREAM2SND,
				 DEATHSCREAM3SND,
				 DEATHSCREAM4SND,
				 DEATHSCREAM5SND,
				 DEATHSCREAM7SND,
				 DEATHSCREAM8SND,
				 DEATHSCREAM9SND
				 };

		 #ifndef UPLOAD
		 PlaySoundLocActor(sounds[US_RndT()%8],ob);
		 #else
		 PlaySoundLocActor(sounds[US_RndT()%2],ob);
		 #endif
		}
		break;
	case officerobj:
		PlaySoundLocActor(NEINSOVASSND,ob);
		break;
	case ssobj:
		PlaySoundLocActor(LEBENSND,ob);	// JAB
		break;
	case dogobj:
		PlaySoundLocActor(DOGDEATHSND,ob);	// JAB
		break;
#ifndef SPEAR
	case bossobj:
		SD_PlaySound(MUTTISND);				// JAB
		break;
	case schabbobj:
		SD_PlaySound(MEINGOTTSND);
		break;
	case fakeobj:
		SD_PlaySound(HITLERHASND);
		break;
	case mechahitlerobj:
		SD_PlaySound(SCHEISTSND);
		break;
	case realhitlerobj:
		SD_PlaySound(EVASND);
		break;
	case gretelobj:
		SD_PlaySound(MEINSND);
		break;
	case giftobj:
		SD_PlaySound(DONNERSND);
		break;
	case fatobj:
		SD_PlaySound(ROSESND);
		break;
#else
	case spectreobj:
		SD_PlaySound(GHOSTFADESND);
		break;
	case angelobj:
		SD_PlaySound(ANGELDEATHSND);
		break;
	case transobj:
		SD_PlaySound(TRANSDEATHSND);
		break;
	case uberobj:
		SD_PlaySound(UBERDEATHSND);
		break;
	case willobj:
		SD_PlaySound(WILHELMDEATHSND);
		break;
	case deathobj:
		SD_PlaySound(KNIGHTDEATHSND);
		break;
#endif
	}
}


/*
=============================================================================

						 SPEAR ACTORS

=============================================================================
*/

#ifdef SPEAR

void T_Launch (objtype *ob);
void T_Will (objtype *ob);

extern	statetype s_angelshoot1;
extern	statetype s_deathshoot1;
extern	statetype s_spark1;

//
// trans
//
extern	statetype s_transstand;

extern	statetype s_transchase1;
extern	statetype s_transchase1s;
extern	statetype s_transchase2;
extern	statetype s_transchase3;
extern	statetype s_transchase3s;
extern	statetype s_transchase4;

extern	statetype s_transdie0;
extern	statetype s_transdie01;
extern	statetype s_transdie1;
extern	statetype s_transdie2;
extern	statetype s_transdie3;
extern	statetype s_transdie4;

extern	statetype s_transshoot1;
extern	statetype s_transshoot2;
extern	statetype s_transshoot3;
extern	statetype s_transshoot4;
extern	statetype s_transshoot5;
extern	statetype s_transshoot6;
extern	statetype s_transshoot7;
extern	statetype s_transshoot8;


statetype s_transstand	= {false,SPR_TRANS_W1,0,T_Stand,NULL,&s_transstand};

statetype s_transchase1 	= {false,SPR_TRANS_W1,10,T_Chase,NULL,&s_transchase1s};
statetype s_transchase1s	= {false,SPR_TRANS_W1,3,NULL,NULL,&s_transchase2};
statetype s_transchase2 	= {false,SPR_TRANS_W2,8,T_Chase,NULL,&s_transchase3};
statetype s_transchase3 	= {false,SPR_TRANS_W3,10,T_Chase,NULL,&s_transchase3s};
statetype s_transchase3s	= {false,SPR_TRANS_W3,3,NULL,NULL,&s_transchase4};
statetype s_transchase4 	= {false,SPR_TRANS_W4,8,T_Chase,NULL,&s_transchase1};

statetype s_transdie0	= {false,SPR_TRANS_W1,1,NULL,A_DeathScream,&s_transdie01};
statetype s_transdie01	= {false,SPR_TRANS_W1,1,NULL,NULL,&s_transdie1};
statetype s_transdie1	= {false,SPR_TRANS_DIE1,15,NULL,NULL,&s_transdie2};
statetype s_transdie2	= {false,SPR_TRANS_DIE2,15,NULL,NULL,&s_transdie3};
statetype s_transdie3	= {false,SPR_TRANS_DIE3,15,NULL,NULL,&s_transdie4};
statetype s_transdie4	= {false,SPR_TRANS_DEAD,0,NULL,NULL,&s_transdie4};

statetype s_transshoot1 	= {false,SPR_TRANS_SHOOT1,30,NULL,NULL,&s_transshoot2};
statetype s_transshoot2 	= {false,SPR_TRANS_SHOOT2,10,NULL,T_Shoot,&s_transshoot3};
statetype s_transshoot3 	= {false,SPR_TRANS_SHOOT3,10,NULL,T_Shoot,&s_transshoot4};
statetype s_transshoot4 	= {false,SPR_TRANS_SHOOT2,10,NULL,T_Shoot,&s_transshoot5};
statetype s_transshoot5 	= {false,SPR_TRANS_SHOOT3,10,NULL,T_Shoot,&s_transshoot6};
statetype s_transshoot6 	= {false,SPR_TRANS_SHOOT2,10,NULL,T_Shoot,&s_transshoot7};
statetype s_transshoot7 	= {false,SPR_TRANS_SHOOT3,10,NULL,T_Shoot,&s_transshoot8};
statetype s_transshoot8 	= {false,SPR_TRANS_SHOOT1,10,NULL,NULL,&s_transchase1};


/*
===============
=
= SpawnTrans
=
===============
*/

void SpawnTrans (int tilex, int tiley)
{
	unsigned	far *map,tile;

	if (SoundBlasterPresent && DigiMode != sds_Off)
		s_transdie01.tictime = 105;

	SpawnNewObj (tilex,tiley,&s_transstand);
	new->obclass = transobj;
	new->hitpoints = starthitpoints[gamestate.difficulty][en_trans];
	new->flags |= FL_SHOOTABLE|FL_AMBUSH;
	if (!loadedgame)
	  gamestate.killtotal++;
}


//
// uber
//
void T_UShoot (objtype *ob);

extern	statetype s_uberstand;

extern	statetype s_uberchase1;
extern	statetype s_uberchase1s;
extern	statetype s_uberchase2;
extern	statetype s_uberchase3;
extern	statetype s_uberchase3s;
extern	statetype s_uberchase4;

extern	statetype s_uberdie0;
extern	statetype s_uberdie01;
extern	statetype s_uberdie1;
extern	statetype s_uberdie2;
extern	statetype s_uberdie3;
extern	statetype s_uberdie4;
extern	statetype s_uberdie5;

extern	statetype s_ubershoot1;
extern	statetype s_ubershoot2;
extern	statetype s_ubershoot3;
extern	statetype s_ubershoot4;
extern	statetype s_ubershoot5;
extern	statetype s_ubershoot6;
extern	statetype s_ubershoot7;


statetype s_uberstand	= {false,SPR_UBER_W1,0,T_Stand,NULL,&s_uberstand};

statetype s_uberchase1 	= {false,SPR_UBER_W1,10,T_Chase,NULL,&s_uberchase1s};
statetype s_uberchase1s	= {false,SPR_UBER_W1,3,NULL,NULL,&s_uberchase2};
statetype s_uberchase2 	= {false,SPR_UBER_W2,8,T_Chase,NULL,&s_uberchase3};
statetype s_uberchase3 	= {false,SPR_UBER_W3,10,T_Chase,NULL,&s_uberchase3s};
statetype s_uberchase3s	= {false,SPR_UBER_W3,3,NULL,NULL,&s_uberchase4};
statetype s_uberchase4 	= {false,SPR_UBER_W4,8,T_Chase,NULL,&s_uberchase1};

statetype s_uberdie0	= {false,SPR_UBER_W1,1,NULL,A_DeathScream,&s_uberdie01};
statetype s_uberdie01	= {false,SPR_UBER_W1,1,NULL,NULL,&s_uberdie1};
statetype s_uberdie1	= {false,SPR_UBER_DIE1,15,NULL,NULL,&s_uberdie2};
statetype s_uberdie2	= {false,SPR_UBER_DIE2,15,NULL,NULL,&s_uberdie3};
statetype s_uberdie3	= {false,SPR_UBER_DIE3,15,NULL,NULL,&s_uberdie4};
statetype s_uberdie4	= {false,SPR_UBER_DIE4,15,NULL,NULL,&s_uberdie5};
statetype s_uberdie5	= {false,SPR_UBER_DEAD,0,NULL,NULL,&s_uberdie5};

statetype s_ubershoot1 	= {false,SPR_UBER_SHOOT1,30,NULL,NULL,&s_ubershoot2};
statetype s_ubershoot2 	= {false,SPR_UBER_SHOOT2,12,NULL,T_UShoot,&s_ubershoot3};
statetype s_ubershoot3 	= {false,SPR_UBER_SHOOT3,12,NULL,T_UShoot,&s_ubershoot4};
statetype s_ubershoot4 	= {false,SPR_UBER_SHOOT4,12,NULL,T_UShoot,&s_ubershoot5};
statetype s_ubershoot5 	= {false,SPR_UBER_SHOOT3,12,NULL,T_UShoot,&s_ubershoot6};
statetype s_ubershoot6 	= {false,SPR_UBER_SHOOT2,12,NULL,T_UShoot,&s_ubershoot7};
statetype s_ubershoot7 	= {false,SPR_UBER_SHOOT1,12,NULL,NULL,&s_uberchase1};


/*
===============
=
= SpawnUber
=
===============
*/

void SpawnUber (int tilex, int tiley)
{
	unsigned	far *map,tile;

	if (SoundBlasterPresent && DigiMode != sds_Off)
		s_uberdie01.tictime = 70;

	SpawnNewObj (tilex,tiley,&s_uberstand);
	new->obclass = uberobj;
	new->hitpoints = starthitpoints[gamestate.difficulty][en_uber];
	new->flags |= FL_SHOOTABLE|FL_AMBUSH;
	if (!loadedgame)
	  gamestate.killtotal++;
}


/*
===============
=
= T_UShoot
=
===============
*/

void T_UShoot (objtype *ob)
{
	int	dx,dy,dist;

	T_Shoot (ob);

	dx = abs(ob->tilex - player->tilex);
	dy = abs(ob->tiley - player->tiley);
	dist = dx>dy ? dx : dy;
	if (dist <= 1)
		TakeDamage (10,ob);
}


//
// will
//
extern	statetype s_willstand;

extern	statetype s_willchase1;
extern	statetype s_willchase1s;
extern	statetype s_willchase2;
extern	statetype s_willchase3;
extern	statetype s_willchase3s;
extern	statetype s_willchase4;

extern	statetype s_willdie1;
extern	statetype s_willdie2;
extern	statetype s_willdie3;
extern	statetype s_willdie4;
extern	statetype s_willdie5;
extern	statetype s_willdie6;

extern	statetype s_willshoot1;
extern	statetype s_willshoot2;
extern	statetype s_willshoot3;
extern	statetype s_willshoot4;
extern	statetype s_willshoot5;
extern	statetype s_willshoot6;


statetype s_willstand	= {false,SPR_WILL_W1,0,T_Stand,NULL,&s_willstand};

statetype s_willchase1 	= {false,SPR_WILL_W1,10,T_Will,NULL,&s_willchase1s};
statetype s_willchase1s	= {false,SPR_WILL_W1,3,NULL,NULL,&s_willchase2};
statetype s_willchase2 	= {false,SPR_WILL_W2,8,T_Will,NULL,&s_willchase3};
statetype s_willchase3 	= {false,SPR_WILL_W3,10,T_Will,NULL,&s_willchase3s};
statetype s_willchase3s	= {false,SPR_WILL_W3,3,NULL,NULL,&s_willchase4};
statetype s_willchase4 	= {false,SPR_WILL_W4,8,T_Will,NULL,&s_willchase1};

statetype s_willdeathcam	= {false,SPR_WILL_W1,1,NULL,NULL,&s_willdie1};

statetype s_willdie1	= {false,SPR_WILL_W1,1,NULL,A_DeathScream,&s_willdie2};
statetype s_willdie2	= {false,SPR_WILL_W1,10,NULL,NULL,&s_willdie3};
statetype s_willdie3	= {false,SPR_WILL_DIE1,10,NULL,NULL,&s_willdie4};
statetype s_willdie4	= {false,SPR_WILL_DIE2,10,NULL,NULL,&s_willdie5};
statetype s_willdie5	= {false,SPR_WILL_DIE3,10,NULL,NULL,&s_willdie6};
statetype s_willdie6	= {false,SPR_WILL_DEAD,20,NULL,NULL,&s_willdie6};

statetype s_willshoot1 	= {false,SPR_WILL_SHOOT1,30,NULL,NULL,&s_willshoot2};
statetype s_willshoot2 	= {false,SPR_WILL_SHOOT2,10,NULL,T_Launch,&s_willshoot3};
statetype s_willshoot3 	= {false,SPR_WILL_SHOOT3,10,NULL,T_Shoot,&s_willshoot4};
statetype s_willshoot4 	= {false,SPR_WILL_SHOOT4,10,NULL,T_Shoot,&s_willshoot5};
statetype s_willshoot5 	= {false,SPR_WILL_SHOOT3,10,NULL,T_Shoot,&s_willshoot6};
statetype s_willshoot6 	= {false,SPR_WILL_SHOOT4,10,NULL,T_Shoot,&s_willchase1};


/*
===============
=
= SpawnWill
=
===============
*/

void SpawnWill (int tilex, int tiley)
{
	unsigned	far *map,tile;

	if (SoundBlasterPresent && DigiMode != sds_Off)
		s_willdie2.tictime = 70;

	SpawnNewObj (tilex,tiley,&s_willstand);
	new->obclass = willobj;
	new->hitpoints = starthitpoints[gamestate.difficulty][en_will];
	new->flags |= FL_SHOOTABLE|FL_AMBUSH;
	if (!loadedgame)
	  gamestate.killtotal++;
}


/*
================
=
= T_Will
=
================
*/

void T_Will (objtype *ob)
{
	long move;
	int	dx,dy,dist;
	boolean	dodge;

	dodge = false;
	dx = abs(ob->tilex - player->tilex);
	dy = abs(ob->tiley - player->tiley);
	dist = dx>dy ? dx : dy;

	if (CheckLine(ob))						// got a shot at player?
	{
		if ( US_RndT() < (tics<<3) )
		{
		//
		// go into attack frame
		//
			if (ob->obclass == willobj)
				NewState (ob,&s_willshoot1);
			else if (ob->obclass == angelobj)
				NewState (ob,&s_angelshoot1);
			else
				NewState (ob,&s_deathshoot1);
			return;
		}
		dodge = true;
	}

	if (ob->dir == nodir)
	{
		if (dodge)
			SelectDodgeDir (ob);
		else
			SelectChaseDir (ob);
		if (ob->dir == nodir)
			return;							// object is blocked in
	}

	move = ob->speed*tics;

	while (move)
	{
		if (ob->distance < 0)
		{
		//
		// waiting for a door to open
		//
			OpenDoor (-ob->distance-1);
			if (doorobjlist[-ob->distance-1].action != dr_open)
				return;
			ob->distance = TILEGLOBAL;	// go ahead, the door is now opoen
		}

		if (move < ob->distance)
		{
			MoveObj (ob,move);
			break;
		}

		//
		// reached goal tile, so select another one
		//

		//
		// fix position to account for round off during moving
		//
		ob->x = ((long)ob->tilex<<TILESHIFT)+TILEGLOBAL/2;
		ob->y = ((long)ob->tiley<<TILESHIFT)+TILEGLOBAL/2;

		move -= ob->distance;

		if (dist <4)
			SelectRunDir (ob);
		else if (dodge)
			SelectDodgeDir (ob);
		else
			SelectChaseDir (ob);

		if (ob->dir == nodir)
			return;							// object is blocked in
	}

}


//
// death
//
extern	statetype s_deathstand;

extern	statetype s_deathchase1;
extern	statetype s_deathchase1s;
extern	statetype s_deathchase2;
extern	statetype s_deathchase3;
extern	statetype s_deathchase3s;
extern	statetype s_deathchase4;

extern	statetype s_deathdie1;
extern	statetype s_deathdie2;
extern	statetype s_deathdie3;
extern	statetype s_deathdie4;
extern	statetype s_deathdie5;
extern	statetype s_deathdie6;
extern	statetype s_deathdie7;
extern	statetype s_deathdie8;
extern	statetype s_deathdie9;

extern	statetype s_deathshoot1;
extern	statetype s_deathshoot2;
extern	statetype s_deathshoot3;
extern	statetype s_deathshoot4;
extern	statetype s_deathshoot5;


statetype s_deathstand	= {false,SPR_DEATH_W1,0,T_Stand,NULL,&s_deathstand};

statetype s_deathchase1 	= {false,SPR_DEATH_W1,10,T_Will,NULL,&s_deathchase1s};
statetype s_deathchase1s	= {false,SPR_DEATH_W1,3,NULL,NULL,&s_deathchase2};
statetype s_deathchase2 	= {false,SPR_DEATH_W2,8,T_Will,NULL,&s_deathchase3};
statetype s_deathchase3 	= {false,SPR_DEATH_W3,10,T_Will,NULL,&s_deathchase3s};
statetype s_deathchase3s	= {false,SPR_DEATH_W3,3,NULL,NULL,&s_deathchase4};
statetype s_deathchase4 	= {false,SPR_DEATH_W4,8,T_Will,NULL,&s_deathchase1};

statetype s_deathdeathcam	= {false,SPR_DEATH_W1,1,NULL,NULL,&s_deathdie1};

statetype s_deathdie1	= {false,SPR_DEATH_W1,1,NULL,A_DeathScream,&s_deathdie2};
statetype s_deathdie2	= {false,SPR_DEATH_W1,10,NULL,NULL,&s_deathdie3};
statetype s_deathdie3	= {false,SPR_DEATH_DIE1,10,NULL,NULL,&s_deathdie4};
statetype s_deathdie4	= {false,SPR_DEATH_DIE2,10,NULL,NULL,&s_deathdie5};
statetype s_deathdie5	= {false,SPR_DEATH_DIE3,10,NULL,NULL,&s_deathdie6};
statetype s_deathdie6	= {false,SPR_DEATH_DIE4,10,NULL,NULL,&s_deathdie7};
statetype s_deathdie7	= {false,SPR_DEATH_DIE5,10,NULL,NULL,&s_deathdie8};
statetype s_deathdie8	= {false,SPR_DEATH_DIE6,10,NULL,NULL,&s_deathdie9};
statetype s_deathdie9	= {false,SPR_DEATH_DEAD,0,NULL,NULL,&s_deathdie9};

statetype s_deathshoot1 	= {false,SPR_DEATH_SHOOT1,30,NULL,NULL,&s_deathshoot2};
statetype s_deathshoot2 	= {false,SPR_DEATH_SHOOT2,10,NULL,T_Launch,&s_deathshoot3};
statetype s_deathshoot3 	= {false,SPR_DEATH_SHOOT4,10,NULL,T_Shoot,&s_deathshoot4};
statetype s_deathshoot4 	= {false,SPR_DEATH_SHOOT3,10,NULL,T_Launch,&s_deathshoot5};
statetype s_deathshoot5 	= {false,SPR_DEATH_SHOOT4,10,NULL,T_Shoot,&s_deathchase1};


/*
===============
=
= SpawnDeath
=
===============
*/

void SpawnDeath (int tilex, int tiley)
{
	unsigned	far *map,tile;

	if (SoundBlasterPresent && DigiMode != sds_Off)
		s_deathdie2.tictime = 105;

	SpawnNewObj (tilex,tiley,&s_deathstand);
	new->obclass = deathobj;
	new->hitpoints = starthitpoints[gamestate.difficulty][en_death];
	new->flags |= FL_SHOOTABLE|FL_AMBUSH;
	if (!loadedgame)
	  gamestate.killtotal++;
}

/*
===============
=
= T_Launch
=
===============
*/

void T_Launch (objtype *ob)
{
	long	deltax,deltay;
	float	angle;
	int		iangle;

	deltax = player->x - ob->x;
	deltay = ob->y - player->y;
	angle = atan2 (deltay,deltax);
	if (angle<0)
		angle = M_PI*2+angle;
	iangle = angle/(M_PI*2)*ANGLES;
	if (ob->obclass == deathobj)
	{
		T_Shoot (ob);
		if (ob->state == &s_deathshoot2)
		{
			iangle-=4;
			if (iangle<0)
				iangle+=ANGLES;
		}
		else
		{
			iangle+=4;
			if (iangle>=ANGLES)
				iangle-=ANGLES;
		}
	}

	GetNewActor ();
	new->state = &s_rocket;
	new->ticcount = 1;

	new->tilex = ob->tilex;
	new->tiley = ob->tiley;
	new->x = ob->x;
	new->y = ob->y;
	new->obclass = rocketobj;
	switch(ob->obclass)
	{
	case deathobj:
		new->state = &s_hrocket;
		new->obclass = hrocketobj;
		PlaySoundLocActor (KNIGHTMISSILESND,new);
		break;
	case angelobj:
		new->state = &s_spark1;
		new->obclass = sparkobj;
		PlaySoundLocActor (ANGELFIRESND,new);
		break;
	default:
		PlaySoundLocActor (MISSILEFIRESND,new);
	}

	new->dir = nodir;
	new->angle = iangle;
	new->speed = 0x2000l;
	new->flags = FL_NONMARK;
	new->active = true;
}



//
// angel
//
void A_Relaunch (objtype *ob);
void A_Victory (objtype *ob);
void A_StartAttack (objtype *ob);
void A_Breathing (objtype *ob);

extern	statetype s_angelstand;

extern	statetype s_angelchase1;
extern	statetype s_angelchase1s;
extern	statetype s_angelchase2;
extern	statetype s_angelchase3;
extern	statetype s_angelchase3s;
extern	statetype s_angelchase4;

extern	statetype s_angeldie1;
extern	statetype s_angeldie11;
extern	statetype s_angeldie2;
extern	statetype s_angeldie3;
extern	statetype s_angeldie4;
extern	statetype s_angeldie5;
extern	statetype s_angeldie6;
extern	statetype s_angeldie7;
extern	statetype s_angeldie8;
extern	statetype s_angeldie9;

extern	statetype s_angelshoot1;
extern	statetype s_angelshoot2;
extern	statetype s_angelshoot3;
extern	statetype s_angelshoot4;
extern	statetype s_angelshoot5;
extern	statetype s_angelshoot6;

extern	statetype s_angeltired;
extern	statetype s_angeltired2;
extern	statetype s_angeltired3;
extern	statetype s_angeltired4;
extern	statetype s_angeltired5;
extern	statetype s_angeltired6;
extern	statetype s_angeltired7;

extern	statetype s_spark1;
extern	statetype s_spark2;
extern	statetype s_spark3;
extern	statetype s_spark4;


statetype s_angelstand	= {false,SPR_ANGEL_W1,0,T_Stand,NULL,&s_angelstand};

statetype s_angelchase1 	= {false,SPR_ANGEL_W1,10,T_Will,NULL,&s_angelchase1s};
statetype s_angelchase1s	= {false,SPR_ANGEL_W1,3,NULL,NULL,&s_angelchase2};
statetype s_angelchase2 	= {false,SPR_ANGEL_W2,8,T_Will,NULL,&s_angelchase3};
statetype s_angelchase3 	= {false,SPR_ANGEL_W3,10,T_Will,NULL,&s_angelchase3s};
statetype s_angelchase3s	= {false,SPR_ANGEL_W3,3,NULL,NULL,&s_angelchase4};
statetype s_angelchase4 	= {false,SPR_ANGEL_W4,8,T_Will,NULL,&s_angelchase1};

statetype s_angeldie1	= {false,SPR_ANGEL_W1,1,NULL,A_DeathScream,&s_angeldie11};
statetype s_angeldie11	= {false,SPR_ANGEL_W1,1,NULL,NULL,&s_angeldie2};
statetype s_angeldie2	= {false,SPR_ANGEL_DIE1,10,NULL,A_Slurpie,&s_angeldie3};
statetype s_angeldie3	= {false,SPR_ANGEL_DIE2,10,NULL,NULL,&s_angeldie4};
statetype s_angeldie4	= {false,SPR_ANGEL_DIE3,10,NULL,NULL,&s_angeldie5};
statetype s_angeldie5	= {false,SPR_ANGEL_DIE4,10,NULL,NULL,&s_angeldie6};
statetype s_angeldie6	= {false,SPR_ANGEL_DIE5,10,NULL,NULL,&s_angeldie7};
statetype s_angeldie7	= {false,SPR_ANGEL_DIE6,10,NULL,NULL,&s_angeldie8};
statetype s_angeldie8	= {false,SPR_ANGEL_DIE7,10,NULL,NULL,&s_angeldie9};
statetype s_angeldie9	= {false,SPR_ANGEL_DEAD,130,NULL,A_Victory,&s_angeldie9};

statetype s_angelshoot1 	= {false,SPR_ANGEL_SHOOT1,10,NULL,A_StartAttack,&s_angelshoot2};
statetype s_angelshoot2 	= {false,SPR_ANGEL_SHOOT2,20,NULL,T_Launch,&s_angelshoot3};
statetype s_angelshoot3 	= {false,SPR_ANGEL_SHOOT1,10,NULL,A_Relaunch,&s_angelshoot2};

statetype s_angeltired 	= {false,SPR_ANGEL_TIRED1,40,NULL,A_Breathing,&s_angeltired2};
statetype s_angeltired2	= {false,SPR_ANGEL_TIRED2,40,NULL,NULL,&s_angeltired3};
statetype s_angeltired3	= {false,SPR_ANGEL_TIRED1,40,NULL,A_Breathing,&s_angeltired4};
statetype s_angeltired4	= {false,SPR_ANGEL_TIRED2,40,NULL,NULL,&s_angeltired5};
statetype s_angeltired5	= {false,SPR_ANGEL_TIRED1,40,NULL,A_Breathing,&s_angeltired6};
statetype s_angeltired6	= {false,SPR_ANGEL_TIRED2,40,NULL,NULL,&s_angeltired7};
statetype s_angeltired7	= {false,SPR_ANGEL_TIRED1,40,NULL,A_Breathing,&s_angelchase1};

statetype s_spark1 	= {false,SPR_SPARK1,6,T_Projectile,NULL,&s_spark2};
statetype s_spark2 	= {false,SPR_SPARK2,6,T_Projectile,NULL,&s_spark3};
statetype s_spark3 	= {false,SPR_SPARK3,6,T_Projectile,NULL,&s_spark4};
statetype s_spark4 	= {false,SPR_SPARK4,6,T_Projectile,NULL,&s_spark1};


#pragma argsused
void A_Slurpie (objtype *ob)
{
 SD_PlaySound(SLURPIESND);
}

#pragma argsused
void A_Breathing (objtype *ob)
{
 SD_PlaySound(ANGELTIREDSND);
}

/*
===============
=
= SpawnAngel
=
===============
*/

void SpawnAngel (int tilex, int tiley)
{
	unsigned	far *map,tile;


	if (SoundBlasterPresent && DigiMode != sds_Off)
		s_angeldie11.tictime = 105;

	SpawnNewObj (tilex,tiley,&s_angelstand);
	new->obclass = angelobj;
	new->hitpoints = starthitpoints[gamestate.difficulty][en_angel];
	new->flags |= FL_SHOOTABLE|FL_AMBUSH;
	if (!loadedgame)
	  gamestate.killtotal++;
}


/*
=================
=
= A_Victory
=
=================
*/

#pragma argsused
void A_Victory (objtype *ob)
{
	playstate = ex_victorious;
}


/*
=================
=
= A_StartAttack
=
=================
*/

void A_StartAttack (objtype *ob)
{
	ob->temp1 = 0;
}


/*
=================
=
= A_Relaunch
=
=================
*/

void A_Relaunch (objtype *ob)
{
	if (++ob->temp1 == 3)
	{
		NewState (ob,&s_angeltired);
		return;
	}

	if (US_RndT()&1)
	{
		NewState (ob,&s_angelchase1);
		return;
	}
}




//
// spectre
//
void T_SpectreWait (objtype *ob);
void A_Dormant (objtype *ob);

extern	statetype s_spectrewait1;
extern	statetype s_spectrewait2;
extern	statetype s_spectrewait3;
extern	statetype s_spectrewait4;

extern	statetype s_spectrechase1;
extern	statetype s_spectrechase2;
extern	statetype s_spectrechase3;
extern	statetype s_spectrechase4;

extern	statetype s_spectredie1;
extern	statetype s_spectredie2;
extern	statetype s_spectredie3;
extern	statetype s_spectredie4;

extern	statetype s_spectrewake;

statetype s_spectrewait1	= {false,SPR_SPECTRE_W1,10,T_Stand,NULL,&s_spectrewait2};
statetype s_spectrewait2	= {false,SPR_SPECTRE_W2,10,T_Stand,NULL,&s_spectrewait3};
statetype s_spectrewait3	= {false,SPR_SPECTRE_W3,10,T_Stand,NULL,&s_spectrewait4};
statetype s_spectrewait4	= {false,SPR_SPECTRE_W4,10,T_Stand,NULL,&s_spectrewait1};

statetype s_spectrechase1	= {false,SPR_SPECTRE_W1,10,T_Ghosts,NULL,&s_spectrechase2};
statetype s_spectrechase2	= {false,SPR_SPECTRE_W2,10,T_Ghosts,NULL,&s_spectrechase3};
statetype s_spectrechase3	= {false,SPR_SPECTRE_W3,10,T_Ghosts,NULL,&s_spectrechase4};
statetype s_spectrechase4	= {false,SPR_SPECTRE_W4,10,T_Ghosts,NULL,&s_spectrechase1};

statetype s_spectredie1	= {false,SPR_SPECTRE_F1,10,NULL,NULL,&s_spectredie2};
statetype s_spectredie2	= {false,SPR_SPECTRE_F2,10,NULL,NULL,&s_spectredie3};
statetype s_spectredie3	= {false,SPR_SPECTRE_F3,10,NULL,NULL,&s_spectredie4};
statetype s_spectredie4	= {false,SPR_SPECTRE_F4,300,NULL,NULL,&s_spectrewake};
statetype s_spectrewake	= {false,SPR_SPECTRE_F4,10,NULL,A_Dormant,&s_spectrewake};

/*
===============
=
= SpawnSpectre
=
===============
*/

void SpawnSpectre (int tilex, int tiley)
{
	unsigned	far *map,tile;

	SpawnNewObj (tilex,tiley,&s_spectrewait1);
	new->obclass = spectreobj;
	new->hitpoints = starthitpoints[gamestate.difficulty][en_spectre];
	new->flags |= FL_SHOOTABLE|FL_AMBUSH; // |FL_NEVERMARK|FL_NONMARK;
	if (!loadedgame)
	  gamestate.killtotal++;
}


/*
===============
=
= A_Dormant
=
===============
*/

void A_Dormant (objtype *ob)
{
	long	deltax,deltay;
	int	xl,xh,yl,yh;
	int	x,y;
	unsigned	tile;

	deltax = ob->x - player->x;
	if (deltax < -MINACTORDIST || deltax > MINACTORDIST)
		goto moveok;
	deltay = ob->y - player->y;
	if (deltay < -MINACTORDIST || deltay > MINACTORDIST)
		goto moveok;

	return;
moveok:

	xl = (ob->x-MINDIST) >> TILESHIFT;
	xh = (ob->x+MINDIST) >> TILESHIFT;
	yl = (ob->y-MINDIST) >> TILESHIFT;
	yh = (ob->y+MINDIST) >> TILESHIFT;

	for (y=yl ; y<=yh ; y++)
		for (x=xl ; x<=xh ; x++)
		{
			tile = actorat[x][y];
			if (!tile)
				continue;
			if (tile<256)
				return;
			if (((objtype *)tile)->flags&FL_SHOOTABLE)
				return;
		}

	ob->flags |= FL_AMBUSH | FL_SHOOTABLE;
	ob->flags &= ~FL_ATTACKMODE;
	ob->dir = nodir;
	NewState (ob,&s_spectrewait1);
}


#endif

/*
=============================================================================

						 SCHABBS / GIFT / FAT

=============================================================================
*/

#ifndef SPEAR
/*
===============
=
= SpawnGhosts
=
===============
*/

void SpawnGhosts (int which, int tilex, int tiley)
{
	unsigned	far *map,tile;

	switch(which)
	{
	 case en_blinky:
	   SpawnNewObj (tilex,tiley,&s_blinkychase1);
	   break;
	 case en_clyde:
	   SpawnNewObj (tilex,tiley,&s_clydechase1);
	   break;
	 case en_pinky:
	   SpawnNewObj (tilex,tiley,&s_pinkychase1);
	   break;
	 case en_inky:
	   SpawnNewObj (tilex,tiley,&s_inkychase1);
	   break;
	}

	new->obclass = ghostobj;
	new->speed = SPDDOG;

	new->dir = east;
	new->flags |= FL_AMBUSH;
	if (!loadedgame)
	  gamestate.killtotal++;
}



void	T_Gift (objtype *ob);
void	T_GiftThrow (objtype *ob);

void	T_Fat (objtype *ob);
void	T_FatThrow (objtype *ob);

//
// schabb
//
extern	statetype s_schabbstand;

extern	statetype s_schabbchase1;
extern	statetype s_schabbchase1s;
extern	statetype s_schabbchase2;
extern	statetype s_schabbchase3;
extern	statetype s_schabbchase3s;
extern	statetype s_schabbchase4;

extern	statetype s_schabbdie1;
extern	statetype s_schabbdie2;
extern	statetype s_schabbdie3;
extern	statetype s_schabbdie4;
extern	statetype s_schabbdie5;
extern	statetype s_schabbdie6;

extern	statetype s_schabbshoot1;
extern	statetype s_schabbshoot2;

extern	statetype s_needle1;
extern	statetype s_needle2;
extern	statetype s_needle3;
extern	statetype s_needle4;

extern	statetype s_schabbdeathcam;


statetype s_schabbstand	= {false,SPR_SCHABB_W1,0,T_Stand,NULL,&s_schabbstand};

statetype s_schabbchase1 	= {false,SPR_SCHABB_W1,10,T_Schabb,NULL,&s_schabbchase1s};
statetype s_schabbchase1s	= {false,SPR_SCHABB_W1,3,NULL,NULL,&s_schabbchase2};
statetype s_schabbchase2 	= {false,SPR_SCHABB_W2,8,T_Schabb,NULL,&s_schabbchase3};
statetype s_schabbchase3 	= {false,SPR_SCHABB_W3,10,T_Schabb,NULL,&s_schabbchase3s};
statetype s_schabbchase3s	= {false,SPR_SCHABB_W3,3,NULL,NULL,&s_schabbchase4};
statetype s_schabbchase4 	= {false,SPR_SCHABB_W4,8,T_Schabb,NULL,&s_schabbchase1};

statetype s_schabbdeathcam	= {false,SPR_SCHABB_W1,1,NULL,NULL,&s_schabbdie1};

statetype s_schabbdie1	= {false,SPR_SCHABB_W1,10,NULL,A_DeathScream,&s_schabbdie2};
statetype s_schabbdie2	= {false,SPR_SCHABB_W1,10,NULL,NULL,&s_schabbdie3};
statetype s_schabbdie3	= {false,SPR_SCHABB_DIE1,10,NULL,NULL,&s_schabbdie4};
statetype s_schabbdie4	= {false,SPR_SCHABB_DIE2,10,NULL,NULL,&s_schabbdie5};
statetype s_schabbdie5	= {false,SPR_SCHABB_DIE3,10,NULL,NULL,&s_schabbdie6};
statetype s_schabbdie6	= {false,SPR_SCHABB_DEAD,20,NULL,A_StartDeathCam,&s_schabbdie6};

statetype s_schabbshoot1 	= {false,SPR_SCHABB_SHOOT1,30,NULL,NULL,&s_schabbshoot2};
statetype s_schabbshoot2 	= {false,SPR_SCHABB_SHOOT2,10,NULL,T_SchabbThrow,&s_schabbchase1};

statetype s_needle1 	= {false,SPR_HYPO1,6,T_Projectile,NULL,&s_needle2};
statetype s_needle2 	= {false,SPR_HYPO2,6,T_Projectile,NULL,&s_needle3};
statetype s_needle3 	= {false,SPR_HYPO3,6,T_Projectile,NULL,&s_needle4};
statetype s_needle4 	= {false,SPR_HYPO4,6,T_Projectile,NULL,&s_needle1};


//
// gift
//
extern	statetype s_giftstand;

extern	statetype s_giftchase1;
extern	statetype s_giftchase1s;
extern	statetype s_giftchase2;
extern	statetype s_giftchase3;
extern	statetype s_giftchase3s;
extern	statetype s_giftchase4;

extern	statetype s_giftdie1;
extern	statetype s_giftdie2;
extern	statetype s_giftdie3;
extern	statetype s_giftdie4;
extern	statetype s_giftdie5;
extern	statetype s_giftdie6;

extern	statetype s_giftshoot1;
extern	statetype s_giftshoot2;

extern	statetype s_needle1;
extern	statetype s_needle2;
extern	statetype s_needle3;
extern	statetype s_needle4;

extern	statetype s_giftdeathcam;

extern	statetype s_boom1;
extern	statetype s_boom2;
extern	statetype s_boom3;


statetype s_giftstand	= {false,SPR_GIFT_W1,0,T_Stand,NULL,&s_giftstand};

statetype s_giftchase1 	= {false,SPR_GIFT_W1,10,T_Gift,NULL,&s_giftchase1s};
statetype s_giftchase1s	= {false,SPR_GIFT_W1,3,NULL,NULL,&s_giftchase2};
statetype s_giftchase2 	= {false,SPR_GIFT_W2,8,T_Gift,NULL,&s_giftchase3};
statetype s_giftchase3 	= {false,SPR_GIFT_W3,10,T_Gift,NULL,&s_giftchase3s};
statetype s_giftchase3s	= {false,SPR_GIFT_W3,3,NULL,NULL,&s_giftchase4};
statetype s_giftchase4 	= {false,SPR_GIFT_W4,8,T_Gift,NULL,&s_giftchase1};

statetype s_giftdeathcam	= {false,SPR_GIFT_W1,1,NULL,NULL,&s_giftdie1};

statetype s_giftdie1	= {false,SPR_GIFT_W1,1,NULL,A_DeathScream,&s_giftdie2};
statetype s_giftdie2	= {false,SPR_GIFT_W1,10,NULL,NULL,&s_giftdie3};
statetype s_giftdie3	= {false,SPR_GIFT_DIE1,10,NULL,NULL,&s_giftdie4};
statetype s_giftdie4	= {false,SPR_GIFT_DIE2,10,NULL,NULL,&s_giftdie5};
statetype s_giftdie5	= {false,SPR_GIFT_DIE3,10,NULL,NULL,&s_giftdie6};
statetype s_giftdie6	= {false,SPR_GIFT_DEAD,20,NULL,A_StartDeathCam,&s_giftdie6};

statetype s_giftshoot1 	= {false,SPR_GIFT_SHOOT1,30,NULL,NULL,&s_giftshoot2};
statetype s_giftshoot2 	= {false,SPR_GIFT_SHOOT2,10,NULL,T_GiftThrow,&s_giftchase1};


//
// fat
//
extern	statetype s_fatstand;

extern	statetype s_fatchase1;
extern	statetype s_fatchase1s;
extern	statetype s_fatchase2;
extern	statetype s_fatchase3;
extern	statetype s_fatchase3s;
extern	statetype s_fatchase4;

extern	statetype s_fatdie1;
extern	statetype s_fatdie2;
extern	statetype s_fatdie3;
extern	statetype s_fatdie4;
extern	statetype s_fatdie5;
extern	statetype s_fatdie6;

extern	statetype s_fatshoot1;
extern	statetype s_fatshoot2;
extern	statetype s_fatshoot3;
extern	statetype s_fatshoot4;
extern	statetype s_fatshoot5;
extern	statetype s_fatshoot6;

extern	statetype s_needle1;
extern	statetype s_needle2;
extern	statetype s_needle3;
extern	statetype s_needle4;

extern	statetype s_fatdeathcam;


statetype s_fatstand	= {false,SPR_FAT_W1,0,T_Stand,NULL,&s_fatstand};

statetype s_fatchase1 	= {false,SPR_FAT_W1,10,T_Fat,NULL,&s_fatchase1s};
statetype s_fatchase1s	= {false,SPR_FAT_W1,3,NULL,NULL,&s_fatchase2};
statetype s_fatchase2 	= {false,SPR_FAT_W2,8,T_Fat,NULL,&s_fatchase3};
statetype s_fatchase3 	= {false,SPR_FAT_W3,10,T_Fat,NULL,&s_fatchase3s};
statetype s_fatchase3s	= {false,SPR_FAT_W3,3,NULL,NULL,&s_fatchase4};
statetype s_fatchase4 	= {false,SPR_FAT_W4,8,T_Fat,NULL,&s_fatchase1};

statetype s_fatdeathcam	= {false,SPR_FAT_W1,1,NULL,NULL,&s_fatdie1};

statetype s_fatdie1	= {false,SPR_FAT_W1,1,NULL,A_DeathScream,&s_fatdie2};
statetype s_fatdie2	= {false,SPR_FAT_W1,10,NULL,NULL,&s_fatdie3};
statetype s_fatdie3	= {false,SPR_FAT_DIE1,10,NULL,NULL,&s_fatdie4};
statetype s_fatdie4	= {false,SPR_FAT_DIE2,10,NULL,NULL,&s_fatdie5};
statetype s_fatdie5	= {false,SPR_FAT_DIE3,10,NULL,NULL,&s_fatdie6};
statetype s_fatdie6	= {false,SPR_FAT_DEAD,20,NULL,A_StartDeathCam,&s_fatdie6};

statetype s_fatshoot1 	= {false,SPR_FAT_SHOOT1,30,NULL,NULL,&s_fatshoot2};
statetype s_fatshoot2 	= {false,SPR_FAT_SHOOT2,10,NULL,T_GiftThrow,&s_fatshoot3};
statetype s_fatshoot3 	= {false,SPR_FAT_SHOOT3,10,NULL,T_Shoot,&s_fatshoot4};
statetype s_fatshoot4 	= {false,SPR_FAT_SHOOT4,10,NULL,T_Shoot,&s_fatshoot5};
statetype s_fatshoot5 	= {false,SPR_FAT_SHOOT3,10,NULL,T_Shoot,&s_fatshoot6};
statetype s_fatshoot6 	= {false,SPR_FAT_SHOOT4,10,NULL,T_Shoot,&s_fatchase1};


/*
===============
=
= SpawnSchabbs
=
===============
*/

void SpawnSchabbs (int tilex, int tiley)
{
	unsigned	far *map,tile;

	if (DigiMode != sds_Off)
		s_schabbdie2.tictime = 140;
	else
		s_schabbdie2.tictime = 5;

	SpawnNewObj (tilex,tiley,&s_schabbstand);
	new->speed = SPDPATROL;

	new->obclass = schabbobj;
	new->hitpoints = starthitpoints[gamestate.difficulty][en_schabbs];
	new->dir = south;
	new->flags |= FL_SHOOTABLE|FL_AMBUSH;
	if (!loadedgame)
	  gamestate.killtotal++;
}


/*
===============
=
= SpawnGift
=
===============
*/

void SpawnGift (int tilex, int tiley)
{
	unsigned	far *map,tile;

	if (DigiMode != sds_Off)
	  s_giftdie2.tictime = 140;
	else
	  s_giftdie2.tictime = 5;

	SpawnNewObj (tilex,tiley,&s_giftstand);
	new->speed = SPDPATROL;

	new->obclass = giftobj;
	new->hitpoints = starthitpoints[gamestate.difficulty][en_gift];
	new->dir = north;
	new->flags |= FL_SHOOTABLE|FL_AMBUSH;
	if (!loadedgame)
	  gamestate.killtotal++;
}


/*
===============
=
= SpawnFat
=
===============
*/

void SpawnFat (int tilex, int tiley)
{
	unsigned	far *map,tile;

	if (DigiMode != sds_Off)
	  s_fatdie2.tictime = 140;
	else
	  s_fatdie2.tictime = 5;

	SpawnNewObj (tilex,tiley,&s_fatstand);
	new->speed = SPDPATROL;

	new->obclass = fatobj;
	new->hitpoints = starthitpoints[gamestate.difficulty][en_fat];
	new->dir = south;
	new->flags |= FL_SHOOTABLE|FL_AMBUSH;
	if (!loadedgame)
	  gamestate.killtotal++;
}


/*
=================
=
= T_SchabbThrow
=
=================
*/

void T_SchabbThrow (objtype *ob)
{
	long	deltax,deltay;
	float	angle;
	int		iangle;

	deltax = player->x - ob->x;
	deltay = ob->y - player->y;
	angle = atan2 (deltay,deltax);
	if (angle<0)
		angle = M_PI*2+angle;
	iangle = angle/(M_PI*2)*ANGLES;

	GetNewActor ();
	new->state = &s_needle1;
	new->ticcount = 1;

	new->tilex = ob->tilex;
	new->tiley = ob->tiley;
	new->x = ob->x;
	new->y = ob->y;
	new->obclass = needleobj;
	new->dir = nodir;
	new->angle = iangle;
	new->speed = 0x2000l;

	new->flags = FL_NONMARK;
	new->active = true;

	PlaySoundLocActor (SCHABBSTHROWSND,new);
}

/*
=================
=
= T_GiftThrow
=
=================
*/

void T_GiftThrow (objtype *ob)
{
	long	deltax,deltay;
	float	angle;
	int		iangle;

	deltax = player->x - ob->x;
	deltay = ob->y - player->y;
	angle = atan2 (deltay,deltax);
	if (angle<0)
		angle = M_PI*2+angle;
	iangle = angle/(M_PI*2)*ANGLES;

	GetNewActor ();
	new->state = &s_rocket;
	new->ticcount = 1;

	new->tilex = ob->tilex;
	new->tiley = ob->tiley;
	new->x = ob->x;
	new->y = ob->y;
	new->obclass = rocketobj;
	new->dir = nodir;
	new->angle = iangle;
	new->speed = 0x2000l;
	new->flags = FL_NONMARK;
	new->active = true;

	PlaySoundLocActor (MISSILEFIRESND,new);
}



/*
=================
=
= T_Schabb
=
=================
*/

void T_Schabb (objtype *ob)
{
	long move;
	int	dx,dy,dist;
	boolean	dodge;

	dodge = false;
	dx = abs(ob->tilex - player->tilex);
	dy = abs(ob->tiley - player->tiley);
	dist = dx>dy ? dx : dy;

	if (CheckLine(ob))						// got a shot at player?
	{

		if ( US_RndT() < (tics<<3) )
		{
		//
		// go into attack frame
		//
			NewState (ob,&s_schabbshoot1);
			return;
		}
		dodge = true;
	}

	if (ob->dir == nodir)
	{
		if (dodge)
			SelectDodgeDir (ob);
		else
			SelectChaseDir (ob);
		if (ob->dir == nodir)
			return;							// object is blocked in
	}

	move = ob->speed*tics;

	while (move)
	{
		if (ob->distance < 0)
		{
		//
		// waiting for a door to open
		//
			OpenDoor (-ob->distance-1);
			if (doorobjlist[-ob->distance-1].action != dr_open)
				return;
			ob->distance = TILEGLOBAL;	// go ahead, the door is now opoen
		}

		if (move < ob->distance)
		{
			MoveObj (ob,move);
			break;
		}

		//
		// reached goal tile, so select another one
		//

		//
		// fix position to account for round off during moving
		//
		ob->x = ((long)ob->tilex<<TILESHIFT)+TILEGLOBAL/2;
		ob->y = ((long)ob->tiley<<TILESHIFT)+TILEGLOBAL/2;

		move -= ob->distance;

		if (dist <4)
			SelectRunDir (ob);
		else if (dodge)
			SelectDodgeDir (ob);
		else
			SelectChaseDir (ob);

		if (ob->dir == nodir)
			return;							// object is blocked in
	}

}




/*
=================
=
= T_Gift
=
=================
*/

void T_Gift (objtype *ob)
{
	long move;
	int	dx,dy,dist;
	boolean	dodge;

	dodge = false;
	dx = abs(ob->tilex - player->tilex);
	dy = abs(ob->tiley - player->tiley);
	dist = dx>dy ? dx : dy;

	if (CheckLine(ob))						// got a shot at player?
	{

		if ( US_RndT() < (tics<<3) )
		{
		//
		// go into attack frame
		//
			NewState (ob,&s_giftshoot1);
			return;
		}
		dodge = true;
	}

	if (ob->dir == nodir)
	{
		if (dodge)
			SelectDodgeDir (ob);
		else
			SelectChaseDir (ob);
		if (ob->dir == nodir)
			return;							// object is blocked in
	}

	move = ob->speed*tics;

	while (move)
	{
		if (ob->distance < 0)
		{
		//
		// waiting for a door to open
		//
			OpenDoor (-ob->distance-1);
			if (doorobjlist[-ob->distance-1].action != dr_open)
				return;
			ob->distance = TILEGLOBAL;	// go ahead, the door is now opoen
		}

		if (move < ob->distance)
		{
			MoveObj (ob,move);
			break;
		}

		//
		// reached goal tile, so select another one
		//

		//
		// fix position to account for round off during moving
		//
		ob->x = ((long)ob->tilex<<TILESHIFT)+TILEGLOBAL/2;
		ob->y = ((long)ob->tiley<<TILESHIFT)+TILEGLOBAL/2;

		move -= ob->distance;

		if (dist <4)
			SelectRunDir (ob);
		else if (dodge)
			SelectDodgeDir (ob);
		else
			SelectChaseDir (ob);

		if (ob->dir == nodir)
			return;							// object is blocked in
	}

}




/*
=================
=
= T_Fat
=
=================
*/

void T_Fat (objtype *ob)
{
	long move;
	int	dx,dy,dist;
	boolean	dodge;

	dodge = false;
	dx = abs(ob->tilex - player->tilex);
	dy = abs(ob->tiley - player->tiley);
	dist = dx>dy ? dx : dy;

	if (CheckLine(ob))						// got a shot at player?
	{

		if ( US_RndT() < (tics<<3) )
		{
		//
		// go into attack frame
		//
			NewState (ob,&s_fatshoot1);
			return;
		}
		dodge = true;
	}

	if (ob->dir == nodir)
	{
		if (dodge)
			SelectDodgeDir (ob);
		else
			SelectChaseDir (ob);
		if (ob->dir == nodir)
			return;							// object is blocked in
	}

	move = ob->speed*tics;

	while (move)
	{
		if (ob->distance < 0)
		{
		//
		// waiting for a door to open
		//
			OpenDoor (-ob->distance-1);
			if (doorobjlist[-ob->distance-1].action != dr_open)
				return;
			ob->distance = TILEGLOBAL;	// go ahead, the door is now opoen
		}

		if (move < ob->distance)
		{
			MoveObj (ob,move);
			break;
		}

		//
		// reached goal tile, so select another one
		//

		//
		// fix position to account for round off during moving
		//
		ob->x = ((long)ob->tilex<<TILESHIFT)+TILEGLOBAL/2;
		ob->y = ((long)ob->tiley<<TILESHIFT)+TILEGLOBAL/2;

		move -= ob->distance;

		if (dist <4)
			SelectRunDir (ob);
		else if (dodge)
			SelectDodgeDir (ob);
		else
			SelectChaseDir (ob);

		if (ob->dir == nodir)
			return;							// object is blocked in
	}

}



/*
=============================================================================

							HITLERS

=============================================================================
*/


//
// fake
//
extern	statetype s_fakestand;

extern	statetype s_fakechase1;
extern	statetype s_fakechase1s;
extern	statetype s_fakechase2;
extern	statetype s_fakechase3;
extern	statetype s_fakechase3s;
extern	statetype s_fakechase4;

extern	statetype s_fakedie1;
extern	statetype s_fakedie2;
extern	statetype s_fakedie3;
extern	statetype s_fakedie4;
extern	statetype s_fakedie5;
extern	statetype s_fakedie6;

extern	statetype s_fakeshoot1;
extern	statetype s_fakeshoot2;
extern	statetype s_fakeshoot3;
extern	statetype s_fakeshoot4;
extern	statetype s_fakeshoot5;
extern	statetype s_fakeshoot6;
extern	statetype s_fakeshoot7;
extern	statetype s_fakeshoot8;
extern	statetype s_fakeshoot9;

extern	statetype s_fire1;
extern	statetype s_fire2;

statetype s_fakestand	= {false,SPR_FAKE_W1,0,T_Stand,NULL,&s_fakestand};

statetype s_fakechase1 	= {false,SPR_FAKE_W1,10,T_Fake,NULL,&s_fakechase1s};
statetype s_fakechase1s	= {false,SPR_FAKE_W1,3,NULL,NULL,&s_fakechase2};
statetype s_fakechase2 	= {false,SPR_FAKE_W2,8,T_Fake,NULL,&s_fakechase3};
statetype s_fakechase3 	= {false,SPR_FAKE_W3,10,T_Fake,NULL,&s_fakechase3s};
statetype s_fakechase3s	= {false,SPR_FAKE_W3,3,NULL,NULL,&s_fakechase4};
statetype s_fakechase4 	= {false,SPR_FAKE_W4,8,T_Fake,NULL,&s_fakechase1};

statetype s_fakedie1	= {false,SPR_FAKE_DIE1,10,NULL,A_DeathScream,&s_fakedie2};
statetype s_fakedie2	= {false,SPR_FAKE_DIE2,10,NULL,NULL,&s_fakedie3};
statetype s_fakedie3	= {false,SPR_FAKE_DIE3,10,NULL,NULL,&s_fakedie4};
statetype s_fakedie4	= {false,SPR_FAKE_DIE4,10,NULL,NULL,&s_fakedie5};
statetype s_fakedie5	= {false,SPR_FAKE_DIE5,10,NULL,NULL,&s_fakedie6};
statetype s_fakedie6	= {false,SPR_FAKE_DEAD,0,NULL,NULL,&s_fakedie6};

statetype s_fakeshoot1 	= {false,SPR_FAKE_SHOOT,8,NULL,T_FakeFire,&s_fakeshoot2};
statetype s_fakeshoot2 	= {false,SPR_FAKE_SHOOT,8,NULL,T_FakeFire,&s_fakeshoot3};
statetype s_fakeshoot3 	= {false,SPR_FAKE_SHOOT,8,NULL,T_FakeFire,&s_fakeshoot4};
statetype s_fakeshoot4 	= {false,SPR_FAKE_SHOOT,8,NULL,T_FakeFire,&s_fakeshoot5};
statetype s_fakeshoot5 	= {false,SPR_FAKE_SHOOT,8,NULL,T_FakeFire,&s_fakeshoot6};
statetype s_fakeshoot6 	= {false,SPR_FAKE_SHOOT,8,NULL,T_FakeFire,&s_fakeshoot7};
statetype s_fakeshoot7 	= {false,SPR_FAKE_SHOOT,8,NULL,T_FakeFire,&s_fakeshoot8};
statetype s_fakeshoot8 	= {false,SPR_FAKE_SHOOT,8,NULL,T_FakeFire,&s_fakeshoot9};
statetype s_fakeshoot9 	= {false,SPR_FAKE_SHOOT,8,NULL,NULL,&s_fakechase1};

statetype s_fire1 	= {false,SPR_FIRE1,6,NULL,T_Projectile,&s_fire2};
statetype s_fire2 	= {false,SPR_FIRE2,6,NULL,T_Projectile,&s_fire1};

//
// hitler
//
extern	statetype s_mechachase1;
extern	statetype s_mechachase1s;
extern	statetype s_mechachase2;
extern	statetype s_mechachase3;
extern	statetype s_mechachase3s;
extern	statetype s_mechachase4;

extern	statetype s_mechadie1;
extern	statetype s_mechadie2;
extern	statetype s_mechadie3;
extern	statetype s_mechadie4;

extern	statetype s_mechashoot1;
extern	statetype s_mechashoot2;
extern	statetype s_mechashoot3;
extern	statetype s_mechashoot4;
extern	statetype s_mechashoot5;
extern	statetype s_mechashoot6;


extern	statetype s_hitlerchase1;
extern	statetype s_hitlerchase1s;
extern	statetype s_hitlerchase2;
extern	statetype s_hitlerchase3;
extern	statetype s_hitlerchase3s;
extern	statetype s_hitlerchase4;

extern	statetype s_hitlerdie1;
extern	statetype s_hitlerdie2;
extern	statetype s_hitlerdie3;
extern	statetype s_hitlerdie4;
extern	statetype s_hitlerdie5;
extern	statetype s_hitlerdie6;
extern	statetype s_hitlerdie7;
extern	statetype s_hitlerdie8;
extern	statetype s_hitlerdie9;
extern	statetype s_hitlerdie10;

extern	statetype s_hitlershoot1;
extern	statetype s_hitlershoot2;
extern	statetype s_hitlershoot3;
extern	statetype s_hitlershoot4;
extern	statetype s_hitlershoot5;
extern	statetype s_hitlershoot6;

extern	statetype s_hitlerdeathcam;

statetype s_mechastand	= {false,SPR_MECHA_W1,0,T_Stand,NULL,&s_mechastand};

statetype s_mechachase1 	= {false,SPR_MECHA_W1,10,T_Chase,A_MechaSound,&s_mechachase1s};
statetype s_mechachase1s	= {false,SPR_MECHA_W1,6,NULL,NULL,&s_mechachase2};
statetype s_mechachase2 	= {false,SPR_MECHA_W2,8,T_Chase,NULL,&s_mechachase3};
statetype s_mechachase3 	= {false,SPR_MECHA_W3,10,T_Chase,A_MechaSound,&s_mechachase3s};
statetype s_mechachase3s	= {false,SPR_MECHA_W3,6,NULL,NULL,&s_mechachase4};
statetype s_mechachase4 	= {false,SPR_MECHA_W4,8,T_Chase,NULL,&s_mechachase1};

statetype s_mechadie1	= {false,SPR_MECHA_DIE1,10,NULL,A_DeathScream,&s_mechadie2};
statetype s_mechadie2	= {false,SPR_MECHA_DIE2,10,NULL,NULL,&s_mechadie3};
statetype s_mechadie3	= {false,SPR_MECHA_DIE3,10,NULL,A_HitlerMorph,&s_mechadie4};
statetype s_mechadie4	= {false,SPR_MECHA_DEAD,0,NULL,NULL,&s_mechadie4};

statetype s_mechashoot1 	= {false,SPR_MECHA_SHOOT1,30,NULL,NULL,&s_mechashoot2};
statetype s_mechashoot2 	= {false,SPR_MECHA_SHOOT2,10,NULL,T_Shoot,&s_mechashoot3};
statetype s_mechashoot3 	= {false,SPR_MECHA_SHOOT3,10,NULL,T_Shoot,&s_mechashoot4};
statetype s_mechashoot4 	= {false,SPR_MECHA_SHOOT2,10,NULL,T_Shoot,&s_mechashoot5};
statetype s_mechashoot5 	= {false,SPR_MECHA_SHOOT3,10,NULL,T_Shoot,&s_mechashoot6};
statetype s_mechashoot6 	= {false,SPR_MECHA_SHOOT2,10,NULL,T_Shoot,&s_mechachase1};


statetype s_hitlerchase1 	= {false,SPR_HITLER_W1,6,T_Chase,NULL,&s_hitlerchase1s};
statetype s_hitlerchase1s	= {false,SPR_HITLER_W1,4,NULL,NULL,&s_hitlerchase2};
statetype s_hitlerchase2 	= {false,SPR_HITLER_W2,2,T_Chase,NULL,&s_hitlerchase3};
statetype s_hitlerchase3 	= {false,SPR_HITLER_W3,6,T_Chase,NULL,&s_hitlerchase3s};
statetype s_hitlerchase3s	= {false,SPR_HITLER_W3,4,NULL,NULL,&s_hitlerchase4};
statetype s_hitlerchase4 	= {false,SPR_HITLER_W4,2,T_Chase,NULL,&s_hitlerchase1};

statetype s_hitlerdeathcam	= {false,SPR_HITLER_W1,10,NULL,NULL,&s_hitlerdie1};

statetype s_hitlerdie1	= {false,SPR_HITLER_W1,1,NULL,A_DeathScream,&s_hitlerdie2};
statetype s_hitlerdie2	= {false,SPR_HITLER_W1,10,NULL,NULL,&s_hitlerdie3};
statetype s_hitlerdie3	= {false,SPR_HITLER_DIE1,10,NULL,A_Slurpie,&s_hitlerdie4};
statetype s_hitlerdie4	= {false,SPR_HITLER_DIE2,10,NULL,NULL,&s_hitlerdie5};
statetype s_hitlerdie5	= {false,SPR_HITLER_DIE3,10,NULL,NULL,&s_hitlerdie6};
statetype s_hitlerdie6	= {false,SPR_HITLER_DIE4,10,NULL,NULL,&s_hitlerdie7};
statetype s_hitlerdie7	= {false,SPR_HITLER_DIE5,10,NULL,NULL,&s_hitlerdie8};
statetype s_hitlerdie8	= {false,SPR_HITLER_DIE6,10,NULL,NULL,&s_hitlerdie9};
statetype s_hitlerdie9	= {false,SPR_HITLER_DIE7,10,NULL,NULL,&s_hitlerdie10};
statetype s_hitlerdie10	= {false,SPR_HITLER_DEAD,20,NULL,A_StartDeathCam,&s_hitlerdie10};

statetype s_hitlershoot1 	= {false,SPR_HITLER_SHOOT1,30,NULL,NULL,&s_hitlershoot2};
statetype s_hitlershoot2 	= {false,SPR_HITLER_SHOOT2,10,NULL,T_Shoot,&s_hitlershoot3};
statetype s_hitlershoot3 	= {false,SPR_HITLER_SHOOT3,10,NULL,T_Shoot,&s_hitlershoot4};
statetype s_hitlershoot4 	= {false,SPR_HITLER_SHOOT2,10,NULL,T_Shoot,&s_hitlershoot5};
statetype s_hitlershoot5 	= {false,SPR_HITLER_SHOOT3,10,NULL,T_Shoot,&s_hitlershoot6};
statetype s_hitlershoot6 	= {false,SPR_HITLER_SHOOT2,10,NULL,T_Shoot,&s_hitlerchase1};



/*
===============
=
= SpawnFakeHitler
=
===============
*/

void SpawnFakeHitler (int tilex, int tiley)
{
	unsigned	far *map,tile;


	if (DigiMode != sds_Off)
	  s_hitlerdie2.tictime = 140;
	else
	  s_hitlerdie2.tictime = 5;

	SpawnNewObj (tilex,tiley,&s_fakestand);
	new->speed = SPDPATROL;

	new->obclass = fakeobj;
	new->hitpoints = starthitpoints[gamestate.difficulty][en_fake];
	new->dir = north;
	new->flags |= FL_SHOOTABLE|FL_AMBUSH;
	if (!loadedgame)
	  gamestate.killtotal++;
}


/*
===============
=
= SpawnHitler
=
===============
*/

void SpawnHitler (int tilex, int tiley)
{
	unsigned	far *map,tile;

	if (DigiMode != sds_Off)
		s_hitlerdie2.tictime = 140;
	else
		s_hitlerdie2.tictime = 5;


	SpawnNewObj (tilex,tiley,&s_mechastand);
	new->speed = SPDPATROL;

	new->obclass = mechahitlerobj;
	new->hitpoints = starthitpoints[gamestate.difficulty][en_hitler];
	new->dir = south;
	new->flags |= FL_SHOOTABLE|FL_AMBUSH;
	if (!loadedgame)
	  gamestate.killtotal++;
}


/*
===============
=
= A_HitlerMorph
=
===============
*/

void A_HitlerMorph (objtype *ob)
{
	unsigned	far *map,tile,hitpoints[4]={500,700,800,900};


	SpawnNewObj (ob->tilex,ob->tiley,&s_hitlerchase1);
	new->speed = SPDPATROL*5;

	new->x = ob->x;
	new->y = ob->y;

	new->distance = ob->distance;
	new->dir = ob->dir;
	new->flags = ob->flags | FL_SHOOTABLE;

	new->obclass = realhitlerobj;
	new->hitpoints = hitpoints[gamestate.difficulty];
}


////////////////////////////////////////////////////////
//
// A_MechaSound
// A_Slurpie
//
////////////////////////////////////////////////////////
void A_MechaSound (objtype *ob)
{
	if (areabyplayer[ob->areanumber])
		PlaySoundLocActor (MECHSTEPSND,ob);
}


#pragma argsused
void A_Slurpie (objtype *ob)
{
 SD_PlaySound(SLURPIESND);
}

/*
=================
=
= T_FakeFire
=
=================
*/

void T_FakeFire (objtype *ob)
{
	long	deltax,deltay;
	float	angle;
	int		iangle;

	deltax = player->x - ob->x;
	deltay = ob->y - player->y;
	angle = atan2 (deltay,deltax);
	if (angle<0)
		angle = M_PI*2+angle;
	iangle = angle/(M_PI*2)*ANGLES;

	GetNewActor ();
	new->state = &s_fire1;
	new->ticcount = 1;

	new->tilex = ob->tilex;
	new->tiley = ob->tiley;
	new->x = ob->x;
	new->y = ob->y;
	new->dir = nodir;
	new->angle = iangle;
	new->obclass = fireobj;
	new->speed = 0x1200l;
	new->flags = FL_NEVERMARK;
	new->active = true;

	PlaySoundLocActor (FLAMETHROWERSND,new);
}



/*
=================
=
= T_Fake
=
=================
*/

void T_Fake (objtype *ob)
{
	long move;
	int	dx,dy,dist;
	boolean	dodge;

	if (CheckLine(ob))			// got a shot at player?
	{
		if ( US_RndT() < (tics<<1) )
		{
		//
		// go into attack frame
		//
			NewState (ob,&s_fakeshoot1);
			return;
		}
	}

	if (ob->dir == nodir)
	{
		SelectDodgeDir (ob);
		if (ob->dir == nodir)
			return;							// object is blocked in
	}

	move = ob->speed*tics;

	while (move)
	{
		if (move < ob->distance)
		{
			MoveObj (ob,move);
			break;
		}

		//
		// reached goal tile, so select another one
		//

		//
		// fix position to account for round off during moving
		//
		ob->x = ((long)ob->tilex<<TILESHIFT)+TILEGLOBAL/2;
		ob->y = ((long)ob->tiley<<TILESHIFT)+TILEGLOBAL/2;

		move -= ob->distance;

		SelectDodgeDir (ob);

		if (ob->dir == nodir)
			return;							// object is blocked in
	}

}

#endif
/*
============================================================================

							STAND

============================================================================
*/


/*
===============
=
= T_Stand
=
===============
*/

void T_Stand (objtype *ob)
{
	SightPlayer (ob);
}


/*
============================================================================

								CHASE

============================================================================
*/

/*
=================
=
= T_Chase
=
=================
*/

void T_Chase (objtype *ob)
{
	long move;
	int	dx,dy,dist,chance;
	boolean	dodge;

	if (gamestate.victoryflag)
		return;

	dodge = false;
	if (CheckLine(ob))	// got a shot at player?
	{
		dx = abs(ob->tilex - player->tilex);
		dy = abs(ob->tiley - player->tiley);
		dist = dx>dy ? dx : dy;
		if (!dist || (dist==1 && ob->distance<0x4000) )
			chance = 300;
		else
			chance = (tics<<4)/dist;

		if ( US_RndT()<chance)
		{
		//
		// go into attack frame
		//
			switch (ob->obclass)
			{
			case guardobj:
				NewState (ob,&s_grdshoot1);
				break;
			case officerobj:
				NewState (ob,&s_ofcshoot1);
				break;
			case mutantobj:
				NewState (ob,&s_mutshoot1);
				break;
			case ssobj:
				NewState (ob,&s_ssshoot1);
				break;
#ifndef SPEAR
			case bossobj:
				NewState (ob,&s_bossshoot1);
				break;
			case gretelobj:
				NewState (ob,&s_gretelshoot1);
				break;
			case mechahitlerobj:
				NewState (ob,&s_mechashoot1);
				break;
			case realhitlerobj:
				NewState (ob,&s_hitlershoot1);
				break;
#else
			case angelobj:
				NewState (ob,&s_angelshoot1);
				break;
			case transobj:
				NewState (ob,&s_transshoot1);
				break;
			case uberobj:
				NewState (ob,&s_ubershoot1);
				break;
			case willobj:
				NewState (ob,&s_willshoot1);
				break;
			case deathobj:
				NewState (ob,&s_deathshoot1);
				break;
#endif
			}
			return;
		}
		dodge = true;
	}

	if (ob->dir == nodir)
	{
		if (dodge)
			SelectDodgeDir (ob);
		else
			SelectChaseDir (ob);
		if (ob->dir == nodir)
			return;							// object is blocked in
	}

	move = ob->speed*tics;

	while (move)
	{
		if (ob->distance < 0)
		{
		//
		// waiting for a door to open
		//
			OpenDoor (-ob->distance-1);
			if (doorobjlist[-ob->distance-1].action != dr_open)
				return;
			ob->distance = TILEGLOBAL;	// go ahead, the door is now opoen
		}

		if (move < ob->distance)
		{
			MoveObj (ob,move);
			break;
		}

		//
		// reached goal tile, so select another one
		//

		//
		// fix position to account for round off during moving
		//
		ob->x = ((long)ob->tilex<<TILESHIFT)+TILEGLOBAL/2;
		ob->y = ((long)ob->tiley<<TILESHIFT)+TILEGLOBAL/2;

		move -= ob->distance;

		if (dodge)
			SelectDodgeDir (ob);
		else
			SelectChaseDir (ob);

		if (ob->dir == nodir)
			return;							// object is blocked in
	}

}


/*
=================
=
= T_Ghosts
=
=================
*/

void T_Ghosts (objtype *ob)
{
	long move;


	if (ob->dir == nodir)
	{
		SelectChaseDir (ob);
		if (ob->dir == nodir)
			return;							// object is blocked in
	}

	move = ob->speed*tics;

	while (move)
	{
		if (move < ob->distance)
		{
			MoveObj (ob,move);
			break;
		}

		//
		// reached goal tile, so select another one
		//

		//
		// fix position to account for round off during moving
		//
		ob->x = ((long)ob->tilex<<TILESHIFT)+TILEGLOBAL/2;
		ob->y = ((long)ob->tiley<<TILESHIFT)+TILEGLOBAL/2;

		move -= ob->distance;

		SelectChaseDir (ob);

		if (ob->dir == nodir)
			return;							// object is blocked in
	}

}

/*
=================
=
= T_DogChase
=
=================
*/

void T_DogChase (objtype *ob)
{
	long 	move;
	int		dist,chance;
	long	dx,dy;


	if (ob->dir == nodir)
	{
		SelectDodgeDir (ob);
		if (ob->dir == nodir)
			return;							// object is blocked in
	}

	move = ob->speed*tics;

	while (move)
	{
	//
	// check for byte range
	//
		dx = player->x - ob->x;
		if (dx<0)
			dx = -dx;
		dx -= move;
		if (dx <= MINACTORDIST)
		{
			dy = player->y - ob->y;
			if (dy<0)
				dy = -dy;
			dy -= move;
			if (dy <= MINACTORDIST)
			{
				NewState (ob,&s_dogjump1);
				return;
			}
		}

		if (move < ob->distance)
		{
			MoveObj (ob,move);
			break;
		}

		//
		// reached goal tile, so select another one
		//

		//
		// fix position to account for round off during moving
		//
		ob->x = ((long)ob->tilex<<TILESHIFT)+TILEGLOBAL/2;
		ob->y = ((long)ob->tiley<<TILESHIFT)+TILEGLOBAL/2;

		move -= ob->distance;

		SelectDodgeDir (ob);

		if (ob->dir == nodir)
			return;							// object is blocked in
	}

}



/*
============================================================================

								PATH

============================================================================
*/


/*
===============
=
= SelectPathDir
=
===============
*/

void SelectPathDir (objtype *ob)
{
	unsigned spot;

	spot = MAPSPOT(ob->tilex,ob->tiley,1)-ICONARROWS;

	if (spot<8)
	{
	// new direction
		ob->dir = spot;
	}

	ob->distance = TILEGLOBAL;

	if (!TryWalk (ob))
		ob->dir = nodir;
}


/*
===============
=
= T_Path
=
===============
*/

void T_Path (objtype *ob)
{
	long 	move;
	long 	deltax,deltay,size;

	if (SightPlayer (ob))
		return;

	if (ob->dir == nodir)
	{
		SelectPathDir (ob);
		if (ob->dir == nodir)
			return;					// all movement is blocked
	}


	move = ob->speed*tics;

	while (move)
	{
		if (ob->distance < 0)
		{
		//
		// waiting for a door to open
		//
			OpenDoor (-ob->distance-1);
			if (doorobjlist[-ob->distance-1].action != dr_open)
				return;
			ob->distance = TILEGLOBAL;	// go ahead, the door is now opoen
		}

		if (move < ob->distance)
		{
			MoveObj (ob,move);
			break;
		}

		if (ob->tilex>MAPSIZE || ob->tiley>MAPSIZE)
		{
			sprintf (str,"T_Path hit a wall at %u,%u, dir %u"
			,ob->tilex,ob->tiley,ob->dir);
			Quit (str);
		}



		ob->x = ((long)ob->tilex<<TILESHIFT)+TILEGLOBAL/2;
		ob->y = ((long)ob->tiley<<TILESHIFT)+TILEGLOBAL/2;
		move -= ob->distance;

		SelectPathDir (ob);

		if (ob->dir == nodir)
			return;					// all movement is blocked
	}
}


/*
=============================================================================

								FIGHT

=============================================================================
*/


/*
===============
=
= T_Shoot
=
= Try to damage the player, based on skill level and player's speed
=
===============
*/

void T_Shoot (objtype *ob)
{
	int	dx,dy,dist;
	int	hitchance,damage;

	hitchance = 128;

	if (!areabyplayer[ob->areanumber])
		return;

	if (!CheckLine (ob))			// player is behind a wall
	  return;

	dx = abs(ob->tilex - player->tilex);
	dy = abs(ob->tiley - player->tiley);
	dist = dx>dy ? dx:dy;

	if (ob->obclass == ssobj || ob->obclass == bossobj)
		dist = dist*2/3;					// ss are better shots

	if (thrustspeed >= RUNSPEED)
	{
		if (ob->flags&FL_VISABLE)
			hitchance = 160-dist*16;		// player can see to dodge
		else
			hitchance = 160-dist*8;
	}
	else
	{
		if (ob->flags&FL_VISABLE)
			hitchance = 256-dist*16;		// player can see to dodge
		else
			hitchance = 256-dist*8;
	}

// see if the shot was a hit

	if (US_RndT()<hitchance)
	{
		if (dist<2)
			damage = US_RndT()>>2;
		else if (dist<4)
			damage = US_RndT()>>3;
		else
			damage = US_RndT()>>4;

		TakeDamage (damage,ob);
	}

	switch(ob->obclass)
	{
	 case ssobj:
	   PlaySoundLocActor(SSFIRESND,ob);
	   break;
#ifndef SPEAR
	 case giftobj:
	 case fatobj:
	   PlaySoundLocActor(MISSILEFIRESND,ob);
	   break;
	 case mechahitlerobj:
	 case realhitlerobj:
	 case bossobj:
	   PlaySoundLocActor(BOSSFIRESND,ob);
	   break;
	 case schabbobj:
	   PlaySoundLocActor(SCHABBSTHROWSND,ob);
	   break;
	 case fakeobj:
	   PlaySoundLocActor(FLAMETHROWERSND,ob);
	   break;
#endif
	 default:
	   PlaySoundLocActor(NAZIFIRESND,ob);
	}

}


/*
===============
=
= T_Bite
=
===============
*/

void T_Bite (objtype *ob)
{
	long	dx,dy;
	int	hitchance,damage;


	PlaySoundLocActor(DOGATTACKSND,ob);	// JAB

	dx = player->x - ob->x;
	if (dx<0)
		dx = -dx;
	dx -= TILEGLOBAL;
	if (dx <= MINACTORDIST)
	{
		dy = player->y - ob->y;
		if (dy<0)
			dy = -dy;
		dy -= TILEGLOBAL;
		if (dy <= MINACTORDIST)
		{
		   if (US_RndT()<180)
		   {
			   TakeDamage (US_RndT()>>4,ob);
			   return;
		   }
		}
	}

	return;
}


#ifndef SPEAR
/*
============================================================================

							BJ VICTORY

============================================================================
*/


//
// BJ victory
//

void T_BJRun (objtype *ob);
void T_BJJump (objtype *ob);
void T_BJDone (objtype *ob);
void T_BJYell (objtype *ob);

void T_DeathCam (objtype *ob);

extern	statetype s_bjrun1;
extern	statetype s_bjrun1s;
extern	statetype s_bjrun2;
extern	statetype s_bjrun3;
extern	statetype s_bjrun3s;
extern	statetype s_bjrun4;

extern	statetype s_bjjump1;
extern	statetype s_bjjump2;
extern	statetype s_bjjump3;
extern	statetype s_bjjump4;


statetype s_bjrun1 	= {false,SPR_BJ_W1,12,T_BJRun,NULL,&s_bjrun1s};
statetype s_bjrun1s	= {false,SPR_BJ_W1,3, NULL,NULL,&s_bjrun2};
statetype s_bjrun2 	= {false,SPR_BJ_W2,8,T_BJRun,NULL,&s_bjrun3};
statetype s_bjrun3 	= {false,SPR_BJ_W3,12,T_BJRun,NULL,&s_bjrun3s};
statetype s_bjrun3s	= {false,SPR_BJ_W3,3, NULL,NULL,&s_bjrun4};
statetype s_bjrun4 	= {false,SPR_BJ_W4,8,T_BJRun,NULL,&s_bjrun1};


statetype s_bjjump1	= {false,SPR_BJ_JUMP1,14,T_BJJump,NULL,&s_bjjump2};
statetype s_bjjump2	= {false,SPR_BJ_JUMP2,14,T_BJJump,T_BJYell,&s_bjjump3};
statetype s_bjjump3	= {false,SPR_BJ_JUMP3,14,T_BJJump,NULL,&s_bjjump4};
statetype s_bjjump4	= {false,SPR_BJ_JUMP4,300,NULL,T_BJDone,&s_bjjump4};


statetype s_deathcam = {false,0,0,NULL,NULL,NULL};


/*
===============
=
= SpawnBJVictory
=
===============
*/

void SpawnBJVictory (void)
{
	unsigned	far *map,tile;

	SpawnNewObj (player->tilex,player->tiley+1,&s_bjrun1);
	new->x = player->x;
	new->y = player->y;
	new->obclass = bjobj;
	new->dir = north;
	new->temp1 = 6;			// tiles to run forward
}



/*
===============
=
= T_BJRun
=
===============
*/

void T_BJRun (objtype *ob)
{
	long 	move;

	move = BJRUNSPEED*tics;

	while (move)
	{
		if (move < ob->distance)
		{
			MoveObj (ob,move);
			break;
		}


		ob->x = ((long)ob->tilex<<TILESHIFT)+TILEGLOBAL/2;
		ob->y = ((long)ob->tiley<<TILESHIFT)+TILEGLOBAL/2;
		move -= ob->distance;

		SelectPathDir (ob);

		if ( !(--ob->temp1) )
		{
			NewState (ob,&s_bjjump1);
			return;
		}
	}
}


/*
===============
=
= T_BJJump
=
===============
*/

void T_BJJump (objtype *ob)
{
	long 	move;

	move = BJJUMPSPEED*tics;
	MoveObj (ob,move);
}


/*
===============
=
= T_BJYell
=
===============
*/

void T_BJYell (objtype *ob)
{
	PlaySoundLocActor(YEAHSND,ob);	// JAB
}


/*
===============
=
= T_BJDone
=
===============
*/

#pragma argsused
void T_BJDone (objtype *ob)
{
	playstate = ex_victorious;				// exit castle tile
}



//===========================================================================


/*
===============
=
= CheckPosition
=
===============
*/

boolean	CheckPosition (objtype *ob)
{
	int	x,y,xl,yl,xh,yh;
	objtype *check;

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

	return true;
}


/*
===============
=
= A_StartDeathCam
=
===============
*/

void	A_StartDeathCam (objtype *ob)
{
	long	dx,dy;
	float	fangle;
	long    xmove,ymove;
	long	dist;
	int		temp,i;

	FinishPaletteShifts ();

	VW_WaitVBL (100);

	if (gamestate.victoryflag)
	{
		playstate = ex_victorious;				// exit castle tile
		return;
	}

	gamestate.victoryflag = true;
	VW_Bar (0,0,320,200-STATUSLINES,127);
	FizzleFade(bufferofs,displayofs,320,200-STATUSLINES,70,false);

	PM_UnlockMainMem ();
	CA_UpLevel ();
	CacheLump(LEVELEND_LUMP_START,LEVELEND_LUMP_END);
	#ifdef JAPAN
	#ifndef JAPDEMO
	CA_CacheScreen(C_LETSSEEPIC);
	#endif
	#else
	Write(0,7,STR_SEEAGAIN);
	#endif
	CA_DownLevel ();
	PM_CheckMainMem ();

	VW_UpdateScreen ();

	IN_UserInput(300);

//
// line angle up exactly
//
	NewState (player,&s_deathcam);

	player->x = gamestate.killx;
	player->y = gamestate.killy;

	dx = ob->x - player->x;
	dy = player->y - ob->y;

	fangle = atan2(dy,dx);			// returns -pi to pi
	if (fangle<0)
		fangle = M_PI*2+fangle;

	player->angle = fangle/(M_PI*2)*ANGLES;

//
// try to position as close as possible without being in a wall
//
	dist = 0x14000l;
	do
	{
		xmove = FixedByFrac(dist,costable[player->angle]);
		ymove = -FixedByFrac(dist,sintable[player->angle]);

		player->x = ob->x - xmove;
		player->y = ob->y - ymove;
		dist += 0x1000;

	} while (!CheckPosition (player));
	plux = player->x >> UNSIGNEDSHIFT;			// scale to fit in unsigned
	pluy = player->y >> UNSIGNEDSHIFT;
	player->tilex = player->x >> TILESHIFT;		// scale to tile values
	player->tiley = player->y >> TILESHIFT;

//
// go back to the game
//
	temp = bufferofs;
	for (i=0;i<3;i++)
	{
		bufferofs = screenloc[i];
		DrawPlayBorder ();
	}
	bufferofs = temp;

	fizzlein = true;
	switch (ob->obclass)
	{
#ifndef SPEAR
	case schabbobj:
		NewState (ob,&s_schabbdeathcam);
		break;
	case realhitlerobj:
		NewState (ob,&s_hitlerdeathcam);
		break;
	case giftobj:
		NewState (ob,&s_giftdeathcam);
		break;
	case fatobj:
		NewState (ob,&s_fatdeathcam);
		break;
#endif
	}

}

#endif