import { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import webAPI from "../utils/api/webApiClient";
import { getWebAuthFormAction } from "../utils/misc/webAuthForms";
import HiddenUsernameForPasswordManager from "./HiddenUsernameForPasswordManager";
import PasswordInput from "./PasswordInput";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const ChangePasswordModal = ({ onClose, username = "" }) => {
  const { t } = useTranslation();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState({ type: null, text: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: null, text: "" });
    if (newPassword !== confirmPassword) {
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
      setTimeout(() => onClose(), 1500);
    } catch (err) {
      setMessage({ type: "error", text: err.message || t("Failed to change password.") });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60">
      <div className="bg-card border border-border rounded-lg shadow-2xl p-6 min-w-80 w-full max-w-sm">
        <h2 className="text-lg font-semibold mb-6">{t("Change password")}</h2>
        <form
          onSubmit={handleSubmit}
          method="post"
          action={getWebAuthFormAction()}
          autoComplete="on"
          id="transrewrt-change-password-form"
          className="flex flex-col gap-4"
          style={{ position: "relative" }}
        >
          <HiddenUsernameForPasswordManager username={username} id="change-password-modal-username" />
          {message.text && (
            <div
              className={cn(
                "rounded px-3 py-2 text-sm",
                message.type === "success"
                  ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200"
                  : "bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200",
              )}
            >
              {message.text}
            </div>
          )}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="change-pwd-new">{t("New password")}</Label>
            <PasswordInput
              id="change-pwd-new"
              name="new_password"
              value={newPassword}
              onChange={setNewPassword}
              placeholder={t("New password")}
              disabled={loading}
              autoComplete="new-password"
              showPasswordAriaLabel={t("Show password")}
              hidePasswordAriaLabel={t("Hide password")}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="change-pwd-confirm">{t("Confirm password")}</Label>
            <PasswordInput
              id="change-pwd-confirm"
              name="new_password_confirm"
              value={confirmPassword}
              onChange={setConfirmPassword}
              placeholder={t("Confirm new password")}
              disabled={loading}
              autoComplete="new-password"
              showPasswordAriaLabel={t("Show password")}
              hidePasswordAriaLabel={t("Hide password")}
            />
          </div>
          <div className="flex justify-end gap-2 mt-2">
            <Button type="button" variant="outline" onClick={onClose} disabled={loading}>
              {t("Cancel")}
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? t("Changing…") : t("Change password")}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

ChangePasswordModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  username: PropTypes.string,
};

export default ChangePasswordModal;
