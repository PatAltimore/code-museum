---
title: "INIT.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/INIT.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/INIT.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "init"
order: 36
description: "This file initializes MS-DOS v2.0, laying the groundwork for its advanced features like subdirectories and device drivers."

summary:
  - point: "Memory allocation and environment setup routines are central to this file"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Incorporates Unix-inspired design decisions, such as hierarchical file systems"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Demonstrates early use of interrupt-driven I/O for device interaction"
    link: "https://en.wikipedia.org/wiki/Interrupt"
    link_label: "Interrupt"
  - point: "Shows the influence of IBM PC compatibility requirements"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Highlights the transition from single-tasking to multi-tasking concepts"
    link: "https://en.wikipedia.org/wiki/Multitasking"
    link_label: "Multitasking"

enhancements:
  - id: "memory-allocation-and-environment-setup"
    line_start: 149
    line_end: 337
    title: "Memory allocation and environment setup"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `CONPROC` subroutine is responsible for allocating memory and setting up the environment for MS-DOS. It uses interrupt 21h to interact with the system's memory manager, adjusting the Program Segment Prefix (PSP) and allocating space for the environment variables. At the time, memory management was a critical concern due to the limited RAM available on IBM PCs (typically 64KB to 640KB). Tim Paterson's approach here reflects the constraints of early PC hardware, where every byte of memory had to be carefully accounted for. This routine also includes logic to handle high memory configurations, a nod to the growing complexity of PC systems in the early 1980s. The techniques used in `CONPROC` influenced later operating systems, including Windows, which inherited MS-DOS's memory management conventions for backward compatibility."
  - id: "environment-variable-handling"
    line_start: 341
    line_end: 361
    title: "Environment variable handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Environment_variable"
    image_url: ""
    image_caption: ""
    content: "The `BUILDENV` subroutine constructs the environment block, a key feature introduced in MS-DOS v2.0. Environment variables allow programs to access system-wide settings, such as paths and configuration options. This feature was inspired by Unix, which had a similar concept for managing system configurations. The subroutine calculates the memory location for the environment block and initializes it with default values. This innovation enabled greater flexibility for software developers, allowing programs to adapt to different system configurations without hardcoding paths or settings. The concept of environment variables became a standard in operating systems and is still widely used today in systems like Linux, macOS, and Windows."
  - id: "slash-handling-for-paths"
    line_start: 391
    line_end: 435
    title: "Handling slashes in file paths"
    wikipedia_url: "https://en.wikipedia.org/wiki/Path_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `GOTTHEENVIR` subroutine includes logic for handling slashes in file paths, a subtle but important aspect of MS-DOS's design. It checks whether the system uses forward slashes ('/') or backslashes ('\\') as path delimiters, a decision influenced by compatibility with IBM's requirements and the legacy of CP/M. This distinction became a defining characteristic of MS-DOS and later Windows, contrasting with Unix-like systems that use forward slashes exclusively. The handling of slashes in file paths reflects the compromises made to ensure broad compatibility with existing software and hardware. This decision had long-lasting implications, as the backslash remains a standard path delimiter in Windows systems today."
  - id: "default-drive-specification"
    line_start: 437
    line_end: 513
    title: "Default drive specification"
    wikipedia_url: "https://en.wikipedia.org/wiki/Drive_letter_assignment"
    image_url: ""
    image_caption: ""
    content: "The `IUSESLASH` subroutine determines the default drive specification for the system, converting drive numbers to letters (e.g., 'A', 'C'). This feature was crucial for MS-DOS's usability, as it allowed users to interact with storage devices using intuitive drive letters rather than numeric identifiers. The subroutine uses interrupt-driven I/O to fetch the drive specification and sets up the environment accordingly. Drive letter assignment was a novel concept at the time, inspired by CP/M but extended in MS-DOS to accommodate the growing number of storage devices. This approach became a standard in PC operating systems and influenced the design of file systems in Windows and other platforms."
  - id: "command-line-argument-parsing"
    line_start: 553
    line_end: 581
    title: "Parsing command-line arguments"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The `CHKARG` subroutine parses command-line arguments, a critical feature for enabling user interaction with the operating system. It identifies switches and parameters, such as '/P' for permanent commands or '/D' to disable date and time prompts. This routine reflects the influence of Unix, where command-line interfaces were a primary mode of interaction. Parsing arguments efficiently was essential for MS-DOS, given the limited processing power of early PCs. The design of `CHKARG` laid the foundation for more advanced command-line interfaces in later systems, including Windows PowerShell and Linux shells, which continue to use similar techniques for argument parsing."
  - id: "device-handling-and-redirection"
    line_start: 685
    line_end: 709
    title: "Device handling and I/O redirection"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_file"
    image_url: ""
    image_caption: ""
    content: "The `SETCDEV` subroutine manages device handling and I/O redirection, enabling MS-DOS to interact with hardware devices like printers and serial ports. It uses interrupt-driven I/O to open device handles and check their attributes, ensuring compatibility with the system's requirements. This routine also includes logic for redirecting standard input/output to devices, a feature inspired by Unix's device file abstraction. Device handling was a significant advancement in MS-DOS v2.0, allowing programs to interact seamlessly with hardware. This approach influenced later operating systems, including Windows, which expanded on MS-DOS's device handling capabilities to support a wider range of peripherals."
  - id: "command-com-validation"
    line_start: 877
    line_end: 955
    title: "Validating COMMAND.COM"
    wikipedia_url: "https://en.wikipedia.org/wiki/COMMAND.COM"
    image_url: ""
    image_caption: ""
    content: "The `SETCOMSR` subroutine validates the presence of COMMAND.COM, the MS-DOS command interpreter. It attempts to open the file and checks its attributes to ensure it is available and functional. COMMAND.COM was the heart of MS-DOS's user interface, providing the command-line shell that users relied on for interacting with the system. Ensuring its presence was critical for system stability and usability. This routine reflects the meticulous attention to detail required in early operating system design, where missing or corrupted files could render the system unusable. The validation logic in `SETCOMSR` influenced the development of similar checks in later operating systems, ensuring the integrity of essential system components."
  - id: "error-handling-for-missing-command-com"
    line_start: 969
    line_end: 1009
    title: "Error handling for missing COMMAND.COM"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "The `SETCOMSRBAD` subroutine handles the scenario where COMMAND.COM is missing or inaccessible. It displays an error message and attempts to restore the default command interpreter settings. Error handling was a critical aspect of MS-DOS's design, as it ensured the system could recover gracefully from common issues. This routine demonstrates the importance of user feedback and system resilience in operating system design. The error handling logic in `SETCOMSRBAD` influenced the development of similar mechanisms in later systems, including Windows, which expanded on MS-DOS's error handling capabilities to provide more detailed diagnostics and recovery options."
  - id: "set-permissions-for-command-prompts"
    line_start: 1019
    line_end: 1049
    title: "Set permissions for command prompts"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section of code, labeled SETPERM, initializes permissions for command prompts by incrementing the PERMCOM variable and setting prompt-related flags based on memory configurations. The programmer's immediate goal is to ensure that the system's command prompt behaves correctly under different memory models (HIGHMEM vs. standard configurations). In 1983, memory management was a critical concern as PCs typically had limited RAM, often less than 640KB. This code reflects the careful attention developers paid to optimizing system behavior based on hardware constraints. The approach of toggling settings based on memory configurations influenced later operating systems, including Windows, which continued to adapt system behavior dynamically based on available resources."
  - id: "loop-through-command-line-arguments"
    line_start: 1053
    line_end: 1055
    title: "Loop through command-line arguments"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The LOOPIT section uses a LOOP instruction to iterate through command-line arguments, calling the CHKARGJ subroutine for each. This demonstrates the importance of parsing user input in early operating systems, where command-line interfaces were the primary means of interaction. In the early 1980s, efficient argument parsing was vital for enabling flexible user commands and scripting. This technique influenced later systems, such as Unix shells and scripting languages like Bash, which rely heavily on robust argument parsing mechanisms."
  - id: "environment-pointer-and-process-management"
    line_start: 1057
    line_end: 1099
    title: "Environment pointer and process management"
    wikipedia_url: "https://en.wikipedia.org/wiki/Process_management_(computing)"
    image_url: ""
    image_caption: ""
    content: "The ARGSDONE section handles environment pointers and sets up process management for the current program. It uses interrupts and memory manipulation to establish the current process as the parent process and modifies key headers. This reflects the influence of Unix-like process management, introduced in MS-DOS v2.0. The use of interrupts (e.g., INT int_command) highlights the reliance on hardware-driven system calls in early PC operating systems. These techniques laid the groundwork for more sophisticated process management in later systems, including Windows NT."
  - id: "comspec-environment-variable-handling"
    line_start: 1101
    line_end: 1177
    title: "COMSPEC environment variable handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Environment_variable"
    image_url: ""
    image_caption: ""
    content: "The COMRETURNS section manages the COMSPEC environment variable, which specifies the command interpreter's location. It ensures that the variable is correctly set and resident in memory, adapting based on memory configurations. Environment variables like COMSPEC were a key innovation in MS-DOS v2.0, enabling flexible system configuration and scripting. This approach influenced later operating systems, including Windows, which expanded the use of environment variables for system and user-level configuration."
  - id: "copy-comspec-to-resident-memory"
    line_start: 1203
    line_end: 1281
    title: "Copy COMSPEC to resident memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The COPYCOMSP section copies the COMSPEC environment variable to resident memory, ensuring it remains accessible during program execution. It includes memory allocation and deallocation routines, reflecting the constrained memory environment of early PCs. This code demonstrates the careful management of transient and resident memory, a hallmark of MS-DOS v2.0's design. These techniques influenced later systems, such as Windows 3.x, which introduced more sophisticated memory management strategies while retaining backward compatibility with MS-DOS."
  - id: "kanji-character-handling"
    line_start: 1669
    line_end: 1683
    title: "Kanji character handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Kanji"
    image_url: ""
    image_caption: ""
    content: "The NOTKANJ4 section is part of a larger routine for handling Kanji characters, ensuring compatibility with Japanese text encoding. It checks whether a character is a Kanji lead byte and processes it accordingly. This reflects Microsoft's efforts to internationalize MS-DOS, making it suitable for non-English markets. Kanji support was critical for the adoption of MS-DOS in Japan, influencing the development of localized versions of Windows and other software."
  - id: "uppercase-conversion-for-characters"
    line_start: 1813
    line_end: 1823
    title: "Uppercase conversion for characters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Character_encoding"
    image_url: ""
    image_caption: ""
    content: "The IUPCONV section converts lowercase characters to uppercase by subtracting 0x20 from their ASCII value. This routine ensures consistent case handling in file names and commands, a common requirement in early operating systems. Case conversion routines like this influenced later systems, including Windows and Unix, which adopted similar techniques for case-insensitive file systems and command parsing."
  - id: "device-paths-and-defaults"
    line_start: 1831
    line_end: 1845
    title: "Device paths and default settings"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_file"
    image_url: ""
    image_caption: ""
    content: "This section defines key device-related constants and paths for MS-DOS v2.0 initialization. The '/DEV/' string serves as a prefix for device files, a concept borrowed from Unix-like systems where devices are treated as files. The 'CON' entry provides a reserved space for the console device, allowing for flexible handling of input/output streams. These definitions reflect the growing complexity of MS-DOS as it evolved to support subdirectories and device drivers, moving closer to the Unix model. At the time, the IBM PC was rapidly gaining traction, and MS-DOS needed to balance simplicity for OEMs with features that appealed to advanced users. The inclusion of these device paths laid the groundwork for robust system-level interactions, influencing later DOS versions and even early Windows systems, which retained similar conventions for device handling."
  - id: "environment-variable-support"
    line_start: 1851
    line_end: 1865
    title: "Environment variable structures"
    wikipedia_url: "https://en.wikipedia.org/wiki/Environment_variable"
    image_url: ""
    image_caption: ""
    content: "This section introduces structures for handling environment variables, such as 'COMSPEC=', which specifies the path to the command interpreter. Environment variables are a powerful abstraction, allowing programs to query system settings and user preferences. MS-DOS v2.0's support for environment variables reflects its shift toward a more flexible and programmable operating system, influenced by Unix and XENIX. In the early 1980s, this feature was cutting-edge for microcomputer operating systems, enabling customization and automation. The use of environment variables became a standard practice in computing, influencing not only later DOS versions but also modern operating systems like Linux and Windows. Developers and users alike benefited from this feature, which simplified configuration management and program interoperability."

