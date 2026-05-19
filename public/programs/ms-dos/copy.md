---
title: "COPY.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/COPY.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/COPY.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "copy"
order: 21
description: "This file contains the COPY command routines for MS-DOS v2.0, showcasing the evolution of file handling and system commands in early personal computing."

summary:
  - point: "Introduces subdirectory support in MS-DOS v2.0, inspired by Unix"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Implements file concatenation and device handling"
    link: "https://en.wikipedia.org/wiki/Concatenation"
    link_label: "Concatenation"
  - point: "Optimizes parsing and error handling for command-line arguments"
    link: "https://en.wikipedia.org/wiki/Command-line_interface"
    link_label: "Command-line interface"
  - point: "Demonstrates early assembly-level programming for file operations"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly language"
  - point: "Highlights the transition from single-tasking to multi-tasking capabilities"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"

enhancements:
  - id: "domelcopy-initialization-mel-copy"
    line_start: 129
    line_end: 139
    title: "Initialization of MELCOPY flag"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The DOMELCOPY section initializes the MELCOPY flag and sets up the starting point for the copy operation. MELCOPY is a specialized flag used to handle concatenation or multi-file operations. At this moment, the programmer is ensuring that the system is prepared to handle complex file operations, such as copying multiple files or concatenating their contents. In 1983, MS-DOS v2.0 was a significant leap forward, incorporating features inspired by Unix, such as subdirectories and file handles. These advancements were critical as personal computing moved beyond simple file management into more sophisticated workflows. The MELCOPY flag reflects the growing need for handling diverse file operations efficiently. This approach influenced later operating systems, including Windows, which inherited MS-DOS's file handling paradigms. Without this foundational work, modern file systems might lack the flexibility to handle complex operations like batch processing or concatenation."
  - id: "contmel-parsing-source-buffer"
    line_start: 141
    line_end: 147
    title: "Parsing source buffer for MELCOPY"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The CONTMEL section continues the initialization by parsing the source buffer and preparing for MELCOPY operations. This involves setting up registers and ensuring the '+' delimiter is recognized. In the early 1980s, command-line interfaces were the primary way users interacted with computers. Parsing input accurately was essential for usability and reliability, especially in systems like MS-DOS that catered to both novice and professional users. The use of delimiters like '+' allowed for intuitive commands, paving the way for more user-friendly interfaces. This parsing logic influenced later developments in command-line tools and scripting languages, where efficient handling of arguments and switches remains a cornerstone of design."
  - id: "scansrc2-parsing-and-error-handling"
    line_start: 149
    line_end: 181
    title: "Parsing source arguments with error handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "SCANSRC2 is responsible for parsing source arguments and handling errors during the process. It calls subroutines like CPARSE and SOURCEPROC to validate input and ensure the file descriptor is correctly set up. Error handling is a critical aspect of this section, as it ensures the system can recover gracefully from invalid input or unexpected conditions. In the context of 1983, robust error handling was a necessity for MS-DOS to compete with Unix-based systems, which were known for their reliability and flexibility. This routine showcases the meticulous attention to detail required in assembly programming, where every byte and instruction mattered. The techniques developed here influenced error handling in later systems, including Windows and Linux, which built upon the principles of validation and recovery established in early DOS versions."
  - id: "nextmel-resetting-copy-state"
    line_start: 187
    line_end: 207
    title: "Resetting copy state for next operation"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "NEXTMEL resets the copy state, preparing the system for the next file operation. This involves clearing flags, resetting pointers, and ensuring the system is ready to search for the next file. In the early days of personal computing, file systems were relatively simple, but as users demanded more functionality, systems like MS-DOS had to evolve. This routine reflects the growing complexity of file operations, where managing state across multiple files became essential. The ability to reset and prepare for subsequent operations laid the groundwork for modern file systems, which handle concurrent operations and maintain state across sessions. Developers studying this code would later apply similar principles in designing multi-threaded file systems and networked storage solutions."
  - id: "copy-command-initialization"
    line_start: 215
    line_end: 263
    title: "Initialization of COPY command"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The COPY section initializes the command, setting up default values for switches, arguments, and buffers. This is the starting point for the COPY operation, ensuring the system is in a clean state before processing user input. The programmer's goal here is to create a robust foundation for file copying, accommodating various scenarios like concatenation, binary copying, and ASCII copying. In 1983, MS-DOS v2.0 was a response to the growing demands of personal computing, where users needed more advanced file management capabilities. The initialization routine reflects the careful planning required to handle diverse use cases efficiently. This approach influenced later operating systems, where initialization routines became standard practice for ensuring reliability and predictability in system commands."
  - id: "destscan-parsing-destination-arguments"
    line_start: 265
    line_end: 279
    title: "Parsing destination arguments"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "DESTSCAN parses destination arguments, identifying switches and handling the '+' delimiter for concatenation. This routine ensures the destination is correctly set up before proceeding with the copy operation. In the early 1980s, command-line interfaces were the norm, and parsing user input accurately was critical for usability. The ability to handle complex input, such as concatenation and switches, reflects the sophistication of MS-DOS v2.0 compared to its predecessors. This parsing logic influenced later developments in command-line tools and scripting languages, where efficient handling of arguments and switches remains a cornerstone of design."
  - id: "gotplus-handling-concatenation"
    line_start: 307
    line_end: 335
    title: "Handling concatenation in COPY"
    wikipedia_url: "https://en.wikipedia.org/wiki/Concatenation"
    image_url: ""
    image_caption: ""
    content: "GOTPLUS handles concatenation, saving the destination buffer and preparing for the next file operation. This routine is crucial for implementing the '+' functionality, allowing users to concatenate files during the copy process. In 1983, file concatenation was a relatively advanced feature, inspired by Unix systems that offered similar capabilities. The ability to concatenate files directly from the command line was a significant usability improvement, making MS-DOS more competitive in the personal computing market. This feature influenced later operating systems and file management tools, where concatenation became a standard operation for handling text and binary files."
  - id: "checkdone-validating-arguments"
    line_start: 339
    line_end: 361
    title: "Validating arguments for COPY"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "CHECKDONE validates the number of arguments provided to the COPY command, ensuring they meet the expected criteria. This routine is an example of robust error handling, where the system checks for invalid input and responds appropriately. In the early 1980s, error handling was a critical aspect of software design, especially for operating systems like MS-DOS that needed to be reliable and user-friendly. The validation logic here reflects the meticulous attention to detail required in assembly programming, where every instruction mattered. This approach influenced error handling in later systems, including Windows and Linux, which built upon the principles of validation and recovery established in early DOS versions."
  - id: "acountok-default-destination-handling"
    line_start: 367
    line_end: 393
    title: "Handling default destination in COPY"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "ACOUNTOK handles the default destination when only one argument is provided, setting up the destination as the current drive and directory. This routine reflects the simplicity and constraints of early file systems, where defaults were often used to streamline operations. In 1983, MS-DOS v2.0 was designed to be intuitive for users transitioning from simpler systems like CP/M. The ability to handle default destinations efficiently was a usability improvement that influenced later operating systems, where similar logic is used to manage default paths and directories."
  - id: "chkswtches-validating-switches"
    line_start: 433
    line_end: 473
    title: "Validating switches in COPY command"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "CHKSWTCHES validates the switches provided to the COPY command, ensuring they are recognized and correctly processed. This routine is an example of the attention to detail required in assembly programming, where every input must be carefully checked. In the early 1980s, command-line interfaces were the primary way users interacted with computers, and robust switch handling was essential for usability. The validation logic here reflects the growing complexity of system commands as personal computing evolved. This approach influenced later developments in command-line tools and scripting languages, where efficient handling of switches remains a cornerstone of design."
  - id: "setstars-wildcard-pattern-generation"
    line_start: 1027
    line_end: 1053
    title: "Wildcard Pattern Generation for File Matching"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wildcard_character"
    image_url: ""
    image_caption: ""
    content: "The SETSTARS routine generates wildcard patterns for file matching, a crucial feature in command-line-based file systems like MS-DOS. By filling a buffer with a sequence of '?' characters and appending a '.' wildcard, it creates a pattern that matches any file with a specific extension. In 1983, this was a practical solution to the problem of navigating directories without graphical interfaces. Tim Paterson and Microsoft's engineers were working under constraints where memory was scarce, and user interaction was limited to text commands. Wildcards allowed users to specify broad file searches with minimal typing, a feature inspired by Unix but adapted for MS-DOS's simpler file system. This approach became ubiquitous in command-line environments, influencing later systems like Windows Command Prompt and Linux shells. Without this innovation, file management in early personal computers would have been far more cumbersome."
  - id: "compname-buffer-name-comparison"
    line_start: 1059
    line_end: 1081
    title: "Comparing Source and Destination Buffers"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The COMPNAME routine compares the source and destination buffer names, ensuring that drive letters are correctly interpreted. This was critical in MS-DOS v2.0, which introduced subdirectories and more complex file handling. The routine checks for the presence of a colon (':') to identify drive letters and adjusts the comparison accordingly. In the early 1980s, personal computers like the IBM PC were just beginning to standardize conventions for file paths and drive letters. Tim Paterson's original 86-DOS laid the groundwork, but MS-DOS v2.0 expanded on it, borrowing ideas from Unix while maintaining compatibility with simpler hardware. This routine reflects the careful balancing act between innovation and backward compatibility. Its influence persists in modern operating systems, where drive letters and file paths remain foundational concepts."
  - id: "nosrcdrv-nodstdrv-drive-letter-handling"
    line_start: 1083
    line_end: 1131
    title: "Handling Drive Letter Mismatches"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The NOSRCDRV and NODSTDRV routines handle mismatches between source and destination drive letters during file operations. They ensure that files are copied correctly across different drives, a necessity in an era when floppy disks were the primary storage medium. In 1983, MS-DOS v2.0 was designed to support a growing ecosystem of hardware, including hard drives and external storage devices. These routines reflect the challenges of standardizing file operations across diverse configurations. Tim Paterson's original design for 86-DOS was built for a single-drive system, but MS-DOS had to scale up to meet the demands of the IBM PC and its successors. This code laid the foundation for modern file systems, where cross-device operations are seamless and expected."
  - id: "checkcl-ret81p-null-termination-and-mismatch-handling"
    line_start: 1133
    line_end: 1158
    title: "Null-Termination and Mismatch Handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Null-terminated_string"
    image_url: ""
    image_caption: ""
    content: "The CHECKCL and RET81P routines ensure compatibility with null-terminated strings, a standard method for representing text in memory. They check for mismatches between characters in source and destination buffers, handling cases where one string ends with a null character. This was a practical solution for file name comparisons in MS-DOS, where memory efficiency was paramount. Null-terminated strings originated in C programming and became a staple of software development, influencing languages and systems for decades. Microsoft's engineers adapted this concept for MS-DOS, ensuring that file operations were both fast and reliable. These routines highlight the interplay between low-level memory management and user-facing functionality, a balance that shaped the evolution of operating systems. Their legacy can be seen in modern programming practices and file systems, where null-terminated strings remain a common representation."

