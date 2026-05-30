---
title: "XENIX.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/XENIX.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/XENIX.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "xenix"
order: 3
description: "This file represents a key transitional moment in MS-DOS's evolution, incorporating Unix-inspired features to expand its capabilities for multitasking and file management."

summary:
  - point: "MS-DOS 2.0 introduced subdirectories and file handles, inspired by Unix."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "XENIX compatibility added Unix-like system calls for advanced file operations."
    link: "https://en.wikipedia.org/wiki/Xenix"
    link_label: "XENIX"
  - point: "Tim Paterson's assembly code laid the foundation for IBM PC software dominance."
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"

enhancements:
  - id: "include-kanji-flag"
    line_start: 13
    line_end: 85
    title: "Why MS-DOS Checked for Kanji Support"
    wikipedia_url: "https://en.wikipedia.org/wiki/Kanji"
    image_url: ""
    image_caption: ""
    content: "This section sets up the Kanji flag, a feature that allowed MS-DOS to support Japanese character encoding. At the time, the global computing market was expanding rapidly, and Japan was a major player in the industry. Supporting Kanji was essential for MS-DOS's adoption in Japanese markets. The flag is set to 'false' by default, but the conditional structure allows for easy toggling. This reflects Microsoft's strategy to make MS-DOS adaptable for international OEMs. Later versions of MS-DOS and Windows would build on this groundwork, incorporating more robust internationalization features."
  - id: "validate-path-meta-characters"
    line_start: 89
    line_end: 285
    title: "The Algorithm That Sanitized File Paths"
    wikipedia_url: "https://en.wikipedia.org/wiki/Path_(computing)"
    image_url: ""
    image_caption: ""
    content: "This subroutine, `Validate_path`, checks file paths for meta-characters like `*` and `?`, ensuring they conform to expected formats. At the time, MS-DOS was transitioning to a hierarchical file system inspired by Unix, which required stricter path validation. The code handles edge cases like trailing slashes and malformed paths, reflecting the challenges of adapting a flat file system to support subdirectories. This validation logic influenced later file systems, including FAT and NTFS, and became a standard practice in operating systems to prevent errors and security vulnerabilities."
  - id: "find-free-jfn"
    line_start: 287
    line_end: 411
    title: "How MS-DOS Found Free File Handles"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_descriptor"
    image_url: ""
    image_caption: ""
    content: "The `Find_free_jfn` subroutine searches for an available Job File Number (JFN) in the user's Process Descriptor Block (PDB). This mechanism was inspired by Unix's file descriptor system, which allowed efficient multitasking and resource management. By scanning linear tables for unused entries, the code optimized file handle allocation in constrained memory environments. This approach was critical for MS-DOS's ability to support multiple open files simultaneously, a feature that became foundational for modern operating systems."
  - id: "open-file-handle"
    line_start: 89
    line_end: 127
    title: "Opening Files in MS-DOS: A Unix-Inspired Twist"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `$Open` procedure implements file opening logic, validating access modes and allocating system resources. Inspired by Unix's open system call, it introduced file handles to MS-DOS, replacing the older FCB (File Control Block) method. This transition allowed MS-DOS to handle files more flexibly and efficiently, paving the way for features like pipes and redirection. The code includes checks for read-only attributes and device files, reflecting the complexity of managing diverse file types in a single interface. This design influenced later operating systems, including Windows, which retained the file handle concept."
  - id: "unlink-delete-file-entry"
    line_start: 803
    line_end: 881
    title: "Deleting Files: The Birth of Unlink in MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Unlink_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `$UNLINK` procedure deletes a file entry by marking its directory entry as unused (0xE5). This approach was inspired by Unix's `unlink` system call, which removes file references while preserving the underlying data until all references are gone. In MS-DOS, this logic was simpler due to the lack of hard links, but it laid the groundwork for more sophisticated file systems. The procedure also flushes buffers to ensure data integrity, a critical step in environments with limited memory and storage. This method became a standard for file deletion in early operating systems."
  - id: "create-new-file"
    line_start: 885
    line_end: 981
    title: "Creating Files: A New Era for MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `$CREAT` procedure creates a new file and opens it for input. It validates the file path, sets attributes like read-only, and allocates system resources. This functionality was a direct adaptation of Unix's `creat` system call, which simplified file creation by combining it with opening. By introducing this feature, MS-DOS expanded its capabilities for application development, enabling more complex software to manage files dynamically. The procedure's logic influenced later APIs, including the Windows CreateFile function, which remains a cornerstone of file management in modern systems."
  - id: "dup-force-handle-reference-count"
    line_start: 1019
    line_end: 1061
    title: "How MS-DOS Managed File Handle Duplication"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_descriptor"
    image_url: ""
    image_caption: ""
    content: "The `dup_force` subroutine increases the reference count of a file handle, allowing multiple references to the same file descriptor. This is achieved by incrementing the `sf_ref_count` field in the system file table. At the time, MS-DOS was adapting Unix-like file handling concepts, where file descriptors were central to resource management. Tim Paterson and Microsoft engineers were working within the constraints of the IBM PC's limited memory and processing power, making efficient use of system tables essential. This approach influenced later operating systems, such as Windows and Linux, which adopted similar mechanisms for managing file descriptors and system resources."
  - id: "chmod-attribute-modification"
    line_start: 1149
    line_end: 1217
    title: "Changing File Attributes in Assembly"
    wikipedia_url: "https://en.wikipedia.org/wiki/Chmod"
    image_url: ""
    image_caption: ""
    content: "The `chmod` subroutine allows modification of file attributes, such as read-only or system flags. This was inspired by Unix's `chmod` command but adapted for MS-DOS's simpler file system. The code checks permissions and updates the directory entry's attribute byte. In 1983, this was a novel feature for a consumer-grade operating system, as it introduced granular control over file properties. The implementation reflects the influence of XENIX, Microsoft's Unix variant, on MS-DOS v2.0. This feature became standard in subsequent operating systems, enabling advanced file management capabilities for both users and programs."
  - id: "current-dir-dump"
    line_start: 1221
    line_end: 1343
    title: "Dumping Current Directory to User Space"
    wikipedia_url: "https://en.wikipedia.org/wiki/Working_directory"
    image_url: ""
    image_caption: ""
    content: "The `$CURRENT_DIR` subroutine retrieves the current working directory and places it in a user-provided memory area. This functionality was essential for enabling hierarchical file systems, a significant step forward from MS-DOS v1.0's flat file structure. The code uses system buffers to extract and format directory data, reflecting the influence of Unix's directory handling. By introducing this capability, MS-DOS v2.0 allowed applications to navigate complex directory trees, paving the way for more sophisticated file management tools and user interfaces in later operating systems."
  - id: "rename-directory-entries"
    line_start: 1349
    line_end: 1495
    title: "Renaming Files Across Devices"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rename_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `$RENAME` subroutine moves directory entries, effectively renaming files or directories. It checks access permissions, validates paths, and ensures the source and destination are on the same device. This reflects the challenges of implementing file system operations on early hardware, where device boundaries were rigidly enforced. The subroutine's complexity highlights MS-DOS v2.0's shift toward professional-grade features inspired by Unix. This functionality became foundational for file management utilities and influenced similar operations in later operating systems, including Windows Explorer's file renaming capabilities."
  - id: "find-first-file-matching"
    line_start: 1499
    line_end: 1715
    title: "Finding the First Matching File"
    wikipedia_url: "https://en.wikipedia.org/wiki/Glob_(programming)"
    image_url: ""
    image_caption: ""
    content: "The `$FIND_FIRST` subroutine searches for the first file matching a given pattern. It validates paths, checks attributes, and formats the result into a buffer for user access. This feature introduced wildcard-based file searching to MS-DOS, a concept borrowed from Unix's globbing mechanism. In the constrained environment of the IBM PC, this functionality was implemented with careful attention to memory usage and performance. It became a cornerstone of command-line utilities and graphical file explorers, influencing file search mechanisms in modern operating systems like Windows and Linux."
  - id: "find-next-file-matching"
    line_start: 1719
    line_end: 1801
    title: "Scanning for the Next Matching File"
    wikipedia_url: "https://en.wikipedia.org/wiki/Glob_(programming)"
    image_url: ""
    image_caption: ""
    content: "The `$FIND_NEXT` subroutine continues a search initiated by `$FIND_FIRST`, scanning for subsequent matching files. It uses directory buffers and attribute checks to locate the next entry. This iterative approach to file searching was crucial for enabling batch operations and file management tasks. The implementation demonstrates MS-DOS v2.0's Unix-inspired enhancements, which prioritized flexibility and efficiency. This technique influenced the design of file search APIs in later operating systems, supporting features like recursive searches and advanced filtering."
  - id: "do-ext-final-section"
    line_start: 1805
    line_end: 1809
    title: "The Final Code Block: Wrapping Up MS-DOS v2.0"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `do_ext` section marks the end of the XENIX.ASM file, concluding MS-DOS v2.0's assembly code. While the specific purpose of this block is unclear, its presence underscores the meticulous organization required in assembly programming for early operating systems. The file's completion reflects the culmination of Microsoft's effort to integrate Unix-like features into MS-DOS, transforming it into a more versatile and powerful platform. This rewrite set the stage for the widespread adoption of MS-DOS by OEMs and its eventual evolution into Windows."

