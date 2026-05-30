---
title: "ROM.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/ROM.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/ROM.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "rom"
order: 42
description: "This file contains assembly routines for MS-DOS v2.0, showcasing low-level disk management techniques that defined early PC operating systems."

summary:
  - point: "Introduces routines for cluster allocation and release"
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "File Allocation Table"
  - point: "Optimizes disk I/O by buffering sectors"
    link: "https://en.wikipedia.org/wiki/Disk_buffer"
    link_label: "Disk Buffer"
  - point: "Implements FAT-based file system operations"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Demonstrates early techniques for managing limited hardware resources"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Showcases Tim Paterson's influence on early PC software design"
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"

enhancements:
  - id: "include-dosseg-setup"
    line_start: 9
    line_end: 29
    title: "Setting Up Segment Definitions and Assumptions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Segment_(computing)"
    image_url: ""
    image_caption: ""
    content: "This section includes DOSSEG.ASM and sets up the segment definitions for the code. The `ASSUME` directive informs the assembler which segments are associated with specific registers, such as SS and CS. This setup was crucial in the segmented memory model of the Intel 8086, where memory was divided into segments to address the limitations of the 16-bit architecture. At the time, programmers had to carefully manage memory and segment registers to ensure efficient use of the limited address space (1MB maximum). This foundational setup allowed subsequent routines to operate within the constraints of the hardware, ensuring compatibility with the IBM PC's architecture. The segmented memory model remained a defining feature of x86 systems for years, influencing the design of operating systems like MS-DOS and early versions of Windows."
  - id: "name-rom-declaration"
    line_start: 35
    line_end: 91
    title: "Declaring ROM and Required Variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section declares the ROM segment and initializes variables needed for disk operations, such as cluster numbers, sector positions, and buffer addresses. These variables are integral to the File Allocation Table (FAT) system used by MS-DOS. FAT was a simple yet revolutionary file system that allowed efficient storage and retrieval of files on disk drives. By defining these variables upfront, the code ensures that subsequent routines can access and manipulate disk data reliably. The FAT system's simplicity made it widely adopted, influencing file systems in later operating systems, including Windows and even embedded systems."
  - id: "get-random-record"
    line_start: 93
    line_end: 183
    title: "Fetching Random Records from Disk"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The `GET_random_record` routine retrieves a random record from the disk based on the File Control Block (FCB). The FCB was a data structure used in MS-DOS to manage file metadata, such as file names, sizes, and locations on disk. This routine checks whether the FCB is extended and adjusts the pointer accordingly before fetching the record's position. In the early 1980s, disk access was slow, and random access routines like this were critical for optimizing file operations. The technique of using FCBs was eventually replaced by more advanced file metadata systems, but it laid the groundwork for structured file management in later operating systems."
  - id: "fndclus-skip-clusters"
    line_start: 185
    line_end: 186
    title: "Skipping Over Allocation Units"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The `FNDCLUS` routine skips over clusters in the FAT file system, updating registers to reflect the last cluster accessed and its position. Clusters are the basic allocation units in FAT, grouping sectors together to manage disk space efficiently. This routine ensures that file operations can traverse the cluster chain without reading unnecessary data, improving performance. In the early days of computing, optimizing disk access was vital due to the limited speed and capacity of storage devices. Techniques like this influenced later file systems, which continued to use clustering as a fundamental concept."
  - id: "bufsec-buffer-sector"
    line_start: 261
    line_end: 262
    title: "Buffering Sectors for Disk Transfers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_buffer"
    image_url: ""
    image_caption: ""
    content: "The `BUFSEC` routine ensures that the specified sector is loaded into a buffer before a transfer operation. It handles buffer flushing and sets up the transfer parameters, such as the transfer address and size. Buffering was a key technique for improving disk I/O performance, as it allowed data to be read and written in chunks rather than individual bytes. This approach reduced the overhead of frequent disk accesses, which were slow on early hardware. Disk buffering remains a fundamental concept in modern computing, influencing caching mechanisms in operating systems and hardware."
  - id: "bufrd-buffered-read"
    line_start: 331
    line_end: 409
    title: "Performing Buffered Reads from Disk"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_buffer"
    image_url: ""
    image_caption: ""
    content: "The `BUFRD` routine performs a partial sector read using a system buffer. It ensures that the data is read efficiently by leveraging the buffer and adjusting the transfer size based on the sector's size. Buffered reads were essential for optimizing disk I/O on early PCs, where direct disk access was slow and resource-intensive. By using a buffer, the routine minimizes the time spent waiting for disk operations, improving overall system performance. This technique influenced later advancements in disk caching and memory management."
  - id: "bufwrt-buffered-write"
    line_start: 411
    line_end: 412
    title: "Buffered Writes to Disk with Dirty Bit"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_buffer"
    image_url: ""
    image_caption: ""
    content: "The `BUFWRT` routine performs a partial sector write using a system buffer. It checks whether the sector has been written before and updates the buffer's dirty bit to indicate that it contains modified data. The dirty bit is a flag used to track changes in memory or buffers, ensuring that modified data is written back to disk. This routine demonstrates early techniques for managing disk writes efficiently, reducing the overhead of frequent write operations. The concept of dirty bits is still used in modern computing, particularly in caching and virtual memory systems."
  - id: "nextsec-compute-next-sector"
    line_start: 473
    line_end: 474
    title: "Computing the Next Sector for I/O"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The `NEXTSEC` routine calculates the next sector to read or write based on the current transfer state. It updates the cluster and sector positions, ensuring that file operations proceed sequentially. This calculation is crucial for maintaining the integrity of file operations in the FAT file system, where clusters and sectors are linked in a chain. Sequential access was a common pattern in early file systems, as it minimized disk seek times and improved performance. This routine highlights the challenges of managing disk I/O on limited hardware and the ingenuity of early programmers in overcoming these constraints."
  - id: "optimize-disk-request"
    line_start: 619
    line_end: 620
    title: "Optimizing User Disk Requests"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_buffer"
    image_url: ""
    image_caption: ""
    content: "The `OPTIMIZE` routine handles user disk requests efficiently by calculating the number of sectors to transfer and updating the transfer address. It uses the cluster mask to determine the sectors available in the current and next clusters, ensuring that disk operations are optimized for performance. This routine exemplifies the importance of minimizing disk access times in early computing, where hardware limitations required careful planning and optimization. The techniques used here influenced the development of more advanced disk scheduling algorithms in modern operating systems."
  - id: "allocate-disk-space"
    line_start: 925
    line_end: 1005
    title: "Assigning Disk Space for Files"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The `ALLOCATE` routine assigns disk space for files by updating the FAT and the FCB. It calculates the number of clusters needed and checks for available space, setting the carry flag if insufficient space is found. This routine demonstrates the challenges of managing disk space on early PCs, where storage was limited and fragmentation was a common issue. By efficiently allocating clusters, the routine ensures that files can be stored and accessed reliably. The techniques used here influenced later file systems, which incorporated more advanced methods for managing disk space and reducing fragmentation."
  - id: "release-endp-cleanup"
    line_start: 1007
    line_end: 1045
    title: "How MS-DOS Cleaned Up After Disk Operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `RELEASE` subroutine is a cleanup routine, likely responsible for releasing resources or resetting states after disk operations. While the exact implementation is not visible in this chunk, its placement at the end of a series of disk-related subroutines suggests it played a key role in ensuring the system remained stable and efficient. In the early 1980s, resource management was critical due to the limited memory and processing power of the IBM PC, which shipped with as little as 16KB of RAM. Tim Paterson and the Microsoft team optimized MS-DOS to run within these constraints, often relying on manual resource management routines like `RELEASE`. This approach influenced later operating systems, which adopted similar cleanup mechanisms to ensure reliability in low-resource environments. While modern systems automate much of this, the principles established here laid the groundwork for efficient memory and resource handling in software development."
  - id: "get-eof-file-cluster"
    line_start: 1047
    line_end: 1048
    title: "Finding the Last Cluster in a File"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_allocation_table"
    image_url: ""
    image_caption: ""
    content: "The `GETEOF` subroutine calculates the last cluster of a file on disk. In MS-DOS, files are stored in clusters, which are sequential blocks of disk space managed by the File Allocation Table (FAT). This routine uses the `UNPACK` procedure to retrieve cluster information and checks whether the cluster value indicates the end of the file (`0FF8H` or higher). If so, it exits; otherwise, it updates the cluster pointer (`BX`) and loops. This low-level manipulation of the FAT was essential for MS-DOS's file system, which had to operate efficiently on the limited hardware of the IBM PC. The FAT system, though simple, became widely adopted and influenced file systems in later operating systems, including Windows. The ability to directly access and manipulate disk structures gave developers fine-grained control, a necessity in the era of constrained hardware."
  - id: "do-ext-final-section"
    line_start: 1051
    line_end: 1055
    title: "The Final Lines of MS-DOS 2.0's ROM.ASM"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `do_ext` label marks the end of the ROM.ASM file, likely serving as a placeholder or a marker for the file's conclusion. The `CODE ENDS` directive signals the end of the code segment, and the `END` statement marks the termination of the assembly source file. These final lines reflect the structured organization of assembly code in the early 1980s, where clear segmentation was necessary for readability and debugging. This meticulous attention to detail was characteristic of Tim Paterson's work and was essential for ensuring the reliability of MS-DOS, which became the foundation of Microsoft's dominance in the PC market. The conventions established in these early assembly files influenced the design of subsequent operating systems and software, emphasizing the importance of clear structure and documentation in codebases."

