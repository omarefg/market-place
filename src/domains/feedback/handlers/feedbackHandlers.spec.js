import {
  handleSetTextModalMessageBuilder,
  handleCloseTextModalBuilder,
} from "./feedbackHandlers";

describe("@domains/feedback/handlers", () => {
  describe("handleSetTextModalMessage", () => {
    it("Given valid params it must execute the setter call with the passed arguments", () => {
      // Arrange
      const params = {
        stateSetters: { setTextModalContent: jest.fn() },
      };
      const handleSetTextModalMessage =
        handleSetTextModalMessageBuilder(params);
      const messageMock = "messageMock";
      // Act
      handleSetTextModalMessage(messageMock);
      // Assert
      expect(params.stateSetters.setTextModalContent).toBeCalledTimes(1);
      expect(params.stateSetters.setTextModalContent).toBeCalledWith(
        messageMock
      );
    });
  });

  describe("handleCloseTextModal", () => {
    it("Given valid params it must execute the setter call with an empty string", () => {
      // Arrange
      const params = {
        stateSetters: { setTextModalContent: jest.fn() },
      };
      const handleCloseTextModal = handleCloseTextModalBuilder(params);
      // Act
      handleCloseTextModal();
      // Assert
      expect(params.stateSetters.setTextModalContent).toBeCalledTimes(1);
      expect(params.stateSetters.setTextModalContent).toBeCalledWith("");
    });
  });
});
