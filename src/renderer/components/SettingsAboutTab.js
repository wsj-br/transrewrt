import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles, tokens, Link } from "@fluentui/react-components";

import LogoImage from "../../../images/transrewrt_logo.svg";
import GitHubInvertocat from "../../../images/GitHub_Invertocat_White.svg";
import webAPI from "../utils/api/webApiClient";
import ThirdPartyLicensesModal from "./ThirdPartyLicensesModal";

const REPO_URL = typeof __REPO_URL__ !== "undefined" ? __REPO_URL__ : "https://github.com/wsj-br/transrewrt";
/** Official Apache License 2.0 text (same as SPDX Apache-2.0). */
const APACHE_2_LICENSE_URL = "http://www.apache.org/licenses/LICENSE-2.0";

function openExternalUrl(url) {
  if (!url) return;
  if (typeof window !== "undefined" && window.electronAPI?.openExternalUrl) {
    window.electronAPI.openExternalUrl(url).catch(() => {});
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
}

function isApache2License(license) {
  const n = String(license || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "");
  return n === "apache-2.0" || n === "apache2.0";
}
const APP_NAME = "Transrewrt";
const APP_VERSION = typeof __APP_VERSION__ !== "undefined" ? __APP_VERSION__ : "—";
const APP_DESCRIPTION = typeof __APP_DESCRIPTION__ !== "undefined" ? __APP_DESCRIPTION__ : "Transrewrt Application";
const APP_AUTHOR = typeof __APP_AUTHOR__ !== "undefined" ? __APP_AUTHOR__ : "";
const APP_LICENSE = typeof __APP_LICENSE__ !== "undefined" ? __APP_LICENSE__ : "MIT";
const COPYRIGHT_YEAR = new Date().getFullYear();

/** Cached build timestamp so we don't read file / hit API every time the About tab is opened */
let buildTimestampCache = null;

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px 32px",
    gap: "16px",
  },
  logo: {
    width: "120px",
    height: "120px",
    objectFit: "contain",
    flexShrink: 0,
  },
  name: {
    margin: 0,
    fontSize: "32px",
    fontWeight: 700,
    color: tokens.colorNeutralForeground1,
  },
  versionContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "8px",
    padding: "0 0",
    gap: "2px",
  },
  version: {
    fontSize: "18px",
    color: tokens.colorNeutralForeground2,
    fontWeight: 500,
  },  
  build: {
    fontSize: "12px",
    color: tokens.colorNeutralForeground2,
    fontFamily: "monospace",
    fontWeight: 300,
  },
  description: {
    fontSize: "24px",
    color: tokens.colorNeutralForeground2,
    textAlign: "center",
    maxWidth: "550px",
    lineHeight: 1.6,
    fontWeight: 600,
    margin: 5,
  },
  link: {
    fontSize: "14px",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "16px",
    color: tokens.colorBrandForegroundLink,
    "&:hover": {
      color: tokens.colorBrandForegroundLinkHover,
    },
  },
  githubIcon: {
    width: "20px",
    height: "20px",
    flexShrink: 1,
  },
  meta: {
    marginTop: "16px",
    fontSize: "14px",
    color: tokens.colorNeutralForeground1,
    textAlign: "center",
  },
  thirdPartyLicensesLine: {
    width: "100%",
    textAlign: "center",
    marginTop: "10px",
    marginBottom: "2px",
  },
  thirdPartyLicensesLink: {
    fontSize: "14px",
    color: tokens.colorBrandForegroundLink,
    "&:hover": {
      color: tokens.colorBrandForegroundLinkHover,
    },
  },
});

const SettingsAboutTab = () => {
  const styles = useStyles();
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language && String(i18n.language).toLowerCase().startsWith("en");
  const [buildTimestamp, setBuildTimestamp] = useState(buildTimestampCache);
  const [thirdPartyLicensesOpen, setThirdPartyLicensesOpen] = useState(false);

  useEffect(() => {
    if (buildTimestampCache !== null) return;
    const normalize = (ts) => (ts && String(ts).trim()) ? String(ts).trim() : null;
    if (typeof window !== "undefined" && window.electronAPI?.getBuildTimestamp) {
      window.electronAPI.getBuildTimestamp().then((ts) => {
        const value = normalize(ts);
        buildTimestampCache = value;
        setBuildTimestamp(value);
      });
    } else if (typeof window !== "undefined") {
      webAPI.getBuildInfo().then(({ buildTimestamp: ts }) => {
        const value = normalize(ts);
        buildTimestampCache = value;
        setBuildTimestamp(value);
      });
    }
  }, []);

  return (
    <div className={styles.root}>
      <img
        src={LogoImage}
        alt={`${APP_NAME} logo`}
        className={styles.logo}
      />
      <h3 className={styles.name}>{APP_NAME}</h3>
      <div className={styles.versionContainer}>
        <span className={styles.version}>{t("Version")} {APP_VERSION}</span>
        {buildTimestamp ? <span className={styles.build}>{t("Build")} {buildTimestamp}</span> : null}
      </div>
      <p className={styles.description}>{t(APP_DESCRIPTION)}</p>
      <div className={styles.meta}>
        {APP_AUTHOR && <span style={{ fontWeight: 600 }}>Copyright © {COPYRIGHT_YEAR} {APP_AUTHOR}</span>}
        <br />
        {APP_LICENSE && (
          <span>
            {isEnglish ? null : "Licensed under ▪ "}
            {t("Licensed under")}{" "}
            {isApache2License(APP_LICENSE) ? (
              <Link
                href={APACHE_2_LICENSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.thirdPartyLicensesLink}
                appearance="subtle"
                onClick={(e) => {
                  e.preventDefault();
                  openExternalUrl(APACHE_2_LICENSE_URL);
                }}
              >
                {t("Apache 2.0")}
              </Link>
            ) : (
              APP_LICENSE
            )}
            .
          </span>
        )}
        <span style={{ marginInlineStart: 10 }}>—</span>
        <span style={{ marginInlineStart: 10 }}>
          {isEnglish ? null : "All rights reserved ▪ "}
          {t("All rights reserved.")}
        </span>
        <div className={styles.thirdPartyLicensesLine}>
          <Link
            href="#"
            className={styles.thirdPartyLicensesLink}
            appearance="subtle"
            onClick={(e) => {
              e.preventDefault();
              setThirdPartyLicensesOpen(true);
            }}
          >
             {isEnglish ? null : "Third‑party licenses ▪ "}
            {t("Third‑party licenses")}
          </Link>
        </div>
        <ThirdPartyLicensesModal
          open={thirdPartyLicensesOpen}
          onClose={() => setThirdPartyLicensesOpen(false)}
        />
        <br />
        <i>
              Product names and icons belong to their respective owners and are used for identification purposes only.  <br />
              This software is not affiliated with or endorsed by any of the mentioned brands.
          
          {!isEnglish ? (
            <>
              <br />
              ▪
              <br />
              {t("Product names and icons belong to their respective owners and are used for identification purposes only.")}
              <br />
              {t("This software is not affiliated with or endorsed by any of the mentioned brands.")}
            </>
          ) : null}
        </i>
      </div>
      <Link
        href={REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        appearance="subtle"
        onClick={(e) => {
          e.preventDefault();
          openExternalUrl(REPO_URL);
        }}
      >
        <img src={GitHubInvertocat} alt="" className={styles.githubIcon} />
        <b>{REPO_URL}</b>
      </Link>
    </div>
  );
};

export default SettingsAboutTab;
