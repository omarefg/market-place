import React from "react";
import { render } from "@testing-library/react";
import { withDomainBuilder } from "./withDomain";

const ProviderMock = ({ children }) => <div>{children}</div>;
const ComponentMock = () => <div />;

const defaultParams = {
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
  Provider: render(<ProviderMock />),
};

describe("@HOCS/withDomain", () => {
  it("Given valid params it must return a function", () => {
    //Arrange
    const params = { ...defaultParams };
    //Act
    const withDomain = withDomainBuilder(params);
    //Assert
    expect(typeof withDomain).toBe("function");
  });

  it("Given valid params it must call nameFunction", () => {
    //Arrange
    const params = { ...defaultParams };
    //Act
    withDomainBuilder(params)(ComponentMock);
    // Assert
     expect(defaultParams.utils.formatters.nameFunction).toBeCalledTimes(1);
  });
});
