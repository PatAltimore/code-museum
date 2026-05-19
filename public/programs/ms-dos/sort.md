---
title: "SORT.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/SORT.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/SORT.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "sort"
order: 19
description: "The MS-DOS SORT utility: a glimpse into early text processing in the PC era."

summary:
  - point: "Introduced column-based sorting with command-line parsing"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Optimized memory allocation for sorting within 64K constraints"
    link: "https://en.wikipedia.org/wiki/Conventional_memory"
    link_label: "Conventional Memory"
  - point: "Implemented reverse sorting using a clever patching mechanism"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"
  - point: "Handled CR-LF line terminations, a common text format issue"
    link: "https://en.wikipedia.org/wiki/Newline"
    link_label: "Newline"
  - point: "Converted text into linked lists for efficient sorting operations"
    link: "https://en.wikipedia.org/wiki/Linked_list"
    link_label: "Linked List"

enhancements:
  - id: "system-call-macro"
    line_start: 55
    line_end: 61
    title: "System call abstraction in assembly"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS_API"
    image_url: ""
    image_caption: ""
    content: "This macro encapsulates the process of making system calls in MS-DOS. By moving the desired function number into the AH register and invoking interrupt 21h, the programmer can access various operating system services. In the early 1980s, this abstraction was crucial for simplifying interaction with the MS-DOS API, which was designed to run on the Intel 8086 microprocessor. Tim Paterson, the original author of MS-DOS, borrowed heavily from CP/M's system call conventions, adapting them to the 16-bit architecture. This macro reflects the programmer's effort to streamline repetitive tasks in assembly, a language notorious for its verbosity and complexity. The approach survived into later DOS versions and influenced similar abstractions in other operating systems, demonstrating the enduring utility of simplifying low-level operations."
  - id: "reverse-sort-patch"
    line_start: 221
    line_end: 223
    title: "Reverse sorting via code patching"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "This clever trick modifies the behavior of the sorting routine by patching a single instruction. The code changes a 'JAE' (Jump if Above or Equal) to a 'JB' (Jump if Below), effectively reversing the comparison logic for sorting. This approach highlights the flexibility of assembly language, where individual instructions can be manipulated at runtime. In 1983, such techniques were common, as developers sought to minimize code size and maximize performance. Chris Peters, who worked on this utility, likely chose this method for its simplicity and efficiency. While modern programming languages discourage self-modifying code, this example remains a fascinating glimpse into the resourceful mindset of early PC software developers."
  - id: "memory-allocation-loop"
    line_start: 297
    line_end: 305
    title: "Memory allocation under tight constraints"
    wikipedia_url: "https://en.wikipedia.org/wiki/Conventional_memory"
    image_url: ""
    image_caption: ""
    content: "This section attempts to allocate memory for sorting operations, constrained by the 64K limit imposed by the Intel 8086 architecture's segmented memory model. The code repeatedly calls the ALLOC system function, reducing the requested size until successful. Memory management was a critical challenge in the early PC era, as MS-DOS operated in real mode with no virtual memory. Programmers had to carefully manage every byte, often resorting to trial-and-error allocation loops like this one. The 64K limit shaped software design for years, forcing developers to write efficient, compact code. This allocation strategy reflects the ingenuity required to work within these constraints, and the lessons learned influenced later memory management techniques in protected mode and beyond."
  - id: "linked-list-conversion"
    line_start: 443
    line_end: 485
    title: "Transforming text into a linked list"
    wikipedia_url: "https://en.wikipedia.org/wiki/Linked_list"
    image_url: ""
    image_caption: ""
    content: "This section converts the input text buffer into a linked list by replacing CR-LF pairs with the length of the following line. Each line becomes a node in the list, with its length stored as metadata. Linked lists were a popular choice for dynamic data structures in the early 1980s, as they allowed efficient insertion, deletion, and traversal without requiring contiguous memory. The decision to use this structure reflects the influence of Unix, which inspired many features in MS-DOS 2.0. Chris Peters likely drew on his experience with Unix-like systems when designing this utility. The linked list approach enabled the SORT program to handle variable-length records efficiently, a necessity given the limited memory and processing power of the IBM PC."
  - id: "outer-inner-sort-loops"
    line_start: 511
    line_end: 635
    title: "Sorting with nested loops and comparisons"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sorting_algorithm"
    image_url: ""
    image_caption: ""
    content: "The heart of the SORT utility lies in these nested loops, which implement the sorting algorithm. The outer loop iterates over unsorted lines, while the inner loop finds the best insertion point for each line. Comparisons are adjusted based on the specified column and sorting order, with support for reverse sorting achieved through the patched 'JAE' instruction. Sorting algorithms were a hot topic in computer science during the early 1980s, as efficient text processing was critical for many applications. This implementation balances simplicity and performance, leveraging assembly language's low-level control to optimize operations. The design reflects the constraints of the era, where every cycle and byte mattered. While modern systems use more sophisticated algorithms, this code remains a testament to the ingenuity of early PC programmers."
  - id: "cr-lf-restoration"
    line_start: 745
    line_end: 763
    title: "Restoring CR-LF pairs after sorting"
    wikipedia_url: "https://en.wikipedia.org/wiki/Newline"
    image_url: ""
    image_caption: ""
    content: "After sorting, this section restores the original CR-LF line terminations in the text buffer. Each line's length is replaced with the CR-LF pair, ensuring compatibility with standard text formats. Handling line terminations was a common challenge in the early PC era, as different systems used different conventions (e.g., LF in Unix, CR-LF in DOS). This code demonstrates the attention to detail required to maintain interoperability. Chris Peters likely included this step to ensure the SORT utility could process and output text files seamlessly, a critical feature for users relying on MS-DOS for business and personal tasks. The restoration process underscores the importance of adhering to established conventions, even in low-level programming."
  - id: "write-file-output"
    line_start: 771
    line_end: 799
    title: "Writing sorted output to standard output"
    wikipedia_url: "https://en.wikipedia.org/wiki/Standard_streams"
    image_url: ""
    image_caption: ""
    content: "The final step of the SORT utility writes the sorted text to standard output. By calculating the number of bytes to write and invoking the WRITE system call, the program ensures the sorted data is delivered to the user or piped into another process. Standard streams were a fundamental concept in MS-DOS, enabling flexible input/output operations. This design reflects the Unix-inspired philosophy of MS-DOS 2.0, where utilities were designed to work together through piping and redirection. Chris Peters likely aimed to make SORT a versatile tool for text processing, suitable for a wide range of tasks. The focus on standard output highlights the utility's role in the broader ecosystem of MS-DOS command-line tools, paving the way for more sophisticated text processing in later systems."

