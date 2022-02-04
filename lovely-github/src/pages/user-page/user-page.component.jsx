import { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Typography from "../../components/typography";
import Card from "../../components/card";
import Avatar from "../../components/avatar";
import List from "../../components/list";
import TextButton from "../../components/text-button";

import reposService from "../../services/repos";

import { USER_PAGE } from "./user-page.constants";

import styles from "./user-page.module.scss";

function UserPage() {
  const navigate = useNavigate();

  const [userRepos, setUserRepos] = useState([]);
  const [ownerLogin, setOwnerLogin] = useState("");
  const [ownerAvatar, setOwnerAvatar] = useState("/default_user.png");
  const username = useParams().username;

  const handleBackClick = () => {
    navigate("/");
  };

  const fetchRepositories = async () => {
    const repositories = await reposService.getRepositories(username);
    return repositories;
  };

  useEffect(() => {
    fetchRepositories().then((reposArray) => {
      const [firstRepo] = reposArray;
      const { owner } = firstRepo;
      const { login, avatar_url } = owner;

      const normalizedRepos = reposArray.reduce((accRepos, actualRepo) => {
        const { name, id } = actualRepo;
        return [...accRepos, { content: name, id: `${id}` }];
      }, []);
      setUserRepos(normalizedRepos);
      setOwnerLogin(login);
      setOwnerAvatar(avatar_url);
    });
  });

  const reposCounter = userRepos.length;

  return (
    <Fragment>
      <Card className={styles.UserInfoCard}>
        <Avatar src={ownerAvatar} />
        <Typography className={styles.UserName} type="h2">
          {ownerLogin}
        </Typography>
        <div className={styles.UserDetails}>
          {reposCounter}
          <Typography type="p">{USER_PAGE.REPOSITORIES}</Typography>
        </div>
      </Card>
      <Card className={styles.UserReposCard}>
        <Typography className={styles.UserReposLabel} type="h2">
          {USER_PAGE.USER_REPOS}
        </Typography>
        <List className={styles.ReposList} itemsArray={userRepos} />
      </Card>
      <TextButton className={styles.BackButton} onClick={handleBackClick}>
        {USER_PAGE.BACK_BUTTON}
      </TextButton>
    </Fragment>
  );
}

export default UserPage;
