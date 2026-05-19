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
description: "This file contains MS-DOS v2.0's internal directory manipulation routines, showcasing the evolution of operating system design in the early 1980s."

summary:
  - point: "Introduces subdirectory support in MS-DOS v2.0"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Inspired by Unix/XENIX for hierarchical file systems"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Optimized for IBM PC hardware constraints"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "name-dircall-definition"
    line_start: 3
    line_end: 15
    title: "Defining the DIRCALL module"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The DIRCALL module is defined here, setting the stage for directory manipulation routines in MS-DOS v2.0. This version marked a significant departure from the flat file system of earlier DOS versions, introducing hierarchical directories inspired by Unix. At the time, IBM PCs were becoming the standard for personal computing, and MS-DOS needed to support more complex file organization to cater to business users. Tim Paterson, originally the creator of 86-DOS, was now working under Microsoft to adapt and expand the system. This foundational setup reflects the transition from simple, single-tasking systems to more sophisticated operating environments."
  - id: "include-dosseg-symbols"
    line_start: 17
    line_end: 27
    title: "Including DOSSEG and DOSSYM"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section includes DOSSEG and DOSSYM, which provide segment definitions and symbolic constants for MS-DOS. These inclusions were critical for maintaining modularity and readability in assembly language, a necessity given the constraints of 8086 processors and the limited memory available on IBM PCs. By organizing common definitions into separate files, developers could focus on the logic of individual modules without duplicating boilerplate code. This approach was part of the broader trend in software engineering toward modularity and reuse, which was particularly important in the resource-constrained environment of early personal computers."
  - id: "kanji-support-check"
    line_start: 39
    line_end: 41
    title: "Checking for Kanji support"
    wikipedia_url: "https://en.wikipedia.org/wiki/Kanji"
    image_url: ""
    image_caption: ""
    content: "This conditional block checks for Kanji support, reflecting Microsoft's efforts to adapt MS-DOS for international markets, particularly Japan. Kanji, the logographic characters used in Japanese writing, posed unique challenges for computing systems designed primarily for English. Supporting Kanji required handling multi-byte character encoding, which was more complex than the single-byte ASCII standard. By including this check, MS-DOS v2.0 demonstrated Microsoft's early recognition of the importance of global compatibility, a strategy that would later contribute to the widespread adoption of its software."
  - id: "mkdir-subroutine"
    line_start: 277
    line_end: 277
    title: "Creating directories with $MKDIR"
    wikipedia_url: "https://en.wikipedia.org/wiki/Directory_(computing)"
    image_url: ""
    image_caption: ""
    content: "The $MKDIR subroutine enables the creation of new directories, a feature introduced in MS-DOS v2.0 to support hierarchical file systems. This functionality was inspired by Unix, which had long used directories to organize files. Implementing $MKDIR required careful consideration of hardware constraints, such as the limited memory and storage capacity of early IBM PCs. The routine validates the path, checks for errors, and initializes directory entries, including the special '.' and '..' entries for self-reference and parent directories. This innovation allowed users to manage complex file structures, laying the groundwork for modern operating systems."
  - id: "chdir-subroutine"
    line_start: 791
    line_end: 791
    title: "Changing directories with $CHDIR"
    wikipedia_url: "https://en.wikipedia.org/wiki/Chdir"
    image_url: ""
    image_caption: ""
    content: "The $CHDIR subroutine allows users to change the current working directory, a fundamental operation in hierarchical file systems. This routine updates internal pointers and validates paths, ensuring that the requested directory exists and is accessible. The ability to change directories was a key feature that distinguished MS-DOS v2.0 from earlier versions, aligning it more closely with Unix-like systems. For users, $CHDIR simplified navigation and file management, making MS-DOS more practical for business applications and complex workflows. This feature became a staple of command-line interfaces and persists in modern operating systems."
  - id: "rmdir-subroutine"
    line_start: 1001
    line_end: 1014
    title: "Removing directories with $RMDIR"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rmdir"
    image_url: ""
    image_caption: ""
    content: "The $RMDIR subroutine enables the removal of empty directories, completing the suite of directory manipulation commands in MS-DOS v2.0. This routine checks for errors such as non-empty directories, malformed entries, or attempts to delete the root directory. The implementation reflects the careful balance between functionality and the limitations of the IBM PC hardware. $RMDIR was part of the broader effort to make MS-DOS a versatile and user-friendly operating system, capable of supporting the growing complexity of personal and business computing. Its design principles influenced subsequent operating systems, including Windows."

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