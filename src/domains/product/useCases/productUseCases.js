export function getAllPokemonsBuilder(params) {
  const {
    productUtils: {
      constants: {
        POKEMON_API_BASE_URL,
        ENDPOINTS: { pokemon },
        POKEMON_PRODUCT_TYPE,
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
          type: POKEMON_PRODUCT_TYPE,
        }));
      });
      return Promise.all(responseData);
    });
  };
}

export function getAllRickAndMortyCharactersBuilder(params) {
  const {
    productUtils: {
      constants: {
        RICK_AND_MORTY_API_BASE_URL,
        ENDPOINTS: { character },
        RICK_AND_MORTY_PRODUCT_TYPE,
      },
    },
    drivers: { apiClient },
  } = params;
  return function getAllRickAndMortyCharacters() {
    return apiClient
      .get(`${RICK_AND_MORTY_API_BASE_URL}${character}`)
      .then((res) =>
        res.results.map((item) => ({
          caption: item.name,
          img: item.image,
          id: item.id,
          alt: item.name,
          type: RICK_AND_MORTY_PRODUCT_TYPE,
        }))
      );
  };
}

export function getAllProductsBuilder(params) {
  const getAllPokemons = getAllPokemonsBuilder(params);
  const getAllRickAndMortyCharacters = getAllRickAndMortyCharactersBuilder(params);

  return async function getAllProducts() {
    try {
      const pokemons = await getAllPokemons();
      const rickAndMortyCharacters = await getAllRickAndMortyCharacters();

      return [
        {
          title: "Buy these pokemons",
          content: pokemons,
        },
        {
          title: "Buy these Rick and Morty characters",
          content: rickAndMortyCharacters,
        },
      ];
    } catch (error) {
      throw error;
    }
  };
}
