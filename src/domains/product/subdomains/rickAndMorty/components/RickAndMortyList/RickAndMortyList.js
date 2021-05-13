/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

export function RickAndMortyList(props) {
  const {
    feedbackComponents,
    list,
    isLoading,
    error,
    handleAddToCart,
    productComponents,
    handleSetRickAndMortyCharacters,
  } = props;

  const { Loader, ErrorComponent } = feedbackComponents;
  const { Card } = productComponents;

  useEffect(handleSetRickAndMortyCharacters, []);

  if (isLoading) {
    return <Loader />;
  } else if (error) {
    return <ErrorComponent error={error} retry={handleSetRickAndMortyCharacters} />;
  }

  return list.map((item) => (
    <Card key={item.id} onAddToCart={handleAddToCart} {...item} />
  ));
}
