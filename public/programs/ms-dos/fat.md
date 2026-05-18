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
description: "This file implements FAT filesystem operations in MS-DOS 2.0, a foundational design that shaped storage systems for decades."

summary:
  - point: "Introduces FAT12/FAT16 operations, still relevant in modern storage devices"
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "File Allocation Table"
  - point: "Demonstrates low-level disk access and error handling in assembly"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Reflects constraints of early 1980s hardware and memory limitations"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Tim Paterson's influence on early MS-DOS design persists in FAT's ubiquity"
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"
  - point: "Highlights transition from single-level directory structures to hierarchical subdirectories"
    link: "https://en.wikipedia.org/wiki/MS-DOS#Version_2.x"
    link_label: "MS-DOS v2.x"

enhancements:
  - id: "fat-maintenance-routines"
    line_start: 33
    line_end: 35
    title: "FAT maintenance routines: A cornerstone of storage"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/FAT_12_et_16_-_Entr%C3%A9e_d%27un_fichier.png/330px-FAT_12_et_16_-_Entr%C3%A9e_d%27un_fichier.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "FAT 12 et 16 - Entrée d'un fichier (CC BY-SA 4.0)"
    content: "The title and name directives establish this file as the implementation of FAT (File Allocation Table) maintenance routines. FAT was a revolutionary filesystem design that allowed efficient storage and retrieval of files on floppy disks and hard drives. In 1983, MS-DOS 2.0 introduced hierarchical subdirectories, making FAT adaptable to more complex storage needs. This section sets the stage for the routines that handle unpacking, packing, and mapping FAT entries, showcasing the ingenuity required to work within the constraints of early PC hardware."
  - id: "unpack-fat-entries"
    line_start: 71
    line_end: 141
    title: "Unpacking FAT entries: Decoding storage clusters"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/FAT_12_et_16_-_Entr%C3%A9e_d%27un_fichier.png/330px-FAT_12_et_16_-_Entr%C3%A9e_d%27un_fichier.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "FAT 12 et 16 - Entrée d'un fichier (CC BY-SA 4.0)"
    content: "The UNPACK subroutine extracts the contents of a FAT entry for a given cluster number. FAT entries store metadata about which clusters are free, occupied, or linked to other clusters. In this routine, the programmer ensures that the cluster number is valid, retrieves its FAT entry, and decodes its status. Written in the early 1980s, this code reflects the need for efficient storage management on limited hardware. The error handling (e.g., signaling a bad FAT) underscores the importance of robustness in an era when disk corruption was a common risk. The logic here laid the groundwork for FAT's longevity, as its simplicity and adaptability made it suitable for devices ranging from floppy disks to modern USB drives."
  - id: "pack-fat-entries"
    line_start: 149
    line_end: 275
    title: "Packing FAT entries: Writing cluster metadata"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The PACK subroutine writes data into a FAT entry for a specified cluster. This operation is crucial for updating the filesystem when files are created, modified, or deleted. The routine carefully aligns and modifies the FAT entry, ensuring that the cluster metadata is correctly stored. This code exemplifies the challenges of working with low-level disk operations in assembly language, where every byte and register must be meticulously managed. In the context of MS-DOS 2.0, this routine supported the new hierarchical directory structure, enabling more sophisticated file management. The approach taken here influenced future filesystem designs, as FAT's simplicity became a model for other systems."
  - id: "map-fat-cluster"
    line_start: 285
    line_end: 425
    title: "Mapping FAT clusters: Buffering disk sectors"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The MAPCLUSTER subroutine locates and buffers the FAT sector corresponding to a given cluster number. This operation is central to the FAT filesystem, as it bridges the gap between logical cluster numbers and physical disk sectors. The routine calculates the sector number, retrieves the buffer, and handles cases where cluster data spans multiple sectors. Written in an era of limited memory and slow disk access, this code showcases the ingenuity required to optimize performance. By minimizing disk I/O and leveraging memory buffers, the programmer ensured that MS-DOS could operate efficiently on early PCs. The techniques used here remain relevant in modern storage systems, where performance and reliability are paramount."
  - id: "fat-read-operation"
    line_start: 439
    line_end: 703
    title: "Reading FAT: Ensuring data integrity"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The FATREAD operation checks whether the disk has been changed and retrieves the FAT if necessary. This routine reflects the challenges of working with removable media in the early 1980s, where disks could be swapped or corrupted without warning. The code includes mechanisms to flag buffers as invalid and handle errors gracefully, ensuring data integrity. By incorporating these safeguards, the programmer addressed the realities of unreliable hardware and user behavior. This routine is a testament to the foresight of MS-DOS's developers, who anticipated and mitigated common issues in personal computing. The principles of error handling and data validation demonstrated here continue to influence modern software design."

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