import { render, screen } from "@testing-library/react";

import Card, { dataTestIds } from "./card.component";

describe("Component <Card/>:", () => {
  const defaultProps = { width: 200, minHeight: 300 };

  const setUpComponent = (props) => {
    const componentProps = { ...defaultProps, ...props };
    return render(<Card {...componentProps} />);
  };

  it("Should be defined", () => {
    const view = setUpComponent();
    expect(view).toBeDefined();
  });

  it("Should encapsulate children node elements", () => {
    const spanLabel = "Hello world";
    const children = <span>{spanLabel}</span>;

    setUpComponent({ children });
    const card = screen.getByTestId(dataTestIds.card);
    const innerChildren = screen.getByText(spanLabel);
    expect(card).toBeDefined();
    expect(innerChildren).toBeDefined();
  });
});
