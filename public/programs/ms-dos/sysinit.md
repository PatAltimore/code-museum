---
title: "SYSINIT.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/SYSINIT.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/SYSINIT.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "sysinit"
order: 5
description: "MS-DOS v2.0 SYSINIT.ASM: The bootstrap code that initializes the operating system, sizes memory, relocates itself, and loads essential components."

summary:
  - point: "Memory sizing algorithm using bit patterns"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Relocation of SYSINIT code to high memory"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Parsing CONFIG.SYS for system configuration"
    link: "https://en.wikipedia.org/wiki/CONFIG.SYS"
    link_label: "CONFIG.SYS"
  - point: "Integration of device drivers and file handles"
    link: "https://en.wikipedia.org/wiki/Device_driver"
    link_label: "Device Drivers"
  - point: "Execution of COMMAND.COM as the command processor"
    link: "https://en.wikipedia.org/wiki/COMMAND.COM"
    link_label: "COMMAND.COM"

enhancements:
  - id: "sysinit-jump-to-goinit"
    line_start: 133
    line_end: 147
    title: "SYSINIT: Jump to Initialization Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The SYSINIT label marks the entry point of the system initialization code. It immediately jumps to the GOINIT routine, which begins the process of setting up the operating system. This design reflects the modular approach of MS-DOS, where specific tasks are delegated to distinct routines. In the early 1980s, modularity was a key principle in software design, allowing developers to isolate functionality for easier debugging and maintenance. This jump simplifies the flow of execution, ensuring that initialization tasks are handled in a dedicated section of the code. The modularity seen here influenced later operating systems, including Windows, which inherited MS-DOS's layered architecture."
  - id: "memory-sizing-memscan"
    line_start: 265
    line_end: 283
    title: "MEMSCAN: Sizing RAM Using Bit Patterns"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The MEMSCAN routine sizes the available RAM by writing and reading bit patterns to memory locations. This technique was common in early operating systems to determine the amount of usable memory, as hardware did not provide this information directly. By incrementing the memory pointer and testing each location, the routine identifies the upper limit of accessible memory. In 1983, hardware constraints required such low-level memory management techniques. Tim Paterson's experience with hardware-level programming at Seattle Computer Products likely influenced this approach. The method laid the groundwork for more sophisticated memory management systems in later operating systems, such as Windows and Linux, which use BIOS or UEFI calls to query memory."
  - id: "noscan-relocation-to-high-memory"
    line_start: 301
    line_end: 351
    title: "NOSCAN: Relocating SYSINIT to High Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The NOSCAN routine relocates the SYSINIT code to high memory, freeing up lower memory for application use. This was a critical optimization in the era of limited RAM, as the IBM PC typically shipped with 64KB to 640KB of memory. By moving the initialization code out of the way, MS-DOS maximized the memory available for user programs. The technique reflects the influence of Unix, which also employed memory segmentation to optimize resource usage. This approach became a standard practice in operating systems, influencing memory management strategies in DOS-based systems and later in Windows."
  - id: "sysin-relocating-dos"
    line_start: 361
    line_end: 423
    title: "SYSIN: Relocating DOS to Its Final Location"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The SYSIN routine moves the DOS kernel to its final memory location, ensuring it is properly positioned for execution. This involves copying the kernel from its temporary location to the designated area in high memory. The routine also sets up the stack and initializes device drivers. In the early 1980s, memory relocation was a common technique to optimize limited resources. Tim Paterson's design reflects the influence of Unix, which inspired MS-DOS v2.0's more sophisticated memory management. This approach influenced later operating systems, including Windows, which continued to use memory relocation techniques for kernel and driver management."
  - id: "doconf-parsing-config-sys"
    line_start: 929
    line_end: 985
    title: "DOCONF: Parsing CONFIG.SYS for System Configuration"
    wikipedia_url: "https://en.wikipedia.org/wiki/CONFIG.SYS"
    image_url: ""
    image_caption: ""
    content: "The DOCONF routine reads and parses the CONFIG.SYS file to configure the system according to user specifications. CONFIG.SYS allowed users to define device drivers, memory management settings, and other system parameters. This feature, introduced in MS-DOS v2.0, reflects the growing complexity of personal computing in the early 1980s. By enabling user customization, Microsoft positioned MS-DOS as a flexible operating system suitable for a wide range of hardware configurations. The concept of system configuration files influenced later operating systems, including Windows (with its WIN.INI and registry settings) and Linux (with its /etc configuration files)."
  - id: "endfile-memory-allocation-and-sft-linking"
    line_start: 989
    line_end: 1079
    title: "Memory allocation and SFT linking"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section initializes the system's memory allocation and links the System File Table (SFT). It begins by setting up the data segment register (DS) and calls a routine to round memory sizes. The code then adjusts the high memory pointer based on the size of the SFT entries, allocating memory for file handles. The SFT is linked to the DOS data structure, and memory is cleared for new entries. In 1983, memory management was a critical concern due to the limited RAM available on IBM PCs, typically 64KB to 640KB. Tim Paterson's design reflects the constraints of early PCs, where every byte of memory had to be carefully managed. This approach influenced later operating systems, including Windows, which inherited MS-DOS's memory management techniques. The SFT concept became foundational for handling file operations in DOS and inspired similar structures in other systems."
  - id: "dobuff-buffer-management"
    line_start: 1083
    line_end: 1153
    title: "Buffer management for file operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    image_url: ""
    image_caption: ""
    content: "This section manages buffers for file operations. Buffers are allocated dynamically based on the number specified in CONFIG.SYS. The code adjusts memory pointers and links buffers into a chain for efficient access. Buffer management was essential for optimizing disk I/O on slow floppy drives and hard disks of the era. By dynamically adjusting buffer allocation, MS-DOS could balance memory usage and performance. This technique influenced later systems, where dynamic buffer allocation became standard practice in operating systems and database software."
  - id: "buf1-memory-cleanup"
    line_start: 1157
    line_end: 1273
    title: "Memory cleanup and final adjustments"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS_memory_management"
    image_url: ""
    image_caption: ""
    content: "This section cleans up memory and adjusts pointers after buffer allocation. It uses interrupt 21h to set memory blocks and deallocate unused areas. The code also ensures compatibility with high memory configurations. Memory cleanup was vital for maintaining system stability, especially in environments with limited resources. The use of interrupts for memory management reflects the low-level control required in early operating systems. This approach influenced memory management in later DOS versions and other systems, where efficient cleanup routines became standard."
  - id: "badop-error-handling"
    line_start: 1277
    line_end: 1281
    title: "Error handling for invalid operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "This short section handles errors for invalid operations. It prints an error message and redirects execution to a cleanup routine. Error handling was a critical feature in MS-DOS, providing users with feedback and preventing system crashes. The simplicity of this routine reflects the limited resources and straightforward design philosophy of early operating systems. Error handling techniques like this influenced later systems, where robust error reporting became a key feature."
  - id: "noprob-file-size-calculation"
    line_start: 1285
    line_end: 1375
    title: "File size calculation and memory adjustment"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "This section calculates the size of a file and adjusts memory pointers accordingly. It uses interrupt 21h to seek the end of the file and determine its size. The code then adjusts memory allocation based on the file size. File size calculation was essential for managing disk space and memory in MS-DOS. This routine reflects the low-level control required to interact with the file system and allocate resources efficiently. Techniques like this influenced file system design in later operating systems, where dynamic allocation and size calculation became standard."
  - id: "conferr-configuration-error-handling"
    line_start: 1377
    line_end: 1381
    title: "Handling configuration errors"
    wikipedia_url: "https://en.wikipedia.org/wiki/CONFIG.SYS"
    image_url: ""
    image_caption: ""
    content: "This section handles errors in the CONFIG.SYS file. It prints an error message and redirects execution to a cleanup routine. CONFIG.SYS was a vital part of MS-DOS, allowing users to configure system settings and device drivers. Error handling for CONFIG.SYS ensured that misconfigurations did not crash the system. This approach influenced later systems, where configuration files became more robust and error handling more sophisticated."
  - id: "getcom-command-parsing"
    line_start: 1387
    line_end: 1391
    title: "Parsing commands from CONFIG.SYS"
    wikipedia_url: "https://en.wikipedia.org/wiki/CONFIG.SYS"
    image_url: ""
    image_caption: ""
    content: "This section parses commands from the CONFIG.SYS file. It organizes the file and retrieves individual commands for processing. Command parsing was essential for configuring the system at boot. The simplicity of this routine reflects the straightforward design philosophy of MS-DOS. Parsing techniques like this influenced later systems, where configuration files became more complex and required advanced parsing algorithms."
  - id: "conflp-buffer-command-processing"
    line_start: 1395
    line_end: 1417
    title: "Processing buffer commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    image_url: ""
    image_caption: ""
    content: "This section processes buffer commands from CONFIG.SYS. It checks for the 'BUFFER' keyword and adjusts the buffer count accordingly. Buffer commands allowed users to optimize disk I/O performance by specifying the number of buffers. This feature reflects the flexibility of MS-DOS, where users could customize system settings to suit their needs. Buffer management techniques like this influenced later systems, where user-configurable settings became standard."
  - id: "tryc-control-c-handling"
    line_start: 1421
    line_end: 1425
    title: "Enabling Control-C trapping"
    wikipedia_url: "https://en.wikipedia.org/wiki/Control-C"
    image_url: ""
    image_caption: ""
    content: "This section enables Control-C trapping, allowing users to interrupt processes. It checks for the 'CONTROL-C' command and sets the appropriate flag. Control-C trapping was a key feature in MS-DOS, providing users with a way to stop runaway processes. This routine reflects the user-centric design of MS-DOS, where usability was a priority. Techniques like this influenced later systems, where interrupt handling became more sophisticated."
  - id: "config-keyword-table"
    line_start: 2815
    line_end: 2833
    title: "Keyword table for CONFIG.SYS parsing"
    wikipedia_url: "https://en.wikipedia.org/wiki/CONFIG.SYS"
    image_url: ""
    image_caption: ""
    content: "This section defines a table of keywords used to parse the CONFIG.SYS file, a critical system configuration file introduced in MS-DOS v2.0. Each entry consists of a length byte, the keyword string, and a single-character identifier. For example, 'BUFFERS' is associated with 'B', and 'FILES' with 'F'. These identifiers streamline the parsing process, allowing the operating system to quickly match configuration directives to their corresponding handlers. In 1983, MS-DOS v2.0 represented a major leap forward, incorporating features inspired by Unix, such as hierarchical directories and device drivers. CONFIG.SYS was part of this evolution, enabling users to customize system behavior at boot time. The keyword table reflects the constraints of the era: memory was scarce, and processing power limited, so compact and efficient data structures were essential. Tim Paterson and the Microsoft team designed this table to support flexibility while maintaining performance. The choice of single-character identifiers and fixed-length entries minimized memory usage and simplified lookup routines. This approach was influenced by similar techniques in Unix configuration files, adapted to fit the limitations of the IBM PC's 8086 processor and early hardware. The keyword table concept became a standard in operating system design, influencing later systems like Windows and OS/2. CONFIG.SYS itself persisted through the DOS era, shaping how users and administrators interacted with PCs. The idea of keyword-driven configuration files can still be seen in modern systems, such as Linux's /etc configuration files and JSON-based settings in contemporary applications. This table is a snapshot of a turning point in computing history, where operating systems began to balance user control with technical constraints."
  - id: "sysinitseg-ends"
    line_start: 2839
    line_end: 2841
    title: "End of SYSINITSEG segment declaration"
    wikipedia_url: "https://en.wikipedia.org/wiki/Segment_(computing)"
    image_url: ""
    image_caption: ""
    content: "The 'SYSINITSEG ENDS' directive marks the conclusion of the SYSINITSEG segment, which encapsulates the initialization routines for MS-DOS. Segmentation was a fundamental feature of the 8086 processor, allowing programs to divide memory into logical sections for code, data, and stack. This structure helped manage the limited 1 MB address space of the IBM PC. In MS-DOS v2.0, segmentation played a crucial role in organizing the operating system's components. By clearly delineating initialization routines, the developers ensured that these critical operations were isolated from other parts of the system. This separation improved maintainability and reduced the risk of errors during execution. The use of segments reflects the constraints and opportunities of early PC hardware. The 8086 processor's segmented memory model was both a limitation and a creative challenge, shaping the design of software for years to come. Tim Paterson and the Microsoft team leveraged this model to create a modular and efficient operating system, laying the groundwork for future versions of MS-DOS and its successors. Segmentation influenced many aspects of software development, from compilers to operating systems. It persisted in various forms, such as the protected mode of the 80286 and the flat memory model of modern processors. The 'ENDS' directive here is a small but significant part of this legacy, representing the careful planning and engineering that defined MS-DOS v2.0."