---

TITLE   SORT FILTER FOR MS-DOS

;

; Sort  /R /+n

; /R -> reverse sort

; /+n -> sort on column n

;

; Written by:   Chris Peters

;

; Modification History:

;           3-18-83 MZ  Fix CR-LF at end of buffer

;                       Fix small file sorting

;                       Fix CR-LF line termination bug

;                       Comment the Damn source

;

FALSE   EQU     0

TRUE    EQU     NOT FALSE



;NOTE:	"internat" must be false if KANJI version

internat	equ	true

;NOTE:	see above



.xlist

.xcref

        INCLUDE DOSSYM.ASM

.cref

.list



sys     MACRO   name                    ; system call macro

        MOV     AH,name

        INT     21h

        ENDM

save    MACRO   reglist                 ; push those registers

IRP reg,<reglist>

        PUSH    reg

ENDM

ENDM

restore MACRO   reglist                 ; pop those registers

IRP reg,<reglist>

        POP     reg

ENDM

ENDM



MAXREC  EQU     256                     ; MAXIMUM NUL RECORD SIZE



SPACE   EQU     0                       ; Offset zero in the allocated block

BUFFER  EQU     MAXREC                  ; Offset MAXREC in the allocated block



SUBTTL  Segments used in load order





CODE    SEGMENT

CODE    ENDS



CONST   SEGMENT PUBLIC BYTE

CONST   ENDS



CSTACK  SEGMENT STACK

        DB 128 DUP (0)                  ; initial stack to be clear

CSTACK  ENDS



DG      GROUP   CODE,CONST,CSTACK



CODE    SEGMENT

ASSUME  CS:DG,DS:NOTHING,ES:NOTHING,SS:CSTACK



COLUMN  DW      0                       ; COLUMN TO USE FOR KEY + 1

SWITCH  DB      '/'



SORT:

;

; check for proper version number of system

;

        sys     GET_VERSION

        XCHG    AH,AL                   ; Turn it around to AH.AL

        CMP     AX,200H                 ; Version 2.00 only

        JAE     OKDOS                   ; Success

        MOV     DX,OFFSET DG:BADVER     ; Get error message

        PUSH    CS                      ; Get DS addressability

        POP     DS

        sys     STD_CON_STRING_OUTPUT   ; Send to STDOUT

        PUSH    ES                      ; long segment

        PUSH    COLUMN                  ; offset zero

LONG_RET    PROC    FAR

        RET                             ; long return to OS

LONG_RET    ENDP

;

; get proper switch character

