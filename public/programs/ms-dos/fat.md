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
description: "This file implements FAT filesystem operations for MS-DOS, a design that shaped decades of storage technology."

summary:
  - point: "Introduces FAT12/FAT16 filesystem operations, foundational to MS-DOS"
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "File Allocation Table"
  - point: "Optimizes storage access in constrained hardware environments"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Includes techniques for handling media changes and buffer management"
    link: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    link_label: "Buffer"
  - point: "Reflects the transition from single-tasking to Unix-inspired multitasking in MS-DOS v2.0"
    link: "https://en.wikipedia.org/wiki/MS-DOS#MS-DOS_2.x"
    link_label: "MS-DOS 2.x"
  - point: "Demonstrates early assembly-level programming for disk operations"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly language"

enhancements:
  - id: "include-dosseg-symbols"
    line_start: 9
    line_end: 21
    title: "Symbolic groundwork for FAT operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "This section includes external assembly definitions and symbols required for FAT operations. By referencing DOSSEG.ASM and DOSSYM.ASM, the programmer ensures compatibility with MS-DOS's broader architecture. In 1983, MS-DOS v2.0 was a leap forward, adding subdirectories and file handles inspired by Unix. Tim Paterson's original 86-DOS was a simpler, single-tasking system, but this rewrite reflects Microsoft's ambition to make MS-DOS a versatile operating system for IBM PCs and other OEMs. These symbols lay the foundation for the file allocation table (FAT) logic, a design that would persist in storage devices for decades."
  - id: "name-fat-maintenance"
    line_start: 35
    line_end: 59
    title: "Defining FAT maintenance routines"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "This section defines the 'FAT' module and declares variables essential for FAT maintenance, such as CURBUF (current buffer) and CLUSSPLIT (cluster split flag). These variables enable efficient access to disk sectors and clusters, a critical task given the limited memory and processing power of early IBM PCs. In 1983, storage devices were slow and expensive, and FAT's design optimized disk access by minimizing fragmentation and simplifying file management. The programmer's focus on modularity and clarity reflects the influence of Unix on MS-DOS v2.0, as well as Microsoft's goal of creating a scalable and efficient operating system for diverse hardware."
  - id: "unpack-fat-entries"
    line_start: 115
    line_end: 123
    title: "Unpacking FAT entries for cluster management"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The HAVCLUS subroutine extracts the contents of the FAT for a given cluster. It checks whether the cluster is free or occupied, and handles errors if the cluster number exceeds the maximum allowed. This logic is vital for managing disk space efficiently, especially on early PCs with limited storage. In 1983, the IBM PC's typical hard drive was only 10 MB, and FAT's ability to track clusters in a compact format was revolutionary. The programmer's decision to use assembly language reflects the need for speed and precision in low-level disk operations, ensuring MS-DOS could perform reliably on constrained hardware."
  - id: "hurtfat-error-handling"
    line_start: 127
    line_end: 139
    title: "Error handling for corrupted FAT entries"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The HURTFAT subroutine signals a fatal error when the FAT is corrupted. It sets a specific error code and invokes the FATAL handler, ensuring the system can recover gracefully or halt operations to prevent further damage. In the early 1980s, disk corruption was a common issue due to unreliable hardware and power interruptions. This subroutine reflects the programmer's foresight in designing robust error handling mechanisms, a necessity for MS-DOS's widespread adoption. By prioritizing system stability, Microsoft ensured MS-DOS could meet the demands of business and personal computing, solidifying its dominance in the operating system market."
  - id: "pack-fat-entries"
    line_start: 147
    line_end: 211
    title: "Packing data into FAT entries"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The PACK subroutine writes data into the FAT for a specified cluster. It ensures alignment and updates buffer flags to indicate changes. This operation is central to FAT's functionality, enabling efficient file storage and retrieval. In 1983, MS-DOS v2.0 introduced subdirectories, making file organization more complex but also more powerful. The programmer's use of assembly language reflects the need for direct control over hardware, ensuring MS-DOS could perform reliably on diverse systems. This subroutine highlights the balance between simplicity and functionality that made FAT a lasting standard in storage technology."
  - id: "mapcluster-buffering"
    line_start: 283
    line_end: 425
    title: "Buffering FAT sectors for cluster access"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The MAPCLUSTER subroutine locates and buffers the FAT sector corresponding to a given cluster. It calculates the sector number, retrieves the buffer, and handles high-bit cluster data. This operation is critical for managing disk access efficiently, especially on early PCs with limited memory and processing power. In 1983, FAT's design optimized storage by minimizing fragmentation and simplifying file management. The programmer's focus on precision and efficiency reflects the constraints of the era, ensuring MS-DOS could perform reliably on diverse hardware. This subroutine demonstrates the ingenuity required to create a scalable filesystem in assembly language."
  - id: "fatread-media-check"
    line_start: 441
    line_end: 531
    title: "Checking media changes and reading FAT"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The FATREAD subroutine checks whether the disk has been changed and reads the FAT if necessary. It flags buffers as invalid and updates drive parameters, ensuring data integrity. In 1983, removable media like floppy disks were common, and detecting media changes was essential for reliable operation. This subroutine reflects the programmer's attention to detail, addressing a critical challenge in early computing. By designing robust mechanisms for media management, Microsoft ensured MS-DOS could meet the demands of business and personal computing, solidifying its dominance in the operating system market."
  - id: "chkbuffdirt-buffer-validation"
    line_start: 533
    line_end: 537
    title: "Validating buffer states for media integrity"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    image_url: ""
    image_caption: ""
    content: "The CHKBUFFDIRT subroutine checks whether any buffers are marked as dirty, indicating changes that need validation. This operation is crucial for maintaining data integrity, especially in systems with removable media. In the early 1980s, floppy disks were prone to errors, and buffer management was a key aspect of reliable computing. The programmer's decision to include this check reflects the constraints of the era, ensuring MS-DOS could handle media changes gracefully. This subroutine highlights the balance between simplicity and functionality that made MS-DOS a lasting standard in operating systems."
  - id: "gotgetbuf-buffer-allocation"
    line_start: 609
    line_end: 617
    title: "Allocating buffers for FAT operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    image_url: ""
    image_caption: ""
    content: "The GOTGETBUF subroutine allocates buffers for FAT operations, ensuring efficient access to disk sectors. This operation is central to FAT's functionality, enabling reliable file storage and retrieval. In 1983, storage devices were slow and expensive, and FAT's design optimized disk access by minimizing fragmentation and simplifying file management. The programmer's use of assembly language reflects the need for direct control over hardware, ensuring MS-DOS could perform reliably on diverse systems. This subroutine demonstrates the ingenuity required to create a scalable filesystem in assembly language."
  - id: "fat-operation-disk-management"
    line_start: 711
    line_end: 711
    title: "Managing disk operations with FAT"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The FAT_operation subroutine encapsulates disk management tasks, coordinating FAT reads and writes based on drive parameters. This operation reflects the programmer's focus on modularity and efficiency, ensuring MS-DOS could handle diverse storage devices reliably. In 1983, the IBM PC's typical hard drive was only 10 MB, and FAT's ability to track clusters in a compact format was revolutionary. This subroutine highlights the balance between simplicity and functionality that made FAT a lasting standard in storage technology."

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

        MOV     [DI],SI

        LDS     SI,[CURBUF]

        MOV     [SI.BUFDIRTY],1

        CMP     BYTE PTR [CLUSSPLIT],0

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        retz

        PUSH    AX

        PUSH    BX

        PUSH    CX

        MOV     AX,[CLUSSAVE]

        MOV     DS,WORD PTR [CURBUF+2]

