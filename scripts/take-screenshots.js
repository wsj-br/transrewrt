"use strict";

/**
 * Takes screenshots of the Transrewrt web app (Translate, Rewrite, Transform, etc.)
 * and saves them to images/screenshots/.
 *
 * Prerequisites:
 * - Web app running (e.g. pnpm run dev:web → http://localhost:5000).
 * - For web auth: set ADMIN_USERNAME and ADMIN_PASSWORD in the environment.
 *
 * Usage: pnpm run take-screenshots
 * Env: BASE_URL (default http://localhost:5000), ADMIN_USERNAME, ADMIN_PASSWORD, HEADLESS (default true; set to false to see browser).
 *       PUPPETEER_EXECUTABLE_PATH: path to Chrome/Chromium (use on Linux ARM / Raspberry Pi where the bundled binary is x64 only).
 *
 * The language-selector screenshot injects Noto Sans KR/Telugu/Thai from Google Fonts so Korean, Telugu and Thai
 * render correctly when system Chromium has no fonts for those scripts (e.g. on minimal Linux/ARM).
 */

const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

const BASE_URL = process.env.BASE_URL || "http://localhost:5000";

function getChromeExecutablePath() {
  const fromEnv = process.env.PUPPETEER_EXECUTABLE_PATH;
  if (fromEnv && fs.existsSync(fromEnv)) return fromEnv;
  if (fromEnv) return null;
  const commonPaths = [
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/usr/bin/google-chrome",
  ];
  for (const p of commonPaths) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

async function checkAppResponding() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);
  try {
    const res = await fetch(BASE_URL, { signal: controller.signal });
    clearTimeout(timeout);
    return res.ok || res.status < 500;
  } catch {
    clearTimeout(timeout);
    return false;
  }
}
const HEADLESS = process.env.HEADLESS !== "false";
const OUT_DIR = path.join(__dirname, "..", "images", "screenshots");

const SCREENSHOTS = [
  { name: "translate", fn: screenshotTranslate },
  { name: "rewrite", fn: screenshotRewrite },
  { name: "transform", fn: screenshotTransform },
  { name: "transform-prompt-edit", fn: screenshotTransformNewPrompt },
  { name: "dashboard-summary", fn: screenshotDashboardSummary },
  { name: "settings-models", fn: screenshotSettingsModels },
  { name: "language-selector", fn: screenshotLanguageSelector },
];

async function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function waitForSelector(page, selector, options = {}) {
  await page.waitForSelector(selector, { timeout: 15000, ...options });
}

async function clickByAriaLabel(page, label) {
  const sel = `button[aria-label="${label}"]`;
  await waitForSelector(page, sel);
  await page.click(sel);
  await wait(400);
}

async function ensureAppShell(page) {
  const hasNav = await page.$('nav[aria-label="Main"]');
  if (hasNav) return;
  await waitForSelector(page, 'nav[aria-label="Main"]', { timeout: 20000 });
}

async function maybeLogin(page) {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;
  const loginVisible = await page.$("#login-username");
  if (!loginVisible || (!username && !password)) return;
  if (!username || !password) {
    console.warn("Login form visible but ADMIN_USERNAME/ADMIN_PASSWORD not set; skipping login.");
    return;
  }
  await page.type("#login-username", username, { delay: 50 });
  await page.type("#login-password", password, { delay: 50 });
  await page.click('form button[type="submit"]');
  await wait(1500);
  await ensureAppShell(page);
}

async function setUILanguageToEnGB(page) {
  await clickByAriaLabel(page, "Interface language");
  await wait(300);
  const enGBClicked = await page.evaluate(() => {
    const items = document.querySelectorAll('[role="menuitem"]');
    for (const el of items) {
      if (el.textContent.includes("English (UK)") || el.textContent.includes("en-GB")) {
        el.click();
        return true;
      }
    }
    return false;
  });
  if (!enGBClicked) {
    console.warn("Could not find en-GB in language menu; continuing with current locale.");
  } else {
    await wait(500);
  }
}

async function screenshotTranslate(page) {
  await clickByAriaLabel(page, "Translate");
  await wait(500);
  await page.screenshot({ path: path.join(OUT_DIR, "translate.png") });
}

async function screenshotRewrite(page) {
  await clickByAriaLabel(page, "Rewrite");
  await wait(500);
  await page.screenshot({ path: path.join(OUT_DIR, "rewrite.png") });
}

async function screenshotTransform(page) {
  await clickByAriaLabel(page, "Transform");
  await wait(500);
  await page.screenshot({ path: path.join(OUT_DIR, "transform.png") });
}

