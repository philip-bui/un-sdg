import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import App from "./App";

// Note: test renderer must be required after react-native.
describe("App", () => {
  it("renders correctly", async () => {
    const { unmount } = render(<App />);
    unmount();
  });
});
