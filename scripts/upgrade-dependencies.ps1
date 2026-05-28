# upgrade-dependencies.ps1
#
# This script upgrades the dependencies in the project to the latest versions.
#
# nvm-windows `nvm use` only affects the current PowerShell session. Dot-source so
# PATH changes apply to your shell:
#   . .\scripts\upgrade-dependencies.ps1
# This file aborts if executed as .\scripts\upgrade-dependencies.ps1 unless CI=1 or
# TRANSREWRT_UPGRADE_ALLOW_EXEC=1 (for automation).
#

$ScriptDir = $PSScriptRoot
$TransrewrtUpgradeDotSourced = ($MyInvocation.InvocationName -eq '.')

if ($MyInvocation.InvocationName -ne '.') {
    if (-not $env:CI -and -not $env:TRANSREWRT_UPGRADE_ALLOW_EXEC) {
        Write-Host 'Abort: dot-source this script so nvm applies to your current shell.' -ForegroundColor Red
        Write-Host "  . `"$PSCommandPath`"" -ForegroundColor Green
        Write-Host '(Automation: set CI=1 or TRANSREWRT_UPGRADE_ALLOW_EXEC=1 to allow execution without dot-sourcing.)' -ForegroundColor Yellow
        exit 1
    }
}

function Write-IndentedCommandOutput {
    param(
        [Parameter(Mandatory = $true)]
        [scriptblock] $Command
    )
    & $Command 2>&1 | ForEach-Object { "    $_" } | Write-Host
}

function Invoke-TransrewrtUpgradeDependencies {
    Write-Host ''
    Write-Host '--------------------------------'
    Write-Host '🔄 Upgrading dependencies '
    Write-Host '--------------------------------'

    $prevSuppress = $env:TRANSREWRT_UPGRADE_TOOLS_SUPPRESS_DONE
    $prevEmbedded = $env:TRANSREWRT_UPGRADE_TOOLS_EMBEDDED
    $env:TRANSREWRT_UPGRADE_TOOLS_SUPPRESS_DONE = '1'
    $env:TRANSREWRT_UPGRADE_TOOLS_EMBEDDED = '1'
    try {
        . (Join-Path $ScriptDir 'upgrade-tools.ps1')
    }
    finally {
        if ($null -eq $prevSuppress) {
            Remove-Item Env:TRANSREWRT_UPGRADE_TOOLS_SUPPRESS_DONE -ErrorAction SilentlyContinue
        }
        else {
            $env:TRANSREWRT_UPGRADE_TOOLS_SUPPRESS_DONE = $prevSuppress
        }
        if ($null -eq $prevEmbedded) {
            Remove-Item Env:TRANSREWRT_UPGRADE_TOOLS_EMBEDDED -ErrorAction SilentlyContinue
        }
        else {
            $env:TRANSREWRT_UPGRADE_TOOLS_EMBEDDED = $prevEmbedded
        }
    }

    $eslintNcuReject = 'eslint,@eslint/js,eslint-plugin-react,eslint-plugin-react-hooks'
    $betterSqlite3NcuReject = 'better-sqlite3'
    $electronNcuReject = ''
    Write-Host '📦  Checking registry: newest better-sqlite3 for latest Electron (prebuild probe)...' -ForegroundColor Blue
    $betterSqlite3CompatPrecheckOut = (node (Join-Path $ScriptDir 'better-sqlite3-electron-compat.js') 2>&1 | Out-String).TrimEnd()
    $betterSqlite3CompatPrecheckOk = $LASTEXITCODE
    $betterSqlite3CompatPrecheckOut -split "`r?`n" | ForEach-Object { "    $_" } | Write-Host
    if ($betterSqlite3CompatPrecheckOk -ne 0) {
        $electronNcuReject = 'electron'
        Write-Host 'Latest Electron has no matching better-sqlite3 prebuild yet; keeping current Electron in package.json during ncu.' -ForegroundColor Yellow
    }
    $ncuRejectNative = $betterSqlite3NcuReject
    if ($electronNcuReject) {
        $ncuRejectNative = "$ncuRejectNative,$electronNcuReject"
    }
    $ncuReject = "$eslintNcuReject,$ncuRejectNative"
    Write-Host '📦  Checking registry: do latest react ESLint plugins allow ESLint 10?' -ForegroundColor Blue
    $eslint10PeerOut = (node (Join-Path $ScriptDir 'eslint-react-peers-allow-eslint10.js') 2>&1 | Out-String).TrimEnd()
    $eslint10PeerOk = $LASTEXITCODE
    $eslint10PeerOut -split "`r?`n" | ForEach-Object { "    $_" } | Write-Host

    Write-Host '📦  Running npm-check-updates...' -ForegroundColor Blue
    if ($eslint10PeerOk -eq 0) {
        Write-Host 'Peer ranges include ESLint 10; upgrading the ESLint stack with everything else.' -ForegroundColor Green
        Write-IndentedCommandOutput { ncu --upgrade -x $ncuRejectNative }
    }
    elseif ($eslint10PeerOk -eq 1) {
        Write-Host "Peer ranges still exclude ESLint 10; pinning $eslintNcuReject and $betterSqlite3NcuReject" -ForegroundColor Yellow
        Write-IndentedCommandOutput { ncu --upgrade -x $ncuReject }
    }
    else {
        Write-Host "Could not verify peer ranges (offline or error). Pinning $ncuReject" -ForegroundColor Yellow
        Write-IndentedCommandOutput { ncu --upgrade -x $ncuReject }
    }

    if ($betterSqlite3CompatPrecheckOk -eq 0) {
        $betterSqlite3Version = (node (Join-Path $ScriptDir 'better-sqlite3-electron-compat.js') --print-version 2>$null).Trim()
        $electronLatest = (node (Join-Path $ScriptDir 'better-sqlite3-electron-compat.js') --print-electron 2>$null).Trim()
        Write-Host "Pinning better-sqlite3 ^$betterSqlite3Version for Electron $electronLatest (latest)." -ForegroundColor Green
        pnpm pkg set "devDependencies.electron=^$electronLatest" | Out-Null
        pnpm pkg set "dependencies.better-sqlite3=^$betterSqlite3Version" | Out-Null
    }
    elseif ($betterSqlite3CompatPrecheckOk -eq 1) {
        Write-Host 'No published better-sqlite3 supports the latest Electron yet; keeping current better-sqlite3 and Electron in package.json.' -ForegroundColor Red
        Write-Host 'Watch https://github.com/WiseLibs/better-sqlite3/issues/1474' -ForegroundColor Yellow
    }
    else {
        Write-Host 'Could not verify better-sqlite3/Electron compatibility (offline or error); keeping current better-sqlite3 and Electron.' -ForegroundColor Yellow
    }

    Write-Host '⬆️  Running pnpm install...' -ForegroundColor Blue
    Write-IndentedCommandOutput { pnpm install }

    Write-Host '🔍  Checking for vulnerabilities...' -ForegroundColor Blue
    Write-IndentedCommandOutput { pnpm audit }

    Write-Host '🔧  Fixing vulnerabilities...' -ForegroundColor Blue
    Write-IndentedCommandOutput { pnpm audit fix }

    Write-Host '🔍  Checking for vulnerabilities again...' -ForegroundColor Blue
    Write-IndentedCommandOutput { pnpm audit }
}

Invoke-TransrewrtUpgradeDependencies
