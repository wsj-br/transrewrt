import React, { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button, Label, Input, Text, Checkbox, Dropdown, Option } from "@fluentui/react-components";
import { Lock, LogOut, Clock } from "lucide-react";
import webAPI from "../utils/webApiClient";
import { useAppContext } from "../contexts/AppContext";

/** Format remaining ms: "Xd HH:MM" if ≥1 day, "HH:MM" if <24h. */
function formatSessionRemaining(expiresAtMs) {
  if (expiresAtMs == null || typeof expiresAtMs !== "number") return null;
  const remaining = Math.max(0, expiresAtMs - Date.now());
  const totalM = Math.floor(remaining / 60000);
  const dd = Math.floor(totalM / (24 * 60));
  const hh = Math.floor((totalM % (24 * 60)) / 60);
  const mm = totalM % 60;
  const time = `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
  return dd > 0 ? `${dd} day${dd > 1 ? "s" : ""}, ${time}` : time;
}

const gridRow = {
  display: "grid",
  gridTemplateColumns: "140px 1fr",
  alignItems: "center",
  gap: "12px",
  marginBottom: "12px",
  maxWidth: "400px",
};

/** Seconds values for session timeout options (used for closest-match only). */
const SESSION_TIMEOUT_SECONDS = [3600, 21600, 43200, 86400, 172800, 345600, 604800];

const DEFAULT_SESSION_TIMEOUT = 604800;

function secondsToClosestOption(seconds) {
  const num = Number(seconds) || DEFAULT_SESSION_TIMEOUT;
  let closestSec = SESSION_TIMEOUT_SECONDS[SESSION_TIMEOUT_SECONDS.length - 1];
  let minDiff = Infinity;
  for (const sec of SESSION_TIMEOUT_SECONDS) {
    const diff = Math.abs(sec - num);
    if (diff < minDiff) {
      minDiff = diff;
      closestSec = sec;
    }
  }
  return String(closestSec);
}

const SettingsDialogAuthTab = () => {
  const { t } = useTranslation();
  const { settings, setSetting, handleWebLogout } = useAppContext();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState({ type: null, text: "" });
  const [loading, setLoading] = useState(false);

  const sessionTimeoutOptions = useMemo(
    () => [
      { label: t("1h"), seconds: 3600 },
      { label: t("6h"), seconds: 21600 },
      { label: t("12h"), seconds: 43200 },
      { label: t("1 day"), seconds: 86400 },
      { label: t("2 days"), seconds: 172800 },
      { label: t("4 days"), seconds: 345600 },
      { label: t("7 days"), seconds: 604800 },
    ],
    [t]
  );

  const sessionTimeoutSeconds = Number(settings.web_session_timeout) || DEFAULT_SESSION_TIMEOUT;
  const sessionTimeoutValue = useMemo(
    () => secondsToClosestOption(sessionTimeoutSeconds),
    [sessionTimeoutSeconds]
  );

  const expiresAt = settings.web_session_expires_at;
  const [sessionRemaining, setSessionRemaining] = useState(() => formatSessionRemaining(expiresAt));
  useEffect(() => {
    if (expiresAt == null) {
      setSessionRemaining(null);
      return;
    }
    const update = () => setSessionRemaining(formatSessionRemaining(expiresAt));
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, [expiresAt]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: null, text: "" });
    if (!showPassword && newPassword !== confirmPassword) {
      setMessage({ type: "error", text: t("New password and confirmation do not match.") });
      return;
    }
    if (newPassword.length < 1) {
      setMessage({ type: "error", text: t("New password is required.") });
      return;
    }
    setLoading(true);
    try {
      await webAPI.changePassword(newPassword);
      setMessage({ type: "success", text: t("Password changed successfully.") });
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      setMessage({ type: "error", text: err.message || t("Failed to change password.") });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tab-content">
      <div className="section">
        <Text as="h3" size={500} weight="semibold" style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: 0, marginBottom: "36px" }}>
          <Lock size={20} />
          {t("Change password")}
        </Text>
        <div style={{ paddingLeft: "24px" }}>
        <form onSubmit={handleSubmit}>
          <div style={gridRow}>
            <Label htmlFor="auth-new">{t("New password")}</Label>
            <Input
              id="auth-new"
              type={showPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder={t("New password")}
              disabled={loading}
              autoComplete="new-password"
            />
          </div>
          {!showPassword && (
            <div style={gridRow}>
              <Label htmlFor="auth-confirm">{t("Confirm password")}</Label>
              <Input
                id="auth-confirm"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder={t("Confirm new password")}
                disabled={loading}
                autoComplete="new-password"
              />
            </div>
          )}
          <div style={{ ...gridRow, gridTemplateColumns: "140px 1fr", alignItems: "center" }}>
            <span style={{ gridColumn: 1 }} />
            <Checkbox
              id="auth-show-password"
              label={t("Show password")}
              checked={showPassword}
              onChange={(_, data) => {
                setShowPassword(!!data.checked);
                if (data.checked) setConfirmPassword("");
              }}
              disabled={loading}
            />
          </div>
          {message.text && (
            <div
              style={{
                marginBottom: "16px",
                padding: "8px 12px",
                borderRadius: "4px",
                fontSize: "14px",
                backgroundColor: message.type === "success" ? "#d4edda" : "#f8d7da",
                color: message.type === "success" ? "#155724" : "#721c24",
              }}
            >
              {message.text}
            </div>
          )}
          <Button type="submit" appearance="primary" disabled={loading}>
            {loading ? t("Changing…") : t("Change password")}
          </Button>
        </form>
        </div>
      </div>
      <div className="section" style={{ marginTop: "24px" }}>
        <Text as="h3" size={500} weight="semibold" style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: 0, marginBottom: "36px" }}>
          <Clock size={20} />
          {t("Session timeout")}
        </Text>
        <div style={{ paddingLeft: "24px" }}>
        <div style={gridRow}>
          <Label htmlFor="auth-session-timeout">{t("Timeout")}</Label>
          <Dropdown
            id="auth-session-timeout"
            appearance="underline"
            value={sessionTimeoutOptions.find((o) => String(o.seconds) === sessionTimeoutValue)?.label ?? t("7 days")}
            selectedOptions={[sessionTimeoutValue]}
            onOptionSelect={(e, data) => {
              const seconds = data.optionValue ? parseInt(String(data.optionValue), 10) : NaN;
              if (!Number.isNaN(seconds)) setSetting("web_session_timeout", seconds);
            }}
            style={{ minWidth: "140px" }}
          >
            {sessionTimeoutOptions.map((opt) => (
              <Option key={opt.seconds} value={String(opt.seconds)}>
                {opt.label}
              </Option>
            ))}
          </Dropdown>
        </div>
        <Text as="p" size={200} style={{ marginTop: "4px", marginBottom: 0, color: "var(--colorNeutralForeground3)" }}>
          {t("Applies to new logins.")}
        </Text>
        </div>
      </div>
      <div className="section" style={{ marginTop: "24px" }}>
        <Text as="h3" size={500} weight="semibold" style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: 0, marginBottom: "36px" }}>
          <LogOut size={20} />
          {t("Session")}
        </Text>
        <div style={{ paddingLeft: "24px" }}>
        <Button
          appearance="secondary"
          onClick={async () => {
            try {
              await handleWebLogout();
            } catch (err) {
              setMessage({ type: "error", text: err.message || t("Logout failed.") });
            }
          }}
        >
          {t("Log out")}
        </Button>
        {sessionRemaining != null && (
          <Text as="p" size={200} style={{ marginTop: 0, marginLeft: "12px", color: "var(--colorNeutralForeground3)" }}>
           <Clock size={12} /> {t("Session remaining:")} <b>{sessionRemaining}</b>
          </Text>
        )}
        </div>
      </div>
    </div>
  );
};

export default SettingsDialogAuthTab;
