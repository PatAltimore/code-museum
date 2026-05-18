---
title: "VERSION.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/VERSION.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/VERSION.S"
year: 1989
author: "Jordan Mechner"
slug: "version"
order: 29
description: "A version declaration for Prince of Persia, marking its release in 1989."

summary:
  - point: "Version string embedded directly in assembly code"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Apple II memory constraints shaped every decision"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II series"
  - point: "Rotoscoping influenced the game's animation style"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"

enhancements:
  - id: "version-string-declaration"
    line_start: 1
    line_end: 13
    title: "Marking the game's release: September 7, 1989"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Prince_of_Persia_1_-_MS-DOS_-_Gameplay.gif?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "Game play animation of the IBM PC version of Prince of Persia. (CC BY-SA 4.0)"
    content: "This section of the code embeds the version string for Prince of Persia directly into the assembly source. The text 'Prince of Persia 1.0 9/7/89' is stored as ASCII characters, marking the official release date of the game. Jordan Mechner, working solo on this project, likely included this as a simple but essential identifier for the final build. In 1989, the Apple IIe and IIc were nearing the end of their commercial relevance, but they still had a loyal user base. Developers faced tight constraints, with only 128K of memory available, requiring clever techniques like bank-switched memory to fit complex programs. Mechner's decision to include the version string reflects the meticulous care he took in crafting every detail of the game, despite these limitations. This version string is more than just metadata; it represents the culmination of four years of work, during which Mechner pioneered the cinematic platformer genre. The game's lifelike animations, achieved through rotoscoping, were groundbreaking at the time. By embedding the release date in the code, Mechner immortalized the moment Prince of Persia transitioned from a personal project to a cultural milestone. Today, such version strings are often dynamically generated or stored in metadata files, but in the era of 6502 assembly, every byte mattered. This small detail underscores the manual craftsmanship required to produce software in the late 1980s. It also serves as a timestamp for historians tracing the evolution of video games."

---

* version
org = $dfd8
 lst off

 org org

*-------------------------------

TextLine asc "Prince of Persia 1.0  9/7/89"
 lst
 asc "@"
*-------------------------------
 usr $a9,19,$11d8,*-org
 lst off