import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./list.module.scss";

export const dataTestIds = {
  list: "data-testid-list",
  listItem: "data-testid-list-item",
};

function List(props) {
  const { itemsArray, className } = props;
  const listClasses = classNames(styles.List, className);

  return (
    <ul className={listClasses} data-testid={dataTestIds.list}>
      {itemsArray.map((item) => {
        const itemKey = `list-item-${item.id}`;
        const itemDataTestId = `${dataTestIds.listItem}-${item.id}`;

        return (
          <li
            className={styles.ListItem}
            data-testid={itemDataTestId}
            key={itemKey}
          >
            {item.content}
          </li>
        );
      })}
    </ul>
  );
}

List.propTypes = {
  itemsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      content: PropTypes.node,
    })
  ).isRequired,
  className: PropTypes.string,
};

List.defaultProps = {
  className: "",
};

export default List;
