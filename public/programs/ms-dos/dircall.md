---
title: "DIRCALL.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/DIRCALL.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/DIRCALL.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "dircall"
order: 29
description: "This file contains the internal directory manipulation routines for MS-DOS 2.0, showcasing the evolution of file system operations in early personal computing."

summary:
  - point: "Introduces subdirectory support inspired by Unix/XENIX."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Implements low-level directory creation, deletion, and navigation routines."
    link: "https://en.wikipedia.org/wiki/File_system"
    link_label: "File system"
  - point: "Optimized for 8086 assembly, reflecting constraints of early IBM PCs."
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"
  - point: "Includes workarounds for hardware limitations, such as buffer management."
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Demonstrates early attempts to standardize directory operations across systems."
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"

enhancements:
  - id: "name-dircall-initialization"
    line_start: 3
    line_end: 15
    title: "Defining the module: DIRCALL"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The file begins by defining the module name 'DIRCALL,' signaling its purpose as a hub for directory manipulation routines. In 1983, MS-DOS 2.0 introduced major enhancements to the file system, including support for hierarchical directories inspired by Unix. This section sets the stage for implementing these features, reflecting Microsoft's push to make MS-DOS competitive with Unix-like systems. The inclusion of comments referencing $MKDIR, $CHDIR, and $RMDIR hints at the modular design, allowing developers to extend or modify directory operations. This foundational setup underscores the shift from flat file systems in MS-DOS 1.x to a more sophisticated structure, paving the way for modern file system hierarchies."
  - id: "include-dosseg-dossym-devsym"
    line_start: 17
    line_end: 83
    title: "Including essential assembly definitions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "This section includes critical assembly definitions from DOSSEG.ASM, DOSSYM.ASM, and DEVSYM.ASM. These files provide symbolic constants, segment definitions, and device-related macros, enabling the code to interact seamlessly with the MS-DOS kernel and hardware. In the early 1980s, assembly language was the lingua franca for system programming, especially on resource-constrained platforms like the IBM PC. By modularizing these definitions, Microsoft ensured consistency across the operating system's components while simplifying updates and debugging. The references to Kanji support reflect the global ambitions of MS-DOS, aiming to accommodate non-Latin character sets for international markets."
  - id: "nodeexistsj-directory-check"
    line_start: 89
    line_end: 207
    title: "Checking for existing directory nodes"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The NODEEXISTSJ routine checks whether a directory node already exists, a critical step in directory creation. This logic prevents overwriting existing directories and ensures the integrity of the file system. In 1983, MS-DOS 2.0's support for subdirectories marked a significant leap forward, allowing users to organize files hierarchically. The routine's reliance on buffer management and direct memory access reflects the constraints of the IBM PC's hardware, where every byte of memory was precious. The implementation borrows concepts from Unix, such as the idea of nodes, showcasing Microsoft's efforts to blend simplicity with power in their operating system design."
  - id: "zapent-clear-directory-entry"
    line_start: 209
    line_end: 221
    title: "Clearing directory entries: ZAPENT"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The ZAPENT routine clears a directory entry by zeroing out its contents. This operation is essential for deleting directories or files, ensuring that the space can be reused. In the early 1980s, storage was limited, and efficient management of disk space was paramount. The routine's direct manipulation of memory and disk sectors reflects the low-level nature of MS-DOS, where programmers had to manage hardware interactions manually. This approach, while powerful, required meticulous attention to detail to avoid corruption. The routine exemplifies the trade-offs of early system programming: achieving performance and functionality within tight constraints."
  - id: "mkdir-create-directory"
    line_start: 277
    line_end: 277
    title: "Creating directories with $MKDIR"
    wikipedia_url: "https://en.wikipedia.org/wiki/Directory_(computing)"
    image_url: ""
    image_caption: ""
    content: "The $MKDIR routine implements directory creation, a cornerstone feature of MS-DOS 2.0. This functionality allowed users to organize files hierarchically, a departure from the flat file system of earlier versions. Inspired by Unix, the routine validates the path, allocates space, and sets up directory entries for '.' and '..'. These entries enable navigation within the hierarchy, mirroring Unix conventions. The implementation reflects the challenges of adapting Unix-like features to the IBM PC's limited hardware, requiring careful optimization. This routine laid the groundwork for modern file system operations, influencing subsequent operating systems and shaping user expectations."
  - id: "chdir-change-directory"
    line_start: 283
    line_end: 791
    title: "Navigating the hierarchy: $CHDIR"
    wikipedia_url: "https://en.wikipedia.org/wiki/Working_directory"
    image_url: ""
    image_caption: ""
    content: "The $CHDIR routine changes the current working directory, enabling users to navigate the hierarchical file system introduced in MS-DOS 2.0. This functionality was inspired by Unix, where the concept of a working directory simplifies file operations by providing a relative context. The routine validates the path, updates the directory pointer, and handles edge cases like root directories and drive specifications. Implementing this feature on the IBM PC required overcoming hardware limitations, such as the lack of native support for hierarchical storage. The routine's design reflects Microsoft's commitment to bringing Unix-like capabilities to a broader audience, making personal computing more accessible and powerful."
  - id: "rmdir-remove-directory"
    line_start: 797
    line_end: 991
    title: "Deleting directories with $RMDIR"
    wikipedia_url: "https://en.wikipedia.org/wiki/Directory_(computing)"
    image_url: ""
    image_caption: ""
    content: "The $RMDIR routine deletes directories, ensuring they are empty and properly formatted before removal. This operation is more complex than file deletion, as it involves checking for subdirectories, validating entries like '.' and '..', and handling edge cases such as root directories. In MS-DOS 2.0, this functionality was a significant enhancement, enabling users to manage their file systems more effectively. The routine's reliance on direct memory access and buffer manipulation highlights the low-level nature of early operating systems. By implementing this feature, Microsoft brought Unix-inspired capabilities to the IBM PC, advancing the state of personal computing and setting the stage for future innovations."
  - id: "directory-removal-routine"
    line_start: 1001
    line_end: 1014
    title: "Removing Directories in MS-DOS 2.0"
    wikipedia_url: "https://en.wikipedia.org/wiki/Hierarchical_file_system"
    image_url: ""
    image_caption: ""
    content: "The $RMDIR routine marks the conclusion of MS-DOS 2.0's directory management code. Its purpose is straightforward: handle the removal of directories from the hierarchical file system introduced in this version. This was a significant leap from the flat file system of MS-DOS 1.x, enabling users to organize files in nested directories—a concept borrowed from Unix. In 1983, when MS-DOS 2.0 was released, personal computing was transitioning from hobbyist systems to mainstream business tools. IBM's PC had set the standard, and MS-DOS was its operating system. The addition of subdirectories mirrored Unix's design, reflecting Microsoft's ambition to make MS-DOS a more robust and versatile system. Tim Paterson's original 86-DOS lacked such features, as it was designed for simplicity and speed. The rewrite for MS-DOS 2.0, influenced by Unix and XENIX, required careful thought to balance functionality with the constraints of early PC hardware—machines with limited memory and storage. The $RMDIR routine encapsulates this balance. It ensures directories can be removed cleanly, a necessity for maintaining the integrity of the file system. The code here is terse, reflecting the assembly language's efficiency and the need to conserve every byte of memory. While this routine is a small piece of the puzzle, it represents the broader shift in MS-DOS 2.0 toward a more structured and capable operating system. This approach to directory management became foundational for later versions of MS-DOS and influenced other operating systems. The hierarchical file system is now ubiquitous, a testament to the enduring impact of decisions made in these early days of personal computing."

