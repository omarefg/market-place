export function handleSetTextModalMessageBuilder(params) {
  const {
    stateSetters: { setTextModalContent },
  } = params;

  return function handleSetTextModalMessage(message) {
    setTextModalContent(message);
  };
}

export function handleCloseTextModalBuilder(params) {
  const {
    stateSetters: { setTextModalContent },
  } = params;

  return function handleCloseTextModal() {
    setTextModalContent("");
  };
}
