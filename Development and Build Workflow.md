# 💻 New Development and Build Workflow



## 1. Development (npm run dev)
This is your new development command.

`npm run watch` (in concurrently) starts Webpack in watch mode, compiling your React code and updating the dist folder whenever you save a file.

`npm run electron` uses wait-on to ensure the Webpack build finishes before launching Electron.

Command: 

```bash
npm run dev
```

## 2. Building the Renderer (npm run build-renderer)
This compiles your React application for production into the dist folder.

Command: 

```bash
npm run build-renderer
```

## 3. Packaging the Application (npm run build or npm run package-win)
This uses electron-builder to create a final, installable application.

`npm run build-renderer` ensures the latest production React code is bundled.

electron-builder then takes the compiled files (`dist/**/*` and the main process file) and packages them into an executable.

Command: 

```bash
npm run build # (This runs npm run package-win for convenience)
```