---

TITLE   BIOS SYSTEM INITIALIZATION



FALSE   EQU     0

TRUE    EQU     NOT FALSE



IBMVER     EQU     FALSE

IBM        EQU     IBMVER

IBMJAPVER  EQU     FALSE                ; If TRUE set KANJI true also

MSVER      EQU     TRUE 

ALTVECT    EQU     FALSE                ; Switch to build ALTVECT version

HIGHMEM    EQU     FALSE

KANJI      EQU     FALSE



        IF      IBMVER OR IBMJAPVER

NOEXEC  EQU     TRUE

        ELSE

NOEXEC  EQU     FALSE

        ENDIF



; Set to agree with those in DOST:MSHEAD.ASM, ALTVECT version only

MAJOR_VERSION   EQU      2

MINOR_VERSION   EQU     0B	;2.11



DOSSIZE EQU     5000H



; Internal DOS data returned by DOSINIT



SYSINITVAR  STRUC

DPBHEAD     DD      ?                   ; Pointer to head of DPB-FAT list

sft_addr    DD      ?                   ; Pointer to first FCB table

; The following address points to the CLOCK device

BCLOCK      DD      ?

; The following address is used by DISKSTATCHK it is always

; points to the console input device header

BCON        DD      ?                   ; Console device entry points

NUMIO       DB      0                   ; Number of disk tables

MAXSEC      DW      0                   ; Maximum allowed sector size

BUFFHEAD    DD      ?                   ; Head of buffer queue

DEVHEAD     DD      ?

SYSINITVAR  ENDS



        INCLUDE DOSSYM.ASM

        INCLUDE DEVSYM.ASM



        IF      NOT IBM

        IF      NOT IBMJAPVER

        EXTRN   RE_INIT:FAR

        ENDIF

        ENDIF



