---
title: "DEV.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/DEV.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/DEV.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "dev"
order: 28
description: "This file defines device call routines for MS-DOS 2.0, enabling interaction with hardware and files in a modular, Unix-inspired manner."

summary:
  - point: "Introduces modular device call routines for MS-DOS 2.0"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Demonstrates early use of structured device I/O handling"
    link: "https://en.wikipedia.org/wiki/Device_driver"
    link_label: "Device driver"
  - point: "Reflects influence of Unix on MS-DOS 2.0 design"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Highlights assembly-level optimization for 8086 hardware"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"
  - point: "Key step in Microsoft's OEM licensing strategy"
    link: "https://en.wikipedia.org/wiki/MS-DOS#OEM_licensing"
    link_label: "OEM licensing"

enhancements:
  - id: "include-dosseg-setup"
    line_start: 1
    line_end: 29
    title: "Setting up segment assumptions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_segmentation"
    image_url: ""
    image_caption: ""
    content: "This section sets up the memory segmentation assumptions for the MS-DOS device call routines. The `INCLUDE DOSSEG.ASM` directive ensures that the code adheres to the DOS memory model, where segments are divided into code, data, and stack. This segmentation was crucial for running MS-DOS on the Intel 8086 processor, which had a 20-bit address space and relied heavily on segmented memory. By defining these assumptions early, the code establishes a foundation for consistent memory access throughout the file. This approach reflects the constraints of the 1980s hardware environment, where efficient use of memory was paramount. Segmentation influenced later operating systems, including Windows 3.x, which retained compatibility with MS-DOS memory models."
  - id: "name-dev-variable-definitions"
    line_start: 43
    line_end: 89
    title: "Defining device-related variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_driver"
    image_url: ""
    image_caption: ""
    content: "This section defines key variables used for device I/O operations, such as `IOXAD`, `DEVIOBUF`, and `DMAAdd`. These variables represent memory locations for device buffers, transfer addresses, and other critical parameters. By centralizing these definitions, the code ensures modularity and reusability, allowing device drivers to interact with hardware in a standardized way. Tim Paterson's design reflects the influence of Unix's modular approach to device handling, adapted for the constraints of the 8086 architecture. This modularity became a hallmark of MS-DOS, enabling OEMs to extend functionality by adding custom device drivers. The concept of standardized device interaction persists in modern operating systems, where APIs like Windows Driver Model (WDM) and Linux's device file system build on these early principles."
  - id: "iofunc-retry-error-handling"
    line_start: 87
    line_end: 165
    title: "Retrying I/O operations on error"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_detection_and_correction"
    image_url: ""
    image_caption: ""
    content: "The `IOFUNC_RETRY` routine implements error handling for device I/O operations. If an error occurs during a device call, the routine retries the operation, ensuring robustness in the face of transient hardware issues. This approach reflects the need for reliability in early personal computers, where hardware failures were common. By preserving the state of registers and memory, the routine minimizes disruption to the system while attempting recovery. Tim Paterson's design prioritizes user experience, ensuring that MS-DOS remains functional even under adverse conditions. Error handling routines like this influenced later operating systems, where techniques such as retries and fallback mechanisms became standard practice in device drivers and system APIs."
  - id: "iotodev-device-specific-handling"
    line_start: 179
    line_end: 229
    title: "Routing I/O to devices"
    wikipedia_url: "https://en.wikipedia.org/wiki/Input/output"
    image_url: ""
    image_caption: ""
    content: "The `IOTODEV` routine routes I/O operations to specific devices based on the function code in the `AH` register. It uses bitwise operations and conditional jumps to determine the appropriate action, such as reading, writing, or flushing a device. This logic reflects the modularity of MS-DOS 2.0, where device-specific operations are abstracted into a unified interface. The routine's design is influenced by Unix's device file model, adapted for the constraints of the 8086 processor. By standardizing device interaction, MS-DOS enabled OEMs to develop custom hardware drivers without modifying the core operating system. This abstraction became a foundational principle for later systems, including Windows NT and Linux, which use similar models for device interaction."
  - id: "devname-device-name-lookup"
    line_start: 651
    line_end: 689
    title: "Searching for device names"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_file"
    image_url: ""
    image_caption: ""
    content: "The `DevName` routine searches for a device name in the list of I/O drivers. It compares the provided name against the names stored in the device headers, using string comparison instructions like `CMPSW`. If a match is found, the routine sets pointers to the device header and updates the status register. This mechanism reflects the influence of Unix's device file model, where devices are represented as files with names. By implementing name-based lookup, MS-DOS simplifies device management for users and developers, allowing hardware to be accessed using familiar file-like interfaces. This concept persists in modern operating systems, where devices are often represented as files or objects with unique identifiers."
  - id: "setcallhead-device-call-header"
    line_start: 755
    line_end: 863
    title: "Preparing device call headers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_driver"
    image_url: ""
    image_caption: ""
    content: "The `SETCALLHEAD` routine prepares the device call header, a structured block of data used to communicate with hardware devices. It populates fields such as the transfer address, record count, and media byte, ensuring that the device receives all necessary information for the requested operation. This structured approach reflects the influence of Unix's modular device handling, adapted for the constraints of MS-DOS and the 8086 processor. By standardizing the format of device calls, MS-DOS enables consistent interaction with a wide range of hardware. This design principle influenced later operating systems, where APIs like Windows Driver Model (WDM) and Linux's device file system use similar structured communication methods."

