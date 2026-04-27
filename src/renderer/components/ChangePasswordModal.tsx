import { useState } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles, tokens, Button, Field } from "@fluentui/react-components";
import PropTypes from "prop-types";
import webAPI from "../utils/api/webApiClient";
import { getWebAuthFormAction } from "../utils/misc/webAuthForms";
import HiddenUsernameForPasswordManager from "./HiddenUsernameForPasswordManager";
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
    margin: "0 0 32px 0",
    fontSize: "18px",
    fontWeight: 600,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginBottom: "20px",
  },
  message: {
    fontSize: "14px",
    padding: "8px 12px",
    borderRadius: "4px",
    marginBottom: "8px",
  },
  messageSuccess: {
    backgroundColor: "#d4edda",
    color: "#155724",
  },
  messageError: {
    backgroundColor: "#f8d7da",
    color: "#721c24",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "8px",
    marginTop: "24px",
  },
});

const ChangePasswordModal = ({ onClose, username = "" }) => {
  const styles = useStyles();
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
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (err) {
      setMessage({ type: "error", text: err.message || t("Failed to change password.") });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>{t("Change password")}</h2>
        <form
          onSubmit={handleSubmit}
          className={styles.form}
          method="post"
          action={getWebAuthFormAction()}
          autoComplete="on"
          id="transrewrt-change-password-form"
          style={{ position: "relative" }}
        >
          <HiddenUsernameForPasswordManager username={username} id="change-password-modal-username" />
          {message.text && (
            <div
              className={
                message.type === "success"
                  ? `${styles.message} ${styles.messageSuccess}`
                  : `${styles.message} ${styles.messageError}`
              }
            >
              {message.text}
            </div>
          )}
          <Field label={t("New password")}>
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
          </Field>
          <Field label={t("Confirm password")}>
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
          </Field>
          <div className={styles.actions}>
            <Button type="button" appearance="secondary" onClick={onClose} disabled={loading}>
              {t("Cancel")}
            </Button>
            <Button type="submit" appearance="primary" disabled={loading}>
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
