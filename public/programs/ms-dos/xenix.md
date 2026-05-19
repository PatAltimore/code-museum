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
description: "This file represents the MS-DOS v2.0 rewrite inspired by Unix/XENIX, introducing subdirectories, file handles, and device drivers."

summary:
  - point: "Incorporates Unix-inspired file system concepts like hierarchical directories"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Introduces file handles for better resource management"
    link: "https://en.wikipedia.org/wiki/File_descriptor"
    link_label: "File descriptor"
  - point: "Includes device driver support, expanding hardware compatibility"
    link: "https://en.wikipedia.org/wiki/Device_driver"
    link_label: "Device driver"
  - point: "Reflects Microsoft's ambition to align MS-DOS with XENIX and Unix standards"
    link: "https://en.wikipedia.org/wiki/Xenix"
    link_label: "XENIX"
  - point: "Demonstrates early assembly-level programming techniques for operating systems"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly language"

enhancements:
  - id: "include-dosseg-asm"
    line_start: 9
    line_end: 29
    title: "Setting up the code environment"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section includes the DOSSEG.ASM file, which organizes the memory segments used by MS-DOS. It defines the 'CODE' segment for executable instructions and sets up assumptions for segment registers like SS and CS. The programmer is preparing the environment for the rest of the assembly code. In 1983, memory management was critical due to the limited resources of the IBM PC, which had a maximum of 640 KB of conventional memory. By segmenting the code, MS-DOS could efficiently manage memory and ensure compatibility with the hardware. This approach influenced later operating systems that adopted similar memory segmentation techniques for low-level programming."
  - id: "name-xenix"
    line_start: 43
    line_end: 85
    title: "Naming the module: XENIX compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/Xenix"
    image_url: ""
    image_caption: ""
    content: "The 'NAME XENIX' directive identifies this module as part of the MS-DOS system designed to mimic Unix-like functionality. XENIX was Microsoft's version of Unix, and this naming reflects the influence of Unix on MS-DOS v2.0. The inclusion of hierarchical directories, file handles, and pipes in MS-DOS v2.0 was directly inspired by Unix systems. This compatibility allowed MS-DOS to appeal to developers familiar with Unix, broadening its adoption. The naming also signals Microsoft's strategic alignment with Unix standards, which would later influence other operating systems like Windows NT."
  - id: "validate-path-meta-characters"
    line_start: 131
    line_end: 285
    title: "Validating paths for meta-characters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Path_(computing)"
    image_url: ""
    image_caption: ""
    content: "This subroutine, 'Validate_path,' checks whether a given path contains meta-characters like '?' or '*', which are used for wildcard matching. The routine ensures paths are well-formed before further processing. At the time, MS-DOS was transitioning to support hierarchical directories, and robust path validation was essential for maintaining file system integrity. The use of assembly-level checks reflects the performance constraints of early PCs, where every CPU cycle mattered. This approach influenced later file systems and operating systems, which adopted similar validation techniques to handle user input securely and efficiently."
  - id: "find-free-jfn"
    line_start: 339
    line_end: 411
    title: "Locating free job file numbers (JFNs)"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_descriptor"
    image_url: ""
    image_caption: ""
    content: "The 'Find_free_jfn' subroutine scans the system file table to locate an available job file number (JFN) for a process. JFNs are identifiers for open files, akin to file descriptors in Unix. This mechanism was crucial for managing multiple open files efficiently, especially as MS-DOS v2.0 introduced support for multitasking-like features. By implementing this system, MS-DOS laid the groundwork for more sophisticated file management techniques in later operating systems, including Windows. The concept of file handles became a standard in software development, influencing APIs like the Win32 API."
  - id: "open-file-handle"
    line_start: 513
    line_end: 795
    title: "Opening files with access validation"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_descriptor"
    image_url: ""
    image_caption: ""
    content: "The '$Open' subroutine handles the process of opening a file, validating access permissions, and associating it with a file handle. It checks for errors like invalid access modes, too many open files, or access denied. This routine reflects the Unix-inspired design of MS-DOS v2.0, where file handles replaced the older FCB (File Control Block) system. By introducing file handles, MS-DOS improved resource management and simplified file operations for developers. This innovation influenced later operating systems and programming languages, where file handles became a ubiquitous concept."
  - id: "unlink-file-entry"
    line_start: 803
    line_end: 881
    title: "Deleting file entries safely"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_deletion"
    image_url: ""
    image_caption: ""
    content: "The '$UNLINK' subroutine deletes a file entry from the directory, ensuring attributes like read-only are respected. It marks the directory entry as deleted and flushes the buffer to update the disk. File deletion was a critical operation in MS-DOS, where improper handling could corrupt the file system. By implementing checks and safeguards, this routine ensured reliability in file management. The approach influenced later systems, where file deletion routines incorporated similar checks to prevent accidental data loss or corruption."
  - id: "create-new-file"
    line_start: 885
    line_end: 981
    title: "Creating and opening new files"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_creation"
    image_url: ""
    image_caption: ""
    content: "The '$CREAT' subroutine creates a new file and opens it for input. It validates the path and access permissions, then allocates resources for the new file. This routine reflects the Unix-inspired design of MS-DOS v2.0, where file creation was streamlined for developers. By introducing this functionality, MS-DOS made it easier to write applications that managed files dynamically. The concept of file creation routines influenced APIs in later operating systems, including Windows and Linux, where similar mechanisms are used to handle file creation and management."
  - id: "dup-force-handle-reference"
    line_start: 1019
    line_end: 1047
    title: "Handle duplication: managing references efficiently"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_descriptor"
    image_url: ""
    image_caption: ""
    content: "The `dup_force` subroutine duplicates a file handle by incrementing its reference count and updating the process's file handle table. This ensures that multiple processes or threads can share access to the same file without conflict. At the time, MS-DOS v2.0 was moving toward a more Unix-like model, inspired by XENIX, which emphasized file descriptors and system calls. This routine reflects the shift from simple file access to a more sophisticated handle-based system. The technique laid the groundwork for modern operating systems, where file handles are integral to multitasking and resource management. Later systems like Windows and Linux expanded on this concept, introducing advanced handle management and permissions."
  - id: "chmod-attributes-management"
    line_start: 1149
    line_end: 1215
    title: "Changing file attributes: chmod in MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Chmod"
    image_url: ""
    image_caption: ""
    content: "The `chmod` subroutine allows users to modify file attributes, such as read-only or hidden status. This functionality mirrors the Unix `chmod` command, showcasing the influence of XENIX on MS-DOS v2.0. By introducing attribute manipulation, MS-DOS expanded its file system capabilities, enabling more granular control over files. This was a significant step forward for personal computing, as it allowed software developers to implement security and organizational features previously reserved for larger systems. The concept of file attributes persists in modern operating systems, with Windows inheriting and expanding these capabilities through NTFS and attribute flags."
  - id: "current-dir-dump"
    line_start: 1223
    line_end: 1341
    title: "Dumping the current directory into user space"
    wikipedia_url: "https://en.wikipedia.org/wiki/Working_directory"
    image_url: ""
    image_caption: ""
    content: "The `$CURRENT_DIR` procedure retrieves the current working directory and transfers it to a user-defined memory area. This feature was crucial for enabling applications to interact with the file system dynamically, a capability inspired by Unix's working directory concept. At the time, MS-DOS v2.0 was evolving to support hierarchical file systems, making directory management more complex and powerful. This routine reflects the growing importance of user-space interaction with system-level data. Modern operating systems have refined this approach, integrating APIs for seamless directory management across diverse programming environments."
  - id: "rename-directory-entries"
    line_start: 1351
    line_end: 1491
    title: "Renaming files: moving directory entries"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rename_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `$RENAME` procedure enables the renaming of files by manipulating directory entries directly. This routine checks access permissions, validates paths, and ensures that source and destination drives match before performing the operation. The ability to rename files was a key feature in MS-DOS v2.0's enhanced file system, reflecting its Unix-inspired design. By introducing such functionality, MS-DOS allowed users to organize and manage files more effectively, paving the way for more sophisticated file management systems. Modern file systems, such as NTFS and ext4, have built on this concept, offering atomic rename operations and journaling for reliability."
  - id: "find-first-file-search"
    line_start: 1501
    line_end: 1713
    title: "Finding the first matching file"
    wikipedia_url: "https://en.wikipedia.org/wiki/Glob_(programming)"
    image_url: ""
    image_caption: ""
    content: "The `$FIND_FIRST` procedure searches for the first file matching a given pattern, such as a filename or extension. It validates the path, checks attributes, and retrieves file metadata, storing it in a buffer for further processing. This routine was essential for enabling wildcard searches and directory traversal in MS-DOS v2.0, reflecting the influence of Unix's globbing mechanisms. By introducing such capabilities, MS-DOS enhanced its usability for developers and end-users alike. The concept of file searching has evolved significantly, with modern systems offering advanced indexing and search algorithms, such as Windows Search and Linux's `find` command."
  - id: "find-next-file-search"
    line_start: 1721
    line_end: 1801
    title: "Scanning for the next matching file"
    wikipedia_url: "https://en.wikipedia.org/wiki/Directory_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `$FIND_NEXT` procedure continues a file search initiated by `$FIND_FIRST`, scanning for subsequent matches within the directory. This routine ensures efficient traversal by leveraging the previously loaded directory buffer. At the time, MS-DOS v2.0 was designed to support more complex file operations, inspired by Unix's directory handling. The ability to iterate through files programmatically was crucial for applications like file managers and batch processing scripts. Modern operating systems have refined this approach, integrating directory iteration into high-level APIs and supporting parallel searches for improved performance."
  - id: "do-ext-end-of-file"
    line_start: 1805
    line_end: 1813
    title: "Final cleanup: end-of-file marker"
    wikipedia_url: "https://en.wikipedia.org/wiki/End-of-file"
    image_url: ""
    image_caption: ""
    content: "The `do_ext` section marks the end of the file and ensures proper cleanup of resources. While its functionality is minimal, it reflects the structured approach to assembly programming in MS-DOS v2.0. By clearly delineating the end of executable code, developers minimized errors and ensured compatibility across different assemblers and environments. This practice of marking file boundaries persists in modern software development, albeit in more abstract forms, such as EOF markers in text files or metadata in compiled binaries."

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

                                                                                                       