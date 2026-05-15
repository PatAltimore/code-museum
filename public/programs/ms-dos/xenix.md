---
title: "XENIX.ASM (v2.0)"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/XENIX.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/XENIX.ASM"
year: 1983
author: "Microsoft"
slug: "xenix"
order: 3
description: "The Unix layer — named after Microsoft's own Unix variant, this file gave DOS subdirectories, pipes, and file handles"

summary:
  - point: "XENIX was Microsoft's own Unix port to x86 — the v2.0 Unix API additions were modeled directly on it"
    link: "https://en.wikipedia.org/wiki/Xenix"
    link_label: "Xenix"
  - point: "MS-DOS 2.0 was a near-complete rewrite that added subdirectories, file handles, pipes, and device drivers"
    link: "https://en.wikipedia.org/wiki/MS-DOS#MS-DOS_2.x"
    link_label: "MS-DOS 2.x"
  - point: "The file handle model replaced FCBs and became the standard file I/O interface for all subsequent DOS and Windows programming"
    link: "https://en.wikipedia.org/wiki/File_descriptor"
    link_label: "File descriptor"

enhancements:
  - id: "xenix-name"
    line_start: 1
    line_end: 22
    title: "Why This File Is Named XENIX"
    wikipedia_url: "https://en.wikipedia.org/wiki/Xenix"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Xenix_logo.svg/440px-Xenix_logo.svg.png"
    image_caption: "XENIX was Microsoft's own Unix port, licensed from AT&T. Its API directly influenced MS-DOS 2.0. Public domain."
    content: "The title comment says it plainly: 'xenix file calls for MSDOS.' XENIX was Microsoft's own Unix operating system — a port of Unix Version 7 to x86, licensed from AT&T in 1979 and sold by Microsoft from 1980 onward. When the IBM PC proved that 16-bit personal computers could be serious machines, Microsoft decided to bring Unix's hierarchical filesystem and file handle model to DOS. Rather than invent a new API, they copied XENIX's. The TITLE directive inside confirms it: 'XENIX - IO system to mimic UNIX.' This file is the architectural bridge between the two most important operating systems of the 1980s — the Unix tradition that ran on university workstations and minicomputers, and the DOS tradition that ran on desks worldwide. Microsoft owned both sides of that bridge, which is why the connection was so direct."

  - id: "unix-names"
    line_start: 63
    line_end: 90
    title: "Unix Procedure Names Copied Verbatim"
    wikipedia_url: "https://en.wikipedia.org/wiki/Unix_philosophy"
    image_url: ""
    image_caption: ""
    content: "The local data segment declares the variables that the Unix-style file calls share: open_name, open_access, open_jfn (job file number — the Unix term for what DOS calls a file handle), open_sfn (system file number), open_sfoff, open_devid. The names are Unix through and through. JFN was the PDP-10 term; file descriptor was the Unix V7 term; DOS called them handles — but the internal variable name open_jfn reveals the lineage. The DATA segment also holds rename_source and rename_dest as doubleword (32-bit far) pointers — a sign that MS-DOS 2.0's path handling operated in a segment:offset address space that FCB-based v1.x never needed. These variable names were not translated or localized for the DOS world. They were copied from XENIX, because the code was copied from XENIX."

  - id: "validate-path"
    line_start: 64
    line_end: 140
    title: "Validate_path: The Code That Made Subdirectories Possible"
    wikipedia_url: "https://en.wikipedia.org/wiki/Path_(computing)"
    image_url: ""
    image_caption: ""
    content: "Validate_path is the gatekeeper for MS-DOS 2.0's most significant new feature: hierarchical subdirectories. The procedure takes a path string in DS:DX and checks it for validity before any file operation proceeds. It handles the edge cases that define a path grammar: a NUL path is malformed; a path that is just 'd:' is malformed; a trailing path separator is valid only for root ('/' or 'd:/'); double path separators are malformed; wildcard characters ('?' and '*') are errors in a path context. The KANJI conditional (lines 73-79) is a sign of geographic ambition — even in 1983, Microsoft was building for Japan. PathChrCmp is an abstracted comparison that handles both '/' and '\\' as path separators. The procedure's output feeds Access_path, which calls GetPath to do the actual directory traversal. Together these two procedures are the reason you could type 'C:\\DOS\\COMMAND.COM' and have it work — that capability did not exist before MS-DOS 2.0."

  - id: "system-file-table"
    line_start: 155
    line_end: 185
    title: "The System File Table: The Mechanism Behind I/O Redirection"
    wikipedia_url: "https://en.wikipedia.org/wiki/Standard_streams"
    image_url: ""
    image_caption: ""
    content: "The comment block describing the system file table reveals the architecture behind MS-DOS 2.0's most Unix-like feature: I/O redirection and pipes. The system file table is a linked list of two linear tables. The first is the DOS initialization table with a default number of FCBs. The first word in each table is a link to the next table; the second word is the count of entries. This linked-list design meant the number of simultaneously open files could be configured in CONFIG.SYS — a flexibility that FCB-based DOS 1.x never had. Each entry in the table is a System File Number (SFN) record. The JFN (job file number) in a program's Process Descriptor Block (PDB) is an index into the table. When you typed 'DIR > output.txt', DOS redirected JFN 1 (standard output) to point to the output file's SFN. Pipes worked the same way, with one process's stdout SFN feeding another process's stdin. This is Unix file descriptor semantics, transplanted into 8086 assembly."

