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
description: "MS-DOS v2.0's 'MORE' utility: a text pagination filter inspired by Unix, showcasing the evolution of command-line tools in early personal computing."

summary:
  - point: "Introduces a Unix-inspired pagination filter to MS-DOS"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Demonstrates direct hardware interaction via INT 21H calls"
    link: "https://en.wikipedia.org/wiki/BIOS_interrupt_call"
    link_label: "BIOS Interrupt Calls"
  - point: "Highlights adaptation for IBM PC hardware constraints"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Efficient memory usage with 4096-byte buffer for text reading"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Conditional assembly for internationalization (e.g., Kanji support)"
    link: "https://en.wikipedia.org/wiki/Internationalization_and_localization"
    link_label: "Internationalization"

enhancements:
  - id: "start-version-check"
    line_start: 27
    line_end: 47
    title: "Version Check: Ensuring Compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The 'START' section begins with a critical compatibility check, ensuring the program runs only on MS-DOS version 2.0 or higher. This is achieved by invoking interrupt 21H with function GET_VERSION, swapping register values, and comparing the result to the minimum required version. If the version is insufficient, a message is displayed and the program terminates. In 1983, this was a vital safeguard: MS-DOS v2.0 introduced major architectural changes inspired by Unix, including support for subdirectories and file handles. Programs written for v2.0 often relied on these features, making backward compatibility impractical. Tim Paterson, the original author of 86-DOS (MS-DOS's precursor), had designed the system for simplicity and speed, but by v2.0, Microsoft had shifted focus to robustness and scalability, partly due to IBM's influence. This compatibility check reflects the growing complexity of software ecosystems as personal computing matured. Today, such checks are ubiquitous, but in 1983, they marked a transition from hobbyist experimentation to professional software engineering."
  - id: "okdos-initialization"
    line_start: 49
    line_end: 103
    title: "System Initialization: Cursor and File Handles"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS_interrupt_call"
    image_url: ""
    image_caption: ""
    content: "The 'OKDOS' section initializes the program environment, setting up the cursor position and duplicating file handles. Conditional assembly directives (e.g., IBMVER and KANJI) adjust behavior for specific hardware or internationalization needs. For example, the maximum row count is set to 24 or 25 based on Kanji support, reflecting early efforts to accommodate non-English character sets. The program then uses interrupt 21H to duplicate the standard input handle and redirect it to standard error, ensuring consistent input/output behavior. These steps highlight the low-level control programmers had over hardware in the MS-DOS era, where direct manipulation of file handles and cursor positions was routine. This section also underscores the influence of IBM's hardware constraints on software design, as MS-DOS was tailored to the IBM PC's specifications. The meticulous setup here paved the way for the program's core functionality: reading and displaying text in a paginated format."
  - id: "aloop-buffer-read"
    line_start: 107
    line_end: 123
    title: "Reading Text: The 4096-Byte Buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The 'ALOOP' section is the heart of the program's text reading functionality. It sets up a 4096-byte buffer and reads data from the input file handle using interrupt 21H. If no data remains (AX = 0), the program terminates. This approach reflects the constraints of early personal computers, where memory was limited and efficient use of buffers was crucial. The choice of a 4096-byte buffer aligns with the typical sector size of disk drives, optimizing read operations. In 1983, MS-DOS was competing with CP/M and Unix-derived systems, and its ability to handle text efficiently was a key selling point. This section demonstrates the pragmatic engineering required to balance performance with hardware limitations, a hallmark of early DOS utilities. The buffer-based design influenced later text-processing tools, establishing patterns still visible in modern software."
  - id: "tloop-character-processing"
    line_start: 133
    line_end: 147
    title: "Character Processing: Handling Control Codes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Control_character"
    image_url: ""
    image_caption: ""
    content: "In 'TLOOP,' the program processes individual characters from the buffer, handling control codes like carriage return (CR), line feed (LF), and end-of-file (EOF). Each control code triggers specific actions: resetting the cursor column, incrementing the row, or terminating the program. This granular handling of text reflects the influence of Unix, where precise control over character streams was standard. In the early 1980s, text-based interfaces dominated computing, and efficient processing of control codes was essential for usability. Tim Paterson and Microsoft's engineers were adapting Unix concepts to the constrained environment of MS-DOS, creating tools that balanced power and simplicity. The logic here laid the groundwork for text-processing utilities in DOS and beyond, influencing generations of command-line tools."
  - id: "askmore-prompt-user"
    line_start: 245
    line_end: 273
    title: "User Interaction: Asking 'More?'"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The 'ASKMORE' section pauses the program to prompt the user with 'More?' after a page of text is displayed. It waits for a keypress without echoing input, ensuring a clean interface. This interaction embodies the Unix-inspired philosophy of user control, allowing readers to navigate text at their own pace. In 1983, MS-DOS was evolving from a simple operating system to a platform capable of supporting professional workflows. The 'MORE' utility reflects this transition, borrowing ideas from Unix while adapting them to the IBM PC's hardware and MS-DOS's architecture. This user-centric design became a staple of command-line interfaces, influencing not just DOS but also later systems like Windows and Linux. The simplicity and effectiveness of this prompt highlight the enduring appeal of minimalism in software design."

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