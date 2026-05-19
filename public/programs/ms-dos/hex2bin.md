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
description: "HEX2BIN.ASM is a utility from MS-DOS v1.25 that converts Intel HEX files to binary format, showcasing early assembly programming techniques and the constraints of the IBM PC era."

summary:
  - point: "Demonstrates early file handling in MS-DOS using INT 21H calls"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Illustrates the use of Intel HEX format, a standard for microcontroller programming"
    link: "https://en.wikipedia.org/wiki/Intel_HEX"
    link_label: "Intel HEX"
  - point: "Highlights memory management techniques for the IBM PC's segmented architecture"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "hex-file-conversion-logic"
    line_start: 18
    line_end: 55
    title: "Converting HEX file offsets to binary"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_HEX"
    image_url: ""
    image_caption: ""
    content: "This section of the code handles the conversion of HEX file offsets into binary format, a critical step for loading data into memory. The programmer begins by checking for an offset in the file control block (FCB), a structure used in MS-DOS to manage files. If an offset is present, the code parses it as a signed hexadecimal value, converting each character into its binary equivalent. This process involves bitwise operations like shifts and ORs, reflecting the constraints of 8086 assembly programming where every operation must be explicitly defined. In 1981, the Intel HEX format was widely used for transferring programs to microcontrollers. It encoded binary data as ASCII text, making it easier to transmit over serial connections or store in simple text files. Tim Paterson, the author of MS-DOS, likely included this utility to support developers working with embedded systems or low-level hardware. The IBM PC, launched the same year, was designed to be versatile, catering to both business users and technical enthusiasts. HEX2BIN exemplifies this dual-purpose design philosophy. The influence of this code extends far beyond MS-DOS. The Intel HEX format remains a standard in embedded systems programming, and the techniques demonstrated here—like parsing and validating hexadecimal input—are foundational for many file conversion utilities. Developers studying MS-DOS source code have noted its efficient handling of memory and file operations, inspiring similar approaches in later operating systems and tools. Without utilities like HEX2BIN, early PC users would have struggled to interface with external hardware, limiting the PC's appeal as a development platform."
  - id: "memory-initialization-segment"
    line_start: 57
    line_end: 71
    title: "Memory initialization for binary data"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "This section initializes memory for loading binary data by zeroing out an entire segment. The code calculates the load segment address using the data segment (DS) register and the starting segment offset, then fills the segment with zeros using the `REP STOW` instruction. This ensures a clean slate for data storage, avoiding corruption from leftover values in memory. In the early 1980s, memory management was a critical concern for programmers. The IBM PC's 8088 processor used a segmented memory model, which divided the 1MB address space into 64KB segments. This model required developers to carefully manage segment registers and offsets. Tim Paterson's approach here reflects the meticulous attention to detail needed to work within these constraints. The memory initialization technique seen here influenced later software development practices. Clearing memory before use became a standard procedure, reducing bugs and improving program stability. Modern operating systems like Windows and Linux still employ similar strategies, albeit with more sophisticated memory management systems. This code also highlights the importance of efficient memory handling in resource-limited environments, a lesson that remains relevant for embedded systems and low-level programming today."
  - id: "hex-file-parsing-loop"
    line_start: 85
    line_end: 110
    title: "Parsing Intel HEX file data"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_HEX"
    image_url: ""
    image_caption: ""
    content: "This loop processes the Intel HEX file line by line, extracting data and storing it in memory. It begins by searching for the colon (`:`) that marks the start of a HEX record, then reads the byte count, load address, and data type. The data bytes are loaded into memory at the specified address, adjusted by the offset calculated earlier. The loop also tracks the largest address used, ensuring all data fits within the allocated memory segment. Intel HEX files were a standard format for microcontroller programming in the early 1980s. They encoded binary data as ASCII text, simplifying transmission and storage. This utility reflects the practical needs of developers working with embedded systems, allowing them to convert HEX files into binary format for direct use on the IBM PC. Tim Paterson's inclusion of this feature demonstrates his understanding of the technical challenges faced by early PC users. The parsing logic here laid the groundwork for file conversion utilities that followed. Similar techniques are used in modern tools for handling structured text formats like JSON, XML, and CSV. The ability to read, validate, and process data efficiently is a cornerstone of software development, and this code provides a glimpse into the origins of these practices. Developers studying MS-DOS source code have drawn inspiration from its simplicity and effectiveness, applying these lessons to a wide range of applications."
  - id: "error-handling-routines"
    line_start: 163
    line_end: 199
    title: "Error handling and user feedback"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "This section handles errors encountered during the conversion process, displaying messages to the user and terminating the program if necessary. Errors include invalid HEX characters, file not found, address out of range, and disk directory full. Each error triggers a specific message, ensuring the user understands what went wrong. Error handling was a critical aspect of software development in the early 1980s. MS-DOS was designed to be user-friendly, catering to both technical and non-technical users. Providing clear feedback for errors helped users troubleshoot issues, making the system more accessible. Tim Paterson's approach here reflects the emphasis on usability that defined MS-DOS and contributed to its widespread adoption. The principles demonstrated in this code—like validating input, handling edge cases, and providing informative error messages—remain essential in modern software development. User feedback is a key component of usability, and the techniques seen here influenced the design of error handling in later operating systems and applications. Without robust error handling, early PC users would have struggled to navigate the complexities of file conversion and memory management, limiting the PC's appeal as a versatile computing platform."
  - id: "data-structures-and-constants"
    line_start: 201
    line_end: 210
    title: "Defining constants and data structures"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_structure"
    image_url: ""
    image_caption: ""
    content: "This section defines constants and data structures used throughout the program, including error messages, the HEX string, and memory buffers. These definitions provide a centralized way to manage program data, improving readability and maintainability. In the early days of assembly programming, organizing data was a challenge. Developers had to manually allocate memory and define constants, often relying on comments and naming conventions to keep track of their code. Tim Paterson's approach here reflects the best practices of the time, using clear labels and centralized definitions to simplify development. The use of constants and data structures in this code influenced later programming languages and paradigms. High-level languages like C and Pascal introduced more sophisticated ways to manage data, building on the principles seen here. Modern programming practices emphasize modularity and abstraction, concepts that trace their roots back to early assembly programs like HEX2BIN. By studying this code, developers can appreciate the evolution of data management techniques and the foundational role of MS-DOS in shaping software development."

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