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
description: "The SYS program in MS-DOS v2.0, written in 8086 assembly, was a critical utility for transferring system files to make a disk bootable, showcasing the evolution of DOS from its origins to a more Unix-inspired architecture."

summary:
  - point: "Introduced FAT validation for bootable disks"
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "File Allocation Table"
  - point: "Incorporated Unix-like system calls in MS-DOS v2.0"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Optimized for small machines with limited memory"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Allowed non-contiguous DOS files on disks"
    link: "https://en.wikipedia.org/wiki/Disk_partitioning"
    link_label: "Disk Partitioning"
  - point: "Included error handling for unformatted or invalid disks"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "buffer-memory-allocation"
    line_start: 197
    line_end: 213
    title: "Buffer setup for file reads"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "This section defines the buffer memory area used for file reads, labeled as 'BUF'. The programmer allocates space to temporarily hold data being read from disk files, such as IBMBIO.COM and IBMDOS.COM. In the early 1980s, memory was a precious resource, and every byte had to be carefully managed. Tim Paterson and later contributors to MS-DOS v2.0 were working within the constraints of machines like the IBM PC, which often had only 64KB or 128KB of RAM. This buffer would ensure efficient data transfer while minimizing the risk of overwriting critical memory areas. The design reflects the meticulous attention to low-level memory management that defined programming during this era. The concept of buffers remains central to computing today, though modern systems abstract much of this complexity away from developers."
  - id: "program-entry-point"
    line_start: 217
    line_end: 229
    title: "Program entry point and version header"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The 'Start' label marks the entry point of the SYS program, with an immediate jump to the 'CheckVersion' routine. This section also includes a version header ('Vers 1.81'), a simple string indicating the program's revision. In the early 1980s, versioning was a manual process, often embedded directly in the source code as a static string. This header would help users and developers identify the specific build of the utility, which was crucial in an era when software updates were distributed via floppy disks and compatibility issues were common. The inclusion of versioning reflects the growing complexity of software maintenance as MS-DOS matured from a simple operating system into a foundational platform for personal computing."
  - id: "version-checking-routine"
    line_start: 231
    line_end: 247
    title: "Checking DOS version compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS_version_history"
    image_url: ""
    image_caption: ""
    content: "The 'CheckVersion' routine ensures the SYS program is running on a compatible version of DOS. It retrieves the current DOS version using interrupt 21h and compares it against predefined minimum and maximum acceptable versions. If the version is outside the acceptable range, the program jumps to the 'GOTBADDOS' error handler. This kind of version checking was critical in the early days of MS-DOS, as the operating system evolved rapidly and older utilities could break on newer versions. Tim Paterson's original 86-DOS had no such mechanism, but as MS-DOS grew, backward compatibility became a major concern, especially for OEMs and end-users relying on consistent behavior across updates."
  - id: "error-handling-bad-dos-version"
    line_start: 249
    line_end: 257
    title: "Handling incompatible DOS versions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "The 'GOTBADDOS' routine handles the case where the DOS version is incompatible with the SYS program. It displays an error message ('BADVER') and exits the program using interrupt 20h, an older DOS termination call. This reflects the transitional nature of MS-DOS v2.0, which was moving toward more Unix-like system calls but still retained compatibility with earlier conventions. The error handling here is minimal but functional, providing users with a clear indication of the problem. In the context of 1983, this approach was sufficient, as most users were technically proficient and accustomed to troubleshooting issues themselves."
  - id: "fat-validation-for-ibm-disks"
    line_start: 303
    line_end: 363
    title: "Validating FAT for IBM-formatted disks"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "This section includes a conditional block ('IF IBMVER') that validates the FAT (File Allocation Table) of the destination disk. The program reads the first sector of the FAT using interrupt 25h and checks its media descriptor byte to ensure the disk is properly formatted. If the FAT is invalid, the program jumps to an error handler ('ERR3'). This validation was added to address issues specific to IBM-formatted disks, which could sometimes appear unformatted due to quirks in IBM's implementation. The FAT system itself was a revolutionary file system introduced by Microsoft and widely adopted in the PC era. This code highlights the close collaboration between Microsoft and IBM during the development of the IBM PC, as well as the challenges of ensuring compatibility across different hardware and software environments."
  - id: "copying-system-files"
    line_start: 429
    line_end: 503
    title: "Copying IBMBIO.COM and IBMDOS.COM"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: ""
    image_caption: ""
    content: "The 'DOSWRT' routine handles the copying of system files (IBMBIO.COM and IBMDOS.COM) to the destination disk, making it bootable. The program adjusts file attributes, creates new files using interrupt 21h, and writes the contents of the source files to the destination. This process was essential for preparing a bootable disk, allowing users to install MS-DOS on new or formatted disks. The SYS program was a critical utility for OEMs and end-users alike, simplifying the process of setting up a new system. In the broader context of computing history, this routine represents the transition from manual disk preparation to automated tools, paving the way for modern operating system installers."
  - id: "memory-management-for-file-copy"
    line_start: 657
    line_end: 675
    title: "Managing memory during file copy"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The 'FillMem' routine manages memory allocation during the file copy process. It calculates the available buffer size, reads data from the source files into memory, and updates pointers for subsequent reads. This routine reflects the constraints of early PCs, which had limited RAM and required careful management to avoid overwriting critical data. The use of 32-bit arithmetic for handling file lengths demonstrates the forward-thinking design of MS-DOS v2.0, which anticipated larger files and more complex storage needs. Memory management remains a foundational aspect of system programming, and routines like 'FillMem' illustrate the ingenuity required to optimize performance on constrained hardware."
  - id: "boot-sector-writing"
    line_start: 893
    line_end: 919
    title: "Writing the boot sector"
    wikipedia_url: "https://en.wikipedia.org/wiki/Boot_sector"
    image_url: ""
    image_caption: ""
    content: "The 'PUTBOOT' routine writes a new boot sector to the destination disk, ensuring it is bootable. It uses interrupt 26h to write the sector directly to the disk and updates key parameters such as the media descriptor byte and directory entries. This routine highlights the low-level nature of MS-DOS programming, where direct disk access was common. The boot sector is a critical component of any operating system, containing the code needed to load the OS into memory during startup. By automating the creation of a boot sector, the SYS program simplified the process of preparing bootable disks, making MS-DOS more accessible to non-technical users."
  - id: "write-llist-relocation-logic"
    line_start: 1029
    line_end: 1043
    title: "Relocation logic for linked list entries"
    wikipedia_url: "https://en.wikipedia.org/wiki/Relocation_(computer_programming)"
    image_url: ""
    image_caption: ""
    content: "The WRITE_LLIST subroutine adjusts linked list entries by applying a relocation factor. It begins by calculating the true relocation offset and iterates through the linked list buffer, updating each entry's address. This functionality was crucial for managing memory in a segmented architecture like the Intel 8086, where programs often had to relocate themselves dynamically during execution. In 1983, MS-DOS v2.0 was being reimagined to support more complex file systems and multitasking features inspired by Unix. Memory management became a critical concern as the operating system evolved to handle subdirectories and file handles. Tim Paterson's original 86-DOS design had been simple and direct, but the rewrite led by Microsoft engineers required more sophisticated techniques like this relocation logic. The concept of relocation persists in modern computing, though it has evolved significantly with virtual memory systems and advanced compilers."
  - id: "relloops-iteration-update"
    line_start: 1045
    line_end: 1051
    title: "Iterative update of linked list entries"
    wikipedia_url: "https://en.wikipedia.org/wiki/Loop_(computing)"
    image_url: ""
    image_caption: ""
    content: "The RELLOOP section iterates through the linked list buffer and updates each entry's address by adding the relocation factor. This loop uses the LOOP instruction, a hallmark of 8086 assembly programming, which automatically decrements the CX register and checks if it has reached zero. In the early 1980s, assembly programmers relied heavily on such efficient constructs to minimize code size and execution time. The 8086 processor, with its limited instruction set and registers, forced developers to be resourceful and precise. RELLOOP exemplifies the era's programming ethos: compact, efficient, and tailored to the hardware. This approach influenced generations of programmers, even as higher-level languages and more abstract paradigms became dominant."
  - id: "no-relocs-default-handling"
    line_start: 1053
    line_end: 1067
    title: "Default handling for no relocation entries"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_26h"
    image_url: ""
    image_caption: ""
    content: "The NO_RELOCS section handles cases where no relocation is needed. It uses INT 26h, the DOS interrupt for absolute disk writes, to write the linked list buffer directly to disk. This interrupt was a low-level mechanism for interacting with storage devices, bypassing the file system entirely. In the context of MS-DOS v2.0, this routine reflects the operating system's dual nature: it was evolving toward a more structured, Unix-like model but still retained direct, low-level disk access for performance-critical tasks. Such routines were essential for bootstrapping and system-level operations, ensuring reliability in environments where hardware and software compatibility varied widely."
  - id: "check-tran-drive-validation"
    line_start: 1071
    line_end: 1117
    title: "Drive validation and parameter block manipulation"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOS_API"
    image_url: ""
    image_caption: ""
    content: "CHECK_TRAN validates a drive and retrieves its drive parameter block (DPB) using INT 21h, the primary DOS API interrupt. The DPB contains critical information about the drive's structure, such as the first sector of data and media type. This subroutine also updates the boot sector with the new start of data, ensuring consistency across system operations. In 1983, MS-DOS v2.0 was expanding its capabilities to support multiple drives and more complex storage configurations. The use of DPBs reflects this shift, as it allowed the operating system to abstract drive details and manage them systematically. This abstraction was inspired by Unix's device-independent approach, marking a significant departure from the simpler, single-drive assumptions of MS-DOS 1.x."
  - id: "not-single-floppy-check"
    line_start: 1119
    line_end: 1133
    title: "Floppy disk validation logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Floppy_disk"
    image_url: ""
    image_caption: ""
    content: "NOT_SINGLE determines whether the drive is a floppy disk or a hard drive, based on the equipment call (INT 11h) and media type. This distinction was crucial in the early 1980s, as floppy disks were the primary storage medium for personal computers, while hard drives were just beginning to emerge. MS-DOS v2.0 had to accommodate both, ensuring compatibility with legacy systems while supporting newer hardware. The logic in this section highlights the transitional nature of computing at the time, as developers grappled with the rapid evolution of storage technologies. The ability to differentiate between floppy and hard drives laid the groundwork for more sophisticated storage management in later operating systems."
  - id: "check-flop-boot-validation"
    line_start: 1137
    line_end: 1145
    title: "Boot validation for floppy disks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: ""
    image_caption: ""
    content: "CHECK_FLOP ensures that the floppy disk is bootable by checking its media type. This validation step was critical for systems relying on floppy disks as their primary boot medium. In the early 1980s, boot reliability was a major concern, as corrupted or incompatible disks could render a system unusable. MS-DOS v2.0 introduced more robust handling of boot processes, reflecting the increasing complexity of personal computing. By validating the boot media, this routine contributed to the operating system's stability and usability, reinforcing its reputation as a reliable platform for business and personal use."
  - id: "getkeystroke-keyboard-input"
    line_start: 1149
    line_end: 1173
    title: "Keyboard input handling via INT 21h"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_21h"
    image_url: ""
    image_caption: ""
    content: "GetKeystroke retrieves keyboard input using INT 21h, the DOS interrupt for console operations. It supports both flushed and non-echoed input modes, allowing programs to handle user input flexibly. In the context of MS-DOS v2.0, this routine reflects the operating system's focus on interactive command-line interfaces, which were the norm in the early 1980s. Keyboard input was a fundamental aspect of user interaction, and efficient handling of it was essential for performance and usability. The use of INT 21h demonstrates the modularity of DOS, as it provided a consistent interface for hardware interaction across different devices. This design philosophy influenced later operating systems, which built on DOS's interrupt-driven approach to system calls."

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