import PropTypes from "prop-types";

/**
 * Visually hidden username field so password managers can tie "change password" / "new password" flows to an account.
 * Not display:none — many UAs ignore fields that are not rendered for autofill.
 */
const HiddenUsernameForPasswordManager = ({ username, id = "password-manager-username" }) => {
  if (username == null || username === "") return null;
  return (
    <input
      type="text"
      id={id}
      name="username"
      autoComplete="username"
      value={username}
      readOnly
      tabIndex={-1}
      aria-hidden="true"
      style={{
        position: "absolute",
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        border: 0,
      }}
    />
  );
};

HiddenUsernameForPasswordManager.propTypes = {
  username: PropTypes.string,
  id: PropTypes.string,
};

export default HiddenUsernameForPasswordManager;
