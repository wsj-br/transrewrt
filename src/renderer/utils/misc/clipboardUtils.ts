/**
 * Copy plain text to the clipboard.
 * - Electron: main-process `clipboard.writeText` (works after async work; no user gesture).
 * - Web: `navigator.clipboard.writeText` when allowed, else `execCommand('copy')` fallback.
 */
export async function copyTextToClipboard(text: string): Promise<void> {
  const s = text == null ? "" : String(text);

  const electronAPI =
    typeof window !== "undefined"
      ? (window as Window & { electronAPI?: { writeClipboardText?: (t: string) => Promise<unknown> } })
          .electronAPI
      : undefined;
  if (typeof electronAPI?.writeClipboardText === "function") {
    await electronAPI.writeClipboardText(s);
    return;
  }

  if (typeof navigator !== "undefined" && typeof navigator.clipboard?.writeText === "function") {
    try {
      await navigator.clipboard.writeText(s);
      return;
    } catch {
      /* fall through — common after async without user activation (web) */
    }
  }

  await copyTextWithExecCommand(s);
}

function copyTextWithExecCommand(s: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const ta = document.createElement("textarea");
    ta.value = s;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    ta.style.top = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      ta.setSelectionRange(0, s.length);
    } catch {
      /* setSelectionRange can throw on some engines; select() is enough */
    }
    try {
      const ok = document.execCommand("copy");
      if (ok) resolve();
      else reject(new Error('execCommand("copy") returned false'));
    } catch (e) {
      reject(e instanceof Error ? e : new Error(String(e)));
    } finally {
      document.body.removeChild(ta);
    }
  });
}
