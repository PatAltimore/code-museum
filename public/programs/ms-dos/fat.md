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
description: "This file implements the FAT filesystem operations for MS-DOS, a design that shaped personal computing storage for decades."

summary:
  - point: "Introduces FAT12/FAT16 filesystem operations, foundational for MS-DOS storage"
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "File Allocation Table"
  - point: "Optimizes disk access through buffer management and cluster mapping"
    link: "https://en.wikipedia.org/wiki/Disk_buffer"
    link_label: "Disk Buffer"
  - point: "Reflects constraints of early personal computers: limited memory, slow disks"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Survived into the 21st century in USB drives and SD cards"
    link: "https://en.wikipedia.org/wiki/FAT32"
    link_label: "FAT32"
  - point: "Tim Paterson's design influenced storage systems across multiple operating systems"
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"

enhancements:
  - id: "include-dosseg-and-dossym"
    line_start: 9
    line_end: 33
    title: "Setting up the assembly environment"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "These lines establish the assembly environment by including key files like DOSSEG.ASM, DOSSYM.ASM, and DEVSYM.ASM. These files define macros, constants, and symbols used throughout the FAT.ASM file. In the early 1980s, assembly language was the dominant choice for system-level programming due to its direct control over hardware. Tim Paterson, working under tight constraints, relied on these includes to streamline development and ensure compatibility with the IBM PC's hardware. This setup reflects the modular approach of MS-DOS development, where reusable components were crucial for rapid iteration. The modularity here laid the groundwork for future operating systems, where abstraction layers became standard practice."
  - id: "name-fat-data-structure"
    line_start: 35
    line_end: 113
    title: "Defining FAT-related data structures"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "This section defines variables and structures central to FAT operations, such as CURBUF (current buffer), CLUSSPLIT (cluster split flag), and BUFFHEAD (buffer head pointer). These structures are the backbone of FAT's ability to track file allocation on disk. In 1981, disk storage was slow and expensive, and efficient management of clusters and buffers was critical to making the IBM PC viable for business use. Paterson's design ensured that MS-DOS could handle storage efficiently, even on hardware with limited resources. The FAT system became a cornerstone of personal computing, influencing storage systems in Windows, Linux, and embedded devices. Its simplicity and efficiency made it a lasting standard, still visible in USB drives and SD cards today."
  - id: "unpack-fat-entries"
    line_start: 141
    line_end: 191
    title: "Unpacking FAT entries for cluster access"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The UNPACK subroutine retrieves the contents of the FAT for a given cluster number, translating disk-level data into usable information. This operation is essential for determining whether a cluster is free or allocated. In 1981, disk drives were slow, and efficient access to cluster data was paramount. Paterson's implementation uses bitwise operations to extract cluster information, reflecting the era's focus on low-level optimization. This approach influenced generations of filesystem designs, including NTFS and ext4, which built upon the principles of efficient data retrieval established here. Without this foundational work, modern storage systems might have evolved very differently."
  - id: "pack-fat-entries"
    line_start: 277
    line_end: 409
    title: "Packing data into FAT entries"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The PACK subroutine writes data into the FAT for a specified cluster, updating the filesystem's allocation table. This operation is the counterpart to UNPACK, enabling MS-DOS to mark clusters as allocated or free. In the early 1980s, storage efficiency was critical, as hard drives were small and expensive. This subroutine uses bitwise manipulation to ensure that data is stored compactly, a hallmark of FAT's design. The ability to efficiently update the allocation table allowed MS-DOS to support larger disks and more complex file operations, paving the way for modern filesystems. Techniques from this subroutine influenced later innovations like journaling in ext3 and ext4."
  - id: "mapcluster-buffer-fat-sector"
    line_start: 427
    line_end: 439
    title: "Mapping clusters to FAT sectors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_sector"
    image_url: ""
    image_caption: ""
    content: "The MAPCLUSTER subroutine calculates the FAT sector corresponding to a given cluster number and retrieves its contents. This operation is crucial for translating logical cluster numbers into physical disk locations. In 1981, disk drives were slow, and minimizing access time was essential. Paterson's design uses arithmetic operations to map clusters efficiently, reflecting the constraints of early hardware. This mapping technique influenced the development of hierarchical filesystems, where logical-to-physical translation remains a core concept. The efficiency of MAPCLUSTER helped MS-DOS become the dominant operating system of the 1980s, and its principles continue to underpin modern storage systems."
  - id: "fatread-check-drive-get-fat"
    line_start: 441
    line_end: 531
    title: "Checking drive status and reading FAT"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The FATREAD subroutine checks whether the disk has been changed and reads the FAT into memory if necessary. This operation ensures that MS-DOS can handle removable media and detect changes reliably. In the early 1980s, removable floppy disks were common, and robust handling of media changes was a key feature for business users. Paterson's implementation uses device calls to verify disk status and flag buffers as invalid if the media has changed. This approach influenced later systems, including Windows and Linux, where media change detection became standard. The reliability of FATREAD contributed to MS-DOS's success in environments where removable media was prevalent."
  - id: "getfreebuf-buffer-management"
    line_start: 593
    line_end: 607
    title: "Buffer management for FAT operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_buffer"
    image_url: ""
    image_caption: ""
    content: "The GETFREEBUF subroutine manages buffers for FAT operations, ensuring that disk data is read and written efficiently. Buffer management was critical in 1981, as disk drives were slow and memory was limited. This subroutine allocates buffers dynamically, allowing MS-DOS to optimize disk access and minimize latency. Paterson's design reflects the constraints of early personal computers, where every byte of memory and every disk operation had to be carefully managed. Buffer management techniques from MS-DOS influenced later operating systems, where caching and prefetching became standard practices. The principles established here are still visible in modern storage systems."
  - id: "faterr-error-handling"
    line_start: 707
    line_end: 707
    title: "Error handling in FAT operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "The FATERR subroutine handles errors encountered during FAT operations, signaling the system and attempting recovery. Error handling was a critical feature in 1981, as disk drives were prone to failures and data corruption. Paterson's implementation uses specific error codes to communicate issues, reflecting the era's focus on reliability. This approach influenced later systems, where robust error handling became a cornerstone of filesystem design. Techniques from FATERR can be seen in modern filesystems like NTFS and ext4, where error recovery mechanisms ensure data integrity. The reliability of MS-DOS's error handling contributed to its widespread adoption in business environments."

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