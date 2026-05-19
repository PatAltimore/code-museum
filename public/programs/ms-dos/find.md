---
title: "FIND.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/FIND.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/FIND.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "find"
order: 33
description: "MS-DOS FIND utility: A glimpse into early command-line tools inspired by Unix."

summary:
  - point: "Command-line parsing with options and arguments"
    link: "https://en.wikipedia.org/wiki/Command-line_interface"
    link_label: "Command-line interface"
  - point: "Kanji character support added in later revisions"
    link: "https://en.wikipedia.org/wiki/Kanji"
    link_label: "Kanji"
  - point: "Efficient buffer handling for file reading"
    link: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    link_label: "Buffer"
  - point: "Binary-to-ASCII conversion for output"
    link: "https://en.wikipedia.org/wiki/ASCII"
    link_label: "ASCII"
  - point: "Error handling and messaging modularized"
    link: "https://en.wikipedia.org/wiki/Error_handling"
    link_label: "Error handling"

enhancements:
  - id: "assume-segment-registers"
    line_start: 169
    line_end: 261
    title: "Segment registers: Navigating memory in MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_segmentation"
    image_url: ""
    image_caption: ""
    content: "This section sets up the segment registers, defining how the code segment (CS), stack segment (SS), and data segment (DS) interact. In the 8086 architecture, memory segmentation was a necessity due to the processor's 16-bit address space, which could only directly address 64KB at a time. By splitting memory into segments, programmers could access larger memory spaces, albeit with added complexity. Tim Paterson, who originally wrote 86-DOS, designed the system to be simple yet functional, borrowing heavily from CP/M's structure. By 1983, MS-DOS had evolved to support features inspired by Unix, such as subdirectories and pipes, but it still retained the segmented memory model. This setup reflects the constraints of the era, where hardware limitations dictated software design. Memory segmentation persisted in x86 architecture for years, influencing operating systems and compilers long after MS-DOS."
  - id: "opt-tbl-option-flags"
    line_start: 265
    line_end: 293
    title: "Option flags: A compact command-line interface"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The `opt_tbl` defines flags for command-line options such as `/v`, `/c`, and `/n`. Each flag is a single byte, set to 0 initially and toggled to 0xFF when the corresponding option is selected. This design is efficient, minimizing memory usage—a critical consideration in the constrained environment of early PCs. MS-DOS was built to run on machines like the IBM PC, which often had just 64KB or 128KB of RAM. The flags align with Unix-inspired conventions, showcasing Microsoft's attempt to bring the power of Unix utilities to a broader audience. These options allowed users to customize the behavior of the FIND command, making it versatile despite its simplicity. The compact representation of flags became a common pattern in command-line utilities, influencing software design for decades."
  - id: "start-main-routine"
    line_start: 295
    line_end: 325
    title: "Main routine: Version checks and graceful exits"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `start` routine begins by checking the DOS version number to ensure compatibility. If the version is below 2.0, the program exits gracefully with an error message. This reflects the transitional nature of MS-DOS 2.0, which introduced significant changes inspired by Unix, such as hierarchical directories and file handles. Developers like M.A. Ulloa and A.R. Reynolds had to ensure backward compatibility while leveraging new features. The version check highlights the challenges of maintaining software across evolving platforms. By embedding such checks, MS-DOS utilities could adapt to the diverse ecosystem of IBM-compatible machines, ensuring reliability in a rapidly growing market. This approach to compatibility remains a cornerstone of software development."
  - id: "find-opt-command-line-options"
    line_start: 383
    line_end: 391
    title: "Parsing options: The heart of FIND's flexibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The `find_opt` routine retrieves and processes command-line options, using the DOS interrupt 0x21 to determine the switch character (typically `/` on IBM PCs). This mechanism allows users to specify options like `/v` (invert match), `/c` (count matches), and `/n` (number lines). Parsing options was a hallmark of Unix utilities, and MS-DOS adopted this paradigm to provide powerful tools for text processing. The routine's design reflects the constraints of assembly language, where every operation must be explicitly coded. Despite these limitations, the FIND utility achieves remarkable flexibility, enabling users to tailor its behavior to diverse needs. This pattern of option parsing influenced countless command-line tools, shaping the way users interact with software."
  - id: "move-str-string-parsing"
    line_start: 523
    line_end: 529
    title: "String parsing: Handling quotes and errors"
    wikipedia_url: "https://en.wikipedia.org/wiki/String_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The `move_str` routine processes the string argument, ensuring it begins and ends with double quotes. If the string is malformed, the program exits with an error message. This strict validation reflects the influence of Unix, where command-line tools often enforce precise syntax. In MS-DOS, such checks were vital to prevent crashes, as the operating system lacked robust error handling mechanisms. The routine also handles escaped quotes, a feature that adds complexity but enhances usability. By implementing these checks, the FIND utility balances user convenience with system reliability. String parsing remains a foundational task in programming, and routines like `move_str` illustrate the care required to handle user input safely."
  - id: "prt-line-printing-matches"
    line_start: 1101
    line_end: 1109
    title: "Printing matches: A user-centric design"
    wikipedia_url: "https://en.wikipedia.org/wiki/Output_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `prt_line` routine outputs lines that match the search criteria, optionally including line numbers or counts. This design prioritizes user needs, providing clear and customizable results. The routine checks flags set earlier to determine whether to print line numbers (`/n`) or just a count (`/c`). Such features reflect the influence of Unix utilities like `grep`, which inspired MS-DOS tools. By offering multiple output formats, the FIND utility caters to diverse workflows, from simple searches to detailed analysis. This focus on usability helped MS-DOS gain popularity among both casual users and professionals, establishing it as a versatile platform for personal computing."
  - id: "bin2asc-conversion"
    line_start: 1491
    line_end: 1495
    title: "Binary-to-ASCII conversion: Bridging machine and human-readable formats"
    wikipedia_url: "https://en.wikipedia.org/wiki/ASCII"
    image_url: ""
    image_caption: ""
    content: "The `bin2asc` routine converts binary numbers to ASCII, enabling numerical data to be displayed as text. This process involves dividing the binary number by 10 repeatedly, extracting digits in reverse order, and storing them in a buffer. Such routines were essential in early computing, where hardware constraints required efficient algorithms for basic tasks. ASCII was the standard for text representation, and converting binary to ASCII allowed programs like FIND to communicate results effectively. This routine showcases the ingenuity of assembly programming, where every operation is meticulously crafted. Binary-to-ASCII conversion remains a fundamental task in computing, bridging the gap between machine and human-readable formats."
  - id: "make-caps-capitalization"
    line_start: 1641
    line_end: 1651
    title: "Capitalization: Ensuring case-insensitive searches"
    wikipedia_url: "https://en.wikipedia.org/wiki/Case_sensitivity"
    image_url: ""
    image_caption: ""
    content: "The `make_caps` routine converts lowercase letters to uppercase, ensuring case-insensitive searches. This feature aligns with user expectations, as many search tools ignore case by default. The routine uses a simple bitwise operation (`AND 0xDF`) to capitalize characters, reflecting the efficiency required in assembly programming. Case insensitivity was a practical choice for MS-DOS, catering to users who might not remember exact capitalization. This approach demonstrates the balance between usability and performance, a recurring theme in early software design. Case-insensitive searches remain a standard feature in modern tools, highlighting the enduring influence of routines like `make_caps`."

