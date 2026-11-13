/**
 * Resolve monorepo `src/shared` modules from dev tools and from the installed
 * presets-check runtime (`PRESET_CHECK_RUNTIME/lib/shared`).
 */

const path = require("path");

function monorepoRoot() {
  return path.join(__dirname, "..", "..");
}

function sharedModulePath(moduleName) {
  const runtime = process.env.PRESET_CHECK_RUNTIME
    ? path.resolve(process.env.PRESET_CHECK_RUNTIME)
    : null;
  if (runtime) return path.join(runtime, "lib", "shared", moduleName);
  return path.join(monorepoRoot(), "src", "shared", moduleName);
}

function sharedRequire(moduleName) {
  return require(sharedModulePath(moduleName));
}

function promptsJsonPath() {
  const runtime = process.env.PRESET_CHECK_RUNTIME
    ? path.resolve(process.env.PRESET_CHECK_RUNTIME)
    : null;
  if (runtime) return path.join(runtime, "lib", "config-defaults", "prompts.json");
  return path.join(monorepoRoot(), "src", "config-defaults", "prompts.json");
}

module.exports = { monorepoRoot, sharedModulePath, sharedRequire, promptsJsonPath };
