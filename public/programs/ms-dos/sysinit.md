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
description: "The SYSINIT.ASM file is the heart of MS-DOS v2.0's initialization process, showcasing the ingenuity required to bootstrap an operating system in the constrained hardware environment of the early 1980s."

summary:
  - point: "Memory sizing algorithm writes and reads bit patterns to detect RAM boundaries"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Relocation of code into high memory to free up conventional memory for applications"
    link: "https://en.wikipedia.org/wiki/Conventional_memory"
    link_label: "Conventional Memory"
  - point: "Integration of CONFIG.SYS parsing for user-defined system configurations"
    link: "https://en.wikipedia.org/wiki/CONFIG.SYS"
    link_label: "CONFIG.SYS"
  - point: "Command-line setup and execution of COMMAND.COM, the DOS shell"
    link: "https://en.wikipedia.org/wiki/COMMAND.COM"
    link_label: "COMMAND.COM"
  - point: "Early device management and file handle setup inspired by Unix-like systems"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"

enhancements:
  - id: "system-constants-and-conditional-compilation"
    line_start: 1
    line_end: 43
    title: "Defining constants for multiple system builds"
    wikipedia_url: "https://en.wikipedia.org/wiki/Conditional_compilation"
    image_url: ""
    image_caption: ""
    content: "This section defines constants and conditional compilation flags that tailor the build for different system versions, including IBM and Microsoft variants. In 1983, MS-DOS v2.0 was designed to be highly adaptable, supporting both IBM PCs and other OEM hardware. These constants reflect the modularity of the code, allowing the same source to produce binaries for different configurations. The inclusion of flags like `IBMVER`, `MSVER`, and `HIGHMEM` shows the foresight in accommodating diverse hardware environments. This approach was critical in an era when hardware compatibility was a major challenge, and Microsoft's licensing strategy demanded flexibility. The modularity here influenced later practices in software portability, a hallmark of modern operating systems."
  - id: "sysinit-structure-definition"
    line_start: 55
    line_end: 79
    title: "Defining SYSINITVAR: The backbone of initialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_structure"
    image_url: ""
    image_caption: ""
    content: "The `SYSINITVAR` structure encapsulates key pointers and variables used during system initialization, such as device headers and buffer queues. This design reflects the influence of structured programming principles, which were gaining traction in the early 1980s. Tim Paterson and Microsoft's engineers needed a way to organize critical system data efficiently, given the limited memory and processing power of the IBM PC's 8086 processor. The structure's fields, like `DPBHEAD` and `BCON`, highlight the importance of managing devices and buffers in a single, centralized location. This approach laid the groundwork for more sophisticated kernel designs in subsequent operating systems, where structured data management became a standard practice."
  - id: "sysinit-entry-point"
    line_start: 145
    line_end: 147
    title: "SYSINIT: The jump to initialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: ""
    image_caption: ""
    content: "The `SYSINIT` label marks the entry point for the system initialization process, immediately jumping to the `GOINIT` routine. This simple yet essential mechanism is the first step in bootstrapping MS-DOS. In 1983, bootstrapping an operating system was a delicate process, requiring precise control over memory and hardware. The jump instruction here is a reminder of the linear nature of early OS initialization, where every step had to be carefully orchestrated to ensure the system could load and execute properly. This entry point reflects the minimalist design philosophy of MS-DOS, which prioritized efficiency and simplicity over complexity."
  - id: "memory-sizing-algorithm"
    line_start: 241
    line_end: 283
    title: "MEMSCAN: Detecting RAM boundaries"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `MEMSCAN` routine uses a clever algorithm to size the available RAM by writing and reading bit patterns. This technique was vital in an era when hardware configurations varied widely, and systems lacked standardized methods for detecting memory. Tim Paterson's approach reflects the ingenuity required to work within the constraints of the IBM PC's architecture, where the BIOS provided limited support. By incrementing the memory segment (`CX`) and testing each boundary, the routine ensures accurate detection of usable RAM. This method influenced later memory management techniques and highlights the resourcefulness of early system programmers in overcoming hardware limitations."
  - id: "relocation-to-high-memory"
    line_start: 301
    line_end: 423
    title: "SYSIN: Relocating code to high memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Conventional_memory"
    image_url: ""
    image_caption: ""
    content: "The `SYSIN` routine relocates the operating system code into high memory, freeing up conventional memory for user applications. This was a critical innovation in MS-DOS v2.0, addressing the 640KB memory limit imposed by the IBM PC's architecture. High memory relocation reflects the influence of Unix-like systems, which inspired MS-DOS's design. By moving the kernel out of the way, the system maximizes the available space for programs, a necessity for running increasingly complex software. This technique became a cornerstone of DOS memory management and influenced later systems like Windows, which continued to grapple with memory constraints."
  - id: "config-sys-parsing"
    line_start: 929
    line_end: 985
    title: "DOCONF: Parsing CONFIG.SYS for system setup"
    wikipedia_url: "https://en.wikipedia.org/wiki/CONFIG.SYS"
    image_url: ""
    image_caption: ""
    content: "The `DOCONF` routine reads and processes the `CONFIG.SYS` file, allowing users to define system configurations such as device drivers and memory management settings. This feature was introduced in MS-DOS v2.0 as part of its Unix-inspired enhancements, giving users greater control over their system environment. In 1983, this level of configurability was a significant step forward, reflecting the growing demand for customizable operating systems. The routine's reliance on BIOS interrupts (`INT 21H`) shows the interplay between software and hardware during initialization. Parsing `CONFIG.SYS` became a defining feature of DOS and influenced later systems like Windows, which expanded on this concept with more sophisticated configuration tools."
  - id: "endfile-memory-sizing"
    line_start: 989
    line_end: 1079
    title: "Sizing RAM: A delicate first step"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The ENDFILE section begins the memory sizing process, a critical step during system initialization. It calculates available RAM by writing and reading bit patterns, adjusting memory boundaries for high memory configurations, and preparing the system file table (SFT). In 1983, memory was a scarce resource, and MS-DOS had to operate efficiently on machines with as little as 64 KB of RAM. Tim Paterson's design reflects the constraints of early PCs, where every byte mattered. The logic here ensures the operating system can allocate memory dynamically, adapting to the hardware it runs on. This approach laid the groundwork for memory management techniques that persisted in later DOS versions and influenced other operating systems of the era."
  - id: "dobuff-buffer-management"
    line_start: 1083
    line_end: 1153
    title: "Managing buffers for file operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    image_url: ""
    image_caption: ""
    content: "The DOBUFF section handles the allocation and management of buffers, which are temporary storage areas for file operations. Buffers are linked into a chain, ensuring efficient access and reuse. This section also adjusts memory boundaries based on whether high memory is available, reflecting the adaptability of MS-DOS to different hardware configurations. In the early 1980s, disk operations were slow, and buffers were essential for improving performance. The logic here demonstrates the careful balance between memory usage and system responsiveness. Buffer management techniques like these became standard in operating systems, highlighting the enduring influence of MS-DOS's design."
  - id: "buf1-memory-cleanup"
    line_start: 1157
    line_end: 1273
    title: "Cleaning up memory: A necessary chore"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "BUF1 focuses on cleaning up and reallocating memory after buffers are set up. It ensures unused memory is returned to the system and prepares the environment for subsequent operations. This meticulous attention to memory management reflects the constraints of early PCs, where efficient use of limited resources was paramount. The section includes conditional logic for high memory configurations, showcasing MS-DOS's adaptability. Memory cleanup routines like these became a hallmark of well-designed operating systems, emphasizing the importance of resource management in software engineering."
  - id: "badop-command-error-handling"
    line_start: 1277
    line_end: 1281
    title: "Handling command errors gracefully"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "BADOP is a simple yet crucial routine for handling command errors. It prints an error message and redirects execution to a safe point. Error handling was a vital aspect of software design in the early 1980s, as user input could be unpredictable and systems lacked modern safeguards. This routine reflects the pragmatic approach of MS-DOS, ensuring the system remains stable even when faced with invalid commands. The concept of error handling has evolved significantly, but its roots in routines like BADOP highlight the foundational role of early operating systems in shaping software reliability."
  - id: "noprob-file-size-calculation"
    line_start: 1285
    line_end: 1375
    title: "Calculating file size: Precision under constraints"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "NOPROB calculates the size of a file, ensuring it fits within the system's memory constraints. It uses interrupt-driven calls to the DOS API, reflecting the modular design of MS-DOS. File size calculation was critical for managing resources on early PCs, where storage and memory were limited. This routine demonstrates the careful planning required to optimize system performance while adhering to hardware limitations. The use of interrupts and modular design principles influenced later operating systems, showcasing the lasting impact of MS-DOS's architecture."
  - id: "conferr-config-error-handling"
    line_start: 1377
    line_end: 1381
    title: "Config error: A safety net for initialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "CONFERR handles errors encountered during the parsing of CONFIG.SYS, a key configuration file for MS-DOS. It prints an error message and redirects execution to a recovery routine. This section highlights the importance of robust error handling in system initialization, ensuring the operating system can recover gracefully from misconfigurations. CONFIG.SYS was a critical file for customizing MS-DOS, and routines like CONFERR ensured users could troubleshoot issues effectively. The emphasis on error handling in MS-DOS influenced later systems, underscoring the importance of reliability in software design."
  - id: "getcom-command-parsing"
    line_start: 1387
    line_end: 1391
    title: "Parsing commands: The heart of CONFIG.SYS"
    wikipedia_url: "https://en.wikipedia.org/wiki/CONFIG.SYS"
    image_url: ""
    image_caption: ""
    content: "GETCOM parses commands within CONFIG.SYS, organizing the file and preparing the system for initialization. This routine reflects the modular design of MS-DOS, where configuration files played a central role in system customization. Parsing commands was a complex task, requiring careful handling of user input and system constraints. The logic here demonstrates the adaptability of MS-DOS, allowing it to function on a wide range of hardware. Command parsing routines like GETCOM influenced the design of later operating systems, highlighting the enduring legacy of MS-DOS."
  - id: "conflp-looping-through-commands"
    line_start: 1395
    line_end: 1417
    title: "Looping through CONFIG.SYS commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/CONFIG.SYS"
    image_url: ""
    image_caption: ""
    content: "CONFLP loops through commands in CONFIG.SYS, executing them one by one. This routine ensures the system processes all configuration directives, adapting to user-defined settings. In the early 1980s, customization was a key selling point for operating systems, and CONFIG.SYS allowed users to tailor MS-DOS to their needs. The looping logic here reflects the simplicity and efficiency of MS-DOS, enabling it to function on a wide range of hardware. The concept of processing configuration files influenced later operating systems, showcasing the foundational role of MS-DOS in system design."
  - id: "ends-section-cleanup"
    line_start: 2029
    line_end: 2039
    title: "Graceful end-of-section handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The ENDSH routine is a simple yet critical mechanism for handling the end of a section in the initialization process. By writing a zero byte to a specific memory location and calling subsequent routines, it ensures clean transitions between parsing operations. In the early 1980s, memory management was a delicate task, as systems like the IBM PC operated with limited RAM (typically 64KB to 256KB). Tim Paterson, adapting his 86-DOS for MS-DOS, had to ensure every byte was used efficiently. This routine exemplifies the meticulous attention to detail required to prevent memory corruption or undefined behavior during system startup. The approach here—writing a sentinel value and relying on subsequent routines for further processing—became a common pattern in low-level system code. While modern systems have abstracted such tasks into higher-level languages and frameworks, the principles of clean state transitions remain foundational."
  - id: "parameter-parsing-loop"
    line_start: 2057
    line_end: 2069
    title: "Parsing parameters in a tight loop"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The PARMLOOP routine demonstrates early techniques for parsing command-line parameters. It reads characters one by one, checks for delimiters, and stores them in a buffer. This design reflects the constraints of the era, where parsing had to be efficient and fit within the limited memory space of early PCs. Tim Paterson and the Microsoft team were influenced by Unix-like systems, which emphasized simplicity and modularity. The loop's reliance on direct memory manipulation and conditional jumps showcases the raw power and complexity of assembly programming. This method laid the groundwork for more sophisticated command-line parsing in later operating systems, where similar principles were implemented in higher-level languages. The legacy of such routines persists in modern shells and scripting environments."
  - id: "kanji-character-handling"
    line_start: 2375
    line_end: 2421
    title: "Handling Kanji characters for localization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Kanji"
    image_url: ""
    image_caption: ""
    content: "The TESTKANJ, NOTLEAD, and ISLEAD routines are an early example of localization efforts in operating systems. These routines check whether a character is a valid Kanji lead byte, a crucial step for supporting double-byte character sets (DBCS) used in Japanese text. By incorporating Kanji handling, MS-DOS v2.0 aimed to expand its usability in non-English markets, reflecting Microsoft's growing ambitions as a global software provider. In the early 1980s, localization was a challenging task due to hardware limitations and the lack of standardized encoding schemes. This implementation required careful handling of memory and character ranges to avoid errors. The inclusion of Kanji support in MS-DOS was a forward-thinking decision that helped establish Microsoft's dominance in international markets. Today, such localization efforts are standard practice, but they owe much to the pioneering work seen in routines like these."
  - id: "memory-rounding-routine"
    line_start: 2425
    line_end: 2451
    title: "Rounding memory for efficient allocation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The ROUND routine adjusts memory boundaries to ensure efficient allocation. By adding a small offset and repeatedly shifting bits, it aligns memory to a higher boundary. This technique was essential in the early days of computing, where every byte mattered. MS-DOS v2.0 had to operate on machines with limited RAM, often shared between the operating system and user programs. Tim Paterson and the Microsoft team likely drew inspiration from similar memory management techniques in Unix-like systems. This routine reflects the ingenuity required to maximize hardware capabilities while adhering to strict constraints. Memory alignment remains a critical concept in modern computing, though it is now handled by sophisticated memory managers and hardware support."
  - id: "device-opening-fallback"
    line_start: 2693
    line_end: 2725
    title: "Fallback mechanism for device opening"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_file"
    image_url: ""
    image_caption: ""
    content: "The OPEN_DEV and associated routines implement a robust mechanism for opening devices, with a fallback to the null device if the requested device cannot be opened. This design ensures system stability and prevents errors during initialization. In the early 1980s, hardware compatibility was a significant challenge, as MS-DOS had to support a wide range of peripherals from various manufacturers. The null device ('NUL') served as a universal placeholder, allowing operations to proceed without disruption. This approach reflects Microsoft's commitment to creating a flexible and resilient operating system. The concept of fallback mechanisms remains relevant today, ensuring reliability in systems ranging from embedded devices to cloud computing platforms."
  - id: "version-display-data"
    line_start: 2777
    line_end: 2811
    title: "Displaying MS-DOS version information"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The TEN routine and associated data define the version string displayed during MS-DOS startup. This simple yet iconic feature reinforced Microsoft's branding and provided users with immediate feedback on the system's version. In the early 1980s, such details were crucial for establishing trust and familiarity with software products. The inclusion of copyright information further emphasized Microsoft's ownership and legitimacy in a rapidly evolving industry. This startup message became a hallmark of MS-DOS and inspired similar branding efforts in other operating systems. While modern systems have moved to graphical interfaces, the legacy of textual startup messages persists in boot logs and command-line tools."
  - id: "config-sys-command-table"
    line_start: 2815
    line_end: 2833
    title: "Compact table for CONFIG.SYS commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/CONFIG.SYS"
    image_url: ""
    image_caption: ""
    content: "This section defines a compact table of commands that MS-DOS parses from the CONFIG.SYS file during boot. Each entry consists of a length byte, the command name, and an identifier character. For example, 'BUFFERS' is encoded as 7 bytes followed by the letter 'B'. This design allows MS-DOS to efficiently recognize and process configuration directives without requiring complex string comparisons. In 1983, MS-DOS 2.0 introduced CONFIG.SYS as part of its Unix-inspired overhaul. The operating system now supported subdirectories, file handles, and device drivers, requiring a way to configure these features at startup. Tim Paterson, who originally wrote 86-DOS, worked with Microsoft engineers to adapt the system for IBM PCs and other OEMs. CONFIG.SYS became a cornerstone of MS-DOS's flexibility, enabling users to customize memory buffers, specify device drivers, and set system parameters. The table here reflects the constraints of early PCs, where memory was scarce and every byte mattered. By associating commands with single-character identifiers, MS-DOS minimized the overhead of parsing. This approach was both practical and forward-thinking, ensuring the system could scale as new features were added. CONFIG.SYS remained a staple of MS-DOS for years, influencing how later operating systems approached startup configuration. Its legacy can be seen in modern boot processes, where configuration files still play a crucial role. The compact encoding here is a reminder of the ingenuity required to make early PCs functional and adaptable."
  - id: "end-of-system-initialization"
    line_start: 2839
    line_end: 2847
    title: "Closing the system initialization segment"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The final lines of SYSINIT.ASM mark the end of the system initialization segment and the overall assembly file. The directive 'SYSINITSEG ENDS' signals the conclusion of the segment that handles boot-time setup, while 'END' indicates the end of the source file itself. These lines are procedural but significant, as they formally close the code that prepares MS-DOS to take control of the machine. By 1983, MS-DOS had become the operating system of choice for IBM PCs and their clones, cementing Microsoft's dominance in the software market. The system initialization code was critical to this success, ensuring that MS-DOS could reliably boot on a wide range of hardware configurations. This reliability was a key selling point, especially as OEMs licensed MS-DOS for their own machines. The structure and organization of SYSINIT.ASM reflect the meticulous attention to detail required to write assembly code for early PCs. Every directive, label, and byte had to be carefully placed to ensure compatibility and performance. The 'END' directive here is the culmination of that effort, signaling that the file is complete and ready to be assembled into executable code. While these closing lines may seem mundane, they represent the final step in a process that transformed personal computing. MS-DOS's ability to initialize and adapt to different hardware configurations laid the groundwork for decades of innovation. Without this foundational code, the PC revolution might have unfolded very differently."

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