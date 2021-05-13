import React from "react";

export default function Home(props) {
  const {
    useShoppingCart,
    useFeedback,
    useProduct,
    usePokemon,
    useRickAndMorty,
  } = props;

  const {
    handlers: { handleAddToCart },
  } = useShoppingCart();

  const { components: feedbackComponents } = useFeedback();

  const {
    state: { pokemons, loaders: pokemonLoaders, errors: pokemonErrors },
    components: { PokemonList },
    metadata: { loadersKeys: pokemonLoadersKeys, errorsKeys: pokemonErrorKeys },
    handlers: { handleSetPokemons },
  } = usePokemon();

  const {
    state: {
      rickAndMortyCharacters,
      loaders: rickAndMortyLoaders,
      errors: rickAndMortyErrors,
    },
    components: { RickAndMortyList },
    metadata: {
      loadersKeys: rickAndMortyLoadersKeys,
      errorsKeys: rickAndMortyErrorsKeys,
    },
    handlers: { handleSetRickAndMortyCharacters },
  } = useRickAndMorty();

  const { components: productComponents } = useProduct();
  const { CardsContainer } = productComponents;

  return (
    <>
      <CardsContainer title="Buy these pokemons">
        <PokemonList
          feedbackComponents={feedbackComponents}
          list={pokemons}
          isLoading={Boolean(pokemonLoaders[pokemonLoadersKeys.getAll])}
          error={pokemonErrors[pokemonErrorKeys.getAll]}
          handleAddToCart={handleAddToCart}
          productComponents={productComponents}
          handleSetPokemons={handleSetPokemons}
        />
      </CardsContainer>
      <CardsContainer title="Buy these Rick and Morty characters">
        <RickAndMortyList
          feedbackComponents={feedbackComponents}
          list={rickAndMortyCharacters}
          isLoading={Boolean(
            rickAndMortyLoaders[rickAndMortyLoadersKeys.getAll]
          )}
          error={rickAndMortyErrors[rickAndMortyErrorsKeys.getAll]}
          handleAddToCart={handleAddToCart}
          productComponents={productComponents}
          handleSetRickAndMortyCharacters={handleSetRickAndMortyCharacters}
        />
      </CardsContainer>
    </>
  );
}
