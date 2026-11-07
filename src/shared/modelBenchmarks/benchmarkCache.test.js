const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const os = require("os");
const path = require("path");
const {
  BenchmarkUnavailableError,
  aggregateLanguagebench,
  arenaRowsFromParquetObjects,
  buildModelsDevPricing,
  ensureBenchmarkCache,
  pickLatestParquetPath,
} = require("./benchmarkCache");

describe("aggregateLanguagebench", () => {
  it("keeps translation ChrF buckets and ignores other rows", () => {
    const agg = aggregateLanguagebench(
      [
        { task: "translation_to", metric: "chrf", score: 40, model: "openai/gpt-a", bcp_47: "en" },
        { task: "translation_from", metric: "chrf", score: 20, model: "openai/gpt-a", bcp_47: "en" },
        { task: "translation_to", metric: "chrf", score: 10, model: "openai/gpt-a", bcp_47: "xx" },
        { task: "summarise", metric: "chrf", score: 99, model: "openai/gpt-a", bcp_47: "en" },
        { task: "translation_to", metric: "bleu", score: 99, model: "openai/gpt-a", bcp_47: "en" },
      ],
      [{ id: "openai/gpt-a", cost: 1.5 }],
    );
    assert.deepEqual(agg.models["openai/gpt-a"].chrfByBcp47.en, { sum: 60, n: 2 });
    assert.deepEqual(agg.models["openai/gpt-a"].chrfByBcp47.xx, { sum: 10, n: 1 });
    assert.equal(agg.models["openai/gpt-a"].cost, 1.5);
  });
});

describe("arena and models.dev helpers", () => {
  it("keeps overall Arena rows only", () => {
    const rows = arenaRowsFromParquetObjects([
      { category: "overall", model_name: "Alpha", organization: "OpenAI", rating: 1200, leaderboard_publish_date: "2026-01-02T00:00:00Z" },
      { category: "coding", model_name: "Beta", organization: "OpenAI", rating: 1400 },
      { category: "overall", model_name: "", organization: "OpenAI", rating: 1 },
    ]);
    assert.deepEqual(rows, [
      { model: "Alpha", vendor: "OpenAI", score: 1200, publishDate: "2026-01-02" },
    ]);
  });

  it("picks the last latest parquet shard", () => {
    assert.equal(
      pickLatestParquetPath([
        { path: "text/latest-00000-of-00002.parquet" },
        { path: "text/full-00000-of-00001.parquet" },
        { path: "text/latest-00001-of-00002.parquet" },
      ]),
      "text/latest-00001-of-00002.parquet",
    );
  });

  it("keeps the cheaper models.dev blended rate", () => {
    const pricing = buildModelsDevPricing({
      a: { models: { "gpt-a": { cost: { input: 8, output: 8 } } } },
      b: { models: { "gpt-a": { cost: { input: 1, output: 1 } } } },
    });
    assert.deepEqual(pricing["gpt-a"], { input: 1, output: 1 });
  });
});

describe("ensureBenchmarkCache", () => {
  it("keeps a failed Arena fetch and still caches languagebench", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "model-benchmarks-"));
    const cachePath = path.join(dir, "model-benchmarks.json");
    const urls = [];
    const fetchImpl = {
      async json(url) {
        urls.push(String(url));
        if (String(url).includes("results.json")) {
          return [
            { task: "translation_to", metric: "chrf", score: 50, model: "openai/gpt-a", bcp_47: "en" },
          ];
        }
        if (String(url).includes("models.json")) return [{ id: "openai/gpt-a", cost: 1 }];
        if (String(url).includes("models.dev")) {
          return { openai: { models: { "gpt-a": { cost: { input: 1, output: 2 } } } } };
        }
        throw new Error("arena down");
      },
      async buffer() {
        throw new Error("arena down");
      },
    };
    const first = await ensureBenchmarkCache(cachePath, { fetchImpl });
    assert.equal(first.sources.languagebench.error, null);
    assert.match(first.sources.arena.error, /arena down/);
    assert.equal(first.modelsDev.pricing["gpt-a"].input, 1);
    const after = urls.length;
    const second = await ensureBenchmarkCache(cachePath, { fetchImpl });
    const again = urls.slice(after);
    assert.ok(again.every((url) => url.includes("leaderboard-dataset")));
    assert.equal(second.languagebench.models["openai/gpt-a"].chrfByBcp47.en.sum, 50);
  });

  it("throws when languagebench and Arena both fail", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "model-benchmarks-"));
    const cachePath = path.join(dir, "model-benchmarks.json");
    const fetchImpl = {
      async json() {
        throw new Error("offline");
      },
      async buffer() {
        throw new Error("offline");
      },
    };
    await assert.rejects(
      () => ensureBenchmarkCache(cachePath, { fetchImpl, refresh: true }),
      (err) => err instanceof BenchmarkUnavailableError,
    );
  });
});