---

TITLE DIRCALL - Directory manipulation internal calls

NAME  DIRCALL



; $MKDIR

; $CHDIR

; $RMDIR



.xlist

INCLUDE DOSSEG.ASM



CODE    SEGMENT BYTE PUBLIC  'CODE'

        ASSUME  SS:DOSGROUP,CS:DOSGROUP



.xcref

INCLUDE DOSSYM.ASM

INCLUDE DEVSYM.ASM

.cref

.list



ifndef  Kanji

Kanji   equ 0

endif



        i_need  AUXSTACK,BYTE

        i_need  NoSetDir,BYTE

        i_need  CURBUF, DWORD

        i_need  DIRSTART,WORD

        i_need  THISDPB,DWORD

        i_need  NAME1,BYTE

        i_need  LASTENT,WORD

        i_need  ATTRIB,BYTE

        i_need  THISFCB,DWORD

        i_need  AUXSTACK,BYTE

        i_need  CREATING,BYTE

        i_need  DRIVESPEC,BYTE

        i_need  ROOTSTART,BYTE

        i_need  SWITCH_CHARACTER,BYTE



        extrn   sys_ret_ok:near,sys_ret_err:near





; XENIX CALLS

BREAK <$MkDir - Make a directory entry>

MKNERRJ: JMP    MKNERR

