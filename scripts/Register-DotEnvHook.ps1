# Direnv-style hook: load .env when entering a directory that contains .env
# Add to your PowerShell profile: . $env:USERPROFILE\src\transrewrt\scripts\Register-DotEnvHook.ps1
# (Or copy the block below into $PROFILE.)

$script:__DotEnvLoadedFrom = $null
$script:__LoadDotEnvScript = Join-Path (Split-Path $PSScriptRoot -Parent) 'scripts\Load-DotEnv.ps1'

function global:__DotEnvPromptHook {
    $cur = (Get-Location).Path
    $hasEnv = Test-Path (Join-Path $cur '.env')
    if ($hasEnv -and $script:__DotEnvLoadedFrom -ne $cur) {
        & $script:__LoadDotEnvScript -Path $cur
        $script:__DotEnvLoadedFrom = $cur
    }
    if (-not $hasEnv) {
        $script:__DotEnvLoadedFrom = $null
    }
}

# Run before every prompt so that after you 'cd' into a project, .env is loaded
$existingPrompt = (Get-Item function:global:Prompt -ErrorAction SilentlyContinue).ScriptBlock
$alreadyHooked = $existingPrompt -and ($existingPrompt.ToString() -match '__DotEnvPromptHook')
if (-not $alreadyHooked) {
    $prevPrompt = $existingPrompt
    Set-Item function:global:Prompt -Value {
        __DotEnvPromptHook
        if ($prevPrompt) { & $prevPrompt } else { "PS $($executionContext.SessionState.Path.CurrentLocation)$('>' * ($nestedPromptLevel + 1)) " }
    } -Force
}

Write-Host "Load-DotEnv: hook registered" -ForegroundColor DarkGray

# Resolve `ai-i18n-tools` robustly from any cwd:
# 1) nearest ancestor `node_modules/.bin` shim (consumer installs like this repo)
# 2) nearest ancestor that is the ai-i18n-tools source package (pnpm does not
#    link a package's own bin into its own node_modules/.bin)
# 3) a real Application on PATH (global install), if any
# Prefer .cmd on Windows so PowerShell does not depend on the extensionless shim.
function global:Resolve-AiI18nToolsCommand {
    $dir = (Get-Location).Path
    while ($dir) {
        $binDir = Join-Path $dir 'node_modules\.bin'
        foreach ($name in @('ai-i18n-tools.cmd', 'ai-i18n-tools.ps1', 'ai-i18n-tools')) {
            $candidate = Join-Path $binDir $name
            if (Test-Path -LiteralPath $candidate) {
                return @{ Kind = 'shim'; Path = $candidate }
            }
        }

        $pkgJson = Join-Path $dir 'package.json'
        $entry = Join-Path $dir 'bin\ai-i18n-tools.mjs'
        if ((Test-Path -LiteralPath $entry) -and (Test-Path -LiteralPath $pkgJson)) {
            try {
                $pkgName = (Get-Content -LiteralPath $pkgJson -Raw -ErrorAction Stop | ConvertFrom-Json).name
                if ($pkgName -eq 'ai-i18n-tools') {
                    return @{ Kind = 'source'; Path = $entry }
                }
            } catch {
                # Ignore malformed/unreadable package.json and keep walking.
            }
        }

        $parent = Split-Path -Path $dir -Parent
        if (-not $parent -or $parent -eq $dir) { break }
        $dir = $parent
    }

    $onPath = Get-Command ai-i18n-tools -CommandType Application -ErrorAction SilentlyContinue |
        Select-Object -First 1
    if ($onPath) {
        return @{ Kind = 'path'; Path = $onPath.Source }
    }

    return $null
}

if (Test-Path Alias:ai-i18n-tools) {
    Remove-Item Alias:ai-i18n-tools -Force
}

function global:ai-i18n-tools {
    $resolved = Resolve-AiI18nToolsCommand
    if (-not $resolved) {
        Write-Error @"
ai-i18n-tools not found from '$((Get-Location).Path)'.
Install it in the current project (`pnpm add -D ai-i18n-tools`), run from a package that depends on it, or open the ai-i18n-tools source repo.
"@
        return
    }

    if ($resolved.Kind -eq 'source') {
        $node = Get-Command node -CommandType Application -ErrorAction SilentlyContinue
        if (-not $node) {
            Write-Error "Found ai-i18n-tools source entry at '$($resolved.Path)' but 'node' is not on PATH."
            return
        }
        & $node.Source $resolved.Path @args
        return
    }

    & $resolved.Path @args
}

Write-Host "ai-i18n-tools: command registered" -ForegroundColor DarkGray
