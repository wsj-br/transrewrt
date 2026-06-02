import { normalizeOpenRouterKeyErrorMessage } from "../../../shared/apiErrorMessage.js";

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
  return t("Error: {{message}}", { message: translateApiErrorMessage(message, t) });
}
