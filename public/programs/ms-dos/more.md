---
title: "MORE.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/MORE.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/MORE.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "more"
order: 38
description: "MS-DOS v2.0's MORE.ASM file implements a paginate filter, showcasing early text processing techniques in assembly for constrained hardware."

summary:
  - point: "Introduces a text pagination filter for MS-DOS"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Demonstrates direct hardware interaction via INT 21H"
    link: "https://en.wikipedia.org/wiki/BIOS_interrupt_call"
    link_label: "BIOS interrupt call"
  - point: "Optimized for IBM PC hardware constraints"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Reflects Unix-inspired design in MS-DOS v2.0"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Highlights assembly-level control of cursor and screen output"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly language"

enhancements:
  - id: "version-check-and-exit"
    line_start: 31
    line_end: 47
    title: "The Version Check That Ends It All"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section checks the MS-DOS version using INT 21H, a BIOS interrupt for system services. If the version is below 2.0, the program outputs an error message and terminates via INT 20H. At the time, MS-DOS was rapidly evolving, and version 2.0 introduced significant features like subdirectories and file handles. Ensuring compatibility was crucial for programs relying on these new features. Tim Paterson and Microsoft engineers designed this mechanism to gracefully handle older systems while leveraging new capabilities. This approach influenced future software development practices, where version checks became standard for compatibility and feature detection."
  - id: "initialize-screen-dimensions"
    line_start: 53
    line_end: 79
    title: "Setting Screen Dimensions for Pagination"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_PC"
    image_url: ""
    image_caption: ""
    content: "This section initializes screen dimensions based on hardware capabilities. MAXROW is set to 24 or 25 depending on the IBM version and Kanji support, while MAXCOL is determined by querying the keyboard buffer via INT 16H. The code then prepares the cursor position and redirects standard input/output handles for text processing. In the early 1980s, IBM PCs had fixed screen sizes, and programs had to adapt to these constraints. This routine exemplifies the tight coupling between software and hardware in the era, where developers wrote code tailored to specific machine configurations. The technique of dynamically adapting to hardware became a precursor to modern responsive design principles."
  - id: "buffered-file-read-loop"
    line_start: 107
    line_end: 123
    title: "Reading Files in 4KB Chunks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The ALOOP subroutine reads up to 4KB of data into a buffer using INT 21H's file read service. This buffered approach minimizes disk I/O, which was slow on early PCs with floppy drives. The code checks the read result and exits if no data remains. Buffering was a critical optimization in the 1980s, as it reduced the overhead of frequent disk access. This technique influenced later file handling practices, becoming a standard in operating systems and programming languages. Developers of text editors and utilities like MORE relied on such efficient I/O handling to ensure smooth user experiences."
  - id: "control-character-handling"
    line_start: 133
    line_end: 147
    title: "How MS-DOS Handles Tabs, Backspaces, and Line Feeds"
    wikipedia_url: "https://en.wikipedia.org/wiki/Control_character"
    image_url: ""
    image_caption: ""
    content: "This section processes control characters like carriage returns (CR), line feeds (LF), backspaces (BP), and tabs (TB). Each character adjusts the cursor position or triggers specific actions, such as moving to the next line or column. The code uses bitwise operations to align tabs to 8-column boundaries, a clever optimization for screen formatting. Control character handling was essential for text-based interfaces, where precise cursor control dictated user experience. The approach here reflects Unix's influence, where terminal control was a core concept. This technique laid the groundwork for text editors, terminal emulators, and command-line utilities that followed."
  - id: "ask-for-more-prompt"
    line_start: 245
    line_end: 251
    title: "The Pause That Keeps Users Reading"
    wikipedia_url: "https://en.wikipedia.org/wiki/Pagination"
    image_url: ""
    image_caption: ""
    content: "The ASKMORE subroutine displays a 'More?' prompt when the screen fills, waiting for user input to continue. It flushes the keyboard buffer and resets the cursor position before resuming. This interactive design ensures users can read text at their own pace, a necessity for paginated output. Inspired by Unix's 'more' command, this feature became a staple of command-line utilities, influencing tools like 'less' and modern terminal paginators. It reflects the shift towards user-centric design in software, where usability and interaction were prioritized alongside functionality."
  - id: "looping-through-buffered-characters"
    line_start: 277
    line_end: 283
    title: "The Endless Loop of Text Processing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Loop_(computing)"
    image_url: ""
    image_caption: ""
    content: "CHARLOOP iterates through buffered characters, decrementing CX (the character count) and jumping back to TLOOP for processing. If CX reaches zero, it jumps to GOBIG to refill the buffer. This looping mechanism ensures continuous text processing until the end of the file. Efficient loops like this were vital for performance in assembly programming, where every instruction counted. The structure here influenced the design of text processing algorithms in later programming languages, emphasizing simplicity and efficiency in handling sequential data."
  - id: "buffer-reload-and-continuation"
    line_start: 285
    line_end: 301
    title: "Refilling the Buffer for Infinite Pagination"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The GOBIG label reloads the buffer by jumping back to ALOOP, ensuring the program can handle large files seamlessly. This design allows MORE to paginate text indefinitely, limited only by the file size and system memory. In the constrained environment of early PCs, such techniques maximized utility while minimizing resource consumption. This approach influenced the development of streaming algorithms and text processing tools, where handling large datasets efficiently remains a critical challenge."

