---
title: "DIR.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/DIR.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/DIR.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "dir"
order: 20
description: "This file contains the directory management routines for MS-DOS v2.0, a critical rewrite that introduced subdirectories and Unix-inspired features to the operating system."

summary:
  - point: "Introduces subdirectory support, a major enhancement over MS-DOS 1.x"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Optimized for the IBM PC's 8086 processor and constrained memory environment"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"
  - point: "Reflects Unix-inspired design decisions, such as hierarchical file systems"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Tim Paterson's foundational work on 86-DOS shaped the structure of MS-DOS"
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"
  - point: "Released under MIT license by the Computer History Museum in 2014"
    link: "https://computerhistory.org/blog/ms-dos-source-code/"
    link_label: "Computer History Museum"

enhancements:
  - id: "include-dosseg-setup"
    line_start: 9
    line_end: 21
    title: "Setting up the DOS segment environment"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section initializes the DOS segment environment by including essential assembly files like DOSSEG.ASM and DOSSYM.ASM. These files define critical constants, macros, and segment structures that the rest of the program relies on. In 1983, MS-DOS was being adapted for a wide range of hardware configurations, and this modular approach allowed developers to reuse code across different builds. The inclusion of these files reflects the careful planning required to manage memory and segment registers on the Intel 8086 processor, which had a 1MB address space but was typically constrained to 640KB of usable RAM. This setup laid the groundwork for the directory management routines that follow, ensuring consistency and compatibility across the operating system."
  - id: "name-dir-initialization"
    line_start: 35
    line_end: 151
    title: "Defining directory-related variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "This section declares and initializes variables used throughout the directory management routines. These include pointers to directory buffers, file control blocks (FCBs), and cluster numbers. In the early 1980s, file systems were transitioning from flat structures to hierarchical ones, inspired by Unix. MS-DOS v2.0 introduced subdirectories, requiring new data structures to track directory entries and their relationships. The variables defined here reflect this shift, enabling operations like directory creation, deletion, and traversal. Tim Paterson, who originally developed 86-DOS, likely drew on his experience with CP/M's simpler file system when designing these structures. However, the rewrite for MS-DOS v2.0 under Microsoft's guidance incorporated more advanced concepts to meet the demands of business users and the IBM PC's growing ecosystem."
  - id: "builddir-subroutine"
    line_start: 253
    line_end: 301
    title: "Growing directories dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/Hierarchical_file_system"
    image_url: ""
    image_caption: ""
    content: "The BUILDDIR subroutine handles the dynamic growth of directories when no free entries are available. This was a significant innovation for MS-DOS v2.0, as earlier versions lacked support for hierarchical file systems. The routine checks whether the directory is the root (which cannot grow) and allocates new clusters if necessary. This capability was inspired by Unix, which had long supported hierarchical file systems. The implementation reflects the constraints of the 8086 processor and the FAT (File Allocation Table) file system, which was optimized for small disks and limited memory. The ability to grow directories dynamically was crucial for business applications, where file organization and scalability were becoming increasingly important."
  - id: "setdotent-subroutine"
    line_start: 303
    line_end: 485
    title: "Creating '.' and '..' entries in directories"
    wikipedia_url: "https://en.wikipedia.org/wiki/Directory_(computing)"
    image_url: ""
    image_caption: ""
    content: "The SETDOTENT subroutine creates the special '.' and '..' entries in new directories, representing the current directory and its parent, respectively. These entries are a hallmark of hierarchical file systems, introduced in MS-DOS v2.0 to support subdirectories. The routine sets attributes, timestamps, and cluster numbers for these entries, ensuring they integrate seamlessly with the FAT file system. This feature was directly inspired by Unix, which had established the convention of '.' and '..' for directory navigation. Implementing this in MS-DOS required careful handling of the limited memory and processing power of the IBM PC, making it a technical achievement that expanded the operating system's capabilities."
  - id: "search-subroutine"
    line_start: 487
    line_end: 625
    title: "Searching for files in directories"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The SEARCH subroutine locates files within directories, a fundamental operation for any file system. It supports wildcard characters ('?') for flexible searches and checks file attributes to ensure matches align with the user's criteria. This functionality reflects the growing complexity of file management in the early 1980s, as personal computers transitioned from hobbyist tools to business machines. MS-DOS v2.0's ability to search directories efficiently was a key selling point, enabling users to organize and retrieve files in ways that were previously impossible on simpler systems like CP/M. The routine's design balances the constraints of the FAT file system and the 8086 processor, showcasing the ingenuity of Microsoft's developers."
  - id: "setcurrdir-subroutine"
    line_start: 943
    line_end: 1015
    title: "Managing the current directory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Working_directory"
    image_url: ""
    image_caption: ""
    content: "The SETCURRDIR subroutine manages the current directory, allowing users to navigate the hierarchical file system introduced in MS-DOS v2.0. It updates pointers and cluster numbers to reflect the user's location within the directory tree. This functionality was inspired by Unix, which had long supported the concept of a 'working directory.' Implementing it in MS-DOS required adapting the idea to the FAT file system and the constraints of the IBM PC's hardware. The ability to set and retrieve the current directory was essential for applications that needed to manage files across multiple subdirectories, marking a significant step forward in personal computing."
  - id: "dir-search-subroutine"
    line_start: 1017
    line_end: 1107
    title: "Searching for files in a directory"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The `Dir_search` subroutine is tasked with locating files within a directory, a fundamental operation in any file system. In MS-DOS 2.0, this routine reflects the shift to hierarchical directories, a feature inspired by Unix and introduced in this version of the operating system. At the time, personal computers were transitioning from flat file systems to more complex structures, enabling users to organize files in nested folders. The constraints of the Intel 8086 processor, with its limited memory and processing power, required the code to be highly efficient. Tim Paterson and the Microsoft team had to ensure that directory searches were fast and reliable, even on hardware with just 64KB of RAM. This subroutine laid the groundwork for modern file systems, influencing how directories are managed in subsequent operating systems."
  - id: "make-node-subroutine"
    line_start: 1309
    line_end: 1387
    title: "Creating a new file system node"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The `MakeNode` subroutine is responsible for creating new nodes in the file system, whether they are files or directories. This routine encapsulates the complexity of handling various error cases, such as attribute mismatches or attempts to create nodes with invalid names. In 1983, when MS-DOS 2.0 was released, the addition of subdirectories marked a significant evolution from the flat file systems of earlier DOS versions. Inspired by Unix, this feature allowed users to organize their data hierarchically, but it also introduced challenges in managing file attributes and ensuring compatibility with existing software. The code reflects meticulous attention to error handling, ensuring robustness in an era when system crashes were common. This subroutine's design principles can still be seen in modern file systems, highlighting its lasting impact."
  - id: "getpath-subroutine"
    line_start: 1389
    line_end: 1649
    title: "Parsing and validating file paths"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The `GETPATH` subroutine is a critical component of MS-DOS 2.0's file system, tasked with parsing and validating file paths. This routine handles various edge cases, such as malformed paths, device specifications, and root directory searches. In the early 1980s, personal computers were becoming more accessible, but their hardware limitations demanded efficient and compact code. The Intel 8086 processor, with its segmented memory model, posed unique challenges for path handling. Tim Paterson and the Microsoft team drew inspiration from Unix's hierarchical file system, adapting it to the constraints of DOS. The subroutine's modular design allowed OEMs to customize path handling for their specific hardware, contributing to MS-DOS's widespread adoption. This code exemplifies the ingenuity required to bring advanced features to resource-constrained systems."
  - id: "findfile-subroutine"
    line_start: 1863
    line_end: 1923
    title: "Locating files within directories"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The `FindFile` subroutine is designed to locate files within directories, a fundamental operation in MS-DOS's hierarchical file system. This routine builds upon the path parsing capabilities of `GETPATH`, ensuring that file searches are efficient and accurate. In 1983, the introduction of subdirectories in MS-DOS 2.0 represented a major step forward, enabling users to organize files more effectively. However, this feature also required robust mechanisms for navigating and searching directories. The code reflects the team's commitment to optimizing performance on the Intel 8086 processor, which had limited computational power. By handling edge cases such as attribute mismatches and malformed paths, `FindFile` contributed to the reliability of MS-DOS, cementing its reputation as a dependable operating system for personal computers."
  - id: "setdir-subroutine"
    line_start: 1927
    line_end: 1991
    title: "Setting the current directory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Directory_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `SetDir` subroutine is responsible for setting the current directory, a key feature introduced in MS-DOS 2.0 to support hierarchical file systems. This routine interacts with other components, such as `FindFile`, to ensure that directory changes are seamless and error-free. In the early 1980s, the concept of a 'current directory' was relatively new to personal computing, borrowed from Unix and adapted to the constraints of DOS. The code reflects the careful balance between functionality and performance, as the Intel 8086 processor's limitations required efficient use of memory and processing power. By enabling users to navigate directories easily, `SetDir` contributed to the usability of MS-DOS, helping it become the dominant operating system of its era."
  - id: "badpath-subroutine"
    line_start: 1999
    line_end: 2005
    title: "Handling invalid file paths"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "The `BADPATH` subroutine is a concise yet critical part of MS-DOS's error handling mechanisms. It is invoked when a file path is determined to be invalid, ensuring that the system responds gracefully to user errors. In the early 1980s, personal computers were becoming more prevalent, but their user interfaces were often unforgiving. A single typo in a file path could lead to system crashes or unpredictable behavior. Tim Paterson and the Microsoft team prioritized robust error handling in MS-DOS 2.0, reflecting the growing importance of user experience in software design. This subroutine's simplicity belies its significance, as it helped establish MS-DOS as a reliable and user-friendly operating system."
  - id: "badpathpop-error-handling-paths"
    line_start: 2043
    line_end: 2057
    title: "Error handling for invalid directory paths"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The BADPATHPOP routine is a compact error-handling mechanism for invalid directory paths. It pops saved registers off the stack, restores the segment register DS, and evaluates whether the path is too long or improperly terminated. The programmer's immediate goal here was to ensure graceful recovery from malformed input, a necessity in an era when user input was often unpredictable and error-prone. In 1983, MS-DOS 2.0 was being developed to support hierarchical directories, a feature inspired by Unix. This required robust error handling for path parsing, as users were now navigating nested structures rather than a flat file system. The constraints of the Intel 8086 processor, with its limited registers and segmented memory model, meant every byte of assembly code had to be carefully optimized. This routine exemplifies the pragmatic, minimalist design philosophy of early MS-DOS. It prioritizes functionality and efficiency over readability, reflecting the urgency of delivering a competitive product to IBM and other OEMs. While modern operating systems handle similar errors with more abstraction, the direct manipulation of registers and memory here offers a fascinating glimpse into the low-level workings of early PC software."
  - id: "rootpath-directory-search-initialization"
    line_start: 2059
    line_end: 2105
    title: "Setting up directory search parameters"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "ROOTPATH is a foundational routine for initializing directory search parameters. It sets up key variables like LASTENT, ENTFREE, and VOLID, ensuring the system is ready for subsequent operations like GETENTRY and NEXTENTRY. By loading drive parameters into ES:BP and clearing critical flags, this routine establishes the groundwork for traversing directories. In the early 1980s, directory traversal was a novel concept for many PC users. MS-DOS 2.0's hierarchical file system was a direct response to Unix's influence, aiming to bring professional-grade features to consumer hardware. Tim Paterson and Microsoft's engineers had to adapt these ideas to the limitations of the Intel 8086, which lacked advanced features like memory protection or multitasking. ROOTPATH's design reflects the era's focus on efficiency and direct hardware interaction. The use of assembly language allowed programmers to squeeze maximum performance out of limited resources, but it also required meticulous attention to detail. This routine's legacy can be seen in modern file systems, which still rely on initialization steps to manage directory structures, albeit with far greater abstraction."
  - id: "matchattributes-filtering-file-attributes"
    line_start: 2111
    line_end: 2153
    title: "Filtering files by their attributes"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_attribute"
    image_url: ""
    image_caption: ""
    content: "The MatchAttributes routine is a critical component for filtering files based on their attributes. It compares the desired search attributes (e.g., hidden, system, read-only) with the attributes of a found file, using bitwise operations to determine whether they match. The result dictates whether the search continues or halts. File attributes were a key innovation in early operating systems, allowing users and programs to distinguish between different types of files. MS-DOS inherited this concept from CP/M and expanded it to support more complex operations. In 1983, this was cutting-edge functionality, enabling features like selective backups and system file protection. The routine's reliance on bitwise operations and direct memory access highlights the low-level nature of MS-DOS. While modern systems handle similar tasks with high-level APIs, the principles remain the same. MatchAttributes is a reminder of the ingenuity required to implement sophisticated features on hardware with severe constraints, and its influence can be traced through decades of file system evolution."
  - id: "do-ext-final-cleanup"
    line_start: 2159
    line_end: 2167
    title: "Final cleanup and code segment closure"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The do_ext section marks the final cleanup and closure of the code segment. It signals the end of the directory-related routines and prepares the program for termination. While not a functional subroutine, this section is crucial for maintaining code organization and ensuring proper execution flow. In the early days of MS-DOS development, maintaining clear boundaries between code segments was essential. The segmented memory model of the Intel 8086 processor required programmers to carefully manage transitions between different parts of the program. This final section reflects the discipline and structure imposed by these constraints. Although modern programming languages and environments abstract away such details, the principles of code organization and cleanup remain relevant. The do_ext section is a small but significant reminder of the meticulous attention to detail required to build reliable software in the early 1980s."

