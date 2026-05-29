/** Race a promise against a timeout (startup / auth checks). */
export function withTimeout<T>(
  promise: Promise<T>,
  ms: number,
  label = "Operation",
): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => {
      setTimeout(
        () => reject(new Error(`${label} timed out after ${Math.round(ms / 1000)}s`)),
        ms,
      );
    }),
  ]);
}

/** Never leave the loading shell stuck — cap total startup wait. */
export const STARTUP_SAFETY_MS = 12_000;

export const STARTUP_FETCH_MS = 8_000;
