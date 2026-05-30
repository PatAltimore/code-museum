---
title: "TRANS.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v1.25/source/TRANS.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v1.25/source/TRANS.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "trans"
order: 9
description: "This file contains the Z80 to 8086 translator for MS-DOS, showcasing techniques for cross-platform assembly translation in the early 1980s."

summary:
  - point: "Translates Z80 assembly to 8086 assembly for compatibility"
    link: "https://en.wikipedia.org/wiki/Zilog_Z80"
    link_label: "Zilog Z80"
  - point: "Uses direct memory manipulation for efficiency"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"
  - point: "Highlights early MS-DOS system calls"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Introduces opcode tables for instruction mapping"
    link: "https://en.wikipedia.org/wiki/Opcode"
    link_label: "Opcode"
  - point: "Demonstrates early file handling techniques in DOS"
    link: "https://en.wikipedia.org/wiki/Computer_file"
    link_label: "File Handling"

enhancements:
  - id: "initialize-memory-and-system-calls"
    line_start: 5
    line_end: 21
    title: "Initialize Memory and System Calls"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section sets up the stack pointer and initializes system calls using MS-DOS interrupt-driven functions. The programmer uses symbolic constants like EOF (end of file) and EOL (end of line) to make the code more readable. At the time, MS-DOS relied heavily on low-level system calls for file and memory operations, which were mapped to specific interrupt numbers. This initialization reflects the constraints of 8086 assembly programming, where every byte mattered, and readability was often sacrificed for performance. Tim Paterson's approach here laid the groundwork for how MS-DOS programs interacted with the operating system, influencing future DOS-based applications and their reliance on system calls."
  - id: "clear-file-control-block"
    line_start: 7
    line_end: 59
    title: "Clear File Control Block (FCB)"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Control_Block"
    image_url: ""
    image_caption: ""
    content: "This section clears the File Control Block (FCB), a data structure used in MS-DOS to manage files. The loop zeroes out specific bytes in the FCB, ensuring it starts in a clean state. FCBs were a legacy from CP/M, the operating system that heavily influenced MS-DOS. By adopting this structure, MS-DOS maintained compatibility with existing software, a critical factor in its rapid adoption. The technique of manually clearing memory reflects the era's lack of high-level abstractions. While FCBs were eventually replaced by file handles in MS-DOS 2.0, this approach highlights the transitional phase of early PC software development."
  - id: "setup-buffer-pointers"
    line_start: 69
    line_end: 79
    title: "Setup Buffer Pointers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "This section initializes pointers for input and output buffers, crucial for handling file I/O in MS-DOS. The programmer sets up memory locations for reading and writing data, ensuring efficient data transfer between the program and the file system. Buffering was a common technique to optimize performance on slow storage devices like floppy disks. By pre-allocating memory and managing pointers manually, the program avoids frequent disk accesses, which were time-consuming. This approach influenced later developments in file handling, where buffering became a standard practice in operating systems and programming languages."
  - id: "get-character-from-source-file"
    line_start: 173
    line_end: 203
    title: "Get Character from Source File"
    wikipedia_url: "https://en.wikipedia.org/wiki/Character_encoding"
    image_url: ""
    image_caption: ""
    content: "This subroutine reads a single character from the source file, using a buffer to minimize disk I/O. If the buffer is empty, it fetches the next record from the file. The code handles partial records and ensures an EOF character is returned if the file ends unexpectedly. This meticulous handling of file reads reflects the constraints of early PCs, where disk access was slow and error-prone. The technique of buffering and error checking became a standard in file I/O operations, influencing later DOS and Windows file handling APIs."
  - id: "opcode-translation-logic"
    line_start: 405
    line_end: 477
    title: "Opcode Translation Logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Opcode"
    image_url: ""
    image_caption: ""
    content: "This section maps Z80 opcodes to their 8086 equivalents using a lookup table. The code searches for the opcode in a predefined table and retrieves the corresponding 8086 instruction. This approach simplifies the translation process, making it faster and more reliable. Opcode translation was critical for running Z80-based software on the 8086 architecture, enabling compatibility with existing programs. The use of lookup tables for instruction mapping influenced later developments in emulation and cross-platform software, where similar techniques are used to translate instructions between architectures."
  - id: "pseudo-instruction-handling"
    line_start: 826
    line_end: 844
    title: "Handling Pseudo-Instructions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "This section processes pseudo-instructions, which are higher-level constructs that simplify assembly programming. Pseudo-instructions are translated into one or more actual machine instructions. This abstraction makes the code easier to write and maintain, despite the low-level nature of assembly language. The handling of pseudo-instructions reflects the programmer's effort to balance performance with usability, a challenge that continues to shape programming language design. Techniques like this influenced the development of macro assemblers and higher-level languages that offer similar abstractions."
  - id: "opcode-table-definition"
    line_start: 891
    line_end: 924
    title: "Defining Opcode Tables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Opcode"
    image_url: ""
    image_caption: ""
    content: "This section defines the opcode tables used for instruction mapping. Each table entry associates a Z80 opcode with its corresponding 8086 instruction or subroutine. The tables are organized by opcode groups, making the lookup process efficient. This structured approach to opcode mapping was essential for the translator's performance, as it minimized the computational overhead of instruction translation. Opcode tables like these became a cornerstone of emulation and cross-platform software, influencing tools like virtual machines and binary translators used in modern computing."
  - id: "rops-z80-to-8086-opcode-table"
    line_start: 975
    line_end: 1002
    title: "How Z80 Opcodes Became 8086 Instructions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zilog_Z80"
    image_url: ""
    image_caption: ""
    content: "The ROPS section defines a table mapping Z80 opcodes to their equivalent 8086 instructions. Each entry pairs a Z80 mnemonic (e.g., 'ET', 'LA', 'RA') with its corresponding 8086 operation, such as RETURN or RCL. This table is a critical component of the Z80-to-8086 translator, enabling seamless conversion of assembly code written for the Z80 processor into code executable on the 8086. At the time, the Z80 was widely used in personal computers like the TRS-80, while the 8086 was the foundation of the IBM PC. Bridging these architectures was essential for software compatibility during the early PC era. Tim Paterson likely adapted this approach from earlier cross-assembler techniques, leveraging his deep understanding of both processors. The translator's success allowed developers to port software quickly, contributing to MS-DOS's dominance. Similar opcode translation techniques later appeared in emulators and cross-compilers, influencing tools like the GNU assembler and modern virtual machines."
  - id: "sops-bitwise-and-arithmetic-operations"
    line_start: 1003
    line_end: 1043
    title: "The Arithmetic and Bitwise Operations Table"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_8086"
    image_url: ""
    image_caption: ""
    content: "The SOPS section defines a table for arithmetic and bitwise operations, mapping Z80 instructions like 'UB' and 'BC' to their 8086 equivalents, such as OPCODE and SBB. This table also includes operations for shifting and flag manipulation, such as SAL, SAR, and STC. These mappings were crucial for translating Z80 assembly code into functional 8086 code, ensuring that mathematical and logical operations behaved identically across architectures. In 1981, this kind of translation was groundbreaking, as it allowed software written for older systems to run on the newly launched IBM PC. Paterson's work here reflects the constraints of early computing, where hardware differences often necessitated creative software solutions. This approach influenced later compatibility layers, such as the Windows API and binary translation techniques used in emulators like QEMU."
  - id: "xops-logical-or-operation"
    line_start: 967
    line_end: 974
    title: "The Logical OR: A Minimalist Table"
    wikipedia_url: "https://en.wikipedia.org/wiki/Logical_disjunction"
    image_url: ""
    image_caption: ""
    content: "The XOPS section is a compact table defining the logical OR operation, mapping the Z80 'OR' instruction to the 8086 OPCODE. Despite its brevity, this table is significant because logical operations are foundational to programming, enabling decision-making and control flow. During the early 1980s, logical operations were implemented directly in hardware, and software translators like this one had to ensure that the semantics of these operations were preserved across architectures. Paterson's inclusion of this table demonstrates his attention to detail and the importance of even the simplest operations in ensuring compatibility. Logical operations are ubiquitous in modern programming, and this work laid the groundwork for future translators and emulators that continue to bridge hardware differences."
  - id: "blmove-block-memory-transfer"
    line_start: 1044
    line_end: 1053
    title: "Moving Blocks of Memory Across Architectures"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The BLMOVE section defines instructions for block memory transfer, mapping Z80 operations to equivalent 8086 instructions like MOV and REP MOVB. Memory management was a critical concern in early computing, as systems had limited RAM and relied heavily on efficient data movement. This routine ensures that arrays and buffers can be transferred correctly between architectures, preserving the integrity of programs during translation. In 1981, memory operations were often optimized for specific hardware, and Paterson's work reflects the need to abstract these differences for cross-platform compatibility. This technique influenced later developments in memory management, including the design of DMA controllers and virtual memory systems. Today, block memory transfer routines are a standard feature of operating systems and programming languages, underscoring the enduring relevance of this work."
  - id: "djnz-loop-control-warning"
    line_start: 1054
    line_end: 1116
    title: "The Loop Control Warning: A Programmer's Note"
    wikipedia_url: "https://en.wikipedia.org/wiki/Loop_(computing)"
    image_url: ""
    image_caption: ""
    content: "The DJNZ section implements the 'Decrement and Jump if Not Zero' instruction, a common loop control mechanism in assembly programming. However, the accompanying comment warns programmers that DJNZ does not affect flags, unlike the DEC instruction. This kind of warning reflects the meticulous attention to detail required in assembly programming, where subtle differences in instruction behavior could lead to bugs. In the early 1980s, debugging was often done manually, and comments like this were invaluable for preventing errors. Paterson's inclusion of this warning demonstrates his commitment to clarity and reliability. Loop control mechanisms remain a fundamental concept in programming, and this section highlights the challenges of implementing them in low-level code. Modern programming languages abstract these details, but the principles established here continue to inform compiler design and optimization."
  - id: "toktab-token-table-for-translator"
    line_start: 1137
    line_end: 1166
    title: "The Token Table: Parsing Z80 Assembly"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lexical_analysis"
    image_url: ""
    image_caption: ""
    content: "The TOKTAB section defines a token table used by the translator to parse Z80 assembly code. Tokens like 'SIDI' and 'AXSPBXDXCX' represent key elements of Z80 syntax, which are mapped to equivalent 8086 constructs. Parsing is a fundamental step in translation, as it converts human-readable code into machine-executable instructions. In 1981, lexical analysis was a relatively new concept in software engineering, and Paterson's implementation reflects the state of the art at the time. This approach influenced later developments in compiler design, including the creation of tools like Lex and Yacc. Today, token tables are a standard feature of programming language interpreters and compilers, showcasing the lasting impact of this work on software development."

