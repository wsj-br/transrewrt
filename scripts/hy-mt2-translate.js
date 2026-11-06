#!/usr/bin/env node
/**
 * Translate text with a local Ollama Hy-MT2 model and print the result.
 *
 * Usage:
 *   node scripts/hy-mt2-translate.js --to pt "The meeting has been moved to Thursday afternoon."
 *   node scripts/hy-mt2-translate.js --cpu --to pt "The meeting has been moved to Thursday afternoon."
 *   node scripts/hy-mt2-translate.js --to "Traditional Chinese" "Hello, world"
 *   echo "Long text..." | node scripts/hy-mt2-translate.js --to de
 *   node scripts/hy-mt2-translate.js --list-languages
 *
 * Env:
 *   HY_MT2_MODEL  Model name (default tencent/hy-mt2-1.8b-gguf-q4-k-m:latest)
 *   OLLAMA_HOST   Ollama base URL or host:port (default http://localhost:11434)
 */

const { parseArgs } = require("node:util");
const readline = require("node:readline");
const { Readable } = require("node:stream");

const DEFAULT_MODEL = "tencent/hy-mt2-1.8b-gguf-q4-k-m:latest";
const DEFAULT_URL = "http://localhost:11434";
// Ollama reuses a loaded runner when num_gpu is omitted, so a previous --cpu
// call would keep later calls on the CPU. 99 is above this model's 32 blocks
// and offloads every layer to the GPU.
const GPU_LAYER_COUNT = 99;
const RED = "\x1b[31m";
const RESET = "\x1b[0m";

/** README language table. Prompts always use the English name. */
const LANGUAGES = [
  { code: "zh", name: "Chinese" },
  { code: "en", name: "English" },
  { code: "fr", name: "French" },
  { code: "pt", name: "Portuguese" },
  { code: "es", name: "Spanish" },
  { code: "ja", name: "Japanese" },
  { code: "tr", name: "Turkish" },
  { code: "ru", name: "Russian" },
  { code: "ar", name: "Arabic" },
  { code: "ko", name: "Korean" },
  { code: "th", name: "Thai" },
  { code: "it", name: "Italian" },
  { code: "de", name: "German" },
  { code: "vi", name: "Vietnamese" },
  { code: "ms", name: "Malay" },
  { code: "id", name: "Indonesian" },
  { code: "tl", name: "Filipino" },
  { code: "hi", name: "Hindi" },
  { code: "zh-Hant", name: "Traditional Chinese" },
  { code: "pl", name: "Polish" },
  { code: "cs", name: "Czech" },
  { code: "nl", name: "Dutch" },
  { code: "km", name: "Khmer" },
  { code: "my", name: "Burmese" },
  { code: "fa", name: "Persian" },
  { code: "gu", name: "Gujarati" },
  { code: "ur", name: "Urdu" },
  { code: "te", name: "Telugu" },
  { code: "mr", name: "Marathi" },
  { code: "he", name: "Hebrew" },
  { code: "bn", name: "Bengali" },
  { code: "ta", name: "Tamil" },
  { code: "uk", name: "Ukrainian" },
  { code: "bo", name: "Tibetan" },
  { code: "kk", name: "Kazakh" },
  { code: "mn", name: "Mongolian" },
  { code: "ug", name: "Uyghur" },
  { code: "yue", name: "Cantonese" },
];

function printHelp() {
  console.log(`Translate text with a local Ollama Hy-MT2 model.

Usage:
  node scripts/hy-mt2-translate.js --to <lang> [text ...]
  echo "text" | node scripts/hy-mt2-translate.js --to <lang>

Options:
  --to <lang>         Destination language: a code (pt, zh-Hant, yue) or an English name.
  --model <name>      Ollama model (default: ${DEFAULT_MODEL}). Uses HY_MT2_MODEL if set.
  --url <base>        Ollama base URL (default: ${DEFAULT_URL}). Uses OLLAMA_HOST if set.
  --cpu               Run this request on the CPU (num_gpu 0). Otherwise num_gpu is ${GPU_LAYER_COUNT}, which puts every layer on the GPU.
  --list-languages    Print supported languages and exit.
  --help, -h          Show this help and exit.

Text is the remaining arguments, joined with spaces. With no text and a piped stdin, stdin is used.
After each translation, token count, tokens/second, and translation time are printed to stderr.
`);
}

