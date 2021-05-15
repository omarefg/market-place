import { render } from "@testing-library/react";
import { Footer } from "./Footer";

describe("@domains/layout/components/Footer", () => {
  let wrapper, defaultProps;
  beforeEach(() => {
    defaultProps = {
      children: <div data-testid="Footer_children" />,
    };
    wrapper = (props = {}) => {
      const finalProps = { ...defaultProps, ...props };
      return render(<Footer {...finalProps} />);
    };
  });
  afterEach(() => {});
  it("Given a valid call it must render without crashing", () => {
    // Arrange
    const { container } = wrapper();
    //Assert
    expect(container).toMatchSnapshot();
  });

  it("Given valid children it must render that node", () => {
    // Arrange
    const { getByTestId } = wrapper();
    const children = getByTestId("Footer_children");
    const root = getByTestId("Footer_root");
    // Act
    const renderChild = children.parentNode.isEqualNode(root);
    // Assert
    expect(renderChild).toBe(true);
  });
});
