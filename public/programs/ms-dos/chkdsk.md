---
title: "CHKDSK.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/CHKDSK.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/CHKDSK.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "chkdsk"
order: 22
description: "The CHKDSK utility in MS-DOS v2.0 was a pivotal tool for ensuring disk integrity, showcasing early efforts to manage file systems under constrained hardware environments."

summary:
  - point: "CHKDSK introduced FAT validation and repair routines."
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "File Allocation Table"
  - point: "Implemented techniques for handling fragmented files."
    link: "https://en.wikipedia.org/wiki/Disk_fragmentation"
    link_label: "Disk Fragmentation"
  - point: "Used interrupt-driven I/O for disk operations."
    link: "https://en.wikipedia.org/wiki/Interrupt"
    link_label: "Interrupts"
  - point: "Adapted Unix-inspired directory handling for MS-DOS."
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "CHKDSK became a standard utility in DOS-based systems."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"

enhancements:
  - id: "dirbuf-disk-buffering"
    line_start: 165
    line_end: 187
    title: "How CHKDSK Buffered Disk Searches"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_buffer"
    image_url: ""
    image_caption: ""
    content: "This section defines the DIRBUF label and related data structures, which serve as the entry buffer for disk searches. The buffer is used to temporarily store directory entries and file control blocks (FCBs) during disk operations. At the time, disk operations were slow due to the mechanical nature of hard drives and floppy drives, so buffering was essential to reduce the number of direct disk accesses. The inclusion of volume ID and extended FCBs reflects the growing complexity of file systems in MS-DOS v2.0, which introduced subdirectories and enhanced file handling capabilities. This approach to buffering would later influence the design of caching mechanisms in modern operating systems, such as Windows and Linux, where memory is used to optimize disk I/O performance."
  - id: "rootstr-directory-handling"
    line_start: 199
    line_end: 319
    title: "Unix-Inspired Directory Management in MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Directory_(computing)"
    image_url: ""
    image_caption: ""
    content: "The ROOTSTR section defines constants and data structures for managing directories, including special entries like \".\" and \"..\" for current and parent directories. These conventions were borrowed from Unix, which had established them as a standard for hierarchical file systems. MS-DOS v2.0 marked a significant departure from earlier versions by introducing support for subdirectories, a feature that was essential for organizing files on increasingly large and complex storage devices. This innovation made MS-DOS more competitive with Unix and other operating systems of the era, and it laid the groundwork for directory structures in later versions of Windows."
  - id: "chkdsk-entry-point"
    line_start: 367
    line_end: 369
    title: "The Entry Point That Starts It All"
    wikipedia_url: "https://en.wikipedia.org/wiki/CHKDSK"
    image_url: ""
    image_caption: ""
    content: "The CHKDSK label marks the entry point of the disk consistency checker. It begins by jumping to the CHSTRT subroutine, which initializes the program by verifying the DOS version and setting up the stack. This entry point encapsulates the utility's primary purpose: to ensure the integrity of the file system and repair any issues found. CHKDSK was crucial in an era when disk errors were common due to hardware limitations and the lack of robust error-checking mechanisms. The utility's design influenced later diagnostic tools, such as Scandisk in Windows 95, and remains a foundational concept in file system maintenance."
  - id: "stack-management"
    line_start: 445
    line_end: 451
    title: "The Stack Adjustment That Prevented Crashes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Call_stack"
    image_url: ""
    image_caption: ""
    content: "The SETSTACK subroutine adjusts the stack pointer to ensure sufficient stack space for program execution. It uses a combination of direct memory manipulation and conditional checks to allocate more stack space if needed. This was a critical safeguard in MS-DOS, where the lack of memory protection meant that stack overflows could easily corrupt other parts of the program or operating system. By dynamically managing the stack, CHKDSK avoided crashes during complex operations, setting a precedent for robust memory management techniques in later software."
  - id: "fat-validation"
    line_start: 755
    line_end: 809
    title: "Reading and Validating the FAT"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The RDLOOP subroutine reads the File Allocation Table (FAT) from disk and validates its contents. The FAT is a critical component of the MS-DOS file system, storing information about the allocation of disk space for files. RDLOOP uses interrupt 25H to perform disk reads and checks the FAT ID byte to ensure its validity. If errors are detected, the subroutine attempts retries and prompts the user for action. This robust error-handling mechanism was essential in an era when disk errors were common due to hardware limitations. The techniques pioneered here influenced later file system utilities, including Scandisk and modern disk repair tools."
  - id: "fragmentation-check"
    line_start: 899
    line_end: 1037
    title: "Detecting Fragmentation in Specified Files"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_fragmentation"
    image_url: ""
    image_caption: ""
    content: "The CHECKFILES and FRAGCHK routines search the directory for files specified on the command line and report the number of fragmented allocation units found. Fragmentation occurs when files are stored in non-contiguous clusters on disk, leading to slower access times. These routines use the FAT to trace the chain of clusters for each file and count the fragments. This functionality was particularly important in the early 1980s, when disk drives had limited capacity and performance. By identifying fragmented files, CHKDSK helped users optimize their storage and improve system performance. The concept of fragmentation detection and repair became a standard feature in disk utilities, influencing tools like Defrag in later Windows versions."
  - id: "file-system-check-trigger"
    line_start: 1039
    line_end: 1051
    title: "How CHKDSK Decides to Report Errors"
    wikipedia_url: "https://en.wikipedia.org/wiki/CHKDSK"
    image_url: ""
    image_caption: ""
    content: "The FILSPOK routine checks whether a file system fragment count equals 2, indicating potential issues. If the condition is met, it jumps to CDONE, bypassing error reporting. Otherwise, it prints a 'NOEXTENTS' message. This simple decision-making mechanism reflects the constrained environment of early PCs, where diagnostics had to be efficient and direct. In the early 1980s, disk fragmentation was a common issue, and tools like CHKDSK were vital for maintaining system health. This approach laid the groundwork for more sophisticated disk utilities, influencing tools like Norton Disk Doctor and modern filesystem checkers in Linux and Windows."
  - id: "cluster-to-sector-conversion"
    line_start: 1057
    line_end: 1093
    title: "Mapping Clusters to Sectors: FIGREC Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The FIGREC routine converts a cluster number in BX to a sector number in DX. It uses the cluster shift value from the Disk Parameter Block (DPB) and calculates the first sector of the cluster. This routine exemplifies the low-level manipulation required to interact with the FAT filesystem, which was pivotal to MS-DOS. At the time, FAT was a groundbreaking filesystem, balancing simplicity and efficiency for small storage devices. FIGREC's logic influenced later filesystem utilities and the development of more advanced storage management techniques, such as those seen in NTFS and ext4."
  - id: "volume-id-printing"
    line_start: 1095
    line_end: 1149
    title: "PRINTID: Displaying Volume Information"
    wikipedia_url: "https://en.wikipedia.org/wiki/Volume_(computing)"
    image_url: ""
    image_caption: ""
    content: "PRINTID retrieves and displays the volume ID, including the name and creation date. It uses INT 21H to access internationalization variables and formats the output based on the system's date and time settings. This routine highlights the importance of user-friendly diagnostics in early computing, where users relied on textual feedback to understand system states. The ability to print volume IDs became a standard feature in disk utilities, influencing tools like Windows' Disk Management and Linux's `lsblk` command."
  - id: "date-formatting-routines"
    line_start: 1153
    line_end: 1211
    title: "USPDAT and EUPDAT: Formatting Dates for Output"
    wikipedia_url: "https://en.wikipedia.org/wiki/Date_and_time_representation_by_country"
    image_url: ""
    image_caption: ""
    content: "USPDAT and EUPDAT handle date formatting based on regional settings. USPDAT uses the month name followed by the day, while EUPDAT places the day before the month name. These routines reflect the growing need for internationalization in software during the 1980s, as MS-DOS expanded to global markets. The logic here influenced later date-handling libraries and APIs, such as those in Java and Python, which support diverse regional formats."
  - id: "month-name-lookup"
    line_start: 1215
    line_end: 1263
    title: "P_MONTH_NAM: Printing Month Names from a Table"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "P_MONTH_NAM uses a lookup table to retrieve and print month names based on the input date. By calculating the offset into the table, it efficiently accesses the correct name. Lookup tables were a common optimization in assembly programming, reducing runtime computation at the cost of memory. This technique influenced later software design, where precomputed tables are used for tasks like character encoding and graphics rendering."
  - id: "time-formatting-routine"
    line_start: 1343
    line_end: 1433
    title: "P_TIME: Formatting Time for Display"
    wikipedia_url: "https://en.wikipedia.org/wiki/Time_format"
    image_url: ""
    image_caption: ""
    content: "P_TIME formats and prints the current time, handling both 12-hour and 24-hour formats. It adjusts for AM/PM and suppresses leading zeros based on user preferences. This routine demonstrates the attention to detail required for user-friendly output in early software. The ability to toggle between time formats became a standard feature in operating systems and influenced the development of modern time-handling libraries."
  - id: "ascii-conversion-routine"
    line_start: 1737
    line_end: 1797
    title: "FCB_TO_ASCZ: Converting File Control Blocks to Strings"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Control_Block"
    image_url: ""
    image_caption: ""
    content: "FCB_TO_ASCZ converts a File Control Block (FCB) structure into an ASCII null-terminated string. This routine reflects the transition from legacy FCB-based file handling to more modern string-based methods. FCBs were an early DOS abstraction for file metadata, but their limitations led to the adoption of file handles in MS-DOS v2.0. This conversion routine influenced later APIs for file manipulation, such as POSIX's `open` and `read` functions."

