---
title: "MISC.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/MISC.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/MISC.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "misc-v2"
order: 37
description: "This file contains miscellaneous routines for MS-DOS v2.0, showcasing the evolution of operating system design in the early 1980s."

summary:
  - point: "Introduction of subroutines for directory search and file manipulation"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Implementation of low-level disk operations and buffer management"
    link: "https://en.wikipedia.org/wiki/Disk_buffer"
    link_label: "Disk Buffer"
  - point: "Unix-inspired features like process data blocks and file parsing"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Optimized assembly routines for console I/O and error handling"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"
  - point: "Tim Paterson's influence on MS-DOS architecture"
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"

enhancements:
  - id: "name-section-introduction"
    line_start: 3
    line_end: 41
    title: "Miscellaneous routines: A programmer's toolkit"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The 'NAME' section introduces the purpose of this file: a collection of miscellaneous routines integral to MS-DOS v2.0. These routines are described as 'CAVEAT' — a warning to programmers about their complexity or potential pitfalls. In 1983, MS-DOS v2.0 was a near-complete rewrite of the original operating system, inspired by Unix and XENIX. This section sets the stage for the file's contents, which include low-level system calls, disk operations, and file manipulation routines. Tim Paterson, who originally developed 86-DOS, played a key role in shaping MS-DOS's architecture. The routines here reflect the constraints of early personal computers, such as limited memory and storage, and the need for efficient assembly code. These foundational routines would become essential for the operating system's widespread adoption and compatibility across hardware platforms."
  - id: "include-segment-definitions"
    line_start: 43
    line_end: 53
    title: "Segment definitions: Bridging hardware and software"
    wikipedia_url: "https://en.wikipedia.org/wiki/Segmented_memory"
    image_url: ""
    image_caption: ""
    content: "This section includes external files like DOSSEG.ASM and DOSSYM.ASM, which define memory segments and symbolic constants for MS-DOS. In the early 1980s, segmented memory architecture was a hallmark of Intel's 8086 processor, requiring programmers to manage code, data, and stack segments explicitly. These definitions ensured that the operating system could interact seamlessly with hardware while maintaining compatibility across different machines. The use of 'ASSUME' directives highlights the need to align segment registers with specific memory areas, a critical step in assembly programming. This approach reflects the ingenuity required to optimize performance on hardware with limited resources, laying the groundwork for MS-DOS's success in the IBM PC ecosystem."
  - id: "sleazefunc-media-byte"
    line_start: 123
    line_end: 195
    title: "SleazeFunc: Retrieving the media byte"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The $SLEAZEFUNC subroutine retrieves the media byte, a critical piece of information for identifying the type of storage media in use. This routine interacts with the File Allocation Table (FAT), a key innovation that allowed MS-DOS to manage files efficiently across different storage devices. The comments in the code warn programmers to 'READ this ONE byte' and nothing more, underscoring the fragility of low-level disk operations. In 1983, storage devices varied widely in capacity and reliability, and MS-DOS needed to handle them all gracefully. Tim Paterson's original design for 86-DOS laid the foundation for these routines, which evolved to support the growing complexity of personal computing. The media byte concept persists in modern file systems, a testament to its enduring utility."
  - id: "abort-process-termination"
    line_start: 227
    line_end: 293
    title: "Abort: Graceful process termination"
    wikipedia_url: "https://en.wikipedia.org/wiki/Process_(computing)"
    image_url: ""
    image_caption: ""
    content: "The $ABORT subroutine handles process termination, restoring control to the operating system and cleaning up resources. It ensures that buffers are flushed and interrupt vectors are reset, preventing data corruption or system instability. In the early 1980s, personal computers lacked sophisticated multitasking capabilities, making process management a critical feature of MS-DOS. This routine reflects the influence of Unix, which inspired MS-DOS v2.0's design. The careful handling of termination addresses and control-C interrupts demonstrates the attention to detail required to build a reliable operating system. These mechanisms paved the way for more advanced process management in later versions of MS-DOS and other operating systems."
  - id: "directory-search-first"
    line_start: 299
    line_end: 527
    title: "Directory search: Finding the first match"
    wikipedia_url: "https://en.wikipedia.org/wiki/Directory_(computing)"
    image_url: ""
    image_caption: ""
    content: "The $DIR_SEARCH_FIRST subroutine initiates a directory search, locating the first matching entry and loading it into memory. This routine is essential for file management, allowing users to navigate directories and access files efficiently. In 1983, MS-DOS v2.0 introduced hierarchical directories, a significant improvement over the flat file structure of earlier versions. This feature was inspired by Unix, which had popularized the concept of subdirectories. The assembly code here demonstrates the low-level operations required to interact with the disk and transfer data to the system's memory. These routines enabled MS-DOS to support more complex file systems, contributing to its widespread adoption in the IBM PC ecosystem."
  - id: "disk-reset-buffers"
    line_start: 669
    line_end: 707
    title: "Disk reset: Clearing dirty buffers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_buffer"
    image_url: ""
    image_caption: ""
    content: "The $DISK_RESET subroutine flushes and invalidates all dirty buffers, ensuring that data is safely written to disk and memory is freed for new operations. Buffer management was a critical aspect of operating system design in the early 1980s, as personal computers had limited RAM and storage. This routine reflects the challenges of optimizing performance while maintaining data integrity. By marking buffers as visited and resetting their state, MS-DOS could handle disk operations efficiently, even on hardware with constrained resources. These techniques influenced the development of more sophisticated buffer management systems in later operating systems, highlighting the enduring impact of MS-DOS's design."
  - id: "raw-console-io"
    line_start: 733
    line_end: 955
    title: "Raw console I/O: Direct interaction with the user"
    wikipedia_url: "https://en.wikipedia.org/wiki/Input/output"
    image_url: ""
    image_caption: ""
    content: "The $RAW_CON_IO subroutine provides low-level input and output operations for the console, bypassing higher-level abstractions like echoing. This routine enables direct interaction with the user, a crucial feature for command-line interfaces. In 1983, personal computers relied heavily on text-based input and output, as graphical interfaces were still in their infancy. The assembly code here demonstrates the precision required to handle console I/O efficiently, using system calls and interrupt handling. These routines reflect the constraints of early hardware, where every byte of memory and processing cycle mattered. The raw I/O capabilities of MS-DOS laid the groundwork for more sophisticated user interfaces in later operating systems."
  - id: "parse-file-descriptor"
    line_start: 963
    line_end: 1015
    title: "Parsing file descriptors: Command-line magic"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Control_Block"
    image_url: ""
    image_caption: ""
    content: "The $PARSE_FILE_DESCRIPTOR subroutine converts a command-line string into a File Control Block (FCB), a data structure used to manage files in MS-DOS. This routine handles various parsing scenarios, such as blank fields and special characters, ensuring that the FCB is correctly populated. In 1983, command-line interfaces were the primary way users interacted with computers, making robust parsing routines essential. The assembly code here demonstrates the complexity of handling user input, reflecting the challenges of building an operating system that could accommodate diverse use cases. The FCB concept, inherited from CP/M, was eventually replaced by more advanced file management techniques, but its influence on early operating systems is undeniable."
  - id: "dup-pdb-process-duplication"
    line_start: 1033
    line_end: 1069
    title: "Duplicating Process Data Blocks for Efficiency"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section begins with the $Dup_PDB procedure, which is responsible for duplicating Process Data Blocks (PDBs). In MS-DOS v2.0, PDBs were a critical structure used to manage processes, akin to a simplified form of multitasking. The code sets up the program base and ensures that termination and interrupt handling are copied correctly from the interrupt area. This functionality was essential for maintaining program state and ensuring smooth transitions between tasks. In 1983, when MS-DOS v2.0 was released, the IBM PC was still a relatively new platform, and its hardware constraints shaped every aspect of software design. The Intel 8086 processor, with its segmented memory model, required careful management of memory and process structures. Tim Paterson and the Microsoft team borrowed ideas from Unix and XENIX, adapting them to fit the simpler architecture of the PC. The duplication of PDBs was a forward-looking feature, anticipating the need for more sophisticated process management as PCs became more powerful. While true multitasking was still years away for MS-DOS, these routines laid the groundwork for later innovations. The design choices here reflect the tension between the simplicity demanded by early PCs and the ambition to bring advanced operating system features to the platform."
  - id: "create-pdb-old-legacy-compatibility"
    line_start: 1073
    line_end: 1077
    title: "Legacy Compatibility in Process Creation"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The Create_PDB_old routine provides backward compatibility for older style process creation calls. This was a necessary feature in MS-DOS v2.0, as the operating system had to support programs written for earlier versions of MS-DOS. The code invokes a user stack setup and adjusts the data segment to align with the older conventions. Backward compatibility was a cornerstone of MS-DOS's success. By ensuring that programs written for earlier versions of the operating system could still run, Microsoft made it easier for OEMs and users to adopt the new version. This approach also reflects the influence of IBM's business strategy, which prioritized stability and compatibility to protect investments in software development. This routine highlights the careful balance Microsoft had to strike between innovation and continuity. While MS-DOS v2.0 introduced many new features inspired by Unix, it also preserved the simplicity and compatibility that had made the operating system popular. This dual focus helped MS-DOS maintain its dominance in the rapidly growing PC market."
  - id: "create-copy-memory-transfer"
    line_start: 1081
    line_end: 1113
    title: "Efficient Memory Transfer for Process Setup"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_8086"
    image_url: ""
    image_caption: ""
    content: "The Create_copy routine is responsible for copying memory blocks to set up a new process. Using the REP MOVSW instruction, the code efficiently transfers 128 bytes of data, ensuring that the new process inherits the necessary state from the parent. This is followed by checks to determine whether a new process should be created or if the call should fall back to older conventions. Memory management was a critical concern in the early days of PC computing. The Intel 8086 processor's segmented memory model required programmers to carefully manage data transfers and segment registers. The use of REP MOVSW here reflects the emphasis on efficiency, as this instruction allows for rapid copying of data blocks. This routine exemplifies the ingenuity required to work within the constraints of early PC hardware. The techniques developed here influenced later operating systems, as efficient memory handling remained a priority. While modern systems have moved beyond the limitations of the 8086 architecture, the principles of efficient data transfer and process setup remain relevant."
  - id: "create-dup-jfn-file-handle-duplication"
    line_start: 1117
    line_end: 1133
    title: "Duplicating File Handles for New Processes"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_descriptor"
    image_url: ""
    image_caption: ""
    content: "The Create_dup_jfn routine handles the duplication of file handles (JFNs) for new processes. This involves saving the new Process Data Block (PDB), retrieving file handle pointers, and incrementing reference counts for shared file structures. These operations ensure that the new process has access to the same files as its parent, a feature inspired by Unix's process inheritance model. In the early 1980s, file handling was a central concern for operating systems. MS-DOS v2.0 introduced file handles to replace the simpler file control blocks (FCBs) used in earlier versions. This change was part of a broader effort to modernize the operating system and make it more versatile. The routines for duplicating file handles reflect the influence of Unix, which had pioneered advanced file management techniques. This code represents a step forward in MS-DOS's evolution, bringing it closer to the capabilities of more sophisticated operating systems. The ability to duplicate file handles was essential for supporting complex applications and multitasking-like behavior. While MS-DOS never achieved true multitasking, these routines laid the groundwork for future developments in PC operating systems."
  - id: "entry-memory-preparation"
    line_start: 1191
    line_end: 1255
    title: "Preparing Memory for Program Execution"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The entry routine, labeled SETMEM, prepares memory for program execution. It sets up the data and extra segments, initializes interrupt vectors, and configures the program base. This routine ensures that the program has access to the necessary resources and that the system is ready to handle interrupts and errors. Memory preparation was a critical step in MS-DOS's operation, as the segmented memory model of the Intel 8086 required careful setup. The routine's use of interrupt vectors reflects the influence of Unix, which had popularized the concept of signals for handling errors and events. By incorporating these ideas, MS-DOS v2.0 became more robust and capable. This code highlights the challenges of working with early PC hardware, where memory was limited and segmentation added complexity. The techniques developed here influenced later operating systems, as efficient memory management remained a priority. The entry routine represents a bridge between the simplicity of early MS-DOS and the more advanced features introduced in v2.0."
  - id: "havdif-memory-allocation-limits"
    line_start: 1257
    line_end: 1281
    title: "Handling Memory Allocation Limits"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The HAVDIF routine deals with memory allocation limits during process setup. It calculates the maximum allowable difference between allocated memory and the entry point segment, ensuring that the system does not exceed its capacity. This routine reflects the constraints of early PC hardware, where memory was a scarce resource. In the early 1980s, memory management was a critical concern for operating systems. The Intel 8086 processor's segmented memory model required programmers to carefully manage allocations and ensure that processes did not interfere with each other. The HAVDIF routine embodies this careful attention to detail, as it prevents errors and ensures system stability. This code represents the ingenuity required to work within the limitations of early PCs. While modern systems have moved beyond the constraints of the 8086 architecture, the principles of careful memory management remain relevant. The HAVDIF routine is a reminder of the challenges faced by the pioneers of PC computing."
  - id: "create-process-data-block-finalization"
    line_start: 1285
    line_end: 1295
    title: "Finalizing Process Data Block Creation"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The $CREATE_PROCESS_DATA_BLOCK procedure finalizes the creation of Process Data Blocks (PDBs). This marks the end of the process setup routines, ensuring that all necessary structures are in place and that the system is ready to execute the new process. The code reflects the influence of Unix, which had popularized the concept of process control blocks. In MS-DOS v2.0, PDBs were a critical innovation, enabling more sophisticated process management. While true multitasking was not supported, these structures allowed for a form of task switching and resource sharing. The finalization routine ensures that the system is stable and that the new process has access to the necessary resources. This code represents the culmination of MS-DOS's evolution from a simple single-tasking operating system to one that could support more complex applications. The techniques developed here influenced later operating systems, as process management remained a central concern. The $CREATE_PROCESS_DATA_BLOCK procedure is a testament to the ingenuity of the programmers who shaped the early PC era."

