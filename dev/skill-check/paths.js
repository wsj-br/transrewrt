/**
 * Resolve shared module paths (monorepo dev vs installed runtime).
 */

const path = require("path");

function getRuntimeRoot() {
  if (process.env.SKILL_CHECK_RUNTIME) {
    return path.resolve(process.env.SKILL_CHECK_RUNTIME);
  }
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
  const runtime = getRuntimeRoot();
  if (runtime) {
    return require(path.join(runtime, "lib", "shared", moduleName));
  }
  return require(path.join(getMonorepoRoot(), "src", "shared", moduleName));
}

function localRequire(moduleName) {
  const runtime = getRuntimeRoot();
  if (runtime) {
    return require(path.join(runtime, "lib", moduleName));
  }
  return require(path.join(__dirname, moduleName));
}

module.exports = { getRuntimeRoot, getMonorepoRoot, sharedRequire, localRequire };
