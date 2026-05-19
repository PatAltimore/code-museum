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
description: "This file contains disk utility routines for MS-DOS v2.0, showcasing the transition from simple file systems to more sophisticated storage management inspired by Unix."

summary:
  - point: "Cluster-based disk allocation routines for FAT file systems"
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "File Allocation Table"
  - point: "Optimized sector buffering for performance on slow disk hardware"
    link: "https://en.wikipedia.org/wiki/Disk_buffer"
    link_label: "Disk Buffer"
  - point: "Unix-inspired subroutines for handling files and records"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Tim Paterson's influence on MS-DOS architecture"
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"
  - point: "Early OEM-friendly design for hardware abstraction"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"

enhancements:
  - id: "include-dosseg-setup"
    line_start: 9
    line_end: 21
    title: "Setting the stage: DOS segment definitions"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The file begins with the inclusion of DOSSEG.ASM and DOSSYM.ASM, which define the segment structure and symbolic constants for MS-DOS. These files are critical for ensuring that the routines in ROM.ASM interact correctly with the operating system's memory model and hardware abstraction layers. In 1983, memory segmentation was a necessity on the Intel 8086 processor, which could only directly address 64KB at a time. Tim Paterson and the Microsoft team designed MS-DOS to work within these constraints while still providing a flexible interface for disk operations. These definitions reflect the modularity of MS-DOS, allowing OEMs to adapt the system to their hardware configurations. This modularity was a key factor in MS-DOS's widespread adoption."
  - id: "name-rom-miscellaneous-routines"
    line_start: 35
    line_end: 83
    title: "Defining ROM: A hub for disk utilities"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The NAME directive identifies this segment as 'ROM,' signaling its role as a collection of miscellaneous disk utility routines. The subsequent 'i_need' directives declare variables and structures essential for file and disk management, such as cluster numbers, sector positions, and file control blocks (FCBs). In the early 1980s, disk operations were slow and error-prone, requiring careful management of buffers and allocation units. These declarations set the groundwork for routines that would optimize disk access and ensure data integrity. The design reflects the influence of Unix, which inspired MS-DOS v2.0's more sophisticated file handling capabilities, including subdirectories and file handles."
  - id: "normfcb1-normalizing-file-control-block"
    line_start: 85
    line_end: 91
    title: "Normalizing the File Control Block"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Control_Block"
    image_url: ""
    image_caption: ""
    content: "The NORMFCB1 routine adjusts the File Control Block (FCB) to ensure it is in a standard format before further processing. FCBs were a legacy structure from CP/M, used to manage files in early operating systems. By 1983, MS-DOS v2.0 was transitioning to a more Unix-like file system, but backward compatibility with FCBs remained crucial for supporting older software. This routine reflects the careful balance Microsoft struck between innovation and compatibility, enabling MS-DOS to serve both cutting-edge applications and legacy programs. The normalization process ensures that file operations can proceed smoothly, regardless of the initial state of the FCB."
  - id: "fndclus-skip-allocation-units"
    line_start: 99
    line_end: 183
    title: "Skipping allocation units efficiently"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The FNDCLUS routine is designed to skip over allocation units (clusters) on a disk, updating relevant pointers and counters. This is a critical operation in the FAT file system, where files are stored in clusters rather than contiguous sectors. In the early 1980s, disk drives were slow, and minimizing seek times was essential for performance. By efficiently skipping clusters, this routine helps optimize file access and ensures that disk operations remain responsive. The comments in the code highlight the inputs and outputs, reflecting the meticulous documentation practices of the era. This routine showcases the ingenuity required to work within the constraints of early hardware while laying the groundwork for more advanced file systems."
  - id: "bufsec-buffer-sector-transfer"
    line_start: 191
    line_end: 259
    title: "Buffering sectors for efficient transfers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_buffer"
    image_url: ""
    image_caption: ""
    content: "BUFSEC ensures that a specified sector is loaded into a buffer before a transfer occurs, flushing the buffer if necessary. Disk buffering was a crucial technique for improving performance on the slow hardware of the early 1980s. By preloading sectors into memory, MS-DOS could reduce the number of disk accesses, speeding up file operations. The routine's detailed comments outline its inputs and outputs, emphasizing the importance of careful memory management in an era when RAM was scarce and expensive. This approach to buffering reflects the practical challenges faced by programmers like Tim Paterson, who had to optimize every byte and cycle to deliver a responsive operating system."
  - id: "allocate-assign-disk-space"
    line_start: 733
    line_end: 923
    title: "Assigning disk space in the FAT system"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The ALLOCATE routine assigns disk space to files by finding free clusters and updating the File Allocation Table (FAT). This process is central to the FAT file system, which was designed to manage storage efficiently on small disks. In 1983, hard drives were just beginning to become common, but their capacities were still limited, making efficient allocation crucial. The routine handles edge cases like insufficient space and ensures that the FAT is updated correctly, including setting the 'dirty bit' to indicate changes. This code reflects the careful engineering required to balance performance, reliability, and compatibility in an operating system that had to work on a wide range of hardware."
  - id: "release-deassign-disk-space"
    line_start: 961
    line_end: 1007
    title: "Releasing disk space: Cleaning up clusters"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The RELEASE routine frees clusters in a file's chain, updating the FAT to mark them as available. This operation is essential for managing disk space in the FAT file system, ensuring that deleted files do not leave behind inaccessible storage. In the early 1980s, disk drives were small and expensive, making efficient space management a top priority. This routine reflects the practical challenges of working within these constraints, as well as the importance of maintaining data integrity during file operations. By carefully updating the FAT, the RELEASE routine helps prevent fragmentation and ensures that the disk remains usable for future allocations."
  - id: "geteof-find-end-of-file"
    line_start: 1011
    line_end: 1047
    title: "Finding the end of a file"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "GETEOF determines the last cluster in a file, a critical operation for reading and writing files in the FAT system. By traversing the cluster chain, the routine identifies the end of the file, enabling subsequent operations to proceed correctly. In the early 1980s, this kind of traversal was necessary due to the non-contiguous nature of file storage in FAT. The routine's design reflects the careful balance between simplicity and functionality that characterized MS-DOS, making it both powerful and accessible to developers. This operation remains a fundamental part of file systems, influencing designs that followed."

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