---

TITLE MISC - Miscellanious routines for MS-DOS

NAME  MISC

;

; Miscellaneous system calls most of which are CAVEAT

;

; $SLEAZEFUNC

; $SLEAZEFUNCDL

; $GET_INDOS_FLAG

; $GET_IN_VARS

; $GET_DEFAULT_DPB

; $GET_DPB

; $DISK_RESET

; $SETDPB

; $Dup_PDB

; $CREATE_PROCESS_DATA_BLOCK

; SETMEM

;

.xlist

;

; get the appropriate segment definitions

;

INCLUDE DOSSEG.ASM



CODE    SEGMENT BYTE PUBLIC  'CODE'

        ASSUME  SS:DOSGROUP,CS:DOSGROUP



.xcref

INCLUDE DOSSYM.ASM

INCLUDE DEVSYM.ASM

.cref

.list





ifndef  Kanji

Kanji   equ 0

endif



ENTRYPOINTSEG   EQU     0CH

MAXDIF          EQU     0FFFH

SAVEXIT         EQU     10



        i_need  LASTBUFFER,DWORD

        i_need  INDOS,BYTE

        i_need  SYSINITVAR,BYTE

        i_need  CurrentPDB,WORD

        i_need  CreatePDB,BYTE

        i_need  EXIT_TYPE,BYTE

        i_need  EXIT_CODE,WORD

        i_need  LASTENT,WORD

        i_need  THISDPB,DWORD

        i_need  ATTRIB,BYTE

        i_need  EXTFCB,BYTE

        i_need  DMAADD,DWORD

        i_need  DIRSTART,WORD

        i_need  CURBUF,DWORD

        i_need  USER_SP,WORD

        i_need  ENTLAST,WORD

        i_need  THISDRV,BYTE