---

      title   MSDOS V2.0  FIND



;--------------------------------------------------------------------;

; Revision History:                                                  ;

;                                                                    ;

;       V1.1    8/23/82         M.A.Ulloa                            ;

;                                                                    ;

;       V1.2    9/22/82         M.A.Ulloa                            ;

;                 Added the -c and -n options                        ;

;                                                                    ;

;               9/23/82         M.A.Ulloa                            ;

;                 Added DOS version number control                   ;

;                                                                    ;

;               10/07/82  Rev.2         M.A.Ulloa                    ;

;                 Changed quote for double quotes, and added         ;

;               file name printing                                   ;

;                                                                    ;

;               10/20/82  Rev.3         M.A.Ulloa                    ;

;                 Modified IBM name to FIND, and changed the text    ;

;               of some messages.                                    ;

;                                                                    ;

;               10/25/82  Rev.4         M.A.Ulloa                    ;

;                 Changed name to FIND and all messages to the       ;

;               IBM form.                                            ;

;                                                                    ;

;               10/27/82  Rev.5         M.A.Ulloa                    ;

;                 Made the correct exit on version check in case     ;

;               of a 1.x DOS.                                        ;

;                                                                    ;

;               11/4/82 Rev. 5          A.R. Reynolds                ;

;                  Messages moved to external module                 ;

;                                                                    ;

;               11/10/82  Rev. 6        M.A. Ulloa                   ;

;                 Corrected problem with line numbers, and a problem ;

;               with seeking for 0 chars.                            ;

;                                                                    ;

;               03/30/83  Rev. 7        M.A. Ulloa                   ;

;                 Added patch area for bug fixing.                   ;

;                                                                    ;

;               04/14/83  Rev. 8        M.A. Ulloa                   ;

;                 Made changes for Kanji characters. (uhg!)          ;