NODEEXISTSJ: JMP NODEEXISTS

        procedure   $MKDIR,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DS:DX Points to asciz name

; Function:

;       Make a new directory

; Returns:

;       STD XENIX Return

;       AX = mkdir_path_not_found if path bad

;       AX = mkdir_access_denied  If

;               Directory cannot be created

;               Node already exists

;               Device name given

;               Disk or directory(root) full

        invoke  validate_path

        JC      MKNERRJ

        MOV     SI,DX

        MOV     WORD PTR [THISFCB+2],SS

        MOV     WORD PTR [THISFCB],OFFSET DOSGROUP:AUXSTACK-40  ; Scratch space

        MOV     AL,attr_directory

        MOV     WORD PTR [CREATING],0E500h

        invoke  MAKENODE

ASSUME  DS:DOSGROUP

        MOV     AL,mkdir_path_not_found

        JC      MKNERRJ

        JNZ     NODEEXISTSJ

        LDS     DI,[CURBUF]

ASSUME  DS:NOTHING

        SUB     SI,DI

        PUSH    SI              ; Pointer to fcb_FIRCLUS

        PUSH    [DI.BUFSECNO]   ; Sector of new node

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        PUSH    [DIRSTART]      ; Parent for .. entry

        XOR     AX,AX

        MOV     [DIRSTART],AX   ; Null directory

        invoke  NEWDIR

        JC      NODEEXISTSPOPDEL    ; No room

        invoke  GETENT          ; First entry

        LES     DI,[CURBUF]

        MOV     ES:[DI.BUFDIRTY],1

        ADD     DI,BUFINSIZ     ; Point at buffer

        MOV     AX,202EH        ; ". "

        STOSW

        MOV     DX,[DIRSTART]   ; Point at itself

        invoke  SETDOTENT

        MOV     AX,2E2EH        ; ".."

        STOSW

        POP     DX              ; Parent

        invoke  SETDOTENT

        LES     BP,[THISDPB]

        POP     DX              ; Entry sector

        XOR     AL,AL           ; Pre read

        invoke  GETBUFFR

        MOV     DX,[DIRSTART]

        LDS     DI,[CURBUF]

ASSUME  DS:NOTHING

ZAPENT:

        POP     SI              ; fcb_Firclus pointer

        ADD     SI,DI

        MOV     [SI],DX

        XOR     DX,DX

        MOV     [SI+2],DX

        MOV     [SI+4],DX

DIRUP:

        MOV     [DI.BUFDIRTY],1

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        MOV     AL,ES:[BP.dpb_drive]

        invoke  FLUSHBUF

SYS_RET_OKJ:

        JMP     SYS_RET_OK



