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
description: "MS-DOS v2.0's disk routines showcase the evolution of personal computing, bridging early simplicity with Unix-inspired complexity."

summary:
  - point: "Introduction of subdirectories and file handles in MS-DOS v2.0"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Unix-inspired design choices in MS-DOS v2.0"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Tim Paterson's foundational work on 86-DOS adapted for IBM PCs"
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"
  - point: "MS-DOS v2.0's device driver architecture"
    link: "https://en.wikipedia.org/wiki/Device_driver"
    link_label: "Device driver"
  - point: "OEM licensing strategy that shaped the PC industry"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "include-dosseg-setup"
    line_start: 9
    line_end: 21
    title: "Setting the stage: Segment directives"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "These initial lines establish the segment directives and include essential files like DOSSEG.ASM. In the early 1980s, memory management was a critical concern for developers working on 8086 assembly. MS-DOS v2.0 introduced more sophisticated memory segmentation compared to its predecessor, enabling better multitasking and modularity. Tim Paterson and Microsoft's engineers were navigating the constraints of the IBM PC's hardware, which had a mere 640 KB of conventional memory. These directives ensured that the code could be loaded and executed efficiently within these limits. The modularity introduced here laid the groundwork for MS-DOS's adaptability, allowing it to be licensed to a wide range of OEMs and run on diverse hardware configurations."
  - id: "name-disk-variables"
    line_start: 35
    line_end: 193
    title: "Defining key disk-related variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_PC_DOS"
    image_url: ""
    image_caption: ""
    content: "This section defines crucial variables and constants for disk operations, such as DMA addresses, file control blocks (FCBs), and device identifiers. In the early 1980s, the IBM PC's BIOS provided basic disk I/O functionality, but MS-DOS needed to extend this to support features like subdirectories and file handles. These variables are part of the low-level mechanisms that enable MS-DOS to interact with storage devices efficiently. The use of FCBs reflects a transitional period in computing, as later versions of MS-DOS would move towards handle-based file management inspired by Unix. This design decision underscores the challenges of balancing backward compatibility with innovation."
  - id: "swapret-stack-management"
    line_start: 195
    line_end: 205
    title: "Managing stack state with SWAPRET"
    wikipedia_url: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)"
    image_url: ""
    image_caption: ""
    content: "The SWAPRET procedure restores the stack state after a series of operations. Stack management was a critical aspect of assembly programming, especially in an environment like MS-DOS where system stability depended on precise control of memory and registers. This routine ensures that the system can return to a known state, preventing corruption or crashes. The inclusion of such routines reflects the meticulous attention to detail required in low-level programming, where even minor errors could have catastrophic consequences. This approach to stack management influenced later operating systems, emphasizing the importance of reliability in system design."
  - id: "swapcon-context-switching"
    line_start: 207
    line_end: 297
    title: "Context switching for device operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Context_switch"
    image_url: ""
    image_caption: ""
    content: "The SWAPCON procedure handles context switching between input and output devices. This routine saves and restores device-specific states, allowing MS-DOS to manage multiple devices seamlessly. In the early 1980s, the concept of context switching was gaining traction as multitasking became more prevalent in computing. While MS-DOS was not a multitasking operating system, routines like SWAPCON demonstrate an early attempt to manage multiple I/O streams efficiently. This capability was crucial for supporting the diverse hardware ecosystem of the IBM PC and its clones. The techniques developed here would later evolve into more sophisticated multitasking mechanisms in operating systems like Windows."
  - id: "load-main-read-routine"
    line_start: 653
    line_end: 705
    title: "LOAD: The main read routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The LOAD procedure is the main routine for reading data from files or devices. It takes inputs like the file position and record count, and outputs the position and number of bytes read. This routine is a cornerstone of MS-DOS's file system, enabling efficient data retrieval. In the context of the IBM PC, where storage devices were relatively slow and limited, optimizing read operations was essential. The design of this routine reflects the influence of Unix, with its emphasis on modularity and simplicity. The ability to handle both files and devices through a unified interface was a significant step forward, paving the way for more advanced file systems in later operating systems."
  - id: "store-main-write-routine"
    line_start: 939
    line_end: 971
    title: "STORE: Writing data to disk"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The STORE procedure is the counterpart to LOAD, handling data writes to files or devices. It updates metadata like file date and time, reflecting MS-DOS's ability to manage file attributes. Writing data efficiently was a critical challenge in the early days of personal computing, where storage devices had limited capacity and speed. This routine demonstrates the careful balance between functionality and performance, ensuring that MS-DOS could meet the needs of both casual users and business applications. The techniques used here influenced the development of more sophisticated write operations in later file systems, highlighting the enduring legacy of MS-DOS's design."
  - id: "get-io-fcb-conversion"
    line_start: 981
    line_end: 1007
    title: "Converting JFN to FCB: get_io_fcb"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_control_block"
    image_url: ""
    image_caption: ""
    content: "The get_io_fcb procedure converts a Job File Number (JFN) into a File Control Block (FCB), enabling MS-DOS to manage file operations. FCBs were a legacy structure inherited from CP/M, the operating system that inspired MS-DOS. While effective for single-tasking environments, FCBs were eventually replaced by handle-based file management in later versions of MS-DOS. This routine reflects the transitional nature of MS-DOS v2.0, bridging the gap between older and newer paradigms. The ability to convert JFNs to FCBs ensured compatibility with existing software while laying the groundwork for future innovations in file management."
  - id: "phydrv-drive-mapping"
    line_start: 1009
    line_end: 1013
    title: "Mapping logical to physical drives"
    wikipedia_url: "https://en.wikipedia.org/wiki/Drive_letter_assignment"
    image_url: ""
    image_caption: ""
    content: "The PHYDRV procedure maps logical drive identifiers to physical drives, a fundamental feature of MS-DOS's file system. This routine ensures that users can access storage devices using familiar drive letters like A: and C:. Drive letter assignment was a novel concept at the time, simplifying storage access for users and developers alike. This approach became a defining characteristic of MS-DOS and influenced the design of later operating systems, including Windows. By abstracting physical storage devices into logical identifiers, MS-DOS made personal computing more accessible to a broader audience, contributing to its widespread adoption."
  - id: "get-this-drive"
    line_start: 1015
    line_end: 1077
    title: "Mapping clusters in the FAT filesystem"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The subroutine `GetThisDrv` is tasked with mapping clusters in the FAT filesystem. In this moment, the programmer is calculating the next cluster and sector positions based on the directory structure. This involves extracting information from key variables like `CLUSFAC` (sectors per cluster) and `DIRSEC` (first sector of the directory). The logic here is tightly bound to the constraints of the FAT filesystem, which was a groundbreaking approach to disk organization at the time. In 1983, MS-DOS v2.0 was a major leap forward, incorporating features inspired by Unix, such as hierarchical directories. However, the FAT filesystem remained central to its design. Tim Paterson, the original author of 86-DOS, had laid the groundwork for this structure, which Microsoft adapted and expanded. The simplicity of FAT made it ideal for the limited hardware of early PCs, such as the IBM PC with its 4.77 MHz Intel 8088 processor and 160 KB floppy disks. The consequence of this code is far-reaching. FAT became the de facto standard for disk organization in personal computing, surviving into modern systems as FAT32 and exFAT. The logic here—mapping clusters and sectors—remains foundational to how filesystems operate. Without these efficient calculations, early PCs might have struggled to manage their limited storage effectively."
  - id: "skip-cluster-loop"
    line_start: 1079
    line_end: 1089
    title: "Efficiently skipping unused clusters"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The `SKPCLLP` subroutine is a loop designed to skip over unused clusters in the FAT filesystem. It uses a combination of comparison and looping instructions to identify clusters marked as unused or reserved (`0FF8H` and above). This ensures that the system doesn't waste time processing unnecessary data, which was critical for the slow disk speeds of the early 1980s. At the time, disk I/O was one of the most significant bottlenecks in computing. The IBM PC's floppy drives were slow, and optimizing disk access was essential for acceptable performance. The FAT filesystem's design included mechanisms to mark clusters as used, free, or reserved, and this subroutine leverages those markers to streamline operations. This approach to skipping clusters is still relevant in modern filesystems. While the specifics have evolved, the principle of avoiding unnecessary reads persists. The efficiency gained here contributed to MS-DOS's reputation for speed and reliability, helping it dominate the personal computing market for over a decade."
  - id: "directory-read"
    line_start: 1111
    line_end: 1157
    title: "Reading directory sectors efficiently"
    wikipedia_url: "https://en.wikipedia.org/wiki/Directory_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `DirRead` subroutine is responsible for reading directory sectors into memory. It calculates the sector position within a cluster and loads the data into a buffer (`CURBUF`). This operation is fundamental to navigating the hierarchical directory structure introduced in MS-DOS v2.0. In 1983, hierarchical directories were a significant innovation for MS-DOS, inspired by Unix. They allowed users to organize files more effectively, a necessity as storage capacities grew. However, implementing this feature on the limited hardware of the time required careful optimization. The IBM PC's 8088 processor and 160 KB floppy disks demanded efficient algorithms to minimize disk access and maximize performance. The logic here—calculating sector positions and managing buffers—became a template for future filesystem designs. The ability to read directory sectors efficiently ensured that MS-DOS could handle larger files and more complex directory structures, paving the way for its widespread adoption in business and personal computing."
  - id: "fat-sector-read"
    line_start: 1237
    line_end: 1393
    title: "Reading sectors from the FAT table"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The `FATSecRd` subroutine reads sectors from the FAT table, which is the heart of the FAT filesystem. It interacts directly with the BIOS to perform the read operation, ensuring that the data is correctly transferred to memory. This subroutine includes error handling and retry mechanisms to deal with BIOS-level disk errors. In the early 1980s, direct BIOS calls were a common way to interact with hardware. The IBM PC's BIOS provided a standardized interface for disk operations, but it was limited and prone to errors. MS-DOS had to implement robust error handling to ensure reliability, especially in business environments where data integrity was critical. This subroutine exemplifies the close relationship between software and hardware in early PCs. The reliance on BIOS calls reflects the constraints of the time, but the error handling mechanisms show a forward-thinking approach to reliability. These principles influenced the design of later operating systems, where hardware abstraction layers became more sophisticated."
  - id: "setup-disk-transfer"
    line_start: 1681
    line_end: 1733
    title: "Preparing for disk read/write operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_storage"
    image_url: ""
    image_caption: ""
    content: "The `SETUP` subroutine prepares the system for disk read or write operations. It calculates positions within the file and disk, sets up buffers, and initializes key variables like `RECPOS` (record position) and `CLUSNUM` (cluster number). This preparation is crucial for efficient disk I/O. Disk operations were a major performance bottleneck in early PCs. The IBM PC's floppy drives had limited capacity and slow access times, so optimizing these operations was essential. The calculations performed in this subroutine ensure that data is read or written in the most efficient manner possible, minimizing disk access and maximizing throughput. This setup logic is a precursor to modern disk caching and buffering techniques. By organizing data transfer efficiently, MS-DOS could deliver acceptable performance on hardware that was, by today's standards, extremely limited. The principles established here influenced the design of later operating systems and filesystems."
  - id: "breakdown-disk-transfer"
    line_start: 1765
    line_end: 1819
    title: "Splitting disk transfers into manageable pieces"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_storage"
    image_url: ""
    image_caption: ""
    content: "The `BreakDown` subroutine divides disk transfers into smaller, manageable pieces. It calculates how many bytes to transfer in the first sector, the number of whole sectors to transfer, and the bytes remaining for the last sector. This division ensures that disk operations are performed efficiently and within the constraints of the hardware. In the early 1980s, disk I/O was one of the most challenging aspects of computing. The IBM PC's floppy drives had limited capacity and slow access times, making it essential to optimize every read and write operation. By splitting transfers into smaller pieces, this subroutine minimizes wasted time and ensures that data is handled correctly. This approach to disk transfers is still relevant today. While the specifics have evolved, the principle of breaking down large operations into smaller, more manageable tasks persists. The logic here contributed to MS-DOS's reputation for efficiency and reliability, helping it become the dominant operating system of its time."
  - id: "disk-read-operation"
    line_start: 1821
    line_end: 1837
    title: "Performing user-initiated disk reads"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_storage"
    image_url: ""
    image_caption: ""
    content: "The `DISKREAD` subroutine handles user-initiated disk read operations. It uses the outputs of the `SETUP` subroutine to perform the read, updating key variables like `CLUSNUM` (cluster number) and `BYTPOS` (byte position). This operation is fundamental to retrieving data from the disk. In 1983, disk read operations were a critical part of computing. Users expected their data to be accessible quickly and reliably, even on the limited hardware of the time. The IBM PC's floppy drives were slow, but MS-DOS's efficient disk handling routines helped mitigate this limitation. The logic here—using setup data to perform reads—became a template for future operating systems. The ability to handle disk reads efficiently ensured that MS-DOS could meet user expectations, contributing to its widespread adoption and long-lasting influence on personal computing."
  - id: "rdlast-last-record-transfer"
    line_start: 2017
    line_end: 2079
    title: "Last Record Transfer: Handling Partial Reads"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The RDLAST routine is tasked with managing the transfer of the last record during a disk read operation. It checks if the byte count is zero, invokes the NEXTSEC routine to move to the next sector, and uses BUFRD to read data into memory. If the record is incomplete, it flags a partial transfer and fills the remaining bytes with zeros. This meticulous handling of partial records reflects the challenges of working with the FAT file system, where data is stored in fixed-size clusters and records often span multiple sectors. In 1983, disk operations were constrained by slow hardware and limited memory, making efficient handling of edge cases like partial reads critical for performance and reliability. Tim Paterson's original 86-DOS laid the groundwork for these routines, but MS-DOS v2.0's rewrite added robustness inspired by Unix. The careful handling of partial records ensured data integrity, a principle that would persist in file system designs for decades."
  - id: "setclus-cluster-management"
    line_start: 2097
    line_end: 2127
    title: "Cluster Management: Updating File Positions"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "SETCLUS is responsible for updating cluster positions within the File Control Block (FCB). It checks if the device is a special type (e.g., a character device) before proceeding to update the cluster number and position fields. This routine highlights the FAT file system's reliance on clusters as the fundamental unit of storage. In the early 1980s, the concept of clusters allowed MS-DOS to efficiently manage disk space on small-capacity drives, a necessity given the hardware constraints of the IBM PC. The routine's design reflects the influence of Unix, which introduced hierarchical file systems and device independence. By abstracting cluster management into a dedicated routine, MS-DOS v2.0 improved modularity and maintainability, setting a precedent for future operating systems."
  - id: "diskread-disk-read-operations"
    line_start: 2131
    line_end: 2191
    title: "Disk Read Operations: Modular and Efficient"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_PC"
    image_url: ""
    image_caption: ""
    content: "DISKREAD encapsulates the logic for reading data from the disk into memory. It begins by marking the file as 'dirty' and calculates the position of the last record accessed. The routine uses division and bit-shifting operations to determine the cluster and sector positions, reflecting the low-level nature of assembly programming. In 1983, disk reads were a bottleneck due to slow hardware, so routines like DISKREAD were optimized to minimize overhead. The modular design, with clear inputs and outputs, shows the influence of structured programming principles. Tim Paterson's original 86-DOS code provided the foundation, but MS-DOS v2.0's rewrite introduced enhancements inspired by Unix, such as better support for hierarchical file systems and device drivers. This routine's efficiency contributed to MS-DOS's dominance in the PC market."
  - id: "norndup-rounding-up-sectors"
    line_start: 2223
    line_end: 2255
    title: "Rounding Up Sectors: Ensuring Data Alignment"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "NORNDUP handles the rounding up of sectors when writing data to disk. It calculates the number of sectors written and adjusts for any remainder, ensuring data alignment. This routine reflects the constraints of the FAT file system, where data must be stored in fixed-size sectors. In the early 1980s, disk alignment was crucial for performance, as misaligned writes could degrade speed and reliability. The routine's use of arithmetic operations to manage sector counts demonstrates the low-level control afforded by assembly language. MS-DOS v2.0's rewrite introduced improvements to disk handling inspired by Unix, including better support for large files and hierarchical directories. NORNDUP's focus on alignment ensured compatibility with a wide range of hardware, contributing to MS-DOS's success in the OEM market."
  - id: "wrtmid-writing-mid-sectors"
    line_start: 2367
    line_end: 2385
    title: "Writing Mid-Sectors: Optimizing Disk Writes"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_PC"
    image_url: ""
    image_caption: ""
    content: "WRTMID is responsible for writing data to the middle sectors of a file. It checks if there are sectors to write, updates the sector position, and invokes NEXTSEC to move to the next sector. The routine's design reflects the challenges of optimizing disk writes on early 1980s hardware, where slow disk speeds and limited memory required careful management of sector positions. By modularizing the write operation, MS-DOS v2.0 improved performance and maintainability. The routine's use of flags and counters to track progress shows the influence of structured programming principles. Tim Paterson's original 86-DOS code provided the foundation, but MS-DOS v2.0's rewrite introduced enhancements inspired by Unix, such as better support for large files and hierarchical directories. WRTMID's efficiency contributed to MS-DOS's dominance in the PC market."
  - id: "killfil-deleting-files"
    line_start: 2569
    line_end: 2591
    title: "Deleting Files: Releasing Clusters"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "KILLFIL handles the deletion of files by releasing clusters associated with the file. It updates the FCB to mark the file as deleted and invokes RELEASE to free the clusters. This routine reflects the constraints of the FAT file system, where clusters must be explicitly released to avoid fragmentation. In the early 1980s, disk space was a precious resource, so efficient file deletion was critical for performance. The routine's design shows the influence of Unix, which introduced hierarchical file systems and device independence. By abstracting file deletion into a dedicated routine, MS-DOS v2.0 improved modularity and maintainability, setting a precedent for future operating systems. KILLFIL's focus on efficient cluster management ensured compatibility with a wide range of hardware, contributing to MS-DOS's success in the OEM market."

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