SYSINITSEG      SEGMENT PUBLIC 'SYSTEM_INIT'



ASSUME  CS:SYSINITSEG,DS:NOTHING,ES:NOTHING,SS:NOTHING



        EXTRN   BADOPM:BYTE,CRLFM:BYTE,BADCOM:BYTE

        EXTRN   BADSIZ_PRE:BYTE,BADLD_PRE:BYTE

        EXTRN   BADSIZ_POST:BYTE,BADLD_POST:BYTE

        EXTRN   SYSSIZE:BYTE,BADCOUNTRY:BYTE



        PUBLIC  CURRENT_DOS_LOCATION

        PUBLIC  FINAL_DOS_LOCATION

        PUBLIC  DEVICE_LIST

        PUBLIC  MEMORY_SIZE

        PUBLIC  DEFAULT_DRIVE

        PUBLIC  BUFFERS

        PUBLIC  FILES

        PUBLIC  SYSINIT



        IF      HIGHMEM

        PUBLIC  DPBBUF_SIZ

        ENDIF



SYSINIT:

        JMP     GOINIT



DOSINFO                 LABEL   DWORD

                        DW      0000

CURRENT_DOS_LOCATION    DW      0000



MSDOS                   LABEL   DWORD

ENTRY_POINT             LABEL   DWORD

                        DW      0000

FINAL_DOS_LOCATION      DW      0000

DEVICE_LIST             DD      00000000



        IF      HIGHMEM

DPBBUF_SIZ              DW      (4472  + 15) / 16

        ENDIF



MEMORY_SIZE             DW      0001

DEFAULT_DRIVE           DB      00

BUFFERS                 DB      2

FILES                   DB      8

COMMAND_LINE            DB      2,0,"P" ; Default Command.com Args

                        DB      29 DUP (0)

ZERO                    DB      0



        IF      NOT NOEXEC

COMEXE  EXEC0 <0,COMMAND_LINE,DEFAULT_DRIVE,ZERO>

        ENDIF



COUNT   DW      0000

CHRPTR  DW      0000



BUFPTR  LABEL   DWORD                   ; LEAVE THIS STUFF IN ORDER!

MEMLO   DW      0

PRMBLK  LABEL   WORD

MEMHI   DW      0

LDOFF   DW      0

AREA    DW      0



PACKET                  DB      22

                        DB      0

                        DB      0       ; INITIALIZE CODE

                        DW      0

                        DB      8 DUP (?)

UNITCOUNT               DB      0

BREAK_ADDR              DD      0

BPB_ADDR                DD      0



GOINIT:

        CLD

        XOR     SI,SI

        MOV     DI,SI



        IF      MSVER

        MOV     CX,[MEMORY_SIZE]

        CMP     CX,1

        JNZ     NOSCAN

        MOV     CX,2048                 ; START SCANNING AT 32K BOUNDARY

        XOR     BX,BX



MEMSCAN:INC     CX

        JZ      SETEND

        MOV     DS,CX

        MOV     AL,[BX]

        NOT     AL

        MOV     [BX],AL

        CMP     AL,[BX]

        NOT     AL

        MOV     [BX],AL

        JZ      MEMSCAN

SETEND:

        MOV     [MEMORY_SIZE],CX

        ENDIF



        IF      IBMVER OR IBMJAPVER

        MOV     CX,[MEMORY_SIZE]

        ENDIF



NOSCAN:

        MOV     AX,CS

        MOV     DS,AX

ASSUME  DS:SYSINITSEG



        IF      HIGHMEM

        SUB     CX,(DOSSIZE / 16)       ; Leave room for DOS

        SUB     CX,CS:[DPBBUF_SIZ]      ; Allow OEM to tune

        ENDIF



        MOV     AX,OFFSET SYSSIZE + 15

        SHR     AX,1                    ; Divide by 16 for paras

        SHR     AX,1

        SHR     AX,1

        SHR     AX,1

        SUB     CX,AX

        MOV     ES,CX

        MOV     CX,OFFSET SYSSIZE + 1

        SHR     CX,1                    ; Divide by 2 to get words

        REP     MOVSW                   ; RELOCATE SYSINIT



        ASSUME  ES:SYSINITSEG



        PUSH    ES

        MOV     AX,OFFSET SYSIN

        PUSH    AX



AAA     PROC    FAR

        RET

AAA     ENDP

;

;       MOVE THE DOS TO ITS PROPER LOCATION

;

SYSIN:



        ASSUME  DS:NOTHING,ES:SYSINITSEG,SS:NOTHING



        MOV     AX,[CURRENT_DOS_LOCATION]

        MOV     DS,AX

        MOV     AX,[FINAL_DOS_LOCATION]

        MOV     ES,AX



        ASSUME  ES:NOTHING



        XOR     SI,SI

        MOV     DI,SI

        MOV     CX,DOSSIZE/2

        REP     MOVSW



        LDS     SI,[DEVICE_LIST]

        MOV     DX,[MEMORY_SIZE]



        CLI

        MOV     AX,CS

        MOV     SS,AX

        MOV     SP,OFFSET LOCSTACK



        ASSUME  SS:SYSINITSEG



        IF      NOT ALTVECT

        STI                             ; Leave INTs disabled for ALTVECT

        ENDIF

LOCSTACK LABEL BYTE



        CALL    MSDOS

        MOV     WORD PTR [DOSINFO+2],ES ; SAVE POINTER TO DOS INFO

        MOV     WORD PTR [DOSINFO],DI



        IF      NOT IBM

        IF      NOT IBMJAPVER

        CALL    RE_INIT                 ; Re-call the BIOS

        ENDIF

        ENDIF



        STI

        CLD



        IF      HIGHMEM

        PUSH    DS

        MOV     BX,DS

        ADD     BX,10H

        MOV     ES,BX

        PUSH    CS

        POP     DS

        XOR     SI,SI

        MOV     DI,SI

        MOV     CX,OFFSET SYSSIZE + 1

        SHR     CX,1                    ; Divide by 2 to get words

        REP     MOVSW

        POP     DS

        PUSH    ES

        MOV     AX,OFFSET SECONDRELOC

        PUSH    AX

BBB     PROC    FAR

        RET

BBB     ENDP



SECONDRELOC:

        MOV     AX,CS

        CLI

        MOV     SS,AX

        MOV     SP,OFFSET LOCSTACK

        STI

      ELSE

        MOV     BX,CS

        SUB     BX,10H

        MOV     ES,BX

        XOR     SI,SI

        MOV     DI,SI

        MOV     CX,80H

        REP     MOVSW

        MOV     AH,SET_CURRENT_PDB

        INT     21H

        ENDIF



        PUSH    DS

        PUSH    CS

        POP     DS

        MOV     DX,OFFSET INT24         ; SET UP INT 24 HANDLER

        MOV     AX,(SET_INTERRUPT_VECTOR SHL 8) OR 24H

        INT     21H



        IF      ALTVECT

        MOV     DX,OFFSET BOOTMES

        CALL    PRINT                   ; Print message DOSINIT couldn't

        ENDIF



        POP     DS



        MOV     DL,[DEFAULT_DRIVE]

        OR      DL,DL

        JZ      NODRVSET

        DEC     DL                      ; A = 0

        MOV     AH,SET_DEFAULT_DRIVE

        INT     21H                     ; SELECT THE DISK

