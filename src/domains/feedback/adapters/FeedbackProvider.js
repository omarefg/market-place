import React, { createContext, useState } from "react";

export const FeedbackContext = createContext();

const portal = document.getElementById("portal");

export default function FeedbackProvider(props) {
  const { handlersBuilder, components, useCases, domains, children } = props;

  const [textModalContent, setTextModalContent] = useState("");

  const handlers = handlersBuilder({
    stateSetters: {
      setTextModalContent,
    },
    useCases,
    domains,
  });

  const { handleCloseTextModal } = handlers

  const { TextModal } = components;

  const value = {
    handlers,
    components,
    state: {
      textModalContent,
    },
    metadata: {
        portal
    }
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
