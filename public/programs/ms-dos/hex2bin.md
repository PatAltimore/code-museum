---
title: "HEX2BIN.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v1.25/source/HEX2BIN.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v1.25/source/HEX2BIN.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "hex2bin"
order: 12
description: "HEX2BIN.ASM is a utility for converting Intel HEX files to binary, showcasing early MS-DOS file handling and memory management techniques."

summary:
  - point: "Demonstrates MS-DOS's file control block (FCB) API for file operations"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Efficiently handles Intel HEX format, a common format for microcontroller programming"
    link: "https://en.wikipedia.org/wiki/Intel_HEX"
    link_label: "Intel HEX"
  - point: "Highlights early assembly programming practices for constrained environments"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"

enhancements:
  - id: "hex2bin-entry-point"
    line_start: 15
    line_end: 75
    title: "Why HEX2BIN Starts at 100H"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The HEX2BIN subroutine begins at memory address 100H, which is a convention for .COM programs in MS-DOS. This address is reserved for program execution, ensuring the program doesn't overwrite the Program Segment Prefix (PSP) located at 0–100H. The subroutine initializes file control blocks (FCBs) and prepares the environment for file operations. At the time, MS-DOS relied heavily on FCBs for file access, a design inherited from CP/M. Tim Paterson, the author of MS-DOS, adapted this approach to maintain compatibility with existing software. This section also demonstrates the use of interrupts (INT 21H) for system calls, a hallmark of MS-DOS programming. The reliance on FCBs was eventually replaced by file handles in MS-DOS 2.0, inspired by Unix. This initialization routine laid the groundwork for countless utilities and applications that followed, influencing early PC software development."
  - id: "segment-zeroing-and-buffer-setup"
    line_start: 76
    line_end: 84
    title: "Zeroing Memory: A Programmer's Ritual"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "Before loading data, HEX2BIN zeroes out the target memory segment to ensure a clean slate. This was a common practice in early programming to prevent residual data from causing errors. The routine uses REP STOW, an efficient assembly instruction for block operations, to fill the segment with zeros. It then sets up the buffer for sequential reads using the SETDMA interrupt (INT 33H). This meticulous preparation reflects the programmer's awareness of hardware limitations and the need for reliability in file conversion. Memory zeroing became standard practice in software development, influencing modern memory management techniques in operating systems and programming languages. The buffer setup also highlights the importance of direct memory access (DMA) in optimizing I/O operations, a concept still relevant in today's hardware design."
  - id: "hex-file-parsing-loop"
    line_start: 85
    line_end: 110
    title: "Parsing HEX Files: A Line-by-Line Dance"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_HEX"
    image_url: ""
    image_caption: ""
    content: "This loop reads and parses Intel HEX file lines, extracting byte counts, load addresses, and data bytes. It uses GETCH and GETBYT subroutines to process each character and convert hexadecimal digits into binary. The loop ensures that data is loaded into memory at the correct address, accounting for offsets. Intel HEX was a popular format for microcontroller programming, and this routine reflects the precision required to handle it. The parsing logic, with its careful checks and conversions, showcases the programmer's attention to detail and understanding of the format's structure. This approach influenced later tools for firmware and embedded systems programming, where parsing efficiency and accuracy are critical."
  - id: "error-handling-and-exit"
    line_start: 112
    line_end: 134
    title: "When Things Go Wrong: Error Messages in HEX2BIN"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "HEX2BIN includes robust error handling routines to manage file not found errors, address out-of-range issues, and disk directory full conditions. These routines display descriptive messages using INT 21H, ensuring the user understands the problem. Error handling was a critical aspect of early software development, as users often lacked technical expertise. The inclusion of clear error messages reflects the programmer's empathy and foresight. This approach influenced the design of error handling in later software, emphasizing user-friendly communication. The exit routine, which gracefully terminates the program, showcases the importance of clean program termination in assembly language, a practice that remains relevant in modern software development."
  - id: "data-definitions-and-memory-allocation"
    line_start: 201
    line_end: 214
    title: "Defining Data: The Backbone of HEX2BIN"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_structure"
    image_url: ""
    image_caption: ""
    content: "This section defines constants, error messages, and memory buffers used throughout HEX2BIN. It allocates space for the buffer and other variables, ensuring the program has the resources it needs to operate. In 1981, memory was a precious commodity, and careful allocation was essential. The use of descriptive labels for constants and messages reflects the programmer's commitment to readability and maintainability. These data definitions influenced the design of assembly programs, emphasizing the importance of clear organization and efficient memory usage. Modern programming languages continue to build on these principles, providing abstractions for data definition and memory management."

---

