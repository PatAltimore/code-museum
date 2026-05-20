---
title: "BUF.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/BUF.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/BUF.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "buf"
order: 24
description: "This file implements buffer management for MS-DOS 2.0, a foundational system for early personal computing."

summary:
  - point: "Introduces buffer management routines for efficient disk I/O"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Optimizes handling of dirty buffers to ensure data integrity"
    link: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    link_label: "Buffer (computing)"
  - point: "Demonstrates early use of priority-based buffer queues"
    link: "https://en.wikipedia.org/wiki/Queue_(abstract_data_type)"
    link_label: "Queue (abstract data type)"
  - point: "Reflects constraints of 1980s hardware and assembly programming"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"
  - point: "Influenced later operating systems with its buffer management techniques"
    link: "https://en.wikipedia.org/wiki/Operating_system"
    link_label: "Operating system"

enhancements:
  - id: "include-dosseg-and-dossym"
    line_start: 1
    line_end: 15
    title: "Setting up the environment: INCLUDE directives"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The file begins by including key assembly files (`DOSSEG.ASM`, `DOSSYM.ASM`, `DEVSYM.ASM`) that define essential segments, symbols, and device-related constants for MS-DOS. These directives establish the groundwork for buffer management routines by importing predefined structures and macros. In the early 1980s, modular programming in assembly was rare but crucial for maintainability, especially in a project like MS-DOS 2.0, which had to support a wide range of hardware configurations. Tim Paterson and the Microsoft team leveraged these modular files to streamline development and ensure compatibility across OEMs. This modularity influenced later operating systems, including Windows, which continued to rely on segmented architecture and modular code organization."
  - id: "setvisit-buffer-scan-initialization"
    line_start: 25
    line_end: 50
    title: "SETVISIT: Resetting buffer visit flags"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `SETVISIT` routine initializes a scan of I/O buffers by resetting all visit flags to zero. This ensures that any previous errors during buffer scans do not leave flags in an inconsistent state. The routine uses a loop to traverse the buffer list, resetting each flag until the end of the list is reached. In the early 1980s, disk errors were a common occurrence due to the mechanical nature of hard drives and the lack of robust error correction. This routine reflects the need for resilience in software design, ensuring that subsequent scans start with a clean slate. The technique of resetting state before operations influenced later error-handling practices in operating systems and database systems, where consistency is paramount."
  - id: "scanplace-save-scan-location"
    line_start: 74
    line_end: 94
    title: "ScanPlace: Preserving scan location"
    wikipedia_url: "https://en.wikipedia.org/wiki/Queue_(abstract_data_type)"
    image_url: ""
    image_caption: ""
    content: "The `ScanPlace` routine saves the current scan location in the buffer queue before calling `PLACEBUF` to reinsert a buffer into the pool. This ensures that the scan can resume seamlessly after the buffer is repositioned. The use of stack operations (`PUSH` and `POP`) to preserve and restore state highlights the constraints of assembly programming, where explicit management of registers and memory is required. This approach to state preservation influenced later high-level programming constructs like iterators and cursors in data structures, which abstract away these details while providing similar functionality."
  - id: "placebuf-buffer-reordering"
    line_start: 258
    line_end: 272
    title: "PLACEBUF: Reordering buffers by priority"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `PLACEBUF` routine removes a buffer from the queue and reinserts it based on its priority. Buffers with higher priority are placed earlier in the queue, ensuring efficient access to frequently used data. This priority-based approach reflects the influence of scheduling algorithms used in operating systems to optimize resource allocation. In the context of MS-DOS, where memory and processing power were limited, such optimizations were critical for performance. The concept of priority-based queuing later became a standard in operating systems, influencing disk scheduling algorithms like elevator and C-SCAN."
  - id: "flushbuf-write-dirty-buffers"
    line_start: 456
    line_end: 487
    title: "FlushBuf: Ensuring data integrity"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_integrity"
    image_url: ""
    image_caption: ""
    content: "The `FlushBuf` routine writes out all dirty buffers to disk, marking them as clean afterward. It ensures that any modified data in memory is safely stored on disk, preventing data loss in case of system failure. The routine uses a loop to traverse the buffer list, checking the `BUFDIRTY` flag for each buffer. If the buffer is dirty, it is written to disk using the `BUFWRITE` routine. This approach to ensuring data integrity reflects the constraints of early computing, where power outages or hardware failures could easily corrupt data. The concept of flushing dirty buffers influenced later systems like journaling file systems, which provide even stronger guarantees of data consistency."
  - id: "bufwrite-dirty-buffer-write"
    line_start: 459
    line_end: 502
    title: "BufWrite: Writing dirty buffers to disk"
    wikipedia_url: "https://en.wikipedia.org/wiki/Write_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `BufWrite` routine writes a dirty buffer to disk, marking it as free afterward. It checks the `BUFDIRTY` flag and, if set, invokes the `DWRITE` routine to perform the actual disk write. This routine is a critical part of MS-DOS's buffer management system, ensuring that modified data is persisted to disk. The explicit handling of dirty buffers reflects the low-level nature of assembly programming, where every detail of memory and disk interaction must be managed manually. The technique of marking buffers as free after writing influenced later memory management systems, including garbage collection in high-level languages."

