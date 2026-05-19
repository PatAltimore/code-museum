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
description: "MS-DOS v2.0 COPY.ASM file: A foundational rewrite of DOS's file copy routines, showcasing early software engineering for personal computers."

summary:
  - point: "Introduction of subdirectory support in MS-DOS v2.0"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Use of assembly language to optimize file handling routines"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"
  - point: "Inspired by Unix/XENIX design principles for file management"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Tim Paterson's influence on early personal computing software"
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"
  - point: "OEM licensing model that shaped the PC software industry"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "domelcopy-initialization"
    line_start: 129
    line_end: 139
    title: "Mel Hallerman Copy Initialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The DOMELCOPY routine initializes the Mel Hallerman copy flag and sets up the starting point for source file processing. This section of code checks if the MELCOPY flag is set and, if not, initializes it and stores the starting source pointer. At the time, MS-DOS v2.0 was being designed to handle more complex file operations, including concatenation and multi-file copying. The Mel Hallerman reference likely points to a specific use case or optimization scenario. In the early 1980s, personal computers were limited by memory and processing power, so routines like this had to be efficient and tightly written. The COPY command in MS-DOS became a staple for file management, influencing future operating systems like Windows and even Unix-based systems that adopted similar file manipulation paradigms."
  - id: "contmel-source-pointer-reset"
    line_start: 141
    line_end: 147
    title: "Resetting Source Pointer for Continuation"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The CONTMEL routine resets the source pointer and prepares the system for parsing the next file. It uses specific registers and memory locations to store the current state of file processing. This routine highlights the low-level nature of MS-DOS, where direct manipulation of memory and registers was common practice. In the broader context of computing history, routines like this demonstrate the challenges of working within the constraints of early personal computers, such as the IBM PC, which had limited RAM and relied on the 8086 processor. The efficient handling of file pointers and memory locations laid the groundwork for more advanced file systems in later operating systems."
  - id: "scansrc2-file-parsing"
    line_start: 149
    line_end: 181
    title: "Parsing Source Files with SCANSRC2"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "SCANSRC2 is responsible for parsing source file names and handling switches. It calls the CPARSE subroutine to interpret the input and checks for specific flags indicating switches or errors. This routine showcases the complexity of handling user input in assembly language, where every operation must be explicitly coded. In 1983, when MS-DOS v2.0 was released, the ability to parse and manage multiple file inputs was a significant advancement for command-line interfaces. The techniques used here influenced later developments in file handling, including the design of graphical file explorers and APIs for file manipulation in modern operating systems."
  - id: "nextmel-close-destination"
    line_start: 187
    line_end: 207
    title: "Closing Destination and Resetting State"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "NEXTMEL handles the closure of the current destination file and resets various state flags. It ensures that the system is ready to process the next file or terminate the operation if no further files are found. This routine reflects the procedural nature of early operating systems, where each step of a process had to be explicitly managed. The careful handling of state flags and memory locations in NEXTMEL highlights the importance of reliability in file operations, a principle that continues to be relevant in modern software development. The techniques used here influenced later file system designs, including journaling file systems that track changes to prevent data loss."
  - id: "setnmelj-jump-to-setnmel"
    line_start: 209
    line_end: 211
    title: "Jumping to SETNMEL for Next File"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "SETNMELJ is a simple routine that redirects execution to the SETNMEL routine. This kind of jump-based control flow was common in assembly language programming, where subroutine calls and jumps were used to manage program logic. The use of such techniques in MS-DOS reflects the need for efficient and compact code, given the hardware limitations of the time. While this routine itself is straightforward, it is part of a larger system that influenced the design of command-line interfaces and scripting languages in later operating systems."
  - id: "copy-command-initialization"
    line_start: 215
    line_end: 263
    title: "Initializing COPY Command State"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The COPY routine initializes the state for the file copy operation, setting up buffers, flags, and counters. It ensures that all relevant variables are reset before processing begins. This routine demonstrates the meticulous attention to detail required in assembly language programming, where every aspect of the system's state must be explicitly managed. At the time, MS-DOS v2.0 was introducing features like subdirectories and file handles, making file operations more complex than in earlier versions. The COPY routine's initialization process reflects the growing sophistication of personal computing software and influenced the development of similar routines in other operating systems, including Unix and Windows."
  - id: "destscan-parsing-destination"
    line_start: 265
    line_end: 279
    title: "Parsing Destination File with DESTSCAN"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "DESTSCAN parses the destination file name and checks for specific flags or switches. It calls the CPARSE subroutine to interpret the input and handles cases where a '+' delimiter is used. This routine showcases the challenges of parsing user input in a command-line environment, where the system must interpret a wide range of possible inputs. The techniques used in DESTSCAN influenced later developments in file handling, including the design of APIs for file manipulation and the implementation of command-line utilities in Unix and Linux."
  - id: "noplus-checking-plus-delimiter"
    line_start: 281
    line_end: 295
    title: "Handling '+' Delimiter with NOPLUS"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "NOPLUS checks for the presence of a '+' delimiter in the input and updates the relevant flags. This routine is part of the system's handling of concatenation operations, where multiple files can be combined into a single destination. The use of delimiters like '+' reflects the influence of Unix-style command-line syntax on MS-DOS. The techniques used here laid the groundwork for more advanced file manipulation features in later operating systems, including batch processing and scripting capabilities."
  - id: "setstars-wildcard-pattern-generation"
    line_start: 1027
    line_end: 1053
    title: "Wildcard pattern generation for file matching"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wildcard_character"
    image_url: ""
    image_caption: ""
    content: "The SETSTARS routine generates wildcard patterns used for file matching, such as '*.???'. This is achieved by manipulating memory locations to insert placeholder characters ('?' and '.') into a buffer. Wildcards are essential for enabling flexible file searches, allowing users to specify patterns rather than exact filenames. At the time, MS-DOS was evolving to include features inspired by Unix, where wildcard matching was a standard feature. Tim Paterson and Microsoft engineers adapted this concept to fit the constraints of the IBM PC's hardware, which included limited memory and processing power. The wildcard system became a cornerstone of command-line file manipulation, influencing later operating systems like Windows and Linux, which still rely on similar mechanisms for file searches and globbing."
  - id: "compname-drive-letter-parsing"
    line_start: 1059
    line_end: 1081
    title: "Parsing drive letters for source and destination"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "COMPNAME is responsible for parsing drive letters from source and destination buffers. It checks for the presence of a colon (':') after the drive letter and validates the format. If the source drive is not specified correctly, the routine jumps to NOSRCDRV. This logic reflects the early days of personal computing, where drive letters (e.g., 'A:', 'C:') were a novel abstraction for accessing storage devices. The routine's design ensures compatibility with the IBM PC's BIOS, which standardized drive letter conventions. This approach influenced later operating systems, including Windows, which retained the drive letter system for backward compatibility. The parsing mechanism demonstrates the meticulous attention to detail required to handle low-level operations in assembly language."
  - id: "nosrcdrv-nodstdrv-drive-validation"
    line_start: 1083
    line_end: 1131
    title: "Validating source and destination drive formats"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_PC"
    image_url: ""
    image_caption: ""
    content: "NOSRCDRV and NODSTDRV validate the formats of the source and destination drives. They check whether the drive letters are correctly specified and compare them to ensure compatibility. If the drives do not match, the routine jumps to RET81P, signaling an error. This validation process highlights the challenges of early file systems, where users had to manually specify drives and paths. The routines were designed to handle edge cases, such as missing or mismatched drive letters, ensuring robustness in file operations. These checks were crucial for MS-DOS's reliability, as the system had to function seamlessly across a wide range of hardware configurations. The drive validation logic laid the groundwork for modern file systems, which automate many of these processes while retaining compatibility with legacy conventions."
  - id: "checkcl-ret81p-file-comparison-validation"
    line_start: 1133
    line_end: 1139
    title: "File comparison logic for mismatches"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "CHECKCL and RET81P handle file comparison logic, focusing on mismatches between characters. The routines check for specific cases, such as a '.' character indicating a file extension, and determine whether the mismatch is critical. If a mismatch involves a null character (NUL), the routines decide whether to treat it as valid or invalid based on context. This logic reflects the constraints of early file systems, where filenames and extensions had strict formats. The comparison routines ensure that file operations, such as copying, are performed accurately, even in edge cases. These mechanisms influenced later file systems, which adopted more sophisticated comparison algorithms while retaining backward compatibility with MS-DOS conventions. The routines demonstrate the complexity of handling low-level file operations in assembly language."
  - id: "ret81p-final-error-handling"
    line_start: 1141
    line_end: 1158
    title: "Final error handling and return logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "RET81P serves as the final error handling and return logic for the routines. It restores registers (AX and CX) and exits gracefully, ensuring that the system remains stable after encountering errors or mismatches. This approach reflects the meticulous attention to detail required in assembly programming, where improper handling of registers could lead to crashes or undefined behavior. The routine's design ensures that errors are handled predictably, maintaining the integrity of the file system. This error-handling logic influenced later operating systems, which adopted more sophisticated mechanisms for managing exceptions and ensuring stability. RET81P exemplifies the challenges of low-level programming, where every instruction must be carefully crafted to avoid unintended consequences."

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