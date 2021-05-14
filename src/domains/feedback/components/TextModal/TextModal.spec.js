import React from "react";
import { fireEvent, render, within } from "@testing-library/react";
import { TextModal } from "./TextModal";

const defaultProps = {
  open: false,
  text: "TextMock",
  portal: document.createElement("div"),
  onClose: jest.fn(),
};

const wrapper = (props = {}) => {
  const finalProps = { ...defaultProps, ...props };
  return render(<TextModal {...finalProps} />);
};

describe("@domains/feedback/components/TextModal", () => {
  it("Given a valid call it must render without crashing", () => {
    // Arrange
    const { container } = wrapper();
    // Assert
    expect(container).toMatchSnapshot();
  });

  it("Given a true `open` prop it must render the modal inside the portal", () => {
    //Arrange
    wrapper({ open: true });
    const { getByTestId } = within(defaultProps.portal);
    const content = getByTestId("TextModal_container");
    // Act
    const isChild = content.parentNode.isEqualNode(defaultProps.portal);
    // Assert
    expect(isChild).toBe(true);
  });

  it("Given a true `open` prop and a valid `text` prop it must render the passed text inside the portal", () => {
    //Arrange
    wrapper({ open: true });
    const { getByTestId } = within(defaultProps.portal);
    const { innerHTML } = getByTestId("TextModal_content");
    // Assert
    expect(innerHTML).toBe(defaultProps.text);
  });

  it("Given a true `open` prop and a valid `onClose` prop it must call the onClose prop when content is clicked", () => {
    // Arrange
    wrapper({ open: true });
    const { getByTestId } = within(defaultProps.portal);
    const content = getByTestId("TextModal_container");
    //Act
    fireEvent.click(content);
    // Assert
    expect(defaultProps.onClose).toBeCalledTimes(1);
  });
});