---

;
; buffer management for MSDOS
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

        i_need  BuffHead,DWORD
        i_need  PreRead,WORD
        i_need  LastBuffer,DWORD
        i_need  CurBuf,DWORD
        i_need  WPErr,BYTE

SUBTTL SETVISIT,SKIPVISIT -- MANAGE BUFFER SCANS
PAGE
        procedure   SETVISIT,near
ASSUME  DS:NOTHING,ES:NOTHING

; Inputs:
;       None
; Function:
;       Set up a scan of I/O buffers
; Outputs:
;       All visit flags = 0
;               NOTE: This pre-scan is needed because a hard disk error
;                     may cause a scan to stop in the middle leaving some
;                     visit flags set, and some not set.
;       DS:DI Points to [BUFFHEAD]
; No other registers altered

        LDS     DI,[BUFFHEAD]
        PUSH    AX
        XOR     AX,AX
SETLOOP:
        MOV     [DI.VISIT],AL
        LDS     DI,[DI.NEXTBUF]
        CMP     DI,-1
        JNZ     SETLOOP
        LDS     DI,[BUFFHEAD]
        POP     AX
        return

        entry   SKIPVISIT
ASSUME  DS:NOTHING,ES:NOTHING

; Inputs:
;       DS:DI Points to a buffer
; Function:
;       Skip visited buffers
; Outputs:
;       DS:DI Points to next unvisited buffer
;       Zero is set if skip to LAST buffer
; No other registers altered

        CMP     DI,-1
        retz
        CMP     [DI.VISIT],1
        retnz
        LDS     DI,[DI.NEXTBUF]
        JMP     SHORT SKIPVISIT
        return
SetVisit    ENDP


SUBTTL SCANPLACE, PLACEBUF -- PUT A BUFFER BACK IN THE POOL
PAGE
        procedure   ScanPlace,near
ASSUME  DS:NOTHING,ES:NOTHING

; Inputs:
;       Same as PLACEBUF
; Function:
;       Save scan location and call PLACEBUF
; Outputs:
;       DS:DI Points to saved scan location
; SI destroyed, other registers unchanged

        PUSH    ES
        LES     SI,[DI.NEXTBUF]         ; Save scan location
        CALL    PLACEBUF
        PUSH    ES
        POP     DS                      ; Restore scan location
        MOV     DI,SI
        POP     ES
        return
ScanPlace   ENDP

NRETJ:  JMP     SHORT NRET

        procedure   PLACEBUF,NEAR
ASSUME  DS:NOTHING,ES:NOTHING

