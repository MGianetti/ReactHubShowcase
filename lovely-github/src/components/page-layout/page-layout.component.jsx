import { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./page-layout.module.scss";

export const dataTestIds = { layout: "data-testid-page-layout" };

function PageLayout(props) {
  const { children, className } = props;

  const layoutClasses = classNames(styles.Layout, className);

  return (
    <div className={layoutClasses} data-testid={dataTestIds.layout}>
      {children}
    </div>
  );
}

PageLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

PageLayout.defaultProps = {
  className: "",
  children: <Fragment></Fragment>,
};

export default PageLayout;
