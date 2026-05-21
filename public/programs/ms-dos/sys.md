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
description: "The SYS.ASM file from MS-DOS v2.0 demonstrates the evolution of system-level programming in the early 1980s, showcasing techniques that influenced modern operating systems."

summary:
  - point: "Introduced subdirectories and file handles, inspired by Unix"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Demonstrates early device driver and FAT filesystem manipulation"
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "File Allocation Table"
  - point: "Highlights constraints of 16-bit assembly programming for PCs"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"
  - point: "Showcases compatibility mechanisms for IBM PC and other OEMs"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Includes clever memory management techniques for small machines"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"

enhancements:
  - id: "buffer-management-for-file-reads"
    line_start: 197
    line_end: 201
    title: "Buffer Management for File Reads"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "This section defines a buffer area labeled 'BUF' for reading files from disk. The buffer is crucial for handling file I/O operations efficiently on the limited hardware of the IBM PC. At the time, disk access was slow, and memory was scarce, so using a predefined buffer allowed programmers to minimize disk reads and writes, improving performance. Tim Paterson likely adopted this technique from earlier operating systems, such as CP/M, which also relied on buffers for file operations. This approach influenced later systems, including Windows, where buffer management became more sophisticated but retained the same fundamental principles."
  - id: "version-checking-for-dos-compatibility"
    line_start: 231
    line_end: 247
    title: "Version Checking for DOS Compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The 'CheckVersion' subroutine ensures the DOS version is within acceptable bounds. It uses interrupt 21h to retrieve the version number and compares it against predefined constants. This was critical because MS-DOS v2.0 introduced significant changes, such as support for subdirectories and new system calls. Ensuring compatibility prevented errors when running on older or unsupported versions. This kind of version checking became a standard practice in software development, influencing how modern operating systems handle backward compatibility."
  - id: "error-handling-for-invalid-dos"
    line_start: 249
    line_end: 257
    title: "Error Handling for Invalid DOS Versions"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The 'GOTBADDOS' routine handles cases where the DOS version is outside the acceptable range. It displays an error message using interrupt 21h and exits gracefully. This kind of user feedback was essential in the early days of computing, where cryptic errors could confuse users. By providing clear messages, MS-DOS set a precedent for user-friendly error handling, which later became a hallmark of software design across platforms."
  - id: "memory-management-for-small-machines"
    line_start: 365
    line_end: 367
    title: "Memory Management for Small Machines"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The 'OKFAT' section includes logic for checking the validity of the destination drive's FAT (File Allocation Table). It uses interrupt 25h to read the FAT sector and ensures the drive is formatted correctly. This routine reflects the constraints of early PCs, where drives were small, and formatting errors could render a disk unusable. The FAT system itself became a foundational technology, influencing file systems like FAT32 and exFAT used in modern devices."
  - id: "file-creation-and-attribute-management"
    line_start: 521
    line_end: 555
    title: "File Creation and Attribute Management"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The 'PUTSYS' routine creates new files for the BIOS and DOS system components on the destination drive. It sets file attributes using interrupt 21h, ensuring the files are marked as system files. This level of control over file attributes was a key feature of MS-DOS, allowing developers to manage file visibility and access. The concept of file attributes influenced later operating systems, including Windows NT, where attributes like 'hidden' and 'system' are still used."
  - id: "recursive-memory-loading-for-file-copy"
    line_start: 557
    line_end: 573
    title: "Recursive Memory Loading for File Copy"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The 'Copy' routine uses a recursive approach to load memory with file data and write it to the destination. It checks if more data remains to be copied and reloads the buffer as needed. This technique was necessary for handling large files on systems with limited memory. The recursive logic ensured efficient use of available resources, a principle that remains relevant in modern programming for constrained environments like embedded systems."
  - id: "dynamic-buffer-allocation-for-file-handling"
    line_start: 657
    line_end: 723
    title: "Dynamic Buffer Allocation for File Handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The 'FillMem' routine dynamically allocates buffer space for reading BIOS and DOS files. It calculates the buffer size based on available memory and adjusts the read length accordingly. This adaptive approach was innovative for its time, allowing MS-DOS to run efficiently on machines with varying memory sizes. Dynamic memory allocation became a cornerstone of modern operating systems, enabling features like virtual memory and dynamic heap management."
  - id: "file-opening-and-size-calculation"
    line_start: 727
    line_end: 775
    title: "File Opening and Size Calculation"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The 'OpenFile' routine opens files for reading and calculates their size using interrupt 21h. It retrieves the file's last write time and stores it for later use. This meticulous handling of file metadata reflects the importance of data integrity in MS-DOS. The ability to track file sizes and timestamps influenced later systems, where metadata became critical for features like journaling and file versioning."
  - id: "boot-sector-writing-for-ibm-compatibility"
    line_start: 893
    line_end: 979
    title: "Boot Sector Writing for IBM Compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_PC"
    image_url: ""
    image_caption: ""
    content: "The 'PUTBOOT' routine writes a new boot sector to the destination drive, ensuring compatibility with IBM systems. It uses interrupt 26h to perform the write operation and adjusts parameters like the number of directory entries and sectors. This low-level manipulation of the boot sector was critical for making MS-DOS work seamlessly on IBM PCs. The boot sector design influenced later operating systems, including Windows, which retained similar structures for backward compatibility."
  - id: "write-llist-relocation-logic"
    line_start: 1029
    line_end: 1043
    title: "Relocation Logic for Linked List Entries"
    wikipedia_url: "https://en.wikipedia.org/wiki/Relocation_(computing)"
    image_url: ""
    image_caption: ""
    content: "This section handles the relocation of linked list entries in memory, adjusting their addresses based on a relocation factor. The routine begins by calculating the true relocation factor and determining the number of entries needing adjustment. If no entries require relocation, it jumps to the NO_RELOCS section. Otherwise, it iterates through the linked list buffer, updating each entry's address. In 1983, memory management was a critical challenge due to limited RAM (often 64KB to 256KB on PCs). Relocation techniques like this allowed MS-DOS to dynamically adjust memory references, ensuring compatibility across varying hardware configurations. Tim Paterson's approach here reflects his deep understanding of the 8086 architecture and its segmented memory model. This technique influenced later operating systems, which adopted similar relocation strategies for dynamic memory management in constrained environments."
  - id: "relloops-linked-list-adjustment"
    line_start: 1045
    line_end: 1051
    title: "Iterative Adjustment of Linked List Addresses"
    wikipedia_url: "https://en.wikipedia.org/wiki/Linked_list"
    image_url: ""
    image_caption: ""
    content: "The RELLOOP section iteratively adjusts the memory addresses of linked list entries using the relocation factor calculated earlier. Each iteration updates the address of the current entry and moves to the next one. The LOOP instruction, a hallmark of 8086 assembly, simplifies iteration by decrementing the counter and jumping back if it's non-zero. This efficient mechanism was crucial for performance on early PCs, where every CPU cycle mattered. By automating address adjustments, this routine reduced the complexity of managing linked lists in a segmented memory model. Techniques like this were later refined in higher-level languages, influencing data structure handling in C and beyond."
  - id: "no-relocs-direct-disk-write"
    line_start: 1053
    line_end: 1067
    title: "Direct Disk Write When No Relocations Needed"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_sector"
    image_url: ""
    image_caption: ""
    content: "When no relocations are required, this section writes the linked list buffer directly to disk using interrupt 26h. The routine prepares the buffer address and sector count, then invokes the BIOS disk write function. Direct disk access was a defining feature of MS-DOS, allowing programs to bypass higher-level abstractions for maximum performance. This approach was common in the early 1980s, when disk controllers offered minimal functionality and programmers had to manage sector-level operations manually. The reliance on BIOS interrupts highlights the tight coupling between software and hardware in this era. Later operating systems abstracted these operations, but MS-DOS's direct disk access inspired tools like Norton Utilities and other low-level disk management software."
  - id: "check-tran-drive-validation"
    line_start: 1071
    line_end: 1117
    title: "Drive Validation and Media Type Detection"
    wikipedia_url: "https://en.wikipedia.org/wiki/Drive_letter_assignment"
    image_url: ""
    image_caption: ""
    content: "The CHECK_TRAN routine validates the specified drive and determines its media type. It retrieves the drive parameter block (DPB) using interrupt 21h, extracts the first sector and media type, and updates the system's start sector. The routine also checks whether the drive is a floppy disk or hard drive, using BIOS equipment calls to identify the maximum floppy number. This logic reflects the transition from single-drive systems to multi-drive setups, a major shift in personal computing during the early 1980s. By dynamically detecting media types, MS-DOS ensured compatibility with a wide range of storage devices. This technique laid the groundwork for modern operating systems, which continue to rely on device discovery and validation mechanisms."
  - id: "not-single-floppy-check"
    line_start: 1119
    line_end: 1145
    title: "Floppy Disk Boot Validation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: ""
    image_caption: ""
    content: "The NOT_SINGLE section checks whether the drive is a bootable floppy disk. It compares the media type against a predefined value (0FBh), ensuring only valid bootable floppies are accepted. This logic was critical for systems that relied on floppy disks for booting, as hard drives were still a luxury in 1983. By enforcing strict validation, MS-DOS reduced the risk of boot errors and ensured reliable startup. This approach influenced later boot loaders, which adopted similar checks for removable media. The floppy disk's decline in the 1990s marked the end of such routines, but their legacy persists in USB boot validation and other modern equivalents."
  - id: "getkeystroke-bios-input"
    line_start: 1149
    line_end: 1161
    title: "Keystroke Input via BIOS Interrupts"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS_interrupt_call"
    image_url: ""
    image_caption: ""
    content: "The GetKeystroke routine reads user input from the keyboard using BIOS interrupt 21h. It configures the input mode to flush the buffer and disable echo, ensuring clean and silent input handling. This routine exemplifies the low-level nature of MS-DOS, where direct BIOS calls were used to interact with hardware. Keyboard input was a fundamental feature, enabling command-line interfaces to function effectively. By leveraging BIOS interrupts, MS-DOS provided a consistent input mechanism across diverse hardware configurations. This approach influenced later systems, including early Windows versions, which built on MS-DOS's input handling techniques. The reliance on BIOS interrupts eventually faded as operating systems adopted more abstract input APIs."

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