;                                                                    ;

;--------------------------------------------------------------------;



FALSE   equ     0

TRUE    equ     NOT FALSE



KANJI   equ     FALSE                   ;set to true is kanji vers.



;--------------------------------------------------------------------;

;       FIND program following the standart UNIX operation.          ;

;                                                                    ;

; FORMAT:                                                            ;

;       find {option} string {filename {filename} {...}}             ;

;                                                                    ;

; NOTES:                                                             ;

;       1) String arguments HAVE to be enclosed                      ;

;       in double quotes. (Two double quotes if a                    ;

;       doble quote is to be included). Only ONE                     ;

;       string argument is presently allowed.                        ;

;                                                                    ;

;       2) Options are available:                                    ;

;               v       All lines but those matching are considered  ;

;               c       Only print a count of matching lines         ;

;               n       Each line is preceded by its relative        ;

;                         line number in the file.                   ;

;                                                                    ;

;       - Options can be Upper or lower case.                        ;

;       - Format: The switch character followed by an options        ;

;       character. I.e.: In the IBM PC: /v                           ;

;                                                                    ;

;       3) The program returns:                                      ;

;               0 - OK, and some matches                             ;

;               2 - Some Error                                       ;

;                                                                    ;

;       4) The maximum line size is determined by                    ;

;       buffer size. Bigger lines will bomb the program.             ;

;                                                                    ;

;       5) If no file name is given then it will asssume             ;

;       the input is comming from the Standart Input. NO             ;

;       errors are reported when reading from Standart Input.        ;

;--------------------------------------------------------------------;



code    segment public

assume  cs:code,ss:code,ds:nothing,es:nothing





CR      equ     0dh                     ;A Carriage Return

LF      equ     0ah                     ;A Line Feed

quote_char equ  22h                     ;A double quote character





buffer_size equ 4096                    ;file buffer size

st_buf_size equ 128                     ;string arg. buffer size

fname_buf_size equ 64                   ;file name buffer size





;----- DOS EQUATES --------------------------------------------------;

std_in  equ     0                       ;STD input handle

std_out equ     1                       ;STD output handle

std_err equ     2                       ;STD error handle

dos_ent equ     21h                     ;DOS entry point



std_con_string_output equ 9

get_version equ 48

char_oper equ   55                      ;get configuration parameters

open    equ     61                      ;DOS std open code

close   equ     62                      ;DOS std close code

read    equ     63                      ;DOS std read code

write   equ     64                      ;DOS std write code

lseek   equ     66                      ;DOS file seek

exit    equ     76                      ;DOS process exit code





;----- Misc  Data -----------------------------------------------;

make    db      "***MAUlloa/Microsoft/V12***"

rev     db      "8"





colon   db      ": "

n1_buf  db      "["

n2_buf  db      8 dup(0)                ;buffer for number conversion







;----- OPTION FLAGS -------------------------------------------------;

; If a flag is set (0ffh) then the option has been selected, if

;reset (0) then it has been not. All options are reset initially.

; NOTE: the order of this table has to remain consistent with the

;options dispatch code. If any changes are made they have to

;correspond with the code.



opt_tbl:



v_flg   db      0

c_flg   db      0

n_flg   db      0

x_flg   db      0               ;not used

l_flg   db      0               ;not used





;----- LINE COUNTERS ------------------------------------------------;

mtch_cntr dw    0                       ;matched lines counter

line_cntr dw    0                       ;line counter





;----- MAIN ROUTINE -------------------------------------------------;

start:



;----- CHECK VERSION NUMBER -----------------------------------------;



        mov     ah,get_version

        int     21h

        cmp     al,2

        jge     vers_ok

        push    cs

        pop     ds

        mov     dx,offset bad_vers

        mov     ah,std_con_string_output

        int     21h

        push    es              ;bad vers, exit a la 1.x

        xor     ax,ax

        push    ax



badfart proc    far             ;(what a hack!!)

        ret

badfart endp



vers_ok:



        push    cs                      ;load ES to the right area,

        pop     es                      ; for use with DI register



assume  es:code



;--------------------------------------------------------------------;



        mov     si,81h                  ;Start addrss. of commad line buf.



        call    kill_bl                 ;Get rid of blanks

        or      bx,bx                   ;A CR found?

        jz      find_opt                ;no, first find the options

args_missing:

        mov     dx,offset errmsg1       ;empty command line, no args: error.

        mov     cl,cs:errlen1

        call    prt_err

        mov     al,2                    ;error code for exit

        jmp     done





;----- FIND THE OPTION IF ANY ---------------------------------------;

