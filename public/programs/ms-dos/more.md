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
description: "MS-DOS's MORE.ASM implements a text pagination utility, showcasing early efforts to adapt Unix-inspired functionality to the constrained PC environment."

summary:
  - point: "Pagination logic adapted from Unix's 'more' command"
    link: "https://en.wikipedia.org/wiki/More_(command)"
    link_label: "More command"
  - point: "Direct interaction with MS-DOS system calls via INT 21h"
    link: "https://en.wikipedia.org/wiki/INT_21h"
    link_label: "INT 21h"
  - point: "Efficient handling of control characters for terminal output"
    link: "https://en.wikipedia.org/wiki/Control_character"
    link_label: "Control characters"
  - point: "Optimized for IBM PC hardware constraints"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "start-version-check"
    line_start: 27
    line_end: 47
    title: "Version check for MS-DOS compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section begins by verifying the MS-DOS version using the INT 21h system call with function GET_VERSION (AH=30h). The program checks if the version is at least 2.0 (AX >= 200H) to ensure compatibility with the features introduced in MS-DOS 2.0, such as subdirectories and file handles. If the version is insufficient, it outputs an error message and terminates execution. This reflects the transition from MS-DOS 1.x to 2.x, where the operating system evolved to support more complex file systems and multitasking capabilities inspired by Unix. By enforcing a minimum version, the program avoids runtime errors caused by missing functionality. This approach influenced later software development practices, where version checks became standard for ensuring compatibility across evolving platforms."
  - id: "okdos-initialize-cursor"
    line_start: 49
    line_end: 103
    title: "Cursor initialization and standard input redirection"
    wikipedia_url: "https://en.wikipedia.org/wiki/Standard_streams"
    image_url: ""
    image_caption: ""
    content: "This section initializes the cursor position and redirects standard input to handle text pagination. It sets MAXROW and MAXCOL based on hardware capabilities, with special handling for Kanji support if enabled. The program uses INT 21h to duplicate file handles and redirect standard error to standard input, ensuring consistent input/output behavior. This design reflects the constraints of early IBM PCs, where hardware and software compatibility were critical. The use of INT 21h system calls demonstrates the low-level nature of MS-DOS programming, where developers directly interacted with the operating system's API. Redirecting file handles was a clever workaround for handling input/output streams in a single-threaded environment, a technique that later influenced scripting and shell utilities in Unix-like systems."
  - id: "aloop-buffer-read"
    line_start: 107
    line_end: 123
    title: "Buffered reading from input stream"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The ALOOP subroutine reads data from the input stream into a buffer using INT 21h with the READ function (AH=3Fh). It processes up to 4096 bytes at a time, optimizing performance by minimizing the number of system calls. The loop continues until no more data is available (AX=0). This buffered reading approach was essential for handling large text files efficiently on early PCs with limited memory and processing power. By using a fixed-size buffer, the program balances memory usage and I/O speed, a technique that became foundational in text processing utilities. Buffered I/O remains a standard practice in modern programming, influencing languages like C and Python, where libraries like stdio and io provide similar functionality."
  - id: "tloop-control-character-handling"
    line_start: 133
    line_end: 147
    title: "Control character handling for pagination"
    wikipedia_url: "https://en.wikipedia.org/wiki/Control_character"
    image_url: ""
    image_caption: ""
    content: "The TLOOP subroutine processes each character in the buffer, identifying control characters like carriage return (CR, 13h) and line feed (LF, 10h). It adjusts the cursor position accordingly, incrementing CURROW for new lines and resetting CURCOL for carriage returns. Handling control characters was crucial for rendering text correctly on the IBM PC's display, which relied on ASCII codes for terminal output. This logic mirrors Unix's 'more' command, adapting it to MS-DOS's environment. The ability to interpret and act on control characters influenced text editors, terminal emulators, and command-line utilities, laying the groundwork for modern text processing tools."
  - id: "notbp-backspace-handling"
    line_start: 161
    line_end: 171
    title: "Backspace handling in text output"
    wikipedia_url: "https://en.wikipedia.org/wiki/Backspace"
    image_url: ""
    image_caption: ""
    content: "The NOTBP subroutine handles backspace characters (ASCII 8h), decrementing CURCOL unless the cursor is already at the start of the line. This ensures proper navigation within the text display, allowing users to backtrack without corrupting the output. Backspace handling was a critical feature for terminal-based applications, enabling interactive text editing and command-line input. The logic here reflects the constraints of early PCs, where screen manipulation was performed manually by adjusting cursor positions. This approach influenced the development of text editors like MS-DOS EDIT and later graphical word processors, which built on these foundational techniques for handling user input."
  - id: "askmore-prompt-for-user-input"
    line_start: 245
    line_end: 273
    title: "Prompting user for continuation"
    wikipedia_url: "https://en.wikipedia.org/wiki/More_(command)"
    image_url: ""
    image_caption: ""
    content: "The ASKMORE subroutine displays a 'More?' prompt and waits for user input to continue pagination. It uses INT 21h system calls for both output (STD_CON_STRING_OUTPUT) and input (STD_CON_INPUT_FLUSH), ensuring the prompt is displayed and the program pauses until a key is pressed. This interactive behavior mimics Unix's 'more' command, providing a user-friendly way to navigate large text files one screen at a time. The design reflects the limitations of early PCs, where user interaction was often limited to keyboard input. This technique influenced the development of paging utilities in other operating systems, including Windows and Linux, where similar commands like 'less' and 'more' remain popular."
  - id: "gobig-loop-restart"
    line_start: 285
    line_end: 309
    title: "Restarting the pagination loop"
    wikipedia_url: "https://en.wikipedia.org/wiki/Loop_(computing)"
    image_url: ""
    image_caption: ""
    content: "The GOBIG subroutine restarts the pagination loop by jumping back to ALOOP. This ensures continuous processing of the input stream until the end of the file is reached. The loop structure reflects the simplicity and efficiency of assembly programming, where control flow is managed directly through jumps and labels. This design was well-suited to the constrained environment of early PCs, where memory and processing power were limited. The use of loops for iterative processing influenced the development of higher-level programming constructs, such as 'for' and 'while' loops in languages like C and Python, which abstract these low-level operations for modern developers."

---

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

             



