<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Placeholder.dev - Advanced Search Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body class="text-white flex flex-col min-h-screen">
    <!-- Enhanced Animated Background -->
    <div class="bg-animation">
        <div class="floating-orb orb-1"></div>
        <div class="floating-orb orb-2"></div>
        <div class="floating-orb orb-3"></div>
        <div class="floating-orb orb-4"></div>
        <div class="floating-orb orb-5"></div>
    </div>

    <!-- Enhanced Header -->
    <header class="header sticky top-0 z-40 fade-in-up">
        <!-- Logo and Title Row -->
        <div class="flex justify-center items-center py-6 border-b border-white/10">
            <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-full glass flex items-center justify-center logo-container">
                    <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                </div>
                <div class="text-center">
                    <h1 class="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                        Placeholder.dev
                    </h1>
                    <p class="text-sm text-white/60">Advanced Search Dashboard</p>
                </div>
            </div>
        </div>
        
        <!-- Navigation and Status Row -->
        <div class="flex justify-between items-center px-6 py-4">
            <div class="flex items-center gap-2 text-sm text-white/60">
                <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Online</span>
                <span class="mx-2">•</span>
                <span id="currentTime"></span>
            </div>
            
            <nav class="flex gap-3">
                <button onclick="switchTab('dashboard')" class="tab-button active px-6 py-3 rounded-xl text-sm font-medium" id="tab-dashboard">
                    <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"/>
                    </svg>
                    Dashboard
                </button>
                <button onclick="switchTab('analytics')" class="tab-button px-6 py-3 rounded-xl text-sm font-medium" id="tab-analytics">
                    <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                    Analytics
                </button>
                <button onclick="switchTab('labs')" class="tab-button px-6 py-3 rounded-xl text-sm font-medium" id="tab-labs">
                    <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                    </svg>
                    Labs
                </button>
            </nav>
            
            <div class="flex items-center gap-4">
                <button onclick="toggleVoiceSearch()" class="text-white/60 hover:text-white transition-colors" title="Voice Search" id="voiceButton">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                    </svg>
                </button>
                <button onclick="exportBookmarks('json')" class="text-white/60 hover:text-white transition-colors" title="Export">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                    </svg>
                </button>
                <button onclick="importBookmarks()" class="text-white/60 hover:text-white transition-colors" title="Import">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
                    </svg>
                </button>
                <button onclick="switchTab('labs')" class="text-white/60 hover:text-white transition-colors" title="Settings">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                </button>
            </div>
        </div>
    </header>

    <!-- Main Content Area -->
    <div class="content-area scrollable flex-1">
        <div class="max-w-7xl mx-auto px-6 pb-6">
            <!-- Dashboard Tab -->
            <div id="dashboard-content" class="tab-content">
                <!-- Central Search Section -->
                <div class="flex flex-col justify-center items-center py-12 fade-in-up delay-100">
                    <div class="text-center mb-12">
                        <h2 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                            Search Anything
                        </h2>
                        <p class="text-xl text-white/80 max-w-2xl mx-auto">
                            Your intelligent gateway to the web. Search with voice commands, real-time suggestions, and smart bookmarks.
                        </p>
                    </div>
                    
                    <!-- Enhanced Search Bar -->
                    <div class="w-full max-w-4xl mb-8 search-container">
                        <div class="relative">
                            <input 
                                type="text" 
                                id="searchInput" 
                                placeholder="Enter URL or search the web... (Try saying 'search for cats')"
                                class="w-full h-20 px-8 pr-40 text-xl rounded-3xl search-input text-white placeholder-white/60 outline-none font-medium"
                                autocomplete="off"
                                oninput="handleSearchInput()"
                                onkeydown="handleSearchKeydown(event)"
                            >
                            <div class="absolute right-3 top-3 flex gap-2">
                                <button onclick="toggleVoiceSearch()" class="h-14 px-4 btn-secondary rounded-xl text-white font-semibold flex items-center gap-2" id="voiceSearchBtn">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                                    </svg>
                                </button>
                                <button onclick="handleSearch(event)" class="h-14 px-8 btn-primary rounded-xl text-white font-semibold flex items-center gap-2">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                    </svg>
                                    Search
                                </button>
                            </div>
                        </div>
                        
                        <!-- Voice Status Indicator -->
                        <div id="voiceStatus" class="hidden mt-4 text-center">
                            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30">
                                <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                <span class="text-sm text-red-300">Listening...</span>
                            </div>
                        </div>
                        
                        <!-- Search Suggestions -->
                        <div id="searchSuggestions" class="search-suggestions hidden scrollable">
                            <!-- Suggestions will be populated here -->
                        </div>
                    </div>
                    
                    <!-- Quick Actions -->
                    <div class="flex flex-wrap gap-4 mb-8">
                        <button onclick="addBookmark()" class="btn-secondary px-8 py-4 rounded-2xl text-white font-medium flex items-center gap-3 text-lg">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                            </svg>
                            Add Bookmark
                        </button>
                        <button onclick="showRandomBookmark()" class="btn-secondary px-8 py-4 rounded-2xl text-white font-medium flex items-center gap-3 text-lg">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            </svg>
                            Random Site
                        </button>
                        <button onclick="importBookmarks()" class="btn-secondary px-8 py-4 rounded-2xl text-white font-medium flex items-center gap-3 text-lg">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
                            </svg>
                            Import
                        </button>
                    </div>
                </div>

                <!-- Categories Section -->
                <div class="glass rounded-3xl p-8 mb-6 fade-in-up delay-150">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-2xl font-semibold flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                            </svg>
                            Categories
                        </h3>
                        <button onclick="addCategory()" class="btn-secondary px-4 py-2 rounded-xl text-sm">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                            </svg>
                            Add Category
                        </button>
                    </div>
                    <div id="categoriesContainer" class="flex flex-wrap gap-2">
                        <!-- Categories will be rendered here -->
                    </div>
                </div>

                <!-- Bookmarks Section -->
                <div class="glass rounded-3xl p-8 fade-in-up delay-200">
                    <div class="flex justify-between items-center mb-6">
                        <div class="flex items-center gap-4">
                            <h3 class="text-2xl font-semibold">Quick Access</h3>
                            <span id="bookmarkCount" class="px-4 py-2 rounded-full bg-white/20 text-sm font-medium">0 bookmarks</span>
                        </div>
                        <div class="flex gap-3">
                            <input 
                                type="text" 
                                id="bookmarkSearchInput" 
                                placeholder="Search bookmarks..."
                                class="bookmark-search w-64"
                                oninput="filterBookmarks()"
                            >
                            <button onclick="clearAllBookmarks()" class="btn-secondary px-6 py-3 rounded-xl text-sm text-red-300 hover:text-red-200">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                </svg>
                                Clear All
                            </button>
                        </div>
                    </div>
                    
                    <div id="bookmarkGrid" class="bookmark-grid scrollable max-h-96">
                        <!-- Bookmarks will be rendered here -->
                    </div>
                    
                    <div id="emptyBookmarks" class="text-center py-16 text-white/60 hidden">
                        <div class="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                            <svg class="w-12 h-12 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                            </svg>
                        </div>
                        <h3 class="text-2xl font-semibold mb-2">No bookmarks yet</h3>
                        <p class="text-lg">Add some to get started! Try saying "add bookmark"</p>
                    </div>
                </div>
            </div>

            <!-- Analytics Tab -->
            <div id="analytics-content" class="tab-content hidden">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
                    <!-- Usage Chart -->
                    <div class="glass rounded-3xl p-8 fade-in-up">
                        <h2 class="text-2xl font-semibold mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                            </svg>
                            Usage Analytics
                        </h2>
                        <div class="h-64">
                            <canvas id="usageChart"></canvas>
                        </div>
                    </div>
                    
                    <!-- Top Bookmarks -->
                    <div class="glass rounded-3xl p-8 fade-in-up delay-100">
                        <h2 class="text-2xl font-semibold mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                            </svg>
                            Top Bookmarks
                        </h2>
                        <div id="topBookmarksList" class="space-y-4 scrollable max-h-64">
                            <!-- Top bookmarks will be rendered here -->
                        </div>
                    </div>
                    
                    <!-- Stats Grid -->
                    <div class="lg:col-span-2 grid grid-cols-1 md:grid-cols-4 gap-6 fade-in-up delay-200">
                        <div class="stats-card">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-sm text-white/70 font-medium">Total Clicks</h3>
                                    <p id="totalClicks" class="text-3xl font-bold">0</p>
                                </div>
                            </div>
                            <div class="text-xs text-white/50">All time activity</div>
                        </div>
                        <div class="stats-card">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 11H7v3h2v-3zm4 0h-2v3h2v-3zm4 0h-2v3h2v-3zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-sm text-white/70 font-medium">Voice Commands</h3>
                                    <p id="voiceCommands" class="text-3xl font-bold">0</p>
                                </div>
                            </div>
                            <div class="text-xs text-white/50">Voice searches used</div>
                        </div>
                        <div class="stats-card">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-sm text-white/70 font-medium">Average Daily</h3>
                                    <p id="avgDaily" class="text-3xl font-bold">0</p>
                                </div>
                            </div>
                            <div class="text-xs text-white/50">Per day average</div>
                        </div>
                        <div class="stats-card">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-sm text-white/70 font-medium">Total Bookmarks</h3>
                                    <p id="totalBookmarks" class="text-3xl font-bold">0</p>
                                </div>
                            </div>
                            <div class="text-xs text-white/50">Saved bookmarks</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Labs Tab -->
            <div id="labs-content" class="tab-content hidden">
                <div class="space-y-8 py-8">
                    <!-- Voice Commands Section -->
                    <div class="glass rounded-3xl p-8 fade-in-up">
                        <h2 class="text-2xl font-semibold mb-8 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                            </svg>
                            Voice Commands
                        </h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 class="text-lg font-semibold mb-4">Available Commands</h3>
                                <div class="space-y-3 text-sm">
                                    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                                        <span class="text-purple-400 font-mono">"search for [query]"</span>
                                        <span class="text-white/60">- Search the web</span>
                                    </div>
                                    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                                        <span class="text-purple-400 font-mono">"add bookmark"</span>
                                        <span class="text-white/60">- Open bookmark modal</span>
                                    </div>
                                    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                                        <span class="text-purple-400 font-mono">"show analytics"</span>
                                        <span class="text-white/60">- Switch to analytics tab</span>
                                    </div>
                                    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                                        <span class="text-purple-400 font-mono">"random bookmark"</span>
                                        <span class="text-white/60">- Open random bookmark</span>
                                    </div>
                                    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                                        <span class="text-purple-400 font-mono">"export bookmarks"</span>
                                        <span class="text-white/60">- Export as JSON</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold mb-4">Voice Settings</h3>
                                <div class="space-y-4">
                                    <label class="flex items-center gap-4 cursor-pointer">
                                        <input type="checkbox" id="voiceEnabled" class="w-5 h-5 rounded accent-purple-500" checked>
                                        <span class="text-sm font-medium">Enable Voice Commands</span>
                                    </label>
                                    <label class="flex items-center gap-4 cursor-pointer">
                                        <input type="checkbox" id="voiceFeedback" class="w-5 h-5 rounded accent-purple-500" checked>
                                        <span class="text-sm font-medium">Voice Feedback</span>
                                    </label>
                                    <label class="flex items-center gap-4 cursor-pointer">
                                        <input type="checkbox" id="continuousListening" class="w-5 h-5 rounded accent-purple-500">
                                        <span class="text-sm font-medium">Continuous Listening</span>
                                    </label>
                                </div>
                                <div class="mt-6">
                                    <button onclick="testVoiceRecognition()" class="btn-primary px-6 py-3 rounded-xl text-sm font-medium">
                                        Test Voice Recognition
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Data Management Section -->
                    <div class="glass rounded-3xl p-8 fade-in-up delay-100">
                        <h2 class="text-2xl font-semibold mb-8 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12"/>
                            </svg>
                            Data Management
                        </h2>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div class="stats-card">
                                <div class="flex items-center gap-4 mb-6">
                                    <div class="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-semibold">Export Data</h3>
                                        <p class="text-sm text-white/70">Download bookmarks</p>
                                    </div>
                                </div>
                                <div class="space-y-3">
                                    <button onclick="exportBookmarks('json')" class="w-full btn-secondary py-3 rounded-xl text-sm font-medium">
                                        Export as JSON
                                    </button>
                                    <button onclick="exportBookmarks('html')" class="w-full btn-secondary py-3 rounded-xl text-sm font-medium">
                                        Export as HTML
                                    </button>
                                </div>
                            </div>

                            <div class="stats-card">
                                <div class="flex items-center gap-4 mb-6">
                                    <div class="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-semibold">Import Data</h3>
                                        <p class="text-sm text-white/70">Upload bookmark files</p>
                                    </div>
                                </div>
                                <div class="space-y-3">
                                    <button onclick="importBookmarks()" class="w-full btn-secondary py-3 rounded-xl text-sm font-medium">
                                        Choose File
                                    </button>
                                </div>
                            </div>

                            <div class="stats-card">
                                <div class="flex items-center gap-4 mb-6">
                                    <div class="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-semibold">Settings</h3>
                                        <p class="text-sm text-white/70">App preferences</p>
                                    </div>
                                </div>
                                <div class="space-y-3">
                                    <button onclick="clearAllData()" class="w-full btn-secondary py-3 rounded-xl text-sm font-medium text-red-300">
                                        Clear All Data
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer mt-auto p-6">
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                <div class="flex items-center gap-4">
                    <div class="w-8 h-8 rounded-full glass flex items-center justify-center">
                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                    </div>
                    <div>
                        <p class="text-white font-medium">Placeholder.dev</p>
                        <p class="text-white/60 text-sm">Advanced Search Dashboard with Voice Commands</p>
                    </div>
                </div>
                
                <div class="flex items-center gap-6 text-sm text-white/60">
                    <span>Version 2.1</span>
                    <span>•</span>
                    <span id="footerBookmarkCount">0 bookmarks</span>
                    <span>•</span>
                    <span id="footerCategoryCount">0 categories</span>
                </div>
            </div>
        </div>
    </footer>

    <!-- Enhanced Context Menu -->
    <div id="contextMenu" class="dropdown hidden">
        <div class="dropdown-item" onclick="editBookmark()">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
            </svg>
            Edit
        </div>
        <div class="dropdown-item" onclick="copyBookmarkLink()">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
            </svg>
            Copy Link
        </div>
        <div class="dropdown-item text-red-400" onclick="deleteBookmark()">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
            </svg>
            Delete
        </div>
    </div>

    <!-- Enhanced Add/Edit Bookmark Modal -->
    <div id="bookmarkModal" class="fixed inset-0 modal-backdrop hidden flex items-center justify-center p-4 z-50">
        <div class="glass rounded-3xl p-10 w-full max-w-lg modal-content">
            <div class="flex justify-between items-center mb-8">
                <h3 class="text-2xl font-semibold text-white" id="modalTitle">Add Bookmark</h3>
                <button onclick="closeModal()" class="text-white/60 hover:text-white transition-colors p-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            <div class="space-y-6">
                <div>
                    <label class="block text-white/80 mb-3 font-medium">Bookmark Name</label>
                    <input 
                        type="text" 
                        id="bookmarkName" 
                        placeholder="Enter bookmark name..."
                        class="w-full h-14 px-6 rounded-2xl search-input text-white placeholder-white/60 outline-none"
                        maxlength="100"
                    >
                </div>
                <div>
                    <label class="block text-white/80 mb-3 font-medium">URL</label>
                    <input 
                        type="text" 
                        id="bookmarkUrl" 
                        placeholder="Enter URL..."
                        class="w-full h-14 px-6 rounded-2xl search-input text-white placeholder-white/60 outline-none"
                    >
                </div>
                <div>
                    <label class="block text-white/80 mb-3 font-medium">Category</label>
                    <select id="bookmarkCategory" class="w-full h-14 px-6 rounded-2xl search-input text-white outline-none">
                        <option value="General">General</option>
                    </select>
                </div>
                <div class="flex gap-4 pt-6">
                    <button onclick="saveBookmark()" class="flex-1 btn-primary h-14 rounded-2xl text-white font-semibold text-lg">
                        <span id="saveButtonText">Save Bookmark</span>
                    </button>
                    <button onclick="closeModal()" class="flex-1 btn-secondary h-14 rounded-2xl text-white font-medium text-lg">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Error Display -->
    <div id="errorContainer" class="fixed top-6 right-6 z-50 space-y-3">
        <!-- Error toasts will be added here -->
    </div>

    <script src="script.js"></script>
</body>
</html>