---

TITLE   COMMAND Initialization



        INCLUDE COMSW.ASM



.xlist

.xcref

        INCLUDE DOSSYM.ASM

        INCLUDE DEVSYM.ASM

        INCLUDE COMSEG.ASM

.list

.cref



        INCLUDE COMEQU.ASM



ENVIRONSIZ EQU  0A0H            ;Must agree with values in EVIRONMENT segment

ENVIRONSIZ2 EQU 092H



CODERES SEGMENT PUBLIC

        EXTRN   RSTACK:WORD,SETVECT:NEAR,LODCOM:NEAR,CONTC:NEAR,INT_2E:NEAR

        EXTRN   LOADCOM:NEAR,CHKSUM:NEAR



        IF      IBMVER

        EXTRN   EXECHK:NEAR,SYSCALL:NEAR

        ENDIF



CODERES ENDS



DATARES SEGMENT PUBLIC

        EXTRN   DATARESEND:BYTE,LTPA:WORD,MYSEG:WORD,MYSEG1:WORD,MYSEG2:WORD

        EXTRN   MEMSIZ:WORD,TRNSEG:WORD,ENVIRSEG:WORD,RSWITCHAR:BYTE

        EXTRN   COMDRV:BYTE,COMLET:BYTE,PERMCOM:BYTE,SINGLECOM:WORD

        EXTRN   PARENT:WORD,IO_SAVE:WORD,COM_PTR:DWORD,COM_FCB1:DWORD

        EXTRN   COM_FCB2:DWORD,SUM:WORD,BATCH:WORD,COMSPEC:BYTE



        IF      IBMVER

        EXTRN   SYS_CALL:DWORD,EXESEG:WORD,EXESUM:WORD

        ENDIF



