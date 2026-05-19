---
title: "DISK.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/DISK.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/DISK.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "disk"
order: 17
description: "Disk routines in MS-DOS v2.0, showcasing foundational techniques for file and device I/O in early personal computing."

summary:
  - point: "Introduces subroutines for swapping file control blocks (FCBs) between devices."
    link: "https://en.wikipedia.org/wiki/File_Control_Block"
    link_label: "File Control Block"
  - point: "Implements raw and cooked device I/O, a key feature for handling diverse hardware."
    link: "https://en.wikipedia.org/wiki/Input/output"
    link_label: "I/O"
  - point: "Includes mechanisms for reading and writing to console and disk devices."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Reflects constraints of early 8086 assembly programming, including memory management."
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"
  - point: "Demonstrates early modular programming practices in assembly language."
    link: "https://en.wikipedia.org/wiki/Modular_programming"
    link_label: "Modular programming"

enhancements:
  - id: "include-directives-and-segment-assumptions"
    line_start: 9
    line_end: 21
    title: "Setting the stage: INCLUDE directives"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "The opening lines of this file establish the foundational setup for the disk routines in MS-DOS. The INCLUDE directives bring in external assembly files, such as DOSSEG.ASM and DOSSYM.ASM, which define segment structures and symbols used throughout the program. This modular approach allows the code to be organized and reused efficiently, a necessity in the constrained memory environment of the IBM PC's 8086 processor. By defining assumptions for segment registers (e.g., SS:DOSGROUP, CS:DOSGROUP), the programmer ensures that the code operates within the expected memory layout. This setup reflects the careful planning required in early assembly programming, where every byte and cycle mattered. The modularity seen here influenced later programming practices, including the development of linkable libraries and object-oriented programming."
  - id: "swapret-and-swapback-subroutines"
    line_start: 195
    line_end: 205
    title: "Swapping file control blocks: SWAPRET"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Control_Block"
    image_url: ""
    image_caption: ""
    content: "The SWAPRET and SWAPBACK subroutines manage the swapping of file control blocks (FCBs) between devices. FCBs were a key data structure in MS-DOS for tracking file metadata, such as the first cluster of a file and its device ID. These routines ensure that the correct FCB is associated with the active device, facilitating seamless I/O operations. In the early 1980s, this level of abstraction was critical for supporting diverse hardware configurations, from floppy drives to hard disks. Tim Paterson's design here reflects the influence of CP/M, which also used FCBs. The concept of swapping and managing FCBs laid the groundwork for more sophisticated file systems, such as FAT (File Allocation Table), which became ubiquitous in personal computing."
  - id: "load-subroutine-main-read-routine"
    line_start: 653
    line_end: 705
    title: "LOAD: The main read routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The LOAD subroutine is the main routine for reading data from files and devices. It takes inputs such as the file position and record count, and outputs the position of the last record read and the number of bytes read. The routine includes checks for named device I/O and handles both disk reads and device-specific operations. This reflects the dual nature of MS-DOS as both a disk operating system and a device management system. The ability to handle raw and cooked device I/O was essential for supporting the wide variety of hardware peripherals available in the early PC era. Techniques from this routine influenced later operating systems, including Windows, which inherited MS-DOS's device abstraction model."
  - id: "store-subroutine-main-write-routine"
    line_start: 939
    line_end: 971
    title: "STORE: Writing data to files and devices"
    wikipedia_url: "https://en.wikipedia.org/wiki/Input/output"
    image_url: ""
    image_caption: ""
    content: "The STORE subroutine is the counterpart to LOAD, handling the writing of data to files and devices. Inputs include the file position and record count, while outputs confirm the position of the last record written and the number of records written. The routine updates file metadata, such as the last cluster and cluster position, ensuring data integrity. By incorporating device-specific checks (e.g., for console or null devices), STORE demonstrates the adaptability of MS-DOS to various hardware environments. This modular approach to I/O operations influenced the development of device drivers and APIs in later operating systems, enabling greater hardware compatibility and extensibility."
  - id: "get_io_fcb-subroutine"
    line_start: 973
    line_end: 979
    title: "get_io_fcb: Mapping JFN to FCB"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Control_Block"
    image_url: ""
    image_caption: ""
    content: "The get_io_fcb subroutine converts a Job File Number (JFN) into a File Control Block (FCB), linking file identifiers to their metadata. This operation is crucial for managing file I/O in MS-DOS, where FCBs store information such as file size, position, and device ID. The routine uses stack manipulation and segment register assumptions to ensure the correct memory layout, reflecting the low-level control required in 8086 assembly programming. By abstracting file identifiers into FCBs, MS-DOS simplifies file management for applications, a concept that influenced the design of file handles and descriptors in later operating systems."
  - id: "getthisdrv-and-phydrv-subroutines"
    line_start: 995
    line_end: 1013
    title: "GetThisDrv: Finding the current drive"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The GetThisDrv subroutine determines the physical drive corresponding to a logical drive identifier, such as 'A' or 'B'. It validates the input and updates the THISDRV variable with the physical drive number. This routine reflects the simplicity of MS-DOS's drive management system, which relied on single-letter identifiers for drives. The concept of logical-to-physical drive mapping was essential for supporting removable media like floppy disks. This approach influenced later operating systems, which expanded on drive abstraction to include network drives and virtual drives, paving the way for modern storage solutions."
  - id: "get-this-drive-cluster-calculation"
    line_start: 1015
    line_end: 1077
    title: "Cluster calculations for FAT directory reading"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "This section calculates the cluster and sector positions for reading a directory block in the FAT filesystem. The programmer uses division and addition to determine the cluster offset and sector position within the cluster. At the time, FAT was a relatively new filesystem designed for simplicity and compatibility with small storage devices. Tim Paterson's original 86-DOS implementation laid the groundwork for FAT, which became ubiquitous in personal computing. This approach to cluster arithmetic influenced later filesystem designs and remains a core concept in FAT-based systems used in USB drives and SD cards today."
  - id: "skip-cluster-loop"
    line_start: 1079
    line_end: 1089
    title: "Skipping clusters in FAT directory traversal"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "This loop skips over clusters in the FAT filesystem until a terminating cluster marker is found. The comparison against 0xFF8 identifies the end of the cluster chain, a key feature of FAT's linked-list structure. The technique ensures efficient traversal of directory entries, avoiding unnecessary reads. This method reflects the constraints of early PCs, where disk I/O was slow and memory was limited. The cluster-skipping logic influenced later FAT implementations and similar linked-list-based filesystems."
  - id: "disk-read-error-handling"
    line_start: 1193
    line_end: 1231
    title: "Error handling in disk read operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_detection_and_correction"
    image_url: ""
    image_caption: ""
    content: "This section handles errors during disk reads, invoking a routine to determine whether to retry or abort. Error handling was critical in early PCs, where hardware reliability was a concern. The ability to retry operations reflects the robustness required for MS-DOS to function in diverse hardware environments. This mechanism influenced later operating systems, which adopted similar strategies for handling I/O errors."
  - id: "fat-sector-read"
    line_start: 1237
    line_end: 1393
    title: "Reading FAT sectors via BIOS calls"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS"
    image_url: ""
    image_caption: ""
    content: "This routine reads sectors of the FAT table using BIOS interrupts. It calculates the number of sectors to read and loops through them, updating the sector position after each read. BIOS-level disk access was standard in the early 1980s, as operating systems relied on firmware for hardware interaction. This approach highlights the low-level nature of MS-DOS and its reliance on BIOS for disk operations. The technique influenced later operating systems that built abstraction layers over BIOS."
  - id: "buffer-management-disk-io"
    line_start: 1911
    line_end: 2013
    title: "Buffer management for efficient disk I/O"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    image_url: ""
    image_caption: ""
    content: "This section manages buffers during disk I/O, ensuring data is read into the correct memory locations and handling dirty buffers. Buffering reduces the number of disk accesses, improving performance on slow storage devices. The logic here reflects the constraints of early PCs, where memory and disk speeds were limited. Buffer management techniques like these became standard practice in operating systems and influenced the design of modern I/O subsystems."
  - id: "rdlast-read-last-record"
    line_start: 2017
    line_end: 2079
    title: "Handling the last record on disk"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The RDLAST subroutine is responsible for reading the last record of a file from the disk. It checks the byte count to determine if any data remains to be transferred, invokes the NEXTSEC routine to move to the next sector, and handles partial records by filling unused bytes with zeros. This ensures proper alignment and integrity of the file data. In 1983, storage devices were slow and prone to errors, so routines like RDLAST were crucial for ensuring reliable file operations. Tim Paterson and the Microsoft team adapted these techniques from earlier systems like CP/M and Unix, which also dealt with block-based storage. The approach influenced later file systems, including FAT, which became the standard for MS-DOS and Windows. FAT's ability to handle partial clusters and align data efficiently owes much to foundational routines like RDLAST."
  - id: "evenfil-aligning-records"
    line_start: 2081
    line_end: 2089
    title: "Aligning records for efficient storage"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_alignment"
    image_url: ""
    image_caption: ""
    content: "The EVENFIL subroutine ensures that records are aligned properly by filling unused bytes with zeros. This is critical for maintaining the integrity of file data and optimizing disk access. In the early 1980s, disk drives operated with fixed sector sizes, and misaligned data could lead to corruption or inefficiencies. By aligning records, EVENFIL minimizes wasted space and ensures compatibility with the FAT file system. This technique, while simple, reflects the careful attention to hardware constraints that defined early software engineering. It laid the groundwork for more sophisticated alignment strategies in modern file systems and memory management."
  - id: "setclus-cluster-management"
    line_start: 2097
    line_end: 2127
    title: "Managing clusters in the file system"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "SETCLUS is a critical subroutine for managing clusters in the FAT file system. It updates the file control block (FCB) with the current cluster and position information, ensuring that the file system can track where data is stored. This subroutine reflects the shift from single-level storage to cluster-based management, a concept borrowed from Unix and adapted for MS-DOS. By packing cluster information efficiently, SETCLUS enables the FAT file system to handle larger files and directories. This innovation influenced subsequent file systems, including VFAT and NTFS, which expanded on the idea of cluster management to support advanced features like journaling and metadata."
  - id: "diskread-perform-disk-read"
    line_start: 2131
    line_end: 2191
    title: "Reading data from the disk"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_storage"
    image_url: ""
    image_caption: ""
    content: "DISKREAD is the primary subroutine for reading data from the disk. It handles the physical interaction with the storage device, calculates the position of the last record accessed, and ensures that the file control block (FCB) is updated correctly. In the early 1980s, disk drives were slow and had limited capacity, so efficient read operations were essential. DISKREAD's design reflects the constraints of the IBM PC hardware, which used 5.25-inch floppy disks with a capacity of 160 KB to 360 KB. This subroutine influenced later disk I/O routines in operating systems like Windows, which built on MS-DOS's ability to manage storage devices effectively."
  - id: "calclus-cluster-calculation"
    line_start: 2193
    line_end: 2221
    title: "Calculating clusters for file storage"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "CALCLUS calculates the cluster number for the last sector accessed during a disk operation. It uses the cluster shift value stored in the disk parameter block (DPB) to determine the cluster's position. This calculation is fundamental to the FAT file system, which organizes data into clusters for efficient storage and retrieval. The technique was inspired by Unix's inode-based file system but adapted for the simpler hardware of the IBM PC. CALCLUS's ability to map sectors to clusters efficiently contributed to the widespread adoption of FAT, which remains a cornerstone of storage systems in embedded devices and legacy systems."
  - id: "wrteof-write-end-of-file"
    line_start: 2513
    line_end: 2539
    title: "Writing the end of a file"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "WRTEOF handles the process of writing the end of a file to the disk. It calculates the final cluster and updates the file control block (FCB) with the new size and position information. This subroutine ensures that files are closed properly and that their metadata reflects the actual data stored. In the early days of MS-DOS, file corruption was a common issue due to incomplete writes or hardware failures. WRTEOF's careful management of the end-of-file process helped mitigate these risks and set a standard for file system reliability. Its influence can be seen in modern file systems, which continue to prioritize safe and accurate file closure."
  - id: "killfil-deleting-files"
    line_start: 2569
    line_end: 2591
    title: "Deleting files from the disk"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_deletion"
    image_url: ""
    image_caption: ""
    content: "KILLFIL is responsible for deleting files from the disk. It clears the file control block (FCB) and releases the clusters associated with the file. This subroutine reflects the simplicity of the FAT file system, which marks clusters as free without overwriting their contents. In the early 1980s, file deletion was a straightforward process due to the limited storage capacity of floppy disks. However, the technique used in KILLFIL laid the groundwork for more advanced deletion methods, such as secure erase and journaling, which ensure data integrity and privacy. The subroutine's influence can be seen in modern operating systems that continue to build on the principles established by MS-DOS."

