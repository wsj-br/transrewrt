/**
 * NTFY notification helper for presets-check.
 */

/** HTTP request headers must be ISO-8859-1 (ByteString); Unicode breaks fetch Title/Tags. */
function toLatin1HeaderValue(value) {
  return String(value ?? "")
    .replace(/\u2014/g, "-")
    .replace(/\u2013/g, "-")
    .replace(/\u2192/g, "->")
    .replace(/[^\u0020-\u00FF]/g, "?");
}

async function sendNtfy(config, { title, body, tags, priority }) {
  const server = (config.ntfy?.server || "https://ntfy.sh").replace(/\/$/, "");
  const topic = (config.ntfy?.topic || "").trim();
  if (!topic) return { skipped: true, reason: "no topic configured" };

  const url = `${server}/${encodeURIComponent(topic)}`;
  const headers = {
    Title: toLatin1HeaderValue(title),
    "Content-Type": "text/plain; charset=utf-8",
  };
  if (tags) headers.Tags = toLatin1HeaderValue(tags);
  const prio = priority || config.ntfy?.priority;
  if (prio) headers.Priority = toLatin1HeaderValue(prio);
  const token = config.ntfy?.authToken || process.env.PRESET_CHECK_NTFY_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(url, { method: "POST", headers, body: body });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`NTFY HTTP ${res.status}: ${text.slice(0, 200)}`);
  }
  return { ok: true };
}

module.exports = { sendNtfy, toLatin1HeaderValue };
