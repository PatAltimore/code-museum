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
description: "This file contains the disk utility routines for MS-DOS 2.0, showcasing the evolution of operating system design in the early 1980s."

summary:
  - point: "Introduces modular disk routines for handling file and device I/O."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Reflects the influence of Unix/XENIX in MS-DOS 2.0's design."
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Optimized for the IBM PC's hardware constraints."
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "include-directives-dosseg-devsym"
    line_start: 9
    line_end: 33
    title: "Modular Assembly with INCLUDE Directives"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "The opening lines of DISK.ASM use INCLUDE directives to pull in external assembly files (`DOSSEG.ASM`, `DOSSYM.ASM`, and `DEVSYM.ASM`) that define essential constants, macros, and symbols. This modular approach reflects the growing complexity of software in the early 1980s. By separating reusable components into distinct files, Tim Paterson and the Microsoft team could streamline development and ensure consistency across MS-DOS's codebase. At the time, assembly programming was still the norm for system-level software, and modularity was a practical way to manage sprawling projects like MS-DOS 2.0. This technique influenced later operating systems, where modularity became a cornerstone of maintainable codebases. Today, the concept of modular programming persists in languages like C, Python, and JavaScript, where libraries and modules are integral to software development."
  - id: "name-disk-global-variables"
    line_start: 35
    line_end: 193
    title: "Defining Global Variables for Disk Operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Global_variable"
    image_url: ""
    image_caption: ""
    content: "This section declares global variables used throughout the disk routines, such as `COUTDSAV`, `CINSAV`, and `THISFCB`. These variables store critical information like device identifiers, file control blocks (FCBs), and memory addresses. In 1983, MS-DOS 2.0 introduced subdirectories and file handles, requiring more sophisticated data management than its predecessor. The reliance on global variables reflects the constraints of early assembly programming, where memory was scarce, and structured programming was still emerging. These variables enabled efficient communication between routines but also introduced potential risks like unintended side effects. The concept of global variables influenced programming paradigms, leading to debates about their use and eventual alternatives like encapsulation in object-oriented programming. Modern operating systems and applications often trace their lineage to these foundational practices."
  - id: "swapback-subroutine-context-switching"
    line_start: 195
    line_end: 205
    title: "SWAPBACK: Context Switching for Device I/O"
    wikipedia_url: "https://en.wikipedia.org/wiki/Context_switch"
    image_url: ""
    image_caption: ""
    content: "The `SWAPBACK` subroutine handles context switching, saving and restoring registers (`ES`, `DI`, `SI`, `BX`) during device I/O operations. This routine ensures that the system state remains consistent while switching between tasks, a critical feature in MS-DOS's multitasking-inspired design. In the early 1980s, context switching was a novel concept for personal computers, influenced by larger systems like Unix. Tim Paterson's implementation reflects the constraints of the IBM PC, which lacked hardware support for multitasking but required efficient software solutions. This approach laid the groundwork for more advanced multitasking in later operating systems, such as Windows and Linux, where context switching became a cornerstone of process management."
  - id: "swapcon-subroutine-console-buffering"
    line_start: 207
    line_end: 297
    title: "SWAPCON: Managing Console Buffers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The `SWAPCON` subroutine manages console buffers, swapping input and output contexts for device communication. It uses global variables like `CONSWAP` and `IDLEINT` to track the state of the console. In MS-DOS 2.0, console I/O was a critical feature, enabling user interaction with the operating system. This routine reflects the influence of Unix, which popularized buffered I/O to optimize performance. By swapping contexts, MS-DOS could handle console input and output efficiently, even on the limited hardware of the IBM PC. This technique influenced later systems, where buffered I/O became standard practice in programming languages like C and operating systems like Windows and Linux."
  - id: "load-main-read-routine"
    line_start: 653
    line_end: 705
    title: "LOAD: The Main File Read Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The `LOAD` subroutine is the main routine for reading files in MS-DOS. It takes inputs like the file position (`DX:AX`) and record count (`CX`) and outputs the position of the last record read and the number of bytes read. This routine interacts with the file control block (FCB) to update fields like `fcb_LSTCLUS` and `fcb_CLUSPOS`. In 1983, MS-DOS 2.0 introduced hierarchical file systems, inspired by Unix, which required more sophisticated file handling routines. The `LOAD` routine reflects the challenges of implementing these features on the IBM PC, which had limited memory and processing power. This approach influenced later file systems, such as FAT32 and NTFS, which built upon the concepts introduced in MS-DOS."
  - id: "store-main-write-routine"
    line_start: 939
    line_end: 971
    title: "STORE: Writing Files to Disk"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The `STORE` subroutine handles writing files to disk, taking inputs like the file position (`DX:AX`) and record count (`CX`) and updating fields in the file control block (FCB). It checks for special cases like EOF and interacts with routines like `DISKWRITE` to perform the actual write operation. In MS-DOS 2.0, file writing was enhanced to support hierarchical file systems and device independence, reflecting the influence of Unix. This routine demonstrates the challenges of implementing these features on early personal computers, where hardware constraints required efficient and compact code. The techniques used in `STORE` influenced later operating systems, where file writing became a fundamental feature of modern computing."
  - id: "getthisdrv-find-current-drive"
    line_start: 995
    line_end: 1013
    title: "GetThisDrv: Determining the Current Drive"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `GetThisDrv` subroutine determines the current drive based on the input drive identifier (`AL`). It outputs the physical drive number and sets the carry flag if the drive is invalid. This routine reflects the simplicity of MS-DOS's drive management, where drives were identified by letters (e.g., A, B, C). In 1983, MS-DOS 2.0 introduced features like subdirectories and file handles, requiring more sophisticated drive management than its predecessor. The `GetThisDrv` routine demonstrates the challenges of implementing these features on the IBM PC, which had limited hardware capabilities. This approach influenced later operating systems, where drive management became more advanced, supporting features like dynamic drive mapping and network drives."
  - id: "get-this-drive-disk-selection"
    line_start: 1015
    line_end: 1077
    title: "GetThisDrv: Selecting the active drive"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This routine determines the active drive for subsequent disk operations. The programmer's goal here was to ensure that the system could correctly identify and operate on the selected drive. In 1983, when MS-DOS v2.0 was released, personal computers were just beginning to support multiple drives, such as floppy disks and hard drives. This routine reflects the need to adapt to a growing complexity in storage devices. Tim Paterson and the Microsoft team had to balance simplicity and flexibility, ensuring that MS-DOS could handle these devices efficiently while maintaining backward compatibility with earlier versions. The ability to dynamically select drives became a cornerstone of MS-DOS's versatility, influencing later operating systems like Windows 3.1 and beyond, where drive management became increasingly sophisticated."
  - id: "dirread-directory-sector-access"
    line_start: 1111
    line_end: 1157
    title: "DirRead: Accessing directory sectors"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The DirRead routine reads a directory block into memory, enabling the system to navigate the file structure stored on disk. This was a critical function in MS-DOS v2.0, which introduced hierarchical directories inspired by Unix. At the time, most personal computers operated with flat file systems, where all files were stored in a single directory. The introduction of subdirectories allowed users to organize files more effectively, a feature that would become standard in all modern operating systems. This routine demonstrates the technical challenges of implementing such functionality on hardware with limited memory and processing power. The approach taken here influenced the design of later file systems, including FAT32 and NTFS, and set the stage for the complex directory structures we use today."
  - id: "fat-sector-read-fatsecrd"
    line_start: 1237
    line_end: 1393
    title: "FATSecRd: Reading sectors from the FAT"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "This routine reads sectors from the File Allocation Table (FAT), the core structure of MS-DOS's file system. The FAT keeps track of which clusters on the disk are allocated to files and which are free. In the early 1980s, this was a revolutionary approach to file management, enabling efficient use of disk space and simplifying file recovery. The FAT system was designed to work seamlessly with the BIOS, leveraging low-level disk access routines. This routine highlights the ingenuity required to implement a robust file system on hardware with limited resources. The FAT file system became one of the most widely used file systems in the world, influencing the design of storage systems in Windows, USB drives, and SD cards. Its legacy persists in embedded systems and portable devices even today."
  - id: "breakdown-user-disk-transfer"
    line_start: 1765
    line_end: 1819
    title: "BreakDown: Splitting disk transfers into manageable parts"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_storage"
    image_url: ""
    image_caption: ""
    content: "The BreakDown routine divides large disk transfers into smaller, manageable pieces. This was necessary due to the constraints of the 8086 architecture, which could only address 64KB segments of memory. By breaking transfers into chunks, the system could handle files larger than the segment size without exceeding memory limits. In the early 1980s, disk storage was expanding rapidly, with hard drives becoming more common and file sizes increasing. This routine reflects the challenges of adapting software to evolving hardware capabilities. The technique of segmenting data transfers influenced later operating systems and file systems, ensuring compatibility with larger storage devices and paving the way for innovations like virtual memory and paging."
  - id: "disk-read-user-level-operation"
    line_start: 1821
    line_end: 2013
    title: "DISKREAD: Performing user-level disk reads"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS"
    image_url: ""
    image_caption: ""
    content: "The DISKREAD routine handles user-level disk read operations, interacting with the BIOS to retrieve data from storage devices. This routine encapsulates the complexity of disk I/O, providing a simplified interface for higher-level operations. In the early 1980s, direct interaction with hardware was common, but MS-DOS v2.0 introduced abstractions that made programming more accessible. By relying on BIOS calls, this routine ensured compatibility with a wide range of hardware, a key factor in MS-DOS's success as an OEM product. The abstraction of disk operations influenced the design of later operating systems, including Windows and Linux, where device drivers and APIs further separated hardware-specific details from application-level code. This routine represents a step toward the modular, hardware-independent software architectures we use today."
  - id: "rdlast-disk-read-final-record"
    line_start: 2017
    line_end: 2079
    title: "Reading the last record on disk"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The RDLAST routine is tasked with reading the final record of a file from the disk. It calculates the number of bytes transferred, checks for partial records, and handles the filling of incomplete records with zeros. This was critical in ensuring data integrity during file reads in MS-DOS 2.0. In 1983, personal computers were limited by slow disk speeds and constrained memory, making efficient disk I/O operations a necessity. Tim Paterson and Microsoft's engineers drew inspiration from Unix-like systems, adapting techniques to work within the FAT file system's constraints. This routine exemplifies the careful balancing act between performance and reliability. RDLAST's approach to handling partial records influenced later disk utilities and APIs, ensuring robust file handling in systems like Windows 95 and beyond."
  - id: "evenfil-zero-padding-in-disk-read"
    line_start: 2081
    line_end: 2089
    title: "Zero-padding for incomplete records"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The EVENFIL routine ensures that incomplete records are padded with zeros during disk reads. This technique prevents data corruption and aligns records to the expected size, a critical requirement for the FAT file system. In the early 1980s, disk storage was expensive and prone to errors, necessitating robust handling of edge cases like partial reads. EVENFIL reflects the meticulous attention to detail that characterized MS-DOS's development. By guaranteeing consistent record sizes, this approach laid the foundation for reliable file systems in later operating systems, including Windows NT and Linux."
  - id: "setclus-cluster-management"
    line_start: 2097
    line_end: 2127
    title: "Managing clusters in the FAT file system"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "SETCLUS is responsible for managing clusters within the FAT file system, updating file control blocks (FCBs) with the correct cluster and position information. This routine was essential for tracking file locations on disk, a cornerstone of the FAT architecture. In 1983, the FAT file system was a revolutionary approach to organizing data on floppy disks and hard drives, balancing simplicity with functionality. SETCLUS demonstrates how MS-DOS 2.0 extended FAT's capabilities to support subdirectories and larger storage devices. This technique influenced subsequent file systems, including FAT32 and exFAT, which are still in use today for flash storage devices."
  - id: "diskread-efficient-disk-read-operations"
    line_start: 2131
    line_end: 2191
    title: "Optimizing disk read operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_storage"
    image_url: ""
    image_caption: ""
    content: "The DISKREAD routine performs efficient disk read operations, leveraging the FAT file system's structure to locate and retrieve data. It calculates the position of the last record read and updates the file control block accordingly. In the early 1980s, disk I/O was a bottleneck for personal computers, with slow transfer speeds and limited caching capabilities. DISKREAD showcases the ingenuity of MS-DOS's developers in optimizing these operations within the constraints of the hardware. This routine's principles of efficient data retrieval influenced later operating systems and disk utilities, paving the way for advancements in caching and prefetching techniques."
  - id: "calclus-cluster-calculation"
    line_start: 2193
    line_end: 2221
    title: "Calculating clusters for disk writes"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "CALCLUS calculates the cluster to be accessed during disk writes, a critical operation for maintaining the FAT file system's integrity. By dividing the file size by the sector size and applying a cluster shift, this routine determines the correct cluster for data storage. In 1983, managing clusters efficiently was vital for maximizing disk utilization and ensuring reliable file operations. CALCLUS reflects the careful engineering that went into MS-DOS 2.0, balancing performance with the limitations of early storage devices. This technique influenced later file systems, including NTFS and ext4, which expanded on FAT's cluster management principles."
  - id: "wrtlast-writing-final-record"
    line_start: 2467
    line_end: 2481
    title: "Writing the final record to disk"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_storage"
    image_url: ""
    image_caption: ""
    content: "WRTLAST handles the writing of the final record to disk, ensuring that any remaining data is correctly stored and aligned. This routine updates the file control block and prepares the system for subsequent operations. In the early 1980s, reliable disk writes were a cornerstone of personal computing, as data loss could have catastrophic consequences. WRTLAST exemplifies the robust design of MS-DOS 2.0, which prioritized data integrity and system stability. The principles demonstrated here influenced the development of journaling file systems like NTFS and ext4, which further enhanced reliability in modern computing."
  - id: "update-size-file-size-management"
    line_start: 2499
    line_end: 2503
    title: "Updating file size after writes"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The Update_size routine updates the file size in the file control block after data has been written to disk. This ensures that the file's metadata accurately reflects its contents, a critical requirement for the FAT file system. In 1983, managing file sizes efficiently was essential for maintaining the integrity of storage devices and preventing data corruption. Update_size showcases MS-DOS 2.0's meticulous attention to detail, which set the stage for more advanced file systems like NTFS and exFAT. This routine's approach to metadata management influenced the design of modern operating systems and storage solutions."
  - id: "killfil-file-deletion"
    line_start: 2569
    line_end: 2591
    title: "Deleting files from the FAT file system"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "KILLFIL handles the deletion of files from the FAT file system, releasing clusters and updating the file control block to reflect the change. This routine was crucial for maintaining the integrity of the file system and preventing orphaned clusters. In the early 1980s, file deletion was a complex operation, requiring careful management of metadata and storage structures. KILLFIL demonstrates the robust design of MS-DOS 2.0, which prioritized reliability and efficiency. The techniques used here influenced the development of modern file systems, including NTFS and ext4, which expanded on FAT's principles to support advanced features like journaling and transaction-based operations."

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