---

;

; Directory routines for MSDOS

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



TITLE   DIR - Directory and path cracking

NAME    Dir



        i_need  NoSetDir,BYTE

        i_need  EntFree,WORD

        i_need  DirStart,WORD

        i_need  LastEnt,WORD

        i_need  ClusNum,WORD

        i_need  CurBuf,DWORD

        i_need  ThisFCB,DWORD

        i_need  Attrib,BYTE

        i_need  DelAll,BYTE

        i_need  VolID,BYTE

        i_need  Name1,BYTE

        i_need  ThisDPB,DWORD

        i_need  EntLast,WORD

        i_need  Creating,BYTE

        i_need  SecClusPos,BYTE

        i_need  ClusFac,BYTE

        i_need  NxtClusNum,WORD

        i_need  DirSec,WORD

        i_need  DriveSpec,BYTE

        i_need  Device_availability,BYTE

        i_need  RootStart,BYTE

        i_need  DevString,BYTE

        i_need  DevStrLen,BYTE



SUBTTL BUILDDIR,NEWDIR -- ALLOCATE DIRECTORIES

PAGE

    procedure   BUILDDIR,NEAR

ASSUME  DS:DOSGROUP,ES:NOTHING



; Inputs:

;       ES:BP Points to DPB

;       [THISFCB] Set if using NEWDIR entry point

