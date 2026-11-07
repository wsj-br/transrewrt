const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const {
  bcp47ForLocales,
  curatedCatalogKeys,
  keysForBenchmarkId,
  keysForCatalogModel,
  normalizeMatchKey,
  stemMatchKey,
} = require("./matchKeys");

describe("normalizeMatchKey", () => {
  it("strips the openrouter prefix, x-ai vendor, and a date suffix", () => {
    assert.equal(
      normalizeMatchKey("OpenRouter/x-ai/grok-4.20-20240101"),
      "xai-grok-4-20",
    );
  });

  it("strips Arena effort tags and dashes dots", () => {
    assert.equal(normalizeMatchKey("claude-haiku-4.5 (High)"), "claude-haiku-4-5");
    assert.equal(normalizeMatchKey("foo-high"), "foo");
  });
});

describe("catalog and benchmark keys", () => {
  it("matches an OpenRouter catalog id to a languagebench id", () => {
    const catalog = keysForCatalogModel("openrouter", { id: "google/gemini-2.5-flash" });
    const bench = keysForBenchmarkId("google/gemini-2.5-flash");
    assert.ok(catalog.some((key) => bench.includes(key)));
  });

  it("adds curated tails for awkward benchmark ids", () => {
    const keys = curatedCatalogKeys("x-ai/grok-4.20");
    assert.ok(keys.includes(normalizeMatchKey("grok-4.20-0309-non-reasoning")));
  });
});

describe("stemMatchKey", () => {
  it("folds a dated batch route onto the published model id", () => {
    const batchTail = stemMatchKey(normalizeMatchKey("deepseek-v4-flash-0731:batch"));
    const arena = stemMatchKey(normalizeMatchKey("DeepSeek-V4-Flash"));
    const batchFull = stemMatchKey(normalizeMatchKey("deepseek/deepseek-v4-flash-0731:batch"));
    const languagebench = stemMatchKey(normalizeMatchKey("deepseek/deepseek-v4-flash-20260423"));
    assert.equal(batchTail, arena);
    assert.equal(batchTail, "deepseek-v4-flash");
    assert.equal(batchFull, languagebench);
  });

  it("does not fold a different size or generation onto the base id", () => {
    assert.equal(stemMatchKey(normalizeMatchKey("deepseek-v4-pro")), "deepseek-v4-pro");
    assert.equal(stemMatchKey(normalizeMatchKey("deepseek-v4.1-flash")), "deepseek-v4-1-flash");
    assert.equal(stemMatchKey(normalizeMatchKey("gemini-2.5-flash-lite")), "gemini-2-5-flash-lite");
    assert.equal(stemMatchKey(normalizeMatchKey("qwen3-30b-a3b-2507")), "qwen3-30b-a3b-2507");
  });
});

describe("bcp47ForLocales", () => {
  it("maps UI locales and falls back to the primary subtag", () => {
    const codes = bcp47ForLocales(["en-GB", "zh-Hant", "pt-BR", "en-US"]);
    assert.deepEqual(codes.sort(), ["en", "pt", "yue", "zh"]);
  });

  it("falls back to en when nothing maps", () => {
    assert.deepEqual(bcp47ForLocales([]), ["en"]);
  });
});
