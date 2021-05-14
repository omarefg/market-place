import React, { createContext } from "react";

export const ProductContext = createContext();

export default function ProductProvider(props) {
  const { components, children } = props;

  const value = {
    components,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}