; Input:
;       DS:DI points to buffer
; Function:
;       Remove buffer from queue and re-insert it in proper place.
;       If buffer doesn't go at end, and isn't free, decrement
;       priorities.
; NO registers altered
;
; DS:SI -- Curbuf, current buffer in list
; ES:DI -- Buf, buffer passed as argument
; BP:CX -- Pointsave, saved Buf.nextbuf
; DX:BX -- Lastbuf, previous buffer in list
; AL    -- Inserted, Buf has been inserted
; AH    -- Removed, Buf has been removed

        IF      IBM
        IF      NOT IBM
        invoke  save_world
        XOR     AX,AX           ; Inserted = Removed = FALSE
        LES     CX,[DI.NEXTBUF]
        MOV     BP,ES           ; Pointsave = Buf.nextbuf
        MOV     SI,DS
        MOV     ES,SI           ; Buf is ES:DI
        LDS     SI,[BUFFHEAD]   ; Curbuf = HEAD
        CALL    POINTCOMP       ; Buf == HEAD?
        JNZ     TNEWHEAD
        CMP     CX,-1           ; Buf is LAST?
        JZ      NRETJ           ; Only one buffer, nothing to do
        MOV     WORD PTR [BUFFHEAD],CX
        MOV     WORD PTR [BUFFHEAD+2],BP        ; HEAD = Pointsave
        INC     AH              ; Removed = TRUE
        MOV     DS,BP
        MOV     SI,CX           ; Curbuf = HEAD
TNEWHEAD:
        MOV     BL,ES:[DI.BUFPRI]
        CMP     BL,[SI.BUFPRI]
        JGE     BUFLOOP
NEWHEAD:                        ; If Buf.pri < HEAD.pri
        MOV     WORD PTR ES:[DI.NEXTBUF],SI
        MOV     WORD PTR ES:[DI.NEXTBUF+2],DS   ; Buf.nextbuf = HEAD
        MOV     WORD PTR [BUFFHEAD],DI
        MOV     WORD PTR [BUFFHEAD+2],ES        ; HEAD = Buf
        INC     AL                              ; Inserted = TRUE
        OR      AH,AH
        JNZ     NRET            ; If Removed == TRUE
BUFLOOP:
        PUSH    DS
        PUSH    SI
        LDS     SI,[SI.NEXTBUF]
        CALL    POINTCOMP
        POP     SI
        POP     DS
        JNZ     TESTINS
        MOV     WORD PTR [SI.NEXTBUF],CX        ; If Curbuf.nextbuf == buf
        MOV     WORD PTR [SI.NEXTBUF+2],BP      ; Curbuf.nextbuf = Pointsave
        INC     AH              ; Removed = TRUE
        OR      AL,AL
        JNZ     SHUFFLE         ; If Inserted == TRUE
TESTINS:
        OR      AL,AL
        JNZ     LOOKBUF
        PUSH    CX              ; If NOT Inserted
        MOV     CL,ES:[DI.BUFPRI]
        CMP     CL,[SI.BUFPRI]
        POP     CX
        JGE     LOOKBUF
        PUSH    DS              ; If Buf.pri < Curbuf.pri
        MOV     DS,DX
        MOV     WORD PTR [BX.NEXTBUF],DI
        MOV     WORD PTR [BX.NEXTBUF+2],ES      ; Lastbuf.nextbuf = Buf
        POP     DS
        MOV     WORD PTR ES:[DI.NEXTBUF],SI
        MOV     WORD PTR ES:[DI.NEXTBUF+2],DS   ; Buf.nextbuf = Curbuf
        INC     AL              ; Inserted = TRUE
        OR      AH,AH
        JNZ     SHUFFLE         ; If Removed == TRUE
LOOKBUF:
        MOV     BX,SI
        MOV     DX,DS           ; Lastbuf = Curbuf
        CMP     WORD PTR [SI.NEXTBUF],-1
        JZ      ISLAST
        LDS     SI,[SI.NEXTBUF] ; Curbuf = Curbuf.nextbuf
        JMP     SHORT BUFLOOP
