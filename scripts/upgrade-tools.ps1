# upgrade-tools.ps1
#
# This script upgrades the development tools (Node.js via nvm, and global npm packages)
# to the latest versions.
#
# TRANSREWRT_UPGRADE_TOOLS_SUPPRESS_DONE=1 — skip the trailing "Done." (used when
# upgrade-dependencies.ps1 dot-sources this script).
# TRANSREWRT_UPGRADE_TOOLS_EMBEDDED=1 — nvm tip references upgrade-dependencies.ps1
# and uses $TransrewrtUpgradeDotSourced from the parent script when present.
#

function Resolve-NvmLtsNodeVersion {
    param([string] $InstallOut)

    if ($InstallOut -match 'nvm use (\d+\.\d+\.\d+)') {
        return $Matches[1]
    }
    if ($InstallOut -match 'Now using node v(\d+\.\d+\.\d+)') {
        return $Matches[1]
    }

    $nvmList = (nvm list 2>&1 | Out-String)

    if ($nvmList -match 'default ->') {
        if ($nvmList -match '\(-> v(\d+\.\d+\.\d+)\)') {
            return $Matches[1]
        }
    }
    if ($nvmList -match '(?m)^\s*->\s+v(\d+\.\d+\.\d+)') {
        return $Matches[1]
    }
    if ($nvmList -match '\*\s*(\d+\.\d+\.\d+)') {
        return $Matches[1]
    }

    $cur = (nvm current 2>&1 | Out-String).Trim()
    if ($cur -and $cur -ne 'system' -and $cur -ne 'none') {
        return ($cur -replace '^v', '')
    }

    return $null
}

$__trPrevEap = $ErrorActionPreference
try {
    $ErrorActionPreference = 'Stop'

    Write-Host ''
    Write-Host '--------------------------------'
    Write-Host '🔄 Upgrading tools '
    Write-Host '--------------------------------'

    $nvmDir = if ($env:NVM_DIR) { $env:NVM_DIR } else { Join-Path $HOME '.nvm' }
    if ((Test-Path -LiteralPath (Join-Path $nvmDir '.git') -PathType Container)) {
        Write-Host 'Upgrading nvm to the latest release...' -ForegroundColor Blue
        Push-Location $nvmDir
        try {
            git fetch -q --tags origin
            $tag = git describe --abbrev=0 --tags --match 'v[0-9]*' "$(git rev-list --tags --max-count=1)"
            if ($LASTEXITCODE -eq 0 -and $tag) {
                git checkout -q $tag
            }
        }
        finally {
            Pop-Location
        }
    }

    if (Get-Command nvm -ErrorAction SilentlyContinue) {
        Write-Host '🔄  Upgrading Node.js to the latest LTS version...' -ForegroundColor Blue
        $installOut = (nvm install lts 2>&1 | Out-String).Trim()
        Write-Host $installOut
        $nodeVer = Resolve-NvmLtsNodeVersion -InstallOut $installOut
        if ($nodeVer) {
            Write-Host "Using Node.js version $nodeVer" -ForegroundColor Green
            nvm use $nodeVer
        }
        else {
            Write-Host 'Could not parse installed LTS version; using nvm use lts' -ForegroundColor Yellow
            nvm use lts
        }
        $resolvedNodeVer = ((nvm current 2>&1 | Out-String).Trim() -replace '^v', '')
        if (-not $resolvedNodeVer -or $resolvedNodeVer -eq 'system') {
            $resolvedNodeVer = $nodeVer
        }

        $showNvmTip = $false
        if ($env:TRANSREWRT_UPGRADE_TOOLS_EMBEDDED -eq '1') {
            $parentDotSourced = $false
            $ts = Get-Variable -Name TransrewrtUpgradeDotSourced -ErrorAction SilentlyContinue
            if ($null -ne $ts) {
                $parentDotSourced = [bool]$ts.Value
            }
            $showNvmTip = -not $parentDotSourced
        }
        else {
            $showNvmTip = ($MyInvocation.InvocationName -ne '.')
        }

        if ($showNvmTip -and $resolvedNodeVer -and $resolvedNodeVer -ne 'system') {
            $tipName = if ($env:TRANSREWRT_UPGRADE_TOOLS_EMBEDDED -eq '1') {
                'upgrade-dependencies.ps1'
            }
            else {
                'upgrade-tools.ps1'
            }
            $tipScript = Join-Path $PSScriptRoot $tipName
            Write-Host ''
            Write-Host 'Tip: This run was a separate process; your prompt may still show an older Node until you dot-source the upgrade script so nvm runs in this shell:' -ForegroundColor Yellow
            Write-Host "  . `"$tipScript`"" -ForegroundColor Green
        }
    }
    else {
        Write-Host 'nvm not found. Install nvm-windows (https://github.com/coreybutler/nvm-windows) to upgrade Node.js, or skip this step.' -ForegroundColor Yellow
    }

    Write-Host '🔄  Ensure pnpm, npm-check-updates and doctoc are installed and in the latest version...' -ForegroundColor Blue
    npm install -g pnpm npm-check-updates doctoc

    if (-not $env:TRANSREWRT_UPGRADE_TOOLS_SUPPRESS_DONE) {
        Write-Host ''
        Write-Host 'Done.'
    }
}
finally {
    $ErrorActionPreference = $__trPrevEap
}
