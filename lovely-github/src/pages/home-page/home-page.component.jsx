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

import { HOME_PAGE } from "./home-page.constants";

import styles from "./home-page.module.scss";

function HomePage(props) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleInputChange = (event) => {
    setUserName(event.currentTarget.value);
  };

  const handleSeeMoreClick = () => {
    navigate("/user/mg");
  };

  return (
    <div>
      <Card className={styles.SearchCard}>
        <Typography className={styles.AppTitle} type="h1">
          {HOME_PAGE.APP_TITLE}
        </Typography>
        <div className={styles.SearchForm}>
          <Input value={userName} onChange={handleInputChange} />
          <SearchButton className={styles.SearchButton} />
        </div>
      </Card>
      <Card className={styles.UserTeaserCard}>
        <Avatar />
        <Typography className={styles.UserName} type="h1">
          Mateus Gianetti
        </Typography>
        <Typography className={styles.Username} type="h2">
          #MGianetti
        </Typography>
        <Typography className={styles.UserBio} type="h3">
          A focused React.js developer
        </Typography>
        <TextButton
          className={styles.SeeMoreButton}
          onClick={handleSeeMoreClick}
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
