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
description: "This file contains assembly routines for MS-DOS v2.0, showcasing the evolution of disk utilities and file management in early PC operating systems."

summary:
  - point: "Introduces cluster-based file allocation"
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "File Allocation Table"
  - point: "Optimized sector buffering for disk I/O"
    link: "https://en.wikipedia.org/wiki/Disk_buffer"
    link_label: "Disk Buffer"
  - point: "Implements Unix-inspired file handling concepts"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Demonstrates early FAT management techniques"
    link: "https://en.wikipedia.org/wiki/FAT_file_system"
    link_label: "FAT File System"
  - point: "Highlights constraints of 8086 assembly programming"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"

enhancements:
  - id: "include-dosseg-setup"
    line_start: 9
    line_end: 21
    title: "Setting up the DOS segment environment"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section includes the DOS segment setup files (`DOSSEG.ASM` and `DOSSYM.ASM`) and defines the code segment as public. It establishes the environment for the routines that follow, ensuring compatibility with the MS-DOS memory model. At the time, memory segmentation was a critical aspect of programming for the Intel 8086 processor, which had a 1MB address space divided into 64KB segments. This setup reflects the constraints and design decisions of early PC operating systems, where every byte of memory had to be meticulously managed. By including these files, the programmer ensures that the routines can interface correctly with the rest of the MS-DOS kernel, a foundational step for the disk utilities implemented later in the file."
  - id: "name-rom-miscellaneous-routines"
    line_start: 33
    line_end: 93
    title: "Defining ROM routines and variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section defines the ROM name and declares several variables needed for disk operations, such as `CLUSNUM`, `NEXTADD`, and `FATBYT`. These variables represent key elements of the File Allocation Table (FAT) system, which MS-DOS uses to manage disk storage. The FAT system was revolutionary for its simplicity and efficiency, allowing MS-DOS to handle files and directories on floppy and hard disks. By defining these variables upfront, the programmer sets the stage for routines that manipulate disk clusters, perform file reads and writes, and allocate or release disk space. This approach reflects the modular design philosophy of MS-DOS v2.0, which was heavily influenced by Unix and aimed to provide more advanced file management capabilities than its predecessor."
  - id: "get-random-record"
    line_start: 69
    line_end: 93
    title: "Fetching a random record from a file"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The `GET_random_record` routine retrieves a specific record from a file based on its position in the File Control Block (FCB). This functionality is crucial for applications that need to access data non-sequentially, such as databases or random-access file systems. The routine checks whether the FCB is extended and adjusts its pointer accordingly, demonstrating an early implementation of backward compatibility in MS-DOS. At the time, the concept of random file access was gaining traction, as it allowed programs to handle larger datasets more efficiently. This routine's design reflects the growing demand for versatile file handling capabilities in the early 1980s, paving the way for more sophisticated database management systems and file APIs in later operating systems."
  - id: "fndclus-skip-clusters"
    line_start: 185
    line_end: 261
    title: "Skipping over disk allocation clusters"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The `FNDCLUS` routine skips over a specified number of clusters in the disk's allocation table. Clusters are the basic units of storage in the FAT system, and this routine is essential for navigating the disk efficiently. It calculates the position of the last cluster skipped to and updates relevant variables, such as `BX` (last cluster) and `DX` (position). This functionality is particularly useful for file operations that require skipping over unused or reserved disk space. In the early 1980s, disk storage was limited, and efficient management of clusters was critical for maximizing available space. The techniques demonstrated in this routine influenced later advancements in disk management, including the development of more sophisticated file systems like NTFS and ext4."
  - id: "bufsec-buffer-sector-transfer"
    line_start: 189
    line_end: 261
    title: "Buffering a sector for disk transfer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_buffer"
    image_url: ""
    image_caption: ""
    content: "The `BUFSEC` routine ensures that a specified sector is loaded into the buffer before a disk transfer occurs. It handles tasks such as flushing the buffer if necessary, updating the transfer address, and setting flags to indicate that a transfer is taking place. Disk buffering was a critical optimization in the era of slow mechanical drives, as it reduced the overhead of repeated disk access and improved overall system performance. By implementing this routine, MS-DOS v2.0 introduced more efficient disk I/O operations, which were vital for applications that relied on frequent file reads and writes. This approach influenced the design of later operating systems, where disk caching and buffering became standard practices for improving performance."
  - id: "bufrd-buffered-read"
    line_start: 331
    line_end: 359
    title: "Performing a buffered sector read"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_buffer"
    image_url: ""
    image_caption: ""
    content: "The `BUFRD` routine performs a partial sector read using one of the system buffers. It adjusts the buffer position, handles data transfer, and ensures that the buffer is correctly placed for subsequent operations. Buffered reads were an essential optimization for MS-DOS, as they minimized the number of direct disk accesses and improved the efficiency of file operations. This routine reflects the growing sophistication of disk I/O management in early PC operating systems, where performance was constrained by the limited speed of floppy and hard drives. The techniques demonstrated here laid the groundwork for more advanced disk caching mechanisms in later operating systems, such as Windows and Linux."
  - id: "nextsec-compute-next-sector"
    line_start: 473
    line_end: 473
    title: "Computing the next sector for I/O"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The `NEXTSEC` routine calculates the next sector to read or write based on the current transfer state. It updates variables such as `CLUSNUM` (current cluster) and `SECCLUSPOS` (sector position within the cluster) and handles edge cases like end-of-file conditions. This routine is a key part of MS-DOS's disk management system, enabling efficient sequential file access. At the time, the ability to compute the next sector dynamically was crucial for supporting larger files and more complex file operations. The logic implemented here influenced later file systems, where similar techniques are used to optimize disk access patterns and improve performance."
  - id: "allocate-assign-disk-space"
    line_start: 925
    line_end: 925
    title: "Assigning disk space to a file"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The `ALLOCATE` routine assigns disk space to a file by updating the FAT and the File Control Block (FCB). It handles tasks such as finding free clusters, marking them as allocated, and updating the file's metadata. Disk space allocation was a critical function in MS-DOS, as it allowed the operating system to manage files efficiently on limited storage devices. This routine reflects the challenges of early PC operating systems, where disk space was a scarce resource and fragmentation could significantly impact performance. The techniques demonstrated here influenced the design of later file systems, which introduced more sophisticated allocation strategies to minimize fragmentation and improve storage efficiency."
  - id: "release-endp-cleanup"
    line_start: 1007
    line_end: 1007
    title: "Final cleanup routine for file operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The RELEASE routine marks the end of a file operation, ensuring proper cleanup and state restoration. In this section, the programmer focuses on finalizing file system interactions, likely releasing resources or resetting pointers. At the time, MS-DOS was designed to run on IBM PCs with limited memory (typically 16–64 KB) and constrained hardware, making efficient resource management critical. Tim Paterson's assembly code reflects the meticulous attention to detail required to operate within these constraints. RELEASE would have been part of a broader set of routines ensuring the integrity of file operations, a cornerstone of MS-DOS's reliability. This approach influenced later operating systems, where resource cleanup became a standard practice. Developers building on MS-DOS, such as those creating early Windows versions, inherited these principles, ensuring backward compatibility and robust file handling."
  - id: "get-eof-last-cluster"
    line_start: 1015
    line_end: 1047
    title: "Finding the last cluster in a file"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_allocation_table"
    image_url: ""
    image_caption: ""
    content: "The GETEOF routine determines the last cluster in a file, a critical operation for managing the File Allocation Table (FAT). FAT was the backbone of MS-DOS's file system, mapping files to clusters on disk. In this routine, the programmer uses ES:BP to point to the Disk Parameter Block (DPB), a structure describing the disk's layout. BX holds the cluster number, and the routine calculates the last cluster by invoking UNPACK and comparing values. This low-level manipulation of disk structures was essential for MS-DOS's ability to handle files efficiently on early PCs. The FAT file system, introduced here, became a standard across operating systems and storage devices, influencing everything from floppy disks to USB drives. Microsoft's decision to use FAT ensured widespread adoption, and its legacy persists in modern systems like exFAT, used in SD cards and flash drives."
  - id: "do-ext-final-section"
    line_start: 1051
    line_end: 1057
    title: "Closing the code segment"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The do_ext section marks the end of the code segment, signaling the conclusion of this assembly file. This final directive ensures that the assembler properly terminates the program's code segment, aligning with MS-DOS's modular design philosophy. By explicitly defining segment boundaries, the programmer ensures compatibility with the segmented memory model of the Intel 8086 processor. This approach reflects the constraints of early PC hardware, where memory segmentation was necessary to address more than 64 KB of memory. The modular structure seen here influenced later programming practices, including the design of libraries and modules in higher-level languages. It also laid the groundwork for the structured development of operating systems, where clear boundaries between components are essential for maintainability and scalability."

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