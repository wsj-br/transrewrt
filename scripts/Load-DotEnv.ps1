# Load .env and .env.local from the current (or given) directory into the process environment.
# Usage: . .\scripts\Load-DotEnv.ps1   (dot-source from repo root)
#    or: Load-DotEnv; Load-DotEnv -Path C:\path\to\project
param([string]$Path = (Get-Location).Path)

$dir = if (Test-Path $Path -PathType Container) { $Path } else { Split-Path $Path -Parent }
$envFile = Join-Path $dir '.env'
$envLocalFile = Join-Path $dir '.env.local'

function Read-DotEnvFile {
    param([string]$FilePath)
    if (-not (Test-Path $FilePath)) { return }
    Get-Content $FilePath -Encoding UTF8 | ForEach-Object {
        $line = $_.Trim()
        if ($line -and $line -notmatch '^\s*#') {
            if ($line -match '^([^#=]+)=(.*)$') {
                $key = $matches[1].Trim()
                $value = $matches[2].Trim().Trim('"').Trim("'")
                [Environment]::SetEnvironmentVariable($key, $value, 'Process')
            }
        }
    }
}

Read-DotEnvFile -FilePath $envFile
Read-DotEnvFile -FilePath $envLocalFile
