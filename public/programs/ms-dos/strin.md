---
title: "STRIN.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/STRIN.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/STRIN.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "strin"
order: 46
description: "This file implements MS-DOS 2.0's console input handling, showcasing techniques for managing user input buffers and editing operations in assembly language."

summary:
  - point: "Introduces buffer management for console input"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Demonstrates low-level assembly techniques for text editing"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"
  - point: "Reflects Unix-inspired design in MS-DOS 2.0"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"

enhancements:
  - id: "editon-buffer-length-check"
    line_start: 26
    line_end: 28
    title: "The Check That Prevented Buffer Overflows"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_overflow"
    image_url: ""
    image_caption: ""
    content: "The `EDITON` section checks whether the buffer length is consistent with its contents, ensuring that the input buffer does not overflow. This is critical in low-level programming, where memory management is manual and errors can lead to system crashes or vulnerabilities. At the time MS-DOS 2.0 was written, buffer overflow attacks were not widely recognized, but robust input handling was essential for stability. Tim Paterson's approach here reflects the careful attention to detail required for operating system development in the early 1980s, especially on hardware with limited resources like the IBM PC. This technique influenced later systems, as input validation became a standard practice in secure software design."
  - id: "newline-buffer-build"
    line_start: 29
    line_end: 39
    title: "How MS-DOS Built a New Line"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_PC"
    image_url: ""
    image_caption: ""
    content: "The `NEWLIN` section initializes a new line in the input buffer, setting up variables to track cursor position and enabling insert mode. This routine reflects the constraints of early PC hardware, where memory and processing power were limited. By directly manipulating the buffer and using assembly-level instructions, MS-DOS could efficiently handle user input without relying on higher-level abstractions. This low-level approach was common in early operating systems, as it allowed developers to optimize performance and minimize resource usage. The techniques demonstrated here laid the groundwork for text editing features in later DOS versions and influenced the design of command-line interfaces in subsequent operating systems."
  - id: "gotch-character-filtering"
    line_start: 40
    line_end: 45
    title: "Filtering Out Unwanted Characters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Control_character"
    image_url: ""
    image_caption: ""
    content: "The `GOTCH` section filters out unwanted control characters from user input, ensuring that only valid characters are processed. This routine demonstrates the challenges of handling raw console input in assembly language, where every character must be explicitly checked and managed. By excluding characters like linefeed (`LF`) and escape (`ESC`), MS-DOS maintains a clean and predictable input buffer. This approach reflects the influence of Unix, which also emphasized control over input and output streams. The filtering logic here influenced later command-line tools and text editors, which adopted similar techniques to handle user input robustly."
  - id: "savch-buffer-storage"
    line_start: 46
    line_end: 69
    title: "Saving Characters to the Buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_PC_compatible"
    image_url: ""
    image_caption: ""
    content: "The `SAVCH` section stores characters in the input buffer, incrementing counters to track the buffer's state. This routine highlights the manual memory management required in early operating systems, where developers had to carefully allocate and update memory locations. By using assembly instructions like `STOSB` and `INC`, MS-DOS efficiently manages the buffer while minimizing overhead. This technique was essential for achieving high performance on the IBM PC's 4.77 MHz processor. The buffer management strategy demonstrated here influenced later systems, as efficient input handling became a key requirement for command-line interfaces and text editors."
  - id: "bufful-buffer-full-handling"
    line_start: 73
    line_end: 76
    title: "What Happens When the Buffer Fills"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bell_character"
    image_url: ""
    image_caption: ""
    content: "The `BUFFUL` section handles the case where the input buffer becomes full, signaling the user with a bell character (`AL=7`). This routine reflects the constraints of early PC hardware, where memory was limited and buffers had fixed sizes. By providing immediate feedback to the user, MS-DOS ensures that input errors are quickly identified and corrected. The use of the bell character as an alert mechanism was common in early computing, as it provided a simple and effective way to signal errors. This approach influenced later systems, where user feedback became an integral part of error handling in command-line interfaces."
  - id: "esc-function-key-transfer"
    line_start: 78
    line_end: 79
    title: "The Escape Key's Special Role"
    wikipedia_url: "https://en.wikipedia.org/wiki/Escape_character"
    image_url: ""
    image_caption: ""
    content: "The `ESC` section transfers control to an OEM-specific function key handler when the escape character is detected. This reflects the modular design of MS-DOS, which allowed OEMs to customize certain aspects of the operating system for their hardware. By providing hooks for OEM-specific functionality, MS-DOS could adapt to a wide range of devices while maintaining a consistent core. This modular approach influenced later operating systems, as extensibility became a key feature for supporting diverse hardware ecosystems."
  - id: "endlin-buffer-finalization"
    line_start: 81
    line_end: 86
    title: "Finalizing the Input Buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Carriage_return"
    image_url: ""
    image_caption: ""
    content: "The `ENDLIN` section finalizes the input buffer by adding a carriage return (`CR`) and updating the buffer's length. This routine ensures that the input is properly terminated, allowing subsequent processing to handle the buffer as a complete line. The use of `CR` as a line terminator reflects the influence of early teletype machines, which used similar conventions for text formatting. By adhering to these conventions, MS-DOS maintains compatibility with existing software and hardware. The techniques demonstrated here influenced later systems, as proper buffer management became a standard practice in text processing and command-line interfaces."
  - id: "copynew-buffer-copying"
    line_start: 87
    line_end: 102
    title: "Copying the Buffer to User Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `COPYNEW` section copies the finalized input buffer to user memory, ensuring that the user's input is preserved for further processing. This routine demonstrates the manual memory management required in early operating systems, where developers had to explicitly move data between memory locations. By using assembly instructions like `REP MOVSB`, MS-DOS efficiently copies the buffer while minimizing overhead. This approach reflects the constraints of early PC hardware, where memory and processing power were limited. The techniques demonstrated here influenced later systems, as efficient memory management became a key requirement for operating systems and applications."