---

;

; Disk routines for MSDOS

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



TITLE   DISK - Disk utility routines

NAME    Disk



        i_need  COUTDSAV,BYTE

        i_need  COUTSAV,DWORD

        i_need  CINDSAV,BYTE

        i_need  CINSAV,DWORD

        i_need  CONSWAP,BYTE

        i_need  IDLEINT,BYTE

        i_need  THISFCB,DWORD

        i_need  DMAADD,DWORD

        i_need  DEVCALL,BYTE

        i_need  CALLSCNT,WORD

        i_need  CALLXAD,DWORD

        i_need  CONTPOS,WORD

        i_need  NEXTADD,WORD

        i_need  CONBUF,BYTE

        i_need  User_SS,WORD

        i_need  User_SP,WORD

        i_need  DSKStack,BYTE

        i_need  InDOS,BYTE

        i_need  NumIO,BYTE

        i_need  CurDrv,BYTE

        i_need  ThisDrv,BYTE

        i_need  ClusFac,BYTE

        i_need  SecClusPos,BYTE

        i_need  DirSec,WORD

        i_need  ClusNum,WORD

        i_need  NxtClusNum,WORD

        i_need  ReadOp,BYTE

        i_need  DskErr,BYTE

        i_need  RecCnt,WORD

        i_need  RecPos,4

        i_need  Trans,BYTE

        i_need  BytPos,4

        i_need  SecPos,WORD

        i_need  BytSecPos,WORD

        i_need  BytCnt1,WORD

        i_need  BytCnt2,WORD

        i_need  SecCnt,WORD

        i_need  ThisDPB,DWORD

        i_need  LastPos,WORD

        i_need  ValSec,WORD

        i_need  GrowCnt,DWORD



