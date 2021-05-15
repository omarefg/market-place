import React from "react";
import { render } from "@testing-library/react";
import { ProductProvider } from "./ProductAdapters";

describe("@domains/product/adapters/ProductProvider", () => {
  let defaultProps, wrapper;

  beforeEach(() => {
    defaultProps = {
      components: {},
      children: <div data-testid="ProductAdapter__children" />,
      useCases: {},
      handlersBuilder: jest.fn(),
    };

    wrapper = (props = {}) => {
      const finalProps = { ...defaultProps, ...props };
      return render(<ProductProvider {...finalProps} />);
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Given a valid call it must render withot crashing", () => {
    // Arrange
    const { container } = wrapper();
    // Assert
    expect(container).toMatchSnapshot();
  });

  it("Given a valid call it must render one child node", () => {
    // Arrange
    const { container } = wrapper();
    // Act
    const hasOneChildNode = container.childNodes.length === 1;
    // Assert
    expect(hasOneChildNode).toBe(true);
  });

  it("Given a valid call it must render `children` prop", () => {
    // Arrange
    const { container, getByTestId } = wrapper();
    // Act
    const children = getByTestId("ProductAdapter__children");
    //Assert
    expect(container).toContainElement(children);
  });

  it("Given a valid call it must call handlersBuilder to generate builders in value", () => {
    // Act
    wrapper();
    //Assert
    expect(defaultProps.handlersBuilder).toBeCalledTimes(1);
  });
});
