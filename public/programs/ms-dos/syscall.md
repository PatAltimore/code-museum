---
title: "SYSCALL.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/SYSCALL.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/SYSCALL.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "syscall"
order: 45
description: "The SYSCALL.ASM file in MS-DOS v2.0 defines system call entry points, showcasing the evolution of DOS from its CP/M-inspired roots to a more Unix-like architecture."

summary:
  - point: "Introduces system calls for date and time manipulation, reflecting the need for real-time operations in early personal computing."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Implements File Control Blocks (FCBs), a legacy data structure inherited from CP/M, highlighting DOS's early design constraints."
    link: "https://en.wikipedia.org/wiki/File_Control_Block"
    link_label: "File Control Block"
  - point: "Demonstrates low-level disk I/O routines, emphasizing the direct interaction with hardware typical of assembly programming."
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"
  - point: "Reflects the influence of Unix/XENIX in MS-DOS v2.0, particularly in its handling of file operations and system calls."
    link: "https://en.wikipedia.org/wiki/Xenix"
    link_label: "XENIX"
  - point: "Highlights Tim Paterson's foundational work and Microsoft's adaptation of 86-DOS into MS-DOS, shaping the early PC software ecosystem."
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"

enhancements:
  - id: "include-dosseg-and-dossym"
    line_start: 5
    line_end: 11
    title: "Setting the stage for system calls"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "These lines include DOSSEG.ASM and DOSSYM.ASM, which define segment and symbol information for the MS-DOS system. This setup reflects the modular approach of assembly programming, where reusable components are included to streamline development. In 1983, when MS-DOS v2.0 was released, modularity was crucial for managing the complexity of operating systems on limited hardware. By organizing code into segments and symbols, developers could create a more maintainable and extensible system. This approach also hints at the influence of CP/M, which used similar techniques to structure its assembly code. The modularity seen here would later influence the design of more advanced operating systems, though the reliance on assembly language would diminish as higher-level languages became dominant."
  - id: "get-date-system-call"
    line_start: 64
    line_end: 90
    title: "Retrieving the current date"
    wikipedia_url: "https://en.wikipedia.org/wiki/Real-time_clock"
    image_url: ""
    image_caption: ""
    content: "The $GET_DATE system call retrieves the current date and formats it for the user. It interacts with the BIOS clock to ensure accuracy, a critical feature for applications requiring real-time operations. In the early 1980s, personal computers were becoming essential tools for business, and accurate date/time handling was a necessity for tasks like file timestamping and scheduling. Tim Paterson and the MS-DOS team had to ensure compatibility with the IBM PC's hardware, including its real-time clock. This routine reflects the low-level nature of assembly programming, where developers directly manipulate registers and memory to achieve functionality. The decision to bias the year by 1980 underscores the constraints of early computing, where saving bytes was paramount. This approach would later influence how other operating systems handled time, though the reliance on BIOS-level interactions would eventually be abstracted away."
  - id: "set-date-system-call"
    line_start: 92
    line_end: 111
    title: "Validating and setting the current date"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS"
    image_url: ""
    image_caption: ""
    content: "The $SET_DATE system call allows users to update the system's current date. It includes validation checks to ensure the date is within acceptable ranges, such as limiting the year to 2100 and verifying non-zero month and day values. This reflects the meticulous attention to error handling required in early operating systems, where invalid inputs could easily crash the system. The invocation of DODATE ties this routine to the underlying BIOS, showcasing the tight integration between software and hardware in the IBM PC architecture. In 1983, this level of control was necessary to ensure reliability on diverse hardware configurations. The constraints seen here, such as the 1980 bias and the year limit, highlight the trade-offs made to optimize for performance and memory usage. These decisions would resonate in later systems, influencing how date/time validation was implemented in software."
  - id: "fcb-sequential-read"
    line_start: 302
    line_end: 332
    title: "Reading files sequentially with FCBs"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Control_Block"
    image_url: ""
    image_caption: ""
    content: "The $FCB_SEQ_READ system call reads the next record from a file using the File Control Block (FCB) structure. FCBs were inherited from CP/M and represent a legacy approach to file management, where file metadata is stored in a fixed-size structure. This routine interacts directly with disk transfer addresses, reflecting the low-level nature of DOS's file handling. In the early 1980s, disk I/O was a critical bottleneck, and efficient management of file reads was essential for performance. The reliance on FCBs highlights the constraints of early personal computing, where memory and processing power were limited. By 1983, MS-DOS v2.0 was transitioning to a more Unix-like file system, but FCBs remained for backward compatibility. This decision ensured that older software could run on newer systems, a hallmark of Microsoft's strategy to dominate the PC market. The techniques seen here would eventually be replaced by more flexible file handle-based systems, but they remain a testament to the ingenuity of early OS design."
  - id: "fcb-delete-system-call"
    line_start: 372
    line_end: 375
    title: "Deleting files with legacy FCBs"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Control_Block"
    image_url: ""
    image_caption: ""
    content: "The $FCB_DELETE system call removes files matching a given FCB. It includes checks for attributes like hidden, system, and read-only, ensuring that protected files cannot be accidentally deleted. This routine reflects the challenges of file management in early operating systems, where safety and reliability were paramount. By 1983, MS-DOS v2.0 was introducing subdirectories and file handles, but FCBs remained for compatibility with older software. The decision to retain FCBs highlights Microsoft's commitment to backward compatibility, a strategy that helped establish MS-DOS as the dominant PC operating system. The attribute checks seen here would evolve into more sophisticated permission systems in later OS designs, but they remain a foundational element of file management."
  - id: "fcb-rename-system-call"
    line_start: 455
    line_end: 490
    title: "Renaming files in MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The $FCB_RENAME system call renames files by modifying their FCB entries. It includes checks to prevent renaming I/O devices and ensures that the new name does not conflict with existing files. This routine reflects the growing complexity of file management in MS-DOS v2.0, which was inspired by Unix's more advanced file handling capabilities. By 1983, personal computing was expanding rapidly, and users demanded more robust features from their operating systems. The ability to rename files was a small but significant step toward making DOS more user-friendly and versatile. The checks seen here highlight the constraints of early computing, where every operation had to be carefully validated to prevent system crashes. This approach would influence later OS designs, where file operations became increasingly abstracted and error-resistant."
  - id: "fcb-open-system-call"
    line_start: 548
    line_end: 565
    title: "Opening files with FCBs"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Control_Block"
    image_url: ""
    image_caption: ""
    content: "The $FCB_OPEN system call opens files by locating their FCB entries and populating them with metadata. This routine interacts directly with the disk, reflecting the low-level nature of DOS's file handling. By 1983, MS-DOS v2.0 was introducing file handles, but FCBs remained for backward compatibility. The decision to retain FCBs underscores Microsoft's strategy to support older software while gradually modernizing the OS. The techniques seen here, such as direct manipulation of disk clusters and metadata, highlight the constraints of early personal computing, where efficiency was paramount. These methods would eventually be replaced by more abstract file systems, but they remain a testament to the ingenuity of early OS design."
  - id: "fcb-close-system-call"
    line_start: 621
    line_end: 648
    title: "Closing files and ensuring data integrity"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Control_Block"
    image_url: ""
    image_caption: ""
    content: "The $FCB_CLOSE system call closes files by updating their FCB entries and flushing any buffered data to disk. This routine includes checks to ensure that only 'dirty' files are closed, reflecting the importance of data integrity in early operating systems. By 1983, MS-DOS v2.0 was transitioning to a more Unix-like file system, but FCBs remained for compatibility with older software. The decision to retain FCBs highlights Microsoft's commitment to backward compatibility, a strategy that helped establish MS-DOS as the dominant PC operating system. The techniques seen here, such as flushing buffers and updating metadata, would evolve into more sophisticated file systems in later OS designs, but they remain a foundational element of file management."

