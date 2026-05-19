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
description: "This file contains the assembly routines for managing File Control Blocks (FCBs) in MS-DOS 2.0, a critical component of file handling in early personal computing."

summary:
  - point: "Introduces FCB-based file management routines, pivotal for MS-DOS file handling"
    link: "https://en.wikipedia.org/wiki/File_Control_Block"
    link_label: "File Control Block"
  - point: "Demonstrates early support for Kanji character encoding in file names"
    link: "https://en.wikipedia.org/wiki/Kanji"
    link_label: "Kanji"
  - point: "Highlights the transition from single-level directories to hierarchical file systems in MS-DOS 2.0"
    link: "https://en.wikipedia.org/wiki/MS-DOS#Versions"
    link_label: "MS-DOS Versions"
  - point: "Contains routines for parsing and validating file names and paths"
    link: "https://en.wikipedia.org/wiki/Path_(computing)"
    link_label: "Path (computing)"
  - point: "Illustrates early assembly-level programming techniques for constrained hardware environments"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"

enhancements:
  - id: "makefcb-default-file-control-block"
    line_start: 30
    line_end: 165
    title: "MakeFCB: Default File Control Block Setup"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Control_Block"
    image_url: ""
    image_caption: ""
    content: "The MakeFCB routine initializes a File Control Block (FCB) structure, a legacy method for managing files in MS-DOS. FCBs were used to store metadata about files, including name, extension, and attributes. This section of code parses input to determine drive letters, file names, and extensions, filling in default values when necessary. The programmer's immediate goal was to ensure compatibility with ambiguous file specifications while maintaining efficiency in constrained memory environments. In 1983, MS-DOS 2.0 introduced hierarchical file systems inspired by Unix, but retained FCBs for backward compatibility with earlier software. At the time, personal computers like the IBM PC were powered by Intel 8086 processors with limited RAM (typically 64–256 KB). This necessitated compact and efficient code. Tim Paterson, the original author of 86-DOS (later MS-DOS), laid the groundwork for these routines, which were refined by Microsoft engineers. The MakeFCB routine influenced later file handling mechanisms. While FCBs were eventually replaced by file handles in MS-DOS 2.0 and beyond, the parsing logic here informed the development of APIs for file access in modern operating systems. Techniques for handling ambiguous file names and default values can be seen in contemporary systems like Windows and Linux. The legacy of FCBs persists in the design of metadata structures and backward compatibility layers in software development."
  - id: "nametrans-path-element-scanning"
    line_start: 167
    line_end: 223
    title: "NameTrans: Path Element Scanning Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Path_(computing)"
    image_url: ""
    image_caption: ""
    content: "The NameTrans routine scans and processes individual elements of a file path, ensuring compatibility with MS-DOS's file system. It allows spaces in pathnames and handles special cases like dots and delimiters. The immediate goal was to parse file paths accurately, enabling operations like file creation and retrieval in a hierarchical directory structure. In the early 1980s, path parsing was a critical challenge due to the introduction of subdirectories in MS-DOS 2.0. Inspired by Unix, MS-DOS adopted hierarchical file systems, but needed to accommodate legacy software that relied on flat directory structures. This routine reflects the transitional nature of MS-DOS 2.0, bridging old and new paradigms. The inclusion of Kanji character support highlights Microsoft's efforts to internationalize its software for non-English markets, particularly Japan. The path parsing logic in NameTrans influenced the design of file system APIs in later operating systems. Techniques for handling spaces and delimiters in paths are still relevant in modern systems like Windows and Linux. The routine's handling of special characters and its approach to error checking laid the groundwork for robust file system implementations in the decades that followed."
  - id: "buildfcb-blank-device-control-block"
    line_start: 227
    line_end: 254
    title: "BuildFCB: Blank Device Control Block Creation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_file"
    image_url: ""
    image_caption: ""
    content: "The BuildFCB routine constructs a blank File Control Block (FCB) for device I/O operations. It initializes the FCB structure with default values, preparing it for interaction with devices like printers or disk drives. The immediate goal was to standardize device communication within the MS-DOS environment, ensuring compatibility and ease of use. In 1983, MS-DOS 2.0 expanded its capabilities to include device drivers and pipes, inspired by Unix. This routine reflects the growing complexity of personal computing, as users demanded more sophisticated functionality from their systems. The use of FCBs for device I/O was a pragmatic choice, leveraging existing file management structures to handle devices. Microsoft's engineers, under the leadership of Bill Gates, were tasked with delivering these enhancements while maintaining backward compatibility with earlier versions of MS-DOS. The BuildFCB routine influenced the development of device file systems in later operating systems. While MS-DOS eventually transitioned to file handles for device management, the concept of representing devices as files persists in modern systems like Unix/Linux and Windows. The routine's approach to initializing metadata structures informed the design of APIs for device communication, shaping the evolution of personal computing."
  - id: "fcb-move-file-name-validation"
    line_start: 258
    line_end: 418
    title: "FCB_move: File Name Validation and Setup"
    wikipedia_url: "https://en.wikipedia.org/wiki/Filename"
    image_url: ""
    image_caption: ""
    content: "The FCB_move routine validates and sets up file names within an FCB structure. It ensures that file names conform to MS-DOS's naming conventions, converting them to uppercase and checking for invalid characters. The immediate goal was to provide robust error checking and normalization for file names, a critical feature for file system reliability. In the early 1980s, file naming conventions varied widely across operating systems. MS-DOS adopted an 8.3 format (eight characters for the name, three for the extension), which became a de facto standard in personal computing. This routine reflects the challenges of enforcing these conventions while accommodating user input and legacy software. The inclusion of Kanji character support demonstrates Microsoft's commitment to internationalization, addressing the needs of non-English markets. The file name validation logic in FCB_move influenced the design of file system APIs in later operating systems. Techniques for error checking and normalization are still relevant in modern systems like Windows and Linux. The routine's handling of special characters and its approach to case conversion laid the groundwork for robust file system implementations in the decades that followed."
  - id: "getlet-character-conversion-and-delimiter-checking"
    line_start: 422
    line_end: 475
    title: "GetLet: Character Conversion and Delimiter Checking"
    wikipedia_url: "https://en.wikipedia.org/wiki/ASCII"
    image_url: ""
    image_caption: ""
    content: "The GetLet routine retrieves a character from memory, converts it to uppercase if necessary, and checks whether it is a delimiter. It uses ASCII values to perform comparisons and transformations, ensuring compatibility with MS-DOS's file system. The immediate goal was to standardize character handling, enabling consistent parsing of file names and paths. In 1983, ASCII was the dominant character encoding standard, used by most personal computers. MS-DOS relied on ASCII for file system operations, but also needed to accommodate international character sets like Kanji. This routine reflects the challenges of working with limited character encoding standards in a globalized market. Microsoft's engineers, including Tim Paterson, were tasked with delivering these capabilities while maintaining efficiency in constrained hardware environments. The character conversion and delimiter checking logic in GetLet influenced the design of text processing routines in later operating systems. Techniques for handling ASCII values and delimiters are still relevant in modern systems like Windows and Linux. The routine's approach to error checking and normalization laid the groundwork for robust text processing implementations in the decades that followed."
  - id: "testkanj-kanji-character-support"
    line_start: 486
    line_end: 507
    title: "TESTKANJ: Kanji Character Support in MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Kanji"
    image_url: ""
    image_caption: ""
    content: "The TESTKANJ routine checks whether a character is a valid Kanji lead byte, supporting Japanese character encoding in MS-DOS. It uses specific byte ranges to identify Kanji characters, enabling file names and paths to include Japanese text. The immediate goal was to provide internationalization support, addressing the needs of non-English markets. In the early 1980s, Japan was a major market for personal computers, and Kanji support was essential for software adoption. MS-DOS 2.0 included features to accommodate Japanese users, reflecting Microsoft's commitment to global markets. This routine demonstrates the challenges of implementing non-ASCII character support in constrained hardware environments. Microsoft's engineers worked closely with Japanese partners to deliver these capabilities, ensuring compatibility with local standards. The Kanji character support in TESTKANJ influenced the development of internationalization features in later operating systems. Techniques for handling non-ASCII characters are still relevant in modern systems like Windows and Linux. The routine's approach to character validation and error checking laid the groundwork for robust internationalization implementations in the decades that followed."

---

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