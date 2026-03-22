# upgrade-tools.ps1
#
# This script upgrades the development tools (Node.js via nvm, and global npm packages)
# to the latest versions.
#

$ErrorActionPreference = 'Stop'

Write-Host ""
Write-Host "--------------------------------"
Write-Host "🔄 Upgrading tools "
Write-Host "--------------------------------"

# Upgrade Node.js to the latest LTS version (nvm-windows)
if (Get-Command nvm -ErrorAction SilentlyContinue) {
    Write-Host "Upgrading Node.js to the latest LTS version..." -ForegroundColor Cyan
    nvm install lts
    # nvm-windows: use the LTS we just installed (current version has * in "nvm list")
    $nvmList = nvm list 2>&1 | Out-String
    if ($nvmList -match "\*\s*(\d+\.\d+\.\d+)") {
        $nodeVer = $Matches[1]
        Write-Host "Using Node.js version $nodeVer" -ForegroundColor Green
        nvm use $nodeVer
    } elseif ($nvmList -match "(\d+\.\d+\.\d+)") {
        $nodeVer = $Matches[1]
        Write-Host "Using Node.js version $nodeVer" -ForegroundColor Green
        nvm use $nodeVer
    }
} else {
    Write-Host "nvm not found. Install nvm-windows (https://github.com/coreybutler/nvm-windows) to upgrade Node.js, or skip this step." -ForegroundColor Yellow
}

# Ensure pnpm, npm-check-updates and doctoc are installed and up to date
Write-Host "Ensure pnpm, npm-check-updates and doctoc are installed and in the latest version..." -ForegroundColor Cyan
npm install -g pnpm npm-check-updates doctoc

Write-Host ""
Write-Host "Done."
