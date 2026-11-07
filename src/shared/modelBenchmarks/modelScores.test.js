const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { getModelScores } = require("./modelScores");

function benchmarks() {
  return {
    sources: {
      languagebench: { url: "https://lb.example", license: "CC-BY-SA-4.0", attribution: "languagebench", error: null },
      arena: { url: "https://arena.example", license: "CC-BY-4.0", attribution: "Arena", error: null },
      modelsDev: { url: "https://models.dev", license: "MIT", attribution: "models.dev", error: null },
    },
    languagebench: {
      models: {
        "openai/gpt-a": { chrfByBcp47: { en: { sum: 80, n: 1 }, xx: { sum: 1, n: 1 } }, cost: null },
        "google/gemini-a": { chrfByBcp47: { en: { sum: 70, n: 1 } }, cost: null },
      },
    },
    arena: {
      models: [
        { model: "gpt-a", vendor: "openai", score: 1100, publishDate: null },
        { model: "gemini-a", vendor: "google", score: 1000, publishDate: null },
      ],
    },
    modelsDev: { pricing: {} },
  };
}

describe("getModelScores", () => {
  it("scores each engine on its own and skips custom, free, and unmatched rows", async () => {
    const result = await getModelScores(
      [
        { id: "openai/gpt-a", name: "GPT A", pricing: { prompt: 0.000001, completion: 0.000001 } },
        { id: "openai/gpt-unknown", name: "Unknown", pricing: { prompt: 0.000001, completion: 0.000001 } },
        { id: "openrouter/google/gemini-a", name: "Gemini", pricing: { prompt: 0.000002, completion: 0.000002 } },
        { id: "openrouter/openrouter/free", name: "Free", pricing: { prompt: 0, completion: 0 } },
        { id: "local/llama", name: "Llama", pricing: { prompt: 0, completion: 0 } },
        { id: "My Proxy/foo", name: "Foo", pricing: { prompt: 0, completion: 0 } },
      ],
      { benchmarks: benchmarks(), locales: ["en-GB"] },
    );
    assert.equal(result.scores["openai/gpt-a"].chrf, 80);
    assert.equal(result.scores["openai/gpt-a"].arena, 1100);
    assert.equal(typeof result.scores["openai/gpt-a"].index, "number");
    assert.equal(result.scores["openai/gpt-unknown"], undefined);
    assert.equal(result.scores["openrouter/google/gemini-a"].chrf, 70);
    assert.equal(result.scores["openrouter/google/gemini-a"].arena, 1000);
    assert.equal(result.scores["openrouter/openrouter/free"], undefined);
    assert.equal(result.scores["local/llama"], undefined);
    assert.equal(result.scores["My Proxy/foo"], undefined);
    assert.equal(result.sources.languagebench.license, "CC-BY-SA-4.0");
    assert.deepEqual(result.warnings, []);
  });
});
