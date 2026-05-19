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
description: "SYS.ASM is the assembly source for the MS-DOS SYS utility, a critical program for transferring system files and making disks bootable. It reflects the evolution of MS-DOS from its origins in 86-DOS to its Unix-inspired rewrite in version 2.0."

summary:
  - point: "Introduces subdirectories and file handles in MS-DOS 2.0"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Includes hardware-specific checks for IBM and Japanese versions"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Uses BIOS and DOS file manipulation routines for disk preparation"
    link: "https://en.wikipedia.org/wiki/BIOS"
    link_label: "BIOS"
  - point: "Demonstrates early use of FAT file system validation"
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "FAT File System"
  - point: "Reflects constraints of early 8086 assembly programming"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"

enhancements:
  - id: "title-and-equates"
    line_start: 1
    line_end: 41
    title: "Defining constants for MS-DOS versions"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The file begins with the TITLE directive and a series of EQU statements defining constants like TRUE, FALSE, and version-specific flags (IBMVER, MSVER). These constants are used throughout the program to toggle functionality based on the target system and version. In 1983, MS-DOS had to support a growing ecosystem of hardware, including IBM PCs and OEM-specific variants. Tim Paterson and later Microsoft engineers designed these flags to make the code adaptable to different environments. This modularity was crucial for MS-DOS's success as a licensed operating system. The approach of using EQU constants for configuration persists in modern software development, albeit in higher-level languages and frameworks."
  - id: "data-segment-setup"
    line_start: 87
    line_end: 193
    title: "Setting up data structures for file handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "This section defines the data segment, including file handles, buffer sizes, and file paths for BIOS and DOS system files. These structures are essential for the SYS utility's operation, which involves reading, writing, and validating system files on the target disk. The inclusion of external variables like BADDRV and BADPARM suggests modularity, allowing the program to handle errors dynamically. In the early 1980s, disk preparation tools like SYS were critical for bootstrapping operating systems on new hardware. The careful allocation of memory and use of fixed-length buffers reflect the constraints of the 8086 architecture, which lacked advanced memory management features. These techniques laid the groundwork for later utilities in more sophisticated operating systems."
  - id: "start-and-check-version"
    line_start: 217
    line_end: 247
    title: "Version validation for compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The Start and CheckVersion routines validate the DOS version before proceeding. By using INT 21H to query the operating system version, the program ensures compatibility with the SYS utility's requirements. If the version is outside the acceptable range, it jumps to GOTBADDOS to display an error and exit. This reflects the fragmented nature of early PC software, where compatibility was not guaranteed across systems. Tim Paterson's original 86-DOS was designed for simplicity, but as MS-DOS evolved, version checks became necessary to handle the growing complexity of features like subdirectories and device drivers. This pattern of version validation remains a standard practice in software development, ensuring backward compatibility and preventing undefined behavior."
  - id: "sys-routine"
    line_start: 303
    line_end: 363
    title: "Preparing the target disk for system files"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The SYS routine checks the target disk for validity and prepares it for system file installation. It ensures no files are specified, validates the drive letter, and checks for sufficient space. The use of INT 21H calls for low-level disk operations highlights the program's reliance on DOS interrupt services. In 1983, disk preparation was a manual and error-prone process, making utilities like SYS indispensable for users. The routine's careful validation reflects the need to prevent data loss or corruption, a critical concern in the era of floppy disks and limited storage. This approach influenced later disk utilities, which automated more aspects of system file installation."
  - id: "doswrt-and-putsys"
    line_start: 429
    line_end: 555
    title: "Writing system files to the target disk"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS"
    image_url: ""
    image_caption: ""
    content: "DOSWRT and PUTSYS handle the actual writing of system files (BIOS and DOS) to the target disk. These routines use INT 21H calls to create new files and set their attributes, ensuring they are marked as system files. The program also adjusts file paths to match the target drive letter. In the early 1980s, system file installation was a critical step in making disks bootable, especially for OEMs customizing MS-DOS for their hardware. The modular design of these routines reflects Microsoft's strategy of licensing MS-DOS widely, requiring adaptability to different disk formats and hardware configurations. This modularity became a hallmark of Microsoft's software design philosophy."
  - id: "fillmem-and-usecx"
    line_start: 657
    line_end: 707
    title: "Buffer management for file reading"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_8086"
    image_url: ""
    image_caption: ""
    content: "The FillMem routine manages memory buffers for reading BIOS and DOS files. It calculates the buffer size, reads data in chunks, and updates pointers for subsequent reads. The UseCX and UseCXDOS sections handle cases where file sizes exceed 64KB, reflecting the limitations of the 8086 architecture's segmented memory model. In the early 1980s, efficient memory management was crucial for programs running on systems with limited RAM. The SYS utility's careful handling of buffers ensured reliable file operations, even under constrained conditions. These techniques influenced later software development, where memory management became increasingly sophisticated."
  - id: "openfile-routine"
    line_start: 727
    line_end: 773
    title: "Opening and validating system files"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The OpenFile routine opens BIOS and DOS files for reading and validates their sizes and timestamps. It uses INT 21H calls for file operations and stores metadata like file handles and sizes in the data segment. This routine reflects the importance of file validation in ensuring the integrity of system files during disk preparation. In the early days of MS-DOS, file corruption or mismatched versions could render a disk unbootable, making robust validation essential. The routine's design demonstrates the careful attention to detail required to handle low-level file operations reliably, a skill that defined early assembly programming."
  - id: "chklen-routine"
    line_start: 827
    line_end: 885
    title: "Cluster size validation for system files"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "CHKLEN checks the cluster size of the target disk against the sizes of the BIOS and DOS files. It ensures the files fit within the available space and adjusts their placement accordingly. This routine highlights the challenges of working with the FAT file system, where cluster sizes could vary based on disk formatting. In 1983, FAT was still evolving, and utilities like SYS had to account for its quirks to ensure reliable disk preparation. The routine's careful arithmetic and validation reflect the precision required in early assembly programming, where errors could have catastrophic consequences for data integrity."
  - id: "putboot-routine"
    line_start: 893
    line_end: 913
    title: "Writing the boot sector to the target disk"
    wikipedia_url: "https://en.wikipedia.org/wiki/Boot_sector"
    image_url: ""
    image_caption: ""
    content: "PUTBOOT writes a new boot sector to the target disk, ensuring it is properly formatted for booting. It uses INT 26H calls for low-level disk writes and adjusts the sector layout to match the target system. In the early 1980s, boot sector preparation was a critical step in making disks bootable, especially for OEMs customizing MS-DOS for their hardware. The routine's design reflects the need to handle different disk formats and hardware configurations reliably. This approach influenced later utilities, which automated more aspects of boot sector preparation."
  - id: "check-tran-routine"
    line_start: 1071
    line_end: 1117
    title: "Validating bootable devices"
    wikipedia_url: "https://en.wikipedia.org/wiki/Boot_device"
    image_url: ""
    image_caption: ""
    content: "CHECK_TRAN validates the target device as bootable, checking its media type and first sector layout. It uses INT 21H calls to query device parameters and adjusts the boot sector accordingly. This routine reflects the challenges of supporting diverse hardware in the early PC era, where bootable devices ranged from floppy disks to hard drives. The careful validation ensures the SYS utility can handle these variations reliably, a critical feature for OEMs customizing MS-DOS for their systems. This approach influenced later operating systems, which adopted more sophisticated methods for boot device validation."

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