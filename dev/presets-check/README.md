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
└── package.json    # runtime deps (multi-llm-ts)
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
3. **Check** all `model_ids` and `fallback_ids` per preset
4. **Replace** unavailable ids with the best fuzzy match (same engine, min score 0.55 by default)
5. **Write** updated `presets.json`, bump patch `version` and `updated_at`
6. **Commit + push** only `easy-mode-config/presets.json` (never `git add -A`)
7. **Log** JSON-lines to `presets-check.log`
8. **Notify** via NTFY for each replacement and each unresolved failure

Engines without a loaded catalog (missing API key) are **skipped**, not treated as unavailable.

## CLI options


| Flag              | Description                                           |
| ----------------- | ----------------------------------------------------- |
| `--dry-run`       | Check and notify only; no file write or git push      |
| `--local`         | Use monorepo `easy-mode-config/presets.json`; skip git |
| `--config <path>` | Config JSON path                                      |


## Environment


| Variable                  | Purpose                                                                   |
| ------------------------- | ------------------------------------------------------------------------- |
| `PRESET_CHECK_RUNTIME`     | Installed runtime root (set by `run.sh`)                                  |
| `PRESET_CHECK_DRY_RUN`     | `1` = dry-run                                                             |
| `PRESET_CHECK_NTFY_TOPIC`  | NTFY topic                                                                |
| `PRESET_CHECK_NTFY_SERVER` | Default `https://ntfy.sh`                                                 |
| `PRESET_CHECK_NTFY_TOKEN`  | Optional NTFY auth                                                        |
| `GITHUB_TOKEN`            | PAT for git push (HTTPS mode only; not used when `github.useSsh` is true) |
| `OPENROUTER_API_KEY`, …   | Same as main app / presets editor                                          |


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