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
description: "This file implements the hard disk driver for MS-DOS 2.0, showcasing early device driver architecture and the transition to more Unix-like features."

summary:
  - point: "Defines device driver tables for hard disk operations"
    link: "https://en.wikipedia.org/wiki/Device_driver"
    link_label: "Device Driver"
  - point: "Introduces a simplistic strategy routine for non-multi-tasking systems"
    link: "https://en.wikipedia.org/wiki/Multitasking"
    link_label: "Multitasking"
  - point: "Uses ROM calls to interact with hardware at a low level"
    link: "https://en.wikipedia.org/wiki/Read-only_memory"
    link_label: "ROM"
  - point: "Implements error handling routines for disk operations"
    link: "https://en.wikipedia.org/wiki/Error_detection_and_correction"
    link_label: "Error Handling"
  - point: "Constructs BIOS Parameter Blocks for diskette operations"
    link: "https://en.wikipedia.org/wiki/BIOS_parameter_block"
    link_label: "BIOS Parameter Block"

enhancements:
  - id: "device-driver-tables-hard-disk"
    line_start: 31
    line_end: 101
    title: "Device driver tables for hard disk"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_driver"
    image_url: ""
    image_caption: ""
    content: "This section defines the structure and attributes of the hard disk driver, including device attributes, strategy pointers, and interrupt pointers. In the early 1980s, device drivers were essential for enabling hardware to communicate with the operating system. Tim Paterson, the original author of 86-DOS, designed these tables to be compact and efficient, reflecting the constraints of the IBM PC's limited memory and processing power. The device attributes specify whether the device is a block or character device, and the strategy and interrupt pointers allow the operating system to dispatch commands to the appropriate routines. This design laid the groundwork for the modular device driver architecture that persisted in later versions of MS-DOS and other operating systems."
  - id: "dispatch-tables-device-commands"
    line_start: 125
    line_end: 201
    title: "Dispatch tables for device commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_handler"
    image_url: ""
    image_caption: ""
    content: "The dispatch table maps device commands to their corresponding routines, such as initialization, media code retrieval, and block read/write operations. This table is a critical part of the driver, allowing MS-DOS to interpret and execute commands issued by the operating system or user applications. In 1983, the concept of dispatch tables was inspired by Unix-like systems, which emphasized modularity and extensibility. By organizing commands in this way, the driver could be easily updated or extended to support new hardware without altering the core operating system. This approach influenced the design of device drivers in later operating systems, including Windows."
  - id: "strategy-routine-io-packet"
    line_start: 205
    line_end: 215
    title: "Simplistic strategy routine for I/O packets"
    wikipedia_url: "https://en.wikipedia.org/wiki/Multitasking"
    image_url: ""
    image_caption: ""
    content: "The strategy routine saves pointers to I/O packets for later processing. In the non-multi-tasking environment of MS-DOS 2.0, this approach was sufficient to manage device operations sequentially. Tim Paterson's design reflects the simplicity required by the IBM PC's hardware constraints, which lacked advanced multitasking capabilities. By storing packet pointers in a fixed location, the driver could efficiently process commands without the overhead of complex scheduling or context switching. This routine highlights the trade-offs made in early PC software development, prioritizing performance and simplicity over flexibility."
  - id: "bios-parameter-block-construction"
    line_start: 647
    line_end: 697
    title: "Constructing BIOS Parameter Blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS_parameter_block"
    image_url: ""
    image_caption: ""
    content: "The GET_BPB routine constructs BIOS Parameter Blocks (BPBs) for diskette operations, providing essential information like sector size, allocation units, and media ID. BPBs were a standard way to describe the physical and logical layout of storage devices, enabling the operating system to interact with them effectively. In MS-DOS 2.0, this routine reflects the influence of Unix-like systems, which used similar abstractions to manage file systems. By standardizing the way storage devices were described, BPBs facilitated compatibility and extensibility, allowing MS-DOS to support a wide range of hardware configurations."
  - id: "disk-error-handling"
    line_start: 857
    line_end: 937
    title: "Disk error handling and recovery"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_detection_and_correction"
    image_url: ""
    image_caption: ""
    content: "This section implements error handling routines for disk operations, mapping error codes to specific conditions like write protection, CRC errors, and sector not found. Error handling was a crucial aspect of early operating systems, as hardware failures and media inconsistencies were common. The routines here reflect the need for robust error detection and recovery mechanisms in MS-DOS 2.0. By providing detailed error codes, the driver enabled applications to respond appropriately to failures, improving reliability in a time when hardware was less dependable. This design influenced later systems, where error handling became even more sophisticated."
  - id: "rom-call-hardware-interaction"
    line_start: 941
    line_end: 973
    title: "ROM call for hardware interaction"
    wikipedia_url: "https://en.wikipedia.org/wiki/Read-only_memory"
    image_url: ""
    image_caption: ""
    content: "The ROM_CALL routine interacts with the Altos ROM to perform hardware-level operations, such as disk I/O. ROM calls were a common way to access hardware features directly, bypassing the operating system for critical tasks. In the early 1980s, this approach was necessary due to the limited capabilities of operating systems and the need for high-performance hardware access. Tim Paterson's use of ROM calls in MS-DOS 2.0 reflects the pragmatic design choices of the era, balancing simplicity and efficiency. This technique persisted in later systems but was gradually replaced by standardized APIs as operating systems became more sophisticated."
  - id: "disk-initialization-routine"
    line_start: 977
    line_end: 1002
    title: "Disk initialization routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: ""
    image_caption: ""
    content: "The DSK_INI routine initializes the hard disk driver, setting up media descriptors and transfer pointers. Initialization routines were critical in early operating systems, ensuring that hardware was ready for use after booting. In MS-DOS 2.0, this routine reflects the influence of Unix-like systems, which emphasized modularity and reusability. By abstracting the initialization process, the driver could support different hardware configurations without altering the core operating system. This approach contributed to MS-DOS's success as a flexible and widely adopted platform."

---

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