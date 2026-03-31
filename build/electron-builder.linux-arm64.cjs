"use strict";

/**
 * Arm64 AppImage overrides. Must inherit package.json `build` — a standalone JSON `--config`
 * replaces the entire electron-builder config and drops `extraMetadata.main`, `files`, etc.
 * (see dev/CHANGELOG / electron-builder load path when `configPath` is set).
 */
const { build: base } = require("../package.json");
if (base == null) {
  throw new Error('package.json must define a "build" field for electron-builder');
}

module.exports = {
  ...base,
  publish: null,
  linux: {
    ...base.linux,
    target: [{ target: "AppImage", arch: ["arm64"] }],
  },
};
