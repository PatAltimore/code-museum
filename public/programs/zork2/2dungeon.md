---
title: "2dungeon.zil"
program: "Zork II"
program_slug: "zork2"
file_path: "2dungeon.zil"
language: "ZIL (Zork Implementation Language)"
github_url: "https://github.com/historicalsource/zork2/blob/master/2dungeon.zil"
year: 1981
author: "Blank, Lebling, Daniels, Anderson"
slug: "2dungeon"
order: 9
description: "The world of Zork II as data: every room, exit and object, from the Barrow to the Bank of Zork and the Wizard's Workshop."

summary:
  - point: "A room is a ZIL form that lists its description, flags, exits and the scenery objects it shares"
    link: "https://en.wikipedia.org/wiki/Zork_II"
    link_label: "Zork II"
  - point: "Exits come in five kinds, from plain rooms to doors and conditions, and the walk routine tells them apart by size"
    link: "https://en.wikipedia.org/wiki/Z-machine"
    link_label: "Z-machine"
  - point: "Objects carry the properties the engine reads: descriptions, flags, synonyms, size and treasure value"
    link: "https://en.wikipedia.org/wiki/Infocom"
    link_label: "Infocom"

enhancements:
  - id: "go-routine"
    line_start: 1
    line_end: 31
    title: "GO: Where the Game Begins"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "GO is the routine the Z-machine runs at start-up. The DIRECTIONS line declares the direction words, including the unusual LAND and CROSS. GO sets the lexical buffer's limit to 59 words, queues the Wizard's first appearance to run in four turns and the lantern's burnout for 200 turns later, and then performs two chores that a comment calls 'junk the compiler can't do': it sets the balloon's and the bucket's vehicle type, and stores a direction in the SIZE property of four wall objects. It makes the adventurer both winner and player, places them in the Barrow, prints the version banner on the first run, describes the room with V-LOOK and enters MAIN-LOOP. The trailing AGAIN restarts the routine if the loop ever returns. The whole dungeon starts from these thirty lines."
  - id: "scenery-objects"
    line_start: 33
    line_end: 115
    title: "Scenery That Rooms Share"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "Streams, chasms, mosses, a rose bush, bridges, tunnels and walls appear in several rooms, so each is defined once in LOCAL-GLOBALS with NDESCBIT, which keeps it out of the list of things in a room, and each room that has one names it in its GLOBAL property. The parser's GLOBAL-CHECK, in gparser, is the routine that consults that list when the player mentions a noun. Each scenery object has an ACTION routine for the verbs a player might try, so examining the moss or trying to cross the chasm produces a specific reply and not a bland refusal. The two globals at the top, SECRET-DOOR and GNOME-DOOR-FLAG, are declared under a 'conditional exits' subtitle."
  - id: "water-wish-well"
    line_start: 116
    line_end: 137
    title: "Water, Wishes and the Well"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "GLOBAL-WATER is available in any room that lists it and carries DRINKBIT, which lets V-EAT treat it as drinkable. Its action routine, WATER-FCN in 2actions, makes it behave like a liquid. WISH, with the synonyms 'wish' and 'bless', lives in GLOBAL-OBJECTS so it is understood everywhere, and WELL is the magic well of the Alice section. The answer to the riddle in the riddle room is 'well'."
  - id: "wall-objects"
    line_start: 138
    line_end: 172
    title: "Four Walls That Remember Their Direction"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "SEWL, SWWL, SSWL and SNWL are the east, west, south and north walls shared by the Bank of Zork rooms. Each has a SIZE property of zero in the source, with a comment showing the intended value such as P?NORTH. The compiler could not store a direction constant there, so GO patches the four values at start-up, presumably so that the bank code can tell which wall is meant. It is a small hack: SIZE, a property meant for weight, is reused as a general number slot."
  - id: "barrow"
    line_start: 178
    line_end: 189
    title: "The Barrow: A Room With No Way Out"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "The first room is the Barrow, and its structure shows every part of a ROOM form. IN ROOMS puts it in the room tree. LDESC is the long description printed on a first visit and in verbose mode. DESC is the short name shown in brief mode. FLAGS lists RLANDBIT, which marks it as solid ground, and ONBIT, which makes it lit. SOUTH TO NARROW-TUNNEL is a plain exit. OUT is followed by a string and no room, which is an exit that only gives a message, here that the door shut behind the player. The lamp and the elvish sword lie on the floor of this room, put there by the objects that name it as their location. A player's first moves are therefore to pick up the two things that will matter most."
  - id: "room-anatomy"
    line_start: 191
    line_end: 261
    title: "The Great Cavern and Its Neighbours"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "These five rooms show how exits and scenery combine. NARROW-TUNNEL has a CROSS exit and a SOUTH exit to the same bridge, so either word works, and a DOWN exit that is only a message. GLOBAL lists the shared objects the room mentions: the bridge, the chasm, the stream and the moss. PSEUDO, as in the Great Cavern, defines words that exist only as scenery with a routine to answer them, here stalagmites and stalactites. Rooms without ONBIT, like the Dark Tunnel, are dark and need the lamp. SHALLOW-FORD offers CROSS as well as SOUTH to match the description. Compactness is the point: a dozen lines describe a place, its light, its exits and its decor."
  - id: "garden-unicorn"
    line_start: 265
    line_end: 296
    title: "A Garden Underground and a Twin Unicorn"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "The formal garden is an indoor garden in a cavern, lit by glowing moss. Two unicorn objects exist. UNICORN is the real creature, with ACTORBIT and TRYTAKEBIT, plus OPENBIT and CONTBIT, which make it a container, presumably for the ribbon and key. GLOBAL-UNICORN, in LOCAL-GLOBALS, is a stand-in so the player can type 'unicorn' from any garden room and get a sensible reply such as 'The unicorn is way up at the north end of the garden.' The pairing of a real object with a global twin is used for other creatures, such as Cerberus and the princess, and solves the problem of a thing the player can see in one place and refer to in another. GARDEN-NORTH has an ACTION property that starts the garden's timed events when the player enters."
  - id: "dragon-room-exit"
    line_start: 431
    line_end: 460
    title: "A Conditional Exit"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dragon"
    image_url: ""
    image_caption: ""
    content: "In the Dragon Room the NORTH and IN exits read 'TO DRAGON-LAIR IF ICE-MELTED ELSE' followed by a message. This is a conditional exit: V-WALK sees an exit of the fourth kind, reads the global flag, and either moves the player or prints the string. The flag is set by I-DRAGON in 2actions when the dragon melts the glacier, so the solution to a puzzle that spans three rooms is expressed as a single global variable and two lines of exit syntax. The lair has two exit words, south and out, and both lead back to the Dragon Room."
  - id: "dragon-treasure"
    line_start: 462
    line_end: 524
    title: "The Chest, the Statuette and the Princess"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "The lair holds a rotten chest, a golden statuette in it, a huge red dragon in the other room and a dead dragon waiting off stage. The chest is a container with a capacity and size of forty; the statuette has VALUE 20, which ITAKE and V-PUT score once, and the STAGGERED flag, which JIGS-UP uses to find treasures to put in the Wizard's case when the player dies. Objects can have two descriptions: FDESC, the first-time text, and LDESC for later. The dead dragon has a SIZE of 400 and is moved into the stream by the glacier scene. The princess and her global twin are defined here; her behaviour is in 2actions. Everything a puzzle needs is declared here as data and then given behaviour elsewhere."
  - id: "baseball-bat"
    line_start: 706
    line_end: 715
    title: "Babe Flathead's Club"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "The wooden club is invisible until the diamond maze makes it appear. It has WEAPONBIT, BURNBIT and READBIT, and when read it says that the words 'Babe Flathead' are burned into the wood. The name is an evident play on Babe Ruth, and fits the maze's setting as a baseball diamond. TEXT is the property that V-READ prints."
  - id: "diamond-rooms"
    line_start: 727
    line_end: 842
    title: "Nine Rooms That Look Alike"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "The diamond maze uses nine rooms with the same short name, the same long description and the same action routine, DIAMOND-MOTION. Only their exit lists differ, mostly diagonal connections, and a shared GLOBAL window object. The identical text is deliberate: the player has to track position by their moves, not by what they read. Making each room a separate object with its own exits keeps the engine unaware that the maze is special; the cleverness lives in the action routine, which overrides movement in 2actions. The hidden rule for finding the exit lives in that routine."
  - id: "cerberus-crypt"
    line_start: 851
    line_end: 910
    title: "Cerberus Guards the Crypt"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "The Cerberus Room has two conditional exits, east and in, that depend on the flag CERBERUS-LEASHED, and a stair up to the maze. The three-headed dog sits in the room and has a global twin in LOCAL-GLOBALS that says 'He's not here.' Rooms have a VALUE property, and entering this room earns ten points, the anteroom three and the crypt two, because GOTO scores a room on arrival. The crypt door uses a different exit syntax, 'IF CRYPT-DOOR IS OPEN', which is a door exit that tests the door object's OPENBIT. The south exit from the crypt is conditional on DIM-DOOR-FLAG, a secret door that is invisible until found. Both exits make the player act before they can progress."
  - id: "zork3-landing"
    line_start: 946
    line_end: 951
    title: "The Landing to Zork III"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "ZORK3 is a room named 'Landing' with a single action routine. The secret door from the crypt leads here, and its name and the special case in DESCRIBE-ROOM suggest it is the hand-off to the third game. The room has ONBIT so it is lit, a blank LDESC, and ZORK3-FCN to print its text. DESCRIBE-ROOM in gverbs has a special case that prints this room's description even in superbrief mode, which is a clue that it matters."
  - id: "wizard-door"
    line_start: 957
    line_end: 990
    title: "The Lizard and the Workshop Door"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "The Guarded Room sits between the Cobwebby Corridor and the Wizard's Workshop. Its south exit is a door exit conditional on WIZ-DOOR being open. The lizard, DOOR-KEEPER, has a global description and an ACTION routine in 2actions that handles gifts. The workshop itself has VALUE 10 for entering it, a west exit to the workbench room and a south exit to the trophy room. The Wizard of Frobozz is the title character, but the game makes the player enter his home through a puzzle door instead of through a boss fight."
  - id: "carousel-riddle"
    line_start: 1253
    line_end: 1296
    title: "The Carousel and Rooms From Old Zork"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "The Carousel Room has eight exits to eight different rooms, and the action routine in 2actions scrambles movement. The blank LDESC means the room prints its own description at M-LOOK. A comment then introduces the Riddle Room and the rooms after it as 'rooms from old Zork', presumably a reference to the original MIT Zork that Infocom adapted. The riddle room's east exit is conditional on RIDDLE-DOOR being open, and the Pearl Room connects the riddle room to the bottom of the well."
  - id: "volcano"
    line_start: 1302
    line_end: 1414
    title: "The Volcano in the Air"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "The volcano area is a vertical space. VOLCANO-BOTTOM has RLANDBIT and NONLANDBIT, so both walkers and vehicles in flight can be there. VAIR-1 to VAIR-4 are rooms in the air with NONLANDBIT and NWALLBIT, and VAIR-1 lists no exits at all: a balloon's movement, not the player's, moves between them. The ledges, a library, a view point and a dusty safe room are other places in the same area. The global BLOC at the end stores the balloon's current location. This is how a game with no vertical coordinate system handles a flight."
  - id: "alice"
    line_start: 1474
    line_end: 1526
    title: "Alice in Wonderland, Underground"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "A subtitle announces 'Alice in Wonderland', and the rooms follow it: a well, a tea room set for a mad tea party, a room of posts, a pool of tears. The top of the well says 'Well done' in its description and awards ten points for reaching it. Its DOWN exit is only a message, 'It's a long way down!'. The Tea Room has a four-inch hole as a PSEUDO object whose routine answers that the player could never fit. These small touches borrow the book's logic that size changes everything, which the posts-room code uses when it says an object is much larger than you are."
  - id: "bank"
    line_start: 1559
    line_end: 1680
    title: "The Bank of Zork"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "The Bank of Zork is a ruined institution with a long description that jokes about the Flathead family's histories. From the entrance hall the player can go to two teller's rooms, a pair of viewing rooms, a depository and a chairman's office. The depository's west and east exits are not rooms but routines, 'PER BKLEAVEW' and 'PER BKLEAVEE', which refuse to let the player leave while carrying bank property. The small room and the vault share the same four wall objects, which is how the curtain puzzle in 2actions connects rooms that have no exits of their own. The vault is described as having no doors."
  - id: "matchbook"
    line_start: 1681
    line_end: 1695
    title: "A Matchbook Advertising Zork I"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "The matchbook on the gazebo table says 'Visit Exotic ZORK I', and its text, readable through the TEXT property, adds that the Frobozz Magic Travel Agency or a local computer store has details. It is a piece of in-game advertising, a commercial for the earlier game placed in the sequel's world. MATCH-FCN and I-MATCH in 2actions handle the matches, and MATCH-COUNT starts at six. SIZE 2 makes it carryable at almost no cost. Its use as a fuse-lighter for the brick connects this joke to one of the game's puzzles."
  - id: "palantir-rooms"
    line_start: 1700
    line_end: 1721
    title: "A Dreary Room and a Tiny Room"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "The palantir rooms are a self-contained puzzle area built around crystal spheres, palantirs in the Tolkien sense. DREARY-ROOM and TINY-ROOM are joined by a door whose state controls the exits, 'IF PDOOR IS OPEN'; the Tiny Room also leads down to the ravine ledge. Both list the same two global objects, the door and the window, which means the puzzle's logic is spread across the PDOOR and PWINDOW objects and the lids, keyholes, keys and four palantirs defined later in the file and handled in 2actions. Describing a puzzle as a set of shared objects between two rooms is the same technique as the bank's walls."
  - id: "balloon-objects"
    line_start: 1727
    line_end: 1763
    title: "The Balloon and Its Label"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "The basket is the vehicle: VEHBIT and OPENBIT make it something the player can enter, CAPACITY 100 and SIZE 70 limit what it holds, and VTYPE zero is overwritten at start-up with NONLANDBIT so it travels where a walker can not. Both ACTION and DESCFCN name BALLOON-FCN, so one routine handles verbs and builds the description, as seen in 2actions. The blue label appears when the bag inflates and tells the player to say LAND to land the balloon; LAND is declared as a direction word at the top of the file. A single object with two hooks into the same routine is enough for a complicated machine."
  - id: "lamp"
    line_start: 1965
    line_end: 1980
    title: "A Strangely Familiar Brass Lantern"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "The lamp is the player's only reliable light and begins on the floor of the Barrow. LIGHTBIT makes it switchable and its ACTION routine, LANTERN in 2actions, tracks the burn time. Its first-time description says it is 'strangely familiar', a wink to anyone who played Zork I, where the same lantern was the central item. If it is thrown, the working lamp is removed and BROKEN-LAMP takes its place with no light bit, which is the second object listed here. A spare object for the broken state is a pattern that recurs, such as the broken case: broken things are separate objects."
  - id: "coin-stamp"
    line_start: 2063
    line_end: 2110
    title: "Zorkmid and Stamp: Treasure With Jokes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "The priceless zorkmid and the Flathead stamp are treasures, each with a VALUE that SCORE-OBJ credits once and the STAGGERED flag that the death routine looks for. They also carry readable text. The coin's inscription gives its worth as 'Ten Thousand Zorkmids' and its motto as 'In Frobs We Trust'. The stamp bears Lord Dimwit Flathead, called 'Our Excessive Leader', and is hidden in the purple book. The FDESC strings tell the player where each lies; the LDESC strings take over after it is moved. Each treasure is a short story told in a handful of properties."
  - id: "wizard-objects"
    line_start: 2604
    line_end: 2656
    title: "The Wizard, His Wand and a Sword"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "The Wizard has ACTORBIT, CONTBIT and OPENBIT, so he can hold things, and he holds the wand. The wand has a VALUE of thirty points. The elvish sword has ORCRIST and GLAMDRING among its synonyms, a nod to Tolkien, and WEAPONBIT. The repellent can lies in a small room and its text reads as the can's label, with a joke warranty. It is the item that stops a grue from attacking, which the lighting code checks through the SPRAYED? global. The genie, a demon with ACTORBIT and INVISIBLE, waits to be summoned. Each of these objects is defined in a few lines and given its personality by a routine in 2actions."
  - id: "dead-palantirs"
    line_start: 2658
    line_end: 2698
    title: "The Rooms of Mist"
    wikipedia_url: "https://en.wikipedia.org/wiki/Grue_(monster)"
    image_url: ""
    image_caption: ""
    content: "The four dead-palantir rooms are the afterlife. They are named Room of Red Mist, Blue Mist, White Mist and Black Mist, connected west to west in a chain, each with ONBIT so that the player can see, and a shared action routine. JIGS-UP in 2actions sends a dead player to the first of them, then the player walks west to recover. GLOBAL-PALANTIR is the sphere the player sees in the first three. They make death a place the player visits."
  - id: "footpad-compass"
    line_start: 2700
    line_end: 2733
    title: "A Footpad and a Compass"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "The last two objects are jokes defined as global objects. FOOTPAD is an old word for a thief, and examining it says exactly that. COMPASS is carried by the player at all times: finding it says it is on your person and that this is lucky, dropping it is refused because it is an extension of yourself, and reading it only gives the directions. Neither has a location in the dungeon. Both exist so that a player who tries a natural word gets an answer in character, a habit repeated across the game."