---

TITLE   COMMAND COPY routines.



        INCLUDE COMSW.ASM



.xlist

.xcref

        INCLUDE DOSSYM.ASM

        INCLUDE DEVSYM.ASM

        INCLUDE COMSEG.ASM

.list

.cref



        INCLUDE COMEQU.ASM



DATARES SEGMENT PUBLIC

        EXTRN   VERVAL:WORD

DATARES ENDS



TRANDATA        SEGMENT PUBLIC

        EXTRN   BADARGS:BYTE,BADCD:BYTE,BADSWT:BYTE,COPIED_PRE:BYTE

        EXTRN   COPIED_POST:BYTE

        EXTRN   INBDEV:BYTE,OVERWR:BYTE,FULDIR:BYTE,LOSTERR:BYTE

        EXTRN   NOSPACE:BYTE,DEVWMES:BYTE,NOTFND:BYTE

TRANDATA        ENDS



TRANSPACE       SEGMENT PUBLIC

        EXTRN   MELCOPY:BYTE,SRCPT:WORD,MELSTART:WORD,SCANBUF:BYTE

        EXTRN   DESTFCB2:BYTE,SDIRBUF:BYTE,SRCTAIL:WORD,CFLAG:BYTE

        EXTRN   NXTADD:WORD,DESTCLOSED:BYTE,ALLSWITCH:WORD,ARGC:BYTE

        EXTRN   PLUS:BYTE,BINARY:BYTE,ASCII:BYTE,FILECNT:WORD

        EXTRN   WRITTEN:BYTE,CONCAT:BYTE,DESTBUF:BYTE,SRCBUF:BYTE

        EXTRN   SDIRBUF:BYTE,DIRBUF:BYTE,DESTFCB:BYTE,FRSTSRCH:BYTE

        EXTRN   FIRSTDEST:BYTE,DESTISDIR:BYTE,DESTSWITCH:WORD,STARTEL:WORD

        EXTRN   DESTTAIL:WORD,DESTSIZ:BYTE,DESTINFO:BYTE,INEXACT:BYTE

        EXTRN   CURDRV:BYTE,DESTVARS:BYTE,RESSEG:WORD,SRCSIZ:BYTE

        EXTRN   SRCINFO:BYTE,SRCVARS:BYTE,USERDIR1:BYTE,NOWRITE:BYTE

        EXTRN   RDEOF:BYTE,SRCHAND:WORD,CPDATE:WORD,CPTIME:WORD

        EXTRN   SRCISDEV:BYTE,BYTCNT:WORD,TPA:WORD,TERMREAD:BYTE

        EXTRN   DESTHAND:WORD,DESTISDEV:BYTE,DIRCHAR:BYTE