---

```asm
TITLE   CHKDSK - MS-DOS Disk consistancy checker



; CHKDSK        Version 2.30

; Verifies and repairs MS-DOS disk directory.





; To build CHKDSK you need three modules:

; CHKDSK CHKPROC CHKMES

; They should be linked the that order as well.





; REVISION HISTORY



;REV 1.1

;     05/21/82  Added rev number



;REV 1.5

;       Mod by NANCYP to report on extents

;       Mod by AARONR to report volume ID



;REV 2.0

;       Total rewrite for directories



;REV 2.1

;       Added ^C and INT 24H handlers



;REV 2.2

;       INTERNATIONAL support



;REV 2.3

;       Split into two modules to allow assembly on a PC

;       CHKDSK and CHKPROC



FALSE   EQU     0

TRUE    EQU     NOT FALSE



DRVCHAR EQU     ":"



;The following defines the ranges of DOS version numbers for which this CHKDSK

; is good



DOSVER_LOW EQU  0136H   ;1.54 in hex

DOSVER_HIGH EQU 020BH   ;2.11 in hex





        INCLUDE DOSSYM.ASM



FCB     EQU     5CH



;Drive parameter block from DOS header



SUBTTL  Segments used in load order



CODE    SEGMENT PUBLIC

CODE    ENDS



CONST   SEGMENT PUBLIC BYTE

CONST   ENDS



DATA    SEGMENT PUBLIC WORD

DATA    ENDS



DG      GROUP   CODE,CONST,DATA



SUBTTL  Initialized Data

PAGE

CONST   SEGMENT PUBLIC BYTE



        PUBLIC  HECODE,SWITCHAR,NOISY,DOFIX,CONBUF,ORPHCNT,ORPHSIZ,DOFIX

        PUBLIC  HIDCNT,HIDSIZ,DIRCNT,DIRSIZ,FILCNT,FILSIZ,BADSIZ,LCLUS

        PUBLIC  DOTENT,HAVFIX,SECONDPASS,NUL,ALLFILE,PARSTR,ERRSUB,LCLUS

        PUBLIC  DIRTYFAT,BADSIZ,DDOTENT,CROSSCNT,ORPHFCB,ORPHEXT,ALLDRV

        PUBLIC  FRAGMENT,USERDIR,DIRBUF,USERDIR,FIXMFLG,DOTMES,DIRCHAR



        EXTRN   IDMES1:BYTE,IDPOST:BYTE,VNAME:BYTE,MONTAB:BYTE

        EXTRN   TCHAR:BYTE,BADREAD_PRE:BYTE,BADREAD_POST:BYTE

        EXTRN   CRLF:BYTE,BADVER:BYTE,BADSUBDIR:BYTE,CENTRY:BYTE

        EXTRN   BADDRV:BYTE,BADCD:BYTE,BADRDMES:BYTE,OPNERR:BYTE

        EXTRN   CONTAINS:BYTE,EXTENTS:BYTE,NOEXTENTS:BYTE

        EXTRN   BADDRVM:BYTE,BADDRVM2:BYTE,BADIDBYT:BYTE





DIRBUF  LABEL   BYTE                    ;Entry buffer for searches

VOLID   DB      -1,0,0,0,0,0,8          ;Volume ID FCB

VOLNAM  DB      0,"???????????"

        DB      25 DUP(0)



ALLFILE DB      -1,0,0,0,0,0,1EH        ;Extended FCB

ALLDRV  DB      0,"???????????"

        DB      25 DUP (?)



ORPHFCB DB      0,"FILE0000"

ORPHEXT DB      "CHK"

        DB      25 DUP (?)





;Non-message data



SWITCHAR DB     "-"

ROOTSTR LABEL   BYTE

DIRCHAR DB      "/"

NUL     DB      0

PARSTR  DB      "..",0

DOTMES  DB      ".",0

DOTENT  DB      ".          "

DDOTENT DB      "..         "

HECODE  DB      ?

FIXMFLG DB      0                       ;Flag for printing fixmes

ERRSUB  DW      0                       ;Flag for bad subdir error

FRAGMENT DB     0                       ;Flag for extent processing

DIRTYFAT DB     0                       ;Dirty flag for FAT

DIRCNT  DW      0                       ;# directories

DIRSIZ  DW      0                       ;# alloc units in directories

FILCNT  DW      0                       ;# reg files

FILSIZ  DW      0                       ;# alloc units in reg files

HIDCNT  DW      0                       ;# hidden files

HIDSIZ  DW      0                       ;# alloc units in hidden files

BADSIZ  DW      0                       ;# alloc units in bad sectors

ORPHCNT DW      0                       ;# orphan files made

ORPHSIZ DW      0                       ;# alloc units in orphan files

LCLUS   DW      0                       ;# alloc units in lost clusters

DISPFLG DB      0                       ;used by number routines

CROSSCNT DW     0                       ;# crosslinked files (first pass)

SECONDPASS DB   0                       ;Pass flag

HAVFIX  DB      0                       ;non zero if any fixes

DOFIX   DB      0                       ;flag for F switch

NOISY   DB      0                       ;flag for V switch

USERDIR DB      "/",0                   ;Users current dir for drive

        DB      (DIRSTRLEN-1) DUP (?)

CONBUF  DB      15,0                    ;Input buffer

        DB      15 DUP (?)



CONST   ENDS



SUBTTL  Un-initialized Data

PAGE

DATA    SEGMENT PUBLIC WORD



        PUBLIC  ZEROTRUNC,NAMBUF,MCLUS,THISDPB,STACKLIM,ERRCNT

        PUBLIC  SRFCBPT,ISCROSS,CSIZE,DSIZE,SSIZE,FAT,FATMAP

        PUBLIC  HARDCH,CONTCH,USERDEV,SECBUF,DOTSNOGOOD



HARDCH  DD      ?                       ;Pointer to real INT 24 handler

CONTCH  DD      ?                       ;Pointer to real INT 23 handler

THISDPB DD      ?                       ;Pointer to drive DPB

USERDEV DB      ?                       ;Users current device

CSIZE   DB      ?                       ;Sectors per cluster

SSIZE   DW      ?                       ;bytes per sector

DSIZE   DW      ?                       ;# alloc units on disk

MCLUS   DW      ?                       ;DSIZE + 1

NAMBUF  DB      14 DUP (?)              ;Buffer

DOTSNOGOOD DB   ?                       ;. or .. error flag

ZEROTRUNC DB    ?                       ;Trimming flag

ISCROSS DB      ?                       ;Crosslink flag

OLDCLUS DW      ?

SRFCBPT DW      ?

FATMAP  DW      OFFSET DG:FAT           ;Offset of FATMAP table

SECBUF  DW      ?                       ;Offset of sector buffer

ERRCNT  DB      ?                       ;Used by FATread and write

STACKLIM DW     ?                       ;Stack growth limit



INTERNATVARS    internat_block <>

                DB      (internat_block_max - ($ - INTERNATVARS)) DUP (?)



FAT     LABEL   WORD

DATA    ENDS





SUBTTL  Start of CHKDSK



CODE    SEGMENT PUBLIC

ASSUME  CS:DG,DS:DG,ES:DG,SS:DG



        PUBLIC  SUBERRP,DOTCOMBMES,FIGREC,FCB_TO_ASCZ,PRTCHR,EPRINT

        PUBLIC  PRINT,DOCRLF,DISP16BITS,DISP32BITS,DISPCLUS,CHECKFILES



        EXTRN   RDSKERR:NEAR,SETSWITCH:NEAR,PROMPTYN:NEAR,REPORT:NEAR

        EXTRN   PRINTCURRDIRERR:NEAR,PRINTTHISEL2:NEAR,CHECKERR:NEAR

        EXTRN   INT_23:NEAR,INT_24:NEAR,FINDCHAIN:NEAR,DONE:NEAR,AMDONE:NEAR

        EXTRN   FATAL:NEAR,DIRPROC:NEAR,CHKMAP:NEAR,CHKCROSS:NEAR,UNPACK:NEAR



        ORG     100H



CHKDSK:

        JMP     SHORT CHSTRT



HEADER  DB      "Ver 2.30"



CHSTRT:



;Code to print header.

;       PUSH    AX

;       MOV     DX,OFFSET DG:HEADER

;       CALL    PRINT

;       POP     AX



        PUSH    AX              ;Save DRIVE validity info

        MOV     AH,GET_VERSION

        INT     21H

        XCHG    AH,AL           ;Turn it around to AH.AL

        CMP     AX,DOSVER_LOW

        JB      GOTBADDOS

        CMP     AX,DOSVER_HIGH

        JBE     OKDOS

GOTBADDOS:

        MOV     DX,OFFSET DG:BADVER

        JMP     CERROR



OKDOS:

        POP     AX              ;Get back drive info

        MOV     BX,0FFF0H

        MOV     DX,SP

        CMP     DX,BX

        JAE     STACKOK         ;Lots of stack

        MOV     DX,DS:[2]       ;High break

        MOV     CX,CS

        SUB     DX,CX

        CMP     DX,0FFFH

        JAE     SETSTACK        ;Lots to grab

        MOV     CX,4            ;Suck up more stack (blast command)

        SHL     DX,CL

        MOV     BX,DX

SETSTACK:

        CLI

        MOV     SP,BX

        STI

STACKOK:

        PUSH    AX

        MOV     AH,DISK_RESET        ;Flush everything, and invalidate

        INT     21H

        POP     AX

        CMP     AL,0FFH                 ;Illegal drive specifier?

        JNZ     FILECHK                 ;No -- check for filename



DRVERR:

        MOV     DX,OFFSET DG:BADDRV

CERROR:

        PUSH    CS                      ;Make sure DS is OK

        POP     DS

        CALL    PRINT                   ;Print error message

        INT     20H



CERROR2:

        PUSH    DX

        CALL    DONE                            ;Reset users disk

        POP     DX

        JMP     SHORT CERROR



FILECHK:

        MOV     AX,(CHAR_OPER SHL 8)

        INT     21H

        MOV     [SWITCHAR],DL

        CMP     DL,"/"

        JNZ     SLASHOK

        MOV     [DIRCHAR],"\"

        MOV     [USERDIR],"\"

SLASHOK:

        CMP     DS:(BYTE PTR FCB+1)," "         ;Filename specified?

        JZ      DRVCHK                          ;No -- get the correct drive

        MOV     AL,[SWITCHAR]

        CMP     DS:(BYTE PTR FCB+1),AL          ;Filename specified?

        JZ      DRVCHK                          ;No -- get the correct drive

        MOV     BYTE PTR [FRAGMENT],1           ;Set flag to perform fragment

                                                ;check on specified files

DRVCHK:

        CALL    SETSWITCH                       ;Look for switches

        MOV     AH,GET_DEFAULT_DRIVE            ;Get current drive

        INT     21H

        MOV     [USERDEV],AL                    ;Save for later

        MOV     AH,AL

        INC     AH                      ;A = 1

        MOV     BH,DS:(BYTE PTR FCB)    ;See if drive specified

        OR      BH,BH

        JZ      SETDSK

        MOV     AL,BH

        MOV     AH,AL

        DEC     AL                      ;A = 0

SETDSK:

        MOV     [ALLDRV],AH             ;Target drive

        MOV     [VOLNAM],AH             ;A = 1

        MOV     [ORPHFCB],AH            ;A = 1

        ADD     [BADDRVM],AL            ;A = 0

        ADD     [BADDRVM2],AL           ;A = 0

        MOV     DL,AH                   ;A = 1

        MOV     AH,GET_DPB              ;Get the DPB

        INT     21H

ASSUME  DS:NOTHING

        CMP     AL,-1

        JNZ     DRVISOK                 ;Bad drive (should always be ok)

        MOV     DX,OFFSET DG:BADDRV

CERROR2J: JMP    CERROR2



DRVISOK:

        DEC     DL                      ;A = 0

        MOV     AH,SET_DEFAULT_DRIVE    ;Set Target

        INT     21H

        CMP     [BX.dpb_current_dir],0

        JZ      CURRISROOT              ;Save users current dir for target

        MOV     SI,BX

        ADD     SI,dpb_dir_text

        MOV     DI,OFFSET DG:USERDIR + 1

SETDIRLP:

        LODSB

        STOSB

        OR      AL,AL

        JZ      CURRISROOT

        JMP     SHORT SETDIRLP

CURRISROOT:

        MOV     WORD PTR [THISDPB+2],DS

        PUSH    CS

        POP     DS

ASSUME  DS:DG

        MOV     WORD PTR [THISDPB],BX

        MOV     AX,(GET_INTERRUPT_VECTOR SHL 8) OR 23H

        INT     21H

        MOV     WORD PTR [CONTCH],BX

        MOV     WORD PTR [CONTCH+2],ES

        MOV     AX,(SET_INTERRUPT_VECTOR SHL 8) OR 23H

        MOV     DX,OFFSET DG:INT_23

        INT     21H

        MOV     AX,(GET_INTERRUPT_VECTOR SHL 8) OR 24H

        INT     21H

        MOV     WORD PTR [HARDCH],BX

        MOV     WORD PTR [HARDCH+2],ES

        MOV     AX,(SET_INTERRUPT_VECTOR SHL 8) OR 24H

        MOV     DX,OFFSET DG:INT_24

        INT     21H

        PUSH    CS

        POP     ES

        MOV     DX,OFFSET DG:ROOTSTR

        MOV     AH,CHDIR                        ;Start at root

        INT     21H

        MOV     DX,OFFSET DG:BADCD

        JC      CERROR2J                        ;Couldn't get there

        MOV     DX,OFFSET DG:FAT                ;Scratch space

        MOV     AH,SET_DMA

        INT     21H

        MOV     DX,OFFSET DG:VOLID              ;Look for VOL ID

        MOV     AH,DIR_SEARCH_FIRST

        INT     21H

        CMP     AL,-1

        JZ      NOTVOLID

        CALL    PRINTID                         ;Have a VOL ID

NOTVOLID:

        LDS     BX,[THISDPB]

ASSUME  DS:NOTHING

        MOV     AX,[BX.dpb_sector_size]

        MOV     [SSIZE],AX              ;Sector size in bytes

        MOV     AL,[BX.dpb_cluster_mask]

        INC     AL

        MOV     [CSIZE],AL              ;Sectros per cluster

        MOV     AX,[BX.dpb_max_cluster]

        MOV     [MCLUS],AX              ;Bound for FAT searching

        DEC     AX

        MOV     [DSIZE],AX              ;Total data clusters on disk

        MOV     AL,[BX.dpb_FAT_size]          ;Sectors for one fat

        XOR     AH,AH

        MOV     CX,AX

        MUL     [SSIZE]                 ;Bytes for FAT

        ADD     [FATMAP],AX             ;Allocate FAT space

        MOV     AX,[FATMAP]

        ADD     AX,[MCLUS]

        ADD     AX,2                    ;Insurance

        MOV     [SECBUF],AX             ;Allocate FATMAP space

        ADD     AX,[SSIZE]

        ADD     AX,20                   ;Insurance

        MOV     [STACKLIM],AX           ;Limit on recursion

        MOV     DI,CX

        MOV     CL,[BX.dpb_FAT_count]          ;Number of FATs

        MOV     DX,[BX.dpb_first_FAT]          ;First sector of FAT

        PUSH    CS

        POP     DS

ASSUME  DS:DG

        MOV     BX,OFFSET DG:FAT

        MOV     AL,[ALLDRV]

        DEC     AL

        MOV     AH,'1'

RDLOOP:

        XCHG    CX,DI

        PUSH    DX

        PUSH    CX

        PUSH    DI

        PUSH    AX

        INT     25H                     ;Read in the FAT

        MOV     [HECODE],AL

        POP     AX                      ;Flags

        JNC     RDOK

        MOV     DX,OFFSET DG:BADREAD_PRE    ;Barfed

        CALL    PRINT

        POP     AX

        PUSH    AX

        MOV     DL,AH

        CALL    PRTCHR

        MOV     DX,OFFSET DG:BADREAD_POST

        CALL    PRINT

        POP     AX

        POP     CX

        POP     DI

        POP     DX

        INC     AH

        ADD     DX,DI

        LOOP    RDLOOP                  ;Try next FAT

        CALL    RDSKERR

        JNZ     NORETRY1

        JMP     NOTVOLID

NORETRY1:

        MOV     BX,OFFSET DG:BADRDMES

        JMP     FATAL                   ;Couldn't read any FAT, BARF



RDOK:

        POP     AX                      ;Clean up

        POP     AX

        POP     AX

        POP     AX

        MOV     SI,OFFSET DG:FAT

        LODSB                           ;Check FAT ID byte

        CMP     AL,0F8H

        JAE     IDOK

        MOV     DX,OFFSET DG:BADIDBYT   ;FAT ID bad

        CALL    PROMPTYN                ;Ask user

        JZ      IDOK

        JMP     ALLDONE                 ;User said stop

IDOK:

        MOV     DI,[FATMAP]

        MOV     CX,[MCLUS]

        INC     CX

        XOR     AL,AL

        REP     STOSB                   ;Initialize FATMAP to all free

        MOV     DX,OFFSET DG:DIRBUF     ;FOR ALL SEARCHING

        MOV     AH,SET_DMA

        INT     21H

        XOR     AX,AX

        PUSH    AX                      ;I am root

        PUSH    AX                      ;Parent is root

        CALL    DIRPROC

        CALL    CHKMAP                  ;Look for badsectors, orphans

        CALL    CHKCROSS                ;Check for second pass

        CALL    DOCRLF

        CALL    REPORT



ALLDONE:

        CALL    AMDONE

        INT     20H                     ;Fini





ASSUME  DS:DG



SUBTTL  Check for extents in specified files

PAGE

CHECKFILES:

;Search the directory for the files specified on the command line

;and report the number of fragmented allocation units found in

;each one.

        CALL    DOCRLF

        MOV     AH,SET_DMA

        MOV     DX,[FATMAP]             ;Use the first free space available

        MOV     BP,DX

        ADD     BP,27                   ;cluster in the directory entry

        INT     21H

        MOV     AH,DIR_SEARCH_FIRST              ;Look for the first file

FRAGCHK:

        MOV     DX,FCB

        INT     21H

        OR      AL,AL                   ;Did we find it?

        JNZ     MSGCHK                  ;No -- we're done

        XOR     AX,AX                   ;Initialize the fragment counter

        MOV     SI,[BP]                 ;Get the first cluster

        CALL    UNPACK

        CMP     DI,0FF8H                ;End-of-file?

        JAE     NXTCHK                  ;Yes -- go report the results

        INC     SI

        CMP     SI,DI

        JZ      EACHCLUS

        INC     AX

EACHCLUS:

        MOV     [OLDCLUS],DI            ;Save the last cluster found

        MOV     SI,DI                   ;Get the next cluster

        CALL    UNPACK

        INC     [OLDCLUS]               ;Bump the old cluster

        CMP     DI,[OLDCLUS]            ;Are they the same?

        JNZ     LASTCLUS                ;No -- check for end-of-file

        JMP     SHORT EACHCLUS          ;Continue processing

LASTCLUS:

        CMP     DI,0FF8H                ;End-of-file?

        JAE     NXTCHK                  ;Yes -- go report the results

        INC     AX                      ;No -- found a fragement

        JMP     SHORT EACHCLUS          ;Continue processing



NXTCHK:

        OR      AX,AX

        JZ      GETNXT

        MOV     [FRAGMENT],2            ;Signal that we output at least one file

        PUSH    AX                      ;Save count of fragments

        MOV     SI,[FATMAP]

        INC     SI

        CALL    PRINTTHISEL2

        CALL    DOCRLF

        MOV     DX,OFFSET DG:CONTAINS   ;Print message

        CALL    PRINT

        POP     SI                      ;Number of fragments found

        INC     SI                      ;Number non-contig blocks

        XOR     DI,DI

        MOV     BX,OFFSET DG:EXTENTS

        PUSH    BP

        CALL    DISP16BITS

        POP     BP

GETNXT:

        MOV     AH,DIR_SEARCH_NEXT              ;Look for the next file

        JMP     FRAGCHK



MSGCHK:

        CMP     AH,DIR_SEARCH_FIRST

        JNZ     FILSPOK

        MOV     SI,FCB + 1              ;File not found error

        CALL    PRINTTHISEL2

        CALL    DOCRLF

        MOV     DX,OFFSET DG:OPNERR

        CALL    PRINT                   ;Bad file spec

        RET

FILSPOK:

        CMP     BYTE PTR [FRAGMENT],2

        JZ      CDONE

        MOV     DX,OFFSET DG:NOEXTENTS

        CALL    PRINT

CDONE:

        RET





FIGREC:

;Convert cluster number in BX to sector # AH of cluster in DX

        LDS     DI,[THISDPB]

ASSUME  DS:NOTHING

        MOV     CL,[DI.dpb_cluster_shift]

        MOV     DX,BX

        DEC     DX

        DEC     DX

        SHL     DX,CL

        OR      DL,AH

        ADD     DX,[DI.dpb_first_sector]

        PUSH    CS

        POP     DS

ASSUME  DS:DG

        RET





SUBTTL  PRINTID - Print Volume ID info

PAGE

PRINTID:

ASSUME  DS:DG

        MOV     DX,OFFSET DG:INTERNATVARS

        MOV     AX,INTERNATIONAL SHL 8

        INT     21H

        MOV     [DISPFLG],1             ;Don't sub spaces for leading zeros

        MOV     SI,OFFSET DG:FAT + 8

        MOV     DI,OFFSET DG:VNAME

        MOV     CX,11

        REP     MOVSB

        MOV     DX,OFFSET DG:IDMES1

        CALL    PRINT                   ;Print ID message

        ADD     SI,13

        LODSW                           ;Get date

        PUSH    SI

        MOV     DX,AX

        MOV     AX,[INTERNATVARS.Date_tim_format]

        OR      AX,AX

        JZ      USPDAT

        DEC     AX

        JZ      EUPDAT

        CALL    P_YR

        CALL    P_DSEP

        CALL    P_MON

        CALL    P_DSEP

        MOV     CX,1000H                ;Do not supress leading zeroes

        CALL    P_DAY

        JMP     P_TIME



USPDAT:

        CALL    P_MONTH_NAM

        MOV     CX,1110H                ;Supress at most 1 leading 0

        CALL    P_DAY

        PUSH    DX

        MOV     DL,','

        CALL    PRTCHR

        MOV     DL,' '

        CALL    PRTCHR

        POP     DX

PYA:

        CALL    P_YR

        JMP     P_TIME



EUPDAT:

        MOV     CX,1110H                ;Supress at most 1 leading 0

        CALL    P_DAY

        PUSH    DX

        MOV     DL,' '

        CALL    PRTCHR

        POP     DX

        CALL    P_MONTH_NAM

        JMP     PYA



P_DSEP:

        PUSH    DX

        MOV     DL,[INTERNATVARS.Date_sep]

        CALL    PRTCHR

        POP     DX

        RET



P_MONTH_NAM:

        MOV     AX,DX

        PUSH    DX

        MOV     CL,5

        SHR     AX,CL

        AND     AX,0FH                  ;Month in AX

        DEC     AX                      ;Make 0 indexed

        MOV     CX,AX

        SHL     AX,1

        ADD     AX,CX                   ;Mult by 3 chars/mo

        MOV     SI,OFFSET DG:MONTAB

        ADD     SI,AX

        LODSB

        MOV     DL,AL

        CALL    PRTCHR

        LODSB

        MOV     DL,AL

        CALL    PRTCHR

        LODSB

        MOV     DL,AL

        CALL    PRTCHR

        MOV     DL,' '

        CALL    PRTCHR

        POP     DX

        RET



P_MON:

        MOV     SI,DX

        PUSH    DX

        MOV     CL,5

        SHR     SI,CL

        AND     SI,0FH                  ;Month in SI

        CALL    CONVERT

        MOV     DL,AL

        MOV     CX,1000H                ;Do not supress leading 0

        CALL    OUTBYTE                 ;Print month

        POP     DX

        RET



P_DAY:

        MOV     SI,DX

        PUSH    DX

        PUSH    CX

        AND     SI,01FH                 ;SI has day

        CALL    CONVERT

        POP     CX

        MOV     DL,AL

        CALL    OUTBYTE                 ;Print day

        POP     DX

        RET



P_YR:

        MOV     SI,DX

        PUSH    DX

        MOV     CL,9

        SHR     SI,CL

        AND     SI,07FH                 ;SI has raw year

        ADD     SI,1980                 ;Real year

        CALL    CONVERT

        MOV     CX,1000H                ;Do not supress leading zeros

        CALL    OUTWORD                 ;Print year

        POP     DX

        RET



P_TIME:

        MOV     DL,' '

        CALL    PRTCHR

        POP     SI

        ADD     SI,-4

        LODSW                           ;Get time

        MOV     DI,AX

        MOV     SI,DI

        MOV     CL,11

        SHR     SI,CL

        AND     SI,01FH                 ;SI has hour

        CMP     [INTERNATVARS.Time_24],0

        JNZ     ISOK2                   ;24 hour time?

        CMP     SI,12

        JB      ISOK                    ;Is AM

        MOV     [TCHAR],'p'

        JZ      ISOK                    ;Is 12-1p

        SUB     SI,12                   ;Is PM

ISOK:

        OR      SI,SI

        JNZ     ISOK2

        MOV     SI,12                   ;0 is 12a

ISOK2:

        CALL    CONVERT

        MOV     CX,1110H                ;Supress at most 1 leading 0

        MOV     DL,AL

        CALL    OUTBYTE                 ;Print hour

        MOV     DL,BYTE PTR [INTERNATVARS.Time_sep]

        CALL    PRTCHR

        MOV     SI,DI

        MOV     CL,5

        SHR     SI,CL

        AND     SI,03FH                 ;SI has minute

        CALL    CONVERT

        MOV     CX,1000H                ;Do not supress leading zeroes

        MOV     DL,AL

        CALL    OUTBYTE                 ;Print minute

        MOV     DL,[TCHAR]

        CMP     [INTERNATVARS.Time_24],0

        JNZ     NOAP                    ;24 hour time, no a or p

        CALL    PRTCHR                  ;Print a or p

NOAP:

        MOV     DX,OFFSET DG:IDPOST

        CALL    PRINT

        MOV     [DISPFLG],0

        RET



CONVERT:

        MOV     CX,16

        XOR     AX,AX

CNVLOOP:

        SHL     SI,1

        CALL    CONVWRD

        CLC

        LOOP    CNVLOOP

        RET



SUBTTL  Misc Routines - Mostly I/O

PAGE

CONVWRD:

        ADC     AL,AL

        DAA

        XCHG    AL,AH

        ADC     AL,AL

        DAA

        XCHG    AL,AH

RET1:   RET



UNSCALE:

        SHR     CX,1

        JC      RET1

        SHL     SI,1

        RCL     DI,1

        JMP     SHORT UNSCALE



DISP16BITS:

        MOV     BYTE PTR DISPFLG,1

        JMP     SHORT DISP32BITS



DISPCLUS:

        MUL     [SSIZE]

        MOV     CL,[CSIZE]

        XOR     CH,CH

        MOV     SI,AX

        MOV     DI,DX

        CALL    UNSCALE



DISP32BITS:

        PUSH    BP

        PUSH    BX

        XOR     AX,AX

        MOV     BX,AX

        MOV     BP,AX

        MOV     CX,32

CONVLP:

        SHL     SI,1

        RCL     DI,1

        XCHG    AX,BP

        CALL    CONVWRD

        XCHG    AX,BP

        XCHG    AX,BX

        CALL    CONVWRD

        XCHG    AX,BX

        ADC     AL,0

        LOOP    CONVLP

        ; Conversion complete

        MOV     CX,1310H        ;Print 3-digit number with 2 leading blanks

        CMP     BYTE PTR DISPFLG,0

        JNZ     FOURDIG

        MOV     CX,1810H        ;Print 8-digit number with 2 leading blanks

        XCHG    DX,AX

        CALL    DIGIT

        XCHG    AX,BX

        CALL    OUTWORD

FOURDIG:

        MOV     AX,BP

        CALL    OUTWORD

        MOV     BYTE PTR DISPFLG,0

        POP     DX

        CALL    PRINT

        POP     BP

        RET



OUTWORD:

        PUSH    AX

        MOV     DL,AH

        CALL    OUTBYTE

        POP     DX

OUTBYTE:

        MOV     DH,DL

        SHR     DL,1

        SHR     DL,1

        SHR     DL,1

        SHR     DL,1

        CALL    DIGIT

        MOV     DL,DH

DIGIT:

        AND     DL,0FH

        JZ      BLANKZER

        MOV     CL,0

BLANKZER:

        DEC     CH

        AND     CL,CH

        OR      DL,30H

        SUB     DL,CL

        CMP     BYTE PTR DISPFLG,0

        JZ      PRTCHR

        CMP     DL,30H

        JL      RET2

PRTCHR:

        MOV     AH,STD_CON_OUTPUT

        INT     21H

RET2:   RET



PRINTCNT:

        LODSB

        MOV     DL,AL

        INT     21H

        LOOP    PRINTCNT

        RET



EPRINT:

        CALL    CHECKERR

        JNZ     RET$1

        JMP     SHORT PRINT



DOCRLF:

        MOV     DX,OFFSET DG:CRLF

PRINT:

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     21H

RET$1:  RET



DOTCOMBMES:

        CMP     [NOISY],0

        JZ      SUBERRP

        PUSH    DX

        CALL    PRINTCURRDIRERR

        MOV     DX,OFFSET DG:CENTRY

        CALL    EPRINT

        POP     DX

        CALL    EPRINT

        CALL    DOCRLF

        RET



SUBERRP:

        MOV     AL,1

        XCHG    AL,[ERRSUB]

        CMP     AL,0

        JNZ     RET32

        MOV     SI,OFFSET DG:NUL

        CALL    PRINTCURRDIRERR

        MOV     DX,OFFSET DG:BADSUBDIR

        CALL    EPRINT

RET32:  RET





FCB_TO_ASCZ:                            ;Convert DS:SI to ASCIIZ ES:DI

        MOV     CX,8

MAINNAME:

        LODSB

        CMP     AL,' '

        JZ      SKIPSPC

        STOSB

SKIPSPC:

        LOOP    MAINNAME

        LODSB

        CMP     AL,' '

        JZ      GOTNAME

        MOV     AH,AL

        MOV     AL,'.'

        STOSB

        XCHG    AL,AH

        STOSB

        MOV     CL,2

EXTNAME:

        LODSB

        CMP     AL,' '

        JZ      GOTNAME

        STOSB

        LOOP    EXTNAME



GOTNAME:

        XOR     AL,AL

        STOSB

        RET



CODE    ENDS

        END     CHKDSK



```