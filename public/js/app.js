'use strict';

// Apply saved theme immediately to avoid a flash of the wrong theme
(function () {
  const t = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', t);
}());

window.setTheme = function (theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try { localStorage.setItem('theme', theme); } catch (e) {}
};

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

/**
 * Register a custom Highlight.js grammar for 6502 assembly.
 *
 * x86asm cannot be used here because it treats single quotes as character
 * literal delimiters and does not recognise the asterisk (*) comment style
 * used by Apple II assemblers.  Apostrophes inside "* comment" lines would
 * therefore be interpreted as unclosed string literals, breaking all token
 * colouring from that point until the next apostrophe.
 *
 * Also handles DEC MACRO / M80 block comments (COMMENT X ... X) used in
 * Microsoft BASIC for 6502, where X is * or %.
 */
function register6502Asm() {
  if (typeof hljs === 'undefined') return;
  hljs.registerLanguage('6502asm', function(hljs) {
    return {
      name: '6502 Assembly',
      case_insensitive: true,
      keywords: {
        keyword:
          'adc and asl bcc bcs beq bit bmi bne bpl brk bvc bvs ' +
          'clc cld cli clv cmp cpx cpy dec dex dey eor inc inx iny ' +
          'jmp jsr lda ldx ldy lsr nop ora pha php pla plp ' +
          'rol ror rti rts sbc sec sed sei sta stx sty ' +
          'tax tay tsx txa txs tya',
      },
      contains: [
        // DEC MACRO / M80 block comments: COMMENT X ... X
        // end uses \n<delim> so the entire interior is absorbed as comment.
        { scope: 'comment', begin: /COMMENT\s+\*/, end: /\n\s*\*/, contains: [] },
        { scope: 'comment', begin: /COMMENT\s+%/,  end: /\n\s*%/,  contains: [] },
        // Whole-line "*" comments (Apple II / Merlin assembler style).
        // Must be listed before number rules so an apostrophe inside a
        // "* comment" line is never seen by those rules.
        { scope: 'comment', begin: /^\s*\*/, end: /$/ },
        // Semicolon inline comments
        hljs.COMMENT(';', '$'),
        // Hex ($xx), binary (%bbbb), decimal literals
        { scope: 'number', begin: /\$[0-9A-Fa-f]+/ },
        { scope: 'number', begin: /%[01]+/ },
        { scope: 'number', begin: /\b[0-9]+\b/ },
        // Labels at start of line
        { scope: 'symbol', begin: /^[A-Za-z_][A-Za-z0-9_]*:?(?=\s)/ },
        { scope: 'symbol', begin: /^[:.][A-Za-z0-9_]+/ },
        // Assembler directives
        {
          scope: 'meta',
          begin: /\b(org|equ|db|dw|ds|hex|asc|put|use|lst|tr|dum|dend|sav|usr|lstdo|byte|word|block|end|include|if|else|endif|macro|endm)\b/i,
          relevance: 0,
        },
      ],
    };
  });
}

/**
 * Map a code-fence identifier or program language string to an hljs language.
 * fenceId (per-file) takes precedence; language string disambiguates dialects
 * that share the same fence id (e.g. 6502 vs x86 assembly both use "asm").
 */
function getHljsLanguage(fenceId, language) {
  const lang = (language || '').toLowerCase();
  if (lang.includes('6502')) return '6502asm';
  if (fenceId === 'cpp')  return 'cpp';
  if (fenceId === 'asm')  return 'x86asm';
  if (fenceId === 'lisp') return 'lisp';
  if (lang.includes('mdl') || lang.includes('lisp')) return 'lisp';
  if (lang.includes('assembly') || lang.includes('asm')) return 'x86asm';
  if (/\bc\b|c\+\+|c\/c/.test(lang)) return 'cpp';
  return null;
}

/**
 * Split Highlight.js HTML output into per-line strings, closing open <span>
 * tags at each newline and reopening them on the next line so each line is
 * a self-contained HTML fragment.
 */
function splitHighlightedHtml(html) {
  const lines = [];
  const stack = [];
  let current = '';
  let i = 0;
  while (i < html.length) {
    if (html[i] === '\n') {
      current += '</span>'.repeat(stack.length);
      lines.push(current);
      current = stack.join('');
      i++;
    } else if (html.startsWith('<span', i)) {
      const end = html.indexOf('>', i);
      const tag = html.slice(i, end + 1);
      stack.push(tag);
      current += tag;
      i = end + 1;
    } else if (html.startsWith('</span>', i)) {
      stack.pop();
      current += '</span>';
      i += 7;
    } else {
      current += html[i];
      i++;
    }
  }
  if (current !== '' || lines.length === 0) lines.push(current);
  return lines;
}

