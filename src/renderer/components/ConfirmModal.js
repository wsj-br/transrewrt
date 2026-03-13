import { makeStyles, tokens, Button } from "@fluentui/react-components";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10000,
  },
  modal: {
    backgroundColor: tokens.colorNeutralBackground1,
    padding: "24px",
    borderRadius: "8px",
    boxShadow: tokens.shadow28,
    minWidth: "320px",
    maxWidth: "90vw",
  },
  title: {
    margin: "0 0 36px 0",
    fontSize: "18px",
    fontWeight: 600,
  },
  message: {
    margin: "0 0 36px 0",
    fontSize: "14px",
    color: tokens.colorNeutralForeground1,
    lineHeight: 1.4,
    overflowWrap: "break-word",
    wordBreak: "break-word",
    whiteSpace: "pre-line",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "8px",
  },
  confirmButtonDanger: {
    backgroundColor: "#b91c1c",
    color: tokens.colorNeutralForegroundOnColor,
    ":hover": {
      backgroundColor: "#991b1b",
      color: tokens.colorNeutralForegroundOnColor,
    },
  },
});

const ConfirmModal = ({
  title,
  message,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
  danger = false,
  customBody,
  hideConfirm = false,
  maxWidth,
}) => {
  const styles = useStyles();

  return (
    <div className={styles.overlay}>
      <div
        className={styles.modal}
        style={maxWidth != null ? { maxWidth } : undefined}
      >
        <h2 className={styles.title}>{title}</h2>
        {customBody ? (
          <div className={styles.message}>{customBody}</div>
        ) : (
          <p className={styles.message}>{message}</p>
        )}
        <div className={styles.actions}>
          <Button appearance="secondary" onClick={onCancel}>
            {cancelLabel}
          </Button>
          {!hideConfirm && (
            <Button
              appearance="primary"
              onClick={onConfirm}
              className={danger ? styles.confirmButtonDanger : undefined}
            >
              {confirmLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

ConfirmModal.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  danger: PropTypes.bool,
  customBody: PropTypes.node,
  hideConfirm: PropTypes.bool,
  maxWidth: PropTypes.string,
};

export default ConfirmModal;
