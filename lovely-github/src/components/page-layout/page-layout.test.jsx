import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import PageLayout, { dataTestIds } from "./text-button.component";

describe("Describe <PageLayout/>", () => {
  const defaultProps = {};
  const setUpComponent = (props) => {
    const componentProps = { ...defaultProps, ...props };
    return render(<PageLayout {...componentProps} />);
  };
  it("Should be defined", () => {
    const view = setUpComponent();
    expect(view).toBeDefined();
  });
});
