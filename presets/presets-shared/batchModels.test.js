const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { sharedRequire } = require("./paths.js");
const {
  buildIdSets,
  filterOpenRouterModels,
  isBatchProviderModel,
  isTransrewrtWorkflowModel,
  modelsForEngineFromCatalog,
  omitBatchProviderModels,
} = sharedRequire("presetsProviderCatalog.js");

describe("batch provider models", () => {
  it("recognises OpenRouter :batch ids and (batch) names", () => {
    assert.equal(isBatchProviderModel("openrouter/openai/gpt-oss-20b:batch"), true);
    assert.equal(
      isBatchProviderModel({
        id: "openrouter/deepseek/deepseek-v4-flash-0731:batch",
        name: "DeepSeek: DeepSeek V4 Flash 0731 (batch)",
      }),
      true,
    );
    assert.equal(
      isBatchProviderModel({
        id: "openai/named-only",
        displayId: "named-only",
        name: "Named Only (batch)",
      }),
      true,
    );
    assert.equal(isBatchProviderModel({ id: "openrouter/openai/gpt-oss-20b", name: "gpt-oss-20b" }), false);
    assert.equal(isBatchProviderModel({ id: "openrouter/vendor/gift:free", name: "gift" }), false);
  });

  it("drops batch rows from provider catalogs and id sets", () => {
    const rows = [
      { id: "openai/gpt-5-nano", name: "GPT-5 nano" },
      { id: "openai/gpt-5-nano:batch", name: "GPT-5 nano (batch)" },
      { id: "openrouter/openai/gpt-oss-20b", name: "gpt-oss-20b" },
      { id: "openrouter/openai/gpt-oss-20b:batch", name: "gpt-oss-20b (batch)" },
    ];
    assert.deepEqual(
      modelsForEngineFromCatalog(rows, "openai").map((m) => m.id),
      ["openai/gpt-5-nano"],
    );
    assert.deepEqual(
      filterOpenRouterModels(rows).map((m) => m.id),
      ["openrouter/openrouter/free", "openrouter/openai/gpt-oss-20b"],
    );
    const idSets = buildIdSets({
      openrouter: omitBatchProviderModels(rows),
      openai: modelsForEngineFromCatalog(rows, "openai"),
    });
    assert.equal(idSets.openrouter.has("openrouter/openai/gpt-oss-20b:batch"), false);
    assert.equal(idSets.openai.has("openai/gpt-5-nano:batch"), false);
    assert.equal(idSets.openai.has("openai/gpt-5-nano"), true);
  });

  it("is not a Transrewrt chat model", () => {
    assert.equal(
      isTransrewrtWorkflowModel({ id: "openrouter/openai/gpt-oss-20b:batch", name: "gpt-oss-20b (batch)" }),
      false,
    );
    assert.equal(
      isTransrewrtWorkflowModel({ id: "openrouter/openai/gpt-oss-20b", name: "gpt-oss-20b" }),
      true,
    );
  });
});
