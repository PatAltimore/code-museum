'use strict';

const CACHE_PREFIX = 'hc-img-';

// --- Instruction reference tables ---

const INSTRUCTIONS_6502 = {
  ADC: { full: 'Add with Carry', desc: 'Adds the operand and carry flag to the accumulator. Sets carry, overflow, zero, and negative flags.' },
  AND: { full: 'Logical AND', desc: 'Performs a bitwise AND between the accumulator and the operand. Result stored in accumulator.' },
  ASL: { full: 'Arithmetic Shift Left', desc: 'Shifts all bits left one position. Bit 7 moves into carry flag; bit 0 becomes 0.' },
  BCC: { full: 'Branch if Carry Clear', desc: 'Branches to a relative address if the carry flag is 0.' },
  BCS: { full: 'Branch if Carry Set', desc: 'Branches to a relative address if the carry flag is 1.' },
  BEQ: { full: 'Branch if Equal (ZF=1)', desc: 'Branches to a relative address if the zero flag is 1 (last result was zero).' },
  BIT: { full: 'Bit Test', desc: 'Tests bits in memory against the accumulator. Sets zero, overflow, and negative flags without changing memory or accumulator.' },
  BMI: { full: 'Branch if Minus (NF=1)', desc: 'Branches if the negative flag is 1 (last result was negative).' },
  BNE: { full: 'Branch if Not Equal (ZF=0)', desc: 'Branches to a relative address if the zero flag is 0.' },
  BPL: { full: 'Branch if Plus (NF=0)', desc: 'Branches if the negative flag is 0 (last result was positive or zero).' },
  BRK: { full: 'Force Interrupt', desc: 'Pushes the PC and status register onto the stack, then jumps through the IRQ/BRK vector at $FFFE–$FFFF.' },
  BVC: { full: 'Branch if Overflow Clear', desc: 'Branches if the overflow flag is 0.' },
  BVS: { full: 'Branch if Overflow Set', desc: 'Branches if the overflow flag is 1.' },
  CLC: { full: 'Clear Carry Flag', desc: 'Sets the carry flag to 0.' },
  CLD: { full: 'Clear Decimal Mode', desc: 'Clears the decimal mode flag, disabling BCD arithmetic.' },
  CLI: { full: 'Clear Interrupt Disable', desc: 'Enables maskable interrupts by clearing the interrupt disable flag.' },
  CLV: { full: 'Clear Overflow Flag', desc: 'Clears the overflow flag.' },
  CMP: { full: 'Compare Accumulator', desc: 'Subtracts the operand from the accumulator without storing the result. Sets carry, zero, and negative flags.' },
  CPX: { full: 'Compare X Register', desc: 'Subtracts the operand from the X register without storing the result. Sets carry, zero, and negative flags.' },
  CPY: { full: 'Compare Y Register', desc: 'Subtracts the operand from the Y register without storing the result. Sets carry, zero, and negative flags.' },
  DEC: { full: 'Decrement Memory', desc: 'Subtracts 1 from a memory location. Sets zero and negative flags.' },
  DEX: { full: 'Decrement X Register', desc: 'Subtracts 1 from the X register. Sets zero and negative flags.' },
  DEY: { full: 'Decrement Y Register', desc: 'Subtracts 1 from the Y register. Sets zero and negative flags.' },
  EOR: { full: 'Exclusive OR', desc: 'Performs a bitwise XOR between the accumulator and the operand. Result stored in accumulator.' },
  INC: { full: 'Increment Memory', desc: 'Adds 1 to a memory location. Sets zero and negative flags.' },
  INX: { full: 'Increment X Register', desc: 'Adds 1 to the X register. Sets zero and negative flags.' },
  INY: { full: 'Increment Y Register', desc: 'Adds 1 to the Y register. Sets zero and negative flags.' },
  JMP: { full: 'Jump', desc: 'Sets the program counter to the specified address. Supports absolute and indirect addressing.' },
  JSR: { full: 'Jump to Subroutine', desc: 'Pushes the return address (PC−1) onto the stack, then jumps to the target address.' },
  LDA: { full: 'Load Accumulator', desc: 'Loads a byte from memory or an immediate value into the accumulator. Sets zero and negative flags.' },
  LDX: { full: 'Load X Register', desc: 'Loads a byte into the X register. Sets zero and negative flags.' },
  LDY: { full: 'Load Y Register', desc: 'Loads a byte into the Y register. Sets zero and negative flags.' },
  LSR: { full: 'Logical Shift Right', desc: 'Shifts all bits right one position. Bit 0 moves into carry flag; bit 7 becomes 0.' },
  NOP: { full: 'No Operation', desc: 'Does nothing for one instruction cycle. Commonly used for timing delays or code alignment.' },
  ORA: { full: 'Logical Inclusive OR', desc: 'Performs a bitwise OR between the accumulator and the operand. Result stored in accumulator.' },
  PHA: { full: 'Push Accumulator', desc: 'Pushes the current value of the accumulator onto the stack.' },
  PHP: { full: 'Push Processor Status', desc: 'Pushes the processor status register (flags) onto the stack.' },
  PLA: { full: 'Pull Accumulator', desc: 'Pops a byte from the stack into the accumulator. Sets zero and negative flags.' },
  PLP: { full: 'Pull Processor Status', desc: 'Pops the processor status register from the stack, restoring all flags.' },
  ROL: { full: 'Rotate Left', desc: 'Shifts all bits left; carry flag moves into bit 0, bit 7 moves into carry.' },
  ROR: { full: 'Rotate Right', desc: 'Shifts all bits right; carry flag moves into bit 7, bit 0 moves into carry.' },
  RTI: { full: 'Return from Interrupt', desc: 'Pulls the processor status and program counter from the stack, returning from an interrupt handler.' },
  RTS: { full: 'Return from Subroutine', desc: 'Pulls the return address from the stack and jumps there, returning from a JSR call.' },
  SBC: { full: 'Subtract with Carry', desc: 'Subtracts the operand and the inverse of the carry flag from the accumulator.' },
  SEC: { full: 'Set Carry Flag', desc: 'Sets the carry flag to 1.' },
  SED: { full: 'Set Decimal Flag', desc: 'Sets the decimal mode flag, enabling BCD arithmetic.' },
  SEI: { full: 'Set Interrupt Disable', desc: 'Disables maskable interrupts by setting the interrupt disable flag.' },
  STA: { full: 'Store Accumulator', desc: 'Writes the value of the accumulator to a memory address.' },
  STX: { full: 'Store X Register', desc: 'Writes the value of the X register to a memory address.' },
  STY: { full: 'Store Y Register', desc: 'Writes the value of the Y register to a memory address.' },
  TAX: { full: 'Transfer Accumulator to X', desc: 'Copies the accumulator into the X register. Sets zero and negative flags.' },
  TAY: { full: 'Transfer Accumulator to Y', desc: 'Copies the accumulator into the Y register. Sets zero and negative flags.' },
  TSX: { full: 'Transfer Stack Pointer to X', desc: 'Copies the stack pointer into the X register. Sets zero and negative flags.' },
  TXA: { full: 'Transfer X to Accumulator', desc: 'Copies the X register into the accumulator. Sets zero and negative flags.' },
  TXS: { full: 'Transfer X to Stack Pointer', desc: 'Copies the X register into the stack pointer. Does not affect flags.' },
  TYA: { full: 'Transfer Y to Accumulator', desc: 'Copies the Y register into the accumulator. Sets zero and negative flags.' },
};

