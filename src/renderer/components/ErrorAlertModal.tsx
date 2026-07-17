import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";

export type ErrorAlertModalProps = {
  open: boolean;
  title: string;
  message: string;
  onClose: () => void;
};

/**
 * Single-action alert dialog for blocking action failures (translate / rewrite / transform).
 */
const ErrorAlertModal = ({ open, title, message, onClose }: ErrorAlertModalProps) => {
  const { t } = useTranslation();

  return (
    <AlertDialog
      open={open}
      onOpenChange={(next) => {
        if (!next) onClose();
      }}
    >
      <AlertDialogContent
        className={cn(
          "bg-card border-border z-[10000] gap-0 p-6 shadow-2xl sm:max-w-md",
        )}
      >
        <AlertDialogHeader className="mb-6 gap-0 text-start sm:text-start">
          <AlertDialogTitle className="text-lg font-semibold">{title}</AlertDialogTitle>
          <AlertDialogDescription className="mt-4 text-sm text-muted-foreground whitespace-pre-line break-words leading-relaxed">
            {message}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onClose}>{t("Close")}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

ErrorAlertModal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ErrorAlertModal;
