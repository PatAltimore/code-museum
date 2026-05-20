---
title: "SKELIO.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/SKELIO.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/SKELIO.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "skelio"
order: 43
description: "This file defines the I/O system for MS-DOS 2.0, showcasing a pivotal evolution in operating system design inspired by Unix."

summary:
  - point: "Device driver tables introduce modularity for handling hardware-specific operations"
    link: "https://en.wikipedia.org/wiki/Device_driver"
    link_label: "Device Driver"
  - point: "Strategy routine simplifies I/O packet handling in a non-multi-tasking environment"
    link: "https://en.wikipedia.org/wiki/Input/output"
    link_label: "I/O"
  - point: "Error handling routines standardize responses to hardware and software issues"
    link: "https://en.wikipedia.org/wiki/Error_handling"
    link_label: "Error Handling"
  - point: "ANSI escape sequence handling reflects early terminal compatibility efforts"
    link: "https://en.wikipedia.org/wiki/ANSI_escape_code"
    link_label: "ANSI Escape Codes"
  - point: "Console I/O routines demonstrate efficient character buffering and processing"
    link: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    link_label: "Buffer"

enhancements:
  - id: "extrn-definitions-for-sysinit"
    line_start: 53
    line_end: 71
    title: "EXTRN Definitions for SYSINIT"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section defines external references for SYSINIT, a key module in MS-DOS responsible for system initialization. These references include pointers to the DOS location, memory size, and device list, among others. At the time, modularity and reusability were critical design principles, especially given the limited memory and processing power of early PCs. Tim Paterson and the Microsoft team designed MS-DOS 2.0 to be adaptable to various hardware configurations, which was essential for its success in the OEM market. These definitions laid the groundwork for the modular architecture that influenced future operating systems like Windows and Linux."
  - id: "init-jump-to-hwinit"
    line_start: 85
    line_end: 153
    title: "INIT: Jump to Hardware Initialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: ""
    image_caption: ""
    content: "The INIT routine begins the hardware initialization process by jumping to HWINIT. This marks the start of the BIOS-level setup for MS-DOS 2.0. In the early 1980s, bootstrapping was a critical step in operating system design, as it ensured compatibility across diverse hardware platforms. The modularity of this approach allowed MS-DOS to be easily adapted for different OEMs. This design philosophy influenced the development of plug-and-play systems in later operating systems, where hardware initialization became increasingly automated and user-friendly."
  - id: "device-driver-headers"
    line_start: 157
    line_end: 233
    title: "Device Driver Headers: Modular Hardware Support"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_driver"
    image_url: ""
    image_caption: ""
    content: "This section defines headers for various devices, including CON (console), AUX (auxiliary), PRN (printer), TIM (clock), and DSK (disk). Each header includes attributes, strategy pointers, interrupt pointers, and device names. In the constrained environment of early PCs, modular device drivers were a breakthrough, enabling MS-DOS to support a wide range of hardware without requiring extensive rewrites. This modularity became a cornerstone of operating system design, influencing not only MS-DOS but also later systems like Windows and Unix, which rely heavily on device drivers for hardware abstraction."
  - id: "dispatch-tables-for-devices"
    line_start: 237
    line_end: 373
    title: "Dispatch Tables for Device Commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_handler"
    image_url: ""
    image_caption: ""
    content: "The dispatch tables map device-specific commands to their corresponding routines. For example, commands like block read, character write, and media checks are defined for devices such as disks, consoles, and printers. This design reflects the influence of Unix, where similar abstractions were used to unify device handling. By centralizing command processing, MS-DOS 2.0 improved maintainability and extensibility. This approach influenced the development of modern APIs and device management systems, where abstraction layers simplify hardware interactions for developers."
  - id: "strategy-routine-for-io-packets"
    line_start: 415
    line_end: 439
    title: "Strategy Routine for I/O Packets"
    wikipedia_url: "https://en.wikipedia.org/wiki/Input/output"
    image_url: ""
    image_caption: ""
    content: "The STRATEGY routine saves I/O packet pointers for later processing by interrupt routines. This simplistic approach was suitable for non-multi-tasking systems like MS-DOS 2.0, where efficiency and simplicity were paramount. By centralizing packet handling, the routine reduced code duplication and streamlined device communication. This concept of packet-based I/O influenced later systems, including network protocols and modern operating systems, where packet processing is a fundamental mechanism for data transfer."
  - id: "error-handling-routines"
    line_start: 619
    line_end: 667
    title: "Error Handling Routines: Standardized Responses"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "This section defines error handling routines, including CMDERR and ERR_EXIT, which standardize responses to various hardware and software errors. Error codes such as 'Drive not ready' and 'Write fault' are mapped to specific routines. In the early 1980s, consistent error handling was crucial for debugging and user experience, especially in an environment where hardware failures were common. These routines set a precedent for standardized error reporting, influencing later systems like Windows and Unix, where clear error codes and messages are integral to system reliability."
  - id: "console-io-routines"
    line_start: 709
    line_end: 783
    title: "Console I/O Routines: Efficient Character Buffering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    image_url: ""
    image_caption: ""
    content: "The console I/O routines handle character buffering and processing for keyboard input. Functions like CISTAT and CINP check for available characters and retrieve them from the buffer. This efficient design minimizes latency and ensures smooth interaction between the user and the system. In the constrained environment of early PCs, such optimizations were vital for performance. These routines influenced the development of modern input handling systems, where buffering and interrupt-driven I/O are standard practices."
  - id: "ansi-escape-sequence-handling"
    line_start: 927
    line_end: 1031
    title: "ANSI Escape Sequence Handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/ANSI_escape_code"
    image_url: ""
    image_caption: ""
    content: "This section implements a minimal ANSI driver to translate ANSI escape sequences into Zenith terminal commands. By supporting standard terminal codes, MS-DOS 2.0 ensured compatibility with a wide range of hardware, including the popular Z-19 terminal. ANSI escape codes were a key feature for text-based interfaces, enabling cursor movement, text formatting, and screen clearing. This implementation influenced later terminal emulators and text-based applications, where ANSI codes remain a standard for terminal control."
  - id: "state-machine-escape-sequences"
    line_start: 1035
    line_end: 1093
    title: "State machine for escape sequences"
    wikipedia_url: "https://en.wikipedia.org/wiki/Escape_sequence"
    image_url: ""
    image_caption: ""
    content: "This section implements a state machine to process escape sequences in text output. The states (ST1, ST2, ST3) handle characters like ESC and '[' to identify and parse control sequences. These sequences allow for advanced text formatting and terminal control, such as cursor movement or screen clearing. At the time, escape sequences were critical for interacting with terminals and printers, as they provided a standardized way to control hardware behavior. Tim Paterson likely adapted this approach from existing terminal standards like ANSI escape codes. This mechanism influenced later systems, including Unix-based terminal emulators and modern console applications, which still rely on escape sequences for text formatting and control."
  - id: "cursor-positioning-routines"
    line_start: 1225
    line_end: 1287
    title: "Cursor positioning routines"
    wikipedia_url: "https://en.wikipedia.org/wiki/ANSI_escape_code"
    image_url: ""
    image_caption: ""
    content: "These routines (CUU, CUD, CUF, CUB, CUP) handle cursor movement and positioning on the screen. Using escape sequences, they allow the program to move the cursor up, down, forward, back, or to a specific position. This functionality was essential for creating text-based user interfaces and interactive applications. In 1983, such features were becoming standard in operating systems, inspired by Unix's terminal capabilities. The routines demonstrate MS-DOS's growing sophistication, transitioning from simple file management to supporting more interactive applications. This approach laid the groundwork for text-based interfaces in software like WordPerfect and early IDEs."
  - id: "auxiliary-port-io"
    line_start: 1455
    line_end: 1629
    title: "Auxiliary port I/O routines"
    wikipedia_url: "https://en.wikipedia.org/wiki/Serial_port"
    image_url: ""
    image_caption: ""
    content: "These routines (AISTAT, AIN, AOUT, AUX_READ, AUX_WRIT) manage input and output for auxiliary ports, typically used for serial communication. They include status checks, non-destructive reads, and destructive reads, ensuring robust handling of data flow. Serial ports were a vital part of early PCs, connecting peripherals like modems and printers. Tim Paterson's implementation reflects the necessity of efficient, low-level control over hardware in the constrained environment of the IBM PC. These routines influenced later serial communication libraries and APIs, such as Windows' COM port handling and Unix's termios."
  - id: "drive-parameter-blocks"
    line_start: 1801
    line_end: 1853
    title: "Drive parameter blocks for disk initialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_partitioning"
    image_url: ""
    image_caption: ""
    content: "This section defines drive parameter blocks (DBP), which describe the physical and logical characteristics of disk drives, including sector size, allocation units, and FAT structures. These blocks were essential for initializing and managing disk drives in MS-DOS. The design reflects the flexibility required to support various disk formats, from single-density floppy disks to double-density drives. This abstraction influenced later developments in disk partitioning and file system design, such as the Master Boot Record (MBR) and GUID Partition Table (GPT) standards."
  - id: "media-check-routine"
    line_start: 1927
    line_end: 2063
    title: "Media check routine for disk changes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Floppy_disk"
    image_url: ""
    image_caption: ""
    content: "The media check routine determines whether a disk has been changed, ensuring data integrity and preventing errors during read/write operations. It uses hardware ports to query the disk's status and density settings. In the early 1980s, floppy disks were the primary storage medium, and detecting disk changes was crucial for reliable operation. This routine highlights MS-DOS's low-level hardware interaction, a hallmark of early operating systems. The technique influenced later systems, including BIOS routines and modern OS-level disk management features."
  - id: "media5-disk-controller-command"
    line_start: 2065
    line_end: 2095
    title: "Sending commands to the 1793 disk controller"
    wikipedia_url: "https://en.wikipedia.org/wiki/Floppy_disk_controller"
    image_url: ""
    image_caption: ""
    content: "This short routine interacts with the 1793 floppy disk controller chip by sending a command and waiting for it to complete. The 1793 was a widely used controller in early personal computers, known for its ability to handle low-level disk operations. At the time, direct hardware manipulation was common in operating systems, as abstracted APIs were not yet prevalent. Tim Paterson and the MS-DOS team designed this routine to ensure reliable communication with the controller, a critical task for disk I/O. This approach influenced later systems by demonstrating the importance of robust hardware interaction routines, which were eventually abstracted into higher-level APIs in modern operating systems."
  - id: "bios-parameter-block-structure"
    line_start: 2145
    line_end: 2195
    title: "Building the BIOS Parameter Block (BPB)"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS_parameter_block"
    image_url: ""
    image_caption: ""
    content: "The GET_BPB routine constructs a BIOS Parameter Block (BPB), a data structure that describes the physical characteristics of a disk. This innovation was inspired by Unix's approach to abstracting hardware details, enabling MS-DOS to manage disks more flexibly. The BPB includes fields for media byte, transfer address, and disk geometry, allowing the operating system to adapt to different disk formats. This design was crucial for MS-DOS's success in the OEM market, as it supported a wide range of hardware configurations. The BPB concept became a standard in operating systems, influencing file system design in Windows and other systems."
  - id: "disk-read-write-operations"
    line_start: 2375
    line_end: 2531
    title: "Handling disk read and write operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_operating_system"
    image_url: ""
    image_caption: ""
    content: "This section implements disk read and write functions, a core feature of MS-DOS. It sets up parameters for the disk controller, including sector size, retries, and error masks, and performs operations using the ROM_CALL routine. The design reflects the constraints of early PCs, where direct hardware control was necessary for performance and compatibility. These routines laid the groundwork for modern disk I/O APIs, influencing operating systems like Windows and Linux. The modular approach to handling different media types also inspired later developments in device driver architecture."
  - id: "disk-error-handling"
    line_start: 2553
    line_end: 2631
    title: "Error handling with lookup tables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_detection_and_correction"
    image_url: ""
    image_caption: ""
    content: "The DERROR routines process disk errors using a lookup table (DERRTAB) to map error codes to specific conditions. This method simplifies error handling by centralizing the logic in a single table, a technique borrowed from earlier systems like CP/M. At the time, robust error handling was critical for reliability, as hardware failures were common. This approach influenced later operating systems by demonstrating the value of structured error management, which became a standard practice in software engineering. The lookup table concept persists in modern systems, where it is used for error codes, configuration settings, and more."
  - id: "rom-call-abstraction"
    line_start: 2635
    line_end: 2659
    title: "Abstracting hardware interaction with ROM_CALL"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS_interrupt_call"
    image_url: ""
    image_caption: ""
    content: "The ROM_CALL routine provides a standardized way to interact with the system's ROM, encapsulating hardware-specific details. This abstraction simplifies development by isolating hardware dependencies, a principle that became foundational in operating system design. Tim Paterson's work on MS-DOS demonstrated the importance of such abstractions, which were later expanded in Windows and other systems. ROM_CALL influenced the development of BIOS interrupt calls, a key feature of PC architecture that persists in modern firmware interfaces like UEFI."
  - id: "hardware-initialization"
    line_start: 2665
    line_end: 2739
    title: "Initializing hardware and memory for MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The HWINIT routine sets up the system stack, initializes memory, and prepares the environment for MS-DOS to operate. This code reflects the constraints of early PCs, where memory was limited and hardware initialization was critical for stability. The routine also establishes key system variables, such as the location of the DOS kernel and available memory size. This initialization process influenced later operating systems by demonstrating the importance of a structured boot sequence, a concept that evolved into modern bootloaders and system initialization frameworks."
  - id: "dosspot-final-section"
    line_start: 2743
    line_end: 2751
    title: "Final code section: DOSSPOT"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The DOSSPOT section marks the end of the SKELIO.ASM file, serving as a placeholder for further code or data. This section reflects the modular design of MS-DOS, where different components could be loaded or replaced as needed. The modularity was a key factor in MS-DOS's success, allowing OEMs to customize the operating system for their hardware. This design philosophy influenced the development of later operating systems, including Windows, which retained a modular architecture to support diverse hardware configurations."