const INSTRUCTIONS_8086 = {
  AAA:   { full: 'ASCII Adjust After Addition', desc: 'Adjusts AL after BCD addition. Adds 6 to AL and 1 to AH if the low nibble > 9 or AF is set.' },
  AAD:   { full: 'ASCII Adjust AX Before Division', desc: 'Multiplies AH by 10 and adds it to AL, clearing AH. Prepares unpacked BCD for division.' },
  AAM:   { full: 'ASCII Adjust AX After Multiply', desc: 'Divides AL by 10; quotient goes into AH, remainder into AL. Adjusts after BCD multiply.' },
  AAS:   { full: 'ASCII Adjust AL After Subtraction', desc: 'Adjusts AL for BCD subtraction. Subtracts 6 from AL if a borrow occurred.' },
  ADC:   { full: 'Add with Carry', desc: 'Adds source and carry flag to destination. Used to chain multi-word additions.' },
  ADD:   { full: 'Add', desc: 'Adds source to destination and stores the result. Updates all arithmetic flags.' },
  AND:   { full: 'Logical AND', desc: 'Bitwise AND between source and destination. Clears carry and overflow flags.' },
  CALL:  { full: 'Call Procedure', desc: 'Pushes the return address onto the stack and transfers control to the target.' },
  CBW:   { full: 'Convert Byte to Word', desc: 'Sign-extends AL into AX by copying bit 7 of AL into all bits of AH.' },
  CLC:   { full: 'Clear Carry Flag', desc: 'Sets the carry flag (CF) to 0.' },
  CLD:   { full: 'Clear Direction Flag', desc: 'Sets DF to 0 so string operations increment SI/DI (low to high).' },
  CLI:   { full: 'Clear Interrupt Flag', desc: 'Disables maskable hardware interrupts by clearing IF.' },
  CMC:   { full: 'Complement Carry Flag', desc: 'Inverts the carry flag.' },
  CMP:   { full: 'Compare', desc: 'Subtracts source from destination without storing the result. Sets flags for conditional jumps.' },
  CMPS:  { full: 'Compare String', desc: 'Compares bytes or words at DS:SI and ES:DI, adjusting SI and DI by ±1/±2.' },
  CWD:   { full: 'Convert Word to Doubleword', desc: 'Sign-extends AX into DX:AX by copying bit 15 of AX into all bits of DX.' },
  DAA:   { full: 'Decimal Adjust AL After Addition', desc: 'Adjusts AL for packed BCD addition.' },
  DAS:   { full: 'Decimal Adjust AL After Subtraction', desc: 'Adjusts AL for packed BCD subtraction.' },
  DEC:   { full: 'Decrement', desc: 'Subtracts 1 from the operand. Sets overflow, sign, zero, parity, and auxiliary flags, but not carry.' },
  DIV:   { full: 'Unsigned Divide', desc: 'Divides AX (or DX:AX) by source. Quotient in AL (or AX), remainder in AH (or DX).' },
  ESC:   { full: 'Escape to Coprocessor', desc: 'Passes an instruction to a coprocessor (e.g. the 8087 FPU). The CPU fetches the memory operand but ignores the operation.' },
  HLT:   { full: 'Halt', desc: 'Stops instruction execution until an interrupt or reset occurs.' },
  IDIV:  { full: 'Signed Divide', desc: 'Signed division of AX (or DX:AX) by source. Quotient in AL (or AX), remainder in AH (or DX).' },
  IMUL:  { full: 'Signed Multiply', desc: 'Signed multiply of AL (or AX) by source. Result stored in AX (or DX:AX).' },
  IN:    { full: 'Input from Port', desc: 'Reads a byte or word from a hardware I/O port into AL or AX.' },
  INC:   { full: 'Increment', desc: 'Adds 1 to the operand. Sets overflow, sign, zero, parity, and auxiliary flags, but not carry.' },
  INT:   { full: 'Call Interrupt Procedure', desc: 'Generates a software interrupt. Pushes flags, CS, and IP, then vectors through the interrupt table. INT 21h is the MS-DOS API.' },
  INTO:  { full: 'Interrupt on Overflow', desc: 'Generates interrupt 4 if the overflow flag is set.' },
  IRET:  { full: 'Interrupt Return', desc: 'Returns from an interrupt handler by popping IP, CS, and flags from the stack.' },
  JA:    { full: 'Jump if Above (CF=0 & ZF=0)', desc: 'Short jump for unsigned greater-than.' },
  JAE:   { full: 'Jump if Above or Equal (CF=0)', desc: 'Short jump for unsigned greater-than-or-equal. Same as JNB/JNC.' },
  JB:    { full: 'Jump if Below (CF=1)', desc: 'Short jump for unsigned less-than. Same as JC/JNAE.' },
  JBE:   { full: 'Jump if Below or Equal (CF=1 or ZF=1)', desc: 'Short jump for unsigned less-than-or-equal.' },
  JC:    { full: 'Jump if Carry (CF=1)', desc: 'Short jump if carry flag is set. Same as JB.' },
  JCXZ:  { full: 'Jump if CX is Zero', desc: 'Short jump if CX = 0 (without affecting flags).' },
  JE:    { full: 'Jump if Equal (ZF=1)', desc: 'Short jump if zero flag is set. Same as JZ.' },
  JG:    { full: 'Jump if Greater (ZF=0 & SF=OF)', desc: 'Short jump for signed greater-than.' },
  JGE:   { full: 'Jump if Greater or Equal (SF=OF)', desc: 'Short jump for signed greater-than-or-equal.' },
  JL:    { full: 'Jump if Less (SF≠OF)', desc: 'Short jump for signed less-than.' },
  JLE:   { full: 'Jump if Less or Equal (ZF=1 or SF≠OF)', desc: 'Short jump for signed less-than-or-equal.' },
  JMP:   { full: 'Unconditional Jump', desc: 'Transfers control to the target address. Supports short (±127 bytes), near, and far forms.' },
  JNA:   { full: 'Jump if Not Above (CF=1 or ZF=1)', desc: 'Short jump for unsigned ≤. Same as JBE.' },
  JNAE:  { full: 'Jump if Not Above or Equal (CF=1)', desc: 'Short jump for unsigned <. Same as JB/JC.' },
  JNB:   { full: 'Jump if Not Below (CF=0)', desc: 'Short jump for unsigned ≥. Same as JAE.' },
  JNBE:  { full: 'Jump if Not Below or Equal (CF=0 & ZF=0)', desc: 'Short jump for unsigned >. Same as JA.' },
  JNC:   { full: 'Jump if No Carry (CF=0)', desc: 'Short jump if carry flag is clear.' },
  JNE:   { full: 'Jump if Not Equal (ZF=0)', desc: 'Short jump if zero flag is clear. Same as JNZ.' },
  JNG:   { full: 'Jump if Not Greater', desc: 'Short jump for signed ≤. Same as JLE.' },
  JNGE:  { full: 'Jump if Not Greater or Equal', desc: 'Short jump for signed <. Same as JL.' },
  JNL:   { full: 'Jump if Not Less (SF=OF)', desc: 'Short jump for signed ≥. Same as JGE.' },
  JNLE:  { full: 'Jump if Not Less or Equal (ZF=0 & SF=OF)', desc: 'Short jump for signed >. Same as JG.' },
  JNO:   { full: 'Jump if No Overflow (OF=0)', desc: 'Short jump if overflow flag is clear.' },
  JNP:   { full: 'Jump if No Parity (PF=0)', desc: 'Short jump if parity is odd.' },
  JNS:   { full: 'Jump if No Sign (SF=0)', desc: 'Short jump if sign flag is clear (result was non-negative).' },
  JNZ:   { full: 'Jump if Not Zero (ZF=0)', desc: 'Short jump if zero flag is clear.' },
  JO:    { full: 'Jump if Overflow (OF=1)', desc: 'Short jump if overflow flag is set.' },
  JP:    { full: 'Jump if Parity (PF=1)', desc: 'Short jump if parity is even.' },
  JPE:   { full: 'Jump if Parity Even (PF=1)', desc: 'Short jump if parity flag is set.' },
  JPO:   { full: 'Jump if Parity Odd (PF=0)', desc: 'Short jump if parity flag is clear.' },
  JS:    { full: 'Jump if Sign (SF=1)', desc: 'Short jump if sign flag is set (result was negative).' },
  JZ:    { full: 'Jump if Zero (ZF=1)', desc: 'Short jump if zero flag is set.' },
  LAHF:  { full: 'Load AH from Flags', desc: 'Copies SF, ZF, AF, PF, and CF into AH.' },
  LDS:   { full: 'Load Far Pointer using DS', desc: 'Loads a 32-bit far pointer from memory: offset into register, segment into DS.' },
  LEA:   { full: 'Load Effective Address', desc: 'Computes and stores the address of the source operand — no memory read. A common trick for arithmetic.' },
  LES:   { full: 'Load Far Pointer using ES', desc: 'Loads a 32-bit far pointer from memory: offset into register, segment into ES.' },
  LOCK:  { full: 'Assert Bus Lock Prefix', desc: 'Prefix that asserts the LOCK# signal during the next instruction, for multi-processor synchronization.' },
  LODS:  { full: 'Load String', desc: 'Loads a byte or word from DS:SI into AL or AX, then increments or decrements SI.' },
  LOOP:  { full: 'Loop', desc: 'Decrements CX; jumps to target if CX ≠ 0. The standard 8086 counted loop.' },
  LOOPE: { full: 'Loop while Equal', desc: 'Decrements CX; jumps if CX ≠ 0 and ZF = 1.' },
  LOOPNE:{ full: 'Loop while Not Equal', desc: 'Decrements CX; jumps if CX ≠ 0 and ZF = 0.' },
  MOV:   { full: 'Move', desc: 'Copies source to destination. The most common x86 instruction; supports register, memory, and immediate operands.' },
  MOVS:  { full: 'Move String', desc: 'Copies a byte or word from DS:SI to ES:DI, then adjusts SI and DI. Used with REP for block moves.' },
  MUL:   { full: 'Unsigned Multiply', desc: 'Multiplies AL (or AX) by source. Result in AX (or DX:AX).' },
  NEG:   { full: 'Negate', desc: "Replaces the operand with its two's-complement negation. Sets carry if operand was nonzero." },
  NOP:   { full: 'No Operation', desc: 'Does nothing for two clock cycles. Encoded as XCHG AX,AX (opcode 90h).' },
  NOT:   { full: 'Bitwise NOT', desc: "Inverts all bits of the operand (one's complement). Does not affect flags." },
  OR:    { full: 'Logical Inclusive OR', desc: 'Bitwise OR between source and destination. Clears carry and overflow flags.' },
  OUT:   { full: 'Output to Port', desc: 'Writes AL or AX to a hardware I/O port.' },
  POP:   { full: 'Pop from Stack', desc: 'Reads the word at the top of the stack into the operand, then increments SP by 2.' },
  POPF:  { full: 'Pop Flags', desc: 'Pops a word from the stack into the flags register.' },
  PUSH:  { full: 'Push onto Stack', desc: 'Decrements SP by 2 and writes the operand word to the top of the stack.' },
  PUSHF: { full: 'Push Flags', desc: 'Decrements SP by 2 and writes the flags register onto the stack.' },
  RCL:   { full: 'Rotate Left through Carry', desc: 'Rotates bits left; the carry flag participates as an extra bit in the rotation.' },
  RCR:   { full: 'Rotate Right through Carry', desc: 'Rotates bits right; the carry flag participates as an extra bit in the rotation.' },
  REP:   { full: 'Repeat String Operation', desc: 'Repeats the next string instruction (MOVS, STOS, etc.) CX times, decrementing CX each iteration.' },
  REPE:  { full: 'Repeat while Equal', desc: 'Repeats string instruction while CX ≠ 0 and ZF = 1.' },
  REPNE: { full: 'Repeat while Not Equal', desc: 'Repeats string instruction while CX ≠ 0 and ZF = 0.' },
  RET:   { full: 'Return from Procedure', desc: 'Pops the return address and jumps there. Near form pops IP; far form pops IP and CS.' },
  RETN:  { full: 'Near Return', desc: 'Pops only IP from the stack and returns within the same code segment.' },
  RETF:  { full: 'Far Return', desc: 'Pops IP and CS from the stack, returning to a different code segment.' },
  ROL:   { full: 'Rotate Left', desc: 'Rotates bits left; bit 7 wraps to bit 0 and also copies to carry flag.' },
  ROR:   { full: 'Rotate Right', desc: 'Rotates bits right; bit 0 wraps to bit 7 and also copies to carry flag.' },
  SAHF:  { full: 'Store AH into Flags', desc: 'Copies AH into the low byte of the flags register (SF, ZF, AF, PF, CF).' },
  SAL:   { full: 'Shift Arithmetic Left', desc: 'Shifts operand left by count; zeros fill from right. Identical encoding to SHL.' },
  SAR:   { full: 'Shift Arithmetic Right', desc: 'Shifts operand right by count; sign bit fills from left (preserves sign).' },
  SBB:   { full: 'Subtract with Borrow', desc: 'Subtracts source and carry flag from destination. Used to chain multi-word subtractions.' },
  SCAS:  { full: 'Scan String', desc: 'Compares AL or AX with the byte or word at ES:DI, then adjusts DI. Used with REPNE to search for a value.' },
  SHL:   { full: 'Shift Logical Left', desc: 'Shifts operand left by count; zeros fill from right. Bit shifted out goes into carry.' },
  SHR:   { full: 'Shift Logical Right', desc: 'Shifts operand right by count; zeros fill from left. Bit shifted out goes into carry.' },
  STC:   { full: 'Set Carry Flag', desc: 'Sets CF to 1.' },
  STD:   { full: 'Set Direction Flag', desc: 'Sets DF to 1 so string instructions decrement SI/DI (high to low).' },
  STI:   { full: 'Set Interrupt Flag', desc: 'Enables maskable interrupts by setting IF to 1.' },
  STOS:  { full: 'Store String', desc: 'Writes AL or AX to ES:DI, then adjusts DI. Used with REP to fill a block of memory.' },
  SUB:   { full: 'Subtract', desc: 'Subtracts source from destination, stores result in destination. Updates all arithmetic flags.' },
  TEST:  { full: 'Test (AND without storing)', desc: 'Bitwise AND between operands; sets flags but discards the result. Used to test individual bits.' },
  WAIT:  { full: 'Wait for Coprocessor', desc: 'Halts the CPU until the 8087 FPU signals it is done via the TEST pin.' },
  XCHG:  { full: 'Exchange', desc: 'Swaps the values of two operands. Atomic when one operand is memory.' },
  XLAT:  { full: 'Table Look-Up Translation', desc: 'Replaces AL with the byte at DS:BX+AL. Useful for character translation tables.' },
  XOR:   { full: 'Exclusive OR', desc: 'Bitwise XOR. Commonly used to zero a register (XOR AX,AX) or toggle bits.' },
};

