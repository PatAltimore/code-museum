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
description: "The source code for MS-DOS v2.0's FAT filesystem routines, a foundational piece of software that shaped personal computing and storage."

summary:
  - point: "MS-DOS enabled the IBM PC to dominate personal computing in the 1980s."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "The FAT filesystem became a universal standard for removable storage devices."
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "File Allocation Table"
  - point: "Tim Paterson's 86-DOS was the precursor to MS-DOS, written in just six weeks."
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"
  - point: "Microsoft's licensing strategy for MS-DOS reshaped the software industry."
    link: "https://en.wikipedia.org/wiki/MS-DOS#History"
    link_label: "MS-DOS History"

enhancements:
  - id: "unpacking-fat-entries"
    line_start: 63
    line_end: 141
    title: "Unpacking FAT Entries: A Simple Yet Enduring Design"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "These lines implement the 'UNPACK' routine, which extracts information about a specific cluster from the FAT (File Allocation Table). The routine checks if the requested cluster number is valid, retrieves the corresponding FAT entry, and processes it to determine its status—whether it's free, allocated, or invalid. The programmer's immediate goal here was to ensure robust handling of cluster data, including signaling errors for invalid clusters. In 1983, the computing world was transitioning from hobbyist systems to a burgeoning personal computer industry. The IBM PC, launched two years earlier, had become the standard, and MS-DOS was its operating system. Tim Paterson, who originally wrote 86-DOS, had joined Microsoft, and the team was working to make MS-DOS v2.0 a more sophisticated system inspired by Unix. The FAT filesystem, initially designed for simplicity and speed, had to balance these qualities with the need for reliability and scalability. The constraints were significant: the code had to run efficiently on machines with limited memory (often 64KB to 256KB) and slow disk drives. The FAT design was not revolutionary—it borrowed concepts from earlier systems—but its simplicity made it adaptable and enduring. The consequences of these lines are profound. The FAT filesystem became a universal standard, surviving well into the 21st century in USB drives and SD cards. This routine's design principles—simplicity, efficiency, and robustness—helped ensure FAT's longevity. While modern filesystems have largely surpassed FAT in complexity and capability, its influence remains visible in the ubiquity of removable storage devices. The programmers likely did not anticipate this level of endurance, but their work laid the groundwork for decades of computing."
  - id: "packing-fat-entries"
    line_start: 145
    line_end: 199
    title: "Packing FAT Entries: Writing Data to the Table"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The 'PACK' routine writes data into the FAT for a specific cluster. It calculates the location in the FAT where the data should be stored, aligns it properly, and updates the table. The immediate goal was to ensure that the FAT accurately reflected the state of the disk, enabling efficient file storage and retrieval. By 1983, MS-DOS was becoming the backbone of personal computing, and the FAT filesystem was central to its operation. The design had to accommodate the limited hardware of the era—floppy disks and small hard drives—while being simple enough for widespread adoption. The FAT's structure was straightforward: a linked list of clusters representing files. This simplicity was intentional, as it allowed the filesystem to be implemented on low-cost hardware and understood by programmers with varying levels of expertise. The 'PACK' routine reflects this ethos, prioritizing clarity and efficiency. The implications of this code are vast. The FAT filesystem's ability to manage file storage efficiently contributed to MS-DOS's success and, by extension, the dominance of the IBM PC. The routine's design principles influenced later filesystems, even as they evolved to handle larger disks and more complex requirements. While FAT's limitations—such as fragmentation and size constraints—eventually led to its replacement in many contexts, its legacy endures in removable storage devices. The programmers likely saw this as a practical solution for immediate needs, but their work became a cornerstone of computing history."
  - id: "error-handling-in-fat"
    line_start: 127
    line_end: 137
    title: "Error Handling: Preventing Catastrophic Failures"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "This section of the code deals with error handling in the FAT routine. If an invalid cluster number is detected, the 'HURTFAT' subroutine is invoked to signal a fatal error. It sets specific registers to indicate the problem and calls a handler to manage the error. The immediate goal was to ensure that the system could recover gracefully or fail safely when encountering corrupted or out-of-bounds data. In the early 1980s, error handling was a critical concern for operating systems. Disk drives were prone to failures, and data corruption was a common issue. MS-DOS had to be robust enough to handle these problems without crashing the entire system. The 'HURTFAT' routine reflects this necessity, providing a mechanism to detect and respond to errors in the FAT. Tim Paterson and the Microsoft team were working under tight constraints—limited memory, slow disks, and the need for compatibility with a wide range of hardware. Their approach to error handling was pragmatic, focusing on simplicity and reliability. The consequences of this design are significant. Robust error handling contributed to MS-DOS's reputation for reliability, which was crucial for its adoption by businesses and consumers. While modern operating systems have more sophisticated mechanisms for managing errors, the principles established here—detecting problems early and responding predictably—remain foundational. This routine helped ensure that MS-DOS could operate effectively in the imperfect world of 1980s hardware, laying the groundwork for its widespread success."

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
