import React, { createContext, useState } from "react";

export const FeedbackContext = createContext();

export function FeedbackProvider(props) {
  const {
    handlersBuilder,
    components,
    useCases,
    children,
    providerMetadata,
  } = props;

  const [textModalContent, setTextModalContent] = useState("");

  const { portal } = providerMetadata;

  const handlers = handlersBuilder({
    stateSetters: {
      setTextModalContent,
    },
    useCases,
  });

  const { handleCloseTextModal } = handlers;

  const { TextModal } = components;

  const value = {
    handlers,
    components,
    state: {
      textModalContent,
    },
    metadata: {
      portal,
    },
  };

  return (
    <FeedbackContext.Provider value={value}>
      {children}
      <TextModal
        open={Boolean(textModalContent)}
        text={textModalContent}
        portal={portal}
        onClose={handleCloseTextModal}
      />
    </FeedbackContext.Provider>
  );
}
