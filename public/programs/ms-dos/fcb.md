---
title: "FCB.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/FCB.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/FCB.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "fcb"
order: 32
description: "This file implements File Control Block (FCB) management routines for MS-DOS 2.0, a critical part of its file handling system."

summary:
  - point: "Introduced Unix-inspired file handling in MS-DOS 2.0"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "FCBs were a legacy design from CP/M, later replaced by file handles"
    link: "https://en.wikipedia.org/wiki/CP/M"
    link_label: "CP/M"
  - point: "Contains clever hacks for parsing file names and extensions"
    link: "https://en.wikipedia.org/wiki/File_Control_Block"
    link_label: "File Control Block"

enhancements:
  - id: "makefcb-file-name-parsing"
    line_start: 167
    line_end: 223
    title: "The Bug That Scanned Forever"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Control_Block"
    image_url: ""
    image_caption: ""
    content: "This section implements the `MakeFcb` procedure, which parses a file name and constructs a File Control Block (FCB). FCBs were a data structure inherited from CP/M, used to manage files in MS-DOS 1.x and 2.x. The routine includes logic for handling default drive letters, file name padding, and extensions, as well as scanning off delimiters like colons and dots. Notably, a comment at line 110 reveals a critical bug: if the file name exceeds the expected length (`CX`), the routine continues reading indefinitely. This reflects the rushed development of MS-DOS, where deadlines often trumped thorough testing. In 1983, MS-DOS 2.0 was a major rewrite influenced by Unix, introducing hierarchical directories and file handles. However, FCBs remained for backward compatibility with older software. Tim Paterson, the original author of 86-DOS (the precursor to MS-DOS), likely adapted this approach from CP/M's file system. This bug and the reliance on FCBs highlight the transitional nature of MS-DOS 2.0. While later versions of MS-DOS moved to file handles, the legacy of FCBs persisted in older applications. Developers studying this code learned the importance of robust input validation, especially in file systems. The bug likely inspired stricter bounds-checking in later operating systems, such as Windows and OS/2."
  - id: "nametrans-path-element-scanning"
    line_start: 167
    line_end: 222
    title: "Spaces in Pathnames: A Controversial Decision"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `NameTrans` procedure scans and extracts elements of a file path, allowing spaces in pathnames—a feature uncommon in early operating systems like CP/M. This decision reflects MS-DOS 2.0's attempt to modernize file handling, inspired by Unix's more flexible path conventions. The routine initializes the `SpaceFlag` to permit spaces, then processes path elements while handling delimiters like dots and slashes. In 1983, MS-DOS was competing with Unix-based systems like XENIX, which Microsoft licensed and sold. Unix's hierarchical file system and flexible naming conventions were seen as superior to CP/M's flat structure. By adopting similar features, MS-DOS aimed to appeal to developers transitioning from Unix environments. This routine influenced later operating systems, including Windows, which continued to support spaces in file names. However, it also introduced complexities, such as the need for quoting or escaping spaces in command-line operations. The decision to allow spaces shaped the evolution of file systems, making them more user-friendly but also more prone to errors in scripts and automation."
  - id: "buildfcb-device-io"
    line_start: 223
    line_end: 253
    title: "Building FCBs for Devices: A Legacy Hack"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Control_Block"
    image_url: ""
    image_caption: ""
    content: "The `BuildFCB` procedure creates a blank FCB for I/O operations with devices. It initializes the FCB structure with zeros and sets up fields like the extent and device number. This reflects MS-DOS's reliance on FCBs for both file and device management, a design inherited from CP/M. In the early 1980s, hardware constraints shaped software design. Devices like printers and serial ports were often treated as files, simplifying the operating system's architecture. However, this approach became a limitation as hardware evolved. MS-DOS 2.0 attempted to modernize by introducing file handles, but FCBs remained for backward compatibility. This routine demonstrates the transitional nature of MS-DOS 2.0, bridging the gap between CP/M's legacy and modern file systems. It influenced the design of later systems like OS/2 and early versions of Windows, which moved away from FCBs entirely. Developers studying this code learned the importance of abstraction layers, separating file and device management to accommodate future hardware advancements."
  - id: "fcb-move-name-validation"
    line_start: 254
    line_end: 417
    title: "Uppercase Everything: File Name Validation"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `FCB_move` procedure examines and validates file names, converting them to uppercase and copying them into the `NAME1` field. It also checks for extended FCBs, attributes, and drive selectors. This routine ensures compatibility with MS-DOS's case-insensitive file system. Case-insensitivity was a design choice inherited from CP/M, where file names were stored in uppercase to simplify comparisons. In the early 1980s, this approach reduced computational overhead on hardware with limited processing power. MS-DOS 2.0 retained this convention for backward compatibility, even as it introduced Unix-inspired features like subdirectories. This routine influenced the design of later file systems, including FAT and NTFS, which preserved case-insensitivity while allowing mixed-case storage. It also shaped user expectations, making case-insensitive file handling a standard feature in consumer operating systems. Developers learned the trade-offs of simplifying file systems for performance, a lesson that continues to inform modern software design."
  - id: "getlet-character-conversion"
    line_start: 418
    line_end: 475
    title: "The Character Conversion Shortcut"
    wikipedia_url: "https://en.wikipedia.org/wiki/ASCII"
    image_url: ""
    image_caption: ""
    content: "The `GetLet` procedure retrieves a character from memory, converts it to uppercase if it's a lowercase letter, and checks if it's a delimiter. This routine uses a simple subtraction operation (`SUB AL,20H`) to convert ASCII lowercase letters to uppercase, exploiting the structure of the ASCII table. In the 1980s, assembly programmers often relied on such tricks to optimize performance on limited hardware. The subtraction operation is faster than conditional branching, making it ideal for real-time systems like MS-DOS. Tim Paterson, the original author of 86-DOS, was known for his efficiency-focused coding style, which carried over into MS-DOS. This technique became a standard practice in low-level programming, influencing the design of text-processing libraries in languages like C and C++. It also highlights the ingenuity required to work within the constraints of early PCs, where every CPU cycle mattered. Modern developers studying this code gain insight into the art of optimization and the enduring influence of ASCII-based design."

