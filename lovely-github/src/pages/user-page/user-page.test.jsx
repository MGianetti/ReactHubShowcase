import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { dataTestIds as cardDataTestid } from "../../components/card/card.component";
import { dataTestIds as avatarDataTestid } from "../../components/avatar/avatar.component";
import { dataTestIds as typographyDataTestid } from "../../components/typography/typography.component";
import { dataTestIds as listDataTestid } from "../../components/list/list.component";
import { dataTestIds as textButtonTestid } from "../../components/text-button/text-button.component";
import UserPage from "./user-page.component";

describe("Component <UserPage/>", () => {
  const defaultProps = {};

  const setUpComponent = (props) => {
    const componentProps = { ...defaultProps, ...props };
    return render(
      <BrowserRouter>
        <UserPage {...componentProps} />
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
    const avatar = screen.queryAllByTestId(avatarDataTestid.avatar);
    const typographies = screen.queryAllByTestId(
      typographyDataTestid.typography
    );
    const list = screen.queryAllByTestId(listDataTestid.list);
    const textButton = screen.queryAllByTestId(textButtonTestid.textButtonId);
    expect(cards.length).toBe(2);
    expect(avatar.length).toBe(1);
    expect(typographies.length).toBe(3);
    expect(list.length).toBe(1);
    expect(textButton.length).toBe(1);
  });
});
