#!/bin/bash
# upgrade-tools.sh
#
# This script upgrades the dependencies in the project to the latest versions.
#



set -e  # Exit on error

# Load nvm (it's a shell function, not available in script subshells by default)
export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  # shellcheck source=/dev/null
  . "$NVM_DIR/nvm.sh"
fi

# Color codes
BLUE='\033[0;34m'
RESET='\033[0m'

echo ""
echo "--------------------------------"
echo "🔄 Upgrading tools "
echo "--------------------------------"

# upgrade Node.js to the latest LTS version
echo -e "${BLUE}🔄  Upgrading Node.js to the latest LTS version...${RESET}"
nvm install --lts
nvm use --lts

# ensure pnpm is installed
echo -e "${BLUE}🔄  Ensure pnpm, npm-check-updates and doctoc are installed and in the latest version...${RESET}"
npm install -g pnpm npm-check-updates doctoc