const INSTRUCTIONS_MDL = {
  DEFINE:  { full: 'Define Global Function', desc: 'Creates a function object and binds it globally. The standard way to define named procedures in MDL/Muddle.' },
  DEFMAC:  { full: 'Define Macro', desc: 'Defines a compile-time macro that transforms code before evaluation.' },
  PROG:    { full: 'Sequential Program Block', desc: 'Evaluates its body forms in sequence. Supports RETURN to exit early with a value.' },
  REPEAT:  { full: 'Infinite Loop', desc: 'Evaluates body forms repeatedly until a RETURN exits the block. The standard MDL iteration construct.' },
  MAPF:    { full: 'Map with Final Function', desc: 'Applies a mapping function to successive elements of one or more sequences, collecting results.' },
  MAPR:    { full: 'Map over Rest Sequences', desc: 'Like MAPF but passes the remaining sequence (tail) rather than individual elements to the mapping function.' },
  COND:    { full: 'Conditional', desc: 'Evaluates condition–body pairs in sequence; executes and returns the first body whose condition is true.' },
  IF:      { full: 'If–Then–Else', desc: 'Evaluates condition; returns then-form if true, else-form if false.' },
  SET:     { full: 'Set Local Variable', desc: 'Binds an atom to a value in the current local environment.' },
  SETG:    { full: 'Set Global Variable', desc: 'Binds an atom to a value in the global environment, creating or replacing the binding.' },
  VALUE:   { full: 'Get Variable Value', desc: 'Returns the current value of an atom, checking local bindings first, then global.' },
  GVAL:    { full: 'Get Global Value', desc: 'Returns the global value of the named atom, ignoring local bindings.' },
  LVAL:    { full: 'Get Local Value', desc: 'Returns the local binding of the named atom in the current activation frame.' },
  GDECL:   { full: 'Global Declaration', desc: 'Declares the type of a global variable for the MDL type checker.' },
  MVTYPE:  { full: 'Make Valued Type', desc: 'Creates a new type name as a subtype of an existing primitive type.' },
  TYPE:    { full: 'Get Type', desc: 'Returns the MDL type name (an atom) of the argument.' },
  TYPEP:   { full: 'Type Predicate', desc: 'Returns true if the argument is of the specified type.' },
  PRIMTYPE: { full: 'Primitive Type', desc: 'Returns the underlying primitive type of an MDL object (LIST, VECTOR, ATOM, etc.).' },
  CHTYPE:  { full: 'Change Type', desc: 'Creates a new object with the same underlying value as the argument but with a different type tag.' },
  APPLY:   { full: 'Apply Function', desc: 'Calls a function with the specified arguments. Equivalent to calling the function directly.' },
  EVAL:    { full: 'Evaluate', desc: 'Evaluates its argument as an MDL expression in the current environment.' },
  CONS:    { full: 'Construct List Pair', desc: 'Prepends an element to a list, returning a new list.' },
  CAR:     { full: 'First Element', desc: 'Returns the first element of a list or structure. MDL equivalent of LISP CAR.' },
  CDR:     { full: 'Rest of List', desc: 'Returns all elements after the first. MDL equivalent of LISP CDR.' },
  CADR:    { full: 'Second Element (CAR of CDR)', desc: 'Returns the second element of a list.' },
  LIST:    { full: 'Create List', desc: 'Creates a new list from the given arguments.' },
  VECTOR:  { full: 'Create Vector', desc: 'Creates a new vector (fixed-length array) from the given arguments.' },
  STRING:  { full: 'Create String', desc: 'Creates a string from the given characters, or concatenates string arguments.' },
  FORM:    { full: 'Create Form Object', desc: 'Creates an unevaluated call form from a list of elements.' },
  FUNCTION:{ full: 'Create Anonymous Function', desc: 'Creates an anonymous function. Takes an argument list and body forms.' },
  PARSE:   { full: 'Parse String to MDL Object', desc: 'Reads and returns the first MDL object represented by the string.' },
  RETURN:  { full: 'Return from PROG or REPEAT', desc: 'Exits the current PROG or REPEAT block with the specified value.' },
  AGAIN:   { full: 'Restart PROG or REPEAT', desc: 'Jumps back to the beginning of the enclosing PROG or REPEAT without returning a value.' },
  EMPTY:   { full: 'Test for Empty Sequence', desc: 'Returns true if the argument is an empty list, vector, or string.' },
  REST:    { full: 'Rest of Sequence', desc: 'Returns a sequence starting from the second element, or the nth element if n is specified.' },
  NTH:     { full: 'Nth Element', desc: 'Returns the nth element (1-indexed) of a sequence.' },
  BACK:    { full: 'Move Sequence Pointer Back', desc: 'Returns a new sequence pointer moved back by n positions.' },
  PUTREST: { full: 'Replace Rest of List', desc: 'Destructively replaces the CDR (rest) of a list with a new sequence.' },
  PUT:     { full: 'Store into Structure', desc: 'Stores a value into a specific numbered slot of a structured object.' },
  LENGTH:  { full: 'Length of Sequence', desc: 'Returns the number of elements in a list, vector, or string.' },
  MEMQ:    { full: 'Find Member by Identity', desc: 'Searches a list for an element == (identical) to the key. Returns the tail or false.' },
  MEMBER:  { full: 'Find Matching Member', desc: 'Searches a list for an element structurally equal to the key. Returns the tail or false.' },
  FIRST:   { full: 'First Element', desc: 'Returns the first element of a sequence (equivalent to CAR).' },
  LAST:    { full: 'Last Element', desc: 'Returns the last element of a sequence.' },
  SORT:    { full: 'Sort Sequence', desc: 'Returns a sorted copy of a sequence using a comparison function.' },
  NOT:     { full: 'Logical NOT', desc: 'Returns false (<>) if the argument is true, or true (T) if the argument is false (<>).' },
  AND:     { full: 'Logical AND', desc: 'Evaluates arguments left to right; returns the last truthy value, or false if any is false.' },
  OR:      { full: 'Logical OR', desc: 'Evaluates arguments left to right; returns the first truthy value, or false if all are false.' },
  PRINC:   { full: 'Print without Escaping', desc: 'Prints its argument without surrounding quotes or escape characters.' },
  PRINI:   { full: 'Print in Internal Format', desc: 'Prints its argument in a form that can be read back by PARSE.' },
  TERPRI:  { full: 'Terminate Print Line', desc: 'Outputs a newline character.' },
  READCHR: { full: 'Read Character', desc: 'Reads and returns the next character from the current input channel.' },
  NEXTCHR: { full: 'Peek Next Character', desc: 'Returns the next character from input without consuming it.' },
  IN:      { full: 'Advance Sequence Pointer', desc: 'Advances a sequence pointer by n positions, returning the new pointer.' },
};

