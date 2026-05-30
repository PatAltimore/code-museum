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
description: "This file implements various system calls for MS-DOS v2.0, enabling interaction with hardware and system-level settings. It reflects the evolution of MS-DOS from a simple CP/M-like OS to a more Unix-inspired design."

summary:
  - point: "Introduces system calls for managing hardware and system-level settings"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Reflects the transition to Unix-inspired features in MS-DOS v2.0"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Demonstrates early techniques for handling internationalization and device management"
    link: "https://en.wikipedia.org/wiki/Internationalization_and_localization"
    link_label: "Internationalization"
  - point: "Highlights the constraints of early PC hardware and software design"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Shows the modularity of MS-DOS through its segmented assembly structure"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"

enhancements:
  - id: "get-version-system-call"
    line_start: 139
    line_end: 191
    title: "How MS-DOS Revealed Its Version Number"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section implements the $GET_VERSION system call, which returns the MS-DOS version number along with OEM and user-specific identifiers. The routine uses straightforward register manipulation to fetch the version stored in memory and transfer it to the caller. At the time, knowing the OS version was crucial for compatibility, as software often relied on specific features introduced in newer versions. In 1983, MS-DOS v2.0 marked a significant leap forward by introducing features inspired by Unix, such as hierarchical directories. This call reflects the modularity of MS-DOS, allowing programs to adapt dynamically to the system environment. The technique influenced later APIs in operating systems like Windows, where version detection became a standard practice for backward compatibility."
  - id: "internationalization-support"
    line_start: 195
    line_end: 355
    title: "The First Steps Toward Global Software"
    wikipedia_url: "https://en.wikipedia.org/wiki/Internationalization_and_localization"
    image_url: ""
    image_caption: ""
    content: "The $INTERNATIONAL system call provides country-specific information, such as date/time formats, currency symbols, and decimal/thousands separators. This was an early attempt at internationalization, a feature that became increasingly important as MS-DOS spread globally. The routine dynamically retrieves country-specific data from an internal table, allowing applications to adapt to local conventions. In the early 1980s, internationalization was a novel concept for personal computers, as most software was designed for a single market. The approach here laid the groundwork for more sophisticated localization techniques in later systems, such as Windows and Linux. It also influenced the design of APIs like Win32's GetLocaleInfo and POSIX locale functions."
  - id: "verify-on-write-flag"
    line_start: 359
    line_end: 417
    title: "The Flag That Protected Your Data"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_integrity"
    image_url: ""
    image_caption: ""
    content: "The $GET_VERIFY_ON_WRITE and $SET_VERIFY_ON_WRITE system calls manage a flag that determines whether MS-DOS verifies data after writing it to disk. This feature was critical in an era when disk errors were common due to unreliable hardware. By toggling this flag, users could balance performance against data integrity. The implementation is simple but effective, directly manipulating a memory location to store the flag's state. This design reflects the minimalistic philosophy of MS-DOS, where every feature had to justify its inclusion due to tight memory and processing constraints. The concept of write verification influenced later file systems and storage technologies, where error detection and correction became standard."
  - id: "ctrl-c-trapping"
    line_start: 421
    line_end: 475
    title: "How MS-DOS Handled Interrupts Gracefully"
    wikipedia_url: "https://en.wikipedia.org/wiki/Control-C"
    image_url: ""
    image_caption: ""
    content: "The $SET_CTRL_C_TRAPPING system call enables or disables the handling of the Ctrl+C interrupt, allowing users to terminate running processes. This was a critical feature for command-line environments, where interrupt-driven control was a primary means of managing tasks. The routine checks the input parameters and updates the flag accordingly, ensuring that the system responds appropriately to user input. In the early 1980s, this kind of interrupt handling was a hallmark of robust system design, as it provided a safety mechanism for users. The concept influenced later operating systems, where interrupt handling became more sophisticated, enabling features like task prioritization and preemptive multitasking."
  - id: "drive-freespace-check"
    line_start: 545
    line_end: 647
    title: "Finding Free Space on Floppy Disks"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The $GET_DRIVE_FREESPACE system call calculates the free disk space on a specified drive. It retrieves information about allocation units, sector sizes, and cluster masks, reflecting the low-level nature of file system management in MS-DOS. The routine iterates through clusters to count free ones, a process that highlights the limitations of early file systems like FAT12, which were designed for floppy disks and small hard drives. This approach influenced later file systems, such as FAT32 and NTFS, which improved scalability and efficiency. The concept of querying free space became a standard feature in operating systems, enabling applications to manage storage dynamically."
  - id: "dma-address-management"
    line_start: 651
    line_end: 715
    title: "Direct Memory Access: The Silent Workhorse"
    wikipedia_url: "https://en.wikipedia.org/wiki/Direct_memory_access"
    image_url: ""
    image_caption: ""
    content: "The $GET_DMA and $SET_DMA system calls manage the Disk Transfer Address, a critical component of Direct Memory Access (DMA). DMA allows data to be transferred between memory and devices without CPU intervention, improving performance. These routines directly manipulate memory locations to retrieve or set the DMA address, reflecting the low-level control typical of MS-DOS. In the early 1980s, DMA was a cutting-edge feature that enabled faster disk operations, a necessity given the slow speed of early storage devices. The concept influenced later operating systems and hardware designs, where DMA became a standard feature for high-performance data transfer."
  - id: "default-drive-management"
    line_start: 799
    line_end: 859
    title: "Setting the Default Drive in MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Drive_letter_assignment"
    image_url: ""
    image_caption: ""
    content: "The $GET_DEFAULT_DRIVE and $SET_DEFAULT_DRIVE system calls manage the default drive, a fundamental concept in MS-DOS's command-line interface. These routines retrieve or update the drive number stored in memory, allowing users to specify where file operations should occur. This design reflects the simplicity of MS-DOS, where drive letters were used to navigate storage devices. The concept of default drives influenced later operating systems, where drive letter assignment became more dynamic and user-friendly. It also laid the groundwork for features like mount points and virtual file systems in Unix-like systems."
  - id: "interrupt-vector-management"
    line_start: 865
    line_end: 899
    title: "Mapping Interrupts: The Backbone of MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_vector_table"
    image_url: ""
    image_caption: ""
    content: "The $GET_INTERRUPT_VECTOR and $SET_INTERRUPT_VECTOR system calls manage interrupt vectors, which are pointers to routines that handle hardware and software interrupts. These routines retrieve or update the vector table, enabling dynamic configuration of interrupt handling. In the early 1980s, interrupt vectors were a critical part of system design, as they allowed the OS to respond to events like keyboard input and disk operations. This approach influenced the design of later operating systems, where interrupt handling became more abstract and integrated into kernel architectures. The concept remains fundamental to modern computing, underpinning everything from device drivers to real-time systems."
  - id: "recset-procedure"
    line_start: 973
    line_end: 1011
    title: "The Procedure That Tied It All Together"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_vector_table"
    image_url: ""
    image_caption: ""
    content: "The RECSET procedure is a utility function that assists in managing interrupt vectors, particularly when alternative vector mappings are enabled. It performs operations like searching for vector translations and updating the vector table. This routine encapsulates the complexity of interrupt management, providing a modular way to handle dynamic configurations. In the early 1980s, such utility functions were essential for maintaining the flexibility of MS-DOS, which had to support a wide range of hardware configurations. The modularity seen here influenced later operating systems, where abstraction layers and utility libraries became standard practice for managing system resources."
  - id: "break-char-oper-xenix-pcdos"
    line_start: 1015
    line_end: 1053
    title: "The Hack That Bridged XENIX and MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Xenix"
    image_url: ""
    image_caption: ""
    content: "This section defines the BREAK routine, which handles character operations and device availability flags to make MS-DOS compatible with XENIX-like systems. The programmer's immediate goal was to allow MS-DOS to emulate certain behaviors expected in Unix-derived environments, such as device naming conventions. The routine uses the AL register to determine the operation type (e.g., reading or setting switch characters or device availability flags) and manipulates the DL register accordingly. In 1983, the computing landscape was shifting rapidly. MS-DOS 2.0 was heavily inspired by Unix and XENIX, reflecting Microsoft's ambitions to cater to both personal computing and enterprise systems. At the time, compatibility was a critical selling point, as businesses transitioning from CP/M or Unix systems needed assurances that their workflows could be preserved. Tim Paterson and the Microsoft team were tasked with bridging these gaps while maintaining MS-DOS's simplicity and efficiency. This compatibility layer influenced later developments in operating systems, particularly in how device drivers and file systems were abstracted. The idea of emulating Unix-like behaviors in non-Unix systems became a recurring theme, seen in tools like Cygwin and the Windows Subsystem for Linux. By addressing these compatibility concerns early, MS-DOS laid the groundwork for Microsoft's dominance in both consumer and enterprise computing."
  - id: "char-oper-set-switch"
    line_start: 1055
    line_end: 1063
    title: "Setting Switch Characters: A Simple Yet Vital Mechanism"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The char_oper_set_switch routine enables MS-DOS to modify the switch character used for command-line options (e.g., '/' or '-'). This mechanism allowed users and developers to customize the operating system's behavior to align with regional or legacy conventions. The routine checks the AL register to determine whether the operation is a 'set' command and updates the switch_character variable with the value in the DL register. In the early 1980s, command-line interfaces were the primary method of interacting with operating systems. Consistency and flexibility in command syntax were crucial for user adoption, especially as MS-DOS competed with CP/M and other systems. Tim Paterson's approach here reflects the pragmatic design philosophy of MS-DOS: simplicity and adaptability. This concept of customizable switch characters influenced later operating systems and software tools, where user-defined syntax became a standard feature. For example, modern shells like Bash and Zsh allow extensive customization of command-line behavior, a direct descendant of these early design decisions."
  - id: "log2loop-cluster-shift-calculation"
    line_start: 1147
    line_end: 1157
    title: "How Bitwise Math Optimized Disk Access"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bitwise_operation"
    image_url: ""
    image_caption: ""
    content: "The LOG2LOOP routine calculates the cluster shift value for a disk, which determines the number of sectors per cluster. Using bitwise operations, the routine efficiently computes the logarithm base 2 of a value by repeatedly testing and shifting bits. This calculation is critical for building the Disk Parameter Block (DPB), as it directly impacts file system performance and storage efficiency. In 1983, disk storage was limited, and optimizing access patterns was paramount. MS-DOS 2.0 introduced subdirectories and other advanced file system features, necessitating more sophisticated disk management techniques. Tim Paterson and his team leveraged assembly-level operations to ensure these calculations were both fast and reliable, adhering to the constraints of the IBM PC's hardware. This technique became a foundational element in file system design. The use of bitwise math for cluster calculations persists in modern operating systems, where similar principles are applied to optimize storage access in NTFS, ext4, and other file systems. It also influenced the development of algorithms in database indexing and memory management."
  - id: "setdpb-build-disk-parameter-block"
    line_start: 1235
    line_end: 1251
    title: "Building a Disk Parameter Block: The Heart of MS-DOS Storage"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_partitioning"
    image_url: ""
    image_caption: ""
    content: "The $SETDPB routine constructs a Disk Parameter Block (DPB) from a user-specified BIOS Parameter Block (BPB). This process involves copying and transforming data, such as sector size, cluster mask, and FAT size, to create a valid DPB that the operating system can use for managing disk storage. The routine also calculates the maximum cluster count and initializes the current directory to the root. Disk management was a critical feature of MS-DOS 2.0, as it introduced support for hierarchical file systems and larger storage devices. At the time, the IBM PC's hardware imposed strict limitations on disk access, requiring software solutions to optimize performance and compatibility. This routine exemplifies the meticulous attention to detail that characterized MS-DOS's development. The concept of translating BPB data into a DPB influenced later operating systems and file system utilities. It laid the groundwork for tools like partition managers and disk formatters, which rely on similar data structures to organize storage. The modular design of this routine also inspired best practices in system programming, emphasizing clear interfaces and reusable components."

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