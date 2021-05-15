import React from "react";
import { render } from "@testing-library/react";
import { ProductsList } from "./ProductsList";

describe("@domains/product/components/ProductList", () => {
  let defaultProps, wrapper;

  beforeEach(() => {
    defaultProps = {
      feedbackComponents: {
        Loader: jest.fn(() => null),
        ErrorComponent: jest.fn(() => null),
      },
      products: [],
      isLoading: false,
      error: "",
      handleAddToCart: jest.fn(),
      productComponents: {
        Card: jest.fn(() => null),
        CardsContainer: jest.fn(() => null),
      },
      handleSetProducts: jest.fn(),
    };

    wrapper = (props = {}) => {
      const finalProps = { ...defaultProps, ...props };
      return render(<ProductsList {...finalProps} />);
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Given a valid call it must render without crashing", () => {
    //Arrange
    const { container } = wrapper();
    // Assert
    expect(container).toMatchSnapshot();
  });
});