function extractInstruction(lineText, language) {
  const lang = language.toLowerCase();
  const trimmed = lineText.trim();
  if (!trimmed) return null;

  if (lang.includes('mdl') || lang.includes('muddle')) {
    // MDL: look for <FUNCNAME at the start of a form
    const m = trimmed.match(/<([A-Z][A-Z0-9?!-]*)/i);
    if (m) return m[1].toUpperCase();
    return null;
  }

  // Assembly (6502 or 8086): skip pure comment/directive-only lines
  if (trimmed.startsWith(';') || trimmed.startsWith('*')) return null;

  // If line starts at column 0 it may have a label — skip past it
  let rest = lineText;
  if (!/^ /.test(lineText)) {
    // Remove a label token (word followed by colon or whitespace at col 0)
    rest = lineText.replace(/^[A-Za-z_?.][A-Za-z0-9_?.]*[:\s]+/, '').trim();
  } else {
    rest = trimmed;
  }

  const token = rest.match(/^([A-Za-z]{2,})/);
  if (!token) return null;
  return token[1].toUpperCase();
}

function lookupInstruction(opcode, language) {
  const lang = language.toLowerCase();
  let table;
  if (lang.includes('6502')) table = INSTRUCTIONS_6502;
  else if (lang.includes('8086') || lang.includes('x86') || lang.includes('dos')) table = INSTRUCTIONS_8086;
  else if (lang.includes('mdl') || lang.includes('muddle')) table = INSTRUCTIONS_MDL;
  else return null;
  return table[opcode] || null;
}

