import { Fragment } from "react";
import { Link } from "react-router-dom";

import Typography from "../../components/typography";
import Card from "../../components/card";

import { NOT_FOUND } from "./not-found.constants";

import styles from "./not-found.module.scss";

function NotFound() {
  return (
    <Fragment>
      <Card className={styles.NotFoundCard}>
        <Typography type="h2">{NOT_FOUND.MESSAGE}</Typography>
        <Link to="/">{NOT_FOUND.BACK_BUTTON}</Link>
      </Card>
    </Fragment>
  );
}

export default NotFound;
