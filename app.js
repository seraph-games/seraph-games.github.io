/* Seraph Games v1.3 - app logic. Requires games-data.js (defines `gamesData`). */
(() => {
'use strict';

/*  Config  */
const PAGE_SIZE = 40;          // games rendered per batch (divisible by 4 and 5 columns)
const RECENT_MAX = 20;         // history length
const SEARCH_DEBOUNCE = 200;
const KEYS = {
  fav: 'og-favorites-v2',
  recent: 'og-recent-v1',
  view: 'og-view-v1'
};
const CATEGORY_META = {
  action:     { icon: '🎯', label: 'Action' },
  puzzle:     { icon: '🧩', label: 'Puzzle' },
  restaurant: { icon: '🍕', label: 'Restaurant' },
  racing:     { icon: '🏎️', label: 'Racing' },
  horror:     { icon: '👻', label: 'Horror' },
  music:      { icon: '🎵', label: 'Music' },
  rpg:        { icon: '🧙', label: 'RPG' },
  platformer: { icon: '🕹️', label: 'Platformer' },
  fighting:   { icon: '🥊', label: 'Fighting' },
  strategy:   { icon: '♟️', label: 'Strategy' },
  sports:     { icon: '⚽', label: 'Sports' }
};
const FALLBACK_THUMB = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="225"><rect width="100%" height="100%" fill="#161d35"/>' +
  '<text x="50%" y="50%" font-size="48" text-anchor="middle" dominant-baseline="middle">🎮</text></svg>'
);
const SITE_URL = /^https?:$/.test(location.protocol)
  ? location.origin + location.pathname.replace(/[^/]*$/, '')
  : 'https://seraph-games.github.io/';
const SITE_TEXT = 'Play hundreds of free online games on Seraph Games!';
const REDUCED_MOTION = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

/*  Helpers  */
const $ = (id) => document.getElementById(id);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const enc = encodeURIComponent;
const games = (typeof gamesData !== 'undefined' && Array.isArray(gamesData)) ? gamesData : [];
const gameById = new Map(games.map(g => [g.id, g]));

function esc(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
function norm(s) { return String(s).toLowerCase().replace(/[^a-z0-9]/g, ''); }
function thumbOf(g) { return g.image || FALLBACK_THUMB; }
function catLabel(c) { return CATEGORY_META[c] ? CATEGORY_META[c].label : c; }
function plural(n, one, many) { return n + ' ' + (n === 1 ? one : many); }

function readJSON(key, fallback) {
  try { const v = JSON.parse(localStorage.getItem(key)); return v == null ? fallback : v; }
  catch { return fallback; }
}
function writeJSON(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage unavailable */ }
}

const EMBED_HOST = 'olivia-games.github.io';        // only these games run inside the on-page player
const BASE_TITLE = document.title;
const ROUTE_TITLES = { recent: 'Recently Played', favorites: 'Favorite Games' };

/*  State  */
const state = {
  category: 'all',
  search: '',
  sort: 'default',
  view: readJSON(KEYS.view, 'grid') === 'list' ? 'list' : 'grid',
  filtered: [],
  visible: PAGE_SIZE,
  favorites: new Set(readJSON(KEYS.fav, []).filter(id => gameById.has(id))),
  recent: readJSON(KEYS.recent, []).filter(id => gameById.has(id)).slice(0, RECENT_MAX),
  route: 'home',
  featured: null,
  modalGame: null,
  player: null,
  rnd: { cat: 'all', current: null, seen: new Set(), history: [], spinning: false }
};

/*  Elements  */
const el = {
  header: $('header'),
  search: $('search-input'),
  suggestions: $('search-suggestions'),
  sort: $('sort-select'),
  filters: $('filters'),
  grid: $('games-container'),
  searchClear: $('search-clear'),
  views: { home: $('view-home'), recent: $('view-recent'), favorites: $('view-favorites') },
  recentGrid: $('recent-container'),
  recentCount: $('recent-count'),
  favGrid: $('favorites-container'),
  favCount: $('favorites-count'),
  resultsCount: $('results-count'),
  loadMore: $('load-more-btn'),
  gamesSection: $('games'),
  mobileMenuBtn: $('mobile-menu-btn'),
  mobileNav: $('mobile-nav'),
  toast: $('toast')
};

/*  Toast  */
let toastTimer;
function toast(msg) {
  el.toast.textContent = msg;
  el.toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.toast.classList.remove('show'), 2000);
}

/*  Cards  */
function cardHTML(g, i) {
  const fav = state.favorites.has(g.id);
  const id = esc(g.id), name = esc(g.name);
  return `
<article class="game-card" data-id="${id}" style="animation-delay:${Math.min(i, 15) * 0.03}s">
  <div class="game-thumb">
    <img src="${esc(thumbOf(g))}" alt="${name} thumbnail" loading="lazy" decoding="async" width="400" height="225">
    <span class="game-category">${esc(catLabel(g.category))}</span>
    <button class="favorite-btn${fav ? ' active' : ''}" type="button" data-id="${id}" aria-pressed="${fav}" aria-label="${fav ? 'Remove ' + name + ' from favorites' : 'Add ' + name + ' to favorites'}">${fav ? '⭐' : '☆'}</button>
  </div>
  <div class="game-body">
    <div class="game-content">
      <h3 class="game-title" title="${name}">${name}</h3>
      <p class="game-description">${esc(g.description)}</p>
    </div>
    <div class="game-footer">
      <a href="${esc(g.url)}" target="_blank" rel="noopener" class="play-btn" data-play="${id}"><svg class="icon"><use href="#i-play"/></svg><span>Play</span></a>
      <button class="info-btn" type="button" data-id="${id}" aria-label="${name} info"><svg class="icon"><use href="#i-info"/></svg></button>
    </div>
  </div>
</article>`;
}

