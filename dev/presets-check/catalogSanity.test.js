const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { evaluateCatalogSanity } = require("./catalogSanity.js");
const { collectModelRefs } = require("./modelRefs.js");

const engines = [{ id: "openrouter" }, { id: "openai" }];

describe("catalog sanity", () => {
  it("skips an engine that has no API key", () => {
    const verdict = evaluateCatalogSanity({
      engine: "openai",
      count: 0,
      expectCatalog: false,
      lastGoodCount: 100,
    });
    assert.equal(verdict.status, "skipped");
    assert.equal(verdict.reason, "missing_key");
  });

  it("treats an empty catalog for a configured engine as suspect", () => {
    const verdict = evaluateCatalogSanity({
      engine: "openai",
      count: 0,
      expectCatalog: true,
      lastGoodCount: 80,
    });
    assert.equal(verdict.status, "suspect");
    assert.equal(verdict.reason, "empty_catalog");
  });

  it("treats a sharp shrink against the last good count as suspect", () => {
    const verdict = evaluateCatalogSanity({
      engine: "openrouter",
      count: 40,
      expectCatalog: true,
      lastGoodCount: 100,
      shrinkRatio: 0.5,
    });
    assert.equal(verdict.status, "suspect");
    assert.equal(verdict.reason, "shrunk");
    assert.equal(verdict.updateLastGood, undefined);
  });

  it("accepts a healthy catalog and records the new count", () => {
    const verdict = evaluateCatalogSanity({
      engine: "openrouter",
      count: 90,
      expectCatalog: true,
      lastGoodCount: 100,
    });
    assert.equal(verdict.status, "ok");
    assert.equal(verdict.updateLastGood, 90);
  });
});

describe("model refs", () => {
  it("includes preset slots and top-level translation and suggestion models", () => {
    const refs = collectModelRefs(
      {
        translation_model: "openrouter/~anthropic/claude-sonnet-latest",
        translation_model_fallback: "openrouter/~anthropic/claude-haiku-latest",
        suggestion_model: "openrouter/openai/gpt-4o",
        suggestion_model_fallback: "",
        presets: [
          {
            id: "standard",
            model_ids: { openrouter: "openrouter/google/gemini-flash" },
            fallback_ids: { openai: "openai/gpt-4o-mini" },
          },
        ],
      },
      engines,
    );
    const paths = refs.map((ref) => ref.path);
    assert.ok(paths.includes("presets[0].model_ids.openrouter"));
    assert.ok(paths.includes("presets[0].fallback_ids.openai"));
    assert.ok(paths.includes("translation_model"));
    assert.ok(paths.includes("translation_model_fallback"));
    assert.ok(paths.includes("suggestion_model"));
    assert.equal(paths.includes("suggestion_model_fallback"), false);
    assert.equal(
      refs.filter((ref) => ref.kind === "toplevel").every((ref) => ref.successorOnly),
      true,
    );
  });
});