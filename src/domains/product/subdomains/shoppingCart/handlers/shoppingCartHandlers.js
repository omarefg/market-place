function handleBuyClickBuilder(params) {
  const {
    stateSetters: { setLoaders, setErrors, setCart },
    useCases: { postBuy },
    domains: {
      feedback: {
        handlers: {
          handleSetTextModalMessage
        },
      },
    },
    loadersKeys,
    errorsKeys
  } = params;

  return function handleBuyClick() {
    setLoaders((prevState) => ({ ...prevState, [loadersKeys.postBuy]: true }));
    setErrors((prevState) => ({ ...prevState, [errorsKeys.postBuy]: null }));
    postBuy()
    .then((res) => {
      handleSetTextModalMessage(res)
      setCart([]);
    })
    .catch((error) => {
      setErrors((prevState) => ({ ...prevState, [errorsKeys.postBuy]: error }));
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
