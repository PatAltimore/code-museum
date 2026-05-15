'use strict';

const CACHE_PREFIX = 'hc-img-';

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
      <img src="${escapeAttr(enh.image_url)}" alt="${escapeAttr(enh.title)}" loading="lazy">
      ${enh.image_caption ? `<p class="enhancement-caption">${escapeHtml(enh.image_caption)}</p>` : ''}
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
  document.title = 'Historical Code';

  const cards = programs.map(p => `
    <a class="program-card" href="#/${p.slug}">
      <div class="program-card-top">
        <div class="program-title">${escapeHtml(p.title)}</div>
        <span class="lang-badge">${escapeHtml(p.language)}</span>
      </div>
      <div class="program-subtitle">${escapeHtml(p.subtitle)}</div>
      <p class="program-desc">${escapeHtml(p.description)}</p>
      <div class="program-meta">
        <span>${escapeHtml(p.author)}</span>
        <span>·</span>
        <span>${p.year}</span>
        <span>·</span>
        <span>${(p.files || []).length} files</span>
        ${p.github_url ? `<a class="github-link" href="${escapeAttr(p.github_url)}" target="_blank" rel="noopener" onclick="event.stopPropagation()">GitHub ↗</a>` : ''}
      </div>
    </a>`).join('');

  return `
<div class="page">
  <div class="shelf-header">
    <h1>Historical Code</h1>
    <p>Annotated source code from historically significant open-source programs. Read the code that changed computing.</p>
  </div>
  <div class="program-grid">${cards}</div>
</div>`;
}

function renderProgramPage(program) {
  document.title = `${program.title} — Historical Code`;

  const files = (program.files || []).map(f => `
    <a class="file-item" href="#/${program.slug}/${f.slug}">
      <span class="file-order">${f.order}.</span>
      <div class="file-info">
        <div class="file-name">${escapeHtml(f.title)}</div>
        <div class="file-desc">${escapeHtml(f.description)}</div>
      </div>
      <span class="file-arrow">›</span>
    </a>`).join('');

  return `
<div class="program-page">
  <div class="program-page-header">
    <h1>${escapeHtml(program.title)}</h1>
    <div class="byline">${escapeHtml(program.author)} · ${program.year} · ${escapeHtml(program.language)}</div>
    <p class="description">${escapeHtml(program.description)}</p>
    ${program.github_url ? `<a class="github-badge" href="${escapeAttr(program.github_url)}" target="_blank" rel="noopener">⎋ View on GitHub</a>` : ''}
  </div>
  <div class="file-list">${files}</div>
</div>`;
}

function renderHeader(opts = {}) {
  const { programSlug, programTitle, fileTitle, githubUrl } = opts;

  let left = `<a class="header-logo" href="#/">Historical Code</a>`;

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
  document.title = `${meta.title} — ${meta.program} — Historical Code`;

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
    const sel = window.getSelection().toString().trim();
    if (sel && sel.length < 40) {
      e.preventDefault();
      showLookupPopup(sel, e.clientX, e.clientY);
    }
  });

  container.addEventListener('touchstart', e => {
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