function emptyHTML(icon, title, text, cta) {
  return `<div class="empty-state"><div class="empty-icon">${icon}</div><h3>${esc(title)}</h3><p>${esc(text)}</p>${cta ? '<a class="btn btn-primary" href="#games">🎮 Browse games</a>' : ''}</div>`;
}

/*  Filtering / sorting / rendering  */
function matchScore(g, q, nq) {
  const name = g.name.toLowerCase();
  const nn = norm(g.name);
  if (name.startsWith(q) || (nq && nn.startsWith(nq))) return 0;
  if (name.includes(q) || (nq && nn.includes(nq))) return 1;
  if (g.category.toLowerCase().includes(q) || catLabel(g.category).toLowerCase().includes(q)) return 2;
  return -1;   // descriptions are generic filler, so they are intentionally not searched
}

function computeFiltered() {
  let list = state.category === 'all' ? games.slice() : games.filter(g => g.category === state.category);
  if (state.search) {
    const q = state.search, nq = norm(q);
    const scored = [];
    for (const g of list) {
      const s = matchScore(g, q, nq);
      if (s >= 0) scored.push([s, g]);
    }
    if (state.sort === 'default') scored.sort((a, b) => a[0] - b[0]); // stable: keeps catalog order within a rank
    list = scored.map(x => x[1]);
  }
  if (state.sort === 'az') list.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));
  if (state.sort === 'za') list.sort((a, b) => b.name.localeCompare(a.name, undefined, { numeric: true, sensitivity: 'base' }));
  state.filtered = list;
}

function renderGames(append = false) {
  if (!append) {
    computeFiltered();
    state.visible = PAGE_SIZE;
  }
  el.grid.classList.remove('is-loading');
  const total = state.filtered.length;
  const shown = Math.min(state.visible, total);

  if (total === 0) {
    el.grid.innerHTML = emptyHTML('🎮', 'No games found', 'Try adjusting your search or filter');
    el.resultsCount.textContent = 'No games found';
    el.loadMore.hidden = true;
    return;
  }
  if (append) {
    const start = el.grid.querySelectorAll('.game-card').length;
    el.grid.insertAdjacentHTML('beforeend', state.filtered.slice(start, shown).map((g, i) => cardHTML(g, i)).join(''));
  } else {
    el.grid.innerHTML = state.filtered.slice(0, shown).map(cardHTML).join('');
  }
  el.resultsCount.textContent = `Showing ${shown} of ${total} games` + (total !== games.length ? ` (${games.length} total)` : '');
  el.loadMore.hidden = shown >= total;
  if (!el.loadMore.hidden) el.loadMore.textContent = `Load more games (${total - shown} left)`;
}

function loadMore() {
  if (state.visible >= state.filtered.length) return;
  state.visible += PAGE_SIZE;
  renderGames(true);
}

function renderRecent() {
  if (!el.recentGrid) return;
  const list = state.recent.map(id => gameById.get(id)).filter(Boolean);
  el.recentGrid.innerHTML = list.length
    ? list.map(cardHTML).join('')
    : emptyHTML('🕘', 'Nothing played yet', 'Games you open will show up here', true);
  el.recentCount.textContent = list.length ? plural(list.length, 'game', 'games') + ' played recently' : 'Your history is empty';
  const clr = $('clear-history-btn');
  if (clr) clr.hidden = !list.length;
}

function renderFavorites() {
  if (!el.favGrid) return;
  const list = [...state.favorites].reverse().map(id => gameById.get(id)).filter(Boolean);   // newest first
  el.favGrid.innerHTML = list.length
    ? list.map(cardHTML).join('')
    : emptyHTML('⭐', 'No favorites yet', 'Tap the star on any game to save it here', true);
  el.favCount.textContent = list.length ? plural(list.length, 'favorite game', 'favorite games') : 'Your starred games appear here';
}

function updateBadges() {
  $$('[data-badge="recent"]').forEach(b => { b.textContent = state.recent.length || ''; });
  $$('[data-badge="favorites"]').forEach(b => { b.textContent = state.favorites.size || ''; });
}

function updateRecentVisibility() {
  if (state.route === 'recent') renderRecent();
  updateBadges();
}

/*  Favorites  */
function toggleFavorite(id) {
  if (!gameById.has(id)) return;
  const on = !state.favorites.has(id);
  on ? state.favorites.add(id) : state.favorites.delete(id);
  writeJSON(KEYS.fav, [...state.favorites]);

  // Update every visible star in place (no full re-render → no flicker / scroll jump)
  const name = gameById.get(id).name;
  $$(`.favorite-btn[data-id="${CSS.escape(id)}"]`).forEach(btn => {
    btn.classList.toggle('active', on);
    btn.textContent = on ? '⭐' : '☆';
    btn.setAttribute('aria-pressed', String(on));
    btn.setAttribute('aria-label', (on ? 'Remove ' : 'Add ') + name + (on ? ' from favorites' : ' to favorites'));
  });
  if (state.route === 'favorites') renderFavorites();
  updateBadges();
  syncModalFav();
  syncRandomFav();
  toast(on ? `⭐ ${name} added to favorites` : `${name} removed from favorites`);
}

