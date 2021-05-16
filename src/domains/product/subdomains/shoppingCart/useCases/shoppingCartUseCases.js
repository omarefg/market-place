export function postBuyBuilder(params) {
  const {
    drivers: { apiClient },
  } = params;

  return function postBuy() {
    return apiClient.postBuy();
  };
}