---

;
; system call entry points MSDOS
;

INCLUDE DOSSEG.ASM

CODE    SEGMENT BYTE PUBLIC  'CODE'
        ASSUME  SS:DOSGROUP,CS:DOSGROUP

.xlist
.xcref
INCLUDE DOSSYM.ASM
INCLUDE DEVSYM.ASM
.cref
.list


        i_need  YEAR,WORD
        i_need  DAY,BYTE
        i_need  WeekDay,BYTE
        i_need  TimeBuf,6
        i_need  BCLOCK,DWORD
        i_need  DskErr,BYTE
        i_need  Attrib,BYTE
        i_need  Name1,BYTE
        i_need  Name2,BYTE
        i_need  Name3,BYTE
        i_need  DelAll,BYTE
        i_need  ThisDPB,DWORD
        i_need  CurBuf,DWORD
        i_need  LastEnt,WORD
        i_need  ThisDrv,BYTE
        i_need  DirStart,WORD
        i_need  DevPt,DWORD
        i_need  Creating,BYTE
        i_need  VolID,BYTE
        i_need  FoundDel,BYTE

SUBTTL DATE AND TIME - SYSTEM CALLS 42,43,44,45; S/G DATE,TIME
PAGE
        procedure   $GET_DATE,NEAR   ;System call 42
