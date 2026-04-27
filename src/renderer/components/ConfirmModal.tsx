import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
  confirmDisabled = false,
}) => {
  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60">
      <div
        className="bg-card border border-border rounded-lg shadow-2xl p-6 min-w-80 w-full"
        style={maxWidth != null ? { maxWidth } : { maxWidth: "90vw" }}
      >
        <h2 className="text-lg font-semibold mb-6">{title}</h2>
        {customBody ? (
          <div className="text-sm text-muted-foreground mb-6 whitespace-pre-line break-words leading-relaxed">
            {customBody}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground mb-6 whitespace-pre-line break-words leading-relaxed">
            {message}
          </p>
        )}
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onCancel}>
            {cancelLabel}
          </Button>
          {!hideConfirm && (
            <Button
              onClick={onConfirm}
              disabled={confirmDisabled}
              className={cn(danger && "bg-destructive text-white hover:bg-destructive/90")}
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
  confirmDisabled: PropTypes.bool,
};

export default ConfirmModal;
