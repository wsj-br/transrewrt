#!/usr/bin/env node
/**
 * Resolves the newest better-sqlite3 release that ships Electron prebuilds for the
 * target Electron version (ABI). Used by upgrade-dependencies.sh instead of compiling
 * native code during upgrades.
 *
 * better-sqlite3 does not declare Electron in peerDependencies; upstream publishes
 * per-ABI prebuilds on GitHub when a release supports that Electron line. Missing
 * prebuilds for an ABI correlate with the V8 compile breaks tracked in
 * https://github.com/WiseLibs/better-sqlite3/issues/1474
 *
 * Exit codes: 0 = compatible version found, 1 = none for target Electron, 2 = error
 *
 * Options:
 *   --print-version   Print only the chosen better-sqlite3 version (stdout)
 *   --print-electron  Print only the resolved Electron version (stdout)
 */

'use strict';

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const PREBUILD_PROBE_PLATFORM = 'linux-x64';
const GITHUB_RELEASE_BASE =
  'https://github.com/WiseLibs/better-sqlite3/releases/download';
const GITHUB_API_RELEASE = 'https://api.github.com/repos/WiseLibs/better-sqlite3/releases/tags';
const MIN_BETTER_SQLITE3_MAJOR = 11;

const args = process.argv.slice(2);
if (args.length === 1 && (args[0] === '--help' || args[0] === '-h')) {
  console.log(`Usage: node scripts/better-sqlite3-electron-compat.js [options]

Options:
  --print-version   Print chosen better-sqlite3 version only
  --print-electron  Print resolved Electron version only
  --help, -h        Show this help
`);
  process.exit(0);
}
if (args.some((a) => a.startsWith('-') && a !== '--print-version' && a !== '--print-electron')) {
  console.error('better-sqlite3-electron-compat: unknown option(s)');
  process.exit(2);
}