ASSUME  DS:NOTHING,ES:NOTHING

; Inputs:
;       None
; Function:
;       Return current date
; Returns:
;       Date in CX:DX

        PUSH    SS
        POP     DS
ASSUME  DS:DOSGROUP
        invoke  READTIME        ;Check for rollover to next day
        MOV     AX,[YEAR]
        MOV     BX,WORD PTR [DAY]
        invoke  get_user_stack           ;Get pointer to user registers
ASSUME  DS:NOTHING
        MOV     [SI.user_DX],BX  ;DH=month, DL=day
        ADD     AX,1980         ;Put bias back
        MOV     [SI.user_CX],AX  ;CX=year
        MOV     AL,BYTE PTR [WEEKDAY]
        RET
$GET_DATE ENDP

        procedure   $SET_DATE,NEAR   ;System call 43
ASSUME  DS:NOTHING,ES:NOTHING

; Inputs:
;       CX:DX valid date
; Function:
;       Set current date
; Returns:
;       AL = -1 date bad, = 0 OK

        MOV     AL,-1           ;Be ready to flag error
        SUB     CX,1980         ;Fix bias in year
        JC      RET24           ;Error if not big enough
        CMP     CX,119          ;Year must be less than 2100
        JA      RET24
        OR      DH,DH
        JZ      RET24
        OR      DL,DL
        JZ      RET24           ;Error if either month or day is 0
        CMP     DH,12           ;Check against max. month
        JA      RET24
        PUSH    SS
        POP     DS
ASSUME  DS:DOSGROUP
        invoke  DODATE
RET24:  RET
$SET_DATE ENDP

        procedure   $GET_TIME,NEAR   ;System call 44
ASSUME  DS:NOTHING,ES:NOTHING

; Inputs:
;       None
; Function:
;       Get current time
; Returns:
;       Time in CX:DX

        PUSH    SS
        POP     DS
ASSUME  DS:DOSGROUP
        invoke  READTIME
        invoke  get_user_stack           ;Get pointer to user registers
        MOV     [SI.user_DX],DX
        MOV     [SI.user_CX],CX
        XOR     AL,AL
RET26:  RET
$GET_TIME ENDP

        procedure   $SET_TIME,NEAR   ;System call 45
;Time is in CX:DX in hours, minutes, seconds, 1/100 sec.
ASSUME  DS:NOTHING,ES:NOTHING

; Inputs:
;       CX:DX = Time
; Function:
;       Set time
; Returns:
;       AL = -1 time bad, = 0 OK

        MOV     AL,-1           ;Flag in case of error
        CMP     CH,24           ;Check hours
        JAE     RET26
        CMP     CL,60           ;Check minutes
        JAE     RET26
        CMP     DH,60           ;Check seconds
        JAE     RET26
        CMP     DL,100          ;Check 1/100's
        JAE     RET26
        PUSH    CX
        PUSH    DX
        PUSH    SS
        POP     DS
ASSUME  DS:DOSGROUP
        MOV     BX,OFFSET DOSGROUP:TIMEBUF
        MOV     CX,6
        XOR     DX,DX
        MOV     AX,DX
        PUSH    BX
        invoke  SETREAD
