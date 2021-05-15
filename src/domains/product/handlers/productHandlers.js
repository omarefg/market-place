export function handleSetProductsBuilder(params) {
    const {
      stateSetters: { setLoaders, setErrors, setProducts },
      useCases: { getAllProducts },
      loadersKeys,
      errorsKeys,
    } = params;
    return function handleSetProducts() {
      setLoaders((prevState) => ({ ...prevState, [loadersKeys.getAll]: true }));
      setErrors((prevState) => ({ ...prevState, [errorsKeys.getAll]: null }));
      getAllProducts()
        .then((res) => {
          setProducts(res);
        })
        .catch((error) => {
          setErrors((prevState) => ({
            ...prevState,
            [errorsKeys.getAll]: error.message,
          }));
        })
        .finally(() => {
          setLoaders((prevState) => ({
            ...prevState,
            [loadersKeys.getAll]: false,
          }));
        });
    };
  }