NODRVSET:



        CALL    DOCONF                  ; DO THE CONFIG STUFF



        IF      HIGHMEM

        PUSH    DS

        MOV     AX,OFFSET SYSSIZE + 15

        MOV     CL,4

        SHR     AX,CL                   ; Divide by 16 to get para

        MOV     CX,ES

        SUB     CX,AX

        MOV     ES,CX

        PUSH    CS

        POP     DS

        XOR     SI,SI

        MOV     DI,SI

        MOV     CX,OFFSET SYSSIZE + 1

        SHR     CX,1                    ; Divide by 2 to get words

        REP     MOVSW

        POP     DS

        PUSH    ES

        MOV     AX,OFFSET THIRDRELOC

        PUSH    AX

CCC     PROC    FAR

        RET

CCC     ENDP



THIRDRELOC:

        MOV     AX,CS

        CLI

        MOV     SS,AX

        MOV     SP,OFFSET LOCSTACK

        STI

        ENDIF



        IF      NOEXEC

        MOV     BP,DS                   ; SAVE COMMAND.COM SEGMENT



        PUSH    DS

        POP     ES



        MOV     BX,CS

        SUB     BX,10H

        MOV     DS,BX

        XOR     SI,SI

        MOV     DI,SI

        MOV     CX,80H

        REP     MOVSW

        MOV     BX,ES

        MOV     AH,SET_CURRENT_PDB

        INT     21H



        MOV     ES:[PDB_PARENT_PID],ES  ; WE ARE THE ROOT

        ENDIF



        PUSH    CS

        POP     DS

ASSUME  DS:SYSINITSEG

        MOV     AL,[FILES]

        CBW

        MOV     CX,AX

        XOR     BX,BX                   ; Close standard input

        MOV     AH,CLOSE

        INT     21H

        MOV     BX,2

RCCLLOOP:                               ; Close everybody but standard output

        MOV     AH,CLOSE

        INT     21H

        INC     BX

        LOOP    RCCLLOOP



        MOV     DX,OFFSET CONDEV

        MOV     AL,2

        MOV     AH,OPEN                 ; OPEN CON FOR READ/WRITE

        STC

        INT     21H

        JNC     GOAUX

        CALL    BADFIL

        JMP     SHORT GOAUX2



GOAUX:  PUSH    AX

        MOV     BX,1                    ; close standard output

        MOV     AH,CLOSE

        INT     21H

        POP     AX



        MOV     BX,AX                   ; New device handle

        MOV     AH,XDUP

        INT     21H                     ; Dup to 1, STDOUT

        MOV     AH,XDUP

        INT     21H                     ; Dup to 2, STDERR



GOAUX2: MOV     DX,OFFSET AUXDEV

        MOV     AL,2                    ; READ/WRITE ACCESS

        CALL    OPEN_DEV



        MOV     DX,OFFSET PRNDEV

        MOV     AL,1                    ; WRITE ONLY

        CALL    OPEN_DEV

;

; SET UP THE PARAMETERS FOR COMMAND

;

GOSET:

        MOV     SI,OFFSET COMMAND_LINE+1



        IF      NOEXEC

        MOV     DI,81H

        ELSE

        PUSH    DS

        POP     ES

        MOV     DI,SI

        ENDIF



        MOV     CL,-1

COMTRANLP:                              ; FIND LENGTH OF COMMAND LINE

        INC     CL

        LODSB

        STOSB                           ; COPY COMMAND LINE IN

        OR      AL,AL

        JNZ     COMTRANLP

        DEC     DI

        MOV     AL,0DH

        STOSB



        IF      NOEXEC

        MOV     ES:[80H],CL

        MOV     AL,[DEFAULT_DRIVE]

        MOV     ES:[5CH],AL

        ELSE

        MOV     [COMMAND_LINE],CL       ; Count

        ENDIF



        PUSH    CS

        POP     ES



        ASSUME  ES:SYSINITSEG



        MOV     DX,OFFSET COMMND        ; NOW POINTING TO FILE DESCRIPTION



        IF      NOEXEC

        MOV     ES,BP                   ; SET LOAD ADDRESS

        MOV     BX,100H

        CALL    LDFIL                   ; READ IN COMMAND

        JC      COMERR

        MOV     DS,BP

        CLI

        MOV     DX,80H

        MOV     SS,BP

        MOV     SP,DX

        STI



        XOR     AX,AX                   ; PUSH A WORD OF ZEROS

        PUSH    AX

        MOV     AH,SET_DMA              ; SET DISK TRANFER ADDRESS

        INT     21H

        PUSH    BP                      ; SET HIGH PART OF JUMP ADDRESS

        MOV     AX,100H

        PUSH    AX                      ; SET LOW PART OF JUMP ADDRESS

CCC     PROC    FAR

        RET                             ; CRANK UP COMMAND!

CCC     ENDP



        ELSE

        MOV     BX,OFFSET COMEXE

        MOV     WORD PTR [BX.EXEC0_COM_LINE+2],CS

        MOV     WORD PTR [BX.EXEC0_5C_FCB+2],CS

        MOV     WORD PTR [BX.EXEC0_6C_FCB+2],CS



        XOR     AX,AX

        MOV     AH,EXEC

        STC                             ; IN CASE OF INT 24

        INT     21H                     ; GO START UP COMMAND

        ENDIF



COMERR:

        MOV     DX,OFFSET BADCOM        ; WANT TO PRINT COMMAND ERROR

        CALL    BADFIL

STALL:  JMP     STALL



DOCONF:

        PUSH    CS

        POP     DS



        ASSUME  DS:SYSINITSEG



        MOV     BX,0FFFFH

        MOV     AH,ALLOC

        INT     21H                     ; FIRST TIME FAILS

        MOV     AH,ALLOC

        INT     21H                     ; SECOND TIME GETS IT

        MOV     [AREA],AX



        IF      HIGHMEM

        ADD     AX,BX

        ENDIF



        MOV     [MEMHI],AX



        MOV     AX,(CHAR_OPER SHL 8)    ; GET SWITCH CHARACTER

        INT     21H

        MOV     [COMMAND_LINE+1],DL



        MOV     DX,OFFSET CONFIG        ; NOW POINTING TO FILE DESCRIPTION

        MOV     AX,OPEN SHL 8           ; OPEN FILE "CONFIG.SYS"

        STC                             ; IN CASE OF INT 24

        INT     21H                     ; FUNCTION REQUEST

        JC      ENDFILE

        JMP     NOPROB                  ; PROBLEM WITH OPEN



