#!/usr/bin/env node
/**
 * Sync app version from package.json into all files that display or reference it
 * (e.g. README badge, docs). Run after bumping version in package.json.
 *
 * Usage: node scripts/update-version.js
 * Or: pnpm update-version
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PKG_PATH = path.join(ROOT, "package.json");

// Semver-like: X.Y.Z or X.Y.Z-prerelease
const VERSION_REGEX = /\d+\.\d+\.\d+(-[a-zA-Z0-9.-]+)?/;

function getPackageVersion() {
  const pkg = JSON.parse(fs.readFileSync(PKG_PATH, "utf8"));
  const v = pkg.version;
  if (!v || typeof v !== "string") {
    console.error("package.json has no valid 'version' field.");
    process.exit(1);
  }
  return v;
}

/**
 * List of { file (relative to repo root), pattern (RegExp or string), replacement (string or (match)=>string) }
 * Replacement can use $1, $2 if pattern has capture groups; or a function that receives full match.
 */
const REPLACEMENTS = [
  {
    file: "README.md",
    pattern: /(badge\/version-)(\d+\.\d+\.\d+(-[a-zA-Z0-9.-]+)?)(-blue)/,
    replacement: (_, prefix, _old, _pre, suffix) => `${prefix}${version}${suffix}`,
  },
];

const version = getPackageVersion();
console.log(`Using version from package.json: ${version}`);

let updated = 0;
for (const { file, pattern, replacement } of REPLACEMENTS) {
  const filePath = path.join(ROOT, file);
  if (!fs.existsSync(filePath)) {
    console.warn(`Skip (not found): ${file}`);
    continue;
  }
  let content = fs.readFileSync(filePath, "utf8");
  const replacer = typeof replacement === "function" ? replacement : () => replacement;
  const newContent = content.replace(pattern, (match, ...groups) => {
    return replacer(match, ...groups);
  });
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, "utf8");
    console.log(`Updated: ${file}`);
    updated++;
  } else {
    console.log(`No change: ${file}`);
  }
}

console.log(`Done. ${updated} file(s) updated.`);
