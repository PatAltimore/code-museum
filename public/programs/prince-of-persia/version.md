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
description: "The version string for Prince of Persia, a landmark in cinematic platformers, encoded in 6502 assembly."

summary:
  - point: "Version string hardcoded in assembly for the Apple IIe/IIc"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II series"
  - point: "Jordan Mechner's solo development effort included meticulous attention to detail"
    link: "https://en.wikipedia.org/wiki/Jordan_Mechner"
    link_label: "Jordan Mechner"
  - point: "Rotoscoping animation technique set the game apart visually"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"

enhancements:
  - id: "prince-of-persia-version-string"
    line_start: 9
    line_end: 11
    title: "Why Hardcode the Version in Assembly?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section encodes the version string for Prince of Persia directly in assembly, specifying 'Prince of Persia 1.0 9/7/89'. The 'asc' directive writes ASCII characters into memory, ensuring the string is embedded in the program's binary. The '@' character acts as a terminator or delimiter, likely signaling the end of the string for routines that may read or display it. In 1989, embedding version strings in software was common practice, especially in systems with limited resources like the Apple IIe/IIc. Developers often included this information for debugging, distribution tracking, or simply as a marker of pride in their work. Jordan Mechner, working solo on Prince of Persia, would have been acutely aware of the need to optimize every byte of memory while still leaving his mark on the code. The Apple II series used 6502 assembly, a language that required precise control over memory and hardware. With only 128K of memory available, Mechner had to fit the entire game—including its groundbreaking rotoscoped animations—into a tight space. This version string, while seemingly small, reflects the meticulous attention to detail required in such constrained environments. The inclusion of the version string also speaks to Mechner's awareness of the game's significance. Prince of Persia became a genre-defining title, inspiring later cinematic platformers like Another World and Flashback. The game's techniques, including the use of rotoscoping and memory bank-switching, influenced developers for decades. This version string is a timestamp of a pivotal moment in gaming history, marking the release of a title that would shape the industry."

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