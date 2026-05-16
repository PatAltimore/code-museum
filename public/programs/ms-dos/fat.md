---
title: "FAT.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/FAT.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/FAT.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "fat"
order: 6
description: "This file implements FAT filesystem operations, a design that shaped personal computing storage for decades."

summary:
  - point: "Implements FAT12/FAT16 filesystem operations, crucial for early PC storage"
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "File Allocation Table"
  - point: "Introduces routines for packing and unpacking FAT entries, optimizing cluster management"
    link: "https://en.wikipedia.org/wiki/Cluster_(computing)"
    link_label: "Cluster (computing)"
  - point: "Demonstrates early error handling techniques for corrupted FAT entries"
    link: "https://en.wikipedia.org/wiki/Error_handling"
    link_label: "Error handling"
  - point: "Reflects the transition from single-tasking to multi-tasking operating systems in MS-DOS v2.0"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Highlights low-level assembly optimizations for performance on 8086 processors"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"

enhancements:
  - id: "fat-maintenance-routines"
    line_start: 33
    line_end: 35
    title: "FAT Maintenance: A Legacy Begins"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/FAT_12_et_16_-_Entr%C3%A9e_d%27un_fichier.png/330px-FAT_12_et_16_-_Entr%C3%A9e_d%27un_fichier.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "FAT 12 et 16 - Entrée d'un fichier (CC BY-SA 4.0)"
    content: "These lines introduce the FAT maintenance routines, the backbone of MS-DOS's file storage system. Tim Paterson, the original author of 86-DOS, designed the FAT filesystem to manage storage on floppy disks and early hard drives efficiently. By 1983, when MS-DOS v2.0 was released, the FAT design had evolved to support hierarchical directories and larger storage devices. At the time, storage constraints were severe—floppy disks held just 160 KB, and hard drives were rare and expensive. The FAT system's simplicity and adaptability made it a natural choice for the IBM PC and its clones, ensuring compatibility across a rapidly growing ecosystem. This foundational design would persist for decades, powering everything from early PCs to modern USB drives and SD cards."
  - id: "unpack-fat-entries"
    line_start: 71
    line_end: 141
    title: "Unpacking FAT Entries: Decoding Storage"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/FAT_12_et_16_-_Entr%C3%A9e_d%27un_fichier.png/330px-FAT_12_et_16_-_Entr%C3%A9e_d%27un_fichier.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "FAT 12 et 16 - Entrée d'un fichier (CC BY-SA 4.0)"
    content: "The UNPACK routine decodes FAT entries to retrieve the cluster data associated with a file. In this moment, the programmer is solving the problem of efficiently mapping logical file clusters to physical storage locations. The inputs and outputs are carefully documented, reflecting the precision required in assembly programming. In 1983, storage devices were slow and prone to errors, so the code includes error handling for invalid clusters—a critical safeguard in an era when data corruption was common. The use of bitwise operations and register manipulation demonstrates the low-level optimization necessary to maximize performance on the Intel 8086 processor, which had limited computational power compared to modern CPUs. This routine exemplifies the ingenuity required to build reliable systems under tight hardware constraints."
  - id: "pack-fat-entries"
    line_start: 149
    line_end: 199
    title: "Packing FAT Entries: Writing to Disk"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/FAT_12_et_16_-_Entr%C3%A9e_d%27un_fichier.png/330px-FAT_12_et_16_-_Entr%C3%A9e_d%27un_fichier.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "FAT 12 et 16 - Entrée d'un fichier (CC BY-SA 4.0)"
    content: "The PACK routine writes data to the FAT, associating a cluster number with its corresponding storage location. This operation is fundamental to file creation and modification, ensuring that data is correctly mapped and retrievable. In 1983, disk storage was a precious resource, and every byte mattered. The routine uses bitwise operations to pack data efficiently, minimizing overhead. The code reflects the careful balance between functionality and performance, as the programmer must account for alignment issues and handle partial clusters. This approach was inspired by earlier systems like CP/M but refined for the IBM PC's architecture. The FAT system's ability to manage storage dynamically was a key factor in MS-DOS's success, enabling it to scale from floppy disks to hard drives seamlessly. The techniques seen here influenced later operating systems and remain relevant in modern storage technologies."

---

; excerpt — first 200 lines of v2.0/source/FAT.ASM

;

; FAT operations for MSDOS

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



TITLE   FAT - FAT maintenance routines

NAME    FAT



        i_need  CURBUF,DWORD

        i_need  CLUSSPLIT,BYTE

        i_need  CLUSSAVE,WORD

        i_need  CLUSSEC,WORD

        i_need  THISDRV,BYTE

        i_need  DEVCALL,BYTE

        i_need  CALLMED,BYTE

        i_need  CALLRBYT,BYTE

        i_need  BUFFHEAD,DWORD

        i_need  CALLXAD,DWORD

        i_need  CALLBPB,DWORD



SUBTTL UNPACK -- UNPACK FAT ENTRIES

PAGE



ASSUME  SS:DOSGROUP

        procedure   UNPACK,NEAR

ASSUME  DS:DOSGROUP,ES:NOTHING



; Inputs:

;       BX = Cluster number

;       ES:BP = Base of drive parameters

; Outputs:

;       DI = Contents of FAT for given cluster

;       Zero set means DI=0 (free cluster)

; SI Destroyed, No other registers affected. Fatal error if cluster too big.



        CMP     BX,ES:[BP.dpb_max_cluster]

        JA      HURTFAT

        CALL    MAPCLUSTER

ASSUME  DS:NOTHING

        MOV     DI,[DI]

        JNC     HAVCLUS

        PUSH    CX

        MOV     CL,4

        SHR     DI,CL

        POP     CX

        STC

HAVCLUS:

        AND     DI,0FFFH

        PUSH    SS

        POP     DS

        return



HURTFAT:

        PUSH    AX

        MOV     AH,80H          ; Signal Bad FAT to INT int_fatal_abort handler

        MOV     DI,0FFFH        ; In case INT int_fatal_abort returns (it shouldn't)

        invoke  FATAL

        POP     AX              ; Try to ignore bad FAT

        return

UNPACK  ENDP



SUBTTL PACK -- PACK FAT ENTRIES

PAGE

        procedure   PACK,NEAR

ASSUME  DS:DOSGROUP,ES:NOTHING



; Inputs:

;       BX = Cluster number

;       DX = Data

;       ES:BP = Pointer to drive DPB

; Outputs:

;       The data is stored in the FAT at the given cluster.

;       SI,DX,DI all destroyed

;       No other registers affected



        CALL    MAPCLUSTER

ASSUME  DS:NOTHING

        MOV     SI,[DI]

        JNC     ALIGNED

        PUSH    CX

        MOV     CL,4

        SHL     DX,CL

        POP     CX

        AND     SI,0FH

        JMP     SHORT PACKIN

ALIGNED:

        AND     SI,0F000H

PACKIN:

        OR      SI,DX