ASSUME  SS:DOSGROUP



BREAK <SleazeFunc -- get a pointer to media byte>



;----+----+----+----+----+----+----+----+----+----+----+----+----+----+----;

;            C  A  V  E  A  T     P  R  O  G  R  A  M  M  E  R             ;

;                                                                          ;

        procedure   $SLEAZEFUNC,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       None

; Function:

;       Return Stuff sort of like old get fat call

; Outputs:

;       DS:BX = Points to FAT ID byte (IBM only)

;               GOD help anyone who tries to do ANYTHING except

;               READ this ONE byte.

;       DX = Total Number of allocation units on disk

;       CX = Sector size

;       AL = Sectors per allocation unit

;          = -1 if bad drive specified



        MOV     DL,0

    entry   $SLEAZEFUNCDL

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        MOV     AL,DL

        invoke  GETTHISDRV

        MOV     AL,-1

        JC      BADSLDRIVE

        invoke  FATREAD

        MOV     DX,ES:[BP.dpb_max_cluster]

        DEC     DX

        MOV     AL,ES:[BP.dpb_cluster_mask]

        INC     AL

        MOV     CX,ES:[BP.dpb_sector_size]

        ADD     BP,dpb_media

BADSLDRIVE:

        invoke  get_user_stack

ASSUME  DS:NOTHING

        MOV     [SI.user_CX],CX

        MOV     [SI.user_DX],DX

        MOV     [SI.user_BX],BP

        MOV     [SI.user_DS],ES

        return

