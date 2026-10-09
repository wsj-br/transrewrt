#!/usr/bin/env node
/**
 * Fetch https://models.dev/api.json and write a compact cost snapshot used
 * for offline / first-load estimates (src/shared/llm/modelsDevPricing.snapshot.json).
 */

import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const requireFromHere = createRequire(import.meta.url);
const {
  MODELS_DEV_API_URL,
  pruneModelsDevApiJson,
} = requireFromHere("../src/shared/llm/modelsDevPricing.js");

const OUT = path.join(root, "src/shared/llm/modelsDevPricing.snapshot.json");

const res = await fetch(MODELS_DEV_API_URL, { signal: AbortSignal.timeout(60_000) });
if (!res.ok) {
  throw new Error(`models.dev api.json HTTP ${res.status}`);
}
const api = await res.json();
const models = pruneModelsDevApiJson(api);
const providerCount = Object.keys(models).length;
const modelCount = Object.values(models).reduce((n, m) => n + Object.keys(m).length, 0);
if (!providerCount) {
  throw new Error("models.dev api.json contained no prunable cost rows");
}

const snapshot = {
  generatedAt: new Date().toISOString(),
  source: MODELS_DEV_API_URL,
  models,
};
fs.writeFileSync(OUT, `${JSON.stringify(snapshot)}\n`);
const bytes = fs.statSync(OUT).size;
console.log(
  `Wrote ${path.relative(root, OUT)} (${providerCount} providers, ${modelCount} models, ${bytes} bytes)`,
);
