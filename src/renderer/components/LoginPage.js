import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  makeStyles,
  tokens,
  Button,
  Input,
  Field,
  Popover,
  PopoverTrigger,
  PopoverSurface,
  MenuList,
  MenuItem,
} from "@fluentui/react-components";
import { Languages, ChevronDown, Check } from "lucide-react";
import PropTypes from "prop-types";
import i18n, { loadLocale } from "../i18n";
import { UI_LANGUAGES, DEFAULT_ADMIN_USERNAME, DEFAULT_ADMIN_PASSWORD } from "../constants";
import { getUILanguageLabel } from "../utils/misc/languageDisplay";
import webAPI from "../utils/api/webApiClient";
import PasswordInput from "./PasswordInput";
import Logo from "../../../images/transrewrt_logo.png";

const UI_LOCALE_STORAGE_KEY = "transrewrt_ui_locale";

const useStyles = makeStyles({
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#12141d",
    position: "relative",
  },
  langWrapper: {
    position: "absolute",
    top: "24px",
    insetInlineEnd: "24px",
    zIndex: 10,
  },
  langTrigger: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 14px",
    borderRadius: "999px",
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: tokens.colorNeutralBackground3,
    color: tokens.colorNeutralForeground1,
    cursor: "pointer",
    fontSize: "14px",
    minWidth: "120px",
  },
  center: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
  },
  logoBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    marginBottom: "24px",
  },
  logo: {
    height: "48px",
    width: "auto",
  },
  appName: {
    display: "inline-block",
    fontSize: "32px",
    fontWeight: 700,
    fontFamily: "'Segoe UI', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    letterSpacing: "-0.5px",
    lineHeight: 1.3,
    paddingBottom: "4px",
    color: "transparent",
    background: "linear-gradient(90deg, #84cc16 0%, #a3e635 40%, #fb923c 60%, #f97316 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  tagline: {
    fontSize: "14px",
    color: tokens.colorNeutralForeground3,
    marginBottom: "24px",
  },
  box: {
    backgroundColor: tokens.colorNeutralBackground3,
    padding: "28px",
    borderRadius: "12px",
    boxShadow: tokens.shadow28,
    minWidth: "320px",
    maxWidth: "400px",
    border: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  title: {
    margin: "0 0 8px 0",
    fontSize: "20px",
    fontWeight: 600,
    color: tokens.colorNeutralForeground1,
  },
  instruction: {
    margin: "0 0 20px 0",
    fontSize: "14px",
    color: tokens.colorNeutralForeground2,
    lineHeight: 1.4,
  },
  firstLoginMessage: {
    marginBottom: "16px",
    padding: "12px",
    borderRadius: "8px",
    backgroundColor: tokens.colorNeutralBackground2,
    fontSize: "13px",
    color: tokens.colorNeutralForeground2,
    lineHeight: 1.4,
  },
  firstLoginBold: {
    fontWeight: 600,
    color: tokens.colorNeutralForeground1,
  },
  firstLoginCredentials: {
    marginTop: "16px",
    marginInlineStart: "24px",
    fontWeight: 600,
    color: tokens.colorNeutralForeground1,
    fontFamily: "ui-monospace, monospace",
  },
  field: {
    marginBottom: "16px",
  },
  actions: {
    marginTop: "32px",
    display: "flex",
    justifyContent: "flex-end",
  },
  error: {
    color: tokens.colorStatusDangerForeground1,
    fontSize: "12px",
    marginTop: "8px",
  },
  selectedItem: {
    color: tokens.colorBrandForegroundInverted,
  },
  popoverGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    minWidth: "500px",
    gap: "2px 8px",
    padding: "4px",
  },
  popoverColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
});

