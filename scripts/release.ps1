<#
.SYNOPSIS
  Creates a GitHub release from the local CLI on Windows.

.DESCRIPTION
  Uses tag/title v<package.json version> and release notes from
  release-notes/RELEASE_NOTES_<version>.md.

  If the tag (or a GitHub release for it) already exists, it is removed and
  the tag is recreated at the current HEAD, then pushed — so you can fix a
  mistaken tag or re-run the release after new commits.

.PARAMETER DryRun
  Validate and print planned steps; no deletes, tag, push, or release.

.PARAMETER VerifyClean
  Require a clean git working tree (default: true).

.EXAMPLE
  .\scripts\release.ps1

.EXAMPLE
  .\scripts\release.ps1 -DryRun

.EXAMPLE
  .\scripts\release.ps1 -VerifyClean:$false
#>

[CmdletBinding()]
param(
    [switch] $DryRun,
    [bool] $VerifyClean = $true,
    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]] $RemainingArgs
)

$ErrorActionPreference = "Stop"
$ProjectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $ProjectRoot

function Show-ReleaseHelp {
    @"
Usage: .\scripts\release.ps1 [-DryRun] [-VerifyClean <bool>]
       .\scripts\release.ps1 [--dry-run] [--verify-clean=true|false]

Options:
  -DryRun, --dry-run            Validate and print planned steps; no deletes, tag, push, or release.
  -VerifyClean, --verify-clean  Require clean git working tree (default: true).

If tag v<version> or a GitHub release for it already exists, they are removed
and the tag is recreated at HEAD, then pushed to origin.
"@ | Write-Host
}

foreach ($arg in $RemainingArgs) {
    switch ($arg) {
        '--dry-run' { $DryRun = $true }
        '--verify-clean=false' { $VerifyClean = $false }
        '--verify-clean=true' { $VerifyClean = $true }
        '-h' {
            Show-ReleaseHelp
            exit 0
        }
        '--help' {
            Show-ReleaseHelp
            exit 0
        }
        default {
            Write-Error "Unknown argument: $arg"
            exit 1
        }
    }
}

function Test-RequiredCommand {
    param([Parameter(Mandatory = $true)][string] $Name)
    if (-not (Get-Command $Name -ErrorAction SilentlyContinue)) {
        Write-Error "Missing required command: $Name"
        exit 1
    }
}

function Invoke-Git {
    param([Parameter(Mandatory = $true)][string[]] $Args)
    & git @Args
    if ($LASTEXITCODE -ne 0) {
        Write-Error "git $($Args -join ' ') failed with exit code $LASTEXITCODE"
        exit 1
    }
}

function Invoke-Gh {
    param([Parameter(Mandatory = $true)][string[]] $Args)
    & gh @Args
    if ($LASTEXITCODE -ne 0) {
        Write-Error "gh $($Args -join ' ') failed with exit code $LASTEXITCODE"
        exit 1
    }
}

function Test-GitQuiet {
    param([Parameter(Mandatory = $true)][string[]] $Args)
    & git @Args 2>$null | Out-Null
    return $LASTEXITCODE -eq 0
}

function Test-GhQuiet {
    param([Parameter(Mandatory = $true)][string[]] $Args)
    & gh @Args 2>$null | Out-Null
    return $LASTEXITCODE -eq 0
}

Test-RequiredCommand gh
Test-RequiredCommand git
Test-RequiredCommand node

if (-not (Test-GitQuiet @('rev-parse', '--is-inside-work-tree'))) {
    Write-Error "Not inside a git repository."
    exit 1
}

if (-not (Test-GhQuiet @('auth', 'status'))) {
    Write-Error "GitHub CLI is not authenticated. Run: gh auth login"
    exit 1
}

$packageJsonPath = Join-Path $ProjectRoot "package.json"
if (-not (Test-Path $packageJsonPath)) {
    Write-Error "package.json not found in current directory."
    exit 1
}

$version = node -p "require('./package.json').version" 2>$null
if (-not $version) {
    Write-Error "Could not read package.json version."
    exit 1
}

$tag = "v$version"
$notesFile = "release-notes/RELEASE_NOTES_$version.md"

if (-not (Test-Path $notesFile)) {
    Write-Error "Release notes file not found: $notesFile"
    exit 1
}

if ($VerifyClean) {
    $status = git status --porcelain
    if ($status) {
        Write-Error "Working tree is not clean. Commit/stash changes or run with -VerifyClean:`$false"
        exit 1
    }
}

if (-not (Test-GitQuiet @('remote', 'get-url', 'origin'))) {
    Write-Error "Remote 'origin' not configured."
    exit 1
}

$headCommit = (git rev-parse HEAD).Trim()

function Test-RemoteTagExists {
    $result = git ls-remote origin "refs/tags/$tag" 2>$null
    return [bool]($result -match '\S')
}

function Test-LocalTagExists {
    return Test-GitQuiet @('rev-parse', '-q', '--verify', "refs/tags/$tag")
}

function Test-ReleaseExists {
    return Test-GhQuiet @('release', 'view', $tag)
}

function Invoke-RecreateTagAtHead {
    if ($DryRun) {
        Write-Host "[dry-run] HEAD commit: $headCommit"
        if (Test-ReleaseExists) {
            Write-Host "[dry-run] Would delete GitHub release: $tag"
        }
        if (Test-RemoteTagExists) {
            Write-Host "[dry-run] Would delete remote tag: origin $tag"
        }
        if (Test-LocalTagExists) {
            Write-Host "[dry-run] Would delete local tag: $tag"
        }
        Write-Host "[dry-run] Would create annotated tag $tag at HEAD and push to origin."
        return
    }

    if (Test-ReleaseExists) {
        Write-Host "Deleting existing GitHub release $tag (and its tag on the remote)..."
        Invoke-Gh @('release', 'delete', $tag, '--yes', '--cleanup-tag')
    }
    elseif (Test-RemoteTagExists) {
        Write-Host "Deleting remote tag $tag..."
        Invoke-Git @('push', 'origin', ":refs/tags/$tag")
    }

    if (Test-LocalTagExists) {
        Write-Host "Deleting local tag $tag..."
        Invoke-Git @('tag', '-d', $tag)
    }

    Write-Host "Creating annotated tag $tag at HEAD ($headCommit)..."
    Invoke-Git @('tag', '-a', $tag, '-m', "Release $tag", 'HEAD')

    Write-Host "Pushing tag $tag to origin..."
    Invoke-Git @('push', 'origin', "refs/tags/$tag")
}

Invoke-RecreateTagAtHead

Write-Host "Release inputs:"
Write-Host "  Tag:        $tag"
Write-Host "  Title:      $tag"
Write-Host "  Notes file: $notesFile"

if ($DryRun) {
    Write-Host "[dry-run] Would run:"
    Write-Host "  gh release create $tag --title $tag --notes-file $notesFile"
    exit 0
}

Invoke-Gh @('release', 'create', $tag, '--title', $tag, '--notes-file', $notesFile)
Write-Host "Release created successfully: $tag"

Write-Host ""
Write-Host "See the progress at the github repository https://github.com/wsj-br/transrewrt"
Write-Host ""