---

```asm
; Z80 to 8086 Translator  version 2.21
;  Runs on the 8086 under 86-DOS
; by Tim Paterson
;
	ORG	100H
EOF:	EQU	1AH	;End of file
EOL:	EQU	0DH
FCB:	EQU	5CH
SYSTEM:	EQU	5
OPEN:	EQU	15
CLOSE:	EQU	16
SETDMA:	EQU	26
CREATE:	EQU	22
DELETE:	EQU	19
READ:	EQU	20
WRITE:	EQU	21
PRNBUF:	EQU	9
	MOV	SP,STACK
	MOV	DX,HEADER
	MOV	CL,9
	CALL	SYSTEM
	MOV	BX,FCB+12
	XOR	AL,AL
	MOV	CH,4
CLRFCB:
	MOV	[BX],AL
	INC	BX
	DEC	CH
	JNZ	CLRFCB
	MOV	[FCB+32],AL
	MOV	BX,FCB
	MOV	DX,PUTFCB
	MOV	CX,16
	UP
	MOV	SI,BX
	MOV	DI,DX
	REP
	MOVB
	MOV	DX,DI
	MOV	BX,SI
	MOV	[PUTFCB+32],AL
	MOV	BX,"A"+5300H	;"AS"
	MOV	[PUTFCB+9],BX
	MOV	AL,'M'
	MOV	[PUTFCB+11],AL
	MOV	DX,FCB
	MOV	CL,OPEN
	CALL	SYSTEM
	INC	AL
	MOV	DX,NOFILE
	JZ	ABORTJ
	MOV	DX,PUTFCB
	MOV	CL,DELETE
	CALL	SYSTEM
	MOV	DX,PUTFCB
	MOV	CL,CREATE
	CALL	SYSTEM
	INC	AL
	MOV	DX,NOROOM
ABORTJ:
	JZ	ABORT
	MOV	DX,PUTFCB
	MOV	CL,OPEN
	CALL	SYSTEM
	MOV	BX,PUTBUF
	MOV	[PUTPT],BX
	MOV	BX,GETBUF+80H
	MOV	[GETPT],BX
TRANLN:
	XOR	AL,AL
	MOV	[OP1],AL
	MOV	[OP2],AL
	MOV	BX,OPCODE
	CALL	LOAD
	MOV	BX,OP1
	CALL	GETOP
	MOV	B,[BX],0
	MOV	BX,OP2
	CALL	GETOP
DOLIN:
	MOV	B,[BX],0
	CALL	FINDOP
ENLIN:
	MOV	SP,STACK
	MOV	AL,[CHAR]
	CMP	AL,';'
	JNZ	NOCOM
	MOV	AL,9
	CALL	PUTCH
	MOV	AL,';'
NOCOM:
	CALL	PUTCH
PUTLIN:
	CMP	AL,EOF
	JZ	END
	CALL	GETCH
	CALL	PUTCH
	CMP	AL,10
	JNZ	PUTLIN
	JP	TRANLN
END:
	MOV	CH,127
	MOV	AL,1AH
FILL:
	CALL	PUTCH
	DEC	CH
	JNZ	FILL
	MOV	DX,PUTFCB
	MOV	CL,CLOSE
	CALL	SYSTEM
	MOV	DX,ENDMES
ABORT:
	MOV	CL,PRNBUF
	CALL	SYSTEM
	JMP	0
DELIM:
	CALL	GETCH
DELCHK:
	CMP	AL,EOL
	JZ	DOLIN
	CMP	AL,EOF
	JZ	DOLIN
	CMP	AL,';'
	JZ	DOLIN
	CMP	AL,' '
	JZ	RET
	CMP	AL,':'
	JZ	RET
	CMP	AL,','
	JZ	RET
	CMP	AL,9
	RET
HEX:
	AND	AL,0FH
	ADD	AL,90H
	DAA
	ADC	AL,40H
	DAA
PUTCH:
	PUSH	BX
	PUSH	DX
	PUSH	CX
	LAHF
	XCHG	AH,AL
	PUSH	AX
	XCHG	AH,AL
	AND	AL,7FH
	MOV	BX,[PUTPT]
	MOV	[BX],AL
	INC	BX
	MOV	[PUTPT],BX
	CMP	BX,PUTBUF+80H
	JNZ	POPRET
	MOV	DX,PUTBUF
	MOV	[PUTPT],DX
	MOV	CL,SETDMA
	CALL	SYSTEM
	MOV	DX,PUTFCB
	MOV	CL,WRITE
	CALL	SYSTEM
	OR	AL,AL
	MOV	DX,WRTERR
	JNZ	ABORT
POPRET:
	POP	AX
	XCHG	AH,AL
	SAHF
NOTAF:
	POP	CX
	POP	DX
	POP	BX
	RET
;
; Get character from source file.
;
GETCH:
	PUSH	BX
	PUSH	DX
	PUSH	CX
	MOV	BX,[GETPT]	; Get buffer pointer.
	CMP	BX,GETBUF+80H	; Past end-of-buffer?
	JNZ	GETIT		; Jump if not.
	MOV	DX,GETBUF	; Set `DMA address'.
	MOV	CL,SETDMA
	CALL	SYSTEM
	MOV	DX,FCB		; Read the next record from source file.
	MOV	CL,READ
	CALL	SYSTEM
	CMP	AL,0		; Entire record read OK?
	JE	OKRECORD
	CMP	AL,3		; Partial record read?
	JE	OKRECORD
	MOV	AL,EOF		; Force end-of-file character in case
	JP	TESEND		;  there is nothing in the record.