---

```asm
;
; FCB management routines for MSDOS
;

INCLUDE DOSSEG.ASM

IFNDEF  KANJI
KANJI   EQU     0       ;FALSE
ENDIF

CODE    SEGMENT BYTE PUBLIC  'CODE'
        ASSUME  SS:DOSGROUP,CS:DOSGROUP

.xlist
.xcref
INCLUDE DOSSYM.ASM
INCLUDE DEVSYM.ASM
.cref
.list

        i_need  Name1,BYTE
        i_need  NumIO,BYTE
        i_need  DevFCB,BYTE
        i_need  Creating,BYTE
        i_need  ExtFCB,BYTE
        i_need  Attrib,BYTE
        i_need  SpaceFlag,BYTE
        i_need  Current_Country,WORD

        procedure   MakeFcb,NEAR
DRVBIT  EQU     2
NAMBIT  EQU     4
EXTBIT  EQU     8
        MOV     BYTE PTR [SpaceFlag],0
        XOR     DL,DL           ; Flag--not ambiguous file name
        TEST    AL,DRVBIT       ; Use current drive field if default?
        JNZ     DEFDRV
        MOV     BYTE PTR ES:[DI],0      ; No - use default drive
DEFDRV:
        INC     DI
        MOV     CX,8
        TEST    AL,NAMBIT       ; Use current name fields as defualt?
        XCHG    AX,BX           ; Save bits in BX
        MOV     AL," "
        JZ      FILLB           ; If not, go fill with blanks
        ADD     DI,CX
        XOR     CX,CX           ; Don't fill any
FILLB:
        REP     STOSB
        MOV     CL,3
        TEST    BL,EXTBIT       ; Use current extension as default
        JZ      FILLB2
        ADD     DI,CX
        XOR     CX,CX
FILLB2:
        REP     STOSB
        XCHG    AX,CX           ; Put zero in AX
        STOSW
        STOSW                   ; Initialize two words after to zero
        SUB     DI,16           ; Point back at start
        TEST    BL,1            ; Scan off separators if not zero
        JZ      SKPSPC
        CALL    SCANB           ; Peel off blanks and tabs
        CALL    DELIM           ; Is it a one-time-only delimiter?
        JNZ     NOSCAN
        INC     SI              ; Skip over the delimiter
SKPSPC:
        CALL    SCANB           ; Always kill preceding blanks and tabs
NOSCAN:
        CALL    GETLET
        JBE     NODRV           ; Quit if termination character
        CMP     BYTE PTR[SI],":"        ; Check for potential drive specifier
        JNZ     NODRV
        INC     SI              ; Skip over colon
        SUB     AL,"@"          ; Convert drive letter to binary drive number
        JBE     BADDRV          ; Valid drive numbers are <= NUMIO
        CMP     AL,BYTE PTR [NUMIO]
        JBE     HAVDRV
BADDRV:
        MOV     DL,-1
HAVDRV:
        STOSB           ; Put drive specifier in first byte
        INC     SI
        DEC     DI      ; Counteract next two instructions
NODRV:
        DEC     SI      ; Back up
        INC     DI      ; Skip drive byte
NORMSCAN:
        MOV     CX,8
        CALL    GETWORD         ; Get 8-letter file name
        CMP     BYTE PTR [SI],"."
        JNZ     NODOT
        INC     SI              ; Skip over dot if present
        MOV     CX,3            ; Get 3-letter extension
        CALL    MUSTGETWORD
NODOT:
        MOV     AL,DL
        return

NONAM:
        ADD     DI,CX
        DEC     SI
        return

GETWORD:
        CALL    GETLET
        JBE     NONAM           ; Exit if invalid character
        DEC     SI
;
; UGH!!! Horrible bug here that should be fixed at some point:
; If the name we are scanning is longer than CX, we keep on reading!
;
MUSTGETWORD:
        CALL    GETLET
;
; If spaceFlag is set then we allow spaces in a pathname
;
        JB      FILLNAM
        JNZ     MustCheckCX
        TEST    BYTE PTR [SpaceFlag],0FFh
        JZ      FILLNAM
        CMP     AL," "
        JNZ     FILLNAM

MustCheckCX:
        JCXZ    MUSTGETWORD
        DEC     CX
        CMP     AL,"*"                  ; Check for ambiguous file specifier
        JNZ     NOSTAR
        MOV     AL,"?"
        REP     STOSB
NOSTAR:
        STOSB

        IF      KANJI
        CALL    TESTKANJ
        JZ      NOTDUAL3
        JCXZ    BNDERR                  ; Attempt to straddle boundry
        MOVSB                           ; Transfer second byte
        DEC     CX
        JMP     SHORT NOTDUAL3
BNDERR:
        MOV     BYTE PTR ES:[DI-1]," "  ; patch up that space
        JMP     MustGetWord             ; go back and scan until delim

NOTDUAL3:
        ENDIF

        CMP     AL,"?"
        JNZ     MUSTGETWORD
        OR      DL,1                    ; Flag ambiguous file name
        JMP     MUSTGETWORD
FILLNAM:
        MOV     AL," "
        REP     STOSB
        DEC     SI
        return

SCANB:
        LODSB
        CALL    SPCHK
        JZ      SCANB
        DEC     SI
        return
MakeFCB ENDP

;
; NameTrans is used by FindPath to scan off an element
; of a path.  We must allow spaces in pathnames
; Inputs:   SS - DOSGROUP
;           DS:SI name
; Outputs:  DS:SI advanced over spot
;           ES:DI point to after Name1
; registers modified: AX, BX, CX, DX
procedure   NameTrans,near
        MOV     BYTE PTR [SpaceFlag],1
        PUSH    SS
        POP     ES
        MOV     DI,OFFSET DOSGROUP:NAME1
        PUSH    DI
        MOV     AL,' '
        MOV     CX,11
        REP     STOSB
        XOR     AL,AL
        MOV     DL,AL
        STOSB
        POP     DI
        CMP     BYTE PTR [SI],'.'

        IF      KANJI
        JZ      FOOBAR
        CALL    NORMSCAN
        CMP     [NAME1],0E5H
        retnz
        MOV     [NAME1],5
        return
FOOBAR:
        ELSE
        JNZ     NORMSCAN
        ENDIF

        MOVSB
        LODSB
        CALL    PATHCHRCMP
        JZ      GOTDOTNAME
        OR      AL,AL
        JZ      GOTDOTNAME
        CMP     AL,'.'
        JNZ     BADDOTS
        STOSB
        LODSB
        CALL    PATHCHRCMP
        JZ      GOTDOTNAME
        OR      AL,AL
        JZ      GOTDOTNAME
        DEC     SI
BADDOTS:
        DEC     SI
GOTDOTNAME:
        DEC     SI
        XOR     AL,AL
        return
nametrans   ENDP

SUBTTL BUILDFCB -- MAKE A BLANK FCB FOR A DEVICE
PAGE
        procedure BuildFCB,near
ASSUME  DS:DOSGROUP,ES:DOSGROUP

; Function:
;       Build a blank FCB for I/O to a device
; Outputs:
;       Same as GETNAME

        MOV     AX,"  "
        MOV     DI,OFFSET DOSGROUP:DEVFCB+8     ; Point to extent field
        STOSW
        STOSB                   ; Blank out extent field
        XOR     AX,AX
        MOV     CX,10
        REP     STOSW           ; Fill FCB with zeros
        STOSB
        invoke  DATE16
        MOV     DI,OFFSET DOSGROUP:DEVFCB+22
        XCHG    AX,DX
        STOSW
        XCHG    AX,DX
        STOSW
        XCHG    AX,BX           ; But device number in AH
        MOV     BX,OFFSET DOSGROUP:DEVFCB
        MOV     SI,DI
        XOR     AL,AL           ; Set zero, clear carry
        return
BuildFCB    ENDP

SUBTTL MOVENAME, LODNAME -- EXAMINE FCB AND SETUP
PAGE
        procedure   FCB_move,NEAR

        entry   MOVNAMENOSET
        MOV     DI,1
        JMP     SHORT MOVSTART

        entry   MOVNAME
ASSUME  DS:NOTHING,ES:NOTHING

; Inputs:
;       DS, DX point to FCB or extended FCB
; Outputs:
;       DS:DX point to normal FCB
;       DS:SI point after end of NAME/EXT in FCB
;       ES = DOSGROUP
;       If file name OK:
;       [NAME1] has name in upper case
; All registers destroyed
; Carry set if bad file name or drive

        XOR     DI,DI
MOVSTART:
        MOV     WORD PTR [CREATING],0E500H   ; Not creating, not DEL *.*
        MOV     SI,DX
        LODSB
        MOV     [EXTFCB],AL     ; Set flag if extended FCB in use
        XOR     AH,AH           ; Set default attributes
        CMP     AL,-1           ; Is it an extended FCB?
        JNZ     HAVATTRB
        ADD     DX,7            ; Adjust to point to normal FCB
        ADD     SI,6
        MOV     AH,[SI-1]       ; Attribute byte
        LODSB                   ; Get drive select byte
HAVATTRB:
        invoke  GETTHISDRV
        retc
        PUSH    DS
        PUSH    DX
        PUSH    SI
        PUSH    AX
;
; DS:DX is pointer to good FCB
; DS:SI is same
;
; Move the file into Name1 and UCASE it
;
        PUSH    DI
        context ES
        MOV     DI,OFFSET DOSGROUP:NAME1
        CALL    LodName
        POP     DI
        JC      DrvNoSet

;
; are we setting current dir info?
;
        OR      DI,DI
        JNZ     DrvNoSet        ; do not set dir info

;
; check for device name first, eliminating drive hits on devices
;
        context DS
        invoke  DEVNAME
        JNC     DrvNoSet            ; we have a device

;
; make sure that everything is current
;
        invoke  FATREAD
        ASSUME  DS:NOTHING,ES:NOTHING
        MOV     BYTE PTR [ATTRIB],attr_directory+attr_hidden+attr_system
        invoke  GETCURRDIR
DrvNoSet:
        POP     AX
        MOV     BYTE PTR [ATTRIB],AH

        POP     SI
        POP     DX
        POP     DS
        context ES
        MOV     DI,OFFSET DOSGROUP:NAME1

        entry   LODNAME
; Inputs:   DS:SI point to an FCB
;           ES:DI point to an FCB
; Outputs:  DS:SI point to after FCB
;           ES:DI point to after FCB
;                 FCB from DS:SI copied and ucased to ES:DI
; Carry set if there was an error.
; Destroys AX,CX
        CMP     BYTE PTR [SI]," "       ; Don't allow blank as first letter
        STC                     ; In case of error
        retz

        IF      KANJI
        MOV     CX,8
        CMP     BYTE PTR [SI],0E5H
        JNZ     MOVCHK
        INC     SI
        MOV     AL,5
        STOSB
        MOVSB
        MOV     CX,6
MOVCHK:
        CALL    GETLET
        JB      RET6
        JNZ     STOLET          ; Is it a delimiter?
        CMP     AL," "          ; This is the only delimiter allowed
        STC                     ; In case of error
        JNZ     RET6
STOLET:
        STOSB
        CALL    TESTKANJ
        JZ      MOVLP           ;No
        LODSB                   ;Get second byte
        DEC     CX
        JZ      BOUNDERR        ;Attempt to cross boundry
        STOSB
MOVLP:
        LOOP    MOVCHK
        MOV     CX,3
MOVCHK2:
        CALL    GETLET
        JB      RET6
        JNZ     STOLET2         ; Is it a delimiter?
        CMP     AL," "          ; This is the only delimiter allowed
        STC                     ; In case of error
        retnz
STOLET2:
        STOSB
        CALL    TESTKANJ
        JZ      MOVLP2          ;No
        LODSB                   ;Get second byte
        DEC     CX
        JNZ     DOSTORE
BOUNDERR:                       ;Attempt to cross boundry
        STC
        return

DOSTORE:
        STOSB
MOVLP2:
        LOOP    MOVCHK2
        ELSE
        MOV     CX,11
MOVCHK:
        CALL    GETLET
        JB      RET6
        JNZ     STOLET          ; Is it a delimiter?
        CMP     AL," "          ; This is the only delimiter allowed
        STC                     ; In case of error
        retnz
STOLET:
        STOSB
        LOOP    MOVCHK
        ENDIF

        CLC                     ; Got through whole name - no error
RET6:   return
FCB_Move    ENDP

SUBTTL GETLET, DELIM -- CHECK CHARACTERS AND CONVERT
PAGE
        procedure   GetLet,NEAR
; Get a byte from [SI], convert it to upper case, and compare for delimiter.
; ZF set if a delimiter, CY set if a control character (other than TAB).
        LODSB

        CMP     AL,"a"
        JB      CHK1
        CMP     AL,"z"
        JA      CHK1
        SUB     AL,20H          ; Convert to upper case
CHK1:
        PUSH    SI
        MOV     SI,[Current_Country]
        ADD     SI,Map_call
        PUSH    CS              ; CS for long return
        CALL    WORD PTR CS:[SI]
        POP     SI
        entry   CHK
        CMP     AL,"."
        retz
        CMP     AL,'"'
        retz
        CALL    PATHCHRCMP
        retz
        CMP     AL,"["
        retz
        CMP     AL,"]"
        retz

DELIM:
        CMP     AL,":"          ; Allow ":" as separator in IBM version
        retz

        CMP     AL,"<"
        retz
        CMP     AL,"|"
        retz
        CMP     AL,">"
        retz

        CMP     AL,"+"
        retz
        CMP     AL,"="
        retz
        CMP     AL,";"
        retz
        CMP     AL,","
        retz
SPCHK:
        CMP     AL,9            ; Filter out tabs too
        retz
; WARNING! " " MUST be the last compare
        CMP     AL," "
        return
GetLet  ENDP

        procedure   PATHCHRCMP,NEAR
        CMP     AL,'/'
        retz
        CMP     AL,'\'
        return
PathChrCMP  ENDP

        IF      KANJI
        procedure   TESTKANJ,NEAR
        CMP     AL,81H
        JB      NOTLEAD
        CMP     AL,9FH
        JBE     ISLEAD
        CMP     AL,0E0H
        JB      NOTLEAD
        CMP     AL,0FCH
        JBE     ISLEAD
NOTLEAD:
        PUSH    AX
        XOR     AX,AX           ;Set zero
        POP     AX
        return

ISLEAD:
        PUSH    AX
        XOR     AX,AX           ;Set zero
        INC     AX              ;Reset zero
        POP     AX
        return
TESTKANJ  ENDP
        ENDIF
do_ext

CODE    ENDS
    END
```
