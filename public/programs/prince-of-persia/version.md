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
description: "This file contains the version string for Prince of Persia, marking its release date and version number in the Apple II assembly code."

summary:
  - point: "The version string is hardcoded in the assembly file, a common practice in early software development."
    link: "https://en.wikipedia.org/wiki/Versioning"
    link_label: "Versioning"
  - point: "The Apple II's memory constraints required careful organization, including embedding metadata directly in code."
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Jordan Mechner developed Prince of Persia solo, showcasing the ingenuity required to fit cinematic gameplay into limited hardware."
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"

enhancements:
  - id: "version-string-prince-of-persia"
    line_start: 9
    line_end: 14
    title: "A version string etched in assembly"
    wikipedia_url: "https://en.wikipedia.org/wiki/Versioning"
    image_url: ""
    image_caption: ""
    content: "This section of the code defines the version string for Prince of Persia, embedding the text 'Prince of Persia 1.0 9/7/89' directly into the assembly file. The inclusion of the '@' character at the end serves as a terminator, a common convention in early assembly programming to mark the end of a string. In 1989, software development for the Apple II required meticulous attention to memory constraints. With only 128K of RAM available, developers often embedded metadata, such as version strings, directly into the code to save space and simplify debugging. This approach reflects the pragmatic solutions developers employed to work within the limitations of the hardware. Jordan Mechner, working solo on Prince of Persia, had to balance cinematic ambitions with the technical realities of the Apple II. The version string not only identifies the game but also serves as a timestamp for its release, marking the culmination of years of effort. Mechner's work on Prince of Persia would go on to influence the cinematic platformer genre, inspiring games like Another World and Flashback. The meticulous attention to detail, even in seemingly minor elements like version strings, underscores the craftsmanship that defined early game development."

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