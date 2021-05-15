import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Card } from "./Card";

describe("@domains/product/components/Card", () => {
  let defaultProps, wrapper;

  beforeEach(() => {
    defaultProps = {
      img: "imageMock",
      alt: "altMock",
      caption: "captionMock",
      onAddToCart: jest.fn(),
      type: "typeMock",
      id: "idMock",
    };

    wrapper = (props = {}) => {
      const finalProps = { ...defaultProps, ...props };
      return render(<Card {...finalProps} />);
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Given a valid call it must render without crashing", () => {
    // Arrange
    const { container } = wrapper();
    // Assert
    expect(container).toMatchSnapshot();
  });

  it("Given a click event inside add button it must call onAddToCart prop", () => {
    // Arrange
    const { getByTestId } = wrapper();
    const button = getByTestId("Card__addButton");
    // Act
    fireEvent.click(button);
    // Assert
    expect(defaultProps.onAddToCart).toBeCalledTimes(1);
  });

  it("Given a click event inside add button it must call onAddToCartProp with type and id information", () => {
    // Arrange
    const { getByTestId } = wrapper();
    const button = getByTestId("Card__addButton");
    // Act
    fireEvent.click(button);
    // Assert
    expect(defaultProps.onAddToCart).toBeCalledWith({
      type: defaultProps.type,
      id: defaultProps.id,
    });
  });
});
