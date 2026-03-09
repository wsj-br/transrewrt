/**
 * Read locales/strings.json, translate missing entries via OpenRouter, write flat locale JSONs.
 * Requires API_KEY env var (OpenRouter). Run after extract-strings.js.
 *
 * Usage:
 *   node scripts/generate-translations.js [options]
 *   node scripts/generate-translations.js --help
 *   node scripts/generate-translations.js --dry-run
 *   node scripts/generate-translations.js --retranslate --model openai/gpt-4o
 *   node scripts/generate-translations.js --max-tokens 4096
 *
 * Options:
 *   --help, -h           Show usage and exit.
 *   --dry-run, -d        Show what would be translated; no API calls or file writes.
 *   --show-strings, -s  List the source strings that need translation (key + text) per language.
 *   --retranslate, -r    Retranslate all strings (ignore existing translations).
 *   --model, -m <name>   OpenRouter model to use (default: anthropic/claude-sonnet-4.6).
 */

const fs = require("fs");
const path = require("path");

function printHelp() {
  console.log(`
Generate translations for UI strings using OpenRouter.

Reads src/renderer/locales/strings.json (from i18n:extract), translates missing
entries per language via OpenRouter, and writes flat locale JSON files
(pt-BR.json, de.json, fr.json, es.json). Requires API_KEY env var.

Usage:
  node scripts/generate-translations.js [options]
  pnpm run i18n:translate -- [options]

Options:
  --help, -h              Show this help and exit.
  --dry-run, -d           Show what would be translated per language; do not call API or write files.
  --show-strings, -s      List source strings that need translation (key + text) per language.
  --retranslate, -r       Retranslate all strings (ignore existing translations).
  --model, -m <name>      OpenRouter model to use (default: anthropic/claude-sonnet-4.6).
  --max-tokens, -t <n>    Max tokens for completion (default: 32768).

Examples:
  node scripts/generate-translations.js --help
  node scripts/generate-translations.js --dry-run
  node scripts/generate-translations.js --show-strings
  node scripts/generate-translations.js
  node scripts/generate-translations.js --retranslate
  node scripts/generate-translations.js -m openai/gpt-4o
  node scripts/generate-translations.js -r -m anthropic/claude-sonnet-4
`);
}

const DEFAULT_MAX_TOKENS = 32768;

function parseArgs() {
  const args = process.argv.slice(2);
  let retranslate = false;
  let dryRun = false;
  let showStrings = false;
  let model = "anthropic/claude-sonnet-4.6";
  let maxTokens = DEFAULT_MAX_TOKENS;
  let help = false;
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--help" || arg === "-h") {
      help = true;
    } else if (arg === "--dry-run" || arg === "-d") {
      dryRun = true;
    } else if (arg === "--show-strings" || arg === "-s") {
      showStrings = true;
    } else if (arg === "--retranslate" || arg === "-r") {
      retranslate = true;
    } else if ((arg === "--model" || arg === "-m") && args[i + 1]) {
      model = args[++i];
    } else if ((arg === "--max-tokens" || arg === "-t") && args[i + 1]) {
      const n = parseInt(args[++i], 10);
      if (!Number.isNaN(n) && n > 0) maxTokens = n;
    }
  }
  return { retranslate, dryRun, showStrings, model, maxTokens, help };
}

const { retranslate, dryRun, showStrings, model: cliModel, maxTokens, help } = parseArgs();

if (help) {
  printHelp();
  process.exit(0);
}

const STRINGS_FILE = path.join(process.cwd(), "src", "renderer", "locales", "strings.json");
const LOCALES_DIR = path.join(process.cwd(), "src", "renderer", "locales");
const UI_LANGUAGES_PATH = path.join(process.cwd(), "src", "renderer", "locales", "ui-languages.json");
const API_KEY = process.env.API_KEY;
const MODEL = cliModel;
const MAX_TOKENS = maxTokens;

let LANGUAGES = [];
if (fs.existsSync(UI_LANGUAGES_PATH)) {
  const uiLanguages = JSON.parse(fs.readFileSync(UI_LANGUAGES_PATH, "utf8"));
  LANGUAGES = Array.isArray(uiLanguages)
    ? uiLanguages.map((l) => ({ code: l.code, name: l.englishName }))
    : [];
}

