# AI Suggestion model selection (Easy-mode presets)

This document explains how the **presets editor** chooses suggested primary and fallback models for Easy-mode presets. It is aimed at humans who maintain presets or tune selection behaviour—not at end users of the Transrewrt app.

Related code lives under [`dev/presets-editor/`](presets-editor/). The editor itself is documented in [`presets-editor/README.md`](presets-editor/README.md).

---

## Why this exists

Easy-mode presets (`standard`, `advanced`, `technical`, …) each map **cloud providers** to a primary model and an optional fallback in [`easy-mode-config/presets.json`](../easy-mode-config/presets.json). Picking those by hand (or by asking an LLM with only vague guidelines) tends to:

- invent or mis-copy model ids
- ignore cost when quality is similar
- ignore real latency for “fast / standard” presets
- drift between runs

The current design is **hybrid**:

1. **Deterministic scoring** builds a short shortlist per provider from public benchmarks + catalog pricing.
2. For **standard / fast** presets, an optional **live timing** pass reorders that shortlist by real end-to-end translate time.
3. An **LLM** (OpenRouter, with web search) proposes primary/fallback **from the shortlist**.
4. The server **enforces** the shortlist (and live-timing winners) so a drifting LLM cannot pick arbitrary catalog ids.

`free-router` is never included in AI Suggestion.

---

## High-level flow

```text
┌─────────────────────────────────────────────────────────────────┐
│  UI: AI Suggestion                                               │
│  – pick suggestion_model (+ fallback)                            │
│  – select presets                                                │
│  – optional “Live timing for fast/standard”                      │
└────────────────────────────┬────────────────────────────────────┘
                             │ POST /api/presets/suggest-models?stream=1
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│  Prefetch provider catalogs (disk cache, 2h TTL)                 │
│  Warm benchmark scores cache (languagebench + Artificial Analysis)│
└────────────────────────────┬────────────────────────────────────┘
                             │ for each selected preset (concurrency 2)
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│  1. Resolve scoring profile (standard / advanced / technical / …)│
│  2. Score catalog models → shortlist (top ~4–5 per provider)     │
│  3. If standard + live timing on:                                │
│       time top 4 candidates (2h timing cache) → pick 2 fastest   │
│  4. Call LLM with shortlist evidence + full catalogs             │
│  5. Parse JSON → enforce shortlist / overlay live-timing picks   │
└────────────────────────────┬────────────────────────────────────┘
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│  UI review → Save to catalog (easy-mode-config/presets.json)     │
└─────────────────────────────────────────────────────────────────┘
```

Cancel mid-run aborts the HTTP stream; the server stops further live-timing and OpenRouter calls.

---

## Data sources

