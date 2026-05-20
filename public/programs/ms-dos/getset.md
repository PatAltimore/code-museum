---
title: "GETSET.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/GETSET.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/GETSET.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "getset"
order: 34
description: "This file contains assembly routines for MS-DOS 2.0, handling system calls to get and set various system-level parameters, reflecting the evolution of DOS towards Unix-inspired features."

summary:
  - point: "Introduces system calls for querying and modifying DOS parameters"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Reflects Unix-inspired design choices in MS-DOS 2.0"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Optimized for the constraints of 8086 assembly and early PC hardware"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"

enhancements:
  - id: "name-getset-intro"
    line_start: 3
    line_end: 47
    title: "Why MS-DOS Needed 'Get and Set'"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section introduces the purpose of the 'GETSET' module, which provides system calls for querying and modifying various MS-DOS parameters. At the time, MS-DOS 2.0 was transitioning from a simple CP/M-like operating system to one inspired by Unix, adding features like subdirectories and file handles. These routines allowed applications to interact with the operating system at a deeper level, enabling functionality like verifying writes, managing DMA addresses, and handling interrupt vectors. Tim Paterson, the original author of 86-DOS, laid the groundwork for these system-level interactions, but by version 2.0, the codebase had been heavily rewritten by Microsoft engineers to accommodate IBM PC hardware and Unix-inspired abstractions. These routines became foundational for DOS's extensibility, influencing later operating systems like Windows and even Linux, which adopted similar system call paradigms."
  - id: "include-dosseg-dossym"
    line_start: 49
    line_end: 133
    title: "The Hidden Role of INCLUDE Files"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "This section includes external assembly files like DOSSEG.ASM and DOSSYM.ASM, which define segment structures and symbolic constants used throughout the program. These files encapsulate hardware-specific details, such as memory layout and interrupt vector mappings, allowing the main code to focus on higher-level logic. In the early 1980s, modular assembly programming was a necessity due to the complexity of managing hardware directly. By abstracting these details into separate files, developers could reuse and adapt the code for different hardware configurations, such as IBM-compatible PCs. This approach influenced the modular design of later programming languages and frameworks, including C header files and object-oriented programming libraries."
  - id: "get-version-msdos"
    line_start: 139
    line_end: 191
    title: "How MS-DOS Revealed Its Version Number"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The $GET_VERSION routine retrieves the MS-DOS version number, OEM identifier, and user number. This was essential for compatibility, as software often needed to adapt its behavior based on the operating system version. Early DOS versions lacked standardization, and applications frequently encountered quirks or missing features. By providing a system call for version querying, Microsoft enabled developers to write more robust software. This routine reflects the growing importance of backward compatibility in the software industry, a principle that continues to shape operating systems like Windows and macOS. Interestingly, the routine also highlights the transition from single-user systems to environments where user identification mattered, foreshadowing multi-user operating systems."
  - id: "international-country-info"
    line_start: 195
    line_end: 355
    title: "The Subroutine That Knew Your Country"
    wikipedia_url: "https://en.wikipedia.org/wiki/Internationalization_and_localization"
    image_url: ""
    image_caption: ""
    content: "The $INTERNATIONAL routine provides country-specific information, such as date formats, currency symbols, and separators. This was a significant step towards internationalization in MS-DOS, accommodating the global market for IBM PCs. At the time, most software was region-specific, but the rise of personal computing demanded broader compatibility. This routine allowed applications to adapt to local conventions, making DOS more appealing to international OEMs. The implementation uses a lookup table to retrieve country-specific data efficiently, a technique still common in modern software. This approach influenced later systems like Windows, which expanded localization support to include languages, keyboards, and cultural preferences."
  - id: "verify-write-flag"
    line_start: 359
    line_end: 417
    title: "The Flag That Verified Every Write"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The $GET_VERIFY_ON_WRITE and $SET_VERIFY_ON_WRITE routines manage a flag that determines whether the system verifies data after writing to disk. This feature was crucial for ensuring data integrity on early PC hardware, where disk errors were common. By toggling this flag, users could balance reliability against performance, as verification added overhead. The concept of write verification influenced later file systems, including journaling systems like NTFS and ext4, which incorporate mechanisms for ensuring data consistency. These routines highlight the trade-offs developers faced in optimizing for hardware constraints while maintaining user trust in the system's reliability."
  - id: "ctrl-c-trapping"
    line_start: 421
    line_end: 475
    title: "How MS-DOS Handled Ctrl+C Interrupts"
    wikipedia_url: "https://en.wikipedia.org/wiki/Control-C"
    image_url: ""
    image_caption: ""
    content: "The $SET_CTRL_C_TRAPPING routine enables or disables the handling of Ctrl+C interrupts, allowing applications to control whether the system responds to user interruptions. This feature was vital for long-running processes, such as file transfers or computations, where premature termination could corrupt data. By providing a system call for managing this behavior, MS-DOS gave developers finer control over application stability. The implementation reflects the low-level nature of DOS, where interrupt handling was a core part of programming. This approach influenced later operating systems, which expanded interrupt handling to include signals, exceptions, and event-driven programming models."
  - id: "drive-freespace"
    line_start: 545
    line_end: 647
    title: "The Routine That Measured Free Space"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_storage"
    image_url: ""
    image_caption: ""
    content: "The $GET_DRIVE_FREESPACE routine calculates the amount of free disk space on a specified drive, returning details like allocation units, sector size, and cluster mask. This was essential for applications managing large files or performing disk-intensive operations. Early PCs often had limited storage, making efficient space management critical. The routine uses low-level disk structures, such as the File Allocation Table (FAT), to perform its calculations. This technique laid the groundwork for modern storage APIs, influencing file systems like FAT32 and exFAT. It also highlights the challenges of programming for hardware with severe constraints, where every byte of storage mattered."
  - id: "dma-address"
    line_start: 651
    line_end: 715
    title: "Direct Memory Access: Set and Forget"
    wikipedia_url: "https://en.wikipedia.org/wiki/Direct_memory_access"
    image_url: ""
    image_caption: ""
    content: "The $GET_DMA and $SET_DMA routines manage the Disk Transfer Address (DMA), a critical feature for efficient data movement between memory and peripherals. DMA allowed the CPU to offload data transfer tasks, improving performance on early PCs with limited processing power. These routines reflect the low-level nature of MS-DOS, where developers interacted directly with hardware registers. The concept of DMA remains vital in modern computing, enabling high-speed data transfers for devices like GPUs and network cards. This implementation showcases the balance between hardware abstraction and direct control, a principle that influenced later operating systems and device driver architectures."
  - id: "default-drive"
    line_start: 799
    line_end: 859
    title: "Setting the Default Drive in DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The $GET_DEFAULT_DRIVE and $SET_DEFAULT_DRIVE routines manage the default drive, a fundamental concept in DOS's single-drive-centric design. These routines allowed applications to query or modify the current drive, enabling seamless navigation across storage devices. At the time, PCs typically had one or two drives, making this feature both practical and necessary. The implementation reflects DOS's simplicity, where drive management was tied directly to hardware constraints. This concept influenced later operating systems, which expanded drive management to include mount points, network drives, and virtual file systems, paving the way for modern storage paradigms."
  - id: "interrupt-vector"
    line_start: 865
    line_end: 933
    title: "Mapping Interrupts in MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "The $GET_INTERRUPT_VECTOR routine retrieves the address of an interrupt handler, while $SET_INTERRUPT_VECTOR modifies it. Interrupts were a cornerstone of early PC architecture, enabling asynchronous event handling for tasks like I/O operations and error management. By providing system calls for managing interrupt vectors, MS-DOS allowed developers to customize hardware interactions, a necessity for supporting diverse peripherals. This approach reflects the low-level nature of DOS, where direct hardware control was both a feature and a challenge. The concept of interrupt vector management influenced later systems, including BIOS and modern operating systems, which abstract these interactions into device drivers and APIs."
  - id: "break-char-oper-hack"
    line_start: 1015
    line_end: 1063
    title: "The Hack That Made XENIX Look Like DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Xenix"
    image_url: ""
    image_caption: ""
    content: "This section implements a routine to handle device and path operations, allowing XENIX (Microsoft's Unix-like operating system) to mimic PC DOS behavior. The programmer was solving the problem of compatibility between systems with differing conventions for device and path handling. The routine uses the `AL` register to determine the operation type (e.g., reading or setting switch characters or device availability) and manipulates the `DL` register to store or retrieve the relevant values. At the time, Unix systems like XENIX were gaining traction, and Microsoft sought to bridge the gap between Unix and DOS environments for broader market appeal. This compatibility layer reflects the influence of Unix on MS-DOS v2.0's design, which introduced features like subdirectories and pipes inspired by Unix. The technique laid groundwork for future cross-platform compatibility efforts, influencing later systems like Windows NT and its POSIX subsystem."
  - id: "char-oper-set-switch"
    line_start: 1055
    line_end: 1063
    title: "Setting Switch Characters: A Simple State Machine"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This subroutine sets the switch character used for command-line parsing, storing it in memory at `switch_character`. The programmer was addressing the need for customizable command-line syntax, a feature borrowed from Unix-like systems. By decrementing the `AL` register and checking its value, the routine acts as a simple state machine, branching to the appropriate operation. This approach reflects the constraints of early 8086 assembly programming, where compact and efficient code was paramount due to limited memory and processing power. The ability to set switch characters contributed to MS-DOS's flexibility, making it more adaptable to different user needs and environments. This technique influenced later operating systems, where customizable command-line syntax became a standard feature."
  - id: "char-oper-read-avail"
    line_start: 1065
    line_end: 1073
    title: "Reading Device Availability: A Flag-Based Approach"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_driver"
    image_url: ""
    image_caption: ""
    content: "This subroutine reads the availability of devices, storing the result in the `DL` register. The programmer was solving the problem of determining whether device names required a `/DEV/` prefix, a convention borrowed from Unix-like systems. The routine uses a flag stored in memory at `device_availability` to indicate the current state. This flag-based approach was a common technique in early operating systems, where simplicity and efficiency were crucial. The ability to query device availability helped MS-DOS manage devices more effectively, paving the way for more sophisticated device management in later systems like Windows."
  - id: "setdpb-create-valid-dpb"
    line_start: 1103
    line_end: 1233
    title: "Building Disk Parameter Blocks: File System Foundations"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "This section constructs a valid Disk Parameter Block (DPB) from a user-specified BIOS Parameter Block (BPB). DPBs are critical data structures in MS-DOS, defining the layout and properties of a disk's file system. The routine meticulously copies and calculates values such as sector size, cluster mask, and FAT size, ensuring the DPB adheres to the expected format. At the time, file system management was a complex task requiring precise handling of disk geometry and metadata. The programmer was addressing the need for a reliable mechanism to translate BPB data into a usable DPB, enabling MS-DOS to interact with various disk formats. This technique influenced later file systems, where similar data structures are used to manage disk properties and ensure compatibility across devices. The DPB concept remains foundational in modern operating systems, underscoring its lasting impact."

