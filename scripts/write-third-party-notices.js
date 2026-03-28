/**
 * license-checker-rseidelsohn only applies clarifications.licenseText when --customPath
 * is set, and --plainVertical ignores moduleData.licenseText and always reads licenseFile
 * from disk. Packages like @fluentui/react-icons ship without LICENSE and match README.md
 * as the "license file", so notices would otherwise embed the README.
 * This script runs the checker with --json (so clarifications + customPath apply), then
 * emits the same plain-vertical shape while preferring licenseText when present.
 */

"use strict";

const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");

function getModuleNameForLicenseTextHeader(moduleName) {
  const i = moduleName.lastIndexOf("@");
  return `${moduleName.slice(0, i)} ${moduleName.slice(i + 1)}\n`;
}

function licenseTitleLine(moduleData) {
  const { licenses } = moduleData;
  if (Array.isArray(licenses) && licenses.length > 0) {
    return licenses
      .map((m) => {
        if (typeof m === "object" && m) return m.type || m.name;
        if (typeof m === "string") return m;
        return "";
      })
      .join("");
  }
  if (typeof licenses === "object" && licenses && (licenses.type || licenses.name)) {
    return licenses.type || licenses.name;
  }
  if (typeof licenses === "string") return licenses;
  return "";
}

function bodyText(moduleData) {
  if (typeof moduleData.licenseText === "string" && moduleData.licenseText.length > 0) {
    return moduleData.licenseText;
  }
  const lf = moduleData.licenseFile;
  if (Array.isArray(lf) && lf.length > 0) {
    return lf
      .map((m) => {
        if (typeof m === "object" && m) return m.type || m.name;
        if (typeof m === "string") return m;
        return "";
      })
      .join("");
  }
  if (typeof lf === "object" && lf && (lf.type || lf.name)) {
    return lf.type || lf.name;
  }
  if (typeof lf === "string" && fs.existsSync(lf)) {
    return fs.readFileSync(lf, "utf8");
  }
  return "";
}

function asPlainVerticalPreferClarifications(sorted) {
  return Object.entries(sorted)
    .map(([moduleName, moduleData]) => {
      let out = getModuleNameForLicenseTextHeader(moduleName);
      out += licenseTitleLine(moduleData);
      out += "\n";
      out += bodyText(moduleData);
      return out;
    })
    .join("\n\n");
}

const outFile = path.join(root, "THIRD-PARTY-NOTICES.txt");
const customFormat = path.join(__dirname, "license-checker-custom-format.json");
const clarifications = path.join(root, "license-clarifications.json");

const bin = path.join(root, "node_modules", ".bin", "license-checker-rseidelsohn");
if (!fs.existsSync(bin)) {
  console.error("license-checker-rseidelsohn not found; run pnpm install");
  process.exit(1);
}

const jsonRaw = execFileSync(
  bin,
  [
    "--production",
    "--json",
    "--excludePackages",
    "transrewrt",
    "--clarificationsFile",
    clarifications,
    "--customPath",
    customFormat,
  ],
  { cwd: root, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 },
);

const sorted = JSON.parse(jsonRaw);
fs.writeFileSync(outFile, asPlainVerticalPreferClarifications(sorted), "utf8");
console.log("Wrote", path.relative(root, outFile));
