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
description: "Disk routines in MS-DOS v2.0, showcasing techniques for handling file I/O, device drivers, and system-level operations in early PC operating systems."

summary:
  - point: "Introduced file handles and subdirectories inspired by Unix"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Optimized for IBM PC hardware constraints (8086 processor)"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Demonstrates low-level assembly techniques for device I/O"
    link: "https://en.wikipedia.org/wiki/Device_driver"
    link_label: "Device driver"
  - point: "Key routines for swapping file control blocks (FCBs)"
    link: "https://en.wikipedia.org/wiki/File_Control_Block"
    link_label: "File Control Block"
  - point: "Early use of modular assembly code organization"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly language"

enhancements:
  - id: "include-dosseg-and-dossym"
    line_start: 9
    line_end: 27
    title: "Why Include Files Were Crucial in 1983"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "This section begins with the inclusion of DOSSEG.ASM and DOSSYM.ASM, which define segment structures and symbolic constants used throughout the disk routines. In the early 1980s, modular programming in assembly was rare but increasingly necessary as operating systems grew in complexity. By separating reusable definitions into include files, MS-DOS v2.0 achieved better maintainability and portability. Tim Paterson and the Microsoft team likely adopted this approach to streamline development for multiple OEMs. This modularity influenced later operating systems, including Windows, where header files became standard practice for defining system-level constants and structures."
  - id: "name-disk-initialization"
    line_start: 35
    line_end: 193
    title: "The Setup That Made Disk I/O Possible"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Control_Block"
    image_url: ""
    image_caption: ""
    content: "The NAME section initializes key variables and structures for disk operations, including file control blocks (FCBs) and device-specific parameters. FCBs were a legacy from CP/M, which MS-DOS inherited and extended. This setup reflects the constraints of the IBM PC's 8086 processor, which lacked advanced memory management features. By explicitly defining variables like DMAADD and THISFCB, the code ensures compatibility with the hardware's direct memory access (DMA) capabilities. This approach laid the groundwork for later abstractions like file handles and virtual file systems, which became standard in modern operating systems."
  - id: "swapback-subroutine"
    line_start: 195
    line_end: 207
    title: "How MS-DOS Swapped File Buffers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "SWAPBACK is a subroutine that restores file buffer states after an operation. It saves and restores registers like ES, DI, and SI, ensuring the system remains stable during context switches. This technique was critical in an era when multitasking was rudimentary and memory was scarce. Tim Paterson's design reflects the need for precise control over hardware resources, as the IBM PC had only 64KB to 640KB of RAM. Buffer management techniques like this influenced later systems, including Windows, where memory protection and multitasking became more sophisticated."
  - id: "swapcon-subroutine"
    line_start: 211
    line_end: 299
    title: "The Routine That Swapped Console Buffers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Console_application"
    image_url: ""
    image_caption: ""
    content: "SWAPCON swaps console buffers, enabling input/output operations to switch between different contexts. It manipulates FCBs and device IDs, ensuring the console remains responsive during disk operations. This routine highlights the challenges of managing I/O on early PCs, where the CPU handled both user input and disk access without dedicated hardware support. The technique of swapping buffers influenced later console applications and game engines, where efficient I/O handling became critical for performance."
  - id: "load-main-read-routine"
    line_start: 653
    line_end: 705
    title: "How MS-DOS Read Files Efficiently"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The LOAD routine is the main file read operation, handling both disk and device input. It checks for named devices and invokes appropriate subroutines like READDEV or DISKREAD. This modular approach allowed MS-DOS to support a wide range of hardware configurations, from floppy drives to serial devices. The routine's design reflects the influence of Unix, which inspired MS-DOS v2.0's file system enhancements. Techniques like this paved the way for modern file systems, where abstraction layers handle diverse storage media seamlessly."
  - id: "store-main-write-routine"
    line_start: 939
    line_end: 971
    title: "Writing Files in the Age of Floppy Disks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Floppy_disk"
    image_url: ""
    image_caption: ""
    content: "The STORE routine handles file writes, updating metadata like file date and time. It checks for device-specific conditions, such as EOF markers, and invokes subroutines like DISKWRITE for disk operations. This routine reflects the constraints of floppy disk storage, where sectors and clusters had to be managed manually. By abstracting these details, MS-DOS made file operations more accessible to developers. The techniques used here influenced later storage systems, including FAT, which became ubiquitous in personal computing."
  - id: "get-io-fcb-subroutine"
    line_start: 943
    line_end: 981
    title: "The Subroutine That Found File Buffers"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Control_Block"
    image_url: ""
    image_caption: ""
    content: "The get_io_fcb subroutine converts a Job File Number (JFN) into a File Control Block (FCB), linking logical file identifiers to physical storage locations. This operation was crucial for MS-DOS's compatibility with CP/M, which relied heavily on FCBs. By automating this conversion, the routine simplified file management for developers. The technique influenced later operating systems, where file handles replaced FCBs as the standard abstraction for file operations."
  - id: "getthisdrv-find-current-drive"
    line_start: 989
    line_end: 1015
    title: "How MS-DOS Found the Active Drive"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The GetThisDrv routine determines the current drive based on user input or default settings. It validates the drive identifier and updates system variables like THISDRV. This operation reflects the simplicity of MS-DOS's drive management, where each drive was represented by a single letter (e.g., A:, B:). The routine's design influenced later systems, where drive letters became a standard convention for accessing storage devices."
  - id: "getthisdrv-disk-drive-selection"
    line_start: 1015
    line_end: 1077
    title: "How MS-DOS Decides Which Drive to Use"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `GetThisDrv` routine determines the physical drive unit to use for subsequent operations. This is critical in a multi-drive environment where MS-DOS must manage floppy drives, hard drives, and other storage devices. At the time, IBM PCs typically had one or two floppy drives and, increasingly, hard drives. Tim Paterson's original 86-DOS design was single-drive-centric, but MS-DOS 2.0 had to accommodate the growing complexity of storage setups. The routine reads the drive parameters and sets up the environment for further disk operations. This mechanism influenced later operating systems by establishing a clear abstraction between logical file operations and physical drive management, paving the way for device independence in modern systems."
  - id: "dirread-directory-sector-access"
    line_start: 1023
    line_end: 1111
    title: "Reading Directory Sectors in FAT Filesystems"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The `DirRead` procedure reads a directory block into memory, using the FAT (File Allocation Table) structure to locate the correct cluster and sector. FAT was a groundbreaking file system introduced with MS-DOS, designed for simplicity and compatibility with small storage devices. In this routine, the programmer calculates the cluster and sector position using division and addition, reflecting the low-level arithmetic required to navigate FAT structures. This approach was essential for performance on early PCs with limited CPU power and storage. The FAT file system became ubiquitous, influencing the design of removable storage formats like USB drives and SD cards, and remains in use today in embedded systems."
  - id: "fatsecrd-reading-fat-sectors"
    line_start: 1119
    line_end: 1237
    title: "The Routine That Reads FAT Sectors"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "`FATSecRd` handles the reading of sectors from the File Allocation Table (FAT), a critical part of MS-DOS's file system. FAT stores metadata about file locations, sizes, and clusters, enabling the operating system to locate and manage files efficiently. This routine calls BIOS functions to perform the actual disk read, using parameters like the transfer address and sector count. The reliance on BIOS for hardware-level operations reflects the design philosophy of MS-DOS, which prioritized compatibility with IBM PC hardware. FAT's simplicity and efficiency made it the default file system for decades, influencing storage formats like FAT32 and exFAT, and it remains a standard for interoperability between devices."
  - id: "setup-disk-read-write-preparation"
    line_start: 1681
    line_end: 1681
    title: "Preparing Disk Reads and Writes"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `SETUP` routine initializes the parameters for disk read or write operations, setting up the drive, cluster, and sector information. It calculates positions within clusters and segments, ensuring that data transfers are correctly aligned with the physical disk structure. This routine reflects the constraints of early PCs, where memory and storage were tightly limited, requiring careful planning to avoid overflows or misaligned transfers. By abstracting these details, MS-DOS enabled developers to focus on higher-level application logic, a design principle that influenced later operating systems like Windows and Linux, which further abstracted hardware details from user-space applications."
  - id: "breakdown-large-disk-transfers"
    line_start: 1735
    line_end: 1765
    title: "Breaking Down Large Disk Transfers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_buffer"
    image_url: ""
    image_caption: ""
    content: "`BreakDown` splits large disk transfers into smaller chunks, calculating the number of sectors and bytes to transfer in each step. This routine is essential for handling files larger than the memory segment size, a common limitation in 16-bit systems. By dividing transfers into manageable pieces, MS-DOS ensured compatibility with the FAT file system and BIOS-level disk operations. This technique influenced buffer management in later systems, where efficient handling of large data transfers became critical for performance. It also laid the groundwork for modern file systems that optimize disk I/O through caching and prefetching."
  - id: "diskread-user-disk-read-operation"
    line_start: 1773
    line_end: 2131
    title: "Performing User-Level Disk Reads"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `DISKREAD` procedure executes user-level disk read operations, utilizing the outputs of `SETUP` and `BreakDown` to manage clusters, sectors, and buffers. It incorporates error handling and retry mechanisms, ensuring reliable data access even in the face of hardware failures. This routine highlights the challenges of programming for early PCs, where disk drives were slow and prone to errors. By implementing robust error handling and optimizing disk reads, MS-DOS set a standard for reliability that influenced later operating systems. The techniques used here, such as buffering and retry logic, remain relevant in modern disk I/O systems, ensuring data integrity and performance."
  - id: "rdlast-partial-record-transfer"
    line_start: 2017
    line_end: 2079
    title: "How MS-DOS Handles Partial Record Transfers"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The RDLAST subroutine is responsible for managing the transfer of the last record during a disk read operation. It checks if the byte count for the current transfer is zero, invokes the NEXTSEC routine to move to the next sector, and ensures that any remaining bytes are handled correctly. If the record is incomplete, it flags the error and pads the remaining bytes with zeros to maintain data integrity. This approach reflects the constraints of early file systems, where disk operations had to account for partial transfers due to fixed sector sizes. In 1983, MS-DOS 2.0 introduced significant changes inspired by Unix, including support for hierarchical directories and improved file handling. The RDLAST routine demonstrates the meticulous attention to detail required to ensure compatibility with the FAT (File Allocation Table) system while optimizing disk I/O performance. Tim Paterson's original design for 86-DOS laid the groundwork for these innovations, but the rewrite for MS-DOS 2.0 added sophistication to handle edge cases like partial records. This technique influenced later operating systems and file systems, where handling incomplete data transfers became a standard practice. Modern file systems like NTFS and ext4 build on these principles, ensuring robust error handling and data integrity during disk operations. The padding approach seen here echoes in contemporary systems, where zero-filling is used to prevent data corruption and maintain predictable behavior."
  - id: "evenfil-buffer-padding"
    line_start: 2081
    line_end: 2095
    title: "Buffer Padding: Filling the Gaps with Zeros"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_buffer"
    image_url: ""
    image_caption: ""
    content: "The EVENFIL routine is a continuation of RDLAST, focusing on padding the buffer with zeros when the last record is incomplete. It uses the REP STOSW instruction to efficiently fill memory with zeros, ensuring that the buffer aligns with the expected record size. This technique was crucial in an era when hardware constraints dictated fixed sector sizes and alignment requirements. In the early 1980s, disk drives operated with rigid sector boundaries, and software had to accommodate these limitations. The padding approach seen here was a pragmatic solution to ensure data consistency without requiring hardware modifications. Tim Paterson's work on MS-DOS 2.0 reflects the influence of Unix-like systems, where similar techniques were used to manage file I/O. Buffer padding remains relevant in modern computing, particularly in scenarios involving network transmission or storage systems. Techniques like zero-filling are used in protocols like TCP/IP to maintain alignment and prevent fragmentation. The efficiency of REP STOSW, a single instruction that performs repetitive memory operations, highlights the ingenuity of assembly language programming in optimizing performance on constrained hardware."
  - id: "setclus-cluster-management"
    line_start: 2097
    line_end: 2131
    title: "Cluster Management: Packing File Data Efficiently"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cluster_(file_system)"
    image_url: ""
    image_caption: ""
    content: "The SETCLUS routine is responsible for updating the cluster information in the File Control Block (FCB). It checks whether the file is associated with a device, updates the last cluster accessed, and sets the position within the cluster. This mechanism is central to the FAT file system, which organizes data in clusters to optimize disk space usage. The concept of clusters was borrowed from earlier file systems, including CP/M and Unix, but MS-DOS 2.0 refined it to suit the needs of personal computers. Clusters allowed the operating system to manage files more efficiently, reducing fragmentation and improving access times. Tim Paterson's design for 86-DOS laid the foundation for these enhancements, but the rewrite for MS-DOS 2.0 incorporated advanced features inspired by Unix. Cluster-based file systems became a standard in computing, influencing the design of NTFS, ext4, and other modern systems. The efficient packing of file data into clusters remains a cornerstone of storage optimization, enabling faster access and better utilization of disk space. This routine demonstrates the evolution of file system design, bridging the gap between early personal computing and contemporary storage technologies."
  - id: "diskread-disk-io-optimization"
    line_start: 2131
    line_end: 2131
    title: "Optimizing Disk I/O for Early PCs"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_buffer"
    image_url: ""
    image_caption: ""
    content: "The DISKREAD subroutine performs a user disk read operation, handling inputs from the FCB and outputs such as the last record position and the number of records read. It marks the file as dirty, calculates the last sector accessed, and invokes routines like BREAKDOWN and CALCLUS to manage cluster and sector calculations. This routine showcases the complexity of disk I/O optimization in the constrained environment of early PCs. In 1983, personal computers like the IBM PC relied on floppy disks and hard drives with limited capacity and slow access speeds. Efficient disk I/O was critical to ensure acceptable performance for users. The techniques used in DISKREAD reflect the influence of Unix-like systems, where similar methods were employed to optimize file handling. Tim Paterson's original design for 86-DOS provided a simple interface for disk operations, but MS-DOS 2.0 expanded on this foundation to support advanced features. Disk I/O optimization remains a key area of focus in modern computing, with techniques like caching, buffering, and prefetching building on the principles established here. The routines in DISK.ASM influenced later operating systems, including Windows, where efficient disk access became a cornerstone of performance improvements. The legacy of these optimizations can be seen in technologies like SSDs and NVMe drives, which push the boundaries of storage performance."
  - id: "wrteof-file-end-handling"
    line_start: 2513
    line_end: 2593
    title: "Handling File End: Closing the Loop"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The WRTEOF routine manages the end-of-file condition during a disk write operation. It calculates the last cluster accessed, checks for remaining data, and invokes routines like FNDCLUS and ALLOCATE to handle cluster allocation. If the file is empty, it jumps to KILLFIL to release resources. This routine demonstrates the meticulous handling of file end conditions in the FAT file system. In the early 1980s, file systems had to account for edge cases like empty files or incomplete writes. The WRTEOF routine reflects the influence of Unix-like systems, where similar techniques were used to manage file operations. Tim Paterson's work on MS-DOS 2.0 incorporated these principles, ensuring robust handling of file end conditions. Modern file systems continue to build on these techniques, with advanced features like journaling and transaction support ensuring data integrity. The careful management of file end conditions seen here influenced later operating systems, including Windows, where similar approaches are used to handle file operations. The legacy of WRTEOF can be seen in contemporary storage systems, where efficient resource management and error handling remain critical."

---

```asm
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



```
