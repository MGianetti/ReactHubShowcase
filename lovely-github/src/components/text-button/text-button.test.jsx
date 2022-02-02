import React from "react";
import { render, screen } from "@testing-library/react";

import TextButton, { dataTestIds } from "./text-button.component";

describe("Describe <TextButton/>", () => {
  const setUpComponent = (props) => {
    return render(<TextButton {...props} />);
  };

  it("Should be defined", () => {
    const view = setUpComponent();
    expect(view).toBeDefined();
  });

  it("Should render correct text when passed via props", () => {
    const text = "Awesome text";
    setUpComponent({ text });
    const customTextButton = screen.getByText(text);
    expect(customTextButton).toBeInTheDocument();
  });

  it("Should render enabled as default", () => {
    setUpComponent();
    const textButton = screen.getByTestId(dataTestIds.textButtonId);
    expect(textButton).toBeEnabled();
  });

  it("Should render disabled if prop disabled is true", () => {
    const disabled = true;
    setUpComponent({ disabled });
    const textButton = screen.getByTestId(dataTestIds.textButtonId);
    expect(textButton).toBeDisabled();
  });
});