---

;

; Device call routines for MSDOS

;



INCLUDE DOSSEG.ASM



IFNDEF  KANJI

KANJI   EQU     0       ;FALSE

ENDIF



CODE    SEGMENT BYTE PUBLIC  'CODE'

        ASSUME  SS:DOSGROUP,CS:DOSGROUP



.xlist

.xcref

INCLUDE DOSSYM.ASM

INCLUDE DEVSYM.ASM

.cref

.list



TITLE   DEV - Device call routines

NAME    Dev



        i_need  IOXAD,DWORD

        i_need  IOSCNT,WORD

        i_need  DEVIOBUF,4

        i_need  IOCALL,BYTE

        i_need  IOMED,BYTE

        i_need  IORCHR,BYTE

        i_need  CALLSCNT,WORD

        i_need  DMAAdd,DWORD

        i_need  NullDevPt,DWORD

        i_need  CallDevAd,DWORD

        i_need  Attrib,BYTE

        i_need  NULDEV,DWORD

        i_need  Name1,BYTE

        i_need  DevPt,DWORD

        i_need  DPBHead,DWORD

        i_need  NumIO,BYTE

        i_need  ThisDPB,DWORD

        i_need  DevCall,DWORD

        i_need  VerFlg,BYTE



SUBTTL IOFUNC -- DO FUNCTION 1-12 I/O

PAGE

IOFUNC_RETRY:

ASSUME  DS:NOTHING,ES:NOTHING

        invoke  restore_world



        procedure   IOFUNC,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DS:SI Points to FCB

;       AH is function code

;               = 0 Input

;               = 1 Input Status

;               = 2 Output

;               = 3 Output Status

;               = 4 Flush

;       AL = character if output

; Function:

;       Perform indicated I/O to device or file

; Outputs:

;       AL is character if input

;       If a status call

;               zero set if not ready

;               zero reset if ready (character in AL for input status)

; For regular files:

;       Input Status

;               Gets character but restores fcb_RR field

;               Zero set on EOF

;       Input

;               Gets character advances fcb_RR field

;               Returns ^Z on EOF

;       Output Status

;               Always ready

; AX altered, all other registers preserved



        MOV     WORD PTR [IOXAD+2],SS

        MOV     WORD PTR [IOXAD],OFFSET DOSGROUP:DEVIOBUF

        MOV     WORD PTR [IOSCNT],1

        MOV     WORD PTR [DEVIOBUF],AX



