import React from "react";
import { render } from "@testing-library/react";
import { FeedbackProvider } from "./FeedbackAdapters";

const defaultProps = {
  handlersBuilder: () => ({}),
  components: {
    TextModal: () => <div />,
  },
  useCases: {},
  children: <div />,
  providerMetadata: { portal: document.createElement("div") },
};

const wrapper = (props = {}) => {
  const finalProps = { ...defaultProps, ...props };
  return render(<FeedbackProvider {...finalProps} />);
};

describe("@domains/feedback/adapters/FeedbackProvider", () => {
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
