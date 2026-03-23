/**
 * Writes images/transrewrt_banner.svg and images/transrewrt_banner.png (512×128,
 * transparent) with the app logo and "Transrewrt" using the same gradient and
 * font stack as Sidebar.js (appName).
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const WIDTH = 512;
const HEIGHT = 128;
const MARGIN_Y = 20;
const H_PAD = 16;
const GAP = 12;
/** Sidebar logo row: logo height 28px, app name 18px */
const SIDEBAR_LOGO_H = 28;
const SIDEBAR_TEXT_PX = 18;
const SIDEBAR_LETTER_SPACING = -0.5;
const APP_NAME = "Transrewrt";

const GRADIENT_STOPS = [
  { offset: "0%", color: "#84cc16" },
  { offset: "40%", color: "#a3e635" },
  { offset: "60%", color: "#fb923c" },
  { offset: "100%", color: "#f97316" },
];

function resolveLogoPath() {
  const images = path.join(__dirname, "..", "images");
  const png = path.join(images, "transrewrt_logo.png");
  const svg = path.join(images, "transrewrt_logo.svg");
  if (fs.existsSync(png)) {
    return png;
  }
  if (fs.existsSync(svg)) {
    return svg;
  }
  throw new Error(
    "Expected images/transrewrt_logo.png or images/transrewrt_logo.svg",
  );
}

/** Rough width for bold UI sans (matches Sidebar visual weight). */
function estimateTextWidthPx(fontSize, text) {
  return fontSize * 0.56 * text.length;
}

/** Stable decimals for SVG attributes (avoids float noise in saved .svg). */
function svgNum(n) {
  return Math.round(n * 1000) / 1000;
}

async function main() {
  const logoPath = resolveLogoPath();
  const maxInnerH = HEIGHT - 2 * MARGIN_Y;
  const maxW = WIDTH - 2 * H_PAD;

  let logoH = Math.min(80, maxInnerH);
  let logoBuf;
  let logoW;
  let logoHActual;
  let fontSize;
  let textW;
  let totalW;

  for (let i = 0; i < 24; i += 1) {
    logoBuf = await sharp(logoPath).resize({ height: logoH }).png().toBuffer();
    const m = await sharp(logoBuf).metadata();
    logoW = m.width;
    logoHActual = m.height;
    fontSize = (SIDEBAR_TEXT_PX / SIDEBAR_LOGO_H) * logoHActual;
    textW = estimateTextWidthPx(fontSize, APP_NAME);
    totalW = logoW + GAP + textW;
    if (totalW <= maxW && logoHActual <= maxInnerH) {
      break;
    }
    const scaleW = maxW / totalW;
    const scaleH = maxInnerH / logoHActual;
    const scale = Math.min(scaleW, scaleH, 0.98);
    const nextH = Math.max(20, Math.floor(logoHActual * scale));
    if (nextH === logoH) {
      logoH = nextH - 1;
    } else {
      logoH = nextH;
    }
  }

  const logoB64 = logoBuf.toString("base64");
  const startX = svgNum((WIDTH - totalW) / 2);
  const logoY = svgNum((HEIGHT - logoHActual) / 2);
  const textX = svgNum(startX + logoW + GAP);
  const centerY = svgNum(HEIGHT / 2);
  const letterSpacing = svgNum(
    (SIDEBAR_LETTER_SPACING * fontSize) / SIDEBAR_TEXT_PX,
  );
  const logoWAttr = svgNum(logoW);
  const logoHAttr = svgNum(logoHActual);
  const fontSizeAttr = svgNum(fontSize);

  const stopsXml = GRADIENT_STOPS.map(
    (s) => `<stop offset="${s.offset}" stop-color="${s.color}"/>`,
  ).join("");

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="titleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      ${stopsXml}
    </linearGradient>
  </defs>
  <image href="data:image/png;base64,${logoB64}"
    x="${startX}" y="${logoY}" width="${logoWAttr}" height="${logoHAttr}"
    preserveAspectRatio="xMidYMid meet"/>
  <text
    x="${textX}"
    y="${centerY}"
    fill="url(#titleGrad)"
    font-family="Segoe UI, Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    font-size="${fontSizeAttr}"
    font-weight="700"
    letter-spacing="${letterSpacing}"
    text-anchor="start"
    dominant-baseline="central">${APP_NAME}</text>
</svg>`;

  const imagesDir = path.join(__dirname, "..", "images");
  const svgPath = path.join(imagesDir, "transrewrt_banner.svg");
  const pngPath = path.join(imagesDir, "transrewrt_banner.png");

  await fs.promises.writeFile(svgPath, svg, "utf8");
  await sharp(Buffer.from(svg)).png().toFile(pngPath);
  console.log(`Wrote ${svgPath}`);
  console.log(`Wrote ${pngPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
