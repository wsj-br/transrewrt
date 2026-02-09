const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const iconsDir = path.join(__dirname, 'icons');
const sourceFile = path.join(__dirname, 'icons_source.json');
const outputFile = path.join(__dirname, 'icons_with_files.json');

// Ensure icons directory exists
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Read source data
const sourceData = JSON.parse(fs.readFileSync(sourceFile, 'utf8'));

// Function to sanitize filename
function sanitizeName(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
}

// Function to download a file
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const req = protocol.get(url, { timeout: 30000 }, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to fetch ${url}: ${res.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve(dest);
      });

      fileStream.on('error', (err) => {
        reject(err);
      });
    });

    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error(`Timeout fetching ${url}`));
    });
  });
}

// Function to download with fallback to Google favicon service
async function downloadWithFallback(provider, dest) {
  const originalUrl = provider.favicon;
  const fallbackUrl = `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(provider.url)}&size=256`;

  try {
    await downloadFile(originalUrl, dest);
    return { success: true, usedFallback: false };
  } catch (err) {
    // Try fallback on any error
    console.log(`  Fallback to Google service for: ${provider.name}`);
    try {
      await downloadFile(fallbackUrl, dest);
      return { success: true, usedFallback: true };
    } catch (fallbackErr) {
      throw fallbackErr;
    }
  }
}

// Process all icons
async function processIcons() {
  const results = [];
  let successCount = 0;
  let failCount = 0;

  for (const provider of sourceData) {
    const fileName = sanitizeName(provider.name) + '.ico';
    const destPath = path.join(iconsDir, fileName);

    try {
      const result = await downloadWithFallback(provider, destPath);
      const source = result.usedFallback ? 'Google fallback' : 'original';
      results.push({
        name: provider.name,
        url: provider.url,
        iconFile: fileName,
        source: source
      });
      successCount++;
      console.log(`✓ Downloaded (${source}): ${provider.name} -> ${fileName}`);
    } catch (err) {
      failCount++;
      console.log(`✗ Failed: ${provider.name} - ${err.message}`);
      results.push({
        name: provider.name,
        url: provider.url,
        iconFile: null,
        source: null
      });
    }
  }

  // Write results JSON
  fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));
  console.log(`\nCompleted: ${successCount} downloaded, ${failCount} failed`);
  console.log(`Results saved to: ${outputFile}`);
}

processIcons().catch(console.error);