ASSUME  DS:NOTHING

        ADD     SI,BUFINSIZ

        MOV     [SI],AH

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        PUSH    AX

        MOV     DX,[CLUSSEC]

        MOV     SI,1

        XOR     AL,AL

        invoke  GETBUFFRB

        LDS     DI,[CURBUF]

ASSUME  DS:NOTHING

        MOV     [DI.BUFDIRTY],1

        ADD     DI,BUFINSIZ

        DEC     DI

        ADD     DI,ES:[BP.dpb_sector_size]

        POP     AX

        MOV     [DI],AL

        PUSH    SS

        POP     DS

        POP     CX

        POP     BX

        POP     AX

        return

PACK    ENDP



SUBTTL MAPCLUSTER - BUFFER A FAT SECTOR

PAGE

        procedure   MAPCLUSTER,NEAR

ASSUME  DS:DOSGROUP,ES:NOTHING



; Inputs:

;       ES:BP Points to DPB

;       BX Is cluster number

; Function:

;       Get a pointer to the cluster

; Outputs:

;       DS:DI Points to contents of FAT for given cluster

;       DS:SI Points to start of buffer

;       Carry set if cluster data is in high 12 bits of word

; No other registers effected



        MOV     BYTE PTR [CLUSSPLIT],0

        PUSH    AX

        PUSH    BX

        PUSH    CX

        PUSH    DX

        MOV     AX,BX

        SHR     AX,1

        ADD     AX,BX

        XOR     DX,DX

        MOV     CX,ES:[BP.dpb_sector_size]

        DIV     CX              ; AX is FAT sector # DX is sector index

        ADD     AX,ES:[BP.dpb_first_FAT]

        DEC     CX

        PUSH    AX

        PUSH    DX

        PUSH    CX

        MOV     DX,AX

        XOR     AL,AL

        MOV     SI,1

        invoke  GETBUFFRB

        LDS     SI,[CURBUF]