ENDFILE:

        PUSH    CS

        POP     DS

        CALL    ROUND

        MOV     AL,[FILES]

        SUB     AL,5

        JBE     DOBUFF

        CBW



        IF      HIGHMEM

        PUSH    AX

        MOV     BL,SIZE SF_ENTRY

        MUL     BL

        ADD     AX,15+6

        MOV     CL,4

        SHR     AX,CL

        SUB     [MEMHI],AX

        POP     AX

        ENDIF



        MOV     BX,[MEMLO]

        MOV     DX,[MEMHI]

        LDS     DI,[DOSINFO]            ; GET POINTER TO DOS DATA

        LDS     DI,[DI+SFT_ADDR]        ; DS:BP POINTS TO SFT

        MOV     WORD PTR [DI+SFT_LINK],BX

        MOV     WORD PTR [DI+SFT_LINK+2],DX ; SET POINTER TO NEW SFT

        PUSH    CS

        POP     DS

        LES     DI,DWORD PTR [MEMLO]    ; POINT TO NEW SFT

        MOV     WORD PTR ES:[DI+SFT_LINK],-1

        MOV     ES:[DI+SFT_COUNT],AX

        MOV     BL,SIZE SF_ENTRY

        MUL     BL                      ; AX = NUMBER OF BYTES TO CLEAR

        MOV     CX,AX



        IF      HIGHMEM

        MOV     AX,6

        ELSE

        ADD     [MEMLO],AX              ; ALLOCATE MEMORY

        MOV     AX,6

        ADD     [MEMLO],AX              ; REMEMBER THE HEADER TOO

        ENDIF



        ADD     DI,AX

        XOR     AX,AX

        REP     STOSB                   ; CLEAN OUT THE STUFF



DOBUFF: CALL    ROUND



        DEC     [BUFFERS]

        JZ      BUF1



        PUSH    DS

        LES     DI,BUFPTR

        LDS     BX,DOSINFO



        IF      HIGHMEM

        MOV     AX,[BX.MAXSEC]

        ADD     AX,BUFINSIZ + 15

        MOV     CL,4

        SHR     AX,CL

        SUB     CS:[MEMHI],AX

        MOV     ES,CS:[MEMHI]

        ENDIF



        MOV     AX,WORD PTR [BX.BUFFHEAD]

        MOV     WORD PTR ES:[DI.NEXTBUF],AX

        MOV     AX,WORD PTR [BX.BUFFHEAD+2]

        MOV     WORD PTR ES:[DI.NEXTBUF+2],AX



        MOV     WORD PTR [BX.BUFFHEAD],DI

        MOV     WORD PTR [BX.BUFFHEAD+2],ES



        MOV     WORD PTR ES:[DI.BUFDRV],00FFH   ; NEW BUFFER FREE

        MOV     BX,[BX.MAXSEC]

        POP     DS



        IF      NOT HIGHMEM

        ADD     BX,BUFINSIZ

        ADD     [MEMLO],BX

        ENDIF



        JMP     DOBUFF



BUF1:   CALL    ROUND

        MOV     BX,[MEMHI]

        MOV     AX,[AREA]

        MOV     ES,AX                   ; CALC WHAT WE NEEDED

        SUB     BX,AX



        IF      HIGHMEM

        DEC     BX                      ; Arena

        PUSH    BX

        ENDIF



        MOV     AH,SETBLOCK

        INT     21H                     ; GIVE THE REST BACK



        IF      NOT HIGHMEM

        PUSH    ES

        MOV     AX,ES

        DEC     AX

        MOV     ES,AX

        MOV     ES:[arena_owner],8      ; Set impossible owner

        POP     ES

        ENDIF



        IF      HIGHMEM

        MOV     BX,0FFFFH

        MOV     AH,ALLOC

        INT     21H

        MOV     AH,ALLOC

        INT     21H



        PUSH    ES

        DEC     AX

        MOV     ES,AX

        MOV     ES:[arena_owner],8      ; Set impossible owner

        POP     ES



        IF      NOT NOEXEC

        MOV     ES,[AREA]

        MOV     AH,DEALLOC

        INT     21H

        ENDIF



        POP     BX

        MOV     AX,[AREA]

        MOV     DS,AX

        ADD     AX,BX

        MOV     ES,AX

      ELSE

        IF      NOEXEC

        MOV     BX,0FFFFH               ; ALLOCATE THE REST OF MEM FOR COMMAND

        MOV     AH,ALLOC

        INT     21H

        MOV     AH,ALLOC

        INT     21H

        MOV     DS,AX

        ENDIF

        ENDIF



        RET



BADOP:  MOV     DX,OFFSET BADOPM        ; WANT TO PRINT COMMAND ERROR

        CALL    PRINT

        JMP     COFF



NOPROB:                                 ; GET FILE SIZE (NOTE < 64K!!)

        MOV     BX,AX

        XOR     CX,CX

        XOR     DX,DX

        MOV     AX,(LSEEK SHL 8) OR 2

        INT     21H

        MOV     [COUNT],AX

        XOR     DX,DX

        MOV     AX,LSEEK SHL 8          ; Reset pointer to beginning of file

        INT     21H

        MOV     DX,CS



        IF      HIGHMEM

        MOV     AX,OFFSET SYSSIZE + 15

        MOV     CL,4

        SHR     AX,CL

        ADD     DX,AX

        ELSE

        MOV     AX,[COUNT]

        ADD     AX,15

        MOV     CL,4

        SHR     AX,CL                   ; NUMBER OF SEGMENTS

        SUB     DX,AX

        SUB     DX,11H                  ; ROOM FOR HEADER

        ENDIF



        MOV     DS,DX

        MOV     ES,DX

ASSUME  DS:NOTHING,ES:NOTHING

        XOR     DX,DX

        MOV     CX,[COUNT]

        MOV     AH,READ

        STC                             ; IN CASE OF INT 24

        INT     21H                     ; Function request

        PUSHF

        PUSH    CS

        POP     DS

ASSUME  DS:SYSINITSEG

        PUSH    AX

        MOV     AH,CLOSE

        INT     21H

        POP     AX

        POPF

        JC      CONFERR                 ; IF NOT WE'VE GOT A PROBLEM

        CMP     CX,AX

        JZ      GETCOM                  ; COULDN'T READ THE FILE

CONFERR:

        MOV     DX,OFFSET CONFIG        ; WANT TO PRINT CONFIG ERROR

        CALL    BADFIL

ENDFILV:JMP     ENDFILE



GETCOM:

        CALL    ORGANIZE                ; ORGANIZE THE FILE

        CALL    GETCHR



CONFLP: JC      ENDFILV

        MOV     AH,AL

        CALL    GETCHR



        CMP     AH,'B'                  ; BUFFER COMMAND?

        JNZ     TRYC

        CALL    GETNUM

        JZ      COFF

        CMP     AX,100

        JAE     badop

        MOV     [BUFFERS],AL

        JMP     SHORT COFF



TRYC:   CMP     AH,'C'

        JZ      GOTC

        JMP     TRYD

GOTC:

        CMP     AL,'O'                  ; FIRST LETTER OF "ON"

        JNZ     COFF

        CALL    GETCHR

        JC      ENDFILV

        CMP     AL,'N'                  ; SECOND LETTER OF "ON"

        JNZ     COFF

        MOV     AH,SET_CTRL_C_TRAPPING  ; TURN ON CONTROL-C CHECK

        MOV     AL,1

        MOV     DL,AL

        INT     21H



COFF:   PUSH    CS

        POP     DS

        CALL    NEWLINE

        JMP     CONFLP



TRYD:   CMP     AH,'D'

        JZ      GOTD

        JMP     TRYF

