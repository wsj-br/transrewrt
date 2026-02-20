import React, { useState, useEffect } from "react";
import { makeStyles, tokens, Link } from "@fluentui/react-components";

import LogoImage from "../../../images/transrewrt_logo.svg";
import GitHubInvertocat from "../assets/GitHub_Invertocat_White.svg";
import webAPI from "../utils/webApiClient";

const REPO_URL = typeof __REPO_URL__ !== "undefined" ? __REPO_URL__ : "https://github.com/wsj-br/transrewrt";
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
    maxWidth: "500px",
    lineHeight: 1.6,
    fontWeight: 600,
    margin: 5,
  },
  link: {
    fontSize: "14px",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
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
    marginTop: "24px",
    fontSize: "14px",
    color: tokens.colorNeutralForeground1,
    textAlign: "center",
  },
});

const SettingsDialogAboutTab = () => {
  const styles = useStyles();
  const [buildTimestamp, setBuildTimestamp] = useState(buildTimestampCache);

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
        <span className={styles.version}>Version {APP_VERSION}</span>
        {buildTimestamp ? <span className={styles.build}>Build {buildTimestamp}</span> : null}
      </div>
      <p className={styles.description}>{APP_DESCRIPTION}</p>
      <div className={styles.meta}>
        {APP_AUTHOR && <span style={{ fontWeight: 600 }}>Copyright © {COPYRIGHT_YEAR} {APP_AUTHOR}</span>}
        <br />
        {APP_LICENSE && <span>Licensed under {APP_LICENSE}.</span>}
        <span>All rights reserved.</span>
      </div>
      <Link
        href={REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        appearance="subtle"
      >
        <img src={GitHubInvertocat} alt="" className={styles.githubIcon} />
        <b>{REPO_URL}</b>
      </Link>
    </div>
  );
};

export default SettingsDialogAboutTab;