ASSUME  DS:NOTHING

        LEA     DI,[SI.BufInSiz]

        POP     CX

        POP     AX

        POP     DX

        ADD     DI,AX

        CMP     AX,CX

        JNZ     MAPRET

        MOV     AL,[DI]

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        INC     BYTE PTR [CLUSSPLIT]

        MOV     BYTE PTR [CLUSSAVE],AL

        MOV     [CLUSSEC],DX

        INC     DX

        XOR     AL,AL

        MOV     SI,1

        invoke  GETBUFFRB

        LDS     SI,[CURBUF]

ASSUME  DS:NOTHING

        LEA     DI,[SI.BufInSiz]

        MOV     AL,[DI]

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        MOV     BYTE PTR [CLUSSAVE+1],AL

        MOV     DI,OFFSET DOSGROUP:CLUSSAVE

MAPRET:

        POP     DX

        POP     CX

        POP     BX

        MOV     AX,BX

        SHR     AX,1

        POP     AX

        return

MAPCLUSTER  ENDP



SUBTTL FATREAD -- CHECK DRIVE GET FAT

PAGE

ASSUME  DS:DOSGROUP,ES:NOTHING



        procedure   FAT_operation,NEAR

FATERR:

        AND     DI,STECODE      ; Put error code in DI

        MOV     AH,2            ; While trying to read FAT

        MOV     AL,BYTE PTR [THISDRV]    ; Tell which drive

        invoke  FATAL1



        entry   FATREAD

ASSUME  DS:DOSGROUP,ES:NOTHING



; Function:

;       If disk may have been changed, FAT is read in and buffers are

;       flagged invalid. If not, no action is taken.

; Outputs:

;       ES:BP = Base of drive parameters

; All other registers destroyed



        MOV     AL,BYTE PTR [THISDRV]

        invoke  GETBP

        MOV     AL,DMEDHL

        MOV     AH,ES:[BP.dpb_UNIT]

        MOV     WORD PTR [DEVCALL],AX

        MOV     BYTE PTR [DEVCALL.REQFUNC],DEVMDCH

        MOV     [DEVCALL.REQSTAT],0

        MOV     AL,ES:[BP.dpb_media]

        MOV     BYTE PTR [CALLMED],AL

        PUSH    ES

        PUSH    DS

        MOV     BX,OFFSET DOSGROUP:DEVCALL

        LDS     SI,ES:[BP.dpb_driver_addr]       ; DS:SI Points to device header

ASSUME  DS:NOTHING

        POP     ES                      ; ES:BX Points to call header

        invoke  DEVIOCALL2

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        POP     ES                      ; Restore ES:BP

        MOV     DI,[DEVCALL.REQSTAT]

        TEST    DI,STERR

        JNZ     FATERR

        XOR     AH,AH

        XCHG    AH,ES:[BP.dpb_first_access]      ; Reset dpb_first_access

        MOV     AL,BYTE PTR [THISDRV]    ; Use physical unit number

        OR      AH,BYTE PTR [CALLRBYT]

        JS      NEWDSK          ; new disk or first access?

        JZ      CHKBUFFDIRT

        return                  ; If Media not changed

