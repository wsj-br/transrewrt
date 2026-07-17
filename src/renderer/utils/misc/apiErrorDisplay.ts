import {
  isOpenRouterKeyAuthFailureMessage,
  normalizeOpenRouterKeyErrorMessage,
  OPENROUTER_KEY_INVALID_MESSAGE,
} from "../../../shared/apiErrorMessage.js";
import { interpolateTemplate } from "./formatUtils";

export type ActionErrorCategory =
  | "missing_config"
  | "auth"
  | "rate_limit"
  | "credits"
  | "forbidden"
  | "model_missing"
  | "timeout"
  | "network"
  | "server"
  | "provider"
  | "fallback";

export type ClassifiedActionError = {
  category: ActionErrorCategory;
  /** Already-resolved or provider-sourced body; shown via `t()` when it is a known key. */
  bodyText?: string;
};

function parseHttpStatusFromMessage(message: string): number | null {
  const m = message.match(/\bHTTP(?:\s+error!?\s*status:)?\s*(\d{3})\b/i)
    || message.match(/\bstatus[:\s]+(\d{3})\b/i)
    || message.match(/\((\d{3})\)/);
  if (!m) return null;
  const n = Number(m[1]);
  return Number.isFinite(n) ? n : null;
}

function sanitizeProviderDetail(message: string): string {
  const trimmed = message.trim();
  if (!trimmed) return "";
  const withoutPrefix = trimmed
    .replace(/^(Error|TypeError|FetchError|AI_APICallError):\s*/i, "")
    .trim();
  return withoutPrefix.slice(0, 500);
}

/**
 * Classify a raw provider/network error into a stable category.
 */
export function classifyActionError(
  rawMessage: string | null | undefined,
  status?: number | null,
): ClassifiedActionError {
  const message = typeof rawMessage === "string" ? rawMessage.trim() : "";
  const lower = message.toLowerCase();
  const resolvedStatus =
    (typeof status === "number" && Number.isFinite(status) ? status : null)
    ?? parseHttpStatusFromMessage(message);

  // App-authored messages that are already user-friendly (may be pre-translated).
  if (
    /has been removed from your list/i.test(message)
    || /provider rejected this preset/i.test(message)
  ) {
    return { category: "model_missing", bodyText: message };
  }

  if (
    /no api key or url configured/i.test(message)
    || /no api key or endpoint/i.test(message)
  ) {
    return { category: "missing_config" };
  }

  if (
    resolvedStatus === 401
    || isOpenRouterKeyAuthFailureMessage(message)
    || /authentication failed/i.test(message)
  ) {
    return {
      category: "auth",
      bodyText: isOpenRouterKeyAuthFailureMessage(message)
        ? OPENROUTER_KEY_INVALID_MESSAGE
        : undefined,
    };
  }

  if (resolvedStatus === 429 || /rate limit/i.test(message)) {
    return { category: "rate_limit" };
  }

  if (
    resolvedStatus === 402
    || /insufficient credits/i.test(message)
    || /payment required/i.test(message)
  ) {
    return { category: "credits" };
  }

  if (resolvedStatus === 403 || /^forbidden\b/i.test(message)) {
    return { category: "forbidden" };
  }

  if (
    resolvedStatus === 404
    || /model not found/i.test(message)
    || /model may no longer be available/i.test(message)
  ) {
    return { category: "model_missing" };
  }

  if (
    /timed out/i.test(message)
    || /timeout/i.test(message)
    || lower.includes("timeouterror")
  ) {
    return { category: "timeout" };
  }

  if (
    /failed to fetch/i.test(message)
    || /networkerror/i.test(message)
    || /network request failed/i.test(message)
    || /econnrefused/i.test(message)
    || /enotfound/i.test(message)
    || /econnreset/i.test(message)
    || /socket hang up/i.test(message)
    || /load failed/i.test(message)
  ) {
    return { category: "network" };
  }

  if (
    (resolvedStatus != null && resolvedStatus >= 500)
    || /server error/i.test(message)
  ) {
    return { category: "server" };
  }

  if (message) {
    const detail = sanitizeProviderDetail(
      normalizeOpenRouterKeyErrorMessage(message) || message,
    );
    if (detail) {
      return { category: "provider", bodyText: detail };
    }
  }

  return { category: "fallback" };
}

/**
 * Resolve a classified error to a localized user-facing body string.
 * Message strings are literal `t("…")` keys so ai-i18n-tools can extract them.
 */
