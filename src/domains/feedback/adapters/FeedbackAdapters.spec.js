import React from "react";
import { render } from "@testing-library/react";
import { FeedbackProvider } from "./FeedbackAdapters";

describe("@domains/feedback/adapters/FeedbackProvider", () => {
  let defaultProps, wrapper;

  beforeEach(() => {
    defaultProps = {
      handlersBuilder: () => ({}),
      components: {
        TextModal: () => <div />,
      },
      useCases: {},
      children: <div />,
      providerMetadata: { portal: document.createElement("div") },
    };

    wrapper = (props = {}) => {
      const finalProps = { ...defaultProps, ...props };
      return render(<FeedbackProvider {...finalProps} />);
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

  it("Given a valid call it must render two nodes, children and TextModal", () => {
    //Arrange
    const { container } = wrapper();
    //Assert
    expect(container.childNodes.length).toBe(2);
  });
});
