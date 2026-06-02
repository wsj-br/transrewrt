/**
 * Reusable password input with show/hide toggle.
 */
import { useState, type CSSProperties } from "react";
import { Eye, EyeOff } from "lucide-react";
import PropTypes from "prop-types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PasswordInput = ({
  id,
  label,
  value = "",
  onChange,
  placeholder,
  disabled = false,
  autoFocus = false,
  autoComplete,
  name,
  style,
  showPasswordAriaLabel = "Show password",
  hidePasswordAriaLabel = "Hide password",
  showPassword: controlledShow,
  onShowPasswordChange,
}: {
  id?: string;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  autoComplete?: string;
  name?: string;
  style?: CSSProperties;
  showPasswordAriaLabel?: string;
  hidePasswordAriaLabel?: string;
  showPassword?: boolean;
  onShowPasswordChange?: (show: boolean) => void;
}) => {
  const [internalShow, setInternalShow] = useState(false);
  const isControlled = controlledShow !== undefined;
  const show = isControlled ? controlledShow : internalShow;
  const setShow = (v) => {
    const next = typeof v === "function" ? v(show) : v;
    if (!isControlled) setInternalShow(next);
    onShowPasswordChange?.(next);
  };

  const handleChange = (ev) => {
    if (typeof onChange === "function") {
      onChange(ev.target.value);
    }
  };

  const input = (
    <div className="relative">
      <Input
        id={id}
        name={name}
        type={show ? "text" : "password"}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        className="pe-9 w-full"
      />
      <button
        type="button"
        tabIndex={-1}
        onClick={() => setShow((s) => !s)}
        aria-label={show ? hidePasswordAriaLabel : showPasswordAriaLabel}
        className="absolute end-2 top-1/2 -translate-y-1/2 flex items-center text-muted-foreground hover:text-foreground p-0.5 rounded"
      >
        {show ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
    </div>
  );

  if (label != null && label !== "") {
    return (
      <div style={style} className="flex flex-col gap-1.5">
        <Label htmlFor={id}>{label}</Label>
        {input}
      </div>
    );
  }

  return <div style={style}>{input}</div>;
};

PasswordInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  autoComplete: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.object,
  showPasswordAriaLabel: PropTypes.string,
  hidePasswordAriaLabel: PropTypes.string,
  showPassword: PropTypes.bool,
  onShowPasswordChange: PropTypes.func,
};

export default PasswordInput;