IOFUNC2:

        TEST    [SI.fcb_DEVID],080H

        JNZ     IOTODEV

        JMP     IOTOFILE



IOTODEV:

        invoke  save_world

        PUSH    DS

        PUSH    SS

        POP     ES

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        XOR     BX,BX

        MOV     [IOCALL.REQSTAT],BX

        MOV     BYTE PTR [IOMED],BL



        MOV     BX,OFFSET DOSGROUP:IOCALL



        MOV     CX,(DEVRD SHL 8) OR DRDWRHL

        OR      AH,AH

        JZ      DCALLR

        MOV     CX,(DEVRDND SHL 8) OR DRDNDHL

        DEC     AH

        JZ      DCALLR

        MOV     CX,(DEVWRT SHL 8) OR DRDWRHL

        DEC     AH

        JZ      DCALLO

        MOV     CX,(DEVOST SHL 8) OR DSTATHL

        DEC     AH

        JZ      DCALLO

DFLUSH:

        MOV     CX,(DEVIFL SHL 8) OR DFLSHL

DCALLR:

        MOV     AH,86H

DCALL:

        MOV     [IOCALL.REQLEN],CL

        MOV     [IOCALL.REQFUNC],CH

        MOV     CL,AH

        POP     DS

ASSUME  DS:NOTHING

        CALL    DEVIOCALL

        MOV     DI,[IOCALL.REQSTAT]

        TEST    DI,STERR

        JZ      OKDEVIO

        MOV     AH,CL

        invoke  CHARHARD

        CMP     AL,1

        JZ      IOFUNC_RETRY

;Know user must have wanted ignore. Make sure device shows ready so

;that DOS doesn't get caught in a status loop when user simply wants

;to ignore the error.

        AND     BYTE PTR [IOCALL.REQSTAT+1], NOT (STBUI SHR 8)

OKDEVIO:

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        CMP     CH,DEVRDND

        JNZ     DNODRD

        MOV     AL,BYTE PTR [IORCHR]

        MOV     [DEVIOBUF],AL



DNODRD: MOV     AH,BYTE PTR [IOCALL.REQSTAT+1]

        NOT     AH                      ; Zero = busy, not zero = ready

        AND     AH,STBUI SHR 8



        invoke  restore_world

ASSUME  DS:NOTHING

        MOV     AX,WORD PTR [DEVIOBUF]

        return



DCALLO:

        MOV     AH,87H

        JMP     SHORT DCALL



IOTOFILE:

ASSUME  DS:NOTHING

        OR      AH,AH

        JZ      IOIN

        DEC     AH

        JZ      IOIST

        DEC     AH

        JZ      IOUT

        return                  ; NON ZERO FLAG FOR OUTPUT STATUS



IOIST:

        PUSH    WORD PTR [SI.fcb_RR]        ; Save position

        PUSH    WORD PTR [SI.fcb_RR+2]

        CALL    IOIN

        POP     WORD PTR [SI.fcb_RR+2]      ; Restore position

        POP     WORD PTR [SI.fcb_RR]

        return



IOUT:

        CALL    SETXADDR

        invoke  STORE

        invoke  FINNOSAV

        CALL    RESTXADDR       ; If you change this into a jmp don't come

        return                  ; crying to me when things don't work ARR



IOIN:

        CALL    SETXADDR

        invoke  LOAD

        PUSH    CX

        invoke  FINNOSAV

        POP     CX

        OR      CX,CX           ; Check EOF

        CALL    RESTXADDR

        MOV     AL,[DEVIOBUF]   ; Get byte from trans addr

        retnz

        MOV     AL,1AH          ; ^Z if EOF

        return



