// App State
let bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
let analytics = JSON.parse(localStorage.getItem('analytics') || '{"clicks": {}, "daily": {}}');
let history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
let settings = JSON.parse(localStorage.getItem('settings') || '{}');
let widgets = JSON.parse(localStorage.getItem('widgets') || '["Weather","Notes"]');
let theme = localStorage.getItem('theme') || "dark";
let user = localStorage.getItem('user') || "";
let syncEnabled = localStorage.getItem('syncEnabled') === "true";
let dragBookmarkIdx = null;
let deferredPrompt = null; // For PWA install

// --- DOM References ---
const app = document.getElementById('app');
const main = document.getElementById('main-content');
const modalBackdrop = document.getElementById('modalBackdrop');
const toastContainer = document.getElementById('toastContainer');
const installPwaBtn = document.getElementById('installPwaBtn');

// --- Main App Loader ---
function renderApp() {
  setTheme(theme);
  renderTab('dashboard');
  setupNav();
  setupThemeToggle();
  setupPwaInstall();
  updateFooter();
}

// --- Tabs & Navigation ---
function setupNav() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTab(btn.dataset.tab);
    };
  });
}
function renderTab(tab) {
  switch (tab) {
    case 'dashboard': renderDashboard(); break;
    case 'analytics': renderAnalytics(); break;
    case 'labs': renderLabs(); break;
    case 'settings': renderSettings(); break;
    default: renderDashboard();
  }
}

// --- Theme & Settings ---
function setTheme(newTheme) {
  theme = newTheme;
  app.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  document.getElementById('themeToggle').textContent = theme === 'dark' ? '🌙' : '☀️';
}
function setupThemeToggle() {
  document.getElementById('themeToggle').onclick = () => setTheme(theme === 'dark' ? 'light' : 'dark');
}

// --- Dashboard ---
function renderDashboard() {
  main.innerHTML = `
    <section>
      <div style="text-align:center;margin-bottom:2.5rem;">
        <h2 style="font-size:2.5rem;font-weight:700;">Search Anything</h2>
        <p style="font-size:1.12rem;color:#bbb;">Fast, smart, and customizable. Bookmarks, search, and more.</p>
      </div>
      <div class="search-bar-wrap">
        <input type="text" id="searchBar" class="search-bar" placeholder="Enter URL or search the web..." autocomplete="off">
        <div id="searchSuggestions" class="search-suggestions hidden"></div>
      </div>
      <div class="quick-actions">
        <button onclick="showBookmarkModal()">➕ Add Bookmark</button>
        <button onclick="clearBookmarks()">🗑️ Clear Bookmarks</button>
        <button onclick="openRandomBookmark()">🎲 Random Site</button>
        <button onclick="showHistory()">🕑 Search History</button>
        <button onclick="showImportModal()">📥 Import</button>
        <button onclick="showExportModal()">📤 Export</button>
        <button onclick="showHotkeys()">⌨️ Hotkeys</button>
        <button onclick="startVoiceInput()">🎤 Voice</button>
      </div>
      <div class="bookmark-section">
        <div style="display:flex;align-items:center;gap:1.2rem;margin-bottom:0.7rem;">
          <h3 style="font-size:1.3rem;font-weight:700;">Bookmarks</h3>
          <span id="bookmarkCount" style="font-size:1.04rem;color:#bbb;">${bookmarks.length} bookmarks</span>
        </div>
        <div class="bookmark-grid" id="bookmarkGrid"></div>
        <div id="emptyBookmarks" style="text-align:center; color:#bbb; ${bookmarks.length ? 'display:none' : ''}">
          <div style="font-size:3rem; margin-bottom:0.5rem;">📑</div>
          <div>No bookmarks yet. Add some to get started!</div>
        </div>
      </div>
      <div class="widgets" id="dashboardWidgets"></div>
    </section>
  `;
  setupSearchBar();
  renderBookmarks();
  renderWidgets();
}

