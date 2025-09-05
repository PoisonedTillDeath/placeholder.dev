const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Security and performance middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disabled for proxy functionality
  crossOriginEmbedderPolicy: false
}));
app.use(compression());
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (the frontend)
app.use(express.static('./', {
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    }
  }
}));

// Proxy endpoint for web requests
app.get('/proxy/:url(*)', async (req, res) => {
  try {
    const targetUrl = decodeURIComponent(req.params.url);
    
    // Validate URL
    let url;
    try {
      url = new URL(targetUrl.startsWith('http') ? targetUrl : `https://${targetUrl}`);
    } catch (error) {
      return res.status(400).json({ error: 'Invalid URL' });
    }

    // Fetch the content
    const response = await fetch(url.toString(), {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1'
      },
      timeout: 30000
    });

    if (!response.ok) {
      return res.status(response.status).json({ 
        error: `HTTP ${response.status}: ${response.statusText}` 
      });
    }

    const contentType = response.headers.get('content-type') || '';
    
    // If it's HTML, modify it to work within our proxy
    if (contentType.includes('text/html')) {
      const html = await response.text();
      const modifiedHtml = modifyHtmlForProxy(html, url.origin);
      
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.setHeader('X-Frame-Options', 'SAMEORIGIN');
      res.send(modifiedHtml);
    } else {
      // For other content types, proxy as-is
      const buffer = await response.buffer();
      res.setHeader('Content-Type', contentType);
      res.send(buffer);
    }

  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch content',
      details: error.message 
    });
  }
});

// Search endpoint (for integrated search functionality)
app.get('/search', async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.status(400).json({ error: 'Search query required' });
    }

    // Default to Google search
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    const proxyUrl = `/proxy/${encodeURIComponent(searchUrl)}`;
    
    res.json({ 
      success: true, 
      proxyUrl: proxyUrl,
      originalUrl: searchUrl,
      query: query
    });

  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Search failed' });
  }
});

// API endpoint to get page metadata
app.get('/api/metadata/:url(*)', async (req, res) => {
  try {
    const targetUrl = decodeURIComponent(req.params.url);
    const url = new URL(targetUrl.startsWith('http') ? targetUrl : `https://${targetUrl}`);
    
    const response = await fetch(url.toString(), {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 10000
    });

    if (!response.ok) {
      return res.status(404).json({ error: 'Page not found' });
    }

    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const metadata = {
      title: document.title || url.hostname,
      description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
      icon: getFaviconUrl(document, url.origin),
      url: url.toString(),
      hostname: url.hostname
    };

    res.json(metadata);

  } catch (error) {
    console.error('Metadata error:', error);
    res.status(500).json({ error: 'Failed to get metadata' });
  }
});

// Helper function to modify HTML for proxy functionality
function modifyHtmlForProxy(html, baseUrl) {
  try {
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Rewrite relative URLs to absolute URLs
    const elements = document.querySelectorAll('[src], [href], [action]');
    elements.forEach(element => {
      ['src', 'href', 'action'].forEach(attr => {
        const value = element.getAttribute(attr);
        if (value && !value.startsWith('http') && !value.startsWith('//') && !value.startsWith('#')) {
          try {
            const absoluteUrl = new URL(value, baseUrl).toString();
            element.setAttribute(attr, `/proxy/${encodeURIComponent(absoluteUrl)}`);
          } catch (e) {
            // Invalid URL, leave as-is
          }
        } else if (value && (value.startsWith('http') || value.startsWith('//'))) {
          const fullUrl = value.startsWith('//') ? `https:${value}` : value;
          element.setAttribute(attr, `/proxy/${encodeURIComponent(fullUrl)}`);
        }
      });
    });

    // Add base tag to handle remaining relative URLs
    const head = document.querySelector('head');
    if (head && !document.querySelector('base')) {
      const base = document.createElement('base');
      base.href = baseUrl;
      head.insertBefore(base, head.firstChild);
    }

    // Inject JavaScript to handle form submissions and links
    const script = document.createElement('script');
    script.textContent = `
      (function() {
        // Handle form submissions
        document.addEventListener('submit', function(e) {
          const form = e.target;
          const action = form.action;
          if (action && !action.includes('/proxy/')) {
            e.preventDefault();
            const formData = new FormData(form);
            const params = new URLSearchParams(formData);
            const method = form.method || 'GET';
            
            if (method.toLowerCase() === 'get') {
              const separator = action.includes('?') ? '&' : '?';
              const newUrl = action + separator + params.toString();
              window.location.href = '/proxy/' + encodeURIComponent(newUrl);
            } else {
              // For POST requests, redirect to GET for simplicity
              window.location.href = '/proxy/' + encodeURIComponent(action);
            }
          }
        });

        // Handle link clicks
        document.addEventListener('click', function(e) {
          const link = e.target.closest('a');
          if (link && link.href && !link.href.includes('/proxy/')) {
            if (link.href.startsWith('http') || link.href.startsWith('//')) {
              e.preventDefault();
              const fullUrl = link.href.startsWith('//') ? 'https:' + link.href : link.href;
              window.location.href = '/proxy/' + encodeURIComponent(fullUrl);
            }
          }
        });

        // Handle window.open calls
        const originalOpen = window.open;
        window.open = function(url, ...args) {
          if (url && !url.includes('/proxy/')) {
            const fullUrl = url.startsWith('//') ? 'https:' + url : url;
            return originalOpen('/proxy/' + encodeURIComponent(fullUrl), ...args);
          }
          return originalOpen(url, ...args);
        };
      })();
    `;
    
    if (document.body) {
      document.body.appendChild(script);
    }

    return dom.serialize();

  } catch (error) {
    console.error('HTML modification error:', error);
    return html; // Return original HTML if modification fails
  }
}

// Helper function to get favicon URL
function getFaviconUrl(document, baseUrl) {
  const iconLink = document.querySelector('link[rel*="icon"]');
  if (iconLink) {
    const href = iconLink.getAttribute('href');
    if (href) {
      try {
        return new URL(href, baseUrl).toString();
      } catch (e) {
        // Invalid URL
      }
    }
  }
  return `${baseUrl}/favicon.ico`;
}

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Placeholder.dev Proxy Server running on port ${PORT}`);
  console.log(`📱 Access your proxy browser at: http://localhost:${PORT}`);
  console.log(`🌐 Proxy any website via: http://localhost:${PORT}/proxy/[URL]`);
});

module.exports = app;