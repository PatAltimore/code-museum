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
description: "Directory management routines from MS-DOS v2.0, showcasing innovations in file system handling inspired by Unix."

summary:
  - point: "Introduces subdirectories to MS-DOS, a major leap from flat file systems"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Optimized directory allocation and search techniques for FAT file systems"
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "FAT"
  - point: "Reflects influence of Unix in hierarchical file system design"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Demonstrates assembly-level programming for constrained hardware environments"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"
  - point: "Key routines for OEM-customizable MS-DOS implementations"
    link: "https://en.wikipedia.org/wiki/MS-DOS#OEM_versions"
    link_label: "OEM versions"

enhancements:
  - id: "include-dosseg-setup"
    line_start: 9
    line_end: 29
    title: "Why Include Files Were Essential in MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section sets up the inclusion of external assembly files, `DOSSEG.ASM` and `DOSSYM.ASM`, which define segment directives and symbolic constants used throughout the MS-DOS directory routines. By centralizing these definitions, developers could ensure consistency across the codebase while reducing duplication. In the early 1980s, this modular approach was critical for managing the complexity of operating system development on constrained hardware like the Intel 8086. The use of include files also reflects the influence of structured programming principles, which were gaining traction at the time. This technique became standard practice in software development, influencing later operating systems and programming environments, including Windows and Unix-like systems."
  - id: "name-dir-global-vars"
    line_start: 35
    line_end: 83
    title: "Global Variables: The Backbone of MS-DOS Directory Management"
    wikipedia_url: "https://en.wikipedia.org/wiki/Global_variable"
    image_url: ""
    image_caption: ""
    content: "This section defines global variables used throughout the directory management routines. These variables, such as `DirStart`, `LastEnt`, and `CurBuf`, serve as shared state for tracking directory entries, clusters, and file control blocks (FCBs). In the early 1980s, global variables were a common solution for managing state in assembly programs, as memory was scarce and modular programming was still evolving. While this approach is considered less ideal today due to potential side effects and debugging challenges, it was a pragmatic choice for MS-DOS given the constraints of the Intel 8086 architecture and the need for performance. These variables laid the groundwork for efficient directory operations, influencing subsequent file system designs in DOS-based and early Windows systems."
  - id: "builddir-grow-directory"
    line_start: 87
    line_end: 253
    title: "The Routine That Grew Directories Dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The `BUILDDIR` routine dynamically grows directories when no free entries are available, unless the directory is the root. This innovation was critical for supporting hierarchical file systems introduced in MS-DOS v2.0, inspired by Unix. By allocating new clusters and updating directory metadata (`DIRSTART`, `CLUSFAC`, `CLUSNUM`), the routine ensures efficient use of disk space while maintaining compatibility with the FAT file system. At the time, dynamic directory growth was a significant improvement over flat file systems, enabling more complex applications and user workflows. This approach influenced later operating systems, including Windows, which continued to refine directory management techniques."
  - id: "setdotent-dot-dot-entry"
    line_start: 263
    line_end: 303
    title: "How MS-DOS Created '.' and '..' Entries"
    wikipedia_url: "https://en.wikipedia.org/wiki/Directory_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `SETDOTENT` routine initializes the special directory entries '.' and '..', representing the current and parent directories, respectively. These entries are crucial for navigating hierarchical file systems, a feature introduced in MS-DOS v2.0. Inspired by Unix, this design simplifies path resolution and enables relative addressing, which was a major usability improvement over earlier flat file systems. The routine writes these entries with attributes, timestamps, and cluster information, ensuring they integrate seamlessly into the FAT file system. This innovation influenced directory structures in subsequent operating systems, becoming a standard practice in file system design."
  - id: "search-find-file-name"
    line_start: 487
    line_end: 625
    title: "The Search Routine That Found Your Files"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The `SEARCH` routine locates files in a directory by matching names and attributes. It supports wildcard characters ('?'), enabling flexible searches—a feature borrowed from Unix. The routine interacts with the FAT file system, using metadata like cluster numbers and sector sizes to navigate directories efficiently. At the time, this capability was a significant improvement over earlier systems, which often required manual file management. The ability to search directories programmatically paved the way for more sophisticated file management tools and graphical interfaces, influencing systems like Windows Explorer and Linux file managers."
  - id: "setrootsrch-root-directory"
    line_start: 909
    line_end: 939
    title: "Resetting to the Root: A Safety Net for Paths"
    wikipedia_url: "https://en.wikipedia.org/wiki/Root_directory"
    image_url: ""
    image_caption: ""
    content: "The `SETROOTSRCH` routine resets the search context to the root directory when a path is invalid or unavailable. This fallback mechanism ensures robust file system navigation, preventing errors from cascading. By resetting key variables like `DIRSTART` and `CLUSNUM`, the routine establishes a clean slate for subsequent operations. This design reflects the influence of Unix, where the root directory serves as a stable anchor for the file system. The concept of a root directory became foundational in operating system design, influencing file systems across platforms, including NTFS and ext4."
  - id: "setcurr-set-current-directory"
    line_start: 943
    line_end: 1017
    title: "How MS-DOS Tracked Your Current Directory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Working_directory"
    image_url: ""
    image_caption: ""
    content: "The `SETCURR` routine updates the current directory context, enabling relative path operations. By storing the cluster number of the current directory in `dpb_current_dir`, the routine allows programs to navigate the file system efficiently. This feature, introduced in MS-DOS v2.0, was inspired by Unix's working directory concept, which simplified file access and management. The ability to set and retrieve the current directory was essential for multi-level directory structures and became a standard feature in modern operating systems, influencing the design of shells and file explorers."
  - id: "dir-search-directory-lookup"
    line_start: 841
    line_end: 1017
    title: "How MS-DOS Found Files in Subdirectories"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The `Dir_search` routine is responsible for locating files within directories, a key feature introduced in MS-DOS 2.0. This section of code implements a hierarchical directory lookup, allowing the operating system to traverse subdirectories—a concept borrowed from Unix but adapted to the simpler FAT file system used by MS-DOS. At the time, most personal computer operating systems used flat file systems, where all files existed in a single namespace. By enabling subdirectories, MS-DOS opened the door to more organized file storage, essential for larger applications and user data. This routine uses a combination of path parsing and directory entry validation to locate files efficiently, even on hardware with limited memory and processing power. The introduction of hierarchical directories influenced later file systems, including NTFS and ext3, and became a standard feature of modern operating systems."
  - id: "make-node-create-new-entry"
    line_start: 1309
    line_end: 1387
    title: "Creating Files and Directories: The Node Maker"
    wikipedia_url: "https://en.wikipedia.org/wiki/Hierarchical_file_system"
    image_url: ""
    image_caption: ""
    content: "The `MakeNode` routine is tasked with creating new file or directory entries in the file system. It checks for existing entries, validates attributes, and allocates space for the new node. This process involves intricate error handling, ensuring that invalid paths, attribute mismatches, or attempts to overwrite existing files are caught and reported. The concept of a 'node'—a data structure representing a file or directory—was inspired by Unix's inode system but simplified for MS-DOS's FAT architecture. The routine reflects the constraints of early PCs, where memory and disk space were precious resources. By introducing robust error handling and efficient allocation, `MakeNode` laid the groundwork for reliable file creation in constrained environments. This approach influenced later operating systems, including Windows, which expanded on these principles in NTFS."
  - id: "getpath-parse-path-strings"
    line_start: 1319
    line_end: 1649
    title: "Parsing Paths: How MS-DOS Understood Directories"
    wikipedia_url: "https://en.wikipedia.org/wiki/Path_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `GETPATH` routine is a critical component for interpreting user-provided paths, breaking them into manageable components for further processing. This routine identifies drive specifications, root directories, and subdirectory paths, setting flags and pointers to guide subsequent operations. At the time, parsing paths was a novel challenge for personal computers, as users transitioned from flat file systems to hierarchical ones. MS-DOS's path parsing was inspired by Unix, but tailored to the simpler FAT file system and the limited capabilities of early PCs. The routine's ability to handle relative and absolute paths, as well as device names, was a significant step forward in usability. This innovation influenced later file systems and operating systems, including Windows and Linux, which expanded on these parsing techniques to support more complex file structures."
  - id: "findfile-search-directory-entries"
    line_start: 1863
    line_end: 1923
    title: "Finding Files: The Search Algorithm"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The `FindFile` routine performs the actual search for a file within a directory, leveraging the FAT file system's structure to locate matching entries. This involves scanning directory sectors, comparing file names, and validating attributes. The routine is optimized for the limited resources of early PCs, using minimal memory and CPU cycles to achieve its goal. At the time, efficient file searching was a critical feature, as users began storing larger amounts of data on floppy disks and hard drives. The algorithm's design reflects the constraints of the era, balancing speed and accuracy in a resource-constrained environment. `FindFile` influenced later file system search algorithms, including those in Windows and Linux, which built on its principles to handle larger and more complex storage systems."
  - id: "setdir-change-current-directory"
    line_start: 1927
    line_end: 1991
    title: "Changing Directories: The SetDir Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Working_directory"
    image_url: ""
    image_caption: ""
    content: "The `SetDir` routine is responsible for changing the current working directory, a feature introduced in MS-DOS 2.0 to support hierarchical file systems. This routine updates internal pointers and flags to reflect the new directory, enabling subsequent file operations to occur within the specified context. Changing directories was a revolutionary concept for personal computers in the early 1980s, as it allowed users to organize files into logical groups and navigate them efficiently. The implementation in MS-DOS was inspired by Unix but adapted to the simpler FAT file system. This feature became a cornerstone of modern operating systems, influencing command-line interfaces and graphical file explorers alike."
  - id: "badpath-handle-invalid-paths"
    line_start: 1999
    line_end: 2005
    title: "Handling Errors: What Happens with Bad Paths?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "The `BADPATH` routine handles cases where a user-provided path is invalid, ensuring that the operating system can recover gracefully. This involves setting error flags, clearing registers, and returning control to the caller. Error handling was a crucial aspect of MS-DOS's design, as it needed to operate reliably on a wide variety of hardware and user inputs. The routine reflects the era's emphasis on robustness, ensuring that invalid paths do not crash the system or corrupt data. This approach to error handling influenced later operating systems, which expanded on these principles to provide more detailed error messages and recovery options."
  - id: "badpathpop-error-handling-path-too-long"
    line_start: 2043
    line_end: 2057
    title: "Error Handling: What Happens When Paths Break?"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The BADPATHPOP routine is a small but critical error-handling mechanism that deals with invalid or excessively long file paths. It pops values off the stack, checks the offending path element, and sets a status flag (via the STC instruction) to indicate failure. This routine ensures that the system gracefully handles errors without crashing, a vital feature in an era when user input was often unpredictable. In 1983, MS-DOS v2.0 introduced hierarchical directories, a major step forward from the flat file structure of earlier versions. This added complexity required robust error handling for scenarios like overly long paths or malformed directory structures. Tim Paterson and the Microsoft team adapted techniques from Unix, which had long supported hierarchical file systems. However, MS-DOS had to operate within the constraints of the IBM PC's limited memory and processing power, making compact and efficient error routines like BADPATHPOP essential. This approach influenced later operating systems, including Windows, which inherited MS-DOS's error-handling philosophy. The concept of flag-based error signaling became standard practice, appearing in APIs and system calls across multiple platforms. BADPATHPOP's design reflects the careful balance between simplicity and functionality that characterized early PC software development."
  - id: "rootpath-directory-search-setup"
    line_start: 2059
    line_end: 2105
    title: "How MS-DOS Prepared to Search Directories"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "ROOTPATH sets up the environment for directory searches, initializing key variables such as LASTENT, ENTFREE, and VOLID. These variables track the state of the search and ensure compatibility with subsequent routines like GETENTRY and NEXTENTRY. The use of ES:BP to point to drive parameters reflects the low-level nature of MS-DOS's file system operations. In the early 1980s, directory searches were a computationally expensive task. MS-DOS v2.0's rewrite aimed to streamline these operations by borrowing concepts from Unix, such as hierarchical directories and structured file metadata. ROOTPATH's initialization routine embodies this shift, laying the groundwork for efficient file system traversal on hardware with limited resources. The techniques used in ROOTPATH influenced later file systems, including FAT32 and NTFS, which expanded on MS-DOS's foundational ideas. The initialization of search parameters became a standard feature in file system APIs, enabling faster and more reliable directory operations. ROOTPATH's legacy can be seen in modern operating systems that prioritize efficiency and compatibility in file handling."
  - id: "matchattributes-file-filtering-logic"
    line_start: 2127
    line_end: 2155
    title: "The Logic Behind File Attribute Matching"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The MatchAttributes routine determines whether a file's attributes match the search criteria. It uses bitwise operations to compare the desired attributes (stored in [Attrib]) with the actual attributes (stored in CH). The result dictates whether the file is included in the search results (JZ for match, JNZ for no match). In MS-DOS v2.0, file attributes like read-only, hidden, and system were introduced to provide more granular control over file operations. This was a significant step forward from earlier systems, which treated files as undifferentiated blocks of data. MatchAttributes reflects the growing complexity of file systems in the early 1980s, as personal computers became more versatile and user expectations increased. This routine's design influenced modern file filtering mechanisms, such as those found in Windows Explorer and Linux's `find` command. The use of bitwise operations for attribute matching became a standard technique, appearing in programming languages and file system APIs worldwide. MatchAttributes represents a pivotal moment in the evolution of file system logic, bridging the gap between early PC software and today's sophisticated search utilities."
  - id: "do-ext-final-cleanup"
    line_start: 2159
    line_end: 2163
    title: "The Final Cleanup: Wrapping Up Directory Operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The do_ext routine marks the end of directory-related operations in this file. While the specific functionality is not detailed in the provided lines, its placement suggests it serves as a cleanup or finalization step after directory searches and attribute matching. This kind of routine ensures that the system returns to a stable state, ready for subsequent operations. In MS-DOS v2.0, routines like do_ext were essential for maintaining system stability, especially given the limited error recovery options available on early PCs. Developers had to anticipate edge cases and ensure that every operation concluded cleanly, avoiding memory leaks or corrupted data. The concept of finalization routines influenced later programming practices, including the use of destructors in object-oriented languages and cleanup functions in modern APIs. While do_ext itself may not be widely recognized, its role in ensuring reliable directory operations contributed to the robustness of MS-DOS and its successors. This routine exemplifies the meticulous attention to detail required in early software development."

---

```asm
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


```