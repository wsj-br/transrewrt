#!/usr/bin/env bash
# Trigger a GitHub Actions deploy of website/ to GitHub Pages (no app release required).
#
# The workflow builds whatever is already on the remote ref — local edits are never
# uploaded. This script refuses to dispatch when website/ has uncommitted changes
# (or, by default, when the publish ref has local commits not yet pushed).
#
# Usage (from website/ or repo root via pnpm website:publish):
#   ./scripts/publish-pages.sh
#   ./scripts/publish-pages.sh --ref main
#   ./scripts/publish-pages.sh --dry-run
#   ./scripts/publish-pages.sh --watch
#   ./scripts/publish-pages.sh --allow-dirty
#
# Prerequisites: gh auth, push access; repo Settings → Pages → Source = GitHub Actions.

set -euo pipefail

WORKFLOW="website-pages.yml"
REF=""
DRY_RUN=false
WATCH=false
ALLOW_DIRTY=false

usage() {
  cat <<'EOF'
Usage: ./scripts/publish-pages.sh [--ref <branch|sha|tag>] [--watch] [--dry-run] [--allow-dirty]

Triggers the "Deploy website (GitHub Pages)" workflow on GitHub Actions.

The workflow builds the remote git ref (not your working tree). By default this
script aborts if website/ has uncommitted changes, or if the publish branch has
local commits that are not pushed to origin yet.

Options:
  --ref <ref>     Git ref to build (default: the repo default branch).
  --watch         After dispatch, wait for the run and stream status (gh run watch).
  --dry-run       Validate checks and print the gh command; do not dispatch.
  --allow-dirty   Skip the clean-tree / unpushed-commit checks (not recommended).
  -h, --help      Show this help.
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --) shift ;; # tolerate pnpm/npm `--` passthrough
    --ref)
      [[ $# -ge 2 ]] || { echo "Error: --ref requires a value" >&2; exit 1; }
      REF="$2"
      shift 2
      ;;
    --watch) WATCH=true; shift ;;
    --dry-run) DRY_RUN=true; shift ;;
    --allow-dirty) ALLOW_DIRTY=true; shift ;;
    -h|--help) usage; exit 0 ;;
    *)
      echo "Unknown argument: $1" >&2
      usage >&2
      exit 1
      ;;
  esac
done

require_cmd() {
  command -v "$1" >/dev/null 2>&1 || {
    echo "Missing required command: $1" >&2
    exit 1
  }
}

fail() {
  echo "Error: $*" >&2
  exit 1
}

require_cmd gh
require_cmd git
gh auth status >/dev/null 2>&1 || {
  echo "GitHub CLI is not authenticated. Run: gh auth login" >&2
  exit 1
}

# Resolve repo from git remote so the script works from website/ or any cwd in the clone.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/../.." && pwd)"
cd "$REPO_ROOT"

git rev-parse --is-inside-work-tree >/dev/null 2>&1 || fail "Not inside a git repository."

if [[ "$ALLOW_DIRTY" != "true" ]]; then
  # Staged, unstaged, and untracked under website/ — Actions never sees these.
  WEBSITE_DIRTY="$(git status --porcelain --untracked-files=normal -- website/)"
  if [[ -n "$WEBSITE_DIRTY" ]]; then
    echo "Error: website/ has uncommitted changes. GitHub Pages builds the remote" >&2
    echo "ref only — commit (and push) these first, or pass --allow-dirty to override." >&2
    echo "" >&2
    echo "$WEBSITE_DIRTY" >&2
    exit 1
  fi

  # If publishing a branch (or the default branch), require local commits to be pushed.
  PUBLISH_REF="$REF"
  if [[ -z "$PUBLISH_REF" ]]; then
    PUBLISH_REF="$(git symbolic-ref -q --short refs/remotes/origin/HEAD 2>/dev/null | sed 's#^origin/##' || true)"
    if [[ -z "$PUBLISH_REF" ]]; then
      PUBLISH_REF="$(gh repo view --json defaultBranchRef --jq '.defaultBranchRef.name' 2>/dev/null || true)"
    fi
    [[ -n "$PUBLISH_REF" ]] || fail "Could not resolve the default branch; pass --ref explicitly."
  fi

  # Only compare ahead/behind when the ref looks like a branch we have locally.
  if git show-ref --verify --quiet "refs/heads/${PUBLISH_REF}"; then
    UPSTREAM="origin/${PUBLISH_REF}"
    if git show-ref --verify --quiet "refs/remotes/${UPSTREAM}"; then
      AHEAD="$(git rev-list --count "${UPSTREAM}..${PUBLISH_REF}" 2>/dev/null || echo 0)"
      if [[ "${AHEAD:-0}" -gt 0 ]]; then
        fail "Branch '${PUBLISH_REF}' is ${AHEAD} commit(s) ahead of ${UPSTREAM}. Push before publishing (or pass --allow-dirty)."
      fi
    else
      echo "Warning: no remote-tracking branch ${UPSTREAM}; cannot verify push state." >&2
    fi
  fi
fi

CMD=(gh workflow run "$WORKFLOW")
if [[ -n "$REF" ]]; then
  CMD+=(--ref "$REF")
fi

echo "Dispatching ${WORKFLOW}${REF:+ (ref: ${REF})}…"
if [[ "$DRY_RUN" == "true" ]]; then
  printf '[dry-run]'
  printf ' %q' "${CMD[@]}"
  echo
  exit 0
fi

"${CMD[@]}"

echo "Workflow dispatched. Track progress:"
echo "  https://github.com/wsj-br/transrewrt/actions/workflows/${WORKFLOW}"
echo "Site (after deploy): https://wsj-br.github.io/transrewrt/"

if [[ "$WATCH" == "true" ]]; then
  echo "Waiting for the new run…"
  # Give GitHub a moment to register the run, then watch the latest for this workflow.
  sleep 3
  RUN_ID="$(gh run list --workflow "$WORKFLOW" --limit 1 --json databaseId --jq '.[0].databaseId')"
  if [[ -z "${RUN_ID:-}" || "$RUN_ID" == "null" ]]; then
    echo "Could not resolve the new run id; open the Actions URL above." >&2
    exit 1
  fi
  gh run watch "$RUN_ID"
fi
