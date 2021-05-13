/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import PokemonProvider, { PokemonContext } from "./adapters/PokemonProvider";
import handlersBuilder from "./handlers/pokemonHandlers";
import useCasesBuilder from "./useCases/pokemonUseCases";
import pokemonUtils from "./utils";
import { withDomainBuilder } from "hocs";
import utils from "utils";
import * as components from "./components";
import * as drivers from "drivers";

export default withDomainBuilder({
  utils,
  hocName: "WithPokemonComponent",
  context: PokemonContext,
  domainAdapterPropName: "usePokemon",
  Provider: PokemonProvider,
  useCases: useCasesBuilder({
    pokemonUtils,
    drivers,
    utils
  }),
  handlersBuilder,
  useContext: useContext,
  components,
});
