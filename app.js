      // Game Data
        const gamesData = [
            { name: "Pixel Adventure", url: "https://seraph-games.github.io/seraph/", category: "action", description: "An exciting action-packed adventure through pixelated worlds with challenging enemies and bosses." },
            { name: "Brain Teaser Pro", url: "#", category: "puzzle", description: "Challenge your mind with intricate puzzles that test your logic and problem-solving skills." },
            { name: "Chef's Kitchen Deluxe", url: "#", category: "restaurant", description: "Manage your own restaurant empire, serve customers, and become a culinary master." },
            { name: "Space Explorer Chronicles", url: "#", category: "adventure", description: "Explore the vast cosmos, discover new planets, and uncover ancient mysteries in space." },
            { name: "Strategy Master", url: "#", category: "strategy", description: "Plan your moves carefully, build your empire, and outsmart your opponents in this strategy game." },
            { name: "Action Hero Arena", url: "#", category: "action", description: "Save the world from evil forces in this fast-paced action game with epic battles." },
            { name: "Puzzle Paradise", url: "#", category: "puzzle", description: "Relax and solve beautiful puzzles in a peaceful paradise setting." },
            { name: "Restaurant Tycoon", url: "#", category: "restaurant", description: "Build and manage multiple restaurants to become the ultimate food industry tycoon." },
        ];

        // State Management
        const state = {
            games: [...gamesData],
            currentCategory: 'all',
            currentView: 'grid',
            searchQuery: '',
            favorites: new Set(JSON.parse(localStorage.getItem('og-favorites-v2') || '[]')),
            currentRandomGame: null
        };

        // DOM Elements
        const elements = {
            header: document.getElementById('header'),
            searchInput: document.getElementById('search-input'),
            searchSuggestions: document.getElementById('search-suggestions'),
            filtersContainer: document.getElementById('filters'),
            gamesContainer: document.getElementById('games-container'),
            favoritesContainer: document.getElementById('favorites-container'),
            resultsCount: document.getElementById('results-count'),
            favoritesCount: document.getElementById('favorites-count'),
            panicBtn: document.getElementById('panic-btn'),
            exitPanicBtn: document.getElementById('exit-panic-btn'),
            exploreBtn: document.getElementById('explore-btn'),
            randomBtn: document.getElementById('random-btn'),
            playRandomBtn: document.getElementById('play-random-btn'),
            randomGameName: document.getElementById('random-game-name'),
            mobileMenuBtn: document.getElementById('mobile-menu-btn'),
            mobileNav: document.getElementById('mobile-nav'),
            mobileCloseBtn: document.getElementById('mobile-close-btn'),
            gamesSection: document.getElementById('games'),
            favoritesSection: document.getElementById('favorites'),
            totalGamesCounter: document.getElementById('total-games')
        };

        // Initialize App
 function init() {
    setupEventListeners();
    updateRandomGame();
    filterAndRender(); // ⬅️ рендеримо ігри після старту
}


        // Setup Event Listeners
        function setupEventListeners() {
            // Accessibility defaults for mobile menu
            if (elements.mobileMenuBtn) {
                elements.mobileMenuBtn.setAttribute('aria-controls', 'mobile-nav');
                elements.mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
            if (elements.mobileNav) {
                elements.mobileNav.setAttribute('aria-hidden', 'true');
            }
        
            // Search
            let searchTimeout;
            elements.searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    handleSearch(e);
                }, 300);
            });
        
            elements.searchInput.addEventListener('focus', () => {
                if (elements.searchInput.value.trim()) {
                    showSuggestions();
                }
            });
        
            elements.searchInput.addEventListener('blur', () => {
                setTimeout(() => {
                    elements.searchSuggestions.classList.remove('active');
                }, 200);
            });
        
            // Filters
            elements.filtersContainer.addEventListener('click', handleFilter);
        
            // Panic mode - keep backtick for panic, handle Escape so it closes mobile menu first
            elements.panicBtn.addEventListener('click', () => togglePanicMode(false));
            elements.exitPanicBtn.addEventListener('click', () => togglePanicMode(true));
            
            document.addEventListener('keydown', (e) => {
                if (e.key === '`') {
                    e.preventDefault();
                    togglePanicMode();
                } else if (e.key === 'Escape') {
                    // If mobile nav is open, close it; otherwise toggle panic mode
                    if (elements.mobileNav && elements.mobileNav.classList.contains('active')) {
                        e.preventDefault();
                        closeMobileMenu();
                    } else {
                        e.preventDefault();
                        togglePanicMode();
                    }
                }
            });
        
            // CTA buttons
            elements.exploreBtn.addEventListener('click', () => {
                elements.gamesSection.scrollIntoView({ behavior: 'smooth' });
            });
        
            elements.randomBtn.addEventListener('click', playRandomGame);
            elements.playRandomBtn.addEventListener('click', () => {
                if (state.currentRandomGame) {
                    window.open(state.currentRandomGame.url, '_blank');
                }
            });
        
            // View toggle
            document.querySelectorAll('.view-btn').forEach(btn => {
                btn.addEventListener('click', handleViewToggle);
            });
        
            // Mobile menu: toggle, manage ARIA, focus and scroll locking

            function closeMobileMenu() {
                elements.mobileNav.classList.remove('active');
                elements.mobileMenuBtn.setAttribute('aria-expanded', 'false');
                elements.mobileNav.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
                // move focus back to menu button for accessibility
                elements.mobileMenuBtn.focus();
            }
            
            elements.mobileMenuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const expanded = elements.mobileMenuBtn.getAttribute('aria-expanded') === 'true';
                if (expanded) {
                    closeMobileMenu();
                    return;
                }
                elements.mobileNav.classList.add('active');
                elements.mobileMenuBtn.setAttribute('aria-expanded', 'true');
                elements.mobileNav.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
                // move focus to close button for accessibility
                if (elements.mobileCloseBtn) elements.mobileCloseBtn.focus();
            });
        
            elements.mobileCloseBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeMobileMenu();
            });
        
            // Close mobile menu when clicking outside (overlay)
            elements.mobileNav.addEventListener('click', (e) => {
                if (e.target === elements.mobileNav) {
                    closeMobileMenu();
                }
            });
        
            // Mobile nav links: close menu after user activates link
            elements.mobileNav.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    // close menu but allow navigation handler to run
                    closeMobileMenu();
                });
            });
        
            // Navigation links (desktop & mobile)
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', handleNavigation);
            });
        
            // Footer category links
            document.querySelectorAll('.footer-links a[data-category]').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const category = e.target.closest('a').dataset.category;
                    
                    // Scroll to top
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    
                    // Update filter
                    document.querySelectorAll('.filter-chip').forEach(chip => {
                        chip.classList.remove('active');
                        if (chip.dataset.category === category) {
                            chip.classList.add('active');
                        }
                    });

                    // Navigate to games section
                    setTimeout(() => {
                        elements.gamesSection.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                });
            });

            // Header scroll effect
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    elements.header.classList.add('scrolled');
                } else {
                    elements.header.classList.remove('scrolled');
                }
            });
        
            // Keyboard shortcuts
            document.addEventListener('keydown', (e) => {
                if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                    e.preventDefault();
                    elements.searchInput.focus();
                }
            });
        }
        
        // Header scroll effect
                    window.addEventListener('scroll', () => {
                        if (window.scrollY > 50) {
                            elements.header.classList.add('scrolled');
                        } else {
                            elements.header.classList.remove('scrolled');
                        }
                    });

        // Handle Search
        function handleSearch(e) {
            state.searchQuery = e.target.value.toLowerCase().trim();
            filterAndRender();
            
            if (state.searchQuery) {
                showSuggestions();
            } else {
                elements.searchSuggestions.classList.remove('active');
            }
        }

        // Show Search Suggestions
        function showSuggestions() {
            const query = state.searchQuery;
            if (!query) return;

            const suggestions = gamesData
                .filter(game => 
                    game.name.toLowerCase().includes(query) ||
                    game.category.toLowerCase().includes(query)
                )
                .slice(0, 5);

            if (suggestions.length === 0) {
                elements.searchSuggestions.classList.remove('active');
                return;
            }

            elements.searchSuggestions.innerHTML = suggestions.map(game => `
                <div class="suggestion-item" onclick="selectGame('${game.name}')">
                    <div class="suggestion-name">${highlightMatch(game.name, query)}</div>
                    <div class="suggestion-category">${game.category}</div>
                </div>
            `).join('');

            elements.searchSuggestions.classList.add('active');
        }

        // Highlight Match
        function highlightMatch(text, query) {
            const regex = new RegExp(`(${query})`, 'gi');
            return text.replace(regex, '<span style="color: var(--primary-light); font-weight: 700;">$1</span>');
        }

        // Select Game from Suggestions
        function selectGame(gameName) {
            const game = gamesData.find(g => g.name === gameName);
            if (game) {
                window.open(game.url, '_blank');
            }
        }

        // Handle Filter
        function handleFilter(e) {
            const chip = e.target.closest('.filter-chip');
            if (!chip) return;

            document.querySelectorAll('.filter-chip').forEach(c => 
                c.classList.remove('active'));
            chip.classList.add('active');

            state.currentCategory = chip.dataset.category;
            filterAndRender();
        }

        // Filter and Render
        function filterAndRender() {
            let filtered = [...gamesData];

            // Apply category filter
            if (state.currentCategory !== 'all') {
                filtered = filtered.filter(game => game.category === state.currentCategory);
            }

            // Apply search filter
            if (state.searchQuery) {
                filtered = filtered.filter(game =>
                    game.name.toLowerCase().includes(state.searchQuery) ||
                    game.category.toLowerCase().includes(state.searchQuery) ||
                    game.description.toLowerCase().includes(state.searchQuery)
                );
            }

            state.games = filtered;
            renderGames();
        }

        // Render Games
        function renderGames() {
            if (state.games.length === 0) {
                elements.gamesContainer.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-icon">🎮</div>
                        <h3>No games found</h3>
                        <p>Try adjusting your search or filter</p>
                    </div>
                `;
                elements.resultsCount.textContent = 'No games found';
                return;
            }

            elements.gamesContainer.innerHTML = state.games.map((game, index) => 
                createGameCard(game, index)
            ).join('');

            elements.resultsCount.textContent = `Showing ${state.games.length} of ${gamesData.length} games`;
            renderFavorites();
        }

        // Create Game Card
        function createGameCard(game, index) {
            const isFavorite = state.favorites.has(game.name);
            return `
                <article class="game-card" style="animation-delay: ${index * 0.05}s;">
                    <div class="game-header">
                        <span class="game-category">${game.category}</span>
                        <button class="favorite-btn ${isFavorite ? 'active' : ''}" 
                                onclick="toggleFavorite('${game.name.replace(/'/g, "\\'")}')">
                            ${isFavorite ? '⭐' : '☆'}
                        </button>
                    </div>
                    <div class="game-content">
                        <h3 class="game-title">${game.name}</h3>
                        <p class="game-description">${game.description}</p>
                    </div>
                    <div class="game-footer">
                        <a href="${game.url}" target="_blank" class="play-btn">
                            <span>⚡</span>
                            <span>Play Now</span>
                        </a>
                        <button class="info-btn" onclick="showInfo('${game.name.replace(/'/g, "\\'")}')">
                            ℹ️
                        </button>
                    </div>
                </article>
            `;
        }

        // Render Favorites
        function renderFavorites() {
            const favoriteGames = gamesData.filter(game => state.favorites.has(game.name));
            
            if (favoriteGames.length === 0) {
                elements.favoritesContainer.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-icon">⭐</div>
                        <h3>No favorites yet</h3>
                        <p>Click the star icon on any game to add it to your favorites</p>
                    </div>
                `;
                elements.favoritesCount.textContent = 'Your starred games appear here';
            } else {
                elements.favoritesContainer.innerHTML = favoriteGames.map((game, index) => 
                    createGameCard(game, index)
                ).join('');
                elements.favoritesCount.textContent = `${favoriteGames.length} favorite game${favoriteGames.length !== 1 ? 's' : ''}`;
            }
        }

        // Toggle Favorite
        function toggleFavorite(gameName) {
            if (state.favorites.has(gameName)) {
                state.favorites.delete(gameName);
            } else {
                state.favorites.add(gameName);
            }
            localStorage.setItem('og-favorites-v2', JSON.stringify([...state.favorites]));
            renderGames();
        }

        // Show Game Info
        function showInfo(gameName) {
            const game = gamesData.find(g => g.name === gameName);
            if (!game) return;
            
            const message = `🎮 ${game.name}\n\n📁 Category: ${game.category.toUpperCase()}\n\n📝 ${game.description}\n\nClick OK to play now!`;
            
            if (confirm(message)) {
                window.open(game.url, '_blank');
            }
        }

        // Play Random Game
        function playRandomGame() {
            const randomGame = gamesData[Math.floor(Math.random() * gamesData.length)];
            window.open(randomGame.url, '_blank');
        }

        // Update Random Game
        function updateRandomGame() {
            state.currentRandomGame = gamesData[Math.floor(Math.random() * gamesData.length)];
            elements.randomGameName.textContent = state.currentRandomGame.name;
        }

        // View Toggle
        function handleViewToggle(e) {
            const btn = e.target.closest('.view-btn');
            if (!btn) return;

            document.querySelectorAll('.view-btn').forEach(b => 
                b.classList.remove('active'));
            btn.classList.add('active');

            state.currentView = btn.dataset.view;

            if (state.currentView === 'list') {
                elements.gamesContainer.classList.add('list-view');
                if (elements.favoritesContainer) {
                    elements.favoritesContainer.classList.add('list-view');
                }
            } else {
                elements.gamesContainer.classList.remove('list-view');
                if (elements.favoritesContainer) {
                    elements.favoritesContainer.classList.remove('list-view');
                }
            }
        }

        // Panic Mode
        function togglePanicMode(forceOff = false) {
            if (forceOff || document.body.classList.contains('panic-mode')) {
                document.body.classList.remove('panic-mode');
            } else {
                document.body.classList.add('panic-mode');
            }
        }

        // Handle Navigation
        function handleNavigation(e) {
            e.preventDefault();
            const target = e.target.getAttribute('href');

            document.querySelectorAll('.nav-link').forEach(l => 
                l.classList.remove('active'));
            e.target.classList.add('active');

            // Show/hide sections
            if (target === '#favorites') {
                elements.gamesSection.style.display = 'none';
                elements.favoritesSection.style.display = 'block';
            } else if (target === '#games') {
                elements.gamesSection.style.display = 'block';
                elements.favoritesSection.style.display = 'none';
            } else {
                elements.gamesSection.style.display = 'block';
                elements.favoritesSection.style.display = 'none';
            }

            // Scroll to section
            if (target === '#home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const section = document.querySelector(target);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }

        // Update Total Games Counter
        function updateTotalGames() {
            elements.totalGamesCounter.textContent = gamesData.length;
        }

        // Service Worker Registration
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(reg => console.log('✅ Service Worker registered'))
                    .catch(err => console.log('❌ SW registration failed:', err));
            });
        }

        // Initialize on DOM ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }

        // Update random game every 10 seconds
        setInterval(updateRandomGame, 10000);

        // Initial total games count
        updateTotalGames();
        