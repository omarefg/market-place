/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import * as drivers from "drivers";
import { withDomainBuilder } from "hocs";
import utils from "utils";
import { ShoppingCartProvider, ShoppingCartContext } from "./adapters";
import * as components from "./components";
import handlersBuilder from "./handlers";
import useCasesBuilder from "./useCases";
import assets from "./assets";

export default withDomainBuilder({
  Provider: ShoppingCartProvider,
  context: ShoppingCartContext,
  useContext: useContext,
  utils,
  hocName: "WithShoppingCartComponent",
  domainAdapterPropName: "useShoppingCart",
  useCases: useCasesBuilder({ drivers }),
  handlersBuilder,
  components,
  providerMetadata: { assets },
});
