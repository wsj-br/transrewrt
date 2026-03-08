/**
 * Extract all t("...") / t('...') calls from renderer source into locales/strings.json.
 * Also includes package.json "description" (used as t(APP_DESCRIPTION) in About tab).
 * Preserves existing translations. Run before generate-translations.js.
 *
 * Usage: node scripts/extract-strings.js
 */

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const SRC_DIR = path.join(process.cwd(), "src", "renderer");
const OUT_FILE = path.join(process.cwd(), "src", "renderer", "locales", "strings.json");
const PACKAGE_JSON = path.join(process.cwd(), "package.json");
const UI_LANGUAGES_PATH = path.join(process.cwd(), "src", "renderer", "locales", "ui-languages.json");

// Match t("..."), t('...'), t(`...`) - capture the string content (handles escaped quotes)
const T_PATTERN = /\bt\s*\(\s*["'`]((?:[^"'`\\]|\\.)*)["'`]\s*\)/g;

function hash(str) {
  return crypto.createHash("md5").update(str).digest("hex").slice(0, 8);
}

function* walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name !== "node_modules" && ent.name !== "locales") {
        yield* walkDir(full);
      }
    } else if (ent.isFile() && /\.(js|jsx)$/.test(ent.name)) {
      yield full;
    }
  }
}

const found = new Map(); // hash -> source string

for (const file of walkDir(SRC_DIR)) {
  const content = fs.readFileSync(file, "utf8");
  let match;
  while ((match = T_PATTERN.exec(content)) !== null) {
    const str = match[1].replace(/\\(.)/g, "$1").trim();
    if (str) found.set(hash(str), str);
  }
}

// Include package.json description (displayed in About tab via t(APP_DESCRIPTION))
if (fs.existsSync(PACKAGE_JSON)) {
  try {
    const pkg = JSON.parse(fs.readFileSync(PACKAGE_JSON, "utf8"));
    const desc = typeof pkg.description === "string" ? pkg.description.trim() : "";
    if (desc) found.set(hash(desc), desc);
  } catch (e) {
    console.warn("[extract] Could not read package.json description:", e.message);
  }
}

// Include UI_LANGUAGES englishName only (label is already in the local language, no need to translate)
if (fs.existsSync(UI_LANGUAGES_PATH)) {
  try {
    const uiLanguages = JSON.parse(fs.readFileSync(UI_LANGUAGES_PATH, "utf8"));
    if (Array.isArray(uiLanguages)) {
      for (const entry of uiLanguages) {
        if (entry.englishName && typeof entry.englishName === "string") {
          const str = entry.englishName.trim();
          if (str) found.set(hash(str), str);
        }
      }
    }
  } catch (e) {
    console.warn("[extract] Could not read ui-languages.json:", e.message);
  }
}

let existing = {};
if (fs.existsSync(OUT_FILE)) {
  try {
    existing = JSON.parse(fs.readFileSync(OUT_FILE, "utf8"));
  } catch (e) {
    console.warn("[extract] Could not parse existing strings.json:", e.message);
  }
}

const output = {};
for (const [h, str] of found) {
  const prev = existing[h];
  output[h] = prev && typeof prev === "object" && prev.source !== undefined
    ? { source: str, translated: prev.translated || {} }
    : { source: str, translated: {} };
}

const outDir = path.dirname(OUT_FILE);
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(OUT_FILE, JSON.stringify(output, null, 2), "utf8");
console.log(`[extract] ${found.size} strings → src/renderer/locales/strings.json`);
