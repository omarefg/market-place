import { useContext } from "react";
import { withDomainBuilder } from "hocs";
import { LayoutProvider, LayoutContext } from "./adapters";
import * as components from "./components";
import utils from "utils";

export default withDomainBuilder({
  utils,
  components,
  Provider: LayoutProvider,
  context: LayoutContext,
  hocName: "WithLayoutComponent",
  domainAdapterPropName: "useLayout",
  useContext: useContext,
});
