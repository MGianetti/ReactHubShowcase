import { render, screen } from "@testing-library/react";

import UserPage from "./user-page.component";

describe("Component <UserPage/>", () => {
  const defaultProps = {};

  const setUpComponent = (props) => {
    const componentProps = { ...defaultProps, ...props };
    return render(<UserPage {...componentProps} />);
  };

  it("Should be defined", () => {
    const view = setUpComponent();
    expect(view).toBeDefined();
  });
  //   it("Should correctly render screen", () => {
  //     const view = setUpComponent();
  //     expect(view).toBeDefined();
  //   });
});
