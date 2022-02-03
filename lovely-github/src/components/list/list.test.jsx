import { render, screen } from "@testing-library/react";

import List, { dataTestIds } from "./list.component";

describe("Component <List/>", () => {
  const defaultProps = {
    itemsArray: [
      { id: "a21fbb456", content: <div>First</div> },
      { id: "a21fbb457", content: <div>Second</div> },
    ],
  };

  const setUpComponent = (props) => {
    const componentProps = { ...defaultProps, ...props };
    return render(<List {...componentProps} />);
  };

  it("Should be defined", () => {
    const view = setUpComponent();
    expect(view).toBeDefined();
  });

  it("Should correclty render a list from itemsArray", () => {
    setUpComponent();
    const firstComponentDataTest = `${dataTestIds.listItem}-${defaultProps.itemsArray[0].id}`;
    const firstComponent = screen.getByTestId(firstComponentDataTest);

    const secondComponentDataTest = `${dataTestIds.listItem}-${defaultProps.itemsArray[1].id}`;
    const secondComponent = screen.getByTestId(secondComponentDataTest);

    expect(firstComponent).toBeDefined();
    expect(secondComponent).toBeDefined();
  });
});
