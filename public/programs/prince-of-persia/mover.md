---
title: "MOVER.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/MOVER.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/MOVER.S"
year: 1989
author: "Jordan Mechner"
slug: "mover"
order: 6
description: "This file implements the physics and object animations that gave Prince of Persia its cinematic realism, using 6502 assembly on the Apple II."

summary:
  - point: "Introduces object transition lists for dynamic animations"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"
  - point: "Uses bank-switched memory to fit complex physics into 128KB"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Rotoscoping-inspired animation routines for lifelike movement"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Innovative use of timers for object state transitions"
    link: "https://en.wikipedia.org/wiki/Real-time_computing"
    link_label: "Real-time computing"
  - point: "First cinematic platformer with weighted physics"
    link: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    link_label: "Cinematic platformer"

enhancements:
  - id: "search-object-in-transition-list"
    line_start: 97
    line_end: 119
    title: "How Objects Were Found in Motion"
    wikipedia_url: "https://en.wikipedia.org/wiki/Linked_list"
    image_url: ""
    image_caption: ""
    content: "This subroutine, `searchtrob`, scans the transition list to find an object based on its location and screen coordinates. The programmer, Jordan Mechner, needed a way to efficiently track objects in motion, such as gates, spikes, and slicers, which could be triggered or animated dynamically. The routine loops through the list of objects, comparing their attributes to the input parameters, and returns the index of the matching object or zero if not found. In 1989, the Apple II's limited memory and processing power required clever data structures like this to manage dynamic game elements. Mechner's approach resembles a simplified linked list, where each object is indexed in a fixed array. This technique influenced later games that used similar lists to manage dynamic entities, such as Doom's active object lists. It also demonstrates early attempts at real-time object management in games, a precursor to modern physics engines."
  - id: "add-object-to-transition-list"
    line_start: 121
    line_end: 156
    title: "Adding Objects to the Animation Queue"
    wikipedia_url: "https://en.wikipedia.org/wiki/Queue_(abstract_data_type)"
    image_url: ""
    image_caption: ""
    content: "The `addtrob` subroutine adds new objects to the transition list or updates their direction if already listed. This routine ensures that dynamic objects like gates or spikes can be animated or triggered correctly. Mechner designed this to handle scenarios where multiple objects might be activated simultaneously, such as stepping on a pressure plate. The subroutine checks if the object is already in the list using `searchtrob`, then either updates its direction or appends it to the list. This method reflects the constraints of the Apple II, where memory was scarce, and efficient data management was critical. The idea of managing dynamic entities in a queue-like structure became a staple in game development, influencing later systems like Unreal Engine's actor management. It showcases how Mechner's work anticipated the need for scalable systems in increasingly complex games."
  - id: "save-and-load-mob-data"
    line_start: 175
    line_end: 208
    title: "Saving and Loading Moving Objects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Serialization"
    image_url: ""
    image_caption: ""
    content: "The `savemob` and `loadmob` routines serialize and deserialize the state of moving objects (MOBs). MOBs include dynamic entities like the Prince, enemies, and environmental hazards. These routines store attributes such as position, velocity, and type into indexed arrays, allowing the game to manage multiple objects efficiently. Serialization was a novel approach for games on the Apple II, where memory constraints required compact data storage. Mechner's implementation allowed for seamless transitions between gameplay states, such as saving progress or handling complex animations. This technique influenced later games that relied on object serialization for save systems and dynamic world states, such as The Legend of Zelda and SimCity. It also highlights how early developers tackled the challenge of managing persistent object states in real-time environments."
  - id: "trigger-slicer-animation"
    line_start: 210
    line_end: 238
    title: "The Slicer: A Deadly Precision Mechanism"
    wikipedia_url: "https://en.wikipedia.org/wiki/Physics_engine"
    image_url: ""
    image_caption: ""
    content: "The `TRIGSLICER` subroutine triggers the animation of the slicer, a deadly obstacle that moves back and forth to threaten the player. It checks the slicer's current state and ensures it is not already in motion before adding it to the transition list. Mechner's design reflects the game's emphasis on precise timing and realistic physics, where obstacles behave predictably but dynamically. The slicer animation was inspired by cinematic techniques, aiming to create tension and challenge through lifelike movement. This approach to obstacle animation influenced later platformers like Another World and Flashback, which adopted similar techniques for dynamic hazards. It also showcases how Mechner used the limited capabilities of the Apple II to create a sense of realism and danger, a hallmark of Prince of Persia's gameplay."
  - id: "animate-transitional-objects"
    line_start: 629
    line_end: 684
    title: "Animating the World, Frame by Frame"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "The `ANIMTRANS` routine iterates through the transition list to animate each object frame by frame. It checks if objects have stopped moving and removes them from the list, ensuring efficient memory usage. This routine is the backbone of Prince of Persia's dynamic world, where gates close, spikes retract, and slicers slice in response to player actions. Mechner's implementation reflects the constraints of the Apple II, where every byte of memory and CPU cycle mattered. By managing animations in a centralized routine, he created a cohesive system that allowed for complex interactions between objects. This technique influenced later games that relied on centralized animation systems, such as Super Mario World and Sonic the Hedgehog. It also demonstrates how Mechner's attention to detail and efficiency shaped the game's lifelike feel, a key factor in its success."
  - id: "animate-gate-mechanics"
    line_start: 832
    line_end: 920
    title: "The Gate: A Study in Motion Physics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Physics_engine"
    image_url: ""
    image_caption: ""
    content: "The `animgate` routine handles the animation of gates, including opening, closing, and jamming states. It uses a velocity index (`trdirec`) to determine the gate's speed and direction, simulating realistic motion. Gates can pause, jam, or slam shut based on their state and interactions with other objects. Mechner's design reflects his cinematic approach, where even simple objects like gates have weight and momentum. This routine showcases the game's emphasis on realism, where objects behave predictably but dynamically. The gate mechanics influenced later games that incorporated realistic physics, such as Half-Life and Portal. It also highlights how Mechner used the Apple II's limited resources to create a sense of immersion and tension, a hallmark of Prince of Persia's gameplay."
  - id: "animate-slicer-mechanics"
    line_start: 950
    line_end: 1009
    title: "The Slicer: Animation Meets Danger"
    wikipedia_url: "https://en.wikipedia.org/wiki/Obstacle_(video_games)"
    image_url: ""
    image_caption: ""
    content: "The `animslicer` routine animates the slicer, advancing its frame and checking its state. It ensures the slicer retracts when the player dies and purges it from the transition list when fully retracted. The slicer is one of the game's most iconic obstacles, combining precise timing with lifelike animation. Mechner's design reflects his cinematic approach, where even hazards have a sense of realism and danger. This routine influenced later games that incorporated dynamic obstacles, such as Tomb Raider and Dark Souls. It also highlights how Mechner used the Apple II's limited resources to create a sense of tension and challenge, a hallmark of Prince of Persia's gameplay."
  - id: "animating-flask-object"
    line_start: 1011
    line_end: 1035
    title: "Animating a Flask: State and Frame Logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section animates the flask object, a collectible item in the game. The routine begins by checking whether the object is visible on the current screen (`trscrn` compared to `VisScrn`). If visible, it extracts the potion number and frame number from the `state` variable using bitwise operations. The `GETFLASKFRAME` subroutine increments the frame number, ensuring smooth animation. This approach reflects the constraints of the Apple II, where memory and processing power were limited, requiring developers to pack multiple pieces of information into single bytes. Jordan Mechner's attention to detail in animating even minor objects contributed to the game's immersive feel. Techniques like this influenced later games, where object states and animations became integral to gameplay mechanics."
  - id: "animating-sword-object"
    line_start: 1037
    line_end: 1056
    title: "Animating a Sword: Randomized Gleam Effect"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This routine animates the sword object, introducing a randomized gleam effect. The `state` variable is decremented, and if it reaches zero, a random number generator (`rnd`) is called to reset the state to a new value between 40 and 103. This randomness adds a dynamic visual element, making the sword appear to shimmer unpredictably. Randomized animations like this were rare in 1980s platformers, where most objects followed rigid, predefined patterns. Mechner's use of randomness added a layer of visual polish that complemented the game's cinematic tone. This technique influenced later games, particularly those striving for dynamic and lifelike environments."
  - id: "animating-torch-object"
    line_start: 1058
    line_end: 1075
    title: "Animating a Torch: Flame Frame Cycling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `animtorch` routine animates the torch object by cycling through flame frames. It checks whether the torch is visible on the current screen (`trscrn` vs. `VisScrn`) and calls the `GETFLAMEFRAME` subroutine to increment the frame number. The flame animation wraps around when it reaches the last frame, creating a continuous loop. This technique demonstrates efficient use of limited memory, as the frame cycling logic is compact and avoids unnecessary computations. The realistic flickering of torches added to the game's atmospheric design, a hallmark of Mechner's cinematic approach. This method of looping animations became standard in later games, especially those with dynamic lighting effects."
  - id: "animating-spikes-object"
    line_start: 1119
    line_end: 1169
    title: "Animating Spikes: Extension and Retraction Logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `animspikes` routine handles the animation of spikes, a key hazard in Prince of Persia. The spikes alternate between extension and retraction states, with a timer controlling the transitions. The routine uses the high bit of the `state` variable to differentiate between timer mode and frame mode. When the timer expires, the spikes retract, resetting to a 'ready' state. This logic reflects the game's emphasis on precise timing and player anticipation, as players must navigate hazards with split-second accuracy. The spike animation added tension and challenge, influencing the design of traps in later platformers like Another World and Flashback."
  - id: "animating-loose-floor"
    line_start: 1171
    line_end: 1236
    title: "Animating Loose Floors: Detachment and MOB Creation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `animfloor` routine animates loose floor tiles, which detach after a timer reaches its maximum value. When detachment occurs, the routine changes the object ID from 'loose floor' to 'empty space' and creates a new MOB (mobile object) to simulate the falling floor. This MOB inherits the position and velocity of the original object, ensuring continuity in the game's physics simulation. The routine also includes logic for floors that only 'wiggle' without detaching, adding visual cues for the player. This system demonstrates Mechner's innovative approach to object interactions and physics modeling, which influenced later games with destructible environments and dynamic object behaviors."
  - id: "checking-object-visibility"
    line_start: 1250
    line_end: 1261
    title: "Checking Object Visibility: Screen and Location Logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `check` routine determines whether an object is visible on the current screen and at a specific location. It compares the object's screen (`trscrn`) and location (`trloc`) against the visible screen (`VisScrn`) and predefined bounds. If the object is visible, the routine clears the carry flag and sets the Y register to the redraw buffer index. This efficient visibility check minimizes unnecessary redraws, optimizing performance on the Apple II's limited hardware. Mechner's use of such checks ensured smooth gameplay even with the game's detailed animations and physics. Visibility algorithms like this became standard practice in later games, especially those with large, scrolling environments."
  - id: "animating-falling-floors"
    line_start: 1583
    line_end: 1635
    title: "Animating Falling Floors: MOB Update Loop"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `ANIMMOBS` routine updates all falling floor MOBs (mobile objects) in motion. It iterates through the MOB list, animating each one (`animmob`), checking for collisions (`checkcrush`), and saving updated states (`savemob`). The routine also removes MOBs that have ceased to exist, compacting the list to optimize memory usage. This loop demonstrates Mechner's mastery of resource management on the Apple II, where every byte of memory was precious. The falling floor mechanic added realism and urgency to the gameplay, influencing later games with dynamic environments and physics-based hazards."
  - id: "crushing-character-with-mobs"
    line_start: 1753
    line_end: 1931
    title: "Crushing the Character: Collision Detection and Consequences"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `checkcrush` and `crushchar` routines handle the collision detection and consequences of falling floors crushing the player character. `checkcrush` compares the MOB's screen, block position, and vertical position against the character's location, determining whether a crush occurs. If a collision is detected, `crushchar` adjusts the character's position, reduces their strength, and triggers an animation sequence. This detailed collision logic reflects Mechner's focus on realism and player immersion. The crushing mechanic added stakes to the gameplay, influencing later games with physics-based interactions and player consequences, such as Tomb Raider and Uncharted."
  - id: "floorpiece-visibility-check"
    line_start: 2001
    line_end: 2077
    title: "How the Game Decides What You See"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "This section begins with a routine labeled ATM, which checks whether a floorpiece (a piece of the game world) is visible on the screen. The code evaluates the position of the floorpiece relative to the screen boundaries and adjusts its vertical position temporarily for calculations. The programmer, Jordan Mechner, was solving the problem of efficiently determining which pieces of the environment needed to be processed for rendering and interaction. On the Apple II, computational resources were scarce, and every cycle mattered. By limiting processing to visible elements, Mechner optimized the game’s performance. In 1989, the Apple IIe/IIc was nearing the end of its commercial life, but its 6502 processor remained a popular choice for developers due to its simplicity and affordability. Mechner’s approach here reflects the constraints of the era: limited memory (128KB, bank-switched) and no dedicated graphics hardware. The visibility check is a precursor to modern techniques like frustum culling in 3D engines, where only objects within the camera’s view are processed. This visibility routine contributed to Prince of Persia’s fluid gameplay and cinematic feel. By ensuring only relevant objects were processed, Mechner could allocate more cycles to animations and physics. Later platformers and cinematic games borrowed heavily from this optimization. Techniques like this became standard practice in game engines such as Unity and Unreal, where object visibility calculations are integral to rendering pipelines."
  - id: "add-mob-to-object-table"
    line_start: 2079
    line_end: 2112
    title: "Adding Falling Floors to the Game World"
    wikipedia_url: "https://en.wikipedia.org/wiki/Physics_engine"
    image_url: ""
    image_caption: ""
    content: "The addmobobj routine integrates a mobile object (MOB) into the game’s object table. This table tracks dynamic entities like falling floors, ensuring they interact correctly with the player and environment. The routine assigns properties such as type, position, and frame index to the object, preparing it for rendering and physics updates. At the time, handling dynamic objects in games was a challenge due to limited memory and processing power. The Apple II’s 6502 processor lacked hardware support for object management, so developers had to implement their own systems. Mechner’s object table is an early example of a physics engine, where objects are tracked and updated based on their state and interactions. This routine laid the groundwork for more sophisticated object management systems in later games. By abstracting dynamic entities into a table, Mechner enabled complex interactions like falling floors and moving platforms, which became hallmarks of cinematic platformers. Modern game engines use similar principles, with object tables evolving into entity-component systems that allow for even greater flexibility and scalability."
  - id: "shake-floors-routine"
    line_start: 2113
    line_end: 2128
    title: "The Code Behind the Shaking Floors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Physics_engine"
    image_url: ""
    image_caption: ""
    content: "SHAKEM is a routine that triggers the shaking of floors in the game. It checks the current level and screen visibility before marking specific blocks as loose. This adds a dynamic element to the environment, making the game world feel alive and reactive to the player’s actions. In the mid-1980s, environmental interactivity in games was rare. Most platformers featured static levels with little to no dynamic behavior. Mechner’s decision to include shaking floors was part of his effort to create a more immersive and cinematic experience. The Apple II’s hardware constraints meant that such effects had to be implemented carefully, balancing interactivity with performance. This routine influenced later games by demonstrating how environmental dynamics could enhance gameplay. The concept of interactive environments became a staple in platformers and action games, inspiring features like destructible terrain in games such as Worms and dynamic physics in titles like Half-Life 2."
  - id: "shake-loose-floor"
    line_start: 2130
    line_end: 2147
    title: "What Happens When Floors Start to Fall"
    wikipedia_url: "https://en.wikipedia.org/wiki/Physics_engine"
    image_url: ""
    image_caption: ""
    content: "SHAKEM1 builds on the previous routine by iterating through blocks marked as loose and triggering their shaking behavior. It uses a loop to process each block, checking its state and calling the shakeit routine if necessary. This ensures that only relevant blocks are updated, conserving processing power. In 1989, iterating through game objects efficiently was a critical skill for developers. The Apple II’s limited resources meant that every cycle spent on unnecessary calculations could impact performance. Mechner’s use of loops and conditional checks reflects the careful optimization required to make Prince of Persia run smoothly. This approach to dynamic object management influenced later games by showing how to handle complex interactions without overwhelming the hardware. Techniques like this evolved into modern physics engines, where object states are updated based on interactions and environmental factors. Games like Minecraft and Terraria use similar principles to manage dynamic environments."
  - id: "add-loose-floor-to-trans-list"
    line_start: 2149
    line_end: 2168
    title: "The Final Step for Falling Floors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Physics_engine"
    image_url: ""
    image_caption: ""
    content: "The shakeit routine adds a loose floor to the trans list, marking it as active and ready for further processing. It sets properties like direction and screen position, ensuring the floor behaves correctly during gameplay. This routine is the culmination of the shaking floor mechanics, tying together visibility checks, state updates, and dynamic behavior. Mechner’s implementation reflects the ingenuity required to create dynamic environments on the Apple II. By breaking the problem into smaller routines, he optimized performance while maintaining the cinematic feel of the game. The trans list acts as a precursor to modern event queues, where objects are processed based on their state and interactions. This routine contributed to the immersive gameplay of Prince of Persia, inspiring developers to explore dynamic environments in their own games. The concept of event-driven object management became a cornerstone of game design, influencing titles like The Legend of Zelda: Breath of the Wild and Red Dead Redemption 2, where dynamic environments play a central role."

