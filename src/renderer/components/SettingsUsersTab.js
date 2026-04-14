import { useState, useEffect, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  Input,
  Label,
  Text,
  Badge,
  Checkbox,
  Dropdown,
  Option,
  Field,
  makeStyles,
  mergeClasses,
  tokens,
} from "@fluentui/react-components";
import { Users, Plus, Pencil, KeyRound, Trash2, LogOut, ClockFading, Search, RectangleEllipsis } from "lucide-react";
import webAPI from "../utils/api/webApiClient";
import { formatDateTime, formatRelativeTime } from "../utils/misc/formatUtils";
import ConfirmModal from "./ConfirmModal";
import PasswordInput from "./PasswordInput";
import { useAppContext } from "../contexts/AppContext";

/** Seconds values for session timeout options (used for closest-match only). */
const SESSION_TIMEOUT_SECONDS = [3600, 21600, 43200, 86400, 172800, 345600, 604800];
/** Default session timeout: 7 days (seconds). */
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

const useStyles = makeStyles({
  root: {
    padding: "24px",
  },
  header: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
    marginBottom: "20px",
  },
  titleRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "18px",
  },
  searchRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flex: "1 1 200px",
    minWidth: "200px",
  },
  tableWrap: {
    overflowX: "auto",
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    borderRadius: "8px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "14px",
  },
  th: {
    textAlign: "start",
    padding: "10px 12px",
    fontWeight: 600,
    backgroundColor: tokens.colorNeutralBackground3,
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  td: {
    padding: "10px 12px",
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  tr: {
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  actionsCell: {
    whiteSpace: "nowrap",
  },
  actionBtn: {
    minWidth: "32px",
    padding: "4px 8px",
    marginInlineEnd: "4px",
    color: tokens.colorNeutralForeground1,
  },
  toolsRow: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    marginBottom: "8px",
  },
  searchInput: {
    minWidth: "300px",
    maxWidth: "400px",
  },
  toolsRowRight: {
    display: "flex",
    alignItems: "center",
    gap: "48px",
    flexShrink: 0,
  },
  timeoutBlock: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  badgeAdmin: {
    backgroundColor: "rgba(99, 102, 241, 0.2)",
    color: tokens.colorPaletteBlueForeground1,
  },
  badgeUser: {
    backgroundColor: tokens.colorNeutralBackground5,
    color: tokens.colorNeutralForeground2,
  },
  statusMustChange: {
    color: tokens.colorPaletteOrangeForeground1,
    fontWeight: 500,
  },
  modalForm: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    minWidth: "320px",
  },
  formInstruction: {
    margin: "0 0 16px 0",
    fontSize: "14px",
    color: tokens.colorNeutralForeground2,
    lineHeight: 1.4,
  },
  formFieldBlock: {
    marginBottom: "4px",
  },
  formLabel: {
    display: "block",
    marginBottom: "6px",
  },
});

const PASSWORD_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateRandomPassword(length = 10) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += PASSWORD_CHARS.charAt(Math.floor(Math.random() * PASSWORD_CHARS.length));
  }
  return result;
}