---

```lisp
"2DUNGEON for
		      Zork II: The Wizard of Frobozz
	(c) Copyright 1981, 1983 Infocom, Inc.  All Rights Reserved."

<DIRECTIONS NORTH EAST WEST SOUTH NE NW SE SW UP DOWN IN OUT LAND CROSS>

<ROUTINE GO () 
	 <PUTB ,P-LEXV 0 59>
;"put interrupts on clock chain"
	 <ENABLE <QUEUE I-WIZARD 4>>
	 <QUEUE I-LANTERN 200>
;"clean up junk compiler can't do"
	 <PUTP ,BALLOON ,P?VTYPE ,NONLANDBIT>
	 <PUTP ,BUCKET ,P?VTYPE ,NONLANDBIT>
	 <PUTP ,SEWL ,P?SIZE ,P?EAST>
	 <PUTP ,SWWL ,P?SIZE ,P?WEST>
	 <PUTP ,SSWL ,P?SIZE ,P?SOUTH>
	 <PUTP ,SNWL ,P?SIZE ,P?NORTH>
;"set up and go"
	 <SETG LIT T>
	 <SETG WINNER ,ADVENTURER>
	 <SETG PLAYER ,ADVENTURER>
	 <SETG HERE ,INSIDE-BARROW>
	 <SETG P-IT-OBJECT <>>
	 <COND (<NOT <FSET? ,HERE ,TOUCHBIT>>
		<V-VERSION>
		<CRLF>)>
	 <MOVE ,WINNER ,HERE>
	 <V-LOOK>
	 <MAIN-LOOP>
	 <AGAIN>>

"SUBTITLE CONDITIONAL EXITS"

<GLOBAL SECRET-DOOR <>>
<GLOBAL GNOME-DOOR-FLAG <>>

"SUBTITLE GLOBAL OBJECTS"

<OBJECT STREAM
	(IN LOCAL-GLOBALS)
	(SYNONYM STREAM)
	(ADJECTIVE FLOWING SMALL)
	(DESC "stream")
	(ACTION STREAM-FCN)
	(FLAGS NDESCBIT)>

<OBJECT CHASM
	(IN LOCAL-GLOBALS)
	(SYNONYM CHASM RAVINE)
	(ADJECTIVE DEEP)
	(DESC "chasm")
	(ACTION CHASM-FCN)
	(FLAGS NDESCBIT)>

<OBJECT MOSS
	(IN LOCAL-GLOBALS)
	(SYNONYM MOSS MOSSES)
	(ADJECTIVE GLOWING PHOSPHORESCENT)
	(DESC "mosses")
	(ACTION MOSS-FCN)
	(FLAGS NDESCBIT TRYTAKEBIT)>

<OBJECT ROSE-BUSH
	(IN LOCAL-GLOBALS)
	(SYNONYM ROSES BUSH ARBOR)
	(ADJECTIVE ROSE)
	(DESC "roses")
	(ACTION ROSE-BUSH-FCN)
	(FLAGS NDESCBIT TRYTAKEBIT)>

<OBJECT BRIDGE
	(IN LOCAL-GLOBALS)
	(SYNONYM BRIDGE)
	(ADJECTIVE STONE WOODEN RICKETY)
	(DESC "bridge")
	(ACTION BRIDGE-FCN)
	(FLAGS NDESCBIT)>

<OBJECT TUNNEL
	(IN GLOBAL-OBJECTS)
	(SYNONYM PASSAGE TUNNEL CRAWLWAY)
        (ADJECTIVE DARK SMOKY)
	(DESC "tunnel")
	(FLAGS NDESCBIT)
	(ACTION TUNNEL-OBJECT)>

<OBJECT EAST-WALL
	(IN GLOBAL-OBJECTS)
	(SYNONYM WALL)
	(ADJECTIVE EAST EASTERN)
	(DESC "east wall")
	(FLAGS NDESCBIT)>

<OBJECT SOUTH-WALL
	(IN GLOBAL-OBJECTS)
	(SYNONYM WALL)
	(ADJECTIVE SOUTH SOUTHE) ;"only 6 chars count and southeast exists"
	(DESC "south wall")
	(FLAGS NDESCBIT)>

<OBJECT WEST-WALL
	(IN GLOBAL-OBJECTS)
	(SYNONYM WALL)
	(ADJECTIVE WEST WESTERN)
	(DESC "west wall")
	(FLAGS NDESCBIT)>

<OBJECT NORTH-WALL
	(IN GLOBAL-OBJECTS)
	(SYNONYM WALL)
	(ADJECTIVE NORTH NORTHE)	;"only six chars used..."
	(DESC "north wall")
	(FLAGS NDESCBIT)>

<OBJECT GLOBAL-WATER
	(IN LOCAL-GLOBALS)
	(SYNONYM WATER QUANTITY)
	(DESC "water")
	(FLAGS DRINKBIT)
	(ACTION WATER-FCN)>

<OBJECT WISH
	(IN GLOBAL-OBJECTS)
	(SYNONYM WISH BLESS)
	(DESC "wish")
	(FLAGS NDESCBIT)
	(ACTION WISH-FCN)>

<OBJECT WELL
        (IN LOCAL-GLOBALS)
	(SYNONYM WELL)
	(ADJECTIVE MAGIC)
	(DESC "well")
	(FLAGS NDESCBIT)
	(ACTION WELL-FCN)>

<OBJECT SEWL		
        (IN LOCAL-GLOBALS)
	(SYNONYM WALL)
	(ADJECTIVE EAST EASTERN)
	(DESC "east wall")
	(FLAGS NDESCBIT)
	(SIZE 0) ;",P?EAST"
	(ACTION SCOLWALL)>

<OBJECT SWWL
        (IN LOCAL-GLOBALS)
	(SYNONYM WALL)
	(ADJECTIVE WEST WESTERN)
	(DESC "west wall")
	(FLAGS NDESCBIT)
	(SIZE 0) ;"P?WEST"
	(ACTION SCOLWALL)>

<OBJECT SSWL
        (IN LOCAL-GLOBALS)
	(SYNONYM WALL)
	(ADJECTIVE SOUTH SOUTHE)
	(DESC "south wall")
	(FLAGS NDESCBIT)
	(SIZE 0) ;"P?SOUTH"
	(ACTION SCOLWALL)>

<OBJECT SNWL
        (IN LOCAL-GLOBALS)
	(SYNONYM WALL)
	(ADJECTIVE NORTH NORTHE)
	(DESC "north wall")
	(FLAGS NDESCBIT)
	(SIZE 0) ;"P?NORTH"
	(ACTION SCOLWALL)>

\

"SUBTITLE ROOMS"

<ROOM INSIDE-BARROW
      (IN ROOMS)
      (LDESC
"You are inside an ancient barrow hidden deep within a dark forest.
The barrow opens into a narrow tunnel at its southern end. You can
see a faint glow at the far end.")
      (DESC "Inside the Barrow")
      (FLAGS RLANDBIT ONBIT)
      (SOUTH TO NARROW-TUNNEL)
      (OUT
"You may not recall, but when you entered, the door of the barrow
shut behind you. There is no way out.")>

<ROOM NARROW-TUNNEL
      (IN ROOMS)
      (LDESC
"You are standing at the southern end of a narrow tunnel where it opens
into a wide cavern. The cavern is dimly illuminated by phosphorescent
mosses clinging to its high ceiling. A deep ravine winds through the
cavern, with a small stream at the bottom. The walls of the ravine are
steep and crumbly. A foot bridge crosses the ravine to the south.")
      (DESC "Narrow Tunnel")
      (FLAGS RLANDBIT ONBIT)
      (NORTH TO INSIDE-BARROW)
      (SOUTH TO FOOT-BRIDGE)
      (CROSS TO FOOT-BRIDGE)
      (DOWN "As you start down, you slip on the crumbling
rocks and pull back, narrowly averting a fatal fall.")
      (GLOBAL BRIDGE CHASM STREAM MOSS)>

<ROOM FOOT-BRIDGE
      (IN ROOMS)
      (LDESC
"You are standing on a crude but sturdy wooden foot bridge crossing a
deep ravine. The path runs north and south from here.")
      (DESC "Foot Bridge")
      (FLAGS RLANDBIT ONBIT)
      (NORTH TO NARROW-TUNNEL)
      (SOUTH TO GREAT-CAVERN)
      (DOWN "The drop would be fatal.")
      (CROSS "You'll have to specify a direction.")
      (GLOBAL BRIDGE CHASM)>

<ROOM GREAT-CAVERN
      (IN ROOMS)
      (LDESC
"This is the center of the great cavern, carved out of the limestone.
Stalactites and stalagmites of many sizes are everywhere. The room glows
with dim light provided by phosphorescent moss, and weird shadows move all
around you. A narrow path winds southwest among the stalagmites, and another
leads northeast.")
      (DESC "Great Cavern")
      (FLAGS RLANDBIT ONBIT)
      (NE TO FOOT-BRIDGE)
      (SW TO SHALLOW-FORD)
      (GLOBAL MOSS)
      (PSEUDO "STALAGMITE" STALA-PSEUDO "STALACTITE" STALA-PSEUDO)>

<ROOM SHALLOW-FORD
      (IN ROOMS)
      (LDESC
"You are at the southern edge of a great cavern. To the south across a
shallow ford is a dark tunnel which looks like it was once
enlarged and smoothed. To the north a narrow path winds among
stalagmites. Dim light illuminates the cavern.")
      (DESC "Shallow Ford")
      (FLAGS RLANDBIT ONBIT)
      (NORTH TO GREAT-CAVERN)
      (SOUTH TO DARK-TUNNEL)
      (CROSS TO DARK-TUNNEL)
      (GLOBAL GLOBAL-WATER)>

<ROOM DARK-TUNNEL
      (IN ROOMS)
      (LDESC
"This is a dark tunnel with dim light to the northeast. The
tunnel is smooth but dusty and filled with twigs and leaves, debris
which becomes deeper as the tunnel branches into a wide corridor leading
southwest and a narrower one leading southeast.")
      (DESC "Dark Tunnel")
      (FLAGS RLANDBIT)
      (NE TO SHALLOW-FORD)
      (SE TO GARDEN-NORTH)
      (SW TO STREAM-PATH)>

"SUBTITLE GARDEN AREA"

<OBJECT GLOBAL-UNICORN
	(IN LOCAL-GLOBALS)
	(SYNONYM UNICORN)
	(DESC "unicorn")
	(ADJECTIVE BEAUTIFUL WHITE)
	(FLAGS ACTORBIT)
	(ACTION GLOBAL-UNICORN-FCN)>

<OBJECT UNICORN
	(SYNONYM UNICORN ANIMAL)
	(ADJECTIVE BEAUTIFUL WHITE)
	(DESC "unicorn")
	(LDESC "There is a beautiful unicorn here cropping grass.")
	(FLAGS ACTORBIT TRYTAKEBIT OPENBIT CONTBIT)
	(ACTION UNICORN-FCN)>

<ROOM GARDEN-NORTH
      (IN ROOMS)
      (LDESC
"This is the northern end of a formal garden. Hedges hide
the cavern walls, and if you don't look up, the illusion is of a cloudy
day outside. The light comes from a large growth of glowing mosses on the
roof of the cave. A break in the hedge is almost overgrown to the north.
A carefully manicured path leads south. In the center of a rosebed is a
small open structure, painted white. It appears to be a gazebo.")
      (DESC "North End of Garden")
      (FLAGS RLANDBIT ONBIT)
      (IN TO GAZEBO-ROOM)
      (NORTH TO DARK-TUNNEL)
      (SOUTH TO FORMAL-GARDEN)
      (ACTION GARDEN-ROOM-FCN)
      (GLOBAL GLOBAL-UNICORN GAZEBO MOSS ROSE-BUSH)>

<ROOM GAZEBO-ROOM
      (IN ROOMS)
      (LDESC
"This is a gazebo in the midst of a formal garden. It is cool and
restful here. A tea table adorns the center of the gazebo.")
      (DESC "Gazebo")
      (FLAGS RLANDBIT ONBIT)
      (OUT TO GARDEN-NORTH)
      (GLOBAL GLOBAL-UNICORN GAZEBO)>

<ROOM FORMAL-GARDEN
      (IN ROOMS)
      (LDESC
"This is the middle part of a formal garden. Hedges hide the cavern
walls and a dim illumination comes from mosses far above.
The path is of small crushed white stones. It winds among bushes and
flower beds from south to north. To the north a small structure
can be seen. To the south are peculiarly shaped bushes.
There is a small gap in the hedges to the west.")
      (DESC "Formal Garden")
      (FLAGS RLANDBIT ONBIT)
      (WEST TO STREAM-PATH)
      (NORTH TO GARDEN-NORTH)
      (SOUTH TO TOPIARY-ROOM)
      (ACTION GARDEN-ROOM-FCN)
      (GLOBAL GLOBAL-UNICORN MOSS)>

<ROOM TOPIARY-ROOM
      (IN ROOMS)
      (LDESC
"This is the southern end of a formal garden. Hedges hide the cavern
walls and mosses provide dim illumination. Fantastically shaped hedges
and bushes are arrayed with geometric precision. They have not recently
been clipped, but you can discern creatures in the shapes of the bushes:
There is a dragon, a unicorn, a great serpent, a huge misshapen dog, and
several human figures. On the west side of the garden the path
leads through a rose arbor into a tunnel.")
      (DESC "Topiary")
      (FLAGS RLANDBIT ONBIT)
      (WEST TO CAROUSEL-ROOM)
      (NORTH TO FORMAL-GARDEN)
      (ACTION GARDEN-ROOM-FCN)
      (GLOBAL GLOBAL-UNICORN MOSS ROSE-BUSH)>

<OBJECT HEDGES
	(IN TOPIARY-ROOM)
	(DESC "hedge")
	(SYNONYM HEDGE HEDGES)
	(FLAGS NDESCBIT)
	(ACTION HEDGES-F)>

<ROUTINE HEDGES-F ()
	 <COND (<VERB? EXAMINE>
		<TELL
"The hedges are shaped like various animals: dogs, serpents, dragons, and
the like, and they are vaguely troubling to look at." CR>)>>

<ROOM STREAM-PATH
      (IN ROOMS)
      (LDESC
"The path follows the south edge of a deep ravine and heads northeast.
A tunnel heads southwest, narrowing to a rather tight crawl. A
faint whirring sound can be heard in that direction. On the east is a
ruined archway choked with vegetation.")
	(DESC "Path Near Stream")
	(FLAGS RLANDBIT)
	(EAST TO FORMAL-GARDEN)
	(NE TO DARK-TUNNEL)
	(SW TO CAROUSEL-ROOM)
	(WEST TO MARBLE-HALL IF SECRET-DOOR)
	(DOWN "The ravine is extremely deep. You would never make it.")
	(GLOBAL BRIDGE CHASM STREAM)>

<ROOM MARBLE-HALL
      (IN ROOMS)
      (LDESC
"This is an arched hall of fine marble. The hall stops abruptly
to the north at a ford across a stream, where the marble is cracked and
broken. Perhaps a flood or collapse of the cave was responsible. To
the south the hall opens into a large room. There is rather annoying
whirring sound coming from that room.")
      (DESC "Marble Hall")
      (FLAGS RLANDBIT)
      (EAST TO STREAM-PATH IF SECRET-DOOR ELSE "That's a wall there.")
      (NORTH TO DEEP-FORD)
      (SOUTH TO CAROUSEL-ROOM)
      (GLOBAL STREAM)>

<ROOM DEEP-FORD
      (IN ROOMS)
      (LDESC
"You are fording the stream at a deep but not impossible spot. The
water is very cold. The walls of the ravine rise to east and west.
There is a small ledge along the north wall of the ravine. To the south
is the entrance to a well-constructed but somewhat ruined hall.")
      (DESC "Deep Ford")
      (FLAGS RLANDBIT)
      (NORTH TO RAVINE-LEDGE)
      (UP TO RAVINE-LEDGE)
      (SOUTH TO MARBLE-HALL)
      (EAST
"The stream deepens rapidly, and you wisely return before drowning.")
      (WEST
"You notice that the ledge above would be a drier route west.")
      (GLOBAL GLOBAL-WATER CHASM STREAM)>

<ROOM RAVINE-LEDGE
      (IN ROOMS)
      (LDESC
"You are on a narrow ledge near the bottom of a deep ravine. The ledge
continues to the west. A precarious climb up to another tiny ledge is
possible. A short scramble down the rock face leads
to a stream.")
      (DESC "Ledge in Ravine")
      (FLAGS RLANDBIT)
      (UP TO TINY-ROOM)
      (SOUTH TO DEEP-FORD)
      (WEST TO LEDGE-TUNNEL)
      (DOWN TO DEEP-FORD)
      (GLOBAL CHASM)>

<ROOM LEDGE-TUNNEL
      (IN ROOMS)
      (LDESC
"A ledge from the east ends here, and a tunnel leads north into the wall.
There is a rather odd smokey odor in the warm air of the tunnel.")
      (DESC "End of Ledge")
      (FLAGS RLANDBIT)
      (EAST TO RAVINE-LEDGE)
      (IN TO DRAGON-ROOM)
      (NORTH TO DRAGON-ROOM)
      (DOWN "There are a lot of sharp rocks down there.")>

<ROOM DRAGON-ROOM
      (IN ROOMS)
      (LDESC
"The room is a large cavern full of broken stone. The walls are
scorched and there are deep scratches on the floor. A sooty dry smell
is very strong here. A paved path winds from a large passage to the
west, through the room, and across a huge stone bridge
to the south. To the east a small crack is visible. A dark and
smokey tunnel leads north.")
      (DESC "Dragon Room")
      (FLAGS RLANDBIT)
      (EAST TO LEDGE-TUNNEL)
      (NORTH TO DRAGON-LAIR
	IF ICE-MELTED ELSE "The dragon hisses at you and blocks your way.")
      (IN TO DRAGON-LAIR
        IF ICE-MELTED ELSE "The dragon hisses at you and blocks your way.")
      (WEST TO FRESCO-ROOM)
      (SOUTH TO STONE-BRIDGE)
      (CROSS TO STONE-BRIDGE)
      (GLOBAL BRIDGE)>

<ROOM DRAGON-LAIR
      (IN ROOMS)
      (LDESC
"You are in the dragon's lair, where the rock walls are scarred by flame.
A blackened doorway leads to the south.")
      (DESC "Dragon's Lair")
      (FLAGS RLANDBIT)
      (SOUTH TO DRAGON-ROOM)
      (OUT TO DRAGON-ROOM)>

<OBJECT CHEST
	(IN DRAGON-LAIR)
	(SYNONYM CHEST TRUNK)
	(ADJECTIVE WOODEN OLD ROTTEN)
	(DESC "rotten wooden chest")
	(FDESC
"A rotten old wooden chest is in one corner among the debris.")
	(FLAGS CONTBIT TAKEBIT)
	(ACTION CHEST-FCN)
	(CAPACITY 40)
	(SIZE 40)>

<OBJECT STATUETTE
	(IN CHEST)
	(SYNONYM TREASURE STATUETTE DRAGON)
	(ADJECTIVE GOLD)
	(DESC "golden dragon statuette")
	(FDESC
"Nestled in the chest is a wrought gold statuette of a dragon.")
	(FLAGS STAGGERED TAKEBIT)
	(VALUE 20)>

<OBJECT DRAGON
	(IN DRAGON-ROOM)
	(SYNONYM DRAGON SMAUG WORM)
	(ADJECTIVE RED HUGE)
	(DESC "huge red dragon")
	(LDESC
"A huge red dragon is lying on the rocks here, watching.")
	(FDESC
"A huge red dragon is lying here, blocking the entrance to a tunnel
leading north. Smoke curls from his nostrils and out between his
teeth.")
	(FLAGS ACTORBIT)
	(ACTION DRAGON-FCN)>

<OBJECT DEAD-DRAGON
	(SYNONYM DRAGON SMAUG WORM)
	(ADJECTIVE RED HUGE DEAD)
	(DESC "huge dead dragon")
	(LDESC
"A huge dead dragon is lying half blocking the stream.")
	(SIZE 400)>

<OBJECT GLOBAL-PRINCESS
	(IN GLOBAL-OBJECTS)
	(SYNONYM PRINCESS WOMAN LADY)
	(ADJECTIVE BEAUTIFUL YOUNG)
	(DESC "beautiful princess")
	(FLAGS ACTORBIT)
	(ACTION PRINCESS-FCN)>

<OBJECT PRINCESS
	(IN DRAGON-LAIR)
	(SYNONYM PRINCESS WOMAN LADY)
	(ADJECTIVE BEAUTIFUL YOUNG)
	(DESC "beautiful princess")
	(LDESC
"A beautiful young woman, wearing a dirty and bedraggled gown, sits
on a rock in the corner. Her hair is unkempt and she is oblivious to
your presence, almost in a trance.")
	(FLAGS ACTORBIT)
	(ACTION PRINCESS-FCN)>

<ROOM FRESCO-ROOM
      (IN ROOMS)
      (LDESC
"A path leads east-west through a room decorated with beautiful frescoes
of someone battling dragons and rescuing fair maidens. It is hard
to tell who is doing this as those parts of the
frescoes have been blackened and cracked by intense heat.")
      (DESC "Fresco Room")
      (FLAGS RLANDBIT)
      (EAST TO DRAGON-ROOM)
      (WEST TO BANK-ENTRANCE)>

<ROOM STONE-BRIDGE
      (IN ROOMS)
      (LDESC
"This is the middle of a ruined but still impressive stone bridge
spanning a deep chasm. Water flows far beneath. A paved path leads
north into a large open space. To the south, the path leads into a misty
tunnel.")
      (DESC "Stone Bridge")
      (FLAGS RLANDBIT)
      (NORTH TO DRAGON-ROOM)
      (SOUTH TO COOL-ROOM)
      (DOWN "It's a long way down.")
      (CROSS "You'll have to specify a direction.")
      (GLOBAL BRIDGE CHASM)>

<ROOM COOL-ROOM
      (IN ROOMS)
      (LDESC
"The room is cool and damp. The air is misty. A twisty path from the
southeast splits here toward a wide northerly stone bridge, and a narrow
westerly tunnel. It is from the latter
that the mist and chill seem to originate.")
      (DESC "Cool Room")
      (FLAGS RLANDBIT)
      (SE TO CAROUSEL-ROOM)
      (NORTH TO STONE-BRIDGE)
      (WEST TO GLACIER-ROOM)
      (CROSS TO STONE-BRIDGE)
      (GLOBAL BRIDGE)>

<ROOM GLACIER-ROOM
      (IN ROOMS)
      (LDESC " ")
      (DESC "Ice Room")
      (FLAGS RLANDBIT)
      (EAST TO COOL-ROOM)
      (WEST TO LAVA-ROOM
       IF ICE-MELTED ELSE "You don't even have an ice-pick.")
      (UP TO LAVA-TUBE)
      (ACTION GLACIER-ROOM-FCN)>

<ROOM LAVA-TUBE
      (IN ROOMS)
      (LDESC
"You are in a tight chimney of solidified lava. It extends up at
least another hundred feet and down to a large room far below. A large
crack opens to the south, probably the result of a shift
in the rock strata.")
      (DESC "Lava Tube")
      (FLAGS RLANDBIT)
      (DOWN TO GLACIER-ROOM)
      (UP TO VOLCANO-VIEW)
      (SOUTH TO COBWEBBY-CORRIDOR)
      (PSEUDO "CRACK" LT-CRACK-PSEUDO)>

<ROUTINE LT-CRACK-PSEUDO ()
	 <COND (<VERB? BOARD THROUGH>
		<DO-WALK ,P?SOUTH>
		<RTRUE>)
	       (T <CC-CRACK-PSEUDO>)>>

<ROOM COBWEBBY-CORRIDOR
      (IN ROOMS)
      (LDESC
"A winding corridor is filled with cobwebs. Some
are broken and the dust on the floor is disturbed. The trend of the
twists and turns is northeast to southwest. On the north side of one
twist, high up, is a narrow crack.")
      (DESC "Cobwebby Corridor")
      (FLAGS RLANDBIT)
      (IN TO LAVA-TUBE)
      (UP TO LAVA-TUBE)
      (NORTH TO LAVA-TUBE)
      (NE TO CAROUSEL-ROOM)
      (SW TO GUARDIAN-ROOM)
      (DOWN TO GUARDIAN-ROOM)
      (PSEUDO "CRACK" CC-CRACK-PSEUDO)>

<ROUTINE CC-CRACK-PSEUDO ()
	 <COND (<VERB? THROUGH BOARD>
		<DO-WALK ,P?NORTH>
		<RTRUE>)
	       (T
		<TELL
"The crack is fairly wide. You should be able to get into it." CR>)>>

<OBJECT WIZ-DOOR
	(IN LOCAL-GLOBALS)
	(SYNONYM DOOR)
	(ADJECTIVE COBWEBBED WOODEN OAK)
	(DESC "door partly covered in cobwebs")
	(FLAGS DOORBIT CONTBIT)
	(ACTION WIZ-DOOR-FCN)>

<ROOM ROOM-8
      (IN ROOMS)
      (LDESC
"This is a small chamber carved out of the rock at the end of a short crawl.
On the wall is crudely chiseled the number \"8\".")
      (DESC "Room 8")
      (FLAGS RLANDBIT)
      (EAST TO CAROUSEL-ROOM)>

<ROOM MENHIR-ROOM
      (IN ROOMS)
      (DESC "Menhir Room")
      (LDESC " ")
      (FLAGS RLANDBIT)
      (NORTH TO CAROUSEL-ROOM)
      (SW TO KENNEL
       IF MENHIR-POSITION
        ELSE "You are trying to walk through an enormous rock.")
      (SOUTH TO STAIRWAY-TOP)
      (ACTION MENHIR-ROOM-FCN)
      (GLOBAL MENHIR)>

<OBJECT GLOBAL-MENHIR
	(IN LOCAL-GLOBALS)
	(SYNONYM MENHIR ROCK STONE)
	(ADJECTIVE HUGE HEAVY ENORMOUS)
	(FLAGS NDESCBIT READBIT)
	(ACTION GLOBAL-MENHIR-F)
	(DESC "enormous menhir")>

<ROUTINE GLOBAL-MENHIR-F ()
	 <TELL "It's not here." CR>>

<OBJECT MENHIR
	(IN LOCAL-GLOBALS)
	(SYNONYM MENHIR ROCK STONE F)
	(ADJECTIVE HUGE HEAVY ENORMOUS)
	(FLAGS NDESCBIT READBIT TURNBIT)
	(DESC "enormous menhir")
	(ACTION MENHIR-FCN)>

<ROOM KENNEL
      (IN ROOMS)
      (LDESC
"This room looks like it was once a kennel for a very large dog (some of
the bones would fit a dinosaur). It apparently hasn't been used for a
long time, as the dust is fairly thick all over. The only
exit is northeast.")
      (DESC "Kennel")
      (FLAGS RLANDBIT)
      (NE TO MENHIR-ROOM
       IF MENHIR-POSITION
        ELSE "You are trying to walk through an enormous rock.")
      (OUT TO MENHIR-ROOM
       IF MENHIR-POSITION
        ELSE "You are trying to walk through an enormous rock.")
      (GLOBAL MENHIR)>

<OBJECT COLLAR
	(IN KENNEL)
	(SYNONYM COLLAR TREASURE)
	(ADJECTIVE HUGE GIANT DOG)
	(FDESC
"A gigantic dog collar, large enough for three rhinoceros-sized dogs, is
lying amidst the debris.")
	(DESC "gigantic dog collar")
	(FLAGS STAGGERED TAKEBIT)
	(ACTION COLLAR-FCN)
	(VALUE 15)>

\

"SUBTITLE DIAMOND MAZE"

<OBJECT BAT
	(SYNONYM CLUB BAT)
	(ADJECTIVE WOODEN BASEBALL)
	(FDESC
"A long wooden club lies on the ground near the diamond-shaped window.
The club is curiously burned at the thick end.")
	(DESC "wooden club")
	(FLAGS INVISIBLE TAKEBIT WEAPONBIT READBIT BURNBIT)
	(TEXT
"The words \"Babe Flathead\" are burned into the wood.")>

<ROOM STAIRWAY-TOP
      (IN ROOMS)
      (LDESC
"A marble stairway leads down into the gloom and a passage leads north.")
      (DESC "Stairway")
      (FLAGS RLANDBIT)
      (DOWN TO DIAMOND-5)
      (NORTH TO MENHIR-ROOM)
      (GLOBAL STAIRS)>

<ROOM DIAMOND-1
      (IN ROOMS)
      (DESC
"Oddly-angled Room")
      (LDESC
"A small room with oddly angled walls and passages in all directions.")
      (FLAGS RLANDBIT)
      (SE TO DIAMOND-5)
      (ACTION DIAMOND-MOTION)
      (GLOBAL DWINDOW)>

<ROOM DIAMOND-2
      (IN ROOMS)
      (DESC
"Oddly-angled Room")
      (LDESC
"A small room with oddly angled walls and passages in all directions.")
      (FLAGS RLANDBIT)
      (SOUTH TO DIAMOND-5)
      (SE TO DIAMOND-6)
      (SW TO DIAMOND-4)
      (ACTION DIAMOND-MOTION)
      (GLOBAL DWINDOW)>

<ROOM DIAMOND-3
      (IN ROOMS)
      (DESC
"Oddly-angled Room")
      (LDESC
"A small room with oddly angled walls and passages in all directions.")
      (FLAGS RLANDBIT)
      (SW TO DIAMOND-5)
      (ACTION DIAMOND-MOTION)
      (GLOBAL DWINDOW)>

<ROOM DIAMOND-4
      (IN ROOMS)
      (DESC
"Oddly-angled Room")
      (LDESC
"A small room with oddly angled walls and passages in all directions.")
      (FLAGS RLANDBIT)
      (NE TO DIAMOND-2)
      (SE TO DIAMOND-8)
      (EAST TO DIAMOND-5)
      (ACTION DIAMOND-MOTION)
      (GLOBAL DWINDOW)>

<ROOM DIAMOND-5
      (IN ROOMS)
      (DESC
"Oddly-angled Room")
      (LDESC
"A small room with oddly angled walls and passages in all directions.")
      (FLAGS RLANDBIT)
      (NW TO DIAMOND-1)
      (NORTH TO DIAMOND-2)
      (NE TO DIAMOND-3)
      (WEST TO DIAMOND-4)
      (EAST TO DIAMOND-6)
      (SW TO DIAMOND-7)
      (SOUTH TO DIAMOND-8)
      (SE TO DIAMOND-9)
      (DOWN TO CERBERUS-ROOM)
      (UP TO STAIRWAY-TOP)
      (ACTION DIAMOND-MOTION)
      (GLOBAL STAIRS DWINDOW)>

<ROOM DIAMOND-6
      (IN ROOMS)
      (DESC
"Oddly-angled Room")
      (LDESC
"A small room with oddly angled walls and passages in all directions.")
      (FLAGS RLANDBIT)
      (WEST TO DIAMOND-5)
      (NW TO DIAMOND-2)
      (SW TO DIAMOND-8)
      (ACTION DIAMOND-MOTION)
      (GLOBAL DWINDOW)>

<ROOM DIAMOND-7
      (IN ROOMS)
      (DESC
"Oddly-angled Room")
      (LDESC
"A small room with oddly angled walls and passages in all directions.")
      (FLAGS RLANDBIT)
      (NE TO DIAMOND-5)
      (ACTION DIAMOND-MOTION)
      (GLOBAL DWINDOW)>

<ROOM DIAMOND-8
      (IN ROOMS)
      (DESC
"Oddly-angled Room")
      (LDESC
"A small room with oddly angled walls and passages in all directions.")
      (FLAGS RLANDBIT)
      (NORTH TO DIAMOND-5)
      (NW TO DIAMOND-4)
      (NE TO DIAMOND-6)
      (ACTION DIAMOND-MOTION)
      (GLOBAL DWINDOW)>

<ROOM DIAMOND-9
      (IN ROOMS)
      (DESC
"Oddly-angled Room")
      (LDESC
"A small room with oddly angled walls and passages in all directions.")
      (FLAGS RLANDBIT)
      (NW TO DIAMOND-5)
      (ACTION DIAMOND-MOTION)
      (GLOBAL DWINDOW)>

<OBJECT DWINDOW
	(IN LOCAL-GLOBALS)
	(SYNONYM WINDOW)
	(ADJECTIVE GLOWING DIAMOND)
	(DESC "diamond shaped window")
	(ACTION DWINDOW-FCN)
	(FLAGS NDESCBIT TRYTAKEBIT)>

<ROOM CERBERUS-ROOM
      (IN ROOMS)
      (LDESC
"This is the entrance to a huge crypt or tomb. A marble stairway leads
up from a gateway arch.")
      (DESC "Cerberus Room")
      (FLAGS RLANDBIT)
      (EAST TO CRYPT-ANTEROOM
       IF CERBERUS-LEASHED ELSE "The huge dog snaps nastily at you.")
      (IN TO CRYPT-ANTEROOM
       IF CERBERUS-LEASHED ELSE "The huge dog snaps nastily at you.")
      (UP TO DIAMOND-5)
      (VALUE 10)
      (GLOBAL STAIRS)
      (PSEUDO "TOMB" TOMB-PSEUDO "CRYPT" TOMB-PSEUDO)>

<OBJECT GLOBAL-CERBERUS
	(IN LOCAL-GLOBALS)
	(SYNONYM CERBERUS DOG HOUND MONSTER)
	(ADJECTIVE HUGE GIANT THREE HEADED)
	(ACTION GLOBAL-CERBERUS-F)
	(DESC "three-headed dog")>

<ROUTINE GLOBAL-CERBERUS-F ()
	 <TELL "He's not here." CR>>

<OBJECT CERBERUS
	(IN CERBERUS-ROOM)
	(SYNONYM CERBERUS DOG HOUND MONSTER)
	(ADJECTIVE HUGE GIANT THREE HEADED)
	(DESC "three-headed dog")
	(LDESC
"There is a vicious-looking dog guarding the entrance. It is more or
less your usual dog, except that it has three heads and is the size of
an elephant.")
	(FLAGS ACTORBIT OPENBIT CONTBIT)
	(ACTION CERBERUS-FCN)>

<ROOM CRYPT-ANTEROOM
      (IN ROOMS)
      (LDESC " ")
      (DESC "Crypt Anteroom")
      (FLAGS RLANDBIT)
      (IN TO CRYPT-ROOM IF CRYPT-DOOR IS OPEN)
      (SOUTH TO CRYPT-ROOM IF CRYPT-DOOR IS OPEN)
      (WEST TO CERBERUS-ROOM)
      (ACTION CRYPT-ANTEROOM-FCN)
      (GLOBAL CRYPT-DOOR)
      (VALUE 3)>

<ROOM CRYPT-ROOM
      (IN ROOMS)
      (LDESC " ")
      (DESC "Crypt")
      (FLAGS RLANDBIT)
      (NORTH TO CRYPT-ANTEROOM IF CRYPT-DOOR IS OPEN)
      (SOUTH TO ZORK3 IF DIM-DOOR-FLAG)
      (GLOBAL CRYPT-DOOR DIM-DOOR)
      (ACTION CRYPT-ROOM-FCN)
      (VALUE 2)>

<OBJECT HEADS
	(IN CRYPT-ROOM)
	(SYNONYM HEADS HEAD POLE POLES)
        (DESC "set of poled heads")
	(FLAGS NDESCBIT TRYTAKEBIT)
	(ACTION HEAD-FCN)>

<OBJECT CRYPT
	(IN CRYPT-ROOM)
	(SYNONYM TOMB CRYPT GRAVE)
	(ADJECTIVE MARBLE)
	(DESC "marble crypt")
	(FLAGS NDESCBIT READBIT)
	(ACTION CRYPT-OBJECT)
	(TEXT
"\"Here lie the Flatheads, whose heads were placed on poles by the
Keeper of the Dungeon for amazing untastefulness.\"")>

<OBJECT CRYPT-DOOR
	(IN LOCAL-GLOBALS)
	(SYNONYM DOOR)
	(ADJECTIVE CRYPT NORTH)
	(DESC "crypt door")
	(FLAGS DOORBIT CONTBIT)
	(ACTION CRYPT-DOOR-FCN)>

<OBJECT DIM-DOOR
	(IN LOCAL-GLOBALS)
	(SYNONYM DOOR LETTER)
	(ADJECTIVE F DIMLY SOUTH SECRET)
	(DESC "secret door")
	(FLAGS DOORBIT CONTBIT INVISIBLE)
	(ACTION DIM-DOOR-FCN)>

<ROOM ZORK3
      (IN ROOMS)
      (LDESC " ")
      (DESC "Landing")
      (FLAGS RLANDBIT ONBIT)
      (ACTION ZORK3-FCN)>

\

"SUBTITLE WIZARD'S WORKSHOP"

<ROOM GUARDIAN-ROOM
      (IN ROOMS)
      (LDESC " ")
      (DESC "Guarded Room")
      (FLAGS RLANDBIT)
      (NORTH TO COBWEBBY-CORRIDOR)
      (SOUTH TO WIZARDS-WORKSHOP
       IF WIZ-DOOR IS OPEN)
      (IN TO WIZARDS-WORKSHOP
       IF WIZ-DOOR IS OPEN)
      (ACTION GUARDIAN-ROOM-FCN)
      (GLOBAL WIZ-DOOR)>

<OBJECT DOOR-KEEPER
	(IN GUARDIAN-ROOM)
	(SYNONYM KEEPER GUARDIAN LIZARD HEAD)
	(ADJECTIVE NASTY)
	(DESC "lizard")
	(FLAGS NDESCBIT)
	(ACTION DOOR-KEEPER-FCN)>

<ROOM WIZARDS-WORKSHOP
      (IN ROOMS)
      (LDESC
"This is the workshop of the Wizard of Frobozz.")
      (DESC "Wizard's Workshop")
      (FLAGS RLANDBIT)
      (NORTH TO GUARDIAN-ROOM IF WIZ-DOOR IS OPEN)
      (OUT TO GUARDIAN-ROOM IF WIZ-DOOR IS OPEN)
      (WEST TO WORKBENCH-ROOM)
      (SOUTH TO TROPHY-ROOM)
      (ACTION WORKSHOP-FCN)
      (VALUE 10)
      (GLOBAL WIZ-DOOR)>

<ROOM WORKBENCH-ROOM
      (IN ROOMS)
      (LDESC
"This room is the Wizard's workroom. A hall continues east and west,
and a larger room lies to the south. There are many shelves and racks
on the walls, but the Wizard's workbench dominates the room. It is made
of dark, heavy wood bound with iron. The workbench is stained from many
years of use, and is deeply gouged as though some huge clawed animal was
imprisoned on it. There are burn marks and even notes written in a crabbed
hand. Many arcane items are scattered about the bench; alembics, mortar
and pestle, small knives of various sizes, odd scraps of vellum, wax
candles, and much more. In the center of a relatively clear area of the
bench are affixed three stands - ruby, sapphire, and diamond - which form
a triangle.")
      (DESC "Wizard's Workroom")
      (FLAGS RLANDBIT ONBIT)
      (EAST TO WIZARDS-WORKSHOP)
      (SOUTH TO PENTAGRAM-ROOM)
      (WEST TO AQUARIUM-ROOM)
      (PSEUDO "MORTAR" ARCANA-PSEUDO "PESTLE" ARCANA-PSEUDO)>

<OBJECT ARCANA
	(IN WORKBENCH-ROOM)
	(SYNONYM ALEMBIC VELLUM CANDLES KNIVES)
        (ADJECTIVE WAX SMALL)
	(DESC "arcane item")
	(FLAGS NDESCBIT TRYTAKEBIT)
	(ACTION ARCANA-PSEUDO)>

<OBJECT WORKBENCH
	(IN WORKBENCH-ROOM)
	(SYNONYM WORKBENCH BENCH TABLE)
	(ADJECTIVE WORK HEAVY WOODEN WIZARD)
	(DESC "Wizard's workbench")
	(CAPACITY 200)
	(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT)>

<OBJECT STAND-1
	(IN WORKBENCH)
	(SYNONYM STAND STANDS)
	(ADJECTIVE CRYSTAL RUBY)
	(DESC "ruby stand")
	(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT)
	(CAPACITY 10)
	(ACTION STAND-FCN)>

<OBJECT STAND-2
	(IN WORKBENCH)
	(SYNONYM STAND STANDS)
	(ADJECTIVE CRYSTAL SAPPHIRE)
	(DESC "sapphire stand")
	(FLAGS NDESCBIT SURFACEBIT OPENBIT CONTBIT)
	(CAPACITY 10)
	(ACTION STAND-FCN)>

<OBJECT STAND-3
	(IN WORKBENCH)
	(SYNONYM STAND STANDS)
	(ADJECTIVE DIAMOND CRYSTAL)
	(DESC "diamond stand")
	(FLAGS NDESCBIT SURFACEBIT OPENBIT CONTBIT)
	(CAPACITY 10)
	(ACTION STAND-FCN)>

<OBJECT STAND-4
	(SYNONYM STAND STANDS)
	(ADJECTIVE OBSIDIAN BLACK CRYSTAL STRANGE)
	(DESC "black obsidian stand")
	(FLAGS SURFACEBIT CONTBIT OPENBIT)
	(SIZE 5)
	(CAPACITY 10)
	(ACTION STAND-FCN)>

<OBJECT PALANTIR-4
	(IN STAND-4)
	(SYNONYM SPHERE BALL PALANTIR)
	(ADJECTIVE CRYSTAL STRANGE BLACK)
	(DESC "black crystal sphere")
	(FLAGS STAGGERED TAKEBIT TRANSBIT)
	(ACTION PALANTIR)
	(LDESC "There is a strange black sphere here.")
	(VALUE 30)
	(SIZE 10)>

<ROOM TROPHY-ROOM
      (IN ROOMS)
      (LDESC
"This is the Wizard's trophy room, filled with memorabilia of various
sorts. On one wall is the Wizard's D. T. (Doctor of Thaumaturgy) degree
from GUE Tech. Several old magic wands are mounted on a wand rack. A
collection of dull and nicked swords testify to the fate of many
foolhardy adventurers. Small bottles contain discarded homunculi (a few
preserved in alcohol). There is a stuffed owl on a perch.")
      (DESC "Trophy Room")
      (FLAGS RLANDBIT)
      (NORTH TO WIZARDS-WORKSHOP)
      (PSEUDO
       "OWL" TROPHY-PSEUDO
       "HOMUNCULI" TROPHY-PSEUDO)>

<OBJECT DEGREE
	(IN TROPHY-ROOM)
	(SYNONYM DEGREE DIPLOMA)
	(DESC "degree")
	(FLAGS NDESCBIT TRYTAKEBIT READBIT)
	(ACTION TROPHY-PSEUDO)
	(TEXT
"The text is in some obscure tongue. All that can be made out is
a reference to \"sending in a matchbook cover.\"")>

<OBJECT WANDS
	(IN TROPHY-ROOM)
	(SYNONYM WANDS WAND RACK SET)
        (ADJECTIVE WORN USED)
	(DESC "set of used wands")
	(FLAGS NDESCBIT TRYTAKEBIT)
	(ACTION TROPHY-PSEUDO)>

<OBJECT TROPHY-SWORD
	(IN TROPHY-ROOM)
	(SYNONYM SWORD SWORDS)
        (ADJECTIVE DULL NICKED)
	(DESC "nicked swords")
	(FLAGS NDESCBIT TRYTAKEBIT)
	(ACTION TROPHY-PSEUDO)>

<OBJECT TROPHY-BOTTLES
	(IN TROPHY-ROOM)
	(SYNONYM BOTTLE)
        (ADJECTIVE SMALL)
	(DESC "small bottles")
	(FLAGS NDESCBIT TRYTAKEBIT)
	(ACTION TROPHY-PSEUDO)>

<OBJECT WARNING-LABEL
	(IN TROPHY-ROOM)
	(SYNONYM LABEL)
	(ADJECTIVE WARNING)
	(DESC "warning label")
	(LDESC "A hand-lettered label is affixed to the wall.")
	(FLAGS READBIT)
	(TEXT
"Warning!|
|
The exhibits in this room are the property of the mighty Wizard of
Frobozz (me), and are the fruits of diligent labor and study over
many years. He who touches anything will regret it.|
|
(signed)|
Frobozz|")>

<OBJECT GLOBAL-WIZARD-CASE
	(IN LOCAL-GLOBALS)
	(SYNONYM CASE CABINET)
	(ADJECTIVE TROPHY WIZARD)
	(DESC "Wizard's trophy cabinet")
	(ACTION WIZARD-CASE-FCN)>

<OBJECT WIZARD-CASE
	(IN TROPHY-ROOM)
	(SYNONYM CASE CABINET)
	(ADJECTIVE TROPHY WIZARD)
	(DESC "Wizard's trophy cabinet")
	(FLAGS CONTBIT TRANSBIT)
	(LDESC "Imbedded in the wall is an ornate trophy cabinet.")
	(ACTION WIZARD-CASE-FCN)
	(CAPACITY 1000)>

<OBJECT BROKEN-CASE
	(SYNONYM CASE CABINET)
	(ADJECTIVE BROKEN TROPHY WIZARD)
	(DESC "smashed trophy cabinet")
	(FLAGS CONTBIT OPENBIT)
	(LDESC "Shards of a smashed trophy case litter the room.")>

<ROOM PENTAGRAM-ROOM
      (IN ROOMS)
      (LDESC
"In this room, inscribed on the floor, is a great pentagram drawn with
black chalk. In its center is a black circle.")
      (DESC "Pentagram Room")
      (FLAGS RLANDBIT ONBIT)
      (NORTH TO WORKBENCH-ROOM)
      (GLOBAL GLOBAL-MENHIR GLOBAL-CERBERUS GLOBAL-WIZARD-CASE)>

<OBJECT PENTAGRAM
	(IN PENTAGRAM-ROOM)
	(SYNONYM PENTAGRAM STAR CIRCLE)
	(ADJECTIVE GREAT CHALK BLACK)
	(DESC "pentagram")
	(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT)
	(CAPACITY 200)
	(ACTION PENTAGRAM-FCN)>

<ROOM AQUARIUM-ROOM
      (IN ROOMS)
      (LDESC
"Here a dark hallway turns a corner. To the south is a dark room, to
the east is fitful light.")
      (DESC "Aquarium Room")
      (FLAGS RLANDBIT ONBIT)
      (EAST TO WORKBENCH-ROOM)
      (IN TO IN-AQUARIUM)
      (SOUTH TO WIZARDS-QUARTERS)>

<OBJECT AQUARIUM
	(IN AQUARIUM-ROOM)
	(SYNONYM AQUARIUM GLASS)
	(ADJECTIVE HUGE)
	(DESC "aquarium")
	(LDESC "Filling the northern half of the room is a huge aquarium.")
	(FLAGS OPENBIT CONTBIT)
	(CAPACITY 200)
	(ACTION AQUARIUM-FCN)>

<OBJECT PALANTIR-3
	(IN IN-AQUARIUM)
	(SYNONYM PALANTIR SPHERE)
	(ADJECTIVE CRYSTAL WHITE CLEAR)
	(DESC "clear crystal sphere")
	(LDESC "There is a clear crystal sphere lying in the sand.")
	(FLAGS STAGGERED TAKEBIT NDESCBIT TRANSBIT)
	(ACTION PALANTIR)
	(VALUE 20)>

<OBJECT SERPENT
	(IN AQUARIUM)
	(SYNONYM SERPENT SNAKE)
	(ADJECTIVE BABY SEA)
	(DESC "baby sea serpent")
	(LDESC "There is a baby sea serpent swimming in the aquarium.")
	(FLAGS ACTORBIT)
	(ACTION SERPENT-FCN)>

<OBJECT DEAD-SERPENT
	(SYNONYM SERPENT SNAKE)
	(ADJECTIVE DEAD BABY SEA)
	(DESC "dead sea serpent")
	(LDESC "There is a dead sea serpent in a heap here.")
	(FLAGS TAKEBIT)
	(ACTION DEAD-SERPENT-FCN)
	(SIZE 400)>

<ROOM IN-AQUARIUM
      (IN ROOMS)
      (LDESC
"The floor here seems to be made of sand, but it is hard to see anything
else.")
      (DESC "Murky Room")
      (FLAGS RLANDBIT ONBIT)
      (OUT TO AQUARIUM-ROOM)
      (ACTION IN-AQUARIUM-FCN)>

<ROOM WIZARDS-QUARTERS
      (IN ROOMS)
      (LDESC " ")
      (DESC "Wizard's Quarters")
      (FLAGS RLANDBIT)
      (NORTH TO AQUARIUM-ROOM)
      (ACTION WIZARD-QUARTERS-FCN)>

<ROOM CAROUSEL-ROOM
      (IN ROOMS)
      (LDESC " ")
      (DESC "Carousel Room")
      (FLAGS RLANDBIT)
      (NORTH TO MARBLE-HALL)
      (NE TO STREAM-PATH)
      (EAST TO TOPIARY-ROOM)
      (SE TO RIDDLE-ROOM)
      (SOUTH TO MENHIR-ROOM)
      (SW TO COBWEBBY-CORRIDOR)
      (WEST TO ROOM-8)
      (NW TO COOL-ROOM)
      (ACTION CAROUSEL-ROOM-FCN)>

; "SUBTITLE ROOMS FROM OLD ZORK"

<ROOM RIDDLE-ROOM
       (IN ROOMS)
       (LDESC " ")
       (DESC "Riddle Room")
       (DOWN TO CAROUSEL-ROOM)
       (NW TO CAROUSEL-ROOM)
       (EAST TO PEARL-ROOM IF RIDDLE-DOOR IS OPEN)
       (FLAGS RLANDBIT)
       (ACTION RIDDLE-ROOM-FCN)
       (PSEUDO "RIDDLE" RIDDLE-PSEUDO)>

<OBJECT RIDDLE-DOOR
	(IN RIDDLE-ROOM)
	(DESC "stone door")
	(SYNONYM DOOR)
	(ADJECTIVE GREAT STONE)
	(FLAGS DOORBIT CONTBIT NDESCBIT)
	(ACTION RIDDLE-DOOR-FCN)>

<ROOM PEARL-ROOM
        (IN ROOMS)
	(LDESC
"This is a former broom closet. The exits are to the east and west.")
        (DESC "Pearl Room")
       	(EAST TO WELL-BOTTOM)
	(WEST TO RIDDLE-ROOM)
	(FLAGS RLANDBIT)>

\

;"SUBTITLE VOLCANO AREA"

<ROOM VOLCANO-BOTTOM
        (IN ROOMS)
       (LDESC
"You are at the bottom of a large dormant volcano. High above you
light enters from the cone of the volcano. The only exit is to the north.")
       (DESC "Volcano Bottom")
       (NORTH TO LAVA-ROOM)
       (FLAGS RLANDBIT NONLANDBIT)>

<ROOM VAIR-1
        (IN ROOMS)
       (LDESC
"You are about one hundred feet above the bottom of the volcano. The
top of the volcano is clearly visible here.")
       (DESC "Volcano Core")
       (FLAGS NONLANDBIT NWALLBIT )>

<ROOM VAIR-2
        (IN ROOMS)
       (LDESC
"You are about two hundred feet above the volcano floor. Looming
above is the rim of the volcano. There is a small ledge on the west
side.")
       (DESC "Volcano Near Small Ledge")
       (WEST TO LEDGE-1)
       (LAND TO LEDGE-1)
       (FLAGS NONLANDBIT NWALLBIT )>

<ROOM VAIR-3
        (IN ROOMS)
       (LDESC
"You are high above the floor of the volcano. The rim of the volcano
looks very narrow and you are very near it. To the
east is what appears to be a viewing ledge, too thin to land on.")
       (DESC "Volcano by Viewing Ledge")
       (FLAGS NONLANDBIT NWALLBIT )>

<ROOM VAIR-4
       (IN ROOMS)
       (LDESC
"You are near the rim of the volcano. Above you it is open to the sky.
To the west, there is a place to land on a wide ledge.")
       (DESC "Volcano Near Wide Ledge")
       (LAND TO LEDGE-2)
       (WEST TO LEDGE-2)
       (FLAGS NONLANDBIT NWALLBIT )>

<ROOM LEDGE-1
       (IN ROOMS)
       (LDESC
"You are on a narrow ledge within an old dormant volcano. This ledge is
about halfway between the floor below and the rim above. There is an exit
to the south.")
       (DESC "Narrow Ledge")
       (DOWN "I wouldn't jump from here.")
       (WEST TO VOLCANO-BOTTOM IF GNOME-DOOR-FLAG)
       (SOUTH TO LIBRARY)
       (FLAGS RLANDBIT NONLANDBIT)>

<ROOM LIBRARY
       (IN ROOMS)
       (LDESC
"This must have been a large library, probably for the royal family. All
of the shelves have been gnawed to pieces by unfriendly gnomes. To the
north is an exit.")
       (DESC "Library")
       (NORTH TO LEDGE-1)
       (OUT TO LEDGE-1)
       (FLAGS RLANDBIT)>

<ROOM VOLCANO-VIEW
       (IN ROOMS)
       (LDESC
"You are on a ledge in the middle of a large volcano. Below you
the volcano bottom can be seen and above is the rim of the volcano.
A couple of ledges can be seen on the other side of the volcano;
it appears that this ledge is intermediate in elevation between
those on the other side. The exit from this room is to the east.")
       (DESC "Volcano View")
       (DOWN "I wouldn't try that.")
       (CROSS "It is impossible to cross this distance.")
       (EAST TO LAVA-TUBE)
       (FLAGS RLANDBIT)>

<ROOM LEDGE-2
       (IN ROOMS)
       (LDESC " ")
       (DESC "Wide Ledge")
       (DOWN "It's a long way down.")
       (WEST TO VOLCANO-BOTTOM IF GNOME-DOOR-FLAG)
       (SOUTH TO SAFE-ROOM)
       (ACTION LEDGE-FCN)
       (FLAGS RLANDBIT NONLANDBIT)>

<ROOM SAFE-ROOM
       (IN ROOMS)
       (LDESC " ")
       (DESC "Dusty Room")
       (NORTH TO LEDGE-2)
       (ACTION SAFE-ROOM-FCN)
       (FLAGS RLANDBIT ONBIT)>

<ROOM LAVA-ROOM
       (IN ROOMS)
       (LDESC
"This is a small room, whose walls are formed by an old lava flow.
There are exits here to the east and the south.")
       (DESC "Lava Room")
       (SOUTH TO VOLCANO-BOTTOM)
       (EAST TO GLACIER-ROOM)
       (FLAGS RLANDBIT)>

<GLOBAL BLOC VOLCANO-BOTTOM>

\

"SUBTITLE ALICE IN WONDERLAND"

<ROOM MAGNET-ROOM
       (IN ROOMS)
       (LDESC " ")
       (DESC "Low Room")
       (NORTH PER MAGNET-ROOM-EXIT)
       (SOUTH PER MAGNET-ROOM-EXIT)
       (WEST PER MAGNET-ROOM-EXIT)
       (NE PER MAGNET-ROOM-EXIT)
       (NW PER MAGNET-ROOM-EXIT)
       (SW PER MAGNET-ROOM-EXIT)
       (SE PER MAGNET-ROOM-EXIT)
       (EAST PER MAGNET-ROOM-EXIT)
       (OUT PER MAGNET-ROOM-EXIT)
       (ACTION MAGNET-ROOM-FCN)
       (FLAGS RLANDBIT ONBIT)>

<ROOM MACHINE-ROOM
       (IN ROOMS)
       (LDESC
"This is a large room full of assorted heavy machinery, whirring noisily.
The room smells of burned resistors. Along one wall are three buttons
which are, respectively, round, triangular, and square. Naturally,
above these buttons are instructions written in EBCDIC. A large sign
in English above all the buttons says|
       \"DANGER -- HIGH VOLTAGE\"|
There are exits to the west and the south.")
       (DESC "Machine Room")
       (WEST TO MAGNET-ROOM)
       (SOUTH TO CAGE-ROOM)
       (FLAGS RLANDBIT ONBIT)>

<ROOM CAGE-ROOM
       (IN ROOMS)
       (LDESC
"This is a dingy closet adjacent to a larger room to the north.
Chiselled into a wall are these words:|
|
     Protected by|
       FROBOZZ|
 Magic Alarm Company|
  (Hello, footpad!)||
There doesn't seem to be any footpad here, however.")
       (DESC "Dingy Closet")
       (OUT TO MACHINE-ROOM)
       (NORTH TO MACHINE-ROOM)
       (FLAGS ONBIT RLANDBIT)>

<ROOM IN-CAGE
       (IN ROOMS)
       (LDESC "You are trapped inside a solid steel cage.")
       (DESC "Cage")
       (ACTION IN-CAGE-FCN)
       (FLAGS RLANDBIT NWALLBIT ONBIT)>

<ROOM WELL-TOP
       (IN ROOMS)
       (LDESC
"You are at the top of the well. Well done. There are etchings on
the side of the well. There is a small crack across the floor at the
entrance to a room on the east, but it can be crossed easily.")
       (DESC "Top of Well")
       (EAST TO TEA-ROOM)
       (DOWN "It's a long way down!")
       (FLAGS RLANDBIT NONLANDBIT)
       (VALUE 10)
       (GLOBAL WELL)
       (PSEUDO "CRACK" CRACK-PSEUDO)>

<ROUTINE CRACK-PSEUDO ()
	 <COND (<VERB? EXAMINE>
		<TELL
"It is a small crack (as advertised) with no redeeming value." CR>)>>

<ROOM WELL-BOTTOM
       (IN ROOMS)
       (LDESC
"This is a damp circular room, whose walls are made of brick and
mortar. The roof of this room is not visible, but there appear to be
some etchings on the walls. There is a passageway to the west.")
       (DESC "Circular Room")
       (WEST TO PEARL-ROOM)
       (UP "The walls cannot be climbed.")
       (FLAGS RLANDBIT NONLANDBIT)
       (GLOBAL WELL)>

<ROOM TEA-ROOM
       (IN ROOMS)
       (LDESC
"This is a small room containing a large oblong table, no doubt set
for afternoon tea. It is clear from the
objects on the table that the users were indeed mad. In the eastern
corner of the room is a small hole (no more than four inches high).
There are passageways leading away to the west and the northwest.")
       (DESC "Tea Room")
       (EAST "Only a mouse could get in there.")
       (WEST TO WELL-TOP)
       (NW TO MAGNET-ROOM)
       (FLAGS RLANDBIT ONBIT)
       (PSEUDO "HOLE" ALICE-HOLE)>

<ROUTINE ALICE-HOLE ()
	 <COND (<VERB? EXAMINE>
		<TELL "The hole is very small. You could never enter it." CR>)
	       (<VERB? LOOK-INSIDE>
		<TELL "You can't see what's beyond the hole from here." CR>)
	       (<AND <VERB? PUT> <EQUAL? ,PRSI ,PSEUDO-OBJECT>>
		<TELL "It doesn't fit through the hole." CR>)>>

<ROOM POSTS-ROOM
       (IN ROOMS)
       (LDESC
"This is an enormous room, in the center of which are four wooden
posts delineating a rectangular area, above which is what appears to
be a wooden roof. In fact, all objects in this room appear to be
abnormally large. To the east is a passageway. There are large gaping
chasms to the west and northwest.")
       (DESC "Posts Room")
       (NW "A great chasm blocks your way.")
       (EAST TO POOL-ROOM)
       (WEST "A great chasm blocks your way.")
       (DOWN "A great chasm blocks your way.")
       (FLAGS RLANDBIT ONBIT)
       (ACTION POSTS-ROOM-FCN)
       (GLOBAL CHASM)>

<ROOM POOL-ROOM
       (IN ROOMS)
       (LDESC
"This is a large room, one half of which is depressed. Salty water flows
from a large leak in the ceiling. The only exit is to the west.")
       (DESC "Pool Room")
       (OUT TO POSTS-ROOM)
       (WEST TO POSTS-ROOM)
       (FLAGS RLANDBIT)>

\

; "SUBTITLE BANK OF ZORK"

<ROOM BANK-ENTRANCE
      (IN ROOMS)
      (LDESC
"This is the entrance hall of the Bank of Zork, the largest
banking institution of the Great Underground Empire. A partial
account of its history is in \"The Lives of the Twelve Flatheads,\" in
the chapter on J. Pierpont Flathead. A more detailed history (albeit
less objective) may be found in Flathead's outrageous autobiography
\"I'm Rich and You Aren't - So There!\".
Most of the furniture has been ravaged by passing scavengers. All
that remains are two signs at the northwest and northeast corners of
the room, which say:|
|
    <--  VIEWING ROOMS  -->|
|
The way out (ornate but tasteful) is to the east.
")
      (DESC "Bank Entrance")
      (NW TO TELLER-WEST)
      (NE TO TELLER-EAST)
      (EAST TO FRESCO-ROOM)
      (FLAGS RLANDBIT)>

<ROOM TELLER-WEST
      (IN ROOMS)
      (LDESC " ")
      (DESC "West Teller's Room")
      (NORTH TO VIEWING-WEST)
      (SOUTH TO BANK-ENTRANCE)
      (WEST TO DEPOSITORY)
      (ACTION TELLER-ROOM)
      (FLAGS RLANDBIT)>

<ROOM TELLER-EAST
      (IN ROOMS)
      (LDESC " ")
      (DESC "East Teller's Room")
      (NORTH TO VIEWING-EAST)
      (SOUTH TO BANK-ENTRANCE)
      (EAST TO DEPOSITORY)
      (ACTION TELLER-ROOM)
      (FLAGS RLANDBIT)>

<ROOM VIEWING-WEST
      (IN ROOMS)
      (LDESC
"This room was used by holders of safety deposit boxes to view
their contents. On the north side of the room is a sign which says:|
|
\"Remain here while the teller retrieves your safety deposit box.
When you are finished, leave the box, and exit to the south.
Safety deposit boxes cannot be removed from this room!|
|
Thank You for Banking at the Zork!\"
")
      (DESC "West Viewing Room")
      (SOUTH TO BANK-ENTRANCE)
      (FLAGS RLANDBIT)
      (GLOBAL SEWL SWWL SNWL SSWL)>

<ROOM VIEWING-EAST
      (IN ROOMS)
      (LDESC
"This room was used by holders of safety deposit boxes to view
their contents. On the north side of the room is a sign which says|
|
\"Remain here while the teller retrieves your safety deposit box.
When you are finished, leave the box, and exit to the south.
Safety deposit boxes cannot be removed from this room!|
|
Thank You for Banking at the Zork!\"
")
      (DESC "East Viewing Room")
      (SOUTH TO BANK-ENTRANCE)
      (FLAGS RLANDBIT)
      (GLOBAL SEWL SWWL SNWL SSWL)>

<ROOM SMALL-ROOM
       (IN ROOMS)
      (LDESC
"This is a small, bare room with no distinguishing features. There
are no exits from this room.")
      (DESC "Small Room")
      (FLAGS RLANDBIT )
      (GLOBAL SEWL SWWL SNWL SSWL)>

<ROOM VAULT
       (IN ROOMS)
      (LDESC
"This is the Vault of the Bank of Zork, in which there are no doors.")
      (DESC "Vault")
      (FLAGS  RLANDBIT)
      (GLOBAL SEWL SWWL SNWL SSWL)>

<ROOM DEPOSITORY
       (IN ROOMS)
      (LDESC
"This is a large rectangular room. The east and west walls were used
for storing safety deposit boxes, but all have been carefully removed
by evil persons. To the east, west, and south of the room are large
doorways. The northern \"wall\" of the room is a shimmering curtain of
light. In the center of the room is a large stone cube, about 10 feet
on a side. Engraved on the side of the cube is some lettering.")
      (DESC "Safety Depository")
      (NORTH "There is a curtain of light there.")
      (WEST PER BKLEAVEW)
      (EAST PER BKLEAVEE)
      (SOUTH TO OFFICE)
      (ACTION DEPOSITORY-FCN)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL SNWL)>

<ROOM OFFICE
       (IN ROOMS)
      (LDESC
"This room was the office of the Chairman of the Bank of Zork.
Like the other rooms here, it has been extensively vandalized.
The lone exit is to the north.")
      (DESC "Chairman's Office")
      (NORTH TO DEPOSITORY)
      (FLAGS RLANDBIT)>

<OBJECT MATCH
	(IN GAZEBO-TABLE)
	(SYNONYM MATCH MATCHES MATCHBOOK)
	(ADJECTIVE ZORK)
	(DESC "matchbook")
	(FLAGS READBIT TAKEBIT)
	(ACTION MATCH-FCN)
	(LDESC
"There is a matchbook saying \"Visit ZORK I\" here.")
	(TEXT
"\">> Visit Exotic ZORK I <<|
|
Consult the Frobozz Magic Travel Agency, or visit your local
computer store for more details.\"")
	(SIZE 2)>


\

"SUBTITLE PALANTIR ROOMS"

<ROOM DREARY-ROOM
      (IN ROOMS)
      (LDESC " ")
      (DESC "Dreary Room")
      (SOUTH TO TINY-ROOM IF PDOOR IS OPEN)
      (OUT TO TINY-ROOM IF PDOOR IS OPEN)
      (ACTION DREARY-ROOM-FCN)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL PDOOR PWINDOW)>

<ROOM TINY-ROOM
      (IN ROOMS)
      (LDESC " ")
      (DESC "Tiny Room")
      (NORTH TO DREARY-ROOM IF PDOOR IS OPEN)
      (IN TO DREARY-ROOM IF PDOOR IS OPEN)
      (DOWN TO RAVINE-LEDGE)
      (FLAGS RLANDBIT)
      (ACTION TINY-ROOM-FCN)
      (GLOBAL PDOOR PWINDOW CHASM)>
	
\

; "SUBTITLE OBJECTS"

<OBJECT GNOME
	(SYNONYM GNOME)
	(ADJECTIVE VOLCANO)
	(DESC "Volcano Gnome")
	(FLAGS ACTORBIT)
	(ACTION GNOME-FCN)
	(LDESC "There is a nervous Volcano Gnome here.")>

<OBJECT BALLOON
	(IN VOLCANO-BOTTOM)
	(SYNONYM BALLOON BASKET)
	(ADJECTIVE WICKER)
	(DESC "basket")
	(FLAGS VEHBIT OPENBIT)
	(ACTION BALLOON-FCN)
	(DESCFCN BALLOON-FCN)
	(CAPACITY 100)
	(SIZE 70)
	(VTYPE 0)>

<OBJECT BALLOON-LABEL
	(SYNONYM LABEL)
	(ADJECTIVE BLUE)
	(DESC "blue label")
	(FLAGS READBIT TAKEBIT BURNBIT)
	(LDESC "There is a blue label here.")
	(SIZE 1)
	(TEXT
"
!! FROBOZZ MAGIC BALLOON COMPANY !!|
|
Hello, Aviator!|
|
To land your balloon, say LAND|
Otherwise, you're on your own!|
|
No warranty expressed or implied.")>

<OBJECT SAFE
	(IN SAFE-ROOM)
	(SYNONYM SAFE BOX)
	(ADJECTIVE STEEL RUSTY)
	(DESC "box")
	(FLAGS CONTBIT NDESCBIT)
	(ACTION SAFE-FCN)
	(CAPACITY 15)>

<OBJECT BRAIDED-WIRE
	(FLAGS NDESCBIT)
	(IN BALLOON)
	(SYNONYM ROPE WIRE)
	(ADJECTIVE BRAIDED)
	(DESC "braided wire")
	(ACTION WIRE-FCN)>

<OBJECT BRICK
	(IN MARBLE-HALL)
	(SYNONYM BRICK)
	(ADJECTIVE SQUARE CLAY)
	(DESC "brick")
	(FLAGS TAKEBIT BURNBIT OPENBIT SEARCHBIT)
	(ACTION BRICK-FCN)
	(LDESC "There is a square brick here which feels like clay.")
	(CAPACITY 2)
	(SIZE 9)>

<OBJECT EXPLOSION
	(SYNONYM KREBF)
	(DESC "debris from an explosion")
	(LDESC
"The room is cluttered with debris from an explosion. The walls seem ready
to collapse.")
	(FLAGS )>

<OBJECT DEAD-BALLOON
	(SYNONYM BALLOON BASKET)
	(ADJECTIVE BROKEN)
	(DESC "broken balloon")
	(LDESC "There is a balloon here, broken into pieces.")
	(SIZE 40)>

<OBJECT ROUND-BUTTON
	(IN MACHINE-ROOM)
	(SYNONYM BUTTON)
	(ADJECTIVE ROUND)
	(DESC "round button")
	(FLAGS NDESCBIT)
	(ACTION BUTTONS)>

<OBJECT SQUARE-BUTTON
	(IN MACHINE-ROOM)
	(SYNONYM BUTTON)
	(ADJECTIVE SQUARE)
	(DESC "square button")
	(FLAGS NDESCBIT)
	(ACTION BUTTONS)>

<OBJECT TRIANGULAR-BUTTON
	(IN MACHINE-ROOM)
	(SYNONYM BUTTON)
	(ADJECTIVE TRIANGULAR)
	(DESC "triangular button")
	(FLAGS NDESCBIT)
	(ACTION BUTTONS)>

<OBJECT CARD
	(IN SAFE)
	(SYNONYM CARD NOTE)
	(DESC "card")
	(FLAGS READBIT TAKEBIT BURNBIT)
	(LDESC "There is a card with writing on it here.")
	(SIZE 1)
	(TEXT
"
Warning:|
    This room was constructed over very weak rock strata. Detonation
of explosives in this room is strictly prohibited!|
         Frobozz Magic Cave Company|
         per M. Agrippa, foreman|
") >

<OBJECT CLOTH-BAG
	(IN BALLOON)
	(SYNONYM BAG)
	(ADJECTIVE CLOTH)
	(FLAGS NDESCBIT)
	(DESC "cloth bag")
	(ACTION BCONTENTS)>

<OBJECT CROWN
	(IN SAFE)
	(SYNONYM CROWN TREASURE)
	(ADJECTIVE GAUDY)
	(DESC "gaudy crown")
	(FLAGS STAGGERED TAKEBIT WEARBIT)
	(FDESC
"The excessively gaudy crown of Lord Dimwit Flathead sits in the safe.")
	(LDESC "Lord Dimwit's crown is here.")
	(SIZE 10)
	(VALUE 20)>

<OBJECT PALANTIR-1	;"was SPHER"
	(IN CAGE-ROOM)
	(SYNONYM SPHERE BALL PALANTIR)
	(ADJECTIVE CRYSTAL RED)
	(DESC "red crystal sphere")
	(FLAGS STAGGERED TAKEBIT TRANSBIT TRYTAKEBIT)
	(ACTION SPHERE-FCN)
	(LDESC "There is a beautiful red crystal sphere here.")
	(SIZE 10)
	(VALUE 20)>

<OBJECT VIOLIN
	(IN IRON-BOX)
	(SYNONYM STRADIVARIUS VIOLIN TREASURE)
	(ADJECTIVE FANCY)
	(DESC "fancy violin")
	(FLAGS STAGGERED TAKEBIT)
	(LDESC "There is a Stradivarius here.")
	(SIZE 10)
	(VALUE 20)
	(ACTION VIOLIN-FCN)>

<OBJECT ICE
	(IN GLACIER-ROOM)
	(SYNONYM ICE MASS GLACIER)
	(ADJECTIVE COLD ICY)
	(DESC "glacier")
	(ACTION GLACIER-FCN)
	(LDESC "A mass of ice fills the western half of the room.")>

<OBJECT FLASK
	(IN POOL-ROOM)
	(SYNONYM FLASK)
	(ADJECTIVE GLASS)
	(DESC "stoppered glass flask filled with liquid")
	(FLAGS TAKEBIT TRANSBIT READBIT)
	(ACTION FLASK-FCN)
	(LDESC
"A stoppered glass flask with a skull-and-crossbones marking is here.
The flask is filled with some clear liquid.")
	(CAPACITY 5)
	(TEXT "There is a skull-and-crossbones engraved on the glass.")
	(SIZE 10)>

<OBJECT ROBOT-LABEL
	(IN MAGNET-ROOM)
	(SYNONYM PAPER PIECE INSTRUCTIONS)
	(ADJECTIVE GREEN)
	(DESC "green piece of paper")
	(FLAGS READBIT TAKEBIT BURNBIT)
	(LDESC "There is a green piece of paper here.")
	(SIZE 3)
	(TEXT
"!!  FROBOZZ MAGIC ROBOT COMPANY  !!||

Hello, Master!|
|
   I am a late-model robot, trained at GUE Tech to perform various
simple household functions.|
|
   To activate me, say the following:|
|
        >ROBOT, <things to do>|
|
At your service!") >

<OBJECT SLOT
	(IN SAFE-ROOM)
	(SYNONYM SLOT HOLE)
	(DESC "hole")
	(FLAGS OPENBIT NDESCBIT)
	(CAPACITY 10)
	(ACTION SLOT-F)>

<ROUTINE SLOT-F ()
	 <COND (<AND <VERB? LOOK-INSIDE> <NOT <FIRST? ,SLOT>>>
		<TELL "There's nothing in the hole." CR>)
	       (<VERB? EXAMINE>
		<TELL
"The oblong hole has been chipped out of the box, probably by someone
wanting whatever is inside the box. The attempt was a pathetic failure,
however." CR>)>>

<OBJECT HOOK-2
	(IN LEDGE-2)
	(SYNONYM HOOK)
	(ADJECTIVE SMALL)
	(DESC "hook")
	(LDESC "There is a small hook attached to the rock here.")>

<OBJECT HOOK-1
	(IN LEDGE-1)
	(SYNONYM HOOK)
	(ADJECTIVE SMALL)
	(DESC "hook")
	(LDESC "There is a small hook attached to the rock here.")>

<OBJECT LAMP
	(IN INSIDE-BARROW)
	(SYNONYM LAMP LANTERN LIGHT)
	(ADJECTIVE BRASS)
	(DESC "lamp")
	(FLAGS TAKEBIT LIGHTBIT)
	(FDESC "A strangely familiar brass lantern is lying on the ground.")
	(ACTION LANTERN)
	(SIZE 15)>

<OBJECT BROKEN-LAMP	;"was BLAMP"
	(SYNONYM LAMP LANTERN LIGHT)
	(ADJECTIVE BROKEN BRASS)
	(DESC "broken brass lantern")
	(FLAGS TAKEBIT)
	(SIZE 15)>

<OBJECT ALICE-TABLE
	(IN TEA-ROOM)
	(SYNONYM TABLE)
	(ADJECTIVE LARGE OBLONG)
	(FLAGS CONTBIT SURFACEBIT OPENBIT)
	(DESC "large oblong table")
	(CAPACITY 50)>

<OBJECT MANGLED-CAGE
	(SYNONYM CAGE)
	(ADJECTIVE MANGLED STEEL)
	(DESC "mangled cage")
	(FLAGS TAKEBIT)
	(LDESC "There is a mangled steel cage here.")
	(SIZE 60)>

<OBJECT PEARL
	(IN PEARL-ROOM)
	(SYNONYM NECKLACE PEARLS TREASURE)
	(ADJECTIVE PEARL)
	(DESC "pearl necklace")
	(FLAGS STAGGERED TAKEBIT)
	(LDESC "There is a pearl necklace here with hundreds of large pearls.")
	(SIZE 10)
	(VALUE 15)>

<OBJECT EAT-ME-CAKE
	(IN ALICE-TABLE)
	(SYNONYM CAKE ICING CAKES LETTER)
	(ADJECTIVE GREEN FROSTED)
	(DESC "cake frosted with green letters")
	(FLAGS READBIT TAKEBIT FOODBIT)
	(ACTION EATME-FCN)
	(TEXT "The icing spells out \"Eat Me.\"")
	(SIZE 4)>

<OBJECT BLUE-ICING
	(IN ALICE-TABLE)
	(SYNONYM CAKE ICING CAKES LETTER)
	(ADJECTIVE BLUE FROSTED)
	(DESC "cake frosted with blue letters")
	(FLAGS READBIT TAKEBIT FOODBIT)
	(ACTION CAKE-FCN)
	(SIZE 4)>

<OBJECT ORANGE-ICING
	(IN ALICE-TABLE)
	(SYNONYM CAKE CAKES ICING LETTER)
	(ADJECTIVE ORANGE FROSTED)
	(DESC "cake frosted with orange letters")
	(FLAGS READBIT TAKEBIT FOODBIT)
	(ACTION CAKE-FCN)
	(SIZE 4)>

<OBJECT RED-ICING
	(IN ALICE-TABLE)
	(SYNONYM CAKE CAKES ICING LETTER)
	(ADJECTIVE RED FROSTED)
	(DESC "cake frosted with red letters")
	(FLAGS READBIT TAKEBIT FOODBIT)
	(ACTION CAKE-FCN)
	(SIZE 4)>

<OBJECT LEAK
	(IN POOL-ROOM)
	(SYNONYM LEAK)
	(ADJECTIVE LARGE)
	(DESC "leak")
	(FLAGS NDESCBIT)
	(ACTION PLEAK)>

<OBJECT POOL
	(IN POOL-ROOM)
	(SYNONYM POOL TEARS)
	(ADJECTIVE LARGE)
	(DESC "pool of tears")
	(LDESC
"The leak has submerged the depressed area in a pool of tears. There is
a hazy something at the deepest part of the pool.")
	(ACTION POOL-FCN)>

<OBJECT COIN
	(IN LEDGE-1)
	(SYNONYM COIN ZORKMID GOLD TREASURE)
	(ADJECTIVE GOLD PRICELESS)
	(DESC "priceless zorkmid")
	(FLAGS STAGGERED READBIT TAKEBIT)
	(FDESC
"On the floor is a priceless gold zorkmid (a valuable collector's item).")
	(LDESC "There is an engraved zorkmid here.")
	(SIZE 10)
	(VALUE 20)
	(TEXT
"This is a beautiful octagonal coin bearing the legends \"Ten Thousand
Zorkmids\" and \"In Frobs We Trust\".")>

;"      -------------------------|
      /      Gold Zorkmid        \\|
     /  T e n   T h o u s a n d   \\|
    /        Z O R K M I D S       \\|
   /                                \\|
  /        !!!!!!!!!!!!!!!!!!        \\|
 /        !!!!!          !!!!!        \\|
!           !!!  ^^  ^^  !!!           !|
!           !!!  OO  OO  !!!           !|
! In Frobs  !!!    <<    !!!  We Trust !|
!            !! (______) !!            !|
!             !          !             !|
!             !__________!             !|
 \\                                    /|
  \\     -- Lord Dimwit Flathead --   /|
   \\     -- Beloved of Zorkers --   /|
    \\                              /|
     \\       * 722 G.U.E. *       /|
      \\                          /|
       --------------------------|
"

<OBJECT STAMP
	(IN PURPLE-BOOK)
	(SYNONYM STAMP TREASURE)
	(ADJECTIVE FLATHEAD)
	(DESC "Flathead stamp")
	(FLAGS STAGGERED READBIT TAKEBIT BURNBIT)
	(LDESC "There is a Flathead stamp here.")
	(SIZE 1)
	(VALUE 10)
	(TEXT "This three zorkmid stamp bears a portrait of Lord
Dimwit Flathead, \"Our Excessive Leader\".")>

;"|
---v----v----v----v----v---|
!   !!!!!!!!!!     LORD   !|
> !!!!!       !   DIMWIT  <|
!  !!!!    ---!  FLATHEAD !|
!  !!!C    CC \\           !|
>   !!        _\\          <|
!    !!! (____!           !|
!     !!      !    Our    !|
>      !______! Excessive <|
!        /   \\   Leader   !|
!                         !|
>    G.U.E.       Three   <|
!   POSTAGE      Zorkmids !|
---^----^----^----^----^---|
"

<OBJECT GREEN-BOOK
	(IN LIBRARY)
	(SYNONYM BOOK COVER BOOKS)
	(ADJECTIVE HANDSOME GREEN LEATHER)
	(DESC "green book")
	(FLAGS READBIT TAKEBIT CONTBIT BURNBIT)
	(FDESC
"A handsome book, bound in green leather, sits in the center of the room.")
	(CAPACITY 2)
	(SIZE 10)
	(TEXT "This book is written in a tongue with which I am unfamiliar.")
	(ACTION RANDOM-BOOK)>

<OBJECT BLUE-BOOK
	(IN LIBRARY)
	(SYNONYM BOOK COVER BOOKS)
	(ADJECTIVE BLUE)
	(DESC "blue book")
	(FLAGS READBIT TAKEBIT CONTBIT BURNBIT)
	(FDESC "Worn and battered in one corner of the room is a blue book.")
	(CAPACITY 2)
	(SIZE 10)
	(TEXT "This book is written in a tongue with which I am unfamiliar.")
	(ACTION RANDOM-BOOK)>

<OBJECT WHITE-BOOK
	(IN LIBRARY)
	(SYNONYM BOOK COVER BOOKS)
	(ADJECTIVE WHITE GLOSSY)
	(DESC "white book")
	(FLAGS READBIT TAKEBIT CONTBIT BURNBIT)
	(FDESC
"Right beside the purple book sits a white one.")
	(CAPACITY 2)
	(SIZE 5)
	(TEXT
"It is written in an unfamiliar tongue and details the use of various
magical objects, chiefly the so-called \"magic wand\". Apparently these
devices work by pointing them at the object to be ensorcelled, and then
chanting the appropriate magic words. (It's truly amazing how credulous
these ancients were, isn't it?)")
	(ACTION RANDOM-BOOK)>

<OBJECT PURPLE-BOOK
	(IN LIBRARY)
	(SYNONYM BOOK BOOKS)
	(ADJECTIVE PURPLE)
	(DESC "purple book")
	(FLAGS READBIT TAKEBIT CONTBIT SEARCHBIT BURNBIT)
	(LDESC
"Lying in the dust, and covered with mold, is a purple book.")
	(CAPACITY 2)
	(SIZE 10)
	(ACTION PURPLE-BOOK-FCN)
	(TEXT
"This book is written in a tongue with which I am unfamiliar. Assuming that
one can indeed tell a book by its cover, it is likely filled with purple prose,
the like of which is rarely seen outside the Great Underground Empire.")>

<OBJECT RECEPTACLE
	(IN BALLOON)
	(SYNONYM RECEPTACLE)
	(ADJECTIVE METAL)
	(DESC "receptacle")
	(FLAGS CONTBIT SEARCHBIT NDESCBIT)
	(ACTION BCONTENTS)
	(CAPACITY 6)>

<OBJECT ROBOT
	(IN MAGNET-ROOM)
	(SYNONYM ROBOT R2D2 C3PO ROBBY)
	(DESC "robot")
	(FLAGS ACTORBIT CONTBIT OPENBIT)
	(ACTION ROBOT-FCN)
	(LDESC "There is a robot here.")>

<OBJECT RUBY
	(IN LAVA-ROOM)
	(SYNONYM RUBY TREASURE)
	(ADJECTIVE MOBY)
	(DESC "ruby")
	(FLAGS STAGGERED TAKEBIT)
	(FDESC "On the floor lies a moby ruby.")
	(LDESC "There is a moby ruby lying here.")
	(VALUE 15)>

<OBJECT IRON-BOX
	(IN CAROUSEL-ROOM)
	(SYNONYM BOX)
	(ADJECTIVE STEEL DENTED)
	(DESC "steel box")
	(FLAGS CONTBIT TAKEBIT INVISIBLE)
	(LDESC "There is a dented steel box here.")
	(CAPACITY 20)
	(SIZE 40)>

<OBJECT CAGE
	(IN CAGE-ROOM)
	(FLAGS INVISIBLE)
	(SYNONYM CAGE)
	(ADJECTIVE STEEL SOLID)
	(DESC "solid steel cage")
	(LDESC "There is a solid steel cage in the middle of the room.")>

<OBJECT CANDY
	(IN POOL-ROOM)
	(SYNONYM PACKAGE CANDY TREASURE GRASSHOPPERS)
	(ADJECTIVE CANDIED RARE)
	(DESC "package of candy")
	(FLAGS STAGGERED FOODBIT TAKEBIT INVISIBLE READBIT)
	(LDESC "There is a package of candied goodies here.")
	(ACTION CANDY-FCN)
	(SIZE 8)
	(VALUE 15)>

<OBJECT TOP-ETCHINGS
	(IN WELL-TOP)
	(SYNONYM ETCHINGS WALL)
	(DESC "wall with etchings")
	(FLAGS READBIT NDESCBIT)
	(ACTION TOP-ETCHINGS-F)>

<OBJECT BOTTOM-ETCHINGS
	(IN WELL-BOTTOM)
	(SYNONYM ETCHINGS WALL)
	(DESC "wall with etchings")
	(FLAGS READBIT NDESCBIT)
	(ACTION BOTTOM-ETCHINGS-F)>

<OBJECT FUSE
	(IN COBWEBBY-CORRIDOR)
	(SYNONYM FUSE STRING COIL)
	(ADJECTIVE BLACK THIN)
	(DESC "black string")
	(FLAGS TAKEBIT BURNBIT)
	(ACTION FUSE-FCN)
	(LDESC "There is a coil of black, braided string here.")
	(SIZE 1)>

<OBJECT BUCKET
	(IN WELL-BOTTOM)
	(SYNONYM BUCKET)
	(ADJECTIVE WOODEN)
	(DESC "wooden bucket")
	(FLAGS VEHBIT OPENBIT CONTBIT)
	(ACTION BUCKET-FCN)
	(CONTFCN BUCKET-CONT)
	(LDESC
"There is a wooden bucket here, 3 feet in diameter and 3 feet high.")
	(CAPACITY 100)
	(SIZE 100)
	(VTYPE 0)>

<OBJECT POSTS
	(IN POSTS-ROOM)
	(SYNONYM POSTS POST)
	(ADJECTIVE WOODEN)
	(FLAGS NDESCBIT)
	(DESC "group of wooden posts")>

"SUBTITLE BANK OBJECTS"

<OBJECT BILLS
	(IN VAULT)
	(SYNONYM BILLS STACK MONEY TREASURE)
	(ADJECTIVE NEAT MANY ZORKMID)
	(DESC "stack of zorkmid bills")
	(FLAGS STAGGERED READBIT TAKEBIT BURNBIT)
	(ACTION BILLS-OBJECT)
	(LDESC
	 "200 neatly stacked zorkmid bills are here.")
	(FDESC
	 "On the floor sit 200 neatly stacked zorkmid bills.")
	(SIZE 10)
	(VALUE 25)
	(TEXT "Each bill is worth 100 zorkmids, and bears the legend
\"In Frobs We Trust\".")>

;"
______________________________________________________________
+ 1  0   0          GREAT UNDERGROUND EMPIRE         1  0   0 +|
+ 1 0 0 0 0					     1 0 0 0 0+|
+ 1 0 0 0 0					     1 0 0 0 0+|
+ 1  0   0		    DIMWIT		     1  0   0 +|
+	               ++++++++++++++++	  		      +|
+		       ++   __  __   ++		   B30332744D +|
+		       ++  -OO  OO-  ++	  		      +|
+	IN  FROBS      \\++    >>    ++/	    WE  TRUST         +|
+		        ++  ______  ++	       		      +|
+ B30332744D	         +  ------  +	       		      +|
+                        \\\\________//	       		      +|
+ 1  0   0    Series	   FLATHEAD	LD Flathead  1  0   0 +|
+ 1 0 0 0 0   719GUE	   		 Treasurer   1 0 0 0 0+|
+ 1 0 0 0 0 					     1 0 0 0 0+|
+ 1  0   0	  One Hundred Royal Zorkmids	     1  0   0 +|
+_____________________________________________________________+|

"
	
<OBJECT PORTRAIT
	(IN OFFICE)
	(SYNONYM PORTRAIT PAINTING ART TREASURE)
	(ADJECTIVE FLATHEAD)
	(DESC "portrait of J. Pierpont Flathead")
	(FLAGS STAGGERED TAKEBIT BURNBIT)	
	(LDESC
	 "The portrait of J. Pierpont Flathead is here.")
	(FDESC
	 "A portrait of J. Pierpont Flathead hangs on the wall.")
	(SIZE 25)
	(VALUE 20)>

;"|
        !!!!!!!!!!!!!!|
       !!   __  __   !!|
       !!   $$  $$   !!|
       \\!!    >>    !!/|
        !!  ______  !!|
         !  -//--   !|
         \\\\_//_____//|
        ___//!  !|
        \\_// !  !|
  __________//  \\\\__________|
 / $ /       *ZZ*       \\ $ \\|
|
     J.  PIERPONT  FLATHEAD|
          CHAIRMAN|
"

<OBJECT BANK-BROCHURE
	(IN DEPOSITORY)
	(SYNONYM BROCHURE PAPER PIECE)
	(ADJECTIVE BANK SMALL WORN)
	(DESC "bank brochure")
	(FDESC "On the ground is a small, worn piece of paper.")
	(FLAGS READBIT TAKEBIT BURNBIT)
	(SIZE 2)
	(TEXT
"The paper is barely readable. You can only make out \"... valuables
are completely safe ... advanced
magic technology ... impossible to take valuables from the depository
... either teller's ... Many customers faint ... teller pops in ...
seems to walk through ... walls ...\"")>

<OBJECT CUBE
	(IN DEPOSITORY)
	(SYNONYM VAULT CUBE LETTER)
	(ADJECTIVE STONE LARGE)
	(DESC "large stone cube")
	(FLAGS READBIT NDESCBIT)
	(ACTION CUBE-F)>

<OBJECT CURTAIN
	(IN DEPOSITORY)
	(SYNONYM CURTAIN LIGHT)
	(ADJECTIVE SHIMMERING)
	(DESC "shimmering curtain of light")
	(FLAGS NDESCBIT)
	(ACTION SCOL-OBJECT)>

<OBJECT GNOME-OF-ZURICH
	(SYNONYM GNOME ZURICH)
	(ADJECTIVE ZURICH)
	(DESC "Gnome of Zurich")
	(FLAGS ACTORBIT CONTBIT OPENBIT)
	(ACTION ZGNOME-FCN)
	(LDESC "There is a Gnome of Zurich here.")>

<OBJECT DEPOSIT-BOX
	(IN GNOME-OF-ZURICH)
	(SYNONYM BOX)
	(ADJECTIVE DEPOSIT SAFETY)
	(DESC "safety deposit box")
	(FLAGS NDESCBIT TAKEBIT TRYTAKEBIT)
	(ACTION BOX-F)>

;"PALANTIR SECTION"

<OBJECT PDOOR
	(IN LOCAL-GLOBALS)
	(SYNONYM DOOR)
	(ADJECTIVE WOODEN OAK)
	(DESC "door made of oak")
	(FLAGS DOORBIT CONTBIT)
	(ACTION PDOOR-FCN)>

<OBJECT PWINDOW
	(IN LOCAL-GLOBALS)
	(SYNONYM WINDOW)
	(ADJECTIVE BARRED)
	(DESC "barred window")
	(FLAGS DOORBIT)
	(ACTION PWINDOW-FCN)>

<OBJECT LID-1
	(IN TINY-ROOM)
	(SYNONYM LID)
	(ADJECTIVE METAL)
	(DESC "metal lid")
	(FLAGS NDESCBIT CONTBIT)
	(ACTION PLID-FCN)>

<OBJECT LID-2
	(IN DREARY-ROOM)
	(SYNONYM LID)
	(ADJECTIVE METAL)
	(DESC "metal lid")
	(FLAGS NDESCBIT CONTBIT OPENBIT)
	(ACTION PLID-FCN)>

<OBJECT PTABLE
	(IN DREARY-ROOM)
	(SYNONYM TABLE)
	(ADJECTIVE DUSTY WOODEN)
	(DESC "table")
	(FLAGS NDESCBIT CONTBIT SURFACEBIT OPENBIT)
	(CAPACITY 40)>

<OBJECT PCRACK
	(IN DREARY-ROOM)
	(SYNONYM CRACK)
	(ADJECTIVE NARROW)
	(DESC "narrow crack")
	(FLAGS NDESCBIT)>

<OBJECT KEYHOLE-1
	(IN TINY-ROOM)
	(SYNONYM KEYHOLE HOLE)
	(DESC "keyhole")
	(FLAGS NDESCBIT OPENBIT SEARCHBIT)
	(ACTION PKH-FCN)
	(CAPACITY 2)>

<OBJECT KEYHOLE-2
	(IN DREARY-ROOM)
	(SYNONYM KEYHOLE HOLE)
	(DESC "keyhole")
	(FLAGS NDESCBIT OPENBIT SEARCHBIT)
	(ACTION PKH-FCN)
	(CAPACITY 2)>

<OBJECT LETTER-OPENER
	(IN GAZEBO-TABLE)
	(SYNONYM OPENER)
	(ADJECTIVE LETTER)
	(DESC "letter opener")
	(SIZE 2)
	(FLAGS TAKEBIT TOOLBIT)>

<OBJECT KEY
	(IN KEYHOLE-2)
	(SYNONYM KEY)
	(ADJECTIVE IRON RUSTY)
	(DESC "rusty iron key")
	(FLAGS TAKEBIT NDESCBIT TURNBIT TOOLBIT)
	(ACTION PKEY-FCN)
	(SIZE 2)>

<OBJECT PALANTIR-2
	(IN DREARY-ROOM)
	(SYNONYM PALANTIR SPHERE)
	(ADJECTIVE CRYSTAL BLUE)
	(DESC "blue crystal sphere")
	(FLAGS STAGGERED TAKEBIT TRANSBIT)
	(ACTION PALANTIR)
	(VALUE 20)
	(FDESC "In the center of the table sits a blue crystal sphere.")>

<OBJECT GAZEBO
	(IN LOCAL-GLOBALS)
	(SYNONYM GAZEBO STRUCTURE)
	(ADJECTIVE WOODEN)
	(DESC "gazebo")
	(FLAGS NDESCBIT)
	(ACTION GAZEBO-FCN)>

<OBJECT GAZEBO-TABLE
	(IN GAZEBO-ROOM)
	(SYNONYM TABLE)
	(ADJECTIVE TEA)
	(DESC "table")
	(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT)
	(CAPACITY 100)>

<OBJECT NEWSPAPER
	(IN GAZEBO-TABLE)
	(SYNONYM PAPER NEWSPAPER)
	(ADJECTIVE NEWS NEWSPAPER)
	(DESC "newspaper")
	(FLAGS TAKEBIT BURNBIT READBIT)
	(TEXT
"** U.S. News and Dungeon Report **|
|
FAMED ADVENTURER TO EXPLORE GREAT UNDERGROUND EMPIRE|
|
Our correspondents report that a world-famous and battle-hardened
adventurer has been seen in the vicinity of the Great Underground
Empire. Local grues have been reported sharpening their (slavering)
fangs....|
|
\"Zork II: The Wizard of Frobozz\" was written by Dave Lebling and Marc
Blank, and is (c) Copyright 1981, 1982, 1983 by Infocom, Inc.")>

<OBJECT PLACE-MAT
	(IN GAZEBO-TABLE)
	(SYNONYM MAT PLACEM)
	(ADJECTIVE PLACE)
	(DESC "place mat")
	(FLAGS TAKEBIT SURFACEBIT CONTBIT OPENBIT)
	(ACTION PLACE-MAT-FCN)
	(SIZE 12)
	(CAPACITY 20)>

<OBJECT TEAPOT
	(IN GAZEBO-TABLE)
	(SYNONYM TEAPOT POT)
	(ADJECTIVE CHINA TEA)
	(DESC "china teapot")
	(FLAGS TAKEBIT TRANSBIT CONTBIT OPENBIT)
	(CAPACITY 4)
	(ACTION TEAPOT-F)>

<ROUTINE TEAPOT-F ()
	 <COND (<VERB? CLOSE>
		<TELL "The teapot has no lid." CR>)>>

<OBJECT WATER
	(SYNONYM WATER QUANTITY LIQUID H2O)
	(DESC "quantity of water")
	(FLAGS TAKEBIT DRINKBIT)
	(ACTION WATER-FCN)
	(LDESC "There is some water here.")
	(SIZE 4)>

<OBJECT SALTY-WATER
	(SYNONYM WATER QUANTITY LIQUID H2O)
	(DESC "quantity of salty water")
	(FLAGS TAKEBIT DRINKBIT)
	(ACTION WATER-FCN)
	(LDESC "There is some water here.")
	(SIZE 4)>

<OBJECT GOLD-KEY
	(IN UNICORN)
	(SYNONYM KEY TREASURE)
	(ADJECTIVE DELICATE GOLD)
	(DESC "delicate gold key")
	(FLAGS STAGGERED NDESCBIT TAKEBIT TRYTAKEBIT)
	(ACTION UNICORN-FCN)
	(VALUE 15)
	(SIZE 3)>

<OBJECT RIBBON
	(IN UNICORN)
	(SYNONYM RIBBON)
	(ADJECTIVE VELVET SATIN)
	(DESC "ribbon")
	(ACTION UNICORN-FCN)
	(FLAGS NDESCBIT)>

<OBJECT ROSE
	(SYNONYM ROSE)
	(ADJECTIVE BEAUTIFUL RED PERFECT)
	(DESC "perfect rose")
	(FLAGS TAKEBIT)
	(SIZE 1)
	(ACTION ROSE-F)>

<ROUTINE ROSE-F ()
	 <COND (<VERB? SMELL>
		<TELL
"Unlike your efforts here, it comes out smelling like a rose."CR>)
	       (<VERB? EXAMINE>
		<TELL "A rose is a rose is a rose...." CR>)>>

<OBJECT GENIE
	(SYNONYM DEVIL DEMON GENIE DJINN)
	(DESC "demon")
	(FLAGS ACTORBIT INVISIBLE)
	(ACTION GENIE-FCN)
	(LDESC "There is a demon floating in midair here.")>

<OBJECT WIZARD
	(SYNONYM WIZARD MAGICIAN SORCEROR MAN)
	(ADJECTIVE STRANGE LITTLE FROBOZZ OLD)
	(DESC "Wizard of Frobozz")
	(LDESC
"The Wizard of Frobozz is here, eyeing you warily.")
	(FLAGS ACTORBIT CONTBIT OPENBIT)
	(ACTION WIZARD-FCN)>

<OBJECT WAND
	(IN WIZARD)
	(SYNONYM WAND)
	(ADJECTIVE MAGIC)
	(DESC "Wizard's magic wand")
	(FLAGS STAGGERED NDESCBIT TAKEBIT TRYTAKEBIT)
	(ACTION WAND-FCN)
	(VALUE 30)>

<OBJECT SWORD
	(IN INSIDE-BARROW)
	(SYNONYM SWORD ORCRIST GLAMDRING BLADE)
	(ADJECTIVE ELVISH OLD ANTIQUE)
	(DESC "elvish sword")
	(FLAGS TAKEBIT WEAPONBIT TRYTAKEBIT)
	(ACTION SWORD-FCN)
	(LDESC "An Elvish sword of great antiquity is here.")
	(FDESC "A sword of Elvish workmanship is on the ground.")
	(SIZE 30)>

<OBJECT REPELLENT
	(IN ROOM-8)
	(SYNONYM REPELLENT CAN)
	(ADJECTIVE GRUE MAGIC)
	(DESC "Frobozz Magic Grue Repellent")
	(FLAGS TAKEBIT READBIT)
	(ACTION REPELLENT-FCN)
	(FDESC
"A spray can is in the corner. In large type is the legend \"Frobozz Magic
Grue Repellent\".")
	(TEXT
"!!! FROBOZZ MAGIC GRUE REPELLENT !!!|
|
Instructions for use: Apply liberally to creature to be protected.
Duration of effect is unpredictable. Use only in place of death!|
|
(No warranty expressed or implied)")>

<ROOM DEAD-PALANTIR-1
	(IN ROOMS)
	(LDESC " ")
	(DESC "Room of Red Mist")
	(WEST TO DEAD-PALANTIR-2)
	(FLAGS RLANDBIT ONBIT)
	(ACTION DEAD-PALANTIR)
	(GLOBAL GLOBAL-PALANTIR)>

<ROOM DEAD-PALANTIR-2
	(IN ROOMS)
	(LDESC " ")
	(DESC "Room of Blue Mist")
	(WEST TO DEAD-PALANTIR-3)
	(FLAGS RLANDBIT ONBIT)
	(ACTION DEAD-PALANTIR)
	(GLOBAL GLOBAL-PALANTIR)>

<ROOM DEAD-PALANTIR-3
	(IN ROOMS)
	(LDESC " ")
	(DESC "Room of White Mist")
	(WEST TO DEAD-PALANTIR-4)
	(FLAGS RLANDBIT ONBIT)
	(ACTION DEAD-PALANTIR)
	(GLOBAL GLOBAL-PALANTIR)>

<ROOM DEAD-PALANTIR-4
	(LDESC " ")
	(IN ROOMS)
	(DESC "Room of Black Mist")
	(FLAGS RLANDBIT ONBIT)
	(ACTION DEAD-PALANTIR)>

<OBJECT GLOBAL-PALANTIR
	(IN LOCAL-GLOBALS)
	(SYNONYM SPHERE)
	(ADJECTIVE RED BLUE WHITE CRYSTAL)
	(DESC "sphere")
	(FLAGS NDESCBIT)
	(ACTION GLOBAL-PALANTIRS)>

<OBJECT FOOTPAD
	(IN GLOBAL-OBJECTS)
	(SYNONYM FOOTPAD)
	(DESC "footpad")
	(ACTION FOOTPAD-F)>

<ROUTINE FOOTPAD-F ()
	 <COND (<VERB? EXAMINE>
		<TELL "A footpad is a thief." CR>)>>

<OBJECT COMPASS
	(IN GLOBAL-OBJECTS)
	(DESC "compass")
	(SYNONYM COMPASS)
	(ACTION COMPASS-F)>

<ROUTINE COMPASS-F ()
	 <COND (<VERB? FIND>
		<TELL
"It's on your person. And lucky for you, or you would become hopelessly
lost." CR>)
	       (<VERB? DROP THROW OVERBOARD>
		<TELL
"You can't get rid of it. It is an extension of yourself." CR>)
	       (<VERB? EXAMINE>
		<TELL
"It's one of those gizmos with a needle and a card with the eight major
compass directions. Simple, but effective." CR>)
	       (<VERB? READ>
		<TELL
"It doesn't make very interesting reading - just the compass directions." CR>)
	       (T
		<TELL
"You can't do that. And don't bother to ask why." CR>)>>
```
