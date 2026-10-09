const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const {
  isChatCatalogModel,
  collapseAliasedModelRows,
} = require("./collapseAliasedModels");

describe("isChatCatalogModel", () => {
  it("keeps rows with no capabilities object", () => {
    assert.equal(isChatCatalogModel({ id: "gpt-4o" }), true);
  });

  it("drops explicit non-chat models", () => {
    assert.equal(
      isChatCatalogModel({
        id: "mistral-embed",
        capabilities: { completion_chat: false },
      }),
      false,
    );
  });

  it("keeps chat models", () => {
    assert.equal(
      isChatCatalogModel({
        id: "mistral-small-latest",
        capabilities: { completion_chat: true },
      }),
      true,
    );
  });

  it("drops archived models", () => {
    assert.equal(
      isChatCatalogModel({
        id: "old",
        archived: true,
        capabilities: { completion_chat: true },
      }),
      false,
    );
  });
});

describe("collapseAliasedModelRows", () => {
  it("leaves catalogs without aliases unchanged", () => {
    const rows = [
      { id: "a", name: "A" },
      { id: "b", name: "B" },
    ];
    assert.deepEqual(collapseAliasedModelRows(rows), rows);
  });

  it("collapses a Mistral alias clique to the shared name id", () => {
    const rows = [
      {
        id: "codestral-2508",
        name: "codestral-2508",
        aliases: ["codestral-latest", "mistral-code-latest", "mistral-code-fim-latest"],
      },
      {
        id: "codestral-latest",
        name: "codestral-2508",
        aliases: ["codestral-2508", "mistral-code-latest", "mistral-code-fim-latest"],
      },
      {
        id: "mistral-code-latest",
        name: "codestral-2508",
        aliases: ["codestral-2508", "codestral-latest", "mistral-code-fim-latest"],
      },
      {
        id: "mistral-code-fim-latest",
        name: "codestral-2508",
        aliases: ["codestral-2508", "codestral-latest", "mistral-code-latest"],
      },
    ];
    const out = collapseAliasedModelRows(rows);
    assert.equal(out.length, 1);
    assert.equal(out[0].id, "codestral-2508");
    assert.deepEqual(new Set(out[0].aliases), new Set([
      "codestral-latest",
      "mistral-code-latest",
      "mistral-code-fim-latest",
    ]));
  });

  it("prefers the name when it is a -latest alias", () => {
    const rows = [
      {
        id: "mistral-medium-2604",
        name: "mistral-medium-latest",
        aliases: ["mistral-medium-latest", "mistral-vibe-cli-latest"],
      },
      {
        id: "mistral-medium-latest",
        name: "mistral-medium-latest",
        aliases: ["mistral-medium-2604", "mistral-vibe-cli-latest"],
      },
      {
        id: "mistral-vibe-cli-latest",
        name: "mistral-medium-latest",
        aliases: ["mistral-medium-latest", "mistral-medium-2604"],
      },
    ];
    const out = collapseAliasedModelRows(rows);
    assert.equal(out.length, 1);
    assert.equal(out[0].id, "mistral-medium-latest");
  });

  it("does not merge distinct models", () => {
    const rows = [
      {
        id: "mistral-small-latest",
        name: "mistral-small-2603",
        aliases: ["mistral-small-2603"],
      },
      {
        id: "mistral-small-2603",
        name: "mistral-small-2603",
        aliases: ["mistral-small-latest"],
      },
      {
        id: "ministral-8b-latest",
        name: "ministral-8b-2512",
        aliases: ["ministral-8b-2512"],
      },
      {
        id: "ministral-8b-2512",
        name: "ministral-8b-2512",
        aliases: ["ministral-8b-latest"],
      },
    ];
    const out = collapseAliasedModelRows(rows);
    const ids = out.map((r) => r.id).sort();
    assert.deepEqual(ids, ["ministral-8b-2512", "mistral-small-2603"]);
  });

  it("collapses duplicate ids even when aliases are absent", () => {
    const rows = [
      { id: "gemini-2.5-flash", name: "gemini-2.5-flash" },
      { id: "gemini-2.5-flash", name: "gemini-2.5-flash" },
    ];
    const out = collapseAliasedModelRows(rows);
    assert.equal(out.length, 1);
    assert.equal(out[0].id, "gemini-2.5-flash");
  });

  it("collapses same display name across dated snapshots (OpenAI-style)", () => {
    const rows = [
      { id: "gpt-4o-2024-08-06", name: "GPT-4o" },
      { id: "gpt-4o", name: "GPT-4o" },
      { id: "gpt-4o-2024-11-20", name: "GPT-4o" },
    ];
    const out = collapseAliasedModelRows(rows);
    assert.equal(out.length, 1);
    assert.equal(out[0].id, "gpt-4o");
    assert.deepEqual(new Set(out[0].aliases), new Set([
      "gpt-4o-2024-08-06",
      "gpt-4o-2024-11-20",
    ]));
  });

  it("does not merge models that only share a name prefix", () => {
    const rows = [
      { id: "gpt-4o", name: "GPT-4o" },
      { id: "gpt-4o-mini", name: "GPT-4o mini" },
    ];
    const out = collapseAliasedModelRows(rows);
    assert.equal(out.length, 2);
  });
});
