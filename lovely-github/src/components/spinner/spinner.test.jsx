import { render, screen } from "@testing-library/react";

import Spinner from "./spinner.component";

describe("Component <Spinner/>", () => {
  const defaultProps = {};

  const setUpComponent = (props) => {
    const componentProps = { ...defaultProps, ...props };
    return render(<Spinner {...componentProps} />);
  };

  it("Should be defined", () => {
    const view = setUpComponent();
    expect(view).toBeDefined();
  });

  it("Should appear by default", () => {
    setUpComponent();
    const spinnerElement = screen.queryByText("Loading...");
    expect(spinnerElement).toBeDefined();
  });
  it("Should not appear when !isLoading", () => {
    const isLoading = false;
    setUpComponent({ isLoading });
    const spinnerElement = screen.queryByText("Loading...");
    expect(spinnerElement).toBeNull();
  });
});