CHKBUFFDIRT:

        INC     AH              ; Here if ?Media..Check buffers

        LDS     DI,[BUFFHEAD]

ASSUME  DS:NOTHING

NBUFFER:                        ; Look for dirty buffers

        CMP     AX,WORD PTR [DI.BUFDRV]

        retz                    ; There is a dirty buffer, assume Media OK

        LDS     DI,[DI.NEXTBUF]

        CMP     DI,-1

        JNZ     NBUFFER

; If no dirty buffers, assume Media changed

NEWDSK:

        invoke  SETVISIT

NXBUFFER:

        MOV     [DI.VISIT],1

        CMP     AL,[DI.BUFDRV]       ; For this drive?

        JNZ     SKPBUFF

        MOV     WORD PTR [DI.BUFDRV],00FFH  ; Free up buffer

        invoke  SCANPLACE

SKPBUFF:

        invoke  SKIPVISIT

        JNZ     NXBUFFER

        LDS     DI,ES:[BP.dpb_driver_addr]

        TEST    [DI.SDEVATT],ISFATBYDEV

        JNZ     GETFREEBUF

        context DS

        MOV     BX,2

        CALL    UNPACK                  ; Read the first FAT sector into  CURBUF

        LDS     DI,[CURBUF]

        JMP     SHORT GOTGETBUF

GETFREEBUF:

ASSUME  DS:NOTHING

        PUSH    ES                      ; Get a free buffer for BIOS to use

        PUSH    BP

        LDS     DI,[BUFFHEAD]

        invoke  BUFWRITE

        POP     BP

        POP     ES

GOTGETBUF:

        ADD     DI,BUFINSIZ

        MOV     WORD PTR [CALLXAD+2],DS

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        MOV     WORD PTR [CALLXAD],DI

        MOV     AL,DBPBHL

        MOV     AH,BYTE PTR ES:[BP.dpb_UNIT]

        MOV     WORD PTR [DEVCALL],AX

        MOV     BYTE PTR [DEVCALL.REQFUNC],DEVBPB

        MOV     [DEVCALL.REQSTAT],0

        MOV     AL,BYTE PTR ES:[BP.dpb_media]

        MOV     [CALLMED],AL

        PUSH    ES

        PUSH    DS

        PUSH    WORD PTR ES:[BP.dpb_driver_addr+2]

        PUSH    WORD PTR ES:[BP.dpb_driver_addr]

        MOV     BX,OFFSET DOSGROUP:DEVCALL

        POP     SI

        POP     DS                      ; DS:SI Points to device header

ASSUME  DS:NOTHING

        POP     ES                      ; ES:BX Points to call header

        invoke  DEVIOCALL2

        POP     ES                      ; Restore ES:BP

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        MOV     DI,[DEVCALL.REQSTAT]

        TEST    DI,STERR

        JNZ     FATERRJ

        MOV     AL,BYTE PTR ES:[BP.dpb_media]

        LDS     SI,[CALLBPB]

ASSUME  DS:NOTHING

        CMP     AL,BYTE PTR [SI.BPMEDIA]

        JZ      DPBOK

        invoke  $SETDPB

        LDS     DI,[CALLXAD]            ; Get back buffer pointer

        MOV     AL,BYTE PTR ES:[BP.dpb_FAT_count]

        MOV     AH,BYTE PTR ES:[BP.dpb_FAT_size]

        MOV     WORD PTR [DI.BUFWRTCNT-BUFINSIZ],AX   ;Correct buffer info

DPBOK:

        context ds

        MOV     AX,-1

        TEST    ES:[BP.dpb_current_dir],AX

        retz                            ; If root, leave as root

        MOV     ES:[BP.dpb_current_dir],AX    ; Path may be bad, mark invalid

        return



FATERRJ: JMP    FATERR



FAT_operation   ENDP



do_ext



CODE    ENDS

    END

                                     