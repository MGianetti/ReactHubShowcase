import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

import { dataTestIds as cardDataTestid } from "../../components/card/card.component";
import { dataTestIds as avatarDataTestid } from "../../components/avatar/avatar.component";
import { dataTestIds as typographyDataTestid } from "../../components/typography/typography.component";
import { dataTestIds as listDataTestid } from "../../components/list/list.component";
import { dataTestIds as textButtonTestid } from "../../components/text-button/text-button.component";
import UserPage from "./user-page.component";

describe("Component <UserPage/>", () => {
  const setUpComponent = () => {
    return render(
      <BrowserRouter>
        <UserPage />
      </BrowserRouter>
    );
  };

  it("Should correctly render screen", async () => {
    act(() => {
      const view = setUpComponent();
      expect(view).toBeDefined();
    });

    const cards = screen.queryAllByTestId(cardDataTestid.card);
    const avatar = screen.queryAllByTestId(avatarDataTestid.avatar);
    const typographies = screen.queryAllByTestId(
      typographyDataTestid.typography
    );
    const list = screen.queryAllByTestId(listDataTestid.list);
    const textButton = screen.queryAllByTestId(textButtonTestid.textButtonId);
    expect(cards.length).toBe(0);
    expect(avatar.length).toBe(0);
    expect(typographies.length).toBe(0);
    expect(list.length).toBe(0);
    expect(textButton.length).toBe(0);
  });
});
