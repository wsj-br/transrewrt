<p align="center">
  <img src="../../images/transrewrt_banner.png" alt="Transrewrt Banner" />
</p>

# Presets model availability checker

`presets-check` validates the model IDs in [easy-mode-config/presets.json](../../easy-mode-config/presets.json) against live provider catalogs, keeps Easy-mode presets aligned with their deterministic benchmark ranking, commits and pushes `presets.json` updates to GitHub, and sends run summaries via [ntfy](https://docs.ntfy.sh/).

Choose how you want to run it:

- [Production install (standalone Docker server)](#production-install-standalone-docker-server) — deploy on any server with Docker installed (**no repository clone, Node.js, or `pnpm` needed on the host**).
- [Local development (from a repo checkout)](#local-development-from-a-repo-checkout) — test changes locally via `pnpm run presets-check` or build the Docker image from source.

---

## Production install (standalone Docker server)

In production, `presets-check` runs from the prebuilt image `ghcr.io/wsj-br/transrewrt-presets-check:latest` (amd64 & arm64) with [Supercronic](https://github.com/aptible/supercronic) as PID 1.

**You do not clone the Transrewrt repository on the server.** On first startup, the container automatically creates its own shallow git clone inside the `presets-check-data` Docker volume (`/data/repo`), alongside `/data/config.json`, caches, and logs. All you need on the host is Docker and a `presets-check.env` file.

Follow the steps below in order. On startup, the container validates `presets-check.env` — if `GITHUB_TOKEN` or `PRESET_CHECK_NTFY_TOPIC` is missing or blank, it prints an error and exits immediately without cloning or scheduling.

### Step 1: Create a GitHub fine-grained token

`presets-check` pushes commits over HTTPS using a fine-grained personal access token (separate from the GitHub Actions `GITHUB_TOKEN` used by CI workflows):

1. Open GitHub → **Profile picture** → **Settings** → **Access** → **Credentials** → **Fine-grained personal access tokens** ([github.com/settings/personal-access-tokens](https://github.com/settings/personal-access-tokens)), then click **Generate new token**.
2. Set **Repository access** to **Only select repositories** and choose `wsj-br/transrewrt`.
3. Under **Permissions** → **Repository permissions**, set **Contents** to **Read and write**.
4. Generate the token and copy the `github_pat_...` value.

Git reads this token on demand via `GIT_ASKPASS`, so it is never written into `.git/config`. The container always uses HTTPS (any `github.useSsh` setting in `config.json` is ignored).

### Step 2: Download the config files on your server

Create an empty directory on your server (for example `~/presets-check`) and download [docker-compose.yml](docker-compose.yml) and [docker.env.example](docker.env.example) directly from GitHub:

```bash
mkdir -p ~/presets-check && cd ~/presets-check

curl -fsSLO https://raw.githubusercontent.com/wsj-br/transrewrt/main/presets/presets-check/docker-compose.yml
curl -fsSL https://raw.githubusercontent.com/wsj-br/transrewrt/main/presets/presets-check/docker.env.example -o presets-check.env
chmod 600 presets-check.env
```

Open `presets-check.env` and fill in the required values plus any provider keys you want checked:

```dotenv
# Required — container exits immediately if either is empty
GITHUB_TOKEN=github_pat_...
PRESET_CHECK_NTFY_TOPIC=my-private-transrewrt-topic

# Optional — schedule and timezone
PRESET_CHECK_CRON=0 6 * * *
TZ=Europe/London

# Optional — provider API keys
OPENROUTER_API_KEY=sk-or-...
OPENAI_API_KEY=sk-...
```

#### Required variables

| Variable | Description |
| --- | --- |
| `GITHUB_TOKEN` | Fine-grained PAT from Step 1 (`Contents: Read and write` on `wsj-br/transrewrt`). |
| `PRESET_CHECK_NTFY_TOPIC` | [ntfy](https://docs.ntfy.sh/) topic that receives run summaries and failure alerts. Pick a long, unguessable name when using public `ntfy.sh`. |

#### Provider API keys (optional)

`presets-check` checks the 9 Easy-mode cloud providers. Leave any provider blank to skip it (skipped providers are not treated as errors):

| Variable | Provider | Role |
| --- | --- | --- |
| `OPENROUTER_API_KEY` | OpenRouter | Model catalog is public (checked even without a key). Setting the key enables live smoke-tests before replacing an OpenRouter model. |
| `OPENAI_API_KEY` | OpenAI | Fetches model catalog and smoke-tests replacements. |
| `ANTHROPIC_API_KEY` | Anthropic | Fetches model catalog and smoke-tests replacements. |
| `GOOGLE_API_KEY` | Google Gemini | Fetches model catalog and smoke-tests replacements. |
| `DEEPSEEK_API_KEY` | DeepSeek | Fetches model catalog and smoke-tests replacements. |
| `GROQ_API_KEY` | Groq | Fetches model catalog and smoke-tests replacements. |
| `MISTRAL_API_KEY` | Mistral | Fetches model catalog and smoke-tests replacements. |
| `XAI_API_KEY` | xAI | Fetches model catalog and smoke-tests replacements. |
| `CEREBRAS_API_KEY` | Cerebras | Fetches model catalog and smoke-tests replacements. |

#### Optional container settings

| Variable | Default | Description |
| --- | --- | --- |
| `PRESET_CHECK_CRON` | `0 6 * * *` | Cron schedule (5 fields, e.g. `0 6 * * *` for 06:00 daily, or `@daily`, `@hourly`, etc.) in the container's local timezone. |
| `TZ` | `Europe/London` | Timezone used by `PRESET_CHECK_CRON`. |
| `PRESET_CHECK_NTFY_SERVER` | `https://ntfy.sh` | ntfy server base URL. |
| `PRESET_CHECK_NTFY_TOKEN` | *(empty)* | Bearer token if your ntfy topic requires authentication. |
| `PRESET_CHECK_GIT_NAME` | `presets-check` | Git `user.name` on automated `presets.json` commits. |
| `PRESET_CHECK_GIT_EMAIL` | `presets-check@users.noreply.github.com` | Git `user.email` on automated `presets.json` commits. |
| `PRESET_CHECK_DRY_RUN` | *(unset)* | Set to `1` to force dry-run mode on scheduled runs (no file writes or pushes). |

### Step 3: Test with a one-shot dry-run

Still inside `~/presets-check`, pull the image and run a single dry-run before starting the background schedule. This verifies `presets-check.env`, clones the repo into `/data/repo`, checks your configured providers, and prints any proposed changes without writing or pushing `presets.json`:

```bash
docker compose pull
docker compose run --rm presets-check check --dry-run
```

### Step 4: Start, monitor, and upgrade

Start the background container:

```bash
docker compose up -d
```

Note: because `docker-compose.yml` uses `restart: unless-stopped`, if a required variable in `presets-check.env` is empty, the container logs `Missing required setting`, exits, and restarts with backoff until you fix `presets-check.env` and re-run `docker compose up -d`.

Day-to-day server commands (from `~/presets-check`):

```bash
# Follow container logs
docker compose logs -f

# Stop the container (keeps the presets-check-data volume)
docker compose down

# Upgrade to the latest published image (preserves /data/repo and /data/config.json)
docker compose pull && docker compose up -d
```

#### Alternative: plain `docker run` (without Docker Compose)

If you prefer not to use `docker-compose.yml`, you only need `presets-check.env`:

```bash
docker pull ghcr.io/wsj-br/transrewrt-presets-check:latest

# Dry-run once
docker run --rm \
  --env-file presets-check.env \
  -v presets-check-data:/data \
  ghcr.io/wsj-br/transrewrt-presets-check:latest check --dry-run

# Start background schedule
docker run -d \
  --name presets-check \
  --restart unless-stopped \
  --env-file presets-check.env \
  -v presets-check-data:/data \
  ghcr.io/wsj-br/transrewrt-presets-check:latest
```

---

## Local development (from a repo checkout)

### Run the CLI directly

From a local Transrewrt repository checkout, `pnpm run presets-check` passes `--local`: it reads [easy-mode-config/presets.json](../../easy-mode-config/presets.json) in your working tree, skips all `git` commands, and does not require `GITHUB_TOKEN` or `PRESET_CHECK_NTFY_TOPIC`.

Export any provider API keys in your shell before running (the local CLI reads `process.env` and does not load `.env` files):

```bash
# Preview changes against local easy-mode-config/presets.json (no writes)
pnpm run presets-check -- --dry-run

# Preview with candidate rankings and match scores
pnpm run presets-check -- --dry-run --explain

# Check a single provider or preset (repeatable)
pnpm run presets-check -- --dry-run --engine openrouter --preset standard

# Apply changes directly to local easy-mode-config/presets.json (no git commit/push)
pnpm run presets-check
```

Local files (all gitignored):

- **Optional local config**: you do not need a `config.json` for normal local runs (defaults come from [config.example.json](config.example.json)). Only copy it if you want to test ntfy notifications or tweak thresholds locally:
  ```bash
  cp presets/presets-check/config.example.json presets/presets-check/config.json
  ```
  *(Place this inside `presets/presets-check/`, not at the repository root — `<repo>/config.json` belongs to the main Transrewrt app.)*
- **Caches and logs**: `presets-model-benchmarks.json` (repo root), `presets/presets-check/provider-catalogs-cache.json`, `presets/presets-check/catalog-sanity.json`, and `presets/presets-check/presets-check.log`. Remove them anytime with `./scripts/clean-workspace.sh` or `.\scripts\clean-workspace.ps1`.

### Build and test the Docker image locally

To test [Dockerfile.presets-check](../../Dockerfile.presets-check) from your local checkout, use the root [docker-compose.presets-check.yml](../../docker-compose.presets-check.yml):

```bash
cp presets/presets-check/docker.env.example presets-check.env
# Edit presets-check.env (set GITHUB_TOKEN and PRESET_CHECK_NTFY_TOPIC)

pnpm docker:presets-check        # Build wsj-br/transrewrt-presets-check:devel
docker compose -f docker-compose.presets-check.yml run --rm presets-check check --dry-run
pnpm docker:presets-check:up     # Build and start in background
pnpm docker:presets-check:logs   # View logs
pnpm docker:presets-check:down   # Stop
```

---

## How it works

Each run executes the following pipeline (an active `presets-check.lock` PID file causes overlapping runs to exit cleanly):

1. **Sync repository** *(Docker/remote mode only)* — Fetches `origin/main` and resets `/data/repo` to match `origin/main`.
2. **Refresh provider catalogs** — Loads model lists from OpenRouter (public endpoint) and every Easy-mode provider with a configured API key.
3. **Catalog sanity check** — Compares each provider's model count against `catalog-sanity.json`. If a configured provider returns an empty list or drops below `catalogShrinkRatio` (`0.5` of its last good count), that provider is marked **suspect**, skipped, and flagged in the ntfy alert. *(Delete `catalog-sanity.json` to reset the baseline after a genuine provider catalog reduction.)*
4. **Select replacements** — Inspects each preset's `model_ids` and `fallback_ids`, plus top-level `translation_model` and `translation_model_fallback`:
   - **Preset slots**: Ranked deterministically by `presets/presets-shared/suggestModels.js` (languagebench ChrF + Arena score within each preset's blended `max_price` cap). Updates a slot when its model is unavailable, exceeds the price cap, or is overtaken by a higher-ranked scored model. `free-router` stays on zero-cost models, and primary/fallback IDs stay distinct.
   - **Fallback matching**: When `--no-benchmark` is passed or benchmark sources are unreachable, rank upgrades are skipped and only unavailable or over-cap slots are replaced via same-family successors or guarded fuzzy matching (`minMatchScore: 0.55`, bounded by `maxPriceRatio: 3`).
   - **Top-level translation models**: Replaced only with a same-family OpenRouter successor when unavailable.
5. **Smoke-test candidates** — When a slot changes and that provider's API key is set (`verifyReplacements: true`), sends a short test prompt (including during `--dry-run`). On failure, tries the next candidate or keeps the existing valid model.
6. **Circuit breaker** — Blocks fuzzy and same-family successor replacements if a single run would replace more than `maxReplacementsPerRun` (`6`) slots total or `maxReplacementsPerEngine` (`3`) on one provider. Deterministic benchmark rank updates are exempt from this cap.
7. **Write, push, and notify** — Updates `easy-mode-config/presets.json`, bumps its patch `version` and `updated_at`, stages *only* `easy-mode-config/presets.json`, rebases onto `origin/main` (retrying once if a concurrent push raced ahead), pushes, appends JSON-lines to `presets-check.log` (trimmed around 2 MB), and sends an ntfy notification when changes or warnings occur (or on every clean run when `ntfy.heartbeat` is `true`).

---

## Reference

### CLI flags

Pass flags after `--` when running `pnpm run presets-check`, or after `check` when running `docker compose run --rm presets-check check`:

| Flag | Description |
| --- | --- |
| `--dry-run` | Check, smoke-test, and notify only; never write `presets.json` or push to git. |
| `--local` | Read `<repo>/easy-mode-config/presets.json` and skip all git operations (included in `pnpm run presets-check`). |
| `--config <path>` | Override path to `config.json`. |
| `--explain` | Print candidate rankings, scores, and selection source for each checked slot. |
| `--preset <id>` | Check only the specified preset ID (repeatable). Skips top-level translation fields. |
| `--engine <id>` | Check only the specified provider ID, e.g. `openrouter` or `openai` (repeatable). |
| `--no-benchmark` | Skip benchmark ranking; replace unavailable models using guarded fuzzy matching only. |
| `--no-verify` | Skip live API smoke-tests on replacement candidates. |
| `--help`, `-h` | Print CLI usage help. |

### Advanced `config.json` keys

Non-secret thresholds live in `config.json`:

- **Docker**: created automatically at `/data/config.json` inside the `presets-check-data` volume on first start (secrets and ntfy topic in `presets-check.env` always take precedence).
- **Local dev**: optional at `presets/presets-check/config.json` (falls back to [config.example.json](config.example.json)).

| Key | Default | Description |
| --- | --- | --- |
| `minMatchScore` | `0.55` | Minimum similarity score for guarded fuzzy replacements. |
| `maxPriceRatio` | `3` | Maximum allowed price multiplier vs. the previous model during fuzzy replacement (when old price is known). |
| `verifyReplacements` | `true` | Smoke-test replacement candidates when that provider's API key is configured. |
| `maxReplacementsPerRun` | `6` | Circuit breaker cap for fuzzy/successor replacements across an entire run. |
| `maxReplacementsPerEngine` | `3` | Circuit breaker cap for fuzzy/successor replacements on a single provider. |
| `catalogShrinkRatio` | `0.5` | Mark a provider catalog suspect if its model count falls below this fraction of the last good count. |
| `gitTimeoutMs` | `120000` | Timeout in milliseconds per git command. |
| `github.owner` / `repo` / `branch` | `wsj-br` / `transrewrt` / `main` | Target GitHub repository and branch for remote git sync. |
| `github.commitMessagePrefix` | `chore(presets): auto-replace unavailable models` | Commit subject prefix (`[presets-check]` is appended). |
| `ntfy.priority` | `default` | ntfy message priority for normal replacement notifications (`high` is used automatically when attention is needed). |
| `ntfy.heartbeat` | `false` | Send an "ok" ntfy notification even when all checked models are healthy and unchanged. |

*(Internal runtime paths are controlled via `PRESET_CHECK_RUNTIME` for state and `PRESET_CHECK_LIB` for bundled code; both are preconfigured in `Dockerfile.presets-check`.)*

### Exit codes

| Code | Meaning |
| --- | --- |
| `0` | All checked models are valid, or all replacements succeeded (and were pushed when not in `--dry-run` / `--local` mode). |
| `1` | Unresolved model(s), suspect provider catalog, tripped circuit breaker, git/catalog failure, or missing required container env var. |

### Legacy host install (without Docker)

For servers that cannot run Docker, an isolated Node.js host installer is still available from a repository checkout:

```bash
pnpm run presets-check:install -- --target /opt/transrewrt-presets-check
# Refresh bundled code later while keeping existing config.json, run.sh, and repo/:
pnpm run presets-check:install -- --target /opt/transrewrt-presets-check --force
```