DATARES ENDS



ENVIRONMENT SEGMENT PUBLIC

        EXTRN   ENVIREND:BYTE,PATHSTRING:BYTE,ECOMSPEC:BYTE

ENVIRONMENT ENDS



TRANCODE        SEGMENT PUBLIC

        EXTRN   DATINIT:FAR

TRANCODE        ENDS



TRANSPACE       SEGMENT PUBLIC

        EXTRN   TRANSPACEEND:BYTE

TRANSPACE       ENDS



ZEXEC_DATA      SEGMENT PUBLIC

        IF      IBM

        EXTRN   ZEXECDATAEND:BYTE

        ENDIF

ZEXEC_DATA      ENDS



; *******************************************************************

; START OF INIT PORTION

; This code is overlayed the first time the TPA is used.



INIT    SEGMENT PUBLIC PARA



        EXTRN   HEADER:BYTE

        EXTRN   BADCOMLKMES:BYTE



        PUBLIC  CONPROC



ASSUME  CS:RESGROUP,DS:RESGROUP,ES:RESGROUP,SS:RESGROUP



        ORG     0

ZERO    =       $



CONPROC:

        MOV     SP,OFFSET RESGROUP:RSTACK



        IF      HIGHMEM

        MOV     BX,WORD PTR DS:[PDB_block_len]

        MOV     AX,OFFSET RESGROUP:ENVIREND + 15

        MOV     CL,4

        SHR     AX,CL

        PUSH    AX                         ; Save size to alloc

        INC     AX                         ; Plus one for arena

        SUB     BX,AX                      ; Subtract size of resident

        MOV     WORD PTR DS:[PDB_block_len],BX

        MOV     AX,CS

        SUB     BX,AX

        MOV     AH,SETBLOCK

        INT     21H

        POP     BX                          ; Get back size to alloc

        MOV     AH,ALLOC

        INT     21H

        MOV     [REALRES],AX

        MOV     ES,AX

        XOR     SI,SI

        MOV     DI,SI

        MOV     CX,OFFSET RESGROUP:ENVIREND

        SHR     CX,1          ; Length of resident and environment in words

                              ; Last byte doesn't matter

        REP     MOVSW                   ; Move to end of memory

        MOV     DS,AX

        MOV     BX,AX

        MOV     AH,SET_CURRENT_PDB

        INT     21H

        MOV     AX,BX

        MOV     BX,OFFSET RESGROUP:DATARESEND + 15

        MOV     CL,4

        SHR     BX,CL           ; BX is size for SETBLOCK

        MOV     WORD PTR DS:[PDB_block_len],BX

        ADD     WORD PTR DS:[PDB_block_len],AX

        MOV     [LTPA],CS

        MOV     AH,SETBLOCK

        INT     21H             ;Shrink to not include environment

        MOV     BX,(ENVIRONSIZ + 15) / 16

        MOV     AH,ALLOC

        INT     21H             ;Allocate the environment

        MOV     [ENVIRSEG],AX

        MOV     CS:[ENVIRSEGSAV],AX

        MOV     ES,AX

