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
description: "This file implements console input handling routines for MS-DOS 2.0, showcasing low-level assembly techniques used in early operating systems."

summary:
  - point: "Introduces buffer management for console input"
    link: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    link_label: "Buffer"
  - point: "Demonstrates handling of control characters like CR, LF, and ESC"
    link: "https://en.wikipedia.org/wiki/Control_character"
    link_label: "Control Character"
  - point: "Highlights MS-DOS's adaptation of Unix-inspired features"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Uses clever tricks for template-based editing"
    link: "https://en.wikipedia.org/wiki/Template_(programming)"
    link_label: "Template"
  - point: "Exemplifies the constraints of 1980s hardware and software design"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "editon-buffer-reset"
    line_start: 26
    line_end: 28
    title: "Why Resetting Buffers Was Crucial in 1983"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The EDITON routine resets the buffer length and prepares the system to accept new input. This was critical in MS-DOS 2.0, where memory constraints meant every byte had to be carefully managed. At the time, the IBM PC shipped with as little as 16 KB of RAM, so efficient buffer handling was essential. Tim Paterson, the original author of MS-DOS, designed these routines to ensure stability and prevent buffer overflows, which could crash the system or corrupt data. This approach influenced later operating systems, where buffer management became a cornerstone of input handling, appearing in Unix shells and even modern text editors."
  - id: "newline-buffer-build"
    line_start: 29
    line_end: 41
    title: "Building a New Line, One Byte at a Time"
    wikipedia_url: "https://en.wikipedia.org/wiki/Control_character"
    image_url: ""
    image_caption: ""
    content: "The NEWLIN routine constructs a new line in the input buffer, filtering out unwanted characters like linefeeds (LF) and handling control characters. This was a direct response to the limitations of early keyboards and console interfaces, which often sent extraneous or unexpected characters. By carefully managing these inputs, MS-DOS ensured that user commands were interpreted correctly. This technique, rooted in the constraints of 1980s hardware, laid the groundwork for robust input parsing in later systems, influencing command-line interfaces in Unix, Linux, and beyond."
  - id: "gotch-character-filtering"
    line_start: 42
    line_end: 56
    title: "Filtering Characters: The Early Days of Input Validation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Input_validation"
    image_url: ""
    image_caption: ""
    content: "The GOTCH routine filters out specific characters, such as control sequences and invalid inputs, ensuring that only meaningful data is processed. This was a vital feature in MS-DOS 2.0, where user input was often unpredictable due to the variety of keyboards and terminal setups. By implementing these checks, MS-DOS reduced errors and improved reliability. This approach to input validation became standard practice in software development, influencing everything from web forms to database systems."
  - id: "savch-buffer-storage"
    line_start: 57
    line_end: 69
    title: "Saving Characters: A Buffering Breakthrough"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The SAVCH routine stores characters in the buffer while ensuring there is enough space. If the buffer is full, it signals an error by invoking a bell sound. This was a clever workaround for the lack of dynamic memory allocation in early PCs. By predefining buffer sizes and managing them explicitly, MS-DOS avoided crashes and ensured predictable behavior. This technique influenced later systems, where dynamic memory allocation and error handling became more sophisticated but still relied on the principles established here."
  - id: "copynew-template-copy"
    line_start: 87
    line_end: 95
    title: "Copying Templates: A Step Toward Modern Text Editing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Template_(programming)"
    image_url: ""
    image_caption: ""
    content: "COPYNEW copies the final line from the internal buffer to the user buffer, completing the input process. This routine also swaps the segment registers to facilitate the copy operation, a common technique in 8086 assembly programming. The use of templates for editing and copying was inspired by Unix text editors, which influenced MS-DOS 2.0's design. This approach paved the way for more advanced text editing features in later software, including word processors and integrated development environments (IDEs)."
  - id: "findold-template-scan"
    line_start: 232
    line_end: 243
    title: "Scanning Templates: Finding Matches in Assembly"
    wikipedia_url: "https://en.wikipedia.org/wiki/String_searching_algorithm"
    image_url: ""
    image_caption: ""
    content: "The FINDOLD routine scans the template for a match to the user's input, using REPNE SCASB to search efficiently. This was a low-level implementation of string searching, tailored to the constraints of assembly language and early hardware. By optimizing this process, MS-DOS ensured quick responses to user input, even on slow CPUs like the Intel 8088. This technique influenced later developments in string searching algorithms, which became a key area of study in computer science."
  - id: "notfnd-error-handling"
    line_start: 265
    line_end: 292
    title: "Handling Errors: When Matches Fail"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "NOTFND handles cases where the user's input does not match any part of the template, discarding the return address and jumping to the GETCH routine. This was an early example of error handling in assembly language, where the lack of high-level constructs made such tasks challenging. By carefully managing the stack and program flow, MS-DOS ensured stability and reliability. This approach influenced later error handling techniques, including structured exception handling in modern programming languages."

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