---

       TITLE   IO.SYS for the ALTOS ACS-86C.



; I/O system for Version 2.x of MSDOS.



;This BIOS designed to be linked with the SYSINIT module provided by

;Microsoft



BIOSIZ  EQU     4096            ;Size of BIOS in bytes.

BIOSIZS EQU     100H            ;Size of BIOS in Paragraphs.

ANSI    EQU     0               ;Ansi switch.



;Additional Information for the ALTOS machine.



QSIZE   EQU     100             ;Input queue size.

BIOSSEG EQU     0C0H            ;I/O system segment.

MAX_MEM EQU     4000H           ;Memory size in paragraphs.



; Constants for commands in Altos ROM.



ROM_CONSTA      EQU     01      ;Return status AL of console selected in CX.

ROM_CONIN       EQU     02      ;Get char. from console in CX to AL

ROM_CONOUT      EQU     03      ;Write char. in DL to console in CX.

ROM_PMSG        EQU     07      ;Write string ES:DX to console in CX.

ROM_DISKIO      EQU     08      ;Perform disk I/O from IOPB in ES:CX.

ROM_INIT        EQU     10      ;Returns boot console and top memory ES:DX.



;Things needed to communicate with SYSINIT



EXTRN   SYSINIT:FAR                   ;The entry point of SYSINIT

EXTRN   CURRENT_DOS_LOCATION:WORD     ;Where the DOS is when SYSINIT called

EXTRN   FINAL_DOS_LOCATION:WORD       ;Where I want SYSINIT to put the DOS

EXTRN   DEVICE_LIST:DWORD             ;Pointer to the DEVICE list.