;       [LASTENT] current last valid entry number in directory if no free

;               entries

; Function:

;       Grow directory if no free entries and not root

; Outputs:

;       CARRY SET IF FAILURE

;       ELSE

;          AX entry number of new entry

;          If a new dir [DIRSTART],[CLUSFAC],[CLUSNUM],[DIRSEC] set

;               AX = first entry of new dir

;       GETENT should be called to set [LASTENT]



        MOV     AX,[ENTFREE]

        CMP     AX,-1

        JNZ     GOTRET

        CMP     [DIRSTART],0

        JNZ     NEWDIR

        STC

        return                  ; Can't grow root



        entry   NEWDIR

        MOV     BX,[DIRSTART]

        OR      BX,BX

        JZ      NULLDIR

        invoke  GETEOF

NULLDIR:

        MOV     CX,1

        invoke  ALLOCATE

        retc

        MOV     DX,[DIRSTART]

        OR      DX,DX

        JNZ     ADDINGDIR

        call    SETDIRSRCH

        MOV     [LASTENT],-1

        JMP     SHORT GOTDIRREC

ADDINGDIR:

        CMP     [CLUSNUM],0FF8H

        JB      NOTFIRSTGROW

        MOV     [CLUSNUM],BX

NOTFIRSTGROW:

        MOV     DX,BX

        XOR     BL,BL

        invoke  FIGREC

GOTDIRREC:

        MOV     CL,ES:[BP.dpb_cluster_mask]

        INC     CL

        XOR     CH,CH

ZERODIR:

        PUSH    CX

        MOV     AL,0FFH

        invoke  GETBUFFR

        MOV     CX,ES:[BP.dpb_sector_size]

        PUSH    ES

        LES     DI,[CURBUF]

        PUSH    DI

        ADD     DI,BUFINSIZ

        XOR     AX,AX

        SHR     CX,1

        REP     STOSW

        JNC     EVENZ

        STOSB

EVENZ:

        POP     DI

        INC     AL

        MOV     ES:[DI.BUFDIRTY],AL

        POP     ES

        POP     CX

        INC     DX

        LOOP    ZERODIR

        MOV     AX,[LASTENT]

        INC     AX