const LoginPage = ({ onSuccess }) => {
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
  const [firstLoginInfo, setFirstLoginInfo] = useState({ firstLogin: false });
  const [langOpen, setLangOpen] = useState(false);

  const uiLocale = typeof window !== "undefined" ? (localStorage.getItem(UI_LOCALE_STORAGE_KEY) || i18n.language || "en-GB") : "en-GB";
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
    setLangOpen(false);
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

  if (step === "changePassword") {
    return (
      <div className={styles.page}>
        <div className={styles.langWrapper}>
          <Popover open={langOpen} onOpenChange={(_, data) => setLangOpen(data.open)}>
            <PopoverTrigger disableButtonEnhancement>
              <button type="button" className={styles.langTrigger} aria-label={t("Interface language")}>
                <Languages size={18} />
                <span style={{ flex: 1, textAlign: "start" }}>{getUILanguageLabel(currentLang, t)}</span>
                <ChevronDown size={16} />
              </button>
            </PopoverTrigger>
            <PopoverSurface>
              <div className={styles.popoverGrid}>
                {[0, 1].map((colIndex) => (
                  <div key={colIndex} className={styles.popoverColumn}>
                    <MenuList>
                      {UI_LANGUAGES.filter((_, i) => i % 2 === colIndex).map((lang) => {
                        const isSelected = lang.code === uiLocale;
                        return (
                          <MenuItem
                            key={lang.code}
                            onClick={() => handleLangSelect(lang.code)}
                            icon={isSelected ? <Check size={16} /> : <Check size={16} style={{ opacity: 0 }} aria-hidden />}
                            className={isSelected ? styles.selectedItem : undefined}
                          >
                            {getUILanguageLabel(lang, t)}
                          </MenuItem>
                        );
                      })}
                    </MenuList>
                  </div>
                ))}
              </div>
            </PopoverSurface>
          </Popover>
        </div>
        <div className={styles.center}>
          <div className={styles.box}>
            <h2 className={styles.title}>{t("Change password")}</h2>
            <p className={styles.instruction}>{t("You must change your password before continuing.")}</p>
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
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.langWrapper}>
        <Popover open={langOpen} onOpenChange={(_, data) => setLangOpen(data.open)}>
          <PopoverTrigger disableButtonEnhancement>
            <button type="button" className={styles.langTrigger} aria-label={t("Interface language")}>
              <Languages size={18} />
              <span style={{ flex: 1, textAlign: "start" }}>{getUILanguageLabel(currentLang, t)}</span>
              <ChevronDown size={16} />
            </button>
          </PopoverTrigger>
          <PopoverSurface>
            <div className={styles.popoverGrid}>
              {[0, 1].map((colIndex) => (
                <div key={colIndex} className={styles.popoverColumn}>
                  <MenuList>
                    {UI_LANGUAGES.filter((_, i) => i % 2 === colIndex).map((lang) => {
                      const isSelected = lang.code === uiLocale;
                      return (
                        <MenuItem
                          key={lang.code}
                          onClick={() => handleLangSelect(lang.code)}
                          icon={isSelected ? <Check size={16} /> : <Check size={16} style={{ opacity: 0 }} aria-hidden />}
                          className={isSelected ? styles.selectedItem : undefined}
                        >
                          {getUILanguageLabel(lang, t)}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </div>
              ))}
            </div>
          </PopoverSurface>
        </Popover>
      </div>
      <div className={styles.center}>
        <div className={styles.logoBlock}>
          <img src={Logo} alt={t("Transrewrt logo")} className={styles.logo} />
          <span className={styles.appName}>Transrewrt</span>
        </div>
        {/* <p className={styles.tagline}>{t("Sign in to your account")}</p> */}
        <div className={styles.box}>
          <h2 className={styles.title}>{t("Log in")}</h2>
          <p className={styles.instruction}>
             {t("Enter your credentials to access your account.")}
          </p>
          {firstLoginInfo.firstLogin && (
            <div className={styles.firstLoginMessage}>
              <h3> {t("First-time login:")} </h3>
              {t("Use the default credentials provided below; you must change the password upon first login.")}
              <div className={styles.firstLoginCredentials}>
                {DEFAULT_ADMIN_USERNAME} / {DEFAULT_ADMIN_PASSWORD}
              </div>
            </div>
          )}
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
              <Button type="submit" appearance="primary" disabled={loading} style={{ width: "100%" }}>
                {loading ? t("Logging in…") : t("Log in")}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
