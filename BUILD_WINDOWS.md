# Building on Windows 11

## Common Issues and Solutions

### Symlink Permission Errors

If you encounter errors like:
```
ERROR: Cannot create symbolic link : A required privilege is not held by the client.
```

**Solution 1: Enable Developer Mode (Recommended)**
1. Press `Win + I` to open Settings
2. Go to **Privacy & Security** → **For developers**
3. Toggle **Developer Mode** to **On**
4. Restart your terminal/PowerShell
5. Run `npm run package` again

**Solution 2: Run as Administrator**
- Right-click PowerShell → **Run as administrator**
- Navigate to project directory
- Run `npm run package`

### Current Configuration

The `package.json` is configured with:
- `forceCodeSigning: false` - Disables code signing
- `CSC_IDENTITY_AUTO_DISCOVERY=false` - Prevents certificate auto-discovery
- `ELECTRON_BUILDER_CACHE=./cache` - Uses local cache directory

This configuration should work without Developer Mode, but enabling Developer Mode is the most reliable solution.

### Build Command

```bash
npm run package
```

This will:
1. Build the renderer (webpack)
2. Package the Electron app using electron-builder
3. Create an NSIS installer in the `release` directory
