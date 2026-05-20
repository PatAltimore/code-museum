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
description: "This file initializes MS-DOS v2.0, setting up memory, environment variables, and command-line arguments for the operating system's runtime."

summary:
  - point: "Introduces memory allocation techniques for constrained hardware environments"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Implements environment variable handling inspired by Unix systems"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Handles command-line parsing and device initialization"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "memory-allocation-highmem"
    line_start: 135
    line_end: 337
    title: "How MS-DOS Allocated Memory in 1983"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section, labeled 'CONPROC,' is responsible for initializing memory allocation in MS-DOS v2.0. It begins by setting up the stack pointer (`SP`) and calculating the size of the resident memory block. The code uses interrupts (`INT 21H`) to allocate memory dynamically, a technique critical for operating systems running on the IBM PC's limited hardware. At the time, the IBM PC featured only 16-bit addressing and a maximum of 640KB of RAM, making efficient memory management essential. Tim Paterson and Microsoft's team adapted this approach from earlier work on 86-DOS and drew inspiration from Unix's memory segmentation. This memory allocation scheme influenced later DOS versions and other operating systems, including Windows 3.x, which built on DOS's memory management principles. Developers studying this code learned techniques for handling constrained memory environments, which became a staple in embedded systems programming."
  - id: "environment-variable-setup"
    line_start: 341
    line_end: 361
    title: "Unix-Inspired Environment Variables in MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Environment_variable"
    image_url: ""
    image_caption: ""
    content: "The 'BUILDENV' section sets up environment variables, a feature introduced in MS-DOS v2.0 and heavily inspired by Unix. Environment variables allow programs to access system-wide settings such as file paths and user preferences. This code calculates the memory segment for the environment and initializes it. At the time, Unix systems were known for their robust handling of environment variables, and Microsoft sought to bring similar functionality to DOS, making it more appealing to developers transitioning from Unix-like systems. This innovation laid the groundwork for scripting and automation in DOS, influencing later systems like Windows and Linux. The concept of environment variables became a universal standard in operating systems, enabling flexible configuration and interoperability."
  - id: "command-line-parsing"
    line_start: 553
    line_end: 581
    title: "Parsing Command-Line Arguments in Assembly"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The 'CHKARG' routine parses command-line arguments, a critical feature for MS-DOS's command-line interface. It identifies switches (e.g., `/P`) and processes them, converting characters to lowercase for case-insensitive comparison. This approach reflects the constraints of assembly programming, where every operation must be explicitly coded. Command-line parsing was essential for DOS's usability, allowing users to pass parameters to programs and scripts. The technique influenced later command-line systems, including Unix shells and Windows CMD. Developers studying this code learned how to implement efficient string processing in low-level languages, a skill still relevant in embedded systems and performance-critical applications."
  - id: "device-initialization"
    line_start: 685
    line_end: 709
    title: "Making Any File Act Like a Device"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_file"
    image_url: ""
    image_caption: ""
    content: "The 'SETCDEV' routine initializes devices by checking if a file handle corresponds to a device. Using the `IOCTL` interrupt, it determines whether the file has device attributes and duplicates the handle for standard input/output streams (0, 1, and 2). This clever trick allowed DOS to treat files and devices uniformly, simplifying programming and enabling features like redirecting output to files. At the time, this approach was groundbreaking, as it abstracted hardware details from the user and programmer. It influenced later operating systems, including Unix and Windows, where the concept of device files became standard. This abstraction made DOS more versatile and contributed to its widespread adoption."
  - id: "kanji-character-handling"
    line_start: 825
    line_end: 873
    title: "Supporting Kanji in Command-Line Input"
    wikipedia_url: "https://en.wikipedia.org/wiki/Kanji"
    image_url: ""
    image_caption: ""
    content: "The 'COMTRLOOP' section includes code for handling Kanji characters, reflecting Microsoft's efforts to support international markets. Kanji, used in Japanese writing, requires multi-byte encoding, which complicates string processing. This routine checks for Kanji characters and adjusts the parsing logic accordingly. In the early 1980s, internationalization was becoming increasingly important as personal computers gained global popularity. Microsoft's inclusion of Kanji support in MS-DOS v2.0 helped the operating system succeed in Japan, one of the world's largest PC markets. This work influenced later efforts in software localization and encoding standards, including Unicode, which solved many of the challenges seen here."
  - id: "command-com-validation"
    line_start: 877
    line_end: 925
    title: "Ensuring COMMAND.COM Exists"
    wikipedia_url: "https://en.wikipedia.org/wiki/COMMAND.COM"
    image_url: ""
    image_caption: ""
    content: "The 'SETCOMSR' routine verifies the presence of `COMMAND.COM`, the primary command interpreter for MS-DOS. It attempts to open the file and checks for errors, ensuring the system can execute commands. If `COMMAND.COM` is missing, the routine falls back to displaying an error message and restoring default settings. This validation was crucial for system stability, as `COMMAND.COM` was central to DOS's operation. The approach reflects the era's focus on robustness, where missing files could render a system unusable. This technique influenced later systems, including Windows, where similar checks ensure critical components are present during boot."
  - id: "error-handling-for-missing-command-com"
    line_start: 969
    line_end: 1009
    title: "What Happens When COMMAND.COM Is Missing"
    wikipedia_url: "https://en.wikipedia.org/wiki/COMMAND.COM"
    image_url: ""
    image_caption: ""
    content: "The 'SETCOMSRBAD' routine handles the error case where `COMMAND.COM` cannot be found. It displays an error message and restores the default command-line settings. This fallback mechanism ensured MS-DOS could recover gracefully from critical errors, a necessity for an operating system designed to run on diverse hardware configurations. At the time, error handling in assembly was challenging due to limited debugging tools and hardware constraints. This routine reflects Microsoft's commitment to user experience, even in failure scenarios. The concept of graceful error handling became a cornerstone of software design, influencing modern operating systems and applications."
  - id: "set-permissions-for-prompt-behavior"
    line_start: 1019
    line_end: 1049
    title: "Setting Permissions for Prompt Behavior"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section of code adjusts permissions and default behaviors for the command prompt. Specifically, it checks and sets the value of `PRDATTM`, which determines whether the prompt is explicitly set or defaults to a predefined value. The use of conditional assembly (`IF HIGHMEM`) reflects the need to adapt behavior for systems with differing memory configurations. In 1983, memory constraints were a dominant concern, with most IBM PCs shipping with 64KB to 256KB of RAM. Tim Paterson and the MS-DOS team designed the operating system to be flexible across a range of hardware configurations, ensuring compatibility with both high-memory and low-memory systems. This approach influenced later operating systems, including Windows, which inherited MS-DOS's adaptability to hardware constraints."
  - id: "looping-through-command-line-arguments"
    line_start: 1053
    line_end: 1055
    title: "Looping Through Command-Line Arguments"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The `LOOPIT` routine iterates through command-line arguments using the `LOOP` instruction, a compact and efficient way to repeat operations in assembly language. This technique was crucial for parsing user input in an era when graphical user interfaces were rare and command-line interfaces dominated. Parsing arguments efficiently was a priority, as it directly impacted the usability of the operating system. The design here reflects the influence of Unix, which popularized command-line utilities and argument parsing. This routine set the stage for more sophisticated argument handling in later versions of MS-DOS and inspired similar mechanisms in early scripting languages like batch files and shell scripts."
  - id: "handling-environment-pointers"
    line_start: 1057
    line_end: 1099
    title: "Handling Environment Pointers for Process Control"
    wikipedia_url: "https://en.wikipedia.org/wiki/Environment_variable"
    image_url: ""
    image_caption: ""
    content: "The `ARGSDONE` routine manages environment pointers and sets up process control by interacting with the Program Segment Prefix (PSP). It modifies the parent process ID and adjusts interrupt vectors, ensuring the current process can function independently. This low-level manipulation of process headers was necessary to implement features like environment variables and process isolation. At the time, MS-DOS was transitioning from a simple single-tasking system to one capable of supporting more complex workflows inspired by Unix. The ability to manage environment variables and process control became a cornerstone of operating system design, influencing not only later versions of MS-DOS but also other operating systems like Windows and Linux."
  - id: "copying-command-processor-environment"
    line_start: 1203
    line_end: 1281
    title: "Copying the Command Processor Environment"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The `COPYCOMSP` routine copies the environment of the command processor into a new memory segment. This ensures the environment variables are preserved and accessible during the execution of subsequent processes. The routine uses instructions like `LODSB` and `STOSB` to copy byte-by-byte, reflecting the manual memory management required in assembly programming. This approach was critical for supporting batch files and scripts, which relied on consistent environment settings. The technique influenced the development of scripting languages and tools, such as PowerShell and Bash, which expanded on the concept of environment management to enable more sophisticated automation and process control."
  - id: "kanji-character-handling-2"
    line_start: 1669
    line_end: 1683
    title: "Handling Kanji Characters for Internationalization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Kanji"
    image_url: ""
    image_caption: ""
    content: "The `NOTKANJ4` routine checks whether a character is part of a Kanji sequence, using specific ranges of values to identify lead bytes. This reflects early efforts to support internationalization in MS-DOS, accommodating non-English character sets like Japanese Kanji. The inclusion of Kanji handling was significant in 1983, as it demonstrated Microsoft's recognition of global markets and the need for localized software. This work laid the groundwork for broader internationalization efforts in software development, influencing later operating systems, applications, and programming languages that prioritize multilingual support."
  - id: "uppercase-conversion-for-compatibility"
    line_start: 1813
    line_end: 1827
    title: "Uppercase Conversion for Compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/ASCII"
    image_url: ""
    image_caption: ""
    content: "The `IUPCONV` routine converts lowercase ASCII characters to uppercase by subtracting 0x20 from their value. This ensures case-insensitivity in file and command names, a hallmark of MS-DOS's design. Case-insensitivity was crucial for usability, as it simplified interactions for users unfamiliar with strict case requirements in Unix-like systems. This routine reflects the influence of CP/M, the predecessor to MS-DOS, which also used case-insensitive file systems. The approach became standard practice in operating systems like Windows, where case-insensitivity remains a key feature of the file system."
  - id: "device-path-and-command-definitions"
    line_start: 1831
    line_end: 1841
    title: "Why MS-DOS Needed '/DEV/' and 'COMMAND.COM'"
    wikipedia_url: "https://en.wikipedia.org/wiki/COMMAND.COM"
    image_url: ""
    image_caption: ""
    content: "This section defines key strings and paths used during the MS-DOS initialization process. '/DEV/' represents the device path prefix, while 'COMMAND.COM' identifies the default command interpreter. These definitions were crucial for MS-DOS's modular design, allowing it to locate and interact with devices and execute commands. At the time, the IBM PC had limited storage and memory, so every byte mattered. Tim Paterson's original 86-DOS design was inspired by CP/M, but MS-DOS v2.0 incorporated Unix-like features such as hierarchical directories and environment variables. This section reflects the transition to a more flexible and powerful operating system. The inclusion of 'COMMAND.COM' as the default shell was a direct response to the need for a user-friendly interface on the IBM PC. This approach influenced later operating systems, including Windows, which retained the concept of a default command interpreter. Developers studying this code would later adapt similar techniques for defining system paths and environment variables in their own systems."
  - id: "autoexec-bat-and-date-prompt"
    line_start: 1845
    line_end: 1845
    title: "How MS-DOS Automated Boot with AUTOEXEC.BAT"
    wikipedia_url: "https://en.wikipedia.org/wiki/AUTOEXEC.BAT"
    image_url: ""
    image_caption: ""
    content: "This section initializes the AUTOEXEC.BAT file path and a flag for prompting the user to enter the date and time. AUTOEXEC.BAT was a revolutionary feature in MS-DOS that allowed users to automate tasks during boot, such as setting environment variables or launching programs. The flag for date/time prompts (-1 here) reflects the flexibility of MS-DOS to adapt to user preferences or system requirements. In the early 1980s, automation was a significant step forward for personal computing, reducing the need for manual configuration at every boot. Tim Paterson's design philosophy emphasized simplicity and usability, which resonated with IBM's vision for the PC as a consumer-friendly device. AUTOEXEC.BAT became a staple of MS-DOS systems and influenced the design of startup scripts in later operating systems, including Windows and Linux."
  - id: "environment-variable-comspec"
    line_start: 1865
    line_end: 1865
    title: "The Birth of COMSPEC: An Environment Variable Icon"
    wikipedia_url: "https://en.wikipedia.org/wiki/Environment_variable"
    image_url: ""
    image_caption: ""
    content: "The 'COMSPEC=' string defined here represents the environment variable used to locate the command interpreter. Environment variables were a concept borrowed from Unix, reflecting Microsoft's ambition to make MS-DOS v2.0 more powerful and flexible than its predecessor. By defining COMSPEC, MS-DOS allowed programs and scripts to dynamically reference the location of the command interpreter, enabling portability and modularity. This feature was particularly important as MS-DOS was licensed to dozens of OEMs, each of whom could customize their systems. The introduction of environment variables in MS-DOS laid the groundwork for similar features in Windows and other operating systems, where they remain a fundamental part of system configuration and scripting."

---

```asm
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
```