TRANSPACE       ENDS





; **************************************************

; COPY CODE

;



TRANCODE        SEGMENT PUBLIC BYTE



        EXTRN   RESTUDIR:NEAR,CERROR:NEAR,SWITCH:NEAR,DISP32BITS:NEAR

        EXTRN   PRINT:NEAR,TCOMMAND:NEAR,ZPRINT:NEAR,ONESPC:NEAR

        EXTRN   RESTUDIR1:NEAR,FCB_TO_ASCZ:NEAR,CRLF2:NEAR,SAVUDIR1:NEAR

        EXTRN   SETREST1:NEAR,BADCDERR:NEAR,STRCOMP:NEAR,DELIM:NEAR

        EXTRN   UPCONV:NEAR,PATHCHRCMP:NEAR,SCANOFF:NEAR



        EXTRN   CPARSE:NEAR



        EXTRN   SEARCH:NEAR,SEARCHNEXT:NEAR,DOCOPY:NEAR,CLOSEDEST:NEAR

        EXTRN   FLSHFIL:NEAR,SETASC:NEAR,BUILDNAME:NEAR,COPERR:NEAR



        PUBLIC  COPY,BUILDPATH,COMPNAME,ENDCOPY





ASSUME  CS:TRANGROUP,DS:TRANGROUP,ES:TRANGROUP,SS:NOTHING



