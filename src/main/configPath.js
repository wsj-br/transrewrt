/**
 * Config and state file path resolution for Electron main process.
 * Single source of truth for config.json, state.json, and key file locations.
 */

const path = require("path");
const fs = require("fs");
const os = require("os");
const { app } = require("electron");

const getConfigFilePath = () => {
  try {
    const appPath = process.env.PORTABLE_EXECUTABLE_DIR || process.cwd();
    const homedir = os.homedir();
    const userDataPath =
      typeof app !== "undefined" && app.getPath
        ? path.join(app.getPath("userData"), "config.json")
        : null;
    const isSystemPath = (p) => {
      const normalized = (p || "").toLowerCase();
      return (
        normalized.includes("node_modules") ||
        normalized.includes("electron/dist") ||
        normalized.includes("resources") ||
        normalized.includes(".npm")
      );
    };
    const pathsToCheck = [
      ...(userDataPath ? [userDataPath] : []),
      path.resolve("config.json"),
      path.join(appPath, "config.json"),
      path.join(homedir, "config.json"),
      path.join(__dirname, "../../config.json"),
      path.resolve("../config.json"),
      ...(isSystemPath(process.execPath)
        ? []
        : [path.join(path.dirname(process.execPath), "config.json")]),
    ];
    for (const p of pathsToCheck) {
      if (p && fs.existsSync(p) && !isSystemPath(p)) return p;
    }
    const writablePathsToTry = [
      ...(userDataPath ? [userDataPath] : []),
      path.resolve("config.json"),
      path.join(appPath, "config.json"),
      path.join(homedir, "config.json"),
      path.join(path.dirname(process.execPath), "config.json"),
    ];
    for (const p of writablePathsToTry) {
      try {
        const dir = path.dirname(p);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        const testFile = path.join(dir, ".write-test");
        fs.writeFileSync(testFile, "test", "utf8");
        fs.unlinkSync(testFile);
        return p;
      } catch (_) {
        continue;
      }
    }
    return path.resolve("config.json");
  } catch (_) {
    return path.resolve("config.json");
  }
};

const getDefaultConfigPath = () =>
  path.join(path.dirname(getConfigFilePath()), "../src/config-defaults/config_default.json");

const getDefaultConfigPathForLoad = () => {
  if (typeof app !== "undefined" && app.isPackaged) {
    return path.join(
      path.dirname(process.execPath),
      "config",
      "config_default.json",
    );
  }
  return path.join(__dirname, "../config-defaults/config_default.json");
};

const getStateFilePath = () =>
  path.join(path.dirname(getConfigFilePath()), "state.json");

const getConfigDir = () => path.dirname(getConfigFilePath());
const getKeyFilePath = () => path.join(getConfigDir(), "transrewrt.key");

module.exports = {
  getConfigFilePath,
  getDefaultConfigPath,
  getDefaultConfigPathForLoad,
  getStateFilePath,
  getConfigDir,
  getKeyFilePath,
};
