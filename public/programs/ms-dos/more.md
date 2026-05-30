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
description: "MS-DOS's MORE.ASM file implements a command-line pagination utility, showcasing early text processing techniques and hardware constraints of the IBM PC era."

summary:
  - point: "Pagination logic for text output in MS-DOS"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Direct interaction with BIOS and DOS interrupts"
    link: "https://en.wikipedia.org/wiki/BIOS_interrupt_call"
    link_label: "BIOS Interrupts"
  - point: "Handling control characters for formatted display"
    link: "https://en.wikipedia.org/wiki/Control_character"
    link_label: "Control Characters"
  - point: "Optimized memory usage for constrained environments"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Influence on later text utilities and Unix-like tools"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"

enhancements:
  - id: "version-checking-and-termination"
    line_start: 27
    line_end: 47
    title: "Version Check: Preventing Compatibility Chaos"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section begins with a version check to ensure the program runs only on MS-DOS 2.0 or later. The programmer uses interrupt 21h to retrieve the DOS version and compares it against the minimum required version (2.0). If the version is insufficient, the program outputs an error message and terminates. This reflects the growing complexity of software ecosystems in the early 1980s, where backward compatibility was a challenge as operating systems evolved. Tim Paterson and Microsoft were keenly aware of these issues, as MS-DOS was being licensed to numerous OEMs, each with slightly different hardware configurations. The decision to enforce a minimum version ensured stability and reduced support headaches. This approach influenced later software practices, where version checks became standard for ensuring compatibility across diverse systems."
  - id: "cursor-initialization-and-display-setup"
    line_start: 49
    line_end: 103
    title: "Setting Up the Screen: Rows, Columns, and Handles"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_PC"
    image_url: ""
    image_caption: ""
    content: "Here, the program initializes the screen dimensions and cursor position. It sets the maximum rows and columns based on hardware capabilities, accounting for differences like Kanji support on Japanese systems. The code also duplicates file handles to redirect standard input and error streams, ensuring proper text flow. This section highlights the low-level nature of programming for the IBM PC, where developers had to manually configure hardware-specific parameters. The reliance on BIOS interrupts (e.g., INT 21h) underscores the limited abstraction layers available at the time. These techniques laid the groundwork for more sophisticated text utilities, influencing the design of Unix-like tools such as `less` and `more`, which became staples of command-line environments."
  - id: "buffered-text-reading-loop"
    line_start: 107
    line_end: 123
    title: "Reading Text in 4KB Chunks: Memory Efficiency"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "This section implements a loop to read text data into a 4KB buffer using interrupt 21h. The choice of 4KB reflects the constraints of early PC memory management, where efficient use of limited RAM was critical. By using a fixed buffer size, the program minimizes overhead and ensures predictable performance. This design decision was influenced by the hardware limitations of the IBM PC, which typically shipped with 16KB to 64KB of RAM. The buffered reading approach became a standard technique in software development, influencing later text-processing tools and file-handling libraries. It also demonstrates the programmer's awareness of balancing performance with simplicity in constrained environments."
  - id: "control-character-handling"
    line_start: 127
    line_end: 241
    title: "Decoding Control Characters: Formatting on the Fly"
    wikipedia_url: "https://en.wikipedia.org/wiki/Control_character"
    image_url: ""
    image_caption: ""
    content: "This section processes control characters such as carriage return (CR), line feed (LF), backspace (BP), and tab (TB). Each character triggers specific actions, such as updating cursor position or advancing rows. The program uses bitwise operations to calculate tab stops, showcasing the programmer's ingenuity in optimizing arithmetic for constrained hardware. Handling control characters was essential for text formatting in early computing, as graphical interfaces were rare. This approach reflects the influence of teletype machines and early terminal standards, where control characters dictated text layout. The techniques here influenced later text-processing utilities and contributed to the development of standardized character encoding systems like ASCII."
  - id: "ask-more-prompt"
    line_start: 245
    line_end: 273
    title: "Pausing for Input: The 'More' Prompt"
    wikipedia_url: "https://en.wikipedia.org/wiki/More_(command)"
    image_url: ""
    image_caption: ""
    content: "This section implements the 'More' prompt, asking the user whether to continue displaying text. It outputs a message and waits for a keypress using interrupt 21h. The prompt ensures that large text files can be viewed incrementally, preventing screen overflow. This feature was inspired by Unix's `more` command, which introduced pagination to command-line utilities. The MS-DOS implementation adapts the concept to the IBM PC's hardware constraints, using BIOS interrupts for input/output operations. The 'More' prompt became a staple of text utilities, influencing later tools like `less` and graphical file viewers. It reflects the growing need for user-friendly features in command-line environments during the early 1980s."
  - id: "looping-and-buffer-reset"
    line_start: 277
    line_end: 301
    title: "Infinite Loop: Resetting for the Next Chunk"
    wikipedia_url: "https://en.wikipedia.org/wiki/Infinite_loop"
    image_url: ""
    image_caption: ""
    content: "The final section implements an infinite loop to reset the buffer and continue processing text. It decrements the character count and jumps back to the main text-processing loop. This design ensures seamless handling of large files, breaking them into manageable chunks for display. The infinite loop reflects the simplicity and directness of early assembly programming, where control flow was tightly managed. While modern programming discourages infinite loops without exit conditions, they were common in early utilities like this, designed for single-purpose execution. This approach influenced later file-processing tools and demonstrates the programmer's focus on efficiency and reliability in constrained environments."

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