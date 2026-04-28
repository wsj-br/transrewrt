import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ExternalLink, Info, Scale, ScrollText } from "lucide-react";

import GithubInvertocat from "../../../images/GitHub_Invertocat_White.svg";
import LogoImage from "../../../images/transrewrt_logo.svg";
import webAPI from "../utils/api/webApiClient";
import ThirdPartyNoticesModal from "./ThirdPartyNoticesModal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { settingsSection, settingsTabContent } from "./settings/settingsLayoutClasses";

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

/** Shared section title — same weight/size on About, Legal, Source code */
const sectionTitleCls =
  "mb-3 mt-0 flex items-center gap-2 text-base font-semibold text-foreground";

/** Shared body copy for About text, Legal lines, disclaimer, repo (single scale) */
const bodyTextCls = "text-sm leading-snug text-muted-foreground";

/** White SVG asset — black on light UI, white on dark */
const githubCatImgCls =
  "shrink-0 object-contain brightness-0 dark:brightness-100";

export default function SettingsAboutTab() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language && String(i18n.language).toLowerCase().startsWith("en");
  const [buildTimestamp, setBuildTimestamp] = useState(buildTimestampCache);
  const [thirdPartyNoticesOpen, setThirdPartyNoticesOpen] = useState(false);

  useEffect(() => {
    if (buildTimestampCache !== null) return;
    const normalize = (ts) => (ts && String(ts).trim() ? String(ts).trim() : null);
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
    <div className={settingsTabContent}>
      <div className="mx-auto flex w-full min-w-0 max-w-6xl flex-col gap-5 pb-4">
        {/* Hero: logo + title stack on narrow; side‑by‑side from sm */}
        <div className={cn(settingsSection, "!mb-0")}>
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
            <img
              src={LogoImage}
              alt={`${APP_NAME} logo`}
              className="h-[5.1rem] w-[5.1rem] shrink-0 object-contain sm:h-[5.95rem] sm:w-[5.95rem]"
            />
            <div className="flex min-w-0 flex-1 flex-col items-center text-center sm:items-start sm:text-start">
              <h2 className="app-name-gradient m-0 text-2xl font-bold tracking-tight sm:text-3xl">{APP_NAME}</h2>
              <div className="mt-3 flex flex-col gap-1">
                <span className={cn(bodyTextCls, "font-medium text-muted-foreground")}>
                  {t("Version")}{" "}
                  <span className="font-mono text-foreground tabular-nums">{APP_VERSION}</span>
                </span>
                {buildTimestamp ? (
                  <span className={cn(bodyTextCls, "font-mono text-muted-foreground/85")}>{t("Build")} {buildTimestamp}</span>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className={cn(settingsSection, "!mb-0")}>
          <h3 className={sectionTitleCls}>
            <Info className="h-[18px] w-[18px] shrink-0 text-emerald-500" strokeWidth={1.6} aria-hidden />
            {t("About")}
          </h3>
          <p className={cn("m-0 w-full text-pretty", bodyTextCls)}>{t(APP_DESCRIPTION)}</p>
        </div>

        {/* Copyright, license, notices — compact vertical rhythm */}
        <div className={cn(settingsSection, "!mb-0 !p-4")}>
          <h3 className={sectionTitleCls}>
            <Scale className="h-[18px] w-[18px] shrink-0 text-emerald-500" strokeWidth={1.6} aria-hidden />
            {t("Legal")}
          </h3>
          <div className={cn("flex flex-col gap-1.5", bodyTextCls)}>
            {APP_AUTHOR ? (
              <p className="m-0 text-foreground">
                Copyright © {COPYRIGHT_YEAR} {APP_AUTHOR}
              </p>
            ) : null}
            <p className="m-0">
              {APP_LICENSE ? (
                <>
                  {isEnglish ? null : "Licensed under ▪ "}
                  {t("Licensed under")}{" "}
                  {isApache2License(APP_LICENSE) ? (
                    <a
                      href={APACHE_2_LICENSE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-emerald-500 underline-offset-4 hover:text-emerald-400 hover:underline"
                      onClick={(e) => {
                        e.preventDefault();
                        openExternalUrl(APACHE_2_LICENSE_URL);
                      }}
                    >
                      {t("Apache 2.0")}
                      <ExternalLink className="h-3 w-3 opacity-70" aria-hidden />
                    </a>
                  ) : (
                    <span className="font-medium text-foreground">{APP_LICENSE}</span>
                  )}
                  .{" "}
                </>
              ) : null}
              {isEnglish ? null : "All rights reserved ▪ "}
              {t("All rights reserved.")}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className={cn(
                  "h-8 w-full justify-center gap-1.5 rounded-full border-white/10 bg-white/5 px-3 text-sm sm:w-auto",
                )}
                onClick={() => setThirdPartyNoticesOpen(true)}
              >
                <ScrollText className="h-3.5 w-3.5 shrink-0" aria-hidden />
                {t("Third‑party notices")}
              </Button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div
          className={cn(
            "rounded-xl border border-border/60 bg-muted/20 p-3 dark:border-white/10 dark:bg-muted/15 sm:p-4",
            bodyTextCls,
          )}
        >
          <p className="m-0">
            Product names and icons belong to their respective owners and are used for identification purposes only.{" "}
            This software is not affiliated with or endorsed by any of the mentioned brands.
          </p>
          {!isEnglish ? (
            <p className="m-0 mt-2 border-t border-border/40 pt-2 dark:border-white/10">
              {t("Product names and icons belong to their respective owners and are used for identification purposes only.")}{" "}
              {t("This software is not affiliated with or endorsed by any of the mentioned brands.")}
            </p>
          ) : null}
        </div>

        {/* Repository — same card shell as other sections; single link row (no nested faux card) */}
        <div className={cn(settingsSection, "!mb-0")}>
          <h3 className={sectionTitleCls}>
            <img
              src={GithubInvertocat}
              alt=""
              className={cn("h-[18px] w-[18px]", githubCatImgCls)}
              aria-hidden
            />
            {t("Source code")}
          </h3>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex max-w-full items-center gap-2 rounded-md text-sm text-emerald-500 underline-offset-4 outline-none transition-colors hover:text-emerald-400 hover:underline focus-visible:ring-2 focus-visible:ring-ring",
            )}
            onClick={(e) => {
              e.preventDefault();
              openExternalUrl(REPO_URL);
            }}
          >
            <span className="min-w-0 break-all font-mono">{REPO_URL.replace(/^https?:\/\//, "")}</span>
            <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden />
          </a>
        </div>
      </div>
      <ThirdPartyNoticesModal open={thirdPartyNoticesOpen} onClose={() => setThirdPartyNoticesOpen(false)} />
    </div>
  );
}
