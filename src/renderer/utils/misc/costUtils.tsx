/**
 * Shared cost-tracking utilities: filters, formatters, and API access.
 * Used by SettingsCostTrackingTab, DashboardPage, and SettingsGeneralTab.
 */

import React from "react";
import webAPI from "../api/webApiClient";
import { SOURCE_LOCALE } from "../../i18n";

const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;

export function getCostApi() {
  return isWeb ? webAPI : (typeof window !== "undefined" && window.electronAPI) || {};
}

/** Raw option values for cost fraction style (id-only; use getCostFractionStyleOptions(t) for labels). */
export const COST_FRACTION_STYLE_OPTIONS = [
  { value: "subscript", label: "Subscript" },
  { value: "muted", label: "Muted grey" },
  { value: "superscript", label: "Superscript" },
  { value: "small", label: "Small font" },
];

/** Returns cost fraction style options with translated labels. Use this in UI so extract finds t() literals. */
export function getCostFractionStyleOptions(t) {
  return [
    { value: "subscript", label: t("Subscript") },
    { value: "muted", label: t("Muted grey") },
    { value: "superscript", label: t("Superscript") },
    { value: "small", label: t("Small font") },
  ];
}

/** Returns filters with translated labels. Use this in UI so extract finds t() literals. */
export function getFilters(t) {
  return [
    { id: "all", label: t("All") },
    { id: "last_hour", label: t("Last hour") },
    { id: "today", label: t("Today") },
    { id: "yesterday", label: t("Yesterday") },
    { id: "this_week", label: t("This week") },
    { id: "this_month", label: t("This month") },
    { id: "last_month", label: t("Last month") },
    { id: "this_year", label: t("This year") },
    { id: "last_year", label: t("Last year") },
  ];
}

export const DASH = "-";

const DEFAULT_LOCALE = SOURCE_LOCALE;
function resolveLocale(locale) {
  return locale && typeof locale === "string" ? locale : DEFAULT_LOCALE;
}

export function getFilterRange(filterId) {
  if (!filterId || filterId === "all") return { from: null, to: null };
  const now = new Date();
  const to = now.toISOString();
  let from;
  switch (filterId) {
    case "last_hour":
      from = new Date(now.getTime() - 60 * 60 * 1000).toISOString();
      break;
    case "today":
      from = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
      ).toISOString();
      break;
    case "yesterday": {
      const d = new Date(now);
      d.setDate(d.getDate() - 1);
      from = new Date(d.getFullYear(), d.getMonth(), d.getDate()).toISOString();
      const end = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
      return { from, to: end.toISOString() };
    }
    case "this_week":
      from = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
      break;
    case "this_month":
      from = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
      break;
    case "last_month": {
      const d = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      from = d.toISOString();
      const end = new Date(now.getFullYear(), now.getMonth(), 1);
      return { from, to: end.toISOString() };
    }
    case "this_year":
      from = new Date(now.getFullYear(), 0, 1).toISOString();
      break;
    case "last_year": {
      const y = now.getFullYear() - 1;
      from = new Date(y, 0, 1).toISOString();
      const end = new Date(y + 1, 0, 1);
      return { from, to: end.toISOString() };
    }
    default:
      return { from: null, to: null };
  }
  return { from, to };
}

/**
 * ISO cutoff for "delete older than" age options (cost data, execution history).
 * @param {string} option - e.g. "all", "gt_3m", "gt_1y"
 * @returns {string|null} cutoff timestamp, or null for "all"
 */
export function getDeleteCutoffIso(option) {
  if (option === "all") return null;
  const now = new Date();
  const d = new Date(now);
  switch (option) {
    case "gt_1m":
      d.setMonth(d.getMonth() - 1);
      break;
    case "gt_2m":
      d.setMonth(d.getMonth() - 2);
      break;
    case "gt_3m":
      d.setMonth(d.getMonth() - 3);
      break;
    case "gt_6m":
      d.setMonth(d.getMonth() - 6);
      break;
    case "gt_9m":
      d.setMonth(d.getMonth() - 9);
      break;
    case "gt_1y":
      d.setFullYear(d.getFullYear() - 1);
      break;
    case "gt_2y":
      d.setFullYear(d.getFullYear() - 2);
      break;
    default:
      return null;
  }
  return d.toISOString();
}

/** Returns React node for dollar amount with fraction styling. Locale controls decimal separator.
 * @param {object} [options] - Optional. mainPartSuccess: true to render the main part (through cents) in success green.
 */
export function formatDollarAmount(
  n,
  costFractionStyle = "muted",
  locale,
  options: { mainPartSuccess?: boolean } = {},
) {
  const { mainPartSuccess = false } = options;
  const loc = resolveLocale(locale);
  const formatter = new Intl.NumberFormat(loc, {
    minimumFractionDigits: 6,
    maximumFractionDigits: 6,
  });
  const parts = formatter.formatToParts(Number(n));
  const decimalPart = parts.find((p) => p.type === "decimal");
  const fractionPart = parts.find((p) => p.type === "fraction");
  const integerPart = parts.find((p) => p.type === "integer");
  const decimalSep = decimalPart ? decimalPart.value : ".";
  const fraction = fractionPart ? fractionPart.value : "000000";
  const integer = integerPart ? integerPart.value : "0";
  const main = integer + decimalSep + fraction.slice(0, 2);
  const frac = fraction.slice(2);
  const mutedColor = "#888";
  const fractionNode =
    costFractionStyle === "superscript" ? (
      <sup>{frac}</sup>
    ) : costFractionStyle === "muted" ? (
      <span style={{ color: mutedColor }}>{frac}</span>
    ) : costFractionStyle === "small" ? (
      <span style={{ fontSize: "0.7em" }}>{frac}</span>
    ) : (
      <sub>{frac}</sub>
    );
  const mainPart = "$" + main;
  return (
    <>
      {mainPartSuccess ? (
        <span style={{ color: "#4ade80" }}>{mainPart}</span>
      ) : (
        mainPart
      )}
      {fractionNode}
    </>
  );
}

export function formatCost(cost, costFractionStyle = "muted", locale, options = {}) {
  const n = Number(cost);
  return cost == null || Number.isNaN(n) || n === 0
    ? DASH
    : formatDollarAmount(n, costFractionStyle, locale, options);
}

export function formatAvgCost(cost, calls, costFractionStyle = "muted", locale) {
  const n = Number(cost);
  if (
    calls == null ||
    calls === 0 ||
    cost == null ||
    Number.isNaN(n) ||
    n === 0
  )
    return DASH;
  return formatDollarAmount(cost / calls, costFractionStyle, locale);
}

export function formatAvgTps(avgTps, locale) {
  const n = Number(avgTps);
  if (avgTps == null || Number.isNaN(n) || n === 0) return DASH;
  const loc = resolveLocale(locale);
  return new Intl.NumberFormat(loc, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(n);
}

export function formatCount(count, locale) {
  if (count == null || Number(count) === 0) return DASH;
  const loc = resolveLocale(locale);
  return new Intl.NumberFormat(loc).format(Number(count));
}