DOMELCOPY:

        cmp     [MELCOPY],0FFH

        jz      CONTMEL

        mov     SI,[SRCPT]

        mov     [MELSTART],si

        mov     [MELCOPY],0FFH

CONTMEL:

        xor     BP,BP

        mov     si,[SRCPT]

        mov     bl,'+'

SCANSRC2:

        mov     di,OFFSET TRANGROUP:SCANBUF

        call    CPARSE

        test    bh,80H

        jz      NEXTMEL                 ; Go back to start

        test    bh,1                    ; Switch ?

        jnz     SCANSRC2                ; Yes

        call    SOURCEPROC

        call    RESTUDIR1

        mov     di,OFFSET TRANGROUP:DESTFCB2

        mov     ax,PARSE_FILE_DESCRIPTOR SHL 8

        INT     int_command

        mov     bx,OFFSET TRANGROUP:SDIRBUF + 1

        mov     si,OFFSET TRANGROUP:DESTFCB2 + 1

        mov     di,[SRCTAIL]

        call    BUILDNAME

        jmp     MELDO





NEXTMEL:

        call    CLOSEDEST

        xor     ax,ax

        mov     [CFLAG],al

        mov     [NXTADD],ax

        mov     [DESTCLOSED],al

        mov     si,[MELSTART]

        mov     [SRCPT],si

        call    SEARCHNEXT

        jz      SETNMELJ

        jmp     ENDCOPY2

SETNMELJ:

        jmp     SETNMEL



COPY:

; First order of buisness is to find out about the destination

