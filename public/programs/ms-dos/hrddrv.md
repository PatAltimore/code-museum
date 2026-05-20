---
title: "HRDDRV.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/HRDDRV.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/HRDDRV.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "hrddrv"
order: 35
description: "The HRDDRV.ASM file implements the hard disk driver for MS-DOS v2.0, showcasing early device driver design in the 8086 assembly language."

summary:
  - point: "Introduced modular device driver architecture for MS-DOS v2.0"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Used dispatch tables for handling device-specific commands"
    link: "https://en.wikipedia.org/wiki/Device_driver"
    link_label: "Device driver"
  - point: "Optimized for the Altos ACS-86C hardware environment"
    link: "https://en.wikipedia.org/wiki/Altos_Computer_Systems"
    link_label: "Altos Computer Systems"
  - point: "Implemented error handling routines for disk operations"
    link: "https://en.wikipedia.org/wiki/Error_detection_and_correction"
    link_label: "Error detection and correction"
  - point: "Demonstrated early use of BIOS Parameter Blocks (BPB)"
    link: "https://en.wikipedia.org/wiki/BIOS_parameter_block"
    link_label: "BIOS Parameter Block"

enhancements:
  - id: "dskdev-hard-disk-driver-header"
    line_start: 105
    line_end: 121
    title: "Why Hard Disk Drivers Start with Headers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_driver"
    image_url: ""
    image_caption: ""
    content: "The `DSKDEV` section defines the header for the hard disk driver, specifying attributes such as device type, strategy pointer, interrupt pointer, and the number of units supported. This header acts as the entry point for the driver, enabling MS-DOS to interface with the hardware. At the time, modularity was a key innovation, allowing MS-DOS to support diverse hardware configurations without rewriting the operating system. The structure reflects the influence of Unix-like systems, where device drivers were similarly abstracted. This modular approach allowed Microsoft to license MS-DOS to multiple OEMs, each with unique hardware setups. The concept of device headers became a standard in operating systems, influencing later systems like Windows and Linux."
  - id: "dsk-tbl-dispatch-table"
    line_start: 125
    line_end: 155
    title: "The Dispatch Table That Simplified Drivers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_driver"
    image_url: ""
    image_caption: ""
    content: "The `DSK_TBL` section defines a dispatch table mapping command codes to subroutine addresses. This design allows the driver to quickly route commands like initialization, media checks, and block reads/writes to the appropriate subroutine. Dispatch tables were a clever solution to the constraints of early hardware, where memory and processing power were limited. Tim Paterson adapted this approach from earlier systems, ensuring MS-DOS could efficiently handle I/O operations without hardcoding logic for every device. This technique influenced later operating systems, where dispatch tables became a common pattern for modular driver design. It also laid the groundwork for plug-and-play functionality in modern systems."
  - id: "strategy-routine-save-io-pointers"
    line_start: 191
    line_end: 219
    title: "How Strategy Saved I/O Pointers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_driver"
    image_url: ""
    image_caption: ""
    content: "The `STRATEGY` routine saves pointers to I/O packets in a global variable (`PTRSAV`) for later processing. This simplistic approach reflects the single-tasking nature of MS-DOS, where drivers did not need to manage concurrent operations. By saving these pointers, the driver could defer processing until an interrupt routine was triggered. In 1983, this was an efficient way to handle I/O in a constrained environment, avoiding the complexity of multitasking. This design influenced early single-threaded systems and demonstrated how to manage state in low-memory conditions. Later systems would evolve this concept into more sophisticated queue-based I/O management."
  - id: "dsk-int-interrupt-routine"
    line_start: 225
    line_end: 247
    title: "The Interrupt Routine That Routed Commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "The `DSK_INT` routine processes I/O packets by routing commands to the appropriate subroutine in the dispatch table. It uses the `STRATEGY` pointer to retrieve the I/O packet and calculates the dispatch table entry based on the command code. This routine exemplifies the simplicity of MS-DOS's I/O handling, relying on direct memory manipulation and table lookups. In the early 1980s, this approach was necessary due to the limited capabilities of the 8086 processor and the absence of advanced hardware abstraction layers. The technique influenced later systems by demonstrating how to efficiently implement command routing in constrained environments."
  - id: "common-exit-routines"
    line_start: 311
    line_end: 405
    title: "The Exit Routines That Cleaned Up"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_driver"
    image_url: ""
    image_caption: ""
    content: "The `BUS_EXIT`, `CMDERR`, `ERR_EXIT`, and `EXITP` routines handle various exit conditions for the driver, including normal completion, errors, and busy states. These routines restore registers and update the I/O packet status before returning control to MS-DOS. This meticulous cleanup was essential in assembly programming, where improper state management could crash the system. The design reflects the influence of structured programming principles, ensuring predictable behavior even in error conditions. These routines set a precedent for robust error handling in device drivers, influencing later systems where error codes and cleanup routines became standard practice."
  - id: "mediac-media-check-routine"
    line_start: 583
    line_end: 615
    title: "How MS-DOS Checked for Disk Changes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_driver"
    image_url: ""
    image_caption: ""
    content: "The `MEDIAC` routine checks whether the disk media has changed by updating a flag in the I/O packet. This functionality was crucial for ensuring data integrity, as MS-DOS needed to detect when a user swapped disks. At the time, removable media like floppy disks were common, and detecting changes was a non-trivial problem. The routine's simplicity reflects the constraints of the era, relying on predefined flags rather than sophisticated hardware signals. This approach influenced later systems, where media change detection became more automated and integrated into hardware."
  - id: "get-bpb-bios-parameter-block"
    line_start: 621
    line_end: 657
    title: "The Routine That Built BPBs"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS_parameter_block"
    image_url: ""
    image_caption: ""
    content: "The `GET_BPB` routine constructs a BIOS Parameter Block (BPB) for the specified disk unit. BPBs describe disk geometry and layout, enabling MS-DOS to interface with different storage devices. This routine retrieves the BPB from the driver and updates the I/O packet with its address. In 1983, BPBs were a novel concept, borrowed from CP/M and adapted for MS-DOS to support diverse disk formats. This innovation allowed MS-DOS to handle disks with varying sector sizes, allocation units, and file system structures. BPBs became a standard in operating systems, influencing FAT file system design and modern storage management."
  - id: "disk-io-functions"
    line_start: 701
    line_end: 835
    title: "The Disk I/O Functions That Moved Data"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_operating_system"
    image_url: ""
    image_caption: ""
    content: "The `DSK_RED`, `DSK_WRT`, and `DSK_COM` routines implement disk read and write operations by interacting with the Altos ROM and the I/O packet structure. These routines calculate sector addresses, manage retries, and handle errors using predefined masks. The design reflects the constraints of the Altos ACS-86C hardware, where direct manipulation of disk geometry was necessary. By abstracting these operations into reusable routines, MS-DOS enabled developers to write applications without worrying about hardware details. This modularity influenced later operating systems, where disk I/O became increasingly abstracted and standardized."
  - id: "disk-error-handling"
    line_start: 857
    line_end: 937
    title: "How MS-DOS Interpreted Disk Errors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_detection_and_correction"
    image_url: ""
    image_caption: ""
    content: "The `DERROR` routines process disk errors by mapping hardware error codes to MS-DOS error codes using a lookup table (`DERRTAB`). This design ensures consistent error reporting across different hardware platforms. The routines also update the I/O packet to indicate failure and exit through a common error routine. In 1983, error handling was a critical feature, as unreliable hardware and removable media often caused failures. By centralizing error processing, MS-DOS simplified debugging and improved user experience. This approach influenced later systems, where error codes and lookup tables became standard in driver design."
  - id: "rom-call-routine"
    line_start: 927
    line_end: 965
    title: "The ROM Call That Bridged Hardware"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS"
    image_url: ""
    image_caption: ""
    content: "The `ROM_CALL` routine invokes the Altos ROM entry point to perform hardware-specific operations. By saving and restoring registers, the routine ensures compatibility with the ROM's calling conventions. This design abstracts hardware details, allowing MS-DOS to interact with the Altos ACS-86C without hardcoding device-specific logic. In the early 1980s, ROM calls were a common way to leverage hardware capabilities while maintaining portability. This approach influenced later systems, where BIOS and firmware interfaces became standardized, enabling cross-platform compatibility and reducing development costs."
  - id: "disk-initialization-routine"
    line_start: 973
    line_end: 991
    title: "How MS-DOS Initialized Disk Drivers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_driver"
    image_url: ""
    image_caption: ""
    content: "This routine, labeled `DSK_INI`, is responsible for initializing disk-related device drivers in MS-DOS 2.0. The code begins by loading a pointer from the `PTRSAV` variable into the `BX` register, which serves as the base for accessing device-specific data structures. It then sets the `MEDIA` byte to `1`, indicating a specific media type, and assigns the address of the `DSK_INI` routine itself to the `TRANS` field. This self-referential assignment allows the driver to reference its own initialization logic later. Additionally, the routine sets up pointers to the `INI_TAB` table, which likely contains initialization parameters or configuration data for the disk driver. In 1983, MS-DOS 2.0 introduced major architectural changes inspired by Unix and XENIX, including support for hierarchical directories and modular device drivers. This routine reflects those influences by using structured data and pointers to manage device-specific logic. At the time, hardware constraints demanded efficient use of memory and CPU cycles, making low-level assembly routines like this essential for performance. The modular design of MS-DOS device drivers laid the groundwork for future operating systems, including Windows. By abstracting hardware-specific details into drivers, developers could write applications that worked across a wide range of devices. This approach became standard practice and influenced later systems like Linux and Windows NT. The techniques demonstrated here—pointer manipulation, self-referential structures, and modular initialization—remain foundational in modern driver development."
  - id: "code-section-end"
    line_start: 995
    line_end: 999
    title: "The End of the Code Section"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "The `CODE ENDS` directive marks the conclusion of the code section in this file. It signals the assembler that the executable instructions have ended, and any subsequent lines will not be part of the active code segment. The `END` directive further indicates the end of the assembly source file, ensuring that the assembler knows where to stop processing. This structure reflects the conventions of assembly language programming in the early 1980s, where developers manually managed code and data segments to optimize memory usage. In MS-DOS 2.0, these directives were part of a broader effort to organize code into modular sections, enabling easier debugging and maintenance. The use of clear section boundaries influenced later programming practices, including the segmentation models in protected-mode operating systems like Windows 3.x and the organization of modern assembly files for embedded systems. While these directives may seem mundane, they represent the meticulous attention to detail required in low-level programming during an era of severe hardware constraints."

