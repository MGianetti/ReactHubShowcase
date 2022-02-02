import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Input, { dataTestIds } from "./input.component";

describe("Describe <Input/>", () => {
  const defaultProps = {};

  const setUpComponent = (props) => {
    const componentProps = { ...defaultProps, ...props };
    return render(<Input {...componentProps} />);
  };

  it("Should be defined", () => {
    const view = setUpComponent();
    expect(view).toBeDefined();
  });
});
