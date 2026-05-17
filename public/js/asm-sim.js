'use strict';

// ── Assembly Simulator (6502 + 8086) ────────────────────────────────────────
// Vanilla ES6, no modules, no build step.

// ── Parser ──────────────────────────────────────────────────────────────────

function parseAsmLines(lines) {
  return lines.map(function(raw) {
    var line = raw;

    // Detect comment-only lines
    var trimmed = raw.trim();

    // Apple II * comment or ; comment
    if (trimmed.startsWith('*') || trimmed.startsWith(';')) {
      return { raw: raw, label: null, mnemonic: null, operands: null, comment: trimmed, isCode: false, isDirective: false, isBlank: false };
    }

    if (trimmed === '') {
      return { raw: raw, label: null, mnemonic: null, operands: null, comment: null, isCode: false, isDirective: false, isBlank: true };
    }

    var label = null;
    var mnemonic = null;
    var operands = null;
    var comment = null;

    // Strip inline comment
    var commentIdx = -1;
    // For 8086: ; starts a comment. For 6502: * at beginning only.
    var semiIdx = raw.indexOf(';');
    if (semiIdx >= 0) {
      comment = raw.slice(semiIdx + 1).trim();
      line = raw.slice(0, semiIdx);
    }

    var rest = line.trim();
    if (rest === '') {
      return { raw: raw, label: null, mnemonic: null, operands: null, comment: comment, isCode: false, isDirective: false, isBlank: true };
    }

    // Check if line starts with a non-space (label or label+mnemonic)
    if (raw.length > 0 && raw[0] !== ' ' && raw[0] !== '\t') {
      // Possible: "LABEL" alone, "LABEL  PROC NEAR", "LABEL:  LDA #$FF", "LABEL  LDA #$FF"
      var colonPos = rest.indexOf(':');
      var spacePos = rest.search(/\s/);

      if (colonPos >= 0 && (spacePos < 0 || colonPos < spacePos)) {
        // label with colon: "FIRSTBOOT: LDA #$FF"
        label = rest.slice(0, colonPos).trim().toUpperCase();
        rest = rest.slice(colonPos + 1).trim();
      } else if (spacePos >= 0) {
        // label without colon: "FIRSTBOOT  LDA #$FF" or "FIRSTBOOT  PROC NEAR"
        label = rest.slice(0, spacePos).trim().toUpperCase();
        rest = rest.slice(spacePos).trim();
      } else {
        // label alone on line
        label = rest.trim().toUpperCase();
        rest = '';
      }
    }

    if (!rest) {
      return { raw: raw, label: label, mnemonic: null, operands: null, comment: comment, isCode: false, isDirective: false, isBlank: false };
    }

    // Now parse mnemonic and operands
    var parts = rest.split(/\s+/);
    mnemonic = parts[0].toUpperCase();
    operands = parts.slice(1).join(' ').trim() || null;

    // Directives (not executable code)
    var directives = ['ORG','EQU','DB','DW','DS','HEX','ASC','PUT','USE','LST','TR','DUM','DEND','SAV','USR','LSTDO',
                      'PROC','ENDP','ASSUME','SEGMENT','ENDS','OFFSET','STRUC','MACRO','ENDM','PUBLIC','EXTRN','END',
                      'TITLE','SUBTTL','PAGE','IF','ENDIF','ELSE','IFNDEF','IFDEF','INCLUDE','DOSSEG',
                      '.CODE','.DATA','.STACK','.MODEL','.186','.286','.8086','EVEN','ALIGN','COMMENT'];
    var isDirective = directives.indexOf(mnemonic) >= 0;

    // List of known 6502 mnemonics
    var mnemonics6502 = ['LDA','LDX','LDY','STA','STX','STY','TAX','TAY','TXA','TYA','TSX','TXS',
                         'PHA','PLA','PHP','PLP','ADC','SBC','INC','DEC','INX','INY','DEX','DEY',
                         'AND','ORA','EOR','ASL','LSR','ROL','ROR','CMP','CPX','CPY',
                         'BEQ','BNE','BCC','BCS','BMI','BPL','BVC','BVS',
                         'JMP','JSR','RTS','RTI','BRK','NOP',
                         'SEC','CLC','SEI','CLI','SED','CLD','CLV','BIT'];

    // List of known 8086 mnemonics
    var mnemonics8086 = ['MOV','ADD','SUB','INC','DEC','AND','OR','XOR','NOT','CMP','TEST',
                         'JMP','JE','JZ','JNE','JNZ','JG','JNLE','JL','JNGE','JGE','JNL','JLE','JNG',
                         'JA','JNBE','JB','JNAE','JBE','JNA','JS','JNS','JO','JNO','JC','JNC','JP','JPE','JPO','JNP',
                         'CALL','RET','RETN','RETF','PUSH','POP','PUSHF','POPF',
                         'NOP','HLT','INT','IRET','INTO','JCXZ',
                         'LEA','XCHG','XLAT',
                         'MUL','IMUL','DIV','IDIV','NEG','CBW','CWD',
                         'SHL','SHR','SAL','SAR','ROL','ROR','RCL','RCR',
                         'IN','OUT','WAIT',
                         'STC','CLC','STD','CLD','STI','CLI','CMC',
                         'MOVS','STOS','LODS','CMPS','SCAS','REP','REPE','REPNE',
                         'AAA','AAS','AAM','AAD','DAA','DAS',
                         'LDS','LES','LAHF','SAHF','LOOP','LOOPE','LOOPNE'];

    var isCode = !isDirective && (mnemonics6502.indexOf(mnemonic) >= 0 || mnemonics8086.indexOf(mnemonic) >= 0);

    return {
      raw: raw,
      label: label,
      mnemonic: mnemonic,
      operands: operands,
      comment: comment,
      isCode: isCode,
      isDirective: isDirective,
      isBlank: false
    };
  });
}

// ── Architecture detection ───────────────────────────────────────────────────

function detectArch(parsedLines) {
  var clues6502 = 0;
  var clues8086 = 0;
  var set6502 = ['JSR','LDA','LDX','LDY','STA','STX','STY','RTS','BEQ','BNE','BCC','BCS','BPL','BMI','PHA','PLA','ASL','LSR','ROL','ROR'];
  var set8086 = ['MOV','PUSH','POP','CALL','RET','PROC','ENDP','INT','HLT'];
  var axbxcx = /\b(AX|BX|CX|DX|SI|DI|BP|SP|AH|AL|BH|BL|CH|CL|DH|DL)\b/i;

  parsedLines.forEach(function(p) {
    if (!p.mnemonic) return;
    if (set6502.indexOf(p.mnemonic) >= 0) clues6502++;
    if (set8086.indexOf(p.mnemonic) >= 0) clues8086++;
    if (axbxcx.test(p.raw)) clues8086++;
  });

  return clues8086 > clues6502 ? '8086' : '6502';
}

// ── CPU state factories ──────────────────────────────────────────────────────

function create6502State() {
  return {
    regs: { A: 0, X: 0, Y: 0, SP: 0xFF },
    flags: { N: 0, V: 0, B: 0, D: 0, I: 1, Z: 1, C: 0 },
    memory: new Map(),
    callStack: [],
    history: [],
    curLine: 0,
    halted: false,
    lastEffect: 'Ready'
  };
}

function create8086State() {
  return {
    regs: { AX: 0, BX: 0, CX: 0, DX: 0, SI: 0, DI: 0, BP: 0, SP: 0xFFFE },
    flags: { CF: 0, ZF: 1, SF: 0, OF: 0, PF: 0, AF: 0, IF: 1, DF: 0 },
    memory: new Map(),
    callStack: [],
    history: [],
    curLine: 0,
    halted: false,
    lastEffect: 'Ready'
  };
}

// ── Line navigation ──────────────────────────────────────────────────────────

function findNextCodeLine(parsedLines, fromIdx) {
  for (var i = fromIdx; i < parsedLines.length; i++) {
    if (parsedLines[i].isCode) return i;
  }
  return -1;
}