ASSUME  ES:DOSGROUP
        PUSH    DS
        LDS     SI,[BCLOCK]
ASSUME  DS:NOTHING
        invoke  DEVIOCALL2      ;Get correct day count
        POP     DS
ASSUME  DS:DOSGROUP
        POP     BX
        invoke  SETWRITE
        POP     WORD PTR [TIMEBUF+4]
        POP     WORD PTR [TIMEBUF+2]
        LDS     SI,[BCLOCK]
ASSUME  DS:NOTHING
        invoke  DEVIOCALL2      ;Set the time
        XOR     AL,AL
        RET
$SET_TIME ENDP

SUBTTL DISK R/W ROUTINES
PAGE
        procedure   $FCB_SEQ_READ,NEAR   ; System call 20
ASSUME  DS:NOTHING,ES:NOTHING

; Inputs:
;       DS:DX Points to openned FCB
; Function:
;       Read next record from file to disk transfer address
; Returns:
;       AL = 1 EOF record is empty
;       AL = 3 EOF record is partial zero filled
;       AL = 2 No room at disk transfer address
;       AL = 0 All OK

        invoke  GETREC
        invoke  LOAD
        JMP     SHORT FINSEQ

    entry   $FCB_SEQ_WRITE              ; System call 21
ASSUME  DS:NOTHING,ES:NOTHING

; Inputs:
;       DS:DX Points to openned FCB
; Function:
;       Write next record to file from disk transfer address
; Returns:
;       AL = 1 Disk full
;       AL = 2 No room in disk transfer segment
;       AL = 0 All OK

        invoke  GETREC
        invoke  STORE
FINSEQ:
        JCXZ    SETNREX
        ADD     AX,1
        ADC     DX,0
        JMP     SHORT SETNREX

    entry   $FCB_RANDOM_READ                ; System call 33
ASSUME  DS:NOTHING,ES:NOTHING

; Inputs:
;       DS:DX Points to openned FCB
; Function:
;       Read record addressed by random record field from file to
;         disk transfer address
; Returns:
;       AL = 1 EOF record is empty
;       AL = 3 EOF record is partial zero filled
;       AL = 2 No room at disk transfer address
;       AL = 0 All OK

        invoke  GETRRPOS1
        invoke  LOAD
        JMP     SHORT FINRND

    entry   $FCB_RANDOM_WRITE               ; System call 34
ASSUME  DS:NOTHING,ES:NOTHING

; Inputs:
;       DS:DX Points to openned FCB
; Function:
;       Write record addressed by random record field to file from
;         disk transfer address
; Returns:
;       AL = 1 Disk full
;       AL = 2 No room in disk transfer segment
;       AL = 0 All OK

        invoke  GETRRPOS1
        invoke  STORE
        JMP     SHORT FINRND

    entry   $FCB_RANDOM_READ_BLOCK          ; System call 39
ASSUME  DS:NOTHING,ES:NOTHING

; Inputs:
;       DS:DX Points to openned FCB
;       CX = Record count
; Function:
;       Read CX records starting at random record field from file
;         to disk transfer address
; Returns:
;       AL = 1 EOF record is empty
;       AL = 3 EOF record is partial zero filled
;       AL = 2 No room at disk transfer address
;       AL = 0 All OK
;       CX = Actual number of records read

        invoke  GETRRPOS
        invoke  LOAD
        JMP     SHORT FINBLK

    entry   $FCB_RANDOM_WRITE_BLOCK         ; System call 40
ASSUME  DS:NOTHING,ES:NOTHING

; Inputs:
;       DS:DX Points to openned FCB
;       CX = Record count
; Function:
;       Write CX records starting at random record field to file
;         from disk transfer address
;       If CX = 0 File is set to length determined from random record field
; Returns:
;       AL = 1 Disk full
;       AL = 2 No room in disk transfer segment
;       AL = 0 All OK
;       CX = Actual number of records written

        invoke  GETRRPOS
        invoke  STORE
FINBLK:
        invoke  get_user_stack
        MOV     [SI.user_CX],CX
        entry   FINNOSAV
        JCXZ    FINRND
        ADD     AX,1
        ADC     DX,0
