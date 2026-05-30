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
description: "This file contains the assembly routines for the COPY command in MS-DOS v2.0, showcasing the evolution of file manipulation techniques in early operating systems."

summary:
  - point: "Introduced subdirectory support and file handles, inspired by Unix/XENIX."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Optimized for IBM PC hardware constraints, including 8086 architecture."
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Demonstrates early parsing and error handling techniques for command-line utilities."
    link: "https://en.wikipedia.org/wiki/Command-line_interface"
    link_label: "Command-line interface"
  - point: "Highlights the transition from single-tasking to multi-file operations in DOS."
    link: "https://en.wikipedia.org/wiki/DOS"
    link_label: "DOS"
  - point: "The COPY command became foundational for file management in personal computing."
    link: "https://en.wikipedia.org/wiki/File_manager"
    link_label: "File manager"

enhancements:
  - id: "domelcopy-initialization"
    line_start: 129
    line_end: 139
    title: "Why 'Mel Hallerman Copy' Exists in DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The DOMELCOPY routine initializes a special flag, 'MELCOPY,' which appears to reference a specific type of copy operation. The code checks if the flag is set to 0xFF, indicating that a 'Mel Hallerman Copy' is active, and sets up the source pointer accordingly. This section reflects the modularity of MS-DOS v2.0, where specialized operations could be toggled via flags. In the early 1980s, MS-DOS was being adapted for diverse hardware and user needs, requiring flexibility in command behavior. The inclusion of such specific flags suggests collaboration or influence from individuals like Mel Hallerman, a developer at Microsoft during this era. This modular approach influenced later command-line utilities, where flags and switches became standard for customizing operations. The concept of specialized copy modes paved the way for more advanced file management systems in later operating systems, such as Windows and Linux."
  - id: "contmel-buffer-reset"
    line_start: 141
    line_end: 147
    title: "Resetting Buffers for Complex Copy Operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The CONTMEL routine resets key registers and prepares the buffer for further processing. It sets up the source pointer and includes the '+' character as a delimiter, which is significant for concatenation operations. This reflects the growing complexity of file operations in MS-DOS v2.0, which introduced features like subdirectories and multi-file handling. At the time, memory constraints on the IBM PC (with 64KB segments) necessitated efficient buffer management. The '+' delimiter hints at the COPY command's ability to concatenate files, a feature inspired by Unix-like systems. This technique influenced future command-line utilities, where buffer management and delimiters became critical for parsing complex input. The careful setup of buffers and registers here underscores the challenges of working within the limited hardware capabilities of the era."
  - id: "scansrc2-parsing-source"
    line_start: 149
    line_end: 181
    title: "Parsing Source Files with Early Error Handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Parsing"
    image_url: ""
    image_caption: ""
    content: "SCANSRC2 parses the source file name and checks for switches, errors, and special conditions. It uses the CPARSE subroutine to analyze input and determine whether the source file is valid. If errors are detected, the routine loops back or invokes other routines like SOURCEPROC to handle specific cases. This section exemplifies early error handling in assembly, where minimal resources required precise checks and efficient branching. In 1983, MS-DOS v2.0 was designed to support more advanced file operations, inspired by Unix/XENIX. Parsing and error handling routines like this were critical for ensuring robustness in command-line utilities. The techniques developed here influenced later operating systems, where parsing became more sophisticated, incorporating regular expressions and advanced error reporting. The modular design of SCANSRC2, with its reliance on subroutines, reflects the growing complexity of software development during the early PC era."
  - id: "nextmel-cleanup-and-search"
    line_start: 187
    line_end: 207
    title: "Cleaning Up After File Searches"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "NEXTMEL handles cleanup after a file search operation, resetting flags and pointers to prepare for the next search. It interacts with routines like CLOSEDEST and SEARCHNEXT to ensure that resources are properly managed. This reflects the importance of resource management in early operating systems, where memory and file handles were limited. In the context of MS-DOS v2.0, these routines were part of a broader effort to introduce multi-file operations and subdirectory support. The cleanup and preparation steps here influenced later file systems, where resource management became increasingly automated. Developers studying this code would have learned techniques for managing scarce resources efficiently, a skill that remained relevant as operating systems evolved to support more complex file operations."
  - id: "copy-initialization"
    line_start: 215
    line_end: 263
    title: "Initializing COPY: A Modular Approach"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The COPY routine initializes key variables and flags for the COPY command, setting up the environment for file operations. It clears buffers, resets counters, and prepares for parsing arguments and switches. This modular initialization reflects the influence of Unix-like systems on MS-DOS v2.0, where commands were designed to handle complex operations. In 1983, the IBM PC's hardware constraints required careful management of memory and resources, making initialization routines like this critical. The modularity seen here influenced later operating systems, where command-line utilities became increasingly sophisticated. COPY's design, with its emphasis on flexibility and error handling, set a precedent for future file management tools, including those in Windows and Linux."
  - id: "destscan-parsing-destination"
    line_start: 265
    line_end: 279
    title: "Parsing Destination Files: A DOS Innovation"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_manager"
    image_url: ""
    image_caption: ""
    content: "DESTSCAN parses the destination file name, checking for switches and special conditions. It uses the CPARSE subroutine to analyze input and determine whether the destination is valid. This section highlights the growing complexity of file operations in MS-DOS v2.0, which introduced features like subdirectories and multi-file handling. At the time, memory constraints on the IBM PC necessitated efficient parsing routines. DESTSCAN's ability to handle switches and delimiters reflects the influence of Unix-like systems on MS-DOS. The techniques developed here influenced later file management tools, where parsing became more sophisticated, incorporating features like wildcard support and advanced error reporting. The modular design of DESTSCAN underscores the challenges of working within the limited hardware capabilities of the era."
  - id: "checkdone-argument-validation"
    line_start: 339
    line_end: 583
    title: "Validating Arguments: Preventing User Errors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "CHECKDONE validates the number of arguments provided to the COPY command, ensuring that the user has specified a valid source and destination. It checks for errors like missing or excessive arguments and invokes error-handling routines if necessary. This section reflects the importance of user input validation in early operating systems, where command-line utilities were prone to user errors. In 1983, MS-DOS v2.0 was designed to support more advanced file operations, inspired by Unix/XENIX. Argument validation routines like this were critical for ensuring robustness and preventing crashes. The techniques developed here influenced later operating systems, where input validation became more sophisticated, incorporating features like type checking and interactive error messages. Developers studying this code would have learned techniques for handling user errors efficiently, a skill that remained relevant as software development evolved."
  - id: "sourceproc-saving-source-info"
    line_start: 587
    line_end: 623
    title: "Saving Source File Information for Copy"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "SOURCEPROC saves information about the source file, including its name, size, and switches. It prepares the source file for copying by adjusting pointers and buffers. This section exemplifies the modular design of MS-DOS v2.0, where routines were designed to handle specific tasks efficiently. In the early 1980s, MS-DOS was being adapted for diverse hardware and user needs, requiring flexibility in command behavior. SOURCEPROC's ability to save detailed information about the source file reflects the influence of Unix-like systems on MS-DOS. The techniques developed here influenced later file systems, where metadata management became increasingly important. Developers studying this code would have learned techniques for handling file information efficiently, a skill that remained relevant as operating systems evolved to support more complex file operations."
  - id: "buildpath-path-resolution"
    line_start: 827
    line_end: 859
    title: "Resolving File Paths in a Fragmented Memory World"
    wikipedia_url: "https://en.wikipedia.org/wiki/Path_(computing)"
    image_url: ""
    image_caption: ""
    content: "BUILDPATH resolves the full path of a file, determining whether it is a device, a simple file, or a file within a directory. It interacts with the IOCTL and CHDIR commands to verify the file's type and location. This section highlights the challenges of path resolution in early operating systems, where memory constraints and hardware limitations required efficient algorithms. In 1983, MS-DOS v2.0 introduced subdirectory support, inspired by Unix/XENIX, making path resolution routines like this critical. BUILDPATH's ability to handle ambiguous paths and devices reflects the growing complexity of file systems. The techniques developed here influenced later operating systems, where path resolution became more sophisticated, incorporating features like symbolic links and network paths. Developers studying this code would have learned techniques for handling paths efficiently, a skill that remained relevant as software development evolved."
  - id: "setstars-wildcard-pattern-generation"
    line_start: 1027
    line_end: 1053
    title: "Wildcard Patterns: A File System Shortcut"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The SETSTARS routine generates wildcard patterns for file matching, a common feature in DOS file systems. By filling a buffer with '?' and '.', it creates a template for matching filenames with variable characters. This was essential for enabling flexible file searches in early command-line environments. At the time, file systems were constrained by 8.3 naming conventions (eight characters for the name, three for the extension), and wildcard matching allowed users to work around these limitations efficiently. Tim Paterson likely adapted this approach from CP/M, which also supported wildcard file operations. This technique became ubiquitous in DOS and influenced later systems like Windows and Linux, where wildcard matching remains a standard feature in command-line interfaces."
  - id: "compname-drive-letter-processing"
    line_start: 1059
    line_end: 1081
    title: "Drive Letter Logic: Multi-Drive Systems Made Simple"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_PC"
    image_url: ""
    image_caption: ""
    content: "COMPNAME processes source and destination drive letters, a fundamental operation for multi-drive systems. It checks whether a filename includes a drive specifier (e.g., 'C:') and adjusts internal variables accordingly. This was crucial for MS-DOS, which supported multiple drives in an era when hard drives were rare and floppy drives were the norm. The routine reflects the influence of CP/M, which also used drive letters to differentiate storage devices. By enabling seamless file operations across drives, this logic paved the way for the widespread adoption of PCs in business environments. Later operating systems, including Windows, retained the drive letter convention, making it one of the longest-lasting design choices from the DOS era."
  - id: "nosrcdrv-nodstdrv-cross-drive-parsing"
    line_start: 1083
    line_end: 1131
    title: "Parsing Drives: Early Cross-Drive Operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Computer_file"
    image_url: ""
    image_caption: ""
    content: "NOSRCDRV and NODSTDRV handle parsing of source and destination drive letters, ensuring compatibility across different storage devices. These routines check for the presence of a colon (':') in filenames, which indicates a drive specifier. If found, they extract the drive letter and adjust internal variables to reflect the drive's identity. This parsing was critical for enabling cross-drive file operations, a feature that became increasingly important as PCs began to support multiple storage devices. The logic here reflects the constraints of early PCs, which relied on simple text-based conventions to manage files. This approach influenced later file systems and remains a recognizable feature in modern operating systems."
  - id: "checkcl-ret81p-file-comparison-logic"
    line_start: 1133
    line_end: 1151
    title: "File Comparison: Handling Edge Cases in DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "CHECKCL and RET81P implement nuanced file comparison logic, addressing edge cases like mismatched characters and null values. These routines ensure that filenames are compared accurately, even when one contains a wildcard or null character. This level of detail reflects the constraints of early PCs, where memory and processing power were limited, and every byte counted. The logic likely drew inspiration from Unix file handling, which influenced many aspects of MS-DOS v2.0. By handling edge cases robustly, these routines contributed to the reliability of DOS file operations, a key factor in the operating system's success. The techniques here laid the groundwork for more sophisticated file comparison algorithms in later systems."

---

```asm
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



```