---

```asm
        procedure   $STD_CON_STRING_INPUT,NEAR   ;System call 10
ASSUME  DS:NOTHING,ES:NOTHING

; Inputs:
;       DS:DX Point to an input buffer
; Function:
;       Fill buffer from console input until CR
; Returns:
;       None

        MOV     AX,SS
        MOV     ES,AX
        MOV     SI,DX
        XOR     CH,CH
        LODSW
        OR      AL,AL
        retz                    ;Buffer is 0 length!!?
        MOV     BL,AH           ;Init template counter
        MOV     BH,CH           ;Init template counter
        CMP     AL,BL
        JBE     NOEDIT          ;If length of buffer inconsistent with contents
        CMP     BYTE PTR [BX+SI],c_CR
        JZ      EDITON          ;If CR correctly placed EDIT is OK
NOEDIT:
        MOV     BL,CH           ;Reset buffer
EDITON:
        MOV     DL,AL
        DEC     DX              ;DL is # of bytes we can put in the buffer
NEWLIN:
        MOV     AL,[CARPOS]
        MOV     [STARTPOS],AL   ;Remember position in raw buffer
        PUSH    SI
        MOV     DI,OFFSET DOSGROUP:INBUF        ;Build the new line here
        MOV     [INSMODE],CH    ;Insert mode off
        MOV     BH,CH           ;No chars from template yet
        MOV     DH,CH           ;No chars to new line yet
        invoke  $STD_CON_INPUT_NO_ECHO          ;Get first char
        CMP     AL,c_LF         ;Linefeed
        JNZ     GOTCH           ;Filter out LF so < works
        entry   GETCH
        invoke  $STD_CON_INPUT_NO_ECHO
GOTCH:
        CMP     AL,"F"-"@"      ;Ignore ^F
        JZ      GETCH
        CMP     AL,[ESCCHAR]
        JZ      ESC
        CMP     AL,c_DEL
        JZ      BACKSPJ
        CMP     AL,c_BS
        JZ      BACKSPJ
        CMP     AL,c_CR
        JZ      ENDLIN
        CMP     AL,c_LF
        JZ      PHYCRLF
        CMP     AL,CANCEL
        JZ      KILNEW
SAVCH:
        CMP     DH,DL
        JAE     BUFFUL          ;No room
        STOSB
        INC     DH              ;Got a char
        invoke  BUFOUT          ;Print control chars nicely
        CMP     BYTE PTR [INSMODE],0
        JNZ     GETCH           ;In insert mode, get more chars
        CMP     BH,BL
        JAE     GETCH           ;We are out of chars in template
        INC     SI              ;Skip to next char in template
        INC     BH
        JMP     SHORT GETCH

BACKSPJ: JMP    SHORT BACKSP

BUFFUL:
        MOV     AL,7            ;Bell
        invoke  OUT
        JMP     SHORT GETCH

ESC:
        transfer    OEMFunctionKey

ENDLIN:
        STOSB                   ;Put the CR in the buffer
        invoke  OUT             ;Echo it
        POP     DI              ;Get start of buffer
        MOV     [DI-1],DH       ;Tell user how many bytes
        INC     DH              ;DH is length including CR
COPYNEW:
        MOV     BP,ES           ;XCHG ES,DS
        MOV     BX,DS
        MOV     ES,BX
        MOV     DS,BP
        MOV     SI,OFFSET DOSGROUP:INBUF
        MOV     CL,DH
        REP     MOVSB           ;Copy final line to user buffer
        return                  ;All done

;Output a CRLF
        entry   CRLF
        MOV     AL,c_CR
        invoke  OUT
        MOV     AL,c_LF
        JMP     OUT

;Output a CRLF which is not terminate buffer
PHYCRLF:
        invoke  CRLF
        JMP     GETCH

;Zap the line without zapping the template
        entry   KILNEW
        MOV     AL,"\"
        invoke  OUT             ;Print the CANCEL indicator
        POP     SI              ;Remember start of edit buffer
PUTNEW:
        invoke  CRLF            ;Go to next line on screen
        MOV     AL,[STARTPOS]
        invoke  TAB             ;Tab over
        JMP     NEWLIN          ;Start over again

;Back up one char
        entry   BACKSP
        OR      DH,DH
        JZ      OLDBAK          ;No chars in line, do nothing to line
        CALL    BACKUP          ;Do the backup
        MOV     AL,ES:[DI]      ;Get the deleted char
        CMP     AL," "
        JAE     OLDBAK          ;Was a normal char
        CMP     AL,c_HT
        JZ      BAKTAB          ;Was a tab, fix up users display
        CALL    BACKMES         ;Was a control char, zap the '^'
OLDBAK:
        CMP     BYTE PTR [INSMODE],0
        JNZ     GETCH1          ;In insert mode, get more chars
        OR      BH,BH
        JZ      GETCH1          ;Not advanced in template, stay where we are
        DEC     BH              ;Go back in template
        DEC     SI
GETCH1:
        JMP     GETCH

BAKTAB:
        PUSH    DI
        DEC     DI              ;Back up one char
        STD                     ;Go backward
        MOV     CL,DH           ;Number of chars currently in line
        MOV     AL," "
        PUSH    BX
        MOV     BL,7            ;Max
        JCXZ    FIGTAB          ;At start, do nothing
FNDPOS:
        SCASB                   ;Look back
        JNA     CHKCNT
        CMP     BYTE PTR ES:[DI+1],9
        JZ      HAVTAB          ;Found a tab
        DEC     BL              ;Back one char if non tab control char
CHKCNT:
        LOOP    FNDPOS
FIGTAB:
        SUB     BL,[STARTPOS]
HAVTAB:
        SUB     BL,DH
        ADD     CL,BL
        AND     CL,7            ;CX has correct number to erase
        CLD                     ;Back to normal
        POP     BX
        POP     DI
        JZ      OLDBAK          ;Nothing to erase
TABBAK:
        invoke  BACKMES
        LOOP    TABBAK          ;Erase correct number of chars
        JMP     SHORT OLDBAK

BACKUP:
        DEC     DH              ;Back up in line
        DEC     DI
BACKMES:
        MOV     AL,c_BS         ;Backspace
        invoke  OUT
        MOV     AL," "          ;Erase
        invoke  OUT
        MOV     AL,c_BS         ;Backspace
        JMP     OUT             ;Done

;User really wants an ESC character in his line
        entry   TwoEsc
        MOV     AL,[ESCCHAR]
        JMP     SAVCH

;Copy the rest of the template
        entry   COPYLIN
        MOV     CL,BL           ;Total size of template
        SUB     CL,BH           ;Minus position in template, is number to move
        JMP     SHORT COPYEACH

        entry   CopyStr
        invoke  FINDOLD         ;Find the char
        JMP     SHORT COPYEACH  ;Copy up to it

;Copy one char from template to line
        entry   COPYONE
        MOV     CL,1
;Copy CX chars from template to line
COPYEACH:
        MOV     BYTE PTR [INSMODE],0    ;All copies turn off insert mode
        CMP     DH,DL
        JZ      GETCH2                  ;At end of line, can't do anything
        CMP     BH,BL
        JZ      GETCH2                  ;At end of template, can't do anything
        LODSB
        STOSB
        invoke  BUFOUT
        INC     BH                      ;Ahead in template
        INC     DH                      ;Ahead in line
        LOOP    COPYEACH
GETCH2:
        JMP     GETCH

;Skip one char in template
        entry   SKIPONE
        CMP     BH,BL
        JZ      GETCH2                  ;At end of template
        INC     BH                      ;Ahead in template
        INC     SI
        JMP     GETCH

        entry   SKIPSTR
        invoke  FINDOLD                 ;Find out how far to go
        ADD     SI,CX                   ;Go there
        ADD     BH,CL
        JMP     GETCH

;Get the next user char, and look ahead in template for a match
;CX indicates how many chars to skip to get there on output
;NOTE: WARNING: If the operation cannot be done, the return
;       address is popped off and a jump to GETCH is taken.
;       Make sure nothing extra on stack when this routine
;       is called!!! (no PUSHes before calling it).
FINDOLD:
        invoke  $STD_CON_INPUT_NO_ECHO
        CMP     AL,[ESCCHAR]            ; did he type a function key?
        JNZ     FindSetup               ; no, set up for scan
        invoke  $STD_CON_INPUT_NO_ECHO  ; eat next char
        JMP     NotFnd                  ; go try again
FindSetup:
        MOV     CL,BL
        SUB     CL,BH           ;CX is number of chars to end of template
        JZ      NOTFND          ;At end of template
        DEC     CX              ;Cannot point past end, limit search
        JZ      NOTFND          ;If only one char in template, forget it
        PUSH    ES
        PUSH    DS
        POP     ES
        PUSH    DI
        MOV     DI,SI           ;Template to ES:DI
        INC     DI
        REPNE   SCASB           ;Look
        POP     DI
        POP     ES
        JNZ     NOTFND          ;Didn't find the char
        NOT     CL              ;Turn how far to go into how far we went
        ADD     CL,BL           ;Add size of template
        SUB     CL,BH           ;Subtract current pos, result distance to skip
        return

NOTFND:
        POP     BP              ;Chuck return address
        JMP     GETCH

        entry   REEDIT
        MOV     AL,"@"          ;Output re-edit character
        invoke  OUT
        POP     DI
        PUSH    DI
        PUSH    ES
        PUSH    DS
        invoke  COPYNEW         ;Copy current line into template
        POP     DS
        POP     ES
        POP     SI
        MOV     BL,DH           ;Size of line is new size template
        JMP     PUTNEW          ;Start over again

        entry   EXITINS
        entry   ENTERINS
        NOT     BYTE PTR [INSMODE]
        JMP     GETCH

;Put a real live ^Z in the buffer (embedded)
        entry   CTRLZ
        MOV     AL,"Z"-"@"
        JMP     SAVCH
$STD_CON_STRING_INPUT   ENDP
```