function showInstructionPopup(opcode, info, lineEl) {
  removeLookup();
  const rect = lineEl.getBoundingClientRect();
  const el = document.createElement('div');
  el.className = 'lookup-popup instruction-popup';
  el.style.left = Math.min(rect.left + 48, window.innerWidth - 360) + 'px';
  el.style.top = Math.min(rect.bottom + 6, window.innerHeight - 160) + 'px';
  el.innerHTML = `
    <button class="lookup-close" onclick="this.closest('.lookup-popup').remove()">×</button>
    <div class="lookup-word">${escapeHtml(opcode)}</div>
    <div class="instruction-full">${escapeHtml(info.full)}</div>
    <div class="lookup-def">${escapeHtml(info.desc)}</div>`;
  document.body.appendChild(el);
  lookupPopup = el;
}

function setupInstructionLookup(container, language) {
  if (!language) return;
  container.addEventListener('click', e => {
    const line = e.target.closest('.code-line');
    if (!line) return;
    const codeSpan = line.querySelector('.line-code');
    if (!codeSpan) return;
    const opcode = extractInstruction(codeSpan.textContent, language);
    if (!opcode) return;
    const info = lookupInstruction(opcode, language);
    if (!info) return;
    e.stopPropagation();
    showInstructionPopup(opcode, info, line);
  });
}

function parseYamlFrontmatter(raw) {
  const delimiter = '---';
  const start = raw.indexOf(delimiter);
  if (start === -1) return { meta: {}, body: raw };
  const end = raw.indexOf(delimiter, start + 3);
  if (end === -1) return { meta: {}, body: raw };
  const yamlText = raw.slice(start + 3, end).trim();
  const body = raw.slice(end + 3);
  const meta = parseYaml(yamlText);
  return { meta, body };
}