SUBTTL LOAD -- MAIN READ ROUTINE AND DEVICE IN ROUTINES

PAGE

; * * * * Drivers for file input from devices * * * *



        procedure   SWAPBACK,NEAR

ASSUME  DS:DOSGROUP,ES:NOTHING

        PUSH    ES

        PUSH    DI

        PUSH    SI

        PUSH    BX

        MOV     BX,1

        invoke  get_sf_from_jfn

        ADD     DI,sf_fcb

        MOV     BL,BYTE PTR [COUTDSAV]

        LDS     SI,[COUTSAV]

ASSUME  DS:NOTHING

        MOV     WORD PTR ES:[DI.fcb_FIRCLUS],SI

        MOV     WORD PTR ES:[DI.fcb_FIRCLUS+2],DS

        MOV     ES:[DI.fcb_DEVID],BL

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        XOR     BX,BX

        invoke  get_sf_from_jfn

        ADD     DI,sf_fcb

        MOV     BL,BYTE PTR [CINDSAV]

        LDS     SI,[CINSAV]

ASSUME  DS:NOTHING

        MOV     WORD PTR ES:[DI.fcb_FIRCLUS],SI

        MOV     WORD PTR ES:[DI.fcb_FIRCLUS+2],DS

        MOV     ES:[DI.fcb_DEVID],BL

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        MOV     BYTE PTR [CONSWAP],0

        MOV     BYTE PTR [IDLEINT],1

SWAPRET:

        POP     BX

        POP     SI

        POP     DI

        POP     ES

        return

SWAPBACK    ENDP



        procedure   SWAPCON,NEAR

ASSUME  DS:DOSGROUP,ES:NOTHING

        PUSH    ES

        PUSH    DI

        PUSH    SI

        PUSH    BX

        MOV     BYTE PTR [CONSWAP],1

        MOV     BYTE PTR [IDLEINT],0

        XOR     BX,BX

        invoke  get_sf_from_jfn

        ADD     DI,sf_fcb

        MOV     BL,ES:[DI.fcb_DEVID]

        MOV     BYTE PTR [CINDSAV],BL

        LDS     SI,DWORD PTR ES:[DI.fcb_FIRCLUS]

ASSUME  DS:NOTHING

        MOV     WORD PTR [CINSAV],SI

        MOV     WORD PTR [CINSAV+2],DS

        LDS     SI,[THISFCB]

        MOV     BL,[SI.fcb_DEVID]

        LDS     SI,DWORD PTR [SI.fcb_FIRCLUS]

        MOV     ES:[DI.fcb_DEVID],BL

        MOV     WORD PTR ES:[DI.fcb_FIRCLUS],SI

        MOV     WORD PTR ES:[DI.fcb_FIRCLUS+2],DS

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        MOV     BX,1

        invoke  get_sf_from_jfn

        ADD     DI,sf_fcb

        MOV     BL,ES:[DI.fcb_DEVID]

        MOV     BYTE PTR [COUTDSAV],BL

        LDS     SI,DWORD PTR ES:[DI.fcb_FIRCLUS]

ASSUME  DS:NOTHING

        MOV     WORD PTR [COUTSAV],SI

        MOV     WORD PTR [COUTSAV+2],DS

        LDS     SI,[THISFCB]

        MOV     BL,[SI.fcb_DEVID]

        LDS     SI,DWORD PTR [SI.fcb_FIRCLUS]

        MOV     ES:[DI.fcb_DEVID],BL

        MOV     WORD PTR ES:[DI.fcb_FIRCLUS],SI

        MOV     WORD PTR ES:[DI.fcb_FIRCLUS+2],DS

        PUSH    SS

        POP     DS

        JMP     SWAPRET

SWAPCON ENDP



        procedure   LOAD,NEAR

ASSUME  DS:NOTHING,ES:NOTHING

;

; Inputs:

;       DS:DI point to FCB

;       DX:AX = Position in file to read

;       CX = No. of records to read

; Outputs:

;       DX:AX = Position of last record read

;       CX = No. of bytes read

;       ES:DI point to FCB

;       fcb_LSTCLUS, fcb_CLUSPOS fields in FCB set



        call    SETUP

ASSUME  DS:DOSGROUP

        OR      BL,BL           ; Check for named device I/O

        JS      READDEV

        call    DISKREAD

        return



READDEV:

ASSUME  DS:DOSGROUP,ES:NOTHING

        LES     DI,[DMAADD]

        TEST    BL,40H                  ; End of file?

        JZ      ENDRDDEVJ3

        TEST    BL,ISNULL               ; NUL device?

        JZ      TESTRAW                 ; NO

        XOR     AL,AL                   ; Indicate EOF

ENDRDDEVJ3: JMP ENDRDDEVJ2



DVRDRAW:

ASSUME  DS:DOSGROUP

        PUSH    ES

        POP     DS

ASSUME  DS:NOTHING

DVRDRAWR:

        MOV     BX,DI                   ; DS:BX transfer addr

        XOR     DX,DX                   ; Start at 0

        XOR     AX,AX                   ; Media Byte, unit = 0

        invoke  SETREAD

        LDS     SI,[THISFCB]

        invoke  DEVIOCALL

        MOV     DX,DI                   ; DX is preserved by INT 24

        MOV     AH,86H                  ; Read error

        MOV     DI,[DEVCALL.REQSTAT]

        TEST    DI,STERR

        JZ      CRDROK                  ; No errors

        invoke  CHARHARD

        MOV     DI,DX

        CMP     AL,1

        JZ      DVRDRAWR                ; Retry

CRDROK:

        MOV     DI,DX

        ADD     DI,[CALLSCNT]           ; Amount transferred

        JMP     SHORT ENDRDDEVJ2



TESTRAW:

        TEST    BL,020H                 ; Raw mode?

        JNZ     DVRDRAW

        TEST    BL,ISCIN                ; Is it console device?

        JZ      NOTRDCON

        JMP     READCON

NOTRDCON:

        MOV     AX,ES

        MOV     DS,AX

ASSUME  DS:NOTHING

        MOV     BX,DI

        XOR     DX,DX

        MOV     AX,DX

        PUSH    CX

        MOV     CX,1

        invoke  SETREAD

        POP     CX

        LDS     SI,[THISFCB]

        LDS     SI,DWORD PTR [SI.fcb_FIRCLUS]

DVRDLP:

        invoke  DSKSTATCHK

        invoke  DEVIOCALL2

        PUSH    DI

        MOV     AH,86H

        MOV     DI,[DEVCALL.REQSTAT]

        TEST    DI,STERR

        JZ      CRDOK

        invoke  CHARHARD

        POP     DI

        MOV     [CALLSCNT],1

        CMP     AL,1

        JZ      DVRDLP                  ;Retry

        XOR     AL,AL                   ;Pick some random character

        JMP     SHORT DVRDIGN

CRDOK:

        POP     DI

        CMP     [CALLSCNT],1

        JNZ     ENDRDDEVJ2

        PUSH    DS

        MOV     DS,WORD PTR [CALLXAD+2]

        MOV     AL,BYTE PTR [DI]

        POP     DS