$SLEAZEFUNC    ENDP

;                                                                          ;

;            C  A  V  E  A  T     P  R  O  G  R  A  M  M  E  R             ;

;----+----+----+----+----+----+----+----+----+----+----+----+----+----+----;







BREAK <$ABORT -- Terminate a process>

        procedure   $ABORT,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       CS:00 must point to valid program header block

; Function:

;       Restore terminate and Cntrl-C addresses, flush buffers

;       and transfer to the terminate address

; Returns:

;       TO THE TERMINATE ADDRESS



        XOR     AL,AL

        MOV     [exit_type],exit_abort



;

; abort_inner must have AL set as the exit code!

;

        entry   abort_inner

        MOV     AH,[exit_type]

        MOV     [exit_code],AX

        invoke  Get_user_stack

        MOV     DS,[SI.user_CS]         ; set up old interrupts

        XOR     AX,AX

        MOV     ES,AX

        MOV     SI,SAVEXIT

        MOV     DI,addr_int_terminate

        MOVSW

        MOVSW

        MOVSW

        MOVSW

        MOVSW

        MOVSW

        transfer    reset_environment

$ABORT   ENDP



BREAK <$Dir_Search_First -- Start a directory search>

        procedure   $DIR_SEARCH_FIRST,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DS:DX Points to unopenned FCB

