import React, { createContext, useState } from "react";

export const RickAndMortyContext = createContext();

const loadersKeys = {
  getAll: "getAll",
};

const errorsKeys = {
  getAll: "getAll",
};

export default function RickAndMortyProvider(props) {
  const { handlersBuilder, components, useCases, children } = props;

  const [rickAndMortyCharacters, setRickAndMortyCharacters] = useState([]);
  const [loaders, setLoaders] = useState({});
  const [errors, setErrors] = useState({});

  const value = {
    state: {
      rickAndMortyCharacters,
      loaders,
      errors,
    },
    handlers: handlersBuilder({
      stateSetters: {
        setRickAndMortyCharacters,
        setLoaders,
        setErrors,
      },
      loadersKeys,
      errorsKeys,
      useCases
    }),
    components,
    metadata: {
      loadersKeys,
      errorsKeys,
    },
  };

  return (
    <RickAndMortyContext.Provider value={value}>{children}</RickAndMortyContext.Provider>
  );
}