// Patch the CDN x86asm grammar to remove BACKSLASH_ESCAPE from string modes.
//
// The built-in grammar uses hljs.QUOTE_STRING_MODE (which treats \ as an
// escape character) and a single-quote mode with end: "[^\\\\]'" (which also
// has backslash-sensitive semantics).  In x86 assembly, \ is NOT an escape
// character inside strings, so patterns like "\" should be a valid one-char
// string containing a backslash — but with escape handling the closing " is
// swallowed as \", the string spans to the next line, and everything breaks.
function patchX86AsmStrings() {
  if (typeof hljs === 'undefined') return;
  const lang = hljs.getLanguage('x86asm');
  if (!lang || !Array.isArray(lang.contains)) return;

  lang.contains = lang.contains.map(m => {
    // Replace the pre-built QUOTE_STRING_MODE (double-quote with BACKSLASH_ESCAPE)
    if (m === hljs.QUOTE_STRING_MODE) {
      return { scope: 'string', begin: '"', end: '"', relevance: 0 };
    }
    // Replace single-quote mode that uses the [^\\]' end pattern
    if (m.begin === "'" || (m.begin && m.begin.toString() === "/'/")) {
      return { scope: 'string', begin: "'", end: "'", relevance: 0 };
    }
    // Fallback: any string mode that still carries BACKSLASH_ESCAPE in its contains
    const s = m.scope || m.className;
    if (s === 'string' && Array.isArray(m.contains) && m.contains.length) {
      return { scope: 'string', begin: m.begin, end: m.end, relevance: m.relevance || 0 };
    }
    return m;
  });
}

// Register grammars that are not bundled in the CDN language files.
register6502Asm();
patchX86AsmStrings();

function renderCodeWithEnhancements(body, enhancements, language) {
  const lines = body.replace(/\r/g, '').split('\n');
  if (lines[lines.length - 1] === '') lines.pop();
  // The formatter always writes exactly one blank separator line after the
  // closing '---', producing '\n\n' before the code. Strip exactly those 2
  // leading empty elements so that lines[0] is source line 1. Using splice
  // (not a while-loop) preserves any genuine blank lines at the top of the
  // source file, keeping line_start/line_end indices exact.
  lines.splice(0, 2);
  // Strip code fence wrapper, capturing the fence language identifier first.
  let fenceId = null;
  if (lines.length && lines[0].startsWith('```')) {
    fenceId = lines[0].slice(3).trim() || null;
    lines.splice(0, 1);
  }
  if (lines.length && lines[lines.length - 1] === '```') lines.pop();

  // Pre-highlight the entire code block so token spans are consistent
  // across all section boundaries.
  let highlightedLines = null;
  const hljsLang = getHljsLanguage(fenceId, language);
  if (hljsLang && typeof hljs !== 'undefined') {
    try {
      const result = hljs.highlight(lines.join('\n'), { language: hljsLang });
      highlightedLines = splitHighlightedHtml(result.value);
    } catch (e) {
      // Fall through to plain (escaped) rendering
    }
  }

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

  return sections.map(sec => renderSection(sec, highlightedLines)).join('');
}