// --- Bookmarks ---
function renderBookmarks() {
  let grid = document.getElementById('bookmarkGrid');
  let empty = document.getElementById('emptyBookmarks');
  if (!grid) return;
  if (!bookmarks.length) { grid.innerHTML = ""; empty.style.display = ""; return; }
  empty.style.display = "none";
  grid.innerHTML = "";
  bookmarks.forEach((b, idx) => {
    let card = document.createElement('div');
    card.className = 'bookmark-card' + (b.pinned ? ' pinned draggable' : ' draggable');
    card.draggable = true;
    card.ondragstart = e => (dragBookmarkIdx = idx);
    card.ondragover = e => { e.preventDefault(); card.style.background = '#a78bfa22'; };
    card.ondragleave = e => { card.style.background = ''; };
    card.ondrop = e => { card.style.background = ''; reorderBookmarks(dragBookmarkIdx, idx); };

    card.innerHTML = `
      <img class="bookmark-favicon" src="https://www.google.com/s2/favicons?sz=64&domain=${new URL(b.url).hostname}" alt="Favicon">
      <div style="font-weight:700;">${b.name}</div>
      <div style="font-size:0.94rem;color:#a2a2b5;">${b.url}</div>
      <div style="font-size:0.89rem;color:#fbbf24;">${b.pinned ? '★ Pinned' : ''}</div>
      <div class="tags">${(b.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      <div style="font-size:0.85rem;color:#bbb;">${b.clicks||0} clicks</div>
      <div class="bookmark-actions">
        <button class="bookmark-action-btn" title="Open" onclick="openBookmark('${b.url}',${b.id})">🔗</button>
        <button class="bookmark-action-btn" title="Copy URL" onclick="copyBookmarkUrl('${b.url}')">📋</button>
        <button class="bookmark-action-btn" title="Edit" onclick="editBookmark(${b.id})">✏️</button>
        <button class="bookmark-action-btn" title="Delete" onclick="deleteBookmark(${b.id})">🗑️</button>
        <button class="bookmark-action-btn" title="Pin/Unpin" onclick="togglePinBookmark(${b.id})">${b.pinned ? '📌' : '📍'}</button>
      </div>
      <div style="margin:0.3rem 0 0.2rem 0;font-size:0.89rem; color:#a2a2b5;">${b.notes || ''}</div>
    `;
    grid.appendChild(card);
  });
  updateBookmarkCount();
}
function updateBookmarkCount() {
  document.getElementById('bookmarkCount').textContent = `${bookmarks.length} bookmark${bookmarks.length==1?'':'s'}`;
  document.getElementById('footerBookmarkCount').textContent = `${bookmarks.length} bookmark${bookmarks.length==1?'':'s'}`;
}
function showBookmarkModal(editId) {
  let bookmark = bookmarks.find(b => b.id == editId) || {name:"",url:"",tags:[],notes:""};
  showModal(`
    <h2>${editId ? 'Edit': 'Add'} Bookmark</h2>
    <label>Name<input id="bmName" value="${bookmark.name||''}" required></label>
    <label>URL<input id="bmUrl" value="${bookmark.url||''}" required></label>
    <label>Tags (comma-separated)<input id="bmTags" value="${(bookmark.tags||[]).join(', ')}"></label>
    <label>Notes<textarea id="bmNotes">${bookmark.notes||''}</textarea></label>
    <div class="modal-actions">
      <button onclick="saveBookmark(${editId||''})" style="flex:1;">Save</button>
      <button onclick="closeModal()" style="flex:1;">Cancel</button>
    </div>
  `);
}
window.showBookmarkModal = showBookmarkModal;
function saveBookmark(editId) {
  let name = document.getElementById('bmName').value.trim();
  let url = document.getElementById('bmUrl').value.trim();
  let tags = document.getElementById('bmTags').value.split(',').map(s=>s.trim()).filter(Boolean);
  let notes = document.getElementById('bmNotes').value.trim();
  if (!name || !url) return showToast('Please fill in both name and URL','warning');
  if (!/^https?:\/\//.test(url)) url = 'https://' + url;
  if (editId) {
    let bm = bookmarks.find(b=>b.id==editId);
    bm.name=name; bm.url=url; bm.tags=tags; bm.notes=notes;
    showToast('Bookmark updated','success');
  } else {
    bookmarks.push({id:Date.now(),name,url,tags,notes,created:new Date().toISOString(),clicks:0});
    showToast('Bookmark added','success');
  }
  saveData();
  closeModal();
  renderBookmarks();
}
window.saveBookmark = saveBookmark;
window.editBookmark = id => showBookmarkModal(id);
window.deleteBookmark = id => { 
  if(confirm("Delete this bookmark?")) {
    bookmarks = bookmarks.filter(b=>b.id!==id); saveData(); renderBookmarks(); showToast("Deleted","info");
  }
};
window.copyBookmarkUrl = url => {navigator.clipboard.writeText(url);showToast("URL copied!","success");};
window.togglePinBookmark = id => {
  let bm = bookmarks.find(b=>b.id===id); bm.pinned=!bm.pinned; saveData(); renderBookmarks();
};
window.openBookmark = (url, id) => {
  let bm = bookmarks.find(b=>b.id===id); if(bm){bm.clicks=(bm.clicks||0)+1;} 
  addToHistory(bm ? bm.name : url, url);
  saveData(); renderBookmarks();
  window.open(url, '_blank');
};
window.openRandomBookmark = () => {
  if(!bookmarks.length) return showToast("No bookmarks!","warning");
  let bm = bookmarks[Math.floor(Math.random()*bookmarks.length)];
  window.openBookmark(bm.url, bm.id);
}
window.clearBookmarks = () => {
  if(confirm("Clear all bookmarks?")){ bookmarks = []; saveData(); renderBookmarks(); showToast("All cleared","success"); }
};
function reorderBookmarks(fromIdx, toIdx) {
  if(fromIdx===toIdx) return;
  let bm = bookmarks.splice(fromIdx,1)[0];
  bookmarks.splice(toIdx,0,bm);
  saveData(); renderBookmarks();
}

// --- Search Bar, Suggestions, History ---
function setupSearchBar() {
  let bar = document.getElementById('searchBar');
  let suggBox = document.getElementById('searchSuggestions');
  let voiceActive = false;
  // Suggestions: bookmarks, history, google
  bar.oninput = e => {
    let val = bar.value.trim();
    if(!val) { suggBox.classList.add('hidden'); return; }
    let suggs = [];
    // Bookmarks
    suggs = suggs.concat(bookmarks.filter(b=>b.name.toLowerCase().includes(val.toLowerCase())||b.url.includes(val)).map(b=>({text:b.name,sub:b.url,action:()=>openBookmark(b.url,b.id)})));
    // History
    suggs = suggs.concat(history.filter(h=>h.term.toLowerCase().includes(val.toLowerCase())).map(h=>({text:h.term,sub:"History",action:()=>search(h.term)})));
    // Google suggestions (static, for demo)
    ['',' tutorial',' documentation',' github',' news'].forEach(s=>suggs.push({text:val+s,sub:"Web",action:()=>search(val+s)}));
    // Render
    suggBox.innerHTML = suggs.slice(0,7).map((s,i)=>
      `<div class="search-suggestion" data-idx="${i}"><span>${s.text}</span> <span style="margin-left:auto;font-size:0.9em;color:#a2a2b5;">${s.sub||''}</span></div>`
    ).join('');
    suggBox.classList.remove('hidden');
    suggBox.querySelectorAll('.search-suggestion').forEach((node,i)=>{
      node.onclick = ()=>{ suggBox.classList.add('hidden'); suggs[i].action(); };
    });
  };
  bar.onkeydown = e => {
    let items = suggBox.querySelectorAll('.search-suggestion');
    let idx = Array.from(items).findIndex(node=>node.classList.contains('active'));
    if(e.key=='ArrowDown') {
      if(idx<items.length-1){ if(idx>=0)items[idx].classList.remove('active'); items[++idx].classList.add('active'); }
      else if(items.length) {items[idx].classList.remove('active'); items[0].classList.add('active');}
      e.preventDefault();
    } else if(e.key=='ArrowUp') {
      if(idx>0){items[idx].classList.remove('active'); items[--idx].classList.add('active'); }
      else if(items.length) {items[idx].classList.remove('active'); items[items.length-1].classList.add('active');}
      e.preventDefault();
    } else if(e.key=='Enter') {
      if(idx>=0){ items[idx].click(); e.preventDefault(); }
      else search(bar.value.trim());
    }
  };
  bar.onfocus = ()=>{if(bar.value)bar.oninput();}
  bar.onblur = ()=>setTimeout(()=>suggBox.classList.add('hidden'),100);
  // Keyboard shortcuts
  document.onkeydown = e => {
    if((e.ctrlKey||e.metaKey) && e.key==='k'){e.preventDefault();bar.focus();}
    if((e.ctrlKey||e.metaKey) && e.key==='b'){e.preventDefault();showBookmarkModal();}
    if((e.ctrlKey||e.metaKey) && e.key==='1'){e.preventDefault();renderTab('dashboard');}
    if((e.ctrlKey||e.metaKey) && e.key==='2'){e.preventDefault();renderTab('analytics');}
    if((e.ctrlKey||e.metaKey) && e.key==='3'){e.preventDefault();renderTab('labs');}
    if(e.key === '?' && document.activeElement.tagName !== 'INPUT'){e.preventDefault();showHotkeys();}
  };
}
function search(query) {
  if(!query) return showToast("Type something to search","warning");
  let url = query.includes('.') && !query.includes(' ') && !query.startsWith('http') ? 'https://'+query : (
    query.startsWith('http') ? query : `https://www.google.com/search?q=${encodeURIComponent(query)}`
  );
  addToHistory(query, url);
  window.open(url, '_blank');
}
function addToHistory(term, url) {
  history.unshift({ term, url, date: new Date().toISOString() });
  history = history.slice(0,50);
  localStorage.setItem('searchHistory', JSON.stringify(history));
}
window.showHistory = function() {
  showModal(`<h2>Search History</h2>
    <ul style="max-height:250px;overflow:auto;">${
      history.map(h=>`<li style="margin-bottom:0.6rem;">
        <span style="font-weight:600;">${h.term}</span> 
        <button onclick="search('${h.term}')" style="margin-left:1rem;">🔎</button>
        <button onclick="window.open('${h.url}','_blank')" style="margin-left:0.3rem;">🔗</button>
        <span style="color:#aaa;font-size:0.9em;margin-left:0.7rem;">${new Date(h.date).toLocaleString()}</span>
      </li>`).join('')
    }</ul>
    <div class="modal-actions">
      <button onclick="clearHistory()">Clear</button>
      <button onclick="closeModal()">Close</button>
    </div>`);
}
window.clearHistory = function() {
  if(confirm("Clear all search history?")){history=[];localStorage.setItem('searchHistory','[]');closeModal();showToast("History cleared","success");}
}
// --- Voice Search ---
window.startVoiceInput = function() {
  if(!('webkitSpeechRecognition' in window)) return showToast("Voice input not supported.","error");
  let rec = new webkitSpeechRecognition();
  rec.lang = "en-US"; rec.interimResults = false; rec.maxAlternatives = 1;
  rec.onresult = e => {
    let text = e.results[0][0].transcript;
    document.getElementById('searchBar').value = text;
    search(text);
  };
  rec.onerror = () => showToast("Voice input error.","error");
  rec.start();
  showToast("Listening...","info");
};

// --- Widgets ---
function renderWidgets() {
  let container = document.getElementById('dashboardWidgets');
  if(!container) return;
  container.innerHTML = "";
  widgets.forEach((w,idx)=>{
    let widget = document.createElement('div');
    widget.className = "widget";
    widget.innerHTML = `<div class="widget-header">
      <span class="widget-title">${w}</span>
      <button class="widget-remove" onclick="removeWidget('${w}')">×</button>
    </div>
    <div class="widget-body">${widgetContent(w)}</div>`;
    widget.draggable = true;
    widget.ondragstart = e => (widget.dragIdx = idx);
    widget.ondragover = e => {e.preventDefault(); widget.style.background='#a78bfa22';};
    widget.ondragleave = e => {widget.style.background='';};
    widget.ondrop = e => {widget.style.background=''; reorderWidgets(idx, widget.dragIdx);}
    container.appendChild(widget);
  });
}
function widgetContent(name) {
  if(name === 'Weather') return `<div id="widgetWeather">Loading weather...</div>`;
  if(name === 'Notes') return `<textarea id="widgetNotes" style="width:100%;height:90px;" oninput="saveWidgetNote(this.value)">${settings.notes||''}</textarea>`;
  if(name === 'News') return `<div>Latest news coming soon...</div>`;
  if(name === 'Quote') return `<div id="widgetQuote">"Loading quote..."</div>`;
  return `<div>Custom widget: ${name}</div>`;
}
window.removeWidget = function(name) {
  widgets = widgets.filter(w=>w!==name); saveWidgets(); renderWidgets();
}
function reorderWidgets(fromIdx, toIdx) {
  let w = widgets.splice(fromIdx,1)[0]; widgets.splice(toIdx,0,w); saveWidgets(); renderWidgets();
}
function saveWidgets() { localStorage.setItem('widgets',JSON.stringify(widgets)); }
window.saveWidgetNote = function(val) { settings.notes = val; localStorage.setItem('settings',JSON.stringify(settings)); }
window.addWidget = function() {
  showModal(`<h2>Add Widget</h2>
    <select id="widgetAddSelect">
      <option>Weather</option><option>Notes</option><option>News</option><option>Quote</option>
    </select>
    <div class="modal-actions">
      <button onclick="doAddWidget()">Add</button>
      <button onclick="closeModal()">Cancel</button>
    </div>
  `);
}
window.doAddWidget = function() {
  let v = document.getElementById('widgetAddSelect').value;
  if(!widgets.includes(v)) widgets.push(v);
  saveWidgets(); renderWidgets(); closeModal();
}

// --- Analytics Tab ---
function renderAnalytics() {
  main.innerHTML = `
    <h2>Analytics</h2>
    <div style="display:flex;flex-wrap:wrap;gap:2rem;">
      <div style="flex:2;">
        <canvas id="usageChart" height="160"></canvas>
      </div>
      <div style="flex:1;">
        <h3>Top Bookmarks</h3>
        <ul>${
          bookmarks.slice().sort((a,b)=>b.clicks-a.clicks).slice(0,5).map(b=>
            `<li style="margin:0.6rem 0;font-weight:600;">${b.name} <span style="font-size:0.95em;color:#aaa;">(${b.clicks||0} clicks)</span></li>`
          ).join('')
        }</ul>
      </div>
    </div>
  `;
  // Chart.js
  let ctx = document.getElementById('usageChart').getContext('2d');
  let days = Object.keys(analytics.daily).slice(-7);
  let clicks = days.map(d=>analytics.daily[d]);
  new Chart(ctx, {
    type:'line', data:{
      labels:days, datasets:[{
        label:'Searches/Clicks', data:clicks, fill:true, borderColor:'#a78bfa',backgroundColor:'rgba(167,139,250,0.15)',pointBackgroundColor:'#a78bfa',tension:0.45
      }]
    },
    options:{ plugins:{legend:{display:false}}, scales:{x:{grid:{display:false}},y:{grid:{color:'#eee'},beginAtZero:true}} }
  });
}

// --- Labs Tab (Import/Export/Extension) ---
function renderLabs() {
  main.innerHTML = `
    <h2>Labs</h2>
    <div class="quick-actions">
      <button onclick="showExportModal()">Export Bookmarks</button>
      <button onclick="showImportModal()">Import Bookmarks</button>
      <button onclick="showExtensionInfo()">Browser Extension</button>
      <button onclick="showFeaturePopup()">Voice, Sync, & More</button>
    </div>
  `;
}
window.showExportModal = function() {
  showModal(`<h2>Export Bookmarks</h2>
    <div class="modal-actions">
      <button onclick="exportBookmarks('json')">Export as JSON</button>
      <button onclick="exportBookmarks('html')">Export as HTML</button>
      <button onclick="closeModal()">Close</button>
    </div>
  `);
};
window.showImportModal = function() {
  showModal(`<h2>Import Bookmarks</h2>
    <input type="file" id="importFile" accept=".json,.html">
    <div class="modal-actions">
      <button onclick="importBookmarks()">Import</button>
      <button onclick="closeModal()">Cancel</button>
    </div>
  `);
};
window.exportBookmarks = function(format) {
  if(!bookmarks.length) return showToast("No bookmarks!","warning");
  let content, filename, mimeType;
  if(format==='json') {
    content = JSON.stringify({bookmarks,exportDate:new Date().toISOString()},null,2);
    filename = "bookmarks-"+Date.now()+".json"; mimeType = "application/json";
  } else {
    content = `<!DOCTYPE NETSCAPE-Bookmark-file-1>\n<TITLE>Bookmarks</TITLE>\n<H1>Bookmarks</H1>\n<DL><p>\n${
      bookmarks.map(b=>`<DT><A HREF="${b.url}">${b.name}</A>`).join('\n')
    }\n</DL><p>`;
    filename = "bookmarks-"+Date.now()+".html"; mimeType="text/html";
  }
  let blob = new Blob([content],{type:mimeType});
  let url = URL.createObjectURL(blob);
  let a = document.createElement('a'); a.href = url; a.download=filename; a.click(); URL.revokeObjectURL(url);
  showToast(`Exported as ${format.toUpperCase()}`,'success');
  closeModal();
};
window.importBookmarks = function() {
  let file = document.getElementById('importFile').files[0];
  if(!file) return showToast("Choose a file!","warning");
  let reader = new FileReader();
  reader.onload = function(e) {
    let imported = [];
    try {
      if(file.name.endsWith('.json')) {
        imported = JSON.parse(e.target.result).bookmarks||[];
      } else {
        let dummy = document.createElement('div'); dummy.innerHTML = e.target.result;
        imported = Array.from(dummy.querySelectorAll('a')).map(a=>({name:a.textContent,url:a.href,id:Date.now()+Math.random()}));
      }
      bookmarks = bookmarks.concat(imported);
      saveData(); renderBookmarks();
      showToast("Imported!","success");
      closeModal();
    } catch { showToast("Import failed","error"); }
  };
  reader.readAsText(file);
};
window.showExtensionInfo = function() {
  showModal(`<h2>Browser Extension</h2>
    <p>Install the browser extension for quick bookmarking and search popup.<br><b>Coming soon!</b></p>
    <div class="modal-actions"><button onclick="closeModal()">OK</button></div>`);
};
window.showFeaturePopup = function() {
  showModal(`<h2>More Features Coming!</h2>
    <p>
      <b>Voice input</b> (Web Speech API), <b>settings/cloud sync</b> (Supabase), and <b>search history</b> are planned!<br>
      <b>Multi-tab search</b>, <b>custom widgets/themes</b>, and <b>browser extension</b> are coming soon.
    </p>
    <div class="modal-actions"><button onclick="closeModal()">OK</button></div>`);
};

// --- Settings Tab ---
function renderSettings() {
  main.innerHTML = `
    <h2>Settings</h2>
    <div style="max-width:420px;">
      <label>Default Search Engine:
        <select id="defaultEngine">
          <option value="google">Google</option>
          <option value="bing">Bing</option>
          <option value="duckduckgo">DuckDuckGo</option>
        </select>
      </label>
      <label>
        <input type="checkbox" id="enableSync" ${syncEnabled ? 'checked' : ''}/> Enable Cloud Sync (Supabase)
      </label>
      <label>
        <input type="checkbox" id="analyticsOptout" ${settings.analyticsOptout ? 'checked' : ''}/> Opt-out of Analytics
      </label>
      <label>
        <input type="checkbox" id="showPinnedFirst" ${settings.showPinnedFirst ? 'checked' : ''}/> Show Pinned Bookmarks First
      </label>
      <div class="modal-actions">
        <button onclick="saveSettings()">Save</button>
      </div>
      <h3>User</h3>
      <input id="userName" value="${user||''}" placeholder="Your name or email"/>
      <button onclick="saveUser()">Save User</button>
      <h3>Widgets</h3>
      <button onclick="addWidget()">Add Widget</button>
    </div>
  `;
  document.getElementById('defaultEngine').value = settings.defaultEngine||'google';
}
window.saveSettings = function() {
  settings.defaultEngine = document.getElementById('defaultEngine').value;
  settings.analyticsOptout = document.getElementById('analyticsOptout').checked;
  settings.showPinnedFirst = document.getElementById('showPinnedFirst').checked;
  syncEnabled = document.getElementById('enableSync').checked;
  localStorage.setItem('settings',JSON.stringify(settings));
  localStorage.setItem('syncEnabled',syncEnabled?"true":"false");
  showToast("Settings saved!","success");
};
window.saveUser = function() {
  user = document.getElementById('userName').value;
  localStorage.setItem('user',user);
  updateFooter();
  showToast("User saved!","success");
};
function updateFooter() {
  document.getElementById('footerBookmarkCount').textContent = `${bookmarks.length} bookmark${bookmarks.length==1?'':'s'}`;
  document.getElementById('footerUser').textContent = user||"";
  document.getElementById('footerVersion').textContent = "v2.0";
}

// --- Hotkeys Modal ---
window.showHotkeys = function() {
  showModal(`<h2>Keyboard Shortcuts</h2>
    <ul style="font-size:1.12em;">
      <li><b>Ctrl/Cmd + K</b>: Focus search</li>
      <li><b>Ctrl/Cmd + B</b>: Add Bookmark</li>
      <li><b>Ctrl/Cmd + 1/2/3</b>: Switch Tabs</li>
      <li><b>?</b>: Show Hotkeys</li>
      <li><b>Enter</b>: Search or select suggestion</li>
      <li><b>Arrow Up/Down</b>: Navigate suggestions</li>
    </ul>
    <div class="modal-actions"><button onclick="closeModal()">OK</button></div>
  `);
}
// --- Modal Logic ---
function showModal(html) {
  modalBackdrop.innerHTML = `<div class="modal">${html}</div>`;
  modalBackdrop.style.display = "flex";
}
function closeModal() { modalBackdrop.style.display = "none"; }
window.closeModal = closeModal;

// --- Toasts ---
function showToast(msg, type='success') {
  let t = document.createElement('div'); t.className = 'toast '+type; t.innerText = msg;
  toastContainer.appendChild(t);
  setTimeout(()=>t.style.opacity=0,2200);
  setTimeout(()=>toastContainer.removeChild(t),2800);
}

// --- Data Storage ---
function saveData() {
  localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
  localStorage.setItem('analytics',JSON.stringify(analytics));
}

// --- PWA Install ---
function setupPwaInstall() {
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault(); deferredPrompt = e;
    installPwaBtn.style.display = "block";
    installPwaBtn.onclick = () => {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(choice => {
        if(choice.outcome === 'accepted') showToast("App installed!","success");
        installPwaBtn.style.display = "none";
      });
    };
  });
}

// --- Boot ---
window.onload = renderApp;
