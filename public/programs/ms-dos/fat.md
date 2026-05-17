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
description: "This file implements FAT filesystem operations, a foundational technology that shaped storage systems for decades."
is_excerpt: true
excerpt_lines: 200

summary:
  - point: "Implements FAT12/FAT16 filesystem routines for MS-DOS v2.0"
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "File Allocation Table"
  - point: "Introduces subroutines for unpacking and packing FAT entries"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Demonstrates early optimization techniques for constrained hardware"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "fat-entry-unpacking"
    line_start: 71
    line_end: 141
    title: "Unpacking FAT entries: A hardware constraint workaround"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/FAT_12_et_16_-_Entr%C3%A9e_d%27un_fichier.png/330px-FAT_12_et_16_-_Entr%C3%A9e_d%27un_fichier.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "FAT 12 et 16 - Entrée d'un fichier (CC BY-SA 4.0)"
    content: "The UNPACK subroutine begins with a simple goal: retrieve the contents of a FAT entry for a given cluster number. FAT (File Allocation Table) was the backbone of MS-DOS's filesystem, and this routine is central to its operation. The subroutine first checks if the cluster number exceeds the maximum allowed value, signaling a fatal error if so. It then calls another routine, MAPCLUSTER, to locate the FAT entry, and processes the data to extract the cluster's status. If the cluster is free, the zero flag is set; otherwise, the cluster's contents are returned. In 1983, when MS-DOS v2.0 was released, the computing landscape was dominated by machines like the IBM PC with its Intel 8088 processor and limited RAM (typically 64KB–256KB). Every byte mattered. The FAT filesystem was designed to be simple and efficient, using 12-bit or 16-bit entries to track clusters on storage devices. Tim Paterson, the original author of 86-DOS (the precursor to MS-DOS), had designed FAT to work within these constraints. By the time MS-DOS v2.0 was developed, Microsoft engineers had refined the system further, inspired by Unix-like features such as hierarchical directories. The UNPACK routine reflects the ingenuity required to operate within severe hardware limitations. Its use of bitwise operations to extract and align data is a hallmark of assembly programming in this era. The error handling mechanism, which invokes a fatal abort handler, underscores the importance of reliability in early PC software. This subroutine's design principles—simplicity, efficiency, and robustness—helped FAT become one of the most enduring filesystems in computing history. Variants of FAT are still used in modern devices like USB drives and SD cards, a testament to the foresight of its creators."
  - id: "fat-entry-packing"
    line_start: 149
    line_end: 199
    title: "Packing FAT entries: Writing data with precision"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The PACK subroutine complements UNPACK by writing data into a FAT entry for a given cluster. It takes the cluster number and the data to be stored, locates the corresponding FAT entry using MAPCLUSTER, and carefully modifies the entry. If the data is unaligned, the routine shifts bits to ensure proper placement, preserving existing data in the entry. This meticulous approach reflects the precision required to manage storage on early PCs. By 1983, storage devices like floppy disks and early hard drives were limited in capacity, typically ranging from 160KB to 10MB. The FAT filesystem's design allowed these devices to be used efficiently, with minimal overhead. PACK's implementation showcases the challenges of working with FAT's 12-bit and 16-bit entries. The use of bitwise operations to align and merge data demonstrates the low-level control afforded by assembly language, a necessity for optimizing performance on the Intel 8086/8088 processors. Microsoft's decision to adopt FAT for MS-DOS was pivotal. It provided a simple yet effective way to manage files, making the operating system accessible to a wide range of users and hardware manufacturers. The PACK routine embodies the careful engineering that went into making FAT reliable and versatile. The techniques seen in PACK—bit manipulation, alignment, and error handling—are foundational to filesystem design. While modern filesystems have evolved significantly, the principles established here continue to influence storage technologies. The enduring legacy of FAT is a reminder of the impact of thoughtful software design in constrained environments."

---

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