```asm
; HEX2BIN  version 1.02
; Converts Intel hex format files to straight binary

FCB:	EQU	5CH
READ:	EQU	20
SETDMA:	EQU	26
OPEN:	EQU	15
CLOSE:	EQU	16
CREATE:	EQU	22
DELETE:	EQU	19
BLKWRT:	EQU	40
GETSEG:	EQU	38
BUFSIZ:	EQU	1024

	ORG	100H
	PUT	100H

HEX2BIN:
	MOV	DI,FCB+9
	CMP	B,[DI]," "
	JNZ	HAVEXT
	MOV	SI,HEX
	MOVB
	MOVW
HAVEXT:
;Get load offset (default is -100H)
	MOV	CL,4		;Needed for shifts
	MOV	[OFFSET],-100H
	MOV	SI,FCB+11H	;Scan second FCB for offset
	LODB
	CMP	AL," "		;Check if offset present
	JZ	HAVOFF
	MOV	B,[SIGN],0	;Assume positive sign for now
	CMP	AL,"+"
	JZ	GETOFF		;Get a positive offset
	CMP	AL,"-"
	JNZ	GETOFF1		;If not + or -, then not signed
	MOV	B,[SIGN],1	;Flag as negative offset
GETOFF:
	LODB			;Eat sign
GETOFF1:
	CALL	HEXCHK		;Check for valid hex character
	JC	HAVOFF		;No offset if not valid
	XOR	BX,BX		;Intialize offset sum to 0
CONVOFF:
	SHL	BX,CL		;Multiply current sum by 16
	OR	BL,AL		;Add in current hex digit
	LODB			;Get next digit
	CALL	HEXCHK		;And convert it to binary
	JNC	CONVOFF		;Loop until all hex digits read
	TEST	B,[SIGN],-1	;Check if offset was to be negative
	JZ	SAVOFF
	NEG	BX
SAVOFF:
	MOV	[OFFSET],BX
HAVOFF:
	MOV	DX,STARTSEG
	MOV	AX,DS
	ADD	DX,AX		;Compute load segment
	MOV	AH,GETSEG
	INT	33
	MOV	ES,DX
	SEG	ES
	MOV	CX,[6]		;Get size of segment
	MOV	[SEGSIZ],CX
	XOR	AX,AX
	MOV	DI,AX
	MOV	BP,AX
	SHR	CX
	REP
	STOW			;Fill entire segment with zeros
	MOV	AH,OPEN
	MOV	DX,FCB
	INT	21H
	OR	AL,AL
	JNZ	NOFIL
	MOV	B,[FCB+32],0
	MOV	[FCB+14],BUFSIZ	;Set record size to buffer size
	MOV	DX,BUFFER
	MOV	AH,SETDMA
	INT	33
	MOV	AH,READ
	MOV	DX,FCB		;All set up for sequential reads
	MOV	SI,BUFFER+BUFSIZ ;Flag input buffer as empty
READHEX:
	CALL	GETCH
	CMP	AL,":"		;Search for : to start line
	JNZ	READHEX
	CALL	GETBYT		;Get byte count
	MOV	CL,AL
	MOV	CH,0
	JCXZ	DONE
	CALL	GETBYT		;Get high byte of load address
	MOV	BH,AL
	CALL	GETBYT		;Get low byte of load address
	MOV	BL,AL
	ADD	BX,[OFFSET]	;Add in offset
	MOV	DI,BX
	CALL	GETBYT		;Throw away type byte
READLN:
	CMP	DI,[SEGSIZ]
	JAE	ADERR
	CALL	GETBYT		;Get data byte
	STOB
	CMP	DI,BP		;Check if this is the largest address so far
	JBE	HAVBIG
	MOV	BP,DI		;Save new largest
HAVBIG:
	LOOP	READLN
	JP	READHEX

NOFIL:
	MOV	DX,NOFILE
QUIT:
	MOV	AH,9
	INT	21H
	INT	20H

ADERR:
	MOV	DX,ADDR
	JMP	SHOWERR

GETCH:
	CMP	SI,BUFFER+BUFSIZ
	JNZ	NOREAD
	INT	21H
	CMP	AL,1
	JZ	ERROR
	MOV	SI,BUFFER
NOREAD:
	LODB
	CMP	AL,1AH
	JZ	DONE
	RET

GETBYT:
	CALL	HEXDIG
	MOV	BL,AL
	CALL	HEXDIG
	SHL	BL
	SHL	BL
	SHL	BL
	SHL	BL
	OR	AL,BL
	RET

HEXCHK:
	SUB	AL,"0"
	JC	RET
	CMP	AL,10
	JC	CMCRET
	SUB	AL,"A"-"0"-10
	JC	RET
	CMP	AL,16
CMCRET:
	CMC
	RET

HEXDIG:
	CALL	GETCH
	CALL	HEXCHK
	JNC	RET
ERROR:
	MOV	DX,ERRMES
SHOWERR:
	MOV	AH,9
	INT	21H
DONE:
	MOV	[FCB+9],4F00H+"C"	;"CO"
	MOV	B,[FCB+11],"M"
	MOV	DX,FCB
	MOV	AH,CREATE
	INT	21H
	OR	AL,AL
	JNZ	NOROOM
	XOR	AX,AX
	MOV	[FCB+33],AX
	MOV	[FCB+35],AX	;Set RR field
	INC	AX
	MOV	[FCB+14],AX	;Set record size
	XOR	DX,DX
	PUSH	DS
	PUSH	ES
	POP	DS		;Get load segment
	MOV	AH,SETDMA
	INT	21H
	POP	DS
	MOV	CX,BP
	MOV	AH,BLKWRT
	MOV	DX,FCB
	INT	21H
	MOV	AH,CLOSE
	INT	21H
EXIT:
	INT	20H

NOROOM:
	MOV	DX,DIRFUL
	JMP	QUIT

HEX:	DB	"HEX"
ERRMES:	DB	"Error in HEX file--conversion aborted$"
NOFILE:	DB	"File not found$"
ADDR:	DB	"Address out of range--conversion aborted$"
DIRFUL:	DB	"Disk directory full$"

OFFSET:	DS	2
SEGSIZ:	DS	2
SIGN:	DS	1
BUFFER:	DS	BUFSIZ

START:
STARTSEG EQU	(START+15)/16

```