NODEEXISTSPOPDEL:

        POP     DX              ; Parent

        POP     DX              ; Entry sector

        LES     BP,[THISDPB]

        XOR     AL,AL           ; Pre read

        invoke  GETBUFFR

        LDS     DI,[CURBUF]

ASSUME  DS:NOTHING

        POP     SI              ; dir_first pointer

        ADD     SI,DI

        SUB     SI,dir_first    ; Point back to start of dir entry

        MOV     BYTE PTR [SI],0E5H    ; Free the entry

        CALL    DIRUP

NODEEXISTS:

        MOV     AL,mkdir_access_denied

MKNERR:

        JMP     SYS_RET_ERR

$MKDIR  ENDP



BREAK <$ChDir -- Change current directory on a drive>

        procedure   $CHDIR,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DS:DX Points to asciz name

; Function:

;       Change current directory

; Returns:

;       STD XENIX Return

;       AX = chdir_path_not_found if error



        invoke  validate_path

        JC      PathTooLong



        PUSH    DS

        PUSH    DX

        MOV     SI,DX

        invoke  GETPATH

        JC      PATHNOGOOD

        JNZ     PATHNOGOOD

ASSUME  DS:DOSGROUP

        MOV     AX,[DIRSTART]

        MOV     BX,AX

        XCHG    BX,ES:[BP.dpb_current_dir]

        OR      AX,AX

        POP     SI

        POP     DS

ASSUME  DS:NOTHING

        JZ      SYS_RET_OKJ

        MOV     DI,BP

        ADD     DI,dpb_dir_text

        MOV     DX,DI

        CMP     [DRIVESPEC],0

        JZ      NODRIVESPEC

        INC     SI

        INC     SI

NODRIVESPEC:

        MOV     CX,SI

        CMP     [ROOTSTART],0

        JZ      NOTROOTPATH

        INC     SI

        INC     CX

        JMP     SHORT COPYTHESTRINGBXZ

NOTROOTPATH:

        OR      BX,BX           ; Previous path root?

        JZ      COPYTHESTRING   ; Yes

        XOR     BX,BX

ENDLOOP:

        CMP     BYTE PTR ES:[DI],0

        JZ      PATHEND

        INC     DI

        INC     BX

        JMP     SHORT ENDLOOP

PATHEND:

        MOV     AL,'/'

        CMP     AL,[switch_character]

        JNZ     SLASHOK

        MOV     AL,'\'                  ; Use the alternate character

SLASHOK:

        STOSB

        INC     BX

        JMP     SHORT CHECK_LEN



PATHNOGOOD:

        POP     AX

        POP     AX

PATHTOOLONG:

        error   error_path_not_found



ASSUME  DS:NOTHING



INCBXCHK:

        INC     BX

BXCHK:

        CMP     BX,DIRSTRLEN

        return



COPYTHESTRINGBXZ:

        XOR     BX,BX

COPYTHESTRING:

        LODSB

        OR      AL,AL



        JNZ     FOOB

        JMP     CPSTDONE

FOOB:

        CMP     AL,'.'

        JZ      SEEDOT

        CALL    COPYELEM

CHECK_LEN:

        CMP     BX,DIRSTRLEN

        JB      COPYTHESTRING

        MOV     AL,ES:[DI-1]

        invoke  PATHCHRCMP

        JNZ     OK_DI

        DEC     DI

OK_DI:

        XOR     AL,AL

        STOSB                   ; Correctly terminate the path

        MOV     ES:[BP.dpb_current_dir],-1      ; Force re-validation

        JMP     SHORT PATHTOOLONG



SEEDOT:

        LODSB

        OR      AL,AL           ; Check for null

        JZ      CPSTDONEDEC

        CMP     AL,'.'

        JNZ     COPYTHESTRING   ; eat ./

        CALL    DELELMES        ; have   ..

        LODSB                   ; eat the /

        OR      AL,AL           ; Check for null

        JZ      CPSTDONEDEC

        JMP     SHORT COPYTHESTRING



