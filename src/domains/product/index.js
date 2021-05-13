import { useContext } from "react";
import { withDomainBuilder } from "hocs";
import utils from "utils";
import ProductProvider, { ProductContext } from "./adapters/ProductProvider";
import * as components from "./components";

export default withDomainBuilder({
  utils,
  hocName: "WithProductComponent",
  context: ProductContext,
  domainAdapterPropName: "useProduct",
  Provider: ProductProvider,
  useContext: useContext,
  components,
});