---

```asm
;

; Disk utilities of MSDOS

;



INCLUDE DOSSEG.ASM



CODE    SEGMENT BYTE PUBLIC  'CODE'

        ASSUME  SS:DOSGROUP,CS:DOSGROUP



.XLIST

.xcref

INCLUDE DOSSYM.ASM

INCLUDE DEVSYM.ASM

.cref

.list



TITLE   ROM - miscellaneous routines

NAME    ROM



        i_need  CLUSNUM,WORD

        i_need  NEXTADD,WORD

        i_need  LASTPOS,WORD

        i_need  SECCLUSPOS,BYTE

        i_need  FATBYT,WORD

        i_need  RECPOS,4

        i_need  THISFCB,DWORD

        i_need  TRANS,BYTE

        i_need  BYTCNT1,WORD

        i_need  CURBUF,DWORD

        i_need  BYTSECPOS,WORD

        i_need  DMAADD,WORD

        i_need  SECPOS,WORD

        i_need  VALSEC,WORD



        procedure   GET_random_record,NEAR

        entry   GETRRPOS1

        MOV     CX,1

        entry   GetRRPos

        MOV     DI,DX

        CMP     BYTE PTR [DI],-1

        JNZ     NORMFCB1

        ADD     DI,7

NORMFCB1:

        MOV     AX,WORD PTR [DI.fcb_RR]

        MOV     DX,WORD PTR [DI.fcb_RR+2]

        return

GET_random_record   ENDP



SUBTTL FNDCLUS -- Skip over allocation units

PAGE

        procedure   FNDCLUS,NEAR

ASSUME  DS:DOSGROUP,ES:NOTHING



; Inputs:

;       CX = No. of clusters to skip

;       ES:BP = Base of drive parameters

;       [THISFCB] point to FCB

; Outputs:

;       BX = Last cluster skipped to

;       CX = No. of clusters remaining (0 unless EOF)

;       DX = Position of last cluster

; DI destroyed. No other registers affected.



        PUSH    ES

        LES     DI,[THISFCB]

        MOV     BX,ES:[DI.fcb_LSTCLUS]  ; fcb_lstclus is packed with dir clus

        AND     BX,0FFFh                ; get rid of dir nibble

        MOV     DX,ES:[DI.fcb_CLUSPOS]

        OR      BX,BX

        JZ      NOCLUS

        SUB     CX,DX

        JNB     FINDIT

        ADD     CX,DX

        XOR     DX,DX

        MOV     BX,ES:[DI.fcb_FIRCLUS]

FINDIT:

        POP     ES

        JCXZ    RET10

entry   SKPCLP

        invoke  UNPACK

        CMP     DI,0FF8H

        JAE     RET10

        XCHG    BX,DI

        INC     DX

        LOOP    SKPCLP

RET10:  return



NOCLUS:

        POP     ES

        INC     CX

        DEC     DX

        return

FNDCLUS ENDP



SUBTTL BUFSEC -- BUFFER A SECTOR AND SET UP A TRANSFER

PAGE

        procedure   BUFSEC,NEAR

ASSUME  DS:DOSGROUP,ES:NOTHING



; Inputs:

;       AH = priority of buffer

;       AL = 0 if buffer must be read, 1 if no pre-read needed

;       ES:BP = Base of drive parameters

;       [CLUSNUM] = Physical cluster number

;       [SECCLUSPOS] = Sector position of transfer within cluster

;       [BYTCNT1] = Size of transfer

; Function:

;       Insure specified sector is in buffer, flushing buffer before

;       read if necessary.

; Outputs:

;       ES:DI = Pointer to buffer

;       SI = Pointer to transfer address

;       CX = Number of bytes

;       [NEXTADD] updated

;       [TRANS] set to indicate a transfer will occur



        MOV     DX,[CLUSNUM]

        MOV     BL,[SECCLUSPOS]

        CALL    FIGREC

        invoke  GETBUFFR

        MOV     BYTE PTR [TRANS],1      ; A transfer is taking place

        MOV     SI,[NEXTADD]

        MOV     DI,SI

        MOV     CX,[BYTCNT1]

        ADD     DI,CX

        MOV     [NEXTADD],DI

        LES     DI,[CURBUF]

        ADD     DI,BUFINSIZ             ; Point to buffer

        ADD     DI,[BYTSECPOS]

        return

BUFSEC  ENDP



SUBTTL BUFRD, BUFWRT -- PERFORM BUFFERED READ AND WRITE

PAGE

        procedure   BUFRD,NEAR

ASSUME  DS:DOSGROUP,ES:NOTHING



; Do a partial sector read via one of the system buffers

; ES:BP Points to DPB



        PUSH    ES

        MOV     AX,LBRPRI SHL 8         ; Assume last byte read

        CALL    BUFSEC

        MOV     BX,ES

        MOV     ES,[DMAADD+2]

        MOV     DS,BX

ASSUME  DS:NOTHING

        XCHG    DI,SI

        SHR     CX,1

        JNC     EVENRD

        MOVSB

EVENRD:

        REP     MOVSW

        POP     ES

        LDS     DI,[CURBUF]

        LEA     BX,[DI.BufInSiz]

        SUB     SI,BX                   ; Position in buffer

        invoke  PLACEBUF

        CMP     SI,ES:[BP.dpb_sector_size]

        JB      RBUFPLACED

        invoke  PLACEHEAD

RBUFPLACED:

        PUSH    SS

        POP     DS

        return

BUFRD   ENDP



        procedure   BUFWRT,NEAR

ASSUME  DS:DOSGROUP,ES:NOTHING



; Do a partial sector write via one of the system buffers

; ES:BP Points to DPB



        MOV     AX,[SECPOS]

        INC     AX              ; Set for next sector

        MOV     [SECPOS],AX

        CMP     AX,[VALSEC]     ; Has sector been written before?

        MOV     AL,1

        JA      NOREAD          ; Skip preread if SECPOS>VALSEC

        XOR     AL,AL

NOREAD:

        PUSH    ES

        CALL    BUFSEC

        MOV     DS,[DMAADD+2]

ASSUME  DS:NOTHING

        SHR     CX,1

        JNC     EVENWRT

        MOVSB

EVENWRT:

        REP     MOVSW

        POP     ES

        LDS     BX,[CURBUF]

        MOV     BYTE PTR [BX.BUFDIRTY],1

        LEA     SI,[BX.BufInSiz]

        SUB     DI,SI                   ; Position in buffer

        MOV     SI,DI

        MOV     DI,BX

        invoke  PLACEBUF

        CMP     SI,ES:[BP.dpb_sector_size]

        JB      WBUFPLACED

        invoke  PLACEHEAD

WBUFPLACED:

        PUSH    SS

        POP     DS

        return

BUFWRT  ENDP



SUBTTL NEXTSEC -- Compute next sector to read or write

PAGE

        procedure   NEXTSEC,NEAR

ASSUME  DS:DOSGROUP,ES:NOTHING



; Compute the next sector to read or write

; ES:BP Points to DPB



        TEST    BYTE PTR [TRANS],-1

        JZ      CLRET

        MOV     AL,[SECCLUSPOS]

        INC     AL

        CMP     AL,ES:[BP.dpb_cluster_mask]

        JBE     SAVPOS

        MOV     BX,[CLUSNUM]

        CMP     BX,0FF8H

        JAE     NONEXT

        invoke  UNPACK

        MOV     [CLUSNUM],DI

        INC     [LASTPOS]

        MOV     AL,0

SAVPOS:

        MOV     [SECCLUSPOS],AL

CLRET:

        CLC

        return

NONEXT:

        STC

        return

NEXTSEC ENDP



SUBTTL OPTIMIZE -- DO A USER DISK REQUEST WELL

PAGE

        procedure   OPTIMIZE,NEAR

ASSUME  DS:DOSGROUP,ES:NOTHING



; Inputs:

;       BX = Physical cluster

;       CX = No. of records

;       DL = sector within cluster

;       ES:BP = Base of drives parameters

;       [NEXTADD] = transfer address

; Outputs:

;       AX = No. of records remaining

;       BX = Transfer address

;       CX = No. or records to be transferred

;       DX = Physical sector address

;       DI = Next cluster

;       [CLUSNUM] = Last cluster accessed

;       [NEXTADD] updated

; ES:BP unchanged. Note that segment of transfer not set.



        PUSH    DX

        PUSH    BX

        MOV     AL,ES:[BP.dpb_cluster_mask]

        INC     AL              ; Number of sectors per cluster

        MOV     AH,AL

        SUB     AL,DL           ; AL = Number of sectors left in first cluster

        MOV     DX,CX

        MOV     CX,0

OPTCLUS:

; AL has number of sectors available in current cluster

; AH has number of sectors available in next cluster

; BX has current physical cluster

; CX has number of sequential sectors found so far

; DX has number of sectors left to transfer

; ES:BP Points to DPB

; ES:SI has FAT pointer

        invoke  UNPACK

        ADD     CL,AL

        ADC     CH,0

        CMP     CX,DX

        JAE     BLKDON

        MOV     AL,AH

        INC     BX

        CMP     DI,BX

        JZ      OPTCLUS

        DEC     BX

FINCLUS:

        MOV     [CLUSNUM],BX    ; Last cluster accessed

        SUB     DX,CX           ; Number of sectors still needed

        PUSH    DX

        MOV     AX,CX

        MUL     ES:[BP.dpb_sector_size]  ; Number of sectors times sector size

        MOV     SI,[NEXTADD]

        ADD     AX,SI           ; Adjust by size of transfer

        MOV     [NEXTADD],AX

        POP     AX              ; Number of sectors still needed

        POP     DX              ; Starting cluster

        SUB     BX,DX           ; Number of new clusters accessed

        ADD     [LASTPOS],BX

        POP     BX              ; BL = sector postion within cluster

        invoke  FIGREC

        MOV     BX,SI

        return

BLKDON:

        SUB     CX,DX           ; Number of sectors in cluster we don't want

        SUB     AH,CL           ; Number of sectors in cluster we accepted

        DEC     AH              ; Adjust to mean position within cluster

        MOV     [SECCLUSPOS],AH

        MOV     CX,DX           ; Anyway, make the total equal to the request

        JMP     SHORT FINCLUS

OPTIMIZE        ENDP



SUBTTL FIGREC -- Figure sector in allocation unit

PAGE

        procedure   FIGREC,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DX = Physical cluster number

;       BL = Sector postion within cluster

;       ES:BP = Base of drive parameters

; Outputs:

;       DX = physical sector number

; No other registers affected.



        PUSH    CX

        MOV     CL,ES:[BP.dpb_cluster_shift]

        DEC     DX

        DEC     DX

        SHL     DX,CL

        OR      DL,BL

        ADD     DX,ES:[BP.dpb_first_sector]

        POP     CX

        return

FIGREC  ENDP



SUBTTL GETREC -- Figure record in file from fcb

PAGE

        procedure   GETREC,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DS:DX point to FCB

; Outputs:

;       CX = 1

;       DX:AX = Record number determined by fcb_EXTENT and fcb_NR fields

;       DS:DI point to FCB

; No other registers affected.



        MOV     DI,DX

        CMP     BYTE PTR [DI],-1        ; Check for extended FCB

        JNZ     NORMFCB2

        ADD     DI,7

NORMFCB2:

        MOV     CX,1

        MOV     AL,[DI.fcb_NR]

        MOV     DX,[DI.fcb_EXTENT]

        SHL     AL,1

        SHR     DX,1

        RCR     AL,1

        MOV     AH,DL

        MOV     DL,DH

        MOV     DH,0

        return

GETREC  ENDP



SUBTTL ALLOCATE -- Assign disk space

PAGE

        procedure   ALLOCATE,NEAR

ASSUME  DS:DOSGROUP,ES:NOTHING



; Inputs:

;       BX = Last cluster of file (0 if null file)

;       CX = No. of clusters to allocate

;       DX = Position of cluster BX

;       ES:BP = Base of drive parameters

;       [THISFCB] = Points to FCB

; Outputs:

;       IF insufficient space

;         THEN

;       Carry set

;       CX = max. no. of records that could be added to file

;         ELSE

;       Carry clear

;       BX = First cluster allocated

;       FAT is fully updated including dirty bit

;       fcb_FIRCLUS field of FCB set if file was null

; SI,BP unchanged. All other registers destroyed.



        PUSH    BX                      ; save the fat byte

        XOR     BX,BX

        invoke  UNPACK

        MOV     [FATBYT],DI

        POP     BX



        PUSH    DX

        PUSH    CX

        PUSH    BX

        MOV     AX,BX

CLUSALLOC:

        MOV     DX,BX

FINDFRE:

        INC     BX

        CMP     BX,ES:[BP.dpb_max_cluster]

        JLE     TRYOUT

        CMP     AX,1

        JG      TRYIN

        POP     BX

        MOV     DX,0FFFH

        invoke  RELBLKS

        POP     AX              ; No. of clusters requested

        SUB     AX,CX           ; AX=No. of clusters allocated

        POP     DX

        invoke  RESTFATBYT

        INC     DX              ; Position of first cluster allocated

        ADD     AX,DX           ; AX=max no. of cluster in file

        MOV     DL,ES:[BP.dpb_cluster_mask]

        MOV     DH,0

        INC     DX              ; DX=records/cluster

        MUL     DX              ; AX=max no. of records in file

        MOV     CX,AX

        SUB     CX,WORD PTR [RECPOS]    ; CX=max no. of records that could be written

        JA      MAXREC

        XOR     CX,CX           ; If CX was negative, zero it

MAXREC:

        STC

        return



TRYOUT:

        invoke  UNPACK

        JZ      HAVFRE

TRYIN:

        DEC     AX

        JLE     FINDFRE

        XCHG    AX,BX

        invoke  UNPACK

        JZ      HAVFRE

        XCHG    AX,BX

        JMP     SHORT FINDFRE

HAVFRE:

        XCHG    BX,DX

        MOV     AX,DX

        invoke  PACK

        MOV     BX,AX

        LOOP    CLUSALLOC

        MOV     DX,0FFFH

        invoke  PACK

        POP     BX

        POP     CX              ; Don't need this stuff since we're successful

        POP     DX

        invoke  UNPACK

        invoke  RESTFATBYT

        XCHG    BX,DI

        OR      DI,DI

        retnz

        PUSH    ES

        LES     DI,[THISFCB]

        AND     BX,0FFFh

        MOV     ES:[DI.fcb_FIRCLUS],BX

        AND     ES:[DI.fcb_LSTCLUS],0F000h  ; clear out old lstclus

        OR      ES:[DI.fcb_LSTCLUS],BX      ; or the new guy in...

        POP     ES

        return

ALLOCATE    ENDP



        procedure   RESTFATBYT,NEAR

ASSUME  DS:DOSGROUP,ES:NOTHING



        PUSH    BX

        PUSH    DX

        PUSH    DI

        XOR     BX,BX

        MOV     DX,[FATBYT]

        invoke  PACK

        POP     DI

        POP     DX

        POP     BX

        return

RESTFATBYT  ENDP



SUBTTL RELEASE -- DEASSIGN DISK SPACE

PAGE

        procedure   RELEASE,NEAR

ASSUME  DS:DOSGROUP,ES:NOTHING



; Inputs:

;       BX = Cluster in file

;       ES:BP = Base of drive parameters

; Function:

;       Frees cluster chain starting with [BX]

; AX,BX,DX,DI all destroyed. Other registers unchanged.



        XOR     DX,DX

entry   RELBLKS

; Enter here with DX=0FFFH to put an end-of-file mark

; in the first cluster and free the rest in the chain.

        invoke  UNPACK

        retz

        MOV     AX,DI

        invoke  PACK

        CMP     AX,0FF8H

        MOV     BX,AX

        JB      RELEASE

RET12:  return

RELEASE ENDP



SUBTTL GETEOF -- Find the end of a file

PAGE

        procedure   GETEOF,NEAR

ASSUME  DS:DOSGROUP,ES:NOTHING



; Inputs:

;       ES:BP Points to DPB

;       BX = Cluster in a file

;       DS = CS

; Outputs:

;       BX = Last cluster in the file

; DI destroyed. No other registers affected.



        invoke  UNPACK

        CMP     DI,0FF8H

        JAE     RET12

        MOV     BX,DI

        JMP     SHORT GETEOF

GETEOF  ENDP



do_ext



CODE    ENDS

    END


```