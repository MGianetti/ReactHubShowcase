import { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./card.module.scss";

export const dataTestIds = { card: "data-testid-card" };

function Card(props) {
  const { minWidth, minHeight, className, children } = props;

  const widthAndMinHeight = {
    minWidth: `${minWidth}px`,
    minHeight: `${minHeight}px`,
  };

  const cardClasses = classNames(styles.Card, className);
  return (
    <div
      style={widthAndMinHeight}
      className={cardClasses}
      data-testid={dataTestIds.card}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  minWidth: PropTypes.number,
  minHeight: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
};

Card.defaultProps = {
  minWidth: 400,
  minHeight: 100,
  className: "",
  children: <Fragment></Fragment>,
};

export default Card;