if (!fs.existsSync(STRINGS_FILE)) {
  console.error("[translate] Run i18n:extract first to create strings.json");
  process.exit(1);
}

if (LANGUAGES.length === 0) {
  console.error("[translate] No languages in src/renderer/locales/ui-languages.json");
  process.exit(1);
}

if (!API_KEY) {
  console.warn("[translate] API_KEY not set; will only write locale files from existing strings.json");
}

if (retranslate) {
  console.log("[translate] --retranslate: will translate all strings for each language");
}
console.log(`[translate] model: ${MODEL}, max_tokens: ${MAX_TOKENS}`);

const strings = JSON.parse(fs.readFileSync(STRINGS_FILE, "utf8"));
const entries = Object.entries(strings);

if (dryRun) {
  console.log("[translate] Dry run: showing what would be translated (no API calls, no files written).\n");
  let totalMissing = 0;
  for (const lang of LANGUAGES) {
    const missing = retranslate
      ? entries
      : entries.filter(([, entry]) => !entry.translated[lang.code]);
    const n = missing.length;
    totalMissing += n;
    if (n > 0) {
      const sample = missing.slice(0, 3).map(([k]) => k);
      const more = n > 3 ? ` ... and ${n - 3} more` : "";
      console.log(`  ${lang.code} (${lang.name}): ${n} strings to translate`);
      console.log(`    Sample keys: ${sample.join(", ")}${more}`);
    } else {
      console.log(`  ${lang.code} (${lang.name}): up to date (0 to translate)`);
    }
  }
  console.log(`\nTotal strings that would be translated: ${totalMissing}`);
  process.exit(0);
}

if (showStrings) {
  console.log("[translate] Strings that need translation (no API calls, no files written).\n");
  for (const lang of LANGUAGES) {
    const missing = retranslate
      ? entries
      : entries.filter(([, entry]) => !entry.translated[lang.code]);
    console.log(`--- ${lang.code} (${lang.name}): ${missing.length} strings ---`);
    for (const [key, entry] of missing) {
      const source = (entry.source || "").replace(/\n/g, "\\n");
      console.log(`  ${key}: ${JSON.stringify(source)}`);
    }
    console.log("");
  }
  process.exit(0);
}

const usageTotal = {
  prompt_tokens: 0,
  completion_tokens: 0,
  total_cost: 0,
};

function extractUsage(data) {
  const u = data.usage || {};
  const rawCost =
    data.total_cost ?? data.cost ?? u.total_cost ?? u.cost;
  const cost = typeof rawCost === "number" && !Number.isNaN(rawCost)
    ? rawCost
    : typeof rawCost === "string"
      ? Number.parseFloat(rawCost) || 0
      : 0;
  return {
    prompt_tokens: Number(u.prompt_tokens) || 0,
    completion_tokens: Number(u.completion_tokens) || 0,
    total_cost: cost,
  };
}

function abortWithError(message, details = null) {
  console.error("\n[translate] ERROR:", message);
  if (details != null) {
    console.error("[translate] Details:");
    if (details instanceof Error) {
      console.error(details.stack || details.message);
      if (details.cause) console.error("[translate] Cause:", details.cause);
    } else if (typeof details === "object") {
      console.error(JSON.stringify(details, null, 2));
    } else {
      console.error(details);
    }
  }
  process.exit(1);
}

const SYSTEM_PROMPT = `You are a professional UI/UX translator specializing in software interfaces.

RULES:
- Translate UI labels, buttons, tooltips, menu items, and status messages
- Preserve capitalization style (Title Case stays Title Case, ALL CAPS stays ALL CAPS)
- Preserve leading/trailing whitespace exactly
- Keep placeholders unchanged: {{variable}}, {0}, %s, %d, :value
- Keep HTML tags unchanged: <strong>, <br/>, etc.
- Use informal/familiar tone where natural for the target language (e.g. "tu" not "vous" in French UI)
- Short strings (1-3 words) must stay short — do not expand them
- You MUST respond with ONLY a valid JSON array, nothing else
- No markdown, no code fences, no explanation, no preamble, no postamble
- First character of your response must be [ and last character must be ]`;

