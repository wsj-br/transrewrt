# NODE_MODULE_VERSION 137 with "No Node 18 installed"

If you see **NODE_MODULE_VERSION 137** (or "This version of Node.js requires NODE_MODULE_VERSION 137") but you no longer have Node 18 installed, something is still running code with an older Node. Common causes and fixes:

## 1. Leftover `node.exe` on PATH

An old Node (e.g. from a previous `winget install OpenJS.NodeJS` or manual install) may still be on your **system** or **User** PATH. When `pnpm` or `concurrently` spawns a script, that process can see a different PATH and resolve `node` to the old location.

**Check (Windows):**

```powershell
where node
```

You should see only one path (e.g. nvm’s `...\nvm\v24.13.1\node.exe`). If you see **multiple** paths, the **first** one is used. Remove old Node entries:

- **Settings → System → About → Advanced system settings → Environment variables → Path** (edit both User and System).
- Remove any paths like `C:\Program Files\nodejs` or old nvm versions.
- If Node.js still appears in **Settings → Apps**, uninstall it (e.g. "Node.js" from OpenJS).

Restart the terminal (or Cursor) after changing PATH.

## 2. pnpm using a different Node

If pnpm was installed via the **standalone script** (e.g. `iwr https://get.pnpm.io/install.ps1 -useb | iex`), it can use its own or a bundled Node. Scripts run via `pnpm run` may then use that Node instead of nvm’s.

**Fix:** Use Node 24, then reinstall pnpm so it uses that Node:

```powershell
nvm use 24
npm install -g pnpm
pnpm install
pnpm dev:web
```

## 3. This project’s workaround

`start:server` runs `scripts/check-node-version.js`, which:

1. Checks that the current Node is 24+.
2. Starts the server with **the same Node binary** that ran the check (`process.execPath`), so the server does not depend on the shell’s `node` in PATH.

If you still see 137 after that, the Node that runs the check (the one pnpm uses when it runs the script) is still old. Fix PATH and/or reinstall pnpm as above so that the first `node` (used by pnpm) is Node 24.

## References

- [Troubleshooting "Module was compiled against a different Node.js version"](https://azureossd.github.io/2023/05/31/Troubleshooting-a-Module-was-compiled-against-a-different-Node.js-version-errors/)
- [pnpm uses old version of node (Stack Overflow)](https://stackoverflow.com/questions/67032153/pnpm-uses-old-version-of-node)
- [How to completely remove Node.js from Windows](https://stackoverflow.com/questions/20711240/how-to-completely-remove-node-js-from-windows)