function pnpmViewJson(pkg, field) {
  const spec = field ? `${pkg} ${field}` : pkg;
  return execSync(`pnpm view ${spec} --json`, {
    encoding: 'utf8',
    cwd: root,
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim();
}

function resolveNodeAbiModule() {
  try {
    return require.resolve('node-abi', { paths: [root] });
  } catch {
    const storeRoot = path.join(root, 'node_modules', '.pnpm');
    if (!fs.existsSync(storeRoot)) {
      throw new Error('node-abi not found; run pnpm install first');
    }
    const entries = fs.readdirSync(storeRoot);
    for (const entry of entries) {
      if (!entry.startsWith('node-abi@')) continue;
      const candidate = path.join(storeRoot, entry, 'node_modules', 'node-abi');
      if (fs.existsSync(path.join(candidate, 'package.json'))) {
        return path.join(candidate, 'index.js');
      }
    }
    throw new Error('node-abi not found in pnpm store; run pnpm install first');
  }
}

function getElectronAbi(electronVersion) {
  const nodeAbi = require(resolveNodeAbiModule());
  return Number(nodeAbi.getAbi(electronVersion, 'electron'));
}

function listRecentBetterSqlite3Versions() {
  const raw = pnpmViewJson('better-sqlite3', 'versions');
  const versions = JSON.parse(raw);
  if (!Array.isArray(versions) || versions.length === 0) {
    throw new Error('pnpm view better-sqlite3 versions returned no data');
  }
  return versions.filter((v) => {
    const major = Number(String(v).split('.')[0]);
    return Number.isFinite(major) && major >= MIN_BETTER_SQLITE3_MAJOR;
  });
}

function prebuildAssetUrl(betterVersion, electronAbi) {
  const file = `better-sqlite3-v${betterVersion}-electron-v${electronAbi}-${PREBUILD_PROBE_PLATFORM}.tar.gz`;
  return `${GITHUB_RELEASE_BASE}/v${betterVersion}/${file}`;
}

async function fetchReleaseAssets(betterVersion) {
  const res = await fetch(`${GITHUB_API_RELEASE}/v${betterVersion}`, {
    headers: { 'User-Agent': 'transrewrt-upgrade' },
  });
  if (res.status === 404) {
    return [];
  }
  if (!res.ok) {
    throw new Error(`GitHub API ${res.status} for better-sqlite3 v${betterVersion}`);
  }
  const data = await res.json();
  return Array.isArray(data.assets) ? data.assets : [];
}

function maxElectronAbiFromAssets(assets) {
  let max = 0;
  for (const asset of assets) {
    const m = asset.name.match(/electron-v(\d+)/);
    if (m) {
      max = Math.max(max, Number(m[1]));
    }
  }
  return max;
}

function releaseHasElectronAbi(assets, electronAbi) {
  const suffix = `electron-v${electronAbi}-${PREBUILD_PROBE_PLATFORM}.tar.gz`;
  return assets.some((asset) => asset.name.endsWith(suffix));
}

async function findNewestCompatibleBetterSqlite3(electronVersion) {
  const electronAbi = getElectronAbi(electronVersion);
  const versions = listRecentBetterSqlite3Versions();

  for (let i = versions.length - 1; i >= 0; i--) {
    const betterVersion = versions[i];
    let assets;
    try {
      assets = await fetchReleaseAssets(betterVersion);
    } catch (e) {
      console.error(`better-sqlite3-electron-compat: ${e.message}`);
      throw e;
    }

    const maxAbi = maxElectronAbiFromAssets(assets);
    console.error(
      `better-sqlite3-electron-compat: better-sqlite3@${betterVersion} max electron ABI v${maxAbi} (need v${electronAbi})`
    );

    if (maxAbi < electronAbi) {
      if (i === versions.length - 1) {
        console.error(
          'better-sqlite3-electron-compat: latest release lacks prebuilds for this Electron ABI; no newer upstream release to try'
        );
        return { betterVersion: null, electronVersion, electronAbi };
      }
      continue;
    }

    if (releaseHasElectronAbi(assets, electronAbi)) {
      return { betterVersion, electronVersion, electronAbi };
    }

    const url = prebuildAssetUrl(betterVersion, electronAbi);
    const head = await fetch(url, { method: 'HEAD', redirect: 'follow' });
    if (head.ok) {
      return { betterVersion, electronVersion, electronAbi };
    }
    console.error(
      `better-sqlite3-electron-compat: better-sqlite3@${betterVersion} lists ABI up to v${maxAbi} but no v${electronAbi} ${PREBUILD_PROBE_PLATFORM} asset`
    );
  }

  return { betterVersion: null, electronVersion, electronAbi };
}

async function main() {
  let electronVersion;
  try {
    electronVersion = JSON.parse(pnpmViewJson('electron', 'version'));
  } catch (e) {
    console.error(`better-sqlite3-electron-compat: ${e.message}`);
    process.exit(2);
  }

  console.error(
    `better-sqlite3-electron-compat: target Electron ${electronVersion} (registry latest)`
  );

  let result;
  try {
    result = await findNewestCompatibleBetterSqlite3(electronVersion);
  } catch (e) {
    console.error(`better-sqlite3-electron-compat: ${e.message}`);
    process.exit(2);
  }

  if (!result.betterVersion) {
    console.error(
      `better-sqlite3-electron-compat: no published better-sqlite3 release has an Electron v${result.electronAbi} prebuild for Electron ${result.electronVersion}`
    );
    process.exit(1);
  }

  console.error(
    `better-sqlite3-electron-compat: chose better-sqlite3@${result.betterVersion} for Electron ${result.electronVersion} (ABI ${result.electronAbi})`
  );

  if (args.includes('--print-version')) {
    process.stdout.write(`${result.betterVersion}\n`);
  } else if (args.includes('--print-electron')) {
    process.stdout.write(`${result.electronVersion}\n`);
  }
  process.exit(0);
}

main();
