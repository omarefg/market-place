/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

export function ProductsList(props) {
  const {
    feedbackComponents,
    products,
    isLoading,
    error,
    handleAddToCart,
    productComponents,
    handleSetProducts,
  } = props;

  const { Loader, ErrorComponent } = feedbackComponents;
  const { Card, CardsContainer } = productComponents;

  useEffect(handleSetProducts, []);

  if (isLoading) {
    return <Loader />;
  } else if (error) {
    return <ErrorComponent error={error} retry={handleSetProducts} />;
  }

  return products.map(({title, content}) => (
    <CardsContainer title={title} key={title}>
      {content.map(item => (
        <Card key={item.id} onAddToCart={handleAddToCart} {...item} />
      ))}
    </CardsContainer>
  ));
}
