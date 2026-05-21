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
description: "This file contains version information for Prince of Persia, a landmark in cinematic platformers, written in 6502 assembly for the Apple II."

summary:
  - point: "Version string embedded directly in assembly code"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Uses Apple II memory addressing conventions"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II series"
  - point: "Demonstrates the minimalism required in 128K memory constraints"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank switching"

enhancements:
  - id: "version-string-embedded-in-code"
    line_start: 7
    line_end: 11
    title: "Why Embed Version Strings in Assembly?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines the version string for Prince of Persia, embedding it directly into the assembly code as ASCII text. The string, 'Prince of Persia 1.0 9/7/89', is followed by a special character '@' to mark the end of the text. This approach was common in the era, as it allowed developers to include metadata directly in the binary without requiring additional file structures or headers. In 1989, the Apple IIe and IIc were popular platforms, but their memory constraints were severe—just 128K of RAM, split across bank-switched memory. Every byte counted, and embedding metadata like version strings directly in the executable was an efficient way to ensure it was accessible without wasting resources. Jordan Mechner, working solo on Prince of Persia, had to balance cinematic ambitions with the technical limitations of the Apple II hardware. This string likely served both as a debugging aid and as a way to identify the build during testing or distribution. The inclusion of version strings in binaries became a standard practice, influencing later development workflows. It allowed developers to trace builds and ensure compatibility across versions. Today, versioning is handled more robustly through metadata in executable headers or separate manifest files, but the principle remains the same. Mechner's meticulous attention to detail, even in something as simple as a version string, reflects the care that went into crafting Prince of Persia—a game that would go on to inspire countless cinematic platformers and storytelling techniques in games like Another World and Flashback."

---

```asm
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
```