;

OKDOS:

        MOV     AL,0                    ; Get current switch character

        sys     CHAR_OPER

        MOV     SWITCH,DL

;

; parse command line

;

        MOV     SI,80H                  ; pointer to command line

        CLD                             ; go left to right

        XOR     CX,CX

        LODSB

        MOV     CL,AL                   ; CX = length of command line

SWITCH_LOOP:

        CALL    GET_CHAR                ; get a character

        CMP     AL,SWITCH               ; beginning of switch?

        JNZ     SWITCH_LOOP             ; No, get next character

        CALL    GET_CHAR                ; get 1st char of switch

        CMP     AL,'+'                  ; Column to sort?

        JZ      SWITCH_NUMBER           ; Yes, parse a number

        OR      AL,20h                  ; convert to lower case

        CMP     AL,'r'                  ; Reverse sort?

        JNZ     SWITCH_LOOP             ; No, get next switch

        MOV     CS:CODE_PATCH,72h       ; sleaze JAE into JB

        JMP     SWITCH_LOOP             ; get next switch

SWITCH_NUMBER:

        MOV     COLUMN,0                ; start off at 0

SWITCH_NEXT_NUMBER:

        CALL    GET_CHAR                ; get supposed digit

        SUB     AL,'0'                  ; convert to number

        JB      SWITCH_LOOP             ; less than '0'

        CMP     AL,9                    ; is it a valid digit?

        JA      SWITCH_LOOP             ; nope, get next switch

        CBW                             ; make it a full word

        MOV     BX,AX                   ; save byte away

        MOV     AX,10                   ; decimal number system

        MUL     COLUMN                  ; take previous result

        ADD     AX,BX                   ; add in low order digit

        MOV     COLUMN,AX               ; save away value

        JMP     SWITCH_NEXT_NUMBER      ; get next character

GET_CHAR:

        JCXZ    END_GET                 ; End of line

        DEC     CX                      ; dec char count

        LODSB                           ; get the character

        RET                             ; return

END_GET:

        POP     AX                      ; nuke return on stack

;

; set up column for proper sort offset

;

END_SWITCH:

        ADD     COLUMN,2

        CMP     COLUMN,2

        JZ      GOT_COL

        DEC     COLUMN



;

; Get sorting area, no more than 64K

;

GOT_COL:

        MOV     BX,1000H                ; 64K worth of paragraphs

GET_MEM:

        sys     ALLOC                   ; allocate them from somewhere

        JNC     GOT_MEM                 ; if error, BX has amount free, try to get it

        OR      BX,BX                   ; but, is BX = 0?

        JNZ     GET_MEM                 ; nope, try to allocate it

        JMP     SIZERR                  ; complain



GOT_MEM:

        MOV     DS,AX                   ; Point DS to buffer

        MOV     ES,AX                   ; and point ES to buffer

        MOV     CL,4                    ; 2^4 bytes per paragraph

        SHL     BX,CL                   ; Find out how many bytes we have



;

; clear out temporary record area

;

        MOV     CX,MAXREC/2             ; Size of temporary buffer (words)

        MOV     AX,'  '                 ; Character to fill with

        MOV     DI,SPACE                ; Beginning of temp buffer

        REP     STOSW                   ; Blam.

;

; read in file from standard input

;

        MOV     DX,BUFFER + 2           ; DX = place to begin reading

        MOV     CX,BX                   ; CX is the max number to read

        SUB     CX,MAXREC + 2           ; remember offset of temp buffer

SORTL:

        XOR     BX,BX                   ; Standard input

        sys     READ                    ; Read it in

        ADD     DX,AX                   ; Bump pointer by count read

        SUB     CX,AX                   ; subtract from remaining the count read

        JZ      SIZERR                  ; if buffer is full then error

        OR      AX,AX                   ; no chars read -> end of file

        JNZ     SORTL                   ; there were chars read. go read again

        JMP     SHORT SIZOK             ; trim last ^Z terminated record

SIZERR:

        MOV     SI,OFFSET DG:ERRMSG     ; not enough memory error

ERROR_EXIT:

        PUSH    CS                      ; DS addressability

        POP     DS

        LODSW                           ; get length

        MOV     CX,AX                   ; put into appropriate register

        MOV     DX,SI                   ; get output destination

        MOV     BX,2                    ; output to standard error

        sys     WRITE                   ; and write it out

        MOV     AL,1                    ; return an error code

        sys     EXIT



;

; Look for a ^Z. Terminate buffer at 1st ^Z.

;

