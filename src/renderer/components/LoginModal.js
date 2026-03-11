import { useState } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles, tokens, Button, Input, Field } from "@fluentui/react-components";
import PropTypes from "prop-types";
import webAPI from "../utils/api/webApiClient";
import PasswordInput from "./PasswordInput";

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
  instruction: {
    margin: "0 0 16px 0",
    fontSize: "14px",
    color: tokens.colorNeutralForeground2,
    lineHeight: 1.4,
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
});

const LoginModal = ({ onSuccess, sessionExpired = false }) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState("login");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const userInfo = await webAPI.login(username.trim(), password);
      if (userInfo.mustChangePassword) {
        setLoggedInUser(userInfo);
        setStep("changePassword");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        onSuccess(userInfo);
      }
    } catch (err) {
      setError(err.message || t("Login failed"));
    } finally {
      setLoading(false);
    }
  };

  const handleChangePasswordSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (newPassword !== confirmPassword) {
      setError(t("New password and confirmation do not match."));
      return;
    }
    if (newPassword.length < 1) {
      setError(t("New password is required."));
      return;
    }
    setLoading(true);
    try {
      await webAPI.changePassword(newPassword);
      onSuccess({ ...loggedInUser, mustChangePassword: false });
    } catch (err) {
      setError(err.message || t("Failed to change password."));
    } finally {
      setLoading(false);
    }
  };

  if (step === "changePassword") {
    return (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <h2 className={styles.title}>{t("Change password")}</h2>
          <p className={styles.instruction}>
            {t("You must change your password before continuing.")}
          </p>
          <form onSubmit={handleChangePasswordSubmit} method="post" action="#" autoComplete="off">
            <div className={styles.field}>
              <PasswordInput
                id="login-new-password"
                label={t("New password")}
                value={newPassword}
                onChange={setNewPassword}
                placeholder={t("New password")}
                autoComplete="new-password"
                autoFocus
                disabled={loading}
                showPasswordAriaLabel={t("Show password")}
                hidePasswordAriaLabel={t("Hide password")}
              />
            </div>
            <div className={styles.field}>
              <PasswordInput
                id="login-confirm-password"
                label={t("Confirm new password")}
                value={confirmPassword}
                onChange={setConfirmPassword}
                placeholder={t("Confirm new password")}
                autoComplete="new-password"
                disabled={loading}
                showPasswordAriaLabel={t("Show password")}
                hidePasswordAriaLabel={t("Hide password")}
              />
            </div>
            {error && <div className={styles.error}>{error}</div>}
            <div className={styles.actions}>
              <Button type="submit" appearance="primary" disabled={loading}>
                {loading ? t("Changing…") : t("Change password")}
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>{t("Log in")}</h2>
        <p className={styles.instruction}>
          {sessionExpired
            ? t("Your session has expired. Please log in again.")
            : t("Enter your credentials to access your account.")}
        </p>
        <form onSubmit={handleLoginSubmit} method="post" action="#" autoComplete="on">
          <div className={styles.field}>
            <Field label={t("Username")}>
              <Input
                id="login-username"
                name="username"
                type="text"
                value={username}
                onChange={(_, data) => setUsername(typeof data?.value === "string" ? data.value : "")}
                placeholder={t("Username")}
                autoComplete="username"
                autoFocus
                disabled={loading}
                appearance="outline"
                style={{ width: "100%" }}
              />
            </Field>
          </div>
          <div className={styles.field}>
            <PasswordInput
              id="login-password"
              name="password"
              label={t("Password")}
              value={password}
              onChange={setPassword}
              placeholder={t("Password")}
              autoComplete="current-password"
              disabled={loading}
              showPasswordAriaLabel={t("Show password")}
              hidePasswordAriaLabel={t("Hide password")}
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

LoginModal.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  sessionExpired: PropTypes.bool,
};

export default LoginModal;
