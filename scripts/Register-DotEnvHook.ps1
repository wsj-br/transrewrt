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

# AI-I18N-TOOLS alias
Set-Alias ai-i18n-tools ".\node_modules\.bin\ai-i18n-tools" -Scope Global -Force
Write-Host "ai-i18n-tools: alias registered" -ForegroundColor DarkGray