function findPrevCodeLine(parsedLines, fromIdx) {
  for (var i = fromIdx - 1; i >= 0; i--) {
    if (parsedLines[i].isCode) return i;
  }
  return -1;
}

function labelLineMap(parsedLines) {
  var map = new Map();
  parsedLines.forEach(function(p, idx) {
    if (p.label) map.set(p.label.toUpperCase(), idx);
  });
  return map;
}

// ── Snapshot for undo ────────────────────────────────────────────────────────

function cloneState(state) {
  var snap = {
    regs: Object.assign({}, state.regs),
    flags: Object.assign({}, state.flags),
    memory: new Map(state.memory),
    callStack: state.callStack.slice(),
    history: [], // excluded from snapshot
    curLine: state.curLine,
    halted: state.halted,
    lastEffect: state.lastEffect
  };
  return snap;
}

// ── Operand parsing ──────────────────────────────────────────────────────────

function parseImmediate6502(op) {
  // #$FF, #$0A, #10, #%10000000
  if (!op) return NaN;
  op = op.trim();
  if (op.startsWith('#')) {
    op = op.slice(1);
    if (op.startsWith('$')) return parseInt(op.slice(1), 16) & 0xFF;
    if (op.startsWith('%')) return parseInt(op.slice(1), 2) & 0xFF;
    return parseInt(op, 10) & 0xFF;
  }
  return NaN;
}

function parseAddress6502(op) {
  // $FF → zero-page (8-bit), $1000 → absolute (16-bit)
  if (!op) return NaN;
  op = op.trim().replace(/,\s*(X|Y)$/i, ''); // strip ,X ,Y indexing
  if (op.startsWith('$')) return parseInt(op.slice(1), 16);
  return NaN;
}

function isZeroPage(op) {
  if (!op) return false;
  var o = op.trim().replace(/,\s*(X|Y)$/i, '');
  if (o.startsWith('$')) {
    return o.slice(1).length <= 2;
  }
  return false;
}

function parseLabel6502(op) {
  if (!op) return null;
  // Remove indirect brackets
  op = op.trim().replace(/^\(|\)$/g, '');
  // If it's a plain identifier (no $ or # prefix)
  if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(op)) return op.toUpperCase();
  return null;
}

// 8086 register helpers
var REGS_16 = ['AX','BX','CX','DX','SI','DI','BP','SP'];
var REGS_8  = ['AH','AL','BH','BL','CH','CL','DH','DL'];

function getReg8086(state, name) {
  var n = name.toUpperCase();
  if (REGS_16.indexOf(n) >= 0) return state.regs[n];
  // 8-bit
  var parent = n[0] + 'X';
  if (n[1] === 'L') return state.regs[parent] & 0xFF;
  if (n[1] === 'H') return (state.regs[parent] >> 8) & 0xFF;
  return 0;
}

function setReg8086(state, name, val) {
  var n = name.toUpperCase();
  if (REGS_16.indexOf(n) >= 0) {
    state.regs[n] = val & 0xFFFF;
    return;
  }
  var parent = n[0] + 'X';
  if (n[1] === 'L') {
    state.regs[parent] = (state.regs[parent] & 0xFF00) | (val & 0xFF);
  } else if (n[1] === 'H') {
    state.regs[parent] = (state.regs[parent] & 0x00FF) | ((val & 0xFF) << 8);
  }
}

function isReg8086(name) {
  var n = name.toUpperCase();
  return REGS_16.indexOf(n) >= 0 || REGS_8.indexOf(n) >= 0;
}

function parseImm8086(op) {
  if (!op) return NaN;
  op = op.trim();
  if (op.startsWith('0x') || op.startsWith('0X')) return parseInt(op, 16);
  if (/^[0-9A-Fa-f]+[Hh]$/.test(op)) return parseInt(op.slice(0, -1), 16);
  if (/^[0-9]+$/.test(op)) return parseInt(op, 10);
  return NaN;
}

function parseOperands8086(operands) {
  if (!operands) return [];
  // Split on comma but not inside brackets
  var result = [];
  var depth = 0;
  var current = '';
  for (var i = 0; i < operands.length; i++) {
    var c = operands[i];
    if (c === '[') depth++;
    if (c === ']') depth--;
    if (c === ',' && depth === 0) {
      result.push(current.trim());
      current = '';
    } else {
      current += c;
    }
  }
  if (current.trim()) result.push(current.trim());
  return result;
}

function isMem8086(op) {
  return op && op.indexOf('[') >= 0;
}

function parseMemAddr8086(op, state) {
  // [BX], [SI], [DI], [BP], [1234h], etc.
  var inner = op.replace(/\s/g, '').replace(/^\[|\]$/g, '');
  if (isReg8086(inner)) return getReg8086(state, inner);
  var val = parseImm8086(inner);
  if (!isNaN(val)) return val;
  return 0;
}

// ── Flag helpers ─────────────────────────────────────────────────────────────

function update6502NZ(state, val) {
  state.flags.N = val > 127 ? 1 : 0;
  state.flags.Z = val === 0 ? 1 : 0;
}

function update8086NZS(state, val, bits) {
  var max = bits === 8 ? 0xFF : 0xFFFF;
  var sign = bits === 8 ? 0x80 : 0x8000;
  state.flags.ZF = (val & max) === 0 ? 1 : 0;
  state.flags.SF = (val & sign) ? 1 : 0;
}

// ── 6502 instruction execution ───────────────────────────────────────────────

