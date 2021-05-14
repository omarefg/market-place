import {
  handleSetTextModalMessageBuilder,
  handleCloseTextModalBuilder,
} from "./feedbackHandlers";

describe("@domains/feedback/handlers", () => {
  describe("handleSetTextModalMessage", () => {
    // Arrange
    const params = {
      stateSetters: { setTextModalContent: jest.fn() },
    };
    const handleSetTextModalMessage = handleSetTextModalMessageBuilder(params);
    const messageMock = "messageMock";
    // Act
    handleSetTextModalMessage(messageMock);
    // Assert
    expect(params.stateSetters.setTextModalContent).toBeCalledTimes(1);
    expect(params.stateSetters.setTextModalContent).toBeCalledWith(messageMock);
  });

  describe("handleCloseTextModal", () => {
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
