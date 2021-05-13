export function withDomainBuilder(params) {
  const {
    utils: {
      formatters: { nameFunction },
    },
    hocName,
    context,
    domainAdapterPropName,
    Provider,
    useCases,
    handlersBuilder,
    useContext,
    components
  } = params;

  return function withDomain(Component) {
    return nameFunction(hocName, (props) => {
      const childProps = {
        ...props,
        [domainAdapterPropName]: () => useContext(context),
      };

      const providerProps = {
        useCases,
        handlersBuilder,
        components,
        higherProps: props
      };

      return (
        <Provider {...providerProps}>
          <Component {...childProps} />
        </Provider>
      );
    });
  };
}
