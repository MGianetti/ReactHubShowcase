import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Typography from "../../components/typography";
import Input from "../../components/input";
import SearchButton from "../../components/search-button";
import Card from "../../components/card";
import Avatar from "../../components/avatar";
import TextButton from "../../components/text-button";

import userServices from "../../services/user";

import { HOME_PAGE, EMPTY, DEFAULT_AVATAR } from "./home-page.constants";

import styles from "./home-page.module.scss";

function HomePage() {
  const navigate = useNavigate();

  const [userAvatar, setUserAvatar] = useState(DEFAULT_AVATAR);
  const [userLogin, setUserLogin] = useState(EMPTY);
  const [userName, setUserName] = useState(EMPTY);
  const [userBio, serUserBio] = useState(EMPTY);

  const [userNameSearch, setUserNameSearch] = useState(EMPTY);
  const [inputHasError, setInputHasError] = useState(false);

  const handleInputChange = (event) => {
    setUserNameSearch(event.currentTarget.value);
  };

  const handleSearchButtonClick = async () => {
    if (userNameSearch === EMPTY) {
      setInputHasError(true);
      return;
    }
    try {
      const { avatar_url, login, name, bio } = await userServices.getDetails(
        userNameSearch
      );
      setUserAvatar(avatar_url);
      setUserLogin(login);
      setUserName(name);
      serUserBio(bio);
      setInputHasError(false);
      setUserNameSearch(EMPTY);
    } catch (error) {
      setUserAvatar(DEFAULT_AVATAR);
      setUserLogin(EMPTY);
      setUserName(EMPTY);
      serUserBio(EMPTY);
      setInputHasError(false);
      setUserNameSearch(EMPTY);
      alert(HOME_PAGE.USER_NOT_FOUND);
    }
  };

  const handleSeeMoreClick = () => {
    navigate(`/user/${userLogin}`);
  };

  const isSeeMoreDisabled = userName === EMPTY;

  return (
    <div>
      <Card className={styles.SearchCard}>
        <Typography className={styles.AppTitle} type="h1">
          {HOME_PAGE.APP_TITLE}
        </Typography>
        <div className={styles.SearchForm}>
          <Input
            value={userNameSearch}
            onChange={handleInputChange}
            hasError={inputHasError}
            errorMessage={HOME_PAGE.EMPTY_ERROR}
          />
          <SearchButton
            className={styles.SearchButton}
            onClick={handleSearchButtonClick}
          />
        </div>
      </Card>
      <Card className={styles.UserTeaserCard}>
        <Avatar src={userAvatar} />
        <Typography className={styles.UserName} type="h1">
          {userName}
        </Typography>
        <Typography className={styles.Username} type="h2">
          {userLogin}
        </Typography>
        <Typography className={styles.UserBio} type="h3">
          {userBio}
        </Typography>
        <TextButton
          className={styles.SeeMoreButton}
          onClick={handleSeeMoreClick}
          disabled={isSeeMoreDisabled}
        >
          {HOME_PAGE.TEXT_BUTTON_LABEL}
        </TextButton>
      </Card>
    </div>
  );
}

export default HomePage;