DVRDIGN:

        INC     WORD PTR [CALLXAD]

        MOV     [DEVCALL.REQSTAT],0

        INC     DI

        CMP     AL,1AH                  ; ^Z?

        JZ      ENDRDDEVJ

        CMP     AL,c_CR                 ; CR?

        LOOPNZ  DVRDLP

ENDRDDEVJ:

        DEC     DI

ENDRDDEVJ2:

        JMP     SHORT ENDRDDEV



ASSUME  DS:NOTHING,ES:NOTHING



TRANBUF:

        LODSB

        STOSB

        CMP     AL,c_CR         ; Check for carriage return

        JNZ     NORMCH

        MOV     BYTE PTR [SI],c_LF

NORMCH:

        CMP     AL,c_LF

        LOOPNZ  TRANBUF

        JNZ     ENDRDCON

        XOR     SI,SI           ; Cause a new buffer to be read

        invoke  OUT             ; Transmit linefeed

        OR      AL,1            ; Clear zero flag--not end of file

ENDRDCON:

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        CALL    SWAPBACK

        MOV     [CONTPOS],SI

ENDRDDEV:

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        MOV     [NEXTADD],DI

        JNZ     SETFCBC         ; Zero set if Ctrl-Z found in input

        LES     DI,[THISFCB]

        AND     ES:BYTE PTR [DI.fcb_DEVID],0FFH-40H ; Mark as no more data available

SETFCBC:

        call    SETFCB

        return



ASSUME  DS:NOTHING,ES:NOTHING



READCON:

ASSUME  DS:DOSGROUP

        CALL    SWAPCON

        MOV     SI,[CONTPOS]

        OR      SI,SI

        JNZ     TRANBUF

        CMP     BYTE PTR [CONBUF],128

        JZ      GETBUF

        MOV     WORD PTR [CONBUF],0FF80H        ; Set up 128-byte buffer with no template

GETBUF:

        PUSH    CX

        PUSH    ES

        PUSH    DI

        MOV     DX,OFFSET DOSGROUP:CONBUF

        invoke  $STD_CON_STRING_INPUT           ; Get input buffer

        POP     DI

        POP     ES

        POP     CX

        MOV     SI,2 + OFFSET DOSGROUP:CONBUF

        CMP     BYTE PTR [SI],1AH       ; Check for Ctrl-Z in first character

        JNZ     TRANBUF

        MOV     AL,1AH

        STOSB

        DEC     DI

        MOV     AL,10

        invoke  OUT             ; Send linefeed

        XOR     SI,SI

        JMP     SHORT ENDRDCON



LOAD    ENDP



SUBTTL STORE -- MAIN WRITE ROUTINE AND DEVICE OUT ROUTINES

PAGE

ASSUME  DS:NOTHING,ES:NOTHING

        procedure   STORE,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DS:DI point to FCB

;       DX:AX = Position in file of disk transfer

;       CX = Record count

; Outputs:

;       DX:AX = Position of last record written

;       CX = No. of records written

;       ES:DI point to FCB

;       fcb_LSTCLUS, fcb_CLUSPOS fields in FCB set



        call    SETUP

ASSUME  DS:DOSGROUP

        OR      BL,BL

        JS      WRTDEV

        invoke  DATE16

        MOV     ES:[DI.fcb_FDATE],AX

        MOV     ES:[DI.fcb_FTIME],DX

        call    DISKWRITE

        return



WRITECON:

        PUSH    DS

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        CALL    SWAPCON

        POP     DS

ASSUME  DS:NOTHING

        MOV     SI,BX

        PUSH    CX

WRCONLP:

        LODSB

        CMP     AL,1AH          ; ^Z?

        JZ      CONEOF

        invoke  OUT

        LOOP    WRCONLP

CONEOF:

        POP     AX                      ; Count

        SUB     AX,CX                   ; Amount actually written

        POP     DS

ASSUME  DS:DOSGROUP

        CALL    SWAPBACK

        JMP     SHORT ENDWRDEV



DVWRTRAW:

ASSUME  DS:NOTHING

        XOR     AX,AX                   ; Media Byte, unit = 0

        invoke  SETWRITE

        LDS     SI,[THISFCB]

        invoke  DEVIOCALL

        MOV     DX,DI

        MOV     AH,87H

        MOV     DI,[DEVCALL.REQSTAT]

        TEST    DI,STERR

        JZ      CWRTROK

        invoke  CHARHARD

        MOV     BX,DX                   ; Recall transfer addr

        CMP     AL,1

        JZ      DVWRTRAW                ; Try again

CWRTROK:

        POP     DS

ASSUME  DS:DOSGROUP

        MOV     AX,[CALLSCNT]           ; Get actual number of bytes transferred

ENDWRDEV:

        LES     DI,[THISFCB]

        XOR     DX,DX

        DIV     ES:[DI.fcb_RECSIZ]

        MOV     CX,AX                   ; Partial record is ignored

        call    ADDREC

        return



ASSUME  DS:DOSGROUP

WRTDEV:

        OR      BL,40H          ; Reset EOF for input

        XOR     AX,AX

        JCXZ    ENDWRDEV        ; problem of creating on a device.

        PUSH    DS

        MOV     AL,BL

        LDS     BX,[DMAADD]

ASSUME  DS:NOTHING

        MOV     DI,BX

        XOR     DX,DX                   ; Set starting point

        TEST    AL,020H                 ; Raw?

        JNZ     DVWRTRAW

        TEST    AL,ISCOUT               ; Console output device?

        JNZ     WRITECON

        TEST    AL,ISNULL

        JNZ     WRTNUL

        MOV     AX,DX

        CMP     BYTE PTR [BX],1AH       ; ^Z?

        JZ      WRTCOOKDONE             ; Yes, transfer nothing

        PUSH    CX

        MOV     CX,1

        invoke  SETWRITE

        POP     CX

        LDS     SI,[THISFCB]

        LDS     SI,DWORD PTR [SI.fcb_FIRCLUS]

DVWRTLP:

        invoke  DSKSTATCHK

        invoke  DEVIOCALL2

        PUSH    DI

        MOV     AH,87H

        MOV     DI,[DEVCALL.REQSTAT]

        TEST    DI,STERR

        JZ      CWROK

        invoke  CHARHARD

        POP     DI

        MOV     [CALLSCNT],1

        CMP     AL,1

        JZ      DVWRTLP

        JMP     SHORT DVWRTIGN

CWROK:

        POP     DI

        CMP     [CALLSCNT],0

        JZ      WRTCOOKDONE

DVWRTIGN:

        INC     DX

        INC     WORD PTR [CALLXAD]

        INC     DI

        PUSH    DS

        MOV     DS,WORD PTR [CALLXAD+2]

        CMP     BYTE PTR [DI],1AH       ; ^Z?

        POP     DS

        JZ      WRTCOOKDONE

        MOV     [DEVCALL.REQSTAT],0

        LOOP    DVWRTLP

WRTCOOKDONE:

        MOV     AX,DX

        POP     DS

        JMP     ENDWRDEV



WRTNUL:

        MOV     DX,CX                   ;Entire transfer done

        JMP     WRTCOOKDONE



