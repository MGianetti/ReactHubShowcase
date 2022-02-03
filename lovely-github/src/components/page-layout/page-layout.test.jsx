import { render, screen } from "@testing-library/react";

import PageLayout, { dataTestIds } from "./page-layout.component";

describe("Describe <PageLayout/>:", () => {
  const defaultProps = {};

  const setUpComponent = (props) => {
    const componentProps = { ...defaultProps, ...props };
    return render(<PageLayout {...componentProps} />);
  };

  it("Should be defined", () => {
    const view = setUpComponent();
    expect(view).toBeDefined();
  });

  it("Should encapsulate children node elements", () => {
    const spanLabel = "Hello world";
    const children = <span>{spanLabel}</span>;

    setUpComponent({ children });
    const pageLayout = screen.getByTestId(dataTestIds.layout);
    const innerChildren = screen.getByText(spanLabel);
    expect(pageLayout).toBeDefined();
    expect(innerChildren).toBeDefined();
  });
});
