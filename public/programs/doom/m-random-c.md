---
title: "m_random.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/m_random.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/m_random.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "m-random-c"
order: 16
description: "This file implements DOOM's random number generation system, a key component for gameplay unpredictability and AI behavior."

summary:
  - point: "Uses a fixed lookup table for random numbers to ensure deterministic behavior in demos and multiplayer"
    link: "https://en.wikipedia.org/wiki/Random_number_generation"
    link_label: "Random number generation"
  - point: "Two separate indices allow distinct streams of randomness for different game systems"
    link: "https://doomwiki.org/wiki/Random_number_generator"
    link_label: "DOOM random number generator"
  - point: "Reflects constraints of 1993-era hardware, avoiding computationally expensive RNG algorithms"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993 video game)"

enhancements:
  - id: "random-number-lookup-table"
    line_start: 31
    line_end: 51
    title: "A fixed table for predictable randomness"
    wikipedia_url: "https://doomwiki.org/wiki/Random_number_generator"
    image_url: ""
    image_caption: ""
    content: "This 256-byte lookup table is the heart of DOOM's random number generation system. Instead of relying on computationally expensive algorithms to generate random numbers, the developers precomputed a sequence of values and stored them in this array. Each number in the table falls between 0 and 255, providing a simple and efficient way to retrieve pseudo-random values during gameplay. In 1993, when DOOM was developed, hardware constraints were a significant concern. Consumer PCs often lacked the processing power to handle complex random number generation algorithms without impacting performance. By using a fixed table, id Software ensured that random number generation was both fast and predictable. This predictability was crucial for features like demo playback, where the game needed to reproduce identical behavior every time. John Carmack, the technical mastermind behind DOOM, was known for his ability to optimize code to run on modest hardware. This approach to randomness reflects his philosophy of balancing innovation with practicality. While modern games often use more sophisticated methods for randomness, the simplicity of this table has left a lasting legacy in game development, particularly in deterministic systems. Had id Software opted for a more complex RNG system, DOOM might have struggled to maintain its groundbreaking performance on early 1990s PCs. This decision exemplifies the team's ingenuity in overcoming technical limitations while pioneering the first-person shooter genre."
  - id: "dual-random-streams"
    line_start: 53
    line_end: 67
    title: "Two streams of randomness for gameplay logic"
    wikipedia_url: "https://doomwiki.org/wiki/Random_number_generator"
    image_url: ""
    image_caption: ""
    content: "DOOM's random number system uses two separate indices, `rndindex` and `prndindex`, to access the lookup table. These indices allow the game to maintain distinct streams of randomness for different purposes. The `M_Random` function increments `rndindex`, while `P_Random` increments `prndindex`. This separation ensures that randomness used for one part of the game, such as enemy AI, does not interfere with randomness used elsewhere, such as item drops or environmental effects. This design reflects the meticulous attention to detail that id Software brought to DOOM. By isolating random streams, the developers avoided unintended interactions between game systems, preserving the integrity of gameplay mechanics. For example, enemy behavior could remain consistent even if the player triggered other random events in the environment. The decision to use deterministic randomness was also influenced by the need for reliable demo playback and multiplayer synchronization. In these scenarios, every action had to be reproducible, requiring the random number generator to produce the same sequence of values each time. This deterministic approach was a hallmark of DOOM's design, ensuring that the game could run smoothly and predictably on the hardware of the era. Today, this technique is often studied by game developers as an example of clever engineering under constraints. It highlights how seemingly small decisions, like separating random streams, can have a profound impact on the player experience and the technical robustness of a game."
  - id: "reset-random-indices"
    line_start: 69
    line_end: 72
    title: "Resetting randomness for a clean slate"
    wikipedia_url: "https://doomwiki.org/wiki/Random_number_generator"
    image_url: ""
    image_caption: ""
    content: "The `M_ClearRandom` function resets both `rndindex` and `prndindex` to zero, effectively restarting the random number generator. This simple yet essential routine ensures that the game can return to a consistent state when needed, such as at the beginning of a new level or during a demo playback. In the early 1990s, when DOOM was developed, deterministic behavior was a critical requirement for many aspects of the game. Demo playback, for instance, relied on the ability to reproduce every action exactly as it occurred during the original recording. By resetting the random indices, id Software ensured that the same sequence of random numbers would be used, maintaining the integrity of the playback. This function also reflects the team's commitment to robust game design. By providing a way to reset randomness, they avoided potential issues with unpredictable behavior or corrupted game states. It was a safeguard against the limitations of the hardware and software of the time, ensuring that the game remained stable and reliable. While modern games often use more complex systems for managing randomness, the simplicity of `M_ClearRandom` is a reminder of the practical solutions that defined early game development. It is a testament to the ingenuity of id Software, whose work on DOOM continues to influence the industry decades later."

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
//	Random number LUT.
//
//-----------------------------------------------------------------------------

static const char rcsid[] = "$Id: m_random.c,v 1.1 1997/02/03 22:45:11 b1 Exp $";


//
// M_Random
// Returns a 0-255 number
//
unsigned char rndtable[256] = {
    0,   8, 109, 220, 222, 241, 149, 107,  75, 248, 254, 140,  16,  66 ,
    74,  21, 211,  47,  80, 242, 154,  27, 205, 128, 161,  89,  77,  36 ,
    95, 110,  85,  48, 212, 140, 211, 249,  22,  79, 200,  50,  28, 188 ,
    52, 140, 202, 120,  68, 145,  62,  70, 184, 190,  91, 197, 152, 224 ,
    149, 104,  25, 178, 252, 182, 202, 182, 141, 197,   4,  81, 181, 242 ,
    145,  42,  39, 227, 156, 198, 225, 193, 219,  93, 122, 175, 249,   0 ,
    175, 143,  70, 239,  46, 246, 163,  53, 163, 109, 168, 135,   2, 235 ,
    25,  92,  20, 145, 138,  77,  69, 166,  78, 176, 173, 212, 166, 113 ,
    94, 161,  41,  50, 239,  49, 111, 164,  70,  60,   2,  37, 171,  75 ,
    136, 156,  11,  56,  42, 146, 138, 229,  73, 146,  77,  61,  98, 196 ,
    135, 106,  63, 197, 195,  86,  96, 203, 113, 101, 170, 247, 181, 113 ,
    80, 250, 108,   7, 255, 237, 129, 226,  79, 107, 112, 166, 103, 241 ,
    24, 223, 239, 120, 198,  58,  60,  82, 128,   3, 184,  66, 143, 224 ,
    145, 224,  81, 206, 163,  45,  63,  90, 168, 114,  59,  33, 159,  95 ,
    28, 139, 123,  98, 125, 196,  15,  70, 194, 253,  54,  14, 109, 226 ,
    71,  17, 161,  93, 186,  87, 244, 138,  20,  52, 123, 251,  26,  36 ,
    17,  46,  52, 231, 232,  76,  31, 221,  84,  37, 216, 165, 212, 106 ,
    197, 242,  98,  43,  39, 175, 254, 145, 190,  84, 118, 222, 187, 136 ,
    120, 163, 236, 249
};

int	rndindex = 0;
int	prndindex = 0;

// Which one is deterministic?
int P_Random (void)
{
    prndindex = (prndindex+1)&0xff;
    return rndtable[prndindex];
}

int M_Random (void)
{
    rndindex = (rndindex+1)&0xff;
    return rndtable[rndindex];
}

void M_ClearRandom (void)
{
    rndindex = prndindex = 0;
}



