const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const {
  normalizeSuggestion,
  rankEngineModels,
  selectSuggestRows,
  allowsScoreReplacement,
  isFreeRoute,
  catalogRatesPerMillion,
} = require("./suggestModels.js");

function bucket(score) {
  return { sum: score, n: 1 };
}

function benchmarksFor(specs) {
  const models = {};
  const arena = [];
  for (const spec of specs) {
    const chrfByBcp47 = {};
    for (const [code, score] of Object.entries(spec.chrfByLang || {})) {
      chrfByBcp47[code] = bucket(score);
    }
    models[spec.benchId] = { chrfByBcp47, cost: spec.lbCost ?? null };
    if (spec.arena != null) {
      arena.push({
        model: spec.arenaName || spec.benchId,
        vendor: spec.vendor || "",
        score: spec.arena,
        publishDate: null,
      });
    }
  }
  return {
    languagebench: { models },
    arena: { models: arena },
    modelsDev: { pricing: {} },
  };
}

function priced(id, perMillion) {
  const perToken = perMillion / 1_000_000;
  return { id, name: id, pricing: { prompt: String(perToken), completion: String(perToken) } };
}

const quality = normalizeSuggestion({ id: "advanced", suggestion: { profile: "quality" } });
const price = normalizeSuggestion({ id: "standard", suggestion: { profile: "price", max_price: 2 } });

describe("normalizeSuggestion", () => {
  it("defaults a paid preset to quality weights and no cap", () => {
    const suggestion = normalizeSuggestion({ id: "advanced" });
    assert.equal(suggestion.profile, "quality");
    assert.equal(suggestion.maxPrice, null);
    assert.equal(suggestion.chrf, 0.55);
    assert.equal(suggestion.arena, 0.45);
    assert.equal(suggestion.qualityFloor, 0.7);
    assert.equal(suggestion.minDelta, 1);
  });

  it("forces the free preset onto a zero cap", () => {
    const suggestion = normalizeSuggestion({ id: "free-router" });
    assert.equal(suggestion.profile, "free");
    assert.equal(suggestion.maxPrice, 0);
    assert.equal(suggestion.qualityFloor, 0);
  });

  it("renormalizes custom weights", () => {
    const suggestion = normalizeSuggestion({
      id: "technical",
      suggestion: { profile: "quality", chrf_weight: 0.25, arena_weight: 0.75, quality_floor: 0.65, max_price: 8 },
    });
    assert.equal(suggestion.chrf, 0.25);
    assert.equal(suggestion.arena, 0.75);
    assert.equal(suggestion.qualityFloor, 0.65);
    assert.equal(suggestion.maxPrice, 8);
  });
});

