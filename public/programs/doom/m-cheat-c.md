---
title: "r_bsp.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/r_bsp.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/r_bsp.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "r-bsp-c"
order: 12
description: "This file implements BSP traversal and rendering, a key innovation in DOOM's real-time 3D graphics engine."

summary:
  - point: "Introduced BSP traversal for efficient rendering"
    link: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    link_label: "Binary Space Partitioning"
  - point: "Optimized wall clipping using solid segment lists"
    link: "https://doomwiki.org/wiki/Rendering_engine"
    link_label: "DOOM Rendering Engine"
  - point: "Handled subsector rendering and sprite addition"
    link: "https://doomwiki.org/wiki/Subsector"
    link_label: "Subsector Rendering"
  - point: "Recursive BSP traversal for spatial division"
    link: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    link_label: "BSP Trees"
  - point: "Efficient visibility checks using bounding boxes"
    link: "https://doomwiki.org/wiki/Rendering_engine"
    link_label: "Bounding Box Checks"

enhancements:
  - id: "clear-draw-segments"
    line_start: 65
    line_end: 71
    title: "Why DOOM Clears Draw Segments Before Rendering"
    wikipedia_url: "https://doomwiki.org/wiki/Rendering_engine"
    image_url: ""
    image_caption: ""
    content: "This function, `R_ClearDrawSegs`, resets the draw segment pointer (`ds_p`) to the beginning of the `drawsegs` array. Draw segments represent portions of walls that need to be rendered, and clearing them ensures that no stale data from previous frames interferes with the current rendering pass. In 1993, memory management was critical due to hardware constraints—DOOM had to run efficiently on machines with as little as 4MB of RAM. By reusing pre-allocated arrays like `drawsegs`, the developers avoided costly dynamic memory allocation during gameplay. This approach influenced later game engines, which adopted similar strategies for managing render lists and minimizing frame-to-frame overhead."
  - id: "clip-solid-wall-segment"
    line_start: 97
    line_end: 185
    title: "How DOOM Handles Solid Wall Clipping"
    wikipedia_url: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    image_url: ""
    image_caption: ""
    content: "The `R_ClipSolidWallSegment` function processes solid walls that block the player's view entirely. It uses a list of clip ranges (`solidsegs`) to track visible portions of the screen and inserts new segments when necessary. The algorithm ensures efficient rendering by avoiding redundant calculations for occluded areas. At the time, this was a novel solution to the problem of visibility determination in 3D environments. John Carmack's implementation of BSP trees and clipping algorithms in DOOM set a precedent for real-time rendering in games, influencing engines like Quake and Unreal. The technique also became a staple in computer graphics education, demonstrating how spatial partitioning can optimize rendering pipelines."
  - id: "clip-pass-wall-segment"
    line_start: 189
    line_end: 238
    title: "Clipping Windows: DOOM's Pass Wall Segments"
    wikipedia_url: "https://doomwiki.org/wiki/Rendering_engine"
    image_url: ""
    image_caption: ""
    content: "The `R_ClipPassWallSegment` function handles walls that act as windows, allowing partial visibility through textures. Unlike solid walls, these segments are not added to the clip list but are processed for rendering. This distinction between solid and passable walls was crucial for creating DOOM's immersive environments, where players could see through windows or openings while maintaining performance. The function's design reflects the game's reliance on efficient algorithms to manage complex scenes on limited hardware. This approach influenced later games that needed to balance visual fidelity with computational constraints, especially in early 3D engines."
  - id: "check-bounding-box"
    line_start: 359
    line_end: 487
    title: "The Bounding Box Trick That Saved DOOM's Frame Rate"
    wikipedia_url: "https://doomwiki.org/wiki/Rendering_engine"
    image_url: ""
    image_caption: ""
    content: "The `R_CheckBBox` function determines whether a bounding box might be visible from the player's viewpoint. It uses precomputed coordinates and angles to quickly reject portions of the scene that are outside the field of view. This optimization was essential for DOOM's performance, as it reduced the number of subsectors and walls that needed to be processed during rendering. Bounding box checks were a direct response to the hardware limitations of the era, where CPUs lacked the power to handle exhaustive visibility calculations. The technique influenced later engines, including Quake, which built on DOOM's spatial partitioning and visibility determination methods to enable even more complex 3D environments."
  - id: "render-bsp-node"
    line_start: 547
    line_end: 578
    title: "Recursive BSP Traversal: DOOM's Rendering Backbone"
    wikipedia_url: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    image_url: ""
    image_caption: ""
    content: "The `R_RenderBSPNode` function is the heart of DOOM's BSP-based rendering system. It recursively traverses the BSP tree, rendering subsectors and checking visibility using bounding boxes. This approach allowed DOOM to efficiently divide the game world into manageable chunks, ensuring that only visible portions were processed. BSP trees were a groundbreaking innovation in 1993, enabling real-time 3D graphics on hardware that lacked dedicated GPUs. John Carmack adapted the technique from academic research and earlier games like Wolfenstein 3D, refining it to handle DOOM's more complex environments. The success of BSP traversal in DOOM directly influenced the development of Quake and other 3D engines, solidifying its place in the history of computer graphics."

---

~~~cpp
// Emacs style mode select   -*- C++ -*- 
//-----------------------------------------------------------------------------
//
// $Id:$
//
~~~
