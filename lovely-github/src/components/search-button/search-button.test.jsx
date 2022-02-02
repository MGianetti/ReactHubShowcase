import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchButton, { dataTestIds } from "./search-button.component";

describe("Describe <SearchButton/>", () => {
  const defaultProps = {};

  const setUpComponent = (props) => {
    const componentProps = { ...defaultProps, ...props };
    return render(<SearchButton {...componentProps} />);
  };

  it("Should be defined", () => {
    const view = setUpComponent();
    expect(view).toBeDefined();
  });
});