export function formatActionErrorMessage(
  classified: ClassifiedActionError,
  t: (key: string, options?: Record<string, unknown>) => string,
): string {
  if (classified.bodyText) {
    return t(classified.bodyText);
  }

  switch (classified.category) {
    case "missing_config":
      return t(
        "No API key or endpoint is configured for this provider. Open Settings and add your API key or local server URL.",
      );
    case "auth":
      return t("Authentication failed. Check your API key in Settings and try again.");
    case "rate_limit":
      return t(
        "Rate limit exceeded. The provider is asking you to slow down.\n\nWait a few seconds and try again. A paid API key usually has higher limits.",
      );
    case "credits":
      return t(
        "Insufficient credits or payment required. Check your provider account balance and try again.",
      );
    case "forbidden":
      return t(
        "This model is not available with your current API key or plan. Try a different model.",
      );
    case "model_missing":
      return t("The selected model is unavailable. Choose a different model and try again.");
    case "timeout":
      return t("The request timed out. Check your connection and try again.");
    case "network":
      return t(
        "Could not reach the provider. Check your internet connection, or that your local LLM server is running and the URL in Settings is correct.",
      );
    case "server":
      return t("The provider is temporarily unavailable. Please try again in a moment.");
    case "provider":
    case "fallback":
      return t("Something went wrong. Please try again.");
    default: {
      const _exhaustive: never = classified.category;
      void _exhaustive;
      return t("Something went wrong. Please try again.");
    }
  }
}

export type ActionErrorAction = "translate" | "rewrite" | "transform";

export type EmptyResultKind = "translate" | "rewrite" | "transform" | "rephrase";

function actionErrorTitle(
  action: ActionErrorAction,
  t: (key: string, options?: Record<string, unknown>) => string,
): string {
  switch (action) {
    case "translate":
      return t("Translation failed");
    case "rewrite":
      return t("Rewrite failed");
    case "transform":
      return t("Transform failed");
    default: {
      const _exhaustive: never = action;
      void _exhaustive;
      return t("Something went wrong. Please try again.");
    }
  }
}

/**
 * Build title + message for the action error alert dialog.
 */
export function buildActionErrorAlert(
  action: ActionErrorAction,
  rawMessage: string | null | undefined,
  t: (key: string, options?: Record<string, unknown>) => string,
  status?: number | null,
): { title: string; message: string } {
  const classified = classifyActionError(rawMessage, status);
  return {
    title: actionErrorTitle(action, t),
    message: formatActionErrorMessage(classified, t),
  };
}

/**
 * Alert for a completed run that returned no usable text (not a transport/API failure).
 * For rephrase, pass `parentAction` so the title matches translate vs rewrite.
 */
export function buildEmptyResultAlert(
  kind: EmptyResultKind,
  t: (key: string, options?: Record<string, unknown>) => string,
  parentAction: ActionErrorAction = "translate",
): { title: string; message: string } {
  if (kind === "rephrase") {
    return {
      title: actionErrorTitle(parentAction, t),
      message: t(
        "Rephrase finished but returned no text. Try again or choose another model.",
      ),
    };
  }
  switch (kind) {
    case "translate":
      return {
        title: t("Translation failed"),
        message: t(
          "Translation finished but returned no text. Try again or choose another model.",
        ),
      };
    case "rewrite":
      return {
        title: t("Rewrite failed"),
        message: t(
          "Rewrite finished but returned no text. Try again or choose another model.",
        ),
      };
    case "transform":
      return {
        title: t("Transform failed"),
        message: t(
          "Transform finished but returned no text. Try again or choose another model.",
        ),
      };
    default: {
      const _exhaustive: never = kind;
      void _exhaustive;
      return {
        title: t("Something went wrong. Please try again."),
        message: t("Something went wrong. Please try again."),
      };
    }
  }
}

/**
 * Alert when a stream ended without a clean finish and without a user cancel.
 */
export function buildIncompleteRequestAlert(
  action: ActionErrorAction,
  t: (key: string, options?: Record<string, unknown>) => string,
): { title: string; message: string } {
  return {
    title: actionErrorTitle(action, t),
    message: t("The request ended before completion. Try again."),
  };
}

export function translateApiErrorMessage(
  message: string | null | undefined,
  t: (key: string) => string,
): string {
  if (!message) return "";
  return t(normalizeOpenRouterKeyErrorMessage(message));
}

export function formatApiErrorLine(
  message: string | null | undefined,
  t: (key: string) => string,
): string {
  return interpolateTemplate(t("Error: {{message}}"), {
    message: translateApiErrorMessage(message, t),
  });
}
