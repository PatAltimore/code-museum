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
description: "This file contains the assembly code for the COPY command in MS-DOS v2.0, showcasing the evolution of file management in early personal computing."

summary:
  - point: "Incorporates Unix-inspired features like subdirectories and file handles"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Optimized for the IBM PC's 8086 processor architecture"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"
  - point: "Demonstrates early techniques for parsing command-line arguments"
    link: "https://en.wikipedia.org/wiki/Command-line_interface"
    link_label: "Command-line interface"
  - point: "Highlights constraints of memory and performance in the early 1980s"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Introduces modularity with external subroutines and shared segments"
    link: "https://en.wikipedia.org/wiki/Modular_programming"
    link_label: "Modular programming"

enhancements:
  - id: "domelcopy-initialization"
    line_start: 129
    line_end: 139
    title: "Initializing Mel Hallerman Copy Mode"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The DOMELCOPY subroutine initializes a special copy mode referred to as 'Mel Hallerman copy,' a term likely referencing a specific use case or developer. This routine checks if the MELCOPY flag is set, and if not, it sets up the necessary pointers and flags for the operation. In the early 1980s, MS-DOS developers were working within the constraints of the IBM PC's 8086 processor, which had limited memory and processing power. Every flag and pointer had to be meticulously managed to ensure efficient execution. This initialization reflects the modularity and adaptability of MS-DOS, allowing specific modes of operation to be toggled dynamically. The modular approach seen here would influence later operating systems, emphasizing flexibility in handling diverse user needs."
  - id: "contmel-loop"
    line_start: 141
    line_end: 147
    title: "Continuing Mel Hallerman Copy Loop"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "CONTMEL sets up the loop for processing the Mel Hallerman copy mode, initializing registers and preparing for parsing. The use of the '+' character as a delimiter hints at the COPY command's ability to concatenate files, a feature inspired by Unix-like systems. At the time, MS-DOS v2.0 was a major step forward, incorporating ideas from Unix to support more complex file operations. This loop demonstrates the careful balance between simplicity and power that MS-DOS aimed to achieve, enabling advanced functionality while maintaining compatibility with earlier versions and hardware constraints."
  - id: "scansrc2-parsing"
    line_start: 149
    line_end: 181
    title: "Parsing Source Files and Handling Switches"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "SCANSRC2 is responsible for parsing source file names and handling command-line switches. It calls external subroutines like CPARSE and SOURCEPROC to interpret user input and prepare file descriptors. The reliance on INT commands for file operations reflects the low-level nature of MS-DOS, which directly interacted with hardware through BIOS interrupts. This section showcases the ingenuity required to implement a flexible command-line interface in an era when graphical interfaces were rare. By enabling users to specify switches and file paths, MS-DOS empowered them to perform complex tasks efficiently, setting the stage for the widespread adoption of personal computers."
  - id: "nextmel-file-handling"
    line_start: 187
    line_end: 207
    title: "Closing and Resetting File Operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "NEXTMEL handles the closure of file operations and resets key variables for the next iteration. It ensures that destination files are properly closed and prepares for the next source file by calling SEARCHNEXT. This routine reflects the careful management of system resources that was critical in the constrained environment of the IBM PC. By methodically resetting flags and pointers, MS-DOS minimized the risk of errors and ensured reliable operation. The principles demonstrated here—such as resource cleanup and iterative processing—remain foundational in modern file system design."
  - id: "copy-command-initialization"
    line_start: 215
    line_end: 263
    title: "Setting Up the COPY Command"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The COPY subroutine initializes the environment for the COPY command, setting default values for switches, arguments, and buffers. This setup ensures that the command starts with a clean slate, ready to process user input. In MS-DOS v2.0, the COPY command was enhanced to support features like concatenation and binary/ascii modes, reflecting the influence of Unix-like systems. The meticulous initialization seen here highlights the challenges of developing software for early PCs, where memory was scarce and every byte mattered. By laying a solid foundation, this routine enabled the COPY command to handle complex operations efficiently, contributing to MS-DOS's reputation for reliability and versatility."
  - id: "destscan-switch-handling"
    line_start: 265
    line_end: 279
    title: "Scanning Destination Arguments and Switches"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "DESTSCAN processes destination arguments and command-line switches, using CPARSE to interpret user input. It checks for the presence of the '+' character to enable concatenation mode and updates relevant flags. This routine exemplifies the modular design of MS-DOS, where specific tasks are delegated to well-defined subroutines. In the early 1980s, command-line interfaces were the primary means of interacting with computers, and efficient parsing routines like DESTSCAN were essential for usability. The ability to handle switches dynamically made MS-DOS a powerful tool for both novice and advanced users, laying the groundwork for its widespread adoption."
  - id: "testp2-argument-validation"
    line_start: 299
    line_end: 305
    title: "Validating Arguments for COPY Command"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "TESTP2 checks the validity of arguments provided to the COPY command, ensuring that they conform to expected formats. It distinguishes between real arguments and concatenation markers ('+'), incrementing the argument count as needed. This validation step reflects the importance of error handling in MS-DOS, where user input could vary widely. By enforcing strict rules for argument parsing, MS-DOS minimized the risk of unexpected behavior, contributing to its reliability. The techniques used here would influence later operating systems, emphasizing the need for robust input validation in command-line tools."
  - id: "checkdone-final-validation"
    line_start: 339
    line_end: 361
    title: "Final Validation of COPY Command Arguments"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "CHECKDONE performs final validation of the arguments provided to the COPY command, ensuring that the number of arguments is within acceptable limits. It sets flags for concatenation and inexact copying based on the presence of the '+' marker. This routine highlights the careful attention to detail in MS-DOS's design, where every aspect of user input was scrutinized to prevent errors. The emphasis on validation reflects the challenges of developing software for early PCs, where debugging tools were limited and reliability was paramount. By enforcing strict rules for argument handling, MS-DOS set a standard for robustness in command-line utilities."
  - id: "setstars-wildcard-pattern-generation"
    line_start: 1027
    line_end: 1053
    title: "Wildcard patterns for file matching"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wildcard_character"
    image_url: ""
    image_caption: ""
    content: "The SETSTARS routine is responsible for generating wildcard patterns, a key feature in file matching operations. By populating memory with a sequence of '?' and '.', it creates a template for matching filenames that share a common structure. In the early 1980s, wildcard characters were a novel and essential solution for simplifying user interactions with file systems. Tim Paterson, the original author of 86-DOS, likely drew inspiration from similar mechanisms in CP/M, the dominant microcomputer operating system of the late 1970s. This routine reflects the growing need for user-friendly file manipulation tools as personal computing expanded beyond hobbyists to mainstream users. The wildcard system introduced here became a standard feature in DOS and influenced later operating systems, including Windows and Unix-like systems. Its simplicity and utility ensured its longevity, making it a foundational concept in file system design."
  - id: "compname-drive-letter-parsing"
    line_start: 1059
    line_end: 1081
    title: "Parsing and comparing drive letters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Drive_letter_assignment"
    image_url: ""
    image_caption: ""
    content: "COMPNAME is tasked with parsing and comparing drive letters in file paths, a critical operation in MS-DOS's handling of storage devices. The routine examines the source and destination buffers, identifies drive letters, and converts them to numerical indices for comparison. This functionality reflects the constraints of early personal computers, where storage devices were accessed via single-letter identifiers ('A:', 'B:', etc.). These conventions originated with CP/M and were carried forward into DOS, shaping user expectations for decades. By automating drive letter parsing, COMPNAME simplifies file operations and ensures compatibility across different storage configurations. The routine's design demonstrates the careful balance between simplicity and functionality that characterized MS-DOS, enabling it to become the standard operating system for IBM PCs and their clones."
  - id: "nosrcdrv-nodstdrv-drive-validation"
    line_start: 1083
    line_end: 1131
    title: "Validating source and destination drives"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "NOSRCDRV and NODSTDRV handle the validation of source and destination drives in file operations. These routines check for the presence of a colon (':') in the file path, a convention indicating a drive letter in DOS. If a drive letter is found, it is converted to a numerical index for further processing. This validation step ensures that file operations are directed to valid storage devices, preventing errors and maintaining system stability. In the early 1980s, personal computers were limited to a few storage devices, such as floppy drives and hard disks, each accessed via a single-letter identifier. These routines reflect the practical constraints of the era and the need for robust error handling in a rapidly evolving computing landscape. By enforcing drive validation, MS-DOS set a standard for file system reliability that influenced later operating systems."
  - id: "checkcl-ret81p-nul-dot-mismatch-handling"
    line_start: 1133
    line_end: 1158
    title: "Handling NUL and '.' mismatches"
    wikipedia_url: "https://en.wikipedia.org/wiki/Null_character"
    image_url: ""
    image_caption: ""
    content: "CHECKCL and RET81P address edge cases in file comparison, specifically mismatches involving the NUL character and '.'. These routines ensure that comparisons account for the peculiarities of DOS file naming conventions, where '.' separates the filename from its extension and NUL indicates the end of a string. By carefully handling these cases, the routines prevent errors in file operations and maintain compatibility with the DOS file system. This attention to detail reflects the challenges of designing an operating system for a diverse user base, ranging from hobbyists to business professionals. The handling of NUL and '.' mismatches demonstrates the influence of Unix-like systems on MS-DOS v2.0, as Microsoft sought to incorporate advanced features while preserving the simplicity that made DOS successful. These routines highlight the incremental evolution of file system design and the enduring impact of early decisions on modern computing."

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