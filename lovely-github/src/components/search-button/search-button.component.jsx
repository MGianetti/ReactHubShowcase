import PropTypes from "prop-types";
import classNames from "classnames";
import { AiOutlineSearch } from "react-icons/ai";

import styles from "./search-button.module.scss";

export const dataTestIds = {
  searchButton: "datat-testid-search-button",
  searchIcon: "data-testid-search-icon",
};

function SearchButton(props) {
  const { className, onClick, disabled } = props;

  const textButtonClasses = classNames(styles.SearchButton, className);

  return (
    <button
      type="button"
      onClick={onClick}
      className={textButtonClasses}
      disabled={disabled}
      data-testid={dataTestIds.searchButton}
    >
      <AiOutlineSearch data-testid={dataTestIds.searchIcon} size={20} />
    </button>
  );
}

SearchButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

SearchButton.defaultProps = {
  className: "",
  disabled: false,
  onClick: () => undefined,
};

export default SearchButton;
