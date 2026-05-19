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
description: "This file contains the version string for Prince of Persia, marking its completion in September 1989."

summary:
  - point: "Version string hardcoded in assembly"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Bank-switched memory used for Apple II constraints"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank switching"
  - point: "Jordan Mechner's solo development effort"
    link: "https://en.wikipedia.org/wiki/Jordan_Mechner"
    link_label: "Jordan Mechner"

enhancements:
  - id: "textline-version-string"
    line_start: 9
    line_end: 14
    title: "A timestamp etched into assembly code"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `TextLine` directive at line 9 embeds the version string \"Prince of Persia 1.0 9/7/89\" directly into the program's binary. This simple but significant inclusion serves as a timestamp, marking the culmination of Jordan Mechner's four-year journey to create one of the most iconic games of the 1980s. By September 7, 1989, the game was finalized, ready to ship for the Apple II platform. In the late 1980s, embedding version information directly into the code was a common practice, especially in assembly language programs. Unlike modern software development, where version control systems and metadata files track revisions, developers working on constrained systems like the Apple II often relied on hardcoded strings to document the software's identity and build date. This was particularly important for debugging and distribution, ensuring that the correct version of the program was loaded onto floppy disks. Jordan Mechner, working solo, had to balance creativity with technical limitations. The Apple IIe/IIc offered only 128K of memory, split between main and auxiliary banks, requiring careful management of every byte. This version string, while seemingly trivial, reflects the meticulous attention to detail that defined Mechner's work. It also hints at the personal nature of the project—Mechner was not just writing a game; he was crafting a cinematic experience, drawing on his background in filmmaking and his brother's physical performance for rotoscoped animations. The inclusion of this version string is a quiet but enduring artifact of Mechner's process. It reminds us of the human effort behind the code and the moment in time when Prince of Persia transitioned from a labor of love to a cultural milestone. Today, such strings are often overlooked, but in 1989, they were a developer's signature, etched into the fabric of the game itself."

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