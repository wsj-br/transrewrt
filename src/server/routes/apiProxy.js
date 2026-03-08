/**
 * Routes: POST /api/proxy/chat/completions, GET /api/proxy/models, GET /api/proxy/generation
 */

const { Readable } = require("stream");
const express = require("express");

/**
 * @param {function} getProxyHeaders
 * @param {function} getProxyBaseUrl
 * @param {function} setSessionRefreshCookie
 * @param {object} log
 */
module.exports = function createApiProxyRouter(
  getProxyHeaders,
  getProxyBaseUrl,
  setSessionRefreshCookie,
  log,
) {
  const router = express.Router();

  router.post("/proxy/chat/completions", async (req, res) => {
    const targetUrl = `${getProxyBaseUrl()}/chat/completions`;
    try {
      const headers = getProxyHeaders();
      const response = await fetch(targetUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(req.body),
      });

      res.status(response.status);
      setSessionRefreshCookie(req, res);
      response.headers.forEach((value, key) => {
        const k = key.toLowerCase();
        if (k !== "transfer-encoding" && k !== "set-cookie") {
          res.setHeader(key, value);
        }
      });

      if (response.body) {
        Readable.fromWeb(response.body).pipe(res);
      } else {
        res.end();
      }
    } catch (err) {
      log.error("Proxy error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.get("/proxy/models", async (req, res) => {
    const targetUrl = `${getProxyBaseUrl()}/models`;
    try {
      const headers = getProxyHeaders();
      const response = await fetch(targetUrl, { headers });
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (err) {
      log.error("Proxy error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.get("/proxy/generation", async (req, res) => {
    const targetUrl = `${getProxyBaseUrl()}/generation?id=${encodeURIComponent(req.query.id || "")}`;
    try {
      const headers = getProxyHeaders();
      const response = await fetch(targetUrl, { headers });
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (err) {
      log.error("Proxy error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
