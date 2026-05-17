#!/usr/bin/env node
/**
 * Writes ~/.local/share/applications/transrewrt-dev.desktop so GNOME/KDE can
 * match StartupWMClass=transrewrt to an Icon= path when running pnpm dev.
 */
const fs = require("fs");
const path = require("path");
const os = require("os");

const repoRoot = path.resolve(__dirname, "..");
const iconPath = path.join(repoRoot, "images", "transrewrt_logo_512x512.png");
const electronBin = path.join(repoRoot, "node_modules", ".bin", "electron");
const desktopDir = path.join(os.homedir(), ".local", "share", "applications");
const desktopPath = path.join(desktopDir, "transrewrt-dev.desktop");

if (process.platform !== "linux") {
  process.exit(0);
}

if (!fs.existsSync(iconPath) || !fs.existsSync(electronBin)) {
  console.warn(
    "[ensure-dev-desktop] Skipped: missing icon or electron binary.",
  );
  process.exit(0);
}

const execLine = `${electronBin} ${repoRoot}`;
const desktop = [
  "[Desktop Entry]",
  "Type=Application",
  "Name=Transrewrt (Dev)",
  "Comment=Transrewrt development build",
  `Exec=${execLine} %U`,
  `Path=${repoRoot}`,
  `Icon=${iconPath}`,
  "Terminal=false",
  "Categories=Utility;",
  "StartupWMClass=transrewrt",
  "",
].join("\n");

fs.mkdirSync(desktopDir, { recursive: true });
fs.writeFileSync(desktopPath, desktop, "utf8");
