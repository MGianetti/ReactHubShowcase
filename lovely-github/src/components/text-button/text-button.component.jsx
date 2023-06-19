import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./text-button.module.scss";

export const dataTestIds = {
  textButtonId: "data-testid-text-button",
};

function TextButton(props) {
  const { type, className, children, onClick, disabled } = props;

  const textButtonClasses = classNames(styles.TextButton, className, {
    [styles.Disabled]: disabled,
  });

  return (
    <button
      type={type}
      onClick={onClick}
      className={textButtonClasses}
      disabled={disabled}
      data-testid={dataTestIds.textButtonId}
    >
      {children}
    </button>
  );
}

TextButton.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

TextButton.defaultProps = {
  className: "",
  type: "button",
  children: "TextButton",
  disabled: false,
  onClick: () => undefined,
};

export default TextButton;