EXTRN   MEMORY_SIZE:WORD              ;Size in paragraphs of Physical memory.

EXTRN   DEFAULT_DRIVE:BYTE            ;Default Drive to use when system booted

EXTRN   BUFFERS:BYTE                  ;Number of default buffers.

                                      ; Leave as is and SYSINIT uses only 2.



CODE    SEGMENT

ASSUME  CS:CODE,DS:CODE,ES:CODE,SS:CODE



        ORG     0               ;Starts at an offset of zero.



INIT:   JMP     HWINIT



        PAGE



        SUBTTL  Device driver tables.



;-----------------------------------------------+

;     DWORD pointer to next device              | 1 word offset.

;         (-1,-1 if last device)                | 1 word segement.

;-----------------------------------------------+

;     Device attribute WORD                     ; 1 word.

;       Bit 15 = 1 for chacter devices.         ;

;                0 for Block devices.           ;

;                                               ;

;       Charcter devices. (Bit 15=1)            ;

;         Bit 0 = 1  current sti device.        ;

;         Bit 1 = 1  current sto device.        ;

;         Bit 2 = 1  current NUL device.        ;

;         Bit 3 = 1  current Clock device.      ;

;                                               ;

;         Bit 13 = 1 for non IBM machines.      ;

;                  0 for IBM machines only.     ;

;         Bit 14 = 1 IOCTL control bit.         ;

;-----------------------------------------------+

;     Device strategy pointer.                  ; 1 word offset.

;-----------------------------------------------+

;     Device interrupt pointer.                 ; 1 word offset.

;-----------------------------------------------+

;     Device name field.                        ; 8 bytes.

;       Character devices are any valid name    ;

;         left justified, in a space filled     ;

;         field.                                ;

;       Block devices contain # of units in     ;

;         the first byte.                       ;

;-----------------------------------------------+



DEVSTART LABEL WORD

CONDEV:                         ;Header for device CON

        DW      AUXDEV,BIOSSEG  ;Link to next device

        DW      8003H           ;Attributes - console input, output device

        DW      STRATEGY        ;Srategy entry point

        DW      CON_INT         ;Interrupt entry point

        DB      "CON     "      ;Device name



AUXDEV:                         ;Header for device AUX

        DW      PRNDEV,BIOSSEG

        DW      8000H

        DW      STRATEGY

        DW      AUX_INT

        DB      "AUX     "



PRNDEV:                         ;Header for device PRN

        DW      TIMDEV,BIOSSEG

        DW      8000H

        DW      STRATEGY

        DW      PRN_INT

        DB      "PRN     "



TIMDEV:                         ;Header for device CLOCK

        DW      DSKDEV,BIOSSEG

        DW      8008H

        DW      STRATEGY

        DW      TIM_INT

        DB      "CLOCK   "



DSKDEV:                         ;Header for disk devices

        DW      -1,-1           ;Last device

        DW      2000H           ;Is a block device

        DW      STRATEGY

        DW      DSK_INT

DRVMAX  DB      1               ;Number of Units

        DB      7 DUP (?)



        PAGE

        SUBTTL  Dispatch tables for each device.



DSKTBL: DW      DSK_INIT        ;0  - Initialize Driver.

        DW      MEDIAC          ;1  - Return current media code.

        DW      GET_BPB         ;2  - Get Bios Parameter Block.

        DW      CMDERR          ;3  - Reserved. (currently returns error)

        DW      DSK_RED         ;4  - Block read.

        DW      BUS_EXIT        ;5  - (Not used, return busy flag)

        DW      EXIT            ;6  - Return status. (Not used)

        DW      EXIT            ;7  - Flush input buffer. (Not used.)

        DW      DSK_WRT         ;8  - Block write.

        DW      DSK_WRV         ;9  - Block write with verify.

        DW      EXIT            ;10 - Return output status.

        DW      EXIT            ;11 - Flush output buffer. (Not used.)

        DW      EXIT            ;12 - IO Control.



CONTBL: DW      EXIT            ;0  - Init. (Not used)

        DW      EXIT            ;1  - Media check (Not used)

        DW      EXIT            ;2  - Get Bios Parameter Block (Not used)

        DW      CMDERR          ;3  - Reserved. (Currently returns error)

        DW      CON_READ        ;4  - Character read. (Destructive)

        DW      CON_RDND        ;5  - Character read. (Non-destructive)

        DW      EXIT            ;6  - Return status. (Not used)

        DW      CON_FLSH        ;7  - Flush Input buffer.

        DW      CON_WRIT        ;8  - Character write.

        DW      CON_WRIT        ;9  - Character write with Verify.

        DW      CON_WRST        ;10 - Character write status.

        DW      EXIT            ;11 - Flush output buffer. (Not used.)

        DW      EXIT            ;12 - IO Control.



AUXTBL: DW      EXIT            ;0  - Init. (Not used)

        DW      EXIT            ;1  - Media check (Not used)

        DW      EXIT            ;2  - Get Bios Parameter Block (Not used)

        DW      CMDERR          ;3  - Reserved. (Returns an error)

        DW      AUX_READ        ;4  - Character read. (Destructive)

        DW      AUX_RDND        ;5  - Character read. (Non-destructive)

        DW      EXIT            ;6  - Return status. (Not used)

        DW      AUX_CLR         ;7  - Flush Input buffer.

        DW      AUX_WRIT        ;8  - Character write.

        DW      AUX_WRIT        ;9  - Character write with verify.

        DW      AUX_WRST        ;10 - Character write status.

        DW      EXIT            ;11 - Flush output buffer. (Not used.)

        DW      EXIT            ;12 - IO Control.



TIMTBL: DW      EXIT            ;0  - Init. (Not used)

        DW      EXIT            ;1  - Media check (Not used)

        DW      EXIT            ;2  - Get Bios Parameter Block (Not used)

        DW      CMDERR          ;3  - Reserved. (Currently returns an error)

        DW      TIM_RED         ;4  - Character read. (Destructive)

        DW      BUS_EXIT        ;5  - (Not used, returns busy flag.)

        DW      EXIT            ;6  - Return status. (Not used)

        DW      EXIT            ;7  - Flush Input buffer. (Not used)

        DW      TIM_WRT         ;8  - Character write.

        DW      TIM_WRT         ;9  - Character write with verify.

        DW      EXIT            ;10 - Character write status. (Not used)

        DW      EXIT            ;11 - Flush output buffer. (Not used)

        DW      EXIT            ;12 - IO Control.



PRNTBL: DW      EXIT            ;0  - (Not used)

        DW      EXIT            ;1  - (Not used)

        DW      EXIT            ;2  - Block (Not used)

        DW      CMDERR          ;3  - Reserved. (currently returns error)

        DW      EXIT            ;4  - (Not used)

        DW      BUS_EXIT        ;5  - (Not used, returns busy flag.)

        DW      EXIT            ;6  - (Not used)

        DW      EXIT            ;7  - (Not used)

        DW      PRN_WRT         ;8  - Character write.

        DW      PRN_WRT         ;9  - Character write with verify.

        DW      PRN_STA         ;10 - Character write status.

        DW      EXIT            ;11 - (Not used.)

        DW      EXIT            ;12 - IO Control.



        PAGE

        SUBTTL  Strategy and Software Interrupt routines.



;Define offsets for io data packet



IODAT   STRUC

CMDLEN  DB      ?               ;LENGTH OF THIS COMMAND

UNIT    DB      ?               ;SUB UNIT SPECIFIER

CMD     DB      ?               ;COMMAND CODE

STATUS  DW      ?               ;STATUS

        DB      8 DUP (?)

MEDIA   DB      ?               ;MEDIA DESCRIPTOR

TRANS   DD      ?               ;TRANSFER ADDRESS

COUNT   DW      ?               ;COUNT OF BLOCKS OR CHARACTERS