ISLAST:                 ; If Curbuf is LAST
        MOV     WORD PTR [SI.NEXTBUF],DI
        MOV     WORD PTR [SI.NEXTBUF+2],ES      ; Curbuf.nextbuf = Buf
        MOV     WORD PTR ES:[DI.NEXTBUF],-1
        MOV     WORD PTR ES:[DI.NEXTBUF+2],-1      ; Buf is LAST
NRET:
        invoke  restore_world
        return

SHUFFLE:
        LDS     DI,[BUFFHEAD]
DECLOOP:
        CMP     [DI.BUFPRI],FREEPRI
        JZ      NODEC
        DEC     [DI.BUFPRI]
NODEC:
        LDS     DI,[DI.NEXTBUF]
        CMP     DI,-1
        JNZ     DECLOOP
        JMP     SHORT NRET
        ENDIF
        ENDIF

        invoke  save_world
        LES     CX,[DI.NEXTBUF]
        CMP     CX,-1           ; Buf is LAST?
        JZ      NRET            ; Buffer already last
        MOV     BP,ES           ; Pointsave = Buf.nextbuf
        PUSH    DS
        POP     ES              ; Buf is ES:DI
        LDS     SI,[BUFFHEAD]   ; Curbuf = HEAD
        CALL    POINTCOMP       ; Buf == HEAD?
        JNZ     BUFLOOP
        MOV     WORD PTR [BUFFHEAD],CX
        MOV     WORD PTR [BUFFHEAD+2],BP        ; HEAD = Pointsave
        JMP     SHORT LOOKEND

BUFLOOP:
        PUSH    DS
        PUSH    SI
        LDS     SI,[SI.NEXTBUF]
        CALL    POINTCOMP
        JZ      GOTTHEBUF
        POP     AX
        POP     AX
        JMP     SHORT BUFLOOP

GOTTHEBUF:
        POP     SI
        POP     DS
        MOV     WORD PTR [SI.NEXTBUF],CX        ; If Curbuf.nextbuf == buf
        MOV     WORD PTR [SI.NEXTBUF+2],BP      ; Curbuf.nextbuf = Pointsave
LOOKEND:
        PUSH    DS
        PUSH    SI
        LDS     SI,[SI.NEXTBUF]
        CMP     SI,-1
        JZ      GOTHEEND
        POP     AX
        POP     AX
        JMP     SHORT LOOKEND

GOTHEEND:
        POP     SI
        POP     DS
        MOV     WORD PTR [SI.NEXTBUF],DI
        MOV     WORD PTR [SI.NEXTBUF+2],ES      ; Curbuf.nextbuf = Buf
        MOV     WORD PTR ES:[DI.NEXTBUF],-1
        MOV     WORD PTR ES:[DI.NEXTBUF+2],-1      ; Buf is LAST
NRET:
        invoke  restore_world
        return

PLACEBUF    ENDP

        procedure   PLACEHEAD,NEAR
ASSUME  DS:NOTHING,ES:NOTHING

; SAME AS PLACEBUF except places buffer at head

        invoke  save_world
        PUSH    DS
        POP     ES
        LDS     SI,[BUFFHEAD]
        MOV     WORD PTR [BUFFHEAD],DI
        MOV     WORD PTR [BUFFHEAD+2],ES
        MOV     WORD PTR ES:[DI.NEXTBUF],SI
        MOV     WORD PTR ES:[DI.NEXTBUF+2],DS
LOOKEND2:
        PUSH    DS
        PUSH    SI
        LDS     SI,[SI.NEXTBUF]
        CALL    POINTCOMP
        JZ      GOTHEEND2
        POP     AX
        POP     AX
        JMP     SHORT LOOKEND2

