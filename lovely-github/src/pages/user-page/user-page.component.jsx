import { Fragment, useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Typography from "../../components/typography";
import Card from "../../components/card";
import Avatar from "../../components/avatar";
import List from "../../components/list";
import TextButton from "../../components/text-button";
import Spinner from "../../components/spinner";

import reposService from "../../services/repos";

import { USER_PAGE } from "./user-page.constants";

import styles from "./user-page.module.scss";

function UserPage() {
  const navigate = useNavigate();
  const isMountedRef = useRef(null);

  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isReposEmpty, setIsReposEmpty] = useState(true);

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

  const handleUserWithReposState = (reposArray) => {
    const [firstRepo] = reposArray;
    const { owner } = firstRepo;
    const { login, avatar_url } = owner;

    const normalizedRepos = reposArray.reduce((accRepos, actualRepo) => {
      const { name, id, description } = actualRepo;

      const normalizedDescription =
        description === null ? USER_PAGE.EMPTY_REPOS : description;

      const content = `${name}: ${normalizedDescription}`;

      return [...accRepos, { content, id: `${id}` }];
    }, []);

    setUserRepos(normalizedRepos);
    setOwnerLogin(login);
    setOwnerAvatar(avatar_url);
    setIsReposEmpty(false);
    setIsPageLoading(false);
  };

  const handleUserWithoutReposState = () => {
    setIsReposEmpty(true);
    setIsPageLoading(false);
  };

  const stateHandleMapper = {
    hasRepos: (reposArray) => handleUserWithReposState(reposArray),
    emptyRepos: () => handleUserWithoutReposState(),
  };

  useEffect(() => {
    isMountedRef.current = true;

    if (isMountedRef.current && isPageLoading) {
      fetchRepositories().then((reposArray) => {
        const handlerKey = reposArray.length > 0 ? "hasRepos" : "emptyRepos";
        stateHandleMapper[handlerKey](reposArray);
      });
    }

    return () => (isMountedRef.current = false);
  });

  const reposCounter = userRepos.length;

  return (
    <Fragment>
      {isPageLoading ? (
        <Spinner isLoading={isPageLoading} />
      ) : (
        <Fragment>
          {isReposEmpty ? (
            <Card className={styles.UserInfoCard}>
              <Avatar />
              <Typography className={styles.UserName} type="h2">
                {username}
              </Typography>
              <Typography type="p">{USER_PAGE.EMPTY_REPOS}</Typography>
            </Card>
          ) : (
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
            </Fragment>
          )}
          <TextButton className={styles.BackButton} onClick={handleBackClick}>
            {USER_PAGE.BACK_BUTTON}
          </TextButton>
        </Fragment>
      )}
    </Fragment>
  );
}

export default UserPage;