OKRECORD:
	MOV	BX,GETBUF	; Reset buffer pointer.
GETIT:
	MOV	AL,[BX]		; Get next character from buffer.
	INC	BX		; Point to next character.
	MOV	[GETPT],BX	; Save new pointer.
TESEND:
	MOV	[CHAR],AL
	JP	NOTAF		; Pop registers and return.
LOAD:
	CALL	DELIM
	JZ	LOADOP
EATLAB:
	CALL	PUTCH
	CALL	DELIM
	JNZ	EATLAB
ENLAB:
	MOV	AL,':'
	CALL	PUTCH
LOADOP:
	MOV	BX,OPCODE
EATEM:
	CALL	DELIM
	JZ	EATEM
LOADLP:
	CALL	IDCHK
	JNC	$+5
	JMP	OPERR
	MOV	[BX],AL
	INC	BX
	CALL	DELIM
	JNZ	LOADLP
	MOV	B,[BX],0
	CMP	AL,':'
	JNZ	RET
	MOV	BX,OPCODE
	CALL	TRANS
	JP	ENLAB
GETOP:
	XOR	AL,AL
	LAHF
	XCHG	AX,BP
	SAHF
GETLP:
	CALL	DELIM
	JZ	GETLP
OPCHAR:
	CMP	AL,'('
	JNZ	NOTLEF
	LAHF
	XCHG	AX,BP
	SAHF
	INC	AL
	LAHF
	XCHG	AX,BP
	SAHF
	MOV	B,[BX],'['
	JP	NEXCH
