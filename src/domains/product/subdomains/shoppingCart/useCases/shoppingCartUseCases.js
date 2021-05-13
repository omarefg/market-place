function postBuyBuilder(params) {
  const {
    drivers: { apiClient },
  } = params;

  return function postBuy() {
    return apiClient.postBuy();
  };
}

export default function shoppingCartUseCasesBuilder(params) {
  return {
    postBuy: postBuyBuilder(params),
  };
}
