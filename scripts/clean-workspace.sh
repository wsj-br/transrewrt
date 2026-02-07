#!/bin/bash
# clean-workspace.sh
#
# Removes installed dependencies and build artifacts from the workspace.
# Run this for a fresh start (e.g. before reinstalling or troubleshooting).
#

set -e  # Exit on error

# Resolve script directory and project root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

cd "$PROJECT_ROOT"

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
RESET='\033[0m'

echo ""
echo "--------------------------------"
echo "🧹 Cleaning workspace"
echo "--------------------------------"
echo ""

# Items to remove (relative to project root)
CLEAN_ITEMS=(
  "node_modules"
  "dist"
  "build"
  "release"
  "cache"
  ".cache"
)

for item in "${CLEAN_ITEMS[@]}"; do
  if [ -e "$item" ]; then
    echo -e "${YELLOW}Removing:${RESET} $item"
    rm -rf "$item"
    echo -e "${GREEN}  ✓ Removed${RESET}"
  else
    echo "  (skip) $item — not present"
  fi
done

# Clear npm cache so packages are re-downloaded fresh from the registry
echo -e "${YELLOW}Clearing npm cache...${RESET}"
npm cache clean --force 2>/dev/null || true
echo -e "${GREEN}  ✓ npm cache cleared${RESET}"

# Remove package-lock.json for fresh dependency resolution on next npm install
if [ -f "package-lock.json" ]; then
  echo -e "${YELLOW}Removing:${RESET} package-lock.json"
  rm -f package-lock.json
  echo -e "${GREEN}  ✓ Removed${RESET}"
else
  echo "  (skip) package-lock.json — not present"
fi

echo ""
echo -e "${GREEN}Workspace cleaned.${RESET} Run 'npm install' to reinstall dependencies."
echo ""
