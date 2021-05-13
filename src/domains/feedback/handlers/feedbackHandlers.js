function handleSetTextModalMessageBuilder(params) {
  const {
    stateSetters: { setTextModalContent },
  } = params;

  return function handleSetTextModalMessage(message) {
    setTextModalContent(message);
  };
}

function handleCloseTextModalBuilder(params) {
  const {
    stateSetters: { setTextModalContent },
  } = params;

  return function handleCloseTextModal() {
    setTextModalContent("");
  };
}

export default function shoppingCartHandlersBuilder(params) {
  return {
    handleSetTextModalMessage: handleSetTextModalMessageBuilder(params),
    handleCloseTextModal: handleCloseTextModalBuilder(params),
  };
}