---

;
; xenix file calls for MSDOS
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

TITLE   XENIX - IO system to mimic UNIX
NAME    XENIX

        i_need  NoSetDir,BYTE
        i_need  CURDRV,BYTE
        i_need  IOCALL,BYTE
        i_need  IOMED,BYTE
        i_need  IOSCNT,WORD
        i_need  IOXAD,DWORD
        i_need  DIRSTART,WORD
        i_need  ATTRIB,BYTE
        i_need  THISFCB,DWORD
        i_need  AuxStack,BYTE
        i_need  Creating,BYTE
        i_need  ThisDRV,BYTE
        i_need  NAME1,BYTE
        i_need  LastEnt,WORD
        i_need  ThisDPB,DWORD
        i_need  EntLast,WORD
        i_need  CurrentPDB,WORD
        i_need  sft_addr,DWORD              ; pointer to head of table
        i_need  CURBUF,DWORD                ; pointer to current buffer
        i_need  DMAADD,DWORD                ; pointer to current dma address

BREAK <Local data>

CODE        ENDS
DATA        SEGMENT BYTE PUBLIC 'DATA'

open_name   DW  ?
            DW  ?
open_access DB  ?
open_jfn    DW  ?                       ; accessed as DD
open_jfn_b  DW  ?                       ; accessed as DD with above
open_sfn    DW  ?
open_sfoff  DW  ?                       ; accessed as DD
open_sfn_b  DW  ?                       ; accessed as DD with above
open_devid  DB  ?
Cr_read_only    DB  ?
rename_source   DD  ?
rename_dest     DD  ?

DATA        ENDS
CODE        SEGMENT BYTE PUBLIC  'CODE'

BREAK <Validate_path - check to see if there are meta characters in path>

;
; Input: DS:DX is an ASCIZ path
; Output: Carry set if meta-characters present or path malformed and
;           Zero is set if the only problem is that meta-characters
;               are present in the last element of the path
procedure Validate_path,near
        ASSUME  DS:NOTHING,ES:NOTHING
        PUSH    AX
        PUSH    CX
        PUSH    SI
        MOV     SI,DX
        MOV     CX,0FFH                 ;No path seps yet
        MOV     AX,[SI]                 ; Get first two bytes
        OR      AL,AL
        JZ      validate_malformed      ; NUL path
        CMP     AH,':'
        JNZ     validate_loop           ; OK so far
        CMP     BYTE PTR [SI+2],0
        JZ      validate_malformed      ; NUL path (just d:)
validate_loop:
        LODSB
validate_loop1:

        IF      KANJI
        invoke  TESTKANJ
        JZ      NOTKANJ6
        INC     SI
        JMP     validate_loop

NOTKANJ6:
        ENDIF

        OR      AL,AL
        JZ      validate_end
        CMP     AL,"?"
        JZ      validate_error
        CMP     AL,"*"
        JZ      validate_error
        invoke  PathChrCmp
        JNZ     validate_loop
        JCXZ    validate_malformed      ;If path sep, cannot have meta yet
        LODSB                           ;Look ahead one char
        OR      AL,AL
        JZ      validate_checktslsh     ;Trailing path sep
        invoke  PathChrCmp
        JNZ     validate_loop1          ;Double path sep?
validate_malformed:
        INC     CX
        OR      CX,CX                   ;Reset zero
        JMP     SHORT validate_set_carry

validate_error:
        XOR     CX,CX                   ;Flag metas found
        JMP     validate_loop

validate_checktslsh:
;A bizarre case, "/" is OK, "d:/" is OK, anything else is an error
        SUB     SI,DX
        CMP     SI,2
        JZ      validate_end            ;Two chars, the '/' and the NUL
        CMP     SI,4
        JNZ     validate_malformed      ;Four chars, "D:/<NUL>"
        MOV     SI,DX
        CMP     BYTE PTR [SI+1],':'
        JNZ     validate_malformed      ;Second char must be a ':'

validate_end:
        OR      CX,CX                   ;Clears carry
        JNZ     validate_ok             ;No metas found, leave carry clear
validate_set_carry:
        STC
validate_ok:
        POP     SI
        POP     CX
        POP     AX
        return
validate_path   ENDP

BREAK <Access_path - determine if file found>

;
; Input: DS:DX point to a path
; Output: Carry reset - outputs of GetPath
;         carry set - AL has error code
;
        procedure   Access_path,NEAR
        ASSUME  DS:NOTHING,ES:NOTHING
        CALL    Validate_path
        JC      access_no_path
        MOV     SI,DX
        invoke  GetPath
        retnc
        MOV     AL,error_file_not_found
        OR      CL,CL
        JNZ     access_ret
access_no_path:
        MOV     AL,error_path_not_found
access_ret:
        STC
        return
access_path ENDP

BREAK <Find_free_jfn - return a free jfn in users PDB>
;
; system file table data
;

;
; The system file table is two linear tables.  The first table is the
; DOS initialization table containing a default number of FCBs.  The
; first word in the table is a link to the second table, which
; SYSINIT sets up, the second word is the number of FCBs in the table.
;