; Copy one element from DS:SI to ES:DI include trailing / not trailing null

; LODSB has already been done

COPYELEM:

        PUSH    DI                      ; Save in case too long

        PUSH    CX

        MOV     CX,800h                 ; length of filename

        MOV     AH,'.'                  ; char to stop on

        CALL    CopyPiece               ; go for it!

        CALL    BXCHK                   ; did we go over?

        JAE     POPCXDI                 ; yep, go home

        CMP     AH,AL                   ; did we stop on .?

        JZ      CopyExt                 ; yes, go copy ext

        OR      AL,AL                   ; did we end on nul?

        JZ      DECSIRet                ; yes, bye

CopyPathEnd:

        STOSB                           ; save the path char

        CALL    INCBXCHK                ; was there room for it?

        JAE     POPCXDI                 ; Nope

        INC     SI                      ; guard against following dec

DECSIRET:

        DEC     SI                      ; point back at null

        POP     CX

        POP     AX                      ; toss away saved DI

        return

POPCXDI:

        POP     CX                      ; restore

        POP     DI                      ; point back...

        return

CopyExt:

        STOSB                           ; save the dot

        CALL    INCBXCHK                ; room?

        JAE     POPCXDI                 ; nope.

        LODSB                           ; get next char

        XOR     AH,AH                   ; NUL here

        MOV     CX,300h                 ; at most 3 chars

        CALL    CopyPiece               ; go copy it

        CALL    BXCHK                   ; did we go over

        JAE     POPCXDI                 ; yep

        OR      AL,AL                   ; sucessful end?

        JZ      DECSIRET                ; yes

        JMP     CopyPathEnd             ; go stash path char



DELELMES:

; Delete one path element from ES:DI

        DEC     DI                      ; the '/'

        DEC     BX



        IF      KANJI

        PUSH    AX

        PUSH    CX

        PUSH    DI

        PUSH    DX

        MOV     CX,DI

        MOV     DI,DX

DELLOOP:

        CMP     DI,CX

        JZ      GOTDELE

        MOV     AL,ES:[DI]

        INC     DI

        invoke  TESTKANJ

        JZ      NOTKANJ11

        INC     DI

        JMP     DELLOOP



NOTKANJ11:

        invoke  PATHCHRCMP

        JNZ     DELLOOP

        MOV     DX,DI                   ; Point to char after '/'

        JMP     DELLOOP



GOTDELE:

        MOV     DI,DX

        POP     DX

        POP     AX                      ; Initial DI

        SUB     AX,DI                   ; Distance moved

        SUB     BX,AX                   ; Set correct BX

        POP     CX

        POP     AX

        return

        ELSE

DELLOOP:

        CMP     DI,DX

        retz

        PUSH    AX

        MOV     AL,ES:[DI-1]

        invoke  PATHCHRCMP

        POP     AX

        retz

        DEC     DI

        DEC     BX

        JMP     SHORT DELLOOP

        ENDIF



CPSTDONEDEC:

        DEC     DI                      ; Back up over trailing /

CPSTDONE:

        STOSB                           ; The NUL

        JMP     SYS_RET_OK



; copy a piece CH chars max until the char in AH (or path or NUL)

CopyPiece:

        STOSB                           ; store the character

        INC     CL                      ; moved a byte

        CALL    INCBXCHK                ; room enough?

        JAE     CopyPieceRet            ; no, pop CX and DI

        OR      AL,AL                   ; end of string?

        JZ      CopyPieceRet            ; yes, dec si and return



        IF KANJI

        CALL    TestKanj                ; was it kanji?

        JZ      NotKanj                 ; nope

        MOVSB                           ; move the next byte

        CALL    INCBXCHK                ; room for it?

        JAE     CopyPieceRet            ; nope

        INC     CL                      ; moved a byte

