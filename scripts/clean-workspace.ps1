<#
.SYNOPSIS
  Removes build artifacts and optionally development prerequisites for a full clean slate.

.DESCRIPTION
  Phase 1 (default): Deletes project build artifacts (node_modules, dist, release, etc.).
  Phase 2 (optional): Also removes pnpm-lock.yaml for a fresh dependency resolution.
  Phase 3 (optional): Uninstalls global dev tools (pnpm, Node via nvm) and prints
  instructions to remove Python, Visual Studio Build Tools, and Docker.

.PARAMETER RemoveLockfile
  If set, also removes pnpm-lock.yaml so the next pnpm install does a full resolution.

.PARAMETER RemovePrerequisites
  If set, uninstalls pnpm and Node (via nvm), and prints steps to remove Python,
  VS Build Tools, and Docker. Run in a new terminal (not from Cursor) so binaries
  are not in use. Some uninstalls may require Administrator.

.EXAMPLE
  .\scripts\clean-workspace.ps1
  # Removes only workspace build artifacts.

.EXAMPLE
  .\scripts\clean-workspace.ps1 -RemoveLockfile
  # Removes artifacts and pnpm-lock.yaml.

.EXAMPLE
  .\scripts\clean-workspace.ps1 -RemovePrerequisites
  # Removes artifacts and dev tools (pnpm, Node); prints manual steps for the rest.
#>

[CmdletBinding()]
param(
    [switch] $RemoveLockfile,
    [switch] $RemovePrerequisites
)

$ErrorActionPreference = "Stop"
# Script lives in <project>/scripts/, so project root is parent of script directory
$ProjectRoot = Split-Path -Parent $PSScriptRoot

# ---------- Phase 1: Workspace build artifacts ----------
$artifacts = @(
    (Join-Path $ProjectRoot "node_modules"),
    (Join-Path $ProjectRoot "dist"),
    (Join-Path $ProjectRoot "cache"),
    (Join-Path $ProjectRoot "release"),
    (Join-Path $ProjectRoot "build_timestamp")
    (Join-Path $ProjectRoot "pnpm-lock.yaml")
)

Write-Host "Removing build artifacts..." -ForegroundColor Cyan
foreach ($path in $artifacts) {
    if (Test-Path $path) {
        Write-Host "  Removing: $path"
        Remove-Item -Path $path -Recurse -Force
    } else {
        Write-Host "  (skip, not present): $path" -ForegroundColor DarkGray
    }
}

# Optional: lockfile for full dependency refresh
if ($RemoveLockfile) {
    $lockfile = Join-Path $ProjectRoot "pnpm-lock.yaml"
    if (Test-Path $lockfile) {
        Write-Host "Removing lockfile: $lockfile" -ForegroundColor Cyan
        Remove-Item -Path $lockfile -Force
    }
}

# ---------- Phase 2: Optional removal of dev tools ----------
if (-not $RemovePrerequisites) {
    Write-Host "`nDone. Workspace is clean." -ForegroundColor Green
    Write-Host "To also remove dev tools (Node, pnpm, etc.), run: .\scripts\clean-workspace.ps1 -RemovePrerequisites" -ForegroundColor DarkGray
    exit 0
}

Write-Host "`n--- Removing development prerequisites ---" -ForegroundColor Yellow

# Uninstall pnpm globally (requires npm)
try {
    $pnpm = Get-Command pnpm -ErrorAction SilentlyContinue
    if ($pnpm) {
        Write-Host "Uninstalling pnpm globally..." -ForegroundColor Cyan
        npm uninstall -g pnpm 2>&1 | Out-Null
        Write-Host "  pnpm uninstalled." -ForegroundColor Green
    }
} catch {
    Write-Host "  Could not uninstall pnpm (npm may be missing or pnpm in use): $_" -ForegroundColor DarkYellow
}

# Uninstall Node version(s) via nvm-windows if present
$nvmCmd = Get-Command nvm -ErrorAction SilentlyContinue
if ($nvmCmd) {
    Write-Host "Uninstalling Node version(s) via nvm..." -ForegroundColor Cyan
    $nvmList = nvm list 2>&1 | Out-String
    # Match full versions like 24.11.0 or 20.18.0 (nvm list format)
    $versionMatches = [regex]::Matches($nvmList, "\s*(\d+\.\d+\.\d+)\s+")
    $versions = $versionMatches | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique
    foreach ($v in $versions) {
        try {
            & nvm uninstall $v 2>&1 | Out-Null
            Write-Host "  Node $v uninstalled." -ForegroundColor Green
        } catch {
            Write-Host "  nvm uninstall $v failed: $_" -ForegroundColor DarkYellow
        }
    }
    Write-Host "  To remove nvm itself: run the nvm-windows uninstaller from Add/Remove Programs." -ForegroundColor DarkGray
} else {
    Write-Host "  nvm not found; skipping Node removal. If Node was installed without nvm, uninstall via Settings or nodejs.org." -ForegroundColor DarkGray
}

# Detect which prerequisite packages are installed via winget; show only those.
$prereqPackages = @(
    @{ Id = "OpenJS.NodeJS";              Name = "Node.js (standalone)" },
    @{ Id = "CoreyButler.NVMforWindows"; Name = "NVM for Windows" },
    @{ Id = "Python.Python.3.13";        Name = "Python 3.13" },
    @{ Id = "Python.Python.3.12";        Name = "Python 3.12" },
    @{ Id = "Python.Launcher";           Name = "Python Launcher" },
    @{ Id = "Microsoft.VisualStudio.2022.BuildTools"; Name = "Visual Studio Build Tools 2022" },
    @{ Id = "Git.Git";                   Name = "Git" },
    @{ Id = "Docker.DockerDesktop";      Name = "Docker Desktop" }
)
$wingetList = ""
try {
    $wingetList = winget list 2>$null | Out-String
} catch {
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
    Write-Host "`nThe following dev prerequisites are installed. To remove them, run:" -ForegroundColor Yellow
    foreach ($pkg in $installed) {
        Write-Host "`n  • $($pkg.Name)" -ForegroundColor Cyan
        Write-Host "    winget uninstall --id $($pkg.Id)" -ForegroundColor White
    }
    Write-Host "`n  Or: Settings → Apps → search for the app → Uninstall." -ForegroundColor DarkGray
} else {
    Write-Host "`nNo project-related prerequisites were detected in winget list." -ForegroundColor DarkGray
}

Write-Host "`nWorkspace and selected prerequisites are cleaned. Restart the terminal (or PC) if you uninstall VS Build Tools." -ForegroundColor Green
