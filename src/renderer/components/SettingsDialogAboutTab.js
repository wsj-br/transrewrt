import React from "react";
import { makeStyles, tokens, Link } from "@fluentui/react-components";

import LogoImage from "../../../transrewrt_logo.svg";
import GitHubInvertocat from "../assets/GitHub_Invertocat_White.svg";

const REPO_URL = typeof __REPO_URL__ !== "undefined" ? __REPO_URL__ : "https://github.com/wsj-br/transrewrt";
const APP_NAME = "Transrewrt";
const APP_VERSION = typeof __APP_VERSION__ !== "undefined" ? __APP_VERSION__ : "—";
const APP_DESCRIPTION = typeof __APP_DESCRIPTION__ !== "undefined" ? __APP_DESCRIPTION__ : "Transrewrt Application";
const APP_AUTHOR = typeof __APP_AUTHOR__ !== "undefined" ? __APP_AUTHOR__ : "";
const APP_LICENSE = typeof __APP_LICENSE__ !== "undefined" ? __APP_LICENSE__ : "MIT";
const COPYRIGHT_YEAR = new Date().getFullYear();

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px 32px",
    gap: "20px",
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
  version: {
    fontSize: "14px",
    color: tokens.colorNeutralForeground2,
    fontWeight: 500,
  },
  description: {
    fontSize: "14px",
    color: tokens.colorNeutralForeground2,
    textAlign: "center",
    maxWidth: "400px",
    lineHeight: 1.6,
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
    marginTop: "12px",
    fontSize: "14px",
    color: tokens.colorNeutralForeground1,
    textAlign: "center",
  },
});

const SettingsDialogAboutTab = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <img
        src={LogoImage}
        alt={`${APP_NAME} logo`}
        className={styles.logo}
      />
      <h3 className={styles.name}>{APP_NAME}</h3>
      <span className={styles.version}>Version {APP_VERSION}</span>
      <p className={styles.description}>{APP_DESCRIPTION}</p>
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
      <div className={styles.meta}>
        {APP_AUTHOR && <span>© {COPYRIGHT_YEAR} {APP_AUTHOR}</span>}
        {APP_AUTHOR && APP_LICENSE && " · "}
        {APP_LICENSE && <span>Licensed under {APP_LICENSE}</span>}
      </div>
    </div>
  );
};

export default SettingsDialogAboutTab;
