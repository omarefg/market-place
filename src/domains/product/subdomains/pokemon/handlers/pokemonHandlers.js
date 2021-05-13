function handleSetPokemonsBuilder(params) {
  const {
    stateSetters: { setLoaders, setErrors, setPokemons },
    useCases: { getAllPokemons },
    loadersKeys,
    errorsKeys,
  } = params;
  return function handleSetPokemons() {
    setLoaders((prevState) => ({ ...prevState, [loadersKeys.getAll]: true }));
    setErrors((prevState) => ({ ...prevState, [errorsKeys.getAll]: null }));
    getAllPokemons()
      .then((res) => {
        setPokemons(res);
      })
      .catch((error) => {
        setErrors((prevState) => ({
          ...prevState,
          [errorsKeys.getAll]: error.message,
        }));
      })
      .finally(() => {
        setLoaders((prevState) => ({
          ...prevState,
          [loadersKeys.getAll]: false,
        }));
      });
  };
}

export default function pokemonHandlersBuilder(params) {
  return {
    handleSetPokemons: handleSetPokemonsBuilder(params),
  };
}