START   DW      ?               ;FIRST BLOCK TO TRANSFER

IODAT   ENDS



PTRSAV  DD      0               ;Strategy pointer save.



;

; Simplistic Strategy routine for non-multi-Tasking system.

;

;   Currently just saves I/O packet pointers in PTRSAV for

;   later processing by the individual interrupt routines.

;



STRATP  PROC    FAR



STRATEGY:

        MOV     WORD PTR CS:[PTRSAV],BX

        MOV     WORD PTR CS:[PTRSAV+2],ES

        RET



STRATP  ENDP



;

; Console interrupt routine for processing I/O packets.

;



CON_INT:

        PUSH    SI

        MOV     SI,OFFSET CONTBL

        JMP     SHORT ENTRY



;

; Auxilary interrupt routine for processing I/O packets.

;



AUX_INT:

        PUSH    SI

        MOV     SI,OFFSET AUXTBL

        JMP     SHORT ENTRY



;

; Printer interrupt routine for processing I/O packets.

;



PRN_INT:

        PUSH    SI

        MOV     SI,OFFSET PRNTBL

        JMP     SHORT ENTRY



;

; Clock interrupt routine for processing I/O packets.

;



TIM_INT:

        PUSH    SI

        MOV     SI,OFFSET TIMTBL

        JMP     SHORT ENTRY



;

; Disk interrupt routine for processing I/O packets.

;



DSK_INT:

        PUSH    SI

        MOV     SI,OFFSET DSKTBL



;

; Common program for handling the simplistic I/O packet

;   processing scheme in MSDOS 2.0

;



ENTRY:  PUSH    AX              ;Save all nessacary registers.

        PUSH    CX

        PUSH    DX

        PUSH    DI

        PUSH    BP

        PUSH    DS

        PUSH    ES

        PUSH    BX



        LDS     BX,CS:[PTRSAV]  ;Retrieve pointer to I/O Packet.



        MOV     AL,[BX.UNIT]    ;AL = Unit code.

        MOV     AH,[BX.MEDIA]   ;AH = Media descriptor.

        MOV     CX,[BX.COUNT]   ;CX = Contains byte/sector count.

        MOV     DX,[BX.START]   ;DX = Starting Logical sector.



        XCHG    DI,AX           ;Move Unit & Media into DI temporarily.

        MOV     AL,[BX.CMD]     ;Retrieve Command type. (1 => 11)

        XOR     AH,AH           ;Clear upper half of AX for calculation.

        ADD     SI,AX           ;Compute entry pointer in dispatch table.

        ADD     SI,AX

        CMP     AL,11           ;Verify that not more than 11 commands.

        JA      CMDERR          ;Ah, well, error out.

        XCHG    AX,DI           ;Move Unit & Media back where they belong.

        LES     DI,[BX.TRANS]   ;DI contains addess of Transfer address.

                                ;ES contains segment.

        PUSH    CS

        POP     DS              ;Data segment same as Code segment.

        JMP     [SI]            ;Perform I/O packet command.



        PAGE

        SUBTTL  Common error and exit points.



BUS_EXIT:                       ;Device busy exit.

        MOV     AH,00000011B    ;Set busy and done bits.

        JMP     SHORT EXIT1



CMDERR: MOV     AL,3            ;Set unknown command error #.



;

;  Common error processing routine.

;   AL contains actual error code.

;

;   Error # 0 = Write Protect violation.

;           1 = Unkown unit.

;           2 = Drive not ready.

;           3 = Unknown command in I/O packet.

;           4 = CRC error.

;           5 = Bad drive request structure length.

;           6 = Seek error.

;           7 = Unknown media discovered.

;           8 = Sector not found.

;           9 = Printer out of paper.

;          10 = Write fault.

;          11 = Read fault.

;          12 = General failure.

;



ERR_EXIT:

        MOV     AH,10000001B    ;Set error and done bits.

        STC                     ;Set carry bit also.

        JMP     SHORT EXIT1     ;Quick way out.



EXITP   PROC    FAR             ;Normal exit for device drivers.



EXIT:   MOV     AH,00000001B    ;Set done bit for MSDOS.

EXIT1:  LDS     BX,CS:[PTRSAV]

        MOV     [BX.STATUS],AX  ;Save operation compete and status.



        POP     BX              ;Restore registers.

        POP     ES

        POP     DS

        POP     BP

        POP     DI

        POP     DX

        POP     CX

        POP     AX

        POP     SI

        RET                             ;RESTORE REGS AND RETURN

EXITP   ENDP



        PAGE

        SUBTTL  Main console I/O section.



MCON    DW      0001H

PCON    DW      0002H

ACON    DW      0003H



CHAR    DB      ?               ;Small typeahead buffer for now.



;

; Console keyboard handler.

;



CISTAT: PUSH    CX              ;Save CX pair.

        MOV     AL,[CHAR]

        OR      AL,AL

        JNZ     CISTA9          ;Character still in buffer.

CISTA1: MOV     BX,ROM_CONSTA

        MOV     CX,[MCON]

        CALL    ROM_CALL        ;See if character waiting.

        TEST    AL,AL

        JZ      CISTA9

        MOV     BX,ROM_CONIN

        MOV     CX,[MCON]

        CALL    ROM_CALL        ;Get character from Rom.

        OR      AL,AL

        JZ      CISTA1          ;Got a null character.

        MOV     [CHAR],AL

CISTA9: POP     CX              ;Can't lose CX pair.

        RET



;

; Get a character from the buffer queue.

;



CINP:   CALL    CISTAT          ;Check for character ready in queue.

        JZ      CINP            ;Cycle until one ready.

        MOV     [CHAR],0        ;We have character in AL, clear type a head.

        RET



;

; Console read non-destructive.

;



CON_RDND:

        CALL    CISTAT          ;See if character ready.

        JZ      CON_RDN2        ;No, return busy signal.

CON_RDN1:

        LDS     BX,CS:[PTRSAV]

        MOV     [BX.MEDIA],AL

        JMP     EXIT

CON_RDN2:

        JMP     BUS_EXIT



;

; Console destructive read.

;



CON_READ:

        CALL    CINP            ;Get character.

        STOSB                   ;Save it in users buffer.

        LOOP    CON_READ        ;Loop until CX is exhausted.

        JMP     EXIT



;

; Console flush routine. (ctrl-c, ctrl-f, or ctrl-s inspired)

;



CON_FLSH:

        MOV     [CHAR],0        ;Clear small type a head buffer.

        JMP     EXIT



;

; Console output status routine.

;



CON_WRST:

        JMP     EXIT            ;Yes, normal exit.



;

; Console output routine.

;



CON_WRIT:

        MOV     SI,DI           ;Get destination to source.

CON_WRI1:

        LODS    BYTE PTR ES:[SI]

        PUSH    CX

IF      ANSI

        CALL    CONOUT          ;Call ansi driver.

        ENDIF

IFE     ANSI

        CALL    OUTCHR

        ENDIF

        POP     CX

        LOOP    CON_WRI1        ;Keep going until user buffer through.

        JMP     EXIT



;

; Console character output routine.

;



OUTCHR: MOV     BX,ROM_CONOUT

        MOV     CX,[MCON]       ;Get current console port.

        MOV     DL,AL

        CALL    ROM_CALL

        RET



        PAGE



IF      ANSI



        SUBTTL  ANSI interface section.



;

;ANSI Info and routines. ANSI driver implemented as a finite state automata

;This ANSI driver translates the ANSI standard escape sequences into the

; Zenith Escape sequences used on the Zenith(Heath) Z(H)-19 terminal.

;This is not a full implementation of ANSI, but rather a minimal implementation

; which implements all of the necessary ANSI functions.

;



ESC     EQU     1BH             ;Escape character used in this implementation.

STATE   DW      ST1             ;Current ANSI character state.

PRMPNT  DW      PARMS           ;Current parameter pointer.