function printLanguages() {
  const width = Math.max(...LANGUAGES.map((lang) => lang.code.length));
  for (const lang of LANGUAGES) {
    console.log(`${lang.code.padEnd(width)}  ${lang.name}`);
  }
}

function resolveLanguage(input) {
  const needle = input.trim().toLowerCase();
  const match = LANGUAGES.find(
    (lang) => lang.code.toLowerCase() === needle || lang.name.toLowerCase() === needle,
  );
  return match ? match.name : null;
}

function formatLanguageList() {
  const width = Math.max(...LANGUAGES.map((lang) => lang.code.length));
  return LANGUAGES.map((lang) => `  ${lang.code.padEnd(width)}  ${lang.name}`).join("\n");
}

function buildPrompt(text, targetLang) {
  return (
    `Translate the following text into ${targetLang}. ` +
    "Note that you should only output the translated result without any additional explanation:\n\n" +
    text
  );
}

function normalizeBaseUrl(raw) {
  let url = (raw || "").trim();
  if (!url) url = DEFAULT_URL;
  if (!/^https?:\/\//i.test(url)) url = `http://${url}`;
  return url.replace(/\/+$/, "");
}

function isUnreachable(err) {
  const codes = new Set([
    "ECONNREFUSED",
    "ENOTFOUND",
    "EAI_AGAIN",
    "EHOSTUNREACH",
    "ENETUNREACH",
    "ECONNRESET",
  ]);
  const seen = new Set();
  function walk(current) {
    if (!current || typeof current !== "object" || seen.has(current)) return false;
    seen.add(current);
    if (codes.has(current.code)) return true;
    if (Array.isArray(current.errors) && current.errors.some(walk)) return true;
    return walk(current.cause);
  }
  return walk(err);
}

function isModelNotFound(status, message) {
  return status === 404 || /not found/i.test(message || "");
}

function printStats(finalMsg) {
  const promptTokens = finalMsg.prompt_eval_count;
  const outputTokens = finalMsg.eval_count;
  const evalNs = finalMsg.eval_duration;
  const totalNs = finalMsg.total_duration;
  const parts = [];
  if (typeof outputTokens === "number") {
    const prompt = typeof promptTokens === "number" ? `, ${promptTokens} prompt` : "";
    parts.push(`tokens: ${outputTokens} output${prompt}`);
  }
  if (typeof evalNs === "number" && evalNs > 0 && typeof outputTokens === "number") {
    parts.push(`${(outputTokens / (evalNs / 1e9)).toFixed(1)} tok/s`);
  }
  if (typeof totalNs === "number") parts.push(`time: ${(totalNs / 1e9).toFixed(2)} s`);
  if (parts.length > 0) console.error(parts.join(" · "));
}

async function readErrorMessage(res) {
  const body = await res.text();
  try {
    const parsed = JSON.parse(body);
    if (parsed && typeof parsed.error === "string") return parsed.error;
  } catch {
    // Body was not JSON; fall through to the raw text.
  }
  return body.trim() || res.statusText || `HTTP ${res.status}`;
}

async function translate({ url, model, prompt, cpu }) {
  const options = {
    temperature: 0.7,
    top_p: 0.6,
    top_k: 20,
    repeat_penalty: 1.05,
    num_ctx: 8192,
    num_predict: 4096,
  };
  options.num_gpu = cpu ? 0 : GPU_LAYER_COUNT;

  let res;
  try {
    res = await fetch(`${url}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        stream: true,
        messages: [{ role: "user", content: prompt }],
        options,
      }),
    });
  } catch (err) {
    if (isUnreachable(err)) {
      console.error(`${RED}Is Ollama running at ${url}?${RESET}`);
      process.exit(1);
    }
    throw err;
  }

  if (!res.ok) {
    const message = await readErrorMessage(res);
    if (isModelNotFound(res.status, message)) {
      console.error(`${RED}Model not found: ${model}${RESET}`);
      console.error("Run `ollama ls` to see installed models.");
      process.exit(1);
    }
    console.error(`${RED}Ollama error (HTTP ${res.status}): ${message}${RESET}`);
    process.exit(1);
  }

  const rl = readline.createInterface({ input: Readable.fromWeb(res.body) });
  let wrote = false;
  let endedWithNewline = false;
  let finalMsg = null;

  for await (const line of rl) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    let msg;
    try {
      msg = JSON.parse(trimmed);
    } catch {
      throw new Error(`Unexpected response from Ollama: ${trimmed.slice(0, 200)}`);
    }
    if (typeof msg.error === "string") {
      if (isModelNotFound(0, msg.error)) {
        console.error(`${RED}Model not found: ${model}${RESET}`);
        console.error("Run `ollama ls` to see installed models.");
        process.exit(1);
      }
      console.error(`${RED}Ollama error: ${msg.error}${RESET}`);
      process.exit(1);
    }
    const chunk = msg.message && typeof msg.message.content === "string" ? msg.message.content : "";
    if (chunk) {
      process.stdout.write(chunk);
      wrote = true;
      endedWithNewline = chunk.endsWith("\n");
    }
    if (msg.done) finalMsg = msg;
  }

  if (!wrote) {
    console.error(`${RED}Model returned an empty translation.${RESET}`);
    process.exit(1);
  }
  if (!endedWithNewline) process.stdout.write("\n");
  if (finalMsg) printStats(finalMsg);
}

async function readStdin() {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf8");
}

function parseCli(argv) {
  try {
    return parseArgs({
      args: argv,
      options: {
        to: { type: "string" },
        model: { type: "string" },
        url: { type: "string" },
        cpu: { type: "boolean", default: false },
        "list-languages": { type: "boolean", default: false },
        help: { type: "boolean", short: "h", default: false },
      },
      allowPositionals: true,
      strict: true,
    });
  } catch (err) {
    console.error(`${RED}${err.message || err}${RESET}`);
    console.error(`${RED}Use --help to see usage.${RESET}`);
    process.exit(1);
  }
}

async function main() {
  const { values, positionals } = parseCli(process.argv.slice(2));

  if (values.help) {
    printHelp();
    return;
  }
  if (values["list-languages"]) {
    printLanguages();
    return;
  }

  const langInput = typeof values.to === "string" ? values.to.trim() : "";
  if (!langInput) {
    console.error(`${RED}--to <lang> is required.${RESET}`);
    console.error(`${RED}Use --help to see usage.${RESET}`);
    process.exit(1);
  }
  const targetLang = resolveLanguage(langInput);
  if (!targetLang) {
    console.error(`${RED}Unknown language: ${langInput}${RESET}`);
    console.error("Supported languages:");
    console.error(formatLanguageList());
    process.exit(1);
  }

  let text = positionals.join(" ");
  if (!text && !process.stdin.isTTY) text = await readStdin();
  text = text.trim();
  if (!text) {
    console.error(`${RED}No text to translate. Pass it as arguments or pipe it on stdin.${RESET}`);
    process.exit(1);
  }

  const model = (values.model || process.env.HY_MT2_MODEL || DEFAULT_MODEL).trim();
  const url = normalizeBaseUrl(values.url || process.env.OLLAMA_HOST || DEFAULT_URL);

  await translate({
    url,
    model,
    prompt: buildPrompt(text, targetLang),
    cpu: values.cpu,
  });
}

main().catch((err) => {
  console.error(`${RED}Error: ${err.message || err}${RESET}`);
  process.exit(1);
});