/*  Recently played  */
function recordPlay(id) {
  if (!gameById.has(id)) return;
  state.recent = [id, ...state.recent.filter(x => x !== id)].slice(0, RECENT_MAX);
  writeJSON(KEYS.recent, state.recent);
  updateRecentVisibility();
}
function clearHistory() {
  state.recent = [];
  writeJSON(KEYS.recent, []);
  updateRecentVisibility();
  toast('🗑️ History cleared');
}

/*  Game player  */
let loadTimer = null;
function isEmbeddable(url) {
  try { const u = new URL(url, location.href); return u.protocol === 'https:' && u.hostname === EMBED_HOST; }
  catch { return false; }
}
function launchGame(g) {
  recordPlay(g.id);
  if (isEmbeddable(g.url)) openPlayer(g);
  else window.open(g.url, '_blank', 'noopener');      // other hosts: always a new tab
}
function mountFrame() {
  const g = state.player;
  if (!g) return;
  const stage = $('player-stage');
  const old = stage.querySelector('iframe');
  if (old) { old.src = 'about:blank'; old.remove(); }
  clearTimeout(loadTimer);
  $('player-loading').hidden = false;
  const f = document.createElement('iframe');
  f.title = g.name;
  f.allow = 'fullscreen; autoplay; gamepad; clipboard-write; accelerometer; gyroscope';
  f.setAttribute('allowfullscreen', '');
  f.referrerPolicy = 'strict-origin-when-cross-origin';
  const done = () => { $('player-loading').hidden = true; clearTimeout(loadTimer); };
  f.addEventListener('load', () => { done(); try { f.focus(); } catch {} });
  loadTimer = setTimeout(done, 15000);               // never leave the spinner stuck
  f.src = g.url;
  stage.appendChild(f);
}
function openPlayer(g) {
  $$('.modal-overlay.active').forEach(o => { if (o.id !== 'play-modal') closeOverlayByEl(o); });
  state.player = g;
  $('player-title').textContent = g.name;
  openOverlay($('play-modal'));
  mountFrame();
  syncFs();
}
function closePlayer() {
  const stage = $('player-stage');
  if (document.fullscreenElement || document.webkitFullscreenElement) {
    try { (document.exitFullscreen || document.webkitExitFullscreen).call(document); } catch {}
  }
  stage.classList.remove('pseudo-fs');
  clearTimeout(loadTimer);
  const f = stage.querySelector('iframe');
  if (f) { f.src = 'about:blank'; f.remove(); }       // stops sound and the game loop
  state.player = null;
  syncFs();
  closeOverlay($('play-modal'));
}
function isFullscreen() {
  return !!(document.fullscreenElement || document.webkitFullscreenElement) || $('player-stage').classList.contains('pseudo-fs');
}
let fsWas = false, fsExitAt = 0;
function syncFs() {
  const on = isFullscreen();
  if (fsWas && !on) fsExitAt = Date.now();          // remembers when fullscreen just ended (see Escape handler)
  fsWas = on;
  $('player-fs-label').textContent = on ? 'Exit' : 'Fullscreen';
  $('player-fs').title = on ? 'Exit fullscreen' : 'Fullscreen';
  const use = $('player-fs-icon').querySelector('use');
  if (use) use.setAttribute('href', on ? '#i-shrink' : '#i-expand');
}
function toggleFullscreen() {
  const stage = $('player-stage');
  if (document.fullscreenElement || document.webkitFullscreenElement) {
    try { (document.exitFullscreen || document.webkitExitFullscreen).call(document); } catch {}
    return;
  }
  if (stage.classList.contains('pseudo-fs')) { stage.classList.remove('pseudo-fs'); syncFs(); return; }
  const pseudo = () => { stage.classList.add('pseudo-fs'); syncFs(); };   // iOS Safari & co: CSS fullscreen fallback
  const req = stage.requestFullscreen || stage.webkitRequestFullscreen;
  if (!req) { pseudo(); return; }
  try {
    const p = req.call(stage);
    if (p && p.catch) p.catch(pseudo);
  } catch { pseudo(); }
}

/*  Navigation  */
function scrollToEl(node) { node && node.scrollIntoView({ behavior: REDUCED_MOTION ? 'auto' : 'smooth', block: 'start' }); }

function setActiveNav(hash) {
  $$('.nav-link').forEach(l => l.classList.toggle('active', l.getAttribute('href') === hash));
}

/* Recent / Favorites are views of this same page (#recent, #favorites): no catalog, just the list. */
function routeFromHash() {
  return location.hash === '#recent' ? 'recent' : location.hash === '#favorites' ? 'favorites' : 'home';
}
function showRoute(route, { scroll = true } = {}) {
  state.route = route;
  Object.entries(el.views).forEach(([name, node]) => { if (node) node.hidden = name !== route; });
  document.body.dataset.route = route;
  document.title = ROUTE_TITLES[route] ? `${ROUTE_TITLES[route]} - Seraph Games` : BASE_TITLE;
  if (route === 'recent') renderRecent();
  else if (route === 'favorites') renderFavorites();
  setActiveNav(route === 'home' ? '#home' : '#' + route);
  closeMobileMenu();
  if (!scroll) return;
  let id = '';
  if (route === 'home') { try { id = decodeURIComponent(location.hash.slice(1)); } catch {} }
  const target = id ? document.getElementById(id) : null;
  if (target) requestAnimationFrame(() => scrollToEl(target));
  else window.scrollTo(0, 0);
}

function setCategory(cat) {
  state.category = cat;
  $$('.filter-chip[data-category]', el.filters).forEach(c => c.classList.toggle('active', c.dataset.category === cat));
  renderGames();
}

