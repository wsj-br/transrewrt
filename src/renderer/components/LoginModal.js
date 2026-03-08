import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles, tokens, Button, Input, Label } from "@fluentui/react-components";

const useStyles = makeStyles({
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10000,
  },
  modal: {
    backgroundColor: tokens.colorNeutralBackground1,
    padding: "24px",
    borderRadius: "8px",
    boxShadow: tokens.shadow28,
    minWidth: "320px",
    maxWidth: "90vw",
  },
  title: {
    margin: "0 0 16px 0",
    fontSize: "18px",
    fontWeight: 600,
  },
  field: {
    marginBottom: "16px",
  },
  actions: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "flex-end",
    gap: "8px",
  },
  error: {
    color: tokens.colorStatusDangerForeground1,
    fontSize: "12px",
    marginTop: "8px",
  },
  // Visually hidden but in DOM so browsers/password managers detect username+password pair
  hiddenUsername: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: 0,
  },
});

const LoginModal = ({ onSuccess, sessionExpired = false }) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await onSuccess(password);
    } catch (err) {
      setError(err.message || t("Login failed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>{sessionExpired ? t("Session expired") : t("Log in")}</h2>
        {sessionExpired && (
          <p style={{ margin: "0 0 16px 0", fontSize: "14px", color: "var(--colorNeutralForeground2, #605e5c)" }}>
            {t("Your session has expired. Please log in again.")}
          </p>
        )}
        <form
          onSubmit={handleSubmit}
          method="post"
          action="#"
          autoComplete="on"
        >
          <input
            type="text"
            name="username"
            id="login-username"
            autoComplete="username"
            defaultValue="Transrewrt"
            readOnly
            tabIndex={-1}
            className={styles.hiddenUsername}
            aria-hidden
          />
          <div className={styles.field}>
            <Label htmlFor="login-password">{t("Password")}</Label>
            <Input
              id="login-password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t("Password")}
              autoComplete="current-password"
              autoFocus
              disabled={loading}
              style={{ width: "100%" }}
            />
          </div>
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles.actions}>
            <Button type="submit" appearance="primary" disabled={loading}>
              {loading ? t("Logging in…") : t("Log in")}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