---

```asm
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

CODE        SEGMENT BYTE PUBLIC 'CODE'



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



;

; find_free_jfn

; input:    none

; output:   JNC <found>

;               ES:DI is pointer to free JFN

;           JC  <no free jfns>

;               ES,DI indeterminate

;

        procedure   Find_free_jfn,NEAR

        ASSUME  DS:NOTHING,ES:NOTHING

        PUSH    AX

        PUSH    CX

        MOV     AL,0FFh

        MOV     ES,[CurrentPDB]

        MOV     DI,PDB_JFN_Table

        MOV     CX,FilPerProc

        REPNE   SCASB

        STC

        JNZ     Find_jfn_ret

        DEC     DI

        CLC

Find_jfn_ret:

        POP     CX

        POP     AX

        return

Find_free_jfn   ENDP



BREAK <find_free_sfn - return a free sfn and sf pointer>

;

; find_free_sfn

; input:    none

; output:   JNC <found>

;               ES:DI is free sf entry

;               SI is sfn

;           JC  <not found>

;               ES,DI,SI indeterminate

;

; sft_addr -->  (link) count (fcbs)

; links = -1 means end of list

;

        procedure   Find_free_sfn,NEAR

        ASSUME  DS:NOTHING,ES:NOTHING

        PUSH    BX

        PUSH    CX

        LES     BX,sft_addr             ; head of chain of tables

        XOR     SI,SI                   ; count of sfn



        ; ES:BX points to table... search through table

Find_sfn_in_table:

        CMP     BX,-1                   ; end of chain

        JZ      Find_no_free_sfns

        MOV     DI,sft_table            ; offset to sf entry

        MOV     CX,ES:[BX].sft_count    ; count of fcbs in table



Find_sfn:

        CMP     ES:BYTE PTR [BX+DI].sf_ref_count,0h

        JZ      Find_got_sfn            ; ref count is 0 -> free entry

        ADD     DI,SIZE sf_entry        ; look to next entry

        INC     SI                      ; bump sfn

        LOOP    Find_sfn

        LES     BX,ES:[BX].sft_link     ; link to next

        JMP     SHORT Find_sfn_in_table ; look for more



Find_no_free_sfns:

        STC

        JMP     SHORT find_ret

Find_got_sfn:

        ADD     DI,BX

        CLC

Find_ret:

        POP     CX

        POP     BX

        RET

Find_free_sfn   ENDP



BREAK <$Open - open a file handle>

;

;   Assembler usage:

;           LDS     DX, Name

;           MOV     AH, Open

;           MOV     AL, access

;           INT     int_command

;

;       ACCESS          Function

;       ------          --------

;       open_for_read   file is opened for reading

;       open_for_write  file is opened for writing

;       open_for_both   file is opened for both reading and writing.

;

;   Error returns:

;           AX = error_invalid_access

;              = error_file_not_found

;              = error_access_denied

;              = error_too_many_open_files

;



        procedure   $Open,NEAR

        ASSUME  DS:NOTHING,ES:NOTHING

        MOV     [Cr_read_only],0

Open_create:

        CMP     AL,open_for_both        ; validate access

        JBE     OPEN_get_jfn

        error   error_invalid_access



OPEN_get_jfn:

        MOV     [open_name+2],DS

        context DS

        MOV     open_name,DX

        MOV     open_access,AL



        invoke  Find_free_jfn           ; scan through user's area

        ; ES:DI is the jfn entry

        JNC     OPEN_get_sfn

OPEN_too_many:

        error   error_too_many_open_files



OPEN_get_sfn:

        MOV     OPEN_jfn_b,ES

        MOV     OPEN_jfn,DI

        invoke  Find_free_sfn           ; get a free sft entry

        ; ES:DI is the SFT entry that's free, SI is the sfn

        JC      OPEN_too_many



OPEN_file:

        MOV     OPEN_sfn,SI

        MOV     OPEN_sfoff,DI

        MOV     OPEN_sfn_b,ES

;

; open the file

;

        PUSH    DS

        LDS     DX,DWORD PTR [open_name]

        ASSUME  DS:NOTHING

        CALL    access_path

        POP     DS

        ASSUME  DS:DOSGROUP

        JNC     open_check_access       ; carry set -> error

        transfer    SYS_RET_ERR



open_check_access:

        MOV     ES,WORD PTR [CURBUF+2]           ; get buffer location

        MOV     open_devid,AH

        TEST    AH,080h

        JNZ     open_set_FCB_dev        ;is a device

        MOV     AL,ES:[BX].dir_attr

        TEST    AL,attr_directory       ; can't open directories

        JZ      open_try_volid



open_bad_access:

        error   error_access_denied



open_try_volid:

        TEST    AL,attr_volume_id       ; can't open volume ids

        JNZ     open_bad_access

        TEST    AL,attr_read_only       ; check write on read only

        JZ      open_set_FCB

        CMP     [Cr_read_only],0

        JNZ     open_set_FCB            ; ok if creating read only file

        CMP     open_access, open_for_read

        JNZ     open_bad_access         ; writing on a read only file

        JMP     SHORT open_set_FCB



open_set_FCB_dev:

        PUSH    SS

        POP     ES                      ;Device opens are DOSGROUP relative



open_set_FCB:

        MOV     CX,11                   ; copy name into FCB...

        PUSH    SI                      ; ES:BX is source, must change

        MOV     SI,BX                   ; ES:SI is source

        MOV     DI,open_sfoff           ; ??:DI is dest

        PUSH    DS

        PUSH    ES

        MOV     ES,open_sfn_b           ; ES:DI is dest

        POP     DS                      ; DS:SI is source

        ASSUME  DS:NOTHING

;

; need to save attribute for the close operation

;

        MOV     AH,DS:[BX.dir_attr]     ; save attribute for close

        MOV     ES:[DI.sf_attr],AH



        ADD     DI,sf_fcb+1             ; point to name



        IF      KANJI

        MOVSB

        CMP     BYTE PTR ES:[DI-1],5

        JNZ     NOTKTRAN

        MOV     BYTE PTR ES:[DI-1],0E5H

NOTKTRAN:

        DEC     CX

        ENDIF



        REP     MOVSB                   ; move in parsed name

        POP     DS

        ASSUME  DS:DOSGROUP

        POP     SI

        LES     DI,DWORD PTR [open_sfoff]

        ADD     DI,sf_fcb               ; offset on fcb in sf entry

        MOV     AH,open_devid

        invoke  DOOPEN                  ; let open code fill in blanks

        context DS

        LES     DI,DWORD PTR [open_sfoff]

        INC     ES:[DI].sf_ref_count    ; reference this FCB

        MOV     AL,open_access          ; stash the access

        MOV     ES:BYTE PTR [DI].sf_mode,AL

        XOR     AX,AX

        MOV     ES:WORD PTR [DI.sf_FCB.fcb_RR],AX       ; beginning of file

        MOV     ES:WORD PTR [DI.sf_FCB.fcb_RR+2],AX

        INC     AX

        MOV     ES:WORD PTR [DI.sf_FCB.fcb_RECSIZ],AX   ; byte io only

        LES     DI,DWORD PTR [open_jfn]

        MOV     AX,open_sfn

        MOV     ES:BYTE PTR [DI],AL     ; stash sfn in PDB

        SUB     DI,PDB_jfn_table        ; get jfn for user

        MOV     AX,DI

        transfer    SYS_RET_OK

$Open   ENDP





BREAK <$UNLINK - delete a file entry>

;

;   Assembler usage:

;           LDS     DX, name

;           MOV     AH, Unlink

;           INT     21h

;

;   Error returns:

;           AX = error_file_not_found

;              = error_access_denied

;

        procedure   $UNLINK,NEAR

        ASSUME  DS:NOTHING,ES:NOTHING

        CALL    access_path

        JNC     unlink_check_attr

        transfer    SYS_RET_ERR



unlink_check_attr:

        JZ      unlink_dir

        LDS     DI,DWORD PTR [CURBUF]   ; get directory entry

        TEST    DS:[BX.dir_attr],attr_read_only

        JZ      unlink_doit



unlink_dir:

        error   error_access_denied



unlink_doit:

        MOV     BYTE PTR DS:[BX.dir_name],0E5h  ; delete dir entry

        MOV     BYTE PTR DS:[DI.BUFDIRTY],1     ; dirty the buffer

        LODSW

        MOV     BX,AX

        AND     BX,0FFFh

        context DS

        JZ      unlink_flush

        invoke  RELEASE

unlink_flush:

        MOV     AL,BYTE PTR ES:[BP.DPB_drive]

        invoke  FLUSHBUF

        transfer    SYS_RET_OK

$UNLINK ENDP



BREAK <$CREAT - creat a new file and open him for input>

;

;   Assembler usage:

;           LDS     DX, name

;           MOV     AH, Creat

;           MOV     CX, access

;           INT     21h

;       ; AX now has the handle

;

;   Error returns:

;           AX = error_access_denied

;              = error_path_not_found

;              = error_too_many_open_files

;





        procedure   $CREAT,NEAR

        ASSUME  DS:NOTHING,ES:NOTHING

        CALL    Validate_path

        JNC     unlink_do_make

        error   error_path_not_found

unlink_do_make:

        PUSH    DX

        PUSH    DS

        context DS

        MOV     WORD PTR [CREATING],0E5FFh

        MOV     WORD PTR [ThisFCB+2],SS

        MOV     WORD PTR [ThisFCB],OFFSET DOSGROUP:AUXSTACK-40

        MOV     SI,DX

        MOV     AL,CL

        AND     CL,attr_read_only

        MOV     [Cr_read_only],CL

        POP     DS

        PUSH    DS

ASSUME  DS:NOTHING

        invoke  MakeNode

        POP     DS

        POP     DX

        OR      AL,AL

        JZ      creat_open

        CMP     AL,3

        JZ      creat_open

creat_no_access:

        error   error_access_denied

creat_open:

        MOV     AL,open_for_both

        JMP     Open_create



$CREAT ENDP





BREAK <$DUP - duplicate a jfn>

;

;   Assembler usage:

;           MOV     BX, fh

;           MOV     AH, Dup

;           INT     int_command

;         AX has the returned handle

;   Errors:

;           AX = dup_invalid_handle

;              = dup_too_many_open_files

        procedure   $DUP,NEAR

        ASSUME  DS:NOTHING,ES:NOTHING

        context DS

        invoke  Find_free_jfn

        JC      dup_no_free_handles



dup_force:

        PUSH    ES

        PUSH    DI

        invoke  Get_sf_from_jfn

        POP     SI

        POP     DS

        JC      dup_bad_handle

        ; ES:DI is pointer to sf entry

        ; DS:DI is pointer to jfn

        INC     ES:[DI].sf_ref_count    ; another jfn reference...

        MOV     AL,[BX].PDB_JFN_table   ; get old sfn

        MOV     [SI],AL                 ; store in new place

        SUB     SI,PDB_JFN_table        ; get jfn

        MOV     AX,SI

        transfer    SYS_RET_OK



dup_no_free_handles:

        error   error_too_many_open_files



dup_bad_handle:

        error   error_invalid_handle

$DUP    ENDP



BREAK <$DUP2 - force a dup on a particular jfn>

;

;   Assembler usage:

;           MOV     BX, fh

;           MOV     CX, newfh

;           MOV     AH, Dup2

;           INT     int_command

;   Error returns:

;           AX = error_invalid_handle

;

        procedure   $DUP2,NEAR

        ASSUME  DS:NOTHING,ES:NOTHING

        XCHG    BX,CX                   ; BX < destination jfn

        PUSH    BX

        PUSH    CX

        invoke  $CLOSE                  ; close BX

        context DS

        POP     CX

        POP     BX

        invoke  Get_jfn_pointer

        XCHG    BX,CX

        JNC     dup_force

lseek_bad_handle:

        error   error_invalid_handle

$DUP2   ENDP





BREAK <$CHMOD - change file attributes>

;

;   Assembler usage:

;           LDS     DX, name

;           MOV     CX, attributes

;           INT     21h

;   Error returns:

;           AX = error_path_not_found

;           AX = error_access_denied

;

        procedure   $CHMOD,NEAR

        ASSUME  DS:NOTHING,ES:NOTHING

        CMP     AL,1

        JBE     chmod_save

        error   error_invalid_function

chmod_save:

        JB      chmod_try_file

        MOV     BX,CX

        AND     BX,NOT attr_changeable

        JZ      chmod_try_file



chmod_bad:

        error   error_access_denied



chmod_bye:

        transfer    SYS_RET_ERR

chmod_try_file:

        PUSH    CX

        PUSH    AX

        CALL    access_path

        POP     DX

        POP     CX

        JC      chmod_bye

        LES     DI,[CURBUF]

        context DS

        OR      DL,DL

        JZ      chmod_fetch

        AND     BYTE PTR ES:[BX].dir_attr,NOT attr_changeable

        OR      BYTE PTR ES:[BX].dir_attr,CL

        MOV     ES:[DI.BUFDIRTY],1

        MOV     AL,-1

        invoke  FlushBuf

        transfer    SYS_RET_OK

chmod_fetch:

        XOR     CX,CX

        MOV     CL,BYTE PTR ES:[BX].dir_attr

        invoke  Get_user_stack

        MOV     [SI.user_CX],CX

        transfer    SYS_RET_OK

$chmod  ENDP



BREAK <$CURRENT_DIR - dump the current directory into user space>

;

;   Assembler usage:

;               LDS     SI,area

;               MOV     DL,drive

;               INT     21h

;           ; DS:SI is a pointer to 64 byte area that contains drive

;           ; current directory.

;   Error returns:

;           AX = error_invalid_drive

;

procedure   $CURRENT_DIR,NEAR

        ASSUME  DS:NOTHING,ES:NOTHING

        PUSH    DS

        PUSH    BX

        PUSH    SI

        invoke  $get_DPB

;

; ES:BP points to DPB.  DS:SI points to user stack, unless error

;

        CMP     AL,0FFh

        JNZ     current_copy

        POP     AX              ; Clean Stack

        POP     AX

        POP     AX

        error   error_invalid_drive



current_copy:

        POP     DI              ; where to move to

        POP     [SI.user_BX]    ; restore old BX

        POP     BX

        MOV     [SI.user_DS],BX ; and restore old DS

;

; ES:BP is pointer to DPB. BX:DI is pointer to destination

;

        CMP     ES:[BP.dpb_current_dir],-1

        JNZ     current_ok

        PUSH    BX

        PUSH    DI

        MOV     [ATTRIB],attr_all

        invoke  GETCURRDIR

        POP     DI

        POP     BX

current_ok:

        MOV     SI,BP           ; ES:SI is source

        PUSH    ES

        POP     DS              ; DS:SI is source

        MOV     ES,BX           ; ES:DI is destination

        CMP     [SI.dpb_current_dir],0

        JNZ     current_move

        MOV     BYTE PTR [SI.dpb_dir_text],0



current_move:

        ADD     SI,dpb_dir_text

        MOV     CX,DIRSTRLEN

current_loop:

        LODSB

        STOSB

        OR      AL,AL

        LOOPNZ  current_loop

        transfer    SYS_RET_OK

$CURRENT_DIR    ENDP





BREAK <$RENAME - move directory entries around>

;

;   Assembler usage:

;           LDS     DX, source

;           LES     DI, dest

;           MOV     AH, Rename

;           INT     21h

;

;   Error returns:

;           AX = error_file_not_found

;              = error_not_same_device

;              = error_access_denied

procedure   $RENAME,near



        MOV     WORD PTR [rename_source],DX

        MOV     WORD PTR [rename_source+2],DS

        MOV     WORD PTR [rename_dest],DI

        MOV     WORD PTR [rename_dest+2],ES

        CALL    Access_path

        JNC     rename_check_dir

        transfer    SYS_RET_ERR



rename_check_dir:

        JZ      rename_no_access

        MOV     DS,WORD PTR [CurBuf+2]

        PUSH    [BX.dir_date]

        PUSH    [BX.dir_first]

        PUSH    [BX.dir_size_h]

        PUSH    [BX.dir_size_l]

        PUSH    [BX.dir_time]

        PUSH    WORD PTR [BX.dir_attr]

        PUSH    WORD PTR [ThisDrv]

        LDS     SI,[rename_dest]

        invoke  GetPath

        POP     AX

        JC      rename_check_drives

rename_bad_access:

        ADD     SP,12

rename_no_access:

        error   error_access_denied

rename_check_drives:

        CMP     AL,[ThisDrv]

        JZ      rename_create

        ADD     SP,12

        error   error_not_same_device

rename_create:

        LDS     SI,[rename_dest]

        POP     AX

        PUSH    AX

        MOV     WORD PTR [Creating],0E5FFh

        MOV     WORD PTR [ThisFCB+2],SS

        MOV     WORD PTR [ThisFCB],OFFSET DOSGROUP:AUXStack-40

        invoke  MakeNode

        JC      rename_bad_access

        LDS     SI,[CurBuf]

        POP     AX

        MOV     [BX.dir_attr],AL

        POP     [BX.dir_time]

        POP     [BX.dir_size_l]

        POP     [BX.dir_size_h]

        POP     [BX.dir_first]

        POP     [BX.dir_date]

        MOV     [SI.BUFDIRTY],1

        LDS     SI,[rename_source]

        invoke  GetPath

        LDS     SI,[CurBuf]

        MOV     BYTE PTR [BX],0E5h

        MOV     [SI.BUFDIRTY],1

        context DS

        MOV     AL,0FFh

        invoke  FlushBuf

        transfer    SYS_RET_OK



$RENAME ENDP



BREAK <$FIND_FIRST - find first matching xenix filename>

;

;   Assembler usage:

;           MOV AH, FindFirst

;           LDS DX, name

;           MOV CX, attr

;           INT 21h

;       ; DMA address has datablock

;

;   Error Returns:

;           AX = error_file_not_found

;              = error_no_more_files

;

procedure   $FIND_FIRST,near

        ASSUME  DS:NOTHING,ES:NOTHING

        CALL    Validate_path

        JNC     find_get

        JZ      find_get

        error   error_file_not_found

find_get:

        MOV     SI,DX

        PUSH    CX

        INC     BYTE PTR [NoSetDir] ; if we find a dir, don't change to it

        MOV     WORD PTR [Creating],0E500h

        CALL    GetPath

        POP     CX

        MOV     [Attrib],CL

find_check:

        JNC     find_check_attr

find_no_more:

        error   error_no_more_files

find_check_attr:

        MOV     DS,WORD PTR [CURBUF+2]

        MOV     CH,[BX.dir_attr]

        invoke  MatchAttributes

        JZ      found_it

        PUSH    [LastEnt]

        MOV     BX,[DirStart]

        JMP     find_it_next

found_it:

        LES     DI,[DMAADD]

        MOV     AL,[Attrib]

        STOSB                           ; find_buf 0 = attribute in search

        MOV     AL,[ThisDrv]

        STOSB                           ; find_buf 1 = drive

        MOV     CX,11

        PUSH    BX

        MOV     SI,OFFSET DOSGROUP:NAME1; find_buf 2 = formatted name

        PUSH    DS

        PUSH    SS

        POP     DS



        IF      KANJI

        MOVSB

        CMP     BYTE PTR ES:[DI-1],5

        JNZ     NOTKANJB

        MOV     BYTE PTR ES:[DI-1],0E5H

NOTKANJB:

        DEC     CX

        ENDIF



        REP     MOVSB

        POP     DS

        MOV     AX,[LastEnt]

        STOSW                           ; find_buf 13 = LastEnt

        MOV     AX,WORD PTR [ThisDPB]

        STOSW                           ; find_buf 15 = ThisDPB

        MOV     AX,WORD PTR [ThisDPB+2]

        STOSW

        MOV     AX,[DirStart]

        STOSW                           ; find_buf 19 = DirStart

        MOV     AL,[BX].dir_attr

        STOSB                           ; find_buf 21 = attribute found

        MOV     AX,[BX].dir_time

        STOSW                           ; find_buf 22 = time

        MOV     AX,[BX].dir_date

        STOSW                           ; find_buf 24 = date

        MOV     AX,[BX].dir_size_l

        STOSW                           ; find_buf 26 = low(size)

        MOV     AX,[BX].dir_size_h

        STOSW                           ; find_buf 28 = high(size)

        POP     SI

        MOV     CX,8                    ; find_buf 30 = packed name

find_loop_name:

        LODSB

        STOSB

        CMP     AL," "

        LOOPNZ  find_loop_name

        JNZ     find_check_dot

        DEC     DI

find_check_dot:

        ADD     SI,CX

        CMP     BYTE PTR [SI]," "

        JZ      find_done

        MOV     AL,"."

        STOSB

        MOV     CX,3

find_loop_ext:

        LODSB

        STOSB

        CMP     AL," "

        LOOPNZ  find_loop_ext

        JNZ     find_done

        DEC     DI

find_done:

        XOR     AL,AL

        STOSB

        transfer    SYS_RET_OK

$FIND_FIRST ENDP



BREAK <$FIND_NEXT - scan for match in directory>

;

;   Assembler usage:

;       ; dma points at area returned by find_first

;           MOV AH, findnext

;           INT 21h

;       ; next entry is at dma

;

;   Error Returns:

;           AX = error_no_more_files

;

procedure   $FIND_NEXT,near

        ASSUME  DS:NOTHING,ES:NOTHING

        LDS     SI,[DMAADD]

        MOV     DX,SI

        INC     DX

        PUSH    SI

        invoke  MOVNAMENOSET

        POP     SI

        JNC     find_load

findnext_no_more:

        error   error_no_more_files

find_load:

        MOV     AX,[SI.find_buf_LastEnt]

        LES     BP,[SI.find_buf_ThisDPB]

        OR      AX,AX

        JS      findnext_no_more

        MOV     BX,[SI.find_buf_DirStart]

        MOV     DL,[SI.find_buf_sattr]

        MOV     [Attrib],DL

        PUSH    AX

        MOV     WORD PTR [ThisDPB],BP

        MOV     WORD PTR [ThisDPB+2],ES

find_it_next:

        invoke  SetDirSrch

        ASSUME  DS:DOSGROUP

        POP     AX

        MOV     [ENTLAST],-1

        invoke  GetEnt

        invoke  NextEnt

        JMP     find_check

$find_next  ENDP



do_ext



CODE    ENDS

    END


```