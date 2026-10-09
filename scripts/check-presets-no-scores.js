/**
 * Guardrail: easy-mode-config/presets.json must stay model-ID-only.
 * Fail if score keys (chrf, arena_*) or score comments leak into the shipped catalog.
 */
"use strict";

const fs = require("fs");
const path = require("path");

const PRESETS_PATH = path.join(__dirname, "..", "easy-mode-config", "presets.json");
const FORBIDDEN_KEY = /^(chrf|arena_.*)$/i;
const FORBIDDEN_VALUE = /\bChrF\b|Arena Score/i;

const errors = [];

function walk(value, trail) {
  if (value == null) return;
  if (Array.isArray(value)) {
    value.forEach((item, i) => walk(item, `${trail}[${i}]`));
    return;
  }
  if (typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      if (FORBIDDEN_KEY.test(key)) {
        errors.push(`${trail}: forbidden key ${JSON.stringify(key)}`);
      }
      walk(child, `${trail}.${key}`);
    }
    return;
  }
  if (typeof value === "string" && FORBIDDEN_VALUE.test(value)) {
    errors.push(`${trail}: score comment in string ${JSON.stringify(value.slice(0, 80))}`);
  }
}

const raw = fs.readFileSync(PRESETS_PATH, "utf8");
let parsed;
try {
  parsed = JSON.parse(raw);
} catch (e) {
  console.error(`[check-presets-no-scores] Invalid JSON: ${e.message}`);
  process.exit(1);
}

walk(parsed, "presets.json");

if (errors.length) {
  console.error(
    `[check-presets-no-scores] ${PRESETS_PATH} must not contain benchmark scores or ranking comments:`,
  );
  for (const line of errors) console.error(`  ${line}`);
  process.exit(1);
}

console.log("[check-presets-no-scores] ok: catalog is model-ID-only");
