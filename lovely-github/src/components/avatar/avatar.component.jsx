import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./avatar.module.scss";

export const dataTestIds = { avatar: "data-testid-avatar" };

function Avatar(props) {
  const { className, src, alt } = props;

  const avatarClasses = classNames(styles.Avatar, className);

  return (
    <img
      className={avatarClasses}
      src={src}
      alt={alt}
      data-testid={dataTestIds.avatar}
    />
  );
}

Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

Avatar.defaultProps = {
  className: "",
  src: "/default_user.png",
  alt: "",
};

export default Avatar;
