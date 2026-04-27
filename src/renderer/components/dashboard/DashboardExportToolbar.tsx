import { useTranslation } from "react-i18next";
import { Download } from "lucide-react";
import PropTypes from "prop-types";
import { styles } from "./dashboardPageStyles";

type Format = "json" | "csv" | "xlsx";

type DashboardExportToolbarProps = {
  exportLoading?: boolean;
  disabled?: boolean;
  onExport: (format: Format) => void;
  /** Icon size matches existing dashboard tabs (14–16px). */
  iconSize?: number;
};

/**
 * JSON / CSV / XLSX export control row used on By day, By model, and All calls tabs.
 */
export default function DashboardExportToolbar({
  exportLoading = false,
  disabled = false,
  onExport,
  iconSize = 16,
}: DashboardExportToolbarProps) {
  const { t } = useTranslation();
  const busy = disabled || exportLoading;
  const formatLabel = (fmt: Format) =>
    fmt === "json" ? t("JSON") : fmt === "csv" ? t("CSV") : t("XLSX");
  return (
    <div className={styles.downloadBlock}>
      <Download size={iconSize} aria-hidden />
      <span className="font-semibold">{t("Download:")} </span>
      {(["json", "csv", "xlsx"] as const).map((fmt) => (
        <button
          key={fmt}
          type="button"
          className={styles.downloadButton}
          disabled={busy}
          onClick={() => onExport(fmt)}
        >
          {formatLabel(fmt)}
        </button>
      ))}
    </div>
  );
}

DashboardExportToolbar.propTypes = {
  exportLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  onExport: PropTypes.func.isRequired,
  iconSize: PropTypes.number,
};