function exec6502(state, parsedLines, lblMap) {
  var p = parsedLines[state.curLine];
  if (!p || !p.mnemonic) {
    var next = findNextCodeLine(parsedLines, state.curLine + 1);
    state.curLine = next >= 0 ? next : parsedLines.length;
    state.lastEffect = 'Skipped non-instruction line';
    return;
  }

  var mn = p.mnemonic;
  var op = p.operands ? p.operands.trim() : '';

  // Default advance — may be overridden by branches/jumps
  var nextLine = findNextCodeLine(parsedLines, state.curLine + 1);
  var jumped = false;

  function resolveLabel(labelName) {
    var idx = lblMap.get(labelName.toUpperCase());
    if (idx === undefined) return -1;
    // Advance to first code line at or after label
    var c = findNextCodeLine(parsedLines, idx);
    return c >= 0 ? c : idx;
  }

  function jumpToLabel(labelName) {
    var target = resolveLabel(labelName);
    if (target < 0) {
      state.lastEffect = "Jump target '" + labelName + "' not found — staying";
      jumped = true;
      state.curLine = nextLine >= 0 ? nextLine : parsedLines.length;
      return;
    }
    state.curLine = target;
    jumped = true;
  }

  switch (mn) {
    // ── Load/Store ───────────────────────────────────────────────────────────
    case 'LDA': {
      var imm = parseImmediate6502(op);
      if (!isNaN(imm)) {
        state.regs.A = imm;
        state.lastEffect = 'A = $' + h8(imm);
      } else {
        var addr = parseAddress6502(op);
        var val = isNaN(addr) ? 0 : (state.memory.get(addr) || 0);
        state.regs.A = val;
        state.lastEffect = 'A = mem[$' + h16(addr) + '] = $' + h8(val);
      }
      update6502NZ(state, state.regs.A);
      break;
    }
    case 'LDX': {
      var imm = parseImmediate6502(op);
      if (!isNaN(imm)) {
        state.regs.X = imm;
        state.lastEffect = 'X = $' + h8(imm);
      } else {
        var addr = parseAddress6502(op);
        var val = isNaN(addr) ? 0 : (state.memory.get(addr) || 0);
        state.regs.X = val;
        state.lastEffect = 'X = mem[$' + h16(addr) + '] = $' + h8(val);
      }
      update6502NZ(state, state.regs.X);
      break;
    }
    case 'LDY': {
      var imm = parseImmediate6502(op);
      if (!isNaN(imm)) {
        state.regs.Y = imm;
        state.lastEffect = 'Y = $' + h8(imm);
      } else {
        var addr = parseAddress6502(op);
        var val = isNaN(addr) ? 0 : (state.memory.get(addr) || 0);
        state.regs.Y = val;
        state.lastEffect = 'Y = mem[$' + h16(addr) + '] = $' + h8(val);
      }
      update6502NZ(state, state.regs.Y);
      break;
    }
    case 'STA': {
      var addr = parseAddress6502(op);
      if (!isNaN(addr)) {
        state.memory.set(addr, state.regs.A & 0xFF);
        state.lastEffect = 'mem[$' + h16(addr) + '] = A = $' + h8(state.regs.A);
      } else {
        state.lastEffect = 'STA: could not parse address: ' + op;
      }
      break;
    }
    case 'STX': {
      var addr = parseAddress6502(op);
      if (!isNaN(addr)) {
        state.memory.set(addr, state.regs.X & 0xFF);
        state.lastEffect = 'mem[$' + h16(addr) + '] = X = $' + h8(state.regs.X);
      } else {
        state.lastEffect = 'STX: could not parse address: ' + op;
      }
      break;
    }
    case 'STY': {
      var addr = parseAddress6502(op);
      if (!isNaN(addr)) {
        state.memory.set(addr, state.regs.Y & 0xFF);
        state.lastEffect = 'mem[$' + h16(addr) + '] = Y = $' + h8(state.regs.Y);
      } else {
        state.lastEffect = 'STY: could not parse address: ' + op;
      }
      break;
    }

    // ── Transfer ─────────────────────────────────────────────────────────────
    case 'TAX': state.regs.X = state.regs.A; update6502NZ(state, state.regs.X); state.lastEffect = 'X = A = $' + h8(state.regs.X); break;
    case 'TAY': state.regs.Y = state.regs.A; update6502NZ(state, state.regs.Y); state.lastEffect = 'Y = A = $' + h8(state.regs.Y); break;
    case 'TXA': state.regs.A = state.regs.X; update6502NZ(state, state.regs.A); state.lastEffect = 'A = X = $' + h8(state.regs.A); break;
    case 'TYA': state.regs.A = state.regs.Y; update6502NZ(state, state.regs.A); state.lastEffect = 'A = Y = $' + h8(state.regs.A); break;
    case 'TSX': state.regs.X = state.regs.SP; update6502NZ(state, state.regs.X); state.lastEffect = 'X = SP = $' + h8(state.regs.X); break;
    case 'TXS': state.regs.SP = state.regs.X; state.lastEffect = 'SP = X = $' + h8(state.regs.SP); break;

    // ── Arithmetic ───────────────────────────────────────────────────────────
    case 'ADC': {
      var imm = parseImmediate6502(op);
      var addend = !isNaN(imm) ? imm : (state.memory.get(parseAddress6502(op)) || 0);
      var result = state.regs.A + addend + state.flags.C;
      state.flags.C = result > 255 ? 1 : 0;
      state.flags.V = ((~(state.regs.A ^ addend) & (state.regs.A ^ result)) & 0x80) ? 1 : 0;
      state.regs.A = result & 0xFF;
      update6502NZ(state, state.regs.A);
      state.lastEffect = 'A = A + $' + h8(addend) + ' + C = $' + h8(state.regs.A);
      break;
    }
    case 'SBC': {
      var imm = parseImmediate6502(op);
      var sub = !isNaN(imm) ? imm : (state.memory.get(parseAddress6502(op)) || 0);
      var result = state.regs.A - sub - (1 - state.flags.C);
      state.flags.C = result >= 0 ? 1 : 0;
      state.flags.V = (((state.regs.A ^ sub) & (state.regs.A ^ result)) & 0x80) ? 1 : 0;
      state.regs.A = result & 0xFF;
      update6502NZ(state, state.regs.A);
      state.lastEffect = 'A = A - $' + h8(sub) + ' = $' + h8(state.regs.A);
      break;
    }
    case 'INC': {
      var addr = parseAddress6502(op);
      if (!isNaN(addr)) {
        var v = ((state.memory.get(addr) || 0) + 1) & 0xFF;
        state.memory.set(addr, v);
        update6502NZ(state, v);
        state.lastEffect = 'mem[$' + h16(addr) + ']++ = $' + h8(v);
      } else { state.lastEffect = 'INC: bad address: ' + op; }
      break;
    }
    case 'DEC': {
      var addr = parseAddress6502(op);
      if (!isNaN(addr)) {
        var v = ((state.memory.get(addr) || 0) - 1) & 0xFF;
        state.memory.set(addr, v);
        update6502NZ(state, v);
        state.lastEffect = 'mem[$' + h16(addr) + ']-- = $' + h8(v);
      } else { state.lastEffect = 'DEC: bad address: ' + op; }
      break;
    }
    case 'INX': state.regs.X = (state.regs.X + 1) & 0xFF; update6502NZ(state, state.regs.X); state.lastEffect = 'X++ = $' + h8(state.regs.X); break;
    case 'INY': state.regs.Y = (state.regs.Y + 1) & 0xFF; update6502NZ(state, state.regs.Y); state.lastEffect = 'Y++ = $' + h8(state.regs.Y); break;
    case 'DEX': state.regs.X = (state.regs.X - 1) & 0xFF; update6502NZ(state, state.regs.X); state.lastEffect = 'X-- = $' + h8(state.regs.X); break;
    case 'DEY': state.regs.Y = (state.regs.Y - 1) & 0xFF; update6502NZ(state, state.regs.Y); state.lastEffect = 'Y-- = $' + h8(state.regs.Y); break;

    // ── Logic ────────────────────────────────────────────────────────────────
    case 'AND': {
      var imm = parseImmediate6502(op);
      var mask = !isNaN(imm) ? imm : (state.memory.get(parseAddress6502(op)) || 0);
      state.regs.A = (state.regs.A & mask) & 0xFF;
      update6502NZ(state, state.regs.A);
      state.lastEffect = 'A &= $' + h8(mask) + ' => $' + h8(state.regs.A);
      break;
    }
    case 'ORA': {
      var imm = parseImmediate6502(op);
      var mask = !isNaN(imm) ? imm : (state.memory.get(parseAddress6502(op)) || 0);
      state.regs.A = (state.regs.A | mask) & 0xFF;
      update6502NZ(state, state.regs.A);
      state.lastEffect = 'A |= $' + h8(mask) + ' => $' + h8(state.regs.A);
      break;
    }
    case 'EOR': {
      var imm = parseImmediate6502(op);
      var mask = !isNaN(imm) ? imm : (state.memory.get(parseAddress6502(op)) || 0);
      state.regs.A = (state.regs.A ^ mask) & 0xFF;
      update6502NZ(state, state.regs.A);
      state.lastEffect = 'A ^= $' + h8(mask) + ' => $' + h8(state.regs.A);
      break;
    }
    case 'BIT': {
      var addr = parseAddress6502(op);
      var mem = isNaN(addr) ? 0 : (state.memory.get(addr) || 0);
      state.flags.Z = (state.regs.A & mem) === 0 ? 1 : 0;
      state.flags.N = (mem >> 7) & 1;
      state.flags.V = (mem >> 6) & 1;
      state.lastEffect = 'BIT test A & mem[$' + h16(addr) + '] Z=' + state.flags.Z;
      break;
    }

    // ── Shift ────────────────────────────────────────────────────────────────
    case 'ASL': {
      if (!op || op.toUpperCase() === 'A') {
        state.flags.C = (state.regs.A >> 7) & 1;
        state.regs.A = (state.regs.A << 1) & 0xFF;
        update6502NZ(state, state.regs.A);
        state.lastEffect = 'A <<= 1 => $' + h8(state.regs.A);
      } else {
        var addr = parseAddress6502(op);
        var v = state.memory.get(addr) || 0;
        state.flags.C = (v >> 7) & 1;
        v = (v << 1) & 0xFF;
        state.memory.set(addr, v);
        update6502NZ(state, v);
        state.lastEffect = 'mem[$' + h16(addr) + '] <<= 1 => $' + h8(v);
      }
      break;
    }
    case 'LSR': {
      if (!op || op.toUpperCase() === 'A') {
        state.flags.C = state.regs.A & 1;
        state.regs.A = (state.regs.A >> 1) & 0xFF;
        update6502NZ(state, state.regs.A);
        state.lastEffect = 'A >>= 1 => $' + h8(state.regs.A);
      } else {
        var addr = parseAddress6502(op);
        var v = state.memory.get(addr) || 0;
        state.flags.C = v & 1;
        v = (v >> 1) & 0xFF;
        state.memory.set(addr, v);
        update6502NZ(state, v);
        state.lastEffect = 'mem[$' + h16(addr) + '] >>= 1 => $' + h8(v);
      }
      break;
    }
    case 'ROL': {
      if (!op || op.toUpperCase() === 'A') {
        var old_c = state.flags.C;
        state.flags.C = (state.regs.A >> 7) & 1;
        state.regs.A = ((state.regs.A << 1) | old_c) & 0xFF;
        update6502NZ(state, state.regs.A);
        state.lastEffect = 'A ROL => $' + h8(state.regs.A);
      } else {
        var addr = parseAddress6502(op);
        var v = state.memory.get(addr) || 0;
        var old_c = state.flags.C;
        state.flags.C = (v >> 7) & 1;
        v = ((v << 1) | old_c) & 0xFF;
        state.memory.set(addr, v);
        update6502NZ(state, v);
        state.lastEffect = 'mem[$' + h16(addr) + '] ROL => $' + h8(v);
      }
      break;
    }
    case 'ROR': {
      if (!op || op.toUpperCase() === 'A') {
        var old_c = state.flags.C;
        state.flags.C = state.regs.A & 1;
        state.regs.A = ((state.regs.A >> 1) | (old_c << 7)) & 0xFF;
        update6502NZ(state, state.regs.A);
        state.lastEffect = 'A ROR => $' + h8(state.regs.A);
      } else {
        var addr = parseAddress6502(op);
        var v = state.memory.get(addr) || 0;
        var old_c = state.flags.C;
        state.flags.C = v & 1;
        v = ((v >> 1) | (old_c << 7)) & 0xFF;
        state.memory.set(addr, v);
        update6502NZ(state, v);
        state.lastEffect = 'mem[$' + h16(addr) + '] ROR => $' + h8(v);
      }
      break;
    }

    // ── Compare ──────────────────────────────────────────────────────────────
    case 'CMP': {
      var imm = parseImmediate6502(op);
      var cmp = !isNaN(imm) ? imm : (state.memory.get(parseAddress6502(op)) || 0);
      var diff = state.regs.A - cmp;
      state.flags.C = diff >= 0 ? 1 : 0;
      state.flags.Z = (diff & 0xFF) === 0 ? 1 : 0;
      state.flags.N = (diff & 0x80) ? 1 : 0;
      state.lastEffect = 'CMP A($' + h8(state.regs.A) + ') - $' + h8(cmp) + ' Z=' + state.flags.Z + ' C=' + state.flags.C;
      break;
    }
    case 'CPX': {
      var imm = parseImmediate6502(op);
      var cmp = !isNaN(imm) ? imm : (state.memory.get(parseAddress6502(op)) || 0);
      var diff = state.regs.X - cmp;
      state.flags.C = diff >= 0 ? 1 : 0;
      state.flags.Z = (diff & 0xFF) === 0 ? 1 : 0;
      state.flags.N = (diff & 0x80) ? 1 : 0;
      state.lastEffect = 'CPX X($' + h8(state.regs.X) + ') - $' + h8(cmp) + ' Z=' + state.flags.Z + ' C=' + state.flags.C;
      break;
    }
    case 'CPY': {
      var imm = parseImmediate6502(op);
      var cmp = !isNaN(imm) ? imm : (state.memory.get(parseAddress6502(op)) || 0);
      var diff = state.regs.Y - cmp;
      state.flags.C = diff >= 0 ? 1 : 0;
      state.flags.Z = (diff & 0xFF) === 0 ? 1 : 0;
      state.flags.N = (diff & 0x80) ? 1 : 0;
      state.lastEffect = 'CPY Y($' + h8(state.regs.Y) + ') - $' + h8(cmp) + ' Z=' + state.flags.Z + ' C=' + state.flags.C;
      break;
    }

    // ── Branch ───────────────────────────────────────────────────────────────
    case 'BEQ': {
      var lbl = parseLabel6502(op) || op;
      if (state.flags.Z === 1) { jumpToLabel(lbl); state.lastEffect = 'BEQ taken (Z=1) → ' + lbl; }
      else state.lastEffect = 'BEQ not taken (Z=0)';
      break;
    }
    case 'BNE': {
      var lbl = parseLabel6502(op) || op;
      if (state.flags.Z === 0) { jumpToLabel(lbl); state.lastEffect = 'BNE taken (Z=0) → ' + lbl; }
      else state.lastEffect = 'BNE not taken (Z=1)';
      break;
    }
    case 'BCC': {
      var lbl = parseLabel6502(op) || op;
      if (state.flags.C === 0) { jumpToLabel(lbl); state.lastEffect = 'BCC taken (C=0) → ' + lbl; }
      else state.lastEffect = 'BCC not taken (C=1)';
      break;
    }
    case 'BCS': {
      var lbl = parseLabel6502(op) || op;
      if (state.flags.C === 1) { jumpToLabel(lbl); state.lastEffect = 'BCS taken (C=1) → ' + lbl; }
      else state.lastEffect = 'BCS not taken (C=0)';
      break;
    }
    case 'BMI': {
      var lbl = parseLabel6502(op) || op;
      if (state.flags.N === 1) { jumpToLabel(lbl); state.lastEffect = 'BMI taken (N=1) → ' + lbl; }
      else state.lastEffect = 'BMI not taken (N=0)';
      break;
    }
    case 'BPL': {
      var lbl = parseLabel6502(op) || op;
      if (state.flags.N === 0) { jumpToLabel(lbl); state.lastEffect = 'BPL taken (N=0) → ' + lbl; }
      else state.lastEffect = 'BPL not taken (N=1)';
      break;
    }
    case 'BVC': {
      var lbl = parseLabel6502(op) || op;
      if (state.flags.V === 0) { jumpToLabel(lbl); state.lastEffect = 'BVC taken (V=0) → ' + lbl; }
      else state.lastEffect = 'BVC not taken (V=1)';
      break;
    }
    case 'BVS': {
      var lbl = parseLabel6502(op) || op;
      if (state.flags.V === 1) { jumpToLabel(lbl); state.lastEffect = 'BVS taken (V=1) → ' + lbl; }
      else state.lastEffect = 'BVS not taken (V=0)';
      break;
    }

    // ── Jump/Call ────────────────────────────────────────────────────────────
    case 'JMP': {
      var lbl = parseLabel6502(op);
      if (lbl) {
        jumpToLabel(lbl);
        state.lastEffect = 'JMP → ' + lbl;
      } else {
        // numeric address — can't resolve, stay
        state.lastEffect = 'JMP to address ' + op + ' (cannot resolve)';
      }
      break;
    }
    case 'JSR': {
      var lbl = parseLabel6502(op);
      if (lbl) {
        state.callStack.push(nextLine >= 0 ? nextLine : parsedLines.length);
        // Stack model
        state.memory.set(0x100 + state.regs.SP, (nextLine >> 8) & 0xFF);
        state.regs.SP = (state.regs.SP - 1) & 0xFF;
        state.memory.set(0x100 + state.regs.SP, nextLine & 0xFF);
        state.regs.SP = (state.regs.SP - 1) & 0xFF;
        jumpToLabel(lbl);
        state.lastEffect = 'JSR → ' + lbl + ' (stack depth: ' + state.callStack.length + ')';
      } else {
        state.lastEffect = 'JSR: could not resolve: ' + op;
      }
      break;
    }
    case 'RTS': {
      if (state.callStack.length > 0) {
        var ret = state.callStack.pop();
        state.regs.SP = (state.regs.SP + 2) & 0xFF; // model SP increment
        state.curLine = ret;
        jumped = true;
        state.lastEffect = 'RTS → line ' + (ret + 1);
      } else {
        state.halted = true;
        state.lastEffect = 'RTS with empty call stack — halted';
      }
      break;
    }
    case 'RTI': {
      if (state.callStack.length > 0) {
        var ret = state.callStack.pop();
        state.curLine = ret;
        jumped = true;
        state.lastEffect = 'RTI → line ' + (ret + 1);
      } else {
        state.halted = true;
        state.lastEffect = 'RTI with empty call stack — halted';
      }
      break;
    }

    // ── Stack ────────────────────────────────────────────────────────────────
    case 'PHA': {
      state.memory.set(0x100 + state.regs.SP, state.regs.A);
      state.regs.SP = (state.regs.SP - 1) & 0xFF;
      state.lastEffect = 'Push A=$' + h8(state.regs.A) + ' SP=$' + h8(state.regs.SP);
      break;
    }
    case 'PLA': {
      state.regs.SP = (state.regs.SP + 1) & 0xFF;
      state.regs.A = state.memory.get(0x100 + state.regs.SP) || 0;
      update6502NZ(state, state.regs.A);
      state.lastEffect = 'Pull A=$' + h8(state.regs.A) + ' from stack';
      break;
    }
    case 'PHP': {
      var flags = (state.flags.N << 7) | (state.flags.V << 6) | (1 << 5) | (state.flags.B << 4) |
                  (state.flags.D << 3) | (state.flags.I << 2) | (state.flags.Z << 1) | state.flags.C;
      state.memory.set(0x100 + state.regs.SP, flags);
      state.regs.SP = (state.regs.SP - 1) & 0xFF;
      state.lastEffect = 'Push flags=$' + h8(flags);
      break;
    }
    case 'PLP': {
      state.regs.SP = (state.regs.SP + 1) & 0xFF;
      var flags = state.memory.get(0x100 + state.regs.SP) || 0;
      state.flags.N = (flags >> 7) & 1;
      state.flags.V = (flags >> 6) & 1;
      state.flags.B = (flags >> 4) & 1;
      state.flags.D = (flags >> 3) & 1;
      state.flags.I = (flags >> 2) & 1;
      state.flags.Z = (flags >> 1) & 1;
      state.flags.C = flags & 1;
      state.lastEffect = 'Pull flags=$' + h8(flags) + ' from stack';
      break;
    }

    // ── Flags ────────────────────────────────────────────────────────────────
    case 'SEC': state.flags.C = 1; state.lastEffect = 'Set Carry flag'; break;
    case 'CLC': state.flags.C = 0; state.lastEffect = 'Clear Carry flag'; break;
    case 'SEI': state.flags.I = 1; state.lastEffect = 'Set Interrupt Disable'; break;
    case 'CLI': state.flags.I = 0; state.lastEffect = 'Clear Interrupt Disable'; break;
    case 'SED': state.flags.D = 1; state.lastEffect = 'Set Decimal mode'; break;
    case 'CLD': state.flags.D = 0; state.lastEffect = 'Clear Decimal mode'; break;
    case 'CLV': state.flags.V = 0; state.lastEffect = 'Clear Overflow flag'; break;

    // ── Other ────────────────────────────────────────────────────────────────
    case 'NOP': state.lastEffect = 'No operation'; break;
    case 'BRK': state.halted = true; state.lastEffect = 'BRK — forced interrupt, halted'; break;

    default:
      state.lastEffect = 'Unimplemented: ' + mn;
      break;
  }

  if (!jumped) {
    state.curLine = nextLine >= 0 ? nextLine : parsedLines.length;
  }
}

