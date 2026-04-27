/** Session expiry (401) in web mode: invokes registered callback so app can show login modal. */

let _onSessionExpired = null;

export function register(callback) {
  _onSessionExpired = callback;
}

export function onSessionExpired() {
  if (typeof _onSessionExpired === "function") {
    _onSessionExpired();
  }
}
