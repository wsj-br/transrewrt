import { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import webAPI from "../utils/api/webApiClient";
import { getWebAuthFormAction } from "../utils/misc/webAuthForms";
import HiddenUsernameForPasswordManager from "./HiddenUsernameForPasswordManager";
import PasswordInput from "./PasswordInput";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const LoginModal = ({ onSuccess, sessionExpired = false }) => {
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

  const overlayClass = "fixed inset-0 z-[10000] flex items-center justify-center bg-black/60";
  const modalClass = "bg-card border border-border rounded-lg shadow-2xl p-6 min-w-80 w-full max-w-sm";

  if (step === "changePassword") {
    return (
      <div className={overlayClass}>
        <div className={modalClass}>
          <h2 className="text-lg font-semibold mb-3">{t("Change password")}</h2>
          <p className="text-sm text-muted-foreground mb-5">
            {t("You must change your password before continuing.")}
          </p>
          <form
            onSubmit={handleChangePasswordSubmit}
            method="post"
            action={getWebAuthFormAction()}
            autoComplete="on"
            className="flex flex-col gap-4"
            style={{ position: "relative" }}
          >
            <HiddenUsernameForPasswordManager username={loggedInUser?.username} id="login-modal-change-username" />
            <div className="flex flex-col gap-1.5">
              <PasswordInput
                id="login-modal-new-password"
                name="new_password"
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
            <div className="flex flex-col gap-1.5">
              <PasswordInput
                id="login-modal-confirm-password"
                name="new_password_confirm"
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
            {error && <p className="text-xs text-destructive">{error}</p>}
            <div className="flex justify-end mt-1">
              <Button type="submit" disabled={loading}>
                {loading ? t("Changing…") : t("Change password")}
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={overlayClass}>
      <div className={modalClass}>
        <h2 className="text-lg font-semibold mb-3">{t("Log in")}</h2>
        <p className="text-sm text-muted-foreground mb-5">
          {sessionExpired
            ? t("Your session has expired. Please log in again.")
            : t("Enter your credentials to access your account.")}
        </p>
        <form
          onSubmit={handleLoginSubmit}
          method="post"
          action={getWebAuthFormAction()}
          autoComplete="on"
          id="transrewrt-web-login-modal-form"
          className="flex flex-col gap-4"
          style={{ position: "relative" }}
        >
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="login-modal-username">{t("Username")}</Label>
            <Input
              id="login-modal-username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={t("Username")}
              autoComplete="username"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              inputMode="text"
              autoFocus
              disabled={loading}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <PasswordInput
              id="login-modal-password"
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
          {error && <p className="text-xs text-destructive">{error}</p>}
          <div className="flex justify-end mt-1">
            <Button type="submit" disabled={loading}>
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
