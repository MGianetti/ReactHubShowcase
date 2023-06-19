import { render, screen } from "@testing-library/react";

import Typography from "./typography.component";

describe("Component <Typography/>", () => {
  const defaultProps = { type: "h1" };

  const setUpComponent = (props) => {
    const componentProps = { ...defaultProps, ...props };
    return render(<Typography {...componentProps} />);
  };

  it("Should be defined", () => {
    const view = setUpComponent();
    expect(view).toBeDefined();
  });

  it("Should correctly render h1 tag", () => {
    setUpComponent();
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toBeDefined();
  });

  it("Should correctly render h2 tag", () => {
    const type = "h2";
    setUpComponent({ type });
    const h2 = screen.getByRole("heading", { level: 2 });
    expect(h2).toBeDefined();
  });

  it("Should correctly render h3 tag", () => {
    const type = "h3";
    setUpComponent({ type });
    const h3 = screen.getByRole("heading", { level: 3 });
    expect(h3).toBeDefined();
  });

  it("Should correctly render p tag", () => {
    const type = "p";
    setUpComponent({ type });
    const p = screen.getByRole("paragraph");
    expect(p).toBeDefined();
  });

  it("Should correctly render text defined by user", () => {
    const type = "p";
    const children = "Hello";

    setUpComponent({ type, children });
    const personalizedTypography = screen.getByText(children);
    expect(personalizedTypography).toBeDefined();
  });
});
