import { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./input.module.scss";

export const dataTestIds = { input: "data-testid-input" };

function Input(props) {
  const { className, onChange, value, placeholder, errorMessage, hasError } =
    props;

  const inputClasses = classNames(styles.Input, className, {
    [styles.HasError]: hasError,
  });

  return (
    <div>
      <input
        value={value}
        className={inputClasses}
        data-testid={dataTestIds.input}
        onChange={onChange}
        placeholder={placeholder}
      />
      {hasError && <span className={styles.ErrorMessage}>{errorMessage}</span>}
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
};

Input.defaultProps = {
  className: "",
  placeholder: "",
  hasError: false,
  errorMessage: "",
  onChange: () => undefined,
};

export default Input;