STORE   ENDP



        procedure   get_io_fcb,near

ASSUME  DS:NOTHING,ES:NOTHING

; Convert JFN number in BX to FCB in DS:SI

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        PUSH    ES

        PUSH    DI

        invoke  get_sf_from_jfn

        JC      RET44P

        MOV     SI,DI

        ADD     SI,sf_fcb

        PUSH    ES

        POP     DS

ASSUME  DS:NOTHING

RET44P:

        POP     DI

        POP     ES

        return

get_io_fcb  ENDP



SUBTTL GETTHISDRV -- FIND CURRENT DRIVE

PAGE

; Input:    AL has drive identifier (1=A, 0=default)

; Output:   AL has physical drive (0=A)

; Carry set if invalid drive (and AL is garbage anyway)

        procedure   GetThisDrv,NEAR

ASSUME  DS:NOTHING,ES:NOTHING

        CMP     BYTE PTR [NUMIO],AL

        retc

        DEC     AL

        JNS     PHYDRV

        MOV     AL,[CURDRV]

PHYDRV:

        MOV     BYTE PTR [THISDRV],AL

        return

GetThisDrv  ENDP



SUBTTL DIRREAD -- READ A DIRECTORY SECTOR

PAGE

        procedure   DirRead,NEAR

ASSUME  DS:DOSGROUP,ES:NOTHING



; Inputs:

;       AX = Directory block number (relative to first block of directory)

;       ES:BP = Base of drive parameters

;       [DIRSEC] = First sector of first cluster of directory

;       [CLUSNUM] = Next cluster

;       [CLUSFAC] = Sectors/Cluster

; Function:

;       Read the directory block into [CURBUF].

; Outputs:

;       [NXTCLUSNUM] = Next cluster (after the one skipped to)

;       [SECCLUSPOS] Set

;       ES:BP unchanged [CURBUF] Points to Buffer with dir sector

; All other registers destroyed.



        MOV     CL,[CLUSFAC]

        DIV     CL              ; AL # clusters to skip, AH position in cluster

        MOV     [SECCLUSPOS],AH

        MOV     CL,AL

        XOR     CH,CH

        MOV     DX,[DIRSEC]

        ADD     DL,AH

        ADC     DH,0

        MOV     BX,[CLUSNUM]

        MOV     [NXTCLUSNUM],BX

        JCXZ    FIRSTCLUSTER

SKPCLLP:

        invoke  UNPACK

        XCHG    BX,DI

        CMP     BX,0FF8H

        JAE     HAVESKIPPED

        LOOP    SKPCLLP

HAVESKIPPED:

        MOV     [NXTCLUSNUM],BX

        MOV     DX,DI

        MOV     BL,AH

        invoke  FIGREC

        entry   FIRSTCLUSTER

        XOR     AL,AL           ; Indicate pre-read

        MOV     AH,DIRPRI

        invoke  GETBUFFR

        ret

DirRead ENDP



SUBTTL FATSECRD -- READ A FAT SECTOR

PAGE

        procedure   FATSecRd,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       Same as DREAD

;       DS:BX = Transfer address

;       CX = Number of sectors

;       DX = Absolute record number

;       ES:BP = Base of drive parameters

; Function:

;       Calls BIOS to perform FAT read.

; Outputs:

;       Same as DREAD



        MOV     DI,CX

        MOV     CL,ES:[BP.dpb_FAT_count]

        MOV     AL,ES:[BP.dpb_FAT_size]

        XOR     AH,AH

        MOV     CH,AH

        PUSH    DX

NXTFAT:

        PUSH    CX

        PUSH    AX

        MOV     CX,DI

        CALL    DSKREAD

        POP     AX

        POP     CX

        JZ      RET41P

        ADD     DX,AX

        LOOP    NXTFAT

        POP     DX

        MOV     CX,DI



; NOTE FALL THROUGH



SUBTTL DREAD -- DO A DISK READ

PAGE

        entry   DREAD

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DS:BX = Transfer address

;       CX = Number of sectors

;       DX = Absolute record number

;       ES:BP = Base of drive parameters

; Function:

;       Calls BIOS to perform disk read. If BIOS reports

;       errors, will call HARDERR for further action.

; DS,ES:BP preserved. All other registers destroyed.



        CALL    DSKREAD

        retz

        MOV     BYTE PTR [READOP],0

        invoke  HARDERR

        CMP     AL,1            ; Check for retry

        JZ      DREAD

        return                  ; Ignore otherwise

RET41P: POP     DX

        return

FATSecRd    ENDP



SUBTTL DSKREAD -- PHYSICAL DISK READ

PAGE

        procedure   DskRead,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DS:BX = Transfer addr

;       CX = Number of sectors

;       DX = Absolute record number

;       ES:BP = Base of drive parameters

; Function:

;       Call BIOS to perform disk read

; Outputs:

;       DI = CX on entry

;       CX = Number of sectors unsuccessfully transfered

;       AX = Status word as returned by BIOS (error code in AL if error)

;       Zero set if OK (from BIOS)

;       Zero clear if error

; SI Destroyed, others preserved



        PUSH    CX

        MOV     AH,ES:[BP.dpb_media]

        MOV     AL,ES:[BP.dpb_UNIT]

        PUSH    BX

        PUSH    ES

        invoke  SETREAD

        JMP     DODSKOP



SUBTTL DWRITE -- SEE ABOUT WRITING

PAGE

        entry   DWRITE

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DS:BX = Transfer address

;       CX = Number of sectors

;       DX = Absolute record number

;       ES:BP = Base of drive parameters

; Function:

;       Calls BIOS to perform disk write. If BIOS reports

;       errors, will call HARDERR for further action.

; BP preserved. All other registers destroyed.



        CALL    DSKWRITE

        retz

        MOV     BYTE PTR [READOP],1

        invoke  HARDERR

        CMP     AL,1            ; Check for retry

        JZ      DWRITE

        return



SUBTTL DSKWRITE -- PHYSICAL DISK WRITE

PAGE

        entry   DSKWRITE

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DS:BX = Transfer addr

;       CX = Number of sectors

;       DX = Absolute record number

;       ES:BP = Base of drive parameters

; Function:

;       Call BIOS to perform disk read

; Outputs:

;       DI = CX on entry

;       CX = Number of sectors unsuccessfully transfered

;       AX = Status word as returned by BIOS (error code in AL if error)

;       Zero set if OK (from BIOS)

;       Zero clear if error

; SI Destroyed, others preserved



        PUSH    CX

        MOV     AH,ES:[BP.dpb_media]

        MOV     AL,ES:[BP.dpb_UNIT]

        PUSH    BX

        PUSH    ES

        invoke  SETWRITE

DODSKOP:

        MOV     CX,DS           ; Save DS

        POP     DS              ; DS:BP points to DPB

        PUSH    DS

        LDS     SI,DS:[BP.dpb_driver_addr]

        invoke  DEVIOCALL2

        MOV     DS,CX           ; Restore DS

        POP     ES              ; Restore ES

        POP     BX

        MOV     CX,[CALLSCNT]   ; Number of sectors transferred

        POP     DI

        SUB     CX,DI

        NEG     CX              ; Number of sectors not transferred

        MOV     AX,[DEVCALL.REQSTAT]

        TEST    AX,STERR

        return

