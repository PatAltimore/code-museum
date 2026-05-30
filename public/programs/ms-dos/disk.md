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
description: "Disk routines from MS-DOS v2.0, showcasing the evolution of file handling and device management in early PC operating systems."

summary:
  - point: "Introduces subroutines for swapping and managing device buffers"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Demonstrates early attempts at integrating device-specific I/O"
    link: "https://en.wikipedia.org/wiki/Input/output"
    link_label: "Input/output"
  - point: "Highlights the influence of Unix-like abstractions in MS-DOS v2.0"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Uses assembly-level tricks for efficient memory and device access"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly language"
  - point: "Showcases the transition from single-tasking to more complex file systems"
    link: "https://en.wikipedia.org/wiki/File_system"
    link_label: "File system"

enhancements:
  - id: "include-directives-for-segment-setup"
    line_start: 9
    line_end: 29
    title: "Why MS-DOS Needed INCLUDE Directives"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The initial lines of the file establish the inclusion of external assembly files (`DOSSEG.ASM`, `DOSSYM.ASM`, `DEVSYM.ASM`) and set up the code segment and assumptions for segment registers. These directives were crucial for organizing the modular structure of MS-DOS, allowing developers to reuse common definitions and routines across multiple source files. In the early 1980s, this modularity was a necessity due to the limited memory and storage available on systems like the IBM PC. Tim Paterson and Microsoft engineers structured MS-DOS to be portable and adaptable for OEMs, which required clear separation of hardware-specific and general-purpose code. This approach influenced later operating systems, including Windows, which continued to use modular design principles for scalability and compatibility."
  - id: "swapret-buffer-management"
    line_start: 195
    line_end: 207
    title: "The Subroutine That Swapped Device Buffers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `SWAPRET` subroutine is part of a larger mechanism for swapping device buffers. It restores registers (`BX`, `SI`, `DI`, `ES`) after a device buffer operation, ensuring the system remains stable and predictable. In the early days of computing, direct hardware interaction often required programmers to manually save and restore processor state. This was particularly important in MS-DOS, where device I/O operations could interrupt other processes. The technique of buffer swapping allowed MS-DOS to handle multiple devices efficiently, a feature inspired by Unix-like systems. This subroutine exemplifies the low-level control programmers had to exert over hardware in the absence of modern abstractions. Buffer management techniques like these laid the groundwork for more sophisticated memory management systems in later operating systems."
  - id: "swapcon-console-buffer-switching"
    line_start: 299
    line_end: 649
    title: "Switching Buffers for Console Input and Output"
    wikipedia_url: "https://en.wikipedia.org/wiki/Console_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `SWAPCON` subroutine is responsible for switching buffers between console input and output. It saves the current state of the console buffer (`COUTDSAV`, `CINSAV`) and updates the buffer pointers for subsequent operations. This routine reflects the challenges of managing I/O devices in a single-tasking environment like MS-DOS. Console devices were treated as special cases, requiring dedicated handling to ensure smooth user interaction. The design of `SWAPCON` shows the influence of Unix-like abstractions, where devices are treated as files, but with added complexity for real-time interaction. This approach influenced later systems, including Windows and Linux, where device management became more standardized and abstracted."
  - id: "load-main-read-routine"
    line_start: 123
    line_end: 193
    title: "How MS-DOS Read Files from Disk"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The `LOAD` subroutine is the main routine for reading files from disk. It takes inputs such as the file position (`DX:AX`), the number of records to read (`CX`), and the file control block (FCB) pointer (`DS:DI`). It updates the FCB fields (`fcb_LSTCLUS`, `fcb_CLUSPOS`) and returns the position of the last record read. This routine demonstrates the low-level nature of file handling in MS-DOS, where developers had to manually manage cluster positions and record counts. The design of `LOAD` was influenced by the constraints of FAT (File Allocation Table), the file system used by MS-DOS. FAT was simple and efficient, making it ideal for early PCs with limited resources. The techniques used in `LOAD` were foundational for later file systems, such as NTFS, which built on the principles of cluster-based storage but added features like journaling and security."
  - id: "store-main-write-routine"
    line_start: 657
    line_end: 939
    title: "Writing Files to Disk in MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The `STORE` subroutine handles writing files to disk. It takes inputs similar to `LOAD` (file position, record count, FCB pointer) and updates the FCB fields after writing. The routine includes checks for special cases, such as writing to console devices or handling end-of-file markers (`^Z`). Writing files in MS-DOS required careful management of disk clusters and record sizes, as the FAT file system did not support advanced features like journaling or metadata. The `STORE` routine reflects the simplicity and efficiency required for early PCs, where disk space and processing power were limited. This subroutine influenced later developments in file system design, including the optimization of disk writes and the handling of special device files in modern operating systems."
  - id: "get_io_fcb-jfn-to-fcb-conversion"
    line_start: 981
    line_end: 982
    title: "Converting JFN Numbers to FCB Pointers"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_control_block"
    image_url: ""
    image_caption: ""
    content: "The `get_io_fcb` subroutine converts Job File Numbers (JFNs) to File Control Block (FCB) pointers. JFNs were used internally by MS-DOS to track open files, while FCBs represented the file metadata. This conversion was necessary for routines that operated directly on FCBs, such as `LOAD` and `STORE`. The design of `get_io_fcb` highlights the dual-layer file management system in MS-DOS, where high-level abstractions (JFNs) were mapped to low-level data structures (FCBs). This approach was inspired by similar mechanisms in Unix, where file descriptors served as high-level handles for file operations. The concept of separating file handles from metadata influenced later operating systems, including Windows and Linux, which use file descriptors and inode structures for file management."
  - id: "phydrv-current-drive-detection"
    line_start: 1009
    line_end: 1013
    title: "Detecting the Current Drive in MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Drive_letter_assignment"
    image_url: ""
    image_caption: ""
    content: "The `PHYDRV` subroutine determines the physical drive corresponding to a logical drive identifier. Logical drives (e.g., A:, B:) were mapped to physical drives based on the system configuration. This routine checks the drive identifier (`AL`) and updates the `THISDRV` variable with the physical drive number. Drive letter assignment was a key feature of MS-DOS, making it easy for users to access storage devices. The design of `PHYDRV` reflects the simplicity of early PC systems, where drive letters were hardcoded and limited to a small range. This approach influenced later operating systems, which expanded drive letter assignment to support network drives and removable media. The concept of logical-to-physical drive mapping remains relevant in modern systems, where virtual drives and cloud storage are integrated seamlessly."
  - id: "get-this-drive-setup"
    line_start: 1015
    line_end: 1077
    title: "How MS-DOS Identifies the Current Drive"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The subroutine `GetThisDrv` retrieves the current drive number and sets up the environment for subsequent disk operations. This is a foundational step in MS-DOS's file system management, ensuring that all disk-related operations are directed to the correct physical drive. In the early 1980s, managing multiple drives was a novel feature for personal computers, as many systems were still single-drive setups. Tim Paterson's approach here reflects the influence of CP/M, which also used drive letters for file management. This routine laid the groundwork for MS-DOS's widespread adoption in multi-drive environments, influencing later operating systems like Windows and Linux, which retained the concept of drive letters and mount points."
  - id: "directory-read-cluster-navigation"
    line_start: 1111
    line_end: 1157
    title: "Reading Directory Blocks: Navigating Clusters"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The `DirRead` subroutine reads a directory block by navigating the cluster-based file system. It calculates the position within a cluster and retrieves the corresponding directory sector into a buffer. This operation is central to MS-DOS's FAT file system, which organizes files into clusters for efficient storage and retrieval. In 1983, this was a significant improvement over simpler file systems, allowing MS-DOS to handle larger disks and more complex directory structures. The cluster-based approach became a standard in personal computing, influencing file systems like FAT32 and NTFS. The technique also inspired similar designs in other operating systems, such as Linux's ext file systems, which use blocks and inodes for file management."
  - id: "fat-sector-read-bios-call"
    line_start: 1237
    line_end: 1393
    title: "Reading FAT Sectors with BIOS Assistance"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS"
    image_url: ""
    image_caption: ""
    content: "The `FATSecRd` subroutine reads sectors from the File Allocation Table (FAT) using BIOS calls. This routine is a critical part of MS-DOS's disk management, as the FAT contains the mapping of clusters to files. By leveraging BIOS, MS-DOS abstracts the hardware-specific details of disk access, making the operating system compatible with a wide range of hardware. In the early 1980s, this approach was innovative, as it allowed MS-DOS to be licensed to multiple OEMs without requiring significant modifications. The reliance on BIOS for disk operations influenced the design of later operating systems, which continued to use firmware interfaces for hardware abstraction."
  - id: "setup-disk-read-write"
    line_start: 1681
    line_end: 1733
    title: "Preparing Disk Transfers: User-Level Setup"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `SETUP` subroutine prepares the environment for disk read or write operations. It calculates the record position, cluster number, and sector position, ensuring that the transfer aligns with the file system's structure. This setup routine also initializes error flags and transfer counters, providing a robust framework for handling disk I/O. In 1983, this level of detail was necessary to optimize performance on the limited hardware of the IBM PC. The modular design of this routine influenced later operating systems, which adopted similar strategies for managing disk I/O. The concept of buffering and pre-calculation seen here became a cornerstone of efficient file system design."
  - id: "breakdown-disk-transfer"
    line_start: 1765
    line_end: 1819
    title: "Breaking Down Disk Transfers into Manageable Pieces"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `BreakDown` subroutine splits a disk transfer into smaller segments, calculating the number of bytes to transfer in the first and last sectors and the number of whole sectors in between. This routine is essential for handling large transfers that exceed the capacity of a single sector. In the constrained environment of the IBM PC, where memory and disk speeds were limited, breaking down transfers ensured reliability and efficiency. This technique influenced the design of later file systems, which continued to use segmentation to optimize disk I/O. The concept of breaking down operations into smaller tasks also became a common practice in software engineering, improving performance and maintainability."
  - id: "disk-read-user-level"
    line_start: 1821
    line_end: 1837
    title: "Performing User-Level Disk Reads"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `DISKREAD` subroutine performs user-level disk reads, using the outputs of `SETUP` to navigate the file system and retrieve data. It ensures that the read operation aligns with the user's request, handling errors and edge cases like end-of-file conditions. This routine exemplifies MS-DOS's focus on providing a simple yet powerful interface for disk operations. By abstracting the complexities of the FAT file system, `DISKREAD` made it easier for developers to write applications that interacted with the disk. This approach influenced the design of later operating systems, which continued to prioritize simplicity and robustness in their file system APIs."
  - id: "buffered-disk-read"
    line_start: 1909
    line_end: 2013
    title: "Buffering Disk Reads for Efficiency"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    image_url: ""
    image_caption: ""
    content: "The section starting with `NXTBUF` implements buffering for disk reads, checking if the requested sectors are already in memory and transferring them if necessary. This technique reduces the number of physical disk accesses, improving performance on the slow hardware of the early 1980s. Buffering was a relatively new concept in personal computing at the time, and its inclusion in MS-DOS v2.0 highlights the operating system's focus on efficiency. This approach became standard practice in file system design, influencing the development of caching mechanisms in later operating systems like Windows and Linux. The idea of optimizing disk I/O through buffering remains a fundamental principle in computing today."
  - id: "rdlast-partial-record-transfer"
    line_start: 2017
    line_end: 2095
    title: "Handling Partial Record Transfers Gracefully"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "This section, starting with the RDLAST label, is responsible for managing the transfer of partial records during disk read operations. The code checks if the byte count is zero, invokes the NEXTSEC routine to move to the next sector, and uses BUFRD to read data into a buffer. If the transfer is incomplete, it flags the error and calculates the remaining bytes in the last record. The programmer then ensures that these bytes are padded with zeros to maintain data integrity. This approach reflects the constraints of early IBM PC hardware, where disk operations were slow and prone to errors. Tim Paterson, adapting techniques from Unix-like systems, designed MS-DOS to handle such scenarios efficiently. The ability to gracefully handle partial records influenced later file systems, including FAT32, which built upon these foundational ideas to improve reliability and error handling."
  - id: "setclus-cluster-management"
    line_start: 2097
    line_end: 2129
    title: "Managing Clusters in the File System"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The SETCLUS routine manages cluster allocation and updates the file control block (FCB) with the correct cluster and position information. It checks if the device is non-clustered and skips cluster updates accordingly. For regular files, it packs the cluster information into the FCB structure, ensuring compatibility with the FAT file system. This design reflects the influence of the File Allocation Table (FAT), which was central to MS-DOS's file system. Paterson's implementation of cluster-based management allowed MS-DOS to efficiently handle files across different storage devices, a feature that became a hallmark of the FAT system and influenced later operating systems like Windows."
  - id: "diskread-sector-to-cluster-conversion"
    line_start: 2131
    line_end: 2191
    title: "Converting Sectors to Clusters for Disk Reads"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The DISKREAD routine converts sector positions into cluster positions, a critical operation for reading data from the disk. It breaks down the byte position into sectors and clusters, leveraging the cluster shift value stored in the disk parameter block (DPB). This conversion is essential for navigating the FAT file system, which organizes data into clusters rather than individual sectors. The routine also handles edge cases, such as rounding up for partial clusters, ensuring accurate data retrieval. This technique showcases the influence of Unix-like systems on MS-DOS, as Paterson borrowed concepts like hierarchical file systems and adapted them to the constraints of the IBM PC's hardware. The efficient handling of clusters paved the way for the widespread adoption of the FAT file system in later operating systems."
  - id: "norndup-rounding-up-clusters"
    line_start: 2223
    line_end: 2255
    title: "Rounding Up Clusters for Disk Writes"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The NORNDUP routine ensures that clusters are rounded up when writing data to the disk. It calculates the number of sectors written and adjusts the cluster count accordingly, accounting for any remainder. This approach prevents data loss and maintains consistency in the file system. By rounding up, the routine ensures that even partial clusters are allocated correctly, a technique that reflects the robustness of the FAT file system. Tim Paterson's attention to detail in handling edge cases like this contributed to MS-DOS's reliability and influenced the design of later file systems, including FAT16 and FAT32, which expanded on these principles to support larger storage capacities."
  - id: "wrtmid-buffered-disk-write"
    line_start: 2367
    line_end: 2459
    title: "Buffered Disk Writes for Improved Performance"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    image_url: ""
    image_caption: ""
    content: "The WRTMID routine implements buffered disk writes, a technique that improves performance by temporarily storing data in memory before writing it to the disk. This method reduces the number of direct disk accesses, which were slow on early IBM PC hardware. The routine checks the byte count, updates the sector position, and invokes the NEXTSEC routine to prepare for the next write operation. Buffered writes were a significant innovation in MS-DOS, allowing the operating system to handle file operations more efficiently. This technique became standard practice in later operating systems and influenced the development of caching mechanisms in modern file systems."
  - id: "wrtlast-finalizing-disk-write"
    line_start: 2467
    line_end: 2481
    title: "Finalizing Disk Writes with Error Handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_detection_and_correction"
    image_url: ""
    image_caption: ""
    content: "The WRTLAST routine finalizes disk write operations, ensuring that any remaining data is written to the disk and handling errors gracefully. It checks the byte count, updates the sector position, and invokes the BUFWRT routine to write the data. If an error occurs, the routine flags it and prevents further operations, maintaining data integrity. This careful handling of errors reflects the constraints of early IBM PC hardware, where disk operations were prone to failures. Tim Paterson's design ensured that MS-DOS could recover from such errors and continue functioning, a feature that influenced the reliability of later operating systems."
  - id: "update-size-adjusting-file-size"
    line_start: 2499
    line_end: 2503
    title: "Adjusting File Size After Writes"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_size"
    image_url: ""
    image_caption: ""
    content: "The Update_size routine adjusts the file size in the file control block (FCB) after a write operation. It adds the growth count to the current file size, ensuring that the FCB reflects the actual size of the file. This operation is critical for maintaining accurate file metadata, which is essential for file system integrity. By updating the file size dynamically, MS-DOS could handle files of varying sizes efficiently, a feature that became increasingly important as storage capacities grew. This technique influenced the design of file systems in later operating systems, which built upon MS-DOS's approach to managing file metadata."
  - id: "killfil-deleting-files"
    line_start: 2569
    line_end: 2593
    title: "Deleting Files and Releasing Clusters"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_deletion"
    image_url: ""
    image_caption: ""
    content: "The KILLFIL routine handles file deletion by releasing the clusters allocated to the file and updating the file control block (FCB) to reflect the deletion. It sets the cluster position and first cluster fields in the FCB to zero, marking the file as deleted. The routine also invokes the RELEASE function to free the allocated clusters, ensuring that the space can be reused. This approach to file deletion was efficient and straightforward, aligning with MS-DOS's design philosophy of simplicity and performance. The technique influenced the development of file deletion mechanisms in later operating systems, which built upon these principles to implement more advanced features like file recovery."

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