PARMS   DB      0,0,0,0,0,0,0   ;Allow for up to eight parameters.

LASTPRM DB      0               ;With this being the eight one.



CMDTABL DB      'A'             ;Cursor up.  "esc","[",#,"A"

        DW      CUU

        DB      'B'             ;Cursor down. "esc","[",#,"B"

        DW      CUD

        DB      'C'             ;Cursor forward. "esc","[",#,"C"

        DW      CUF

        DB      'D'             ;Cursor back. "esc","[",#,"D"

        DW      CUB

        DB      'H'             ;Direct cursor posit. "esc","[",x,y,"H"

        DW      CUP

        DB      'J'             ;Erase. "esc","[",code,"J"

        DW      ED

        DB      'K'             ;Erase in line. "esc","[",code,"K"

        DW      EL

        DB      'f'             ;Direct cursor posit. "esc","[",x,y,"f"

        DW      CUP

        DB      'm'             ;Special video mode. "esc","[",code,"m"

        DW      SGR

        DB      's'             ;Save cursor posit. "esc","[","s"

        DW      PSCP

        DB      'u'             ;Move cursor to saved. "esc","[","u"

        DW      PRCP

        DB      00              ;End of table.



;

; ANSI console output driver.

;



CONOUT: MOV     DI,OFFSET STATE ;Retrieve current ansi state.

        JMP     [DI]            ;Jump to it.



;

; State one (1).

;   Looks for an Escape character.

;



ST1:    CMP     AL,ESC          ;See if this the first character is ESC.

        JNZ     OUTCHR          ;No, treat as regular character output.

        MOV     WORD PTR [DI],OFFSET ST2        ;Yes, setup state two.

        RET



;

; State two (2).

;   Looks for the "[" character.

;



ST2:    CMP     AL,'['          ;See if a valide state two.

        JNZ     OUTCHR          ;No, treat as regular charcter

        MOV     BX,OFFSET PARMS ;Yes, get parameter pointer.

        MOV     WORD PTR [PRMPNT],BX    ;Setup in pointer index.

        MOV     WORD PTR [BX],0 ;Clear first entry.

        MOV     WORD PTR [DI],OFFSET ST3;Setup for state three.

        RET



;

; State three (3).

;   Entered one or more times for parameter passing.

;



ST3:    CMP     AL,';'          ;Look for decimal # seperator.

        JNZ     ST3A            ;No check phase A.

        INC     WORD PTR [PRMPNT]       ;Yes, incr. pointer to next param.

        MOV     AX,OFFSET LASTPRM       ;Check for outside parameter list.

        CMP     [PRMPNT],AX

        JBE     RETST3          ;Yes, proceed with next parameter.

        MOV     [PRMPNT],AX     ;No, treat as extentsion to old.

RETST3: MOV     DI,[PRMPNT]     ;Setup for next parameter.

        MOV     BYTE PTR [DI],0 ;Pre-Initialize it to zero.

        RET



;

; State three A (3A).

;   Check for a ascii digit.

;



ST3A:   CMP     AL,'0'          ;Check for ASCII digit.

        JB      ST3B            ;No, check for seconday command character.

        CMP     AL,'9'          ;Still checking for ASCII digit.

        JA      ST3B            ;No, it must be a secondary.

        SUB     AL,'0'          ;Convert to binary.

        MOV     DI,[PRMPNT]     ;Get the current parameter pointer.

        XCHG    [DI],AL         ;Get existing #.

        MOV     AH,10           ;Scale by 10.

        MUL     AH

        ADD     [DI],AL         ;Add to new digit.

        RET



;

; State three B (3B).

;   Wasn't a ascii digit, so check for secondary command.

;



ST3B:   MOV     [DI],OFFSET ST1         ;Preset STATE to state 1 just in case.

        MOV     DI,OFFSET PARMS-1       ;Get pointer to start of parameters.

        MOV     [PRMPNT],DI             ;Save it in Parameter pointer.

        MOV     DI,OFFSET CMDTABL-3     ;Get start of Secondary command table.



ST3B1:  ADD     DI,3            ;Update Command table pointer.

        CMP     BYTE PTR [DI],0 ;Check for end of table.

        JNZ     ST3B2           ;No, continue processing.

        JMP     OUTCHR          ;Yes, treat as regular character.

ST3B2:  CMP     AL,[DI]         ;Check for valid. command.

        JNZ     ST3B1           ;No, keep checking.

        JMP     [DI+1]          ;Yes, transfer to that secondary command.



;

; Get binary parameter from storage and return a one if = 0

;



GETONE: CALL    GETPARM         ;Get parameter form list.

        OR      AL,AL           ;Verify for non-zero.

        JNZ     GETRET          ;Good, then return to caller.

        INC     AL              ;Bad, make it at least a one.

GETRET: CBW                     ;Sign extend AL.

        MOV     CX,AX           ;Copy of it to CX.

        RET



GETPARM:INC     WORD PTR [PRMPNT]       ;Increment parameter pointer.

GOTPARM:MOV     DI,[PRMPNT]     ;Get parameter pointer.

        MOV     AL,[DI]         ;Get parameter value.

        RET



;

; Send escape, character sequence.

;



OUTESC: MOV     AL,ESC          ;Send escape character.

        CALL    OUTCHR

        MOV     AL,BL           ;Send follow character.

        JMP     OUTCHR



;

; Cursor Positioning routines.

;



CUU:    MOV     BL,'A'          ;Cursor up.

        JMP     SHORT CURPOS

CUD:    MOV     BL,'B'          ;Cursor down.

        JMP     SHORT CURPOS

CUF:    MOV     BL,'C'          ;Cursor forward.

        JMP     SHORT CURPOS

CUB:    MOV     BL,'D'          ;Cursor back.



CURPOS: CALL    GETONE          ;Get number of positions to move into CX.

MOVCUR: CALL    OUTESC          ;Send escape, command characters.

        LOOP    MOVCUR          ;Keep moving until done.

        RET



;

; Direct cursor positioning routine.

;



CUP:    CALL    GETONE          ;Get X position.

        MOV     DX,AX           ;Save in DX.

        CALL    GETONE          ;Get Y position.

        MOV     BL,'Y'

        CALL    OUTESC          ;Send escape, "Y" sequence.

        MOV     AL,DL

        ADD     AL,' '-1        ;Convert binary to Character.

        CALL    OUTCHR          ;Send X posit.

        MOV     AL,CL

        ADD     AL,' '-1        ;Convert binary to Character.

        JMP     OUTCHR          ;Send Y posit.



;

; Erase all/part of screen.

;



ED:     CALL    GETPARM         ;Get trinary command type.

        MOV     BL,'b'

        DEC     AL              ;See if erase from begining of screen.

        JZ      ED1             ;Yes, perform ZDS function.

        MOV     BL,'E'

        DEC     AL              ;See if erase from end of screen.

        JZ      ED1             ;Yes, perform ZDS function.

        MOV     BL,'J'          ;Now we assume erase whole screen.

ED1:    JMP     OUTESC



;

; Erase all/part of a line.

;



EL:     CALL    GETPARM         ;Get trinary command type.

        MOV     BL,'o'

        DEC     AL              ;See if erase from begining of line.

        JZ      EL1             ;Yes, perform ZDS function.

        MOV     BL,'l'

        DEC     AL              ;See if erase whole line.

        JZ      EL1             ;Yes, perform ZDS function.

        MOV     BL,'K'          ;Now we assume erase to end of line.

EL1:    JMP     OUTESC



;

; Special video modes.

;



SGR:    CALL    GETPARM         ;Get trinary command type.

        MOV     BL,'p'

        CMP     AL,7            ;See if enter reverse video mode.

        JZ      SGR2            ;Yes, perform ZDS function.

        MOV     BL,'q'

        OR      AL,AL           ;See if exit reverse video mode.

        JNZ     SGR3            ;No, ignore.

