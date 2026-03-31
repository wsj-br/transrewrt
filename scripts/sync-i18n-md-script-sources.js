#!/usr/bin/env node
/**
 * Refresh the Annex source listings in dev/i18n.md for extract-strings.js and
 * generate-translations.js from the files under scripts/.
 *
 * Usage: node scripts/sync-i18n-md-script-sources.js
 *        pnpm run i18n:sync-md-annex
 */

const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const I18N_MD = path.join(ROOT, "dev", "i18n.md");

const SECTIONS = [
  {
    startHeading: "### `scripts/extract-strings.js`",
    endHeading: "### `scripts/generate-translations.js`",
    scriptRel: "scripts/extract-strings.js",
  },
  {
    startHeading: "### `scripts/generate-translations.js`",
    endHeading: "### `scripts/openrouter-script-models.js`",
    scriptRel: "scripts/generate-translations.js",
  },
];

const FENCE_OPEN = "\n```javascript\n";

function replaceFirstJavascriptFence(markdown, startHeading, endHeading, newBody) {
  const start = markdown.indexOf(startHeading);
  const end = markdown.indexOf(endHeading);
  if (start === -1) {
    throw new Error(`Missing heading in i18n.md: ${startHeading}`);
  }
  if (end === -1) {
    throw new Error(`Missing heading in i18n.md: ${endHeading}`);
  }
  if (start >= end) {
    throw new Error(`Invalid section order: ${startHeading} must appear before ${endHeading}`);
  }

  const openAbs = markdown.indexOf(FENCE_OPEN, start);
  if (openAbs === -1 || openAbs > end) {
    throw new Error(
      "No ```javascript opening fence between " + startHeading + " and " + endHeading,
    );
  }

  const codeStart = openAbs + FENCE_OPEN.length;
  const closeAbs = markdown.indexOf("\n```\n", codeStart);
  if (closeAbs === -1 || closeAbs > end) {
    throw new Error("No closing ``` fence before " + endHeading);
  }

  const body = newBody.endsWith("\n") ? newBody : `${newBody}\n`;
  return markdown.slice(0, codeStart) + body + markdown.slice(closeAbs);
}

function main() {
  let md = fs.readFileSync(I18N_MD, "utf8");

  for (const { startHeading, endHeading, scriptRel } of SECTIONS) {
    const scriptPath = path.join(ROOT, scriptRel);
    if (!fs.existsSync(scriptPath)) {
      throw new Error(`Script not found: ${scriptPath}`);
    }
    const code = fs.readFileSync(scriptPath, "utf8");
    md = replaceFirstJavascriptFence(md, startHeading, endHeading, code);
  }

  fs.writeFileSync(I18N_MD, md, "utf8");
  console.log(
    `[sync-i18n-md] Updated Annex script sources in ${path.relative(ROOT, I18N_MD)}`,
  );
}

main();
