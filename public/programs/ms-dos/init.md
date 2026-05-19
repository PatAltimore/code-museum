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
description: "This file initializes MS-DOS v2.0, showcasing the evolution from a simple single-task system to a more Unix-inspired multitasking OS."

summary:
  - point: "Memory allocation and environment setup routines are central to this file."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "The use of interrupt-driven system calls reflects the hardware constraints of the IBM PC."
    link: "https://en.wikipedia.org/wiki/Interrupt"
    link_label: "Interrupts"
  - point: "Unix-inspired features like subdirectories and pipes appear in v2.0."
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Tim Paterson's original 86-DOS code influenced the design philosophy of MS-DOS."
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"
  - point: "OEM flexibility was key to Microsoft's licensing success."
    link: "https://en.wikipedia.org/wiki/MS-DOS#Licensing"
    link_label: "Licensing"

enhancements:
  - id: "memory-allocation-and-environment"
    line_start: 149
    line_end: 337
    title: "Memory Allocation and Environment Setup"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `CONPROC` routine is responsible for initializing memory and setting up the environment segment. It begins by allocating memory for the resident portion of the operating system and the environment variables. This process uses interrupt-driven system calls like `INT 21H`, which were standard for interacting with the IBM PC hardware. In 1983, memory management was a critical challenge due to the limited resources of early PCs, which typically had only 64KB to 640KB of RAM. The programmers had to carefully calculate memory offsets and segment sizes to ensure the system could operate efficiently. Tim Paterson's original 86-DOS code laid the groundwork for these techniques, but MS-DOS v2.0 expanded on them to support features like subdirectories and pipes. This routine reflects the transition from a simple, single-tasking OS to a more capable system inspired by Unix. The memory allocation strategy here influenced later DOS versions and even early Windows systems, demonstrating the lasting impact of these design decisions."
  - id: "environment-inheritance-and-passing"
    line_start: 341
    line_end: 361
    title: "Environment Inheritance and Passing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Environment_variable"
    image_url: ""
    image_caption: ""
    content: "The `BUILDENV` routine constructs the environment segment, which stores variables like PATH and COMSPEC. These variables are crucial for the operating system to locate executables and manage system behavior. In the early 1980s, environment variables were a relatively new concept, borrowed from Unix systems. MS-DOS adapted this idea to fit the constraints of the IBM PC, where memory was scarce and segment-based addressing was the norm. This routine ensures that the environment is properly initialized and passed to child processes, a feature that became increasingly important as MS-DOS evolved to support multitasking and more complex applications. The inheritance of environment variables allowed programs to share configuration settings, simplifying user workflows and enabling more sophisticated software. This innovation was a stepping stone toward the modular, configurable systems we use today."
  - id: "slash-vs-backslash-convention"
    line_start: 391
    line_end: 435
    title: "Slash vs. Backslash: Path Separator Debate"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS#File_system"
    image_url: ""
    image_caption: ""
    content: "The `GOTTHEENVIR` routine includes a decision point for handling path separators, choosing between '/' and '\\'. This seemingly minor detail reflects deeper cultural and technical influences. Unix systems, which inspired MS-DOS v2.0, used '/' as the path separator, while the IBM PC's BASIC interpreter used '\\'. Microsoft opted for '\\' to maintain compatibility with earlier software and the expectations of IBM PC users. This decision had far-reaching consequences, creating a lasting divergence between DOS/Windows and Unix/Linux systems. The choice of '\\' became a defining characteristic of DOS-based operating systems, influencing file system conventions for decades. It also highlights the compromises made to balance innovation with backward compatibility, a recurring theme in Microsoft's software development."
  - id: "default-drive-and-command-line-parsing"
    line_start: 437
    line_end: 513
    title: "Default Drive and Command Line Parsing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The `IUSESLASH` routine sets the default drive and begins parsing the command line arguments. Early PCs lacked graphical interfaces, so users interacted with the system through text-based commands. This routine ensures that the default drive is correctly initialized and prepares the system to process user input. Parsing the command line involves handling switches (e.g., '/P' for permanent commands) and arguments, which are essential for executing programs and configuring system behavior. The design of this routine reflects the constraints of the era, where every byte of memory mattered and efficiency was paramount. Command-line parsing remains a fundamental aspect of computing, and the techniques developed here influenced later systems, including Windows and Linux."
  - id: "device-handling-and-redirection"
    line_start: 685
    line_end: 709
    title: "Device Handling and Redirection"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_file"
    image_url: ""
    image_caption: ""
    content: "The `SETCDEV` routine manages device handling and redirection, ensuring that input and output streams are properly configured. In MS-DOS, devices like the keyboard, screen, and printer were treated as files, allowing for flexible redirection. This routine checks whether a specified file is a device and duplicates handles for standard input, output, and error streams. The concept of treating devices as files originated in Unix and was adapted for MS-DOS to provide similar functionality within the constraints of the IBM PC. This approach enabled features like piping and redirection, which were crucial for automating tasks and building complex workflows. The device handling mechanisms developed here laid the groundwork for modern operating systems, where the abstraction of devices as files remains a core principle."
  - id: "command-com-validation"
    line_start: 877
    line_end: 953
    title: "Validating COMMAND.COM: The Heart of MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/COMMAND.COM"
    image_url: ""
    image_caption: ""
    content: "The `SETCOMSR` routine validates the presence of COMMAND.COM, the command interpreter for MS-DOS. COMMAND.COM is the user's primary interface with the operating system, handling commands like DIR, COPY, and DEL. This routine ensures that COMMAND.COM is accessible and properly configured, a critical step in system initialization. If COMMAND.COM is missing, the routine displays an error message and attempts to recover the default settings. The reliance on COMMAND.COM highlights the simplicity of MS-DOS, where the command interpreter was central to the user experience. This routine reflects the importance of robustness in system design, ensuring that even if errors occur, the system can recover gracefully. The principles established here influenced later versions of DOS and other operating systems, emphasizing reliability and user-centric design."
  - id: "setperm-memory-permissions"
    line_start: 1019
    line_end: 1049
    title: "Setting memory permissions dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The SETPERM routine adjusts memory permissions based on whether the system is operating in high memory mode. This decision reflects a key constraint of early PC architectures: limited memory availability. In 1983, MS-DOS v2.0 was designed to run on IBM PCs with as little as 64 KB of RAM, requiring careful management of memory segments. The use of conditional assembly directives like HIGHMEM demonstrates how developers optimized their code for different hardware configurations. Tim Paterson, the original author of MS-DOS, had to balance simplicity with flexibility, ensuring the operating system could adapt to varying setups. This approach to memory management would later influence how DOS handled device drivers and TSR programs, laying the groundwork for future compatibility."
  - id: "loopit-argument-checking"
    line_start: 1053
    line_end: 1055
    title: "Iterating through command-line arguments"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The LOOPIT routine loops through command-line arguments to process them. In the early 1980s, command-line interfaces were the primary way users interacted with operating systems. MS-DOS needed to parse and handle arguments efficiently to support batch files and automation. This small routine encapsulates the iterative nature of argument processing, a technique borrowed from Unix-like systems. It reflects the growing influence of Unix on MS-DOS v2.0, which introduced features like pipes and subdirectories. This simple loop would become foundational for the way DOS executed programs and scripts, influencing countless utilities and applications."
  - id: "argsdone-process-context"
    line_start: 1057
    line_end: 1099
    title: "Saving and restoring process context"
    wikipedia_url: "https://en.wikipedia.org/wiki/Process_management_(computing)"
    image_url: ""
    image_caption: ""
    content: "ARGSDONE ensures the current process context is preserved and restored. It interacts with the Program Segment Prefix (PSP) to manage process-specific data, such as the parent PID and interrupt vectors. This routine highlights MS-DOS v2.0's shift toward a more structured process model, influenced by Unix and XENIX. In the early 1980s, process management was a relatively new concept for microcomputer operating systems, which had previously focused on single-tasking environments. By implementing these features, MS-DOS v2.0 paved the way for multitasking and modular software design, even though true multitasking would not arrive until later versions of Windows."
  - id: "comreturns-environment-management"
    line_start: 1101
    line_end: 1177
    title: "Managing the environment segment"
    wikipedia_url: "https://en.wikipedia.org/wiki/Environment_variable"
    image_url: ""
    image_caption: ""
    content: "COMRETURNS handles the environment segment, a critical part of MS-DOS's memory management. Environment variables, such as PATH and COMSPEC, were stored in this segment, allowing programs to inherit and modify system-wide settings. This routine ensures the environment is correctly set up for subsequent operations, including copying the command interpreter. In 1983, this feature was a significant step forward, enabling greater flexibility and customization for users and developers. The environment segment concept would persist in operating systems for decades, influencing how modern systems like Windows and Linux manage global and session-specific settings."
  - id: "copycomsp-command-interpreter"
    line_start: 1203
    line_end: 1281
    title: "Copying the command interpreter"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "COPYCOMSP copies the command interpreter (COMSPEC) to a new memory location. This operation is essential for MS-DOS's ability to execute batch files and maintain a consistent user environment. The routine checks if the environment is valid and allocates memory for the interpreter if necessary. In the early 1980s, the command interpreter was the heart of the operating system, providing users with direct control over file and process management. By making it relocatable, MS-DOS v2.0 improved system stability and flexibility, ensuring the interpreter could function in various memory configurations. This design decision reflects the influence of Unix, which emphasized modularity and adaptability."
  - id: "gotenvir-environment-allocation"
    line_start: 1285
    line_end: 1339
    title: "Allocating and validating the environment"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "GOTENVIR allocates memory for the environment segment and validates its contents. This routine is a direct response to the limited memory available on early IBM PCs, which required careful allocation and deallocation of resources. By ensuring the environment is correctly set up, MS-DOS v2.0 could support complex operations like loading transient programs and managing batch files. The routine's reliance on conditional assembly directives (e.g., HIGHMEM) demonstrates the adaptability of MS-DOS to different hardware configurations. This memory management strategy would become a hallmark of DOS, influencing how future versions handled device drivers, TSRs, and extended memory."
  - id: "nophead-header-display"
    line_start: 1341
    line_end: 1407
    title: "Displaying the system header"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "NOPHEAD controls the display of the system header, a feature that provided users with information about the operating system version and configuration. This routine checks whether the header should be displayed based on system settings and command-line arguments. In 1983, such visual cues were important for users navigating the command-line interface, as they provided context and reassurance about the system's state. The header display reflects MS-DOS's emphasis on usability, even in a text-based environment. This feature would evolve in later versions, with graphical interfaces eventually replacing text-based headers."
  - id: "noautset-autoexec-batch"
    line_start: 1411
    line_end: 1463
    title: "Setting up AUTOEXEC.BAT"
    wikipedia_url: "https://en.wikipedia.org/wiki/AUTOEXEC.BAT"
    image_url: ""
    image_caption: ""
    content: "NOAUTSET prepares the system for executing AUTOEXEC.BAT, the batch file that automates startup tasks. This routine checks for the existence of the file and sets up the necessary parameters for its execution. AUTOEXEC.BAT was a cornerstone of MS-DOS's usability, allowing users to customize their system's behavior at boot time. In 1983, this feature was revolutionary, enabling automation and personalization in a way that was previously unavailable on microcomputers. The routine's reliance on memory allocation and file handling underscores the challenges of working within the constraints of early PC hardware. AUTOEXEC.BAT would remain a key feature of DOS until the advent of Windows, which introduced more sophisticated startup mechanisms."
  - id: "dodttm-date-time-initialization"
    line_start: 1487
    line_end: 1515
    title: "Initializing date and time settings"
    wikipedia_url: "https://en.wikipedia.org/wiki/Real-time_clock"
    image_url: ""
    image_caption: ""
    content: "DODTTM initializes the system's date and time settings, a feature that became increasingly important as PCs were used for business and personal productivity. This routine interacts with the real-time clock and ensures the settings are correctly applied. In 1983, the inclusion of date and time functionality reflected the growing sophistication of personal computers, which were transitioning from hobbyist tools to essential business machines. The routine's design demonstrates MS-DOS's commitment to providing a complete operating environment, capable of handling tasks that were previously reserved for larger, more expensive systems."
  - id: "itestkanj-kanji-character-handling"
    line_start: 1767
    line_end: 1783
    title: "Handling Kanji lead bytes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Kanji"
    image_url: ""
    image_caption: ""
    content: "ITESTKANJ checks whether a byte is a Kanji lead byte, an essential operation for supporting Japanese text. Kanji characters are represented by two-byte sequences, with the first byte indicating the start of a Kanji character. This routine ensures MS-DOS can correctly interpret and process Kanji text, a feature that was crucial for localization in Japan. In the early 1980s, the inclusion of Kanji support demonstrated Microsoft's ambition to make MS-DOS a global operating system. This routine reflects the challenges of adapting Western software for Eastern markets, where text encoding and character sets differ significantly. Kanji handling would remain a critical feature in later versions of DOS and Windows, influencing the development of Unicode and other international standards."
  - id: "device-name-convention"
    line_start: 1831
    line_end: 1835
    title: "Device names: Unix inspiration in MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_file"
    image_url: ""
    image_caption: ""
    content: "The section begins with the definition of '/DEV/' and 'CON', a reserved device name for the console. This shows MS-DOS borrowing from Unix-like systems, where device files are treated as part of the filesystem hierarchy. Tim Paterson and Microsoft were designing MS-DOS 2.0 to be more versatile and Unix-inspired, a departure from the simpler 1.x versions. In 1983, the IBM PC was becoming the dominant personal computer, and Microsoft aimed to make MS-DOS more appealing to developers familiar with Unix. Device names like 'CON' allowed users to interact with hardware through standardized interfaces, a concept that persists in modern operating systems. This decision laid the groundwork for MS-DOS's compatibility with a wider range of applications and hardware."
  - id: "hardcoded-paths"
    line_start: 1839
    line_end: 1841
    title: "Hardcoded paths: Bootstrapping the early PC"
    wikipedia_url: "https://en.wikipedia.org/wiki/AUTOEXEC.BAT"
    image_url: ""
    image_caption: ""
    content: "The hardcoded paths '/COMMAND.COM' and 'AUTOEXEC.BAT' reflect the bootstrapping process of early PCs. COMMAND.COM was the command-line interpreter, essential for user interaction, while AUTOEXEC.BAT allowed automatic execution of startup commands. These paths were critical in ensuring the system could initialize correctly, even with limited user input. In 1983, most PCs lacked sophisticated bootloaders or graphical interfaces, making these files essential for usability. Tim Paterson's design prioritized simplicity and reliability, ensuring MS-DOS could function on a wide range of hardware. These conventions persisted into later versions of MS-DOS and influenced startup processes in subsequent operating systems."
  - id: "date-time-prompt"
    line_start: 1845
    line_end: 1845
    title: "PRDATTM: Simplifying user interaction"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The 'PRDATTM' flag, initialized to -1, controls whether the system prompts the user for date and time during startup. This small detail highlights the developers' efforts to streamline the user experience in MS-DOS 2.0. In the early 1980s, many personal computers required manual input for basic settings, which could frustrate users unfamiliar with technical processes. By automating or bypassing these prompts, MS-DOS aimed to make computing more accessible to a broader audience. This design decision reflects Microsoft's focus on usability, a key factor in MS-DOS's widespread adoption. Over time, such features became standard in operating systems, reducing barriers for non-technical users."
  - id: "conditional-highmem"
    line_start: 1855
    line_end: 1861
    title: "Conditional assembly: Adapting to hardware variability"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The conditional assembly directive 'IF HIGHMEM' reflects the variability of early PC hardware. In 1983, the IBM PC ecosystem included machines with differing memory configurations, from basic setups to expanded memory systems. MS-DOS needed to adapt seamlessly to these differences, ensuring compatibility across a wide range of devices. Conditional assembly allowed developers to include or exclude code based on specific hardware features, optimizing performance and reliability. This approach was crucial for MS-DOS's success, as it enabled Microsoft to license the operating system to dozens of OEMs, each with unique hardware requirements. The flexibility demonstrated here helped establish MS-DOS as the dominant OS of its era."
  - id: "environment-variable-comspec"
    line_start: 1865
    line_end: 1865
    title: "COMSPEC: Environment variables take root"
    wikipedia_url: "https://en.wikipedia.org/wiki/Environment_variable"
    image_url: ""
    image_caption: ""
    content: "The 'COMSPEC=' string defines an environment variable pointing to the command interpreter. This marks MS-DOS's shift toward a more flexible and configurable system, inspired by Unix's use of environment variables. In 1983, personal computing was transitioning from rigid, single-purpose systems to more adaptable platforms. Environment variables allowed programs to query system settings dynamically, enhancing compatibility and user control. Microsoft recognized the importance of these features as it sought to position MS-DOS as the standard operating system for IBM PCs and clones. COMSPEC became a cornerstone of MS-DOS's architecture, influencing how subsequent operating systems handled configuration and system paths."

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