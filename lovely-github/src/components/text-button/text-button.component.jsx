import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./text-button.module.scss";

export const dataTestIds = {
  textButtonId: "data-testid-text-button",
};

function TextButton(props) {
  const { type, className, text, onClick, disabled } = props;

  const textButtonClasses = classNames(styles.TextButton, className);

  return (
    <button
      type={type}
      text={text}
      onClick={onClick}
      className={textButtonClasses}
      disabled={disabled}
      data-testid={dataTestIds.textButtonId}
    >
      {text}
    </button>
  );
}

TextButton.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

TextButton.defaultProps = {
  className: "",
  type: "button",
  text: "TextButton",
  disabled: false,
  onClick: () => undefined,
};

export default TextButton;