FINRND:
        MOV     WORD PTR ES:[DI.fcb_RR],AX
        MOV     ES:[DI.fcb_RR+2],DL
        OR      DH,DH
        JZ      SETNREX
        MOV     ES:[DI.fcb_RR+3],DH ; Save 4 byte of RECPOS only if significant
SETNREX:
        MOV     CX,AX
        AND     AL,7FH
        MOV     ES:[DI.fcb_NR],AL
        AND     CL,80H
        SHL     CX,1
        RCL     DX,1
        MOV     AL,CH
        MOV     AH,DL
        MOV     ES:[DI.fcb_EXTENT],AX
        MOV     AL,BYTE PTR [DSKERR]
RET4:
        RET
$FCB_SEQ_READ   ENDP

SUBTTL $FCB_DELETE -- SYSTEM CALL 19
PAGE
        procedure   $FCB_DELETE,NEAR   ; System call 19
ASSUME  DS:NOTHING,ES:NOTHING

; Inputs:
;       DS:DX point to unopened FCB
; Function:
;       Delete all matching entries
; Returns:
;       AL = -1 if no entries matched, otherwise 0

        invoke  MOVNAME
ASSUME  ES:DOSGROUP
        MOV     AL,-1
        MOV     BYTE PTR [FoundDel],AL
        JC      RET4
        MOV     AL,BYTE PTR [ATTRIB]
        AND     AL,attr_hidden+attr_system+attr_directory+attr_volume_id+attr_read_only
                                        ; Look only at hidden bits
        CMP     AL,attr_hidden+attr_system+attr_directory+attr_volume_id+attr_read_only
                                        ; All must be set
        JNZ     NOTALL
        MOV     CX,11
        MOV     AL,"?"
        MOV     DI,OFFSET DOSGROUP:NAME1
        REPE    SCASB                   ; See if name is *.*
        JNZ     NOTALL
        MOV     BYTE PTR [DELALL],0           ; DEL *.* - flag deleting all
NOTALL:
        invoke  FINDNAME
ASSUME  DS:DOSGROUP
        MOV     AL,-1
        JC      RET4
        OR      AH,AH           ; Check if device name
        JS      RET4            ; Can't delete I/O devices
DELFILE:
        LES     BP,[THISDPB]
        MOV     AH,BYTE PTR [DELALL]
        PUSH    DS
        LDS     DI,[CURBUF]
ASSUME  DS:NOTHING
        TEST    [Attrib],attr_read_only ; are we deleting RO files too?
        JNZ     DoDelete            ; yes
        TEST    DS:[BX.dir_attr],attr_read_only
        JZ      DoDelete            ; not read only
        POP     DS
        JMP     SHORT DelNxt
DoDelete:
        MOV     BYTE PTR [FoundDel],0
        MOV     [DI.BUFDIRTY],1
        MOV     BYTE PTR [BX],AH
        MOV     BX,[SI]
        POP     DS
ASSUME  DS:DOSGROUP
        OR      BX,BX
        JZ      DELNXT
        CMP     BX,ES:[BP.dpb_max_cluster]
        JA      DELNXT
        invoke  RELEASE
DELNXT:
        invoke  GETENTRY                        ; Registers need to be reset
        invoke  NEXTENT
        JNC     DELFILE
        CALL    FLUSHRET1
        MOV     AL,BYTE PTR [FoundDel]
        RET

$FCB_DELETE  ENDP

SUBTTL $FCB_RENAME -- SYSTEM CALL 23; RENAME FILES
PAGE
ERRETJ: JMP     ERRET

        procedure   $FCB_RENAME,NEAR   ; System call 23
ASSUME  DS:NOTHING,ES:NOTHING

; Inputs:
;       DS:DX point to a modified FCB (DS:DX+11H points to destination
;        name)
; Function:
;       Rename all matching entries to indicated name
; Returns:
;       AL = -1 if no entries matched, otherwise 0

        invoke  MOVNAME
ASSUME  ES:DOSGROUP
        JC      ERRETJ
        ADD     SI,5
        MOV     DI,OFFSET DOSGROUP:NAME2
        invoke  LODNAME
        JC      ERRETJ          ; Report error if second name invalid
        invoke  FINDNAME
