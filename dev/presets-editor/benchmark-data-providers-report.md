# Benchmark data providers for Easy-mode AI Suggest — analysis and plan

Report on the data sources behind the deterministic shortlist in the presets editor's **AI Suggest** flow, the licensing problem with Artificial Analysis, and candidate providers that could replace or back it up.

> **Status:** The plan below is now implemented. Artificial Analysis is retired; the capability axis uses Arena AI Elo, speed uses OpenRouter endpoint performance, price falls back to models.dev, and translation quality stays on languagebench. See [`benchmark-scores.js`](benchmark-scores.js) and [`../ai-suggestion-model-selection.md`](../ai-suggestion-model-selection.md) for the live behaviour. This document is retained as the supporting analysis.

Related code: [`benchmark-scores.js`](benchmark-scores.js). Pipeline description: [`../ai-suggestion-model-selection.md`](../ai-suggestion-model-selection.md). Editor overview: [`README.md`](README.md).

---

## 1. What the current pipeline needs from a data provider

`benchmark-scores.js` scores every chat-compatible catalog model on four normalised axes, then keeps the top 4–5 per provider as a shortlist the LLM must pick from. Each axis comes from a specific source today:

| Scoring axis | Profile relevance | Current source | Fields consumed |
|--------------|-------------------|----------------|-----------------|
| **Quality** (translation) | standard, advanced | `languagebench` (fair-forward, Hugging Face Space) | mean `chrf` over `translation_from` / `translation_to` for UI languages |
| **Intelligence** | advanced, technical | Artificial Analysis Data API | `evaluations.artificial_analysis_intelligence_index` |
| **Price** | all (esp. standard, free) | Provider catalog pricing, AA + languagebench as fallback | `pricing.prompt` / `pricing.completion`, AA `price_1m_*`, LB `cost` |
| **Speed** | standard | Artificial Analysis | `median_output_tokens_per_second`, `median_time_to_first_token_seconds` |

Two more data paths already exist in the project and are **not** Artificial Analysis:

- **OpenRouter endpoint performance** ([`openRouterDiskCache.js`](openRouterDiskCache.js)) — per-model P90 latency/throughput, 6h TTL, feeds the picker and Performance page.
- **Live translate timing** ([`timingCache.js`](timingCache.js), [`translatePresetsBenchmark.js`](translatePresetsBenchmark.js)) — real end-to-end duration on a PT→EN sample, 2h TTL.

So the only axes that **depend** on Artificial Analysis are the **intelligence index** and the **speed** median. Price has fallbacks, quality comes from languagebench. Those two axes are what any replacement must cover.

---

## 2. The Artificial Analysis licensing problem