; Function:

;       Directory is searched for first matching entry and the directory

;       entry is loaded at the disk transfer address

; Returns:

;       AL = -1 if no entries matched, otherwise 0



        invoke  GETFILE

ASSUME  DS:DOSGROUP

SAVPLCE:

; Search-for-next enters here to save place and report

; findings.

        MOV     DL,0            ; Do not XOR!!!

        JC      KILLSRCH

        OR      AH,AH           ; Is it I/O device?

        JS      KILLIT          ; If so, sign bit will end search

        MOV     AX,[LASTENT]

        INC     DL

KILLIT:

        MOV     ES:[DI.FILDIRENT],AX

        MOV     AX,WORD PTR [THISDPB]

        MOV     ES:[DI.fcb_DRVBP],AX

        MOV     AX,WORD PTR [THISDPB+2]

        MOV     ES:[DI.fcb_DRVBP+2],AX

        MOV     AX,[DIRSTART]

        MOV     ES:[DI.fcb_DRVBP+4],AX

; Information in directory entry must be copied into the first

; 33 bytes starting at the disk transfer address.

        MOV     SI,BX

        LES     DI,[DMAADD]

        MOV     AX,00FFH

        CMP     AL,[EXTFCB]

        JNZ     NORMFCB

        STOSW

        INC     AL

        STOSW

        STOSW

        MOV     AL,[ATTRIB]

        STOSB

NORMFCB:

        MOV     AL,[THISDRV]

        INC     AL

        STOSB   ; Set drive number

        OR      DL,DL

        JZ      DOSRELATIVE

        MOV     DS,WORD PTR [CURBUF+2]

ASSUME  DS:NOTHING

DOSRELATIVE:



        IF      KANJI

        MOVSW

        CMP     BYTE PTR ES:[DI-2],5

        JNZ     NOTKTRAN

        MOV     BYTE PTR ES:[DI-2],0E5H

NOTKTRAN:

        MOV     CX,15

        ELSE

        MOV     CX,16

        ENDIF



        REP     MOVSW   ; Copy 32 bytes of directory entry

        XOR     AL,AL

        return



ASSUME  DS:NOTHING

KILLSRCH1:

        PUSH    DS

        POP     ES      ; Make ES:DI point to the FCB

KILLSRCH:

        MOV     AX,-1

        MOV     WORD PTR ES:[DI.FILDIRENT],AX

        return

$DIR_SEARCH_FIRST ENDP



BREAK <$Dir_Search_Next -- Find next matching directory entry>

        procedure   $DIR_SEARCH_NEXT,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DS:DX points to unopenned FCB returned by $DIR_SEARCH_FIRST

; Function:

;       Directory is searched for the next matching entry and the directory

;       entry is loaded at the disk transfer address

; Returns:

;       AL = -1 if no entries matched, otherwise 0



        invoke  MOVNAMENOSET