DskRead ENDP



SUBTTL SETUP -- SETUP A DISK READ OR WRITE FROM USER

PAGE

ASSUME  DS:DOSGROUP,ES:NOTHING



        procedure   SETUP,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DS:DI point to FCB

;       DX:AX = Record position in file of disk transfer

;       CX = Record count

; Outputs:

;       DS = DOSGROUP

;       BL = fcb_DEVID from FCB

;       CX = No. of bytes to transfer  (0 = 64K)

;       [THISDPB] = Base of drive parameters

;       [RECCNT] = Record count

;       [RECPOS] = Record position in file

;       ES:DI Points to FCB

;       [THISFCB] = ES:DI

;       [NEXTADD] = Displacement of disk transfer within segment

;       [SECPOS] = Position of first sector

;       [BYTPOS] = Byte position in file

;       [BYTSECPOS] = Byte position in first sector

;       [CLUSNUM] = First cluster

;       [SECCLUSPOS] = Sector within first cluster

;       [DSKERR] = 0 (no errors yet)

;       [TRANS] = 0 (No transfers yet)

;       [THISDRV] = Physical drive unit number



        PUSH    AX

        MOV     AL,[DI]

        DEC     AL

        MOV     BYTE PTR [THISDRV],AL

        MOV     AL,[DI.fcb_DEVID]

        MOV     SI,[DI.fcb_RECSIZ]

        OR      SI,SI

        JNZ     HAVRECSIZ

        MOV     SI,128

        MOV     [DI.fcb_RECSIZ],SI

HAVRECSIZ:

        MOV     WORD PTR [THISFCB+2],DS

        PUSH    SS

        POP     DS              ; Set DS to DOSGROUP

ASSUME  DS:DOSGROUP

        MOV     WORD PTR [THISFCB],DI

        OR      AL,AL           ; Is it a device?

        JNS     NOTDEVICE

        XOR     AL,AL           ; Fake in drive 0 so we can get BP

NOTDEVICE:

        invoke  GETBP

        POP     AX

        JNC     CheckRecLen

        XOR     CX,CX

        MOV     BYTE PTR [DSKERR],4

        POP     BX

        return



CheckRecLen:

        CMP     SI,64           ; Check if highest byte of RECPOS is significant

        JB      SMALREC

        XOR     DH,DH           ; Ignore MSB if record >= 64 bytes

SMALREC:

        MOV     [RECCNT],CX

        MOV     WORD PTR [RECPOS],AX

        MOV     WORD PTR [RECPOS+2],DX

        MOV     BX,WORD PTR [DMAADD]

        MOV     [NEXTADD],BX

        MOV     BYTE PTR [DSKERR],0

        MOV     BYTE PTR [TRANS],0

        MOV     BX,DX

        MUL     SI

        MOV     WORD PTR [BYTPOS],AX

        PUSH    DX

        MOV     AX,BX

        MUL     SI

        POP     BX

        ADD     AX,BX

        ADC     DX,0            ; Ripple carry

        JNZ     EOFERR

        MOV     WORD PTR [BYTPOS+2],AX

        MOV     DX,AX

        MOV     AX,WORD PTR [BYTPOS]

        MOV     BX,ES:[BP.dpb_sector_size]

        CMP     DX,BX           ; See if divide will overflow

        JNC     EOFERR

        DIV     BX

        MOV     [SECPOS],AX

        MOV     [BYTSECPOS],DX

        MOV     DX,AX

        AND     AL,ES:[BP.dpb_cluster_mask]

        MOV     [SECCLUSPOS],AL

        MOV     AX,CX           ; Record count

        MOV     CL,ES:[BP.dpb_cluster_shift]

        SHR     DX,CL

        MOV     [CLUSNUM],DX

        MUL     SI              ; Multiply by bytes per record

        MOV     CX,AX

        ADD     AX,WORD PTR [DMAADD]     ; See if it will fit in one segment

        ADC     DX,0

        JZ      OK              ; Must be less than 64K

        MOV     AX,WORD PTR [DMAADD]

        NEG     AX              ; Amount of room left in segment

        JNZ     PARTSEG

        DEC     AX

PARTSEG:

        XOR     DX,DX

        DIV     SI              ; How many records will fit?

        MOV     [RECCNT],AX

        MUL     SI              ; Translate that back into bytes

        MOV     BYTE PTR [DSKERR],2      ; Flag that trimming took place

        MOV     CX,AX

        JCXZ    NOROOM

OK:

        LES     DI,[THISFCB]

        MOV     BL,ES:[DI.fcb_DEVID]

        return



EOFERR:

        MOV     BYTE PTR [DSKERR],1

        XOR     CX,CX

NOROOM:

        LES     DI,[THISFCB]

        POP     BX              ; Kill return address

        return

SETUP   ENDP



SUBTTL BREAKDOWN -- CUT A USER READ OR WRITE INTO PIECES

PAGE

        procedure   BREAKDOWN,near

ASSUME  DS:DOSGROUP,ES:NOTHING



; Inputs:

;       CX = Length of disk transfer in bytes

;       ES:BP = Base of drive parameters

;       [BYTSECPOS] = Byte position witin first sector

; Outputs:

;       [BYTCNT1] = Bytes to transfer in first sector

;       [SECCNT] = No. of whole sectors to transfer

;       [BYTCNT2] = Bytes to transfer in last sector

; AX, BX, DX destroyed. No other registers affected.



        MOV     AX,[BYTSECPOS]

        MOV     BX,CX

        OR      AX,AX

        JZ      SAVFIR          ; Partial first sector?

        SUB     AX,ES:[BP.dpb_sector_size]

        NEG     AX              ; Max number of bytes left in first sector

        SUB     BX,AX           ; Subtract from total length

        JAE     SAVFIR

        ADD     AX,BX           ; Don't use all of the rest of the sector

        XOR     BX,BX           ; And no bytes are left

SAVFIR:

        MOV     [BYTCNT1],AX

        MOV     AX,BX

        XOR     DX,DX

        DIV     ES:[BP.dpb_sector_size]  ; How many whole sectors?

        MOV     [SECCNT],AX

        MOV     [BYTCNT2],DX    ; Bytes remaining for last sector

        OR      DX,[BYTCNT1]

        retnz                   ; NOT (BYTCNT1 = BYTCNT2 = 0)

        CMP     AX,1

        retnz

        MOV     AX,ES:[BP.dpb_sector_size]       ; Buffer EXACT one sector I/O

        MOV     [BYTCNT2],AX

        MOV     [SECCNT],DX             ; DX = 0

        return

BreakDown   ENDP



SUBTTL DISKREAD -- PERFORM USER DISK READ

PAGE

        procedure   DISKREAD,NEAR

ASSUME  DS:DOSGROUP,ES:NOTHING



; Inputs:

;       Outputs of SETUP

; Function:

;       Perform disk read

; Outputs:

;       DX:AX = Position of last record read

;       CX = No. of records read

;       ES:DI point to FCB