ASSUME  ES:ENVIRONMENT

        XOR     DI,DI

        MOV     SI,OFFSET RESGROUP:PATHSTRING

        MOV     CX,ENVIRONSIZ

        REP     MOVSB

        MOV     AX,WORD PTR CS:[PDB_block_len]

        ENDIF



        IF      NOT HIGHMEM

        MOV     AX,OFFSET RESGROUP:ENVIREND + 15

        MOV     CL,4

        SHR     AX,CL

        MOV     CX,CS

        ADD     AX,CX                         ; Compute segment of TPA

        MOV     [LTPA],AX                     ; Good enough for the moment

        MOV     AX,WORD PTR DS:[PDB_block_len]

        ENDIF



        MOV     [MYSEG1],DS

        MOV     [MYSEG2],DS

        MOV     [MYSEG],DS

        MOV     [MEMSIZ],AX



        MOV     DX,OFFSET TRANGROUP:TRANSPACEEND + 15

        MOV     CL,4

        SHR     DX,CL



        IF      IBM

        PUSH    DX

        MOV     DX,OFFSET EGROUP:ZEXECDATAEND + 15

        MOV     CL,4

        SHR     DX,CL

        POP     CX

        ADD     DX,CX

        ENDIF



        SUB     AX,DX

        MOV     [TRNSEG],AX                     ; Read it in here

        MOV     AX,DS:[PDB_environ]

        OR      AX,AX

        JZ      BUILDENV                        ; Need to make an environment



        IF      HIGHMEM

        INC     BYTE PTR CS:[CHUCKENV]          ; Flag no ENVIRONSEG

        ELSE

        INC     BYTE PTR [CHUCKENV]             ; Flag no ENVIRONSEG

        ENDIF



        JMP     SHORT ENVIRONPASSED



BUILDENV:



        IF      NOT HIGHMEM

        MOV     AX,OFFSET RESGROUP:PATHSTRING   ; Figure environment pointer

        MOV     CL,4

        SHR     AX,CL

        MOV     DX,DS

        ADD     AX,DX

        ELSE

        JMP     SHORT GOTTHEENVIR

        ENDIF



ENVIRONPASSED:

        MOV     [ENVIRSEG],AX



        IF      HIGHMEM

        DEC     AX

        MOV     ES,AX

        INC     AX

        MOV     ES:[arena_owner],DS             ; Adjust owner of passed envir

        ENDIF



        MOV     ES,AX

ASSUME  ES:ENVIRONMENT



GOTTHEENVIR:

        MOV     AX,CHAR_OPER SHL 8

        INT     int_command

        MOV     [RSWITCHAR],DL



        CMP     DL,'/'

        JNZ     IUSESLASH



        IF      HIGHMEM

        MOV     CS:[COMSPECT],'\'

        ELSE

        MOV     [COMSPECT],'\'

        ENDIF



        IF      HIGHMEM

        CMP     BYTE PTR CS:[CHUCKENV],0

        ELSE

        CMP     BYTE PTR [CHUCKENV],0

        ENDIF



        JNZ     IUSESLASH



        MOV     ES:[ECOMSPEC-10H],'\'

IUSESLASH:



IF IBMVER

        PUSH    ES

        MOV     AX,(Get_interrupt_vector SHL 8) + int_command

        INT     int_command

        MOV     WORD PTR [SYS_CALL],BX

        MOV     WORD PTR [SYS_CALL+2],ES

        MOV     DX,OFFSET RESGROUP:SYSCALL

        MOV     AX,(Set_interrupt_vector SHL 8) + int_command

        INT     int_command

        POP     ES

