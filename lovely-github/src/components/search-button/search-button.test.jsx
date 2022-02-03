import { render, screen } from "@testing-library/react";

import SearchButton, { dataTestIds } from "./search-button.component";

describe("Component <SearchButton/>", () => {
  const defaultProps = {};

  const setUpComponent = (props) => {
    const componentProps = { ...defaultProps, ...props };
    return render(<SearchButton {...componentProps} />);
  };

  it("Should be defined", () => {
    const view = setUpComponent();
    expect(view).toBeDefined();
  });

  it("Should render button correctly", () => {
    setUpComponent();
    const searchButton = screen.getByTestId(dataTestIds.searchButton);
    const searchIcon = screen.getByTestId(dataTestIds.searchIcon);
    expect(searchButton).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
  });

  it("Should render enabled as default", () => {
    setUpComponent();
    const searchButton = screen.getByTestId(dataTestIds.searchButton);
    expect(searchButton).toBeEnabled();
  });

  it("Should render disabled if prop disabled is true", () => {
    const disabled = true;
    setUpComponent({ disabled });
    const searchButton = screen.getByTestId(dataTestIds.searchButton);
    expect(searchButton).toBeDisabled();
  });
});