ASSUME  DS:TRANGROUP,ES:TRANGROUP

        xor     ax,ax

        mov     [ALLSWITCH],AX          ; no switches

        mov     [ARGC],al               ; no arguments

        mov     [PLUS],al               ; no concatination

        mov     [BINARY],al             ; Binary not specifically specified

        mov     [ASCII],al              ; ASCII not specifically specified

        mov     [FILECNT],ax            ; No files yet

        mov     [WRITTEN],al            ; Nothing written yet

        mov     [CONCAT],al             ; No concatination

        mov     [MELCOPY],al            ; Not a Mel Hallerman copy

        mov     word ptr [SCANBUF],ax   ; Init buffer

        mov     word ptr [DESTBUF],ax   ; Init buffer

        mov     word ptr [SRCBUF],ax    ; Init buffer

        mov     word ptr [SDIRBUF],ax   ; Init buffer

        mov     word ptr [DIRBUF],ax    ; Init buffer

        mov     word ptr [DESTFCB],ax   ; Init buffer

        dec     ax

        mov     [FRSTSRCH],al           ; First search call

        mov     [FIRSTDEST],al          ; First time

        mov     [DESTISDIR],al          ; Don't know about dest

        mov     si,81H

        mov     bl,'+'                  ; include '+' as a delimiter

DESTSCAN:

        xor     bp,bp                   ; no switches

        mov     di,offset trangroup:SCANBUF

        call    CPARSE

        PUSHF                           ; save flags

        test    bh,80H                  ; A '+' argument?

        jz      NOPLUS                  ; no

        mov     [PLUS],1                ; yes

NOPLUS:

        POPF                            ; get flags back

        jc      CHECKDONE               ; Hit CR?

        test    bh,1                    ; Switch?

        jz      TESTP2                  ; no

        or      [DESTSWITCH],BP         ; Yes, assume destination

        or      [ALLSWITCH],BP          ; keep tabs on all switches

        jmp     short DESTSCAN



TESTP2:

        test    bh,80H                  ; Plus?

        jnz     GOTPLUS                 ; Yes, not a separate arg

        inc     [ARGC]                  ; found a real arg

GOTPLUS:

        push    SI

        mov     ax,[STARTEL]

        mov     SI,offset trangroup:SCANBUF ; Adjust to copy

        sub     ax,SI

        mov     DI,offset trangroup:DESTBUF

        add     ax,DI

        mov     [DESTTAIL],AX

        mov     [DESTSIZ],cl            ; Save its size

        inc     cx                      ; Include the NUL

        rep     movsb                   ; Save potential destination

        mov     [DESTINFO],bh           ; Save info about it

        mov     [DESTSWITCH],0          ; reset switches

        pop     SI

        jmp     short DESTSCAN          ; keep going



CHECKDONE:

        mov     al,[PLUS]

        mov     [CONCAT],al             ; PLUS -> Concatination

        shl     al,1

        shl     al,1

        mov     [INEXACT],al            ; CONCAT -> inexact copy

        mov     dx,offset trangroup:BADARGS

        mov     al,[ARGC]

        or      al,al                   ; Good number of args?

        jz      CERROR4J                ; no, not enough

        cmp     al,2

        jbe     ACOUNTOK

CERROR4J:

        jmp    CERROR                   ; no, too many

ACOUNTOK:

        mov     bp,offset trangroup:DESTVARS

        cmp     al,1

        jnz     GOT2ARGS

        mov     al,[CURDRV]             ; Dest is default drive:*.*

        add     al,'A'

        mov     ah,':'

        mov     [bp.SIZ],2

        mov     di,offset trangroup:DESTBUF

        stosw

        mov     [DESTSWITCH],0          ; no switches on dest

        mov     [bp.INFO],2             ; Flag dest is ambig

        mov     [bp.ISDIR],0            ; Know destination specs file

        call    SETSTARS

GOT2ARGS:

        cmp     [bp.SIZ],2

        jnz     NOTSHORTDEST

        cmp     [DESTBUF+1],':'

        jnz     NOTSHORTDEST            ; Two char file name

        or      [bp.INFO],2             ; Know dest is d:

        mov     di,offset trangroup:DESTBUF + 2

        mov     [bp.ISDIR],0            ; Know destination specs file

        call    SETSTARS

NOTSHORTDEST:

        mov     di,[bp.TTAIL]

        cmp     byte ptr [DI],0

        jnz     CHKSWTCHES

        mov     dx,offset trangroup:BADCD

        cmp     byte ptr [DI-2],':'

        jnz     CERROR4J               ; Trailing '/' error

        mov     [bp.ISDIR],2           ; Know destination is d:/

        or      [bp.INFO],6

        call    SETSTARS