ENDIF



        MOV     AL,BYTE PTR DS:[FCB]         ; get drive spec for default

        MOV     AH,DRVCHAR

        MOV     [COMDRV],AL

        ADD     AL,40H                  ; Convert to letter

        CMP     AL,40H

        JZ      NOCOMDRV

        STD

        IF      HIGHMEM

        CMP     BYTE PTR CS:[CHUCKENV],0

        ELSE

        CMP     BYTE PTR [CHUCKENV],0

        ENDIF



        JNZ     NOTWIDENV



        PUSH    DS

        PUSH    ES

        POP     DS

        MOV     DI,OFFSET ENVIRONMENT:ECOMSPEC + ENVIRONSIZ2 - 1 - 10H

        MOV     SI,OFFSET ENVIRONMENT:ECOMSPEC + ENVIRONSIZ2 - 3 - 10H

        MOV     CX,ENVIRONSIZ2 - 2

        REP     MOVSB



        POP     DS

        MOV     WORD PTR ES:[ECOMSPEC-10H],AX



NOTWIDENV:

        CLD

        IF      HIGHMEM

        MOV     WORD PTR CS:[AUTOBAT],AX

        ELSE

        MOV     WORD PTR [AUTOBAT],AX

        ENDIF



        MOV     [COMLET],AL

NOCOMDRV:

        CALL    SETVECT         ; Set the vectors



        MOV     SI,80H

        LODSB

        MOV     CL,AL

        XOR     CH,CH

        JCXZ    COMRETURNSJ     ; No parameters

        MOV     SI,81H          ; Start of parms

CHKARG:

        LODSB

        CMP     AL,' '

        JZ      NEXTCH

        CMP     AL,9            ; Tab only other delimiter

        JZ      NEXTCH

        CMP     AL,[RSWITCHAR]   ; Switch?

        JNZ     CHKOTHERARGS    ; No

        DEC     CX

        JCXZ    ARGSDONEJ       ; oops

        LODSB

        OR      AL,20H          ; Lower case

        CMP     AL,'p'          ; PERMCOM switch

        JNZ     NEXTCH

        JMP     SETPERM



NEXTCH:

        CMP     AL,'d'

        JNZ     NEXTCH3



        IF      HIGHMEM

        MOV     BYTE PTR CS:[PRDATTM],1  ; User explicitly says no date time

        ELSE

        MOV     BYTE PTR [PRDATTM],1     ; User explicitly says no date time

        ENDIF



        LOOP    CHKARG

        JMP     SHORT ARGSDONEJ

NEXTCH3:

        CMP     AL,'c'

        JNZ     NEXTCH2         ; SINGLECOM switch 2

        MOV     [SINGLECOM],SI  ; Point to the rest of the command line

        MOV     [PERMCOM],0     ; A SINGLECOM must not be a PERMCOM



        IF      HIGHMEM

        MOV     BYTE PTR CS:[PRDATTM],1  ; No date or time either, explicit

        ELSE

        MOV     BYTE PTR [PRDATTM],1     ; No date or time either, explicit

        ENDIF



ARGSDONEJ:

        JMP  ARGSDONE



NEXTCH2:

        LOOP    CHKARG



COMRETURNSJ:

        JMP COMRETURNS



CHKOTHERARGS:

        DEC     SI

        MOV     DX,SI

        PUSH    CX

        PUSH    SI

CONTRLOOP:

        LODSB

        DEC     CX

        CMP     AL,' '

        JZ      SETCDEV

        CMP     AL,9

        JZ      SETCDEV

        JCXZ    SETCDEVA

        JMP     SHORT CONTRLOOP



SETCDEVA:

        INC     SI

SETCDEV:

        MOV     BYTE PTR [SI-1],0

        MOV     AX,(OPEN SHL 8) OR 2    ; Read and write

        INT     int_command

        JC      CHKSRCHSPEC             ; Wasn't a file

        MOV     BX,AX

        MOV     AX,IOCTL SHL 8

        INT     int_command

        TEST    DL,80H

        JNZ     ISADEVICE

        MOV     AH,CLOSE       ; Close initial handle, wasn't a device

        INT     int_command

        JMP     CHKSRCHSPEC



ISADEVICE:

        XOR     DH,DH

        OR      DL,3            ; Make sure has CON attributes

        MOV     AX,(IOCTL SHL 8) OR 1

        INT     int_command

        MOV     DX,BX           ; Save new handle

        POP     BX              ; Throw away saved SI

        POP     BX              ; Throw away saved CX

        PUSH    CX

        MOV     CX,3

        XOR     BX,BX

RCCLLOOP:                                ; Close 0,1 and 2

        MOV     AH,CLOSE

        INT     int_command

        INC     BX

        LOOP    RCCLLOOP

        MOV     BX,DX           ; New device handle

        MOV     AH,XDUP

        INT     int_command             ; Dup to 0

        MOV     AH,XDUP

        INT     int_command             ; Dup to 1

        MOV     AH,XDUP

        INT     int_command             ; Dup to 2

        MOV     AH,CLOSE

        INT     int_command             ; Close initial handle

        POP     CX

        JCXZ    ARGSDONEJ2

        JMP     CHKARG