ASSUME  DS:DOSGROUP
        JC      ERRETJ
        OR      AH,AH           ; Check if I/O device name
        JS      ERRETJ          ; If so, can't rename it
        MOV     SI,OFFSET DOSGROUP:NAME1
        MOV     DI,OFFSET DOSGROUP:NAME3
        MOV     CX,13
        REP     MOVSB           ; Copy name to search for --include attribute byte
RENFIL:
        MOV     DI,OFFSET DOSGROUP:NAME1
        MOV     SI,OFFSET DOSGROUP:NAME2
        MOV     CX,11
NEWNAM:
        LODSB
        CMP     AL,"?"
        JNZ     NOCHG
        PUSH    DS
        MOV     DS,WORD PTR [CURBUF+2]
        MOV     AL,[BX]
        POP     DS
NOCHG:
        STOSB
        INC     BX
        LOOP    NEWNAM
        INC     DI
        MOV     BYTE PTR [DI],attr_all  ;Sets ATTRIB
                                ; Stop duplicates with any attributes
        invoke  DEVNAME         ; Check if giving it a device name
        JNC     RENERR
        XOR     AX,AX
        PUSH    [LASTENT]
        invoke  FINDENTRY       ; See if new name already exists
        POP     AX
        JNC     RENERR                  ; Error if found
        LES     BP,[THISDPB]
        invoke  GETENT                  ; Re-read matching entry
        MOV     DI,BX           ; Leave BX,DX until call to NEXTENT
        MOV     ES,WORD PTR [CURBUF+2]
        MOV     SI,OFFSET DOSGROUP:NAME1
        MOV     CX,11
        REP     MOVSB                   ; Replace old name with new one
        MOV     DI,WORD PTR [CURBUF]
        MOV     ES:[DI.BUFDIRTY],1      ; Directory changed
        PUSH    SS
        POP     ES
        MOV     SI,OFFSET DOSGROUP:NAME3
        MOV     DI,OFFSET DOSGROUP:NAME1
        MOV     CX,13                   ; Include attribute byte
        REP     MOVSB                   ; Copy name back into search buffer
        invoke  NEXTENT
        JNC     RENFIL
        JMP     FLUSHRET1

RENERR:
        CALL    FLUSHRET1
ERRET:
        MOV     AL,-1
        RET
$FCB_RENAME  ENDP

SUBTTL $FCB_OPEN -- SYSTEM CALL 15; OPEN A FILE
PAGE
        procedure   $FCB_OPEN,NEAR   ; System call 15
ASSUME  DS:NOTHING,ES:NOTHING

; Inputs:
;       DS:DX point to an unopened FCB
; Function:
;       Open indicated file and fill in FCB
; Returns:
;       AL = -1 if no entries matched, otherwise 0
; FOR INTERNAL USE
;       [CURBUF+2]:SI and [CURBUF+2]:BX Preserved

        invoke  GETFILE
ASSUME  DS:DOSGROUP,ES:NOTHING

    entry   DOOPEN

; Enter here to perform $FCB_OPEN on file already found
; in directory. AH=device ID number, DS=CS, BX points to directory
; entry in [CURBUF], SI points to First Cluster field, and
; ES:DI point to the FCB to be opened. This entry point
; is used by $FCB_CREATE.
        JC      ERRET
        PUSH    SI
        PUSH    AX              ; Save I/O driver number
        XOR     AL,AL
        OR      AH,AH
        JS      OPENDEV
        MOV     AL,[THISDRV]
        MOV     DS,WORD PTR [CURBUF+2]
ASSUME  DS:NOTHING
        INC     AX
OPENDEV:
        STOSB
        XOR     AX,AX
IF ZEROEXT
        ADD     DI,11
        STOSW                   ; Zero low byte of extent field if ZERPEXT only
ELSE
        ADD     DI,12           ; Point to high half of CURRENT BLOCK field
        STOSB                   ; Set it to zero (CP/M programs set low byte)
