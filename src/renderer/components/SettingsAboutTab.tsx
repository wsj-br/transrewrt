import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ScrollText } from "lucide-react";

import LogoImage from "../../../images/transrewrt_logo.svg";
import GitHubInvertocat from "../../../images/GitHub_Invertocat_White.svg";
import webAPI from "../utils/api/webApiClient";
import ThirdPartyLicensesModal from "./ThirdPartyLicensesModal";

const REPO_URL = typeof __REPO_URL__ !== "undefined" ? __REPO_URL__ : "https://github.com/wsj-br/transrewrt";
const APACHE_2_LICENSE_URL = `${REPO_URL}/blob/main/LICENSE`;

function openExternalUrl(url) {
  if (!url) return;
  if (typeof window !== "undefined" && window.electronAPI?.openExternalUrl) {
    window.electronAPI.openExternalUrl(url).catch(() => {});
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
}

function isApache2License(license) {
  const n = String(license || "").trim().toLowerCase().replace(/\s+/g, "");
  return n === "apache-2.0" || n === "apache2.0";
}

const APP_NAME = "Transrewrt";
const APP_VERSION = typeof __APP_VERSION__ !== "undefined" ? __APP_VERSION__ : "-";
const APP_DESCRIPTION = typeof __APP_DESCRIPTION__ !== "undefined" ? __APP_DESCRIPTION__ : "Transrewrt Application";
const APP_AUTHOR = typeof __APP_AUTHOR__ !== "undefined" ? __APP_AUTHOR__ : "";
const APP_LICENSE = typeof __APP_LICENSE__ !== "undefined" ? __APP_LICENSE__ : "MIT";
const COPYRIGHT_YEAR = new Date().getFullYear();

let buildTimestampCache = null;

const SettingsAboutTab = () => {
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
    <div className="flex flex-col items-center p-6 gap-4">
      <img src={LogoImage} alt={`${APP_NAME} logo`} className="w-28 h-28 object-contain shrink-0" />
      <h3 className="app-name-gradient m-0 text-3xl font-bold">{APP_NAME}</h3>
      <div className="flex flex-col items-center mt-2 gap-0.5">
        <span className="text-lg text-muted-foreground font-medium">{t("Version")} {APP_VERSION}</span>
        {buildTimestamp ? <span className="text-xs text-muted-foreground font-mono">{t("Build")} {buildTimestamp}</span> : null}
      </div>
      <p className="text-xl text-muted-foreground text-center max-w-lg leading-relaxed font-semibold m-1">{t(APP_DESCRIPTION)}</p>
      <div className="mt-4 text-sm text-center">
        {APP_AUTHOR && <span className="font-semibold">Copyright © {COPYRIGHT_YEAR} {APP_AUTHOR}</span>}
        <br />
        {APP_LICENSE && (
          <span>
            {isEnglish ? null : "Licensed under ▪ "}
            {t("Licensed under")}{" "}
            {isApache2License(APP_LICENSE) ? (
              <a
                href={APACHE_2_LICENSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline"
                onClick={(e) => { e.preventDefault(); openExternalUrl(APACHE_2_LICENSE_URL); }}
              >
                {t("Apache 2.0")}
              </a>
            ) : (
              APP_LICENSE
            )}
            .
          </span>
        )}
        <span className="ms-2">-</span>
        <span className="ms-2">
          {isEnglish ? null : "All rights reserved ▪ "}
          {t("All rights reserved.")}
        </span>
        <div className="w-full text-center mt-2.5 mb-0.5">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
            onClick={(e) => { e.preventDefault(); setThirdPartyLicensesOpen(true); }}
          >
            <ScrollText className="w-4 h-4 shrink-0" aria-hidden />
            {isEnglish ? null : "Third‑party licenses ▪ "}
            {t("Third‑party licenses")}
          </a>
        </div>
        <ThirdPartyLicensesModal
          open={thirdPartyLicensesOpen}
          onClose={() => setThirdPartyLicensesOpen(false)}
        />
        <br />
        <i>
          Product names and icons belong to their respective owners and are used for identification purposes only. <br />
          This software is not affiliated with or endorsed by any of the mentioned brands.
          {!isEnglish ? (
            <>
              <br />▪<br />
              {t("Product names and icons belong to their respective owners and are used for identification purposes only.")}
              <br />
              {t("This software is not affiliated with or endorsed by any of the mentioned brands.")}
            </>
          ) : null}
        </i>
      </div>
      <a
        href={REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 mt-4 text-sm text-primary hover:underline"
        onClick={(e) => { e.preventDefault(); openExternalUrl(REPO_URL); }}
      >
        <img src={GitHubInvertocat} alt="" className="w-5 h-5 shrink-0" />
        <b>{REPO_URL}</b>
      </a>
    </div>
  );
};

export default SettingsAboutTab;
