import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

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
  //   it("Should correctly render screen", () => {
  //     const view = setUpComponent();
  //     expect(view).toBeDefined();
  //   });
});
