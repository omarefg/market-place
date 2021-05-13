import React, { createContext, useState } from "react";

export const PokemonContext = createContext();

const loadersKeys = {
  getAll: "getAll",
};

const errorsKeys = {
  getAll: "getAll",
};

export default function PokemonProvider(props) {
  const { handlersBuilder, components, useCases, children } = props;

  const [pokemons, setPokemons] = useState([]);
  const [loaders, setLoaders] = useState({});
  const [errors, setErrors] = useState({});

  const value = {
    state: {
      pokemons,
      loaders,
      errors,
    },
    handlers: handlersBuilder({
      stateSetters: {
        setPokemons,
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
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
}
