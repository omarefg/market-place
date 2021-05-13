import React, { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

const loadersKeys = {
  postBuy: 'postBuy'
};

export default function ShoppingCartProvider(props) {
  const {
    handlersBuilder,
    components,
    useCases,
    children,
    higherProps
  } = props;

  const [cart, setCart] = useState([]);
  const [loaders, setLoaders] = useState({});
  const [errorInBuy, setErrorInBuy] = useState(null);

  const {useFeedback} = higherProps

  const value = {
    handlers: handlersBuilder({
      stateSetters: {
        setCart,
        setLoaders,
        setErrorInBuy,
      },
      useCases,
      domains: {
        feedback: useFeedback()
      },
      loadersKeys
    }),
    components,
    state: {
      cart,
      loaders,
      errorInBuy
    },
    metadata: {
      loadersKeys
    }
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