function parseYaml(text) {
  const result = {};
  const lines = text.split('\n');
  let i = 0;

  function peek() { return lines[i] || ''; }
  function next() { return lines[i++] || ''; }

  function getIndent(line) {
    let n = 0;
    while (n < line.length && line[n] === ' ') n++;
    return n;
  }

  function parseValue(raw) {
    raw = raw.trim();
    if (raw.startsWith('"') && raw.endsWith('"')) return raw.slice(1, -1);
    if (raw.startsWith("'") && raw.endsWith("'")) return raw.slice(1, -1);
    if (raw === 'true') return true;
    if (raw === 'false') return false;
    if (raw === 'null' || raw === '~') return null;
    const n = Number(raw);
    if (!isNaN(n) && raw !== '') return n;
    return raw;
  }

  function parseBlock(baseIndent) {
    const obj = {};
    while (i < lines.length) {
      const line = peek();
      if (line.trim() === '' || line.trim().startsWith('#')) { next(); continue; }
      const indent = getIndent(line);
      if (indent < baseIndent) break;
      next();
      const trimmed = line.trim();

      if (trimmed.startsWith('- ')) {
        i--;
        return parseArray(baseIndent);
      }

      const colonIdx = trimmed.indexOf(': ');
      const endsWithColon = trimmed.endsWith(':');

      if (colonIdx !== -1 || endsWithColon) {
        const key = endsWithColon ? trimmed.slice(0, -1) : trimmed.slice(0, colonIdx);
        const valRaw = endsWithColon ? '' : trimmed.slice(colonIdx + 2);

        if (valRaw === '' || valRaw.trim() === '') {
          const nextLine = peek();
          const nextIndent = getIndent(nextLine || '');
          if (nextLine && nextLine.trim().startsWith('- ')) {
            obj[key] = parseArray(nextIndent);
          } else if (nextLine && nextIndent > indent) {
            obj[key] = parseBlock(nextIndent);
          } else {
            obj[key] = null;
          }
        } else {
          obj[key] = parseValue(valRaw);
        }
      }
    }
    return obj;
  }

  function parseArray(baseIndent) {
    const arr = [];
    while (i < lines.length) {
      const line = peek();
      if (line.trim() === '') { next(); continue; }
      const indent = getIndent(line);
      if (indent < baseIndent) break;
      if (!line.trim().startsWith('- ')) break;
      next();
      const rest = line.trim().slice(2).trim();
      if (rest === '') {
        const nextLine = peek();
        const nextIndent = getIndent(nextLine || '');
        if (nextLine && nextIndent > indent) {
          arr.push(parseBlock(nextIndent));
        } else {
          arr.push(null);
        }
      } else {
        const colonIdx = rest.indexOf(': ');
        const endsWithColon = rest.endsWith(':');
        if (colonIdx !== -1 || endsWithColon) {
          const key = endsWithColon ? rest.slice(0, -1) : rest.slice(0, colonIdx);
          const valRaw = endsWithColon ? '' : rest.slice(colonIdx + 2);
          const obj = {};
          if (valRaw !== '') {
            obj[key] = parseValue(valRaw);
          } else {
            const nextLine = peek();
            const nextIndent = getIndent(nextLine || '');
            if (nextLine && nextIndent > indent) {
              obj[key] = parseBlock(nextIndent);
            }
          }
          const restBlock = parseBlock(indent + 2);
          arr.push(Object.assign(obj, restBlock));
        } else {
          arr.push(parseValue(rest));
        }
      }
    }
    return arr;
  }

  return parseBlock(0);
}

function syntaxClass(line) {
  const trimmed = line.trimStart();
  if (trimmed === '') return 'asm-empty';
  if (trimmed.startsWith('*') || trimmed.startsWith(';')) return 'asm-comment';
  if (/^\w+:/.test(trimmed) && !/^(org|equ|db|dw|ds|hex|asc|put|use|lst|tr|dum|dend)\b/i.test(trimmed)) return 'asm-label';
  if (/^\s*[.:]\w/.test(line)) return 'asm-label';
  if (/^\s+(\.|\b)(org|equ|db|dw|ds|hex|asc|put|use|lst|tr|dum|dend|sav|usr|lstdo)\b/i.test(line)) return 'asm-directive';
  if (/^\s*\w+\s*=\s*/.test(line)) return 'asm-directive';
  return '';
}

function renderCodeWithEnhancements(body, enhancements) {
  const lines = body.split('\n');
  if (lines[lines.length - 1] === '') lines.pop();

  const sorted = [...(enhancements || [])].sort((a, b) => a.line_start - b.line_start);

  const sections = [];
  let cursor = 0;

  for (const enh of sorted) {
    const s = enh.line_start - 1;
    const e = enh.line_end;
    if (s > cursor) {
      sections.push({ lines: lines.slice(cursor, s), startLine: cursor + 1, enhancement: null });
    }
    sections.push({ lines: lines.slice(s, e), startLine: s + 1, enhancement: enh, highlighted: true });
    cursor = e;
  }

  if (cursor < lines.length) {
    sections.push({ lines: lines.slice(cursor), startLine: cursor + 1, enhancement: null });
  }

  return sections.map(sec => renderSection(sec)).join('');
}

function renderSection({ lines, startLine, enhancement, highlighted }) {
  if (lines.length === 0 && !enhancement) return '';

  const codeHtml = lines.map((line, idx) => {
    const lineNum = startLine + idx;
    const cls = syntaxClass(line);
    const hl = highlighted ? ' highlighted' : '';
    const escaped = escapeHtml(line);
    return `<div class="code-line${hl}"><span class="line-num">${lineNum}</span><span class="line-code${cls ? ' ' + cls : ''}">${escaped}</span></div>`;
  }).join('');

  let html = '';
  if (lines.length > 0) {
    html += `<div class="code-section"><div class="code-block">${codeHtml}</div></div>`;
  }

  if (enhancement) {
    html += renderEnhancement(enhancement);
  }

  return html;
}

