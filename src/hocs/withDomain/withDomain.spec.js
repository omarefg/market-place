import { render } from "@testing-library/react";
import React from "react";
import { withDomainBuilder } from "./withDomain";

describe("@HOCS/withDomain", () => {
  let ProviderMock, ComponentMock, defaultParams;
  beforeEach(() => {
    ProviderMock = ({ children }) => <div>{children}</div>;
    ComponentMock = () => <div />;

    defaultParams = {
      utils: {
        formatters: {
          nameFunction: jest.fn((name, body) => {
            return {
              [name](...args) {
                return body(...args);
              },
            }[name];
          }),
        },
      },
      hocName: "hocName",
      context: {},
      domainAdapterPropName: "domainAdapterPropName",
      useContext: jest.fn(() => {}),
      components: {},
      Provider: ProviderMock,
      providerMetadata: {},
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Given valid params it must render without crashing", () => {
    // Arrange
    const params = { ...defaultParams };
    // Act
    const WithDomainComponent = withDomainBuilder(params)(ComponentMock);
    const { container } = render(<WithDomainComponent />);
    // Assert
    expect(container).toMatchSnapshot();
  });

  it("Given valid params it must return a function", () => {
    //Arrange
    const params = { ...defaultParams };
    //Act
    const withDomain = withDomainBuilder(params);
    //Assert
    expect(typeof withDomain).toBe("function");
  });

  it('Given valid params it must call `nameFunction` param', () => {
    //Arrange
    const params = { ...defaultParams };
    //Act
    withDomainBuilder(params)(ComponentMock);
    //Assert
    expect(defaultParams.utils.formatters.nameFunction).toBeCalledTimes(1);
  })

  it("Given valid params it must return a component with the name passed in `hocName`", () => {
    //Arrange
    const params = { ...defaultParams };
    //Act
    const WithDomainComponent = withDomainBuilder(params)(ComponentMock);
    // Assert
    expect(WithDomainComponent.name).toBe(defaultParams.hocName);
  });
});