NOTLEF:
	CMP	AL,')'
	JNZ	NOTRIT
	LAHF
	XCHG	AX,BP
	SAHF
	DEC	AL
	LAHF
	XCHG	AX,BP
	SAHF
	MOV	B,[BX],']'
	JP	NEXCH
NOTRIT:
	MOV	[BX],AL
	CMP	AL,''''
	JZ	EATQUO
	CALL	IDCHK
	JNC	GETID
NEXCH:
	INC	BX
	CALL	GETCH
IDRET:
	CALL	DELCHK
	JNZ	OPCHAR
	CMP	AL,' '
	JZ	OPCHAR
	RET
EATQUO:
	INC	BX
	CALL	GETCH
	MOV	[BX],AL
	CMP	AL,';'
	JZ	L0000
	CALL	DELCHK
L0000:	
	CMP	AL,''''
	JNZ	EATQUO
	JP	NEXCH
IDCHK:
	CMP	AL,'0'
	JC	RET
	CMP	AL,'9'+1
	CMC
	JNC	RET
	CMP	AL,40H
	JC	RET
	AND	AL,5FH
	CMP	AL,'A'
	JC	RET
	CMP	AL,'Z'+1
	CMC
	RET
GETID:
	MOV	[BX],AL
	MOV	CH,1
LODID:
	INC	BX
	CALL	GETCH
	CALL	IDCHK
	JC	RWCHK
	MOV	[BX],AL
	INC	CH
	JP	LODID
RWCHK:
	LAHF
	XCHG	AH,AL
	PUSH	AX
	XCHG	AH,AL
	PUSH	BX
	DEC	BX
	DEC	CH
	MOV	DL,CH
	JZ	LOOKRW
	MOV	DL,[BX]
	DEC	BX
	DEC	CH
	JNZ	NORW
LOOKRW:
	MOV	AL,[BX]
	MOV	DH,AL
	PUSH	BX
	MOV	BX,RWTAB
	MOV	CX,LENRW
RWLK:
	UP
	MOV	DI,BX
	REPNZ
	SCAB
	MOV	BX,DI
	JNZ	NOTRW
	PUSH	BX
	PUSH	CX
	MOV	CX,LENRW-1
	LAHF
	ADD	BX,CX
	RCR	SI
	SAHF
	RCL	SI
	MOV	AL,[BX]
	POP	CX
	POP	BX
	CMP	AL,DL
	JZ	HAVRW
	MOV	AL,CL
	OR	AL,AL
	MOV	AL,DH
	JNZ	RWLK
NOTRW:
	POP	BX
NORW:
	POP	BX
ENDRW:
	POP	AX
	XCHG	AH,AL
	SAHF
	JMP	IDRET
HAVRW:
	POP	BX
	INC	CL
	MOV	[BX],CL
	INC	BX
	POP	DX
	PUSH	BX
	MOV	AL,CL
	MOV	BX,IXSI
	CMP	AL,RSI
	JZ	IXIY
	MOV	BX,IYDI
	CMP	AL,RDI
	JNZ	NORW
IXIY:
	LAHF
	XCHG	AX,BP
	SAHF
	JZ	NOTENC
	LAHF
	XCHG	AX,BP
	SAHF
	CALL	OUTSTR
	JP	NORW
NOTENC:
	LAHF
	XCHG	AX,BP
	SAHF
	POP	BX
	DEC	BX
	MOV	B,[BX],'['
	INC	BX
	ADD	AL,RIX-1
	MOV	[BX],AL
	INC	BX
	MOV	B,[BX],']'
	INC	BX
	JP	ENDRW
	RET
FINDOP:
	MOV	BX,OPCODE
	MOV	CX,5
	XOR	AL,AL
	UP
	MOV	DI,BX
	REPNZ
	SCAB
	MOV	BX,DI
	JNZ	OPERR
	MOV	AL,4
	SUB	AL,CL
	JZ	RET
	DEC	AL
	JZ	OPERR
	MOV	CL,AL
	DEC	BX
	DEC	BX
	OR	B,[BX],080H
	MOV	AL,[OPCODE]
	SUB	AL,'A'
	JC	OPERR
	ADD	AL,AL
	MOV	DL,AL
	MOV	DH,0
	MOV	BX,OPTAB
	LAHF
	ADD	BX,DX
	RCR	SI
	SAHF
	RCL	SI
	MOV	DL,[BX]
	INC	BX
	MOV	DH,[BX]
	XCHG	DX,BX
	MOV	AL,9
	CALL	PUTCH
LOOKOP:
	MOV	AL,[BX]
	OR	AL,AL
	JZ	OPERR
	MOV	DX,OPCODE+1
	MOV	CH,CL
