import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { ErrorComponent } from "./ErrorComponent";

const defaultProps = {
  error: "ErrorTest",
  retry: jest.fn(),
};

const wrapper = (props = {}) => {
  const finalProps = { ...defaultProps, ...props };
  return render(<ErrorComponent {...finalProps} />);
};

describe("@domains/feedback/components/ErrorDomain", () => {
  it("Given a valid call it must render without crashing", () => {
    // Arrange
    const { container } = wrapper();
    // Assert
    expect(container).toMatchSnapshot();
  });

  it("Given a valid retry prop it mus call it when retry button is pressed", () => {
    // Arrange
    const { getByTestId } = wrapper();
    const button = getByTestId("ErrorComponent_retryButton");
    // Act
    fireEvent.click(button);
    // Assert
    expect(defaultProps.retry).toBeCalledTimes(1);
  });

  it("Given a valid error it must render the error message", () => {
    // Arrange
    const { getByTestId } = wrapper();
    const title = getByTestId("ErrorComponent_title");
    // Assert
    expect(title.innerHTML).toBe(defaultProps.error);
  });
});
