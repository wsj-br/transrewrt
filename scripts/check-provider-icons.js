#!/usr/bin/env node
/**
 * Refresh presets-editor-provider-catalogs.json (same shared catalog helper + 2h TTL
 * as presets-editor / presets-check), then list providers that have no icon configured
 * for ProviderIcon (icons_with_files.json + .ico under assets/).
 *
 * Providers checked:
 * - Vendor slugs from models in the presets-editor provider catalog cache
 * - Built-in app engines from ENGINE_IDS (e.g. apifun, nvidia, alibaba) even when they
 *   are not part of the Easy-mode catalog cache
 *
 * Usage:
 *   pnpm run check-provider-icons
 *   pnpm run check-provider-icons -- --force
 *   node scripts/check-provider-icons.js [--force] [--json]
 *
 * Env: OPENROUTER_API_KEY (public OpenRouter catalog works without it; other engines
 * need their API keys, same as presets-editor).
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const PROVIDER_CATALOGS_DISK_CACHE_PATH = path.join(ROOT, "presets-editor-provider-catalogs.json");
const ICONS_JSON_PATH = path.join(ROOT, "src", "renderer", "assets", "icons_with_files.json");
const ASSETS_DIR = path.join(ROOT, "src", "renderer", "assets");

const { mergeKeys, ENGINE_IDS } = require(path.join(ROOT, "src", "shared", "llm", "index.js"));
const {
  CATALOG_DISK_TTL_MS,
  EASY_CLOUD_ENGINES,
  configureProviderCatalog,
  getProviderCatalogIdSets,
} = require(path.join(ROOT, "src", "shared", "presetsProviderCatalog.js"));

function printHelp() {
  console.log(`Check provider icons against the presets-editor provider catalog cache.

Usage:
  pnpm run check-provider-icons [-- --force] [-- --json]
  node scripts/check-provider-icons.js [--force] [--json]

Options:
  --force       Ignore the 2h disk TTL and refetch provider catalogs from APIs
  --json        Print machine-readable JSON (missing providers + summary)
  --help, -h    Show this help

Uses the same shared catalog code and TTL as presets-editor / presets-check
(src/shared/presetsProviderCatalog.js → presets-editor-provider-catalogs.json).
Also checks built-in ENGINE_IDS (Settings → Models engines such as apifun).
`);
}

function parseArgs(argv) {
  const out = { force: false, json: false, help: false };
  for (const a of argv) {
    if (a === "--help" || a === "-h") out.help = true;
    else if (a === "--force") out.force = true;
    else if (a === "--json") out.json = true;
    else {
      console.error(`Unknown option: ${a}`);
      out.help = true;
    }
  }
  return out;
}

/** Same normalization as ProviderIcon. */
function normalize(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

/**
 * Provider key for grouping/icons — same rules as
 * src/renderer/utils/misc/modelIdUtils.ts `providerSortKeyFromModelId`.
 */
function providerSortKeyFromModelId(modelId) {
  const id = modelId || "";
  if (!id) return "other";
  if (id.startsWith("openrouter/")) {
    const inner = id.slice("openrouter/".length);
    const first = inner.split("/")[0];
    return (first || "openrouter").toLowerCase();
  }
  return (id.split("/")[0] || "other").toLowerCase();
}

function loadConfiguredIconLookup() {
  const raw = fs.readFileSync(ICONS_JSON_PATH, "utf8");
  const iconData = JSON.parse(raw);
  /** @type {Record<string, string>} */
  const providerIdToFile = {};
  for (const entry of iconData) {
    if (!entry || !entry.iconFile) continue;
    const norm = normalize(String(entry.provider_id || ""));
    if (!norm) continue;
    if (!providerIdToFile[norm]) providerIdToFile[norm] = String(entry.iconFile);
  }

  const icoFiles = new Set(
    fs
      .readdirSync(ASSETS_DIR)
      .filter((name) => name.toLowerCase().endsWith(".ico"))
      .map((name) => name),
  );
  return { providerIdToFile, icoFiles };
}

/**
 * True when ProviderIcon would resolve a real asset (mapping + file on disk,
 * or a direct `.ico` filename match), or a built-in Lucide glyph (local / custom).
 * Mirrors resolveIconUrl candidates / ProviderIcon special cases.
 */
function hasConfiguredIcon(provider, providerIdToFile, icoFiles) {
  const rawProvider = String(provider || "").trim();
  const engine = rawProvider.includes("/") ? rawProvider.split("/")[0] : rawProvider;
  const normEngine = normalize(engine);
  if (normEngine === "local" || normEngine === "custom") return true;

  const normProvider = normalize(rawProvider);
  const firstSegment = rawProvider.includes("/") ? rawProvider.split("/")[0] : "";
  const normFirstSegment = normalize(firstSegment);

  const candidates = [rawProvider, normProvider, firstSegment, normFirstSegment].filter(Boolean);

  for (const candidate of candidates) {
    const file = providerIdToFile[candidate] || providerIdToFile[normalize(candidate)];
    if (file && icoFiles.has(file)) return true;
  }
  for (const candidate of candidates) {
    if (icoFiles.has(candidate)) return true;
  }
  return false;
}

function ensureProviderStat(byProvider, provider) {
  let stat = byProvider.get(provider);
  if (!stat) {
    stat = { provider, modelCount: 0, sampleIds: [], sources: new Set() };
    byProvider.set(provider, stat);
  }
  return stat;
}

function collectProviders(catalogsByEngine) {
  /** @type {Map<string, { provider: string, modelCount: number, sampleIds: string[], sources: Set<string> }>} */
  const byProvider = new Map();

  for (const { id: engine } of EASY_CLOUD_ENGINES) {
    const list = catalogsByEngine[engine] || [];
    for (const m of list) {
      if (!m || typeof m.id !== "string" || !m.id.trim()) continue;
      const provider = providerSortKeyFromModelId(m.id);
      const stat = ensureProviderStat(byProvider, provider);
      stat.modelCount += 1;
      stat.sources.add("catalog");
      if (stat.sampleIds.length < 3) stat.sampleIds.push(m.id);
    }
  }

  // Engines shown in Settings → Models / API Config, including those outside Easy-mode catalogs.
  for (const engine of ENGINE_IDS) {
    const provider = String(engine || "")
      .trim()
      .toLowerCase();
    if (!provider) continue;
    const stat = ensureProviderStat(byProvider, provider);
    stat.sources.add("engine");
  }

  return byProvider;
}

function formatTtl() {
  const hours = CATALOG_DISK_TTL_MS / 3600000;
  return Number.isInteger(hours) ? `${hours}h` : `${CATALOG_DISK_TTL_MS}ms`;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    process.exit(0);
  }

  configureProviderCatalog({
    cachePath: PROVIDER_CATALOGS_DISK_CACHE_PATH,
    logLabel: "check-provider-icons",
  });

  const keysMap = mergeKeys({}, process.env);
  console.log(
    `[check-provider-icons] Provider catalog cache: ${PROVIDER_CATALOGS_DISK_CACHE_PATH} (TTL ${formatTtl()}${args.force ? ", force refresh" : ""})`,
  );

  const { catalogsByEngine } = await getProviderCatalogIdSets(keysMap, {
    cachePath: PROVIDER_CATALOGS_DISK_CACHE_PATH,
    force: args.force,
  });

  const { providerIdToFile, icoFiles } = loadConfiguredIconLookup();
  const byProvider = collectProviders(catalogsByEngine);
  const providers = [...byProvider.values()].sort((a, b) => a.provider.localeCompare(b.provider));

  const missing = [];
  const configured = [];
  for (const stat of providers) {
    if (hasConfiguredIcon(stat.provider, providerIdToFile, icoFiles)) {
      configured.push(stat);
    } else {
      missing.push(stat);
    }
  }

  const engineSummary = EASY_CLOUD_ENGINES.map(({ id, label }) => ({
    engine: id,
    label,
    models: (catalogsByEngine[id] || []).length,
  }));

  if (args.json) {
    console.log(
      JSON.stringify(
        {
          cachePath: PROVIDER_CATALOGS_DISK_CACHE_PATH,
          ttlMs: CATALOG_DISK_TTL_MS,
          engines: engineSummary,
          appEngines: ENGINE_IDS,
          providerCount: providers.length,
          configuredCount: configured.length,
          missingCount: missing.length,
          missing: missing.map((m) => ({
            provider: m.provider,
            modelCount: m.modelCount,
            sampleIds: m.sampleIds,
            sources: [...m.sources].sort(),
          })),
        },
        null,
        2,
      ),
    );
  } else {
    console.log("");
    console.log("Catalog models by engine:");
    for (const row of engineSummary) {
      console.log(`  ${row.label.padEnd(16)} ${row.models}`);
    }
    console.log("");
    console.log(
      `Providers checked: ${providers.length}  (catalog vendors + ENGINE_IDS; with icon: ${configured.length}, missing icon: ${missing.length})`,
    );
    console.log(`Icon map: ${ICONS_JSON_PATH}`);
    console.log(`Icon assets: ${ASSETS_DIR} (${icoFiles.size} .ico files)`);
    console.log("");

    if (missing.length === 0) {
      console.log("All checked providers have a configured icon.");
    } else {
      console.log("Providers without a configured icon:");
      for (const m of missing) {
        const src = [...m.sources].sort().join("+");
        if (m.modelCount > 0) {
          const samples = m.sampleIds.join(", ");
          console.log(`  - ${m.provider}  (${m.modelCount} model(s); ${src}; e.g. ${samples})`);
        } else {
          console.log(`  - ${m.provider}  (app engine; ${src})`);
        }
      }
      console.log("");
      console.log(
        "Add a mapping in icons_with_files.json and a .ico under src/renderer/assets/, then run ./scripts/trim-ico-sizes.sh",
      );
    }
  }

  process.exit(missing.length > 0 ? 1 : 0);
}

main().catch((err) => {
  const msg = err instanceof Error ? err.message : String(err);
  console.error(`[check-provider-icons] Fatal: ${msg}`);
  process.exit(1);
});
