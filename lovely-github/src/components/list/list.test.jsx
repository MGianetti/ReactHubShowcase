import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import List, { dataTestIds } from "./text-button.component";

describe("Describe <List/>", () => {
  const defaultProps = {};
  const setUpComponent = (props) => {
    const componentProps = { ...defaultProps, ...props };
    return render(<List {...componentProps} />);
  };
  it("Should be defined", () => {
    const view = setUpComponent();
    expect(view).toBeDefined();
  });
});
