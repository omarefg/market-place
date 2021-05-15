/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { withDomainBuilder } from "hocs";
import utils from "utils";
import * as drivers from "drivers";
import { ProductProvider, ProductContext } from "./adapters";
import * as components from "./components";
import handlersBuilder from './handlers'
import useCasesBuilder from './useCases'
import productUtils from './utils'

export default withDomainBuilder({
  utils,
  hocName: "WithProductComponent",
  context: ProductContext,
  domainAdapterPropName: "useProduct",
  Provider: ProductProvider,
  useContext: useContext,
  components,
  handlersBuilder,
  useCases: useCasesBuilder({
    productUtils,
    drivers,
    utils
  })
});
