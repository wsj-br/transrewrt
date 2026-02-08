// Build script that sets BUILD_TIMESTAMP environment variable
const { spawn } = require('child_process');
const { execSync } = require('child_process');

// Get timestamp
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');
const timestamp = `${year}${month}${day}-${hours}${minutes}${seconds}`;

// Set environment variables
process.env.BUILD_TIMESTAMP = timestamp;
process.env.CSC_IDENTITY_AUTO_DISCOVERY = 'false';
process.env.ELECTRON_BUILDER_CACHE = './cache';

console.log(`Building with timestamp: ${timestamp}`);

// Run electron-builder
const builder = spawn('npx', ['electron-builder'], {
  stdio: 'inherit',
  env: process.env
});

builder.on('close', (code) => {
  process.exit(code);
});