CHKSWTCHES:

        mov     dx,offset trangroup:BADSWT

        mov     ax,[ALLSWITCH]

        cmp     ax,GOTSWITCH

        jz      CERROR4J                ; Switch specified which is not known



; Now know most of the information needed about the destination



        TEST    AX,VSWITCH              ; Verify requested?

        JZ      NOVERIF                 ; No

        MOV     AH,GET_VERIFY_ON_WRITE

        INT     int_command             ; Get current setting

        PUSH    DS

        MOV     DS,[RESSEG]

ASSUME  DS:RESGROUP

        XOR     AH,AH

        MOV     [VERVAL],AX             ; Save current setting

        POP     DS

ASSUME  DS:TRANGROUP

        MOV     AX,(SET_VERIFY_ON_WRITE SHL 8) OR 1 ; Set verify

        INT     int_command

NOVERIF:

        xor     bp,bp                   ; no switches

        mov     si,81H

        mov     bl,'+'                  ; include '+' as a delimiter

SCANFSRC:

        mov     di,offset trangroup:SCANBUF

        call    CPARSE                  ; Parse first source name

        test    bh,1                    ; Switch?

        jnz     SCANFSRC                ; Yes, try again

        or      [DESTSWITCH],bp         ; Include copy wide switches on DEST

        test    bp,BSWITCH

        jnz     NOSETCASC               ; Binary explicit

        cmp     [CONCAT],0

        JZ      NOSETCASC               ; Not Concat

        mov     [ASCII],ASWITCH         ; Concat -> ASCII copy if no B switch

NOSETCASC:

        push    SI

        mov     ax,[STARTEL]

        mov     SI,offset trangroup:SCANBUF ; Adjust to copy

        sub     ax,SI

        mov     DI,offset trangroup:SRCBUF

        add     ax,DI

        mov     [SRCTAIL],AX

        mov     [SRCSIZ],cl             ; Save its size

        inc     cx                      ; Include the NUL

        rep     movsb                   ; Save this source

        mov     [SRCINFO],bh            ; Save info about it

        pop     SI

        mov     ax,bp                   ; Switches so far

        call    SETASC                  ; Set A,B switches accordingly

        call    SWITCH                  ; Get any more switches on this arg

        call    SETASC                  ; Set

        call    FRSTSRC

        jmp     FIRSTENT



ENDCOPY:

        CALL    CLOSEDEST

ENDCOPY2:

        MOV     DX,OFFSET TRANGROUP:COPIED_PRE

        CALL    PRINT

        MOV     SI,[FILECNT]

        XOR     DI,DI

        CALL    DISP32BITS

        MOV     DX,OFFSET TRANGROUP:COPIED_POST

        CALL    PRINT

        JMP     TCOMMAND                ; Stack could be messed up



SRCNONEXIST:

        cmp     [CONCAT],0

        jnz     NEXTSRC                 ; If in concat mode, ignore error

        mov     dx,offset trangroup:SRCBUF

        call    zprint

        CALL    ONESPC

        mov     dx,offset trangroup:NOTFND

        jmp     COPERR



SOURCEPROC:

        push    SI

        mov     ax,[STARTEL]

        mov     SI,offset trangroup:SCANBUF ; Adjust to copy

        sub     ax,SI

        mov     DI,offset trangroup:SRCBUF

        add     ax,DI

        mov     [SRCTAIL],AX

        mov     [SRCSIZ],cl             ; Save its size

        inc     cx                      ; Include the NUL

        rep     movsb                   ; Save this sorce

        mov     [SRCINFO],bh            ; Save info about it

        pop     SI

        mov     ax,bp                   ; Switches so far

        call    SETASC                  ; Set A,B switches accordingly

        call    SWITCH                  ; Get any more switches on this arg

        call    SETASC                  ; Set

        cmp     [CONCAT],0

        jnz     LEAVECFLAG              ; Leave CFLAG if concatination

FRSTSRC:

        xor     ax,ax

        mov     [CFLAG],al              ; Flag destination not created

        mov     [NXTADD],ax             ; Zero out buffer

        mov     [DESTCLOSED],al         ; Not created -> not closed

LEAVECFLAG:

        mov     [SRCPT],SI              ; remember where we are

        mov     di,offset trangroup:USERDIR1

        mov     bp,offset trangroup:SRCVARS

        call    BUILDPATH               ; Figure out everything about the source

        mov     si,[SRCTAIL]            ; Create the search FCB

        return



