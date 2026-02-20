/**
 * Set package.json version to base (major.minor.patch) + build timestamp.
 * e.g. 1.0.1 or 1.0.1-65 -> 1.0.1+build20260220-003811
 * Works on Windows and Linux.
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const packagePath = path.join(rootDir, 'package.json');

if (!fs.existsSync(packagePath)) {
  console.error('Error: package.json not found at', packagePath);
  process.exit(1);
}

const p = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
const raw = (p.version || '').trim();

// Strip build metadata (+...) then prerelease (-N) to get base major.minor.patch
let v = raw.includes('+') ? raw.split('+')[0] : raw;
const dashIdx = v.indexOf('-');
const base = dashIdx >= 0 ? v.slice(0, dashIdx) : v;

const now = new Date();
const yyyymmdd =
  now.getFullYear() +
  String(now.getMonth() + 1).padStart(2, '0') +
  String(now.getDate()).padStart(2, '0');
const hhmmss =
  String(now.getHours()).padStart(2, '0') +
  String(now.getMinutes()).padStart(2, '0') +
  String(now.getSeconds()).padStart(2, '0');

p.version = base + '+build' + yyyymmdd + '-' + hhmmss;
fs.writeFileSync(packagePath, JSON.stringify(p, null, 2) + '\n');
console.log('Version set to ' + p.version + '\n');
