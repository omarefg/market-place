function getAllRickAndMortyCharactersBuilder(params) {
  const {
    rickAndMortyUtils: {
      constants: {
        RICK_AND_MORTY_API_BASE_URL,
        ENDPOINTS: { character },
        PRODUCT_TYPE,
      },
    },
    drivers: { apiClient }
  } = params;
  return function getAllRickAndMortyCharacters() {
    return apiClient
      .get(`${RICK_AND_MORTY_API_BASE_URL}${character}`)
      .then((res) => res.results.map(item => ({
        caption: item.name,
        img: item.image,
        id: item.id,
        alt: item.name,
        type: PRODUCT_TYPE,
      })));
  };
}

export default function rickAndMortyUseCasesBuilder(params) {
  return {
    getAllRickAndMortyCharacters: getAllRickAndMortyCharactersBuilder(params),
  };
}
