<p align="center">
  <img src="images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

# Skills model availability checker

Cron-friendly CLI that validates model ids in `[easy-mode-config/presets.json](../easy-mode-config/presets.json)`, replaces unavailable models via fuzzy matching, commits only that file to GitHub, and notifies via [NTFY](https://docs.ntfy.sh/).

## Quick start (development)

From the repository root:

```bash
# Preview against local presets.json (no git, no writes)
pnpm run presets-check -- --local --dry-run

# Apply locally (updates easy-mode-config/presets.json only; no git push)
pnpm run presets-check -- --local
```

Copy `[config.example.json](config.example.json)` to `config.json` and set `ntfy.topic` for notifications.

## Production install (isolated runtime)

Use a dedicated directory on the server so cron never touches your dev checkout:

```bash
# create the directory
sudo mkdir /opt/transrewrt-presets-check
# set the ownership to the current user
sudo chown $USER /opt/transrewrt-presets-check
# install the presets-check
pnpm run presets-check:install -- --target /opt/transrewrt-presets-check
```

This creates:

```
/opt/transrewrt-presets-check/
├── repo/           # shallow git clone (presets.json read/write)
├── lib/            # bundled checker + shared modules
├── config.json     # ntfy.topic, github.useSsh, …
├── .env            # secrets (create on server; not installed by default)
├── run.sh          # ssh-agent, source .env, run checker
└── package.json    # runtime deps (ai, @ai-sdk/openai-compatible)
```

On the server, create `.env` in the runtime root (export `PRESET_CHECK_NTFY_TOPIC`, `OPENROUTER_API_KEY`, and other provider keys). Set `"useSsh": true` in `config.json` for GitHub over SSH; `run.sh` starts `ssh-agent` and runs `ssh-add` on the deploy key (default `~/.ssh/id-git` — edit `run.sh` if your key path differs).

```bash
# Dry-run on server (.env supplies API keys and NTFY topic)
cd /opt/transrewrt-presets-check
PRESET_CHECK_DRY_RUN=1 ./run.sh
```

### Crontab example

```cron
0 6 * * * /opt/transrewrt-presets-check/run.sh >> /opt/transrewrt-presets-check/presets-check-cron.log 2>&1
```

Cron only needs to invoke `run.sh`; it sources `.env`, loads the SSH key, and exports `PRESET_CHECK_RUNTIME`. Provider API keys must be present in `.env` (or already exported). With `github.useSsh: true`, `GITHUB_TOKEN` is not used for push.

### Testing GitHub SSH

```bash
# 1. Auth check
ssh -T git@github.com

# 2. Fetch (read access)
cd /opt/transrewrt-presets-check/repo
git fetch origin main

# 3. Push test — sync first, then push
git fetch origin main
git reset --hard origin/main
git commit --allow-empty -m "test: ssh push from presets-check"
git push origin HEAD:main
git reset --hard origin/main   # undo local test commit after verifying push
```

A `fetch first` / `non-fast-forward` rejection means **SSH worked** but the clone was behind `main` — not an auth failure. Skill-check fetches at the start of each run and rebases before push.

## Behaviour

1. **Fetch** latest `main` into the isolated clone (`git fetch` + `reset --hard origin/main`)
2. **Refresh** provider catalogs (OpenRouter is public; other engines need API keys)
3. **Sanity-check** each catalog against the last good model count (`catalog-sanity.json`). A configured engine with an empty list, or a list under half the last good count, is **suspect**: that engine is skipped and the run alerts. Delete `catalog-sanity.json` to reset the baseline after a real catalog shrink.
4. **Check** preset `model_ids` and `fallback_ids`, plus top-level `translation_model`, `translation_model_fallback`, `suggestion_model`, and `suggestion_model_fallback`
5. **Replace** unavailable preset ids with no LLM call, in this order:
   - same-family successor on the benchmark scored list (above the profile quality floor)
   - benchmark shortlist rank for that preset’s profile (languagebench ChrF, Arena Score, catalog/models.dev price, optional OpenRouter speed)
   - guarded fuzzy match (minimum score 0.55) when the shortlist is missing or empty
6. **Keep** a free preset (`free-router`) on zero-price ids, keep primary and fallback distinct, and reject a candidate whose blended price is more than `maxPriceRatio` times the old model’s price when that price is known
7. **Smoke-test** each chosen replacement with one tiny translate when that provider’s API key is set (`verifyReplacements`, including dry-run). A failure tries the next candidate. `--no-verify` skips this.
8. **Stop** without writing if a run would change more than `maxReplacementsPerRun` ids (default 6) or more than `maxReplacementsPerEngine` on one provider (default 3)
9. **Write** updated `presets.json`, bump patch `version` (major.minor aligned with the app version) and `updated_at`, then re-read the file before commit
10. **Commit + push** only `easy-mode-config/presets.json` (never `git add -A`), with a git timeout, rebase abort on failure, and one retry if the push is rejected
11. **Log** JSON-lines to `presets-check.log` (trimmed around 2 MB)
12. **Notify** once via NTFY with the run summary. Fatal errors notify too. Set `ntfy.heartbeat` to also notify when every id is fine.

Top-level translation and suggestion models are replaced only by a same-family successor (OpenRouter `~…-latest` aliases match the family stem). They are never swapped for an unrelated shortlist id.

Engines without a loaded catalog (missing API key) are **skipped**, not treated as unavailable. A pid lock (`presets-check.lock`) makes a second overlapping run exit without doing work.

Benchmark and timing caches in the installed runtime sit in the runtime root, outside the git clone. A local run reuses the presets editor’s benchmark cache at the repo root. Scoring code lives in `dev/presets-shared/` and is shared with the presets editor. See [AI Suggestion model selection](../ai-suggestion-model-selection.md).

## CLI options


| Flag              | Description                                           |
| ----------------- | ----------------------------------------------------- |
| `--dry-run`       | Check and notify only; no file write or git push      |
| `--local`         | Use monorepo `easy-mode-config/presets.json`; skip git |
| `--config <path>` | Config JSON path                                      |
| `--explain`       | Print candidates, scores, and the chosen source       |
| `--preset <id>`   | Check one preset (repeatable). Skips top-level fields |
| `--engine <id>`   | Check one provider (repeatable)                       |
| `--no-benchmark`  | Guarded fuzzy match only; do not load benchmark data  |
| `--no-verify`     | Do not smoke-test replacement ids                     |


## Environment


| Variable                  | Purpose                                                                   |
| ------------------------- | ------------------------------------------------------------------------- |
| `PRESET_CHECK_RUNTIME`     | Installed runtime root (set by `run.sh`)                                  |
| `PRESET_CHECK_DRY_RUN`     | `1` = dry-run                                                             |
| `PRESET_CHECK_NTFY_TOPIC`  | NTFY topic                                                                |
| `PRESET_CHECK_NTFY_SERVER` | Default `https://ntfy.sh`                                                 |
| `PRESET_CHECK_NTFY_TOKEN`  | Optional NTFY auth                                                        |
| `GITHUB_TOKEN`            | PAT for git push (HTTPS mode only; not used when `github.useSsh` is true) |
| `OPENROUTER_API_KEY`, …   | Same as main app / presets editor. Needed to smoke-test that provider. Benchmark sources themselves are keyless. |

### Config keys

| Key | Default | Purpose |
| --- | ------- | ------- |
| `minMatchScore` | `0.55` | Minimum fuzzy score |
| `maxPriceRatio` | `3` | Reject a replacement costing more than this times the old model, when the old price is known |
| `maxReplacementsPerRun` | `6` | Circuit breaker for the whole run |
| `maxReplacementsPerEngine` | `3` | Circuit breaker for one provider |
| `catalogShrinkRatio` | `0.5` | Suspect a catalog smaller than this fraction of the last good count |
| `verifyReplacements` | `true` | Smoke-test replacements when an API key is set |
| `openRouterSpeed` | `false` | Use `presets-editor-openrouter-cache.json` for the speed axis when that file already exists |
| `gitTimeoutMs` | `120000` | Timeout for each git command |
| `ntfy.heartbeat` | `false` | Notify when every checked id is available |


## Exit codes


| Code | Meaning                                                                         |
| ---- | ------------------------------------------------------------------------------- |
| `0`  | All models available, or all replacements applied (and pushed when not dry-run) |
| `1`  | Unresolved model(s), catalog/git push failure, or fatal error                   |


## Upgrade installed runtime

```bash
pnpm run presets-check:install -- --target /opt/transrewrt-presets-check --force
```

Refreshes `lib/` from the current checkout; existing `config.json`, `run.sh`, and `repo/` are preserved.