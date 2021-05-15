import { render } from "@testing-library/react";
import React from "react";
import { CardsContainer } from "./CardsContainer";

describe("@domains/product/components/CardsContainer", () => {
  let defaultProps, wrapper;

  beforeEach(() => {
    defaultProps = {
      children: <div data-testid="CardsContainer__children" />,
      title: "titleMock",
    };
    wrapper = (props = {}) => {
      const finalProps = { ...defaultProps, ...props };
      return render(<CardsContainer {...finalProps} />);
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

  it("Given a valid call it must render the `title` prop", () => {
    // Arrange
    const { getByTestId } = wrapper();
    const titleContainer = getByTestId("CardsContainer__title");
    // Assert
    expect(titleContainer.innerHTML).toBe(defaultProps.title);
  });

  it("Given a valid call it must render `children` prop", () => {
    // Arrange
    const { container, getByTestId } = wrapper();
    // Act
    const children = getByTestId('CardsContainer__children');
    //Assert
    expect(container).toContainElement(children);
  });
});
