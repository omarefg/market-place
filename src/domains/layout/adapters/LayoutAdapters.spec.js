import React from "react";
import { render } from "@testing-library/react";
import { LayoutProvider } from "./LayoutAdapters";

describe("@domains/layout/adapters/LayoutProvider", () => {
  let wrapper, defaultProps;
  beforeEach(() => {
    defaultProps = {
      components: {
        Footer: () => <footer />,
      },
      children: <div />,
      higherProps: {
        useShoppingCart: jest.fn(() => ({
          state: { cart: [], errors: {}, loaders: {} },
          components: { BuyButton: () => <button /> },
          handlers: { handleBuyClick: jest.fn() },
          metadata: {
            loadersKeys: {},
            errorsKeys: {},
          },
        })),
        useFeedback: jest.fn(() => ({
          components: {},
        })),
      },
    };

    wrapper = (props = {}) => {
      const finalProps = { ...defaultProps, ...props };
      return render(<LayoutProvider {...finalProps} />);
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Given a valid call it must render without crashing", () => {
    //Arrange
    const { container } = wrapper();
    //Assert
    expect(container).toMatchSnapshot();
  });

  it("Given a valid call it must render two nodes, children and Footer", () => {
    //Arrange
    const { container } = wrapper();
    //Assert
    expect(container.childNodes.length).toBe(2);
  });

  it("Given valid props it must Call useFeedback and useShoppingCart", () => {
    //Arrange
    wrapper();
    //Assert
    expect(defaultProps.higherProps.useShoppingCart).toBeCalledTimes(1);
    expect(defaultProps.higherProps.useFeedback).toBeCalledTimes(1);
  });
});
