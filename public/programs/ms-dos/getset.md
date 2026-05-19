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
description: "This file contains assembly routines for MS-DOS v2.0, showcasing the evolution of system calls and hardware interactions in early personal computing."

summary:
  - point: "Introduces modular system calls for MS-DOS, enabling flexible hardware and software interactions."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Demonstrates early implementation of internationalization features in operating systems."
    link: "https://en.wikipedia.org/wiki/Internationalization_and_localization"
    link_label: "Internationalization"
  - point: "Highlights the use of assembly language to directly manipulate hardware and memory."
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly language"
  - point: "Reflects the influence of Unix-like design principles in MS-DOS v2.0."
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Showcases the constraints and ingenuity required to build efficient software for early PCs."
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "name-section-intro"
    line_start: 3
    line_end: 47
    title: "Modular design: GETSET system calls"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This opening section establishes the modular nature of MS-DOS system calls, encapsulated within the GETSET module. The programmer's intent here was to create a unified interface for retrieving and setting various system parameters, such as version numbers, drive information, and international settings. In 1983, MS-DOS v2.0 marked a significant departure from earlier versions by adopting Unix-inspired design principles, including hierarchical file systems and modularity. Tim Paterson, originally the author of 86-DOS, worked with Microsoft engineers to refine these concepts for broader compatibility and scalability. The modularity seen here would become a hallmark of MS-DOS, influencing future operating systems and enabling widespread adoption by OEMs. This foundational structure reflects the challenges of developing software for constrained hardware, such as the IBM PC's 16-bit 8086 processor."
  - id: "include-dosseg-dossym"
    line_start: 49
    line_end: 133
    title: "Segment definitions: Linking the system"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_segmentation"
    image_url: ""
    image_caption: ""
    content: "This section includes external assembly files like DOSSEG.ASM and DOSSYM.ASM, which define memory segments and symbols crucial for MS-DOS's operation. Memory segmentation was a necessity for the 8086 processor, which could only address 64KB at a time. By dividing memory into segments, programmers could manage larger programs and data structures within these constraints. In the early 1980s, this approach was standard practice, but it required meticulous planning and coordination between code modules. The inclusion of these files reflects Microsoft's effort to create a cohesive and maintainable codebase, ensuring compatibility across different hardware configurations. These definitions laid the groundwork for efficient memory management, a critical factor in MS-DOS's success on resource-limited machines."
  - id: "get-version-subroutine"
    line_start: 139
    line_end: 189
    title: "Returning MS-DOS version: A compatibility cornerstone"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The $GET_VERSION subroutine retrieves the MS-DOS version number, a feature essential for ensuring backward compatibility with older software. This routine outputs the OEM number, user number, and version number in specific registers, adhering to conventions that software developers relied upon. During the early 1980s, compatibility was a major concern as the PC market expanded rapidly, with software needing to run on a variety of hardware setups. Tim Paterson and Microsoft's engineers understood that maintaining consistency across versions would be key to MS-DOS's widespread adoption. This subroutine exemplifies their foresight, as it allowed applications to adapt dynamically to different system versions. The design principles here influenced later operating systems, which continued to prioritize backward compatibility as a critical feature."
  - id: "internationalization-subroutine"
    line_start: 195
    line_end: 355
    title: "Internationalization: Early steps in localization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Internationalization_and_localization"
    image_url: ""
    image_caption: ""
    content: "The $INTERNATIONAL subroutine provides country-dependent information, such as date formats, currency symbols, and separators. This feature reflects the growing need for software to accommodate global markets in the early 1980s. As IBM PCs began to sell internationally, Microsoft had to ensure MS-DOS could adapt to different cultural conventions. The subroutine uses a lookup table to retrieve country-specific settings, showcasing an efficient approach to localization within the constraints of assembly language. While rudimentary by modern standards, this implementation was groundbreaking at the time, laying the foundation for more sophisticated internationalization efforts in later software. It highlights the challenges of designing software for diverse users while operating within the limited memory and processing power of early PCs."
  - id: "verify-on-write-flag"
    line_start: 359
    line_end: 415
    title: "Verify-on-write: Balancing reliability and performance"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The $GET_VERIFY_ON_WRITE and $SET_VERIFY_ON_WRITE subroutines manage a flag that determines whether data written to disk should be immediately verified. This feature was crucial for ensuring data integrity on early PCs, where hardware failures were more common. However, verifying every write operation could slow down performance, especially on systems with limited processing power. By allowing users to toggle this setting, MS-DOS provided flexibility to prioritize either reliability or speed, depending on the application's needs. This design decision reflects the trade-offs developers faced in the early 1980s, balancing user expectations with hardware limitations. The concept of configurable system settings introduced here would become a standard practice in operating systems, enabling greater customization and control."
  - id: "ctrl-c-trapping"
    line_start: 421
    line_end: 475
    title: "CTRL+C trapping: Managing user interrupts"
    wikipedia_url: "https://en.wikipedia.org/wiki/Control-C"
    image_url: ""
    image_caption: ""
    content: "The $SET_CTRL_C_TRAPPING subroutine enables or disables checking for the CTRL+C interrupt, a feature that allows users to terminate running processes. This functionality was critical for interactive computing, giving users control over software execution. In the early days of personal computing, user experience was a growing concern, and features like this helped make systems more accessible. The implementation here demonstrates the careful balance between responsiveness and system stability, as improper handling of interrupts could lead to crashes or data loss. By providing a mechanism to toggle this behavior, MS-DOS empowered users while maintaining control over system operations. This approach influenced later operating systems, which continued to refine interrupt handling for better usability."
  - id: "get-indos-flag"
    line_start: 479
    line_end: 533
    title: "Critical-section flag: Synchronizing system operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Critical_section"
    image_url: ""
    image_caption: ""
    content: "The $GET_INDOS_FLAG subroutine returns the location of the DOS critical-section flag, a mechanism used to manage concurrency and prevent conflicts during system operations. This flag was particularly important for interrupt routines, ensuring that critical processes were not disrupted. In the constrained environment of early PCs, where multitasking was limited, such synchronization mechanisms were vital for maintaining system stability. The design here reflects the influence of more advanced operating systems like Unix, which had already begun to explore similar concepts. By incorporating these ideas into MS-DOS, Microsoft laid the groundwork for more sophisticated multitasking and concurrency management in later versions and other operating systems."
  - id: "get-drive-freespace"
    line_start: 545
    line_end: 643
    title: "Drive free space: Optimizing storage management"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The $GET_DRIVE_FREESPACE subroutine calculates the available storage space on a specified drive, returning details such as sector size and allocation units. This functionality was essential for applications that needed to manage files efficiently, especially in the limited storage environments of early PCs. The implementation uses a loop to scan for free clusters, reflecting the low-level nature of assembly programming and the need for precise control over hardware. In the early 1980s, storage optimization was a critical concern, as hard drives were expensive and often small. By providing detailed information about drive space, MS-DOS enabled developers to write software that made the most of available resources. This feature influenced later file systems, which continued to prioritize efficient storage management."
  - id: "break-char-oper-path-switches"
    line_start: 1015
    line_end: 1053
    title: "Paths and switches: bridging XENIX and MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Xenix"
    image_url: ""
    image_caption: ""
    content: "This section introduces the BREAK routine, a clever hack designed to make XENIX appear compatible with MS-DOS. The programmer is addressing a fundamental challenge: how to reconcile the Unix-inspired hierarchical file system with the simpler, flat file system of early MS-DOS. By manipulating paths and switches, this routine allows the operating system to interpret device names and paths in a way that aligns with XENIX conventions. In 1983, the computing world was grappling with the transition from single-user systems to multi-user environments, and Microsoft was keen to position MS-DOS as a bridge between these worlds. Tim Paterson, originally the author of 86-DOS, had laid the groundwork for this flexibility, but the rewrite for v2.0 demanded significant ingenuity. This routine reflects the growing influence of Unix-like systems on personal computing. Its legacy is evident in the continued evolution of file systems that strive for compatibility across platforms."
  - id: "char-oper-set-switch"
    line_start: 1055
    line_end: 1063
    title: "Setting the switch character: a user-driven choice"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The char_oper_set_switch routine allows the user to define a switch character, a critical feature for command-line operations. In MS-DOS, the switch character determines how commands and options are parsed, enabling flexibility for different user preferences. This was a direct response to the varied needs of OEMs and end-users, as Microsoft sought to make MS-DOS adaptable to a wide range of hardware configurations. In the early 1980s, such customization was rare, as most operating systems were tightly coupled to specific hardware. By empowering users to set their own preferences, Microsoft demonstrated a forward-thinking approach that would become a hallmark of its software design philosophy."
  - id: "char-oper-read-availability"
    line_start: 1065
    line_end: 1073
    title: "Reading device availability: a nod to modularity"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_driver"
    image_url: ""
    image_caption: ""
    content: "This routine reads the availability of devices, reflecting MS-DOS's modular approach to hardware interaction. By storing device availability flags, the operating system can dynamically adjust its behavior based on the presence or absence of specific devices. In 1983, this was a significant step forward, as personal computers were becoming increasingly diverse in their hardware configurations. The modularity seen here mirrors concepts from Unix, where device drivers and hardware abstraction were central to the system's design. This routine underscores Microsoft's ambition to make MS-DOS a versatile and scalable operating system, capable of supporting a wide array of devices."
  - id: "setdpb-create-dpb-from-bpb"
    line_start: 1103
    line_end: 1233
    title: "Building a Disk Parameter Block: the foundation of FAT"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The $SETDPB routine is a cornerstone of MS-DOS's file system management, converting a BIOS Parameter Block (BPB) into a Disk Parameter Block (DPB). This transformation is essential for initializing and managing FAT-based file systems, which were integral to MS-DOS's operation. The BPB contains low-level information about the disk's geometry, while the DPB provides a higher-level abstraction for the operating system. In 1983, this was a groundbreaking approach, enabling MS-DOS to support a variety of storage devices without requiring extensive rewrites for each new hardware type. The routine's detailed manipulations—such as calculating cluster shifts and directory sectors—highlight the precision required to optimize disk usage and performance. This design would influence file system implementations for decades, cementing FAT's role as a ubiquitous standard in personal computing."

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