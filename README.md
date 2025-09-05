# Placeholder.dev - Proxy Browser

A privacy-focused web proxy browser with tab functionality that routes all traffic through a server to hide your IP address.

## Features

🌐 **Proxy Browsing**: All web traffic is routed through the server, hiding your real IP address
🏠 **Start Page**: Clean dashboard interface that acts as your browser start page  
📑 **Multi-Tab Support**: Add, close, and switch between multiple browser tabs
🔍 **Integrated Search**: Search directly from the main page or address bar
📊 **Analytics**: Track your browsing activity and search history
🎮 **Built-in Games**: Entertainment while browsing
⚙️ **Customizable**: Multiple themes and layout options
🔒 **Privacy**: Your IP address is hidden from visited websites

## Quick Start

### Option 1: Using the start script (Recommended)
```bash
./start.sh
```

### Option 2: Manual setup
```bash
# Install dependencies
npm install

# Start the server
npm start
```

Then open http://localhost:3000 in your browser.

## How It Works

1. **Main Dashboard**: Acts like a browser start page with search, bookmarks, and quick actions
2. **Proxy Server**: Node.js backend that fetches web content and serves it through the application
3. **Tab System**: Multiple browsing sessions within the same interface
4. **Privacy Protection**: All requests go through the proxy server, hiding your real IP address

## Project Structure

```
├── server.js          # Proxy server backend
├── package.json       # Node.js dependencies
├── main.html          # Main dashboard interface
├── loading.html       # Loading screen
├── app.js             # Client-side application logic (legacy)
├── main.js            # Simple redirect (legacy)
└── start.sh           # Quick start script
```

## Usage

### Basic Browsing
1. Open the Browser tab
2. Enter a URL in the address bar or search for something
3. The website will load through the proxy, hiding your IP

### Multiple Tabs
- Click "New Tab" to open additional tabs
- Click the "×" on any tab to close it
- Click on tab names to switch between them

### Privacy
All web requests are routed through the proxy server, so websites will see the server's IP address instead of yours.

## Technical Details

- **Backend**: Node.js with Express
- **Proxy**: http-proxy-middleware for handling web requests
- **Frontend**: Vanilla JavaScript with modern CSS
- **Security**: Content Security Policy and CORS handling
- **URL Rewriting**: Automatic rewriting of relative URLs to work through the proxy

## Development

To run in development mode with auto-reload:
```bash
npm run dev
```

## Deployment

The application can be deployed to any Node.js hosting platform:

1. **Heroku**: Push to Heroku with the included package.json
2. **Railway**: Deploy directly from GitHub
3. **Vercel**: Deploy with Node.js runtime
4. **DigitalOcean**: Deploy on a VPS with Node.js

## Limitations

- Some websites may not work perfectly due to CORS restrictions
- JavaScript-heavy sites might have limited functionality
- Video streaming sites may not work optimally
- HTTPS sites with strict security policies may not load

## Contributing

This is an open-source project. Feel free to submit issues and pull requests.

## License

MIT License - feel free to use and modify as needed.