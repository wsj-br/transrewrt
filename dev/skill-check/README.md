# Skills model availability checker

Cron-friendly CLI that validates model ids in [`easy-mode-config/skills.json`](../easy-mode-config/skills.json), replaces unavailable models via fuzzy matching, commits only that file to GitHub, and notifies via [NTFY](https://docs.ntfy.sh/).

## Quick start (development)

From the repository root:

```bash
# Preview against local skills.json (no git, no writes)
pnpm run skill-check -- --local --dry-run

# Apply locally (updates easy-mode-config/skills.json only; no git push)
pnpm run skill-check -- --local
```

Copy [`config.example.json`](config.example.json) to `config.json` and set `ntfy.topic` for notifications.

## Production install (isolated runtime)

Use a dedicated directory on the server so cron never touches your dev checkout:

```bash
pnpm run skill-check:install -- --target /opt/transrewrt-skill-check
```

This creates:

```
/opt/transrewrt-skill-check/
├── repo/           # shallow git clone (skills.json read/write)
├── lib/            # bundled checker + shared modules
├── config.json     # edit ntfy.topic, github settings
├── run.sh          # wrapper (sets SKILL_CHECK_RUNTIME)
└── package.json    # runtime deps (multi-llm-ts)
```

Configure secrets (PAT, NTFY topic, provider API keys) via environment or `/etc/transrewrt-skill-check.env` sourced by cron.

```bash
# Dry-run on server
cd /opt/transrewrt-skill-check
SKILL_CHECK_DRY_RUN=1 GITHUB_TOKEN=ghp_… SKILL_CHECK_NTFY_TOPIC=my-topic OPENROUTER_API_KEY=sk-or-… ./run.sh
```

### Crontab example

```cron
0 6 * * * /opt/transrewrt-skill-check/run.sh >> /opt/transrewrt-skill-check/skill-check-cron.log 2>&1
```

Ensure `GITHUB_TOKEN` (contents write on the repo) and provider keys are available in the cron environment.

## Behaviour

1. **Fetch** latest `main` into the isolated clone (`git fetch` + `reset --hard origin/main`)
2. **Refresh** provider catalogs (OpenRouter is public; other engines need API keys)
3. **Check** all `model_ids` per skill plus top-level `translation_model`, `suggestion_model`, etc.
4. **Replace** unavailable ids with the best fuzzy match (same engine, min score 0.55 by default)
5. **Write** updated `skills.json`, bump patch `version` and `updated_at`
6. **Commit + push** only `easy-mode-config/skills.json` (never `git add -A`)
7. **Log** JSON-lines to `skill-check.log`
8. **Notify** via NTFY for each replacement and each unresolved failure

Engines without a loaded catalog (missing API key) are **skipped**, not treated as unavailable.

## CLI options

| Flag | Description |
|------|-------------|
| `--dry-run` | Check and notify only; no file write or git push |
| `--local` | Use monorepo `easy-mode-config/skills.json`; skip git |
| `--config <path>` | Config JSON path |

## Environment

| Variable | Purpose |
|----------|---------|
| `SKILL_CHECK_RUNTIME` | Installed runtime root (set by `run.sh`) |
| `SKILL_CHECK_DRY_RUN` | `1` = dry-run |
| `SKILL_CHECK_NTFY_TOPIC` | NTFY topic |
| `SKILL_CHECK_NTFY_SERVER` | Default `https://ntfy.sh` |
| `SKILL_CHECK_NTFY_TOKEN` | Optional NTFY auth |
| `GITHUB_TOKEN` | PAT for git push |
| `OPENROUTER_API_KEY`, … | Same as main app / skills editor |

## Exit codes

| Code | Meaning |
|------|---------|
| `0` | All models available, or all replacements applied (and pushed when not dry-run) |
| `1` | Unresolved model(s), catalog/git push failure, or fatal error |

## Upgrade installed runtime

```bash
pnpm run skill-check:install -- --target /opt/transrewrt-skill-check --force
```

Refreshes `lib/` from the current checkout; existing `config.json` and `repo/` clone are preserved unless you remove them manually.
