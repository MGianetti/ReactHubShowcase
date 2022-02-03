import { Fragment } from "react";
import PropTypes from "prop-types";

import Typography from "../../components/typography";
import Card from "../../components/card";
import Avatar from "../../components/avatar";
import List from "../../components/list";
import TextButton from "../../components/text-button";

import { USER_PAGE } from "./user-page.constants";

import styles from "./user-page.module.scss";

function UserPage(props) {
  const userRepos = [
    { id: "cae76b4267c", content: "LovelyAppRepo" },
    { id: "cae76b4267d", content: "E-CommerceRepo" },
  ];
  return (
    <Fragment>
      <Card className={styles.UserInfoCard}>
        <Avatar />
        <Typography className={styles.UserName} type="h2">
          Mateus Gianetti
        </Typography>
        <div className={styles.UserDetails}>
          12<Typography type="p">{USER_PAGE.REPOSITORIES}</Typography>
        </div>
        <div className={styles.UserDetails}>
          10<Typography type="p">{USER_PAGE.FOLLOWERS}</Typography>
        </div>
      </Card>
      <Card className={styles.UserReposCard}>
        <Typography className={styles.UserReposLabel} type="h2">
          {USER_PAGE.USER_REPOS}
        </Typography>
        <List className={styles.ReposList} itemsArray={userRepos} />
      </Card>
      <TextButton className={styles.BackButton}>Back</TextButton>
    </Fragment>
  );
}

UserPage.propTypes = {};

UserPage.defaultProps = {};

export default UserPage;