Confirmed against the [Data Platform Terms](https://artificialanalysiscdn.com/legal/ProDataPlatformTerms.pdf) and [Data API docs](https://artificialanalysis.ai/data-api/docs). The restrictions are material, not cosmetic:

**Free tier is "internal use only with attribution."** The only tier we could plausibly use (free, since we just need headline indices and medians) is explicitly limited to internal use. Redistribution is reserved for paid tiers.

**No structured/machine-readable reproduction.** Even the broadest free-tier allowance — "brief citations of individual Data points" — is conditioned on *not* reproducing data "in a structured, tabular, or machine-readable format." The current code caches the raw AA JSON snapshot into `presets-editor-benchmark-cache.json` and derives numeric scores from it. That is structured, machine-readable use.

**Section 2.5 is directly on point.** The terms forbid using the Data "to develop, operate, or improve any product or service made available to third parties whose primary purpose is benchmarking, ranking, comparison, competitive intelligence, or **model/provider selection guidance**." The Easy-mode AI Suggest flow is exactly model/provider selection guidance. Reproducing AA-derived rankings into shortlists also runs against the clause barring databases "substantially similar to any product or service offered by Company" and the ban on replicating their "scoring algorithms" or "index construction."

**Other constraints:** single named user per account, no credential sharing, no use of Data to train/improve models without consent, and the free tier is capped at 100 requests/day.

**Conclusion:** Artificial Analysis data is fine for a human reading charts and citing a number in a sentence. It is **not** a safe input to a component that ranks models and ships those rankings into a product. The current `ARTIFICIAL_INTELLIGENCE_API_KEY` path should be treated as a licensing liability and retired or replaced.

### Licensing of the current non-AA source

`languagebench` is **CC-BY-SA-4.0** (ShareAlike), accessed keyless from a Hugging Face Space. Attribution is already recorded in the cache payload. ShareAlike is a copyleft licence: acceptable for internal tooling, but if Transrewrt ever redistributed the derived shortlist data externally it would carry the same licence obligation. Worth a note, not a blocker.

---

## 3. Evaluation criteria for a replacement

Any candidate should be judged on:

1. **Licence** — permissive enough for internal use *and* for derived numbers to be embedded in a shipped product's selection logic. Prefer public-domain / CC-BY / MIT / Apache. Avoid ND, NC, or anti-competitive/"no selection guidance" clauses.
2. **Machine-readable access** — stable JSON endpoint or static file (not a scrape-a-rendered-page).
3. **Metric coverage** — must cover at least one of {intelligence/quality index, speed/latency}, ideally translation-specific quality.
4. **Model-id matchability** — ids resolvable to our provider catalog ids (the existing `normalizeMatchKey` fuzzy matcher and curated alias table).
5. **No API key / low friction** — the current languagebench path is keyless; simplicity matters for a dev tool.
6. **Freshness + stability** — documented refresh cadence, no obvious risk of vanishing.
7. **Cost** — ideally free.

---

## 4. Candidate providers

Grouped by the axis they would replace. Licence is the deciding filter.

### 4.1 Intelligence / general capability (replaces AA intelligence index)

| Provider | Access | Licence | Notes |
|----------|--------|---------|-------|
| **Arena AI / LMArena Elo** (formerly LMSYS Chatbot Arena) | No official API; community JSON snapshots exist | **CC-BY-4.0** (attribution) | Human-preference Elo — a strong, defensible "intelligence/preference" proxy. Snapshots: [`oolong-tea-2026/arena-ai-leaderboards`](https://github.com/oolong-tea-2026/arena-ai-leaderboards) (MIT wrapper, REST + raw GitHub JSON, daily) and [`api.wulong.dev`](https://api.wulong.dev/arena-ai-leaderboards/v1/leaderboard?name=text). Carries CC-BY attribution through. Best single substitute for an intelligence axis. |
| **AgentLeaderboards** | Static JSON, open CORS, no key | **Free for any use incl. commercial + AI training**, attribution required | Per-task routing picks + Pareto frontier; capability derives from Arena (CC-BY-4.0, carry attribution). Directly answers "which model at this budget." Good fit for a shortlist builder. |
| **BenchGecko** | Public JSON API, no key, CSV/GitHub datasets | **CC-BY-4.0** for self-measured data; aggregated scores keep original source licence | Models + prices + benchmark scores with per-score provenance and a ready-made citation string. Self-collected price history is clean CC-BY. |
| **llm.ing** | `/api/v1/leaderboard.json`, `/models.json` | Redistributable scores only (LMArena Elo **CC-BY-4.0**) | Explicitly separates redistributable vs non-redistributable scores — useful precedent for staying clean. Per-model pages include provider uptime/latency/throughput. |
| **LLM Registry** (`llm-registry.com`) | REST + static exports (JSON/CSV) | Data has per-source provenance; models.dev metadata is MIT | Normalised 0–100 scores across benchmarks, leaderboards by category. Aggregates AA "imported score overrides" — so filter to non-AA rows if used. |
| **HELM / Stanford CRFM** | Public GCS bucket (`gs://crfm-helm-public`), reproducible runs | Code **Apache-2.0**; results published for transparency/reuse | Rigorous, prompt-level transparent, includes multilinguality leaderboards (CLEVA, ThaiExam). Heavier to ingest; data format is HELM-specific. Best as a quality sanity-check, not a hot path. |
| **OpenRouter `models[].benchmarks`** | Included in the public **GET /v1/models** we already fetch | OpenRouter models data (freely published) | Third-party benchmark rankings surfaced directly on model records — zero new dependency. Coverage is opportunistic (omitted when no data). |

**Recommendation for the intelligence axis:** Arena Elo (via a maintained snapshot) as the primary, with OpenRouter's own `benchmarks` field as a cheap backfill. Both are licence-clean and either keyless or already authenticated.

### 4.2 Speed / latency / throughput (replaces AA medians)

| Provider | Access | Licence | Notes |
|----------|--------|---------|-------|
| **OpenRouter endpoint performance** | Already cached in `openRouterDiskCache.js`; models API supports `throughput-high-to-low` / `latency-low-to-high` sort (p50) | OpenRouter models data | **Already in the project.** P90 latency/throughput per model is exactly the speed signal, no new source needed. |
| **Live translate timing** | Already in `timingCache.js` | n/a (our own measurements) | Felt-latency ground truth for the standard profile; already overrides static order. |
| **models.dev** | `https://models.dev/api.json` | **MIT** | Specs + pricing + capabilities, but **no latency/throughput**. Not a speed source — see 4.3. |
| **llm.ing per-model pages** | JSON | Redistributable subset | Provider uptime/latency/throughput per model — secondary option. |

**Recommendation for the speed axis:** drop AA speed entirely. Use the OpenRouter endpoint performance we already cache, plus live timing. Both are licence-clean and better matched to *felt* latency than AA medians.

### 4.3 Pricing fallback (replaces AA `price_1m_*`)

| Provider | Access | Licence | Notes |
|----------|--------|---------|-------|
| **models.dev** | `api.json` / `catalog.json` / `models.json`, no key | **MIT** | Per-provider `cost.input` / `cost.output` / cache / reasoning, plus limits, modalities, capabilities, `open_weights`, `license`. Community-maintained (SST/OpenCode). **Cleanest pricing fallback available.** |
| **OpenRouter `pricing`** | Already fetched | OpenRouter models data | prompt/completion/cache/web_search per token, with conditional `overrides`. Already available. |
| **Provider catalogs** | Already primary source | Provider terms | Keep as first choice (already non-zero preferred). |

**Recommendation for pricing:** replace the AA price fallback with **models.dev (MIT)**, keeping provider catalogs first and OpenRouter pricing as a second fallback. All MIT / open.

### 4.4 Translation quality (the hard axis — currently languagebench)

languagebench is the only current source of translation-specific ChrF for frontier API models, and it is CC-BY-SA. Alternatives are mostly open-weight MT models, not hosted frontier models:

| Provider | Access | Licence | Notes |
|----------|--------|---------|-------|
| **languagebench (keep)** | Keyless HF Space JSON | **CC-BY-SA-4.0** | Still the best frontier-model translation signal. Keep; it is not the licensing problem. |
| **FLORES-200** (`facebook/flores`) | HF dataset | CC-BY-SA-4.0 (dataset) | Gold-standard parallel set (chrF++/spBLEU). But scores must be **produced by running models**, not looked up. Good for the live/eval harness, not a lookup feed. |
| **OPUS-MT / Helsinki-NLP Contributed MT leaderboard** | GitHub SQLite (`chrf_scores.db` etc.), plain-text score files | Open | Machine-readable chrF/BLEU/COMET per (model, langpair, testset). Covers **open MT models**, not hosted API models — limited overlap with our catalog. |
| **speakleash FLORES leaderboard** | HF Space `results.csv` | Public | European-language FLORES subset, chrF per pair. Narrow (Polish-centric). |
| **WMT Metrics / human evals** | Shared-task outputs | Varies | The pipeline doc already notes there is no stable machine-readable feed. Unchanged. |

**Recommendation for translation quality:** keep languagebench as the primary ChrF source (its licence is acceptable). If a permissive fallback is wanted for coverage gaps, add **FLORES-200 chrF** as a *self-measured* signal via the live/eval harness (own measurements have no third-party licence constraint) rather than scraping another leaderboard.

---

## 5. Recommended target stack (licence-clean)

Replacing Artificial Analysis with a layered, mostly-open stack — no new paid/keyed dependency required:

| Axis | Current | Proposed | Licence |
|------|---------|----------|---------|
| Translation quality | languagebench | **languagebench** (unchanged) + optional self-measured FLORES-200 | CC-BY-SA-4.0 / self-measured |
| Intelligence | Artificial Analysis | **Arena/LMArena Elo** (community snapshot) + OpenRouter `benchmarks` backfill | CC-BY-4.0 / OpenRouter |
| Speed | Artificial Analysis medians | **OpenRouter endpoint performance** (already cached) + live timing | OpenRouter / self-measured |
| Price | catalog → AA → LB | catalog → **models.dev** → OpenRouter pricing | MIT / OpenRouter |

This removes every Artificial Analysis dependency while keeping all four scoring axes covered. The intelligence axis is the only one that needs a genuinely new source; Arena Elo is the strongest licence-clean candidate and is well matched to "how good is this model in practice."

Secondary/backup candidates if Arena snapshots prove flaky: **AgentLeaderboards** (free for any use, attribution) or **BenchGecko** (CC-BY-4.0) for intelligence; **llm.ing** as a provenance-aware aggregator.

---

## 6. Plan (proposed phases — not implemented)

**Phase 0 — Decision & attribution policy.** Confirm the licence posture (internal-only vs. ever redistributing derived shortlists). This decides how strict the filter must be. Add a licence/attribution field to each cache source (languagebench is already recorded; extend to any new source) so provenance is auditable.

**Phase 1 — Replace the intelligence axis.** Add a small fetcher for an Arena/LMArena snapshot (e.g. `api.wulong.dev` text leaderboard or the GitHub JSON) into `ensureBenchmarkCache`, keyed into `aaByKeys`-style lookup via the existing `keysForBenchmarkId` matcher. Map Elo → the `intelligence` slot. Keep AA behind a flag until parity is confirmed.

**Phase 2 — Replace the AA speed/price fallbacks.** Feed speed from the existing `openRouterDiskCache.js` `performanceByPath` instead of AA medians. Replace the AA price fallback with models.dev `catalog.json` pricing (MIT). Update `enrichCatalogModels` accordingly.

**Phase 3 — Retire Artificial Analysis.** Remove `ARTIFICIAL_INTELLIGENCE_API_KEY`, the `AA_MODELS_URL` fetch, and the AA branch in the cache payload once Phases 1–2 are validated. Update prompts that reference "AA intelligence" (server.js) to the new source name. Update attribution strings.

**Phase 4 — Validation.** Diff shortlists before/after on a fixed preset set; confirm the standard/advanced/technical/free profiles still rank sensibly. Tune weights in `PROFILE_CONFIG` if the new intelligence scale (Elo ~1200–1500 vs AA index 0–100) needs renormalisation — note `scoreEnrichedList` normalises within the candidate pool, so only relative ordering matters and no absolute rescale should be needed.

**Phase 5 — Docs.** Update [`../ai-suggestion-model-selection.md`](../ai-suggestion-model-selection.md) data-sources table and the README environment-variable table (`ARTIFICIAL_INTELLIGENCE_API_KEY` row). Add a CHANGELOG entry under Unreleased (Changed) since this is a behavioural/config change, not docs-only.

### Risks / open questions

- **Arena Elo is a preference score, not translation quality.** It replaces "intelligence," not ChrF. Ensure profile weights don't conflate the two.
- **Snapshot stability.** Arena has no official API; the community wrappers are third-party. Pin to a specific endpoint and keep languagebench as the resilience floor.
- **Model-id matching.** New sources use different id conventions; extend `normalizeMatchKey` / `CURATED_BENCHMARK_TO_CATALOG` as needed. This is the recurring maintenance cost of every new source.
- **CC-BY attribution.** Arena-derived numbers need visible attribution if surfaced in UI; already the pattern for languagebench.
- **models.dev coverage.** Pricing is community-maintained; keep provider catalogs as the authoritative first choice (current behaviour already prefers non-zero catalog prices).

---

## 7. Summary

The current pipeline's only licensing liability is **Artificial Analysis** (free tier is internal-use-only, forbids structured/machine-readable reproduction, and §2.5 explicitly bars using the data for model/provider selection guidance — which is precisely this feature). `languagebench` (CC-BY-SA) is acceptable as-is.

Artificial Analysis supplies exactly two scoring axes: **intelligence** and **speed**. Both have licence-clean replacements already at hand or one dependency away:

- **Speed** and **price** can move to data we already fetch (OpenRouter endpoint performance + live timing) plus **models.dev (MIT)** — no AA needed at all.
- **Intelligence** should move to **Arena/LMArena Elo (CC-BY-4.0)** via a maintained JSON snapshot, with OpenRouter's own `benchmarks` field as a backfill.

This keeps every scoring axis covered, removes a restrictive-licence dependency, and requires no new API key. The work is a contained refactor of `benchmark-scores.js` (enrichment + cache payload) plus prompt/attribution/doc updates, sequenced in the phases above.