GOTRET:

        CLC

        return



BUILDDIR    ENDP



;

; set up a . and .. directory entry for a directory

;

        procedure   SETDOTENT,NEAR

ASSUME  DS:DOSGROUP

        MOV     CX,4

        MOV     AX,2020H

        REP     STOSW

        STOSB

        MOV     SI,WORD PTR [THISFCB]

        MOV     AL,attr_directory

        STOSB

        ADD     DI,10

        MOV     AX,[SI.fcb_FTIME]

        STOSW

        MOV     AX,[SI.fcb_FDATE]

        STOSW

        MOV     AX,DX

        STOSW

        XOR     AX,AX

        STOSW

        STOSW

        return

SETDOTENT   ENDP



SUBTTL GETFILE, GETNAME, FINDNAME -- LOOK FOR A FILE

PAGE

        procedure   SEARCH,near



        entry   GETFILE

ASSUME  DS:NOTHING,ES:NOTHING

; Same as GETNAME except ES:DI points to FCB on successful return

        invoke  MOVNAME

        retc

        PUSH    DX

        PUSH    DS

        CALL    FINDNAME

        POP     ES

        POP     DI

        return



        entry   GETNAME

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DS,DX point to FCB

; Function:

;       Find file name in disk directory. First byte is

;       drive number (0=current disk). "?" matches any

;       character.

; Outputs:

;       Carry set if file not found

;       ELSE

;       Zero set if attributes match (always except when creating)

;       AH = Device ID (bit 7 set if not disk)

;       [THISDPB] = Base of drive parameters

;       DS = DOSGROUP

;       ES = DOSGROUP

;       [CURBUF+2]:BX = Pointer into directory buffer

;       [CURBUF+2]:SI = Pointer to First Cluster field in directory entry

;       [CURBUF] has directory record with match

;       [NAME1] has file name

; All other registers destroyed.



        invoke  MOVNAME

ASSUME  ES:DOSGROUP

        retc                    ; Bad file name?



        entry   FINDNAME

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        invoke  DEVNAME

        JC      FindEntry

        invoke  BUILDFCB

        return

ASSUME  ES:NOTHING



; NOTE THE FALL THROUGH



SUBTTL FINDENTRY -- LOOK FOR AN ENTRY

PAGE

        entry   FindEntry

ASSUME  DS:DOSGROUP,ES:NOTHING



; Inputs:

;       [THISDPB] set

;       [SECCLUSPOS] = 0

;       [DIRSEC] = Starting directory sector number

;       [CLUSNUM] = Next cluster of directory

;       [CLUSFAC] = Sectors/Cluster

;       [NAME1] = Name to look for

; Function:

;       Find file name in disk directory.

;       "?" matches any character.

; Outputs:

;       Carry set if name not found

;       ELSE

;       Zero set if attributes match (always except when creating)

;       AH = Device ID (bit 7 set if not disk)

;       [THISDPB] = Base of drive parameters

;       DS = DOSGROUP

;       ES = DOSGROUP

;       [CURBUF+2]:BX = Pointer into directory buffer

;       [CURBUF+2]:SI = Pointer to First Cluster field in directory entry

;       [CURBUF] has directory record with match

;       [NAME1] has file name

;       [LASTENT] is entry number of the entry

; All other registers destroyed.



        CALL    STARTSRCH

        CMP     BYTE PTR [ATTRIB],attr_volume_id

                                ; Looking for vol ID only ?

        JNZ     NOTVOLSRCH      ; No

        CALL    SETROOTSRCH     ; Yes force search of root

NOTVOLSRCH:

        CALL    GETENTRY

        entry   Srch

        PUSH    DS

        MOV     DS,WORD PTR [CURBUF+2]

ASSUME  DS:NOTHING

        MOV     AH,BYTE PTR [BX]

        OR      AH,AH                   ; End of directory?

        JZ      FREE

        CMP     AH,BYTE PTR [DELALL]             ; Free entry?

        JZ      FREE

        TEST    BYTE PTR [BX+11],attr_volume_id

                                        ; Volume ID file?

        JZ      CHKFNAM                 ; NO

        INC     BYTE PTR [VOLID]

CHKFNAM:

        MOV     SI,BX

        PUSH    SS

        POP     ES

ASSUME  ES:DOSGROUP

        MOV     DI,OFFSET DOSGROUP:NAME1

        MOV     CX,11

WILDCRD:

        REPE    CMPSB

        JZ      FOUND

        CMP     BYTE PTR ES:[DI-1],"?"

        JZ      WILDCRD

        POP     DS

ASSUME  DS:DOSGROUP

        entry   NEXTENT

        LES     BP,[THISDPB]

ASSUME  ES:NOTHING

        CALL    NEXTENTRY

        JNC     SRCH

        JMP     SHORT SETESRET



FREE:

        POP     DS

ASSUME  DS:DOSGROUP

        MOV     CX,[LASTENT]

        CMP     CX,[ENTFREE]

        JAE     TSTALL

        MOV     [ENTFREE],CX

TSTALL:

        CMP     AH,BYTE PTR [DELALL]             ; At end of directory?

        JZ      NEXTENT                 ; No - continue search

        MOV     [ENTLAST],CX

        STC

        JMP     SHORT SETESRET



FOUND:

;

; We have a file with a matching name.  We must now consider

; the attributes:

; ATTRIB        Action

; ------        ------

; Volume_ID     Is Volume_ID in test?

; Otherwise     If no create then Is ATTRIB+extra superset of test?

;               If create then Is ATTRIB equal to test?

;

        MOV     CH,[SI]                 ; Attributes of file

        POP     DS

