import { useContext } from "react";
import { withDomainBuilder } from "hocs";
import utils from "utils";

import * as components from "./components";
import { FeedbackProvider, FeedbackContext } from "./adapters";
import handlersBuilder from "./handlers";

export default withDomainBuilder({
  utils,
  hocName: "WithFeedbackComponent",
  context: FeedbackContext,
  domainAdapterPropName: "useFeedback",
  Provider: FeedbackProvider,
  handlersBuilder,
  useContext: useContext,
  components,
  providerMetadata: {
    portal: document.getElementById("portal"),
  },
});
