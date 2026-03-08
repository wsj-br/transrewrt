/**
 * IPC handlers for window/tray/settings (open-settings, settings-updated).
 */

const { BrowserWindow } = require("electron");

/**
 * Register window-related IPC handlers.
 * @param {import("electron").IpcMain} ipcMain
 * @param {() => void} createSettingsWindow - Callback to open/focus settings window
 */
function registerWindowIpc(ipcMain, createSettingsWindow) {
  ipcMain.on("open-settings", () => {
    createSettingsWindow();
  });

  ipcMain.on("settings-updated", () => {
    BrowserWindow.getAllWindows().forEach((win) => {
      if (win && !win.isDestroyed()) win.webContents.send("settings-updated");
    });
  });
}

module.exports = { registerWindowIpc };
