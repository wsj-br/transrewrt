const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const {
  findFuzzyReplacement,
  rankFuzzyCandidates,
  modelFamilyKey,
  normalizeForCompare,
  scoreCandidate,
} = require("./fuzzyMatch.js");

describe("fuzzyMatch", () => {
  it("prefers the same model family over a closer unrelated id", () => {
    const unavailable = "openai/gpt-4o-mini";
    const family = "openai/gpt-4o-mini-2024-07-18";
    const other = "openai/gpt-4o-mimi";
    const familyScore = scoreCandidate(unavailable, "openai", family);
    const otherScore = scoreCandidate(unavailable, "openai", other);
    assert.ok(familyScore.score > otherScore.score);
    assert.equal(
      modelFamilyKey(normalizeForCompare(unavailable, "openai")),
      modelFamilyKey(normalizeForCompare(family, "openai")),
    );

    const { replacement } = findFuzzyReplacement("openai", unavailable, [
      { id: other },
      { id: family },
    ]);
    assert.equal(replacement, family);
  });

  it("rejects a weak match below the minimum score", () => {
    const { replacement, bestScore } = findFuzzyReplacement(
      "openai",
      "openai/gpt-4o-mini",
      [{ id: "openai/completely-different-model" }],
      { minScore: 0.9 },
    );
    assert.equal(replacement, null);
    assert.ok(bestScore < 0.9);
  });

  it("does not return embedding models", () => {
    const { candidates } = rankFuzzyCandidates("openai", "openai/gpt-4o-2024-08-06", [
      { id: "openai/text-embedding-3-small" },
      { id: "openai/gpt-4o" },
    ]);
    assert.deepEqual(
      candidates.map((row) => row.id),
      ["openai/gpt-4o"],
    );
  });
});
