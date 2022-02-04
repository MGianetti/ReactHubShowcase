import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./spinner.module.scss";
import { Fragment } from "react";

export const dataTestIds = { spinner: "data-testid-spinner" };

function Spinner(props) {
  const { className, isLoading } = props;

  const spinnerClasses = classNames(styles.Spinner, className);

  return (
    <Fragment>
      {isLoading && (
        <div className={spinnerClasses} data-testid={dataTestIds.spinner}>
          Loading...
        </div>
      )}
    </Fragment>
  );
}

Spinner.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};

Spinner.defaultProps = {
  className: "",
  isLoading: false,
};

export default Spinner;
