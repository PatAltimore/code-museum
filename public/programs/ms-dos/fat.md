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
description: "This file implements FAT filesystem operations for MS-DOS 2.0, a design that would shape storage systems for decades."

summary:
  - point: "Introduces FAT12/FAT16 filesystem operations, foundational for modern storage devices"
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "File Allocation Table"
  - point: "Includes routines for unpacking and packing FAT entries, critical for cluster management"
    link: "https://en.wikipedia.org/wiki/Cluster_(computing)"
    link_label: "Cluster (computing)"
  - point: "Demonstrates low-level manipulation of disk data structures in 8086 assembly"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"
  - point: "Reflects MS-DOS 2.0's Unix-inspired rewrite, adding support for hierarchical directories"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Error handling in FAT operations shows early robustness in filesystem design"
    link: "https://en.wikipedia.org/wiki/File_system"
    link_label: "File system"

enhancements:
  - id: "fat-maintenance-routines"
    line_start: 33
    line_end: 35
    title: "FAT Maintenance: A Foundation for Storage"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/FAT_12_et_16_-_Entr%C3%A9e_d%27un_fichier.png/330px-FAT_12_et_16_-_Entr%C3%A9e_d%27un_fichier.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "FAT 12 et 16 - Entrée d'un fichier (CC BY-SA 4.0)"
    content: "These lines declare the FAT maintenance routines, the backbone of MS-DOS's filesystem operations. The File Allocation Table (FAT) was a revolutionary design for its time, enabling efficient storage and retrieval of files on floppy disks and hard drives. In 1983, MS-DOS 2.0 introduced significant enhancements inspired by Unix, including hierarchical directories and file handles. Tim Paterson, who originally developed 86-DOS, laid the groundwork for these innovations, which Microsoft refined further. The FAT design would go on to dominate personal computing storage for decades, surviving into modern USB drives and SD cards. At the time, the simplicity and efficiency of FAT were critical for the limited hardware capabilities of early PCs, such as the IBM PC's 8088 processor and 160KB floppy disks."
  - id: "unpack-fat-entries"
    line_start: 71
    line_end: 141
    title: "Unpacking FAT Entries: Reading Disk Clusters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cluster_(computing)"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/FAT_12_et_16_-_Entr%C3%A9e_d%27un_fichier.png/330px-FAT_12_et_16_-_Entr%C3%A9e_d%27un_fichier.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "FAT 12 et 16 - Entrée d'un fichier (CC BY-SA 4.0)"
    content: "The 'UNPACK' subroutine reads the contents of the FAT for a given cluster number, translating raw disk data into usable information. This operation is central to the FAT filesystem, as it determines whether a cluster is free or allocated. In the early 1980s, disk storage was a precious resource, and efficient cluster management was essential. MS-DOS 2.0's FAT implementation had to balance simplicity with performance, ensuring quick access to files while minimizing wasted space. The error handling here, which signals a 'Bad FAT' condition, reflects the robustness required for commercial software running on diverse hardware. This routine embodies the challenges of early PC development, where programmers like Tim Paterson and Microsoft's team had to optimize every byte of code to fit within the constraints of 8086 assembly and limited memory."
  - id: "pack-fat-entries"
    line_start: 149
    line_end: 199
    title: "Packing FAT Entries: Writing Disk Clusters"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The 'PACK' subroutine writes data to the FAT for a specified cluster number, updating the filesystem's representation of disk usage. This operation complements 'UNPACK,' forming the core of FAT's cluster management. In MS-DOS 2.0, these routines had to handle both FAT12 and FAT16 formats, ensuring compatibility with a wide range of storage devices. The use of bitwise operations to manipulate cluster data highlights the low-level nature of filesystem programming in 8086 assembly. At the time, storage devices like floppy disks and early hard drives had limited capacity, making efficient data packing crucial. This routine reflects the ingenuity of early PC software engineers, who had to create reliable systems within severe hardware constraints. The FAT design's longevity, still used in modern devices, underscores the enduring impact of these early decisions."

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