function renderSection({ lines, startLine, enhancement, highlighted }, highlightedLines) {
  if (lines.length === 0 && !enhancement) return '';

  const codeHtml = lines.map((line, idx) => {
    const lineNum = startLine + idx;
    const hl = highlighted ? ' highlighted' : '';
    const content = (highlightedLines && highlightedLines[lineNum - 1] != null)
      ? highlightedLines[lineNum - 1]
      : escapeHtml(line);
    return `<div class="code-line${hl}"><span class="line-num">${lineNum}</span><span class="line-code">${content}</span></div>`;
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
      <img src="${escapeAttr(enh.image_url)}" alt="${escapeAttr(enh.title)}" loading="lazy">
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
  const programs = (catalog.programs || []).slice().sort((a, b) => (a.year || 0) - (b.year || 0));
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
    <p>Annotated source code from historically significant open-sourced programs.</p>
    <p>Read the code that changed computing.</p>
  </div>
  <div class="program-grid">${cards}</div>
</div>`;
}

// ---------------------------------------------------------------------------
// Source tree builder — mirrors the repo directory structure
// ---------------------------------------------------------------------------

function buildFileTree(files) {
  const sorted = [...files].sort((a, b) => (a.order || 0) - (b.order || 0));
  const root = { dirs: {}, files: [] };
  for (const file of sorted) {
    const path = file.path || '';
    // Split on / — if no path, treat file as root-level
    const parts = path ? path.split('/').filter(Boolean) : [];
    if (parts.length === 0) {
      root.files.push(file);
      continue;
    }
    const dirParts = parts.slice(0, -1);
    let node = root;
    for (const dir of dirParts) {
      if (!node.dirs[dir]) node.dirs[dir] = { dirs: {}, files: [] };
      node = node.dirs[dir];
    }
    node.files.push(file);
  }
  return root;
}

function renderFileTree(node, programSlug, depth) {
  if (depth === undefined) depth = 0;
  let html = '';
  const pad  = (depth * 1.25 + 0.5).toFixed(2);  // rem — directory row indent
  const fpad = (depth * 1.25 + 1.75).toFixed(2); // rem — file row (icon column + dir indent)

  for (const dirName of Object.keys(node.dirs)) {
    const dirNode = node.dirs[dirName];
    const isRoot = depth === 0;
    html += `<div class="tree-group${isRoot ? ' tree-group-root' : ''}">`;
    html += `<div class="tree-dir" style="padding-left:${pad}rem">`;
    html += `<span class="tree-dir-icon">▾</span>`;
    html += `<span class="tree-dir-name">${escapeHtml(dirName)}/</span>`;
    html += `</div>`;
    html += renderFileTree(dirNode, programSlug, depth + 1);
    html += `</div>`;
  }

  for (const file of node.files) {
    // Backward-compat: files without a `generated` field are from old catalog — treat as linked
    const linked = file.generated !== false;
    if (linked) {
      html += `<a class="tree-file tree-file-link" href="#/${escapeAttr(programSlug)}/${escapeAttr(file.slug)}" style="padding-left:${fpad}rem">`;
      html += `<span class="tree-file-icon">▶</span>`;
      html += `<div class="tree-file-body">`;
      html += `<div class="tree-file-name">${escapeHtml(file.title)}</div>`;
      if (file.description) {
        html += `<div class="tree-file-desc">${escapeHtml(file.description)}</div>`;
      }
      html += `</div>`;
      html += `</a>`;
    } else {
      html += `<div class="tree-file tree-file-plain" style="padding-left:${fpad}rem">`;
      html += `<span class="tree-file-icon">·</span>`;
      html += `<div class="tree-file-body">`;
      html += `<div class="tree-file-name">${escapeHtml(file.title)}</div>`;
      if (file.description) {
        html += `<div class="tree-file-desc">${escapeHtml(file.description)}</div>`;
      }
      html += `</div>`;
      html += `</div>`;
    }
  }

  return html;
}

// ---------------------------------------------------------------------------

function renderHighlights(highlights, programSlug) {
  if (!highlights || highlights.length === 0) return '';

  const cards = highlights.map(h => {
    const linksHtml = (h.links || []).map(lk => {
      const href = lk.enhancement
        ? `#/${escapeAttr(programSlug)}/${escapeAttr(lk.file)}/${escapeAttr(lk.enhancement)}`
        : `#/${escapeAttr(programSlug)}/${escapeAttr(lk.file)}`;
      return `<a class="highlight-link" href="${href}">${escapeHtml(lk.label)} →</a>`;
    }).join('');

    return `
<div class="highlight-card">
  <h3 class="highlight-title">${escapeHtml(h.title)}</h3>
  <p class="highlight-desc">${escapeHtml(h.description)}</p>
  ${linksHtml ? `<div class="highlight-links">${linksHtml}</div>` : ''}
</div>`;
  }).join('');

  return `
<section class="highlights">
  <h2 class="highlights-heading">Highlights</h2>
  <div class="highlights-grid">${cards}</div>
</section>`;
}

