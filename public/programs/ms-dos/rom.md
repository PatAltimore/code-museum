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
description: "This file contains assembly routines for managing disk operations in MS-DOS 2.0, showcasing early techniques for file system and disk management on the IBM PC."

summary:
  - point: "Introduced buffered sector reads and writes for efficient disk I/O"
    link: "https://en.wikipedia.org/wiki/Disk_buffer"
    link_label: "Disk Buffer"
  - point: "Optimized cluster allocation inspired by FAT file system design"
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "File Allocation Table"
  - point: "Implemented routines for managing file control blocks (FCBs)"
    link: "https://en.wikipedia.org/wiki/File_Control_Block"
    link_label: "File Control Block"
  - point: "Demonstrated early memory management tricks for constrained environments"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Showcased techniques for handling fragmented disk space"
    link: "https://en.wikipedia.org/wiki/Disk_fragmentation"
    link_label: "Disk Fragmentation"

enhancements:
  - id: "include-dosseg-and-dossym"
    line_start: 9
    line_end: 21
    title: "Why Include Files Were Crucial in Assembly"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "The INCLUDE directives here pull in external assembly files, such as DOSSEG.ASM and DOSSYM.ASM, which define essential segments and symbols used throughout the program. This modular approach allowed developers to reuse common definitions and maintain consistency across large codebases. In the early 1980s, assembly programming was notoriously error-prone, and these include files helped reduce redundancy and errors. Tim Paterson's use of modularity reflects a growing trend in software development at the time, influenced by structured programming principles. This technique became standard practice in assembly and later influenced higher-level languages, where header files and libraries serve similar purposes."
  - id: "name-rom-and-variable-definitions"
    line_start: 35
    line_end: 83
    title: "Defining Variables for Disk Operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Variable_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "This section defines variables and memory locations critical for disk operations, such as cluster numbers, sector positions, and buffer addresses. These variables are stored in specific memory locations to facilitate direct manipulation by the CPU. In the constrained environment of the IBM PC, where memory was limited to 640KB, every byte mattered. Paterson's careful allocation of memory reflects the necessity of optimizing for hardware constraints. These definitions laid the groundwork for efficient disk I/O operations, influencing later file system designs, including FAT and NTFS."
  - id: "get-random-record"
    line_start: 69
    line_end: 93
    title: "How MS-DOS Found Random Records"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Control_Block"
    image_url: ""
    image_caption: ""
    content: "The GET_random_record routine retrieves a specific record from a file control block (FCB). It uses assembly instructions to navigate the FCB structure, checking for extended FCBs and adjusting pointers accordingly. This approach was essential for managing files in MS-DOS, which relied on FCBs before transitioning to handle-based file management in later versions. The routine reflects the influence of CP/M, which also used FCBs, and demonstrates how MS-DOS inherited and adapted techniques from earlier operating systems. This method influenced the development of more sophisticated file systems, such as FAT, which improved random access and file management efficiency."
  - id: "fndclus-skip-clusters"
    line_start: 101
    line_end: 185
    title: "Skipping Clusters in the File Allocation Table"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The FNDCLUS routine skips over clusters in the file allocation table (FAT) to locate a specific cluster. It uses logical operations to manipulate cluster numbers and positions, ensuring efficient traversal of the FAT structure. This routine highlights the challenges of managing fragmented disk space on early PCs, where storage was limited and fragmentation was common. By optimizing cluster traversal, MS-DOS improved file access speeds, setting the stage for later enhancements in file system design. Techniques like these influenced the development of defragmentation tools and more advanced file systems, such as NTFS."
  - id: "bufsec-buffer-sector"
    line_start: 193
    line_end: 261
    title: "The Buffer That Made Disk I/O Faster"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_buffer"
    image_url: ""
    image_caption: ""
    content: "BUFSEC ensures that a specified sector is in memory before performing a transfer, flushing buffers if necessary. This routine prioritizes efficient disk I/O by reducing the need for repeated reads and writes. In the early 1980s, disk access was slow, and buffering was a critical optimization. Paterson's implementation reflects the influence of Unix-like systems, which also used buffering to improve performance. This technique became a cornerstone of modern operating systems, influencing how disk caching and memory management are handled today."
  - id: "bufrd-buffered-read"
    line_start: 269
    line_end: 331
    title: "Reading Data Without Slowing Down"
    wikipedia_url: "https://en.wikipedia.org/wiki/Read_(system_call)"
    image_url: ""
    image_caption: ""
    content: "The BUFRD routine performs a buffered read operation, using system buffers to optimize partial sector reads. It adjusts pointers and memory locations to ensure data is read efficiently. This approach was vital for early PCs, where disk access speeds were a bottleneck. By leveraging buffers, MS-DOS reduced the overhead of disk I/O, improving overall system performance. Buffered reads became a standard technique in operating systems, influencing later designs like Linux and Windows."
  - id: "bufwrt-buffered-write"
    line_start: 411
    line_end: 411
    title: "Writing Data Without Wasting Time"
    wikipedia_url: "https://en.wikipedia.org/wiki/Write_(system_call)"
    image_url: ""
    image_caption: ""
    content: "BUFWRT handles buffered write operations, ensuring that data is written to disk efficiently. It checks if a sector has been written before and skips unnecessary operations, reducing disk wear and improving speed. This routine reflects the constraints of early PCs, where minimizing disk access was crucial. Buffered writes became a standard optimization in operating systems, influencing how modern systems handle disk I/O and caching."
  - id: "nextsec-compute-next-sector"
    line_start: 473
    line_end: 473
    title: "Finding the Next Sector to Write"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_sector"
    image_url: ""
    image_caption: ""
    content: "NEXTSEC calculates the next sector to read or write, updating cluster and sector positions as needed. This routine ensures that disk operations proceed smoothly, even in fragmented environments. Early PCs often struggled with disk fragmentation, and routines like NEXTSEC were essential for maintaining file system integrity. The logic here influenced later tools for managing disk fragmentation and optimizing file systems, such as defragmentation utilities and advanced allocation algorithms."
  - id: "optimize-disk-request"
    line_start: 619
    line_end: 619
    title: "Optimizing Disk Requests for Speed"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_access"
    image_url: ""
    image_caption: ""
    content: "OPTIMIZE handles user disk requests by calculating the number of records to transfer and updating cluster positions. This routine prioritizes efficient disk access, reducing the overhead of fragmented reads and writes. In the constrained environment of the IBM PC, optimizing disk operations was critical for performance. Paterson's approach reflects the influence of Unix-like systems, which also emphasized efficient disk access. This technique influenced later operating systems, shaping how disk I/O is managed in modern environments."
  - id: "allocate-disk-space"
    line_start: 925
    line_end: 925
    title: "How MS-DOS Assigned Disk Space"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_partitioning"
    image_url: ""
    image_caption: ""
    content: "ALLOCATE assigns disk space by updating the file allocation table (FAT) and file control block (FCB). It checks for available clusters and marks them as used, ensuring efficient use of disk space. This routine reflects the challenges of managing storage on early PCs, where disk space was limited and fragmentation was common. Paterson's implementation influenced later file systems, such as FAT32 and NTFS, which built on these principles to improve storage efficiency and reliability."
  - id: "release-endp-cleanup-routine"
    line_start: 1007
    line_end: 1007
    title: "The Cleanup Routine That Frees Resources"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `RELEASE` routine is a cleanup procedure designed to free resources and ensure proper memory management. In this section, the code likely handles the release of allocated memory or file handles, ensuring that MS-DOS maintains stability and avoids resource leaks. This was critical in the constrained environment of early PCs, where memory was limited to 640KB and efficient management was paramount. In 1983, when MS-DOS v2.0 was released, the IBM PC had become a dominant force in personal computing. The operating system needed to handle increasingly complex tasks, including multitasking-like operations and device-independent file management. The `RELEASE` routine reflects this shift, as it ensures that resources are properly cleaned up after use, a practice borrowed from more advanced operating systems like Unix. This approach influenced later operating systems, including Windows, which adopted similar resource management techniques. Efficient cleanup routines became standard practice in software development, ensuring that programs could run reliably without exhausting system resources. Developers studying MS-DOS source code often cite these routines as foundational examples of low-level memory and resource management."
  - id: "get-eof-find-end-of-file"
    line_start: 1047
    line_end: 1047
    title: "Finding the Last Cluster in a File"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The `GETEOF` routine calculates the last cluster of a file in the MS-DOS file system. It takes as input a cluster number and a pointer to the Disk Parameter Block (DPB), then determines the final cluster in the file. This is achieved by invoking the `UNPACK` routine and comparing the result to a predefined value (`0FF8H`), which represents the end-of-file marker in the FAT (File Allocation Table). In the early 1980s, file systems were evolving rapidly. MS-DOS adopted the FAT system, which was simple yet effective for managing files on floppy disks and early hard drives. The `GETEOF` routine demonstrates how MS-DOS leveraged FAT to perform file operations efficiently, even on hardware with limited processing power and memory. This technique became a cornerstone of MS-DOS file management and influenced later operating systems, including Windows, which continued to use FAT variants for decades. The concept of cluster-based file management remains relevant today, especially in embedded systems and portable storage devices that still use FAT due to its simplicity and widespread support."
  - id: "do-ext-final-code-section"
    line_start: 1051
    line_end: 1057
    title: "The Final Code Section: Wrapping Up MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `do_ext` section marks the final lines of the MS-DOS v2.0 ROM.ASM file. While the exact functionality of `do_ext` is unclear from the provided snippet, its placement suggests it serves as a concluding routine or placeholder for additional extensions. The `CODE ENDS` directive formally ends the code segment, signaling the completion of the assembly file. By 1983, MS-DOS was becoming a critical piece of software for personal computing, and its modular design allowed for future extensions and adaptations. This final section reflects the foresight of its developers, who anticipated the need for scalability and maintainability in an operating system that would be licensed to dozens of OEMs. The modularity and extensibility of MS-DOS influenced the design of subsequent operating systems, including Windows and other DOS-based systems. It demonstrated the importance of structuring code to accommodate future growth, a principle that remains a cornerstone of software engineering today."

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
