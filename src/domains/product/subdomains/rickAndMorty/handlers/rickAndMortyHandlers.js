function handleSetRickAndMortyCharactersBuilder(params) {
  const {
    stateSetters: { setLoaders, setErrors, setRickAndMortyCharacters },
    useCases: { getAllRickAndMortyCharacters },
    loadersKeys,
    errorsKeys,
  } = params;
  return function handleSetRickAndMortyCharacters() {
    setLoaders((prevState) => ({ ...prevState, [loadersKeys.getAll]: true }));
    setErrors((prevState) => ({ ...prevState, [errorsKeys.getAll]: null }));
    getAllRickAndMortyCharacters()
      .then((res) => {
        setRickAndMortyCharacters(res);
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

export default function rickAndMortyHandlersBuilder(params) {
  return {
    handleSetRickAndMortyCharacters:
      handleSetRickAndMortyCharactersBuilder(params),
  };
}