---

```asm
       TITLE   HRDDRV.SYS for the ALTOS ACS-86C.



; Hard Disk Drive for Version 2.x of MSDOS.



; Constants for commands in Altos ROM.



ROM_CONSTA      EQU     01      ;Return status AL of console selected in CX.

ROM_CONIN       EQU     02      ;Get char. from console in CX to AL

ROM_CONOUT      EQU     03      ;Write char. in DL to console in CX.

ROM_PMSG        EQU     07      ;Write string ES:DX to console in CX.

ROM_DISKIO      EQU     08      ;Perform disk I/O from IOPB in ES:CX.

ROM_INIT        EQU     10      ;Returns boot console and top memory ES:DX.





CODE    SEGMENT

ASSUME  CS:CODE,DS:CODE,ES:CODE,SS:CODE



        ORG     0               ;Starts at an offset of zero.



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



DSKDEV:                         ;Header for hard disk driver.

        DW      -1,-1           ;Last device

        DW      2000H           ;Is a block device

        DW      STRATEGY

        DW      DSK_INT

MEMMAX  DB      1               ;Number of Units



        PAGE

        SUBTTL  Dispatch tables for each device.



DSK_TBL:DW      DSK_INI         ;0  - Initialize Driver.

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

; Ram memory driver interrupt routine for processing I/O packets.

;



DSK_INT:

        PUSH    SI              ;Save SI from caller.

        MOV     SI,OFFSET DSK_TBL



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

        XCHG    DI,AX           ;Save Unit and Media Temporarily.

        MOV     AL,[BX.CMD]     ;Retrieve Command type. (1 => 11)

        XOR     AH,AH           ;Clear upper half of AX for calculation.

        ADD     SI,AX           ;Compute entry pointer in dispatch table.

        ADD     SI,AX

        CMP     AL,11           ;Verify that not more than 11 commands.

        JA      CMDERR          ;Ah, well, error out.

        XCHG    AX,DI

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



        subttl  Hard Disk drive control.



;

;       Read command    = 09 hex.

;       Write command   = 02 hex.

;       Seek command    = 10 hex.

;       Recal command   = 20 hex.

;       Rezero command  = 40 hex.

;       Reset command   = 80 hex.

;

;       Busy                    = 01 hex.

;       Operation Complete      = 02 hex.

;       Bad Sector              = 04 hex.

;       Record Not found        = 08 hex.

;       CRC error               = 10 hex.

;       (not used)              = 20 hex.

;       Write fault             = 40 hex.

;       Drive Ready             = 80 hex.

;



hd_read equ     09h

hd_writ equ     02h

hd_wmsk equ     5dh

hd_rmsk equ     9ch

        page



        SUBTTL  Altos monitor ram and 8089 IOPB structures.



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



IOPB    SIOPB   <,0,0,0,0,0,0,0,0,0,0,0,0,>



        PAGE

        SUBTTL  Common Drive parameter block definitions on Altos.



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

HEADS   DW      ?               ;Number of heads per cylinder.

HIDDEN  DW      ?               ;Number of hidden sectors.



DBP     ENDS



HDDRIVE DBP     <,,512,4,0,2,256,4000,0F5H,3,12,4,0>





INI_TAB DW      OFFSET HDDRIVE.SECSIZE



        PAGE

        SUBTTL  Media check routine



;

; Media check routine.

; On entry:

;       AL = memory driver unit number.

;       AH = media byte

; On exit:

;

;       [MEDIA FLAG] = -1 (FF hex) if disk is changed.

;       [MEDIA FLAG] = 0 if don't know.

;       [MEDIA FLAG] = 1 if not changed.

;



MEDIAC: LDS     BX,CS:[PTRSAV]

        MOV     BYTE PTR [BX.TRANS],1

        JMP     EXIT



        PAGE

        SUBTTL  Build and return Bios Parameter Block for a diskette.



;

; Build Bios Parameter Blocks.

;

;       On entry:  ES:BX contains the address of a scratch sector buffer.

;                  AL = Unit number.

;                  AH = Current media byte.

;

;       On exit:   Return a DWORD pointer to the associated BPB

;                  in the Request packet.

;



GET_BPB:

        MOV     SI,OFFSET HDDRIVE+11

        LDS     BX,CS:[PTRSAV]

        MOV     WORD PTR [BX.COUNT],SI

        MOV     WORD PTR [BX.COUNT+2],CS

        JMP     EXIT



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

        MOV     AH,HD_READ

        JMP     SHORT DSK_COM

DSK_WRV:

DSK_WRT:

        MOV     AH,HD_WRIT

DSK_COM:

        MOV     SI,OFFSET HDDRIVE       ;Keeps code size down.

        MOV     [IOPB.DMASEG],ES

        MOV     [IOPB.DMAOFF],DI

        MOV     DI,[SI.SECSIZE]

        MOV     [IOPB.SECLENG],DI

        MOV     [IOPB.RETRIES],1

        MOV     [IOPB.RETMASK],05DH     ;Error return mask.

        MOV     [IOPB.OPCODE],AH

        MOV     [IOPB.DRIVE],4		;Drive 4 is only available.

        ADD     DX,[SI.HIDDEN]          ;Account for invisible sectors.

        MOV     BP,CX                   ;Save number of sectors to R/W

DSK_IO1:

        PUSH    DX                      ;Save starting sector.

        MOV     AX,DX

        MOV     DX,0                    ;32 bit divide coming up.

        MOV     CX,[SI.SECTRK]

        DIV     CX                      ;Get track+head and start sector.

        MOV     [IOPB.SECTOR],DL        ;Starting sector.

        MOV     BL,DL                   ;Save starting sector for later.

        MOV     DX,0

        MOV     CX,[SI.HEADS]

        DIV     CX                      ;Compute head we are on.

        MOV     [IOPB.HEAD],DL

        MOV     [IOPB.TRACK],AX         ;Track to read/write.

        MOV     AX,[SI.SECTRK]          ;Now see how many sectors

        INC     AL                      ;  we can burst read.

        SUB     AL,BL                   ;BL is the starting sector.

        MOV     AH,0

        POP     DX                      ;Retrieve logical sector start.

        CMP     AX,BP                   ;See if on last partial track+head.

        JG      DSK_IO2                 ;Yes, on last track+head.

        SUB     BP,AX                   ;No, update number of sectors left.

        ADD     DX,AX                   ;Update next starting sector.

        JMP     SHORT DSK_IO3

DSK_IO2:MOV     AX,BP                   ;Only read enough of sector

        MOV     BP,0                    ;to finish buffer and clear # left.

DSK_IO3:MOV     [IOPB.SCOUNT],AL

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

        JNZ     SERR1

        MOV     CL,4

        SHR     AX,CL                   ;Convert number of bytes to para.

        ADD     AX,[IOPB.DMASEG]

        MOV     [IOPB.DMASEG],AX

        OR      BP,BP

        JNZ     DSK_IO1                 ;Still more to do.

        MOV     AL,0

        JMP	EXIT                    ;All done.

SERR1:  MOV     AL,12

        JMP	ERR_EXIT



        PAGE

        SUBTTL  Disk Error processing.



;

; Disk error routine.

;



DERROR:

        LDS     BX,CS:[PTRSAV]

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

        JMP	ERR_EXIT



DERRTAB DB      00H             ; 0. Write protect error

        DB      00H             ; 1. Unknown unit.

        DB      00H             ; 2. Not ready error.

        DB      00H             ; 3. Unknown command.

        DB      10H             ; 4. CRC error

        DB      00H             ; 5. Bad drive request.

        DB      00H             ; 6. Seek error

        DB      00H             ; 7. Unknown media.

        DB      08H             ; 8. Sector not found

        DB      00H             ; 9. (Not used.)

        DB      40H             ;10. Write fault.

        DB      04H             ;11. Read fault.

        DB      01H             ;12. General type of failure.



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

        SUBTTL  Hard Disk Drive initalization routine.



DSK_INI:

        LDS     BX,CS:[PTRSAV]

        MOV     BYTE PTR [BX.MEDIA],1

        MOV     WORD PTR [BX.TRANS],OFFSET DSK_INI

        MOV     WORD PTR [BX.TRANS+2],CS

        MOV     WORD PTR [BX.COUNT],OFFSET INI_TAB

        MOV     WORD PTR [BX.COUNT+2],CS

        JMP     EXIT



CODE    ENDS



        END

                                        
                                                                                                                                                                    
```