ASSUME  DS:DOSGROUP

        MOV     AH,BYTE PTR [ATTRIB]    ; Attributes of search

        TEST    CH,attr_volume_id       ; Volume ID file?

        JZ      check_one_volume_id     ; Nope check other attributes

        TEST    AH,attr_volume_id       ; Can we find Volume ID?

        JZ      NEXTENT                 ; Nope, (not even $FCB_CREATE)

        XOR     AH,AH                   ; Set zero flag for $FCB_CREATE

        JMP     SHORT RETF              ; Found Volume ID

check_one_volume_id:

        CMP     AH,attr_volume_id       ; Looking only for Volume ID?

        JZ      NEXTENT                 ; Yes, continue search

        ADD     SI,15

        CALL    MatchAttributes

        JZ      RETF

        TEST    BYTE PTR [CREATING],-1  ; Pass back mismatch if creating

        JZ      NEXTENT                 ; Otherwise continue searching

RETF:

        LES     BP,[THISDPB]

        MOV     AH,ES:[BP.dpb_drive]

SETESRET:

        PUSH    SS

        POP     ES

        return



SUBTTL GETENTRY, NEXTENTRY, GETENT -- STEP THROUGH DIRECTORY

PAGE

        entry   GETENTRY

ASSUME  DS:DOSGROUP,ES:NOTHING



; Inputs:

;       [LASTENT] has directory entry

;       ES:BP points to drive parameters

; Function:

;       Locates directory entry in preparation for search

;       GETENT provides entry for passing desired entry in AX

;       A valid search environment MUST exist

;               ENDENT,ENTLAST,ENTFREE

; Outputs:

;       [CURBUF+2]:BX = Pointer to next directory entry in CURBUF

;       [CURBUF+2]:DX = Pointer to first byte after end of CURBUF

;       [LASTENT] = New directory entry number



        MOV     AX,[LASTENT]

        entry   GETENT

        MOV     [LASTENT],AX

        MOV     CL,4

        SHL     AX,CL

        XOR     DX,DX

        SHL     AX,1

        RCL     DX,1                    ; Account for overflow in last shift

        MOV     BX,ES:[BP.dpb_sector_size]

        AND     BL,255-31               ; Must be multiple of 32

        DIV     BX

        MOV     BX,DX                   ; Position within sector

        PUSH    BX

        invoke  DIRREAD

        POP     BX

SETENTRY:

        MOV     DX,WORD PTR [CURBUF]

        ADD     DX,BUFINSIZ

        ADD     BX,DX

        ADD     DX,ES:[BP.dpb_sector_size]       ; Always clears carry

        return



        entry   NEXTENTRY

ASSUME  DS:DOSGROUP,ES:NOTHING



; Inputs:

;       Same as outputs of GETENTRY, above

; Function:

;       Update BX, and [LASTENT] for next directory entry.

;       Carry set if no more.



        MOV     AX,[LASTENT]

        CMP     AX,[ENTLAST]

        JZ      NONE

        INC     AX

        ADD     BX,32

        CMP     BX,DX

        JB      HAVIT

        MOV     BL,BYTE PTR [SECCLUSPOS]

        INC     BL

        CMP     BL,BYTE PTR [CLUSFAC]

        JB      SAMECLUS

        MOV     BX,[NXTCLUSNUM]

        CMP     BX,0FF8H

        JAE     NONE

        CMP     BX,2

        JB      NONE

        JMP     GETENT



NONE:

        STC

        return



HAVIT:

        MOV     [LASTENT],AX

        CLC

        return



SAMECLUS:

        MOV     BYTE PTR [SECCLUSPOS],BL

        MOV     [LASTENT],AX

        PUSH    DS

        LDS     DI,[CURBUF]

ASSUME  DS:NOTHING

        MOV     DX,[DI.BUFSECNO]

        INC     DX

        POP     DS

ASSUME  DS:DOSGROUP

        invoke  FIRSTCLUSTER

        XOR     BX,BX

        JMP     SETENTRY

Search  ENDP



SUBTTL GETCURRDIR -- GET CURRENT DIRECTORY

PAGE

        procedure   Dir_search,NEAR

        entry   GETCURRDIR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       ES:BP Points to DPB

;       FATREAD should be called before this routine

; Function:

;       Find current directory for drive

;       If path is bad set current directory to the root

; Outputs:

;       DS = DOSGROUP

;       [SECCLUSPOS] = 0

;       [DIRSTART] = Cluster # of first cluster of directory ( 0 if root)

;       [DIRSEC] Set to phys sec # of first sector first cluster of directory

;       [CLUSNUM] Set to next cluster

;       [CLUSFAC] Sectors/cluster

; Destroys all registers



        MOV     BX,ES:[BP.dpb_current_dir]

        OR      BX,BX

        JZ      SETROOTSRCH

        CMP     BX,0FF8H

        JB      SETDIRSRCH

        PUSH    ES

        POP     DS

        LEA     SI,[BP.dpb_dir_text]

        CALL    ROOTPATH

ASSUME  DS:DOSGROUP

        JNC     SETCURR

        MOV     ES:[BP.dpb_current_dir],0



SETROOTSRCH:

ASSUME  DS:NOTHING,ES:NOTHING

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        XOR     AX,AX

        MOV     [DIRSTART],AX

        MOV     BYTE PTR [SECCLUSPOS],AL

        DEC     AX

        MOV     [CLUSNUM],AX

        MOV     AX,ES:[BP.dpb_first_sector]

        MOV     DX,ES:[BP.dpb_dir_sector]

        SUB     AX,DX

        MOV     BYTE PTR [CLUSFAC],AL

        MOV     [DIRSEC],DX

        return



SETCURR:

ASSUME  DS:DOSGROUP

        MOV     AX,[DIRSTART]

        MOV     ES:[BP.dpb_current_dir],AX

        return



        entry   SETDIRSRCH

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       BX cluster number of start of directory

