const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { stripPromptWrapperTags } = require("./stripPromptWrapperTags");

describe("stripPromptWrapperTags", () => {
  it("returns empty string for nullish input", () => {
    assert.equal(stripPromptWrapperTags(null), "");
    assert.equal(stripPromptWrapperTags(undefined), "");
  });

  it("leaves clean output unchanged", () => {
    assert.equal(stripPromptWrapperTags("Hello world"), "Hello world");
    assert.equal(stripPromptWrapperTags("  spaced  "), "  spaced  ");
  });

  it("removes wrapping <translate> tags", () => {
    assert.equal(stripPromptWrapperTags("<translate>Bonjour</translate>"), "Bonjour");
  });

  it("removes wrapping <rewrite> tags", () => {
    assert.equal(stripPromptWrapperTags("<rewrite>Clearer prose</rewrite>"), "Clearer prose");
  });

  it("removes wrapping <transform> tags", () => {
    assert.equal(stripPromptWrapperTags("<transform>RESULT</transform>"), "RESULT");
  });

  it("removes tags case-insensitively", () => {
    assert.equal(stripPromptWrapperTags("<Translate>Hi</TRANSLATE>"), "Hi");
  });

  it("removes tags when only the opening or closing tag leaks", () => {
    assert.equal(stripPromptWrapperTags("<translate>Only open"), "Only open");
    assert.equal(stripPromptWrapperTags("Only close</rewrite>"), "Only close");
  });

  it("removes multiline wrapper tags and leftover outer newlines", () => {
    assert.equal(
      stripPromptWrapperTags("<translate>\nHola\n</translate>"),
      "Hola",
    );
  });

  it("removes tags embedded in otherwise usable text", () => {
    assert.equal(
      stripPromptWrapperTags("Prefix <transform>mid</transform> suffix"),
      "Prefix mid suffix",
    );
  });

  it("does not alter text that merely mentions the words without tags", () => {
    assert.equal(
      stripPromptWrapperTags("Use the translate tag carefully"),
      "Use the translate tag carefully",
    );
  });
});