GOTHEEND2:
        POP     SI
        POP     DS
        MOV     WORD PTR [SI.NEXTBUF],-1
        MOV     WORD PTR [SI.NEXTBUF+2],-1      ; Buf is LAST
        JMP     SHORT NRET

PLACEHEAD   ENDP

SUBTTL POINTCOMP -- 20 BIT POINTER COMPARE
PAGE
        procedure   PointComp,NEAR
ASSUME  DS:NOTHING,ES:NOTHING

; Compare DS:SI to ES:DI (or DS:DI to ES:SI) for equality
; DO NOT USE FOR < or >
; No Registers altered

        CMP     SI,DI
        retnz
        PUSH    CX
        PUSH    DX
        MOV     CX,DS
        MOV     DX,ES
        CMP     CX,DX
        POP     DX
        POP     CX
        return
PointComp   ENDP

SUBTTL GETBUFFR -- GET A SECTOR INTO A BUFFER
PAGE
        procedure   GETBUFFR,NEAR
ASSUME  DS:DOSGROUP,ES:NOTHING

; Input:
;       AH = Priority buffer is to have
;       AL = 0 means sector must be pre-read
;          ELSE no pre-read
;       DX = Desired physical sector number
;       ES:BP = Pointer to drive parameters
; Function:
;       Get the specified sector into one of the I/O buffers
;       And shuffle the queue
; Output:
;       [CURBUF] Points to the Buffer for the sector
; DX,ES:BP unchanged, all other registers destroyed

        XOR     SI,SI
        entry   GETBUFFRB
        MOV     [PREREAD],AX
        MOV     AL,ES:[BP.dpb_drive]
        LDS     DI,[LASTBUFFER]
ASSUME  DS:NOTHING
        CMP     DI,-1                           ; Recency pointer valid?
        JZ      SKBUF                           ; No
        CMP     DX,[DI.BUFSECNO]
        JNZ     SKBUF                           ; Wrong sector
        CMP     AL,[DI.BUFDRV]
        JNZ     SKBUF                           ; Wrong Drive
        JMP     SHORT JUSTBUF                   ; Just asked for same buffer
SKBUF:
        LDS     DI,[BUFFHEAD]
NXTBFF:
        CMP     DX,[DI.BUFSECNO]
        JNZ     BUMP
        CMP     AL,[DI.BUFDRV]
        JNZ     BUMP
        JMP     SHORT SETINF
BUMP:
        LDS     DI,[DI.NEXTBUF]
        CMP     DI,-1
        JNZ     NXTBFF
        LDS     DI,[BUFFHEAD]
        PUSH    SI
        PUSH    DX
        PUSH    BP
        PUSH    ES
        CALL    BUFWRITE        ; Write out the dirty buffer
        POP     ES
        POP     BP
        POP     DX
        POP     SI
RDSEC:                          ; Read in the new sector
        TEST    BYTE PTR [PREREAD],-1
        JNZ     SETBUF
        LEA     BX,[DI.BufInSiz]        ; Point at buffer
        MOV     CX,1
        PUSH    SI
        PUSH    DI
        PUSH    DX
        OR      SI,SI
        JZ      NORMSEC
        invoke  FATSECRD
        JMP     SHORT GOTTHESEC         ; Buffer is marked free if read barfs
NORMSEC:
        invoke  DREAD                   ; Buffer is marked free if read barfs
GOTTHESEC:
        POP     DX
        POP     DI
        POP     SI
SETBUF:
        MOV     [DI.BUFSECNO],DX
        MOV     WORD PTR [DI.BUFDRVDP],BP
        MOV     WORD PTR [DI.BUFDRVDP+2],ES
        XOR     AH,AH
        MOV     AL,ES:[BP.dpb_drive]
        MOV     WORD PTR [DI.BUFDRV],AX
SETINF:
        MOV     AX,1                            ; Default to not a FAT sector
        OR      SI,SI
        JZ      SETSTUFFOK
        MOV     AL,ES:[BP.dpb_FAT_count]
        MOV     AH,ES:[BP.dpb_FAT_size]
