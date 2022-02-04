import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

import Typography from "../../components/typography";
import Input from "../../components/input";
import SearchButton from "../../components/search-button";
import Card from "../../components/card";
import Avatar from "../../components/avatar";
import TextButton from "../../components/text-button";

import userServices from "../../services/user";

import { HOME_PAGE } from "./home-page.constants";

import styles from "./home-page.module.scss";

function HomePage(props) {
  const navigate = useNavigate();

  const [userAvatar, setUserAvatar] = useState("/default_user.png");
  const [userLogin, setUserLogin] = useState("");
  const [userName, setUserName] = useState("");
  const [userBio, serUserBio] = useState("");

  const [userNameSearch, setUserNameSearch] = useState("");
  const [inputHasError, setInputHasError] = useState(false);

  const handleInputChange = (event) => {
    setUserNameSearch(event.currentTarget.value);
  };

  const handleSearchButtonClick = async () => {
    if (userNameSearch === "") {
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
      setUserNameSearch("");
    } catch (error) {
      // handle error
    }
  };

  const handleSeeMoreClick = () => {
    navigate(`/user/${userLogin}`);
  };

  const isSeeMoreDisabled = userName === "";

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
            errorMessage="Type an username"
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

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