---

```asm
* mover
org = $ee00
PalaceEditor = 0
 tr on
 lst off
*-------------------------------
 org org

 jmp ANIMTRANS
 jmp TRIGSPIKES
 jmp PUSHPP
 jmp BREAKLOOSE1
 jmp BREAKLOOSE

 jmp ANIMMOBS
 jmp ADDMOBS
 jmp CLOSEEXIT
 jmp GETSPIKES
 jmp SHAKEM

 jmp TRIGSLICER
 jmp TRIGTORCH
 jmp GETFLAMEFRAME
 jmp SMASHMIRROR
 jmp JAMSPIKES

 jmp TRIGFLASK
 jmp GETFLASKFRAME
 jmp TRIGSWORD
 jmp JAMPP

*-------------------------------
 lst
 put eq
 lst
 put gameeq
 lst
 put seqdata
 lst
 put movedata
 lst
 put soundnames

 dum locals
state ds 1
temp1 ds 2
linkindex ds 1
pptype ds 1
mobframe ds 1
underFF ds 1
 dend

*-------------------------------
gatevel db 0,0,0,20,40,60,80,100,120

maxgatevel = *-gatevel-1

*-------------------------------
pptimer = 5 ;pressplate timer setting (min=3, max=30)
;(# cycles till plate pops up)

spiketimer = 15+128 ;spike timer setting (2-127) +128
;(# cycles till spikes retract)

slicetimer = 15 ;# cycles between slices

gatetimer = gmaxval+50 ;# cycles gate stays open

loosetimer = Ffalling ;# cycles till floor detaches

* falling floor params

wiggletime = 4 ;# wiggling frames
FFaccel = 3
FFtermvel = 29
crumbletime = 2 ;# crumbling frames
crumbletime2 = 10
disappeartime = 2
FFheight = 17
CrushDist = 30

* wipe heights

loosewipe = 31 ;[might erase spikes]
spikewipe = 31
slicerwipe = 63
platewipe = 16

gateinc db -1,4,4 ;for trdirec = 0,1,2 (down,up,upjam)

exitinc = 4
emaxval = 43*4

maxtr = trobspace-1
maxmob = mobspace-1

*-------------------------------
*
* Search trans list for object (trloc,trscrn)
*
* In: numtrans, trloc, trscrn
* Out: X = index, 0 if not listed
*
*-------------------------------
searchtrob
 ldx numtrans
 beq :rts

:loop lda trloc,x
 cmp trloc
 bne :next
 lda trscrn,x
 cmp trscrn
 beq :rts ;found it

:next dex
 bne :loop

:rts rts

*-------------------------------
*
*  Add a new object to transition list
*  If it's already listed, just change trdirec to new value
*
*  In: trdirec, trloc, trscrn
*
*-------------------------------
addtrob
 jsr searchtrob ;Is object already listed?

 cpx #0
 bne :chdir ;Yes--just change direc

* It's not on the list - add it

 ldx numtrans
 cpx #maxtr
 beq :rts ;too many objects--trigger fails

 inx
 stx numtrans

 lda trdirec
 sta trdirec,x
 lda trloc
 sta trloc,x
 lda trscrn
 sta trscrn,x
 rts

*  Object already listed - change direction

:chdir lda trdirec
 sta trdirec,x
:rts rts

*-------------------------------
*
*  Add a MOB to MOB list
*
*-------------------------------
addamob
 ldx nummob
 cpx #maxmob
 beq :rts

 inx
 stx nummob

 jmp savemob

:rts rts

*-------------------------------
*
*  S A V E / L O A D   M O B
*
*-------------------------------
savemob
 lda mobx
 sta mobx,x
 lda moby
 sta moby,x
 lda mobscrn
 sta mobscrn,x
 lda mobvel
 sta mobvel,x
 lda mobtype
 sta mobtype,x
 lda moblevel
 sta moblevel,x
 rts

loadmob
 lda mobx,x
 sta mobx
 lda moby,x
 sta moby
 lda mobscrn,x
 sta mobscrn
 lda mobvel,x
 sta mobvel
 lda mobtype,x
 sta mobtype
 lda moblevel,x
 sta moblevel
]rts rts

*-------------------------------
*
*  Trigger slicer
*
*  In: A = initial state
*
*-------------------------------
TRIGSLICER
 sta state ;temp

 lda (BlueSpec),y
 beq :ok
 cmp #slicerRet
 bcc ]rts ;in mid-slice--don't interfere

* Between slices--OK to trigger

:ok sty trloc

 lda state
 sta (BlueSpec),y

 lda VisScrn
 sta trscrn

 lda #1
 sta trdirec

 jmp addtrob ;add slicer to trans list

*-------------------------------
*
* Close exit
* (Open it all the way & let it slam shut)
*
*-------------------------------
CLOSEEXIT
 sty trloc
 sta trscrn

 lda #emaxval ;all the way open
 sta (BlueSpec),y

 lda #3 ;coming down fast
 sta trdirec

 jmp addtrob ;add to trans list

*-------------------------------
SMASHMIRROR
 lda #86
 sta (BlueSpec),y
]rts rts

*-------------------------------
*
* Trigger flask
*
*-------------------------------
TRIGFLASK
 sty trloc
 sta trscrn

 lda #1
 sta trdirec

* Get rnd starting frame

 jsr rnd
 and #7
 ora (BlueSpec),y
 sta (BlueSpec),y
 jmp addtrob

*-------------------------------
*
* Trigger sword
*
*-------------------------------
TRIGSWORD
 sty trloc
 sta trscrn
 lda #1
 sta trdirec
 jsr rnd
 and #$1f
 sta (BlueSpec),y
 jmp addtrob

*-------------------------------
*
* Trigger torch
*
*-------------------------------
TRIGTORCH
 sty trloc
 sta trscrn

 lda #1
 sta trdirec

* Get rnd starting frame

 jsr rnd
 and #$f
 sta (BlueSpec),y
 jmp addtrob

*-------------------------------
*
*  Trigger spikes
*
*-------------------------------
TRIGSPIKES
 lda (BlueSpec),y
 beq :ready ;State = 0: spikes are fully retracted--
;spring 'em
 bpl ]rts ;Nonzero, hibit clear: spikes are in motion
 cmp #$ff
 beq ]rts ;jammed
 lda #spiketimer ;Nonzero, hibit set: spikes are fully
 sta (BlueSpec),y ;extended--reset timer to max value
]rts rts
;Spring spikes
:ready ldx #1
]cont stx trdirec
 sty trloc

 lda tempscrn ;from rdblock
 sta trscrn

 jsr addtrob ;add spikes to trans list
 jsr redspikes

 lda #GateDown ;TEMP
 jmp addsound

*-------------------------------
*
* Jam spikes (& remove from trans list)
*
* In: Same as TRIGSPIKES
*
*-------------------------------
JAMSPIKES
 lda #$ff
 sta (BlueSpec),y
 ldx #-1 ;stop object
 bmi ]cont

*-------------------------------
*
* Get spike status: 0 = safe, 1 = sprung, 2 = springing
*
*-------------------------------
GETSPIKES
 lda (BlueSpec),y
 bmi :sprung
 beq :safe ;fully retracted

 cmp #spikeExt
 bcc :springing

:safe lda #0 ;safe: retracted or retracting
 rts

:sprung cmp #$ff ;jammed (body impaled on them)?
 beq :safe
 lda #1
 rts

:springing lda #2
]rts rts

*-------------------------------
*
*  Break off section of loose floor
*
*-------------------------------
BREAKLOOSE
 lda #1

BREAKLOOSE1 ;in: A = initial state
 sta state

 lda (BlueType),y
 and #reqmask ;required floorpiece?
 bne ]rts ;yes--blocked below

 lda (BlueSpec),y
 bmi :ok ;wiggling
 bne ]rts ;already triggered

:ok lda state
 sta (BlueSpec),y

 sty trloc

 lda tempscrn ;from rdblock
 sta trscrn

 lda #0 ;down
 sta trdirec

 jsr addtrob ;add floor to trans list
 jmp redloose

*-------------------------------
*
*  Depress pressplate
*
*  In: results of RDBLOCK
*     (tempblockx-y, tempscrn refer to pressplate)
*
*-------------------------------
PUSHPP
 lda (BlueType),y
 and #idmask
 sta pptype ;pressplate/upressplate/rubble
pushpp1
 lda (BlueSpec),y ;LINKLOC index
 sta linkindex
 tax
 jsr gettimer

 cmp #31
 beq ]rts ;plate is permanently down

 cmp #2
 bcs :starttimer ;plate is temporarily down--
;just restart timer

*  Fresh plate has been stepped on--reset timer

 lda #pptimer ;put plate down for the count
 jsr chgtimer

 sty trloc

 lda tempscrn ;from rdblock1
 sta trscrn

 lda #1
 sta trdirec

 jsr addtrob ;add to trans list

 jsr redplate ;add plate to redraw list

 lda #1
 sta alertguard
 lda #PlateDown
 jsr addsound

:trig jmp trigger ;trigger something?

* plate is already down--just restart timer
* (& retrigger gates)

:starttimer lda #pptimer
 jsr chgtimer
 jmp :trig

*-------------------------------
*
* Jam pressplate (dead weight)
*
* In: Same as PUSHPP
*
*-------------------------------
JAMPP
 lda (BlueType),y
 and #idmask
 sta pptype
 cmp #pressplate
 beq :1

 lda #floor
 sta (BlueType),y
 lda #0
 sta (BlueSpec),y
 lda #rubble
 sta pptype
 bne pushpp1

:1 lda #dpressplate
 sta (BlueType),y
 bne pushpp1

*-------------------------------
*
*  We just pushed a pressplate -- did we trigger something?
*
*  In: linkindex, pptype
*
*-------------------------------
trigger
:loop ldx linkindex

 lda LINKLOC,x
 cmp #$ff
 beq :rts ;linked to nothing

 jsr getloc
 sta trloc

 jsr getscrn ;get block # and screen # of
 sta trscrn ;gadget to trigger

 jsr calcblue
 ldy trloc
 lda (BlueType),y
 and #idmask ;get objid into A

 jsr trigobj ;call appropriate trigger routine

 lda trdirec
 bmi :skip ;trigger fails

 jsr addtrob ;add gadget to transition list

:skip ldx linkindex
 inc linkindex

 jsr getlastflag
 beq :loop

:rts rts

*-------------------------------
*
*  Trigger object
*
*  Out: trdirec (-1 if trigger fails)
*
*-------------------------------
trigobj
 cmp #gate
 bne :1
 jmp triggate
:1
 cmp #exit
 bne :2
 jmp openexit
:2
]rts rts

*-------------------------------
*
* Open exit
*
*-------------------------------
openexit
 lda (BlueSpec),y
 bne :fail ;Exit can only open, not close

 lda #1
 bpl :1

:fail lda #-1
:1 sta trdirec
 rts

*-------------------------------
*
*  Trigger gate
*
*  In: BlueSpec, Y, pptype
*  Out: trdirec
*
*-------------------------------
triggate
 lda (BlueSpec),y ;current gate position

 ldx pptype
 cpx #upressplate
 beq :raise
 cpx #rubble
 beq :jam

* Lower gate

:lower cmp #gminval ;at bottom?
 bne :yeslower ;no--lower it
;yes--trigger fails
:fail jmp stopobj

:yeslower
 lda #3 ;down fast
 sta trdirec
 rts

:jam ldx #2 ;open & jam
 stx trdirec
 cmp #gmaxval
 bcc :1
 lda #$ff ;"jammed open" state
 bmi :3

:raise ldx #1 ;open
 stx trdirec
 cmp #$ff
 beq :fail ;jammed
 cmp #gmaxval
 bcc :1
 lda #gatetimer
:3 sta (BlueSpec),y ;reset timer
 bne :fail
:1
]rts rts

*-------------------------------
*
*  Animate transitional objects
*  (Advance each object to next frame in animation table)
*
*-------------------------------
]cleanflag ds 1

ANIMTRANS
 lda #0
 sta trobcount

 ldx numtrans ;# objs in trans (0-maxtr)
 beq ]rts

 lda #0
 sta ]cleanflag

:loop stx tempnt

 jsr animobj ;animate obj #x

 ldx tempnt

 lda trdirec ;has object stopped?
 bpl :1 ;no

 lda #-1 ;yes--mark it for deletion
 sta ]cleanflag ;& set cleanup flag

:1 sta trdirec,x ;save direction change if any

 dex
 bne :loop

 lda ]cleanflag
 beq ]rts

*  Delete all stopped objects (trdirec = ff)
*  (i.e., copy entire list back onto
*  itself, omitting stopped objects)

 ldx #1 ;source index (assume numtrans > 0)
 ldy #0 ;dest index

:dloop lda trdirec,x
 cmp #$ff
 beq :next

 iny
 sta trdirec,y
 lda trloc,x
 sta trloc,y
 lda trscrn,x ;source
 sta trscrn,y ;dest

:next inx

 cpx numtrans
 bcc :dloop
 beq :dloop

 sty numtrans
 rts

*-------------------------------
*
*  Animate TROB #x
*
*-------------------------------
animobj lda trloc,x
 sta trloc
 lda trscrn,x
 sta trscrn
 lda trdirec,x
 sta trdirec

* Find out what kind of object it is

 lda trscrn
 jsr calcblue

 ldy trloc
 lda (BlueSpec),y
 sta state ;original state

 lda (BlueType),y
 and #idmask ;objid

* and branch to appropriate subroutine

 cmp #torch
 bne :1
 jsr animtorch
 jmp :done

:1 cmp #upressplate
 beq :plate
 cmp #pressplate
 bne :2
:plate jsr animplate
 jmp :done

:2 cmp #spikes
 bne :3
 jsr animspikes
 jmp :done

:3 cmp #loose
 bne :31
 jsr animfloor
 jmp :done

:31 cmp #space ;(loose floor turns into space)
 bne :4
 jsr animspace
 jmp :done

:4 cmp #slicer
 bne :5
 jsr animslicer
 jmp :done

:5 cmp #gate
 bne :6
 jsr animgate
 jmp :done

:6 cmp #exit
 bne :7
 jsr animexit
 jmp :done

:7 cmp #flask
 bne :8
 jsr animflask
 jmp :done

:8 cmp #sword
 bne :9
 jsr animsword
 jmp :done

:9 jsr stopobj ;obj is none of these--purge it from trans list!

:done lda state
 ldy trloc
 sta (BlueSpec),y

:rts rts

*-------------------------------
*
* Animate exit
*
*-------------------------------
animexit
 ldx trdirec
 bmi :cont
 cpx #3
 bcs :downfast ;>= 3: coming down fast

 lda #RaisingExit
 jsr addsound

 lda state
 clc
 adc #exitinc
 sta state

 cmp #emaxval
 bcs :stop

:cont jmp redexit

:stop jsr stopobj

 lda #GateDown
 jsr addsound
 lda #s_Stairs
 ldx #15
 jsr cuesong
 lda #1
 sta exitopen
 jsr mirappear
 jmp :cont

* Exit coming down fast

:downfast
 cpx #maxgatevel
 bcs :2
 inx
 stx trdirec
:2 lda state
 sec
 sbc gatevel,x
 sta state
 beq :cont
 bcs :cont

 jsr stopobj

 lda #0
 sta state

 lda #GateSlam
 jsr addsound

 jmp :cont

*-------------------------------
*
*  Animate gate
*
*-------------------------------
animgate
 ldx trdirec
 bmi :cont ;gate has stopped

 cpx #3 ;trdirec >= 3: coming down fast
 bcs :downfast

 lda state
 cmp #$ff
 beq :stop ;jammed open
 clc
 adc gateinc,x
 sta state

 cpx #0
 beq :goingdown

 cmp #gmaxval
 bcs :attop ;stop at top

 lda #RaisingGate
 jsr addsound

 jmp :cont

:goingdown
 cmp #gminval
 beq :stop
 bcc :stop

 cmp #gmaxval
 bcs :cont ;at top
 jsr addlowersound

:cont jmp redgate ;mark gate for redrawing

:stop jsr stopobj

 lda #GateDown
 jsr addsound

 jmp :cont

* Gate has reached top
* trdirec = 1: pause, then start to close again
* trdirec = 2: jam at top

:attop
 cpx #2
 bcc :tr1
 lda #$ff ;jammed-open value
 sta state
 jmp :stop

:tr1 lda #gatetimer
 sta state

 lda #0 ;down
 sta trdirec
]rts rts

* Down fast

:downfast
 cpx #maxgatevel
 bcs :2

 inx
 stx trdirec ;trdirec is velocity index
:2
 lda state
 sec
 sbc gatevel,x
 sta state
 beq :cont
 bcs :cont

 lda #0
 sta state
 jsr stopobj

 lda #GateSlam
 jsr addsound
 jmp :cont

*-------------------------------
*
*  Animate pressplate
*
*-------------------------------
animplate
 ldx trdirec
 bmi ]rts

 lda state
 tax
 jsr gettimer
 sec
 sbc #1
 pha
 jsr chgtimer
 pla
 cmp #2
 bcs ]rts ;timer stops at t=1

 lda #PlateUp
 jsr addsound

 jsr stopobj

 jmp redplate ;add obj to redraw buffer
]rts rts

*-------------------------------
*
*  Animate slicer
*
*-------------------------------
animslicer
 ldx trdirec
 bmi :done

 lda state
 tax
 and #$80
 sta state ;preserve hibit
 txa
 and #$7f
 clc
 adc #1
 cmp #slicetimer+1
 bcc :1
 lda #1 ;wrap around
:1 ora state
 sta state
 and #$7f ;next frame #
 cmp #slicerExt
 bne :2

 lda #JawsClash
 jsr addsound

:2 lda trscrn
 cmp VisScrn ;is slicer on visible screen?
 bne :os ;no

 lda trloc
 jsr unindex
 cpx KidBlockY ;on same level as kid?
 bne :os ;no

 lda KidLife
 bmi :done
 ;If kid is dead, stop all unbloodied slicers
 lda state
 and #$80
 bne :done

* As soon as slicer is retracted, purge it from trans list

:os lda state
 and #$7f
 cmp #slicerRet
 bcc :done

:purge jsr stopobj

:done lda state
 and #$7f
 cmp #slicerRet ;retracted?
 bcs ]rts ;yes--don't bother to redraw

 jmp redslicer

*-------------------------------
*
* Animate flask
*
*-------------------------------
animflask
 ldx trdirec
 bmi ]rts

 lda trscrn
 cmp VisScrn
 bne :purge

 lda state
 and #%11100000 ;potion #
 sta temp1
 lda state
 and #%00011111 ;frame #
 jsr GETFLASKFRAME
 ora temp1
 sta state

 jmp redflask
]purge
:purge jmp stopobj

*-------------------------------
*
* Animate gleaming sword
*
*-------------------------------
animsword
 lda trscrn
 cmp VisScrn
 bne ]purge

 dec state
 bne :1
 jsr rnd
 and #$3f
 clc
 adc #40
 sta state

:1 jmp redsword
]rts rts

*-------------------------------
*
* Animate torch
*
*-------------------------------
animtorch
 ldx trdirec
 bmi ]rts

 lda trscrn
 cmp VisScrn
 bne ]purge

 lda state
 jsr GETFLAMEFRAME
 sta state

 jmp redtorch

*-------------------------------
*
* Get flame frame
*
* In/out: A = state
*
*-------------------------------
GETFLAMEFRAME
 sta state

 jsr rnd

 cmp state
 beq :2
 cmp #torchLast+1
 bcc :1

 lda state
:2 clc
 adc #1
 cmp #torchLast+1
 bcc :1

 lda #0 ;wrap around
:1
]rts rts

*-------------------------------
*
* Get flask frame
*
* In/out: A = state (low 5 bits)
*
*-------------------------------
GETFLASKFRAME
 clc
 adc #1
 cmp #bubbLast+1
 bcc ]rts
 lda #1
]rts rts

*-------------------------------
*
* Animate spikes
*
*-------------------------------
animspikes
 ldx trdirec
 bmi :done

 lda state
 bmi :timerloop ;Hibit set: remaining 7 bits
 ;represent timer value

* Hibit clear: remaining 7 bits represent BGDATA frame #

 inc state

 cmp #spikeExt ;is extension complete?
 beq :starttimer ;yes--start timer

 cmp #spikeRet ;is retraction complete?
 bne :done ;not yet

 lda #0
 sta state ;yes--reset to "ready" state

 jsr stopobj

:done jmp redspikes

* Spike timer loop

:starttimer
 lda #spiketimer
 sta state

 bne :done

:timerloop
 dec state

 lda state
 and #$7f
 bne :rts
;Time's up
 lda #spikeExt+1 ;First "retracting" frame
 sta state

 bne :done
:rts
]rts rts

*-------------------------------
*
* Animate loose floor
*
*-------------------------------
animfloor
 ldx trdirec
 bmi :red

* When timer reaches max value & loose floor detaches:
*  (1)  Change objid from "loose floor" to "empty space"
*  (2)  Create a MOB to take over where TROB stopped

 inc state

 lda state
 bmi :wiggle ;floor is only wiggling

 cmp #loosetimer
 bcc :red

* Timer has reached max value--detach floor

 jsr makespace
 sta state

 jsr stopobj

* and create new MOB

 lda trloc
 jsr unindex

 asl
 asl  ;x4
 sta mobx
 stx moblevel

 lda BlockBot+1,x
 sta moby

 lda trscrn
 sta mobscrn

 lda #0
 sta mobvel
 sta mobtype

 jsr addamob

:red jmp redloose

* Floor is only wiggling

:wiggle ldx level
 cpx #13
 beq ]rts

 cmp #wiggletime+$80
 bcc :red

 lda #0
 sta state
 jsr stopobj ;stop wiggling

 jmp :red

animspace jsr stopobj
 jmp redloose

*-------------------------------
*
*  Stop object (set trdirec = -1)
*
*-------------------------------
stopobj lda #-1
 sta trdirec
 rts

*-------------------------------
* General redraw-object routine
*-------------------------------
redtrobj
 jsr check
 lda #2
 jsr markred
 jsr markwipe
 jsr checkright
 lda #2
 jsr markred
 jmp markwipe

*-------------------------------
* redraw torch/exit
*-------------------------------
redexit
redtorch
 jsr checkright
 lda #2
 jmp markmove

*-------------------------------
* redraw flask/sword
*-------------------------------
redsword
redflask
 jsr check
 lda #2
 jmp markmove

*-------------------------------
* redraw loose floor
*-------------------------------
redloose
 inc trobcount
 lda #loosewipe
 sta height
 jmp redtrobj

*-------------------------------
* redraw gate
*-------------------------------
redgate
 jsr checkright ;mark piece to right of gate
 lda #2
 jsr markmove
 jsr markfred
 jsr checkabover ;& piece to right of gate panel
 lda #2
 jmp markmove

*-------------------------------
* redraw spikes
*-------------------------------
redspikes
 inc trobcount
 lda #spikewipe
 sta height
 jmp redtrobj

*-------------------------------
* redraw slicer
*-------------------------------
redslicer
 inc trobcount
 lda #slicerwipe
 sta height
 jsr check
 lda #2
 jsr markred
 jmp markwipe

*-------------------------------
* redraw pressplate
*-------------------------------
redplate
 lda #platewipe
 sta height
 jmp redtrobj

*-------------------------------
*
*  Before marking a piece in redraw buffer,
*  check whether it's visible.
*
*  If piece is visible onscreen:
*    return with carry clear, y = redbuf index
*  If piece is not visible:
*    return with carry set
*
*-------------------------------
]no ldy #30
 sec
]rts rts

]above cmp scrnAbove
 bne ]rts

 lda trloc
 sec
 sbc #20 ;if on top row, return 0-9 and cs
 tay

 sec
 rts

*-------------------------------
*  Check (trscrn, trloc)
*-------------------------------
check
 lda trscrn
 cmp VisScrn
 bne ]above

 ldy trloc
 cpy #30 ;i.e., "clc"
 rts

*-------------------------------
*  Check piece to left of (trscrn,trloc)
*-------------------------------
checkleft
 lda trscrn
 cmp VisScrn
 bne :notonscrn
;piece is on this screen
 cpy #0
 beq ]no
 cpy #10
 beq ]no
 cpy #20
 beq ]no
;yes--piece is visible
 dey
 clc
 rts

:notonscrn
 cmp scrnRight
 bne ]above
;piece is on screen to right
 ldy trloc
 cpy #0
 beq :yesr
 cpy #10
 beq :yesr
 cpy #20
 bne :yesr

:yesr tya
 clc
 adc #9 ;mark corresponding right-edge piece
 tay ;on this screen

 clc
 rts

*-------------------------------
*  Check piece to right of (trscrn,trloc)
*-------------------------------
checkright
 lda trscrn
 cmp VisScrn
 bne :notonscrn
;piece is on this screen
 ldy trloc
 cpy #9
 beq ]no

 cpy #19
 beq ]no

 cpy #29
 beq ]no
;yes
 iny
 clc
 rts

:notonscrn
 cmp scrnLeft
 bne ]above
;piece is on screen to left
 ldy trloc
 cpy #9
 beq :yesl

 cpy #19
 beq :yesl

 cpy #29
 bne ]no

:yesl tya
 sec
 sbc #9 ;mark corresponding left-edge piece
 tay ;on this screen

 clc
 rts

]no ldy #30
 sec
]rts rts

*-------------------------------
*  Check piece above & to right of (trscrn,trloc)
*-------------------------------
checkabover
 lda trscrn
 cmp VisScrn
 bne :notonscrn
;piece is on this screen
 ldy trloc
 cpy #10
 bcc :above ;piece is on top row

 cpy #19
 beq ]no

 cpy #29
 beq ]no
;yes
 tya
 sec
 sbc #9
 tay

 clc
 rts

:above
 iny
 sec
 rts

:notonscrn
 cmp scrnLeft
 bne :notonleft
;piece is on screen to left
 ldy trloc
 cpy #9
 beq :yes0

 cpy #19
 beq :yesl

 cpy #29
 bne ]no

:yesl tya
 sec
 sbc #19 ;mark corresponding left-edge piece
 tay ;on this screen

 clc
 rts

:yes0 ldy #0
 sec
 rts

:notonleft
 cmp scrnBelow
 bne :notbelow
;piece is on screen below
 ldy trloc
 cpy #9
 bcs ]no
;yes--piece is on top row
 tya
 clc
 adc #21
 tay

 clc
 rts

:notbelow
 cmp scrnBelowL
 bne ]rts
 ;piece is on scrn below & to left
 ldy trloc
 cpy #9
 bne ]no
;yes--piece is in u.r.
 ldy #20
 clc
 rts

*-------------------------------
*
*  Extract information from LINKLOC/LINKMAP
*
*  In: X = linkindex
*  Out: A = info
*
*-------------------------------
gettimer
 lda LINKMAP,x
 and #%00011111 ;pressplate timer (0-31)
 rts
chgtimer ;In: A = new timer setting
 and #%00011111
 sta temp1
 lda LINKMAP,x
 and #%11100000
 ora temp1
 sta LINKMAP,x
 rts
getloc
 lda LINKLOC,x
 and #%00011111 ;screen posn (0-29)
 rts
getlastflag
 lda LINKLOC,x
 and #%10000000 ;last-entry flag (0-1)
 rts
getscrn
 lda LINKLOC,x
 and #%01100000 ;low 2 bits
 lsr
 lsr
 sta temp1
 lda LINKMAP,x
 and #%11100000 ;high 3 bits
 adc temp1
 lsr
 lsr
 lsr ;Result: screen # (0-31)
]rts rts

*-------------------------------
*
*  Update all MOBs (falling floors)
*
*-------------------------------
ANIMMOBS
 ldx nummob ;# MOBs in motion (0-maxmob)
 beq ]rts

:loop stx tempnt
 jsr loadmob

 jsr animmob ;animate MOB #x

 jsr checkcrush ;did we just crush a character?

 ldx tempnt
 jsr savemob

 dex
 bne :loop

* Delete MOBs that have ceased to exist

 ldx #1 ;source index (assume nummob > 0)
 ldy #0 ;dest index

:dloop lda mobvel,x
 cmp #$ff
 beq :next

 iny
 sta mobvel,y
 lda mobx,x ;source
 sta mobx,y ;dest
 lda moby,x
 sta moby,y
 lda mobscrn,x
 sta mobscrn,y
 lda mobtype,x
 sta mobtype,y
 lda moblevel,x
 sta moblevel,y

:next inx

 cpx nummob
 bcc :dloop
 beq :dloop

 sty nummob

]rts rts

*-------------------------------
*
*   Animate MOB #x
*
*-------------------------------
animmob
 lda mobtype
 bne :done
 jsr mobfloor
:done
 lda mobvel
 bpl ]rts ;is object stopping?
 inc mobvel ;yes
]rts rts

*-------------------------------
*
*  Animate falling floor
*
*-------------------------------
mobfloor
 lda mobvel
 bmi ]rts
:ok1
 cmp #FFtermvel
 bcs :tv
 clc
 adc #FFaccel
 sta mobvel

:tv clc
 adc moby
 sta moby

* check for collision w/floor

 ldx mobscrn ;on null screen?
 beq :null ;yes--fall on

 cmp #-30 ;negative?
 bcs :fallon ;yes--fall on

 ldx moblevel
 cmp BlockAy+1,x
 bcc :fallon

* Passing thru floor plane--what to do?
* First see what's there

 ldx moblevel
 stx tempblocky

 lda mobx
 lsr
 lsr
 sta tempblockx

 lda mobscrn
 sta tempscrn

 jsr rdblock1 ;A = objid
 sta underFF ;under falling floor

 cmp #space
 beq :passthru

 cmp #loose
 bne :crash

* Lands on loose floor
* Knock out loose floor & continue

 jsr knockloose

 jmp :passthru

* Lands on solid floor

:crash
 lda #LooseCrash
 jsr addsound

 lda mobscrn
 sta tempscrn
 lda moblevel
 sta tempblocky
 jsr SHAKEM1 ;shake loose floors

 ldx moblevel
 lda BlockAy+1,x
 sta moby

 lda #-crumbletime
 sta mobvel

 jmp makerubble

* Passes thru floor plane

:passthru
 jsr passthru
:fallon
]rts rts

* Falling on null screen

:null
 lda moby
 cmp #192+17
 bcc ]rts
;MOB has fallen off null screen--delete it
 lda #-disappeartime
 sta mobvel

]rts rts

*-------------------------------
* Knock out loose floor
*-------------------------------
knockloose
 jsr makespace
 sta (BlueSpec),y

 lda mobvel
 lsr
 sta mobvel

 ldx tempnt
 jsr savemob ;save this MOB

* Create new MOB (add'l falling floor)

 lda moby
 clc
 adc #6
 sta moby

 jsr passthru

 jsr addamob

* Retrieve old MOB

 ldx tempnt
 jsr loadmob

 jmp markmob

*-------------------------------
* Make space
* Return A = BlueSpec
*-------------------------------
makespace lda #space ;change objid to empty space
 sta (BlueType),y

 do PalaceEditor
 lda #1
 rts
 fin

 lda #0
 ldx BGset1
 cpx #1 ;pal?
 bne ]rts
 lda #1 ;stripe
]rts rts

*-------------------------------
* Pass thru floor plane
*-------------------------------
passthru
 inc moblevel

 lda moblevel
 cmp #3
 bcc ]rts

* ... and onto next screen
* (NOTE: moby may be negative)

 lda moby
 sec
 sbc #192
 sta moby

 lda #0
 sta moblevel

 lda mobscrn
 jsr getdown
 sta mobscrn
]rts rts

*-------------------------------
* Delete MOB & change objid of floorpiece it landed on
* If pressplate, trigger before reducing it to rubble
*-------------------------------
makerubble
 lda moblevel
 sta tempblocky

 lda mobx
 lsr
 lsr
 sta tempblockx

 lda mobscrn
 sta tempscrn

 jsr rdblock1

 cmp #pressplate
 beq :pp
 cmp #upressplate
 beq :jampp
 cmp #floor
 beq :notpp
 cmp #spikes
 beq :notpp
 cmp #flask
 beq :notpp
 cmp #torch
 beq :notpp
 bne ]rts ;can't transform this piece into rubble

:jampp lda #rubble
 sta (BlueType),y

:pp jsr PUSHPP ;block lands on pressplate--
 jsr rdblock1 ;crush pp & jam open all gates

:notpp lda #rubble
 sta (BlueType),y
 jmp markmob

*-------------------------------
* Mark MOB
*-------------------------------
markmob
 lda mobscrn
 cmp VisScrn
 bne ]rts

 lda #loosewipe
 sta height

 jsr indexblock
 lda #2
 jsr markred
 jsr markwipe

 inc tempblockx

 jsr indexblock
 lda #2
 jsr markred
 jsr markfred
 jmp markwipe

]rts rts

*-------------------------------
*
*  Did falling floor crush anybody?
*
*-------------------------------
checkcrush
 jsr LoadKid
 jsr chcrush1 ;return cs if crush
 bcc ]rts
 jsr crushchar
 jmp SaveKid

chcrush1
 lda mobscrn
 cmp CharScrn ;on same screen as char?
 bne :no

 lda mobx
 lsr
 lsr
 cmp CharBlockX ;same blockx?
 bne :no

 lda moby
 cmp CharY
 bcs :no ;mob is below char altogether

 lda CharY
 sec
 sbc #CrushDist
 cmp moby
 bcs :no
 sec ;crush!
 rts

:no clc
]rts rts

*-------------------------------
*
*  Crush char with falling block
*  (Ordered by ANIMMOB)
*
*-------------------------------
crushchar
 lda level
 cmp #13
 beq :1
 lda CharPosn
 cmp #5
 bcc :1
 cmp #15
 bcc ]rts ;running-->escape

:1 lda CharAction
 cmp #2
 bcc :ground
 cmp #7
 bne ]rts

* Action code 0,1,7 -- on ground

:ground
 ldx CharBlockY
 inx
 lda FloorY,x
 sta CharY ;align w/floor

 lda #1
 jsr decstr
 beq :kill

 lda CharPosn
 cmp #109
 beq ]rts
 lda #crush
 jmp jumpseq

:kill lda #hardland ;temp
 jmp jumpseq

*-------------------------------
*
*  Add all visible MOBs to object table (to be drawn later)
*
*-------------------------------
ADDMOBS
 ldx nummob ;# objs in motion (0-maxmob)
 beq :rts

:loop stx tempnt
 jsr loadmob

 lda mobtype
 bne :1
 jsr ATM ;Add this MOB
:1
 ldx tempnt
 dex
 bne :loop
:rts
]rts rts

*-------------------------------
*
*  Add this MOB to obj table (if visible)
*
*-------------------------------
ATM

* Is floorpiece visible onscreen?

 lda mobscrn
 cmp VisScrn
 bne :ok2

 lda moby
 cmp #192+17 ;17 is generous estimate of image height
 bcc :ok
 rts
:ok2
 cmp scrnBelow
 bne ]rts ;not on screen below

 lda moby
 cmp #-17
 bcs :ok1
 cmp #17
 bcs ]rts
:ok1
 clc
 adc #192
 sta moby ;(this change won't be saved)
:ok

* Get block #; index char

 lda moby
 jsr getblocky ;return blocky (0-3)
 sta tempblocky

 lda mobx
 lsr
 lsr
 sta tempblockx

 jsr indexblock
 sty FCharIndex

* Mark floorbuf & fredbuf of affected blocks to R

:cont1
 inc tempblockx
 jsr indexblock  ;block to R

 lda #2
 jsr markfloor
 jsr markfred

 lda moby
 sec
 sbc #FFheight
 jsr getblocky ;highest affected blocky
 cmp tempblocky
 beq :same

 sta tempblocky
 jsr indexblock ;block to U.R.

 lda #2
 jsr markfloor
 jsr markfred
:same

* Get frame #

 lda #Ffalling
 sta mobframe

 jmp addmobobj ;add MOB to object table

*-------------------------------
*
*  Add MOB to object table
*
*  In: mob data
*
*-------------------------------
addmobobj
 inc objX
 ldx objX

 lda mobtype ;0 = falling floor
 ora #$80
 sta objTYP,x

 lda mobx
 sta objX,x
 lda #0
 sta objOFF,x

 lda moby
 sta objY,x

 lda mobframe
 sta objIMG,x

 lda #0
 sta objCU,x
 sta objCL,x
 lda #40
 sta objCR,x

 jmp setobjindx
]rts rts
*-------------------------------
*
* Shake floors
*
* In: A = CharBlockY
*
*-------------------------------
SHAKEM
 ldx level
 cpx #13
 beq ]rts

 sta tempblocky

 lda VisScrn
 sta tempscrn

SHAKEM1
 ldx #9
:loop txa
 pha
 sta tempblockx

 jsr rdblock1
 cmp #loose
 bne :cont

 jsr shakeit

:cont pla
 tax
 dex
 bpl :loop

]rts rts

*-------------------------------
* Shake loose floor
*-------------------------------
shakeit
 lda (BlueSpec),y
 bmi ]rts ;already wiggling
 bne ]rts ;active

 lda #$80
 sta (BlueSpec),y

 sty trloc

 lda tempscrn ;from rdblock
 sta trscrn

 lda #1
 sta trdirec

 jmp addtrob ;add floor to trans list

*-------------------------------
 lst
 ds 1
 usr $a9,21,$00,*-org
 lst off
```
