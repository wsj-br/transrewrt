import { useState, useEffect, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Users, Plus, Pencil, KeyRound, Trash2, LogOut, ClockFading, Search, RectangleEllipsis } from "lucide-react";
import webAPI from "../utils/api/webApiClient";
import { formatDateTime, formatRelativeTime } from "../utils/misc/formatUtils";
import ConfirmModal from "./ConfirmModal";
import PasswordInput from "./PasswordInput";
import { useAppContext } from "../contexts/AppContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  settingsUsersTable as tbl,
  settingsUsersTableCard as userCard,
} from "./settings/settingsTableClasses";
import { settingsTabContent } from "./settings/settingsLayoutClasses";

/** Seconds values for session timeout options. */
const SESSION_TIMEOUT_SECONDS = [3600, 21600, 43200, 86400, 172800, 345600, 604800];
const DEFAULT_SESSION_TIMEOUT = 604800;

function secondsToClosestOption(seconds) {
  const num = Number(seconds) || DEFAULT_SESSION_TIMEOUT;
  let closestSec = SESSION_TIMEOUT_SECONDS[SESSION_TIMEOUT_SECONDS.length - 1];
  let minDiff = Infinity;
  for (const sec of SESSION_TIMEOUT_SECONDS) {
    const diff = Math.abs(sec - num);
    if (diff < minDiff) { minDiff = diff; closestSec = sec; }
  }
  return String(closestSec);
}

const PASSWORD_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateRandomPassword(length = 10) {
  let result = "";
  for (let i = 0; i < length; i++) result += PASSWORD_CHARS.charAt(Math.floor(Math.random() * PASSWORD_CHARS.length));
  return result;
}

