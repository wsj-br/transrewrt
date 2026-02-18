import React, { useState } from "react";
import { Button, Label, Input, Text, Checkbox } from "@fluentui/react-components";
import { Lock, LogOut } from "lucide-react";
import webAPI from "../utils/webApiClient";
import { useAppContext } from "../contexts/AppContext";

const gridRow = {
  display: "grid",
  gridTemplateColumns: "140px 1fr",
  alignItems: "center",
  gap: "12px",
  marginBottom: "12px",
  maxWidth: "400px",
};

const SettingsDialogAuthTab = () => {
  const { handleWebLogout } = useAppContext();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState({ type: null, text: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: null, text: "" });
    if (!showPassword && newPassword !== confirmPassword) {
      setMessage({ type: "error", text: "New password and confirmation do not match." });
      return;
    }
    if (newPassword.length < 1) {
      setMessage({ type: "error", text: "New password is required." });
      return;
    }
    setLoading(true);
    try {
      await webAPI.changePassword(newPassword);
      setMessage({ type: "success", text: "Password changed successfully." });
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      setMessage({ type: "error", text: err.message || "Failed to change password." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tab-content">
      <div className="section">
        <Text as="h3" size={500} weight="semibold" style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: 0, marginBottom: "16px" }}>
          <Lock size={20} />
          Change password
        </Text>
        <form onSubmit={handleSubmit}>
          <div style={gridRow}>
            <Label htmlFor="auth-new">New password</Label>
            <Input
              id="auth-new"
              type={showPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New password"
              disabled={loading}
              autoComplete="new-password"
            />
          </div>
          {!showPassword && (
            <div style={gridRow}>
              <Label htmlFor="auth-confirm">Confirm password</Label>
              <Input
                id="auth-confirm"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                disabled={loading}
                autoComplete="new-password"
              />
            </div>
          )}
          <div style={{ ...gridRow, gridTemplateColumns: "140px 1fr", alignItems: "center" }}>
            <span style={{ gridColumn: 1 }} />
            <Checkbox
              id="auth-show-password"
              label="Show password"
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
            {loading ? "Changing…" : "Change password"}
          </Button>
        </form>
      </div>
      <div className="section" style={{ marginTop: "24px" }}>
        <Text as="h3" size={500} weight="semibold" style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: 0, marginBottom: "16px" }}>
          <LogOut size={20} />
          Session
        </Text>
        <Button
          appearance="secondary"
          onClick={async () => {
            try {
              await handleWebLogout();
            } catch (err) {
              setMessage({ type: "error", text: err.message || "Logout failed." });
            }
          }}
        >
          Log out
        </Button>
      </div>
    </div>
  );
};

export default SettingsDialogAuthTab;