describe("rankEngineModels", () => {
  it("treats catalog rates as per-token and models.dev rates as per 1M", () => {
    const rates = catalogRatesPerMillion(priced("openai/alpha", 3));
    assert.equal(rates.input, 3);
    const benchmarks = benchmarksFor([{ benchId: "dev", chrfByLang: { en: 80 }, arena: 80, arenaName: "dev" }]);
    benchmarks.modelsDev.pricing = { dev: { input: 2, output: 2 } };
    const ranked = rankEngineModels({
      provider: "openai",
      catalog: [{ id: "openai/dev", name: "dev", pricing: { prompt: "0", completion: "0" } }],
      benchmarks,
      suggestion: quality,
      locales: ["en-GB"],
    });
    assert.equal(ranked[0].priceSource, "models.dev");
    assert.equal(ranked[0].inputPerMTokens, 2);
    assert.equal(ranked[0].blendedPerMTokens, 2);
  });

  it("puts a missing ChrF below the floor and keeps price out of the index", () => {
    const benchmarks = benchmarksFor([
      { benchId: "full", chrfByLang: { en: 100 }, arena: 100, arenaName: "full" },
      { benchId: "nochrf", chrfByLang: {}, arena: 100, arenaName: "nochrf" },
    ]);
    const ranked = rankEngineModels({
      provider: "openai",
      catalog: [priced("openai/full", 5), priced("openai/nochrf", 1)],
      benchmarks,
      suggestion: quality,
      locales: ["en-GB"],
    });
    const byId = Object.fromEntries(ranked.map((row) => [row.id, row]));
    assert.equal(byId["openai/full"].index, 100);
    assert.equal(byId["openai/full"].belowFloor, false);
    assert.equal(byId["openai/nochrf"].chrf, null);
    assert.equal(byId["openai/nochrf"].belowFloor, true);
    assert.ok(ranked[0].id === "openai/full");
  });

  it("breaks an equal index by the cheaper blended price", () => {
    const benchmarks = benchmarksFor([
      { benchId: "cheap", chrfByLang: { en: 90 }, arena: 80, arenaName: "cheap" },
      { benchId: "dear", chrfByLang: { en: 90 }, arena: 80, arenaName: "dear" },
    ]);
    const ranked = rankEngineModels({
      provider: "openai",
      catalog: [priced("openai/dear", 4), priced("openai/cheap", 1)],
      benchmarks,
      suggestion: quality,
      locales: ["en-GB"],
    });
    assert.equal(ranked[0].id, "openai/cheap");
    assert.equal(ranked[0].index, ranked[1].index);
    assert.equal(ranked[1].aliasOf, null);
  });

  it("marks a dated duplicate as an alias of the shorter undated id", () => {
    const benchmarks = benchmarksFor([
      { benchId: "gpt", chrfByLang: { en: 80 }, arena: 80, arenaName: "gpt" },
    ]);
    const ranked = rankEngineModels({
      provider: "openai",
      catalog: [priced("openai/gpt-20241022", 1), priced("openai/gpt", 1)],
      benchmarks,
      suggestion: quality,
      locales: ["en-GB"],
    });
    const dated = ranked.find((row) => row.id === "openai/gpt-20241022");
    assert.equal(dated.aliasOf, "openai/gpt");
    const kept = selectSuggestRows(ranked, { maxPrice: null, minDelta: 0 });
    assert.deepEqual(kept.map((row) => row.id), ["openai/gpt"]);
  });

  it("lists the cheapest frontier model first on the price profile", () => {
    const benchmarks = benchmarksFor([
      { benchId: "beta", chrfByLang: { en: 70 }, arena: 70, arenaName: "beta" },
      { benchId: "alpha", chrfByLang: { en: 100 }, arena: 100, arenaName: "alpha" },
    ]);
    const ranked = rankEngineModels({
      provider: "openai",
      catalog: [priced("openai/alpha", 6), priced("openai/beta", 1)],
      benchmarks,
      suggestion: price,
      locales: ["en-GB"],
    });
    assert.equal(ranked[0].id, "openai/beta");
    assert.equal(ranked.find((row) => row.id === "openai/alpha").frontierLayer, 1);
    assert.equal(ranked.find((row) => row.id === "openai/beta").frontierLayer, 1);
  });

  it("keeps frontier numbers when the cap hides the expensive tier-1 model", () => {
    const benchmarks = benchmarksFor([
      { benchId: "beta", chrfByLang: { en: 80 }, arena: 80, arenaName: "beta" },
      { benchId: "alpha", chrfByLang: { en: 100 }, arena: 100, arenaName: "alpha" },
    ]);
    const ranked = rankEngineModels({
      provider: "openai",
      catalog: [priced("openai/alpha", 6), priced("openai/beta", 1)],
      benchmarks,
      suggestion: price,
      locales: ["en-GB"],
    });
    const selected = selectSuggestRows(ranked, { maxPrice: 2, minDelta: 0 });
    assert.deepEqual(selected.map((row) => row.id), ["openai/beta", "openai/alpha"]);
    assert.equal(ranked.find((row) => row.id === "openai/alpha").frontierLayer, 1);
  });

  it("skips a fallback whose index is inside min_delta", () => {
    const benchmarks = benchmarksFor([
      { benchId: "a", chrfByLang: { en: 100 }, arena: 100, arenaName: "a" },
      { benchId: "b", chrfByLang: { en: 99 }, arena: 99, arenaName: "b" },
      { benchId: "c", chrfByLang: { en: 70 }, arena: 70, arenaName: "c" },
    ]);
    const suggestion = normalizeSuggestion({
      id: "advanced",
      suggestion: { profile: "quality", min_delta: 5 },
    });
    const ranked = rankEngineModels({
      provider: "openai",
      catalog: [priced("openai/a", 1), priced("openai/b", 1), priced("openai/c", 1)],
      benchmarks,
      suggestion,
      locales: ["en-GB"],
    });
    const selected = selectSuggestRows(ranked, suggestion);
    assert.equal(selected[0].id, "openai/a");
    assert.equal(selected[1].id, "openai/c");
  });

  it("still picks a fallback when the only other model is inside the index gap or above the cap", () => {
    const benchmarks = benchmarksFor([
      { benchId: "one", chrfByLang: { en: 100 }, arena: 100, arenaName: "one" },
      { benchId: "two", chrfByLang: { en: 99 }, arena: 99, arenaName: "two" },
    ]);
    const suggestion = normalizeSuggestion({
      id: "advanced",
      suggestion: { profile: "quality", max_price: 2, min_delta: 1 },
    });
    const ranked = rankEngineModels({
      provider: "deepseek",
      catalog: [priced("deepseek/one", 1), priced("deepseek/two", 9)],
      benchmarks,
      suggestion,
      locales: ["en-GB"],
    });
    const selected = selectSuggestRows(ranked, suggestion);
    assert.deepEqual(selected.map((row) => row.id), ["deepseek/one", "deepseek/two"]);
  });

  it("leaves the fallback empty when the provider has one model", () => {
    const benchmarks = benchmarksFor([
      { benchId: "only", chrfByLang: { en: 80 }, arena: 80, arenaName: "only" },
    ]);
    const ranked = rankEngineModels({
      provider: "deepseek",
      catalog: [priced("deepseek/only", 1)],
      benchmarks,
      suggestion: quality,
      locales: ["en-GB"],
    });
    const selected = selectSuggestRows(ranked, { maxPrice: 8, minDelta: 1 });
    assert.deepEqual(selected.map((row) => row.id), ["deepseek/only"]);
  });

  it("leaves free routes out of a paid profile and ranks them for free", () => {
    const benchmarks = benchmarksFor([
      { benchId: "paid", chrfByLang: { en: 50 }, arena: 50, arenaName: "paid" },
      { benchId: "gift", chrfByLang: { en: 100 }, arena: 100, arenaName: "gift" },
    ]);
    const catalog = [
      priced("openrouter/vendor/paid", 1),
      { id: "openrouter/vendor/gift:free", name: "gift", pricing: { prompt: "0", completion: "0" } },
      { id: "openrouter/openrouter/free", name: "router", pricing: { prompt: "0", completion: "0" } },
    ];
    const paid = rankEngineModels({
      provider: "openrouter",
      catalog,
      benchmarks,
      suggestion: quality,
      locales: ["en-GB"],
    });
    assert.deepEqual(paid.map((row) => row.id), ["openrouter/vendor/paid"]);
    const free = rankEngineModels({
      provider: "openrouter",
      catalog,
      benchmarks,
      suggestion: normalizeSuggestion({ id: "free-router" }),
      locales: ["en-GB"],
    });
    assert.ok(free.every((row) => isFreeRoute(row.id)));
    assert.equal(free[0].id, "openrouter/vendor/gift:free");
    assert.equal(free[0].blendedPerMTokens, 0);
    const selected = selectSuggestRows(free, { maxPrice: 0, minDelta: 0 });
    assert.equal(selected[0].id, "openrouter/vendor/gift:free");
  });

  it("lets a higher Arena weight outrank a higher ChrF model", () => {
    const benchmarks = benchmarksFor([
      { benchId: "translator", chrfByLang: { en: 100 }, arena: 40, arenaName: "translator" },
      { benchId: "coder", chrfByLang: { en: 40 }, arena: 100, arenaName: "coder" },
    ]);
    const catalog = [priced("openai/translator", 1), priced("openai/coder", 1)];
    const balanced = rankEngineModels({
      provider: "openai",
      catalog,
      benchmarks,
      suggestion: quality,
      locales: ["en-GB"],
    });
    const technical = rankEngineModels({
      provider: "openai",
      catalog,
      benchmarks,
      suggestion: normalizeSuggestion({
        id: "technical",
        suggestion: { profile: "quality", chrf_weight: 0.25, arena_weight: 0.75, quality_floor: 0.3 },
      }),
      locales: ["en-GB"],
    });
    assert.equal(balanced[0].id, "openai/translator");
    assert.equal(technical[0].id, "openai/coder");
  });
});

describe("allowsScoreReplacement", () => {
  const scored = { chrf: 0.5, arenaScore: 1000 };
  const unscored = { chrf: null, arenaScore: null };

  it("refuses an unscored upgrade over a scored current id", () => {
    assert.equal(allowsScoreReplacement(scored, unscored, "upgrade"), false);
    assert.equal(allowsScoreReplacement(scored, unscored, "over_cap"), false);
  });

  it("allows an unscored model to fill an unavailable slot", () => {
    assert.equal(allowsScoreReplacement(scored, unscored, "unavailable"), true);
    assert.equal(allowsScoreReplacement(null, unscored, "unavailable"), true);
  });
});
