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
description: "Miscellaneous routines in MS-DOS v2.0, showcasing the evolution of system-level programming in the early 1980s."

summary:
  - point: "Introduces subroutines for managing file control blocks (FCBs) and process data blocks."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Demonstrates low-level disk and memory management techniques."
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Reflects the influence of Unix-like systems on MS-DOS v2.0."
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"

enhancements:
  - id: "name-section-miscellaneous"
    line_start: 3
    line_end: 41
    title: "Miscellaneous routines: A programmer's toolkit"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The 'NAME' section introduces the purpose of this file: a collection of miscellaneous routines for MS-DOS v2.0. These routines were essential for handling tasks that did not fit neatly into other categories, such as file management and process control. In 1983, MS-DOS v2.0 marked a significant departure from its predecessor by incorporating features inspired by Unix, including hierarchical directories and file handles. This section sets the stage for the routines that follow, reflecting the pragmatic approach of early system-level programming. Tim Paterson, the original author of 86-DOS, laid the groundwork for these techniques, which were further refined by Microsoft engineers to meet the demands of the IBM PC and other OEMs. The inclusion of these routines underscores the versatility required in operating system design during an era of rapid hardware evolution."
  - id: "sleazefunc-disk-allocation"
    line_start: 123
    line_end: 211
    title: "SleazeFunc: Disk allocation insights"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The '$SLEAZEFUNC' subroutine provides low-level access to disk allocation information, including the FAT ID byte, total allocation units, sector size, and sectors per allocation unit. This routine is a direct interface to the File Allocation Table (FAT), a cornerstone of MS-DOS's file system. In 1983, FAT was a relatively novel approach to disk management, balancing simplicity and efficiency for the limited storage capacities of the time. The comments in this section, including 'GOD help anyone who tries to do ANYTHING except READ this ONE byte,' highlight the precarious nature of working directly with hardware-level data structures. The engineers behind MS-DOS were navigating uncharted territory, creating solutions that would become industry standards. Today, FAT remains influential, used in USB drives and SD cards, a testament to the enduring impact of these early design decisions."
  - id: "abort-process-termination"
    line_start: 295
    line_end: 295
    title: "Abort: Graceful process termination"
    wikipedia_url: "https://en.wikipedia.org/wiki/Process_(computing)"
    image_url: ""
    image_caption: ""
    content: "The '$ABORT' subroutine is designed to terminate a process gracefully by restoring interrupt vectors, flushing buffers, and transferring control to the terminate address. In the early 1980s, process management was a critical aspect of operating system design, especially for single-tasking systems like MS-DOS. This routine reflects the meticulous attention to detail required to ensure system stability and data integrity during process termination. The use of interrupt vectors and stack manipulation showcases the low-level programming techniques that were standard practice in assembly language development. These methods laid the foundation for more sophisticated process management in later operating systems, influencing the evolution of multitasking and memory protection mechanisms."
  - id: "dir-search-first"
    line_start: 453
    line_end: 453
    title: "Directory search: Finding the first match"
    wikipedia_url: "https://en.wikipedia.org/wiki/Directory_(computing)"
    image_url: ""
    image_caption: ""
    content: "The '$DIR_SEARCH_FIRST' subroutine initiates a directory search to find the first matching entry based on a given File Control Block (FCB). This routine loads the matching directory entry at the disk transfer address, a critical operation for file management in MS-DOS. In 1983, hierarchical directories were a new feature in MS-DOS v2.0, inspired by Unix. This addition transformed the way users and applications interacted with the file system, enabling more organized and scalable storage solutions. The implementation of directory search routines reflects the challenges of adapting Unix-like concepts to the constraints of the IBM PC's hardware. These routines were pivotal in making MS-DOS a versatile and widely adopted operating system, influencing file system design for decades."
  - id: "disk-reset-flush-buffers"
    line_start: 729
    line_end: 733
    title: "Disk Reset: Clearing the slate"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    image_url: ""
    image_caption: ""
    content: "The '$DISK_RESET' subroutine flushes and invalidates all disk buffers, ensuring that any pending writes are completed and the buffers are cleared. Buffer management was a critical aspect of operating system design in the early 1980s, especially for systems like MS-DOS that operated on limited hardware resources. This routine reflects the need for precise control over I/O operations to maintain data integrity and system stability. The engineers behind MS-DOS had to balance performance and reliability, often relying on assembly language to achieve the necessary efficiency. The principles demonstrated in this routine continue to influence modern operating systems, where buffer management remains a key component of I/O optimization."
  - id: "parse-file-descriptor"
    line_start: 1015
    line_end: 1015
    title: "Parsing file descriptors: Command-line magic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The '$PARSE_FILE_DESCRIPTOR' subroutine parses an arbitrary string into a File Control Block (FCB), enabling applications to interact with files based on user input. This routine is a testament to the importance of command-line interfaces in the early days of computing. In 1983, graphical user interfaces were still in their infancy, and command-line tools were the primary means of interacting with operating systems. The ability to parse and interpret user input was crucial for making MS-DOS accessible and functional. This routine demonstrates the low-level string manipulation techniques that were standard practice in assembly language programming. The legacy of these techniques can be seen in modern programming languages, where string parsing remains a fundamental operation."
  - id: "create-process-data-block"
    line_start: 1285
    line_end: 1295
    title: "Creating process data blocks: Building the foundation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Process_control_block"
    image_url: ""
    image_caption: ""
    content: "The '$CREATE_PROCESS_DATA_BLOCK' subroutine sets up a process data block, a key structure for managing processes in MS-DOS. This routine initializes program base settings, copies termination and Ctrl-C interrupt vectors, and prepares the environment for the new process. In the early 1980s, process management was a challenging task, especially for single-tasking systems like MS-DOS. The introduction of process data blocks in MS-DOS v2.0 reflects the growing complexity of operating system design as hardware capabilities expanded. These structures laid the groundwork for more advanced process management techniques in multitasking systems. The engineers behind MS-DOS were pioneering solutions that would influence the development of operating systems for decades to come."

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