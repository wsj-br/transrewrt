<#
.SYNOPSIS
  Removes build artifacts and optionally development prerequisites for a full clean slate.

.DESCRIPTION
  Mirrors scripts/clean-workspace.sh: removes repository .log files, presets
  editor/check caches, build artifacts (including pnpm-lock.yaml), documentation
  caches, *.tsbuildinfo, then prunes the pnpm store and Docker caches.

  Windows extras:
  -RemovePrerequisites uninstalls global pnpm/Node via nvm and prints winget hints.

.PARAMETER RemoveLockfile
  Accepted for compatibility; the lockfile is always removed (same as the Bash script).

.PARAMETER RemovePrerequisites
  If set, uninstalls pnpm and Node (via nvm), and prints steps to remove Python,
  VS Build Tools, and Docker. Run in a new terminal (not from Cursor) so binaries
  are not in use. Some uninstalls may require Administrator.

.EXAMPLE
  .\scripts\clean-workspace.ps1

.EXAMPLE
  .\scripts\clean-workspace.ps1 -RemovePrerequisites
#>

[CmdletBinding()]
param(
    [switch] $RemoveLockfile,
    [switch] $RemovePrerequisites
)

$ErrorActionPreference = 'Continue'
$ProjectRoot = Split-Path -Parent $PSScriptRoot

function Remove-PathSafe {
    param(
        [Parameter(Mandatory = $true)][string] $Path,
        [string] $Label = $Path
    )
    if (Test-Path -LiteralPath $Path) {
        try {
            Remove-Item -LiteralPath $Path -Recurse -Force -ErrorAction Stop
            Write-Host "✅ Removed $Label"
            return $true
        }
        catch {
            Write-Host "❌ Error removing $Label"
            return $false
        }
    }
    return $false
}

Write-Host '🧹 Cleaning .log files and dev caches...'

$logExcludeDirs = @(
    (Join-Path $ProjectRoot 'node_modules'),
    (Join-Path $ProjectRoot '.git'),
    (Join-Path $ProjectRoot 'dist'),
    (Join-Path $ProjectRoot 'release'),
    (Join-Path $ProjectRoot 'documentation\node_modules')
)
$logFiles = Get-ChildItem -Path $ProjectRoot -Filter '*.log' -Recurse -File -ErrorAction SilentlyContinue |
    Where-Object {
        $full = $_.FullName
        -not ($logExcludeDirs | Where-Object { $full.StartsWith($_, [StringComparison]::OrdinalIgnoreCase) })
    }