;       ES:BP Points to DPB

; Function:

;       Set up a directory search

; Outputs:

;       DS = DOSGROUP

;       [DIRSTART] = BX

;       [CLUSFAC],[CLUSNUM],[SECCLUSPOS],[DIRSEC] set

; destroys AX,DX



        OR      BX,BX

        JZ      SETROOTSRCH

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        MOV     [DIRSTART],BX

        MOV     AL,ES:[BP.dpb_cluster_mask]

        INC     AL

        MOV     BYTE PTR [CLUSFAC],AL

        invoke  UNPACK

        MOV     [CLUSNUM],DI

        MOV     DX,BX

        XOR     BL,BL

        MOV     BYTE PTR [SECCLUSPOS],BL

        invoke  FIGREC

        MOV     [DIRSEC],DX

        return

Dir_search  ENDP



SUBTTL MAKENODE -- CREATE A NEW NODE

PAGE

        procedure   MakeNode,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       AL - attribute to create

;       DS:SI Points to asciz path

;       [THISFCB] Points to an empty FCB

; Function:

;       Make a new node

; Outputs:

;       DS=DOSGROUP

;       ES:BP Points to DPB

;       AX = 0 Success

;       AX = 1 A node by this name exists and is a directory

;       AX = 2 A new node could not be created                error

;       AX = 3 A node by this name exists and is a file       error

;       AX = 4 Bad Path                                       error

;       AX = 5 Attribute mismatch                             error

;       CARRY SET IF ERROR

;       ELSE

;          [DIRSTART],[DIRSEC],[CLUSFAC],[CLUSNUM] set to directory

;               containing new node.

;          [CURBUF+2]:BX Points to entry

;          [CURBUF+2]:SI Points to entry.fcb_firclus

;          [ThisFCB] is filled in

;          If this is a new entry zero is set and

;               Attribute byte in entry is directory

;          else a file existed by this name and:

;               [NAME1] has name

;               entry is not changed in any way

; Destroys all registers



        PUSH    AX

        CALL    GetPath

        MOV     DL,CL           ; Save CL info

        POP     CX

        MOV     BYTE PTR [ATTRIB],CL

        MOV     CX,AX

        JNC     make_exists     ; File existed

        JNZ     make_err_4      ; Path bad

        OR      DL,DL           ; Check "CL" return from GETPATH

        JNZ     make_type       ; Name simply not found

make_err_4:

        MOV     AL,4            ; case 1 bad path

make_err_ret:

        STC

        return



make_type:

        XOR     AL,AL           ; nothing exists... assume 0

        STC

        JMP     SHORT make_save

make_exists:

        JZ      make_exists_dir

        MOV     AL,3            ; file exists type 3

        TEST    BYTE PTR [ATTRIB],(attr_volume_id+attr_directory)

        JNZ     make_err_ret_5  ; but we wanted a volid or dir

        OR      CH,CH

        JS      make_dev        ; No furthur checks if device

        PUSH    CX

        MOV     DS,WORD PTR [CURBUF+2]

        MOV     CH,[BX+dir_attr] ; Get file attributes

        TEST    CH,attr_read_only

        JNZ     make_err_ret_5P ; Cannot create on read only files

        CALL    MatchAttributes

make_err_ret_5P:

        POP     CX

        JZ      make_dev        ; Attributes ok

make_err_ret_5:

        MOV     AL,5            ; Attribute mismatch

        JMP     SHORT make_err_ret



make_dev:

        XOR     AL,AL           ; Make sure zero set(atts match), carry clear(exists)

        MOV     AL,3            ; Restore correct value

        JMP     SHORT make_save

make_exists_dir:

        MOV     AL,1            ; directory exists

        TEST    BYTE PTR [ATTRIB],attr_directory

        JZ      make_err_ret    ; we didn't want a directory

        CLC

        return                  ; just return

make_save:

        PUSH    AX

;

; set up for call to NewEntry - it is in the middle of FCB_CREATE

; so we must also pre-push two registers.  They will be popped off

; by FCB_CREATE

;

        PUSH    SS

        POP     DS

        ASSUME  DS:DOSGROUP

        PUSHF                           ;Save state of flags

        CMP     BYTE PTR [NAME1],'.'    ;Detect attempt to make '.' or '..'

        JNZ     NOTLDOT                 ; Needed because no '.' or '..' in root

        POPF

        MOV     AL,1                    ;Force type 2 error

        JMP     SHORT SET2ERR



NOTLDOT:

        POPF

        PUSH    ES

        LES     DI,[ThisFCB]

        PUSH    DS

        PUSH    DI

        PUSH    ES

        MOV     AX,CX

        invoke  NewEntry

        POP     DS

        POP     ES

SET2ERR:

        OR      AL,AL

        POP     AX

        JZ      make_set_fcb

        MOV     AL,2                ; create failed case 2

        STC

        return

make_set_fcb:

ASSUME  DS:DOSGROUP

        PUSH    ES

        LES     DI,[THISFCB]

        INC     DI

        PUSH    DS

        PUSH    SI

        MOV     DS,WORD PTR [CURBUF+2]

ASSUME  DS:NOTHING

        MOV     SI,BX

        MOV     CX,11

        REP     MOVSB

        POP     SI

        POP     DS

ASSUME  DS:DOSGROUP

        POP     ES

        CMP     AL,1

        JA      make_errors

        OR      AL,AL

        CLC

        return

make_errors:

        STC

        return



MakeNode    ENDP



SUBTTL GETPATH -- PARSE AN asciz PATH

PAGE



        procedure   GETPATH,near

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DS:SI Points to asciz path

; Function:

;       Crack the path

; Outputs:

;       [DRIVESPEC] is non zero if a drive was specified

;       [ROOTSTART] is non zero if a / started the path

