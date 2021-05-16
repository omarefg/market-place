import { postBuyBuilder } from "./shoppingCartUseCases";

export default function shoppingCartUseCasesBuilder(params) {
  return {
    postBuy: postBuyBuilder(params),
  };
}
