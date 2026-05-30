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
description: "Buffer management routines in MS-DOS v2.0, showcasing techniques for handling I/O buffers efficiently in constrained hardware environments."

summary:
  - point: "Introduced buffer priority management for I/O operations"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Optimized buffer reuse to minimize disk access"
    link: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    link_label: "Buffer"
  - point: "Implemented error handling for interrupted buffer scans"
    link: "https://en.wikipedia.org/wiki/Error_detection_and_correction"
    link_label: "Error handling"
  - point: "Used assembly-level pointer comparisons for buffer manipulation"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly language"
  - point: "Inspired later operating systems in buffer and queue management"
    link: "https://en.wikipedia.org/wiki/Operating_system"
    link_label: "Operating systems"

enhancements:
  - id: "buffer-scan-reset"
    line_start: 41
    line_end: 71
    title: "What Happens When a Buffer Scan Fails?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_detection_and_correction"
    image_url: ""
    image_caption: ""
    content: "This section resets all 'visit flags' in the I/O buffer chain to zero, ensuring that subsequent scans can proceed without interruption. The programmer, Tim Paterson, was addressing a critical issue: hard disk errors could halt a scan midway, leaving some buffers marked as visited and others not. This inconsistency could corrupt subsequent operations. The solution involves iterating through the buffer chain and clearing the flags using a loop. In 1983, disk errors were common due to hardware limitations, and robust error handling was essential for reliability. This approach influenced later systems by emphasizing the importance of preemptive error correction in buffer management. Techniques like this laid the groundwork for modern file systems that prioritize consistency and recovery."
  - id: "priority-based-buffer-placement"
    line_start: 258
    line_end: 288
    title: "The Trick That Made Buffers Smarter"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The PLACEBUF routine is a sophisticated mechanism for managing I/O buffers based on priority. It removes a buffer from the queue and reinserts it in the correct position, ensuring that higher-priority buffers are processed first. This was a direct response to the need for efficient disk access in the constrained hardware environment of early PCs. By dynamically adjusting buffer priorities and positions, MS-DOS could optimize disk operations, reducing latency and improving performance. This technique was inspired by queue management algorithms in earlier systems but adapted for the specific needs of MS-DOS. It influenced later operating systems and database management systems, where similar priority-based buffer management strategies are used to optimize performance."
  - id: "sector-buffer-reuse"
    line_start: 408
    line_end: 450
    title: "How MS-DOS Avoided Redundant Disk Reads"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "GETBUFFR retrieves a physical disk sector into an I/O buffer, prioritizing reuse of existing buffers whenever possible. The routine checks if the desired sector is already in a buffer and skips the read operation if it is. This optimization minimizes disk access, which was crucial for performance on early PCs with slow disk drives. The routine also handles pre-reading and shuffling of buffers to ensure efficient use of memory. In the early 1980s, disk access was a major bottleneck, and techniques like this were vital for achieving acceptable performance. This approach influenced later systems, including caching mechanisms in modern operating systems and database engines, where buffer reuse is a standard practice."
  - id: "dirty-buffer-flush"
    line_start: 451
    line_end: 494
    title: "How MS-DOS Kept Buffers Clean"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cache_(computing)"
    image_url: ""
    image_caption: ""
    content: "FlushBuf writes out all 'dirty' buffers—buffers containing modified data—to disk and marks them as clean. This ensures data integrity and prevents loss during system crashes or power failures. The routine iterates through the buffer chain, checking each buffer's 'dirty' flag and writing it to disk if necessary. In the era of MS-DOS, data integrity was a significant concern due to the lack of advanced error correction mechanisms. This routine reflects the meticulous attention to detail required to ensure reliable operation on early PCs. The concept of dirty buffer flushing became a standard feature in later operating systems and database systems, where it is critical for maintaining consistency in cached data."
  - id: "buffer-write-optimization"
    line_start: 495
    line_end: 503
    title: "The Buffer Write That Never Failed"
    wikipedia_url: "https://en.wikipedia.org/wiki/Write_(computing)"
    image_url: ""
    image_caption: ""
    content: "BufWrite writes a buffer to disk only if it is marked as 'dirty' and not already free. The routine uses a loop to handle multi-sector writes, ensuring that all data is correctly written even if interruptions occur. This was a critical feature in MS-DOS, where disk errors and write failures were common. By marking buffers as free before attempting a write, the system could recover gracefully from errors without leaving data in an inconsistent state. This approach influenced later systems by emphasizing the importance of robust error handling in write operations. Techniques like this are still used in modern file systems and storage solutions to ensure data reliability."

---

```asm
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
```