;       [ATTRIB] set to attr_directory+attr_hidden+attr_system

;       Same as FINDPATH except if path specifies a device in which case

;       bit 7 of AH will be set and SI and BX will point DOSGROUP relative

; Destroys all registers



        XOR     AX,AX

        MOV     WORD PTR [DRIVESPEC],AX

        MOV     BYTE PTR [ATTRIB],attr_directory+attr_system+attr_hidden

        LODSB

        invoke  PATHCHRCMP

        JZ      DEFAULTROOT

        MOV     AH,AL

        LODSB

        CMP     AL,':'

        JZ      DRVSPEC

        DEC     SI

        DEC     SI

        PUSH    DS

        PUSH    SI

        PUSH    SS

        POP     ES

        CMP     BYTE PTR [device_availability],0

        JZ      NOWDEV

        CALL    GOTPRESTRING2

        JNC     BUILDFCBJ               ; If no carry then we have a device

NOWDEV:

        CALL    DEFPATH

GOFIND:

        MOV     AL,[NoSetDir]

        PUSH    AX

        MOV     [NoSetDir],0

        CALL    GETCURRDIR

        POP     AX

        MOV     [NoSetDir],AL

        POP     SI

        POP     DS

        JMP     FINDPATH



DEFPATH:

        XOR     AL,AL

DRVPATH:

        invoke  GETTHISDRV

        retc                    ; Bad drive

        PUSH    SS

        POP     DS

        invoke  FATREAD

        CLC

        return



DEFAULTROOT:

        PUSH    DS

        PUSH    SI

        CALL    DEFPATH

        POP     SI

        POP     DS

ROOTSRCH:

        INC     BYTE PTR [ROOTSTART]

        CMP     BYTE PTR [SI],0

        JZ      PATHISNULL

        PUSH    DS

        PUSH    SI

        PUSH    ES              ; Save pointer to DPB

        CALL    CHKDEV

        POP     ES

        JNC     BUILDFCBJ

        POP     SI

        POP     DS

        JMP     ROOTPATH



BUILDFCBJ:

        POP     AX

        POP     AX

        context es

        invoke  BUILDFCB        ; Clears carry sets zero

        INC     AL              ; reset zero

        return



DRVSPEC:

        INC     [DRIVESPEC]

        MOV     AL,AH

        OR      AL,20H          ; Convert to lower case

        SUB     AL,60H          ; Make A=1

        PUSH    DS

        PUSH    SI

        PUSH    AX

        context es

        CALL    GotPreString2

        ASSUME  ES:NOTHING

        POP     AX

        JNC     BuildFCBJ

        CALL    DRVPATH

        POP     SI

        POP     DS

        retc                    ; Bad drive

        LODSB

        invoke  PATHCHRCMP

        JZ      ROOTSRCH

        DEC     SI

        PUSH    DS

        PUSH    SI

        JMP     GOFIND



PATHISNULL:

        CALL    SETROOTSRCH

ASSUME  DS:DOSGROUP

        XOR     AL,AL           ; Set zero (directory) clear carry

        return



CHKDEV:

ASSUME  DS:NOTHING

        PUSH    SS

        POP     ES

        MOV     DI,OFFSET DOSGROUP:DEVSTRING

        XOR     CX,CX

        MOV     CL,DEVSTRLEN

CHKPRESTRING:

        REPE    CMPSB

        JZ      GOTPRESTRING

        DEC     SI

        invoke  GETLET          ; Try convert to upper case

        CMP     AL,ES:[DI-1]

        JZ      CHKPRESTRING

NOPRESTRING:

        STC

        return



GOTPRESTRING:

        LODSB

        invoke  PATHCHRCMP

        JNZ     NOPRESTRING

GOTPRESTRING2:

        MOV     DI,OFFSET DOSGROUP:NAME1

        MOV     CX,9

TESTLOOP:

        invoke  GETLET

        CMP     AL,'.'

        JZ      TESTDEVICE

        invoke  PATHCHRCMP

        JZ      NOTDEV

        OR      AL,AL

        JZ      TESTDEVICE

        STOSB

        LOOP    TESTLOOP

NOTDEV:

        STC

        return



TESTDEVICE:

        ADD     CX,2

        MOV     AL,' '

        REP     STOSB

        PUSH    SS

        POP     DS

        invoke  DEVNAME

        return

GETPATH ENDP



SUBTTL ROOTPATH, FINDPATH -- PARSE A PATH

PAGE

        procedure   ROOTPATH,near



ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       ES:BP Points to DPB

;       FATREAD should be called before this routine

;       DS:SI Points to asciz string of path which is assumed to start at

;               the root (no leading '/').

; Function:

;       Search from root for path

; Outputs:

;       Same as FINDPATH

; Destroys all registers



        PUSH    DS

        CALL    SETROOTSRCH

        POP     DS



; NOTE FALL THROUGH



    entry   FINDPATH

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       ES:BP Points to DPB

;       DS:SI Points to asciz string of path (no leading '/').

;       [SECCLUSPOS] = 0

;       [DIRSEC] = Phys sec # of first sector of directory

;       [CLUSNUM] = Cluster # of next cluster

;       [CLUSFAC] = Sectors per cluster

;   Validate_path should be called before this routine is used,

;       unless it is KNOWN the path is good.

; Function:

;       Parse path name

; Outputs:

;       ES:BP Points to DPB

;       Carry set if bad path

;          DS:SI Points to path element causing failure

;          Zero set

;             [DIRSTART],[DIRSEC],[CLUSNUM], and [CLUSFAC] are set up to

;             start a search on the last directory

;             CL is zero if there is a bad name in the path

;             CL is non-zero if the name was simply not found

;                [ENTFREE] may have free spot in directory