---

```asm
        TITLE   MORE MS-DOS Paginate Filter

FALSE   EQU     0

TRUE    EQU     NOT FALSE



IBMVER  EQU     TRUE

KANJI   EQU	FALSE

MSVER   EQU     FALSE



        INCLUDE DOSSYM.ASM



CODE    SEGMENT PUBLIC

        ORG     100H

ASSUME  CS:CODE,DS:CODE,ES:CODE,SS:CODE

START:



        MOV     AH,GET_VERSION

        INT     21H

        XCHG    AH,AL                   ; Turn it around to AH.AL

        CMP     AX,200H

        JAE     OKDOS

        MOV     DX,OFFSET BADVER

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     21H

        INT     20H

OKDOS:



        IF      IBMVER

        IF      KANJI

        MOV     BYTE PTR MAXROW,24

        ELSE

        MOV     BYTE PTR MAXROW,25

        ENDIF

        MOV     AH,15

        INT     16

        MOV     MAXCOL,AH

        ENDIF



        MOV     DX,OFFSET CRLFTXT       ; INITIALIZE CURSOR

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     21H



        XOR     BX,BX                   ; DUP FILE HANDLE 0

        MOV     AH,XDUP

        INT     21H

        MOV     BP,AX



        MOV     AH,CLOSE                ; CLOSE STANDARD IN

        INT     21H



        MOV     BX,2                    ; DUP STD ERR TO STANDARD IN

        MOV     AH,XDUP

        INT     21H



ALOOP:

        CLD

        MOV     DX,OFFSET BUFFER

        MOV     CX,4096

        MOV     BX,BP

        MOV     AH,READ

        INT     21H

        OR      AX,AX

        JNZ     SETCX

DONE:   INT     20H

SETCX:  MOV     CX,AX

        MOV     SI,DX



TLOOP:

        LODSB

        CMP     AL,1AH

        JZ      DONE

        CMP     AL,13

        JNZ     NOTCR

        MOV     BYTE PTR CURCOL,1

        JMP     SHORT ISCNTRL



NOTCR:  CMP     AL,10

        JNZ     NOTLF

        INC     BYTE PTR CURROW

        JMP     SHORT ISCNTRL



NOTLF:  CMP     AL,8

        JNZ     NOTBP

        CMP     BYTE PTR CURCOL,1

        JZ      ISCNTRL

        DEC     BYTE PTR CURCOL

        JMP     SHORT ISCNTRL



NOTBP:  CMP     AL,9

        JNZ     NOTTB

        MOV     AH,CURCOL

        ADD     AH,7

        AND     AH,11111000B

        INC     AH

        MOV     CURCOL,AH

        JMP     SHORT ISCNTRL



NOTTB:

        IF      MSVER                   ; IBM CONTROL CHARACTER PRINT

        CMP     AL,' '

        JB      ISCNTRL

        ENDIF



        IF      IBMVER

        CMP     AL,7                    ; ALL CHARACTERS PRINT BUT BELL

        JZ      ISCNTRL

        ENDIF



        INC     BYTE PTR CURCOL

        MOV     AH,CURCOL

        CMP     AH,MAXCOL

        JBE     ISCNTRL

        INC     BYTE PTR CURROW

        MOV     BYTE PTR CURCOL,1



ISCNTRL:

        MOV     DL,AL

        MOV     AH,STD_CON_OUTPUT

        INT     21H

        MOV     AH,CURROW

        CMP     AH,MAXROW

        JB      CHARLOOP



ASKMORE:

        MOV     DX,OFFSET MORETXT

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     21H                     ; ASK MORE?



        MOV     AH,STD_CON_INPUT_FLUSH  ; WAIT FOR A KEY, NO ECHO

        MOV     AL,STD_CON_INPUT

        INT     21H



        MOV     DX,OFFSET CRLFTXT

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     21H



        MOV     BYTE PTR CURCOL,1

        MOV     BYTE PTR CURROW,1



CHARLOOP:

        DEC     CX

        JZ      GOBIG

        JMP     TLOOP

GOBIG:  JMP     ALOOP



MAXROW  DB      24

MAXCOL  DB      80

CURROW  DB      1

CURCOL  DB      1

        EXTRN   MORETXT:BYTE,BADVER:BYTE,CRLFTXT:BYTE,BUFFER:BYTE



CODE    ENDS

        END     START






```