SIZOK:

        MOV     BX,DX                   ; save end pointer

        MOV     CX,DX                   ; get pointer to end of text

        SUB     CX,BUFFER+2             ; dif in pointers is count

        MOV     AL,1AH                  ; char is ^Z

        MOV     DI,BUFFER+2             ; point to beginning of text

        REPNZ   SCASB                   ; find one

        JNZ     NoBack                  ; nope, try to find CRLF

        DEC     BX                      ; pretend that we didn't see ^Z

NoBack:

        SUB     BX,CX                   ; sub from endpointer the number left

        SUB     BX,2                    ; Hope for a CR LF at end

        CMP     WORD PTR [BX],0A0Dh     ; Was there one there?

        JZ      GOTEND                  ; yep, here is the end

        ADD     BX,2                    ; nope, bump back to SCASB spot

        CMP     BYTE PTR [BX],AL        ; Was there ^Z there?

        JZ      GOTEND                  ; yep, chop it

        INC     BX                      ; Nope, skip last char

GOTEND:

        MOV     BP,BX                   ; BP = filesize-2(CRLF)+temp buffer+2

        MOV     WORD PTR DS:[BP],0      ; 0 at end of the file

;

;  We now turn the entire buffer into a linked list of chains by

;  replacing CRLFs with the length of the following line (with 2 for CRLF)

;

        MOV     BX,BUFFER               ; pointer to line head (length)

        MOV     DI,BUFFER+2             ; pointer to line text

REPLACE_LOOP:

        MOV     AL,13                   ; char to look for is CR

        MOV     CX,BP                   ; count = end pointer

        SUB     CX,DI                   ; chop off start point to get length

        INC     CX                      ; add 1???

REPLACE_SCAN:

        REPNZ   SCASB                   ; look for CR

        JNZ     REPLACE_SKIP            ; count exhausted

        CMP     BYTE PTR [DI],10        ; LF there?

        JNZ     REPLACE_SCAN            ; nope, continue scanning

REPLACE_SKIP:

        MOV     AX,DI                   ; AX to point after CR

        DEC     AX                      ; AX to point to CR

        save    <AX>                    ; save pointer

        SUB     AX,BX                   ; AX is length of line found

        MOV     [BX],AX                 ; stuff it in previous link

        restore <BX>                    ; get pointer to next

        INC     DI                      ; skip LF???

        JCXZ    END_REPLACE_LOOP        ; no more to scan -> go sort

        JMP     REPLACE_LOOP            ; look for next



END_REPLACE_LOOP:

        MOV     WORD PTR [BX],0         ; terminate file with nul

        LEA     BP,[BX+2]               ; remember the null line at end

        MOV     DI,BUFFER               ; DI is start of unsorted section



;

; begin sort. Outer loop steps over all unsorted lines

;

OUTER_SORT_LOOP:

        MOV     BX,DI                   ; BX is start of unsorted section

        MOV     SI,BX                   ; SI is scanning place link

        CMP     WORD PTR [BX],0         ; are we at the end of the buffer?

        JNZ     INNER_SORT_LOOP         ; No, do inner process

        JMP     END_OUTER_SORT_LOOP     ; yes, go dump out



;

; BX points to best guy found so far. We scan through the sorted section

; to find an appropriate insertion point

;

INNER_SORT_LOOP:

        ADD     SI,[SI]                 ; link to next fellow

        MOV     AX,[SI]                 ; get length of comparison guy

        OR      AX,AX                   ; test for end of buffer

        JZ      END_INNER_SORT_LOOP     ; if zero then figure out insertion

        save    <SI,DI>                 ; save SI,DI

        MOV     DI,BX                   ; DI = pointer to tester link

        SUB     AX,COLUMN               ; adjust length for column

        JA      AXOK                    ; more chars in tester than column?

        MOV     SI,SPACE                ; point SI to blank area

        MOV     AX,MAXREC               ; make AX be max length

AXOK:

        MOV     DX,[DI]                 ; get length of best guy

        SUB     DX,COLUMN               ; adjust length for column

        JA      DXOK                    ; there are more chars after column

        MOV     DI,SPACE                ; point air to a space

        MOV     DX,MAXREC               ; really big record

DXOK:

        MOV     CX,AX                   ; AX is shortest record

        CMP     AX,DX                   ; perhaps DX is shorter

        JB      SMALL                   ; nope, leace CX alone

        MOV     CX,DX                   ; DX is shorter, put length in CX

SMALL:

        ADD     DI,COLUMN               ; offset into record

        ADD     SI,COLUMN               ; offset into other record

if	not	internat

        REPZ    CMPSB                   ; compare every one

	endif

if	internat

	push	bx

	push	ax

	mov	bx,offset dg:table