find_opt:

        mov     ah,char_oper            ;get the dos switch char.

        mov     al,0

        int     dos_ent                 ;switch char in DL

        push    dx

another_opt:

        lodsb                           ;get the first char of command line

        cmp     al,' '                  ;a blank?

        je      cont_scan

        cmp     al,CR                   ;a Carriage Return

        je      args_missing

        pop     dx                      ;get switch character

        cmp     al,dl                   ;is it the switch char?

        jne     find_str                ;no, no options: get the string

        push    dx                      ;save for another round



        lodsb                           ;get the option character

        cmp     al,' '                  ;a blank?

        je      cont_scan               ;yes, ignore and continue

        cmp     al,CR                   ;a CR?

        je      args_missing            ;yes, error...

        call    make_caps               ;Capitalize the character

        mov     bx,offset opt_tbl       ;pointer to option flag table



        cmp     al,'V'                  ;the v option?

        je      opt_v

        cmp     al,'C'                  ;the c option?

        je      opt_c

        cmp     al,'N'                  ;the n option?

        je      opt_n



        mov     cs:errmsg5_opt,al       ;save the option

        mov     dx,offset errmsg5       ;unknown option: error

        mov     cl,cs:errlen5

        call    prt_err

        mov     dx,offset crlf          ;print a CRLF

        mov     cx,2

        call    prt_err

        jmp     another_opt             ;process next option



opt_v:

        mov     di,0

        jmp     short opt_dispatch



opt_c:

        mov     di,1

        jmp     short opt_dispatch



opt_n:

        mov     di,2



opt_dispatch:

        mov     es:byte ptr[bx+di],0ffh ;set the corresponding flag

        jmp     another_opt             ;process the rest of the options



cont_scan:

        dec     si                      ;adjust SI

        call    kill_bl                 ;get rid of blanks

        or      bx,bx                   ;A CR found?

        jz      another_opt             ;no, test for other options

        jmp     args_missing            ;yes, error...





;----- FIND STRING ARGUMENT -----------------------------------------;

find_str:

        cmp     al,quote_char           ;string should start with a

        jnz     bad_str_err             ; quote character, if not: error.

        mov     di,offset st_buffer     ;String argument buffer addrss.

        xor     cx,cx                   ;Clear to keep string length.



move_str:

        lodsb

        cmp     al,CR                   ;if a CR is found in the string

        jnz     str_ok                  ; then it's a bad string

bad_str_err:

        mov     dx,offset errmsg2       ;bad string error message

        mov     cl,cs:errlen2

        call    prt_err                 ;print the error.

        mov     al,2

        jmp     done



str_ok:

        cmp     al,quote_char           ;look for a quote character

        jnz     move_char               ;not an apost., move to buffer

        lodsb                           ;an apost., check next char.

        cmp     al,quote_char           ;another quote character?

        je      move_char               ;yes, move it to the buffer

        dec     si                      ;no, adjust the pointer

        mov     es:st_length,cx         ;store the string length

        or      cx,cx                   ;Is the string empty?

        jnz     other_args              ;no: get the rest of the args.

        mov     al,1                    ;empty: no matches(!?)

        jmp     done

move_char:

        stosb                           ;put in buffer

        inc     cx                      ;increment string length

        jmp     move_str





;----- FIND THE FILE ARGUMENTS --------------------------------------;

other_args:                             ;Process the rest of the command

                                        ; line arguments.

        call    kill_bl                 ;get rid of leading blanks

        or      bx,bx                   ;At least one argument necessary,

        jz      further_args            ; if a CR not found: ok.



;----- USE STD IN FOR INPUT -----------------------------------------;

        push    cs

        pop     ds

        mov     ax,std_in               ;handle

        jmp     fill



further_args:

        call    clr_cntrs               ;set all counters to zero

        mov     di,offset file_name_buf ;Set pointer to the name buffer

        xor     cx,cx                   ;zero file name length

move_fname:

        lodsb

        cmp     al,' '                  ;A blank: end of file name,

        je      done_move

        cmp     al,CR                   ;A CR: idem.

        je      done_move

        stosb                           ;store in name buffer

        inc     cx                      ;increment file name length

        jmp     move_fname

done_move:

        dec     si                      ;Adjust pointer for next round.

        mov     es:byte ptr[di],00h     ;File names are null terminated

        push    si                      ;Save SI to continue com. line scan.

        push    ds                      ;Save DS register contents for

                                        ; later because it points to the

                                        ; rest of the arguments.

        mov     es:file_name_len,cx     ;save the name length