NEXTSRC:

        cmp     [PLUS],0

        jnz     MORECP

ENDCOPYJ2:

        jmp     ENDCOPY                 ; Done

MORECP:

        xor     bp,bp                   ; no switches

        mov     si,[SRCPT]

        mov     bl,'+'                  ; include '+' as a delimiter

SCANSRC:

        mov     di,offset trangroup:SCANBUF

        call    CPARSE                  ; Parse first source name

        JC      EndCopyJ2               ; if error, then end (trailing + case)

        test    bh,80H

        jz      ENDCOPYJ2               ; If no '+' we're done

        test    bh,1                    ; Switch?

        jnz     SCANSRC                 ; Yes, try again

        call    SOURCEPROC

FIRSTENT:

        mov     di,FCB

        mov     ax,PARSE_FILE_DESCRIPTOR SHL 8

        INT     int_command

        mov     ax,word ptr [SRCBUF]    ; Get drive

        cmp     ah,':'

        jz      DRVSPEC1

        mov     al,'@'

DRVSPEC1:

        sub     al,'@'

        mov     ds:[FCB],al

        mov     ah,DIR_SEARCH_FIRST

        call    SEARCH

        pushf                           ; Save result of search

        call    RESTUDIR1               ; Restore users dir

        popf

        jz      NEXTAMBIG0

        jmp     SRCNONEXIST             ; Failed

NEXTAMBIG0:

        xor     al,al

        xchg    al,[FRSTSRCH]

        or      al,al

        jz      NEXTAMBIG

SETNMEL:

        mov     cx,12

        mov     di,OFFSET TRANGROUP:SDIRBUF

        mov     si,OFFSET TRANGROUP:DIRBUF

        rep     movsb                   ; Save very first source name

NEXTAMBIG:

        xor     al,al

        mov     [NOWRITE],al            ; Turn off NOWRITE

        mov     di,[SRCTAIL]

        mov     si,offset trangroup:DIRBUF + 1

        call    FCB_TO_ASCZ             ; SRCBUF has complete name

MELDO:

        cmp     [CONCAT],0

        jnz     SHOWCPNAM               ; Show name if concat

        test    [SRCINFO],2             ; Show name if multi

        jz      DOREAD

SHOWCPNAM:

        mov     dx,offset trangroup:SRCBUF

        call    ZPRINT

        call    CRLF2

DOREAD:

        call    DOCOPY

        cmp     [CONCAT],0

        jnz     NODCLOSE                ; If concat, do not close

        call    CLOSEDEST               ; else close current destination

        jc      NODCLOSE                ; Concat flag got set, close didn't really happen

        mov     [CFLAG],0               ; Flag destination not created

NODCLOSE:

        cmp     [CONCAT],0              ; Check CONCAT again

        jz      NOFLUSH

        CALL    FLSHFIL                 ; Flush output between source files on CONCAT

                                        ;  so LOSTERR stuff works correctly

        TEST    [MELCOPY],0FFH

        jz      NOFLUSH

        jmp     DOMELCOPY



NOFLUSH:

        call    SEARCHNEXT              ; Try next match

        jnz     NEXTSRCJ                ; Finished with this source spec

        mov     [DESTCLOSED],0          ; Not created or concat -> not closed

        jmp     NEXTAMBIG               ; Do next ambig



NEXTSRCJ:

        jmp   NEXTSRC







BUILDPATH:

        test    [BP.INFO],2

        jnz     NOTPFILE                ; If ambig don't bother with open

        mov     dx,bp

        add     dx,BUF                  ; Set DX to spec

        mov     ax,OPEN SHL 8

        INT     int_command

        jc      NOTPFILE

        mov     bx,ax                   ; Is pure file

        mov     ax,IOCTL SHL 8

        INT     int_command

        mov     ah,CLOSE

        INT     int_command

        test    dl,devid_ISDEV

        jnz     ISADEV                  ; If device, done

        test    [BP.INFO],4

        jz      ISSIMPFILE              ; If no path seps, done

NOTPFILE:

        mov     dx,word ptr [BP.BUF]

        cmp     dh,':'

        jz      DRVSPEC5

        mov     dl,'@'

