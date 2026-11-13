/**
 * Resolve monorepo `src/shared` modules from dev tools and from presets-check.
 *
 * PRESET_CHECK_LIB is the image directory that holds `shared/` (Docker).
 * PRESET_CHECK_RUNTIME/lib is the host install layout. State files stay in
 * PRESET_CHECK_RUNTIME either way.
 */

const path = require("path");

function monorepoRoot() {
  return path.join(__dirname, "..", "..");
}

function installedLibDir() {
  if (process.env.PRESET_CHECK_LIB) {
    return path.resolve(process.env.PRESET_CHECK_LIB);
  }
  if (process.env.PRESET_CHECK_RUNTIME) {
    return path.join(path.resolve(process.env.PRESET_CHECK_RUNTIME), "lib");
  }
  return null;
}

function sharedModulePath(moduleName) {
  const lib = installedLibDir();
  if (lib) return path.join(lib, "shared", moduleName);
  return path.join(monorepoRoot(), "src", "shared", moduleName);
}

function sharedRequire(moduleName) {
  return require(sharedModulePath(moduleName));
}

function promptsJsonPath() {
  const lib = installedLibDir();
  if (lib) return path.join(lib, "config-defaults", "prompts.json");
  return path.join(monorepoRoot(), "src", "config-defaults", "prompts.json");
}

module.exports = { monorepoRoot, sharedModulePath, sharedRequire, promptsJsonPath };