function buildFilters() {
  if (!el.filters) return;
  const counts = {};
  games.forEach(g => { counts[g.category] = (counts[g.category] || 0) + 1; });
  const cats = Object.keys(CATEGORY_META).filter(c => counts[c]);
  Object.keys(counts).forEach(c => { if (!cats.includes(c)) cats.push(c); });
  el.filters.innerHTML =
    `<button class="filter-chip active" type="button" data-category="all">All Games <small>${games.length}</small></button>` +
    cats.map(c => `<button class="filter-chip" type="button" data-category="${esc(c)}">${CATEGORY_META[c] ? CATEGORY_META[c].icon + ' ' : ''}${esc(catLabel(c))} <small>${counts[c]}</small></button>`).join('');
  $('total-categories').textContent = cats.length;
}

/*  Search  */
function updateSearchURL(query) {
  try {
    const url = new URL(location.href);
    query ? url.searchParams.set('search', query) : url.searchParams.delete('search');
    history.replaceState({}, '', url);
  } catch { /* file:// or sandboxed */ }
}

function highlight(name, q) {
  const i = name.toLowerCase().indexOf(q);
  if (i < 0) return esc(name);
  return esc(name.slice(0, i)) + '<span style="color:var(--primary-light);font-weight:700">' + esc(name.slice(i, i + q.length)) + '</span>' + esc(name.slice(i + q.length));
}

function showSuggestions() {
  const q = state.search, nq = norm(q);
  if (!q) return hideSuggestions();
  const list = games
    .map(g => [matchScore(g, q, nq), g])
    .filter(x => x[0] >= 0 && x[0] <= 2)
    .sort((a, b) => a[0] - b[0])
    .slice(0, 6)
    .map(x => x[1]);
  el.suggestions.innerHTML = list.length
    ? list.map(g => `<button type="button" class="suggestion-item" role="option" data-suggest="${esc(g.id)}">
        <img class="suggestion-thumb" src="${esc(thumbOf(g))}" alt="" loading="lazy" width="56" height="40">
        <div><div class="suggestion-name">${highlight(g.name, q)}</div><div class="suggestion-category">${esc(catLabel(g.category))}</div></div></button>`).join('')
    : '<div class="suggestion-item"><div class="suggestion-name">No matching games</div></div>';
  el.suggestions.classList.add('active');
}
function hideSuggestions() { el.suggestions.classList.remove('active'); }
function syncSearchClear() { if (el.searchClear && el.search) el.searchClear.hidden = !el.search.value; }

function applySearch(value) {
  state.search = value.toLowerCase().trim();
  updateSearchURL(value.trim());
  renderGames();
  state.search ? showSuggestions() : hideSuggestions();
}

/*  Modal helpers  */
let lockCount = 0;
function openOverlay(overlay) {
  if (overlay.classList.contains('active')) return;
  overlay._lf = document.activeElement;
  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');
  if (lockCount++ === 0) document.body.style.overflow = 'hidden';
  const focusTarget = overlay.querySelector('.modal-close, [data-autofocus]');
  focusTarget && focusTarget.focus({ preventScroll: true });
}
function closeOverlay(overlay) {
  if (!overlay.classList.contains('active')) return;
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
  if (--lockCount <= 0) { lockCount = 0; document.body.style.overflow = ''; }
  const lf = overlay._lf; overlay._lf = null;
  if (lf && lf.focus && document.contains(lf)) { try { lf.focus({ preventScroll: true }); } catch {} }
}
function activeOverlay() { return document.querySelector('.modal-overlay.active'); }

/*  Share  */
const NETS = [
  { id: 'x',        label: 'Share on X',        icon: 'i-xlogo',    fill: true, href: (u, t) => `https://x.com/intent/post?text=${enc(t)}&url=${enc(u)}` },
  { id: 'facebook', label: 'Share on Facebook', icon: 'i-facebook', href: (u)    => `https://www.facebook.com/sharer/sharer.php?u=${enc(u)}` },
  { id: 'whatsapp', label: 'Share on WhatsApp', icon: 'i-whatsapp', href: (u, t) => `https://wa.me/?text=${enc(t + ' ' + u)}` },
  { id: 'telegram', label: 'Share on Telegram', icon: 'i-telegram', href: (u, t) => `https://t.me/share/url?url=${enc(u)}&text=${enc(t)}` },
  { id: 'reddit',   label: 'Share on Reddit',   icon: 'i-reddit',   href: (u, t) => `https://www.reddit.com/submit?url=${enc(u)}&title=${enc(t)}` },
  { id: 'email',    label: 'Share by email',    icon: 'i-mail',     href: (u, t) => `mailto:?subject=${enc(t)}&body=${enc(t + '\n' + u)}` }
];
function renderShareRow(container, withCopy) {
  const icon = (id, fill) => `<svg class="icon${fill ? ' fill' : ''}" aria-hidden="true"><use href="#${id}"/></svg>`;
  container.innerHTML =
    (withCopy ? `<button type="button" class="share-btn copy" data-net="copy" aria-label="Copy link">${icon('i-copy')}<span>Copy link</span></button>` : '') +
    NETS.map(n => `<button type="button" class="share-btn" data-net="${n.id}" title="${n.label}" aria-label="${n.label}">${icon(n.icon, n.fill)}</button>`).join('') +
    (navigator.share ? `<button type="button" class="share-btn" data-net="native" title="More options" aria-label="More share options">${icon('i-share')}</button>` : '');
}
function gameShareUrl(g) { return `${SITE_URL}?game=${enc(g.id)}`; }
function shareContext(container) {
  if (container.dataset.share === 'game' && state.modalGame) {
    const g = state.modalGame;
    return { url: gameShareUrl(g), text: `Play ${g.name} free on Seraph Games!` };
  }
  return { url: SITE_URL, text: SITE_TEXT };
}

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(text); return true; }
  } catch { /* fall through */ }
  try {
    const ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly', ''); ta.style.cssText = 'position:fixed;top:-1000px;opacity:0';
    document.body.appendChild(ta); ta.select(); ta.setSelectionRange(0, text.length);
    const ok = document.execCommand('copy');
    ta.remove();
    return ok;
  } catch { return false; }
}

