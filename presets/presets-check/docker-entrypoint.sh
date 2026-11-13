#!/bin/sh
# Start the presets-check container.
# Default: supercronic runs node lib/check.js on PRESET_CHECK_CRON.
# One-shot: docker compose run --rm presets-check check --dry-run
set -eu

export PRESET_CHECK_RUNTIME="${PRESET_CHECK_RUNTIME:-/data}"
export PRESET_CHECK_LIB="${PRESET_CHECK_LIB:-/app/lib}"
export GIT_TERMINAL_PROMPT="${GIT_TERMINAL_PROMPT:-0}"
export PRESET_CHECK_GIT_NAME="${PRESET_CHECK_GIT_NAME:-presets-check}"
export PRESET_CHECK_GIT_EMAIL="${PRESET_CHECK_GIT_EMAIL:-presets-check@users.noreply.github.com}"
export PRESET_CHECK_CRON="${PRESET_CHECK_CRON:-0 6 * * *}"

# Required settings. Empty or whitespace-only values stop the container
# before any clone or check, so a half-configured env file cannot push.
trim() {
  printf '%s' "$1" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//'
}

GITHUB_TOKEN=$(trim "${GITHUB_TOKEN:-}")
PRESET_CHECK_NTFY_TOPIC=$(trim "${PRESET_CHECK_NTFY_TOPIC:-}")
export GITHUB_TOKEN PRESET_CHECK_NTFY_TOPIC

config_error=0
if [ -z "$GITHUB_TOKEN" ]; then
  echo "[presets-check] Missing required setting: GITHUB_TOKEN" >&2
  echo "[presets-check] Fine-grained personal access token with Contents read and write on wsj-br/transrewrt. Put it in presets-check.env." >&2
  config_error=1
fi
if [ -z "$PRESET_CHECK_NTFY_TOPIC" ]; then
  echo "[presets-check] Missing required setting: PRESET_CHECK_NTFY_TOPIC" >&2
  echo "[presets-check] ntfy topic that receives the run summary. Put it in presets-check.env." >&2
  config_error=1
fi
if [ "$config_error" -ne 0 ]; then
  echo "[presets-check] The checker will not run. Fix presets-check.env and start the container again." >&2
  exit 1
fi

mkdir -p "$PRESET_CHECK_RUNTIME"

if [ -n "${GITHUB_TOKEN:-}" ]; then
  export GIT_ASKPASS="${PRESET_CHECK_LIB}/git-askpass.sh"
fi

git config --global user.name "$PRESET_CHECK_GIT_NAME"
git config --global user.email "$PRESET_CHECK_GIT_EMAIL"
git config --global credential.helper ""
git config --global --unset-all safe.directory >/dev/null 2>&1 || true
git config --global --add safe.directory "$PRESET_CHECK_RUNTIME/repo"
git config --global --add safe.directory "*"

if [ ! -f "$PRESET_CHECK_RUNTIME/config.json" ]; then
  cp "$PRESET_CHECK_LIB/config.example.json" "$PRESET_CHECK_RUNTIME/config.json"
  echo "[presets-check] Created ${PRESET_CHECK_RUNTIME}/config.json"
fi

node "$PRESET_CHECK_LIB/prepareRuntime.js"

cmd="${1:-supercronic}"
if [ "$#" -gt 0 ]; then
  shift
fi

case "$cmd" in
  check)
    exec node "$PRESET_CHECK_LIB/check.js" "$@"
    ;;
  supercronic)
    cron="$PRESET_CHECK_CRON"
    case "$cron" in
      *$'\n'*|*$'\r'*)
        echo "[presets-check] PRESET_CHECK_CRON must be a single schedule, not a command" >&2
        exit 1
        ;;
    esac
    if printf '%s' "$cron" | grep -q '[;&|`$()]'; then
      echo "[presets-check] PRESET_CHECK_CRON must be a single schedule, not a command" >&2
      exit 1
    fi
    case "$cron" in
      @hourly|@daily|@weekly|@monthly|@yearly|@annually|@midnight) ;;
      *)
        count=0
        set -f
        for _field in $cron; do
          count=$((count + 1))
        done
        set +f
        if [ "$count" -ne 5 ]; then
          echo "[presets-check] PRESET_CHECK_CRON must be five fields (for example: 0 6 * * *) or a @nickname" >&2
          exit 1
        fi
        ;;
    esac
    crontab_path=/tmp/presets-check.crontab
    printf '%s\n%s node %s/check.js\n' \
      "# Presets-check schedule" \
      "$cron" \
      "$PRESET_CHECK_LIB" \
      > "$crontab_path"
    echo "[presets-check] Schedule: ${cron}"
    exec supercronic "$crontab_path"
    ;;
  *)
    echo "[presets-check] Unknown command: ${cmd} (expected supercronic or check)" >&2
    exit 1
    ;;
esac