LOOKLP:
	MOV	SI,DX
	LODB
	CMP	AL,[BX]
	JNZ	NEXOP
	INC	DX
	INC	BX
	DEC	CH
	JNZ	LOOKLP
	MOV	DX,[BX]
	MOV	BX,[BX+2]
	JMP	DX
NEXOP:
	RCR	SI
	TEST	B,[BX],080H
	RCL	SI
	LAHF
	INC	BX
	SAHF
	JZ	NEXOP
	MOV	DX,4
	LAHF
	ADD	BX,DX
	RCR	SI
	SAHF
	RCL	SI
	JP	LOOKOP
OPERR:
	MOV	BX,OPCODE
	CALL	OUTSTR
	CALL	TWOOPS
	MOV	BX,OPCDER
	CALL	OUTSTR
	JMP	ENLIN
LD:
	CALL	OUTSTR
	MOV	BX,OP1
	MOV	DX,OP2+1
	CALL	LCHECK
	JNZ	$+5
	JMP	LDAX
	XCHG	DX,BX
	DEC	BX
	INC	DX
	CALL	LCHECK
	JNZ	$+5
	JMP	STAX
;If immediate move, check for byte memory reference
	MOV	AL,[OP2]
	CMP	AL,20H		;Could be immediate?
	MOV	AL,9
	JC	L0001
	CALL	BYTCHK		;Add "B," if memory reference
L0001:	
	CALL	TRAN1
	JP	TRNOP2
TWOOPS:
	CALL	TRNOP1
TRNOP2:
	MOV	AL,','
TRAN2:
	MOV	BX,OP2
PTRANS:
	CALL	PUTCH
TRANS:
	MOV	AL,[BX]
	LAHF
	INC	BX
	SAHF
	OR	AL,AL
	JZ	RET
	CALL	TRNTOK
	JP	TRANS
LCHECK:
	MOV	AL,[BX]
	CMP	AL,RAL
	JNZ	RET
	MOV	SI,DX
	LODB
	CMP	AL,RCX
	JZ	RET
	CMP	AL,RDX
	RET

ONEOP:
	CALL	OUTSTR
	MOV	AL,9
	CALL	BYTCHK		;If memory reference, add "B," flag
	JMPS	TRAN1

TRNOP1:
	MOV	AL,9
TRAN1:
	MOV	BX,OP1
	JP	PTRANS
IN:
	MOV	AL,[OP1]
	CMP	AL,RAL
	XCHG	DX,BX
	MOV	BX,OP2
	JZ	GETPORT
	MOV	BX,SAVEAX
	CALL	OUTSTR
	CALL	OUTSTR
	MOV	BX,OP2
	CALL	GETPORT
	MOV	BX,MOV0
	CALL	ONEOP
	MOV	AL,','
	CALL	PUTCH
	MOV	AL,RAL
	CALL	TRNTOK
IODONE:
	MOV	BX,RESTAX
	JMP	OUTSTR
OUT:
	MOV	AL,[OP2]
	XCHG	DX,BX
	MOV	BX,OP1
	CMP	AL,RAL
	JZ	GETOUT
	MOV	BX,SAVEAX
	CALL	OUTSTR
	MOV	BX,MOVAL
	CALL	OUTSTR
	CALL	TRNOP2
	MOV	BX,CRLFTB
	CALL	OUTSTR
	MOV	BX,OP1
	CALL	GETOUT
	JP	IODONE
GETPORT:
	MOV	AL,[BX]
	CMP	AL,'['
	JNZ	NOBRAK
	LAHF
	INC	BX
	SAHF
	PUSH	BX
	MOV	CX,80
	MOV	AL,']'
	UP
	MOV	DI,BX
	REPNZ
	SCAB
	MOV	BX,DI
	LAHF
	DEC	BX
	SAHF
	MOV	B,[BX],0
	POP	BX
NOBRAK:
	MOV	AL,[BX]
	CMP	AL,RGCL
	JNZ	FIXPOR
	MOV	BX,IO1
	CALL	OUTSTR
	XCHG	DX,BX
	CALL	OUTSTR
	MOV	AL,RDX
	CALL	TRNTOK
	MOV	BX,IO2
	JMP	OUTSTR
GETOUT:
	CALL	GETPORT
	JNC	RET
	MOV	BX,BADIO
	JMP	OUTSTR
FIXPOR:
	XCHG	DX,BX
	CALL	OUTSTR
	XCHG	DX,BX
	JMP	TRANS
LDAX:
	MOV	BX,LDAX1
LSAX:
	CALL	OUTSTR
	MOV	SI,DX
	LODB
	CALL	TRNTOK
	JP	OUTSTR
STAX:
	MOV	BX,STAX1
	JP	LSAX
TRNTOK:
	CMP	AL,' '
	JC	$+5
	JMP	PUTCH
	PUSH	BX
	PUSH	CX
	MOV	CL,AL
	MOV	CH,0
	MOV	BX,TOKTAB-2
	LAHF
	ADD	BX,CX
	RCR	SI
	SAHF
	RCL	SI
	LAHF
	ADD	BX,CX
	RCR	SI
	SAHF
	RCL	SI
	MOV	AL,[BX]
	CALL	PUTCH
	INC	BX
	MOV	AL,[BX]
	POP	CX
	POP	BX
	OR	AL,AL
	JZ	RET
	JMP	PUTCH
PUSH:
	MOV	DX,PUSHAF
	JP	AFCHK
POP:
	MOV	DX,POPAF
AFCHK:
	MOV	AL,[OP1]
	CMP	AL,RAX
	JNZ	ONEOPJ
	XCHG	DX,BX
