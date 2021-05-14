import apiClientBuilder from "./apiClient";

const responseMock = "Response Mock";
const clientMock = async () => {
  return {
    json: async () => {
      return responseMock;
    },
  };
};

describe("@drivers/apiClient", () => {
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
});