ENDIF
        MOV     AL,128          ; Default record size
        STOSW                   ; Set record size
        LODSW                   ; Get starting cluster
        MOV     DX,AX           ; Save it for the moment
        MOVSW                   ; Transfer size to FCB
        MOVSW
        MOV     AX,[SI-8]       ; Get date
        STOSW                   ; Save date in FCB
        MOV     AX,[SI-10]      ; Get time
        STOSW                   ; Save it in FCB
        POP     AX              ; Restore I/O driver number
        POP     SI
        MOV     AL,AH
        OR      AL,40H          ; Not dirty
        STOSB
        JS      SAVDEVPT        ; If device, go save pointer to it
        MOV     AX,DX           ; Restore starting cluster
        STOSW                   ; first cluster
        PUSH    AX                      ; save cluster
        XOR     AX,AX
        STOSW                           ; clus pos
        POP     AX                      ; last cluster
        STOSB
        MOV     AL,AH
        MOV     AH,BYTE PTR [DIRSTART]
        PUSH    CX
        MOV     CL,4
        SHL     AH,CL
        OR      AL,AH
        STOSB
        MOV     AX,[DIRSTART]
        MOV     CL,4
        SHL     AX,CL
        POP     CX
        MOV     AL,AH
        STOSB
OPEN_RET:
        XOR     AX,AX
        RET

SAVDEVPT:
ASSUME  DS:DOSGROUP
        LDS     AX,[DEVPT]
ASSUME  DS:NOTHING
        STOSW
        MOV     ES:[DI],DS
        JMP     SHORT OPEN_RET
$FCB_OPEN    ENDP

SUBTTL $FCB_CLOSE -- SYSTEM CALL 16; CLOSE FILE
PAGE
        procedure   $FCB_CLOSE,NEAR   ; System call 16
ASSUME  DS:NOTHING,ES:NOTHING

; Inputs:
;       DS:DX point to an opened FCB
; Function:
;       Close the indicated file
; Returns:
;       AL = -1 if disk has been changed, otherwise 0

        MOV     DI,DX
        CMP     BYTE PTR [DI],-1        ; Check for extended FCB
        JNZ     NORMFCB3
        ADD     DI,7
NORMFCB3:
        TEST    [DI.fcb_DEVID],devid_file_clean+devid_device
                                        ; Allow only dirty files
        JNZ     OKRET1                  ; can't close I/O device or not written
        invoke  MOVNAMENOSET
        JC      BADCLOSE                ; Bad file name
        entry   FCB_CLOSE_INNER
        PUSH    DX
        PUSH    DS
        MOV     SI,DX
        MOV     BX,[SI.fcb_LSTCLUS+1]
        MOV     CL,4
        SHR     BX,CL
        PUSH    BX
        PUSH    SS
        POP     DS
ASSUME  DS:DOSGROUP
        invoke  FATREAD
        POP     BX
        invoke  SETDIRSRCH
        invoke  FINDENTRY
        POP     ES
        POP     DI
        JC      BADCLOSE
        LDS     BX,[CURBUF]
ASSUME  DS:NOTHING

        ; note that SI points to dir_first...

        OR      BYTE PTR [SI-dir_first+dir_attr],attr_archive
        MOV     CX,ES:[DI.fcb_FIRCLUS]
        MOV     [SI-dir_first+dir_first],CX
        MOV     DX,ES:WORD PTR [DI.fcb_FILSIZ]
        MOV     [SI-dir_first+dir_size_l],DX
        MOV     DX,ES:WORD PTR [DI.fcb_FILSIZ+2]
        MOV     [SI-dir_first+dir_size_h],DX
        MOV     DX,ES:[DI.fcb_FDATE]
        MOV     [SI-dir_first+dir_date],DX
        MOV     DX,ES:[DI.fcb_FTIME]
        MOV     [SI-dir_first+dir_time],DX
        MOV     [BX.BUFDIRTY],1
        PUSH    SS
        POP     DS
ASSUME  DS:DOSGROUP
FLUSHRET1:
        LES     BP,[THISDPB]
        MOV     AL,ES:[BP.dpb_drive]
        invoke  FLUSHBUF
OKRET1:
        XOR     AL,AL
        RET

