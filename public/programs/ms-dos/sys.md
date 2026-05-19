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
description: "This file implements the SYS command in MS-DOS, responsible for transferring system files to make a disk bootable."

summary:
  - point: "Introduces FAT validation to ensure bootable disks"
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "File Allocation Table"
  - point: "Uses direct BIOS and DOS system calls for file manipulation"
    link: "https://en.wikipedia.org/wiki/BIOS"
    link_label: "BIOS"
  - point: "Incorporates error handling for invalid DOS versions and disk configurations"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Reflects early MS-DOS compatibility with IBM PC and other OEMs"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Demonstrates low-level assembly techniques for disk operations"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"

enhancements:
  - id: "buf-data-buffer-for-file-reads"
    line_start: 197
    line_end: 201
    title: "Data buffer for file reads"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "This section defines a buffer labeled 'BUF' for reading data from files during the SYS operation. The buffer is used to temporarily store file contents, including the system files IO.SYS and MSDOS.SYS (or their IBM equivalents). The programmer's goal here is to ensure efficient handling of file data during the copying process. In the early 1980s, memory constraints were severe, and buffer management was critical to avoid wasting precious RAM. The use of a fixed-size buffer reflects the limitations of the 8086 architecture, which had a 16-bit address space and no built-in memory management. This approach influenced later disk utilities and operating systems, where buffer management became a standard practice for file I/O operations. Techniques like this laid the groundwork for modern file systems and utilities that optimize disk access."
  - id: "start-program-entry-point"
    line_start: 217
    line_end: 229
    title: "Program entry point"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The 'Start' label marks the entry point of the SYS program. It begins by jumping to the 'CheckVersion' subroutine, ensuring that the DOS version is compatible before proceeding. This reflects the importance of version control in software distribution during the early 1980s, as MS-DOS evolved rapidly to support new hardware and features. Tim Paterson and Microsoft's team designed SYS to work across multiple DOS versions, a necessity given their OEM licensing strategy. The inclusion of version checks ensured that SYS wouldn't corrupt disks or fail on unsupported systems, a critical factor in maintaining MS-DOS's reputation for reliability. This practice of validating software compatibility became standard in operating systems and applications, influencing tools like Windows Setup and Linux package managers."
  - id: "checkversion-dos-version-validation"
    line_start: 231
    line_end: 247
    title: "DOS version validation"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The 'CheckVersion' subroutine ensures that the running DOS version falls within an acceptable range. It uses interrupt 21h to retrieve the version number and compares it against predefined constants. If the version is too low or too high, the program exits with an error message. This reflects the challenges of maintaining compatibility across multiple versions of DOS, especially as Microsoft licensed MS-DOS to numerous OEMs. The version validation mechanism ensured that SYS could safely operate on disks formatted for the correct DOS version, preventing errors and data loss. This approach influenced later software development practices, including the use of version checks in installers and compatibility layers in modern operating systems."
  - id: "gotbaddos-invalid-dos-version-handler"
    line_start: 249
    line_end: 257
    title: "Invalid DOS version handler"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The 'GOTBADDOS' subroutine handles cases where the DOS version is outside the acceptable range. It displays an error message using interrupt 21h and exits the program. This reflects the importance of robust error handling in early software, where user feedback was critical to diagnosing issues. The error message provides a clear indication of the problem, helping users understand why the operation failed. This approach influenced the development of user-friendly error reporting in later software, including detailed error codes and troubleshooting guides in modern operating systems."
  - id: "okdos-drive-validation"
    line_start: 261
    line_end: 263
    title: "Drive validation after version check"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The 'OKDOS' subroutine resumes execution after a successful version check, validating the drive letter specified by the user. It prepares to process the SYS operation by jumping to the 'SYS' subroutine. This reflects the layered approach to input validation in early software, where each step builds on the previous one to ensure correctness. By separating version and drive validation, the program maintains clarity and modularity, principles that influenced later software design practices, including structured programming and object-oriented design."
  - id: "err0-err1-err2-error-handling-subroutines"
    line_start: 267
    line_end: 301
    title: "Error handling subroutines"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "The 'ERR0', 'ERR1', and 'ERR2' subroutines handle specific error conditions, such as missing or invalid drive letters. Each subroutine sets up an appropriate error message and jumps to the 'DisplayError' routine. This modular approach to error handling reflects the influence of structured programming principles, which emphasize clarity and separation of concerns. By isolating error handling logic, the program makes it easier to understand and maintain. These techniques influenced later software development practices, including the use of exception handling in high-level languages like C++ and Java."
  - id: "sys-main-processing-routine"
    line_start: 303
    line_end: 363
    title: "Main processing routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The 'SYS' subroutine performs the main processing for the SYS command, including validating input and preparing for file copying. It checks whether a file was specified, validates the drive letter, and retrieves the default drive. This reflects the complexity of early disk utilities, where multiple checks were necessary to ensure safe operation. The modular design of the SYS routine demonstrates the influence of structured programming principles, which were gaining popularity in the early 1980s. This approach influenced the development of later disk utilities and file system tools, including the FORMAT and CHKDSK commands in MS-DOS."
  - id: "okfat-fat-validation"
    line_start: 365
    line_end: 427
    title: "FAT validation for bootable disks"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The 'OKFAT' subroutine checks the FAT (File Allocation Table) of the destination disk to ensure it is valid for booting. It reads the first sector of the FAT and verifies its contents. If the FAT is invalid, the program jumps to an error handler. This reflects the importance of FAT validation in early operating systems, where the FAT was central to file management and disk bootability. The use of direct disk reads and checks highlights the low-level nature of SYS and the constraints of the 8086 architecture. FAT validation became a standard practice in disk utilities, influencing tools like FORMAT and CHKDSK in MS-DOS and later operating systems."
  - id: "write-llist-relocation-handler"
    line_start: 1029
    line_end: 1043
    title: "Relocation Handling for Executable Files"
    wikipedia_url: "https://en.wikipedia.org/wiki/Relocation_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The WRITE_LLIST routine processes relocation entries for executable files. Relocation is necessary because programs often cannot assume fixed memory addresses when loaded. This routine adjusts memory addresses based on a relocation factor stored in the RELOC variable. By iterating through a buffer of relocation entries (LLISTBUF), it modifies each entry to reflect the correct memory offset. In the early 1980s, relocation was critical for enabling software portability across different hardware configurations. Tim Paterson likely adapted this technique from prior operating systems like CP/M, which influenced MS-DOS's design. This approach became foundational for executable file formats like EXE and later PE (Portable Executable) files used in Windows."
  - id: "relloops-buffer-adjustment"
    line_start: 1045
    line_end: 1051
    title: "Iterative Buffer Adjustment for Relocation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The RELLOOP section iterates through a buffer of relocation entries, adjusting each entry by adding the relocation factor stored in AX. This loop uses the LOOP instruction, a compact way to decrement CX and repeat until CX reaches zero. The design reflects the constraints of early assembly programming, where minimizing instruction count and execution time was paramount. RELLOOP's efficient handling of relocation entries contributed to MS-DOS's ability to load programs quickly, even on slower hardware like the IBM PC's 4.77 MHz Intel 8088 processor. This technique influenced later operating systems, which adopted similar strategies for managing executable file relocation."
  - id: "no-relocs-int-26h"
    line_start: 1053
    line_end: 1067
    title: "Handling No Relocation Scenarios"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "The NO_RELOCS section handles cases where no relocation entries exist. It uses INT 26H, a BIOS interrupt for disk write operations, to update the disk with relocation data. This reflects MS-DOS's reliance on BIOS services for low-level hardware interaction. By preserving registers and using efficient memory access patterns, this routine ensures compatibility with diverse hardware configurations. The use of INT 26H highlights the tight coupling between MS-DOS and the IBM PC's BIOS, a design choice that enabled rapid adoption by OEMs. This reliance on BIOS interrupts influenced the development of later DOS-compatible systems and software."
  - id: "check-tran-drive-validation"
    line_start: 1071
    line_end: 1117
    title: "Drive Validation and Media Type Detection"
    wikipedia_url: "https://en.wikipedia.org/wiki/Floppy_disk"
    image_url: ""
    image_caption: ""
    content: "The CHECK_TRAN routine validates the drive and determines the media type. It uses BIOS interrupts (INT 21H and INT 11H) to retrieve drive parameters and check equipment status. The routine adjusts the STARTSECTOR variable based on the drive's first sector and updates the BOOT structure. This was crucial for supporting both floppy disks and hard drives, which were becoming more common in the early 1980s. The routine's ability to differentiate between media types ensured MS-DOS's flexibility across various storage devices. This technique influenced later operating systems, which expanded support for diverse storage media, including optical drives and USB devices."
  - id: "not-single-drive-check"
    line_start: 1119
    line_end: 1133
    title: "Single Drive Check and Floppy Validation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Floppy_disk"
    image_url: ""
    image_caption: ""
    content: "The NOT_SINGLE section checks whether the drive is a single floppy drive or a hard disk. It uses bitwise operations to determine the maximum floppy drive number and compares it with the current drive number. This reflects the limitations of early PC hardware, where single floppy systems were common. By distinguishing between floppy and hard drives, the routine ensures proper handling of storage devices. This design influenced later systems, which expanded device detection capabilities to include network drives and removable media. The routine's efficient use of bitwise operations and register preservation highlights the ingenuity required to optimize assembly code for constrained environments."
  - id: "check-flop-boot-disk-validation"
    line_start: 1137
    line_end: 1145
    title: "Boot Disk Validation for Floppy Drives"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: ""
    image_caption: ""
    content: "The CHECK_FLOP routine validates whether the floppy disk is bootable. It compares the media type byte (BH) with a specific value (0FBH) to identify bootable floppy disks. This was critical for ensuring that the system could boot from the correct disk, especially in multi-drive setups. The routine's simplicity reflects the straightforward design of early PC hardware, where boot disks were manually selected. This approach influenced later BIOS and operating systems, which automated boot disk selection and expanded support for booting from diverse media, including CD-ROMs and USB drives."
  - id: "getkeystroke-keyboard-input"
    line_start: 1149
    line_end: 1161
    title: "Keyboard Input Handling for Command-Line Operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The GetKeystroke routine handles keyboard input for command-line operations. It uses INT 21H with specific function codes to read input from the standard console. The routine flushes the input buffer and ensures no echo, providing a clean input experience for the user. This reflects the importance of efficient keyboard handling in MS-DOS, which relied heavily on command-line interactions. The design influenced later operating systems, which expanded input handling capabilities to support graphical interfaces and international keyboards. The routine's reliance on BIOS interrupts highlights the close integration between MS-DOS and the underlying hardware."

---

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

                                                                                              



