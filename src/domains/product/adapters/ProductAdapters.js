import React, { createContext, useState } from "react";

export const ProductContext = createContext();

const loadersKeys = {
  getAll: "getAll",
};

const errorsKeys = {
  getAll: "getAll",
};

export function ProductProvider(props) {
  const { components, children, useCases, handlersBuilder } = props;

  const [products, setProducts] = useState([]);
  const [loaders, setLoaders] = useState({});
  const [errors, setErrors] = useState({});

  const value = {
    state: {
      products,
      loaders,
      errors,
    },
    handlers: handlersBuilder({
      stateSetters: {
        setProducts,
        setLoaders,
        setErrors,
      },
      loadersKeys,
      errorsKeys,
      useCases
    }),
    components,
    metadata: {
      loadersKeys,
      errorsKeys,
    },
  };


  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
