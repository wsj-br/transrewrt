/**
 * IPC: llm:stream, llm:abort, llm:models — streams LLM completions to renderer via llm:chunk / llm:end / llm:error.
 */

const {
  mergeKeys,
  getAllModels,
  streamCompletion,
} = require("../../shared/llm");

/**
 * @param {import("electron").IpcMain} ipcMain
 * @param {() => object} getConfigCache
 */
function registerLlmIpc(ipcMain, getConfigCache) {
  /** @type {Map<string, AbortController>} */
  const abortByRequest = new Map();

  ipcMain.handle("llm:models", async () => {
    const keysMap = mergeKeys(getConfigCache());
    return getAllModels(keysMap);
  });

  ipcMain.handle("llm:abort", async (_, { requestId }) => {
    if (!requestId) return false;
    const ac = abortByRequest.get(requestId);
    if (ac) {
      ac.abort();
      abortByRequest.delete(requestId);
    }
    return true;
  });

  ipcMain.handle(
    "llm:stream",
    async (event, { requestId, canonicalModelId, messages, temperature }) => {
      if (!requestId) throw new Error("requestId is required");
      const wc = event.sender;
      const keysMap = mergeKeys(getConfigCache());
      const ac = new AbortController();
      abortByRequest.set(requestId, ac);

      const sendChunk = (text) => {
        if (!wc.isDestroyed()) {
          wc.send("llm:chunk", { requestId, text });
        }
      };

      try {
        const { usage } = await streamCompletion(
          canonicalModelId,
          messages,
          {
            keysMap,
            temperature:
              typeof temperature === "number" ? temperature : 0.3,
            signal: ac.signal,
          },
          {
            onText: sendChunk,
          },
        );
        if (!wc.isDestroyed()) {
          wc.send("llm:end", { requestId, usage });
        }
        return { ok: true, usage };
      } catch (err) {
        const msg = err?.message || String(err);
        if (!wc.isDestroyed()) {
          wc.send("llm:error", { requestId, error: msg });
        }
        throw err;
      } finally {
        abortByRequest.delete(requestId);
      }
    },
  );
}

module.exports = { registerLlmIpc };
