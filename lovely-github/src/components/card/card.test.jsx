import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Card, { dataTestIds } from "./card.component";

describe("Describe <Card/>", () => {
  const defaultProps = {};

  const setUpComponent = (props) => {
    const componentProps = { ...defaultProps, ...props };
    return render(<Card {...componentProps} />);
  };

  it("Should be defined", () => {
    const view = setUpComponent();
    expect(view).toBeDefined();
  });
});