const SettingsUsersTab = () => {
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

  useEffect(() => {
    if (currentUser) { setError(""); loadUsers(); }
  }, [loadUsers, currentUser]);

  const filtered = users.filter(
    (u) => !search || (u.username || "").toLowerCase().includes(search.trim().toLowerCase()),
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
  const sessionTimeoutValue = useMemo(() => secondsToClosestOption(sessionTimeoutSeconds), [sessionTimeoutSeconds]);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!addUsername.trim()) { setError(t("Username is required")); return; }
    if (!addPassword) { setError(t("Password is required")); return; }
    setSubmitting(true);
    setError("");
    try {
      await webAPI.createUser({ username: addUsername.trim(), password: addPassword, role: addAdmin ? "admin" : "user", must_change_password: addMustChange ? 1 : 0 });
      setAddOpen(false);
      setAddUsername(""); setAddPassword(""); setAddAdmin(false); setAddMustChange(true);
      await loadUsers();
    } catch (err) {
      setError(err.message || t("Failed to create user"));
    } finally { setSubmitting(false); }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editUser || !editUsername.trim()) { setError(t("Username is required")); return; }
    setSubmitting(true);
    setError("");
    try {
      await webAPI.updateUser(editUser.id, { username: editUsername.trim(), role: editUser.username === "admin" ? "admin" : editRole, must_change_password: editMustChange ? 1 : 0 });
      if (editPassword) await webAPI.setUserPassword(editUser.id, editPassword);
      setEditUser(null); setEditPassword("");
      await loadUsers();
    } catch (err) {
      setError(err.message || t("Failed to update user"));
    } finally { setSubmitting(false); }
  };

  const handleSetPassword = async (e) => {
    e.preventDefault();
    if (!passwordUser) return;
    if (!newPassword) { setError(t("New password is required")); return; }
    setSubmitting(true);
    setError("");
    try {
      await webAPI.setUserPassword(passwordUser.id, newPassword);
      setPasswordUser(null); setNewPassword("");
      await loadUsers();
    } catch (err) {
      setError(err.message || t("Failed to set password"));
    } finally { setSubmitting(false); }
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
    } finally { setSubmitting(false); }
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
    } finally { setSubmitting(false); }
  };

  const openEdit = (u) => {
    setEditUser(u); setEditUsername(u.username); setEditRole(u.role || "user");
    setEditMustChange(!!u.must_change_password); setEditPassword(""); setShowEditPassword(false); setError("");
  };

  return (
    <div className={settingsTabContent}>
      <div className="flex items-center gap-2 mb-4">
        <Users size={20} />
        <h3 className="text-base font-semibold m-0">{t("User Management")}</h3>
      </div>
      <p className="text-sm text-muted-foreground mt-3 mb-0">{t("Manage application users and permissions.")}</p>
      <div className="mt-9">
        <div className="flex flex-col gap-3 mb-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="relative w-full min-w-0 sm:min-w-[300px] sm:max-w-[400px] sm:flex-1">
            <Search size={16} className="absolute start-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            <Input
              placeholder={t("Search users…")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ps-8"
            />
          </div>
          <div className="flex min-w-0 w-full flex-wrap items-center gap-3 sm:w-auto sm:shrink-0 sm:justify-end">
            <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2 sm:flex-initial">
              <ClockFading size={16} className="shrink-0" />
              <Label htmlFor="users-session-timeout" title={t("Changes apply only to new logins")} className="shrink-0 whitespace-nowrap text-sm">
                {t("Session Timeout")}
              </Label>
              <Select
                value={sessionTimeoutValue}
                onValueChange={(v) => {
                  const seconds = parseInt(v, 10);
                  if (!Number.isNaN(seconds)) setSetting("web_session_timeout", seconds);
                }}
              >
                <SelectTrigger id="users-session-timeout" className="min-w-[100px] w-fit max-w-full" title={t("Changes apply only to new logins")}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sessionTimeoutOptions.map((opt) => (
                    <SelectItem key={opt.seconds} value={String(opt.seconds)}>{opt.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button
              size="sm"
              className="shrink-0"
              onClick={() => { setAddOpen(true); setAddUsername(""); setAddPassword(""); setAddAdmin(false); setAddMustChange(true); setError(""); }}
            >
              <Plus size={16} />{t("Add User")}
            </Button>
          </div>
        </div>
        {error && <div className="mb-3 text-red-400 text-sm">{error}</div>}
        {loading ? (
          <p className="text-sm">{t("Loading…")}</p>
        ) : (
          <>
            <div className={userCard.list}>
              {filtered.length === 0 ? (
                <p className={userCard.empty}>
                  {users.length === 0
                    ? t("(no information available)")
                    : t("No users match your search.")}
                </p>
              ) : (
                filtered.map((u) => (
                  <div key={u.id} className={userCard.card}>
                    <div className={userCard.headerRow}>
                      <span className={userCard.username}>{u.username}</span>
                      {u.role === "admin" ? (
                        <Badge variant="secondary" className="shrink-0 bg-indigo-500/20 text-indigo-300 border-indigo-500/30">{t("Admin")}</Badge>
                      ) : (
                        <Badge variant="secondary" className="shrink-0 text-muted-foreground">{t("User")}</Badge>
                      )}
                    </div>
                    <div className={userCard.fieldRow}>
                      <span className={userCard.fieldLabel}>{t("Last Login")}: </span>
                      {formatDateTime(u.last_login, locale)}
                      <span className="text-muted-foreground"> ({formatRelativeTime(u.last_login, locale)})</span>
                    </div>
                    <div className={userCard.fieldRow}>
                      <span className={userCard.fieldLabel}>{t("Last Update")}: </span>
                      {formatDateTime(u.last_update, locale)}
                      <span className="text-muted-foreground"> ({formatRelativeTime(u.last_update, locale)})</span>
                    </div>
                    <div className={userCard.fieldRow}>
                      <span className={userCard.fieldLabel}>{t("Created")}: </span>
                      {formatDateTime(u.created_at, locale)}
                      <span className="text-muted-foreground"> ({formatRelativeTime(u.created_at, locale)})</span>
                    </div>
                    {u.must_change_password ? (
                      <div className={`${userCard.fieldRow} text-orange-400 font-medium`}>{t("Must Change Password")}</div>
                    ) : null}
                    <div className={userCard.actions}>
                      <button type="button" className="p-1 text-muted-foreground hover:text-foreground me-1 rounded" onClick={() => openEdit(u)} title={t("Edit user")} aria-label={t("Edit user")}><Pencil size={16} /></button>
                      <button type="button" className="p-1 text-muted-foreground hover:text-foreground me-1 rounded" onClick={() => { setPasswordUser(u); setNewPassword(""); setError(""); }} title={t("Change password")} aria-label={t("Change password")}><KeyRound size={16} /></button>
                      <button type="button" className="p-1 text-muted-foreground hover:text-foreground me-1 rounded" onClick={() => { setRevokeUser(u); setError(""); }} title={t("Revoke all sessions")} aria-label={t("Revoke all sessions")}><LogOut size={16} /></button>
                      {(u.role !== "admin" || adminCount > 1) && (
                        <button type="button" className="p-1 text-muted-foreground hover:text-red-400 me-1 rounded" onClick={() => { setDeleteUser(u); setError(""); }} title={t("Delete user")} aria-label={t("Delete user")}><Trash2 size={16} /></button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="hidden sm:block">
              <div className={tbl.wrap}>
                <table className={tbl.table}>
                  <thead>
                    <tr>
                      <th className={tbl.th}>{t("Username")}</th>
                      <th className={tbl.th}>{t("Type")}</th>
                      <th className={tbl.th}>{t("Last Login")}</th>
                      <th className={tbl.th}>{t("Last Update")}</th>
                      <th className={tbl.th}>{t("Created")}</th>
                      <th className={tbl.th}>{t("Status")}</th>
                      <th className={tbl.th}>{t("Actions")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((u) => (
                      <tr key={u.id} className={tbl.tr}>
                        <td className={tbl.td}>{u.username}</td>
                        <td className={tbl.td}>
                          {u.role === "admin" ? (
                            <Badge variant="secondary" className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30">{t("Admin")}</Badge>
                          ) : (
                            <Badge variant="secondary" className="text-muted-foreground">{t("User")}</Badge>
                          )}
                        </td>
                        <td className={tbl.td}>
                          {formatDateTime(u.last_login, locale)}
                          <br />
                          <span className="text-xs text-muted-foreground">{formatRelativeTime(u.last_login, locale)}</span>
                        </td>
                        <td className={tbl.td}>
                          {formatDateTime(u.last_update, locale)}
                          <br />
                          <span className="text-xs text-muted-foreground">{formatRelativeTime(u.last_update, locale)}</span>
                        </td>
                        <td className={tbl.td}>
                          {formatDateTime(u.created_at, locale)}
                          <br />
                          <span className="text-xs text-muted-foreground">{formatRelativeTime(u.created_at, locale)}</span>
                        </td>
                        <td className={tbl.td}>
                          {u.must_change_password ? (
                            <span className="text-orange-400 font-medium">{t("Must Change Password")}</span>
                          ) : "-"}
                        </td>
                        <td className={`${tbl.td} whitespace-nowrap`}>
                          <button type="button" className="p-1 text-muted-foreground hover:text-foreground me-1 rounded" onClick={() => openEdit(u)} title={t("Edit user")} aria-label={t("Edit user")}><Pencil size={16} /></button>
                          <button type="button" className="p-1 text-muted-foreground hover:text-foreground me-1 rounded" onClick={() => { setPasswordUser(u); setNewPassword(""); setError(""); }} title={t("Change password")} aria-label={t("Change password")}><KeyRound size={16} /></button>
                          <button type="button" className="p-1 text-muted-foreground hover:text-foreground me-1 rounded" onClick={() => { setRevokeUser(u); setError(""); }} title={t("Revoke all sessions")} aria-label={t("Revoke all sessions")}><LogOut size={16} /></button>
                          {(u.role !== "admin" || adminCount > 1) && (
                            <button type="button" className="p-1 text-muted-foreground hover:text-red-400 me-1 rounded" onClick={() => { setDeleteUser(u); setError(""); }} title={t("Delete user")} aria-label={t("Delete user")}><Trash2 size={16} /></button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>

      {addOpen && (
        <ConfirmModal
          title={t("Add User")}
          confirmLabel={t("Create")}
          onCancel={() => { setAddOpen(false); setAddUsername(""); setAddPassword(""); setAddAdmin(false); setAddMustChange(true); setError(""); }}
          onConfirm={handleAdd}
          hideConfirm={false}
          customBody={
            <form onSubmit={handleAdd} className="flex flex-col gap-3 min-w-[320px]">
              <p className="m-0 mb-4 text-sm text-muted-foreground leading-snug">{t("Create a new user account. Set a password or generate one.")}</p>
              <div>
                <Label htmlFor="add-username" className="block mb-1.5">{t("Username")}</Label>
                <div className="flex items-center gap-2">
                  <Input id="add-username" value={addUsername} onChange={(e) => setAddUsername(e.target.value)} placeholder={t("Username")} disabled={submitting} className="flex-1 min-w-0" />
                  <Button type="button" variant="outline" size="sm" style={{ visibility: "hidden" }}><RectangleEllipsis size={14} />{t("Generate")}</Button>
                </div>
              </div>
              <div>
                <Label htmlFor="add-password" className="block mb-1.5">{t("Password")}</Label>
                <div className="flex items-center gap-2">
                  <PasswordInput id="add-password" value={addPassword} onChange={setAddPassword} placeholder={t("Password")} disabled={submitting} style={{ flex: 1, minWidth: 0 }} showPassword={showAddPassword} onShowPasswordChange={setShowAddPassword} showPasswordAriaLabel={t("Show password")} hidePasswordAriaLabel={t("Hide password")} />
                  <Button type="button" variant="outline" size="sm" onClick={() => { setAddPassword(generateRandomPassword(10)); setShowAddPassword(true); }} disabled={submitting} title={t("Generate a random password")}><RectangleEllipsis size={14} />{t("Generate")}</Button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="add-admin" checked={addAdmin} onCheckedChange={(c) => setAddAdmin(!!c)} disabled={submitting} />
                <Label htmlFor="add-admin" className="cursor-pointer m-0">{t("Admin user")}</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="add-must-change" checked={addMustChange} onCheckedChange={(c) => setAddMustChange(!!c)} disabled={submitting} />
                <Label htmlFor="add-must-change" className="cursor-pointer m-0">{t("Must change password on next login")}</Label>
              </div>
            </form>
          }
        />
      )}

      {editUser && (
        <ConfirmModal
          title={t("Edit User")}
          confirmLabel={t("Save")}
          onCancel={() => { setEditUser(null); setEditPassword(""); setError(""); }}
          onConfirm={handleUpdate}
          hideConfirm={false}
          customBody={
            <form onSubmit={handleUpdate} className="flex flex-col gap-3 min-w-[320px]">
              <p className="m-0 mb-4 text-sm text-muted-foreground leading-snug">{t("Edit user account. Optionally set a new password or generate one.")}</p>
              <div>
                <Label htmlFor="edit-username" className="block mb-1.5">{t("Username")}</Label>
                <div className="flex items-center gap-2">
                  <Input id="edit-username" value={editUsername} onChange={(e) => setEditUsername(e.target.value)} placeholder={t("Username")} disabled={submitting} className="flex-1 min-w-0" />
                  <Button type="button" variant="outline" size="sm" style={{ visibility: "hidden" }}><RectangleEllipsis size={14} />{t("Generate")}</Button>
                </div>
              </div>
              <div>
                <Label htmlFor="edit-password" className="block mb-1.5">{t("New password (leave blank to keep current)")}</Label>
                <div className="flex items-center gap-2">
                  <PasswordInput id="edit-password" value={editPassword} onChange={setEditPassword} placeholder={t("New password")} disabled={submitting} style={{ flex: 1, minWidth: 0 }} showPassword={showEditPassword} onShowPasswordChange={setShowEditPassword} showPasswordAriaLabel={t("Show password")} hidePasswordAriaLabel={t("Hide password")} />
                  <Button type="button" variant="outline" size="sm" onClick={() => { setEditPassword(generateRandomPassword(10)); setShowEditPassword(true); }} disabled={submitting} title={t("Generate a random password")}><RectangleEllipsis size={14} />{t("Generate")}</Button>
                </div>
              </div>
              {editUser.username !== "admin" && (
                <div className="flex items-center gap-2">
                  <Checkbox id="edit-admin" checked={editRole === "admin"} onCheckedChange={(c) => setEditRole(c ? "admin" : "user")} disabled={submitting} />
                  <Label htmlFor="edit-admin" className="cursor-pointer m-0">{t("Admin user")}</Label>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Checkbox id="edit-must-change" checked={editMustChange} onCheckedChange={(c) => setEditMustChange(!!c)} disabled={submitting} />
                <Label htmlFor="edit-must-change" className="cursor-pointer m-0">{t("Must change password on next login")}</Label>
              </div>
            </form>
          }
        />
      )}

      {passwordUser && (
        <ConfirmModal
          title={t("Set password")}
          confirmLabel={t("Set password")}
          onCancel={() => { setPasswordUser(null); setNewPassword(""); setError(""); }}
          onConfirm={handleSetPassword}
          hideConfirm={false}
          customBody={
            <form onSubmit={handleSetPassword} className="flex flex-col gap-3 min-w-[320px]">
              <p className="text-sm text-muted-foreground mb-2">{t("New password for user \"{{name}}\":", { name: passwordUser.username })}</p>
              <PasswordInput id="new-pwd" label={t("New password")} value={newPassword} onChange={setNewPassword} placeholder={t("New password")} disabled={submitting} showPasswordAriaLabel={t("Show password")} hidePasswordAriaLabel={t("Hide password")} />
            </form>
          }
        />
      )}

      {revokeUser && (
        <ConfirmModal
          title={t("Revoke all sessions")}
          message={t('Revoke all sessions for user "{{name}}"?\n\nThey will need to log in again.', { name: revokeUser.username })}
          confirmLabel={t("Revoke")}
          onConfirm={handleRevoke}
          onCancel={() => setRevokeUser(null)}
        />
      )}

      {deleteUser && (
        <ConfirmModal
          title={t("Delete user")}
          message={t('Delete user "{{name}}"?\n\nThis cannot be undone.', { name: deleteUser.username })}
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
