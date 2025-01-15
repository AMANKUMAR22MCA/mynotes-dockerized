#!/usr/bin/env bash
# wait-for-it.sh

# The MIT License (MIT)
# Copyright (c) 2016 Vishnu Bob
# Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
# The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# This script will wait for a specified host and port to be available before executing a command.
# Example usage:
# ./wait-for-it.sh db:5432 -- echo "Database is up!"

TIMEOUT=15
QUIET=0
HOST="$1"
PORT="$2"
shift 2
CMD="$@"

# Check if host and port are provided
if [[ -z "$HOST" || -z "$PORT" ]]; then
  echo "Usage: $0 <host>:<port> [--timeout=<seconds>] [--quiet] -- <command>"
  exit 1
fi

# Parse optional arguments
for i in "$@"; do
  case $i in
    --timeout=*)
      TIMEOUT="${i#*=}"
      shift
      ;;
    --quiet)
      QUIET=1
      shift
      ;;
    *)
      CMD="$CMD $i"
      ;;
  esac
done

# Wait for the host to be reachable on the given port
until nc -z "$HOST" "$PORT"; do
  echo "Waiting for $HOST:$PORT to be available..."
  sleep 1
  TIMEOUT=$((TIMEOUT - 1))
  if [ $TIMEOUT -le 0 ]; then
    echo "Timeout reached. $HOST:$PORT is still not available."
    exit 1
  fi
done

if [ $QUIET -eq 0 ]; then
  echo "$HOST:$PORT is now available."
fi

# Execute the command passed after the wait
exec $CMD
