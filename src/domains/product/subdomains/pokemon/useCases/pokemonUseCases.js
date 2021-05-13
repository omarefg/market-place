function getAllPokemonsBuilder(params) {
  const {
    pokemonUtils: {
      constants: {
        POKEMON_API_BASE_URL,
        ENDPOINTS: { pokemon },
        PRODUCT_TYPE,
      },
    },
    drivers: { apiClient },
    utils: {
      formatters: { capitalize },
    },
  } = params;
  return function getAllPokemons() {
    return apiClient.get(`${POKEMON_API_BASE_URL}${pokemon}`).then((res) => {
      const responseData = res.results.map((item) => {
        return apiClient.get(item.url).then((res) => ({
          caption: capitalize(res.name),
          img: res.sprites.front_default,
          id: res.id,
          alt: res.name,
          type: PRODUCT_TYPE,
        }));
      });
      return Promise.all(responseData);
    });
  };
}

export default function pokemonsUseCasesBuilder(params) {
  return {
    getAllPokemons: getAllPokemonsBuilder(params),
  };
}
