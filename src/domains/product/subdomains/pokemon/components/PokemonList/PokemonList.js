/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

export function PokemonList(props) {
  const {
    feedbackComponents,
    list,
    isLoading,
    error,
    handleAddToCart,
    productComponents,
    handleSetPokemons,
  } = props;

  const { Loader, ErrorComponent } = feedbackComponents;
  const { Card } = productComponents;

  useEffect(handleSetPokemons, []);

  if (isLoading) {
    return <Loader />;
  } else if (error) {
    return <ErrorComponent error={error} retry={handleSetPokemons} />;
  }

  return list.map((item) => (
    <Card key={item.id} onAddToCart={handleAddToCart} {...item} />
  ));
}