BADCLOSE:
        MOV     AL,-1
        RET
$FCB_CLOSE   ENDP

SUBTTL $FCB_CREATE -- SYSTEM CALL 22; MAKE AND OPEN A NEW FILE
PAGE
        procedure   $FCB_CREATE,NEAR   ; System call 22
ASSUME  DS:NOTHING,ES:NOTHING

; Inputs:
;       DS:DX point to an unopened FCB
; Function:
;       If file does not exist, create it and open it
;       If file exists, free up its contents and open the file
; Returns:
;       AL = -1 if file cannot be created, otherwise 0

        invoke  MOVNAME
ASSUME  ES:DOSGROUP
        JC      ERRET3
        MOV     DI,OFFSET DOSGROUP:NAME1
        MOV     CX,11
        MOV     AL,"?"
        REPNE   SCASB
        JZ      ERRET3
        MOV     BYTE PTR [CREATING],-1
        PUSH    DX
        PUSH    DS
        invoke  FINDNAME
ASSUME  DS:DOSGROUP
NWENTY:
        LES     BP,[THISDPB]
ASSUME  ES:NOTHING
        JNC     EXISTENT
        invoke  BUILDDIR
        JC      ERRPOP
        invoke  GETENT          ; Point at that free entry
        JMP     SHORT FREESPOT
ERRPOP:
        POP     DS
        POP     DX
ASSUME  DS:NOTHING
ERRET3:
        JMP     SHORT BADCLOSE

        entry   NEWENTRY
        POP     DX      ; Return address
        POP     ES      ; ES
        POP     CX      ; DI
        PUSH    DX
        PUSH    CX
        PUSH    ES
        JMP     NWENTY

EXISTENT:
ASSUME  DS:DOSGROUP
        JNZ     ERRPOP          ; Error if attributes don't match
        OR      AH,AH           ; Check if file is I/O device
        JS      OPENJMP         ; If so, no action
        PUSH    DS
        LDS     DI,[CURBUF]
ASSUME  DS:NOTHING
        MOV     CX,[SI]         ; Get pointer to clusters
        MOV     SI,[DI.BUFSECNO]
        POP     DS
ASSUME  DS:DOSGROUP
        JCXZ    FREESPOT
        CMP     CX,ES:[BP.dpb_max_cluster]
        JA      FREESPOT
        SUB     BX,DI
        PUSH    BX
        PUSH    SI              ; Save sector number
        MOV     BX,CX
        invoke  RELEASE         ; Free any data already allocated
        POP     DX
        XOR     AL,AL
        invoke  GETBUFFR
        POP     BX
        ADD     BX,WORD PTR [CURBUF]
FREESPOT:
        TEST    BYTE PTR [ATTRIB],attr_volume_id
        JZ      NOTVOLID
        CMP     BYTE PTR [VOLID],0
        JNZ     ERRPOP          ; Can't create a second volume ID
NOTVOLID:
        MOV     ES,WORD PTR [CURBUF+2]
        MOV     DI,BX
        MOV     SI,OFFSET DOSGROUP:NAME1
        MOV     CX,5
        MOVSB
        REP     MOVSW
        MOV     AL,[ATTRIB]
        STOSB
        MOV     CL,5
        XOR     AX,AX
        REP     STOSW
        invoke  DATE16
        XCHG    AX,DX
        STOSW
        XCHG    AX,DX
        STOSW
        XOR     AX,AX
        PUSH    DI
        STOSW
        STOSW
        STOSW
        MOV     SI,WORD PTR [CURBUF]
        MOV     ES:[SI.BUFDIRTY],1
        LES     BP,[THISDPB]
        MOV     AL,ES:[BP.dpb_drive]
        PUSH    AX
        PUSH    BX
        invoke  FLUSHBUF
        POP     BX
        POP     AX
        POP     SI
        MOV     AH,AL             ; Get I/O driver number back
OPENJMP:
        CLC                     ; Clear carry so OPEN won't fail
        POP     ES
        POP     DI
ASSUME  ES:NOTHING
        JMP     DOOPEN
$FCB_CREATE  ENDP

do_ext

CODE    ENDS
    END

