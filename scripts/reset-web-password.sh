#!/bin/sh
# Reset the web UI password from the command line.
# Usage: reset-web-password.sh <new-password>
#
# When run inside Docker, CONFIG_PATH is already set to /app/data/config.json.
# Locally you can set CONFIG_PATH to point at your config file if needed.

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
exec node "$SCRIPT_DIR/reset-web-password.js" "$@"
