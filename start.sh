#!/bin/bash

echo "Starting WhiteShelf..."
echo ""

# Kill any existing process on port 4567
PID_ON_PORT=$(lsof -i :4567 -t 2>/dev/null)
if [ ! -z "$PID_ON_PORT" ]; then
  echo "Stopping existing API server (PID: $PID_ON_PORT)..."
  kill -9 $PID_ON_PORT 2>/dev/null
  sleep 1
fi

# Start API server in background
ruby api_server.rb &
API_PID=$!

# Wait for API server to start
sleep 2

# Check if API server started successfully
if ! kill -0 $API_PID 2>/dev/null; then
  echo "Failed to start API server"
  exit 1
fi

echo ""
echo "Both servers running. Press Ctrl+C to stop."
echo ""

# Start Jekyll with baseurl to match GitHub Pages
bundle exec jekyll serve --baseurl /ResearchRack

# When Jekyll stops, kill API server
kill $API_PID 2>/dev/null
