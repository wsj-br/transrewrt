#!/usr/bin/env node
/**
 * Check OpenRouter API key and print key value (masked) and limit info,
 * like Settings > Cost tracking tab.
 *
 * Usage:
 *   API_KEY=sk-or-... node scripts/check-api-key.js
 *   node scripts/check-api-key.js sk-or-v1-xxxx
 *   node scripts/check-api-key.js --key sk-or-v1-xxxx [--url https://openrouter.ai/api/v1]
 *
 * Env:
 *   API_KEY - API key (used if no --key or positional arg); same as server/Docker
 *   OPENROUTER_API_KEY - fallback if API_KEY not set
 *   OPENROUTER_API_URL - Base API URL (default https://openrouter.ai/api/v1)
 */

const DEFAULT_BASE_URL = "https://openrouter.ai/api/v1";
const RED = "\x1b[31m";
const RESET = "\x1b[0m";

function printHelp() {
  console.log(`Check OpenRouter API key and print key value (masked) and limit info.

Usage:
  API_KEY=sk-or-... node scripts/check-api-key.js
  node scripts/check-api-key.js <key>
  node scripts/check-api-key.js --key <key> [--url <baseUrl>]

Options:
  --help, -h    Show this help and exit.
  --key <key>   OpenRouter API key (or set API_KEY / OPENROUTER_API_KEY).
  --url <url>   Base API URL (default: ${DEFAULT_BASE_URL}). Uses OPENROUTER_API_URL if set.

Env: API_KEY, OPENROUTER_API_KEY, OPENROUTER_API_URL
`);
}

function maskKey(key) {
  if (!key || typeof key !== "string") return "(no key)";
  const s = key.trim();
  if (s.length <= 12) return "***";
  return s.slice(0, 8) + "..." + s.slice(-4);
}

function parseArgs() {
  const args = process.argv.slice(2);
  let key = process.env.API_KEY || process.env.OPENROUTER_API_KEY || "";
  let baseUrl = process.env.OPENROUTER_API_URL || DEFAULT_BASE_URL;
  let help = false;
  const unknown = [];

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--help" || args[i] === "-h") {
      help = true;
    } else if (args[i] === "--key" && args[i + 1]) {
      key = args[++i];
    } else if (args[i] === "--url" && args[i + 1]) {
      baseUrl = args[++i];
    } else if (!args[i].startsWith("-") && !key) {
      key = args[i];
    } else {
      unknown.push(args[i]);
    }
  }

  baseUrl = baseUrl.replace(/\/+$/, "");
  return { key: key.trim(), baseUrl, unknown, help };
}

async function main() {
  const { key, baseUrl, unknown, help } = parseArgs();

  if (help) {
    printHelp();
    process.exit(0);
  }
  if (unknown.length > 0) {
    console.error(RED + "Unknown option(s): " + unknown.join(", ") + RESET);
    console.error(RED + "Use --help to see usage." + RESET + "\n");
    process.exit(1);
  }
  if (!key) {
    console.error("Error: API key required. Set API_KEY (or OPENROUTER_API_KEY) or pass --key <key> or the key as first argument.");
    process.exit(1);
  }

  if (!baseUrl.includes("openrouter.ai")) {
    console.error("Error: Key info is only available for OpenRouter API. Use OpenRouter base URL.");
    process.exit(1);
  }

  const keyUrl = `${baseUrl}/key?_=${Date.now()}`;
  const authKey = key.trim();
  if (!authKey) {
    console.error("Error: API key is empty after trimming.");
    process.exit(1);
  }

  try {
    const res = await fetch(keyUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authKey}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      console.error("Error: API key check failed.");
      console.error("Tried key:", maskKey(authKey), `(Authorization: Bearer <${authKey.length} chars>)`);
      console.error("HTTP", res.status, data.error || data.message || res.statusText || "");
      process.exit(1);
    }

    const raw = data?.data ?? data;
    const info = raw && typeof raw === "object" ? raw : {};

    const usage =
      info.usage ??
      (info.limit != null && info.limit_remaining != null
        ? Number(info.limit) - Number(info.limit_remaining)
        : null);
    const limit = info.limit != null ? Number(info.limit) : null;
    const limitRemaining = info.limit_remaining != null ? Number(info.limit_remaining) : null;
    const limitReset = info.limit_reset ?? null;

    console.log("API key:", maskKey(authKey));
    console.log("Working: yes");

    if (usage != null && !Number.isNaN(usage)) {
      console.log("Usage: $", usage.toFixed(2));
    }
    if (limit != null && !Number.isNaN(limit)) {
      console.log("Limit: $", limit.toFixed(2));
    }
    if (limitRemaining != null && !Number.isNaN(limitRemaining)) {
      console.log("Limit remaining: $", limitRemaining.toFixed(2));
    }
    if (limitReset != null) {
      console.log("Limit reset:", limitReset);
    }
    if (
      (usage == null || Number.isNaN(usage)) &&
      (limit == null || Number.isNaN(limit)) &&
      (limitRemaining == null || Number.isNaN(limitRemaining))
    ) {
      console.log("(no limit/usage data from API)");
    }
  } catch (err) {
    console.error("Error:", err.message || err);
    process.exit(1);
  }
}

main();