OUTSTR:
	MOV	AL,[BX]
	OR	AL,AL
	JNZ	L0002
	CALL	NEWOP
L0002:	
	CALL	PUTCH
	INC	BX
	ADD	AL,AL
	JNC	OUTSTR
	RET
NEWOP:
	MOV	AL,13
	CALL	PUTCH
	MOV	AL,10
	CALL	PUTCH
	MOV	AL,9
	RET
LDDR:
	CALL	OUTSTR
	MOV	BX,BLMOVE
	JP	OUTSTR
CPDR:
	CALL	OUTSTR
	MOV	BX,CMPREP
	JP	OUTSTR
ADD:
	MOV	AL,[OP1]
	CMP	AL,RBX
	JZ	DAD
ARITH:
	CALL	OUTSTR
	MOV	AL,[OP2]
	OR	AL,AL
	JZ	$+5
	JMP	TWOOPS
	MOV	AL,9
	CALL	PUTCH
	MOV	AL,RAL
	CALL	TRNTOK
	MOV	AL,','
	JMP	TRAN1
ACCUM:
	CALL	OUTSTR
	MOV	AL,9
	CALL	PUTCH
	MOV	AL,RAL
	JMP	TRNTOK
ONEOPJ:	JMP	ONEOP
DAD:
	MOV	BX,DAD1
	CALL	OUTSTR
	CALL	TWOOPS
	MOV	BX,DAD2
	JP	OUTSTR

INCDEC:
	MOV	AL,[OP1]
	CMP	AL,RCX+1	;16-bit?
	JNC	ONEOPJ
	MOV	BX,LAHF
	CALL	OUTSTR
	XCHG	DX,BX
	MOV	BX,OPCODE-1
	CALL	ONEOP
	XCHG	DX,BX
OUTSTRJ:
	JMP	OUTSTR
JUMP:
	MOV	AL,[OP1]
	CMP	AL,'['
	JNZ	DIRECT
	MOV	AL,[OP1+1]
	MOV	[OP1],AL
	XOR	AL,AL
	MOV	[OP1+1],AL
DIRECT:
	MOV	AL,[OP2]
	OR	AL,AL
	JZ	ONEOPJ
	CALL	FIXCON
	MOV	BX,OP2
OUTCON:
	MOV	CH,AL
	MOV	AL,'J'
	CALL	PUTCH
	MOV	AL,CH
	CALL	TRNTOK
	MOV	AL,9
	CALL	PTRANS
	MOV	AL,CH
	CMP	AL,ODDPAR
	MOV	BX,WARNPA
	JZ	OUTSTRJ
	CMP	AL,EVEPAR
	JZ	OUTSTRJ
	RET
FIXCON:
	MOV	AL,[OP1]
	CMP	AL,RGCL
	JNZ	RET
	MOV	AL,CY
	RET
RETURN:
	MOV	AL,[OP1]
	OR	AL,AL
	JZ	OUTSTRJ
	MOV	BX,'R'+4500H	;"RE"
	MOV	[OP2],BX
	MOV	BX,'T'
	MOV	[OP2+2],BX
	JP	DIRECT
ONEOPJ1:
	JMP	ONEOP
DOCALL:
	MOV	AL,[OP2]
	OR	AL,AL
	JZ	ONEOPJ1
	CALL	FIXCON
	DEC	AL
	XOR	AL,1
	INC	AL
	MOV	BX,LABEL
	CALL	OUTCON
	MOV	BX,OPCODE-1
	CALL	OUTSTR
	MOV	AL,[OP2]
	OR	AL,AL
	MOV	AL,9
	MOV	BX,OP2
	JZ	L0003
	CALL	PTRANS
L0003:	
	MOV	BX,CRLF
	CALL	OUTSTR
	CALL	TRANS
	CALL	OUTSTR
	MOV	BX,LABEL+4
NEXLAB:
	INC	[BX]
	MOV	AL,[BX]
	CMP	AL,'9'+1
	JNZ	RET
	MOV	B,[BX],'0'
	LAHF
	DEC	BX
	SAHF
	JP	NEXLAB
EX:
	MOV	AL,[OP1]
	CMP	AL,RAX
	JZ	OUTSTRJ1
	MOV	AL,[OP1+1]
	CMP	AL,STP
	JZ	XTHL
	MOV	BX,XCHG
	CALL	OUTSTR
	JMP	TWOOPS
XTHL:
	MOV	BX,XTHL1
	CALL	OUTSTR
	CALL	TRNOP2
	MOV	BX,XTHL2
OUTSTRJ1:
	JMP	OUTSTR
PSEUDO:
	CALL	ONEOP
	MOV	AL,[OP2]
	OR	AL,AL
	JZ	RET
	JMP	TRNOP2
	RET
BITSET:
	MOV	CL,0
	JP	SETRES
RES:
	MOV	CL,-1
SETRES:
	CALL	OUTSTR
	PUSH	BX
	MOV	AL,[OP2]
	CMP	AL,'['
	MOV	AL,9
	JNZ	L0004
	CALL	BFLAG
L0004:	
	CALL	TRAN2
	MOV	AL,','
	CALL	PUTCH
	CALL	GETBIT
	MOV	BX,BITERR
	JNC	L0005
	CALL	OUTSTR
L0005:	
	POP	BX
	JMP	OUTSTR

BYTCHK:
;Check if memory reference and add "B," for byte mode
	CMP	B,[OP1],"["	;Memory reference?
	JNZ	RET
	CMP	B,[OP1+1],RIX	;Referencing IX as a word?
	JZ	RET
	CMP	B,[OP1+1],RIY
	JZ	RET
