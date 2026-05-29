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
description: "This file implements DOOM's random number generation, a critical component for gameplay unpredictability and replayability."

summary:
  - point: "Uses a precomputed lookup table for random numbers"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup Table"
  - point: "Implements deterministic and non-deterministic random number generators"
    link: "https://en.wikipedia.org/wiki/Deterministic_system"
    link_label: "Deterministic System"
  - point: "Optimized for performance on 1990s consumer hardware"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993 Video Game)"

enhancements:
  - id: "random-number-lookup-table"
    line_start: 55
    line_end: 55
    title: "The Lookup Table That Made Random Fast"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "This section defines a 256-byte lookup table (`rndtable`) used to generate random numbers. Instead of relying on computationally expensive algorithms to produce randomness, DOOM precomputes a sequence of values and stores them in this array. By cycling through the table with a simple index increment, the game achieves fast and predictable random number generation. This approach was essential for performance on early 1990s hardware, where CPU cycles were precious, and memory access was faster than complex calculations. The table itself is hardcoded, ensuring consistency across gameplay sessions. This deterministic randomness was vital for debugging and multiplayer synchronization, as every player could experience identical random events under the same conditions. Lookup tables like this became a common optimization in games and embedded systems, influencing later titles and hardware design."
  - id: "deterministic-random-generator"
    line_start: 55
    line_end: 59
    title: "How DOOM Kept Randomness Predictable"
    wikipedia_url: "https://en.wikipedia.org/wiki/Deterministic_system"
    image_url: ""
    image_caption: ""
    content: "The `P_Random` function provides deterministic random numbers by cycling through the `rndtable` using the `prndindex`. This ensures that the sequence of random numbers is reproducible, which was crucial for debugging and multiplayer consistency. In multiplayer mode, deterministic randomness allowed all players to experience identical random events, preventing desynchronization. At the time, this was a clever solution to the problem of maintaining fairness and consistency in networked gameplay, where computational resources were limited, and synchronization mechanisms were rudimentary. This deterministic approach influenced later multiplayer game engines, which adopted similar techniques to ensure synchronized gameplay across different machines."
  - id: "non-deterministic-random-generator"
    line_start: 62
    line_end: 65
    title: "The Randomness That Kept DOOM Unpredictable"
    wikipedia_url: "https://en.wikipedia.org/wiki/Random_number_generation"
    image_url: ""
    image_caption: ""
    content: "The `M_Random` function generates random numbers for gameplay elements, such as enemy behavior and item drops. Unlike `P_Random`, which is deterministic, `M_Random` uses a separate index (`rndindex`) to cycle through the `rndtable`. This introduces non-deterministic randomness, adding unpredictability to the single-player experience. Players could encounter varied gameplay scenarios, enhancing replayability and immersion. In the early 1990s, this approach was innovative, as it balanced performance constraints with the need for engaging gameplay. The technique influenced later game designs, where controlled randomness became a staple for creating dynamic and memorable experiences."
  - id: "resetting-random-state"
    line_start: 68
    line_end: 71
    title: "Why DOOM Could Reset Randomness"
    wikipedia_url: "https://en.wikipedia.org/wiki/State_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The `M_ClearRandom` function resets the indices (`rndindex` and `prndindex`) to zero, effectively restarting the random number sequence. This was useful for ensuring consistent behavior during specific gameplay scenarios, such as restarting a level or initializing a new game. By resetting the random state, developers could guarantee predictable outcomes for testing and debugging. This design reflects the meticulous attention to detail required to develop games on constrained hardware, where reproducibility was essential for development and quality assurance. The concept of resetting random states has persisted in modern game engines, where it is used for debugging and controlled randomness in procedural generation."

---

```cpp
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
```
