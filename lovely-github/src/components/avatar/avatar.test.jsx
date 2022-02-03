import { render, screen } from "@testing-library/react";

import Avatar, { dataTestIds } from "./avatar.component";

describe("Component <Avatar/>", () => {
  const defaultProps = {};

  const setUpComponent = (props) => {
    const componentProps = { ...defaultProps, ...props };
    return render(<Avatar {...componentProps} />);
  };

  it("Should be defined", () => {
    const view = setUpComponent();
    expect(view).toBeDefined();
  });

  it("Should allow dynamic alt description", () => {
    const alt = "User Avatar";
    setUpComponent({ alt });
    const avatar = screen.getByTestId(dataTestIds.avatar);
    expect(avatar).toBeDefined();
    expect(avatar).toHaveAttribute("alt", alt);
  });

  it("Should allow dynamic image source", () => {
    const src = "https://avatars.githubusercontent.com/u/39316813?v=4";
    setUpComponent({ src });
    const avatar = screen.getByTestId(dataTestIds.avatar);
    expect(avatar).toBeDefined();
    expect(avatar).toHaveAttribute("src", src);
  });
});
