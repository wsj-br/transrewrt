/**
 * Bump semver prerelease number in package.json (e.g. 1.0.1-52 -> 1.0.1-53).
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

let base, prerelease;
if (raw.includes('-')) {
  const idx = raw.lastIndexOf('-');
  base = raw.slice(0, idx);
  prerelease = parseInt(raw.slice(idx + 1), 10);
} else {
  const parts = raw.split('.');
  if (parts.length < 4) {
    console.error('Error: version must be major.minor.patch-N or major.minor.patch.fourth');
    process.exit(1);
  }
  base = parts.slice(0, 3).join('.');
  prerelease = parseInt(parts[3], 10);
}
if (Number.isNaN(prerelease)) {
  console.error('Error: prerelease segment is not a number');
  process.exit(1);
}
p.version = base + '-' + (prerelease + 1);
fs.writeFileSync(packagePath, JSON.stringify(p, null, 2) + '\n');
console.log('Version bumped to ' + p.version+'\n');
