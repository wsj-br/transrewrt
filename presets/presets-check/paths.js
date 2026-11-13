/**
 * Resolve shared module paths.
 *
 * Code lives in PRESET_CHECK_LIB when set (Docker image). Otherwise an
 * installed runtime keeps code under PRESET_CHECK_RUNTIME/lib. State (clone,
 * config, logs) stays under PRESET_CHECK_RUNTIME in both cases. Dev runs
 * leave both unset and load the monorepo tree.
 */

const path = require("path");

function getRuntimeRoot() {
  if (process.env.PRESET_CHECK_RUNTIME) {
    return path.resolve(process.env.PRESET_CHECK_RUNTIME);
  }
  return null;
}

function getLibDir() {
  if (process.env.PRESET_CHECK_LIB) {
    return path.resolve(process.env.PRESET_CHECK_LIB);
  }
  const runtime = getRuntimeRoot();
  if (runtime) return path.join(runtime, "lib");
  return null;
}

function getMonorepoRoot() {
  const runtime = getRuntimeRoot();
  if (runtime) {
    return path.join(runtime, "repo");
  }
  return path.join(__dirname, "..", "..");
}

function sharedRequire(moduleName) {
  const lib = getLibDir();
  if (lib) {
    return require(path.join(lib, "shared", moduleName));
  }
  return require(path.join(getMonorepoRoot(), "src", "shared", moduleName));
}

function localRequire(moduleName) {
  const lib = getLibDir();
  if (lib) {
    return require(path.join(lib, moduleName));
  }
  return require(path.join(__dirname, moduleName));
}

function presetsSharedRequire(moduleName) {
  const lib = getLibDir();
  if (lib) {
    return require(path.join(lib, "presets-shared", moduleName));
  }
  return require(path.join(__dirname, "..", "presets-shared", moduleName));
}

module.exports = {
  getRuntimeRoot,
  getLibDir,
  getMonorepoRoot,
  sharedRequire,
  localRequire,
  presetsSharedRequire,
};