;       fcb_LSTCLUS, fcb_CLUSPOS fields in FCB set



        MOV     AX,ES:WORD PTR [DI.fcb_FILSIZ]

        MOV     BX,ES:WORD PTR [DI.fcb_FILSIZ+2]

        SUB     AX,WORD PTR [BYTPOS]

        SBB     BX,WORD PTR [BYTPOS+2]

        JB      RDERR

        JNZ     ENUF

        OR      AX,AX

        JZ      RDERR

        CMP     AX,CX

        JAE     ENUF

        MOV     CX,AX

ENUF:

        LES     BP,[THISDPB]

        CALL    BREAKDOWN

        MOV     CX,[CLUSNUM]

        invoke  FNDCLUS

        OR      CX,CX

        JZ      SHORT SKIPERR

RDERR:

        JMP     WRTERR

RDLASTJ:JMP     RDLAST

SETFCBJ2: JMP   SETFCB



SKIPERR:



        MOV     [LASTPOS],DX

        MOV     [CLUSNUM],BX

        CMP     [BYTCNT1],0

        JZ      RDMID

        invoke  BUFRD

RDMID:

        CMP     [SECCNT],0

        JZ      RDLASTJ

        invoke  NEXTSEC

        JC      SETFCBJ2

        MOV     BYTE PTR [TRANS],1      ; A transfer is taking place

ONSEC:

        MOV     DL,[SECCLUSPOS]

        MOV     CX,[SECCNT]

        MOV     BX,[CLUSNUM]

RDLP:

        invoke  OPTIMIZE

        PUSH    DI

        PUSH    AX

        PUSH    BX

        MOV     DS,WORD PTR [DMAADD+2]

ASSUME  DS:NOTHING

        PUSH    DX

        PUSH    CX

        CALL    DREAD

        POP     BX

        POP     DX

        ADD     BX,DX           ; Upper bound of read

        MOV     AL,ES:[BP.dpb_drive]

        invoke  SETVISIT

NXTBUF:                         ; Must see if one of these sectors is buffered

        MOV     [DI.VISIT],1    ; Mark as visited

        CMP     AL,[DI.BUFDRV]

        JNZ     DONXTBUF        ; Not for this drive

        CMP     [DI.BUFSECNO],DX

        JC      DONXTBUF        ; Below first sector

        CMP     [DI.BUFSECNO],BX

        JNC     DONXTBUF        ; Above last sector

        CMP     BYTE PTR [DI.BUFDIRTY],0

        JZ      CLBUFF                  ; Buffer is clean, so OK

; A sector has been read in when a dirty copy of it is in a buffer

; The buffered sector must now be read into the right place

        POP     AX              ; Recall transfer address

        PUSH    AX

        PUSH    DI              ; Save search environment

        PUSH    DX

        SUB     DX,[DI.BUFSECNO]   ; How far into transfer?

        NEG     DX

        MOV     SI,DI

        MOV     DI,AX

        MOV     AX,DX

        MOV     CX,ES:[BP.dpb_sector_size]

        MUL     CX

        ADD     DI,AX           ; Put the buffer here

        ADD     SI,BUFINSIZ

        SHR     CX,1

        PUSH    ES

        MOV     ES,WORD PTR [DMAADD+2]

        REP     MOVSW

        JNC     EVENMOV

        MOVSB

EVENMOV:

        POP     ES

        POP     DX

        POP     DI

        MOV     AL,ES:[BP.dpb_drive]

CLBUFF:

        invoke  SCANPLACE

DONXTBUF:

        invoke  SKIPVISIT

        JNZ     NXTBUF

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        POP     CX

        POP     CX

        POP     BX

        JCXZ    RDLAST

        CMP     BX,0FF8H

        JAE     SETFCB

        MOV     DL,0

        INC     [LASTPOS]       ; We'll be using next cluster

        JMP     RDLP



RDLAST:

        MOV     AX,[BYTCNT2]

        OR      AX,AX

        JZ      SETFCB

        MOV     [BYTCNT1],AX

        invoke  NEXTSEC

        JC      SETFCB

        MOV     [BYTSECPOS],0

        invoke  BUFRD



        entry   SETFCB

        LES     SI,[THISFCB]

        MOV     AX,[NEXTADD]

        MOV     DI,AX

        SUB     AX,WORD PTR [DMAADD]     ; Number of bytes transfered

        XOR     DX,DX

        MOV     CX,ES:[SI.fcb_RECSIZ]

        DIV     CX              ; Number of records

        CMP     AX,[RECCNT]     ; Check if all records transferred

        JZ      FULLREC

        MOV     BYTE PTR [DSKERR],1

        OR      DX,DX

        JZ      FULLREC         ; If remainder 0, then full record transfered

        MOV     BYTE PTR [DSKERR],3      ; Flag partial last record

        SUB     CX,DX           ; Bytes left in last record

        PUSH    ES

        MOV     ES,WORD PTR [DMAADD+2]

        XCHG    AX,BX           ; Save the record count temporarily

        XOR     AX,AX           ; Fill with zeros

        SHR     CX,1

        JNC     EVENFIL

        STOSB

EVENFIL:

        REP     STOSW

        XCHG    AX,BX           ; Restore record count to AX

        POP     ES

        INC     AX              ; Add last (partial) record to total

FULLREC:

        MOV     CX,AX

        MOV     DI,SI           ; ES:DI point to FCB

SETCLUS:

        TEST    ES:[DI].fcb_DEVID,-1

        JS      ADDREC                  ; don't set clisters if device

        MOV     AX,[CLUSNUM]

        AND     ES:[DI.fcb_LSTCLUS],0F000h  ; fcb_lstclus is packed with dir clus

        OR      ES:[DI.fcb_LSTCLUS],AX      ; drop in the correct part of fcb_lstclus

        MOV     AX,[LASTPOS]

        MOV     ES:[DI.fcb_CLUSPOS],AX

        entry   AddRec

        MOV     AX,WORD PTR [RECPOS]

        MOV     DX,WORD PTR [RECPOS+2]

        JCXZ    RET28           ; If no records read, don't change position

        DEC     CX

        ADD     AX,CX           ; Update current record position

        ADC     DX,0

        INC     CX

RET28:  return

DISKREAD    ENDP



SUBTTL DISKWRITE -- PERFORM USER DISK WRITE

PAGE

        procedure   DISKWRITE,NEAR

ASSUME  DS:DOSGROUP,ES:NOTHING



; Inputs:

;       Outputs of SETUP

; Function:

;       Perform disk write

; Outputs:

;       DX:AX = Position of last record written

;       CX = No. of records written

;       ES:DI point to FCB

;       fcb_LSTCLUS, fcb_CLUSPOS fields in FCB set



        AND     BL,3FH          ; Mark file as dirty

        MOV     ES:[DI.fcb_DEVID],BL

        LES     BP,[THISDPB]

        CALL    BREAKDOWN

        MOV     AX,WORD PTR [BYTPOS]

        MOV     DX,WORD PTR [BYTPOS+2]

        JCXZ    WRTEOFJ

        ADD     AX,CX

        ADC     DX,0            ; AX:DX=last byte accessed

        DIV     ES:[BP.dpb_sector_size]  ; AX=last sector accessed

        MOV     BX,AX           ; Save last full sector

        OR      DX,DX

        JNZ     CALCLUS

        DEC     AX              ; AX must be zero base indexed

