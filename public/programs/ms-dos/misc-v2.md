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
description: "This file contains miscellaneous routines for MS-DOS v2.0, showcasing key system-level operations and design decisions that shaped early personal computing."

summary:
  - point: "Introduces FAT-related operations for disk management"
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "File Allocation Table"
  - point: "Implements directory search routines for file handling"
    link: "https://en.wikipedia.org/wiki/Directory_(computing)"
    link_label: "Directory"
  - point: "Demonstrates low-level console I/O operations"
    link: "https://en.wikipedia.org/wiki/Input/output"
    link_label: "Input/Output"
  - point: "Includes process management routines for multitasking"
    link: "https://en.wikipedia.org/wiki/Process_management_(computing)"
    link_label: "Process Management"
  - point: "Reflects constraints of early 8086 assembly programming"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"

enhancements:
  - id: "name-section-miscellaneous-routines"
    line_start: 1
    line_end: 41
    title: "Miscellaneous routines: A foundation for MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section defines the NAME directive for the file and outlines the purpose of the routines contained within. It sets the stage for the various system-level operations implemented in this file. Tim Paterson, the original author of 86-DOS, laid the groundwork for MS-DOS, which was later adapted by Microsoft. These routines reflect the modular design approach adopted for MS-DOS v2.0, which introduced features inspired by Unix-like systems. The NAME directive helps organize the code and serves as a reference point for developers working on the operating system. This modularity influenced later operating systems, including Windows, which built on MS-DOS's structure."
  - id: "include-dosseg-dossym-devsym"
    line_start: 37
    line_end: 119
    title: "Segment and symbol definitions: Linking the system"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "This section includes external assembly files (`DOSSEG.ASM`, `DOSSYM.ASM`, and `DEVSYM.ASM`) that define segment and symbol information. These files provide essential definitions for memory segmentation and device symbols, enabling the routines in this file to interact with the broader MS-DOS system. Memory segmentation was a critical feature of the Intel 8086 architecture, allowing programs to manage limited memory effectively. By organizing code and data into segments, MS-DOS could support multitasking and modular development. This approach influenced the design of later operating systems, including Windows, which retained backward compatibility with MS-DOS."
  - id: "sleazefunc-fat-id-byte"
    line_start: 123
    line_end: 211
    title: "SleazeFunc: Accessing FAT ID byte"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The `$SLEAZEFUNC` routine retrieves the FAT ID byte, which identifies the type of file system on a disk. It also provides information about allocation units, sector size, and sectors per allocation unit. This routine reflects the low-level disk management operations required in MS-DOS, where direct access to hardware was common. The FAT file system, introduced in 1977, became a cornerstone of MS-DOS and later Windows systems. By enabling efficient disk management, FAT allowed MS-DOS to support larger storage devices and more complex file structures. This routine showcases the challenges of working with hardware constraints and the ingenuity required to overcome them."
  - id: "abort-process-termination"
    line_start: 227
    line_end: 295
    title: "Abort: Terminating processes in MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Process_management_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `$ABORT` routine handles process termination by restoring control addresses, flushing buffers, and transferring control to the terminate address. It ensures that system resources are properly released when a process ends. Process management was a critical feature in MS-DOS v2.0, which introduced multitasking capabilities inspired by Unix. This routine reflects the growing complexity of operating systems in the early 1980s, as developers sought to balance performance with usability. The techniques used here influenced later systems, including Windows, which built on MS-DOS's process management capabilities to support more sophisticated multitasking."
  - id: "dir-search-first-directory-handling"
    line_start: 299
    line_end: 453
    title: "Directory Search: Finding files efficiently"
    wikipedia_url: "https://en.wikipedia.org/wiki/Directory_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `$DIR_SEARCH_FIRST` routine initiates a directory search to find the first matching entry based on a file control block (FCB). It loads the directory entry at the disk transfer address and returns a status code indicating success or failure. Directory handling was a key feature of MS-DOS v2.0, which introduced hierarchical file structures with subdirectories. This routine reflects the challenges of implementing efficient file search algorithms in assembly language. The techniques used here influenced later file systems, including NTFS, which expanded on MS-DOS's directory handling capabilities to support more complex file operations."
  - id: "disk-reset-buffer-flushing"
    line_start: 669
    line_end: 727
    title: "Disk Reset: Managing dirty buffers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `$DISK_RESET` routine flushes and invalidates all dirty buffers, ensuring data integrity on the disk. Buffer management was a critical aspect of MS-DOS, where limited memory required careful handling of temporary storage. This routine reflects the challenges of working within the constraints of the Intel 8086 architecture, which had a 1MB addressable memory limit. By implementing efficient buffer management, MS-DOS could support larger applications and more complex operations. The techniques used here influenced later operating systems, including Windows, which built on MS-DOS's buffer management capabilities to support virtual memory and advanced caching."
  - id: "raw-con-io-console-operations"
    line_start: 733
    line_end: 933
    title: "Raw Console I/O: Direct input and output"
    wikipedia_url: "https://en.wikipedia.org/wiki/Input/output"
    image_url: ""
    image_caption: ""
    content: "The `$RAW_CON_IO` routine handles raw input and output operations for the console, bypassing higher-level functions like echoing. It provides low-level access to the console, allowing developers to implement custom I/O behavior. Console operations were a fundamental feature of MS-DOS, which relied on text-based interfaces for user interaction. This routine reflects the simplicity and flexibility of MS-DOS's design, which allowed developers to interact directly with hardware. The techniques used here influenced later systems, including command-line interfaces in Unix and Linux, which retained the ability to perform raw console I/O for advanced scripting and automation."
  - id: "parse-file-descriptor-command-line"
    line_start: 963
    line_end: 1015
    title: "Parse File Descriptor: Command line to FCB"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The `$PARSE_FILE_DESCRIPTOR` routine parses a command line into a file control block (FCB), enabling MS-DOS to interpret user input and manage files. It handles various parsing options, such as handling blanks in the drive, filename, and extension fields. This routine reflects the importance of command-line interfaces in early operating systems, where users relied on text-based commands to interact with the system. By providing flexible parsing capabilities, MS-DOS could support a wide range of user inputs and file operations. The techniques used here influenced later command-line interfaces, including PowerShell, which expanded on MS-DOS's capabilities to support scripting and automation."
  - id: "duplication-process-data-block"
    line_start: 1039
    line_end: 1069
    title: "Duplicating Process Data Blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Process_control_block"
    image_url: ""
    image_caption: ""
    content: "This section implements the duplication of process data blocks (PDBs), a foundational concept for process management. The routine sets up a new program base and copies termination and interrupt handling information from the interrupt area. The programmer's immediate goal was to ensure smooth initialization of new processes during DOS startup. In 1983, MS-DOS v2.0 introduced features inspired by Unix, including hierarchical file systems and process control. At the time, the IBM PC had limited memory (typically 64KB to 256KB), and efficient memory and process management were critical. Tim Paterson and Microsoft's engineers adapted these techniques to fit the constraints of the 8086 architecture, which lacked hardware support for multitasking. This approach influenced later operating systems, including Windows, which inherited process management concepts from MS-DOS. The duplication of PDBs laid the groundwork for more sophisticated process control mechanisms in future systems."
  - id: "create-old-process-data-block"
    line_start: 1073
    line_end: 1077
    title: "Handling Legacy Process Data Blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Backward_compatibility"
    image_url: ""
    image_caption: ""
    content: "The `Create_PDB_old` routine handles legacy process data blocks, ensuring compatibility with older styles of process initialization. It retrieves the user stack and sets up the data segment for the process. In the early 1980s, backward compatibility was a critical consideration for software developers, as users and businesses relied heavily on existing software investments. MS-DOS v2.0 had to support older applications while introducing new features inspired by Unix. This routine exemplifies the engineering trade-offs required to maintain compatibility while advancing functionality. The concept of backward compatibility remains a cornerstone of software development, influencing operating systems like Windows, which continue to support legacy applications decades later."
  - id: "copying-process-data"
    line_start: 1081
    line_end: 1113
    title: "Copying Process Data for New Processes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Process_management_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `Create_copy` routine copies 128 bytes of process data to set up a new process. It checks whether a new process should be created and, if so, prepares the necessary memory and file handles. This section reflects the challenges of process management in early operating systems, where memory constraints and the lack of hardware multitasking required careful planning. MS-DOS v2.0's process management features were inspired by Unix but adapted to the simpler architecture of the IBM PC. The routine's efficient use of memory and file handles influenced later operating systems, including Windows, which built on these foundational concepts to implement more advanced process management techniques."
  - id: "duplicating-file-handles"
    line_start: 1117
    line_end: 1133
    title: "Duplicating File Handles Across Processes"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_descriptor"
    image_url: ""
    image_caption: ""
    content: "The `Create_dup_jfn` routine duplicates file handles (JFNs) for new processes, ensuring that file access is properly managed. It retrieves file pointers, checks their validity, and increments reference counts. File handle duplication was crucial for supporting multitasking-like behavior in MS-DOS, where processes needed controlled access to shared resources. This technique was adapted from Unix, which used file descriptors for similar purposes. By implementing file handle duplication, MS-DOS v2.0 laid the groundwork for more sophisticated file management systems in later operating systems, including Windows NT, which expanded on these concepts to support true multitasking and robust file systems."
  - id: "skipping-invalid-file-handles"
    line_start: 1153
    line_end: 1181
    title: "Skipping Invalid File Handles"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "The `create_skip` routine handles invalid file handles during the duplication process. It increments the file handle index and loops to process the next handle. Error handling was a critical aspect of early operating systems, where robustness was essential to prevent crashes and data loss. MS-DOS v2.0's approach to error handling reflects the constraints of the 8086 architecture, which lacked advanced error detection mechanisms. This routine's simplicity and efficiency influenced later systems, where error handling became more sophisticated but retained the core principles established in early DOS versions."
  - id: "memory-preparation-for-processes"
    line_start: 1191
    line_end: 1255
    title: "Preparing Memory for Processes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `entry` routine prepares memory for new processes, setting up program bases and initializing interrupt vectors. It calculates memory sizes, sets up entry points, and configures exit addresses. Memory management was a critical challenge for MS-DOS, given the limited RAM available on early IBM PCs. This routine demonstrates the ingenuity required to maximize memory usage while supporting new features like subdirectories and pipes. The techniques used here influenced later operating systems, including Windows, which built on MS-DOS's memory management strategies to support larger and more complex applications."
  - id: "handling-memory-differences"
    line_start: 1257
    line_end: 1281
    title: "Handling Memory Differences"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `HAVDIF` routine calculates memory differences and adjusts segment pointers accordingly. It ensures that processes have access to the correct memory regions, a critical task in an environment with limited resources. Memory management was a cornerstone of MS-DOS v2.0, which introduced features like file handles and pipes that required careful allocation of memory. This routine's efficient handling of memory differences reflects the constraints of the 8086 architecture and the ingenuity of MS-DOS's developers. The principles established here influenced later systems, including Windows, which expanded on these techniques to support more advanced memory management features."
  - id: "finalizing-process-data-blocks"
    line_start: 1285
    line_end: 1285
    title: "Finalizing Process Data Blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Process_control_block"
    image_url: ""
    image_caption: ""
    content: "The `$CREATE_PROCESS_DATA_BLOCK` routine finalizes the creation of process data blocks, ensuring that all necessary data structures are set up correctly. This routine marks the culmination of MS-DOS v2.0's process management features, which were inspired by Unix but adapted to the simpler architecture of the IBM PC. By implementing process data blocks, MS-DOS established a foundation for process control that influenced later operating systems, including Windows NT, which expanded on these concepts to support true multitasking and advanced process management capabilities."

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