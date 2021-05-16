import {
  handleBuyClickBuilder,
  handleAddToCartBuilder,
} from "./shoppingCartHandlers";

export default function shoppingCartHandlersBuilder(params) {
  return {
    handleBuyClick: handleBuyClickBuilder(params),
    handleAddToCart: handleAddToCartBuilder(params),
  };
}