GOTD:   MOV     BX,CS

        MOV     DS,BX



        MOV     WORD PTR [BPB_ADDR],SI

        MOV     WORD PTR [BPB_ADDR+2],ES



        CALL    ROUND



        IF      HIGHMEM

        PUSH    DS

        PUSH    ES

        POP     DS

        MOV     DX,SI

        MOV     AX,OPEN SHL 8

        STC                             ; In case INT 24H

        INT     21H

        POP     DS

        JC      BADBRK

        MOV     BX,AX

        XOR     DX,DX

        MOV     CX,DX

        MOV     AX,(LSEEK SHL 8) OR 2

        INT     21H

        PUSH    AX

        MOV     AH,CLOSE

        INT     21H

        POP     AX                      ; DX:AX is size of file

        ADD     AX,15

        ADC     DX,0

        MOV     CL,4

        SHR     AX,CL

        MOV     CL,12

        SHL     DX,CL

        OR      AX,DX                   ; AX is size in PARA

        MOV     CX,[MEMHI]

        SUB     [MEMHI],AX

        JNC     SIZEOK

        MOV     [MEMHI],CX              ; Not enough memory

        JMP     SHORT BADBRK

SIZEOK:

        MOV     BX,CS

        ENDIF



        XOR     AX,AX

        MOV     WORD PTR [ENTRY_POINT],AX

        MOV     AX,[MEMHI]

        MOV     WORD PTR [ENTRY_POINT+2],AX ; SET ENTRY POINT





        IF      NOT NOEXEC

        MOV     [LDOFF],AX              ; SET LOAD OFFSET

        ENDIF



        PUSH    ES

        POP     DS

        MOV     DX,SI                   ; DS:DX POINTS TO FILE NAME



        IF      NOEXEC

        LES     BX,DWORD PTR CS:[MEMLO]

        CALL    LDFIL                   ; LOAD IN THE DEVICE DRIVER

        ELSE

        MOV     ES,BX

        MOV     BX,OFFSET PRMBLK        ; ES:BX POINTS TO PARAMETERS

        MOV     AL,3

        MOV     AH,EXEC

        STC                             ; IN CASE OF INT 24

        INT     21H                     ; LOAD IN THE DEVICE DRIVER

        ENDIF



        PUSH    DS

        POP     ES                      ; ES:SI BACK TO CONFIG.SYS

        PUSH    CS

        POP     DS                      ; DS BACK TO SYSINIT

        JNC     GOODLD

BADBRK: CALL    BADLOAD

        JMP     COFF



GOODLD: PUSH    ES                      ; INITIALIZE THE DEVICE

        PUSH    SI



        PUSH    CS

        POP     ES

        MOV     BX,SDEVSTRAT

        CALL    CALLDEV

        MOV     BX,SDEVINT

        CALL    CALLDEV



        PUSH    CS

        POP     DS



        IF      NOT HIGHMEM

        MOV     AX,WORD PTR [BREAK_ADDR+2]  ; REMOVE THE INIT CODE

        CMP     AX,[MEMORY_SIZE]

        JB      BREAKOK

        POP     SI

        POP     ES

        JMP     BADBRK

BREAKOK:



        MOV     [MEMHI],AX

        MOV     AX,WORD PTR [BREAK_ADDR]; REMOVE THE INIT CODE

        MOV     [MEMLO],AX

        ENDIF



        LDS     DX,[ENTRY_POINT]        ; SET DS:DX TO HEADER

        MOV     SI,DX

        ADD     SI,SDEVATT              ; DS:SI POINTS TO ATTRIBUTES

        LES     DI,CS:[DOSINFO]         ; ES:DI POINT TO DOS INFO

        MOV     AX,DS:[SI]              ; GET ATTRIBUTES

        TEST    AX,DEVTYP               ; TEST IF BLOCK DEV

        JZ      ISBLOCK



        TEST    AX,ISCIN                ; IS IT A CONSOLE IN?

        JZ      TRYCLK

        MOV     WORD PTR ES:[DI.BCON],DX

        MOV     WORD PTR ES:[DI.BCON+2],DS



TRYCLK: TEST    AX,ISCLOCK              ; IS IT A CLOCK DEVICE?

        JZ      GOLINK

        MOV     WORD PTR ES:[DI+BCLOCK],DX

        MOV     WORD PTR ES:[DI+BCLOCK+2],DS

GOLINK: JMP     LINKIT



ISBLOCK:

        MOV     AL,CS:[UNITCOUNT]       ; IF NO UNITS FOUND....

        OR      AL,AL

        JNZ     PERDRV



        IF      NOT HIGHMEM

        MOV     CS:[MEMLO],0            ; ...ERASE THE DEVICE

        ENDIF



        MOV     AX,-1

        JMP     ENDDEV



PERDRV:

        CBW

        MOV     CX,AX

        MOV     DH,AH

        MOV     DL,ES:[DI.NUMIO]        ; GET NUMBER OF DEVICES

        ADD     ES:[DI.NUMIO],AL        ; UPDATE THE AMOUNT



        LDS     BX,CS:[BPB_ADDR]        ; POINT TO BPB ARRAY

PERUNIT:

        LES     BP,CS:[DOSINFO]

        LES     BP,DWORD PTR ES:[BP.DPBHEAD]; GET FIRST DPB



SCANDPB:CMP     WORD PTR ES:[BP.DPB_NEXT_DPB],-1

        JZ      FOUNDPB

        LES     BP,ES:[BP.DPB_NEXT_DPB]

        JMP     SCANDPB

FOUNDPB:

        MOV     AX,CS:[MEMLO]

        MOV     WORD PTR ES:[BP.DPB_NEXT_DPB],AX



        IF      HIGHMEM

        MOV     AX,(DPBSIZ + 15) / 16

        SUB     CS:[MEMHI],AX

        ENDIF



        MOV     AX,CS:[MEMHI]

        MOV     WORD PTR ES:[BP.DPB_NEXT_DPB+2],AX

        LES     BP,DWORD PTR CS:[MEMLO]



        IF      NOT HIGHMEM

        ADD     WORD PTR CS:[MEMLO],DPBSIZ

        ENDIF



        MOV     WORD PTR ES:[BP.DPB_NEXT_DPB],-1

        MOV     ES:[BP.DPB_FIRST_ACCESS],-1



        MOV     SI,[BX]                 ; DS:SI POINTS TO BPB

        INC     BX

        INC     BX                      ; POINT TO NEXT GUY

        MOV     WORD PTR ES:[BP.DPB_DRIVE],DX

        MOV     AH,SETDPB               ; HIDDEN SYSTEM CALL

        INT     21H

        MOV     AX,ES:[BP.DPB_SECTOR_SIZE]

        PUSH    ES

        LES     DI,CS:[DOSINFO]         ; ES:DI POINT TO DOS INFO

        CMP     AX,ES:[DI.MAXSEC]

        POP     ES

        JBE     NOTMAX

        POP     SI

        POP     ES

        MOV     DX,OFFSET BADSIZ_PRE

        MOV     BX,OFFSET BADSIZ_POST

        CALL    PRNERR

        JMP     COFF



NOTMAX: PUSH    DS

        PUSH    DX

        LDS     DX,CS:[ENTRY_POINT]

        MOV     WORD PTR ES:[BP.DPB_DRIVER_ADDR],DX

        MOV     WORD PTR ES:[BP.DPB_DRIVER_ADDR+2],DS

        POP     DX

        POP     DS

        INC     DX

        INC     DH

        LOOP    PERUNIT