function flashCopied(btn) {
  const span = btn.querySelector('span');
  const old = span ? span.textContent : null;
  btn.classList.add('copied');
  if (span) span.textContent = 'Copied!';
  setTimeout(() => { btn.classList.remove('copied'); if (span) span.textContent = old; }, 1600);
}

async function doCopy(url, btn) {
  const ok = await copyText(url);
  if (ok) { toast('🔗 Link copied!'); if (btn) flashCopied(btn); }
  else toast('Copy failed - select the link and copy manually');
}

async function handleShareClick(btn) {
  const container = btn.closest('[data-share]');
  const net = btn.dataset.net;
  if (!container || !net) return;
  const { url, text } = shareContext(container);
  if (net === 'copy') return doCopy(url, btn);
  if (net === 'native') {
    try { await navigator.share({ title: 'Seraph Games', text, url }); } catch { /* cancelled */ }
    return;
  }
  const n = NETS.find(x => x.id === net);
  if (!n) return;
  const href = n.href(url, text);
  if (net === 'email') location.href = href;
  else window.open(href, '_blank', 'noopener,noreferrer,width=640,height=560');
}

/*  Game modal  */
function openGameModal(g) {
  state.modalGame = g;
  const img = $('modal-img');
  img.src = thumbOf(g);
  img.alt = `${g.name} thumbnail`;
  $('modal-category').textContent = catLabel(g.category);
  $('modal-title').textContent = g.name;
  $('modal-description').textContent = g.description;
  const play = $('modal-play');
  play.href = g.url;
  play.dataset.play = g.id;
  syncModalFav();
  openOverlay($('game-modal'));
}
function closeGameModal() {
  closeOverlay($('game-modal'));
  state.modalGame = null;
  try {
    const url = new URL(location.href);
    if (url.searchParams.has('game')) { url.searchParams.delete('game'); history.replaceState({}, '', url); }
  } catch {}
}
function syncModalFav() {
  const g = state.modalGame;
  if (!g) return;
  const on = state.favorites.has(g.id);
  $('modal-fav').classList.toggle('active', on);
  $('modal-fav-icon').textContent = on ? '⭐' : '☆';
  $('modal-fav-label').textContent = on ? 'In Favorites' : 'Add to Favorites';
}

/*  Random game modal  */
function rndPool() {
  return state.rnd.cat === 'all' ? games : games.filter(g => g.category === state.rnd.cat);
}
function rndNext() {
  const r = state.rnd, pool = rndPool();
  if (!pool.length) return null;
  let cand = pool.filter(g => !r.seen.has(g.id) && (!r.current || g.id !== r.current.id));
  if (!cand.length) { r.seen.clear(); cand = pool.filter(g => !r.current || g.id !== r.current.id); }
  if (!cand.length) cand = pool;
  const pick = cand[Math.floor(Math.random() * cand.length)];
  r.seen.add(pick.id);
  return pick;
}
function rndShow(g, preview = false) {
  $('rnd-img').src = thumbOf(g);
  $('rnd-img').alt = `${g.name} thumbnail`;
  $('rnd-category').textContent = catLabel(g.category);
  $('rnd-name').textContent = g.name;
  $('rnd-description').textContent = preview ? '…' : g.description;
  if (!preview) {
    const play = $('rnd-play');
    play.href = g.url;
    play.dataset.play = g.id;
  }
}
function rndRenderChips() {
  const counts = {};
  games.forEach(g => { counts[g.category] = (counts[g.category] || 0) + 1; });
  const cats = Object.keys(CATEGORY_META).filter(c => counts[c]);
  $('rnd-chips').innerHTML =
    `<button class="filter-chip${state.rnd.cat === 'all' ? ' active' : ''}" type="button" data-rcat="all">🎲 All</button>` +
    cats.map(c => `<button class="filter-chip${state.rnd.cat === c ? ' active' : ''}" type="button" data-rcat="${c}">${CATEGORY_META[c].icon} ${esc(CATEGORY_META[c].label)}</button>`).join('');
}
function rndRenderHistory() {
  const h = state.rnd.history;
  $('rnd-history').hidden = h.length === 0;
  $('rnd-hist-list').innerHTML = h.map(g =>
    `<button type="button" class="rnd-hist-item" data-hist="${esc(g.id)}" title="${esc(g.name)}"><img src="${esc(thumbOf(g))}" alt="" loading="lazy"><span>${esc(g.name)}</span></button>`).join('');
}
function rndUpdatePool() {
  const pool = rndPool();
  $('rnd-pool').textContent = `${plural(pool.length, 'game', 'games')} in pool · ${Math.min(state.rnd.seen.size, pool.length)} seen`;
}
function syncRandomFav() {
  const g = state.rnd.current;
  if (!g) return;
  const on = state.favorites.has(g.id);
  $('rnd-fav-icon').textContent = on ? '⭐' : '☆';
  $('rnd-fav-label').textContent = on ? 'In Favorites' : 'Add to Favorites';
}
function rndSetCurrent(g, pushOld) {
  const r = state.rnd;
  if (pushOld && r.current && r.current.id !== g.id) {
    r.history = [r.current, ...r.history.filter(x => x.id !== r.current.id && x.id !== g.id)].slice(0, 8);
  }
  r.current = g;
  rndShow(g);
  rndRenderHistory();
  rndUpdatePool();
  syncRandomFav();
}
function rndSpin() {
  const r = state.rnd;
  if (r.spinning) return;
  const final = rndNext();
  if (!final) { toast('No games in this category'); return; }
  const card = $('rnd-card');
  const finish = () => {
    card.classList.remove('spinning');
    r.spinning = false;
    $('rnd-spin').disabled = false;
    $('rnd-play').removeAttribute('aria-disabled');
    rndSetCurrent(final, true);
  };
  if (REDUCED_MOTION) { r.spinning = true; finish(); return; }
  r.spinning = true;
  $('rnd-spin').disabled = true;
  $('rnd-play').setAttribute('aria-disabled', 'true');
  card.classList.add('spinning');
  const pool = rndPool();
  let ticks = 0, delay = 55;
  const total = 14;
  (function tick() {
    if (!$('random-modal').classList.contains('active')) { r.spinning = false; $('rnd-spin').disabled = false; $('rnd-play').removeAttribute('aria-disabled'); card.classList.remove('spinning'); return; }
    if (ticks++ >= total) { finish(); return; }
    rndShow(pool[Math.floor(Math.random() * pool.length)], true);
    delay += 14;
    setTimeout(tick, delay);
  })();
}
function openRandom() {
  const r = state.rnd;
  r.seen.clear();
  r.history = [];
  r.current = null;
  rndRenderChips();
  rndRenderHistory();
  openOverlay($('random-modal'));
  rndSpin();
}
function setRandomCategory(cat) {
  if (state.rnd.spinning || state.rnd.cat === cat) return;
  state.rnd.cat = cat;
  state.rnd.seen.clear();
  rndRenderChips();
  rndSpin();
}

