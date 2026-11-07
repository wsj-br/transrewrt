const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { QUALITY_WEIGHTS, rankProviderModels } = require("./rankModels");

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
  return {
    id,
    name: id,
    pricing: { prompt: String(perToken), completion: String(perToken) },
  };
}

describe("rankProviderModels quality profile", () => {
  it("uses the suggest-models --quality weights", () => {
    assert.deepEqual(QUALITY_WEIGHTS, {
      chrf: 0.45,
      arena: 0.35,
      price: 0.2,
      qualityFloor: 0.7,
    });
  });

  it("applies the floor, the missing-value stand-ins, and keeps measured values", () => {
    const benchmarks = benchmarksFor([
      { benchId: "full", chrfByLang: { en: 100 }, arena: 100, arenaName: "full" },
      { benchId: "mid", chrfByLang: { en: 70 }, arena: 100, arenaName: "mid" },
      { benchId: "low", chrfByLang: { en: 69 }, arena: 100, arenaName: "low" },
      { benchId: "nochrf", chrfByLang: {}, arena: 100, arenaName: "nochrf" },
      { benchId: "noarena", chrfByLang: { en: 100 }, arenaName: "noarena" },
    ]);
    const ranked = rankProviderModels({
      provider: "openai",
      catalog: ["full", "mid", "low", "nochrf", "noarena"].map((id) => priced(id, 1)),
      benchmarks,
      profile: "quality",
      weights: QUALITY_WEIGHTS,
      locales: ["en-GB"],
    });
    const byId = Object.fromEntries(ranked.map((row) => [row.id, row]));

    assert.deepEqual(
      ranked.map((row) => row.id),
      ["full", "mid", "noarena", "low", "nochrf"],
    );
    assert.equal(byId.full.index, 80);
    assert.equal(byId.full.belowFloor, false);
    assert.equal(byId.mid.index, 66.5);
    assert.equal(byId.mid.belowFloor, false);
    assert.equal(byId.noarena.index, 60.8);
    assert.equal(byId.noarena.arenaScore, null);
    assert.equal(byId.noarena.chrf, 100);
    assert.equal(byId.noarena.belowFloor, false);
    assert.equal(byId.low.belowFloor, true);
    assert.equal(byId.low.index, 66.1);
    assert.equal(byId.nochrf.chrf, null);
    assert.equal(byId.nochrf.belowFloor, true);
    assert.equal(byId.nochrf.index, 50.8);
  });

  it("restricts the ChrF mean to the app locales", () => {
    const benchmarks = benchmarksFor([
      { benchId: "gpt-a", chrfByLang: { en: 80, xx: 10 }, arena: 50, arenaName: "gpt-a" },
    ]);
    const ranked = rankProviderModels({
      provider: "openai",
      catalog: [priced("gpt-a", 1)],
      benchmarks,
      profile: "quality",
      locales: ["en-GB"],
    });
    assert.equal(ranked[0].chrf, 80);
  });

  it("ranks a cheaper equal-quality model above a dearer one", () => {
    const benchmarks = benchmarksFor([
      { benchId: "cheap", chrfByLang: { en: 90 }, arena: 80, arenaName: "cheap" },
      { benchId: "dear", chrfByLang: { en: 90 }, arena: 80, arenaName: "dear" },
    ]);
    const ranked = rankProviderModels({
      provider: "openai",
      catalog: [priced("dear", 3), priced("cheap", 1)],
      benchmarks,
      profile: "quality",
      locales: ["en-GB"],
    });
    assert.equal(ranked[0].id, "cheap");
    assert.equal(ranked[1].id, "dear");
    assert.ok(ranked[0].index > ranked[1].index);
  });

  it("treats a zero catalog price as unknown, then falls back to languagebench cost", () => {
    const unknown = rankProviderModels({
      provider: "openai",
      catalog: [{ id: "solo", name: "solo", pricing: { prompt: "0", completion: "0" } }],
      benchmarks: benchmarksFor([
        { benchId: "solo", chrfByLang: { en: 10 }, arena: 10, arenaName: "solo" },
      ]),
      profile: "quality",
      locales: ["en-GB"],
    });
    assert.equal(unknown[0].index, 90);
    assert.equal(unknown[0].priceSource, null);

    const benchmarks = benchmarksFor([
      { benchId: "lb", chrfByLang: { en: 80 }, arena: 80, arenaName: "lb", lbCost: 1 },
      { benchId: "cat", chrfByLang: { en: 80 }, arena: 80, arenaName: "cat" },
    ]);
    const ranked = rankProviderModels({
      provider: "openai",
      catalog: [
        { id: "lb", name: "lb", pricing: { prompt: "0", completion: "0" } },
        priced("cat", 10),
      ],
      benchmarks,
      profile: "quality",
      locales: ["en-GB"],
    });
    const byId = Object.fromEntries(ranked.map((row) => [row.id, row]));
    assert.equal(byId.lb.priceSource, "languagebench");
    assert.equal(ranked[0].id, "lb");
  });

  it("attaches a dated batch route to the published DeepSeek V4 Flash scores", () => {
    const benchmarks = benchmarksFor([
      {
        benchId: "deepseek/deepseek-v4-flash-20260423",
        chrfByLang: { en: 56 },
        arena: 1431,
        arenaName: "DeepSeek-V4-Flash",
        vendor: "deepseek",
      },
      {
        benchId: "deepseek/deepseek-v4-pro",
        chrfByLang: { en: 40 },
        arena: 1451,
        arenaName: "DeepSeek-V4-Pro",
        vendor: "deepseek",
      },
    ]);
    const ranked = rankProviderModels({
      provider: "openrouter",
      catalog: [
        priced("deepseek/deepseek-v4-flash-0731:batch", 1),
        priced("deepseek/deepseek-v4-flash", 1),
        priced("deepseek/deepseek-v4-pro", 1),
        priced("deepseek/deepseek-v4.1-flash", 1),
      ],
      benchmarks,
      profile: "quality",
      locales: ["en-GB"],
    });
    const byId = Object.fromEntries(ranked.map((row) => [row.id, row]));
    assert.equal(byId["deepseek/deepseek-v4-flash-0731:batch"].chrf, 56);
    assert.equal(byId["deepseek/deepseek-v4-flash-0731:batch"].arenaScore, 1431);
    assert.equal(byId["deepseek/deepseek-v4-flash"].chrf, 56);
    assert.equal(byId["deepseek/deepseek-v4-pro"].chrf, 40);
    assert.equal(byId["deepseek/deepseek-v4-pro"].arenaScore, 1451);
    assert.equal(byId["deepseek/deepseek-v4.1-flash"].chrf, null);
    assert.equal(byId["deepseek/deepseek-v4.1-flash"].arenaScore, null);
  });

  it("uses models.dev when the catalog price is zero", () => {
    const benchmarks = benchmarksFor([
      { benchId: "dev", chrfByLang: { en: 80 }, arena: 80, arenaName: "dev" },
    ]);
    benchmarks.modelsDev.pricing = { dev: { input: 2, output: 2 } };
    const ranked = rankProviderModels({
      provider: "openai",
      catalog: [{ id: "dev", name: "dev", pricing: { prompt: "0", completion: "0" } }],
      benchmarks,
      profile: "quality",
      locales: ["en-GB"],
    });
    assert.equal(ranked[0].priceSource, "models.dev");
    assert.equal(ranked[0].inputPerMTokens, 2);
  });
});