SETXADDR:

        POP     WORD PTR [CALLSCNT]     ; Return address

        invoke  save_world

        PUSH    WORD PTR [DMAADD]       ; Save Disk trans addr

        PUSH    WORD PTR [DMAADD+2]

        PUSH    DS

        PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP

        MOV     CX,WORD PTR [IOXAD+2]

        MOV     WORD PTR [DMAADD+2],CX

        MOV     CX,WORD PTR [IOXAD]

        MOV     WORD PTR [DMAADD],CX    ; Set byte trans addr

        MOV     CX,[IOSCNT]             ; ioscnt specifies length of buffer

        POP     DS

ASSUME  DS:NOTHING

        MOV     [SI.fcb_RECSIZ],1           ; One byte per record

        MOV     DX,SI                   ; FCB to DS:DX

        invoke  GETRRPOS

        JMP     SHORT RESTRET           ; RETURN ADDRESS



RESTXADDR:

        POP     WORD PTR [CALLSCNT]     ; Return address

        POP     WORD PTR [DMAADD+2]     ; Restore Disk trans addr

        POP     WORD PTR [DMAADD]

        invoke  restore_world

RESTRET:JMP     WORD PTR [CALLSCNT]      ; Return address

IOFUNC  ENDP



SUBTTL DEVIOCALL, DEVIOCALL2 - CALL A DEVICE

PAGE

        procedure   DEVIOCALL,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DS:SI Points to device FCB

;       ES:BX Points to request data

; Function:

;       Call the device

; Outputs:

;       None

; DS:SI,AX destroyed, others preserved



        LDS     SI,DWORD PTR [SI.fcb_FIRCLUS]



       entry   DEVIOCALL2

; As above only DS:SI points to device header on entry, and DS:SI is preserved

        MOV     AX,[SI.SDEVSTRAT]

        MOV     WORD PTR [CALLDEVAD],AX

        MOV     WORD PTR [CALLDEVAD+2],DS

        CALL    DWORD PTR [CALLDEVAD]

        MOV     AX,[SI.SDEVINT]

        MOV     WORD PTR [CALLDEVAD],AX

        CALL    DWORD PTR [CALLDEVAD]

        return

DEVIOCALL   ENDP



SUBTTL DEVNAME - LOOK FOR NAME OF DEVICE

PAGE

        procedure   DEVNAME,NEAR

ASSUME  DS:DOSGROUP,ES:DOSGROUP



; Inputs:

;       DS,ES:DOSGROUP

;       Filename in NAME1

; Function:

;       Determine if file is in list of I/O drivers

; Outputs:

;       Carry set if name not found

;       ELSE

;       Zero flag set

;       BH = Bit 7,6 = 1, bit 5 = 0 (cooked mode)

;            bits 0-4 set from low byte of attribute word

;       DEVPT = DWORD pointer to Device header of device

; Registers BX destroyed



        PUSH    SI

        PUSH    DI

        PUSH    CX



        IF      KANJI

        PUSH    WORD PTR [NAME1]

        CMP     [NAME1],5

        JNZ     NOKTR

        MOV     [NAME1],0E5H

NOKTR:

        ENDIF



        TEST    BYTE PTR [ATTRIB],attr_volume_id ; If looking for VOL id don't find devs

        JNZ     RET31

        MOV     SI,OFFSET DOSGROUP:NULDEV

LOOKIO:

ASSUME  DS:NOTHING

        TEST    [SI.SDEVATT],DEVTYP

        JZ      SKIPDEV                 ; Skip block devices

        PUSH    SI

        ADD     SI,SDEVNAME

        MOV     DI,OFFSET DOSGROUP:NAME1

        MOV     CX,4                    ; All devices are 8 letters

        REPE    CMPSW                   ; Check for name in list

        POP     SI

        JZ      IOCHK                   ; Found it?

SKIPDEV:

        LDS     SI,DWORD PTR [SI]       ; Get address of next device

        CMP     SI,-1                   ; At end of list?

        JNZ     LOOKIO

RET31:  STC                             ; Not found

