#!/bin/sh
# Reset the web UI password from the command line.
# Usage: reset-web-password <new-password>
#
# When run inside Docker, CONFIG_PATH is already set to /app/data/config.json.
# Locally you can set CONFIG_PATH to point at your config file if needed.

if [ $# -lt 1 ] || [ -z "$1" ]; then
  echo "Usage: reset-web-password <new-password>" >&2
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
NODE_SCRIPT="$SCRIPT_DIR/reset-web-password.js"
if [ ! -f "$NODE_SCRIPT" ]; then
  NODE_SCRIPT="$SCRIPT_DIR/scripts/reset-web-password.js"
fi
exec node "$NODE_SCRIPT" "$@"