/*  Featured game (hero)  */
function updateFeatured() {
  if (!$('featured-thumb') || !games.length || document.hidden) return;
  let g;
  do { g = games[Math.floor(Math.random() * games.length)]; } while (games.length > 1 && state.featured && g.id === state.featured.id);
  state.featured = g;
  $('random-game-name').textContent = g.name;
  const img = $('featured-thumb');
  img.src = thumbOf(g);
  img.alt = `${g.name} thumbnail`;
}

/*  Install (PWA)  */
let deferredInstall = null;
const isStandalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
function syncInstallBtn() { const b = $('install-btn'); if (b) b.hidden = isStandalone(); }
async function installApp() {
  if (deferredInstall) {
    const p = deferredInstall; deferredInstall = null;
    p.prompt();
    try { const { outcome } = await p.userChoice; if (outcome === 'accepted') toast('📲 Installing Seraph Games…'); } catch {}
    return;
  }
  $('install-ios').hidden = !isIOS;
  $('install-other').hidden = isIOS;
  openOverlay($('install-modal'));
}
window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); deferredInstall = e; });
window.addEventListener('appinstalled', () => { deferredInstall = null; syncInstallBtn(); closeOverlay($('install-modal')); toast('✅ Seraph Games installed'); });

/*  Panic mode  */
let titleBackup = document.title;
function setPanic(on) {
  const body = document.body;
  const active = body.classList.contains('panic-mode');
  if (on === active) return;
  if (on) {
    $$('.modal-overlay.active').forEach(closeOverlayByEl);
    titleBackup = document.title;
    document.title = 'Google Classroom';
    body.classList.add('panic-mode');
    $('panic-screen').setAttribute('aria-hidden', 'false');
    window.scrollTo(0, 0);
  } else {
    body.classList.remove('panic-mode');
    $('panic-screen').setAttribute('aria-hidden', 'true');
    document.title = titleBackup;
  }
}
function closeOverlayByEl(o) {
  if (o.id === 'game-modal') closeGameModal();
  else if (o.id === 'play-modal') closePlayer();
  else closeOverlay(o);
}
function togglePanic() { setPanic(!document.body.classList.contains('panic-mode')); }

/*  Mobile menu  */
function openMobileMenu() {
  el.mobileNav.classList.add('active');
  el.mobileNav.setAttribute('aria-hidden', 'false');
  el.mobileMenuBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
  $('mobile-close-btn').focus();
}
function closeMobileMenu() {
  if (!el.mobileNav.classList.contains('active')) return;
  el.mobileNav.classList.remove('active');
  el.mobileNav.setAttribute('aria-hidden', 'true');
  el.mobileMenuBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = lockCount > 0 ? 'hidden' : '';
}

/*  Events  */
function isTyping(t) { return t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable); }

