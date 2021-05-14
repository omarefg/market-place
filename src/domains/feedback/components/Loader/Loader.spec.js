import React from "react";
import { render } from "@testing-library/react";
import { Loader } from "./Loader";

describe("@domains/feedback/components/Loader", () => {
  it("Given a valid call it must render without crashing", () => {
    // Arrange
    const { container } = render(<Loader />);
    // Assert
    expect(container).toMatchSnapshot();
  });

  it("Given a valid call it must render a valid loading message", () => {
    // Arrange
    const { getByTestId } = render(<Loader />);
    const message = getByTestId("Loader_title");
    // Assert
    expect(message.innerHTML).toBe("Loading...");
  });
});