RETNV:  PUSH    SS

        POP     DS

ASSUME  DS:DOSGROUP



        IF      KANJI

        POP     WORD PTR [NAME1]

        ENDIF



        POP     CX

        POP     DI

        POP     SI

        RET



IOCHK:

ASSUME  DS:NOTHING

        MOV     WORD PTR [DEVPT+2],DS         ; Save pointer to device

        MOV     BH,BYTE PTR [SI.SDEVATT]

        OR      BH,0C0H

        AND     BH,NOT 020H             ;Clears Carry

        MOV     WORD PTR [DEVPT],SI

        JMP     RETNV

DevName ENDP



        procedure   GetBP,NEAR

ASSUME  DS:DOSGROUP,ES:NOTHING



; Inputs:

;       AL = Logical unit number (A = 0)

; Function:

;       Find Drive Parameter Block

; Outputs:

;       ES:BP points to DPB

;       [THISDPB] = ES:BP

;       Carry set if unit number bad

; No other registers altered



        LES     BP,[DPBHEAD]    ; Just in case drive isn't valid

        AND     AL,3FH          ; Mask out dirty and device bits

        CMP     AL,BYTE PTR [NUMIO]

        CMC

        JC      GOTDPB          ; Get drive A

FNDDPB:

        CMP     AL,ES:[BP.dpb_drive]

        JZ      GOTDPB          ; Carry is clear if jump executed

        LES     BP,ES:[BP.dpb_next_dpb]

        JMP     SHORT FNDDPB

GOTDPB:

        MOV     WORD PTR [THISDPB],BP

        MOV     WORD PTR [THISDPB+2],ES

        RET

GetBP   ENDP



SUBTTL SETREAD, SETWRITE -- SET UP HEADER BLOCK

PAGE

        procedure   SETREAD,NEAR

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DS:BX = Transfer Address

;       CX = Record Count

;       DX = Starting Record

;       AH = Media Byte

;       AL = Unit Code

; Function:

;       Set up the device call header at DEVCALL

; Output:

;       ES:BX Points to DEVCALL

; No other registers effected



        PUSH    DI

        PUSH    CX

        PUSH    AX

        MOV     CL,DEVRD

SETCALLHEAD:

        MOV     AL,DRDWRHL

        PUSH    SS

        POP     ES

        MOV     DI,OFFSET DOSGROUP:DEVCALL

        STOSB                   ; length

        POP     AX

        STOSB                   ; Unit

        PUSH    AX

        MOV     AL,CL

        STOSB                   ; Command code

        XOR     AX,AX

        STOSW                   ; Status

        ADD     DI,8            ; Skip link fields

        POP     AX

        XCHG    AH,AL

        STOSB                   ; Media byte

        XCHG    AL,AH

        PUSH    AX

        MOV     AX,BX

        STOSW

        MOV     AX,DS

        STOSW                   ; Transfer addr

        POP     CX              ; Real AX

        POP     AX              ; Real CX

        STOSW                   ; Count

        XCHG    AX,DX           ; AX=Real DX, DX=real CX, CX=real AX

        STOSW                   ; Start

        XCHG    AX,CX

        XCHG    DX,CX

        POP     DI

        MOV     BX,OFFSET DOSGROUP:DEVCALL

        RET



        entry   SETWRITE

ASSUME  DS:NOTHING,ES:NOTHING



; Inputs:

;       DS:BX = Transfer Address

;       CX = Record Count

;       DX = Starting Record

;       AH = Media Byte

;       AL = Unit Code

; Function:

;       Set up the device call header at DEVCALL

; Output:

;       ES:BX Points to DEVCALL

; No other registers effected



        PUSH    DI

        PUSH    CX

        PUSH    AX

        MOV     CL,DEVWRT

        ADD     CL,[VERFLG]

        JMP     SHORT SETCALLHEAD

SETREAD ENDP



do_ext



CODE    ENDS

    END

                                                                                                    
   