SETSTUFFOK:
        MOV     WORD PTR [DI.BUFWRTCNT],AX
        CALL    PLACEBUF
JUSTBUF:
        MOV     WORD PTR [CURBUF+2],DS
        MOV     WORD PTR [LASTBUFFER+2],DS
        PUSH    SS
        POP     DS
ASSUME  DS:DOSGROUP
        MOV     WORD PTR [CURBUF],DI
        MOV     WORD PTR [LASTBUFFER],DI
        return
GETBUFFR    ENDP


SUBTTL FLUSHBUF -- WRITE OUT DIRTY BUFFERS
PAGE
        procedure   FlushBuf,NEAR
ASSUME  DS:DOSGROUP,ES:NOTHING

; Input:
;       DS = DOSGROUP
;       AL = Physical unit number
;          = -1 for all units
; Function:
;       Write out all dirty buffers for unit, and flag them as clean
; DS Preserved, all others destroyed (ES too)

        LDS     DI,[BUFFHEAD]
ASSUME  DS:NOTHING
        MOV     AH,-1
NXTBUFF:
        CMP     [DI.BUFDRV],AH
        JZ      SKIPBFF                 ; Skip free buffers
        CMP     AH,AL
        JZ      DOBUFFER                ; Do all dirty buffers
        CMP     AL,[DI.BUFDRV]
        JNZ     SKIPBFF                 ; Buffer not for this unit
DOBUFFER:
        CMP     BYTE PTR [DI.BUFDIRTY],0
        JZ      SKIPBFF                 ; Buffer not dirty
        PUSH    AX
        PUSH    WORD PTR [DI.BUFDRV]
        CALL    BUFWRITE
        POP     AX
        XOR     AH,AH                   ; Buffer is clean
        CMP     AL,BYTE PTR [WPERR]
        JNZ     NOZAP
        MOV     AL,0FFH                 ; Invalidate buffer, it is inconsistent
NOZAP:
        MOV     WORD PTR [DI.BUFDRV],AX
        POP     AX                      ; Search info
SKIPBFF:
        LDS     DI,[DI.NEXTBUF]
        CMP     DI,-1
        JNZ     NXTBUFF
        PUSH    SS
        POP     DS
        return
FlushBuf    ENDP


SUBTTL BUFWRITE -- WRITE OUT A BUFFER IF DIRTY
PAGE
        procedure   BufWrite,NEAR
ASSUME  DS:NOTHING,ES:NOTHING

; Input:
;       DS:DI Points to the buffer
; Function:
;       Write out all the buffer if dirty.
; Output:
;       Buffer marked free
; DS:DI Preserved, ALL others destroyed (ES too)

        MOV     AX,00FFH
        XCHG    AX,WORD PTR [DI.BUFDRV] ; Free, in case write barfs
        CMP     AL,0FFH
        retz                            ; Buffer is free.
        OR      AH,AH
        retz                            ; Buffer is clean.
        CMP     AL,BYTE PTR [WPERR]
        retz                            ; If in WP error zap buffer
        LES     BP,[DI.BUFDRVDP]
        LEA     BX,[DI.BufInSiz]        ; Point at buffer
        MOV     DX,[DI.BUFSECNO]
        MOV     CX,WORD PTR [DI.BUFWRTCNT]
        MOV     AL,CH                   ; [DI.BUFWRTINC]
        XOR     CH,CH
        MOV     AH,CH
        PUSH    DI
WRTAGAIN:
        PUSH    CX
        PUSH    AX
        MOV     CX,1
        PUSH    BX
        PUSH    DX
        invoke  DWRITE          ; Write out the dirty buffer
        POP     DX
        POP     BX
        POP     AX
        POP     CX
        ADD     DX,AX
        LOOP    WRTAGAIN
        POP     DI
        return
BufWrite    ENDP

do_ext

CODE    ENDS
    END