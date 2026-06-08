#!/usr/bin/env node
/**
 * Test CUSTOM_PROVIDER_* (OpenAI-compatible) and list available models.
 *
 * Usage:
 *   node scripts/check-custom-provider.js
 *   CUSTOM_PROVIDER_NAME=NVIDIA CUSTOM_PROVIDER_URL=... CUSTOM_PROVIDER_API_KEY=... node scripts/check-custom-provider.js
 *
 * Reads repo-root `.env` for unset CUSTOM_PROVIDER_* vars (export KEY=value lines).
 *
 * Env (all three required):
 *   CUSTOM_PROVIDER_NAME
 *   CUSTOM_PROVIDER_URL   — e.g. https://integrate.api.nvidia.com/v1
 *   CUSTOM_PROVIDER_API_KEY
 */

const fs = require("fs");
const path = require("path");
const {
  mergeKeys,
  engineConfigured,
  testProviderAuth,
  getAllModels,
  CUSTOM_CONFIG_KEYS,
  providerDisplayName,
} = require("../src/shared/llm");

const RED = "\x1b[31m";
const RESET = "\x1b[0m";

function printHelp() {
  console.log(`Test custom OpenAI-compatible provider config and list models.

Usage:
  node scripts/check-custom-provider.js
  node scripts/check-custom-provider.js --help

Loads repo-root .env when CUSTOM_PROVIDER_* vars are not already in the environment.

Env (all required):
  CUSTOM_PROVIDER_NAME
  CUSTOM_PROVIDER_URL
  CUSTOM_PROVIDER_API_KEY
`);
}

function loadEnvFile() {
  const envPath = path.join(__dirname, "..", ".env");
  if (!fs.existsSync(envPath)) return;
  const text = fs.readFileSync(envPath, "utf8");
  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const m = trimmed.match(/^export\s+([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (!m) continue;
    const key = m[1];
    if (process.env[key] != null && String(process.env[key]).trim() !== "") continue;
    let val = m[2].trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    process.env[key] = val;
  }
}

function maskKey(key) {
  if (!key || typeof key !== "string") return "(not set)";
  const s = key.trim();
  if (!s) return "(empty)";
  if (s.length <= 12) return "***";
  return `${s.slice(0, 8)}...${s.slice(-4)}`;
}

async function main() {
  if (process.argv.includes("--help") || process.argv.includes("-h")) {
    printHelp();
    process.exit(0);
  }

  loadEnvFile();
  const keysMap = mergeKeys({}, process.env);

  const name = (keysMap[CUSTOM_CONFIG_KEYS.name] || "").trim();
  const url = (keysMap[CUSTOM_CONFIG_KEYS.url] || "").trim();
  const apiKey = (keysMap[CUSTOM_CONFIG_KEYS.apiKey] || "").trim();

  console.log("Custom provider:", name || "(not set)");
  console.log("URL:", url || "(not set)");
  console.log("API key:", maskKey(apiKey));

  if (!engineConfigured("custom", keysMap)) {
    console.error(
      RED +
        "Error: CUSTOM_PROVIDER_NAME, CUSTOM_PROVIDER_URL, and CUSTOM_PROVIDER_API_KEY must all be set." +
        RESET,
    );
    process.exit(1);
  }

  console.log("\nTesting connection...");
  const test = await testProviderAuth("custom", apiKey, {
    baseURL: url,
    displayName: name,
    apiKey,
    keysMap,
  });
  if (!test.ok) {
    console.error(RED + "Test failed: " + test.message + RESET);
    process.exit(1);
  }
  console.log("Test:", test.message);

  console.log("\nFetching models...");
  const models = await getAllModels(keysMap);
  const prefix = name.endsWith("/") ? name.slice(0, -1) : name;
  const custom = models.filter(
    (m) => m.id.startsWith(`${prefix}/`) || m.id.startsWith("custom/"),
  );
  const label = providerDisplayName("custom", keysMap);

  if (custom.length === 0) {
    console.log(`No models returned for ${label}.`);
    process.exit(0);
  }

  console.log(`Found ${custom.length} model(s) for ${label}:\n`);
  for (const m of custom.sort((a, b) => a.id.localeCompare(b.id))) {
    const legacyInner = m.id.startsWith("custom/") ? m.id.slice("custom/".length) : "";
    const inner = m.id.startsWith(`${prefix}/`)
      ? m.id.slice(`${prefix}/`.length)
      : legacyInner;
    const suffix = m.name && m.name !== inner ? ` — ${m.name}` : "";
    console.log(`  ${m.id}${suffix}`);
  }
}

main().catch((err) => {
  console.error(RED + (err.message || err) + RESET);
  process.exit(1);
});
