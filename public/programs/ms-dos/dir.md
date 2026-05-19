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
description: "This file contains the directory management routines for MS-DOS v2.0, a pivotal rewrite that introduced subdirectories and Unix-inspired features to the operating system."

summary:
  - point: "Introduces subdirectory support, a major leap from MS-DOS 1.x"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Implements directory allocation and search algorithms optimized for FAT file systems"
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "File Allocation Table"
  - point: "Reflects the influence of Unix/XENIX on MS-DOS v2.0's design"
    link: "https://en.wikipedia.org/wiki/Xenix"
    link_label: "Xenix"
  - point: "Showcases early assembly-level optimization techniques for constrained hardware"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Demonstrates Microsoft's strategic pivot to OEM licensing dominance"
    link: "https://en.wikipedia.org/wiki/MS-DOS#History"
    link_label: "MS-DOS History"

enhancements:
  - id: "include-dosseg-and-dossym"
    line_start: 9
    line_end: 21
    title: "Setting the stage: segment and symbols"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "These initial lines include DOSSEG.ASM and DOSSYM.ASM, establishing the segment definitions and symbol references for the directory routines. In 1983, when MS-DOS v2.0 was released, memory segmentation was a critical feature of the Intel 8086 architecture, allowing programs to manage memory efficiently within the constraints of a 1MB address space. Tim Paterson and Microsoft's engineers leveraged these segments to structure the operating system's code and data. This setup reflects the meticulous planning required to make MS-DOS modular and adaptable for OEMs, a strategy that would cement Microsoft's dominance in the PC market. By defining these foundational elements, the code ensures compatibility and clarity across the rest of the file."
  - id: "name-dir-segment"
    line_start: 35
    line_end: 151
    title: "Defining directory-related variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "This section declares variables related to directory management, such as `DirStart`, `LastEnt`, and `ClusNum`. These variables are integral to navigating and manipulating the FAT (File Allocation Table) file system. In the early 1980s, FAT was a revolutionary design for managing files on floppy disks and hard drives, balancing simplicity with functionality. The variables here are tightly coupled to FAT's structure, enabling efficient traversal of directories and allocation of clusters. Microsoft's decision to use FAT in MS-DOS was influenced by its simplicity and adaptability, which made it suitable for the limited storage and processing power of early PCs. This design choice would later become ubiquitous, influencing file systems in Windows and other operating systems for decades."
  - id: "builddir-grow-directory"
    line_start: 253
    line_end: 301
    title: "Growing directories dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `BUILDDIR` procedure is responsible for growing directories when no free entries are available. This functionality is a direct response to the limitations of MS-DOS 1.x, which lacked subdirectory support and relied on flat file structures. By introducing dynamic directory growth, MS-DOS v2.0 allowed users to organize files hierarchically, a feature inspired by Unix. The code checks if the directory is the root (which cannot grow) and allocates new clusters for subdirectories when needed. This innovation marked a significant step forward in personal computing, enabling more complex file organization and paving the way for modern operating systems. Developers studying this code would later adapt similar techniques for advanced file systems like NTFS."
  - id: "setdotent-dot-and-dotdot"
    line_start: 303
    line_end: 485
    title: "Creating '.' and '..' directory entries"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `SETDOTENT` routine creates the special directory entries `.` and `..`, representing the current directory and its parent, respectively. These entries are a hallmark of hierarchical file systems, borrowed directly from Unix. In MS-DOS v2.0, their inclusion reflects the operating system's shift toward a more sophisticated file management model. By standardizing these entries, MS-DOS ensured compatibility with software expecting Unix-like directory structures. This feature would become a cornerstone of file navigation in DOS and Windows, influencing countless applications and user interfaces. The routine's careful handling of attributes and timestamps showcases the attention to detail required to implement such foundational features in assembly language."
  - id: "search-find-file"
    line_start: 487
    line_end: 625
    title: "Searching for files in directories"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The `SEARCH` procedure locates files within a directory, leveraging FAT's structure to match filenames and attributes. This routine embodies the challenges of early file system design: balancing speed, memory efficiency, and functionality. In the constrained environment of the IBM PC, every byte of memory and CPU cycle mattered, making assembly-level optimization critical. The code supports wildcard matching (`?`), a feature that simplifies file searches for users and programs. Techniques like this would later influence search algorithms in more advanced file systems and operating systems. Microsoft's implementation here laid the groundwork for file manipulation tools in DOS and Windows, shaping how users interact with their data."
  - id: "setrootsrch-root-directory"
    line_start: 909
    line_end: 939
    title: "Setting up root directory searches"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `SETROOTSRCH` routine initializes searches in the root directory, resetting key variables like `DIRSTART` and `CLUSNUM`. This functionality is essential for navigating FAT's hierarchical structure, ensuring that searches begin at the correct starting point. In the early 1980s, the concept of a root directory was becoming standard in operating systems, influenced by Unix and other contemporaries. MS-DOS's implementation here reflects its evolution from a simple single-tasking system to one capable of supporting more complex file hierarchies. This routine's design would be studied and adapted by developers working on later file systems, including those in Windows and embedded systems."
  - id: "setcurr-current-directory"
    line_start: 943
    line_end: 1015
    title: "Managing the current directory"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `SETCURR` routine updates the current directory, a feature introduced in MS-DOS v2.0 to support subdirectories. By maintaining a reference to the current directory, the operating system enables relative path navigation, simplifying file access for users and programs. This innovation was inspired by Unix, which had long supported similar functionality. In the constrained environment of the IBM PC, implementing this feature required careful optimization to minimize memory and processing overhead. The routine's influence can be seen in later operating systems, where the concept of a current working directory remains fundamental. Microsoft's decision to include this feature in MS-DOS v2.0 helped establish the operating system as a viable platform for more sophisticated software."
  - id: "dir-search-file-existence"
    line_start: 1017
    line_end: 1107
    title: "Searching for files in a hierarchical system"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The `Dir_search` subroutine is tasked with locating files within the newly introduced hierarchical directory structure of MS-DOS 2.0. This was a significant departure from earlier flat file systems, enabling users to organize files into nested directories. At the time, hierarchical file systems were a hallmark of Unix, and their adoption in MS-DOS marked a step toward modern operating systems. Written in 8086 assembly, this routine carefully parses paths, validates their structure, and determines whether a file exists. In 1983, personal computers were becoming more common, and users needed better ways to manage growing numbers of files. Tim Paterson and Microsoft's engineers were under pressure to deliver a system that could compete with Unix while remaining simple enough for the average PC user. The techniques used here, such as efficient path parsing and error handling, influenced later operating systems like Windows and even Linux. Without this foundational work, the concept of intuitive file management might have been delayed by years."
  - id: "make-node-create-directory-entry"
    line_start: 1309
    line_end: 1387
    title: "Creating directory entries in MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Directory_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `MakeNode` subroutine is a cornerstone of MS-DOS's directory handling. It creates new directory entries, handling attributes, path validation, and error cases. This routine reflects the influence of Unix's hierarchical file system, which Microsoft sought to emulate while maintaining compatibility with simpler systems. In 1983, this functionality was essential for enabling applications to create and manage files programmatically. The subroutine's ability to distinguish between files and directories, validate paths, and handle errors laid the groundwork for modern file systems. Developers who studied MS-DOS's source code carried these ideas forward into systems like Windows NT and Linux. The introduction of hierarchical directories in MS-DOS 2.0 was a leap forward, enabling better organization and paving the way for features like long filenames and symbolic links in later systems."
  - id: "getpath-parse-file-paths"
    line_start: 1649
    line_end: 1801
    title: "Parsing file paths in assembly"
    wikipedia_url: "https://en.wikipedia.org/wiki/Path_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `GETPATH` subroutine is responsible for parsing file paths, a critical task in MS-DOS 2.0's hierarchical file system. It interprets paths, identifies drive specifications, and distinguishes between files and devices. This routine encapsulates the complexity of path handling in a compact, efficient assembly implementation. In 1983, personal computers were constrained by limited memory and processing power, making efficiency paramount. The design of `GETPATH` reflects the ingenuity required to implement advanced features within these constraints. Tim Paterson and Microsoft's engineers borrowed concepts from Unix while tailoring them to the needs of MS-DOS users. This subroutine's influence can be seen in later systems, where path parsing became a standard feature of file management APIs. The ability to handle paths efficiently enabled applications to navigate complex directory structures, a feature we take for granted today."
  - id: "findfile-locate-files-in-directory"
    line_start: 1863
    line_end: 1923
    title: "Locating files within directories"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The `FindFile` subroutine is a key component of MS-DOS's file system, enabling the operating system to locate files within directories. This routine uses path parsing and directory traversal to identify files, returning detailed information about their attributes and location. In the early 1980s, the ability to search directories efficiently was crucial for both users and applications. MS-DOS 2.0's hierarchical file system was inspired by Unix but optimized for the constraints of personal computers. The techniques used in `FindFile`, such as attribute matching and error handling, influenced later file systems, including FAT32 and NTFS. Developers who studied MS-DOS's internals carried these ideas forward, shaping the evolution of file management in operating systems. Without this foundational work, modern systems might lack the robust file search capabilities we rely on today."
  - id: "setdir-change-current-directory"
    line_start: 1927
    line_end: 1991
    title: "Changing the current directory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Working_directory"
    image_url: ""
    image_caption: ""
    content: "The `SetDir` subroutine enables MS-DOS to change the current working directory, a feature that became standard in operating systems. This routine updates internal pointers and validates paths, ensuring that the new directory exists and is accessible. In 1983, the concept of a working directory was still relatively new to personal computer users, who were accustomed to flat file systems. MS-DOS 2.0 introduced this feature to make file management more intuitive, borrowing from Unix's design principles. The implementation in assembly reflects the constraints of early PCs, where memory and processing power were limited. The ability to change directories programmatically was a game-changer, enabling more complex applications and workflows. This feature influenced the design of later systems, including Windows and Linux, where working directories are integral to file management and scripting."
  - id: "badpathpop-error-handling-paths"
    line_start: 2043
    line_end: 2057
    title: "Error handling for invalid paths"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The BADPATHPOP subroutine is a compact error-handling mechanism designed to recover from invalid or overly long file paths. It pops values off the stack, restores registers, and sets a carry flag to indicate an error condition. In the early 1980s, file path validation was a critical task, as users were beginning to navigate increasingly complex directory structures introduced in MS-DOS v2.0. Tim Paterson and the Microsoft team had to ensure robust error handling while working within the constraints of the Intel 8086 processor, which had limited registers and no built-in memory protection. This routine exemplifies the careful balance between simplicity and functionality that defined MS-DOS. The carry flag approach became a standard idiom in assembly programming, influencing error handling in subsequent operating systems and embedded systems. Without routines like BADPATHPOP, file systems might have been prone to crashes or undefined behavior when encountering invalid paths, undermining the reliability of early PCs."
  - id: "rootpath-directory-navigation"
    line_start: 2059
    line_end: 2105
    title: "Setting up root directory navigation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Directory_(computing)"
    image_url: ""
    image_caption: ""
    content: "ROOTPATH is a foundational subroutine for navigating the root directory in MS-DOS v2.0. It initializes key variables and prepares the system for directory searches. In 1983, the concept of subdirectories was a revolutionary addition to MS-DOS, inspired by Unix's hierarchical file system. This routine reflects the growing need for structured file organization as personal computers expanded beyond single-user, single-task environments. The design here is influenced by the Unix philosophy of simplicity and modularity, but adapted to the constraints of the 8086 architecture. ROOTPATH's initialization of volume IDs and directory entries laid the groundwork for efficient file system traversal, a feature that would become indispensable in later operating systems like Windows. Its influence is evident in modern file systems, where directory navigation remains a core function."
  - id: "startsrch-initiate-directory-search"
    line_start: 2107
    line_end: 2107
    title: "Initiating directory search operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The StartSrch routine initializes the parameters needed for directory search operations, setting up data structures for subsequent routines like GETENTRY and NEXTENTRY. In the early 1980s, efficient directory searching was a critical feature for operating systems, especially as file systems grew in complexity. MS-DOS v2.0 introduced hierarchical directories, requiring new algorithms to traverse and search them. This routine reflects the influence of Unix's directory handling but adapts it for the constrained environment of the Intel 8086 processor. By preloading drive parameters and resetting key variables, StartSrch ensures that subsequent operations can proceed efficiently. This approach to directory searching influenced later operating systems, including Windows, and laid the groundwork for modern file system APIs."
  - id: "matchattributes-filtering-file-search"
    line_start: 2111
    line_end: 2153
    title: "Filtering files by attributes"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_attribute"
    image_url: ""
    image_caption: ""
    content: "The MatchAttributes subroutine is a compact yet powerful mechanism for filtering files based on their attributes. It compares the desired attributes (e.g., hidden, system, read-only) with those of a file and determines whether they match. In the early 1980s, file attributes were a novel concept, allowing users and programs to categorize files beyond simple names and extensions. This routine uses bitwise operations to efficiently evaluate attribute matches, a technique well-suited to the limited processing power of the Intel 8086. The design reflects the influence of Unix, where file permissions and attributes were central to system security and organization. MatchAttributes became a model for attribute-based file filtering, influencing later operating systems and file management tools. Its legacy can be seen in modern APIs that allow developers to query and manipulate file attributes programmatically."
  - id: "do-ext-end-of-file"
    line_start: 2159
    line_end: 2167
    title: "Finalizing directory operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The do_ext routine marks the end of directory-related operations in this file. While its specific functionality is not detailed in the provided lines, its placement suggests it serves as a cleanup or finalization step. In the broader context of MS-DOS v2.0, routines like this ensured that directory operations were completed cleanly, preventing memory leaks or corrupted data structures. This attention to detail was crucial in an era when operating systems had to run reliably on hardware with minimal resources. The modular design of MS-DOS, with clearly defined start and end points for operations, influenced the development of later operating systems, including Windows. It also served as a teaching tool for generations of programmers learning assembly language and system-level programming."

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