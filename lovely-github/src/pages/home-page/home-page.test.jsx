import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { dataTestIds as cardDataTestid } from "../../components/card/card.component";
import { dataTestIds as avatarDataTestid } from "../../components/avatar/avatar.component";
import { dataTestIds as typographyDataTestid } from "../../components/typography/typography.component";
import { dataTestIds as textButtonTestid } from "../../components/text-button/text-button.component";
import { dataTestIds as searchButtonDataTestid } from "../../components/search-button/search-button.component";
import HomePage from "./home-page.component";

describe("Component <HomePage/>", () => {
  const defaultProps = {};

  const setUpComponent = (props) => {
    const componentProps = { ...defaultProps, ...props };
    return render(
      <BrowserRouter>
        <HomePage {...componentProps} />
      </BrowserRouter>
    );
  };

  it("Should be defined", () => {
    const view = setUpComponent();
    expect(view).toBeDefined();
  });

  it("Should correctly render screen", () => {
    setUpComponent();
    const cards = screen.queryAllByTestId(cardDataTestid.card);
    const searchButton = screen.queryAllByTestId(
      searchButtonDataTestid.searchButton
    );
    const avatar = screen.queryAllByTestId(avatarDataTestid.avatar);
    const typographies = screen.queryAllByTestId(
      typographyDataTestid.typography
    );
    const textButton = screen.queryAllByTestId(textButtonTestid.textButtonId);
    expect(cards.length).toBe(2);
    expect(searchButton.length).toBe(1);
    expect(avatar.length).toBe(1);
    expect(typographies.length).toBe(4);
    expect(textButton.length).toBe(1);
  });
});
