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
description: "This file contains the assembly routines for handling console string input in MS-DOS 2.0, showcasing early techniques for user input processing and buffer management."

summary:
  - point: "Introduces buffer-based console input handling routines"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Demonstrates early text editing mechanisms in assembly"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"
  - point: "Highlights influence of Unix-like design principles in MS-DOS 2.0"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Showcases efficient handling of control characters and user input validation"
    link: "https://en.wikipedia.org/wiki/Control_character"
    link_label: "Control Characters"
  - point: "Reflects Tim Paterson's foundational work on MS-DOS input routines"
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"

enhancements:
  - id: "editon-buffer-validation"
    line_start: 26
    line_end: 28
    title: "Buffer Validation and Edit Mode Activation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "This section verifies the integrity of the input buffer and activates edit mode if conditions are met. The programmer checks whether the buffer length matches its contents and whether a carriage return (CR) is correctly placed. This ensures that user input adheres to expected constraints before further processing. In the early 1980s, memory was a scarce resource, and buffer management was critical for performance and stability. Tim Paterson, influenced by his work on 86-DOS, implemented this validation to prevent errors in console input handling. The approach reflects the meticulous attention to detail required in low-level programming environments. This technique influenced later systems where buffer validation became a standard practice, especially in embedded systems and operating systems reliant on efficient memory management."
  - id: "newline-buffer-construction"
    line_start: 29
    line_end: 41
    title: "Building a New Line in the Buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Line_feed"
    image_url: ""
    image_caption: ""
    content: "This section initializes the construction of a new line in the input buffer. It sets up variables to track the cursor position, toggles insert mode, and begins reading characters from the console. The routine filters out unwanted characters like line feeds (LF) and prepares the buffer for further processing. In 1983, when MS-DOS 2.0 was released, text-based interfaces were the norm, and handling user input efficiently was paramount. The design borrows concepts from Unix, such as the separation of input modes and the use of control characters for navigation. This routine laid the groundwork for text editing capabilities in MS-DOS, influencing later text editors and command-line interfaces that relied on similar mechanisms for user input handling."
  - id: "gotch-character-filtering"
    line_start: 42
    line_end: 56
    title: "Filtering and Handling Special Characters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Control_character"
    image_url: ""
    image_caption: ""
    content: "The GOTCH routine filters out control characters and special inputs, redirecting the flow to appropriate handlers based on the character received. This ensures that only valid input is processed and provides functionality for handling escape sequences, backspaces, and carriage returns. In the early days of personal computing, user input was often unpredictable, and robust handling of special characters was essential for creating reliable software. Tim Paterson's implementation reflects the influence of Unix-like systems, which used control characters extensively for terminal operations. This approach became a cornerstone of input handling in MS-DOS and inspired similar mechanisms in later operating systems and programming environments, including the development of text editors and shell interfaces."
  - id: "savch-buffer-storage"
    line_start: 57
    line_end: 69
    title: "Storing Characters in the Buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The SAVCH routine stores characters in the buffer and updates counters to track the number of characters stored. It also handles insert mode, allowing characters to be added at specific positions. This routine exemplifies the low-level memory manipulation required in assembly programming. In the constrained environment of early PCs, efficient buffer management was crucial for performance. Tim Paterson's design ensures that the buffer is used optimally, with mechanisms to handle overflow and insertion. This technique influenced later systems where dynamic buffer management became standard, particularly in text processing applications and command-line tools."
  - id: "bufful-buffer-overflow"
    line_start: 73
    line_end: 76
    title: "Handling Buffer Overflow"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_overflow"
    image_url: ""
    image_caption: ""
    content: "The BUFFUL routine handles cases where the buffer is full, signaling an overflow condition with a bell sound and returning control to the input handler. Buffer overflow was a common challenge in early computing, often leading to crashes or unpredictable behavior. Tim Paterson's implementation prevents such issues by gracefully handling overflow and ensuring the system remains stable. This approach influenced the development of secure programming practices, where buffer overflow checks became integral to software design. Modern systems continue to use similar techniques to prevent vulnerabilities and ensure reliability."
  - id: "esc-function-key-handling"
    line_start: 78
    line_end: 79
    title: "Function Key Handling with ESC"
    wikipedia_url: "https://en.wikipedia.org/wiki/Escape_character"
    image_url: ""
    image_caption: ""
    content: "The ESC routine processes function key inputs, transferring control to an OEM-specific handler. This design allows for extensibility, enabling hardware manufacturers to define custom behaviors for function keys. In the early 1980s, PCs were highly customizable, and supporting OEM-specific features was a key selling point. Tim Paterson's implementation reflects the flexibility required to accommodate diverse hardware configurations. This approach influenced later operating systems, where extensible input handling became a standard feature, allowing developers to tailor software to specific hardware environments."
  - id: "endlin-finalizing-input"
    line_start: 81
    line_end: 86
    title: "Finalizing Input and Buffer Length"
    wikipedia_url: "https://en.wikipedia.org/wiki/Carriage_return"
    image_url: ""
    image_caption: ""
    content: "The ENDLIN routine finalizes the input process by storing a carriage return in the buffer, echoing it to the console, and updating the buffer length. This marks the end of user input and prepares the buffer for further processing. In the context of MS-DOS, this routine ensures that input is properly terminated and ready for use by other system components. Tim Paterson's design reflects the influence of Unix-like systems, where input termination was a critical part of text processing. This technique influenced later command-line interfaces and text editors, where proper input handling became a standard feature."
  - id: "copynew-buffer-copying"
    line_start: 87
    line_end: 104
    title: "Copying Final Line to User Buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_copy"
    image_url: ""
    image_caption: ""
    content: "The COPYNEW routine copies the finalized input line from the internal buffer to the user buffer, ensuring that the input is accessible to the calling program. This involves swapping segment registers and using the REP MOVSB instruction for efficient memory copying. In the constrained environment of early PCs, efficient memory operations were critical for performance. Tim Paterson's implementation reflects the low-level optimization required in assembly programming. This technique influenced later systems, where efficient memory copying became a standard practice in operating system design and application development."
  - id: "phycrlf-non-buffered-crlf"
    line_start: 105
    line_end: 113
    title: "Outputting Non-Buffered CRLF"
    wikipedia_url: "https://en.wikipedia.org/wiki/Newline"
    image_url: ""
    image_caption: ""
    content: "The PHYCRLF routine outputs a carriage return and line feed without terminating the buffer, allowing for non-buffered line breaks. This is useful for formatting output without affecting the input buffer. In the early days of text-based interfaces, formatting was a key aspect of user experience. Tim Paterson's design reflects the need for flexibility in output handling, enabling developers to create more user-friendly interfaces. This technique influenced later systems, where non-buffered output became a standard feature in text processing and command-line tools."
  - id: "putnew-restarting-input"
    line_start: 114
    line_end: 130
    title: "Restarting Input After CRLF"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The PUTNEW routine restarts the input process after outputting a carriage return and line feed. It sets the cursor position and begins building a new line in the buffer. This design reflects the iterative nature of command-line input, where users often enter multiple lines of text in succession. Tim Paterson's implementation ensures that the system can handle continuous input efficiently, laying the groundwork for interactive command-line interfaces. This technique influenced later systems, where iterative input handling became a standard feature in text editors and shell environments."

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