;----- OPEN FILE FOR READING ----------------------------------------;

        push    cs                      ;Load new DS with CS

        pop     ds

        mov     dx,offset file_name_buf ;addrss. of the file name

        mov     ah,open

        mov     al,0                    ;file open for reading

        int     dos_ent                 ;call the DOS

        jnc     say_name                ;if no carry then no errors

        jmp     open_error



;----- PRINT FILE NAME ----------------------------------------------;

say_name:

        push    ax                      ;save file handle

        mov     dx,offset heading

        mov     cl,cs:heading_len

        xor     ch,ch

        call    prout



        mov     dx,offset file_name_buf

        mov     cx,ds:file_name_len

        call    prout



        cmp     ds:c_flg,0ffh           ;count only flag set?

        je      xx1



        mov     dx,offset crlf

        mov     cx,2

        call    prout



xx1:

        pop     ax



;----- Fill Buffer for Matching -------------------------------------;

fill:

        mov     bx,ax                   ;retrieve handle

refill:

        mov     dx,offset buffer        ;data buffer addrss.

        mov     cx,buffer_size

        mov     ah,read

        int     dos_ent

        jnc     no_read_error           ;if carry then read error

        jmp     read_error

no_read_error:

        or      ax,ax                   ;if ax=0 then all done

        jnz     go_match

        cmp     ds:c_flg,0ffh           ;count only flag set?

        jne     sj2

        call    print_count

sj2:

        cmp     bx,std_in               ;Using STD IN?

        jnz     regular

        jmp     foo                     ;if so: all done, exit

regular:

        mov     ah,close                ;otherwise close the file

        int     dos_ent

        jmp     scan_rest               ;get another file



;----- MATCH ROUTINE ------------------------------------------------;

;Note: If input is being taken from a file the stack contains

; (from top to bottom):

;       - Pointer to the next command in the command line

