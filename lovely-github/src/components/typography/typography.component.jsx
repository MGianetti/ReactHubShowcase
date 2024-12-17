import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./typography.module.scss";

export const dataTestIds = { typography: "data-testid-typography" };

const typeMapper = {
  h1: (text, className) => {
    return (
      <h1 data-testid={dataTestIds.typography} className={className}>
        {text}
      </h1>
    );
  },
  h2: (text, className) => {
    return (
      <h2 data-testid={dataTestIds.typography} className={className}>
        {text}
      </h2>
    );
  },
  h3: (text, className) => {
    return (
      <h3 data-testid={dataTestIds.typography} className={className}>
        {text}
      </h3>
    );
  },
  p: (text, className) => {
    return (
      <p
        role="paragraph"
        data-testid={dataTestIds.typography}
        className={className}
      >
        {text}
      </p>
    );
  },
};

function Typography(props) {
  const { className, children, type } = props;

  const typographyClasses = classNames(styles.Typography, className);

  const typographyElement = typeMapper[type](children, typographyClasses);

  return typographyElement;
}

Typography.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Typography.defaultProps = {
  className: "",
  children: "",
};

export default Typography;
