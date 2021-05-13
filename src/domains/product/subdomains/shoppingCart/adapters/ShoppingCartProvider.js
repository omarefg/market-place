import React, { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

const loadersKeys = {
  postBuy: "postBuy",
};

const errorsKeys = {
  postBuy: "postBuy",
}

export default function ShoppingCartProvider(props) {
  const { handlersBuilder, components, useCases, children, higherProps } = props;

  const [cart, setCart] = useState([]);
  const [loaders, setLoaders] = useState({});
  const [errors, setErrors] = useState({});

  const { useFeedback } = higherProps;

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
      errorsKeys
    }),
    components,
    state: {
      cart,
      loaders,
      errors,
    },
    metadata: {
      loadersKeys,
      errorsKeys
    },
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