async function translateBatch(texts, langName) {
  if (!API_KEY) return { translated: texts.map(() => null), usage: { prompt_tokens: 0, completion_tokens: 0, total_cost: 0 } };
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://github.com/wsj-br/transrewrt",
      "X-Title": "Transrewrt-generate-translations",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `Translate these ${texts.length} UI strings to ${langName} and return a JSON array:

${JSON.stringify(texts, null, 2)}

Respond with ONLY the JSON array. No other text.`,
        },
      ],
    }),
  });

  const responseText = await response.text();
  let data;
  try {
    data = JSON.parse(responseText);
  } catch (e) {
    abortWithError("Response is not valid JSON", {
      status: response.status,
      statusText: response.statusText,
      rawBody: responseText,
      parseError: e.message,
    });
  }

  if (!response.ok) {
    abortWithError(`API request failed: ${response.status} ${response.statusText}`, {
      status: response.status,
      statusText: response.statusText,
      body: data,
    });
  }

  if (data.error) {
    abortWithError("API returned an error", {
      error: data.error,
      fullResponse: data,
    });
  }

  const usage = extractUsage(data);
  usageTotal.prompt_tokens += usage.prompt_tokens;
  usageTotal.completion_tokens += usage.completion_tokens;
  usageTotal.total_cost += usage.total_cost;

  const content = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || "";
  const cleaned = content.trim().replace(/^```(?:json)?\s*|\s*```$/g, "").trim();
  let translated;
  try {
    translated = JSON.parse(cleaned);
  } catch (e) {
    abortWithError("Model response is not valid JSON array", {
      parseError: e.message,
      rawContent: content,
      fullResponse: data,
    });
  }
  return { translated, usage };
}

async function generateForLang(lang) {
  const missing = retranslate
    ? entries
    : entries.filter(([, entry]) => !entry.translated[lang.code]);
  if (missing.length === 0) {
    console.log(`[translate] ${lang.code}: up to date`);
  } else {
    console.log(`[translate] ${lang.code}: ${missing.length} strings to translate`);
    const CHUNK = 50;
    for (let i = 0; i < missing.length; i += CHUNK) {
      const chunk = missing.slice(i, i + CHUNK);
      const sources = chunk.map(([, v]) => v.source);
      try {
        const { translated } = await translateBatch(sources, lang.name);
        chunk.forEach(([h], idx) => {
          if (translated[idx]) strings[h].translated[lang.code] = translated[idx];
        });
        console.log(`  ${lang.code} chunk ${Math.floor(i / CHUNK) + 1}/${Math.ceil(missing.length / CHUNK)} done`);
      } catch (e) {
        abortWithError(`Chunk failed (${lang.code}, chunk ${Math.floor(i / CHUNK) + 1})`, e);
      }
    }
    fs.writeFileSync(STRINGS_FILE, JSON.stringify(strings, null, 2), "utf8");
  }

  const locale = {};
  for (const entry of Object.values(strings)) {
    const tx = entry.translated[lang.code];
    if (tx) locale[entry.source] = tx;
  }
  const localePath = path.join(LOCALES_DIR, `${lang.code}.json`);
  fs.writeFileSync(localePath, JSON.stringify(locale, null, 2), "utf8");
  console.log(`[translate] ${lang.code}: wrote ${Object.keys(locale).length} strings to ${localePath}`);
}

(async () => {
  if (!fs.existsSync(LOCALES_DIR)) {
    fs.mkdirSync(LOCALES_DIR, { recursive: true });
  }
  for (const lang of LANGUAGES) {
    await generateForLang(lang);
  }

  const totalTokens = usageTotal.prompt_tokens + usageTotal.completion_tokens;
  console.log("\n[translate] done");
  if (totalTokens > 0) {
    console.log(
      `[translate] usage: ${usageTotal.prompt_tokens} prompt + ${usageTotal.completion_tokens} completion = ${totalTokens} total tokens`
    );
    if (usageTotal.total_cost > 0) {
      console.log(`[translate] total cost: $${usageTotal.total_cost.toFixed(4)} USD`);
    } else {
      console.log("[translate] total cost: (not reported by API; enable usage accounting for cost)");
    }
  }
})();
