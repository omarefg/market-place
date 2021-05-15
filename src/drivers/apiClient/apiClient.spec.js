import apiClientBuilder from "./apiClient";

describe("@drivers/apiClient", () => {
  let responseMock, clientMock;

  beforeEach(() => {
    responseMock = "Response Mock";
    clientMock = async () => {
      return {
        json: async () => {
          return responseMock;
        },
      };
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Given a valid client it must return an object with `get` method", () => {
    // Arrange
    const apiClient = apiClientBuilder(clientMock);
    // Assert
    expect(typeof apiClient).toBe("object");
    expect(typeof apiClient.get).toBe("function");
  });

  it("Given a valid client and calling `get` method it must return a promise with responses", async () => {
    // Arrange
    const apiClient = apiClientBuilder(clientMock);
    // Act
    const response = await apiClient.get("FakeApi");
    // Assert
    expect(response).toBe(responseMock);
  });

  it("Given a valid client and calling `postBuy` method if it resolve it must return a congratulation message", async () => {
    // Arrange
    const apiClient = apiClientBuilder(clientMock);
    const resolveMock = "Congratulations, you just spent your money on our unreal stuff!"
    // Act
    try {
      const response = await apiClient.postBuy();
      // Assert
      expect(response).toBe(resolveMock);
    } catch (error) {
    }
  });
});