BFLAG:
	CALL	PUTCH
	MOV	AL,'B'
	CALL	PUTCH
	MOV	AL,','
	RET

GETBIT:
	MOV	AL,[OP1+1]
	OR	AL,AL
	STC
	JNZ	RET
	MOV	AL,[OP1]
	SUB	AL,'0'
	JC	RET
	CMP	AL,8
	CMC
	JC	RET
	MOV	CH,AL
	INC	CH
	XOR	AL,AL
	STC
SHFT:
	RCL	AL
	DEC	CH
	JNZ	SHFT
	XOR	AL,CL
	MOV	CH,AL
	MOV	AL,'0'
	CALL	PUTCH
	MOV	AL,CH
	RCR	AL
	RCR	AL
	RCR	AL
	RCR	AL
	CALL	HEX
	MOV	AL,CH
	CALL	HEX
	MOV	AL,'H'
	JMP	PUTCH
OPTAB:
	DW	AOPS,BOPS,COPS,DOPS,EOPS
	DW	FOPS,GOPS,HOPS,IOPS,JOPS
	DW	KOPS,LOPS,MOPS,NOPS,OOPS
	DW	POPS,QOPS,ROPS,SOPS,TOPS
	DW	UOPS,VOPS,WOPS,XOPS,YOPS
	DW	ZOPS
AOPS:
	DM	'DD'
	DW	ADD,OPCODE
	DM	'DC'
	DW	ARITH,OPCODE
	DM	'ND'
	DW	ARITH,OPCODE
	DB	0
BOPS:
	DM	'IT'
	DW	BITSET,TESBIT
	DB	0
COPS:
	DM	'ALL'
	DW	DOCALL,OPCODE
	DM	'P'
	DW	ARITH,CMP
	DM	'PL'
	DW	ACCUM,NOT
	DM	'PIR'
	DW	OUTSTR,CPIR
	DM	'PDR'
	DW	CPDR,DOWN
	DM	'CF'
	DW	OUTSTR,CMC
	DB	0
DOPS:
	DM	'EC'
	DW	INCDEC,OPCODE
	DM	'JNZ'
	DW	ONEOP,DJNZ
	DM	'AA'
	DW	OUTSTR,OPCODE
	DM	'I'
	DW	OUTSTR,OPCODE
	DM	'W'
	DW	PSEUDO,OPCODE
	DM	'B'
	DW	PSEUDO,OPCODE
	DM	'M'
	DW	PSEUDO,OPCODE
	DM	'S'
	DW	ONEOP,OPCODE
	DB	0
EOPS:
	DM	'X'
	DW	EX,EXAF
	DM	'I'
	DW	OUTSTR,OPCODE
	DM	'XX'
	DW	OUTSTR,EXX
	DM	'QU'
	DW	ONEOP,OPCODE
	DM	'NDIF'
	DW	OUTSTR,OPCODE
	DB	0
FOPS:
	DB	0
GOPS:
	DB	0
HOPS:
	DM	'ALT'
	DW	OUTSTR,HLT
	DB	0
IOPS:
	DM	'NC'
	DW	INCDEC,OPCODE
	DM	'N'
	DW	IN,INB
	DM	'F'
	DW	ONEOP,OPCODE
	DB	0
JOPS:
	DM	'R'
	DW	JUMP,JR
	DM	'P'
	DW	JUMP,JMP
	DB	0
KOPS:
	DB	0
LOPS:
	DM	'D'
	DW	LD,MOV
	DM	'DIR'
	DW	OUTSTR,UP
	DM	'DDR'
	DW	LDDR,DOWN
	DB	0
MOPS:
	DB	0
NOPS:
	DM	'EG'
	DW	ACCUM,OPCODE
	DB	0
OOPS:
	DM	'R'
	DW	ARITH,OPCODE
	DM	'UT'
	DW	OUT,OUTB
	DM	'RG'
	DW	ONEOP,OPCODE
	DB	0
POPS:
	DM	'OP'
	DW	POP,OPCODE
	DM	'USH'
	DW	PUSH,OPCODE
	DB	0
QOPS:
	DB	0
ROPS:
	DM	'ET'
	DW	RETURN,OPCODE
	DM	'LA'
	DW	ACCUM,RCL
	DM	'RA'
	DW	ACCUM,RCR
	DM	'LCA'
	DW	ACCUM,ROL
	DM	'RCA'
	DW	ACCUM,ROR
	DM	'L'
	DW	ONEOP,RCL
	DM	'R'
	DW	ONEOP,RCR
	DM	'LC'
	DW	ONEOP,ROL
	DM	'RC'
	DW	ONEOP,ROR
	DM	'ES'
	DW	RES,RESBIT
	DM	'ETI'
	DW	OUTSTR,IRET
	DM	'ETN'
	DW	OUTSTR,IRET
	DM	'ST'
	DW	ONEOP,CALL
	DB	0
SOPS:
	DM	'UB'
	DW	ARITH,OPCODE
	DM	'BC'
	DW	ARITH,SBB
	DM	'LA'
	DW	ONEOP,SAL
	DM	'RA'
	DW	ONEOP,SAR
	DM	'RL'
	DW	ONEOP,SHR
	DM	'CF'
	DW	OUTSTR,STC
	DM	'ET'
	DW	BITSET,SETBIT
	DB	0
TOPS:
	DB	0
UOPS:
	DB	0
VOPS:
	DB	0
WOPS:
	DB	0
XOPS:
	DM	'OR'
	DW	ARITH,OPCODE
	DB	0
YOPS:
	DB	0
ZOPS:
	DB	0
