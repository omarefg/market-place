import React from "react";

export default function Home(props) {
  const { useShoppingCart, useFeedback, useProduct } = props;

  const {
    handlers: { handleAddToCart },
  } = useShoppingCart();

  const { components: feedbackComponents } = useFeedback();

  const {
    state: { products, loaders: productLoaders, errors: productErrors },
    components: productComponents,
    handlers: { handleSetProducts },
    metadata: {
      loadersKeys: productLoadersKeys,
      errorsKeys: productErrorsKeys,
    },
  } = useProduct();

  const { ProductsList } = productComponents;

  return (
    <ProductsList
      feedbackComponents={feedbackComponents}
      products={products}
      isLoading={Boolean(productLoaders[productLoadersKeys.getAll])}
      error={productErrors[productErrorsKeys.getAll]}
      handleAddToCart={handleAddToCart}
      productComponents={productComponents}
      handleSetProducts={handleSetProducts}
    />
  );
}
