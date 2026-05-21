/**
 * NTFY notification helper for skill-check.
 */

async function sendNtfy(config, { title, body, tags, priority }) {
  const server = (config.ntfy?.server || "https://ntfy.sh").replace(/\/$/, "");
  const topic = (config.ntfy?.topic || "").trim();
  if (!topic) return { skipped: true, reason: "no topic configured" };

  const url = `${server}/${encodeURIComponent(topic)}`;
  const headers = {
    Title: title,
    "Content-Type": "text/plain; charset=utf-8",
  };
  if (tags) headers.Tags = tags;
  if (priority || config.ntfy?.priority) headers.Priority = priority || config.ntfy.priority;
  const token = config.ntfy?.authToken || process.env.SKILL_CHECK_NTFY_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(url, { method: "POST", headers, body: body });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`NTFY HTTP ${res.status}: ${text.slice(0, 200)}`);
  }
  return { ok: true };
}

module.exports = { sendNtfy };
