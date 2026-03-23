/**
 * Authenticated LLM routes: GET /api/llm/models, POST /api/llm/stream (SSE),
 * GET /api/llm/generation (OpenRouter cost lookup).
 */

const express = require("express");
const {
  mergeKeys,
  getAllModels,
  streamCompletion,
  fetchOpenRouterGenerationUsage,
  resolveEngine,
} = require("../../shared/llm");

/**
 * @param {() => object} readConfig
 * @param {(req: import('express').Request, res: import('express').Response) => void} setSessionRefreshCookie
 * @param {object} log
 */
module.exports = function createApiLlmRouter(
  readConfig,
  setSessionRefreshCookie,
  log,
) {
  const router = express.Router();

  router.get("/llm/models", async (req, res) => {
    try {
      setSessionRefreshCookie(req, res);
      const keysMap = mergeKeys(readConfig());
      const models = await getAllModels(keysMap);
      res.json({ data: models });
    } catch (err) {
      log.error("[API] GET /api/llm/models: " + err.message, {
        stack: err.stack,
      });
      res.status(500).json({ error: err.message || "Failed to list models" });
    }
  });

  router.get("/llm/generation", async (req, res) => {
    try {
      setSessionRefreshCookie(req, res);
      const id = req.query.id;
      if (!id || typeof id !== "string") {
        return res.status(400).json({ error: "Missing id" });
      }
      const keysMap = mergeKeys(readConfig());
      const usage = await fetchOpenRouterGenerationUsage(
        keysMap.openrouter_api_key,
        id,
      );
      if (!usage) {
        return res.status(404).json({ error: "Generation not found" });
      }
      res.json({
        data: {
          total_cost: usage.cost,
          tokens_prompt: usage.prompt_tokens,
          tokens_completion: usage.completion_tokens,
        },
      });
    } catch (err) {
      log.error("[API] GET /api/llm/generation: " + err.message, {
        stack: err.stack,
      });
      res.status(500).json({ error: err.message });
    }
  });

  router.post("/llm/stream", async (req, res) => {
    const body = req.body || {};
    const canonicalModelId = body.canonicalModelId;
    const messages = body.messages;
    const temperature =
      typeof body.temperature === "number" ? body.temperature : 0.3;

    if (!canonicalModelId || typeof canonicalModelId !== "string") {
      return res.status(400).json({ error: "canonicalModelId is required" });
    }
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "messages array is required" });
    }

    try {
      resolveEngine(canonicalModelId);
    } catch (e) {
      return res.status(400).json({ error: e.message || "Invalid model id" });
    }

    const keysMap = mergeKeys(readConfig());
    const ac = new AbortController();
    // Abort upstream LLM only when the *response* is torn down (client disconnect / tab close).
    // Do NOT use req.on("close"/"aborted"): with POST + express.json(), the request stream can
    // emit "close" after the body is consumed while the client is still reading the SSE response,
    // which aborts the stream immediately and breaks web translation (Electron uses IPC, not this route).
    const onResClose = () => ac.abort();
    res.on("close", onResClose);

    res.status(200);
    // Refresh session cookie before any flush — Set-Cookie cannot be sent after headers are sent.
    setSessionRefreshCookie(req, res);
    res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders?.();

    try {
      await streamCompletion(
        canonicalModelId,
        messages,
        { keysMap, temperature, signal: ac.signal },
        {
          onSseLine: (line) => {
            if (!res.writableEnded) {
              res.write(`${line}\n\n`);
            }
          },
        },
      );
    } catch (err) {
      log.error("[API] POST /api/llm/stream: " + err.message, {
        stack: err.stack,
      });
      if (!res.headersSent) {
        return res.status(err.status || 500).json({ error: err.message });
      }
      if (!res.writableEnded) {
        const payload = {
          error: {
            message: err.message,
            code: err.status,
          },
        };
        res.write(`data: ${JSON.stringify(payload)}\n\n`);
      }
    } finally {
      res.off("close", onResClose);
      if (!res.writableEnded) res.end();
    }
  });

  return router;
};
