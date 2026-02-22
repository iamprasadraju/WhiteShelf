#!/bin/bash

echo "Stopping WhiteShelf..."

# Kill API server on port 4567
PID_4567=$(lsof -i :4567 -t 2>/dev/null)
if [ ! -z "$PID_4567" ]; then
  kill -9 $PID_4567 2>/dev/null
  echo "Stopped API server (port 4567)"
fi

# Kill Jekyll on port 4000
PID_4000=$(lsof -i :4000 -t 2>/dev/null)
if [ ! -z "$PID_4000" ]; then
  kill -9 $PID_4000 2>/dev/null
  echo "Stopped Jekyll (port 4000)"
fi

echo "Done"
