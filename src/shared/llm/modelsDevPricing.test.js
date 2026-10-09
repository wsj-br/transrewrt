const { describe, it, beforeEach, afterEach } = require("node:test");
const assert = require("node:assert/strict");
const {
  ENGINE_TO_PROVIDER,
  pruneModelsDevApiJson,
  lookupProviderModelRow,
  estimateCostDollars,
  refreshModelsDevPricingIfNeeded,
  costUsdFromXaiTicks,
  resetPricingIndexForTests,
  setFetchForTests,
} = require("./modelsDevPricing");

const FIXTURE = {
  openai: { "gpt-4o": { input: 2.5, output: 10 } },
  google: { "gemini-2.5-flash": { input: 0.15, output: 0.6 } },
  alibaba: { "qwen3-14b": { input: 3, output: 12 } },
  mistral: { "mistral-small-latest": { input: 0.1, output: 0.3 } },
  groq: { foo: { input: 9, output: 9 } },
  anthropic: { foo: { input: 1, output: 1, canonical: "anthropic/foo" } },
};

beforeEach(() => {
  resetPricingIndexForTests(FIXTURE);
  setFetchForTests(globalThis.fetch.bind(globalThis));
});

afterEach(() => {
  setFetchForTests(globalThis.fetch.bind(globalThis));
});

describe("ENGINE_TO_PROVIDER", () => {
  it("maps mistralai to models.dev mistral", () => {
    assert.equal(ENGINE_TO_PROVIDER.mistralai, "mistral");
  });
});

describe("lookupProviderModelRow", () => {
  it("matches exact model id on the mapped provider", () => {
    assert.deepEqual(lookupProviderModelRow("openai", "gpt-4o"), {
      input: 2.5,
      output: 10,
    });
  });

  it("matches case-insensitively", () => {
    assert.deepEqual(lookupProviderModelRow("openai", "GPT-4O"), {
      input: 2.5,
      output: 10,
    });
  });

  it("matches normalized slugs (spaces vs hyphens)", () => {
    assert.deepEqual(lookupProviderModelRow("alibaba", "Qwen3 14B"), {
      input: 3,
      output: 12,
    });
  });

  it("uses the mistralai → mistral engine map", () => {
    assert.deepEqual(lookupProviderModelRow("mistralai", "mistral-small-latest"), {
      input: 0.1,
      output: 0.3,
    });
  });

  it("prefers the engine's provider when several share a slug", () => {
    assert.deepEqual(lookupProviderModelRow("anthropic", "foo"), {
      input: 1,
      output: 1,
    });
    assert.deepEqual(lookupProviderModelRow("groq", "foo"), {
      input: 9,
      output: 9,
    });
  });

  it("falls back to a global match for custom/local engines", () => {
    assert.deepEqual(lookupProviderModelRow("custom", "gpt-4o"), {
      input: 2.5,
      output: 10,
    });
  });

  it("returns null for an unknown model", () => {
    assert.equal(lookupProviderModelRow("openai", "no-such-model"), null);
  });
});

describe("estimateCostDollars", () => {
  it("converts per-1M rates to USD for token counts", () => {
    const cost = estimateCostDollars("alibaba", "qwen3-14b", {
      prompt_tokens: 1000,
      completion_tokens: 0,
    });
    assert.equal(cost, 0.003);
  });

  it("returns 0 when the model is unknown", () => {
    assert.equal(
      estimateCostDollars("openai", "no-such-model", {
        prompt_tokens: 1000,
        completion_tokens: 1000,
      }),
      0,
    );
  });
});

describe("costUsdFromXaiTicks", () => {
  it("divides ticks by 1e10", () => {
    assert.equal(costUsdFromXaiTicks(37756000), 0.0037756);
  });

  it("returns null when ticks are missing", () => {
    assert.equal(costUsdFromXaiTicks(null), null);
    assert.equal(costUsdFromXaiTicks(undefined), null);
    assert.equal(costUsdFromXaiTicks(""), null);
  });
});

describe("refreshModelsDevPricingIfNeeded", () => {
  it("keeps the snapshot when fetch fails", async () => {
    setFetchForTests(async () => {
      throw new Error("offline");
    });
    await refreshModelsDevPricingIfNeeded();
    assert.deepEqual(lookupProviderModelRow("openai", "gpt-4o"), {
      input: 2.5,
      output: 10,
    });
  });

  it("replaces the index from a successful api.json fetch", async () => {
    setFetchForTests(async () => ({
      ok: true,
      json: async () => ({
        openai: {
          models: {
            "gpt-test": { cost: { input: 4, output: 8 } },
          },
        },
      }),
    }));
    await refreshModelsDevPricingIfNeeded();
    assert.deepEqual(lookupProviderModelRow("openai", "gpt-test"), {
      input: 4,
      output: 8,
    });
    assert.equal(lookupProviderModelRow("openai", "gpt-4o"), null);
  });
});

describe("pruneModelsDevApiJson", () => {
  it("keeps input/output and canonical_model_id, skips unpriced models", () => {
    const pruned = pruneModelsDevApiJson({
      openai: {
        models: {
          priced: {
            cost: { input: 1.25, output: 10, cache_read: 0.1 },
            canonical_model_id: "openai/priced",
          },
          free: { cost: { input: 0, output: 0 } },
          unpriced: { name: "no cost" },
        },
      },
    });
    assert.deepEqual(pruned, {
      openai: {
        priced: { input: 1.25, output: 10, canonical: "openai/priced" },
        free: { input: 0, output: 0 },
      },
    });
  });
});
