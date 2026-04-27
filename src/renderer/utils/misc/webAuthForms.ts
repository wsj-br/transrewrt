/**
 * Helpers so browser password managers can recognize login / password-change forms (autofill + save).
 */

/**
 * Stable POST target for credential forms; avoids `action="#"` which confuses some password managers.
 * @returns {string}
 */
export function getWebAuthFormAction() {
  if (typeof window === "undefined") return "/";
  const path = `${window.location.pathname}${window.location.search}`;
  return path || "/";
}
