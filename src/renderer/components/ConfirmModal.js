import React from "react";
import { makeStyles, tokens, Button } from "@fluentui/react-components";

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
    margin: "0 0 16px 0",
    fontSize: "18px",
    fontWeight: 600,
  },
  message: {
    margin: "0 0 20px 0",
    fontSize: "14px",
    color: tokens.colorNeutralForeground1,
    lineHeight: 1.4,
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "8px",
  },
});

const ConfirmModal = ({ title, message, confirmLabel = "Confirm", cancelLabel = "Cancel", onConfirm, onCancel }) => {
  const styles = useStyles();

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.message}>{message}</p>
        <div className={styles.actions}>
          <Button appearance="secondary" onClick={onCancel}>
            {cancelLabel}
          </Button>
          <Button appearance="primary" onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
