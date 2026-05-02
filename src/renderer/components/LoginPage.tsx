import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Languages, ChevronDown, Check } from "lucide-react";
import PropTypes from "prop-types";
import i18n, { loadLocale } from "../i18n";
import { UI_LANGUAGES, DEFAULT_ADMIN_USERNAME, DEFAULT_ADMIN_PASSWORD } from "../constants";
import { getUILanguageLabel } from "ai-i18n-tools/runtime";
import webAPI from "../utils/api/webApiClient";
import { getWebAuthFormAction } from "../utils/misc/webAuthForms";
import HiddenUsernameForPasswordManager from "./HiddenUsernameForPasswordManager";
import PasswordInput from "./PasswordInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Logo from "../../../images/transrewrt_logo.png";

const UI_LOCALE_STORAGE_KEY = "transrewrt_ui_locale";

function LangSelector({ currentLang, uiLocale, t, onSelect }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label={t("Interface language")}
          className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm min-w-32 hover:bg-accent transition-colors"
        >
          <Languages className="h-4 w-4 shrink-0" />
          <span className="flex-1 text-start">{getUILanguageLabel(currentLang, t)}</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="max-h-80 overflow-y-auto w-48">
        {UI_LANGUAGES.map((lang) => {
          const isSelected = lang.code === uiLocale;
          return (
            <DropdownMenuItem key={lang.code} onClick={() => onSelect(lang.code)}>
              {isSelected ? (
                <Check className="me-2 h-4 w-4" />
              ) : (
                <span className="me-2 h-4 w-4 inline-block" aria-hidden />
              )}
              {getUILanguageLabel(lang, t)}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const LoginPage = ({ onSuccess }) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState("login");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstLoginInfo, setFirstLoginInfo] = useState({ firstLogin: false });

  const uiLocale =
    typeof window !== "undefined"
      ? localStorage.getItem(UI_LOCALE_STORAGE_KEY) || i18n.language || "en-GB"
      : "en-GB";
  const currentLang = UI_LANGUAGES.find((l) => l.code === uiLocale) || UI_LANGUAGES[0];

  useEffect(() => {
    webAPI.getFirstLoginInfo().then(setFirstLoginInfo);
  }, []);

  useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem(UI_LOCALE_STORAGE_KEY);
    if (stored && stored !== i18n.language) {
      loadLocale(stored).then(() => i18n.changeLanguage(stored));
    }
  }, []);

  const handleLangSelect = async (code) => {
    if (!code) return;
    await loadLocale(code);
    i18n.changeLanguage(code);
    if (typeof window !== "undefined") {
      localStorage.setItem(UI_LOCALE_STORAGE_KEY, code);
    }
  };

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

  const pageClass = "flex min-h-dvh flex-col bg-background";

  if (step === "changePassword") {
    return (
      <div className={pageClass}>
        <div className="absolute end-6 top-6 z-10">
          <LangSelector currentLang={currentLang} uiLocale={uiLocale} t={t} onSelect={handleLangSelect} />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center p-6">
          <div className="bg-card border border-border rounded-xl shadow-xl p-7 w-full max-w-sm">
            <h2 className="text-xl font-semibold mb-2">{t("Change password")}</h2>
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
              <HiddenUsernameForPasswordManager username={loggedInUser?.username} id="first-login-change-username" />
              <div className="flex flex-col gap-1.5">
                <PasswordInput
                  id="login-new-password"
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
                  id="login-confirm-password"
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
              <Button type="submit" disabled={loading} className="w-full mt-1">
                {loading ? t("Changing…") : t("Change password")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={pageClass}>
      <div className="absolute end-6 top-6 z-10">
        <LangSelector currentLang={currentLang} uiLocale={uiLocale} t={t} onSelect={handleLangSelect} />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center p-6">
        {/* Logo block */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <img src={Logo} alt={t("Transrewrt logo")} className="h-14 w-auto" />
          <span className="app-name-gradient text-4xl font-bold tracking-tight">Transrewrt</span>
        </div>

        <div className="bg-card border border-border rounded-xl shadow-xl p-7 w-full max-w-sm">
          <h2 className="text-xl font-semibold mb-2">{t("Log in")}</h2>
          <p className="text-sm text-muted-foreground mb-5">
            {t("Enter your credentials to access your account.")}
          </p>

          {firstLoginInfo.firstLogin && (
            <div className="rounded-lg bg-muted p-3 mb-5 text-sm text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground mb-1">{t("First-time login:")}</p>
              <p>{t("Use the default credentials provided below; you must change the password upon first login.")}</p>
              <p className="mt-3 font-mono font-semibold text-foreground">
                {DEFAULT_ADMIN_USERNAME} / {DEFAULT_ADMIN_PASSWORD}
              </p>
            </div>
          )}

          <form
            onSubmit={handleLoginSubmit}
            method="post"
            action={getWebAuthFormAction()}
            autoComplete="on"
            id="transrewrt-web-login-form"
            className="flex flex-col gap-4"
            style={{ position: "relative" }}
          >
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="login-username">{t("Username")}</Label>
              <Input
                id="login-username"
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
            {error && <p className="text-xs text-destructive">{error}</p>}
            <Button type="submit" disabled={loading} className="w-full mt-1">
              {loading ? t("Logging in…") : t("Log in")}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  sessionExpired: PropTypes.bool,
};

export default LoginPage;
