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
description: "MS-DOS v2.0's disk utilities — a pivotal rewrite inspired by Unix, enabling subdirectories and advanced file handling."

summary:
  - point: "Introduces Unix-inspired file handling concepts like subdirectories and pipes."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Optimized disk access routines for FAT file system management."
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "File Allocation Table"
  - point: "Efficient sector buffering and transfer mechanisms for limited hardware."
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Allocation and release routines for managing scarce disk space."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Tim Paterson's foundational design adapted by Microsoft for widespread OEM licensing."
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"

enhancements:
  - id: "include-dosseg-setup"
    line_start: 9
    line_end: 21
    title: "Setting up the assembly environment"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section sets up the assembly environment by including key files like DOSSEG.ASM and DOSSYM.ASM. These files define essential constants, macros, and segment directives used throughout the program. In 1983, assembly programming required meticulous setup to ensure compatibility with the hardware and operating system. The INCLUDE directives here reflect the modular design approach, allowing developers to reuse code and maintain consistency across different parts of the system. This modularity was crucial for MS-DOS's adaptability to various OEM hardware configurations, a key factor in its widespread adoption."
  - id: "name-rom-miscellaneous-routines"
    line_start: 35
    line_end: 83
    title: "Defining ROM's role in MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The NAME directive defines this module as 'ROM,' signaling its role in handling miscellaneous routines related to disk operations. This section includes variable declarations for cluster numbers, sector positions, and buffer addresses. These variables are integral to MS-DOS's ability to manage the FAT file system efficiently. In the early 1980s, disk space was a precious resource, and every byte mattered. The careful allocation of memory for these variables reflects the constraints of the era, where systems like the IBM PC operated with limited RAM and storage. This foundational setup enabled the advanced disk utilities introduced in MS-DOS v2.0."
  - id: "get-random-record"
    line_start: 93
    line_end: 149
    title: "Retrieving random records from files"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The GET_random_record routine retrieves a random record from a file, using the File Control Block (FCB) structure. FCBs were a legacy of CP/M, the operating system that inspired MS-DOS. This routine checks for extended FCBs and adjusts pointers accordingly. In the early 1980s, random access to file records was a significant advancement, enabling applications to handle data more flexibly. Tim Paterson's design borrowed heavily from CP/M but introduced optimizations to suit the IBM PC's hardware. This routine showcases the blend of innovation and adaptation that defined MS-DOS's development."
  - id: "fndclus-skip-allocation-units"
    line_start: 185
    line_end: 259
    title: "Skipping allocation units in FAT"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The FNDCLUS routine skips over allocation units in the FAT file system, updating cluster positions and handling end-of-file scenarios. FAT (File Allocation Table) was a simple yet effective file system that became the backbone of MS-DOS. This routine reflects the challenges of managing disk space efficiently on limited hardware. By skipping unused clusters, MS-DOS optimized disk access times, a critical feature for the slow storage devices of the era. The routine's design demonstrates the careful balance between performance and simplicity that characterized MS-DOS's approach to file management."
  - id: "bufsec-buffer-sector-transfer"
    line_start: 261
    line_end: 301
    title: "Buffering sectors for efficient transfers"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_PC"
    image_url: ""
    image_caption: ""
    content: "BUFSEC ensures that a specified sector is buffered before a transfer, flushing buffers if necessary. This routine is a cornerstone of MS-DOS's disk utilities, enabling efficient data handling on the IBM PC's limited hardware. The use of buffers minimized direct disk access, reducing wear and improving performance. In 1983, such optimizations were vital for systems with slow floppy drives and limited RAM. BUFSEC's design reflects the ingenuity required to make the most of the hardware constraints, laying the groundwork for modern caching techniques."
  - id: "bufrd-buffered-read"
    line_start: 331
    line_end: 359
    title: "Performing buffered reads"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_PC"
    image_url: ""
    image_caption: ""
    content: "BUFRD performs buffered reads, leveraging system buffers to handle partial sector reads efficiently. This routine highlights MS-DOS's focus on optimizing disk I/O operations, a critical aspect of its success on the IBM PC. Buffered reads reduced the overhead of direct disk access, improving performance on the slow storage devices of the time. The routine's careful handling of sector positions and buffer pointers reflects the meticulous attention to detail required in assembly programming. BUFRD's design is a testament to the resourcefulness of MS-DOS's developers in overcoming hardware limitations."
  - id: "bufwrt-buffered-write"
    line_start: 411
    line_end: 455
    title: "Buffered writes for disk operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "BUFWRT handles buffered writes, ensuring data integrity and efficient disk operations. This routine updates buffer states and manages sector positions, reflecting the complexities of the FAT file system. Buffered writes were essential for minimizing disk wear and optimizing performance on the IBM PC's hardware. The routine's design showcases the balance between simplicity and functionality that defined MS-DOS. By abstracting disk operations through buffers, MS-DOS provided a more user-friendly interface for developers, paving the way for its widespread adoption."
  - id: "nextsec-compute-next-sector"
    line_start: 473
    line_end: 533
    title: "Calculating the next sector for I/O"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "NEXTSEC computes the next sector to read or write, updating cluster and sector positions as needed. This routine is integral to MS-DOS's disk utilities, ensuring smooth transitions between sectors during I/O operations. The calculation of sector positions within clusters reflects the FAT file system's structure, where clusters are the basic allocation units. NEXTSEC's design demonstrates the careful planning required to manage disk space efficiently, a critical feature for the limited storage devices of the early 1980s. This routine embodies the practical ingenuity of MS-DOS's developers in addressing hardware constraints."
  - id: "optimize-disk-request"
    line_start: 619
    line_end: 665
    title: "Optimizing user disk requests"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "OPTIMIZE handles user disk requests, ensuring efficient allocation and transfer of disk space. This routine calculates the number of sectors available in clusters and adjusts transfer addresses accordingly. In the early 1980s, disk space was a precious resource, and MS-DOS's ability to optimize its usage was a key factor in its success. The routine's design reflects the influence of Unix-like systems, introducing advanced file handling concepts to the IBM PC. OPTIMIZE's careful management of clusters and sectors showcases the forward-thinking approach that defined MS-DOS v2.0."
  - id: "allocate-disk-space"
    line_start: 925
    line_end: 953
    title: "Assigning disk space efficiently"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "ALLOCATE assigns disk space to files, updating the FAT and FCB structures as needed. This routine handles scenarios where insufficient space is available, reflecting the challenges of managing limited storage on early PCs. The careful updating of FAT entries and cluster positions demonstrates the meticulous attention to detail required in assembly programming. ALLOCATE's design is a testament to MS-DOS's adaptability, enabling it to function efficiently across a wide range of hardware configurations. This routine highlights the practical ingenuity of MS-DOS's developers in addressing the constraints of the era."
  - id: "release-cleanup-and-end-marker"
    line_start: 1007
    line_end: 1045
    title: "Release: A cleanup and end marker"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The RELEASE section marks the end of a routine or process, ensuring proper cleanup and signaling the completion of operations. In assembly language, such markers are crucial for maintaining program structure and preventing unintended behavior. By the early 1980s, the IBM PC and its operating system, MS-DOS, were designed to run on the Intel 8086 processor, which had limited memory and processing power. Every byte of code had to be meticulously crafted to fit within these constraints. Tim Paterson, originally developing 86-DOS for Seattle Computer Products, brought this meticulousness to MS-DOS when Microsoft hired him. RELEASE reflects the careful attention to program flow and resource management that was essential in this era. This section is a reminder of the discipline required to write software for early personal computers, where even small inefficiencies could lead to crashes or wasted resources. The legacy of such careful coding practices persists in modern software development, though often hidden behind layers of abstraction."
  - id: "get-eof-find-file-end"
    line_start: 1047
    line_end: 1047
    title: "GETEOF: Finding the end of a file"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The GETEOF subroutine is a small but vital piece of MS-DOS's file system logic. Its purpose is to locate the last cluster in a file, a task critical for reading and writing data correctly. The inputs include the cluster number and a pointer to the Disk Parameter Block (DPB), a data structure that holds information about the disk's organization. The subroutine uses a comparison (CMP) to check whether the cluster number has reached the end-of-file marker (0xFF8). If so, it exits; otherwise, it updates the cluster number and continues. In 1983, MS-DOS v2.0 introduced hierarchical directories and other Unix-inspired features, making file management more complex and necessitating routines like GETEOF. These enhancements were a response to the growing demands of business users and the competitive pressure from other operating systems like CP/M. The efficient handling of files and clusters in MS-DOS laid the groundwork for future file systems, influencing designs like FAT16 and FAT32. While GETEOF itself is a simple routine, its role in the broader context of MS-DOS's file system highlights the importance of robust low-level operations in early computing."
  - id: "do-ext-final-code-section"
    line_start: 1051
    line_end: 1059
    title: "do_ext: The final code section"
    wikipedia_url: "https://en.wikipedia.org/wiki/Executable_and_Linkable_Format"
    image_url: ""
    image_caption: ""
    content: "The do_ext section is the final part of this assembly file, signaling the end of the code segment. While it appears minimal, its presence is crucial for defining the boundaries of the executable code. In assembly language, such markers are not just formalities—they ensure that the assembler and linker correctly interpret the program's structure. By 1983, the IBM PC was becoming a dominant force in personal computing, and MS-DOS was its standard operating system. The do_ext section reflects the meticulous attention to detail required to produce reliable software in this era. Tim Paterson and the Microsoft team were working under significant constraints, including the limited memory and processing power of the Intel 8086. Every line of code had to be optimized for performance and clarity. The inclusion of this section underscores the disciplined approach to software development that characterized early PC programming. While modern programming languages abstract away such details, understanding these foundational practices provides insight into the evolution of software engineering."

---

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

          