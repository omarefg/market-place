import React, { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

const loadersKeys = {
  postBuy: "postBuy",
};

const errorsKeys = {
  postBuy: "postBuy",
};

export function ShoppingCartProvider(props) {
  const {
    handlersBuilder,
    components,
    useCases,
    children,
    higherProps,
    providerMetadata,
  } = props;

  const [cart, setCart] = useState([]);
  const [loaders, setLoaders] = useState({});
  const [errors, setErrors] = useState({});

  const { useFeedback } = higherProps;
  const { assets } = providerMetadata;

  const value = {
    handlers: handlersBuilder({
      stateSetters: {
        setCart,
        setLoaders,
        setErrors,
      },
      useCases,
      domains: {
        feedback: useFeedback(),
      },
      loadersKeys,
      errorsKeys,
    }),
    components,
    state: {
      cart,
      loaders,
      errors,
    },
    metadata: {
      loadersKeys,
      errorsKeys,
      assets
    },
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
