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
    # Capture install output: nvm-windows prints "nvm use X.Y.Z" for the version it just
    # installed, but does not switch to it. "nvm list" still shows * on the previously
    # active version, so parsing only the starred row would leave you on an older patch.
    $installOut = (nvm install lts 2>&1 | Out-String).Trim()
    $nodeVer = $null
    if ($installOut -match 'nvm use (\d+\.\d+\.\d+)') {
        $nodeVer = $Matches[1]
    }
    if (-not $nodeVer) {
        $nvmList = (nvm list 2>&1 | Out-String).Trim()
        if ($nvmList -match '\*\s*(\d+\.\d+\.\d+)') {
            $nodeVer = $Matches[1]
        } elseif ($nvmList -match '(\d+\.\d+\.\d+)') {
            $nodeVer = $Matches[1]
        }
    }
    if ($nodeVer) {
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
