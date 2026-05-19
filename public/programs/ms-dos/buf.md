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
description: "Buffer management in MS-DOS v2.0, showcasing innovations in file system handling and memory management."

summary:
  - point: "Efficient buffer management routines for I/O operations"
    link: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    link_label: "Buffer Management"
  - point: "Introduction of priority-based buffer handling"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Techniques for handling dirty buffers and ensuring data consistency"
    link: "https://en.wikipedia.org/wiki/Data_consistency"
    link_label: "Data Consistency"

enhancements:
  - id: "include-dosseg-symbols"
    line_start: 5
    line_end: 11
    title: "Symbolic inclusions: DOSSEG and DOSSYM"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "These lines establish the symbolic inclusions necessary for the assembly file to interact with the broader MS-DOS system. DOSSEG defines the memory segmentation model, while DOSSYM provides symbolic definitions for system-level constants and variables. In 1983, when MS-DOS v2.0 was released, memory management was a critical concern due to the limited hardware capabilities of the IBM PC, which had a maximum of 640 KB of RAM. By modularizing these definitions, Tim Paterson and the Microsoft team ensured that the code could be maintained and extended more easily. This approach to symbolic inclusions influenced later operating systems, where modularity and abstraction became standard practices. Developers of systems like Windows and Linux adopted similar techniques to manage complexity in their kernel and driver codebases."
  - id: "setvisit-buffer-scan"
    line_start: 43
    line_end: 70
    title: "Buffer scanning: resetting visit flags"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The SETVISIT subroutine resets the visit flags for all I/O buffers, ensuring that subsequent scans start from a clean slate. This was crucial in scenarios where hardware errors could interrupt scans, leaving some buffers marked as visited and others not. In the early 1980s, hard disk reliability was far from guaranteed, and error handling was a significant challenge. By implementing this pre-scan mechanism, MS-DOS ensured greater robustness in its buffer management. This technique laid the groundwork for more sophisticated error recovery methods in later operating systems, where buffer states are tracked meticulously to prevent data corruption. The concept of resetting flags or states during error recovery became a staple in systems programming, influencing file systems like NTFS and ext4."
  - id: "placebuf-buffer-reordering"
    line_start: 258
    line_end: 272
    title: "Reordering buffers in the queue"
    wikipedia_url: "https://en.wikipedia.org/wiki/Queue_(data_structure)"
    image_url: ""
    image_caption: ""
    content: "PLACEBUF is a pivotal subroutine that reorders buffers in the queue based on their priority. Buffers are removed from the queue and reinserted in their proper place, ensuring that higher-priority buffers are processed first. This approach reflects the influence of Unix-like systems, where priority-based scheduling was a common practice. In the constrained environment of the IBM PC, where CPU cycles and memory were limited, efficient buffer handling was essential for maintaining system performance. The priority-based buffer management introduced here influenced later operating systems and applications, including database systems and real-time operating systems, where resource allocation and scheduling are critical."
  - id: "getbuffr-sector-buffering"
    line_start: 409
    line_end: 427
    title: "Sector buffering: retrieving data efficiently"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_sector"
    image_url: ""
    image_caption: ""
    content: "GETBUFFR retrieves a specified disk sector into an I/O buffer, ensuring that the data is available for subsequent operations. This subroutine handles priority assignment and pre-reading, optimizing disk access patterns. In the era of MS-DOS v2.0, disk I/O was a bottleneck due to the slow speeds of floppy and hard drives. By implementing efficient buffering techniques, MS-DOS minimized the impact of these limitations, improving overall system responsiveness. The principles demonstrated in GETBUFFR—such as pre-reading and priority-based buffering—became foundational in the design of modern file systems and storage controllers, influencing technologies like RAID and SSD caching algorithms."
  - id: "flushbuf-dirty-buffer-cleaning"
    line_start: 456
    line_end: 487
    title: "Writing out dirty buffers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_consistency"
    image_url: ""
    image_caption: ""
    content: "FlushBuf writes out all dirty buffers for a specified unit, marking them as clean afterward. Dirty buffers contain modified data that has not yet been written to disk, and ensuring their consistency is critical for data integrity. In the early 1980s, file systems were prone to corruption due to unexpected power losses or system crashes. By implementing a mechanism to clean dirty buffers systematically, MS-DOS reduced the risk of data loss. This concept of flushing dirty buffers became a cornerstone in file system design, influencing later systems like FAT32, NTFS, and ext4, where journaling and transactional writes further enhanced data reliability."
  - id: "bufwrite-dirty-buffer-write"
    line_start: 488
    line_end: 502
    title: "Writing dirty buffers: ensuring data integrity"
    wikipedia_url: "https://en.wikipedia.org/wiki/Write_(computing)"
    image_url: ""
    image_caption: ""
    content: "BufWrite writes out a single dirty buffer if it contains modified data. This subroutine ensures that data changes are committed to disk, marking the buffer as free afterward. In the constrained environment of the IBM PC, where disk operations were slow and memory was limited, efficient buffer management was essential for maintaining system performance. BufWrite's approach to handling dirty buffers influenced later operating systems, where similar mechanisms were used to ensure data consistency and integrity. The principles demonstrated here can be seen in modern file systems, where write caching and journaling techniques prevent data corruption during unexpected shutdowns or crashes."

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