// ── 8086 instruction execution ───────────────────────────────────────────────

function exec8086(state, parsedLines, lblMap) {
  var p = parsedLines[state.curLine];
  if (!p || !p.mnemonic) {
    var next = findNextCodeLine(parsedLines, state.curLine + 1);
    state.curLine = next >= 0 ? next : parsedLines.length;
    state.lastEffect = 'Skipped non-instruction line';
    return;
  }

  var mn = p.mnemonic;
  var ops = parseOperands8086(p.operands || '');
  var nextLine = findNextCodeLine(parsedLines, state.curLine + 1);
  var jumped = false;

  function resolveLabel(name) {
    var idx = lblMap.get(name.toUpperCase());
    if (idx === undefined) return -1;
    var c = findNextCodeLine(parsedLines, idx);
    return c >= 0 ? c : idx;
  }

  function jumpToLabel(name) {
    var target = resolveLabel(name);
    if (target < 0) {
      state.lastEffect = "Jump target '" + name + "' not found — staying";
      state.curLine = nextLine >= 0 ? nextLine : parsedLines.length;
    } else {
      state.curLine = target;
    }
    jumped = true;
  }

  function getVal(op) {
    if (!op) return 0;
    op = op.trim();
    if (isReg8086(op)) return getReg8086(state, op);
    if (isMem8086(op)) { var addr = parseMemAddr8086(op, state); return state.memory.get(addr) || 0; }
    var imm = parseImm8086(op);
    if (!isNaN(imm)) return imm;
    return 0;
  }

  function setVal(op, val) {
    if (!op) return;
    op = op.trim();
    if (isReg8086(op)) { setReg8086(state, op, val); return; }
    if (isMem8086(op)) { var addr = parseMemAddr8086(op, state); state.memory.set(addr, val & 0xFFFF); }
  }

  // Directives as no-ops
  var nopDirectives = ['PROC','ENDP','ASSUME','SEGMENT','ENDS'];
  if (nopDirectives.indexOf(mn) >= 0) {
    state.lastEffect = mn + ' directive (no-op)';
    state.curLine = nextLine >= 0 ? nextLine : parsedLines.length;
    return;
  }

  switch (mn) {
    case 'MOV': {
      if (ops.length >= 2) {
        var val = getVal(ops[1]);
        setVal(ops[0], val);
        state.lastEffect = 'MOV ' + ops[0] + ' = $' + h16(val & 0xFFFF);
      } else {
        state.lastEffect = 'MOV: bad operands: ' + ops.join(',');
      }
      break;
    }
    case 'ADD': {
      if (ops.length >= 2) {
        var a = getVal(ops[0]);
        var b = getVal(ops[1]);
        var result = a + b;
        state.flags.CF = result > 0xFFFF ? 1 : 0;
        state.flags.OF = (((a ^ result) & (b ^ result)) & 0x8000) ? 1 : 0;
        setVal(ops[0], result & 0xFFFF);
        update8086NZS(state, result, 16);
        state.lastEffect = 'ADD ' + ops[0] + ' + $' + h16(b) + ' = $' + h16(result & 0xFFFF);
      } else { state.lastEffect = 'ADD: bad operands'; }
      break;
    }
    case 'SUB': {
      if (ops.length >= 2) {
        var a = getVal(ops[0]);
        var b = getVal(ops[1]);
        var result = a - b;
        state.flags.CF = result < 0 ? 1 : 0;
        state.flags.OF = (((a ^ b) & (a ^ result)) & 0x8000) ? 1 : 0;
        setVal(ops[0], result & 0xFFFF);
        update8086NZS(state, result, 16);
        state.lastEffect = 'SUB ' + ops[0] + ' - $' + h16(b) + ' = $' + h16(result & 0xFFFF);
      } else { state.lastEffect = 'SUB: bad operands'; }
      break;
    }
    case 'INC': {
      if (ops.length >= 1) {
        var a = getVal(ops[0]);
        var result = (a + 1) & 0xFFFF;
        setVal(ops[0], result);
        update8086NZS(state, result, 16);
        state.lastEffect = ops[0] + '++ = $' + h16(result);
      } else { state.lastEffect = 'INC: missing operand'; }
      break;
    }
    case 'DEC': {
      if (ops.length >= 1) {
        var a = getVal(ops[0]);
        var result = (a - 1) & 0xFFFF;
        setVal(ops[0], result);
        update8086NZS(state, result, 16);
        state.lastEffect = ops[0] + '-- = $' + h16(result);
      } else { state.lastEffect = 'DEC: missing operand'; }
      break;
    }
    case 'AND': {
      if (ops.length >= 2) {
        var a = getVal(ops[0]);
        var b = getVal(ops[1]);
        var result = a & b;
        setVal(ops[0], result & 0xFFFF);
        update8086NZS(state, result, 16);
        state.flags.CF = 0; state.flags.OF = 0;
        state.lastEffect = ops[0] + ' &= $' + h16(b) + ' => $' + h16(result & 0xFFFF);
      } else { state.lastEffect = 'AND: bad operands'; }
      break;
    }
    case 'OR': {
      if (ops.length >= 2) {
        var a = getVal(ops[0]);
        var b = getVal(ops[1]);
        var result = a | b;
        setVal(ops[0], result & 0xFFFF);
        update8086NZS(state, result, 16);
        state.flags.CF = 0; state.flags.OF = 0;
        state.lastEffect = ops[0] + ' |= $' + h16(b) + ' => $' + h16(result & 0xFFFF);
      } else { state.lastEffect = 'OR: bad operands'; }
      break;
    }
    case 'XOR': {
      if (ops.length >= 2) {
        var a = getVal(ops[0]);
        var b = getVal(ops[1]);
        var result = a ^ b;
        setVal(ops[0], result & 0xFFFF);
        update8086NZS(state, result, 16);
        state.flags.CF = 0; state.flags.OF = 0;
        state.lastEffect = ops[0] + ' ^= $' + h16(b) + ' => $' + h16(result & 0xFFFF);
      } else { state.lastEffect = 'XOR: bad operands'; }
      break;
    }
    case 'NOT': {
      if (ops.length >= 1) {
        var a = getVal(ops[0]);
        var result = (~a) & 0xFFFF;
        setVal(ops[0], result);
        state.lastEffect = 'NOT ' + ops[0] + ' => $' + h16(result);
      } else { state.lastEffect = 'NOT: missing operand'; }
      break;
    }
    case 'NEG': {
      if (ops.length >= 1) {
        var a = getVal(ops[0]);
        var result = (-a) & 0xFFFF;
        setVal(ops[0], result);
        state.flags.CF = a !== 0 ? 1 : 0;
        update8086NZS(state, result, 16);
        state.lastEffect = 'NEG ' + ops[0] + ' => $' + h16(result);
      } else { state.lastEffect = 'NEG: missing operand'; }
      break;
    }
    case 'CMP': {
      if (ops.length >= 2) {
        var a = getVal(ops[0]);
        var b = getVal(ops[1]);
        var result = a - b;
        state.flags.CF = result < 0 ? 1 : 0;
        state.flags.OF = (((a ^ b) & (a ^ result)) & 0x8000) ? 1 : 0;
        update8086NZS(state, result, 16);
        state.lastEffect = 'CMP ' + ops[0] + '($' + h16(a) + ') - $' + h16(b) + ' Z=' + state.flags.ZF;
      } else { state.lastEffect = 'CMP: bad operands'; }
      break;
    }
    case 'TEST': {
      if (ops.length >= 2) {
        var a = getVal(ops[0]);
        var b = getVal(ops[1]);
        var result = a & b;
        state.flags.CF = 0; state.flags.OF = 0;
        update8086NZS(state, result, 16);
        state.lastEffect = 'TEST ' + ops[0] + ' & $' + h16(b) + ' Z=' + state.flags.ZF;
      } else { state.lastEffect = 'TEST: bad operands'; }
      break;
    }

    // ── Jumps ────────────────────────────────────────────────────────────────
    case 'JMP': jumpToLabel(ops[0] || ''); state.lastEffect = 'JMP → ' + (ops[0] || ''); break;
    case 'JE':  case 'JZ':  if (state.flags.ZF === 1) jumpToLabel(ops[0] || ''); else state.lastEffect = mn + ' not taken (ZF=0)'; if (!jumped) state.lastEffect = mn + ' taken (ZF=1) → ' + ops[0]; break;
    case 'JNE': case 'JNZ': if (state.flags.ZF === 0) { jumpToLabel(ops[0] || ''); if (!jumped) { /* handled */ } state.lastEffect = mn + ' taken (ZF=0) → ' + ops[0]; } else state.lastEffect = mn + ' not taken (ZF=1)'; break;
    case 'JG':  case 'JNLE': if (state.flags.ZF === 0 && state.flags.SF === state.flags.OF) { jumpToLabel(ops[0] || ''); state.lastEffect = mn + ' taken → ' + ops[0]; } else state.lastEffect = mn + ' not taken'; break;
    case 'JL':  case 'JNGE': if (state.flags.SF !== state.flags.OF) { jumpToLabel(ops[0] || ''); state.lastEffect = mn + ' taken → ' + ops[0]; } else state.lastEffect = mn + ' not taken'; break;
    case 'JGE': case 'JNL': if (state.flags.SF === state.flags.OF) { jumpToLabel(ops[0] || ''); state.lastEffect = mn + ' taken → ' + ops[0]; } else state.lastEffect = mn + ' not taken'; break;
    case 'JLE': case 'JNG': if (state.flags.ZF === 1 || state.flags.SF !== state.flags.OF) { jumpToLabel(ops[0] || ''); state.lastEffect = mn + ' taken → ' + ops[0]; } else state.lastEffect = mn + ' not taken'; break;
    case 'JA':  case 'JNBE': if (state.flags.CF === 0 && state.flags.ZF === 0) { jumpToLabel(ops[0] || ''); state.lastEffect = mn + ' taken → ' + ops[0]; } else state.lastEffect = mn + ' not taken'; break;
    case 'JB':  case 'JNAE': if (state.flags.CF === 1) { jumpToLabel(ops[0] || ''); state.lastEffect = mn + ' taken → ' + ops[0]; } else state.lastEffect = mn + ' not taken'; break;
    case 'JS': if (state.flags.SF === 1) { jumpToLabel(ops[0] || ''); state.lastEffect = mn + ' taken (SF=1) → ' + ops[0]; } else state.lastEffect = mn + ' not taken (SF=0)'; break;
    case 'JNS': if (state.flags.SF === 0) { jumpToLabel(ops[0] || ''); state.lastEffect = mn + ' taken (SF=0) → ' + ops[0]; } else state.lastEffect = mn + ' not taken (SF=1)'; break;
    case 'JO': if (state.flags.OF === 1) { jumpToLabel(ops[0] || ''); state.lastEffect = mn + ' taken → ' + ops[0]; } else state.lastEffect = mn + ' not taken'; break;
    case 'JNO': if (state.flags.OF === 0) { jumpToLabel(ops[0] || ''); state.lastEffect = mn + ' taken → ' + ops[0]; } else state.lastEffect = mn + ' not taken'; break;
    case 'JC': if (state.flags.CF === 1) { jumpToLabel(ops[0] || ''); state.lastEffect = mn + ' taken → ' + ops[0]; } else state.lastEffect = mn + ' not taken'; break;
    case 'JNC': if (state.flags.CF === 0) { jumpToLabel(ops[0] || ''); state.lastEffect = mn + ' taken → ' + ops[0]; } else state.lastEffect = mn + ' not taken'; break;
    case 'JCXZ': if (state.regs.CX === 0) { jumpToLabel(ops[0] || ''); state.lastEffect = 'JCXZ taken (CX=0) → ' + ops[0]; } else state.lastEffect = 'JCXZ not taken'; break;

    // ── Stack ────────────────────────────────────────────────────────────────
    case 'PUSH': {
      if (ops.length >= 1) {
        var val = getVal(ops[0]);
        state.regs.SP = (state.regs.SP - 2) & 0xFFFF;
        state.memory.set(state.regs.SP, val & 0xFFFF);
        state.lastEffect = 'PUSH ' + ops[0] + '=$' + h16(val) + ' SP=$' + h16(state.regs.SP);
      } else { state.lastEffect = 'PUSH: missing operand'; }
      break;
    }
    case 'PUSHF': {
      var flags = (state.flags.OF << 11) | (state.flags.DF << 10) | (state.flags.IF << 9) |
                  (state.flags.SF << 7) | (state.flags.ZF << 6) | (state.flags.AF << 4) |
                  (state.flags.PF << 2) | state.flags.CF;
      state.regs.SP = (state.regs.SP - 2) & 0xFFFF;
      state.memory.set(state.regs.SP, flags);
      state.lastEffect = 'PUSHF flags=$' + h16(flags);
      break;
    }
    case 'POP': {
      if (ops.length >= 1) {
        var val = state.memory.get(state.regs.SP) || 0;
        state.regs.SP = (state.regs.SP + 2) & 0xFFFF;
        setVal(ops[0], val);
        state.lastEffect = 'POP ' + ops[0] + ' = $' + h16(val);
      } else { state.lastEffect = 'POP: missing operand'; }
      break;
    }
    case 'POPF': {
      var flags = state.memory.get(state.regs.SP) || 0;
      state.regs.SP = (state.regs.SP + 2) & 0xFFFF;
      state.flags.CF = flags & 1;
      state.flags.PF = (flags >> 2) & 1;
      state.flags.AF = (flags >> 4) & 1;
      state.flags.ZF = (flags >> 6) & 1;
      state.flags.SF = (flags >> 7) & 1;
      state.flags.IF = (flags >> 9) & 1;
      state.flags.DF = (flags >> 10) & 1;
      state.flags.OF = (flags >> 11) & 1;
      state.lastEffect = 'POPF flags=$' + h16(flags);
      break;
    }

    // ── Call/Ret ─────────────────────────────────────────────────────────────
    case 'CALL': {
      var lbl = ops[0] || '';
      if (lbl) {
        state.callStack.push(nextLine >= 0 ? nextLine : parsedLines.length);
        state.regs.SP = (state.regs.SP - 2) & 0xFFFF;
        state.memory.set(state.regs.SP, nextLine & 0xFFFF);
        jumpToLabel(lbl);
        state.lastEffect = 'CALL → ' + lbl + ' (stack depth: ' + state.callStack.length + ')';
      } else { state.lastEffect = 'CALL: missing label'; }
      break;
    }
    case 'RET':
    case 'RETN': {
      if (state.callStack.length > 0) {
        var ret = state.callStack.pop();
        state.regs.SP = (state.regs.SP + 2) & 0xFFFF;
        state.curLine = ret;
        jumped = true;
        state.lastEffect = 'RET → line ' + (ret + 1);
      } else {
        state.halted = true;
        state.lastEffect = 'RET with empty call stack — halted';
      }
      break;
    }

    // ── Flag ops ─────────────────────────────────────────────────────────────
    case 'STC': state.flags.CF = 1; state.lastEffect = 'Set Carry flag'; break;
    case 'CLC': state.flags.CF = 0; state.lastEffect = 'Clear Carry flag'; break;
    case 'STD': state.flags.DF = 1; state.lastEffect = 'Set Direction flag'; break;
    case 'CLD': state.flags.DF = 0; state.lastEffect = 'Clear Direction flag'; break;
    case 'STI': state.flags.IF = 1; state.lastEffect = 'Set Interrupt flag'; break;
    case 'CLI': state.flags.IF = 0; state.lastEffect = 'Clear Interrupt flag'; break;
    case 'CMC': state.flags.CF ^= 1; state.lastEffect = 'Complement Carry flag => CF=' + state.flags.CF; break;

    // ── Other ────────────────────────────────────────────────────────────────
    case 'NOP': state.lastEffect = 'No operation'; break;
    case 'HLT': state.halted = true; state.lastEffect = 'Halt — processor stopped'; break;
    case 'INT': state.lastEffect = 'Software interrupt ' + (ops[0] || ''); break;
    case 'IRET': {
      if (state.callStack.length > 0) {
        var ret = state.callStack.pop();
        state.curLine = ret;
        jumped = true;
        state.lastEffect = 'IRET → line ' + (ret + 1);
      } else {
        state.lastEffect = 'IRET — no interrupt to return from';
      }
      break;
    }
    case 'LEA': {
      if (ops.length >= 2) {
        var addr = parseMemAddr8086(ops[1], state);
        setVal(ops[0], addr);
        state.lastEffect = 'LEA ' + ops[0] + ' = effective addr $' + h16(addr);
      } else { state.lastEffect = 'LEA: bad operands'; }
      break;
    }
    case 'XCHG': {
      if (ops.length >= 2) {
        var a = getVal(ops[0]);
        var b = getVal(ops[1]);
        setVal(ops[0], b);
        setVal(ops[1], a);
        state.lastEffect = 'XCHG ' + ops[0] + ' <=> ' + ops[1];
      } else { state.lastEffect = 'XCHG: bad operands'; }
      break;
    }
    case 'MUL': {
      if (ops.length >= 1) {
        var b = getVal(ops[0]);
        var result = (state.regs.AX & 0xFF) * (b & 0xFF);
        state.regs.AX = result & 0xFFFF;
        state.lastEffect = 'MUL AL * ' + ops[0] + ' = AX=$' + h16(result & 0xFFFF);
      } else { state.lastEffect = 'MUL: missing operand'; }
      break;
    }
    case 'IMUL': {
      if (ops.length >= 1) {
        var b = getVal(ops[0]);
        var al = state.regs.AX & 0xFF;
        if (al > 127) al -= 256;
        var bv = b & 0xFF; if (bv > 127) bv -= 256;
        var result = al * bv;
        state.regs.AX = result & 0xFFFF;
        state.lastEffect = 'IMUL signed => AX=$' + h16(result & 0xFFFF);
      } else { state.lastEffect = 'IMUL: missing operand'; }
      break;
    }
    case 'SHL': case 'SAL': {
      if (ops.length >= 2) {
        var a = getVal(ops[0]);
        var cnt = getVal(ops[1]) & 0x1F;
        var result = (a << cnt) & 0xFFFF;
        setVal(ops[0], result);
        update8086NZS(state, result, 16);
        state.lastEffect = ops[0] + ' SHL ' + cnt + ' => $' + h16(result);
      } else { state.lastEffect = 'SHL: bad operands'; }
      break;
    }
    case 'SHR': {
      if (ops.length >= 2) {
        var a = getVal(ops[0]);
        var cnt = getVal(ops[1]) & 0x1F;
        var result = (a >>> cnt) & 0xFFFF;
        setVal(ops[0], result);
        update8086NZS(state, result, 16);
        state.lastEffect = ops[0] + ' SHR ' + cnt + ' => $' + h16(result);
      } else { state.lastEffect = 'SHR: bad operands'; }
      break;
    }
    case 'SAR': {
      if (ops.length >= 2) {
        var a = getVal(ops[0]);
        var cnt = getVal(ops[1]) & 0x1F;
        var signed = a > 0x7FFF ? a - 0x10000 : a;
        var result = (signed >> cnt) & 0xFFFF;
        setVal(ops[0], result);
        update8086NZS(state, result, 16);
        state.lastEffect = ops[0] + ' SAR ' + cnt + ' => $' + h16(result);
      } else { state.lastEffect = 'SAR: bad operands'; }
      break;
    }
    case 'LOOP': {
      state.regs.CX = (state.regs.CX - 1) & 0xFFFF;
      if (state.regs.CX !== 0) {
        jumpToLabel(ops[0] || '');
        state.lastEffect = 'LOOP CX=$' + h16(state.regs.CX) + ' → ' + ops[0];
      } else {
        state.lastEffect = 'LOOP CX=0, fall through';
      }
      break;
    }
    case 'CBW': {
      var al = state.regs.AX & 0xFF;
      state.regs.AX = al > 127 ? (al | 0xFF00) : al;
      state.lastEffect = 'CBW: sign-extend AL to AX = $' + h16(state.regs.AX);
      break;
    }
    case 'CWD': {
      var ax = state.regs.AX;
      state.regs.DX = ax > 0x7FFF ? 0xFFFF : 0;
      state.lastEffect = 'CWD: sign-extend AX to DX:AX, DX=$' + h16(state.regs.DX);
      break;
    }

    default:
      state.lastEffect = 'Unimplemented: ' + mn;
      break;
  }

  if (!jumped) {
    state.curLine = nextLine >= 0 ? nextLine : parsedLines.length;
  }
}

