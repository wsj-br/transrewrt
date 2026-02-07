#!/bin/bash
# upgrade-dependencies.sh
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
echo "🔄 Upgrading dependencies "
echo "--------------------------------"

# upgrade Node.js to the latest LTS version
echo -e "${BLUE}🔄  Upgrading Node.js to the latest LTS version...${RESET}"
nvm install --lts
nvm use --lts

# ensure npm is installed
echo -e "${BLUE}🔄  Ensure npm-check-updates and doctoc are installed and in the latest version...${RESET}"
npm install -g npm-check-updates doctoc


# Update package.json with latest versions using npm-check-updates
echo -e "${BLUE}📦  Running npm-check-updates...${RESET}"
ncu --upgrade 2>&1 | pr -o 4 -T

# Update npm lockfile and install updated dependencies
echo -e "${BLUE}⬆️  Running npm install...${RESET}"
npm install 2>&1 | pr -o 4 -T

# check for vulnerabilities
echo -e "${BLUE}🔍  Checking for vulnerabilities...${RESET}"
npm audit 2>&1 | pr -o 4 -T

# fix vulnerabilities
echo -e "${BLUE}🔧  Fixing vulnerabilities...${RESET}"
npm audit fix 2>&1 | pr -o 4 -T

# check for vulnerabilities again
echo -e "${BLUE}🔍  Checking for vulnerabilities again...${RESET}"
npm audit 2>&1 | pr -o 4 -T