CALCLUS:

        MOV     CL,ES:[BP.dpb_cluster_shift]

        SHR     AX,CL           ; Last cluster to be accessed

        PUSH    AX

        PUSH    DX              ; Save the size of the "tail"

        PUSH    ES

        LES     DI,[THISFCB]

        MOV     AX,ES:WORD PTR [DI.fcb_FILSIZ]

        MOV     DX,ES:WORD PTR [DI.fcb_FILSIZ+2]

        POP     ES

        DIV     ES:[BP.dpb_sector_size]

        MOV     CX,AX           ; Save last full sector of current file

        OR      DX,DX

        JZ      NORNDUP

        INC     AX              ; Round up if any remainder

NORNDUP:

        MOV     [VALSEC],AX     ; Number of sectors that have been written

        XOR     AX,AX

        MOV     WORD PTR [GROWCNT],AX

        MOV     WORD PTR [GROWCNT+2],AX

        POP     AX

        SUB     BX,CX           ; Number of full sectors

        JB      NOGROW

        JZ      TESTTAIL

        MOV     CX,DX

        XCHG    AX,BX

        MUL     ES:[BP.dpb_sector_size]  ; Bytes of full sector growth

        SUB     AX,CX           ; Take off current "tail"

        SBB     DX,0            ; 32-bit extension

        ADD     AX,BX           ; Add on new "tail"

        ADC     DX,0            ; ripple tim's head off

        JMP     SHORT SETGRW



HAVSTART:

        MOV     CX,AX

        invoke  SKPCLP

        JCXZ    DOWRTJ

        invoke  ALLOCATE

        JNC     DOWRTJ

WRTERR:

        XOR     CX,CX

        MOV     BYTE PTR [DSKERR],1

        MOV     AX,WORD PTR [RECPOS]

        MOV     DX,WORD PTR [RECPOS+2]

        LES     DI,[THISFCB]

        return



DOWRTJ: JMP     DOWRT



WRTEOFJ:

        JMP     WRTEOF



TESTTAIL:

        SUB     AX,DX

        JBE     NOGROW

        XOR     DX,DX

SETGRW:

        MOV     WORD PTR [GROWCNT],AX

        MOV     WORD PTR [GROWCNT+2],DX

NOGROW:

        POP     AX

        MOV     CX,[CLUSNUM]    ; First cluster accessed

        invoke  FNDCLUS

        MOV     [CLUSNUM],BX

        MOV     [LASTPOS],DX

        SUB     AX,DX           ; Last cluster minus current cluster

        JZ      DOWRT           ; If we have last clus, we must have first

        JCXZ    HAVSTART        ; See if no more data

        PUSH    CX              ; No. of clusters short of first

        MOV     CX,AX

        invoke  ALLOCATE

        POP     AX

        JC      WRTERR

        MOV     CX,AX

        MOV     DX,[LASTPOS]

        INC     DX

        DEC     CX

        JZ      NOSKIP

        invoke  SKPCLP

NOSKIP:

        MOV     [CLUSNUM],BX

        MOV     [LASTPOS],DX

DOWRT:

        CMP     [BYTCNT1],0

        JZ      WRTMID

        MOV     BX,[CLUSNUM]

        invoke  BUFWRT

WRTMID:

        MOV     AX,[SECCNT]

        OR      AX,AX

        JZ      WRTLAST

        ADD     [SECPOS],AX

        invoke  NEXTSEC

        MOV     BYTE PTR [TRANS],1       ; A transfer is taking place

        MOV     DL,[SECCLUSPOS]

        MOV     BX,[CLUSNUM]

        MOV     CX,[SECCNT]

WRTLP:

        invoke  OPTIMIZE

        PUSH    DI

        PUSH    AX

        PUSH    DX

        PUSH    BX

        MOV     AL,ES:[BP.dpb_drive]

        MOV     BX,CX

        ADD     BX,DX           ; Upper bound of write

        invoke  SETVISIT

ASSUME  DS:NOTHING

NEXTBUFF:                       ; Search for buffers

        MOV     [DI.VISIT],1    ; Mark as visited

        CMP     AL,[DI.BUFDRV]

        JNZ     DONEXTBUFF      ; Not for this drive

        CMP     [DI.BUFSECNO],DX

        JC      DONEXTBUFF      ; Buffer is not in range of write

        CMP     [DI.BUFSECNO],BX

        JNC     DONEXTBUFF      ; Buffer is not in range of write

        MOV     WORD PTR [DI.BUFDRV],00FFH    ; Free the buffer, it is being over written

        invoke  SCANPLACE

DONEXTBUFF:

        invoke  SKIPVISIT

        JNZ     NEXTBUFF

        POP     BX

        POP     DX

        MOV     DS,WORD PTR [DMAADD+2]

        CALL    DWRITE

        POP     CX

        POP     BX

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        JCXZ    WRTLAST

        MOV     DL,0

        INC     [LASTPOS]       ; We'll be using next cluster

        JMP     SHORT WRTLP



WRTERRJ: JMP     WRTERR



WRTLAST:

        MOV     AX,[BYTCNT2]

        OR      AX,AX

        JZ      FINWRT

        MOV     [BYTCNT1],AX

        invoke  NEXTSEC

        MOV     [BYTSECPOS],0

        invoke  BUFWRT

FINWRT:

        LES     DI,[THISFCB]

        MOV     AX,WORD PTR [GROWCNT]

        MOV     CX,WORD PTR [GROWCNT+2]

        OR      AX,AX

        JNZ     UPDATE_size

        OR      CX,CX

        JZ      SAMSIZ

Update_size:

        ADD     WORD PTR ES:[DI.fcb_FILSIZ],AX

        ADC     WORD PTR ES:[DI.fcb_FILSIZ+2],CX

SAMSIZ:

        MOV     CX,[RECCNT]

        JMP     SETCLUS



WRTEOF:

        MOV     CX,AX

        OR      CX,DX

        JZ      KILLFIL

        SUB     AX,1

        SBB     DX,0

        DIV     ES:[BP.dpb_sector_size]

        MOV     CL,ES:[BP.dpb_cluster_shift]

        SHR     AX,CL

        MOV     CX,AX

        invoke  FNDCLUS

        JCXZ    RELFILE

        invoke  ALLOCATE

        JC      WRTERRJ

UPDATE:

        LES     DI,[THISFCB]

        MOV     AX,WORD PTR [BYTPOS]

        MOV     ES:WORD PTR [DI.fcb_FILSIZ],AX

        MOV     AX,WORD PTR [BYTPOS+2]

        MOV     ES:WORD PTR [DI.fcb_FILSIZ+2],AX

        XOR     CX,CX

        JMP     ADDREC



RELFILE:

        MOV     DX,0FFFH

        invoke  RELBLKS

        JMP     SHORT UPDATE



KILLFIL:

        XOR     BX,BX

        PUSH    ES

        LES     DI,[THISFCB]

        MOV     ES:[DI.fcb_CLUSPOS],BX

        XCHG    BX,ES:[DI.fcb_FIRCLUS]

        AND     ES:[DI.fcb_LSTCLUS],0F000H

        POP     ES

        OR      BX,BX

        JZ      UPDATE

        invoke  RELEASE

        JMP     SHORT UPDATE

DISKWRITE   ENDP

do_ext



CODE    ENDS

    END

            
                                                                                                                 