| Source | Role | Access | Cache |
|--------|------|--------|--------|
| **Provider catalogs** | Allowed model ids + per-token pricing when available | Provider APIs (keys in env) | `presets-editor-provider-catalogs.json` (2h) |
| **languagebench** ([fair-forward](https://huggingface.co/spaces/fair-forward/languagebench)) | Translation quality: mean **ChrF** over `translation_from` / `translation_to` for UI-related languages | Public Hugging Face Space JSON (no key) | Inside `presets-editor-benchmark-cache.json` (7d) |
| **Artificial Analysis** ([Data API](https://artificialanalysis.ai/api-reference)) | Intelligence index, tokens/s, time-to-first-token, fallback pricing | `ARTIFICIAL_INTELLIGENCE_API_KEY` | Same 7d benchmark cache |
| **Live translate timing** | Real end-to-end duration via the app’s `streamCompletion` path | Same provider keys as the app | `presets-editor-timing-cache.json` (2h) |

Attribution: languagebench is CC-BY-SA-4.0; Artificial Analysis requires attribution when using their free API data.

If Artificial Analysis is unavailable (missing key or fetch error), shortlists still build from languagebench + catalog pricing. If the whole benchmark cache fetch fails, suggestion falls back to the older catalog-only LLM behaviour (with a log warning).

---

## Scoring profiles

Each preset is mapped to a profile from its id / name / description keywords (`resolveProfile` in `benchmark-scores.js`).

| Profile | Typical presets | What we optimise for | Shortlist size | Live timing |
|---------|-----------------|----------------------|----------------|-------------|
| **standard** | `standard`, “fast”, “lightweight”, “cost-efficient” | Price + speed, quality above a floor | 4 | Yes (top 4 timed; 2 fastest become primary/fallback) |
| **advanced** | `advanced`, “quality”, “best”, “high-accuracy” | ChrF + AA intelligence | 5 | No |
| **technical** | `technical`, code/docs oriented | AA intelligence first, then ChrF | 5 | No |
| **free** | free / zero-cost wording | Zero-price catalog entries | 5 | No |

### Weights (summary)

- **standard**: quality 0.25, intelligence 0.10, price 0.30, speed 0.35; quality floor ≈ 85% of best ChrF in the candidate set (models without ChrF are deprioritised for translate-oriented profiles).
- **advanced**: quality 0.45, intelligence 0.35, price 0.15, speed 0.05.
- **technical**: quality 0.25, intelligence 0.50, price 0.15, speed 0.10.

Metrics are normalised within the provider’s candidate pool, then combined with those weights. Catalog blended price prefers real non-zero provider pricing; if the catalog reports `$0` for an unpriced SKU, Artificial Analysis / languagebench cost is used instead.

### Languages used for ChrF

Mean ChrF is restricted to BCP-47 codes that correspond to the app’s UI locales (`src/renderer/locales/ui-languages.json`), e.g. `en`, `es`, `pt`, `zh`, `ja`, …. That approximates languages Transrewrt users actually care about, rather than the full ~200-language languagebench set.

---

## Model id matching

Benchmark sources and provider catalogs do not share one id scheme. The scorer:

1. Normalises strings (strip engine prefix, dots↔dashes, date suffixes, AA effort suffixes, `x-ai`→`xai`, …).
2. Builds a match index from every **chat-compatible** catalog model (`isTransrewrtWorkflowModel`).
3. Maps languagebench / AA ids onto catalog ids; a small curated alias table covers awkward leftovers (e.g. DeepSeek date suffixes, some Grok / Haiku variants).

Only models that exist in that provider’s catalog shortlist are suggested. Embedding, moderation, TTS/STT (including Groq Orpheus), image/video specialty, prompt-guard, multi-agent, and similar non-chat SKUs are excluded so they never enter the shortlist or live-timing queue.

---

## Live timing (standard / fast)

When the UI option **Live timing for fast/standard presets** is on (default) and the preset profile is `standard`:

1. Take the top **4** shortlist models per **configured** provider (API key present).
2. For each candidate, run the same Portuguese→English translate sample as the Benchmark panel (`translatePresetsBenchmark.js`), measuring wall-clock `duration_ms`.
3. Prefer entries from `presets-editor-timing-cache.json` if younger than **2 hours** (same engine + model + sample/prompt fingerprint).
4. Rank successful runs by duration; **primary = fastest**, **fallback = second fastest**. Failed runs are disqualified (and cached as failures so terms-gated models are not retried every run).
5. Providers without a key keep the static shortlist order (no live call).

Measured duration and cost appear in the suggestion `reason` / `fallback_reason` strings when live timing wins.

**Note:** Some models reject a non-default `temperature`. Shared `streamCompletion` omits temperature for known GPT-5 / o-series and Claude 4.6+ families, and retries once without temperature if a provider still rejects it—so timing and app translates stay usable.

---

## LLM step

After the shortlist (and optional timing) is ready:

1. The user message includes Transrewrt context, the preset fields, **Benchmark evidence** (JSON shortlists with scores), catalog rules, and a capped catalog dump.
2. System prompt requires: if a provider has a shortlist, `model_id` / `fallback_model_id` must be exact shortlist ids; web search is only for tie-breaking / deprecation checks.
3. Primary suggestion model is `suggestion_model` from the catalog (must be OpenRouter). On failure, `suggestion_model_fallback` may retry without web search.
4. Response JSON is parsed and normalised to catalog ids.
5. `enforceShortlistOnSuggestions` replaces out-of-shortlist picks with rank #1 / #2.
6. If live timing produced winners for a provider, those **override** the LLM’s choice for that provider (reasons cite live duration).

Expected JSON shape (per provider):

```json
{
  "preset_id": "standard",
  "suggestions": {
    "google": {
      "model_id": "google/gemini-3.1-flash-lite",
      "reason": "…",
      "fallback_model_id": "google/gemini-2.5-flash-lite",
      "fallback_reason": "…"
    }
  }
}
```

(The editor also accepts `fallback_id` after normalisation.)

---

## Caches (repo root, gitignored)

| File | TTL | Contents |
|------|-----|----------|
| `presets-editor-provider-catalogs.json` | 2h | Per-engine model lists + pricing |
| `presets-editor-openrouter-cache.json` | 6h | OpenRouter models / endpoint performance (picker & Performance page) |
| `presets-editor-benchmark-cache.json` | 7d | languagebench results + models + Artificial Analysis snapshot |
| `presets-editor-timing-cache.json` | 2h | Per `(engine, model_id, sample fingerprint)` live-timing rows |

Delete a cache file (or wait for TTL) to force a refresh. Benchmark warm-up and timing hits/misses are logged on the AI Suggestion run page.

---

## Environment variables

| Variable | Required for AI Suggestion |
|----------|----------------------------|
| `OPENROUTER_API_KEY` | Yes (suggestion models + web search) |
| `ARTIFICIAL_INTELLIGENCE_API_KEY` | Recommended (AA intelligence/speed); optional |
| Per-provider keys (`OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `GOOGLE_API_KEY`, …) | Needed for that provider’s **live timing**; shortlists still build without them |

The presets-editor process reads **only** `process.env` (source `.env` in the shell before `pnpm run presets-editor`).

---

## UI walkthrough

1. **AI Suggestion** in the top bar → setup page.
2. Choose OpenRouter **suggestion model** and optional fallback; select presets; leave **Live timing** checked for standard/fast work.
3. **Continue** → run log streams NDJSON events (catalog load, shortlists, timing, LLM calls). **Cancel** aborts the run.
4. Review page: per preset / provider, accept suggested primary/fallback or keep current; **Save to catalog** writes `easy-mode-config/presets.json` (and the data mirror).

AI Suggestion does **not** change presets until you save from the review step.

---

## Design choices and limits

**Strengths**

- Quality-per-dollar is explicit (e.g. a Flash-class model can outrank a Pro-class model on the standard profile).
- Standard presets optimise for **felt** latency via live translate timing, not only AA tok/s.
- Catalog id enforcement avoids invented slugs.

**Limits**

- languagebench / AA coverage is incomplete; many catalog models have null ChrF or intelligence and rely on price/speed heuristics.
- Live timing uses one Portuguese→English sample; it is a latency proxy, not a full quality eval.
- WMT human evals and commercial scoreboards are **not** ingested (no stable machine-readable feed for this pipeline).
- Shortlist size and weights are constants in `benchmark-scores.js`—tune there if product priorities change.

---

## Key files

| Path | Role |
|------|------|
| [`dev/presets-editor/benchmark-scores.js`](presets-editor/benchmark-scores.js) | Fetch/cache benchmarks, profile scoring, shortlists, shortlist enforcement |
| [`dev/presets-editor/timingCache.js`](presets-editor/timingCache.js) | 2h live-timing disk cache |
| [`dev/presets-editor/translatePresetsBenchmark.js`](presets-editor/translatePresetsBenchmark.js) | Translate sample + candidate timing |
| [`dev/presets-editor/server.js`](presets-editor/server.js) | Suggest API, prompts, job orchestration, cancel, NDJSON stream |
| [`dev/presets-editor/public/app.js`](presets-editor/public/app.js) | Setup / run / review UI |
| [`src/shared/presetsProviderCatalog.js`](../src/shared/presetsProviderCatalog.js) | Chat-compatible model filter (`isTransrewrtWorkflowModel`) |
| [`src/shared/llm/index.js`](../src/shared/llm/index.js) | `streamCompletion` (temperature omit/retry used by timing) |
| [`easy-mode-config/presets.json`](../easy-mode-config/presets.json) | Saved Easy-mode presets |

---

## Operational tips

- Prefer **standard** live timing when changing default Easy models: cache makes a second pass cheap within two hours.
- After adding a new Easy preset type, extend `PROFILE_BY_PRESET` / keyword heuristics and weights in `benchmark-scores.js`.
- If a good model never appears, check: catalog membership, workflow filter, id aliasing, and whether languagebench/AA expose a matchable id.
- Cost of a full run: OpenRouter suggestion calls (± web search) plus, on cache miss, up to ~4 translate calls × number of keyed providers for each standard preset.