NotKanj:

        ENDIF



        CMP     CL,CH                   ; move too many?

        JBE     CopyPieceNext           ; nope



        IF KANJI

        CALL    TestKanj                ; was the last byte kanji

        JZ      NotKanj2                ; no only single byte backup

        DEC     DI                      ; back up a char

        DEC     BX

NotKanj2:

        ENDIF



        DEC     DI                      ; back up a char

        DEC     BX

CopyPieceNext:

        LODSB                           ; get next character

        invoke  PathChrCmp              ; end of road?

        JZ      CopyPieceRet            ; yep, return and don't dec SI

        CMP     AL,AH                   ; end of filename?

        JNZ     CopyPiece               ; go do name

CopyPieceRet:

        return                          ; bye!



$CHDIR  ENDP



BREAK <$RmDir -- Remove a directory>

NOPATHJ: JMP    NOPATH



        procedure   $RMDIR,NEAR         ; System call 47

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DS:DX Points to asciz name

; Function:

;       Delete directory if empty

; Returns:

;       STD XENIX Return

;       AX = rmdir_path_not_found If path bad

;       AX = rmdir_access_denied If

;               Directory not empty

;               Path not directory

;               Root directory specified

;               Directory malformed (. and .. not first two entries)

;       AX = rmdir_current_directory



        invoke  Validate_path

        JC      NoPathJ

        MOV     SI,DX

        invoke  GETPATH

        JC      NOPATHJ

ASSUME  DS:DOSGROUP

        JNZ     NOTDIRPATH

        MOV     DI,[DIRSTART]

        OR      DI,DI

        JZ      NOTDIRPATH

        MOV     CX,ES:[BP.dpb_current_dir]

        CMP     CX,-1

        JNZ     rmdir_current_dir_check

        invoke  GetCurrDir

        invoke  Get_user_stack

        MOV     DX,[SI.user_DX]

        MOV     DS,[SI.user_DS]

        JMP     $RMDIR



NOTDIRPATHPOP:

        POP     AX

        POP     AX

NOTDIRPATH:

        error   error_access_denied



rmdir_current_dir_check:

        CMP     DI,CX

        JNZ     rmdir_get_buf

        error   error_current_directory



rmdir_get_buf:

        LDS     DI,[CURBUF]

ASSUME  DS:NOTHING

        SUB     BX,DI

        PUSH    BX                      ; Save entry pointer

        PUSH    [DI.BUFSECNO]           ; Save sector number

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        PUSH    SS

        POP     ES

        MOV     DI,OFFSET DOSGROUP:NAME1

        MOV     AL,'?'

        MOV     CX,11

        REP     STOSB

        XOR     AL,AL

        STOSB

        invoke  STARTSRCH

        invoke  GETENTRY

        MOV     DS,WORD PTR [CURBUF+2]

ASSUME  DS:NOTHING

        MOV     SI,BX

        LODSW

        CMP     AX,(' ' SHL 8) OR '.'

        JNZ     NOTDIRPATHPOP

        ADD     SI,32-2

        LODSW

        CMP     AX,('.' SHL 8) OR '.'

        JNZ     NOTDIRPATHPOP

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        MOV     [LASTENT],2             ; Skip . and ..

        invoke  GETENTRY

        MOV     [ATTRIB],attr_directory+attr_hidden+attr_system

        invoke  SRCH

        JNC     NOTDIRPATHPOP

        LES     BP,[THISDPB]

        MOV     BX,[DIRSTART]

        invoke  RELEASE

        POP     DX

        XOR     AL,AL

        invoke  GETBUFFR

        LDS     DI,[CURBUF]

ASSUME  DS:NOTHING

        POP     BX

        ADD     BX,DI

        MOV     BYTE PTR [BX],0E5H      ; Free the entry

        JMP     DIRUP



NOPATH:

        error   error_path_not_found



$RMDIR  ENDP



        do_ext



CODE    ENDS

        END

                                                                                
                            