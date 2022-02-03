import { render, screen } from "@testing-library/react";

import HomePage from "./home-page.component";

describe("Component <HomePage/>", () => {
  const defaultProps = {};

  const setUpComponent = (props) => {
    const componentProps = { ...defaultProps, ...props };
    return render(<HomePage {...componentProps} />);
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