function setupEvents() {
  /* search */
  let timer;
  el.search?.addEventListener('input', (e) => {
    clearTimeout(timer);
    syncSearchClear();
    const v = e.target.value;
    timer = setTimeout(() => applySearch(v), SEARCH_DEBOUNCE);
  });
  el.searchClear?.addEventListener('click', () => {
    clearTimeout(timer);
    el.search.value = '';
    syncSearchClear();
    applySearch('');
    el.search.focus();
  });
  el.search?.addEventListener('focus', () => { if (el.search.value.trim()) { state.search = el.search.value.toLowerCase().trim(); showSuggestions(); } });
  el.search?.addEventListener('blur', () => setTimeout(hideSuggestions, 120));
  el.search?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); clearTimeout(timer); applySearch(el.search.value); hideSuggestions(); el.search.blur(); }
    else if (e.key === 'ArrowDown') { const first = el.suggestions.querySelector('[data-suggest]'); if (first) { e.preventDefault(); first.focus(); } }
  });
  el.search?.addEventListener('search', () => { if (!el.search.value) { clearTimeout(timer); applySearch(''); } });
  el.suggestions?.addEventListener('mousedown', (e) => e.preventDefault());
  el.suggestions?.addEventListener('keydown', (e) => {
    const items = $$('[data-suggest]', el.suggestions), i = items.indexOf(document.activeElement);
    if (e.key === 'ArrowDown') { e.preventDefault(); (items[i + 1] || items[0]).focus(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); i <= 0 ? el.search.focus() : items[i - 1].focus(); }
  });

  el.sort?.addEventListener('change', () => { state.sort = el.sort.value; renderGames(); });
  el.filters?.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip[data-category]');
    if (chip) setCategory(chip.dataset.category);
  });

  /* hero + panic */
  $('explore-btn')?.addEventListener('click', () => scrollToEl(el.gamesSection));
  $('random-btn')?.addEventListener('click', openRandom);
  $('install-btn')?.addEventListener('click', installApp);
  $('install-close')?.addEventListener('click', () => closeOverlay($('install-modal')));
  $('install-modal')?.addEventListener('click', (e) => { if (e.target.id === 'install-modal') closeOverlay($('install-modal')); });
  $('play-random-btn')?.addEventListener('click', () => { if (state.featured) launchGame(state.featured); });
  $('panic-btn').addEventListener('click', () => setPanic(true));
  $('exit-panic-btn').addEventListener('click', () => setPanic(false));

  /* panels */
  $('clear-history-btn')?.addEventListener('click', clearHistory);
  el.loadMore?.addEventListener('click', loadMore);

  /* view toggle */
  $$('.view-btn').forEach(b => b.addEventListener('click', () => {
    state.view = b.dataset.view;
    writeJSON(KEYS.view, state.view);
    applyView();
  }));

  /* game modal */
  $('modal-close').addEventListener('click', closeGameModal);
  $('game-modal').addEventListener('click', (e) => { if (e.target.id === 'game-modal') closeGameModal(); });
  $('modal-fav').addEventListener('click', () => { if (state.modalGame) toggleFavorite(state.modalGame.id); });

  /* random modal */
  $('rnd-close').addEventListener('click', () => closeOverlay($('random-modal')));
  $('random-modal').addEventListener('click', (e) => { if (e.target.id === 'random-modal') closeOverlay($('random-modal')); });
  $('rnd-spin').addEventListener('click', rndSpin);
  $('rnd-fav').addEventListener('click', () => { if (state.rnd.current) toggleFavorite(state.rnd.current.id); });
  $('rnd-info').addEventListener('click', () => {
    const g = state.rnd.current;
    if (!g) return;
    closeOverlay($('random-modal'));
    openGameModal(g);
  });
  $('rnd-play').addEventListener('click', (e) => { if (state.rnd.spinning) e.preventDefault(); });
  $('rnd-chips').addEventListener('click', (e) => {
    const c = e.target.closest('[data-rcat]');
    if (c) setRandomCategory(c.dataset.rcat);
  });
  $('rnd-hist-list').addEventListener('click', (e) => {
    const b = e.target.closest('[data-hist]');
    if (!b || state.rnd.spinning) return;
    const g = gameById.get(b.dataset.hist);
    if (g) rndSetCurrent(g, true);
  });

  /* player */
  $('player-reload').addEventListener('click', mountFrame);
  $('player-fs').addEventListener('click', toggleFullscreen);
  $('player-exit').addEventListener('click', toggleFullscreen);
  $('player-close').addEventListener('click', closePlayer);
  document.addEventListener('fullscreenchange', syncFs);
  document.addEventListener('webkitfullscreenchange', syncFs);

  /* routing */
  window.addEventListener('hashchange', () => showRoute(routeFromHash()));

  /* footer */
  $('footer-copy-btn').addEventListener('click', (e) => doCopy(SITE_URL, e.currentTarget));
  $('footer-share-url').addEventListener('focus', (e) => e.target.select());
  $$('.footer-links a[data-category]').forEach(a => a.addEventListener('click', (e) => {
    e.preventDefault();
    setCategory(a.dataset.category);
    if (state.route !== 'home') location.hash = '#games';       // hashchange switches back to the catalog
    else scrollToEl(el.gamesSection);
  }));

  /* mobile menu */
  el.mobileMenuBtn.setAttribute('aria-controls', 'mobile-nav');
  el.mobileMenuBtn.setAttribute('aria-expanded', 'false');
  el.mobileMenuBtn.addEventListener('click', openMobileMenu);
  $('mobile-close-btn').addEventListener('click', closeMobileMenu);
  el.mobileNav.addEventListener('click', (e) => { if (e.target === el.mobileNav) closeMobileMenu(); });

  /* global click delegation */
  document.addEventListener('click', (e) => {
    const t = e.target;

    const share = t.closest('.share-btn[data-net]');
    if (share) { handleShareClick(share); return; }

    const nav = t.closest('a[href^="#"]');
    if (nav) {
      const href = nav.getAttribute('href');
      if (href === '#random') { e.preventDefault(); closeMobileMenu(); openRandom(); return; }
      if (nav.closest('.mobile-nav')) closeMobileMenu();          // the hash change does the rest
    }

    const fav = t.closest('.favorite-btn[data-id]');
    if (fav) { toggleFavorite(fav.dataset.id); return; }

    const info = t.closest('.info-btn[data-id]');
    if (info) { const g = gameById.get(info.dataset.id); g && openGameModal(g); return; }

    const play = t.closest('[data-play]');
    if (play) {
      if (play.getAttribute('aria-disabled') === 'true') { e.preventDefault(); return; }   // random modal still spinning
      const g = gameById.get(play.dataset.play);
      if (!g) return;
      const modified = e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.button === 1;
      if (!modified && isEmbeddable(g.url)) { e.preventDefault(); launchGame(g); }   // our games → player modal
      else recordPlay(g.id);                                                           // other links → the anchor opens a new tab
      return;
    }

    const sug = t.closest('[data-suggest]');
    if (sug) {
      const g = gameById.get(sug.dataset.suggest);
      hideSuggestions();
      if (g) launchGame(g);
      return;
    }

    const card = t.closest('.game-card[data-id]');
    if (card && !t.closest('a, button')) {
      const g = gameById.get(card.dataset.id);
      g && openGameModal(g);
    }
  });

  /* keyboard */
  document.addEventListener('keydown', (e) => {
    const panic = document.body.classList.contains('panic-mode');

    if (e.key === 'Escape') {
      if (panic) { e.preventDefault(); setPanic(false); return; }
      if (state.player) {
        // Esc while the game is fullscreen only leaves fullscreen; it must not also close the player
        if (isFullscreen()) { e.preventDefault(); toggleFullscreen(); return; }
        if (Date.now() - fsExitAt < 500) { e.preventDefault(); return; }
      }
      const ov = activeOverlay();
      if (ov) { e.preventDefault(); closeOverlayByEl(ov); return; }
      if (el.mobileNav.classList.contains('active')) { e.preventDefault(); closeMobileMenu(); return; }
      if (el.search && (e.target === el.search || el.suggestions.classList.contains('active'))) { hideSuggestions(); el.search.blur(); return; }
      if (isTyping(e.target)) return;
      e.preventDefault();
      setPanic(true);
      return;
    }
    if (e.key === '`' && !isTyping(e.target)) { e.preventDefault(); togglePanic(); return; }
    if (panic) return;

    if (el.search && (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); el.search.focus(); el.search.select(); return; }
    if (el.search && e.key === '/' && !isTyping(e.target) && !activeOverlay()) { e.preventDefault(); el.search.focus(); return; }

    // simple focus trap inside open modal
    if (e.key === 'Tab') {
      const ov = activeOverlay();
      if (!ov) return;
      const f = $$('button:not([disabled]), a[href]:not([aria-disabled="true"]), input', ov).filter(n => n.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* image fallback (capture: error events don't bubble) */
  document.addEventListener('error', (e) => {
    const img = e.target;
    if (img && img.tagName === 'IMG' && img.src !== FALLBACK_THUMB && !img.dataset.fb) {
      img.dataset.fb = '1';
      img.src = FALLBACK_THUMB;
    }
  }, true);

  /* header shadow */
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      let current = '#home';
      for (const id of ['home', 'categories', 'games']) {
        const s = $(id);
        if (s && !s.hidden && s.getBoundingClientRect().top <= 140) current = '#' + id;
      }
      el.header.classList.toggle('scrolled', y > 50);
      if (state.route === 'home') setActiveNav(current);
      ticking = false;
    });
  }, { passive: true });

  /* rotate featured game only while the tab is visible */
  if ($('featured-thumb')) setInterval(updateFeatured, 15000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden && !state.featured) updateFeatured(); });
}

