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
description: "This file implements FAT filesystem operations, a cornerstone of MS-DOS that shaped personal computing for decades."

summary:
  - point: "Implements FAT12/FAT16 filesystem operations, foundational to MS-DOS"
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "File Allocation Table"
  - point: "Introduces routines for packing and unpacking FAT entries, crucial for disk management"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Reflects constraints of early 1980s hardware, optimizing for limited memory and processing power"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Highlights Tim Paterson's influence in adapting FAT for MS-DOS"
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"
  - point: "FAT filesystem design persisted into modern USB drives and SD cards"
    link: "https://en.wikipedia.org/wiki/USB_flash_drive"
    link_label: "USB Flash Drive"

enhancements:
  - id: "fat-maintenance-routines"
    line_start: 33
    line_end: 35
    title: "FAT Maintenance Routines: A Core Innovation"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "These lines introduce the FAT maintenance routines, the backbone of MS-DOS's disk management system. Tim Paterson, adapting ideas from CP/M and his earlier work on 86-DOS, designed the FAT filesystem to efficiently manage files on floppy disks and hard drives. In 1983, when this version was written, the IBM PC had just begun to dominate the personal computing market, and MS-DOS was becoming the de facto standard. The FAT design, simple yet powerful, balanced the constraints of limited memory (640 KB maximum) and slow disk access speeds. This section sets the stage for routines that would ensure data integrity and efficient storage, a necessity for the era's burgeoning software ecosystem."
  - id: "unpack-fat-entries"
    line_start: 63
    line_end: 141
    title: "Unpacking FAT Entries: A Precision Task"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The 'UNPACK' routine extracts information from the FAT for a given cluster number, translating raw disk data into meaningful file system entries. In 1983, this was cutting-edge work, enabling MS-DOS to manage files on increasingly complex storage devices. The routine checks cluster validity, retrieves data, and handles errors gracefully, signaling fatal issues when necessary. This reflects the careful engineering required to ensure reliability on hardware like the IBM PC's 5.25-inch floppy drives. Paterson and Microsoft's team were working under tight constraints, optimizing every byte of code to fit within the limited resources of early PCs. The error handling here underscores the importance of robustness in an era when disk corruption could mean losing critical business data."
  - id: "pack-fat-entries"
    line_start: 145
    line_end: 199
    title: "Packing FAT Entries: Writing to the Disk"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The 'PACK' routine writes data into the FAT for a specified cluster, ensuring that file system changes are accurately recorded. This operation is vital for tasks like saving files or updating directory structures. In 1983, storage devices were slow and prone to errors, making efficient and reliable disk writes a priority. The routine's design reflects the constraints of early PCs, where every operation had to be optimized for performance and memory usage. By carefully aligning data and handling edge cases, this code helped MS-DOS achieve the reliability that made it indispensable for businesses and home users alike. The FAT system's simplicity and effectiveness ensured its survival well into the 21st century, influencing storage technologies from USB drives to SD cards."

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
