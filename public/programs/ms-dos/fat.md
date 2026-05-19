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
description: "This file implements FAT filesystem operations, a foundational technology for storage systems that persisted for decades."

summary:
  - point: "Implements FAT12/FAT16 filesystem operations, enabling efficient file storage and retrieval"
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "File Allocation Table"
  - point: "Introduces techniques for handling cluster mapping and buffer management"
    link: "https://en.wikipedia.org/wiki/Cluster_(computing)"
    link_label: "Cluster (computing)"
  - point: "Demonstrates early assembly-level optimization for limited hardware"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Contributed to the widespread adoption of MS-DOS across OEMs"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "FAT filesystem became a standard in removable storage devices like USB drives and SD cards"
    link: "https://en.wikipedia.org/wiki/USB_flash_drive"
    link_label: "USB flash drive"

enhancements:
  - id: "include-directives-and-segment-assumptions"
    line_start: 9
    line_end: 21
    title: "Setting up the environment: INCLUDE directives"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "This section sets up the assembly environment by including necessary files like DOSSEG.ASM and DOSSYM.ASM. These files define symbolic constants and macros used throughout the program. The ASSUME directive establishes segment registers for code and stack, ensuring proper memory addressing. In the early 1980s, assembly programming was the norm for system-level software due to its direct control over hardware. Tim Paterson and Microsoft engineers used these techniques to optimize MS-DOS for the IBM PC's limited resources, such as 64KB of RAM and a 4.77 MHz processor. These setup steps were critical for ensuring the program could interact seamlessly with the hardware and other software layers. The modularity introduced by INCLUDE directives influenced later programming paradigms, including header files in C and modules in modern languages."
  - id: "fat-unpack-cluster-data"
    line_start: 141
    line_end: 191
    title: "Unpacking FAT entries: Cluster data retrieval"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The UNPACK subroutine retrieves the contents of the FAT for a given cluster number. It checks whether the cluster number is valid, maps it to the corresponding FAT sector, and extracts the data. If the cluster is free, the zero flag is set. Invalid clusters trigger a fatal error handler. This routine reflects the constraints of the FAT filesystem, which was designed for simplicity and efficiency on early hardware. The IBM PC's floppy disk drives and hard disks required a lightweight filesystem that could operate within tight memory and processing limits. The concept of mapping clusters to FAT entries became a cornerstone of storage systems, influencing later filesystems like NTFS and exFAT. The handling of free clusters and error states laid the groundwork for robust storage management practices."
  - id: "fat-pack-cluster-data"
    line_start: 277
    line_end: 409
    title: "Packing FAT entries: Writing cluster data"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The PACK subroutine writes data to the FAT for a specified cluster. It maps the cluster to the correct FAT sector and updates the FAT entry with the provided data. The routine ensures alignment and handles cases where the cluster data spans multiple bytes. It also marks the buffer as dirty, signaling that it needs to be written back to disk. This subroutine demonstrates the careful management of storage resources required in the early 1980s. The FAT filesystem's simplicity made it ideal for the limited hardware of the IBM PC, but it also introduced challenges like fragmentation and inefficient space usage. Techniques like buffer management and alignment optimization were crucial for maintaining performance. The principles established here influenced later storage technologies, including caching strategies in modern operating systems."
  - id: "mapcluster-buffer-fat-sector"
    line_start: 427
    line_end: 439
    title: "Mapping clusters: Buffering FAT sectors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cluster_(computing)"
    image_url: ""
    image_caption: ""
    content: "The MAPCLUSTER subroutine calculates the FAT sector corresponding to a given cluster and retrieves its contents. It uses arithmetic operations to determine the sector number and index within the sector. The routine also handles cases where cluster data spans multiple sectors. This approach reflects the challenges of managing storage on early hardware, where disk access was slow and memory was limited. By buffering FAT sectors, the subroutine minimizes disk I/O, improving performance. The arithmetic techniques used here influenced later storage systems, where efficient mapping of logical to physical storage remains a critical concern. The concept of buffering sectors laid the foundation for caching mechanisms in modern filesystems."
  - id: "fat-operation-disk-check"
    line_start: 711
    line_end: 711
    title: "FAT operation: Disk change detection"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The FAT_operation subroutine checks whether the disk has been changed and updates the FAT accordingly. It reads drive parameters, verifies media integrity, and flags buffers as invalid if necessary. This routine addresses a common issue in early computing: detecting and handling removable media changes. The IBM PC's floppy drives required mechanisms to ensure data consistency when disks were swapped. The subroutine's approach to media change detection influenced later systems, where hot-swappable storage devices became commonplace. Techniques like buffer invalidation and media integrity checks remain relevant in modern storage systems, ensuring reliable operation in dynamic environments."

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