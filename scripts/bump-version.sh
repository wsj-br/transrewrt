#!/bin/bash
# Increment the fourth field of version in package.json (e.g. 1.0.1.30 -> 1.0.1.31).

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
PACKAGE_JSON="$ROOT_DIR/package.json"

if [[ ! -f "$PACKAGE_JSON" ]]; then
  echo "Error: package.json not found at $PACKAGE_JSON" >&2
  exit 1
fi

node -e "
const fs = require('fs');
const path = process.argv[1];
const p = JSON.parse(fs.readFileSync(path, 'utf8'));
const parts = (p.version || '').split('.');
if (parts.length < 4) {
  console.error('Error: version must have four fields (e.g. 1.0.1.30)');
  process.exit(1);
}
const fourth = parseInt(parts[3], 10);
if (Number.isNaN(fourth)) {
  console.error('Error: fourth version field is not a number');
  process.exit(1);
}
parts[3] = String(fourth + 1);
p.version = parts.join('.');
fs.writeFileSync(path, JSON.stringify(p, null, 2) + '\n');
console.log('Version bumped to ' + p.version);
" "$PACKAGE_JSON" || exit 1
