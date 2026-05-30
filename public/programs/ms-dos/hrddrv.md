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
description: "This file implements the hard disk driver for MS-DOS 2.0, showcasing early device driver architecture and interaction with hardware."

summary:
  - point: "Defines device driver tables for hard disk operations"
    link: "https://en.wikipedia.org/wiki/Device_driver"
    link_label: "Device Driver"
  - point: "Introduces a simplistic strategy routine for non-multi-tasking systems"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Handles disk I/O operations using BIOS and ROM calls"
    link: "https://en.wikipedia.org/wiki/BIOS"
    link_label: "BIOS"
  - point: "Implements error handling routines for disk operations"
    link: "https://en.wikipedia.org/wiki/Error_code"
    link_label: "Error Code"
  - point: "Provides initialization routines for hard disk drives"
    link: "https://en.wikipedia.org/wiki/Hard_disk_drive"
    link_label: "Hard Disk Drive"

enhancements:
  - id: "hard-disk-driver-header"
    line_start: 105
    line_end: 113
    title: "Why Hard Disk Drivers Start with Tables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_driver"
    image_url: ""
    image_caption: ""
    content: "This section defines the header for the hard disk driver, including key attributes such as device type, strategy pointer, and interrupt pointer. The 'DSKDEV' label marks the entry point, and the structure is designed to identify the device as a block device (as opposed to a character device) and specify the number of units available. In 1983, MS-DOS 2.0 introduced device drivers to support a wider range of hardware, including hard disks, which were becoming more common in personal computers. This design reflects the need for modularity and extensibility in operating systems, a lesson learned from Unix. The approach influenced later operating systems, including Windows, which retained the concept of device drivers as modular components for hardware interaction."
  - id: "dispatch-table-device-commands"
    line_start: 125
    line_end: 155
    title: "The Table That Dispatches Disk Commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_driver"
    image_url: ""
    image_caption: ""
    content: "The 'DSK_TBL' section defines a dispatch table mapping device commands to their corresponding routines. Each entry in the table represents a specific operation, such as initializing the driver, reading or writing blocks, or handling errors. This table-driven approach simplifies the implementation of device drivers by centralizing command handling. At the time, MS-DOS was heavily influenced by Unix's modular design principles, which emphasized the separation of concerns and reusability. This dispatch table concept became a standard practice in operating system design, influencing later systems like Linux and Windows, where similar tables are used to manage device operations efficiently."
  - id: "strategy-routine-pointer-save"
    line_start: 209
    line_end: 219
    title: "How Strategy Routines Save Pointers"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The 'STRATEGY' routine is a simplistic implementation for saving I/O packet pointers in a non-multi-tasking system. It stores the segment and offset of the I/O packet in a predefined memory location ('PTRSAV') for later processing by interrupt routines. This design reflects the constraints of early personal computers, which lacked advanced multitasking capabilities and relied on straightforward mechanisms for managing I/O operations. The strategy routine concept was foundational in MS-DOS and influenced the development of more sophisticated I/O management techniques in later operating systems, including Windows."
  - id: "disk-interrupt-handler"
    line_start: 233
    line_end: 237
    title: "The Interrupt Routine That Handles Disk I/O"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "The 'DSK_INT' routine processes I/O packets for the hard disk driver. It uses a dispatch table ('DSK_TBL') to determine the appropriate action based on the command code in the I/O packet. This interrupt-driven approach was critical for handling asynchronous hardware events efficiently in MS-DOS. The use of interrupt routines allowed the operating system to respond to hardware signals without polling, a technique that was essential for performance on the limited hardware of the era. This mechanism influenced the design of interrupt handling in subsequent operating systems, including Windows and Linux."
  - id: "entry-point-register-save"
    line_start: 251
    line_end: 311
    title: "Saving Registers Before Disk Operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS"
    image_url: ""
    image_caption: ""
    content: "The 'ENTRY' routine saves all necessary registers before processing an I/O packet. It retrieves the packet pointer, extracts relevant information (e.g., unit code, media descriptor, sector count), and computes the entry pointer in the dispatch table. This meticulous register management was crucial for ensuring the integrity of data during hardware interactions. At the time, MS-DOS relied on BIOS routines for low-level hardware access, and preserving the state of registers was a standard practice to avoid corruption. This approach laid the groundwork for the development of robust hardware abstraction layers in later operating systems."
  - id: "error-handling-routine"
    line_start: 857
    line_end: 893
    title: "The Table That Translates Disk Errors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_code"
    image_url: ""
    image_caption: ""
    content: "The 'DERROR' routine processes disk errors by mapping error codes to predefined values in the 'DERRTAB' table. This table associates specific error conditions (e.g., write protect violation, CRC error, sector not found) with corresponding error codes. By centralizing error handling, the routine simplifies debugging and ensures consistent behavior across different hardware implementations. In the early 1980s, error handling was a critical aspect of operating system design, as hardware failures were common and could easily disrupt operations. The concept of error tables influenced later systems, where similar mechanisms are used to provide meaningful error messages and facilitate troubleshooting."
  - id: "rom-call-wrapper"
    line_start: 941
    line_end: 973
    title: "Calling ROM Without Breaking Registers"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS"
    image_url: ""
    image_caption: ""
    content: "The 'ROM_CALL' routine wraps calls to the ROM entry point while preserving all registers except CX, BX, and AX. This ensures that the state of the system remains intact after the ROM operation, which is critical for maintaining stability in low-level hardware interactions. ROM calls were a common way to access hardware functionality in early personal computers, as they provided a standardized interface for device operations. This wrapper technique influenced the design of hardware abstraction layers in later operating systems, where similar practices are used to ensure compatibility and reliability."
  - id: "disk-initialization-routine"
    line_start: 977
    line_end: 995
    title: "How MS-DOS Initialized Hard Disks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Hard_disk_drive"
    image_url: ""
    image_caption: ""
    content: "The 'DSK_INI' routine initializes the hard disk driver by setting up key parameters, including the media byte and transfer address. It prepares the driver for subsequent operations and ensures that the system can interact with the hard disk reliably. Disk initialization was a critical step in operating system boot processes, as it established the foundation for file system access and data storage. This routine reflects the modular design principles of MS-DOS 2.0, which were influenced by Unix and aimed to support a wide range of hardware configurations. The initialization process became a standard feature in later operating systems, including Windows and Linux."

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



```