CHKSRCHSPEC:                    ; Not a device, so must be directory spec



        IF      HIGHMEM

        MOV     BYTE PTR CS:[CHUCKENV],0    ; If search specified -- no inheritance

        MOV     AX,CS:[ENVIRSEGSAV]

        MOV     [ENVIRSEG],AX

        ELSE

        MOV     BYTE PTR [CHUCKENV],0    ; If search specified -- no inheritance

        MOV     AX,OFFSET RESGROUP:PATHSTRING   ; Figure environment pointer

        MOV     CL,4

        SHR     AX,CL

        MOV     DX,DS

        ADD     AX,DX

        MOV     [ENVIRSEG],AX

        ENDIF



        MOV     ES,AX

        MOV     BYTE PTR [SI-1],' '

        POP     SI                      ; Remember location

        POP     CX                      ; and count



        IF      HIGHMEM

        MOV     DI,CS:[ECOMLOC]

        ELSE

        MOV     DI,[ECOMLOC]

        ENDIF



COMTRLOOP:

        LODSB

        DEC     CX

        CMP     AL,' '

        JZ      SETCOMSR

        CMP     AL,9

        JZ      SETCOMSR

        STOSB



        IF      KANJI

        XOR     AH,AH

        ENDIF



        JCXZ    SETCOMSR



        IF      KANJI

        CALL    ITESTKANJ

        JZ      COMTRLOOP

        DEC     CX

        MOVSB

        INC     AH

        JCXZ    SETCOMSR

        ENDIF



        JMP     SHORT COMTRLOOP



SETCOMSR:

        PUSH    SI

        PUSH    CX



        PUSH    DS



        IF      HIGHMEM

        PUSH    CS

        POP     DS

        ENDIF



        MOV     SI,OFFSET RESGROUP:COMSPECT

        MOV     CX,14



        MOV     AL,ES:[DI-1]



        IF      KANJI

        OR      AH,AH

        JNZ     INOTROOT        ; Last char was KANJI second byte, might be '\'

        ENDIF



        CALL    PATHCHRCMPR

        JNZ     INOTROOT

        INC     SI              ; Don't make a double /

        DEC     CX

INOTROOT:

        REP     MOVSB



        MOV     DX,[ECOMLOC]    ; Now lets make sure its good!

        PUSH    ES

        POP     DS



        MOV     AX,OPEN SHL 8

        INT     int_command             ; Open COMMAND.COM

        POP     DS

        JC      SETCOMSRBAD     ; No COMMAND.COM here

        MOV     BX,AX           ; Handle

        MOV     AH,CLOSE

        INT     int_command             ; Close COMMAND.COM

SETCOMSRRET:

        POP     CX

        POP     SI

ARGSDONEJ2:

        JCXZ    ARGSDONE

        JMP     CHKARG



SETCOMSRBAD:



        IF      HIGHMEM

        PUSH    DS

        PUSH    CS

        POP     DS

        ENDIF



        MOV     DX,OFFSET RESGROUP:BADCOMLKMES

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     int_command

        MOV     SI,OFFSET RESGROUP:COMSPECT

        MOV     DI,[ECOMLOC]

        MOV     CX,14

        REP     MOVSB           ; Get my default back



        IF      HIGHMEM

        POP     DS

        ENDIF



        JMP     SHORT SETCOMSRRET



CHKARGJ:

        JMP    CHKARG



SETPERM:

        INC     [PERMCOM]



        IF      HIGHMEM

        CMP     BYTE PTR CS:[PRDATTM],-1

        ELSE

        CMP     BYTE PTR [PRDATTM],-1

        ENDIF



        JNZ     LOOPIT



        IF      HIGHMEM

        MOV     BYTE PTR CS:[PRDATTM],0          ; If not set explicit, set to prompt

        ELSE

        MOV     BYTE PTR [PRDATTM],0             ; If not set explicit, set to prompt

        ENDIF



LOOPIT:

        LOOP    CHKARGJ

ARGSDONE:

        CMP     [PERMCOM],0

        JZ      COMRETURNS

        PUSH    ES                      ; Save environment pointer

        MOV     AH,SET_CURRENT_PDB

        MOV     BX,DS

        MOV     ES,BX

        INT     int_command                     ; Current process is me

        MOV     DI,PDB_Exit             ; Diddle the addresses in my header

        MOV     AX,OFFSET RESGROUP:LODCOM

        STOSW

        MOV     AX,DS

        STOSW

        MOV     AX,OFFSET RESGROUP:CONTC

        STOSW

        MOV     AX,DS

        STOSW

        MOV     WORD PTR DS:[PDB_Parent_PID],DS ; Parent is me forever

        MOV     DX,OFFSET RESGROUP:INT_2E

        MOV     AX,(SET_INTERRUPT_VECTOR SHL 8) OR 02EH

        INT     int_command                     ;Set magic interrupt

        POP     ES                              ;Remember environment

COMRETURNS:

        MOV     AX,WORD PTR DS:[PDB_Parent_PID]

        MOV     [PARENT],AX                     ; Save parent

        MOV     WORD PTR DS:[PDB_Parent_PID],DS ; Parent is me

        MOV     AX,WORD PTR DS:[PDB_JFN_Table]

        MOV     [IO_SAVE],AX                    ; Get the default stdin and out

        MOV     WORD PTR [COM_PTR+2],DS         ; Set all these to resident

        MOV     WORD PTR [COM_FCB1+2],DS

        MOV     WORD PTR [COM_FCB2+2],DS

        MOV     DI,OFFSET RESGROUP:COMSPEC



        IF      HIGHMEM

        MOV     SI,CS:[ECOMLOC]

        CMP     BYTE PTR CS:[CHUCKENV],0

        ELSE

        MOV     SI,[ECOMLOC]

        CMP     BYTE PTR [CHUCKENV],0

        ENDIF



        MOV     AX,DS                   ; XCHG ES,DS

        PUSH    ES

        POP     DS

        MOV     ES,AX



        JZ      COPYCOMSP               ; All set up for copy



        PUSH    CS

        POP     DS



        MOV     SI,OFFSET RESGROUP:COMSPSTRING

        PUSH    ES

        PUSH    DI

        CALL    IFINDE

        MOV     SI,DI

        PUSH    ES

        POP     DS

        POP     DI

        POP     ES

        JNC     COPYCOMSP

