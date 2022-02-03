import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./input.module.scss";

export const dataTestIds = { input: "data-testid-input" };

function Input(props) {
  const { className, onChange, value, placeholder } = props;

  const inputClasses = classNames(styles.Input, className);

  return (
    <input
      value={value}
      className={inputClasses}
      data-testid={dataTestIds.input}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
};

Input.defaultProps = {
  className: "",
  placeholder: "",
  onChange: () => undefined,
};

export default Input;