---

```asm
TITLE  GETSET - GETting and SETting MS-DOS system calls

NAME   GETSET

;

; System Calls which get and set various things

;

; $GET_VERSION

; $GET_VERIFY_ON_WRITE

; $SET_VERIFY_ON_WRITE

; $SET_CTRL_C_TRAPPING

; $INTERNATIONAL

; $GET_DRIVE_FREESPACE

; $GET_DMA

; $SET_DMA

; $GET_DEFAULT_DRIVE

; $SET_DEFAULT_DRIVE

; $GET_INTERRUPT_VECTOR

; $SET_INTERRUPT_VECTOR

; RECSET

; $CHAR_OPER

;

.xlist

;

; get the appropriate segment definitions

;

INCLUDE DOSSEG.ASM



IFNDEF  ALTVECT

ALTVECT EQU     0                       ; FALSE

ENDIF



IFNDEF IBM

IBM EQU 0

ENDIF



CODE    SEGMENT BYTE PUBLIC  'CODE'

        ASSUME  SS:DOSGROUP,CS:DOSGROUP



.xcref

INCLUDE DOSSYM.ASM

INCLUDE DEVSYM.ASM

.cref

.list





        i_need  VERFLG,BYTE

        i_need  CNTCFLAG,BYTE

        i_need  DMAADD,DWORD

        i_need  CURDRV,BYTE

        i_need  Current_Country,WORD

        i_need  international_table,BYTE

        i_need  INDOS,BYTE

        i_need  SYSINITVAR,WORD

        i_need  NUMIO,BYTE

        i_need  SWITCH_CHARACTER,BYTE

        i_need  DEVICE_AVAILABILITY,BYTE



USERNUM DW      ?                       ; 24 bit user number

        DB      ?

        IF      IBM

OEMNUM  DB      0                       ; 8 bit OEM number

        ELSE

OEMNUM  DB      0FFH                    ; 8 bit OEM number

        ENDIF



MSVERS  EQU     THIS WORD               ; MS-DOS version in hex for $GET_VERSION

MSMAJOR DB      DOS_MAJOR_VERSION

MSMINOR DB      DOS_MINOR_VERSION





BREAK <$Get_Version -- Return MSDOS version number>

        procedure   $GET_VERSION,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       None

; Function:

;       Return MS-DOS version number

; Outputs:

;       OEM number in BH

;       User number in BL:CX (24 bits)

;       Version number as AL.AH in binary

;       NOTE: On pre 1.28 DOSs AL will be zero



        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        MOV     BX,[USERNUM + 2]

        MOV     CX,[USERNUM]

        MOV     AX,[MSVERS]

        invoke  get_user_stack

ASSUME  DS:NOTHING

        MOV     [SI.user_BX],BX

        MOV     [SI.user_CX],CX

        MOV     [SI.user_AX],AX  ; Really only sets AH

        return

$GET_VERSION  ENDP



BREAK <$International - return country-dependent information>

;

; Inputs:

;       DS:DX point to a block

; Function:

;       give users an idea of what country the application is running

; Outputs:

;       AX = number of bytes transferred

;       DS:DX ->+---------------------------------+

;               | WORD Date/time format           |

;               +---------------------------------+

;               | BYTE ASCIZ currency symbol      |

;               +---------------------------------+

;               | BYTE ASCIZ thousands separator  |

;               +---------------------------------+

;               | BYTE ASCIZ decimal separator    |

;               +---------------------------------+



        procedure   $INTERNATIONAL,NEAR

ASSUME  DS:NOTHING,ES:NOTHING

        MOV     BL,AL

        PUSH    DS

        POP     ES

        PUSH    DX

        POP     DI

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        CMP     DI,-1

        JZ      international_set

        OR      BL,BL

        JNZ     international_find

        MOV     SI,[Current_Country]

        MOV     AX,WORD PTR [SI-2]      ; Get size in AL, country code in AH

        MOV     BL,AH                   ; Set country code

        JMP     SHORT international_copy



international_find:

        CALL    international_get

        JNC     international_copy

        error   country_not_found



international_get:

        MOV     SI,OFFSET DOSGROUP:international_table

international_next:

        LODSW                           ; Get size in AL, country code in AH

        CMP     AL,-1

        JNZ     check_code

        STC

RET35:

        RET



check_code:

        CMP     BL,AH

        JZ      RET35                   ; Carry clear

        XOR     AH,AH

        ADD     SI,AX

        JMP     international_next



international_copy:

        MOV     CL,AL

        XOR     CH,CH

        PUSH    DI

        REP     MOVSB

        POP     DI

        MOV     WORD PTR ES:[DI.MAP_CALL + 2],CS   ; Set segment for case map call

international_ok:

        XOR     AX,AX

        MOV     AL,BL           ; Return country code in AX

        transfer SYS_RET_OK



international_set:

        CALL    international_get

        JNC     international_store

        error   country_not_found



international_store:

        MOV     [Current_Country],SI

        JMP     international_ok



$INTERNATIONAL  ENDP



BREAK <$Get_Verify_on_Write - return verify-after-write flag>

        procedure   $GET_VERIFY_ON_WRITE,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       none.

; Function:

;       returns flag

; Returns:

;       AL = value of VERIFY flag



        MOV     AL,[VERFLG]

        return

$GET_VERIFY_ON_WRITE  ENDP



BREAK <$Set_Verify_on_Write - Toggle verify-after-write flag>

        procedure   $SET_VERIFY_ON_WRITE,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       AL = desired value of VERIFY flag

; Function:

;       Sets flag

; Returns:

;       None



        AND     AL,1

        MOV     [VERFLG],AL

        return

$SET_VERIFY_ON_WRITE  ENDP



BREAK <$Set_CTRL_C_Trapping -- En/Disable ^C check in dispatcher>

        procedure   $SET_CTRL_C_TRAPPING,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       AL = 0 read ^C status

;       AL = 1 Set ^C status, DL = 0/1 for ^C off/on

; Function:

;       Enable disable ^C checking in dispatcher

; Outputs:

;       If AL = 0 then DL = 0/1 for ^C off/on



        OR      AL,AL

        JNZ     CTRL_C_set

        invoke  get_user_stack

        MOV     AL,[CNTCFLAG]

        MOV     BYTE PTR [SI.user_DX],AL

        return

CTRL_C_set:

        DEC     AL

        JNZ     bad_val

        AND     DL,01h

        MOV     [CNTCFLAG],DL

        return

bad_val:

        MOV     AL,0FFH

        return

$SET_CTRL_C_TRAPPING ENDP



BREAK <$Get_INDOS_Flag -- Return location of DOS critical-section flag>

        procedure   $GET_INDOS_FLAG,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       None

; Function:

;       Returns location of DOS status for interrupt routines

; Returns:

;       Flag location in ES:BX



        invoke  get_user_stack

        MOV     [SI.user_BX],OFFSET DOSGROUP:INDOS

        MOV     [SI.user_ES],SS

        return

$GET_INDOS_FLAG ENDP



;----+----+----+----+----+----+----+----+----+----+----+----+----+----+----;

;            C  A  V  E  A  T     P  R  O  G  R  A  M  M  E  R             ;

;                                                                          ;

        procedure   $GET_IN_VARS,NEAR

; Return a pointer to interesting DOS variables This call is version

; dependent and is subject to change without notice in future versions.

; Use at risk.

        invoke  get_user_stack

        MOV     [SI.user_BX],OFFSET DOSGROUP:SYSINITVAR

        MOV     [SI.user_ES],SS

        return

$GET_IN_VARS    ENDP

;                                                                          ;

;            C  A  V  E  A  T     P  R  O  G  R  A  M  M  E  R             ;

;----+----+----+----+----+----+----+----+----+----+----+----+----+----+----;



BREAK <$Get_Drive_Freespace -- Return bytes of free disk space on a drive>

        procedure   $GET_DRIVE_FREESPACE,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DL = Drive number

; Function:

;       Return number of free allocation units on drive

; Outputs:

;       BX = Number of free allocation units

;       DX = Total Number of allocation units on disk

;       CX = Sector size

;       AX = Sectors per allocation unit

;          = -1 if bad drive specified

; This call returns the same info in the same registers (except for FAT pointer)

;      as the old FAT pointer calls



        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        MOV     AL,DL

        invoke  GETTHISDRV

        MOV     AX,-1

        JC      BADFRDRIVE

        invoke  FATREAD

        XOR     DX,DX

        MOV     BX,2

        MOV     CX,ES:[BP.dpb_max_cluster]

        DEC     CX

        PUSH    CX              ; Save Total

SCANFREE:

        invoke  UNPACK

        JNZ     NOTFREECLUS

        INC     DX

NOTFREECLUS:

        INC     BX

        LOOP    SCANFREE

        POP     BX              ; Remember Total

        MOV     AL,ES:[BP.dpb_cluster_mask]

        INC     AL

        XOR     AH,AH

        MOV     CX,ES:[BP.dpb_sector_size]

BADFRDRIVE:

        invoke  get_user_stack

ASSUME  DS:NOTHING

        MOV     [SI. user_CX],CX

        MOV     [SI.user_DX],BX

        MOV     [SI.user_BX],DX

        MOV     [SI.user_AX],AX

        return



$GET_DRIVE_FREESPACE ENDP



BREAK <$Get_DMA, $Set_DMA -- Get/Set current DMA address>

        procedure   $GET_DMA,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       None

; Function:

;       Get DISK TRANSFER ADDRESS

; Returns:

;       ES:BX is current transfer address



        MOV     BX,WORD PTR [DMAADD]

        MOV     CX,WORD PTR [DMAADD+2]

        invoke  get_user_stack

        MOV     [SI.user_BX],BX

        MOV     [SI.user_ES],CX

        return

$GET_DMA ENDP



        procedure   $SET_DMA,NEAR   ; System call 26

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DS:DX is desired new disk transfer address

; Function:

;       Set DISK TRANSFER ADDRESS

; Returns:

;       None



        MOV     WORD PTR [DMAADD],DX

        MOV     WORD PTR [DMAADD+2],DS

        return

$SET_DMA  ENDP



BREAK <$Get_Default_DPB,$Get_DPB -- Return pointer to DPB>

;----+----+----+----+----+----+----+----+----+----+----+----+----+----+----;

;            C  A  V  E  A  T     P  R  O  G  R  A  M  M  E  R             ;

;                                                                          ;

        procedure   $GET_DEFAULT_DPB,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DL = Drive number (always default drive for call 31)

; Function:

;       Return pointer to drive parameter table for default drive

; Returns:

;       DS:BX points to the DPB

;       AL = 0 If OK, = -1 if bad drive (call 50 only)



        MOV     DL,0

        entry   $GET_DPB

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        MOV     AL,DL

        invoke  GETTHISDRV

        JC      ISNODRV

        invoke  FATREAD

        invoke  get_user_stack

ASSUME  DS:NOTHING

        MOV     [SI.user_BX],BP

        MOV     [SI.user_DS],ES

        XOR     AL,AL

        return



ISNODRV:

        MOV     AL,-1

        return

$GET_Default_dpb    ENDP

;                                                                          ;

;            C  A  V  E  A  T     P  R  O  G  R  A  M  M  E  R             ;

;----+----+----+----+----+----+----+----+----+----+----+----+----+----+----;





BREAK <$Get_Default_Drive, $Set_Default_Drive -- Set/Get default drive>

        procedure   $GET_DEFAULT_DRIVE,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       None

; Function:

;       Return current drive number

; Returns:

;       AL = drive number



        MOV     AL,[CURDRV]

        return

$GET_DEFAULT_DRIVE  ENDP



        procedure   $SET_DEFAULT_DRIVE,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DL = Drive number for new default drive

; Function:

;       Set the default drive

; Returns:

;       AL = Number of drives, NO ERROR RETURN IF DRIVE NUMBER BAD



        MOV     AL,[NUMIO]

        CMP     DL,AL

        JNB     RET17

        MOV     [CURDRV],DL

RET17:  return

$SET_DEFAULT_DRIVE  ENDP





BREAK <$Get_Interrupt_Vector - Get/Set interrupt vectors>

        procedure   $GET_INTERRUPT_VECTOR,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       AL = interrupt number

; Function:

;       Get the interrupt vector

; Returns:

;       ES:BX is current interrupt vector



        CALL    RECSET

        LES     BX,DWORD PTR ES:[BX]

        invoke  get_user_stack

        MOV     [SI.user_BX],BX

        MOV     [SI.user_ES],ES

        return

$GET_INTERRUPT_VECTOR ENDP



        procedure   $SET_INTERRUPT_VECTOR,NEAR   ; System call 37

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       AL = interrupt number

;       DS:DX is desired new interrupt vector

; Function:

;       Set the interrupt vector

; Returns:

;       None



        CALL    RECSET

        MOV     ES:[BX],DX

        MOV     ES:[BX+2],DS

        return

$SET_INTERRUPT_VECTOR ENDP



        IF      ALTVECT

VECIN:  ; INPUT VECTORS

        DB      22H             ; Terminate

        DB      23H             ; ^C

        DB      24H             ; Hard error

        DB      28H             ; Spooler

LSTVEC  DB      ?               ; ALL OTHER



VECOUT: ; GET MAPPED VECTOR

        DB      int_terminate

        DB      int_ctrl_c

        DB      int_fatal_abort

        DB      int_spooler

LSTVEC2 DB      ?               ; Map to itself



NUMVEC  =       VECOUT-VECIN

        ENDIF



procedure   RECSET,NEAR



        IF      ALTVECT

        PUSH    SS

        POP     ES

        MOV     [LSTVEC],AL     ; Terminate list with real vector

        MOV     [LSTVEC2],AL    ; Terminate list with real vector

        MOV     CX,NUMVEC       ; Number of possible translations

        MOV     DI,OFFSET DOSGROUP:VECIN ; Point to vectors

        REPNE   SCASB

        MOV     AL,ES:[DI+NUMVEC-1] ; Get translation

        ENDIF



        XOR     BX,BX

        MOV     ES,BX

        MOV     BL,AL

        SHL     BX,1

        SHL     BX,1

        return

recset  ENDP



BREAK <$Char_Oper - hack on paths, switches so that xenix can look like PCDOS>

;

; input:    AL = function:

;                   0 - read switch char

;                   1 - set switch char (char in DL)

;                   2 - read device availability

;                   3 - set device availability (0/FF in DL)

;                       DL = 0 means /DEV/ must preceed device names

;                       DL = Non0 means /DEV/ need not preeceed

; output:   (get) DL - character/flag

;

        procedure $CHAR_OPER,NEAR

        ASSUME  DS:NOTHING,ES:NOTHING

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        OR      AL,AL

        JNZ     char_oper_set_switch

        MOV     DL,[switch_character]

        JMP     SHORT char_oper_ret

char_oper_set_switch:

        DEC     AL

        JNZ     char_oper_read_avail

        MOV     [switch_character],DL

        return

char_oper_read_avail:

        DEC     AL

        JNZ     char_oper_set_avail

        MOV     DL,[device_availability]

        JMP     SHORT char_oper_ret

char_oper_set_avail:

        DEC     AL

        JNZ     char_oper_bad_ret

        MOV     [device_availability],DL

        return

char_oper_bad_ret:

        MOV     AL,0FFh

        return

char_oper_ret:

        invoke  get_user_stack

        MOV     [SI.user_DX],DX

        return

$CHAR_OPER  ENDP



BREAK <$SetDPB - Create a valid DPB from a user-specified BPB>

        procedure   $SETDPB,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       ES:BP Points to DPB

;       DS:SI Points to BPB

; Function:

;       Build a correct DPB from the BPB

; Outputs:

; ES:BP and DS preserved all others destroyed



        MOV     DI,BP

        ADD     DI,2                    ; Skip over dpb_drive and dpb_UNIT

        LODSW

        STOSW                           ; dpb_sector_size

        MOV     DX,AX

        LODSB

        DEC     AL

        STOSB                           ; dpb_cluster_mask

        INC     AL

        XOR     AH,AH

LOG2LOOP:

        TEST    AL,1

        JNZ     SAVLOG

        INC     AH

        SHR     AL,1

        JMP     SHORT LOG2LOOP

SAVLOG:

        MOV     AL,AH

        STOSB                           ; dpb_cluster_shift

        MOV     BL,AL

        MOVSW                           ; dpb_first_FAT Start of FAT (# of reserved sectors)

        LODSB

        STOSB                           ; dpb_FAT_count Number of FATs

        MOV     BH,AL

        LODSW

        STOSW                           ; dpb_root_entries Number of directory entries

        MOV     CL,5

        SHR     DX,CL                   ; Directory entries per sector

        DEC     AX

        ADD     AX,DX                   ; Cause Round Up

        MOV     CX,DX

        XOR     DX,DX

        DIV     CX

        MOV     CX,AX                   ; Number of directory sectors

        INC     DI

        INC     DI                      ; Skip dpb_first_sector

        MOVSW                           ; Total number of sectors in DSKSIZ (temp as dpb_max_cluster)

        LODSB

        MOV     ES:[BP.dpb_media],AL    ; Media byte

        LODSW                           ; Number of sectors in a FAT

        STOSB                           ; dpb_FAT_size

        MUL     BH                      ; Space occupied by all FATs

        ADD     AX,ES:[BP.dpb_first_FAT]

        STOSW                           ; dpb_dir_sector

        ADD     AX,CX                   ; Add number of directory sectors

        MOV     ES:[BP.dpb_first_sector],AX

        SUB     AX,ES:[BP.DSKSIZ]

        NEG     AX                      ; Sectors in data area

        MOV     CL,BL                   ; dpb_cluster_shift

        SHR     AX,CL                   ; Div by sectors/cluster

        INC     AX

        MOV     ES:[BP.dpb_max_cluster],AX

        MOV     ES:[BP.dpb_current_dir],0     ; Current directory is root

        return

$SETDPB ENDP

;                                                                          ;

;            C  A  V  E  A  T     P  R  O  G  R  A  M  M  E  R             ;

;----+----+----+----+----+----+----+----+----+----+----+----+----+----+----;



        do_ext



CODE    ENDS

        END


```
