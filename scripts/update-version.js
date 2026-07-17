#!/usr/bin/env node
/**
 * Sync app version from package.json into all files that display or reference it
 * (README badge, website package.json, marketing VERSION constant). Run after
 * bumping version in the root package.json.
 *
 * Usage: node scripts/update-version.js
 * Or: pnpm update-version
 */

const fs = require("fs");
const path = require("path");

const RED = "\x1b[31m";
const RESET = "\x1b[0m";

const extraArgs = process.argv.slice(2);
if (extraArgs.length === 1 && (extraArgs[0] === "--help" || extraArgs[0] === "-h")) {
  console.log("Sync app version from package.json into README badge, website/package.json,");
  console.log("and website marketing VERSION.\n");
  console.log("Usage: node scripts/update-version.js");
  console.log("       pnpm run update-version\n");
  console.log("Options:\n  --help, -h   Show this help and exit.\n");
  process.exit(0);
}
if (extraArgs.length > 0) {
  console.error(RED + "Unknown option(s): " + extraArgs.join(", ") + RESET);
  console.error(RED + "Use --help to see usage." + RESET + "\n");
  process.exit(1);
}

const ROOT = path.resolve(__dirname, "..");
const PKG_PATH = path.join(ROOT, "package.json");

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
  {
    file: "website/src/components/marketing/data.ts",
    pattern: /(export const VERSION = ')(\d+\.\d+\.\d+(-[a-zA-Z0-9.-]+)?)(')/,
    replacement: (_, prefix, _old, _pre, suffix) => `${prefix}${version}${suffix}`,
  },
];

const version = getPackageVersion();
console.log(`Using version from package.json: ${version}`);

let updated = 0;

function writeIfChanged(relPath, nextContent) {
  const filePath = path.join(ROOT, relPath);
  if (!fs.existsSync(filePath)) {
    console.warn(`Skip (not found): ${relPath}`);
    return;
  }
  const prev = fs.readFileSync(filePath, "utf8");
  if (prev === nextContent) {
    console.log(`No change: ${relPath}`);
    return;
  }
  fs.writeFileSync(filePath, nextContent, "utf8");
  console.log(`Updated: ${relPath}`);
  updated++;
}

// website/package.json — keep marketing site version aligned with the app.
{
  const rel = "website/package.json";
  const filePath = path.join(ROOT, rel);
  if (!fs.existsSync(filePath)) {
    console.warn(`Skip (not found): ${rel}`);
  } else {
    const pkg = JSON.parse(fs.readFileSync(filePath, "utf8"));
    if (pkg.version === version) {
      console.log(`No change: ${rel}`);
    } else {
      pkg.version = version;
      fs.writeFileSync(filePath, `${JSON.stringify(pkg, null, 2)}\n`, "utf8");
      console.log(`Updated: ${rel}`);
      updated++;
    }
  }
}

for (const { file, pattern, replacement } of REPLACEMENTS) {
  const filePath = path.join(ROOT, file);
  if (!fs.existsSync(filePath)) {
    console.warn(`Skip (not found): ${file}`);
    continue;
  }
  const content = fs.readFileSync(filePath, "utf8");
  const replacer = typeof replacement === "function" ? replacement : () => replacement;
  const newContent = content.replace(pattern, (match, ...groups) => {
    return replacer(match, ...groups);
  });
  writeIfChanged(file, newContent);
}

console.log(`Done. ${updated} file(s) updated.`);
