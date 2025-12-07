📝 Development Workflow Documentation: Translator & Rewriter
This document outlines the standard procedures and commands for developing, running, and packaging the Translator & Rewriter desktop application, which is built using Electron, React, and Webpack.

1. Prerequisites and Setup
Before starting development, ensure you have the necessary tools installed and project dependencies handled.

Node.js (LTS): Installed on your system.

Git: Installed for version control.

Code Editor: Visual Studio Code (VS Code) is recommended.

Install Dependencies: Run the following command in the project root after cloning or creating the directory to install all packages listed in package.json:

Bash

npm install
2. Core Development Commands
The following commands are used during active development and utilize a concurrent setup to manage both the React front-end and the Electron desktop process simultaneously.

2.1 Start Development Mode
This is the primary command for development. It automatically starts the Webpack development server and then launches the Electron application, providing live-reloading for your React code.

Command	Action
npm run dev	Runs the watch and electron scripts concurrently.

Export to Sheets

Under the Hood:

npm run watch: Starts the Webpack dev server, which compiles and serves your React components, typically on http://localhost:8080.

npm run electron: Uses wait-on to pause until the Webpack server is ready, then launches the Electron main process, which loads the React content into the window.

2.2 Run Electron (Main Process Only)
This command is typically used for testing the Electron process directly, often after a production build, or for debugging the main process without the Webpack dev server running.

Command	Action
npm run start	Directly executes the Electron main script (src/main/main.js).

Export to Sheets

3. Building and Packaging
These commands are used to create the final production version of the application, ready for distribution.

3.1 Build Renderer (React) for Production
This step compiles your React application into optimized, production-ready assets (HTML, CSS, JavaScript) and typically places them in a dist folder.

Command	Action
npm run build-renderer	Executes webpack in production mode.

Export to Sheets

3.2 Package the Application (Executable/Installer)
This is the final step, which runs the production build and then uses Electron Builder to package the app for your target operating system (e.g., creating a .exe installer for Windows).

Command	Action
npm run package	Runs build-renderer, then executes electron-builder.

Export to Sheets

Output Location:

Packaged installers and binaries will be output to the release directory, as defined in the package.json configuration.

4. Key Configuration Files
File	Description
package.json	Contains project metadata, dependency lists, and the core scripts for development and building. Also holds the configuration block for electron-builder.
webpack.config.js	(Assumed) Defines how React components are compiled, bundled, and where the final assets are output (e.g., the dist folder).
src/main/main.js	The main entry point for the Electron process, responsible for creating the native window and loading the compiled React content.