# Load .env and .env.local from the current (or given) directory into the process environment.

# Prints one direnv-style line listing exported names only: Load-DotEnv: export +VAR …

# Usage: . .\scripts\Load-DotEnv.ps1   (dot-source from repo root)

#    or: Load-DotEnv; Load-DotEnv -Path C:\path\to\project

param([string]$Path = (Get-Location).Path)

$dir = if (Test-Path $Path -PathType Container) { $Path } else { Split-Path $Path -Parent }
$envFile = Join-Path $dir '.env'
$envLocalFile = Join-Path $dir '.env.local'

function Read-DotEnvFile {
    param([string]$FilePath)
    $keys = [System.Collections.Generic.List[string]]::new()
    if (-not (Test-Path $FilePath)) { return , @() }
    Get-Content $FilePath -Encoding UTF8 | ForEach-Object {
        $line = $_.Trim()
        if ($line -and $line -notmatch '^\s*#') {
            # Strip leading "export " so bash-style export VAR=value works
            $line = $line -replace '^\s*export\s+', ''
            if ($line -match '^([^#=]+)=(.*)$') {
                $key = $matches[1].Trim()
                $value = $matches[2].Trim().Trim('"').Trim("'")
                [Environment]::SetEnvironmentVariable($key, $value, 'Process')
                [void]$keys.Add($key)
            }
        }
    }
    return , $keys.ToArray()
}

$keysEnv = Read-DotEnvFile -FilePath $envFile
$keysLocal = Read-DotEnvFile -FilePath $envLocalFile

# One-line summary (direnv-style): first .env keys in order, then .env.local keys not yet listed
$seen = [System.Collections.Generic.HashSet[string]]::new([StringComparer]::OrdinalIgnoreCase)
$ordered = [System.Collections.Generic.List[string]]::new()
foreach ($k in ($keysEnv + $keysLocal)) {
    if ($seen.Add($k)) {
        [void]$ordered.Add($k)
    }
}

if ($ordered.Count -gt 0) {
    $listed = ($ordered | ForEach-Object { "+$_" }) -join ' '
    Write-Host "Load-DotEnv: export $listed" -ForegroundColor DarkGray
}

