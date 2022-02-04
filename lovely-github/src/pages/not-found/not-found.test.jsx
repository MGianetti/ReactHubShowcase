import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import NotFound from "./not-found.component";
import { NOT_FOUND } from "./not-found.constants";

describe("Component <NotFound/>", () => {
  const setUpComponent = (props) => {
    return render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
  };

  it("Should be defined", () => {
    const view = setUpComponent();
    expect(view).toBeDefined();
  });

  it("Should correctly render screen", () => {
    setUpComponent();
    const notFoundMessage = screen.getByText(NOT_FOUND.MESSAGE);
    const notFoundBackButton = screen.getByText(NOT_FOUND.BACK_BUTTON);
    expect(notFoundMessage).toBeDefined();
    expect(notFoundBackButton).toBeDefined();
  });
});
