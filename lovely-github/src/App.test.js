import { render } from "@testing-library/react";
import App from "./App";

test("App should not break", () => {
  const view = render(<App />);
  expect(view).toBeDefined();
});
