/**
 * Reusable password input with show/hide toggle.
 * Uses Fluent v9 Field + Input with appearance="outline" and contentAfter for the eye toggle.
 */

import { useState } from "react";
import { Field, Input } from "@fluentui/react-components";
import { EyeRegular, EyeOffRegular } from "@fluentui/react-icons";
import PropTypes from "prop-types";

/**
 * @param {object} props
 * @param {string} [props.id]
 * @param {string} [props.label] - Optional label text (rendered above input via Field)
 * @param {string} [props.value]
 * @param {(value: string) => void} [props.onChange]
 * @param {string} [props.placeholder]
 * @param {boolean} [props.disabled]
 * @param {boolean} [props.autoFocus]
 * @param {string} [props.autoComplete]
 * @param {string} [props.name]
 * @param {React.CSSProperties} [props.style] - Applied to the outer wrapper
 * @param {string} [props.showPasswordAriaLabel]
 * @param {string} [props.hidePasswordAriaLabel]
 * @param {boolean} [props.showPassword] - Controlled visibility (e.g. when parent reveals after "Generate")
 * @param {(show: boolean) => void} [props.onShowPasswordChange]
 */
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
}) => {
  const [internalShow, setInternalShow] = useState(false);
  const isControlled = controlledShow !== undefined;
  const show = isControlled ? controlledShow : internalShow;
  const setShow = (v) => {
    const next = typeof v === "function" ? v(show) : v;
    if (!isControlled) setInternalShow(next);
    onShowPasswordChange?.(next);
  };

  const handleChange = (ev, data) => {
    if (typeof onChange === "function") {
      onChange(typeof data?.value === "string" ? data.value : "");
    }
  };

  const eyeToggle = (
    <span
      role="button"
      tabIndex={-1}
      onClick={() => setShow((s) => !s)}
      aria-label={show ? hidePasswordAriaLabel : showPasswordAriaLabel}
      style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", background: "none", border: "none", padding: 0, color: "inherit" }}
    >
      {show ? <EyeOffRegular /> : <EyeRegular />}
    </span>
  );

  const input = (
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
      appearance="outline"
      style={{ width: "100%" }}
      contentAfter={eyeToggle}
    />
  );

  if (label != null && label !== "") {
    return (
      <Field label={label} style={style}>
        {input}
      </Field>
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