LINKIT:

        LES     DI,CS:[DOSINFO]         ; ES:DI = DOS TABLE

        MOV     CX,WORD PTR ES:[DI.DEVHEAD] ; DX:CX = HEAD OF LIST

        MOV     DX,WORD PTR ES:[DI.DEVHEAD+2]



        LDS     SI,CS:[ENTRY_POINT]     ; DS:SI = DEVICE LOCATION

        MOV     WORD PTR ES:[DI.DEVHEAD],SI ; SET HEAD OF LIST IN DOS

        MOV     WORD PTR ES:[DI.DEVHEAD+2],DS

        MOV     AX,DS:[SI]              ; GET POINTER TO NEXT DEVICE

        MOV     WORD PTR CS:[ENTRY_POINT],AX; AND SAVE IT



        MOV     WORD PTR DS:[SI],CX     ; LINK IN THE DRIVER

        MOV     WORD PTR DS:[SI+2],DX

ENDDEV:

        POP     SI

        POP     ES

        INC     AX                      ; AX = FFFF?

        JZ      COFFV

        JMP     GOODLD                  ; OTHERWISE PRETEND WE LOADED IT IN

COFFV:  JMP     COFF



TRYQ:

        CMP     AH,'Q'

        JNZ     TRYW

        CALL    GETNUM

        JZ      COFFV

        OR      AH,AH

        JNZ     COFFV

        MOV     AH,INTERNATIONAL        ; AL is country code

        MOV     DX,-1                   ; Set country

        INT     21H

        JNC     COFFV

        MOV     DX,OFFSET BADCOUNTRY

        CALL    PRINT

        JMP     COFFV



TRYF:

        CMP     AH,'F'

        JNZ     TRYQ

        CALL    GETNUM

        JZ      COFFV

        CMP     AX,100

        JAE     TryX

        MOV     [FILES],AL

        JMP     COFFV

TRYW:

        CMP     AH,'W'

        JNZ     TRYA

        MOV     DL,AL

        MOV     AX,(CHAR_OPER SHL 8) OR 1   ; SET SWITCH CHARACTER

        MOV     [COMMAND_LINE+1],DL

        INT     21H

        JMP     COFF



TRYA:

        CMP     AH,'A'

        JNZ     TRYS

        CMP     AL,'F'                  ; FIRST LETTER OF "FALSE"

        JNZ     COFFJ

        MOV     AX,(CHAR_OPER SHL 8) OR 3   ; TURN ON "/DEV" PREFIX

        XOR     DL,DL

        INT     21H

COFFJ:  JMP     COFF



TRYS:

        CMP     AH,'S'

        JNZ     TRYX

        MOV     [COMMAND_LINE+1],0

        MOV     DI,OFFSET COMMND + 1

        MOV     [DI-1],AL

STORESHELL:

        CALL    GETCHR

        OR      AL,AL

        JZ      GETSHPARMS

        CMP     AL," "

        JB      ENDSH

        MOV     [DI],AL

        INC     DI

        JMP     STORESHELL



ENDSH:

        MOV     BYTE PTR [DI],0

        CALL    GETCHR

        CMP     AL,10

        JNZ     CONV

        CALL    GETCHR

CONV:   JMP     CONFLP



TRYX:

        JMP     BADOP



GETSHPARMS:

        MOV     BYTE PTR [DI],0

        MOV     DI,OFFSET COMMAND_LINE+1

PARMLOOP:

        CALL    GETCHR

        CMP     AL," "

        JB      ENDSH

        MOV     [DI],AL

        INC     DI

        JMP     PARMLOOP



GETCHR: MOV     CX,COUNT

        JCXZ    NOCHAR

        MOV     SI,CHRPTR

        MOV     AL,ES:[SI]

        DEC     COUNT

        INC     CHRPTR

        CLC

        RET

NOCHAR: STC

        RET



ORGANIZE:

        MOV     CX,[COUNT]

        JCXZ    NOCHAR

        CALL    MAPCASE

        XOR     SI,SI

        MOV     DI,SI



ORG1:   CALL    GET                     ; SKIP LEADING CONTROL CHARACTERS

        CMP     AL,' '

        JB      ORG1



        PUSH    CX

        PUSH    SI

        PUSH    DI

        MOV     BP,SI

        DEC     BP

        MOV     SI,OFFSET COMTAB        ; Prepare to search command table

        MOV     CH,0

FINDCOM:

        MOV     DI,BP

        MOV     CL,[SI]

        INC     SI

        JCXZ    NOCOM

        REPE    CMPSB

        LAHF

        ADD     SI,CX                   ; Bump to next position without affecting flags

        SAHF

        LODSB                           ; Get indicator letter

        JNZ     FINDCOM

        POP     DI

        POP     SI

        POP     CX

        JMP     SHORT GOTCOM



NOCOM:

        POP     DI

        POP     SI

        POP     CX

        MOV     AL,'Z'

GOTCOM: STOSB                           ; SAVE INDICATOR CHAR IN BUFFER



ORG2:   CALL    GET2                    ; SKIP NAME UNTIL DELIMETER

        CALL    DELIM                   ;

        JNZ     ORG2



        CALL    GET                     ; GET CHARS TO RIGHT OF EQUALS SIGN

        STOSB



ORG4:   CALL    GET2

        STOSB

        CMP     AL,' '

        JA      ORG4

        CMP     AL,10

        JZ      ORG1



        MOV     BYTE PTR ES:[DI-1],0

ORG5:   CALL    GET2

        STOSB

        CMP     AL,10

        JNZ     ORG5

        JMP     ORG1



GET2:

        JCXZ    NOGET

        MOV     AL,ES:[SI]

        INC     SI

        DEC     CX

        RET



GET:    JCXZ    NOGET

        MOV     AL,ES:[SI]

        INC     SI

        DEC     CX

        CALL    DELIM

        JZ      GET

GRET:   RET





DELIM:  CMP     AL,' '

        JZ      GRET

        CMP     AL,9

        JZ      GRET

        CMP     AL,'='

        JZ      GRET

        CMP     AL,','

        JZ      GRET

        CMP     AL,';'

        RET





NOGET:  POP     CX

        MOV     COUNT,DI

        XOR     SI,SI

        MOV     CHRPTR,SI

        RET

;

;  NEWLINE RETURNS WITH FIRST CHARACTER OF NEXT LINE

;

NEWLINE:CALL    GETCHR                  ; SKIP NON-CONTROL CHARACTERS

        JC      NONEW

        CMP     AL,10                   ; LOOK FOR LINE FEED

        JNZ     NEWLINE

        CALL    GETCHR

NONEW:  RET



MAPCASE:

        PUSH    CX

        PUSH    SI

        PUSH    DS

        PUSH    ES

        POP     DS

        XOR     SI,SI

CONVLOOP:

        LODSB



        IF      KANJI

        CALL    TESTKANJ

        JZ      NORMCONV

        INC     SI                      ; Skip next char

        DEC     CX

        JCXZ    CONVDONE                ; Just ignore 1/2 kanji error

; Fall through, know AL is not in 'a'-'z' range

NORMCONV:

        ENDIF



        CMP     AL,'a'

        JB      NOCONV

        CMP     AL,'z'

        JA      NOCONV

        SUB     AL,20H

        MOV     [SI-1],AL

NOCONV:

        LOOP    CONVLOOP

CONVDONE:

        POP     DS

        POP     SI

        POP     CX

        RET



        IF      KANJI