COMSPECNOFND:



        IF      HIGHMEM

        MOV     DS,CS:[ENVIRSEG]

        MOV     SI,CS:[ECOMLOC]

        ELSE

        MOV     SI,[ECOMLOC]

        ADD     SI,OFFSET RESGROUP:PATHSTRING

        PUSH    CS

        POP     DS

        ENDIF



COPYCOMSP:

        LODSB

        STOSB

        OR      AL,AL

        JNZ     COPYCOMSP



        IF      HIGHMEM

        MOV     DS,CS:[REALRES]

        PUSH    CS

        POP     ES

        MOV     AH,DEALLOC

        INT     21H

        CMP     BYTE PTR CS:[CHUCKENV],0

        JZ      GOTENVIR                ; Environment is ok

        MOV     ES,CS:[ENVIRSEGSAV]

        MOV     AH,DEALLOC

        INT     21H

        ELSE

        PUSH    CS

        POP     DS

        MOV     BX,OFFSET RESGROUP:DATARESEND + 15

        MOV     CL,4

        SHR     BX,CL

        MOV     AH,SETBLOCK

        INT     int_command                     ; Shrink me to the resident only

        CMP     BYTE PTR [CHUCKENV],0

        JNZ     GOTENVIR                ; Environment was passed

        MOV     BX,(ENVIRONSIZ + 15) /16

        MOV     AH,ALLOC

        INT     int_command                     ; "ALLOCATE" the environment

        MOV     DS,[ENVIRSEG]

        MOV     [ENVIRSEG],AX

        MOV     ES,AX

        XOR     SI,SI

        MOV     DI,SI

        MOV     CX,ENVIRONSIZ

        REP     MOVSB

        PUSH    CS

        POP     DS

        ENDIF



GOTENVIR:

        CALL    LOADCOM                 ; Load the transient in the right place

        CALL    CHKSUM                  ; Compute the checksum

        MOV     [SUM],DX                ; Save it

IF IBM

        MOV     AX,[MEMSIZ]

        MOV     DX,OFFSET EGROUP:ZEXECDATAEND + 15

        MOV     CL,4

        SHR     DX,CL

        SUB     AX,DX

        MOV     [EXESEG],AX

        CALL    EXECHK

        MOV     [EXESUM],DX

ENDIF

        IF MSVER

        CMP     [SINGLECOM],0

        JNZ     NOPHEAD                 ; Don't print header if SINGLECOM

        IF      HIGHMEM

        PUSH    DS

        PUSH    CS

        POP     DS

        ENDIF

        MOV     DX,OFFSET RESGROUP:HEADER

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     int_command

        IF      HIGHMEM

        POP     DS

        ENDIF

NOPHEAD:

        ENDIF



        IF      HIGHMEM

        CMP     BYTE PTR CS:[PRDATTM],0

        ELSE

        CMP     BYTE PTR [PRDATTM],0

        ENDIF



        JNZ     NODTTM                  ; Don't do AUTOEXEC or date time

        MOV     BX,3                    ; 48 BYTES ENOUGH

        MOV     AH,ALLOC

        INT     int_command

        JC      DODTTM                  ; PRETEND NO BATCH

        MOV     [BATCH],AX

        MOV     ES,AX

        XOR     DI,DI



        IF      HIGHMEM

        CMP     BYTE PTR CS:[AUTOBAT],0

        ELSE

        CMP     BYTE PTR [AUTOBAT],0

        ENDIF



        JNZ     NOAUTSET

        MOV     AH,GET_DEFAULT_DRIVE

        INT     int_command

        ADD     AL,'A'



        IF      HIGHMEM

        MOV     CS:[AUTOBAT],AL

        ELSE

        MOV     [AUTOBAT],AL

        ENDIF



NOAUTSET:



        IF      HIGHMEM

        PUSH    DS

        PUSH    CS

        POP     DS

        ENDIF



        MOV     SI,OFFSET RESGROUP:AUTOBAT

        MOV     CX,8

        REP     MOVSW   ; NAME

        MOV     AX,-1

        MOV     CL,10

        REP     STOSW   ; PARMS

        MOV     DX,OFFSET RESGROUP:AUTOBAT

        MOV     AX,OPEN SHL 8

        INT     int_command                      ; See if AUTOEXEC.BAT exists

        JC      NOABAT

        MOV     BX,AX

        MOV     AH,CLOSE

        INT     int_command



        IF      HIGHMEM

        POP     DS

        ENDIF



        JMP     SHORT DRV0



