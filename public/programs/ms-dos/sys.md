---
title: "SYS.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/SYS.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/SYS.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "sys"
order: 44
description: "This file contains the source code for the SYS utility in MS-DOS v2.0, a program responsible for transferring system files to make a disk bootable. It reflects the evolution of MS-DOS from its early roots to a more Unix-inspired architecture."

summary:
  - point: "Introduces subdirectory support and file handles, inspired by Unix"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Demonstrates early use of BIOS and DOS file handling via interrupts"
    link: "https://en.wikipedia.org/wiki/BIOS"
    link_label: "BIOS"
  - point: "Contains hardware-specific code for IBM PC compatibility"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Uses clever memory management techniques to work within tight constraints"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Highlights the challenges of supporting multiple OEMs in early PC software"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS Licensing"

enhancements:
  - id: "buffer-memory-allocation"
    line_start: 197
    line_end: 201
    title: "The Buffer That Made Boot Disks Possible"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section defines a memory buffer (`BUF`) used for file reads during the SYS operation. The buffer is a critical part of the program, allowing the utility to read and write system files like IO.SYS and MSDOS.SYS efficiently. At the time this code was written, memory was a scarce resource, and programmers had to carefully allocate and manage buffers to ensure their programs could run on machines with as little as 64KB of RAM. The buffer's design reflects the constraints of the IBM PC's hardware, where direct memory access and interrupt-driven I/O were standard. This approach to memory management influenced later DOS utilities and even early Windows system tools, which continued to rely on efficient memory usage to operate within limited system resources."
  - id: "start-and-version-check"
    line_start: 217
    line_end: 227
    title: "How SYS Ensures Compatibility with DOS Versions"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `Start` and `CheckVersion` sections initialize the SYS program and ensure that the DOS version is within the acceptable range. This was crucial for maintaining compatibility across different versions of DOS, as the operating system evolved rapidly in its early years. The code uses the `INT 21H` interrupt to query the DOS version and compares it against predefined constants (`DOSVER_LOW` and `DOSVER_HIGH`). If the version is outside the acceptable range, the program exits with an error message. This kind of version checking became a standard practice in software development, ensuring that programs could gracefully handle incompatibilities. It also highlights the challenges Microsoft faced in supporting multiple OEMs and hardware configurations, a problem that would later influence the design of Windows and other cross-platform systems."
  - id: "error-handling-routines"
    line_start: 267
    line_end: 279
    title: "Error Messages for Every Possible Failure"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_message"
    image_url: ""
    image_caption: ""
    content: "These routines (`ERR0`, `ERR1`, `ERR2`) handle specific error conditions that might arise during the SYS operation, such as invalid drive letters or missing system files. Each routine sets up a descriptive error message and then jumps to the `DisplayError` routine to output the message to the user. This modular approach to error handling was a hallmark of early DOS programs, where user feedback was critical for troubleshooting. The detailed error messages reflect the need to guide users through technical issues in an era when personal computing was still new to many. This focus on user-friendly error reporting influenced later software design, emphasizing clear communication between the system and its users."
  - id: "sys-disk-validation"
    line_start: 303
    line_end: 363
    title: "Validating Boot Disk Integrity"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The `SYS` section includes checks to ensure that the destination disk is suitable for booting. It verifies the presence of a valid File Allocation Table (FAT) and checks for specific attributes that indicate a properly formatted disk. This validation process uses low-level BIOS interrupts (`INT 25H`) to read sectors directly, showcasing the close interaction between software and hardware in early PC systems. The reliance on FAT reflects the dominance of this file system in the DOS era, which would later become the foundation for file systems in Windows. The techniques used here influenced disk utilities and file system tools for decades, including modern partitioning and formatting software."
  - id: "copying-system-files"
    line_start: 429
    line_end: 573
    title: "Copying System Files to Make a Disk Bootable"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: ""
    image_caption: ""
    content: "The `DOSWRT`, `FindDos`, `PUTSYS`, and `Copy` sections handle the core functionality of the SYS program: copying the system files (IO.SYS and MSDOS.SYS) to the destination disk. These routines ensure that the files are written with the correct attributes and in the proper order to make the disk bootable. The code uses BIOS interrupts for file operations, reflecting the low-level nature of DOS programming. This functionality was essential for setting up bootable disks, a common task in the early PC era when users frequently needed to create system disks for new installations or recovery. The techniques used here laid the groundwork for later boot utilities and influenced the design of bootloaders in modern operating systems."
  - id: "error-handling-and-exit"
    line_start: 643
    line_end: 647
    title: "Graceful Exits in the Face of Errors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_message"
    image_url: ""
    image_caption: ""
    content: "The `ErrorExit` and `DisplayError` routines provide a mechanism for handling errors and exiting the program gracefully. When an error occurs, the program sets an error code and displays a message to the user before terminating. This approach reflects the importance of user-friendly error handling in early DOS programs, where users often had to troubleshoot issues without extensive technical knowledge. By providing clear feedback, these routines helped users understand what went wrong and how to fix it. This emphasis on error reporting influenced the design of later software, where clear and actionable error messages became a standard feature."
  - id: "memory-management-and-file-handling"
    line_start: 657
    line_end: 723
    title: "Managing Memory for File Transfers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `FillMem`, `UseCX`, and `UseCXDOS` routines manage memory during file transfers, ensuring that the system files are loaded into the buffer efficiently. The code dynamically adjusts the buffer size based on the remaining file size, using 32-bit arithmetic to handle large files that exceed 64KB. This level of precision was necessary to work within the constraints of early PC hardware, where memory was limited and file sizes could vary significantly. The approach demonstrates the ingenuity required to optimize performance in resource-constrained environments. These memory management techniques influenced the design of later file systems and operating systems, which continued to prioritize efficient resource utilization."
  - id: "boot-sector-manipulation"
    line_start: 893
    line_end: 983
    title: "Writing the Boot Sector for IBM PCs"
    wikipedia_url: "https://en.wikipedia.org/wiki/Boot_sector"
    image_url: ""
    image_caption: ""
    content: "The `PUTBOOT` and `GOTBOOT` sections focus on writing the boot sector to the destination disk, ensuring that it contains the necessary information to boot the system. This involves setting specific values in the boot sector, such as the number of directory entries and sectors, and writing the modified boot sector back to the disk using BIOS interrupts (`INT 26H`). The boot sector is a critical component of any bootable disk, as it contains the code that initializes the operating system. The techniques used here were essential for creating bootable disks in the early PC era and influenced the design of boot sectors in later operating systems, including Windows and Linux."
  - id: "relocation-list-buffer-update"
    line_start: 1029
    line_end: 1043
    title: "Relocating Memory: A Buffer's Journey"
    wikipedia_url: "https://en.wikipedia.org/wiki/Relocation_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "This section handles the relocation of memory addresses for a linked list buffer. The routine calculates the true relocation factor by subtracting the relocation offset from the starting sector address. It then iterates through entries in the buffer, adjusting their memory addresses using the calculated factor. Relocation was critical in the era of segmented memory models used by the Intel 8086, where programs needed to dynamically adjust their memory references based on their loaded position. Tim Paterson's work here reflects the constraints of early PC hardware, where memory management was manual and precise. This approach influenced later operating systems and compilers, which automated relocation processes, eventually leading to modern virtual memory systems."
  - id: "looping-through-relocation-entries"
    line_start: 1045
    line_end: 1051
    title: "The Loop That Adjusts Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Loop_(computing)"
    image_url: ""
    image_caption: ""
    content: "The RELLOOP routine iterates through entries in the linked list buffer, applying the relocation factor to each memory address. This loop uses the LOOP instruction, which was a staple of early assembly programming for its efficiency in decrementing and checking a counter in a single operation. In the context of MS-DOS, this loop ensures that all memory references in the buffer are correctly adjusted, enabling the program to function regardless of where it is loaded in memory. The use of such loops was common in low-level programming at the time, as they minimized instruction count and execution time. This technique laid the groundwork for efficient memory manipulation routines in later software systems."
  - id: "drive-check-and-sector-update"
    line_start: 1071
    line_end: 1117
    title: "Checking Drives and Updating Sectors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Boot_sector"
    image_url: ""
    image_caption: ""
    content: "The CHECK_TRAN routine verifies the system's drive and updates the starting sector for data. It interacts with the BIOS via interrupt 21h to retrieve drive parameters, including the first sector and media type. This routine reflects the challenges of ensuring compatibility across different storage devices in the early PC era. By dynamically updating the boot sector and data start location, MS-DOS could adapt to various disk configurations, a necessity given the diversity of hardware among OEMs. This adaptability was a key factor in MS-DOS's widespread adoption and influenced later operating systems that needed to support heterogeneous hardware environments."
  - id: "floppy-disk-boot-validation"
    line_start: 1137
    line_end: 1145
    title: "The Floppy Disk That Boots"
    wikipedia_url: "https://en.wikipedia.org/wiki/Floppy_disk"
    image_url: ""
    image_caption: ""
    content: "The CHECK_FLOP routine determines whether a floppy disk is bootable by comparing its media descriptor byte to a predefined value. This check ensures that only valid bootable disks are processed, preventing errors during system initialization. Floppy disks were the primary storage medium for early PCs, and their reliability was critical for booting and running software. This routine exemplifies the low-level checks required to manage hardware in an era before standardized device drivers. The technique of validating media types persisted in later systems, influencing the design of file systems and boot loaders for removable storage."
  - id: "keyboard-input-via-bios"
    line_start: 1149
    line_end: 1165
    title: "Reading Keystrokes: BIOS at Work"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS_interrupt_call"
    image_url: ""
    image_caption: ""
    content: "The GetKeystroke routine interacts with the BIOS to retrieve keyboard input. By invoking interrupt 21h with specific parameters, it flushes the input buffer and reads a keystroke without echoing it to the screen. This approach highlights the reliance on BIOS services for hardware interaction in early operating systems. Direct BIOS calls allowed MS-DOS to support a wide range of hardware without needing custom drivers for each device. This routine demonstrates the simplicity and efficiency of BIOS-based input handling, which influenced the design of early text-based interfaces and command-line tools. While modern systems have largely replaced BIOS calls with more abstract APIs, the legacy of this approach is still evident in low-level programming and embedded systems."