tloop:	lodsb

	xlat	byte ptr cs:[bx]

	mov	ah,al

	mov	al,es:[di]

	inc	di

	xlat	byte ptr cs:[bx]

	cmp	ah,al

	loopz	tloop

	pop	ax

	pop	bx

	endif

        restore <DI,SI>                 ; get head pointers back

        JNZ     TESTED_NOT_EQUAL        ; didn't exhaust counter, conditions set

        CMP     AX,DX                   ; check string lengths

TESTED_NOT_EQUAL:

;

; note! jae is patched to a jbe if file is to be sorted in reverse!

;

CODE_PATCH LABEL BYTE

        JAE     INNER_SORT_LOOP         ; if this one wasn't better then go again

        MOV     BX,SI                   ; it was better, save header

        JMP     INNER_SORT_LOOP         ; and scan again



END_INNER_SORT_LOOP:

        MOV     SI,BX                   ; SI is now the best person

        CMP     SI,DI                   ; check best for current

        JZ      END_INSERT              ; best equals current, all done



;

; SI points to best line found so far

; DI points to a place to insert this line

; DI is guaranteed to be < SI

; make room for line at destination

;

        MOV     DX,[SI]                 ; get length of line

        save    <SI,DI>                 ; save positions of people

        STD                             ; go right to left

        MOV     CX,BP                   ; get end of file pointer

        SUB     CX,DI                   ; get length from destination to end

        MOV     SI,BP                   ; start from end

        DEC     SI                      ; SI points to end of file

        MOV     DI,SI                   ; destination is end of file

        ADD     DI,DX                   ; DI points to new end of file

        REP     MOVSB                   ; blam. Move every one up

        CLD                             ; back left to right

        restore <DI,SI>                 ; get old source and destination

;

;  MOVE NEW LINE INTO PLACE

;

        save    <DI>                    ; save destination

        ADD     SI,DX                   ; adjust for previous movement

        save    <SI>                    ; save this value

        MOV     CX,DX                   ; get number to move

        REP     MOVSB                   ; blam. move the new line in

        restore <SI,DI>                 ; get back destination and new source

;

;  DELETE LINE FROM OLD PLACE

;

        save    <DI>                    ; save destination

        MOV     CX,BP                   ; pointer to end

        ADD     CX,DX                   ; remember bump

        SUB     CX,SI                   ; get count of bytes to move

        INC     CX                      ; turn it into a word

        SHR     CX,1                    ; or a count of words

        MOV     DI,SI                   ; new destination of move

        ADD     SI,DX                   ; offset of block

        REP     MOVSW                   ; blam, squeeze out the space

        restore <DI>                    ; get back original destination

        MOV     WORD PTR DS:[BP-2],0    ; remake the end of file mark



END_INSERT:

        ADD     DI,[DI]                 ; link to next guy

        JMP     OUTER_SORT_LOOP         ; and continue

;

;       PUT BACK IN THE CR-LF

;

END_OUTER_SORT_LOOP:

        MOV     DI,BUFFER               ; start at beginning (where else)

        MOV     CX,[DI]                 ; count of butes



INSERT_LOOP:

        ADD     DI,CX                   ; point to next length

        MOV     CX,[DI]                 ; get length

        MOV     WORD PTR [DI],0A0DH     ; replace length with CRLF

        CMP     CX,0                    ; check for end of file

        JNZ     INSERT_LOOP             ; nope, try again



WRITE_FILE:

        MOV     DX,BUFFER+2             ; get starting point

        MOV     CX,BP                   ; pointer to end of buffer

        SUB     CX,DX                   ; dif in pointers is number of bytes

        MOV     BX,1                    ; to standard output

        sys     WRITE                   ; write 'em out

        JC      BADWRT                  ; some bizarre error -> flag it

        CMP     AX,CX                   ; did we write what was expected?

        JZ      WRTOK                   ; yes, say bye bye

BADWRT:

        MOV     SI,OFFSET dg:ERRMSG2    ; strange write error

        JMP     ERROR_EXIT              ; bye bye

WRTOK:

        XOR     AL,AL                   ; perfect return (by convention)

        sys     EXIT                    ; bye!



CODE    ENDS



CONST   SEGMENT PUBLIC BYTE

        EXTRN   BADVER:BYTE,ERRMSG:BYTE,ERRMSG2:BYTE

if	internat

	extrn	table:byte

	endif

CONST   ENDS



SUBTTL  Initialized Data

PAGE

CSTACK   SEGMENT STACK

         DB      96 dup (0)

CSTACK   ENDS



        END     SORT

                                                                                          



