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
description: "MS-DOS v2.0's MORE.ASM file implements a text pagination filter, showcasing early 1980s assembly programming techniques and the adaptation of Unix-inspired features into DOS."

summary:
  - point: "The file demonstrates MS-DOS's reliance on BIOS and DOS interrupts for I/O operations."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Pagination logic reflects the influence of Unix utilities like 'more' in DOS v2.0."
    link: "https://en.wikipedia.org/wiki/More_(command)"
    link_label: "More command"
  - point: "Conditional assembly directives reveal the challenges of supporting multiple hardware configurations."
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "start-version-check"
    line_start: 27
    line_end: 47
    title: "Version check: Ensuring compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The START section begins with a version check using interrupt 21h to retrieve the DOS version number. The programmer compares the version against 2.0, ensuring the program runs only on compatible systems. This reflects the transitional nature of MS-DOS v2.0, which introduced significant features like subdirectories and file handles. In 1983, the computing world was fragmented, with hardware and software compatibility being a constant challenge. Tim Paterson, the original author of 86-DOS, had designed the system to be simple and fast, but by the time v2.0 was released, Microsoft was adapting it to meet the demands of IBM and other OEMs. This version check is a safeguard against running the program on older systems, which lacked the necessary features. The approach of embedding compatibility checks in software became a standard practice, ensuring reliability across diverse environments."
  - id: "okdos-initialization"
    line_start: 49
    line_end: 103
    title: "Initializing screen dimensions and file handles"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_PC"
    image_url: ""
    image_caption: ""
    content: "The OKDOS section initializes the program's environment, setting screen dimensions and preparing file handles. Conditional assembly directives like `IF IBMVER` and `IF KANJI` illustrate the need to support different hardware configurations, including IBM PCs and systems with Kanji character sets. This reflects the global ambitions of MS-DOS, as Microsoft sought to make the operating system adaptable for international markets. The use of interrupt 16h to query the keyboard buffer and interrupt 21h for file handle operations highlights the reliance on BIOS and DOS services for low-level tasks. In the early 1980s, programmers had to work closely with hardware constraints, and this section showcases the meticulous attention to detail required to ensure compatibility and functionality. The initialization of file handles, including duplicating and redirecting standard input and error streams, demonstrates the influence of Unix-like concepts in MS-DOS v2.0, paving the way for more sophisticated file handling in later versions."
  - id: "aloop-buffer-read"
    line_start: 107
    line_end: 123
    title: "Reading input into a buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The ALOOP section reads data into a buffer using interrupt 21h. It sets up the buffer size (4096 bytes) and uses the file handle initialized earlier to read input. This approach reflects the constraints of early PCs, where memory was limited and efficient data handling was critical. By using a fixed-size buffer, the programmer ensures predictable behavior and avoids the complexities of dynamic memory allocation, which was not common in assembly programming at the time. The decision to use a loop for continuous reading aligns with the Unix-inspired design of MS-DOS v2.0, where utilities like 'more' were designed to process input incrementally. This section highlights the ingenuity required to implement seemingly simple functionality within the constraints of the 8086 architecture and the DOS environment."
  - id: "setcx-adjust-buffer-size"
    line_start: 127
    line_end: 129
    title: "Adjusting buffer size after read"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The SETCX section adjusts the buffer size based on the actual number of bytes read. This ensures that subsequent operations only process valid data, avoiding errors or inefficiencies. In the early 1980s, efficient use of memory and processing power was paramount, as PCs typically had limited resources. By dynamically updating the buffer size, the programmer demonstrates a keen awareness of these constraints. This technique, while simple, is a precursor to more sophisticated memory management practices that would become standard in later operating systems. It also reflects the Unix philosophy of handling data streams flexibly, which influenced the design of MS-DOS v2.0."
  - id: "tloop-character-processing"
    line_start: 133
    line_end: 147
    title: "Processing characters one by one"
    wikipedia_url: "https://en.wikipedia.org/wiki/Control_character"
    image_url: ""
    image_caption: ""
    content: "The TLOOP section processes characters from the buffer, checking for control characters like carriage return (CR) and line feed (LF). These checks are essential for formatting the output correctly, ensuring that the pagination logic works as intended. In the early days of computing, handling control characters was a common challenge, as different systems often interpreted them differently. The programmer's decision to handle these characters explicitly reflects the need for precise control over text formatting in a low-level environment. This section showcases the influence of Unix utilities like 'more,' which inspired the design of MS-DOS v2.0's pagination filter. By processing characters one by one, the program maintains simplicity and predictability, qualities that were highly valued in the constrained computing landscape of the 1980s."
  - id: "notbp-backspace-handling"
    line_start: 161
    line_end: 171
    title: "Handling backspace characters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Backspace"
    image_url: ""
    image_caption: ""
    content: "The NOTBP section handles backspace characters, decrementing the cursor column unless it is already at the start of the line. This logic ensures that the program correctly interprets user input and maintains proper text formatting. In the early 1980s, handling backspace was a critical feature for text-based applications, as it allowed users to correct errors interactively. The programmer's attention to this detail reflects the importance of user experience, even in a low-level utility like 'more.' This section also highlights the challenges of working with the 8086 architecture, where every operation had to be carefully planned to avoid unnecessary complexity or resource usage. The handling of backspace characters is a small but significant part of the program's overall functionality, demonstrating the programmer's commitment to creating a robust and user-friendly tool."
  - id: "askmore-user-prompt"
    line_start: 245
    line_end: 273
    title: "Prompting the user for continuation"
    wikipedia_url: "https://en.wikipedia.org/wiki/More_(command)"
    image_url: ""
    image_caption: ""
    content: "The ASKMORE section prompts the user to continue viewing the text, displaying a message and waiting for input. This interaction is central to the 'more' utility's functionality, allowing users to control the pace of text display. In the early 1980s, user interaction was often limited to simple prompts and responses, as graphical interfaces were still in their infancy. The programmer's decision to implement this feature reflects the influence of Unix utilities, which prioritized functionality and user control. By using interrupt 21h for string output and input handling, the program leverages the DOS environment to provide a seamless experience. This section demonstrates the balance between simplicity and usability, a hallmark of MS-DOS v2.0's design philosophy."

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