const SettingsUsersTab = () => {
  const styles = useStyles();
  const { t, i18n } = useTranslation();
  const locale = i18n.language || "en-GB";
  const { settings, setSetting, currentUser } = useAppContext();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [addOpen, setAddOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [passwordUser, setPasswordUser] = useState(null);
  const [revokeUser, setRevokeUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [addUsername, setAddUsername] = useState("");
  const [addPassword, setAddPassword] = useState("");
  const [addAdmin, setAddAdmin] = useState(false);
  const [addMustChange, setAddMustChange] = useState(true);
  const [showAddPassword, setShowAddPassword] = useState(false);
  const [editUsername, setEditUsername] = useState("");
  const [editRole, setEditRole] = useState("user");
  const [editMustChange, setEditMustChange] = useState(false);
  const [editPassword, setEditPassword] = useState("");
  const [showEditPassword, setShowEditPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const loadUsers = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const list = await webAPI.getUsers();
      setUsers(Array.isArray(list) ? list : []);
    } catch (err) {
      setError(err.message || t("Failed to load users"));
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }, [t]);

  // Refetch when currentUser changes (e.g. after logging in as another user following self-delete)
  useEffect(() => {
    if (currentUser) {
      setError("");
      loadUsers();
    }
  }, [loadUsers, currentUser]);

  const filtered = users.filter(
    (u) =>
      !search ||
      (u.username || "").toLowerCase().includes(search.trim().toLowerCase()),
  );
  const adminCount = users.filter((u) => u.role === "admin").length;

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

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!addUsername.trim()) {
      setError(t("Username is required"));
      return;
    }
    if (!addPassword) {
      setError(t("Password is required"));
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      await webAPI.createUser({
        username: addUsername.trim(),
        password: addPassword,
        role: addAdmin ? "admin" : "user",
        must_change_password: addMustChange ? 1 : 0,
      });
      setAddOpen(false);
      setAddUsername("");
      setAddPassword("");
      setAddAdmin(false);
      setAddMustChange(true);
      await loadUsers();
    } catch (err) {
      setError(err.message || t("Failed to create user"));
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editUser) return;
    if (!editUsername.trim()) {
      setError(t("Username is required"));
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      await webAPI.updateUser(editUser.id, {
        username: editUsername.trim(),
        role: editUser.username === "admin" ? "admin" : editRole,
        must_change_password: editMustChange ? 1 : 0,
      });
      if (editPassword) {
        await webAPI.setUserPassword(editUser.id, editPassword);
      }
      setEditUser(null);
      setEditPassword("");
      await loadUsers();
    } catch (err) {
      setError(err.message || t("Failed to update user"));
    } finally {
      setSubmitting(false);
    }
  };

  const handleSetPassword = async (e) => {
    e.preventDefault();
    if (!passwordUser) return;
    if (!newPassword) {
      setError(t("New password is required"));
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      await webAPI.setUserPassword(passwordUser.id, newPassword);
      setPasswordUser(null);
      setNewPassword("");
      await loadUsers();
    } catch (err) {
      setError(err.message || t("Failed to set password"));
    } finally {
      setSubmitting(false);
    }
  };

  const handleRevoke = async () => {
    if (!revokeUser) return;
    setSubmitting(true);
    setError("");
    try {
      await webAPI.revokeUserSessions(revokeUser.id);
      setRevokeUser(null);
      await loadUsers();
    } catch (err) {
      setError(err.message || t("Failed to revoke sessions"));
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteUser) return;
    setSubmitting(true);
    setError("");
    try {
      await webAPI.deleteUser(deleteUser.id);
      setDeleteUser(null);
      await loadUsers();
    } catch (err) {
      setError(err.message || t("Failed to delete user"));
    } finally {
      setSubmitting(false);
    }
  };

  const openEdit = (u) => {
    setEditUser(u);
    setEditUsername(u.username);
    setEditRole(u.role || "user");
    setEditMustChange(!!u.must_change_password);
    setEditPassword("");
    setShowEditPassword(false);
    setError("");
  };

  return (
    <div className={styles.root}>
      <div className={styles.titleRow}>
        <Users size={22} />
        <Text as="h3" size={500} weight="semibold" style={{ margin: 0 }}>
          {t("User Management")}
        </Text>
      </div>
      <Text as="p" size={300} style={{ marginTop: "12px", marginBottom: 0, color: tokens.colorNeutralForeground2 }}>
        {t("Manage application users and permissions.")}
      </Text>
      <div style={{ marginTop: "36px" }}>
        <div className={styles.toolsRow}>
          <Input
            placeholder={t("Search users…")}
            value={search}
            onChange={(_, data) => setSearch(typeof data?.value === "string" ? data.value : "")}
            className={styles.searchInput}
            contentAfter={<Search size={18} />}
            appearance="outline"
          />
          <div className={styles.toolsRowRight}>
            <div className={styles.timeoutBlock}>
              <ClockFading size={18} />
              <Label
                htmlFor="users-session-timeout"
                title={t("Changes apply only to new logins")}
                style={{ whiteSpace: "nowrap" }}
              >
                {t("Session Timeout")}
              </Label>
              <Dropdown
                id="users-session-timeout"
                appearance="outline"
                value={sessionTimeoutOptions.find((o) => String(o.seconds) === sessionTimeoutValue)?.label ?? t("7 days")}
                selectedOptions={[sessionTimeoutValue]}
                onOptionSelect={(e, data) => {
                  const seconds = data.optionValue ? parseInt(String(data.optionValue), 10) : NaN;
                  if (!Number.isNaN(seconds)) setSetting("web_session_timeout", seconds);
                }}
                style={{ width: "fit-content", minWidth: "100px" }}
                title={t("Changes apply only to new logins")}
              >
                {sessionTimeoutOptions.map((opt) => (
                  <Option key={opt.seconds} value={String(opt.seconds)}>
                    {opt.label}
                  </Option>
                ))}
              </Dropdown>
            </div>
            <Button
              appearance="primary"
              icon={<Plus size={18} />}
              onClick={() => {
                setAddOpen(true);
                setAddUsername("");
                setAddPassword("");
                setAddAdmin(false);
                setAddMustChange(true);
                setError("");
              }}
            >
              {t("Add User")}
            </Button>
          </div>
        </div>
        {error && (
          <div style={{ marginBottom: "12px", color: tokens.colorStatusDangerForeground1 }}>
            {error}
          </div>
        )}
      {loading ? (
        <p>{t("Loading…")}</p>
      ) : (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>{t("Username")}</th>
                <th className={styles.th}>{t("Type")}</th>
                <th className={styles.th}>{t("Last Login")}</th>
                <th className={styles.th}>{t("Last Update")}</th>
                <th className={styles.th}>{t("Created")}</th>
                <th className={styles.th}>{t("Status")}</th>
                <th className={styles.th}>{t("Actions")}</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((u) => (
                <tr key={u.id} className={styles.tr}>
                  <td className={styles.td}>{u.username}</td>
                  <td className={styles.td}>
                    <Badge
                      appearance="filled"
                      className={u.role === "admin" ? styles.badgeAdmin : styles.badgeUser}
                    >
                      {u.role === "admin" ? t("Admin") : t("User")}
                    </Badge>
                  </td>
                  <td className={styles.td}>
                    {formatDateTime(u.last_login, locale)}
                    <br />
                    <Text as="span" size={100} style={{ color: tokens.colorNeutralForeground3 }}>
                      {formatRelativeTime(u.last_login, locale)}
                    </Text>
                  </td>
                  <td className={styles.td}>
                    {formatDateTime(u.last_update, locale)}
                    <br />
                    <Text as="span" size={100} style={{ color: tokens.colorNeutralForeground3 }}>
                      {formatRelativeTime(u.last_update, locale)}
                    </Text>
                  </td>
                  <td className={styles.td}>
                    {formatDateTime(u.created_at, locale)}
                    <br />
                    <Text as="span" size={100} style={{ color: tokens.colorNeutralForeground3 }}>
                      {formatRelativeTime(u.created_at, locale)}
                    </Text>
                  </td>
                  <td className={styles.td}>
                    {u.must_change_password ? (
                      <span className={styles.statusMustChange}>
                        {t("Must Change Password")}
                      </span>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className={mergeClasses(styles.td, styles.actionsCell)}>
                    <Button
                      size="small"
                      appearance="subtle"
                      icon={<Pencil size={18} />}
                      className={styles.actionBtn}
                      onClick={() => openEdit(u)}
                      title={t("Edit user")}
                      aria-label={t("Edit user")}
                    />
                    <Button
                      size="small"
                      appearance="subtle"
                      icon={<KeyRound size={18} />}
                      className={styles.actionBtn}
                      onClick={() => {
                        setPasswordUser(u);
                        setNewPassword("");
                        setError("");
                      }}
                      title={t("Change password")}
                      aria-label={t("Change password")}
                    />
                    <Button
                      size="small"
                      appearance="subtle"
                      icon={<LogOut size={18} />}
                      className={styles.actionBtn}
                      onClick={() => {
                        setRevokeUser(u);
                        setError("");
                      }}
                      title={t("Revoke all sessions")}
                      aria-label={t("Revoke all sessions")}
                    />
                    {(u.role !== "admin" || adminCount > 1) && (
                      <Button
                        size="small"
                        appearance="subtle"
                        icon={<Trash2 size={18} />}
                        className={styles.actionBtn}
                        onClick={() => {
                          setDeleteUser(u);
                          setError("");
                        }}
                        title={t("Delete user")}
                        aria-label={t("Delete user")}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      </div>

      {addOpen && (
        <ConfirmModal
          title={t("Add User")}
          confirmLabel={t("Create")}
          onCancel={() => {
            setAddOpen(false);
            setAddUsername("");
            setAddPassword("");
            setAddAdmin(false);
            setAddMustChange(true);
            setError("");
          }}
          onConfirm={handleAdd}
          hideConfirm={false}
          customBody={
            <form onSubmit={handleAdd} className={styles.modalForm}>
              <p className={styles.formInstruction}>
                {t("Create a new user account. Set a password or generate one.")}
              </p>
              <div className={styles.formFieldBlock}>
                <Field label={t("Username")}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Input
                      id="add-username"
                      value={addUsername}
                      onChange={(_, data) => setAddUsername(typeof data?.value === "string" ? data.value : "")}
                      placeholder={t("Username")}
                      disabled={submitting}
                      appearance="outline"
                      style={{ flex: 1, minWidth: 0 }}
                    />
                    <Button
                      appearance="secondary"
                      icon={<RectangleEllipsis size={16} />}
                      style={{ visibility: "hidden" }}
                    >
                      {t("Generate")}
                    </Button>
                  </div>
                </Field>
              </div>
              <div className={styles.formFieldBlock}>
                <Field label={t("Password")}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <PasswordInput
                      id="add-password"
                      value={addPassword}
                      onChange={setAddPassword}
                      placeholder={t("Password")}
                      disabled={submitting}
                      style={{ flex: 1, minWidth: 0 }}
                      showPassword={showAddPassword}
                      onShowPasswordChange={setShowAddPassword}
                      showPasswordAriaLabel={t("Show password")}
                      hidePasswordAriaLabel={t("Hide password")}
                    />
                    <Button
                      type="button"
                      appearance="secondary"
                      icon={<RectangleEllipsis size={16} />}
                      onClick={() => {
                        setAddPassword(generateRandomPassword(10));
                        setShowAddPassword(true);
                      }}
                      disabled={submitting}
                      title={t("Generate a random password")}
                    >
                      {t("Generate")}
                    </Button>
                  </div>
                </Field>
              </div>
              <div className={styles.formFieldBlock}>
                <Checkbox
                  id="add-admin"
                  label={t("Admin user")}
                  checked={addAdmin}
                  onChange={(_, data) => setAddAdmin(!!data.checked)}
                  disabled={submitting}
                />
              </div>
              <div className={styles.formFieldBlock}>
                <Checkbox
                  id="add-must-change"
                  label={t("Must change password on next login")}
                  checked={addMustChange}
                  onChange={(_, data) => setAddMustChange(!!data.checked)}
                  disabled={submitting}
                />
              </div>
            </form>
          }
        />
      )}

      {editUser && (
        <ConfirmModal
          title={t("Edit User")}
          confirmLabel={t("Save")}
          onCancel={() => {
            setEditUser(null);
            setEditPassword("");
            setError("");
          }}
          onConfirm={handleUpdate}
          hideConfirm={false}
          customBody={
            <form onSubmit={handleUpdate} className={styles.modalForm}>
              <p className={styles.formInstruction}>
                {t("Edit user account. Optionally set a new password or generate one.")}
              </p>
              <div className={styles.formFieldBlock}>
                <Field label={t("Username")}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Input
                      id="edit-username"
                      value={editUsername}
                      onChange={(_, data) => setEditUsername(typeof data?.value === "string" ? data.value : "")}
                      placeholder={t("Username")}
                      disabled={submitting}
                      appearance="outline"
                      style={{ flex: 1, minWidth: 0 }}
                    />
                    <Button
                      appearance="secondary"
                      icon={<RectangleEllipsis size={16} />}
                      style={{ visibility: "hidden" }}
                    >
                      {t("Generate")}
                    </Button>
                  </div>
                </Field>
              </div>
              <div className={styles.formFieldBlock}>
                <Field label={t("New password (leave blank to keep current)")}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <PasswordInput
                      id="edit-password"
                      value={editPassword}
                      onChange={setEditPassword}
                      placeholder={t("New password")}
                      disabled={submitting}
                      style={{ flex: 1, minWidth: 0 }}
                      showPassword={showEditPassword}
                      onShowPasswordChange={setShowEditPassword}
                      showPasswordAriaLabel={t("Show password")}
                      hidePasswordAriaLabel={t("Hide password")}
                    />
                    <Button
                      type="button"
                      appearance="secondary"
                      icon={<RectangleEllipsis size={16} />}
                      onClick={() => {
                        setEditPassword(generateRandomPassword(10));
                        setShowEditPassword(true);
                      }}
                      disabled={submitting}
                      title={t("Generate a random password")}
                    >
                      {t("Generate")}
                    </Button>
                  </div>
                </Field>
              </div>
              {editUser.username !== "admin" && (
                <div className={styles.formFieldBlock}>
                  <Checkbox
                    id="edit-admin"
                    label={t("Admin user")}
                    checked={editRole === "admin"}
                    onChange={(_, data) => setEditRole(data.checked ? "admin" : "user")}
                    disabled={submitting}
                  />
                </div>
              )}
              <div className={styles.formFieldBlock}>
                <Checkbox
                  id="edit-must-change"
                  label={t("Must change password on next login")}
                  checked={editMustChange}
                  onChange={(_, data) => setEditMustChange(!!data.checked)}
                  disabled={submitting}
                />
              </div>
            </form>
          }
        />
      )}

      {passwordUser && (
        <ConfirmModal
          title={t("Set password")}
          confirmLabel={t("Set password")}
          onCancel={() => {
            setPasswordUser(null);
            setNewPassword("");
            setError("");
          }}
          onConfirm={handleSetPassword}
          hideConfirm={false}
          customBody={
            <form onSubmit={handleSetPassword} className={styles.modalForm}>
              <Text as="p" size={200}>
                {t("New password for user \"{{name}}\":", { name: passwordUser.username })}
              </Text>
              <div className={styles.formFieldBlock}>
                <PasswordInput
                  id="new-pwd"
                  label={t("New password")}
                  value={newPassword}
                  onChange={setNewPassword}
                  placeholder={t("New password")}
                  disabled={submitting}
                  showPasswordAriaLabel={t("Show password")}
                  hidePasswordAriaLabel={t("Hide password")}
                />
              </div>
            </form>
          }
        />
      )}

      {revokeUser && (
        <ConfirmModal
          title={t("Revoke all sessions")}
          message={t('Revoke all sessions for user "{{name}}"?\n\nThey will need to log in again.', {
            name: revokeUser.username,
          })}
          confirmLabel={t("Revoke")}
          onConfirm={handleRevoke}
          onCancel={() => setRevokeUser(null)}
        />
      )}

      {deleteUser && (
        <ConfirmModal
          title={t("Delete user")}
          message={t('Delete user "{{name}}"?\n\nThis cannot be undone.', {
            name: deleteUser.username,
          })}
          confirmLabel={t("Delete")}
          onConfirm={handleDelete}
          onCancel={() => setDeleteUser(null)}
          danger
        />
      )}
    </div>
  );
};

export default SettingsUsersTab;