function applyView() {
  const list = state.view === 'list';
  if (el.grid) el.grid.classList.toggle('list-view', list);
  $$('.view-btn').forEach(b => b.classList.toggle('active', b.dataset.view === state.view));
}

/*  Init  */
function init() {
  $('currentYear').textContent = new Date().getFullYear();
  $('footer-share-url').value = SITE_URL;
  renderShareRow(document.querySelector('[data-share="game"]'), true);
  renderShareRow(document.querySelector('[data-share="site"]'), false);
  setupEvents();
  updateBadges();
  syncInstallBtn();

  if (!games.length) { el.resultsCount.textContent = 'Game list failed to load'; return; }
  const params = new URLSearchParams(location.search);

  $('total-games').textContent = games.length;
  $('hero-count').textContent = games.length;
  buildFilters();
  applyView();
  const q = params.get('search');
  if (q) { el.search.value = q; state.search = q.toLowerCase().trim(); syncSearchClear(); }
  const cat = params.get('category');
  if (cat && CATEGORY_META[cat] && games.some(g => g.category === cat)) setCategory(cat);
  else renderGames();
  updateFeatured();
  showRoute(routeFromHash(), { scroll: location.hash.length > 1 });

  // keep lists in sync when another tab changes them
  window.addEventListener('storage', (e) => {
    if (e.key === KEYS.fav) {
      state.favorites = new Set(readJSON(KEYS.fav, []).filter(id => gameById.has(id)));
      if (state.route === 'favorites') renderFavorites();
    } else if (e.key === KEYS.recent) {
      state.recent = readJSON(KEYS.recent, []).filter(id => gameById.has(id)).slice(0, RECENT_MAX);
      if (state.route === 'recent') renderRecent();
    } else return;
    updateBadges();
  });

  // ?game= deep link (used by share links)
  const gid = params.get('game');
  if (gid && gameById.has(gid)) openGameModal(gameById.get(gid));
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();

/* Service worker (single registration) */
if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
  window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); });
}
})();
