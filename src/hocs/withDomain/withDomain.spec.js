import { render } from "@testing-library/react";
import React from "react";
import { withDomainBuilder } from "./withDomain";

const ProviderMock = ({ children }) => <div>{children}</div>;
const ComponentMock = () => <div />;

const defaultParams = {
  utils: {
    formatters: {
      nameFunction: (name, body) => {
        return {
          [name](...args) {
            return body(...args);
          },
        }[name];
      },
    },
  },
  hocName: "hocName",
  context: {},
  domainAdapterPropName: "domainAdapterPropName",
  useContext: jest.fn(() => {}),
  components: {},
  Provider: ProviderMock,
  providerMetadata: {}
};

describe("@HOCS/withDomain", () => {
  it('Given valid params it must render without crashing', () => {
     // Arrange
     const params = {...defaultParams}
     // Act
     const WithDomainComponent = withDomainBuilder(params)(ComponentMock);
     const { container } = render(<WithDomainComponent/>)
     // Assert
     expect(container).toMatchSnapshot()
  })

  it("Given valid params it must return a function", () => {
    //Arrange
    const params = { ...defaultParams };
    //Act
    const withDomain = withDomainBuilder(params);
    //Assert
    expect(typeof withDomain).toBe("function");
  });

  it("Given valid params it must return a component with the name passed in `hocName`", () => {
    //Arrange
    const params = { ...defaultParams };
    //Act
    const WithDomainComponent = withDomainBuilder(params)(ComponentMock);
    // Assert
     expect(WithDomainComponent.name).toBe(defaultParams.hocName);
  });
});