// ── Hex formatting helpers ───────────────────────────────────────────────────

function h8(n) {
  return ('00' + ((n || 0) & 0xFF).toString(16).toUpperCase()).slice(-2);
}

function h16(n) {
  return ('0000' + ((n || 0) & 0xFFFF).toString(16).toUpperCase()).slice(-4);
}

// ── Stepper entry points ─────────────────────────────────────────────────────

function stepForward(state, parsedLines, arch) {
  if (state.halted) return state;
  // Push snapshot before mutating (exclude history to avoid exponential growth)
  var snap = cloneState(state);
  state.history.push(snap);
  // Limit history size to 500 entries
  if (state.history.length > 500) state.history.shift();

  var lblMap = labelLineMap(parsedLines);
  if (arch === '8086') {
    exec8086(state, parsedLines, lblMap);
  } else {
    exec6502(state, parsedLines, lblMap);
  }
  return state;
}

function stepBackward(state) {
  if (state.history.length === 0) return state;
  var snap = state.history.pop();
  // Restore all fields from snapshot (but keep the current history array)
  state.regs = snap.regs;
  state.flags = snap.flags;
  state.memory = snap.memory;
  state.callStack = snap.callStack;
  state.curLine = snap.curLine;
  state.halted = snap.halted;
  state.lastEffect = snap.lastEffect;
  return state;
}

