import { handleSetProductsBuilder } from "./productHandlers";

export default function pokemonHandlersBuilder(params) {
  return {
    handleSetProducts: handleSetProductsBuilder(params),
  };
}
