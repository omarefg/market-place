import React, { createContext } from "react";

export const LayoutContext = createContext();

export default function LayoutProvider(props) {
  const {
    components,
    children,
    higherProps: { useShoppingCart, useFeedback },
  } = props;
  const { Footer } = components;

  const {
    state: { cart, errors: shoppingCartErrors, loaders: shoppingCartLoaders },
    components: { BuyButton },
    handlers: { handleBuyClick },
    metadata: {
      loadersKeys: shoppingCartLoadersKeys,
      errorsKeys: shoppingCartErrorsKeys,
    },
  } = useShoppingCart();

  const { components: feedbackComponents } = useFeedback();
  const value = {};

  return (
    <LayoutContext.Provider value={value}>
      {children}
      <Footer>
        <BuyButton
          onClick={handleBuyClick}
          total={cart.length}
          disabled={!cart.length}
          error={shoppingCartErrors[shoppingCartErrorsKeys.postBuy]}
          isLoading={Boolean(shoppingCartLoaders[shoppingCartLoadersKeys.postBuy])}
          feedbackComponents={feedbackComponents}
        />
      </Footer>
    </LayoutContext.Provider>
  );
}
