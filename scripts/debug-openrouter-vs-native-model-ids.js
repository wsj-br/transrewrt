#!/usr/bin/env node
/**
 * Compare OpenRouter model ids (suffix after last "/") with native Google catalog ids
 * from multi-llm-ts / Google API. Requires GOOGLE_API_KEY in env for the Google half.
 *
 * Usage: node scripts/debug-openrouter-vs-native-model-ids.js
 */
async function main() {
  const orRes = await fetch("https://openrouter.ai/api/v1/models");
  const orJson = await orRes.json();
  const orRows = orJson.data || [];
  const orGemini = orRows
    .filter((r) => r.id && String(r.id).includes("gemini"))
    .map((r) => {
      const i = r.id.lastIndexOf("/");
      const suf = i >= 0 ? r.id.slice(i + 1) : r.id;
      return { full: r.id, suffix: suf };
    })
    .filter((x) => /2\.5.*flash/i.test(x.suffix) && !/image|lite|preview/i.test(x.suffix));

  console.log("OpenRouter (sample, gemini 2.5 flash core):");
  for (const x of orGemini.slice(0, 8)) {
    console.log(`  ${x.full}  →  suffix: ${x.suffix}`);
  }

  const googleKey = (process.env.GOOGLE_API_KEY || "").trim();
  if (!googleKey) {
    console.log("\nSkip Google list: set GOOGLE_API_KEY to compare native ids.");
    return;
  }

  const { loadGoogleModels } = require("multi-llm-ts");
  const loaded = await loadGoogleModels({ apiKey: googleKey });
  const chat = loaded?.chat || [];
  const native = chat
    .filter((m) => m.id && /gemini.*2\.5.*flash/i.test(m.id) && !/image|lite|preview/i.test(m.id))
    .map((m) => m.id);

  console.log("\nNative Google chat model ids (multi-llm-ts, sample):");
  for (const id of native.slice(0, 12)) {
    console.log(`  ${id}`);
    const hit = orRows.find((r) => {
      const i = r.id.lastIndexOf("/");
      const suf = i >= 0 ? r.id.slice(i + 1) : r.id;
      return suf.toLowerCase() === id.toLowerCase();
    });
    console.log(`    → OpenRouter match: ${hit ? hit.id : "(none)"}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