LDAX1:	DM	9,'SI,'
	DM	0,'LODB'
STAX1:	DM	9,'DI,'
	DM	0,'STOB'
PUSHAF:	DB	'LAHF',0,'XCHG',9,'AH,AL',0,'PUSH',9,'AX',0
	DM	'XCHG',9,'AH,AL'
POPAF:	DM	'POP',9,'AX',0,'XCHG',9,'AH,AL',0,'SAHF'
DOWN:	DM	'DOWN'
UP:	DB	'UP'
BLMOVE:	DB	0,'MOV',9,'SI,BX',0,'MOV',9,'DI,DX'
	DB	0,'REP',0,'MOVB',0,'MOV',9,'DX,DI'
	DM	0,'MOV',9,'BX,SI'
CPIR:	DB	'UP'
CMPREP:	DB	0,'MOV',9,'DI,BX',0,'REPNZ',0,'SCAB'
	DM	0,'MOV',9,'BX,DI'
DAD1:	DM	'LAHF',0,'ADD'
DAD2:	DM	0,'RCR',9,'SI',0,'SAHF',0,'RCL',9,'SI'
LAHF:	DM	'LAHF'
	DM	0,'SAHF'
DJNZ:	DB	'DEC',9,'CH',13,10
	DB	'; *** WARNING: DJNZ does not affect flags - DEC does.',0
	DM	'JNZ'
WARNPA:	DM	13,10,'; *** WARNING: Parity flag not always same as Z80.'
IO1:	DB	'MOV',9,'DI,DX',0,'MOV',9,'DL,CL',0
	DM	'XOR',9,'DH,DH',13,10,9
IO2:	DM	0,'MOV',9,'DX,DI'
BADIO:	DM	13,10,'; *** WARNING: Flags not same as Z80.'
BITERR:	DM	13,10,' *** ERROR: Cannot determine bit number.'
SETBIT:	DM	'LAHF',0,'OR'
	DM	0,'SAHF'
RESBIT:	DM	'LAHF',0,'AND'
	DM	0,'SAHF'
TESBIT:	DM	'RCR',9,'AH',0,'TEST'
	DM	0,'RCL',9,'AH'
XTHL1:	DM	'POP',9,'SI',0,'XCHG',9,'SI'
XTHL2:	DM	0,'PUSH',9,'SI'
EXX:	DB	'XCHG',9,'BX,[HL]',0,'XCHG',9,'DX,[DE]',0
	DM	'XCHG',9,'CX,[BC]'
EXAF:	DM	'LAHF',0,'XCHG',9,'AX,BP',0,'SAHF'
MOVAL:	DM	0,'MOV',9,'AL'
IXSI:	DM	9,'MOV',9,'SI,[IX]',13,10
IYDI:	DM	9,'MOV',9,'DI,[IY]',13,10
RESTAX:	DB	0
SAVEAX:	DM	'XCHG',9,'AX,SI'
CRLFTB:	DM	13,10,9
INB:	DM	'INB',9
OUTB:	DM	'OUTB',9
XCHG:	DM	'XCHG'
JMP:	DM	'JMP'
JR:	DM	'JMPS'
RCL:	DM	'RCL'
RCR:	DM	'RCR'
ROL:	DM	'ROL'
ROR:	DM	'ROR'
SAL:	DM	'SAL'
SAR:	DM	'SAR'
SHR:	DM	'SHR'
STC:	DM	'STC'
IRET:	DM	'IRET'
HLT:	DM	'HLT'
CMC:	DM	'CMC'
NOT:	DM	'NOT'
MOV0:	DB	0
MOV:	DM	'MOV'
CMP:	DM	'CMP'
SBB:	DM	'SBB'
CALL:	DM	'CALL'
TOKTAB:
	DB	'SIDI'
	DB	'PEPOS',0,'NSNZZ',0,'NCC',0
	DB	'AXSPBXDXCX'
	DB	'BLBHDLDHCLCHALIXIY'
RWTAB:
	DB	'ABCDEHLBDHSACNZNPMPPII'
LENRW:	EQU	$-RWTAB
	DB	0,0,0,0,0,0,0,'CELPF',0,'C',0,'Z',0,0,'OEYX'
HEADER:	DB	13,10,'Z80 to 8086 Translator  version 2.21',13,10,'$'
NOROOM:	DB	13,10,'File creation error',13,10,'$'
NOFILE:	DB	13,10,'File not found',13,10,'$'
ENDMES:	DB	13,10,'Translation complete',13,10,'$'
WRTERR:	DB	13,10,'Out of disk space',13,10,'$'
OPCDER:	DM	13,10,'*** Opcode Error '
CRLF:	DM	13,10
LABEL:	DB	'L0000',0
	DM	':',9
PUTPT:	DS	2
GETPT:	DS	2
CHAR:	DS	1
	DB	0
OPCODE:	DS	80
OP1:	DS	80
OP2:	DS	80
PUTBUF:	DS	128
GETBUF:	DS	128
PUTFCB:	DS	33
	DS	50
STACK:	EQU	$
	ORG	1	;This is really just for equates without EQU
RSI:	DS	1
RDI:	DS	1
ODDPAR:	DS	1
EVEPAR:	DS	1
	DS	5	;MINUS,PLUS,NOT ZERO,ZERO,NOT CARRY
CY:	DS	1
RAX:	DS	1
STP:	DS	1
RBX:	DS	1
RDX:	DS	1
RCX:	DS	1
RBL:	DS	1
RBH:	DS	1
RDL:	DS	1
RDH:	DS	1
RGCL:	DS	1
RCH:	DS	1
RAL:	DS	1
RIX:	DS	1
RIY:	DS	1

```