ASSUME  ES:DOSGROUP

        MOV     DI,DX

        JC      NEAR PTR KILLSRCH1

        MOV     AX,[DI.FILDIRENT]

        LES     BP,DWORD PTR [DI.fcb_DRVBP]

        OR      AX,AX

        JS      NEAR PTR KILLSRCH1

        MOV     BX,[DI.fcb_DRVBP+4]

        PUSH    DX

        PUSH    DS

        PUSH    AX

        MOV     WORD PTR [THISDPB],BP

        MOV     WORD PTR [THISDPB+2],ES

        invoke  SetDirSrch

        ASSUME  DS:DOSGROUP

        POP     AX

        MOV     [ENTLAST],-1

        invoke  GetEnt

        invoke  NextEnt

        POP     ES

        ASSUME  ES:NOTHING

        POP     DI

        JMP     SAVPLCE

$DIR_SEARCH_NEXT ENDP



BREAK <$Get_FCB_File_Length -- Return size of file in current records>

        procedure   $GET_FCB_FILE_LENGTH,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DS:DX points to unopenned FCB

; Function:

;       Set random record field to size of file

; Returns:

;       AL = -1 if no entries matched, otherwise 0



        invoke  GETFILE

ASSUME  DS:DOSGROUP

        MOV     AL,-1

        retc

        ADD     DI,fcb_RR       ; Write size in RR field

        MOV     CX,WORD PTR ES:[DI.fcb_RECSIZ-fcb_RR]

        OR      CX,CX

        JNZ     RECOK

        MOV     CX,128

RECOK:

        XOR     DX,DX           ; Intialize size to zero

        INC     SI

        INC     SI              ; Point to length field

        MOV     DS,WORD PTR [CURBUF+2]

ASSUME  DS:NOTHING

        MOV     AX,[SI+2]       ; Get high word of size

        DIV     CX

        PUSH    AX              ; Save high part of result

        LODSW           ; Get low word of size

        DIV     CX

        OR      DX,DX           ; Check for zero remainder

        POP     DX

        JZ      DEVSIZ

        INC     AX              ; Round up for partial record

        JNZ     DEVSIZ          ; Propagate carry?

        INC     DX

DEVSIZ:

        STOSW

        MOV     AX,DX

        STOSB

        MOV     AL,0

        CMP     CX,64

        JAE     RET14           ; Only 3-byte field if fcb_RECSIZ >= 64

        MOV     ES:[DI],AH

RET14:  return

$GET_FCB_FILE_LENGTH ENDP



BREAK <$Get_Fcb_Position -- Set random record field to current position>

        procedure   $GET_FCB_POSITION,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DS:DX points to openned FCB

; Function:

;       Sets random record field to be same as current record fields

; Returns:

;       None



        invoke  GETREC

        MOV     WORD PTR [DI+fcb_RR],AX

        MOV     [DI+fcb_RR+2],DL

        CMP     [DI.fcb_RECSIZ],64

        JAE     RET16

        MOV     [DI+fcb_RR+2+1],DH      ; Set 4th byte only if record size < 64

RET16:  return

$GET_FCB_POSITION ENDP



BREAK <$Disk_Reset -- Flush out all dirty buffers>

        procedure   $DISK_RESET,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       None

; Function:

;       Flush and invalidate all buffers

; Returns:

;       Nothing



        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        MOV     AL,-1

        invoke  FLUSHBUF

        MOV     WORD PTR [LASTBUFFER+2],-1

        MOV     WORD PTR [LASTBUFFER],-1

        invoke  SETVISIT

ASSUME  DS:NOTHING

NBFFR:                                  ; Free ALL buffers

        MOV     [DI.VISIT],1            ; Mark as visited

        CMP     BYTE PTR [DI.BUFDRV],-1

        JZ      SKPBF                   ; Save a call to PLACEBUF

        MOV     WORD PTR [DI.BUFDRV],00FFH

        invoke  SCANPLACE

SKPBF:

        invoke  SKIPVISIT

        JNZ     NBFFR

        return

$DISK_RESET ENDP



        procedure   $RAW_CON_IO,NEAR   ; System call 6

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DL = -1 if input

;       else DL is output character

; Function:

;       Input or output raw character from console, no echo

; Returns:

;       AL = character



        MOV     AL,DL

        CMP     AL,-1

        JNZ     RAWOUT

        LES     DI,DWORD PTR [user_SP]                ; Get pointer to register save area

        XOR     BX,BX

        invoke  GET_IO_FCB

        retc

        MOV     AH,1

        invoke  IOFUNC

        JNZ     RESFLG

        invoke  SPOOLINT

        OR      BYTE PTR ES:[DI.user_F],40H ; Set user's zero flag

        XOR     AL,AL

        return



RESFLG:

        AND     BYTE PTR ES:[DI.user_F],0FFH-40H    ; Reset user's zero flag



RILP:

        invoke  SPOOLINT

    entry   $RAW_CON_INPUT        ; System call 7



; Inputs:

;       None

; Function:

;       Input raw character from console, no echo

; Returns:

;       AL = character



        XOR     BX,BX

        invoke  GET_IO_FCB

        retc

        MOV     AH,1

        invoke  IOFUNC

        JZ      RILP

        XOR     AH,AH

        invoke  IOFUNC

        return

;

;       Output the character in AL to stdout

;

entry   RAWOUT



        PUSH    BX

        MOV     BX,1



        invoke  GET_IO_FCB

        JC      RAWRET1



        TEST    [SI.fcb_DEVID],080H             ; output to file?

        JZ      RAWNORM                         ; if so, do normally

        PUSH    DS

        PUSH    SI

        LDS     SI,DWORD PTR [SI.fcb_FIRCLUS]   ; output to special?

        TEST    BYTE PTR [SI+SDEVATT],ISSPEC

        POP     SI

        POP     DS

        JZ      RAWNORM                         ; if not, do normally

        INT     int_fastcon                     ; quickly output the char

        JMP     SHORT RAWRET

RAWNORM:



        CALL    RAWOUT3

RAWRET: CLC

RAWRET1:

        POP     BX

        return



;

;       Output the character in AL to handle in BX

;

entry   RAWOUT2



        invoke  GET_IO_FCB

        retc

RAWOUT3:

        PUSH    AX

        JMP     SHORT RAWOSTRT

ROLP:

        invoke  SPOOLINT

RAWOSTRT:

        MOV     AH,3

        CALL    IOFUNC

        JZ      ROLP

        POP     AX

        MOV     AH,2

        CALL    IOFUNC

        CLC                     ; Clear carry indicating successful

        return

$RAW_CON_IO   ENDP



ASSUME  DS:NOTHING,ES:NOTHING

; This routine is called at DOS init



        procedure   OUTMES,NEAR ; String output for internal messages

        LODS    CS:BYTE PTR [SI]

        CMP     AL,"$"

        retz

        invoke  OUT

        JMP     SHORT OUTMES

        return

OutMes  ENDP

        ASSUME  SS:DOSGROUP



BREAK <$Parse_File_Descriptor -- Parse an arbitrary string into an FCB>

        procedure   $PARSE_FILE_DESCRIPTOR,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DS:SI Points to a command line

;       ES:DI Points to an empty FCB

;       Bit 0 of AL = 1 At most one leading separator scanned off

;                   = 0 Parse stops if separator encountered

;       Bit 1 of AL = 1 If drive field blank in command line - leave FCB

;                   = 0  "    "    "     "         "      "  - put 0 in FCB

;       Bit 2 of AL = 1 If filename field blank - leave FCB

;                   = 0  "       "      "       - put blanks in FCB

;       Bit 3 of AL = 1 If extension field blank - leave FCB

;                   = 0  "       "      "        - put blanks in FCB

; Function:

;       Parse command line into FCB

; Returns:

;       AL = 1 if '*' or '?' in filename or extension, 0 otherwise

;       DS:SI points to first character after filename



        invoke  MAKEFCB

        PUSH    SI

        invoke  get_user_stack

        POP     [SI.user_SI]

        return

$PARSE_FILE_DESCRIPTOR ENDP



BREAK <$Create_Process_Data_Block,SetMem -- Set up process data block>

;----+----+----+----+----+----+----+----+----+----+----+----+----+----+----;

;            C  A  V  E  A  T     P  R  O  G  R  A  M  M  E  R             ;

;                                                                          ;

        procedure   $Dup_PDB,NEAR

ASSUME  DS:NOTHING,ES:NOTHING

        MOV     BYTE PTR [CreatePDB], 0FFH  ; indicate a new process