DRVSPEC5:

        sub     dl,'@'                  ; A = 1

        call    SAVUDIR1

        mov     dx,bp

        add     dx,BUF                  ; Set DX for upcomming CHDIRs

        mov     bh,[BP.INFO]

        and     bh,6

        cmp     bh,6                    ; Ambig and path ?

        jnz     CHECKAMB                ; jmp if no

        mov     si,[BP.TTAIL]

        cmp     byte ptr [si-2],':'

        jnz     KNOWNOTSPEC

        mov     [BP.ISDIR],2            ; Know is d:/file

        jmp     short DOPCDJ



KNOWNOTSPEC:

        mov     [BP.ISDIR],1            ; Know is path/file

        dec     si                      ; Point to the /

DOPCDJ:

        jmp     short DOPCD



CHECKAMB:

        cmp     bh,2

        jnz     CHECKCD

ISSIMPFILE:

ISADEV:

        mov     [BP.ISDIR],0            ; Know is file since ambig but no path

        return



CHECKCD:

        call    SETREST1

        mov     ah,CHDIR

        INT     int_command

        jc      NOTPDIR

        mov     di,dx

        xor     ax,ax

        mov     cx,ax

        dec     cx

        repne   scasb

        dec     di

        mov     al,[DIRCHAR]

        mov     [bp.ISDIR],2            ; assume d:/file

        cmp     al,[di-1]

        jz      GOTSRCSLSH

        stosb

        mov     [bp.ISDIR],1            ; know path/file

GOTSRCSLSH:

        or      [bp.INFO],6

        call    SETSTARS

        return





NOTPDIR:

        mov     [bp.ISDIR],0            ; assume pure file

        mov     bh,[bp.INFO]

        test    bh,4

        retz                            ; Know pure file, no path seps

        mov     [bp.ISDIR],2            ; assume d:/file

        mov     si,[bp.TTAIL]

        cmp     byte ptr [si],0

        jz      BADCDERRJ2              ; Trailing '/'

        cmp     byte ptr [si],'.'

        jz      BADCDERRJ2              ; If . or .. pure cd should have worked

        cmp     byte ptr [si-2],':'

        jz      DOPCD                   ; Know d:/file

        mov     [bp.ISDIR],1            ; Know path/file

        dec     si                      ; Point at last '/'

DOPCD:

        xor     bl,bl

        xchg    bl,[SI]                 ; Stick in a NUL

        call    SETREST1

        mov     ah,CHDIR

        INT     int_command

        xchg    bl,[SI]

        retnc

BADCDERRJ2:

        JMP     BADCDERR



SETSTARS:

        mov     [bp.TTAIL],DI

        add     [bp.SIZ],12

        mov     ax,('.' SHL 8) OR '?'

        mov     cx,8

        rep     stosb

        xchg    al,ah

        stosb

        xchg    al,ah

        mov     cl,3

        rep     stosb

        xor     al,al

        stosb

        return





COMPNAME:

        PUSH    CX

        PUSH    AX

        MOV     si,offset trangroup:SRCBUF

        MOV     di,offset trangroup:DESTBUF

        MOV     CL,[CURDRV]

        MOV     CH,CL

        CMP     BYTE PTR [SI+1],':'

        JNZ     NOSRCDRV

        LODSW

        SUB     AL,'A'

        MOV     CL,AL

NOSRCDRV:

        CMP     BYTE PTR [DI+1],':'

        JNZ     NODSTDRV

        MOV     AL,[DI]

        INC     DI

        INC     DI

        SUB     AL,'A'

        MOV     CH,AL

NODSTDRV:

        CMP     CH,CL

        jnz     RET81P

        call    STRCOMP

        jz      RET81P

        mov     ax,[si-1]

        mov     cx,[di-1]

        push    ax

        and     al,cl

        pop     ax

        jnz     RET81P                  ; Niether of the mismatch chars was a NUL

; Know one of the mismatch chars is a NUL

; Check for ".NUL" compared with NUL

        cmp     al,'.'

        jnz     CHECKCL

        or      ah,ah

        jmp     short RET81P            ; If NUL return match, else no match

CHECKCL:

        cmp     cl,'.'

        jnz     RET81P                  ; Mismatch

        or      ch,ch                   ; If NUL return match, else no match

RET81P:

        POP     AX

        POP     CX

        return



TRANCODE        ENDS



        END

                                                                    
                                           