;       - Pointer to the program segment prefix (to be loaded into

;         DS to access the command line.

; if the imput is from the standart input then NONE of it will be

; in the stack.



go_match:

        push    bx                      ;save the file handle

        mov     bp,offset buffer        ;ptr to first line of file

        mov     di,ax                   ;dispalcement from beg of buffer



        cmp     ax,buffer_size-1        ;last line of the file?

        jg      no_last_line            ;if yes, add a CRLF just in case

        mov     bx,bp

        cmp     byte ptr[bx+di-1],LF    ;finished with a LF?

        je      no_last_line            ;yes, it's an OK line.

        mov     byte ptr[bx+di],CR      ;put a CR at the end of the data

        inc     di

        mov     byte ptr[bx+di],LF      ;put a LF ...

        inc     di



no_last_line:

        push    di                      ;save the # of chars. in the buffer

        push    bp

        mov     dx,ds:st_length         ;length of the string arg.

        dec     dx                      ;adjust for later use

        jmp     short try_again





more_stuff_o:

        jmp     more_stuff







;----- SCAN LINES IN THE BUFFER FOR A MATCH -------------------------;

;Note: at this point the stack contains (from top to bottom):

;       - Stuff mentioned before

;       - File Handle

;       - Number of chars. left in the buffer from the next line.

;       - Addrs. of the next line in the buffer.

;

; plus, DX has the adjusted length of the string argument.



try_again:

        inc     ds:line_cntr            ;increment line counter

        pop     bp                      ;addrs. of next line in the buffer

        mov     di,bp                   ;points to beg. of a line

        pop     cx                      ;get # of chars left in the buffer

        mov     bx,cx                   ;save in case a non-complete line

        mov     al,LF                   ;search for a Line Feed

        jcxz    more_stuff_o            ;no chars left in buffer

        repnz   scasb

        jnz     more_stuff_o            ;no full line left in buffer



        push    cx                      ;save chars left in buffer

        push    di                      ;points to beg. of next line

        mov     cx,di

        sub     cx,bp                   ;length of the current line

        mov     bx,cx                   ;save in case it has a match

        dec     cx

        dec     cx                      ;CRLF characters discounted

        jcxz    try_again_opt           ;if line empty go to next line

        mov     di,bp                   ;pointer to the beg. of current line

another_char:

;

; On entry:

;       BX      line length

;       CX      adjusted line length

;       DX      adjusted string argument length

;       DI      points to beg. of line

;



IF      KANJI



        push    dx                      ;save for next line

lop:

        pop     dx

        push    dx

        inc     dx                      ;different algorithm!

        mov     si,offset st_buffer     ;pointer to beg. of string argument



comp_next_char:

        push    di

        mov     di,si

        call    is_prefix               ;check for a prefix char

        pop     di

        jnc     nopre

        lodsw

        cmp     cx,1                    ; Can not compare a two byte char

        jz      try_again_opt1          ; if there is only one available

        cmp     ax,word ptr [di]

        jz      kmatch1

        call    next_kchar              ;no match, advance di to next kanji

        jc      try_again_opt1          ;not enough chars left in line

        jmp     short lop               ;try another char in line



nopre:

        lodsb

        cmp     al,byte ptr [di]

        jz      kmatch

        call    next_kchar              ;no match, advance di to next kanji

        jc      try_again_opt1          ;not enough chars left in line

        jmp     short lop               ;try another char in line



try_again_opt1:

        pop     dx

        jmp     try_again_opt





kmatch1:

        dec     dx                      ;last char had prefix so it was

                                        ; long.

kmatch:

        dec     dx

        jz      a_matchk                ; no chars left: a match!

        call    next_kchar

        jc      try_again_opt1

        jmp     comp_next_char          ; loop if chars left in arg.



a_matchk:

        pop     dx



ELSE



        mov     si,offset st_buffer     ;pointer to beg. of string argument

        lodsb                           ;get first character of the str. arg.

        repnz   scasb                   ;search for a match in current line

        jnz     try_again_opt           ;no match, try the next line

        cmp     cx,dx                   ;compare lengths, a full match is not

        jb      try_again_opt           ; possible if CX < DX.

        push    di                      ;save addrs. of next char. in the line

        push    cx                      ;save the # of chars. left in the line

        mov     cx,dx                   ;get the adjusted string arg. length

        jcxz    a_match                 ;if a single char string, then match!

        repz    cmpsb                   ;compare string with line

        jz      a_match                 ;a match found, hurrah!

        pop     cx                      ;no match, get # of chars remaining

                                        ; in the line.

        pop     di                      ;position of the next char. in the line

        jmp     another_char





;----- A MATCH: CHECK FOR THE v OPTION ------------------------------;

a_match:

        pop     ax                      ;adjust stack

        pop     ax

ENDIF



        cmp     ds:v_flg,0ffh           ;is flag set?

        jne     prt_line                ;no, print the line

        jmp     try_again



;----- NO MATCH: CHECK FOR THE v OPTION -----------------------------;

try_again_opt:

        cmp     ds:v_flg,0ffh           ;is flag set?

        jne     try_again               ;no goto next line



;----- PRINT THE LINE WITH THE MATCH --------------------------------;

;Note: at this point the stack contains (top to bottom)

;       - Stuff mentioned before

;

; plus, BP points to begginig of the current line, BX has the length

;of the current line including the CRLF, and DX the adjusted length of

;the string argument.



prt_line:

        cmp     ds:c_flg,0ffh           ;is count only flag set?

        jne     no_c_flg

        inc     ds:mtch_cntr            ;yes, increment counter

        jmp     try_again



no_c_flg:

        push    dx                      ;save the adjusted string arg. length

        cmp     ds:n_flg,0ffh           ;is line number flag set?

        jne     no_n_flg

        call    prt_lcntr

no_n_flg:

        mov     dx,bp

        mov     cx,bx

        call    prout

        pop     dx                      ;restore

        jmp     try_again



;----- READ MORE TEXT LINES INTO THE BUFFER -------------------------;

; The scanning routines have detected that the buffer does not

;contain a full line any more. More lines have to be read into the

;buffer. But first perform a seek on the file in order to re-read

;the non-complete line into the begining of the buffer.

; Uppon entry BP contains points to the begining of the non-complete

;line, and BX has the number of characters left in the buffer.

; The Stack contains (top to bottom):

;       - Pointer to the next command in the command line

;       - Pointer to the program segment prefix (to be loaded into

;         DS to access the command line).

;       - File handle.



more_stuff:

        mov     dx,bx                   ;get chars left in buffer

        pop     bx                      ;get the handle

        or      dx,dx                   ;are there 0 left?

        jz      no_seek                 ;yes, do not seek

        neg     dx                      ;form two's complement

        mov     cx,-1

        mov     al,1                    ;seek from the current position

        mov     ah,lseek                ;seek on file

        int     dos_ent

        jc      read_error

no_seek:

        jmp     refill                  ;no errors: refill the buffer

read_error:

        cmp     bx,std_in               ;Using STD IN?

        je      foo                     ;if so: all done, exit

        mov     ah,close                ;close the file

        int     dos_ent

        mov     dx,offset errmsg4_pre   ;read error

        mov     cl,cs:errlen4_pre

        call    prt_file_name           ;print the file name in error

        mov     dx,offset errmsg4_post  ;read error

        mov     cl,cs:errlen4_post

        jmp     r_error



;----- PRINT ERRORS -------------------------------------------------;

open_error:

        mov     dx,offset errmsg3_pre    ;error in open operation

        mov     cl,cs:errlen3_pre

        call    prt_err_2               ;print error message

        call    prt_file_name           ;print the file name in error

        mov     dx,offset errmsg3_post  ;error in open operation

        mov     cl,cs:errlen3_post

r_error:

        call    prt_err_2               ;print error message



;----- SCAN THE REST OF THE COMMAND LINE ----------------------------;

scan_rest:

        pop     ds                      ;restore pointer to comm. line

        pop     si                      ;restore pointer to next comm.

        call    kill_bl                 ;look for further args.

        or      bx,bx                   ;test for a CR

        jnz     foo

        jmp     further_args

foo:

        mov     al,0                    ;Proper code

done:

        mov     ah,exit                 ;All done, exit with proper code.

        int     dos_ent





;--------------------------------------------------------------------;

;            Get rid of blanks in command line.                      ;

;    Advances the SI reg till the next non-blank character, if the   ;

; character is a CR (0dh) then returns with BX non-zero, otherwise   ;

; BX is zero.                                                        ;

;                                                                    ;

; entry:                                                             ;

;       SI      points to the first character on the line to scan.   ;

;                                                                    ;

; exit:                                                              ;

;       SI      points to the first non-blank character found.       ;

;       BX      contains 0D hex if the first non-blank found is      ;

;                a Carriage Return, otherwise it is 0.               ;

;                                                                    ;

; modifies:                                                          ;

;       BX, SI, and AX                                               ;

;                                                                    ;

;--------------------------------------------------------------------;

kill_bl:

        cld                             ;increment

        xor     bx,bx                   ;zero bx to start: no CR found

no_bl:

        lodsb                           ;get rid of blanks

        cmp     al,' '

        je      no_bl

        cmp     al,CR

        jnz     no_cr

        mov     bx,ax                   ;make bx non-zero (actually 0dh)

no_cr:

        dec     si                      ;adjust pointer

        ret





;--------------------------------------------------------------------;

;               Clear Counters                                       ;

;--------------------------------------------------------------------;

clr_cntrs:

        mov     byte ptr es:mtch_cntr,0

        mov     byte ptr es:line_cntr,0

        ret



;--------------------------------------------------------------------;

;               Print Count of Matched lines                         ;

;                                                                    ;

;               Modifies: AX,CX,DX and DI                            ;

;--------------------------------------------------------------------;

print_count:

        push    bx                      ;save handle

        cmp     bx,std_in               ;using std_in?

        jz      sj3                     ;if so do not print file name



        mov     dx,offset colon

        mov     cx,2

        call    prout                   ;print colon

sj3:

        mov     ax,ds:mtch_cntr

        mov     di,offset n2_buf        ;buffer for characters

        call    bin2asc                 ;convert to ascii

        mov     dx,offset n2_buf

        call    prout                   ;print the number

        mov     dx,offset crlf

        mov     cx,2

        call    prout                   ;print an end of line

        pop     bx

        ret





;--------------------------------------------------------------------;

;               Print relative line number                           ;

;                                                                    ;

;               Modifies: AX,CX and DI                               ;

;--------------------------------------------------------------------;

prt_lcntr:

        push    bx

        push    dx

        mov     ax,ds:line_cntr

        mov     di,offset n2_buf

        call    bin2asc

        mov     byte ptr[di],"]"

        inc     cx

        inc     cx

        mov     dx,offset n1_buf

        call    prout

        pop     dx

        pop     bx

        ret



;--------------------------------------------------------------------;

;               Print string to STD_OUT                              ;

;--------------------------------------------------------------------;

prout:

        mov     bx,std_out

        mov     ah,write

        int     dos_ent

        ret





;--------------------------------------------------------------------;

;       Binary to Ascii conversion routine                           ;

;                                                                    ;

; Entry:                                                             ;

;       AX      Binary number                                        ;

;       DI      Points to one past the last char in the              ;

;             result buffer.                                         ;

;                                                                    ;

; Exit:                                                              ;

;       Result in the buffer MSD first                               ;

;       CX      Digit count                                          ;

;                                                                    ;

; Modifies:                                                          ;

;       AX,BX,CX,DX and DI                                           ;

;                                                                    ;

;--------------------------------------------------------------------;

bin2asc:

        mov     bx,0ah

        xor     cx,cx

go_div:

        inc     cx

        cmp     ax,bx

        jb      div_done

        xor     dx,dx

        div     bx

        add     dl,'0'          ;convert to ASCII

        push    dx

        jmp     short go_div



div_done:

        add     al,'0'

        push    ax

        mov     bx,cx

deposit:

        pop     ax

        stosb

        loop    deposit

        mov     cx,bx

        ret





;--------------------------------------------------------------------;

;       Print the current file name                                  ;

;                                                                    ;

; modifies:                                                          ;

;       DX, CX, BX and AX                                            ;

;--------------------------------------------------------------------;

prt_file_name:

        mov     dx,offset file_name_buf ;print the file name

        mov     cx,ds:file_name_len     ;retrive file name length

        jmp     short prt_err_2





;--------------------------------------------------------------------;

;       Print an error message to the Standart error                 ;

;                                                                    ;

; entry:                                                             ;

;       DX      has the pointer to the message                       ;

;       CX      has the length of the message                        ;

;                                                                    ;

; modifies:                                                          ;

;        BX and AX                                                   ;

;--------------------------------------------------------------------;

prt_err:

        push    ds                      ;Save the current DS

        push    cs                      ;Make DS point to the right

        pop     ds                      ; place, for DOS use.

        call    prt_err_2

        pop     ds

        ret



prt_err_2:

        xor     ch,ch

        mov     bx,std_err

        mov     ah,write

        int     dos_ent                 ;write error message

        ret





;--------------------------------------------------------------------;

;       CAPIALIZES THE CHARACTER IN AL                               ;

;                                                                    ;

;       entry:                                                       ;

;               AL      has the character to Capitalize              ;

;                                                                    ;

;       exit:                                                        ;

;               AL      has the capitalized character                ;

;                                                                    ;

;       modifies:                                                    ;

;               AL                                                   ;

;--------------------------------------------------------------------;

make_caps:

        cmp     al,'a'

        jb      no_cap

        cmp     al,'z'

        jg      no_cap

        and     al,0dfh

no_cap:

        ret







IF      KANJI



;--------------------------------------------------------------------;

;       ADVANCE POINTER TO NEXT KANJI CHARACTER                      ;

;                                                                    ;

; entry:        DI  points to a Kanji string                         ;

;               CX  length in bytes of the string                    ;

;                                                                    ;

; exit:         DI  points to next Kanji char                        ;

;               CX  has number of bytes left                         ;

;                                                                    ;

; modifies:     AX                                                   ;

;                                                                    ;

;--------------------------------------------------------------------;

next_kchar:

        jcxz    no_kleft

        call    is_prefix

        jnc     no_p

        inc     di

        dec     cx

        jcxz    no_kleft                ; for insurance

no_p:

        inc     di

        dec     cx

        clc

        ret



no_kleft:

        stc

        ret





;--------------------------------------------------------------------;

;       FIND OUT IS THE BYTE IS A KANJI PREFIX                       ;

;                                                                    ;

; entry:  DI    points to a kanji string                             ;

;                                                                    ;

; exit:   Carry set if it is a kanji prefix                          ;

;                                                                    ;

; modifies:     AX                                                   ;

;                                                                    ;

;--------------------------------------------------------------------;

is_prefix:

        mov     al,byte ptr [di]

        cmp     al,81h

        jb      nok

        cmp     al,0a0h

        jb      isk

        cmp     al,0e0h

        jb      nok

        cmp     al,0fdh

        jb      isk

nok:

        clc

        ret

isk:

        stc

        ret



ENDIF





;----- PATCH AREA ---------------------------------------------------;



patch_area      dw      100h dup(?)







;----- BUFFER AREA --------------------------------------------------;

st_length dw    0                       ;String argumnet length

st_buffer db    st_buf_size dup(?)      ;String argument buffer



file_name_len dw 0                      ;File name length

file_name_buf db fname_buf_size+1 dup(?)  ;File name buffer,(allow for

                                        ; null at the end).



buffer  db      buffer_size+1 dup(?)    ;file buffer, the last byte is

                                        ;a guard in case of forced insertion

                                        ;of a CRLF pair.



;----- ERROR MESSAGES -----------------------------------------------;

        EXTRN   bad_vers:byte,crlf:byte,errmsg1:byte,errlen1:byte,errmsg2:byte

        EXTRN   errmsg3_pre:byte,errlen3_pre:byte

        EXTRN   errmsg3_post:byte,errlen3_post:byte

        EXTRN   errmsg4_pre:byte,errlen4_pre:byte

        EXTRN   errmsg4_post:byte,errlen4_post:byte

        EXTRN   heading:byte,heading_len:byte,errlen2:byte

        EXTRN   errmsg5:byte,errmsg5_opt:byte,errlen5:byte

code    ends





;----- STACK AREA ---------------------------------------------------;

stack   segment stack



        dw      64 dup(?,?)

stack_top equ   $



stack   ends



        end     start

                                                                         