;                [NAME1] is the name.

;                CL = 81H if '*'s or '?' in name 1, 80H otherwise

;          Zero reset

;             File in middle of path or bad name in path

;               or path too long or malformed path

;       ELSE

;          DS = DOSGROUP

;          AH = device ID

;          [CURBUF] contains directory record with match

;          [CURBUF+2]:BX Points into [CURBUF] to start of entry

;          [CURBUF+2]:SI Points to fcb_FIRCLUS field for entry

;          [NAME1] Has entry name

;          If last element is a directory zero is set and:

;             [DIRSTART],[SECCLUSPOS],[DIRSEC],[CLUSNUM], and [CLUSFAC]

;             are set up to start a search on it.

;          If last element is a file zero is reset

; Destroys all registers



        PUSH    ES

        PUSH    SI

        invoke  NAMETRANS

        MOV     CL,AL

        OR      CL,80H

        POP     DI

        POP     ES

        CMP     SI,DI

        JNZ     check_device

        JMP     BADPATH

check_device:

        PUSH    DS

        PUSH    SI

        MOV     AL,BYTE PTR [SI]



;

; can we see all devices

;

        context DS

        CMP     BYTE PTR [device_availability],0

        JZ      FindFile



;

; check name1 to see if we have a device...

;

        PUSH    ES

        context ES

        invoke  DevName         ; blast BX

        POP     ES

        ASSUME  ES:NOTHING

        JC      FindFile

        OR      AL,AL

        JNZ     FileInPath

        POP     SI

        POP     SI

        context ES

        invoke  BuildFCB

        INC     AL

        return



FindFile:

        ASSUME  ES:NOTHING

        PUSH    DI              ; Start of this element

        PUSH    ES

        PUSH    CX

        CALL    FINDENTRY

        POP     CX

        POP     ES

        POP     DI

        JC      BADPATHPOP

        LDS     DI,[CURBUF]

ASSUME  DS:NOTHING

        TEST    BYTE PTR [BX+dir_attr],attr_directory

        JZ      FileInPath



;

; if we are not setting the directory, then

; check for end of string

;

        CMP     BYTE PTR [NoSetDir],0

        JZ      SetDir

        MOV     DX,DI

        MOV     AX,DS

        POP     DI

        POP     DS

        CMP     BYTE PTR [DI],0

        JZ      SetRet

        PUSH    DS

        PUSH    DI

        MOV     DI,DX

        MOV     DS,AX



SetDir:

        MOV     DX,[SI]

        SUB     BX,DI

        SUB     SI,DI

        PUSH    BX

        PUSH    AX

        PUSH    SI

        PUSH    CX

        PUSH    [DI.BUFSECNO]

        MOV     BX,DX

        CALL    SETDIRSRCH

ASSUME  DS:DOSGROUP

        POP     DX

        XOR     AL,AL

        invoke  GETBUFFR

        POP     CX

        POP     SI

        POP     AX

        POP     BX

        MOV     DI,WORD PTR [CURBUF]

        ADD     SI,DI

        ADD     BX,DI

        POP     DI

        POP     DS

ASSUME  DS:NOTHING

        MOV     AL,[DI]

        OR      AL,AL

        JZ      SETRET

        INC     DI

        MOV     SI,DI

        invoke  PATHCHRCMP

        JNZ     find_bad_name

        JMP     FINDPATH



find_bad_name:

        DEC     SI

BADPATH:

        XOR     CL,CL   ; Set zero

        STC

        return



FILEINPATH:

        POP     DI

        POP     DS

        MOV     AL,[DI]

        OR      AL,AL

        JZ      INCRET

        MOV     SI,DI   ; Path too long

        STC

        return



INCRET:

        INC     AL      ; Reset zero

SETRET:

        PUSH    SS

        POP     DS

        return



BADPATHPOP:

        POP     SI

        POP     DS

        MOV     AL,[SI]

        MOV     SI,DI   ; Start of bad element

        OR      AL,AL   ; zero if bad element is last, non-zero if path too long

        STC

        return

ROOTPATH    ENDP



SUBTTL STARTSRCH -- INITIATE DIRECTORY SEARCH

PAGE

        procedure   StartSrch,NEAR

ASSUME  DS:DOSGROUP,ES:NOTHING



; Inputs:

;       [THISDPB] Set

; Function:

;       Set up a search for GETENTRY and NEXTENTRY

; Outputs:

;       ES:BP = Drive parameters

;       Sets up LASTENT, ENDENT, ENTFREE=ENTLAST=-1, VOLID=0

; Destroys all registers (via FATREAD)



        LES     BP,[THISDPB]

        XOR     AX,AX

        MOV     [LASTENT],AX

        MOV     BYTE PTR [VOLID],AL      ; No volume ID found

        DEC     AX

        MOV     [ENTFREE],AX

        MOV     [ENTLAST],AX

        return

StartSrch   ENDP



BREAK <MatchAttributes - the final check for attribute matching>



;

; Input:    [Attrib] = attribute to search for

;           CH = found attribute

; Output:   JZ <match>

;           JNZ <nomatch>

;

        procedure MatchAttributes,near

        ASSUME  DS:NOTHING,ES:NOTHING

        PUSH    AX

        MOV     AL,[Attrib]         ; AL <- SearchSet

        NOT     AL                  ; AL <- SearchSet'

        AND     AL,CH               ; AL <- SearchSet' and FoundSet

        AND     AL,attr_all         ; AL <- SearchSet' and FoundSet and Important

;

; the result is non-zero if an attribute is not in the search set

; and in the found set and in the important set. This means that we do not

; have a match.  Do a JNZ <nomatch> or JZ <match>

;

        POP     AX

        return

MatchAttributes ENDP



do_ext



CODE    ENDS

    END

                                                                                            