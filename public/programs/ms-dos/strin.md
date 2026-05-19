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
description: "This file implements MS-DOS 2.0's string input routines, showcasing the evolution of console input handling in early PC operating systems."

summary:
  - point: "Introduces buffer-based console input handling for MS-DOS 2.0"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Incorporates Unix-inspired design principles for text processing"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Optimizes for the constraints of 8086 assembly and limited memory"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"
  - point: "Demonstrates early techniques for user input validation and error handling"
    link: "https://en.wikipedia.org/wiki/Input_validation"
    link_label: "Input validation"
  - point: "Highlights Tim Paterson's influence on MS-DOS's foundational design"
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"

enhancements:
  - id: "editon-buffer-validation"
    line_start: 26
    line_end: 28
    title: "Buffer validation: Ensuring input integrity"
    wikipedia_url: "https://en.wikipedia.org/wiki/Input_validation"
    image_url: ""
    image_caption: ""
    content: "The `EDITON` section checks if a carriage return (CR) is correctly placed in the user input buffer, ensuring the integrity of the input before proceeding. This reflects the meticulous attention to error handling required in early operating systems, where user input could easily disrupt program flow. In 1983, MS-DOS 2.0 was adapting to the growing demands of personal computing, influenced by Unix-like systems that emphasized robust text processing. Tim Paterson and Microsoft's engineers were designing for the 8086 processor, which had limited memory and no hardware-level safeguards for input validation. This routine exemplifies the careful balance between functionality and efficiency that characterized MS-DOS development. The approach to input validation here would influence later operating systems, embedding the principle of \"trust but verify\" into console input handling."
  - id: "newline-buffer-construction"
    line_start: 29
    line_end: 41
    title: "Building a new line in the buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The `NEWLIN` routine constructs a new line in the input buffer, initializing key variables and invoking system calls to read characters from the console. This section demonstrates the low-level mechanics of text input in MS-DOS 2.0, where every byte of memory and processor cycle was precious. In the early 1980s, personal computers like the IBM PC were just beginning to standardize user interfaces, and MS-DOS had to provide reliable input handling for a wide range of hardware configurations. The use of assembly language allowed for precise control over memory and registers, enabling efficient buffer management. This routine's design reflects the Unix-inspired philosophy of modularity and simplicity, which influenced MS-DOS 2.0's rewrite. The techniques here laid the groundwork for more sophisticated text processing in later operating systems."
  - id: "gotch-character-filtering"
    line_start: 42
    line_end: 56
    title: "Filtering user input: Handling special characters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Control_character"
    image_url: ""
    image_caption: ""
    content: "The `GOTCH` routine filters user input, ignoring certain control characters and handling others like escape (`ESC`) and backspace (`BS`). This was critical in ensuring that user input conformed to expected formats and behaviors. In the early days of MS-DOS, users interacted with the system primarily through the keyboard, and handling special characters was a common challenge. Tim Paterson's original design for 86-DOS, and later MS-DOS, drew inspiration from CP/M and Unix, both of which had established conventions for text input. The filtering mechanism here reflects the need to balance user flexibility with system stability. By implementing these checks at the assembly level, MS-DOS could efficiently manage input without consuming excessive resources. This approach influenced later systems, where handling special characters became a standard feature of text processing libraries."
  - id: "savch-buffer-storage"
    line_start: 57
    line_end: 69
    title: "Saving characters to the buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The `SAVCH` routine stores characters in the buffer, ensuring they are correctly echoed to the console and managing insert mode. This section highlights the low-level mechanics of text input in MS-DOS 2.0, where every operation had to be carefully optimized for the 8086 processor's constraints. In 1983, personal computers were becoming more widespread, but hardware limitations still dictated software design. Tim Paterson and Microsoft's engineers were tasked with creating an operating system that could handle user input efficiently while maintaining compatibility with a variety of hardware. The use of assembly language allowed for precise control over memory and registers, enabling efficient buffer management. The techniques demonstrated here would influence later operating systems, embedding the principle of \"trust but verify\" into console input handling."
  - id: "bufful-buffer-overflow"
    line_start: 73
    line_end: 76
    title: "Buffer overflow prevention: A simple safeguard"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_overflow"
    image_url: ""
    image_caption: ""
    content: "The `BUFFUL` routine checks for buffer overflow, ringing a bell (`AL=7`) if the buffer is full. This simple yet effective safeguard reflects the challenges of managing memory in early operating systems. In the early 1980s, personal computers had limited RAM, and programs like MS-DOS had to operate within tight constraints. Buffer overflow was a common issue that could lead to unpredictable behavior or system crashes. By implementing this check, MS-DOS 2.0 ensured that user input did not exceed the allocated buffer size, preserving system stability. This routine is an early example of defensive programming, a practice that would become increasingly important as software complexity grew. The bell sound served as a user-friendly alert, reminding users of the system's limitations and encouraging careful input."
  - id: "endlin-finalizing-input"
    line_start: 81
    line_end: 86
    title: "Finalizing user input: Completing the line"
    wikipedia_url: "https://en.wikipedia.org/wiki/Carriage_return"
    image_url: ""
    image_caption: ""
    content: "The `ENDLIN` routine finalizes user input by storing a carriage return (`CR`) in the buffer and echoing it to the console. This marks the end of the input line, allowing the system to process the user's command or data. In the early days of MS-DOS, user interaction was primarily text-based, and the carriage return played a crucial role in signaling the end of input. Tim Paterson's original design for 86-DOS, and later MS-DOS, drew inspiration from CP/M and Unix, both of which had established conventions for text input. The handling of `CR` here reflects the need for clear and consistent communication between the user and the system. By implementing this functionality at the assembly level, MS-DOS could efficiently manage input without consuming excessive resources. This approach influenced later systems, where handling special characters became a standard feature of text processing libraries."
  - id: "copynew-buffer-copying"
    line_start: 87
    line_end: 104
    title: "Copying input buffer: Preparing user data"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `COPYNEW` routine copies the finalized input buffer to the user buffer, ensuring the data is ready for further processing. This operation highlights the importance of efficient memory management in early operating systems like MS-DOS 2.0. In 1983, personal computers were becoming more widespread, but hardware limitations still dictated software design. Tim Paterson and Microsoft's engineers were tasked with creating an operating system that could handle user input efficiently while maintaining compatibility with a variety of hardware. The use of assembly language allowed for precise control over memory and registers, enabling efficient buffer management. The techniques demonstrated here would influence later operating systems, embedding the principle of \"trust but verify\" into console input handling."
  - id: "phycrlf-linefeed-handling"
    line_start: 105
    line_end: 113
    title: "Linefeed handling: Separating input lines"
    wikipedia_url: "https://en.wikipedia.org/wiki/Newline"
    image_url: ""
    image_caption: ""
    content: "The `PHYCRLF` routine outputs a carriage return (`CR`) followed by a linefeed (`LF`), ensuring proper separation of input lines. This reflects the conventions established by earlier operating systems like CP/M and Unix, which used `CRLF` as a standard line-ending sequence. In the early 1980s, personal computers were just beginning to standardize user interfaces, and MS-DOS had to provide reliable input handling for a wide range of hardware configurations. The use of assembly language allowed for precise control over memory and registers, enabling efficient buffer management. This routine's design reflects the Unix-inspired philosophy of modularity and simplicity, which influenced MS-DOS 2.0's rewrite. The techniques here laid the groundwork for more sophisticated text processing in later operating systems."

---

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