SGR2:   CALL    OUTESC

SGR3:   RET



;

; Save / restore cursor position.

;



PSCP:   MOV     BL,'j'          ;Set save cursor posit. mode.

        JMP     OUTESC



PRCP:   MOV     BL,'k'          ;Restore last cursor save.

        JMP     OUTESC



        ENDIF





        PAGE

        SUBTTL  Printer buffer handler.



;

; Printer status routine.

;



PRN_STA:

        JMP     EXIT



;

; Printer write routine.

;



PRN_WRT:MOV     SI,DI           ;Set source = destination index.



PRN_WR1:LODS    BYTE PTR ES:[SI];Get a data byte.

        PUSH    CX

        MOV     CX,[PCON]

        MOV     BX,ROM_CONOUT

        MOV     DL,AL

        CALL    ROM_CALL

        POP     CX

        LOOP    PRN_WR1

        RET



        PAGE

        SUBTTL  Auxilary I/O routines.



AUXCHAR DB      0               ;Temporary AUX ahead storage.



;

; Status routine for Auxilary port.

;



AISTAT: MOV     AL,[AUXCHAR]

        TEST    AL,AL

        JNZ     AISTA9          ;Character already waiting.

        MOV     CX,[ACON]

        MOV     BX,ROM_CONSTA

        CALL    ROM_CALL

        TEST    AL,AL

        JZ      AISTA9          ;Still none waiting.

        MOV     CX,[ACON]

        MOV     BX,ROM_CONIN

        CALL    ROM_CALL

AISTA9: MOV     [AUXCHAR],AL

        RET



;

; Auxilary port read.

;



AIN:    CALL    AISTAT          ;Get status and/or char.

        JZ      AIN             ;Cycle until one is ready.

        MOV     [AUXCHAR],0

        RET



;

; Write routine for Auxilary port.

;



AOUT:   MOV     CX,[ACON]

        MOV     BX,ROM_CONOUT

        MOV     DL,AL

        CALL    ROM_CALL

        RET



;

; Non-Destructive Auxilary read routine.

;



AUX_RDND:

        CALL    AISTAT          ;Get status and copy of char. waiting if any.

        JZ      AUX_RDN2        ;No character waiting, exit.

        JMP     CON_RDN1

AUX_RDN2:

        JMP     BUS_EXIT



;

; Destructive Auxilary read routine.

;



AUX_READ:

        CALL    AIN             ;Get data character.

        STOSB                   ;Save it through DI.

        LOOP    AUX_READ        ;Cycle until user buffer full.

        JMP     EXIT



;

; Auxilary clear type a head.

;



AUX_CLR:

        MOV     [AUXCHAR],0

        JMP     EXIT



;

; Auxilary write port status.

;



AUX_WRST:

        JMP     EXIT



;

; Auxilary write.

;



AUX_WRIT:

        MOV     SI,DI

AUX_WRI1:

        LODS    BYTE PTR ES:[SI]        ;Get char. from users buffer.

        CALL    AOUT            ;Send it to device.

        LOOP    AUX_WRI1        ;Cycle until all done.

        JMP     EXIT



        PAGE

        SUBTTL  Date/Time Routines.



TIM_DAYS: DB    2 DUP (?)       ;Number of days since 1-1-80.

TIM_MINS: DB    ?               ;Minutes.

TIM_HRS:  DB    ?               ;Hours.

TIM_HSEC: DB    ?               ;Hundreths of a second.

TIM_SECS: DB    ?               ;Seconds.



;

; Time write routine.

;



TIM_WRT:

        MOV     SI,OFFSET TIM_DAYS

        XCHG    SI,DI

        PUSH    ES

        MOV     AX,DS

        POP     DS

        MOV     ES,AX

        MOV     CX,6

        REP     MOVSB

        MOV     AL,0

        JMP     EXIT



;

; Time read routine.

;



TIM_RED:

        MOV     SI,OFFSET TIM_DAYS

        MOV     CX,6

        REP     MOVSB

        MOV     AL,0

        JMP     EXIT



        PAGE

        SUBTTL  8089 Monitor structure.



;

; Structure to reference 8089 and ROM command table.

;



SIOPB   STRUC

        DB      4 DUP (?)       ;Monitor Use Only

OPCODE  DB      ?               ;I/O operation code.

DRIVE   DB      ?               ;Logical drive spec.

TRACK   DW      ?               ;Logical track number.

HEAD    DB      ?               ;Logical head number.

SECTOR  DB      ?               ;Logical sector to start with.

SCOUNT  DB      ?               ;Number of logical sectors in buffer.

RETCODE DB      ?               ;Error code after masking.

RETMASK DB      ?               ;Error mask.

RETRIES DB      ?               ;Number of retries before error exit.

DMAOFF  DW      ?               ;Buffer offset address.

DMASEG  DW      ?               ;Buffer segment.

SECLENG DW      ?               ;Sector Length.

        DB      6 DUP (?)       ;8089 use only.

SIOPB   ENDS



IOPB    SIOPB   <,00H,0,0,0,0,0,0,000H,0,0,0,0,>



        PAGE

        SUBTTL  Drive Tables.





;

; MSDOS drive initialization tables and other what not.

;

;  Drive 0 is:

;               Single sided, Single density, 77 track with 26

;               128 byte sectors per track.  One sector for

;               boot and header.  (256,128 bytes free, old style).

;       or

;               Single sided, Single density, 77 track with 26

;               128 byte sectors per track.  Four sectors for

;               boot and header. (255,744 bytes free).

;       or

;               Single sided, Double Density, 75 track with 12

;               512 byte sectors per track.

;               (460,800 bytes)

;               Two hidden single density tracks.

;



DBP     STRUC



JMPNEAR DB      3 DUP (?)       ;Jmp Near xxxx  for boot.

NAMEVER DB      8 DUP (?)       ;Name / Version of OS.



;-------  Start of Drive Parameter Block.



SECSIZE DW      ?               ;Sector size in bytes.                  (dpb)

ALLOC   DB      ?               ;Number of sectors per alloc. block.    (dpb)

RESSEC  DW      ?               ;Reserved sectors.                      (dpb)

FATS    DB      ?               ;Number of FAT's.                       (dpb)

MAXDIR  DW      ?               ;Number of root directory entries.      (dpb)

SECTORS DW      ?               ;Number of sectors per diskette.        (dpb)

MEDIAID DB      ?               ;Media byte ID.                         (dpb)

FATSEC  DW      ?               ;Number of FAT Sectors.                 (dpb)



;-------  End of Drive Parameter Block.



SECTRK  DW      ?               ;Number of Sectors per track.



DBP     ENDS



LSDRIV1 DBP     <,,128,4,1,2,68,2002,0FEH,6,26>



LSDRIV2 DBP     <,,128,4,4,2,68,2002,0FDH,6,26>



LDDRIV1 DBP     <,,512,1,24,2,128,924,0F8H,3,12>



LDDRIV2	DBP	<,,1024,1,16,2,128,616,0F9H,1,8>



DSK_INIT:

	MOV     AX,1

        MOV     SI,OFFSET INITTAB

        JMP     GET_BP5



INITTAB:

        DW      LDDRIV2.SECSIZE



DSTAT   EQU     41H             ;1793 status port.

DTRACK  EQU     43H             ;1793 track port.

DSECTOR EQU     45H             ;1793 sector port.

DDATA   EQU     47H             ;1793 data I/O port.



DDENS   EQU     55H             ;Density select port.

DDBIT	EQU	04H		;Density select bit.

DSELECT EQU     53H             ;Drive select port.



CURDRV  DB      0

DRVTAB  DB      0EH,0DH,0BH,07H

TRKPT   DB      0,1,2,3

TRKTAB  DB      -1,-1,-1,-1

PREDENS DB      0,0,0,0



        PAGE

        SUBTTL  Media check routine



;

; Media check routine.

; On entry:

;       AL = disk unit number.

;       AH = media byte

; On exit:

;

;       [MEDIA FLAG] = -1 (FF hex) if disk is changed.

;       [MEDIA FLAG] = 0 if don't know.

;       [MEDIA FLAG] = 1 if not changed.

;

;       [MEDIA] = 0FEH for Standard single density.

;       [MEDIA] = 0FDH for Altos single density.

;       [MEDIA] = 0F4H for Altos double density.

;



MEDIAS  STRUC

        DB      13 DUP(?)               ;Static request header.

MEDIAS1 DB      ?                       ;Media byte.

MEDIAS2 DB      ?                       ;Media status byte flag.

MEDIAS  ENDS



MEDIAC: 

	AND	AL,03H		;Clear any extraneous bits.

	PUSH    AX              ;Save drive number requested.

	MOV	AL,0D0H		;Terminate with no interrupt.

	CALL	DCOM

        AND     AL,20H          ;See if head load bit set.

        POP     AX

        JZ	MEDIA2		;Head not loaded, so see if media changed.

        MOV     AH,1            ; AH = 1, disk not changed.

	JMP	SHORT MEDIA1



MEDIA1A:MOV	[PREDENS],DL	;Save last density used for read.



MEDIA1: LDS     BX,[PTRSAV]     ;Udate media section of data block.

        MOV     [BX.MEDIAS2],AH

	MOV	AL,0

        JMP     EXIT



MEDIA2: CALL    MEDIA4          ;Unload head if selecting new drive.

        MOV     CX,2            ;Try each density once.

	MOV	BX,OFFSET DRVTAB

	XLAT			;Convert from drive # to select code.

        OUT     DSELECT,AL      ;Select disk

	MOV	AH,0		;Assume that we don't know.

	MOV	DL,[PREDENS]	;Get last density.

	AND	DL,DDBIT	;Be sure only Density bit set/clr.

MEDIA3:	IN	AL,DDENS

	AND	AL,0FBH		;Clear density bit.

	OR	AL,DL		;Set/clear density bit.

        OUT     DDENS,AL        ;Select density.

        MOV     AL,0C4H         ;READ ADDRESS command

        CALL    DCOM

        AND     AL,98H

        IN      AL,DDATA        ;Eat last byte to reset DRQ

        JZ      MEDIA1A         ;Jump if no error in reading address.

        MOV     AH,0FFH         ; AH = -1 (disk changed) if new density works.

        XOR     DL,DDBIT	;Flip density bit.

        LOOP    MEDIA3

        MOV     AX,2            ;Couldn't read disk at all, AH = 0 for don't

        JMP     ERR_EXIT        ;  know if disk changed, AL = error code 2 -



MEDIA4: MOV     AH,AL           ;Save disk drive number in AH.

        XCHG    AL,[CURDRV]     ;make new drive current, AL = previous

        CMP     AL,AH           ;Changing drives?

        JZ      MEDIA5          ;No, return to caller.

;

; If changing drives, unload head so the head load delay one-shot

; will fire again. Do it by seeking to same track with the H bit reset.

;

        IN      AL,DTRACK       ;Get current track number

        OUT     DDATA,AL        ;Make it the track to seek to

        MOV     AL,10H          ;Seek and unload head

        CALL    DCOM

        MOV     AL,AH           ;Restore current drive number

MEDIA5: RET



;

; Short routine to send a command to 1793 diskette controller chip and

; wait for 1793 to complete the command.

;



DCOM:   OUT     41H,AL          ;Send command to 1793.

        MOV     CX,10H

DCOM1:  LOOP    DCOM1           ;Wait a short time for 1793 to digest it.



DCOM2:  IN      AL,41H          ;Get 1793's status.

        AND     AL,1            ;See if busy.

        JNZ     DCOM2           ;Yes, keep checking.

        IN      AL,41H          ;Get 1793's status for return

        RET



        PAGE

        SUBTTL  Build and return Bios Parameter Block for a diskette.



;

; Build Bios Parameter Blocks.

;

;       On entry:  ES:DI contains the address of a scratch sector buffer.

;                  AL = Unit number.

;                  AH = Current media byte.

;

;       On exit:   Return a DWORD pointer to the associated BPB

;                  in the Request packet.

;



BPBS    STRUC

        DB      13 DUP(?)               ;Static request header.

BPB1    DB      ?                       ;Media byte.

BPB2    DW      ?                       ;DWORD transfer address.

        DW      ?

BPB3    DW      ?                       ;DWORD pointer to BPB

        DW      ?

BPBS    ENDS



GET_BPB:

	PUSH    ES

        PUSH    DI

        MOV     [IOPB.DMASEG],ES

        MOV     [IOPB.DMAOFF],DI

	MOV	BYTE PTR[IOPB.SECTOR],1

	MOV	BYTE PTR[IOPB.SCOUNT],1

	MOV	BYTE PTR[IOPB.OPCODE],088H

	MOV	BYTE PTR[IOPB.RETRIES],1

	MOV	BYTE PTR[IOPB.DRIVE],0

	MOV	[IOPB.TRACK],0

	MOV	BYTE PTR[IOPB.HEAD],1

	MOV	BYTE PTR[IOPB.RETMASK],0DCH

	MOV	[IOPB.SECLENG],128

        MOV     BX,ROM_DISKIO

        MOV     CX,OFFSET IOPB

        PUSH    CS

        POP     ES

        CALL    ROM_CALL        ;Read sector zero for information.

	PUSH	CS

	POP	DS

	POP	DI

        POP     ES

        MOV     AH,[IOPB.RETCODE]

        OR      AH,AH

	JNZ	GET_BP3		;Disk error, assume old single density.



GET_BP1:MOV     AL,ES:[DI.MEDIAID] ;Get diskettes media ID.

        MOV     SI,OFFSET LSDRIV2

        CMP     AL,[SI.MEDIAID]

        JZ      GET_BP4

        MOV     SI,OFFSET LDDRIV1

        CMP     AL,[SI.MEDIAID]

        JZ      GET_BP4

	MOV	SI,OFFSET LDDRIV2

	CMP	AL,[SI.MEDIAID]

	JZ	GET_BP4



GET_BP3:MOV     SI,OFFSET LSDRIV1 ;No compares, assume old style for now.



GET_BP4:MOV     AL,[SI.MEDIAID]

        ADD     SI,11           ;Convert to DPB pointer



GET_BP5:LDS     BX,[PTRSAV]     ;Update I/O data packet.

        MOV     [BX.BPB1],AL    ;Media byte.

        MOV     [BX.BPB3],SI    ;DPB pointer.

        MOV     [BX.BPB3+2],CS  ;Code segment.

	OR	AH,AH

	JNZ	GET_BP6

	MOV	AL,0

	JMP     EXIT

GET_BP6:MOV	AX,7

	JMP	ERR_EXIT



        PAGE



        SUBTTL  Disk I/O equates.



;       Floppy drives



;      --------------------------

;         Hardware command def.

;      --------------------------

;

;            Read command    = 88 hex.

;            Write command   = A8 hex.

;            Format command  = F0 hex.

;            Seek command    = 1E hex.

;            Recal command   = 0A hex.

;            Set DD mode     = 80 hex.

;

;      --------------------------

;        Status bits:

;      --------------------------

;

;            Busy            = 01 hex.

;            (not used)      = 02 hex.

;               TK0(seek)    = 04 hex.

;               Lost Data    = 04 hex.

;            CRC error       = 08 hex.

;               Seek error   = 10 hex.

;               Not found    = 10 hex.

;            Write fault     = 20 hex.

;            Write protect   = 40 hex.

;            Not ready       = 80 hex.

;

;      --------------------------



F_READ  EQU     088H            ;Floppy read command.

F_WRIT  EQU     0A8H            ;Floppy write command.

F_FMT   EQU     0F0H            ;Floppy format command.

F_SEEK  EQU     01EH            ;Floppy seek command.