function runToLine(state, parsedLines, arch, targetLineIdx, maxSteps) {
  if (maxSteps === undefined) maxSteps = 5000;
  var steps = 0;
  while (state.curLine !== targetLineIdx && !state.halted && steps < maxSteps) {
    stepForward(state, parsedLines, arch);
    steps++;
  }
  return state;
}

// Jump (teleport) the program counter to targetLineIdx without simulating.
// Finds the nearest code line at or after targetIdx (falls back to before).
// Resets lastEffect to show the jump; registers are preserved.
function jumpToLine(state, parsedLines, targetLineIdx) {
  var codeIdx = findNextCodeLine(parsedLines, targetLineIdx);
  if (codeIdx < 0) codeIdx = findPrevCodeLine(parsedLines, targetLineIdx + 1);
  if (codeIdx < 0) return state;
  state.curLine = codeIdx;
  var p = parsedLines[codeIdx];
  var instr = p ? ((p.mnemonic || '') + (p.operands ? ' ' + p.operands : '')) : '';
  state.lastEffect = 'Jumped to line ' + (codeIdx + 1) + (instr ? ' — ' + instr : '');
  return state;
}

// ── Instruction title lookup ─────────────────────────────────────────────────

var INSTRUCTION_TITLES = {
  // 6502
  LDA: 'Load Accumulator',
  LDX: 'Load X Register',
  LDY: 'Load Y Register',
  STA: 'Store Accumulator',
  STX: 'Store X Register',
  STY: 'Store Y Register',
  TAX: 'Transfer A → X',
  TAY: 'Transfer A → Y',
  TXA: 'Transfer X → A',
  TYA: 'Transfer Y → A',
  TSX: 'Transfer Stack Pointer → X',
  TXS: 'Transfer X → Stack Pointer',
  PHA: 'Push Accumulator',
  PLA: 'Pull Accumulator',
  PHP: 'Push Processor Status',
  PLP: 'Pull Processor Status',
  ADC: 'Add with Carry',
  SBC: 'Subtract with Borrow',
  INC: 'Increment Memory',
  DEC: 'Decrement Memory',
  INX: 'Increment X',
  INY: 'Increment Y',
  DEX: 'Decrement X',
  DEY: 'Decrement Y',
  AND: 'Logical AND',
  ORA: 'Logical OR',
  EOR: 'Exclusive OR',
  ASL: 'Arithmetic Shift Left',
  LSR: 'Logical Shift Right',
  ROL: 'Rotate Left',
  ROR: 'Rotate Right',
  BIT: 'Bit Test',
  CMP: 'Compare Accumulator',
  CPX: 'Compare X',
  CPY: 'Compare Y',
  BEQ: 'Branch if Equal (Z=1)',
  BNE: 'Branch if Not Equal (Z=0)',
  BCC: 'Branch if Carry Clear (C=0)',
  BCS: 'Branch if Carry Set (C=1)',
  BMI: 'Branch if Minus (N=1)',
  BPL: 'Branch if Plus (N=0)',
  BVC: 'Branch if Overflow Clear',
  BVS: 'Branch if Overflow Set',
  JMP: 'Jump',
  JSR: 'Jump to Subroutine',
  RTS: 'Return from Subroutine',
  RTI: 'Return from Interrupt',
  BRK: 'Software Interrupt',
  NOP: 'No Operation',
  SEC: 'Set Carry Flag',
  CLC: 'Clear Carry Flag',
  SEI: 'Set Interrupt Disable',
  CLI: 'Clear Interrupt Disable',
  SED: 'Set Decimal Mode',
  CLD: 'Clear Decimal Mode',
  CLV: 'Clear Overflow Flag',
  // 8086
  MOV: 'Move',
  ADD: 'Add',
  SUB: 'Subtract',
  MUL: 'Unsigned Multiply',
  IMUL: 'Signed Multiply',
  DIV: 'Unsigned Divide',
  IDIV: 'Signed Divide',
  NEG: 'Negate (Two\'s Complement)',
  XOR: 'Exclusive OR',
  OR:  'Logical OR',
  NOT: 'Bitwise NOT',
  CMP: 'Compare',
  TEST: 'Bit Test (AND, no store)',
  JMP:  'Unconditional Jump',
  JE:   'Jump if Equal (ZF=1)',
  JZ:   'Jump if Zero (ZF=1)',
  JNE:  'Jump if Not Equal (ZF=0)',
  JNZ:  'Jump if Not Zero (ZF=0)',
  JG:   'Jump if Greater (signed)',
  JNLE: 'Jump if Not Less or Equal',
  JL:   'Jump if Less (signed)',
  JNGE: 'Jump if Not Greater or Equal',
  JGE:  'Jump if Greater or Equal',
  JNL:  'Jump if Not Less',
  JLE:  'Jump if Less or Equal',
  JNG:  'Jump if Not Greater',
  JA:   'Jump if Above (unsigned)',
  JNBE: 'Jump if Not Below or Equal',
  JB:   'Jump if Below (unsigned)',
  JNAE: 'Jump if Not Above or Equal',
  JS:   'Jump if Sign (SF=1)',
  JNS:  'Jump if Not Sign (SF=0)',
  CALL: 'Call Procedure',
  RET:  'Return from Procedure',
  PUSH: 'Push onto Stack',
  POP:  'Pop from Stack',
  PUSHF:'Push Flags',
  POPF: 'Pop Flags',
  NOP:  'No Operation',
  HLT:  'Halt Processor',
  INT:  'Software Interrupt',
  IRET: 'Interrupt Return',
  LEA:  'Load Effective Address',
  XCHG: 'Exchange',
  SHL:  'Shift Left',
  SHR:  'Shift Right Logical',
  SAR:  'Shift Arithmetic Right',
  RCL:  'Rotate Left through Carry',
  RCR:  'Rotate Right through Carry',
  CBW:  'Convert Byte to Word',
  CWD:  'Convert Word to Doubleword',
  LOOP: 'Loop (decrement CX, branch if ≠ 0)',
  IN:   'Input from Port',
  OUT:  'Output to Port',
  STC:  'Set Carry Flag',
  STD:  'Set Direction Flag',
  CLD:  'Clear Direction Flag',
  STI:  'Set Interrupt Flag',
  CLI:  'Clear Interrupt Flag',
  XCHG: 'Exchange Registers',
  XLAT: 'Translate Byte',
};

function getInstructionTitle(mnemonic) {
  if (!mnemonic) return '';
  return INSTRUCTION_TITLES[mnemonic.toUpperCase()] || '';
}