NOABAT:



        IF      HIGHMEM

        POP     DS

        ENDIF



        MOV     ES,[BATCH]      ; Not found--turn off batch job

        MOV     AH,DEALLOC

        INT     int_command

        MOV     [BATCH],0       ; AFTER DEALLOC in case of ^C

DODTTM:



        IF      HIGHMEM

        MOV     AX,OFFSET TRANGROUP:DATINIT

        MOV     WORD PTR CS:[INITADD],AX

        MOV     AX,[TRNSEG]

        MOV     WORD PTR CS:[INITADD+2],AX

        CALL    DWORD PTR CS:[INITADD]

        ELSE

        MOV     AX,OFFSET TRANGROUP:DATINIT

        MOV     WORD PTR[INITADD],AX

        MOV     AX,[TRNSEG]

        MOV     WORD PTR[INITADD+2],AX

        CALL    DWORD PTR [INITADD]

        ENDIF



NODTTM:



        IF IBMVER

        CMP     [SINGLECOM],0

        JNZ     DRV0                    ; Don't print header if SINGLECOM

        MOV     DX,OFFSET RESGROUP:HEADER

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     int_command

        ENDIF



DRV0:

        IF      HIGHMEM

        PUSH    DS

        MOV     AX,OFFSET RESGROUP:LODCOM

        PUSH    AX

MQQ     PROC    FAR

        RET

MQQ     ENDP

        ELSE

        JMP     LODCOM                  ; Allocate the transient

        ENDIF



PATHCHRCMPR:

        CMP     [RSWITCHAR],'/'

        JZ      RNOSLASHT

        CMP     AL,'/'

        JZ      RET41

RNOSLASHT:

        CMP     AL,'\'

RET41:

        RET





IFINDE:

        CALL    IFIND                    ; FIND THE NAME

        JC      IFIND2                   ; CARRY MEANS NOT FOUND

        JMP     ISCASB1                  ; SCAN FOR = SIGN

;

; On return of FIND1, ES:DI points to beginning of name

;

IFIND:

        CLD



        CALL    ICOUNT0                  ; CX = LENGTH OF NAME



        IF      HIGHMEM

        MOV     ES,CS:[REALRES]

ASSUME  ES:RESGROUP

        MOV     ES,ES:[ENVIRSEG]

ASSUME  ES:NOTHING

        ELSE

        MOV     ES,[ENVIRSEG]

        ENDIF



        XOR     DI,DI

IFIND1:

        PUSH    CX

        PUSH    SI

        PUSH    DI

IFIND11:

        LODSB



        IF      KANJI

        CALL    ITESTKANJ

        JZ      NOTKANJ4

        DEC     SI

        LODSW

        INC     DI

        INC     DI

        CMP     AX,ES:[DI-2]

        JNZ     IFIND12

        DEC     CX

        LOOP    IFIND11

        JMP     SHORT IFIND12



NOTKANJ4:

        ENDIF



        CALL    IUPCONV

        INC     DI

        CMP     AL,ES:[DI-1]

        JNZ     IFIND12

        LOOP    IFIND11

IFIND12:

        POP     DI

        POP     SI

        POP     CX

        JZ      IFIND2

        PUSH    CX

        CALL    ISCASB2                  ; SCAN FOR A NUL

        POP     CX

        CMP     BYTE PTR ES:[DI],0

        JNZ     IFIND1

        STC                             ; INDICATE NOT FOUND

IFIND2:

        RET



ICOUNT0:

        PUSH    DS

        POP     ES

        MOV     DI,SI



        PUSH    DI                      ; COUNT NUMBER OF CHARS UNTIL "="

        CALL    ISCASB1

        JMP     SHORT ICOUNTX

        PUSH    DI                      ; COUNT NUMBER OF CHARS UNTIL NUL

        CALL    ISCASB2

ICOUNTX:

        POP     CX

        SUB     DI,CX

        XCHG    DI,CX

        RET



ISCASB1:

        MOV     AL,"="                  ; SCAN FOR AN =

        JMP     SHORT ISCASBX

ISCASB2:

        XOR     AL,AL                   ; SCAN FOR A NUL

ISCASBX:

        MOV     CX,100H

        REPNZ   SCASB

        RET



        IF      KANJI

ITESTKANJ:

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

        XOR     AX,AX           ;Set zero

        POP     AX

        RET



ISLEAD:

        PUSH    AX

        XOR     AX,AX           ;Set zero

        INC     AX              ;Reset zero

        POP     AX

        RET

        ENDIF



IUPCONV:

        CMP     AL,"a"

        JB      IRET22

        CMP     AL,"z"

        JA      IRET22

        SUB     AL,20H          ; Lower-case changed to upper-case

IRET22:

        RET



ICONDEV LABEL BYTE

        DB      "/DEV/"

        DB      "CON",0,0,0,0,0,0          ; Room for 8 char device

BADCSPFL DB     0

COMSPECT DB     "/COMMAND.COM",0,0

AUTOBAT DB      0,":\AUTOEXEC.BAT",0



PRDATTM DB      -1                      ;Init not to prompt for date time

INITADD DD      ?

CHUCKENV DB     0

ECOMLOC DW      OFFSET ENVIRONMENT:ECOMSPEC-10H



        IF      HIGHMEM

REALRES DW      ?

ENVIRSEGSAV DW  ?

        ENDIF



COMSPSTRING DB  "COMSPEC="





INIT    ENDS



        END

                                                              