async function screenshotTransformNewPrompt(page) {
  await clickByAriaLabel(page, "New prompt");
  await wait(600);
  await page.screenshot({ path: path.join(OUT_DIR, "transform-prompt-edit.png") });
}

async function screenshotDashboardSummary(page) {
  await clickByAriaLabel(page, "Dashboard");
  await wait(600);
  await page.screenshot({ path: path.join(OUT_DIR, "dashboard-summary.png") });
}

async function screenshotSettingsModels(page) {
  await clickByAriaLabel(page, "Settings");
  await wait(500);
  const tabs = await page.$$('button[role="tab"]');
  for (const t of tabs) {
    const text = await page.evaluate((el) => el.textContent, t);
    if (text && text.trim().includes("Models")) {
      await t.click();
      break;
    }
  }
  await wait(500);
  await page.screenshot({ path: path.join(OUT_DIR, "settings-models.png") });
}

async function screenshotLanguageSelector(page) {
  await clickByAriaLabel(page, "Interface language");
  await wait(400);
  // Inject web fonts so Telugu, Korean, Thai etc. render (Chromium on Linux/ARM often lacks these)
  try {
    await page.evaluate(async () => {
      const fontUrl =
        "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400&family=Noto+Sans+Telugu:wght@400&family=Noto+Sans+Thai:wght@400&display=swap";
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = fontUrl;
      document.head.appendChild(link);
      await new Promise((resolve, reject) => {
        link.onload = resolve;
        link.onerror = reject;
        setTimeout(() => resolve(), 5000);
      });
      const style = document.createElement("style");
      style.textContent =
        '[role="menu"], [role="menuitem"] { font-family: "Noto Sans KR", "Noto Sans Telugu", "Noto Sans Thai", system-ui, sans-serif !important; }';
      document.head.appendChild(style);
      await document.fonts.ready;
    });
    await wait(300);
  } catch (e) {
    console.warn("Could not load web fonts for language selector:", e.message);
  }
  const clip = await page.evaluate(() => {
    const btn = document.querySelector('button[aria-label="Interface language"]');
    if (!btn) return null;
    const padding = 12;
    let x1 = Infinity;
    let y1 = Infinity;
    let x2 = -Infinity;
    let y2 = -Infinity;
    const addRect = (r) => {
      x1 = Math.min(x1, r.left);
      y1 = Math.min(y1, r.top);
      x2 = Math.max(x2, r.right);
      y2 = Math.max(y2, r.bottom);
    };
    addRect(btn.getBoundingClientRect());
    const menu = document.querySelector('[role="menu"]');
    if (menu) addRect(menu.getBoundingClientRect());
    const menuitems = document.querySelectorAll('[role="menuitem"]');
    menuitems.forEach((el) => addRect(el.getBoundingClientRect()));
    if (x1 === Infinity) return null;
    return {
      x: Math.max(0, Math.round(x1 - padding)),
      y: Math.max(0, Math.round(y1 - padding)),
      width: Math.round(x2 - x1 + padding * 2),
      height: Math.round(y2 - y1 + padding * 2),
    };
  });
  if (clip) {
    await page.screenshot({
      path: path.join(OUT_DIR, "language-selector.png"),
      clip,
    });
  } else {
    await page.screenshot({ path: path.join(OUT_DIR, "language-selector.png") });
  }
  await page.keyboard.press("Escape");
  await wait(200);
}

async function main() {
  if (!(await checkAppResponding())) {
    console.error("The application is not responding at %s.", BASE_URL);
    console.error("Start it first with: pnpm run dev:web");
    process.exit(1);
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });

  const executablePath = getChromeExecutablePath();
  const launchOptions = {
    headless: HEADLESS,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  };
  if (executablePath) {
    launchOptions.executablePath = executablePath;
  }
  const browser = await puppeteer.launch(launchOptions);

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  try {
    await page.goto(BASE_URL, { waitUntil: "networkidle2", timeout: 20000 });
  } catch (e) {
    console.error("Failed to load %s: %s", BASE_URL, e.message);
    console.error("Ensure the web app is running (e.g. pnpm run dev:web).");
    await browser.close();
    process.exit(1);
  }

  await wait(2000);
  await maybeLogin(page);
  await setUILanguageToEnGB(page);

  for (const { name, fn } of SCREENSHOTS) {
    try {
      await fn(page);
      console.log("Saved %s.png", name);
    } catch (err) {
      console.error("Screenshot %s failed: %s", name, err.message);
    }
  }

  await browser.close();
  console.log("Done. Screenshots in %s", OUT_DIR);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
