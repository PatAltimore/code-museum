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
description: "This file defines system calls for getting and setting various MS-DOS parameters, showcasing the operating system's low-level design and its evolution from simple beginnings to a more Unix-like structure in version 2.0."

summary:
  - point: "Introduces subroutines for querying and modifying system state"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Demonstrates early use of assembly for operating system development"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"
  - point: "Reflects constraints of early PC hardware and memory models"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Highlights MS-DOS's adaptation to internationalization and device handling"
    link: "https://en.wikipedia.org/wiki/Internationalization_and_localization"
    link_label: "Internationalization"
  - point: "Served as a foundation for later DOS-compatible systems and tools"
    link: "https://en.wikipedia.org/wiki/FreeDOS"
    link_label: "FreeDOS"

enhancements:
  - id: "name-getset-definition"
    line_start: 3
    line_end: 47
    title: "Defining the GETSET module"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section introduces the GETSET module, which encapsulates system calls for retrieving and modifying various MS-DOS parameters. The programmer, likely Tim Paterson or a Microsoft engineer, defines the scope of the module and sets up the groundwork for the subsequent routines. In 1983, MS-DOS 2.0 was a significant rewrite inspired by Unix, and this module reflects the shift toward a more structured and extensible operating system. The inclusion of system calls for internationalization, device management, and interrupt handling illustrates the growing complexity of MS-DOS as it adapted to diverse hardware and user needs. These foundational definitions influenced later operating systems, including FreeDOS and other DOS-compatible environments, which retained similar modular structures."
  - id: "include-dosseg-dossym-devsym"
    line_start: 49
    line_end: 77
    title: "Including segment and symbol definitions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_segmentation"
    image_url: ""
    image_caption: ""
    content: "This section includes external assembly files that define memory segments and symbols used throughout the GETSET module. DOSSEG.ASM, DOSSYM.ASM, and DEVSYM.ASM provide crucial definitions for memory layout, system variables, and device symbols. Memory segmentation was a cornerstone of 8086 architecture, enabling MS-DOS to operate within the constraints of the IBM PC's 640KB conventional memory limit. By modularizing these definitions, the developers ensured that the code could be reused and adapted for different configurations. This approach was typical of early operating systems, where hardware constraints necessitated careful planning and optimization. The modularity seen here influenced later software development practices, including the use of header files in C and C++."
  - id: "get-version-msdos"
    line_start: 139
    line_end: 191
    title: "Retrieving the MS-DOS version number"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS_version_history"
    image_url: ""
    image_caption: ""
    content: "The $GET_VERSION subroutine retrieves the MS-DOS version number and other related identifiers, such as the OEM number and user number. This routine reflects the need for applications to adapt to different versions of the operating system, a common challenge in the early 1980s as MS-DOS evolved rapidly. The inclusion of pre-1.28 DOS compatibility highlights the transitional nature of the software during this period. Developers relied on such routines to ensure compatibility across various OEM implementations of MS-DOS, which Microsoft licensed widely. This mechanism laid the groundwork for version-checking practices that persist in modern software development, where APIs and compatibility layers are critical for maintaining backward compatibility."
  - id: "internationalization-country-info"
    line_start: 195
    line_end: 355
    title: "Handling internationalization and country-specific settings"
    wikipedia_url: "https://en.wikipedia.org/wiki/Internationalization_and_localization"
    image_url: ""
    image_caption: ""
    content: "The $INTERNATIONAL subroutine provides country-specific information, including date/time formats, currency symbols, and separators. This reflects MS-DOS's early efforts to support internationalization, a growing concern as the operating system gained global adoption. The routine uses a table-driven approach to manage country codes and associated data, a technique that balances flexibility with memory efficiency. In the early 1980s, internationalization was a novel feature for personal computer operating systems, as most software was tailored to specific regions. By incorporating these capabilities, MS-DOS set a precedent for global software design, influencing later systems like Windows and Linux, which expanded on these principles to support multilingual environments and diverse cultural norms."
  - id: "verify-after-write-flag"
    line_start: 359
    line_end: 417
    title: "Managing the verify-after-write flag"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_verification"
    image_url: ""
    image_caption: ""
    content: "The $GET_VERIFY_ON_WRITE and $SET_VERIFY_ON_WRITE subroutines manage a flag that determines whether data verification occurs after writing to disk. This feature addresses the reliability concerns of early disk drives, which were prone to errors due to mechanical imperfections and limited error-checking capabilities. By allowing users or applications to toggle this behavior, MS-DOS provided a balance between performance and data integrity. In the early 1980s, disk reliability was a critical issue, and features like this helped establish MS-DOS as a robust operating system for business and personal use. The concept of configurable verification influenced later file systems and storage technologies, where similar options are available for optimizing performance or ensuring data safety."
  - id: "ctrl-c-trapping"
    line_start: 421
    line_end: 475
    title: "Enabling or disabling CTRL+C trapping"
    wikipedia_url: "https://en.wikipedia.org/wiki/Control-C"
    image_url: ""
    image_caption: ""
    content: "The $SET_CTRL_C_TRAPPING subroutine allows applications to enable or disable the handling of the CTRL+C interrupt, which is used to terminate processes. This feature reflects MS-DOS's focus on providing developers with fine-grained control over system behavior. In the context of early personal computing, where multitasking was limited and applications often ran in isolation, such control was essential for ensuring predictable program execution. The ability to toggle CTRL+C trapping also highlights the influence of Unix-like systems, which offered similar mechanisms for signal handling. This design decision contributed to the flexibility of MS-DOS and influenced later operating systems, including Windows, which expanded on interrupt and signal management to support more complex multitasking environments."
  - id: "get-indos-flag"
    line_start: 479
    line_end: 509
    title: "Retrieving the DOS critical-section flag"
    wikipedia_url: "https://en.wikipedia.org/wiki/Critical_section"
    image_url: ""
    image_caption: ""
    content: "The $GET_INDOS_FLAG subroutine returns the location of the DOS critical-section flag, which indicates whether the operating system is in a state where interrupts can safely occur. This mechanism is crucial for coordinating access to shared resources in a single-tasking environment like MS-DOS. By exposing this flag to applications, MS-DOS allows developers to implement custom interrupt handling routines that respect the operating system's state. In the early 1980s, such features were innovative for personal computer operating systems, which were still evolving from simpler, single-purpose designs. The concept of critical-section flags influenced later multitasking systems, where similar mechanisms are used to manage concurrency and prevent race conditions."
  - id: "drive-freespace-query"
    line_start: 545
    line_end: 643
    title: "Querying free disk space on a drive"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_storage"
    image_url: ""
    image_caption: ""
    content: "The $GET_DRIVE_FREESPACE subroutine calculates the amount of free disk space available on a specified drive. It retrieves information about allocation units, sector size, and cluster masks, reflecting the low-level nature of MS-DOS's file system operations. This routine demonstrates the challenges of managing storage on early PCs, where disk space was limited and fragmentation was common. By providing detailed information about disk usage, MS-DOS enabled developers to optimize their applications for the constrained environments of the time. The approach taken here influenced later file systems, including FAT32 and NTFS, which expanded on these principles to support larger storage capacities and more efficient space management."
  - id: "break-char-oper-device-management"
    line_start: 1015
    line_end: 1093
    title: "Managing device availability and switch characters"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section defines the BREAK routine, which handles device availability and switch character management. The programmer uses the register AL to determine the function being executed, such as reading or setting the switch character or device availability. The DL register holds the input or output values, depending on the operation. At the time, MS-DOS v2.0 was transitioning from a CP/M-like architecture to one influenced by Unix/XENIX, necessitating more sophisticated device handling. Tim Paterson and the Microsoft team designed these routines to ensure compatibility with emerging standards while maintaining simplicity for OEMs. This approach influenced later operating systems, including Windows, which retained the concept of device files and logical device management."
  - id: "char-oper-set-switch"
    line_start: 1055
    line_end: 1063
    title: "Setting the switch character for command parsing"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The char_oper_set_switch routine updates the switch character used in command parsing, storing the new value in memory. This functionality was crucial for supporting command-line operations and ensuring compatibility with different user preferences or system configurations. In the early 1980s, command-line interfaces were the primary way users interacted with computers, and flexibility in parsing commands was a competitive feature. This routine reflects the era's emphasis on user-configurable options, laying groundwork for later developments in shell environments and scripting languages."
  - id: "char-oper-read-avail"
    line_start: 1065
    line_end: 1073
    title: "Reading device availability flag"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_file"
    image_url: ""
    image_caption: ""
    content: "This routine retrieves the device availability flag, stored in memory, and places it in the DL register. The flag determines whether device names require the '/DEV/' prefix. During the development of MS-DOS v2.0, device management was evolving to accommodate more complex systems and user expectations. The ability to toggle device naming conventions reflects the influence of Unix-like systems, which used a standardized approach to device files. This routine helped bridge the gap between simpler CP/M-style systems and the more structured file and device handling seen in Unix and its derivatives."
  - id: "setdpb-convert-bpb-to-dpb"
    line_start: 1105
    line_end: 1235
    title: "Converting BPB to DPB for file system compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS_parameter_block"
    image_url: ""
    image_caption: ""
    content: "The $SETDPB routine converts a BIOS Parameter Block (BPB) into a Drive Parameter Block (DPB), ensuring compatibility with MS-DOS's file system. The BPB describes the physical layout of a disk, while the DPB adds logical details required by the operating system. This conversion was vital for supporting diverse storage devices and ensuring interoperability between hardware and software. The routine processes various parameters, such as sector size, cluster mask, and FAT size, to build a complete DPB. This design reflects the growing complexity of file systems in the early 1980s, influenced by Unix's hierarchical structure and the need to support subdirectories and device independence. The technique laid the foundation for more advanced file systems, including FAT32 and NTFS."

---

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

      