function renderProgramPage(program) {
  document.title = `${program.title} — Code Museum`;

  const files = program.files || [];
  const treeHtml = files.length > 0
    ? renderFileTree(buildFileTree(files), program.slug)
    : '';

  let introHtml;
  if (program.introduction && program.introduction.trim()) {
    introHtml = program.introduction.split('\n\n')
      .map(p => {
        let s = escapeHtml(p.trim());
        s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        s = s.replace(/\*(.+?)\*/g, '<em>$1</em>');
        s = s.replace(/(?<!\w)_(.+?)_(?!\w)/g, '<em>$1</em>');
        return `<p class="intro-paragraph">${s}</p>`;
      })
      .join('');
  } else {
    introHtml = `<p class="description">${escapeHtml(program.description)}</p>`;
  }

  const introImageHtml = program.image_url ? `
  <figure class="intro-image">
    <img src="${escapeAttr(program.image_url)}" alt="${escapeAttr(program.title)}" loading="lazy">
    ${program.image_caption ? `<figcaption>${escapeHtml(program.image_caption)}${commonsUrl(program.image_url) ? ` <a class="commons-link" href="${escapeAttr(commonsUrl(program.image_url))}" target="_blank" rel="noopener">Wikimedia Commons</a>` : ''}</figcaption>` : ''}
  </figure>` : '';

  const highlightsHtml = renderHighlights(program.highlights || [], program.slug);

  return `
<div class="program-page">
  <div class="program-page-header">
    <h1>${escapeHtml(program.title)}</h1>
    <div class="byline">${escapeHtml(program.author)} · ${program.year} · ${escapeHtml(program.language)}</div>
    ${introImageHtml}
    ${introHtml}
  </div>
  ${highlightsHtml}
  <div class="file-tree">${treeHtml}</div>
  ${program.github_url ? `<a class="github-badge" href="${escapeAttr(program.github_url)}" target="_blank" rel="noopener">View source on GitHub ↗</a>` : ''}
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

  let right = `<div class="theme-controls">
    <button class="theme-btn" data-theme-btn="dark"  onclick="setTheme('dark')"  title="Dark theme">Dark</button>
    <button class="theme-btn" data-theme-btn="light" onclick="setTheme('light')" title="Light theme">Light</button>
  </div>`;
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

function renderEnhancementIndex(enhancements) {
  if (!enhancements || enhancements.length === 0) return { mobileHtml: '', sidebarHtml: '' };

  const sorted = [...enhancements].sort((a, b) => a.line_start - b.line_start);

  const items = sorted.map((enh, i) =>
    `<li><button class="enh-index-item" data-enh-id="${escapeAttr(enh.id)}" onclick="goToEnhancement('${escapeAttr(enh.id)}')">`
    + `<span class="enh-index-num">${i + 1}</span>`
    + `<span class="enh-index-title">${escapeHtml(enh.title)}</span>`
    + `</button></li>`
  ).join('');

  const mobileHtml = `
<div class="enh-index-mobile">
  <button class="enh-index-toggle" id="enh-mobile-btn" onclick="toggleEnhIndexMobile()" aria-expanded="false">
    <span class="enh-toggle-chevron">▶</span>
    <span>Sections (${sorted.length})</span>
  </button>
  <ol class="enh-index-list enh-index-mobile-list" id="enh-index-mobile-list" hidden>${items}</ol>
</div>`;

  const sidebarHtml = `
<nav class="enh-index-sidebar" id="enh-index-sidebar">
  <div class="enh-index-header">
    <span class="enh-index-label">Sections</span>
    <button class="enh-index-close" onclick="toggleEnhIndexSidebar()" title="Hide sections">✕</button>
  </div>
  <ol class="enh-index-list">${items}</ol>
</nav>
<button class="enh-index-show" id="enh-index-show" onclick="toggleEnhIndexSidebar()" title="Show sections">☰</button>`;

  return { mobileHtml, sidebarHtml };
}

// Scroll the sidebar list so the given item is visible (centers it if off-screen).
// Operates directly on the <ol> scroll container to avoid triggering page scroll.
function scrollSidebarToItem(id) {
  const sidebar = document.getElementById('enh-index-sidebar');
  if (!sidebar || sidebar.style.display === 'none') return;
  const list = sidebar.querySelector('.enh-index-list');
  const btn  = sidebar.querySelector(`.enh-index-item[data-enh-id="${id}"]`);
  if (!list || !btn) return;
  const listH  = list.clientHeight;
  const btnTop = btn.offsetTop;
  const btnH   = btn.offsetHeight;
  // Already fully visible — do nothing
  if (btnTop >= list.scrollTop && btnTop + btnH <= list.scrollTop + listH) return;
  // Center the item within the list
  list.scrollTo({ top: btnTop - listH / 2 + btnH / 2, behavior: 'smooth' });
}

window.goToEnhancement = function(id) {
  const panel = document.getElementById('enh-' + id);
  if (!panel) return;
  panel.open = true;
  // Scroll to the highlighted code block that sits just above the panel
  const target = panel.previousElementSibling || panel;
  requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  // Immediately sync sidebar active state and scroll it into view
  document.querySelectorAll('.enh-index-item').forEach(btn => {
    btn.classList.toggle('enh-index-item--active', btn.dataset.enhId === id);
  });
  scrollSidebarToItem(id);
  // On mobile, collapse the index after navigating
  const mobileList = document.getElementById('enh-index-mobile-list');
  if (mobileList && !mobileList.hidden) toggleEnhIndexMobile();
};

// Scroll spy — highlights the active section in the index as the user scrolls.
// Returns a cleanup function that removes the scroll listener.
let _scrollSpyCleanup = null;

function setupScrollSpy(enhancements) {
  // Tear down any previous spy (e.g. when navigating between files)
  if (_scrollSpyCleanup) { _scrollSpyCleanup(); _scrollSpyCleanup = null; }
  if (!enhancements || enhancements.length === 0) return;

  const sorted = [...enhancements].sort((a, b) => a.line_start - b.line_start);

  // Build ordered list of {id, codeSection} pairs.
  // Each enhancement panel is preceded by its highlighted .code-section.
  const entries = sorted.map(enh => {
    const panel = document.getElementById('enh-' + enh.id);
    if (!panel) return null;
    const codeSection = panel.previousElementSibling;
    return { id: enh.id, codeSection };
  }).filter(Boolean);

  if (entries.length === 0) return;

  let lastActiveId = null;

  function updateActive() {
    // The active section is the last one whose top edge has scrolled above
    // 40% of the viewport height — i.e. the section most recently "entered"
    // from the top.
    const threshold = window.innerHeight * 0.4;
    let activeId = null;
    for (const { id, codeSection } of entries) {
      if (codeSection.getBoundingClientRect().top <= threshold) {
        activeId = id;
      } else {
        break;
      }
    }

    if (activeId === lastActiveId) return;
    lastActiveId = activeId;

    document.querySelectorAll('.enh-index-item').forEach(btn => {
      btn.classList.toggle('enh-index-item--active', btn.dataset.enhId === activeId);
    });

    // Scroll the active item into view within the sidebar list.
    if (activeId) scrollSidebarToItem(activeId);
  }

  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => { updateActive(); ticking = false; });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  updateActive();  // run once immediately after render

  _scrollSpyCleanup = () => window.removeEventListener('scroll', onScroll);
}

window.toggleEnhIndexMobile = function() {
  const list = document.getElementById('enh-index-mobile-list');
  const btn  = document.getElementById('enh-mobile-btn');
  if (!list || !btn) return;
  const opening = list.hidden;
  list.hidden = !opening;
  btn.setAttribute('aria-expanded', opening ? 'true' : 'false');
  const chevron = btn.querySelector('.enh-toggle-chevron');
  if (chevron) chevron.style.transform = opening ? 'rotate(90deg)' : '';
};

window.toggleEnhIndexSidebar = function() {
  const sidebar = document.getElementById('enh-index-sidebar');
  const showBtn = document.getElementById('enh-index-show');
  if (!sidebar) return;
  const isVisible = sidebar.classList.contains('enh-index-sidebar--hidden') === false
    && sidebar.style.display !== 'none';
  if (isVisible) {
    sidebar.style.display = 'none';
    if (showBtn) showBtn.style.display = 'flex';
  } else {
    sidebar.style.display = '';
    if (showBtn) showBtn.style.display = 'none';
  }
  try { localStorage.setItem('enhIndexOpen', isVisible ? '0' : '1'); } catch(e) {}
};

function renderReader(meta, body, program) {
  document.title = `${meta.title} — ${meta.program} — Code Museum`;

  const allFiles = program ? program.files || [] : [];
  // Only navigate to generated files (skip stubs with no annotated page)
  const files = allFiles
    .filter(f => f.generated !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0));
  const currentIdx = files.findIndex(f => f.slug === meta.slug);
  const prevFile = currentIdx > 0 ? files[currentIdx - 1] : null;
  const nextFile = currentIdx >= 0 && currentIdx < files.length - 1 ? files[currentIdx + 1] : null;

  const summaryHtml = (meta.summary || []).map(s =>
    `<li>${escapeHtml(s.point)}${s.link ? ` <a href="${escapeAttr(s.link)}" target="_blank" rel="noopener">${escapeHtml(s.link_label || 'Wikipedia')}</a>` : ''}</li>`
  ).join('');

  const codeHtml = renderCodeWithEnhancements(body, meta.enhancements || [], meta.language);
  const { mobileHtml, sidebarHtml } = renderEnhancementIndex(meta.enhancements || []);

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
    <div class="file-byline">${escapeHtml(meta.program)} · ${escapeHtml(meta.language)} · ${meta.year}</div>
    <p class="file-description">${escapeHtml(meta.description)}</p>
    ${summaryHtml ? `<ul class="summary-list">${summaryHtml}</ul>` : ''}
    ${mobileHtml}
  </div>
  <div class="reader-content">${codeHtml}</div>
  ${sidebarHtml}
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
let currentProseSize = 16;

window.adjustFontSize = function(delta) {
  currentFontSize = Math.max(10, Math.min(20, currentFontSize + delta));
  currentProseSize = Math.max(13, Math.min(23, currentProseSize + delta));
  document.documentElement.style.setProperty('--code-size', currentFontSize + 'px');
  document.documentElement.style.setProperty('--prose-size', currentProseSize + 'px');
};

const app = document.getElementById('app');

function setLoading() {
  app.innerHTML = '<div class="loading"></div>';
}

function setError(msg) {
  app.innerHTML = `<div class="error-msg">${escapeHtml(msg)}</div>`;
}

// Save scroll position before the hash changes so we can restore it on return.
window.addEventListener('hashchange', function (e) {
  const oldHash = new URL(e.oldURL).hash.replace(/^#\/?/, '');
  try { sessionStorage.setItem('scroll:' + oldHash, window.scrollY); } catch (_) {}
});

async function route() {
  const hash = location.hash.replace(/^#\/?/, '');
  const parts = hash ? hash.split('/') : [];

  // Retrieve and clear any saved scroll position for this page before rendering.
  let savedY = null;
  try {
    const v = sessionStorage.getItem('scroll:' + hash);
    if (v !== null) { savedY = parseInt(v, 10); sessionStorage.removeItem('scroll:' + hash); }
  } catch (_) {}

  if (savedY === null) window.scrollTo(0, 0);
  setLoading();

  try {
    if (_scrollSpyCleanup) { _scrollSpyCleanup(); _scrollSpyCleanup = null; }

    if (parts.length === 0 || (parts.length === 1 && parts[0] === '')) {
      const catalog = await getCatalog();
      app.innerHTML = renderHeader({ githubUrl: 'https://github.com/PatAltimore/code-museum' }) + renderShelf(catalog);

    } else if (parts.length === 1) {
      const slug = parts[0];
      const catalog = await getCatalog();
      const program = getProgramFromCatalog(catalog, slug);
      if (!program) { setError('Program not found.'); return; }
      app.innerHTML = renderHeader({ programSlug: slug, programTitle: program.title, githubUrl: 'https://github.com/PatAltimore/code-museum' }) + renderProgramPage(program);

    } else if (parts.length >= 2) {
      const [programSlug, fileSlug, enhId] = parts;
      const catalog = await getCatalog();
      const program = getProgramFromCatalog(catalog, programSlug);
      const { meta, body } = await loadFile(programSlug, fileSlug);
      app.innerHTML = renderHeader({
        programSlug,
        programTitle: program ? program.title : programSlug,
        fileTitle: meta.title,
      }) + renderReader(meta, body, program);

      // Restore sidebar state from localStorage on wide screens
      try {
        const saved = localStorage.getItem('enhIndexOpen');
        // Default is open (null = never set); '0' means user closed it
        if (saved === '0') {
          const sidebar = document.getElementById('enh-index-sidebar');
          const showBtn = document.getElementById('enh-index-show');
          if (sidebar) sidebar.style.display = 'none';
          if (showBtn) showBtn.style.display = 'flex';
        }
      } catch(e) {}

      // Start scroll spy for the section index.
      setupScrollSpy(meta.enhancements || []);

      // If an enhancement ID was included in the URL, scroll to it.
      if (enhId) {
        savedY = null;   // don't restore a stale scroll position
        requestAnimationFrame(() => goToEnhancement(enhId));
      }
    }

    // Restore scroll position after content is painted.
    if (savedY !== null) window.scrollTo(0, savedY);

  } catch (err) {
    setError('Failed to load: ' + err.message);
  }
}

window.addEventListener('hashchange', route);
window.addEventListener('load', route);
