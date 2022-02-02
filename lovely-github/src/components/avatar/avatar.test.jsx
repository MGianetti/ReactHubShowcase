import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Avatar, { dataTestIds } from "./avatar.component";

describe("Describe <Avatar/>", () => {
  const defaultProps = {};

  const setUpComponent = (props) => {
    const componentProps = { ...defaultProps, ...props };
    return render(<Avatar {...componentProps} />);
  };

  it("Should be defined", () => {
    const view = setUpComponent();
    expect(view).toBeDefined();
  });
});
