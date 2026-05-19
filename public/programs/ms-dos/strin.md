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
description: "This file contains the assembly code for MS-DOS v2.0's string input handling routines, showcasing the evolution of text processing in early personal computing."

summary:
  - point: "Introduces a buffer-based system for console input"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Implements control character handling for text editing"
    link: "https://en.wikipedia.org/wiki/Control_character"
    link_label: "Control character"
  - point: "Demonstrates early use of templates for text manipulation"
    link: "https://en.wikipedia.org/wiki/Template_(programming)"
    link_label: "Template programming"
  - point: "Optimizes for limited memory and hardware constraints"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Reflects Unix-inspired design principles in MS-DOS v2.0"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"

enhancements:
  - id: "assume-buffer-initialization"
    line_start: 2
    line_end: 23
    title: "Buffer initialization: Preparing for console input"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The code begins by setting up the necessary assumptions for the data segment (DS) and extra segment (ES), ensuring they are properly initialized for handling console input. This section defines the inputs and outputs for the procedure, including a buffer pointed to by DS:DX and the goal of filling it with user input until a carriage return (CR) is encountered. In 1983, memory constraints were a major consideration, especially on the IBM PC, which typically had 16–64 KB of RAM. Tim Paterson's design reflects these limitations by using efficient assembly instructions to manage buffer operations and ensure consistency in the input length. This initialization step was critical for enabling reliable text input in MS-DOS applications, laying the groundwork for the rest of the string handling routines."
  - id: "editon-buffer-validation"
    line_start: 26
    line_end: 28
    title: "EDITON: Validating buffer contents"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The EDITON routine checks the buffer's contents to ensure that the carriage return (CR) is correctly placed, signaling that the input is valid for editing. This validation step was crucial in early computing, where errors in input handling could lead to crashes or corrupted data. By implementing this check, Paterson ensured that MS-DOS could handle user input robustly, even in the constrained environment of the IBM PC. The use of assembly language allowed for precise control over memory and processor operations, a necessity given the limited resources of the time."
  - id: "newline-buffer-construction"
    line_start: 29
    line_end: 41
    title: "NEWLIN: Constructing a new line in the buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Carriage_return"
    image_url: ""
    image_caption: ""
    content: "The NEWLIN routine begins the process of constructing a new line in the buffer, starting with the position in the raw buffer and setting up the insertion mode. It then calls a system routine to fetch the first character from the console input. This approach reflects the influence of Unix-like systems, where text processing was a core functionality. In MS-DOS v2.0, the addition of subdirectories and file handles necessitated more sophisticated text handling routines, and NEWLIN exemplifies this evolution. By carefully managing the buffer and insertion mode, Paterson ensured that MS-DOS could support more complex text editing operations, paving the way for applications like word processors and text editors."
  - id: "gotch-character-filtering"
    line_start: 42
    line_end: 56
    title: "GOTCH: Filtering control characters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Control_character"
    image_url: ""
    image_caption: ""
    content: "The GOTCH routine filters out specific control characters, such as linefeed (LF), delete (DEL), and escape (ESC), ensuring that only valid characters are processed. This filtering was essential for maintaining the integrity of user input, especially in an era when keyboards often generated unexpected control sequences. By handling these characters explicitly, Paterson's code minimized errors and improved the user experience. The routine also reflects the influence of Unix-like systems, where control characters played a significant role in text processing. GOTCH's careful handling of these characters contributed to MS-DOS's reliability and usability, making it a preferred choice for early PC users."
  - id: "savch-buffer-storage"
    line_start: 57
    line_end: 69
    title: "SAVCH: Storing characters in the buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The SAVCH routine stores characters in the buffer, incrementing the character count and printing control characters in a readable format. This routine highlights the importance of efficient memory management in early computing, where every byte mattered. By using assembly instructions like STOSB and INC, Paterson's code achieves high performance while adhering to the constraints of the IBM PC's hardware. SAVCH also demonstrates the influence of Unix-like systems, where text processing was a core functionality. This routine was a key component of MS-DOS's string handling capabilities, enabling applications to interact with user input reliably and efficiently."
  - id: "bufful-buffer-overflow"
    line_start: 73
    line_end: 76
    title: "BUFFUL: Handling buffer overflow"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_overflow"
    image_url: ""
    image_caption: ""
    content: "The BUFFUL routine addresses the issue of buffer overflow, a common problem in early computing. When the buffer is full, the routine emits a bell sound to alert the user and returns control to the input handling loop. This simple yet effective approach reflects the constraints of the IBM PC, where memory was limited and error handling needed to be efficient. By implementing this safeguard, Paterson ensured that MS-DOS could handle user input robustly, even in the face of unexpected conditions. BUFFUL's design highlights the importance of defensive programming in an era when software reliability was a critical concern."
  - id: "esc-function-key-handling"
    line_start: 78
    line_end: 79
    title: "ESC: Handling function key input"
    wikipedia_url: "https://en.wikipedia.org/wiki/Escape_character"
    image_url: ""
    image_caption: ""
    content: "The ESC routine processes input from function keys, transferring control to an OEM-specific handler. This design reflects the modularity of MS-DOS, which was built to support a wide range of hardware configurations. By delegating function key handling to OEM-specific routines, Paterson's code ensured compatibility with various keyboards and input devices. This approach was critical for MS-DOS's success, as it allowed the operating system to be licensed to multiple OEMs and adapted to their unique hardware requirements. ESC exemplifies the flexibility and adaptability that made MS-DOS a dominant force in early personal computing."
  - id: "endlin-finalizing-buffer"
    line_start: 81
    line_end: 86
    title: "ENDLIN: Finalizing the input buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Carriage_return"
    image_url: ""
    image_caption: ""
    content: "The ENDLIN routine finalizes the input buffer by adding a carriage return (CR) and echoing it to the console. It then updates the buffer length and prepares the data for further processing. This routine highlights the importance of user feedback in early computing, where visual confirmation of input was essential. By echoing the CR, Paterson's code improved the user experience and ensured that input was correctly captured. ENDLIN's design reflects the influence of Unix-like systems, where text processing was a core functionality. This routine was a key component of MS-DOS's string handling capabilities, enabling reliable and efficient text input."
  - id: "copynew-buffer-copying"
    line_start: 87
    line_end: 104
    title: "COPYNEW: Copying buffer contents"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The COPYNEW routine copies the contents of the input buffer to the user buffer, ensuring that the data is correctly transferred for further processing. This routine uses efficient assembly instructions like REP MOVSB to achieve high performance, reflecting the constraints of the IBM PC's hardware. By implementing this functionality, Paterson's code enabled applications to interact with user input reliably and efficiently. COPYNEW's design highlights the importance of memory management in early computing, where every byte mattered. This routine was a key component of MS-DOS's string handling capabilities, paving the way for more sophisticated text processing applications."
  - id: "phycrlf-output-crlf"
    line_start: 105
    line_end: 113
    title: "PHYCRLF: Outputting a CRLF sequence"
    wikipedia_url: "https://en.wikipedia.org/wiki/Newline"
    image_url: ""
    image_caption: ""
    content: "The PHYCRLF routine outputs a carriage return (CR) followed by a linefeed (LF), ensuring proper formatting of text on the console. This routine reflects the influence of Unix-like systems, where CRLF sequences were commonly used to indicate the end of a line. In MS-DOS v2.0, text formatting was a critical functionality, enabling applications to display information clearly and consistently. PHYCRLF's design highlights the importance of user feedback in early computing, where visual confirmation of input and output was essential. This routine contributed to MS-DOS's reliability and usability, making it a preferred choice for early PC users."

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