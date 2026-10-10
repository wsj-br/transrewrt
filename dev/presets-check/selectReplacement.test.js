const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const {
  sameFamily,
  selectSlotReplacement,
  selectReplacementPair,
  resolveVerifiedChoice,
} = require("./selectReplacement.js");
const { evaluateCircuitBreaker } = require("./circuitBreaker.js");

function model(id, promptPer1M) {
  const perToken = promptPer1M == null ? null : promptPer1M / 1e6;
  return {
    id,
    pricing:
      perToken == null
        ? undefined
        : { prompt: perToken, completion: perToken },
  };
}

const baseCatalog = [
  model("openai/gpt-4o-mini-2024-07-18", 0.4),
  model("openai/other-strong", 1),
  model("openai/gpt-4o-mini-free:free", 0),
];

describe("selectReplacement", () => {
  it("prefers a same-family successor over a higher-scored shortlist model", () => {
    const picked = selectSlotReplacement({
      engine: "openai",
      unavailableId: "openai/gpt-4o-mini",
      benchmarkOk: true,
      ranked: [
        { model_id: "openai/other-strong", score: 0.95, below_floor: false },
        { model_id: "openai/gpt-4o-mini-2024-07-18", score: 0.4, below_floor: false },
      ],
      shortlist: [
        { model_id: "openai/other-strong", score: 0.95 },
        { model_id: "openai/gpt-4o-mini-2024-07-18", score: 0.4 },
      ],
      catalogModels: baseCatalog,
      priceForId: () => 0.5,
    });
    assert.equal(picked.status, "replacement");
    assert.equal(picked.newId, "openai/gpt-4o-mini-2024-07-18");
    assert.equal(picked.source, "successor");
  });

  it("uses the shortlist when no family successor passes", () => {
    const picked = selectSlotReplacement({
      engine: "openai",
      unavailableId: "openai/retired-model",
      benchmarkOk: true,
      ranked: [{ model_id: "openai/other-strong", score: 0.8, below_floor: false }],
      shortlist: [{ model_id: "openai/other-strong", score: 0.8 }],
      catalogModels: baseCatalog,
    });
    assert.equal(picked.newId, "openai/other-strong");
    assert.equal(picked.source, "shortlist");
  });

  it("falls back to guarded fuzzy when benchmarks are off", () => {
    const picked = selectSlotReplacement({
      engine: "openai",
      unavailableId: "openai/gpt-4o-mini",
      useBenchmark: false,
      benchmarkOk: false,
      catalogModels: baseCatalog,
    });
    assert.equal(picked.source, "fuzzy");
    assert.equal(picked.newId, "openai/gpt-4o-mini-2024-07-18");
  });

  it("keeps free presets on zero-price models", () => {
    const picked = selectSlotReplacement({
      engine: "openai",
      unavailableId: "openai/old:free",
      freeOnly: true,
      benchmarkOk: true,
      ranked: [
        { model_id: "openai/other-strong", score: 0.9, below_floor: false },
        { model_id: "openai/gpt-4o-mini-free:free", score: 0.5, below_floor: false },
      ],
      shortlist: [
        { model_id: "openai/other-strong", score: 0.9 },
        { model_id: "openai/gpt-4o-mini-free:free", score: 0.5 },
      ],
      catalogModels: baseCatalog,
    });
    assert.equal(picked.newId, "openai/gpt-4o-mini-free:free");
  });

  it("rejects a candidate above the price ceiling", () => {
    const picked = selectSlotReplacement({
      engine: "openai",
      unavailableId: "openai/retired-cheap",
      benchmarkOk: true,
      maxPriceRatio: 3,
      priceForId: (id) => (id === "openai/retired-cheap" ? 1 : null),
      ranked: [{ model_id: "openai/other-strong", score: 0.9, below_floor: false }],
      shortlist: [{ model_id: "openai/other-strong", score: 0.9 }],
      catalogModels: [model("openai/other-strong", 10), model("openai/gpt-4o-mini-2024-07-18", 2)],
    });
    assert.notEqual(picked.newId, "openai/other-strong");
  });

  it("does not duplicate primary and fallback", () => {
    const pair = selectReplacementPair({
      engine: "openai",
      primaryId: "openai/dead-a",
      fallbackId: "openai/dead-b",
      primaryUnavailable: true,
      fallbackUnavailable: true,
      benchmarkOk: true,
      ranked: [
        { model_id: "openai/other-strong", score: 0.9, below_floor: false },
        { model_id: "openai/gpt-4o-mini-2024-07-18", score: 0.7, below_floor: false },
      ],
      shortlist: [
        { model_id: "openai/other-strong", score: 0.9 },
        { model_id: "openai/gpt-4o-mini-2024-07-18", score: 0.7 },
      ],
      catalogModels: baseCatalog,
    });
    assert.equal(pair.primary.newId, "openai/other-strong");
    assert.equal(pair.fallback.newId, "openai/gpt-4o-mini-2024-07-18");
    assert.notEqual(pair.primary.newId, pair.fallback.newId);
  });

  it("replaces top-level fields only with a same-family successor", () => {
    const picked = selectSlotReplacement({
      engine: "openrouter",
      unavailableId: "openrouter/~anthropic/claude-sonnet-latest",
      successorOnly: true,
      benchmarkOk: true,
      ranked: [
        { model_id: "openrouter/openai/gpt-4o", score: 0.99, below_floor: false },
        { model_id: "openrouter/anthropic/claude-sonnet-4.6", score: 0.7, below_floor: false },
      ],
      shortlist: [{ model_id: "openrouter/openai/gpt-4o", score: 0.99 }],
      catalogModels: [
        model("openrouter/openai/gpt-4o", 2),
        model("openrouter/anthropic/claude-sonnet-4.6", 3),
      ],
    });
    assert.equal(picked.newId, "openrouter/anthropic/claude-sonnet-4.6");
    assert.equal(picked.source, "successor");
    assert.equal(
      sameFamily(
        "openrouter/~anthropic/claude-sonnet-latest",
        "openrouter/anthropic/claude-sonnet-4.6",
        "openrouter",
        { aliasStem: true },
      ),
      true,
    );
  });

  it("leaves top-level fields unresolved when the only options are outside the family", () => {
    const picked = selectSlotReplacement({
      engine: "openrouter",
      unavailableId: "openrouter/~anthropic/claude-sonnet-latest",
      successorOnly: true,
      useBenchmark: false,
      catalogModels: [model("openrouter/openai/gpt-4o", 2)],
    });
    assert.equal(picked.status, "unresolved");
    assert.equal(picked.newId, null);
  });

  it("walks to the next candidate when the smoke test fails", async () => {
    const exclude = new Set();
    const decision = {
      status: "replacement",
      oldId: "openai/old",
      newId: "openai/a",
      source: "shortlist",
      candidates: [
        { id: "openai/a", source: "shortlist", score: 0.9 },
        { id: "openai/b", source: "shortlist", score: 0.8 },
      ],
    };
    const verified = await resolveVerifiedChoice(decision, exclude, async (id) => id === "openai/b");
    assert.equal(verified.newId, "openai/b");
    assert.equal(verified.verified, true);
    assert.equal(exclude.has("openai/b"), true);
  });

  it("marks the slot unresolved when every smoke test fails", async () => {
    const verified = await resolveVerifiedChoice(
      {
        status: "replacement",
        oldId: "openai/old",
        newId: "openai/a",
        source: "fuzzy",
        candidates: [{ id: "openai/a", source: "fuzzy", score: 0.7 }],
      },
      new Set(),
      async () => false,
    );
    assert.equal(verified.status, "unresolved");
    assert.equal(verified.verifyFailed, true);
  });
});

describe("circuit breaker", () => {
  it("trips when a run wants too many replacements", () => {
    const rows = Array.from({ length: 7 }, (_, i) => ({ engine: `e${i}` }));
    const verdict = evaluateCircuitBreaker(rows, { maxPerRun: 6, maxPerEngine: 3 });
    assert.equal(verdict.tripped, true);
    assert.equal(verdict.reason, "run");
  });

  it("trips when one provider wants too many replacements", () => {
    const rows = [
      { engine: "google" },
      { engine: "google" },
      { engine: "google" },
      { engine: "google" },
    ];
    const verdict = evaluateCircuitBreaker(rows, { maxPerRun: 6, maxPerEngine: 3 });
    assert.equal(verdict.tripped, true);
    assert.equal(verdict.reason, "engine");
    assert.equal(verdict.engine, "google");
  });
});
