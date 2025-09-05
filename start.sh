#!/bin/bash

echo "🚀 Starting Placeholder.dev Proxy Server..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found. Please run this script from the project root directory."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start the server
echo "🌐 Starting proxy server on port 3000..."
echo "📱 Open http://localhost:3000 in your browser"
echo "🔒 All web traffic will be routed through the proxy"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm start