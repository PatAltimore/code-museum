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
description: "HEX2BIN.ASM is a utility for converting Intel HEX files to binary format, showcasing early MS-DOS file handling and assembly programming techniques."

summary:
  - point: "Demonstrates MS-DOS file handling via interrupts"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Converts Intel HEX format to binary, a crucial format for embedded systems"
    link: "https://en.wikipedia.org/wiki/Intel_HEX"
    link_label: "Intel HEX"
  - point: "Efficiently handles memory and buffer management in constrained environments"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly language"
  - point: "Highlights Tim Paterson's contributions to early PC software"
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"

enhancements:
  - id: "file-handling-interrupts"
    line_start: 4
    line_end: 13
    title: "File handling via MS-DOS interrupts"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section defines constants for MS-DOS interrupt calls related to file handling, such as opening, reading, writing, and closing files. These constants simplify interaction with the operating system by providing symbolic names for interrupt functions. In 1981, MS-DOS relied heavily on software interrupts for system calls, a design inherited from CP/M. Tim Paterson adapted this approach for MS-DOS, ensuring compatibility with existing software while optimizing for the Intel 8086 architecture. These constants reflect the constrained environment of early PCs, where developers had to manage hardware directly and work within the limitations of 16-bit registers and segmented memory. The interrupt-driven file handling model influenced later operating systems, including Windows, which retained backward compatibility with MS-DOS APIs for years."
  - id: "hex-to-binary-conversion"
    line_start: 18
    line_end: 55
    title: "Parsing and offset handling for HEX files"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_HEX"
    image_url: ""
    image_caption: ""
    content: "This section begins the HEX-to-binary conversion process by parsing the input file and handling offsets. The program reads the file control block (FCB) to determine the file extension and load offset, defaulting to -100H if none is specified. It supports signed offsets, allowing flexibility in memory addressing, which was crucial for embedded systems and early PC software. The use of shifts and bitwise operations to calculate offsets demonstrates the efficiency required in assembly programming. Intel HEX files were a standard format for storing binary data in ASCII, widely used in microcontroller programming. By converting HEX files to binary, this utility enabled developers to load programs directly into memory, bypassing the need for manual conversion. This approach laid the groundwork for similar utilities in embedded systems development, influencing tools like objcopy in GNU Binutils."
  - id: "memory-zeroing-segment-handling"
    line_start: 57
    line_end: 71
    title: "Zeroing memory and segment initialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "This section initializes the memory segment where the binary data will be loaded, zeroing it out to ensure clean data storage. The program calculates the load segment by adding the data segment (DS) to a predefined offset and then uses the REP STOSW instruction to fill the segment with zeros. Memory management was a critical concern in early PCs, as developers had to work within the constraints of segmented memory and limited RAM. Zeroing memory ensured that leftover data from previous operations would not interfere with the current program. This technique became standard practice in system programming, influencing memory management routines in operating systems and embedded systems alike."
  - id: "hex-file-parsing"
    line_start: 85
    line_end: 110
    title: "Parsing Intel HEX file records"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_HEX"
    image_url: ""
    image_caption: ""
    content: "This section parses individual records from the Intel HEX file, extracting byte counts, addresses, and data. The program uses a loop to process each line, handling offsets and checking for valid addresses. It ensures that data is written to the correct memory location and tracks the largest address encountered. Intel HEX files were designed for easy transmission and storage of binary data, with each line representing a segment of memory. Parsing these files required careful attention to format and error handling, as a single mistake could corrupt the loaded program. This routine reflects the meticulous programming style of the era, where developers had to account for every byte. The techniques used here influenced later file parsing utilities and contributed to the robustness of tools for embedded systems development."
  - id: "error-handling"
    line_start: 113
    line_end: 121
    title: "Error handling and user feedback"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "This section handles errors such as file not found or address out of range, displaying messages to the user. Error handling was a critical aspect of early software development, as users often lacked technical expertise and needed clear feedback when something went wrong. The program uses MS-DOS interrupt 21H to display error messages, ensuring compatibility with the operating system's text output functions. By providing descriptive error messages, the program improves usability and reduces frustration for developers working with HEX files. This approach to error handling influenced later software design, emphasizing the importance of clear communication between programs and users."
  - id: "hex-digit-conversion"
    line_start: 147
    line_end: 157
    title: "Converting HEX digits to binary"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_HEX"
    image_url: ""
    image_caption: ""
    content: "This section converts individual HEX digits to binary values, a crucial step in parsing Intel HEX files. The program checks each character to ensure it is a valid HEX digit, then calculates its binary equivalent using subtraction and comparison. This routine demonstrates the low-level manipulation required in assembly programming, where developers must implement basic operations manually. Converting HEX digits to binary was essential for loading programs into memory, as it translated human-readable data into machine-readable format. The techniques used here influenced the design of similar conversion routines in programming tools and embedded systems software."
  - id: "binary-file-creation"
    line_start: 169
    line_end: 193
    title: "Creating and writing the binary file"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "This section creates the output binary file and writes the converted data to it. The program uses MS-DOS interrupt calls to create the file, set its record size, and write data in blocks. It ensures that the file is properly closed after writing, preventing data corruption. File creation and management were central to MS-DOS, which provided a simple but effective API for developers. This routine reflects the efficiency required in early software, where every operation had to be carefully optimized for performance and reliability. The techniques used here influenced later file handling libraries and contributed to the robustness of tools for data conversion and storage."
  - id: "data-structures"
    line_start: 201
    line_end: 210
    title: "Data structures for HEX2BIN"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_structure"
    image_url: ""
    image_caption: ""
    content: "This section defines the data structures used by HEX2BIN, including buffers, offsets, and segment sizes. These structures provide the foundation for the program's operations, storing intermediate values and managing memory. Assembly programming required developers to define data structures manually, as there were no high-level abstractions available. The careful design of these structures reflects the constraints of early PCs, where memory was limited and every byte mattered. The techniques used here influenced the design of data structures in later programming languages, emphasizing efficiency and clarity."

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