---

```asm
TITLE   MS-DOS SYS Program

; SYS - Copies system programs IBMBIO.COM/IO.SYS and IBMDOS.COM/MSDOS.SYS

;   1.6     05/21/82  Added rev number message

;   1.61    06/04/82  Allow SYS to blank disk TimP at SCP

;   1.70    06/30/82  NON contiguous DOS allowed on 2.00 IBM.  Allows SYS to

;                     1.0 1.1 disks.

;   1.71    07/02/82  Put in CHDIRs to make sure everything done in root dir.

;   1.80    04/26/83  MZ make sys work in small machines; use full 2.0 system

;                     calls

;   1.81    07/22/83  ARR Added check in IBM version for valid FAT ID on

;                     destination because of IBM problem with SYSing to

;                     unformatted disks which are really formatted.

;                     Prints NoDest message for ridic IBM reasons, should

;                     have a better message.



FALSE   EQU     0

TRUE    EQU     NOT FALSE



IBMJAPVER EQU   FALSE

IBMVER  EQU     FALSE

MSVER   EQU     TRUE



.xlist

.xcref

        INCLUDE DOSSYM.ASM

.cref

.list





DOSVER_LOW      EQU  0136H              ; Lowest acceptable DOS version number

DOSVER_HIGH     EQU  020BH              ; Highest acceptable DOS version



CODE    SEGMENT WORD PUBLIC

CODE    ENDS



CONST   SEGMENT BYTE PUBLIC

CONST   ENDS



DATA    SEGMENT BYTE PUBLIC

DATA    ENDS



DG      GROUP   CODE,DATA,CONST



DATA   SEGMENT PUBLIC BYTE



        EXTRN   BADDRV:BYTE, BADDRVLen:WORD

        EXTRN   BADPARM:BYTE, BADPARMLen:WORD

        EXTRN   GETSYS:BYTE, GETSYSLen:WORD

        EXTRN   SYSDRV:BYTE

        EXTRN   NODEST:BYTE, NODESTLen:WORD

        EXTRN   BADSIZ:BYTE, BADSIZLen:WORD

        EXTRN   DONE:BYTE, DONELen:WORD

        EXTRN   BADVER:BYTE



        IF      IBMJAPVER

        EXTRN   BADDISK:BYTE, BADDISKLen:WORD

        ENDIF



DEFALT  DB      0

        IF MSVER

BIOSName    DB  "A:\IO.SYS",0

DOSName     DB  "A:\MSDOS.SYS",0

        ENDIF

        IF IBMVER OR IBMJAPVER

BIOSName    DB  "A:\IBMBIO.COM",0

DOSName     DB  "A:\IBMDOS.COM",0

        ENDIF



BIOSInFH    DW  ?                       ; file handle of source BIOS

BIOSLenLow  DW  2 DUP (?)               ; 32-bit length of BIOS

BIOSLenHigh DW  2 DUP (?)               ; 32-bit length of BIOS

BIOSTime    DW  2 DUP (?)               ; place to store time of BIOS write

BIOSOutFH   DW  ?                       ; fh of BIOS destination



DOSInFH     DW  ?                       ; file handle of source DOS

DOSLenLow   DW  2 DUP (?)               ; 32-bit length of DOS

DOSLenHigh  DW  2 DUP (?)               ; 32-bit length of DOS

DOSTime     DW  2 DUP (?)               ; place to store time of DOS write

DOSOutFH    DW  ?                       ; fh of DOS destination



AllName     DB "A:\*.*",0



cbBuf       DW  ?                       ; number of bytes in buffer

pDOS        DW  ?                       ; offset of beginning of DOS in buffer

pDOSEnd     DW  ?                       ; offset of end of DOS in buffer



        IF      IBMVER OR IBMJAPVER

BOOT    DW      256 DUP (0)

        IF      IBMJAPVER

LLISTBUF DW     256 DUP (0)

        ENDIF

        ENDIF



        IF      IBMJAPVER

RELOC   DW      1 DUP(?)

STARTSECTOR DW  1 DUP(?)

        ENDIF



BUF     LABEL   BYTE                    ; beginning of area for file reads



DATA    ENDS



CODE    SEGMENT PUBLIC



        ASSUME  CS:DG,DS:DG,ES:DG,SS:DG



        ORG     100H



Start:

        JMP     SHORT CheckVersion



        IF      IBMVER

        DW      OFFSET DG:BOOT

        ENDIF

HEADER  DB      "Vers 1.81"

CheckVersion:

        PUSH    AX                      ; save drive letter validity

        MOV     AH,GET_VERSION

        INT     21H                     ; get dos version

        XCHG    AH,AL                   ; Turn it around to AH.AL

        CMP     AX,DOSVER_LOW           ; is it too low?

        JB      GOTBADDOS               ; yes, error

        CMP     AX,DOSVER_HIGH          ; too high?

        JBE     OKDOS                   ; yes, go check drive letter

GOTBADDOS:

        MOV     DX,OFFSET DG:BADVER     ; message to dump

        MOV     AH,STD_CON_STRING_OUTPUT    ; standard output device

        INT     21H

        INT     20H                     ; old style exit for compatability



OKDOS:  POP     AX                      ; get drive validity

        JMP     SHORT SYS               ; go process



ERR0:   MOV     DX,OFFSET DG:BADPARM    ; no drive letter

        MOV     CX,BadParmLen

        JMP     DisplayError



ERR1:   MOV     DX,OFFSET DG:BADDRV     ; drive letter invalid

        MOV     CX,BadDrvLen

        JMP     DisplayError



ERR2:   MOV     AL,DEFALT               ; get default drive number

        ADD     AL,'A'-1                ; turn into letter

        MOV     SYSDRV,AL               ; place into middle of message

        MOV     DX,OFFSET DG:GETSYS

        MOV     CX,GETSYSLen            ; length for output

        MOV     BX,stderr               ; use stderr

        MOV     AH,Write                ; Ask for system disk

        INT     21H

        CALL    GetKeystroke            ; wait for him to type simething

        XOR     AL,AL                   ; valid drive spec now...

SYS:

        CMP     DS:(BYTE PTR 5DH)," "   ; Was file specified?

        JNZ     ERR0                    ; yes, no files are allowed -> error

        CMP     AL,-1                   ; Invalid drive spec?

        JZ      ERR1                    ; yes, must have valid drive -> error

        CMP     DS:(BYTE PTR 5CH),0     ; No drive specified?

        JZ      ERR1                    ; yes, cannot sys to default drive error

        MOV     AH,GET_DEFAULT_DRIVE    ; Get default drive

        INT     21H

        INC     AL                      ; turn from phys drive to logical drive

        MOV     DEFALT,AL               ; save it for possible printing

        CMP     DS:(BYTE PTR 5CH),AL    ; did he specify the default drive?

        JZ      ERR1                    ; yes, default drive not allowed



        IF  IBMVER              ; Check for "valid" destination

        PUSH    AX

        MOV     AL,BYTE PTR DS:[5Ch]

        DEC     AL

        MOV     BX,OFFSET DG:BUF        ; Temp space

        MOV     DX,1                    ; Sector 1 (first sec of FAT)

        MOV     CX,DX                   ; One sector

        INT     25H                     ; Read Fat sector

        POP     AX                      ; Flags

        POP     AX                      ; Real AX

        JC      OKFAT                   ; Don't error here, let a CREATE or

                                        ;   some other call to the dest

                                        ;   generate a more useful INT 24H

                                        ;   error

        CMP     BYTE PTR [BUF],0F8H

        JAE     OKFAT

        JMP     ERR3

OKFAT:

        ENDIF



        ADD     AL,'A'-1                ; turn into letter

        MOV     BIOSName,AL             ; twiddle source name

        MOV     DOSName,AL              ; twiddle source name

        CLD

        MOV     DX,OFFSET DG:BIOSName   ; source name

        MOV     DI,OFFSET DG:BIOSInFH   ; pointer to block of data

        CALL    OpenFile

        JC      Err2                    ; not found, go and try again

        MOV     DX,OFFSET DG:DOSName    ; source of DOS

        MOV     DI,OFFSET DG:DOSInFH    ; pointer to block of data

        CALL    OpenFile                ; Look for DOS

        JC      ERR2                    ; not there, go ask for a system disk

        MOV     CX,SP                   ; get lowest available spot

        SUB     CX,0200h+(OFFSET DG:BUF); leave room for all sorts of things

        MOV     cbBuf,CX                ; store length away

        CALL    FillMem                 ; load up memory with files



        IF      IBMJAPVER

        CALL    READ_BOOT               ; need to copy boot sector too

        ENDIF



        MOV     AL,DS:(BYTE PTR 5CH)    ; get drive of destination



        IF      IBMJAPVER

        CALL    CHECK_TRAN              ; check for bootable device

        JZ      DOSWRT                  ; ok to boot

        MOV     DX,OFFSET DG:BADDISK    ; incorrect format to boot

        MOV     CX,BadDiskLen

        JMP     DisplayError            ; go error and quit

DOSWRT:

        ENDIF



        ADD     AL,'A'-1                ; convert to letter

        MOV     BIOSName,AL             ; point names at destination drive

        MOV     DOSName,AL

        MOV     AllName,AL              ; look for any files



        MOV     AH,Find_First           ; look for files

        MOV     DX,OFFSET DG:AllName    ; path of where to look

        MOV     CX,Attr_Hidden+Attr_System  ; attributes to find

        INT     21H

        JC      PutSys                  ; no files - go and copy



        IF      MSVER

        MOV     DL,DS:(BYTE PTR 5CH)    ; get drive number

        MOV     AH,GET_DRIVE_FREESPACE  ; get free space available

        INT     21H

        MUL     CX                      ; Compute size of cluster (secsiz*secperclus)

        XCHG    CX,AX                   ; move it to correct spot

        MOV     DX,OFFSET DG:BIOSName   ; who to open

        MOV     AX,BIOSLenLow+2         ; get low part of size

        MOV     BX,BIOSLenHigh+2        ; get high size

        CALL    CHKLEN                  ; open and snoop size

        JNZ     ERR4                    ; Must fit exact so MSDOS is in right place

        MOV     DX,OFFSET DG:DOSName    ; other guy to open

        MOV     AX,DOSLenLow+2          ; get low part of size

        MOV     BX,DOSLenHigh+2         ; get high size

        CALL    CHKLEN                  ; open and snoop second size

        JA      ERR4                    ; Must be enough (or too much) space

        ENDIF



        IF      IBMVER OR IBMJAPVER

        MOV     DX,OFFSET DG:BIOSName   ; open BIOS

        MOV     CX,7                    ; attributes

        MOV     AH,Find_First

        INT     21H

        JNC     FindDos

Err3J:  JMP     Err3                    ; not found, go and complain

FindDos:

        MOV     DX,OFFSET DG:DOSName    ; open DOS

        MOV     AH,Find_First

        INT     21H

        JC      Err3J                   ; Not found, go complain

        ENDIF



PUTSYS:

        MOV     DX,OFFSET DG:BIOSName   ; who to change mode

        MOV     CX,0                    ; undo attributes

        MOV     AX,(ChMod SHL 8) + 1    ; set the attributes

        INT     21h

        MOV     DX,OFFSET DG:DOSName    ; who to change mode

        MOV     CX,0                    ; undo attributes

        MOV     AX,(ChMod SHL 8) + 1    ; set the attributes

        INT     21h

        MOV     DX,OFFSET DG:BIOSName   ; destination of BIOS

        MOV     CX,7                    ; fancy attributes

        MOV     AH,Creat                ; make a new one

        INT     21h

        MOV     BIOSOutFH,AX            ; save handle

        MOV     DX,OFFSET DG:DOSName    ; destination of DOS

        MOV     AH,Creat                ; make a new one

        INT     21h

        MOV     DOSOutFH,AX             ; save handle

Copy:

        CALL    DumpMem                 ; flush out memory

        MOV     AX,DOSLenHigh           ; more DOS?

        OR      AX,DOSLenLow            ; more low dos

        OR      AX,BIOSLenHigh          ; more high BIOS

        OR      AX,BIOSLenLow           ; more low BIOS

        JZ      AllDone                 ; nope, all done

        CALL    FillMem                 ; reload world

        JMP     Copy

ERR4:

        MOV     DX,OFFSET DG:BADSIZ

        MOV     CX,BadSizLen

        JMP     DisplayError

AllDone:

        MOV     CX,BIOSTime             ; get time and date

        MOV     DX,BIOSTime+2

        MOV     BX,BIOSOutFH            ; where to stuff the time

        MOV     AX,(File_Times SHL 8) + 1

        INT     21h

        MOV     AH,Close

        INT     21h



        MOV     CX,DOSTime              ; get time and date

        MOV     DX,DOSTime+2

        MOV     BX,DOSOutFH             ; where to stuff the time

        MOV     AX,(File_Times SHL 8) + 1

        INT     21h

        MOV     AH,Close

        INT     21h



        IF      IBMVER OR IBMJAPVER

        CALL    PUTBOOT                 ; copy the boot sector also

        ENDIF



        MOV     DX,OFFSET DG:DONE       ; all finished message

        MOV     CX,DoneLen

        XOR     AL,AL                   ; ok error code

SERROR:

        PUSH    AX

        MOV     BX,stderr

        MOV     AH,Write                ; convenient place to display message

        INT     21H

        POP     AX

ErrorExit:

        MOV     AH,EXIT                 ; bye and return error code

        INT     21h



DisplayError:

        MOV     AL,1

        JMP     SERROR

FillMem:

        MOV     CX,cbBuf                ; get length of buffer

        MOV     BX,BIOSInFH             ; get bios source handle

        MOV     DX,OFFSET DG:BUF        ; point to beginning of buffer

        PUSH    CX                      ; save away total length

        CMP     BIOSLenHigh,0           ; > 64K to read?

        JA      UseCX                   ; use CX

        CMP     BIOSLenLow,CX           ; more left to read?

        JA      UseCX                   ; use CX

        MOV     CX,BIOSLenLow           ; move new

UseCX:

        MOV     AH,Read

        INT     21h                     ; read in what we can

        ADD     DX,AX                   ; update pointer for DOS Read

        MOV     pDOS,DX                 ; point to beginning of DOS

        SUB     BIOSLenLow,AX           ; decrement remaining

        SBB     BIOSLenHigh,0           ; do 32 bit

        POP     CX                      ; get original length

        SUB     CX,AX                   ; this much is left



        MOV     BX,DOSInFH              ; get bios source handle

        CMP     DOSLenHigh,0            ; > 64K to read?

        JA      UseCXDOS                ; use CX

        CMP     DOSLenLow,CX            ; more left to read?

        JA      UseCXDOS                ; use CX

        MOV     CX,DOSLenLow            ; move new

UseCXDOS:

        MOV     AH,Read

        INT     21h                     ; read in what we can

        ADD     DX,AX                   ; update pointer for DOS Read

        MOV     pDOSEnd,DX              ; point to End of dos DOS

        SUB     DOSLenLow,AX            ; decrement remaining

        SBB     DOSLenHigh,0            ; do 32 bit arithmetic

        return



OpenFile:

        MOV     AX,(OPEN SHL 8) + 0     ; open for reading only

        INT     21H                     ; Look for BIOS

        retc                            ; not found, go and try again

        STOSW                           ; stash away handle

        MOV     BX,AX                   ; get ready for seeks

        MOV     AX,(LSeek SHL 8) + 2    ; seek relative to eof

        XOR     CX,CX                   ; zero offset

        XOR     DX,DX                   ; zero offset

        INT     21h                     ; get offsets

        STOSW                           ; save low part of size

        STOSW                           ; save low part of size

        MOV     AX,DX

        STOSW                           ; save high part of size

        STOSW                           ; save high part of size

        XOR     DX,DX                   ; zero offset

        MOV     AX,(LSeek SHL 8) + 0    ; seek relative to beginning

        INT     21h

        MOV     AX,(File_Times SHL 8) + 0

        INT     21h                     ; get last write times

        MOV     AX,CX

        STOSW                           ; save time

        MOV     AX,DX

        STOSW                           ; save date

        return



ERR3:

        MOV     DX,OFFSET DG:NODEST

        MOV     CX,NoDestLen

        JMP     DisplayError



DumpMem:

        MOV     DX,OFFSET DG:BUF        ; get offset of bios start

        MOV     CX,pDOS                 ; beginning of next guy

        SUB     CX,DX                   ; difference is length

        JZ      DumpDos                 ; no bios to move

        MOV     BX,BIOSOutFH            ; where to output

        MOV     AH,Write

        INT     21h                     ; wham

DumpDos:

        MOV     DX,pDOS                 ; beginning of dos

        MOV     CX,pDOSEnd              ; end of dos

        SUB     CX,DX                   ; difference is length

        retz                            ; if zero no write

        MOV     BX,DOSOutFH             ; where to output

        MOV     AH,Write

        INT     21h                     ; wham

        ret



        IF      MSVER

CHKLEN:

; CX has size of cluster, DX has pointer to file name

; Returns with flags set on (size of file) - (size of hole)

        PUSH    AX                      ; old size low

        PUSH    BX                      ; old size high

        PUSH    CX                      ; old cluster size

        MOV     AH,Find_First

        MOV     CX,7                    ; attributes to search for

        INT     21H

        JC      ERR3                    ; cannot find file, error

        POP     CX                      ; get cluster size back

        MOV     DX,DS:[80h+find_buf_size_h] ; get destination size high

        MOV     AX,DS:[80h+find_buf_size_l] ; get size low

        ADD     AX,CX                   ; add cluster size

        ADC     DX,0                    ; 32 bit add

        SUB     AX,1                    ; adding CLUSSIZE-1

        SBB     DX,0                    ; 32 bit dec

        DIV     CX                      ; compute new cluster size

        POP     DX                      ; get old high

        POP     BX                      ; get old low

        PUSH    AX                      ; save away dividend

        MOV     AX,BX                   ; put into correct register

        ADD     AX,CX                   ; do the same as above (+CLUSSIZE-1)/CLUSSIZE

        ADC     DX,0                    ; 32 bit add

        SUB     AX,1                    ; adding CLUSSIZE-1

        SBB     DX,0                    ; 32 bit dec

        DIV     CX                      ; compute old cluster size

        POP     DX                      ; get new size

        CMP     AX,DX                   ; is old >= new?

        return

        ENDIF



        IF      IBMJAPVER

PUTBOOT:

        CALL    READ_LLIST              ; Get the list sector and set new boot sector

        MOV     AL,DS:(BYTE PTR 5CH)

        DEC     AL                      ; A=0

        MOV     CX,1

        XOR     DX,DX

        MOV     BX,OFFSET DG:BOOT

        INT     26H                     ; Write out new boot sector

        POPF

        CALL    WRITE_LLIST             ; Make and write out new list sector

        RET

        ENDIF



        IF      IBMVER

PUTBOOT:

        MOV     AH,GET_DPB

        MOV     DL,BYTE PTR DS:[5Ch]    ; Target drive

        INT     21H

ASSUME  DS:NOTHING

        MOV     AL,[BX+16H]             ; Media byte

        PUSH    CS

        POP     DS

ASSUME  DS:DG

        CMP     AL,0FEH

        JB      RET1

        TEST    AL,1

        JZ      GOTBOOT

        MOV     BX,OFFSET DG:BOOT

        MOV     WORD PTR [BX+17],112    ; Set number of dir entries

        MOV     WORD PTR [BX+19],2*8*40 ; Set number of sectors

        INC     BYTE PTR [BX+21]        ; Media = ff

        INC     WORD PTR [BX+26]        ; Number of heads = 2



GOTBOOT:

        MOV     AL,BYTE PTR DS:[5Ch]

        DEC     AL

        MOV     BX,OFFSET DG:BOOT       ; Boot sector

        XOR     DX,DX                   ; Sector 0

        MOV     CX,DX

        INC     CX                      ; One sector

        INT     26H                     ; Write out 8 sector boot sector

        POP     AX                      ; Flags

RET1:   RET

        ENDIF



        IF      IBMJAPVER

READ_BOOT:

        MOV     AL,[DEFALT]

        DEC     AL                      ; A=0

        MOV     CX,1

        XOR     DX,DX

        MOV     BX,OFFSET DG:BOOT

        INT     25H

        POPF

        MOV     AX,[BOOT+108H]          ; Get old first sector of data

        MOV     [RELOC],AX

        RET



READ_LLIST:

        MOV     AL,DS:(BYTE PTR 5CH)

        DEC     AL                      ; A=0

        MOV     CX,1

        MOV     DX,[STARTSECTOR]

        MOV     BX,OFFSET DG:LLISTBUF

        INT     25H

        POPF

        RET



WRITE_LLIST:

        MOV     AX,[STARTSECTOR]

        MOV     DX,AX

        SUB     AX,[RELOC]              ; True reloc factor

        MOV     CL,BYTE PTR [LLISTBUF+0CH]  ; Number of entries needing reloc

        XOR     CH,CH

        JCXZ    NO_RELOCS

        MOV     BX,OFFSET DG:LLISTBUF + 10H

RELLOOP:

        ADD     WORD PTR [BX+2],AX

        ADD     BX,10H

        LOOP    RELLOOP

NO_RELOCS:

        MOV     AL,DS:(BYTE PTR 5CH)

        DEC     AL                      ; A=0

        MOV     CX,1

        MOV     BX,OFFSET DG:LLISTBUF

        INT     26H

        POPF

        RET



CHECK_TRAN:

; All registers preserved. Returns zero if SYS OK, NZ if SYS FAIL

;  AL is drive (1=A,...) AL=0 is not valid



        PUSH    BX

        PUSH    AX

        PUSH    DS

        MOV     DL,AL

        MOV     AH,GET_DPB

        INT     21H

        MOV     AX,[BX.dpb_first_sector]    ; Get new first sector of data

        MOV     BH,[BX.dpb_media]

        POP     DS

        MOV     [STARTSECTOR],AX

        MOV     [BOOT+108H],AX          ; Set new start of data in boot

        POP     AX

        PUSH    AX

        MOV     BL,AL

        INT     11H                     ; IBM EQUIP CALL

        ROL     AL,1

        ROL     AL,1

        AND     AL,3

        JNZ     NOT_SINGLE

        INC     AL

NOT_SINGLE:

        INC     AL                      ;  AL is now MAX floppy #

        CMP     BL,AL

        POP     AX

        JBE     CHECK_FLOP              ;  Is a floppy

        XOR     BL,BL                   ;  Is Hard file

        POP     BX

        RET



CHECK_FLOP:

        CMP     BH,0FBH                 ;  Only floppy that boots

        POP     BX

        RET

        ENDIF



GetKeystroke:

        MOV     AX,(Std_CON_Input_Flush SHL 8) + Std_CON_Input_No_Echo

        INT     21H

        MOV     AX,(Std_CON_Input_Flush SHL 8) + 0

        INT     21H



        return



CODE    ENDS

        END     START






```