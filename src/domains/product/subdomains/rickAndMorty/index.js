/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import RickAndMortyProvider, { RickAndMortyContext } from "./adapters/RickAndMortyProvider";
import handlersBuilder from "./handlers/rickAndMortyHandlers";
import useCasesBuilder from "./useCases/rickAndMortyUseCases";
import rickAndMortyUtils from "./utils";
import { withDomainBuilder } from "hocs";
import utils from "utils";
import * as components from "./components";
import * as drivers from "drivers";

export default withDomainBuilder({
  utils,
  hocName: "WithRickAndMortyComponent",
  context: RickAndMortyContext,
  domainAdapterPropName: "useRickAndMorty",
  Provider: RickAndMortyProvider,
  useCases: useCasesBuilder({
    rickAndMortyUtils,
    drivers,
    utils,
  }),
  handlersBuilder,
  useContext: useContext,
  components,
});