foreach ($logFile in $logFiles) {
    $rel = $logFile.FullName.Substring($ProjectRoot.Length).TrimStart('\', '/')
    if (Remove-PathSafe -Path $logFile.FullName -Label $rel) { }
}

$devCaches = @(
    'dev/presets-check/provider-catalogs-cache.json',
    'dev/presets-check/presets-check.log',
    'presets-editor-provider-catalogs.json'
)
foreach ($cache in $devCaches) {
    $full = Join-Path $ProjectRoot ($cache -replace '/', [IO.Path]::DirectorySeparatorChar)
    if (Test-Path -LiteralPath $full) {
        Remove-PathSafe -Path $full -Label $cache | Out-Null
    }
}

Write-Host '🧹 Cleaning build artifacts and dependencies...'

$itemsToRemove = @(
    '.next',
    'node_modules',
    'dist',
    'out',
    '.turbo',
    'pnpm-lock.yaml',
    'release',
    'build_timestamp',
    'public/documentation',
    'documentation/.docusaurus',
    'documentation/.cache-loader',
    'documentation/.cache',
    'documentation/build',
    'documentation/node_modules',
    'documentation/pnpm-lock.yaml',
    '.genkit'
)

foreach ($item in $itemsToRemove) {
    $full = Join-Path $ProjectRoot ($item -replace '/', [IO.Path]::DirectorySeparatorChar)
    Remove-PathSafe -Path $full -Label $item | Out-Null
}

# data/*.json (same as Bash glob)
$dataDir = Join-Path $ProjectRoot 'data'
if (Test-Path -LiteralPath $dataDir) {
    Get-ChildItem -Path $dataDir -Filter '*.json' -File -ErrorAction SilentlyContinue | ForEach-Object {
        $rel = 'data/' + $_.Name
        Remove-PathSafe -Path $_.FullName -Label $rel | Out-Null
    }
}

if ($RemoveLockfile) {
    # Already removed above; keep the switch for documented Windows usage.
}

Write-Host '🧹 Cleaning glob patterns...'

$docDir = Join-Path $ProjectRoot 'documentation'
if (Test-Path -LiteralPath $docDir) {
    Get-ChildItem -Path $docDir -Directory -ErrorAction SilentlyContinue |
        Where-Object { $_.Name -like '.cache-*' } |
        ForEach-Object {
            Remove-PathSafe -Path $_.FullName -Label ("documentation/" + $_.Name) | Out-Null
        }
    Write-Host '✅ Removed documentation/.cache-* directories'
}

Get-ChildItem -Path $ProjectRoot -Filter '*.tsbuildinfo' -Recurse -File -Depth 3 -ErrorAction SilentlyContinue |
    ForEach-Object {
        Remove-PathSafe -Path $_.FullName -Label $_.Name | Out-Null
    }
Write-Host '✅ Removed *.tsbuildinfo files'

Write-Host '🧹 Clearing pnpm store cache...'
pnpm store prune
if ($LASTEXITCODE -eq 0) {
    Write-Host '✅ pnpm store cache cleared'
}
else {
    Write-Host '❌ Error clearing pnpm store cache'
}

Write-Host '🧹 Clearing docker compose cache...'
docker builder prune --all --force
if ($LASTEXITCODE -eq 0) {
    Write-Host '✅ Docker compose cache cleared'
}
else {
    Write-Host '❌ Error clearing docker compose cache'
}

Write-Host '🧹 Clearing docker system images/networks/volumes not used...'
docker system prune --all --force
if ($LASTEXITCODE -eq 0) {
    Write-Host '✅ Docker system images/networks/volumes not used cleared'
}
else {
    Write-Host '❌ Error clearing docker system images/networks/volumes'
}

Write-Host '✨ Clean completed!'
Write-Host ''
Write-Host ''
Write-Host '💡'
Write-Host "     remember to run 'pnpm install' to update the dependencies before building the application"
Write-Host "     or before running 'pnpm docker:up'"
Write-Host ''

if (-not $RemovePrerequisites) {
    Write-Host 'To also remove Windows dev tools (Node, pnpm, etc.), run: .\scripts\clean-workspace.ps1 -RemovePrerequisites' -ForegroundColor DarkGray
    exit 0
}

Write-Host ''
Write-Host '--- Removing development prerequisites ---' -ForegroundColor Yellow

try {
    $pnpm = Get-Command pnpm -ErrorAction SilentlyContinue
    if ($pnpm) {
        Write-Host 'Uninstalling pnpm globally...' -ForegroundColor Cyan
        npm uninstall -g pnpm 2>&1 | Out-Null
        Write-Host '  pnpm uninstalled.' -ForegroundColor Green
    }
}
catch {
    Write-Host "  Could not uninstall pnpm (npm may be missing or pnpm in use): $_" -ForegroundColor DarkYellow
}

$nvmCmd = Get-Command nvm -ErrorAction SilentlyContinue
if ($nvmCmd) {
    Write-Host 'Uninstalling Node version(s) via nvm...' -ForegroundColor Cyan
    $nvmList = nvm list 2>&1 | Out-String
    $versionMatches = [regex]::Matches($nvmList, '\s*(\d+\.\d+\.\d+)\s+')
    $versions = $versionMatches | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique
    foreach ($v in $versions) {
        try {
            & nvm uninstall $v 2>&1 | Out-Null
            Write-Host "  Node $v uninstalled." -ForegroundColor Green
        }
        catch {
            Write-Host "  nvm uninstall $v failed: $_" -ForegroundColor DarkYellow
        }
    }
    Write-Host '  To remove nvm itself: run the nvm-windows uninstaller from Add/Remove Programs.' -ForegroundColor DarkGray
}
else {
    Write-Host '  nvm not found; skipping Node removal. If Node was installed without nvm, uninstall via Settings or nodejs.org.' -ForegroundColor DarkGray
}

$prereqPackages = @(
    @{ Id = 'OpenJS.NodeJS'; Name = 'Node.js (standalone)' },
    @{ Id = 'CoreyButler.NVMforWindows'; Name = 'NVM for Windows' },
    @{ Id = 'Python.Python.3.13'; Name = 'Python 3.13' },
    @{ Id = 'Python.Python.3.12'; Name = 'Python 3.12' },
    @{ Id = 'Python.Launcher'; Name = 'Python Launcher' },
    @{ Id = 'Microsoft.VisualStudio.2022.BuildTools'; Name = 'Visual Studio Build Tools 2022' },
    @{ Id = 'Git.Git'; Name = 'Git' },
    @{ Id = 'Docker.DockerDesktop'; Name = 'Docker Desktop' }
)
$wingetList = ''
try {
    $wingetList = winget list 2>$null | Out-String
}
catch {
    # winget not available
}
$installed = @()
foreach ($pkg in $prereqPackages) {
    $id = $pkg.Id
    if ($wingetList -match "\b$([regex]::Escape($id))\b") {
        $installed += $pkg
    }
}

if ($installed.Count -gt 0) {
    Write-Host ''
    Write-Host 'The following dev prerequisites are installed. To remove them, run:' -ForegroundColor Yellow
    foreach ($pkg in $installed) {
        Write-Host ''
        Write-Host "  • $($pkg.Name)" -ForegroundColor Cyan
        Write-Host "    winget uninstall --id $($pkg.Id)" -ForegroundColor White
    }
    Write-Host ''
    Write-Host '  Or: Settings → Apps → search for the app → Uninstall.' -ForegroundColor DarkGray
}
else {
    Write-Host ''
    Write-Host 'No project-related prerequisites were detected in winget list.' -ForegroundColor DarkGray
}

Write-Host ''
Write-Host 'Workspace and selected prerequisites are cleaned. Restart the terminal (or PC) if you uninstall VS Build Tools.' -ForegroundColor Green
