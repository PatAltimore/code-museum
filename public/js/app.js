'use strict';

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
  const lines = body.replace(/\r/g, '').split('\n');
  if (lines[lines.length - 1] === '') lines.pop();
  // The formatter always writes exactly one blank separator line after the
  // closing '---', producing '\n\n' before the code. Strip exactly those 2
  // leading empty elements so that lines[0] is source line 1. Using splice
  // (not a while-loop) preserves any genuine blank lines at the top of the
  // source file, keeping line_start/line_end indices exact.
  lines.splice(0, 2);

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
    <p>Annotated source code from historically significant open-source programs.</p>
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
        s = s.replace(/_(.+?)_/g, '<em>$1</em>');
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

  return `
<div class="program-page">
  <div class="program-page-header">
    <h1>${escapeHtml(program.title)}</h1>
    <div class="byline">${escapeHtml(program.author)} · ${program.year} · ${escapeHtml(program.language)}</div>
    ${introImageHtml}
    ${introHtml}
  </div>
  ${treeHtml ? `<p class="source-tree-hint">Highlighted files have annotations — click one to read the story behind the code.</p>` : ''}
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
    <div class="file-byline">${escapeHtml(meta.program)} · ${escapeHtml(meta.language)} · ${meta.year}</div>
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

async function route() {
  const hash = location.hash.replace(/^#\/?/, '');
  const parts = hash ? hash.split('/') : [];

  window.scrollTo(0, 0);
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

    } else if (parts.length >= 2) {
      const [programSlug, fileSlug] = parts;
      const catalog = await getCatalog();
      const program = getProgramFromCatalog(catalog, programSlug);
      const { meta, body } = await loadFile(programSlug, fileSlug);
      app.innerHTML = renderHeader({
        programSlug,
        programTitle: program ? program.title : programSlug,
        fileTitle: meta.title,
      }) + renderReader(meta, body, program);
      setupInstructionLookup(app, meta.language, meta.file_path);
    }
  } catch (err) {
    setError('Failed to load: ' + err.message);
  }
}

window.addEventListener('hashchange', route);
window.addEventListener('load', route);
