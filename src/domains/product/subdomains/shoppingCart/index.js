/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import ShoppingCartProvider, { ShoppingCartContext } from "./adapters/ShoppingCartProvider";
import * as components from "./components";
import handlersBuilder from "./handlers/shoppingCartHandlers";
import useCasesBuilder from "./useCases/shoppingCartUseCases";
import * as drivers from "drivers";
import { withDomainBuilder } from "hocs";
import utils from "utils";

export default withDomainBuilder({
  Provider: ShoppingCartProvider,
  context: ShoppingCartContext,
  useContext: useContext,
  utils,
  hocName: "WithShoppingCartComponent",
  domainAdapterPropName: "useShoppingCart",
  useCases: useCasesBuilder({ drivers }),
  handlersBuilder,
  components
});
