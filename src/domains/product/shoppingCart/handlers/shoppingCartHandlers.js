function handleBuyClickBuilder(params) {
  const {
    stateSetters: { setLoaders, setErrorInBuy, setCart },
    useCases: { postBuy },
    domains: {
      feedback: {
        handlers: {
          handleSetTextModalMessage
        },
      },
    },
    loadersKeys,
  } = params;

  return function handleBuyClick() {
    setLoaders((prevState) => ({ ...prevState, [loadersKeys.postBuy]: true }));
    setErrorInBuy(null);
    postBuy()
    .then((res) => {
      handleSetTextModalMessage(res)
      setCart([]);
    })
    .catch((error) => {
        setErrorInBuy(error);
      })
      .finally(() => {
        setLoaders((prevState) => ({
          ...prevState,
          [loadersKeys.postBuy]: false,
        }));
      });
  };
}

function handleAddToCartBuilder(params) {
  const {
    stateSetters: { setCart }
  } = params;
  return function handleAddToCart(item) {
    setCart(prevState => [...prevState, item])
  }
}

export default function shoppingCartHandlersBuilder(params) {
  return {
    handleBuyClick: handleBuyClickBuilder(params),
    handleAddToCart: handleAddToCartBuilder(params),
  };
}
