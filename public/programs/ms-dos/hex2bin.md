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
description: "HEX2BIN.ASM: A utility to convert Intel HEX files to binary format, showcasing early MS-DOS assembly programming techniques."

summary:
  - point: "Demonstrates early MS-DOS file handling via INT 21H calls"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Illustrates the use of Intel HEX format in early software development"
    link: "https://en.wikipedia.org/wiki/Intel_HEX"
    link_label: "Intel HEX"
  - point: "Highlights memory management and segment manipulation in 8086 assembly"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"

enhancements:
  - id: "equ-definitions-for-dos-functions"
    line_start: 4
    line_end: 13
    title: "Mapping DOS functions to symbolic constants"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS_API"
    image_url: ""
    image_caption: ""
    content: "This section defines symbolic constants for MS-DOS interrupt 21H functions, such as file operations (OPEN, CLOSE, CREATE) and memory management (SETDMA). These constants simplify the programmer's task by providing readable labels instead of raw numeric codes. In 1981, MS-DOS was still in its infancy, and programmers relied heavily on direct system calls to interact with the operating system. Tim Paterson, the author of this code, was intimately familiar with these low-level details, having designed 86-DOS, the precursor to MS-DOS. These definitions reflect the constrained environment of the time, where every byte mattered, and clarity in assembly code was essential for maintainability. The use of symbolic constants became a standard practice in later programming environments, influencing the design of higher-level languages and APIs."
  - id: "hex2bin-main-subroutine"
    line_start: 18
    line_end: 110
    title: "Converting Intel HEX to binary format"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_HEX"
    image_url: ""
    image_caption: ""
    content: "The HEX2BIN subroutine is the heart of this program, responsible for parsing Intel HEX files and converting them into binary format. Intel HEX was a popular format for storing executable code in a human-readable way, often used for programming microcontrollers and EPROMs. This subroutine begins by checking for a file extension, then processes the HEX file line by line, extracting load addresses, data bytes, and handling offsets. In 1981, such utilities were critical for developers working with early PCs and embedded systems, where direct manipulation of binary data was common. Tim Paterson's implementation demonstrates efficient use of the 8086 instruction set, including bitwise operations and segment manipulation, to handle the constraints of early hardware. The code's reliance on MS-DOS system calls for file handling reflects the operating system's role as a lightweight abstraction over hardware. HEX2BIN's techniques would later influence similar utilities in the software ecosystem, bridging the gap between human-readable formats and machine code."
  - id: "getch-buffer-management"
    line_start: 123
    line_end: 134
    title: "Buffered input for efficient file reading"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    image_url: ""
    image_caption: ""
    content: "The GETCH subroutine implements buffered input, reading data from the HEX file into a memory buffer for efficient processing. This approach minimizes the overhead of frequent disk I/O operations, which were slow and resource-intensive on early PCs. The buffer size is defined as 1024 bytes, a compromise between memory usage and performance. In the early 1980s, disk drives were mechanical and prone to latency, making buffering a crucial optimization. Tim Paterson's decision to include this feature reflects his understanding of hardware limitations and his focus on performance. Buffered input became a standard technique in software development, influencing later programming paradigms and operating system designs. The simplicity of this implementation highlights the ingenuity required to work within the constraints of assembly language and early PC hardware."
  - id: "hexchk-validating-hex-characters"
    line_start: 147
    line_end: 157
    title: "Ensuring valid HEX characters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_HEX"
    image_url: ""
    image_caption: ""
    content: "The HEXCHK subroutine validates whether a character is a valid hexadecimal digit, ensuring the integrity of the conversion process. It checks for digits ('0'-'9') and letters ('A'-'F'), rejecting invalid input. This validation is critical in parsing Intel HEX files, which rely on accurate representation of binary data in text form. In 1981, error handling in assembly programs was often rudimentary, but Tim Paterson's inclusion of this subroutine demonstrates his attention to robustness. HEXCHK reflects the challenges of working with human-readable formats in low-level programming, where even small errors could lead to corrupted output. The principles behind this validation routine remain relevant, as similar checks are implemented in modern software to ensure data integrity during format conversions."
  - id: "error-handling-subroutines"
    line_start: 163
    line_end: 199
    title: "Error handling in assembly programming"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "The ERROR and related subroutines manage error conditions, displaying messages and aborting the program when necessary. These routines handle issues such as invalid HEX files, address out-of-range errors, and disk directory limitations. Error handling in assembly language was often minimal, as debugging tools were scarce and programs were expected to run in controlled environments. Tim Paterson's inclusion of descriptive error messages reflects his commitment to usability, ensuring that users could diagnose and resolve issues. This approach was forward-thinking for its time, as early software often lacked meaningful feedback for errors. The principles demonstrated here influenced the development of error handling mechanisms in higher-level languages, emphasizing the importance of clear communication between software and its users."

---

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
