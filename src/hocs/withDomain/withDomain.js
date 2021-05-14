import React from 'react';

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
    components,
    providerMetadata
  } = params;

  return function withDomain(Component) {
    return nameFunction(hocName, (props) => {
      const childProps = {
        ...props,
        [domainAdapterPropName]: () => useContext(context),
      };

      const finalProviderProps = {
        providerMetadata,
        useCases,
        handlersBuilder,
        components,
        higherProps: props,
      };

      return (
        <Provider {...finalProviderProps}>
          <Component {...childProps} />
        </Provider>
      );
    });
  };
}