TESTKANJ:

        CMP     AL,81H

        JB      NOTLEAD

        CMP     AL,9FH

        JBE     ISLEAD

        CMP     AL,0E0H

        JB      NOTLEAD

        CMP     AL,0FCH

        JBE     ISLEAD

NOTLEAD:

        PUSH    AX

        XOR     AX,AX                   ; Set zero

        POP     AX

        RET



ISLEAD:

        PUSH    AX

        XOR     AX,AX                   ; Set zero

        INC     AX                      ; Reset zero

        POP     AX

        RET

        ENDIF



ASSUME DS:NOTHING



ROUND:  MOV     AX,[MEMLO]



        IF      NOT HIGHMEM

        ADD     AX,15

        ENDIF



        SHR     AX,1

        SHR     AX,1

        SHR     AX,1

        SHR     AX,1

        ADD     [MEMHI],AX

        XOR     AX,AX

        MOV     [MEMLO],AX

        RET



CALLDEV:MOV     DS,WORD PTR CS:[ENTRY_POINT+2]

        ADD     BX,WORD PTR CS:[ENTRY_POINT]; Do a little relocation

        MOV     AX,DS:[BX]

        PUSH    WORD PTR CS:[ENTRY_POINT]

        MOV     WORD PTR CS:[ENTRY_POINT],AX

        MOV     BX,OFFSET PACKET

        CALL    [ENTRY_POINT]

        POP     WORD PTR CS:[ENTRY_POINT]

        RET



BADNUM: POP     AX                      ; POP RETURN ADDRESS

        JMP     BADOP



ToDigit:

        SUB     AL,'0'

        JB      NotDig

        CMP     AL,9

        JA      NotDig

        CLC

        RET

NotDig: STC

        RET



GETNUM: XOR     BX,BX                   ; running count is zero

B2:     CALL    ToDigit                 ; do we have a digit

        JC      BadNum                  ; no, bomb

        XCHG    AX,BX                   ; put total in AX

        PUSH    BX                      ; save digit

        MOV     BX,10                   ; base of arithmetic

        MUL     BX                      ; shift by one decimal digit

        POP     BX                      ; get back digit

        ADD     AL,BL                   ; get total

        ADC     AH,0                    ; make that 16 bits

        JC      BADNUM                  ; too big a number

        XCHG    AX,BX                   ; stash total

        CALL    GETCHR                  ; GET NEXT DIGIT

        JC      B1                      ; no more characters

        OR      AL,AL                   ; end of line separator?

        JNZ     B2                      ; no, try as a valid character

        INC     COUNT                   ; one more character to scan

        DEC     CHRPTR                  ; back up over separator

B1:     MOV     AX,BX                   ; get proper count

        OR      AX,AX

        RET

;

;       ES:SI POINTS TO FILE NAME (NUL TERMINATED)

;       DS:DX POINTS TO STRING TO OUTPUT IN FRONT OF NAME ($ TERM)

;

BADFIL:

        PUSH    CS

        POP     ES

        MOV     SI,DX

BADLOAD:

        MOV     DX,OFFSET BADLD_PRE     ; WANT TO PRINT CONFIG ERROR

        MOV     BX,OFFSET BADLD_POST

PRNERR:

        PUSH    CS

        POP     DS

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     21H

PRN1:   MOV     DL,ES:[SI]

        OR      DL,DL

        JZ      PRN2

        MOV     AH,STD_CON_OUTPUT

        INT     21H

        INC     SI

        JMP     PRN1

PRN2:   MOV     DX,BX

PRINT:  MOV     AH,STD_CON_STRING_OUTPUT

        INT     21H

        RET

;

; LOAD FILE CALLED [DS:DX] AT MEMORY LOCATION ES:BX

;

LDFIL:

        PUSH    AX

        PUSH    BX

        PUSH    CX

        PUSH    DX

        PUSH    SI

        PUSH    DS

        PUSH    BX



        XOR     AX,AX                   ; OPEN THE FILE

        MOV     AH,OPEN

        STC                             ; IN CASE OF INT 24

        INT     21H

        POP     DX                      ; Trans addr is DS:DX

        JC      LDRET



        PUSH    ES                      ; READ THE FILE IN

        POP     DS

        MOV     BX,AX                   ; Handle in BX

        MOV     CX,0FF00H

        MOV     AH,READ

        STC                             ; IN CASE OF INT 24

        INT     21H

        JC      LDRET

        MOV     SI,DX                   ; CHECK FOR EXE FILE

        CMP     WORD PTR [SI],"ZM"

        JNZ     LDCLS

LDERR:  STC

        JMP     SHORT LDRET



LDCLS:  MOV     AH,CLOSE                ; CLOSE THE FILE

        STC

        INT     21H



LDRET:  POP     DS

        POP     SI

        POP     DX

        POP     CX

        POP     BX

        POP     AX

        RET

;

;  OPEN DEVICE POINTED TO BY DX, AL HAS ACCESS CODE

;   IF UNABLE TO OPEN DO A DEVICE OPEN NULL DEVICE INSTEAD

;

OPEN_DEV:

        CALL    OPEN_FILE

        JNC     OPEN_DEV3

OPEN_DEV1:

        MOV     DX,OFFSET NULDEV

        CALL    OPEN_FILE

OPEN_DEV2:

        RET

OPEN_DEV3:

        XOR     AX,AX                   ; GET DEVICE INFO

        MOV     AH,IOCTL

        INT     21H

        TEST    DL,10000000B

        JNZ     OPEN_DEV2

        MOV     AH,CLOSE

        INT     21H

        JMP     OPEN_DEV1



OPEN_FILE:

        MOV     AH,OPEN

        STC

        INT     21H

        RET



INT24:  ADD     SP,6                    ; RESTORE MACHINE STATE

        POP     AX

        POP     BX

        POP     CX

        POP     DX

        POP     SI

        POP     DI

        POP     BP

        POP     DS

        POP     ES

        PUSH    AX

        MOV     AH,GET_DEFAULT_DRIVE    ; INITIALIZE DOS

        INT     21H

        POP     AX

        IRET                            ; BACK TO USER



        IF      ALTVECT

BOOTMES DB      13

TEN:    DB      10

        DB      "MS-DOS version "

        DB      MAJOR_VERSION + "0"

        DB      "."

        DB      (MINOR_VERSION / 10) + "0"

        DB      (MINOR_VERSION MOD 10) + "0"

        DB      13,10

        DB      "Copyright 1981,82 Microsoft Corp.",13,10,"$"

        ENDIF



NULDEV  DB      "\DEV\NUL",0

CONDEV  DB      "\DEV\CON",0

AUXDEV  DB      "\DEV\AUX",0

PRNDEV  DB      "\DEV\PRN",0



CONFIG  DB      "\CONFIG.SYS",0



COMMND  DB      "\COMMAND.COM",0



COMTAB  LABEL   BYTE

        DB      7,"BUFFERS",'B'

        DB      5,"BREAK",'C'

        DB      5,"SHELL",'S'

        DB      6,"DEVICE",'D'

        DB      5,"FILES",'F'

        DB      8,"SWITCHAR",'W'

        DB      8,"AVAILDEV",'A'

        DB      7,"COUNTRY",'Q'

        DB      0





SYSINITSEG      ENDS

        END

                                                        



