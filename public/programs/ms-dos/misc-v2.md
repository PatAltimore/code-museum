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
description: "This file contains miscellaneous routines for MS-DOS v2.0, showcasing the evolution of system-level programming in the early 1980s."

summary:
  - point: "Introduces subroutines for file and process management in MS-DOS"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Demonstrates low-level disk and buffer handling techniques"
    link: "https://en.wikipedia.org/wiki/Disk_buffer"
    link_label: "Disk Buffer"
  - point: "Highlights early use of FAT (File Allocation Table) operations"
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "FAT"
  - point: "Includes routines inspired by Unix-like systems for process and file handling"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Shows the constraints and ingenuity required in assembly programming for early PCs"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "name-misc-section"
    line_start: 3
    line_end: 35
    title: "Why 'Miscellaneous' Routines Were Vital"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section begins with the declaration of the 'MISC' segment, which organizes miscellaneous routines for MS-DOS. These routines handle various system-level tasks, such as managing memory, processes, and file control blocks (FCBs). In the early 1980s, operating systems like MS-DOS were constrained by the limited memory and processing power of machines like the IBM PC, which had only 64KB to 640KB of RAM. By grouping these routines into a dedicated segment, the developers ensured modularity and easier debugging. Tim Paterson and Microsoft engineers likely drew inspiration from Unix's modular design principles, adapting them to fit the simpler architecture of MS-DOS. This modularity influenced later operating systems, including Windows, which retained the concept of segmented system calls for backward compatibility."
  - id: "include-dosseg-dossym"
    line_start: 37
    line_end: 115
    title: "The Headers That Defined MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section includes critical header files, 'DOSSEG.ASM', 'DOSSYM.ASM', and 'DEVSYM.ASM', which define segment structures, symbolic constants, and device-specific operations. These headers are foundational for MS-DOS's ability to interact with hardware and manage files. In the constrained environment of the IBM PC, developers had to write assembly code that directly interfaced with hardware, such as disk controllers and memory. By abstracting these operations into headers, MS-DOS provided a consistent interface for developers, simplifying the creation of applications. This approach became a standard practice in operating system design, influencing the development of APIs in later systems like Windows and Linux."
  - id: "sleazefunc-disk-metadata"
    line_start: 123
    line_end: 213
    title: "The Subroutine That Reads Disk Metadata"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The '$SLEAZEFUNC' subroutine retrieves disk metadata, including the FAT ID byte, sector size, and allocation unit details. This routine is a direct interface to the File Allocation Table (FAT), a critical component of MS-DOS's file system. FAT was designed to be simple and efficient, suitable for the limited storage capacities of early floppy disks and hard drives. The subroutine's name and comments reflect the informal, sometimes irreverent culture of early software development, where deadlines often took precedence over polished code. FAT's simplicity and widespread adoption made it a cornerstone of file systems for decades, influencing successors like exFAT and NTFS."
  - id: "abort-process-termination"
    line_start: 229
    line_end: 295
    title: "How MS-DOS Terminated Processes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Process_management_(computing)"
    image_url: ""
    image_caption: ""
    content: "The '$ABORT' subroutine handles process termination by restoring interrupt vectors, flushing buffers, and transferring control to a termination address. In the early days of computing, process management was rudimentary, with no multitasking or memory protection. This routine ensured that terminated processes left the system in a clean state, preventing crashes or data corruption. The concept of restoring interrupt vectors and flushing buffers influenced later operating systems, which implemented more sophisticated process management techniques. MS-DOS's approach laid the groundwork for process control in Windows and other systems."
  - id: "dir-search-first"
    line_start: 299
    line_end: 453
    title: "The Routine That Found Files"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Control_Block"
    image_url: ""
    image_caption: ""
    content: "The '$DIR_SEARCH_FIRST' subroutine initiates a directory search, loading the first matching entry into the disk transfer address. This routine operates on File Control Blocks (FCBs), an early method for managing files. FCBs were a precursor to modern file descriptors, providing a structured way to access file metadata. The routine's design reflects the constraints of MS-DOS, which lacked hierarchical file systems until version 2.0. By enabling efficient file searches, this subroutine influenced the development of more advanced file systems, such as NTFS, which support features like indexing and metadata tagging."
  - id: "disk-reset-flush-buffers"
    line_start: 669
    line_end: 727
    title: "Flushing Buffers: A Vital Cleanup"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_buffer"
    image_url: ""
    image_caption: ""
    content: "The '$DISK_RESET' subroutine flushes and invalidates all disk buffers, ensuring data integrity during system operations. Disk buffers temporarily store data before writing it to disk, improving performance but introducing risks if not properly managed. This routine reflects the challenges of programming in an environment with limited memory and no hardware abstraction. By explicitly managing buffers, MS-DOS developers ensured reliability, a critical factor for business adoption of the IBM PC. Buffer management techniques from MS-DOS influenced later systems, where automated buffer flushing became standard practice."
  - id: "raw-console-io"
    line_start: 215
    line_end: 1069
    title: "Direct Console Input and Output"
    wikipedia_url: "https://en.wikipedia.org/wiki/Console_application"
    image_url: ""
    image_caption: ""
    content: "The '$RAW_CON_IO' subroutine provides raw input and output operations for the console, bypassing higher-level abstractions. This routine is crucial for low-level system calls, allowing direct interaction with the user. In the early 1980s, console applications were the primary interface for software, making routines like this essential. The ability to handle raw I/O influenced the design of later systems, where developers could choose between high-level APIs and direct hardware access. This flexibility remains a hallmark of operating system design, seen in platforms like Linux and Windows."
  - id: "parse-file-descriptor"
    line_start: 963
    line_end: 1015
    title: "Parsing Strings into File Control Blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Control_Block"
    image_url: ""
    image_caption: ""
    content: "The '$PARSE_FILE_DESCRIPTOR' subroutine converts a command-line string into a File Control Block (FCB). This routine interprets user input, extracting fields like drive, filename, and extension. Parsing was a critical task in MS-DOS, where command-line interfaces were the primary method of interaction. The routine's design reflects the need for efficiency and simplicity, as MS-DOS operated in a constrained environment. Parsing techniques from MS-DOS influenced later systems, where more sophisticated methods, like regular expressions, became standard for handling user input."
  - id: "dup-pdb-flag-check"
    line_start: 1033
    line_end: 1069
    title: "The Flag That Decides Process Duplication"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section begins with a procedure to duplicate a Process Data Block (PDB), a key structure in MS-DOS for managing processes. The code checks a flag (`CreatePDB`) to determine whether to use an old-style process creation method or proceed with a new copy-based approach. This decision reflects MS-DOS v2.0's transition towards Unix-inspired process management, where processes could inherit attributes like file handles and memory segments. In 1983, IBM PCs typically had limited memory (64KB–640KB), and efficient memory management was critical. Tim Paterson and Microsoft's team adapted techniques from XENIX, their Unix variant, to make MS-DOS more flexible for multitasking-like operations. The flag mechanism allowed backward compatibility while introducing new functionality. This approach influenced later DOS versions and other operating systems, which adopted similar process management techniques to handle file descriptors and memory allocation dynamically."
  - id: "create-pdb-old-stack-setup"
    line_start: 1073
    line_end: 1077
    title: "Setting Up the User Stack for Legacy Processes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)"
    image_url: ""
    image_caption: ""
    content: "The `Create_PDB_old` subroutine sets up the user stack for processes created using the older method. It retrieves the user stack pointer and assigns the segment register (`DS`) to the user code segment (`user_CS`). This reflects the need for backward compatibility in MS-DOS v2.0, which had to support programs written for earlier versions of DOS while introducing new features. In the early 1980s, stack management was a critical aspect of programming due to the limited memory and lack of hardware support for advanced multitasking. By carefully managing stack pointers, MS-DOS ensured stability and compatibility across different applications. This technique influenced later operating systems, which continued to prioritize stack management as a cornerstone of process execution."
  - id: "copy-process-data-block"
    line_start: 1081
    line_end: 1113
    title: "Copying 128 Bytes to Start a New Process"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `Create_copy` subroutine is responsible for copying 128 bytes of data (`80h` in hexadecimal) to initialize a new process. This includes critical information like termination handlers and control-C interrupt settings. The use of `REP MOVSW` efficiently copies memory in a loop, leveraging the 8086 instruction set for block transfers. In 1983, memory copying was a common operation, but optimizing it for constrained hardware was a challenge. This routine reflects the influence of Unix-like systems, where process initialization involves duplicating key structures. The efficient memory copying here laid the groundwork for similar techniques in later operating systems, including Windows, which inherited MS-DOS's process management concepts."
  - id: "duplicate-file-handles"
    line_start: 1117
    line_end: 1133
    title: "Duplicating File Handles for Child Processes"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_descriptor"
    image_url: ""
    image_caption: ""
    content: "The `Create_dup_jfn` subroutine duplicates file handles (JFNs) for a new process. It iterates through all file handles (`FilPerProc`) and increments reference counts for shared files. This ensures that child processes can access the same files as their parent, a concept borrowed from Unix's file descriptor inheritance. In the early 1980s, file management was a critical feature for operating systems, as programs often relied on open file handles for data persistence. By implementing file handle duplication, MS-DOS v2.0 enabled more sophisticated process interactions, paving the way for features like pipes and inter-process communication in later systems. This technique influenced the design of file management in Windows and other operating systems."
  - id: "reset-process-flag"
    line_start: 1177
    line_end: 1255
    title: "Resetting the Process Creation Flag"
    wikipedia_url: "https://en.wikipedia.org/wiki/Flag_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `Create_PDB_cont` subroutine resets the `CreatePDB` flag after a process is created. This ensures that subsequent calls to the process creation routines do not inadvertently reuse the flag's state. Flags like `CreatePDB` were a common mechanism in early operating systems for controlling program flow and state. In MS-DOS v2.0, this flag allowed the system to toggle between old and new process creation methods, reflecting the transitional nature of the operating system. This approach influenced later systems, where flags became standard for managing state transitions and conditional operations in process management."
  - id: "memory-segment-preparation"
    line_start: 1191
    line_end: 1255
    title: "Preparing Memory Segments for Program Execution"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_segmentation"
    image_url: ""
    image_caption: ""
    content: "The `entry` subroutine prepares memory segments for program execution. It sets up interrupt vectors, exit addresses, and control-C handlers in the specified memory segment. This routine reflects the challenges of memory segmentation in the 8086 architecture, where programs had to manage segments explicitly due to the lack of flat memory addressing. By organizing memory into logical blocks, MS-DOS v2.0 enabled efficient use of limited resources while supporting more complex applications. This approach influenced later systems, including Windows, which built on MS-DOS's memory management techniques to support larger programs and multitasking."
  - id: "process-entrypoint-calculation"
    line_start: 1257
    line_end: 1285
    title: "Calculating Process Entrypoints Dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/Entrypoint"
    image_url: ""
    image_caption: ""
    content: "The `HAVDIF` subroutine calculates dynamic entry points for processes based on memory differences (`MAXDIF`). It adjusts segment registers and sets up long calls to entry points, ensuring that processes can execute correctly within their allocated memory. This routine showcases MS-DOS v2.0's ability to handle dynamic memory allocation and process initialization, inspired by Unix-like systems. In the constrained environment of early PCs, dynamic calculation of entry points was a clever workaround for hardware limitations. This technique influenced later operating systems, where dynamic linking and memory allocation became standard practices."
  - id: "final-process-data-block"
    line_start: 1285
    line_end: 1293
    title: "Wrapping Up Process Data Block Creation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Process_control_block"
    image_url: ""
    image_caption: ""
    content: "The `$CREATE_PROCESS_DATA_BLOCK` procedure wraps up the creation of a Process Data Block (PDB). It finalizes the setup of memory segments, file handles, and interrupt vectors, ensuring that the new process is ready for execution. This routine reflects MS-DOS v2.0's focus on process management, inspired by Unix's Process Control Block (PCB) concept. By organizing process-related data into a single structure, MS-DOS enabled more efficient multitasking-like operations. This approach influenced later systems, including Windows, which expanded on MS-DOS's process management techniques to support true multitasking and complex applications."

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


```