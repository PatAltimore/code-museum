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
description: "This file implements DOOM's random number generation system, a key component in creating unpredictable gameplay elements."

summary:
  - point: "Uses a precomputed lookup table for random numbers"
    link: "https://en.wikipedia.org/wiki/Random_number_generation"
    link_label: "Random Number Generation"
  - point: "Implements deterministic randomness for gameplay consistency"
    link: "https://en.wikipedia.org/wiki/Deterministic_algorithm"
    link_label: "Deterministic Algorithm"
  - point: "Optimized for performance on 1990s consumer hardware"
    link: "https://en.wikipedia.org/wiki/Intel_80486"
    link_label: "Intel 80486"

enhancements:
  - id: "random-number-lookup-table"
    line_start: 27
    line_end: 51
    title: "Precomputed Random Number Lookup Table"
    wikipedia_url: "https://en.wikipedia.org/wiki/Random_number_generation"
    image_url: ""
    image_caption: ""
    content: "This section defines a static array `rndtable` containing 256 precomputed random numbers. The table is used to generate pseudo-random numbers for gameplay elements such as enemy behavior, item drops, and environmental effects. By using a fixed table, DOOM ensures deterministic randomness—critical for maintaining consistent gameplay across different runs, especially in multiplayer or demo playback scenarios. In the early 1990s, computational resources were limited, particularly on consumer-grade hardware like the Intel 80486 processors. Generating random numbers dynamically using complex algorithms would have been computationally expensive. Instead, John Carmack and the team at id Software opted for this lookup table approach, which is both fast and predictable. The table itself is small enough to fit comfortably in the CPU cache, ensuring minimal performance overhead. This technique influenced many subsequent games, especially those requiring deterministic randomness for replayability or debugging. Developers studying DOOM's source code have noted the elegance of this approach, and similar precomputed tables have appeared in engines like Quake and Unreal. Today, while modern systems can afford more sophisticated random number generation, the principle of deterministic randomness remains relevant in areas like procedural generation and competitive gaming."
  - id: "deterministic-random-functions"
    line_start: 56
    line_end: 67
    title: "Two Deterministic Random Functions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Deterministic_algorithm"
    image_url: ""
    image_caption: ""
    content: "The functions `P_Random` and `M_Random` provide deterministic random number generation by cycling through the `rndtable` array using separate indices (`prndindex` and `rndindex`). Each index is incremented modulo 256 to ensure it wraps around the table. This design allows different gameplay systems to use independent streams of random numbers without interfering with each other. The deterministic nature of these functions is crucial for DOOM's gameplay. For example, in demo playback, where players can watch recorded gameplay, the exact sequence of random events must be reproduced to match the original experience. Similarly, in multiplayer games, consistent random behavior ensures fairness and synchronization between players. This approach reflects the constraints of the era, where maintaining performance and consistency was paramount. The separation of random streams for different systems influenced later game engines, including id Software's own Quake engine, which expanded on deterministic techniques for networked multiplayer. Today, deterministic random functions are still used in areas like procedural generation and simulations, where reproducibility is essential."
  - id: "reset-random-state"
    line_start: 69
    line_end: 72
    title: "Resetting the Random State"
    wikipedia_url: "https://en.wikipedia.org/wiki/State_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The `M_ClearRandom` function resets both `rndindex` and `prndindex` to zero, effectively restarting the random number streams from the beginning of the `rndtable`. This is useful for ensuring consistent behavior when initializing or restarting gameplay scenarios. In DOOM, this function plays a role in maintaining predictable behavior during specific sequences, such as level restarts or demo playback. By resetting the random state, the game ensures that the same sequence of random numbers is used, preserving the deterministic nature of the gameplay. This design choice reflects the importance of reproducibility in gaming during the 1990s. Debugging, demo playback, and multiplayer synchronization all benefit from deterministic randomness. The concept of resetting random states has since been adopted in various fields, including testing frameworks and simulations, where reproducibility is critical. Modern game engines often include similar mechanisms to control random behavior during development and testing."

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



