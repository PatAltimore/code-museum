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
description: "This file implements the FIND command for MS-DOS 2.0, introducing Unix-inspired text searching capabilities to the DOS environment."

summary:
  - point: "Introduces Unix-style text searching to MS-DOS"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Supports options like counting lines and printing line numbers"
    link: "https://en.wikipedia.org/wiki/Command-line_interface"
    link_label: "Command-line interface"
  - point: "Handles Kanji characters, showcasing early internationalization efforts"
    link: "https://en.wikipedia.org/wiki/Kanji"
    link_label: "Kanji"
  - point: "Optimized for constrained memory environments of the IBM PC"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Uses direct hardware interrupts for DOS system calls"
    link: "https://en.wikipedia.org/wiki/Interrupt"
    link_label: "Interrupt"

enhancements:
  - id: "option-flags-table"
    line_start: 293
    line_end: 333
    title: "The Table That Tracks User Options"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "This section defines the `opt_tbl`, a table of flags that tracks which command-line options the user has selected. Each flag corresponds to a specific option, such as `/v` for excluding matching lines, `/c` for counting matches, and `/n` for numbering lines. The flags are initialized to 0 (unset) and updated to 0xFF (set) during option parsing. The design ensures that the order of flags in the table matches the dispatch logic later in the code. In 1983, command-line interfaces were becoming more common, but the concept of user-selectable options was still evolving. MS-DOS 2.0 borrowed heavily from Unix, which had popularized the idea of flexible command-line tools. The `opt_tbl` reflects this influence, enabling FIND to mimic Unix's grep utility. This approach became a standard pattern in DOS utilities and influenced later command-line tools in Windows, Linux, and beyond. The use of a centralized flag table simplified option handling and made it easier to extend the program with new features. Developers studying this code would later adopt similar techniques in their own programs, cementing the flag table as a staple of command-line software design."
  - id: "version-checking-routine"
    line_start: 337
    line_end: 363
    title: "Why FIND Refuses to Run on DOS 1.x"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `start` routine begins by checking the DOS version number using interrupt 21h, function 48h (`get_version`). If the version is less than 2.0, the program exits with an error message. This ensures compatibility with the new features introduced in MS-DOS 2.0, such as subdirectories and enhanced file handling. In the early 1980s, backward compatibility was a major concern for software developers. MS-DOS 1.x lacked many of the features that became standard in later versions, and programs like FIND had to account for these limitations. By explicitly checking the version number, the developers avoided unpredictable behavior on older systems. This technique of version checking became a common practice in software development, especially during periods of rapid evolution in operating systems. It highlighted the growing pains of an industry transitioning from simple, single-task systems to more complex, multitasking environments. The routine also underscores the influence of Unix on MS-DOS 2.0, as many of its new features were inspired by Unix-like systems such as XENIX."
  - id: "option-parsing-routine"
    line_start: 381
    line_end: 503
    title: "How FIND Deciphers Command-Line Options"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The `find_opt` and subsequent routines parse the command-line options provided by the user. The program retrieves the DOS switch character (typically `/` on IBM PCs) and checks for valid options (`v`, `c`, `n`). Invalid options trigger an error message, while valid options set the corresponding flags in the `opt_tbl`. Command-line parsing was a critical feature for utilities like FIND, which needed to accommodate various user preferences while operating in a constrained memory environment. The parsing logic reflects the simplicity and efficiency required for early PCs, where every byte of memory was precious. This approach to option parsing influenced countless command-line programs in the decades that followed. The use of a dedicated routine for parsing options, coupled with error handling for invalid inputs, became a standard practice. It also laid the groundwork for more sophisticated argument parsers in modern programming languages and frameworks, such as Python's argparse module and Java's Apache Commons CLI."
  - id: "string-parsing-routine"
    line_start: 509
    line_end: 567
    title: "The Double-Quote Rule for FIND Strings"
    wikipedia_url: "https://en.wikipedia.org/wiki/String_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The `find_str` and `move_str` routines handle the parsing of the search string provided by the user. The string must be enclosed in double quotes, with two consecutive double quotes used to escape a literal quote character. The program validates the input, ensuring it starts and ends with a quote and stores the string in a dedicated buffer. This strict parsing logic reflects the constraints of early command-line interfaces, where input had to be carefully validated to avoid crashes or unpredictable behavior. The double-quote rule mirrors Unix conventions, further emphasizing MS-DOS 2.0's reliance on Unix as a model. The handling of quoted strings in FIND influenced later DOS utilities and even modern programming languages, where escaping characters within strings remains a common requirement. The routine also highlights the challenges of working with limited memory, as the string buffer size is fixed, and exceeding it would cause the program to fail. This constraint shaped the design of many early software systems, forcing developers to prioritize efficiency and robustness."
  - id: "file-name-parsing-routine"
    line_start: 615
    line_end: 667
    title: "How FIND Handles File Names and STDIN"
    wikipedia_url: "https://en.wikipedia.org/wiki/Standard_streams"
    image_url: ""
    image_caption: ""
    content: "The `move_fname` and `done_move` routines parse file names from the command line, storing them in a buffer and ensuring they are null-terminated. If no file name is provided, the program defaults to reading from standard input (STDIN). This dual-mode operation allows FIND to process both files and piped input, making it versatile for batch processing and scripting. In the early 1980s, the concept of standard streams (STDIN, STDOUT, STDERR) was borrowed from Unix and introduced to MS-DOS 2.0. This innovation enabled utilities like FIND to work seamlessly with other programs, fostering the development of pipelines and modular workflows. The ability to handle both files and STDIN became a hallmark of command-line utilities, influencing the design of tools in Unix, Linux, and Windows environments. It also paved the way for scripting languages like Perl and Python, which built on these principles to offer powerful text-processing capabilities. The routine demonstrates how MS-DOS 2.0 bridged the gap between simple file-based operations and more sophisticated inter-process communication."
  - id: "buffer-handling-routine"
    line_start: 715
    line_end: 753
    title: "The 4KB Buffer That Powers FIND"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `fill` and `refill` routines manage the 4KB buffer used to read data from files or STDIN. The buffer size is carefully chosen to balance memory constraints with performance, allowing FIND to process large files efficiently without overwhelming the limited RAM of early PCs. The routines use DOS interrupts to read data and handle errors gracefully. Buffer management was a critical skill for programmers in the 1980s, as hardware limitations required careful planning to avoid crashes or slowdowns. The 4KB buffer reflects the constraints of the IBM PC, which typically had 64KB to 640KB of RAM. By optimizing buffer size and handling, FIND demonstrates the ingenuity required to work within these limitations. This approach to buffer management influenced later software systems, including text editors, file managers, and network protocols. The principles demonstrated here—efficient use of memory, error handling, and adaptability—remain relevant in modern computing, especially in embedded systems and resource-constrained environments."
  - id: "line-matching-routine"
    line_start: 783
    line_end: 823
    title: "How FIND Matches Lines in a File"
    wikipedia_url: "https://en.wikipedia.org/wiki/String_searching_algorithm"
    image_url: ""
    image_caption: ""
    content: "The `go_match` routine scans lines in the buffer to find matches with the user-provided search string. It ensures that incomplete lines at the end of the buffer are handled correctly by appending a carriage return and line feed (CRLF). This guarantees that each line is properly terminated, preventing errors during string comparison. String searching was a fundamental operation in text-processing utilities, and FIND's implementation reflects the challenges of working with raw text data in constrained environments. The use of CRLF termination highlights the influence of DOS's text file conventions, which differed from Unix's newline-only approach. The routine's careful handling of line termination and string matching influenced the development of more sophisticated text-processing tools, including modern search engines and regular expression libraries. It also demonstrates the importance of robust error handling and edge-case management, lessons that remain relevant for software developers today."
  - id: "kanji-handling-routine"
    line_start: 897
    line_end: 1005
    title: "FIND's Early Support for Kanji Characters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Kanji"
    image_url: ""
    image_caption: ""
    content: "The `another_char`, `lop`, and `comp_next_char` routines implement support for Kanji characters, a significant step toward internationalization in MS-DOS. Kanji characters, used in Japanese writing, are multi-byte, requiring special handling to ensure correct string matching. The routines check for prefix characters and adjust the comparison logic accordingly. In 1983, internationalization was a growing concern as personal computers began to reach global markets. Supporting Kanji characters required overcoming technical challenges, such as handling variable-length encodings in a system originally designed for single-byte ASCII. The developers of MS-DOS 2.0 recognized the importance of accommodating non-English languages, even though the IBM PC was initially targeted at English-speaking users. This early effort to support international character sets paved the way for more comprehensive localization features in later versions of DOS and Windows. It also influenced the development of Unicode, which aimed to standardize character encoding across languages. The Kanji-handling routines in FIND are a testament to the foresight of MS-DOS's developers and their commitment to making computing accessible to a global audience."
  - id: "string-matching-with-repnz"
    line_start: 1055
    line_end: 1061
    title: "String Matching with REP Instructions"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section implements the core string matching logic for the FIND command. Using the `REPZ` and `REPNZ` instructions, the routine efficiently scans for a substring within a line of text. The programmer's goal here was to optimize performance on the Intel 8086 processor, which lacked modern string manipulation libraries. At the time, MS-DOS was designed to run on machines with limited memory (often 64KB or less) and no hardware acceleration for text processing. The use of REP instructions reflects the influence of Unix-like tools, as MS-DOS v2.0 incorporated features inspired by XENIX. This approach became a standard for text processing in early DOS utilities, influencing later tools like GREP in Unix and similar utilities in Windows."
  - id: "error-handling-in-file-operations"
    line_start: 1189
    line_end: 1209
    title: "Error Handling in File Operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This routine handles errors encountered during file reading operations. It checks if the input source is standard input (STDIN) and gracefully exits if so, or attempts to close the file and print an error message otherwise. Error handling was critical in MS-DOS, as the operating system was used in environments where user experience depended heavily on clear feedback during failures. Tim Paterson and the Microsoft team prioritized robust error reporting to make the system accessible to non-technical users. This approach influenced error handling conventions in later operating systems, including Windows, where clear error messages became a hallmark of usability."
  - id: "binary-to-ascii-conversion"
    line_start: 1459
    line_end: 1535
    title: "Binary to ASCII Conversion Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/ASCII"
    image_url: ""
    image_caption: ""
    content: "This routine converts binary numbers to ASCII characters for display purposes. It uses division and modulus operations to extract digits, converting them to ASCII by adding the value of '0'. At the time, displaying numbers in a human-readable format was a common requirement for command-line utilities, as graphical interfaces were rare. The routine demonstrates the programmer's deep understanding of low-level arithmetic and memory management. Techniques like this were foundational for early software development, influencing later programming languages and libraries that abstracted such operations for developers."
  - id: "kanji-character-processing"
    line_start: 1667
    line_end: 1721
    title: "Kanji Character Processing for Internationalization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Kanji"
    image_url: ""
    image_caption: ""
    content: "This section introduces routines for handling Kanji characters, reflecting Microsoft's early efforts to support internationalization. The `next_kchar` and `is_prefix` routines identify and process Kanji prefixes, ensuring proper handling of multi-byte characters. In the early 1980s, the rise of personal computing in Japan necessitated support for Kanji, a complex writing system. MS-DOS v2.0's inclusion of Kanji processing routines highlights Microsoft's ambition to expand into global markets. These routines laid the groundwork for later internationalization efforts in Windows, which became a dominant platform worldwide."
  - id: "isk-subroutine-stc-ret"
    line_start: 1791
    line_end: 1792
    title: "A Two-Instruction Subroutine: Why So Minimal?"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The 'isk' subroutine consists of only two instructions: 'stc' (set carry flag) and 'ret' (return). This brevity suggests it was designed as a placeholder or a stub for a larger operation that was either removed or deferred. The carry flag is often used to signal an error or special condition in assembly programming, meaning this routine could have been a quick way to indicate a status before returning control. At the time, MS-DOS was evolving rapidly, and minimal subroutines like this were common in early software, allowing developers to reserve functionality for future updates or debugging purposes. The simplicity of 'isk' reflects the constraints of assembly language programming and the need for efficiency in an era when every byte of memory mattered. While this specific subroutine may not have had a lasting impact, its existence underscores the iterative and modular nature of MS-DOS development, where placeholders and stubs were part of the workflow."
  - id: "patch-area-runtime-modifications"
    line_start: 1799
    line_end: 1811
    title: "The Patch Area: Preparing for Unknowns"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The 'patch_area' is a reserved block of memory defined as 'dw 100h dup(?)', allocating 256 words (512 bytes) for runtime modifications or updates. This area was likely intended for dynamic changes to the program's behavior, such as bug fixes, feature additions, or OEM-specific customizations. In the early 1980s, software updates were rare and often required manual intervention, such as loading patches from floppy disks. By reserving a dedicated patch area, MS-DOS developers ensured that the system could adapt to unforeseen requirements without requiring a complete rewrite. This approach reflects the pragmatic mindset of the era, where flexibility and foresight were crucial in a rapidly evolving market. The concept of a patch area influenced later software practices, including the use of reserved memory regions for hotfixes and updates in modern operating systems."
  - id: "buffer-area-string-file-handling"
    line_start: 1815
    line_end: 1839
    title: "Buffers: The Unsung Heroes of File I/O"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "This section defines multiple buffers for string arguments, file names, and file data. Buffers like 'st_buffer', 'file_name_buf', and 'buffer' are allocated with specific sizes, ensuring controlled memory usage and preventing overflow. The inclusion of a guard byte in the file buffer highlights the developers' attention to edge cases, such as forced insertion of CRLF pairs (carriage return and line feed). In the early days of MS-DOS, efficient file handling was critical due to limited system resources and slow disk access speeds. These buffers enabled streamlined I/O operations while minimizing the risk of errors. The design principles seen here—buffer allocation, size constraints, and guard bytes—became foundational in software engineering, influencing everything from database systems to network protocols. Modern developers still rely on similar techniques, though often abstracted by higher-level languages and frameworks."
  - id: "error-messages-external-references"
    line_start: 1845
    line_end: 1857
    title: "Error Messages: Modular and Extensible Design"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_message"
    image_url: ""
    image_caption: ""
    content: "This section lists external references to error messages and their lengths, such as 'bad_vers', 'errmsg1', and 'errmsg5'. By defining these messages externally, MS-DOS achieved modularity, allowing error handling to be updated or localized without altering the core program logic. Error messages were crucial for guiding users through troubleshooting, especially in an era when technical documentation was sparse and user interfaces were text-based. The modular approach seen here reflects the influence of Unix-like systems, where externalized resources were common. This design philosophy paved the way for modern practices, such as separating user-facing strings into resource files for localization and customization. The extensibility of error handling in MS-DOS contributed to its adaptability across diverse hardware platforms and international markets, solidifying its dominance in the PC operating system landscape."
  - id: "stack-area-program-execution"
    line_start: 1847
    line_end: 1857
    title: "Stack Setup: The Backbone of Execution"
    wikipedia_url: "https://en.wikipedia.org/wiki/Call_stack"
    image_url: ""
    image_caption: ""
    content: "The 'stack' segment defines a 64-word stack area, providing temporary storage for function calls, local variables, and return addresses. The 'stack_top' equates to the current end of the stack, ensuring proper alignment for program execution. In assembly language, the stack is a critical structure for managing control flow and preserving state during subroutine calls. MS-DOS's stack setup reflects the constraints of the 8086 processor, which featured a 16-bit architecture and limited memory addressing capabilities. By carefully managing the stack, developers maximized efficiency and reliability in a resource-constrained environment. The stack's role in MS-DOS influenced subsequent operating systems, which adopted similar mechanisms for managing execution contexts. Today, stacks remain a fundamental concept in computer science, underpinning recursive algorithms, exception handling, and multitasking in modern software."

---

```asm
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


```