function renderEnhancement(enh) {
  const hasImage = enh.image_url;
  const gridClass = hasImage ? '' : ' no-image';

  const imageHtml = hasImage ? `
    <div class="enhancement-image-wrap">
      <img data-src="${escapeAttr(enh.image_url)}" alt="${escapeAttr(enh.title)}" style="-webkit-transform:translateZ(0);transform:translateZ(0)">
      ${enh.image_caption ? `<p class="enhancement-caption">${escapeHtml(enh.image_caption)}${commonsUrl(enh.image_url) ? ` <a class="commons-link" href="${escapeAttr(commonsUrl(enh.image_url))}" target="_blank" rel="noopener">Wikimedia Commons</a>` : ''}</p>` : ''}
    </div>` : '';

  const wikiHtml = enh.wikipedia_url
    ? `<a href="${escapeAttr(enh.wikipedia_url)}" target="_blank" rel="noopener">Wikipedia ↗</a>`
    : '';

  return `
<details class="enhancement-panel" id="enh-${escapeAttr(enh.id)}">
  <summary>
    <span class="enhancement-toggle">▶</span>
    <span class="enhancement-title-text">${escapeHtml(enh.title)}</span>
  </summary>
  <div class="enhancement-body">
    <div class="enhancement-content-grid${gridClass}">
      <p class="enhancement-text">${escapeHtml(enh.content)}</p>
      ${imageHtml}
    </div>
    ${wikiHtml ? `<div class="enhancement-footer">${wikiHtml}</div>` : ''}
  </div>
</details>`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(str) {
  return String(str || '').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function commonsUrl(url) {
  if (!url) return null;
  const m = url.match(/\/thumb\/[0-9a-f]\/[0-9a-f]{2}\/(.+?)\/\d+px-/);
  if (m) return 'https://commons.wikimedia.org/wiki/File:' + m[1];
  const m2 = url.match(/\/wikipedia\/commons\/[0-9a-f]\/[0-9a-f]{2}\/(.+)$/);
  if (m2) return 'https://commons.wikimedia.org/wiki/File:' + m2[1];
  return null;
}

function loadImagesAsBlobUrls(container) {
  container.querySelectorAll('img[data-src]').forEach(img => {
    const url = img.dataset.src;
    fetch(url)
      .then(r => r.blob())
      .then(blob => { img.src = URL.createObjectURL(blob); })
      .catch(() => { img.src = url; });
  });
}

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.text();
}

async function loadCatalog() {
  return JSON.parse(await fetchText('/catalog.json'));
}

async function loadFile(programSlug, fileSlug) {
  const text = await fetchText(`/programs/${programSlug}/${fileSlug}.md`);
  return parseYamlFrontmatter(text);
}

function renderShelf(catalog) {
  const programs = catalog.programs || [];
  document.title = 'Code Museum';

  const cards = programs.map(p => `
    <a class="program-card" href="#/${p.slug}">
      <div class="program-card-top">
        <div class="program-title">${escapeHtml(p.title)}</div>
        <span class="lang-badge">${escapeHtml(p.language)}</span>
      </div>
      <p class="program-desc">${escapeHtml(p.description)}</p>
      <div class="program-meta">
        <span>${escapeHtml(p.author)}</span>
        <span>·</span>
        <span>${p.year}</span>
        <span>·</span>
        <span>${(p.files || []).length} files</span>
      </div>
    </a>`).join('');

  return `
<div class="page">
  <div class="shelf-header">
    <h1>Code Museum</h1>
    <p>Annotated source code from historically significant open-source programs. Read the code that changed computing.</p>
  </div>
  <div class="program-grid">${cards}</div>
</div>`;
}

function renderProgramPage(program) {
  document.title = `${program.title} — Code Museum`;

  const files = (program.files || []).map(f => `
    <a class="file-item" href="#/${program.slug}/${f.slug}">
      <span class="file-order">${f.order}.</span>
      <div class="file-info">
        <div class="file-name">${escapeHtml(f.title)}</div>
        <div class="file-desc">${escapeHtml(f.description)}</div>
      </div>
      <span class="file-arrow">›</span>
    </a>`).join('');

  let introHtml;
  if (program.introduction && program.introduction.trim()) {
    introHtml = program.introduction.split('\n\n')
      .map(p => {
        let s = escapeHtml(p.trim());
        s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        s = s.replace(/\*(.+?)\*/g, '<em>$1</em>');
        s = s.replace(/_(.+?)_/g, '<em>$1</em>');
        return `<p class="intro-paragraph">${s}</p>`;
      })
      .join('');
  } else {
    introHtml = `<p class="description">${escapeHtml(program.description)}</p>`;
  }

  const introImageHtml = program.image_url ? `
  <figure class="intro-image">
    <img data-src="${escapeAttr(program.image_url)}" alt="${escapeAttr(program.title)}">
    ${program.image_caption ? `<figcaption>${escapeHtml(program.image_caption)}${commonsUrl(program.image_url) ? ` <a class="commons-link" href="${escapeAttr(commonsUrl(program.image_url))}" target="_blank" rel="noopener">Wikimedia Commons</a>` : ''}</figcaption>` : ''}
  </figure>` : '';

  return `
<div class="program-page">
  <div class="program-page-header">
    <h1>${escapeHtml(program.title)}</h1>
    <div class="byline">${escapeHtml(program.author)} · ${program.year} · ${escapeHtml(program.language)}</div>
    ${introImageHtml}
    ${introHtml}
    ${program.github_url ? `<a class="github-badge" href="${escapeAttr(program.github_url)}" target="_blank" rel="noopener">⎋ View on GitHub</a>` : ''}
  </div>
  <div class="file-list">${files}</div>
</div>`;
}

function renderHeader(opts = {}) {
  const { programSlug, programTitle, fileTitle, githubUrl } = opts;

  let left = `<a class="header-logo" href="#/">Code Museum</a>`;

  if (programSlug && programTitle) {
    left += `<span class="header-sep">/</span>`;
    if (fileTitle) {
      left += `<a class="back-link" href="#/${programSlug}">← ${escapeHtml(programTitle)}</a>`;
      left += `<span class="header-sep">/</span>`;
      left += `<span class="header-title">${escapeHtml(fileTitle)}</span>`;
    } else {
      left += `<a class="back-link" href="#/">← Programs</a>`;
      left += `<span class="header-sep">/</span>`;
      left += `<span class="header-title">${escapeHtml(programTitle)}</span>`;
    }
  }

  let right = '';
  if (fileTitle) {
    right += `<div class="font-size-controls">
      <button onclick="adjustFontSize(-1)" title="Smaller">A−</button>
      <button onclick="adjustFontSize(1)" title="Larger">A+</button>
    </div>`;
  }
  if (githubUrl) {
    right += `<a class="btn-icon" href="${escapeAttr(githubUrl)}" target="_blank" rel="noopener">GitHub ↗</a>`;
  }

  return `
<header class="header">
  <div class="header-left">${left}</div>
  <div class="header-right">${right}</div>
</header>`;
}

function renderReader(meta, body, program) {
  document.title = `${meta.title} — ${meta.program} — Code Museum`;

  const files = program ? program.files || [] : [];
  const currentOrder = meta.order || 0;
  const prevFile = files.find(f => f.order === currentOrder - 1);
  const nextFile = files.find(f => f.order === currentOrder + 1);

  const summaryHtml = (meta.summary || []).map(s =>
    `<li>${escapeHtml(s.point)}${s.link ? ` <a href="${escapeAttr(s.link)}" target="_blank" rel="noopener">${escapeHtml(s.link_label || 'Wikipedia')}</a>` : ''}</li>`
  ).join('');

  const codeHtml = renderCodeWithEnhancements(body, meta.enhancements || []);

  const prevNav = prevFile
    ? `<a class="file-nav-link" href="#/${meta.program_slug}/${prevFile.slug}">← <span><span class="nav-label">Previous</span><span class="nav-name">${escapeHtml(prevFile.title)}</span></span></a>`
    : `<span></span>`;

  const nextNav = nextFile
    ? `<a class="file-nav-link" href="#/${meta.program_slug}/${nextFile.slug}"><span><span class="nav-label">Next</span><span class="nav-name">${escapeHtml(nextFile.title)}</span></span> →</a>`
    : `<span></span>`;

  return `
<div class="reader-wrap">
  <div class="reader-header-meta">
    <h1>${escapeHtml(meta.title)}</h1>
    <div class="file-byline">${escapeHtml(meta.program)} · ${escapeHtml(meta.language)} · ${meta.year}
      ${meta.github_url ? `· <a href="${escapeAttr(meta.github_url)}" target="_blank" rel="noopener">View on GitHub ↗</a>` : ''}
    </div>
    <p class="file-description">${escapeHtml(meta.description)}</p>
    ${summaryHtml ? `<ul class="summary-list">${summaryHtml}</ul>` : ''}
  </div>
  <div class="reader-content">${codeHtml}</div>
  <nav class="file-nav">${prevNav}<div class="file-nav-spacer"></div>${nextNav}</nav>
</div>`;
}

let _catalog = null;

async function getCatalog() {
  if (!_catalog) _catalog = await loadCatalog();
  return _catalog;
}

function getProgramFromCatalog(catalog, slug) {
  return (catalog.programs || []).find(p => p.slug === slug);
}

let currentFontSize = 13;

window.adjustFontSize = function(delta) {
  currentFontSize = Math.max(10, Math.min(20, currentFontSize + delta));
  document.documentElement.style.setProperty('--code-size', currentFontSize + 'px');
};

let lookupPopup = null;

function removeLookup() {
  if (lookupPopup) {
    lookupPopup.remove();
    lookupPopup = null;
  }
}

function showLookupPopup(word, x, y) {
  removeLookup();
  const el = document.createElement('div');
  el.className = 'lookup-popup';
  el.style.left = Math.min(x, window.innerWidth - 340) + 'px';
  el.style.top = (y + 12) + 'px';
  el.innerHTML = `<button class="lookup-close" onclick="this.closest('.lookup-popup').remove()">×</button>
    <div class="lookup-word">${escapeHtml(word)}</div>
    <div class="lookup-def">Looking up…</div>`;
  document.body.appendChild(el);
  lookupPopup = el;

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`)
    .then(r => r.json())
    .then(data => {
      if (!el.isConnected) return;
      const def = data?.[0]?.meanings?.[0]?.definitions?.[0]?.definition;
      el.querySelector('.lookup-def').textContent = def || 'No definition found.';
    })
    .catch(() => {
      if (el.isConnected) el.querySelector('.lookup-def').textContent = 'Could not fetch definition.';
    });
}

function setupWordLookup(container) {
  let pressTimer = null;

  container.addEventListener('contextmenu', e => {
    if (e.target.closest('.code-block')) return;
    const sel = window.getSelection().toString().trim();
    if (sel && sel.length < 40) {
      e.preventDefault();
      showLookupPopup(sel, e.clientX, e.clientY);
    }
  });

  container.addEventListener('touchstart', e => {
    if (e.target.closest('.code-block')) return;
    const touch = e.touches[0];
    pressTimer = setTimeout(() => {
      const sel = window.getSelection().toString().trim();
      if (sel && sel.length < 40) {
        showLookupPopup(sel, touch.clientX, touch.clientY);
      }
    }, 600);
  });

  container.addEventListener('touchend', () => clearTimeout(pressTimer));
  container.addEventListener('touchmove', () => clearTimeout(pressTimer));
}

document.addEventListener('click', e => {
  if (lookupPopup && !lookupPopup.contains(e.target)) removeLookup();
});

const app = document.getElementById('app');
const offlineBanner = document.getElementById('offline-banner');

function setLoading() {
  app.innerHTML = '<div class="loading"></div>';
}

function setError(msg) {
  app.innerHTML = `<div class="error-msg">${escapeHtml(msg)}</div>`;
}

async function route() {
  const hash = location.hash.replace(/^#\/?/, '');
  const parts = hash ? hash.split('/') : [];

  setLoading();

  try {
    if (parts.length === 0 || (parts.length === 1 && parts[0] === '')) {
      const catalog = await getCatalog();
      app.innerHTML = renderHeader() + renderShelf(catalog);

    } else if (parts.length === 1) {
      const slug = parts[0];
      const catalog = await getCatalog();
      const program = getProgramFromCatalog(catalog, slug);
      if (!program) { setError('Program not found.'); return; }
      app.innerHTML = renderHeader({ programSlug: slug, programTitle: program.title }) + renderProgramPage(program);
      loadImagesAsBlobUrls(app);

    } else if (parts.length >= 2) {
      const [programSlug, fileSlug] = parts;
      const catalog = await getCatalog();
      const program = getProgramFromCatalog(catalog, programSlug);
      const { meta, body } = await loadFile(programSlug, fileSlug);
      app.innerHTML = renderHeader({
        programSlug,
        programTitle: program ? program.title : programSlug,
        fileTitle: meta.title,
        githubUrl: meta.github_url
      }) + renderReader(meta, body, program);
      setupWordLookup(app);
      setupInstructionLookup(app, meta.language);
      loadImagesAsBlobUrls(app);
    }
  } catch (err) {
    setError('Failed to load: ' + err.message);
  }
}

window.addEventListener('hashchange', route);
window.addEventListener('load', route);

window.addEventListener('online', () => {
  if (offlineBanner) offlineBanner.classList.remove('visible');
});
window.addEventListener('offline', () => {
  if (offlineBanner) offlineBanner.classList.add('visible');
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(() => {});
}
