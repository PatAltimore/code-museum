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
description: "This file contains miscellaneous routines for MS-DOS v2.0, showcasing the evolution of system calls and file handling mechanisms in early PC operating systems."

summary:
  - point: "Introduced directory search routines for file management"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Implemented raw console I/O for direct user interaction"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Added support for parsing file descriptors into FCBs"
    link: "https://en.wikipedia.org/wiki/File_Control_Block"
    link_label: "File Control Block"
  - point: "Optimized buffer management with disk reset routines"
    link: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    link_label: "Buffer"
  - point: "Reflected Unix-inspired design in process data block creation"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"

enhancements:
  - id: "name-section-miscellaneous-routines"
    line_start: 3
    line_end: 41
    title: "Why MS-DOS Needed 'Miscellaneous' Routines"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section begins with the declaration of the MISC segment, which houses various utility routines for MS-DOS. These routines were designed to handle tasks that did not fit neatly into other categories, reflecting the ad-hoc nature of early operating system development. Tim Paterson, the original author of 86-DOS, laid the groundwork for these kinds of modular sections, which were later expanded by Microsoft engineers. In 1983, MS-DOS v2.0 introduced features inspired by Unix, such as hierarchical directories and file handles, necessitating a more sophisticated organization of system calls. The MISC segment encapsulates these utility functions, ensuring they are accessible across the system. This modular approach influenced later operating systems, including Windows, which continued to rely on segmented design for backward compatibility and extensibility."
  - id: "include-dosseg-dossym-devsym"
    line_start: 43
    line_end: 119
    title: "The Headers That Defined MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section includes three key assembly headers: DOSSEG.ASM, DOSSYM.ASM, and DEVSYM.ASM. These files define segment structures, symbolic constants, and device-specific symbols, respectively. By centralizing these definitions, MS-DOS ensured consistency and reduced errors across its codebase. This practice was critical in an era when assembly programming required precise memory management and hardware interaction. The use of symbolic constants and segment definitions reflects the influence of structured programming principles, which were gaining traction in the early 1980s. These headers laid the groundwork for modular programming in MS-DOS, influencing later operating systems like Windows, which continued to use header files for system-wide definitions."
  - id: "sleazefunc-media-byte-pointer"
    line_start: 123
    line_end: 213
    title: "The 'SleazeFunc' That Accessed Disk Media"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The $SLEAZEFUNC routine retrieves the FAT ID byte and disk allocation information, providing critical data for file system operations. This function reflects the low-level nature of MS-DOS, where direct hardware interaction was common. The name 'SleazeFunc' humorously acknowledges the hacky nature of this routine, which bypasses higher-level abstractions to access raw disk data. At the time, MS-DOS's reliance on the FAT file system was groundbreaking, enabling efficient storage and retrieval on floppy disks and hard drives. This approach influenced later file systems, including FAT32 and exFAT, which expanded on the principles established here. The direct access to hardware also inspired the design of device drivers in subsequent operating systems."
  - id: "abort-process-termination"
    line_start: 227
    line_end: 295
    title: "How MS-DOS Terminated Processes"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The $ABORT routine handles process termination, restoring system state and flushing buffers before transferring control to the terminate address. This function highlights the simplicity of MS-DOS's process management, which lacked the multitasking capabilities of Unix. In the early 1980s, personal computers were single-user systems, so process termination was straightforward. However, the careful restoration of system state ensured stability, a critical feature for business applications running on IBM PCs. This routine influenced later operating systems, which built more complex process management systems while retaining the principle of state restoration during termination."
  - id: "directory-search-first"
    line_start: 299
    line_end: 453
    title: "The Routine That Found Files in MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Control_Block"
    image_url: ""
    image_caption: ""
    content: "The $DIR_SEARCH_FIRST routine initiates a directory search, locating the first matching entry and loading it into the disk transfer address. This function was essential for file management in MS-DOS, which relied on the File Control Block (FCB) structure. The routine's design reflects the constraints of early PCs, where memory and processing power were limited. By directly manipulating FCBs, MS-DOS achieved efficient file searches, a feature that was critical for business applications. This approach influenced later file systems, which adopted more sophisticated search algorithms while retaining the concept of indexed file structures."
  - id: "disk-reset-buffer-management"
    line_start: 669
    line_end: 727
    title: "How MS-DOS Flushed Dirty Buffers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    image_url: ""
    image_caption: ""
    content: "The $DISK_RESET routine flushes and invalidates all buffers, ensuring data integrity during disk operations. Buffer management was a critical aspect of MS-DOS, which operated in a constrained environment with limited memory. This routine reflects the influence of Unix, which introduced similar mechanisms for managing disk I/O. By invalidating buffers, MS-DOS prevented data corruption, a common issue in early computing. This approach influenced later operating systems, which adopted more advanced buffer management techniques, such as write caching and journaling, to improve performance and reliability."
  - id: "raw-console-io"
    line_start: 733
    line_end: 933
    title: "The System Call for Raw Console I/O"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The $RAW_CON_IO routine provides raw input and output functionality for the console, bypassing higher-level abstractions. This system call highlights the low-level nature of MS-DOS, which was designed for direct interaction with hardware. Raw console I/O was critical for applications that required precise control over user input and output, such as text editors and command-line utilities. This routine influenced the design of later operating systems, which retained raw I/O capabilities for specialized applications while introducing higher-level APIs for general use."
  - id: "parse-file-descriptor"
    line_start: 963
    line_end: 1015
    title: "Parsing Strings into File Control Blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Control_Block"
    image_url: ""
    image_caption: ""
    content: "The $PARSE_FILE_DESCRIPTOR routine converts a command-line string into a File Control Block (FCB), enabling file operations. This function reflects the simplicity of MS-DOS's file handling, which relied on FCBs for storing file metadata. Parsing strings into FCBs was critical for command-line utilities, which needed to interpret user input efficiently. This approach influenced later operating systems, which adopted more sophisticated file handling mechanisms, such as file descriptors and handles, while retaining the principle of parsing user input for file operations."
  - id: "dup-pdb-process-copying"
    line_start: 1021
    line_end: 1033
    title: "How MS-DOS Managed Process Duplication"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section begins with the `$Dup_PDB` routine, which handles the duplication of Process Data Blocks (PDBs). PDBs are central to MS-DOS's process management, storing critical information about running programs such as memory segments and control flags. The routine checks a flag (`CreatePDB`) to determine whether to duplicate an existing process or create a new one. This decision-making mechanism reflects a shift in MS-DOS v2.0 towards Unix-inspired process management, where processes could be dynamically created and managed. In 1983, when MS-DOS v2.0 was released, personal computing was rapidly evolving. IBM PCs were becoming the standard, and software needed to adapt to multitasking and memory constraints in a single-user environment. Tim Paterson and the Microsoft team borrowed ideas from Unix, which had already established robust process management techniques. However, MS-DOS had to operate within the limitations of the 8086 architecture, which lacked hardware support for multitasking. The `$Dup_PDB` routine laid the groundwork for more sophisticated process handling in later operating systems. By introducing a structured approach to process duplication, it influenced subsequent MS-DOS versions and other DOS-based systems like DR-DOS and PC-DOS. The concept of a PDB eventually evolved into more advanced process control blocks in multitasking operating systems, including Windows NT. This routine represents an early step in bridging single-tasking systems with the multitasking capabilities that would define modern computing."
  - id: "create-pdb-old-legacy-support"
    line_start: 1073
    line_end: 1077
    title: "Legacy Process Creation in MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `Create_PDB_old` routine provides backward compatibility for older process creation methods. It retrieves the user stack and sets up the segment registers (`DS`) for the process. This routine reflects Microsoft's commitment to supporting legacy applications while introducing new features in MS-DOS v2.0. In the early 1980s, backward compatibility was a critical concern for software developers. MS-DOS had to maintain compatibility with programs written for earlier versions of DOS and the 8086 processor. This was especially important for OEMs and businesses that relied on existing software investments. Tim Paterson's original 86-DOS design had been simple and direct, but as MS-DOS evolved, it needed to balance innovation with stability. The legacy support provided by `Create_PDB_old` ensured that older applications could run seamlessly on newer versions of MS-DOS, preserving the ecosystem of software built for the IBM PC. This approach influenced later operating systems, including Windows, which maintained backward compatibility with DOS applications for decades. The routine exemplifies the trade-offs required to innovate while maintaining a stable foundation for users."
  - id: "create-copy-memory-transfer"
    line_start: 1081
    line_end: 1113
    title: "Copying Memory Blocks for Process Creation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `Create_copy` routine is responsible for copying memory blocks during process creation. It uses the `REP MOVSW` instruction to transfer 128 bytes (`80h`) of data from the source to the destination. This efficient block copy operation is a hallmark of assembly programming, leveraging the 8086 processor's capabilities to minimize overhead. In the context of MS-DOS v2.0, memory management was a critical challenge. The IBM PC's 8086 processor operated in real mode, limiting addressable memory to 1MB. Efficient use of this memory was essential for running multiple processes and supporting larger applications. The `Create_copy` routine exemplifies the low-level optimization required to maximize performance on constrained hardware. This approach to memory copying influenced later developments in operating systems and programming languages. The use of block copy operations became standard practice in performance-critical applications, from game engines to embedded systems. The routine also highlights the ingenuity of early software developers, who had to work within severe hardware limitations to deliver functionality that users now take for granted."
  - id: "create-dup-jfn-file-handles"
    line_start: 1117
    line_end: 1133
    title: "Duplicating File Handles for Processes"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_descriptor"
    image_url: ""
    image_caption: ""
    content: "The `Create_dup_jfn` routine duplicates file handles (JFNs) for a new process. It iterates through all file handles associated with the current process, incrementing reference counts and copying them to the new process's PDB. This ensures that the child process inherits access to the same files as the parent. File handle duplication is a concept borrowed from Unix, where file descriptors are a fundamental part of process management. In MS-DOS v2.0, this feature was adapted to the single-user environment of the IBM PC. The routine reflects the influence of Unix on MS-DOS's design, as Microsoft sought to introduce more sophisticated features while maintaining simplicity. The ability to duplicate file handles became a standard feature in operating systems, enabling process creation and inter-process communication. This routine's approach to file handle management influenced later DOS-based systems and contributed to the development of more advanced file descriptor mechanisms in multitasking operating systems like Windows and Linux."
  - id: "entry-memory-preparation"
    line_start: 1191
    line_end: 1285
    title: "Preparing Memory for New Processes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `entry` routine prepares memory for a new process, setting up segment registers (`DS`, `ES`) and initializing critical memory locations. It calculates the size of available memory and configures interrupt vectors for process termination and error handling. This routine is called during DOS initialization to establish a stable environment for running programs. Memory preparation was a vital task in the constrained environment of the 8086 processor. With only 1MB of addressable memory, MS-DOS had to carefully allocate and manage resources to support multiple processes. The `entry` routine demonstrates the meticulous attention to detail required to optimize memory usage and ensure system stability. This approach to memory preparation influenced later operating systems, where memory management became increasingly sophisticated. The routine's use of interrupt vectors for error handling laid the foundation for advanced exception handling mechanisms in modern programming languages. It also highlights the transition from simple memory allocation to the complex virtual memory systems that define contemporary computing."
  - id: "havdif-memory-difference-calculation"
    line_start: 1257
    line_end: 1281
    title: "Calculating Memory Differences for Processes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `HAVDIF` routine calculates the difference between available memory and the maximum allowed memory for a process. It adjusts memory allocation based on this difference, ensuring that processes do not exceed their limits. This routine is part of MS-DOS's memory management strategy, which balances resource allocation with system stability. In 1983, memory management was a critical concern for operating systems. The IBM PC's limited memory required careful planning to avoid conflicts and crashes. The `HAVDIF` routine reflects the challenges of working within these constraints, as developers had to implement efficient algorithms to maximize available resources. The concept of calculating memory differences influenced later developments in operating systems, where dynamic memory allocation became standard practice. This routine's approach to memory management paved the way for more advanced techniques, such as paging and virtual memory, which are now integral to modern computing. It also highlights the ingenuity of early software developers, who had to find creative solutions to overcome hardware limitations."
  - id: "create-process-data-block-finalization"
    line_start: 1285
    line_end: 1285
    title: "Finalizing Process Data Block Creation"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `$CREATE_PROCESS_DATA_BLOCK` routine finalizes the creation of a new Process Data Block (PDB). It sets up external references and ensures that the PDB is ready for use by the operating system. This routine marks the end of the process creation sequence, tying together the various steps involved in initializing a new process. Process creation was a significant innovation in MS-DOS v2.0, inspired by Unix's approach to multitasking. The `$CREATE_PROCESS_DATA_BLOCK` routine encapsulates the complexity of process management in a single, cohesive operation. It reflects Microsoft's efforts to introduce advanced features while maintaining the simplicity required for the IBM PC's hardware. This routine influenced the development of process management in later operating systems, including Windows. The concept of a structured data block for processes became a standard practice, enabling more sophisticated multitasking and resource management. The routine also highlights the transition from single-tasking systems to the multitasking capabilities that define modern computing."

---

```asm
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
```