F_RECAL EQU     00AH            ;Floppy recal. command.

F_DD    EQU     080H            ;Set Drive double density bit.



        PAGE

        SUBTTL  MSDOS 2.x Disk I/O drivers.



;

; Disk READ/WRITE functions.

;

; On entry:

;       AL = Disk I/O driver number

;       AH = Media byte.

;       ES = Disk transfer segment.

;       DI = Disk transfer offset in ES.

;       CX = Number of sectors to transfer

;       DX = Logical starting sector.

;

; On exit:

;       Normal exit through common exit routine.

;

;       Abnormal exit through common error routine.

;



DSK_RED:

        MOV     BX,0DC88H               ;Set read mode and Error mask.

        JMP     SHORT DSK_COM

DSK_WRV:

DSK_WRT:MOV     BX,0FCA8H               ;Set write mode and Error mask.



DSK_COM:MOV     SI,OFFSET LSDRIV1

        CMP     AH,[SI.MEDIAID]

        JE      DSK_CO3

        MOV     SI,OFFSET LSDRIV2

        CMP     AH,[SI.MEDIAID]

        JE      DSK_CO3

        MOV     SI,OFFSET LDDRIV1

        CMP     AH,[SI.MEDIAID]

        JE      DSK_CO2

	MOV	SI,OFFSET LDDRIV2

	CMP	AH,[SI.MEDIAID]

	JE	DSK_CO2

        MOV     AL,7

        JMP     ERR_EXIT



DSK_CO2:OR      AL,F_DD                 ;Set double density mode.



DSK_CO3:MOV     [IOPB.DMASEG],ES	;Setup Buffer segment.

        MOV     [IOPB.DMAOFF],DI	;Setup buffer offset.

        MOV     DI,[SI.SECSIZE]		;Get sector size.

        MOV     [IOPB.SECLENG],DI

        MOV     [IOPB.RETRIES],1	;Setup number of retries.

        MOV     [IOPB.RETMASK],BH	;Operation error mask.

        MOV     [IOPB.OPCODE],BL	;R/W opcode.

        MOV     [IOPB.DRIVE],AL		;Drive with density select.

        MOV     [IOPB.HEAD],1           ;Only one head on floppy drive.

        MOV     BP,CX                   ;Save number of sectors to R/W

DSK_CO4:PUSH    DX                      ;Save starting sector.

        MOV     AX,DX

        MOV     DX,0                    ;32 bit divide coming up.

        MOV     CX,[SI.SECTRK]

        DIV     CX                      ;Get track+head and start sector.

        INC     DL

        MOV     [IOPB.SECTOR],DL        ;Starting sector.

        MOV     BL,DL                   ;Save starting sector for later.

        MOV     [IOPB.TRACK],AX         ;Track to read/write.

        MOV     AX,[SI.SECTRK]          ;Now see how many sectors

        INC     AL                      ;  we can burst read.

        SUB     AL,BL                   ;BL is the starting sector.

        MOV     AH,0

        POP     DX                      ;Retrieve logical sector start.

        CMP     AX,BP                   ;See if on last partial track+head.

        JG      DSK_CO5                 ;Yes, on last track+head.

        SUB     BP,AX                   ;No, update number of sectors left.

        ADD     DX,AX                   ;Update next starting sector.

        JMP     SHORT DSK_CO6

DSK_CO5:MOV     AX,BP                   ;Only read enough of sector

        MOV     BP,0                    ;to finish buffer and clear # left.

DSK_CO6:MOV     [IOPB.SCOUNT],AL

        MOV     DI,AX                   ;Save number sectors for later.

        MOV     BX,ROM_DISKIO

        MOV     CX,OFFSET IOPB

        PUSH    CS

        POP     ES

        CALL    ROM_CALL                ;Do disk operation.

        MOV     AL,[IOPB.RETCODE]       ;Get error code.

        OR      AL,AL

        JNZ     DERROR

        MOV     AX,DI                   ;Retrieve number of sectors read.

        MOV     CX,[SI.SECSIZE]         ;Number of bytes per sector.

        PUSH    DX

        MUL     CX

        POP     DX

        TEST    AL,0FH                  ;Make sure no strange sizes.

        JNZ     DSK_CO7			;Illegal sector size found.

        MOV     CL,4

        SHR     AX,CL                   ;Convert number of bytes to para.

        ADD     AX,[IOPB.DMASEG]

        MOV     [IOPB.DMASEG],AX

        OR      BP,BP

        JNZ     DSK_CO4                 ;Still more to do.

        MOV     AL,0

        JMP	EXIT                    ;All done.

DSK_CO7:MOV     AL,12

        JMP	ERR_EXIT



        PAGE

        SUBTTL  Disk Error processing.



;

; Disk error routine.

;



DERROR: LDS     BX,CS:[PTRSAV]

        MOV     [BX.COUNT],0

        PUSH    CS

        POP     DS



        MOV     BL,-1

        MOV     AH,AL

        MOV     BH,14           ;Lenght of table.

        MOV     SI,OFFSET DERRTAB

DERROR2:INC     BL              ;Increment to next error code.

        LODS    BYTE PTR CS:[SI]

        CMP     AH,AL           ;See if error code matches disk status.

        JZ      DERROR3         ;Got the right error, exit.

        DEC     BH

        JNZ     DERROR2         ;Keep checking table.

        MOV     BL,12           ;Set general type of error.

DERROR3:MOV     AL,BL           ;Now we've got the code.

        RET



DERRTAB DB      40H             ; 0. Write protect error

        DB      00H             ; 1. Unknown unit.

        DB      80H             ; 2. Not ready error.

        DB      0FFH            ; 3. Unknown command.

        DB      08H             ; 4. CRC error

        DB      00H             ; 5. Bad drive request.

        DB      02H             ; 6. Seek error

        DB      00H             ; 7. Unknown media.

        DB      10H             ; 8. Sector not found

        DB      00H             ; 9. (Not used.)

        DB      20H             ;10. Write fault.

        DB      04H             ;11. Read fault.

        DB      07H             ;12. General type of failure.



        PAGE

        SUBTTL  Common ROM call routine.



;

;  Save all registers except CX, BX and AX.



ROMRTN  DD      0FE000000H      ;Main ROM entry point.



ROM_CALL:

        PUSH    DI

        PUSH    SI

        PUSH    BP

        PUSH    DX

        PUSH    ES

        CALL    CS:DWORD PTR [ROMRTN]

        POP     ES

        POP     DX

        POP     BP

        POP     SI

        POP     DI

        RET



        PAGE

        SUBTTL  Initalization code and temporary work areas.



;

; Overlayed by MSDOS by SYSINIT.

;



WRKSTK  LABEL   WORD

        DB      100 DUP (?)





HWINIT: XOR     BP,BP

        MOV     SS,BP

        MOV     SP,OFFSET WRKSTK+98     ;Some nice area for stack.



        PUSH    CS

        POP     ES



        MOV     BX,ROM_INIT

        CALL    ROM_CALL

        MOV     AH,0

        MOV     MCON,AX



        MOV     AX,SEG SYSINIT

        MOV     DS,AX



ASSUME  DS:SEG SYSINIT



        MOV     AX,CS

        ADD     AX,BIOSIZS

        MOV     DS:[CURRENT_DOS_LOCATION],AX

        MOV     DS:[MEMORY_SIZE],MAX_MEM

        MOV     AX,CS

        MOV     WORD PTR DS:[DEVICE_LIST+2],AX

        MOV     WORD PTR DS:[DEVICE_LIST],OFFSET DEVSTART

        MOV     AX,CS

        ADD     AX,((OFFSET WRKSTK - OFFSET INIT)+50) /16

        MOV     DS:[FINAL_DOS_LOCATION],AX

        JMP     SYSINIT



DOSSPOT LABEL   WORD



CODE    ENDS



        END

                                                                                        