$Dup_PDB    ENDP





        procedure   $CREATE_PROCESS_DATA_BLOCK,NEAR

ASSUME  DS:NOTHING,ES:NOTHING,SS:NOTHING



; Inputs:

;       DX = Segment number of new base

; Function:

;       Set up program base and copy term and ^C from int area

; Returns:

;       None

; Called at DOS init



        MOV     ES,DX

        TEST    BYTE PTR [CreatePDB],0FFh

        JZ      create_PDB_old

        MOV     DS,[CurrentPDB]

        JMP     SHORT Create_copy



Create_PDB_old:

        invoke  get_user_stack

        MOV     DS,[SI.user_CS]



Create_copy:

        XOR     SI,SI                   ; copy all 80h bytes

        MOV     DI,SI

        MOV     CX,80H

        REP     MOVSW



        TEST    BYTE PTR [CreatePDB],0FFh   ; Shall we create a process?

        JZ      Create_PDB_cont         ; nope, old style call

;

; Here we set up for a new process...

;



        PUSH    CS

        POP     DS

        ASSUME  DS:DOSGROUP

        XOR     BX,BX                   ; dup all jfns

        MOV     CX,FilPerProc



Create_dup_jfn:

        PUSH    ES                      ; save new PDB

        invoke  get_jfn_pointer         ; ES:DI is jfn

        JC      create_skip             ; not a valid jfn

        PUSH    ES                      ; save him

        PUSH    DI

        invoke  get_sf_from_jfn         ; get sf pointer

        JC      create_no_inc

        INC     ES:[DI].sf_ref_count    ; new fh



create_no_inc:

        POP     DI

        POP     ES                      ; get old jfn

        MOV     AL,ES:[DI]              ; get sfn

        POP     ES

        PUSH    ES

        MOV     AL,ES:[BX]              ; copy into new place!



create_skip:

        POP     ES

        INC     BX                      ; next jfn...

        LOOP    create_dup_jfn



        PUSH    [CurrentPDB]            ; get current process

        POP     BX

        PUSH    BX

        POP     ES:[PDB_Parent_PID]     ; stash in child

        MOV     [CurrentPDB],ES

        ASSUME  DS:NOTHING

        MOV     DS,BX

;

; end of new process create

;

Create_PDB_cont:

        MOV     BYTE PTR [CreatePDB],0h ; reset flag

        MOV     AX,DS:[2]               ; set up size for fall through



entry SETMEM

ASSUME  DS:NOTHING,ES:NOTHING,SS:NOTHING



; Inputs:

;       AX = Size of memory in paragraphs

;       DX = Segment

; Function:

;       Completely prepares a program base at the

;       specified segment.

; Called at DOS init

; Outputs:

;       DS = DX

;       ES = DX

;       [0] has INT int_abort

;       [2] = First unavailable segment ([ENDMEM])

;       [5] to [9] form a long call to the entry point

;       [10] to [13] have exit address (from int_terminate)

;       [14] to [17] have ctrl-C exit address (from int_ctrl_c)

;       [18] to [21] have fatal error address (from int_fatal_abort)

; DX,BP unchanged. All other registers destroyed.



        XOR     CX,CX

        MOV     DS,CX

        MOV     ES,DX

        MOV     SI,addr_int_terminate

        MOV     DI,SAVEXIT

        MOV     CX,6

        REP     MOVSW

        MOV     ES:[2],AX

        SUB     AX,DX

        CMP     AX,MAXDIF

        JBE     HAVDIF

        MOV     AX,MAXDIF

HAVDIF:

        MOV     BX,ENTRYPOINTSEG

        SUB     BX,AX

        MOV     CL,4

        SHL     AX,CL

        MOV     DS,DX

        MOV     WORD PTR DS:[PDB_CPM_Call+1],AX

        MOV     WORD PTR DS:[PDB_CPM_Call+3],BX

        MOV     DS:[PDB_Exit_Call],(int_abort SHL 8) + mi_INT

        MOV     BYTE PTR DS:[PDB_CPM_Call],mi_Long_CALL

        MOV     WORD PTR DS:[PDB_Call_System],(int_command SHL 8) + mi_INT

        MOV     BYTE PTR DS:[PDB_Call_System+2],mi_Long_RET

        return



$CREATE_PROCESS_DATA_BLOCK ENDP

        do_ext



 CODE   ENDS

        END

                                                                            