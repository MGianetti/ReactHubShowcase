import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TextButton, { dataTestIds } from "./text-button.component";

describe("Describe <TextButton/>", () => {
  const defaultProps = {};

  const setUpComponent = (props) => {
    const componentProps = { ...defaultProps, ...props };
    return render(<TextButton {...componentProps} />);
  };

  it("Should be defined", () => {
    const view = setUpComponent();
    expect(view).toBeDefined();
  });
});
